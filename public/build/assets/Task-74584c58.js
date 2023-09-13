import{r as h,j as e,c}from"./app-019b4f32.js";import{R as x,h as b,K as t,A as f}from"./AuthenticatedLayout-3463e6f2.js";import"./MetronicSplashScreen-b6387fe1.js";import"./MenuComponent-1abda9dc.js";import{w as g,S as N}from"./sweetalert2-react-content.es-294442c7.js";import{S as u}from"./StatusComponent-bd389f40.js";import{D as j}from"./DeliveryMessage-b7b6b930.js";const p=({data:i})=>{const[a,l]=h.useState({status:!1,id:"",form:""}),r=(s,n)=>{l({status:!a.status,id:s,form:n})},d=s=>{c.post(route("close-formatting"),{id:s})},m=s=>{c.get(route("formatting-verification"),{id:s})},o=s=>{c.get(route("show-formatting"),{id:s})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card mb-5",children:[e.jsx("div",{className:"card-header border-0 pt-5",children:e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Formatting List"})})}),e.jsx("div",{className:"card-body py-3",children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"w-25px",children:e.jsx("div",{className:"form-check form-check-sm form-check-custom form-check-solid",children:e.jsx("input",{className:"form-check-input",type:"checkbox",value:"1","data-kt-check":"true","data-kt-check-target":".widget-9-check"})})}),e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),e.jsx("tbody",{children:i?Object.values(i).map((s,n)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"form-check form-check-sm form-check-custom form-check-solid",children:e.jsx("input",{className:"form-check-input widget-9-check",type:"checkbox",value:"1"})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"d-flex justify-content-start flex-column",children:e.jsx("a",{href:route("show-formatting",{id:s._id}),className:"text-dark fw-bold text-hover-primary fs-6",children:s.product_name?s.product_name.value:""})})})}),e.jsx("td",{children:e.jsx(x,{countryCode:s.country.code,"aria-label":s.country.value,title:s.country.value,svg:!0,style:{width:"1.5em",height:"1.5em"}})}),e.jsx("td",{children:s.sequence}),e.jsx("td",{children:e.jsx(u,{status:s.status})}),e.jsx("td",{children:s.dossier_type?s.dossier_type.value:""}),e.jsx("td",{children:s.request_date?b(s.request_date).format("DD-MMM-YYYY"):""}),e.jsx("td",{children:e.jsx("div",{className:"d-flex justify-content-end flex-shrink-0",children:s.status=="initiated"?e.jsx("a",{href:"#",onClick:()=>c.get(route("formatting-confirm",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"pencil",className:"fs-3"})}):s.status=="submitted"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>c.post(route("progress-formatting",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>c.get(route("formatting-audit",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"pencil",className:"fs-3"})})]}):s.status=="to verify"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>c.post(route("confirm-formatting-out",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>c.get(route("formatting-audit",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"pencil",className:"fs-3"})})]}):s.status=="in progress"||s.status=="to correct"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"eye",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>r(s._id,s.form),"data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"check-circle",className:"fs-3"})})]}):s.status=="delivered"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>d(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"check-circle",className:"fs-3"})}),e.jsx("button",{onClick:()=>m(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"cross-circle",className:"fs-3"})})]}):""})})]},n)):""})]})})})]}),e.jsx(j,{show:a.status,id:a.id,form:a.form})]})},k=({data:i})=>{const[a,l]=h.useState({status:!1,id:"",form:""}),r=(s,n)=>{l({status:!a.status,id:s,form:n})},d=s=>{c.post(route("closepublishing"),{id:s})},m=s=>{c.get(route("correctpublishing"),{id:s})},o=s=>{c.get(route("show"),{id:s})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card mb-5",children:[e.jsx("div",{className:"card-header border-0 pt-5",children:e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Publishing List"})})}),e.jsx("div",{className:"card-body py-3",children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"w-25px",children:e.jsx("div",{className:"form-check form-check-sm form-check-custom form-check-solid",children:e.jsx("input",{className:"form-check-input",type:"checkbox",value:"1","data-kt-check":"true","data-kt-check-target":".widget-9-check"})})}),e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),e.jsx("tbody",{children:i?Object.values(i).map((s,n)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"form-check form-check-sm form-check-custom form-check-solid",children:e.jsx("input",{className:"form-check-input widget-9-check",type:"checkbox",value:"1"})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"d-flex justify-content-start flex-column",children:e.jsx("a",{href:"#",className:"text-dark fw-bold text-hover-primary fs-6",children:typeof s.product_name=="object"&&s.product_name?s.product_name.value:s.product_name})})})}),e.jsx("td",{children:e.jsx(x,{countryCode:s.country.code,"aria-label":s.country.value,title:s.country.value,svg:!0,style:{width:"1.5em",height:"1.5em"}})}),e.jsx("td",{children:s.sequence}),e.jsx("td",{children:e.jsx(u,{status:s.status})}),e.jsx("td",{children:s.dossier_type?s.dossier_type.value:""}),e.jsx("td",{children:s.request_date?b(s.request_date).format("DD-MMM-YYYY"):""}),e.jsx("td",{children:e.jsx("div",{className:"d-flex justify-content-end flex-shrink-0",children:s.status=="initiated"?e.jsx("a",{href:"#",onClick:()=>c.get(route("publishing-rmp-confirm",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"pencil",className:"fs-3"})}):s.status=="submitted"||s.status=="to verify"?e.jsx("a",{href:"#",onClick:()=>c.get(route("review",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"pencil",className:"fs-3"})}):s.status=="in progress"||s.status=="to correct"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"eye",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>r(s._id,s.form),"data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"check-circle",className:"fs-3"})})]}):s.status=="delivered"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>d(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"check-circle",className:"fs-3"})}),e.jsx("button",{onClick:()=>m(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(t,{iconName:"cross-circle",className:"fs-3"})})]}):""})})]},n)):""})]})})})]}),e.jsx(j,{show:a.status,id:a.id,form:a.form})]})},v=g(N),Y=i=>{const{formatting:a,publishing:l}=i;return h.useEffect(()=>{i.flash.message&&v.fire({title:e.jsx("p",{children:"Your work has been submitted"}),icon:"success",text:i.flash.message})},[]),e.jsxs(f,{auth:i.auth,children:[e.jsx(p,{data:a}),e.jsx(k,{data:l})]})};export{Y as default};
