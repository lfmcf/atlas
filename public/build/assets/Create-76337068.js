import{W as L,r as x,j as e,b as D}from"./app-3625b24b.js";import{n as d,y as q,K as H,R as I,A as Y}from"./AuthenticatedLayout-9497203f.js";import{S as K}from"./MenuComponent-6b2dbfba.js";import"./MetronicSplashScreen-c932e9e5.js";import{F as M}from"./index-810604d3.js";/* empty css                  */import{D as O}from"./Dropzone-0a4eaef7.js";import{S as X}from"./StatusComponent-c29070a3.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const Z=j=>{const{metadata:r,folder:n,metapro:c}=j;var v=new URLSearchParams(window.location.search);const{data:t,setData:u,post:R,processing:$,errors:J,clearErrors:Q,reset:ee}=L({id:n?n._id:"",form:n?n.form:v.get("form"),region:n?n.region:v.get("region"),procedure:n?n.procedure:v.get("procedure"),product_name:n?n.product_name:v.get("product"),dossier_contact:n?n.dossier_contact:j.auth.user.trigramme.toUpperCase(),object:n?n.object:"",country:n?n.country:"",dossier_type:n?n.dossier_type:"",dossier_count:n?n.dossier_count:"",remarks:n?n.remarks:"",mt:n?n.mt:[],indication:n?n.indication:"",manufacturer:n?n.manufacturer:"",drug_substance:n?n.drug_substance:"",drug_substance_manufacturer:n?n.drug_substance_manufacturer:"",drug_product_manufacturer:n?n.drug_product_manufacturer:"",drug_product:n?n.drug_product:"",dosage_form:n?n.dosage_form:"",excipient:n?n.excipient:"",doc:n&&n.doc!==null?n.doc:[],docremarks:n?n.docremarks:"",deadline:new Date,request_date:new Date,status:n?n.status:""}),[i,w]=x.useState({uuid:r[0].uuid,submission_type:"",submission_mode:"",trackingNumber:r[0].trackingNumber,submission_unit:"",applicant:r[0].applicant,agencyCode:r[0].agencyCode,inventedName:r[0].inventedName,mtd:r[0].mtd,inn:r[0].inn,sequence:r[0].sequence,r_sequence:r[0].r_sequence,submission_description:"",remarks:""}),S=x.useRef(null),m=x.useRef(null);x.useEffect(()=>{m.current=K.createInsance(S.current)},[]);const A=()=>{m.current&&(m.current.getCurrentStepIndex(),m.current.getCurrentStepIndex(),m.current.goNext())},T=()=>{m.current&&m.current.goPrev()},b=(s,l)=>{u(l,s)},N=s=>{u(s.target.name,s.target.value)},V=s=>{let l={...t};l.doc.push(...s),u(l)},p=(s,l)=>{let a={...t};a.mt[l][s.target.name]=s.target.value,u(a)},y=(s,l,a)=>{let o={...t};o.mt[a][l]=s,u(o)},_=(s,l)=>{const a={...i};a[l]=s,w(a)},h=s=>{const l={...i};l[s.target.name]=s.target.value,w(l)},[f,g]=x.useState([]),[C,z]=x.useState(!1),[U,se]=x.useState(r);console.log(f);const F=s=>{const{id:l,checked:a}=s.target;g([...f,parseInt(l)]),a||g(f.filter(o=>o!=l))},E=s=>{z(!C),g(U.map(l=>l.id)),C&&g([])},B=()=>{let s={...t};s.mt.map((l,a)=>{f.includes(l.id)&&(s.mt[a].uuid=i.uuid,s.mt[a].submission_type=i.submission_type,s.mt[a].submission_mode=i.submission_mode,s.mt[a].trackingNumber=i.trackingNumber,s.mt[a].submission_unit=i.submission_unit,s.mt[a].applicant=i.applicant,s.mt[a].inventedName=i.inventedName,s.mt[a].mtd=i.mtd,s.mt[a].inn=i.inn,s.mt[a].sequence=i.sequence,s.mt[a].r_sequence=i.r_sequence,s.mt[a].submission_description=i.submission_description,s.mt[a].remarks=i.remarks)}),u(s)};x.useEffect(()=>{let s={...t};r.map((l,a)=>{s.mt.push({id:l.id,country:l.country,uuid:l.uuid,submission_type:"",submission_mode:"",trackingNumber:l.trackingNumber,submission_unit:"",applicant:l.applicant,agencyCode:l.agencyCode,inventedName:l.Product,inn:l.inn,sequence:"",r_sequence:"",submission_description:"",remarks:""})}),u(s)},[]),x.useEffect(()=>{let s=new Date,l=s.getHours(),a=t.dossier_type?t.dossier_type.delai:0,o=new Date,P=1;for(l>12&&(a=a+1);P<a;)o=new Date(s.setDate(s.getDate()+1)),o.getDay()!=0&&o.getDay()!=6&&P++;u("deadline",new Date(o))},[t.dossier_type]);const k=(s,l)=>{s.preventDefault(),R(route("initiate-rmp-publishing",{type:l}))},G=()=>{let s={...t},l=[];s.doc.map(a=>{a.link&&l.push(a.name)}),l.length>0&&D.post("delete-file-pub",{docs:l,id:t.id}),s.doc=[],u(s)},W=s=>{if(s.link){let o=[];o.push(s.name),D.post("delete-file-pub",{docs:o,id:t.id})}var l={...t};let a=l.doc.map(o=>o.name).indexOf(s.name);l.doc.splice(a,1),u(l)};return e.jsxs(e.Fragment,{children:[n?e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(X,{status:t.status})]}):"",e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:S,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=m.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=m.current)==null?void 0:s.goto(2)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=m.current)==null?void 0:s.goto(3)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=m.current)==null?void 0:s.goto(4)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=m.current)==null?void 0:s.goto(5)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",onSubmit:k,id:"kt_stepper_example_basic_form",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.dossier_contact,name:"dossier_contact",onChange:N})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.object,name:"object",onChange:N})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Product / Substance"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.product_name,name:"product_name",onChange:N})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier type"}),e.jsx(d,{options:[{label:"Baseline Dossier (M1-M2-M3)",value:"Baseline Dossier (M1-M2-M3)",delai:5},{label:"Baseline Dossier (M1-M5)",value:"Baseline Dossier (M1-M5)",delai:9},{label:"Marketing Authorisation Dossier / BLA (m1-m5)",value:"Marketing Authorisation Dossier / BLA (m1-m5)",delai:9},{label:"Renewal Dossier",value:"Renewal Dossier",delai:9},{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier"},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:s=>b(s,"dossier_type"),placeholder:"",isClearable:!0,className:"react-select-container",classNamePrefix:"react-select",value:t.dossier_type})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier count"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.dossier_count,name:"dossier_count",onChange:N})]})}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:t.remarks,name:"remarks",onChange:N})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsx("div",{className:"d-flex justify-content-end mb-1",children:e.jsx("a",{href:"#",className:"btn btn-secondary btn-sm","data-bs-toggle":"modal","data-bs-target":"#kt_modal_multi_data_update",children:e.jsx("i",{className:"fa-solid fa-plus"})})}),e.jsxs("div",{className:"d-flex flex-column flex-md-row rounded border p-10",children:[e.jsx("ul",{className:"nav nav-tabs nav-line-tabs border-0 flex-row flex-md-column me-5 mb-3 mb-md-0 fs-6",children:e.jsx("div",{className:"position-relative d-inline-block",style:{flex:"1 1 auto",whiteSpace:"nowrap",overflowX:"hidden",overflowY:"auto",height:"calc(100vh - 240px)"},children:e.jsx("div",{className:"d-flex flex-column",children:r.map((s,l)=>e.jsx("li",{className:"nav-item w-md-150px me-0 pe-5",children:e.jsx("a",{className:"nav-link mx-0 my-2","data-bs-toggle":"tab",href:"#kt_vtab_pane_"+l,children:s.country})},l))})})}),e.jsx("div",{className:"tab-content w-100",children:t.mt.map((s,l)=>e.jsxs("div",{className:"tab-pane fade",id:"kt_vtab_pane_"+l,children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:s.uuid,name:"uuid",onChange:a=>p(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Submission type"}),e.jsx(d,{options:q,name:"submission_type",onChange:a=>y(a,"submission_type",l),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_type,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Submission mode"}),e.jsx(d,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:a=>y(a,"submission_mode",l),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_mode,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tracking",value:s.trackingNumber,onChange:a=>p(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Submission unit"}),e.jsx(d,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:a=>y(a,"submission_unit",l),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_unit,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",value:s.applicant,onChange:a=>p(a,l)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",value:s.agencyCode,onChange:a=>p(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inventedName",value:s.inventedName,onChange:a=>p(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",value:s.inn,onChange:a=>p(a,l)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",value:s.sequence,onChange:a=>p(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",value:s.r_sequence,onChange:a=>p(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",value:s.submission_description,onChange:a=>p(a,l)})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"remarks",value:s.remarks,onChange:a=>p(a,l)})]})})]},l))})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(d,{options:c==null?void 0:c.indication.map(s=>({label:s,value:s})),name:"indication",onChange:s=>b(s,"indication"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.indication,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx(d,{options:c==null?void 0:c.substance.map(s=>({label:s,value:s})),name:"drug_substance",onChange:s=>b(s,"drug_substance"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,value:t.drug_substance,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance manufacturer"}),e.jsx(d,{options:c==null?void 0:c.ds_manufacturer.map(s=>({label:s,value:s})),name:"drug_substance_manufacturer",onChange:s=>b(s,"drug_substance_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.drug_substance_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product"}),e.jsx(d,{options:c==null?void 0:c.drug_product.map(s=>({label:s,value:s})),name:"drug_product",onChange:s=>b(s,"drug_product"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.drug_product,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacturer"}),e.jsx(d,{options:c==null?void 0:c.dp_manufacturer.map(s=>({label:s,value:s})),name:"drug_product_manufacturer",onChange:s=>b(s,"drug_product_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.drug_product_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(d,{options:c==null?void 0:c.dosage.map(s=>({label:s,value:s})),name:"dosage_form",onChange:s=>b(s,"dosage_form"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(d,{options:c==null?void 0:c.excipient.map(s=>({label:s,value:s})),name:"excipient",onChange:s=>b(s,"excipient"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,value:t.excipient,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(O,{files:t.doc,upload:V,deleletFile:W,removeAll:G})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",placeholder:"",onChange:N})]})]}),e.jsx("div",{className:"flex-column","data-kt-stepper-element":"content",children:e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(M,{"data-enable-time":!0,value:t.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(M,{"data-enable-time":!0,value:t.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]})})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:T,children:"Back"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"btn btn-primary m-3","data-kt-stepper-action":"submit",onClick:s=>k(s,"save"),children:e.jsx("span",{className:"indicator-label",children:"Save"})}),e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",onClick:s=>k(s,"submit"),children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:A,children:"Continue"})]})]})]}),e.jsx("div",{className:"modal fade",id:"kt_modal_multi_data_update","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-xl",children:e.jsxs("div",{className:"modal-content rounded",children:[e.jsx("div",{className:"modal-header justify-content-end border-0 pb-0",children:e.jsx("div",{className:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal",children:e.jsx(H,{iconName:"cross",className:"fs-1"})})}),e.jsxs("div",{className:"modal-body pt-0 pb-15 px-5 px-xl-20",children:[e.jsxs("div",{className:"mb-13 text-center",children:[e.jsx("h1",{className:"mb-3",children:"Multi update"}),e.jsxs("div",{className:"text-muted fw-bold fs-5",children:["Apply update for selected countries"," ","."]})]}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"row mt-10",children:[e.jsx("div",{className:"col-lg-12 mb-10 mb-lg-0",children:e.jsxs("form",{className:"row",children:[e.jsxs("div",{className:"col-6",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:r[0].uuid,onChange:h})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission type"}),e.jsx(d,{options:q,name:"submission_type",onChange:s=>_(s,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:r[0].submission_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission mode"}),e.jsx(d,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:s=>_(s,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:r[0].submission_mode,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].trackingNumber,name:"trackingNumber",onChange:h})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission unit"}),e.jsx(d,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:s=>_(s,"submission_unit"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:r[0].submission_unit,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].applicant,name:"applicant",onChange:h})]})]}),e.jsxs("div",{className:"col-6",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].Product,name:"inventedName",onChange:h})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].inn,name:"inn",onChange:h})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].sequence,name:"sequence",onChange:h})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].r_seqeunce,name:"r_sequence",onChange:h})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].submission_description,name:"submission_description",onChange:h})]})]})]})}),e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-4 d-flex align-items-center mb-5",children:[e.jsx("div",{className:"me-5 position-relative",children:e.jsx("div",{className:"symbol symbol-35px symbol-circle",children:e.jsx(I,{className:"emojiFlag",countryCode:"EU","aria-label":"Europe",svg:!0,style:{width:"25px",height:"25px",borderRadius:"4px"}})})}),e.jsxs("div",{className:"fw-semibold",style:{width:"40%"},children:[e.jsx("a",{href:"#",className:"fs-5 fw-bold text-gray-900 text-hover-primary",children:"All Countries"}),e.jsx("div",{className:"text-gray-400",children:"All"})]}),e.jsx("div",{className:"badge badge-light",children:e.jsx("input",{type:"checkbox",name:"multicountry",value:"all",onChange:E,checked:C})})]}),r==null?void 0:r.map((s,l)=>e.jsxs("div",{className:"col-4 d-flex align-items-center mb-5",children:[e.jsx("div",{className:"me-5 position-relative",children:e.jsx("div",{className:"symbol symbol-35px symbol-circle",children:e.jsx(I,{className:"emojiFlag",countryCode:s.code,"aria-label":s.country,svg:!0,style:{width:"25px",height:"25px",borderRadius:"4px"}})})}),e.jsxs("div",{className:"fw-semibold",style:{width:"40%"},children:[e.jsx("a",{href:"#",className:"fs-5 fw-bold text-gray-900 text-hover-primary",children:s.country}),e.jsx("div",{className:"text-gray-400",children:s.code})]}),e.jsx("div",{className:"badge badge-light ",children:e.jsx("input",{type:"checkbox",id:s.id,name:s.country,value:s.country,onChange:F,checked:!!f.includes(s.id)})})]},l))]})})]})}),e.jsxs("div",{className:"d-flex flex-center flex-row-fluid pt-12",children:[e.jsx("button",{type:"reset",className:"btn btn-light me-3","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:B,children:"Update"})]})]})]})})})]})]})};Z.layout=j=>e.jsx(Y,{children:j,auth:j.props.auth});export{Z as default};
