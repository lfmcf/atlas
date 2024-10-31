import{r as m,W as Q,j as e,b as w}from"./app-8c99fabd.js";import{n as y,A as X,S as O}from"./AuthenticatedLayout-43490961.js";import{S as ee}from"./MenuComponent-0852b483.js";import{F as S}from"./index-fc89f0b0.js";/* empty css                  */import{D as se}from"./Dropzone-b20948e4.js";import{S as ae}from"./StatusComponent-c84748f5.js";import{G as te}from"./GeneralInformation-04806afb.js";import{P as re}from"./ProductMetaData-f264cb44.js";import{C as ne}from"./ConfirmationMessage-398c9cc0.js";import{w as ie}from"./sweetalert2-react-content.es-123a8fe8.js";import"./MetronicSplashScreen-bf8f425d.js";import"./hoist-non-react-statics.cjs-1d8f9095.js";const le=ie(O),oe=h=>{var v=new URLSearchParams(window.location.search);const k=m.useRef(null),p=m.useRef(null),[f,l]=m.useState({dossier_type:"",dossier_count:"",submission_type:"",submission_mode:"",sequence:""}),[q,D]=m.useState(!1),[M,ce]=m.useState(""),{folder:a,metapro:de}=h;m.useState();const{metadata:u}=h,{data:t,setData:o,post:C,processing:ue,errors:me,clearErrors:pe,reset:he}=Q({id:a?a._id:"",form:a?a.form:"Publishing",region:a?a.region:v.get("region"),procedure:a?a.procedure:v.get("procedure"),productName:a?a.product_name:v.get("product"),dossier_contact:a?a.dossier_contact:h.auth.user.trigramme,object:a?a.object:"",country:{value:u.country,code:u.code},dossier_type:a?a.dossier_type:"",dossier_count:a?a.dossier_count:"",remarks:a?a.remarks:"",tracking:a?a.tracking:"",trackingExtra:a?a.trackingExtra:"",applicant:u.applicant,agency_code:u.agencyCode,atc:a?a.atc:"",submission_type:a?a.submission_type:"",submission_mode:a?a.submission_mode:"",invented_name:a?a.invented_name:"",inn:u.inn,sequence:a?a.sequence:"",r_sequence:a?a.r_sequence:"",uuid:a?a.uuid:u.uuid,submission_description:a?a.submission_description:"",mtremarks:a?a.mtremarks:"",indication:a?a.indication:"",drug_substance:a?a.drug_substance:[{drug_substance:"",manufacturer:""}],drug_product:a?a.drug_product:[{drug_product:"",manufacturer:""}],dosage_form:a?a.dosage_form:"",excipient:a?a.excipient:"",doc:a&&a.doc!==null?a.doc:[],docremarks:a?a.docremarks:"",request_date:new Date,deadline:new Date,status:a?a.status:"",created_by:h.auth.user.id});m.useEffect(()=>{p.current=ee.createInsance(k.current)},[]),m.useEffect(()=>{let s=new Date,r=s.getHours(),n=t.dossier_type?t.dossier_type.delai:"",i=new Date,b=1;for(r<12?n=n:n=n+1;b<n;)i=new Date(s.setDate(s.getDate()+1)),i.getDay()!=0&&i.getDay()!=6&&b++;o("deadline",new Date(i))},[t.dossier_type]);const A=()=>{if(p.current){if(p.current.getCurrentStepIndex()===1&&(!t.dossier_type||!t.dossier_count)){t.dossier_type||l(s=>({...s,dossier_type:"this field is required"})),t.dossier_count||l(s=>({...s,dossier_count:"this field is required"}));return}if(p.current.getCurrentStepIndex()===2&&(!t.submission_type||!t.submission_mode||!t.sequence)){t.submission_type||l(s=>({...s,submission_type:"this field is required"})),t.submission_mode||l(s=>({...s,submission_mode:"this field is required"})),t.sequence||l(s=>({...s,sequence:"this field is required"}));return}p.current.goNext()}},P=()=>{p.current&&p.current.goPrev()},c=s=>{s.target.name=="dossier_count"&&l(r=>({...r,dossier_count:""})),s.target.name=="sequence"&&l(r=>({...r,sequence:""})),o(s.target.name,s.target.value)},g=(s,r)=>{r=="dossier_type"&&l(n=>({...n,dossier_type:""})),r=="dossier_count"&&l(n=>({...n,dossier_count:""})),r=="submission_type"&&l(n=>({...n,submission_type:""})),r=="submission_mode"&&l(n=>({...n,submission_mode:""})),o(r,s)},R=s=>{let r={...t};r.doc.push(...s),o(r)},j=(s,r)=>{s.preventDefault(),le.fire({title:r=="save"?'Click on "Yes" to save your request or click on "No, return" to return to the form.':'Click on "Yes" to submit your request or click on "No, return" to return to the form.',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, proceed!",cancelButtonText:"No, return"}).then(n=>{n.isConfirmed&&C(route("publishing_gcc_store",{type:r}))})},I=()=>{D(!1)},V=s=>{C(route("publishing_gcc_store",{type:s}))},F=()=>{let s={...t},r=[];s.doc.map(n=>{n.link&&r.push(n.name)}),r.length>0&&w.post("delete-file-pub",{docs:r,id:t.id}),s.doc=[],o(s)},E=s=>{if(s.link){let i=[];i.push(s.name),w.post("delete-file-pub",{docs:i,id:t.id})}var r={...t};let n=r.doc.map(i=>i.name).indexOf(s.name);r.doc.splice(n,1),o(r)},_=s=>({control:r=>({...r,...s&&{borderColor:"red !important"}})}),N=s=>{var r;if((!t.dossier_type||!t.dossier_count)&&(s==2||s==3||s==4||s==5)){t.dossier_type||l(n=>({...n,dossier_type:"this field is required"})),t.dossier_count||l(n=>({...n,dossier_count:"this field is required"}));return}if((!t.submission_type||!t.submission_mode||!t.sequence)&&(s==3||s==4||s==5)){t.submission_type||l(n=>({...n,submission_type:"this field is required"})),t.submission_mode||l(n=>({...n,submission_mode:"this field is required"})),t.sequence||l(n=>({...n,sequence:"this field is required"}));return}(r=p.current)==null||r.goto(s)},T=(s,r)=>{r.action=="clear"?o("tracking",""):o("tracking",s.value)},z=()=>{o("drug_substance",[...t.drug_substance,{drug_substance:"",manufacturer:""}])},G=()=>{o("drug_product",[...t.drug_product,{drug_product:"",manufacturer:""}])},U=s=>{let r={...t};r.drug_product.splice(s,1),o(r)},Y=s=>{let r={...t};r.drug_substance.splice(s,1),o(r)};m.useState(u.drug_substance.map(s=>({label:s.substance,value:s.substance}))),m.useState(u.drug_product.map(s=>({label:s.drug_product,value:s.drug_product})));const[B,H]=m.useState({}),[W,L]=m.useState({}),Z=(s,r)=>{var x;console.log(r);let n={...t};n.drug_substance[s].drug_substance=r?r.value:"",o(n);const i=r==null?void 0:r.value,b=((x=u.drug_substance.find(d=>d.substance===i))==null?void 0:x.ds_manufacturers.map(d=>({label:d.substance_manufacturer,value:d.substance_manufacturer})))||[];H(d=>({...d,[i]:b}))},$=(s,r)=>{var x;let n={...t};n.drug_product[s].drug_product=r?r.value:"",o(n);const i=r==null?void 0:r.value,b=((x=u.drug_product.find(d=>d.drug_product===i))==null?void 0:x.dp_manufacturers.map(d=>({label:d.product_manufacturer,value:d.product_manufacturer})))||[];L(d=>({...d,[i]:b}))},J=(s,r)=>{o(n=>{const i=[...n.drug_substance];return i[s]={...i[s],manufacturer:r},{...n,drug_substance:i}})},K=(s,r)=>{o(n=>{const i=[...n.drug_product];return i[s]={...i[s],manufacturer:r},{...n,drug_product:i}})};return e.jsxs(e.Fragment,{children:[a?e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("a",{href:"#",onClick:()=>window.history.back(),className:"btn btn-sm fw-bold btn-secondary mb-2",children:e.jsx("i",{className:"ki-duotone ki-black-left fs-3"})}),e.jsx(ae,{status:t.status})]}):"",e.jsxs("div",{className:"stepper stepper-pills",id:"kt_stepper_example_basic",ref:k,children:[e.jsxs("div",{className:"stepper-nav flex-center flex-wrap mb-10",children:[e.jsx("div",{className:"stepper-item mx-8 my-4 current","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>{var s;return(s=p.current)==null?void 0:s.goto(1)},style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 1"}),e.jsx("div",{className:"stepper-desc",children:"General information"})]}),e.jsx("div",{className:"stepper-line h-40px"})]})}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>N(2),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 2"}),e.jsx("div",{className:"stepper-desc",children:"Submission metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>N(3),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 3"}),e.jsx("div",{className:"stepper-desc",children:"Product metadata"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>N(4),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 4"}),e.jsx("div",{className:"stepper-desc",children:"Documents"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item mx-8 my-4","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper d-flex align-items-center",onClick:()=>N(5),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Step 5"}),e.jsx("div",{className:"stepper-desc",children:"Delivery details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]})]}),e.jsxs("form",{className:"form",id:"kt_stepper_example_basic_form",onSubmit:j,children:[e.jsxs("div",{className:"mb-5",children:[e.jsx(te,{data:t,myErrors:f,handleChange:c,handleSelectChange:g,selectStyles:_}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Procedure Tracking N°"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(y,{options:u.tracking_numbers.map(s=>({label:s.numbers,value:s.numbers})),name:"tracking",onChange:(s,r)=>T(s,r),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,defaultValue:t.tracking?{value:t.tracking,label:t.tracking}:"",menuPortalTarget:document.body,styles:{menuPortal:s=>({...s,zIndex:9999}),container:s=>({...s,width:"50%"})}}),e.jsx("input",{type:"text",className:"form-control form-control-solid",value:t.tracking,name:"tracking",style:{width:"50%"},onChange:c})]})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Applicant"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"applicant",defaultValue:t.applicant,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Agency code"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"agency_code",defaultValue:t.agency_code,onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"ATC"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"atc",defaultValue:t.atc,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the submission type",style:{color:f.submission_type?"red":""},children:"Submission type (*)"}),e.jsx(y,{options:[{label:"Active submission",value:"Active submission"},{label:"Extension submission",value:"Extension submission"},{label:"New Marketing Authorization Application - Generics",value:"New Marketing Authorization Application - Generics"},{label:"New Marketing Authorization Application - New Chemical Entity",value:"New Marketing Authorization Application - New Chemical Entity"},{label:"New Marketing Authorization Application - Biological Products",value:"New Marketing Authorization Application - Biological Products"},{label:"New Marketing Authorization Application - Radiopharmaceuticals",value:"New Marketing Authorization Application - Radiopharmaceuticals"},{label:"None (in the case of reformatting the application)",value:"None (in the case of reformatting the application)"},{label:"Plasma Master File",value:"Plasma Master File"},{label:"Periodic Safety Update Report",value:"Periodic Safety Update Report"},{label:"PSUR single assessment procedure",value:"PSUR single assessment procedure"},{label:"Renewal (Yearly or 5-Yearly)",value:"Renewal (Yearly or 5-Yearly)"},{label:"Risk Management Plan",value:"Risk Management Plan"},{label:"Transfer of Marketing Authorization",value:"Transfer of Marketing Authorization"},{label:"Urgent Safety Restriction",value:"Urgent Safety Restriction"},{label:"Variation Type I",value:"Variation Type I"},{label:"Variation Type II",value:"Variation Type II"},{label:"Withdrawal during assessment or withdrawal of Marketing Authorization",value:"Withdrawal during assessment or withdrawal of Marketing Authorization"}],name:"submission_type",onChange:s=>g(s,"submission_type"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.submission_type,menuPortalTarget:document.body,styles:_(f.submission_type)})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Choose the applicable submission unit",style:{color:f.submission_mode?"red":""},children:"Submission unit (*)"}),e.jsx(y,{options:[{label:"Initial submission to start any regulatory activity",value:"Initial submission to start any regulatory activity"},{label:"Response to any kind of question, validation issues out-standing information requested by the agency",value:"Response to any kind of question, validation issues out-standing information requested by the agency"},{label:"Othe additional information (should only be used if response is not suitable)",value:"Othe additional information (should only be used if response is not suitable)"},{label:"Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)",value:"Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)"},{label:"Correction of the published annexes in the GCC procedure (usually shortly after approval)",value:"Correction of the published annexes in the GCC procedure (usually shortly after approval)"},{label:"Reformatting of an existing submission application from any format to Ectd",value:"Reformatting of an existing submission application from any format to Ectd"}],name:"submission_mode",onChange:s=>g(s,"submission_mode"),className:"react-select-container",classNamePrefix:"react-select",placeholder:"",isClearable:!0,value:t.submission_mode,menuPortalTarget:document.body,styles:_(f.submission_mode)})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Invented name"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"invented_name",defaultValue:t.invented_name,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"INN"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"inn",defaultValue:t.inn,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",title:"Enter the sequence number",style:{color:f.sequence?"red":""},children:"Sequence (*)"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"sequence",defaultValue:t.sequence,style:{borderColor:f.sequence?"red":""},onChange:c})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Related Sequence"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"r_sequence",defaultValue:t.r_sequence,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"UUID"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"uuid",defaultValue:t.uuid,onChange:c})]}),e.jsxs("div",{className:"col-md-4 col-sm-12",children:[e.jsx("label",{className:"form-label",children:"Submission description"}),e.jsx("input",{type:"text",className:"form-control form-control-solid",name:"submission_description",defaultValue:t.submission_description,onChange:c})]})]}),e.jsx("div",{className:"row mb-10",children:e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{rows:3,className:"form-control form-control-solid",defaultValue:t.mtremarks,name:"mtremarks",onChange:c})]})})]}),e.jsx(re,{metadata:u,data:t,handleSelectChange:g,handleDrugSubstanceChange:Z,handleManufacturerChange:J,handleDrugProductChange:$,handleDpManufacturerChange:K,manufacturerOptions:B,dpmanufacturerOptions:W,addDrugSubstanceFields:z,addDrugProductFields:G,removeDrugProductFields:U,removeDrugSubstanceFields:Y}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsx("div",{className:"col-md-2 col-lg-2 col-sm-12",children:e.jsx("label",{className:"form-label",children:"Attached documents"})}),e.jsx("div",{className:"col-md-6 col-lg-6 col-sm-12",children:e.jsx(se,{files:t.doc,upload:R,deleletFile:E,removeAll:F})})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsx("label",{className:"form-label",children:"Remarks"}),e.jsx("textarea",{className:"form-control form-control-solid",rows:3,name:"docremarks",defaultValue:t.docremarks,placeholder:"",onChange:c})]})]}),e.jsxs("div",{className:"flex-column","data-kt-stepper-element":"content",children:[e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Request date"}),e.jsx(S,{"data-enable-time":!0,value:t.request_date,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{htmlFor:"",className:"form-label",children:"Delivery deadline"}),e.jsx(S,{"data-enable-time":!0,value:t.deadline,className:"form-control",options:{dateFormat:"d-M-Y H:i"},disabled:!0})]})]}),e.jsx("div",{className:"mb-10"})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsx("div",{className:"me-2",children:e.jsx("button",{type:"button",className:"btn btn-light btn-active-light-primary","data-kt-stepper-action":"previous",onClick:P,children:"Back"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"btn btn-primary m-3","data-kt-stepper-action":"submit",onClick:s=>j(s,"save"),children:e.jsx("span",{className:"indicator-label",children:"Save"})}),e.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-stepper-action":"submit",onClick:s=>j(s,"submit"),children:[e.jsx("span",{className:"indicator-label",children:"Submit"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait... ",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("button",{type:"button",className:"btn btn-primary","data-kt-stepper-action":"next",onClick:A,children:"Continue"})]})]})]})]}),e.jsx(ne,{show:q,onCancel:I,actionType:M,onConfirm:V})]})};oe.layout=h=>e.jsx(X,{children:h,auth:h.props.auth});export{oe as default};
