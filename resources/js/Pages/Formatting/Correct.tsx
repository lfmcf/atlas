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
import axios from 'axios';
import DropZone from '../../Components/Dropzone';
import { ConfirmationMessage } from '../../_metronic/partials/modals/confimation/ConfirmationMessage';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

const StepperOptions: IStepperOptions = {
    startIndex: 3,
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
    const { folder, auth } = props
    const [myErrors, setMyErroes] = useState({ product_name: '', substance_name: '', dossier_type: '', document_count: '' })
    const [isModalOpen, setModalOpen] = useState(false);
    const [actionType, setActionType] = useState('');

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
        doc: folder && folder.document !== null ? folder.document : [],
        docremarks: folder.docremarks,
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
        status: folder.status,
        deadlineComments: '',
        correction: {
            user: { id: props.auth.user.id, name: props.auth.user.name },
            date: new Date,
            message: '',
            source: folder.correction && auth.user.current_team_id == 2 ? folder.correction[folder.correction.length - 1].source : []
        }
    });

    let contries = props.countries.map(function (country) {
        return { value: country, label: country };
    })

    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement, StepperOptions)
    }, [])

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
                post(route('correct-formatting'));
            }
        })
        // setModalOpen(true);

    }

    const handleCancel = () => {
        setModalOpen(false);
    }

    const handleConfirm = (type) => {
        // post(route('correct-formatting'));
        console.log(data.correction)
    }

    const handleSelectChange = (e, name) => {
        if (name == 'product_name') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    product_name: ''
                }
            })
        }
        if (name == 'substance_name') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    substance_name: ''
                }
            })
        }
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

    const handleChange = (e) => {
        if (e.target.name == 'document_count') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    document_count: ''
                }
            })
        }
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
        instData.doc.push(...e)
        setData(instData)
    }

    const nextStep = () => {
        // setHasError(false)

        if (!stepper.current) {
            return
        }

        if (stepper.current.getCurrentStepIndex() === 1) {
            if (!data.product_name || !data.substance_name || !data.dossier_type || !data.document_count) {

                if (!data.product_name) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            product_name: 'this field is required'
                        }
                    })
                }
                if (!data.substance_name) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            substance_name: 'this field is required'
                        }
                    })
                }
                if (!data.dossier_type) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            dossier_type: 'this field is required'
                        }
                    })
                }
                if (!data.document_count) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            document_count: 'this field is required'
                        }
                    })
                }

                return
            }
        }

        if (stepper.current.getCurrentStepIndex() === 4) {
            // if (!checkAppDataBase()) {
            //     setHasError(true)
            //     return
            // }
        }

        stepper.current.goNext()
    }

    const selectStyles = (hasErrors) => ({
        control: (styles) => ({
            ...styles,
            ...(hasErrors && { borderColor: 'red !important' }),
        }),
    });

    const prevStep = () => {
        if (!stepper.current) {
            return
        }

        stepper.current.goPrev()
    }

    const removeAll = () => {
        let instData = { ...data }
        let filesfromserver = []
        instData.doc.map((file => {
            file.link ? filesfromserver.push(file.name) : ''
        }))
        if (filesfromserver.length > 0) {
            axios.post('delete-file', { docs: filesfromserver, id: data.id })
        }
        instData.doc = []
        setData(instData)
    }

    const deleletFile = (i) => {
        if (i.link) {
            let filesfromserver = []
            filesfromserver.push(i.name)
            axios.post('delete-file', { docs: filesfromserver, id: data.id })
        }
        var arr = { ...data }
        let index = arr.doc.map((el) => el.name).indexOf(i.name);
        arr.doc.splice(index, 1)
        setData(arr)
    }

    const goNextStep = (i) => {

        if (!data.product_name || !data.substance_name || !data.dossier_type || !data.document_count) {

            if (!data.product_name) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        product_name: 'this field is required'
                    }
                })
            }
            if (!data.substance_name) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        substance_name: 'this field is required'
                    }
                })
            }
            if (!data.dossier_type) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        dossier_type: 'this field is required'
                    }
                })
            }
            if (!data.document_count) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        document_count: 'this field is required'
                    }
                })
            }
        } else {
            stepper.current?.goto(i)
        }
    }

    return (
        <>
            <StatusComponent status={data.status} />
            <div className="stepper stepper-pills" id="kt_stepper_example_basic" ref={stepperRef}>
                <div className="stepper-nav flex-center flex-wrap mb-10">
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => stepper.current?.goto(1)} style={{ cursor: 'pointer' }}>
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
                    {/* <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                    
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
                                    Documents
                                </div>
                            </div>
                           
                        </div>
                        

                        
                        <div className="stepper-line h-40px"></div>
                       
                    </div> */}
                    {/* <!--end::Step 2--> */}

                    {/* <!--begin::Step 3--> */}
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav" onClick={() => goNextStep(2)} style={{ cursor: 'pointer' }}>
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
                    <div className="stepper-item mx-8 my-4 current" data-kt-stepper-element="nav" onClick={() => goNextStep(3)} style={{ cursor: 'pointer' }}>
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
                                <div className='col-md-6 col-lg-6 col-sm-12'>
                                    <label htmlFor='product_name' className="form-label" title='Choose the product name to appear in document headers' style={{ color: myErrors.product_name ? 'red' : '' }}>Product name (*)</label>
                                    <Select options={formattingProduct}
                                        name="product_name"
                                        onChange={(e) => handleSelectChange(e, 'product_name')}
                                        placeholder=''
                                        isClearable
                                        menuPortalTarget={document.body}
                                        styles={selectStyles(myErrors.product_name)}
                                        value={data.product_name}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                    />
                                </div>
                                <div className='col-md-6 col-lg-6 col-sm-12'>
                                    <label className="form-label" title='Choose the substance name to appear in document headers' style={{ color: myErrors.substance_name ? 'red' : '' }}>Substance name (*)</label>
                                    <Select options={substanceFormattingList}
                                        name="substance_name"
                                        onChange={(e) => handleSelectChange(e, 'substance_name')}
                                        placeholder=''
                                        isClearable
                                        menuPortalTarget={document.body}
                                        value={data.substance_name}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        styles={selectStyles(myErrors.substance_name)}
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
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                    />
                                </div>
                                <div className='col-md-6 col-lg-6 col-sm-12'>
                                    <label className="form-label" title='Choose the Dossier type ' style={{ color: myErrors.dossier_type ? 'red' : '' }}>Dossier type (*)</label>
                                    <Select options={formattingDossierType}
                                        name="dossier_type"
                                        onChange={(e) => handleSelectChange(e, 'dossier_type')}
                                        placeholder=''
                                        isClearable
                                        menuPortalTarget={document.body}
                                        styles={selectStyles(myErrors.dossier_type)}
                                        value={data.dossier_type}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                    />
                                </div>

                            </div>
                            <div className='row mb-10'>
                                <div className='col-md-4 col-lg-4 col-sm-12'>
                                    <label className="form-label" title='Enter the number of documents for formatting' style={{ color: myErrors.document_count ? 'red' : '' }}>Document Count (*)</label>
                                    <input type="number" className="form-control form-control-solid" defaultValue={data.document_count} style={{ borderColor: myErrors.document_count ? 'red' : '' }} name="document_count" onChange={handleChange} />
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

                        {/* <div className="flex-column" data-kt-stepper-element="content">
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
                        </div> */}

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
                                    <label htmlFor="" className="form-label">Operational deadline</label>
                                    <Flatpickr
                                        data-enable-time
                                        value={data.adjusted_deadline}
                                        className="form-control"
                                        options={{ dateFormat: "d-M-Y H:i", minDate: data.request_date, maxDate: data.deadline }}
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
                                    <div className="accordion-header py-3 d-flex " data-bs-toggle="collapse" data-bs-target="#kt_accordion_3_item_2">
                                        <span className="accordion-icon">
                                            <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                                        </span>
                                        <h3 className="fs-4 fw-semibold mb-0 ms-4">Delivery comment</h3>
                                    </div>
                                    <div id="kt_accordion_3_item_2" className="fs-6 collapse p-10 show" data-bs-parent="#kt_accordion_2">
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
                                    <div className="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_4_item_3">
                                        <span className="accordion-icon">
                                            <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                                        </span>
                                        <h3 className="fs-4 fw-semibold mb-0 ms-4">Correction requests</h3>
                                    </div>
                                    <div id="kt_accordion_4_item_3" className="fs-6 collapse p-10 " data-bs-parent="#kt_accordion_2">
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
                                                        <input className='form-check-input' type='checkbox' name='source' checked={data.correction.source.includes('stg') ? true : false} value='stg' onChange={handleSourceChange} />
                                                    </span>
                                                    <span className='ms-5'>
                                                        <span className='fs-4 fw-bold text-gray-800 d-block'>Update</span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className='col'>
                                                <label className='btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6'>
                                                    <span className='form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1'>
                                                        <input className='form-check-input' type='checkbox' name='source' checked={data.correction.source.includes('ekemia') ? true : false} value='ekemia' onChange={handleSourceChange} />
                                                    </span>
                                                    <span className='ms-5'>
                                                        <span className='fs-4 fw-bold text-gray-800 d-block'>Correction</span>
                                                    </span>
                                                </label>
                                            </div>

                                        </div>

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
            <ConfirmationMessage show={isModalOpen} onCancel={handleCancel} actionType={actionType} onConfirm={handleConfirm} />
        </>
    )
}

Correct.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Correct;