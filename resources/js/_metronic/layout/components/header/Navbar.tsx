import clsx from 'clsx'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import { HeaderNotificationsMenu, HeaderUserMenu, Search, ThemeModeSwitcher } from '../../../partials'
import { useLayout } from '../../core'

const itemClass = 'ms-1 ms-md-4'
const btnClass =
    'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px'
const userAvatarClass = 'symbol-35px'
const btnIconClass = 'fs-2'

const Navbar = ({ auth }) => {

    // const { config } = useLayout()

    const unreadNot = auth.user.unread_notifications.length


    return (
        <div className='app-navbar flex-shrink-0'>

            <div className={clsx('app-navbar-item', itemClass)} >
                <div
                    data-kt-menu-trigger="{default: 'click'}"
                    data-kt-menu-attach='parent'
                    data-kt-menu-placement='bottom-end'
                    className={clsx('position-relative', btnClass)}
                >
                    <KTIcon iconName='notification' className={btnIconClass} />
                    {/* <i className="bi bi-bell fa-5x"></i> */}
                    <span className="position-absolute text-gray-600" style={{ top: '0', right: '0', fontSize: '12px' }}>
                        {unreadNot > 0 ? unreadNot : ''}
                    </span>
                </div>
                <HeaderNotificationsMenu auth={auth} />
            </div>

            <div className={clsx('app-navbar-item', itemClass)}>
                <div
                    className={clsx('cursor-pointer symbol', userAvatarClass)}
                    data-kt-menu-trigger="{default: 'click'}"
                    data-kt-menu-attach='parent'
                    data-kt-menu-placement='bottom-end'
                >
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" data-bs-original-title="Susan Redwood" data-kt-initialized="1">
                        <span className="symbol-label bg-primary text-inverse-primary fw-bold text-uppercase">{auth.user.name ? auth.user.name.slice(0, 2) : ""}</span>
                    </div>
                    {/* <img src={toAbsoluteUrl('/media/avatars/300-3.jpg')} alt='' /> */}
                </div>
                <HeaderUserMenu user={auth.user} />
            </div>

            {/* {config.app?.header?.default?.menu?.display && (
                <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
                    <div
                        className='btn btn-icon btn-active-color-primary w-35px h-35px'
                        id='kt_app_header_menu_toggle'
                    >
                        <KTIcon iconName='text-align-left' className={btnIconClass} />
                    </div>
                </div>
            )} */}
        </div>
    )
}

export { Navbar }
