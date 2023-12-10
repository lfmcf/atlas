import{C as B,A as W,p as V,c as $,r as i,j as e,e as G,b as H}from"./app-c5668063.js";import{u as K}from"./MetronicSplashScreen-9b3248cc.js";import{A as Q,$ as U,R as X,S as Z}from"./AuthenticatedLayout-cd068142.js";import{w as ee}from"./jquery.dataTables-f098f066.js";import{c as A,e as se,D as ae,t as P,_ as n}from"./en-48260d3c.js";import{g as t}from"./MenuComponent-d0def7cb.js";import{c as z}from"./hoist-non-react-statics.cjs-1d8f9095.js";A.registerLocale(se);B.register(W,V,$);const te=ee(Z),le={chart:{fontFamily:"inherit"},cutoutPercentage:75,responsive:!0,maintainAspectRatio:!1,cutout:"75%",title:{display:!1},animation:{animateScale:!0,animateRotate:!0},tooltips:{enabled:!0,intersect:!1,mode:"nearest",bodySpacing:5,yPadding:10,xPadding:10,caretPadding:0,displayColors:!1,backgroundColor:"#20D489",titleFontColor:"#ffffff",cornerRadius:4,footerSpacing:0,titleSpacing:0},plugins:{legend:{display:!1}}},ie={chart:{id:"basic-bar",fontFamily:"inherit",type:"bar",toolbar:{show:!1}},xaxis:{categories:["Jun","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t("--bs-gray-500"),fontSize:"13px"}},crosshairs:{fill:{gradient:{opacityFrom:0,opacityTo:0}}}},yaxis:{labels:{style:{colors:t("--bs-gray-500"),fontSize:"13px"},formatter:function(s){return parseInt(s)+2}}},fill:{opacity:1},tooltip:{style:{fontSize:"12px"}},plotOptions:{bar:{horizontal:!1,columnWidth:"22%",borderRadius:5,dataLabels:{position:"top"}}},legend:{show:!1},dataLabels:{enabled:!0,offsetY:-30,style:{fontSize:"13px",colors:[t("--bs-gray-900")]},formatter:function(s){return s==0?"":s}},stroke:{show:!0,width:2,colors:["transparent"]},colors:[t("--bs-success"),t("--bs-success-light")],grid:{borderColor:t("--bs-border-dashed-color"),strokeDashArray:4,yaxis:{lines:{show:!0}}}},re={chart:{id:"basic-bar",fontFamily:"inherit",type:"bar",toolbar:{show:!1}},xaxis:{categories:["Jun","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t("--bs-gray-500"),fontSize:"13px"}},crosshairs:{fill:{gradient:{opacityFrom:0,opacityTo:0}}}},yaxis:{labels:{style:{colors:t("--bs-gray-500"),fontSize:"13px"},formatter:function(s){return parseInt(s)+2}}},fill:{opacity:1},tooltip:{style:{fontSize:"12px"}},plotOptions:{bar:{horizontal:!1,columnWidth:"22%",borderRadius:5,dataLabels:{position:"top"}}},legend:{show:!1},dataLabels:{enabled:!0,offsetY:-30,style:{fontSize:"13px",colors:[t("--bs-gray-900")]},formatter:function(s){return s==0?"":s}},stroke:{show:!0,width:2,colors:["transparent"]},colors:[t("--bs-primary"),t("--bs-primary-light")],grid:{borderColor:t("--bs-border-dashed-color"),strokeDashArray:4,yaxis:{lines:{show:!0}}}};t("--bs-gray-800");t("--bs-border-dashed-color");const ne={series:[20,100,15,25],chart:{fontFamily:"inherit",type:"donut",width:250},plotOptions:{pie:{donut:{size:"50%",labels:{value:{fontSize:"10px"}}}}},colors:[t("--bs-info"),t("--bs-success"),t("--bs-primary"),t("--bs-danger")],stroke:{width:0},labels:["Approved","Change","Correction"],legend:{show:!1},fill:{type:"false"}},ce={chart:{type:"area",height:350,toolbar:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth",show:!0,width:3,colors:[t("--bs-primary"),t("--bs-success")]},xaxis:{categories:["Jun","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t("--bs-gray-500"),fontSize:"12px"}},crosshairs:{position:"front",stroke:{color:t("--bs-primary"),width:1,dashArray:3}},tooltip:{enabled:!0,formatter:void 0,offsetY:0,style:{fontSize:"12px"}}},yaxis:{labels:{style:{colors:t("--bs-gray-500"),fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(s){return s+" dossiers"}}},colors:[t("--bs-primary-light"),t("--bs-success-light")],grid:{borderColor:t("--bs-gray-200"),strokeDashArray:4,yaxis:{lines:{show:!0}}},markers:{colors:[t("--bs-primary-light"),t("--bs-success-light")],strokeColor:[t("--bs-primary"),t("--bs-success")],strokeWidth:3}},oe=({RequetNumber:s,totalRequet:p,PublishingCount:c,formattingCount:o,acceptance:b,correction:f,update:g,perMonthFor:j,perMonthPub:u,totalclosed:d,productCountry:v,totalPerType:y,totalPerTypeP:N})=>{const[w,_]=i.useState(new Date),[k,m]=i.useState(new Date),[r,x]=i.useState(1),[C,T]=i.useState([]),[S,L]=i.useState(0),[h,M]=i.useState(),D=i.useRef(),R={labels:["Formatting","Publishing","Submission"],datasets:[{data:[o,c,0],backgroundColor:["#00A3FF","#50CD89","#E4E6EF"]}]};i.useEffect(()=>{const a=U(D.current).DataTable({info:!1,order:[],pageLength:5});return L(a.page.info().pages),M(a),function(){a.destroy()}},[]),i.useEffect(()=>{let a=Array.from({length:S},(l,F)=>F+1);T(a)},[S]);const q=a=>{_(a),H.get("getFormByYear",{params:{year:a}}).then(l=>{console.log(l)})},E=a=>{x(a),h.page(a-1).draw("page")},J=()=>{let a=h.page.info().page;x(a),h.page(a-1).draw("page")},O=()=>{let a=h.page.info().page+1;x(a+1),h.page(a).draw("page")},I={chart:{fontFamily:"inherit",type:"pie",width:"100%"},labels:y.cat,plotOptions:{pie:{dataLabels:{offset:-5}}},dataLabels:{formatter(a,l){return[l.w.globals.labels[l.seriesIndex],a.toFixed(1)+"%"]}},legend:{show:!1}},Y={chart:{fontFamily:"inherit",type:"pie",width:"100%"},labels:N.cat,plotOptions:{pie:{dataLabels:{offset:-5}}},dataLabels:{formatter(a,l){return[l.w.globals.labels[l.seriesIndex],a.toFixed(1)+"%"]}},legend:{show:!1}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"row g-5",children:[e.jsx("div",{className:"col-4",children:e.jsxs("div",{className:"card card-flush h-xl-100 h-100",children:[e.jsx("div",{className:"card-header rounded bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start h-250px",style:{backgroundImage:"url('storage/media/svg/shapes/top-green.png')"},"data-bs-theme":"light",children:e.jsxs("h3",{className:"card-title align-items-start flex-column text-white pt-15",children:[e.jsx("span",{className:"fw-bold fs-2x mb-3",children:"My Tasks"}),e.jsxs("div",{className:"fs-4 text-white",children:[e.jsx("span",{className:"opacity-75",children:"You have "}),e.jsxs("span",{className:"position-relative d-inline-block",children:[e.jsx("a",{href:"#",className:"link-white opacity-75-hover text-warning fw-bold d-block mb-1",onClick:()=>{G.get("tasks")},children:p}),e.jsx("span",{className:"position-absolute opacity-50 bottom-0 start-0 border-2 border-body border-bottom w-100"})]}),e.jsx("span",{className:"opacity-75",children:" to complete"})]})]})}),e.jsx("div",{className:"card-body mt-n5",children:e.jsx("div",{className:"mt-n20 position-relative",children:e.jsxs("div",{className:"row g-3 g-lg-6",children:[e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"bg-gray-100 d-flex justify-content-between bg-opacity-70 rounded-2 px-6 py-5",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:"text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ",children:s[0].total}),e.jsx("span",{className:"text-gray-500 fw-semibold fs-6",children:s[0].status})]}),s[2]?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"vr text-gray-500"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:"text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ",children:s[2].total}),e.jsx("span",{className:"text-gray-500 fw-semibold fs-6",children:s[2].status})]})]}):""]})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"bg-gray-100 d-flex justify-content-between bg-opacity-70 rounded-2 px-6 py-5",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:"text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ",children:s[1].total}),e.jsx("span",{className:"text-gray-500 fw-semibold fs-6",children:s[1].status})]}),s[3]?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"vr text-gray-500"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:"text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ",children:s[3].total}),e.jsx("span",{className:"text-gray-500 fw-semibold fs-6",children:s[3].status})]})]}):""]})})]})})})]})}),e.jsx("div",{className:"col-lg-3",children:e.jsxs("div",{className:"card card-flush h-100",children:[e.jsx("div",{className:"card-header mt-6",children:e.jsx("div",{className:"card-title flex-column",children:e.jsx("h3",{className:"fw-bold mb-1",children:"Total requests"})})}),e.jsx("div",{className:"card-body p-9 pt-5",children:e.jsxs("div",{className:"d-flex flex-wrap justify-content-center",children:[e.jsxs("div",{className:"position-relative d-flex flex-center h-175px w-175px mb-7",children:[e.jsxs("div",{className:"position-absolute translate-middle start-50 top-50 d-flex flex-column flex-center",children:[e.jsx("span",{className:"fs-2qx fw-bold",children:o+c}),e.jsx("span",{className:"fs-6 fw-semibold text-gray-400",children:"Total Req"})]}),e.jsx(ae,{data:R,options:le})]}),e.jsxs("div",{className:"d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5",children:[e.jsxs("div",{className:"d-flex fs-6 fw-semibold align-items-center mb-3",children:[e.jsx("div",{className:"bullet bg-primary me-3"}),e.jsx("div",{className:"text-gray-400",children:"Formatting"}),e.jsx("div",{className:"ms-auto fw-bold text-gray-700",children:o})]}),e.jsxs("div",{className:"d-flex fs-6 fw-semibold align-items-center mb-3",children:[e.jsx("div",{className:"bullet bg-success me-3"}),e.jsx("div",{className:"text-gray-400",children:"Publishing"}),e.jsx("div",{className:"ms-auto fw-bold text-gray-700",children:c})]}),e.jsxs("div",{className:"d-flex fs-6 fw-semibold align-items-center",children:[e.jsx("div",{className:"bullet bg-gray-300 me-3"}),e.jsx("div",{className:"text-gray-400",children:"Submission"}),e.jsx("div",{className:"ms-auto fw-bold text-gray-700",children:"0"})]})]})]})})]})}),e.jsx("div",{className:"col-5",children:e.jsxs("div",{className:"card card-flush h-lg-100",children:[e.jsxs("div",{className:"card-header py-7 mb-3",children:[e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold text-gray-800",children:"Request per type"})}),e.jsxs("div",{className:"card-toolbar m-0",children:[e.jsxs("ul",{className:"nav nav-pills nav-pills-custom",role:"tablist",children:[e.jsx("li",{className:"nav-item mb-3 me-3 me-lg-6",children:e.jsx("a",{className:"nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-60px h-60px pt-5 pb-2 active","data-bs-toggle":"tab",href:"#kt_charts_widget_11_tab_content_1",children:e.jsxs("div",{className:"nav-icon mb-2",children:[e.jsxs("i",{className:"ki-duotone ki-ship fs-4 p-0",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"}),e.jsx("span",{className:"path3"})]}),e.jsx("span",{className:"nav-text text-gray-800 fw-bold fs-9 lh-1",children:"Formatting"}),e.jsx("span",{className:"bullet-custom position-absolute bottom-0 w-100 h-2px bg-primary"})]})})}),e.jsx("li",{className:"nav-item mb-3 me-3 me-lg-6",children:e.jsx("a",{className:"nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-60px h-60px pt-5 pb-2","data-bs-toggle":"tab",href:"#kt_charts_widget_12_tab_content_2",children:e.jsxs("div",{className:"nav-icon mb-2",children:[e.jsxs("i",{className:"ki-duotone ki-ship fs-4 p-0",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"}),e.jsx("span",{className:"path3"})]}),e.jsx("span",{className:"nav-text text-gray-800 fw-bold fs-9 lh-1",children:"Publishing"}),e.jsx("span",{className:"bullet-custom position-absolute bottom-0 w-100 h-2px bg-primary"})]})})})]}),e.jsx(P,{dateFormat:"yyyy",showYearPicker:!0,selected:k,onChange:a=>m(a),className:"form-select form-select-solid form-select-sm fw-bold w-100px",yearItemNumber:6})]})]}),e.jsx("div",{className:"card-body py-0 ps-6 mt-2",children:e.jsxs("div",{className:"tab-content ps-4 pe-6",children:[e.jsx("div",{className:"tab-pane fade active show",id:"kt_charts_widget_11_tab_content_1",children:e.jsx(n,{options:I,series:y.data,type:"pie",height:300})}),e.jsx("div",{className:"tab-pane fade",id:"kt_charts_widget_12_tab_content_2",children:e.jsx(n,{options:Y,series:N.data,type:"pie",height:300})})]})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"card h-xl-100",children:[e.jsx("div",{className:"card-header mb-5",children:e.jsx("h3",{className:"card-title align-items-center flex-column",children:e.jsx("span",{className:"card-label fw-bold text-gray-800",children:"Request review"})})}),e.jsx("div",{className:"card-body pb-3",children:e.jsxs("div",{className:"d-flex flex-wrap flex-md-nowrap",children:[e.jsxs("div",{className:"me-md-5 w-100",children:[e.jsxs("div",{className:"d-flex border border-gray-300 border-dashed rounded p-6 mb-6",children:[e.jsxs("div",{className:"d-flex align-items-center flex-grow-1 me-2 me-sm-5",children:[e.jsx("div",{className:"symbol symbol-50px me-4",children:e.jsx("span",{className:"symbol-label",children:e.jsxs("i",{className:"ki-duotone ki-shield-tick fs-2qx text-primary",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})})}),e.jsx("div",{className:"me-2",children:e.jsx("a",{href:"#",className:"text-gray-800 text-hover-primary fs-6 fw-bold",children:"Approved"})})]}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:"text-dark fw-bolder fs-2x",children:b}),e.jsx("span",{className:"fw-semibold fs-2 text-gray-600 mx-1 pt-1",children:"/"}),e.jsx("span",{className:"text-gray-600 fw-semibold fs-2 me-3 pt-2",children:d})]})]}),e.jsxs("div",{className:"d-flex border border-gray-300 border-dashed rounded p-6 mb-6",children:[e.jsxs("div",{className:"d-flex align-items-center flex-grow-1 me-2 me-sm-5",children:[e.jsx("div",{className:"symbol symbol-50px me-4",children:e.jsx("span",{className:"symbol-label",children:e.jsxs("i",{className:"ki-duotone ki-shield fs-2qx text-primary",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})})}),e.jsx("div",{className:"me-2",children:e.jsx("a",{href:"#",className:"text-gray-800 text-hover-primary fs-6 fw-bold",children:"Change"})})]}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:"text-dark fw-bolder fs-2x",children:g}),e.jsx("span",{className:"fw-semibold fs-2 text-gray-600 mx-1 pt-1",children:"/"}),e.jsx("span",{className:"text-gray-600 fw-semibold fs-2 me-3 pt-2",children:d})]})]}),e.jsxs("div",{className:"d-flex border border-gray-300 border-dashed rounded p-6 mb-6",children:[e.jsxs("div",{className:"d-flex align-items-center flex-grow-1 me-2 me-sm-5",children:[e.jsx("div",{className:"symbol symbol-50px me-4",children:e.jsx("span",{className:"symbol-label",children:e.jsxs("i",{className:"ki-duotone ki-shield-cross fs-2qx text-primary",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"})]})})}),e.jsx("div",{className:"me-2",children:e.jsx("a",{href:"#",className:"text-gray-800 text-hover-primary fs-6 fw-bold",children:"Correction"})})]}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:"text-dark fw-bolder fs-2x",children:f}),e.jsx("span",{className:"fw-semibold fs-2 text-gray-600 mx-1 pt-1",children:"/"}),e.jsx("span",{className:"text-gray-600 fw-semibold fs-2 me-3 pt-2",children:d})]})]})]}),e.jsxs("div",{className:"d-flex justify-content-between flex-column w-225px w-md-600px mx-auto mx-md-0 pt-3 pb-10",children:[e.jsx(n,{options:ne,series:[b,g,f],type:"donut"}),e.jsxs("div",{className:"mx-auto",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"bullet bullet-dot w-8px h-7px bg-success me-2"}),e.jsx("div",{className:"fs-8 fw-semibold text-muted",children:"Change"})]}),e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"bullet bullet-dot w-8px h-7px bg-primary me-2"}),e.jsx("div",{className:"fs-8 fw-semibold text-muted",children:"Correction"})]}),e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"bullet bullet-dot w-8px h-7px bg-info me-2"}),e.jsx("div",{className:"fs-8 fw-semibold text-muted",children:"Approved"})]})]})]})]})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"card card-flush h-lg-100",children:[e.jsx("div",{className:"card-header pt-7 mb-5",children:e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold text-gray-800",children:"Requests per Product-Country"})})}),e.jsx("div",{className:"card-body pt-0",children:e.jsxs("div",{className:"table-responsive",children:[e.jsxs("table",{className:"table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4",ref:D,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Country"}),e.jsx("th",{children:"Produit"}),e.jsx("th",{children:"Formatting"}),e.jsx("th",{children:"Publishing"})]})}),e.jsx("tbody",{children:v.map((a,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"symbol symbol-45px me-2",children:e.jsx(X,{countryCode:A.getAlpha2Code(a.cnt,"en"),svg:!0,style:{width:"2em",height:"2em"}})}),e.jsxs("div",{className:"d-flex justify-content-start flex-column",children:[e.jsx("span",{className:"text-dark fw-bold text-hover-primary fs-6",children:a.cnt}),e.jsx("span",{className:"text-muted fw-semibold text-muted d-block fs-7",children:A.getAlpha2Code(a.cnt,"en")})]})]})}),e.jsx("td",{children:e.jsx("span",{className:"text-gray-700 fw-bold fs-6 me-3 d-block",children:a.pr})}),e.jsx("td",{children:e.jsx("span",{className:"text-gray-500 fw-bold fs-6 me-3 d-block",children:a.formatting})}),e.jsx("td",{children:e.jsx("span",{className:"text-gray-500 fw-bold fs-6 me-3 d-block",children:a.publishing})})]},l))})]}),e.jsx("div",{className:"row paginate_row",children:e.jsx("div",{className:"col-12 col-md-12 d-flex align-items-center justify-content-end justify-content-md-end",children:e.jsx("div",{className:"dataTables_paginate paging_simple_numbers",id:"kt_profile_overview_table_paginate",children:e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:z("paginate_button page-item previous",r===1?"disabled":""),id:"kt_profile_overview_table_previous",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:J,children:e.jsx("i",{className:"previous"})})}),C.map(a=>e.jsx("li",{className:r===a?"page-item active":"paginate_button page-item",children:e.jsxs("button",{onClick:()=>E(a),className:"page-link",children:[" ",a," "]})},a)),e.jsx("li",{className:z("paginate_button page-item next",r===S?"disabled":""),id:"kt_profile_overview_table_next",children:e.jsx("a",{href:"#","aria-controls":"kt_profile_overview_table",className:"page-link",onClick:O,children:e.jsx("i",{className:"next"})})})]})})})})]})})]})}),e.jsx("div",{className:"col-lg-6 col-md-6 mb-5 mb-xl-10",children:e.jsxs("div",{className:"card card-flush h-xxl-100 h-lg-100",children:[e.jsxs("div",{className:"card-header pt-7",children:[e.jsx("h3",{className:"card-title align-items-start flex-column",children:e.jsx("span",{className:"card-label fw-bold text-gray-800",children:"Requests per month"})}),e.jsx("div",{className:"card-toolbar",children:e.jsx(P,{dateFormat:"yyyy",showYearPicker:!0,selected:k,onChange:a=>m(a),className:"form-select form-select-solid form-select-sm fw-bold w-100px",yearItemNumber:6})})]}),e.jsxs("div",{className:"card-body d-flex flex-column justify-content-between pb-5 px-0",children:[e.jsxs("ul",{className:"nav nav-pills nav-pills-custom mb-3 mx-9",role:"tablist",children:[e.jsx("li",{className:"nav-item mb-3 me-3 me-lg-6",children:e.jsx("a",{className:"nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active","data-bs-toggle":"tab",href:"#kt_charts_widget_10_tab_content_1",children:e.jsxs("div",{className:"nav-icon mb-3",children:[e.jsxs("i",{className:"ki-duotone ki-ship fs-1 p-0",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"}),e.jsx("span",{className:"path3"})]}),e.jsx("span",{className:"nav-text text-gray-800 fw-bold fs-6 lh-1",children:"Formatting"}),e.jsx("span",{className:"bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"})]})})}),e.jsx("li",{className:"nav-item mb-3 me-3 me-lg-6",children:e.jsx("a",{className:"nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2","data-bs-toggle":"tab",href:"#kt_charts_widget_10_tab_content_2",children:e.jsxs("div",{className:"nav-icon mb-3",children:[e.jsxs("i",{className:"ki-duotone ki-ship fs-1 p-0",children:[e.jsx("span",{className:"path1"}),e.jsx("span",{className:"path2"}),e.jsx("span",{className:"path3"})]}),e.jsx("span",{className:"nav-text text-gray-800 fw-bold fs-6 lh-1",children:"Publishing"}),e.jsx("span",{className:"bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"})]})})})]}),e.jsxs("div",{className:"tab-content ps-4 pe-6",children:[e.jsx("div",{className:"tab-pane fade active show",id:"kt_charts_widget_10_tab_content_1",children:e.jsx(n,{options:ie,series:[{name:"Formatting",data:j}],type:"bar",height:270})}),e.jsx("div",{className:"tab-pane fade",id:"kt_charts_widget_10_tab_content_2",children:e.jsx(n,{options:re,series:[{name:"Publishing",data:u}],type:"bar",height:270})})]})]})]})}),e.jsx("div",{className:"col-lg-6 col-md-6 mb-5 mb-xl-10",children:e.jsxs("div",{className:"card card-flush h-lg-100",children:[e.jsxs("div",{className:"card-header mt-6",children:[e.jsxs("div",{className:"card-title flex-column",children:[e.jsx("h3",{className:"fw-bold mb-1",children:"Cumulative requests"}),e.jsxs("div",{className:"fs-6 d-flex text-gray-400 fs-6 fw-semibold",children:[e.jsxs("div",{className:"d-flex align-items-center me-6",children:[e.jsx("span",{className:"menu-bullet d-flex align-items-center me-2",children:e.jsx("span",{className:"bullet bg-success"})}),"Formatting"]}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:"menu-bullet d-flex align-items-center me-2",children:e.jsx("span",{className:"bullet bg-primary"})}),"Publishing"]})]})]}),e.jsx("div",{className:"card-toolbar",children:e.jsx(P,{dateFormat:"yyyy",showYearPicker:!0,selected:w,onChange:q,className:"form-select form-select-solid form-select-sm fw-bold w-100px",yearItemNumber:6})})]}),e.jsx("div",{className:"card-body pt-10 pb-0 px-5",children:e.jsx(n,{options:ce,series:[{name:"Formatting",data:j},{name:"Publishing",data:u}],type:"area"})})]})})]})})},de=s=>{var m,r;const p=s.RequestNumber,c=s.formattingCount,o=s.publishingCount,b=s.acceptance,f=s.correction,g=s.update,j=s.perMonthFor,u=s.perMonthPub,d=Object.values(p).reduce((x,C)=>x+C.total,0),v=s.totalclosed,y=s.productCountry,N=s.totalPerType,w=s.totalPerTypeP;i.useEffect(()=>{s.flash.message&&te.fire({title:e.jsx("p",{children:"Done !"}),icon:"success",text:s.flash.message})},[]);const{config:_,classes:k}=K();return(r=(m=_.app)==null?void 0:m.toolbar)!=null&&r.display?e.jsx(e.Fragment,{children:e.jsx(oe,{RequetNumber:p,totalRequet:d,formattingCount:c,PublishingCount:o,acceptance:b,correction:f,update:g,perMonthFor:j,perMonthPub:u,totalclosed:v,productCountry:y,totalPerType:N,totalPerTypeP:w})}):null};de.layout=s=>e.jsx(Q,{children:s,auth:s.props.auth});export{de as default};
