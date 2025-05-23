import React, { useEffect, useRef, useState } from 'react'
import { KTIcon, KTSVG } from '../../../helpers'
import moment from 'moment';
import ReactCountryFlag from "react-country-flag"
import { router } from '@inertiajs/react';
import StatusComponent from '../../../../Components/StatusComponent';
import { DeliveryMessage } from '../../modals/Delivey-Message/DeliveryMessage';
import clsx from 'clsx';
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

type Props = {
    data: any[] | any;
    handleconsultdate: (row: any) => void

}

const FormattingTable: React.FC<Props> = ({ data, handleconsultdate }) => {

    const [showF, setShowF] = useState({ 'status': false, id: '', form: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [tb, setTb] = useState();
    const [pageNumbers, setpageNumbers] = useState([]);
    const [nombrePages, setnombrePages] = useState(0);
    const [pageLength, setpageLenght] = useState(10);
    // const [showDate, setShowDate] = useState({ 'status': false, requestDate: '', deliveryDeadline: '', adjustedDeadline: '' });

    const tableRef = useRef()

    useEffect(() => {

        const table = $(tableRef.current).DataTable({
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

        setShowF({ 'status': !showF.status, id: id, form: form })
        //router.post(route('deliver'), { id: id })
    }

    const handleClose = (id) => {
        MySwal.fire({
            title: 'Click on "Yes" to close the request or click on "No, return"  to return to the list.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, proceed!',
            cancelButtonText: 'No, return',
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route('close-formatting'), { id: id })
            }
        })

    }

    const handleAccept = (id) => {
        MySwal.fire({
            title: 'Click on "Yes" to accept the request or click on "No, return"  to return to the list.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, proceed!',
            cancelButtonText: 'No, return',
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route('accept-formatting'), { id: id })
            }
        })

    }

    const handleCorrect = (id) => {
        router.get(route('formatting-verification'), { id: id })
    }

    const handleShow = (id) => {
        router.get(route('show-formatting'), { id: id })
    }

    const handleSubmitted = (id) => {
        MySwal.fire({
            title: 'Click on "Yes" to ACK the request or click on "No, return"  to return to the list.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, proceed!',
            cancelButtonText: 'No, return',
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route('progress-formatting', { id: id }))
            }
        })

    }

    const handleCompleted = (id) => {
        MySwal.fire({
            title: 'Click on "Yes" to complete the request or click on "No, return"  to return to the list.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, proceed!',
            cancelButtonText: 'No, return',
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route('complete-formatting'), { id: id })
            }
        })
    }

    const handleprevious = () => {
        let number = tb.page.info().page
        setCurrentPage(number)
        tb.page(number - 1).draw('page')
    }

    const handlenext = () => {
        let number = tb.page.info().page + 1
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

        tb.column(3).search(value).draw('page');
        setnombrePages(tb.page.info().pages);
    }

    const pagination = (number) => {

        setCurrentPage(number)
        tb.page(number - 1).draw('page')
    }

    // const handleconsultdate = (row) => {
    //     setShowDate({ 'status': !showDate.status, requestDate: row.request_date, deliveryDeadline: row.delivery_deadline, adjustedDeadline: row.adjusted_deadline })
    // }


    return (
        <>
            <div className="table-responsive">
                {/* Filters row (full width) */}
                <div className="d-flex align-items-center justify-content-between gap-4 mb-5">
                    {/* <h6 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Formatting List</span>

                    </h6> */}
                    <div className="d-flex align-items-center gap-4">
                        <div className="d-flex align-items-center">
                            <span className="text-muted fs-7 me-2">Status</span>
                            <select
                                className="form-select form-select-sm form-select-solid w-150px"
                                onChange={handleStatuschange}
                            >
                                <option value="all">Show All</option>
                                <option value="initiated">Initiated</option>
                                <option value="submitted">Submitted</option>
                                <option value="to verify">To verify</option>
                                <option value="in progress">In progress</option>
                                <option value="delivered">Delivered</option>
                                <option value="to correct">To correct</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>

                        <div className="d-flex align-items-center">
                            <span className="text-muted fs-7 me-2">Dossier Type</span>
                            <select className="form-select form-select-sm form-select-solid w-150px">
                                <option>Show All</option>
                            </select>
                        </div>
                    </div>

                    {/* Search bar (right-aligned) */}
                    <div className="d-flex align-items-center position-relative">
                        <KTIcon iconName="magnifier" className="fs-3 position-absolute ms-3" />
                        <input
                            type="text"
                            className="form-control form-control-sm form-control-solid w-250px ps-10"
                            placeholder="Search..."
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                {/* Table (full width) */}
                <div className="table-container">
                    <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4' ref={tableRef}>
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

                                    <td>
                                        <span className='fs-7'>
                                            {row.product_name ? row.product_name.value : ''}
                                        </span>

                                    </td>
                                    <td>
                                        {row.country ?
                                            <ReactCountryFlag
                                                countryCode={row.country.code}
                                                aria-label={row.country.value}
                                                title={row.country.value}
                                                svg
                                                style={{
                                                    width: '1.5em',
                                                    height: '1.5em',
                                                }}
                                            /> : ''}
                                    </td>
                                    <td>
                                        <span className='fs-7'>
                                            NA
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
                                            <a
                                                href='#'
                                                onClick={() => handleconsultdate(row)}
                                                data-bs-toggle='modal'
                                                data-bs-target='#kt_modal_date_consultation'
                                                className='btn btn-icon btn-sm me-1'
                                                title='Consulte request dates'
                                            >
                                                <i className="bi bi-calendar-check text-info fs-5"></i>

                                            </a>
                                            <a
                                                href='#'
                                                className='btn btn-icon btn-sm me-1 bg-light'
                                                onClick={() => router.get('show-formatting', { id: row._id })}
                                                title='View the request'
                                            >
                                                <i className="bi bi-eye-fill text-info fs-5"></i>

                                            </a>
                                            {row.status == 'draft' ?
                                                <a
                                                    href='#'
                                                    onClick={() => router.get(route('formatting-initiate', { id: row._id }))}
                                                    className='btn btn-icon btn-sm me-1'
                                                    title='Update and Submit the form'
                                                    style={{ backgroundColor: '#f8f5ff' }}
                                                >
                                                    <i className="bi bi-pencil-fill text-info fs-5"></i>
                                                    {/* <KTIcon iconName='pencil' className='fs-3' /> */}

                                                </a>
                                                : row.status == 'initiated' ?
                                                    <a
                                                        href='#'
                                                        onClick={() => router.get(route('formatting-confirm', { id: row._id }))}
                                                        className='btn btn-icon btn-sm me-1'
                                                        style={{ backgroundColor: '#fff8dd' }}
                                                    >
                                                        <i className="bi bi-pencil-fill text-warning fs-5"></i>
                                                        {/* <KTIcon iconName='pencil' className='fs-3' /> */}
                                                    </a> : row.status == 'submitted' ?
                                                        <>

                                                            <a
                                                                href='#'
                                                                onClick={() => handleSubmitted(row._id)}
                                                                className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                style={{ backgroundColor: '#e8fff3' }}
                                                            >
                                                                <i className="bi bi-check text-success fs-5"></i>
                                                                {/* <KTIcon iconName='check-circle' className='fs-3' /> */}
                                                            </a>
                                                            <a
                                                                href='#'
                                                                onClick={() => router.get(route('formatting-audit', { id: row._id }))}
                                                                className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                style={{ backgroundColor: '#fff8dd' }}
                                                            >
                                                                <i className="bi bi-pencil-fill text-warning fs-5"></i>
                                                                {/* <KTIcon iconName='pencil' className='fs-3' /> */}
                                                            </a>
                                                        </>
                                                        : row.status == 'to verify' ?
                                                            <>
                                                                <a
                                                                    href='#'
                                                                    onClick={() => router.get(route('formatting-audit', { id: row._id }))}
                                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                    style={{ backgroundColor: '#fff5f8' }}
                                                                >
                                                                    <i className="bi bi-eye text-danger fs-5"></i>
                                                                </a>
                                                            </>
                                                            : row.status == 'in progress' || row.status == 'to correct' ?
                                                                <>
                                                                    <button
                                                                        onClick={() => handleShow(row._id)}
                                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                                        style={{ backgroundColor: '#ffc700' }}
                                                                    >
                                                                        <i className="bi bi-eye text-white fs-5"></i>
                                                                        {/* <KTIcon iconName='eye' className='fs-3' /> */}
                                                                    </button>
                                                                    <a
                                                                        href='#'
                                                                        onClick={() => handleDilivred(row._id, row.form)}
                                                                        data-bs-toggle='modal'
                                                                        data-bs-target='#kt_modal_delivery_message'
                                                                        className='btn btn-icon btn-bg-success btn-active-color-primary btn-sm me-1'
                                                                    >
                                                                        <i className="bi bi-check text-white fs-5"></i>
                                                                    </a>
                                                                </>
                                                                : row.status == 'delivered' ?
                                                                    <>
                                                                        <button
                                                                            onClick={() => handleCompleted(row._id)}
                                                                            className='btn btn-icon btn-sm me-1'
                                                                            style={{ backgroundColor: '#d1f7c4' }}
                                                                        >
                                                                            <i className="bi bi-check text-success fs-5"></i>
                                                                            {/* <KTIcon iconName='check-circle' className='fs-3 ' /> */}
                                                                        </button>
                                                                        <button
                                                                            onClick={() => handleCorrect(row._id)}
                                                                            className='btn btn-icon btn-sm me-1'
                                                                            style={{ backgroundColor: '#f8d7da' }}
                                                                        >
                                                                            <i className="bi bi-x text-danger fs-5"></i>
                                                                            {/* <KTIcon iconName='cross-circle' className='fs-3' /> */}
                                                                        </button>
                                                                    </>
                                                                    : row.status == 'completed' ?
                                                                        <>
                                                                            <button
                                                                                onClick={() => handleAccept(row._id)}
                                                                                className='btn btn-icon btn-sm me-1'
                                                                                style={{ backgroundColor: '#d1f7c4' }}
                                                                            >
                                                                                <i className="bi bi-check text-success fs-5"></i>
                                                                            </button>
                                                                            <button
                                                                                onClick={() => handleCorrect(row._id)}
                                                                                className='btn btn-icon btn-sm me-1'
                                                                                style={{ backgroundColor: '#f8d7da' }}
                                                                            >
                                                                                <i className="bi bi-x text-danger fs-5"></i>
                                                                            </button>
                                                                        </>
                                                                        : row.status == 'accepted' ?
                                                                            <button
                                                                                onClick={() => handleClose(row._id)}
                                                                                className='btn btn-icon btn-sm me-1'
                                                                                style={{ backgroundColor: '#d1f7c4' }}
                                                                            >
                                                                                <i className="bi bi-check text-success fs-5"></i>
                                                                            </button> :
                                                                            row.status == 'Correction Required' ?
                                                                                <button onClick={() => handleCorrect(row._id)} className='btn btn-icon btn-sm me-1' style={{ backgroundColor: '#f8d7da' }}>
                                                                                    <i className="bi bi-x text-danger fs-5"></i>
                                                                                </button> :
                                                                                ''
                                            }
                                        </div>
                                    </td>
                                </tr>
                            )) : ''}
                        </tbody>
                        {/* end::Table body */}
                    </table>
                </div>
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
                <DeliveryMessage show={showF.status} id={showF.id} form={showF.form} />

            </div>

        </>
    )
}

export { FormattingTable }