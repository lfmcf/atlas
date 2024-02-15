import { FC, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import Authenticated from '../../../../Layouts/AuthenticatedLayout'
import { IStepperOptions, StepperComponent } from '../../../../_metronic/assets/ts/components'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import Select from 'react-select';
import moment from 'moment';
import { router, useForm } from '@inertiajs/react';
import { gcccountry } from '../../../Lab/MetaDataList';
import DropZone from '../../../../Components/Dropzone';
import axios from 'axios';
import StatusComponent from '../../../../Components/StatusComponent';

const StepperOptions: IStepperOptions = {
    startIndex: 6,
    animation: false,
    animationSpeed: '0.3s',
    animationNextClass: 'animate__animated animate__slideInRight animate__fast',
    animationPreviousClass: 'animate__animated animate__slideInLeft animate__fast',
}

const Audit = (props: any) => {

    var params = new URLSearchParams(window.location.search);
    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const { metadata, folder } = props
    const [tnoptions, setTnoptions] = useState();

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        id: folder ? folder._id : '',
        form: folder ? folder.form : params.get('form'),
        region: folder ? folder.region : params.get('region'),
        procedure: folder ? folder.procedure : params.get('procedure'),
        product_name: folder ? folder.product_name : params.get('product'),
        dossier_contact: folder ? folder.dossier_contact : props.auth.user.trigramme,
        object: folder ? folder.object : '',
        country: folder.country,
        dossier_type: folder ? folder.dossier_type : '',
        dossier_count: folder ? folder.dossier_count : '',
        remarks: folder ? folder.remarks : '',
        tracking: folder ? folder.tracking : '',
        trackingExtra: folder ? folder.trackingExtra : '',
        applicant: folder.applicant,
        agency_code: folder.agency_code,
        atc: folder ? folder.atc : '',
        submission_type: folder ? folder.submission_type : '',
        submission_mode: folder ? folder.submission_mode : '',
        invented_name: folder ? folder.invented_name : '',
        inn: folder.inn,
        sequence: folder ? folder.sequence : '',
        r_sequence: folder ? folder.r_sequence : '',
        uuid: folder ? folder.uuid : metadata.uuid,
        submission_description: folder ? folder.submission_description : '',
        mtremarks: folder ? folder.mtremarks : '',
        indication: folder ? folder.indication : '',
        manufacturer: folder ? folder.manufacturer : '',
        drug_substance: folder ? folder.drug_substance : '',
        drug_substance_manufacturer: folder ? folder.drug_substance_manufacturer : '',
        drug_product: folder ? folder.drug_product : '',
        drug_product_manufacturer: folder ? folder.drug_product_manufacturer : '',
        dosage_form: folder ? folder.dosage_form : '',
        excipient: folder ? folder.excipient : '',
        doc: folder && folder.doc !== null ? folder.doc : [],
        docremarks: folder ? folder.docremarks : '',
        request_date: new Date,
        deadline: new Date,
        adjusted_deadline: folder.adjusted_deadline ? folder.adjusted_deadline : new Date,
        adjustedDeadlineComments: folder.adjustedDeadlineComments ? folder.adjustedDeadlineComments : '',
        audit: { user: { id: props.auth.user.id, name: props.auth.user.name }, date: new Date, message: '' },
        status: folder ? folder.status : '',
    });

    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement, StepperOptions)
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
        instData.doc.push(...e)
        setData(instData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('audit-publishing-nat-gcc'));
    }

    const handleCommentChange = (e) => {
        let arr = { ...data }
        arr.audit.message = e.target.value
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
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
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
                    <div className="stepper-item mx-8 my-4 current" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => stepper.current?.goto(6)} style={{ cursor: 'pointer' }}>
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
                                    <input type="text" className="form-control form-control-solid" name="country" defaultValue={data.country.value} disabled />
                                    {/* <Select options={gcccountry}
                                        name="country"
                                        onChange={(e) => handleSelectChange(e, 'country')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={[{ label: data.country, value: data.country }]}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    /> */}
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
                                    <label className="form-label">Procedure Tracking N°</label>
                                    <div className='d-flex align-items-center'>
                                        <Select options={tnoptions ? tnoptions : ''}
                                            name='tracking'
                                            onChange={(e) => handleSelectChange(e, 'tracking')}
                                            className="basic"
                                            classNamePrefix="basic"
                                            placeholder=''
                                            isClearable
                                            defaultValue={data.tracking ? { value: data.tracking, label: data.tracking } : ''}
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ ...base, width: '100%' }) }}
                                        />
                                        <input type='text' className='form-control form-control-solid' name="trackingExtra" style={{ width: '20%' }} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Applicant</label>
                                    <input type="text" className="form-control form-control-solid" name="applicant" defaultValue={data.applicant} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Agency code</label>
                                    <input type="text" className="form-control form-control-solid" name="agency_code" defaultValue={data.agency_code} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">ATC</label>
                                    <input type="text" className="form-control form-control-solid" name="atc" defaultValue={data.atc} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Submission type</label>
                                    <Select options={[
                                        { label: 'Active submission', value: 'Active submission' },
                                        { label: 'Extension submission', value: 'Extension submission' },
                                        { label: 'New Marketing Authorization Application - Generics', value: 'New Marketing Authorization Application - Generics' },
                                        { label: 'New Marketing Authorization Application - New Chemical Entity', value: 'New Marketing Authorization Application - New Chemical Entity' },
                                        { label: 'New Marketing Authorization Application - Biological Products', value: 'New Marketing Authorization Application - Biological Products' },
                                        { label: 'New Marketing Authorization Application - Radiopharmaceuticals', value: 'New Marketing Authorization Application - Radiopharmaceuticals' },
                                        { label: 'None (in the case of reformatting the application)', value: 'None (in the case of reformatting the application)' },
                                        { label: 'Plasma Master File', value: 'Plasma Master File' },
                                        { label: 'Periodic Safety Update Report', value: 'Periodic Safety Update Report' },
                                        { label: 'PSUR single assessment procedure', value: 'PSUR single assessment procedure' },
                                        { label: 'Renewal (Yearly or 5-Yearly)', value: 'Renewal (Yearly or 5-Yearly)' },
                                        { label: 'Risk Management Plan', value: 'Risk Management Plan' },
                                        { label: 'Transfer of Marketing Authorization', value: 'Transfer of Marketing Authorization' },
                                        { label: 'Urgent Safety Restriction', value: 'Urgent Safety Restriction' },
                                        { label: 'Variation Type I', value: 'Variation Type I' },
                                        { label: 'Variation Type II', value: 'Variation Type II' },
                                        { label: 'Withdrawal during assessment or withdrawal of Marketing Authorization', value: 'Withdrawal during assessment or withdrawal of Marketing Authorization' },
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
                                    <label className="form-label">Submission unit</label>
                                    <Select options={[
                                        { label: 'Initial submission to start any regulatory activity', value: 'Initial submission to start any regulatory activity' },
                                        { label: 'Response to any kind of question, validation issues out-standing information requested by the agency', value: 'Response to any kind of question, validation issues out-standing information requested by the agency' },
                                        { label: 'Othe additional information (should only be used if response is not suitable)', value: 'Othe additional information (should only be used if response is not suitable)' },
                                        { label: 'Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)', value: 'Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)' },
                                        { label: 'Correction of the published annexes in the GCC procedure (usually shortly after approval)', value: 'Correction of the published annexes in the GCC procedure (usually shortly after approval)' },
                                        { label: 'Reformatting of an existing submission application from any format to Ectd', value: 'Reformatting of an existing submission application from any format to Ectd' },
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
                                    <label className="form-label">Invented name</label>
                                    <input type="text" className="form-control form-control-solid" name="invented_name" defaultValue={data.invented_name} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">INN</label>
                                    <input type="text" className="form-control form-control-solid" name="inn" defaultValue={data.inn} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Sequence</label>
                                    <input type="text" className="form-control form-control-solid" name="sequence" defaultValue={data.sequence} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Related Sequence</label>
                                    <input type="text" className="form-control form-control-solid" name="r_sequence" defaultValue={data.r_sequence} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">UUID</label>
                                    <input type="text" className="form-control form-control-solid" name="uuid" defaultValue={data.uuid} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Submission description</label>
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
                                    <textarea className="form-control form-control-solid" cols={3} name="adjustedDeadlineComments" value={data.adjustedDeadlineComments} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-column current" data-kt-stepper-element="content">
                            <div className="accordion accordion-icon-toggle bg-body" id="kt_accordion_2">
                                <div className="mb-5">
                                    <div className="accordion-header py-3 d-flex" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_1">
                                        <span className="accordion-icon">
                                            <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                                        </span>
                                        <h3 className="fs-4 fw-semibold mb-0 ms-4">Dossier audit</h3>
                                    </div>
                                    <div id="kt_accordion_2_item_1" className="fs-6 collapse show p-10" data-bs-parent="#kt_accordion_2">
                                        <div className='scroll-y me-n5 pe-5'
                                            data-kt-element="messages"
                                            data-kt-scroll="true"
                                            data-kt-scroll-activate="{default: false, lg: true}"
                                            data-kt-scroll-max-height="auto">
                                            {
                                                folder.audit ? folder.audit.map((msg, i) => (
                                                    msg.message && msg.user.id !== props.auth.user.id ?
                                                        <div key={i} className='d-flex justify-content-start mb-10'>
                                                            <div className='d-flex flex-column align-items-start'>
                                                                <div className='d-flex align-items-center mb-2'>
                                                                    <div className='symbol symbol-35px bg-secondary symbol-circle'>
                                                                        <span className="symbol-label bg-info text-inverse-primary fw-bold text-uppercase">{msg.user.name}</span>
                                                                    </div>
                                                                    <div className='ms-3'>
                                                                        <span className='text-muted fs-8 mb-1'>{moment(msg.date).format('MM/DD/YYYY H:s')}</span>
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
                                        <textarea className="form-control form-control-flush mb-3" rows={1} data-kt-element="input" onChange={handleCommentChange} placeholder="Type a message"></textarea>

                                        {/* <div className="d-flex flex-stack">
                                            <button className="btn btn-primary btn-sm" type="button" data-kt-element="send" onClick={handleMessageSend} >Send</button>
                                        </div> */}
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
                            {props.auth.user.current_team_id == 3 ?
                                <button type="button" className="btn btn-primary me-2" data-kt-stepper-action="submit" onClick={() => router.post(route('progress-publishing', { id: data.id }))}>
                                    <span className="indicator-label">
                                        Accept
                                    </span>
                                </button>
                                : ''}
                            <button type="submit" className="btn btn-primary" data-kt-stepper-action="submit">
                                <span className="indicator-label">
                                    Reject
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

Audit.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Audit;