import{r as h,W as Y,j as e,b as f}from"./app-57dac570.js";import{h as d,i as x,j as F,s as M,k as P,A as I}from"./AuthenticatedLayout-fd6f144e.js";import{S as R}from"./MenuComponent-75daa1fe.js";import{F as u}from"./index-f6ccbb6d.js";/* empty css                  */import{S as E}from"./StatusComponent-7786a333.js";import{d as q,C as H}from"./ckeditor-a2acc145.js";import{D as T}from"./Dropzone-8ffed3fe.js";import"./MetronicSplashScreen-48fe197b.js";const A={startIndex:4,animation:!1,animationSpeed:"0.3s",animationNextClass:"animate__animated animate__slideInRight animate__fast",animationPreviousClass:"animate__animated animate__slideInLeft animate__fast"},z=n=>{function N(s){return{__html:s.message}}const j=h.useRef(null),r=h.useRef(null),{folder:l}=n,{data:t,setData:i,post:v,processing:L,errors:O,clearErrors:K,reset:U}=Y({id:l._id,form:l.form,region:l.region,coredoc:l.coredoc,dossier_contact:l.dossier_contact,object:l.object,product_name:l.product_name,substance_name:l.substance_name,country:l.country,dossier_type:l.dossier_type,document_count:l.document_count,deficiency_letter:l.deficiency_letter,chrono:l.chrono,remarks:l.remarks,doc:l&&l.document!==null?l.document:[],docremarks:l.docremarks,request_date:l.request_date,deadline:l.deadline,adjusted_deadline:new Date,adjustedDeadlineComments:"",review_request_date:d(new Date),review_deadline:d(new Date),delivery_comment:"",delivery_version:"",correction_request:"",correction_origin:"",document:"",status:l.status,deadlineComments:"",correction:{user:{id:n.auth.user.id,name:n.auth.user.name},date:new Date,message:"",source:[]}});let g=n.countries.map(function(s){return{value:s,label:s}});h.useEffect(()=>{r.current=R.createInsance(j.current,A)},[]);const _=s=>{s.preventDefault(),v(route("correct-formatting"))},m=(s,a)=>{i(a,s)},o=s=>{i(s.target.name,s.target.value)},b=s=>{let a={...t};if(s.target.checked)a.correction.source.push(s.target.value);else{const c=a.correction.source.indexOf(s.target.value);a.correction.source.splice(c,1)}i(a)},y=s=>{const a=s.getData();let c={...t};c.correction.message=a,i(c)},k=s=>{let a={...t};a.doc.push(...s),i(a)},C=()=>{r.current&&(r.current.getCurrentStepIndex(),r.current.getCurrentStepIndex(),r.current.goNext())},w=()=>{r.current&&r.current.goPrev()},D=()=>{let s={...t},a=[];s.doc.map(c=>{c.link&&a.push(c.name)}),a.length>0&&f.post("delete-file",{docs:a,id:t.id}),s.doc=[],i(s)},S=s=>{if(s.link){let p=[];p.push(s.name),f.post("delete-file",{docs:p,id:t.id})}var a={...t};let c=a.doc.map(p=>p.name).indexOf(s.name);a.doc.splice(c,1),i(a)};return e.jsxs(e.Fragment,{children:[e.jsx(E,{status:t.status}),e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:j,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=r.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General Information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=r.current)==null?void 0:s.goto(2)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",onClick:()=>{var s;return(s=r.current)==null?void 0:s.goto(3)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Delivery Details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",onClick:()=>{var s;return(s=r.current)==null?void 0:s.goto(4)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Dossier Review"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:_,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_contact",value:t.dossier_contact,onChange:o})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",value:t.object,onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Product name"}),e.jsx(x,{options:F,name:"product_name",onChange:s=>m(s,"product_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:t.product_name})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Substance name"}),e.jsx(x,{options:M,name:"substance_name",onChange:s=>m(s,"substance_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:t.substance_name})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Country"}),e.jsx(x,{options:g,name:"country",onChange:s=>m(s,"country"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:t.country})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier type"}),e.jsx(x,{options:P,name:"dossier_type",onChange:s=>m(s,"dossier_type"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:t.dossier_type})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Document Count"}),e.jsx("input",{type:"number",className:"form-control form-control-solid",value:t.document_count,name:"document_count",onChange:o})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Deficiency Letter"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:t.deficiency_letter,name:"deficiency_letter",onChange:o})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Chrono N°/ Dossier Reference"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"chrono",value:t.chrono,onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"remarks",defaultValue:t.remarks,onChange:o})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(T,{files:t.doc,upload:k,deleletFile:S,removeAll:D})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:t.docremarks,placeholder:"",onChange:o})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(u,{"data-enable-time":!0,value:t.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(u,{"data-enable-time":!0,value:t.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsxs("div",{className:"row  mb-10",children:[e.jsxs("div",{className:"col-6 mb-10",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(u,{"data-enable-time":!0,value:t.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>i("adjusted_deadline",s)})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"adjustedDeadlineComments",placeholder:"",onChange:o})]})]})]}),e.jsx("div",{className:"flex-column current","data-kt-stepper-element":"content",children:e.jsxs("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_2",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_1",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier audit"})]}),e.jsx("div",{id:"kt_accordion_2_item_1",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:e.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:l.audit?l.audit.map((s,a)=>s.message&&s.user!==n.auth.user.id?e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:d(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},a):e.jsx("div",{className:"d-flex justify-content-end mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-end",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"me-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:d(s.date).format("MM/DD/YYYY H:s")})}),e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})})]}),e.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:s.message})]})},a)):""})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex ","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_3_item_2",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Delivery comment"})]}),e.jsx("div",{id:"kt_accordion_3_item_2",className:"fs-6 collapse p-10 show","data-bs-parent":"#kt_accordion_2",children:l.deliveryComment?l.deliveryComment.map((s,a)=>e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:"EK"})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:d(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},a)):""})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_4_item_3",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Correction requests"})]}),e.jsxs("div",{id:"kt_accordion_4_item_3",className:"fs-6 collapse p-10 ","data-bs-parent":"#kt_accordion_2",children:[e.jsx("div",{className:"mb-10",children:l.correction?l.correction.map((s,a)=>e.jsx("div",{dangerouslySetInnerHTML:N(s)},a)):""}),e.jsxs("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9 mb-10",children:[e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",value:"stg",onChange:b})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Update"})})]})}),e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",value:"ekemia",onChange:b})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Correction"})})]})})]}),e.jsx("div",{children:e.jsx(q.CKEditor,{editor:H,data:"",onReady:s=>{console.log("Editor is ready to use!",s)},onChange:(s,a)=>y(a)})})]})]})]})})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:w,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:C,children:"Continue"})]})]})]})]})]})};z.layout=n=>e.jsx(I,{children:n,auth:n.props.auth});export{z as default};