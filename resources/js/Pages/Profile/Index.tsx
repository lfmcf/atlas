import moment from "moment"
import Authenticated from "../../Layouts/AuthenticatedLayout"
import Detail from "./Detail"
import Settings from "./Settings"
import Notifications from "./Notifactions"
import { useState } from "react"
import { useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content"
import { toAbsoluteUrl } from "../../_metronic/helpers"
import { router } from '@inertiajs/react'


const MySwal = withReactContent(Swal)

const Profile = (props) => {

    const [passwordVisble, setPasswordVisble] = useState(false)
    const [avatarUrl, setAvatarUrl] = useState(props.auth.user.avatar)

    const togglePassword = () => {
        setPasswordVisble(!passwordVisble)
    }

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',

    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('avatar', file);

            router.post(route('update_avatar'), formData, {
                preserveScroll: true,
                onSuccess: (res) => {

                    setAvatarUrl(res.props.auth.user.avatar)
                },
                onError: (errors) => {
                    Swal.fire('Error', errors.avatar || 'An error occurred', 'error');
                },
                forceFormData: true, // Important to ensure file data is handled as FormData
            });
        } else {
            Swal.fire('Error', 'Please select a file.', 'error');
        }

    }


    // useEffect(() => {
    //     post(route('update_avatar'));
    // }, [data.avatar])

    const handleChange = (e) => {
        clearErrors(e.target.name)
        setData(e.target.name, e.target.value)
    }

    const submitPasswordChanges = (e) => {
        e.preventDefault();
        post(route('password_update'), {
            preserveScroll: true,
            onSuccess: () => {
                MySwal.fire({
                    icon: 'success',
                    title: 'Password Updated',
                    text: 'Password Updated Successfully',
                }).then(() => {
                    // Reset the form fields after showing the success alert
                    reset("current_password", "password", "password_confirmation");
                    setPasswordVisble(false)
                });
            },

            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                }
            },
        });
    }


    return (
        <div>
            <div className="card mb-5 mb-xl-10" >
                <div className="card-header cursor-pointer">
                    <div className="card-title m-0">
                        <h3 className="fw-bold m-0">Profile Details</h3>
                    </div>

                </div>
                <div className="card-body p-9">
                    <div className="row mb-6">
                        <label className="col-lg-4 col-form-label fw-semibold fs-6">Avatar</label>

                        <div className="col-lg-8">
                            <div
                                className="image-input image-input-outline"
                                data-kt-image-input="true"
                                style={{
                                    backgroundImage: avatarUrl
                                        ? `url(${toAbsoluteUrl(avatarUrl)})`
                                        : "none",
                                    backgroundColor: avatarUrl ? "transparent" : "#f0f0f0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "125px",
                                    width: "125px",
                                }}
                            >
                                {avatarUrl ? (
                                    <div
                                        className="image-input-wrapper w-125px h-125px"
                                        style={{ backgroundImage: `url(${toAbsoluteUrl(avatarUrl)})` }}
                                    ></div>
                                ) : (

                                    <div
                                        className="initials-placeholder w-125px h-125px"
                                        style={{
                                            fontSize: "2rem",
                                            fontWeight: "bold",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#555",
                                            backgroundColor: "#0D92F4",
                                        }}
                                    >
                                        <div className="initials" style={{ color: "#fff", width: "100%", textAlign: "center" }}>
                                            {props.auth.user.name
                                                ? props.auth.user.name
                                                    .split(" ")
                                                    .map(part => part[0])
                                                    .slice(0, 2)
                                                    .join("")
                                                    .toUpperCase()
                                                : ""}
                                        </div>
                                    </div>
                                )}

                                <label
                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                    data-kt-image-input-action="change"
                                    data-bs-toggle="tooltip"
                                    title="Change avatar"
                                >
                                    <i className="ki-duotone ki-pencil fs-7">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg" onChange={handleFileChange} />
                                    <input type="hidden" name="avatar_remove" />
                                </label>

                                <span
                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                    data-kt-image-input-action="cancel"
                                    data-bs-toggle="tooltip"
                                    title="Cancel avatar"
                                >
                                    <i className="ki-duotone ki-cross fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                            </div>
                            <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                        </div>

                    </div>
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">Full Name</label>
                        <div className="col-lg-8">
                            <span className="fw-bold fs-6 text-gray-800">{props.auth.user.name}</span>
                        </div>
                    </div>
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">Email

                        </label>
                        <div className="col-lg-8 d-flex align-items-center">
                            <span className="fw-bold fs-6 text-gray-800 me-2">{props.auth.user.email}</span>
                            <span className="badge badge-success">Verified</span>
                        </div>

                    </div>
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">Team

                        </label>
                        <div className="col-lg-8 d-flex align-items-center">
                            <span className="fw-bold fs-6 text-gray-800 me-2">
                                {props.auth.user.current_team_id == 1 ? "Manager" : props.auth.user.current_team_id == 2 ? "Operational" : "Ekemia"}
                            </span>

                        </div>

                    </div>

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
                        <div className="d-flex flex-wrap align-items-center mb-10">
                            {!passwordVisble ?
                                <div id="kt_signin_password">
                                    <div className="fs-6 fw-bold mb-1">Password</div>
                                    <div className="fw-semibold text-gray-600">************</div>
                                </div>
                                :
                                <div id="kt_signin_password_edit" className="flex-row-fluid">

                                    <form id="kt_signin_change_password" className="form" onSubmit={submitPasswordChanges}>
                                        <div className="row mb-1">
                                            <div className="col-lg-4">
                                                <div className="fv-row mb-0">
                                                    <label htmlFor="current_password" className="form-label fs-6 fw-bold mb-3" style={{ color: errors.current_password ? 'red' : '' }}>Current Password</label>
                                                    <input type="password" className="form-control form-control-lg form-control-solid" name="current_password" id="current_password" onChange={handleChange} style={{ borderColor: errors.current_password ? 'red' : '' }} />
                                                </div>
                                                {errors.current_password ?
                                                    <div className="form-text mb-5" style={{ color: 'red' }}>{errors.current_password}</div>
                                                    : ''}
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="fv-row mb-0">
                                                    <label htmlFor="password" className="form-label fs-6 fw-bold mb-3" style={{ color: errors.password ? 'red' : '' }}>New Password</label>
                                                    <input type="password" className="form-control form-control-lg form-control-solid" name="password" id="password" onChange={handleChange} style={{ borderColor: errors.password ? 'red' : '' }} />
                                                </div>
                                                {errors.password ?
                                                    <div className="form-text mb-5" style={{ color: 'red' }}>{errors.password}</div>
                                                    : ''}
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="fv-row mb-0">
                                                    <label htmlFor="confirmpassword" className="form-label fs-6 fw-bold mb-3" style={{ color: errors.password_confirmation ? 'red' : '' }}>Confirm New Password</label>
                                                    <input type="password" className="form-control form-control-lg form-control-solid" name="password_confirmation" id="confirmpassword" onChange={handleChange} style={{ borderColor: errors.password_confirmation ? 'red' : '' }} />
                                                </div>
                                                {errors.password_confirmation ?
                                                    <div className="form-text mb-5" style={{ color: 'red' }}>{errors.password_confirmation}</div>
                                                    : ''}
                                            </div>
                                        </div>

                                        <div className="d-fle mt-5">
                                            <button id="kt_password_submit" type="submit" className="btn btn-primary me-2 px-6">Update Password</button>
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

Profile.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Profile