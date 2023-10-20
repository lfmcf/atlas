import{r as i,j as e,h as a}from"./app-0a2ad27f.js";import{R as P,h as j,K as n,A as R}from"./AuthenticatedLayout-d4914f27.js";import"./MetronicSplashScreen-9a0781ab.js";import{c as p}from"./MenuComponent-d35eae01.js";import{$ as L,w as E,S as A}from"./apexcharts.common-6d8f4ab1.js";import"./jquery.dataTables-16c853a8.js";import{S as T}from"./StatusComponent-cf99c10b.js";import{D as w}from"./DeliveryMessage-8b3e4946.js";const H=({data:l})=>{const[c,m]=i.useState({status:!1,id:"",form:""}),[d,h]=i.useState(1),[o,f]=i.useState(),[N,v]=i.useState([]),[b,g]=i.useState(0),[_,q]=i.useState(10),u=i.useRef();i.useEffect(()=>{const t=L(u.current).DataTable({info:!1,order:[],pageLength:_});return g(t.page.info().pages),f(t),function(){t.destroy()}},[]),i.useEffect(()=>{let t=Array.from({length:b},(s,r)=>r+1);v(t)},[b]);const y=(t,s)=>{m({status:!c.status,id:t,form:s})},k=t=>{a.post(route("close-formatting"),{id:t})},C=t=>{a.get(route("formatting-verification"),{id:t})},S=t=>{a.get(route("show-formatting"),{id:t})},D=t=>{a.post(route("complete-formatting"),{id:t})},M=()=>{let t=o.page.info().page;h(t),o.page(t-1).draw("page")},F=()=>{let t=o.page.info().page+1;console.log(t),h(t+1),o.page(t).draw("page")},Y=t=>{o.page.len(t.target.value).draw(),g(o.page.info().pages)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card mb-5",children:[e.jsx("div",{className:"card-header border-0 pt-5",children:e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Formatting List"})})}),e.jsx("div",{className:"card-body py-3",children:e.jsxs("div",{className:"table-responsive",children:[e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",ref:u,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-130px",children:"Last update"}),e.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),e.jsx("tbody",{children:l?Object.values(l).map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.product_name?t.product_name.value:""})}),e.jsx("td",{children:e.jsx(P,{countryCode:t.country.code,"aria-label":t.country.value,title:t.country.value,svg:!0,style:{width:"1.5em",height:"1.5em"}})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:"NA"})}),e.jsx("td",{children:e.jsx(T,{status:t.status})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.dossier_type?t.dossier_type.value:""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.request_date?j(t.request_date).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.request_date?j(t.updated_at).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex justify-content-end flex-shrink-0",children:t.status=="draft"?e.jsx("a",{href:"#",onClick:()=>a.get(route("formatting-initiate",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})}):t.status=="initiated"?e.jsx("a",{href:"#",onClick:()=>a.get(route("formatting-confirm",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})}):t.status=="submitted"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>a.post(route("progress-formatting",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>a.get(route("formatting-audit",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})})]}):t.status=="to verify"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>a.post(route("confirm-formatting-out",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>a.get(route("formatting-audit",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})})]}):t.status=="in progress"||t.status=="to correct"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>S(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"eye",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>y(t._id,t.form),"data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})})]}):t.status=="delivered"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>D(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}),e.jsx("button",{onClick:()=>C(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"cross-circle",className:"fs-3"})})]}):t.status=="completed"?e.jsx("button",{onClick:()=>k(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}):""})})]},s)):""})]}),e.jsxs("div",{className:"row paginate_row",children:[e.jsx("div",{className:"col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start",children:e.jsx("div",{className:"dataTables_length",id:"kt_profile_overview_table_length",children:e.jsx("label",{children:e.jsxs("select",{name:"kt_profile_overview_table_length","aria-controls":"kt_profile_overview_table",className:"form-select form-select-sm form-select-solid",onChange:Y,children:[e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"10",selected:!0,children:"10"}),e.jsx("option",{value:"15",children:"15"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]})})})}),e.jsx("div",{className:"col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end",children:e.jsx("div",{className:"dataTables_paginate paging_simple_numbers",id:"kt_profile_overview_table_paginate",children:e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:p("paginate_button page-item previous",d===1?"disabled":""),id:"kt_profile_overview_table_previous",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:M,children:e.jsx("i",{className:"previous"})})}),N.map(t=>e.jsx("li",{className:d===t?"page-item active":"paginate_button page-item",children:e.jsxs("button",{onClick:()=>pagination(t),className:"page-link",children:[" ",t," "]})},t)),e.jsx("li",{className:p("paginate_button page-item next",d===b?"disabled":""),id:"kt_profile_overview_table_next",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:F,children:e.jsx("i",{className:"next"})})})]})})})]})]})})]}),e.jsx(w,{show:c.status,id:c.id,form:c.form})]})},K=l=>{const[c,m]=i.useState(""),d=()=>{l.form=="Formatting"?a.post(route("diliver-formatting"),{id:l.id,comment:c}):a.post(route("deliver-publishing"),{id:l.id,comment:c})};return i.useEffect(()=>{m("")},[]),e.jsx("div",{className:p("modal fade",l.show?"show":""),id:"kt_modal_delivery_message_pub","aria-hidden":"true",style:{display:l.show?"block":"none"},children:e.jsx("div",{className:"modal-dialog mw-650px",children:e.jsxs("div",{className:"modal-content",children:[e.jsx("div",{className:"modal-header pb-0 border-0 justify-content-end",children:e.jsx("div",{className:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal",children:e.jsx(n,{iconName:"cross",className:"fs-1"})})}),e.jsxs("div",{className:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15",children:[e.jsx("div",{className:"text-center mb-13",children:e.jsx("h1",{className:"mb-3",children:"Delivery Comment"})}),e.jsxs("form",{onSubmit:d,children:[e.jsx("label",{className:"form-label",children:"Comment"}),e.jsx("textarea",{rows:3,className:"form-control",onChange:h=>m(h.target.value)})]}),e.jsxs("div",{className:"d-flex mt-5 justify-content-end",children:[e.jsx("a",{href:"#","data-bs-dismiss":"modal",className:"btn btn-sm btn-light-primary me-3",children:"Cancel"}),e.jsx("button",{onClick:d,className:"btn btn-sm btn-primary","data-bs-dismiss":"modal",children:"Send"})]})]})]})})})},O=({data:l})=>{const[c,m]=i.useState({status:!1,id:"",form:""}),[d,h]=i.useState(1),[o,f]=i.useState(),[N,v]=i.useState([]),[b,g]=i.useState(0),[_,q]=i.useState(10),u=i.useRef();i.useEffect(()=>{const s=L(u.current).DataTable({info:!1,order:[],pageLength:_});return g(s.page.info().pages),f(s),function(){s.destroy()}},[]),i.useEffect(()=>{let s=Array.from({length:b},(r,x)=>x+1);v(s)},[b]);const y=(s,r)=>{m({status:!c.status,id:s,form:r})},k=s=>{a.post(route("close-publishing"),{id:s})},C=s=>{a.get(route("publishing-verification"),{id:s})},S=(s,r,x)=>{r==="CH"?a.get(route("show-publishing-nat-ch"),{id:s}):r=="EU"&&x=="Mutual Recognition"||r=="EU"&&x=="Decentralized"?a.get(route("show-publishing-rmp"),{id:s}):a.get(route("show"),{id:s})},D=s=>{let r;return s==="Swissmedic"||s==null?r="CH":r=s.split("-")[0],r},M=s=>{a.post(route("complete-publishing"),{id:s})},F=()=>{let s=o.page.info().page;h(s),o.page(s-1).draw("page")},Y=()=>{let s=o.page.info().page+1;console.log(s),h(s+1),o.page(s).draw("page")},t=s=>{o.page.len(s.target.value).draw(),g(o.page.info().pages)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card mb-5",children:[e.jsx("div",{className:"card-header border-0 pt-5",children:e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Publishing List"})})}),e.jsx("div",{className:"card-body py-3",children:e.jsxs("div",{className:"table-responsive",children:[e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",ref:u,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-130px",children:"Last update"}),e.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),e.jsx("tbody",{children:l?Object.values(l).map((s,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:typeof s.product_name=="object"&&s.product_name?s.product_name.value:s.product_name})}),e.jsx("td",{children:typeof s.country=="object"&&s.country?e.jsx(e.Fragment,{children:e.jsx(P,{countryCode:s.country.code,"aria-label":s.country.value,title:s.country.value,svg:!0,style:{width:"1.5em",height:"1.5em"}})}):e.jsx(P,{countryCode:D(s.agency_code),"aria-label":s.country,title:s.country,svg:!0,style:{width:"1.5em",height:"1.5em"}})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.sequence})}),e.jsx("td",{children:e.jsx(T,{status:s.status})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.dossier_type?s.dossier_type.value:""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.request_date?j(s.request_date).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.request_date?j(s.updated_at).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex justify-content-end flex-shrink-0",children:s.status=="draft"?e.jsx("a",{onClick:()=>a.get(route("publishing-initiate",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})}):s.status=="initiated"?e.jsx("a",{href:"#",onClick:()=>a.get(route("publishing-confirm",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})}):s.status=="submitted"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>a.post(route("progress-publishing",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>a.get(route("publishing-audit",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})})]}):s.status=="to verify"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>a.post(route("confirm-publishing-out",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>a.get(route("publishing-audit",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})})]}):s.status=="in progress"||s.status=="to correct"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>S(s._id,s.region,s.procedure),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"eye",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>y(s._id,s.form),"data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message_pub",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})})]}):s.status=="delivered"&&s.region?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>M(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}),e.jsx("button",{onClick:()=>C(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"cross-circle",className:"fs-3"})})]}):s.status=="completed"?e.jsx("button",{onClick:()=>k(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}):""})})]},r)):""})]}),e.jsxs("div",{className:"row paginate_row",children:[e.jsx("div",{className:"col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start",children:e.jsx("div",{className:"dataTables_length",id:"kt_profile_overview_table_length",children:e.jsx("label",{children:e.jsxs("select",{name:"kt_profile_overview_table_length","aria-controls":"kt_profile_overview_table",className:"form-select form-select-sm form-select-solid",onChange:t,children:[e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"10",selected:!0,children:"10"}),e.jsx("option",{value:"15",children:"15"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]})})})}),e.jsx("div",{className:"col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end",children:e.jsx("div",{className:"dataTables_paginate paging_simple_numbers",id:"kt_profile_overview_table_paginate",children:e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:p("paginate_button page-item previous",d===1?"disabled":""),id:"kt_profile_overview_table_previous",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:F,children:e.jsx("i",{className:"previous"})})}),N.map(s=>e.jsx("li",{className:d===s?"page-item active":"paginate_button page-item",children:e.jsxs("button",{onClick:()=>pagination(s),className:"page-link",children:[" ",s," "]})},s)),e.jsx("li",{className:p("paginate_button page-item next",d===b?"disabled":""),id:"kt_profile_overview_table_next",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:Y,children:e.jsx("i",{className:"next"})})})]})})})]})]})})]}),e.jsx(K,{show:c.status,id:c.id,form:c.form})]})},U=E(A),z=l=>{const{formatting:c,publishing:m}=l;return i.useEffect(()=>{l.flash.message&&U.fire({title:e.jsx("p",{children:"Done !"}),icon:"success",text:l.flash.message})}),e.jsxs(e.Fragment,{children:[e.jsx(H,{data:c}),e.jsx(O,{data:m})]})};z.layout=l=>e.jsx(R,{children:l,auth:l.props.auth});export{z as default};