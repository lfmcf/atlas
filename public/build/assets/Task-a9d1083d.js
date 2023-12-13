import{r as l,j as e,e as i}from"./app-16abb1c0.js";import{$ as L,K as n,R as j,h as f,A,S as I}from"./AuthenticatedLayout-ff32676c.js";import"./MetronicSplashScreen-c055a298.js";import"./MenuComponent-243ead4e.js";import{w as U}from"./jquery.dataTables-8b2941f7.js";import{c as b}from"./hoist-non-react-statics.cjs-1d8f9095.js";import{S as R}from"./StatusComponent-976069c2.js";import{D as z}from"./DeliveryMessage-4216deab.js";const H=({data:c})=>{const[o,p]=l.useState({status:!1,id:"",form:""}),[d,m]=l.useState(1),[a,v]=l.useState(),[N,_]=l.useState([]),[u,h]=l.useState(0),[y,q]=l.useState(10),x=l.useRef();l.useEffect(()=>{const t=L(x.current).DataTable({info:!1,order:[],pageLength:y});return h(t.page.info().pages),v(t),function(){t.destroy()}},[]),l.useEffect(()=>{let t=Array.from({length:u},(s,r)=>r+1);_(t)},[u]);const k=(t,s)=>{p({status:!o.status,id:t,form:s})},C=t=>{i.post(route("close-formatting"),{id:t})},S=t=>{i.get(route("formatting-verification"),{id:t})},D=t=>{i.get(route("show-formatting"),{id:t})},w=t=>{i.post(route("complete-formatting"),{id:t})},M=()=>{let t=a.page.info().page;m(t),a.page(t-1).draw("page")},T=()=>{let t=a.page.info().page+1;m(t+1),a.page(t).draw("page")},F=t=>{a.page.len(t.target.value).draw(),h(a.page.info().pages)},Y=t=>{a.search(t.target.value).draw(),h(a.page.info().pages)},P=t=>{let s=t.target.value;s==="all"&&(s=""),a.column(3).search(s).draw("page"),h(a.page.info().pages)},E=t=>{m(t),a.page(t-1).draw("page")};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card mb-5",children:[e.jsxs("div",{className:"card-header border-0 pt-5",children:[e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Formatting List"})}),e.jsxs("div",{className:"card-toolbar",children:[e.jsx("div",{className:"text-muted fs-7",children:"Status"}),e.jsxs("select",{className:"form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible",onChange:P,children:[e.jsx("option",{value:"all",children:"Show All"}),e.jsx("option",{value:"initiated",children:"Initiated"}),e.jsx("option",{value:"submitted",children:"Submitted"}),e.jsx("option",{value:"to verify",children:"To verify"}),e.jsx("option",{value:"in progress",children:"In progress"}),e.jsx("option",{value:"delivered",children:"Delivered"}),e.jsx("option",{value:"to correct",children:"To correct"}),e.jsx("option",{value:"closed",children:"Closed"})]}),e.jsx("div",{className:"text-muted fs-7",children:"Dossier Type"}),e.jsx("select",{className:"form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible",children:e.jsx("option",{children:"Show All"})}),e.jsxs("div",{className:"d-flex align-items-center position-relative my-1",children:[e.jsx(n,{iconName:"magnifier",className:"fs-3 position-absolute ms-4"}),e.jsx("input",{type:"text",className:"form-control form-control-solid w-250px ps-12",placeholder:"Search",onChange:Y})]})]})]}),e.jsx("div",{className:"card-body py-3",children:e.jsxs("div",{className:"table-responsive",children:[e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",ref:x,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-130px",children:"Last update"}),e.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),e.jsx("tbody",{children:c?Object.values(c).map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.product_name?t.product_name.value:""})}),e.jsx("td",{children:t.country?e.jsx(j,{countryCode:t.country.code,"aria-label":t.country.value,title:t.country.value,svg:!0,style:{width:"1.5em",height:"1.5em"}}):""}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:"NA"})}),e.jsx("td",{children:e.jsx(R,{status:t.status})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.dossier_type?t.dossier_type.value:""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.request_date?f(t.request_date).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.request_date?f(t.updated_at).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex justify-content-end flex-shrink-0",children:t.status=="draft"?e.jsx("a",{href:"#",onClick:()=>i.get(route("formatting-initiate",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})}):t.status=="initiated"?e.jsx("a",{href:"#",onClick:()=>i.get(route("formatting-confirm",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})}):t.status=="submitted"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>i.post(route("progress-formatting",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>i.get(route("formatting-audit",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})})]}):t.status=="to verify"?e.jsx(e.Fragment,{children:e.jsx("a",{href:"#",onClick:()=>i.get(route("formatting-audit",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"eye",className:"fs-3"})})}):t.status=="in progress"||t.status=="to correct"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>D(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"eye",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>k(t._id,t.form),"data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})})]}):t.status=="delivered"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>w(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}),e.jsx("button",{onClick:()=>S(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"cross-circle",className:"fs-3"})})]}):t.status=="completed"?e.jsx("button",{onClick:()=>C(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}):""})})]},s)):""})]}),e.jsxs("div",{className:"row paginate_row",children:[e.jsx("div",{className:"col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start",children:e.jsx("div",{className:"dataTables_length",id:"kt_profile_overview_table_length",children:e.jsx("label",{children:e.jsxs("select",{name:"kt_profile_overview_table_length","aria-controls":"kt_profile_overview_table",className:"form-select form-select-sm form-select-solid",onChange:F,children:[e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"10",selected:!0,children:"10"}),e.jsx("option",{value:"15",children:"15"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]})})})}),e.jsx("div",{className:"col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end",children:e.jsx("div",{className:"dataTables_paginate paging_simple_numbers",id:"kt_profile_overview_table_paginate",children:e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:b("paginate_button page-item previous",d===1?"disabled":""),id:"kt_profile_overview_table_previous",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:M,children:e.jsx("i",{className:"previous"})})}),N.map(t=>e.jsx("li",{className:d===t?"page-item active":"paginate_button page-item",children:e.jsxs("button",{onClick:()=>E(t),className:"page-link",children:[" ",t," "]})},t)),e.jsx("li",{className:b("paginate_button page-item next",d===u?"disabled":""),id:"kt_profile_overview_table_next",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:T,children:e.jsx("i",{className:"next"})})})]})})})]})]})})]}),e.jsx(z,{show:o.status,id:o.id,form:o.form})]})},K=c=>{const[o,p]=l.useState(""),d=()=>{c.form=="Formatting"?i.post(route("diliver-formatting"),{id:c.id,comment:o}):i.post(route("deliver-publishing"),{id:c.id,comment:o})};return l.useEffect(()=>{p("")},[]),e.jsx("div",{className:b("modal fade",c.show?"show":""),id:"kt_modal_delivery_message_pub","aria-hidden":"true",style:{display:c.show?"block":"none"},children:e.jsx("div",{className:"modal-dialog mw-650px",children:e.jsxs("div",{className:"modal-content",children:[e.jsx("div",{className:"modal-header pb-0 border-0 justify-content-end",children:e.jsx("div",{className:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal",children:e.jsx(n,{iconName:"cross",className:"fs-1"})})}),e.jsxs("div",{className:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15",children:[e.jsx("div",{className:"text-center mb-13",children:e.jsx("h1",{className:"mb-3",children:"Delivery Comment"})}),e.jsxs("form",{onSubmit:d,children:[e.jsx("label",{className:"form-label",children:"Comment"}),e.jsx("textarea",{rows:3,className:"form-control",onChange:m=>p(m.target.value)})]}),e.jsxs("div",{className:"d-flex mt-5 justify-content-end",children:[e.jsx("a",{href:"#","data-bs-dismiss":"modal",className:"btn btn-sm btn-light-primary me-3",children:"Cancel"}),e.jsx("button",{onClick:d,className:"btn btn-sm btn-primary","data-bs-dismiss":"modal",children:"Send"})]})]})]})})})},O=({data:c})=>{const[o,p]=l.useState({status:!1,id:"",form:""}),[d,m]=l.useState(1),[a,v]=l.useState(),[N,_]=l.useState([]),[u,h]=l.useState(0),[y,q]=l.useState(10),x=l.useRef();l.useEffect(()=>{const s=L(x.current).DataTable({info:!1,order:[],pageLength:y});return h(s.page.info().pages),v(s),function(){s.destroy()}},[]),l.useEffect(()=>{let s=Array.from({length:u},(r,g)=>g+1);_(s)},[u]);const k=(s,r)=>{p({status:!o.status,id:s,form:r})},C=s=>{i.post(route("close-publishing"),{id:s})},S=s=>{i.get(route("publishing-verification"),{id:s})},D=(s,r,g)=>{r==="CH"?i.get(route("show-publishing-nat-ch"),{id:s}):r=="EU"&&g=="Mutual Recognition"||r=="EU"&&g=="Decentralized"?i.get(route("show-publishing-rmp"),{id:s}):i.get(route("show"),{id:s})},w=s=>{let r;return s==="Swissmedic"||s==null?r="CH":r=s.split("-")[0],r},M=s=>{i.post(route("complete-publishing"),{id:s})},T=()=>{let s=a.page.info().page;m(s),a.page(s-1).draw("page")},F=()=>{let s=a.page.info().page+1;console.log(s),m(s+1),a.page(s).draw("page")},Y=s=>{a.page.len(s.target.value).draw(),h(a.page.info().pages)},P=s=>{a.search(s.target.value).draw(),h(a.page.info().pages)},E=s=>{let r=s.target.value;r==="all"&&(r=""),a.column(3).search(r).draw("page"),h(a.page.info().pages)},t=s=>{m(s),a.page(s-1).draw("page")};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card mb-5",children:[e.jsxs("div",{className:"card-header border-0 pt-5",children:[e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Publishing List"})}),e.jsxs("div",{className:"card-toolbar",children:[e.jsx("div",{className:"text-muted fs-7",children:"Status"}),e.jsxs("select",{className:"form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible",onChange:E,children:[e.jsx("option",{value:"all",children:"Show All"}),e.jsx("option",{value:"initiated",children:"Initiated"}),e.jsx("option",{value:"submitted",children:"Submitted"}),e.jsx("option",{value:"to verify",children:"To verify"}),e.jsx("option",{value:"in progress",children:"In progress"}),e.jsx("option",{value:"delivered",children:"Delivered"}),e.jsx("option",{value:"to correct",children:"To correct"}),e.jsx("option",{value:"closed",children:"Closed"})]}),e.jsx("div",{className:"text-muted fs-7",children:"Dossier Type"}),e.jsx("select",{className:"form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible",children:e.jsx("option",{children:"Show All"})}),e.jsxs("div",{className:"d-flex align-items-center position-relative my-1",children:[e.jsx(n,{iconName:"magnifier",className:"fs-3 position-absolute ms-4"}),e.jsx("input",{type:"text",className:"form-control form-control-solid w-250px ps-12",placeholder:"Search",onChange:P})]})]})]}),e.jsx("div",{className:"card-body py-3",children:e.jsxs("div",{className:"table-responsive",children:[e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",ref:x,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-130px",children:"Last update"}),e.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),e.jsx("tbody",{children:c?Object.values(c).map((s,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:typeof s.product_name=="object"&&s.product_name?s.product_name.value:s.product_name})}),e.jsx("td",{children:s.procedure=="Mutual Recognition"||s.procedure=="Decentralized"?e.jsx(e.Fragment,{children:e.jsx(j,{countryCode:"EU","aria-label":"Europe",title:"Europe",svg:!0,style:{width:"1.5em",height:"1.5em"}})}):typeof s.country=="object"&&s.country?e.jsx(e.Fragment,{children:e.jsx(j,{countryCode:s.country.code,"aria-label":s.country.value,title:s.country.value,svg:!0,style:{width:"1.5em",height:"1.5em"}})}):e.jsx(j,{countryCode:w(s.agency_code),"aria-label":s.country,title:s.country,svg:!0,style:{width:"1.5em",height:"1.5em"}})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.sequence})}),e.jsx("td",{children:e.jsx(R,{status:s.status})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.dossier_type?s.dossier_type.value:""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.request_date?f(s.request_date).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.request_date?f(s.updated_at).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex justify-content-end flex-shrink-0",children:s.status=="draft"?e.jsx("a",{onClick:()=>i.get(route("publishing-initiate",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})}):s.status=="initiated"?e.jsx("a",{href:"#",onClick:()=>i.get(route("publishing-confirm",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})}):s.status=="submitted"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>i.post(route("progress-publishing",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>i.get(route("publishing-audit",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"pencil",className:"fs-3"})})]}):s.status=="to verify"?e.jsx(e.Fragment,{children:e.jsx("a",{href:"#",onClick:()=>i.get(route("publishing-audit",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"eye",className:"fs-3"})})}):s.status=="in progress"||s.status=="to correct"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>D(s._id,s.region,s.procedure),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"eye",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>k(s._id,s.form),"data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message_pub",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})})]}):s.status=="delivered"&&s.region?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>M(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}),e.jsx("button",{onClick:()=>S(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"cross-circle",className:"fs-3"})})]}):s.status=="completed"?e.jsx("button",{onClick:()=>C(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(n,{iconName:"check-circle",className:"fs-3"})}):""})})]},r)):""})]}),e.jsxs("div",{className:"row paginate_row",children:[e.jsx("div",{className:"col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start",children:e.jsx("div",{className:"dataTables_length",id:"kt_profile_overview_table_length",children:e.jsx("label",{children:e.jsxs("select",{name:"kt_profile_overview_table_length","aria-controls":"kt_profile_overview_table",className:"form-select form-select-sm form-select-solid",onChange:Y,children:[e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"10",selected:!0,children:"10"}),e.jsx("option",{value:"15",children:"15"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]})})})}),e.jsx("div",{className:"col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end",children:e.jsx("div",{className:"dataTables_paginate paging_simple_numbers",id:"kt_profile_overview_table_paginate",children:e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:b("paginate_button page-item previous",d===1?"disabled":""),id:"kt_profile_overview_table_previous",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:T,children:e.jsx("i",{className:"previous"})})}),N.map(s=>e.jsx("li",{className:d===s?"page-item active":"paginate_button page-item",children:e.jsxs("button",{onClick:()=>t(s),className:"page-link",children:[" ",s," "]})},s)),e.jsx("li",{className:b("paginate_button page-item next",d===u?"disabled":""),id:"kt_profile_overview_table_next",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:F,children:e.jsx("i",{className:"next"})})})]})})})]})]})})]}),e.jsx(K,{show:o.status,id:o.id,form:o.form})]})},$=U(I),B=c=>{const{formatting:o,publishing:p}=c;return l.useEffect(()=>{c.flash.message&&$.fire({title:e.jsx("p",{children:"Done !"}),icon:"success",text:c.flash.message})}),e.jsxs(e.Fragment,{children:[e.jsx(H,{data:o}),e.jsx(O,{data:p})]})};B.layout=c=>e.jsx(A,{children:c,auth:c.props.auth});export{B as default};
