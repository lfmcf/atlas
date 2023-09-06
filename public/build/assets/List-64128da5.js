import{j as e}from"./app-318f4ed7.js";import{K as c,h as d,A as l}from"./AuthenticatedLayout-96025a4f.js";import"./MetronicSplashScreen-094e0b46.js";import"./MenuComponent-a76a2623.js";import"./apexcharts.common-853a571c.js";import{S as r}from"./StatusComponent-27ecd4f6.js";const i=t=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"card mb-5",children:[e.jsxs("div",{className:"card-header border-0 pt-5",children:[e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Formatting & Publishing List"})}),t.user.current_team_id!==3?e.jsx("div",{className:"card-toolbar","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-trigger":"hover",title:"Click to add a record",children:e.jsxs("a",{href:"#",className:"btn btn-sm btn-light-primary","data-bs-toggle":"modal","data-bs-target":"#kt_modal_invite_friends",children:[e.jsx(c,{iconName:"plus",className:"fs-3"}),"Add New Record"]})}):""]}),e.jsx("div",{className:"card-body py-3",children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"w-25px",children:e.jsx("div",{className:"form-check form-check-sm form-check-custom form-check-solid",children:e.jsx("input",{className:"form-check-input",type:"checkbox",value:"1","data-kt-check":"true","data-kt-check-target":".widget-9-check"})})}),e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"})]})}),e.jsx("tbody",{children:t.data?Object.values(t.data).map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"form-check form-check-sm form-check-custom form-check-solid",children:e.jsx("input",{className:"form-check-input widget-9-check",type:"checkbox",value:"1"})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"d-flex justify-content-start flex-column",children:e.jsx("a",{href:"#",className:"text-dark fw-bold text-hover-primary fs-6",children:typeof s.product_name=="object"&&s.product_name?s.product_name.value:s.product_name})})})}),e.jsx("td",{children:e.jsx("a",{href:"#",className:"text-dark fw-bold text-hover-primary d-block fs-6",children:typeof s.country=="object"&&s.country?s.country.value:s.country})}),e.jsx("td",{children:s.sequence}),e.jsx("td",{children:e.jsx(r,{status:s.status})}),e.jsx("td",{children:s.dossier_type?s.dossier_type.value:""}),e.jsx("td",{children:s.request_date?d(s.request_date).format("DD-MMM-YYYY"):""})]},a)):""})]})})})]})}),j=t=>{const{allDemands:s}=t;return e.jsx(l,{auth:t.auth,children:e.jsx(i,{data:s,user:t.auth.user})})};export{j as default};
