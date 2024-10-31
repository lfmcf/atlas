import{r as m,W as te,j as e,b as P}from"./app-8c99fabd.js";import{n as re,A as le,S as ne}from"./AuthenticatedLayout-43490961.js";import{S as oe}from"./MenuComponent-0852b483.js";import{F as _}from"./index-fc89f0b0.js";/* empty css                  */import{D as ce}from"./Dropzone-b20948e4.js";import{S as ie}from"./StatusComponent-c84748f5.js";import{P as de}from"./ProductMetaData-f264cb44.js";import{G as me}from"./GeneralInformation-04806afb.js";import{C as ue}from"./ConfirmationMessage-398c9cc0.js";import{w as pe}from"./sweetalert2-react-content.es-123a8fe8.js";import"./MetronicSplashScreen-bf8f425d.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const fe=pe(ne),he=f=>{var y,k,C,S,D,q,A,M;var b=new URLSearchParams(window.location.search);const v=m.useRef(null),u=m.useRef(null),[N,p]=m.useState({dossier_type:"",dossier_count:"",sequence:""}),[F,V]=m.useState(!1),[I,xe]=m.useState(""),{folder:a,metadata:o}=f;m.useState(a.document);const{data:t,setData:i,post:w,processing:be,errors:Ne,clearErrors:je,reset:ge}=te({id:a?a._id:"",form:a?a.form:"Publishing",region:a?a.region:b.get("region"),procedure:a?a.procedure:b.get("procedure"),productName:a?a.product_name:b.get("product"),dossier_contact:a?a.dossier_contact:f.auth.user.trigramme,object:a?a.object:"",country:a.country,dossier_type:a?a.dossier_type:"",dossier_count:a?a.dossier_count:"",remarks:a?a.remarks:"",tracking:a?a.tracking:(y=o.tracking_numbers[0])==null?void 0:y.numbers,submission_description:a?a.submission_description:"",invented_name:a?a.invented_name:"",galenic_form:a?a.galenic_form:(k=o.swiss_meta_data[0])==null?void 0:k.galenic_form,swissmedic:(C=o.swiss_meta_data[0])==null?void 0:C.swissmedic,galenic_name:(S=o.swiss_meta_data[0])==null?void 0:S.gemran,dmf:(D=o.swiss_meta_data[0])==null?void 0:D.dmf_number,pmf:a?a.pmf:o.swiss_meta_data[0].pmf_holder,inn:o.inn,applicant:o.applicant,dmf_holder:a?a.dmf_holder:(q=o.swiss_meta_data[0])==null?void 0:q.dmf_number,pmf_holder:a?a.pmf_holder:(A=o.swiss_meta_data[0])==null?void 0:A.pmf_holder,agency_code:o.agencyCode,tpa:(M=o.swiss_meta_data[0])==null?void 0:M.tpa,sequence:a?a.sequence:"",r_sequence:a?a.r_sequence:"",application_type:a?a.application_type:"",mtremarks:a?a.mtremarks:"",indication:a?a.indication:"",drug_substance:a?a.drug_substance:[{drug_substance:"",manufacturer:""}],drug_product:a?a.drug_product:[{drug_product:"",manufacturer:""}],dosage_form:a?a.dosage_form:"",excipient:a?a.excipient:"",doc:a&&a.doc!==null?a.doc:[],docremarks:a?a.docremarks:"",request_date:new Date,deadline:new Date,adjusted_deadline:new Date,adjustedDeadlineComments:"",status:a?a.status:""});m.useEffect(()=>{u.current=oe.createInsance(v.current)},[]),m.useEffect(()=>{let s=new Date,r=s.getHours(),l=t.dossier_type?t.dossier_type.delai:"",n;l&&(r<12?n=s.setDate(s.getDate()+l):n=s.setDate(s.getDate()+l+1),i("deadline",new Date(n)))},[t.dossier_type]);const T=()=>{if(u.current){if(u.current.getCurrentStepIndex()===1&&(!t.dossier_type||!t.dossier_count)){t.dossier_type||p(s=>({...s,dossier_type:"this field is required"})),t.dossier_count||p(s=>({...s,dossier_count:"this field is required"}));return}if(u.current.getCurrentStepIndex()===2&&!t.sequence){t.sequence||p(s=>({...s,sequence:"this field is required"}));return}u.current.goNext()}},R=()=>{u.current&&u.current.goPrev()},c=s=>{s.target.name=="dossier_count"&&p(r=>({...r,dossier_count:""})),s.target.name=="sequence"&&p(r=>({...r,sequence:""})),i(s.target.name,s.target.value)},j=(s,r)=>{r=="dossier_type"&&p(l=>({...l,dossier_type:""})),i(r,s)},E=s=>{let r={...t};r.doc.push(...s),i(r)},B=s=>{s.preventDefault(),fe.fire({title:'Click on "Yes" to submit your request or click on "No, return" to return to the form.',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, proceed!",cancelButtonText:"No, return"}).then(r=>{r.isConfirmed&&w(route("publishing_ch_post_confirm"))})},z=()=>{V(!1)},G=s=>{w(route("publishing_ch_post_confirm"))},U=()=>{let s={...t},r=[];s.doc.map(l=>{l.link&&r.push(l.name)}),r.length>0&&P.post("delete-file-pub",{docs:r,id:t.id}),s.doc=[],i(s)},Y=s=>{if(s.link){let n=[];n.push(s.name),P.post("delete-file-pub",{docs:n,id:t.id})}var r={...t};let l=r.doc.map(n=>n.name).indexOf(s.name);r.doc.splice(l,1),i(r)},H=s=>({control:r=>({...r,...s&&{borderColor:"red !important"}})}),x=s=>{var r;if((!t.dossier_type||!t.dossier_count)&&(s==2||s==3||s==4||s==5)){console.log(s),t.dossier_type||p(l=>({...l,dossier_type:"this field is required"})),t.dossier_count||p(l=>({...l,dossier_count:"this field is required"}));return}if(!t.sequence&&(s==3||s==4||s==5)){t.sequence||p(l=>({...l,sequence:"this field is required"}));return}(r=u.current)==null||r.goto(s)},W=()=>{i("drug_substance",[...t.drug_substance,{drug_substance:"",manufacturer:""}])},K=()=>{i("drug_product",[...t.drug_product,{drug_product:"",manufacturer:""}])},L=s=>{let r={...t};r.drug_product.splice(s,1),i(r)},Z=s=>{let r={...t};r.drug_substance.splice(s,1),i(r)};m.useState(o.drug_substance.map(s=>({label:s.substance,value:s.substance}))),m.useState(o.drug_product.map(s=>({label:s.drug_product,value:s.drug_product})));const[$,J]=m.useState({}),[Q,X]=m.useState({}),O=(s,r)=>{var h;console.log(r);let l={...t};l.drug_substance[s].drug_substance=r?r.value:"",i(l);const n=r==null?void 0:r.value,g=((h=o.drug_substance.find(d=>d.substance===n))==null?void 0:h.ds_manufacturers.map(d=>({label:d.substance_manufacturer,value:d.substance_manufacturer})))||[];J(d=>({...d,[n]:g}))},ee=(s,r)=>{var h;let l={...t};l.drug_product[s].drug_product=r?r.value:"",i(l);const n=r==null?void 0:r.value,g=((h=o.drug_product.find(d=>d.drug_product===n))==null?void 0:h.dp_manufacturers.map(d=>({label:d.product_manufacturer,value:d.product_manufacturer})))||[];X(d=>({...d,[n]:g}))},se=(s,r)=>{i(l=>{const n=[...l.drug_substance];return n[s]={...n[s],manufacturer:r},{...l,drug_substance:n}})},ae=(s,r)=>{i(l=>{const n=[...l.drug_product];return n[s]={...n[s],manufacturer:r},{...l,drug_product:n}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(ie,{status:t.status})]}),e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:v,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=u.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>x(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>x(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>x(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>x(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:B,children:[e.jsxs("div",{className:"mb-5",children:[e.jsx(me,{data:t,myErrors:N,handleChange:c,handleSelectChange:j,selectStyles:H}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Application number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tracking",defaultValue:t.tracking,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:t.submission_description,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"invented_name",defaultValue:t.invented_name,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Galenic form"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"galenic_form",defaultValue:t.galenic_form,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Authorization number (Swissmedic)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"swissmedic",defaultValue:t.swissmedic,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Galenic name (German)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"galenic_name",defaultValue:t.galenic_name,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"DMF number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dmf",defaultValue:t.dmf,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"PMF number"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"pmf",defaultValue:t.pmf,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:t.inn,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:t.agency_code,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Article 13 TPA"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tpa",defaultValue:t.tpa,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:N.sequence?"red":""},children:"eCTD Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",style:{borderColor:N.sequence?"red":""},defaultValue:t.sequence,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related eCTD sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:t.r_sequence,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Application type"}),e.jsx(re,{options:[{label:"Used for meetings",value:"Used for meetings"},{label:"New Application - New Active Substance (na-nas)",value:"New Application - New Active Substance (na-nas)"},{label:"New Application - Known Active Substance (na-bws)",value:"New Application - Known Active Substance (na-bws)"},{label:"New Application - Co-Marketing Medical Product (na-co-marketing)",value:"New Application - Co-Marketing Medical Product (na-co-marketing)"},{label:"New Application - Parallel Import (na-pi)",value:"New Application - Parallel Import (na-pi)"},{label:"Variation Type IA",value:"Variation Type IA"},{label:"Variation Type IA for immediate notification",value:"Variation Type IA for immediate notification"},{label:"Variation Type IB",value:"Variation Type IB"},{label:"Variation Type II",value:"Variation Type II"},{label:"Extension",value:"Extension"},{label:"Renewal - Prolongation, renouncement of prolongation of Marketing Authorization",value:"Renewal - Prolongation, renouncement of prolongation of Marketing Authorization"},{label:"Follow-up Measure",value:"Follow-up Measure"},{label:"Submission of PSUR",value:"Submission of PSUR"},{label:"Withdrawal of authorised medical products",value:"Withdrawal of authorised medical products"},{label:"Transfer of Marketing Authorization, change of name or address of applicant",value:"Transfer of Marketing Authorization, change of name or address of applicant"},{label:"Drug Master File",value:"Drug Master File"},{label:"Plasma Master File",value:"Plasma Master File"},{label:"Application for recognition of orphan drug status or fast track status",value:"Application for recognition of orphan drug status or fast track status"},{label:"Reformat : Baseline eCTD submission. No content change, no review",value:"Reformat : Baseline eCTD submission. No content change, no review"},{label:"Suupplemental information (could include for example response to content validation issuers or answers to question)",value:"Suupplemental information (could include for example response to content validation issuers or answers to question)"},{label:"Correction of errors detected in a sequence",value:"Correction of errors detected in a sequence"}],name:"application_type",onChange:s=>j(s,"application_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.application_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:t.mtremarks,name:"mtremarks",onChange:c})]})})]}),e.jsx(de,{metadata:o,data:t,handleSelectChange:j,handleDrugSubstanceChange:O,handleManufacturerChange:se,handleDrugProductChange:ee,handleDpManufacturerChange:ae,manufacturerOptions:$,dpmanufacturerOptions:Q,addDrugSubstanceFields:W,addDrugProductFields:K,removeDrugProductFields:L,removeDrugSubstanceFields:Z}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(ce,{files:t.doc,upload:E,deleletFile:Y,removeAll:U})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:t.docremarks,placeholder:"",onChange:c})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(_,{"data-enable-time":!0,value:t.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(_,{"data-enable-time":!0,value:t.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",title:"Provider's actual deadline",children:"Operational deadline"}),e.jsx(_,{"data-enable-time":!0,value:t.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>i("adjusted_deadline",s)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:c})]})})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:R,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:T,children:"Continue"})]})]})]})]}),e.jsx(ue,{show:F,onCancel:z,actionType:I,onConfirm:G})]})};he.layout=f=>e.jsx(le,{children:f,auth:f.props.auth});export{he as default};
