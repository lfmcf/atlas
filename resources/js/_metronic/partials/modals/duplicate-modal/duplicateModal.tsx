import { Modal } from 'react-bootstrap'
import { KTIcon } from '../../../helpers'
import ReactCountryFlag from 'react-country-flag'
import { EunatCountry } from '../../../../Pages/Lab/MetaDataList'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { router } from '@inertiajs/react'

const duplicateModal = ({ show, setShow, data }) => {

    const [isCheck, setIsCheck] = useState();


    useEffect(() => {
        if (show.data) {
            const countryArrays = show.data.map(obj => obj.country)
            setIsCheck(countryArrays)
        }
    }, [show.data])

    const handleMultiCountryChange = (e) => {
        setIsCheck([...isCheck, e.target.value])
        if (!e.target.checked) {
            setIsCheck(isCheck.filter(item => item != e.target.value));
        }
    }

    const submitForm = () => {
        // axios.get('/duplicate-publishing-rmp', { 'id': show.id })
        router.get(route('duplicate-publishing-rmp', { id: show.id, countries: isCheck }))
    }



    return (
        <Modal show={show.show} className="modal fade modal-xl" aria-hidden='true'>

            <div className='modal-content'>
                <div className='modal-header'>
                    <h5 className='modal-title'>Duplicate form for...</h5>
                    <div
                        className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                        onClick={() => setShow(false)}
                    >
                        <KTIcon iconName='cross' className='fs-2x' />
                    </div>
                </div>
                <div className='modal-body'>
                    <div className='row'>
                        {EunatCountry.map((mt, i) => {
                            // var ccode = mt.agencyCode.split('-');
                            // ccode = ccode[0]
                            if (show.data) {
                                var ress = show.data?.some(obj => Object.values(obj).includes(mt.label))
                            }

                            //var ress = isCheck?.includes(mt.label)

                            return (
                                <div key={i} className="col-3 d-flex align-items-center mb-5" >
                                    <div className="me-5 position-relative">
                                        <div className="symbol symbol-35px symbol-circle">
                                            <ReactCountryFlag
                                                className="emojiFlag"
                                                countryCode={mt.code}
                                                aria-label={mt.label}
                                                svg
                                                style={{ width: '25px', height: '25px', borderRadius: '4px' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="fw-semibold" style={{ width: '40%' }}>
                                        <p className="fs-9 fw-bold text-gray-900 text-hover-primary">{mt.label}</p>
                                        <div className="fs-10 text-gray-400">{mt.code}</div>
                                    </div>
                                    <div className="badge badge-light ">
                                        <input type='checkbox'
                                            id={mt.id}
                                            name="country"
                                            value={mt.label}
                                            onChange={handleMultiCountryChange}
                                            // checked={ress ? true : false}
                                            defaultChecked={ress ? true : false}
                                        />
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-light-primary' onClick={() => setShow(false)}>
                        Cancel
                    </button>
                    <button id='submit' type='button' className='btn btn-primary' onClick={submitForm} >
                        Apply
                    </button>
                </div>
            </div>

        </Modal>
    )
}

export default duplicateModal;