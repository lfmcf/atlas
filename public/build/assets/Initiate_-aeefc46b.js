import{r as p,W as F,j as e,b as v}from"./app-2a338398.js";import{n as M,A as V}from"./AuthenticatedLayout-13f6d22f.js";import{S as T}from"./MenuComponent-5db78dae.js";import{F as g}from"./index-a5b98bd6.js";/* empty css                  */import{D as R}from"./Dropzone-dc34b582.js";import{G as E}from"./GeneralInformation-02de4391.js";import{I as z}from"./InsertProductMetaData-804309f7.js";import"./MetronicSplashScreen-05ea651f.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const G=m=>{var x=new URLSearchParams(window.location.search);const b=p.useRef(null),o=p.useRef(null),[f,c]=p.useState({dossier_type:"",dossier_count:"",sequence:""}),{folder:a,agc:U,metapro:B}=m,{data:l,setData:i,post:_,processing:H,errors:L,clearErrors:W,reset:K}=F({id:a?a._id:"",form:a?a.form:"Publishing",region:a?a.region:x.get("region"),procedure:a?a.procedure:x.get("procedure"),productName:a?a.product_name:x.get("product"),dossier_contact:a?a.dossier_contact:m.auth.user.trigramme.toUpperCase(),object:a?a.object:"",country:{value:"Switzerland",code:"CH"},dossier_type:a?a.dossier_type:"",dossier_count:a?a.dossier_count:"",remarks:a?a.remarks:"",tracking:"",submission_description:a?a.submission_description:"",invented_name:a?a.invented_name:"",galenic_form:"",swissmedic:"",galenic_name:"",dmf:"",pmf:a?a.pmf:"",inn:"",applicant:"STALLERGENES",dmf_holder:a?a.dmf_holder:"",pmf_holder:a?a.pmf_holder:"",agency_code:"Swissmedic",tpa:"",sequence:a?a.sequence:"",r_sequence:a?a.r_sequence:"",application_type:a?a.application_type:"",mtremarks:a?a.mtremarks:"",indication:a?a.indication:"",drug_substance:a?a.drug_substance:[{drug_substance:"",manufacturer:[]}],drug_product:a?a.drug_product:[{drug_product:"",manufacturer:[]}],dosage_form:a?a.dosage_form:"",excipient:[],doc:a&&a.doc!==null?a.doc:[],docremarks:a?a.docremarks:"",request_date:new Date,deadline:new Date,created_by:m.auth.user.id});p.useEffect(()=>{o.current=T.createInsance(b.current)},[]),p.useEffect(()=>{let s=new Date,t=s.getHours(),r=l.dossier_type?l.dossier_type.delai:"",d=new Date,j=1;for(t<12?r=r:r=r+1;j<r;)d=new Date(s.setDate(s.getDate()+1)),d.getDay()!=0&&d.getDay()!=6&&j++;i("deadline",new Date(d))},[l.dossier_type]);const y=()=>{if(o.current){if(o.current.getCurrentStepIndex()===1&&(!l.dossier_type||!l.dossier_count)){l.dossier_type||c(s=>({...s,dossier_type:"this field is required"})),l.dossier_count||c(s=>({...s,dossier_count:"this field is required"}));return}if(o.current.getCurrentStepIndex()===2&&!l.sequence){l.sequence||c(s=>({...s,sequence:"this field is required"}));return}o.current.goNext()}},w=()=>{o.current&&o.current.goPrev()},n=s=>{s.target.name=="dossier_count"&&c(t=>({...t,dossier_count:""})),s.target.name=="sequence"&&c(t=>({...t,sequence:""})),i(s.target.name,s.target.value)},N=(s,t)=>{t=="dossier_type"&&c(r=>({...r,dossier_type:""})),i(t,s)},k=s=>{let t={...l};t.doc.push(...s),i(t)},h=(s,t)=>{s.preventDefault(),_(route("publishing_ch_new_request",{type:t}))},C=()=>{let s={...l},t=[];s.doc.map(r=>{r.link&&t.push(r.name)}),t.length>0&&v.post("delete-file-pub",{docs:t,id:l.id}),s.doc=[],i(s)},S=s=>{if(s.link){let d=[];d.push(s.name),v.post("delete-file-pub",{docs:d,id:l.id})}var t={...l};let r=t.doc.map(d=>d.name).indexOf(s.name);t.doc.splice(r,1),i(t)},q=s=>({control:t=>({...t,...s&&{borderColor:"red !important"}})}),u=s=>{var t;if((!l.dossier_type||!l.dossier_count)&&(s==2||s==3||s==4||s==5)){console.log(s),l.dossier_type||c(r=>({...r,dossier_type:"this field is required"})),l.dossier_count||c(r=>({...r,dossier_count:"this field is required"}));return}if(!l.sequence&&(s==3||s==4||s==5)){l.sequence||c(r=>({...r,sequence:"this field is required"}));return}(t=o.current)==null||t.goto(s)},A=()=>{i("drug_substance",[...l.drug_substance,{drug_substance:"",manufacturer:[]}])},D=()=>{i("drug_product",[...l.drug_product,{drug_product:"",manufacturer:[]}])},P=s=>{let t={...l};t.drug_product.splice(s,1),i(t)},I=s=>{let t={...l};t.drug_substance.splice(s,1),i(t)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:b,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=o.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>u(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>u(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>u(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>u(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:h,children:[e.jsxs("div",{className:"mb-5",children:[e.jsx(E,{data:l,myErrors:f,handleChange:n,handleSelectChange:N,selectStyles:q}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Application number"}),e.jsx("input",{className:"form-control form-control-solid",type:"text",name:"tracking"})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:l.submission_description,onChange:n})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"invented_name",defaultValue:l.productName,onChange:n})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Galenic form"}),e.jsx("input",{className:"form-control form-control-solid",type:"text",name:"galenic_form",onChange:n})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Authorization number (Swissmedic)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"swissmedic",defaultValue:l.swissmedic,onChange:n})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Galenic name (German)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"galenic_name",defaultValue:l.galenic_name,onChange:n})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"DMF number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dmf",defaultValue:l.dmf,onChange:n})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"PMF number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"pmf",defaultValue:l.pmf,onChange:n})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:l.inn,onChange:n})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:l.agency_code,onChange:n})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Article 13 TPA"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tpa",defaultValue:l.tpa,onChange:n})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:f.sequence?"red":""},children:"eCTD Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",style:{borderColor:f.sequence?"red":""},defaultValue:l.sequence,onChange:n})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related eCTD sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:l.r_sequence,onChange:n})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Application type"}),e.jsx(M,{options:[{label:"Used for meetings",value:"Used for meetings"},{label:"New Application - New Active Substance (na-nas)",value:"New Application - New Active Substance (na-nas)"},{label:"New Application - Known Active Substance (na-bws)",value:"New Application - Known Active Substance (na-bws)"},{label:"New Application - Co-Marketing Medical Product (na-co-marketing)",value:"New Application - Co-Marketing Medical Product (na-co-marketing)"},{label:"New Application - Parallel Import (na-pi)",value:"New Application - Parallel Import (na-pi)"},{label:"Variation Type IA",value:"Variation Type IA"},{label:"Variation Type IA for immediate notification",value:"Variation Type IA for immediate notification"},{label:"Variation Type IB",value:"Variation Type IB"},{label:"Variation Type II",value:"Variation Type II"},{label:"Extension",value:"Extension"},{label:"Renewal - Prolongation, renouncement of prolongation of Marketing Authorization",value:"Renewal - Prolongation, renouncement of prolongation of Marketing Authorization"},{label:"Follow-up Measure",value:"Follow-up Measure"},{label:"Submission of PSUR",value:"Submission of PSUR"},{label:"Withdrawal of authorised medical products",value:"Withdrawal of authorised medical products"},{label:"Transfer of Marketing Authorization, change of name or address of applicant",value:"Transfer of Marketing Authorization, change of name or address of applicant"},{label:"Drug Master File",value:"Drug Master File"},{label:"Plasma Master File",value:"Plasma Master File"},{label:"Application for recognition of orphan drug status or fast track status",value:"Application for recognition of orphan drug status or fast track status"},{label:"Reformat : Baseline eCTD submission. No content change, no review",value:"Reformat : Baseline eCTD submission. No content change, no review"},{label:"Suupplemental information (could include for example response to content validation issuers or answers to question)",value:"Suupplemental information (could include for example response to content validation issuers or answers to question)"},{label:"Correction of errors detected in a sequence",value:"Correction of errors detected in a sequence"}],name:"application_type",onChange:s=>N(s,"application_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.application_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:l.mtremarks,name:"mtremarks",onChange:n})]})})]}),e.jsx(z,{data:l,handleChange:n,addDrugSubstanceFields:A,removeDrugSubstanceFields:I,addDrugProductFields:D,removeDrugProductFields:P,setData:i}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(R,{files:l.doc,upload:k,deleletFile:S,removeAll:C})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:l.docremarks,placeholder:"",onChange:n})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(g,{"data-enable-time":!0,value:l.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(g,{"data-enable-time":!0,value:l.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"mb-10"})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:w,children:"Back"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"btn btn-primary m-3","data-kt-stepper-action":"submit",onClick:s=>h(s,"save"),children:e.jsx("span",{className:"indicator-label",children:"Save"})}),e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",onClick:s=>h(s,"submit"),children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:y,children:"Continue"})]})]})]})]})})};G.layout=m=>e.jsx(V,{children:m,auth:m.props.auth});export{G as default};
