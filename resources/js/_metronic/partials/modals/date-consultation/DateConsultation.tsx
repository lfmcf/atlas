import clsx from "clsx";
import { KTIcon } from "../../../helpers";
import moment from "moment";

const DateConsultation = (props) => {
    return (
        <div
            className={clsx(
                'modal fade',
                props.show ? 'show' : '',
            )}
            id="kt_modal_date_consultation"
            aria-hidden="true"
            style={{ display: props.show ? 'block' : 'none' }}
        >
            <div className='modal-dialog modal-dialog-centered mw-650px'>
                <div className='modal-content shadow-lg'>
                    {/* Modal Header */}
                    <div className='modal-header pb-0 border-0 position-relative'>
                        <h1 className='modal-title fs-3 text-gray-800 w-100 text-center'>
                            Consultation Details
                        </h1>
                        <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                            <KTIcon iconName='cross' className='fs-1' />
                        </div>
                    </div>

                    {/* Modal Body */}
                    <div className='modal-body scroll-y px-10 py-8'>
                        {/* Date Card */}
                        <div className="card card-flush shadow-sm mb-7">
                            <div className="card-header pt-5">
                                <h3 className="card-title fw-bold text-gray-800">Request Information</h3>
                            </div>
                            <div className="card-body py-3">
                                <div className="d-flex flex-column gap-5">
                                    {/* Request Date */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fw-semibold text-muted fs-6">Request Date:</span>
                                        <span className="fw-bold fs-6 text-gray-800">
                                            {moment(props.request_date).format('DD MMM YYYY, hh:mm A')}
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fw-semibold text-muted fs-6">Delivery Deadline:</span>
                                        <span className="fw-bold fs-6 text-gray-800">
                                            {moment(props.delivery_deadline).format('DD MMM YYYY, hh:mm A')}
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fw-semibold text-muted fs-6">Adjusted deadline:</span>
                                        <span className="fw-bold fs-6 text-gray-800">
                                            {moment(props.adjusted_deadline).format('DD MMM YYYY, hh:mm A')}
                                        </span>
                                    </div>
                                    {props.adjusted_deadline_car && (
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-semibold text-muted fs-6">Adjusted deadline (Car):</span>
                                            <span className="fw-bold fs-6 text-gray-800">
                                                {moment(props.adjusted_deadline_car).format('DD MMM YYYY, hh:mm A')}
                                            </span>
                                        </div>
                                    )}


                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="d-flex justify-content-end gap-3 mt-5">
                            <button
                                className="btn btn-light-primary fw-bold"
                                data-bs-dismiss='modal'
                            >
                                Close
                            </button>
                            {/* <button className="btn btn-primary fw-bold">
                                Schedule Change
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop styling */}
            <style>{`
                .backdrop {
                    background-color: rgba(0, 0, 0, 0.5);
                }
                .modal-content {
                    border-radius: 12px;
                }
                .card {
                    border-radius: 8px;
                    border: 1px solid #E4E6EF;
                }
            `}</style>
        </div>
    );
}

export { DateConsultation };