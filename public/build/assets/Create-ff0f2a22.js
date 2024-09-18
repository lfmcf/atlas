import{j as e,r as C,W as J,b as G}from"./app-6194dc10.js";import{n as y,z as W,K as Q,R as Y,A as ee}from"./AuthenticatedLayout-d29d0d35.js";import{S as se}from"./MenuComponent-eb0305ae.js";import"./MetronicSplashScreen-fcb8b28c.js";import{F as H}from"./index-36d46753.js";/* empty css                  */import{D as ae}from"./Dropzone-7d0e86b2.js";import{S as le}from"./StatusComponent-78a0d730.js";import{G as ne}from"./GeneralInformation-3a4de73a.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const te=({metadata:v,data:r,setData:c})=>{const q=(d,n,p)=>{let h={...r};h.pt[p][n]=d,c(h)},b=(d,n,p)=>{let h={...r};h.pt[d].drug_substance[n]=p,c(h)},u=(d,n,p)=>{let h={...r};h.pt[d].drug_product[n]=p,c(h)},i=(d,n,p)=>{let h={...r};h.pt[d].drug_substance[n].manufacturer=p,c(h)},g=(d,n,p)=>{let h={...r};h.pt[d].drug_product[n].manufacturer=p,c(h)},F=d=>{let n={...r};n.pt[d].drug_substance.push({drug_substance:"",manufacturer:""}),c(n)},E=(d,n)=>{let p={...r};p.pt[d].drug_substance.splice(n,1),c(p)},z=d=>{let n={...r};n.pt[d].drug_product.push({drug_product:"",manufacturer:""}),c(n)};console.log(r.pt);const U=(d,n)=>{let p={...r};p.pt[d].drug_product.splice(n,1),c(p)};return e.jsxs("div",{className:"d-flex flex-column flex-md-row rounded border p-10",children:[e.jsx("ul",{className:"nav nav-tabs nav-line-tabs border-0 flex-row flex-md-column me-5 mb-3 mb-md-0 fs-6",children:e.jsx("div",{className:"position-relative d-inline-block",style:{flex:"1 1 auto",whiteSpace:"nowrap",overflowX:"hidden",overflowY:"auto",height:"calc(100vh - 240px)"},children:e.jsx("div",{className:"d-flex flex-column",children:v.map((d,n)=>e.jsx("li",{className:"nav-item w-md-150px me-0 pe-5",children:e.jsx("a",{className:"nav-link mx-0 my-2"+(n===0?" active":""),"data-bs-toggle":"tab",href:"#tab_pane_"+n,children:d.country})},n))})})}),e.jsx("div",{className:"tab-content w-100",children:v.map((d,n)=>{var p,h,_,P,D;return e.jsxs("div",{className:"tab-pane fade"+(n===0?" active show":""),id:"tab_pane_"+n,children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Indication"}),e.jsx(y,{options:((d==null?void 0:d.indications)||[]).map(m=>({label:m.indication,value:m.indication})),name:"indication",onChange:m=>q(m,"indication",n),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:(p=r.pt[n])==null?void 0:p.indication,menuPortalTarget:document.body,styles:{menuPortal:m=>({...m,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Dosage form"}),e.jsx(y,{options:((d==null?void 0:d.dosage_form)||[]).map(m=>({label:m.form,value:m.form})),name:"dosage_form",onChange:m=>q(m,"dosage_form",n),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:(h=r.pt[n])==null?void 0:h.dosage_form,menuPortalTarget:document.body,styles:{menuPortal:m=>({...m,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Excipient"}),e.jsx(y,{options:((d==null?void 0:d.excipients)||[]).map(m=>({label:m.excipient,value:m.excipient})),name:"excipient",onChange:m=>q(m,"excipient",n),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,value:(_=r.pt[n])==null?void 0:_.excipient,menuPortalTarget:document.body,styles:{menuPortal:m=>({...m,zIndex:9999})}})]})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Drug substances"}),(P=r.pt[n])==null?void 0:P.drug_substance.map((m,j)=>{var S,N,k;return e.jsxs("div",{children:[j===0?e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx("button",{type:"button",onClick:()=>F(n),children:"Add"})}):e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx("button",{type:"button",onClick:()=>E(n,j),children:"Remove"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance"}),e.jsx(y,{options:((S=v[n])==null?void 0:S.drug_substance.map(o=>({label:o.substance,value:o.substance})))||[],name:"drug_substance",onChange:o=>b(n,j,o),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:o=>({...o,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-8 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug substance manufacturer"}),e.jsx(y,{options:((k=(N=v[n].drug_substance[j])==null?void 0:N.ds_manufacturers)==null?void 0:k.map(o=>({label:o.substance_manufacturer,value:o.substance_manufacturer})))||[],name:"manufacturer",onChange:o=>i(n,j,o),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,menuPortalTarget:document.body,styles:{menuPortal:o=>({...o,zIndex:9999})}})]})]})]},j)})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Drug products"}),(D=r.pt[n])==null?void 0:D.drug_product.map((m,j)=>{var S,N,k;return e.jsxs("div",{children:[j===0?e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx("button",{type:"button",onClick:()=>z(n),children:"Add"})}):e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx("button",{type:"button",onClick:()=>U(n,j),children:"Remove"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product"}),e.jsx(y,{options:((S=v[n])==null?void 0:S.drug_product.map(o=>({label:o.product,value:o.product})))||[],name:"drug_product",onChange:o=>u(n,j,o),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,menuPortalTarget:document.body,styles:{menuPortal:o=>({...o,zIndex:9999})}})]}),e.jsxs("div",{className:"col-md-8 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Drug product manufacturer"}),e.jsx(y,{options:((k=(N=v[n].drug_product[j])==null?void 0:N.dp_manufacturers)==null?void 0:k.map(o=>({label:o.product_manufacturer,value:o.product_manufacturer})))||[],name:"manufacturer",onChange:o=>g(n,j,o),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,isMulti:!0,menuPortalTarget:document.body,styles:{menuPortal:o=>({...o,zIndex:9999})}})]})]})]},j)})]})]},n)})})]})},re=v=>{const{metadata:r,folder:c}=v;var q=new URLSearchParams(window.location.search);const[b,u]=C.useState({dossier_type:"",dossier_count:"",submission_type:new Array,submission_mode:new Array,submission_unit:new Array,sequence:new Array}),{data:i,setData:g,post:F,processing:E,errors:z,clearErrors:U,reset:d}=J({id:c?c._id:"",form:c?c.form:"Publishing",region:c?c.region:q.get("region"),procedure:c?c.procedure:q.get("procedure"),productName:c?c.product_name:q.get("product"),dossier_contact:c?c.dossier_contact:v.auth.user.trigramme,object:c?c.object:"",country:c?c.country:"",dossier_type:c?c.dossier_type:"",dossier_count:c?c.dossier_count:"",remarks:c?c.remarks:"",mt:c?c.mt:[],pt:r.map(()=>({indication:"",excipient:[],dosage_form:"",drug_substance:[{drug_substance:"",manufacturer:""}],drug_product:[{drug_product:"",manufacturer:""}]})),doc:c&&c.doc!==null?c.doc:[],docremarks:c?c.docremarks:"",deadline:new Date,request_date:new Date,status:c?c.status:"",created_by:v.auth.user.id});if(!r)return e.jsxs("div",{children:[e.jsx("h1",{children:"Error"}),e.jsx("p",{children:"Error while fetching metadata"})]});const[n,p]=C.useState({uuid:r[0].uuid,submission_type:"",submission_mode:"",trackingNumber:r[0].tracking_numbers[0].numbers,submission_unit:"",applicant:r[0].applicant,agencyCode:r[0].agencyCode,inventedName:r[0].invented_name,mtd:r[0].mtd,inn:r[0].inn,sequence:r[0].sequence,r_sequence:r[0].r_sequence,submission_description:"",remarks:""}),h=C.useRef(null),_=C.useRef(null);C.useEffect(()=>{_.current=se.createInsance(h.current)},[]);const P=()=>{if(!_.current)return;if(_.current.getCurrentStepIndex()===1&&(!i.dossier_type||!i.dossier_count)){i.dossier_type||u(a=>({...a,dossier_type:"this field is required"})),i.dossier_count||u(a=>({...a,dossier_count:"this field is required"}));return}let s=!1;if(_.current.getCurrentStepIndex()===2)for(let a=0;a<i.mt.length;a++)i.mt[a].submission_type||(u(t=>{const l={...t};return a>=0&&a<l.submission_type.length?l.submission_type[a]="this field is required":l.submission_type.push("this field is required"),l}),s=!0),i.mt[a].submission_mode||(u(t=>{const l={...t};return a>=0&&a<l.submission_mode.length?l.submission_mode[a]="this field is required":l.submission_mode.push("this field is required"),l}),s=!0),i.mt[a].submission_unit||(u(t=>{const l={...t};return a>=0&&a<l.submission_unit.length?l.submission_unit[a]="this field is required":l.submission_unit.push("this field is required"),l}),s=!0),i.mt[a].sequence||(u(t=>{const l={...t};return a>=0&&a<l.sequence.length?l.sequence[a]="this field is required":l.sequence.push("this field is required"),l}),s=!0);s||_.current.goNext()},D=()=>{_.current&&_.current.goPrev()},m=(s,a)=>{a=="dossier_type"&&u(t=>({...t,dossier_type:""})),g(a,s)},j=s=>{s.target.name=="dossier_count"&&u(a=>({...a,dossier_count:""})),g(s.target.name,s.target.value)},S=s=>{let a={...i};a.doc.push(...s),g(a)},N=(s,a)=>{if(s.target.name=="sequence"){let l={...b};l.sequence[a]="",u(l)}let t={...i};t.mt[a][s.target.name]=s.target.value,g(t)},k=(s,a,t)=>{if(a=="submission_type"){let x={...b};x.submission_type[t]="",u(x)}if(a=="submission_unit"){let x={...b};x.submission_unit[t]="",u(x)}if(a=="submission_mode"){let x={...b};x.submission_mode[t]="",u(x)}let l={...i};l.mt[t][a]=s,g(l)},o=(s,a)=>{const t={...n};t[a]=s,p(t)},w=s=>{const a={...n};a[s.target.name]=s.target.value,p(a)},[I,M]=C.useState([]),[R,K]=C.useState(!1),[L,ie]=C.useState(r),X=s=>{const{id:a,checked:t}=s.target;M([...I,parseInt(a)]),t||M(I.filter(l=>l!=a))},B=s=>{K(!R),M(L.map(a=>a.id)),R&&M([])},O=()=>{let s={...i},a={...b};s.mt.map((t,l)=>{I.includes(t.id)&&(n.submission_type&&(a.submission_type[l]=""),n.submission_mode&&(a.submission_mode[l]=""),n.submission_unit&&(a.submission_unit[l]=""),n.sequence&&(a.sequence[l]=""),s.mt[l].uuid=n.uuid,s.mt[l].submission_type=n.submission_type,s.mt[l].submission_mode=n.submission_mode,s.mt[l].trackingNumber=n.trackingNumber,s.mt[l].submission_unit=n.submission_unit,s.mt[l].applicant=n.applicant,s.mt[l].inventedName=n.inventedName,s.mt[l].mtd=n.mtd,s.mt[l].inn=n.inn,s.mt[l].sequence=n.sequence,s.mt[l].r_sequence=n.r_sequence,s.mt[l].submission_description=n.submission_description,s.mt[l].remarks=n.remarks)}),u(a),g(s)};C.useEffect(()=>{let s={...i};r.map((a,t)=>{s.mt.push({id:a.id,country:a.country,uuid:a.uuid,submission_type:"",submission_mode:"",trackingNumber:a.tracking_numbers[0].numbers,submission_unit:"",applicant:a.applicant,agencyCode:a.agencyCode,inventedName:a.invented_name,inn:a.inn,sequence:"",r_sequence:"",submission_description:"",remarks:""})}),g(s)},[]),C.useEffect(()=>{let s=new Date,a=s.getHours(),t=i.dossier_type?i.dossier_type.delai:0,l=new Date,x=1;for(a>12&&(t=t+1);x<t;)l=new Date(s.setDate(s.getDate()+1)),l.getDay()!=0&&l.getDay()!=6&&x++;g("deadline",new Date(l))},[i.dossier_type]);const V=(s,a)=>{s.preventDefault(),F(route("publishing_initiate",{type:a}))},Z=()=>{let s={...i},a=[];s.doc.map(t=>{t.link&&a.push(t.name)}),a.length>0&&G.post("delete-file-pub",{docs:a,id:i.id}),s.doc=[],g(s)},$=s=>{if(s.link){let l=[];l.push(s.name),G.post("delete-file-pub",{docs:l,id:i.id})}var a={...i};let t=a.doc.map(l=>l.name).indexOf(s.name);a.doc.splice(t,1),g(a)},A=s=>({control:a=>({...a,...s&&{borderColor:"red !important"}})}),T=s=>{var t;if((!i.dossier_type||!i.dossier_count)&&(s==2||s==3||s==4||s==5)){i.dossier_type||u(l=>({...l,dossier_type:"this field is required"})),i.dossier_count||u(l=>({...l,dossier_count:"this field is required"}));return}let a=!1;for(let l=0;l<i.mt.length;l++)(!i.mt[l].submission_type||!i.mt[l].submission_mode||!i.mt[l].submission_unit||!i.mt[l].sequence)&&(s==3||s==4||s==5)&&(i.mt[l].submission_type||u(x=>{const f={...x};return l>=0&&l<f.submission_type.length?f.submission_type[l]="this field is required":f.submission_type.push("this field is required"),f}),i.mt[l].submission_mode||u(x=>{const f={...x};return l>=0&&l<f.submission_type.length?f.submission_mode[l]="this field is required":f.submission_mode.push("this field is required"),f}),i.mt[l].submission_unit||u(x=>{const f={...x};return l>=0&&l<f.submission_type.length?f.submission_unit[l]="this field is required":f.submission_unit.push("this field is required"),f}),i.mt[l].sequence||u(x=>{const f={...x};return l>=0&&l<f.submission_type.length?f.sequence[l]="this field is required":f.sequence.push("this field is required"),f}),a=!0);a||(t=_.current)==null||t.goto(s)};return e.jsxs(e.Fragment,{children:[c?e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(le,{status:i.status})]}):"",e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:h,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsxs("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=_.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>T(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>T(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>T(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>T(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",onSubmit:V,id:"kt_stepper_example_basic_form",children:[e.jsxs("div",{className:"mb-5",children:[e.jsx(ne,{data:i,myErrors:b,handleChange:j,handleSelectChange:m,selectStyles:A}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsx("div",{className:"d-flex justify-content-end mb-1",children:e.jsx("a",{href:"#",className:"btn btn-secondary btn-sm","data-bs-toggle":"modal","data-bs-target":"#kt_modal_multi_data_update",children:e.jsx("i",{className:"fa-solid fa-plus"})})}),e.jsxs("div",{className:"d-flex flex-column flex-md-row rounded border p-10",children:[e.jsx("ul",{className:"nav nav-tabs nav-line-tabs border-0 flex-row flex-md-column me-5 mb-3 mb-md-0 fs-6",children:e.jsx("div",{className:"position-relative d-inline-block",style:{flex:"1 1 auto",whiteSpace:"nowrap",overflowX:"hidden",overflowY:"auto",height:"calc(100vh - 240px)"},children:e.jsx("div",{className:"d-flex flex-column",children:r.map((s,a)=>e.jsx("li",{className:"nav-item w-md-150px me-0 pe-5",children:e.jsx("a",{className:"nav-link mx-0 my-2"+(a===0?" active":""),"data-bs-toggle":"tab",href:"#kt_vtab_pane_"+a,style:{color:b.submission_type[a]||b.submission_unit[a]||b.submission_mode[a]||b.sequence[a]?"red":""},children:s.country})},a))})})}),e.jsx("div",{className:"tab-content w-100",children:i.mt.map((s,a)=>e.jsxs("div",{className:"tab-pane fade"+(a===0?" active show":""),id:"kt_vtab_pane_"+a,children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:s.uuid,name:"uuid",onChange:t=>N(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Choose the submission type",style:{color:b.submission_type[a]?"red":""},children:"Submission type (*)"}),e.jsx(y,{options:W,name:"submission_type",onChange:t=>k(t,"submission_type",a),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_type,menuPortalTarget:document.body,styles:A(b.submission_type[a])})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Choose the submission mode",style:{color:b.submission_mode[a]?"red":""},children:"Submission mode (*)"}),e.jsx(y,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:t=>k(t,"submission_mode",a),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_mode,menuPortalTarget:document.body,styles:A(b.submission_mode[a])})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"tracking",value:s.trackingNumber,onChange:t=>N(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Choose the applicable submission unit",style:{color:b.submission_unit[a]?"red":""},children:"Submission unit (*)"}),e.jsx(y,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:t=>k(t,"submission_unit",a),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:s.submission_unit,menuPortalTarget:document.body,styles:A(b.submission_unit[a])})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",value:s.applicant,onChange:t=>N(t,a)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",value:s.agencyCode,onChange:t=>N(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inventedName",value:s.inventedName,onChange:t=>N(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",value:s.inn,onChange:t=>N(t,a)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:b.sequence[a]?"red":""},children:"Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",value:s.sequence,style:{borderColor:b.sequence[a]?"red":""},onChange:t=>N(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",value:s.r_sequence,onChange:t=>N(t,a)})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",value:s.submission_description,onChange:t=>N(t,a)})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"remarks",value:s.remarks,onChange:t=>N(t,a)})]})})]},a))})]})]}),e.jsx("div",{className:"flex-column","data-kt-stepper-element":"content",children:e.jsx(te,{metadata:r,data:i,setData:g})}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(ae,{files:i.doc,upload:S,deleletFile:$,removeAll:Z})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",placeholder:"",onChange:j})]})]}),e.jsx("div",{className:"flex-column","data-kt-stepper-element":"content",children:e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(H,{"data-enable-time":!0,value:i.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(H,{"data-enable-time":!0,value:i.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]})})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:D,children:"Back"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"btn btn-primary m-3","data-kt-stepper-action":"submit",onClick:s=>V(s,"save"),children:e.jsx("span",{className:"indicator-label",children:"Save"})}),e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",onClick:s=>V(s,"submit"),children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:P,children:"Continue"})]})]})]}),e.jsx("div",{className:"modal fade",id:"kt_modal_multi_data_update","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-xl",children:e.jsxs("div",{className:"modal-content rounded",children:[e.jsx("div",{className:"modal-header justify-content-end border-0 pb-0",children:e.jsx("div",{className:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal",children:e.jsx(Q,{iconName:"cross",className:"fs-1"})})}),e.jsxs("div",{className:"modal-body pt-0 pb-15 px-5 px-xl-20",children:[e.jsxs("div",{className:"mb-13 text-center",children:[e.jsx("h1",{className:"mb-3",children:"Multi update"}),e.jsxs("div",{className:"text-muted fw-bold fs-5",children:["Apply update for selected countries"," ","."]})]}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"row mt-10",children:[e.jsx("div",{className:"col-lg-12 mb-10 mb-lg-0",children:e.jsxs("form",{className:"row",children:[e.jsxs("div",{className:"col-6",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:r[0].uuid,onChange:w})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission type"}),e.jsx(y,{options:W,name:"submission_type",onChange:s=>o(s,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:r[0].submission_type,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission mode"}),e.jsx(y,{options:[{label:"Single",value:"Single"},{label:"Grouping",value:"Grouping"},{label:"Worksharing",value:"Worksharing"}],name:"submission_mode",onChange:s=>o(s,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:r[0].submission_mode,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].tracking_numbers[0].numbers,name:"trackingNumber",onChange:w})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission unit"}),e.jsx(y,{options:[{label:"initial",value:"initial"},{label:"validation-response",value:"validation-response"},{label:"response",value:"response"},{label:"additional-info",value:"additional-info"},{label:"closing",value:"closing"},{label:"consolidating",value:"consolidating"},{label:"corrigendum",value:"corrigendum"},{label:"reformat",value:"reformat"}],name:"submission_unit",onChange:s=>o(s,"submission_unit"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:r[0].submission_unit,menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({width:"100%"})}})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].applicant,name:"applicant",onChange:w})]})]}),e.jsxs("div",{className:"col-6",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].invented_name,name:"inventedName",onChange:w})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].inn,name:"inn",onChange:w})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].sequence,name:"sequence",onChange:w})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].r_seqeunce,name:"r_sequence",onChange:w})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",defaultValue:r[0].submission_description,name:"submission_description",onChange:w})]})]})]})}),e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-4 d-flex align-items-center mb-5",children:[e.jsx("div",{className:"me-5 position-relative",children:e.jsx("div",{className:"symbol symbol-35px symbol-circle",children:e.jsx(Y,{className:"emojiFlag",countryCode:"EU","aria-label":"Europe",svg:!0,style:{width:"25px",height:"25px",borderRadius:"4px"}})})}),e.jsxs("div",{className:"fw-semibold",style:{width:"40%"},children:[e.jsx("a",{href:"#",className:"fs-5 fw-bold text-gray-900 text-hover-primary",children:"All Countries"}),e.jsx("div",{className:"text-gray-400",children:"All"})]}),e.jsx("div",{className:"badge badge-light",children:e.jsx("input",{type:"checkbox",name:"multicountry",value:"all",onChange:B,checked:R})})]}),r==null?void 0:r.map((s,a)=>e.jsxs("div",{className:"col-4 d-flex align-items-center mb-5",children:[e.jsx("div",{className:"me-5 position-relative",children:e.jsx("div",{className:"symbol symbol-35px symbol-circle",children:e.jsx(Y,{className:"emojiFlag",countryCode:s.code,"aria-label":s.country,svg:!0,style:{width:"25px",height:"25px",borderRadius:"4px"}})})}),e.jsxs("div",{className:"fw-semibold",style:{width:"40%"},children:[e.jsx("a",{href:"#",className:"fs-5 fw-bold text-gray-900 text-hover-primary",children:s.country}),e.jsx("div",{className:"text-gray-400",children:s.code})]}),e.jsx("div",{className:"badge badge-light ",children:e.jsx("input",{type:"checkbox",id:s.id,name:s.country,value:s.country,onChange:X,checked:!!I.includes(s.id)})})]},a))]})})]})}),e.jsxs("div",{className:"d-flex flex-center flex-row-fluid pt-12",children:[e.jsx("button",{type:"reset",className:"btn btn-light me-3","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:O,children:"Update"})]})]})]})})})]})]})};re.layout=v=>e.jsx(ee,{children:v,auth:v.props.auth});export{re as default};
