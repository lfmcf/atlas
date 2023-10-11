import{r as p,W as w,j as e}from"./app-7540d87f.js";import{h as j,S as u,f as C,s as D,a as S,A as P}from"./AuthenticatedLayout-c082dd9e.js";import{S as F}from"./MenuComponent-1a43af17.js";import{F as N}from"./index-55aab4a3.js";/* empty css                  */import"./MetronicSplashScreen-16ee101b.js";const I=r=>{var x=new URLSearchParams(window.location.search);const b=p.useRef(null),c=p.useRef(null),{folder:a}=r,{data:l,setData:i,post:v,processing:R,errors:V,clearErrors:q,reset:E}=w({form:a?a.form:x.get("form"),region:a?a.region:x.get("region"),coredoc:a?a.coreDoc:x.get("coreDoc"),dossier_contact:a?a.dossier_contact:r.auth.user.trigramme.toUpperCase(),object:a?a.object:"",product_name:a?a.product_name:"",substance_name:a?a.substance_name:"",country:a?a.country:"",dossier_type:a?a.dossier_type:"",document_count:a?a.document_count:"",deficiency_letter:a?a.deficiency_letter:"",chrono:a?a.chrono:"",remarks:a?a.remarks:"",doc:[],request_date:new Date,deadline:new Date,adjusted_deadline:j(new Date),delivery_remarks:"",review_request_date:j(new Date),review_deadline:j(new Date),delivery_comment:"",delivery_version:"",correction_request:"",correction_origin:"",document:"",document_remarks:"",status:"",created_by:r.auth.user.id});let g=r.countries.map(function(s){return{value:s.name,label:s.name,code:s.code}});p.useEffect(()=>{c.current=F.createInsance(b.current)},[]);const y=()=>{c.current&&(c.current.getCurrentStepIndex(),c.current.getCurrentStepIndex(),c.current.goNext())},_=()=>{c.current&&c.current.goPrev()},o=s=>{i(s.target.name,s.target.value)},k=s=>{let t={...l};t.doc=[],Promise.all([...s.target.files].map(n=>t.doc.push(n))),i(t)},m=(s,t)=>{i(t,s)};p.useEffect(()=>{let s=new Date,t=s.getHours(),n=l.dossier_type?l.dossier_type.delai:0,d=new Date,f=1;for(t<12?n=n:n=n+1;f<n;)d=new Date(s.setDate(s.getDate()+1)),d.getDay()!=0&&d.getDay()!=6&&f++;i("deadline",new Date(d))},[l.dossier_type]);const h=(s,t)=>{s.preventDefault(),v(route("initiate-formatting",{type:t}))};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:b,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General Information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Delivery Details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:h,children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column current","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:l.dossier_contact,name:"dossier_contact",disabled:!0})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:l.object,name:"object",onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Product name"}),e.jsx(u,{options:C,name:"product_name",onChange:s=>m(s,"product_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:l.product_name})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Substance name"}),e.jsx(u,{options:D,name:"substance_name",onChange:s=>m(s,"substance_name"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:l.substance_name})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Country"}),e.jsx(u,{options:g,name:"country",onChange:s=>m(s,"country"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:l.country})]}),e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dossier type"}),e.jsx(u,{options:S,name:"dossier_type",onChange:s=>m(s,"dossier_type"),placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})},value:l.dossier_type})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Document Count"}),e.jsx("input",{type:"number",className:"form-control form-control-solid",defaultValue:l.document_count,name:"document_count",onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Deficiency Letter"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:l.deficiency_letter,name:"deficiency_letter",onChange:o})]}),e.jsxs("div",{className:"col-md-4 col-lg-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Chrono N°/ Dossier Reference"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"chrono",defaultValue:l.chrono,onChange:o})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:l.remarks,name:"remarks",onChange:o})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-6 col-lg-6 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Attached documents"}),e.jsx("input",{type:"file",multiple:!0,className:"form-control form-control-solid",name:"doc",onChange:k})]}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx("div",{className:"d-flex align-items-center text-gray-400 h-100",children:l.doc?l.doc.map(s=>e.jsx("span",{className:"me-2 fs-5",children:s.name})):""})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",placeholder:"",onChange:o})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(N,{"data-enable-time":!0,value:l.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(N,{"data-enable-time":!0,value:l.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"mb-10"})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:_,children:"Back"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"btn btn-primary m-3","data-kt-stepper-action":"submit",onClick:s=>h(s,"save"),children:e.jsx("span",{className:"indicator-label",children:"Save"})}),e.jsxs("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"submit",onClick:s=>h(s,"submit"),children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:y,children:"Continue"})]})]})]})]})})};I.layout=r=>e.jsx(P,{children:r,auth:r.props.auth});export{I as default};