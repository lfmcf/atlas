import{r as x,W as S,j as e,b as v}from"./app-58229168.js";import{i as m,m as A,A as M}from"./AuthenticatedLayout-c23fbcfc.js";import{S as R}from"./MenuComponent-89094823.js";import{F as y}from"./index-78ed94a3.js";/* empty css                  */import{D as I}from"./Dropzone-5673b596.js";import"./MetronicSplashScreen-352240e8.js";const V=u=>{var h=new URLSearchParams(window.location.search);const f=x.useRef(null),o=x.useRef(null),{folder:a}=u,[N,j]=x.useState(),{metadata:p}=u,{data:l,setData:d,post:k,processing:z,errors:q,clearErrors:T,reset:E}=S({id:a?a._id:"",form:a?a.form:h.get("form"),region:a?a.region:h.get("region"),procedure:a?a.procedure:h.get("procedure"),product_name:a?a.product_name:h.get("product"),dossier_contact:a?a.dossier_contact:u.auth.user.trigramme.toUpperCase(),object:a?a.object:"",country:p.country,dossier_type:a?a.dossier_type:"",dossier_count:a?a.dossier_count:"",remarks:a?a.remarks:"",tracking:a?a.tracking:"",trackingExtra:a?a.trackingExtra:"",applicant:p.applicant,agency_code:p.agencyCode,atc:a?a.atc:"",submission_type:a?a.submission_type:"",submission_mode:a?a.submission_mode:"",invented_name:a?a.invented_name:"",inn:p.inn,sequence:a?a.sequence:"",r_sequence:a?a.r_sequence:"",uuid:a?a.uuid:p.uuid,submission_description:a?a.submission_description:"",mtremarks:a?a.mtremarks:"",indication:a?a.indication:"",manufacturer:a?a.manufacturer:"",drug_substance:a?a.drug_substance:"",drug_substance_manufacturer:a?a.drug_substance_manufacturer:"",drug_product:a?a.drug_product:"",drug_product_manufacturer:a?a.drug_product_manufacturer:"",dosage_form:a?a.dosage_form:"",excipient:a?a.excipient:"",doc:a&&a.doc!==null?a.doc:[],docremarks:a?a.docremarks:"",request_date:new Date,deadline:new Date});console.log(l.tracking),x.useEffect(()=>{o.current=R.createInsance(f.current)},[]),x.useEffect(()=>{let s={...l},t=p.trackingNumber;if(t=t.split(/\r?\n/),t.length>1){let i=t.map(n=>({label:n,value:n}));s.tracking="",j(i)}else{let i=t.map(n=>({label:n,value:n}));j(i),s.tracking={label:t[0],value:t[0]}}d(s)},[]),x.useEffect(()=>{let s=new Date,t=s.getHours(),i=l.dossier_type?l.dossier_type.delai:"",n=new Date,g=1;for(t<12?i=i:i=i+1;g<i;)n=new Date(s.setDate(s.getDate()+1)),n.getDay()!=0&&n.getDay()!=6&&g++;d("deadline",new Date(n))},[l.dossier_type]);const _=()=>{o.current&&(o.current.getCurrentStepIndex(),o.current.getCurrentStepIndex(),o.current.goNext())},C=()=>{o.current&&o.current.goPrev()},r=s=>{d(s.target.name,s.target.value)},c=(s,t)=>{d(t,s)},w=s=>{let t={...l};t.doc.push(...s),d(t)},b=(s,t)=>{s.preventDefault(),k(route("store-publishing-nat-gcc",{type:t}))},P=()=>{let s={...l},t=[];s.doc.map(i=>{i.link&&t.push(i.name)}),t.length>0&&v.post("delete-file-pub",{docs:t,id:l.id}),s.doc=[],d(s)},D=s=>{if(s.link){let n=[];n.push(s.name),v.post("delete-file-pub",{docs:n,id:l.id})}var t={...l};let i=t.doc.map(n=>n.name).indexOf(s.name);t.doc.splice(i,1),d(t)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:f,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=o.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=o.current)==null?void 0:s.goto(2)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=o.current)==null?void 0:s.goto(3)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=o.current)==null?void 0:s.goto(4)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=o.current)==null?void 0:s.goto(5)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:b,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:l.dossier_contact,name:"dossier_contact",readOnly:!0,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",defaultValue:l.object,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"product_name",defaultValue:l.product_name,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission country"}),e.jsx(m,{options:A,name:"country",onChange:s=>c(s,"country"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:[{label:l.country,value:l.country}],menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier type"}),e.jsx(m,{options:[{label:"Baseline Dossier (M1-M2-M3)",value:"Baseline Dossier (M1-M2-M3)",delai:5},{label:"Baseline Dossier (M1-M5)",value:"Baseline Dossier (M1-M5)",delai:9},{label:"Marketing Authorisation Dossier / BLA (m1-m5)",value:"Marketing Authorisation Dossier / BLA (m1-m5)",delai:9},{label:"Renewal Dossier",value:"Renewal Dossier",delai:9},{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier"},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:s=>c(s,"dossier_type"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.dossier_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier count"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_count",defaultValue:l.dossier_count,onChange:r})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:l.remarks,name:"remarks",onChange:r})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(m,{options:N||"",name:"tracking",onChange:s=>c(s,"tracking"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,defaultValue:l.tracking?{value:l.tracking,label:l.tracking}:"",menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({...s,width:"100%"})}}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"trackingExtra",style:{width:"20%"},onChange:r})]})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",defaultValue:l.applicant,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:l.agency_code,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"ATC"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"atc",defaultValue:l.atc,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission type"}),e.jsx(m,{options:[{label:"Active submission",value:"Active submission"},{label:"Extension submission",value:"Extension submission"},{label:"New Marketing Authorization Application - Generics",value:"New Marketing Authorization Application - Generics"},{label:"New Marketing Authorization Application - New Chemical Entity",value:"New Marketing Authorization Application - New Chemical Entity"},{label:"New Marketing Authorization Application - Biological Products",value:"New Marketing Authorization Application - Biological Products"},{label:"New Marketing Authorization Application - Radiopharmaceuticals",value:"New Marketing Authorization Application - Radiopharmaceuticals"},{label:"None (in the case of reformatting the application)",value:"None (in the case of reformatting the application)"},{label:"Plasma Master File",value:"Plasma Master File"},{label:"Periodic Safety Update Report",value:"Periodic Safety Update Report"},{label:"PSUR single assessment procedure",value:"PSUR single assessment procedure"},{label:"Renewal (Yearly or 5-Yearly)",value:"Renewal (Yearly or 5-Yearly)"},{label:"Risk Management Plan",value:"Risk Management Plan"},{label:"Transfer of Marketing Authorization",value:"Transfer of Marketing Authorization"},{label:"Urgent Safety Restriction",value:"Urgent Safety Restriction"},{label:"Variation Type I",value:"Variation Type I"},{label:"Variation Type II",value:"Variation Type II"},{label:"Withdrawal during assessment or withdrawal of Marketing Authorization",value:"Withdrawal during assessment or withdrawal of Marketing Authorization"}],name:"submission_type",onChange:s=>c(s,"submission_type"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.submission_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission unit"}),e.jsx(m,{options:[{label:"Initial submission to start any regulatory activity",value:"Initial submission to start any regulatory activity"},{label:"Response to any kind of question, validation issues out-standing information requested by the agency",value:"Response to any kind of question, validation issues out-standing information requested by the agency"},{label:"Othe additional information (should only be used if response is not suitable)",value:"Othe additional information (should only be used if response is not suitable)"},{label:"Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)",value:"Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)"},{label:"Correction of the published annexes in the GCC procedure (usually shortly after approval)",value:"Correction of the published annexes in the GCC procedure (usually shortly after approval)"},{label:"Reformatting of an existing submission application from any format to Ectd",value:"Reformatting of an existing submission application from any format to Ectd"}],name:"submission_mode",onChange:s=>c(s,"submission_mode"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.submission_mode,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"invented_name",defaultValue:l.invented_name,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:l.inn,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",defaultValue:l.sequence,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:l.r_sequence,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:l.uuid,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:l.submission_description,onChange:r})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:l.mtremarks,name:"mtremarks",onChange:r})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(m,{name:"indication",onChange:s=>c(s,"indication"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.indication,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Manufacturer"}),e.jsx(m,{name:"manufacturer",onChange:s=>c(s,"manufacturer"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"drug_substance",defaultValue:l.drug_substance,onChange:r})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance manufacturer"}),e.jsx(m,{name:"drug_substance_manufacturer",onChange:s=>c(s,"drug_substance_manufacturer"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.drug_substance_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"drug_product",defaultValue:l.drug_product,onChange:r})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacturer"}),e.jsx(m,{name:"drug_product_manufacturer",onChange:s=>c(s,"drug_product_manufacturer"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.drug_product_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(m,{name:"dosage_form",onChange:s=>c(s,"dosage_form"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(m,{name:"excipient",onChange:s=>c(s,"excipient"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:l.excipient,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(I,{files:l.doc,upload:w,deleletFile:D,removeAll:P})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:l.docremarks,placeholder:"",onChange:r})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(y,{"data-enable-time":!0,value:l.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(y,{"data-enable-time":!0,value:l.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"mb-10"})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:C,children:"Back"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"btn btn-primary m-3","data-kt-stepper-action":"submit",onClick:s=>b(s,"save"),children:e.jsx("span",{className:"indicator-label",children:"Save"})}),e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",onClick:s=>b(s,"submit"),children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:_,children:"Continue"})]})]})]})]})})};V.layout=u=>e.jsx(M,{children:u,auth:u.props.auth});export{V as default};
