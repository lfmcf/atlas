import{r as i,j as e,h as c}from"./app-977ef6b1.js";import{K as p,S as D,R as g,h as x,A as M}from"./AuthenticatedLayout-88f6dfb0.js";import"./MetronicSplashScreen-005b60a6.js";import{c as f}from"./MenuComponent-85b4e60a.js";import{$ as P,w as R,S as A}from"./apexcharts.common-8391cf06.js";import{S as Y}from"./StatusComponent-7ad044ad.js";import"./jquery.dataTables-e65abbb6.js";const q=t=>{const{data:n}=t,[d,o]=i.useState(1),[s,j]=i.useState(),[v,b]=i.useState([]),[m,r]=i.useState(0),[_,F]=i.useState(10),h=i.useRef();i.useEffect(()=>{const a=P(h.current).DataTable({info:!1,order:[],pageLength:_});return r(a.page.info().pages),j(a),function(){a.destroy()}},[]),i.useEffect(()=>{let a=Array.from({length:m},(l,u)=>u+1);b(a)},[m]);const N=a=>{s.search(a.target.value).draw(),r(s.page.info().pages)},y=a=>{let l=a.value;l==="All"&&(l=""),s.column(3).search(l).draw("page"),r(s.page.info().pages)},C=a=>{o(a),s.page(a-1).draw("page")},k=()=>{let a=s.page.info().page;o(a),s.page(a-1).draw("page")},S=()=>{let a=s.page.info().page+1;console.log(a),o(a+1),s.page(a).draw("page")},w=a=>{s.page.len(a.target.value).draw(),r(s.page.info().pages)},T=a=>{let l;return a==="Swissmedic"||!a?l="CH":l=a.split("-")[0],l};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"card mb-5",children:[e.jsxs("div",{className:"card-header align-items-center py-5 gap-2 gap-md-5",children:[e.jsx("div",{className:"card-title",children:e.jsxs("div",{className:"d-flex align-items-center position-relative my-1",children:[e.jsx(p,{iconName:"magnifier",className:"fs-3 position-absolute ms-4"}),e.jsx("input",{type:"text",className:"form-control form-control-solid w-250px ps-12",placeholder:"Search",onChange:N})]})}),e.jsxs("div",{className:"card-toolbar flex-row-fluid justify-content-end gap-5",children:[e.jsx("div",{className:"w-100 mw-150px",children:e.jsx(D,{options:[{label:"All",value:"All"},{label:"Initiated",value:"Initiated"},{label:"Submitted",value:"Submitted"},{label:"To verify",value:"To verify"},{label:"Delivered",value:"Delivered"},{label:"To correct",value:"To correct"},{label:"Closed",value:"Closed"}],placeholder:"All Forms",onChange:y,menuPortalTarget:document.body,styles:{menuPortal:a=>({...a,zIndex:9999})},isClearable:!0})}),t.user.current_team_id!==3?e.jsxs("a",{href:"#",className:"btn btn-sm btn-light-primary","data-bs-toggle":"modal","data-bs-target":"#kt_modal_invite_friends",children:[e.jsx(p,{iconName:"plus",className:"fs-3"}),"New Request"]}):""]})]}),e.jsx("div",{className:"card-body py-3",children:e.jsxs("div",{className:"table-responsive",children:[e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",id:"lisTable",ref:h,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-130px",children:"Last update"})]})}),e.jsx("tbody",{children:n?Object.values(n).map((a,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:typeof a.product_name=="object"&&a.product_name?e.jsx("a",{href:"#",onClick:()=>c.get("show-formatting",{id:a._id}),className:"text-dark text-hover-primary fs-6",children:a.product_name.value}):a.procedure=="Decentralized"||a.procedure=="Mutual Recognition"?e.jsx("a",{href:"#",onClick:()=>c.get("show-publishing-rmp",{id:a._id}),className:"text-dark text-hover-primary fs-6",children:a.product_name}):a.form=="Publishing"&&a.region=="CH"?e.jsx("a",{href:"#",onClick:()=>c.get("show-publishing-nat-ch",{id:a._id}),className:"text-dark text-hover-primary fs-6",children:a.product_name}):e.jsx("a",{href:"#",onClick:()=>c.get("show-publishing",{id:a._id}),className:"text-dark text-hover-primary fs-6",children:a.product_name})})}),e.jsx("td",{children:typeof a.country=="object"&&a.country?e.jsx(e.Fragment,{children:e.jsx(g,{countryCode:a.country.code,"aria-label":a.country.value,title:a.country.value,svg:!0,style:{width:"1.5em",height:"1.5em"}})}):e.jsx(g,{countryCode:T(a.agency_code),"aria-label":a.country,title:a.country,svg:!0,style:{width:"1.5em",height:"1.5em"}})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:a.sequence?a.sequence:"NA"})}),e.jsx("td",{children:e.jsx(Y,{status:a.status})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:a.dossier_type?a.dossier_type.value:""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:a.request_date?x(a.request_date).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:a.updated_at?x(a.updated_at).format("DD-MMM-YYYY"):""})})]},l)):""})]}),e.jsxs("div",{className:"row paginate_row",children:[e.jsx("div",{className:"col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start",children:e.jsx("div",{className:"dataTables_length",id:"kt_profile_overview_table_length",children:e.jsx("label",{children:e.jsxs("select",{name:"kt_profile_overview_table_length","aria-controls":"kt_profile_overview_table",className:"form-select form-select-sm form-select-solid",onChange:w,children:[e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"10",selected:!0,children:"10"}),e.jsx("option",{value:"15",children:"15"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]})})})}),e.jsx("div",{className:"col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end",children:e.jsx("div",{className:"dataTables_paginate paging_simple_numbers",id:"kt_profile_overview_table_paginate",children:e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:f("paginate_button page-item previous",d===1?"disabled":""),id:"kt_profile_overview_table_previous",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:k,children:e.jsx("i",{className:"previous"})})}),v.map(a=>e.jsx("li",{className:d===a?"page-item active":"paginate_button page-item",children:e.jsxs("button",{onClick:()=>C(a),className:"page-link",children:[" ",a," "]})},a)),e.jsx("li",{className:f("paginate_button page-item next",d===m?"disabled":""),id:"kt_profile_overview_table_next",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:S,children:e.jsx("i",{className:"next"})})})]})})})]})]})})]})})},L=R(A),E=t=>{const{allDemands:n}=t;return i.useEffect(()=>{t.flash.message&&L.fire({title:e.jsx("p",{children:"Done !"}),icon:"success",text:t.flash.message})},[]),e.jsx(e.Fragment,{children:e.jsx(q,{data:n,user:t.auth.user})})};E.layout=t=>e.jsx(M,{children:t,auth:t.props.auth});export{E as default};
