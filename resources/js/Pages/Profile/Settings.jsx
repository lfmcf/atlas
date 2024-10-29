import { useState } from "react"
const Settings = ({ ...props }) => {
    const [emailVisble, setEmailVisble] = useState(false)
    const [passwordVisble, setPasswordVisble] = useState(false)

    const toggleEmail = () => {
        setEmailVisble(!emailVisble)
    }

    const togglePassword = () => {
        setPasswordVisble(!passwordVisble)
    }

    return (
        <div className="tab-pane fade active show" id="kt_profile_settings" role='tabpanel'>
            <div className="card mb-5 mb-xl-10" id="kt_profile_details_edit">
                <div className="card-header cursor-pointer">
                    <div className="card-title m-0">
                        <h3 className="fw-bold m-0">Profile Details</h3>
                    </div>

                </div>
                <div id="kt_account_settings_profile_details" className="collapse show">
                    <form id="kt_account_profile_details_form" className="form">
                        <div className="card-body border-top p-9">
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-semibold fs-6">Avatar</label>
                                <div className="col-lg-8">
                                    <div className="image-input image-input-outline" data-kt-image-input="true" style={{ backgroundImage: "url('assets/media/svg/avatars/blank.svg')" }}>
                                        <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: "url(assets/media/avatars/300-1.jpg)" }}></div>
                                        <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                            <i className="ki-duotone ki-pencil fs-7">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>

                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                            <input type="hidden" name="avatar_remove" />

                                        </label>
                                        <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                            <i className="ki-duotone ki-cross fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </span>
                                        <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                            <i className="ki-duotone ki-cross fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </span>
                                    </div>
                                    <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label required fw-semibold fs-6">Full Name</label>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-12 fv-row">
                                            <input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" value={props.auth.user.name} />
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label required fw-semibold fs-6">Email</label>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-12 fv-row">
                                            <input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" value={props.auth.user.email} />
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label required fw-semibold fs-6">Company</label>
                                <div className="col-lg-8 fv-row">
                                    <input type="text" name="company" className="form-control form-control-lg form-control-solid" placeholder="Company name" value="Stallergens" />
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                    <span className="required">Country</span>
                                    {/* <span className="ms-1" data-bs-toggle="tooltip" title="Phone number must be active">
                                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                        </i>
                                    </span> */}
                                </label>
                                <div className="col-lg-8 fv-row">
                                    <input type="tel" name="country" className="form-control form-control-lg form-control-solid" placeholder="Phone number" value="Germany" />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-end py-6 px-9">
                            <button type="reset" className="btn btn-light btn-active-light-primary me-2">Discard</button>
                            <button type="submit" className="btn btn-primary" id="kt_account_profile_details_submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card mb-5 mb-xl-10">
                <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
                    <div className="card-title m-0">
                        <h3 className="fw-bold m-0">Sign-in Method</h3>
                    </div>
                </div>
                <div id="kt_account_settings_signin_method" className="collapse show">
                    <div className="card-body border-top p-9">
                        <div className="d-flex flex-wrap align-items-center">
                            {!emailVisble ?
                                <div id="kt_signin_email">
                                    <div className="fs-6 fw-bold mb-1">Email Address</div>
                                    <div className="fw-semibold text-gray-600">{props.auth.user.email}</div>
                                </div>
                                :
                                <div id="kt_signin_email_edit" className="flex-row-fluid">
                                    <form id="kt_signin_change_email" className="form">
                                        <div className="row mb-6">
                                            <div className="col-lg-6 mb-4 mb-lg-0">
                                                <div className="fv-row mb-0">
                                                    <label htmlFor="emailaddress" className="form-label fs-6 fw-bold mb-3">Enter New Email Address</label>
                                                    <input type="email" className="form-control form-control-lg form-control-solid" id="emailaddress" placeholder="Email Address" name="emailaddress" value={props.auth.user.email} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="fv-row mb-0">
                                                    <label htmlFor="confirmemailpassword" className="form-label fs-6 fw-bold mb-3">Confirm Password</label>
                                                    <input type="password" className="form-control form-control-lg form-control-solid" name="confirmemailpassword" id="confirmemailpassword" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <button id="kt_signin_submit" type="button" className="btn btn-primary me-2 px-6">Update Email</button>
                                            <button id="kt_signin_cancel" type="button" className="btn btn-color-gray-400 btn-active-light-primary px-6" onClick={toggleEmail}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            }

                            {!emailVisble ?
                                <div id="kt_signin_email_button" className="ms-auto">
                                    <button className="btn btn-light btn-active-light-primary" onClick={toggleEmail}>Change Email</button>
                                </div>
                                : ''}
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-wrap align-items-center mb-10">
                            {!passwordVisble ?
                                <div id="kt_signin_password">
                                    <div className="fs-6 fw-bold mb-1">Password</div>
                                    <div className="fw-semibold text-gray-600">************</div>
                                </div>
                                :
                                <div id="kt_signin_password_edit" className="flex-row-fluid">

                                    <form id="kt_signin_change_password" className="form" >
                                        <div className="row mb-1">
                                            <div className="col-lg-4">
                                                <div className="fv-row mb-0">
                                                    <label htmlFor="currentpassword" className="form-label fs-6 fw-bold mb-3">Current Password</label>
                                                    <input type="password" className="form-control form-control-lg form-control-solid" name="currentpassword" id="currentpassword" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="fv-row mb-0">
                                                    <label htmlFor="newpassword" className="form-label fs-6 fw-bold mb-3">New Password</label>
                                                    <input type="password" className="form-control form-control-lg form-control-solid" name="newpassword" id="newpassword" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="fv-row mb-0">
                                                    <label htmlFor="confirmpassword" className="form-label fs-6 fw-bold mb-3">Confirm New Password</label>
                                                    <input type="password" className="form-control form-control-lg form-control-solid" name="confirmpassword" id="confirmpassword" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-text mb-5">Password must be at least 8 character and contain symbols</div>
                                        <div className="d-flex">
                                            <button id="kt_password_submit" type="button" className="btn btn-primary me-2 px-6">Update Password</button>
                                            <button id="kt_password_cancel" type="button" className="btn btn-color-gray-400 btn-active-light-primary px-6" onClick={togglePassword}>Cancel</button>
                                        </div>
                                    </form>

                                </div>
                            }
                            {!passwordVisble ?
                                <div id="kt_signin_password_button" className="ms-auto">
                                    <button className="btn btn-light btn-active-light-primary" onClick={togglePassword}>Reset Password</button>
                                </div>
                                : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings