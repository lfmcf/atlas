const Detail = ({ props, navigateToSettings }) => {

    return (
        <div className="tab-pane fade active show" id="kt_profile_details_view" role='tabpanel'>
            <div className="card mb-5 mb-xl-10" >
                <div className="card-header cursor-pointer">
                    <div className="card-title m-0">
                        <h3 className="fw-bold m-0">Profile Details</h3>
                    </div>
                    <button className="btn btn-sm btn-primary align-self-center" onClick={navigateToSettings}>
                        Edit Profile
                    </button>
                </div>
                <div className="card-body p-9">
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">Full Name</label>
                        <div className="col-lg-8">
                            <span className="fw-bold fs-6 text-gray-800">{props.auth.user.name}</span>
                        </div>
                    </div>
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">Email
                            <span className="ms-1" data-bs-toggle="tooltip" title="Phone number must be active">
                                <i className="ki-duotone ki-information fs-7">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                </i>
                            </span></label>
                        <div className="col-lg-8 d-flex align-items-center">
                            <span className="fw-bold fs-6 text-gray-800 me-2">{props.auth.user.email}</span>
                            <span className="badge badge-success">Verified</span>
                        </div>
                    </div>
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">Company</label>
                        <div className="col-lg-8 fv-row">
                            <span className="fw-semibold text-gray-800 fs-6">Stallergens</span>
                        </div>
                    </div>

                    <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">Country
                            <span className="ms-1" data-bs-toggle="tooltip" title="Country of origination">
                                <i className="ki-duotone ki-information fs-7">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                </i>
                            </span></label>
                        <div className="col-lg-8">
                            <span className="fw-bold fs-6 text-gray-800">Germany</span>
                        </div>
                    </div>
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">Communication</label>
                        <div className="col-lg-8">
                            <span className="fw-bold fs-6 text-gray-800">Email, Notifications</span>
                        </div>
                    </div>
                    <div className="row mb-10">
                        <label className="col-lg-4 fw-semibold text-muted">Allow Changes</label>
                        <div className="col-lg-8">
                            <span className="fw-semibold fs-6 text-gray-800">Yes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail