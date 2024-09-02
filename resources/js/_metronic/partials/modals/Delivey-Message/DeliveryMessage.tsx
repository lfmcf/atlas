import { router } from "@inertiajs/react"
import { KTIcon } from "../../../helpers"
import clsx from "clsx"
import { useEffect, useState } from "react"


const DeliveryMessage = (props) => {

    const [comment, setComment] = useState('')
    const handleDilivred = () => {

        if (props.form == 'Formatting') {
            router.post(route('diliver-formatting'), { id: props.id, comment: comment })
        } else {
            router.post(route('deliver-publishing'), { id: props.id, comment: comment })
        }

    }
    useEffect(() => {
        setComment('')
    }, [])
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
                            <h1 className='mb-3'>Delivery Comment</h1>
                        </div>
                        <form onSubmit={handleDilivred}>
                            <label className="form-label">Comment</label>
                            <textarea rows={3} className="form-control" onChange={(e) => setComment(e.target.value)} />
                        </form>
                        <div className='d-flex mt-5 justify-content-end'>
                            <a href="#" data-bs-dismiss='modal' className="btn btn-sm btn-light-primary me-3">Cancel</a>
                            <button onClick={handleDilivred} className="btn btn-sm btn-primary" data-bs-dismiss='modal'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DeliveryMessage }