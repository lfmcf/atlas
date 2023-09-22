import{r as x,j as s,c as n}from"./app-484c961a.js";import{R as u,h as j,K as a,A as N}from"./AuthenticatedLayout-7e389df7.js";import"./MetronicSplashScreen-45c9c1a8.js";import"./MenuComponent-3b8eecda.js";import{w as f,S as y}from"./sweetalert2-react-content.es-9e8eebb0.js";import{S as g}from"./StatusComponent-2329075c.js";import{D as p}from"./DeliveryMessage-a34a6be2.js";const v=({data:c})=>{const[i,l]=x.useState({status:!1,id:"",form:""}),m=(t,e)=>{l({status:!i.status,id:t,form:e})},d=t=>{n.post(route("close-formatting"),{id:t})},o=t=>{n.get(route("formatting-verification"),{id:t})},h=t=>{n.get(route("show-formatting"),{id:t})},b=t=>{n.post(route("complete-formatting"),{id:t})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"card mb-5",children:[s.jsx("div",{className:"card-header border-0 pt-5",children:s.jsx("h3",{className:"card-title align-items-start flex-column",children:s.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Formatting List"})})}),s.jsx("div",{className:"card-body py-3",children:s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"fw-bold text-muted",children:[s.jsx("th",{className:"min-w-150px",children:"Product"}),s.jsx("th",{className:"min-w-140px",children:"Country"}),s.jsx("th",{className:"min-w-140px",children:"Sequence"}),s.jsx("th",{className:"min-w-130px",children:"Status"}),s.jsx("th",{className:"min-w-130px",children:"Dossier type"}),s.jsx("th",{className:"min-w-130px",children:"Request date"}),s.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),s.jsx("tbody",{children:c?Object.values(c).map((t,e)=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"fs-7",children:t.product_name?t.product_name.value:""})}),s.jsx("td",{children:s.jsx(u,{countryCode:t.country.code,"aria-label":t.country.value,title:t.country.value,svg:!0,style:{width:"1.5em",height:"1.5em"}})}),s.jsx("td",{children:s.jsx("span",{className:"fs-7",children:"NA"})}),s.jsx("td",{children:s.jsx(g,{status:t.status})}),s.jsx("td",{children:s.jsx("span",{className:"fs-7",children:t.dossier_type?t.dossier_type.value:""})}),s.jsx("td",{children:s.jsx("span",{className:"fs-7",children:t.request_date?j(t.request_date).format("DD-MMM-YYYY"):""})}),s.jsx("td",{children:s.jsx("div",{className:"d-flex justify-content-end flex-shrink-0",children:t.status=="draft"?s.jsx("a",{href:"#",onClick:()=>n.get(route("formatting-initiate",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"pencil",className:"fs-3"})}):t.status=="initiated"?s.jsx("a",{href:"#",onClick:()=>n.get(route("formatting-confirm",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"pencil",className:"fs-3"})}):t.status=="submitted"?s.jsxs(s.Fragment,{children:[s.jsx("a",{href:"#",onClick:()=>n.post(route("progress-formatting",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"check-circle",className:"fs-3"})}),s.jsx("a",{href:"#",onClick:()=>n.get(route("formatting-audit",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"pencil",className:"fs-3"})})]}):t.status=="to verify"?s.jsxs(s.Fragment,{children:[s.jsx("a",{href:"#",onClick:()=>n.post(route("confirm-formatting-out",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"check-circle",className:"fs-3"})}),s.jsx("a",{href:"#",onClick:()=>n.get(route("formatting-audit",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"pencil",className:"fs-3"})})]}):t.status=="in progress"||t.status=="to correct"?s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>h(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"eye",className:"fs-3"})}),s.jsx("a",{href:"#",onClick:()=>m(t._id,t.form),"data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"check-circle",className:"fs-3"})})]}):t.status=="delivered"?s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>b(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"check-circle",className:"fs-3"})}),s.jsx("button",{onClick:()=>o(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"cross-circle",className:"fs-3"})})]}):t.status=="completed"?s.jsx("button",{onClick:()=>d(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"check-circle",className:"fs-3"})}):""})})]},e)):""})]})})})]}),s.jsx(p,{show:i.status,id:i.id,form:i.form})]})},_=({data:c})=>{const[i,l]=x.useState({status:!1,id:"",form:""}),m=(e,r)=>{l({status:!i.status,id:e,form:r})},d=e=>{n.post(route("close-publishing"),{id:e})},o=e=>{n.get(route("publishing-verification"),{id:e})},h=e=>{n.get(route("show"),{id:e})},b=e=>e.split("-")[0],t=e=>{n.post(route("complete-publishing"),{id:e})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"card mb-5",children:[s.jsx("div",{className:"card-header border-0 pt-5",children:s.jsx("h3",{className:"card-title align-items-start flex-column",children:s.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Publishing List"})})}),s.jsx("div",{className:"card-body py-3",children:s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"fw-bold text-muted",children:[s.jsx("th",{className:"min-w-150px",children:"Product"}),s.jsx("th",{className:"min-w-140px",children:"Country"}),s.jsx("th",{className:"min-w-140px",children:"Sequence"}),s.jsx("th",{className:"min-w-130px",children:"Status"}),s.jsx("th",{className:"min-w-130px",children:"Dossier type"}),s.jsx("th",{className:"min-w-130px",children:"Request date"}),s.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),s.jsx("tbody",{children:c?Object.values(c).map((e,r)=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"fs-7",children:typeof e.product_name=="object"&&e.product_name?e.product_name.value:e.product_name})}),s.jsx("td",{children:s.jsx(u,{countryCode:b(e.agency_code),"aria-label":e.country,title:e.country,svg:!0,style:{width:"1.5em",height:"1.5em"}})}),s.jsx("td",{children:s.jsx("span",{className:"fs-7",children:e.sequence})}),s.jsx("td",{children:s.jsx(g,{status:e.status})}),s.jsx("td",{children:s.jsx("span",{className:"fs-7",children:e.dossier_type?e.dossier_type.value:""})}),s.jsx("td",{children:s.jsx("span",{className:"fs-7",children:e.request_date?j(e.request_date).format("DD-MMM-YYYY"):""})}),s.jsx("td",{children:s.jsx("div",{className:"d-flex justify-content-end flex-shrink-0",children:e.status=="draft"?s.jsx("a",{onClick:()=>n.get(route("publishing-initiate",{id:e._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"pencil",className:"fs-3"})}):e.status=="initiated"?s.jsx("a",{href:"#",onClick:()=>n.get(route("publishing-confirm",{id:e._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"pencil",className:"fs-3"})}):e.status=="submitted"?s.jsxs(s.Fragment,{children:[s.jsx("a",{href:"#",onClick:()=>n.post(route("progress-publishing",{id:e._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"check-circle",className:"fs-3"})}),s.jsx("a",{href:"#",onClick:()=>n.get(route("publishing-audit",{id:e._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"pencil",className:"fs-3"})})]}):e.status=="to verify"?s.jsxs(s.Fragment,{children:[s.jsx("a",{href:"#",onClick:()=>n.post(route("confirm-publishing-out",{id:e._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"check-circle",className:"fs-3"})}),s.jsx("a",{href:"#",onClick:()=>n.get(route("publishing-audit",{id:e._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"pencil",className:"fs-3"})})]}):e.status=="in progress"||e.status=="to correct"?s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>h(e._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"eye",className:"fs-3"})}),s.jsx("a",{href:"#",onClick:()=>m(e._id,e.form),"data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"check-circle",className:"fs-3"})})]}):e.status=="delivered"?s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>t(e._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"check-circle",className:"fs-3"})}),s.jsx("button",{onClick:()=>o(e._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"cross-circle",className:"fs-3"})})]}):e.status=="completed"?s.jsx("button",{onClick:()=>d(e._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:s.jsx(a,{iconName:"check-circle",className:"fs-3"})}):""})})]},r)):""})]})})})]}),s.jsx(p,{show:i.status,id:i.id,form:i.form})]})},k=f(y),R=c=>{const{formatting:i,publishing:l}=c;return x.useEffect(()=>{c.flash.message&&k.fire({title:s.jsx("p",{children:"Done !"}),icon:"success",text:c.flash.message})}),s.jsxs(N,{auth:c.auth,children:[s.jsx(v,{data:i}),s.jsx(_,{data:l})]})};export{R as default};
