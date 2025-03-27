import{C as V,A as W,p as $,f as G,r as i,j as s,h as H,b as K}from"./app-85cb43ee.js";import{u as Q}from"./MetronicSplashScreen-1bb87bb1.js";import{A as U,$ as X,R as Z,S as ss}from"./AuthenticatedLayout-ef394a1f.js";import{w as es}from"./sweetalert2-react-content.es-4637ec6b.js";import{c as F,e as as,D as ls,_ as n,t as A}from"./en-e4fbe105.js";import{g as l}from"./MenuComponent-3b167d93.js";import"./jquery.dataTables-57e19342.js";import{c as T}from"./hoist-non-react-statics.cjs-1d8f9095.js";F.registerLocale(as);V.register(W,$,G);const ts=es(ss),is={chart:{fontFamily:"inherit"},cutoutPercentage:75,responsive:!0,maintainAspectRatio:!1,cutout:"75%",title:{display:!1},animation:{animateScale:!0,animateRotate:!0},tooltips:{enabled:!0,intersect:!1,mode:"nearest",bodySpacing:5,yPadding:10,xPadding:10,caretPadding:0,displayColors:!1,backgroundColor:"#20D489",titleFontColor:"#ffffff",cornerRadius:4,footerSpacing:0,titleSpacing:0},plugins:{legend:{display:!1}}},z={chart:{id:"basic-bar",fontFamily:"inherit",type:"bar",toolbar:{show:!1}},xaxis:{categories:["Jun","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:l("--bs-gray-500"),fontSize:"13px"}},crosshairs:{fill:{gradient:{opacityFrom:0,opacityTo:0}}}},yaxis:{labels:{style:{colors:l("--bs-gray-500"),fontSize:"13px"},formatter:function(e){return parseInt(e)+2}}},fill:{opacity:1},tooltip:{style:{fontSize:"12px"}},plotOptions:{bar:{horizontal:!1,columnWidth:"22%",borderRadius:5,dataLabels:{position:"top"}}},legend:{show:!1},dataLabels:{enabled:!0,offsetY:-30,style:{fontSize:"13px",colors:[l("--bs-gray-900")]},formatter:function(e){return e==0?"":e}},stroke:{show:!0,width:2,colors:["transparent"]},colors:[l("--bs-primary"),l("--bs-primary-light")],grid:{borderColor:l("--bs-border-dashed-color"),strokeDashArray:4,yaxis:{lines:{show:!0}}}};l("--bs-gray-800");l("--bs-border-dashed-color");const rs={series:[20,100,15,25],chart:{fontFamily:"inherit",type:"donut",width:250},plotOptions:{pie:{donut:{size:"50%",labels:{value:{fontSize:"10px"}}}}},colors:[l("--bs-info"),l("--bs-success"),l("--bs-primary"),l("--bs-danger")],stroke:{width:0},labels:["Approved","Change","Correction"],legend:{show:!1},fill:{type:"false"}},ns={chart:{type:"area",height:350,toolbar:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth",show:!0,width:3,colors:[l("--bs-primary"),l("--bs-success")]},xaxis:{categories:["Jun","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:l("--bs-gray-500"),fontSize:"12px"}},crosshairs:{position:"front",stroke:{color:l("--bs-primary"),width:1,dashArray:3}},tooltip:{enabled:!0,formatter:void 0,offsetY:0,style:{fontSize:"12px"}}},yaxis:{labels:{style:{colors:l("--bs-gray-500"),fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return e+" dossiers"}}},colors:[l("--bs-primary-light"),l("--bs-success-light")],grid:{borderColor:l("--bs-gray-200"),strokeDashArray:4,yaxis:{lines:{show:!0}}},markers:{colors:[l("--bs-primary-light"),l("--bs-success-light")],strokeColor:[l("--bs-primary"),l("--bs-success")],strokeWidth:3}},cs=({RequetNumber:e,totalRequet:h,PublishingCount:c,formattingCount:d,acceptance:p,correction:b,update:f,perMonthFor:g,perMonthPub:j,totalclosed:o,productCountry:v,totalPerType:u,totalPerTypeP:N})=>{const[w,_]=i.useState(new Date),[P,y]=i.useState(new Date),[r,m]=i.useState(1),[k,L]=i.useState([]),[C,E]=i.useState(0),[x,M]=i.useState(),D=i.useRef(),O={labels:["Formatting","Publishing","Submission"],datasets:[{data:[d,c,0],backgroundColor:["#00A3FF","#50CD89","#E4E6EF"]}]};i.useEffect(()=>{const a=X(D.current).DataTable({info:!1,order:[],pageLength:5});return E(a.page.info().pages),M(a),function(){a.destroy()}},[]),i.useEffect(()=>{let a=Array.from({length:C},(t,S)=>S+1);L(a)},[C]);const R=a=>{_(a),K.get("getFormByYear",{params:{year:a}}).then(t=>{console.log(t)})},I=a=>{m(a),x.page(a-1).draw("page")},J=()=>{let a=x.page.info().page;m(a),x.page(a-1).draw("page")},Y=()=>{let a=x.page.info().page+1;m(a+1),x.page(a).draw("page")},q={chart:{fontFamily:"inherit",type:"pie",width:"100%"},labels:u.cat,plotOptions:{pie:{dataLabels:{offset:-5}}},dataLabels:{formatter(a,t){return[t.w.globals.labels[t.seriesIndex],a.toFixed(1)+"%"]}},legend:{show:!1}},B={chart:{fontFamily:"inherit",type:"pie",width:"100%"},labels:N.cat,plotOptions:{pie:{dataLabels:{offset:-5}}},dataLabels:{formatter(a,t){return[t.w.globals.labels[t.seriesIndex],a.toFixed(1)+"%"]}},legend:{show:!1}};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"row g-5",children:[s.jsx("div",{className:"col-4",children:s.jsxs("div",{className:"card card-flush h-xl-100 h-100",children:[s.jsx("div",{className:"card-header rounded bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start h-250px",style:{backgroundImage:"url('storage/media/svg/shapes/top-green.png')"},"data-bs-theme":"light",children:s.jsxs("h3",{className:"card-title align-items-start flex-column text-white pt-15",children:[s.jsx("span",{className:"fw-bold fs-2x mb-3",children:"My Tasks"}),s.jsxs("div",{className:"fs-4 text-white",children:[s.jsx("span",{className:"opacity-75",children:"You have "}),s.jsxs("span",{className:"position-relative d-inline-block",children:[s.jsx("a",{href:"#",className:"link-white opacity-75-hover fw-bold d-block mb-1",onClick:()=>{H.get("tasks")},children:h}),s.jsx("span",{className:"position-absolute opacity-50 bottom-0 start-0 border-2 border-body border-bottom w-100"})]}),s.jsx("span",{className:"opacity-75",children:" to complete"})]})]})}),s.jsx("div",{className:"card-body mt-n5",children:s.jsx("div",{className:"mt-n20 position-relative",children:s.jsxs("div",{className:"row g-3 g-lg-6",children:[s.jsx("div",{className:"col-12",children:s.jsxs("div",{className:"bg-gray-100 d-flex justify-content-between bg-opacity-70 rounded-2 px-6 py-5",children:[s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("span",{className:"text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ",children:e[0].total}),s.jsx("span",{className:"text-gray-500 fw-semibold fs-6",children:e[0].status})]}),e[2]?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"vr text-gray-500"}),s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("span",{className:"text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ",children:e[2].total}),s.jsx("span",{className:"text-gray-500 fw-semibold fs-6",children:e[2].status})]})]}):""]})}),s.jsx("div",{className:"col-12",children:s.jsxs("div",{className:"bg-gray-100 d-flex justify-content-between bg-opacity-70 rounded-2 px-6 py-5",children:[s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("span",{className:"text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ",children:e[1].total}),s.jsx("span",{className:"text-gray-500 fw-semibold fs-6",children:e[1].status})]}),e[3]?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"vr text-gray-500"}),s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("span",{className:"text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ",children:e[3].total}),s.jsx("span",{className:"text-gray-500 fw-semibold fs-6",children:e[3].status})]})]}):""]})})]})})})]})}),s.jsx("div",{className:"col-lg-5",children:s.jsxs("div",{className:"card card-flush h-100",children:[s.jsx("div",{className:"card-header mt-6",children:s.jsx("div",{className:"card-title flex-column",children:s.jsx("h3",{className:"fw-bold mb-1",children:"Total Requests"})})}),s.jsx("div",{className:"card-body p-9 pt-5",children:s.jsxs("div",{className:"d-flex flex-wrap",children:[s.jsxs("div",{className:"position-relative d-flex flex-center h-175px w-175px me-15 mb-7",children:[s.jsxs("div",{className:"position-absolute translate-middle start-50 top-50 d-flex flex-column flex-center",children:[s.jsx("span",{className:"fs-2qx fw-bold",children:d+c}),s.jsx("span",{className:"fs-6 fw-semibold text-gray-400",children:"Total Req"})]}),s.jsx(ls,{data:O,options:is})]}),s.jsxs("div",{className:"d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5",children:[s.jsxs("div",{className:"d-flex fs-6 fw-semibold align-items-center mb-3",children:[s.jsx("div",{className:"bullet bg-primary me-3"}),s.jsx("div",{className:"text-gray-400",children:"Formatting"}),s.jsx("div",{className:"ms-auto fw-bold text-gray-700",children:d})]}),s.jsxs("div",{className:"d-flex fs-6 fw-semibold align-items-center mb-3",children:[s.jsx("div",{className:"bullet bg-success me-3"}),s.jsx("div",{className:"text-gray-400",children:"Publishing"}),s.jsx("div",{className:"ms-auto fw-bold text-gray-700",children:c})]}),s.jsxs("div",{className:"d-flex fs-6 fw-semibold align-items-center",children:[s.jsx("div",{className:"bullet bg-gray-300 me-3"}),s.jsx("div",{className:"text-gray-400",children:"Submission"}),s.jsx("div",{className:"ms-auto fw-bold text-gray-700",children:"0"})]})]})]})})]})}),s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"card h-xl-100",children:[s.jsx("div",{className:"card-header mb-5",children:s.jsx("h3",{className:"card-title align-items-center flex-column",children:s.jsx("span",{className:"card-label fw-bold text-gray-800",children:"Some subject"})})}),s.jsx("div",{className:"card-body pb-3",children:s.jsxs("div",{className:"d-flex flex-wrap flex-md-nowrap",children:[s.jsxs("div",{className:"me-md-5 w-100",children:[s.jsxs("div",{className:"d-flex border border-gray-300 border-dashed rounded p-6 mb-6",children:[s.jsxs("div",{className:"d-flex align-items-center flex-grow-1 me-2 me-sm-5",children:[s.jsx("div",{className:"symbol symbol-50px me-4",children:s.jsx("span",{className:"symbol-label",children:s.jsxs("i",{className:"ki-duotone ki-timer fs-2qx text-primary",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"}),s.jsx("span",{className:"path3"})]})})}),s.jsx("div",{className:"me-2",children:s.jsx("a",{href:"#",className:"text-gray-800 text-hover-primary fs-6 fw-bold",children:"Approved"})})]}),s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("span",{className:"text-dark fw-bolder fs-2x",children:p}),s.jsx("span",{className:"fw-semibold fs-2 text-gray-600 mx-1 pt-1",children:"/"}),s.jsx("span",{className:"text-gray-600 fw-semibold fs-2 me-3 pt-2",children:o}),s.jsx("span",{className:"badge badge-lg badge-light-success align-self-center px-2",children:"95%"})]})]}),s.jsxs("div",{className:"d-flex border border-gray-300 border-dashed rounded p-6 mb-6",children:[s.jsxs("div",{className:"d-flex align-items-center flex-grow-1 me-2 me-sm-5",children:[s.jsx("div",{className:"symbol symbol-50px me-4",children:s.jsx("span",{className:"symbol-label",children:s.jsxs("i",{className:"ki-duotone ki-element-11 fs-2qx text-primary",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"}),s.jsx("span",{className:"path3"}),s.jsx("span",{className:"path4"})]})})}),s.jsx("div",{className:"me-2",children:s.jsx("a",{href:"#",className:"text-gray-800 text-hover-primary fs-6 fw-bold",children:"Change"})})]}),s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("span",{className:"text-dark fw-bolder fs-2x",children:f}),s.jsx("span",{className:"fw-semibold fs-2 text-gray-600 mx-1 pt-1",children:"/"}),s.jsx("span",{className:"text-gray-600 fw-semibold fs-2 me-3 pt-2",children:o}),s.jsx("span",{className:"badge badge-lg badge-light-success align-self-center px-2",children:"92%"})]})]}),s.jsxs("div",{className:"d-flex border border-gray-300 border-dashed rounded p-6 mb-6",children:[s.jsxs("div",{className:"d-flex align-items-center flex-grow-1 me-2 me-sm-5",children:[s.jsx("div",{className:"symbol symbol-50px me-4",children:s.jsx("span",{className:"symbol-label",children:s.jsxs("i",{className:"ki-duotone ki-abstract-24 fs-2qx text-primary",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"})]})})}),s.jsx("div",{className:"me-2",children:s.jsx("a",{href:"#",className:"text-gray-800 text-hover-primary fs-6 fw-bold",children:"Correction"})})]}),s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("span",{className:"text-dark fw-bolder fs-2x",children:b}),s.jsx("span",{className:"fw-semibold fs-2 text-gray-600 mx-1 pt-1",children:"/"}),s.jsx("span",{className:"text-gray-600 fw-semibold fs-2 me-3 pt-2",children:o}),s.jsx("span",{className:"badge badge-lg badge-light-warning align-self-center px-2",children:"80%"})]})]})]}),s.jsxs("div",{className:"d-flex justify-content-between flex-column w-225px w-md-600px mx-auto mx-md-0 pt-3 pb-10",children:[s.jsx(n,{options:rs,series:[p,f,b],type:"donut"}),s.jsxs("div",{className:"mx-auto",children:[s.jsxs("div",{className:"d-flex align-items-center mb-2",children:[s.jsx("div",{className:"bullet bullet-dot w-8px h-7px bg-success me-2"}),s.jsx("div",{className:"fs-8 fw-semibold text-muted",children:"Change"})]}),s.jsxs("div",{className:"d-flex align-items-center mb-2",children:[s.jsx("div",{className:"bullet bullet-dot w-8px h-7px bg-primary me-2"}),s.jsx("div",{className:"fs-8 fw-semibold text-muted",children:"Correction"})]}),s.jsxs("div",{className:"d-flex align-items-center mb-2",children:[s.jsx("div",{className:"bullet bullet-dot w-8px h-7px bg-info me-2"}),s.jsx("div",{className:"fs-8 fw-semibold text-muted",children:"Approved"})]})]})]})]})})]})}),s.jsx("div",{className:"col-6",children:s.jsxs("div",{className:"card card-flush h-lg-100",children:[s.jsxs("div",{className:"card-header py-7 mb-3",children:[s.jsx("h3",{className:"card-title align-items-start flex-column",children:s.jsx("span",{className:"card-label fw-bold text-gray-800",children:"Doosier per type"})}),s.jsx("div",{className:"card-toolbar m-0",children:s.jsxs("ul",{className:"nav nav-pills nav-pills-custom",role:"tablist",children:[s.jsx("li",{className:"nav-item mb-3 me-3 me-lg-6",children:s.jsx("a",{className:"nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-60px h-60px pt-5 pb-2 active","data-bs-toggle":"tab",href:"#kt_charts_widget_11_tab_content_1",children:s.jsxs("div",{className:"nav-icon mb-2",children:[s.jsxs("i",{className:"ki-duotone ki-ship fs-4 p-0",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"}),s.jsx("span",{className:"path3"})]}),s.jsx("span",{className:"nav-text text-gray-800 fw-bold fs-9 lh-1",children:"Formatting"}),s.jsx("span",{className:"bullet-custom position-absolute bottom-0 w-100 h-2px bg-primary"})]})})}),s.jsx("li",{className:"nav-item mb-3 me-3 me-lg-6",children:s.jsx("a",{className:"nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-60px h-60px pt-5 pb-2","data-bs-toggle":"tab",href:"#kt_charts_widget_12_tab_content_2",children:s.jsxs("div",{className:"nav-icon mb-2",children:[s.jsxs("i",{className:"ki-duotone ki-ship fs-4 p-0",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"}),s.jsx("span",{className:"path3"})]}),s.jsx("span",{className:"nav-text text-gray-800 fw-bold fs-9 lh-1",children:"Publishing"}),s.jsx("span",{className:"bullet-custom position-absolute bottom-0 w-100 h-2px bg-primary"})]})})})]})})]}),s.jsx("div",{className:"card-body py-0 ps-6 mt-n12",children:s.jsxs("div",{className:"tab-content ps-4 pe-6",children:[s.jsx("div",{className:"tab-pane fade active show",id:"kt_charts_widget_11_tab_content_1",children:s.jsx(n,{options:q,series:u.data,type:"pie",height:300})}),s.jsx("div",{className:"tab-pane fade",id:"kt_charts_widget_12_tab_content_2",children:s.jsx(n,{options:B,series:N.data,type:"pie",height:300})})]})})]})}),s.jsx("div",{className:"col-lg-6 col-md-6 mb-5 mb-xl-10",children:s.jsxs("div",{className:"card card-flush h-xxl-100 h-lg-100",children:[s.jsxs("div",{className:"card-header pt-7",children:[s.jsxs("h3",{className:"card-title align-items-start flex-column",children:[s.jsx("span",{className:"card-label fw-bold text-gray-800",children:"Requests per month"}),s.jsx("span",{className:"text-gray-400 mt-1 fw-semibold fs-6",children:"18"})]}),s.jsx("div",{className:"card-toolbar",children:s.jsx(A,{dateFormat:"yyyy",showYearPicker:!0,selected:P,onChange:a=>y(a),className:"form-select form-select-solid form-select-sm fw-bold w-100px",yearItemNumber:6})})]}),s.jsxs("div",{className:"card-body d-flex flex-column justify-content-between pb-5 px-0",children:[s.jsxs("ul",{className:"nav nav-pills nav-pills-custom mb-3 mx-9",role:"tablist",children:[s.jsx("li",{className:"nav-item mb-3 me-3 me-lg-6",children:s.jsx("a",{className:"nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active","data-bs-toggle":"tab",href:"#kt_charts_widget_10_tab_content_1",children:s.jsxs("div",{className:"nav-icon mb-3",children:[s.jsxs("i",{className:"ki-duotone ki-ship fs-1 p-0",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"}),s.jsx("span",{className:"path3"})]}),s.jsx("span",{className:"nav-text text-gray-800 fw-bold fs-6 lh-1",children:"Formatting"}),s.jsx("span",{className:"bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"})]})})}),s.jsx("li",{className:"nav-item mb-3 me-3 me-lg-6",children:s.jsx("a",{className:"nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2","data-bs-toggle":"tab",href:"#kt_charts_widget_10_tab_content_2",children:s.jsxs("div",{className:"nav-icon mb-3",children:[s.jsxs("i",{className:"ki-duotone ki-ship fs-1 p-0",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"}),s.jsx("span",{className:"path3"})]}),s.jsx("span",{className:"nav-text text-gray-800 fw-bold fs-6 lh-1",children:"Publishing"}),s.jsx("span",{className:"bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"})]})})})]}),s.jsxs("div",{className:"tab-content ps-4 pe-6",children:[s.jsx("div",{className:"tab-pane fade active show",id:"kt_charts_widget_10_tab_content_1",children:s.jsx(n,{options:z,series:[{name:"Formatting",data:g}],type:"bar",height:270})}),s.jsx("div",{className:"tab-pane fade",id:"kt_charts_widget_10_tab_content_2",children:s.jsx(n,{options:z,series:[{name:"Publishing",data:j}],type:"bar",height:270})})]})]})]})}),s.jsx("div",{className:"col-lg-6 col-md-6 mb-5 mb-xl-10",children:s.jsxs("div",{className:"card card-flush h-lg-100",children:[s.jsxs("div",{className:"card-header mt-6",children:[s.jsxs("div",{className:"card-title flex-column",children:[s.jsx("h3",{className:"fw-bold mb-1",children:"Tasks Over Time"}),s.jsxs("div",{className:"fs-6 d-flex text-gray-400 fs-6 fw-semibold",children:[s.jsxs("div",{className:"d-flex align-items-center me-6",children:[s.jsx("span",{className:"menu-bullet d-flex align-items-center me-2",children:s.jsx("span",{className:"bullet bg-success"})}),"Formatting"]}),s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("span",{className:"menu-bullet d-flex align-items-center me-2",children:s.jsx("span",{className:"bullet bg-primary"})}),"Publishing"]})]})]}),s.jsx("div",{className:"card-toolbar",children:s.jsx(A,{dateFormat:"yyyy",showYearPicker:!0,selected:w,onChange:R,className:"form-select form-select-solid form-select-sm fw-bold w-100px",yearItemNumber:6})})]}),s.jsx("div",{className:"card-body pt-10 pb-0 px-5",children:s.jsx(n,{options:ns,series:[{name:"Formatting",data:g},{name:"Publishing",data:j}],type:"area"})})]})}),s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"card card-flush h-lg-100",children:[s.jsx("div",{className:"card-header pt-7 mb-5",children:s.jsx("h3",{className:"card-title align-items-start flex-column",children:s.jsx("span",{className:"card-label fw-bold text-gray-800",children:"Product by country"})})}),s.jsx("div",{className:"card-body pt-0",children:s.jsxs("div",{className:"table-responsive",children:[s.jsxs("table",{className:"table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4",ref:D,children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Country"}),s.jsx("th",{children:"Produit"}),s.jsx("th",{children:"Formatting"}),s.jsx("th",{children:"Publishing"})]})}),s.jsx("tbody",{children:v.map((a,t)=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("div",{className:"symbol symbol-45px me-2",children:s.jsx(Z,{countryCode:F.getAlpha2Code(a.cnt,"en"),svg:!0,style:{width:"2em",height:"2em"}})}),s.jsxs("div",{className:"d-flex justify-content-start flex-column",children:[s.jsx("span",{className:"text-dark fw-bold text-hover-primary fs-6",children:a.cnt}),s.jsx("span",{className:"text-muted fw-semibold text-muted d-block fs-7",children:F.getAlpha2Code(a.cnt,"en")})]})]})}),s.jsx("td",{children:s.jsx("span",{className:"text-gray-700 fw-bold fs-6 me-3 d-block",children:a.pr})}),s.jsx("td",{children:s.jsx("span",{className:"text-gray-500 fw-bold fs-6 me-3 d-block",children:a.formatting})}),s.jsx("td",{children:s.jsx("span",{className:"text-gray-500 fw-bold fs-6 me-3 d-block",children:a.publishing})})]},t))})]}),s.jsx("div",{className:"row paginate_row",children:s.jsx("div",{className:"col-12 col-md-12 d-flex align-items-center justify-content-end justify-content-md-end",children:s.jsx("div",{className:"dataTables_paginate paging_simple_numbers",id:"kt_profile_overview_table_paginate",children:s.jsxs("ul",{className:"pagination",children:[s.jsx("li",{className:T("paginate_button page-item previous",r===1?"disabled":""),id:"kt_profile_overview_table_previous",children:s.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:J,children:s.jsx("i",{className:"previous"})})}),k.map(a=>s.jsx("li",{className:r===a?"page-item active":"paginate_button page-item",children:s.jsxs("button",{onClick:()=>I(a),className:"page-link",children:[" ",a," "]})},a)),s.jsx("li",{className:T("paginate_button page-item next",r===C?"disabled":""),id:"kt_profile_overview_table_next",children:s.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:Y,children:s.jsx("i",{className:"next"})})})]})})})})]})})]})})]})})},ds=e=>{var y,r;const h=e.RequestNumber,c=e.formattingCount,d=e.publishingCount,p=e.acceptance,b=e.correction,f=e.update,g=e.perMonthFor,j=e.perMonthPub,o=Object.values(h).reduce((m,k)=>m+k.total,0),v=e.totalclosed,u=e.productCountry,N=e.totalPerType,w=e.totalPerTypeP;i.useEffect(()=>{e.flash.message&&ts.fire({title:s.jsx("p",{children:"Done !"}),icon:"success",text:e.flash.message})},[]);const{config:_,classes:P}=Q();return(r=(y=_.app)==null?void 0:y.toolbar)!=null&&r.display?s.jsx(s.Fragment,{children:s.jsx(cs,{RequetNumber:h,totalRequet:o,formattingCount:c,PublishingCount:d,acceptance:p,correction:b,update:f,perMonthFor:g,perMonthPub:j,totalclosed:v,productCountry:u,totalPerType:N,totalPerTypeP:w})}):null};ds.layout=e=>s.jsx(U,{children:e,auth:e.props.auth});export{ds as default};
