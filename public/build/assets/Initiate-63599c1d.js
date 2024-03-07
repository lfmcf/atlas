import{r as h,W as I,j as e,b as k}from"./app-2a97567e.js";import{n as d,A}from"./AuthenticatedLayout-b6856e27.js";import{S as T}from"./MenuComponent-38ef0f8e.js";import{F as w}from"./index-aadd9614.js";/* empty css                  */import{D as U}from"./Dropzone-8baf59bd.js";import"./MetronicSplashScreen-ac0d23d6.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const F=x=>{const{folder:l,agc:f,countries:q,metapro:i}=x,g=h.useRef(null),u=h.useRef(null);var v=new URLSearchParams(window.location.search);const[o,n]=h.useState({dossier_type:"",dossier_count:"",submission_type:"",submission_mode:"",submission_unit:"",sequence:""});let y="";if(f&&f.agencyCode){var D=f.agencyCode.split("-");y=D[0]}const{data:a,setData:b,post:S,processing:z,errors:B,clearErrors:L,reset:G}=I({id:l?l._id:"",form:l?l.form:v.get("form"),region:l?l.region:v.get("region"),procedure:l?l.procedure:v.get("procedure"),productName:l?l.product_name:v.get("product"),dossier_contact:l?l.dossier_contact:x.auth.user.trigramme.toUpperCase(),object:l?l.object:"",country:{value:q,code:y},dossier_type:l?l.dossier_type:"",dossier_count:l?l.dossier_count:"",remarks:l?l.remarks:"",uuid:"",submission_type:l?l.submission_type:"",submission_mode:l?l.submission_mode:"",tracking:l?l.tracking:"",submission_unit:l?l.submission_unit:"",applicant:"STALLERGENES",agency_code:f?f.agencyCode:"",invented_name:"",inn:"",sequence:l?l.sequence:"",r_sequence:l?l.r_sequence:"",submission_description:l?l.submission_description:"",mtremarks:l?l.mtremarks:"",indication:l?l.indication:"",manufacturer:l?l.manufacturer:"",drug_substance:l?l.drug_substance:"",drug_substance_manufacturer:l?l.drug_substance_manufacturer:"",drug_product:l?l.drug_product:"",drug_product_manufacturer:l?l.drug_product_manufacturer:"",dosage_form:l?l.dosage_form:"",excipient:l?l.excipient:"",doc:l&&l.doc!==null?l.doc:[],docremarks:l?l.docremarks:"",request_date:new Date,deadline:new Date});h.useEffect(()=>{u.current=T.createInsance(g.current)},[]);const P=()=>{if(u.current){if(u.current.getCurrentStepIndex()===1&&(!a.dossier_type||!a.dossier_count)){a.dossier_type||n(s=>({...s,dossier_type:"this field is required"})),a.dossier_count||n(s=>({...s,dossier_count:"this field is required"}));return}if(u.current.getCurrentStepIndex()===2&&(!a.submission_type||!a.submission_mode||!a.submission_unit||!a.sequence)){a.submission_type||n(s=>({...s,submission_type:"this field is required"})),a.submission_mode||n(s=>({...s,submission_mode:"this field is required"})),a.submission_unit||n(s=>({...s,submission_unit:"this field is required"})),a.sequence||n(s=>({...s,sequence:"this field is required"}));return}u.current.goNext()}},V=()=>{u.current&&u.current.goPrev()},c=s=>{s.target.name=="dossier_count"&&n(t=>({...t,dossier_count:""})),s.target.name=="sequence"&&n(t=>({...t,sequence:""})),b(s.target.name,s.target.value)},m=(s,t)=>{t=="dossier_type"&&n(r=>({...r,dossier_type:""})),t=="dossier_count"&&n(r=>({...r,dossier_count:""})),t=="submission_type"&&n(r=>({...r,submission_type:""})),t=="submission_mode"&&n(r=>({...r,submission_mode:""})),t=="submission_unit"&&n(r=>({...r,submission_unit:""})),b(t,s)},M=s=>{let t={...a};t.doc.push(...s),b(t)};h.useEffect(()=>{let s=new Date,t=s.getHours(),r=a.dossier_type?a.dossier_type.delai:"",p=new Date,C=1;for(t<12?r=r:r=r+1;C<r;)p=new Date(s.setDate(s.getDate()+1)),p.getDay()!=0&&p.getDay()!=6&&C++;b("deadline",new Date(p))},[a.dossier_type]);const _=(s,t)=>{s.preventDefault(),S(route("store-publishing_",{type:t}))},R=()=>{let s={...a},t=[];s.doc.map(r=>{r.link&&t.push(r.name)}),t.length>0&&k.post("delete-file-pub",{docs:t,id:a.id}),s.doc=[],b(s)},E=s=>{if(s.link){let p=[];p.push(s.name),k.post("delete-file-pub",{docs:p,id:a.id})}var t={...a};let r=t.doc.map(p=>p.name).indexOf(s.name);t.doc.splice(r,1),b(t)},N=s=>({control:t=>({...t,...s&&{borderColor:"red !important"}})}),j=s=>{var t;if((!a.dossier_type||!a.dossier_count)&&(s==2||s==3||s==4||s==5)){a.dossier_type||n(r=>({...r,dossier_type:"this field is required"})),a.dossier_count||n(r=>({...r,dossier_count:"this field is required"}));return}if((!a.submission_type||!a.submission_mode||!a.submission_unit||!a.sequence)&&(s==3||s==4||s==5)){a.submission_type||n(r=>({...r,submission_type:"this field is required"})),a.submission_mode||n(r=>({...r,submission_mode:"this field is required"})),a.submission_unit||n(r=>({...r,submission_unit:"this field is required"})),a.sequence||n(r=>({...r,sequence:"this field is required"}));return}(t=u.current)==null||t.goto(s)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:g,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=u.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>j(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:_,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:a.dossier_contact,name:"dossier_contact",readOnly:!0,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter a Dossier Title. Ex : ORALAIR_EU_Seq 0137",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",defaultValue:a.object,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"productName",defaultValue:a.productName,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission country"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"country",defaultValue:a.country.value,disabled:!0})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the Dossier type",style:{color:o.dossier_type?"red":""},children:"Dossier type (*)"}),e.jsx(d,{options:[{label:"Baseline Dossier (M1-M2-M3)",value:"Baseline Dossier (M1-M2-M3)",delai:5},{label:"Baseline Dossier (M1-M5)",value:"Baseline Dossier (M1-M5)",delai:9},{label:"Marketing Authorisation Dossier / BLA (m1-m5)",value:"Marketing Authorisation Dossier / BLA (m1-m5)",delai:9},{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier",delai:3},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:s=>m(s,"dossier_type"),placeholder:"",isClearable:!0,value:a.dossier_type,menuPortalTarget:document.body,styles:N(o.dossier_type),className:"react-select-container",classNamePrefix:"react-select"})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the number of documents in Publishing dossier",style:{color:o.dossier_count?"red":""},children:"Dossier count (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_count",style:{borderColor:o.dossier_count?"red":""},defaultValue:a.dossier_count,onChange:c})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:a.remarks,name:"remarks",onChange:c})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:a.uuid,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the submission type",style:{color:o.submission_type?"red":""},children:"Submission type (*)"}),e.jsx(d,{options:[{label:"maa",value:"maa"},{label:"var-type1a",value:"var-type1a"},{label:"var-type1ain",value:"var-type1ain"},{label:"var-type1b",value:"var-type1b"},{label:"var-type2",value:"var-type2"},{label:"var-nat",value:"var-nat"},{label:"extension",value:"extension"},{label:"rup",value:"rup"},{label:"psur",value:"psur"},{label:"psusa",value:"psusa"},{label:"rmp",value:"rmp"},{label:"renewal",value:"renewal"},{label:"pam-sob",value:"pam-sob"},{label:"pam-anx",value:"pam-anx"},{label:"pam-mea",value:"pam-mea"},{label:"pam-leg",value:"pam-leg"},{label:"pam-sda",value:"pam-sda"},{label:"pam-capa",value:"pam-capa"},{label:"pam-p45",value:"pam-p45"},{label:"pam-p46",value:"pam-p46"},{label:"pam-paes",value:"pam-paes"},{label:"pam-rec",value:"pam-rec"},{label:"pass107n",value:"pass107n"},{label:"pass107q",value:"pass107q"},{label:"asmf",value:"asmf"},{label:"pmf",value:"pmf"},{label:"referral-20",value:"referral-20"},{label:"referral-294",value:"referral-294"},{label:"referral-29p",value:"referral-29p"},{label:"referral-30",value:"referral-30"},{label:"referral-31",value:"referral-31"},{label:"referral-35",value:"referral-35"},{label:"referral-5-3",value:"referral-5-3"},{label:"referral-107i",value:"referral-107i"},{label:"referral-16c1c",value:"referral-16c1c"},{label:"referral-16c4",value:"referral-16c4"},{label:"annual-reassessment",value:"annual-reassessment"},{label:"clin-data-pub-rp",value:"clin-data-pub-rp"},{label:"clin-data-pub-fv",value:"clin-data-pub-fv"},{label:"paed-7-8-30",value:"paed-7-8-30"},{label:"paed-29",value:"paed-29"},{label:"paed-45",value:"paed-45"},{label:"paed-46",value:"paed-46"},{label:"articale-58",value:"articale-58"},{label:"notification-61-3",value:"notification-61-3"},{label:"transfer-ma",value:"transfer-ma"},{label:"lifting-suspension",value:"lifting-suspension"},{label:"withdrawal",value:"withdrawal"},{label:"cep",value:"cep"},{label:"none",value:"none"}],name:"submission_type",onChange:s=>m(s,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.submission_type,menuPortalTarget:document.body,styles:N(o.submission_type)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the submission mode",style:{color:o.submission_mode?"red":""},children:"Submission mode (*)"}),e.jsx(d,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:s=>m(s,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.submission_mode,menuPortalTarget:document.body,styles:N(o.submission_mode)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx("input",{type:"text",name:"tracking",className:"form-control form-control-solid",onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the applicable submission unit",style:{color:o.submission_unit?"red":""},children:"Submission unit (*)"}),e.jsx(d,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:s=>m(s,"submission_unit"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.submission_unit,menuPortalTarget:document.body,styles:N(o.submission_unit)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",defaultValue:a.applicant,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:a.agency_code,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"invented_name",defaultValue:a.productName,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"col-md-4 col-sm-12",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:a.inn,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:o.sequence?"red":""},children:"Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",defaultValue:a.sequence,style:{borderColor:o.sequence?"red":""},onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:a.r_sequence,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:a.submission_description,onChange:c})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:a.mtremarks,name:"mtremarks",onChange:c})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(d,{options:i==null?void 0:i.indication.map(s=>({label:s,value:s})),name:"indication",onChange:s=>m(s,"indication"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.indication,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx(d,{options:i==null?void 0:i.substance.map(s=>({label:s,value:s})),name:"drug_substance",onChange:s=>m(s,"drug_substance"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,value:a.drug_substance,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance manufacturer"}),e.jsx(d,{options:i==null?void 0:i.ds_manufacturer.map(s=>({label:s,value:s})),name:"drug_substance_manufacturer",onChange:s=>m(s,"drug_substance_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.drug_substance_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product"}),e.jsx(d,{options:i==null?void 0:i.drug_product.map(s=>({label:s,value:s})),name:"drug_product",onChange:s=>m(s,"drug_product"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.drug_product,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacturer"}),e.jsx(d,{options:i==null?void 0:i.dp_manufacturer.map(s=>({label:s,value:s})),name:"drug_product_manufacturer",onChange:s=>m(s,"drug_product_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.drug_product_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(d,{options:i==null?void 0:i.dosage.map(s=>({label:s,value:s})),name:"dosage_form",onChange:s=>m(s,"dosage_form"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:a.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(d,{options:i==null?void 0:i.excipient.map(s=>({label:s,value:s})),name:"excipient",onChange:s=>m(s,"excipient"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,value:a.excipient,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(U,{files:a.doc,upload:M,deleletFile:E,removeAll:R})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:a.docremarks,placeholder:"",onChange:c})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(w,{"data-enable-time":!0,value:a.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(w,{"data-enable-time":!0,value:a.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"mb-10"})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:V,children:"Back"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"btn btn-primary m-3","data-kt-stepper-action":"submit",onClick:s=>_(s,"save"),children:e.jsx("span",{className:"indicator-label",children:"Save"})}),e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",onClick:s=>_(s,"submit"),children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:P,children:"Continue"})]})]})]})]})})};F.layout=x=>e.jsx(A,{children:x,auth:x.props.auth});export{F as default};
