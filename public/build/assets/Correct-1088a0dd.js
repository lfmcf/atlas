import{r as u,W as D,j as e}from"./app-991c4595.js";import{i,m as S,h,A as M}from"./AuthenticatedLayout-fd03f1ab.js";import{S as A}from"./MenuComponent-f2b39dc0.js";import{F as b}from"./index-635e896e.js";/* empty css                  */import{d as R,C as I}from"./ckeditor-8bca2d62.js";import"./MetronicSplashScreen-c2f252e1.js";const V={startIndex:6,animation:!1,animationSpeed:"0.3s",animationNextClass:"animate__animated animate__slideInRight animate__fast",animationPreviousClass:"animate__animated animate__slideInLeft animate__fast"},z=d=>{function g(s){return{__html:s.message}}var p=new URLSearchParams(window.location.search);const f=u.useRef(null),n=u.useRef(null),{folder:a}=d,[N,q]=u.useState(),{metadata:v}=d,{data:l,setData:m,post:y,processing:T,errors:Y,clearErrors:E,reset:U}=D({id:a?a._id:"",form:a?a.form:p.get("form"),region:a?a.region:p.get("region"),procedure:a?a.procedure:p.get("procedure"),product_name:a?a.product_name:p.get("product"),dossier_contact:a?a.dossier_contact:d.auth.user.trigramme,object:a?a.object:"",country:a.country,dossier_type:a?a.dossier_type:"",dossier_count:a?a.dossier_count:"",remarks:a?a.remarks:"",tracking:a?a.tracking:"",applicant:a.applicant,agency_code:a.agency_code,atc:a?a.atc:"",submission_type:a?a.submission_type:"",submission_mode:a?a.submission_mode:"",invented_name:a?a.invented_name:"",inn:a.inn,sequence:a?a.sequence:"",r_sequence:a?a.r_sequence:"",uuid:a?a.uuid:v.uuid,submission_description:a?a.submission_description:"",mtremarks:a?a.mtremarks:"",indication:a?a.indication:"",manufacturer:a?a.manufacturer:"",drug_substance:a?a.drug_substance:"",drug_substance_manufacturer:a?a.drug_substance_manufacturer:"",drug_product:a?a.drug_product:"",drug_product_manufacturer:a?a.drug_product_manufacturer:"",dosage_form:a?a.dosage_form:"",excipient:a?a.excipient:"",doc:a?a.doc:"",docremarks:a?a.docremarks:"",request_date:new Date,deadline:new Date,adjusted_deadline:a.adjusted_deadline?a.adjusted_deadline:new Date,adjustedDeadlineComments:"",correction:{user:{id:d.auth.user.id,name:d.auth.user.name},date:new Date,message:"",source:[]}});u.useEffect(()=>{n.current=A.createInsance(f.current,V)},[]),u.useEffect(()=>{let s=new Date,t=s.getHours(),o=l.dossier_type?l.dossier_type.delai:"",x;o&&(t<12?x=s.setDate(s.getDate()+o):x=s.setDate(s.getDate()+o+1),m("deadline",new Date(x)))},[l.dossier_type]);const _=()=>{n.current&&(n.current.getCurrentStepIndex(),n.current.getCurrentStepIndex(),n.current.goNext())},k=()=>{n.current&&n.current.goPrev()},r=s=>{m(s.target.name,s.target.value)},c=(s,t)=>{m(t,s)},C=s=>{let t={...l};t.doc=[],Promise.all([...s.target.files].map(o=>t.doc.push(o))),m(t)},w=s=>{s.preventDefault(),y(route("correct-publishing"))},P=s=>{const t=s.getData();let o={...l};o.correction.message=t,m(o)},j=s=>{let t={...l};if(s.target.checked)t.correction.source.push(s.target.value);else{const o=t.correction.source.indexOf(s.target.value);t.correction.source.splice(o,1)}m(t)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:f,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=n.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=n.current)==null?void 0:s.goto(2)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=n.current)==null?void 0:s.goto(3)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=n.current)==null?void 0:s.goto(4)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=n.current)==null?void 0:s.goto(5)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=n.current)==null?void 0:s.goto(6)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"6"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 6"}),e.jsx("div",{className:"stepper-desc",children:"Dossier Review"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:w,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:l.dossier_contact,name:"dossier_contact",readOnly:!0,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",defaultValue:l.object,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"product_name",defaultValue:l.product_name,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission country"}),e.jsx(i,{options:S,name:"country",onChange:s=>c(s,"country"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:[{label:l.country,value:l.country}],menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier type"}),e.jsx(i,{options:[{label:"Baseline Dossier (M1-M2-M3)",value:"Baseline Dossier (M1-M2-M3)",delai:5},{label:"Baseline Dossier (M1-M5)",value:"Baseline Dossier (M1-M5)",delai:9},{label:"Marketing Authorisation Dossier / BLA (m1-m5)",value:"Marketing Authorisation Dossier / BLA (m1-m5)",delai:9},{label:"Renewal Dossier",value:"Renewal Dossier",delai:9},{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier"},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:s=>c(s,"dossier_type"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.dossier_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier count"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_count",defaultValue:l.dossier_count,onChange:r})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:l.remarks,name:"remarks",onChange:r})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx(i,{options:N||"",name:"tracking",onChange:s=>c(s,"tracking"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.tracking,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",defaultValue:l.applicant,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:l.agency_code,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"ATC"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"atc",defaultValue:l.atc,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission type"}),e.jsx(i,{options:[{label:"Active submission",value:"Active submission"},{label:"Extension submission",value:"Extension submission"},{label:"New Marketing Authorization Application - Generics",value:"New Marketing Authorization Application - Generics"},{label:"New Marketing Authorization Application - New Chemical Entity",value:"New Marketing Authorization Application - New Chemical Entity"},{label:"New Marketing Authorization Application - Biological Products",value:"New Marketing Authorization Application - Biological Products"},{label:"New Marketing Authorization Application - Radiopharmaceuticals",value:"New Marketing Authorization Application - Radiopharmaceuticals"},{label:"None (in the case of reformatting the application)",value:"None (in the case of reformatting the application)"},{label:"Plasma Master File",value:"Plasma Master File"},{label:"Periodic Safety Update Report",value:"Periodic Safety Update Report"},{label:"PSUR single assessment procedure",value:"PSUR single assessment procedure"},{label:"Renewal (Yearly or 5-Yearly)",value:"Renewal (Yearly or 5-Yearly)"},{label:"Risk Management Plan",value:"Risk Management Plan"},{label:"Transfer of Marketing Authorization",value:"Transfer of Marketing Authorization"},{label:"Urgent Safety Restriction",value:"Urgent Safety Restriction"},{label:"Variation Type I",value:"Variation Type I"},{label:"Variation Type II",value:"Variation Type II"},{label:"Withdrawal during assessment or withdrawal of Marketing Authorization",value:"Withdrawal during assessment or withdrawal of Marketing Authorization"}],name:"submission_type",onChange:s=>c(s,"submission_type"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.submission_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission unit"}),e.jsx(i,{options:[{label:"Initial submission to start any regulatory activity",value:"Initial submission to start any regulatory activity"},{label:"Response to any kind of question, validation issues out-standing information requested by the agency",value:"Response to any kind of question, validation issues out-standing information requested by the agency"},{label:"Othe additional information (should only be used if response is not suitable)",value:"Othe additional information (should only be used if response is not suitable)"},{label:"Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)",value:"Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)"},{label:"Correction of the published annexes in the GCC procedure (usually shortly after approval)",value:"Correction of the published annexes in the GCC procedure (usually shortly after approval)"},{label:"Reformatting of an existing submission application from any format to Ectd",value:"Reformatting of an existing submission application from any format to Ectd"}],name:"submission_mode",onChange:s=>c(s,"submission_mode"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.submission_mode,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"invented_name",defaultValue:l.invented_name,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:l.inn,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",defaultValue:l.sequence,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:l.r_sequence,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:l.uuid,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:l.submission_description,onChange:r})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:l.mtremarks,name:"mtremarks",onChange:r})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(i,{name:"indication",onChange:s=>c(s,"indication"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.indication,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Manufacturer"}),e.jsx(i,{name:"manufacturer",onChange:s=>c(s,"manufacturer"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"drug_substance",defaultValue:l.drug_substance,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance manufacturer"}),e.jsx(i,{name:"drug_substance_manufacturer",onChange:s=>c(s,"drug_substance_manufacturer"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.drug_substance_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"drug_product",defaultValue:l.drug_product,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacturer"}),e.jsx(i,{name:"drug_product_manufacturer",onChange:s=>c(s,"drug_product_manufacturer"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.drug_product_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(i,{name:"dosage_form",onChange:s=>c(s,"dosage_form"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(i,{name:"excipient",onChange:s=>c(s,"excipient"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.excipient,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Attached documents"}),e.jsx("input",{type:"file",multiple:!0,className:"form-control form-control-solid",name:"doc",onChange:C})]}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx("div",{className:"d-flex align-items-center text-gray-400 h-100",children:l.doc?l.doc.map(s=>e.jsx("span",{className:"me-2 fs-5",children:s.name})):""})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:l.docremarks,placeholder:"",onChange:r})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(b,{"data-enable-time":!0,value:l.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(b,{"data-enable-time":!0,value:l.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(b,{"data-enable-time":!0,value:l.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>m("adjusted_deadline",s)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:r})]})})]}),e.jsx("div",{className:"flex-column current","data-kt-stepper-element":"content",children:e.jsxs("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_2",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_1",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier audit"})]}),e.jsx("div",{id:"kt_accordion_2_item_1",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:e.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:a.audit?a.audit.map((s,t)=>s.message&&s.user!==d.auth.user.id?e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:h(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},t):e.jsx("div",{className:"d-flex justify-content-end mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-end",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"me-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:h(s.date).format("MM/DD/YYYY H:s")})}),e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})})]}),e.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:s.message})]})},t)):""})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_3_item_2",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Delivery comment"})]}),e.jsx("div",{id:"kt_accordion_3_item_2",className:"fs-6 collapse p-10 collapsed","data-bs-parent":"#kt_accordion_2",children:a.deliveryComment?a.deliveryComment.map((s,t)=>e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:"EK"})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:h(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},t)):""})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_4_item_3",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Correction requests"})]}),e.jsxs("div",{id:"kt_accordion_4_item_3",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:[e.jsx("div",{className:"mb-10",children:a.correction?a.correction.map((s,t)=>e.jsx("div",{dangerouslySetInnerHTML:g(s)},t)):""}),e.jsxs("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9 mb-10",children:[e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",value:"stg",onChange:j})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Update"})})]})}),e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",value:"ekemia",onChange:j})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Correction"})})]})})]}),e.jsx("div",{children:e.jsx(R.CKEditor,{editor:I,data:"",onReady:s=>{console.log("Editor is ready to use!",s)},onChange:(s,t)=>P(t)})})]})]})]})})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:k,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:_,children:"Continue"})]})]})]})]})})};z.layout=d=>e.jsx(M,{children:d,auth:d.props.auth});export{z as default};
