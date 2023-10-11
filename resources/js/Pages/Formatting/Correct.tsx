import { FC, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import Authenticated from '../../Layouts/AuthenticatedLayout'
import { IStepperOptions, StepperComponent } from '../../_metronic/assets/ts/components'
import { router, useForm } from '@inertiajs/react';
import moment from 'moment'
import Select from 'react-select';
import { formattingDossierType, formattingProduct, substanceFormattingList } from '../Lab/MetaDataList';
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import StatusComponent from '../../Components/StatusComponent';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const StepperOptions: IStepperOptions = {
    startIndex: 4,
    animation: false,
    animationSpeed: '0.3s',
    animationNextClass: 'animate__animated animate__slideInRight animate__fast',
    animationPreviousClass: 'animate__animated animate__slideInLeft animate__fast',
}

const Correct = (props: any) => {

    function createMarkup(msg: any) {
        return { __html: msg.message };
    }

    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const { folder } = props
    // const [comment, setComment] = useState('');
    // const [source, setSource] = useState('');

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        id: folder._id,
        form: folder.form,
        region: folder.region,
        coredoc: folder.coredoc,
        dossier_contact: folder.dossier_contact,
        object: folder.object,
        product_name: folder.product_name,
        substance_name: folder.substance_name,
        country: folder.country,
        dossier_type: folder.dossier_type,
        document_count: folder.document_count,
        deficiency_letter: folder.deficiency_letter,
        chrono: folder.chrono,
        remarks: folder.remarks,
        doc: [],
        request_date: folder.request_date,
        deadline: folder.deadline,
        adjusted_deadline: new Date,
        adjustedDeadlineComments: '',
        review_request_date: moment(new Date),
        review_deadline: moment(new Date),
        delivery_comment: '',
        delivery_version: '',
        correction_request: '',
        correction_origin: '',
        document: '',
        document_remarks: '',
        status: folder.status,
        deadlineComments: '',
        correction: { user: { id: props.auth.user.id, name: props.auth.user.name }, date: new Date, message: '', source: [] }
    });

    let contries = props.countries.map(function (country) {
        return { value: country, label: country };
    })

    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement, StepperOptions)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('correct-formatting'));
    }

    const handleSelectChange = (e, name) => {
        setData(name, e)
    }

    const handleChange = (e) => {
        setData(e.target.name, e.target.value)
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

    const handleUploadFileChange = (e) => {
        let instData = { ...data }
        instData.doc = []
        Promise.all([...e.target.files].map((fileToDataURL) => instData.doc.push(fileToDataURL)))
        setData(instData)
    }

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

        if (stepper.current.getCurrentStepIndex() === 4) {
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

    const handleMessageSend = () => {
        //router.post(route('correct-formatting', { message: comment, id: folder._id, source: source }))
    }

    return (
        <>
            <StatusComponent status={data.status} />
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
                                    General Information
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}

                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
                    </div>
                    {/* <!--end::Step 1--> */}

                    {/* <!--begin::Step 2--> */}
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        {/* <!--begin::Wrapper--> */}
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
                    {/* <!--end::Step 2--> */}

                    {/* <!--begin::Step 3--> */}
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        {/* <!--begin::Wrapper--> */}
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
                                    Delivery Details
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}

                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
                    </div>
                    {/* <!--end::Step 3--> */}
                    <div className="stepper-item mx-8 my-4 current" data-kt-stepper-element="nav">
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
                                    Dossier Review
                                </div>
                            </div>
                        </div>
                        <div className="stepper-line h-40px"></div>
                    </div>

                </div>
                {/* <!--begin::Form--> */}
                <form className="form" id="kt_stepper_example_basic_form" onSubmit={handleSubmit}>
                    {/* <!--begin::Group--> */}
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
                                    <input type="text" className="form-control form-control-solid" name="dossier_contact" value={data.dossier_contact} onChange={handleChange} />
                                    {/* <!--end::Input--> */}
                                </div>
                                <div className='col-6'>
                                    <label className="form-label">Object</label>
                                    <input type="text" className="form-control form-control-solid" name="object" value={data.object} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-6'>
                                    <label className="form-label">Product name</label>
                                    <Select options={formattingProduct}
                                        name="product_name"
                                        onChange={(e) => handleSelectChange(e, 'product_name')}
                                        placeholder=''
                                        isClearable
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                        value={data.product_name}
                                    />

                                </div>
                                <div className='col-6'>
                                    <label className="form-label">Substance name</label>
                                    <Select options={substanceFormattingList}
                                        name="substance_name"
                                        onChange={(e) => handleSelectChange(e, 'substance_name')}
                                        placeholder=''
                                        isClearable
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                        value={data.substance_name}
                                    />
                                </div>

                            </div>
                            <div className="row mb-10">
                                <div className='col-6'>
                                    <label className="form-label">Country</label>
                                    <Select options={contries}
                                        name="country"
                                        onChange={(e) => handleSelectChange(e, 'country')}
                                        placeholder=''
                                        isClearable
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                        value={data.country}
                                    />
                                </div>
                                <div className='col-6'>
                                    <label className="form-label">Dossier type</label>
                                    <Select options={formattingDossierType}
                                        name="dossier_type"
                                        onChange={(e) => handleSelectChange(e, 'dossier_type')}
                                        placeholder=''
                                        isClearable
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                        value={data.dossier_type}
                                    />
                                </div>

                            </div>
                            <div className='row mb-10'>
                                <div className='col-4'>
                                    <label className="form-label">Document Count</label>
                                    <input type="number" className="form-control form-control-solid" value={data.document_count} name="document_count" onChange={handleChange} />
                                </div>
                                <div className='col-4'>
                                    <label className="form-label">Deficiency Letter</label>
                                    <input type="text" className="form-control form-control-solid" value={data.deficiency_letter} name="deficiency_letter" onChange={handleChange} />
                                </div>
                                <div className='col-4'>
                                    <label className="form-label">Chrono N°/ Dossier Reference</label>
                                    <input type="text" className="form-control form-control-solid" name="chrono" value={data.chrono} onChange={handleChange} />
                                </div>

                            </div>
                            <div className="row mb-10">
                                <label className="form-label">Remarks</label>
                                <textarea className="form-control form-control-solid" rows={3} name="remarks" defaultValue={data.remarks} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className='row mb-10'>
                                <div className='col-12 mb-10'>
                                    <label className="form-label">uploaded documents</label>
                                    <ul>
                                        {folder.document ? folder.document.map((doc, i) => (
                                            <li key={i}>
                                                <a href={doc.link} target='blank' className='text-primary fw-semibold fs-6 me-2'>{doc.name}</a>
                                            </li>
                                        )) : ''}
                                    </ul>
                                </div>
                                <div className='col-6'>
                                    <label className="form-label">Attached documents</label>
                                    <input type="file" multiple className="form-control form-control-solid" name="doc" onChange={handleUploadFileChange} />
                                </div>
                                <div className='col-6'>
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
                            <div className="row  mb-10">
                                <div className='col-6 mb-10'>
                                    <label htmlFor="" className="form-label">Adjusted deadline</label>
                                    <Flatpickr
                                        data-enable-time
                                        value={data.adjusted_deadline}
                                        className="form-control"
                                        options={{ dateFormat: "d-M-Y H:i" }}
                                        onChange={(date) => setData('adjusted_deadline', date)}
                                    />
                                </div>
                                <div className='col-12'>
                                    <label htmlFor="" className="form-label">Comments</label>
                                    <textarea className="form-control form-control-solid" rows={3} name="adjustedDeadlineComments" placeholder="" onChange={handleChange} />
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
            </div >
        </>
    )
}

Correct.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Correct;