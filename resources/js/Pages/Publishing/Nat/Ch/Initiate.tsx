import { FC, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import Authenticated from '../../../../Layouts/AuthenticatedLayout'
import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import Select from 'react-select';
import moment from 'moment';
import { useForm } from '@inertiajs/react';
import DropZone from '../../../../Components/Dropzone';

const Initiate = (props: any) => {

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
        dossier_contact: folder ? folder.dossier_contact : props.auth.user.trigramme.toUpperCase(),
        object: folder ? folder.object : '',
        country: 'Switzerland',
        dossier_type: folder ? folder.dossier_type : '',
        dossier_count: folder ? folder.dossier_count : '',
        remarks: folder ? folder.remarks : '',
        tracking: metadata.trackingNumber,
        submission_description: folder ? folder.submission_description : '',
        invented_name: folder ? folder.invented_name : '',
        galenic_form: metadata.galenic_form,
        swissmedic: metadata.swissmedic,
        galenic_name: metadata.gemran,
        dmf: metadata.dmf_number,
        pmf: folder ? folder.pmf : '',
        inn: metadata.inn,
        applicant: metadata.applicant,
        dmf_holder: folder ? folder.dmf_holder : '',
        pmf_holder: folder ? folder.pmf_holder : '',
        agency_code: metadata.agencyCode,
        tpa: metadata.tpa,
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
    });

    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    }, [])

    useEffect(() => {
        let pdata = { ...data };
        let tn = metadata.trackingNumber
        tn = tn.split(/\r?\n/)
        if (tn.length > 1) {
            let tno = tn.map((val) => {
                return { label: val, value: val }
            })
            pdata.tracking = ''
            setTnoptions(tno)
        } else {
            let tno = tn.map((val) => {
                return { label: val, value: val }
            })
            setTnoptions(tno)
            pdata.tracking = { label: tn[0], value: tn[0] }
        }
        setData(pdata)
    }, [])

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
        // if (delai) {
        //     if (hour < 12) {
        //         deadline = date.setDate(date.getDate() + delai)
        //     } else {
        //         deadline = date.setDate(date.getDate() + delai + 1)
        //     }
        //     setData('deadline', new Date(deadline));
        // }

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

    // const handleUploadFileChange = (e) => {
    //     let instData = { ...data }
    //     instData.doc = []
    //     Promise.all([...e.target.files].map((fileToDataURL) => instData.doc.push(fileToDataURL)))
    //     setData(instData)
    // }
    const handleUploadFileChange = (e) => {
        let instData = { ...data }
        instData.doc.push(...e)
        setData(instData)
    }

    const handleSubmit = (e, type) => {
        e.preventDefault();
        post(route('store-publishing-nat-ch', { type: type }));
    }

    const removeAll = () => {
        let instData = { ...data }
        instData.doc = []
        setData(instData)
    }

    const deleletFile = (i) => {
        var arr = { ...data }
        arr.doc.splice(i, 1)
        setData(arr)
    }


    return (
        <>
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
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => stepper.current?.goto(2)} style={{ cursor: 'pointer' }}>
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
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => stepper.current?.goto(3)} style={{ cursor: 'pointer' }}>
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
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => stepper.current?.goto(4)} style={{ cursor: 'pointer' }}>
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
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => stepper.current?.goto(5)} style={{ cursor: 'pointer' }}>
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
                </form>
            </div>
        </>
    )
}

Initiate.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Initiate;