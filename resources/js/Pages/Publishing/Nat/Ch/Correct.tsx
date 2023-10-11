import { FC, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import Authenticated from '../../../../Layouts/AuthenticatedLayout'
import { IStepperOptions, StepperComponent } from '../../../../_metronic/assets/ts/components'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import Select from 'react-select';
import moment from 'moment';
import { useForm } from '@inertiajs/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const StepperOptions: IStepperOptions = {
    startIndex: 6,
    animation: false,
    animationSpeed: '0.3s',
    animationNextClass: 'animate__animated animate__slideInRight animate__fast',
    animationPreviousClass: 'animate__animated animate__slideInLeft animate__fast',
}

const Correct = (props: any) => {

    function createMarkup(msg: any) {
        return { __html: msg.message };
    }

    var params = new URLSearchParams(window.location.search);
    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const [tnoptions, setTnoptions] = useState();

    const { folder } = props

    const { metadata } = props;

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        id: folder ? folder._id : '',
        form: folder ? folder.form : params.get('form'),
        region: folder ? folder.region : params.get('region'),
        procedure: folder ? folder.procedure : params.get('procedure'),
        product_name: folder ? folder.product_name : params.get('product'),
        dossier_contact: folder ? folder.dossier_contact : props.auth.user.trigramme,
        object: folder ? folder.object : '',
        country: 'Switzerland',
        dossier_type: folder ? folder.dossier_type : '',
        dossier_count: folder ? folder.dossier_count : '',
        remarks: folder ? folder.remarks : '',
        tracking: folder.tracking,
        submission_description: folder ? folder.submission_description : '',
        invented_name: folder ? folder.invented_name : '',
        galenic_form: folder.galenic_form,
        swissmedic: folder.swissmedic,
        galenic_name: folder.gemran,
        dmf: folder.dmf_number,
        pmf: folder ? folder.pmf : '',
        inn: folder.inn,
        applicant: folder.applicant,
        dmf_holder: folder ? folder.dmf_holder : '',
        pmf_holder: folder ? folder.pmf_holder : '',
        agency_code: folder.agencyCode,
        tpa: folder.tpa,
        sequence: folder ? folder.sequence : '',
        r_sequence: folder ? folder.r_sequence : '',
        application_type: folder ? folder.application_type : '',
        mtremarks: folder ? folder.mtremarks : '',
        indication: folder ? folder.indication : '',
        manufacturer: folder ? folder.manufacturer : '',
        drug_substance: folder ? folder.drug_substance : '',
        drug_substance_manufacturer: folder ? folder.drug_substance_manufacturer : '',
        drug_product: folder ? folder.drug_product : '',
        drug_product_manufacturer: folder ? folder.drug_product_manufacturer : '',
        dosage_form: folder ? folder.dosage_form : '',
        excipient: folder ? folder.excipient : '',
        doc: folder ? folder.doc : '',
        docremarks: folder ? folder.docremarks : '',
        request_date: new Date,
        deadline: new Date,
        adjusted_deadline: new Date,
        adjustedDeadlineComments: '',
        correction: { user: { id: props.auth.user.id, name: props.auth.user.name }, date: new Date, message: '', source: [] }
    });

    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement, StepperOptions)
    }, [])

    // useEffect(() => {
    //     let pdata = { ...data };
    //     let tn = metadata.trackingNumber
    //     tn = tn.split(/\r?\n/)
    //     if (tn.length > 1) {
    //         let tno = tn.map((val) => {
    //             return { label: val, value: val }
    //         })
    //         pdata.tracking = ''
    //         setTnoptions(tno)
    //     } else {
    //         let tno = tn.map((val) => {
    //             return { label: val, value: val }
    //         })
    //         setTnoptions(tno)
    //         pdata.tracking = { label: tn[0], value: tn[0] }
    //     }
    //     setData(pdata)
    // }, [])

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

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('correct-publishing'));
    }

    const handleMessageChange = (e) => {
        const editorData = e.getData();
        let arr = { ...data }
        arr.correction.message = editorData
        setData(arr)
    }

    const handleSourceChange = (e) => {
        let arr = { ...data }
        if (e.target.checked) {
            arr.correction.source.push(e.target.value)
        } else {
            const index = arr.correction.source.indexOf(e.target.value);
            arr.correction.source.splice(index, 1)
        }
        setData(arr)

    }


    return (
        <>
            <div className="stepper stepper-pills" id="kt_stepper_example_basic" ref={stepperRef}>
                <div className="stepper-nav flex-center flex-wrap mb-10">
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
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
                    <div className="stepper-item mx-8 my-4 current" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center">
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">6</span>
                            </div>
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 6
                                </h3>

                                <div className="stepper-desc">
                                    Dossier Review
                                </div>
                            </div>
                        </div>
                        <div className="stepper-line h-40px"></div>
                    </div>
                </div>
                <form className="form" id="kt_stepper_example_basic_form" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Dossier contact</label>
                                    <input type="text" className="form-control form-control-solid" defaultValue={data.dossier_contact} name="dossier_contact" readOnly onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Object</label>
                                    <input type="text" className="form-control form-control-solid" name="object" defaultValue={data.object} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Product</label>
                                    <input type="text" className="form-control form-control-solid" name="product_name" defaultValue={data.product_name} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Submission country</label>
                                    <input type="text" className="form-control form-control-solid" name="country" defaultValue={data.country} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Dossier type</label>
                                    <Select options={[
                                        { label: 'Baseline Dossier (M1-M2-M3)', value: 'Baseline Dossier (M1-M2-M3)', delai: 5 },
                                        { label: 'Baseline Dossier (M1-M5)', value: 'Baseline Dossier (M1-M5)', delai: 9 },
                                        { label: 'Marketing Authorisation Dossier / BLA (m1-m5)', value: 'Marketing Authorisation Dossier / BLA (m1-m5)', delai: 9 },
                                        { label: 'Renewal Dossier', value: 'Renewal Dossier', delai: 9 },
                                        { label: 'Variation Dossier', value: 'Variation Dossier', delai: 3 },
                                        { label: 'Responses to questions Dossier', value: 'Responses to questions Dossier', delai: 3 },
                                        { label: 'PSUR/ PSUSA Dossier', value: 'PSUR/ PSUSA Dossier' },
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
                                    <input type="text" className="form-control form-control-solid" name="dossier_count" defaultValue={data.dossier_count} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-12'>
                                    <label className="form-label">Remarks</label>
                                    <textarea className="form-control form-control-solid" rows={3} defaultValue={data.remarks} name="remarks" onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Application number</label>
                                    <Select options={tnoptions ? tnoptions : ''}
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
                                    <label className="form-label">Submission description</label>
                                    <input type="text" className="form-control form-control-solid" name="submission_description" defaultValue={data.submission_description} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Invented name</label>
                                    <input type="text" className="form-control form-control-solid" name="invented_name" defaultValue={data.invented_name} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Galenic form</label>
                                    <Select options={[]}
                                        name='galenic_form'
                                        onChange={(e) => handleSelectChange(e, 'galenic_form')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.galenic_form}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Authorization number (Swissmedic)</label>
                                    <input type="text" className="form-control form-control-solid" name="swissmedic" defaultValue={data.swissmedic} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Galenic name (German)</label>
                                    <input type="text" className="form-control form-control-solid" name="galenic_name" defaultValue={data.galenic_name} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">DMF number</label>
                                    <input type="text" className="form-control form-control-solid" name="dmf" defaultValue={data.dmf} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">PMF number</label>
                                    <input type="text" className="form-control form-control-solid" name="pmf" defaultValue={data.pmf} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">INN</label>
                                    <input type="text" className="form-control form-control-solid" name="inn" defaultValue={data.inn} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Agency code</label>
                                    <input type="text" className="form-control form-control-solid" name="agency_code" defaultValue={data.agency_code} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Article 13 TPA</label>
                                    <input type="text" className="form-control form-control-solid" name="tpa" defaultValue={data.tpa} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">eCTD Sequence</label>
                                    <input type="text" className="form-control form-control-solid" name="sequence" defaultValue={data.sequence} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Related eCTD sequence</label>
                                    <input type="text" className="form-control form-control-solid" name="r_sequence" defaultValue={data.r_sequence} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Application type</label>
                                    <Select options={[
                                        { label: 'Used for meetings', value: 'Used for meetings' },
                                        { label: 'New Application - New Active Substance (na-nas)', value: 'New Application - New Active Substance (na-nas)' },
                                        { label: 'New Application - Known Active Substance (na-bws)', value: 'New Application - Known Active Substance (na-bws)' },
                                        { label: 'New Application - Co-Marketing Medical Product (na-co-marketing)', value: 'New Application - Co-Marketing Medical Product (na-co-marketing)' },
                                        { label: 'New Application - Parallel Import (na-pi)', value: 'New Application - Parallel Import (na-pi)' },
                                        { label: 'Variation Type IA', value: 'Variation Type IA' },
                                        { label: 'Variation Type IA for immediate notification', value: 'Variation Type IA for immediate notification' },
                                        { label: 'Variation Type IB', value: 'Variation Type IB' },
                                        { label: 'Variation Type II', value: 'Variation Type II' },
                                        { label: 'Extension', value: 'Extension' },
                                        { label: 'Renewal - Prolongation, renouncement of prolongation of Marketing Authorization', value: 'Renewal - Prolongation, renouncement of prolongation of Marketing Authorization' },
                                        { label: 'Follow-up Measure', value: 'Follow-up Measure' },
                                        { label: 'Submission of PSUR', value: 'Submission of PSUR' },
                                        { label: 'Withdrawal of authorised medical products', value: 'Withdrawal of authorised medical products' },
                                        { label: 'Transfer of Marketing Authorization, change of name or address of applicant', value: 'Transfer of Marketing Authorization, change of name or address of applicant' },
                                        { label: 'Drug Master File', value: 'Drug Master File' },
                                        { label: 'Plasma Master File', value: 'Plasma Master File' },
                                        { label: 'Application for recognition of orphan drug status or fast track status', value: 'Application for recognition of orphan drug status or fast track status' },
                                        { label: 'Reformat : Baseline eCTD submission. No content change, no review', value: 'Reformat : Baseline eCTD submission. No content change, no review' },
                                        { label: 'Suupplemental information (could include for example response to content validation issuers or answers to question)', value: 'Suupplemental information (could include for example response to content validation issuers or answers to question)' },
                                        { label: 'Correction of errors detected in a sequence', value: 'Correction of errors detected in a sequence' },
                                    ]}
                                        name='application_type'
                                        onChange={(e) => handleSelectChange(e, 'application_type')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.application_type}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                            </div>
                            <div className='row mb-10'>
                                <div className='col-12'>
                                    <label className="form-label">Remarks</label>
                                    <textarea rows={3} className="form-control form-control-solid" defaultValue={data.mtremarks} name='mtremarks' onChange={handleChange} />
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
                                    <input type="text" className="form-control form-control-solid" name="drug_substance" defaultValue={data.drug_substance} onChange={handleChange} />
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
                                    <input type="text" className="form-control form-control-solid" name="drug_product" defaultValue={data.drug_product} onChange={handleChange} />
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
                            <div className="row mb-10">
                                <div className='col-6'>
                                    <label htmlFor="" className="form-label">Adjusted deadline</label>
                                    <Flatpickr
                                        data-enable-time
                                        value={data.adjusted_deadline}
                                        className="form-control"
                                        options={{ dateFormat: "d-M-Y H:i" }}
                                        onChange={(date) => setData('adjusted_deadline', date)}
                                    />
                                </div>

                            </div>
                            <div className="row mb-10">
                                <div className='col-12'>
                                    <label htmlFor="" className="form-label">Comments</label>
                                    <textarea className="form-control form-control-solid" cols={3} name="adjustedDeadlineComments" onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-column current" data-kt-stepper-element="content">
                            <div className="accordion accordion-icon-toggle bg-body" id="kt_accordion_2">
                                <div className="mb-5">
                                    <div className="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_1">
                                        <span className="accordion-icon">
                                            <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                                        </span>
                                        <h3 className="fs-4 fw-semibold mb-0 ms-4">Dossier audit</h3>
                                    </div>
                                    <div id="kt_accordion_2_item_1" className="fs-6 collapse p-10" data-bs-parent="#kt_accordion_2">
                                        <div className='scroll-y me-n5 pe-5'
                                            data-kt-element="messages"
                                            data-kt-scroll="true"
                                            data-kt-scroll-activate="{default: false, lg: true}"
                                            data-kt-scroll-max-height="auto">
                                            {
                                                folder.audit ? folder.audit.map((msg, i) => (
                                                    msg.message && msg.user !== props.auth.user.id ?
                                                        <div key={i} className='d-flex justify-content-start mb-10'>
                                                            <div className='d-flex flex-column align-items-start'>
                                                                <div className='d-flex align-items-center mb-2'>
                                                                    <div className='symbol symbol-35px bg-secondary symbol-circle'>
                                                                        <span className="symbol-label bg-info text-inverse-primary fw-bold text-uppercase">{msg.user.name}</span>
                                                                    </div>
                                                                    <div className='ms-3'>
                                                                        <span className='text-muted fs-8 mb-1'>{moment(msg.date).format('MM/DD/YYYY H:s')}</span>
                                                                        {/* <span className='fs-5 fw-bold text-gray-900 text-hover-primary ms-1'>You</span> */}
                                                                    </div>

                                                                </div>
                                                                <div className='p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end' data-kt-element="message-text">
                                                                    {msg.message}
                                                                </div>
                                                            </div>
                                                        </div> :
                                                        <div key={i} className='d-flex justify-content-end mb-10'>
                                                            <div className='d-flex flex-column align-items-end'>
                                                                <div className='d-flex align-items-center mb-2'>

                                                                    <div className='me-3'>
                                                                        <span className='text-muted fs-8 mb-1'>{moment(msg.date).format('MM/DD/YYYY H:s')}</span>
                                                                        {/* <span className='fs-5 fw-bold text-gray-900 text-hover-primary ms-1'>You</span> */}
                                                                    </div>
                                                                    <div className='symbol symbol-35px bg-secondary symbol-circle'>
                                                                        <span className="symbol-label bg-info text-inverse-primary fw-bold text-uppercase">{msg.user.name}</span>
                                                                    </div>

                                                                </div>
                                                                <div className='p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end' data-kt-element="message-text">
                                                                    {msg.message}
                                                                </div>
                                                            </div>
                                                        </div>
                                                )
                                                ) : ''
                                            }
                                        </div>
                                        {/* <textarea className="form-control form-control-flush mb-3" rows={1} data-kt-element="input" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Type a message"></textarea>

                                        <div className="d-flex flex-stack">
                                            <button className="btn btn-primary btn-sm" type="button" data-kt-element="send" onClick={handleMessageSend} >Send</button>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_3_item_2">
                                        <span className="accordion-icon">
                                            <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                                        </span>
                                        <h3 className="fs-4 fw-semibold mb-0 ms-4">Delivery comment</h3>
                                    </div>
                                    <div id="kt_accordion_3_item_2" className="fs-6 collapse p-10" data-bs-parent="#kt_accordion_2">
                                        {folder.deliveryComment ? folder.deliveryComment.map((msg, i) => (
                                            <div key={i} className='d-flex justify-content-start mb-10'>
                                                <div className='d-flex flex-column align-items-start'>
                                                    <div className='d-flex align-items-center mb-2'>
                                                        <div className='symbol symbol-35px bg-secondary symbol-circle'>
                                                            <span className="symbol-label bg-info text-inverse-primary fw-bold text-uppercase">EK</span>
                                                        </div>
                                                        <div className='ms-3'>
                                                            <span className='text-muted fs-8 mb-1'>{moment(msg.date).format('MM/DD/YYYY H:s')}</span>
                                                            {/* <span className='fs-5 fw-bold text-gray-900 text-hover-primary ms-1'>You</span> */}
                                                        </div>

                                                    </div>
                                                    <div className='p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end' data-kt-element="message-text">
                                                        {msg.message}
                                                    </div>
                                                </div>
                                            </div>
                                        )) : ''}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="accordion-header py-3 d-flex" data-bs-toggle="collapse" data-bs-target="#kt_accordion_4_item_3">
                                        <span className="accordion-icon">
                                            <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                                        </span>
                                        <h3 className="fs-4 fw-semibold mb-0 ms-4">Correction requests</h3>
                                    </div>
                                    <div id="kt_accordion_4_item_3" className="fs-6 collapse p-10 show" data-bs-parent="#kt_accordion_2">
                                        <div className='mb-10'>
                                            {
                                                folder.correction ? folder.correction.map((msg, i) => (
                                                    <div key={i} dangerouslySetInnerHTML={createMarkup(msg)} />
                                                ))
                                                    : ''
                                            }
                                        </div>
                                        {/* <label className='form-label'>Source</label> */}
                                        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9 mb-10'>
                                            <div className='col'>
                                                <label className='btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6'>
                                                    <span className='form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1'>
                                                        <input className='form-check-input' type='checkbox' name='source' value='stg' onChange={handleSourceChange} />
                                                    </span>
                                                    <span className='ms-5'>
                                                        <span className='fs-4 fw-bold text-gray-800 d-block'>Update</span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className='col'>
                                                <label className='btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6'>
                                                    <span className='form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1'>
                                                        <input className='form-check-input' type='checkbox' name='source' value='ekemia' onChange={handleSourceChange} />
                                                    </span>
                                                    <span className='ms-5'>
                                                        <span className='fs-4 fw-bold text-gray-800 d-block'>Correction</span>
                                                    </span>
                                                </label>
                                            </div>
                                            {/* <div className='col'>
                                                <label className='btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6'>
                                                    <span className='form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1'>
                                                        <input className='form-check-input' type='radio' name='source' value='all' onChange={(e) => setSource(e.target.value)} />
                                                    </span>
                                                    <span className='ms-5'>
                                                        <span className='fs-4 fw-bold text-gray-800 d-block'>All</span>
                                                    </span>
                                                </label>
                                            </div> */}
                                        </div>
                                        {/* <label className='form-label'>Comment</label> */}
                                        <div>

                                            <CKEditor
                                                editor={ClassicEditor}
                                                data=""
                                                onReady={editor => {
                                                    // You can store the "editor" and use when it is needed.
                                                    console.log('Editor is ready to use!', editor);
                                                }}
                                                onChange={(event, editor) => handleMessageChange(editor)}
                                            />
                                            {/* <div className="d-flex flex-stack mt-5">
                                                <button className="btn btn-primary btn-sm" type="button" data-kt-element="send" onClick={handleMessageSend}>Send</button>
                                            </div> */}
                                        </div>
                                    </div>
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
            </div >
        </>
    )
}

Correct.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Correct;