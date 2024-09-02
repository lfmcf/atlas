import{r as p,W as F,j as e,b as _}from"./app-adf32333.js";import{h as v,n as x,o as P,s as R,q as E,A}from"./AuthenticatedLayout-b8c5e2f7.js";import{S as I}from"./MenuComponent-0627201d.js";import{F as b}from"./index-6e26ffc7.js";/* empty css                  */import{S as M}from"./StatusComponent-a197a781.js";import{D as T}from"./Dropzone-a144a11a.js";import"./MetronicSplashScreen-a9a5cf08.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const H=m=>{const j=p.useRef(null),c=p.useRef(null),[o,n]=p.useState({product_name:"",substance_name:"",dossier_type:"",document_count:""}),{folder:a}=m;p.useState(a.document);const{data:t,setData:d,post:y,processing:V,errors:Y,clearErrors:L,reset:O}=F({id:a._id,form:a.form,region:a.region,coredoc:a.coredoc,dossier_contact:a.dossier_contact,object:a.object,product_name:a.product_name,substance_name:a.substance_name,country:a.country,dossier_type:a.dossier_type,document_count:a.document_count,deficiency_letter:a.deficiency_letter,chrono:a.chrono,remarks:a.remarks,doc:a&&a.document!==null?a.document:[],docremarks:a.docremarks,request_date:a.request_date,deadline:a.deadline,adjusted_deadline:new Date,adjustedDeadlineComments:"",review_request_date:v(new Date),review_deadline:v(new Date),delivery_comment:"",delivery_version:"",correction_request:"",correction_origin:"",status:a.status,deadlineComments:""});let g=m.countries.map(function(s){return{value:s.name,label:s.name}});p.useEffect(()=>{c.current=I.createInsance(j.current)},[]);const C=s=>{s.preventDefault(),y(route("confirm-formatting"))},u=(s,r)=>{r=="product_name"&&n(l=>({...l,product_name:""})),r=="substance_name"&&n(l=>({...l,substance_name:""})),r=="dossier_type"&&n(l=>({...l,dossier_type:""})),d(r,s)},i=s=>{s.target.name=="document_count"&&n(r=>({...r,document_count:""})),d(s.target.name,s.target.value)},k=s=>{let r={...t};r.doc.push(...s),d(r)},w=()=>{if(c.current){if(c.current.getCurrentStepIndex()===1&&(!t.product_name||!t.substance_name||!t.dossier_type||!t.document_count)){t.product_name||n(s=>({...s,product_name:"this field is required"})),t.substance_name||n(s=>({...s,substance_name:"this field is required"})),t.dossier_type||n(s=>({...s,dossier_type:"this field is required"})),t.document_count||n(s=>({...s,document_count:"this field is required"}));return}c.current.getCurrentStepIndex(),c.current.goNext()}},f=s=>({control:r=>({...r,...s&&{borderColor:"red !important"}})}),D=()=>{c.current&&c.current.goPrev()},S=()=>{let s={...t},r=[];s.doc.map(l=>{l.link&&r.push(l.name)}),r.length>0&&_.post("delete-file",{docs:r,id:t.id}),s.doc=[],d(s)},q=s=>{if(s.link){let h=[];h.push(s.name),_.post("delete-file",{docs:h,id:t.id})}var r={...t};let l=r.doc.map(h=>h.name).indexOf(s.name);r.doc.splice(l,1),d(r)},N=s=>{var r;!t.product_name||!t.substance_name||!t.dossier_type||!t.document_count?(t.product_name||n(l=>({...l,product_name:"this field is required"})),t.substance_name||n(l=>({...l,substance_name:"this field is required"})),t.dossier_type||n(l=>({...l,dossier_type:"this field is required"})),t.document_count||n(l=>({...l,document_count:"this field is required"}))):(r=c.current)==null||r.goto(s)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(M,{status:t.status})]}),e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:j,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=c.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General Information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>N(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>N(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Delivery Details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:C,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_contact",value:t.dossier_contact,onChange:i})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",value:t.object,onChange:i})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{htmlFor:"product_name",className:"form-label",title:"Choose the product name to appear in document headers",style:{color:o.product_name?"red":""},children:"Product name (*)"}),e.jsx(x,{options:P,name:"product_name",onChange:s=>u(s,"product_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:f(o.product_name),value:t.product_name,className:"react-select-container",classNamePrefix:"react-select"})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the substance name to appear in document headers",style:{color:o.substance_name?"red":""},children:"Substance name (*)"}),e.jsx(x,{options:R,name:"substance_name",onChange:s=>u(s,"substance_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,value:t.substance_name,className:"react-select-container",classNamePrefix:"react-select",styles:f(o.substance_name)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Country"}),e.jsx(x,{options:g,name:"country",onChange:s=>u(s,"country"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:t.country,className:"react-select-container",classNamePrefix:"react-select"})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the Dossier type ",style:{color:o.dossier_type?"red":""},children:"Dossier type (*)"}),e.jsx(x,{options:E,name:"dossier_type",onChange:s=>u(s,"dossier_type"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:f(o.dossier_type),value:t.dossier_type,className:"react-select-container",classNamePrefix:"react-select"})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the number of documents for formatting",style:{color:o.document_count?"red":""},children:"Document Count (*)"}),e.jsx("input",{type:"number",className:"form-control form-control-solid",defaultValue:t.document_count,style:{borderColor:o.document_count?"red":""},name:"document_count",onChange:i})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Deficiency Letter"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:t.deficiency_letter,name:"deficiency_letter",onChange:i})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Chrono N°/ Dossier Reference"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"chrono",value:t.chrono,onChange:i})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"remarks",defaultValue:t.remarks,onChange:i})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(T,{files:t.doc,upload:k,deleletFile:q,removeAll:S})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:t.docremarks,placeholder:"",onChange:i})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(b,{"data-enable-time":!0,value:t.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(b,{"data-enable-time":!0,value:t.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsxs("div",{className:"row  mb-10",children:[e.jsxs("div",{className:"col-6 mb-10",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(b,{"data-enable-time":!0,value:t.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>d("adjusted_deadline",s)})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"adjustedDeadlineComments",placeholder:"",onChange:i})]})]})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:D,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:w,children:"Continue"})]})]})]})]})]})};H.layout=m=>e.jsx(A,{children:m,auth:m.props.auth});export{H as default};
