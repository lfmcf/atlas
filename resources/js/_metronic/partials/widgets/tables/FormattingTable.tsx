import React, { useState } from 'react'
import { KTIcon } from '../../../helpers'
import moment from 'moment';
import ReactCountryFlag from "react-country-flag"
import { router } from '@inertiajs/react';
import StatusComponent from '../../../../Components/StatusComponent';
import { DeliveryMessage } from '../../modals/Delivey-Message/DeliveryMessage';


type Props = {
    data: any[] | any;
}

const FormattingTable: React.FC<Props> = ({ data }) => {

    const [show, setShow] = useState({ 'status': false, id: '', form: '' });

    const handleDilivred = (id, form) => {
        setShow({ 'status': !show.status, id: id, form: form })
        //router.post(route('deliver'), { id: id })
    }

    const handleClose = (id) => {
        router.post(route('close'), { id: id })
    }

    const handleCorrect = (id) => {
        router.get(route('correct'), { id: id })
    }

    const handleShow = (id) => {
        router.get(route('showformatting'), { id: id })
    }

    return (
        <>
            <div className={`card mb-5`}>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Formatting List</span>
                        {/* <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 members</span> */}
                    </h3>
                    {/* <div
                        className='card-toolbar'
                        data-bs-toggle='tooltip'
                        data-bs-placement='top'
                        data-bs-trigger='hover'
                        title='Click to add a user'
                    >
                        <a
                            href='#'
                            className='btn btn-sm btn-light-primary'
                            data-bs-toggle='modal'
                            data-bs-target='#kt_modal_invite_friends'
                        >
                            <KTIcon iconName='plus' className='fs-3' />
                            New Member
                        </a>
                    </div> */}
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bold text-muted'>
                                    <th className='w-25px'>
                                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value='1'
                                                data-kt-check='true'
                                                data-kt-check-target='.widget-9-check'
                                            />
                                        </div>
                                    </th>
                                    <th className='min-w-150px'>Product</th>
                                    <th className='min-w-140px'>Country</th>
                                    <th className='min-w-140px'>Sequence</th>
                                    <th className='min-w-130px'>Status</th>
                                    <th className='min-w-130px'>Dossier type</th>
                                    <th className='min-w-130px'>Request date</th>
                                    <th className='min-w-100px text-end'>Actions</th>
                                </tr>
                            </thead>
                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                                {data ? Object.values(data).map((row: any, i) => (
                                    <tr key={i}>
                                        <td>
                                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                {/* <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/avatars/300-14.jpg')} alt='' />
                      </div> */}
                                                <div className='d-flex justify-content-start flex-column'>
                                                    <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                                                        {row.product_name ? row.product_name.value : ''}
                                                    </a>
                                                    {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
														HTML, JS, ReactJS
													</span> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                                                {row.country ? row.country.value : ''}
                                            </a>
                                            {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                                <ReactCountryFlag
                                                    className="emojiFlag"
                                                    countryCode={row.country.code}
                                                    aria-label={row.country.value}
                                                /> / {row.country ? row.country.code : ''}
                                            </span> */}
                                        </td>
                                        <td>
                                            {row.sequence}
                                        </td>

                                        <td>
                                            <StatusComponent status={row.status} />
                                        </td>
                                        <td>
                                            {row.dossier_type ? row.dossier_type.value : ''}
                                        </td>
                                        <td>
                                            {row.request_date ? moment(row.request_date).format("DD-MMM-YYYY") : ''}
                                        </td>

                                        <td>
                                            <div className='d-flex justify-content-end flex-shrink-0'>
                                                {row.status == 'initiated' ?
                                                    <a
                                                        href='#'
                                                        onClick={() => router.get(route('editOne', { id: row._id }))}
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                    >
                                                        <KTIcon iconName='pencil' className='fs-3' />
                                                    </a> : row.status == 'submitted' || row.status == 'to verify' ?
                                                        <a
                                                            href='#'
                                                            onClick={() => router.get(route('editOne', { id: row._id }))}
                                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                        >
                                                            <KTIcon iconName='pencil' className='fs-3' />
                                                        </a> : row.status == 'in progress' || row.status == 'to correct' ?
                                                            <>
                                                                <button
                                                                    onClick={() => handleShow(row._id)}
                                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                >
                                                                    <KTIcon iconName='eye' className='fs-3' />
                                                                </button>
                                                                <a
                                                                    href='#'
                                                                    onClick={() => handleDilivred(row._id, row.form)}
                                                                    data-bs-toggle='modal'
                                                                    data-bs-target='#kt_modal_delivery_message'
                                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                >
                                                                    <KTIcon iconName='check-circle' className='fs-3' />
                                                                </a>
                                                            </>
                                                            : row.status == 'delivered' ?
                                                                <>
                                                                    <button
                                                                        onClick={() => handleClose(row._id)}
                                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                    >
                                                                        <KTIcon iconName='check-circle' className='fs-3' />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleCorrect(row._id)}
                                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                    >
                                                                        <KTIcon iconName='cross-circle' className='fs-3' />
                                                                    </button>
                                                                </> : ''
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                )) : ''}
                            </tbody>
                            {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                    </div>
                    {/* end::Table container */}
                </div>
            </div>
            <DeliveryMessage show={show.status} id={show.id} form={show.form} />
        </>
    )
}

export { FormattingTable }