(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[678],{523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!o(e[s[c]],i[s[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6124:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",l),f}}},8860:function(e,t,n){"use strict";n.d(t,{c:function(){return b}});var r=n(7069),a=n.n(r),o=n(5578),i=n.n(o),l=n(4003),c=n.n(l),s=n(3333),u=n.n(s),f=n(7778),d=n.n(f),m=n(5718),p=n.n(m),h=n(8721),y=n.n(h),b={Telegram:a(),Linkedin:i(),Twitter:c(),Github:u(),Email:d(),Phone:p(),Error404:y()}},9331:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Dt}});var r,a,o,i,l=n(7294),c=n(5697),s=n.n(c),u=n(6124),f=n.n(u),d=n(523),m=n.n(d),p=n(4756),h=n.n(p),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",k="href",T="http-equiv",C="innerHTML",S="itemprop",A="name",O="property",x="rel",L="src",M="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",N="defer",I="encodeSpecialCharacters",R="onChangeClientState",D="titleTemplate",H=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),W=[g.NOSCRIPT,g.SCRIPT,g.STYLE],B="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=Q(e,g.TITLE),n=Q(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,j);return t||r||void 0},J=function(e){return Q(e,R)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],c=l.toLowerCase();-1===t.indexOf(c)||n===x&&"canonical"===e[n].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==C&&l!==w&&l!==S||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var l=o[i],c=h()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;ce(g.BODY,r),ce(g.HTML,a),le(f,d);var m={baseTag:se(g.BASE,n),linkTags:se(g.LINK,o),metaTags:se(g.META,i),noscriptTags:se(g.NOSCRIPT,l),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,u)},p={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),c(e,p,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(g.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(B):n.getAttribute(B)!==i.join(",")&&n.setAttribute(B,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(B,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,a=fe(n,r),[l.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),l.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===W.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(g.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(b,a,r),link:de(g.LINK,o,r),meta:de(g.META,i,r),noscript:de(g.NOSCRIPT,l,r),script:de(g.SCRIPT,c,r),style:de(g.STYLE,s,r),title:de(g.TITLE,{title:f,titleAttributes:d},r)}},pe=f()((function(e){return{baseTag:Z([k,M],e),bodyAttributes:K(y,e),defer:Q(e,N),encode:Q(e,I),htmlAttributes:K(b,e),linkTags:$(g.LINK,[x,k],e),metaTags:$(g.META,[A,E,T,O,S],e),noscriptTags:$(g.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:$(g.SCRIPT,[L,C],e),styleTags:$(g.STYLE,[w],e),title:Y(e),titleAttributes:K(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),me)((function(){return null})),he=(a=pe,i=o=function(e){function t(){return z(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return _({},r,((t={})[n.type]=[].concat(r[n.type]||[],[_({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return _({},a,((t={})[r.type]=i,t.titleAttributes=_({},o),t));case g.BODY:return _({},a,{bodyAttributes:_({},o)});case g.HTML:return _({},a,{htmlAttributes:_({},o)})}return _({},a,((n={})[r.type]=_({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=_({},t);return Object.keys(e).forEach((function(t){var r;n=_({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(q(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=_({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(a,r)},V(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(l.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye,be=function(){return l.createElement(he,{htmlAttributes:{lang:"en"}},l.createElement("title",null,"Portfolio: Vladislav Gryadko / Frontend Developer"),l.createElement("meta",{name:"description",content:"Hello I am Vladislav Gryadko ... I am a Frontend Developer, visit my portfolio website for more information about me and my skills. My email vgryadko@gmail.com"}),l.createElement("meta",{name:"robots",content:"index, follow"}),l.createElement("meta",{name:"keywords",content:"html,css,js,react,work,portfolio,education,work experience,technical skills,soft skills,about me,web development,frontend,contacts,web3,blockchain,ethereum,polygon,nft,solidity"}),l.createElement("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),l.createElement("meta",{name:"language",content:"English"}),l.createElement("meta",{name:"revisit-after",content:"2 days"}),l.createElement("meta",{name:"author",content:"Vladislav Gryadko"}))},ve=function(e){var t=e.children;return l.createElement(l.Fragment,null,t)},ge=function(e){var t=e.children;return l.createElement("div",{className:"container-module--container--NIILZ"},t)},Ee="header-module--overlay-hidden--3bLJR",we=n(1597),ke="Me",Te="Vladislav",Ce="Gryadko",Se="21",Ae="VGryadko",Oe="Frontend Developer",xe={time:"1 year",position:"Strong Junior Frontend Developer"},Le="English, Ukraine, Russia",Me="vgryadko@gmail.com",Pe="0666519328",je={link:"https://goo.gl/maps/bj47M8He5rM1myeJ7",name:"Ukraine, Odessa"},Ne=function(e){var t=e.handleClick,n=Ae;return l.createElement(we.Link,{onClick:t,className:"logo-module--logotype--IuJfK",to:"/"},n)},Ie=["home","about","skills","experience","portfolio","contacts"],Re=function(e){return e.replace(/[^\d]/g,"").replace(/(\d{3})(\d{3})(\d{2})(\d{2})/,"+38($1)-$2-$3-$4")},De=function(e,t){return e+" "+t},He=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},We=new Uint8Array(16);function Be(){if(!ye&&!(ye="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ye(We)}var Fe=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var ze=function(e){return"string"==typeof e&&Fe.test(e)},Ve=[],_e=0;_e<256;++_e)Ve.push((_e+256).toString(16).substr(1));var qe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(Ve[e[t+0]]+Ve[e[t+1]]+Ve[e[t+2]]+Ve[e[t+3]]+"-"+Ve[e[t+4]]+Ve[e[t+5]]+"-"+Ve[e[t+6]]+Ve[e[t+7]]+"-"+Ve[e[t+8]]+Ve[e[t+9]]+"-"+Ve[e[t+10]]+Ve[e[t+11]]+Ve[e[t+12]]+Ve[e[t+13]]+Ve[e[t+14]]+Ve[e[t+15]]).toLowerCase();if(!ze(n))throw TypeError("Stringified UUID is invalid");return n};var Ge=function(e,t,n){var r=(e=e||{}).random||(e.rng||Be)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return qe(r)},Ue=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1],r=function(){n(!1),document.body.classList.remove(Ee)};return(0,l.useEffect)((function(){var e=function(){document.body.offsetWidth>=768&&r()};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),l.createElement("header",{className:"header-module--header--4dQNe"},l.createElement(ge,null,l.createElement("div",{className:"header-module--header-wrapper--ggfd+"},l.createElement(Ne,{handleClick:r}),l.createElement("button",{className:"header-module--header-btn--VLSDD "+(t?"header-module--header-btn-close--8wfqG":""),"aria-label":"Open menu",onClick:function(){n((function(e){return!e})),document.body.classList.toggle(Ee)}}),l.createElement("nav",{className:"header-module--header-nav--Lnjmt "+(t?"header-module--header-nav-open--bt0Oo":"")},l.createElement("ul",{className:"header-module--header-list--uR03C"},Ie.map((function(e){var t=Ge();return l.createElement("li",{key:t,className:"header-module--header-item--zcY15"},l.createElement(we.Link,{onClick:r,className:"header-module--header-link--buKqt",to:"#"+e},He(e)))})))))))},Ye=n(8860),Je=[{telegram:"https://t.me/VladislavDesu"},{linkedin:"https://www.linkedin.com/in/vladislav-gryadko/"},{github:"https://github.com/VladislavDesu"},{twitter:"https://twitter.com/VladislavDesu"}],Ke=function(){var e=Ae,t=(new Date).getFullYear(),n=function(e){return e.map((function(e){var t=Object.keys(e)[0];return{link:e[t],name:He(t)}}))}(Je);return l.createElement("footer",{className:"footer-module--footer--lU7l1"},l.createElement(ge,null,l.createElement("ul",{className:"footer-module--footer-list--eKwzX"},n.map((function(e){var t=Ye.c[e.name],n=Ge();return l.createElement("li",{key:n,className:"footer-module--footer-item--hCoG2"},l.createElement("a",{target:"_blank",rel:"noreferrer",className:"footer-module--footer-link--el2Qe",href:e.link},l.createElement(t,null),e.name))}))),l.createElement("p",{className:"footer-module--footer-copyright--vvv-n"},"© Copyright ",t," ",e,". All rights reserved.")))},Ze=n.p+"static/me-1318baebca58bcecfced2001d37a77d0.webp",$e=n.p+"static/wmcdacktpa-5295f0f429449241ced3467c7920ef79.webp",Qe=n.p+"static/ttf-05bb74e1f86b1fa659218c65e08c3cee.webp",Xe=n.p+"static/rexit-e6c276d610a074cb76931365c616b3e7.webp",et=n.p+"static/classyessaywriter-dcd61bdc2be4d200fd882ffb756fc243.webp",tt=n.p+"static/customwrittenpapers-b1c9ed6a81bc58450c536012f3f36d82.webp",nt=n.p+"static/essaywritingservices-48fc41ad3b207e681c64ab61c4d44450.webp",rt=n.p+"static/takemyexam-1fe3929d04a564baf9bf9bb99df44895.webp",at=n.p+"static/exoqual-6479433c8555c18728e4a525de059f70.webp",ot=n.p+"static/dca-a7d89bcbfde6c236cc2b84dae078e7d9.webp",it=n.p+"static/angels-and-demons-ed2a4f7d65e0ab1cd5d8c430026df9f2.webp",lt=n.p+"static/bat-girl-4e44b668eadcf440ae112508ee5a5baf.webp",ct=n.p+"static/iggy-6269eae06963b2c470ac81424d358445.webp",st=n.p+"static/zappyeels-ab3730233e4592f7ea49938fcf04fcfc.webp",ut={Me:Ze,Exoqual:at,Robotto:n.p+"static/robotto-de26581669fe91425efb3af98e9f8f10.webp",BatGirl:lt,AngelsAndDemons:it,Dca:ot,Zappyeels:st,Iggy:ct,Wmcdacktpa:$e,Ttf:Qe,ClassyEssayWriter:et,CustomWrittenPapers:tt,EssayWritingServices:nt,TakeMyExam:rt,Rexit:Xe},ft=function(e){var t=e.title;return l.createElement("header",{className:"header-module--header---h9hJ "+(t.isHide?"header-module--header-hide--pPkKW":"")},l.createElement("h2",{className:"header-module--header-title--1OdPb"},t.name))},dt=function(e){var t=e.children,n=e.title,r=e.id,a=e.dark;return l.createElement("section",{id:r,className:"section-module--section--YiRvb "+(a?"section-module--section-dark--b3slL":"")},l.createElement(ge,null,n?l.createElement(ft,{title:n}):null,t))},mt={dark:!1,id:"home",title:{name:"You are Welcome",isHide:!0}},pt={dark:!0,id:"about",title:{name:"About Me",isHide:!0}},ht={dark:!1,id:"skills",title:{name:"My skills",isHide:!0}},yt={dark:!1,id:"portfolio",title:{name:"Portfolio",isHide:!1}},bt={dark:!0,id:"experience",title:{name:"My Experience",isHide:!0}},vt={dark:!0,id:"contacts",title:{name:"Contacts",isHide:!1}},gt=function(){var e=Oe,t=mt,n=ut[ke],r=De(Te,Ce);return l.createElement(dt,t,l.createElement("div",{className:"hero-module--hero--6D8n+"},l.createElement("div",{className:"hero-module--hero-info--o7e6R"},l.createElement("span",{className:"hero-module--hero-badge--BI3Kz"},"Hello I'm"),l.createElement("h2",{className:"hero-module--hero-name--fxq0d"},r),l.createElement("h3",{className:"hero-module--hero-position--aw-az"},e)),l.createElement("div",{className:"hero-module--hero-img--HUy44"},l.createElement("img",{width:464,height:464,src:n,title:r,alt:r}))))},Et=function(e){var t=e.item;return l.createElement("ul",{className:"list-module--list--65jVe"},t.map((function(e){var t=Ge();return l.createElement("li",{key:t},e)})))},wt=function(e){var t=e.title,n=e.info;return l.createElement("div",{className:"card-module--card--H6Xpu"},l.createElement("h3",{className:"card-module--card-title--jLktE"},t),n.map((function(e){var t=Ge();return l.createElement("div",{key:t,className:"card-module--card-info--LemQ+"},e)})))},kt={card:{about:"About Me",web:"Web Development"}},Tt={card:{soft:"Soft Skills",technical:"Technical Skills"}},Ct={card:{education:"Education",work:"Work Exp."}},St={desc:["My journey as a developer started when I was still in college, I started learning Python, it was my first programming language. Then my attention completely moved to websites development. I always studied everything by myself and when I visited some interactive websites, I was always interested in how to create something similar or something better, it always amazed me how it was done and how can I do the same?","While I was learning html css js at the same time I started to get interested in different builders such as Gulp and Webpack, made my own builds for development with different preprocessors for HTML and CSS, site optimization and more.","When I realized that I wanted more, I found my first job, and at the same time I fulfilled my first orders. I began to actively study React, I have always been attracted to something interesting and difficult. Now I can easily create simple and difficult web applications using React and use different other technologies.","Now I spend all my free time studying Web3, learning technologies like Solidity, Hardhat, Ethers, Metamask, Blockchain, creating smart contracts, deploying on Testnet/Localnet/Mainnet, testing and creating UI. Already had a chance to work with these technologies in practice. I want to become a professional in this area and contribute my small part in the development of this sphere."]},At=function(){var e=Te,t=Ce,n=Se,r=Le,a=Oe,o=xe.time,i=Pe,c=Me,s=je,u=s.name,f=s.link,d=kt.card,m=pt,p=St.desc,h=[{name:De(e,t)},{age:n},{position:a},{experience:o},{languages:r},{phone:l.createElement("a",{href:"tel: "+i},Re(i))},{email:l.createElement("a",{href:"mailto: "+c},c)},{locate:l.createElement("a",{rel:"noreferrer",target:"_blank",href:f},u)}],y=[l.createElement(wt,{title:d.about,info:[l.createElement(l.Fragment,null,h.map((function(e){return function(e,t){var n=Object.keys(e)[0];return l.createElement("p",{key:t},He(n)+": ",e[n])}(e,Ge())})))]}),l.createElement(wt,{title:d.web,info:[l.createElement(l.Fragment,null,p.map((function(e){var t=Ge();return l.createElement("p",{key:t},e)})))]})];return l.createElement(dt,m,l.createElement(Et,{item:y}))},Ot=["Communication","Teamwork","Problem-solving","Time Management","Flexibility","Attention to details","Creativity","Adaptivity"],xt=["HTML/CSS/JS","CSS Preprocessing","Frameworks","Responsive Design","Version Control/Git","Browser Developer Tools","Testing"],Lt=function(){var e=Ot,t=xt,n=ht,r=Tt.card,a=[l.createElement(wt,{title:r.technical,info:[l.createElement("ul",null,t.map((function(e){var t=Ge();return l.createElement("li",{key:t},e)})))]}),l.createElement(wt,{title:r.soft,info:[l.createElement("ul",null,e.map((function(e){var t=Ge();return l.createElement("li",{key:t},e)})))]})];return l.createElement(dt,n,l.createElement(Et,{item:a}))},Mt=[{position:"Frontend Developer",company:"RexIT",link:"https://rexit.info/",date:"May 2021 - Present (Full-time)",list:["Validity HTML","Pug (Jade) & Twig","CSS & SASS & SCSS","Adaptive & Responsive","Mobile & Desktop first","Pixelperfect","BEM Methodology","Create PDF files","Bootstrap 5 Theme (CRM)","WowJS & AnimateCSS & Green Sock & React Spring","chartJS","jQuery & jQuery UI","React & Redux & Typescript","Gulp & Webpack & Parcel","Web3 Technologies","Gatsby"]},{position:"Frontend Developer",company:"Smart Plus",link:"http://smartpluss.org/",date:"May 2021 - November 2021 (Freelance)",list:["Validity HTML","CSS & LESS","Adaptive & Responsive","Mobile & Desktop first","Pixelperfect","BEM Methodology","Native Javascript","Support Legacy code","Site Optimization"]}],Pt=[{speciality:"Computer Engineering",institution:"Odessa Technical College",link:"https://otfk.od.ua/",date:"September 2015 - July 2019",desc:['Studied in the specialty "Computer Engineering".','As a result of received the Diploma "Junior Specialist".']}],jt=function(){var e=Ct.card,t=bt,n=[l.createElement(wt,{title:e.work,info:Mt.map((function(e){return function(e){return l.createElement(l.Fragment,null,l.createElement("h4",null,e.position," at ",l.createElement("a",{href:e.link,rel:"noreferrer",target:"_blank"},e.company)),l.createElement("time",null,e.date),l.createElement("p",null,"Responsibility :"),l.createElement("ul",null,e.list.map((function(e){var t=Ge();return l.createElement("li",{key:t},e)}))))}(e)}))}),l.createElement(wt,{title:e.education,info:Pt.map((function(e){return function(e){return l.createElement(l.Fragment,null,l.createElement("h4",null,e.speciality," at ",l.createElement("a",{href:e.link,rel:"noreferrer",target:"_blank"},e.institution)),l.createElement("time",null,e.date),e.desc.map((function(e){var t=Ge();return l.createElement("p",{key:t},e)})))}(e)}))})];return l.createElement(dt,t,l.createElement(Et,{item:n}))},Nt=[{name:"Exoqual",id:"Exoqual"},{name:"AngelsAndDemons",id:"AngelsAndDemons"},{name:"Dca",id:"Dca"},{name:"Robotto",id:"Robotto"},{name:"BatGirl",id:"BatGirl"},{name:"Iggy",id:"Iggy"},{name:"Zappyeels",id:"Zappyeels"},{name:"wmcdacktpa",id:"Wmcdacktpa"},{name:"ttf",id:"Ttf"},{name:"Rexit",id:"Rexit"},{name:"Classy Essay Writer",id:"ClassyEssayWriter"},{name:"Custom Written Papers",id:"CustomWrittenPapers"},{name:"Essay Writing Services",id:"EssayWritingServices"},{name:"Take My Exam",id:"TakeMyExam"}],It=function(){var e=yt;return l.createElement(dt,e,l.createElement("ul",{className:"portfolio-module--portfolio--bi8z4"},Nt.map((function(e){var t=ut[e.id];return l.createElement("li",{className:"portfolio-module--portfolio-item--K68tC",key:e.id},l.createElement("img",{src:t,width:564,height:294,alt:e.name,title:e.name}))}))))},Rt=function(){var e=Pe,t=Me,n=Je[0],r=Je[1],a=vt,o=[{telegram:l.createElement("a",{target:"_blank",rel:"noreferrer",href:n.telegram},"Write Me Now")},{linkedin:l.createElement("a",{target:"_blank",rel:"noreferrer",href:r.linkedin},"Write Me Now")},{email:l.createElement("a",{href:"mailto: "+t},t)},{phone:l.createElement("a",{href:"tel: "+e},Re(e))}];return l.createElement(dt,a,l.createElement("ul",{className:"contacts-module--contacts--Gb7e0"},o.map((function(e){var t=Object.keys(e)[0],n=He(t),r=Ye.c[n],a=Ge();return l.createElement("li",{key:a,className:"contacts-module--contacts-item--N-7Gn"},l.createElement("span",{className:"contacts-module--contacts-icon--XF5w-"},l.createElement(r,null)),l.createElement("h3",{className:"contacts-module--contacts-title--GVCZc"},n),e[t])}))))},Dt=function(){return l.createElement(l.Fragment,null,l.createElement(be,null),l.createElement(ve,null,l.createElement(Ue,null),l.createElement("main",null,l.createElement(gt,null),l.createElement(At,null),l.createElement(Lt,null),l.createElement(jt,null),l.createElement(It,null),l.createElement(Rt,null)),l.createElement(Ke,null)))}},7778:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z",key:0}),r.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z",key:1})])}a.defaultProps={width:"24",height:"24",viewBox:"2 2 20 20"},e.exports=a,a.default=a},8721:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("polygon",{fill:"#a766ff",points:"341.33 206.73 341.33 108.2 426.67 157.47 426.67 256 341.33 206.73",key:0}),r.createElement("polyline",{fill:"#9c1de7",points:"341.33 108.2 426.67 58.94 512 108.2 426.67 157.47",key:1}),r.createElement("polyline",{fill:"#7255f3",points:"426.67 157.47 512 108.2 512 206.73 426.67 256",key:2}),r.createElement("line",{x1:"298.67",x2:"384",y1:"231.37",y2:"182.1",fill:"none",stroke:"#581b98",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",key:3}),r.createElement("polyline",{fill:"#7255f3",points:"256 256 341.33 206.73 341.33 305.27 256 354.53",key:4}),r.createElement("polygon",{fill:"#a766ff",points:"0 206.73 0 108.2 85.33 157.47 85.33 256 0 206.73",key:5}),r.createElement("polyline",{fill:"#9c1de7",points:"0 108.2 85.33 58.94 170.66 108.2 85.33 157.47",key:6}),r.createElement("polyline",{fill:"#7255f3",points:"85.33 157.47 170.66 108.2 170.66 206.73 85.33 256",key:7}),r.createElement("polyline",{fill:"#7255f3",points:"426.67 354.53 512 305.27 512 403.8 426.67 453.06",key:8}),r.createElement("line",{x1:"128",x2:"212.88",y1:"182.1",y2:"231.11",fill:"none",stroke:"#581b98",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",key:9}),r.createElement("polygon",{fill:"#a766ff",points:"170.67 305.26 170.67 206.73 256 256 256 354.53 170.67 305.26",key:10}),r.createElement("line",{x1:"298.67",x2:"384",y1:"280.63",y2:"329.9",fill:"none",stroke:"#581b98",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",key:11}),r.createElement("polyline",{fill:"#9c1de7",points:"341.33 305.27 426.67 256 512 305.27 426.67 354.53",key:12}),r.createElement("polygon",{fill:"#a766ff",points:"341.33 403.8 341.33 305.27 426.67 354.53 426.67 453.06 341.33 403.8",key:13}),r.createElement("polyline",{fill:"#9c1de7",points:"170.67 206.73 256 157.47 341.33 206.73 256 256",key:14}),r.createElement("line",{x1:"128",x2:"212.88",y1:"329.9",y2:"280.63",fill:"none",stroke:"#581b98",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",key:15}),r.createElement("polygon",{fill:"#a766ff",points:"0 403.8 0 305.27 85.33 354.53 85.33 453.06 0 403.8",key:16}),r.createElement("polyline",{fill:"#9c1de7",points:"0 305.27 85.33 256 170.66 305.27 85.33 354.53",key:17}),r.createElement("polyline",{fill:"#7255f3",points:"85.33 354.53 170.67 305.27 170.67 403.8 85.33 453.06",key:18})])}a.defaultProps={viewBox:"0 0 512 512",width:"400",height:"400"},e.exports=a,a.default=a},3333:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M20.11554,5.90131a3.88274,3.88274,0,0,0-.26-.31,4.41253,4.41253,0,0,0,.21-.76,5.28351,5.28351,0,0,0-.35-2.8s-1.12-.35-3.69,1.38a12.47675,12.47675,0,0,0-3.35-.45,12.60429,12.60429,0,0,0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.26343,5.26343,0,0,0-.35,2.77,4.21027,4.21027,0,0,0,.22.79c-.09.1-.18.21-.26.31a5.13973,5.13973,0,0,0-1.12,3.3,7.68624,7.68624,0,0,0,.04.85c.31994,4.43,3.27,5.46,6.08,5.78a2.55759,2.55759,0,0,0-.77,1.39,4.02183,4.02183,0,0,0-.13,1.09v1.30957c-1.11822.09937-2.26648-.06335-2.62219-1.06134a5.69461,5.69461,0,0,0-1.83447-2.41211,1.1789,1.1789,0,0,1-.169-.1123,1.00141,1.00141,0,0,0-.93066-.64551H3.77441a.99965.99965,0,0,0-1,.99512c-.0039.8125.80909,1.33691,1.14258,1.51562a4.4665,4.4665,0,0,1,.92285,1.3584c.36426,1.02344,1.4292,2.57812,4.46582,2.376.001.03515.002.06835.00245.09863l.00439.26758a.99974.99974,0,0,0,1,1l.00311-.00061V23.001h4.71112a.99974.99974,0,0,0,1-1s.00733-3.15967.00733-3.68964a4.02421,4.02421,0,0,0-.13-1.09l-.00183-.0061.00336.0061c-.00861-.035-.02173-.06353-.03113-.09747A2.53213,2.53213,0,0,0,15.134,15.8313l.0116.02087c-.00684-.00616-.01324-.01489-.02008-.02087,2.81-.32,5.74-1.37,6.06-5.78a7.68675,7.68675,0,0,0,.04-.85A5.2306,5.2306,0,0,0,20.11554,5.90131Z"}))}a.defaultProps={fill:"inherit",viewBox:"0 0 24 24",width:"288",height:"288"},e.exports=a,a.default=a},5578:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("path",{d:"M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 00-.145-.028A3.207 3.207 0 0012.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 00-2.676-3.448z",key:0}),r.createElement("circle",{cx:"1.75",cy:"1.75",r:"1.75",key:1})])}a.defaultProps={fill:"inherit",viewBox:"0 0 16 16",width:"288",height:"288"},e.exports=a,a.default=a},5718:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("path",{d:"M23.45 20.93a3 3 0 0 0-4.25 0l-1.45 1.45a26.14 26.14 0 0 1-4.51-3.62 26.14 26.14 0 0 1-3.62-4.51l1.45-1.45a3 3 0 0 0 0-4.25L8.24 5.73a2.93 2.93 0 0 0-2.11-.88h0A3 3 0 0 0 4 5.73L2.64 7.08A6.37 6.37 0 0 0 1 12.33c.32 3.75 2.78 8.26 6.57 12.06S15.92 30.64 19.67 31a7.87 7.87 0 0 0 .84 0 6.07 6.07 0 0 0 4.41-1.64L26.27 28a3 3 0 0 0 .88-2.13 2.93 2.93 0 0 0-.88-2.11zM26.6 5.39A14.92 14.92 0 0 0 16 1a1 1 0 1 0 0 2A13 13 0 0 1 29 16.11a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1A14.91 14.91 0 0 0 26.6 5.39z",key:0}),r.createElement("path",{d:"M20.91,11.11a6,6,0,0,1,1.77,4.31,1,1,0,0,0,1,1h0a1,1,0,0,0,1-1,8,8,0,0,0-8-8.1,1,1,0,1,0,0,2A6,6,0,0,1,20.91,11.11Z",key:1})])}a.defaultProps={viewBox:"1 1 30 30"},e.exports=a,a.default=a},7069:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,r.createElement("path",{d:"m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"}))}a.defaultProps={fill:"inherit",enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",width:"288",height:"288"},e.exports=a,a.default=a},4003:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"}))}a.defaultProps={fill:"inherit",viewBox:"0 0 16 16",width:"288",height:"288"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-index-js-4c22c8b0a79da4ba00f6.js.map