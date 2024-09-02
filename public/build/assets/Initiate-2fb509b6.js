import{r as h,W as R,j as e,b as k}from"./app-adf32333.js";import{h as N,n as f,o as V,s as T,q as A,A as I}from"./AuthenticatedLayout-b8c5e2f7.js";import{S as M}from"./MenuComponent-0627201d.js";import{F as C}from"./index-6e26ffc7.js";/* empty css                  */import{D as H}from"./Dropzone-a144a11a.js";import{S as L}from"./StatusComponent-a197a781.js";import"./MetronicSplashScreen-a9a5cf08.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const U=d=>{var _=new URLSearchParams(window.location.search);const v=h.useRef(null),c=h.useRef(null),[i,n]=h.useState({product_name:"",substance_name:"",dossier_type:"",document_count:""}),{folder:a}=d;var p=d.auth.user.trigramme;p=p==null?void 0:p.toUpperCase();const{data:t,setData:m,post:w,processing:O,errors:Y,clearErrors:z,reset:B}=R({id:a?a._id:"",form:a?a.form:"Formatting",region:a?a.region:_.get("region"),coredoc:a?a.coreDoc:_.get("coreDoc"),dossier_contact:a?a.dossier_contact:p,object:a?a.object:"",product_name:a?a.product_name:"",substance_name:a?a.substance_name:"",country:a?a.country:"",dossier_type:a?a.dossier_type:"",document_count:a?a.document_count:"",deficiency_letter:a?a.deficiency_letter:"",chrono:a?a.chrono:"",remarks:a?a.remarks:"",doc:a&&a.document!==null?a.document:[],docremarks:a?a.docremarks:"",request_date:new Date,deadline:new Date,adjusted_deadline:N(new Date),delivery_remarks:"",review_request_date:N(new Date),review_deadline:N(new Date),delivery_comment:"",delivery_version:"",correction_request:"",correction_origin:"",status:a?a.status:"",created_by:d.auth.user.id});let D=d.countries.map(function(s){return{value:s.name,label:s.name,code:s.code}});h.useEffect(()=>{c.current=M.createInsance(v.current)},[]);const S=()=>{if(c.current){if(c.current.getCurrentStepIndex()===1&&(!t.product_name||!t.substance_name||!t.dossier_type||!t.document_count)){t.product_name||n(s=>({...s,product_name:"this field is required"})),t.substance_name||n(s=>({...s,substance_name:"this field is required"})),t.dossier_type||n(s=>({...s,dossier_type:"this field is required"})),t.document_count||n(s=>({...s,document_count:"this field is required"}));return}c.current.getCurrentStepIndex(),c.current.goNext()}},P=()=>{c.current&&c.current.goPrev()},b=s=>({control:r=>({...r,...s&&{borderColor:"red !important"}})}),u=s=>{s.target.name=="document_count"&&n(r=>({...r,document_count:""})),m(s.target.name,s.target.value)},q=s=>{let r={...t};r.doc.push(...s),m(r)},F=()=>{let s={...t},r=[];s.doc.map(l=>{l.link&&r.push(l.name)}),r.length>0&&k.post("delete-file",{docs:r,id:t.id}),s.doc=[],m(s)},E=s=>{if(s.link){let o=[];o.push(s.name),k.post("delete-file",{docs:o,id:t.id})}var r={...t};let l=r.doc.map(o=>o.name).indexOf(s.name);r.doc.splice(l,1),m(r)},x=(s,r)=>{r=="product_name"&&n(l=>({...l,product_name:""})),r=="substance_name"&&n(l=>({...l,substance_name:""})),r=="dossier_type"&&n(l=>({...l,dossier_type:""})),m(r,s)};h.useEffect(()=>{let s=new Date,r=s.getHours(),l=t.dossier_type?t.dossier_type.delai:0,o=new Date,g=1;for(r<12?l=l:l=l+1;g<l;)o=new Date(s.setDate(s.getDate()+1)),o.getDay()!=0&&o.getDay()!=6&&g++;m("deadline",new Date(o))},[t.dossier_type]);const j=(s,r)=>{s.preventDefault(),w(route("initiate-formatting",{type:r}))},y=s=>{var r;!t.product_name||!t.substance_name||!t.dossier_type||!t.document_count?(t.product_name||n(l=>({...l,product_name:"this field is required"})),t.substance_name||n(l=>({...l,substance_name:"this field is required"})),t.dossier_type||n(l=>({...l,dossier_type:"this field is required"})),t.document_count||n(l=>({...l,document_count:"this field is required"}))):(r=c.current)==null||r.goto(s)};return e.jsxs(e.Fragment,{children:[a?e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(L,{status:t.status})]}):"",e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:v,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=c.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General Information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>y(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>y(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Delivery Details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:j,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Trigram of the current user",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.dossier_contact,name:"dossier_contact",disabled:!0})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{htmlFor:"object",className:"form-label","data-toggle":"tooltip",title:"Enter a Dossier Title. Ex : Variation Prick ragweed irradiation",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.object,name:"object",id:"object",title:"Enter a Dossier Title. Ex : Variation Prick ragweed irradiation",onChange:u})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{htmlFor:"product_name",className:"form-label",title:"Choose the product name to appear in document headers",style:{color:i.product_name?"red":""},children:"Product name (*)"}),e.jsx(f,{options:V,name:"product_name",onChange:s=>x(s,"product_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:b(i.product_name),value:t.product_name,className:"react-select-container",classNamePrefix:"react-select"})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the substance name to appear in document headers",style:{color:i.substance_name?"red":""},children:"Substance name (*)"}),e.jsx(f,{options:T,name:"substance_name",onChange:s=>x(s,"substance_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,value:t.substance_name,className:"react-select-container",classNamePrefix:"react-select",styles:b(i.substance_name)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose a country if applicable",children:"Country"}),e.jsx(f,{options:D,name:"country",onChange:s=>x(s,"country"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:t.country,className:"react-select-container",classNamePrefix:"react-select"})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the Dossier type ",style:{color:i.dossier_type?"red":""},children:"Dossier type (*)"}),e.jsx(f,{options:A,name:"dossier_type",onChange:s=>x(s,"dossier_type"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:b(i.dossier_type),value:t.dossier_type,className:"react-select-container",classNamePrefix:"react-select"})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the number of documents for formatting",style:{color:i.document_count?"red":""},children:"Document Count (*)"}),e.jsx("input",{type:"number",className:"form-control form-control-solid",defaultValue:t.document_count,style:{borderColor:i.document_count?"red":""},name:"document_count",onChange:u})]}),e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Deficiency Letter"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.deficiency_letter,name:"deficiency_letter",onChange:u})]}),e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Chrono N°/ Dossier Reference"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"chrono",defaultValue:t.chrono,onChange:u})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",title:"Provide dossier description or additional comments ",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:t.remarks,name:"remarks",onChange:u})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",title:"Attach one or more files, e.g., Metadata file.",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(H,{files:t.doc,upload:q,deleletFile:E,removeAll:F})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:t.docremarks,placeholder:"",onChange:u})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",title:"Automatic Field for the request submission date",children:"Request date"}),e.jsx(C,{"data-enable-time":!0,value:t.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",title:"Calculated field for the delivery date based on dossier type",children:"Delivery deadline"}),e.jsx(C,{"data-enable-time":!0,value:t.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"mb-10"})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:P,children:"Back"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"btn btn-primary m-3","data-kt-stepper-action":"submit",onClick:s=>j(s,"save"),children:e.jsx("span",{className:"indicator-label",children:"Save"})}),e.jsxs("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"submit",onClick:s=>j(s,"submit"),children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:S,children:"Continue"})]})]})]})]})]})};U.layout=d=>e.jsx(I,{children:d,auth:d.props.auth});export{U as default};
