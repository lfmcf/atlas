import{j as a,h as i}from"./app-44650d4d.js";import{c as l}from"./MenuComponent-1754c858.js";import{h as r,A as n}from"./AuthenticatedLayout-502b3239.js";import"./MetronicSplashScreen-43bf6ef7.js";const m=t=>{const o=t.auth.allNotifications,c=(s,e)=>{s.status=="closed"||s.status=="in progress"?i.get(route("list"),{id:s.id,notId:e}):i.get(route("tasks"),{id:s.id,notId:e})},d=()=>{axios.post("mark-all-as-read").then(s=>{console.log(s)})};return a.jsxs("div",{className:"text-align-center m-auto w-50",style:{backgroundColor:"white"},children:[a.jsx("div",{className:"scroll-y my-5 p-8",style:{maxHeight:"calc(100vh - 300px)"},children:o.map((s,e)=>a.jsxs("div",{className:l("d-flex flex-stack py-4 mb-1",s.read_at?"":"rounded bg-light-primary"),children:[a.jsx("div",{className:"d-flex align-items-center",children:a.jsxs("div",{className:"mb-0 ms-2 me-2",children:[a.jsxs("a",{href:"#",className:"fs-6 text-gray-800 text-hover-primary fw-bolder",onClick:()=>c(s.data,s.id),children:[s.data?s.data.title:"",a.jsx("span",{className:"fs-8 ps-2 fw-light",children:s.data.status})]}),a.jsxs("div",{className:"text-gray-400 fs-7",children:[s.data.product&&typeof s.data.product=="object"?s.data.product.value:s.data.product," - ",a.jsx("span",{children:s.data.country?s.data.country.code:""})]})]})}),a.jsx("span",{className:"badge badge-light fs-8",children:r(s.created_at).fromNow()})]},`alert${e}`))}),a.jsx("div",{className:"p-2",children:a.jsx("button",{className:"btn btn-color-primary",onClick:d,children:"Mark all as read"})})]})};m.layout=t=>a.jsx(n,{children:t,auth:t.props.auth});export{m as default};
