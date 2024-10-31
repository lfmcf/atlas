import{r as d,W as E,j as e,b as v}from"./app-8c99fabd.js";import{h as y,n as x,o as A,s as I,q as Y,A as B,S as O}from"./AuthenticatedLayout-43490961.js";import{S as H}from"./MenuComponent-0852b483.js";import{F as b}from"./index-fc89f0b0.js";/* empty css                  */import{S as V}from"./StatusComponent-c84748f5.js";import{D as L}from"./Dropzone-b20948e4.js";import{C as z}from"./ConfirmationMessage-398c9cc0.js";import{w as G}from"./sweetalert2-react-content.es-123a8fe8.js";import"./MetronicSplashScreen-bf8f425d.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const U=G(O),W=u=>{const j=d.useRef(null),c=d.useRef(null),[o,l]=d.useState({product_name:"",substance_name:"",dossier_type:"",document_count:""}),[g,C]=d.useState(!1),[k,Z]=d.useState(""),{folder:r}=u;d.useState(r.document);const{data:t,setData:m,post:N,processing:$,errors:J,clearErrors:K,reset:Q}=E({id:r._id,form:r.form,region:r.region,coredoc:r.coredoc,dossier_contact:r.dossier_contact,object:r.object,product_name:r.product_name,substance_name:r.substance_name,country:r.country,dossier_type:r.dossier_type,document_count:r.document_count,deficiency_letter:r.deficiency_letter,chrono:r.chrono,remarks:r.remarks,doc:r&&r.document!==null?r.document:[],docremarks:r.docremarks,request_date:r.request_date,deadline:r.deadline,adjusted_deadline:new Date,adjustedDeadlineComments:"",review_request_date:y(new Date),review_deadline:y(new Date),delivery_comment:"",delivery_version:"",correction_request:"",correction_origin:"",status:r.status,deadlineComments:""});let w=u.countries.map(function(s){return{value:s.name,label:s.name}});d.useEffect(()=>{c.current=H.createInsance(j.current)},[]);const S=s=>{s.preventDefault(),U.fire({title:'Click on "Yes" to submit your request or click on "No, return" to return to the form.',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, proceed!",cancelButtonText:"No, return"}).then(a=>{a.isConfirmed&&N(route("confirm-formatting"))})},D=()=>{C(!1)},q=s=>{N(route("confirm-formatting"))},p=(s,a)=>{a=="product_name"&&l(n=>({...n,product_name:""})),a=="substance_name"&&l(n=>({...n,substance_name:""})),a=="dossier_type"&&l(n=>({...n,dossier_type:""})),m(a,s)},i=s=>{s.target.name=="document_count"&&l(a=>({...a,document_count:""})),m(s.target.name,s.target.value)},F=s=>{let a={...t};a.doc.push(...s),m(a)},P=()=>{if(c.current){if(c.current.getCurrentStepIndex()===1&&(!t.product_name||!t.substance_name||!t.dossier_type||!t.document_count)){t.product_name||l(s=>({...s,product_name:"this field is required"})),t.substance_name||l(s=>({...s,substance_name:"this field is required"})),t.dossier_type||l(s=>({...s,dossier_type:"this field is required"})),t.document_count||l(s=>({...s,document_count:"this field is required"}));return}c.current.getCurrentStepIndex(),c.current.goNext()}},f=s=>({control:a=>({...a,...s&&{borderColor:"red !important"}})}),M=()=>{c.current&&c.current.goPrev()},R=()=>{let s={...t},a=[];s.doc.map(n=>{n.link&&a.push(n.name)}),a.length>0&&v.post("delete-file",{docs:a,id:t.id}),s.doc=[],m(s)},T=s=>{if(s.link){let h=[];h.push(s.name),v.post("delete-file",{docs:h,id:t.id})}var a={...t};let n=a.doc.map(h=>h.name).indexOf(s.name);a.doc.splice(n,1),m(a)},_=s=>{var a;!t.product_name||!t.substance_name||!t.dossier_type||!t.document_count?(t.product_name||l(n=>({...n,product_name:"this field is required"})),t.substance_name||l(n=>({...n,substance_name:"this field is required"})),t.dossier_type||l(n=>({...n,dossier_type:"this field is required"})),t.document_count||l(n=>({...n,document_count:"this field is required"}))):(a=c.current)==null||a.goto(s)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(V,{status:t.status})]}),e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:j,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=c.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General Information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>_(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>_(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Delivery Details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:S,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_contact",value:t.dossier_contact,onChange:i})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",value:t.object,onChange:i})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{htmlFor:"product_name",className:"form-label",title:"Choose the product name to appear in document headers",style:{color:o.product_name?"red":""},children:"Product name (*)"}),e.jsx(x,{options:A,name:"product_name",onChange:s=>p(s,"product_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:f(o.product_name),value:t.product_name,className:"react-select-container",classNamePrefix:"react-select"})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the substance name to appear in document headers",style:{color:o.substance_name?"red":""},children:"Substance name (*)"}),e.jsx(x,{options:I,name:"substance_name",onChange:s=>p(s,"substance_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,value:t.substance_name,className:"react-select-container",classNamePrefix:"react-select",styles:f(o.substance_name)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Country"}),e.jsx(x,{options:w,name:"country",onChange:s=>p(s,"country"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:t.country,className:"react-select-container",classNamePrefix:"react-select"})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the Dossier type ",style:{color:o.dossier_type?"red":""},children:"Dossier type (*)"}),e.jsx(x,{options:Y,name:"dossier_type",onChange:s=>p(s,"dossier_type"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:f(o.dossier_type),value:t.dossier_type,className:"react-select-container",classNamePrefix:"react-select"})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the number of documents for formatting",style:{color:o.document_count?"red":""},children:"Document Count (*)"}),e.jsx("input",{type:"number",className:"form-control form-control-solid",defaultValue:t.document_count,style:{borderColor:o.document_count?"red":""},name:"document_count",onChange:i})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Deficiency Letter"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:t.deficiency_letter,name:"deficiency_letter",onChange:i})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Chrono N°/ Dossier Reference"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"chrono",value:t.chrono,onChange:i})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"remarks",defaultValue:t.remarks,onChange:i})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(L,{files:t.doc,upload:F,deleletFile:T,removeAll:R})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:t.docremarks,placeholder:"",onChange:i})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(b,{"data-enable-time":!0,value:t.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(b,{"data-enable-time":!0,value:t.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsxs("div",{className:"row  mb-10",children:[e.jsxs("div",{className:"col-6 mb-10",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(b,{"data-enable-time":!0,value:t.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>m("adjusted_deadline",s)})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"adjustedDeadlineComments",placeholder:"",onChange:i})]})]})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:M,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:P,children:"Continue"})]})]})]})]}),e.jsx(z,{show:g,onCancel:D,actionType:k,onConfirm:q})]})};W.layout=u=>e.jsx(B,{children:u,auth:u.props.auth});export{W as default};
