import { FC, MutableRefObject, useEffect, useRef } from 'react'
import Authenticated from '../../Layouts/AuthenticatedLayout'
import { StepperComponent } from '../../_metronic/assets/ts/components'
import { Instance } from 'flatpickr/dist/types/instance'
import { KTIcon } from '../../_metronic/helpers'
import { useForm } from '@inertiajs/react';
import moment from 'moment'
import Select from 'react-select'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';

const CreateN: FC = (props: any) => {
    const { metadata } = props;

    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    var params = new URLSearchParams(window.location.search);

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        form: params.get('form'),
        region: params.get('region'),
        procedure: params.get('procedure'),
        productName: params.get('product'),
        dossier_contact: '',
        object: '',
        country: metadata.country,
        dossier_type: '',
        dossier_count: '',
        remarks: '',
        uuid: metadata.uuid,
        submission_type: '',
        submission_mode: '',
        tracking: '',
        submission_unit: '',
        applicant: metadata.applicant,
        agency_code: metadata.agencyCode,
        inn: metadata.inn,
        sequence: '',
        r_sequence: '',
        submission_description: '',
        mtremarks: '',
        indication: '',
        manufacturer: '',
        drug_substance: '',
        drug_substance_manufacturer: '',
        drug_product: '',
        drug_product_manufacturer: '',
        dosage_form: '',
        excipient: '',
        doc: '',
        docremarks: '',
        request_date: new Date(),
        deadline: new Date(),
    })

    let tn = metadata.trackingNumber
    tn = tn.split(/\r?\n/)
    let tno = [];
    if (tn.length > 1) {
        tno = tn.map((val) => {
            return { label: val, value: val }
        })

    } else {
        tno = tn.map((val) => {
            return { label: val, value: val }
        })
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
            // if (!checkAppBasic()) {
            //     setHasError(true)
            //     return
            // }
        }

        if (stepper.current.getCurrentStepIndex() === 3) {
            // if (!checkAppDataBase()) {
            //     setHasError(true)
            //     return
            // }
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
        setData(e.target.name, e.target.value)
    }

    const handleSelectChange = (e, name) => {
        setData(name, e)
    }

    const handleUploadFileChange = (e) => {
        let instData = { ...data }
        instData.doc = []
        Promise.all([...e.target.files].map((fileToDataURL) => instData.doc.push(fileToDataURL)))
        setData(instData)
    }

    useEffect(() => {
        let date = new Date();
        let hour = date.getHours();
        let delai = data.dossier_type ? data.dossier_type.delai : '';
        let deadline;
        if (delai) {
            if (hour < 12) {
                deadline = date.setDate(date.getDate() + delai)
            } else {
                deadline = date.setDate(date.getDate() + delai + 1)
            }
            setData('deadline', new Date(deadline));
        }

    }, [data.dossier_type]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('publishingStore'));
    }

    return (
        <Authenticated auth={props.auth}>
            <div className="stepper stepper-pills" id="kt_stepper_example_basic" ref={stepperRef}>
                <div className="stepper-nav flex-center flex-wrap mb-10">
                    <div className="stepper-item mx-8 my-4 current" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center">
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
                        <div className="stepper-wrapper d-flex align-items-center">
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
                        <div className="stepper-wrapper d-flex align-items-center">
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
                        <div className="stepper-wrapper d-flex align-items-center">
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
                        <div className="stepper-wrapper d-flex align-items-center">
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
                        <div className="flex-column current" data-kt-stepper-element="content">
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Dossier contact</label>
                                    <input type="text" className="form-control form-control-solid" name="dossier_contact" onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Object</label>
                                    <input type="text" className="form-control form-control-solid" name="object" onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Product</label>
                                    <input type="text" className="form-control form-control-solid" name="productName" value={data.productName} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Submission country</label>
                                    <input type="text" className="form-control form-control-solid" name="country" value={data.country} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Dossier type</label>
                                    <Select options={[
                                        { label: 'Variation Dossier', value: 'Variation Dossier', delai: 3 },
                                        { label: 'Responses to questions Dossier', value: 'Responses to questions Dossier', delai: 3 },
                                        { label: 'PSUR/ PSUSA Dossier', value: 'PSUR/ PSUSA Dossier', delai: 3 },
                                        { label: 'Current View (Draft seq)', value: 'Current View (Draft seq)', delai: 1 },
                                    ]}
                                        name='dossier_type'
                                        onChange={(e) => handleSelectChange(e, 'dossier_type')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.dossier_type}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Dossier count</label>
                                    <input type="text" className="form-control form-control-solid" name="dossier_count" value={data.dossier_count} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-12'>

                                    <label className="form-label">Remarks</label>
                                    <textarea className="form-control form-control-solid" rows={3} name="remarks" onChange={handleChange} />
                                </div>

                            </div>
                        </div>
                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">UUID</label>
                                    <input type="text" className="form-control form-control-solid" name="uuid" value={data.uuid} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Submission type</label>
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
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.submission_type}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Submission mode</label>
                                    <Select options={[
                                        { label: 'Single', value: 'Single' },
                                        { label: 'Grouping', value: 'Grouping' },
                                        { label: 'Worksharing', value: 'Worksharing' },
                                    ]}
                                        name='submission_mode'
                                        onChange={(e) => handleSelectChange(e, 'submission_mode')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.submission_mode}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Procedure Tracking N°</label>
                                    <Select options={tno}
                                        name='tracking'
                                        onChange={(e) => handleSelectChange(e, 'tracking')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.tracking}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Submission unit</label>
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
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.submission_unit}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
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
                                    <label className='col-md-4 col-sm-12'>Invented name</label>
                                    <input type="text" className="form-control form-control-solid" name="inn" value={data.inn} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='row mb-10'>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Sequence</label>
                                    <input type="text" className="form-control form-control-solid" name="sequence" value={data.sequence} onChange={handleChange} />
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
                                    <textarea rows={3} className="form-control form-control-solid" name='mtremarks' onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className='row mb-10'>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Indication</label>
                                    <Select
                                        name='indication'
                                        onChange={(e) => handleSelectChange(e, 'indication')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.indication}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Manufacturer</label>
                                    <Select
                                        name='manufacturer'
                                        onChange={(e) => handleSelectChange(e, 'manufacturer')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.manufacturer}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Drug substance</label>
                                    <input type="text" className="form-control form-control-solid" name="drug_substance" value={data.drug_substance} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='row mb-10'>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Drug substance manufacturer</label>
                                    <Select
                                        name='drug_substance_manufacturer'
                                        onChange={(e) => handleSelectChange(e, 'drug_substance_manufacturer')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.drug_substance_manufacturer}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Drug product</label>
                                    <input type="text" className="form-control form-control-solid" name="drug_product" value={data.drug_product} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Drug product manufacturer</label>
                                    <Select
                                        name='drug_product_manufacturer'
                                        onChange={(e) => handleSelectChange(e, 'drug_product_manufacturer')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.drug_product_manufacturer}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                            </div>
                            <div className='row mb-10'>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Dosage form</label>
                                    <Select
                                        name='dosage_form'
                                        onChange={(e) => handleSelectChange(e, 'dosage_form')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.dosage_form}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Excipient</label>
                                    <Select
                                        name='excipient'
                                        onChange={(e) => handleSelectChange(e, 'excipient')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.excipient}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className='row mb-10'>
                                <div className='col-md-6 col-lg-6 col-sm-12'>
                                    <label className="form-label">Attached documents</label>
                                    <input type="file" multiple className="form-control form-control-solid" name="doc" onChange={handleUploadFileChange} />
                                </div>
                                <div className='col-md-6 col-lg-6 col-sm-12'>
                                    <div className='d-flex align-items-center text-gray-400 h-100'>
                                        {data.doc ? data.doc.map((ele) => (
                                            <span className='me-2 fs-5'>{ele.name}</span>
                                        )) : ''}
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-10">
                                <label className="form-label">Remarks</label>
                                <textarea className="form-control form-control-solid" rows={3} name="docremarks" placeholder="" onChange={handleChange} />
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
        </Authenticated>
    )
}

export default CreateN;