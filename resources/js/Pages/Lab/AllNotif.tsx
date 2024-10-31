import clsx from "clsx";
import Authenticated from "../../Layouts/AuthenticatedLayout";
import moment from "moment";
import { router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";


const AllNotifs = (props) => {

    const notifications = props.auth.allNotifications
    const notReadedNotifications = props.auth.notReadedNotifications
    const [activeTab, setActiveTab] = useState('unreadNotifications');

    const handleNavigation = (data, notId) => {

        if (data.status == 'closed' || data.status == 'in progress') {
            router.get(route('list'), { id: data.id, notId: notId })
        } else {
            router.get(route('tasks'), { id: data.id, notId: notId })
        }
    }

    const markAllAsRead = () => {
        axios.post('mark-all-as-read').then(res => {
            console.log(res)
        })
    }

    return (

        // <div className="text-align-center" style={{ backgroundColor: 'white' }}>
        // <div className="scroll-y my-5 p-8" style={{ maxHeight: 'calc(100vh - 300px)' }}>
        <div className="card">
            <div className="card-header card-header-stretch">
                <div className="card-title d-flex align-items-center">
                    <i className="ki-duotone ki-calendar-8 fs-1 text-primary me-3 lh-0">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                        <span className="path6"></span>
                    </i>
                    <h3 className="fw-bold m-0 text-gray-800">{moment().format('MMMM Do, YYYY')}</h3>
                </div>
                <div className="card-toolbar m-0">

                    <ul className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bold" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button onClick={() => setActiveTab('unreadNotifications')} className={`nav-link justify-content-center text-active-gray-800 ${activeTab === 'unreadNotifications' ? 'active' : ''}`} >
                                Unread Notifications
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button onClick={() => setActiveTab('readNotifications')} className={`nav-link justify-content-center text-active-gray-800 ${activeTab === 'readNotifications' ? 'active' : ''}`}>
                                Read Notifications
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button onClick={() => setActiveTab('allNotifications')} className={`nav-link justify-content-center text-active-gray-800 ${activeTab === 'allNotifications' ? 'active' : ''}`}>
                                All notifications
                            </button>
                        </li>

                    </ul>
                    <button className="btn btn-sm btn-primary align-self-center ms-5" onClick={markAllAsRead}>Mark all as read</button>
                </div>
            </div>
            <div className="card-body">
                <div className="tab-content">

                    {activeTab == 'unreadNotifications' &&
                        <div className="timeline">
                            {notReadedNotifications.map((notification, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-line w-40px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                        <div className="symbol-label">
                                            <div className={clsx("rounded-circle d-inline-block", notification.read_at ? 'bg-gray-500' : 'bg-primary')} style={{ width: '10px', height: '10px' }}></div>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-3">
                                            <div className="fs-5 fw-semibold mb-2" style={{ cursor: 'pointer' }} onClick={() => handleNavigation(notification.data, notification.id)}>
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
                        </div>}


                    {activeTab == 'readNotifications' &&
                        <div className="timeline">
                            {notifications
                                .filter(notification => notification.read_at) // Filter for read notifications
                                .map((notification, index) => (
                                    <div className="timeline-item" key={index}>
                                        <div className="timeline-line w-40px"></div>
                                        <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                            <div className="symbol-label">
                                                <div className={clsx("rounded-circle d-inline-block", notification.read_at ? 'bg-gray-500' : 'bg-primary')} style={{ width: '10px', height: '10px' }}></div>
                                            </div>
                                        </div>
                                        <div className="timeline-content mb-10 mt-n1">
                                            <div className="pe-3 mb-3">
                                                <div className="fs-5 fw-semibold mb-2" style={{ cursor: 'pointer' }} onClick={() => handleNavigation(notification.data, notification.id)}>
                                                    {notification.data.title} {notification.data.status}
                                                </div>
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    <div className="text-muted me-2 fs-7">{moment(notification.created_at).fromNow()}</div>
                                                </div>
                                            </div>
                                            <div className="pl-4">
                                                <p>{notification.data.product && typeof notification.data.product === 'object' ? notification.data.product.value : notification.data.product} - <span>{!notification.data.country ? 'EU' : notification.data.country ? notification.data.country.value : ''}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    }

                    {activeTab == 'allNotifications' &&
                        <div className="timeline">
                            {notifications.map((notification, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-line w-40px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                        <div className="symbol-label">
                                            <div className={clsx("rounded-circle d-inline-block", notification.read_at ? 'bg-gray-500' : 'bg-primary')} style={{ width: '10px', height: '10px' }}></div>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-3">
                                            <div className="fs-5 fw-semibold mb-2" style={{ cursor: 'pointer' }} onClick={() => handleNavigation(notification.data, notification.id)}>
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
                        </div>}
                </div>
            </div>

        </div>


    )
}

AllNotifs.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default AllNotifs;