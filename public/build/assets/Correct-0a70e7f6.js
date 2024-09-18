import{r as p,W as de,j as e,b as R}from"./app-53ce9807.js";import{n as N,z as F,h as w,K as me,R as I,A as ue}from"./AuthenticatedLayout-9b475de4.js";import{S as pe}from"./MenuComponent-66e1b912.js";import"./MetronicSplashScreen-8c2b6694.js";import{F as D}from"./index-bd224483.js";/* empty css                  */import{d as he,C as xe}from"./ckeditor-ab1170b9.js";import{D as be}from"./Dropzone-f409fc97.js";import{P as fe}from"./ProductMetaData-dd6b9697.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const je={startIndex:6,animation:!1,animationSpeed:"0.3s",animationNextClass:"animate__animated animate__slideInRight animate__fast",animationPreviousClass:"animate__animated animate__slideInLeft animate__fast"},Ne=f=>{var A;function E(s){return{__html:s.message}}const{metadata:S,folder:r,metapro:ve}=f,[Y,q]=p.useState([]),[y,U]=p.useState(!1),[T,ge]=p.useState(r.mt),[c,m]=p.useState({dossier_type:"",dossier_count:"",submission_type:new Array,submission_mode:new Array,submission_unit:new Array,sequence:new Array}),{data:i,setData:o,post:H,processing:_e,errors:ye,clearErrors:ke,reset:Ce}=de({id:r._id,form:r.form,region:r.region,procedure:r.procedure,product_name:r.product_name,dossier_contact:r.dossier_contact,object:r.object,country:r.country,dossier_type:r.dossier_type,dossier_count:r.dossier_count,remarks:r.remarks,mt:r.mt,indication:r.indication,drug_substance:r.drug_substance,drug_product:r.drug_product,dosage_form:r.dosage_form,excipient:r.excipient,doc:r&&r.doc!==null?r.doc:[],docremarks:r.docremarks,deadline:r.deadline,request_date:r.request_date,adjusted_deadline:new Date,adjustedDeadlineComments:"",correction:{user:{id:f.auth.user.id,name:f.auth.user.name},date:new Date,message:"",source:[]}}),M=p.useRef(null),h=p.useRef(null);p.useEffect(()=>{h.current=pe.createInsance(M.current,je)},[]);const B=()=>{if(!h.current)return;if(h.current.getCurrentStepIndex()===1&&(!i.dossier_type||!i.dossier_count)){i.dossier_type||m(a=>({...a,dossier_type:"this field is required"})),i.dossier_count||m(a=>({...a,dossier_count:"this field is required"}));return}let s=!1;if(h.current.getCurrentStepIndex()===2)for(let a=0;a<i.mt.length;a++)i.mt[a].submission_type||(m(t=>{const l={...t};return a>=0&&a<l.submission_type.length?l.submission_type[a]="this field is required":l.submission_type.push("this field is required"),l}),s=!0),i.mt[a].submission_mode||(m(t=>{const l={...t};return a>=0&&a<l.submission_mode.length?l.submission_mode[a]="this field is required":l.submission_mode.push("this field is required"),l}),s=!0),i.mt[a].submission_unit||(m(t=>{const l={...t};return a>=0&&a<l.submission_unit.length?l.submission_unit[a]="this field is required":l.submission_unit.push("this field is required"),l}),s=!0),i.mt[a].sequence||(m(t=>{const l={...t};return a>=0&&a<l.sequence.length?l.sequence[a]="this field is required":l.sequence.push("this field is required"),l}),s=!0);s||h.current.goNext()},G=()=>{h.current&&h.current.goPrev()},P=(s,a)=>{a=="dossier_type"&&m(t=>({...t,dossier_type:""})),o(a,s)},j=s=>{s.target.name=="dossier_count"&&m(a=>({...a,dossier_count:""})),o(s.target.name,s.target.value)},L=s=>{let a={...i};a.doc.push(...s),o(a)},u=(s,a)=>{if(s.target.name=="sequence"){let l={...c};l.sequence[a]="",m(l)}let t={...i};t.mt[a][s.target.name]=s.target.value,o(t)},k=(s,a,t)=>{if(a=="submission_type"){let d={...c};d.submission_type[t]="",m(d)}if(a=="submission_unit"){let d={...c};d.submission_unit[t]="",m(d)}if(a=="submission_mode"){let d={...c};d.submission_mode[t]="",m(d)}let l={...i};l.mt[t][a]=s,o(l)},C=(s,a)=>{const t={...multiData};t[a]=s,setMultiData(t)},b=s=>{const a={...multiData};a[s.target.name]=s.target.value,setMultiData(a)},W=s=>{let a=[...multicountry];if(s.target.checked)a.push(s.target.value);else{const t=a.indexOf(s.target.value);a.splice(t,1)}setMulticountry(a)},z=()=>{let s={...i},a={...c};s.mt.map((t,l)=>{multicountry.includes(t.country)&&(multiData.submission_type&&(a.submission_type[l]=""),multiData.submission_mode&&(a.submission_mode[l]=""),multiData.submission_unit&&(a.submission_unit[l]=""),multiData.sequence&&(a.sequence[l]=""),s.mt[l].uuid=multiData.uuid,s.mt[l].submission_type=multiData.submission_type,s.mt[l].submission_mode=multiData.submission_mode,s.mt[l].trackingNumber=multiData.trackingNumber,s.mt[l].submission_unit=multiData.submission_unit,s.mt[l].applicant=multiData.applicant,s.mt[l].inventedName=multiData.inventedName,s.mt[l].mtd=multiData.mtd,s.mt[l].inn=multiData.inn,s.mt[l].sequence=multiData.sequence,s.mt[l].r_sequence=multiData.r_sequence,s.mt[l].submission_description=multiData.submission_description,s.mt[l].remarks=multiData.remarks)}),m(a),o(s)};p.useEffect(()=>{let s=new Date,a=s.getHours(),t=i.dossier_type?i.dossier_type.delai:"",l;t&&(a<12?l=s.setDate(s.getDate()+t):l=s.setDate(s.getDate()+t+1),o("deadline",new Date(l)))},[i.dossier_type]);const K=s=>{s.preventDefault(),H(route("correct-rmp-publishing"))},V=s=>{let a={...i};if(s.target.checked)a.correction.source.push(s.target.value);else{const t=a.correction.source.indexOf(s.target.value);a.correction.source.splice(t,1)}o(a)},X=s=>{const a=s.getData();let t={...i};t.correction.message=a,o(t)},Z=s=>{U(!y),q(T.map(a=>a.id)),y&&q([])},$=()=>{let s={...i},a=[];s.doc.map(t=>{t.link&&a.push(t.name)}),a.length>0&&R.post("delete-file-pub",{docs:a,id:i.id}),s.doc=[],o(s)},J=s=>{if(s.link){let l=[];l.push(s.name),R.post("delete-file-pub",{docs:l,id:i.id})}var a={...i};let t=a.doc.map(l=>l.name).indexOf(s.name);a.doc.splice(t,1),o(a)},_=s=>({control:a=>({...a,...s&&{borderColor:"red !important"}})}),g=s=>{var t;if((!i.dossier_type||!i.dossier_count)&&(s==2||s==3||s==4||s==5||s==6)){i.dossier_type||m(l=>({...l,dossier_type:"this field is required"})),i.dossier_count||m(l=>({...l,dossier_count:"this field is required"}));return}let a=!1;for(let l=0;l<i.mt.length;l++)(!i.mt[l].submission_type||!i.mt[l].submission_mode||!i.mt[l].submission_unit||!i.mt[l].sequence)&&(s==3||s==4||s==5||s==6)&&(i.mt[l].submission_type||m(d=>{const n={...d};return l>=0&&l<n.submission_type.length?n.submission_type[l]="this field is required":n.submission_type.push("this field is required"),n}),i.mt[l].submission_mode||m(d=>{const n={...d};return l>=0&&l<n.submission_type.length?n.submission_mode[l]="this field is required":n.submission_mode.push("this field is required"),n}),i.mt[l].submission_unit||m(d=>{const n={...d};return l>=0&&l<n.submission_type.length?n.submission_unit[l]="this field is required":n.submission_unit.push("this field is required"),n}),i.mt[l].sequence||m(d=>{const n={...d};return l>=0&&l<n.submission_type.length?n.sequence[l]="this field is required":n.sequence.push("this field is required"),n}),a=!0);a||(t=h.current)==null||t.goto(s)},Q=()=>{o("drug_substance",[...i.drug_substance,{drug_substance:"",manufacturer:""}])},O=()=>{o("drug_product",[...i.drug_product,{drug_product:"",manufacturer:""}])},ee=s=>{let a={...i};a.drug_product.splice(s,1),o(a)},se=s=>{let a={...i};a.drug_substance.splice(s,1),o(a)},[ae,le]=p.useState({}),[te,ie]=p.useState({}),re=(s,a)=>{var n,x;console.log(a);let t={...i};t.drug_substance[s].drug_substance=a?a.value:"",o(t);const l=a==null?void 0:a.value,d=((x=(n=S[0])==null?void 0:n.drug_substance.find(v=>v.substance===l))==null?void 0:x.ds_manufacturers.map(v=>({label:v.substance_manufacturer,value:v.substance_manufacturer})))||[];le(v=>({...v,[l]:d}))},ne=(s,a)=>{var n;let t={...i};t.drug_product[s].drug_product=a?a.value:"",o(t);const l=a==null?void 0:a.value,d=((n=S[0].drug_product.find(x=>x.drug_product===l))==null?void 0:n.dp_manufacturers.map(x=>({label:x.product_manufacturer,value:x.product_manufacturer})))||[];ie(x=>({...x,[l]:d}))},ce=(s,a)=>{o(t=>{const l=[...t.drug_substance];return l[s]={...l[s],manufacturer:a},{...t,drug_substance:l}})},oe=(s,a)=>{o(t=>{const l=[...t.drug_product];return l[s]={...l[s],manufacturer:a},{...t,drug_product:l}})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:M,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=h.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>g(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>g(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>g(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>g(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>g(6),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"6"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 6"}),e.jsx("div",{className:"stepper-desc",children:"Dossier Review"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",onSubmit:K,id:"kt_stepper_example_basic_form",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Dossier contact"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:i.dossier_contact,name:"dossier_contact",onChange:j})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Object"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:i.object,name:"object",onChange:j})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Product / Substance"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:i.product_name,name:"product_name",onChange:j})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",title:"Choose the Dossier type",style:{color:c.dossier_type?"red":""},children:"Dossier type (*)"}),e.jsx(N,{options:[{label:"Baseline Dossier (M1-M2-M3)",value:"Baseline Dossier (M1-M2-M3)",delai:5},{label:"Baseline Dossier (M1-M5)",value:"Baseline Dossier (M1-M5)",delai:9},{label:"Marketing Authorisation Dossier / BLA (m1-m5)",value:"Marketing Authorisation Dossier / BLA (m1-m5)",delai:9},{label:"Renewal Dossier",value:"Renewal Dossier",delai:9},{label:"Variation Dossier",value:"Variation Dossier",delai:3},{label:"Responses to questions Dossier",value:"Responses to questions Dossier",delai:3},{label:"PSUR/ PSUSA Dossier",value:"PSUR/ PSUSA Dossier"},{label:"Current View (Draft seq)",value:"Current View (Draft seq)",delai:1}],name:"dossier_type",onChange:s=>P(s,"dossier_type"),placeholder:"",isClearable:!0,className:"react-select-container",classNamePrefix:"react-select",value:i.dossier_type,styles:_(c.dossier_type)})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",title:"Enter the number of documents in Publishing dossier",style:{color:c.dossier_count?"red":""},children:"Dossier count (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:i.dossier_count,name:"dossier_count",style:{borderColor:c.dossier_count?"red":""},onChange:j})]})}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,defaultValue:i.remarks,name:"remarks",onChange:j})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsx("div",{className:"d-flex justify-content-end mb-1",children:e.jsx("a",{href:"#",className:"btn btn-secondary btn-sm","data-bs-toggle":"modal","data-bs-target":"#kt_modal_multi_data_update",children:e.jsx("i",{className:"fa-solid fa-plus"})})}),e.jsxs("div",{className:"d-flex flex-column flex-md-row rounded border p-10",children:[e.jsx("ul",{className:"nav nav-tabs nav-line-tabs border-0 flex-row flex-md-column me-5 mb-3 mb-md-0 fs-6",children:e.jsx("div",{className:"position-relative d-inline-block",style:{flex:"1 1 auto",whiteSpace:"nowrap",overflowX:"hidden",overflowY:"auto",height:"calc(100vh - 240px)"},children:e.jsx("div",{className:"d-flex flex-column",children:r.mt.map((s,a)=>e.jsx("li",{className:"nav-item w-md-150px me-0 pe-5",children:e.jsx("a",{className:"nav-link mx-0 my-2"+(a===0?" active":""),"data-bs-toggle":"tab",href:"#kt_vtab_pane_"+a,style:{color:c.submission_type[a]||c.submission_unit[a]||c.submission_mode[a]||c.sequence[a]?"red":""},children:s.country})},a))})})}),e.jsx("div",{className:"tab-content w-100",children:i.mt.map((s,a)=>e.jsxs("div",{className:"tab-pane fade"+(a===0?" active show":""),id:"kt_vtab_pane_"+a,children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:s.uuid,name:"uuid",onChange:t=>u(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Choose the submission type",style:{color:c.submission_type[a]?"red":""},children:"Submission type (*)"}),e.jsx(N,{options:F,name:"submission_type",onChange:t=>k(t,"submission_type",a),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_type,menuPortalTarget:document.body,styles:_(c.submission_type[a])})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Choose the submission mode",style:{color:c.submission_mode[a]?"red":""},children:"Submission mode (*)"}),e.jsx(N,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:t=>k(t,"submission_mode",a),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_mode,menuPortalTarget:document.body,styles:_(c.submission_mode[a])})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tracking",value:s.trackingNumber,onChange:t=>u(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Choose the applicable submission unit",style:{color:c.submission_unit[a]?"red":""},children:"Submission unit (*)"}),e.jsx(N,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:t=>k(t,"submission_unit",a),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_unit,menuPortalTarget:document.body,styles:_(c.submission_unit[a])})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",value:s.applicant,onChange:t=>u(t,a)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",value:s.agencyCode,onChange:t=>u(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inventedName",value:s.inventedName,onChange:t=>u(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_inncode",value:s.inn,onChange:t=>u(t,a)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:c.sequence[a]?"red":""},children:"Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",style:{borderColor:c.sequence[a]?"red":""},value:s.sequence,onChange:t=>u(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",value:s.r_sequence,onChange:t=>u(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",value:s.submission_description,onChange:t=>u(t,a)})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"remarks",value:s.remarks,onChange:t=>u(t,a)})]})})]},a))})]})]}),e.jsx(fe,{metadata:i[0],data:i,handleSelectChange:P,handleDrugSubstanceChange:re,handleManufacturerChange:ce,handleDrugProductChange:ne,handleDpManufacturerChange:oe,manufacturerOptions:ae,dpmanufacturerOptions:te,addDrugSubstanceFields:Q,addDrugProductFields:O,removeDrugProductFields:ee,removeDrugSubstanceFields:se}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(be,{files:i.doc,upload:L,deleletFile:J,removeAll:$})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",placeholder:"",onChange:j})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(D,{"data-enable-time":!0,value:i.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(D,{"data-enable-time":!0,value:i.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Adjusted deadline"}),e.jsx(D,{"data-enable-time":!0,value:i.adjusted_deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},onChange:s=>o("adjusted_deadline",s)})]})}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Comments"}),e.jsx("textarea",{className:"form-control form-control-solid",cols:3,name:"adjustedDeadlineComments",onChange:j})]})})]}),e.jsx("div",{className:"flex-column current","data-kt-stepper-element":"content",children:e.jsxs("div",{className:"accordion accordion-icon-toggle bg-body",id:"kt_accordion_2",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_2_item_1",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Dossier audit"})]}),e.jsx("div",{id:"kt_accordion_2_item_1",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:e.jsx("div",{className:"scroll-y me-n5 pe-5","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto",children:r.audit?r.audit.map((s,a)=>s.message&&s.user.id!==f.auth.user.id?e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user?s.user.name.slice(0,2):""})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:w(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},a):e.jsx("div",{className:"d-flex justify-content-end mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-end",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"me-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:w(s.date).format("MM/DD/YYYY H:s")})}),e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:s.user?s.user.name.slice(0,2):""})})]}),e.jsx("div",{className:"p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end","data-kt-element":"message-text",children:s.message})]})},a)):""})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_3_item_2",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Delivery comment"})]}),e.jsx("div",{id:"kt_accordion_3_item_2",className:"fs-6 collapse p-10 show","data-bs-parent":"#kt_accordion_2",children:r.deliveryComment?r.deliveryComment.map((s,a)=>e.jsx("div",{className:"d-flex justify-content-start mb-10",children:e.jsxs("div",{className:"d-flex flex-column align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"symbol symbol-35px bg-secondary symbol-circle",children:e.jsx("span",{className:"symbol-label bg-info text-inverse-primary fw-bold text-uppercase",children:"EK"})}),e.jsx("div",{className:"ms-3",children:e.jsx("span",{className:"text-muted fs-8 mb-1",children:w(s.date).format("MM/DD/YYYY H:s")})})]}),e.jsx("div",{className:"p-5 rounded bg-light-info text-dark fw-semibold mw-lg-300px text-end","data-kt-element":"message-text",children:s.message})]})},a)):""})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"accordion-header py-3 d-flex collapsed","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_4_item_3",children:[e.jsx("span",{className:"accordion-icon",children:e.jsxs("i",{className:"ki-duotone ki-arrow-right fs-4",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})}),e.jsx("h3",{className:"fs-4 fw-semibold mb-0 ms-4",children:"Correction requests"})]}),e.jsxs("div",{id:"kt_accordion_4_item_3",className:"fs-6 collapse p-10","data-bs-parent":"#kt_accordion_2",children:[e.jsx("div",{className:"mb-10",children:r.correction?r.correction.map((s,a)=>e.jsx("div",{dangerouslySetInnerHTML:E(s)},a)):""}),e.jsxs("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9 mb-10",children:[e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",value:"stg",onChange:V})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Update"})})]})}),e.jsx("div",{className:"col",children:e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6",children:[e.jsx("span",{className:"form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1",children:e.jsx("input",{className:"form-check-input",type:"checkbox",name:"source",value:"ekemia",onChange:V})}),e.jsx("span",{className:"ms-5",children:e.jsx("span",{className:"fs-4 fw-bold text-gray-800 d-block",children:"Correction"})})]})})]}),e.jsx("div",{children:e.jsx(he.CKEditor,{editor:xe,data:"",onReady:s=>{console.log("Editor is ready to use!",s)},onChange:(s,a)=>X(a)})})]})]})]})})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:G,children:"Back"})}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:B,children:"Continue"})]})]})]}),e.jsx("div",{className:"modal fade",id:"kt_modal_multi_data_update","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-xl",children:e.jsxs("div",{className:"modal-content rounded",children:[e.jsx("div",{className:"modal-header justify-content-end border-0 pb-0",children:e.jsx("div",{className:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal",children:e.jsx(me,{iconName:"cross",className:"fs-1"})})}),e.jsxs("div",{className:"modal-body pt-0 pb-15 px-5 px-xl-20",children:[e.jsxs("div",{className:"mb-13 text-center",children:[e.jsx("h1",{className:"mb-3",children:"Multi update"}),e.jsxs("div",{className:"text-muted fw-bold fs-5",children:["Apply update for selected countries"," ","."]})]}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"row mt-10",children:[e.jsx("div",{className:"col-lg-12 mb-10 mb-lg-0",children:e.jsxs("form",{className:"row",children:[e.jsxs("div",{className:"col-6",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:r.mt[0].uuid,onChange:b})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission type"}),e.jsx(N,{options:F,name:"submission_type",onChange:s=>C(s,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:r.mt[0].submission_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission mode"}),e.jsx(N,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:s=>C(s,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:r.mt[0].submission_mode,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r.mt[0].trackingNumber,name:"trackingNumber",onChange:b})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission unit"}),e.jsx(N,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:s=>C(s,"submission_unit"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:r.mt[0].submission_unit,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r.mt[0].applicant,name:"applicant",onChange:b})]})]}),e.jsxs("div",{className:"col-6",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r.mt[0].Product,name:"inventedName",onChange:b})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r.mt[0].inn,name:"inn",onChange:b})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r.mt[0].sequence,name:"sequence",onChange:b})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r.mt[0].r_seqeunce,name:"r_sequence",onChange:b})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r.mt[0].submission_description,name:"submission_description",onChange:b})]})]})]})}),e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-4 d-flex align-items-center mb-5",children:[e.jsx("div",{className:"me-5 position-relative",children:e.jsx("div",{className:"symbol symbol-35px symbol-circle",children:e.jsx(I,{className:"emojiFlag",countryCode:"EU","aria-label":"Europe",svg:!0,style:{width:"25px",height:"25px",borderRadius:"4px"}})})}),e.jsxs("div",{className:"fw-semibold",style:{width:"40%"},children:[e.jsx("a",{href:"#",className:"fs-5 fw-bold text-gray-900 text-hover-primary",children:"All Countries"}),e.jsx("div",{className:"text-gray-400",children:"All"})]}),e.jsx("div",{className:"badge badge-light",children:e.jsx("input",{type:"checkbox",name:"multicountry",value:"all",onChange:Z,checked:y})})]}),(A=r.mt)==null?void 0:A.map((s,a)=>e.jsxs("div",{className:"col-4 d-flex align-items-center mb-5",children:[e.jsx("div",{className:"me-5 position-relative",children:e.jsx("div",{className:"symbol symbol-35px symbol-circle",children:e.jsx(I,{className:"emojiFlag",countryCode:s.code,"aria-label":s.country,svg:!0,style:{width:"25px",height:"25px",borderRadius:"4px"}})})}),e.jsxs("div",{className:"fw-semibold",style:{width:"40%"},children:[e.jsx("a",{href:"#",className:"fs-5 fw-bold text-gray-900 text-hover-primary",children:s.country}),e.jsx("div",{className:"text-gray-400",children:s.code})]}),e.jsx("div",{className:"badge badge-light ",children:e.jsx("input",{type:"checkbox",id:s.id,name:s.country,value:s.country,onChange:W,checked:!!Y.includes(s.id)})})]},a))]})})]})}),e.jsxs("div",{className:"d-flex flex-center flex-row-fluid pt-12",children:[e.jsx("button",{type:"reset",className:"btn btn-light me-3","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:z,children:"Update"})]})]})]})})})]})})};Ne.layout=f=>e.jsx(ue,{children:f,auth:f.props.auth});export{Ne as default};
