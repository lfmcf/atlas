import{r as m,W as N,j as e}from"./app-85cb43ee.js";import{A as g,n}from"./AuthenticatedLayout-ef394a1f.js";import{S as _}from"./MenuComponent-3b167d93.js";import{F as d}from"./index-6a50e7dd.js";/* empty css                  */import"./MetronicSplashScreen-1bb87bb1.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const z=u=>{const{folder:s}=u,p=m.useRef(null),t=m.useRef(null),{data:l,setData:o,post:x,processing:y,errors:C,clearErrors:k,reset:P}=N({id:s._id,form:s.from,region:s.region,procedure:s.procedure,productName:s.product_name,dossier_contact:s.dossier_contact,object:s.object,country:s.country,dossier_type:s.dossier_type,dossier_count:s.dossier_count,remarks:s.remarks,uuid:s.uuid,submission_type:s.submission_type,submission_mode:s.submission_mode,tracking:s.tracking,submission_unit:s.submission_unit,applicant:s.applicant,agency_code:s.agency_code,inn:s.inn,sequence:s.sequence,r_sequence:s.r_sequence,submission_description:s.submission_description,mtremarks:s.mtremarks,indication:s.indication,manufacturer:s.manufacturer,drug_substance:s.drug_substance,drug_substance_manufacturer:s.drug_substance_manufacturer,drug_product:s.drug_product,drug_product_manufacturer:s.drug_product_manufacturer,dosage_form:s.dosage_form,excipient:s.excipient,doc:"",docremarks:s.docremarks,request_date:s.request_date,deadline:s.deadline,adjusted_deadline:s.adjusted_deadline?s.adjusted_deadline:new Date,adjustedDeadlineComments:""});m.useEffect(()=>{t.current=_.createInsance(p.current)},[]);const b=()=>{t.current&&(t.current.getCurrentStepIndex(),t.current.getCurrentStepIndex(),t.current.goNext())},h=()=>{t.current&&t.current.goPrev()},r=a=>{o(a.target.name,a.target.value)},c=(a,i)=>{o(i,a)},v=a=>{let i={...l};i.doc=[],Promise.all([...a.target.files].map(f=>i.doc.push(f))),o(i)},j=a=>{a.preventDefault(),x(route("postvalidate"))};return e.jsx(g,{auth:u.auth,children:e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:p,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:j,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_contact",value:l.dossier_contact,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",value:l.object,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"productName",value:l.productName,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission country"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"country",value:l.country})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier type"}),e.jsx(n,{options:[{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier",delai:3},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:a=>c(a,"dossier_type"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.dossier_type,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier count"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_count",value:l.dossier_count,onChange:r})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,value:l.remarks,name:"remarks",onChange:r})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",value:l.uuid,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission type"}),e.jsx(n,{options:[{label:"maa",value:"maa"},{label:"var-type1a",value:"var-type1a"},{label:"var-type1ain",value:"var-type1ain"},{label:"var-type1b",value:"var-type1b"},{label:"var-type2",value:"var-type2"},{label:"var-nat",value:"var-nat"},{label:"extension",value:"extension"},{label:"rup",value:"rup"},{label:"psur",value:"psur"},{label:"psusa",value:"psusa"},{label:"rmp",value:"rmp"},{label:"renewal",value:"renewal"},{label:"pam-sob",value:"pam-sob"},{label:"pam-anx",value:"pam-anx"},{label:"pam-mea",value:"pam-mea"},{label:"pam-leg",value:"pam-leg"},{label:"pam-sda",value:"pam-sda"},{label:"pam-capa",value:"pam-capa"},{label:"pam-p45",value:"pam-p45"},{label:"pam-p46",value:"pam-p46"},{label:"pam-paes",value:"pam-paes"},{label:"pam-rec",value:"pam-rec"},{label:"pass107n",value:"pass107n"},{label:"pass107q",value:"pass107q"},{label:"asmf",value:"asmf"},{label:"pmf",value:"pmf"},{label:"referral-20",value:"referral-20"},{label:"referral-294",value:"referral-294"},{label:"referral-29p",value:"referral-29p"},{label:"referral-30",value:"referral-30"},{label:"referral-31",value:"referral-31"},{label:"referral-35",value:"referral-35"},{label:"referral-5-3",value:"referral-5-3"},{label:"referral-107i",value:"referral-107i"},{label:"referral-16c1c",value:"referral-16c1c"},{label:"referral-16c4",value:"referral-16c4"},{label:"annual-reassessment",value:"annual-reassessment"},{label:"clin-data-pub-rp",value:"clin-data-pub-rp"},{label:"clin-data-pub-fv",value:"clin-data-pub-fv"},{label:"paed-7-8-30",value:"paed-7-8-30"},{label:"paed-29",value:"paed-29"},{label:"paed-45",value:"paed-45"},{label:"paed-46",value:"paed-46"},{label:"articale-58",value:"articale-58"},{label:"notification-61-3",value:"notification-61-3"},{label:"transfer-ma",value:"transfer-ma"},{label:"lifting-suspension",value:"lifting-suspension"},{label:"withdrawal",value:"withdrawal"},{label:"cep",value:"cep"},{label:"none",value:"none"}],name:"submission_type",onChange:a=>c(a,"submission_type"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.submission_type,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission mode"}),e.jsx(n,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:a=>c(a,"submission_mode"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.submission_mode,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx(n,{options:[],name:"tracking",onChange:a=>c(a,"tracking"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.tracking,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission unit"}),e.jsx(n,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:a=>c(a,"submission_unit"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.submission_unit,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",value:l.applicant,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",value:l.agency_code,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"productName",value:l.productName,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",value:l.inn,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",value:l.sequence,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",value:l.r_sequence,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",value:l.submission_description,onChange:r})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",name:"mtremarks",onChange:r})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(n,{name:"indication",onChange:a=>c(a,"indication"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.indication,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Manufacturer"}),e.jsx(n,{name:"manufacturer",onChange:a=>c(a,"manufacturer"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.manufacturer,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"drug_substance",value:l.drug_substance,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance manufacturer"}),e.jsx(n,{name:"drug_substance_manufacturer",onChange:a=>c(a,"drug_substance_manufacturer"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.drug_substance_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"drug_product",value:l.drug_product,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacturer"}),e.jsx(n,{name:"drug_product_manufacturer",onChange:a=>c(a,"drug_product_manufacturer"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.drug_product_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(n,{name:"dosage_form",onChange:a=>c(a,"dosage_form"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(n,{name:"excipient",onChange:a=>c(a,"excipient"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.excipient,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"col-12 mb-10",children:[e.jsx("label",{className:"form-label",children:"uploaded documents"}),e.jsx("ul",{children:s.doc?s.doc.map((a,i)=>e.jsx("li",{children:e.jsx("a",{href:a.link,target:"blank",className:"text-primary fw-semibold fs-6 me-2",children:a.name})},i)):""})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Attached documents"}),e.jsx("input",{type:"file",multiple:!0,className:"form-control form-control-solid",name:"doc",onChange:v})]}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx("div",{className:"d-flex align-items-center text-gray-400 h-100",children:l.doc?l.doc.map(a=>e.jsx("span",{className:"me-2 fs-5",children:a.name})):""})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",value:l.docremarks,placeholder:"",onChange:r})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(d,{"data-enable-time":!0,value:l.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(d,{"data-enable-time":!0,value:l.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(d,{"data-enable-time":!0,value:l.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:a=>o("adjusted_deadline",a)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:r})]})})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:h,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:b,children:"Continue"})]})]})]})]})})};export{z as default};
