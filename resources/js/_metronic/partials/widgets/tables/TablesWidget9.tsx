/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import moment from 'moment';
import ReactCountryFlag from "react-country-flag"
import StatusComponent from '../../../../Components/StatusComponent';
import { router } from '@inertiajs/react';
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables";
import clsx from 'clsx';
import { Dropdown1 } from '../../content/dropdown/Dropdown1';
import { writeFileXLSX } from "xlsx";
import XLSX from 'xlsx';
import { InviteUsers } from '../../modals/invite-users/InviteUsers';
import AddProduct from '../../modals/add-product/addProduct';
import axios from 'axios';

type Props = {
	// className: string
	data: any[] | any;
	user: any
}

const initialState = {
	form_: { label: 'Publishing', value: 'Publishing' },
	region_: "",
	procedure_: "",
	product_: "",
	country_: ''
};

const TablesWidget9: React.FC<Props> = (props) => {

	const { data } = props

	const [{ form_, region_, procedure_, product_, country_ }, setState] = useState(initialState)

	const [currentPage, setCurrentPage] = useState(1);
	const [tb, setTb] = useState();
	const [pageNumbers, setpageNumbers] = useState([]);
	const [nombrePages, setnombrePages] = useState(0);
	const [pageLength, setpageLenght] = useState(10);
	const [show, setShow] = useState(false)
	const [showSec, setShowSec] = useState(false)
	const [product_name, setProduct_name] = useState();
	const [update, setUpdate] = useState(false)
	const tableRef = useRef()

	useEffect(() => {

		const table = $(tableRef.current).DataTable({
			"info": false,
			'order': [],
			'pageLength': pageLength,
			dom: 'Bfrtip',
			buttons: [
				'copy', 'excel', 'pdf'
			]
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

	const handleRtypechange = (e) => {
		let value = e.target.value;
		if (value === 'all') {
			value = ''
		}
		//console.log(tb.columns())
		tb.column(0).search(value).draw('page');
		setnombrePages(tb.page.info().pages);
	}

	const handleDownload = async () => {

		const dataToExport = data.map(row => ({
			product: row.product_name && typeof row.product_name === 'object' ? row.product_name.value : row.product_name,
			country: row.country && typeof row.country === 'object' ? row.country.value : row.country,
			sequence: row.sequence ? row.sequence : 'NA',
			status: row.status,
			dossier_type: row.dossier_type ? row.dossier_type.value : '',
			request_date: row.request_date ? moment(row.request_date).format("DD-MMM-YYYY") : '',
			last_update: row.updated_at ? moment(row.updated_at).format("DD-MMM-YYYY") : ''
		}));

		const worksheet = XLSX.utils.json_to_sheet(dataToExport);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
		writeFileXLSX(workbook, "SheetJSReactExport.xlsx");
	}

	const pagination = (number) => {

		setCurrentPage(number)
		tb.page(number - 1).draw('page')
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

	const getCountryCode = (str) => {
		let chars
		if (str === 'Swissmedic' || !str) {
			chars = "CH"
		} else {
			let lts = str.split('-')
			chars = lts[0]
		}
		return chars

	}
	const handleAddProduct = () => {
		axios.post('addproductmt', { 'product': product_name, 'region': region_, 'procedure': procedure_ }).then(res => {
			if (res.status == 200) {
				setUpdate(true)
			}
		})
	}

	return (
		<>
			<div className={`card mb-5`}>
				<div className='card-header align-items-center py-5 gap-2 gap-md-5'>
					<div className='card-title'>
						<div className='d-flex align-items-center position-relative my-1'>
							<div className='text-muted fs-7'>
								Request Type
							</div>
							<select className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible'
								onChange={handleRtypechange}>
								<option value='all'>Show All</option>
								<option>Formatting</option>
								<option>Publishing</option>
							</select>
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

						</div>
					</div>
					<div className='card-toolbar flex-row-fluid justify-content-end gap-5'>

						<div className='d-flex align-items-center position-relative my-1'>


							<KTIcon iconName='magnifier' className='fs-3 position-absolute ms-4' />
							<input type="text" className='form-control form-control-solid w-250px ps-12' placeholder='Search' onChange={handleSearch} />
						</div>

						{props.user.current_team_id !== 3 ?
							<a
								href='#'
								className='btn btn-sm btn-light-primary'
								// data-bs-toggle='modal'
								// data-bs-target='#kt_modal_invite_friends'
								onClick={() => setShow(true)}
							>
								<KTIcon iconName='plus' className='fs-3' />
								New Request
							</a> : ''}
						<button className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
							type='button'
							data-kt-menu-trigger='click'
							data-kt-menu-placement='bottom-end'
							data-kt-menu-flip='top-end'>
							<img src={toAbsoluteUrl("/media/icons/duotune/general/gen053.svg")} />
						</button>
						<Dropdown1 handleDownload={handleDownload} content={tableRef} />
					</div>
				</div>
				{/* end::Header */}
				{/* begin::Body */}
				<div className='card-body py-3'>
					{/* begin::Table container */}
					<div className='table-responsive'>
						{/* begin::Table */}
						<table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4' id='lisTable' ref={tableRef}>
							{/* begin::Table head */}
							<thead>
								<tr className='fw-bold text-muted'>
									<th className='min-w-150px' style={{ display: 'none' }}>Form</th>
									<th className='min-w-150px'>Product</th>
									<th className='min-w-140px'>Country</th>
									<th className='min-w-140px'>Sequence</th>
									<th className='min-w-130px'>Status</th>
									<th className='min-w-130px'>Dossier type</th>
									<th className='min-w-130px'>Request date</th>
									<th className='min-w-130px'>Last update</th>

								</tr>
							</thead>
							<tbody>
								{data ? Object.values(data).map((row: any, i) => (
									<tr key={i}>
										<td style={{ display: 'none' }}>{row.form}</td>
										<td>
											<span className='fs-7'>

												{typeof row.product_name === 'object' && row.product_name ?
													<a href='#' onClick={() => router.get('show-formatting', { id: row._id })} className='text-dark text-hover-primary fs-6'>
														{row.product_name.value}
													</a>
													: row.procedure == "Decentralized" || row.procedure == "Mutual Recognition" ?
														<a href='#' onClick={() => router.get('show-publishing-rmp', { id: row._id })} className='text-dark text-hover-primary fs-6'>
															{row.product_name}
														</a>
														: row.form == "Publishing" && row.region == "CH" ?
															<a href='#' onClick={() => router.get('show-publishing-nat-ch', { id: row._id })} className='text-dark text-hover-primary fs-6'>
																{row.product_name}
															</a>
															: <a href='#' onClick={() => router.get('show-publishing', { id: row._id })} className='text-dark text-hover-primary fs-6'>
																{row.product_name}
															</a>}

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
													</> : <ReactCountryFlag
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
												{row.sequence ? row.sequence : 'NA'}
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
												{row.updated_at ? moment(row.updated_at).format("DD-MMM-YYYY") : ''}
											</span>
										</td>
									</tr>
								)) : ''}
							</tbody>

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

export { TablesWidget9 }
