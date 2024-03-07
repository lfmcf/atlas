import{r as f,W as T,j as e,b as k}from"./app-2a97567e.js";import{n as o,h as j,A as R}from"./AuthenticatedLayout-b6856e27.js";import{S as F}from"./MenuComponent-38ef0f8e.js";import{F as v}from"./index-aadd9614.js";/* empty css                  */import{d as E,C as z}from"./ckeditor-b3934ee3.js";import{D as Y}from"./Dropzone-8baf59bd.js";import"./MetronicSplashScreen-ac0d23d6.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const B={startIndex:6,animation:!1,animationSpeed:"0.3s",animationNextClass:"animate__animated animate__slideInRight animate__fast",animationPreviousClass:"animate__animated animate__slideInLeft animate__fast"},U=u=>{function w(s){return{__html:s.message}}var b=new URLSearchParams(window.location.search);const g=f.useRef(null),d=f.useRef(null),[_,H]=f.useState(),[h,m]=f.useState({dossier_type:"",dossier_count:"",sequence:""}),{metadata:O,folder:a,metapro:r}=u,{data:l,setData:p,post:C,processing:L,errors:G,clearErrors:K,reset:W}=T({id:a?a._id:"",form:a?a.form:b.get("form"),region:a?a.region:b.get("region"),procedure:a?a.procedure:b.get("procedure"),product_name:a?a.product_name:b.get("product"),dossier_contact:a?a.dossier_contact:u.auth.user.trigramme,object:a?a.object:"",country:a.country,dossier_type:a?a.dossier_type:"",dossier_count:a?a.dossier_count:"",remarks:a?a.remarks:"",tracking:a.tracking,submission_description:a?a.submission_description:"",invented_name:a?a.invented_name:"",galenic_form:a.galenic_form,swissmedic:a.swissmedic,galenic_name:a.gemran,dmf:a.dmf_number,pmf:a?a.pmf:"",inn:a.inn,applicant:a.applicant,dmf_holder:a?a.dmf_holder:"",pmf_holder:a?a.pmf_holder:"",agency_code:a.agencyCode,tpa:a.tpa,sequence:a?a.sequence:"",r_sequence:a?a.r_sequence:"",application_type:a?a.application_type:"",mtremarks:a?a.mtremarks:"",indication:a?a.indication:"",manufacturer:a?a.manufacturer:"",drug_substance:a?a.drug_substance:"",drug_substance_manufacturer:a?a.drug_substance_manufacturer:"",drug_product:a?a.drug_product:"",drug_product_manufacturer:a?a.drug_product_manufacturer:"",dosage_form:a?a.dosage_form:"",excipient:a?a.excipient:"",doc:a&&a.doc!==null?a.doc:[],docremarks:a?a.docremarks:"",request_date:new Date,deadline:new Date,adjusted_deadline:new Date,adjustedDeadlineComments:"",correction:{user:{id:u.auth.user.id,name:u.auth.user.name},date:new Date,message:"",source:[]}});f.useEffect(()=>{d.current=F.createInsance(g.current,B)},[]),f.useEffect(()=>{let s=new Date,t=s.getHours(),n=l.dossier_type?l.dossier_type.delai:"",x;n&&(t<12?x=s.setDate(s.getDate()+n):x=s.setDate(s.getDate()+n+1),p("deadline",new Date(x)))},[l.dossier_type]);const D=()=>{if(d.current){if(d.current.getCurrentStepIndex()===1&&(!l.dossier_type||!l.dossier_count)){l.dossier_type||m(s=>({...s,dossier_type:"this field is required"})),l.dossier_count||m(s=>({...s,dossier_count:"this field is required"}));return}if(d.current.getCurrentStepIndex()===2&&!l.sequence){l.sequence||m(s=>({...s,sequence:"this field is required"}));return}d.current.goNext()}},P=()=>{d.current&&d.current.goPrev()},c=s=>{s.target.name=="dossier_count"&&m(t=>({...t,dossier_count:""})),s.target.name=="sequence"&&m(t=>({...t,sequence:""})),p(s.target.name,s.target.value)},i=(s,t)=>{t=="dossier_type"&&m(n=>({...n,dossier_type:""})),p(t,s)},S=s=>{let t={...l};t.doc.push(...s),p(t)},M=s=>{s.preventDefault(),C(route("correct-publishing"))},q=s=>{const t=s.getData();let n={...l};n.correction.message=t,p(n)},y=s=>{let t={...l};if(s.target.checked)t.correction.source.push(s.target.value);else{const n=t.correction.source.indexOf(s.target.value);t.correction.source.splice(n,1)}p(t)},A=()=>{let s={...l},t=[];s.doc.map(n=>{n.link&&t.push(n.name)}),t.length>0&&k.post("delete-file-pub",{docs:t,id:l.id}),s.doc=[],p(s)},I=s=>{if(s.link){let x=[];x.push(s.name),k.post("delete-file-pub",{docs:x,id:l.id})}var t={...l};let n=t.doc.map(x=>x.name).indexOf(s.name);t.doc.splice(n,1),p(t)},V=s=>({control:t=>({...t,...s&&{borderColor:"red !important"}})}),N=s=>{var t;if((!l.dossier_type||!l.dossier_count)&&(s==2||s==3||s==4||s==5)){console.log(s),l.dossier_type||m(n=>({...n,dossier_type:"this field is required"})),l.dossier_count||m(n=>({...n,dossier_count:"this field is required"}));return}if(!l.sequence&&(s==3||s==4||s==5)){l.sequence||m(n=>({...n,sequence:"this field is required"}));return}(t=d.current)==null||t.goto(s)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:g,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=d.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>N(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>N(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>N(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>N(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=d.current)==null?void 0:s.goto(6)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"6"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 6"}),e.jsx("div",{className:"stepper-desc",children:"Dossier Review"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:M,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:l.dossier_contact,name:"dossier_contact",readOnly:!0,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",defaultValue:l.object,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"product_name",defaultValue:l.product_name,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission country"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"country",defaultValue:l.country.value,disabled:!0})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the Dossier type",style:{color:h.dossier_type?"red":""},children:"Dossier type (*)"}),e.jsx(o,{options:[{label:"Baseline Dossier (M1-M2-M3)",value:"Baseline Dossier (M1-M2-M3)",delai:5},{label:"Baseline Dossier (M1-M5)",value:"Baseline Dossier (M1-M5)",delai:9},{label:"Marketing Authorisation Dossier / BLA (m1-m5)",value:"Marketing Authorisation Dossier / BLA (m1-m5)",delai:9},{label:"Renewal Dossier",value:"Renewal Dossier",delai:9},{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier"},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:s=>i(s,"dossier_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.dossier_type,menuPortalTarget:document.body,styles:V(h.dossier_type)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the number of documents in Publishing dossier",style:{color:h.dossier_count?"red":""},children:"Dossier count (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_count",defaultValue:l.dossier_count,style:{borderColor:h.dossier_count?"red":""},onChange:c})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:l.remarks,name:"remarks",onChange:c})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Application number"}),e.jsx(o,{options:_||"",name:"tracking",onChange:s=>i(s,"tracking"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.tracking,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:l.submission_description,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"invented_name",defaultValue:l.invented_name,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Galenic form"}),e.jsx(o,{options:[],name:"galenic_form",onChange:s=>i(s,"galenic_form"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.galenic_form,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Authorization number (Swissmedic)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"swissmedic",defaultValue:l.swissmedic,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Galenic name (German)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"galenic_name",defaultValue:l.galenic_name,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"DMF number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dmf",defaultValue:l.dmf,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"PMF number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"pmf",defaultValue:l.pmf,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:l.inn,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:l.agency_code,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Article 13 TPA"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tpa",defaultValue:l.tpa,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:h.sequence?"red":""},children:"eCTD Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",style:{borderColor:h.sequence?"red":""},defaultValue:l.sequence,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related eCTD sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:l.r_sequence,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Application type"}),e.jsx(o,{options:[{label:"Used for meetings",value:"Used for meetings"},{label:"New Application - New Active Substance (na-nas)",value:"New Application - New Active Substance (na-nas)"},{label:"New Application - Known Active Substance (na-bws)",value:"New Application - Known Active Substance (na-bws)"},{label:"New Application - Co-Marketing Medical Product (na-co-marketing)",value:"New Application - Co-Marketing Medical Product (na-co-marketing)"},{label:"New Application - Parallel Import (na-pi)",value:"New Application - Parallel Import (na-pi)"},{label:"Variation Type IA",value:"Variation Type IA"},{label:"Variation Type IA for immediate notification",value:"Variation Type IA for immediate notification"},{label:"Variation Type IB",value:"Variation Type IB"},{label:"Variation Type II",value:"Variation Type II"},{label:"Extension",value:"Extension"},{label:"Renewal - Prolongation, renouncement of prolongation of Marketing Authorization",value:"Renewal - Prolongation, renouncement of prolongation of Marketing Authorization"},{label:"Follow-up Measure",value:"Follow-up Measure"},{label:"Submission of PSUR",value:"Submission of PSUR"},{label:"Withdrawal of authorised medical products",value:"Withdrawal of authorised medical products"},{label:"Transfer of Marketing Authorization, change of name or address of applicant",value:"Transfer of Marketing Authorization, change of name or address of applicant"},{label:"Drug Master File",value:"Drug Master File"},{label:"Plasma Master File",value:"Plasma Master File"},{label:"Application for recognition of orphan drug status or fast track status",value:"Application for recognition of orphan drug status or fast track status"},{label:"Reformat : Baseline eCTD submission. No content change, no review",value:"Reformat : Baseline eCTD submission. No content change, no review"},{label:"Suupplemental information (could include for example response to content validation issuers or answers to question)",value:"Suupplemental information (could include for example response to content validation issuers or answers to question)"},{label:"Correction of errors detected in a sequence",value:"Correction of errors detected in a sequence"}],name:"application_type",onChange:s=>i(s,"application_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.application_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:l.mtremarks,name:"mtremarks",onChange:c})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(o,{options:r==null?void 0:r.indication.map(s=>({label:s,value:s})),name:"indication",onChange:s=>i(s,"indication"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.indication,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx(o,{options:r==null?void 0:r.substance.map(s=>({label:s,value:s})),name:"drug_substance",onChange:s=>i(s,"drug_substance"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,value:l.drug_substance,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance manufacturer"}),e.jsx(o,{options:r==null?void 0:r.ds_manufacturer.map(s=>({label:s,value:s})),name:"drug_substance_manufacturer",onChange:s=>i(s,"drug_substance_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.drug_substance_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product"}),e.jsx(o,{options:r==null?void 0:r.drug_product.map(s=>({label:s,value:s})),name:"drug_product",onChange:s=>i(s,"drug_product"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.drug_product,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacturer"}),e.jsx(o,{options:r==null?void 0:r.dp_manufacturer.map(s=>({label:s,value:s})),name:"drug_product_manufacturer",onChange:s=>i(s,"drug_product_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.drug_product_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(o,{options:r==null?void 0:r.dosage.map(s=>({label:s,value:s})),name:"dosage_form",onChange:s=>i(s,"dosage_form"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(o,{options:r==null?void 0:r.excipient.map(s=>({label:s,value:s})),name:"excipient",onChange:s=>i(s,"excipient"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,value:l.excipient,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(Y,{files:l.doc,upload:S,deleletFile:I,removeAll:A})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:l.docremarks,placeholder:"",onChange:c})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(v,{"data-enable-time":!0,value:l.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(v,{"data-enable-time":!0,value:l.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",title:"Provider's actual deadline",children:"Operational deadline"}),e.jsx(v,{"data-enable-time":!0,value:l.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>p("adjusted_deadline",s)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:c})]})})]}),e.jsx("div",{className:"flex-column current","data-kt-stepper-element":"content",children:e.jsxs("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_2",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_1",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier audit"})]}),e.jsx("div",{id:"kt_accordion_2_item_1",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:e.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:a.audit?a.audit.map((s,t)=>s.message&&s.user!==u.auth.user.id?e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:j(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},t):e.jsx("div",{className:"d-flex justify-content-end mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-end",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"me-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:j(s.date).format("MM/DD/YYYY H:s")})}),e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})})]}),e.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:s.message})]})},t)):""})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_3_item_2",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Delivery comment"})]}),e.jsx("div",{id:"kt_accordion_3_item_2",className:"fs-6 collapse p-10 show","data-bs-parent":"#kt_accordion_2",children:a.deliveryComment?a.deliveryComment.map((s,t)=>e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:"EK"})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:j(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},t)):""})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_4_item_3",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Correction requests"})]}),e.jsxs("div",{id:"kt_accordion_4_item_3",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:[e.jsx("div",{className:"mb-10",children:a.correction?a.correction.map((s,t)=>e.jsx("div",{dangerouslySetInnerHTML:w(s)},t)):""}),e.jsxs("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9 mb-10",children:[e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",value:"stg",onChange:y})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Update"})})]})}),e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",value:"ekemia",onChange:y})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Correction"})})]})})]}),e.jsx("div",{children:e.jsx(E.CKEditor,{editor:z,data:"",onReady:s=>{console.log("Editor is ready to use!",s)},onChange:(s,t)=>q(t)})})]})]})]})})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:P,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:D,children:"Continue"})]})]})]})]})})};U.layout=u=>e.jsx(R,{children:u,auth:u.props.auth});export{U as default};
