import{j as e,r as n,h as r}from"./app-c8c2bf8c.js";import{K as x,R as u,h as g,A as M}from"./AuthenticatedLayout-65a61536.js";import"./MetronicSplashScreen-942987f2.js";import{t as P,c as f}from"./MenuComponent-17c91c31.js";import{$ as q,w as A,S as Y}from"./jquery.dataTables-678b1707.js";import{S as F}from"./StatusComponent-38fd012f.js";function L({handleDownload:l}){return e.jsxs("div",{className:"menu menu-sub menu-sub-dropdown w-200px w-md-200px","data-kt-menu":"true",children:[e.jsx("div",{className:"px-7 py-5",children:e.jsx("div",{className:"fs-5 text-dark fw-bolder",children:"More Options"})}),e.jsx("div",{className:"separator border-gray-200"}),e.jsxs("div",{className:"px-7 py-5",children:[e.jsxs("div",{className:"mb-10 d-flex align-items-center justify-content-between",children:[e.jsx("label",{className:"form-label fw-bold",children:"Download :"}),e.jsx("div",{children:e.jsx("button",{className:"btn btn-light btn-sm",onClick:l,children:e.jsx("i",{className:"fa-solid fa-download"})})})]}),e.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[e.jsx("label",{className:"form-label fw-bold",children:"Print :"}),e.jsx("div",{children:e.jsx("button",{className:"btn btn-light btn-sm",children:e.jsx("i",{className:"fa-solid fa-print"})})})]})]})]})}const E=l=>{const{data:c}=l,[d,o]=n.useState(1),[a,j]=n.useState(),[b,v]=n.useState([]),[m,i]=n.useState(0),[N,K]=n.useState(10),h=n.useRef();n.useEffect(()=>{const s=q(h.current).DataTable({info:!1,order:[],pageLength:N,dom:"Bfrtip",buttons:["copy","excel","pdf"]});return i(s.page.info().pages),j(s),function(){s.destroy()}},[]),n.useEffect(()=>{let s=Array.from({length:m},(t,p)=>p+1);v(s)},[m]);const y=s=>{a.search(s.target.value).draw(),i(a.page.info().pages)},_=s=>{let t=s.target.value;t==="all"&&(t=""),a.column(4).search(t).draw("page"),i(a.page.info().pages)},k=s=>{let t=s.target.value;t==="all"&&(t=""),a.column(0).search(t).draw("page"),i(a.page.info().pages)},w=()=>{console.log("click")},C=s=>{o(s),a.page(s-1).draw("page")},S=()=>{let s=a.page.info().page;o(s),a.page(s-1).draw("page")},D=()=>{let s=a.page.info().page+1;console.log(s),o(s+1),a.page(s).draw("page")},R=s=>{a.page.len(s.target.value).draw(),i(a.page.info().pages)},T=s=>{let t;return s==="Swissmedic"||!s?t="CH":t=s.split("-")[0],t};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"card mb-5",children:[e.jsxs("div",{className:"card-header align-items-center py-5 gap-2 gap-md-5",children:[e.jsx("div",{className:"card-title",children:e.jsxs("div",{className:"d-flex align-items-center position-relative my-1",children:[e.jsx("div",{className:"text-muted fs-7",children:"Request Type"}),e.jsxs("select",{className:"form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible",onChange:k,children:[e.jsx("option",{value:"all",children:"Show All"}),e.jsx("option",{children:"Formatting"}),e.jsx("option",{children:"Publishing"})]}),e.jsx("div",{className:"text-muted fs-7",children:"Status"}),e.jsxs("select",{className:"form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible",onChange:_,children:[e.jsx("option",{value:"all",children:"Show All"}),e.jsx("option",{value:"initiated",children:"Initiated"}),e.jsx("option",{value:"submitted",children:"Submitted"}),e.jsx("option",{value:"to verify",children:"To verify"}),e.jsx("option",{value:"delivered",children:"Delivered"}),e.jsx("option",{value:"to correct",children:"To correct"}),e.jsx("option",{value:"closed",children:"Closed"})]}),e.jsx("div",{className:"text-muted fs-7",children:"Dossier Type"}),e.jsx("select",{className:"form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible",children:e.jsx("option",{children:"Show All"})})]})}),e.jsxs("div",{className:"card-toolbar flex-row-fluid justify-content-end gap-5",children:[e.jsxs("div",{className:"d-flex align-items-center position-relative my-1",children:[e.jsx(x,{iconName:"magnifier",className:"fs-3 position-absolute ms-4"}),e.jsx("input",{type:"text",className:"form-control form-control-solid w-250px ps-12",placeholder:"Search",onChange:y})]}),l.user.current_team_id!==3?e.jsxs("a",{href:"#",className:"btn btn-sm btn-light-primary","data-bs-toggle":"modal","data-bs-target":"#kt_modal_invite_friends",children:[e.jsx(x,{iconName:"plus",className:"fs-3"}),"New Request"]}):"",e.jsx("button",{className:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary",type:"button","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end",children:e.jsx("img",{src:P("/media/icons/duotune/general/gen053.svg")})}),e.jsx(L,{handleDownload:w})]})]}),e.jsx("div",{className:"card-body py-3",children:e.jsxs("div",{className:"table-responsive",children:[e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",id:"lisTable",ref:h,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"min-w-150px",style:{display:"none"},children:"Form"}),e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-130px",children:"Last update"})]})}),e.jsx("tbody",{children:c?Object.values(c).map((s,t)=>e.jsxs("tr",{children:[e.jsx("td",{style:{display:"none"},children:s.form}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:typeof s.product_name=="object"&&s.product_name?e.jsx("a",{href:"#",onClick:()=>r.get("show-formatting",{id:s._id}),className:"text-dark text-hover-primary fs-6",children:s.product_name.value}):s.procedure=="Decentralized"||s.procedure=="Mutual Recognition"?e.jsx("a",{href:"#",onClick:()=>r.get("show-publishing-rmp",{id:s._id}),className:"text-dark text-hover-primary fs-6",children:s.product_name}):s.form=="Publishing"&&s.region=="CH"?e.jsx("a",{href:"#",onClick:()=>r.get("show-publishing-nat-ch",{id:s._id}),className:"text-dark text-hover-primary fs-6",children:s.product_name}):e.jsx("a",{href:"#",onClick:()=>r.get("show-publishing",{id:s._id}),className:"text-dark text-hover-primary fs-6",children:s.product_name})})}),e.jsx("td",{children:typeof s.country=="object"&&s.country?e.jsx(e.Fragment,{children:e.jsx(u,{countryCode:s.country.code,"aria-label":s.country.value,title:s.country.value,svg:!0,style:{width:"1.5em",height:"1.5em"}})}):e.jsx(u,{countryCode:T(s.agency_code),"aria-label":s.country,title:s.country,svg:!0,style:{width:"1.5em",height:"1.5em"}})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.sequence?s.sequence:"NA"})}),e.jsx("td",{children:e.jsx(F,{status:s.status})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.dossier_type?s.dossier_type.value:""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.request_date?g(s.request_date).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.updated_at?g(s.updated_at).format("DD-MMM-YYYY"):""})})]},t)):""})]}),e.jsxs("div",{className:"row paginate_row",children:[e.jsx("div",{className:"col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start",children:e.jsx("div",{className:"dataTables_length",id:"kt_profile_overview_table_length",children:e.jsx("label",{children:e.jsxs("select",{name:"kt_profile_overview_table_length","aria-controls":"kt_profile_overview_table",className:"form-select form-select-sm form-select-solid",onChange:R,children:[e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"10",selected:!0,children:"10"}),e.jsx("option",{value:"15",children:"15"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]})})})}),e.jsx("div",{className:"col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end",children:e.jsx("div",{className:"dataTables_paginate paging_simple_numbers",id:"kt_profile_overview_table_paginate",children:e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:f("paginate_button page-item previous",d===1?"disabled":""),id:"kt_profile_overview_table_previous",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:S,children:e.jsx("i",{className:"previous"})})}),b.map(s=>e.jsx("li",{className:d===s?"page-item active":"paginate_button page-item",children:e.jsxs("button",{onClick:()=>C(s),className:"page-link",children:[" ",s," "]})},s)),e.jsx("li",{className:f("paginate_button page-item next",d===m?"disabled":""),id:"kt_profile_overview_table_next",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:D,children:e.jsx("i",{className:"next"})})})]})})})]})]})})]})})},H=A(Y),I=l=>{const{allDemands:c}=l;return n.useEffect(()=>{l.flash.message&&H.fire({title:e.jsx("p",{children:"Done !"}),icon:"success",text:l.flash.message})},[]),e.jsx(e.Fragment,{children:e.jsx(E,{data:c,user:l.auth.user})})};I.layout=l=>e.jsx(M,{children:l,auth:l.props.auth});export{I as default};