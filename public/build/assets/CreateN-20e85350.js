import{r as b,W as Z,j as e,b as w}from"./app-6194dc10.js";import{n as _,A as $}from"./AuthenticatedLayout-d29d0d35.js";import{S as J}from"./MenuComponent-eb0305ae.js";import{F as q}from"./index-36d46753.js";/* empty css                  */import{D as K}from"./Dropzone-7d0e86b2.js";import{S as Q}from"./StatusComponent-78a0d730.js";import{G as X}from"./GeneralInformation-3a4de73a.js";import{P as O}from"./ProductMetaData-3e6c4043.js";import"./MetronicSplashScreen-fcb8b28c.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const ee=f=>{const{metadata:u,folder:r}=f;var x=f.auth.user.trigramme;x=x==null?void 0:x.toUpperCase();const C=b.useRef(null),m=b.useRef(null);var y=new URLSearchParams(window.location.search);const[p,i]=b.useState({dossier_type:"",dossier_count:"",submission_type:"",submission_mode:"",submission_unit:"",sequence:""}),{data:a,setData:c,post:S,processing:se,errors:ae,clearErrors:le,reset:re}=Z({id:r?r._id:"",form:r?r.form:"Publishing",region:r?r.region:y.get("region"),procedure:r?r.procedure:y.get("procedure"),productName:r?r.product_name:y.get("product"),dossier_contact:r?r.dossier_contact:x,object:r?r.object:"",country:{value:u.country,code:u.code},dossier_type:r?r.dossier_type:"",dossier_count:r?r.dossier_count:"",remarks:r?r.remarks:"",uuid:u.uuid,submission_type:r?r.submission_type:"",submission_mode:r?r.submission_mode:"",tracking:r?r.tracking:"",trackingExtra:r?r.trackingExtra:"",submission_unit:r?r.submission_unit:"",applicant:u.applicant,agency_code:u.agencyCode,inn:u.inn,sequence:r?r.sequence:"",r_sequence:r?r.r_sequence:"",submission_description:r?r.submission_description:"",mtremarks:r?r.mtremarks:"",indication:r?r.indication:"",drug_substance:r?r.drug_substance:[{drug_substance:"",manufacturer:""}],drug_product:r?r.drug_product:[{drug_product:"",manufacturer:""}],dosage_form:r?r.dosage_form:"",excipient:r?r.excipient:"",doc:r&&r.doc!==null?r.doc:[],docremarks:r?r.docremarks:"",request_date:new Date,deadline:new Date,status:r?r.status:"",created_by:f.auth.user.id});if(!u)return e.jsxs("div",{children:[e.jsx("h1",{children:"Error"}),e.jsx("p",{children:"Error while fetching metadata"})]});b.useEffect(()=>{m.current=J.createInsance(C.current)},[]);const D=()=>{if(m.current){if(m.current.getCurrentStepIndex()===1&&(!a.dossier_type||!a.dossier_count)){a.dossier_type||i(s=>({...s,dossier_type:"this field is required"})),a.dossier_count||i(s=>({...s,dossier_count:"this field is required"}));return}if(m.current.getCurrentStepIndex()===2&&(!a.submission_type||!a.submission_mode||!a.submission_unit||!a.sequence)){a.submission_type||i(s=>({...s,submission_type:"this field is required"})),a.submission_mode||i(s=>({...s,submission_mode:"this field is required"})),a.submission_unit||i(s=>({...s,submission_unit:"this field is required"})),a.sequence||i(s=>({...s,sequence:"this field is required"}));return}m.current.goNext()}},P=()=>{m.current&&m.current.goPrev()},d=s=>{s.target.name=="dossier_count"&&i(l=>({...l,dossier_count:""})),s.target.name=="sequence"&&i(l=>({...l,sequence:""})),c(s.target.name,s.target.value)},v=(s,l)=>{l=="dossier_type"&&i(t=>({...t,dossier_type:""})),l=="dossier_count"&&i(t=>({...t,dossier_count:""})),l=="submission_type"&&i(t=>({...t,submission_type:""})),l=="submission_mode"&&i(t=>({...t,submission_mode:""})),l=="submission_unit"&&i(t=>({...t,submission_unit:""})),c(l,s)},F=s=>{let l={...a};l.doc.push(...s),c(l)};b.useEffect(()=>{let s=new Date,l=s.getHours(),t=a.dossier_type?a.dossier_type.delai:"",n=new Date,h=1;for(l<12?t=t:t=t+1;h<t;)n=new Date(s.setDate(s.getDate()+1)),n.getDay()!=0&&n.getDay()!=6&&h++;c("deadline",new Date(n))},[a.dossier_type]);const k=(s,l)=>{s.preventDefault(),S(route("store_eu_publishing",{type:l}))},E=()=>{let s={...a},l=[];s.doc.map(t=>{t.link&&l.push(t.name)}),l.length>0&&w.post("delete-file-pub",{docs:l,id:a.id}),s.doc=[],c(s)},V=s=>{if(s.link){let n=[];n.push(s.name),w.post("delete-file-pub",{docs:n,id:a.id})}var l={...a};let t=l.doc.map(n=>n.name).indexOf(s.name);l.doc.splice(t,1),c(l)},g=s=>({control:l=>({...l,...s&&{borderColor:"red !important"}})}),j=s=>{var l;if((!a.dossier_type||!a.dossier_count)&&(s==2||s==3||s==4||s==5)){a.dossier_type||i(t=>({...t,dossier_type:"this field is required"})),a.dossier_count||i(t=>({...t,dossier_count:"this field is required"}));return}if((!a.submission_type||!a.submission_mode||!a.submission_unit||!a.sequence)&&(s==3||s==4||s==5)){a.submission_type||i(t=>({...t,submission_type:"this field is required"})),a.submission_mode||i(t=>({...t,submission_mode:"this field is required"})),a.submission_unit||i(t=>({...t,submission_unit:"this field is required"})),a.sequence||i(t=>({...t,sequence:"this field is required"}));return}(l=m.current)==null||l.goto(s)},I=(s,l)=>{l.action=="clear"?c("tracking",""):c("tracking",s.value)},M=()=>{c("drug_substance",[...a.drug_substance,{drug_substance:"",manufacturer:""}])},R=()=>{c("drug_product",[...a.drug_product,{drug_product:"",manufacturer:""}])},A=s=>{let l={...a};l.drug_product.splice(s,1),c(l)},T=s=>{let l={...a};l.drug_substance.splice(s,1),c(l)},[U,G]=b.useState({}),[H,W]=b.useState({}),Y=(s,l)=>{var N;console.log(l);let t={...a};t.drug_substance[s].drug_substance=l?l.value:"",c(t);const n=l==null?void 0:l.value,h=((N=u.drug_substance.find(o=>o.substance===n))==null?void 0:N.ds_manufacturers.map(o=>({label:o.substance_manufacturer,value:o.substance_manufacturer})))||[];G(o=>({...o,[n]:h}))},z=(s,l)=>{var N;let t={...a};t.drug_product[s].drug_product=l?l.value:"",c(t);const n=l==null?void 0:l.value,h=((N=u.drug_product.find(o=>o.drug_product===n))==null?void 0:N.dp_manufacturers.map(o=>({label:o.product_manufacturer,value:o.product_manufacturer})))||[];W(o=>({...o,[n]:h}))},B=(s,l)=>{c(t=>{const n=[...t.drug_substance];return n[s]={...n[s],manufacturer:l},{...t,drug_substance:n}})},L=(s,l)=>{c(t=>{const n=[...t.drug_product];return n[s]={...n[s],manufacturer:l},{...t,drug_product:n}})};return e.jsxs(e.Fragment,{children:[r?e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(Q,{status:a.status})]}):"",e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:C,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=m.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:k,children:[e.jsxs("div",{className:"mb-5",children:[e.jsx(X,{data:a,myErrors:p,handleChange:d,handleSelectChange:v,selectStyles:g}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Universal Unique Identifier. A unique identifier of the Publishing dossier",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:a.uuid,onChange:d})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the submission type",style:{color:p.submission_type?"red":""},children:"Submission type (*)"}),e.jsx(_,{options:[{label:"maa",value:"maa"},{label:"var-type1a",value:"var-type1a"},{label:"var-type1ain",value:"var-type1ain"},{label:"var-type1b",value:"var-type1b"},{label:"var-type2",value:"var-type2"},{label:"var-nat",value:"var-nat"},{label:"extension",value:"extension"},{label:"rup",value:"rup"},{label:"psur",value:"psur"},{label:"psusa",value:"psusa"},{label:"rmp",value:"rmp"},{label:"renewal",value:"renewal"},{label:"pam-sob",value:"pam-sob"},{label:"pam-anx",value:"pam-anx"},{label:"pam-mea",value:"pam-mea"},{label:"pam-leg",value:"pam-leg"},{label:"pam-sda",value:"pam-sda"},{label:"pam-capa",value:"pam-capa"},{label:"pam-p45",value:"pam-p45"},{label:"pam-p46",value:"pam-p46"},{label:"pam-paes",value:"pam-paes"},{label:"pam-rec",value:"pam-rec"},{label:"pass107n",value:"pass107n"},{label:"pass107q",value:"pass107q"},{label:"asmf",value:"asmf"},{label:"pmf",value:"pmf"},{label:"referral-20",value:"referral-20"},{label:"referral-294",value:"referral-294"},{label:"referral-29p",value:"referral-29p"},{label:"referral-30",value:"referral-30"},{label:"referral-31",value:"referral-31"},{label:"referral-35",value:"referral-35"},{label:"referral-5-3",value:"referral-5-3"},{label:"referral-107i",value:"referral-107i"},{label:"referral-16c1c",value:"referral-16c1c"},{label:"referral-16c4",value:"referral-16c4"},{label:"annual-reassessment",value:"annual-reassessment"},{label:"clin-data-pub-rp",value:"clin-data-pub-rp"},{label:"clin-data-pub-fv",value:"clin-data-pub-fv"},{label:"paed-7-8-30",value:"paed-7-8-30"},{label:"paed-29",value:"paed-29"},{label:"paed-45",value:"paed-45"},{label:"paed-46",value:"paed-46"},{label:"articale-58",value:"articale-58"},{label:"notification-61-3",value:"notification-61-3"},{label:"transfer-ma",value:"transfer-ma"},{label:"lifting-suspension",value:"lifting-suspension"},{label:"withdrawal",value:"withdrawal"},{label:"cep",value:"cep"},{label:"none",value:"none"}],name:"submission_type",onChange:s=>v(s,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.submission_type,menuPortalTarget:document.body,styles:g(p.submission_type)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the submission mode",style:{color:p.submission_mode?"red":""},children:"Submission mode (*)"}),e.jsx(_,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:s=>v(s,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.submission_mode,menuPortalTarget:document.body,styles:g(p.submission_mode)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(_,{options:u.tracking_numbers.map(s=>({label:s.numbers,value:s.numbers})),name:"tracking",onChange:(s,l)=>I(s,l),className:"react-select-container me-1",classNamePrefix:"react-select",placeholder:"",isClearable:!0,defaultValue:a.tracking?{value:a.tracking,label:a.tracking}:"",menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({...s,width:"50%"})}}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:a.tracking,name:"tracking",style:{width:"50%"},onChange:d})]})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the applicable submission unit",style:{color:p.submission_unit?"red":""},children:"Submission unit (*)"}),e.jsx(_,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:s=>v(s,"submission_unit"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.submission_unit,menuPortalTarget:document.body,styles:g(p.submission_unit)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Name of the company submitting the eCTD",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",defaultValue:a.applicant,onChange:d})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Name of the agency code of the concerned country",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:a.agency_code,onChange:d})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",title:"Product name",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"productName",defaultValue:a.productName,onChange:d})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",title:"INN - Mandatory for sequence 0000",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:a.inn,onChange:d})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:p.sequence?"red":""},children:"Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",defaultValue:a.sequence,style:{borderColor:p.sequence?"red":""},onChange:d})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the related sequence number",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:a.r_sequence,onChange:d})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Submission description",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:a.submission_description,onChange:d})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:a.mtremarks,name:"mtremarks",onChange:d})]})})]}),e.jsx(O,{metadata:u,data:a,handleSelectChange:v,handleDrugSubstanceChange:Y,handleManufacturerChange:B,handleDrugProductChange:z,handleDpManufacturerChange:L,manufacturerOptions:U,dpmanufacturerOptions:H,addDrugSubstanceFields:M,addDrugProductFields:R,removeDrugProductFields:A,removeDrugSubstanceFields:T}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(K,{files:a.doc,upload:F,deleletFile:V,removeAll:E})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:a.docremarks,placeholder:"",onChange:d})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(q,{"data-enable-time":!0,value:a.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(q,{"data-enable-time":!0,value:a.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"mb-10"})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:P,children:"Back"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"btn btn-primary m-3","data-kt-stepper-action":"submit",onClick:s=>k(s,"save"),children:e.jsx("span",{className:"indicator-label",children:"Save"})}),e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",onClick:s=>k(s,"submit"),children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:D,children:"Continue"})]})]})]})]})]})};ee.layout=f=>e.jsx($,{children:f,auth:f.props.auth});export{ee as default};
