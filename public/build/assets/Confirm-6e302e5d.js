import{r as d,W as F,j as e,b as P}from"./app-44650d4d.js";import{h as b,i as m,j as z,s as R,k as I,A as q}from"./AuthenticatedLayout-502b3239.js";import{S as A}from"./MenuComponent-1754c858.js";import{F as h}from"./index-64b1c6e1.js";/* empty css                  */import{S as T}from"./StatusComponent-9b73712f.js";import{D as E}from"./Dropzone-030ce56e.js";import"./MetronicSplashScreen-43bf6ef7.js";const M=o=>{const u=d.useRef(null),n=d.useRef(null),{folder:l}=o,[p,N]=d.useState(l.document),{data:a,setData:c,post:f,processing:H,errors:Y,clearErrors:L,reset:O}=F({id:l._id,form:l.form,region:l.region,coredoc:l.coredoc,dossier_contact:l.dossier_contact,object:l.object,product_name:l.product_name,substance_name:l.substance_name,country:l.country,dossier_type:l.dossier_type,document_count:l.document_count,deficiency_letter:l.deficiency_letter,chrono:l.chrono,remarks:l.remarks,doc:[],request_date:l.request_date,deadline:l.deadline,adjusted_deadline:new Date,adjustedDeadlineComments:"",review_request_date:b(new Date),review_deadline:b(new Date),delivery_comment:"",delivery_version:"",correction_request:"",correction_origin:"",document:"",document_remarks:"",status:l.status,deadlineComments:""});let v=o.countries.map(function(s){return{value:s,label:s}});d.useEffect(()=>{n.current=A.createInsance(u.current)},[]);const _=s=>{s.preventDefault(),f(route("confirm-formatting"))},i=(s,t)=>{c(t,s)},r=s=>{c(s.target.name,s.target.value)},y=s=>{let t={...a};t.doc.push(...s),c(t)},g=()=>{n.current&&(n.current.getCurrentStepIndex(),n.current.getCurrentStepIndex(),n.current.goNext())},C=()=>{n.current&&n.current.goPrev()},k=s=>{var t={...a};t.doc.splice(s,1),c(t)},w=()=>{let s={...a};s.doc=[],c(s)},D=(s,t)=>{P.post("/delete-file",{id:s,file:t}).then(S=>{if(S.status==200){var x=[...p],j=x.indexOf(t);j!==-1&&(x.splice(j,1),N(x))}})};return e.jsxs(e.Fragment,{children:[e.jsx(T,{status:a.status}),e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:u,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General Information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Delivery Details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:_,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_contact",value:a.dossier_contact,onChange:r})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",value:a.object,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Product name"}),e.jsx(m,{options:z,name:"product_name",onChange:s=>i(s,"product_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:a.product_name})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Substance name"}),e.jsx(m,{options:R,name:"substance_name",onChange:s=>i(s,"substance_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:a.substance_name})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Country"}),e.jsx(m,{options:v,name:"country",onChange:s=>i(s,"country"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:a.country})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier type"}),e.jsx(m,{options:I,name:"dossier_type",onChange:s=>i(s,"dossier_type"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:a.dossier_type})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Document Count"}),e.jsx("input",{type:"number",className:"form-control form-control-solid",value:a.document_count,name:"document_count",onChange:r})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Deficiency Letter"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:a.deficiency_letter,name:"deficiency_letter",onChange:r})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Chrono N°/ Dossier Reference"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"chrono",value:a.chrono,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"remarks",defaultValue:a.remarks,onChange:r})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6 mb-10",children:[e.jsx("label",{className:"form-label",children:"Uploaded documents"}),e.jsx("ul",{className:"list-unstyled",children:p?p.map((s,t)=>e.jsx("li",{children:e.jsx("div",{className:"dropzone-items d-flex w-500px mt-1",children:e.jsxs("div",{className:"dropzone-item",children:[e.jsx("div",{className:"dropzone-file",children:e.jsx("div",{className:"dropzone-filename",children:e.jsx("span",{children:e.jsx("a",{href:s.link,target:"blank",className:"text-primary fw-semibold fs-6 me-2",children:s.name})})})}),e.jsx("div",{className:"dropzone-toolbar",children:e.jsx("span",{className:"dropzone-delete",onClick:()=>D(a.id,s),children:e.jsx("i",{className:"bi bi-x fs-1"})})})]})})},t)):""})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Attached documents"}),e.jsx("div",{children:e.jsx(E,{files:a.doc,upload:y,deleletFile:k,removeAll:w})})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",placeholder:"",onChange:r})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(h,{"data-enable-time":!0,value:a.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(h,{"data-enable-time":!0,value:a.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsxs("div",{className:"row  mb-10",children:[e.jsxs("div",{className:"col-6 mb-10",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(h,{"data-enable-time":!0,value:a.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>c("adjusted_deadline",s)})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"adjustedDeadlineComments",placeholder:"",onChange:r})]})]})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:C,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:g,children:"Continue"})]})]})]})]})]})};M.layout=o=>e.jsx(q,{children:o,auth:o.props.auth});export{M as default};