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
function t(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${r}`);class s{constructor(t,e){this.parts=[],this.element=e;const n=[],r=[],s=document.createTreeWalker(e.content,133,null,!1);let c=0,h=-1,p=0;const{strings:u,values:{length:g}}=t;for(;p<g;){const t=s.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)a(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=u[p],n=d.exec(e)[2],i=n.toLowerCase()+"$lit$",r=t.getAttribute(i);t.removeAttribute(i);const s=r.split(o);this.parts.push({type:"attribute",index:h,name:n,strings:s}),p+=s.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,r=e.split(o),s=r.length-1;for(let e=0;e<s;e++){let n,o=r[e];if(""===o)n=l();else{const t=d.exec(o);null!==t&&a(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(o)}i.insertBefore(n,t),this.parts.push({type:"node",index:++h})}""===r[s]?(i.insertBefore(l(),t),n.push(t)):t.data=r[s],p+=s}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&h!==c||(h++,e.insertBefore(l(),t)),c=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(n.push(t),h--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),p++}}else s.currentNode=r.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:n},parts:i}=t,r=document.createTreeWalker(n,133,null,!1);let o=u(i),s=i[o],a=-1,c=0;const l=[];let d=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-c,o=u(i,o),s=i[o]}l.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},u=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(c(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const g=new WeakMap,f=t=>"function"==typeof t&&g.has(t),m={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let o,s=0,a=0,l=r.nextNode();for(;s<i.length;)if(o=i[s],c(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(n.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=n.pop(),l=r.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${i} `;class w{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],s=t.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===t.indexOf("--\x3e",s+1);const a=d.exec(t);e+=null===a?t+(n?b:r):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==_&&(e=_.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let i="";for(let r=0;r<e;r++){i+=t[r];const e=n[r];if(void 0!==e){const t=e.value;if(x(t)||!S(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||x(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class z{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}const t=this.__pendingValue;t!==m&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const n=new v(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const r of t)n=e[i],void 0===n&&(n=new z(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(r),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}class $ extends k{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends C{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class A{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=T(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function E(t){let e=O.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(i);return n=e.keyString.get(r),void 0===n&&(n=new s(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}const O=new Map,D=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,i){const r=e[0];if("."===r){return new $(t,e.slice(1),n).parts}if("@"===r)return[new A(t,e.slice(1),i.eventContext)];if("?"===r)return[new P(t,e.slice(1),n)];return new k(t,e,n).parts}handleTextExpression(t){return new z(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const I=(t,...e)=>new w(t,e,"html",V)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,H=(t,e)=>`${t}--${e}`;let j=!0;void 0===window.ShadyCSS?j=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),j=!1);const L=t=>e=>{const n=H(e.type,t);let r=O.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},O.set(n,r));let o=r.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(i);if(o=r.keyString.get(a),void 0===o){const n=e.getTemplateElement();j&&window.ShadyCSS.prepareTemplateDom(n,t),o=new s(e,n),r.keyString.set(a,o)}return r.stringsArray.set(e.strings,o),o},Y=["html","svg"],U=new Set,R=(t,e,n)=>{U.add(t);const i=n?n.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:o}=r;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const s=document.createElement("style");for(let t=0;t<o;t++){const e=r[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{Y.forEach(e=>{const n=O.get(H(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),h(t,n)})})})(t);const a=i.content;n?function(t,e,n=null){const{element:{content:i},parts:r}=t;if(null==n)return void i.appendChild(e);const o=document.createTreeWalker(i,133,null,!1);let s=u(r),a=0,c=-1;for(;o.nextNode();){c++;for(o.currentNode===n&&(a=p(e),n.parentNode.insertBefore(e,n));-1!==s&&r[s].index===c;){if(a>0){for(;-1!==s;)r[s].index+=a,s=u(r,s);return}s=u(r,s)}}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),h(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const F={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:B};class Z extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdateInternal(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=B){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||F,r="function"==typeof i?i:i.fromAttribute;return r?r(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||F.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=W){const i=this.constructor,r=i._attributeNameForProperty(t,n);if(void 0!==r){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let i=!0;if(void 0!==t){const r=this.constructor;n=n||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Z.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),J=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function K(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):J(t,e)}function G(t){return K({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class tt{constructor(t,e){if(e!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new tt(n,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const nt={};class it extends Z{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),i=[];n.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),X)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==nt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return nt}}it.finalized=!0,it.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,o=D.has(e),s=j&&11===e.nodeType&&!!e.host,a=s&&!U.has(r),c=a?document.createDocumentFragment():e;if(((t,e,i)=>{let r=D.get(e);void 0===r&&(n(e,e.firstChild),D.set(e,r=new z(Object.assign({templateFactory:E},i))),r.appendInto(e)),r.setValue(t),r.commit()})(t,c,Object.assign({templateFactory:L(r)},i)),a){const t=D.get(c);D.delete(c);const i=t.value instanceof v?t.value.template:void 0;R(r,c,i),n(e,e.firstChild),e.appendChild(c),D.set(e,t)}!o&&s&&window.ShadyCSS.styleElement(e.host)};var rt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ot="[^\\s]+",st=/\[([^]*?)\]/gm;function at(t,e){for(var n=[],i=0,r=t.length;i<r;i++)n.push(t[i].substr(0,e));return n}var ct=function(t){return function(e,n){var i=n[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return i>-1?i:null}};function lt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var i=0,r=e;i<r.length;i++){var o=r[i];for(var s in o)t[s]=o[s]}return t}var dt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ht=["January","February","March","April","May","June","July","August","September","October","November","December"],pt=at(ht,3),ut={dayNamesShort:at(dt,3),dayNames:dt,monthNamesShort:pt,monthNames:ht,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},gt=lt({},ut),ft=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},mt={D:function(t){return String(t.getDate())},DD:function(t){return ft(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return ft(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return ft(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return ft(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return ft(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return ft(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return ft(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return ft(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return ft(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return ft(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return ft(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+ft(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+ft(Math.floor(Math.abs(e)/60),2)+":"+ft(Math.abs(e)%60,2)}},yt=function(t){return+t-1},vt=[null,"[1-9]\\d?"],_t=[null,ot],bt=["isPm",ot,function(t,e){var n=t.toLowerCase();return n===e.amPm[0]?0:n===e.amPm[1]?1:null}],wt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var n=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?n:-n}return 0}],xt=(ct("monthNamesShort"),ct("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var St=function(t,e,n){if(void 0===e&&(e=xt.default),void 0===n&&(n={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var i=[];e=(e=xt[e]||e).replace(st,(function(t,e){return i.push(e),"@@@"}));var r=lt(lt({},gt),n);return(e=e.replace(rt,(function(e){return mt[e](t,r)}))).replace(/@@@/g,(function(){return i.shift()}))},kt=function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})}:function(t){return St(t,"mediumDate")},Ct=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleString(e,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(t){return St(t,"haDateTime")},zt=function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit"})}:function(t){return St(t,"shortTime")};function Pt(t){return t.substr(0,t.indexOf("."))}function $t(t,e,n){if("unknown"===e.state||"unavailable"===e.state)return t("state.default."+e.state);if(e.attributes.unit_of_measurement)return e.state+" "+e.attributes.unit_of_measurement;var i=function(t){return Pt(t.entity_id)}(e);if("input_datetime"===i){var r;if(!e.attributes.has_time)return r=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),kt(r,n);if(!e.attributes.has_date){var o=new Date;return r=new Date(o.getFullYear(),o.getMonth(),o.getDay(),e.attributes.hour,e.attributes.minute),zt(r,n)}return r=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),Ct(r,n)}return e.attributes.device_class&&t("component."+i+".state."+e.attributes.device_class+"."+e.state)||t("component."+i+".state._."+e.state)||e.state}var Nt=["closed","locked","off"],Mt=function(t,e,n,i){i=i||{},n=null==n?{}:n;var r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=n,t.dispatchEvent(r),r},At=function(t){Mt(window,"haptic",t)},Tt=function(t,e,n){void 0===n&&(n=!0);var i,r=Pt(e),o="group"===r?"homeassistant":r;switch(r){case"lock":i=n?"unlock":"lock";break;case"cover":i=n?"open_cover":"close_cover";break;default:i=n?"turn_on":"turn_off"}return t.callService(o,i,{entity_id:e})},Et=function(t,e,n,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(At("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(n.entity||n.camera_image)&&Mt(t,"hass-more-info",{entityId:n.entity?n.entity:n.camera_image});break;case"navigate":i.navigation_path&&function(t,e,n){void 0===n&&(n=!1),n?history.replaceState(null,"",e):history.pushState(null,"",e),Mt(window,"location-changed",{replace:n})}(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":n.entity&&(function(t,e){var n=Nt.includes(t.states[e].state);Tt(t,e,n)}(e,n.entity),At("success"));break;case"call-service":if(!i.service)return void At("failure");var r=i.service.split(".",2);e.callService(r[0],r[1],i.service_data),At("success")}};const Ot=(t,e,n,i,r,o)=>{const s=[];(null==r?void 0:r.length)&&s.push(t=>r.includes(Pt(t))),o&&s.push(e=>t.states[e]&&o(t.states[e]));const a=((t,e,n)=>{(!n||n>t.length)&&(n=t.length);const i=[];for(let r=0;r<t.length&&i.length<n;r++){let n=!0;for(const i of e)if(!i(t[r])){n=!1;break}n&&i.push(t[r])}return i})(n,s,e);if(a.length<e&&i.length){const n=Ot(t,e-a.length,i,[],r,o);a.push(...n)}return a},Dt=t=>{const e=[];return t.map(t=>{const n={entity:t};e.push(n)}),e};var Vt="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",It="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";let Ht=class extends it{constructor(){super(...arguments),this.shown=!0}render(){var t,e;return this.zone&&this.hass?I`
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
            <ha-svg-icon .path=${Vt}></ha-svg-icon>
          </mwc-icon-button>
        </div>
        ${1==this.shown?I`
              <div class="entities">
                ${null===(e=this.zone)||void 0===e?void 0:e.entities.map((t,e)=>I`
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
                        <ha-svg-icon .path=${It}></ha-svg-icon>
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
                  <ha-svg-icon .path=${It}></ha-svg-icon>
                </mwc-button>
              </div>
            `:I``}
      </div>
    `:I``}_valueChanged(t,e){const n=t.detail.value,i=e,r=this.zone.entities.concat(),o=this.zone.name;""===n?r.splice(i,1):r[i]={entity:n};Mt(this,"entities-changed",{zone:{name:o,entities:r},zoneIndex:this.zoneIndex})}_titleChanged(t){const e=t.detail.value,n=[...this.zone.entities];Mt(this,"entities-changed",{zone:{name:e,entities:n},zoneIndex:this.zoneIndex})}async _addEntity(t){var e;const n=t.detail.value,i=this.zone.name,r=null===(e=this.zone)||void 0===e?void 0:e.entities.concat({entity:n});t.target.value="";Mt(this,"entities-changed",{zone:{name:i,entities:r},zoneIndex:this.zoneIndex})}async _removeEntity(t){const e=t.currentTarget.index,n=this.zone.entities.concat(),i=this.zone.name;n.splice(e,1);Mt(this,"entities-changed",{zone:{name:i,entities:n},zoneIndex:this.zoneIndex})}async _removeZone(){Mt(this,"entities-changed",{zone:this.zone,remove:!0})}_toggle(){1==this.shown?this.shown=!1:this.shown=!0}static get styles(){return[et`
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
      `]}};t([K({attribute:!1})],Ht.prototype,"hass",void 0),t([K({attribute:!1})],Ht.prototype,"zone",void 0),t([G()],Ht.prototype,"entities",void 0),t([G()],Ht.prototype,"name",void 0),t([G()],Ht.prototype,"shown",void 0),t([G()],Ht.prototype,"zoneIndex",void 0),Ht=t([q("zone-entity-selector")],Ht);let jt=class extends it{constructor(){super(...arguments),this.shown=!0}render(){return this.apperanceProperties?I`
      <div class="zone1">
        <div class="entities1">
          ${this.apperanceProperties.propArray.map(t=>t.type?I`
                ${this._addIncInput(t.name,t.type)}
              `:I`
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
    `:I``}_valueChanged(t,e){if(this.apperanceProperties){let n;const i=[...this.apperanceProperties.propArray],r=i.findIndex(({name:t})=>t==e),o=Object.assign({},i[r]);n="number"==o.type?+t.detail.value:t.detail.value,o.attr=n,i.splice(r,1,o),this.apperanceProperties=Object.assign(Object.assign({},this.apperanceProperties),{propArray:i}),Mt(this,"properties-changed",{_apperanceProperties:this.apperanceProperties})}}_addIncInput(t,e){return I`
      <paper-input
        label=${t}
        type=${e}
        value=${this.apperanceProperties.propArray.find(({name:e})=>e===t).attr}
        @value-changed=${e=>this._valueChanged(e,t)}
      >
        <div slot="suffix">${"number"==e?"px":""}</div>
      </paper-input>
    `}static get styles(){return[et`
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
      `]}};t([G()],jt.prototype,"shown",void 0),t([K({attribute:!1})],jt.prototype,"apperanceProperties",void 0),jt=t([q("editor-properties")],jt);let Lt=class extends it{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this._configEntities=t.zones[0].entities,this._zoneName=t.zones[0].name,this._shown=!0,this._apperanceProperties=t.props,this.loadCardHelpers(),this._zoneCount||(this._config.zones.length>0?this._zoneCount=this._config.zones.length:this._zoneCount=0)}shouldUpdate(){return this._initialized||this._initialize(),!0}render(){return this.hass&&this._helpers?(this._helpers.importMoreInfoControl("climate"),I`
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
                <ha-svg-icon .path=${Vt}></ha-svg-icon>
              </mwc-icon-button>
            </div>
            ${1==this._shown?I`
                  <editor-properties
                    .apperanceProperties=${this._apperanceProperties}
                    @properties-changed=${this._updateProps}
                  ></editor-properties>
                `:I``}
          </div>
          ${this._config.zones.map((t,e)=>I`
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
    `):I``}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_addZone(){this._zoneCount=this._zoneCount+1;const t=Object.keys(this.hass.states),e=Ot(this.hass,3,t,[],["light","switch","fan"]),n=[{name:"Zone ".concat(this._zoneCount.toString()),entities:Dt(e)}],i=[...this._config.zones,...n];this._config=Object.assign(Object.assign({},this._config),{zones:i}),Mt(this,"config-changed",{config:this._config})}_valueChanged(t){if(t.stopPropagation(),this._config&&this.hass)if(t.detail.zone&&!t.detail.remove){const e=t.detail.zone,n=t.detail.zoneIndex,i=[...this._config.zones];i.splice(n,1,e),this._config=Object.assign(Object.assign({},this._config),{zones:i}),Mt(this,"config-changed",{config:this._config})}else if(t.detail.remove){const e=t.detail.zone,n=this._config.zones.findIndex(t=>t.name===e.name),i=[...this._config.zones];i.splice(n,1),this._config=Object.assign(Object.assign({},this._config),{zones:i}),Mt(this,"config-changed",{config:this._config})}}_toggleVis(){1==this._shown?this._shown=!1:this._shown=!0}_updateProps(t){const e=t.detail._apperanceProperties;this._config=Object.assign(Object.assign({},this._config),{props:e}),Mt(this,"config-changed",{config:this._config})}static get styles(){return et`
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
    `}};t([K({attribute:!1})],Lt.prototype,"hass",void 0),t([G()],Lt.prototype,"_config",void 0),t([G()],Lt.prototype,"_configEntities",void 0),t([G()],Lt.prototype,"_zoneName",void 0),t([G()],Lt.prototype,"_toggle",void 0),t([G()],Lt.prototype,"_helpers",void 0),t([G()],Lt.prototype,"_zoneCount",void 0),t([G()],Lt.prototype,"_shown",void 0),t([G()],Lt.prototype,"_apperanceProperties",void 0),Lt=t([q("panel-card-editor")],Lt);var Yt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ut={common:Yt},Rt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Ft={common:Rt};const Bt={en:Object.freeze({__proto__:null,common:Yt,default:Ut}),nb:Object.freeze({__proto__:null,common:Rt,default:Ft})};function Wt(t,e="",n=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce((t,e)=>t[e],Bt[i])}catch(e){r=t.split(".").reduce((t,e)=>t[e],Bt.en)}return void 0===r&&(r=t.split(".").reduce((t,e)=>t[e],Bt.en)),""!==e&&""!==n&&(r=r.replace(e,n)),r}console.info(`%c  PANEL-CARD \n%c  ${Wt("common.version")} 1.0.0    `,"color: white; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"panel-card",name:"Panel Card",description:"A custom panel to display entities grouped into zones"});let Zt=class extends it{static async getConfigElement(){return document.createElement("panel-card-editor")}static getStubConfig(t,e,n,i,r){const o=Ot(t,3,e,n,["light","switch","sensor"]);return{type:"custom:panel-card",zones:[{name:"default",entities:Dt(o)}],props:{propArray:[{name:"Switch Height",type:"number",attr:75},{name:"Switch Width",type:"number",attr:300},{name:"Slider Background Color",type:"color",attr:"#4d4d4d"},{name:"Slider Foreground Color",type:"color",attr:"#000000"}]}}}setConfig(t){if(!t.zones)throw new Error("You need to define atleast one zone");this.config=Object.assign({name:"panelCard"},t),this.active=this.config.zones[0].name}render(){this.active||(console.log("no active zones"),this.active=this.config.zones[0].name);const t=this.active,e=this.config.zones.find(e=>e.name===t),n=this.config.props;return this.config.show_warning?this._showWarning(Wt("common.show_warning")):this.config.show_error?this._showError(Wt("common.show_error")):I`
      <div class="page">
        <div class="top" style="height: ${this.config.zones.length}">
          <div class="buttons">
            ${this.config.zones.map(t=>I`<button tabindex='0' class="btn-zone" style="--backColor: ${n.propArray[2].attr}; --forgroundColor: ${n.propArray[3].attr};" @click=${this._clickHandler}>${t.name}</button>`)}
          </div>
        </div>
        <div class="spacer" style="--backColor: ${n.propArray[2].attr};"></div>
        <div class="bottom">
          <div class="inner-main">
            ${e.entities.map(t=>{const e=this.hass.states[t.entity];return e?I`
                <div class="holder" style="--slider-width: ${n.propArray[1].attr+"px"};">
                  <div class="innerHolder" >
                    ${this._getEntityTypeHTML(e,t,n)}
                  </div>
                </div>
              </div>
            </div>
                `:I``})}
          </div>
        </div>
      </div>
    `}_getEntityTypeHTML(t,e,n){const i=Pt(t.entity_id);switch(i){case"light":return I`
        <div class="range-holder" style="--slider-width: ${n.propArray[1].attr+"px"}; --slider-height: ${n.propArray[0].attr+"px"}; --backColor: ${n.propArray[2].attr}; --forgroundColor: ${n.propArray[3].attr}">
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
       `;case"switch":case"fan":case"group":case"lock":let r=0;switch(t.state){case"on":case"locked":r=1;break;case"off":case"unlocked":r=0;break;default:r=0}return I`
          <div
            class="switch-holder"
            style="--switch-height: ${n.propArray[0].attr+"px"};--switch-width: ${n.propArray[1].attr+"px"};--backColor: ${n.propArray[2].attr}; --forgroundColor: ${n.propArray[3].attr}"
          >
            <div class="switch-label">
              <h2>${e.name||t.attributes.friendly_name}</h2>
            </div>
            <div class="${"lock"===i?"switch-toggle lock":"switch-toggle"}">
              <input type="checkbox" id="${e.name||t.attributes.friendly_name}" ?checked="${1===r}"  @click= ${e=>this._switch(e,t)}>
              <label for="${e.name||t.attributes.friendly_name}"></label>
            </div>
          </div>
          <button class="moreInfo" @click=${e=>this._handleMoreInfo(t)}></button>
        `;case"sensor":case"binary_sensor":return I`
        <div class="info" style="--sliderWidth: ${n.propArray[1].attr+"px"}; --sliderHeight: ${n.propArray[0].attr+"px"}; --backColor: ${n.propArray[2].attr}; --forgroundColor: ${n.propArray[3].attr};">
          <h2>${t.attributes.friendly_name}</h2>
          <h4>${$t(this.hass.localize,t,this.hass.language)}</h4>
        </div>
        <button class="moreInfo" @click=${e=>this._handleMoreInfo(t)}></button>
        `;default:return I`<h2>UNKNOWN ENTITY TYPE</h2>`}}_handleAction(t){this.hass&&this.config&&t.detail.action&&function(t,e,n,i){var r;"double_tap"===i&&n.double_tap_action?r=n.double_tap_action:"hold"===i&&n.hold_action?r=n.hold_action:"tap"===i&&n.tap_action&&(r=n.tap_action),Et(t,e,n,r)}(this,this.hass,this.config,t.detail.action)}_setBrightness(t,e){this.hass.callService("homeassistant","turn_on",{entity_id:t.entity_id,brightness:2.55*e})}_switch(t,e){const n=!t.target.checked;Tt(this.hass,e.entity_id,n)}_handleMoreInfo(t){Mt(this,"hass-more-info",{entityId:t.entity_id})}_clickHandler(t){this.active=t.target.innerText}_showWarning(t){return I` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),I` ${e} `}static get styles(){return et`
      .page {
        width: 100%;
        height: 90vh;
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
        height: 2%;
        background: var(--backColor);
      }
      .buttons {
        margin-top: 7px;
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
        /* color: white; */
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
        content: 'UNLOCKED';
        font-size: 8px;
      }
      .switch-toggle.lock input[type="checkbox"]:checked + label::before {
        content: 'LOCKED';
        font-size: 10px;
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
          /* color: var(--backColor); */
          box-shadow: -2px -2px 1px rgba(255,255,255,.2),
                      2px 2px 5px rgba(0,0,0, .25);
          transition: .3s ease-in-out;
      }

      .switch-toggle input[type="checkbox"]:checked + label::before {
          left: 50%;
          content: 'ON';
          /* color: var(--foregroundColor); */
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

    `}};t([K({attribute:!1})],Zt.prototype,"hass",void 0),t([G()],Zt.prototype,"config",void 0),t([G()],Zt.prototype,"active",void 0),Zt=t([q("panel-card")],Zt);export{Zt as PanelCard};
