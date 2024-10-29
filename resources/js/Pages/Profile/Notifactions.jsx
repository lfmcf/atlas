const Notifications = ({ ...props }) => {
    return (
        <div className="tab-pane fade active show" id="kt_profile_notifications" role='tabpanel'>
            <div className="card">
                <div className="card-header card-header-stretch">
                    <div className="card-title d-flex align-items-center">
                        <i className="ki-duotone ki-calendar-8 fs-1 text-primary me-3 lh-0"></i>
                        <h3 className="fw-bold m-0 text-gray-800">{moment().format('MMMM Do, YYYY')}</h3>
                    </div>
                </div>
                <div className="card-body">
                    <div className="timeline">
                        {props.auth.allNotifications.map((notification, index) => (
                            <div className="timeline-item">
                                <div className="timeline-line w-40px"></div>
                                <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                    <div className="symbol-label bg-light">
                                        <div className="bg-gray-500 rounded-circle d-inline-block" style={{ width: '10px', height: '10px' }}></div>
                                    </div>
                                </div>
                                <div className="timeline-content mb-10 mt-n1">
                                    <div className="pe-3 mb-3">
                                        <div className="fs-5 fw-semibold mb-2">
                                            {notification.data.title} {notification.data.status}
                                        </div>
                                        <div className="d-flex align-items-center mt-1 fs-6">
                                            <div className="text-muted me-2 fs-7">{moment(notification.created_at).fromNow()}</div>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        <p >{notification.data.product && typeof notification.data.product === 'object' ? notification.data.product.value : notification.data.product} - <span>{!notification.data.country ? 'EU' : notification.data.country ? notification.data.country.value : ''}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications