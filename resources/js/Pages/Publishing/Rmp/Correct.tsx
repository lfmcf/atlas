import { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import Authenticated from '../../../Layouts/AuthenticatedLayout'
import { IStepperOptions, StepperComponent } from '../../../_metronic/assets/ts/components'
import { Instance } from 'flatpickr/dist/types/instance'
import clsx from 'clsx'
import ReactCountryFlag from 'react-country-flag'
import { KTIcon } from '../../../_metronic/helpers'
import { useForm } from '@inertiajs/react'
import Select, { SingleValue } from 'react-select'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import { publishingMrpSubmissionType } from '../../Lab/MetaDataList'
import moment from 'moment'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

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

    const { metadata, folder } = props;

    console.log(folder)

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        id: folder._id,
        form: folder.form,
        region: folder.region,
        procedure: folder.procedure,
        product_name: folder.product_name,
        dossier_contact: folder.dossier_contact,
        object: folder.object,
        country: folder.country,
        dossier_type: folder.dossier_type,
        dossier_count: folder.dossier_count,
        remarks: folder.remarks,
        mt: folder.mt,
        indication: folder.indication,
        manufacturer: folder.manufacturer,
        drug_substance: folder.drug_substance,
        drug_product_manufacturer: folder.drug_product_manufacturer,
        dosage_form: folder.dosage_form,
        excipient: folder.excipient,
        doc: folder.doc,
        docremarks: folder.docremarks,
        deadline: folder.deadline,
        request_date: folder.request_date,
        adjusted_deadline: new Date(),
        adjustedDeadlineComments: '',
        correction: { user: { id: props.auth.user.id, name: props.auth.user.name }, date: new Date, message: '', source: [] }
    })

    // const countires = metadata.map((mp) => {

    //     return { label: mp.country, value: mp.country, code: mp.code }
    // })

    // const [multiData, setMultiData] = useState({
    //     uuid: metadata[0].uuid, submission_type: '', submission_mode: '', trackingNumber: metadata[0].trackingNumber, submission_unit: '', applicant: metadata[0].applicant,
    //     agencyCode: metadata[0].agencyCode, inventedName: metadata[0].inventedName, mtd: metadata[0].mtd, inn: metadata[0].inn, sequence: metadata[0].sequence,
    //     r_sequence: metadata[0].r_sequence, submission_description: '', remarks: ''
    // });

    // const [multicountry, setMulticountry] = useState(metadata.map((cnt) => cnt.country))

    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    // const datePicker = useRef() as MutableRefObject<Instance>;

    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement, StepperOptions)
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


    const handleSelectChange = (e, name) => {
        setData(name, e)
    }

    const handleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const handleUploadFileChange = (e) => {
        let instData = { ...data }
        instData.doc = []
        Promise.all([...e.target.files].map((fileToDataURL) => instData.doc.push(fileToDataURL)))
        setData(instData)
    }

    const handleMetaChange = (e, id) => {
        let prevData = { ...data }
        prevData.mt[id][e.target.name] = e.target.value
        setData(prevData)
    }

    const handleMetaSelectChange = (e, name, id) => {
        let prevData = { ...data }
        prevData.mt[id][name] = e
        setData(prevData)
    }

    const handleMultipleSelectChange = (e, name) => {
        const perdata = { ...multiData }
        perdata[name] = e
        setMultiData(perdata)
    }

    const handleMultipleChange = (e) => {
        const perdata = { ...multiData }
        perdata[e.target.name] = e.target.value
        setMultiData(perdata)
    }

    const handleMultiCountryChange = (e) => {

        let perdata = [...multicountry]
        if (e.target.checked) {
            perdata.push(e.target.value)
        } else {
            const index = perdata.indexOf(e.target.value);
            perdata.splice(index, 1)
        }
        setMulticountry(perdata)
    }

    const handleSubmitMulti = () => {
        let perdata = { ...data }

        perdata.mt.map((cnt, i) => {
            if (multicountry.includes(cnt.country)) {
                perdata.mt[i].uuid = multiData.uuid
                perdata.mt[i].submission_type = multiData.submission_type
                perdata.mt[i].submission_mode = multiData.submission_mode
                perdata.mt[i].trackingNumber = multiData.trackingNumber
                perdata.mt[i].submission_unit = multiData.submission_unit
                perdata.mt[i].applicant = multiData.applicant
                perdata.mt[i].agencyCode = multiData.agencyCode
                perdata.mt[i].inventedName = multiData.inventedName
                perdata.mt[i].mtd = multiData.mtd
                perdata.mt[i].inn = multiData.inn
                perdata.mt[i].sequence = multiData.sequence
                perdata.mt[i].r_sequence = multiData.r_sequence
                perdata.mt[i].submission_description = multiData.submission_description
                perdata.mt[i].remarks = multiData.remarks
            }
        })
        setData(perdata)
    }

    // useEffect(() => {
    //     let arr = { ...data };
    //     metadata.map((mtd, i) => {
    //         arr.mt.push({
    //             id: mtd.id, country: mtd.country, uuid: mtd.uuid, submission_type: '', submission_mode: '', trackingNumber: mtd.trackingNumber,
    //             submission_unit: '', applicant: mtd.applicant, agencyCode: mtd.agencyCode, inventedName: mtd.Product, inn: mtd.inn, sequence: '',
    //             r_sequence: '', submission_description: '', remarks: ''
    //         })
    //     })
    //     setData(arr)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('correct-rmp-publishing'));
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

    const handleMessageChange = (e) => {
        const editorData = e.getData();
        let arr = { ...data }
        arr.correction.message = editorData
        setData(arr)
    }

    return (
        <>
            <div className="stepper stepper-pills" id="kt_stepper_example_basic" ref={stepperRef}>
                <div className="stepper-nav flex-center flex-wrap mb-10">

                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center">
                            {/* <!--begin::Icon--> */}
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">1</span>
                            </div>
                            {/* <!--end::Icon--> */}

                            {/* <!--begin::Label--> */}
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 1
                                </h3>

                                <div className="stepper-desc">
                                    General information
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center">
                            {/* <!--begin::Icon--> */}
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">2</span>
                            </div>
                            {/* <!--begin::Icon--> */}

                            {/* <!--begin::Label--> */}
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 2
                                </h3>

                                <div className="stepper-desc">
                                    Submission metadata
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}

                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center">
                            {/* <!--begin::Icon--> */}
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">3</span>
                            </div>
                            {/* <!--begin::Icon--> */}

                            {/* <!--begin::Label--> */}
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 3
                                </h3>

                                <div className="stepper-desc">
                                    Product metadata
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}

                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center">
                            {/* <!--begin::Icon--> */}
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">4</span>
                            </div>
                            {/* <!--begin::Icon--> */}

                            {/* <!--begin::Label--> */}
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 4
                                </h3>

                                <div className="stepper-desc">
                                    Documents
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}

                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center">
                            {/* <!--begin::Icon--> */}
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">5</span>
                            </div>
                            {/* <!--begin::Icon--> */}

                            {/* <!--begin::Label--> */}
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 5
                                </h3>

                                <div className="stepper-desc">
                                    Delivery details
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}

                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
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

                <form className="form" onSubmit={handleSubmit} id="kt_stepper_example_basic_form">

                    <div className="mb-5">
                        {/* <!--begin::Step 1--> */}
                        <div className="flex-column" data-kt-stepper-element="content">
                            {/* <!--begin::Input group--> */}
                            <div className="row mb-10">
                                <div className='col-6'>
                                    {/* <!--begin::Label--> */}
                                    <label className="form-label">Dossier contact</label>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Input--> */}
                                    <input type="text" className="form-control form-control-solid" defaultValue={data.dossier_contact} name="dossier_contact" onChange={handleChange} />
                                    {/* <!--end::Input--> */}
                                </div>
                                <div className='col-6'>
                                    <label className="form-label">Object</label>
                                    <input type="text" className="form-control form-control-solid" defaultValue={data.object} name="object" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-6'>
                                    {/* <!--begin::Label--> */}
                                    <label className="form-label">Product / Substance</label>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Input--> */}
                                    <input type="text" className="form-control form-control-solid" defaultValue={data.product_name} name="product_name" onChange={handleChange} />
                                    {/* <!--end::Input--> */}
                                </div>
                                <div className='col-6'>

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
                                        name="dossier_type"
                                        onChange={(e) => handleSelectChange(e, 'dossier_type')}
                                        placeholder=''
                                        isClearable
                                        className="basic"
                                        classNamePrefix="basic"
                                        value={data.dossier_type}
                                    // menuPortalTarget={document.body}
                                    // styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </div>
                                {/* <div className='col-6'>
                                    <label className="form-label">Submission country</label>
                                    <Select options={[]}
                                        name="country"
                                        onChange={(e) => handleSelectChange(e, 'country')}
                                        className="basic"
                                        classNamePrefix="basic"
                                        placeholder=''
                                        isClearable
                                        value={data.country}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999, fontSize: '0.8rem' }) }}
                                    />
                                </div> */}
                            </div>
                            <div className="row mb-10">

                                <div className='col-6'>
                                    <label className="form-label">Dossier count</label>
                                    <input type="text" className="form-control form-control-solid" defaultValue={data.dossier_count} name="dossier_count" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <label className="form-label">Remarks</label>
                                <textarea className="form-control form-control-solid" rows={3} defaultValue={data.remarks} name="remarks" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className='d-flex justify-content-end mb-1'>
                                <a href='#' className='btn btn-secondary btn-sm' data-bs-toggle='modal' data-bs-target='#kt_modal_multi_data_update'>
                                    <i className="fa-solid fa-plus"></i>
                                </a>

                            </div>
                            <div className="d-flex flex-column flex-md-row rounded border p-10">

                                <ul className="nav nav-tabs nav-line-tabs border-0 flex-row flex-md-column me-5 mb-3 mb-md-0 fs-6">
                                    <div className='position-relative d-inline-block' style={{ flex: '1 1 auto', whiteSpace: 'nowrap', overflowX: 'hidden', overflowY: 'auto', height: 'calc(100vh - 240px)' }}>
                                        <div className='d-flex flex-column'>


                                            {/* {metadata.map((mt: any, i: string) => (
                                                <li className="nav-item w-md-150px me-0 pe-5" key={i}>
                                                    <a className="nav-link mx-0 my-2" data-bs-toggle="tab" href={"#kt_vtab_pane_" + i}>{mt.country}</a>
                                                </li>
                                            ))} */}
                                        </div>
                                    </div>

                                </ul>
                                <div className='tab-content w-100'>
                                    {data.mt.map((mt, i) => (
                                        <div className='tab-pane fade' id={"kt_vtab_pane_" + i} key={i}>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label">UUID</label>
                                                    <input type="text" className="form-control form-control-solid" value={mt.uuid} name="uuid" onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Submission type</label>
                                                    <Select options={publishingMrpSubmissionType}
                                                        name='submission_type'
                                                        onChange={(e) => handleMetaSelectChange(e, 'submission_type', i)}
                                                        className="basic"
                                                        classNamePrefix="basic"
                                                        placeholder=''
                                                        isClearable
                                                        value={mt.submission_type}
                                                        menuPortalTarget={document.body}
                                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                                    />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Submission mode</label>
                                                    <Select options={[
                                                        { label: 'Single', value: 'Single' },
                                                        { label: 'Grouping', value: 'Grouping' },
                                                        { label: 'Worksharing', value: 'Worksharing' },
                                                    ]}
                                                        name='submission_mode'
                                                        onChange={(e) => handleMetaSelectChange(e, 'submission_mode', i)}
                                                        className="basic"
                                                        classNamePrefix="basic"
                                                        placeholder=''
                                                        isClearable
                                                        value={mt.submission_mode}
                                                        menuPortalTarget={document.body}
                                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label">Procedure Tracking N°</label>
                                                    <input type="text" className="form-control form-control-solid" name="tracking" value={mt.trackingNumber} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
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
                                                        onChange={(e) => handleMetaSelectChange(e, 'submission_unit', i)}
                                                        className="basic"
                                                        classNamePrefix="basic"
                                                        placeholder=''
                                                        isClearable
                                                        value={mt.submission_unit}
                                                        menuPortalTarget={document.body}
                                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                                    />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Applicant</label>
                                                    <input type="text" className="form-control form-control-solid" name="applicant" value={mt.applicant} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label">Agency code</label>
                                                    <input type="text" className="form-control form-control-solid" name="agency_code" value={mt.agencyCode} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Invented name</label>
                                                    <input type="text" className="form-control form-control-solid" name="inventedName" value={mt.inventedName} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">INN</label>
                                                    <input type="text" className="form-control form-control-solid" name="agency_inncode" value={mt.inn} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label">Sequence</label>
                                                    <input type="text" className="form-control form-control-solid" name="sequence" value={mt.sequence} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Related Sequence</label>
                                                    <input type="text" className="form-control form-control-solid" name="r_sequence" value={mt.r_sequence} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Submission description</label>
                                                    <input type="text" className="form-control form-control-solid" name="submission_description" value={mt.submission_description} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-12'>
                                                    <label className="form-label">Remarks</label>
                                                    <textarea className="form-control form-control-solid" rows={3} name="remarks" value={mt.remarks} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className="row mb-10">
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
                                    <input type="text" className="form-control form-control-solid" defaultValue={data.drug_substance} name="drug_substance" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-4 col-sm-12'>
                                    <label className="form-label">Drug product manufacture</label>
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

                    {/* <!--begin::Actions--> */}
                    <div className="d-flex flex-stack">
                        {/* <!--begin::Wrapper--> */}
                        <div className="me-2">
                            <button type="button" className="btn btn-light btn-active-light-primary" data-kt-stepper-action="previous" onClick={prevStep}>
                                Back
                            </button>
                        </div>
                        {/* <!--end::Wrapper-->

                        <!--begin::Wrapper--> */}
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
                        {/* <!--end::Wrapper--> */}
                    </div>
                    {/* <!--end::Actions--> */}
                </form>

                {/* multi update modal */}

                <div className='modal fade' id='kt_modal_multi_data_update' aria-hidden='true'>
                    <div className='modal-dialog modal-xl'>
                        <div className='modal-content rounded'>
                            <div className='modal-header justify-content-end border-0 pb-0'>
                                <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                                    <KTIcon iconName='cross' className='fs-1' />
                                </div>
                            </div>

                            <div className='modal-body pt-0 pb-15 px-5 px-xl-20'>
                                <div className='mb-13 text-center'>
                                    <h1 className='mb-3'>Multi update</h1>

                                    <div className='text-muted fw-bold fs-5'>
                                        Apply update for selected countries{' '}
                                        {/* <a href='#' className='link-primary fw-bolder'>
                                    Pricing Guidelines
                                </a> */}
                                        .
                                    </div>
                                </div>

                                <div className='d-flex flex-column'>
                                    <div className='row mt-10'>
                                        <div className='col-lg-6 mb-10 mb-lg-0'>
                                            {/* <form >
                                                <div className='mb-10'>
                                                    <label className="form-label">UUID</label>
                                                    <input type="text" className="form-control form-control-solid" name="uuid" defaultValue={metadata[0].uuid} onChange={handleMultipleChange} />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Submission type</label>
                                                    <Select options={publishingMrpSubmissionType}
                                                        name='submission_type'
                                                        onChange={(e) => handleMultipleSelectChange(e, 'submission_type')}
                                                        className="basic"
                                                        classNamePrefix="basic"
                                                        placeholder=''
                                                        isClearable
                                                        value={metadata[0].submission_type}
                                                        menuPortalTarget={document.body}
                                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                                    />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Submission mode</label>
                                                    <Select options={[
                                                        { label: 'Single', value: 'Single' },
                                                        { label: 'Grouping', value: 'Grouping' },
                                                        { label: 'Worksharing', value: 'Worksharing' },
                                                    ]}
                                                        name='submission_mode'
                                                        onChange={(e) => handleMultipleSelectChange(e, 'submission_mode')}
                                                        className="basic"
                                                        classNamePrefix="basic"
                                                        placeholder=''
                                                        isClearable
                                                        value={metadata[0].submission_mode}
                                                        menuPortalTarget={document.body}
                                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                                    />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Procedure Tracking N°</label>
                                                    <input type="text" className="form-control form-control-solid" defaultValue={metadata[0].trackingNumber} name="trackingNumber" onChange={handleMultipleChange} />
                                                </div>
                                                <div className='mb-10'>
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
                                                        onChange={(e) => handleMultipleSelectChange(e, 'submission_unit')}
                                                        className="basic"
                                                        classNamePrefix="basic"
                                                        placeholder=''
                                                        isClearable
                                                        value={metadata[0].submission_unit}
                                                        menuPortalTarget={document.body}
                                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                                    />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Applicant</label>
                                                    <input type="text" className="form-control form-control-solid" defaultValue={metadata[0].applicant} name="applicant" onChange={handleMultipleChange} />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Invented name</label>
                                                    <input type="text" className="form-control form-control-solid" defaultValue={metadata[0].Product} name="inventedName" onChange={handleMultipleChange} />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">INN</label>
                                                    <input type="text" className="form-control form-control-solid" defaultValue={metadata[0].inn} name="inn" onChange={handleMultipleChange} />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Sequence</label>
                                                    <input type="text" className="form-control form-control-solid" defaultValue={metadata[0].sequence} name="sequence" onChange={handleMultipleChange} />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Related Sequence</label>
                                                    <input type="text" className="form-control form-control-solid" defaultValue={metadata[0].r_seqeunce} name="r_sequence" onChange={handleMultipleChange} />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Submission description</label>
                                                    <input type="text" className="form-control form-control-solid" defaultValue={metadata[0].submission_description} name="submission_description" onChange={handleMultipleChange} />
                                                </div>
                                            </form> */}
                                        </div>

                                        {/* <div className='col-lg-6'>
                                            <div className='tab-content rounded h-100 bg-light p-10'>
                                                {metadata.map((mt: any, i: string) => {

                                                    return (
                                                        <div key={i} className="d-flex align-items-center mb-5" >
                                                            <div className="me-5 position-relative">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <ReactCountryFlag
                                                                        className="emojiFlag"
                                                                        countryCode={mt.code}
                                                                        aria-label={mt.country}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="fw-semibold">
                                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary">{mt.country}</a>
                                                                <div className="text-gray-400">{mt.code}</div>
                                                            </div>

                                                            <div className="badge badge-light ms-auto">
                                                                <input type='checkbox' defaultChecked={true} name="multicountry" value={mt.country} onChange={handleMultiCountryChange} />
                                                            </div>
                                                        </div>
                                                    )
                                                })}


                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div className='d-flex flex-center flex-row-fluid pt-12'>
                                    <button type='reset' className='btn btn-light me-3' data-bs-dismiss='modal'>
                                        Cancel
                                    </button>

                                    <button type='submit' className='btn btn-primary' data-bs-dismiss='modal' onClick={handleSubmitMulti}>
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )

}

Correct.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Correct;