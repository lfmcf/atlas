import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { KTIcon } from '../../../helpers'
import $ from 'jquery'
type Props = {
	// data: { location: string; setLocation: Dispatch<SetStateAction<string>> }
	// show: boolean
	// handleClose: () => void
}

const SelectLocationModal: React.FC<Props> = () => {
	useEffect(() => {
		initMap()
		$(document).on('show.bs.modal', '.modal', function () {
			const zIndex = 1040 + 10 * $('.modal:visible').length;
			$(this).css('z-index', zIndex);
			setTimeout(() => $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack'));
		});
	}, [])

	// const [location, setLocation] = useState(data.location)
	// const dissmissLocation = () => {
	// 	setLocation(data.location)
	// 	handleClose()
	// }
	// const applyLocation = () => {
	// 	data.setLocation(location)
	// 	handleClose()
	// }
	const initMap = () => { }

	return (
		<Modal
			className='modal fade'
			id='kt_modal_select_location'

			tabIndex={-1}
			role='dialog'
			// show={show}
			dialogClassName='modal-xl'
			aria-hidden='true'

		// onHide={dissmissLocation}
		>
			<div className='modal-content'>
				<div className='modal-header'>
					<h5 className='modal-title'>Select Location</h5>

					<div
						className='btn btn-icon btn-sm btn-active-light-primary ms-2'

					>
						<KTIcon iconName='cross' className='fs-2x' />
					</div>
				</div>
				<div className='modal-body'>
					<input type='text' />
					<div id='kt_modal_select_location_map' className='map h-450px'></div>
				</div>
				<div className='modal-footer'>
					<button type='button' className='btn btn-light-primary' >
						Cancel
					</button>
					<button id='submit' type='button' className='btn btn-primary' >
						Apply
					</button>
				</div>
			</div>
		</Modal>
	)
}

export { SelectLocationModal }
