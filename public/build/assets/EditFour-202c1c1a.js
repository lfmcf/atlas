import{r as d,j as e,c as u}from"./app-06635e03.js";import{A as N,h as i}from"./AuthenticatedLayout-8da68bd6.js";/* empty css                  */import{P as f}from"./MetronicSplashScreen-cb23b694.js";import{c as n}from"./MenuComponent-8d594a05.js";const y=c=>{d.useState(!1);const{folder:s}=c,r=c.auth.user.current_team_id,[x,b]=d.useState(""),[t,h]=d.useState(""),o=a=>{b(a.target.value)},j=a=>{h(a.target.value)},m=()=>{u.post("tocorrect",{id:s._id,message:x,source:t})};return e.jsxs(N,{auth:c.auth,children:[e.jsx(f,{breadcrumbs:[],children:"Edit"}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12 mb-10",children:e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-9",children:[e.jsxs("ul",{className:"nav nav-pills nav-pills-custom position-relative  gap-5",role:"tablist",children:[e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary px-0 active d-flex justify-content-center w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_1","aria-selected":"true",role:"tab",children:[e.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"General information"}),e.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_2","aria-selected":"false",tabIndex:-1,role:"tab",children:[e.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Documents"}),e.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsxs("a",{className:"nav-link btn btn-color-gray-600 btn-active-color-primary d-flex justify-content-center px-0 w-100 border-0 h-100","data-bs-toggle":"pill",href:"#kt_aside_tab_3","aria-selected":"false",tabIndex:-1,role:"tab",children:[e.jsx("span",{className:"nav-text text-gray-600 fw-bold fs-6",children:"Delivery details"}),e.jsx("span",{className:"bullet-custom position-absolute z-index-2 bottom-0 w-100 h-1px bg-primary rounded"})]})})]}),e.jsx("div",{children:e.jsx("span",{className:"badge badge-lg badge-light-success fw-bold fs-7",children:s.status})})]}),e.jsx("div",{className:"tab-content",children:e.jsxs("div",{className:"tab-pane fade show active",id:"kt_aside_tab_1",role:"tabpanel",children:[e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Dossier contact"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.dossier_contact})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Object"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.object})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Product name"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.product_name.value})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Substance name"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.substance_name.value})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Country"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.country.value})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Dossier type"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.dossier_type.value})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Document count"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.document_count})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Deficiency Letter"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.deficiency_letter})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Chrono N°/ Dossier Reference"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.chrono})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Remarks"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.remarks})})]})]})}),e.jsx("div",{className:"tab-content",children:e.jsxs("div",{className:"tab-pane fade",id:"kt_aside_tab_2",role:"tabpanel",children:[e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Documents"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("ul",{children:s.document?s.document.map((a,l)=>e.jsx("li",{children:e.jsx("a",{href:a.link,target:"blank",className:"text-primary fw-semibold fs-6 me-2",children:a.name})},l)):""})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Documents Remarks"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:s.docremarks})})]})]})}),e.jsx("div",{className:"tab-content",children:e.jsxs("div",{className:"tab-pane fade",id:"kt_aside_tab_3",role:"tabpanel",children:[e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Request date"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:i(s.request_date).format("DD-MMM-YYYY H:m")})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Delivery deadline"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:i(s.deadline).format("DD-MMM-YYYY H:m")})})]}),e.jsxs("div",{className:"row mb-7",children:[e.jsx("label",{className:"col-lg-4 fw-semibold text-muted",children:"Adjusted deadline"}),e.jsx("div",{className:"col-lg-8",children:e.jsx("span",{className:"fw-bold fs-6 text-gray-800",children:i(s.adjusted_deadline).format("DD-MMM-YYYY H:m")})})]})]})})]})})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"accordion accordion-icon-toggle bg-white",id:"kt_accordion_2",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_2",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier correction"})]}),e.jsxs("div",{id:"kt_accordion_2_item_2",className:"collapse fs-6 ps-10","data-bs-parent":"#kt_accordion_2",children:[e.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:s.correction?s.correction.map((a,l)=>a.message?e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsx("div",{className:"d-flex flex-column align-items-start",children:e.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:a.message})})},l):""):""}),r==2?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-3",children:e.jsxs("label",{className:"d-flex align-items-center fs-5 fw-semibold",children:[e.jsx("span",{className:"required",children:"Specify Error source"}),e.jsx("span",{className:"m2-1","data-bs-toggle":"tooltip",title:"Choose source of error",children:e.jsxs("i",{className:"ki-duotone ki-information fs-7",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"}),e.jsx("span",{className:"path3"})]})})]})}),e.jsxs("div",{className:"btn-group mb-3 w-100 w-lg-50","data-kt-buttons":"true","data-kt-buttons-target":"[data-kt-button]",onChange:j,children:[e.jsxs("label",{className:n("btn btn-outline btn-color-muted btn-active-success",{active:t=="ekemia"}),"data-kt-button":"true",children:[e.jsx("input",{className:"btn-check",type:"radio",name:"method",value:"ekemia"}),"Ekemia"]}),e.jsxs("label",{className:n("btn btn-outline btn-color-muted btn-active-success",{active:t=="STG"}),"data-kt-button":"true",children:[e.jsx("input",{className:"btn-check",type:"radio",name:"method",value:"STG"}),"STG"]}),e.jsxs("label",{className:n("btn btn-outline btn-color-muted btn-active-success",{active:t=="All"}),"data-kt-button":"true",children:[e.jsx("input",{className:"btn-check",type:"radio",name:"method",value:"All"}),"All"]})]}),e.jsx("textarea",{className:"form-control form-control-flush mb-3",rows:1,"data-kt-element":"input",onChange:o,placeholder:"Type a message"}),e.jsx("div",{className:"d-flex flex-stack",children:e.jsx("button",{className:"btn btn-primary btn-sm",type:"button","data-kt-element":"send",onClick:m,children:"Send"})})]}):""]})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_1",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier audit"})]}),e.jsxs("div",{id:"kt_accordion_2_item_1",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:[e.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:s.audit?s.audit.map((a,l)=>a.message?e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsx("div",{className:"d-flex flex-column align-items-start",children:e.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:a.message})})},l):""):""}),r==3?e.jsxs(e.Fragment,{children:[e.jsx("textarea",{className:"form-control form-control-flush mb-3",rows:1,"data-kt-element":"input",onChange:o,placeholder:"Type a message"}),e.jsx("div",{className:"d-flex flex-stack",children:e.jsx("button",{className:"btn btn-primary btn-sm",type:"button","data-kt-element":"send",onClick:m,children:"Send"})})]}):""]})]})]})})]})]})};export{y as default};
