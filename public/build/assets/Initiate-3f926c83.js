import{r as m,W as I,j as e,b as C}from"./app-aa00f54c.js";import{h as N,n as x,o as Y,s as B,q as O,A as H,S as L}from"./AuthenticatedLayout-a0ed8d6b.js";import{S as U}from"./MenuComponent-64f519e7.js";import{F as w}from"./index-a59bbbf6.js";/* empty css                  */import{D as z}from"./Dropzone-03edb4d7.js";import{S as G}from"./StatusComponent-eb00a0da.js";import{C as W}from"./ConfirmationMessage-6f962019.js";import{w as Z}from"./sweetalert2-react-content.es-01ac0e2d.js";import"./MetronicSplashScreen-89880b49.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const $=Z(L),J=d=>{var _=new URLSearchParams(window.location.search);const v=m.useRef(null),o=m.useRef(null),[i,n]=m.useState({product_name:"",substance_name:"",dossier_type:"",document_count:""}),[D,S]=m.useState(!1),[q,K]=m.useState(""),{folder:a}=d;var h=d.auth.user.trigramme;h=h==null?void 0:h.toUpperCase();const{data:t,setData:u,post:y,processing:Q,errors:X,clearErrors:ee,reset:se}=I({id:a?a._id:"",form:a?a.form:"Formatting",region:a?a.region:_.get("region"),coredoc:a?a.coreDoc:_.get("coreDoc"),dossier_contact:a?a.dossier_contact:h,object:a?a.object:"",product_name:a?a.product_name:"",substance_name:a?a.substance_name:"",country:a?a.country:"",dossier_type:a?a.dossier_type:"",document_count:a?a.document_count:"",deficiency_letter:a?a.deficiency_letter:"",chrono:a?a.chrono:"",remarks:a?a.remarks:"",doc:a&&a.document!==null?a.document:[],docremarks:a?a.docremarks:"",request_date:new Date,deadline:new Date,adjusted_deadline:N(new Date),delivery_remarks:"",review_request_date:N(new Date),review_deadline:N(new Date),delivery_comment:"",delivery_version:"",correction_request:"",correction_origin:"",status:a?a.status:"",created_by:d.auth.user.id});let P=d.countries.map(function(s){return{value:s.name,label:s.name,code:s.code}});m.useEffect(()=>{o.current=U.createInsance(v.current)},[]);const F=()=>{if(o.current){if(o.current.getCurrentStepIndex()===1&&(!t.product_name||!t.substance_name||!t.dossier_type||!t.document_count)){t.product_name||n(s=>({...s,product_name:"this field is required"})),t.substance_name||n(s=>({...s,substance_name:"this field is required"})),t.dossier_type||n(s=>({...s,dossier_type:"this field is required"})),t.document_count||n(s=>({...s,document_count:"this field is required"}));return}o.current.getCurrentStepIndex(),o.current.goNext()}},E=()=>{o.current&&o.current.goPrev()},b=s=>({control:r=>({...r,...s&&{borderColor:"red !important"}})}),p=s=>{s.target.name=="document_count"&&n(r=>({...r,document_count:""})),u(s.target.name,s.target.value)},T=s=>{let r={...t};r.doc.push(...s),u(r)},R=()=>{let s={...t},r=[];s.doc.map(l=>{l.link&&r.push(l.name)}),r.length>0&&C.post("delete-file",{docs:r,id:t.id}),s.doc=[],u(s)},M=s=>{if(s.link){let c=[];c.push(s.name),C.post("delete-file",{docs:c,id:t.id})}var r={...t};let l=r.doc.map(c=>c.name).indexOf(s.name);r.doc.splice(l,1),u(r)},f=(s,r)=>{r=="product_name"&&n(l=>({...l,product_name:""})),r=="substance_name"&&n(l=>({...l,substance_name:""})),r=="dossier_type"&&n(l=>({...l,dossier_type:""})),u(r,s)};m.useEffect(()=>{let s=new Date,r=s.getHours(),l=t.dossier_type?t.dossier_type.delai:0,c=new Date,k=1;for(r<12?l=l:l=l+1;k<l;)c=new Date(s.setDate(s.getDate()+1)),c.getDay()!=0&&c.getDay()!=6&&k++;u("deadline",new Date(c))},[t.dossier_type]);const j=(s,r)=>{s.preventDefault(),$.fire({title:r=="save"?'Click on "Yes" to save your request or click on "No, return" to return to the form.':'Click on "Yes" to submit your request or click on "No, return" to return to the form.',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, proceed!",cancelButtonText:"No, return"}).then(l=>{l.isConfirmed&&y(route("initiate-formatting",{type:r}))})},V=()=>{S(!1)},A=s=>{y(route("initiate-formatting",{type:s}))},g=s=>{var r;!t.product_name||!t.substance_name||!t.dossier_type||!t.document_count?(t.product_name||n(l=>({...l,product_name:"this field is required"})),t.substance_name||n(l=>({...l,substance_name:"this field is required"})),t.dossier_type||n(l=>({...l,dossier_type:"this field is required"})),t.document_count||n(l=>({...l,document_count:"this field is required"}))):(r=o.current)==null||r.goto(s)};return e.jsxs(e.Fragment,{children:[a?e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(G,{status:t.status})]}):"",e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:v,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=o.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General Information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>g(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>g(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Delivery Details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:j,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Trigram of the current user",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.dossier_contact,name:"dossier_contact",disabled:!0})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{htmlFor:"object",className:"form-label","data-toggle":"tooltip",title:"Enter a Dossier Title. Ex : Variation Prick ragweed irradiation",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.object,name:"object",id:"object",title:"Enter a Dossier Title. Ex : Variation Prick ragweed irradiation",onChange:p})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{htmlFor:"product_name",className:"form-label",title:"Choose the product name to appear in document headers",style:{color:i.product_name?"red":""},children:"Product name (*)"}),e.jsx(x,{options:Y,name:"product_name",onChange:s=>f(s,"product_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:b(i.product_name),value:t.product_name,className:"react-select-container",classNamePrefix:"react-select"})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the substance name to appear in document headers",style:{color:i.substance_name?"red":""},children:"Substance name (*)"}),e.jsx(x,{options:B,name:"substance_name",onChange:s=>f(s,"substance_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,value:t.substance_name,className:"react-select-container",classNamePrefix:"react-select",styles:b(i.substance_name)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose a country if applicable",children:"Country"}),e.jsx(x,{options:P,name:"country",onChange:s=>f(s,"country"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:t.country,className:"react-select-container",classNamePrefix:"react-select"})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the Dossier type ",style:{color:i.dossier_type?"red":""},children:"Dossier type (*)"}),e.jsx(x,{options:O,name:"dossier_type",onChange:s=>f(s,"dossier_type"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:b(i.dossier_type),value:t.dossier_type,className:"react-select-container",classNamePrefix:"react-select"})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the number of documents for formatting",style:{color:i.document_count?"red":""},children:"Document Count (*)"}),e.jsx("input",{type:"number",className:"form-control form-control-solid",defaultValue:t.document_count,style:{borderColor:i.document_count?"red":""},name:"document_count",onChange:p})]}),e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Deficiency Letter"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.deficiency_letter,name:"deficiency_letter",onChange:p})]}),e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Chrono N°/ Dossier Reference"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"chrono",defaultValue:t.chrono,onChange:p})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",title:"Provide dossier description or additional comments ",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:t.remarks,name:"remarks",onChange:p})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",title:"Attach one or more files, e.g., Metadata file.",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(z,{files:t.doc,upload:T,deleletFile:M,removeAll:R})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:t.docremarks,placeholder:"",onChange:p})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",title:"Automatic Field for the request submission date",children:"Request date"}),e.jsx(w,{"data-enable-time":!0,value:t.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",title:"Calculated field for the delivery date based on dossier type",children:"Delivery deadline"}),e.jsx(w,{"data-enable-time":!0,value:t.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"mb-10"})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:E,children:"Back"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"btn btn-primary m-3","data-kt-stepper-action":"submit",onClick:s=>j(s,"save"),children:e.jsx("span",{className:"indicator-label",children:"Save"})}),e.jsxs("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"submit",onClick:s=>j(s,"submit"),children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:F,children:"Continue"})]})]})]})]}),e.jsx(W,{show:D,onCancel:V,actionType:q,onConfirm:A})]})};J.layout=d=>e.jsx(H,{children:d,auth:d.props.auth});export{J as default};