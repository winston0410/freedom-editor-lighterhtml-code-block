var e={stringToHTML:e=>{const t=document.createElement("template");return t.innerHTML=e,t.content.firstElementChild},getSavedData:e=>e?e.data.code:""},t={};try{t.WeakMap=WeakMap}catch(e){t.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=a.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},a;function a(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var n,r=t.WeakMap,o="-"+Math.random().toFixed(6)+"%",a=!1;try{"content"in(n=document.createElement("template"))&&(n.innerHTML='<p tabindex="'+o+'"></p>',n.content.childNodes[0].getAttribute("tabindex")==o)||(o="_dt: "+o.slice(1,-1)+";",a=!0)}catch(e){}var i="\x3c!--"+o+"--\x3e",s=/^(?:style|textarea)$/i,l=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;function c(e){return e.join(i).replace(g,w).replace(v,y)}var u=" \\f\\n\\r\\t",f="[^ \\f\\n\\r\\t\\/>\"'=]+",h="[ \\f\\n\\r\\t]+"+f,d="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",p="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+f.replace("\\/","")+"))?)",v=new RegExp(d+h+p+"+)(["+u+"]*/?>)","g"),g=new RegExp(d+h+p+"*)(["+u+"]*/>)","g"),m=new RegExp("("+h+"\\s*=\\s*)(['\"]?)"+i+"\\2","gi");function y(e,t,n,r){return"<"+t+n.replace(m,b)+r}function b(e,t,n){return t+(n||'"')+o+(n||'"')}function w(e,t,n){return l.test(t)?e:"<"+t+n+"></"+t+">"}const{isArray:x}=Array,{indexOf:N,slice:C}=[];var k=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const E=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e,S=e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return t[0];const r=C.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}};var M=function(e){var t="content"in r("template")?function(e){var t=r("template");return t.innerHTML=e,t.content}:function(e){var t=r("fragment"),o=r("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;o.innerHTML="<table>"+e+"</table>",a=o.querySelectorAll(i)}else o.innerHTML=e,a=o.childNodes;return n(t,a),t};return function(e,n){return("svg"===n?o:t)(e)};function n(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function r(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function o(e){var t=r("fragment"),o=r("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",n(t,o.firstChild.childNodes),t}}(document),T=(e,t,n,r,o)=>{const a=n.length;let i=t.length,s=a,l=0,c=0,u=null;for(;l<i||c<s;)if(i===l){const t=s<a?c?r(n[c-1],-0).nextSibling:r(n[s-c],0):o;for(;c<s;)e.insertBefore(r(n[c++],1),t)}else if(s===c)for(;l<i;)u&&u.has(t[l])||e.removeChild(r(t[l],-1)),l++;else if(t[l]===n[c])l++,c++;else if(t[i-1]===n[s-1])i--,s--;else if(t[l]===n[s-1]&&n[c]===t[i-1]){const o=r(t[--i],-1).nextSibling;e.insertBefore(r(n[c++],1),r(t[l++],-1).nextSibling),e.insertBefore(r(n[--s],1),o),t[i]=n[s]}else{if(!u){u=new Map;let e=c;for(;e<s;)u.set(n[e],e++)}if(u.has(t[l])){const o=u.get(t[l]);if(c<o&&o<s){let a=l,f=1;for(;++a<i&&a<s&&u.get(t[a])===o+f;)f++;if(f>o-c){const a=r(t[l],0);for(;c<o;)e.insertBefore(r(n[c++],1),a)}else e.replaceChild(r(n[c++],1),r(t[l++],-1))}else l++}else e.removeChild(r(t[l++],-1))}return n},A={};try{A.WeakMap=WeakMap}catch(e){A.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=a.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},a;function a(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var _=A.WeakMap,L=function(e){var t="content"in r("template")?function(e){var t=r("template");return t.innerHTML=e,t.content}:function(e){var t=r("fragment"),o=r("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;o.innerHTML="<table>"+e+"</table>",a=o.querySelectorAll(i)}else o.innerHTML=e,a=o.childNodes;return n(t,a),t};return function(e,n){return("svg"===n?o:t)(e)};function n(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function r(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function o(e){var t=r("fragment"),o=r("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",n(t,o.firstChild.childNodes),t}}(document),j=function(e,t,n,r,o){var a="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(a?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],a=o.length,i=0;n&&i<a;i++)r.appendChild(e(o[i],n));return r}:a?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),O="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},$=a?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function H(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function D(e,t,n,r){for(var s=e.attributes,l=[],c=[],u=$(s,n),f=u.length,h=0;h<f;){var d,p=u[h++],v=p.value===o;if(v||1<(d=p.value.split(i)).length){var g=p.name;if(l.indexOf(g)<0){l.push(g);var m=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=s[m]||s[m.toLowerCase()];if(v)t.push(R(y,r,m,null));else{for(var b=d.length-2;b--;)n.shift();t.push(R(y,r,m,d))}}c.push(p)}}h=0;for(var w=(0<(f=c.length)&&a&&!("ownerSVGElement"in e));h<f;){var x=c[h++];w&&(x.value=""),e.removeAttribute(x.name)}var N=e.nodeName;if(/^script$/i.test(N)){var C=document.createElement(N);for(f=s.length,h=0;h<f;)C.setAttributeNode(s[h++].cloneNode(!0));C.textContent=e.textContent,e.parentNode.replaceChild(C,e)}}function W(e,t){return{type:"any",node:e,path:t}}function R(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function z(e,t){return{type:"text",node:e,path:t}}var P=k(new _);function B(e,t){var n=(e.convert||c)(t),r=e.transform;r&&(n=r(n));var a=L(n,e.type);q(a);var l=[];return function e(t,n,r,a){for(var l=t.childNodes,c=l.length,u=0;u<c;){var f=l[u];switch(f.nodeType){case 1:var h=a.concat(u);D(f,n,r,h),e(f,n,r,h);break;case 8:var d=f.textContent;if(d===o)r.shift(),n.push(s.test(t.nodeName)?z(t,a):W(f,a.concat(u)));else switch(d.slice(0,2)){case"/*":if("*/"!==d.slice(-2))break;case"👻":t.removeChild(f),u--,c--}break;case 3:s.test(t.nodeName)&&O.call(f.textContent)===i&&(r.shift(),n.push(z(t,a)))}u++}}(a,l,t.slice(0),[]),{content:a,updates:function(n){for(var r=[],o=l.length,a=0,i=0;a<o;){var s=l[a++],c=H(n,s.path);switch(s.type){case"any":r.push({fn:e.any(c,[]),sparse:!1});break;case"attr":var u=s.sparse,f=e.attribute(c,s.name,s.node);null===u?r.push({fn:f,sparse:!1}):(i+=u.length-2,r.push({fn:f,sparse:!0,values:u}));break;case"text":r.push({fn:e.text(c),sparse:!1}),c.textContent=""}}return o+=i,function(){var e=arguments.length;if(o!==e-1)throw new Error(e-1+" values instead of "+o+"\n"+t.join("${value}"));for(var a=1,i=1;a<e;){var s=r[a-i];if(s.sparse){var l=s.values,c=l[0],u=1,f=l.length;for(i+=f-2;u<f;)c+=arguments[a++]+l[u++];s.fn(c)}else s.fn(arguments[a++])}return n}}}}function F(e,t){var n=P.get(t)||P.set(t,B(e,t));return n.updates(j.call(document,n.content,!0))}var Z=[];function q(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===O.call(r.textContent).length&&e.removeChild(r)}}var G=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,i;return function(s){var l,c,u,f;switch(typeof s){case"object":if(s){if("object"===a){if(!o&&i!==s)for(c in i)c in s||(r[c]="")}else o?r.value="":r.cssText="";for(c in l=o?{}:r,s)u="number"!=typeof(f=s[c])||e.test(c)?f:f+"px",!o&&/^--/.test(c)?l.setProperty(c,u):l[c]=u;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(i=l):i=s;break}default:i!=s&&(a="string",i=s,o?r.value=s||"":r.cssText=s||"")}}}}();const V=(e,t)=>{let n,r=!0;const o=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(o),r=!0):(o.value=t,r&&(e.setAttributeNodeNS(o),r=!1)))}},U=(e,t)=>n=>{e[t]=n},I=/^(?:form|list)$/i,J=(e,t)=>e.ownerDocument.createTextNode(t);function K(e){return this.type=e,t=this,n=Z,r=q,function(e){return n!==e&&(r=F(t,n=e)),r.apply(null,arguments)};var t,n,r}function Q(e){return e(this)}K.prototype={attribute(e,t,n){const r="svg"===this.type;switch(t){case"class":if(r)return V(e,t);t="className";case"props":return U(e,t);case"aria":return(e=>t=>{for(const n in t)e.setAttribute("role"===n?n:"aria-"+n,t[n])})(e);case"style":return G(e,n,r);case"ref":return(e=>t=>{"function"==typeof t?t(e):t.current=e})(e);case".dataset":return(({dataset:e})=>t=>{for(const n in t)e[n]=t[n]})(e);default:return"."===t.slice(0,1)?U(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const o=x(t)?t:[t,!1];n!==o[0]&&(n&&e.removeEventListener(r,n,o[1]),(n=o[0])&&e.addEventListener(r,n,o[1]))}})(e,t):!(t in e)||r||I.test(t)?V(e,t):((e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}})(e,t)}},any(e,t){const{type:n}=this;let r,o=!1;const a=i=>{switch(typeof i){case"string":case"number":case"boolean":o?r!==i&&(r=i,t[0].textContent=i):(o=!0,r=i,t=T(e.parentNode,t,[J(e,i)],E,e));break;case"function":a(i(e));break;case"object":case"undefined":if(null==i){o=!1,t=T(e.parentNode,t,[],E,e);break}default:if(o=!1,r=i,x(i))if(0===i.length)t.length&&(t=T(e.parentNode,t,[],E,e));else switch(typeof i[0]){case"string":case"number":case"boolean":a(String(i));break;case"function":a(i.map(Q,e));break;case"object":x(i[0])&&(i=i.concat.apply([],i));default:t=T(e.parentNode,t,i,E,e)}else"ELEMENT_NODE"in i?t=T(e.parentNode,t,11===i.nodeType?C.call(i.childNodes):[i],E,e):"text"in i?a(String(i.text)):"any"in i?a(i.any):"html"in i?t=T(e.parentNode,t,C.call(M([].concat(i.html).join(""),n).childNodes),E,e):"length"in i&&a(C.call(i))}};return a},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(C.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const{create:X,freeze:Y,keys:ee}=Object,te=K.prototype,ne=k(new r),re=e=>({html:ae("html",e),svg:ae("svg",e),render(t,n){const r="function"==typeof n?n():n,o=ne.get(t)||ne.set(t,oe()),a=r instanceof le?ie(e,o,r):r;return a!==o.wire&&(o.wire=a,t.textContent="",t.appendChild(a.valueOf())),t}}),oe=()=>({stack:[],entry:null,wire:null}),ae=(e,t)=>{const n=k(new r);return o.for=(e,r)=>{const a=n.get(e)||n.set(e,X(null));return a[r]||(a[r]=(i=oe(),function(){return ie(t,i,o.apply(null,arguments))}));var i},o.node=function(){return ie(t,oe(),o.apply(null,arguments)).valueOf()},o;function o(){return new le(e,de.apply(null,arguments))}},ie=(e,t,{type:n,template:r,values:o})=>{const{length:a}=o;se(e,t,o,a);let{entry:i}=t;if(i&&i.template===r&&i.type===n)i.tag(r,...o);else{const a=new e(n);t.entry=i={type:n,template:r,tag:a,wire:S(a(r,...o))}}return i.wire},se=(e,{stack:t},n,r)=>{for(let o=0;o<r;o++){const r=n[o];r instanceof ce?n[o]=ie(e,t[o]||(t[o]=oe()),r):x(r)?se(e,t[o]||(t[o]=oe()),r,r.length):t[o]=null}r<t.length&&t.splice(r)};function le(e,t){this.type=e,this.template=t.shift(),this.values=t}Y(le);const ce=le,{render:ue,html:fe,svg:he}=re(K);function de(){let e=[],t=0,{length:n}=arguments;for(;t<n;)e.push(arguments[t++]);return e}var pe=Object.freeze({__proto__:null,Hole:ce,custom:e=>{const t=X(te);return ee(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?c:String))}),n.prototype=t,re(n);function n(){return K.apply(this,arguments)}},render:ue,html:fe,svg:he});const{getSavedData:ve}=e,{render:ge,html:me,svg:ye}=pe;var be={Code:class{constructor(e){this.options={i18n:{locale:"en-US",rtl:"ltr",translations:{}},controllers:[],...e}}render(e,t){return me.node`<div class="freedom-editor-blocks ${this.constructor.name}-block" data-block-type="${this.constructor.name}">
    <pre>
    <code contenteditable>${ve(t)}</code>
    </pre>
    </div>`}save(e){const t=e.querySelector("code");if(""!==t.textContent)return{type:this.constructor.name,data:{code:t.textContent}}}}};export default be;
