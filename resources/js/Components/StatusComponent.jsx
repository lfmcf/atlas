import React from "react";

const StatusComponent = ({ status }) => {
    return (
        <>
            {status == 'initiated' ?
                <span className="badge badge-light-warning fs-7 fw-bold text-capitalize">{status}</span>
                : status == 'submitted' ?
                    <span className="badge badge-light-success fs-7 fw-bold text-capitalize">{status}</span>
                    : status == 'in progress' ? <span className='badge badge-light-primary fs-7 fw-bold text-capitalize'>{status}</span>
                        : status == 'delivered' ? <span className='badge badge-primary fs-7 fw-bold text-capitalize'>{status}</span>
                            : status == 'closed' ? <span className='badge badge-dark fs-7 fw-bold text-capitalize'>{status}</span>
                                : status == 'to verify' ? <span className='badge badge-light-danger fs-7 fw-bold text-capitalize'>{status}</span>
                                    : status == 'to correct' ? <span className='badge badge-danger fs-7 fw-bold text-capitalize'>{status}</span> :
                                        ''}
        </>
    )
}

export default StatusComponent;