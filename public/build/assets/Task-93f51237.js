import{j as e,c as i}from"./app-e3e6dca7.js";import{h as n,K as c,A as h}from"./AuthenticatedLayout-13087cc3.js";import"./MetronicSplashScreen-f3d9843d.js";import"./MenuComponent-512c7341.js";import"./apexcharts.common-632adf81.js";import{R as d}from"./react-country-flag.esm-c6b33e24.js";const x=({data:a})=>{const t=s=>{i.post(route("deliver"),{id:s})},l=s=>{i.post(route("close"),{id:s})},r=s=>{i.get(route("correct"),{id:s})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"card mb-5",children:[e.jsx("div",{className:"card-header border-0 pt-5",children:e.jsxs("h3",{className:"card-title align-items-start flex-column",children:[e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Formatting List"}),e.jsx("span",{className:"text-muted mt-1 fw-semibold fs-7",children:"Over 500 members"})]})}),e.jsx("div",{className:"card-body py-3",children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"w-25px",children:e.jsx("div",{className:"form-check form-check-sm form-check-custom form-check-solid",children:e.jsx("input",{className:"form-check-input",type:"checkbox",value:"1","data-kt-check":"true","data-kt-check-target":".widget-9-check"})})}),e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),e.jsx("tbody",{children:a?Object.values(a).map((s,m)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"form-check form-check-sm form-check-custom form-check-solid",children:e.jsx("input",{className:"form-check-input widget-9-check",type:"checkbox",value:"1"})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"d-flex justify-content-start flex-column",children:e.jsx("a",{href:"#",className:"text-dark fw-bold text-hover-primary fs-6",children:s.product_name?s.product_name.value:""})})})}),e.jsxs("td",{children:[e.jsx("a",{href:"#",className:"text-dark fw-bold text-hover-primary d-block fs-6",children:s.country?s.country.value:""}),e.jsxs("span",{className:"text-muted fw-semibold text-muted d-block fs-7",children:[e.jsx(d,{className:"emojiFlag",countryCode:s.country.code,"aria-label":s.country.value})," / ",s.country?s.country.code:""]})]}),e.jsx("td",{children:s.sequence}),e.jsx("td",{children:s.status=="initiated"?e.jsx("span",{className:"badge badge-light-warning fs-7 fw-bold text-capitalize",children:s.status}):s.status=="submitted"?e.jsx("span",{className:"badge badge-light-success fs-7 fw-bold text-capitalize",children:s.status}):s.status=="in progress"?e.jsx("span",{className:"badge badge-light-primary fs-7 fw-bold text-capitalize",children:s.status}):s.status=="to verify"?e.jsx("span",{className:"badge badge-light-danger fs-7 fw-bold text-capitalize",children:s.status}):s.status=="delivered"?e.jsx("span",{className:"badge badge-primary fs-7 fw-bold text-capitalize",children:s.status}):s.status=="to correct"?e.jsx("span",{className:"badge badge-danger fs-7 fw-bold text-capitalize",children:s.status}):""}),e.jsx("td",{children:s.dossier_type?s.dossier_type.value:""}),e.jsx("td",{children:s.request_date?n(s.request_date).format("DD-MMM-YYYY"):""}),e.jsx("td",{children:e.jsx("div",{className:"d-flex justify-content-end flex-shrink-0",children:s.status=="in progress"||s.status=="to correct"?e.jsx("button",{onClick:()=>t(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(c,{iconName:"check-circle",className:"fs-3"})}):s.status=="delivered"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>l(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(c,{iconName:"check-circle",className:"fs-3"})}),e.jsx("button",{onClick:()=>r(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(c,{iconName:"cross-circle",className:"fs-3"})})]}):e.jsx("button",{onClick:()=>i.get(route("editOne",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(c,{iconName:"pencil",className:"fs-3"})})})})]},m)):""})]})})})]})})},o=({data:a})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"card mb-5",children:[e.jsx("div",{className:"card-header border-0 pt-5",children:e.jsxs("h3",{className:"card-title align-items-start flex-column",children:[e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Publishing List"}),e.jsx("span",{className:"text-muted mt-1 fw-semibold fs-7",children:"Over 500 members"})]})}),e.jsx("div",{className:"card-body py-3",children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"w-25px",children:e.jsx("div",{className:"form-check form-check-sm form-check-custom form-check-solid",children:e.jsx("input",{className:"form-check-input",type:"checkbox",value:"1","data-kt-check":"true","data-kt-check-target":".widget-9-check"})})}),e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),e.jsx("tbody",{children:a?Object.values(a).map((t,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"form-check form-check-sm form-check-custom form-check-solid",children:e.jsx("input",{className:"form-check-input widget-9-check",type:"checkbox",value:"1"})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"d-flex justify-content-start flex-column",children:e.jsx("a",{href:"#",className:"text-dark fw-bold text-hover-primary fs-6",children:t.product_name?t.product_name.value:""})})})}),e.jsxs("td",{children:[e.jsx("a",{href:"#",className:"text-dark fw-bold text-hover-primary d-block fs-6",children:t.country?t.country.value:""}),e.jsxs("span",{className:"text-muted fw-semibold text-muted d-block fs-7",children:[e.jsx(d,{className:"emojiFlag",countryCode:t.country.code,"aria-label":t.country.value})," / ",t.country?t.country.code:""]})]}),e.jsx("td",{children:t.sequence}),e.jsx("td",{children:e.jsx("span",{className:"badge badge-light-warning fs-7 fw-bold text-capitalize",children:t.status})}),e.jsx("td",{children:t.dossier_type?t.dossier_type.value:""}),e.jsx("td",{children:t.request_date?n(t.request_date).format("DD-MMM-YYYY"):""}),e.jsx("td",{children:e.jsxs("div",{className:"d-flex justify-content-end flex-shrink-0",children:[e.jsx("a",{href:"#",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(c,{iconName:"pencil",className:"fs-3"})}),e.jsx("a",{href:"#",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm",children:e.jsx(c,{iconName:"trash",className:"fs-3"})})]})})]},l)):""})]})})})]})}),g=a=>{const{formatting:t,publishing:l}=a;return e.jsxs(h,{auth:a.auth,children:[e.jsx(x,{data:t}),e.jsx(o,{data:l})]})};export{g as default};
