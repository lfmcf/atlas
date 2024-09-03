/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useRef, useState } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import Select from 'react-select';
import { useForm, router } from '@inertiajs/react';
import { chproduct, eunatcountry, eunatproduct, formattingRegion, gcccountry, gccproduct, publishingRegion } from '../../../../Pages/Lab/MetaDataList';
import MySelect from '../../../../Components/Myselect';
import axios from 'axios';
import { components } from "react-select";
import makeAnimated from "react-select/animated";
import $ from 'jquery'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AddProduct from '../add-product/addProduct';
import { Modal } from 'react-bootstrap'
const MySwal = withReactContent(Swal)

const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

const MultiValue = props => (
    <components.MultiValue {...props}>
        <span>{props.data.label}</span>
    </components.MultiValue>
);
const animatedComponents = makeAnimated();

type FormValues = {
    form: any,
    region: any,
    coreDoc: boolean,
    procedure: any,
    product_family: any,
    product_family_: any,
    product: any,
    country: any
}


const initialProductState = {
    region_p: "",
    procedure_p: "",
    product_p: ""
};



const InviteUsers = ({ show, setShow, setShowSec, initialState, setState, form_, region_, procedure_, product_, country_, update }) => {

    const [productList, setProductList] = useState(Object);
    const [countryList, setCountryList] = useState(Object);
    const [compselect, setCompselect] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingPr, setIsLoadingPr] = useState(false);
    const [selectedCheckbox, setSelectedCheckbox] = useState('LifeCycle');

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        if (selectedCheckbox === name) {
            setSelectedCheckbox(null); // Uncheck if the same checkbox is clicked again
        } else {
            setSelectedCheckbox(name);
        }
    };


    const SelectMenuButton = (props) => {
        return (
            <components.MenuList  {...props}>
                {props.children}
                <button className='btn btn-sm bn-info'
                    // data-bs-toggle='modal'
                    // data-bs-target='#add_product'
                    onClick={() => setShowSec(true)}
                >
                    Add new product
                </button>
            </components.MenuList >
        )
    }

    const { data, setData, get, processing, errors, clearErrors, reset } = useForm<FormValues>({
        form: '',
        region: '',
        coreDoc: false,
        procedure: '',
        product_family: '',
        product_family_: '',
        product: '',
        country: ''
    })

    const handleSelectChange = (e: any, name: any) => {
        setData(name, e)
    }

    const handleSelectCountryChange = (e, name) => {

        if (e == null) {
            setData({ ...data, 'product': '', 'country': '' })
        } else {
            setData(name, e)

        }
    }

    const handleMyselectChange = (selected) => {
        setData('country', selected)
    }

    const handleMyselectChange_ = (selected) => {

        setState(prevState => ({ ...prevState, ['country_']: selected }));
    }

    const handleSelectProductChange = (e, name) => {
        setData(name, e)
        if (data.procedure && data.procedure.value == 'Nationale' && data.region && data.region.value == 'CH') {
            setCountryList([{ label: 'Switzerland', value: 'Switzerland' }])
        } else if (data.procedure && data.procedure.value == 'Mutual Recognition' || data.procedure.value == 'Decentralized') {
            setCountryList(eunatcountry)
        } else {
            setIsLoading(true)
            axios.post('getProductOrCountry', { 'procedure': data.procedure.value, 'product': e.value, }).then(res => {
                var dt = res.data.map(ct => {
                    return { label: ct.country, value: ct.country, code: ct.code }
                })

                setCountryList(dt)
                setData({ ...data, 'product': e, country: '' })

                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)

            })
        }
    }

    const handleSelectProductChange_ = (e) => {
        setState(prevState => ({ ...prevState, ['product_']: e }));

        if (procedure_ && procedure_.value == 'Nationale') {
            if (region_ && region_.value == "EU") {
                setCountryList(eunatcountry)
            } else if (region_ && region_.value == "GCC") {
                setCountryList(gcccountry)
            } else {
                setCountryList([{ label: "Switzerland", value: "Switzerland" }])
            }
        }
    }

    const handleNavigate = (ReqType) => {

        if (ReqType == "formatting") {
            router.visit('/formatting-initiate', {
                method: 'get',
                data: { form: data.form.value, region: data.region.value, coreDoc: data.coreDoc },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
        } else if (ReqType == "publishing") {

            router.visit('/publishing-initiate', {
                method: 'get',
                data: { form: data.form.value, region: data.region.value, procedure: data.procedure.value, product: data.product.value, country: data.country },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
        }
        handleClose()
    }

    const handleLifeCycle = () => {

        router.visit('/publishing-initiate_', {
            method: 'get',
            data: { form: form_.value, region: region_.value, procedure: procedure_.value, product: product_.value, country: country_ },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })

        handleClose()
    }

    useEffect(() => {
        setData({ ...data, 'procedure': '', 'product': '', 'country': '' })

        if (data.region && data.region.value == 'GCC') {
            setData('procedure', { label: 'Nationale', value: 'Nationale' });
            setIsLoadingPr(true)
            axios.post('getProductname', { 'region': data.region.value, 'procedure': 'Nationale' }).then(res => {
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val, value: val })
                    })
                    setProductList(myarr);
                }
            })
            setTimeout(() => {
                setIsLoadingPr(false)
            }, 1000)
            setCountryList(gcccountry);
        } else if (data.region && data.region.value == 'CH') {
            setData('procedure', { label: 'Nationale', value: 'Nationale' });
            setIsLoadingPr(true)
            axios.post('getProductname', { 'region': data.region.value, 'procedure': 'Nationale' }).then(res => {
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val, value: val })
                    })
                    setProductList(myarr);
                }
            })

            setTimeout(() => {
                setIsLoadingPr(false)
            }, 1000)

        }

    }, [data.region])

    useEffect(() => {
        if (region_ && region_.value == 'GCC') {

            setState(prevState => ({ ...prevState, ['procedure_']: { label: 'Nationale', value: 'Nationale' } }));

            axios.post('getProductname', { 'region': region_.value, 'procedure': 'Nationale' }).then(res => {
                console.log(res)
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val, value: val })
                    })
                    setProductList(myarr);
                }
            })
            setCountryList(gcccountry);
            setCompselect(false)
        } else if (region_ && region_.value == 'CH') {
            setState(prevState => ({ ...prevState, ['procedure_']: { label: 'Nationale', value: 'Nationale' } }));

            axios.post('getProductname', { 'region': region_.value, 'procedure': 'Nationale' }).then(res => {
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val, value: val })
                    })
                    setProductList(myarr);
                }
            })
            setCountryList([{ label: 'Switzerland', value: 'Switzerland' }])
            setCompselect(false)
        }
    }, [region_, update])

    useEffect(() => {
        setData({ ...data, product: '', country: '' })

        if (data.region && data.region.value == 'EU' && data.procedure && data.procedure.value == 'Decentralized' || data.procedure && data.procedure.value == 'Mutual Recognition') {
            setIsLoadingPr(true)
            axios.post('getProductname', { 'region': data.region.value, 'procedure': data.procedure.value, 'product_family': data.product_family.value }).then(res => {
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val, value: val })
                    })
                    setProductList(myarr);
                }
            })
            setCountryList(eunatcountry)
            setCompselect(true)
            setTimeout(() => {
                setIsLoadingPr(false)
            }, 1000)

        } else if (data.region && data.region.value == 'EU' && data.procedure && data.procedure.value == 'Nationale' || data.procedure && data.procedure.value == 'Centralized') {
            setIsLoadingPr(true)
            axios.post('getProductname', { 'region': data.region.value, 'procedure': 'Nationale', 'product_family': data.product_family.value }).then(res => {
                console.log(res)
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val, value: val })
                    })
                    setProductList(myarr);
                }
            })

            setCompselect(false)
            setTimeout(() => {
                setIsLoadingPr(false)
            }, 1000)
        }
    }, [data.procedure])

    useEffect(() => {
        setData({ ...data, product: '', country: '' })

        if (data.region && data.region.value == 'EU' && data.procedure && data.procedure.value == 'Decentralized' || data.procedure && data.procedure.value == 'Mutual Recognition') {
            setIsLoadingPr(true)
            axios.post('getProductname', { 'region': data.region.value, 'procedure': data.procedure.value, 'product_family': data.product_family.value }).then(res => {
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val, value: val })
                    })
                    setProductList(myarr);
                }
            })
            setCountryList(eunatcountry)
            setCompselect(true)
            setTimeout(() => {
                setIsLoadingPr(false)
            }, 1000)

        } else if (data.region && data.region.value == 'EU' && data.procedure && data.procedure.value == 'Nationale' || data.procedure && data.procedure.value == 'Centralized') {
            setIsLoadingPr(true)
            axios.post('getProductname', { 'region': data.region.value, 'procedure': 'Nationale', 'product_family': data.product_family.value }).then(res => {
                console.log(res)
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val, value: val })
                    })
                    setProductList(myarr);
                }
            })

            setCompselect(false)
            setTimeout(() => {
                setIsLoadingPr(false)
            }, 1000)
        }
    }, [data.product_family])

    useEffect(() => {
        setData({ ...data, product: '', country: '' })

        if (data.region && data.region.value == 'EU' && data.procedure && data.procedure.value == 'Decentralized' || data.procedure && data.procedure.value == 'Mutual Recognition') {
            setIsLoadingPr(true)
            axios.post('getProductname_', { 'region': data.region.value, 'procedure': data.procedure.value, 'product_family': data.product_family.value }).then(res => {
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val, value: val })
                    })
                    setProductList(myarr);
                }
            })
            setCountryList(eunatcountry)
            setCompselect(true)
            setTimeout(() => {
                setIsLoadingPr(false)
            }, 1000)

        } else if (region_ && region_.value == 'EU' && procedure_ && procedure_.value == 'Nationale' || procedure_ && procedure_.value == 'Centralized') {
            setIsLoadingPr(true)

            axios.post('getProductname_', { 'region': region_.value, 'procedure': 'Nationale', 'product_family_': data.product_family_.value }).then(res => {
                console.log(res)
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val, value: val })
                    })
                    setProductList(myarr);
                }
            })

            setCompselect(false)
            setTimeout(() => {
                setIsLoadingPr(false)
            }, 1000)
        }
    }, [data.product_family_])


    useEffect(() => {
        if (region_ && region_.value == 'EU' && procedure_ && procedure_.value == 'Decentralized') {

            axios.post('getProductname_', { 'region': region_.value, 'procedure': 'Decentralized' }).then(res => {
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val.name, value: val.name })
                    })
                    setProductList(myarr);
                }
            })
            setCountryList(eunatcountry)
            setCompselect(true)
        } else if (region_ && region_.value == 'EU' && procedure_ && procedure_.value == 'Mutual Recognition') {

            axios.post('getProductname_', { 'region': region_.value, 'procedure': 'Mutual Recognition' }).then(res => {
                if (res.status == 200) {
                    var myarr = []
                    res.data.map(val => {
                        myarr.push({ label: val, value: val })
                    })
                    setProductList(myarr);
                }
            })
            setCountryList(eunatcountry)
            setCompselect(true)
        } else if (region_ && region_.value == 'EU' && procedure_ && procedure_.value == 'Nationale' || procedure_ && procedure_.value == 'Centralized') {
            console.log(region_.value, procedure_.value)
            // axios.post('getProductname', { 'region': region_.value, 'procedure': 'Nationale' }).then(res => {
            //     if (res.status == 200) {
            //         var myarr = []
            //         res.data.map(val => {
            //             myarr.push({ label: val, value: val })
            //         })
            //         setProductList(myarr);
            //     }
            // })
            setCountryList(eunatcountry)
            setCompselect(false)
        }
    }, [procedure_])

    useEffect(() => {
        if (update.rerender) {
            setProductList([{ label: update.pName, value: update.pName }])
            setState(prevState => ({ ...prevState, ['product_']: { label: update.pName, value: update.pName } }));
        }

    }, [update.rerender])

    const onChange = (e, name) => {

        setState(prevState => ({ ...prevState, [name]: e }));
    };

    const handleClose = () => {
        reset()
        setState({ ...initialState });
        setShow(false)
    }

    return (
        <Modal show={show} onHide={handleClose}>

            <div className='modal-content '>
                <div className='modal-header pb-0 border-0 justify-content-end'>
                    <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
                        <KTIcon iconName='cross' className='fs-1' />
                    </div>
                </div>
                <div className='modal-body scroll-y pt-0 pb-15'>
                    <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                data-bs-toggle="tab"
                                data-toggle="tooltip"
                                title="Selct Initial Request For New Marketing Authorization Application"
                                href="#kt_tab_pane_1"
                            >
                                Formatting
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-toggle="tooltip"
                                title='For Formatting and Lifecycle maintenance Requests (ex: variation, RtQ…)'
                                href="#kt_tab_pane_2"
                            >
                                Publishing
                            </a>
                        </li>

                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade active show"
                            id="kt_tab_pane_1"
                            role="tabpanel"
                        >
                            <div className='my-4'>
                                <label className="form-label" data-toggle='tooltip' title='Select the region for the dossier to be formatted'>Region</label>
                                <Select
                                    options={data.form && data.form.value == 'Publishing' ? publishingRegion : formattingRegion}
                                    name="region"
                                    onChange={(e) => handleSelectChange(e, 'region')}
                                    placeholder='Region'
                                    isClearable
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                    value={data.region}
                                />
                            </div>
                            <div className='my-4' style={{ display: 'flex', alignItems: 'center' }}>
                                <label className='form-label my-0 me-4' data-toggle='tooltip' title='Specify if the dossier is Core Documentation'>Core doc</label>
                                <label className='form-check form-switch form-check-custom form-check-solid'>
                                    <input className='form-check-input' type='checkbox' value='1' />
                                </label>

                            </div>
                            <div className='d-flex mt-5 justify-content-end'>
                                <button className="btn btn-sm btn-light-primary me-3" onClick={handleClose}>Cancel</button>
                                <button className="btn btn-sm btn-primary" data-bs-dismiss='modal' onClick={() => handleNavigate('formatting')}>Validate</button>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                            <div className='mt-5 my-4'>
                                <div className='d-flex align-items-center'>
                                    <label className='form-check form-check-custom form-check-solid me-10'>
                                        <input className='form-check-input h-20px w-20px' type='checkbox' name='LifeCycle' checked={selectedCheckbox === 'LifeCycle'} onChange={handleCheckboxChange} />
                                        <span className='form-check-label fw-semibold'>LifeCycle</span>
                                    </label>
                                    <label className='form-check form-check-custom form-check-solid me-10'>
                                        <input className='form-check-input h-20px w-20px' type='checkbox' name='InitialRequest' checked={selectedCheckbox === 'InitialRequest'} onChange={handleCheckboxChange} />
                                        <span className='form-check-label fw-semibold'>Initial Request</span>
                                    </label>
                                </div>
                            </div>
                            {selectedCheckbox === 'LifeCycle' ?
                                <>
                                    <div className='my-4'>
                                        <label className="form-label" data-toggle='tooltip' title='Select the region for the dossier to be formatted'>Region</label>
                                        <Select
                                            options={publishingRegion}
                                            name="region"
                                            onChange={(e) => handleSelectChange(e, 'region')}
                                            placeholder='Region'
                                            isClearable
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                            value={data.region}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className='form-label' data-toggle='tooltip' title='Select the concerned procedure  for the Lifecyle Publishing'>Procedure type</label>
                                        <Select options={[
                                            { label: 'Nationale', value: 'Nationale' },
                                            { label: 'Centralized', value: 'Centralized' },
                                            { label: 'Decentralized', value: 'Decentralized' },
                                            { label: 'Mutual Recognition', value: 'Mutual Recognition' },
                                        ]}
                                            name="procedure"
                                            onChange={(e) => handleSelectChange(e, 'procedure')}
                                            placeholder='Procedure type'
                                            isClearable
                                            value={data.procedure}
                                            isDisabled={data.region && data.region.value == 'GCC' || data.region && data.region.value == 'CH' ? true : false}
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                        />
                                    </div>
                                    <div className='my-4' style={{ display: data.procedure && data.procedure.value == 'Nationale' && data.region && data.region.value == 'EU' ? 'block' : 'none' }}>
                                        <label className='form-label' data-toggle='tooltip' title='Select the product family for the Lifecycle Publishing'>Product family</label>
                                        <Select options={[
                                            { label: 'Staloral', value: 'Staloral' },
                                            { label: 'Venins', value: 'Venins' },
                                            { label: 'Alustal', value: 'Alustal' },
                                            { label: 'Alyostal', value: 'Alyostal' },
                                            { label: 'Diluant', value: 'Diluant' },
                                            { label: 'ORALAIR', value: 'ORALAIR' },
                                        ]}
                                            name='product_family'
                                            onChange={(e) => handleSelectChange(e, 'product_family')}
                                            placeholder='Product family'
                                            isClearable
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                        />
                                    </div>
                                    <div className='my-4' >
                                        <label className='form-label' data-toggle='tooltip' title='Select the concerned Product for the Lifecycle Publishing '>Product</label>
                                        <Select options={productList}
                                            name="product"
                                            onChange={(e) => handleSelectProductChange(e, 'product')}
                                            placeholder={isLoadingPr ? 'Loading...' : 'Product'}
                                            value={data.product}
                                            isLoading={isLoadingPr}
                                            isClearable
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className='form-label' data-toggle='tooltip' title='Select a country for the Lifecycle Publishing. For NP/CP, choose one country; for DCP/MRP, select one or more countries'>Country</label>
                                        {compselect ?
                                            <MySelect
                                                options={countryList ? [...countryList] : ''}
                                                isMulti
                                                closeMenuOnSelect={false}
                                                hideSelectedOptions={false}
                                                components={{ Option, MultiValue, animatedComponents }}
                                                onChange={handleMyselectChange}
                                                value={data.country}
                                                allowSelectAll={true}
                                                menuPortalTarget={document.body}
                                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                            />
                                            : <Select options={countryList}
                                                onChange={(e) => handleSelectCountryChange(e, 'country')}
                                                value={data.country}
                                                menuPortalTarget={document.body}
                                                isClearable
                                                isLoading={isLoading}
                                                placeholder={isLoading ? 'Loading...' : 'Country'}
                                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                            />}
                                    </div>
                                    <div className='d-flex mt-5 justify-content-end'>
                                        <button className="btn btn-sm btn-light-primary me-3" onClick={handleClose}>Cancel</button>
                                        <button className="btn btn-sm btn-primary" data-bs-dismiss='modal' onClick={() => handleNavigate('publishing')}>Validate</button>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='my-4' >
                                        <label className="form-label" data-toggle="tooltip" title='Select the concerned region for the Initial Publishing'>Region</label>
                                        <Select
                                            options={publishingRegion}
                                            name="region_"
                                            onChange={(e) => onChange(e, 'region_')}
                                            placeholder='Region'
                                            isClearable
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                            value={region_}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className='form-label' data-toggle="tooltip" title='Select the concerned procedure  for the Initial Publishing'>Procedure type</label>
                                        <Select options={[
                                            { label: 'Nationale', value: 'Nationale' },
                                            { label: 'Centralized', value: 'Centralized' },
                                            { label: 'Decentralized', value: 'Decentralized' },
                                            { label: 'Mutual Recognition', value: 'Mutual Recognition' },
                                        ]}
                                            name="procedure_"
                                            onChange={(e) => onChange(e, 'procedure_')}
                                            placeholder='Procedure type'
                                            isClearable
                                            value={procedure_}
                                            isDisabled={region_ && region_.value == 'GCC' || region_ && region_.value == 'CH' ? true : false}
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                        />
                                    </div>
                                    <div className='my-4' style={{ display: procedure_ && procedure_.value == 'Nationale' && region_ && region_.value == 'EU' ? 'block' : 'none' }}>
                                        <label className='form-label' data-toggle='tooltip' title='Select the product family for the Initial Request Publishing'>Product family</label>
                                        <Select options={[
                                            { label: 'Staloral', value: 'Staloral' },
                                            { label: 'Venins', value: 'Venins' },
                                            { label: 'Alustal', value: 'Alustal' },
                                            { label: 'Alyostal', value: 'Alyostal' },
                                            { label: 'Diluant', value: 'Diluant' },
                                            { label: 'ORALAIR', value: 'ORALAIR' },
                                        ]}
                                            name='product_family_'
                                            onChange={(e) => handleSelectChange(e, 'product_family_')}
                                            placeholder='Product family'
                                            isClearable
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className='form-label' data-toggle="tooltip" title="Choose the product for the Initial Publishing. If not listed, click 'New Product' at the list's end">Product</label>
                                        <Select options={productList}
                                            name="product_"
                                            onChange={(e) => handleSelectProductChange_(e)}
                                            placeholder='Product'
                                            value={product_}
                                            isClearable
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                            components={{ MenuList: SelectMenuButton }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className='form-label' data-toggle="tooltip" title='Select a country for the Initial Publishing. For NP/CP, choose one country; for DCP/MRP, select one or more countries'>Country</label>
                                        {compselect ?
                                            <MySelect
                                                options={countryList ? [...countryList] : ''}
                                                isMulti
                                                closeMenuOnSelect={false}
                                                hideSelectedOptions={false}
                                                components={{ Option, MultiValue, animatedComponents }}
                                                onChange={handleMyselectChange_}
                                                value={country_}
                                                allowSelectAll={true}
                                                menuPortalTarget={document.body}
                                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                            />
                                            : <Select options={countryList}
                                                onChange={(e) => onChange(e, 'country_')}
                                                value={country_}
                                                menuPortalTarget={document.body}
                                                isClearable
                                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                            />}
                                    </div>
                                    <div className='d-flex mt-5 justify-content-end'>
                                        <a href="#" className="btn btn-sm btn-light-primary me-3" onClick={handleClose}>Cancel</a>
                                        <button className="btn btn-sm btn-primary" data-bs-dismiss='modal' onClick={handleLifeCycle}>Validate</button>
                                    </div>
                                </>
                            }
                        </div>

                    </div>

                </div>
            </div>

        </Modal>

    )
}

export { InviteUsers }
