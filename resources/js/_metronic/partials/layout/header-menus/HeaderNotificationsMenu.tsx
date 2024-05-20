/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import { FC } from 'react'
import { Link } from '@inertiajs/react'
import { defaultAlerts, defaultLogs, KTIcon, toAbsoluteUrl, useIllustrationsPath } from '../../../helpers'
import moment from 'moment'
import { router } from '@inertiajs/react'

type Props = {
    // className: string
    auth: any;
}

const handleNavigation = (data, notId) => {

    if (data.status == 'closed' || data.status == 'in progress') {
        router.get(route('list'), { id: data.id, notId: notId })
    } else {
        router.get(route('tasks'), { id: data.id, notId: notId })
    }
}

const HeaderNotificationsMenu = ({ auth }) => (
    <div className='menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px' data-kt-menu='true'>
        <div
            className='d-flex flex-column bgi-no-repeat rounded-top'
            style={{ backgroundImage: `url('${toAbsoluteUrl('/media/misc/menu-header-bg.jpg')}')` }}
        >
            <h3 className='text-white fw-bold px-9 mt-10 mb-6'>
                Notifications <span className='fs-8 opacity-75 ps-3'>{auth.notReadedNotifications.length} reports</span>
            </h3>

            <ul className='nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9'>
                <li className='nav-item'>
                    <a
                        className='nav-link text-white opacity-75 opacity-state-100 pb-4'
                        data-bs-toggle='tab'
                        href='#kt_topbar_notifications_1'
                    >
                        Alerts
                    </a>
                </li>
            </ul>
        </div>

        <div className='tab-content'>
            <div className='tab-pane fade show active' id='kt_topbar_notifications_1' role='tabpanel'>
                <div className='scroll-y mh-325px my-5 px-8'>
                    {auth.user.notifications.map((alert, index) => (
                        <div key={`alert${index}`} className={clsx('d-flex flex-stack py-4 mb-1', alert.read_at ? '' : 'rounded bg-light-primary')}>
                            <div className='d-flex align-items-center'>
                                <div className='mb-0 ms-2 me-2'>
                                    <a href='#' className='fs-6 text-gray-800 text-hover-primary fw-bolder' onClick={() => handleNavigation(alert.data, alert.id)}>
                                        {alert.data ? alert.data.title : ''}
                                        <span className='fs-8 ps-2 fw-light'>{alert.data.status}</span>
                                    </a>
                                    <div className='text-gray-400 fs-7'>
                                        {alert.data.product && typeof alert.data.product === 'object' ? alert.data.product.value : alert.data.product} - <span>{!alert.data.country ? 'EU' : alert.data.country ? alert.data.country.code : ''}</span>
                                    </div>
                                </div>
                            </div>

                            <span className='badge badge-light fs-8'>{moment(alert.created_at).fromNow()}</span>
                        </div>
                    ))}
                </div>

                <div className='py-3 text-center border-top'>
                    <Link
                        href='/allnotifications'
                        className='btn btn-color-gray-600 btn-active-color-primary'
                    >
                        View All <KTIcon iconName='arrow-right' className='fs-5' />
                    </Link>
                </div>
            </div>

            <div className='tab-pane fade' id='kt_topbar_notifications_2' role='tabpanel'>
                <div className='d-flex flex-column px-9'>
                    <div className='pt-10 pb-0'>
                        <h3 className='text-dark text-center fw-bolder'>Get Pro Access</h3>

                        <div className='text-center text-gray-600 fw-bold pt-1'>
                            Outlines keep you honest. They stoping you from amazing poorly about drive
                        </div>

                        <div className='text-center mt-5 mb-9'>
                            <a
                                href='#'
                                className='btn btn-sm btn-primary px-6'
                                data-bs-toggle='modal'
                                data-bs-target='#kt_modal_upgrade_plan'
                            >
                                Upgrade
                            </a>
                        </div>
                    </div>

                    <div className='text-center px-4'>
                        <img className='mw-100 mh-200px' alt='metronic' src={useIllustrationsPath('1.png')} />
                    </div>
                </div>
            </div>

            {/* <div className='tab-pane fade' id='kt_topbar_notifications_3' role='tabpanel'>
                <div className='scroll-y mh-325px my-5 px-8'>
                    {defaultLogs.map((log, index) => (
                        <div key={`log${index}`} className='d-flex flex-stack py-4'>
                            <div className='d-flex align-items-center me-2'>
                                <span className={clsx('w-70px badge', `badge-light-${log.state}`, 'me-4')}>
                                    {log.code}
                                </span>

                                <a href='#' className='text-gray-800 text-hover-primary fw-bold'>
                                    {log.message}
                                </a>

                                <span className='badge badge-light fs-8'>{log.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='py-3 text-center border-top'>
                    <Link
                        href='/crafted/pages/profile'
                        className='btn btn-color-gray-600 btn-active-color-primary'
                    >
                        View All <KTIcon iconName='arrow-right' className='fs-5' />
                    </Link>
                </div>
            </div> */}
        </div>
    </div>
)

export { HeaderNotificationsMenu }
