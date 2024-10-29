import moment from "moment"
import Authenticated from "../../Layouts/AuthenticatedLayout"
import Detail from "./Detail"
import Settings from "./Settings"
import Notifications from "./Notifactions"
import { useState } from "react"

const Profile = (props) => {

    const [activeTab, setActiveTab] = useState('overview');

    console.log(props)
    return (
        <div>
            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Account Overview</h1>
                <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                    <li className="breadcrumb-item text-muted">
                        <a href="../../demo1/dist/index.html" className="text-muted text-hover-primary">Home</a>
                    </li>

                    <li className="breadcrumb-item">
                        <span className="bullet bg-gray-400 w-5px h-2px"></span>
                    </li>

                    <li className="breadcrumb-item text-muted">Account</li>

                </ul>
            </div>
            <div className="card mb-5 mb-xl-10">
                <div className="card-body pt-9 pb-0">
                    <div className="d-flex flex-wrap flex-sm-nowrap">
                        <div className="me-7 mb-4">
                            <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                <img src="assets/media/avatars/300-1.jpg" alt="image" />
                                <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center mb-2">
                                        <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">{props.auth.user.name}</a>
                                    </div>
                                    <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                        <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                            <i className="ki-duotone ki-sms fs-4">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>{props.auth.user.email}
                                        </a>
                                        <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                            <i className="ki-duotone ki-profile-circle fs-4 me-1">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                            </i>
                                            Developer
                                        </a>
                                        <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                            <i className="ki-duotone ki-geolocation fs-4 me-1">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>SF, Bay Area
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap flex-stack">
                                <div className="d-flex flex-column flex-grow-1 pe-8">
                                    <div className="d-flex flex-wrap">
                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <div className="d-flex align-items-center">
                                                <i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                                <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div>
                                            </div>
                                            <div className="fw-semibold fs-6 text-gray-400">Earnings</div>
                                        </div>
                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <div className="d-flex align-items-center">
                                                <i className="ki-duotone ki-arrow-down fs-3 text-danger me-2">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                                <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="80">0</div>
                                            </div>
                                            <div className="fw-semibold fs-6 text-gray-400">Projects</div>
                                        </div>
                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <div className="d-flex align-items-center">
                                                <i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                                <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div>
                                            </div>
                                            <div className="fw-semibold fs-6 text-gray-400">Success Rate</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                                    <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                        <span className="fw-semibold fs-6 text-gray-400">Profile Compleation</span>
                                        <span className="fw-bold fs-6">50%</span>
                                    </div>
                                    <div className="h-5px mx-3 w-100 bg-light mb-3">
                                        <div className="bg-success rounded h-5px" role="progressbar" style={{ width: "50%" }}  ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold " role='tablist'>
                        <li className="nav-item mt-2">
                            {/* <a className="nav-link text-active-primary ms-0 me-10 py-5 active" data-bs-toggle="pill" href="#kt_profile_details_view" role="tab">
                                Overview
                            </a> */}
                            <button
                                className={`nav-link text-active-primary ms-0 me-10 py-5 ${activeTab === 'overview' ? 'active' : ''}`}
                                onClick={() => setActiveTab('overview')}
                            >
                                Overview
                            </button>
                        </li>
                        <li className="nav-item mt-2">
                            {/* <a className="nav-link text-active-primary ms-0 me-10 py-5" data-bs-toggle="pill" href="#kt_profile_settings" aria-selected="false" tabIndex={-1} role="tab">
                                Settings
                            </a> */}

                            <button
                                className={`nav-link text-active-primary ms-0 me-10 py-5 ${activeTab === 'settings' ? 'active' : ''}`}
                                onClick={() => setActiveTab('settings')}
                            >
                                Settings
                            </button>
                        </li>
                        <li className="nav-item mt-2">
                            {/* <a className="nav-link text-active-primary ms-0 me-10 py-5" data-bs-toggle="pill" href="#kt_profile_notifications" aria-selected="false" tabIndex={-1} role="tab">
                                Notifications
                            </a> */}

                            <button
                                className={`nav-link text-active-primary ms-0 me-10 py-5 ${activeTab === 'notifications' ? 'active' : ''}`}
                                onClick={() => setActiveTab('notifications')}
                            >
                                Notifications
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='tab-content'>
                {/* <Detail {...props} />
                <Settings {...props} />
                <Notifications {...props} /> */}

                {activeTab === 'overview' && <Detail props={props} navigateToSettings={() => setActiveTab('settings')} />}
                {activeTab === 'settings' && <Settings {...props} />}
                {activeTab === 'notifications' && <Notifications {...props} />}
            </div>

        </div>
    )
}

Profile.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Profile