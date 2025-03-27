import{r as d,W as P,j as e}from"./app-85cb43ee.js";import{h as _,n as p,o as F,s as M,q as T,A as R,S as E}from"./AuthenticatedLayout-ef394a1f.js";import{S as I}from"./MenuComponent-3b167d93.js";import{F as x}from"./index-6a50e7dd.js";/* empty css                  */import{S as Y}from"./StatusComponent-567739d4.js";import{C as A}from"./ConfirmationMessage-d197c8e3.js";import{w as B}from"./sweetalert2-react-content.es-4637ec6b.js";import"./MetronicSplashScreen-1bb87bb1.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const H=B(E),O=m=>{const b=d.useRef(null),l=d.useRef(null),[c,o]=d.useState({product_name:"",substance_name:"",dossier_type:"",document_count:""}),[N,y]=d.useState(!1),[v,L]=d.useState(""),{folder:a}=m;d.useState(a.document);const{data:t,setData:h,post:j,processing:V,errors:z,clearErrors:G,reset:W}=P({id:a._id,form:a.form,region:a.region,coredoc:a.coredoc,dossier_contact:a.dossier_contact,object:a.object,product_name:a.product_name,substance_name:a.substance_name,country:a.country,dossier_type:a.dossier_type,document_count:a.document_count,deficiency_letter:a.deficiency_letter,chrono:a.chrono,remarks:a.remarks,doc:a&&a.document!==null?a.document:[],docremarks:a.docremarks,request_date:a.request_date,deadline:a.deadline,adjusted_deadline:new Date,adjustedDeadlineComments:"",review_request_date:_(new Date),review_deadline:_(new Date),delivery_comment:"",delivery_version:"",correction_request:"",correction_origin:"",status:a.status,deadlineComments:""});let g=m.countries.map(function(s){return{value:s.name,label:s.name,code:s.code}});d.useEffect(()=>{l.current=I.createInsance(b.current)},[]);const C=s=>{s.preventDefault(),H.fire({title:'Click on "Yes" to submit your request or click on "No, return" to return to the form.',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, proceed!",cancelButtonText:"No, return"}).then(r=>{r.isConfirmed&&j(route("confirm-formatting"))})},k=()=>{y(!1)},w=s=>{j(route("confirm-formatting"))},u=(s,r)=>{r=="product_name"&&o(n=>({...n,product_name:""})),r=="substance_name"&&o(n=>({...n,substance_name:""})),r=="dossier_type"&&o(n=>({...n,dossier_type:""})),h(r,s)},i=s=>{s.target.name=="document_count"&&o(r=>({...r,document_count:""})),h(s.target.name,s.target.value)},S=()=>{if(l.current){if(l.current.getCurrentStepIndex()===1&&(!t.product_name||!t.substance_name||!t.dossier_type||!t.document_count)){t.product_name||o(s=>({...s,product_name:"this field is required"})),t.substance_name||o(s=>({...s,substance_name:"this field is required"})),t.dossier_type||o(s=>({...s,dossier_type:"this field is required"})),t.document_count||o(s=>({...s,document_count:"this field is required"}));return}l.current.getCurrentStepIndex(),l.current.goNext()}},f=s=>({control:r=>({...r,...s&&{borderColor:"red !important"}})}),D=()=>{l.current&&l.current.goPrev()},q=s=>{var r;!t.product_name||!t.substance_name||!t.dossier_type||!t.document_count?(t.product_name||o(n=>({...n,product_name:"this field is required"})),t.substance_name||o(n=>({...n,substance_name:"this field is required"})),t.dossier_type||o(n=>({...n,dossier_type:"this field is required"})),t.document_count||o(n=>({...n,document_count:"this field is required"}))):(r=l.current)==null||r.goto(s)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(Y,{status:t.status})]}),e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:b,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=l.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General Information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>q(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Delivery Details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:C,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_contact",value:t.dossier_contact,onChange:i})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",value:t.object,onChange:i})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{htmlFor:"product_name",className:"form-label",title:"Choose the product name to appear in document headers",style:{color:c.product_name?"red":""},children:"Product name (*)"}),e.jsx(p,{options:F,name:"product_name",onChange:s=>u(s,"product_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:f(c.product_name),value:t.product_name,className:"react-select-container",classNamePrefix:"react-select"})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the substance name to appear in document headers",style:{color:c.substance_name?"red":""},children:"Substance name (*)"}),e.jsx(p,{options:M,name:"substance_name",onChange:s=>u(s,"substance_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,value:t.substance_name,className:"react-select-container",classNamePrefix:"react-select",styles:f(c.substance_name)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Country"}),e.jsx(p,{options:g,name:"country",onChange:s=>u(s,"country"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:t.country,className:"react-select-container",classNamePrefix:"react-select"})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the Dossier type ",style:{color:c.dossier_type?"red":""},children:"Dossier type (*)"}),e.jsx(p,{options:T,name:"dossier_type",onChange:s=>u(s,"dossier_type"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:f(c.dossier_type),value:t.dossier_type,className:"react-select-container",classNamePrefix:"react-select"})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the number of documents for formatting",style:{color:c.document_count?"red":""},children:"Document Count (*)"}),e.jsx("input",{type:"number",className:"form-control form-control-solid",defaultValue:t.document_count,style:{borderColor:c.document_count?"red":""},name:"document_count",onChange:i})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Deficiency Letter"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:t.deficiency_letter,name:"deficiency_letter",onChange:i})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Chrono N°/ Dossier Reference"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"chrono",value:t.chrono,onChange:i})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"remarks",defaultValue:t.remarks,onChange:i})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(x,{"data-enable-time":!0,value:t.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(x,{"data-enable-time":!0,value:t.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsxs("div",{className:"row  mb-10",children:[e.jsxs("div",{className:"col-6 mb-10",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(x,{"data-enable-time":!0,value:t.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>h("adjusted_deadline",s)})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"adjustedDeadlineComments",placeholder:"",onChange:i})]})]})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:D,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:S,children:"Continue"})]})]})]})]}),e.jsx(A,{show:N,onCancel:k,actionType:v,onConfirm:w})]})};O.layout=m=>e.jsx(R,{children:m,auth:m.props.auth});export{O as default};
