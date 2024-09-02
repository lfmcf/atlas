import { useIntl } from 'react-intl'
import { MenuItem } from './MenuItem'
import { MenuInnerWithSub } from './MenuInnerWithSub'
import { MegaMenu } from './MegaMenu'
import { KTIcon } from '../../../../helpers'
import { InviteUsers } from '../../../../partials/modals/invite-users/InviteUsers'
import { useState } from 'react'
import AddProduct from '../../../../partials/modals/add-product/addProduct'
import axios from 'axios'

const initialState = {
    form_: { label: 'Publishing', value: 'Publishing' },
    region_: "",
    procedure_: "",
    product_: "",
    country_: ''
};


export function MenuInner({ team_member }) {
    const intl = useIntl()
    const [show, setShow] = useState(false);
    const [showSec, setShowSec] = useState(false);
    const [showDup, setShowDup] = useState({ show: false, data: '', id: '' });
    const [update, setUpdate] = useState({ rerender: false, pName: '' })
    const [{ form_, region_, procedure_, product_, country_ }, setState] = useState(initialState)
    const [product_name, setProduct_name] = useState();

    const handleAddProduct = () => {
        axios.post('addproductmt', { 'product': product_name, 'region': region_, 'procedure': procedure_ }).then(res => {
            if (res.status == 200) {
                setUpdate({ rerender: true, pName: product_name })
            }
        })
    }

    return (
        <>
            {/* <MenuItem title="New Request" to='#' onClick={ } /> */}
            <div className='menu-item me-lg-1' style={{ display: team_member == 3 ? 'none' : '' }}>
                <a
                    href='#'
                    className='btn menu-link py-3'
                    data-bs-toggle="tooltip"
                    title="Create New Request"
                    // data-bs-toggle='modal'
                    // data-bs-target='#kt_modal_invite_friends'
                    onClick={() => setShow(true)}
                >
                    <KTIcon iconName='plus' className='fs-3' />
                    New Request
                </a>
            </div>
            {/* <MenuItem title='Layout Builder' to='/builder' /> */}
            {/* <MenuInnerWithSub
                title='Crafted'
                to='/crafted'
                menuPlacement='bottom-start'
                menuTrigger='click'
            >

                <MenuInnerWithSub
                    title='Pages'
                    to='/crafted/pages'
                    fontIcon='bi-archive'
                    hasArrow={true}
                    menuPlacement='right-start'
                    menuTrigger={`{default:'click', lg: 'hover'}`}
                >
                    <MenuInnerWithSub
                        title='Profile'
                        to='/crafted/pages/profile'
                        hasArrow={true}
                        hasBullet={true}
                        menuPlacement='right-start'
                        menuTrigger={`{default:'click', lg: 'hover'}`}
                    >
                        <MenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
                        <MenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
                        <MenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
                        <MenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
                        <MenuItem
                            to='/crafted/pages/profile/connections'
                            title='Connections'
                            hasBullet={true}
                        />
                    </MenuInnerWithSub>
                    <MenuInnerWithSub
                        title='Wizards'
                        to='/crafted/pages/wizards'
                        hasArrow={true}
                        hasBullet={true}
                        menuPlacement='right-start'
                        menuTrigger={`{default:'click', lg: 'hover'}`}
                    >
                        <MenuItem to='/crafted/pages/wizards/horizontal' title='Horizontal' hasBullet={true} />
                        <MenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
                    </MenuInnerWithSub>
                </MenuInnerWithSub>


                <MenuInnerWithSub
                    title='Accounts'
                    to='/crafted/accounts'
                    fontIcon='bi-person'
                    hasArrow={true}
                    menuPlacement='right-start'
                    menuTrigger={`{default:'click', lg: 'hover'}`}
                >
                    <MenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
                    <MenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
                </MenuInnerWithSub>


                <MenuInnerWithSub
                    title='Errors'
                    to='/error'
                    fontIcon='bi-sticky'
                    hasArrow={true}
                    menuPlacement='right-start'
                    menuTrigger={`{default:'click', lg: 'hover'}`}
                >
                    <MenuItem to='/error/404' title='Error 404' hasBullet={true} />
                    <MenuItem to='/error/500' title='Error 500' hasBullet={true} />
                </MenuInnerWithSub>


                <MenuInnerWithSub
                    title='Widgets'
                    to='/crafted/widgets'
                    fontIcon='bi-layers'
                    hasArrow={true}
                    menuPlacement='right-start'
                    menuTrigger={`{default:'click', lg: 'hover'}`}
                >
                    <MenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
                    <MenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
                    <MenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
                    <MenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
                    <MenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
                    <MenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
                </MenuInnerWithSub>
            </MenuInnerWithSub>

            <MenuInnerWithSub title='Apps' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>

                <MenuInnerWithSub
                    title='Chat'
                    to='/apps/chat'
                    icon='message-text-2'
                    hasArrow={true}
                    menuPlacement='right-start'
                    menuTrigger={`{default:'click', lg: 'hover'}`}
                >
                    <MenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
                    <MenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
                    <MenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
                </MenuInnerWithSub>
                <MenuItem icon='abstract-28' to='/apps/user-management/users' title='User management' />
            </MenuInnerWithSub>

            <MenuInnerWithSub
                isMega={true}
                title='Mega menu'
                to='/mega-menu'
                menuPlacement='bottom-start'
                menuTrigger='click'
            >
                <MegaMenu />
            </MenuInnerWithSub> */}

            <InviteUsers
                show={show}
                setShow={setShow}
                setShowSec={setShowSec}
                initialState={initialState}
                setState={setState}
                form_={form_}
                region_={region_}
                procedure_={procedure_}
                product_={product_}
                country_={country_}
                // handleAddProduct={handleAddProduct}
                update={update}
            />

            <AddProduct
                show={showSec}
                setShow={setShowSec}
                handleAddProduct={handleAddProduct}
                setProduct_name={setProduct_name}
            />
        </>
    )
}
