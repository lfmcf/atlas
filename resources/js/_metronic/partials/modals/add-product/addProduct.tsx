import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { KTIcon } from '../../../helpers'
import axios from 'axios'

const AddProduct = ({ show, setShow, handleAddProduct, setProduct_name }) => {

    const handleSubmit = () => {
        handleAddProduct()
        setShow(false)
    }

    return (
        <Modal show={show} className="modal fade" aria-hidden='true' data-backdrop="static" id="add_product">
            {/* <div className='modal-dialog mw-650px'> */}
            <div className='modal-content'>
                <div className='modal-header'>
                    <h5 className='modal-title'>Add product</h5>
                    <div
                        className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                        onClick={() => setShow(false)}
                    >
                        <KTIcon iconName='cross' className='fs-2x' />
                    </div>
                </div>
                <div className='modal-body'>
                    <div className='my-4'>
                        <label className="form-label">Product name</label>
                        <input type='text' name='product' className='form-control' onChange={e => setProduct_name(e.target.value)} placeholder='product' autoFocus />
                    </div>

                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-light-primary' onClick={() => setShow(false)}>
                        Cancel
                    </button>
                    <button id='submit' type='button' className='btn btn-primary' onClick={handleSubmit} >
                        Apply
                    </button>
                </div>
            </div>
            {/* </div> */}
        </Modal>
    )
}

export default AddProduct