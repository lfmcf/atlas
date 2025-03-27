import{r as b,W as $,j as e,h as J,b as k}from"./app-85cb43ee.js";import{n as N,h as C,A as Q,S as X}from"./AuthenticatedLayout-ef394a1f.js";import{S as O}from"./MenuComponent-3b167d93.js";import{F as _}from"./index-6a50e7dd.js";/* empty css                  */import{D as ee}from"./Dropzone-8c740f03.js";import{S as se}from"./StatusComponent-567739d4.js";import{G as ae}from"./GeneralInformation-d9230d38.js";import{P as le}from"./ProductMetaData-496605ef.js";import{w as re}from"./sweetalert2-react-content.es-4637ec6b.js";import"./MetronicSplashScreen-1bb87bb1.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const w=re(X),te={startIndex:6,animation:!1,animationSpeed:"0.3s",animationNextClass:"animate__animated animate__slideInRight animate__fast",animationPreviousClass:"animate__animated animate__slideInLeft animate__fast"},ne=p=>{const{metadata:x,folder:r,metapro:ie}=p,y=b.useRef(null),m=b.useRef(null),[u,n]=b.useState({dossier_type:"",dossier_count:"",submission_type:"",submission_mode:"",submission_unit:"",sequence:""}),{data:l,setData:c,post:S,processing:ce,errors:oe,clearErrors:de,reset:me}=$({id:r._id,form:r.form,region:r.region,procedure:r.procedure,productName:r.product_name,dossier_contact:r.dossier_contact,object:r.object,country:r.country,dossier_type:r.dossier_type,dossier_count:r.dossier_count,remarks:r.remarks,uuid:r.uuid,submission_type:r.submission_type,submission_mode:r.submission_mode,tracking:r.tracking,trackingExtra:r?r.trackingExtra:"",submission_unit:r.submission_unit,applicant:r.applicant,agency_code:r.agency_code,inn:r.inn,sequence:r.sequence,r_sequence:r.r_sequence,submission_description:r.submission_description,mtremarks:r.mtremarks,indication:r.indication,drug_substance:r.drug_substance,drug_product:r.drug_product,dosage_form:r.dosage_form,excipient:r.excipient,doc:r&&r.doc!==null?r.doc:[],docremarks:r.docremarks,request_date:r.request_date,deadline:r.deadline,adjusted_deadline:r.adjusted_deadline?r.adjusted_deadline:new Date,adjustedDeadlineComments:"",audit:{user:{id:p.auth.user.id,name:p.auth.user.name},date:new Date,message:""},status:r?r.status:""});b.useEffect(()=>{m.current=O.createInsance(y.current,te)},[]);const q=()=>{if(m.current){if(m.current.getCurrentStepIndex()===1&&(!l.dossier_type||!l.dossier_count)){l.dossier_type||n(s=>({...s,dossier_type:"this field is required"})),l.dossier_count||n(s=>({...s,dossier_count:"this field is required"}));return}if(m.current.getCurrentStepIndex()===2&&(!l.submission_type||!l.submission_mode||!l.submission_unit||!l.sequence)){l.submission_type||n(s=>({...s,submission_type:"this field is required"})),l.submission_mode||n(s=>({...s,submission_mode:"this field is required"})),l.submission_unit||n(s=>({...s,submission_unit:"this field is required"})),l.sequence||n(s=>({...s,sequence:"this field is required"}));return}m.current.goNext()}},D=()=>{m.current&&m.current.goPrev()},o=s=>{s.target.name=="dossier_count"&&n(a=>({...a,dossier_count:""})),s.target.name=="sequence"&&n(a=>({...a,sequence:""})),c(s.target.name,s.target.value)},h=(s,a)=>{a=="dossier_type"&&n(t=>({...t,dossier_type:""})),a=="dossier_count"&&n(t=>({...t,dossier_count:""})),a=="submission_type"&&n(t=>({...t,submission_type:""})),a=="submission_mode"&&n(t=>({...t,submission_mode:""})),a=="submission_unit"&&n(t=>({...t,submission_unit:""})),c(a,s)},P=s=>{let a={...l};a.doc.push(...s),c(a)},F=s=>{s.preventDefault(),w.fire({title:'Click on "Yes" to submit the ACK with your comments for OPR verification, or click "No, Return" to go back to the form.',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, proceed!",cancelButtonText:"No, return"}).then(a=>{a.isConfirmed&&S(route("audit_eu_publishing"))})},M=s=>{w.fire({title:'Click on "Yes" to ACK the request or click on "No, return"  to return to the list.',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, proceed!",cancelButtonText:"No, return"}).then(a=>{a.isConfirmed&&J.post(route("progress-publishing",{id:s}))})},Y=s=>{let a={...l};a.audit.message=s.target.value,c(a)},R=s=>{if(s.link){let i=[];i.push(s.name),k.post("delete-file-pub",{docs:i,id:l.id})}var a={...l};let t=a.doc.map(i=>i.name).indexOf(s.name);a.doc.splice(t,1),c(a)},I=()=>{let s={...l},a=[];s.doc.map(t=>{t.link&&a.push(t.name)}),a.length>0&&k.post("delete-file-pub",{docs:a,id:l.id}),s.doc=[],c(s)},j=s=>({control:a=>({...a,...s&&{borderColor:"red !important"}})}),f=s=>{var a;if((!l.dossier_type||!l.dossier_count)&&(s==2||s==3||s==4||s==5||s==6)){l.dossier_type||n(t=>({...t,dossier_type:"this field is required"})),l.dossier_count||n(t=>({...t,dossier_count:"this field is required"}));return}if((!l.submission_type||!l.submission_mode||!l.submission_unit||!l.sequence)&&(s==3||s==4||s==5||s==6)){l.submission_type||n(t=>({...t,submission_type:"this field is required"})),l.submission_mode||n(t=>({...t,submission_mode:"this field is required"})),l.submission_unit||n(t=>({...t,submission_unit:"this field is required"})),l.sequence||n(t=>({...t,sequence:"this field is required"}));return}(a=m.current)==null||a.goto(s)},A=(s,a)=>{a.action=="clear"?c("tracking",""):c("tracking",s.value)},T=()=>{c("drug_substance",[...l.drug_substance,{drug_substance:"",manufacturer:""}])},E=s=>{let a={...l};a.drug_substance.splice(s,1),c(a)},B=()=>{c("drug_product",[...l.drug_product,{drug_product:"",manufacturer:""}])},V=s=>{let a={...l};a.drug_product.splice(s,1),c(a)};b.useState(x.drug_substance.map(s=>({label:s.substance,value:s.substance}))),b.useState(x.drug_product.map(s=>({label:s.drug_product,value:s.drug_product})));const[G,H]=b.useState({}),[U,W]=b.useState({}),K=(s,a)=>{var v;console.log(a);let t={...l};t.drug_substance[s].drug_substance=a?a.value:"",c(t);const i=a==null?void 0:a.value,g=((v=x.drug_substance.find(d=>d.substance===i))==null?void 0:v.ds_manufacturers.map(d=>({label:d.substance_manufacturer,value:d.substance_manufacturer})))||[];H(d=>({...d,[i]:g}))},z=(s,a)=>{var v;let t={...l};t.drug_product[s].drug_product=a?a.value:"",c(t);const i=a==null?void 0:a.value,g=((v=x.drug_product.find(d=>d.drug_product===i))==null?void 0:v.dp_manufacturers.map(d=>({label:d.product_manufacturer,value:d.product_manufacturer})))||[];W(d=>({...d,[i]:g}))},L=(s,a)=>{c(t=>{const i=[...t.drug_substance];return i[s]={...i[s],manufacturer:a},{...t,drug_substance:i}})},Z=(s,a)=>{c(t=>{const i=[...t.drug_product];return i[s]={...i[s],manufacturer:a},{...t,drug_product:i}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(se,{status:l.status})]}),e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:y,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=m.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(6),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"6"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 6"}),e.jsx("div",{className:"stepper-desc",children:"Dossier Review"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:F,children:[e.jsxs("div",{className:"mb-5",children:[e.jsx(ae,{data:l,myErrors:u,handleChange:o,handleSelectChange:h,selectStyles:j}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",value:l.uuid,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the submission type",style:{color:u.submission_type?"red":""},children:"Submission type (*)"}),e.jsx(N,{options:[{label:"maa",value:"maa"},{label:"var-type1a",value:"var-type1a"},{label:"var-type1ain",value:"var-type1ain"},{label:"var-type1b",value:"var-type1b"},{label:"var-type2",value:"var-type2"},{label:"var-nat",value:"var-nat"},{label:"extension",value:"extension"},{label:"rup",value:"rup"},{label:"psur",value:"psur"},{label:"psusa",value:"psusa"},{label:"rmp",value:"rmp"},{label:"renewal",value:"renewal"},{label:"pam-sob",value:"pam-sob"},{label:"pam-anx",value:"pam-anx"},{label:"pam-mea",value:"pam-mea"},{label:"pam-leg",value:"pam-leg"},{label:"pam-sda",value:"pam-sda"},{label:"pam-capa",value:"pam-capa"},{label:"pam-p45",value:"pam-p45"},{label:"pam-p46",value:"pam-p46"},{label:"pam-paes",value:"pam-paes"},{label:"pam-rec",value:"pam-rec"},{label:"pass107n",value:"pass107n"},{label:"pass107q",value:"pass107q"},{label:"asmf",value:"asmf"},{label:"pmf",value:"pmf"},{label:"referral-20",value:"referral-20"},{label:"referral-294",value:"referral-294"},{label:"referral-29p",value:"referral-29p"},{label:"referral-30",value:"referral-30"},{label:"referral-31",value:"referral-31"},{label:"referral-35",value:"referral-35"},{label:"referral-5-3",value:"referral-5-3"},{label:"referral-107i",value:"referral-107i"},{label:"referral-16c1c",value:"referral-16c1c"},{label:"referral-16c4",value:"referral-16c4"},{label:"annual-reassessment",value:"annual-reassessment"},{label:"clin-data-pub-rp",value:"clin-data-pub-rp"},{label:"clin-data-pub-fv",value:"clin-data-pub-fv"},{label:"paed-7-8-30",value:"paed-7-8-30"},{label:"paed-29",value:"paed-29"},{label:"paed-45",value:"paed-45"},{label:"paed-46",value:"paed-46"},{label:"articale-58",value:"articale-58"},{label:"notification-61-3",value:"notification-61-3"},{label:"transfer-ma",value:"transfer-ma"},{label:"lifting-suspension",value:"lifting-suspension"},{label:"withdrawal",value:"withdrawal"},{label:"cep",value:"cep"},{label:"none",value:"none"}],name:"submission_type",onChange:s=>h(s,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.submission_type,menuPortalTarget:document.body,styles:j(u.submission_type)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the submission mode",style:{color:u.submission_mode?"red":""},children:"Submission mode (*)"}),e.jsx(N,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:s=>h(s,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.submission_mode,menuPortalTarget:document.body,styles:j(u.submission_mode)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(N,{options:x.tracking_numbers.map(s=>({label:s.numbers,value:s.numbers})),name:"tracking",onChange:(s,a)=>A(s,a),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,defaultValue:l.tracking?{value:l.tracking,label:l.tracking}:"",menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({...s,width:"50%"})}}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:l.tracking,name:"tracking",style:{width:"50%"},onChange:o})]})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the applicable submission unit",style:{color:u.submission_unit?"red":""},children:"Submission unit (*)"}),e.jsx(N,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:s=>h(s,"submission_unit"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.submission_unit,menuPortalTarget:document.body,styles:j(u.submission_unit)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",value:l.applicant,onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",value:l.agency_code,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"productName",value:l.productName,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",value:l.inn,onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:u.sequence?"red":""},children:"Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",defaultValue:l.sequence,style:{borderColor:u.sequence?"red":""},onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",value:l.r_sequence,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",value:l.submission_description,onChange:o})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:l.mtremarks,name:"mtremarks",onChange:o})]})})]}),e.jsx(le,{metadata:x,data:l,handleSelectChange:h,handleDrugSubstanceChange:K,handleManufacturerChange:L,handleDrugProductChange:z,handleDpManufacturerChange:Z,manufacturerOptions:G,dpmanufacturerOptions:U,addDrugSubstanceFields:T,addDrugProductFields:B,removeDrugProductFields:V,removeDrugSubstanceFields:E}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(ee,{files:l.doc,upload:P,deleletFile:R,removeAll:I})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:l.docremarks,placeholder:"",onChange:o})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(_,{"data-enable-time":!0,value:l.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(_,{"data-enable-time":!0,value:l.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(_,{"data-enable-time":!0,value:l.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>c("adjusted_deadline",s)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:o})]})})]}),e.jsx("div",{className:"flex-column current","data-kt-stepper-element":"content",children:e.jsx("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_2",children:e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_1",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier audit"})]}),e.jsxs("div",{id:"kt_accordion_2_item_1",className:"fs-6 collapse show p-10","data-bs-parent":"#kt_accordion_2",children:[e.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:r.audit?r.audit.map((s,a)=>s.message&&s.user.id!==p.auth.user.id?e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user?s.user.name.slice(0,2):""})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:C(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},a):e.jsx("div",{className:"d-flex justify-content-end mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-end",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"me-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:C(s.date).format("MM/DD/YYYY H:s")})}),e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})})]}),e.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:s.message})]})},a)):""}),e.jsx("textarea",{className:"form-control form-control-flush mb-3",rows:1,"data-kt-element":"input",onChange:Y,placeholder:"Type a message"})]})]})})})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:D,children:"Back"})}),e.jsxs("div",{children:[p.auth.user.current_team_id==3?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"btn btn-primary me-2","data-kt-stepper-action":"submit",onClick:()=>M(l.id),children:e.jsx("span",{className:"indicator-label",children:"Accept"})}),e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Reject"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]})]}):e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:q,children:"Continue"})]})]})]})]})]})};ne.layout=p=>e.jsx(Q,{children:p,auth:p.props.auth});export{ne as default};
