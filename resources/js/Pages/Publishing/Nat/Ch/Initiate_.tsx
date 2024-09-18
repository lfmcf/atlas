import { FC, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import Authenticated from '../../../../Layouts/AuthenticatedLayout'
import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import Select from 'react-select';
import moment from 'moment';
import { useForm } from '@inertiajs/react';
import DropZone from '../../../../Components/Dropzone';
import axios from 'axios';
import GeneralInformation from '../../../../Components/GeneralInformation';
import InsertProductMetaData from '../../../../Components/InsertProductMetaData';

const Initiate_ = (props: any) => {

    var params = new URLSearchParams(window.location.search);
    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const [myErrors, setMyErroes] = useState({ dossier_type: '', dossier_count: '', sequence: '' })

    const { folder, agc, metapro } = props

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        id: folder ? folder._id : '',
        form: folder ? folder.form : 'Publishing',
        region: folder ? folder.region : params.get('region'),
        procedure: folder ? folder.procedure : params.get('procedure'),
        productName: folder ? folder.product_name : params.get('product'),
        dossier_contact: folder ? folder.dossier_contact : props.auth.user.trigramme.toUpperCase(),
        object: folder ? folder.object : '',
        country: { value: 'Switzerland', code: 'CH' },
        dossier_type: folder ? folder.dossier_type : '',
        dossier_count: folder ? folder.dossier_count : '',
        remarks: folder ? folder.remarks : '',
        tracking: '',
        submission_description: folder ? folder.submission_description : '',
        invented_name: folder ? folder.invented_name : '',
        galenic_form: '',
        swissmedic: '',
        galenic_name: '',
        dmf: '',
        pmf: folder ? folder.pmf : '',
        inn: '',
        applicant: 'STALLERGENES',
        dmf_holder: folder ? folder.dmf_holder : '',
        pmf_holder: folder ? folder.pmf_holder : '',
        agency_code: 'Swissmedic',
        tpa: '',
        sequence: folder ? folder.sequence : '',
        r_sequence: folder ? folder.r_sequence : '',
        application_type: folder ? folder.application_type : '',
        mtremarks: folder ? folder.mtremarks : '',
        indication: folder ? folder.indication : '',
        drug_substance: folder ? folder.drug_substance : [{ 'drug_substance': '', 'manufacturer': [] }],
        drug_product: folder ? folder.drug_product : [{ 'drug_product': '', 'manufacturer': [] }],
        dosage_form: folder ? folder.dosage_form : '',
        excipient: [],
        doc: folder && folder.doc !== null ? folder.doc : [],
        docremarks: folder ? folder.docremarks : '',
        request_date: new Date,
        deadline: new Date,
    });

    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
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

                count++;
            }
        }

        setData('deadline', new Date(deadline));

    }, [data.dossier_type]);

    const nextStep = () => {

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
            if (!data.sequence) {
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
        setData(name, e)
    }

    const handleUploadFileChange = (e) => {
        let instData = { ...data }
        instData.doc.push(...e)
        setData(instData)
    }

    const handleSubmit = (e, type) => {
        e.preventDefault();
        post(route('publishing_ch_new_request', { type: type }));
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
            console.log(i)
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

        if ((!data.sequence) && (i == 3 || i == 4 || i == 5)) {
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

    const addDrugSubstanceFields = () => {
        setData('drug_substance', [...data.drug_substance, { 'drug_substance': '', 'manufacturer': [] }])
    }

    const addDrugProductFields = () => {
        setData('drug_product', [...data.drug_product, { 'drug_product': '', 'manufacturer': [] }])
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
                                    <label className="form-label">Application number</label>
                                    <input className='form-control form-control-solid' type='text' name='tracking' />

                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Submission description</label>
                                    <input type="text" className="form-control form-control-solid" name="submission_description" defaultValue={data.submission_description} onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Invented name</label>
                                    <input type="text" className="form-control form-control-solid" name="invented_name" defaultValue={data.productName} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Galenic form</label>
                                    <input className="form-control form-control-solid" type='text' name='galenic_form' onChange={handleChange} />

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
                                    <label className="form-label" title='Enter the sequence number' style={{ color: myErrors.sequence ? 'red' : '' }}>eCTD Sequence (*)</label>
                                    <input type="text" className="form-control form-control-solid" name="sequence" style={{ borderColor: myErrors.sequence ? 'red' : '' }} defaultValue={data.sequence} onChange={handleChange} />
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
                                        className="react-select-container"
                                        classNamePrefix="react-select"
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
                        <InsertProductMetaData
                            data={data}
                            handleChange={handleChange}
                            addDrugSubstanceFields={addDrugSubstanceFields}
                            removeDrugSubstanceFields={removeDrugSubstanceFields}
                            addDrugProductFields={addDrugProductFields}
                            removeDrugProductFields={removeDrugProductFields}
                            setData={setData}

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
                </form>
            </div>
        </>
    )
}

Initiate_.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Initiate_;