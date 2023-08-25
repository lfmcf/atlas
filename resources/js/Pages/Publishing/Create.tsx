import { FC, MutableRefObject, useEffect, useRef } from 'react'
import Authenticated from '../../Layouts/AuthenticatedLayout'
import { StepperComponent } from '../../_metronic/assets/ts/components'
import { Instance } from 'flatpickr/dist/types/instance'
import clsx from 'clsx'
import ReactCountryFlag from 'react-country-flag'
import { KTIcon } from '../../_metronic/helpers'

const Create: FC = (props: any) => {

    const { metadata } = props;
    console.log(metadata)
    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const datePicker = useRef() as MutableRefObject<Instance>;

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


    return (
        <Authenticated auth={props.auth}>
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
                </div>

                <form className="form" id="kt_stepper_example_basic_form">

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
                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                    {/* <!--end::Input--> */}
                                </div>
                                <div className='col-6'>
                                    <label className="form-label">Object</label>
                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-6'>
                                    {/* <!--begin::Label--> */}
                                    <label className="form-label">Product / Substance</label>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Input--> */}
                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                    {/* <!--end::Input--> */}
                                </div>
                                <div className='col-6'>
                                    <label className="form-label">Submission country</label>
                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <div className='col-6'>
                                    {/* <!--begin::Label--> */}
                                    <label className="form-label">Dossier type</label>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Input--> */}
                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                    {/* <!--end::Input--> */}
                                </div>
                                <div className='col-6'>
                                    <label className="form-label">Dossier count</label>
                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <label className="form-label">Remarks</label>
                                <textarea className="form-control form-control-solid" rows={3} name="input2" placeholder="" />
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


                                            {metadata.map((mt: any, i: string) => (
                                                <li className="nav-item w-md-150px me-0 pe-5" key={i}>
                                                    <a className="nav-link mx-0 my-2" data-bs-toggle="tab" href={"#kt_vtab_pane_" + i}>{mt.country}</a>
                                                </li>
                                            ))}
                                        </div>
                                    </div>
                                    {/* <li className="nav-item w-md-200px me-0">
                                        <a className="nav-link mx-0 my-2" data-bs-toggle="tab" href="#kt_vtab_pane_2">Link 2</a>
                                    </li>
                                    <li className="nav-item w-md-200px">
                                        <a className="nav-link mx-0 my-2" data-bs-toggle="tab" href="#kt_vtab_pane_3">Link 3</a>
                                    </li> */}
                                </ul>
                                <div className='tab-content w-100'>
                                    {metadata.map((mt: any, i: string) => (
                                        <div className='tab-pane fade' id={"kt_vtab_pane_" + i} key={i}>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label">UUID</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Submission type</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Submission mode</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label">Procedure Tracking N°</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Submission unit</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Applicant</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label">Agency code</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Invented name</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">INN</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label">Sequence</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Related Sequence</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Submission description</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-12'>
                                                    <label className="form-label">Remarks</label>
                                                    <textarea className="form-control form-control-solid" rows={3} name="input2" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
                            <button type="button" className="btn btn-primary" data-kt-stepper-action="submit">
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
                                            <form>
                                                <div className='mb-10'>
                                                    <label className="form-label">UUID</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Submission type</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Submission mode</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Procedure Tracking N°</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Submission unit</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Applicant</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Invented name</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">INN</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Sequence</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Related Sequence</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                                <div className='mb-10'>
                                                    <label className="form-label">Submission description</label>
                                                    <input type="text" className="form-control form-control-solid" name="input1" placeholder="" />
                                                </div>
                                            </form>
                                        </div>

                                        <div className='col-lg-6'>
                                            <div className='tab-content rounded h-100 bg-light p-10'>
                                                {metadata.map((mt: any, i: string) => {
                                                    let code = mt.agencyCode.split('-');
                                                    console.log(code)
                                                    code = code[0];
                                                    return (
                                                        <div className="d-flex align-items-center mb-5" >
                                                            <div className="me-5 position-relative">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <ReactCountryFlag
                                                                        className="emojiFlag"
                                                                        countryCode={code}
                                                                        aria-label={mt.country}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="fw-semibold">
                                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary">{mt.country}</a>
                                                                <div className="text-gray-400">{code}</div>
                                                            </div>

                                                            <div className="badge badge-light ms-auto">
                                                                <input type='checkbox' />
                                                            </div>
                                                        </div>
                                                    )
                                                })}


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-center flex-row-fluid pt-12'>
                                    <button type='reset' className='btn btn-light me-3' data-bs-dismiss='modal'>
                                        Cancel
                                    </button>

                                    <button type='submit' className='btn btn-primary'>
                                        Upgrade Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </Authenticated >
    )

}

export default Create;