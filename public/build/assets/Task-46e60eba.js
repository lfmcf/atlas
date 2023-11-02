import{r as l,j as e,h as n}from"./app-0cc293da.js";import{K as a,R as P,h as j,A as R}from"./AuthenticatedLayout-37778f36.js";import"./MetronicSplashScreen-cef8badd.js";import{c as g}from"./MenuComponent-55411be2.js";import{$ as L,w as E,S as I}from"./jquery.dataTables-421925f2.js";import{S as q}from"./StatusComponent-e19c63b2.js";import{D as H}from"./DeliveryMessage-7d6510b0.js";const K=({data:c})=>{const[o,h]=l.useState({status:!1,id:"",form:""}),[d,b]=l.useState(1),[i,f]=l.useState(),[v,N]=l.useState([]),[p,m]=l.useState(0),[_,A]=l.useState(10),x=l.useRef();l.useEffect(()=>{const t=L(x.current).DataTable({info:!1,order:[],pageLength:_});return m(t.page.info().pages),f(t),function(){t.destroy()}},[]),l.useEffect(()=>{let t=Array.from({length:p},(s,r)=>r+1);N(t)},[p]);const y=(t,s)=>{h({status:!o.status,id:t,form:s})},k=t=>{n.post(route("close-formatting"),{id:t})},C=t=>{n.get(route("formatting-verification"),{id:t})},S=t=>{n.get(route("show-formatting"),{id:t})},D=t=>{n.post(route("complete-formatting"),{id:t})},w=()=>{let t=i.page.info().page;b(t),i.page(t-1).draw("page")},T=()=>{let t=i.page.info().page+1;console.log(t),b(t+1),i.page(t).draw("page")},M=t=>{i.page.len(t.target.value).draw(),m(i.page.info().pages)},F=t=>{i.search(t.target.value).draw(),m(i.page.info().pages)},Y=t=>{let s=t.target.value;s==="all"&&(s=""),i.column(4).search(s).draw("page"),m(i.page.info().pages)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card mb-5",children:[e.jsxs("div",{className:"card-header border-0 pt-5",children:[e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Formatting List"})}),e.jsxs("div",{className:"card-toolbar",children:[e.jsx("div",{className:"text-muted fs-7",children:"Status"}),e.jsxs("select",{className:"form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible",onChange:Y,children:[e.jsx("option",{value:"all",children:"Show All"}),e.jsx("option",{value:"initiated",children:"Initiated"}),e.jsx("option",{value:"submitted",children:"Submitted"}),e.jsx("option",{value:"to verify",children:"To verify"}),e.jsx("option",{value:"delivered",children:"Delivered"}),e.jsx("option",{value:"to correct",children:"To correct"}),e.jsx("option",{value:"closed",children:"Closed"})]}),e.jsx("div",{className:"text-muted fs-7",children:"Dossier Type"}),e.jsx("select",{className:"form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible",children:e.jsx("option",{children:"Show All"})}),e.jsxs("div",{className:"d-flex align-items-center position-relative my-1",children:[e.jsx(a,{iconName:"magnifier",className:"fs-3 position-absolute ms-4"}),e.jsx("input",{type:"text",className:"form-control form-control-solid w-250px ps-12",placeholder:"Search",onChange:F})]})]})]}),e.jsx("div",{className:"card-body py-3",children:e.jsxs("div",{className:"table-responsive",children:[e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",ref:x,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-130px",children:"Last update"}),e.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),e.jsx("tbody",{children:c?Object.values(c).map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.product_name?t.product_name.value:""})}),e.jsx("td",{children:e.jsx(P,{countryCode:t.country.code,"aria-label":t.country.value,title:t.country.value,svg:!0,style:{width:"1.5em",height:"1.5em"}})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:"NA"})}),e.jsx("td",{children:e.jsx(q,{status:t.status})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.dossier_type?t.dossier_type.value:""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.request_date?j(t.request_date).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:t.request_date?j(t.updated_at).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex justify-content-end flex-shrink-0",children:t.status=="draft"?e.jsx("a",{href:"#",onClick:()=>n.get(route("formatting-initiate",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"pencil",className:"fs-3"})}):t.status=="initiated"?e.jsx("a",{href:"#",onClick:()=>n.get(route("formatting-confirm",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"pencil",className:"fs-3"})}):t.status=="submitted"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>n.post(route("progress-formatting",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>n.get(route("formatting-audit",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"pencil",className:"fs-3"})})]}):t.status=="to verify"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>n.post(route("confirm-formatting-out",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>n.get(route("formatting-audit",{id:t._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"pencil",className:"fs-3"})})]}):t.status=="in progress"||t.status=="to correct"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>S(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"eye",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>y(t._id,t.form),"data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"check-circle",className:"fs-3"})})]}):t.status=="delivered"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>D(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"check-circle",className:"fs-3"})}),e.jsx("button",{onClick:()=>C(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"cross-circle",className:"fs-3"})})]}):t.status=="completed"?e.jsx("button",{onClick:()=>k(t._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"check-circle",className:"fs-3"})}):""})})]},s)):""})]}),e.jsxs("div",{className:"row paginate_row",children:[e.jsx("div",{className:"col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start",children:e.jsx("div",{className:"dataTables_length",id:"kt_profile_overview_table_length",children:e.jsx("label",{children:e.jsxs("select",{name:"kt_profile_overview_table_length","aria-controls":"kt_profile_overview_table",className:"form-select form-select-sm form-select-solid",onChange:M,children:[e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"10",selected:!0,children:"10"}),e.jsx("option",{value:"15",children:"15"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]})})})}),e.jsx("div",{className:"col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end",children:e.jsx("div",{className:"dataTables_paginate paging_simple_numbers",id:"kt_profile_overview_table_paginate",children:e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:g("paginate_button page-item previous",d===1?"disabled":""),id:"kt_profile_overview_table_previous",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:w,children:e.jsx("i",{className:"previous"})})}),v.map(t=>e.jsx("li",{className:d===t?"page-item active":"paginate_button page-item",children:e.jsxs("button",{onClick:()=>pagination(t),className:"page-link",children:[" ",t," "]})},t)),e.jsx("li",{className:g("paginate_button page-item next",d===p?"disabled":""),id:"kt_profile_overview_table_next",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:T,children:e.jsx("i",{className:"next"})})})]})})})]})]})})]}),e.jsx(H,{show:o.status,id:o.id,form:o.form})]})},O=c=>{const[o,h]=l.useState(""),d=()=>{c.form=="Formatting"?n.post(route("diliver-formatting"),{id:c.id,comment:o}):n.post(route("deliver-publishing"),{id:c.id,comment:o})};return l.useEffect(()=>{h("")},[]),e.jsx("div",{className:g("modal fade",c.show?"show":""),id:"kt_modal_delivery_message_pub","aria-hidden":"true",style:{display:c.show?"block":"none"},children:e.jsx("div",{className:"modal-dialog mw-650px",children:e.jsxs("div",{className:"modal-content",children:[e.jsx("div",{className:"modal-header pb-0 border-0 justify-content-end",children:e.jsx("div",{className:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal",children:e.jsx(a,{iconName:"cross",className:"fs-1"})})}),e.jsxs("div",{className:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15",children:[e.jsx("div",{className:"text-center mb-13",children:e.jsx("h1",{className:"mb-3",children:"Delivery Comment"})}),e.jsxs("form",{onSubmit:d,children:[e.jsx("label",{className:"form-label",children:"Comment"}),e.jsx("textarea",{rows:3,className:"form-control",onChange:b=>h(b.target.value)})]}),e.jsxs("div",{className:"d-flex mt-5 justify-content-end",children:[e.jsx("a",{href:"#","data-bs-dismiss":"modal",className:"btn btn-sm btn-light-primary me-3",children:"Cancel"}),e.jsx("button",{onClick:d,className:"btn btn-sm btn-primary","data-bs-dismiss":"modal",children:"Send"})]})]})]})})})},U=({data:c})=>{const[o,h]=l.useState({status:!1,id:"",form:""}),[d,b]=l.useState(1),[i,f]=l.useState(),[v,N]=l.useState([]),[p,m]=l.useState(0),[_,A]=l.useState(10),x=l.useRef();l.useEffect(()=>{const s=L(x.current).DataTable({info:!1,order:[],pageLength:_});return m(s.page.info().pages),f(s),function(){s.destroy()}},[]),l.useEffect(()=>{let s=Array.from({length:p},(r,u)=>u+1);N(s)},[p]);const y=(s,r)=>{h({status:!o.status,id:s,form:r})},k=s=>{n.post(route("close-publishing"),{id:s})},C=s=>{n.get(route("publishing-verification"),{id:s})},S=(s,r,u)=>{r==="CH"?n.get(route("show-publishing-nat-ch"),{id:s}):r=="EU"&&u=="Mutual Recognition"||r=="EU"&&u=="Decentralized"?n.get(route("show-publishing-rmp"),{id:s}):n.get(route("show"),{id:s})},D=s=>{let r;return s==="Swissmedic"||s==null?r="CH":r=s.split("-")[0],r},w=s=>{n.post(route("complete-publishing"),{id:s})},T=()=>{let s=i.page.info().page;b(s),i.page(s-1).draw("page")},M=()=>{let s=i.page.info().page+1;console.log(s),b(s+1),i.page(s).draw("page")},F=s=>{i.page.len(s.target.value).draw(),m(i.page.info().pages)},Y=s=>{i.search(s.target.value).draw(),m(i.page.info().pages)},t=s=>{let r=s.target.value;r==="all"&&(r=""),i.column(4).search(r).draw("page"),m(i.page.info().pages)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card mb-5",children:[e.jsxs("div",{className:"card-header border-0 pt-5",children:[e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Publishing List"})}),e.jsxs("div",{className:"card-toolbar",children:[e.jsx("div",{className:"text-muted fs-7",children:"Status"}),e.jsxs("select",{className:"form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible",onChange:t,children:[e.jsx("option",{value:"all",children:"Show All"}),e.jsx("option",{value:"initiated",children:"Initiated"}),e.jsx("option",{value:"submitted",children:"Submitted"}),e.jsx("option",{value:"to verify",children:"To verify"}),e.jsx("option",{value:"delivered",children:"Delivered"}),e.jsx("option",{value:"to correct",children:"To correct"}),e.jsx("option",{value:"closed",children:"Closed"})]}),e.jsx("div",{className:"text-muted fs-7",children:"Dossier Type"}),e.jsx("select",{className:"form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible",children:e.jsx("option",{children:"Show All"})}),e.jsxs("div",{className:"d-flex align-items-center position-relative my-1",children:[e.jsx(a,{iconName:"magnifier",className:"fs-3 position-absolute ms-4"}),e.jsx("input",{type:"text",className:"form-control form-control-solid w-250px ps-12",placeholder:"Search",onChange:Y})]})]})]}),e.jsx("div",{className:"card-body py-3",children:e.jsxs("div",{className:"table-responsive",children:[e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",ref:x,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{className:"min-w-150px",children:"Product"}),e.jsx("th",{className:"min-w-140px",children:"Country"}),e.jsx("th",{className:"min-w-140px",children:"Sequence"}),e.jsx("th",{className:"min-w-130px",children:"Status"}),e.jsx("th",{className:"min-w-130px",children:"Dossier type"}),e.jsx("th",{className:"min-w-130px",children:"Request date"}),e.jsx("th",{className:"min-w-130px",children:"Last update"}),e.jsx("th",{className:"min-w-100px text-end",children:"Actions"})]})}),e.jsx("tbody",{children:c?Object.values(c).map((s,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:typeof s.product_name=="object"&&s.product_name?s.product_name.value:s.product_name})}),e.jsx("td",{children:typeof s.country=="object"&&s.country?e.jsx(e.Fragment,{children:e.jsx(P,{countryCode:s.country.code,"aria-label":s.country.value,title:s.country.value,svg:!0,style:{width:"1.5em",height:"1.5em"}})}):e.jsx(P,{countryCode:D(s.agency_code),"aria-label":s.country,title:s.country,svg:!0,style:{width:"1.5em",height:"1.5em"}})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.sequence})}),e.jsx("td",{children:e.jsx(q,{status:s.status})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.dossier_type?s.dossier_type.value:""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.request_date?j(s.request_date).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("span",{className:"fs-7",children:s.request_date?j(s.updated_at).format("DD-MMM-YYYY"):""})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex justify-content-end flex-shrink-0",children:s.status=="draft"?e.jsx("a",{onClick:()=>n.get(route("publishing-initiate",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"pencil",className:"fs-3"})}):s.status=="initiated"?e.jsx("a",{href:"#",onClick:()=>n.get(route("publishing-confirm",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"pencil",className:"fs-3"})}):s.status=="submitted"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>n.post(route("progress-publishing",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>n.get(route("publishing-audit",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"pencil",className:"fs-3"})})]}):s.status=="to verify"?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",onClick:()=>n.post(route("confirm-publishing-out",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"check-circle",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>n.get(route("publishing-audit",{id:s._id})),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"pencil",className:"fs-3"})})]}):s.status=="in progress"||s.status=="to correct"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>S(s._id,s.region,s.procedure),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"eye",className:"fs-3"})}),e.jsx("a",{href:"#",onClick:()=>y(s._id,s.form),"data-bs-toggle":"modal","data-bs-target":"#kt_modal_delivery_message_pub",className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"check-circle",className:"fs-3"})})]}):s.status=="delivered"&&s.region?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>w(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"check-circle",className:"fs-3"})}),e.jsx("button",{onClick:()=>C(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"cross-circle",className:"fs-3"})})]}):s.status=="completed"?e.jsx("button",{onClick:()=>k(s._id),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",children:e.jsx(a,{iconName:"check-circle",className:"fs-3"})}):""})})]},r)):""})]}),e.jsxs("div",{className:"row paginate_row",children:[e.jsx("div",{className:"col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start",children:e.jsx("div",{className:"dataTables_length",id:"kt_profile_overview_table_length",children:e.jsx("label",{children:e.jsxs("select",{name:"kt_profile_overview_table_length","aria-controls":"kt_profile_overview_table",className:"form-select form-select-sm form-select-solid",onChange:F,children:[e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"10",selected:!0,children:"10"}),e.jsx("option",{value:"15",children:"15"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]})})})}),e.jsx("div",{className:"col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end",children:e.jsx("div",{className:"dataTables_paginate paging_simple_numbers",id:"kt_profile_overview_table_paginate",children:e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:g("paginate_button page-item previous",d===1?"disabled":""),id:"kt_profile_overview_table_previous",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:T,children:e.jsx("i",{className:"previous"})})}),v.map(s=>e.jsx("li",{className:d===s?"page-item active":"paginate_button page-item",children:e.jsxs("button",{onClick:()=>pagination(s),className:"page-link",children:[" ",s," "]})},s)),e.jsx("li",{className:g("paginate_button page-item next",d===p?"disabled":""),id:"kt_profile_overview_table_next",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:M,children:e.jsx("i",{className:"next"})})})]})})})]})]})})]}),e.jsx(O,{show:o.status,id:o.id,form:o.form})]})},z=E(I),$=c=>{const{formatting:o,publishing:h}=c;return l.useEffect(()=>{c.flash.message&&z.fire({title:e.jsx("p",{children:"Done !"}),icon:"success",text:c.flash.message})}),e.jsxs(e.Fragment,{children:[e.jsx(K,{data:o}),e.jsx(U,{data:h})]})};$.layout=c=>e.jsx(R,{children:c,auth:c.props.auth});export{$ as default};
