import{r as p,W as P,j as e,b as v}from"./app-edb664a3.js";import{n as d,A as S}from"./AuthenticatedLayout-1be999c1.js";import{S as A}from"./MenuComponent-c0e50dfa.js";import{F as h}from"./index-e8dd394b.js";/* empty css                  */import{D as M}from"./Dropzone-570af072.js";import{S as V}from"./StatusComponent-a8507328.js";import"./MetronicSplashScreen-93cd6ede.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const I=x=>{var f=new URLSearchParams(window.location.search);const b=p.useRef(null),c=p.useRef(null),[N,j]=p.useState(),{folder:s}=x;p.useState(s.document);const{metadata:i}=x,{data:l,setData:u,post:g,processing:T,errors:R,clearErrors:q,reset:F}=P({id:s?s._id:"",form:s?s.form:f.get("form"),region:s?s.region:f.get("region"),procedure:s?s.procedure:f.get("procedure"),product_name:s?s.product_name:f.get("product"),dossier_contact:s?s.dossier_contact:x.auth.user.trigramme,object:s?s.object:"",country:s.country,dossier_type:s?s.dossier_type:"",dossier_count:s?s.dossier_count:"",remarks:s?s.remarks:"",tracking:i.trackingNumber,submission_description:s?s.submission_description:"",invented_name:s?s.invented_name:"",galenic_form:i.galenic_form,swissmedic:i.swissmedic,galenic_name:i.gemran,dmf:i.dmf_number,pmf:s?s.pmf:"",inn:i.inn,applicant:i.applicant,dmf_holder:s?s.dmf_holder:"",pmf_holder:s?s.pmf_holder:"",agency_code:i.agencyCode,tpa:i.tpa,sequence:s?s.sequence:"",r_sequence:s?s.r_sequence:"",application_type:s?s.application_type:"",mtremarks:s?s.mtremarks:"",indication:s?s.indication:"",manufacturer:s?s.manufacturer:"",drug_substance:s?s.drug_substance:"",drug_substance_manufacturer:s?s.drug_substance_manufacturer:"",drug_product:s?s.drug_product:"",drug_product_manufacturer:s?s.drug_product_manufacturer:"",dosage_form:s?s.dosage_form:"",excipient:s?s.excipient:"",doc:s&&s.doc!==null?s.doc:[],docremarks:s?s.docremarks:"",request_date:new Date,deadline:new Date,adjusted_deadline:new Date,adjustedDeadlineComments:"",status:s?s.status:""});p.useEffect(()=>{c.current=A.createInsance(b.current)},[]),p.useEffect(()=>{let a={...l},r=i.trackingNumber;if(r=r.split(/\r?\n/),r.length>1){let o=r.map(n=>({label:n,value:n}));a.tracking="",j(o)}else{let o=r.map(n=>({label:n,value:n}));j(o),a.tracking={label:r[0],value:r[0]}}u(a)},[]),p.useEffect(()=>{let a=new Date,r=a.getHours(),o=l.dossier_type?l.dossier_type.delai:"",n;o&&(r<12?n=a.setDate(a.getDate()+o):n=a.setDate(a.getDate()+o+1),u("deadline",new Date(n)))},[l.dossier_type]);const _=()=>{c.current&&(c.current.getCurrentStepIndex(),c.current.getCurrentStepIndex(),c.current.goNext())},y=()=>{c.current&&c.current.goPrev()},t=a=>{u(a.target.name,a.target.value)},m=(a,r)=>{u(r,a)},k=a=>{let r={...l};r.doc.push(...a),u(r)},w=a=>{a.preventDefault(),g(route("confirm-publishing-nat-ch"))},C=()=>{let a={...l},r=[];a.doc.map(o=>{o.link&&r.push(o.name)}),r.length>0&&v.post("delete-file-pub",{docs:r,id:l.id}),a.doc=[],u(a)},D=a=>{if(a.link){let n=[];n.push(a.name),v.post("delete-file-pub",{docs:n,id:l.id})}var r={...l};let o=r.doc.map(n=>n.name).indexOf(a.name);r.doc.splice(o,1),u(r)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(V,{status:l.status})]}),e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:b,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var a;return(a=c.current)==null?void 0:a.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var a;return(a=c.current)==null?void 0:a.goto(2)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var a;return(a=c.current)==null?void 0:a.goto(3)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var a;return(a=c.current)==null?void 0:a.goto(4)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var a;return(a=c.current)==null?void 0:a.goto(5)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:w,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:l.dossier_contact,name:"dossier_contact",readOnly:!0,onChange:t})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",defaultValue:l.object,onChange:t})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"product_name",defaultValue:l.product_name,onChange:t})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission country"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"country",defaultValue:l.country.value,disabled:!0})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier type"}),e.jsx(d,{options:[{label:"Baseline Dossier (M1-M2-M3)",value:"Baseline Dossier (M1-M2-M3)",delai:5},{label:"Baseline Dossier (M1-M5)",value:"Baseline Dossier (M1-M5)",delai:9},{label:"Marketing Authorisation Dossier / BLA (m1-m5)",value:"Marketing Authorisation Dossier / BLA (m1-m5)",delai:9},{label:"Renewal Dossier",value:"Renewal Dossier",delai:9},{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier"},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:a=>m(a,"dossier_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.dossier_type,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier count"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_count",defaultValue:l.dossier_count,onChange:t})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:l.remarks,name:"remarks",onChange:t})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Application number"}),e.jsx(d,{options:N||"",name:"tracking",onChange:a=>m(a,"tracking"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.tracking,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:l.submission_description,onChange:t})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"invented_name",defaultValue:l.invented_name,onChange:t})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Galenic form"}),e.jsx(d,{options:[],name:"galenic_form",onChange:a=>m(a,"galenic_form"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.galenic_form,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Authorization number (Swissmedic)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"swissmedic",defaultValue:l.swissmedic,onChange:t})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Galenic name (German)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"galenic_name",defaultValue:l.galenic_name,onChange:t})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"DMF number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dmf",defaultValue:l.dmf,onChange:t})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"PMF number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"pmf",defaultValue:l.pmf,onChange:t})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:l.inn,onChange:t})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:l.agency_code,onChange:t})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Article 13 TPA"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tpa",defaultValue:l.tpa,onChange:t})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"eCTD Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",defaultValue:l.sequence,onChange:t})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related eCTD sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:l.r_sequence,onChange:t})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Application type"}),e.jsx(d,{options:[{label:"Used for meetings",value:"Used for meetings"},{label:"New Application - New Active Substance (na-nas)",value:"New Application - New Active Substance (na-nas)"},{label:"New Application - Known Active Substance (na-bws)",value:"New Application - Known Active Substance (na-bws)"},{label:"New Application - Co-Marketing Medical Product (na-co-marketing)",value:"New Application - Co-Marketing Medical Product (na-co-marketing)"},{label:"New Application - Parallel Import (na-pi)",value:"New Application - Parallel Import (na-pi)"},{label:"Variation Type IA",value:"Variation Type IA"},{label:"Variation Type IA for immediate notification",value:"Variation Type IA for immediate notification"},{label:"Variation Type IB",value:"Variation Type IB"},{label:"Variation Type II",value:"Variation Type II"},{label:"Extension",value:"Extension"},{label:"Renewal - Prolongation, renouncement of prolongation of Marketing Authorization",value:"Renewal - Prolongation, renouncement of prolongation of Marketing Authorization"},{label:"Follow-up Measure",value:"Follow-up Measure"},{label:"Submission of PSUR",value:"Submission of PSUR"},{label:"Withdrawal of authorised medical products",value:"Withdrawal of authorised medical products"},{label:"Transfer of Marketing Authorization, change of name or address of applicant",value:"Transfer of Marketing Authorization, change of name or address of applicant"},{label:"Drug Master File",value:"Drug Master File"},{label:"Plasma Master File",value:"Plasma Master File"},{label:"Application for recognition of orphan drug status or fast track status",value:"Application for recognition of orphan drug status or fast track status"},{label:"Reformat : Baseline eCTD submission. No content change, no review",value:"Reformat : Baseline eCTD submission. No content change, no review"},{label:"Suupplemental information (could include for example response to content validation issuers or answers to question)",value:"Suupplemental information (could include for example response to content validation issuers or answers to question)"},{label:"Correction of errors detected in a sequence",value:"Correction of errors detected in a sequence"}],name:"application_type",onChange:a=>m(a,"application_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.application_type,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:l.mtremarks,name:"mtremarks",onChange:t})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(d,{name:"indication",onChange:a=>m(a,"indication"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.indication,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Manufacturer"}),e.jsx(d,{name:"manufacturer",onChange:a=>m(a,"manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.manufacturer,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"drug_substance",defaultValue:l.drug_substance,onChange:t})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance manufacturer"}),e.jsx(d,{name:"drug_substance_manufacturer",onChange:a=>m(a,"drug_substance_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.drug_substance_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"drug_product",defaultValue:l.drug_product,onChange:t})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacturer"}),e.jsx(d,{name:"drug_product_manufacturer",onChange:a=>m(a,"drug_product_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.drug_product_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(d,{name:"dosage_form",onChange:a=>m(a,"dosage_form"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(d,{name:"excipient",onChange:a=>m(a,"excipient"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.excipient,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(M,{files:l.doc,upload:k,deleletFile:D,removeAll:C})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:l.docremarks,placeholder:"",onChange:t})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(h,{"data-enable-time":!0,value:l.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(h,{"data-enable-time":!0,value:l.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(h,{"data-enable-time":!0,value:l.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:a=>u("adjusted_deadline",a)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:t})]})})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:y,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:_,children:"Continue"})]})]})]})]})]})};I.layout=x=>e.jsx(S,{children:x,auth:x.props.auth});export{I as default};
