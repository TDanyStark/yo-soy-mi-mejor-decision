import{r as l,R as ee}from"./index.D-Q10PB_.js";var z={exports:{}},L={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te=l,ne=Symbol.for("react.element"),ae=Symbol.for("react.fragment"),re=Object.prototype.hasOwnProperty,oe=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,se={key:!0,ref:!0,__self:!0,__source:!0};function J(e,t,a){var n,r={},c=null,s=null;a!==void 0&&(c=""+a),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)re.call(t,n)&&!se.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)r[n]===void 0&&(r[n]=t[n]);return{$$typeof:ne,type:e,key:c,ref:s,props:r,_owner:oe.current}}L.Fragment=ae;L.jsx=J;L.jsxs=J;z.exports=L;var o=z.exports;const ie=()=>o.jsxs("header",{children:[o.jsx("h1",{className:"sr-only",children:"Aplicativo - yo soy mi mejor decisión"}),o.jsxs("p",{className:"font-georgia text-4xl text-morado-abbott",children:[o.jsx("span",{className:"font-bold",children:"Elige la decisión que creas más acertada,"})," ","según la situación:"]})]}),le=()=>o.jsx("footer",{className:"mt-12",children:o.jsxs("p",{className:"text-black font-georgia text-sm",children:[o.jsx("span",{className:"font-bold",children:"Referencia:"})," Uribe A, Castellanos J, Cabán M. Conductas sexuales de riesgo y comunicación sobre sexualidad entre padres e hijos universitarios. Revista de Psicología Universidad de Antioquia. 2016;8(2):27-48"]})}),w=[{id:"situacion1",titulo:"Situación 1",pregunta:"*Sara y Juan están en una fiesta de fin de semestre.* Aunque aún no se conocen bien, deciden tener un encuentro sexual, pero no tienen preservativo.",opciones:[{id:"opcion1",respuesta:"Toman la decisión de posponer el encuentro para no correr riesgos.",correcta:!0},{id:"opcion2",respuesta:"La oportunidad no se puede desaprovechar. Sara cree que no está en la etapa fértil de su ciclo, así que no hay mayor riesgo. Luego puede tomar una píldora de emergencia.",correcta:!1}]},{id:"situacion2",titulo:"Situación 2",pregunta:"*Natalia está en una relación con Federico.* Desde hace unos meses ella está usando anticonceptivos, según la recomendación de su médico. Sin embargo, como la relación es abierta, Natalia le pide a Federico que use preservativo, pero él se molesta y amenaza con terminar la relación.",opciones:[{id:"opcion1",respuesta:"Natalia le pone límites a Federico y le hace saber que el uso del preservativo no es negociable.",correcta:!0},{id:"opcion2",respuesta:"Natalia accede a tener relaciones sexuales con Federico sin preservativo porque, después de todo, está protegida contra un embarazo no deseado y no quiere perderlo.",correcta:!1}]},{id:"situacion3",titulo:"Situación 3",pregunta:"*Valentina y Daniel son novios hace un par de meses.* Aunque ambos conocen toda la información sobre los métodos anticonceptivos para evitar un embarazo no deseado o una infección de trasmisión sexual, aún no han usado ninguno. Daniel dice que el coito interrumpido es eficaz.",opciones:[{id:"opcion1",respuesta:"Valentina y Daniel dejan que la relación fluya un poco más antes de decidir usar un método seguro, pues hasta ahora todo ha salido bien.",correcta:!1},{id:"opcion2",respuesta:"Valentina y Daniel deciden acudir al servicio de orientación en salud sexual y reproductiva de su universidad para elegir un método anticonceptivo seguro.",correcta:!0}]}],G="/apps/abbott/yo-soy-mi-mejor-decision/";/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},N.apply(this,arguments)}var j;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(j||(j={}));const A="popstate";function ce(e){e===void 0&&(e={});function t(n,r){let{pathname:c,search:s,hash:d}=n.location;return I("",{pathname:c,search:s,hash:d},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function a(n,r){return typeof r=="string"?r:Z(r)}return de(t,a,null,e)}function b(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ue(){return Math.random().toString(36).substr(2,8)}function B(e,t){return{usr:e.state,key:e.key,idx:t}}function I(e,t,a,n){return a===void 0&&(a=null),N({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?P(t):t,{state:a,key:t&&t.key||n||ue()})}function Z(e){let{pathname:t="/",search:a="",hash:n=""}=e;return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function P(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function de(e,t,a,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:c=!1}=n,s=r.history,d=j.Pop,f=null,i=p();i==null&&(i=0,s.replaceState(N({},s.state,{idx:i}),""));function p(){return(s.state||{idx:null}).idx}function m(){d=j.Pop;let u=p(),x=u==null?null:u-i;i=u,f&&f({action:d,location:h.location,delta:x})}function v(u,x){d=j.Push;let g=I(h.location,u,x);i=p()+1;let E=B(g,i),S=h.createHref(g);try{s.pushState(E,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;r.location.assign(S)}c&&f&&f({action:d,location:h.location,delta:1})}function C(u,x){d=j.Replace;let g=I(h.location,u,x);i=p();let E=B(g,i),S=h.createHref(g);s.replaceState(E,"",S),c&&f&&f({action:d,location:h.location,delta:0})}function y(u){let x=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof u=="string"?u:Z(u);return g=g.replace(/ $/,"%20"),b(x,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,x)}let h={get action(){return d},get location(){return e(r,s)},listen(u){if(f)throw new Error("A history only accepts one active listener");return r.addEventListener(A,m),f=u,()=>{r.removeEventListener(A,m),f=null}},createHref(u){return t(r,u)},createURL:y,encodeLocation(u){let x=y(u);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:C,go(u){return s.go(u)}};return h}var F;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(F||(F={}));function he(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,n=e.charAt(a);return n&&n!=="/"?null:e.slice(a)||"/"}function fe(e,t){t===void 0&&(t="/");let{pathname:a,search:n="",hash:r=""}=typeof e=="string"?P(e):e;return{pathname:a?a.startsWith("/")?a:pe(a,t):t,search:be(n),hash:we(r)}}function pe(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function U(e,t,a,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function me(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function xe(e,t){let a=me(e);return t?a.map((n,r)=>r===a.length-1?n.pathname:n.pathnameBase):a.map(n=>n.pathnameBase)}function ve(e,t,a,n){n===void 0&&(n=!1);let r;typeof e=="string"?r=P(e):(r=N({},e),b(!r.pathname||!r.pathname.includes("?"),U("?","pathname","search",r)),b(!r.pathname||!r.pathname.includes("#"),U("#","pathname","hash",r)),b(!r.search||!r.search.includes("#"),U("#","search","hash",r)));let c=e===""||r.pathname==="",s=c?"/":r.pathname,d;if(s==null)d=a;else{let m=t.length-1;if(!n&&s.startsWith("..")){let v=s.split("/");for(;v[0]==="..";)v.shift(),m-=1;r.pathname=v.join("/")}d=m>=0?t[m]:"/"}let f=fe(r,d),i=s&&s!=="/"&&s.endsWith("/"),p=(c||s===".")&&a.endsWith("/");return!f.pathname.endsWith("/")&&(i||p)&&(f.pathname+="/"),f}const ge=e=>e.join("/").replace(/\/\/+/g,"/"),be=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,we=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,D=["post","put","patch","delete"];new Set(D);const ye=["get",...D];new Set(ye);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},R.apply(this,arguments)}const K=l.createContext(null),_=l.createContext(null),M=l.createContext(null),O=l.createContext({outlet:null,matches:[],isDataRoute:!1});function T(){return l.useContext(M)!=null}function Q(){return T()||b(!1),l.useContext(M).location}function Y(e){l.useContext(_).static||l.useLayoutEffect(e)}function je(){let{isDataRoute:e}=l.useContext(O);return e?Le():Ce()}function Ce(){T()||b(!1);let e=l.useContext(K),{basename:t,future:a,navigator:n}=l.useContext(_),{matches:r}=l.useContext(O),{pathname:c}=Q(),s=JSON.stringify(xe(r,a.v7_relativeSplatPath)),d=l.useRef(!1);return Y(()=>{d.current=!0}),l.useCallback(function(i,p){if(p===void 0&&(p={}),!d.current)return;if(typeof i=="number"){n.go(i);return}let m=ve(i,JSON.parse(s),c,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ge([t,m.pathname])),(p.replace?n.replace:n.push)(m,p.state,p)},[t,n,s,c,e])}var X=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(X||{}),H=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(H||{});function Ne(e){let t=l.useContext(K);return t||b(!1),t}function Se(e){let t=l.useContext(O);return t||b(!1),t}function Re(e){let t=Se(),a=t.matches[t.matches.length-1];return a.route.id||b(!1),a.route.id}function Le(){let{router:e}=Ne(X.UseNavigateStable),t=Re(H.UseNavigateStable),a=l.useRef(!1);return Y(()=>{a.current=!0}),l.useCallback(function(r,c){c===void 0&&(c={}),a.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,R({fromRouteId:t},c)))},[e,t])}function Pe(e){let{basename:t="/",children:a=null,location:n,navigationType:r=j.Pop,navigator:c,static:s=!1,future:d}=e;T()&&b(!1);let f=t.replace(/^\/*/,"/"),i=l.useMemo(()=>({basename:f,navigator:c,static:s,future:R({v7_relativeSplatPath:!1},d)}),[f,d,c,s]);typeof n=="string"&&(n=P(n));let{pathname:p="/",search:m="",hash:v="",state:C=null,key:y="default"}=n,h=l.useMemo(()=>{let u=he(p,f);return u==null?null:{location:{pathname:u,search:m,hash:v,state:C,key:y},navigationType:r}},[f,p,m,v,C,y,r]);return h==null?null:l.createElement(_.Provider,{value:i},l.createElement(M.Provider,{children:a,value:h}))}new Promise(()=>{});/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ee="6";try{window.__reactRouterVersion=Ee}catch{}const ke="startTransition",q=ee[ke];function Ue(e){let{basename:t,children:a,future:n,window:r}=e,c=l.useRef();c.current==null&&(c.current=ce({window:r,v5Compat:!0}));let s=c.current,[d,f]=l.useState({action:s.action,location:s.location}),{v7_startTransition:i}=n||{},p=l.useCallback(m=>{i&&q?q(()=>f(m)):f(m)},[f,i]);return l.useLayoutEffect(()=>s.listen(p),[s,p]),l.createElement(Pe,{basename:t,children:a,location:d.location,navigationType:d.action,navigator:s,future:n})}var W;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(W||(W={}));var $;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($||($={}));const Ie=({selectedSituation:e,setModalIsOpen:t,setResponse:a,handleReset:n,handleNext:r,handlePrev:c,isLast:s})=>{const d=i=>{e.opciones.find(m=>m.id===i)?.correcta===!0?(t(!0),a("¡Correcto!")):(t(!0),a("¡Incorrecto!"))},f=e.pregunta.replace(/\*(.*?)\*/g,"<strong>$1</strong>");return o.jsxs("div",{className:"mt-14",children:[o.jsxs("div",{className:"text-azul-abbott-corp mb-6 flex justify-between select-none",children:[o.jsxs("div",{className:"flex",children:[o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"cursor-pointer mr-4 h-8 w-8",onClick:c,"aria-label":"Atrás",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),o.jsx("div",{className:"text-white inline-block w-fit cursor-pointer",onClick:n,children:o.jsx("img",{src:G+"img/home.webp",alt:"Go home",width:"29",height:"29"})})]}),o.jsx("div",{children:!s&&o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"cursor-pointer ml-4 h-8 w-8",onClick:r,"aria-label":"Adelante",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})})]}),o.jsx("h2",{className:"font-brandon text-4xl lg:text-5xl uppercase font-bold text-morado-abbott",children:e.titulo}),o.jsx("div",{className:"mt-8 p-6 bg-rosado-abbott",children:o.jsx("p",{className:"text-3xl",dangerouslySetInnerHTML:{__html:f}})}),o.jsx("div",{children:o.jsx("ul",{className:"mt-12 space-y-6",children:e.opciones.map(i=>o.jsx("li",{className:"cursor-pointer p-6 bg-morado-abbott rounded-3xl",onClick:()=>d(i.id),children:o.jsx("p",{className:"text-2xl",children:i.respuesta})},i.id))})})]})},_e=({setModalIsOpen:e,modalisOpen:t,children:a})=>{const n=l.useRef(null),r=d=>{n.current.contains(d.target)||c()},c=()=>{e(!1)},s={"¡Correcto!":o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mx-auto mb-4 text-green-500 w-12 h-12",children:[o.jsx("path",{d:"M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z",fill:"currentColor"}),o.jsx("path",{d:"M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z",fill:"currentColor"})]}),"¡Incorrecto!":o.jsx("svg",{className:"mx-auto mb-4 text-red-600 w-12 h-12","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:o.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})};return o.jsx("div",{id:"default-modal",tabIndex:"-1","aria-hidden":"true",className:`${t?"flex":"hidden"} overflow-y-auto bg-morado-abbott/50 overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-full md:inset-0 max-h-full cursor-pointer`,onClick:r,children:o.jsx("div",{className:"relative p-4 w-full max-w-xl max-h-full cursor-default",ref:n,children:o.jsxs("div",{className:"relative bg-white rounded-lg shadow",children:[o.jsxs("button",{type:"button",className:"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center","data-modal-hide":"popup-modal",onClick:c,children:[o.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:o.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),o.jsx("span",{className:"sr-only",children:"Close modal"})]}),o.jsxs("div",{className:"p-4 md:p-5 text-center",children:[s[a]||o.jsx("svg",{className:"mx-auto mb-4 text-red-600 w-12 h-12","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:o.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),o.jsx("h3",{className:"mb-5 text-3xl font-normal text-gray-600",children:a}),o.jsx("button",{"data-modal-hide":"popup-modal",type:"button",className:"text-white bg-violeta-abbott hover:bg-morado-abbott  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center",onClick:c,children:"Aceptar"})]})]})})})},V=G+"app/",Me=()=>{const e=je(),t=Q(),[a,n]=l.useState(null),r=l.useRef(0),[c,s]=l.useState(!1),[d,f]=l.useState("");l.useEffect(()=>{r.current=document.getElementById("game")?.offsetTop||0},[]),l.useEffect(()=>{const h=t.hash;if(h){const u=h.replace("#","");n(u)}else n(null)},[t]);const i=w.find(h=>h.id===a),p=h=>{e(`${V}#${h}`),window.scrollTo({top:r.current,behavior:"smooth"})},m=()=>{e(V),window.scrollTo({top:r.current,behavior:"smooth"})},v=()=>{if(i){const h=w.findIndex(u=>u.id===i.id);if(h<w.length-1){const u=w[h+1].id;p(u)}}},C=()=>{if(i){const h=w.findIndex(u=>u.id===i.id);if(h>0){const u=w[h-1].id;p(u)}else m()}},y=i?w[w.length-1].id===i.id:!1;return o.jsxs("div",{children:[a===null&&o.jsx("ul",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-8",children:w.map(h=>o.jsx("li",{className:"bg-morado-abbott aspect-square rounded-3xl grid place-content-center p-4 cursor-pointer",onClick:()=>p(h.id),children:o.jsx("h3",{className:"font-brandon text-3xl lg:text-4xl uppercase font-bold",children:h.titulo})},h.id))}),a!==null&&i&&o.jsx(Ie,{selectedSituation:i,handleReset:m,setModalIsOpen:s,setResponse:f,handleNext:v,handlePrev:C,isLast:y}),o.jsx(_e,{setModalIsOpen:s,modalisOpen:c,children:d})]})},Oe=()=>o.jsx(Ue,{children:o.jsx(Me,{})}),Ae=()=>o.jsxs("div",{children:[o.jsx(ie,{}),o.jsx(Oe,{}),o.jsx(le,{})]});export{Ae as default};