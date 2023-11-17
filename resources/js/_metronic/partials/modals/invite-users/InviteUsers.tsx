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

const SelectMenuButton = (props) => {
    return (
        <components.MenuList  {...props}>
            {props.children}
            <button className='btn btn-sm bn-info'>Add new product</button>
        </components.MenuList >
    )
}


type FormValues = {
    form: any,
    region: any,
    coreDoc: boolean,
    procedure: any,
    product: any,
    country: any
}

const initialState = {
    form_: { label: 'Publishing', value: 'Publishing' },
    region_: "",
    procedure_: "",
    product_: "",
    country_: ''
};

const InviteUsers = () => {


    const [productList, setProductList] = useState(Object);
    const [countryList, setCountryList] = useState(Object);
    const [compselect, setCompselect] = useState(false);

    // const [form_, setForm_] = useState({ label: 'Publishing', value: 'Publishing' });
    // const [region_, setRegion_] = useState();
    // const [procedure_, setProcedure_] = useState();
    // const [product_, setProduct_] = useState();
    // const [country_, setCountry_] = useState();

    const [{ form_, region_, procedure_, product_, country_ }, setState] = useState(initialState)


    const { data, setData, get, processing, errors, clearErrors, reset } = useForm<FormValues>({
        form: '',
        region: '',
        coreDoc: false,
        procedure: '',
        product: '',
        country: ''
    })

    const handleSelectChange = (e: any, name: any) => {
        setData(name, e)
    }

    var myModalEl = document.getElementById('kt_modal_invite_friends');

    if (myModalEl) {
        myModalEl.addEventListener('hidden.bs.modal', function (event) {
            reset()
            setState({ ...initialState });
        })
    }


    const handleSelectCountryChange = (e, name) => {
        if (data.procedure && data.procedure.value == 'Nationale' && e && !data.product) {
            axios.post('getProductOrCountry', { 'procedure': data.procedure.value, 'country': e.value, }).then(res => {
                var dt = res.data.map(ct => {
                    return { label: ct.Product, value: ct.Product }
                })
                setProductList(dt)
                setData({ ...data, 'country': e, product: '' })
            })
        } else if (e == null) {
            setData({ ...data, 'product': '', 'country': '' })
        } else {
            setData(name, e)
            setProductList(eunatproduct)
            setCountryList(eunatcountry)
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
        if (data.procedure && data.procedure.value == 'Nationale') {
            axios.post('getProductOrCountry', { 'procedure': data.procedure.value, 'product': e.value, }).then(res => {
                var dt = res.data.map(ct => {
                    return { label: ct.country, value: ct.country }
                })
                setCountryList(dt)
                setData({ ...data, 'product': e, country: '' })

            })
        }
    }

    const handleSelectProductChange_ = (e) => {
        setState(prevState => ({ ...prevState, ['product_']: e }));
        if (procedure_ && procedure_.value == 'Nationale') {
            axios.post('getProductOrCountry', { 'procedure': procedure_.value, 'product': e.value, }).then(res => {
                var dt = res.data.map(ct => {
                    return { label: ct.country, value: ct.country }
                })
                setCountryList(dt)
                //setData({ ...data, 'product': e, country: '' })

            })
        }
    }

    const handleNavigate = () => {
        if (data.form && data.form.value == "Formatting") {
            router.visit('/formatting-initiate', {
                method: 'get',
                data: { form: data.form.value, region: data.region.value, coreDoc: data.coreDoc },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
        } else if (data.form && data.form.value == "Publishing") {
            router.visit('/publishing-initiate', {
                method: 'get',
                data: { form: data.form.value, region: data.region.value, procedure: data.procedure.value, product: data.product.value, country: data.country },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
        }
    }

    const handleLifeCycle = () => {

        router.visit('/publishing-initiate_', {
            method: 'get',
            data: { form: form_.value, region: region_.value, procedure: procedure_.value, product: product_.value, country: country_ },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
    }

    useEffect(() => {
        setData({ ...data, 'procedure': '', 'product': '', 'country': '' })
        if (data.form && data.form.value === 'Publishing') {
            if (data.region && data.region.value == 'GCC') {
                setData('procedure', { label: 'Nationale', value: 'Nationale' });
                setProductList(gccproduct);
                setCountryList(gcccountry);
            } else if (data.region && data.region.value == 'CH') {
                setData('procedure', { label: 'Nationale', value: 'Nationale' });
                setProductList(chproduct);
                setCountryList([{ label: 'Switzerland', value: 'Switzerland' }])
                // setCountry({ label: 'Switzerland', value: 'Switzerland' })
            }
        }

    }, [data.region])

    useEffect(() => {
        if (region_ && region_.value == 'GCC') {
            // setProcedure_({ label: 'Nationale', value: 'Nationale' });
            setState(prevState => ({ ...prevState, ['procedure_']: { label: 'Nationale', value: 'Nationale' } }));
            setProductList(gccproduct);
            setCountryList(gcccountry);
        } else if (region_ && region_.value == 'CH') {
            setState(prevState => ({ ...prevState, ['procedure_']: { label: 'Nationale', value: 'Nationale' } }));
            setProductList(chproduct);
            setCountryList([{ label: 'Switzerland', value: 'Switzerland' }])
            // setCountry({ label: 'Switzerland', value: 'Switzerland' })
        }
    }, [region_])

    useEffect(() => {
        setData({ ...data, product: '', country: '' })
        if (data.form && data.form.value === 'Publishing') {
            if (data.region && data.region.value == 'EU' && data.procedure && data.procedure.value == 'Decentralized') {
                setProductList([{ label: 'ACTAIR', value: 'ACTAIR' }])
                setCountryList(eunatcountry)
                setCompselect(true)
            } else if (data.region && data.region.value == 'EU' && data.procedure && data.procedure.value == 'Mutual Recognition') {
                setProductList([{ label: 'ORALAIR', value: 'ORALAIR' }])
                setCountryList(eunatcountry)
                setCompselect(true)
            } else if (data.region && data.region.value == 'EU' && data.procedure && data.procedure.value == 'Nationale' || data.procedure && data.procedure.value == 'Centralized') {
                setProductList(eunatproduct)
                setCountryList(eunatcountry)
                setCompselect(false)
            }
        }
    }, [data.procedure])

    useEffect(() => {
        if (region_ && region_.value == 'EU' && procedure_ && procedure_.value == 'Decentralized') {
            setProductList([{ label: 'ACTAIR', value: 'ACTAIR' }])
            setCountryList(eunatcountry)
            setCompselect(true)
        } else if (region_ && region_.value == 'EU' && procedure_ && procedure_.value == 'Mutual Recognition') {
            setProductList([{ label: 'ORALAIR', value: 'ORALAIR' }])
            setCountryList(eunatcountry)
            setCompselect(true)
        } else if (region_ && region_.value == 'EU' && procedure_ && procedure_.value == 'Nationale' || procedure_ && procedure_.value == 'Centralized') {
            setProductList(eunatproduct)
            setCountryList(eunatcountry)
            setCompselect(false)
        }
    }, [procedure_])

    const onChange = (e, name) => {

        // const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: e }));
    };

    return (
        <div className='modal fade' id='kt_modal_invite_friends' aria-hidden='true'>
            <div className='modal-dialog mw-650px'>
                <div className='modal-content'>
                    <div className='modal-header pb-0 border-0 justify-content-end'>
                        <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                            <KTIcon iconName='cross' className='fs-1' />
                        </div>
                    </div>

                    <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
                        <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    data-bs-toggle="tab"
                                    href="#kt_tab_pane_1"
                                >
                                    New request
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#kt_tab_pane_2"
                                >
                                    LifeCycle
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade active show"
                                id="kt_tab_pane_1"
                                role="tabpanel"
                            >
                                <div>
                                    <label className="form-label">Request type</label>
                                    <Select options={[{ label: 'Publishing', value: 'Publishing' }]}
                                        name="form_"
                                        // onChange={(e) => handleSelectChange(e, 'form')}
                                        placeholder='Form'
                                        isClearable
                                        menuPortalTarget={document.body}
                                        styles={{
                                            menuPortal: base => ({ ...base, zIndex: 9999, }),
                                            container: base => ({ width: '100%' })
                                        }}
                                        defaultValue={[{ label: 'Publishing', value: 'Publishing' }]}
                                        isDisabled
                                    />
                                </div>
                                <div className='my-4'>
                                    <label className="form-label">Region</label>
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
                                    <label className='form-label'>Procedure type</label>
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
                                <div className='my-4'>
                                    <label className='form-label'>Product</label>
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
                                    <label className='form-label'>Country (ies)</label>
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
                                    <a href="#" data-bs-dismiss='modal' className="btn btn-sm btn-light-primary me-3">Cancel</a>
                                    <button className="btn btn-sm btn-primary" data-bs-dismiss='modal' onClick={handleLifeCycle}>Validate</button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                                <div>
                                    <label className="form-label">Request type</label>
                                    <Select options={[
                                        { label: 'Formatting', value: 'Formatting' },
                                        { label: 'Publishing', value: 'Publishing' },
                                        { label: 'Submission', value: 'Submission' },
                                    ]}
                                        name="form"
                                        onChange={(e) => handleSelectChange(e, 'form')}
                                        placeholder='Form'
                                        isClearable
                                        menuPortalTarget={document.body}
                                        styles={{
                                            menuPortal: base => ({ ...base, zIndex: 9999, }),
                                            container: base => ({ width: '100%' })
                                        }}
                                        value={data.form}
                                    />
                                </div>
                                <div className='my-4'>
                                    <label className="form-label">Region</label>
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
                                <div className='my-4' style={{ display: data.form && data.form.value == 'Publishing' ? 'block' : 'none' }}>
                                    <label className='form-label'>Procedure type</label>
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
                                <div className='my-4' style={{ display: data.form && data.form.value == 'Publishing' ? 'block' : 'none' }}>
                                    <label className='form-label'>Product</label>
                                    <Select options={productList}
                                        name="product"
                                        onChange={(e) => handleSelectProductChange(e, 'product')}
                                        placeholder='Product'
                                        value={data.product}
                                        isClearable
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                    />
                                </div>
                                <div className='my-4' style={{ display: data.form && data.form.value == 'Publishing' ? 'block' : 'none' }}>
                                    <label className='form-label'>Country (ies)</label>
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
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                        />}
                                </div>
                                <div className='my-4' style={{ display: data.form && data.form.value == 'Formatting' ? 'flex' : 'none', alignItems: 'center' }}>
                                    <label className='form-label my-0 me-4'>Core doc</label>
                                    <label className='form-check form-switch form-check-custom form-check-solid'>
                                        <input className='form-check-input' type='checkbox' value='1' />

                                        {/* <span className=' fw-bold form-label'>Core doc</span> */}
                                    </label>

                                </div>
                                <div className='d-flex mt-5 justify-content-end'>
                                    <a href="#" data-bs-dismiss='modal' className="btn btn-sm btn-light-primary me-3">Cancel</a>
                                    <button className="btn btn-sm btn-primary" data-bs-dismiss='modal' onClick={handleNavigate}>Validate</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='text-center mb-13'>
                            <h1 className='mb-3'>New request</h1>
                        </div> */}


                    </div>
                </div>
            </div>
        </div>
    )
}

export { InviteUsers }
