import React, { useEffect, useRef, useState } from 'react'
import { KTIcon } from '../../../helpers'
import moment from 'moment';
import ReactCountryFlag from "react-country-flag"
import StatusComponent from '../../../../Components/StatusComponent';
import { router } from '@inertiajs/react';
import { DeliveryMessagePub } from '../../modals/Delivey-Message/DeliveryMessagePub';
import clsx from 'clsx';
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables";

type Props = {
    data: any[] | any;
}

const PublishingTable: React.FC<Props> = ({ data }) => {

    const [show, setShow] = useState({ 'status': false, id: '', form: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [tb, setTb] = useState();
    const [pageNumbers, setpageNumbers] = useState([]);
    const [nombrePages, setnombrePages] = useState(0);
    const [pageLength, setpageLenght] = useState(10);

    const MytableRef = useRef()

    useEffect(() => {

        const table = $(MytableRef.current).DataTable({
            "info": false,
            'order': [],
            'pageLength': pageLength,
        })
        setnombrePages(table.page.info().pages);

        setTb(table)

        return function () {
            table.destroy()
        }

        // $.fn.dataTable.ext.errMode = 'none';
    }, [])

    useEffect(() => {
        let myarr = Array.from({ length: nombrePages }, (v, i) => i + 1)
        setpageNumbers(myarr)
    }, [nombrePages])

    const handleDilivred = (id, form) => {
        setShow({ 'status': !show.status, id: id, form: form })

    }

    const handleClose = (id) => {
        router.post(route('close-publishing'), { id: id })
    }
    const handleCorrect = (id) => {
        router.get(route('publishing-verification'), { id: id })
    }

    const handleShow = (id, region, procedure) => {
        if (region === 'CH') {
            router.get(route('show-publishing-nat-ch'), { id: id })
        } else if ((region == "EU" && procedure == "Mutual Recognition") || (region == "EU" && procedure == "Decentralized")) {
            router.get(route('show-publishing-rmp'), { id: id })
        } else {
            router.get(route('show'), { id: id })
        }

    }

    const handleShowNatCh = (id) => {
        router.get(route('show-publishing-nat-ch'), { id: id })
    }

    const getCountryCode = (str) => {
        let chars
        if (str === 'Swissmedic' || str == null) {
            chars = "CH"
        } else {
            let lts = str.split('-')
            chars = lts[0]
        }
        return chars

    }

    const handleCompleted = (id) => {
        router.post(route('complete-publishing'), { id: id })
    }

    const handleprevious = () => {
        let number = tb.page.info().page
        setCurrentPage(number)
        tb.page(number - 1).draw('page')
    }

    const handlenext = () => {
        let number = tb.page.info().page + 1
        console.log(number)
        setCurrentPage(number + 1)
        tb.page(number).draw('page')
    }

    const handlePageLengthChange = (e) => {
        tb.page.len(e.target.value).draw();
        setnombrePages(tb.page.info().pages);
    }

    const handleSearch = (e) => {
        tb.search(e.target.value).draw();
        setnombrePages(tb.page.info().pages);
    };

    const handleStatuschange = (e) => {
        let value = e.target.value;
        if (value === 'all') {
            value = ''
        }
        tb.column(4).search(value).draw('page');
        setnombrePages(tb.page.info().pages);
    }


    return (
        <>
            <div className={`card mb-5`}>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Publishing List</span>
                        {/* <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 members</span> */}
                    </h3>
                    <div className='card-toolbar'>
                        <div className='text-muted fs-7'>
                            Status
                        </div>
                        <select className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible'
                            onChange={handleStatuschange}>
                            <option value='all'>Show All</option>
                            <option value='initiated'>Initiated</option>
                            <option value='submitted'>Submitted</option>
                            <option value='to verify'>To verify</option>
                            <option value='delivered'>Delivered</option>
                            <option value='to correct'>To correct</option>
                            <option value='closed'>Closed</option>
                        </select>
                        <div className='text-muted fs-7'>
                            Dossier Type
                        </div>
                        <select className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible'>
                            <option>Show All</option>
                        </select>
                        <div className='d-flex align-items-center position-relative my-1'>
                            <KTIcon iconName='magnifier' className='fs-3 position-absolute ms-4' />
                            <input type="text" className='form-control form-control-solid w-250px ps-12' placeholder='Search' onChange={handleSearch} />
                        </div>
                    </div>
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4' ref={MytableRef}>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bold text-muted'>
                                    {/* <th className='w-25px'>
                                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value='1'
                                                data-kt-check='true'
                                                data-kt-check-target='.widget-9-check'
                                            />
                                        </div>
                                    </th> */}
                                    <th className='min-w-150px'>Product</th>
                                    <th className='min-w-140px'>Country</th>
                                    <th className='min-w-140px'>Sequence</th>
                                    <th className='min-w-130px'>Status</th>
                                    <th className='min-w-130px'>Dossier type</th>
                                    <th className='min-w-130px'>Request date</th>
                                    <th className='min-w-130px'>Last update</th>
                                    <th className='min-w-100px text-end'>Actions</th>
                                </tr>
                            </thead>
                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                                {data ? Object.values(data).map((row: any, i) => (
                                    <tr key={i}>
                                        {/* <td>
                                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                            </div>
                                        </td> */}
                                        <td>
                                            <span className='fs-7'>
                                                {typeof row.product_name === 'object' && row.product_name ?
                                                    row.product_name.value : row.product_name}
                                            </span>
                                        </td>
                                        <td>
                                            {row.procedure == 'Mutual Recognition' || row.procedure == 'Decentralized' ?
                                                <>
                                                    <ReactCountryFlag
                                                        countryCode="EU"
                                                        aria-label="Europe"
                                                        title="Europe"
                                                        svg
                                                        style={{
                                                            width: '1.5em',
                                                            height: '1.5em',
                                                        }}
                                                    />
                                                </> :
                                                typeof row.country === 'object' && row.country ?
                                                    <>
                                                        <ReactCountryFlag
                                                            countryCode={row.country.code}
                                                            aria-label={row.country.value}
                                                            title={row.country.value}
                                                            svg
                                                            style={{
                                                                width: '1.5em',
                                                                height: '1.5em',
                                                            }}
                                                        />
                                                    </> :
                                                    <ReactCountryFlag
                                                        countryCode={getCountryCode(row.agency_code)}
                                                        aria-label={row.country}
                                                        title={row.country}
                                                        svg
                                                        style={{
                                                            width: '1.5em',
                                                            height: '1.5em',
                                                        }}
                                                    />}
                                        </td>
                                        <td>
                                            <span className='fs-7'>
                                                {row.sequence}
                                            </span>
                                        </td>

                                        <td>
                                            <StatusComponent status={row.status} />
                                        </td>
                                        <td>
                                            <span className='fs-7'>
                                                {row.dossier_type ? row.dossier_type.value : ''}
                                            </span>
                                        </td>
                                        <td>
                                            <span className='fs-7'>
                                                {row.request_date ? moment(row.request_date).format("DD-MMM-YYYY") : ''}
                                            </span>
                                        </td>
                                        <td>
                                            <span className='fs-7'>
                                                {row.request_date ? moment(row.updated_at).format("DD-MMM-YYYY") : ''}
                                            </span>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-end flex-shrink-0'>
                                                {row.status == 'draft' ?
                                                    <a

                                                        onClick={() => router.get(route('publishing-initiate', { id: row._id }))}
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                    >
                                                        <KTIcon iconName='pencil' className='fs-3' />
                                                    </a>

                                                    :
                                                    row.status == 'initiated' ?
                                                        <a
                                                            href='#'
                                                            onClick={() => router.get(route('publishing-confirm', { id: row._id }))}
                                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                        >
                                                            <KTIcon iconName='pencil' className='fs-3' />
                                                        </a> : row.status == 'submitted' ?
                                                            <>
                                                                <a
                                                                    href='#'
                                                                    onClick={() => router.post(route('progress-publishing', { id: row._id }))}
                                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                >
                                                                    <KTIcon iconName='check-circle' className='fs-3' />
                                                                </a>
                                                                <a
                                                                    href='#'
                                                                    onClick={() => router.get(route('publishing-audit', { id: row._id }))}
                                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                >
                                                                    <KTIcon iconName='pencil' className='fs-3' />
                                                                </a>
                                                            </> : row.status == 'to verify' ?
                                                                <>

                                                                    {/* <a
                                                                        href='#'
                                                                        onClick={() => router.post(route('confirm-publishing-out', { id: row._id }))}
                                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                    >
                                                                        <KTIcon iconName='check-circle' className='fs-3' />
                                                                    </a> */}
                                                                    <a
                                                                        href='#'
                                                                        onClick={() => router.get(route('publishing-audit', { id: row._id }))}
                                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                    >
                                                                        <KTIcon iconName='eye' className='fs-3' />
                                                                    </a>
                                                                </>
                                                                : row.status == 'in progress' || row.status == 'to correct' ?
                                                                    <>
                                                                        <button
                                                                            onClick={() => handleShow(row._id, row.region, row.procedure)}
                                                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                        >
                                                                            <KTIcon iconName='eye' className='fs-3' />
                                                                        </button>
                                                                        <a
                                                                            href='#'
                                                                            onClick={() => handleDilivred(row._id, row.form)}
                                                                            data-bs-toggle='modal'
                                                                            data-bs-target='#kt_modal_delivery_message_pub'
                                                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                        >
                                                                            <KTIcon iconName='check-circle' className='fs-3' />
                                                                        </a>
                                                                    </>

                                                                    : row.status == 'delivered' && row.region ?
                                                                        <>
                                                                            <button
                                                                                onClick={() => handleCompleted(row._id)}
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
                                                                        </>

                                                                        : row.status == 'completed' ?
                                                                            <button
                                                                                onClick={() => handleClose(row._id)}
                                                                                className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                            >
                                                                                <KTIcon iconName='check-circle' className='fs-3' />
                                                                            </button>
                                                                            : ''
                                                }

                                            </div>
                                        </td>
                                    </tr>
                                )) : ''}
                            </tbody>
                            {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                        <div className="row paginate_row">
                            <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                                <div className="dataTables_length" id="kt_profile_overview_table_length">
                                    <label>
                                        <select name="kt_profile_overview_table_length" aria-controls="kt_profile_overview_table" className="form-select form-select-sm form-select-solid" onChange={handlePageLengthChange}>
                                            <option value="5">5</option>
                                            <option value="10" selected>10</option>
                                            <option value="15">15</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                                <div className="dataTables_paginate paging_simple_numbers" id="kt_profile_overview_table_paginate">
                                    <ul className="pagination">
                                        <li className={clsx("paginate_button page-item previous", currentPage === 1 ? 'disabled' : '')} id="kt_profile_overview_table_previous">
                                            <a href="#" aria-controls="kt_profile_overview_table" className="page-link" onClick={handleprevious}>
                                                <i className="previous"></i></a>
                                        </li>
                                        {/* <li className="paginate_button page-item active"><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
										</li><li className="paginate_button page-item "><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="2" tabIndex="0" className="page-link">2</a></li>
										<li className="paginate_button page-item "><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="3" tabIndex="0" className="page-link">3</a></li> */}
                                        {
                                            pageNumbers.map(number => (

                                                <li key={number} className={currentPage === number ? 'page-item active' : 'paginate_button page-item'}>
                                                    <button onClick={() => pagination(number)} className="page-link"> {number} </button>
                                                </li>
                                            ))
                                        }
                                        <li className={clsx('paginate_button page-item next', currentPage === nombrePages ? 'disabled' : '')} id="kt_profile_overview_table_next">
                                            <a href="#" aria-controls="kt_profile_overview_table" className="page-link" onClick={handlenext}>
                                                <i className="next"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* end::Table container */}
                </div>
            </div>
            <DeliveryMessagePub show={show.status} id={show.id} form={show.form} />
        </>
    )
}

export { PublishingTable }