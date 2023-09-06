/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from 'react-intl'
import { KTIcon } from '../../../../helpers'
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub'
import { SidebarMenuItem } from './SidebarMenuItem'
import { Link } from '@inertiajs/react'

const SidebarMenuMain = () => {
    const intl = useIntl()

    return (
        <>
            <SidebarMenuItem
                to='/dashboard'
                icon='element-11'
                title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
                fontIcon='bi-app-indicator'
            />

            <div className='menu-item'>
                <div className='menu-content pt-8 pb-2'>
                    <span className='menu-section text-muted text-uppercase fs-8 ls-1'>REQUESTS LIST</span>
                </div>
            </div>

            <SidebarMenuItem
                to='/list'
                icon='abstract-28'
                title='List'
                fontIcon='bi-layers'
            />
            <SidebarMenuItem
                to='/tasks'
                icon='code'
                title='My Tasks'
                fontIcon='bi-layers'
            />
            {/* <div className='menu-item'>
                <Link
                    href={route('tasks')}
                    className='menu-link'
                >
                    <span className='menu-icon'>
                        <KTIcon iconName='code' className='fs-2' />
                    </span>
                    <span className='menu-title'>My Tasks
                    </span>
                </Link>
            </div> */}
        </>
    )
}

export { SidebarMenuMain }
