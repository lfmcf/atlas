import{r as m,W as te,j as e,b as q}from"./app-a916bcc3.js";import{n as _,h as y,A as re,S as le}from"./AuthenticatedLayout-8729c031.js";import{S as ie}from"./MenuComponent-83c60e07.js";import{F as k}from"./index-7629c76d.js";/* empty css                  */import{d as ne,C as ce}from"./ckeditor-655c8f72.js";import{D as oe}from"./Dropzone-4b1d7a94.js";import{G as de}from"./GeneralInformation-0c06f8da.js";import{P as me}from"./ProductMetaData-bc0a31bc.js";import{C as ue}from"./ConfirmationMessage-0ebfe35a.js";import{w as pe}from"./sweetalert2-react-content.es-d0d57fdf.js";import"./MetronicSplashScreen-0278fae4.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const he=pe(le),xe={startIndex:6,animation:!1,animationSpeed:"0.3s",animationNextClass:"animate__animated animate__slideInRight animate__fast",animationPreviousClass:"animate__animated animate__slideInLeft animate__fast"},fe=p=>{function M(s){return{__html:s.message}}var j=new URLSearchParams(window.location.search);const C=m.useRef(null),u=m.useRef(null),{folder:a,metapro:be,metadata:b,auth:P}=p,[h,c]=m.useState({dossier_type:"",dossier_count:"",submission_type:"",submission_mode:"",sequence:""}),[A,R]=m.useState(!1),[I,ge]=m.useState(""),[w,je]=m.useState(),{data:r,setData:n,post:S,processing:Ne,errors:ve,clearErrors:_e,reset:ye}=te({id:a?a._id:"",form:a?a.form:"Publishing",region:a?a.region:j.get("region"),procedure:a?a.procedure:j.get("procedure"),productName:a?a.product_name:j.get("product"),dossier_contact:a?a.dossier_contact:p.auth.user.trigramme,object:a?a.object:"",country:a.country,dossier_type:a?a.dossier_type:"",dossier_count:a?a.dossier_count:"",remarks:a?a.remarks:"",tracking:a?a.tracking:"",applicant:a.applicant,agency_code:a.agency_code,atc:a?a.atc:"",submission_type:a?a.submission_type:"",submission_mode:a?a.submission_mode:"",invented_name:a?a.invented_name:"",inn:a.inn,sequence:a?a.sequence:"",r_sequence:a?a.r_sequence:"",uuid:a?a.uuid:b.uuid,submission_description:a?a.submission_description:"",mtremarks:a?a.mtremarks:"",indication:a?a.indication:"",drug_substance:a?a.drug_substance:"",drug_product:a?a.drug_product:"",dosage_form:a?a.dosage_form:"",excipient:a?a.excipient:"",doc:a&&a.doc!==null?a.doc:[],docremarks:a?a.docremarks:"",request_date:new Date,deadline:new Date,adjusted_deadline:a.adjusted_deadline?a.adjusted_deadline:new Date,adjustedDeadlineComments:a.adjustedDeadlineComments?a.adjustedDeadlineComments:"",correction:{user:{id:p.auth.user.id,name:p.auth.user.name},date:new Date,message:"",source:a.correction&&P.user.current_team_id==2?a.correction[a.correction.length-1].source:[]}});m.useEffect(()=>{u.current=ie.createInsance(C.current,xe)},[]),m.useEffect(()=>{let s=new Date,t=s.getHours(),l=r.dossier_type?r.dossier_type.delai:"",i;l&&(t<12?i=s.setDate(s.getDate()+l):i=s.setDate(s.getDate()+l+1),n("deadline",new Date(i)))},[r.dossier_type]);const Y=()=>{if(u.current){if(u.current.getCurrentStepIndex()===1&&(!r.dossier_type||!r.dossier_count)){r.dossier_type||c(s=>({...s,dossier_type:"this field is required"})),r.dossier_count||c(s=>({...s,dossier_count:"this field is required"}));return}if(u.current.getCurrentStepIndex()===2&&(!r.submission_type||!r.submission_mode||!r.sequence)){r.submission_type||c(s=>({...s,submission_type:"this field is required"})),r.submission_mode||c(s=>({...s,submission_mode:"this field is required"})),r.sequence||c(s=>({...s,sequence:"this field is required"}));return}u.current.goNext()}},F=()=>{u.current&&u.current.goPrev()},o=s=>{s.target.name=="dossier_count"&&c(t=>({...t,dossier_count:""})),s.target.name=="sequence"&&c(t=>({...t,sequence:""})),n(s.target.name,s.target.value)},g=(s,t)=>{t=="dossier_type"&&c(l=>({...l,dossier_type:""})),t=="dossier_count"&&c(l=>({...l,dossier_count:""})),t=="submission_type"&&c(l=>({...l,submission_type:""})),t=="submission_mode"&&c(l=>({...l,submission_mode:""})),n(t,s)},E=s=>{let t={...r};t.doc=[],Promise.all([...s.target.files].map(l=>t.doc.push(l))),n(t)},T=s=>{s.preventDefault(),he.fire({title:'Click on "Yes" to submit your request or click on "No, return" to return to the form.',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, proceed!",cancelButtonText:"No, return"}).then(t=>{t.isConfirmed&&S(route("publishing_gcc_post_verify"))})},V=()=>{R(!1)},z=s=>{S(route("publishing_gcc_post_verify"))},G=s=>{const t=s.getData();let l={...r};l.correction.message=t,n(l)},D=s=>{let t={...r};if(s.target.checked)t.correction.source.push(s.target.value);else{const l=t.correction.source.indexOf(s.target.value);t.correction.source.splice(l,1)}n(t)},U=()=>{let s={...r},t=[];s.doc.map(l=>{l.link&&t.push(l.name)}),t.length>0&&q.post("delete-file-pub",{docs:t,id:r.id}),s.doc=[],n(s)},H=s=>{if(s.link){let i=[];i.push(s.name),q.post("delete-file-pub",{docs:i,id:r.id})}var t={...r};let l=t.doc.map(i=>i.name).indexOf(s.name);t.doc.splice(l,1),n(t)},N=s=>({control:t=>({...t,...s&&{borderColor:"red !important"}})}),x=s=>{var t;if((!r.dossier_type||!r.dossier_count)&&(s==2||s==3||s==4||s==5||s==6)){r.dossier_type||c(l=>({...l,dossier_type:"this field is required"})),r.dossier_count||c(l=>({...l,dossier_count:"this field is required"}));return}if((!r.submission_type||!r.submission_mode||!r.sequence)&&(s==3||s==4||s==5||s==6)){r.submission_type||c(l=>({...l,submission_type:"this field is required"})),r.submission_mode||c(l=>({...l,submission_mode:"this field is required"})),r.sequence||c(l=>({...l,sequence:"this field is required"}));return}(t=u.current)==null||t.goto(s)},B=(s,t)=>{t.action=="clear"?n("tracking",""):n("tracking",s.value)},L=()=>{n("drug_substance",[...r.drug_substance,{drug_substance:"",manufacturer:""}])},W=s=>{let t={...r};t.drug_substance.splice(s,1),n(t)},K=()=>{n("drug_product",[...r.drug_product,{drug_product:"",manufacturer:""}])},Z=s=>{let t={...r};t.drug_product.splice(s,1),n(t)};m.useState(r.drug_substance.map(s=>({label:s.substance,value:s.substance}))),m.useState(r.drug_product.map(s=>({label:s.drug_product,value:s.drug_product})));const[$,J]=m.useState({}),[O,Q]=m.useState({}),X=(s,t)=>{var f;let l={...r};l.drug_substance[s].drug_substance=t?t.value:"",n(l);const i=t==null?void 0:t.value,v=((f=b.drug_substance.find(d=>d.substance===i))==null?void 0:f.ds_manufacturers.map(d=>({label:d.substance_manufacturer,value:d.substance_manufacturer})))||[];J(d=>({...d,[i]:v}))},ee=(s,t)=>{var f;let l={...r};l.drug_product[s].drug_product=t?t.value:"",n(l);const i=t==null?void 0:t.value,v=((f=b.drug_product.find(d=>d.drug_product===i))==null?void 0:f.dp_manufacturers.map(d=>({label:d.product_manufacturer,value:d.product_manufacturer})))||[];Q(d=>({...d,[i]:v}))},se=(s,t)=>{n(l=>{const i=[...l.drug_substance];return i[s]={...i[s],manufacturer:t},{...l,drug_substance:i}})},ae=(s,t)=>{n(l=>{const i=[...l.drug_product];return i[s]={...i[s],manufacturer:t},{...l,drug_product:i}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:C,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=u.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>x(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>x(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>x(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>x(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>x(6),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"6"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 6"}),e.jsx("div",{className:"stepper-desc",children:"Dossier Review"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:T,children:[e.jsxs("div",{className:"mb-5",children:[e.jsx(de,{data:r,myErrors:h,handleChange:o,handleSelectChange:g,selectStyles:N}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(_,{options:w||"",name:"tracking",onChange:(s,t)=>B(s,t),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,defaultValue:r.tracking?{value:r.tracking,label:r.tracking}:"",menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({...s,width:"50%"})}}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:r.tracking,name:"tracking",style:{width:"50%"},onChange:o})]})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",defaultValue:r.applicant,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:r.agency_code,onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"ATC"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"atc",defaultValue:r.atc,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the submission type",style:{color:h.submission_type?"red":""},children:"Submission type (*)"}),e.jsx(_,{options:[{label:"Active submission",value:"Active submission"},{label:"Extension submission",value:"Extension submission"},{label:"New Marketing Authorization Application - Generics",value:"New Marketing Authorization Application - Generics"},{label:"New Marketing Authorization Application - New Chemical Entity",value:"New Marketing Authorization Application - New Chemical Entity"},{label:"New Marketing Authorization Application - Biological Products",value:"New Marketing Authorization Application - Biological Products"},{label:"New Marketing Authorization Application - Radiopharmaceuticals",value:"New Marketing Authorization Application - Radiopharmaceuticals"},{label:"None (in the case of reformatting the application)",value:"None (in the case of reformatting the application)"},{label:"Plasma Master File",value:"Plasma Master File"},{label:"Periodic Safety Update Report",value:"Periodic Safety Update Report"},{label:"PSUR single assessment procedure",value:"PSUR single assessment procedure"},{label:"Renewal (Yearly or 5-Yearly)",value:"Renewal (Yearly or 5-Yearly)"},{label:"Risk Management Plan",value:"Risk Management Plan"},{label:"Transfer of Marketing Authorization",value:"Transfer of Marketing Authorization"},{label:"Urgent Safety Restriction",value:"Urgent Safety Restriction"},{label:"Variation Type I",value:"Variation Type I"},{label:"Variation Type II",value:"Variation Type II"},{label:"Withdrawal during assessment or withdrawal of Marketing Authorization",value:"Withdrawal during assessment or withdrawal of Marketing Authorization"}],name:"submission_type",onChange:s=>g(s,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:r.submission_type,menuPortalTarget:document.body,styles:N(h.submission_type)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the applicable submission unit",style:{color:h.submission_mode?"red":""},children:"Submission unit (*)"}),e.jsx(_,{options:[{label:"Initial submission to start any regulatory activity",value:"Initial submission to start any regulatory activity"},{label:"Response to any kind of question, validation issues out-standing information requested by the agency",value:"Response to any kind of question, validation issues out-standing information requested by the agency"},{label:"Othe additional information (should only be used if response is not suitable)",value:"Othe additional information (should only be used if response is not suitable)"},{label:"Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)",value:"Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)"},{label:"Correction of the published annexes in the GCC procedure (usually shortly after approval)",value:"Correction of the published annexes in the GCC procedure (usually shortly after approval)"},{label:"Reformatting of an existing submission application from any format to Ectd",value:"Reformatting of an existing submission application from any format to Ectd"}],name:"submission_mode",onChange:s=>g(s,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:r.submission_mode,menuPortalTarget:document.body,styles:N(h.submission_mode)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"invented_name",defaultValue:r.invented_name,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:r.inn,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:h.sequence?"red":""},children:"Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",defaultValue:r.sequence,style:{borderColor:h.sequence?"red":""},onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:r.r_sequence,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:r.uuid,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:r.submission_description,onChange:o})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:r.mtremarks,name:"mtremarks",onChange:o})]})})]}),e.jsx(me,{metadata:b,data:r,handleSelectChange:g,handleDrugSubstanceChange:X,handleManufacturerChange:se,handleDrugProductChange:ee,handleDpManufacturerChange:ae,manufacturerOptions:$,dpmanufacturerOptions:O,addDrugSubstanceFields:L,addDrugProductFields:K,removeDrugProductFields:Z,removeDrugSubstanceFields:W}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(oe,{files:r.doc,upload:E,deleletFile:H,removeAll:U})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:r.docremarks,placeholder:"",onChange:o})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(k,{"data-enable-time":!0,value:r.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(k,{"data-enable-time":!0,value:r.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",title:"Provider's actual deadline",children:"Operational deadline"}),e.jsx(k,{"data-enable-time":!0,value:r.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>n("adjusted_deadline",s)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",value:r.adjustedDeadlineComments,onChange:o})]})})]}),e.jsx("div",{className:"flex-column current","data-kt-stepper-element":"content",children:e.jsxs("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_2",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_1",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier audit"})]}),e.jsx("div",{id:"kt_accordion_2_item_1",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:e.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:a.audit?a.audit.map((s,t)=>s.message&&s.user!==p.auth.user.id?e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:y(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},t):e.jsx("div",{className:"d-flex justify-content-end mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-end",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"me-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:y(s.date).format("MM/DD/YYYY H:s")})}),e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})})]}),e.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:s.message})]})},t)):""})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_3_item_2",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Delivery comment"})]}),e.jsx("div",{id:"kt_accordion_3_item_2",className:"fs-6 collapse p-10 show","data-bs-parent":"#kt_accordion_2",children:a.deliveryComment?a.deliveryComment.map((s,t)=>e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:"EK"})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:y(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},t)):""})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_4_item_3",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Correction requests"})]}),e.jsxs("div",{id:"kt_accordion_4_item_3",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:[e.jsx("div",{className:"mb-10",children:a.correction?a.correction.map((s,t)=>e.jsx("div",{dangerouslySetInnerHTML:M(s)},t)):""}),e.jsxs("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9 mb-10",children:[e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",checked:!!r.correction.source.includes("stg"),value:"stg",onChange:D})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Update"})})]})}),e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",checked:!!r.correction.source.includes("ekemia"),value:"ekemia",onChange:D})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Correction"})})]})})]}),e.jsx("div",{children:e.jsx(ne.CKEditor,{editor:ce,data:"",onReady:s=>{console.log("Editor is ready to use!",s)},onChange:(s,t)=>G(t)})})]})]})]})})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:F,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:Y,children:"Continue"})]})]})]})]}),e.jsx(ue,{show:A,onCancel:V,actionType:I,onConfirm:z})]})};fe.layout=p=>e.jsx(re,{children:p,auth:p.props.auth});export{fe as default};
