import{b as A,r,j as l}from"./app-e3e6dca7.js";import{L as O}from"./MetronicSplashScreen-f3d9843d.js";const f="/storage/",p=`${f}/verify_token`,_=`${f}/login`;function d(e,t){return A.post(_,{email:e,password:t})}function U(e){return A.post(p,{api_token:e})}const S="kt-auth-react-v",h=()=>{if(!localStorage)return;const e=localStorage.getItem(S);if(e)try{const t=JSON.parse(e);if(t)return t}catch(t){console.error("AUTH LOCAL STORAGE PARSE ERROR",t)}},L=e=>{if(localStorage)try{const t=JSON.stringify(e);localStorage.setItem(S,t)}catch(t){console.error("AUTH LOCAL STORAGE SAVE ERROR",t)}},v=()=>{if(localStorage)try{localStorage.removeItem(S)}catch(e){console.error("AUTH LOCAL STORAGE REMOVE ERROR",e)}},C={auth:h(),saveAuth:()=>{},currentUser:void 0,setCurrentUser:()=>{},logout:()=>{}},R=r.createContext(C),g=()=>r.useContext(R),m=({children:e})=>{const[t,n]=r.useState(h()),[i,o]=r.useState(),a=s=>{n(s),s?L(s):v()},c=()=>{a(void 0),o(void 0)};return l.jsx(R.Provider,{value:{auth:t,saveAuth:a,currentUser:i,setCurrentUser:o,logout:c},children:e})},x=({children:e})=>{const{auth:t,logout:n,setCurrentUser:i}=g(),o=r.useRef(!1),[a,c]=r.useState(!0);return r.useEffect(()=>{const s=async E=>{try{if(!o.current){const{data:u}=await U(E);u&&i(u)}}catch(u){console.error(u),o.current||n()}finally{c(!1)}return()=>o.current=!0};t&&t.api_token?s(t.api_token):(n(),c(!1))},[]),a?l.jsx(O,{}):l.jsx(l.Fragment,{children:e})},j=Object.freeze(Object.defineProperty({__proto__:null,AuthInit:x,AuthProvider:m,useAuth:g},Symbol.toStringTag,{value:"Module"}));export{j as A,U as g,d as l,g as u};
