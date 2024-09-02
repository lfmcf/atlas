import{r as b,W as Z,j as e,h as $,b as I}from"./app-8120f3db.js";import{n as p,z as A,h as V,K as J,R,A as Q}from"./AuthenticatedLayout-75842579.js";import{S as ee}from"./MenuComponent-a116a7fd.js";import"./MetronicSplashScreen-63879668.js";import{F as D}from"./index-3fde5fc6.js";/* empty css                  */import{D as se}from"./Dropzone-695f31af.js";import{S as ae}from"./StatusComponent-3687559d.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const le={startIndex:6,animation:!1,animationSpeed:"0.3s",animationNextClass:"animate__animated animate__slideInRight animate__fast",animationPreviousClass:"animate__animated animate__slideInLeft animate__fast"},te=N=>{const{metadata:r,folder:i,metapro:ne}=N,[C,y]=b.useState([]),[w,T]=b.useState(!1),[F,ie]=b.useState(r),[c,o]=b.useState({dossier_type:"",dossier_count:"",submission_type:new Array,submission_mode:new Array,submission_unit:new Array,sequence:new Array}),{data:t,setData:x,post:E,processing:re,errors:ce,clearErrors:oe,reset:de}=Z({id:i._id,form:i.form,region:i.region,procedure:i.procedure,product_name:i.product_name,dossier_contact:i.dossier_contact,object:i.object,country:i.country,dossier_type:i.dossier_type,dossier_count:i.dossier_count,remarks:i.remarks,mt:i.mt,indication:i.indication,drug_substance_manufacturer:i.drug_substance_manufacturer,drug_substance:i.drug_substance,drug_product:i.drug_product,drug_product_manufacturer:i.drug_product_manufacturer,dosage_form:i.dosage_form,excipient:i.excipient,doc:i&&i.doc!==null?i.doc:[],docremarks:i.docremarks,deadline:i.deadline,request_date:i.request_date,adjusted_deadline:new Date,adjustedDeadlineComments:"",audit:{user:{id:N.auth.user.id,name:N.auth.user.name},date:new Date,message:""},status:i?i.status:""});r.map(s=>({label:s.country,value:s.country,code:s.code}));const[d,P]=b.useState({uuid:r[0].uuid,submission_type:"",submission_mode:"",trackingNumber:r[0].tracking_numbers[0].numbers,submission_unit:"",applicant:r[0].applicant,agencyCode:r[0].agencyCode,inventedName:r[0].inventedName,mtd:r[0].mtd,inn:r[0].inn,sequence:r[0].sequence,r_sequence:r[0].r_sequence,submission_description:"",remarks:""}),[Y,me]=b.useState(r.map(s=>s.country)),M=b.useRef(null),f=b.useRef(null);b.useEffect(()=>{f.current=ee.createInsance(M.current,le)},[]);const z=()=>{if(!f.current)return;if(f.current.getCurrentStepIndex()===1&&(!t.dossier_type||!t.dossier_count)){t.dossier_type||o(a=>({...a,dossier_type:"this field is required"})),t.dossier_count||o(a=>({...a,dossier_count:"this field is required"}));return}let s=!1;if(f.current.getCurrentStepIndex()===2)for(let a=0;a<t.mt.length;a++)t.mt[a].submission_type||(o(n=>{const l={...n};return a>=0&&a<l.submission_type.length?l.submission_type[a]="this field is required":l.submission_type.push("this field is required"),l}),s=!0),t.mt[a].submission_mode||(o(n=>{const l={...n};return a>=0&&a<l.submission_mode.length?l.submission_mode[a]="this field is required":l.submission_mode.push("this field is required"),l}),s=!0),t.mt[a].submission_unit||(o(n=>{const l={...n};return a>=0&&a<l.submission_unit.length?l.submission_unit[a]="this field is required":l.submission_unit.push("this field is required"),l}),s=!0),t.mt[a].sequence||(o(n=>{const l={...n};return a>=0&&a<l.sequence.length?l.sequence[a]="this field is required":l.sequence.push("this field is required"),l}),s=!0);s||f.current.goNext()},U=()=>{f.current&&f.current.goPrev()},j=(s,a)=>{a=="dossier_type"&&o(n=>({...n,dossier_type:""})),x(a,s)},g=s=>{s.target.name=="dossier_count"&&o(a=>({...a,dossier_count:""})),x(s.target.name,s.target.value)},B=s=>{let a={...t};a.doc.push(...s),x(a)},h=(s,a)=>{if(s.target.name=="sequence"){let l={...c};l.sequence[a]="",o(l)}let n={...t};n.mt[a][s.target.name]=s.target.value,x(n)},q=(s,a,n)=>{if(a=="submission_type"){let u={...c};u.submission_type[n]="",o(u)}if(a=="submission_unit"){let u={...c};u.submission_unit[n]="",o(u)}if(a=="submission_mode"){let u={...c};u.submission_mode[n]="",o(u)}let l={...t};l.mt[n][a]=s,x(l)},S=(s,a)=>{const n={...d};n[a]=s,P(n)},v=s=>{const a={...d};a[s.target.name]=s.target.value,P(a)},H=s=>{const{id:a,checked:n}=s.target;y([...C,parseInt(a)]),n||y(C.filter(l=>l!=a))},G=s=>{T(!w),y(F.map(a=>a.id)),w&&y([])},W=()=>{let s={...t},a={...c};s.mt.map((n,l)=>{Y.includes(n.country)&&(d.submission_type&&(a.submission_type[l]=""),d.submission_mode&&(a.submission_mode[l]=""),d.submission_unit&&(a.submission_unit[l]=""),d.sequence&&(a.sequence[l]=""),s.mt[l].uuid=d.uuid,s.mt[l].submission_type=d.submission_type,s.mt[l].submission_mode=d.submission_mode,s.mt[l].trackingNumber=d.trackingNumber,s.mt[l].submission_unit=d.submission_unit,s.mt[l].applicant=d.applicant,s.mt[l].inventedName=d.inventedName,s.mt[l].mtd=d.mtd,s.mt[l].inn=d.inn,s.mt[l].sequence=d.sequence,s.mt[l].r_sequence=d.r_sequence,s.mt[l].submission_description=d.submission_description,s.mt[l].remarks=d.remarks)}),o(a),x(s)};b.useEffect(()=>{let s=new Date,a=s.getHours(),n=t.dossier_type?t.dossier_type.delai:"",l;n&&(a<12?l=s.setDate(s.getDate()+n):l=s.setDate(s.getDate()+n+1),x("deadline",new Date(l)))},[t.dossier_type]);const L=s=>{s.preventDefault(),E(route("audit-rmp-publishing"))},O=s=>{let a={...t};a.audit.message=s.target.value,x(a)},K=()=>{let s={...t},a=[];s.doc.map(n=>{n.link&&a.push(n.name)}),a.length>0&&I.post("delete-file-pub",{docs:a,id:t.id}),s.doc=[],x(s)},X=s=>{if(s.link){let l=[];l.push(s.name),I.post("delete-file-pub",{docs:l,id:t.id})}var a={...t};let n=a.doc.map(l=>l.name).indexOf(s.name);a.doc.splice(n,1),x(a)},k=s=>({control:a=>({...a,...s&&{borderColor:"red !important"}})}),_=s=>{var n;if((!t.dossier_type||!t.dossier_count)&&(s==2||s==3||s==4||s==5||s==6)){t.dossier_type||o(l=>({...l,dossier_type:"this field is required"})),t.dossier_count||o(l=>({...l,dossier_count:"this field is required"}));return}let a=!1;for(let l=0;l<t.mt.length;l++)(!t.mt[l].submission_type||!t.mt[l].submission_mode||!t.mt[l].submission_unit||!t.mt[l].sequence)&&(s==3||s==4||s==5||s==6)&&(t.mt[l].submission_type||o(u=>{const m={...u};return l>=0&&l<m.submission_type.length?m.submission_type[l]="this field is required":m.submission_type.push("this field is required"),m}),t.mt[l].submission_mode||o(u=>{const m={...u};return l>=0&&l<m.submission_type.length?m.submission_mode[l]="this field is required":m.submission_mode.push("this field is required"),m}),t.mt[l].submission_unit||o(u=>{const m={...u};return l>=0&&l<m.submission_type.length?m.submission_unit[l]="this field is required":m.submission_unit.push("this field is required"),m}),t.mt[l].sequence||o(u=>{const m={...u};return l>=0&&l<m.submission_type.length?m.sequence[l]="this field is required":m.sequence.push("this field is required"),m}),a=!0);a||(n=f.current)==null||n.goto(s)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(ae,{status:t.status})]}),e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:M,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=f.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>_(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>_(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>_(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>_(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>_(6),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"6"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 6"}),e.jsx("div",{className:"stepper-desc",children:"Dossier Review"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",onSubmit:L,id:"kt_stepper_example_basic_form",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.dossier_contact,name:"dossier_contact",onChange:g})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.object,name:"object",onChange:g})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Product / Substance"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.product_name,name:"product_name",onChange:g})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",title:"Choose the Dossier type",style:{color:c.dossier_type?"red":""},children:"Dossier type (*)"}),e.jsx(p,{options:[{label:"Baseline Dossier (M1-M2-M3)",value:"Baseline Dossier (M1-M2-M3)",delai:5},{label:"Baseline Dossier (M1-M5)",value:"Baseline Dossier (M1-M5)",delai:9},{label:"Marketing Authorisation Dossier / BLA (m1-m5)",value:"Marketing Authorisation Dossier / BLA (m1-m5)",delai:9},{label:"Renewal Dossier",value:"Renewal Dossier",delai:9},{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier"},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:s=>j(s,"dossier_type"),placeholder:"",isClearable:!0,className:"react-select-container",classNamePrefix:"react-select",value:t.dossier_type,styles:k(c.dossier_type)})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",title:"Enter the number of documents in Publishing dossier",style:{color:c.dossier_count?"red":""},children:"Dossier count (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.dossier_count,style:{borderColor:c.dossier_count?"red":""},name:"dossier_count",onChange:g})]})}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:t.remarks,name:"remarks",onChange:g})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsx("div",{className:"d-flex justify-content-end mb-1",children:e.jsx("a",{href:"#",className:"btn btn-secondary btn-sm","data-bs-toggle":"modal","data-bs-target":"#kt_modal_multi_data_update",children:e.jsx("i",{className:"fa-solid fa-plus"})})}),e.jsxs("div",{className:"d-flex flex-column flex-md-row rounded border p-10",children:[e.jsx("ul",{className:"nav nav-tabs nav-line-tabs border-0 flex-row flex-md-column me-5 mb-3 mb-md-0 fs-6",children:e.jsx("div",{className:"position-relative d-inline-block",style:{flex:"1 1 auto",whiteSpace:"nowrap",overflowX:"hidden",overflowY:"auto",height:"calc(100vh - 240px)"},children:e.jsx("div",{className:"d-flex flex-column",children:r.map((s,a)=>e.jsx("li",{className:"nav-item w-md-150px me-0 pe-5",children:e.jsx("a",{className:"nav-link mx-0 my-2"+(a===0?" active":""),"data-bs-toggle":"tab",href:"#kt_vtab_pane_"+a,style:{color:c.submission_type[a]||c.submission_unit[a]||c.submission_mode[a]||c.sequence[a]?"red":""},children:s.country})},a))})})}),e.jsx("div",{className:"tab-content w-100",children:t.mt.map((s,a)=>e.jsxs("div",{className:"tab-pane fade"+(a===0?" active show":""),id:"kt_vtab_pane_"+a,children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:s.uuid,name:"uuid",onChange:n=>h(n,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Choose the submission type",style:{color:c.submission_type[a]?"red":""},children:"Submission type (*)"}),e.jsx(p,{options:A,name:"submission_type",onChange:n=>q(n,"submission_type",a),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_type,menuPortalTarget:document.body,styles:k(c.submission_type[a])})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Choose the submission mode",style:{color:c.submission_mode[a]?"red":""},children:"Submission mode (*)"}),e.jsx(p,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:n=>q(n,"submission_mode",a),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_mode,menuPortalTarget:document.body,styles:k(c.submission_mode[a])})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tracking",value:s.trackingNumber,onChange:n=>h(n,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Choose the applicable submission unit",style:{color:c.submission_unit[a]?"red":""},children:"Submission unit (*)"}),e.jsx(p,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:n=>q(n,"submission_unit",a),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_unit,menuPortalTarget:document.body,styles:k(c.submission_unit[a])})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",value:s.applicant,onChange:n=>h(n,a)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",value:s.agencyCode,onChange:n=>h(n,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inventedName",value:s.inventedName,onChange:n=>h(n,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_inncode",value:s.inn,onChange:n=>h(n,a)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:c.sequence[a]?"red":""},children:"Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",value:s.sequence,style:{borderColor:c.sequence[a]?"red":""},onChange:n=>h(n,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",value:s.r_sequence,onChange:n=>h(n,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",value:s.submission_description,onChange:n=>h(n,a)})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"remarks",value:s.remarks,onChange:n=>h(n,a)})]})})]},a))})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(p,{options:r[0].indications.map(s=>({label:s.indication,value:s.indication})),name:"indication",onChange:s=>j(s,"indication"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.indication,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx(p,{options:r[0].drug_substance.map(s=>({label:s.substance,value:s.substance})),name:"drug_substance",onChange:s=>j(s,"drug_substance"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,value:t.drug_substance,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance manufacturer"}),e.jsx(p,{options:r[0].drug_product_manufacturer.map(s=>({label:s.product_manufacturer,value:s.product_manufacturer})),name:"drug_substance_manufacturer",onChange:s=>j(s,"drug_substance_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.drug_substance_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product"}),e.jsx(p,{options:r[0].drug_product.map(s=>({label:s.drug_product,value:s.drug_product})),name:"drug_product",onChange:s=>j(s,"drug_product"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.drug_product,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacturer"}),e.jsx(p,{options:r[0].drug_product_manufacturer.map(s=>({label:s.product_manufacturer,value:s.product_manufacturer})),name:"drug_product_manufacturer",onChange:s=>j(s,"drug_product_manufacturer"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.drug_product_manufacturer,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(p,{options:r[0].dosage_form.map(s=>({label:s.form,value:s.form})),name:"dosage_form",onChange:s=>j(s,"dosage_form"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(p,{options:r[0].excipients.map(s=>({label:s.excipient,value:s.excipient})),name:"excipient",onChange:s=>j(s,"excipient"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,value:t.excipient,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999})}})]})})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(se,{files:t.doc,upload:B,deleletFile:X,removeAll:K})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",placeholder:"",onChange:g})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(D,{"data-enable-time":!0,value:t.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(D,{"data-enable-time":!0,value:t.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(D,{"data-enable-time":!0,value:t.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>x("adjusted_deadline",s)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:g})]})})]}),e.jsx("div",{className:"flex-column current","data-kt-stepper-element":"content",children:e.jsx("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_2",children:e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_1",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier audit"})]}),e.jsxs("div",{id:"kt_accordion_2_item_1",className:"fs-6 collapse show p-10","data-bs-parent":"#kt_accordion_2",children:[e.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:i.audit?i.audit.map((s,a)=>s.message&&s.user.id!==N.auth.user.id?e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:V(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},a):e.jsx("div",{className:"d-flex justify-content-end mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-end",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"me-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:V(s.date).format("MM/DD/YYYY H:s")})}),e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user.name})})]}),e.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:s.message})]})},a)):""}),e.jsx("textarea",{className:"form-control form-control-flush mb-3",rows:1,"data-kt-element":"input",onChange:O,placeholder:"Type a message"})]})]})})})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:U,children:"Back"})}),e.jsxs("div",{children:[N.auth.user.current_team_id==3?e.jsx("button",{type:"button",className:"btn btn-primary me-2","data-kt-stepper-action":"submit",onClick:()=>$.post(route("progress-publishing",{id:t.id})),children:e.jsx("span",{className:"indicator-label",children:"Accept"})}):"",e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:z,children:"Continue"})]})]})]}),e.jsx("div",{className:"modal fade",id:"kt_modal_multi_data_update","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-xl",children:e.jsxs("div",{className:"modal-content rounded",children:[e.jsx("div",{className:"modal-header justify-content-end border-0 pb-0",children:e.jsx("div",{className:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal",children:e.jsx(J,{iconName:"cross",className:"fs-1"})})}),e.jsxs("div",{className:"modal-body pt-0 pb-15 px-5 px-xl-20",children:[e.jsxs("div",{className:"mb-13 text-center",children:[e.jsx("h1",{className:"mb-3",children:"Multi update"}),e.jsxs("div",{className:"text-muted fw-bold fs-5",children:["Apply update for selected countries"," ","."]})]}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"row mt-10",children:[e.jsx("div",{className:"col-lg-12 mb-10 mb-lg-0",children:e.jsxs("form",{className:"row",children:[e.jsxs("div",{className:"col-6",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:r[0].uuid,onChange:v})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission type"}),e.jsx(p,{options:A,name:"submission_type",onChange:s=>S(s,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.mt[0].submission_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission mode"}),e.jsx(p,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:s=>S(s,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.mt[0].submission_mode,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.mt[0].trackingNumber,name:"trackingNumber",onChange:v})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission unit"}),e.jsx(p,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:s=>S(s,"submission_unit"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.mt[0].submission_unit,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.mt[0].applicant,name:"applicant",onChange:v})]})]}),e.jsxs("div",{className:"col-6",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.mt[0].inventedName,name:"inventedName",onChange:v})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.mt[0].inn,name:"inn",onChange:v})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.mt[0].sequence,name:"sequence",onChange:v})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.mt[0].r_seqeunce,name:"r_sequence",onChange:v})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:t.mt[0].submission_description,name:"submission_description",onChange:v})]})]})]})}),e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-4 d-flex align-items-center mb-5",children:[e.jsx("div",{className:"me-5 position-relative",children:e.jsx("div",{className:"symbol symbol-35px symbol-circle",children:e.jsx(R,{className:"emojiFlag",countryCode:"EU","aria-label":"Europe",svg:!0,style:{width:"25px",height:"25px",borderRadius:"4px"}})})}),e.jsxs("div",{className:"fw-semibold",style:{width:"40%"},children:[e.jsx("a",{href:"#",className:"fs-5 fw-bold text-gray-900 text-hover-primary",children:"All Countries"}),e.jsx("div",{className:"text-gray-400",children:"All"})]}),e.jsx("div",{className:"badge badge-light",children:e.jsx("input",{type:"checkbox",name:"multicountry",value:"all",onChange:G,checked:w})})]}),r==null?void 0:r.map((s,a)=>e.jsxs("div",{className:"col-4 d-flex align-items-center mb-5",children:[e.jsx("div",{className:"me-5 position-relative",children:e.jsx("div",{className:"symbol symbol-35px symbol-circle",children:e.jsx(R,{className:"emojiFlag",countryCode:s.code,"aria-label":s.country,svg:!0,style:{width:"25px",height:"25px",borderRadius:"4px"}})})}),e.jsxs("div",{className:"fw-semibold",style:{width:"40%"},children:[e.jsx("a",{href:"#",className:"fs-5 fw-bold text-gray-900 text-hover-primary",children:s.country}),e.jsx("div",{className:"text-gray-400",children:s.code})]}),e.jsx("div",{className:"badge badge-light ",children:e.jsx("input",{type:"checkbox",id:s.id,name:s.country,value:s.country,onChange:H,checked:!!C.includes(s.id)})})]},a))]})})]})}),e.jsxs("div",{className:"d-flex flex-center flex-row-fluid pt-12",children:[e.jsx("button",{type:"reset",className:"btn btn-light me-3","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:W,children:"Update"})]})]})]})})})]})]})};te.layout=N=>e.jsx(Q,{children:N,auth:N.props.auth});export{te as default};