/* eslint-disable jsx-a11y/anchor-is-valid */
export function Dropdown1({ handleDownload }) {
    return (
        <div className='menu menu-sub menu-sub-dropdown w-200px w-md-200px' data-kt-menu='true'>
            <div className='px-7 py-5'>
                <div className='fs-5 text-dark fw-bolder'>More Options</div>
            </div>

            <div className='separator border-gray-200'></div>

            <div className='px-7 py-5'>
                <div className='mb-10 d-flex align-items-center justify-content-between'>
                    <label className='form-label fw-bold'>Download :</label>

                    <div>
                        <button className="btn btn-light btn-sm" onClick={handleDownload}>
                            <i className="fa-solid fa-download"></i>
                        </button>
                        {/* <select
                            className='form-select form-select-solid'
                            data-kt-select2='true'
                            data-placeholder='Select option'
                            data-allow-clear='true'
                            defaultValue={'1'}
                        >
                            <option></option>
                            <option value='1'>Approved</option>
                            <option value='2'>Pending</option>
                            <option value='3'>In Process</option>
                            <option value='4'>Rejected</option>
                        </select> */}
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <label className='form-label fw-bold'>Print :</label>
                    <div>
                        <button className="btn btn-light btn-sm">
                            <i className="fa-solid fa-print"></i>
                        </button>
                    </div>
                </div>

                {/*<div className='mb-10'>
                    <label className='form-label fw-bold'>Member Type:</label>

                    <div className='d-flex'>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                            <input className='form-check-input' type='checkbox' value='1' />
                            <span className='form-check-label'>Author</span>
                        </label>

                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                            <input className='form-check-input' type='checkbox' value='2' defaultChecked={true} />
                            <span className='form-check-label'>Customer</span>
                        </label>
                    </div>
                </div>

                <div className='mb-10'>
                    <label className='form-label fw-bold'>Notifications:</label>

                    <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                        <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='notifications'
                            defaultChecked={true}
                        />
                        <label className='form-check-label'>Enabled</label>
                    </div>
                </div>

                <div className='d-flex justify-content-end'>
                    <button
                        type='reset'
                        className='btn btn-sm btn-light btn-active-light-primary me-2'
                        data-kt-menu-dismiss='true'
                    >
                        Reset
                    </button>

                    <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>
                        Apply
                    </button>
                </div> */}
            </div>
        </div>
    )
}
