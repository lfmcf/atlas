import { FC, MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'
import Authenticated from '../../../../Layouts/AuthenticatedLayout'
import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import { Instance } from 'flatpickr/dist/types/instance'
import { KTIcon } from '../../../../_metronic/helpers'
import { useForm } from '@inertiajs/react';
import moment from 'moment'
import Select from 'react-select'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import DropZone from '../../../../Components/Dropzone'
import axios from 'axios'
import StatusComponent from '../../../../Components/StatusComponent'
import GeneralInformation from '../../../../Components/GeneralInformation'
import ProductMetaData from '../../../../Components/ProductMetaData'
import { ConfirmationMessage } from '../../../../_metronic/partials/modals/confimation/ConfirmationMessage';

const CreateN = (props: any) => {

    const { metadata, folder } = props;


    var trigramme = props.auth.user.trigramme;
    trigramme = trigramme?.toUpperCase();
    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    var params = new URLSearchParams(window.location.search);
    const [myErrors, setMyErroes] = useState({ dossier_type: '', dossier_count: '', submission_type: '', submission_mode: '', submission_unit: '', sequence: '' })
    const [isModalOpen, setModalOpen] = useState(false);
    const [actionType, setActionType] = useState('');

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        id: folder ? folder._id : '',
        form: folder ? folder.form : 'Publishing',
        region: folder ? folder.region : params.get('region'),
        procedure: folder ? folder.procedure : params.get('procedure'),
        productName: folder ? folder.product_name : params.get('product'),
        dossier_contact: folder ? folder.dossier_contact : trigramme,
        object: folder ? folder.object : '',
        country: { value: metadata.country, code: metadata.code },
        dossier_type: folder ? folder.dossier_type : '',
        dossier_count: folder ? folder.dossier_count : '',
        remarks: folder ? folder.remarks : '',
        uuid: metadata.uuid,
        submission_type: folder ? folder.submission_type : '',
        submission_mode: folder ? folder.submission_mode : '',
        tracking: folder ? folder.tracking : '',
        trackingExtra: folder ? folder.trackingExtra : '',
        submission_unit: folder ? folder.submission_unit : '',
        applicant: metadata.applicant,
        agency_code: metadata.agencyCode,
        inn: metadata.inn,
        sequence: folder ? folder.sequence : '',
        r_sequence: folder ? folder.r_sequence : '',
        submission_description: folder ? folder.submission_description : '',
        mtremarks: folder ? folder.mtremarks : '',
        indication: folder ? folder.indication : '',
        // manufacturer: folder ? folder.manufacturer : '',
        drug_substance: folder ? folder.drug_substance : [{ 'drug_substance': '', 'manufacturer': '' }],
        // drug_substance_manufacturer: folder ? folder.drug_substance_manufacturer : '',
        drug_product: folder ? folder.drug_product : [{ 'drug_product': '', 'manufacturer': '' }],
        // drug_product_manufacturer: folder ? folder.drug_product_manufacturer : '',
        dosage_form: folder ? folder.dosage_form : '',
        excipient: folder ? folder.excipient : '',
        doc: folder && folder.doc !== null ? folder.doc : [],
        docremarks: folder ? folder.docremarks : '',
        request_date: new Date(),
        deadline: new Date(),
        status: folder ? folder.status : '',
        created_by: props.auth.user.id
    })

    if (!metadata) {
        return <div>
            <h1>Error</h1>
            <p>Error while fetching metadata</p>
        </div>
    }

    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    }, [])

    const nextStep = () => {
        // setHasError(false)

        if (!stepper.current) {
            return
        }

        if (stepper.current.getCurrentStepIndex() === 1) {
            if (!data.dossier_type || !data.dossier_count) {

                if (!data.dossier_type) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            dossier_type: 'this field is required'
                        }
                    })
                }
                if (!data.dossier_count) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            dossier_count: 'this field is required'
                        }
                    })
                }

                return
            }
        }

        if (stepper.current.getCurrentStepIndex() === 2) {
            if (!data.submission_type || !data.submission_mode || !data.submission_unit || !data.sequence) {
                if (!data.submission_type) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            submission_type: 'this field is required'
                        }
                    })
                }
                if (!data.submission_mode) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            submission_mode: 'this field is required'
                        }
                    })
                }
                if (!data.submission_unit) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            submission_unit: 'this field is required'
                        }
                    })
                }
                if (!data.sequence) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            sequence: 'this field is required'
                        }
                    })
                }
                return
            }
        }

        stepper.current.goNext()
    }

    const prevStep = () => {
        if (!stepper.current) {
            return
        }

        stepper.current.goPrev()
    }

    const handleChange = (e) => {
        if (e.target.name == 'dossier_count') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    dossier_count: ''
                }
            })
        }
        if (e.target.name == 'sequence') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    sequence: ''
                }
            })
        }
        setData(e.target.name, e.target.value)
    }

    const handleSelectChange = (e, name) => {
        if (name == 'dossier_type') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    dossier_type: ''
                }
            })
        }
        if (name == 'dossier_count') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    dossier_count: ''
                }
            })
        }
        if (name == 'submission_type') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    submission_type: ''
                }
            })
        }
        if (name == 'submission_mode') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    submission_mode: ''
                }
            })
        }
        if (name == 'submission_unit') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    submission_unit: ''
                }
            })
        }
        setData(name, e)
    }

    const handleUploadFileChange = (e) => {
        let instData = { ...data }
        instData.doc.push(...e)
        setData(instData)
    }

    useEffect(() => {
        let date = new Date();
        let hour = date.getHours();
        let delai = data.dossier_type ? data.dossier_type.delai : '';

        let deadline = new Date();
        let count = 1;

        if (hour < 12) {
            delai = delai
        } else {
            delai = delai + 1
        }

        while (count < delai) {
            deadline = new Date(date.setDate(date.getDate() + 1));
            if (deadline.getDay() != 0 && deadline.getDay() != 6) {
                //Date.getDay() gives weekday starting from 0(Sunday) to 6(Saturday)
                count++;
            }
        }

        setData('deadline', new Date(deadline));


    }, [data.dossier_type]);

    const handleSubmit = (e, type) => {
        e.preventDefault();
        setModalOpen(true);
        setActionType(type);
        //post(route('store_eu_publishing', { type: type }));
    }

    const handleCancel = () => {
        setModalOpen(false);
    }

    const handleConfirm = (type) => {
        //setModalOpen(false);
        post(route('store_eu_publishing', { type: type }));
    }

    const removeAll = () => {
        let instData = { ...data }
        let filesfromserver = []
        instData.doc.map((file => {
            file.link ? filesfromserver.push(file.name) : ''
        }))
        if (filesfromserver.length > 0) {
            axios.post('delete-file-pub', { docs: filesfromserver, id: data.id })
        }
        instData.doc = []
        setData(instData)
    }

    const deleletFile = (i) => {
        if (i.link) {
            let filesfromserver = []
            filesfromserver.push(i.name)
            axios.post('delete-file-pub', { docs: filesfromserver, id: data.id })
        }
        var arr = { ...data }
        let index = arr.doc.map((el) => el.name).indexOf(i.name);
        arr.doc.splice(index, 1)
        setData(arr)
    }

    const selectStyles = (hasErrors) => ({
        control: (styles) => ({
            ...styles,
            ...(hasErrors && { borderColor: 'red !important' }),
        }),
    });

    const goNextStep = (i) => {

        if ((!data.dossier_type || !data.dossier_count) && (i == 2 || i == 3 || i == 4 || i == 5)) {

            if (!data.dossier_type) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        dossier_type: 'this field is required'
                    }
                })
            }
            if (!data.dossier_count) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        dossier_count: 'this field is required'
                    }
                })
            }
            return

        }
        if ((!data.submission_type || !data.submission_mode || !data.submission_unit || !data.sequence) && (i == 3 || i == 4 || i == 5)) {
            if (!data.submission_type) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        submission_type: 'this field is required'
                    }
                })
            }
            if (!data.submission_mode) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        submission_mode: 'this field is required'
                    }
                })
            }
            if (!data.submission_unit) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        submission_unit: 'this field is required'
                    }
                })
            }
            if (!data.sequence) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        sequence: 'this field is required'
                    }
                })
            }
            return
        }
        stepper.current?.goto(i)
    }

    const handleSelectChangeTracking = (e, action) => {
        if (action.action == 'clear') {
            setData('tracking', '')
        } else {
            setData('tracking', e.value)
        }
    }

    const addDrugSubstanceFields = () => {
        setData('drug_substance', [...data.drug_substance, { 'drug_substance': '', 'manufacturer': '' }])
    }

    const addDrugProductFields = () => {
        setData('drug_product', [...data.drug_product, { 'drug_product': '', 'manufacturer': '' }])
    }

    const removeDrugProductFields = (i) => {
        let instData = { ...data }
        instData.drug_product.splice(i, 1)
        setData(instData)
    }

    const removeDrugSubstanceFields = (i) => {
        let instData = { ...data }
        instData.drug_substance.splice(i, 1)
        setData(instData)
    }





    const [manufacturerOptions, setManufacturerOptions] = useState({});
    const [dpmanufacturerOptions, setDpManufacturerOptions] = useState({});

    // Handle Drug Substance Change
    const handleDrugSubstanceChange = (index, selectedOption) => {
        console.log(selectedOption)
        let newFormValues = { ...data };
        newFormValues.drug_substance[index]['drug_substance'] = selectedOption ? selectedOption.value : '';
        setData(newFormValues);

        const substanceId = selectedOption?.value;
        const relatedManufacturers = metadata.drug_substance.find(
            substance => substance.substance === substanceId
        )?.ds_manufacturers.map(manufacturer => ({
            label: manufacturer.substance_manufacturer,
            value: manufacturer.substance_manufacturer
        })) || [];


        setManufacturerOptions(prev => ({
            ...prev,
            [substanceId]: relatedManufacturers
        }));
    };

    // Handle Drug Product Change
    const handleDrugProductChange = (index, selectedOption) => {
        let newFormValues = { ...data };
        newFormValues.drug_product[index]['drug_product'] = selectedOption ? selectedOption.value : '';
        setData(newFormValues);

        const substanceId = selectedOption?.value;

        const relatedManufacturers = metadata.drug_product.find(
            drug_product => drug_product.drug_product === substanceId
        )?.dp_manufacturers.map(manufacturer => ({
            label: manufacturer.product_manufacturer,
            value: manufacturer.product_manufacturer
        })) || [];


        setDpManufacturerOptions(prev => ({
            ...prev,
            [substanceId]: relatedManufacturers
        }));
    };

    // Handle Manufacturer Change
    const handleManufacturerChange = (index, selectedOptions) => {

        setData((prevData) => {
            // Create a copy of the drug_product array
            const updatedDrugProducts = [...prevData.drug_substance];

            // Append the new value to the manufacturer array at the specific index
            updatedDrugProducts[index] = {
                ...updatedDrugProducts[index],
                // manufacturer: [
                //     //...updatedDrugProducts[index].manufacturer,  Keep the existing manufacturers
                //     selectedOptions // Add the new manufacturer value
                // ]
                manufacturer: selectedOptions
            };

            // Return the updated data object with the modified drug_product array
            return { ...prevData, drug_substance: updatedDrugProducts };
        });
    };


    // Handle Manufacturer Change
    const handleDpManufacturerChange = (index, selectedOptions) => {

        setData((prevData) => {
            // Create a copy of the drug_product array
            const updatedDrugProducts = [...prevData.drug_product];

            // Append the new value to the manufacturer array at the specific index
            updatedDrugProducts[index] = {
                ...updatedDrugProducts[index],
                // manufacturer: [
                //     //...updatedDrugProducts[index].manufacturer,  Keep the existing manufacturers
                //     selectedOptions // Add the new manufacturer value
                // ]
                manufacturer: selectedOptions
            };

            // Return the updated data object with the modified drug_product array
            return { ...prevData, drug_product: updatedDrugProducts };
        });
    };


    return (
        <>
            {folder ?
                <div className='d-flex justify-content-between align-items-center'>
                    <a href="#" onClick={() => window.history.back()} className="btn btn-sm fw-bold btn-secondary mb-2">
                        <i className="ki-duotone ki-black-left fs-3">
                        </i>
                    </a>
                    <StatusComponent status={data.status} />
                </div>
                : ''}
            <div className="stepper stepper-pills" id="kt_stepper_example_basic" ref={stepperRef}>
                <div className="stepper-nav flex-center flex-wrap mb-10">
                    <div className="stepper-item mx-8 my-4 current" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => stepper.current?.goto(1)} style={{ cursor: 'pointer' }}>
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">1</span>
                            </div>
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 1
                                </h3>

                                <div className="stepper-desc">
                                    General information
                                </div>
                            </div>
                            <div className="stepper-line h-40px"></div>
                        </div>
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(2)} style={{ cursor: 'pointer' }}>
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">2</span>
                            </div>
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 2
                                </h3>

                                <div className="stepper-desc">
                                    Submission metadata
                                </div>
                            </div>
                        </div>
                        <div className="stepper-line h-40px"></div>
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(3)} style={{ cursor: 'pointer' }}>
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">3</span>
                            </div>
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 3
                                </h3>

                                <div className="stepper-desc">
                                    Product metadata
                                </div>
                            </div>
                        </div>
                        <div className="stepper-line h-40px"></div>
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(4)} style={{ cursor: 'pointer' }}>
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">4</span>
                            </div>
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 4
                                </h3>

                                <div className="stepper-desc">
                                    Documents
                                </div>
                            </div>
                        </div>
                        <div className="stepper-line h-40px"></div>
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(5)} style={{ cursor: 'pointer' }}>
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">5</span>
                            </div>
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 5
                                </h3>

                                <div className="stepper-desc">
                                    Delivery details
                                </div>
                            </div>
                        </div>
                        <div className="stepper-line h-40px"></div>
                    </div>
                </div>
                <form className="form" id="kt_stepper_example_basic_form" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <GeneralInformation
                            data={data}
                            myErrors={myErrors}
                            handleChange={handleChange}
                            handleSelectChange={handleSelectChange}
                            selectStyles={selectStyles}
                        />
                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label" title='Universal Unique Identifier. A unique identifier of the Publishing dossier'>UUID</label>
                                    <input type="text" className="form-control form-control-solid" name="uuid" defaultValue={data.uuid} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label" title='Choose the submission type' style={{ color: myErrors.submission_type ? 'red' : '' }}>Submission type (*)</label>
                                    <Select options={[
                                        { label: 'maa', value: 'maa' },
                                        { label: 'var-type1a', value: 'var-type1a' },
                                        { label: 'var-type1ain', value: 'var-type1ain' },
                                        { label: 'var-type1b', value: 'var-type1b' },
                                        { label: 'var-type2', value: 'var-type2' },
                                        { label: 'var-nat', value: 'var-nat' },
                                        { label: 'extension', value: 'extension' },
                                        { label: 'rup', value: 'rup' },
                                        { label: 'psur', value: 'psur' },
                                        { label: 'psusa', value: 'psusa' },
                                        { label: 'rmp', value: 'rmp' },
                                        { label: 'renewal', value: 'renewal' },
                                        { label: 'pam-sob', value: 'pam-sob' },
                                        { label: 'pam-anx', value: 'pam-anx' },
                                        { label: 'pam-mea', value: 'pam-mea' },
                                        { label: 'pam-leg', value: 'pam-leg' },
                                        { label: 'pam-sda', value: 'pam-sda' },
                                        { label: 'pam-capa', value: 'pam-capa' },
                                        { label: 'pam-p45', value: 'pam-p45' },
                                        { label: 'pam-p46', value: 'pam-p46' },
                                        { label: 'pam-paes', value: 'pam-paes' },
                                        { label: 'pam-rec', value: 'pam-rec' },
                                        { label: 'pass107n', value: 'pass107n' },
                                        { label: 'pass107q', value: 'pass107q' },
                                        { label: 'asmf', value: 'asmf' },
                                        { label: 'pmf', value: 'pmf' },
                                        { label: 'referral-20', value: 'referral-20' },
                                        { label: 'referral-294', value: 'referral-294' },
                                        { label: 'referral-29p', value: 'referral-29p' },
                                        { label: 'referral-30', value: 'referral-30' },
                                        { label: 'referral-31', value: 'referral-31' },
                                        { label: 'referral-35', value: 'referral-35' },
                                        { label: 'referral-5-3', value: 'referral-5-3' },
                                        { label: 'referral-107i', value: 'referral-107i' },
                                        { label: 'referral-16c1c', value: 'referral-16c1c' },
                                        { label: 'referral-16c4', value: 'referral-16c4' },
                                        { label: 'annual-reassessment', value: 'annual-reassessment' },
                                        { label: 'clin-data-pub-rp', value: 'clin-data-pub-rp' },
                                        { label: 'clin-data-pub-fv', value: 'clin-data-pub-fv' },
                                        { label: 'paed-7-8-30', value: 'paed-7-8-30' },
                                        { label: 'paed-29', value: 'paed-29' },
                                        { label: 'paed-45', value: 'paed-45' },
                                        { label: 'paed-46', value: 'paed-46' },
                                        { label: 'articale-58', value: 'articale-58' },
                                        { label: 'notification-61-3', value: 'notification-61-3' },
                                        { label: 'transfer-ma', value: 'transfer-ma' },
                                        { label: 'lifting-suspension', value: 'lifting-suspension' },
                                        { label: 'withdrawal', value: 'withdrawal' },
                                        { label: 'cep', value: 'cep' },
                                        { label: 'none', value: 'none' },
                                    ]}
                                        name='submission_type'
                                        onChange={(e) => handleSelectChange(e, 'submission_type')}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        placeholder=''
                                        isClearable
                                        value={data.submission_type}
                                        menuPortalTarget={document.body}
                                        styles={selectStyles(myErrors.submission_type)}
                                    />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label" title='Choose the submission mode' style={{ color: myErrors.submission_mode ? 'red' : '' }}>Submission mode (*)</label>
                                    <Select options={[
                                        { label: 'Single', value: 'Single' },
                                        { label: 'Grouping', value: 'Grouping' },
                                        { label: 'Worksharing', value: 'Worksharing' },
                                    ]}
                                        name='submission_mode'
                                        onChange={(e) => handleSelectChange(e, 'submission_mode')}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        placeholder=''
                                        isClearable
                                        value={data.submission_mode}
                                        menuPortalTarget={document.body}
                                        styles={selectStyles(myErrors.submission_mode)}
                                    />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Procedure Tracking N°</label>
                                    <div className='d-flex align-items-center'>
                                        <Select options={metadata.tracking_numbers.map((val) => {
                                            return { label: val.numbers, value: val.numbers }
                                        })}
                                            name='tracking'
                                            onChange={(e, action) => handleSelectChangeTracking(e, action)}
                                            className="react-select-container me-1"
                                            classNamePrefix="react-select"
                                            placeholder=''
                                            isClearable
                                            defaultValue={data.tracking ? { value: data.tracking, label: data.tracking } : ''}
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999, }), container: base => ({ ...base, width: '50%' }) }}
                                        />
                                        <input type='text' className='form-control form-control-solid' value={data.tracking} name="tracking" style={{ width: '50%' }} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label" title='Choose the applicable submission unit' style={{ color: myErrors.submission_unit ? 'red' : '' }}>Submission unit (*)</label>
                                    <Select options={[
                                        { label: 'initial', value: 'initial' },
                                        { label: 'validation-response', value: 'validation-response' },
                                        { label: 'response', value: 'response' },
                                        { label: 'additional-info', value: 'additional-info' },
                                        { label: 'closing', value: 'closing' },
                                        { label: 'consolidating', value: 'consolidating' },
                                        { label: 'corrigendum', value: 'corrigendum' },
                                        { label: 'reformat', value: 'reformat' },
                                    ]}
                                        name='submission_unit'
                                        onChange={(e) => handleSelectChange(e, 'submission_unit')}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        placeholder=''
                                        isClearable
                                        value={data.submission_unit}
                                        menuPortalTarget={document.body}
                                        styles={selectStyles(myErrors.submission_unit)}
                                    />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label" title='Name of the company submitting the eCTD'>Applicant</label>
                                    <input type="text" className="form-control form-control-solid" name="applicant" defaultValue={data.applicant} onChange={handleChange} />
                                </div>

                            </div>
                            <div className='row mb-10'>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label" title='Name of the agency code of the concerned country'>Agency code</label>
                                    <input type="text" className="form-control form-control-solid" name="agency_code" defaultValue={data.agency_code} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className='col-md-4 col-sm-12' title='Product name'>Invented name</label>
                                    <input type="text" className="form-control form-control-solid" name="productName" defaultValue={data.productName} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className='col-md-4 col-sm-12' title='INN - Mandatory for sequence 0000'>INN</label>
                                    <input type="text" className="form-control form-control-solid" name="inn" defaultValue={data.inn} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='row mb-10'>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label" title='Enter the sequence number' style={{ color: myErrors.sequence ? 'red' : '' }}>Sequence (*)</label>
                                    <input type="text" className="form-control form-control-solid" name="sequence" defaultValue={data.sequence} style={{ borderColor: myErrors.sequence ? 'red' : '' }} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label" title='Enter the related sequence number'>Related Sequence</label>
                                    <input type="text" className="form-control form-control-solid" name="r_sequence" defaultValue={data.r_sequence} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label" title='Submission description'>Submission description</label>
                                    <input type="text" className="form-control form-control-solid" name="submission_description" defaultValue={data.submission_description} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='row mb-10'>
                                <div className='col-12'>
                                    <label className="form-label">Remarks</label>
                                    <textarea rows={3} className="form-control form-control-solid" defaultValue={data.mtremarks} name='mtremarks' onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <ProductMetaData
                            metadata={metadata}
                            data={data}
                            // drugSubstanceOptions={drugSubstanceOptions}
                            //drugProductOptions={drugProductOptions}
                            handleSelectChange={handleSelectChange}
                            handleDrugSubstanceChange={handleDrugSubstanceChange}
                            handleManufacturerChange={handleManufacturerChange}
                            handleDrugProductChange={handleDrugProductChange}
                            handleDpManufacturerChange={handleDpManufacturerChange}
                            manufacturerOptions={manufacturerOptions}
                            dpmanufacturerOptions={dpmanufacturerOptions}
                            addDrugSubstanceFields={addDrugSubstanceFields}
                            addDrugProductFields={addDrugProductFields}
                            removeDrugProductFields={removeDrugProductFields}
                            removeDrugSubstanceFields={removeDrugSubstanceFields}
                        />
                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className='row mb-10'>
                                <div className='col-md-2 col-lg-2 col-sm-12'>
                                    <label className="form-label">Attached documents</label>

                                </div>
                                <div className='col-md-6 col-lg-6 col-sm-12'>
                                    <DropZone files={data.doc} upload={handleUploadFileChange} deleletFile={deleletFile} removeAll={removeAll} />

                                </div>
                            </div>
                            <div className="row mb-10">
                                <label className="form-label">Remarks</label>
                                <textarea className="form-control form-control-solid" rows={3} name="docremarks" defaultValue={data.docremarks} placeholder="" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className='row mb-10'>
                                <div className='col-6'>
                                    <label htmlFor="" className="form-label">Request date</label>
                                    <Flatpickr
                                        data-enable-time
                                        value={data.request_date}
                                        className="form-control"
                                        options={{ dateFormat: "d-M-Y H:i" }}
                                        disabled
                                    />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="" className="form-label">Delivery deadline</label>
                                    <Flatpickr
                                        data-enable-time
                                        value={data.deadline}
                                        className="form-control"
                                        options={{ dateFormat: "d-M-Y H:i" }}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="mb-10">

                            </div>
                        </div>
                    </div>


                    <div className="d-flex flex-stack">

                        <div className="me-2">
                            <button type="button" className="btn btn-light btn-active-light-primary" data-kt-stepper-action="previous" onClick={prevStep}>
                                Back
                            </button>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary m-3" data-kt-stepper-action="submit" onClick={(e) => handleSubmit(e, 'save')}>
                                <span className="indicator-label">
                                    Save
                                </span>
                            </button>
                            <button type="submit" className="btn btn-primary" data-kt-stepper-action="submit" onClick={(e) => handleSubmit(e, 'submit')}>
                                <span className="indicator-label">
                                    Submit
                                </span>
                                <span className="indicator-progress">
                                    Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>

                            <button type="button" className="btn btn-primary" data-kt-stepper-action='next' onClick={nextStep}>
                                Continue
                            </button>
                        </div>
                    </div>
                </form >
            </div >
            <ConfirmationMessage show={isModalOpen} onCancel={handleCancel} actionType={actionType} onConfirm={handleConfirm} />
        </>
    )
}

CreateN.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default CreateN;