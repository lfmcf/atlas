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
    // form_: { label: 'Publishing', value: 'Publishing' },
    product_family_: "",
    region_: "",
    procedure_: "",
    product_: "",
    country_: '',

};


export function MenuInner({ team_member }) {
    const intl = useIntl()
    const [show, setShow] = useState(false);
    const [showSec, setShowSec] = useState(false);
    const [showDup, setShowDup] = useState({ show: false, data: '', id: '' });
    const [update, setUpdate] = useState({ rerender: false, pName: '' })
    const [{ region_, procedure_, product_, country_, product_family_ }, setState] = useState(initialState)
    const [product_name, setProduct_name] = useState();

    const handleAddProduct = () => {
        axios.post('addproductmt',
            { 'product': product_name, 'region': region_, 'procedure': procedure_, 'product_family_': product_family_ }
        ).then(res => {
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


            <InviteUsers
                show={show}
                setShow={setShow}
                setShowSec={setShowSec}
                initialState={initialState}
                setState={setState}
                region_={region_}
                procedure_={procedure_}
                product_={product_}
                country_={country_}
                product_family_={product_family_}
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
