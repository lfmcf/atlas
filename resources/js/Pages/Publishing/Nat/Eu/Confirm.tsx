import React, { useEffect, useRef, useState } from "react";
import Authenticated from "../../../../Layouts/AuthenticatedLayout";
import { StepperComponent } from "../../../../_metronic/assets/ts/components";
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import { useForm } from '@inertiajs/react';
import Select from 'react-select'
import axios from "axios";
import DropZone from "../../../../Components/Dropzone";
import StatusComponent from "../../../../Components/StatusComponent";
import GeneralInformation from "../../../../Components/GeneralInformation";
import ProductMetaData from "../../../../Components/ProductMetaData";
import { ConfirmationMessage } from '../../../../_metronic/partials/modals/confimation/ConfirmationMessage';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

const Confirm = (props: any) => {

    const { metadata, folder } = props

    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const [myErrors, setMyErroes] = useState({ dossier_type: '', dossier_count: '', submission_type: '', submission_mode: '', submission_unit: '', sequence: '' })
    const [isModalOpen, setModalOpen] = useState(false);
    const [actionType, setActionType] = useState('');
    const [files, setFiles] = useState(folder.document)

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        id: folder._id,
        form: folder.form,
        region: folder.region,
        procedure: folder.procedure,
        productName: folder.product_name,
        dossier_contact: folder.dossier_contact,
        object: folder.object,
        country: folder.country,
        dossier_type: folder.dossier_type,
        dossier_count: folder.dossier_count,
        remarks: folder.remarks,
        uuid: folder.uuid,
        submission_type: folder.submission_type,
        submission_mode: folder.submission_mode,
        tracking: folder ? folder.tracking : '',
        trackingExtra: folder ? folder.trackingExtra : '',
        submission_unit: folder.submission_unit,
        applicant: folder.applicant,
        agency_code: folder.agency_code,
        inn: folder.inn,
        sequence: folder.sequence,
        r_sequence: folder.r_sequence,
        submission_description: folder.submission_description,
        mtremarks: folder.mtremarks,
        indication: folder.indication,
        // manufacturer: folder.manufacturer,
        drug_substance: folder.drug_substance || [],
        // drug_substance_manufacturer: folder.drug_substance_manufacturer,
        drug_product: folder.drug_product || [],
        // drug_product_manufacturer: folder.drug_product_manufacturer,
        dosage_form: folder.dosage_form,
        excipient: folder.excipient,
        doc: folder && folder.doc !== null ? folder.doc : [],
        docremarks: folder.docremarks,
        request_date: folder.request_date,
        deadline: folder.deadline,
        adjusted_deadline: folder && folder.adjusted_deadline ? folder.adjusted_deadline : '',
        adjustedDeadlineComments: '',
        status: folder ? folder.status : '',
        car_deadline: folder.car_deadline,
        adjusted_deadline_car: '',
        car_remarks: folder ? folder.car_remarks : '',
    })

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

    const handleCheckBoxChange = (e) => {
        setData(e.target.name, e.target.checked)
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


    const handleSubmit = (e) => {
        e.preventDefault();
        MySwal.fire({
            title: 'Click on "Yes" to submit your request or click on "No, return" to return to the form.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, proceed!',
            cancelButtonText: 'No, return',
        }).then((result) => {
            if (result.isConfirmed) {
                post(route('confirm_eu_publishing'));
            }
        })
        // setModalOpen(true);
        //post(route('confirm_eu_publishing'));
    }

    const handleCancel = () => {
        setModalOpen(false);
    }

    const handleConfirm = (type) => {
        //setModalOpen(false);
        post(route('confirm_eu_publishing'));
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

    const removeDrugSubstanceFields = (i) => {
        let instData = { ...data }
        instData.drug_substance.splice(i, 1)
        setData(instData)
    }

    const addDrugProductFields = () => {
        setData('drug_product', [...data.drug_product, { 'drug_product': '', 'manufacturer': '' }])
    }

    const removeDrugProductFields = (i) => {
        let instData = { ...data }
        instData.drug_product.splice(i, 1)
        setData(instData)
    }

    const [drugSubstanceOptions, setDrugSubstanceOptions] = useState(
        metadata.drug_substance.map(val => ({ label: val.substance, value: val.substance }))
    );

    const [drugProductOptions, setDrugProductOptions] = useState(
        metadata.drug_product.map(val => ({ label: val.drug_product, value: val.drug_product }))
    );

    const [manufacturerOptions, setManufacturerOptions] = useState({});
    const [dpmanufacturerOptions, setDpManufacturerOptions] = useState({});

    // Handle Drug Substance Change
    const handleDrugSubstanceChange = (index, selectedOption) => {
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
            <div className='d-flex justify-content-between align-items-center'>
                <a href="#" onClick={() => window.history.back()} className="btn btn-sm fw-bold btn-secondary mb-2">
                    <i className="ki-duotone ki-black-left fs-3">
                    </i>
                </a>
                <StatusComponent status={data.status} />
            </div>
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
                                    <label className="form-label">UUID</label>
                                    <input type="text" className="form-control form-control-solid" name="uuid" value={data.uuid} onChange={handleChange} />
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
                                            className="react-select-container"
                                            classNamePrefix="react-select"
                                            placeholder=''
                                            isClearable
                                            defaultValue={data.tracking ? { value: data.tracking, label: data.tracking } : ''}
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ ...base, width: '50%' }) }}
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
                                    <label className="form-label">Applicant</label>
                                    <input type="text" className="form-control form-control-solid" name="applicant" value={data.applicant} onChange={handleChange} />
                                </div>

                            </div>
                            <div className='row mb-10'>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Agency code</label>
                                    <input type="text" className="form-control form-control-solid" name="agency_code" value={data.agency_code} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className='col-md-4 col-sm-12'>Invented name</label>
                                    <input type="text" className="form-control form-control-solid" name="productName" value={data.productName} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className='col-md-4 col-sm-12'>INN</label>
                                    <input type="text" className="form-control form-control-solid" name="inn" value={data.inn} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='row mb-10'>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label" title='Enter the sequence number' style={{ color: myErrors.sequence ? 'red' : '' }}>Sequence (*)</label>
                                    <input type="text" className="form-control form-control-solid" name="sequence" defaultValue={data.sequence} style={{ borderColor: myErrors.sequence ? 'red' : '' }} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Related Sequence</label>
                                    <input type="text" className="form-control form-control-solid" name="r_sequence" value={data.r_sequence} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Submission description</label>
                                    <input type="text" className="form-control form-control-solid" name="submission_description" value={data.submission_description} onChange={handleChange} />
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
                            setData={setData}
                        // drugSubstanceOptions={drugSubstanceOptions}
                        //drugProductOptions={drugProductOptions}
                        // handleSelectChange={handleSelectChange}
                        // handleDrugSubstanceChange={handleDrugSubstanceChange}
                        // handleManufacturerChange={handleManufacturerChange}
                        // handleDrugProductChange={handleDrugProductChange}
                        // handleDpManufacturerChange={handleDpManufacturerChange}
                        // manufacturerOptions={manufacturerOptions}
                        // dpmanufacturerOptions={dpmanufacturerOptions}
                        // addDrugSubstanceFields={addDrugSubstanceFields}
                        // addDrugProductFields={addDrugProductFields}
                        // removeDrugProductFields={removeDrugProductFields}
                        // removeDrugSubstanceFields={removeDrugSubstanceFields}
                        />
                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className='row mb-10'>
                                <div className='col-md-2 col-lg-2 col-sm-12'>
                                    <label className="form-label">Attached documents</label>
                                    {/* <input type="file" multiple className="form-control form-control-solid" name="doc" onChange={handleUploadFileChange} /> */}
                                </div>
                                <div className='col-md-6 col-lg-6 col-sm-12'>
                                    <DropZone files={data.doc} upload={handleUploadFileChange} deleletFile={deleletFile} removeAll={removeAll} />
                                    {/* <div className='d-flex align-items-center text-gray-400 h-100'>
                                        {data.doc ? data.doc.map((ele) => (
                                            <span className='me-2 fs-5'>{ele.name}</span>
                                        )) : ''}
                                    </div> */}
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
                                    {/* <input className="form-control" ref={inputRef} id="kt_datepicker_1" name='request_date' /> */}
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
                                    {/* <input className="form-control" ref={inputRef} id="kt_datepicker_2" name='deadline' disabled /> */}
                                    <Flatpickr
                                        data-enable-time
                                        value={data.deadline}
                                        className="form-control"
                                        options={{ dateFormat: "d-M-Y H:i" }}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="row mb-10 border border-gray-300 rounded p-5" >
                                <div className='col-6'>
                                    <div className='my-4' style={{ display: 'flex', alignItems: 'center' }}>
                                        <label className='form-label my-0 me-4' data-toggle='tooltip' title='Field for the CAR adjusted deadline'>Urgent Request</label>
                                        <label className='form-check form-switch form-check-custom form-check-solid'>
                                            <input className='form-check-input' name='car_deadline' type='checkbox' checked={data.car_deadline} onChange={handleCheckBoxChange} />
                                        </label>

                                    </div>
                                </div>
                                {data.car_deadline &&
                                    <div className='col-6'>
                                        <label htmlFor="" className="form-label">Urgent Request Deadline</label>
                                        <Flatpickr
                                            data-enable-time
                                            value={data.adjusted_deadline_car}
                                            className="form-control"
                                            options={{ dateFormat: "d-M-Y H:i", minDate: data.request_date, maxDate: data.deadline }}
                                            onChange={(date) => setData('adjusted_deadline_car', date)}
                                            placeholder="Select date and time"
                                        />
                                    </div>
                                }
                                <div className='col-12'>
                                    <label htmlFor="" className="form-label">Urgency Details</label>
                                    <textarea className="form-control form-control-solid" rows={3} name="deadlineComments" placeholder="" value={data.car_remarks} disabled style={{ color: '#99a1b7' }} />
                                </div>
                            </div>

                            <div className="row border border-gray-300 rounded p-5">
                                <div className='col-6 mb-10'>
                                    <label htmlFor="" className="form-label">Opertional Deadline</label>
                                    <Flatpickr
                                        data-enable-time
                                        value={data.adjusted_deadline}
                                        className="form-control"
                                        options={{ dateFormat: "d-M-Y H:i", minDate: data.request_date, maxDate: data.deadline }}
                                        onChange={(date) => setData('adjusted_deadline', date)}
                                        placeholder="Select date and time"
                                    />
                                </div>
                                <div className='col-12'>
                                    <label htmlFor="" className="form-label">Comments</label>
                                    <textarea className="form-control form-control-solid" rows={3} name="adjustedDeadlineComments" placeholder="" onChange={handleChange} />
                                </div>
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
                            <button type="submit" className="btn btn-primary" data-kt-stepper-action="submit">
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
                </form>
            </div>
            <ConfirmationMessage show={isModalOpen} onCancel={handleCancel} actionType={actionType} onConfirm={handleConfirm} />
        </>
    )
}


Confirm.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Confirm;