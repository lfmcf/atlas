import clsx from "clsx";
import Authenticated from "../../Layouts/AuthenticatedLayout";
import moment from "moment";
import { router } from "@inertiajs/react";
import axios from "axios";


const AllNotifs = (props) => {

    const notifications = props.auth.allNotifications

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

        <div className="text-align-center m-auto w-50" style={{ backgroundColor: 'white' }}>
            <div className="scroll-y my-5 p-8" style={{ maxHeight: 'calc(100vh - 300px)' }}>
                {notifications.map((alert, index) => (
                    <div key={`alert${index}`} className={clsx('d-flex flex-stack py-4 mb-1', alert.read_at ? '' : 'rounded bg-light-primary')}>
                        <div className='d-flex align-items-center'>
                            <div className='mb-0 ms-2 me-2'>
                                <a href='#' className='fs-6 text-gray-800 text-hover-primary fw-bolder' onClick={() => handleNavigation(alert.data, alert.id)}>
                                    {alert.data ? alert.data.title : ''}
                                    <span className='fs-8 ps-2 fw-light'>{alert.data.status}</span>
                                </a>
                                <div className='text-gray-400 fs-7'>
                                    {alert.data.product && typeof alert.data.product === 'object' ? alert.data.product.value : alert.data.product} - <span>{alert.data.country ? alert.data.country.code : ''}</span>
                                </div>
                            </div>
                        </div>
                        <span className='badge badge-light fs-8'>{moment(alert.created_at).fromNow()}</span>
                    </div>
                ))}
            </div>
            <div className="p-2">
                <button className="btn btn-color-primary" onClick={markAllAsRead}>Mark all as read</button>
            </div>
        </div>
    )
}

AllNotifs.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default AllNotifs;