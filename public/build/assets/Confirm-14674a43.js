import{W as V,r as b,j as e}from"./app-134494bf.js";import{A as T,S as c,p as C,K as A,R as F}from"./AuthenticatedLayout-e3c0c57e.js";import{S as z}from"./MenuComponent-20e277f4.js";import"./MetronicSplashScreen-fb846d29.js";import{F as f}from"./index-ec83b4d4.js";/* empty css                  */const X=v=>{const{metadata:r,folder:t}=v;new URLSearchParams(window.location.search);const{data:n,setData:m,post:k,processing:U,errors:B,clearErrors:E,reset:G}=V({id:t._id,form:t.form,region:t.region,procedure:t.procedure,product_name:t.product_name,dossier_contact:t.dossier_contact,object:t.object,country:t.country,dossier_type:t.dossier_type,dossier_count:t.dossier_count,remarks:t.remarks,mt:t.mt,indication:t.indication,manufacturer:t.manufacturer,drug_substance:t.drug_substance,drug_product_manufacturer:t.drug_product_manufacturer,dosage_form:t.dosage_form,excipient:t.excipient,doc:t.doc,docremarks:t.docremarks,deadline:t.deadline,request_date:t.request_date,adjusted_deadline:new Date,adjustedDeadlineComments:""}),w=r.map(s=>({label:s.country,value:s.country,code:s.code})),[i,g]=b.useState({uuid:r[0].uuid,submission_type:"",submission_mode:"",trackingNumber:r[0].trackingNumber,submission_unit:"",applicant:r[0].applicant,agencyCode:r[0].agencyCode,inventedName:r[0].inventedName,mtd:r[0].mtd,inn:r[0].inn,sequence:r[0].sequence,r_sequence:r[0].r_sequence,submission_description:"",remarks:""}),[y,S]=b.useState(r.map(s=>s.country)),_=b.useRef(null),p=b.useRef(null);b.useEffect(()=>{p.current=z.createInsance(_.current)},[]);const P=()=>{p.current&&(p.current.getCurrentStepIndex(),p.current.getCurrentStepIndex(),p.current.goNext())},D=()=>{p.current&&p.current.goPrev()},x=(s,l)=>{m(l,s)},d=s=>{m(s.target.name,s.target.value)},q=s=>{let l={...n};l.doc=[],Promise.all([...s.target.files].map(a=>l.doc.push(a))),m(l)},o=(s,l)=>{let a={...n};a.mt[l][s.target.name]=s.target.value,m(a)},N=(s,l,a)=>{let h={...n};h.mt[a][l]=s,m(h)},j=(s,l)=>{const a={...i};a[l]=s,g(a)},u=s=>{const l={...i};l[s.target.name]=s.target.value,g(l)},M=s=>{let l=[...y];if(s.target.checked)l.push(s.target.value);else{const a=l.indexOf(s.target.value);l.splice(a,1)}S(l)},I=()=>{let s={...n};s.mt.map((l,a)=>{y.includes(l.country)&&(s.mt[a].uuid=i.uuid,s.mt[a].submission_type=i.submission_type,s.mt[a].submission_mode=i.submission_mode,s.mt[a].trackingNumber=i.trackingNumber,s.mt[a].submission_unit=i.submission_unit,s.mt[a].applicant=i.applicant,s.mt[a].agencyCode=i.agencyCode,s.mt[a].inventedName=i.inventedName,s.mt[a].mtd=i.mtd,s.mt[a].inn=i.inn,s.mt[a].sequence=i.sequence,s.mt[a].r_sequence=i.r_sequence,s.mt[a].submission_description=i.submission_description,s.mt[a].remarks=i.remarks)}),m(s)};b.useEffect(()=>{let s={...n};r.map((l,a)=>{s.mt.push({id:l.id,country:l.country,uuid:l.uuid,submission_type:"",submission_mode:"",trackingNumber:l.trackingNumber,submission_unit:"",applicant:l.applicant,agencyCode:l.agencyCode,inventedName:l.Product,inn:l.inn,sequence:"",r_sequence:"",submission_description:"",remarks:""})}),m(s)},[]),b.useEffect(()=>{let s=new Date,l=s.getHours(),a=n.dossier_type?n.dossier_type.delai:"",h;a&&(l<12?h=s.setDate(s.getDate()+a):h=s.setDate(s.getDate()+a+1),m("deadline",new Date(h)))},[n.dossier_type]);const R=s=>{s.preventDefault(),k(route("confirm-rmp-publishing"))};return e.jsx(T,{auth:v.auth,children:e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:_,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",onSubmit:R,id:"kt_stepper_example_basic_form",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:n.dossier_contact,name:"dossier_contact",onChange:d})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:n.object,name:"object",onChange:d})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Product / Substance"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:n.product_name,name:"product_name",onChange:d})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Submission country"}),e.jsx(c,{options:w,name:"country",onChange:s=>x(s,"country"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:n.country})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier type"}),e.jsx(c,{options:[{label:"Baseline Dossier (M1-M2-M3)",value:"Baseline Dossier (M1-M2-M3)",delai:5},{label:"Baseline Dossier (M1-M5)",value:"Baseline Dossier (M1-M5)",delai:9},{label:"Marketing Authorisation Dossier / BLA (m1-m5)",value:"Marketing Authorisation Dossier / BLA (m1-m5)",delai:9},{label:"Renewal Dossier",value:"Renewal Dossier",delai:9},{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier"},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:s=>x(s,"dossier_type"),placeholder:"",isClearable:!0,className:"basic",classNamePrefix:"basic",value:n.dossier_type})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier count"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:n.dossier_count,name:"dossier_count",onChange:d})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:n.remarks,name:"remarks",onChange:d})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsx("div",{className:"d-flex justify-content-end mb-1",children:e.jsx("a",{href:"#",className:"btn btn-secondary btn-sm","data-bs-toggle":"modal","data-bs-target":"#kt_modal_multi_data_update",children:e.jsx("i",{className:"fa-solid fa-plus"})})}),e.jsxs("div",{className:"d-flex flex-column flex-md-row rounded border p-10",children:[e.jsx("ul",{className:"nav nav-tabs nav-line-tabs border-0 flex-row flex-md-column me-5 mb-3 mb-md-0 fs-6",children:e.jsx("div",{className:"position-relative d-inline-block",style:{flex:"1 1 auto",whiteSpace:"nowrap",overflowX:"hidden",overflowY:"auto",height:"calc(100vh - 240px)"},children:e.jsx("div",{className:"d-flex flex-column",children:r.map((s,l)=>e.jsx("li",{className:"nav-item w-md-150px me-0 pe-5",children:e.jsx("a",{className:"nav-link mx-0 my-2","data-bs-toggle":"tab",href:"#kt_vtab_pane_"+l,children:s.country})},l))})})}),e.jsx("div",{className:"tab-content w-100",children:n.mt.map((s,l)=>e.jsxs("div",{className:"tab-pane fade",id:"kt_vtab_pane_"+l,children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:s.uuid,name:"uuid",onChange:a=>o(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Submission type"}),e.jsx(c,{options:C,name:"submission_type",onChange:a=>N(a,"submission_type",l),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:s.submission_type,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Submission mode"}),e.jsx(c,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:a=>N(a,"submission_mode",l),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:s.submission_mode,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tracking",value:s.trackingNumber,onChange:a=>o(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Submission unit"}),e.jsx(c,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:a=>N(a,"submission_unit",l),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:s.submission_unit,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})}})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",value:s.applicant,onChange:a=>o(a,l)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",value:s.agencyCode,onChange:a=>o(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inventedName",value:s.inventedName,onChange:a=>o(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_inncode",value:s.inn,onChange:a=>o(a,l)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",value:s.sequence,onChange:a=>o(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",value:s.r_sequence,onChange:a=>o(a,l)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",value:s.submission_description,onChange:a=>o(a,l)})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"remarks",value:s.remarks,onChange:a=>o(a,l)})]})})]},l))})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(c,{name:"indication",onChange:s=>x(s,"indication"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:n.indication,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Manufacturer"}),e.jsx(c,{name:"manufacturer",onChange:s=>x(s,"manufacturer"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:n.manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:n.drug_substance,name:"drug_substance",onChange:d})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacture"}),e.jsx(c,{name:"drug_product_manufacturer",onChange:s=>x(s,"drug_product_manufacturer"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:n.drug_product_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(c,{name:"dosage_form",onChange:s=>x(s,"dosage_form"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:n.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(c,{name:"excipient",onChange:s=>x(s,"excipient"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:n.excipient,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Attached documents"}),e.jsx("input",{type:"file",multiple:!0,className:"form-control form-control-solid",name:"doc",onChange:q})]}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx("div",{className:"d-flex align-items-center text-gray-400 h-100",children:n.doc?n.doc.map(s=>e.jsx("span",{className:"me-2 fs-5",children:s.name})):""})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",placeholder:"",onChange:d})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(f,{"data-enable-time":!0,value:n.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(f,{"data-enable-time":!0,value:n.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(f,{"data-enable-time":!0,value:n.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>m("adjusted_deadline",s)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:d})]})})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:D,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:P,children:"Continue"})]})]})]}),e.jsx("div",{className:"modal fade",id:"kt_modal_multi_data_update","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-xl",children:e.jsxs("div",{className:"modal-content rounded",children:[e.jsx("div",{className:"modal-header justify-content-end border-0 pb-0",children:e.jsx("div",{className:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal",children:e.jsx(A,{iconName:"cross",className:"fs-1"})})}),e.jsxs("div",{className:"modal-body pt-0 pb-15 px-5 px-xl-20",children:[e.jsxs("div",{className:"mb-13 text-center",children:[e.jsx("h1",{className:"mb-3",children:"Multi update"}),e.jsxs("div",{className:"text-muted fw-bold fs-5",children:["Apply update for selected countries"," ","."]})]}),e.jsx("div",{className:"d-flex flex-column",children:e.jsxs("div",{className:"row mt-10",children:[e.jsx("div",{className:"col-lg-6 mb-10 mb-lg-0",children:e.jsxs("form",{children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:r[0].uuid,onChange:u})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission type"}),e.jsx(c,{options:C,name:"submission_type",onChange:s=>j(s,"submission_type"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:r[0].submission_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission mode"}),e.jsx(c,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:s=>j(s,"submission_mode"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:r[0].submission_mode,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].trackingNumber,name:"trackingNumber",onChange:u})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission unit"}),e.jsx(c,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:s=>j(s,"submission_unit"),className:"basic",classNamePrefix:"basic",placeholder:"",isClearable:!0,value:r[0].submission_unit,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].applicant,name:"applicant",onChange:u})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].Product,name:"inventedName",onChange:u})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].inn,name:"inn",onChange:u})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].sequence,name:"sequence",onChange:u})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].r_seqeunce,name:"r_sequence",onChange:u})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].submission_description,name:"submission_description",onChange:u})]})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"tab-content rounded h-100 bg-light p-10",children:r.map((s,l)=>e.jsxs("div",{className:"d-flex align-items-center mb-5",children:[e.jsx("div",{className:"me-5 position-relative",children:e.jsx("div",{className:"symbol symbol-35px symbol-circle",children:e.jsx(F,{className:"emojiFlag",countryCode:s.code,"aria-label":s.country})})}),e.jsxs("div",{className:"fw-semibold",children:[e.jsx("a",{href:"#",className:"fs-5 fw-bold text-gray-900 text-hover-primary",children:s.country}),e.jsx("div",{className:"text-gray-400",children:s.code})]}),e.jsx("div",{className:"badge badge-light ms-auto",children:e.jsx("input",{type:"checkbox",defaultChecked:!0,name:"multicountry",value:s.country,onChange:M})})]},l))})})]})}),e.jsxs("div",{className:"d-flex flex-center flex-row-fluid pt-12",children:[e.jsx("button",{type:"reset",className:"btn btn-light me-3","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:I,children:"Update"})]})]})]})})})]})})};export{X as default};
