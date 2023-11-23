import { useEffect } from 'react'
//import {Outlet, useLocation} from 'react-router-dom'
import { HeaderWrapper } from './components/header'
import { RightToolbar } from '../partials/layout/RightToolbar'
import { ScrollTop } from './components/scroll-top'
import { Content } from './components/content'
import { FooterWrapper } from './components/footer'
import { Sidebar } from './components/sidebar'
import { ActivityDrawer, DeliveryMessage, DrawerMessenger, InviteUsers, MultiDataUpdate, SelectLocationModal, UpgradePlan } from '../partials'
import { PageDataProvider } from './core'
import { reInitMenu } from '../helpers'
import { ToolbarWrapper } from './components/toolbar'

const MasterLayout = ({ auth, children }) => {

	const location = route().current()

	useEffect(() => {
		reInitMenu()
	}, [location])

	return (
		<PageDataProvider>
			<div className='d-flex flex-column flex-root app-root' id='kt_app_root'>
				<div className='app-page flex-column flex-column-fluid' id='kt_app_page'>
					<HeaderWrapper auth={auth} />
					<div className='app-wrapper flex-column flex-row-fluid' id='kt_app_wrapper'>
						<Sidebar />
						<div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
							<div className='d-flex flex-column flex-column-fluid'>
								<ToolbarWrapper />
								<Content>
									{children}
									{/* <Outlet /> */}
								</Content>
							</div>
							<FooterWrapper />
						</div>
					</div>
				</div>
			</div>

			{/* begin:: Drawers */}
			{/* <ActivityDrawer /> */}
			{/* <RightToolbar /> */}
			{/* <DrawerMessenger /> */}
			{/* end:: Drawers */}

			{/* begin:: Modals */}
			<InviteUsers />
			<UpgradePlan />
			<MultiDataUpdate />
			<SelectLocationModal />
			{/* end:: Modals */}
			<ScrollTop />
		</PageDataProvider>
	)
}

export { MasterLayout }
