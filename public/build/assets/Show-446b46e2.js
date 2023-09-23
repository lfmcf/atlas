import{r as m,j as e}from"./app-134494bf.js";import{A as x,h as t,K as b}from"./AuthenticatedLayout-e3c0c57e.js";import{S as h}from"./StatusComponent-debf3ff1.js";import"./MetronicSplashScreen-fb846d29.js";import"./MenuComponent-20e277f4.js";import{D as j}from"./DeliveryMessage-9ce8000c.js";const w=c=>{const{folder:s}=c,[i,r]=m.useState({status:!1,id:"",form:""}),d=c.auth.user.current_team_id;function n(a){return{__html:a.message}}const o=(a,l)=>{r({status:!i.status,id:a,form:l})};return console.log(s.country.value),e.jsxs(x,{auth:c.auth,children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12 mb-10",children:e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-9",children:[e.jsxs("ul",{className:"nav nav-pills nav-pills-custom position-relative  gap-5",role:"tablist",children:[e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary px-0 active d-flex justify-content-center w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_1","aria-selected":"true",role:"tab",children:[e.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"General information"}),e.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_2","aria-selected":"false",tabIndex:-1,role:"tab",children:[e.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Submission metadata"}),e.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_3","aria-selected":"false",tabIndex:-1,role:"tab",children:[e.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Product metadata"}),e.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_4","aria-selected":"false",tabIndex:-1,role:"tab",children:[e.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Documents"}),e.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_5","aria-selected":"false",tabIndex:-1,role:"tab",children:[e.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Delivery details"}),e.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_6","aria-selected":"false",tabIndex:-1,role:"tab",children:[e.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Dossier Review"}),e.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})})]}),e.jsx("div",{children:e.jsx(h,{status:s.status})})]}),e.jsx("div",{className:"tab-content",children:e.jsxs("div",{className:"tab-pane fade show active",id:"kt_aside_tab_1",role:"tabpanel",children:[e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Dossier contact"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.dossier_contact})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Object"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.object})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Product name"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.product_name})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Submission country"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.country?s.country.value:""})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Dossier type"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.dossier_type?s.dossier_type.value:""})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Dossier count"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.dossier_count})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Remarks"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.remarks})})]})]})}),e.jsx("div",{className:"tab-content",children:e.jsx("div",{className:"tab-pane fade",id:"kt_aside_tab_2",role:"tabpanel",children:e.jsx("h3",{children:"Developpement in preccess"})})}),e.jsx("div",{className:"tab-content",children:e.jsxs("div",{className:"tab-pane fade",id:"kt_aside_tab_3",role:"tabpanel",children:[e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Indication"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.indication})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Manufacturer"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.indication})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Drug substance"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.drug_substance})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Drug substance manufacturer"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.indication})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Drug product"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.drug_product})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Drug product manufacturer"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.indication})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Dosage form"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.indication})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Excipient"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.indication})})]})]})}),e.jsx("div",{className:"tab-content",children:e.jsxs("div",{className:"tab-pane fade",id:"kt_aside_tab_4",role:"tabpanel",children:[e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Documents"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("ul",{children:s.doc?s.doc.map((a,l)=>e.jsx("li",{children:e.jsx("a",{href:a.link,target:"blank",className:"text-primary fw-semibold fs-6 me-2",children:a.name})},l)):""})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Documents Remarks"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.docremarks})})]})]})}),e.jsx("div",{className:"tab-content",children:e.jsxs("div",{className:"tab-pane fade",id:"kt_aside_tab_5",role:"tabpanel",children:[e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Request date"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:t(s.request_date).format("DD-MMM-YYYY H:m")})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Delivery deadline"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:t(s.deadline).format("DD-MMM-YYYY H:m")})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Adjusted deadline"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:t(s.adjusted_deadline).format("DD-MMM-YYYY H:m")})})]})]})}),e.jsx("div",{className:"tab-content",children:e.jsxs("div",{className:"tab-pane fade",id:"kt_aside_tab_6",role:"tabpanel",children:[e.jsx("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_3",children:e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_1",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier audit"})]}),e.jsx("div",{id:"kt_accordion_2_item_1",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_3",children:e.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:s.audit?s.audit.map((a,l)=>a.message&&a.user.id!==c.auth.user.id?e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:a.user.name})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:t(a.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:a.message})]})},l):e.jsx("div",{className:"d-flex justify-content-end mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-end",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"me-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:t(a.date).format("MM/DD/YYYY H:s")})}),e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:a.user.name})})]}),e.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:a.message})]})},l)):""})})]})}),e.jsx("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_5",children:e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_4_item_3",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Delivery Comments"})]}),e.jsx("div",{id:"kt_accordion_4_item_3",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_4",children:e.jsx("div",{children:s.deliveryComment?s.deliveryComment.map((a,l)=>e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:"EK"})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:t(a.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:a.message})]})},l)):""})})]})}),e.jsx("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_4",children:e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_3_item_2",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier Correction"})]}),e.jsx("div",{id:"kt_accordion_3_item_2",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_4",children:e.jsx("div",{children:s.correction?s.correction.map((a,l)=>e.jsx("div",{dangerouslySetInnerHTML:n(a)},l)):""})})]})})]})})]}),s.status=="in progress"&&d==3||s.status=="to correct"&&d==3?e.jsx("div",{className:"card-footer d-flex justify-content-end",children:e.jsx("a",{href:"#",onClick:()=>o(s._id,s.form),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1","data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message",children:e.jsx(b,{iconName:"check-circle",className:"fs-3"})})}):""]})})}),e.jsx(j,{show:i.status,id:i.id,form:i.form})]})};export{w as default};
