import { FC, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import Authenticated from '../../Layouts/AuthenticatedLayout'
import { StepperComponent } from '../../_metronic/assets/ts/components'
import { useForm } from '@inertiajs/react';
import moment from 'moment'
import Select from 'react-select';
import { formattingDossierType, formattingProduct, substanceFormattingList } from '../Lab/MetaDataList';
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import StatusComponent from '../../Components/StatusComponent';
import axios from 'axios';
import DropZone from '../../Components/Dropzone';
import { ConfirmationMessage } from '../../_metronic/partials/modals/confimation/ConfirmationMessage';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

const Confirm = (props: any) => {


    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const [myErrors, setMyErroes] = useState({ product_name: '', substance_name: '', dossier_type: '', document_count: '' })
    const [isModalOpen, setModalOpen] = useState(false);
    const [actionType, setActionType] = useState('');
    const { folder } = props

    const [files, setFiles] = useState(folder.document)

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
        status: folder.status,
        deadlineComments: '',
        car_deadline: folder.car_deadline,
        adjusted_deadline_car: new Date,
    });

    let contries = props.countries.map(function (country) {
        return { value: country.name, label: country.name, code: country.code };
    })

    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
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
                post(route('confirm-formatting'));
            }
        })
        // setModalOpen(true);

    }

    const handleCancel = () => {
        setModalOpen(false);
    }

    const handleConfirm = (type) => {
        post(route('confirm-formatting'));
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

    const handleCheckBoxChange = (e) => {
        setData(e.target.name, e.target.checked)
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


    const handleUploadFileChange = (e) => {
        let instData = { ...data }
        instData.doc.push(...e)
        setData(instData)
    }

    const nextStep = () => {
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

        if (stepper.current.getCurrentStepIndex() === 3) {

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
            <div className='d-flex justify-content-between align-items-center'>
                <a href="#" onClick={() => window.history.back()} className="btn btn-sm fw-bold btn-secondary mb-2">
                    <i className="ki-duotone ki-black-left fs-3">
                    </i>
                </a>
                <StatusComponent status={data.status} />
            </div>

            {/* <span className="badge py-3 px-4 fs-7 badge-light-warning">{data.status}</span> */}
            <div className="stepper stepper-pills" id="kt_stepper_example_basic" ref={stepperRef}>
                <div className="stepper-nav flex-center flex-wrap mb-10">
                    <div className="stepper-item mx-8 my-4 current" data-kt-stepper-element="nav">

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
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        {/* <!--begin::Wrapper--> */}
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(2)} style={{ cursor: 'pointer' }}>
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


                </div>
                {/* <!--begin::Form--> */}
                <form className="form" id="kt_stepper_example_basic_form" onSubmit={handleSubmit}>
                    {/* <!--begin::Group--> */}
                    <div className="mb-5">
                        {/* <!--begin::Step 1--> */}
                        <div className="flex-column current" data-kt-stepper-element="content">
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
                            <div className="row  mb-10">
                                <div className='col-6'>
                                    <div className='my-4' style={{ display: 'flex', alignItems: 'center' }}>
                                        <label className='form-label my-0 me-4' data-toggle='tooltip' title='Field for the CAR adjusted deadline'>(CAR) Adjusted deadline</label>
                                        <label className='form-check form-switch form-check-custom form-check-solid'>
                                            <input className='form-check-input' name='car_deadline' type='checkbox' checked={data.car_deadline} onChange={handleCheckBoxChange} />
                                        </label>

                                    </div>
                                </div>
                                {data.car_deadline &&
                                    <div className='col-6'>
                                        <label htmlFor="" className="form-label">Adjusted deadline CAR</label>
                                        <Flatpickr
                                            data-enable-time
                                            value={data.adjusted_deadline_car}
                                            className="form-control"
                                            options={{ dateFormat: "d-M-Y H:i" }}
                                            onChange={(date) => setData('adjusted_deadline_car', date)}
                                        />
                                    </div>}
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className="form-label">Comments</label>
                                <textarea className="form-control form-control-solid" rows={3} name="adjustedDeadlineComments" placeholder="" onChange={handleChange} />
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
                </form >
            </div >
            <ConfirmationMessage show={isModalOpen} onCancel={handleCancel} actionType={actionType} onConfirm={handleConfirm} />
        </>
    )
}

Confirm.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Confirm;