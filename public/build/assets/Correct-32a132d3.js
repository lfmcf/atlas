import{r as d,W as O,j as e,b as C}from"./app-8c99fabd.js";import{n as ee,h as v,A as se,S as ae}from"./AuthenticatedLayout-43490961.js";import{S as te}from"./MenuComponent-0852b483.js";import{F as _}from"./index-fc89f0b0.js";/* empty css                  */import{d as le,C as re}from"./ckeditor-1a19bf2a.js";import{D as ne}from"./Dropzone-b20948e4.js";import{G as ce}from"./GeneralInformation-04806afb.js";import{P as ie}from"./ProductMetaData-f264cb44.js";import{C as oe}from"./ConfirmationMessage-398c9cc0.js";import{w as de}from"./sweetalert2-react-content.es-123a8fe8.js";import"./MetronicSplashScreen-bf8f425d.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const me=de(ae),pe={startIndex:6,animation:!1,animationSpeed:"0.3s",animationNextClass:"animate__animated animate__slideInRight animate__fast",animationPreviousClass:"animate__animated animate__slideInLeft animate__fast"},ue=u=>{function S(s){return{__html:s.message}}var h=new URLSearchParams(window.location.search);const y=d.useRef(null),m=d.useRef(null);d.useState();const[b,p]=d.useState({dossier_type:"",dossier_count:"",sequence:""}),[D,M]=d.useState(!1),[q,xe]=d.useState(""),{metadata:j,folder:a,metapro:he}=u,{data:l,setData:c,post:k,processing:fe,errors:be,clearErrors:je,reset:Ne}=O({id:a?a._id:"",form:a?a.form:h.get("form"),region:a?a.region:h.get("region"),procedure:a?a.procedure:h.get("procedure"),productName:a?a.product_name:h.get("product"),dossier_contact:a?a.dossier_contact:u.auth.user.trigramme,object:a?a.object:"",country:a.country,dossier_type:a?a.dossier_type:"",dossier_count:a?a.dossier_count:"",remarks:a?a.remarks:"",tracking:a.tracking,submission_description:a?a.submission_description:"",invented_name:a?a.invented_name:"",galenic_form:a.galenic_form,swissmedic:a.swissmedic,galenic_name:a.gemran,dmf:a.dmf_number,pmf:a?a.pmf:"",inn:a.inn,applicant:a.applicant,dmf_holder:a?a.dmf_holder:"",pmf_holder:a?a.pmf_holder:"",agency_code:a.agencyCode,tpa:a.tpa,sequence:a?a.sequence:"",r_sequence:a?a.r_sequence:"",application_type:a?a.application_type:"",mtremarks:a?a.mtremarks:"",indication:a?a.indication:"",drug_substance:a.drug_substance,drug_product:a.drug_product,dosage_form:a?a.dosage_form:"",excipient:a?a.excipient:"",doc:a&&a.doc!==null?a.doc:[],docremarks:a?a.docremarks:"",request_date:new Date,deadline:new Date,adjusted_deadline:new Date,adjustedDeadlineComments:"",correction:{user:{id:u.auth.user.id,name:u.auth.user.name},date:new Date,message:"",source:[]}});d.useEffect(()=>{m.current=te.createInsance(y.current,pe)},[]),d.useEffect(()=>{let s=new Date,t=s.getHours(),r=l.dossier_type?l.dossier_type.delai:"",n;r&&(t<12?n=s.setDate(s.getDate()+r):n=s.setDate(s.getDate()+r+1),c("deadline",new Date(n)))},[l.dossier_type]);const A=()=>{if(m.current){if(m.current.getCurrentStepIndex()===1&&(!l.dossier_type||!l.dossier_count)){l.dossier_type||p(s=>({...s,dossier_type:"this field is required"})),l.dossier_count||p(s=>({...s,dossier_count:"this field is required"}));return}if(m.current.getCurrentStepIndex()===2&&!l.sequence){l.sequence||p(s=>({...s,sequence:"this field is required"}));return}m.current.goNext()}},P=()=>{m.current&&m.current.goPrev()},i=s=>{s.target.name=="dossier_count"&&p(t=>({...t,dossier_count:""})),s.target.name=="sequence"&&p(t=>({...t,sequence:""})),c(s.target.name,s.target.value)},N=(s,t)=>{t=="dossier_type"&&p(r=>({...r,dossier_type:""})),c(t,s)},F=s=>{let t={...l};t.doc.push(...s),c(t)},I=s=>{s.preventDefault(),me.fire({title:'Click on "Yes" to submit your request or click on "No, return" to return to the form.',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, proceed!",cancelButtonText:"No, return"}).then(t=>{t.isConfirmed&&k(route("publishing_ch_post_verify"))})},V=()=>{M(!1)},T=s=>{k(route("publishing_ch_post_verify"))},R=s=>{const t=s.getData();let r={...l};r.correction.message=t,c(r)},w=s=>{let t={...l};if(s.target.checked)t.correction.source.push(s.target.value);else{const r=t.correction.source.indexOf(s.target.value);t.correction.source.splice(r,1)}c(t)},Y=()=>{let s={...l},t=[];s.doc.map(r=>{r.link&&t.push(r.name)}),t.length>0&&C.post("delete-file-pub",{docs:t,id:l.id}),s.doc=[],c(s)},E=s=>{if(s.link){let n=[];n.push(s.name),C.post("delete-file-pub",{docs:n,id:l.id})}var t={...l};let r=t.doc.map(n=>n.name).indexOf(s.name);t.doc.splice(r,1),c(t)},B=s=>({control:t=>({...t,...s&&{borderColor:"red !important"}})}),f=s=>{var t;if((!l.dossier_type||!l.dossier_count)&&(s==2||s==3||s==4||s==5)){console.log(s),l.dossier_type||p(r=>({...r,dossier_type:"this field is required"})),l.dossier_count||p(r=>({...r,dossier_count:"this field is required"}));return}if(!l.sequence&&(s==3||s==4||s==5)){l.sequence||p(r=>({...r,sequence:"this field is required"}));return}(t=m.current)==null||t.goto(s)},H=()=>{c("drug_substance",[...l.drug_substance,{drug_substance:"",manufacturer:""}])},U=()=>{c("drug_product",[...l.drug_product,{drug_product:"",manufacturer:""}])},z=s=>{let t={...l};t.drug_product.splice(s,1),c(t)},G=s=>{let t={...l};t.drug_substance.splice(s,1),c(t)};d.useState(l.drug_substance.map(s=>({label:s.substance,value:s.substance}))),d.useState(l.drug_product.map(s=>({label:s.drug_product,value:s.drug_product})));const[K,L]=d.useState({}),[W,Z]=d.useState({}),$=(s,t)=>{var x;console.log(t);let r={...l};r.drug_substance[s].drug_substance=t?t.value:"",c(r);const n=t==null?void 0:t.value,g=((x=j.drug_substance.find(o=>o.substance===n))==null?void 0:x.ds_manufacturers.map(o=>({label:o.substance_manufacturer,value:o.substance_manufacturer})))||[];L(o=>({...o,[n]:g}))},J=(s,t)=>{var x;let r={...l};r.drug_product[s].drug_product=t?t.value:"",c(r);const n=t==null?void 0:t.value,g=((x=j.drug_product.find(o=>o.drug_product===n))==null?void 0:x.dp_manufacturers.map(o=>({label:o.product_manufacturer,value:o.product_manufacturer})))||[];Z(o=>({...o,[n]:g}))},Q=(s,t)=>{c(r=>{const n=[...r.drug_substance];return n[s]={...n[s],manufacturer:t},{...r,drug_substance:n}})},X=(s,t)=>{c(r=>{const n=[...r.drug_product];return n[s]={...n[s],manufacturer:t},{...r,drug_product:n}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:y,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=m.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=m.current)==null?void 0:s.goto(6)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"6"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 6"}),e.jsx("div",{className:"stepper-desc",children:"Dossier Review"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:I,children:[e.jsxs("div",{className:"mb-5",children:[e.jsx(ce,{data:l,myErrors:b,handleChange:i,handleSelectChange:N,selectStyles:B}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Application number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tracking",defaultValue:l.tracking,onChange:i})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:l.submission_description,onChange:i})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"invented_name",defaultValue:l.invented_name,onChange:i})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Galenic form"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"galenic_form",defaultValue:l.galenic_form,onChange:i})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Authorization number (Swissmedic)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"swissmedic",defaultValue:l.swissmedic,onChange:i})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Galenic name (German)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"galenic_name",defaultValue:l.galenic_name,onChange:i})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"DMF number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dmf",defaultValue:l.dmf,onChange:i})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"PMF number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"pmf",defaultValue:l.pmf,onChange:i})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:l.inn,onChange:i})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:l.agency_code,onChange:i})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Article 13 TPA"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tpa",defaultValue:l.tpa,onChange:i})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:b.sequence?"red":""},children:"eCTD Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",style:{borderColor:b.sequence?"red":""},defaultValue:l.sequence,onChange:i})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related eCTD sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:l.r_sequence,onChange:i})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Application type"}),e.jsx(ee,{options:[{label:"Used for meetings",value:"Used for meetings"},{label:"New Application - New Active Substance (na-nas)",value:"New Application - New Active Substance (na-nas)"},{label:"New Application - Known Active Substance (na-bws)",value:"New Application - Known Active Substance (na-bws)"},{label:"New Application - Co-Marketing Medical Product (na-co-marketing)",value:"New Application - Co-Marketing Medical Product (na-co-marketing)"},{label:"New Application - Parallel Import (na-pi)",value:"New Application - Parallel Import (na-pi)"},{label:"Variation Type IA",value:"Variation Type IA"},{label:"Variation Type IA for immediate notification",value:"Variation Type IA for immediate notification"},{label:"Variation Type IB",value:"Variation Type IB"},{label:"Variation Type II",value:"Variation Type II"},{label:"Extension",value:"Extension"},{label:"Renewal - Prolongation, renouncement of prolongation of Marketing Authorization",value:"Renewal - Prolongation, renouncement of prolongation of Marketing Authorization"},{label:"Follow-up Measure",value:"Follow-up Measure"},{label:"Submission of PSUR",value:"Submission of PSUR"},{label:"Withdrawal of authorised medical products",value:"Withdrawal of authorised medical products"},{label:"Transfer of Marketing Authorization, change of name or address of applicant",value:"Transfer of Marketing Authorization, change of name or address of applicant"},{label:"Drug Master File",value:"Drug Master File"},{label:"Plasma Master File",value:"Plasma Master File"},{label:"Application for recognition of orphan drug status or fast track status",value:"Application for recognition of orphan drug status or fast track status"},{label:"Reformat : Baseline eCTD submission. No content change, no review",value:"Reformat : Baseline eCTD submission. No content change, no review"},{label:"Suupplemental information (could include for example response to content validation issuers or answers to question)",value:"Suupplemental information (could include for example response to content validation issuers or answers to question)"},{label:"Correction of errors detected in a sequence",value:"Correction of errors detected in a sequence"}],name:"application_type",onChange:s=>N(s,"application_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.application_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:l.mtremarks,name:"mtremarks",onChange:i})]})})]}),e.jsx(ie,{metadata:j,data:l,handleSelectChange:N,handleDrugSubstanceChange:$,handleManufacturerChange:Q,handleDrugProductChange:J,handleDpManufacturerChange:X,manufacturerOptions:K,dpmanufacturerOptions:W,addDrugSubstanceFields:H,addDrugProductFields:U,removeDrugProductFields:z,removeDrugSubstanceFields:G}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(ne,{files:l.doc,upload:F,deleletFile:E,removeAll:Y})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:l.docremarks,placeholder:"",onChange:i})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(_,{"data-enable-time":!0,value:l.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(_,{"data-enable-time":!0,value:l.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",title:"Provider's actual deadline",children:"Operational deadline"}),e.jsx(_,{"data-enable-time":!0,value:l.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>c("adjusted_deadline",s)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:i})]})})]}),e.jsx("div",{className:"flex-column current","data-kt-stepper-element":"content",children:e.jsxs("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_2",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_1",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier audit"})]}),e.jsx("div",{id:"kt_accordion_2_item_1",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:e.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:a.audit?a.audit.map((s,t)=>s.message&&s.user!==u.auth.user.id?e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:v(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},t):e.jsx("div",{className:"d-flex justify-content-end mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-end",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"me-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:v(s.date).format("MM/DD/YYYY H:s")})}),e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})})]}),e.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:s.message})]})},t)):""})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_3_item_2",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Delivery comment"})]}),e.jsx("div",{id:"kt_accordion_3_item_2",className:"fs-6 collapse p-10 show","data-bs-parent":"#kt_accordion_2",children:a.deliveryComment?a.deliveryComment.map((s,t)=>e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:"EK"})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:v(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},t)):""})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_4_item_3",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Correction requests"})]}),e.jsxs("div",{id:"kt_accordion_4_item_3",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:[e.jsx("div",{className:"mb-10",children:a.correction?a.correction.map((s,t)=>e.jsx("div",{dangerouslySetInnerHTML:S(s)},t)):""}),e.jsxs("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9 mb-10",children:[e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",value:"stg",onChange:w})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Update"})})]})}),e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",value:"ekemia",onChange:w})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Correction"})})]})})]}),e.jsx("div",{children:e.jsx(le.CKEditor,{editor:re,data:"",onReady:s=>{console.log("Editor is ready to use!",s)},onChange:(s,t)=>R(t)})})]})]})]})})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:P,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:A,children:"Continue"})]})]})]})]}),e.jsx(oe,{show:D,onCancel:V,actionType:q,onConfirm:T})]})};ue.layout=u=>e.jsx(se,{children:u,auth:u.props.auth});export{ue as default};