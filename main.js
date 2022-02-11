(()=>{"use strict";var n,e,t,o,i,r,a,d,c,s,p,l,u,m,h={426:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200&display=swap);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@500&display=swap);"]),a.push([n.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: \"Rubik\", sans-serif;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n  hyphens: auto;\n}\n\n#content-container {\n  display: flex;\n  flex-direction: column;\n  height: 850px;\n}\n\n#content {\n  display: flex;\n  flex-direction: row;\n}\n\n#navbar-container {\n  height: 55px;\n  width: 100%;\n  background: hsl(356, 85%, 57%);\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-width: 195px;\n  max-width: 195px;\n  background: hsl(224, 7%, 96%);\n  padding: 10px 14px;\n  padding-top: 38px;\n  height: 650px;\n}\n\n#sidebar_bottom {\n  width: 400px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n#greeting-message {\n  padding-bottom: 90px;\n}\n\n.day {\n  font-family: 'Ibarra Real Nova', serif;\n  font-size: 14px;\n  font-weight: 550;\n  font-style: italic;\n}\n\nh1 {\n  font-size: 13px;\n  font-weight: 600;\n  padding: 0 8px;\n  padding-bottom: 10px;\n}\n\n#home,\n#projects {\n  font-size: 13px;\n  padding: 10px 8px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n}\n\n#home:hover,\n#projects:hover {\n  background: hsl(223, 7%, 98%);\n}\n\nh2 {\n  font-size: 13px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 0;\n  padding-top: 2px;\n  cursor: pointer;\n}\n\n#projectsbtn {\n  border: none;\n  background: none;\n  color: hsl(356, 85%, 57%);\n  font-size: 15px;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 700;\n  border-radius: 4px;\n}\n\n#modal-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  text-align: center;\n  height: 50%;\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n  z-index: 1;\n}\n\n#modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  width: 350px;\n  height: 300px;\n  gap: 15px;\n  text-align: center;\n  background: white;\n  border-radius: 5px;\n  transition: transform 0.3s ease;\n}\n\n#modal-stuff {\n  height: 180px;\n}\n\n#modal-footer {\n  height: 55px;\n  margin: 0;\n  background: hsl(224, 7%, 96%);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 10px 12px;\n}\n\n#buttons-container {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: 8px;\n}\n\n#title-container {\n  display: flex;\n  justify-content: flex-start;\n}\n\n#addproject-title {\n  font-size: 14px;\n  padding: 10px 14px;\n}\n\n#cancel, #add { \n  display: inline-block;\n  outline: 0;\n  font-size: 13px;\n  text-align: center;\n  cursor: pointer;\n  height: 28px;\n  border-radius: 3px;\n  border: 1px solid transparent;\n  transition: all .3s ease;\n  width: 55px;\n  padding-top: 2px;\n }\n\n #add {\n  background: hsl(356, 85%, 57%);\n  color: #fff\n }\n\n#modal-container.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n\n#container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 38px;\n  margin-left: 80px;\n  height: 100%;\n  width: 800px;\n}\n\n#current-tab {\n  font-size: 17px;\n  padding-bottom: 22px;\n}\n\n#projects-container {\n  min-height: 200px;\n}",""]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);o&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],d=0;d<n.length;d++){var c=n[d],s=o.base?c[0]+o.base:c[0],p=r[s]||0,l="".concat(s," ").concat(p);r[s]=p+1;var u=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=i(m,o);o.byIndex=d,e.splice(d,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var d=t(r[a]);e[d].references--}for(var c=o(n,i),s=0;s<r.length;s++){var p=t(r[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},f={};function x(n){var e=f[n];if(void 0!==e)return e.exports;var t=f[n]={id:n,exports:{}};return h[n](t,t.exports,x),t.exports}x.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return x.d(e,{a:e}),e},x.d=(n,e)=>{for(var t in e)x.o(e,t)&&!x.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},x.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=x(379),e=x.n(n),t=x(795),o=x.n(t),i=x(569),r=x.n(i),a=x(565),d=x.n(a),c=x(216),s=x.n(c),p=x(589),l=x.n(p),u=x(426),(m={}).styleTagTransform=l(),m.setAttributes=d(),m.insert=r().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,(()=>{const n=document.createElement("div");document.body.appendChild(n),n.id="navbar-container"})(),(()=>{const n=document.createElement("div");document.body.appendChild(n),n.id="content-container";const e=document.createElement("div");e.id="content",n.appendChild(e)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");n.appendChild(e),e.classList.add("sidebar");const t=document.createElement("div");t.id="sidebar-top",e.appendChild(t);const o=document.createElement("div");o.id="projects-container",e.appendChild(o);const i=document.createElement("h1");i.innerText="ACTIONS",t.appendChild(i);const r=document.createElement("div");r.id="home",t.appendChild(r);const a=document.createElement("h2");a.innerText="Home",r.appendChild(a);const d=document.createElement("div");d.id="projects",t.appendChild(d);const c=document.createElement("h2");c.innerText="Projects",d.appendChild(c);const s=document.createElement("div");s.id="greeting-message",e.appendChild(s);const p=document.createElement("div");p.classList.add("day"),s.appendChild(p),p.innerText="Enjoy the rest of your Thursday!"})(),(()=>{const n=document.getElementById("projects"),e=document.createElement("div");e.id="btn-container",n.appendChild(e);const t=document.createElement("button");t.innerText="+",t.id="projectsbtn",e.appendChild(t)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.id="container",n.appendChild(e);const t=document.createElement("h2");t.id="current-tab",e.appendChild(t)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.id="modal-container",n.appendChild(e);const t=document.createElement("div");t.id="modal",e.appendChild(t);const o=document.createElement("div");o.id="title-container",t.appendChild(o);const i=document.createElement("div");i.id="addproject-title",o.appendChild(i),i.innerText="New Project";const r=document.createElement("div");r.id="modal-stuff",t.appendChild(r);const a=document.createElement("div");a.id="modal-footer",t.appendChild(a);const d=document.createElement("div");d.id="buttons-container",a.appendChild(d);const c=document.createElement("div");c.id="cancel",d.appendChild(c),c.innerText="Cancel";const s=document.createElement("div");s.id="add",d.appendChild(s),s.innerText="Add"})(),(()=>{const n=document.getElementById("modal-container"),e=document.getElementById("cancel");document.getElementById("projectsbtn").addEventListener("click",(()=>{n.classList.add("show")})),e.addEventListener("click",(()=>{n.classList.remove("show")}))})()})();