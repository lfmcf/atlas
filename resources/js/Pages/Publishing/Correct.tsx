import Authenticated from '../../Layouts/AuthenticatedLayout'
import moment from 'moment'
import { router } from '@inertiajs/react'
import clsx from 'clsx';
import StatusComponent from '../../Components/StatusComponent';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';

const Correct = (props) => {

    const [comment, setComment] = useState('');
    const [source, setSource] = useState('ekemia');
    const { folder } = props

    const handleChange = () => { }
    const handleSend = () => {
        router.post(route('tocorrectpublishing', { id: folder._id, message: comment, source: source }))
    }

    function createMarkup(msg: any) {
        return { __html: msg.message };
    }

    return (
        <Authenticated auth={props.auth}>
            <div className='row'>
                <div className='col-12 mb-10'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center justify-content-between mb-9'>
                                <ul className='nav nav-pills nav-pills-custom position-relative  gap-5' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a className="nav-link btn btn-color-gray-600 btn-active-color-primary px-0 active d-flex justify-content-center w-100 border-0 h-100" data-bs-toggle="pill" href="#kt_aside_tab_1" aria-selected="true" role="tab">

                                            <span className="nav-text text-gray-600 fw-bold fs-6">General information</span>

                                            <span className="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"></span>

                                        </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className="nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100" data-bs-toggle="pill" href="#kt_aside_tab_2" aria-selected="false" tabIndex={-1} role="tab">
                                            <span className="nav-text text-gray-600 fw-bold fs-6">Submission metadata</span>
                                            <span className="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"></span>
                                        </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className="nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100" data-bs-toggle="pill" href="#kt_aside_tab_3" aria-selected="false" tabIndex={-1} role="tab">
                                            <span className="nav-text text-gray-600 fw-bold fs-6">Product metadata</span>
                                            <span className="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"></span>
                                        </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className="nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100" data-bs-toggle="pill" href="#kt_aside_tab_4" aria-selected="false" tabIndex={-1} role="tab">
                                            <span className="nav-text text-gray-600 fw-bold fs-6">Documents</span>
                                            <span className="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"></span>
                                        </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className="nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100" data-bs-toggle="pill" href="#kt_aside_tab_5" aria-selected="false" tabIndex={-1} role="tab">
                                            <span className="nav-text text-gray-600 fw-bold fs-6">Delivery details</span>
                                            <span className="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"></span>
                                        </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className="nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100" data-bs-toggle="pill" href="#kt_aside_tab_6" aria-selected="false" tabIndex={-1} role="tab">
                                            <span className="nav-text text-gray-600 fw-bold fs-6">Dossier Review</span>
                                            <span className="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"></span>
                                        </a>
                                    </li>
                                </ul>
                                <div>
                                    <StatusComponent status={folder.status} />
                                </div>
                            </div>
                            <div className='tab-content'>
                                <div className='tab-pane fade show active' id='kt_aside_tab_1' role='tabpanel'>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Dossier contact</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.dossier_contact}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Object</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.object}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Product name</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.product_name}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Submission country</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.country}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Dossier type</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.dossier_type.value}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Dossier count</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.dossier_count}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Remarks</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.remarks}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab-content'>
                                <div className='tab-pane fade' id='kt_aside_tab_2' role='tabpanel'>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">UUID</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.uuid}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Submission type</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.submission_type.value}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Submission mode</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.submission_mode.value}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Procedure Tracking N°</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.tracking.value}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Submission unit</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.submission_unit.value}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Applicant</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.applicant}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Agency code</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.agency_code}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Invented name</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.product_name}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Sequence</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.sequence}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Related Sequence</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.r_sequence}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Submission mode</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.submission_mode.value}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Submission description</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.submission_description}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Remarks</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.mtremarks}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab-content'>
                                <div className='tab-pane fade' id='kt_aside_tab_3' role='tabpanel'>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Indication</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.indication}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Manufacturer</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.indication}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Drug substance</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.drug_substance}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Drug substance manufacturer</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.indication}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Drug product</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.drug_product}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Drug product manufacturer</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.indication}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Dosage form</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.indication}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Excipient</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.indication}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab-content'>
                                <div className='tab-pane fade' id='kt_aside_tab_4' role='tabpanel'>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Documents</label>
                                        <div className="col-lg-8">
                                            <ul>
                                                {folder.doc ? folder.doc.map((doc, i) => (
                                                    <li key={i}>
                                                        <a href={doc.link} target='blank' className='text-primary fw-semibold fs-6 me-2'>{doc.name}</a>
                                                    </li>
                                                )) : ''}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Documents Remarks</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.docremarks}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab-content'>
                                <div className='tab-pane fade' id='kt_aside_tab_5' role='tabpanel'>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Request date</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{moment(folder.request_date).format("DD-MMM-YYYY H:m")}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Delivery deadline</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{moment(folder.deadline).format("DD-MMM-YYYY H:m")}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Adjusted deadline</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{moment(folder.adjusted_deadline).format("DD-MMM-YYYY H:m")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab-content'>
                                <div className='tab-pane fade' id='kt_aside_tab_6' role='tabpanel'>
                                    <div className="accordion accordion-icon-toggle bg-body" id="kt_accordion_3">
                                        <div className="mb-5">
                                            <div className="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_1">
                                                <span className="accordion-icon">
                                                    <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                                                </span>
                                                <h3 className="fs-4 fw-semibold mb-0 ms-4">Dossier audit</h3>
                                            </div>
                                            <div id="kt_accordion_2_item_1" className="fs-6 collapse p-10" data-bs-parent="#kt_accordion_2">
                                                <div className='scroll-y me-n5 pe-5'
                                                    data-kt-element="messages"
                                                    data-kt-scroll="true"
                                                    data-kt-scroll-activate="{default: false, lg: true}"
                                                    data-kt-scroll-max-height="auto" >
                                                    {
                                                        folder.audit ? folder.audit.map((msg, i) => (
                                                            msg.message ? <div key={i} className='d-flex justify-content-start mb-10'>
                                                                <div className='d-flex flex-column align-items-start'>
                                                                    <div className='d-flex align-items-center mb-2'>
                                                                        {/* <div className='symbol symbol-35px symbol-circle'>
                                                                            EM
                                                                        </div> */}
                                                                        <div className='ms-3'>
                                                                            <span className='text-muted fs-7 mb-1'>7 hours</span>
                                                                            {/* <span className='fs-5 fw-bold text-gray-900 text-hover-primary ms-1'>You</span> */}
                                                                        </div>

                                                                    </div>
                                                                    <div className='p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end' data-kt-element="message-text">
                                                                        {msg.message}
                                                                    </div>
                                                                </div>
                                                            </div> : ''
                                                        )
                                                        ) : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion accordion-icon-toggle bg-body" id="kt_accordion_5">
                                        <div className="mb-5">
                                            <div className="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_4_item_3">
                                                <span className="accordion-icon">
                                                    <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                                                </span>
                                                <h3 className="fs-4 fw-semibold mb-0 ms-4">Delivery Comment</h3>
                                            </div>
                                            <div id="kt_accordion_4_item_3" className="fs-6 collapse p-10" data-bs-parent="#kt_accordion_4">
                                                <div>
                                                    {folder.deliveryComment ? folder.deliveryComment.map((msg, i) => (
                                                        <div key={i}  >{msg.message}</div>

                                                    ))
                                                        : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion accordion-icon-toggle bg-body" id="kt_accordion_4">
                                        <div className="mb-5">
                                            <div className="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_3_item_2">
                                                <span className="accordion-icon">
                                                    <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                                                </span>
                                                <h3 className="fs-4 fw-semibold mb-0 ms-4">Dossier Correction</h3>
                                            </div>
                                            <div id="kt_accordion_3_item_2" className="fs-6 collapse p-10" data-bs-parent="#kt_accordion_4">
                                                <div>
                                                    {
                                                        folder.correction ? folder.correction.map((msg, i) => (
                                                            <div key={i} dangerouslySetInnerHTML={createMarkup(msg)} />


                                                        ))
                                                            : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='card-footer d-flex justify-content-end'>
                            {/* {teamId === 3 ?
                                <>
                                    <button className='btn btn-primary me-3 btn-sm' onClick={handleOk}>OK</button>
                                    <button className='btn btn-warning btn-sm' onClick={handleNotOk}>Not OK</button>
                                </>
                                : <button className='btn btn-primary me-3 btn-sm' onClick={handleEdit}>Edit</button>
                            } */}
                        </div>
                    </div>
                </div>
                {/* {teamId == 3 ? */}
                <div className='col-12'>
                    <div className='card'>
                        <div className="card-header">
                            <h3 className="card-title">Dossier Correction</h3>

                        </div>
                        <div className="card-body">
                            <CKEditor
                                editor={ClassicEditor}
                                data=""
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setComment(data)
                                }}
                            // onBlur={(event, editor) => {
                            //     console.log('Blur.', editor);
                            // }}
                            // onFocus={(event, editor) => {
                            //     console.log('Focus.', editor);
                            // }}
                            />
                            <div className="d-flex flex-stack mt-5">
                                <button className="btn btn-primary btn-sm" type="button" data-kt-element="send" onClick={handleSend}>Send</button>
                            </div>
                        </div>

                        {/* <div className="card-footer">
                            Footer
                        </div> */}
                    </div>
                </div>


            </div>
        </Authenticated>
    )
}

export default Correct;