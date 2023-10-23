/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import moment from 'moment';
import ReactCountryFlag from "react-country-flag"
import StatusComponent from '../../../../Components/StatusComponent';
//import DataTable from 'datatables.net-bs5';
import Select from 'react-select';
import { router } from '@inertiajs/react';
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables";
import clsx from 'clsx';
import { Dropdown1 } from '../../content/dropdown/Dropdown1';
// import Select2 from 'react-select2/node_modules/react-select2-wrapper'


type Props = {
	// className: string
	data: any[] | any;
	user: any
}



const TablesWidget9: React.FC<Props> = (props) => {

	const { data } = props

	const [currentPage, setCurrentPage] = useState(1);
	const [tb, setTb] = useState();
	const [pageNumbers, setpageNumbers] = useState([]);
	const [nombrePages, setnombrePages] = useState(0);
	const [pageLength, setpageLenght] = useState(10);

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

	const handleDownload = () => {
		console.log('click');

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




	return (
		<>
			<div className={`card mb-5`}>
				{/* begin::Header */}
				{/* <div className='card-header border-0 pt-5'>
					<h3 className='card-title align-items-start flex-column'>
						<span className='card-label fw-bold fs-3 mb-1'>Formatting & Publishing List</span>
						
					</h3>
					{props.user.current_team_id !== 3 ?
						<div
							className='card-toolbar'
							data-bs-toggle='tooltip'
							data-bs-placement='top'
							data-bs-trigger='hover'
							title='Click to add a record'
						>
							<a
								href='#'
								className='btn btn-sm btn-light-primary'
								data-bs-toggle='modal'
								data-bs-target='#kt_modal_invite_friends'
							>
								<KTIcon iconName='plus' className='fs-3' />
								Add New Request
							</a>
						</div> : ''}
				</div> */}
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
							<div className='text-muted fs-7'>
								Dossier Type
							</div>
							<select className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible'>
								<option>Show All</option>
							</select>

							{/* <Select /> */}

						</div>
					</div>
					<div className='card-toolbar flex-row-fluid justify-content-end gap-5'>
						{/* <div className='w-100 mw-50px'>
							<button className="btn btn-sm btn-light">
								<KTIcon iconName='printer' className='fs-3' />
							</button>
						</div>
						<div className='w-100 mw-50px'>
							<button className="btn btn-sm btn-light">
								<KTIcon iconName='arrow-down' className='fs-3' />
							</button>
						</div> */}
						<div className='d-flex align-items-center position-relative my-1'>


							<KTIcon iconName='magnifier' className='fs-3 position-absolute ms-4' />
							<input type="text" className='form-control form-control-solid w-250px ps-12' placeholder='Search' onChange={handleSearch} />
						</div>
						{/* <div className='w-100 mw-150px'>
							<Select options={[
								{ label: 'All', value: 'All' },
								{ label: 'Initiated', value: 'Initiated' },
								{ label: 'Submitted', value: 'Submitted' },
								{ label: 'To verify', value: 'To verify' },
								{ label: 'Delivered', value: 'Delivered' },
								{ label: 'To correct', value: 'To correct' },
								{ label: 'Closed', value: 'Closed' },
							]}
								placeholder='All Forms'
								onChange={handleStatuschange}
								menuPortalTarget={document.body}
								styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
								isClearable
							/>
						</div> */}
						{props.user.current_team_id !== 3 ?
							<a
								href='#'
								className='btn btn-sm btn-light-primary'
								data-bs-toggle='modal'
								data-bs-target='#kt_modal_invite_friends'
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
						<Dropdown1 handleDownload={handleDownload} />
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
									<th className='min-w-150px' style={{ display: 'none' }}>Form</th>
									<th className='min-w-150px'>Product</th>
									<th className='min-w-140px'>Country</th>
									<th className='min-w-140px'>Sequence</th>
									<th className='min-w-130px'>Status</th>
									<th className='min-w-130px'>Dossier type</th>
									<th className='min-w-130px'>Request date</th>
									<th className='min-w-130px'>Last update</th>
									{/* <th className='min-w-100px text-end'>Actions</th> */}
								</tr>
							</thead>

							{/* <ShowData /> */}
							<tbody>
								{data ? Object.values(data).map((row: any, i) => (
									<tr key={i}>
										{/* <td>
								<div className='form-check form-check-sm form-check-custom form-check-solid'>
									<input className='form-check-input widget-9-check' type='checkbox' value='1' />
								</div>
							</td> */}
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

											{/* <a href='#' className='text-dark fw-bold text-hover-primary fs-6'></a> */}
										</td>
										<td>

											{typeof row.country === 'object' && row.country ?
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

										{/* <td>
								<div className='d-flex justify-content-end flex-shrink-0'>
									
									<a
										href='#'
										className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
									>
										<KTIcon iconName='pencil' className='fs-3' />
									</a>
									<a
										href='#'
										className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
									>
										<KTIcon iconName='trash' className='fs-3' />
									</a>
								</div>
							</td> */}
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
				{/* <div className='card-footer'>
					<div className='row'>
						<div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'>

						</div>
						<div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
							<ul className="pagination">
								<li className={clsx("paginate_button page-item previous", currentPage === 1 ? 'disabled' : '')} >
									<a className='page-link' onClick={handleprevious}>
										<i className="bi bi-chevron-left"></i>
									</a>
								</li>
								{
									pageNumbers.map(number => (

										<li key={number} className={currentPage === number ? 'page-item active' : 'page-item'}>
											<button onClick={() => pagination(number)} className="page-link"> {number} </button>
										</li>
									))
								}
								<li className={clsx('paginate_button page-item next', currentPage === nombrePages ? 'disabled' : '')} >
									<a className='page-link' onClick={handlenext}>
										<i className="bi bi-chevron-right"></i>
									</a>
								</li>
							</ul >
						</div>

					</div>
				</div> */}

				{/* begin::Body */}
			</div>
		</>
	)
}

export { TablesWidget9 }
