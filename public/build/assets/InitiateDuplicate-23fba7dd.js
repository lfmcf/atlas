import{r as b,W as V,b as v,j as e}from"./app-43d25da0.js";import{n as d,A as T}from"./AuthenticatedLayout-91d46839.js";import{S as z}from"./MenuComponent-69e47a83.js";import{F as _}from"./index-ae942d3c.js";/* empty css                  */import{D as E}from"./Dropzone-1185bf26.js";import"./MetronicSplashScreen-0e353b42.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const U=x=>{const g=b.useRef(null),h=b.useRef(null),{folder:a,products:k,countries:C,metapro:n}=x,[w,P]=b.useState([]),[u,i]=b.useState({dossier_type:"",dossier_count:"",submission_type:"",submission_mode:"",sequence:""}),{data:l,setData:p,post:D,processing:F,errors:B,clearErrors:G,reset:O}=V({id:a?a._id:"",form:a?a.form:"",region:a?a.region:"",procedure:a?a.procedure:"",product_name:a?a.product_name:"",dossier_contact:a?a.dossier_contact:x.auth.user.trigramme.toUpperCase(),object:a?a.object:"",country:{value:a.country.value,label:a.country.value,code:a.country.code},dossier_type:a?a.dossier_type:"",dossier_count:a?a.dossier_count:"",remarks:a?a.remarks:"",tracking:a?a.tracking:"",trackingExtra:a?a.trackingExtra:"",applicant:a.applicant,agency_code:a.agency_code,atc:a?a.atc:"",submission_type:a?a.submission_type:"",submission_mode:a?a.submission_mode:"",invented_name:a?a.invented_name:"",inn:a.inn,sequence:a?a.sequence:"",r_sequence:a?a.r_sequence:"",uuid:a.uuid,submission_description:a?a.submission_description:"",mtremarks:a?a.mtremarks:"",indication:a?a.indication:"",manufacturer:a?a.manufacturer:"",drug_substance:a?a.drug_substance:"",drug_substance_manufacturer:a?a.drug_substance_manufacturer:"",drug_product:a?a.drug_product:"",drug_product_manufacturer:a?a.drug_product_manufacturer:"",dosage_form:a?a.dosage_form:"",excipient:a?a.excipient:"",doc:a&&a.doc!==null?a.doc:[],docremarks:a?a.docremarks:"",request_date:new Date,deadline:new Date,status:a?a.status:""});b.useEffect(()=>{h.current=z.createInsance(g.current)},[]),b.useEffect(()=>{let s=new Date,t=s.getHours(),r=l.dossier_type?l.dossier_type.delai:"",c=new Date,y=1;for(t<12?r=r:r=r+1;y<r;)c=new Date(s.setDate(s.getDate()+1)),c.getDay()!=0&&c.getDay()!=6&&y++;p("deadline",new Date(c))},[l.dossier_type]);const q=()=>{if(h.current){if(h.current.getCurrentStepIndex()===1&&(!l.dossier_type||!l.dossier_count)){l.dossier_type||i(s=>({...s,dossier_type:"this field is required"})),l.dossier_count||i(s=>({...s,dossier_count:"this field is required"}));return}if(h.current.getCurrentStepIndex()===2&&(!l.submission_type||!l.submission_mode||!l.sequence)){l.submission_type||i(s=>({...s,submission_type:"this field is required"})),l.submission_mode||i(s=>({...s,submission_mode:"this field is required"})),l.sequence||i(s=>({...s,sequence:"this field is required"}));return}h.current.goNext()}},S=()=>{h.current&&h.current.goPrev()},o=s=>{s.target.name=="dossier_count"&&i(t=>({...t,dossier_count:""})),s.target.name=="sequence"&&i(t=>({...t,sequence:""})),p(s.target.name,s.target.value)},m=(s,t)=>{t=="dossier_type"&&i(r=>({...r,dossier_type:""})),t=="dossier_count"&&i(r=>({...r,dossier_count:""})),t=="submission_type"&&i(r=>({...r,submission_type:""})),t=="submission_mode"&&i(r=>({...r,submission_mode:""})),t=="product_name"?p(t,s.value):p(t,s)},A=s=>{let t={...l};t.doc.push(...s),p(t)},N=(s,t)=>{s.preventDefault(),D(route("store-publishing-nat-gcc-duplicate",{type:t}))},M=()=>{let s={...l},t=[];s.doc.map(r=>{r.link&&t.push(r.name)}),t.length>0&&v.post("delete-file-pub",{docs:t,id:l.id}),s.doc=[],p(s)},R=s=>{if(s.link){let c=[];c.push(s.name),v.post("delete-file-pub",{docs:c,id:l.id})}var t={...l};let r=t.doc.map(c=>c.name).indexOf(s.name);t.doc.splice(r,1),p(t)};b.useEffect(()=>{v.post("getMetaDataForDuplicate",{product:l.product_name,procedure:l.procedure,country:l.country}).then(s=>{let t=s.data.trackingNumber;t=t.split(/\r?\n/);let r=[];r=t.map(c=>({label:c,value:c})),P(r),p(c=>({...c,agency_code:s.data.agencyCode,applicant:s.data.applicant,uuid:s.data.uuid,inn:s.data.inn}))})},[l.product_name,l.country]);const j=s=>({control:t=>({...t,...s&&{borderColor:"red !important"}})}),f=s=>{var t;if((!l.dossier_type||!l.dossier_count)&&(s==2||s==3||s==4||s==5)){l.dossier_type||i(r=>({...r,dossier_type:"this field is required"})),l.dossier_count||i(r=>({...r,dossier_count:"this field is required"}));return}if((!l.submission_type||!l.submission_mode||!l.sequence)&&(s==3||s==4||s==5)){l.submission_type||i(r=>({...r,submission_type:"this field is required"})),l.submission_mode||i(r=>({...r,submission_mode:"this field is required"})),l.sequence||i(r=>({...r,sequence:"this field is required"}));return}(t=h.current)==null||t.goto(s)},I=(s,t)=>{t.action=="clear"?p("tracking",""):p("tracking",s.value)};return e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:g,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=h.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>f(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:N,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:l.dossier_contact,name:"dossier_contact",readOnly:!0,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"object",defaultValue:l.object,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Product"}),e.jsx(d,{options:k.map(s=>({label:s.name,value:s.name})),name:"product_name",className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,defaultValue:[{value:l.product_name,label:l.product_name}],menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},onChange:s=>m(s,"product_name")})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission country"}),e.jsx(d,{options:C.map(s=>({label:s.name,value:s.name,code:s.code})),name:"country",className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.country,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},onChange:s=>m(s,"country")})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the Dossier type",style:{color:u.dossier_type?"red":""},children:"Dossier type (*)"}),e.jsx(d,{options:[{label:"Baseline Dossier (M1-M2-M3)",value:"Baseline Dossier (M1-M2-M3)",delai:5},{label:"Baseline Dossier (M1-M5)",value:"Baseline Dossier (M1-M5)",delai:9},{label:"Marketing Authorisation Dossier / BLA (m1-m5)",value:"Marketing Authorisation Dossier / BLA (m1-m5)",delai:9},{label:"Renewal Dossier",value:"Renewal Dossier",delai:9},{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier"},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:s=>m(s,"dossier_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.dossier_type,menuPortalTarget:document.body,styles:j(u.dossier_type)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the number of documents in Publishing dossier",style:{color:u.dossier_count?"red":""},children:"Dossier count (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"dossier_count",style:{borderColor:u.dossier_count?"red":""},defaultValue:l.dossier_count,onChange:o})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:l.remarks,name:"remarks",onChange:o})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(d,{options:w,name:"tracking",onChange:(s,t)=>I(s,t),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,defaultValue:a.tracking?{value:a.tracking,label:a.tracking}:"",menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({...s,width:"50%"})}}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:l.tracking,name:"tracking",style:{width:"50%"},onChange:o})]})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",defaultValue:l.applicant,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:l.agency_code,onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"ATC"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"atc",defaultValue:l.atc,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the submission type",style:{color:u.submission_type?"red":""},children:"Submission type (*)"}),e.jsx(d,{options:[{label:"Active submission",value:"Active submission"},{label:"Extension submission",value:"Extension submission"},{label:"New Marketing Authorization Application - Generics",value:"New Marketing Authorization Application - Generics"},{label:"New Marketing Authorization Application - New Chemical Entity",value:"New Marketing Authorization Application - New Chemical Entity"},{label:"New Marketing Authorization Application - Biological Products",value:"New Marketing Authorization Application - Biological Products"},{label:"New Marketing Authorization Application - Radiopharmaceuticals",value:"New Marketing Authorization Application - Radiopharmaceuticals"},{label:"None (in the case of reformatting the application)",value:"None (in the case of reformatting the application)"},{label:"Plasma Master File",value:"Plasma Master File"},{label:"Periodic Safety Update Report",value:"Periodic Safety Update Report"},{label:"PSUR single assessment procedure",value:"PSUR single assessment procedure"},{label:"Renewal (Yearly or 5-Yearly)",value:"Renewal (Yearly or 5-Yearly)"},{label:"Risk Management Plan",value:"Risk Management Plan"},{label:"Transfer of Marketing Authorization",value:"Transfer of Marketing Authorization"},{label:"Urgent Safety Restriction",value:"Urgent Safety Restriction"},{label:"Variation Type I",value:"Variation Type I"},{label:"Variation Type II",value:"Variation Type II"},{label:"Withdrawal during assessment or withdrawal of Marketing Authorization",value:"Withdrawal during assessment or withdrawal of Marketing Authorization"}],name:"submission_type",onChange:s=>m(s,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.submission_type,menuPortalTarget:document.body,styles:j(u.submission_type)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the applicable submission unit",style:{color:u.submission_mode?"red":""},children:"Submission unit (*)"}),e.jsx(d,{options:[{label:"Initial submission to start any regulatory activity",value:"Initial submission to start any regulatory activity"},{label:"Response to any kind of question, validation issues out-standing information requested by the agency",value:"Response to any kind of question, validation issues out-standing information requested by the agency"},{label:"Othe additional information (should only be used if response is not suitable)",value:"Othe additional information (should only be used if response is not suitable)"},{label:"Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)",value:"Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)"},{label:"Correction of the published annexes in the GCC procedure (usually shortly after approval)",value:"Correction of the published annexes in the GCC procedure (usually shortly after approval)"},{label:"Reformatting of an existing submission application from any format to Ectd",value:"Reformatting of an existing submission application from any format to Ectd"}],name:"submission_mode",onChange:s=>m(s,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.submission_mode,menuPortalTarget:document.body,styles:j(u.submission_mode)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"invented_name",value:l.product_name,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:l.inn,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:u.sequence?"red":""},children:"Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",style:{borderColor:u.sequence?"red":""},defaultValue:l.sequence,onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:l.r_sequence,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:l.uuid,onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:l.submission_description,onChange:o})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:l.mtremarks,name:"mtremarks",onChange:o})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(d,{options:n==null?void 0:n.indication.map(s=>({label:s,value:s})),name:"indication",onChange:s=>m(s,"indication"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.indication,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx(d,{options:n==null?void 0:n.substance.map(s=>({label:s,value:s})),name:"drug_substance",onChange:s=>m(s,"drug_substance"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,value:l.drug_substance,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance manufacturer"}),e.jsx(d,{options:n==null?void 0:n.ds_manufacturer.map(s=>({label:s,value:s})),name:"drug_substance_manufacturer",onChange:s=>m(s,"drug_substance_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.drug_substance_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product"}),e.jsx(d,{options:n==null?void 0:n.drug_product.map(s=>({label:s,value:s})),name:"drug_product",onChange:s=>m(s,"drug_product"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.drug_product,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacturer"}),e.jsx(d,{options:n==null?void 0:n.dp_manufacturer.map(s=>({label:s,value:s})),name:"drug_product_manufacturer",onChange:s=>m(s,"drug_product_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.drug_product_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(d,{options:n==null?void 0:n.dosage.map(s=>({label:s,value:s})),name:"dosage_form",onChange:s=>m(s,"dosage_form"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:l.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(d,{options:n==null?void 0:n.excipient.map(s=>({label:s,value:s})),name:"excipient",onChange:s=>m(s,"excipient"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,value:l.excipient,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(E,{files:l.doc,upload:A,deleletFile:R,removeAll:M})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:l.docremarks,placeholder:"",onChange:o})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(_,{"data-enable-time":!0,value:l.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(_,{"data-enable-time":!0,value:l.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"mb-10"})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:S,children:"Back"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"btn btn-primary m-3","data-kt-stepper-action":"submit",onClick:s=>N(s,"save"),children:e.jsx("span",{className:"indicator-label",children:"Save"})}),e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",onClick:s=>N(s,"submit"),children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:q,children:"Continue"})]})]})]})]})};U.layout=x=>e.jsx(T,{children:x,auth:x.props.auth});export{U as default};