import{r as x,W as P,j as e,b as f}from"./app-16abb1c0.js";import{i as o,A as D}from"./AuthenticatedLayout-ff32676c.js";import{S}from"./MenuComponent-243ead4e.js";import{F as b}from"./index-f3c22392.js";/* empty css                  */import{D as q}from"./Dropzone-b6adfd56.js";import"./MetronicSplashScreen-c055a298.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const I=m=>{const{metadata:N,folder:s}=m,h=x.useRef(null),c=x.useRef(null);x.useState(s.document);const{data:l,setData:i,post:j,processing:M,errors:A,clearErrors:R,reset:F}=P({id:s._id,form:s.form,region:s.region,procedure:s.procedure,productName:s.product_name,dossier_contact:s.dossier_contact,object:s.object,country:s.country,dossier_type:s.dossier_type,dossier_count:s.dossier_count,remarks:s.remarks,uuid:s.uuid,submission_type:s.submission_type,submission_mode:s.submission_mode,tracking:s?s.tracking:"",trackingExtra:s?s.trackingExtra:"",submission_unit:s.submission_unit,applicant:s.applicant,agency_code:s.agency_code,inn:s.inn,sequence:s.sequence,r_sequence:s.r_sequence,submission_description:s.submission_description,mtremarks:s.mtremarks,indication:s.indication,manufacturer:s.manufacturer,drug_substance:s.drug_substance,drug_substance_manufacturer:s.drug_substance_manufacturer,drug_product:s.drug_product,drug_product_manufacturer:s.drug_product_manufacturer,dosage_form:s.dosage_form,excipient:s.excipient,doc:s&&s.doc!==null?s.doc:[],docremarks:s.docremarks,request_date:s.request_date,deadline:s.deadline,adjusted_deadline:new Date,adjustedDeadlineComments:""});let d=N.trackingNumber;d=d.split(/\r?\n/);let v=[];d.length>1&&(v=d.map(a=>({label:a,value:a}))),x.useEffect(()=>{c.current=S.createInsance(h.current)},[]);const g=()=>{c.current&&(c.current.getCurrentStepIndex(),c.current.getCurrentStepIndex(),c.current.goNext())},y=()=>{c.current&&c.current.goPrev()},r=a=>{i(a.target.name,a.target.value)},t=(a,n)=>{i(n,a)},_=a=>{let n={...l};n.doc.push(...a),i(n)},k=a=>{a.preventDefault(),j(route("confirm-publishing"))},C=a=>{if(a.link){let p=[];p.push(a.name),f.post("delete-file-pub",{docs:p,id:l.id})}var n={...l};let u=n.doc.map(p=>p.name).indexOf(a.name);n.doc.splice(u,1),i(n)},w=()=>{let a={...l},n=[];a.doc.map(u=>{u.link&&n.push(u.name)}),n.length>0&&f.post("delete-file-pub",{docs:n,id:l.id}),a.doc=[],i(a)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:h,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var a;return(a=c.current)==null?void 0:a.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var a;return(a=c.current)==null?void 0:a.goto(2)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var a;return(a=c.current)==null?void 0:a.goto(3)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var a;return(a=c.current)==null?void 0:a.goto(4)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var a;return(a=c.current)==null?void 0:a.goto(5)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:k,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_contact",value:l.dossier_contact,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",value:l.object,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"productName",value:l.productName,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission country"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"country",value:l.country})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier type"}),e.jsx(o,{options:[{label:"Baseline Dossier (M1-M2-M3)",value:"Baseline Dossier (M1-M2-M3)",delai:5},{label:"Baseline Dossier (M1-M5)",value:"Baseline Dossier (M1-M5)",delai:9},{label:"Marketing Authorisation Dossier / BLA (m1-m5)",value:"Marketing Authorisation Dossier / BLA (m1-m5)",delai:9},{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier",delai:3},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:a=>t(a,"dossier_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.dossier_type,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier count"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_count",value:l.dossier_count,onChange:r})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,value:l.remarks,name:"remarks",onChange:r})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",value:l.uuid,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission type"}),e.jsx(o,{options:[{label:"maa",value:"maa"},{label:"var-type1a",value:"var-type1a"},{label:"var-type1ain",value:"var-type1ain"},{label:"var-type1b",value:"var-type1b"},{label:"var-type2",value:"var-type2"},{label:"var-nat",value:"var-nat"},{label:"extension",value:"extension"},{label:"rup",value:"rup"},{label:"psur",value:"psur"},{label:"psusa",value:"psusa"},{label:"rmp",value:"rmp"},{label:"renewal",value:"renewal"},{label:"pam-sob",value:"pam-sob"},{label:"pam-anx",value:"pam-anx"},{label:"pam-mea",value:"pam-mea"},{label:"pam-leg",value:"pam-leg"},{label:"pam-sda",value:"pam-sda"},{label:"pam-capa",value:"pam-capa"},{label:"pam-p45",value:"pam-p45"},{label:"pam-p46",value:"pam-p46"},{label:"pam-paes",value:"pam-paes"},{label:"pam-rec",value:"pam-rec"},{label:"pass107n",value:"pass107n"},{label:"pass107q",value:"pass107q"},{label:"asmf",value:"asmf"},{label:"pmf",value:"pmf"},{label:"referral-20",value:"referral-20"},{label:"referral-294",value:"referral-294"},{label:"referral-29p",value:"referral-29p"},{label:"referral-30",value:"referral-30"},{label:"referral-31",value:"referral-31"},{label:"referral-35",value:"referral-35"},{label:"referral-5-3",value:"referral-5-3"},{label:"referral-107i",value:"referral-107i"},{label:"referral-16c1c",value:"referral-16c1c"},{label:"referral-16c4",value:"referral-16c4"},{label:"annual-reassessment",value:"annual-reassessment"},{label:"clin-data-pub-rp",value:"clin-data-pub-rp"},{label:"clin-data-pub-fv",value:"clin-data-pub-fv"},{label:"paed-7-8-30",value:"paed-7-8-30"},{label:"paed-29",value:"paed-29"},{label:"paed-45",value:"paed-45"},{label:"paed-46",value:"paed-46"},{label:"articale-58",value:"articale-58"},{label:"notification-61-3",value:"notification-61-3"},{label:"transfer-ma",value:"transfer-ma"},{label:"lifting-suspension",value:"lifting-suspension"},{label:"withdrawal",value:"withdrawal"},{label:"cep",value:"cep"},{label:"none",value:"none"}],name:"submission_type",onChange:a=>t(a,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.submission_type,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission mode"}),e.jsx(o,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:a=>t(a,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.submission_mode,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(o,{options:v,name:"tracking",onChange:a=>t(a,"tracking"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,defaultValue:l.tracking?{value:l.tracking,label:l.tracking}:"",menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999}),container:a=>({...a,width:"100%"})}}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"trackingExtra",style:{width:"30%"},onChange:r})]})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission unit"}),e.jsx(o,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:a=>t(a,"submission_unit"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.submission_unit,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",value:l.applicant,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",value:l.agency_code,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"productName",value:l.productName,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",value:l.inn,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",value:l.sequence,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",value:l.r_sequence,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",value:l.submission_description,onChange:r})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:l.mtremarks,name:"mtremarks",onChange:r})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(o,{name:"indication",onChange:a=>t(a,"indication"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.indication,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Manufacturer"}),e.jsx(o,{name:"manufacturer",onChange:a=>t(a,"manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.manufacturer,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"drug_substance",value:l.drug_substance,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance manufacturer"}),e.jsx(o,{name:"drug_substance_manufacturer",onChange:a=>t(a,"drug_substance_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.drug_substance_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"drug_product",value:l.drug_product,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacturer"}),e.jsx(o,{name:"drug_product_manufacturer",onChange:a=>t(a,"drug_product_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.drug_product_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(o,{name:"dosage_form",onChange:a=>t(a,"dosage_form"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(o,{name:"excipient",onChange:a=>t(a,"excipient"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.excipient,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(q,{files:l.doc,upload:_,deleletFile:C,removeAll:w})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:l.docremarks,placeholder:"",onChange:r})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(b,{"data-enable-time":!0,value:l.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(b,{"data-enable-time":!0,value:l.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(b,{"data-enable-time":!0,value:l.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:a=>i("adjusted_deadline",a)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:r})]})})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:y,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:g,children:"Continue"})]})]})]})]})})};I.layout=m=>e.jsx(D,{children:m,auth:m.props.auth});export{I as default};
