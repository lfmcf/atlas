import{r as m,j as s,e as l}from"./app-c5668063.js";import"./MetronicSplashScreen-9b3248cc.js";import"./MenuComponent-d0def7cb.js";import{K as d}from"./AuthenticatedLayout-cd068142.js";import{c as o}from"./hoist-non-react-statics.cjs-1d8f9095.js";const j=e=>{const[a,t]=m.useState(""),i=()=>{e.form=="Formatting"?l.post(route("diliver-formatting"),{id:e.id,comment:a}):l.post(route("deliver-publishing"),{id:e.id,comment:a})};return m.useEffect(()=>{t("")},[]),s.jsx("div",{className:o("modal fade",e.show?"show":""),id:"kt_modal_delivery_message","aria-hidden":"true",style:{display:e.show?"block":"none"},children:s.jsx("div",{className:"modal-dialog mw-650px",children:s.jsxs("div",{className:"modal-content",children:[s.jsx("div",{className:"modal-header pb-0 border-0 justify-content-end",children:s.jsx("div",{className:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal",children:s.jsx(d,{iconName:"cross",className:"fs-1"})})}),s.jsxs("div",{className:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15",children:[s.jsx("div",{className:"text-center mb-13",children:s.jsx("h1",{className:"mb-3",children:"Delivery Comment"})}),s.jsxs("form",{onSubmit:i,children:[s.jsx("label",{className:"form-label",children:"Comment"}),s.jsx("textarea",{rows:3,className:"form-control",onChange:n=>t(n.target.value)})]}),s.jsxs("div",{className:"d-flex mt-5 justify-content-end",children:[s.jsx("a",{href:"#","data-bs-dismiss":"modal",className:"btn btn-sm btn-light-primary me-3",children:"Cancel"}),s.jsx("button",{onClick:i,className:"btn btn-sm btn-primary","data-bs-dismiss":"modal",children:"Send"})]})]})]})})})};export{j as D};
