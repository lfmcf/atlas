import moment from "moment";
import Authenticated from "../../../Layouts/AuthenticatedLayout";
import StatusComponent from "../../../Components/StatusComponent";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { KTIcon } from "../../../_metronic/helpers";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { DeliveryMessage } from "../../../_metronic/partials/modals/Delivey-Message/DeliveryMessage";
import clsx from "clsx";

const Show = (props) => {

    const { folder } = props
    const [show, setShow] = useState({ 'status': false, id: '', form: '' });

    const teamId = props.auth.user.current_team_id;

    function createMarkup(msg: any) {
        return { __html: msg.message };
    }

    const handleDilivred = (id, form) => {
        setShow({ 'status': !show.status, id: id, form: form })
    }

    // CKEditor.

    return (
        <>
            <a href="#" onClick={() => window.history.back()} className="btn btn-sm fw-bold btn-secondary mb-2">
                <i className="ki-duotone ki-black-left fs-3">
                </i>
            </a>
            <div className="row">
                <div className='col-12 mb-10'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center justify-content-between mb-9'>
                                <ul className='nav nav-pills nav-pills-custom position-relative  gap-5' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a className={clsx("nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100", folder.status == 'to correct' ? '' : 'active')} data-bs-toggle="pill" href="#kt_aside_tab_1" aria-selected="true" role="tab">

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
                                        <a className={clsx("nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100", folder.status == 'to correct' ? 'active' : '')} data-bs-toggle="pill" href="#kt_aside_tab_6" aria-selected="false" tabIndex={-1} role="tab">
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
                                <div className={clsx('tab-pane fade', folder.status == 'to correct' ? '' : 'active show')} id='kt_aside_tab_1' role='tabpanel'>
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
                                    {/* <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Submission country</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.country ? folder.country.value : ''}</span>
                                        </div>
                                    </div> */}
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Dossier type</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.dossier_type ? folder.dossier_type.value : ''}</span>
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
                                    <div className="table-responsive" style={{ overflow: 'auto' }}>
                                        <table className="table table-sm table-row-dashed" id="showTable" >
                                            <thead>
                                                <tr>
                                                    <th colSpan={1}>Country</th>
                                                    <th colSpan={1} rowSpan={1}>UUID</th>
                                                    <th colSpan={1}>S. type</th>
                                                    <th>S. mode</th>
                                                    <th>P. Tracking N°</th>
                                                    <th>S. unit</th>
                                                    <th>Applicant</th>
                                                    <th>Agency code</th>
                                                    <th>Invented name</th>
                                                    <th>INN</th>
                                                    <th>Sequence</th>
                                                    <th>Related Sequence</th>
                                                    <th>Submission description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {folder.mt.map((mtdata, i) => (
                                                    <tr key={i}>
                                                        <td className="fs-7 text-gray-600">{mtdata.country}</td>
                                                        <td className="fs-7 text-gray-600">{mtdata.uuid}</td>
                                                        <td className="fs-7 text-gray-600">{mtdata.submission_type ? mtdata.submission_type.value : ''}</td>
                                                        <td className="fs-7 text-gray-600">{mtdata.submission_mode ? mtdata.submission_mode.value : ''}</td>
                                                        <td className="fs-7 text-gray-600">{mtdata.trackingNumber}</td>
                                                        <td className="fs-7 text-gray-600">{mtdata.submission_unit ? mtdata.submission_unit.value : ''}</td>
                                                        <td className="fs-7 text-gray-600">{mtdata.applicant}</td>
                                                        <td className="fs-7 text-gray-600">{mtdata.agencyCode}</td>
                                                        <td className="fs-7 text-gray-600">{folder.product_name}</td>
                                                        <td className="fs-7 text-gray-600">{mtdata.inn}</td>
                                                        <td className="fs-7 text-gray-600">{mtdata.sequence}</td>
                                                        <td className="fs-7 text-gray-600">{mtdata.r_sequence}</td>
                                                        <td className="fs-7 text-gray-600">{mtdata.submission_description}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className='tab-content'>
                                <div className='tab-pane fade' id='kt_aside_tab_3' role='tabpanel'>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Indication</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.indication ? folder.indication.value : ''}</span>
                                        </div>
                                    </div>

                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Drug substance</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.drug_substance ? folder.drug_substance.map((sub) => (
                                                <li>{sub.value}</li>
                                            )) : ''}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Drug substance manufacturer</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.drug_substance_manufacturer ? folder.drug_substance_manufacturer.value : ''}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Drug product</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.drug_product ? folder.drug_product.value : ''}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Drug product manufacturer</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.drug_product_manufacturer ? folder.drug_product_manufacturer.value : ''}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Dosage form</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.dosage_form ? folder.dosage_form.value : ''}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-7">
                                        <label className="col-lg-4 fw-semibold text-muted">Excipient</label>
                                        <div className="col-lg-8">
                                            <span className="fw-bold fs-6 text-gray-800">{folder.excipient ? folder.excipient.map((ex) => (
                                                <li>{ex.value}</li>
                                            )) : ''}
                                            </span>
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
                                <div className={clsx('tab-pane fade', folder.status == 'to correct' ? 'active show' : '')} id='kt_aside_tab_6' role='tabpanel'>
                                    <div className="accordion accordion-icon-toggle bg-body" id="kt_accordion_3">
                                        <div className="mb-5">
                                            <div className="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_1">
                                                <span className="accordion-icon">
                                                    <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                                                </span>
                                                <h3 className="fs-4 fw-semibold mb-0 ms-4">Dossier audit</h3>
                                            </div>
                                            <div id="kt_accordion_2_item_1" className="fs-6 collapse p-10" data-bs-parent="#kt_accordion_3">
                                                <div className='scroll-y me-n5 pe-5'
                                                    data-kt-element="messages"
                                                    data-kt-scroll="true"
                                                    data-kt-scroll-activate="{default: false, lg: true}"
                                                    data-kt-scroll-max-height="auto">
                                                    {
                                                        folder.audit ? folder.audit.map((msg, i) => (
                                                            msg.message && msg.user.id !== props.auth.user.id ?
                                                                <div key={i} className='d-flex justify-content-start mb-10'>
                                                                    <div className='d-flex flex-column align-items-start'>
                                                                        <div className='d-flex align-items-center mb-2'>
                                                                            <div className='symbol symbol-35px bg-secondary symbol-circle'>
                                                                                <span className="symbol-label bg-info text-inverse-primary fw-bold text-uppercase">{msg.user ? msg.user.name.slice(0, 2) : ''}</span>
                                                                            </div>
                                                                            <div className='ms-3'>
                                                                                <span className='text-muted fs-8 mb-1'>{moment(msg.date).format('MM/DD/YYYY H:s')}</span>
                                                                                {/* <span className='fs-5 fw-bold text-gray-900 text-hover-primary ms-1'>You</span> */}
                                                                            </div>

                                                                        </div>
                                                                        <div className='p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end' data-kt-element="message-text">
                                                                            {msg.message}
                                                                        </div>
                                                                    </div>
                                                                </div> :
                                                                <div key={i} className='d-flex justify-content-end mb-10'>
                                                                    <div className='d-flex flex-column align-items-end'>
                                                                        <div className='d-flex align-items-center mb-2'>

                                                                            <div className='me-3'>
                                                                                <span className='text-muted fs-8 mb-1'>{moment(msg.date).format('MM/DD/YYYY H:s')}</span>
                                                                                {/* <span className='fs-5 fw-bold text-gray-900 text-hover-primary ms-1'>You</span> */}
                                                                            </div>
                                                                            <div className='symbol symbol-35px bg-secondary symbol-circle'>
                                                                                <span className="symbol-label bg-info text-inverse-primary fw-bold text-uppercase">{msg.user ? msg.user.name.slice(0, 2) : ''}</span>
                                                                            </div>

                                                                        </div>
                                                                        <div className='p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end' data-kt-element="message-text">
                                                                            {msg.message}
                                                                        </div>
                                                                    </div>
                                                                </div>
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
                                                <h3 className="fs-4 fw-semibold mb-0 ms-4">Delivery Comments</h3>
                                            </div>
                                            <div id="kt_accordion_4_item_3" className="fs-6 collapse p-10" data-bs-parent="#kt_accordion_4">
                                                <div>
                                                    {folder.deliveryComment ? folder.deliveryComment.map((msg, i) => (
                                                        <div key={i} className='d-flex justify-content-start mb-10'>
                                                            <div className='d-flex flex-column align-items-start'>
                                                                <div className='d-flex align-items-center mb-2'>
                                                                    <div className='symbol symbol-35px bg-secondary symbol-circle'>
                                                                        <span className="symbol-label bg-info text-inverse-primary fw-bold text-uppercase">EK</span>
                                                                    </div>
                                                                    <div className='ms-3'>
                                                                        <span className='text-muted fs-8 mb-1'>{moment(msg.date).format('MM/DD/YYYY H:s')}</span>
                                                                        {/* <span className='fs-5 fw-bold text-gray-900 text-hover-primary ms-1'>You</span> */}
                                                                    </div>

                                                                </div>
                                                                <div className='p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end' data-kt-element="message-text">
                                                                    {msg.message}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                        : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion accordion-icon-toggle bg-body" id="kt_accordion_4">
                                        <div className="mb-5">
                                            <div className={clsx("accordion-header py-3 d-flex", folder.status == 'to correct' ? '' : 'collapsed')} data-bs-toggle="collapse" data-bs-target="#kt_accordion_3_item_2">
                                                <span className="accordion-icon">
                                                    <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                                                </span>
                                                <h3 className="fs-4 fw-semibold mb-0 ms-4">Dossier Correction</h3>
                                            </div>
                                            <div id="kt_accordion_3_item_2" className={clsx("fs-6 collapse p-10", folder.status == 'to correct' ? 'show' : '')} data-bs-parent="#kt_accordion_4">
                                                <div>
                                                    {
                                                        folder.correction ? folder.correction.map((msg, i) => (
                                                            <div key={i} className='d-flex justify-content-start mb-10'>
                                                                <div className='d-flex flex-column align-items-start'>
                                                                    <div className='d-flex align-items-center mb-2'>
                                                                        <div className='symbol symbol-35px bg-secondary symbol-circle'>
                                                                            <span className="symbol-label bg-success text-inverse-primary fw-bold text-uppercase">{msg.user ? msg.user.name.slice(0, 2) : ''}</span>
                                                                        </div>
                                                                        <div className='ms-3'>
                                                                            <span className='text-muted fs-8 mb-1'>{moment(msg.date).format('MM/DD/YYYY H:s')}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px' data-kt-element="message-text">
                                                                        <div key={i} dangerouslySetInnerHTML={createMarkup(msg)} />
                                                                    </div>
                                                                </div>
                                                            </div>
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
                        {folder.status == 'in progress' && teamId == 3 || (folder.status == 'to correct' && teamId == 3) ?
                            <div className="card-footer d-flex justify-content-end">
                                <a
                                    href="#"
                                    onClick={() => handleDilivred(folder._id, folder.form)}
                                    className='btn btn-sm btn-light-primary'
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_delivery_message'
                                >
                                    {/* <KTIcon iconName='check-circle' className='fs-3' /> */}
                                    Deliver
                                </a>
                            </div>
                            :
                            ''}

                    </div>
                </div>
            </div>
            <DeliveryMessage show={show.status} id={show.id} form={show.form} />
        </>
    )
}

Show.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Show;