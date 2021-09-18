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
function t(t,e,i,n){var r,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new Map;class r{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return e&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=t=>new r("string"==typeof t?t:t+"",i),s=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new r(n,i)},a=(t,i)=>{e?t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):i.forEach(e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)})},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return o(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c,h;const d={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))}),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=p){var n,r;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const s=(null!==(r=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==r?r:d.toAttribute)(e,i.type);this._$Ei=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}_$AK(t,e){var i,n,r;const o=this.constructor,s=o._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=o.getPropertyOptions(s),a=t.converter,l=null!==(r=null!==(n=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==r?r:d.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((t,e)=>this[e]=t),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach((t,e)=>this._$Eg(e,this[e],t)),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m,f;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null===(c=globalThis.reactiveElementPlatformSupport)||void 0===c||c.call(globalThis,{ReactiveElement:g}),(null!==(h=globalThis.reactiveElementVersions)&&void 0!==h?h:globalThis.reactiveElementVersions=[]).push("1.0.0-rc.4");const v=globalThis.trustedTypes,b=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,_="?"+y,$=`<${_}>`,x=document,w=(t="")=>x.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,z=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,P=/"/g,N=/^(?:script|style|textarea)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),D=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),O=new WeakMap,L=x.createTreeWalker(x,129,null,!1),U=(t,e)=>{const i=t.length-1,n=[];let r,o=2===e?"<svg>":"",s=k;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(s.lastIndex=h,l=s.exec(i),null!==l);)h=s.lastIndex,s===k?"!--"===l[1]?s=C:void 0!==l[1]?s=z:void 0!==l[2]?(N.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=E):void 0!==l[3]&&(s=E):s===E?">"===l[0]?(s=null!=r?r:k,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?E:'"'===l[3]?P:M):s===P||s===M?s=E:s===C||s===z?s=k:(s=E,r=void 0);const d=s===E&&t[e+1].startsWith("/>")?" ":"";o+=s===k?i+$:c>=0?(n.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+y+d):i+y+(-2===c?(n.push(void 0),e):d)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==b?b.createHTML(a):a,n]};class Y{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const s=t.length-1,a=this.parts,[l,c]=U(t,e);if(this.el=Y.createElement(l,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=L.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=c[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?F:"@"===e[1]?V:B})}else a.push({type:6,index:r})}for(const e of t)n.removeAttribute(e)}if(N.test(n.tagName)){const t=n.textContent.split(y),e=t.length-1;if(e>0){n.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],w()),L.nextNode(),a.push({type:2,index:++r});n.append(t[e],w())}}}else if(8===n.nodeType)if(n.data===_)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(y,t+1));)a.push({type:7,index:r}),t+=y.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,n){var r,o,s,a;if(e===D)return e;let l=void 0!==n?null===(r=i._$Cl)||void 0===r?void 0:r[n]:i._$Cu;const c=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(s=(a=i)._$Cl)&&void 0!==s?s:a._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=I(t,l._$AS(t,e.values),l,n)),e}class j{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);L.currentNode=r;let o=L.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new R(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new W(o,this,t)),this.v.push(e),l=n[++a]}s!==(null==l?void 0:l.index)&&(o=L.nextNode(),s++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{constructor(t,e,i,n){var r;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),A(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==D&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==T&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=Y.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new j(r,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new Y(t)),e}M(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new R(this.A(w()),this.A(w()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,i,n,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(void 0===r)t=I(this,t,e,0),o=!A(t)||t!==this._$AH&&t!==D,o&&(this._$AH=t);else{const n=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=I(this,n[i+s],e,s),a===D&&(a=this._$AH[s]),o||(o=!A(a)||a!==this._$AH[s]),a===T?t=T:t!==T&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!n&&this.k(t)}k(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends B{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===T?void 0:t}}class F extends B{constructor(){super(...arguments),this.type=4}k(t){t&&t!==T?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends B{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:T)===D)return;const n=this._$AH,r=t===T&&n!==T||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==T&&(n===T||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,J,q;null===(m=globalThis.litHtmlPlatformSupport)||void 0===m||m.call(globalThis,Y,R),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.0.0-rc.5");class G extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,r;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let s=o._$litPart$;if(void 0===s){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new R(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return D}}G.finalized=!0,G._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:G}),null===(J=globalThis.litElementPlatformSupport)||void 0===J||J.call(globalThis,{LitElement:G}),(null!==(q=globalThis.litElementVersions)&&void 0!==q?q:globalThis.litElementVersions=[]).push("3.0.0-rc.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function tt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):X(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function et(t){return tt({...t,state:!0})}var it=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,nt="[^\\s]+",rt=/\[([^]*?)\]/gm;function ot(t,e){for(var i=[],n=0,r=t.length;n<r;n++)i.push(t[n].substr(0,e));return i}var st=function(t){return function(e,i){var n=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return n>-1?n:null}};function at(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var n=0,r=e;n<r.length;n++){var o=r[n];for(var s in o)t[s]=o[s]}return t}var lt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ct=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=ot(ct,3),dt={dayNamesShort:ot(lt,3),dayNames:lt,monthNamesShort:ht,monthNames:ct,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},ut=at({},dt),pt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},gt={D:function(t){return String(t.getDate())},DD:function(t){return pt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return pt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return pt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return pt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return pt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return pt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return pt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return pt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return pt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return pt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return pt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+pt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+pt(Math.floor(Math.abs(e)/60),2)+":"+pt(Math.abs(e)%60,2)}},mt=function(t){return+t-1},ft=[null,"[1-9]\\d?"],vt=[null,nt],bt=["isPm",nt,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],yt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],_t=(st("monthNamesShort"),st("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var $t,xt,wt=function(t,e,i){if(void 0===e&&(e=_t.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var n=[];e=(e=_t[e]||e).replace(rt,(function(t,e){return n.push(e),"@@@"}));var r=at(at({},ut),i);return(e=e.replace(it,(function(e){return gt[e](t,r)}))).replace(/@@@/g,(function(){return n.shift()}))},At=function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleDateString(e.language,{year:"numeric",month:"long",day:"numeric"})}:function(t){return wt(t,"mediumDate")},St=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleString(e.language,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(t){return wt(t,"haDateTime")},kt=function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleTimeString(e.language,{hour:"numeric",minute:"2-digit"})}:function(t){return wt(t,"shortTime")};function Ct(t){return t.substr(0,t.indexOf("."))}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}($t||($t={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(xt||(xt={}));var zt=function(t,e,i){var n;switch(null==e?void 0:e.number_format){case $t.comma_decimal:n=["en-US","en"];break;case $t.decimal_comma:n=["de","es","it"];break;case $t.space_comma:n=["fr","sv","cs"];break;case $t.system:n=void 0;break;default:n=null==e?void 0:e.language}if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},!Number.isNaN(Number(t))&&Intl&&(null==e?void 0:e.number_format)!==$t.none)try{return new Intl.NumberFormat(n,Et(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,Et(t,i)).format(Number(t))}return t?t.toString():""},Et=function(t,e){var i=e||{};if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var n=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=n,i.maximumFractionDigits=n}return i};function Mt(t,e,i,n){var r=void 0!==n?n:e.state;if("unknown"===r||"unavailable"===r)return t("state.default."+r);if(e.attributes.unit_of_measurement)return zt(r,i)+" "+e.attributes.unit_of_measurement;var o=function(t){return Ct(t.entity_id)}(e);if("input_datetime"===o){var s;if(!e.attributes.has_time)return s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),At(s,i);if(!e.attributes.has_date){var a=new Date;return s=new Date(a.getFullYear(),a.getMonth(),a.getDay(),e.attributes.hour,e.attributes.minute),kt(s,i)}return s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),St(s,i)}return"humidifier"===o&&"on"===r&&e.attributes.humidity?e.attributes.humidity+" %":"counter"===o||"number"===o?zt(r,i):e.attributes.device_class&&t("component."+o+".state."+e.attributes.device_class+"."+e.state)||t("component."+o+".state._."+e.state)||e.state}const Pt=(t,e)=>0!=(t.attributes.supported_features&e);const Nt=(t,e,i,n)=>{n=n||{},i=null==i?{}:i;const r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=i,t.dispatchEvent(r),r},Ht=(t,e,i,n,r,o)=>{const s=[];(null==r?void 0:r.length)&&s.push(t=>r.includes(Ct(t))),o&&s.push(e=>t.states[e]&&o(t.states[e]));const a=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const n=[];for(let r=0;r<t.length&&n.length<i;r++){let i=!0;for(const n of e)if(!n(t[r])){i=!1;break}i&&n.push(t[r])}return n})(i,s,e);if(a.length<e&&n.length){const i=Ht(t,e-a.length,n,[],r,o);a.push(...i)}return a},Dt=t=>{const e=[];return t.map(t=>{const i={entity:t};e.push(i)}),e};var Tt="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";let Ot=window.cardHelpers;new Promise(async t=>{if(Ot&&t(),window.loadCardHelpers){Ot=await window.loadCardHelpers(),window.cardHelpers=Ot;Ot.createCardElement({type:"entities",entities:[]}).constructor.getConfigElement(),t()}});let Lt=class extends G{constructor(){super(...arguments),this.shown=!0}render(){return this.zone&&this.hass?H`
      <div class="zone">
        <div class="zoneName">
          <paper-input
            .label=${"Zone Name"}
            .value=${this.zone.name}
            @value-changed=${t=>this._valueChanged(t,"name")}
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
        ${1==this.shown?H`
              <hui-entities-card-row-editor
                .hass="${this.hass}"
                .entities="${this.zone.entities}"
                @entities-changed=${t=>this._valueChanged(t,"ents")}
              >
              </hui-entities-card-row-editor>
              <mwc-button raised label="Delete Zone" @click=${this._removeZone}>
                <ha-svg-icon .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}></ha-svg-icon>
              </mwc-button>
            `:H``}
      </div>
    `:H``}async _valueChanged(t,e){const i="ents"===e?t.detail.entities:this.zone.entities,n="name"===e?t.detail.value:this.zone.name;Nt(this,"entities-changed",{zone:{name:n,entities:i},zoneIndex:this.zoneIndex})}async _removeZone(){Nt(this,"entities-changed",{zone:this.zone,remove:!0,zoneIndex:this.zoneIndex})}_toggle(){1==this.shown?this.shown=!1:this.shown=!0}static get styles(){return[s`
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
      `]}};t([tt({attribute:!1})],Lt.prototype,"hass",void 0),t([tt({attribute:!1})],Lt.prototype,"zone",void 0),t([et()],Lt.prototype,"entities",void 0),t([et()],Lt.prototype,"name",void 0),t([et()],Lt.prototype,"shown",void 0),t([et()],Lt.prototype,"zoneIndex",void 0),Lt=t([Q("zone-entity-selector")],Lt);let Ut=class extends G{constructor(){super(...arguments),this.shown=!0}render(){return this.apperanceProperties?H`
      <div class="zone1">
        <div class="entities1">
          ${this.apperanceProperties.propArray.map(t=>t.type?H`
                ${this._addIncInput(t.name,t.type)}
              `:H`
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
    `:H``}_valueChanged(t,e){if(this.apperanceProperties){let i;const n=[...this.apperanceProperties.propArray],r=n.findIndex(({name:t})=>t==e),o=Object.assign({},n[r]);i="number"==o.type?+t.detail.value:t.detail.value,o.attr=i,n.splice(r,1,o),this.apperanceProperties=Object.assign(Object.assign({},this.apperanceProperties),{propArray:n}),Nt(this,"properties-changed",{_apperanceProperties:this.apperanceProperties})}}_addIncInput(t,e){return H`
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
      `]}};t([et()],Ut.prototype,"shown",void 0),t([tt({attribute:!1})],Ut.prototype,"apperanceProperties",void 0),Ut=t([Q("editor-properties")],Ut);let Yt=class extends G{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this._configEntities=t.zones[0].entities,this._zoneName=t.zones[0].name,this._shown=!0,this._apperanceProperties=t.props,this._zoneCount||(this._config.zones.length>0?this._zoneCount=this._config.zones.length:this._zoneCount=0)}shouldUpdate(){return this._initialized,!0}render(){return this.hass?H`
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
            ${1==this._shown?H`
                  <editor-properties
                    .apperanceProperties=${this._apperanceProperties}
                    @properties-changed=${this._updateProps}
                  ></editor-properties>
                `:H``}
          </div>
          ${this._config.zones.map((t,e)=>H`
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
    `:H``}_addZone(){this._zoneCount=this._zoneCount+1;const t=Object.keys(this.hass.states),e=Ht(this.hass,3,t,[],["light","switch","fan"]),i=[{name:"Zone ".concat(this._zoneCount.toString()),entities:Dt(e)}],n=[...this._config.zones,...i];this._config=Object.assign(Object.assign({},this._config),{zones:n}),Nt(this,"config-changed",{config:this._config})}_valueChanged(t){if(t.stopPropagation(),this._config&&this.hass&&t.detail.zone){const e=t.detail.zone,i=t.detail.zoneIndex,n=[...this._config.zones];t.detail.remove?t.detail.remove&&n.splice(i,1):n.splice(i,1,e),this._config=Object.assign(Object.assign({},this._config),{zones:n}),Nt(this,"config-changed",{config:this._config})}}_toggleVis(){1==this._shown?this._shown=!1:this._shown=!0}_updateProps(t){const e=t.detail._apperanceProperties;this._config=Object.assign(Object.assign({},this._config),{props:e}),Nt(this,"config-changed",{config:this._config})}static get styles(){return s`
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
    `}};t([tt({attribute:!1})],Yt.prototype,"hass",void 0),t([et()],Yt.prototype,"_config",void 0),t([et()],Yt.prototype,"_configEntities",void 0),t([et()],Yt.prototype,"_zoneName",void 0),t([et()],Yt.prototype,"_toggle",void 0),t([et()],Yt.prototype,"_zoneCount",void 0),t([et()],Yt.prototype,"_shown",void 0),t([et()],Yt.prototype,"_apperanceProperties",void 0),Yt=t([Q("panel-card-editor")],Yt);console.info("%c  PANEL-CARD \n%c  Version 1.0.0    ","color: white; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"panel-card",name:"Panel Card",description:"A custom panel to display entities grouped into zones"});let It=class extends G{static async getConfigElement(){return document.createElement("panel-card-editor")}static getStubConfig(t,e,i,n,r){const o=Ht(t,3,e,i,["light","switch","sensor"]);return{type:"custom:panel-card",zones:[{name:"default",entities:Dt(o)}],props:{propArray:[{name:"Switch Height",type:"number",attr:75},{name:"Switch Width",type:"number",attr:300},{name:"Slider Background Color",type:"color",attr:"#4d4d4d"},{name:"Slider Foreground Color",type:"color",attr:"#000000"}]}}}setConfig(t){if(!t.zones)throw new Error("You need to define atleast one zone");this.config=Object.assign({name:"panelCard"},t),this.active=this.config.zones[0].name}render(){this.active||(console.log("no active zones"),this.active=this.config.zones[0].name);const t=this.active,e=this.config.zones.find(e=>e.name===t),i=this.config.props;return H`
      <div class="page">
        <div class="top" style="height: ${this.config.zones.length}">
          <div class="buttons">
            ${this.config.zones.map(t=>H`<button tabindex='0' class="btn-zone" style="--backColor: ${i.propArray[2].attr}; --forgroundColor: ${i.propArray[3].attr};" @click=${this._clickHandler}>${t.name}</button>`)}
          </div>
        </div>
        <div class="spacer" style="--backColor: ${i.propArray[2].attr};"></div>
        <div class="bottom">
          <div class="inner-main">
            ${e.entities.map(t=>{const e=this.hass.states[t.entity];return e?H`
                <div class="holder" style="--slider-width: ${i.propArray[1].attr+"px"}; --slider-height: ${i.propArray[0].attr+"px"};--backColor: ${i.propArray[2].attr}; --forgroundColor: ${i.propArray[3].attr};">
                  <div class="innerHolder" >
                    ${this._getEntityTypeHTML(e,t,i)}
                  </div>
                </div>
              </div>
            </div>
                `:H``})}
          </div>
        </div>
      </div>

    `}_getEntityTypeHTML(t,e,i){const n=Ct(t.entity_id);switch(n){case"light":return H`
        <div class="range-holder" >
            <div class="range-info">
              <h2 @click=${e=>this._handleMoreInfo(t)}>${e.name||t.attributes.friendly_name}</h2>
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
       `;case"switch":case"fan":case"group":case"lock":let r=0;switch(t.state){case"on":case"unlocked":r=1;break;case"off":case"locked":r=0;break;default:r=0}return H`
          <div class="switch-holder">
            <div class="switch-label">
              <h2 @click=${e=>this._handleMoreInfo(t)}>${e.name||t.attributes.friendly_name}</h2>
            </div>
            <div class="${"lock"===n?"switch-toggle lock":"switch-toggle"}">
              <input type="checkbox" id="${e.name||t.attributes.friendly_name}" ?checked="${1===r}"  @click= ${e=>this._switch(e,t)}>
              <label for="${e.name||t.attributes.friendly_name}"></label>
            </div>
          </div>
        `;case"sensor":case"binary_sensor":case"air_quality":return H`
        <div class="info">
          <h2 @click=${e=>this._handleMoreInfo(t)}>${t.attributes.friendly_name}</h2>
          <h4>${Mt(this.hass.localize,t,this.hass.locale)}</h4>
        </div>
        `;case"cover":e.entity;return H`
        <div class= "cover">
          <div class="info">
            <h2 @click=${e=>this._handleMoreInfo(t)}>${t.attributes.friendly_name}</h2>
          </div>
          <div class= "controls" style="color: ${i.propArray[3].attr}; --disabled-text-color: ${i.propArray[2].attr};">
            ${function(t){const e=!!(Pt(t,1)||Pt(t,2)||Pt(t,8)),i=!!(Pt(t,16)||Pt(t,32)||Pt(t,64));return!e&&i}(t)?H`
               <ha-cover-tilt-controls
                 .hass=${this.hass}
                 .stateObj=${t}
               ></ha-cover-tilt-controls>`:H`
               <ha-cover-controls
                 .hass=${this.hass}
                 .stateObj=${t}
               ></ha-cover-controls>`}
          </div>
        </div>
        `;default:return H`<h2>UNKNOWN ENTITY TYPE</h2>`}}_setBrightness(t,e){this.hass.callService("homeassistant","turn_on",{entity_id:t.entity_id,brightness:2.55*e})}_switch(t,e){const i=!!t.target.checked;!function(t,e,i){void 0===i&&(i=!0);var n,r=Ct(e),o="group"===r?"homeassistant":r;switch(r){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(o,n,{entity_id:e})}(this.hass,e.entity_id,i)}_handleMoreInfo(t){Nt(this,"hass-more-info",{entityId:t.entity_id})}_clickHandler(t){this.active=t.target.innerText}static get styles(){return s`
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
        height: 100%;
        margin: auto;
      }
      .page > .bottom > .inner-main > .holder {
        width: var(--slider-width);
        height: var(--slider-height);
        position: relative;
        margin: auto;
        margin-bottom: 10px;
      }

      h2 {
        display: block;
        margin-bottom: 0px;
        text-align: center;
        font-size: 16px;
        margin-top: 0px;
        z-index: 10;
        position: relative;
      }
      h4, span {
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
        -webkit-appearance: none;
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
        cursor: ew-resize;
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
      }
      .range-info{
        width: 50%;
      }

      .switch-holder {
        height: var(--slider-height);
        width: var(--slider-width);
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

      .info, .cover{
        width: var(--slider-width);
        height: var(--slider-height);
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

    `}};t([tt({attribute:!1})],It.prototype,"hass",void 0),t([et()],It.prototype,"config",void 0),t([et()],It.prototype,"active",void 0),It=t([Q("panel-card")],It);export{It as PanelCard};
