/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon } from '../../../helpers'
import moment from 'moment';
import ReactCountryFlag from "react-country-flag"
import StatusComponent from '../../../../Components/StatusComponent';
import { isObject } from 'chart.js/dist/helpers/helpers.core';

type Props = {
	// className: string
	data: any[] | any;
	user: any
}

const TablesWidget9: React.FC<Props> = (props) => {

	return (
		<>
			<div className={`card mb-5`}>
				{/* begin::Header */}
				<div className='card-header border-0 pt-5'>
					<h3 className='card-title align-items-start flex-column'>
						<span className='card-label fw-bold fs-3 mb-1'>Formatting & Publishing List</span>
						{/* <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 members</span> */}
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
								Add New Record
							</a>
						</div> : ''}
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
									{/* <th className='min-w-100px text-end'>Actions</th> */}
								</tr>
							</thead>
							{/* end::Table head */}
							{/* begin::Table body */}
							<tbody>
								{props.data ? Object.values(props.data).map((row: any, i) => (
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
														{typeof row.product_name === 'object' && row.product_name ?
															row.product_name.value : row.product_name}
													</a>
													{/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
														HTML, JS, ReactJS
													</span> */}
												</div>
											</div>
										</td>
										<td>
											{/* <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'> */}
											{typeof row.country === 'object' && row.country ?
												<><ReactCountryFlag countryCode={row.country.code}

													aria-label={row.country.value} /> </> : row.country}
											{/* </a> */}
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
							{/* end::Table body */}
						</table>
						{/* end::Table */}
					</div>
					{/* end::Table container */}
				</div>
				{/* begin::Body */}
			</div>
		</>
	)
}

export { TablesWidget9 }
