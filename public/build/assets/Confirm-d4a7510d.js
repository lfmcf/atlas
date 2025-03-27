import{r as m,W as L,j as e,b as C}from"./app-85cb43ee.js";import{n as N,A as Q,S as X}from"./AuthenticatedLayout-ef394a1f.js";import{S as O}from"./MenuComponent-3b167d93.js";import{F as g}from"./index-6a50e7dd.js";/* empty css                  */import{D as ee}from"./Dropzone-8c740f03.js";import{S as se}from"./StatusComponent-567739d4.js";import{G as ae}from"./GeneralInformation-d9230d38.js";import{P as le}from"./ProductMetaData-496605ef.js";import{C as re}from"./ConfirmationMessage-d197c8e3.js";import{w as te}from"./sweetalert2-react-content.es-4637ec6b.js";import"./MetronicSplashScreen-1bb87bb1.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const ne=te(X),ie=x=>{const{metadata:b,folder:r}=x,y=m.useRef(null),u=m.useRef(null),[p,n]=m.useState({dossier_type:"",dossier_count:"",submission_type:"",submission_mode:"",submission_unit:"",sequence:""}),[w,S]=m.useState(!1),[q,ce]=m.useState("");m.useState(r.document);const{data:a,setData:c,post:k,processing:oe,errors:de,clearErrors:me,reset:ue}=L({id:r._id,form:r.form,region:r.region,procedure:r.procedure,productName:r.product_name,dossier_contact:r.dossier_contact,object:r.object,country:r.country,dossier_type:r.dossier_type,dossier_count:r.dossier_count,remarks:r.remarks,uuid:r.uuid,submission_type:r.submission_type,submission_mode:r.submission_mode,tracking:r?r.tracking:"",trackingExtra:r?r.trackingExtra:"",submission_unit:r.submission_unit,applicant:r.applicant,agency_code:r.agency_code,inn:r.inn,sequence:r.sequence,r_sequence:r.r_sequence,submission_description:r.submission_description,mtremarks:r.mtremarks,indication:r.indication,drug_substance:r.drug_substance,drug_product:r.drug_product,dosage_form:r.dosage_form,excipient:r.excipient,doc:r&&r.doc!==null?r.doc:[],docremarks:r.docremarks,request_date:r.request_date,deadline:r.deadline,adjusted_deadline:new Date,adjustedDeadlineComments:"",status:r?r.status:""});m.useEffect(()=>{u.current=O.createInsance(y.current)},[]);const D=()=>{if(u.current){if(u.current.getCurrentStepIndex()===1&&(!a.dossier_type||!a.dossier_count)){a.dossier_type||n(s=>({...s,dossier_type:"this field is required"})),a.dossier_count||n(s=>({...s,dossier_count:"this field is required"}));return}if(u.current.getCurrentStepIndex()===2&&(!a.submission_type||!a.submission_mode||!a.submission_unit||!a.sequence)){a.submission_type||n(s=>({...s,submission_type:"this field is required"})),a.submission_mode||n(s=>({...s,submission_mode:"this field is required"})),a.submission_unit||n(s=>({...s,submission_unit:"this field is required"})),a.sequence||n(s=>({...s,sequence:"this field is required"}));return}u.current.goNext()}},P=()=>{u.current&&u.current.goPrev()},o=s=>{s.target.name=="dossier_count"&&n(l=>({...l,dossier_count:""})),s.target.name=="sequence"&&n(l=>({...l,sequence:""})),c(s.target.name,s.target.value)},f=(s,l)=>{l=="dossier_type"&&n(t=>({...t,dossier_type:""})),l=="dossier_count"&&n(t=>({...t,dossier_count:""})),l=="submission_type"&&n(t=>({...t,submission_type:""})),l=="submission_mode"&&n(t=>({...t,submission_mode:""})),l=="submission_unit"&&n(t=>({...t,submission_unit:""})),c(l,s)},F=s=>{let l={...a};l.doc.push(...s),c(l)},M=s=>{s.preventDefault(),ne.fire({title:'Click on "Yes" to submit your request or click on "No, return" to return to the form.',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, proceed!",cancelButtonText:"No, return"}).then(l=>{l.isConfirmed&&k(route("confirm_eu_publishing"))})},I=()=>{S(!1)},T=s=>{k(route("confirm_eu_publishing"))},E=s=>{if(s.link){let i=[];i.push(s.name),C.post("delete-file-pub",{docs:i,id:a.id})}var l={...a};let t=l.doc.map(i=>i.name).indexOf(s.name);l.doc.splice(t,1),c(l)},R=()=>{let s={...a},l=[];s.doc.map(t=>{t.link&&l.push(t.name)}),l.length>0&&C.post("delete-file-pub",{docs:l,id:a.id}),s.doc=[],c(s)},v=s=>({control:l=>({...l,...s&&{borderColor:"red !important"}})}),j=s=>{var l;if((!a.dossier_type||!a.dossier_count)&&(s==2||s==3||s==4||s==5)){a.dossier_type||n(t=>({...t,dossier_type:"this field is required"})),a.dossier_count||n(t=>({...t,dossier_count:"this field is required"}));return}if((!a.submission_type||!a.submission_mode||!a.submission_unit||!a.sequence)&&(s==3||s==4||s==5)){a.submission_type||n(t=>({...t,submission_type:"this field is required"})),a.submission_mode||n(t=>({...t,submission_mode:"this field is required"})),a.submission_unit||n(t=>({...t,submission_unit:"this field is required"})),a.sequence||n(t=>({...t,sequence:"this field is required"}));return}(l=u.current)==null||l.goto(s)},A=(s,l)=>{l.action=="clear"?c("tracking",""):c("tracking",s.value)},V=()=>{c("drug_substance",[...a.drug_substance,{drug_substance:"",manufacturer:""}])},G=s=>{let l={...a};l.drug_substance.splice(s,1),c(l)},Y=()=>{c("drug_product",[...a.drug_product,{drug_product:"",manufacturer:""}])},B=s=>{let l={...a};l.drug_product.splice(s,1),c(l)};m.useState(b.drug_substance.map(s=>({label:s.substance,value:s.substance}))),m.useState(b.drug_product.map(s=>({label:s.drug_product,value:s.drug_product})));const[H,U]=m.useState({}),[W,z]=m.useState({}),Z=(s,l)=>{var h;let t={...a};t.drug_substance[s].drug_substance=l?l.value:"",c(t);const i=l==null?void 0:l.value,_=((h=b.drug_substance.find(d=>d.substance===i))==null?void 0:h.ds_manufacturers.map(d=>({label:d.substance_manufacturer,value:d.substance_manufacturer})))||[];U(d=>({...d,[i]:_}))},$=(s,l)=>{var h;let t={...a};t.drug_product[s].drug_product=l?l.value:"",c(t);const i=l==null?void 0:l.value,_=((h=b.drug_product.find(d=>d.drug_product===i))==null?void 0:h.dp_manufacturers.map(d=>({label:d.product_manufacturer,value:d.product_manufacturer})))||[];z(d=>({...d,[i]:_}))},J=(s,l)=>{c(t=>{const i=[...t.drug_substance];return i[s]={...i[s],manufacturer:l},{...t,drug_substance:i}})},K=(s,l)=>{c(t=>{const i=[...t.drug_product];return i[s]={...i[s],manufacturer:l},{...t,drug_product:i}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(se,{status:a.status})]}),e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:y,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=u.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:M,children:[e.jsxs("div",{className:"mb-5",children:[e.jsx(ae,{data:a,myErrors:p,handleChange:o,handleSelectChange:f,selectStyles:v}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",value:a.uuid,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the submission type",style:{color:p.submission_type?"red":""},children:"Submission type (*)"}),e.jsx(N,{options:[{label:"maa",value:"maa"},{label:"var-type1a",value:"var-type1a"},{label:"var-type1ain",value:"var-type1ain"},{label:"var-type1b",value:"var-type1b"},{label:"var-type2",value:"var-type2"},{label:"var-nat",value:"var-nat"},{label:"extension",value:"extension"},{label:"rup",value:"rup"},{label:"psur",value:"psur"},{label:"psusa",value:"psusa"},{label:"rmp",value:"rmp"},{label:"renewal",value:"renewal"},{label:"pam-sob",value:"pam-sob"},{label:"pam-anx",value:"pam-anx"},{label:"pam-mea",value:"pam-mea"},{label:"pam-leg",value:"pam-leg"},{label:"pam-sda",value:"pam-sda"},{label:"pam-capa",value:"pam-capa"},{label:"pam-p45",value:"pam-p45"},{label:"pam-p46",value:"pam-p46"},{label:"pam-paes",value:"pam-paes"},{label:"pam-rec",value:"pam-rec"},{label:"pass107n",value:"pass107n"},{label:"pass107q",value:"pass107q"},{label:"asmf",value:"asmf"},{label:"pmf",value:"pmf"},{label:"referral-20",value:"referral-20"},{label:"referral-294",value:"referral-294"},{label:"referral-29p",value:"referral-29p"},{label:"referral-30",value:"referral-30"},{label:"referral-31",value:"referral-31"},{label:"referral-35",value:"referral-35"},{label:"referral-5-3",value:"referral-5-3"},{label:"referral-107i",value:"referral-107i"},{label:"referral-16c1c",value:"referral-16c1c"},{label:"referral-16c4",value:"referral-16c4"},{label:"annual-reassessment",value:"annual-reassessment"},{label:"clin-data-pub-rp",value:"clin-data-pub-rp"},{label:"clin-data-pub-fv",value:"clin-data-pub-fv"},{label:"paed-7-8-30",value:"paed-7-8-30"},{label:"paed-29",value:"paed-29"},{label:"paed-45",value:"paed-45"},{label:"paed-46",value:"paed-46"},{label:"articale-58",value:"articale-58"},{label:"notification-61-3",value:"notification-61-3"},{label:"transfer-ma",value:"transfer-ma"},{label:"lifting-suspension",value:"lifting-suspension"},{label:"withdrawal",value:"withdrawal"},{label:"cep",value:"cep"},{label:"none",value:"none"}],name:"submission_type",onChange:s=>f(s,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.submission_type,menuPortalTarget:document.body,styles:v(p.submission_type)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the submission mode",style:{color:p.submission_mode?"red":""},children:"Submission mode (*)"}),e.jsx(N,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:s=>f(s,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.submission_mode,menuPortalTarget:document.body,styles:v(p.submission_mode)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(N,{options:b.tracking_numbers.map(s=>({label:s.numbers,value:s.numbers})),name:"tracking",onChange:(s,l)=>A(s,l),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,defaultValue:a.tracking?{value:a.tracking,label:a.tracking}:"",menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({...s,width:"50%"})}}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:a.tracking,name:"tracking",style:{width:"50%"},onChange:o})]})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the applicable submission unit",style:{color:p.submission_unit?"red":""},children:"Submission unit (*)"}),e.jsx(N,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:s=>f(s,"submission_unit"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.submission_unit,menuPortalTarget:document.body,styles:v(p.submission_unit)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",value:a.applicant,onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",value:a.agency_code,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"productName",value:a.productName,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",value:a.inn,onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:p.sequence?"red":""},children:"Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",defaultValue:a.sequence,style:{borderColor:p.sequence?"red":""},onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",value:a.r_sequence,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",value:a.submission_description,onChange:o})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:a.mtremarks,name:"mtremarks",onChange:o})]})})]}),e.jsx(le,{metadata:b,data:a,handleSelectChange:f,handleDrugSubstanceChange:Z,handleManufacturerChange:J,handleDrugProductChange:$,handleDpManufacturerChange:K,manufacturerOptions:H,dpmanufacturerOptions:W,addDrugSubstanceFields:V,addDrugProductFields:Y,removeDrugProductFields:B,removeDrugSubstanceFields:G}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(ee,{files:a.doc,upload:F,deleletFile:E,removeAll:R})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:a.docremarks,placeholder:"",onChange:o})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(g,{"data-enable-time":!0,value:a.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(g,{"data-enable-time":!0,value:a.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",title:"Provider's actual deadline",children:"Operational deadline"}),e.jsx(g,{"data-enable-time":!0,value:a.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>c("adjusted_deadline",s)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:o})]})})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:P,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:D,children:"Continue"})]})]})]})]}),e.jsx(re,{show:w,onCancel:I,actionType:q,onConfirm:T})]})};ie.layout=x=>e.jsx(Q,{children:x,auth:x.props.auth});export{ie as default};
