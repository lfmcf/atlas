import { FC } from 'react'
import { KTIcon } from '../../../helpers';
import ReactCountryFlag from "react-country-flag"

const MultiDataUpdate: FC = () => {
    return (
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
                            {/* <div className='nav-group nav-group-outline mx-auto' data-kt-buttons='true'>
                               
                            </div> */}

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
                                        <div className="d-flex align-items-center mb-5">
                                            <div className="me-5 position-relative">
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <ReactCountryFlag
                                                        className="emojiFlag"
                                                        countryCode="AT"
                                                        aria-label="Austria"
                                                    />
                                                </div>
                                            </div>
                                            <div className="fw-semibold">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary">Austria</a>
                                                <div className="text-gray-400">AT</div>
                                            </div>

                                            <div className="badge badge-light ms-auto">
                                                <input type='checkbox' />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-5">
                                            <div className="me-5 position-relative">
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <ReactCountryFlag
                                                        className="emojiFlag"
                                                        countryCode="BG"
                                                        aria-label="Bulgaria"
                                                    />
                                                </div>
                                            </div>
                                            <div className="fw-semibold">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary">Bulgaria</a>
                                                <div className="text-gray-400">BG</div>
                                            </div>

                                            <div className="badge badge-light ms-auto">
                                                <input type='checkbox' />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-5">
                                            <div className="me-5 position-relative">
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <ReactCountryFlag
                                                        className="emojiFlag"
                                                        countryCode="CZ"
                                                        aria-label="Czech republic"
                                                    />
                                                </div>
                                            </div>
                                            <div className="fw-semibold">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary">Czech republic</a>
                                                <div className="text-gray-400">CZ</div>
                                            </div>

                                            <div className="badge badge-light ms-auto">
                                                <input type='checkbox' />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-5">
                                            <div className="me-5 position-relative">
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <ReactCountryFlag
                                                        className="emojiFlag"
                                                        countryCode="HU"
                                                        aria-label="Hungary"
                                                    />
                                                </div>
                                            </div>
                                            <div className="fw-semibold">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary">Hungary</a>
                                                <div className="text-gray-400">HU</div>
                                            </div>

                                            <div className="badge badge-light ms-auto">
                                                <input type='checkbox' />
                                            </div>
                                        </div>
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
    )
}


export { MultiDataUpdate }