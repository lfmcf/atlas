import{r as l,j as s,c as m}from"./app-f118c7ac.js";import"./MetronicSplashScreen-8bdd2845.js";import{c as d}from"./MenuComponent-1f587a38.js";import{K as o}from"./AuthenticatedLayout-599d61fa.js";const h=e=>{const[a,t]=l.useState(""),i=()=>{e.form=="Formatting"?m.post(route("diliver-formatting"),{id:e.id,comment:a}):m.post(route("deliverpublishing"),{id:e.id,comment:a})};return l.useEffect(()=>{t("")},[]),s.jsx("div",{className:d("modal fade",e.show?"show":""),id:"kt_modal_delivery_message","aria-hidden":"true",style:{display:e.show?"block":"none"},children:s.jsx("div",{className:"modal-dialog mw-650px",children:s.jsxs("div",{className:"modal-content",children:[s.jsx("div",{className:"modal-header pb-0 border-0 justify-content-end",children:s.jsx("div",{className:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal",children:s.jsx(o,{iconName:"cross",className:"fs-1"})})}),s.jsxs("div",{className:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15",children:[s.jsx("div",{className:"text-center mb-13",children:s.jsx("h1",{className:"mb-3",children:"Delivery Comment"})}),s.jsxs("form",{onSubmit:i,children:[s.jsx("label",{className:"form-label",children:"Comment"}),s.jsx("textarea",{rows:3,className:"form-control",onChange:n=>t(n.target.value)})]}),s.jsxs("div",{className:"d-flex mt-5 justify-content-end",children:[s.jsx("a",{href:"#","data-bs-dismiss":"modal",className:"btn btn-sm btn-light-primary me-3",children:"Cancel"}),s.jsx("button",{onClick:i,className:"btn btn-sm btn-primary","data-bs-dismiss":"modal",children:"Send"})]})]})]})})})};export{h as D};