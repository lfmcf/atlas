/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from 'react'
import { KTIcon } from '../../../helpers'
import moment from 'moment';
import ReactCountryFlag from "react-country-flag"
import StatusComponent from '../../../../Components/StatusComponent';
import DataTable from 'datatables.net-bs5';
import Select from 'react-select';
import { router } from '@inertiajs/react';
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables";
import clsx from 'clsx';


type Props = {
	// className: string
	data: any[] | any;
	user: any
}



const TablesWidget9: React.FC<Props> = (props) => {

	const { data } = props

	const [currentPage, setCurrentPage] = useState(1);
	const [tb, setTb] = useState();
	const [loading, setloading] = useState(true);

	// let tb = ''
	useEffect(() => {

		if (!$.fn.DataTable.isDataTable("#myTable")) {
			$(document).ready(function () {
				var datatable = new DataTable('#lisTable', {
					"info": false,
					'order': [],
					'pageLength': 15,
				})

				setTb(datatable)
			})

		}
		console.log('render1')

		$.fn.dataTable.ext.errMode = 'none';
	}, [])

	const handleSearch = (e) => {
		tb.search(e.target.value).draw();
	};

	const handleStatuschange = (e) => {
		let value = e.value;
		if (value === 'All') {
			value = '';
		}
		tb.column(3).search(value).draw();
	}



	// useEffect(() => {
	// 	if (!search) return currentPosts;

	// 	var newD = Object.keys(data).filter((id) => {
	// 		var pn = typeof data[id].product_name == 'object' ? data[id].product_name.value : data[id].product_name

	// 		if (pn.toLowerCase().includes(search.toLowerCase())) {
	// 			return (pn.toLowerCase().includes(search.toLowerCase()));
	// 		}

	// 	});



	// }, [search, data]);

	const ShowData = () => {
		return (
			<tbody>
				{currentPosts ? Object.values(currentPosts).map((row: any, i) => (
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
								</> : row.country}
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
		)

	}

	const pageNumbers = [];
	var nombrePages;

	if (tb) {

		nombrePages = tb.page.info().pages;
		for (let i: number = 1; i <= nombrePages; i++) {
			pageNumbers.push(i)
		}
	}

	const pagination = (number) => {
		console.log(number)
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

	const getCountryCode = (str) => {
		let chars = str.split('-')
		return chars[0]
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
							<KTIcon iconName='magnifier' className='fs-3 position-absolute ms-4' />
							<input type="text" className='form-control form-control-solid w-250px ps-12' placeholder='Search' onChange={handleSearch} />
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
						<div className='w-100 mw-150px'>
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
						</div>
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
					</div>
				</div>
				{/* end::Header */}
				{/* begin::Body */}
				<div className='card-body py-3'>
					{/* begin::Table container */}
					<div className='table-responsive'>
						{/* begin::Table */}
						<table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4' id='lisTable'>
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
										<td>
											<span className='fs-7'>

												{typeof row.product_name === 'object' && row.product_name ?
													<a href='#' onClick={() => router.get('show-formatting', { id: row._id })} className='text-dark fw-bold text-hover-primary fs-6'>
														{row.product_name.value}
													</a>
													: row.product_name}

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
					</div>
					{/* end::Table container */}
				</div>
				<div className='card-footer'>
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
				</div>

				{/* begin::Body */}
			</div>
		</>
	)
}

export { TablesWidget9 }
