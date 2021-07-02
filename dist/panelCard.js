/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class n{constructor(t,e){if(e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return e&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const o=new Map,r=t=>{let e=o.get(t);return void 0===e&&o.set(t,e=new n(t,i)),e},s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(t instanceof n)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return r(i)},a=(t,i)=>{e?t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):i.forEach(e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)})},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>r("string"==typeof t?t:t+""))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c,h,d,p;const u={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:g};class v extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this.Πp(i,e);void 0!==n&&(this.Πm.set(n,i),t.push(n))}),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=f){var n,o;const r=this.constructor.Πp(t,i);if(void 0!==r&&!0===i.reflect){const s=(null!==(o=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:u.toAttribute)(e,i.type);this.Πh=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this.Πh=null}}K(t,e){var i,n,o;const r=this.constructor,s=r.Πm.get(t);if(void 0!==s&&this.Πh!==s){const t=r.getPropertyOptions(s),a=t.converter,l=null!==(o=null!==(n=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==o?o:u.fromAttribute;this.Πh=s,this[s]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,e)=>this[e]=t),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,e)=>this.Πj(e,this[e],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m,b,y,x;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null===(h=(c=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(c,{ReactiveElement:v}),(null!==(d=(p=globalThis).reactiveElementVersions)&&void 0!==d?d:p.reactiveElementVersions=[]).push("1.0.0-rc.2");const w=globalThis.trustedTypes,_=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,z="?"+k,$=`<${z}>`,S=document,C=(t="")=>S.createComment(t),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,E=/>/g,D=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,N=/'/g,O=/"/g,T=/^(?:script|style|textarea)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Y=new WeakMap,j=S.createTreeWalker(S,129,null,!1);class R{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const s=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",s=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(s.lastIndex=h,l=s.exec(i),null!==l);)h=s.lastIndex,s===H?"!--"===l[1]?s=A:void 0!==l[1]?s=E:void 0!==l[2]?(T.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=D):void 0!==l[3]&&(s=D):s===D?">"===l[0]?(s=null!=o?o:H,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?D:'"'===l[3]?O:N):s===O||s===N?s=D:s===A||s===E?s=H:(s=D,o=void 0);const d=s===D&&t[e+1].startsWith("/>")?" ":"";r+=s===H?i+$:c>=0?(n.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+k+d):i+k+(-2===c?(n.push(void 0),e):d)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==_?_.createHTML(a):a,n]})(t,e);if(this.el=R.createElement(l,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=j.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(k)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(k),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?K:"@"===e[1]?q:W})}else a.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(T.test(n.tagName)){const t=n.textContent.split(k),e=t.length-1;if(e>0){n.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],C()),j.nextNode(),a.push({type:2,index:++o});n.append(t[e],C())}}}else if(8===n.nodeType)if(n.data===z)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,n){var o,r,s,a;if(e===I)return e;let l=void 0!==n?null===(o=i.Σi)||void 0===o?void 0:o[n]:i.Σo;const c=M(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l.O)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l.T(t,i,n)),void 0!==n?(null!==(s=(a=i).Σi)&&void 0!==s?s:a.Σi=[])[n]=l:i.Σo=l),void 0!==l&&(e=B(t,l.S(t,e.values),l,n)),e}class V{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:n}=this.D,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);j.currentNode=o;let r=j.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new Z(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new J(r,this,t)),this.l.push(e),l=n[++a]}s!==(null==l?void 0:l.index)&&(r=j.nextNode(),s++)}return o}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class Z{constructor(t,e,i,n){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=n}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=B(this,t,e),M(t)?t===U||null==t||""===t?(this.H!==U&&this.R(),this.H=U):t!==this.H&&t!==I&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return P(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(S.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this.C(t):(void 0===n.el&&(n.el=R.createElement(n.h,this.options)),n);if((null===(e=this.H)||void 0===e?void 0:e.D)===o)this.H.v(i);else{const t=new V(o,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new R(t)),e}g(t){P(this.H)||(this.H=[],this.R());const e=this.H;let i,n=0;for(const o of t)n===e.length?e.push(i=new Z(this.k(C()),this.k(C()),this,this.options)):i=e[n],i.I(o),n++;n<e.length&&(this.R(i&&i.B.nextSibling,n),e.length=n)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class W{constructor(t,e,i,n,o){this.type=1,this.H=U,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(U),this.strings=i):this.H=U}get tagName(){return this.element.tagName}I(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=B(this,t,e,0),r=!M(t)||t!==this.H&&t!==I,r&&(this.H=t);else{const n=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=B(this,n[i+s],e,s),a===I&&(a=this.H[s]),r||(r=!M(a)||a!==this.H[s]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+o[s+1]),this.H[s]=a}r&&!n&&this.W(t)}W(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends W{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===U?void 0:t}}class K extends W{constructor(){super(...arguments),this.type=4}W(t){t&&t!==U?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class q extends W{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:U)===I)return;const n=this.H,o=t===U&&n!==U||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==U&&(n===U||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){B(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,Q,X,tt,et,it;null===(b=(m=globalThis).litHtmlPlatformSupport)||void 0===b||b.call(m,R,Z),(null!==(y=(x=globalThis).litHtmlVersions)&&void 0!==y?y:x.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(G=(it=globalThis).litElementVersions)&&void 0!==G?G:it.litElementVersions=[]).push("3.0.0-rc.2");class nt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var n,o;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let s=r._$litPart$;if(void 0===s){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=s=new Z(e.insertBefore(C(),t),t,void 0,i)}return s.I(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return I}}nt.finalized=!0,nt._$litElement$=!0,null===(X=(Q=globalThis).litElementHydrateSupport)||void 0===X||X.call(Q,{LitElement:nt}),null===(et=(tt=globalThis).litElementPlatformSupport)||void 0===et||et.call(tt,{LitElement:nt});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function at(t){return st({...t,state:!0,attribute:!1})}var lt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ct="[^\\s]+",ht=/\[([^]*?)\]/gm;function dt(t,e){for(var i=[],n=0,o=t.length;n<o;n++)i.push(t[n].substr(0,e));return i}var pt=function(t){return function(e,i){var n=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return n>-1?n:null}};function ut(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var n=0,o=e;n<o.length;n++){var r=o[n];for(var s in r)t[s]=r[s]}return t}var gt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ft=["January","February","March","April","May","June","July","August","September","October","November","December"],vt=dt(ft,3),mt={dayNamesShort:dt(gt,3),dayNames:gt,monthNamesShort:vt,monthNames:ft,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},bt=ut({},mt),yt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},xt={D:function(t){return String(t.getDate())},DD:function(t){return yt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return yt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return yt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return yt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return yt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return yt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return yt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return yt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return yt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return yt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return yt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+yt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+yt(Math.floor(Math.abs(e)/60),2)+":"+yt(Math.abs(e)%60,2)}},wt=function(t){return+t-1},_t=[null,"[1-9]\\d?"],kt=[null,ct],zt=["isPm",ct,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],$t=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],St=(pt("monthNamesShort"),pt("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Ct=function(t,e,i){if(void 0===e&&(e=St.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var n=[];e=(e=St[e]||e).replace(ht,(function(t,e){return n.push(e),"@@@"}));var o=ut(ut({},bt),i);return(e=e.replace(lt,(function(e){return xt[e](t,o)}))).replace(/@@@/g,(function(){return n.shift()}))},Mt=function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})}:function(t){return Ct(t,"mediumDate")},Pt=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleString(e,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(t){return Ct(t,"haDateTime")},Ht=function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit"})}:function(t){return Ct(t,"shortTime")};function At(t){return t.substr(0,t.indexOf("."))}function Et(t,e,i){if("unknown"===e.state||"unavailable"===e.state)return t("state.default."+e.state);if(e.attributes.unit_of_measurement)return e.state+" "+e.attributes.unit_of_measurement;var n=function(t){return At(t.entity_id)}(e);if("input_datetime"===n){var o;if(!e.attributes.has_time)return o=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),Mt(o,i);if(!e.attributes.has_date){var r=new Date;return o=new Date(r.getFullYear(),r.getMonth(),r.getDay(),e.attributes.hour,e.attributes.minute),Ht(o,i)}return o=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),Pt(o,i)}return e.attributes.device_class&&t("component."+n+".state."+e.attributes.device_class+"."+e.state)||t("component."+n+".state._."+e.state)||e.state}var Dt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o};const Nt=(t,e,i,n,o,r)=>{const s=[];(null==o?void 0:o.length)&&s.push(t=>o.includes(At(t))),r&&s.push(e=>t.states[e]&&r(t.states[e]));const a=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const n=[];for(let o=0;o<t.length&&n.length<i;o++){let i=!0;for(const n of e)if(!n(t[o])){i=!1;break}i&&n.push(t[o])}return n})(i,s,e);if(a.length<e&&n.length){const i=Nt(t,e-a.length,n,[],o,r);a.push(...i)}return a},Ot=t=>{const e=[];return t.map(t=>{const i={entity:t};e.push(i)}),e};var Tt="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Lt="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";let It=class extends nt{constructor(){super(...arguments),this.shown=!0}render(){var t,e;return this.zone&&this.hass?L`
      <div class="zone">
        <div class="zoneName">
          <paper-input
            .label=${"Zone Name"}
            .value=${null===(t=this.zone)||void 0===t?void 0:t.name}
            @value-changed=${this._titleChanged}
          ></paper-input>
          <mwc-icon-button
            aria-label=${this.hass.localize("ui.components.entity.entity-picker.clear")}
            class="expand"
            .value=${this.zone}
            @click=${this._toggle}
          >
            <ha-svg-icon .path=${Tt}></ha-svg-icon>
          </mwc-icon-button>
        </div>
        ${1==this.shown?L`
              <div class="entities">
                ${null===(e=this.zone)||void 0===e?void 0:e.entities.map((t,e)=>L`
                    <div class="entity">
                      <ha-entity-picker
                        allow-custom-entity
                        hideClearIcon
                        .hass=${this.hass}
                        .value=${t.entity}
                        .zoneName=${this.name}
                        .index=${e}
                        @value-changed=${t=>this._valueChanged(t,e)}
                      ></ha-entity-picker>
                      <mwc-icon-button
                        aria-label=${this.hass.localize("ui.components.entity.entity-picker.clear")}
                        class="remove-icon"
                        .index=${e}
                        @click=${this._removeEntity}
                      >
                        <ha-svg-icon .path=${Lt}></ha-svg-icon>
                      </mwc-icon-button>
                    </div>
                  `)}
                <ha-entity-picker
                  class="entityPicker"
                  .label=${"Add Entity"}
                  .hass=${this.hass}
                  @value-changed=${this._addEntity}
                ></ha-entity-picker>
                <mwc-button raised label="Delete Zone" @click=${this._removeZone}>
                  <ha-svg-icon .path=${Lt}></ha-svg-icon>
                </mwc-button>
              </div>
            `:L``}
      </div>
    `:L``}async _valueChanged(t,e){const i=t.detail.value,n=e,o=this.zone.entities.concat(),r=this.zone.name;""===i?o.splice(n,1):o[n]={entity:i};Dt(this,"entities-changed",{zone:{name:r,entities:o},zoneIndex:this.zoneIndex})}async _titleChanged(t){const e=t.detail.value,i=[...this.zone.entities];Dt(this,"entities-changed",{zone:{name:e,entities:i},zoneIndex:this.zoneIndex})}async _addEntity(t){var e;const i=t.detail.value,n=this.zone.name,o=null===(e=this.zone)||void 0===e?void 0:e.entities.concat({entity:i});t.target.value="";Dt(this,"entities-changed",{zone:{name:n,entities:o},zoneIndex:this.zoneIndex})}async _removeEntity(t){const e=t.currentTarget.index,i=this.zone.entities.concat(),n=this.zone.name;i.splice(e,1);Dt(this,"entities-changed",{zone:{name:n,entities:i},zoneIndex:this.zoneIndex})}async _removeZone(){Dt(this,"entities-changed",{zone:this.zone,remove:!0})}_toggle(){1==this.shown?this.shown=!1:this.shown=!0}static get styles(){return[s`
        .zone {
          border: solid #3d3d3d 5px;
          margin-bottom: 10px;
        }
        .entity {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .entities {
          display: flex;
          flex-direction: column;
          padding-left: 5px;
        }
        .entity .handle {
          padding-right: 8px;
          cursor: move;
        }
        .entity ha-entity-picker {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          width: 75%;
          height: auto;
        }
        .zoneName {
          padding-left: 5px;
        }
        zone-entity-selector paper-input-container:first-of-type .unfocused-line {
          border-color: orange;
        }
        .zoneName paper-input {
          width: 90%;
        }
        .zoneName {
          display: flex;
          flex-direction: row;
        }
        mwc-button {
          --mdc-theme-primary: #ff0000;
          --mdc-theme-on-primary: white;
          padding-right: 5px;
          padding-bottom: 5px;
        }
        .entityPicker {
          padding-right: 5px;
        }
      `]}};t([st({attribute:!1})],It.prototype,"hass",void 0),t([st({attribute:!1})],It.prototype,"zone",void 0),t([at()],It.prototype,"entities",void 0),t([at()],It.prototype,"name",void 0),t([at()],It.prototype,"shown",void 0),t([at()],It.prototype,"zoneIndex",void 0),It=t([ot("zone-entity-selector")],It);let Ut=class extends nt{constructor(){super(...arguments),this.shown=!0}render(){return this.apperanceProperties?L`
      <div class="zone1">
        <div class="entities1">
          ${this.apperanceProperties.propArray.map(t=>t.type?L`
                ${this._addIncInput(t.name,t.type)}
              `:L`
                <paper-input
                  class="no-underline"
                  label="Slider Background Color"
                  type="color"
                  value=${this.apperanceProperties.propArray[4].attr}
                  @value-changed=${t=>this._valueChanged(t,"Slider Background Color")}
                >
                </paper-input>
              `)}
        </div>
      </div>
    `:L``}_valueChanged(t,e){if(this.apperanceProperties){let i;const n=[...this.apperanceProperties.propArray],o=n.findIndex(({name:t})=>t==e),r=Object.assign({},n[o]);i="number"==r.type?+t.detail.value:t.detail.value,r.attr=i,n.splice(o,1,r),this.apperanceProperties=Object.assign(Object.assign({},this.apperanceProperties),{propArray:n}),Dt(this,"properties-changed",{_apperanceProperties:this.apperanceProperties})}}_addIncInput(t,e){return L`
      <paper-input
        label=${t}
        type=${e}
        value=${this.apperanceProperties.propArray.find(({name:e})=>e===t).attr}
        @value-changed=${e=>this._valueChanged(e,t)}
      >
        <div slot="suffix">${"number"==e?"px":""}</div>
      </paper-input>
    `}static get styles(){return[s`
        .zone1 {
          margin-bottom: 10px;
        }
        .entities1 {
          display: flex;
          padding-left: 5px;
          justify-content: center;
          flex-wrap: wrap;
        }
        paper-input {
          width: 45%;
          margin-right: 10px;
        }
        paper-input.no-underline {
          /* hide underline in all states */
          --paper-input-container-underline: {
            display: none;
          }
          --paper-input-container-underline-focus: {
            display: none;
          }
          --paper-input-container-underline-disabled: {
            display: none;
          }
        }
      `]}};t([at()],Ut.prototype,"shown",void 0),t([st({attribute:!1})],Ut.prototype,"apperanceProperties",void 0),Ut=t([ot("editor-properties")],Ut);let Yt=class extends nt{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this._configEntities=t.zones[0].entities,this._zoneName=t.zones[0].name,this._shown=!0,this._apperanceProperties=t.props,this._zoneCount||(this._config.zones.length>0?this._zoneCount=this._config.zones.length:this._zoneCount=0)}shouldUpdate(){return this._initialized||this._initialize(),!0}render(){return this.hass?L`
      <div class="card-config">
        <div class="zones">
          <div class="zone">
            <div class="zoneName">
              <h2>Properties</h2>
              <mwc-icon-button
                aria-label=${this.hass.localize("ui.components.entity.entity-picker.clear")}
                class="expand"
                @click=${this._toggleVis}
              >
                <ha-svg-icon .path=${Tt}></ha-svg-icon>
              </mwc-icon-button>
            </div>
            ${1==this._shown?L`
                  <editor-properties
                    .apperanceProperties=${this._apperanceProperties}
                    @properties-changed=${this._updateProps}
                  ></editor-properties>
                `:L``}
          </div>
          ${this._config.zones.map((t,e)=>L`
              <zone-entity-selector
                .hass=${this.hass}
                .zoneIndex=${e}
                .zone=${t}
                @entities-changed=${this._valueChanged}
              >
              </zone-entity-selector>
            `)}
        </div>
        <div class="zoneBtns">
          <mwc-icon-button
            aria-label=${this.hass.localize("ui.components.entity.entity-picker.clear")}
            class="remove-icon"
            @click=${this._addZone}
          >
            <ha-svg-icon .path=${"M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"}></ha-svg-icon>
          </mwc-icon-button>
        </div>
      </div>
    `:L``}_initialize(){void 0!==this.hass&&void 0!==this._config&&(this._initialized=!0)}_addZone(){this._zoneCount=this._zoneCount+1;const t=Object.keys(this.hass.states),e=Nt(this.hass,3,t,[],["light","switch","fan"]),i=[{name:"Zone ".concat(this._zoneCount.toString()),entities:Ot(e)}],n=[...this._config.zones,...i];this._config=Object.assign(Object.assign({},this._config),{zones:n}),Dt(this,"config-changed",{config:this._config})}_valueChanged(t){if(t.stopPropagation(),this._config&&this.hass)if(t.detail.zone&&!t.detail.remove){const e=t.detail.zone,i=t.detail.zoneIndex,n=[...this._config.zones];n.splice(i,1,e),this._config=Object.assign(Object.assign({},this._config),{zones:n}),Dt(this,"config-changed",{config:this._config})}else if(t.detail.remove){const e=t.detail.zone,i=this._config.zones.findIndex(t=>t.name===e.name),n=[...this._config.zones];n.splice(i,1),this._config=Object.assign(Object.assign({},this._config),{zones:n}),Dt(this,"config-changed",{config:this._config})}}_toggleVis(){1==this._shown?this._shown=!1:this._shown=!0}_updateProps(t){const e=t.detail._apperanceProperties;this._config=Object.assign(Object.assign({},this._config),{props:e}),Dt(this,"config-changed",{config:this._config})}static get styles(){return s`
      .zone {
        border: solid #3d3d3d 5px;
        margin-bottom: 10px;
      }
      .zoneName {
        display: flex;
        width: 100%;
      }
      h2 {
        display: inline;
        padding-left: 25px;
      }

      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
      paper-input {
        width: 75%;
      }
    `}};t([st({attribute:!1})],Yt.prototype,"hass",void 0),t([at()],Yt.prototype,"_config",void 0),t([at()],Yt.prototype,"_configEntities",void 0),t([at()],Yt.prototype,"_zoneName",void 0),t([at()],Yt.prototype,"_toggle",void 0),t([at()],Yt.prototype,"_zoneCount",void 0),t([at()],Yt.prototype,"_shown",void 0),t([at()],Yt.prototype,"_apperanceProperties",void 0),Yt=t([ot("panel-card-editor")],Yt);var jt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Rt={common:jt},Bt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Vt={common:Bt};const Zt={en:Object.freeze({__proto__:null,common:jt,default:Rt}),nb:Object.freeze({__proto__:null,common:Bt,default:Vt})};console.info(`%c  PANEL-CARD \n%c  ${function(t,e="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],Zt[n])}catch(e){o=t.split(".").reduce((t,e)=>t[e],Zt.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],Zt.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}("common.version")} 1.0.0    `,"color: white; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"panel-card",name:"Panel Card",description:"A custom panel to display entities grouped into zones"});let Wt=class extends nt{static async getConfigElement(){return document.createElement("panel-card-editor")}static getStubConfig(t,e,i,n,o){const r=Nt(t,3,e,i,["light","switch","sensor"]);return{type:"custom:panel-card",zones:[{name:"default",entities:Ot(r)}],props:{propArray:[{name:"Switch Height",type:"number",attr:75},{name:"Switch Width",type:"number",attr:300},{name:"Slider Background Color",type:"color",attr:"#4d4d4d"},{name:"Slider Foreground Color",type:"color",attr:"#000000"}]}}}setConfig(t){if(!t.zones)throw new Error("You need to define atleast one zone");this.config=Object.assign({name:"panelCard"},t),this.active=this.config.zones[0].name}render(){this.active||(console.log("no active zones"),this.active=this.config.zones[0].name);const t=this.active,e=this.config.zones.find(e=>e.name===t),i=this.config.props;return L`
      <div class="page">
        <div class="top" style="height: ${this.config.zones.length}">
          <div class="buttons">
            ${this.config.zones.map(t=>L`<button tabindex='0' class="btn-zone" style="--backColor: ${i.propArray[2].attr}; --forgroundColor: ${i.propArray[3].attr};" @click=${this._clickHandler}>${t.name}</button>`)}
          </div>
        </div>
        <div class="spacer" style="--backColor: ${i.propArray[2].attr};"></div>
        <div class="bottom">
          <div class="inner-main">
            ${e.entities.map(t=>{const e=this.hass.states[t.entity];return e?L`
                <div class="holder" style="--slider-width: ${i.propArray[1].attr+"px"};">
                  <div class="innerHolder" >
                    ${this._getEntityTypeHTML(e,t,i)}
                  </div>
                </div>
              </div>
            </div>
                `:L``})}
          </div>
        </div>
      </div>
    `}_getEntityTypeHTML(t,e,i){const n=At(t.entity_id);switch(n){case"light":return L`
        <div class="range-holder" style="--slider-width: ${i.propArray[1].attr+"px"}; --slider-height: ${i.propArray[0].attr+"px"}; --backColor: ${i.propArray[2].attr}; --forgroundColor: ${i.propArray[3].attr}">
            <div class="range-info">
              <h2>${e.name||t.attributes.friendly_name}</h2>
              <h4 class="brightness">
              ${"off"===t.state?"0":Math.round(t.attributes.brightness/2.55)}
              </h4>
            </div>
            <input
              type="range"
              class="${t.state}"
              .value="${"off"===t.state?"0":Math.round(t.attributes.brightness/2.55).toString()}"
              @change=${e=>this._setBrightness(t,e.target.value)}
            />
        </div>
        <button class="moreInfo" @click=${e=>this._handleMoreInfo(t)}></button>
       `;case"switch":case"fan":case"group":case"lock":let o=0;switch(t.state){case"on":case"unlocked":o=1;break;case"off":case"locked":o=0;break;default:o=0}return L`
          <div
            class="switch-holder"
            style="--switch-height: ${i.propArray[0].attr+"px"};--switch-width: ${i.propArray[1].attr+"px"};--backColor: ${i.propArray[2].attr}; --forgroundColor: ${i.propArray[3].attr}"
          >
            <div class="switch-label">
              <h2>${e.name||t.attributes.friendly_name}</h2>
            </div>
            <div class="${"lock"===n?"switch-toggle lock":"switch-toggle"}">
              <input type="checkbox" id="${e.name||t.attributes.friendly_name}" ?checked="${1===o}"  @click= ${e=>this._switch(e,t)}>
              <label for="${e.name||t.attributes.friendly_name}"></label>
            </div>
          </div>
          <button class="moreInfo" @click=${e=>this._handleMoreInfo(t)}></button>
        `;case"sensor":case"binary_sensor":return L`
        <div class="info" style="--sliderWidth: ${i.propArray[1].attr+"px"}; --sliderHeight: ${i.propArray[0].attr+"px"}; --backColor: ${i.propArray[2].attr}; --forgroundColor: ${i.propArray[3].attr};">
          <h2>${t.attributes.friendly_name}</h2>
          <h4>${Et(this.hass.localize,t,this.hass.language)}</h4>
        </div>
        <button class="moreInfo" @click=${e=>this._handleMoreInfo(t)}></button>
        `;default:return L`<h2>UNKNOWN ENTITY TYPE</h2>`}}_setBrightness(t,e){this.hass.callService("homeassistant","turn_on",{entity_id:t.entity_id,brightness:2.55*e})}_switch(t,e){console.log(t.target.checked);const i=!!t.target.checked;!function(t,e,i){void 0===i&&(i=!0);var n,o=At(e),r="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(r,n,{entity_id:e})}(this.hass,e.entity_id,i)}_handleMoreInfo(t){Dt(this,"hass-more-info",{entityId:t.entity_id})}_clickHandler(t){this.active=t.target.innerText}static get styles(){return s`
      .page {
        width: 100%;
        max-height: 90vh;
        display: flex;
        background: var(--ha-card-background, var(--card-background-color, white));
        color: var(--primary-text-color);
        flex-direction: column;
        border-radius: var(--ha-card-border-radius, 4px);
      }

      .top {
        max-height: 40%;
        display: block;
        justify-content: center;
        overflow: scroll;
        text-align: center;
      }

      .bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 58%;
        overflow: scroll;
        margin-top: 10px;
      }
      .spacer {
        height: 5px;
        background: var(--backColor);
      }
      .buttons {
        margin-top: 7px;
        margin-bottom: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
      }
      .buttons button {
        width: 95%;
        height: 50px;
        font-size: 16px;
        font-weight: bold;
        background: #1c1c1c;
        border-width: 2px;
        border-color: black;
        margin-bottom: 7px;
        box-shadow: 2px 2px 2px darkgray;
        border-radius: 5px;
      }

      .buttons button:active, .buttons button:focus{
        background: var(--backColor);
      }

      .back-btn {
        border: 2px solid #fff;
        /* color: #fff; */
        background: transparent;
        font-size: 18px;
        border-radius: 4px;
        width: 100%;
        display: block;
        padding: 10px 0px;
        margin-top: 5px;
      }

      .page > .bottom > .inner-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        margin: auto;
      }
      .page > .bottom > .inner-main > .holder {
        width: var(--slider-width);
        height: 90px;
        position: relative;
        margin: auto;
      }

      h2 {
        /* color: rgb(255, 255, 255); */
        display: block;
        margin-bottom: 0px;
        text-align: center;
        font-size: 16px;
        margin-top: 0px;
        z-index: 10;
        position: relative;
      }
      h4, span {
        /* color: rgb(255, 255, 255); */
        display: flex;
        font-weight: 300;
        margin-bottom: 10px;
        text-align: center;
        font-size: 16px;
        margin-top: 0px;
        z-index: 10;
        position: relative;
        justify-content: center;
        align-items: center;
      }
      h4.brightness:after {
        content: '%';
        padding-left: 1px;
      }

      .range-holder {
        height: var(--slider-height);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--slider-width);
        background: var(--backColor);
        border-radius: 10px;
      }
      .range-holder input[type='range'] {
        -webkit-appearance: none;
        -moz-appearance: none;
        overflow: hidden;
        width: 50%;
        height: 50%;
        background: var(--backColor);
        padding-right: 10px;
      }
      .range-holder input[type='range']::-webkit-slider-runnable-track {
        height: 20px;
        overflow: hidden !important;
        display: flex;
        align-items: center;
        height: 20px;
        border-radius: 10px;
        box-shadow: inset -3px -3px 5px rgba(255,255,255,.2), inset 3px 3px 5px rgba(0, 0, 0, 0.25);
      }
      .range-holder input[type="range"]::-webkit-slider-container{
        overflow: hidden;
      }
      .range-holder input[type='range']::-webkit-slider-thumb {
        height: 20px;
        width: 20px;
        background: white;
        -webkit-appearance: none;
        box-shadow: -340px 0 0 330px var(--forgroundColor), inset 0 0 0 3px var(--forgroundColor);
        border-radius: 50%;
        -webkit-transition: box-shadow 0.2s ease-in-out;
        transition: box-shadow 0.2s ease-in-out;
        position: relative;
      }
      .range-holder input[type=range]:active::-webkit-slider-thumb {
        background: #fff;
        box-shadow: -340px 0 0 330px var(--forgroundColor), inset 0 0 0 3px var(--forgroundColor);
        overflow: hidden;
      }
      .range-info{
        width: 50%;
      }

      .switch-holder {
        height: var(--switch-height);
        width: var(--switch-width);
        background-color: var(--backColor);
        position: relative;
        display: flex;
        border-radius: 10px;
        justify-content: space-between;
        align-items: center;
      }
      .switch-label {
        width: 150px;
      }
      .switch-label i {
        margin-right: 5px;
      }

      .switch-toggle {
          height: 40px;
          margin-right: 15px;
      }

      .switch-toggle input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          z-index: -2;
      }

      .switch-toggle input[type="checkbox"] + label {
          position: relative;
          display: inline-block;
          background: var(--forgroundColor);
          width: 100px;
          height: 40px;
          border-radius: 20px;
          margin: 0;
          cursor: pointer;
          box-shadow: inset -8px -8px 15px rgba(255,255,255,.01),
                      inset 10px 10px 10px rgba(0,0,0, 0);

      }
      .switch-toggle.lock input[type="checkbox"] + label::before{
        content: 'LOCKED';
        font-size: 8px;
      }
      .switch-toggle.lock input[type="checkbox"]:checked + label::before {
        content: 'UNLOCKED';
        font-size: 8px;
      }

      .switch-toggle input[type="checkbox"] + label::before {
          position: absolute;
          content: 'OFF';
          font-size: 13px;
          text-align: center;
          line-height: 25px;
          top: 6px;
          left: 8px;
          width: 45px;
          height: 25px;
          border-radius: 20px;
          border: var(--backColor) solid 2px;
          box-shadow: -2px -2px 1px rgba(255,255,255,.2),
                      2px 2px 5px rgba(0,0,0, .25);
          transition: .3s ease-in-out;
      }

      .switch-toggle input[type="checkbox"]:checked + label::before {
          left: 50%;
          content: 'ON';
          box-shadow: -2px -2px 1px rgba(255,255,255,.2),
                      2px 2px 5px rgba(0,0,0, .25);
      }

      .switch-holder h2 {
        width: 140px;
        height: 75px;
        text-align: center;
        margin-left: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .info{
        width: var(--sliderWidth);
        height: var(--sliderHeight);
        text-align: center;
        border-radius: 10px;
        background-color: var(--backColor);
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .info{
        flex-direction: column;
      }

      .climate{
        flex-direction: row;
      }

      .moreInfo{
        width: var(--slider-width);
        padding-top: 15px;
        background: none;
        border: none;
      }

    `}};t([st({attribute:!1})],Wt.prototype,"hass",void 0),t([at()],Wt.prototype,"config",void 0),t([at()],Wt.prototype,"active",void 0),Wt=t([ot("panel-card")],Wt);export{Wt as PanelCard};
