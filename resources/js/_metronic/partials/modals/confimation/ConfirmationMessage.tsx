import clsx from "clsx"
import { KTIcon } from "../../../helpers"
const ConfirmationMessage = (props) => {


    return (
        <div className={clsx('modal fade', props.show ? 'show' : '')} id='kt_modal_delivery_message' aria-hidden='true' style={{ display: props.show ? 'block' : 'none' }}>
            <div className='modal-dialog mw-650px'>
                <div className='modal-content'>
                    <div className='modal-header pb-0 border-0 justify-content-end'>
                        <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                            <KTIcon iconName='cross' className='fs-1' />
                        </div>
                    </div>
                    <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
                        <div className='text-center mb-13'>
                            <h1 className='mb-3'>{props.title}</h1>
                        </div>
                        <p>Are you sure you want to continue ?</p>
                        <div className='d-flex mt-5 justify-content-end'>
                            <button type='button' className='btn btn-light-primary' onClick={props.onCancel}>
                                Cancel
                            </button>
                            <button onClick={() => props.onConfirm(props.actionType)} className="btn btn-sm btn-primary" data-bs-dismiss='modal'>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ConfirmationMessage }
