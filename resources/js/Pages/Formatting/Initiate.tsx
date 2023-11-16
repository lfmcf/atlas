import { FC, MutableRefObject, useCallback, useEffect, useRef } from 'react'
import Authenticated from '../../Layouts/AuthenticatedLayout'
import { StepperComponent } from '../../_metronic/assets/ts/components'
// import flatpickr from "flatpickr";
// import { Instance } from 'flatpickr/dist/types/instance';
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import Select from 'react-select';
import { formattingDossierType, formattingProduct, substanceFormattingList } from '../Lab/MetaDataList';
import moment from 'moment';
import { useForm } from '@inertiajs/react';
import DropZone from '../../Components/Dropzone';

const Initiate = (props: any) => {

    var params = new URLSearchParams(window.location.search)
    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const { folder } = props

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        form: folder ? folder.form : params.get('form'),
        region: folder ? folder.region : params.get('region'),
        coredoc: folder ? folder.coreDoc : params.get('coreDoc'),
        dossier_contact: folder ? folder.dossier_contact : props.auth.user.trigramme.toUpperCase(),
        object: folder ? folder.object : '',
        product_name: folder ? folder.product_name : '',
        substance_name: folder ? folder.substance_name : '',
        country: folder ? folder.country : '',
        dossier_type: folder ? folder.dossier_type : '',
        document_count: folder ? folder.document_count : '',
        deficiency_letter: folder ? folder.deficiency_letter : '',
        chrono: folder ? folder.chrono : '',
        remarks: folder ? folder.remarks : '',
        doc: [],
        request_date: new Date(),
        deadline: new Date(),
        adjusted_deadline: moment(new Date),
        delivery_remarks: '',
        review_request_date: moment(new Date),
        review_deadline: moment(new Date),
        delivery_comment: '',
        delivery_version: '',
        correction_request: '',
        correction_origin: '',
        document: '',
        document_remarks: '',
        status: '',
        created_by: props.auth.user.id
    });

    let contries = props.countries.map(function (country) {
        return { value: country.name, label: country.name, code: country.code };
    })

    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    }, [])


    const nextStep = () => {
        if (!stepper.current) {
            return
        }

        if (stepper.current.getCurrentStepIndex() === 1) {
        }

        if (stepper.current.getCurrentStepIndex() === 3) {
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

    const handleUploadFileChange = (e) => {
        let instData = { ...data }
        instData.doc.push(...e)
        setData(instData)
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

    const handleSelectChange = (e, name) => {
        setData(name, e)
    }

    useEffect(() => {
        let date = new Date();
        let hour = date.getHours();
        let delai = data.dossier_type ? data.dossier_type.delai : 0;
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

    }, [data.dossier_type]);

    const handleSubmit = (e, type) => {
        e.preventDefault();
        post(route('initiate-formatting', { type: type }));
    }

    return (
        <>
            {/* <TablesWidget9 data={formatting} /> */}
            <div className="stepper stepper-pills" id="kt_stepper_example_basic" ref={stepperRef}>
                <div className="stepper-nav flex-center flex-wrap mb-10">
                    <div className="stepper-item mx-8 my-4 current" data-kt-stepper-element="nav">

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


                </div>
                {/* <!--begin::Form--> */}
                <form className="form" id="kt_stepper_example_basic_form" onSubmit={handleSubmit}>
                    {/* <!--begin::Group--> */}
                    <div className="mb-5">
                        {/* <!--begin::Step 1--> */}
                        <div className="flex-column current" data-kt-stepper-element="content">
                            {/* <!--begin::Input group--> */}
                            <div className="row mb-10">
                                <div className='col-md-6 col-lg-6 col-sm-12'>
                                    {/* <!--begin::Label--> */}
                                    <label className="form-label">Dossier contact</label>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Input--> */}
                                    <input type="text" className="form-control form-control-solid" defaultValue={data.dossier_contact} name="dossier_contact" disabled />
                                    {/* <!--end::Input--> */}
                                </div>
                                <div className='col-md-6 col-lg-6 col-sm-12'>
                                    <label className="form-label">Object</label>
                                    <input type="text" className="form-control form-control-solid" defaultValue={data.object} name="object" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-md-6 col-lg-6 col-sm-12'>

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
                                <div className='col-md-6 col-lg-6 col-sm-12'>
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
                                <div className='col-md-6 col-lg-6 col-sm-12'>
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
                                <div className='col-md-6 col-lg-6 col-sm-12'>

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
                                <div className='col-md-4 col-lg-4 col-sm-12'>
                                    <label className="form-label">Document Count</label>
                                    <input type="number" className="form-control form-control-solid" defaultValue={data.document_count} name="document_count" onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-lg-4 col-sm-12'>
                                    <label className="form-label">Deficiency Letter</label>
                                    <input type="text" className="form-control form-control-solid" defaultValue={data.deficiency_letter} name="deficiency_letter" onChange={handleChange} />
                                </div>
                                <div className='col-md-4 col-lg-4 col-sm-12'>
                                    <label className="form-label">Chrono N°/ Dossier Reference</label>
                                    <input type="text" className="form-control form-control-solid" name="chrono" defaultValue={data.chrono} onChange={handleChange} />
                                </div>

                            </div>
                            <div className="row mb-10">
                                <label className="form-label">Remarks</label>
                                <textarea className="form-control form-control-solid" rows={3} defaultValue={data.remarks} name="remarks" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className='row mb-10'>
                                <div className='col-md-2 col-lg-2 col-sm-12'>
                                    <label className="col-form-label text-lg-right">Attached documents :</label>
                                    {/* <input type="file" multiple className="form-control form-control-solid" name="doc" onChange={handleUploadFileChange} /> */}

                                </div>
                                <div className='col-md-6 col-lg-6 col-sm-12'>
                                    <DropZone files={data.doc} upload={handleUploadFileChange} deleletFile={deleletFile} removeAll={removeAll} />
                                </div>
                                {/* <div className='col-md-6 col-lg-6 col-sm-12'>
                                    <div className='d-flex align-items-center text-gray-400 h-100'>
                                        {data.doc ? data.doc.map((ele) => (
                                            <span className='me-2 fs-5'>{ele.name}</span>
                                        )) : ''}
                                    </div>
                                </div> */}
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
                            <div className="mb-10">

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
                            <button type="button" className="btn btn-primary m-3" data-kt-stepper-action="submit" onClick={(e) => handleSubmit(e, 'save')}>
                                <span className="indicator-label">
                                    Save
                                </span>
                            </button>
                            <button type="button" className="btn btn-primary" data-kt-stepper-action="submit" onClick={(e) => handleSubmit(e, 'submit')}>
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
        </>
    )
}

Initiate.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Initiate;