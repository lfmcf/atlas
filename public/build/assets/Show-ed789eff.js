import{r as m,j as s,e as x}from"./app-c5668063.js";import{h as c,K as b,A as h}from"./AuthenticatedLayout-cd068142.js";import{S as j}from"./StatusComponent-282b96ad.js";import"./MetronicSplashScreen-9b3248cc.js";import"./MenuComponent-d0def7cb.js";import{D as N}from"./DeliveryMessage-0ca9f827.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const f=t=>{const{folder:e}=t,[d,n]=m.useState({status:!1,id:"",form:""}),i=t.auth.user.current_team_id;function r(a){return{__html:a.message}}const o=(a,l)=>{n({status:!d.status,id:a,form:l})};return s.jsxs(s.Fragment,{children:[s.jsx("a",{href:"#",onClick:()=>x.get("tasks"),className:"btn btn-sm fw-bold btn-secondary mb-2",children:s.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12 mb-10",children:s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-body",children:[s.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-9",children:[s.jsxs("ul",{className:"nav nav-pills nav-pills-custom position-relative  gap-5",role:"tablist",children:[s.jsx("li",{className:"nav-item",role:"presentation",children:s.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary px-0 active d-flex justify-content-center w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_1","aria-selected":"true",role:"tab",children:[s.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"General information"}),s.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),s.jsx("li",{className:"nav-item",role:"presentation",children:s.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_2","aria-selected":"false",tabIndex:-1,role:"tab",children:[s.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Submission metadata"}),s.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),s.jsx("li",{className:"nav-item",role:"presentation",children:s.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_3","aria-selected":"false",tabIndex:-1,role:"tab",children:[s.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Product metadata"}),s.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),s.jsx("li",{className:"nav-item",role:"presentation",children:s.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_4","aria-selected":"false",tabIndex:-1,role:"tab",children:[s.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Documents"}),s.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),s.jsx("li",{className:"nav-item",role:"presentation",children:s.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_5","aria-selected":"false",tabIndex:-1,role:"tab",children:[s.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Delivery details"}),s.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),s.jsx("li",{className:"nav-item",role:"presentation",children:s.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_6","aria-selected":"false",tabIndex:-1,role:"tab",children:[s.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Dossier Review"}),s.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})})]}),s.jsx("div",{children:s.jsx(j,{status:e.status})})]}),s.jsx("div",{className:"tab-content",children:s.jsxs("div",{className:"tab-pane fade show active",id:"kt_aside_tab_1",role:"tabpanel",children:[s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Dossier contact"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.dossier_contact})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Object"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.object})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Product name"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.product_name})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Submission country"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.country})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Dossier type"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.dossier_type?e.dossier_type.value:""})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Dossier count"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.dossier_count})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Remarks"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.remarks})})]})]})}),s.jsx("div",{className:"tab-content",children:s.jsxs("div",{className:"tab-pane fade",id:"kt_aside_tab_2",role:"tabpanel",children:[s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"UUID"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.uuid})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Submission type"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.submission_type?e.submission_type.value:""})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Submission mode"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.submission_mode?e.submission_mode.value:""})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Procedure Tracking N°"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.tracking&&typeof e.tracking=="object"?e.tracking.value:e.tracking})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Submission unit"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.submission_unit?e.submission_unit.value:""})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Applicant"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.applicant})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Agency code"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.agency_code})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Invented name"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.product_name})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Sequence"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.sequence})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Related Sequence"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.r_sequence})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Submission mode"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.submission_mode.value})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Submission description"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.submission_description})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Remarks"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.mtremarks})})]})]})}),s.jsx("div",{className:"tab-content",children:s.jsxs("div",{className:"tab-pane fade",id:"kt_aside_tab_3",role:"tabpanel",children:[s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Indication"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.indication})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Manufacturer"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.indication})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Drug substance"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.drug_substance})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Drug substance manufacturer"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.indication})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Drug product"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.drug_product})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Drug product manufacturer"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.indication})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Dosage form"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.indication})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Excipient"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.indication})})]})]})}),s.jsx("div",{className:"tab-content",children:s.jsxs("div",{className:"tab-pane fade",id:"kt_aside_tab_4",role:"tabpanel",children:[s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Documents"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("ul",{children:e.doc?e.doc.map((a,l)=>s.jsx("li",{children:s.jsx("a",{href:a.link,target:"blank",className:"text-primary fw-semibold fs-6 me-2",children:a.name})},l)):""})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Documents Remarks"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:e.docremarks})})]})]})}),s.jsx("div",{className:"tab-content",children:s.jsxs("div",{className:"tab-pane fade",id:"kt_aside_tab_5",role:"tabpanel",children:[s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Request date"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:c(e.request_date).format("DD-MMM-YYYY H:m")})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Delivery deadline"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:c(e.deadline).format("DD-MMM-YYYY H:m")})})]}),s.jsxs("div",{className:"row mb-7",children:[s.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Adjusted deadline"}),s.jsx("div",{className:"col-lg-8",children:s.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:c(e.adjusted_deadline).format("DD-MMM-YYYY H:m")})})]})]})}),s.jsx("div",{className:"tab-content",children:s.jsxs("div",{className:"tab-pane fade",id:"kt_aside_tab_6",role:"tabpanel",children:[s.jsx("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_3",children:s.jsxs("div",{className:"mb-5",children:[s.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_1",children:[s.jsx("span",{className:"accordion-icon",children:s.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"})]})}),s.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier audit"})]}),s.jsx("div",{id:"kt_accordion_2_item_1",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_3",children:s.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:e.audit?e.audit.map((a,l)=>a.message&&a.user.id!==t.auth.user.id?s.jsx("div",{className:"d-flex justify-content-start mb-10",children:s.jsxs("div",{className:"d-flex flex-column align-items-start",children:[s.jsxs("div",{className:"d-flex align-items-center mb-2",children:[s.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:s.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:a.user.name})}),s.jsx("div",{className:"ms-3",children:s.jsx("span",{className:"text-muted fs-8 mb-1",children:c(a.date).format("MM/DD/YYYY H:s")})})]}),s.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:a.message})]})},l):s.jsx("div",{className:"d-flex justify-content-end mb-10",children:s.jsxs("div",{className:"d-flex flex-column align-items-end",children:[s.jsxs("div",{className:"d-flex align-items-center mb-2",children:[s.jsx("div",{className:"me-3",children:s.jsx("span",{className:"text-muted fs-8 mb-1",children:c(a.date).format("MM/DD/YYYY H:s")})}),s.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:s.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:a.user.name})})]}),s.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:a.message})]})},l)):""})})]})}),s.jsx("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_5",children:s.jsxs("div",{className:"mb-5",children:[s.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_4_item_3",children:[s.jsx("span",{className:"accordion-icon",children:s.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"})]})}),s.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Delivery Comments"})]}),s.jsx("div",{id:"kt_accordion_4_item_3",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_4",children:s.jsx("div",{children:e.deliveryComment?e.deliveryComment.map((a,l)=>s.jsx("div",{className:"d-flex justify-content-start mb-10",children:s.jsxs("div",{className:"d-flex flex-column align-items-start",children:[s.jsxs("div",{className:"d-flex align-items-center mb-2",children:[s.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:s.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:"EK"})}),s.jsx("div",{className:"ms-3",children:s.jsx("span",{className:"text-muted fs-8 mb-1",children:c(a.date).format("MM/DD/YYYY H:s")})})]}),s.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:a.message})]})},l)):""})})]})}),s.jsx("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_4",children:s.jsxs("div",{className:"mb-5",children:[s.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_3_item_2",children:[s.jsx("span",{className:"accordion-icon",children:s.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"})]})}),s.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier Correction"})]}),s.jsx("div",{id:"kt_accordion_3_item_2",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_4",children:s.jsx("div",{children:e.correction?e.correction.map((a,l)=>s.jsx("div",{className:"d-flex justify-content-start mb-10",children:s.jsxs("div",{className:"d-flex flex-column align-items-start",children:[s.jsxs("div",{className:"d-flex align-items-center mb-2",children:[s.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:s.jsx("span",{className:"symbol-label bg-success text-inverse-primary fw-bold text-uppercase",children:"CA"})}),s.jsx("div",{className:"ms-3",children:s.jsx("span",{className:"text-muted fs-8 mb-1",children:c(a.date).format("MM/DD/YYYY H:s")})})]}),s.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.jsx("div",{dangerouslySetInnerHTML:r(a)},l)})]})},l)):""})})]})})]})})]}),e.status=="in progress"&&i==3||e.status=="to correct"&&i==3?s.jsx("div",{className:"card-footer d-flex justify-content-end",children:s.jsx("a",{href:"#",onClick:()=>o(e._id,e.form),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1","data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message",children:s.jsx(b,{iconName:"check-circle",className:"fs-3"})})}):""]})})}),s.jsx(N,{show:d.status,id:d.id,form:d.form})]})};f.layout=t=>s.jsx(h,{children:t,auth:t.props.auth});export{f as default};
