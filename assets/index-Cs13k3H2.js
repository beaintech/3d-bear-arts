(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Fe={},uo=[],Si=()=>{},zp=()=>!1,Pa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$l=n=>n.startsWith("onUpdate:"),un=Object.assign,jl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Gp=Object.prototype.hasOwnProperty,Pe=(n,t)=>Gp.call(n,t),ue=Array.isArray,qo=n=>Ca(n)==="[object Map]",Hp=n=>Ca(n)==="[object Set]",ae=n=>typeof n=="function",an=n=>typeof n=="string",Po=n=>typeof n=="symbol",Je=n=>n!==null&&typeof n=="object",Ud=n=>(Je(n)||ae(n))&&ae(n.then)&&ae(n.catch),kp=Object.prototype.toString,Ca=n=>kp.call(n),Vp=n=>Ca(n).slice(8,-1),Wp=n=>Ca(n)==="[object Object]",Kl=n=>an(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Yo=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Xp=/-(\w)/g,qn=Ia(n=>n.replace(Xp,(t,e)=>e?e.toUpperCase():"")),qp=/\B([A-Z])/g,Hs=Ia(n=>n.replace(qp,"-$1").toLowerCase()),La=Ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ka=Ia(n=>n?`on${La(n)}`:""),gs=(n,t)=>!Object.is(n,t),Za=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Nd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Yp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Uu;const Fd=()=>Uu||(Uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zl(n){if(ue(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=an(i)?Zp(i):Zl(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(an(n)||Je(n))return n}const $p=/;(?![^(]*\))/g,jp=/:([^]+)/,Kp=/\/\*[^]*?\*\//g;function Zp(n){const t={};return n.replace(Kp,"").split($p).forEach(e=>{if(e){const i=e.split(jp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Kn(n){let t="";if(an(n))t=n;else if(ue(n))for(let e=0;e<n.length;e++){const i=Kn(n[e]);i&&(t+=i+" ")}else if(Je(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qp=Yl(Jp);function Od(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gn;class tm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gn,!t&&Gn&&(this.index=(Gn.scopes||(Gn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Gn;try{return Gn=this,t()}finally{Gn=e}}}on(){Gn=this}off(){Gn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function em(){return Gn}let Oe;const Ja=new WeakSet;class Bd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gn&&Gn.active&&Gn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ja.has(this)&&(Ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nu(this),Hd(this);const t=Oe,e=ri;Oe=this,ri=!0;try{return this.fn()}finally{kd(this),Oe=t,ri=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)tu(t);this.deps=this.depsTail=void 0,Nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wc(this)&&this.run()}get dirty(){return Wc(this)}}let zd=0,ao;function Gd(n){n.flags|=8,n.next=ao,ao=n}function Jl(){zd++}function Ql(){if(--zd>0)return;let n;for(;ao;){let t=ao,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=ao,ao=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Hd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function kd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),tu(i),nm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Wc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Vd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===sr))return;n.globalVersion=sr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Wc(n)){n.flags&=-3;return}const e=Oe,i=ri;Oe=n,ri=!0;try{Hd(n);const s=n.fn(n._value);(t.version===0||gs(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Oe=e,ri=i,kd(n),n.flags&=-3}}function tu(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let o=e.computed.deps;o;o=o.nextDep)tu(o,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function nm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let ri=!0;const Wd=[];function vs(){Wd.push(ri),ri=!1}function xs(){const n=Wd.pop();ri=n===void 0?!0:n}function Nu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Oe;Oe=void 0;try{t()}finally{Oe=e}}}let sr=0;class im{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Oe||!ri||Oe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Oe)e=this.activeLink=new im(Oe,this),Oe.deps?(e.prevDep=Oe.depsTail,Oe.depsTail.nextDep=e,Oe.depsTail=e):Oe.deps=Oe.depsTail=e,Xd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Oe.depsTail,e.nextDep=void 0,Oe.depsTail.nextDep=e,Oe.depsTail=e,Oe.deps===e&&(Oe.deps=i)}return e}trigger(t){this.version++,sr++,this.notify(t)}notify(t){Jl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ql()}}}function Xd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Xd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Xc=new WeakMap,Fs=Symbol(""),qc=Symbol(""),or=Symbol("");function xn(n,t,e){if(ri&&Oe){let i=Xc.get(n);i||Xc.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new eu),s.target=n,s.map=i,s.key=e),s.track()}}function Xi(n,t,e,i,s,o){const r=Xc.get(n);if(!r){sr++;return}const a=c=>{c&&c.trigger()};if(Jl(),t==="clear")r.forEach(a);else{const c=ue(n),l=c&&Kl(e);if(c&&e==="length"){const h=Number(i);r.forEach((u,d)=>{(d==="length"||d===or||!Po(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(r.get(e)),l&&a(r.get(or)),t){case"add":c?l&&a(r.get("length")):(a(r.get(Fs)),qo(n)&&a(r.get(qc)));break;case"delete":c||(a(r.get(Fs)),qo(n)&&a(r.get(qc)));break;case"set":qo(n)&&a(r.get(Fs));break}}Ql()}function Vs(n){const t=Ie(n);return t===n?t:(xn(t,"iterate",or),ai(n)?t:t.map(An))}function nu(n){return xn(n=Ie(n),"iterate",or),n}const sm={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,An)},concat(...n){return Vs(this).concat(...n.map(t=>ue(t)?Vs(t):t))},entries(){return Qa(this,"entries",n=>(n[1]=An(n[1]),n))},every(n,t){return Li(this,"every",n,t,void 0,arguments)},filter(n,t){return Li(this,"filter",n,t,e=>e.map(An),arguments)},find(n,t){return Li(this,"find",n,t,An,arguments)},findIndex(n,t){return Li(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Li(this,"findLast",n,t,An,arguments)},findLastIndex(n,t){return Li(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Li(this,"forEach",n,t,void 0,arguments)},includes(...n){return tc(this,"includes",n)},indexOf(...n){return tc(this,"indexOf",n)},join(n){return Vs(this).join(n)},lastIndexOf(...n){return tc(this,"lastIndexOf",n)},map(n,t){return Li(this,"map",n,t,void 0,arguments)},pop(){return Uo(this,"pop")},push(...n){return Uo(this,"push",n)},reduce(n,...t){return Fu(this,"reduce",n,t)},reduceRight(n,...t){return Fu(this,"reduceRight",n,t)},shift(){return Uo(this,"shift")},some(n,t){return Li(this,"some",n,t,void 0,arguments)},splice(...n){return Uo(this,"splice",n)},toReversed(){return Vs(this).toReversed()},toSorted(n){return Vs(this).toSorted(n)},toSpliced(...n){return Vs(this).toSpliced(...n)},unshift(...n){return Uo(this,"unshift",n)},values(){return Qa(this,"values",An)}};function Qa(n,t,e){const i=nu(n),s=i[t]();return i!==n&&!ai(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=e(o.value)),o}),s}const om=Array.prototype;function Li(n,t,e,i,s,o){const r=nu(n),a=r!==n&&!ai(n),c=r[t];if(c!==om[t]){const u=c.apply(n,o);return a?An(u):u}let l=e;r!==n&&(a?l=function(u,d){return e.call(this,An(u),d,n)}:e.length>2&&(l=function(u,d){return e.call(this,u,d,n)}));const h=c.call(r,l,i);return a&&s?s(h):h}function Fu(n,t,e,i){const s=nu(n);let o=e;return s!==n&&(ai(n)?e.length>3&&(o=function(r,a,c){return e.call(this,r,a,c,n)}):o=function(r,a,c){return e.call(this,r,An(a),c,n)}),s[t](o,...i)}function tc(n,t,e){const i=Ie(n);xn(i,"iterate",or);const s=i[t](...e);return(s===-1||s===!1)&&ru(e[0])?(e[0]=Ie(e[0]),i[t](...e)):s}function Uo(n,t,e=[]){vs(),Jl();const i=Ie(n)[t].apply(n,e);return Ql(),xs(),i}const rm=Yl("__proto__,__v_isRef,__isVue"),qd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Po));function am(n){Po(n)||(n=String(n));const t=Ie(this);return xn(t,"has",n),t.hasOwnProperty(n)}class Yd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return o;if(e==="__v_raw")return i===(s?o?ym:Zd:o?Kd:jd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=ue(t);if(!s){let c;if(r&&(c=sm[e]))return c;if(e==="hasOwnProperty")return am}const a=Reflect.get(t,e,vn(t)?t:i);return(Po(e)?qd.has(e):rm(e))||(s||xn(t,"get",e),o)?a:vn(a)?r&&Kl(e)?a:a.value:Je(a)?s?Qd(a):Ua(a):a}}class $d extends Yd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let o=t[e];if(!this._isShallow){const c=Os(o);if(!ai(i)&&!Os(i)&&(o=Ie(o),i=Ie(i)),!ue(t)&&vn(o)&&!vn(i))return c?!1:(o.value=i,!0)}const r=ue(t)&&Kl(e)?Number(e)<t.length:Pe(t,e),a=Reflect.set(t,e,i,vn(t)?t:s);return t===Ie(s)&&(r?gs(i,o)&&Xi(t,"set",e,i):Xi(t,"add",e,i)),a}deleteProperty(t,e){const i=Pe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Xi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Po(e)||!qd.has(e))&&xn(t,"has",e),i}ownKeys(t){return xn(t,"iterate",ue(t)?"length":Fs),Reflect.ownKeys(t)}}class cm extends Yd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const lm=new $d,um=new cm,hm=new $d(!0);const iu=n=>n,Da=n=>Reflect.getPrototypeOf(n);function Er(n,t,e=!1,i=!1){n=n.__v_raw;const s=Ie(n),o=Ie(t);e||(gs(t,o)&&xn(s,"get",t),xn(s,"get",o));const{has:r}=Da(s),a=i?iu:e?au:An;if(r.call(s,t))return a(n.get(t));if(r.call(s,o))return a(n.get(o));n!==s&&n.get(t)}function br(n,t=!1){const e=this.__v_raw,i=Ie(e),s=Ie(n);return t||(gs(n,s)&&xn(i,"has",n),xn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function Tr(n,t=!1){return n=n.__v_raw,!t&&xn(Ie(n),"iterate",Fs),Reflect.get(n,"size",n)}function Ou(n,t=!1){!t&&!ai(n)&&!Os(n)&&(n=Ie(n));const e=Ie(this);return Da(e).has.call(e,n)||(e.add(n),Xi(e,"add",n,n)),this}function Bu(n,t,e=!1){!e&&!ai(t)&&!Os(t)&&(t=Ie(t));const i=Ie(this),{has:s,get:o}=Da(i);let r=s.call(i,n);r||(n=Ie(n),r=s.call(i,n));const a=o.call(i,n);return i.set(n,t),r?gs(t,a)&&Xi(i,"set",n,t):Xi(i,"add",n,t),this}function zu(n){const t=Ie(this),{has:e,get:i}=Da(t);let s=e.call(t,n);s||(n=Ie(n),s=e.call(t,n)),i&&i.call(t,n);const o=t.delete(n);return s&&Xi(t,"delete",n,void 0),o}function Gu(){const n=Ie(this),t=n.size!==0,e=n.clear();return t&&Xi(n,"clear",void 0,void 0),e}function Ar(n,t){return function(i,s){const o=this,r=o.__v_raw,a=Ie(r),c=t?iu:n?au:An;return!n&&xn(a,"iterate",Fs),r.forEach((l,h)=>i.call(s,c(l),c(h),o))}}function Rr(n,t,e){return function(...i){const s=this.__v_raw,o=Ie(s),r=qo(o),a=n==="entries"||n===Symbol.iterator&&r,c=n==="keys"&&r,l=s[n](...i),h=e?iu:t?au:An;return!t&&xn(o,"iterate",c?qc:Fs),{next(){const{value:u,done:d}=l.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function ns(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function dm(){const n={get(o){return Er(this,o)},get size(){return Tr(this)},has:br,add:Ou,set:Bu,delete:zu,clear:Gu,forEach:Ar(!1,!1)},t={get(o){return Er(this,o,!1,!0)},get size(){return Tr(this)},has:br,add(o){return Ou.call(this,o,!0)},set(o,r){return Bu.call(this,o,r,!0)},delete:zu,clear:Gu,forEach:Ar(!1,!0)},e={get(o){return Er(this,o,!0)},get size(){return Tr(this,!0)},has(o){return br.call(this,o,!0)},add:ns("add"),set:ns("set"),delete:ns("delete"),clear:ns("clear"),forEach:Ar(!0,!1)},i={get(o){return Er(this,o,!0,!0)},get size(){return Tr(this,!0)},has(o){return br.call(this,o,!0)},add:ns("add"),set:ns("set"),delete:ns("delete"),clear:ns("clear"),forEach:Ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Rr(o,!1,!1),e[o]=Rr(o,!0,!1),t[o]=Rr(o,!1,!0),i[o]=Rr(o,!0,!0)}),[n,e,t,i]}const[fm,pm,mm,gm]=dm();function su(n,t){const e=t?n?gm:mm:n?pm:fm;return(i,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Pe(e,s)&&s in i?e:i,s,o)}const _m={get:su(!1,!1)},vm={get:su(!1,!0)},xm={get:su(!0,!1)};const jd=new WeakMap,Kd=new WeakMap,Zd=new WeakMap,ym=new WeakMap;function Mm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wm(n){return n.__v_skip||!Object.isExtensible(n)?0:Mm(Vp(n))}function Ua(n){return Os(n)?n:ou(n,!1,lm,_m,jd)}function Jd(n){return ou(n,!1,hm,vm,Kd)}function Qd(n){return ou(n,!0,um,xm,Zd)}function ou(n,t,e,i,s){if(!Je(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=s.get(n);if(o)return o;const r=wm(n);if(r===0)return n;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function $o(n){return Os(n)?$o(n.__v_raw):!!(n&&n.__v_isReactive)}function Os(n){return!!(n&&n.__v_isReadonly)}function ai(n){return!!(n&&n.__v_isShallow)}function ru(n){return n?!!n.__v_raw:!1}function Ie(n){const t=n&&n.__v_raw;return t?Ie(t):n}function Sm(n){return!Pe(n,"__v_skip")&&Object.isExtensible(n)&&Nd(n,"__v_skip",!0),n}const An=n=>Je(n)?Ua(n):n,au=n=>Je(n)?Qd(n):n;function vn(n){return n?n.__v_isRef===!0:!1}function Qt(n){return tf(n,!1)}function ho(n){return tf(n,!0)}function tf(n,t){return vn(n)?n:new Em(n,t)}class Em{constructor(t,e){this.dep=new eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Ie(t),this._value=e?t:An(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||ai(t)||Os(t);t=i?t:Ie(t),gs(t,e)&&(this._rawValue=t,this._value=i?t:An(t),this.dep.trigger())}}function fo(n){return vn(n)?n.value:n}const bm={get:(n,t,e)=>t==="__v_raw"?n:fo(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return vn(s)&&!vn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function ef(n){return $o(n)?n:new Proxy(n,bm)}class Tm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Gd(this),!0}get value(){const t=this.dep.track();return Vd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Am(n,t,e=!1){let i,s;return ae(n)?i=n:(i=n.get,s=n.set),new Tm(i,s,e)}const Pr={},ga=new WeakMap;let Ps;function Rm(n,t=!1,e=Ps){if(e){let i=ga.get(e);i||ga.set(e,i=[]),i.push(n)}}function Pm(n,t,e=Fe){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:a,call:c}=e,l=S=>s?S:ai(S)||s===!1||s===0?ki(S,1):ki(S);let h,u,d,f,_=!1,x=!1;if(vn(n)?(u=()=>n.value,_=ai(n)):$o(n)?(u=()=>l(n),_=!0):ue(n)?(x=!0,_=n.some(S=>$o(S)||ai(S)),u=()=>n.map(S=>{if(vn(S))return S.value;if($o(S))return l(S);if(ae(S))return c?c(S,2):S()})):ae(n)?t?u=c?()=>c(n,2):n:u=()=>{if(d){vs();try{d()}finally{xs()}}const S=Ps;Ps=h;try{return c?c(n,3,[f]):n(f)}finally{Ps=S}}:u=Si,t&&s){const S=u,z=s===!0?1/0:s;u=()=>ki(S(),z)}const p=em(),m=()=>{h.stop(),p&&jl(p.effects,h)};if(o&&t){const S=t;t=(...z)=>{S(...z),m()}}let T=x?new Array(n.length).fill(Pr):Pr;const w=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(t){const z=h.run();if(s||_||(x?z.some((I,P)=>gs(I,T[P])):gs(z,T))){d&&d();const I=Ps;Ps=h;try{const P=[z,T===Pr?void 0:x&&T[0]===Pr?[]:T,f];c?c(t,3,P):t(...P),T=z}finally{Ps=I}}}else h.run()};return a&&a(w),h=new Bd(u),h.scheduler=r?()=>r(w,!1):w,f=S=>Rm(S,!1,h),d=h.onStop=()=>{const S=ga.get(h);if(S){if(c)c(S,4);else for(const z of S)z();ga.delete(h)}},t?i?w(!0):T=h.run():r?r(w.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function ki(n,t=1/0,e){if(t<=0||!Je(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,vn(n))ki(n.value,t,e);else if(ue(n))for(let i=0;i<n.length;i++)ki(n[i],t,e);else if(Hp(n)||qo(n))n.forEach(i=>{ki(i,t,e)});else if(Wp(n)){for(const i in n)ki(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ki(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vr(n,t,e,i){try{return i?n(...i):n()}catch(s){Na(s,t,e)}}function bi(n,t,e,i){if(ae(n)){const s=vr(n,t,e,i);return s&&Ud(s)&&s.catch(o=>{Na(o,t,e)}),s}if(ue(n)){const s=[];for(let o=0;o<n.length;o++)s.push(bi(n[o],t,e,i));return s}}function Na(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Fe;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,c,l)===!1)return}a=a.parent}if(o){vs(),vr(o,null,10,[n,c,l]),xs();return}}Cm(n,e,s,i,r)}function Cm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let rr=!1,Yc=!1;const Rn=[];let xi=0;const po=[];let us=null,so=0;const nf=Promise.resolve();let cu=null;function sf(n){const t=cu||nf;return n?t.then(this?n.bind(this):n):t}function Im(n){let t=rr?xi+1:0,e=Rn.length;for(;t<e;){const i=t+e>>>1,s=Rn[i],o=ar(s);o<n||o===n&&s.flags&2?t=i+1:e=i}return t}function lu(n){if(!(n.flags&1)){const t=ar(n),e=Rn[Rn.length-1];!e||!(n.flags&2)&&t>=ar(e)?Rn.push(n):Rn.splice(Im(t),0,n),n.flags|=1,of()}}function of(){!rr&&!Yc&&(Yc=!0,cu=nf.then(af))}function Lm(n){ue(n)?po.push(...n):us&&n.id===-1?us.splice(so+1,0,n):n.flags&1||(po.push(n),n.flags|=1),of()}function Hu(n,t,e=rr?xi+1:0){for(;e<Rn.length;e++){const i=Rn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Rn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function rf(n){if(po.length){const t=[...new Set(po)].sort((e,i)=>ar(e)-ar(i));if(po.length=0,us){us.push(...t);return}for(us=t,so=0;so<us.length;so++){const e=us[so];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}us=null,so=0}}const ar=n=>n.id==null?n.flags&2?-1:1/0:n.id;function af(n){Yc=!1,rr=!0;try{for(xi=0;xi<Rn.length;xi++){const t=Rn[xi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),vr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;xi<Rn.length;xi++){const t=Rn[xi];t&&(t.flags&=-2)}xi=0,Rn.length=0,rf(),rr=!1,cu=null,(Rn.length||po.length)&&af()}}let Hn=null,cf=null;function _a(n){const t=Hn;return Hn=n,cf=n&&n.type.__scopeId||null,t}function _i(n,t=Hn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Zu(-1);const o=_a(t);let r;try{r=n(...s)}finally{_a(o),i._d&&Zu(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function Dm(n,t){if(Hn===null)return n;const e=Ga(Hn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,a,c=Fe]=t[s];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&ki(r),i.push({dir:o,instance:e,value:r,oldValue:void 0,arg:a,modifiers:c}))}return n}function Ms(n,t,e,i){const s=n.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let c=a.dir[i];c&&(vs(),bi(c,e,8,[n.el,a,n,t]),xs())}}const Um=Symbol("_vte"),Nm=n=>n.__isTeleport;function uu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,uu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Zn(n,t){return ae(n)?un({name:n.name},t,{setup:n}):n}function lf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function $c(n,t,e,i,s=!1){if(ue(n)){n.forEach((_,x)=>$c(_,t&&(ue(t)?t[x]:t),e,i,s));return}if(jo(i)&&!s)return;const o=i.shapeFlag&4?Ga(i.component):i.el,r=s?null:o,{i:a,r:c}=n,l=t&&t.r,h=a.refs===Fe?a.refs={}:a.refs,u=a.setupState,d=Ie(u),f=u===Fe?()=>!1:_=>Pe(d,_);if(l!=null&&l!==c&&(an(l)?(h[l]=null,f(l)&&(u[l]=null)):vn(l)&&(l.value=null)),ae(c))vr(c,a,12,[r,h]);else{const _=an(c),x=vn(c);if(_||x){const p=()=>{if(n.f){const m=_?f(c)?u[c]:h[c]:c.value;s?ue(m)&&jl(m,o):ue(m)?m.includes(o)||m.push(o):_?(h[c]=[o],f(c)&&(u[c]=h[c])):(c.value=[o],n.k&&(h[n.k]=c.value))}else _?(h[c]=r,f(c)&&(u[c]=r)):x&&(c.value=r,n.k&&(h[n.k]=r))};r?(p.id=-1,zn(p,e)):p()}}}const jo=n=>!!n.type.__asyncLoader,uf=n=>n.type.__isKeepAlive;function Fm(n,t){hf(n,"a",t)}function Om(n,t){hf(n,"da",t)}function hf(n,t,e=_n){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Fa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)uf(s.parent.vnode)&&Bm(i,t,e,s),s=s.parent}}function Bm(n,t,e,i){const s=Fa(t,n,i,!0);hu(()=>{jl(i[t],s)},e)}function Fa(n,t,e=_n,i=!1){if(e){const s=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...r)=>{vs();const a=xr(e),c=bi(t,e,n,r);return a(),xs(),c});return i?s.unshift(o):s.push(o),o}}const Ki=n=>(t,e=_n)=>{(!za||n==="sp")&&Fa(n,(...i)=>t(...i),e)},zm=Ki("bm"),hi=Ki("m"),Gm=Ki("bu"),Hm=Ki("u"),km=Ki("bum"),hu=Ki("um"),Vm=Ki("sp"),Wm=Ki("rtg"),Xm=Ki("rtc");function qm(n,t=_n){Fa("ec",n,t)}const Ym="components";function ku(n,t){return jm(Ym,n,!0,t)||n}const $m=Symbol.for("v-ndc");function jm(n,t,e=!0,i=!1){const s=Hn||_n;if(s){const o=s.type;{const a=F0(o,!1);if(a&&(a===t||a===qn(t)||a===La(qn(t))))return o}const r=Vu(s[n]||o[n],t)||Vu(s.appContext[n],t);return!r&&i?o:r}}function Vu(n,t){return n&&(n[t]||n[qn(t)]||n[La(qn(t))])}const jc=n=>n?Cf(n)?Ga(n):jc(n.parent):null,Ko=un(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>jc(n.parent),$root:n=>jc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>du(n),$forceUpdate:n=>n.f||(n.f=()=>{lu(n.update)}),$nextTick:n=>n.n||(n.n=sf.bind(n.proxy)),$watch:n=>g0.bind(n)}),ec=(n,t)=>n!==Fe&&!n.__isScriptSetup&&Pe(n,t),Km={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:c}=n;let l;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return o[t]}else{if(ec(i,t))return r[t]=1,i[t];if(s!==Fe&&Pe(s,t))return r[t]=2,s[t];if((l=n.propsOptions[0])&&Pe(l,t))return r[t]=3,o[t];if(e!==Fe&&Pe(e,t))return r[t]=4,e[t];Kc&&(r[t]=0)}}const h=Ko[t];let u,d;if(h)return t==="$attrs"&&xn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Fe&&Pe(e,t))return r[t]=4,e[t];if(d=c.config.globalProperties,Pe(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:o}=n;return ec(s,t)?(s[t]=e,!0):i!==Fe&&Pe(i,t)?(i[t]=e,!0):Pe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:o}},r){let a;return!!e[r]||n!==Fe&&Pe(n,r)||ec(t,r)||(a=o[0])&&Pe(a,r)||Pe(i,r)||Pe(Ko,r)||Pe(s.config.globalProperties,r)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Pe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Wu(n){return ue(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Kc=!0;function Zm(n){const t=du(n),e=n.proxy,i=n.ctx;Kc=!1,t.beforeCreate&&Xu(t.beforeCreate,n,"bc");const{data:s,computed:o,methods:r,watch:a,provide:c,inject:l,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:_,activated:x,deactivated:p,beforeDestroy:m,beforeUnmount:T,destroyed:w,unmounted:S,render:z,renderTracked:I,renderTriggered:P,errorCaptured:B,serverPrefetch:Q,expose:y,inheritAttrs:E,components:U,directives:X,filters:et}=t;if(l&&Jm(l,i,null),r)for(const nt in r){const $=r[nt];ae($)&&(i[nt]=$.bind(e))}if(s){const nt=s.call(e,e);Je(nt)&&(n.data=Ua(nt))}if(Kc=!0,o)for(const nt in o){const $=o[nt],gt=ae($)?$.bind(e,e):ae($.get)?$.get.bind(e,e):Si,pt=!ae($)&&ae($.set)?$.set.bind(e):Si,yt=ni({get:gt,set:pt});Object.defineProperty(i,nt,{enumerable:!0,configurable:!0,get:()=>yt.value,set:Ut=>yt.value=Ut})}if(a)for(const nt in a)df(a[nt],i,e,nt);if(c){const nt=ae(c)?c.call(e):c;Reflect.ownKeys(nt).forEach($=>{oa($,nt[$])})}h&&Xu(h,n,"c");function Y(nt,$){ue($)?$.forEach(gt=>nt(gt.bind(e))):$&&nt($.bind(e))}if(Y(zm,u),Y(hi,d),Y(Gm,f),Y(Hm,_),Y(Fm,x),Y(Om,p),Y(qm,B),Y(Xm,I),Y(Wm,P),Y(km,T),Y(hu,S),Y(Vm,Q),ue(y))if(y.length){const nt=n.exposed||(n.exposed={});y.forEach($=>{Object.defineProperty(nt,$,{get:()=>e[$],set:gt=>e[$]=gt})})}else n.exposed||(n.exposed={});z&&n.render===Si&&(n.render=z),E!=null&&(n.inheritAttrs=E),U&&(n.components=U),X&&(n.directives=X),Q&&lf(n)}function Jm(n,t,e=Si){ue(n)&&(n=Zc(n));for(const i in n){const s=n[i];let o;Je(s)?"default"in s?o=qi(s.from||i,s.default,!0):o=qi(s.from||i):o=qi(s),vn(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function Xu(n,t,e){bi(ue(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function df(n,t,e,i){let s=i.includes(".")?Tf(e,i):()=>e[i];if(an(n)){const o=t[n];ae(o)&&Ke(s,o)}else if(ae(n))Ke(s,n.bind(e));else if(Je(n))if(ue(n))n.forEach(o=>df(o,t,e,i));else{const o=ae(n.handler)?n.handler.bind(e):t[n.handler];ae(o)&&Ke(s,o,n)}}function du(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!e&&!i?c=t:(c={},s.length&&s.forEach(l=>va(c,l,r,!0)),va(c,t,r)),Je(t)&&o.set(t,c),c}function va(n,t,e,i=!1){const{mixins:s,extends:o}=t;o&&va(n,o,e,!0),s&&s.forEach(r=>va(n,r,e,!0));for(const r in t)if(!(i&&r==="expose")){const a=Qm[r]||e&&e[r];n[r]=a?a(n[r],t[r]):t[r]}return n}const Qm={data:qu,props:Yu,emits:Yu,methods:Wo,computed:Wo,beforeCreate:En,created:En,beforeMount:En,mounted:En,beforeUpdate:En,updated:En,beforeDestroy:En,beforeUnmount:En,destroyed:En,unmounted:En,activated:En,deactivated:En,errorCaptured:En,serverPrefetch:En,components:Wo,directives:Wo,watch:e0,provide:qu,inject:t0};function qu(n,t){return t?n?function(){return un(ae(n)?n.call(this,this):n,ae(t)?t.call(this,this):t)}:t:n}function t0(n,t){return Wo(Zc(n),Zc(t))}function Zc(n){if(ue(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function En(n,t){return n?[...new Set([].concat(n,t))]:t}function Wo(n,t){return n?un(Object.create(null),n,t):t}function Yu(n,t){return n?ue(n)&&ue(t)?[...new Set([...n,...t])]:un(Object.create(null),Wu(n),Wu(t??{})):t}function e0(n,t){if(!n)return t;if(!t)return n;const e=un(Object.create(null),n);for(const i in t)e[i]=En(n[i],t[i]);return e}function ff(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let n0=0;function i0(n,t){return function(i,s=null){ae(i)||(i=un({},i)),s!=null&&!Je(s)&&(s=null);const o=ff(),r=new WeakSet,a=[];let c=!1;const l=o.app={_uid:n0++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:B0,get config(){return o.config},set config(h){},use(h,...u){return r.has(h)||(h&&ae(h.install)?(r.add(h),h.install(l,...u)):ae(h)&&(r.add(h),h(l,...u))),l},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),l},component(h,u){return u?(o.components[h]=u,l):o.components[h]},directive(h,u){return u?(o.directives[h]=u,l):o.directives[h]},mount(h,u,d){if(!c){const f=l._ceVNode||Ze(i,s);return f.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(f,h):n(f,h,d),c=!0,l._container=h,h.__vue_app__=l,Ga(f.component)}},onUnmount(h){a.push(h)},unmount(){c&&(bi(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(h,u){return o.provides[h]=u,l},runWithContext(h){const u=mo;mo=l;try{return h()}finally{mo=u}}};return l}}let mo=null;function oa(n,t){if(_n){let e=_n.provides;const i=_n.parent&&_n.parent.provides;i===e&&(e=_n.provides=Object.create(i)),e[n]=t}}function qi(n,t,e=!1){const i=_n||Hn;if(i||mo){const s=mo?mo._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&ae(t)?t.call(i&&i.proxy):t}}const pf={},mf=()=>Object.create(pf),gf=n=>Object.getPrototypeOf(n)===pf;function s0(n,t,e,i=!1){const s={},o=mf();n.propsDefaults=Object.create(null),_f(n,t,s,o);for(const r in n.propsOptions[0])r in s||(s[r]=void 0);e?n.props=i?s:Jd(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function o0(n,t,e,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=n,a=Ie(s),[c]=n.propsOptions;let l=!1;if((i||r>0)&&!(r&16)){if(r&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Oa(n.emitsOptions,d))continue;const f=t[d];if(c)if(Pe(o,d))f!==o[d]&&(o[d]=f,l=!0);else{const _=qn(d);s[_]=Jc(c,a,_,f,n,!1)}else f!==o[d]&&(o[d]=f,l=!0)}}}else{_f(n,t,s,o)&&(l=!0);let h;for(const u in a)(!t||!Pe(t,u)&&((h=Hs(u))===u||!Pe(t,h)))&&(c?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=Jc(c,a,u,void 0,n,!0)):delete s[u]);if(o!==a)for(const u in o)(!t||!Pe(t,u))&&(delete o[u],l=!0)}l&&Xi(n.attrs,"set","")}function _f(n,t,e,i){const[s,o]=n.propsOptions;let r=!1,a;if(t)for(let c in t){if(Yo(c))continue;const l=t[c];let h;s&&Pe(s,h=qn(c))?!o||!o.includes(h)?e[h]=l:(a||(a={}))[h]=l:Oa(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,r=!0)}if(o){const c=Ie(e),l=a||Fe;for(let h=0;h<o.length;h++){const u=o[h];e[u]=Jc(s,c,u,l[u],n,!Pe(l,u))}}return r}function Jc(n,t,e,i,s,o){const r=n[e];if(r!=null){const a=Pe(r,"default");if(a&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&ae(c)){const{propsDefaults:l}=s;if(e in l)i=l[e];else{const h=xr(s);i=l[e]=c.call(null,t),h()}}else i=c;s.ce&&s.ce._setProp(e,i)}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===Hs(e))&&(i=!0))}return i}const r0=new WeakMap;function vf(n,t,e=!1){const i=e?r0:t.propsCache,s=i.get(n);if(s)return s;const o=n.props,r={},a=[];let c=!1;if(!ae(n)){const h=u=>{c=!0;const[d,f]=vf(u,t,!0);un(r,d),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!o&&!c)return Je(n)&&i.set(n,uo),uo;if(ue(o))for(let h=0;h<o.length;h++){const u=qn(o[h]);$u(u)&&(r[u]=Fe)}else if(o)for(const h in o){const u=qn(h);if($u(u)){const d=o[h],f=r[u]=ue(d)||ae(d)?{type:d}:un({},d),_=f.type;let x=!1,p=!0;if(ue(_))for(let m=0;m<_.length;++m){const T=_[m],w=ae(T)&&T.name;if(w==="Boolean"){x=!0;break}else w==="String"&&(p=!1)}else x=ae(_)&&_.name==="Boolean";f[0]=x,f[1]=p,(x||Pe(f,"default"))&&a.push(u)}}const l=[r,a];return Je(n)&&i.set(n,l),l}function $u(n){return n[0]!=="$"&&!Yo(n)}const xf=n=>n[0]==="_"||n==="$stable",fu=n=>ue(n)?n.map(yi):[yi(n)],a0=(n,t,e)=>{if(t._n)return t;const i=_i((...s)=>fu(t(...s)),e);return i._c=!1,i},yf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(xf(s))continue;const o=n[s];if(ae(o))t[s]=a0(s,o,i);else if(o!=null){const r=fu(o);t[s]=()=>r}}},Mf=(n,t)=>{const e=fu(t);n.slots.default=()=>e},wf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},c0=(n,t,e)=>{const i=n.slots=mf();if(n.vnode.shapeFlag&32){const s=t._;s?(wf(i,t,e),e&&Nd(i,"_",s,!0)):yf(t,i)}else t&&Mf(n,t)},l0=(n,t,e)=>{const{vnode:i,slots:s}=n;let o=!0,r=Fe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?o=!1:wf(s,t,e):(o=!t.$stable,yf(t,s)),r=t}else t&&(Mf(n,t),r={default:1});if(o)for(const a in s)!xf(a)&&r[a]==null&&delete s[a]},zn=S0;function u0(n){return h0(n)}function h0(n,t){const e=Fd();e.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:c,setText:l,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=Si,insertStaticContent:_}=n,x=(g,A,L,F=null,N=null,q=null,J=void 0,M=null,v=!!A.dynamicChildren)=>{if(g===A)return;g&&!No(g,A)&&(F=O(g),Ut(g,N,q,!0),g=null),A.patchFlag===-2&&(v=!1,A.dynamicChildren=null);const{type:C,ref:j,shapeFlag:k}=A;switch(C){case Ba:p(g,A,L,F);break;case cr:m(g,A,L,F);break;case sc:g==null&&T(A,L,F,J);break;case gn:U(g,A,L,F,N,q,J,M,v);break;default:k&1?z(g,A,L,F,N,q,J,M,v):k&6?X(g,A,L,F,N,q,J,M,v):(k&64||k&128)&&C.process(g,A,L,F,N,q,J,M,v,ht)}j!=null&&N&&$c(j,g&&g.ref,q,A||g,!A)},p=(g,A,L,F)=>{if(g==null)i(A.el=a(A.children),L,F);else{const N=A.el=g.el;A.children!==g.children&&l(N,A.children)}},m=(g,A,L,F)=>{g==null?i(A.el=c(A.children||""),L,F):A.el=g.el},T=(g,A,L,F)=>{[g.el,g.anchor]=_(g.children,A,L,F,g.el,g.anchor)},w=({el:g,anchor:A},L,F)=>{let N;for(;g&&g!==A;)N=d(g),i(g,L,F),g=N;i(A,L,F)},S=({el:g,anchor:A})=>{let L;for(;g&&g!==A;)L=d(g),s(g),g=L;s(A)},z=(g,A,L,F,N,q,J,M,v)=>{A.type==="svg"?J="svg":A.type==="math"&&(J="mathml"),g==null?I(A,L,F,N,q,J,M,v):Q(g,A,N,q,J,M,v)},I=(g,A,L,F,N,q,J,M)=>{let v,C;const{props:j,shapeFlag:k,transition:V,dirs:ut}=g;if(v=g.el=r(g.type,q,j&&j.is,j),k&8?h(v,g.children):k&16&&B(g.children,v,null,F,N,nc(g,q),J,M),ut&&Ms(g,null,F,"created"),P(v,g,g.scopeId,J,F),j){for(const _t in j)_t!=="value"&&!Yo(_t)&&o(v,_t,null,j[_t],q,F);"value"in j&&o(v,"value",null,j.value,q),(C=j.onVnodeBeforeMount)&&gi(C,F,g)}ut&&Ms(g,null,F,"beforeMount");const lt=d0(N,V);lt&&V.beforeEnter(v),i(v,A,L),((C=j&&j.onVnodeMounted)||lt||ut)&&zn(()=>{C&&gi(C,F,g),lt&&V.enter(v),ut&&Ms(g,null,F,"mounted")},N)},P=(g,A,L,F,N)=>{if(L&&f(g,L),F)for(let q=0;q<F.length;q++)f(g,F[q]);if(N){let q=N.subTree;if(A===q||Rf(q.type)&&(q.ssContent===A||q.ssFallback===A)){const J=N.vnode;P(g,J,J.scopeId,J.slotScopeIds,N.parent)}}},B=(g,A,L,F,N,q,J,M,v=0)=>{for(let C=v;C<g.length;C++){const j=g[C]=M?hs(g[C]):yi(g[C]);x(null,j,A,L,F,N,q,J,M)}},Q=(g,A,L,F,N,q,J)=>{const M=A.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:j}=A;v|=g.patchFlag&16;const k=g.props||Fe,V=A.props||Fe;let ut;if(L&&ws(L,!1),(ut=V.onVnodeBeforeUpdate)&&gi(ut,L,A,g),j&&Ms(A,g,L,"beforeUpdate"),L&&ws(L,!0),(k.innerHTML&&V.innerHTML==null||k.textContent&&V.textContent==null)&&h(M,""),C?y(g.dynamicChildren,C,M,L,F,nc(A,N),q):J||$(g,A,M,null,L,F,nc(A,N),q,!1),v>0){if(v&16)E(M,k,V,L,N);else if(v&2&&k.class!==V.class&&o(M,"class",null,V.class,N),v&4&&o(M,"style",k.style,V.style,N),v&8){const lt=A.dynamicProps;for(let _t=0;_t<lt.length;_t++){const Rt=lt[_t],ft=k[Rt],xt=V[Rt];(xt!==ft||Rt==="value")&&o(M,Rt,ft,xt,N,L)}}v&1&&g.children!==A.children&&h(M,A.children)}else!J&&C==null&&E(M,k,V,L,N);((ut=V.onVnodeUpdated)||j)&&zn(()=>{ut&&gi(ut,L,A,g),j&&Ms(A,g,L,"updated")},F)},y=(g,A,L,F,N,q,J)=>{for(let M=0;M<A.length;M++){const v=g[M],C=A[M],j=v.el&&(v.type===gn||!No(v,C)||v.shapeFlag&70)?u(v.el):L;x(v,C,j,null,F,N,q,J,!0)}},E=(g,A,L,F,N)=>{if(A!==L){if(A!==Fe)for(const q in A)!Yo(q)&&!(q in L)&&o(g,q,A[q],null,N,F);for(const q in L){if(Yo(q))continue;const J=L[q],M=A[q];J!==M&&q!=="value"&&o(g,q,M,J,N,F)}"value"in L&&o(g,"value",A.value,L.value,N)}},U=(g,A,L,F,N,q,J,M,v)=>{const C=A.el=g?g.el:a(""),j=A.anchor=g?g.anchor:a("");let{patchFlag:k,dynamicChildren:V,slotScopeIds:ut}=A;ut&&(M=M?M.concat(ut):ut),g==null?(i(C,L,F),i(j,L,F),B(A.children||[],L,j,N,q,J,M,v)):k>0&&k&64&&V&&g.dynamicChildren?(y(g.dynamicChildren,V,L,N,q,J,M),(A.key!=null||N&&A===N.subTree)&&Sf(g,A,!0)):$(g,A,L,j,N,q,J,M,v)},X=(g,A,L,F,N,q,J,M,v)=>{A.slotScopeIds=M,g==null?A.shapeFlag&512?N.ctx.activate(A,L,F,J,v):et(A,L,F,N,q,J,v):at(g,A,v)},et=(g,A,L,F,N,q,J)=>{const M=g.component=I0(g,F,N);if(uf(g)&&(M.ctx.renderer=ht),L0(M,!1,J),M.asyncDep){if(N&&N.registerDep(M,Y,J),!g.el){const v=M.subTree=Ze(cr);m(null,v,A,L)}}else Y(M,g,A,L,N,q,J)},at=(g,A,L)=>{const F=A.component=g.component;if(M0(g,A,L))if(F.asyncDep&&!F.asyncResolved){nt(F,A,L);return}else F.next=A,F.update();else A.el=g.el,F.vnode=A},Y=(g,A,L,F,N,q,J)=>{const M=()=>{if(g.isMounted){let{next:k,bu:V,u:ut,parent:lt,vnode:_t}=g;{const Nt=Ef(g);if(Nt){k&&(k.el=_t.el,nt(g,k,J)),Nt.asyncDep.then(()=>{g.isUnmounted||M()});return}}let Rt=k,ft;ws(g,!1),k?(k.el=_t.el,nt(g,k,J)):k=_t,V&&Za(V),(ft=k.props&&k.props.onVnodeBeforeUpdate)&&gi(ft,lt,k,_t),ws(g,!0);const xt=ic(g),It=g.subTree;g.subTree=xt,x(It,xt,u(It.el),O(It),g,N,q),k.el=xt.el,Rt===null&&w0(g,xt.el),ut&&zn(ut,N),(ft=k.props&&k.props.onVnodeUpdated)&&zn(()=>gi(ft,lt,k,_t),N)}else{let k;const{el:V,props:ut}=A,{bm:lt,m:_t,parent:Rt,root:ft,type:xt}=g,It=jo(A);if(ws(g,!1),lt&&Za(lt),!It&&(k=ut&&ut.onVnodeBeforeMount)&&gi(k,Rt,A),ws(g,!0),V&&it){const Nt=()=>{g.subTree=ic(g),it(V,g.subTree,g,N,null)};It&&xt.__asyncHydrate?xt.__asyncHydrate(V,g,Nt):Nt()}else{ft.ce&&ft.ce._injectChildStyle(xt);const Nt=g.subTree=ic(g);x(null,Nt,L,F,g,N,q),A.el=Nt.el}if(_t&&zn(_t,N),!It&&(k=ut&&ut.onVnodeMounted)){const Nt=A;zn(()=>gi(k,Rt,Nt),N)}(A.shapeFlag&256||Rt&&jo(Rt.vnode)&&Rt.vnode.shapeFlag&256)&&g.a&&zn(g.a,N),g.isMounted=!0,A=L=F=null}};g.scope.on();const v=g.effect=new Bd(M);g.scope.off();const C=g.update=v.run.bind(v),j=g.job=v.runIfDirty.bind(v);j.i=g,j.id=g.uid,v.scheduler=()=>lu(j),ws(g,!0),C()},nt=(g,A,L)=>{A.component=g;const F=g.vnode.props;g.vnode=A,g.next=null,o0(g,A.props,F,L),l0(g,A.children,L),vs(),Hu(g),xs()},$=(g,A,L,F,N,q,J,M,v=!1)=>{const C=g&&g.children,j=g?g.shapeFlag:0,k=A.children,{patchFlag:V,shapeFlag:ut}=A;if(V>0){if(V&128){pt(C,k,L,F,N,q,J,M,v);return}else if(V&256){gt(C,k,L,F,N,q,J,M,v);return}}ut&8?(j&16&&Mt(C,N,q),k!==C&&h(L,k)):j&16?ut&16?pt(C,k,L,F,N,q,J,M,v):Mt(C,N,q,!0):(j&8&&h(L,""),ut&16&&B(k,L,F,N,q,J,M,v))},gt=(g,A,L,F,N,q,J,M,v)=>{g=g||uo,A=A||uo;const C=g.length,j=A.length,k=Math.min(C,j);let V;for(V=0;V<k;V++){const ut=A[V]=v?hs(A[V]):yi(A[V]);x(g[V],ut,L,null,N,q,J,M,v)}C>j?Mt(g,N,q,!0,!1,k):B(A,L,F,N,q,J,M,v,k)},pt=(g,A,L,F,N,q,J,M,v)=>{let C=0;const j=A.length;let k=g.length-1,V=j-1;for(;C<=k&&C<=V;){const ut=g[C],lt=A[C]=v?hs(A[C]):yi(A[C]);if(No(ut,lt))x(ut,lt,L,null,N,q,J,M,v);else break;C++}for(;C<=k&&C<=V;){const ut=g[k],lt=A[V]=v?hs(A[V]):yi(A[V]);if(No(ut,lt))x(ut,lt,L,null,N,q,J,M,v);else break;k--,V--}if(C>k){if(C<=V){const ut=V+1,lt=ut<j?A[ut].el:F;for(;C<=V;)x(null,A[C]=v?hs(A[C]):yi(A[C]),L,lt,N,q,J,M,v),C++}}else if(C>V)for(;C<=k;)Ut(g[C],N,q,!0),C++;else{const ut=C,lt=C,_t=new Map;for(C=lt;C<=V;C++){const Ft=A[C]=v?hs(A[C]):yi(A[C]);Ft.key!=null&&_t.set(Ft.key,C)}let Rt,ft=0;const xt=V-lt+1;let It=!1,Nt=0;const Pt=new Array(xt);for(C=0;C<xt;C++)Pt[C]=0;for(C=ut;C<=k;C++){const Ft=g[C];if(ft>=xt){Ut(Ft,N,q,!0);continue}let jt;if(Ft.key!=null)jt=_t.get(Ft.key);else for(Rt=lt;Rt<=V;Rt++)if(Pt[Rt-lt]===0&&No(Ft,A[Rt])){jt=Rt;break}jt===void 0?Ut(Ft,N,q,!0):(Pt[jt-lt]=C+1,jt>=Nt?Nt=jt:It=!0,x(Ft,A[jt],L,null,N,q,J,M,v),ft++)}const Yt=It?f0(Pt):uo;for(Rt=Yt.length-1,C=xt-1;C>=0;C--){const Ft=lt+C,jt=A[Ft],G=Ft+1<j?A[Ft+1].el:F;Pt[C]===0?x(null,jt,L,G,N,q,J,M,v):It&&(Rt<0||C!==Yt[Rt]?yt(jt,L,G,2):Rt--)}}},yt=(g,A,L,F,N=null)=>{const{el:q,type:J,transition:M,children:v,shapeFlag:C}=g;if(C&6){yt(g.component.subTree,A,L,F);return}if(C&128){g.suspense.move(A,L,F);return}if(C&64){J.move(g,A,L,ht);return}if(J===gn){i(q,A,L);for(let k=0;k<v.length;k++)yt(v[k],A,L,F);i(g.anchor,A,L);return}if(J===sc){w(g,A,L);return}if(F!==2&&C&1&&M)if(F===0)M.beforeEnter(q),i(q,A,L),zn(()=>M.enter(q),N);else{const{leave:k,delayLeave:V,afterLeave:ut}=M,lt=()=>i(q,A,L),_t=()=>{k(q,()=>{lt(),ut&&ut()})};V?V(q,lt,_t):_t()}else i(q,A,L)},Ut=(g,A,L,F=!1,N=!1)=>{const{type:q,props:J,ref:M,children:v,dynamicChildren:C,shapeFlag:j,patchFlag:k,dirs:V,cacheIndex:ut}=g;if(k===-2&&(N=!1),M!=null&&$c(M,null,L,g,!0),ut!=null&&(A.renderCache[ut]=void 0),j&256){A.ctx.deactivate(g);return}const lt=j&1&&V,_t=!jo(g);let Rt;if(_t&&(Rt=J&&J.onVnodeBeforeUnmount)&&gi(Rt,A,g),j&6)dt(g.component,L,F);else{if(j&128){g.suspense.unmount(L,F);return}lt&&Ms(g,null,A,"beforeUnmount"),j&64?g.type.remove(g,A,L,ht,F):C&&!C.hasOnce&&(q!==gn||k>0&&k&64)?Mt(C,A,L,!1,!0):(q===gn&&k&384||!N&&j&16)&&Mt(v,A,L),F&&Vt(g)}(_t&&(Rt=J&&J.onVnodeUnmounted)||lt)&&zn(()=>{Rt&&gi(Rt,A,g),lt&&Ms(g,null,A,"unmounted")},L)},Vt=g=>{const{type:A,el:L,anchor:F,transition:N}=g;if(A===gn){rt(L,F);return}if(A===sc){S(g);return}const q=()=>{s(L),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:J,delayLeave:M}=N,v=()=>J(L,q);M?M(g.el,q,v):v()}else q()},rt=(g,A)=>{let L;for(;g!==A;)L=d(g),s(g),g=L;s(A)},dt=(g,A,L)=>{const{bum:F,scope:N,job:q,subTree:J,um:M,m:v,a:C}=g;ju(v),ju(C),F&&Za(F),N.stop(),q&&(q.flags|=8,Ut(J,g,A,L)),M&&zn(M,A),zn(()=>{g.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Mt=(g,A,L,F=!1,N=!1,q=0)=>{for(let J=q;J<g.length;J++)Ut(g[J],A,L,F,N)},O=g=>{if(g.shapeFlag&6)return O(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const A=d(g.anchor||g.el),L=A&&A[Um];return L?d(L):A};let ct=!1;const ot=(g,A,L)=>{g==null?A._vnode&&Ut(A._vnode,null,null,!0):x(A._vnode||null,g,A,null,null,null,L),A._vnode=g,ct||(ct=!0,Hu(),rf(),ct=!1)},ht={p:x,um:Ut,m:yt,r:Vt,mt:et,mc:B,pc:$,pbc:y,n:O,o:n};let bt,it;return{render:ot,hydrate:bt,createApp:i0(ot,bt)}}function nc({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ws({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function d0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Sf(n,t,e=!1){const i=n.children,s=t.children;if(ue(i)&&ue(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=hs(s[o]),a.el=r.el),!e&&a.patchFlag!==-2&&Sf(r,a)),a.type===Ba&&(a.el=r.el)}}function f0(n){const t=n.slice(),e=[0];let i,s,o,r,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=e[e.length-1],n[s]<l){t[i]=s,e.push(i);continue}for(o=0,r=e.length-1;o<r;)a=o+r>>1,n[e[a]]<l?o=a+1:r=a;l<n[e[o]]&&(o>0&&(t[i]=e[o-1]),e[o]=i)}}for(o=e.length,r=e[o-1];o-- >0;)e[o]=r,r=t[r];return e}function Ef(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ef(t)}function ju(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const p0=Symbol.for("v-scx"),m0=()=>qi(p0);function Ke(n,t,e){return bf(n,t,e)}function bf(n,t,e=Fe){const{immediate:i,deep:s,flush:o,once:r}=e,a=un({},e);let c;if(za)if(o==="sync"){const d=m0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=Si,d.resume=Si,d.pause=Si,d}const l=_n;a.call=(d,f,_)=>bi(d,l,f,_);let h=!1;o==="post"?a.scheduler=d=>{zn(d,l&&l.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(d,f)=>{f?d():lu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,l&&(d.id=l.uid,d.i=l))};const u=Pm(n,t,a);return c&&c.push(u),u}function g0(n,t,e){const i=this.proxy,s=an(n)?n.includes(".")?Tf(i,n):()=>i[n]:n.bind(i,i);let o;ae(t)?o=t:(o=t.handler,e=t);const r=xr(this),a=bf(s,o.bind(i),e);return r(),a}function Tf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const _0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${qn(t)}Modifiers`]||n[`${Hs(t)}Modifiers`];function v0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Fe;let s=e;const o=t.startsWith("update:"),r=o&&_0(i,t.slice(7));r&&(r.trim&&(s=e.map(h=>an(h)?h.trim():h)),r.number&&(s=e.map(Yp)));let a,c=i[a=Ka(t)]||i[a=Ka(qn(t))];!c&&o&&(c=i[a=Ka(Hs(t))]),c&&bi(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,bi(l,n,6,s)}}function Af(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const o=n.emits;let r={},a=!1;if(!ae(n)){const c=l=>{const h=Af(l,t,!0);h&&(a=!0,un(r,h))};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!a?(Je(n)&&i.set(n,null),null):(ue(o)?o.forEach(c=>r[c]=null):un(r,o),Je(n)&&i.set(n,r),r)}function Oa(n,t){return!n||!Pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Pe(n,t[0].toLowerCase()+t.slice(1))||Pe(n,Hs(t))||Pe(n,t))}function ic(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:a,emit:c,render:l,renderCache:h,props:u,data:d,setupState:f,ctx:_,inheritAttrs:x}=n,p=_a(n);let m,T;try{if(e.shapeFlag&4){const S=s||i,z=S;m=yi(l.call(z,S,h,u,f,d,_)),T=a}else{const S=t;m=yi(S.length>1?S(u,{attrs:a,slots:r,emit:c}):S(u,null)),T=t.props?a:x0(a)}}catch(S){Zo.length=0,Na(S,n,1),m=Ze(cr)}let w=m;if(T&&x!==!1){const S=Object.keys(T),{shapeFlag:z}=w;S.length&&z&7&&(o&&S.some($l)&&(T=y0(T,o)),w=yo(w,T,!1,!0))}return e.dirs&&(w=yo(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(e.dirs):e.dirs),e.transition&&uu(w,e.transition),m=w,_a(p),m}const x0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Pa(e))&&((t||(t={}))[e]=n[e]);return t},y0=(n,t)=>{const e={};for(const i in n)(!$l(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function M0(n,t,e){const{props:i,children:s,component:o}=n,{props:r,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return i?Ku(i,r,l):!!r;if(c&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(r[d]!==i[d]&&!Oa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Ku(i,r,l):!0:!!r;return!1}function Ku(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(t[o]!==n[o]&&!Oa(e,o))return!0}return!1}function w0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Rf=n=>n.__isSuspense;function S0(n,t){t&&t.pendingBranch?ue(n)?t.effects.push(...n):t.effects.push(n):Lm(n)}const gn=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),sc=Symbol.for("v-stc"),Zo=[];let kn=null;function Ai(n=!1){Zo.push(kn=n?null:[])}function E0(){Zo.pop(),kn=Zo[Zo.length-1]||null}let lr=1;function Zu(n){lr+=n,n<0&&kn&&(kn.hasOnce=!0)}function b0(n){return n.dynamicChildren=lr>0?kn||uo:null,E0(),lr>0&&kn&&kn.push(n),n}function Ri(n,t,e,i,s,o){return b0(qt(n,t,e,i,s,o,!0))}function xa(n){return n?n.__v_isVNode===!0:!1}function No(n,t){return n.type===t.type&&n.key===t.key}const Pf=({key:n})=>n??null,ra=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?an(n)||vn(n)||ae(n)?{i:Hn,r:n,k:t,f:!!e}:n:null);function qt(n,t=null,e=null,i=0,s=null,o=n===gn?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Pf(t),ref:t&&ra(t),scopeId:cf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Hn};return a?(pu(c,e),o&128&&n.normalize(c)):e&&(c.shapeFlag|=an(e)?8:16),lr>0&&!r&&kn&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&kn.push(c),c}const Ze=T0;function T0(n,t=null,e=null,i=0,s=null,o=!1){if((!n||n===$m)&&(n=cr),xa(n)){const a=yo(n,t,!0);return e&&pu(a,e),lr>0&&!o&&kn&&(a.shapeFlag&6?kn[kn.indexOf(n)]=a:kn.push(a)),a.patchFlag=-2,a}if(O0(n)&&(n=n.__vccOpts),t){t=A0(t);let{class:a,style:c}=t;a&&!an(a)&&(t.class=Kn(a)),Je(c)&&(ru(c)&&!ue(c)&&(c=un({},c)),t.style=Zl(c))}const r=an(n)?1:Rf(n)?128:Nm(n)?64:Je(n)?4:ae(n)?2:0;return qt(n,t,e,i,s,r,o,!0)}function A0(n){return n?ru(n)||gf(n)?un({},n):n:null}function yo(n,t,e=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:a,transition:c}=n,l=t?R0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Pf(l),ref:t&&t.ref?e&&o?ue(o)?o.concat(ra(t)):[o,ra(t)]:ra(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==gn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&yo(n.ssContent),ssFallback:n.ssFallback&&yo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&uu(h,c.clone(h)),h}function vi(n=" ",t=0){return Ze(Ba,null,n,t)}function yi(n){return n==null||typeof n=="boolean"?Ze(cr):ue(n)?Ze(gn,null,n.slice()):xa(n)?hs(n):Ze(Ba,null,String(n))}function hs(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:yo(n)}function pu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(ue(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),pu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!gf(t)?t._ctx=Hn:s===3&&Hn&&(Hn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else ae(t)?(t={default:t,_ctx:Hn},e=32):(t=String(t),i&64?(e=16,t=[vi(t)]):e=8);n.children=t,n.shapeFlag|=e}function R0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Kn([t.class,i.class]));else if(s==="style")t.style=Zl([t.style,i.style]);else if(Pa(s)){const o=t[s],r=i[s];r&&o!==r&&!(ue(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=i[s])}return t}function gi(n,t,e,i=null){bi(n,t,7,[e,i])}const P0=ff();let C0=0;function I0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||P0,o={uid:C0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new tm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vf(i,s),emitsOptions:Af(i,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:i.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=v0.bind(null,o),n.ce&&n.ce(o),o}let _n=null,ya,Qc;{const n=Fd(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};ya=t("__VUE_INSTANCE_SETTERS__",e=>_n=e),Qc=t("__VUE_SSR_SETTERS__",e=>za=e)}const xr=n=>{const t=_n;return ya(n),n.scope.on(),()=>{n.scope.off(),ya(t)}},Ju=()=>{_n&&_n.scope.off(),ya(null)};function Cf(n){return n.vnode.shapeFlag&4}let za=!1;function L0(n,t=!1,e=!1){t&&Qc(t);const{props:i,children:s}=n.vnode,o=Cf(n);s0(n,i,o,t),c0(n,s,e);const r=o?D0(n,t):void 0;return t&&Qc(!1),r}function D0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Km);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?N0(n):null,o=xr(n);vs();const r=vr(i,n,0,[n.props,s]);if(xs(),o(),Ud(r)){if(jo(n)||lf(n),r.then(Ju,Ju),t)return r.then(a=>{Qu(n,a,t)}).catch(a=>{Na(a,n,0)});n.asyncDep=r}else Qu(n,r,t)}else If(n,t)}function Qu(n,t,e){ae(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Je(t)&&(n.setupState=ef(t)),If(n,e)}let th;function If(n,t,e){const i=n.type;if(!n.render){if(!t&&th&&!i.render){const s=i.template||du(n).template;if(s){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=un(un({isCustomElement:o,delimiters:a},r),c);i.render=th(s,l)}}n.render=i.render||Si}{const s=xr(n);vs();try{Zm(n)}finally{xs(),s()}}}const U0={get(n,t){return xn(n,"get",""),n[t]}};function N0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,U0),slots:n.slots,emit:n.emit,expose:t}}function Ga(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ef(Sm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ko)return Ko[e](n)},has(t,e){return e in t||e in Ko}})):n.proxy}function F0(n,t=!0){return ae(n)?n.displayName||n.name:n.name||t&&n.__name}function O0(n){return ae(n)&&"__vccOpts"in n}const ni=(n,t)=>Am(n,t,za);function Lf(n,t,e){const i=arguments.length;return i===2?Je(t)&&!ue(t)?xa(t)?Ze(n,null,[t]):Ze(n,t):Ze(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&xa(e)&&(e=[e]),Ze(n,t,e))}const B0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const eh=typeof window<"u"&&window.trustedTypes;if(eh)try{tl=eh.createPolicy("vue",{createHTML:n=>n})}catch{}const Df=tl?n=>tl.createHTML(n):n=>n,z0="http://www.w3.org/2000/svg",G0="http://www.w3.org/1998/Math/MathML",Hi=typeof document<"u"?document:null,nh=Hi&&Hi.createElement("template"),H0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Hi.createElementNS(z0,n):t==="mathml"?Hi.createElementNS(G0,n):e?Hi.createElement(n,{is:e}):Hi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Hi.createTextNode(n),createComment:n=>Hi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Hi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,o){const r=e?e.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===o||!(s=s.nextSibling)););else{nh.innerHTML=Df(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=nh.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},k0=Symbol("_vtc");function V0(n,t,e){const i=n[k0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Ma=Symbol("_vod"),Uf=Symbol("_vsh"),W0={beforeMount(n,{value:t},{transition:e}){n[Ma]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Fo(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Fo(n,!0),i.enter(n)):i.leave(n,()=>{Fo(n,!1)}):Fo(n,t))},beforeUnmount(n,{value:t}){Fo(n,t)}};function Fo(n,t){n.style.display=t?n[Ma]:"none",n[Uf]=!t}const X0=Symbol(""),q0=/(^|;)\s*display\s*:/;function Y0(n,t,e){const i=n.style,s=an(e);let o=!1;if(e&&!s){if(t)if(an(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&aa(i,a,"")}else for(const r in t)e[r]==null&&aa(i,r,"");for(const r in e)r==="display"&&(o=!0),aa(i,r,e[r])}else if(s){if(t!==e){const r=i[X0];r&&(e+=";"+r),i.cssText=e,o=q0.test(e)}}else t&&n.removeAttribute("style");Ma in n&&(n[Ma]=o?i.display:"",n[Uf]&&(i.display="none"))}const ih=/\s*!important$/;function aa(n,t,e){if(ue(e))e.forEach(i=>aa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=$0(n,t);ih.test(e)?n.setProperty(Hs(i),e.replace(ih,""),"important"):n[i]=e}}const sh=["Webkit","Moz","ms"],oc={};function $0(n,t){const e=oc[t];if(e)return e;let i=qn(t);if(i!=="filter"&&i in n)return oc[t]=i;i=La(i);for(let s=0;s<sh.length;s++){const o=sh[s]+i;if(o in n)return oc[t]=o}return t}const oh="http://www.w3.org/1999/xlink";function rh(n,t,e,i,s,o=Qp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(oh,t.slice(6,t.length)):n.setAttributeNS(oh,t,e):e==null||o&&!Od(e)?n.removeAttribute(t):n.setAttribute(t,o?"":Po(e)?String(e):e)}function ah(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Df(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(r!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const r=typeof n[t];r==="boolean"?e=Od(e):e==null&&r==="string"?(e="",o=!0):r==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(t)}function j0(n,t,e,i){n.addEventListener(t,e,i)}function K0(n,t,e,i){n.removeEventListener(t,e,i)}const ch=Symbol("_vei");function Z0(n,t,e,i,s=null){const o=n[ch]||(n[ch]={}),r=o[t];if(i&&r)r.value=i;else{const[a,c]=J0(t);if(i){const l=o[t]=eg(i,s);j0(n,a,l,c)}else r&&(K0(n,a,r,c),o[t]=void 0)}}const lh=/(?:Once|Passive|Capture)$/;function J0(n){let t;if(lh.test(n)){t={};let i;for(;i=n.match(lh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Hs(n.slice(2)),t]}let rc=0;const Q0=Promise.resolve(),tg=()=>rc||(Q0.then(()=>rc=0),rc=Date.now());function eg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;bi(ng(i,e.value),t,5,[i])};return e.value=n,e.attached=tg(),e}function ng(n,t){if(ue(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const uh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ig=(n,t,e,i,s,o)=>{const r=s==="svg";t==="class"?V0(n,i,r):t==="style"?Y0(n,e,i):Pa(t)?$l(t)||Z0(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):sg(n,t,i,r))?(ah(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&rh(n,t,i,r,o,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!an(i))?ah(n,qn(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),rh(n,t,i,r))};function sg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&uh(t)&&ae(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return uh(t)&&an(e)?!1:t in n}const og=un({patchProp:ig},H0);let hh;function rg(){return hh||(hh=u0(og))}const ag=(...n)=>{const t=rg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=lg(i);if(!s)return;const o=t._component;!ae(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=e(s,!1,cg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function cg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lg(n){return an(n)?document.querySelector(n):n}const ug={id:"app"},hg=Zn({__name:"App",setup(n){const t=Qt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return hi(()=>{window.addEventListener("mousemove",e)}),hu(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const o=ku("router-link"),r=ku("router-view");return Ai(),Ri("div",ug,[Dm(qt("nav",null,[Ze(o,{to:"/3d-bear-arts/leather"},{default:_i(()=>s[0]||(s[0]=[vi("Leather")])),_:1}),Ze(o,{to:"/3d-bear-arts/pop-art"},{default:_i(()=>s[1]||(s[1]=[vi("Pop MouseMove")])),_:1}),Ze(o,{to:"/3d-bear-arts/pop-art-bear-3"},{default:_i(()=>s[2]||(s[2]=[vi("Pop3")])),_:1}),Ze(o,{to:"/3d-bear-arts/machine"},{default:_i(()=>s[3]||(s[3]=[vi("machine")])),_:1}),Ze(o,{to:"/3d-bear-arts/water"},{default:_i(()=>s[4]||(s[4]=[vi("Water")])),_:1}),Ze(o,{to:"/3d-bear-arts/ghost-bear"},{default:_i(()=>s[5]||(s[5]=[vi("ghost")])),_:1}),Ze(o,{to:"/3d-bear-arts/white-ghost-bear"},{default:_i(()=>s[6]||(s[6]=[vi("white ghost")])),_:1}),Ze(o,{to:"/3d-bear-arts/"},{default:_i(()=>s[7]||(s[7]=[vi("santa")])),_:1}),Ze(o,{to:"/3d-bear-arts/coffee"},{default:_i(()=>s[8]||(s[8]=[vi("Coffee")])),_:1})],512),[[W0,t.value]]),Ze(r)])}}}),Pi=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},dg=Pi(hg,[["__scopeId","data-v-5ea36f6b"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const oo=typeof document<"u";function Nf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function fg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Nf(n.default)}const Le=Object.assign;function ac(n,t){const e={};for(const i in t){const s=t[i];e[i]=ci(s)?s.map(n):n(s)}return e}const Jo=()=>{},ci=Array.isArray,Ff=/#/g,pg=/&/g,mg=/\//g,gg=/=/g,_g=/\?/g,Of=/\+/g,vg=/%5B/g,xg=/%5D/g,Bf=/%5E/g,yg=/%60/g,zf=/%7B/g,Mg=/%7C/g,Gf=/%7D/g,wg=/%20/g;function mu(n){return encodeURI(""+n).replace(Mg,"|").replace(vg,"[").replace(xg,"]")}function Sg(n){return mu(n).replace(zf,"{").replace(Gf,"}").replace(Bf,"^")}function el(n){return mu(n).replace(Of,"%2B").replace(wg,"+").replace(Ff,"%23").replace(pg,"%26").replace(yg,"`").replace(zf,"{").replace(Gf,"}").replace(Bf,"^")}function Eg(n){return el(n).replace(gg,"%3D")}function bg(n){return mu(n).replace(Ff,"%23").replace(_g,"%3F")}function Tg(n){return n==null?"":bg(n).replace(mg,"%2F")}function ur(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Ag=/\/$/,Rg=n=>n.replace(Ag,"");function cc(n,t,e="/"){let i,s={},o="",r="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),s=n(o)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=Lg(i??t,e),{fullPath:i+(o&&"?")+o+r,path:i,query:s,hash:ur(r)}}function Pg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function dh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Cg(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&Mo(t.matched[i],e.matched[s])&&Hf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Mo(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Hf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Ig(n[e],t[e]))return!1;return!0}function Ig(n,t){return ci(n)?fh(n,t):ci(t)?fh(t,n):n===t}function fh(n,t){return ci(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Lg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=e.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return e.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const is={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var hr;(function(n){n.pop="pop",n.push="push"})(hr||(hr={}));var Qo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Qo||(Qo={}));function Dg(n){if(!n)if(oo){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Rg(n)}const Ug=/^[^#]+#/;function Ng(n,t){return n.replace(Ug,"#")+t}function Fg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Ha=()=>({left:window.scrollX,top:window.scrollY});function Og(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Fg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ph(n,t){return(history.state?history.state.position-t:-1)+n}const nl=new Map;function Bg(n,t){nl.set(n,t)}function zg(n){const t=nl.get(n);return nl.delete(n),t}let Gg=()=>location.protocol+"//"+location.host;function kf(n,t){const{pathname:e,search:i,hash:s}=t,o=n.indexOf("#");if(o>-1){let a=s.includes(n.slice(o))?n.slice(o).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),dh(c,"")}return dh(e,n)+i+s}function Hg(n,t,e,i){let s=[],o=[],r=null;const a=({state:d})=>{const f=kf(n,location),_=e.value,x=t.value;let p=0;if(d){if(e.value=f,t.value=d,r&&r===_){r=null;return}p=x?d.position-x.position:0}else i(f);s.forEach(m=>{m(e.value,_,{delta:p,type:hr.pop,direction:p?p>0?Qo.forward:Qo.back:Qo.unknown})})};function c(){r=e.value}function l(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return o.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(Le({},d.state,{scroll:Ha()}),"")}function u(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function mh(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Ha():null}}function kg(n){const{history:t,location:e}=window,i={value:kf(n,e)},s={value:t.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,l,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+c:Gg()+n+c;try{t[h?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),e[h?"replace":"assign"](d)}}function r(c,l){const h=Le({},t.state,mh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});o(c,h,!0),i.value=c}function a(c,l){const h=Le({},s.value,t.state,{forward:c,scroll:Ha()});o(h.current,h,!0);const u=Le({},mh(i.value,c,null),{position:h.position+1},l);o(c,u,!1),i.value=c}return{location:i,state:s,push:a,replace:r}}function Vg(n){n=Dg(n);const t=kg(n),e=Hg(n,t.state,t.location,t.replace);function i(o,r=!0){r||e.pauseListeners(),history.go(o)}const s=Le({location:"",base:n,go:i,createHref:Ng.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Wg(n){return typeof n=="string"||n&&typeof n=="object"}function Vf(n){return typeof n=="string"||typeof n=="symbol"}const Wf=Symbol("");var gh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(gh||(gh={}));function wo(n,t){return Le(new Error,{type:n,[Wf]:!0},t)}function Di(n,t){return n instanceof Error&&Wf in n&&(t==null||!!(n.type&t))}const _h="[^/]+?",Xg={sensitive:!1,strict:!1,start:!0,end:!0},qg=/[.+*?^${}()[\]/\\]/g;function Yg(n,t){const e=Le({},Xg,t),i=[];let s=e.start?"^":"";const o=[];for(const l of n){const h=l.length?[]:[90];e.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const d=l[u];let f=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(qg,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:x,optional:p,regexp:m}=d;o.push({name:_,repeatable:x,optional:p});const T=m||_h;if(T!==_h){f+=10;try{new RegExp(`(${T})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${T}): `+S.message)}}let w=x?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;u||(w=p&&l.length<2?`(?:/${w})`:"/"+w),p&&(w+="?"),s+=w,f+=20,p&&(f+=-8),x&&(f+=-20),T===".*"&&(f+=-50)}h.push(f)}i.push(h)}if(e.strict&&e.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const r=new RegExp(s,e.sensitive?"":"i");function a(l){const h=l.match(r),u={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",_=o[d-1];u[_.name]=f&&_.repeatable?f.split("/"):f}return u}function c(l){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:_,repeatable:x,optional:p}=f,m=_ in l?l[_]:"";if(ci(m)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const T=ci(m)?m.join("/"):m;if(!T)if(p)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=T}}return h||"/"}return{re:r,score:i,keys:o,parse:a,stringify:c}}function $g(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Xf(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const o=$g(i[e],s[e]);if(o)return o;e++}if(Math.abs(s.length-i.length)===1){if(vh(i))return 1;if(vh(s))return-1}return s.length-i.length}function vh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const jg={type:0,value:""},Kg=/[a-zA-Z0-9_]/;function Zg(n){if(!n)return[[]];if(n==="/")return[[jg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(f){throw new Error(`ERR (${e})/"${l}": ${f}`)}let e=0,i=e;const s=[];let o;function r(){o&&s.push(o),o=[]}let a=0,c,l="",h="";function u(){l&&(e===0?o.push({type:0,value:l}):e===1||e===2||e===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:c==="/"?(l&&u(),r()):c===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:c==="("?e=2:Kg.test(c)?d():(u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:e=3:h+=c;break;case 3:u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),r(),s}function Jg(n,t,e){const i=Yg(Zg(n.path),e),s=Le(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Qg(n,t){const e=[],i=new Map;t=wh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function o(u,d,f){const _=!f,x=yh(u);x.aliasOf=f&&f.record;const p=wh(t,u),m=[x];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of S)m.push(yh(Le({},x,{components:f?f.record.components:x.components,path:z,aliasOf:f?f.record:x})))}let T,w;for(const S of m){const{path:z}=S;if(d&&z[0]!=="/"){const I=d.record.path,P=I[I.length-1]==="/"?"":"/";S.path=d.record.path+(z&&P+z)}if(T=Jg(S,d,p),f?f.alias.push(T):(w=w||T,w!==T&&w.alias.push(T),_&&u.name&&!Mh(T)&&r(u.name)),qf(T)&&c(T),x.children){const I=x.children;for(let P=0;P<I.length;P++)o(I[P],T,f&&f.children[P])}f=f||T}return w?()=>{r(w)}:Jo}function r(u){if(Vf(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return e}function c(u){const d=n_(u,e);e.splice(d,0,u),u.record.name&&!Mh(u)&&i.set(u.record.name,u)}function l(u,d){let f,_={},x,p;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw wo(1,{location:u});p=f.record.name,_=Le(xh(d.params,f.keys.filter(w=>!w.optional).concat(f.parent?f.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),u.params&&xh(u.params,f.keys.map(w=>w.name))),x=f.stringify(_)}else if(u.path!=null)x=u.path,f=e.find(w=>w.re.test(x)),f&&(_=f.parse(x),p=f.record.name);else{if(f=d.name?i.get(d.name):e.find(w=>w.re.test(d.path)),!f)throw wo(1,{location:u,currentLocation:d});p=f.record.name,_=Le({},d.params,u.params),x=f.stringify(_)}const m=[];let T=f;for(;T;)m.unshift(T.record),T=T.parent;return{name:p,path:x,params:_,matched:m,meta:e_(m)}}n.forEach(u=>o(u));function h(){e.length=0,i.clear()}return{addRoute:o,resolve:l,removeRoute:r,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function xh(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function yh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:t_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function t_(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Mh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function e_(n){return n.reduce((t,e)=>Le(t,e.meta),{})}function wh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function n_(n,t){let e=0,i=t.length;for(;e!==i;){const o=e+i>>1;Xf(n,t[o])<0?i=o:e=o+1}const s=i_(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function i_(n){let t=n;for(;t=t.parent;)if(qf(t)&&Xf(n,t)===0)return t}function qf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function s_(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(Of," "),r=o.indexOf("="),a=ur(r<0?o:o.slice(0,r)),c=r<0?null:ur(o.slice(r+1));if(a in t){let l=t[a];ci(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Sh(n){let t="";for(let e in n){const i=n[e];if(e=Eg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(ci(i)?i.map(o=>o&&el(o)):[i&&el(i)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+e,o!=null&&(t+="="+o))})}return t}function o_(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=ci(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const r_=Symbol(""),Eh=Symbol(""),gu=Symbol(""),Yf=Symbol(""),il=Symbol("");function Oo(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function ds(n,t,e,i,s,o=r=>r()){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(wo(4,{from:e,to:t})):d instanceof Error?c(d):Wg(d)?c(wo(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),a())},h=o(()=>n.call(i&&i.instances[s],t,e,l));let u=Promise.resolve(h);n.length<3&&(u=u.then(l)),u.catch(d=>c(d))})}function lc(n,t,e,i,s=o=>o()){const o=[];for(const r of n)for(const a in r.components){let c=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(Nf(c)){const h=(c.__vccOpts||c)[t];h&&o.push(ds(h,e,i,r,a,s))}else{let l=c();o.push(()=>l.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const u=fg(h)?h.default:h;r.mods[a]=h,r.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&ds(f,e,i,r,a,s)()}))}}return o}function bh(n){const t=qi(gu),e=qi(Yf),i=ni(()=>{const c=fo(n.to);return t.resolve(c)}),s=ni(()=>{const{matched:c}=i.value,{length:l}=c,h=c[l-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(Mo.bind(null,h));if(d>-1)return d;const f=Th(c[l-2]);return l>1&&Th(h)===f&&u[u.length-1].path!==f?u.findIndex(Mo.bind(null,c[l-2])):d}),o=ni(()=>s.value>-1&&u_(e.params,i.value.params)),r=ni(()=>s.value>-1&&s.value===e.matched.length-1&&Hf(e.params,i.value.params));function a(c={}){return l_(c)?t[fo(n.replace)?"replace":"push"](fo(n.to)).catch(Jo):Promise.resolve()}return{route:i,href:ni(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const a_=Zn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bh,setup(n,{slots:t}){const e=Ua(bh(n)),{options:i}=qi(gu),s=ni(()=>({[Ah(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Ah(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const o=t.default&&t.default(e);return n.custom?o:Lf("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},o)}}}),c_=a_;function l_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function u_(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!ci(s)||s.length!==i.length||i.some((o,r)=>o!==s[r]))return!1}return!0}function Th(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ah=(n,t,e)=>n??t??e,h_=Zn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=qi(il),s=ni(()=>n.route||i.value),o=qi(Eh,0),r=ni(()=>{let l=fo(o);const{matched:h}=s.value;let u;for(;(u=h[l])&&!u.components;)l++;return l}),a=ni(()=>s.value.matched[r.value]);oa(Eh,ni(()=>r.value+1)),oa(r_,a),oa(il,s);const c=Qt();return Ke(()=>[c.value,a.value,n.name],([l,h,u],[d,f,_])=>{h&&(h.instances[u]=l,f&&f!==h&&l&&l===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),l&&h&&(!f||!Mo(h,f)||!d)&&(h.enterCallbacks[u]||[]).forEach(x=>x(l))},{flush:"post"}),()=>{const l=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return Rh(e.default,{Component:d,route:l});const f=u.props[h],_=f?f===!0?l.params:typeof f=="function"?f(l):f:null,p=Lf(d,Le({},_,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:c}));return Rh(e.default,{Component:p,route:l})||p}}});function Rh(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const d_=h_;function f_(n){const t=Qg(n.routes,n),e=n.parseQuery||s_,i=n.stringifyQuery||Sh,s=n.history,o=Oo(),r=Oo(),a=Oo(),c=ho(is);let l=is;oo&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ac.bind(null,O=>""+O),u=ac.bind(null,Tg),d=ac.bind(null,ur);function f(O,ct){let ot,ht;return Vf(O)?(ot=t.getRecordMatcher(O),ht=ct):ht=O,t.addRoute(ht,ot)}function _(O){const ct=t.getRecordMatcher(O);ct&&t.removeRoute(ct)}function x(){return t.getRoutes().map(O=>O.record)}function p(O){return!!t.getRecordMatcher(O)}function m(O,ct){if(ct=Le({},ct||c.value),typeof O=="string"){const A=cc(e,O,ct.path),L=t.resolve({path:A.path},ct),F=s.createHref(A.fullPath);return Le(A,L,{params:d(L.params),hash:ur(A.hash),redirectedFrom:void 0,href:F})}let ot;if(O.path!=null)ot=Le({},O,{path:cc(e,O.path,ct.path).path});else{const A=Le({},O.params);for(const L in A)A[L]==null&&delete A[L];ot=Le({},O,{params:u(A)}),ct.params=u(ct.params)}const ht=t.resolve(ot,ct),bt=O.hash||"";ht.params=h(d(ht.params));const it=Pg(i,Le({},O,{hash:Sg(bt),path:ht.path})),g=s.createHref(it);return Le({fullPath:it,hash:bt,query:i===Sh?o_(O.query):O.query||{}},ht,{redirectedFrom:void 0,href:g})}function T(O){return typeof O=="string"?cc(e,O,c.value.path):Le({},O)}function w(O,ct){if(l!==O)return wo(8,{from:ct,to:O})}function S(O){return P(O)}function z(O){return S(Le(T(O),{replace:!0}))}function I(O){const ct=O.matched[O.matched.length-1];if(ct&&ct.redirect){const{redirect:ot}=ct;let ht=typeof ot=="function"?ot(O):ot;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=T(ht):{path:ht},ht.params={}),Le({query:O.query,hash:O.hash,params:ht.path!=null?{}:O.params},ht)}}function P(O,ct){const ot=l=m(O),ht=c.value,bt=O.state,it=O.force,g=O.replace===!0,A=I(ot);if(A)return P(Le(T(A),{state:typeof A=="object"?Le({},bt,A.state):bt,force:it,replace:g}),ct||ot);const L=ot;L.redirectedFrom=ct;let F;return!it&&Cg(i,ht,ot)&&(F=wo(16,{to:L,from:ht}),yt(ht,ht,!0,!1)),(F?Promise.resolve(F):y(L,ht)).catch(N=>Di(N)?Di(N,2)?N:pt(N):$(N,L,ht)).then(N=>{if(N){if(Di(N,2))return P(Le({replace:g},T(N.to),{state:typeof N.to=="object"?Le({},bt,N.to.state):bt,force:it}),ct||L)}else N=U(L,ht,!0,g,bt);return E(L,ht,N),N})}function B(O,ct){const ot=w(O,ct);return ot?Promise.reject(ot):Promise.resolve()}function Q(O){const ct=rt.values().next().value;return ct&&typeof ct.runWithContext=="function"?ct.runWithContext(O):O()}function y(O,ct){let ot;const[ht,bt,it]=p_(O,ct);ot=lc(ht.reverse(),"beforeRouteLeave",O,ct);for(const A of ht)A.leaveGuards.forEach(L=>{ot.push(ds(L,O,ct))});const g=B.bind(null,O,ct);return ot.push(g),Mt(ot).then(()=>{ot=[];for(const A of o.list())ot.push(ds(A,O,ct));return ot.push(g),Mt(ot)}).then(()=>{ot=lc(bt,"beforeRouteUpdate",O,ct);for(const A of bt)A.updateGuards.forEach(L=>{ot.push(ds(L,O,ct))});return ot.push(g),Mt(ot)}).then(()=>{ot=[];for(const A of it)if(A.beforeEnter)if(ci(A.beforeEnter))for(const L of A.beforeEnter)ot.push(ds(L,O,ct));else ot.push(ds(A.beforeEnter,O,ct));return ot.push(g),Mt(ot)}).then(()=>(O.matched.forEach(A=>A.enterCallbacks={}),ot=lc(it,"beforeRouteEnter",O,ct,Q),ot.push(g),Mt(ot))).then(()=>{ot=[];for(const A of r.list())ot.push(ds(A,O,ct));return ot.push(g),Mt(ot)}).catch(A=>Di(A,8)?A:Promise.reject(A))}function E(O,ct,ot){a.list().forEach(ht=>Q(()=>ht(O,ct,ot)))}function U(O,ct,ot,ht,bt){const it=w(O,ct);if(it)return it;const g=ct===is,A=oo?history.state:{};ot&&(ht||g?s.replace(O.fullPath,Le({scroll:g&&A&&A.scroll},bt)):s.push(O.fullPath,bt)),c.value=O,yt(O,ct,ot,g),pt()}let X;function et(){X||(X=s.listen((O,ct,ot)=>{if(!dt.listening)return;const ht=m(O),bt=I(ht);if(bt){P(Le(bt,{replace:!0}),ht).catch(Jo);return}l=ht;const it=c.value;oo&&Bg(ph(it.fullPath,ot.delta),Ha()),y(ht,it).catch(g=>Di(g,12)?g:Di(g,2)?(P(g.to,ht).then(A=>{Di(A,20)&&!ot.delta&&ot.type===hr.pop&&s.go(-1,!1)}).catch(Jo),Promise.reject()):(ot.delta&&s.go(-ot.delta,!1),$(g,ht,it))).then(g=>{g=g||U(ht,it,!1),g&&(ot.delta&&!Di(g,8)?s.go(-ot.delta,!1):ot.type===hr.pop&&Di(g,20)&&s.go(-1,!1)),E(ht,it,g)}).catch(Jo)}))}let at=Oo(),Y=Oo(),nt;function $(O,ct,ot){pt(O);const ht=Y.list();return ht.length?ht.forEach(bt=>bt(O,ct,ot)):console.error(O),Promise.reject(O)}function gt(){return nt&&c.value!==is?Promise.resolve():new Promise((O,ct)=>{at.add([O,ct])})}function pt(O){return nt||(nt=!O,et(),at.list().forEach(([ct,ot])=>O?ot(O):ct()),at.reset()),O}function yt(O,ct,ot,ht){const{scrollBehavior:bt}=n;if(!oo||!bt)return Promise.resolve();const it=!ot&&zg(ph(O.fullPath,0))||(ht||!ot)&&history.state&&history.state.scroll||null;return sf().then(()=>bt(O,ct,it)).then(g=>g&&Og(g)).catch(g=>$(g,O,ct))}const Ut=O=>s.go(O);let Vt;const rt=new Set,dt={currentRoute:c,listening:!0,addRoute:f,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:p,getRoutes:x,resolve:m,options:n,push:S,replace:z,go:Ut,back:()=>Ut(-1),forward:()=>Ut(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:Y.add,isReady:gt,install(O){const ct=this;O.component("RouterLink",c_),O.component("RouterView",d_),O.config.globalProperties.$router=ct,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>fo(c)}),oo&&!Vt&&c.value===is&&(Vt=!0,S(s.location).catch(bt=>{}));const ot={};for(const bt in is)Object.defineProperty(ot,bt,{get:()=>c.value[bt],enumerable:!0});O.provide(gu,ct),O.provide(Yf,Jd(ot)),O.provide(il,c);const ht=O.unmount;rt.add(O),O.unmount=function(){rt.delete(O),rt.size<1&&(l=is,X&&X(),X=null,c.value=is,Vt=!1,nt=!1),ht()}}};function Mt(O){return O.reduce((ct,ot)=>ct.then(()=>Q(ot)),Promise.resolve())}return dt}function p_(n,t){const e=[],i=[],s=[],o=Math.max(t.matched.length,n.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(n.matched.find(l=>Mo(l,a))?i.push(a):e.push(a));const c=n.matched[r];c&&(t.matched.find(l=>Mo(l,c))||s.push(c))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _u="169",m_=0,Ph=1,g_=2,$f=1,__=2,Gi=3,_s=0,Dn=1,ve=2,ps=0,go=1,Ch=2,Ih=3,Lh=4,v_=5,Ls=100,x_=101,y_=102,M_=103,w_=104,S_=200,E_=201,b_=202,T_=203,sl=204,ol=205,A_=206,R_=207,P_=208,C_=209,I_=210,L_=211,D_=212,U_=213,N_=214,rl=0,al=1,cl=2,So=3,ll=4,ul=5,hl=6,dl=7,jf=0,F_=1,O_=2,ms=0,B_=1,z_=2,G_=3,H_=4,k_=5,V_=6,W_=7,Kf=300,Eo=301,bo=302,wa=303,fl=304,ka=306,Ve=1e3,Us=1001,pl=1002,Wn=1003,X_=1004,Cr=1005,ii=1006,uc=1007,Ns=1008,$i=1009,Zf=1010,Jf=1011,dr=1012,vu=1013,Bs=1014,Vi=1015,yr=1016,xu=1017,yu=1018,To=1020,Qf=35902,tp=1021,ep=1022,oi=1023,np=1024,ip=1025,_o=1026,Ao=1027,sp=1028,Mu=1029,op=1030,wu=1031,Su=1033,ca=33776,la=33777,ua=33778,ha=33779,ml=35840,gl=35841,_l=35842,vl=35843,xl=36196,yl=37492,Ml=37496,wl=37808,Sl=37809,El=37810,bl=37811,Tl=37812,Al=37813,Rl=37814,Pl=37815,Cl=37816,Il=37817,Ll=37818,Dl=37819,Ul=37820,Nl=37821,da=36492,Fl=36494,Ol=36495,rp=36283,Bl=36284,zl=36285,Gl=36286,q_=3200,Y_=3201,ap=0,$_=1,fs="",ei="srgb",ys="srgb-linear",Eu="display-p3",Va="display-p3-linear",Sa="linear",ze="srgb",Ea="rec709",ba="p3",Ws=7680,Dh=519,j_=512,K_=513,Z_=514,cp=515,J_=516,Q_=517,tv=518,ev=519,Uh=35044,Nh="300 es",Wi=2e3,Ta=2001;class Co{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fh=1234567;const tr=Math.PI/180,fr=180/Math.PI;function ks(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function rn(n,t,e){return Math.max(t,Math.min(e,n))}function bu(n,t){return(n%t+t)%t}function nv(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function iv(n,t,e){return n!==t?(e-n)/(t-n):0}function er(n,t,e){return(1-e)*n+e*t}function sv(n,t,e,i){return er(n,t,1-Math.exp(-e*i))}function ov(n,t=1){return t-Math.abs(bu(n,t*2)-t)}function rv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function av(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function cv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function lv(n,t){return n+Math.random()*(t-n)}function uv(n){return n*(.5-Math.random())}function hv(n){n!==void 0&&(Fh=n);let t=Fh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dv(n){return n*tr}function fv(n){return n*fr}function pv(n){return(n&n-1)===0&&n!==0}function mv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _v(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),d=r((t-i)/2),f=o((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*_,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*_,a*l);break;case"ZYZ":n.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ro(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fe={DEG2RAD:tr,RAD2DEG:fr,generateUUID:ks,clamp:rn,euclideanModulo:bu,mapLinear:nv,inverseLerp:iv,lerp:er,damp:sv,pingpong:ov,smoothstep:rv,smootherstep:av,randInt:cv,randFloat:lv,randFloatSpread:uv,seededRandom:hv,degToRad:dv,radToDeg:fv,isPowerOfTwo:pv,ceilPowerOfTwo:mv,floorPowerOfTwo:gv,setQuaternionFromProperEuler:_v,normalize:bn,denormalize:ro};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(t,e,i,s,o,r,a,c,l){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],x=s[0],p=s[3],m=s[6],T=s[1],w=s[4],S=s[7],z=s[2],I=s[5],P=s[8];return o[0]=r*x+a*T+c*z,o[3]=r*p+a*w+c*I,o[6]=r*m+a*S+c*P,o[1]=l*x+h*T+u*z,o[4]=l*p+h*w+u*I,o[7]=l*m+h*S+u*P,o[2]=d*x+f*T+_*z,o[5]=d*p+f*w+_*I,o[8]=d*m+f*S+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,f=l*o-r*c,_=e*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*r)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hc.makeScale(t,e)),this}rotate(t){return this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new de;function lp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vv(){const n=pr("canvas");return n.style.display="block",n}const Oh={};function fa(n){n in Oh||(Oh[n]=!0,console.warn(n))}function xv(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function yv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Mv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bh=new de().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zh=new de().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bo={[ys]:{transfer:Sa,primaries:Ea,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ei]:{transfer:ze,primaries:Ea,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Va]:{transfer:Sa,primaries:ba,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(zh),fromReference:n=>n.applyMatrix3(Bh)},[Eu]:{transfer:ze,primaries:ba,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(zh),fromReference:n=>n.applyMatrix3(Bh).convertLinearToSRGB()}},wv=new Set([ys,Va]),Ce={enabled:!0,_workingColorSpace:ys,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!wv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Bo[t].toReference,s=Bo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Bo[n].primaries},getTransfer:function(n){return n===fs?Sa:Bo[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Bo[t].luminanceCoefficients)}};function vo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xs;class Sv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xs===void 0&&(Xs=pr("canvas")),Xs.width=t.width,Xs.height=t.height;const i=Xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=vo(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vo(e[i]/255)*255):e[i]=vo(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ev=0;class up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(fc(s[r].image)):o.push(fc(s[r]))}else o=fc(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function fc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bv=0;class Cn extends Co{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,i=Us,s=Us,o=ii,r=Ns,a=oi,c=$i,l=Cn.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=ks(),this.name="",this.source=new up(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ve:t.x=t.x-Math.floor(t.x);break;case Us:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ve:t.y=t.y-Math.floor(t.y);break;case Us:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Kf;Cn.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,i=0,s=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,S=(f+1)/2,z=(m+1)/2,I=(h+d)/4,P=(u+x)/4,B=(_+p)/4;return w>S&&w>z?w<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(w),s=I/i,o=P/i):S>z?S<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),i=I/s,o=B/s):z<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(z),i=P/o,s=B/o),this.set(i,s,o,e),this}let T=Math.sqrt((p-_)*(p-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tv extends Co{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new up(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends Tv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class hp extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Av extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=o[r+0],f=o[r+1],_=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==_){let p=1-a;const m=c*d+l*f+h*_+u*x,T=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const z=Math.sqrt(w),I=Math.atan2(z,m*T);p=Math.sin(p*I)/z,a=Math.sin(a*I)/z}const S=a*T;if(c=c*p+d*S,l=l*p+f*S,h=h*p+_*S,u=u*p+x*S,p===1-a){const z=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=z,l*=z,h*=z,u*=z}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=o[r],d=o[r+1],f=o[r+2],_=o[r+3];return t[e]=a*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-a*f,t[e+2]=l*_+h*f+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(o/2),d=c(i/2),f=c(s/2),_=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,e=0,i=0){Z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+c*l+r*u-a*h,this.y=i+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pc.copy(this).projectOnVector(t),this.sub(pc)}reflect(t){return this.sub(pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new Z,Gh=new Mr;class wr{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Jn):Jn.fromBufferAttribute(o,r),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),Lr.subVectors(this.max,zo),qs.subVectors(t.a,zo),Ys.subVectors(t.b,zo),$s.subVectors(t.c,zo),ss.subVectors(Ys,qs),os.subVectors($s,Ys),Ss.subVectors(qs,$s);let e=[0,-ss.z,ss.y,0,-os.z,os.y,0,-Ss.z,Ss.y,ss.z,0,-ss.x,os.z,0,-os.x,Ss.z,0,-Ss.x,-ss.y,ss.x,0,-os.y,os.x,0,-Ss.y,Ss.x,0];return!mc(e,qs,Ys,$s,Lr)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,qs,Ys,$s,Lr))?!1:(Dr.crossVectors(ss,os),e=[Dr.x,Dr.y,Dr.z],mc(e,qs,Ys,$s,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ui=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Jn=new Z,Ir=new wr,qs=new Z,Ys=new Z,$s=new Z,ss=new Z,os=new Z,Ss=new Z,zo=new Z,Lr=new Z,Dr=new Z,Es=new Z;function mc(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Es.fromArray(n,o);const a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=t.dot(Es),l=e.dot(Es),h=i.dot(Es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Rv=new wr,Go=new Z,gc=new Z;class Wa{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Rv.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);const e=Go.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Go,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(gc)),this.expandByPoint(Go.copy(t.center).sub(gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new Z,_c=new Z,Ur=new Z,rs=new Z,vc=new Z,Nr=new Z,xc=new Z;class dp{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_c.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),rs.copy(this.origin).sub(_c);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ur),a=rs.dot(this.direction),c=-rs.dot(Ur),l=rs.lengthSq(),h=Math.abs(1-r*r);let u,d,f,_;if(h>0)if(u=r*c-a,d=r*a-c,_=o*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_c).addScaledVector(Ur,d),f}intersectSphere(t,e){Ni.subVectors(t.center,this.origin);const i=Ni.dot(this.direction),s=Ni.dot(Ni)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,i,s,o){vc.subVectors(e,t),Nr.subVectors(i,t),xc.crossVectors(vc,Nr);let r=this.direction.dot(xc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;rs.subVectors(this.origin,t);const c=a*this.direction.dot(Nr.crossVectors(rs,Nr));if(c<0)return null;const l=a*this.direction.dot(vc.cross(rs));if(l<0||c+l>r)return null;const h=-a*rs.dot(xc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(t,e,i,s,o,r,a,c,l,h,u,d,f,_,x,p){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,h,u,d,f,_,x,p)}set(t,e,i,s,o,r,a,c,l,h,u,d,f,_,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/js.setFromMatrixColumn(t,0).length(),o=1/js.setFromMatrixColumn(t,1).length(),r=1/js.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,_=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=_+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,_=l*h,x=l*u;e[0]=d+x*a,e[4]=_*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-_,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,_=l*h,x=l*u;e[0]=d-x*a,e[4]=-r*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,_=a*h,x=a*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,_=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=_*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-x*u}else if(t.order==="XZY"){const d=r*c,f=r*l,_=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=r*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pv,t,Cv)}lookAt(t,e,i){const s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),as.crossVectors(i,On),as.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),as.crossVectors(i,On)),as.normalize(),Fr.crossVectors(On,as),s[0]=as.x,s[4]=Fr.x,s[8]=On.x,s[1]=as.y,s[5]=Fr.y,s[9]=On.y,s[2]=as.z,s[6]=Fr.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],x=i[6],p=i[10],m=i[14],T=i[3],w=i[7],S=i[11],z=i[15],I=s[0],P=s[4],B=s[8],Q=s[12],y=s[1],E=s[5],U=s[9],X=s[13],et=s[2],at=s[6],Y=s[10],nt=s[14],$=s[3],gt=s[7],pt=s[11],yt=s[15];return o[0]=r*I+a*y+c*et+l*$,o[4]=r*P+a*E+c*at+l*gt,o[8]=r*B+a*U+c*Y+l*pt,o[12]=r*Q+a*X+c*nt+l*yt,o[1]=h*I+u*y+d*et+f*$,o[5]=h*P+u*E+d*at+f*gt,o[9]=h*B+u*U+d*Y+f*pt,o[13]=h*Q+u*X+d*nt+f*yt,o[2]=_*I+x*y+p*et+m*$,o[6]=_*P+x*E+p*at+m*gt,o[10]=_*B+x*U+p*Y+m*pt,o[14]=_*Q+x*X+p*nt+m*yt,o[3]=T*I+w*y+S*et+z*$,o[7]=T*P+w*E+S*at+z*gt,o[11]=T*B+w*U+S*Y+z*pt,o[15]=T*Q+w*X+S*nt+z*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],x=t[7],p=t[11],m=t[15];return _*(+o*c*u-s*l*u-o*a*d+i*l*d+s*a*f-i*c*f)+x*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*h-o*c*h)+p*(+e*l*u-e*a*f-o*r*u+i*r*f+o*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*d+s*r*u-i*r*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],x=t[13],p=t[14],m=t[15],T=u*p*l-x*d*l+x*c*f-a*p*f-u*c*m+a*d*m,w=_*d*l-h*p*l-_*c*f+r*p*f+h*c*m-r*d*m,S=h*x*l-_*u*l+_*a*f-r*x*f-h*a*m+r*u*m,z=_*u*c-h*x*c-_*a*d+r*x*d+h*a*p-r*u*p,I=e*T+i*w+s*S+o*z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=T*P,t[1]=(x*d*o-u*p*o-x*s*f+i*p*f+u*s*m-i*d*m)*P,t[2]=(a*p*o-x*c*o+x*s*l-i*p*l-a*s*m+i*c*m)*P,t[3]=(u*c*o-a*d*o-u*s*l+i*d*l+a*s*f-i*c*f)*P,t[4]=w*P,t[5]=(h*p*o-_*d*o+_*s*f-e*p*f-h*s*m+e*d*m)*P,t[6]=(_*c*o-r*p*o-_*s*l+e*p*l+r*s*m-e*c*m)*P,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*f+e*c*f)*P,t[8]=S*P,t[9]=(_*u*o-h*x*o-_*i*f+e*x*f+h*i*m-e*u*m)*P,t[10]=(r*x*o-_*a*o+_*i*l-e*x*l-r*i*m+e*a*m)*P,t[11]=(h*a*o-r*u*o-h*i*l+e*u*l+r*i*f-e*a*f)*P,t[12]=z*P,t[13]=(h*x*s-_*u*s+_*i*d-e*x*d-h*i*p+e*u*p)*P,t[14]=(_*a*s-r*x*s-_*i*c+e*x*c+r*i*p-e*a*p)*P,t[15]=(r*u*s-h*a*s+h*i*c-e*u*c-r*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,f=o*h,_=o*u,x=r*h,p=r*u,m=a*u,T=c*l,w=c*h,S=c*u,z=i.x,I=i.y,P=i.z;return s[0]=(1-(x+m))*z,s[1]=(f+S)*z,s[2]=(_-w)*z,s[3]=0,s[4]=(f-S)*I,s[5]=(1-(d+m))*I,s[6]=(p+T)*I,s[7]=0,s[8]=(_+w)*P,s[9]=(p-T)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=js.set(s[0],s[1],s[2]).length();const r=js.set(s[4],s[5],s[6]).length(),a=js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Qn.copy(this);const l=1/o,h=1/r,u=1/a;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,e.setFromRotationMatrix(Qn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Wi){const c=this.elements,l=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,_;if(a===Wi)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Ta)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Wi){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*l,f=(i+s)*h;let _,x;if(a===Wi)_=(r+o)*u,x=-2*u;else if(a===Ta)_=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const js=new Z,Qn=new Ge,Pv=new Z(0,0,0),Cv=new Z(1,1,1),as=new Z,Fr=new Z,On=new Z,Hh=new Ge,kh=new Mr;class Ti{constructor(t=0,e=0,i=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class fp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Iv=0;const Vh=new Z,Ks=new Mr,Fi=new Ge,Or=new Z,Ho=new Z,Lv=new Z,Dv=new Mr,Wh=new Z(1,0,0),Xh=new Z(0,1,0),qh=new Z(0,0,1),Yh={type:"added"},Uv={type:"removed"},Zs={type:"childadded",child:null},yc={type:"childremoved",child:null};class ln extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new Z,e=new Ti,i=new Mr,s=new Z(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new de}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.premultiply(Ks),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(Xh,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(Xh,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Or.copy(t):Or.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Ho,Or,this.up):Fi.lookAt(Or,Ho,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yh),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uv),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yh),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,Lv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,Dv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),_=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ln.DEFAULT_UP=new Z(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new Z,Oi=new Z,Mc=new Z,Bi=new Z,Js=new Z,Qs=new Z,$h=new Z,wc=new Z,Sc=new Z,Ec=new Z,bc=new Ue,Tc=new Ue,Ac=new Ue;class si{constructor(t=new Z,e=new Z,i=new Z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ti.subVectors(t,e),s.cross(ti);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){ti.subVectors(s,e),Oi.subVectors(i,e),Mc.subVectors(t,e);const r=ti.dot(ti),a=ti.dot(Oi),c=ti.dot(Mc),l=Oi.dot(Oi),h=Oi.dot(Mc),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,_=(r*h-a*c)*d;return o.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Bi.x),c.addScaledVector(r,Bi.y),c.addScaledVector(a,Bi.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return bc.setScalar(0),Tc.setScalar(0),Ac.setScalar(0),bc.fromBufferAttribute(t,e),Tc.fromBufferAttribute(t,i),Ac.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(bc,o.x),r.addScaledVector(Tc,o.y),r.addScaledVector(Ac,o.z),r}static isFrontFacing(t,e,i,s){return ti.subVectors(i,e),Oi.subVectors(t,e),ti.cross(Oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ti.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return si.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return si.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;Js.subVectors(s,i),Qs.subVectors(o,i),wc.subVectors(t,i);const c=Js.dot(wc),l=Qs.dot(wc);if(c<=0&&l<=0)return e.copy(i);Sc.subVectors(t,s);const h=Js.dot(Sc),u=Qs.dot(Sc);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(Js,r);Ec.subVectors(t,o);const f=Js.dot(Ec),_=Qs.dot(Ec);if(_>=0&&f<=_)return e.copy(o);const x=f*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Qs,a);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return $h.subVectors(o,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector($h,a);const m=1/(p+x+d);return r=x*m,a=d*m,e.copy(i).addScaledVector(Js,r).addScaledVector(Qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Rc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ye{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ce.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ce.workingColorSpace){if(t=bu(t,1),e=rn(e,0,1),i=rn(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Rc(r,o,t+1/3),this.g=Rc(r,o,t),this.b=Rc(r,o,t-1/3)}return Ce.toWorkingColorSpace(this,s),this}setStyle(t,e=ei){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ei){const i=pp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vo(t.r),this.g=vo(t.g),this.b=vo(t.b),this}copyLinearToSRGB(t){return this.r=dc(t.r),this.g=dc(t.g),this.b=dc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Ce.fromWorkingColorSpace(mn.copy(this),t),Math.round(rn(mn.r*255,0,255))*65536+Math.round(rn(mn.g*255,0,255))*256+Math.round(rn(mn.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(mn.copy(this),e);const i=mn.r,s=mn.g,o=mn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case i:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-i)/u+2;break;case o:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=ei){Ce.fromWorkingColorSpace(mn.copy(this),t);const e=mn.r,i=mn.g,s=mn.b;return t!==ei?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(Br);const i=er(cs.h,Br.h,e),s=er(cs.s,Br.s,e),o=er(cs.l,Br.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new ye;ye.NAMES=pp;let Nv=0;class Io extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=go,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=ol,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==ol&&(i.blendDst=this.blendDst),this.blendEquation!==Ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ji extends Io{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qe=new Z,zr=new kt;class Ei{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Uh,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ro(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=bn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ro(e,this.array)),e}setX(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ro(e,this.array)),e}setY(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ro(e,this.array)),e}setZ(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ro(e,this.array)),e}setW(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),i=bn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),i=bn(i,this.array),s=bn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),i=bn(i,this.array),s=bn(s,this.array),o=bn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uh&&(t.usage=this.usage),t}}class mp extends Ei{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class gp extends Ei{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class We extends Ei{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Fv=0;const Vn=new Ge,Pc=new ln,to=new Z,Bn=new wr,ko=new wr,on=new Z;class yn extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lp(t)?gp:mp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new de().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return Pc.lookAt(t),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new We(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Bn.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Bn.min,ko.min),Bn.expandByPoint(on),on.addVectors(Bn.max,ko.max),Bn.expandByPoint(on)):(Bn.expandByPoint(ko.min),Bn.expandByPoint(ko.max))}Bn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)on.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(on));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(to.fromBufferAttribute(t,l),on.add(to)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<i.count;B++)a[B]=new Z,c[B]=new Z;const l=new Z,h=new Z,u=new Z,d=new kt,f=new kt,_=new kt,x=new Z,p=new Z;function m(B,Q,y){l.fromBufferAttribute(i,B),h.fromBufferAttribute(i,Q),u.fromBufferAttribute(i,y),d.fromBufferAttribute(o,B),f.fromBufferAttribute(o,Q),_.fromBufferAttribute(o,y),h.sub(l),u.sub(l),f.sub(d),_.sub(d);const E=1/(f.x*_.y-_.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(E),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(E),a[B].add(x),a[Q].add(x),a[y].add(x),c[B].add(p),c[Q].add(p),c[y].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let B=0,Q=T.length;B<Q;++B){const y=T[B],E=y.start,U=y.count;for(let X=E,et=E+U;X<et;X+=3)m(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const w=new Z,S=new Z,z=new Z,I=new Z;function P(B){z.fromBufferAttribute(s,B),I.copy(z);const Q=a[B];w.copy(Q),w.sub(z.multiplyScalar(z.dot(Q))).normalize(),S.crossVectors(I,Q);const E=S.dot(c[B])<0?-1:1;r.setXYZW(B,w.x,w.y,w.z,E)}for(let B=0,Q=T.length;B<Q;++B){const y=T[B],E=y.start,U=y.count;for(let X=E,et=E+U;X<et;X+=3)P(t.getX(X+0)),P(t.getX(X+1)),P(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ei(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new Z,o=new Z,r=new Z,a=new Z,c=new Z,l=new Z,h=new Z,u=new Z;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[_++]=l[f++]}return new Ei(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new Ge,bs=new dp,Gr=new Wa,Kh=new Z,Hr=new Z,kr=new Z,Vr=new Z,Cc=new Z,Wr=new Z,Zh=new Z,Xr=new Z;class b extends ln{constructor(t=new yn,e=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Wr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Cc.fromBufferAttribute(u,t),r?Wr.addScaledVector(Cc,h):Wr.addScaledVector(Cc.sub(e),h))}e.add(Wr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(o),bs.copy(t.ray).recast(t.near),!(Gr.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Gr,Kh)===null||bs.origin.distanceToSquared(Kh)>(t.far-t.near)**2))&&(jh.copy(o).invert(),bs.copy(t.ray).applyMatrix4(jh),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bs)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=r[p.materialIndex],T=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=T,z=w;S<z;S+=3){const I=a.getX(S),P=a.getX(S+1),B=a.getX(S+2);s=qr(this,m,t,i,l,h,u,I,P,B),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const T=a.getX(p),w=a.getX(p+1),S=a.getX(p+2);s=qr(this,r,t,i,l,h,u,T,w,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=r[p.materialIndex],T=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=T,z=w;S<z;S+=3){const I=S,P=S+1,B=S+2;s=qr(this,m,t,i,l,h,u,I,P,B),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const T=p,w=p+1,S=p+2;s=qr(this,r,t,i,l,h,u,T,w,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ov(n,t,e,i,s,o,r,a){let c;if(t.side===Dn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===_s,a),c===null)return null;Xr.copy(a),Xr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Xr);return l<e.near||l>e.far?null:{distance:l,point:Xr.clone(),object:n}}function qr(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,Hr),n.getVertexPosition(c,kr),n.getVertexPosition(l,Vr);const h=Ov(n,t,e,i,Hr,kr,Vr,Zh);if(h){const u=new Z;si.getBarycoord(Zh,Hr,kr,Vr,u),s&&(h.uv=si.getInterpolatedAttribute(s,a,c,l,u,new kt)),o&&(h.uv1=si.getInterpolatedAttribute(o,a,c,l,u,new kt)),r&&(h.normal=si.getInterpolatedAttribute(r,a,c,l,u,new Z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new Z,materialIndex:0};si.getNormal(Hr,kr,Vr,d.normal),h.face=d,h.barycoord=u}return h}class Pn extends yn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,r,o,0),_("z","y","x",1,-1,i,e,-t,r,o,1),_("x","z","y",1,1,t,i,e,s,r,2),_("x","z","y",1,-1,t,i,-e,s,r,3),_("x","y","z",1,-1,t,e,i,s,o,4),_("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2));function _(x,p,m,T,w,S,z,I,P,B,Q){const y=S/P,E=z/B,U=S/2,X=z/2,et=I/2,at=P+1,Y=B+1;let nt=0,$=0;const gt=new Z;for(let pt=0;pt<Y;pt++){const yt=pt*E-X;for(let Ut=0;Ut<at;Ut++){const Vt=Ut*y-U;gt[x]=Vt*T,gt[p]=yt*w,gt[m]=et,l.push(gt.x,gt.y,gt.z),gt[x]=0,gt[p]=0,gt[m]=I>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(Ut/P),u.push(1-pt/B),nt+=1}}for(let pt=0;pt<B;pt++)for(let yt=0;yt<P;yt++){const Ut=d+yt+at*pt,Vt=d+yt+at*(pt+1),rt=d+(yt+1)+at*(pt+1),dt=d+(yt+1)+at*pt;c.push(Ut,Vt,dt),c.push(Vt,rt,dt),$+=6}a.addGroup(f,$,Q),f+=$,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ro(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Tn(n){const t={};for(let e=0;e<n.length;e++){const i=Ro(n[e]);for(const s in i)t[s]=i[s]}return t}function Bv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function _p(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const zv={clone:Ro,merge:Tn};var Gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Io{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gv,this.fragmentShader=Hv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ro(t.uniforms),this.uniformsGroups=Bv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class vp extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new Z,Jh=new kt,Qh=new kt;class ke extends vp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,Qh),e.subVectors(Qh,Jh)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const eo=-90,no=1;class kv extends ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(eo,no,t,e);s.layers=this.layers,this.add(s);const o=new ke(eo,no,t,e);o.layers=this.layers,this.add(o);const r=new ke(eo,no,t,e);r.layers=this.layers,this.add(r);const a=new ke(eo,no,t,e);a.layers=this.layers,this.add(a);const c=new ke(eo,no,t,e);c.layers=this.layers,this.add(c);const l=new ke(eo,no,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Tu extends Cn{constructor(t,e,i,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Eo,super(t,e,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vv extends zs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Tu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pn(5,5,5),o=new Yn({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:ps});o.uniforms.tEquirect.value=e;const r=new b(s,o),a=e.minFilter;return e.minFilter===Ns&&(e.minFilter=ii),new kv(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const Ic=new Z,Wv=new Z,Xv=new de;class Cs{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ic.subVectors(i,e).cross(Wv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ic),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Xv.getNormalMatrix(t),s=this.coplanarPoint(Ic).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new Wa,Yr=new Z;class Au{constructor(t=new Cs,e=new Cs,i=new Cs,s=new Cs,o=new Cs,r=new Cs){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],x=s[10],p=s[11],m=s[12],T=s[13],w=s[14],S=s[15];if(i[0].setComponents(c-o,d-l,p-f,S-m).normalize(),i[1].setComponents(c+o,d+l,p+f,S+m).normalize(),i[2].setComponents(c+r,d+h,p+_,S+T).normalize(),i[3].setComponents(c-r,d-h,p-_,S-T).normalize(),i[4].setComponents(c-a,d-u,p-x,S-w).normalize(),e===Wi)i[5].setComponents(c+a,d+u,p+x,S+w).normalize();else if(e===Ta)i[5].setComponents(a,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xp(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function qv(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],x=u[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const x=u[f];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Xa extends yn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],_=[],x=[],p=[];for(let m=0;m<h;m++){const T=m*d-r;for(let w=0;w<l;w++){const S=w*u-o;_.push(S,-T,0),x.push(0,0,1),p.push(w/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<a;T++){const w=T+l*m,S=T+l*(m+1),z=T+1+l*(m+1),I=T+1+l*m;f.push(w,S,I),f.push(S,z,I)}this.setIndex(f),this.setAttribute("position",new We(_,3)),this.setAttribute("normal",new We(x,3)),this.setAttribute("uv",new We(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$v=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ex=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ox=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ax=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ex=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ny=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,my=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,My=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,by=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,By=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_M=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:Yv,alphahash_pars_fragment:$v,alphamap_fragment:jv,alphamap_pars_fragment:Kv,alphatest_fragment:Zv,alphatest_pars_fragment:Jv,aomap_fragment:Qv,aomap_pars_fragment:tx,batching_pars_vertex:ex,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:sx,bsdfs:ox,iridescence_fragment:rx,bumpmap_pars_fragment:ax,clipping_planes_fragment:cx,clipping_planes_pars_fragment:lx,clipping_planes_pars_vertex:ux,clipping_planes_vertex:hx,color_fragment:dx,color_pars_fragment:fx,color_pars_vertex:px,color_vertex:mx,common:gx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:vx,displacementmap_pars_vertex:xx,displacementmap_vertex:yx,emissivemap_fragment:Mx,emissivemap_pars_fragment:wx,colorspace_fragment:Sx,colorspace_pars_fragment:Ex,envmap_fragment:bx,envmap_common_pars_fragment:Tx,envmap_pars_fragment:Ax,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:zx,envmap_vertex:Px,fog_vertex:Cx,fog_pars_vertex:Ix,fog_fragment:Lx,fog_pars_fragment:Dx,gradientmap_pars_fragment:Ux,lightmap_pars_fragment:Nx,lights_lambert_fragment:Fx,lights_lambert_pars_fragment:Ox,lights_pars_begin:Bx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Hx,lights_phong_fragment:kx,lights_phong_pars_fragment:Vx,lights_physical_fragment:Wx,lights_physical_pars_fragment:Xx,lights_fragment_begin:qx,lights_fragment_maps:Yx,lights_fragment_end:$x,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:Jx,map_fragment:Qx,map_pars_fragment:ty,map_particle_fragment:ey,map_particle_pars_fragment:ny,metalnessmap_fragment:iy,metalnessmap_pars_fragment:sy,morphinstance_vertex:oy,morphcolor_vertex:ry,morphnormal_vertex:ay,morphtarget_pars_vertex:cy,morphtarget_vertex:ly,normal_fragment_begin:uy,normal_fragment_maps:hy,normal_pars_fragment:dy,normal_pars_vertex:fy,normal_vertex:py,normalmap_pars_fragment:my,clearcoat_normal_fragment_begin:gy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:vy,iridescence_pars_fragment:xy,opaque_fragment:yy,packing:My,premultiplied_alpha_fragment:wy,project_vertex:Sy,dithering_fragment:Ey,dithering_pars_fragment:by,roughnessmap_fragment:Ty,roughnessmap_pars_fragment:Ay,shadowmap_pars_fragment:Ry,shadowmap_pars_vertex:Py,shadowmap_vertex:Cy,shadowmask_pars_fragment:Iy,skinbase_vertex:Ly,skinning_pars_vertex:Dy,skinning_vertex:Uy,skinnormal_vertex:Ny,specularmap_fragment:Fy,specularmap_pars_fragment:Oy,tonemapping_fragment:By,tonemapping_pars_fragment:zy,transmission_fragment:Gy,transmission_pars_fragment:Hy,uv_pars_fragment:ky,uv_pars_vertex:Vy,uv_vertex:Wy,worldpos_vertex:Xy,background_vert:qy,background_frag:Yy,backgroundCube_vert:$y,backgroundCube_frag:jy,cube_vert:Ky,cube_frag:Zy,depth_vert:Jy,depth_frag:Qy,distanceRGBA_vert:tM,distanceRGBA_frag:eM,equirect_vert:nM,equirect_frag:iM,linedashed_vert:sM,linedashed_frag:oM,meshbasic_vert:rM,meshbasic_frag:aM,meshlambert_vert:cM,meshlambert_frag:lM,meshmatcap_vert:uM,meshmatcap_frag:hM,meshnormal_vert:dM,meshnormal_frag:fM,meshphong_vert:pM,meshphong_frag:mM,meshphysical_vert:gM,meshphysical_frag:_M,meshtoon_vert:vM,meshtoon_frag:xM,points_vert:yM,points_frag:MM,shadow_vert:wM,shadow_frag:SM,sprite_vert:EM,sprite_frag:bM},Ht={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Mi={basic:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Tn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Tn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Tn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Tn([Ht.points,Ht.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Tn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Tn([Ht.common,Ht.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Tn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Tn([Ht.sprite,Ht.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Tn([Ht.common,Ht.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Tn([Ht.lights,Ht.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Mi.physical={uniforms:Tn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const $r={r:0,b:0,g:0},As=new Ti,TM=new Ge;function AM(n,t,e,i,s,o,r){const a=new ye(0);let c=o===!0?0:1,l,h,u=null,d=0,f=null;function _(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?e:t).get(w)),w}function x(T){let w=!1;const S=_(T);S===null?m(a,c):S&&S.isColor&&(m(S,1),w=!0);const z=n.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,r):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,w){const S=_(w);S&&(S.isCubeTexture||S.mapping===ka)?(h===void 0&&(h=new b(new Pn(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ro(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),As.copy(w.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(TM.makeRotationFromEuler(As)),h.material.toneMapped=Ce.getTransfer(S.colorSpace)!==ze,(u!==S||d!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new b(new Xa(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ro(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ce.getTransfer(S.colorSpace)!==ze,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,w){T.getRGB($r,_p(n)),i.buffers.color.setClear($r.r,$r.g,$r.b,w,r)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),c=w,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,m(a,c)},render:x,addToRenderList:p}}function RM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(y,E,U,X,et){let at=!1;const Y=u(X,U,E);o!==Y&&(o=Y,l(o.object)),at=f(y,X,U,et),at&&_(y,X,U,et),et!==null&&t.update(et,n.ELEMENT_ARRAY_BUFFER),(at||r)&&(r=!1,S(y,E,U,X),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,E,U){const X=U.wireframe===!0;let et=i[y.id];et===void 0&&(et={},i[y.id]=et);let at=et[E.id];at===void 0&&(at={},et[E.id]=at);let Y=at[X];return Y===void 0&&(Y=d(c()),at[X]=Y),Y}function d(y){const E=[],U=[],X=[];for(let et=0;et<e;et++)E[et]=0,U[et]=0,X[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:X,object:y,attributes:{},index:null}}function f(y,E,U,X){const et=o.attributes,at=E.attributes;let Y=0;const nt=U.getAttributes();for(const $ in nt)if(nt[$].location>=0){const pt=et[$];let yt=at[$];if(yt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),pt===void 0||pt.attribute!==yt||yt&&pt.data!==yt.data)return!0;Y++}return o.attributesNum!==Y||o.index!==X}function _(y,E,U,X){const et={},at=E.attributes;let Y=0;const nt=U.getAttributes();for(const $ in nt)if(nt[$].location>=0){let pt=at[$];pt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));const yt={};yt.attribute=pt,pt&&pt.data&&(yt.data=pt.data),et[$]=yt,Y++}o.attributes=et,o.attributesNum=Y,o.index=X}function x(){const y=o.newAttributes;for(let E=0,U=y.length;E<U;E++)y[E]=0}function p(y){m(y,0)}function m(y,E){const U=o.newAttributes,X=o.enabledAttributes,et=o.attributeDivisors;U[y]=1,X[y]===0&&(n.enableVertexAttribArray(y),X[y]=1),et[y]!==E&&(n.vertexAttribDivisor(y,E),et[y]=E)}function T(){const y=o.newAttributes,E=o.enabledAttributes;for(let U=0,X=E.length;U<X;U++)E[U]!==y[U]&&(n.disableVertexAttribArray(U),E[U]=0)}function w(y,E,U,X,et,at,Y){Y===!0?n.vertexAttribIPointer(y,E,U,et,at):n.vertexAttribPointer(y,E,U,X,et,at)}function S(y,E,U,X){x();const et=X.attributes,at=U.getAttributes(),Y=E.defaultAttributeValues;for(const nt in at){const $=at[nt];if($.location>=0){let gt=et[nt];if(gt===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),gt!==void 0){const pt=gt.normalized,yt=gt.itemSize,Ut=t.get(gt);if(Ut===void 0)continue;const Vt=Ut.buffer,rt=Ut.type,dt=Ut.bytesPerElement,Mt=rt===n.INT||rt===n.UNSIGNED_INT||gt.gpuType===vu;if(gt.isInterleavedBufferAttribute){const O=gt.data,ct=O.stride,ot=gt.offset;if(O.isInstancedInterleavedBuffer){for(let ht=0;ht<$.locationSize;ht++)m($.location+ht,O.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ht=0;ht<$.locationSize;ht++)p($.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Vt);for(let ht=0;ht<$.locationSize;ht++)w($.location+ht,yt/$.locationSize,rt,pt,ct*dt,(ot+yt/$.locationSize*ht)*dt,Mt)}else{if(gt.isInstancedBufferAttribute){for(let O=0;O<$.locationSize;O++)m($.location+O,gt.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let O=0;O<$.locationSize;O++)p($.location+O);n.bindBuffer(n.ARRAY_BUFFER,Vt);for(let O=0;O<$.locationSize;O++)w($.location+O,yt/$.locationSize,rt,pt,yt*dt,yt/$.locationSize*O*dt,Mt)}}else if(Y!==void 0){const pt=Y[nt];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv($.location,pt);break;case 3:n.vertexAttrib3fv($.location,pt);break;case 4:n.vertexAttrib4fv($.location,pt);break;default:n.vertexAttrib1fv($.location,pt)}}}}T()}function z(){B();for(const y in i){const E=i[y];for(const U in E){const X=E[U];for(const et in X)h(X[et].object),delete X[et];delete E[U]}delete i[y]}}function I(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const U in E){const X=E[U];for(const et in X)h(X[et].object),delete X[et];delete E[U]}delete i[y.id]}function P(y){for(const E in i){const U=i[E];if(U[y.id]===void 0)continue;const X=U[y.id];for(const et in X)h(X[et].object),delete X[et];delete U[y.id]}}function B(){Q(),r=!0,o!==s&&(o=s,l(o.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:Q,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:T}}function PM(n,t,e){let i;function s(l){i=l}function o(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)r(l[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<d.length;x++)e.update(_,i,d[x])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function CM(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==oi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const B=P===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==$i&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Vi&&!B)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),z=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:z,maxSamples:I}}function IM(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new Cs,a=new de,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||o&&!p)o?h(null):l();else{const T=o?0:i,w=T*4;let S=m.clippingState||null;c.value=S,S=h(_,d,w,f);for(let z=0;z!==w;++z)S[z]=e[z];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=c.value,_!==!0||p===null){const m=f+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,S=f;w!==x;++w,S+=4)r.copy(u[w]).applyMatrix4(T,a),r.normal.toArray(p,S),p[S+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function LM(n){let t=new WeakMap;function e(r,a){return a===wa?r.mapping=Eo:a===fl&&(r.mapping=bo),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===wa||a===fl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Vv(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class yp extends vp{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const co=4,td=[.125,.215,.35,.446,.526,.582],Ds=20,Lc=new yp,ed=new ye;let Dc=null,Uc=0,Nc=0,Fc=!1;const Is=(1+Math.sqrt(5))/2,io=1/Is,nd=[new Z(-Is,io,0),new Z(Is,io,0),new Z(-io,0,Is),new Z(io,0,Is),new Z(0,Is,-io),new Z(0,Is,io),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class id{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dc,Uc,Nc),this._renderer.xr.enabled=Fc,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Eo||t.mapping===bo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:yr,format:oi,colorSpace:ys,depthBuffer:!1},s=sd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DM(o)),this._blurMaterial=UM(o,t,e)}return s}_compileMaterial(t){const e=new b(this._lodPlanes[0],t);this._renderer.compile(e,Lc)}_sceneToCubeUV(t,e,i,s){const a=new ke(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ed),h.toneMapping=ms,h.autoClear=!1;const f=new ji({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),_=new b(new Pn,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(ed),x=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):T===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const w=this._cubeSize;jr(s,T*w,m>2?w:0,w,w),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Eo||t.mapping===bo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new b(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;jr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Lc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=nd[(s-o-1)%nd.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new b(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ds-1),x=o/_,p=isFinite(o)?1+Math.floor(h*x):Ds;p>Ds&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ds}`);const m=[];let T=0;for(let P=0;P<Ds;++P){const B=P/x,Q=Math.exp(-B*B/2);m.push(Q),P===0?T+=Q:P<p&&(T+=2*Q)}for(let P=0;P<m.length;P++)m[P]=m[P]/T;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-i;const S=this._sizeLods[s],z=3*S*(s>w-co?s-w+co:0),I=4*(this._cubeSize-S);jr(e,z,I,3*S,2*S),c.setRenderTarget(e),c.render(u,Lc)}}function DM(n){const t=[],e=[],i=[];let s=n;const o=n-co+1+td.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-co?c=td[r-n+co-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,x=3,p=2,m=1,T=new Float32Array(x*_*f),w=new Float32Array(p*_*f),S=new Float32Array(m*_*f);for(let I=0;I<f;I++){const P=I%3*2/3-1,B=I>2?0:-1,Q=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];T.set(Q,x*_*I),w.set(d,p*_*I);const y=[I,I,I,I,I,I];S.set(y,m*_*I)}const z=new yn;z.setAttribute("position",new Ei(T,x)),z.setAttribute("uv",new Ei(w,p)),z.setAttribute("faceIndex",new Ei(S,m)),t.push(z),s>co&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function sd(n,t,e){const i=new zs(n,t,e);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function UM(n,t,e){const i=new Float32Array(Ds),s=new Z(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function od(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function rd(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===wa||c===fl,h=c===Eo||c===bo;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new id(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new id(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function FM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&fa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function OM(n,t,e,i){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const x=f[_];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,_=u.attributes.position;let x=0;if(f!==null){const T=f.array;x=f.version;for(let w=0,S=T.length;w<S;w+=3){const z=T[w+0],I=T[w+1],P=T[w+2];d.push(z,I,I,P,P,z)}}else if(_!==void 0){const T=_.array;x=_.version;for(let w=0,S=T.length/3-1;w<S;w+=3){const z=w+0,I=w+1,P=w+2;d.push(z,I,I,P,P,z)}}else return;const p=new(lp(d)?gp:mp)(d,1);p.version=x;const m=o.get(u);m&&t.remove(m),o.set(u,p)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function BM(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){n.drawElements(i,f,o,d*r),e.update(f,i,1)}function l(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,o,d*r,_),e.update(f,i,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,i,1)}function u(d,f,_,x){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/r,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,x,0,_);let m=0;for(let T=0;T<_;T++)m+=f[T];for(let T=0;T<x.length;T++)e.update(m,i,x[T])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function GM(n,t,e){const i=new WeakMap,s=new Ue;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let z=a.attributes.position.count*S,I=1;z>t.maxTextureSize&&(I=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const P=new Float32Array(z*I*4*u),B=new hp(P,z,I,u);B.type=Vi,B.needsUpdate=!0;const Q=S*4;for(let E=0;E<u;E++){const U=m[E],X=T[E],et=w[E],at=z*I*4*E;for(let Y=0;Y<U.count;Y++){const nt=Y*Q;_===!0&&(s.fromBufferAttribute(U,Y),P[at+nt+0]=s.x,P[at+nt+1]=s.y,P[at+nt+2]=s.z,P[at+nt+3]=0),x===!0&&(s.fromBufferAttribute(X,Y),P[at+nt+4]=s.x,P[at+nt+5]=s.y,P[at+nt+6]=s.z,P[at+nt+7]=0),p===!0&&(s.fromBufferAttribute(et,Y),P[at+nt+8]=s.x,P[at+nt+9]=s.y,P[at+nt+10]=s.z,P[at+nt+11]=et.itemSize===4?s.w:1)}}d={count:u,texture:B,size:new kt(z,I)},i.set(a,d),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function HM(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Mp extends Cn{constructor(t,e,i,s,o,r,a,c,l,h=_o){if(h!==_o&&h!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_o&&(i=Bs),i===void 0&&h===Ao&&(i=To),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Wn,this.minFilter=c!==void 0?c:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wp=new Cn,ad=new Mp(1,1),Sp=new hp,Ep=new Av,bp=new Tu,cd=[],ld=[],ud=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function Lo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=cd[s];if(o===void 0&&(o=new Float32Array(s),cd[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function en(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=ld[t];e===void 0&&(e=new Int32Array(t),ld[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function kM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function VM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2fv(this.addr,t),nn(e,t)}}function WM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;n.uniform3fv(this.addr,t),nn(e,t)}}function XM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4fv(this.addr,t),nn(e,t)}}function qM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;dd.set(i),n.uniformMatrix2fv(this.addr,!1,dd),nn(e,i)}}function YM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;hd.set(i),n.uniformMatrix3fv(this.addr,!1,hd),nn(e,i)}}function $M(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),nn(e,i)}}function jM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function KM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2iv(this.addr,t),nn(e,t)}}function ZM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3iv(this.addr,t),nn(e,t)}}function JM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4iv(this.addr,t),nn(e,t)}}function QM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function tw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2uiv(this.addr,t),nn(e,t)}}function ew(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3uiv(this.addr,t),nn(e,t)}}function nw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4uiv(this.addr,t),nn(e,t)}}function iw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(ad.compareFunction=cp,o=ad):o=wp,e.setTexture2D(t||o,s)}function sw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ep,s)}function ow(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||bp,s)}function rw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Sp,s)}function aw(n){switch(n){case 5126:return kM;case 35664:return VM;case 35665:return WM;case 35666:return XM;case 35674:return qM;case 35675:return YM;case 35676:return $M;case 5124:case 35670:return jM;case 35667:case 35671:return KM;case 35668:case 35672:return ZM;case 35669:case 35673:return JM;case 5125:return QM;case 36294:return tw;case 36295:return ew;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return rw}}function cw(n,t){n.uniform1fv(this.addr,t)}function lw(n,t){const e=Lo(t,this.size,2);n.uniform2fv(this.addr,e)}function uw(n,t){const e=Lo(t,this.size,3);n.uniform3fv(this.addr,e)}function hw(n,t){const e=Lo(t,this.size,4);n.uniform4fv(this.addr,e)}function dw(n,t){const e=Lo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function fw(n,t){const e=Lo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function pw(n,t){const e=Lo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function mw(n,t){n.uniform1iv(this.addr,t)}function gw(n,t){n.uniform2iv(this.addr,t)}function _w(n,t){n.uniform3iv(this.addr,t)}function vw(n,t){n.uniform4iv(this.addr,t)}function xw(n,t){n.uniform1uiv(this.addr,t)}function yw(n,t){n.uniform2uiv(this.addr,t)}function Mw(n,t){n.uniform3uiv(this.addr,t)}function ww(n,t){n.uniform4uiv(this.addr,t)}function Sw(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||wp,o[r])}function Ew(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Ep,o[r])}function bw(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||bp,o[r])}function Tw(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Sp,o[r])}function Aw(n){switch(n){case 5126:return cw;case 35664:return lw;case 35665:return uw;case 35666:return hw;case 35674:return dw;case 35675:return fw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return _w;case 35669:case 35673:return vw;case 5125:return xw;case 36294:return yw;case 36295:return Mw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Tw}}class Rw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=aw(e.type)}}class Pw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Aw(e.type)}}class Cw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Oc=/(\w+)(\])?(\[|\.)?/g;function fd(n,t){n.seq.push(t),n.map[t.id]=t}function Iw(n,t,e){const i=n.name,s=i.length;for(Oc.lastIndex=0;;){const o=Oc.exec(i),r=Oc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){fd(e,l===void 0?new Rw(a,n,t):new Pw(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Cw(a),fd(e,u)),e=u}}}class pa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Iw(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function pd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Lw=37297;let Dw=0;function Uw(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function Nw(n){const t=Ce.getPrimaries(Ce.workingColorSpace),e=Ce.getPrimaries(n);let i;switch(t===e?i="":t===ba&&e===Ea?i="LinearDisplayP3ToLinearSRGB":t===Ea&&e===ba&&(i="LinearSRGBToLinearDisplayP3"),n){case ys:case Va:return[i,"LinearTransferOETF"];case ei:case Eu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function md(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Uw(n.getShaderSource(t),r)}else return s}function Fw(n,t){const e=Nw(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ow(n,t){let e;switch(t){case B_:e="Linear";break;case z_:e="Reinhard";break;case G_:e="Cineon";break;case H_:e="ACESFilmic";break;case V_:e="AgX";break;case W_:e="Neutral";break;case k_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new Z;function Bw(){Ce.getLuminanceCoefficients(Kr);const n=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function Gw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Hw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Xo(n){return n!==""}function gd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _d(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(n){return n.replace(kw,Ww)}const Vw=new Map;function Ww(n,t){let e=he[t];if(e===void 0){const i=Vw.get(t);if(i!==void 0)e=he[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}const Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(n){return n.replace(Xw,qw)}function qw(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function xd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===__?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gi&&(t="SHADOWMAP_TYPE_VSM"),t}function $w(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Eo:case bo:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bo:t="ENVMAP_MODE_REFRACTION";break}return t}function Kw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jf:t="ENVMAP_BLENDING_MULTIPLY";break;case F_:t="ENVMAP_BLENDING_MIX";break;case O_:t="ENVMAP_BLENDING_ADD";break}return t}function Zw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Jw(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Yw(e),l=$w(e),h=jw(e),u=Kw(e),d=Zw(e),f=zw(e),_=Gw(o),x=s.createProgram();let p,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Xo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Xo).join(`
`),m.length>0&&(m+=`
`)):(p=[xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),m=[xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ms?"#define TONE_MAPPING":"",e.toneMapping!==ms?he.tonemapping_pars_fragment:"",e.toneMapping!==ms?Ow("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Fw("linearToOutputTexel",e.outputColorSpace),Bw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xo).join(`
`)),r=Hl(r),r=gd(r,e),r=_d(r,e),a=Hl(a),a=gd(a,e),a=_d(a,e),r=vd(r),a=vd(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=T+p+r,S=T+m+a,z=pd(s,s.VERTEX_SHADER,w),I=pd(s,s.FRAGMENT_SHADER,S);s.attachShader(x,z),s.attachShader(x,I),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(E){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),X=s.getShaderInfoLog(z).trim(),et=s.getShaderInfoLog(I).trim();let at=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,z,I);else{const nt=md(s,z,"vertex"),$=md(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+nt+`
`+$)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(X===""||et==="")&&(Y=!1);Y&&(E.diagnostics={runnable:at,programLog:U,vertexShader:{log:X,prefix:p},fragmentShader:{log:et,prefix:m}})}s.deleteShader(z),s.deleteShader(I),B=new pa(s,x),Q=Hw(s,x)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let Q;this.getAttributes=function(){return Q===void 0&&P(this),Q};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Lw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=z,this.fragmentShader=I,this}let Qw=0;class tS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new eS(t),e.set(t,i)),i}}class eS{constructor(t){this.id=Qw++,this.code=t,this.usedTimes=0}}function nS(n,t,e,i,s,o,r){const a=new fp,c=new tS,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,E,U,X,et){const at=X.fog,Y=et.geometry,nt=y.isMeshStandardMaterial?X.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||nt),gt=$&&$.mapping===ka?$.image.height:null,pt=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ut=yt!==void 0?yt.length:0;let Vt=0;Y.morphAttributes.position!==void 0&&(Vt=1),Y.morphAttributes.normal!==void 0&&(Vt=2),Y.morphAttributes.color!==void 0&&(Vt=3);let rt,dt,Mt,O;if(pt){const se=Mi[pt];rt=se.vertexShader,dt=se.fragmentShader}else rt=y.vertexShader,dt=y.fragmentShader,c.update(y),Mt=c.getVertexShaderID(y),O=c.getFragmentShaderID(y);const ct=n.getRenderTarget(),ot=et.isInstancedMesh===!0,ht=et.isBatchedMesh===!0,bt=!!y.map,it=!!y.matcap,g=!!$,A=!!y.aoMap,L=!!y.lightMap,F=!!y.bumpMap,N=!!y.normalMap,q=!!y.displacementMap,J=!!y.emissiveMap,M=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,j=y.clearcoat>0,k=y.dispersion>0,V=y.iridescence>0,ut=y.sheen>0,lt=y.transmission>0,_t=C&&!!y.anisotropyMap,Rt=j&&!!y.clearcoatMap,ft=j&&!!y.clearcoatNormalMap,xt=j&&!!y.clearcoatRoughnessMap,It=V&&!!y.iridescenceMap,Nt=V&&!!y.iridescenceThicknessMap,Pt=ut&&!!y.sheenColorMap,Yt=ut&&!!y.sheenRoughnessMap,Ft=!!y.specularMap,jt=!!y.specularColorMap,G=!!y.specularIntensityMap,vt=lt&&!!y.transmissionMap,st=lt&&!!y.thicknessMap,tt=!!y.gradientMap,St=!!y.alphaMap,Et=y.alphaTest>0,Gt=!!y.alphaHash,Jt=!!y.extensions;let ne=ms;y.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ne=n.toneMapping);const ee={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:dt,defines:y.defines,customVertexShaderID:Mt,customFragmentShaderID:O,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ht,batchingColor:ht&&et._colorsTexture!==null,instancing:ot,instancingColor:ot&&et.instanceColor!==null,instancingMorph:ot&&et.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ys,alphaToCoverage:!!y.alphaToCoverage,map:bt,matcap:it,envMap:g,envMapMode:g&&$.mapping,envMapCubeUVHeight:gt,aoMap:A,lightMap:L,bumpMap:F,normalMap:N,displacementMap:f&&q,emissiveMap:J,normalMapObjectSpace:N&&y.normalMapType===$_,normalMapTangentSpace:N&&y.normalMapType===ap,metalnessMap:M,roughnessMap:v,anisotropy:C,anisotropyMap:_t,clearcoat:j,clearcoatMap:Rt,clearcoatNormalMap:ft,clearcoatRoughnessMap:xt,dispersion:k,iridescence:V,iridescenceMap:It,iridescenceThicknessMap:Nt,sheen:ut,sheenColorMap:Pt,sheenRoughnessMap:Yt,specularMap:Ft,specularColorMap:jt,specularIntensityMap:G,transmission:lt,transmissionMap:vt,thicknessMap:st,gradientMap:tt,opaque:y.transparent===!1&&y.blending===go&&y.alphaToCoverage===!1,alphaMap:St,alphaTest:Et,alphaHash:Gt,combine:y.combine,mapUv:bt&&p(y.map.channel),aoMapUv:A&&p(y.aoMap.channel),lightMapUv:L&&p(y.lightMap.channel),bumpMapUv:F&&p(y.bumpMap.channel),normalMapUv:N&&p(y.normalMap.channel),displacementMapUv:q&&p(y.displacementMap.channel),emissiveMapUv:J&&p(y.emissiveMap.channel),metalnessMapUv:M&&p(y.metalnessMap.channel),roughnessMapUv:v&&p(y.roughnessMap.channel),anisotropyMapUv:_t&&p(y.anisotropyMap.channel),clearcoatMapUv:Rt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ft&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&p(y.sheenRoughnessMap.channel),specularMapUv:Ft&&p(y.specularMap.channel),specularColorMapUv:jt&&p(y.specularColorMap.channel),specularIntensityMapUv:G&&p(y.specularIntensityMap.channel),transmissionMapUv:vt&&p(y.transmissionMap.channel),thicknessMapUv:st&&p(y.thicknessMap.channel),alphaMapUv:St&&p(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(N||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!Y.attributes.uv&&(bt||St),fog:!!at,useFog:y.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:et.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Vt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,decodeVideoTexture:bt&&y.map.isVideoTexture===!0&&Ce.getTransfer(y.map.colorSpace)===ze,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ve,flipSided:y.side===Dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Jt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&y.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function T(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)E.push(U),E.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(w(E,y),S(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function w(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function z(y){const E=x[y.type];let U;if(E){const X=Mi[E];U=zv.clone(X.uniforms)}else U=y.uniforms;return U}function I(y,E){let U;for(let X=0,et=h.length;X<et;X++){const at=h[X];if(at.cacheKey===E){U=at,++U.usedTimes;break}}return U===void 0&&(U=new Jw(n,E,y,o),h.push(U)),U}function P(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function B(y){c.remove(y)}function Q(){c.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:z,acquireProgram:I,releaseProgram:P,releaseShaderCache:B,programs:h,dispose:Q}}function iS(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function sS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function yd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Md(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,f,_,x,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:x,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,d,f,_,x,p){const m=r(u,d,f,_,x,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(u,d,f,_,x,p){const m=r(u,d,f,_,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||sS),i.length>1&&i.sort(d||yd),s.length>1&&s.sort(d||yd)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function oS(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new Md,n.set(i,[r])):s>=o.length?(r=new Md,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function rS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new ye};break;case"SpotLight":e={position:new Z,direction:new Z,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[t.id]=e,e}}}function aS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let cS=0;function lS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function uS(n){const t=new rS,e=aS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Z);const s=new Z,o=new Ge,r=new Ge;function a(l){let h=0,u=0,d=0;for(let Q=0;Q<9;Q++)i.probe[Q].set(0,0,0);let f=0,_=0,x=0,p=0,m=0,T=0,w=0,S=0,z=0,I=0,P=0;l.sort(lS);for(let Q=0,y=l.length;Q<y;Q++){const E=l[Q],U=E.color,X=E.intensity,et=E.distance,at=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=U.r*X,u+=U.g*X,d+=U.b*X;else if(E.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(E.sh.coefficients[Y],X);P++}else if(E.isDirectionalLight){const Y=t.get(E);if(Y.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const nt=E.shadow,$=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=at,i.directionalShadowMatrix[f]=E.shadow.matrix,T++}i.directional[f]=Y,f++}else if(E.isSpotLight){const Y=t.get(E);Y.position.setFromMatrixPosition(E.matrixWorld),Y.color.copy(U).multiplyScalar(X),Y.distance=et,Y.coneCos=Math.cos(E.angle),Y.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),Y.decay=E.decay,i.spot[x]=Y;const nt=E.shadow;if(E.map&&(i.spotLightMap[z]=E.map,z++,nt.updateMatrices(E),E.castShadow&&I++),i.spotLightMatrix[x]=nt.matrix,E.castShadow){const $=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=at,S++}x++}else if(E.isRectAreaLight){const Y=t.get(E);Y.color.copy(U).multiplyScalar(X),Y.halfWidth.set(E.width*.5,0,0),Y.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=Y,p++}else if(E.isPointLight){const Y=t.get(E);if(Y.color.copy(E.color).multiplyScalar(E.intensity),Y.distance=E.distance,Y.decay=E.decay,E.castShadow){const nt=E.shadow,$=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,$.shadowCameraNear=nt.camera.near,$.shadowCameraFar=nt.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=at,i.pointShadowMatrix[_]=E.shadow.matrix,w++}i.point[_]=Y,_++}else if(E.isHemisphereLight){const Y=t.get(E);Y.skyColor.copy(E.color).multiplyScalar(X),Y.groundColor.copy(E.groundColor).multiplyScalar(X),i.hemi[m]=Y,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ht.LTC_FLOAT_1,i.rectAreaLTC2=Ht.LTC_FLOAT_2):(i.rectAreaLTC1=Ht.LTC_HALF_1,i.rectAreaLTC2=Ht.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const B=i.hash;(B.directionalLength!==f||B.pointLength!==_||B.spotLength!==x||B.rectAreaLength!==p||B.hemiLength!==m||B.numDirectionalShadows!==T||B.numPointShadows!==w||B.numSpotShadows!==S||B.numSpotMaps!==z||B.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+z-I,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,B.directionalLength=f,B.pointLength=_,B.spotLength=x,B.rectAreaLength=p,B.hemiLength=m,B.numDirectionalShadows=T,B.numPointShadows=w,B.numSpotShadows=S,B.numSpotMaps=z,B.numLightProbes=P,i.version=cS++)}function c(l,h){let u=0,d=0,f=0,_=0,x=0;const p=h.matrixWorldInverse;for(let m=0,T=l.length;m<T;m++){const w=l[m];if(w.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(w.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(w.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),r.identity(),o.copy(w.matrixWorld),o.premultiply(p),r.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(w.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:i}}function wd(n){const t=new uS(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function hS(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new wd(n),t.set(s,[a])):o>=r.length?(a=new wd(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class dS extends Io{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fS extends Io{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gS(n,t,e){let i=new Au;const s=new kt,o=new kt,r=new Ue,a=new dS({depthPacking:Y_}),c=new fS,l={},h=e.maxTextureSize,u={[_s]:Dn,[Dn]:_s,[ve]:ve},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:pS,fragmentShader:mS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new yn;_.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new b(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let m=this.type;this.render=function(I,P,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;const Q=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ps),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const X=m!==Gi&&this.type===Gi,et=m===Gi&&this.type!==Gi;for(let at=0,Y=I.length;at<Y;at++){const nt=I[at],$=nt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const gt=$.getFrameExtents();if(s.multiply(gt),o.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/gt.x),s.x=o.x*gt.x,$.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/gt.y),s.y=o.y*gt.y,$.mapSize.y=o.y)),$.map===null||X===!0||et===!0){const yt=this.type!==Gi?{minFilter:Wn,magFilter:Wn}:{};$.map!==null&&$.map.dispose(),$.map=new zs(s.x,s.y,yt),$.map.texture.name=nt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const pt=$.getViewportCount();for(let yt=0;yt<pt;yt++){const Ut=$.getViewport(yt);r.set(o.x*Ut.x,o.y*Ut.y,o.x*Ut.z,o.y*Ut.w),U.viewport(r),$.updateMatrices(nt,yt),i=$.getFrustum(),S(P,B,$.camera,nt,this.type)}$.isPointLightShadow!==!0&&this.type===Gi&&T($,B),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(Q,y,E)};function T(I,P){const B=t.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new zs(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,B,d,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,B,f,x,null)}function w(I,P,B,Q){let y=null;const E=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(E!==void 0)y=E;else if(y=B.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const U=y.uuid,X=P.uuid;let et=l[U];et===void 0&&(et={},l[U]=et);let at=et[X];at===void 0&&(at=y.clone(),et[X]=at,P.addEventListener("dispose",z)),y=at}if(y.visible=P.visible,y.wireframe=P.wireframe,Q===Gi?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=B}return y}function S(I,P,B,Q,y){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===Gi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const X=t.update(I),et=I.material;if(Array.isArray(et)){const at=X.groups;for(let Y=0,nt=at.length;Y<nt;Y++){const $=at[Y],gt=et[$.materialIndex];if(gt&&gt.visible){const pt=w(I,gt,Q,y);I.onBeforeShadow(n,I,P,B,X,pt,$),n.renderBufferDirect(B,null,X,pt,I,$),I.onAfterShadow(n,I,P,B,X,pt,$)}}}else if(et.visible){const at=w(I,et,Q,y);I.onBeforeShadow(n,I,P,B,X,at,null),n.renderBufferDirect(B,null,X,at,I,null),I.onAfterShadow(n,I,P,B,X,at,null)}}const U=I.children;for(let X=0,et=U.length;X<et;X++)S(U[X],P,B,Q,y)}function z(I){I.target.removeEventListener("dispose",z);for(const B in l){const Q=l[B],y=I.target.uuid;y in Q&&(Q[y].dispose(),delete Q[y])}}}const _S={[rl]:al,[cl]:hl,[ll]:dl,[So]:ul,[al]:rl,[hl]:cl,[dl]:ll,[ul]:So};function vS(n){function t(){let G=!1;const vt=new Ue;let st=null;const tt=new Ue(0,0,0,0);return{setMask:function(St){st!==St&&!G&&(n.colorMask(St,St,St,St),st=St)},setLocked:function(St){G=St},setClear:function(St,Et,Gt,Jt,ne){ne===!0&&(St*=Jt,Et*=Jt,Gt*=Jt),vt.set(St,Et,Gt,Jt),tt.equals(vt)===!1&&(n.clearColor(St,Et,Gt,Jt),tt.copy(vt))},reset:function(){G=!1,st=null,tt.set(-1,0,0,0)}}}function e(){let G=!1,vt=!1,st=null,tt=null,St=null;return{setReversed:function(Et){vt=Et},setTest:function(Et){Et?Mt(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(Et){st!==Et&&!G&&(n.depthMask(Et),st=Et)},setFunc:function(Et){if(vt&&(Et=_S[Et]),tt!==Et){switch(Et){case rl:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case cl:n.depthFunc(n.LESS);break;case So:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case ul:n.depthFunc(n.GEQUAL);break;case hl:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=Et}},setLocked:function(Et){G=Et},setClear:function(Et){St!==Et&&(n.clearDepth(Et),St=Et)},reset:function(){G=!1,st=null,tt=null,St=null}}}function i(){let G=!1,vt=null,st=null,tt=null,St=null,Et=null,Gt=null,Jt=null,ne=null;return{setTest:function(ee){G||(ee?Mt(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(ee){vt!==ee&&!G&&(n.stencilMask(ee),vt=ee)},setFunc:function(ee,se,ce){(st!==ee||tt!==se||St!==ce)&&(n.stencilFunc(ee,se,ce),st=ee,tt=se,St=ce)},setOp:function(ee,se,ce){(Et!==ee||Gt!==se||Jt!==ce)&&(n.stencilOp(ee,se,ce),Et=ee,Gt=se,Jt=ce)},setLocked:function(ee){G=ee},setClear:function(ee){ne!==ee&&(n.clearStencil(ee),ne=ee)},reset:function(){G=!1,vt=null,st=null,tt=null,St=null,Et=null,Gt=null,Jt=null,ne=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,p=null,m=null,T=null,w=null,S=null,z=null,I=new ye(0,0,0),P=0,B=!1,Q=null,y=null,E=null,U=null,X=null;const et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,Y=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(nt)[1]),at=Y>=1):nt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),at=Y>=2);let $=null,gt={};const pt=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),Ut=new Ue().fromArray(pt),Vt=new Ue().fromArray(yt);function rt(G,vt,st,tt){const St=new Uint8Array(4),Et=n.createTexture();n.bindTexture(G,Et),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<st;Gt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(vt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return Et}const dt={};dt[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),Mt(n.DEPTH_TEST),o.setFunc(So),L(!1),F(Ph),Mt(n.CULL_FACE),g(ps);function Mt(G){l[G]!==!0&&(n.enable(G),l[G]=!0)}function O(G){l[G]!==!1&&(n.disable(G),l[G]=!1)}function ct(G,vt){return h[G]!==vt?(n.bindFramebuffer(G,vt),h[G]=vt,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function ot(G,vt){let st=d,tt=!1;if(G){st=u.get(vt),st===void 0&&(st=[],u.set(vt,st));const St=G.textures;if(st.length!==St.length||st[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,Gt=St.length;Et<Gt;Et++)st[Et]=n.COLOR_ATTACHMENT0+Et;st.length=St.length,tt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,tt=!0);tt&&n.drawBuffers(st)}function ht(G){return f!==G?(n.useProgram(G),f=G,!0):!1}const bt={[Ls]:n.FUNC_ADD,[x_]:n.FUNC_SUBTRACT,[y_]:n.FUNC_REVERSE_SUBTRACT};bt[M_]=n.MIN,bt[w_]=n.MAX;const it={[S_]:n.ZERO,[E_]:n.ONE,[b_]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[I_]:n.SRC_ALPHA_SATURATE,[P_]:n.DST_COLOR,[A_]:n.DST_ALPHA,[T_]:n.ONE_MINUS_SRC_COLOR,[ol]:n.ONE_MINUS_SRC_ALPHA,[C_]:n.ONE_MINUS_DST_COLOR,[R_]:n.ONE_MINUS_DST_ALPHA,[L_]:n.CONSTANT_COLOR,[D_]:n.ONE_MINUS_CONSTANT_COLOR,[U_]:n.CONSTANT_ALPHA,[N_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(G,vt,st,tt,St,Et,Gt,Jt,ne,ee){if(G===ps){_===!0&&(O(n.BLEND),_=!1);return}if(_===!1&&(Mt(n.BLEND),_=!0),G!==v_){if(G!==x||ee!==B){if((p!==Ls||w!==Ls)&&(n.blendEquation(n.FUNC_ADD),p=Ls,w=Ls),ee)switch(G){case go:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ch:n.blendFunc(n.ONE,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case go:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ch:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}m=null,T=null,S=null,z=null,I.set(0,0,0),P=0,x=G,B=ee}return}St=St||vt,Et=Et||st,Gt=Gt||tt,(vt!==p||St!==w)&&(n.blendEquationSeparate(bt[vt],bt[St]),p=vt,w=St),(st!==m||tt!==T||Et!==S||Gt!==z)&&(n.blendFuncSeparate(it[st],it[tt],it[Et],it[Gt]),m=st,T=tt,S=Et,z=Gt),(Jt.equals(I)===!1||ne!==P)&&(n.blendColor(Jt.r,Jt.g,Jt.b,ne),I.copy(Jt),P=ne),x=G,B=!1}function A(G,vt){G.side===ve?O(n.CULL_FACE):Mt(n.CULL_FACE);let st=G.side===Dn;vt&&(st=!st),L(st),G.blending===go&&G.transparent===!1?g(ps):g(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const tt=G.stencilWrite;r.setTest(tt),tt&&(r.setMask(G.stencilWriteMask),r.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),r.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),q(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(G){Q!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),Q=G)}function F(G){G!==m_?(Mt(n.CULL_FACE),G!==y&&(G===Ph?n.cullFace(n.BACK):G===g_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),y=G}function N(G){G!==E&&(at&&n.lineWidth(G),E=G)}function q(G,vt,st){G?(Mt(n.POLYGON_OFFSET_FILL),(U!==vt||X!==st)&&(n.polygonOffset(vt,st),U=vt,X=st)):O(n.POLYGON_OFFSET_FILL)}function J(G){G?Mt(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function M(G){G===void 0&&(G=n.TEXTURE0+et-1),$!==G&&(n.activeTexture(G),$=G)}function v(G,vt,st){st===void 0&&($===null?st=n.TEXTURE0+et-1:st=$);let tt=gt[st];tt===void 0&&(tt={type:void 0,texture:void 0},gt[st]=tt),(tt.type!==G||tt.texture!==vt)&&($!==st&&(n.activeTexture(st),$=st),n.bindTexture(G,vt||dt[G]),tt.type=G,tt.texture=vt)}function C(){const G=gt[$];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function It(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(G){Ut.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ut.copy(G))}function Pt(G){Vt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Vt.copy(G))}function Yt(G,vt){let st=c.get(vt);st===void 0&&(st=new WeakMap,c.set(vt,st));let tt=st.get(G);tt===void 0&&(tt=n.getUniformBlockIndex(vt,G.name),st.set(G,tt))}function Ft(G,vt){const tt=c.get(vt).get(G);a.get(vt)!==tt&&(n.uniformBlockBinding(vt,tt,G.__bindingPointIndex),a.set(vt,tt))}function jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},$=null,gt={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,p=null,m=null,T=null,w=null,S=null,z=null,I=new ye(0,0,0),P=0,B=!1,Q=null,y=null,E=null,U=null,X=null,Ut.set(0,0,n.canvas.width,n.canvas.height),Vt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:Mt,disable:O,bindFramebuffer:ct,drawBuffers:ot,useProgram:ht,setBlending:g,setMaterial:A,setFlipSided:L,setCullFace:F,setLineWidth:N,setPolygonOffset:q,setScissorTest:J,activeTexture:M,bindTexture:v,unbindTexture:C,compressedTexImage2D:j,compressedTexImage3D:k,texImage2D:xt,texImage3D:It,updateUBOMapping:Yt,uniformBlockBinding:Ft,texStorage2D:Rt,texStorage3D:ft,texSubImage2D:V,texSubImage3D:ut,compressedTexSubImage2D:lt,compressedTexSubImage3D:_t,scissor:Nt,viewport:Pt,reset:jt}}function Sd(n,t,e,i){const s=xS(i);switch(e){case tp:return n*t;case np:return n*t;case ip:return n*t*2;case sp:return n*t/s.components*s.byteLength;case Mu:return n*t/s.components*s.byteLength;case op:return n*t*2/s.components*s.byteLength;case wu:return n*t*2/s.components*s.byteLength;case ep:return n*t*3/s.components*s.byteLength;case oi:return n*t*4/s.components*s.byteLength;case Su:return n*t*4/s.components*s.byteLength;case ca:case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gl:case vl:return Math.max(n,16)*Math.max(t,8)/4;case ml:case _l:return Math.max(n,8)*Math.max(t,8)/2;case xl:case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case da:case Fl:case Ol:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rp:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case zl:case Gl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xS(n){switch(n){case $i:case Zf:return{byteLength:1,components:1};case dr:case Jf:case yr:return{byteLength:2,components:1};case xu:case yu:return{byteLength:2,components:4};case Bs:case vu:case Vi:return{byteLength:4,components:1};case Qf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function yS(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new kt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,v){return f?new OffscreenCanvas(M,v):pr("canvas")}function x(M,v,C){let j=1;const k=J(M);if((k.width>C||k.height>C)&&(j=C/Math.max(k.width,k.height)),j<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const V=Math.floor(j*k.width),ut=Math.floor(j*k.height);u===void 0&&(u=_(V,ut));const lt=v?_(V,ut):u;return lt.width=V,lt.height=ut,lt.getContext("2d").drawImage(M,0,0,V,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+V+"x"+ut+")."),lt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),M;return M}function p(M){return M.generateMipmaps&&M.minFilter!==Wn&&M.minFilter!==ii}function m(M){n.generateMipmap(M)}function T(M,v,C,j,k=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=v;if(v===n.RED&&(C===n.FLOAT&&(V=n.R32F),C===n.HALF_FLOAT&&(V=n.R16F),C===n.UNSIGNED_BYTE&&(V=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.R8UI),C===n.UNSIGNED_SHORT&&(V=n.R16UI),C===n.UNSIGNED_INT&&(V=n.R32UI),C===n.BYTE&&(V=n.R8I),C===n.SHORT&&(V=n.R16I),C===n.INT&&(V=n.R32I)),v===n.RG&&(C===n.FLOAT&&(V=n.RG32F),C===n.HALF_FLOAT&&(V=n.RG16F),C===n.UNSIGNED_BYTE&&(V=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RG8UI),C===n.UNSIGNED_SHORT&&(V=n.RG16UI),C===n.UNSIGNED_INT&&(V=n.RG32UI),C===n.BYTE&&(V=n.RG8I),C===n.SHORT&&(V=n.RG16I),C===n.INT&&(V=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGB8UI),C===n.UNSIGNED_SHORT&&(V=n.RGB16UI),C===n.UNSIGNED_INT&&(V=n.RGB32UI),C===n.BYTE&&(V=n.RGB8I),C===n.SHORT&&(V=n.RGB16I),C===n.INT&&(V=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),C===n.UNSIGNED_INT&&(V=n.RGBA32UI),C===n.BYTE&&(V=n.RGBA8I),C===n.SHORT&&(V=n.RGBA16I),C===n.INT&&(V=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),v===n.RGBA){const ut=k?Sa:Ce.getTransfer(j);C===n.FLOAT&&(V=n.RGBA32F),C===n.HALF_FLOAT&&(V=n.RGBA16F),C===n.UNSIGNED_BYTE&&(V=ut===ze?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function w(M,v){let C;return M?v===null||v===Bs||v===To?C=n.DEPTH24_STENCIL8:v===Vi?C=n.DEPTH32F_STENCIL8:v===dr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Bs||v===To?C=n.DEPTH_COMPONENT24:v===Vi?C=n.DEPTH_COMPONENT32F:v===dr&&(C=n.DEPTH_COMPONENT16),C}function S(M,v){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==Wn&&M.minFilter!==ii?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function z(M){const v=M.target;v.removeEventListener("dispose",z),P(v),v.isVideoTexture&&h.delete(v)}function I(M){const v=M.target;v.removeEventListener("dispose",I),Q(v)}function P(M){const v=i.get(M);if(v.__webglInit===void 0)return;const C=M.source,j=d.get(C);if(j){const k=j[v.__cacheKey];k.usedTimes--,k.usedTimes===0&&B(M),Object.keys(j).length===0&&d.delete(C)}i.remove(M)}function B(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const C=M.source,j=d.get(C);delete j[v.__cacheKey],r.memory.textures--}function Q(M){const v=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let k=0;k<v.__webglFramebuffer[j].length;k++)n.deleteFramebuffer(v.__webglFramebuffer[j][k]);else n.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)n.deleteFramebuffer(v.__webglFramebuffer[j]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=M.textures;for(let j=0,k=C.length;j<k;j++){const V=i.get(C[j]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),r.memory.textures--),i.remove(C[j])}i.remove(M)}let y=0;function E(){y=0}function U(){const M=y;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),y+=1,M}function X(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function et(M,v){const C=i.get(M);if(M.isVideoTexture&&N(M),M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){const j=M.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(C,M,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function at(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Vt(C,M,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function Y(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Vt(C,M,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function nt(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){rt(C,M,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const $={[Ve]:n.REPEAT,[Us]:n.CLAMP_TO_EDGE,[pl]:n.MIRRORED_REPEAT},gt={[Wn]:n.NEAREST,[X_]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[ii]:n.LINEAR,[uc]:n.LINEAR_MIPMAP_NEAREST,[Ns]:n.LINEAR_MIPMAP_LINEAR},pt={[j_]:n.NEVER,[ev]:n.ALWAYS,[K_]:n.LESS,[cp]:n.LEQUAL,[Z_]:n.EQUAL,[tv]:n.GEQUAL,[J_]:n.GREATER,[Q_]:n.NOTEQUAL};function yt(M,v){if(v.type===Vi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ii||v.magFilter===uc||v.magFilter===Cr||v.magFilter===Ns||v.minFilter===ii||v.minFilter===uc||v.minFilter===Cr||v.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,$[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,$[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,$[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,gt[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,pt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Wn||v.minFilter!==Cr&&v.minFilter!==Ns||v.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ut(M,v){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",z));const j=v.source;let k=d.get(j);k===void 0&&(k={},d.set(j,k));const V=X(v);if(V!==M.__cacheKey){k[V]===void 0&&(k[V]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,C=!0),k[V].usedTimes++;const ut=k[M.__cacheKey];ut!==void 0&&(k[M.__cacheKey].usedTimes--,ut.usedTimes===0&&B(v)),M.__cacheKey=V,M.__webglTexture=k[V].texture}return C}function Vt(M,v,C){let j=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=n.TEXTURE_3D);const k=Ut(M,v),V=v.source;e.bindTexture(j,M.__webglTexture,n.TEXTURE0+C);const ut=i.get(V);if(V.version!==ut.__version||k===!0){e.activeTexture(n.TEXTURE0+C);const lt=Ce.getPrimaries(Ce.workingColorSpace),_t=v.colorSpace===fs?null:Ce.getPrimaries(v.colorSpace),Rt=v.colorSpace===fs||lt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ft=x(v.image,!1,s.maxTextureSize);ft=q(v,ft);const xt=o.convert(v.format,v.colorSpace),It=o.convert(v.type);let Nt=T(v.internalFormat,xt,It,v.colorSpace,v.isVideoTexture);yt(j,v);let Pt;const Yt=v.mipmaps,Ft=v.isVideoTexture!==!0,jt=ut.__version===void 0||k===!0,G=V.dataReady,vt=S(v,ft);if(v.isDepthTexture)Nt=w(v.format===Ao,v.type),jt&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,Nt,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Nt,ft.width,ft.height,0,xt,It,null));else if(v.isDataTexture)if(Yt.length>0){Ft&&jt&&e.texStorage2D(n.TEXTURE_2D,vt,Nt,Yt[0].width,Yt[0].height);for(let st=0,tt=Yt.length;st<tt;st++)Pt=Yt[st],Ft?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Pt.width,Pt.height,xt,It,Pt.data):e.texImage2D(n.TEXTURE_2D,st,Nt,Pt.width,Pt.height,0,xt,It,Pt.data);v.generateMipmaps=!1}else Ft?(jt&&e.texStorage2D(n.TEXTURE_2D,vt,Nt,ft.width,ft.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,xt,It,ft.data)):e.texImage2D(n.TEXTURE_2D,0,Nt,ft.width,ft.height,0,xt,It,ft.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ft&&jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Nt,Yt[0].width,Yt[0].height,ft.depth);for(let st=0,tt=Yt.length;st<tt;st++)if(Pt=Yt[st],v.format!==oi)if(xt!==null)if(Ft){if(G)if(v.layerUpdates.size>0){const St=Sd(Pt.width,Pt.height,v.format,v.type);for(const Et of v.layerUpdates){const Gt=Pt.data.subarray(Et*St/Pt.data.BYTES_PER_ELEMENT,(Et+1)*St/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,Et,Pt.width,Pt.height,1,xt,Gt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Pt.width,Pt.height,ft.depth,xt,Pt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Nt,Pt.width,Pt.height,ft.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Pt.width,Pt.height,ft.depth,xt,It,Pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Nt,Pt.width,Pt.height,ft.depth,0,xt,It,Pt.data)}else{Ft&&jt&&e.texStorage2D(n.TEXTURE_2D,vt,Nt,Yt[0].width,Yt[0].height);for(let st=0,tt=Yt.length;st<tt;st++)Pt=Yt[st],v.format!==oi?xt!==null?Ft?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Pt.width,Pt.height,xt,Pt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Nt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Pt.width,Pt.height,xt,It,Pt.data):e.texImage2D(n.TEXTURE_2D,st,Nt,Pt.width,Pt.height,0,xt,It,Pt.data)}else if(v.isDataArrayTexture)if(Ft){if(jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Nt,ft.width,ft.height,ft.depth),G)if(v.layerUpdates.size>0){const st=Sd(ft.width,ft.height,v.format,v.type);for(const tt of v.layerUpdates){const St=ft.data.subarray(tt*st/ft.data.BYTES_PER_ELEMENT,(tt+1)*st/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,ft.width,ft.height,1,xt,It,St)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,xt,It,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,ft.width,ft.height,ft.depth,0,xt,It,ft.data);else if(v.isData3DTexture)Ft?(jt&&e.texStorage3D(n.TEXTURE_3D,vt,Nt,ft.width,ft.height,ft.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,xt,It,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,ft.width,ft.height,ft.depth,0,xt,It,ft.data);else if(v.isFramebufferTexture){if(jt)if(Ft)e.texStorage2D(n.TEXTURE_2D,vt,Nt,ft.width,ft.height);else{let st=ft.width,tt=ft.height;for(let St=0;St<vt;St++)e.texImage2D(n.TEXTURE_2D,St,Nt,st,tt,0,xt,It,null),st>>=1,tt>>=1}}else if(Yt.length>0){if(Ft&&jt){const st=J(Yt[0]);e.texStorage2D(n.TEXTURE_2D,vt,Nt,st.width,st.height)}for(let st=0,tt=Yt.length;st<tt;st++)Pt=Yt[st],Ft?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,xt,It,Pt):e.texImage2D(n.TEXTURE_2D,st,Nt,xt,It,Pt);v.generateMipmaps=!1}else if(Ft){if(jt){const st=J(ft);e.texStorage2D(n.TEXTURE_2D,vt,Nt,st.width,st.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,It,ft)}else e.texImage2D(n.TEXTURE_2D,0,Nt,xt,It,ft);p(v)&&m(j),ut.__version=V.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function rt(M,v,C){if(v.image.length!==6)return;const j=Ut(M,v),k=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+C);const V=i.get(k);if(k.version!==V.__version||j===!0){e.activeTexture(n.TEXTURE0+C);const ut=Ce.getPrimaries(Ce.workingColorSpace),lt=v.colorSpace===fs?null:Ce.getPrimaries(v.colorSpace),_t=v.colorSpace===fs||ut===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,ft=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let tt=0;tt<6;tt++)!Rt&&!ft?xt[tt]=x(v.image[tt],!0,s.maxCubemapSize):xt[tt]=ft?v.image[tt].image:v.image[tt],xt[tt]=q(v,xt[tt]);const It=xt[0],Nt=o.convert(v.format,v.colorSpace),Pt=o.convert(v.type),Yt=T(v.internalFormat,Nt,Pt,v.colorSpace),Ft=v.isVideoTexture!==!0,jt=V.__version===void 0||j===!0,G=k.dataReady;let vt=S(v,It);yt(n.TEXTURE_CUBE_MAP,v);let st;if(Rt){Ft&&jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Yt,It.width,It.height);for(let tt=0;tt<6;tt++){st=xt[tt].mipmaps;for(let St=0;St<st.length;St++){const Et=st[St];v.format!==oi?Nt!==null?Ft?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Et.width,Et.height,Nt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Yt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Et.width,Et.height,Nt,Pt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Yt,Et.width,Et.height,0,Nt,Pt,Et.data)}}}else{if(st=v.mipmaps,Ft&&jt){st.length>0&&vt++;const tt=J(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Yt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ft){Ft?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,xt[tt].width,xt[tt].height,Nt,Pt,xt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Yt,xt[tt].width,xt[tt].height,0,Nt,Pt,xt[tt].data);for(let St=0;St<st.length;St++){const Gt=st[St].image[tt].image;Ft?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,Gt.width,Gt.height,Nt,Pt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Yt,Gt.width,Gt.height,0,Nt,Pt,Gt.data)}}else{Ft?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Nt,Pt,xt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Yt,Nt,Pt,xt[tt]);for(let St=0;St<st.length;St++){const Et=st[St];Ft?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,Nt,Pt,Et.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Yt,Nt,Pt,Et.image[tt])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),V.__version=k.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function dt(M,v,C,j,k,V){const ut=o.convert(C.format,C.colorSpace),lt=o.convert(C.type),_t=T(C.internalFormat,ut,lt,C.colorSpace);if(!i.get(v).__hasExternalTextures){const ft=Math.max(1,v.width>>V),xt=Math.max(1,v.height>>V);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?e.texImage3D(k,V,_t,ft,xt,v.depth,0,ut,lt,null):e.texImage2D(k,V,_t,ft,xt,0,ut,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,k,i.get(C).__webglTexture,0,L(v)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,k,i.get(C).__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(M,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){const j=v.depthTexture,k=j&&j.isDepthTexture?j.type:null,V=w(v.stencilBuffer,k),ut=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=L(v);F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,V,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,V,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,V,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,M)}else{const j=v.textures;for(let k=0;k<j.length;k++){const V=j[k],ut=o.convert(V.format,V.colorSpace),lt=o.convert(V.type),_t=T(V.internalFormat,ut,lt,V.colorSpace),Rt=L(v);C&&F(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,_t,v.width,v.height):F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,_t,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,_t,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),et(v.depthTexture,0);const j=i.get(v.depthTexture).__webglTexture,k=L(v);if(v.depthTexture.format===_o)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(v.depthTexture.format===Ao)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ct(M){const v=i.get(M),C=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const j=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const k=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",k)};j.addEventListener("dispose",k),v.__depthDisposeCallback=k}v.__boundDepthTexture=j}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");O(v.__webglFramebuffer,M)}else if(C){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=n.createRenderbuffer(),Mt(v.__webglDepthbuffer[j],M,!1);else{const k=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,V)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Mt(v.__webglDepthbuffer,M,!1);else{const j=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,k)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(M,v,C){const j=i.get(M);v!==void 0&&dt(j.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&ct(M)}function ht(M){const v=M.texture,C=i.get(M),j=i.get(v);M.addEventListener("dispose",I);const k=M.textures,V=M.isWebGLCubeRenderTarget===!0,ut=k.length>1;if(ut||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,r.memory.textures++),V){C.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[lt]=[];for(let _t=0;_t<v.mipmaps.length;_t++)C.__webglFramebuffer[lt][_t]=n.createFramebuffer()}else C.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)C.__webglFramebuffer[lt]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ut)for(let lt=0,_t=k.length;lt<_t;lt++){const Rt=i.get(k[lt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),r.memory.textures++)}if(M.samples>0&&F(M)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let lt=0;lt<k.length;lt++){const _t=k[lt];C.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[lt]);const Rt=o.convert(_t.format,_t.colorSpace),ft=o.convert(_t.type),xt=T(_t.internalFormat,Rt,ft,_t.colorSpace,M.isXRRenderTarget===!0),It=L(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,xt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,C.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(C.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),yt(n.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)dt(C.__webglFramebuffer[lt][_t],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t);else dt(C.__webglFramebuffer[lt],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(v)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let lt=0,_t=k.length;lt<_t;lt++){const Rt=k[lt],ft=i.get(Rt);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),yt(n.TEXTURE_2D,Rt),dt(C.__webglFramebuffer,M,Rt,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),p(Rt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(lt=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,j.__webglTexture),yt(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)dt(C.__webglFramebuffer[_t],M,v,n.COLOR_ATTACHMENT0,lt,_t);else dt(C.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,lt,0);p(v)&&m(lt),e.unbindTexture()}M.depthBuffer&&ct(M)}function bt(M){const v=M.textures;for(let C=0,j=v.length;C<j;C++){const k=v[C];if(p(k)){const V=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ut=i.get(k).__webglTexture;e.bindTexture(V,ut),m(V),e.unbindTexture()}}}const it=[],g=[];function A(M){if(M.samples>0){if(F(M)===!1){const v=M.textures,C=M.width,j=M.height;let k=n.COLOR_BUFFER_BIT;const V=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(M),lt=v.length>1;if(lt)for(let _t=0;_t<v.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let _t=0;_t<v.length;_t++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[_t]);const Rt=i.get(v[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,C,j,0,0,C,j,k,n.NEAREST),c===!0&&(it.length=0,g.length=0,it.push(n.COLOR_ATTACHMENT0+_t),M.depthBuffer&&M.resolveDepthBuffer===!1&&(it.push(V),g.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let _t=0;_t<v.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,ut.__webglColorRenderbuffer[_t]);const Rt=i.get(v[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(M){return Math.min(s.maxSamples,M.samples)}function F(M){const v=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(M){const v=r.render.frame;h.get(M)!==v&&(h.set(M,v),M.update())}function q(M,v){const C=M.colorSpace,j=M.format,k=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||C!==ys&&C!==fs&&(Ce.getTransfer(C)===ze?(j!==oi||k!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function J(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.setTexture2D=et,this.setTexture2DArray=at,this.setTexture3D=Y,this.setTextureCube=nt,this.rebindTextures=ot,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=F}function MS(n,t){function e(i,s=fs){let o;const r=Ce.getTransfer(s);if(i===$i)return n.UNSIGNED_BYTE;if(i===xu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zf)return n.BYTE;if(i===Jf)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===vu)return n.INT;if(i===Bs)return n.UNSIGNED_INT;if(i===Vi)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===tp)return n.ALPHA;if(i===ep)return n.RGB;if(i===oi)return n.RGBA;if(i===np)return n.LUMINANCE;if(i===ip)return n.LUMINANCE_ALPHA;if(i===_o)return n.DEPTH_COMPONENT;if(i===Ao)return n.DEPTH_STENCIL;if(i===sp)return n.RED;if(i===Mu)return n.RED_INTEGER;if(i===op)return n.RG;if(i===wu)return n.RG_INTEGER;if(i===Su)return n.RGBA_INTEGER;if(i===ca||i===la||i===ua||i===ha)if(r===ze)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===gl||i===_l||i===vl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ml)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_l)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===yl||i===Ml)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===xl||i===yl)return r===ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ml)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wl||i===Sl||i===El||i===bl||i===Tl||i===Al||i===Rl||i===Pl||i===Cl||i===Il||i===Ll||i===Dl||i===Ul||i===Nl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===wl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===El)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ll)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===da||i===Fl||i===Ol)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===da)return r===ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ol)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rp||i===Bl||i===zl||i===Gl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===da)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===To?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class wS extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SS={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SS)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ES=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Cn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Yn({vertexShader:ES,fragmentShader:bS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new b(new Xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AS extends Co{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null;const x=new TS,p=e.getContextAttributes();let m=null,T=null;const w=[],S=[],z=new kt;let I=null;const P=new ke;P.layers.enable(1),P.viewport=new Ue;const B=new ke;B.layers.enable(2),B.viewport=new Ue;const Q=[P,B],y=new wS;y.layers.enable(1),y.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let dt=w[rt];return dt===void 0&&(dt=new Bc,w[rt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(rt){let dt=w[rt];return dt===void 0&&(dt=new Bc,w[rt]=dt),dt.getGripSpace()},this.getHand=function(rt){let dt=w[rt];return dt===void 0&&(dt=new Bc,w[rt]=dt),dt.getHandSpace()};function X(rt){const dt=S.indexOf(rt.inputSource);if(dt===-1)return;const Mt=w[dt];Mt!==void 0&&(Mt.update(rt.inputSource,rt.frame,l||r),Mt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function et(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",at);for(let rt=0;rt<w.length;rt++){const dt=S[rt];dt!==null&&(S[rt]=null,w[rt].disconnect(dt))}E=null,U=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,T=null,Vt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){o=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(rt){l=rt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",et),s.addEventListener("inputsourceschange",at),p.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(z),s.renderState.layers===void 0){const dt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new zs(f.framebufferWidth,f.framebufferHeight,{format:oi,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let dt=null,Mt=null,O=null;p.depth&&(O=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=p.stencil?Ao:_o,Mt=p.stencil?To:Bs);const ct={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new zs(d.textureWidth,d.textureHeight,{format:oi,type:$i,depthTexture:new Mp(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function at(rt){for(let dt=0;dt<rt.removed.length;dt++){const Mt=rt.removed[dt],O=S.indexOf(Mt);O>=0&&(S[O]=null,w[O].disconnect(Mt))}for(let dt=0;dt<rt.added.length;dt++){const Mt=rt.added[dt];let O=S.indexOf(Mt);if(O===-1){for(let ot=0;ot<w.length;ot++)if(ot>=S.length){S.push(Mt),O=ot;break}else if(S[ot]===null){S[ot]=Mt,O=ot;break}if(O===-1)break}const ct=w[O];ct&&ct.connect(Mt)}}const Y=new Z,nt=new Z;function $(rt,dt,Mt){Y.setFromMatrixPosition(dt.matrixWorld),nt.setFromMatrixPosition(Mt.matrixWorld);const O=Y.distanceTo(nt),ct=dt.projectionMatrix.elements,ot=Mt.projectionMatrix.elements,ht=ct[14]/(ct[10]-1),bt=ct[14]/(ct[10]+1),it=(ct[9]+1)/ct[5],g=(ct[9]-1)/ct[5],A=(ct[8]-1)/ct[0],L=(ot[8]+1)/ot[0],F=ht*A,N=ht*L,q=O/(-A+L),J=q*-A;if(dt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(J),rt.translateZ(q),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),ct[10]===-1)rt.projectionMatrix.copy(dt.projectionMatrix),rt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const M=ht+q,v=bt+q,C=F-J,j=N+(O-J),k=it*bt/v*M,V=g*bt/v*M;rt.projectionMatrix.makePerspective(C,j,k,V,M,v),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function gt(rt,dt){dt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(dt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let dt=rt.near,Mt=rt.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),y.near=B.near=P.near=dt,y.far=B.far=P.far=Mt,(E!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,U=y.far);const O=rt.parent,ct=y.cameras;gt(y,O);for(let ot=0;ot<ct.length;ot++)gt(ct[ot],O);ct.length===2?$(y,P,B):y.projectionMatrix.copy(P.projectionMatrix),pt(rt,y,O)};function pt(rt,dt,Mt){Mt===null?rt.matrix.copy(dt.matrixWorld):(rt.matrix.copy(Mt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(dt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(dt.projectionMatrix),rt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=fr*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(rt){c=rt,d!==null&&(d.fixedFoveation=rt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=rt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let yt=null;function Ut(rt,dt){if(h=dt.getViewerPose(l||r),_=dt,h!==null){const Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let O=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,O=!0);for(let ot=0;ot<Mt.length;ot++){const ht=Mt[ot];let bt=null;if(f!==null)bt=f.getViewport(ht);else{const g=u.getViewSubImage(d,ht);bt=g.viewport,ot===0&&(t.setRenderTargetTextures(T,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(T))}let it=Q[ot];it===void 0&&(it=new ke,it.layers.enable(ot),it.viewport=new Ue,Q[ot]=it),it.matrix.fromArray(ht.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ht.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(bt.x,bt.y,bt.width,bt.height),ot===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),O===!0&&y.cameras.push(it)}const ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")){const ot=u.getDepthInformation(Mt[0]);ot&&ot.isValid&&ot.texture&&x.init(t,ot,s.renderState)}}for(let Mt=0;Mt<w.length;Mt++){const O=S[Mt],ct=w[Mt];O!==null&&ct!==void 0&&ct.update(O,dt,l||r)}yt&&yt(rt,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),_=null}const Vt=new xp;Vt.setAnimationLoop(Ut),this.setAnimationLoop=function(rt){yt=rt},this.dispose=function(){}}}const Rs=new Ti,RS=new Ge;function PS(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,_p(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,w,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),u(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m)):m.isMeshStandardMaterial?(o(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(o(p,m),_(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),x(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,T,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=t.get(m),w=T.envMap,S=T.envMapRotation;w&&(p.envMap.value=w,Rs.copy(S),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),p.envMapRotation.value.setFromMatrix4(RS.makeRotationFromEuler(Rs)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,T,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function CS(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,w){const S=w.program;i.uniformBlockBinding(T,S)}function l(T,w){let S=s[T.id];S===void 0&&(_(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",p));const z=w.program;i.updateUBOMapping(T,z);const I=t.render.frame;o[T.id]!==I&&(d(T),o[T.id]=I)}function h(T){const w=u();T.__bindingPointIndex=w;const S=n.createBuffer(),z=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,z,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function u(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const w=s[T.id],S=T.uniforms,z=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let I=0,P=S.length;I<P;I++){const B=Array.isArray(S[I])?S[I]:[S[I]];for(let Q=0,y=B.length;Q<y;Q++){const E=B[Q];if(f(E,I,Q,z)===!0){const U=E.__offset,X=Array.isArray(E.value)?E.value:[E.value];let et=0;for(let at=0;at<X.length;at++){const Y=X[at],nt=x(Y);typeof Y=="number"||typeof Y=="boolean"?(E.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,U+et,E.__data)):Y.isMatrix3?(E.__data[0]=Y.elements[0],E.__data[1]=Y.elements[1],E.__data[2]=Y.elements[2],E.__data[3]=0,E.__data[4]=Y.elements[3],E.__data[5]=Y.elements[4],E.__data[6]=Y.elements[5],E.__data[7]=0,E.__data[8]=Y.elements[6],E.__data[9]=Y.elements[7],E.__data[10]=Y.elements[8],E.__data[11]=0):(Y.toArray(E.__data,et),et+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,w,S,z){const I=T.value,P=w+"_"+S;if(z[P]===void 0)return typeof I=="number"||typeof I=="boolean"?z[P]=I:z[P]=I.clone(),!0;{const B=z[P];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return z[P]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function _(T){const w=T.uniforms;let S=0;const z=16;for(let P=0,B=w.length;P<B;P++){const Q=Array.isArray(w[P])?w[P]:[w[P]];for(let y=0,E=Q.length;y<E;y++){const U=Q[y],X=Array.isArray(U.value)?U.value:[U.value];for(let et=0,at=X.length;et<at;et++){const Y=X[et],nt=x(Y),$=S%z,gt=$%nt.boundary,pt=$+gt;S+=gt,pt!==0&&z-pt<nt.storage&&(S+=z-pt),U.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=nt.storage}}}const I=S%z;return I>0&&(S+=z-I),T.__size=S,T.__cache={},this}function x(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function p(T){const w=T.target;w.removeEventListener("dispose",p);const S=r.indexOf(w.__bindingPointIndex);r.splice(S,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function m(){for(const T in s)n.deleteBuffer(s[T]);r=[],s={},o={}}return{bind:c,update:l,dispose:m}}class $n{constructor(t={}){const{canvas:e=vv(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const m=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=ms,this.toneMappingExposure=1;const w=this;let S=!1,z=0,I=0,P=null,B=-1,Q=null;const y=new Ue,E=new Ue;let U=null;const X=new ye(0);let et=0,at=e.width,Y=e.height,nt=1,$=null,gt=null;const pt=new Ue(0,0,at,Y),yt=new Ue(0,0,at,Y);let Ut=!1;const Vt=new Au;let rt=!1,dt=!1;const Mt=new Ge,O=new Ge,ct=new Z,ot=new Ue,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function it(){return P===null?nt:1}let g=i;function A(R,K){return e.getContext(R,K)}try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_u}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Et,!1),g===null){const K="webgl2";if(g=A(K,R),g===null)throw A(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let L,F,N,q,J,M,v,C,j,k,V,ut,lt,_t,Rt,ft,xt,It,Nt,Pt,Yt,Ft,jt,G;function vt(){L=new FM(g),L.init(),Ft=new MS(g,L),F=new CM(g,L,t,Ft),N=new vS(g),F.reverseDepthBuffer&&N.buffers.depth.setReversed(!0),q=new zM(g),J=new iS,M=new yS(g,L,N,J,F,Ft,q),v=new LM(w),C=new NM(w),j=new qv(g),jt=new RM(g,j),k=new OM(g,j,q,jt),V=new HM(g,k,j,q),Nt=new GM(g,F,M),ft=new IM(J),ut=new nS(w,v,C,L,F,jt,ft),lt=new PS(w,J),_t=new oS,Rt=new hS(L),It=new AM(w,v,C,N,V,d,c),xt=new gS(w,V,F),G=new CS(g,q,F,N),Pt=new PM(g,L,q),Yt=new BM(g,L,q),q.programs=ut.programs,w.capabilities=F,w.extensions=L,w.properties=J,w.renderLists=_t,w.shadowMap=xt,w.state=N,w.info=q}vt();const st=new AS(w,g);this.xr=st,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const R=L.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=L.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(R){R!==void 0&&(nt=R,this.setSize(at,Y,!1))},this.getSize=function(R){return R.set(at,Y)},this.setSize=function(R,K,D=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=R,Y=K,e.width=Math.floor(R*nt),e.height=Math.floor(K*nt),D===!0&&(e.style.width=R+"px",e.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(at*nt,Y*nt).floor()},this.setDrawingBufferSize=function(R,K,D){at=R,Y=K,nt=D,e.width=Math.floor(R*D),e.height=Math.floor(K*D),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,K,D,W){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,K,D,W),N.viewport(y.copy(pt).multiplyScalar(nt).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,K,D,W){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,K,D,W),N.scissor(E.copy(yt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(R){N.setScissorTest(Ut=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){gt=R},this.getClearColor=function(R){return R.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(R=!0,K=!0,D=!0){let W=0;if(R){let H=!1;if(P!==null){const mt=P.texture.format;H=mt===Su||mt===wu||mt===Mu}if(H){const mt=P.texture.type,Tt=mt===$i||mt===Bs||mt===dr||mt===To||mt===xu||mt===yu,Dt=It.getClearColor(),Lt=It.getClearAlpha(),Xt=Dt.r,Wt=Dt.g,Bt=Dt.b;Tt?(f[0]=Xt,f[1]=Wt,f[2]=Bt,f[3]=Lt,g.clearBufferuiv(g.COLOR,0,f)):(_[0]=Xt,_[1]=Wt,_[2]=Bt,_[3]=Lt,g.clearBufferiv(g.COLOR,0,_))}else W|=g.COLOR_BUFFER_BIT}K&&(W|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),D&&(W|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),_t.dispose(),Rt.dispose(),J.dispose(),v.dispose(),C.dispose(),V.dispose(),jt.dispose(),G.dispose(),ut.dispose(),st.dispose(),st.removeEventListener("sessionstart",ge),st.removeEventListener("sessionend",Re),pe.stop()};function tt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=q.autoReset,K=xt.enabled,D=xt.autoUpdate,W=xt.needsUpdate,H=xt.type;vt(),q.autoReset=R,xt.enabled=K,xt.autoUpdate=D,xt.needsUpdate=W,xt.type=H}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Gt(R){const K=R.target;K.removeEventListener("dispose",Gt),Jt(K)}function Jt(R){ne(R),J.remove(R)}function ne(R){const K=J.get(R).programs;K!==void 0&&(K.forEach(function(D){ut.releaseProgram(D)}),R.isShaderMaterial&&ut.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,D,W,H,mt){K===null&&(K=ht);const Tt=H.isMesh&&H.matrixWorld.determinant()<0,Dt=re(R,K,D,W,H);N.setMaterial(W,Tt);let Lt=D.index,Xt=1;if(W.wireframe===!0){if(Lt=k.getWireframeAttribute(D),Lt===void 0)return;Xt=2}const Wt=D.drawRange,Bt=D.attributes.position;let Zt=Wt.start*Xt,ie=(Wt.start+Wt.count)*Xt;mt!==null&&(Zt=Math.max(Zt,mt.start*Xt),ie=Math.min(ie,(mt.start+mt.count)*Xt)),Lt!==null?(Zt=Math.max(Zt,0),ie=Math.min(ie,Lt.count)):Bt!=null&&(Zt=Math.max(Zt,0),ie=Math.min(ie,Bt.count));const le=ie-Zt;if(le<0||le===1/0)return;jt.setup(H,W,Dt,D,Lt);let _e,oe=Pt;if(Lt!==null&&(_e=j.get(Lt),oe=Yt,oe.setIndex(_e)),H.isMesh)W.wireframe===!0?(N.setLineWidth(W.wireframeLinewidth*it()),oe.setMode(g.LINES)):oe.setMode(g.TRIANGLES);else if(H.isLine){let $t=W.linewidth;$t===void 0&&($t=1),N.setLineWidth($t*it()),H.isLineSegments?oe.setMode(g.LINES):H.isLineLoop?oe.setMode(g.LINE_LOOP):oe.setMode(g.LINE_STRIP)}else H.isPoints?oe.setMode(g.POINTS):H.isSprite&&oe.setMode(g.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)oe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const $t=H._multiDrawStarts,be=H._multiDrawCounts,At=H._multiDrawCount,Te=Lt?j.get(Lt).bytesPerElement:1,Ae=J.get(W).currentProgram.getUniforms();for(let xe=0;xe<At;xe++)Ae.setValue(g,"_gl_DrawID",xe),oe.render($t[xe]/Te,be[xe])}else if(H.isInstancedMesh)oe.renderInstances(Zt,le,H.count);else if(D.isInstancedBufferGeometry){const $t=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,be=Math.min(D.instanceCount,$t);oe.renderInstances(Zt,le,be)}else oe.render(Zt,le)};function ee(R,K,D){R.transparent===!0&&R.side===ve&&R.forceSinglePass===!1?(R.side=Dn,R.needsUpdate=!0,$e(R,K,D),R.side=_s,R.needsUpdate=!0,$e(R,K,D),R.side=ve):$e(R,K,D)}this.compile=function(R,K,D=null){D===null&&(D=R),p=Rt.get(D),p.init(K),T.push(p),D.traverseVisible(function(H){H.isLight&&H.layers.test(K.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),R!==D&&R.traverseVisible(function(H){H.isLight&&H.layers.test(K.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const W=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const mt=H.material;if(mt)if(Array.isArray(mt))for(let Tt=0;Tt<mt.length;Tt++){const Dt=mt[Tt];ee(Dt,D,H),W.add(Dt)}else ee(mt,D,H),W.add(mt)}),T.pop(),p=null,W},this.compileAsync=function(R,K,D=null){const W=this.compile(R,K,D);return new Promise(H=>{function mt(){if(W.forEach(function(Tt){J.get(Tt).currentProgram.isReady()&&W.delete(Tt)}),W.size===0){H(R);return}setTimeout(mt,10)}L.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let se=null;function ce(R){se&&se(R)}function ge(){pe.stop()}function Re(){pe.start()}const pe=new xp;pe.setAnimationLoop(ce),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(R){se=R,st.setAnimationLoop(R),R===null?pe.stop():pe.start()},st.addEventListener("sessionstart",ge),st.addEventListener("sessionend",Re),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(K),K=st.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,K,P),p=Rt.get(R,T.length),p.init(K),T.push(p),O.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Vt.setFromProjectionMatrix(O),dt=this.localClippingEnabled,rt=ft.init(this.clippingPlanes,dt),x=_t.get(R,m.length),x.init(),m.push(x),st.enabled===!0&&st.isPresenting===!0){const mt=w.xr.getDepthSensingMesh();mt!==null&&Ne(mt,K,-1/0,w.sortObjects)}Ne(R,K,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort($,gt),bt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,bt&&It.addToRenderList(x,R),this.info.render.frame++,rt===!0&&ft.beginShadows();const D=p.state.shadowsArray;xt.render(D,R,K),rt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,H=x.transmissive;if(p.setupLights(),K.isArrayCamera){const mt=K.cameras;if(H.length>0)for(let Tt=0,Dt=mt.length;Tt<Dt;Tt++){const Lt=mt[Tt];He(W,H,R,Lt)}bt&&It.render(R);for(let Tt=0,Dt=mt.length;Tt<Dt;Tt++){const Lt=mt[Tt];Me(x,R,Lt,Lt.viewport)}}else H.length>0&&He(W,H,R,K),bt&&It.render(R),Me(x,R,K);P!==null&&(M.updateMultisampleRenderTarget(P),M.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(w,R,K),jt.resetDefaultState(),B=-1,Q=null,T.pop(),T.length>0?(p=T[T.length-1],rt===!0&&ft.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Ne(R,K,D,W){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)D=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){W&&ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(O);const Tt=V.update(R),Dt=R.material;Dt.visible&&x.push(R,Tt,Dt,D,ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const Tt=V.update(R),Dt=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ot.copy(R.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ot.copy(Tt.boundingSphere.center)),ot.applyMatrix4(R.matrixWorld).applyMatrix4(O)),Array.isArray(Dt)){const Lt=Tt.groups;for(let Xt=0,Wt=Lt.length;Xt<Wt;Xt++){const Bt=Lt[Xt],Zt=Dt[Bt.materialIndex];Zt&&Zt.visible&&x.push(R,Tt,Zt,D,ot.z,Bt)}}else Dt.visible&&x.push(R,Tt,Dt,D,ot.z,null)}}const mt=R.children;for(let Tt=0,Dt=mt.length;Tt<Dt;Tt++)Ne(mt[Tt],K,D,W)}function Me(R,K,D,W){const H=R.opaque,mt=R.transmissive,Tt=R.transparent;p.setupLightsView(D),rt===!0&&ft.setGlobalState(w.clippingPlanes,D),W&&N.viewport(y.copy(W)),H.length>0&&we(H,K,D),mt.length>0&&we(mt,K,D),Tt.length>0&&we(Tt,K,D),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function He(R,K,D,W){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new zs(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?yr:$i,minFilter:Ns,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const mt=p.state.transmissionRenderTarget[W.id],Tt=W.viewport||y;mt.setSize(Tt.z,Tt.w);const Dt=w.getRenderTarget();w.setRenderTarget(mt),w.getClearColor(X),et=w.getClearAlpha(),et<1&&w.setClearColor(16777215,.5),w.clear(),bt&&It.render(D);const Lt=w.toneMapping;w.toneMapping=ms;const Xt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),rt===!0&&ft.setGlobalState(w.clippingPlanes,W),we(R,D,W),M.updateMultisampleRenderTarget(mt),M.updateRenderTargetMipmap(mt),L.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Bt=0,Zt=K.length;Bt<Zt;Bt++){const ie=K[Bt],le=ie.object,_e=ie.geometry,oe=ie.material,$t=ie.group;if(oe.side===ve&&le.layers.test(W.layers)){const be=oe.side;oe.side=Dn,oe.needsUpdate=!0,Xe(le,D,W,_e,oe,$t),oe.side=be,oe.needsUpdate=!0,Wt=!0}}Wt===!0&&(M.updateMultisampleRenderTarget(mt),M.updateRenderTargetMipmap(mt))}w.setRenderTarget(Dt),w.setClearColor(X,et),Xt!==void 0&&(W.viewport=Xt),w.toneMapping=Lt}function we(R,K,D){const W=K.isScene===!0?K.overrideMaterial:null;for(let H=0,mt=R.length;H<mt;H++){const Tt=R[H],Dt=Tt.object,Lt=Tt.geometry,Xt=W===null?Tt.material:W,Wt=Tt.group;Dt.layers.test(D.layers)&&Xe(Dt,K,D,Lt,Xt,Wt)}}function Xe(R,K,D,W,H,mt){R.onBeforeRender(w,K,D,W,H,mt),R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(w,K,D,W,R,mt),H.transparent===!0&&H.side===ve&&H.forceSinglePass===!1?(H.side=Dn,H.needsUpdate=!0,w.renderBufferDirect(D,K,W,H,R,mt),H.side=_s,H.needsUpdate=!0,w.renderBufferDirect(D,K,W,H,R,mt),H.side=ve):w.renderBufferDirect(D,K,W,H,R,mt),R.onAfterRender(w,K,D,W,H,mt)}function $e(R,K,D){K.isScene!==!0&&(K=ht);const W=J.get(R),H=p.state.lights,mt=p.state.shadowsArray,Tt=H.state.version,Dt=ut.getParameters(R,H.state,mt,K,D),Lt=ut.getProgramCacheKey(Dt);let Xt=W.programs;W.environment=R.isMeshStandardMaterial?K.environment:null,W.fog=K.fog,W.envMap=(R.isMeshStandardMaterial?C:v).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Gt),Xt=new Map,W.programs=Xt);let Wt=Xt.get(Lt);if(Wt!==void 0){if(W.currentProgram===Wt&&W.lightsStateVersion===Tt)return Ct(R,Dt),Wt}else Dt.uniforms=ut.getUniforms(R),R.onBeforeCompile(Dt,w),Wt=ut.acquireProgram(Dt,Lt),Xt.set(Lt,Wt),W.uniforms=Dt.uniforms;const Bt=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=ft.uniform),Ct(R,Dt),W.needsLights=Ee(R),W.lightsStateVersion=Tt,W.needsLights&&(Bt.ambientLightColor.value=H.state.ambient,Bt.lightProbe.value=H.state.probe,Bt.directionalLights.value=H.state.directional,Bt.directionalLightShadows.value=H.state.directionalShadow,Bt.spotLights.value=H.state.spot,Bt.spotLightShadows.value=H.state.spotShadow,Bt.rectAreaLights.value=H.state.rectArea,Bt.ltc_1.value=H.state.rectAreaLTC1,Bt.ltc_2.value=H.state.rectAreaLTC2,Bt.pointLights.value=H.state.point,Bt.pointLightShadows.value=H.state.pointShadow,Bt.hemisphereLights.value=H.state.hemi,Bt.directionalShadowMap.value=H.state.directionalShadowMap,Bt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Bt.spotShadowMap.value=H.state.spotShadowMap,Bt.spotLightMatrix.value=H.state.spotLightMatrix,Bt.spotLightMap.value=H.state.spotLightMap,Bt.pointShadowMap.value=H.state.pointShadowMap,Bt.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Wt,W.uniformsList=null,Wt}function Un(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=pa.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Ct(R,K){const D=J.get(R);D.outputColorSpace=K.outputColorSpace,D.batching=K.batching,D.batchingColor=K.batchingColor,D.instancing=K.instancing,D.instancingColor=K.instancingColor,D.instancingMorph=K.instancingMorph,D.skinning=K.skinning,D.morphTargets=K.morphTargets,D.morphNormals=K.morphNormals,D.morphColors=K.morphColors,D.morphTargetsCount=K.morphTargetsCount,D.numClippingPlanes=K.numClippingPlanes,D.numIntersection=K.numClipIntersection,D.vertexAlphas=K.vertexAlphas,D.vertexTangents=K.vertexTangents,D.toneMapping=K.toneMapping}function re(R,K,D,W,H){K.isScene!==!0&&(K=ht),M.resetTextureUnits();const mt=K.fog,Tt=W.isMeshStandardMaterial?K.environment:null,Dt=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ys,Lt=(W.isMeshStandardMaterial?C:v).get(W.envMap||Tt),Xt=W.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Wt=!!D.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Bt=!!D.morphAttributes.position,Zt=!!D.morphAttributes.normal,ie=!!D.morphAttributes.color;let le=ms;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(le=w.toneMapping);const _e=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,oe=_e!==void 0?_e.length:0,$t=J.get(W),be=p.state.lights;if(rt===!0&&(dt===!0||R!==Q)){const Be=R===Q&&W.id===B;ft.setState(W,R,Be)}let At=!1;W.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==be.state.version||$t.outputColorSpace!==Dt||H.isBatchedMesh&&$t.batching===!1||!H.isBatchedMesh&&$t.batching===!0||H.isBatchedMesh&&$t.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&$t.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&$t.instancing===!1||!H.isInstancedMesh&&$t.instancing===!0||H.isSkinnedMesh&&$t.skinning===!1||!H.isSkinnedMesh&&$t.skinning===!0||H.isInstancedMesh&&$t.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$t.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&$t.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&$t.instancingMorph===!1&&H.morphTexture!==null||$t.envMap!==Lt||W.fog===!0&&$t.fog!==mt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==ft.numPlanes||$t.numIntersection!==ft.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==Wt||$t.morphTargets!==Bt||$t.morphNormals!==Zt||$t.morphColors!==ie||$t.toneMapping!==le||$t.morphTargetsCount!==oe)&&(At=!0):(At=!0,$t.__version=W.version);let Te=$t.currentProgram;At===!0&&(Te=$e(W,K,H));let Ae=!1,xe=!1,tn=!1;const Se=Te.getUniforms(),qe=$t.uniforms;if(N.useProgram(Te.program)&&(Ae=!0,xe=!0,tn=!0),W.id!==B&&(B=W.id,xe=!0),Ae||Q!==R){F.reverseDepthBuffer?(Mt.copy(R.projectionMatrix),yv(Mt),Mv(Mt),Se.setValue(g,"projectionMatrix",Mt)):Se.setValue(g,"projectionMatrix",R.projectionMatrix),Se.setValue(g,"viewMatrix",R.matrixWorldInverse);const Be=Se.map.cameraPosition;Be!==void 0&&Be.setValue(g,ct.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&Se.setValue(g,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Se.setValue(g,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,xe=!0,tn=!0)}if(H.isSkinnedMesh){Se.setOptional(g,H,"bindMatrix"),Se.setOptional(g,H,"bindMatrixInverse");const Be=H.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Se.setValue(g,"boneTexture",Be.boneTexture,M))}H.isBatchedMesh&&(Se.setOptional(g,H,"batchingTexture"),Se.setValue(g,"batchingTexture",H._matricesTexture,M),Se.setOptional(g,H,"batchingIdTexture"),Se.setValue(g,"batchingIdTexture",H._indirectTexture,M),Se.setOptional(g,H,"batchingColorTexture"),H._colorsTexture!==null&&Se.setValue(g,"batchingColorTexture",H._colorsTexture,M));const Mn=D.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Nt.update(H,D,Te),(xe||$t.receiveShadow!==H.receiveShadow)&&($t.receiveShadow=H.receiveShadow,Se.setValue(g,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(qe.envMap.value=Lt,qe.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&K.environment!==null&&(qe.envMapIntensity.value=K.environmentIntensity),xe&&(Se.setValue(g,"toneMappingExposure",w.toneMappingExposure),$t.needsLights&&me(qe,tn),mt&&W.fog===!0&&lt.refreshFogUniforms(qe,mt),lt.refreshMaterialUniforms(qe,W,nt,Y,p.state.transmissionRenderTarget[R.id]),pa.upload(g,Un($t),qe,M)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(pa.upload(g,Un($t),qe,M),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Se.setValue(g,"center",H.center),Se.setValue(g,"modelViewMatrix",H.modelViewMatrix),Se.setValue(g,"normalMatrix",H.normalMatrix),Se.setValue(g,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Be=W.uniformsGroups;for(let cn=0,Nn=Be.length;cn<Nn;cn++){const hn=Be[cn];G.update(hn,Te),G.bind(hn,Te)}}return Te}function me(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Ee(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,K,D){J.get(R.texture).__webglTexture=K,J.get(R.depthTexture).__webglTexture=D;const W=J.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=D===void 0,W.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){const D=J.get(R);D.__webglFramebuffer=K,D.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,D=0){P=R,z=K,I=D;let W=!0,H=null,mt=!1,Tt=!1;if(R){const Lt=J.get(R);if(Lt.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(g.FRAMEBUFFER,null),W=!1;else if(Lt.__webglFramebuffer===void 0)M.setupRenderTarget(R);else if(Lt.__hasExternalTextures)M.rebindTextures(R,J.get(R.texture).__webglTexture,J.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Bt=R.depthTexture;if(Lt.__boundDepthTexture!==Bt){if(Bt!==null&&J.has(Bt)&&(R.width!==Bt.image.width||R.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Tt=!0);const Wt=J.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[K])?H=Wt[K][D]:H=Wt[K],mt=!0):R.samples>0&&M.useMultisampledRTT(R)===!1?H=J.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?H=Wt[D]:H=Wt,y.copy(R.viewport),E.copy(R.scissor),U=R.scissorTest}else y.copy(pt).multiplyScalar(nt).floor(),E.copy(yt).multiplyScalar(nt).floor(),U=Ut;if(N.bindFramebuffer(g.FRAMEBUFFER,H)&&W&&N.drawBuffers(R,H),N.viewport(y),N.scissor(E),N.setScissorTest(U),mt){const Lt=J.get(R.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+K,Lt.__webglTexture,D)}else if(Tt){const Lt=J.get(R.texture),Xt=K||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Lt.__webglTexture,D||0,Xt)}B=-1},this.readRenderTargetPixels=function(R,K,D,W,H,mt,Tt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Tt!==void 0&&(Dt=Dt[Tt]),Dt){N.bindFramebuffer(g.FRAMEBUFFER,Dt);try{const Lt=R.texture,Xt=Lt.format,Wt=Lt.type;if(!F.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-W&&D>=0&&D<=R.height-H&&g.readPixels(K,D,W,H,Ft.convert(Xt),Ft.convert(Wt),mt)}finally{const Lt=P!==null?J.get(P).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(R,K,D,W,H,mt,Tt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Tt!==void 0&&(Dt=Dt[Tt]),Dt){const Lt=R.texture,Xt=Lt.format,Wt=Lt.type;if(!F.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-W&&D>=0&&D<=R.height-H){N.bindFramebuffer(g.FRAMEBUFFER,Dt);const Bt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Bt),g.bufferData(g.PIXEL_PACK_BUFFER,mt.byteLength,g.STREAM_READ),g.readPixels(K,D,W,H,Ft.convert(Xt),Ft.convert(Wt),0);const Zt=P!==null?J.get(P).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Zt);const ie=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await xv(g,ie,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Bt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,mt),g.deleteBuffer(Bt),g.deleteSync(ie),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,D=0){R.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);const W=Math.pow(2,-D),H=Math.floor(R.image.width*W),mt=Math.floor(R.image.height*W),Tt=K!==null?K.x:0,Dt=K!==null?K.y:0;M.setTexture2D(R,0),g.copyTexSubImage2D(g.TEXTURE_2D,D,0,0,Tt,Dt,H,mt),N.unbindTexture()},this.copyTextureToTexture=function(R,K,D=null,W=null,H=0){R.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1],K=arguments[2],H=arguments[3]||0,D=null);let mt,Tt,Dt,Lt,Xt,Wt;D!==null?(mt=D.max.x-D.min.x,Tt=D.max.y-D.min.y,Dt=D.min.x,Lt=D.min.y):(mt=R.image.width,Tt=R.image.height,Dt=0,Lt=0),W!==null?(Xt=W.x,Wt=W.y):(Xt=0,Wt=0);const Bt=Ft.convert(K.format),Zt=Ft.convert(K.type);M.setTexture2D(K,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,K.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,K.unpackAlignment);const ie=g.getParameter(g.UNPACK_ROW_LENGTH),le=g.getParameter(g.UNPACK_IMAGE_HEIGHT),_e=g.getParameter(g.UNPACK_SKIP_PIXELS),oe=g.getParameter(g.UNPACK_SKIP_ROWS),$t=g.getParameter(g.UNPACK_SKIP_IMAGES),be=R.isCompressedTexture?R.mipmaps[H]:R.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,be.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,be.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Dt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Lt),R.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,H,Xt,Wt,mt,Tt,Bt,Zt,be.data):R.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,H,Xt,Wt,be.width,be.height,Bt,be.data):g.texSubImage2D(g.TEXTURE_2D,H,Xt,Wt,mt,Tt,Bt,Zt,be),g.pixelStorei(g.UNPACK_ROW_LENGTH,ie),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,le),g.pixelStorei(g.UNPACK_SKIP_PIXELS,_e),g.pixelStorei(g.UNPACK_SKIP_ROWS,oe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,$t),H===0&&K.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(R,K,D=null,W=null,H=0){R.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,W=arguments[1]||null,R=arguments[2],K=arguments[3],H=arguments[4]||0);let mt,Tt,Dt,Lt,Xt,Wt,Bt,Zt,ie;const le=R.isCompressedTexture?R.mipmaps[H]:R.image;D!==null?(mt=D.max.x-D.min.x,Tt=D.max.y-D.min.y,Dt=D.max.z-D.min.z,Lt=D.min.x,Xt=D.min.y,Wt=D.min.z):(mt=le.width,Tt=le.height,Dt=le.depth,Lt=0,Xt=0,Wt=0),W!==null?(Bt=W.x,Zt=W.y,ie=W.z):(Bt=0,Zt=0,ie=0);const _e=Ft.convert(K.format),oe=Ft.convert(K.type);let $t;if(K.isData3DTexture)M.setTexture3D(K,0),$t=g.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)M.setTexture2DArray(K,0),$t=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,K.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,K.unpackAlignment);const be=g.getParameter(g.UNPACK_ROW_LENGTH),At=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Te=g.getParameter(g.UNPACK_SKIP_PIXELS),Ae=g.getParameter(g.UNPACK_SKIP_ROWS),xe=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,le.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,le.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Lt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Xt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Wt),R.isDataTexture||R.isData3DTexture?g.texSubImage3D($t,H,Bt,Zt,ie,mt,Tt,Dt,_e,oe,le.data):K.isCompressedArrayTexture?g.compressedTexSubImage3D($t,H,Bt,Zt,ie,mt,Tt,Dt,_e,le.data):g.texSubImage3D($t,H,Bt,Zt,ie,mt,Tt,Dt,_e,oe,le),g.pixelStorei(g.UNPACK_ROW_LENGTH,be),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,At),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ae),g.pixelStorei(g.UNPACK_SKIP_IMAGES,xe),H===0&&K.generateMipmaps&&g.generateMipmap($t),N.unbindTexture()},this.initRenderTarget=function(R){J.get(R).__webglFramebuffer===void 0&&M.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?M.setTextureCube(R,0):R.isData3DTexture?M.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?M.setTexture2DArray(R,0):M.setTexture2D(R,0),N.unbindTexture()},this.resetState=function(){z=0,I=0,P=null,N.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Eu?"display-p3":"srgb",e.unpackColorSpace=Ce.workingColorSpace===Va?"display-p3":"srgb"}}class jn extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Aa extends Io{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ed=new Ge,kl=new dp,Zr=new Wa,Jr=new Z;class ma extends ln{constructor(t=new yn,e=new Aa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=o,t.ray.intersectsSphere(Zr)===!1)return;Ed.copy(s).invert(),kl.copy(t.ray).applyMatrix4(Ed);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let _=d,x=f;_<x;_++){const p=l.getX(_);Jr.fromBufferAttribute(u,p),bd(Jr,p,c,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let _=d,x=f;_<x;_++)Jr.fromBufferAttribute(u,_),bd(Jr,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function bd(n,t,e,i,s,o,r){const a=kl.distanceSqToPoint(n);if(a<e){const c=new Z;kl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new kt:new Z);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new Z,s=[],o=[],r=[],a=new Z,c=new Ge;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new Z)}o[0]=new Z,r[0]=new Z;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(rn(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,_))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(rn(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let _=1;_<=t;_++)o[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pu extends Ci{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new kt){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class IS extends Pu{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Cu(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Qr=new Z,zc=new Cu,Gc=new Cu,Hc=new Cu;class LS extends Ci{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new Z){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Qr.subVectors(s[0],s[1]).add(s[0]),l=Qr);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Qr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),_<1e-4&&(_=x),p<1e-4&&(p=x),zc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,x,p),Gc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,x,p),Hc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,x,p)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Gc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Hc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(zc.calc(c),Gc.calc(c),Hc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Td(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function DS(n,t){const e=1-n;return e*e*t}function US(n,t){return 2*(1-n)*n*t}function NS(n,t){return n*n*t}function nr(n,t,e,i){return DS(n,t)+US(n,e)+NS(n,i)}function FS(n,t){const e=1-n;return e*e*e*t}function OS(n,t){const e=1-n;return 3*e*e*n*t}function BS(n,t){return 3*(1-n)*n*n*t}function zS(n,t){return n*n*n*t}function ir(n,t,e,i,s){return FS(n,t)+OS(n,e)+BS(n,i)+zS(n,s)}class Tp extends Ci{constructor(t=new kt,e=new kt,i=new kt,s=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new kt){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ir(t,s.x,o.x,r.x,a.x),ir(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class GS extends Ci{constructor(t=new Z,e=new Z,i=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Z){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ir(t,s.x,o.x,r.x,a.x),ir(t,s.y,o.y,r.y,a.y),ir(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ap extends Ci{constructor(t=new kt,e=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new kt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new kt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class HS extends Ci{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rp extends Ci{constructor(t=new kt,e=new kt,i=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new kt){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(nr(t,s.x,o.x,r.x),nr(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kS extends Ci{constructor(t=new Z,e=new Z,i=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Z){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(nr(t,s.x,o.x,r.x),nr(t,s.y,o.y,r.y),nr(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pp extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new kt){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(Td(a,c.x,l.x,h.x,u.x),Td(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new kt().fromArray(s))}return this}}var Vl=Object.freeze({__proto__:null,ArcCurve:IS,CatmullRomCurve3:LS,CubicBezierCurve:Tp,CubicBezierCurve3:GS,EllipseCurve:Pu,LineCurve:Ap,LineCurve3:HS,QuadraticBezierCurve:Rp,QuadraticBezierCurve3:kS,SplineCurve:Pp});class VS extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Vl[s.type]().fromJSON(s))}return this}}class Wl extends VS{constructor(t){super(),this.type="Path",this.currentPoint=new kt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ap(this.currentPoint.clone(),new kt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Rp(this.currentPoint.clone(),new kt(t,e),new kt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Tp(this.currentPoint.clone(),new kt(t,e),new kt(i,s),new kt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Pp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new Pu(t,e,i,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class De extends yn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new Z,h=new kt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(a,3)),this.setAttribute("uv",new We(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class te extends yn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let _=0;const x=[],p=i/2;let m=0;T(),r===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function T(){const S=new Z,z=new Z;let I=0;const P=(e-t)/i;for(let B=0;B<=o;B++){const Q=[],y=B/o,E=y*(e-t)+t;for(let U=0;U<=s;U++){const X=U/s,et=X*c+a,at=Math.sin(et),Y=Math.cos(et);z.x=E*at,z.y=-y*i+p,z.z=E*Y,u.push(z.x,z.y,z.z),S.set(at,P,Y).normalize(),d.push(S.x,S.y,S.z),f.push(X,1-y),Q.push(_++)}x.push(Q)}for(let B=0;B<s;B++)for(let Q=0;Q<o;Q++){const y=x[Q][B],E=x[Q+1][B],U=x[Q+1][B+1],X=x[Q][B+1];t>0&&(h.push(y,E,X),I+=3),e>0&&(h.push(E,U,X),I+=3)}l.addGroup(m,I,0),m+=I}function w(S){const z=_,I=new kt,P=new Z;let B=0;const Q=S===!0?t:e,y=S===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),_++;const E=_;for(let U=0;U<=s;U++){const et=U/s*c+a,at=Math.cos(et),Y=Math.sin(et);P.x=Q*Y,P.y=p*y,P.z=Q*at,u.push(P.x,P.y,P.z),d.push(0,y,0),I.x=at*.5+.5,I.y=Y*.5*y+.5,f.push(I.x,I.y),_++}for(let U=0;U<s;U++){const X=z+U,et=E+U;S===!0?h.push(et,et+1,X):h.push(et+1,et,X),B+=3}l.addGroup(m,B,S===!0?1:2),m+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wi extends te{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new wi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xn extends Wl{constructor(t){super(t),this.uuid=ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Wl().fromJSON(s))}return this}}const WS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=Cp(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,f;if(i&&(o=jS(n,t,o,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let _=e;_<s;_+=e)u=n[_],d=n[_+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return mr(o,r,e,a,c,f,0),r}};function Cp(n,t,e,i,s){let o,r;if(s===r1(n,t,e,i)>0)for(o=t;o<e;o+=i)r=Ad(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=Ad(o,n[o],n[o+1],r);return r&&Ya(r,r.next)&&(_r(r),r=r.next),r}function Gs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ya(e,e.next)||Ye(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function mr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&t1(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?qS(n,i,s,o):XS(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),_r(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=YS(Gs(n),t,e),mr(n,t,e,i,s,o,2)):r===2&&$S(n,t,e,i,s,o):mr(Gs(n),t,e,i,s,o,1);break}}}function XS(n){const t=n.prev,e=n,i=n.next;if(Ye(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&lo(s,a,o,c,r,l,_.x,_.y)&&Ye(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function qS(n,t,e,i){const s=n.prev,o=n,r=n.next;if(Ye(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,_=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=Xl(f,_,t,e,i),T=Xl(x,p,t,e,i);let w=n.prevZ,S=n.nextZ;for(;w&&w.z>=m&&S&&S.z<=T;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==r&&lo(a,h,c,u,l,d,w.x,w.y)&&Ye(w.prev,w,w.next)>=0||(w=w.prevZ,S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==r&&lo(a,h,c,u,l,d,S.x,S.y)&&Ye(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==r&&lo(a,h,c,u,l,d,w.x,w.y)&&Ye(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;S&&S.z<=T;){if(S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==r&&lo(a,h,c,u,l,d,S.x,S.y)&&Ye(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function YS(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Ya(s,o)&&Ip(s,i,i.next,o)&&gr(s,o)&&gr(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),_r(i),_r(i.next),i=n=o),i=i.next}while(i!==n);return Gs(i)}function $S(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&i1(r,a)){let c=Lp(r,a);r=Gs(r,r.next),c=Gs(c,c.next),mr(r,t,e,i,s,o,0),mr(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function jS(n,t,e,i){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=Cp(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(n1(l));for(s.sort(KS),o=0;o<s.length;o++)e=ZS(s[o],e);return e}function KS(n,t){return n.x-t.x}function ZS(n,t){const e=JS(n,t);if(!e)return t;const i=Lp(e,n);return Gs(i,i.next),Gs(e,e.next)}function JS(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&lo(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),gr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&QS(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function QS(n,t){return Ye(n.prev,n,t.prev)<0&&Ye(t.next,n,n.next)<0}function t1(n,t,e,i){let s=n;do s.z===0&&(s.z=Xl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,e1(s)}function e1(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function Xl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function n1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function lo(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function i1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!s1(n,t)&&(gr(n,t)&&gr(t,n)&&o1(n,t)&&(Ye(n.prev,n,t.prev)||Ye(n,t.prev,t))||Ya(n,t)&&Ye(n.prev,n,n.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ya(n,t){return n.x===t.x&&n.y===t.y}function Ip(n,t,e,i){const s=ea(Ye(n,t,e)),o=ea(Ye(n,t,i)),r=ea(Ye(e,i,n)),a=ea(Ye(e,i,t));return!!(s!==o&&r!==a||s===0&&ta(n,e,t)||o===0&&ta(n,i,t)||r===0&&ta(e,n,i)||a===0&&ta(e,t,i))}function ta(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ea(n){return n>0?1:n<0?-1:0}function s1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ip(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function gr(n,t){return Ye(n.prev,n,n.next)<0?Ye(n,t,n.next)>=0&&Ye(n,n.prev,t)>=0:Ye(n,t,n.prev)<0||Ye(n,n.next,t)<0}function o1(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Lp(n,t){const e=new ql(n.i,n.x,n.y),i=new ql(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Ad(n,t,e,i){const s=new ql(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _r(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ql(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function r1(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class xo{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return xo.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];Rd(t),Pd(i,t);let r=t.length;e.forEach(Rd);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Pd(i,e[c]);const a=WS.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Rd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Pd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class li extends yn{constructor(t=new Xn([new kt(.5,.5),new kt(-.5,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new We(s,3)),this.setAttribute("uv",new We(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:a1;let w,S=!1,z,I,P,B;m&&(w=m.getSpacedPoints(h),S=!0,d=!1,z=m.computeFrenetFrames(h,!1),I=new Z,P=new Z,B=new Z),d||(p=0,f=0,_=0,x=0);const Q=a.extractPoints(l);let y=Q.shape;const E=Q.holes;if(!xo.isClockWise(y)){y=y.reverse();for(let it=0,g=E.length;it<g;it++){const A=E[it];xo.isClockWise(A)&&(E[it]=A.reverse())}}const X=xo.triangulateShape(y,E),et=y;for(let it=0,g=E.length;it<g;it++){const A=E[it];y=y.concat(A)}function at(it,g,A){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(g,A)}const Y=y.length,nt=X.length;function $(it,g,A){let L,F,N;const q=it.x-g.x,J=it.y-g.y,M=A.x-it.x,v=A.y-it.y,C=q*q+J*J,j=q*v-J*M;if(Math.abs(j)>Number.EPSILON){const k=Math.sqrt(C),V=Math.sqrt(M*M+v*v),ut=g.x-J/k,lt=g.y+q/k,_t=A.x-v/V,Rt=A.y+M/V,ft=((_t-ut)*v-(Rt-lt)*M)/(q*v-J*M);L=ut+q*ft-it.x,F=lt+J*ft-it.y;const xt=L*L+F*F;if(xt<=2)return new kt(L,F);N=Math.sqrt(xt/2)}else{let k=!1;q>Number.EPSILON?M>Number.EPSILON&&(k=!0):q<-Number.EPSILON?M<-Number.EPSILON&&(k=!0):Math.sign(J)===Math.sign(v)&&(k=!0),k?(L=-J,F=q,N=Math.sqrt(C)):(L=q,F=J,N=Math.sqrt(C/2))}return new kt(L/N,F/N)}const gt=[];for(let it=0,g=et.length,A=g-1,L=it+1;it<g;it++,A++,L++)A===g&&(A=0),L===g&&(L=0),gt[it]=$(et[it],et[A],et[L]);const pt=[];let yt,Ut=gt.concat();for(let it=0,g=E.length;it<g;it++){const A=E[it];yt=[];for(let L=0,F=A.length,N=F-1,q=L+1;L<F;L++,N++,q++)N===F&&(N=0),q===F&&(q=0),yt[L]=$(A[L],A[N],A[q]);pt.push(yt),Ut=Ut.concat(yt)}for(let it=0;it<p;it++){const g=it/p,A=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let F=0,N=et.length;F<N;F++){const q=at(et[F],gt[F],L);O(q.x,q.y,-A)}for(let F=0,N=E.length;F<N;F++){const q=E[F];yt=pt[F];for(let J=0,M=q.length;J<M;J++){const v=at(q[J],yt[J],L);O(v.x,v.y,-A)}}}const Vt=_+x;for(let it=0;it<Y;it++){const g=d?at(y[it],Ut[it],Vt):y[it];S?(P.copy(z.normals[0]).multiplyScalar(g.x),I.copy(z.binormals[0]).multiplyScalar(g.y),B.copy(w[0]).add(P).add(I),O(B.x,B.y,B.z)):O(g.x,g.y,0)}for(let it=1;it<=h;it++)for(let g=0;g<Y;g++){const A=d?at(y[g],Ut[g],Vt):y[g];S?(P.copy(z.normals[it]).multiplyScalar(A.x),I.copy(z.binormals[it]).multiplyScalar(A.y),B.copy(w[it]).add(P).add(I),O(B.x,B.y,B.z)):O(A.x,A.y,u/h*it)}for(let it=p-1;it>=0;it--){const g=it/p,A=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let F=0,N=et.length;F<N;F++){const q=at(et[F],gt[F],L);O(q.x,q.y,u+A)}for(let F=0,N=E.length;F<N;F++){const q=E[F];yt=pt[F];for(let J=0,M=q.length;J<M;J++){const v=at(q[J],yt[J],L);S?O(v.x,v.y+w[h-1].y,w[h-1].x+A):O(v.x,v.y,u+A)}}}rt(),dt();function rt(){const it=s.length/3;if(d){let g=0,A=Y*g;for(let L=0;L<nt;L++){const F=X[L];ct(F[2]+A,F[1]+A,F[0]+A)}g=h+p*2,A=Y*g;for(let L=0;L<nt;L++){const F=X[L];ct(F[0]+A,F[1]+A,F[2]+A)}}else{for(let g=0;g<nt;g++){const A=X[g];ct(A[2],A[1],A[0])}for(let g=0;g<nt;g++){const A=X[g];ct(A[0]+Y*h,A[1]+Y*h,A[2]+Y*h)}}i.addGroup(it,s.length/3-it,0)}function dt(){const it=s.length/3;let g=0;Mt(et,g),g+=et.length;for(let A=0,L=E.length;A<L;A++){const F=E[A];Mt(F,g),g+=F.length}i.addGroup(it,s.length/3-it,1)}function Mt(it,g){let A=it.length;for(;--A>=0;){const L=A;let F=A-1;F<0&&(F=it.length-1);for(let N=0,q=h+p*2;N<q;N++){const J=Y*N,M=Y*(N+1),v=g+L+J,C=g+F+J,j=g+F+M,k=g+L+M;ot(v,C,j,k)}}}function O(it,g,A){c.push(it),c.push(g),c.push(A)}function ct(it,g,A){ht(it),ht(g),ht(A);const L=s.length/3,F=T.generateTopUV(i,s,L-3,L-2,L-1);bt(F[0]),bt(F[1]),bt(F[2])}function ot(it,g,A,L){ht(it),ht(g),ht(L),ht(g),ht(A),ht(L);const F=s.length/3,N=T.generateSideWallUV(i,s,F-6,F-3,F-2,F-1);bt(N[0]),bt(N[1]),bt(N[3]),bt(N[1]),bt(N[2]),bt(N[3])}function ht(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function bt(it){o.push(it.x),o.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return c1(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vl[s.type]().fromJSON(s)),new li(i,t.options)}}const a1={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new kt(o,r),new kt(a,c),new kt(l,h)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],x=t[o*3],p=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new kt(r,1-c),new kt(l,1-u),new kt(d,1-_),new kt(x,1-m)]:[new kt(a,1-c),new kt(h,1-u),new kt(f,1-_),new kt(p,1-m)]}};function c1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wt extends yn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new Z,d=new Z,f=[],_=[],x=[],p=[];for(let m=0;m<=i;m++){const T=[],w=m/i;let S=0;m===0&&r===0?S=.5/e:m===i&&c===Math.PI&&(S=-.5/e);for(let z=0;z<=e;z++){const I=z/e;u.x=-t*Math.cos(s+I*o)*Math.sin(r+w*a),u.y=t*Math.cos(r+w*a),u.z=t*Math.sin(s+I*o)*Math.sin(r+w*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(I+S,1-w),T.push(l++)}h.push(T)}for(let m=0;m<i;m++)for(let T=0;T<e;T++){const w=h[m][T+1],S=h[m][T],z=h[m+1][T],I=h[m+1][T+1];(m!==0||r>0)&&f.push(w,S,I),(m!==i-1||c<Math.PI)&&f.push(S,z,I)}this.setIndex(f),this.setAttribute("position",new We(_,3)),this.setAttribute("normal",new We(x,3)),this.setAttribute("uv",new We(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Yi extends yn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new Z,u=new Z,d=new Z;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const x=_/s*o,p=f/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,p=(s+1)*(f-1)+_-1,m=(s+1)*(f-1)+_,T=(s+1)*f+_;r.push(x,p,T),r.push(p,m,T)}this.setIndex(r),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ot extends Io{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ap,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zt extends Ot{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Ra={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class l1{constructor(t,e,i){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const u1=new l1;class Do{constructor(t){this.manager=t!==void 0?t:u1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Do.DEFAULT_MATERIAL_NAME="__DEFAULT";const zi={};class h1 extends Error{constructor(t,e){super(t),this.response=e}}class d1 extends Do{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Ra.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(zi[t]!==void 0){zi[t].push({onLoad:e,onProgress:i,onError:s});return}zi[t]=[],zi[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=zi[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let x=0;const p=new ReadableStream({start(m){T();function T(){u.read().then(({done:w,value:S})=>{if(w)m.close();else{x+=S.byteLength;const z=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:f});for(let I=0,P=h.length;I<P;I++){const B=h[I];B.onProgress&&B.onProgress(z)}m.enqueue(S),T()}},w=>{m.error(w)})}}});return new Response(p)}else throw new h1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{Ra.add(t,l);const h=zi[t];delete zi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=zi[t];if(h===void 0)throw this.manager.itemError(t),l;delete zi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Dp extends Do{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Ra.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=pr("img");function c(){h(),Ra.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class Up extends Do{constructor(t){super(t)}load(t,e,i,s){const o=new Tu;o.colorSpace=ei;const r=new Dp(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function c(l){r.load(t[l],function(h){o.images[l]=h,a++,a===6&&(o.needsUpdate=!0,e&&e(o))},void 0,s)}for(let l=0;l<t.length;++l)c(l);return o}}class ui extends Do{constructor(t){super(t)}load(t,e,i,s){const o=new Cn,r=new Dp(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}}class Iu extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const kc=new Ge,Cd=new Z,Id=new Z;class Np{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cd),Id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Id),e.updateMatrixWorld(),kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ld=new Ge,Vo=new Z,Vc=new Z;class f1 extends Np{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new kt(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Vo.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vo),Vc.copy(i.position),Vc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Vc),i.updateMatrixWorld(),s.makeTranslation(-Vo.x,-Vo.y,-Vo.z),Ld.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}}class Zi extends Iu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new f1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class p1 extends Np{constructor(){super(new yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ji extends Iu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new p1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qi extends Iu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Dd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Dd(){return performance.now()}class m1{constructor(){this.type="ShapePath",this.color=new ye,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Wl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,o,r){return this.currentPath.bezierCurveTo(t,e,i,s,o,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const T=[];for(let w=0,S=m.length;w<S;w++){const z=m[w],I=new Xn;I.curves=z.curves,T.push(I)}return T}function i(m,T){const w=T.length;let S=!1;for(let z=w-1,I=0;I<w;z=I++){let P=T[z],B=T[I],Q=B.x-P.x,y=B.y-P.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(P=T[I],Q=-Q,B=T[z],y=-y),m.y<P.y||m.y>B.y)continue;if(m.y===P.y){if(m.x===P.x)return!0}else{const E=y*(m.x-P.x)-Q*(m.y-P.y);if(E===0)return!0;if(E<0)continue;S=!S}}else{if(m.y!==P.y)continue;if(B.x<=m.x&&m.x<=P.x||P.x<=m.x&&m.x<=B.x)return!0}}return S}const s=xo.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,c;const l=[];if(o.length===1)return a=o[0],c=new Xn,c.curves=a.curves,l.push(c),l;let h=!s(o[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,x;d[_]=void 0,f[_]=[];for(let m=0,T=o.length;m<T;m++)a=o[m],x=a.getPoints(),r=s(x),r=t?!r:r,r?(!h&&d[_]&&_++,d[_]={s:new Xn,p:x},d[_].s.curves=a.curves,h&&_++,f[_]=[]):f[_].push({h:a,p:x[0]});if(!d[0])return e(o);if(d.length>1){let m=!1,T=0;for(let w=0,S=d.length;w<S;w++)u[w]=[];for(let w=0,S=d.length;w<S;w++){const z=f[w];for(let I=0;I<z.length;I++){const P=z[I];let B=!0;for(let Q=0;Q<d.length;Q++)i(P.p,d[Q].p)&&(w!==Q&&T++,B?(B=!1,u[Q].push(P)):m=!0);B&&u[w].push(P)}}T>0&&m===!1&&(f=u)}let p;for(let m=0,T=d.length;m<T;m++){c=d[m].s,l.push(c),p=f[m];for(let w=0,S=p.length;w<S;w++)c.holes.push(p[w].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);class ts extends Do{constructor(t){super(t)}load(t,e,i,s){const o=this,r=new d1(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const c=o.parse(JSON.parse(a));e&&e(c)},i,s)}parse(t){return new g1(t)}}class g1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=_1(t,e,this.data);for(let o=0,r=s.length;o<r;o++)i.push(...s[o].toShapes());return i}}function _1(n,t,e){const i=Array.from(n),s=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,r=[];let a=0,c=0;for(let l=0;l<i.length;l++){const h=i[l];if(h===`
`)a=0,c-=o;else{const u=v1(h,s,a,c,e);a+=u.offsetX,r.push(u.path)}}return r}function v1(n,t,e,i,s){const o=s.glyphs[n]||s.glyphs["?"];if(!o){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const r=new m1;let a,c,l,h,u,d,f,_;if(o.o){const x=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let p=0,m=x.length;p<m;)switch(x[p++]){case"m":a=x[p++]*t+e,c=x[p++]*t+i,r.moveTo(a,c);break;case"l":a=x[p++]*t+e,c=x[p++]*t+i,r.lineTo(a,c);break;case"q":l=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,d=x[p++]*t+i,r.quadraticCurveTo(u,d,l,h);break;case"b":l=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,d=x[p++]*t+i,f=x[p++]*t+e,_=x[p++]*t+i,r.bezierCurveTo(u,d,f,_,l,h);break}}return{offsetX:o.ha*t,path:r}}class je extends li{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const x1=Zn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=null,s=Qt(!1),o=Qt(!1),r=Qt(!1);return hi(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new jn,l=new ke(75,window.innerWidth/window.innerHeight,.1,1e3),h=new $n({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Kt,d=new Qi(16777215,2);c.add(d);const f=new Ji(16777215,4);f.position.set(5,5,5),c.add(f);const _=new Zi(16777215,5,50);_.position.set(0,2,4),c.add(_);const x=new ui,p=x.load("/3d-bear-arts/assets/lv2.jpg"),m=x.load("/3d-bear-arts/assets/lv2.jpg");p.wrapS=p.wrapT=Ve,m.wrapS=m.wrapT=Ve;const T=new zt({color:8343336,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),w=new zt({color:5978654,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),S=new zt({color:13152668,metalness:.2,roughness:.05,bumpMap:p,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:m,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:ve});new zt({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const z=new wt(1,32,32,0,Math.PI),I=new b(z,S),P=new b(z,T);I.scale.set(.85,.85,.8),P.scale.set(.85,.85,.8),I.position.y=-.2,P.position.y=-.2,I.rotation.y=Math.PI/2,P.rotation.y=Math.PI*1.5;const B=new De(1,32),Q=new b(B,T);Q.scale.set(.85,.85,.8),Q.position.set(0,-.2,0),Q.rotation.y=Math.PI/2;const y=new Kt;y.add(I),y.add(P),y.add(Q),u.add(y);const E=new wt(.6,32,32,0,Math.PI),U=new b(E,T);U.scale.set(1,.95,.95),U.position.set(0,1,0),U.rotation.y=Math.PI*1.5;const X=new b(E,S);X.scale.set(1,.95,.95),X.position.set(0,1,0),X.rotation.y=Math.PI/2;const et=new De(.6,32),at=new b(et,T);at.position.set(0,1,0),at.rotation.y=Math.PI/2,at.scale.set(1,.95,.95);const Y=new Kt;Y.add(U),Y.add(X),Y.add(at),u.add(Y);const nt=new wt(.25,32,32),$=new b(nt,T);$.position.set(-.45,1.35,-.1),u.add($);const gt=new b(nt,S);gt.position.set(.45,1.35,-.1),u.add(gt);const pt=new wt(.25,32,32,Math.PI/2,Math.PI),yt=new b(pt,w);yt.scale.set(1.1,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=Math.PI;const Ut=new wt(.25,32,32,Math.PI/2,Math.PI),Vt=new b(Ut,S);Vt.scale.set(1.1,.6,.8),Vt.position.set(0,.84,.5),Vt.rotation.y=0;const rt=new De(.25,32),dt=new b(rt,T);dt.scale.set(.8,.6,.8),dt.position.set(0,.84,.5),dt.rotation.y=Math.PI/2;const Mt=new Kt;Mt.add(yt),Mt.add(Vt),Mt.add(dt),u.add(Mt);const O=new Xn;O.moveTo(0,0),O.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),O.bezierCurveTo(-.6,.3,0,.6,0,1),O.bezierCurveTo(0,.6,.6,.3,.6,0),O.bezierCurveTo(.6,-.3,0,-.3,0,0);const ct={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new zt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const ot=new li(O,ct),ht=new b(ot,T);ht.scale.set(.1,.1,.1),ht.rotation.z=fe.degToRad(210),ht.rotation.x=fe.degToRad(5),ht.rotation.y=fe.degToRad(-45),ht.position.set(-.4,.9,.45);const bt=new b(ot,w);bt.scale.set(.6,.5,.5),bt.position.set(.35,0,0),bt.rotation.y=Math.PI,bt.rotation.x=Math.PI;const it=new b(ot,w);it.scale.set(.2,.2,.2),it.position.set(.5,-.1,.2),it.rotation.y=Math.PI,it.rotation.x=Math.PI,u.add(it);const g=new Pn(1.3,1.2,.6),A=new b(g,T);A.scale.set(.45,.45,.45),A.position.set(.35,-.2,.1),A.rotation.y=Math.PI;const L=new Yi(.15,.025,10,100);new zt({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const F=new b(L,T);F.position.set(.35,.1,.1),F.rotation.z=Math.PI/2,F.rotation.x=Math.PI/8,F.rotation.y=Math.PI/14;const N=new b(L,T);N.position.set(.35,.1,.13),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/-8,N.rotation.y=Math.PI/12;const q=new Kt;q.add(A),q.add(F),q.add(N),u.add(q);const J=new wt(.35,32,32),M=new b(J,T);M.scale.set(.75,1.25,.65),M.position.set(-.7,-.15,.2),u.add(M);const v=new b(J,S);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new te(.2,.22,.6,32),j=new b(C,T);j.position.set(-.4,-1.05,0),u.add(j);const k=new b(C,S);k.position.set(.4,-1.05,0),u.add(k);const V=new wt(.3,32,32),ut=new b(V,T);ut.scale.set(1,.72,1.5),ut.position.set(-.4,-1.45,.17),u.add(ut);const lt=new b(V,S);lt.scale.set(1,.72,1.5),lt.position.set(.4,-1.45,.17),u.add(lt);const _t=new wt(.44,32,32),Rt=new b(_t,T);Rt.position.set(-.15,-.45,-.4),u.add(Rt);const ft=new b(_t,S);ft.position.set(.15,-.45,-.4),u.add(ft);const xt=new wt(.18,32,32),It=new b(xt,T);It.position.set(0,-.35,-.8),u.add(It),new ts().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const St=new je("X",{font:tt,size:.2,depth:.05});new ji({color:0});const Et=new b(St,w);Et.position.set(-.3,.99,.53),Et.rotation.x=fe.degToRad(-5),Et.rotation.y=fe.degToRad(-15),u.add(Et);const Gt=new je("O",{font:tt,size:.2,depth:.05});new ji({color:0});const Jt=new b(Gt,w);Jt.position.set(.14,.99,.53),Jt.rotation.y=fe.degToRad(12),Jt.rotation.x=fe.degToRad(-5),u.add(Jt)}),It.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Pt=()=>{u.rotation.y,u.rotation.x},Yt=()=>{s.value=!0,o.value=!1,r.value=!1},Ft=()=>{s.value=!1,o.value=!0,r.value=!1},jt=()=>{s.value=!1,o.value=!1,Pt()},G=tt=>{const St=window.innerWidth/2;tt>St?Yt():Ft(),Pt()},vt=tt=>{clearTimeout(i),jt(),r.value=!0;const St={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1};if(r.value){const Et=St.x*Math.PI*.2,Gt=St.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=Gt}i=setTimeout(()=>{r.value=!1,G(tt.clientX)},500)};window.addEventListener("mousemove",vt);const st=tt=>{if(r.value){const St={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1},Et=St.x*Math.PI*.2,Gt=St.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=Gt}};window.addEventListener("mousemove",st),a(),Ke(()=>t.bodyPosition,tt=>{u.position.set(tt.x,tt.y,tt.z)}),Ke(()=>t.cameraPosition,tt=>{l.position.set(t.bodyPosition.x,1,tt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Ai(),Ri("div",{ref_key:"threeCanvas",ref:e,class:Kn(n.background?"no-bg":"three-canvas")},null,2))}}),y1=Pi(x1,[["__scopeId","data-v-f3beb116"]]),M1=Zn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=null,s=Qt(!1),o=Qt(!1),r=Qt(!1);return hi(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new jn,l=new ke(75,window.innerWidth/window.innerHeight,.1,1e3),h=new $n({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Kt,d=new Qi(16777215,2);c.add(d);const f=new Ji(16777215,4);f.position.set(5,5,5),c.add(f);const _=new Zi(16777215,5,50);_.position.set(0,2,4),c.add(_);const x=new ui,p=x.load("/3d-bear-arts/assets/pop6.jpg"),m=x.load("/3d-bear-arts/assets/pop7.jpg");p.wrapS=p.wrapT=Ve,m.wrapS=m.wrapT=Ve;const T=new zt({color:16738740,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),w=new zt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ve}),S=new zt({color:16766720,map:p,metalness:.3,roughness:.5}),z=new zt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ve}),I=new zt({color:9055202,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new zt({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ve});const P=new zt({color:65535,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),B=new zt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ve}),Q=new wt(1,32,32,0,Math.PI),y=new b(Q,w),E=new b(Q,T);y.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),y.position.y=-.2,E.position.y=-.2,y.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const U=new De(1,32),X=new b(U,T);X.scale.set(.85,.85,.8),X.position.set(0,-.2,0),X.rotation.y=Math.PI/2;const et=new Kt;et.add(y),et.add(E),et.add(X),u.add(et);const at=new wt(.6,32,32,0,Math.PI),Y=new b(at,S);Y.scale.set(1,.95,.95),Y.position.set(0,1,0),Y.rotation.y=Math.PI*1.5;const nt=new b(at,z);nt.scale.set(1,.95,.95),nt.position.set(0,1,0),nt.rotation.y=Math.PI/2;const $=new De(.6,32),gt=new b($,S);gt.position.set(0,1,0),gt.rotation.y=Math.PI/2,gt.scale.set(1,.95,.95);const pt=new Kt;pt.add(Y),pt.add(nt),pt.add(gt),u.add(pt);const yt=new wt(.25,32,32),Ut=new b(yt,T);Ut.position.set(-.45,1.35,-.1),u.add(Ut);const Vt=new b(yt,w);Vt.position.set(.45,1.35,-.1),u.add(Vt);const rt=new wt(.25,32,32,Math.PI/2,Math.PI),dt=new b(rt,S);dt.scale.set(1.1,.6,.8),dt.position.set(0,.84,.5),dt.rotation.y=Math.PI;const Mt=new wt(.25,32,32,Math.PI/2,Math.PI),O=new b(Mt,z);O.scale.set(1.1,.6,.8),O.position.set(0,.84,.5),O.rotation.y=0;const ct=new De(.25,32),ot=new b(ct,S);ot.scale.set(.8,.6,.8),ot.position.set(0,.84,.5),ot.rotation.y=Math.PI/2;const ht=new Kt;ht.add(dt),ht.add(O),ht.add(ot),u.add(ht);const bt=new Xn;bt.moveTo(0,0),bt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),bt.bezierCurveTo(-.6,.3,0,.6,0,1),bt.bezierCurveTo(0,.6,.6,.3,.6,0),bt.bezierCurveTo(.6,-.3,0,-.3,0,0);const it={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new li(bt,it),A=new b(g,S);A.scale.set(.5,.5,.5),A.position.set(.35,0,0),A.rotation.y=Math.PI,A.rotation.x=Math.PI,u.add(A);const L=new b(g,P);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const F=new b(g,T);F.scale.set(.25,.25,.27),F.position.set(.4,.3,-.2),F.rotation.y=Math.PI,F.rotation.x=Math.PI,u.add(F);const N=new wt(.35,32,32),q=new b(N,P);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),u.add(q);const J=new b(N,B);J.scale.set(.75,1.25,.65),J.position.set(.7,-.15,.2),u.add(J);const M=new te(.2,.22,.6,32),v=new b(M,S);v.position.set(-.4,-1.05,0),u.add(v);const C=new b(M,z);C.position.set(.4,-1.05,0),u.add(C);const j=new wt(.3,32,32),k=new b(j,S);k.scale.set(1,.72,1.5),k.position.set(-.4,-1.45,.17),u.add(k);const V=new b(j,z);V.scale.set(1,.72,1.5),V.position.set(.4,-1.45,.17),u.add(V);const ut=new wt(.44,32,32),lt=new b(ut,T);lt.position.set(-.15,-.45,-.4),u.add(lt);const _t=new b(ut,w);_t.position.set(.15,-.45,-.4),u.add(_t);const Rt=new wt(.18,32,32),ft=new b(Rt,T);ft.position.set(0,-.35,-.8),u.add(ft),new ts().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(vt){const st=new je("X",{font:vt,size:.2,depth:.05});new ji({color:0});const tt=new b(st,T);tt.position.set(-.3,.99,.53),tt.rotation.x=fe.degToRad(-5),tt.rotation.y=fe.degToRad(-15),u.add(tt);const St=new je("O",{font:vt,size:.2,depth:.05});new ji({color:0});const Et=new b(St,P);Et.position.set(.14,.99,.53),Et.rotation.y=fe.degToRad(12),Et.rotation.x=fe.degToRad(-5),u.add(Et);const Gt=new je("POP",{font:vt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Jt=new zt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new zt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ne=new zt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),ee=new zt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),se=new b(Gt,Jt);se.scale.set(.15,.15,.15),se.position.set(.03,1.16,.1),se.rotateZ(-25),u.add(se);const ce=new b(Gt,I);ce.scale.set(.14,.14,.14),ce.rotateZ(45),ce.position.set(.2,-.7,.3),u.add(ce);const ge=new b(Gt,ne);ge.scale.set(.14,.14,.14),ge.rotateZ(45),ge.rotateY(45),ge.position.set(.3,.7,.3),u.add(ge);const Re=new b(Gt,ne);Re.scale.set(.15,.15,.15),Re.rotateZ(45),Re.rotateY(45),Re.position.set(.35,-1.5,.3),u.add(Re);const pe=new b(Gt,ee);pe.scale.set(.17,.17,.17),pe.rotateZ(45),pe.rotateY(15),pe.position.set(.35,1,.3),u.add(pe)}),ft.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const It=()=>{u.rotation.y,u.rotation.x},Nt=()=>{s.value=!0,o.value=!1,r.value=!1},Pt=()=>{s.value=!1,o.value=!0,r.value=!1},Yt=()=>{s.value=!1,o.value=!1,It()},Ft=vt=>{const st=window.innerWidth/2;vt>st?Nt():Pt(),It()},jt=vt=>{clearTimeout(i),Yt(),r.value=!0;const st={x:vt.clientX/window.innerWidth*2-1,y:-(vt.clientY/window.innerHeight)*2+1};if(r.value){const tt=st.x*Math.PI*.2,St=st.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=St}i=setTimeout(()=>{r.value=!1,Ft(vt.clientX)},500)};window.addEventListener("mousemove",jt);const G=vt=>{if(r.value){const st={x:vt.clientX/window.innerWidth*2-1,y:-(vt.clientY/window.innerHeight)*2+1},tt=st.x*Math.PI*.2,St=st.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=St}};window.addEventListener("mousemove",G),a(),Ke(()=>t.bodyPosition,vt=>{u.position.set(vt.x,vt.y,vt.z)}),Ke(()=>t.cameraPosition,vt=>{l.position.set(t.bodyPosition.x,1,vt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Ai(),Ri("div",{ref_key:"threeCanvas",ref:e,class:Kn(n.background?"no-bg":"three-canvas")},null,2))}}),w1=Pi(M1,[["__scopeId","data-v-8cfea564"]]),S1={class:"pixel-controls"},E1={class:"side-buttons"},b1=Zn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);hi(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03);const tt=vt.getElapsedTime();G.forEach((St,Et)=>{const Gt=.2+Math.sin(tt*3+st[Et])*.1;St.scale.set(Gt,Gt,Gt)}),x.render(f,_)};const f=new jn,_=new ke(75,window.innerWidth/window.innerHeight,.1,1e3),x=new $n({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new Kt,m=new Kt;f.add(m);const T=new Qi(16777215,2);f.add(T);const w=new Ji(16777215,4);w.position.set(5,5,5),f.add(w);const S=new Zi(16777215,5,50);S.position.set(0,2,4),f.add(S);const z=new ui,I=z.load("/3d-bear-arts/assets/pop6.jpg"),P=z.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=Ve,P.wrapS=P.wrapT=Ve,P.repeat.set(2,2);const B=new zt({color:16738740,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Q=new zt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ve}),y=new zt({color:16766720,map:I,metalness:.3,roughness:.5}),E=new zt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ve}),U=new zt({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),X=new zt({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),et=new zt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ve}),at=new wt(1,32,32,0,Math.PI),Y=new b(at,Q),nt=new b(at,B);Y.scale.set(.85,.85,.8),nt.scale.set(.85,.85,.8),Y.position.y=-.2,nt.position.y=-.2,Y.rotation.y=Math.PI/2,nt.rotation.y=Math.PI*1.5;const $=new De(1,32),gt=new b($,B);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const pt=new Kt;pt.add(Y),pt.add(nt),pt.add(gt),p.add(pt);const yt=new wt(.6,32,32,0,Math.PI),Ut=new b(yt,y);Ut.scale.set(1,.95,.95),Ut.position.set(0,1,0),Ut.rotation.y=Math.PI*1.5;const Vt=new b(yt,E);Vt.scale.set(1,.95,.95),Vt.position.set(0,1,0),Vt.rotation.y=Math.PI/2;const rt=new De(.6,32),dt=new b(rt,y);dt.position.set(0,1,0),dt.rotation.y=Math.PI/2,dt.scale.set(1,.95,.95);const Mt=new Kt;Mt.add(Ut),Mt.add(Vt),Mt.add(dt),p.add(Mt);const O=new wt(.25,32,32),ct=new b(O,B);ct.position.set(-.45,1.35,-.1),p.add(ct);const ot=new b(O,Q);ot.position.set(.45,1.35,-.1),p.add(ot);const ht=new wt(.25,32,32,Math.PI/2,Math.PI),bt=new b(ht,y);bt.scale.set(1.1,.6,.8),bt.position.set(0,.84,.5),bt.rotation.y=Math.PI;const it=new wt(.25,32,32,Math.PI/2,Math.PI),g=new b(it,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const A=new De(.25,32),L=new b(A,y);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const F=new Kt;F.add(bt),F.add(g),F.add(L),p.add(F);const N=new Xn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const q={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},J=new li(N,q),M=new b(J,y);M.scale.set(.5,.5,.5),M.position.set(.3,0,0),M.rotation.y=Math.PI,M.rotation.x=Math.PI,p.add(M);const v=new b(J,X);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new b(J,B);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,p.add(C);const j=new wt(.35,32,32),k=new b(j,X);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),p.add(k);const V=new b(j,et);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),p.add(V);const ut=new te(.2,.22,.6,32),lt=new b(ut,y);lt.position.set(-.4,-1.05,0),p.add(lt);const _t=new b(ut,E);_t.position.set(.4,-1.05,0),p.add(_t);const Rt=new wt(.3,32,32),ft=new b(Rt,y);ft.scale.set(1,.72,1.5),ft.position.set(-.4,-1.45,.17),p.add(ft);const xt=new b(Rt,E);xt.scale.set(1,.72,1.5),xt.position.set(.4,-1.45,.17),p.add(xt);const It=new wt(.44,32,32),Nt=new b(It,B);Nt.position.set(-.15,-.45,-.4),p.add(Nt);const Pt=new b(It,Q);Pt.position.set(.15,-.45,-.4),p.add(Pt);const Yt=new wt(.18,32,32),Ft=new b(Yt,B);Ft.position.set(0,-.35,-.8),p.add(Ft),new ts().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const St=new je("X",{font:tt,size:.2,depth:.05}),Et=new b(St,B);Et.position.set(-.3,.99,.53),Et.rotation.x=fe.degToRad(-5),Et.rotation.y=fe.degToRad(-15),p.add(Et);const Gt=new je("O",{font:tt,size:.2,depth:.05}),Jt=new b(Gt,X);Jt.position.set(.14,.99,.53),Jt.rotation.y=fe.degToRad(12),Jt.rotation.x=fe.degToRad(-5),p.add(Jt);const ne=new je("POP",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new je("🐻",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const ee=new je("BAO      BEAR",{font:tt,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),se=new zt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new zt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ce=new zt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),ge=new zt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),Re=new b(ne,se);Re.scale.set(.15,.15,.15),Re.position.set(.02,1.16,.1),Re.rotateZ(-25),p.add(Re);const pe=new b(ne,U);pe.scale.set(.14,.14,.14),pe.rotateZ(45),pe.position.set(.2,-.7,.3),p.add(pe);const Ne=new b(ne,ce);Ne.scale.set(.14,.14,.14),Ne.rotateZ(45),Ne.rotateY(45),Ne.position.set(.3,.7,.3),p.add(Ne);const Me=new b(ne,ce);Me.scale.set(.15,.15,.15),Me.rotateZ(45),Me.rotateY(45),Me.position.set(.35,-1.5,.3),p.add(Me);const He=new b(ne,ge);He.scale.set(.17,.17,.17),He.rotateZ(45),He.rotateY(15),He.position.set(.35,1,.3),p.add(He);const we=new b(ee,se);we.scale.set(.7,.7,.7),we.position.set(-6,0,-3),m.add(we)}),Ft.renderOrder=1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,p.rotation.x=.1;const G=[M,v,C],vt=new Fp,st=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),Ke(()=>t.bodyPosition,tt=>{p.position.set(tt.x,tt.y,tt.z)}),Ke(()=>t.cameraPosition,tt=>{_.position.set(t.bodyPosition.x,1,tt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(Ai(),Ri(gn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Kn(n.background?"no-bg":"three-canvas")},null,2),qt("div",S1,[qt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),qt("div",E1,[qt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),T1=Pi(b1,[["__scopeId","data-v-cb52c927"]]),A1={class:"pixel-controls"},R1={class:"side-buttons"},P1=Zn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);hi(()=>{if(e.value){let d=function(ce,ge){const Re=new te(jt,jt,G,32);Re.rotateX(Math.PI/2);const pe=new b(Re,ce),Ne=new Kt;for(let He=0;He<vt;He++){const we=He/vt*Math.PI*2,Xe=new Pn(st,tt,St),$e=new b(Xe,ce);$e.position.set((jt+St/26)*Math.cos(we),(jt+St/26)*Math.sin(we),0),$e.rotation.z=we,Ne.add($e)}const Me=new Kt;return Me.add(pe),Me.add(Ne),Me.position.set(ge.x,ge.y,ge.z),Me},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),Et.rotation.z-=.02,Gt.rotation.z+=.03,Jt.rotation.z+=.02,ne.rotation.z+=.02,ee.rotation.z-=.03,se.rotation.y+=.04,p.render(_,x)};const _=new jn,x=new ke(75,window.innerWidth/window.innerHeight,.1,1e3),p=new $n({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new Kt,T=new Kt;_.add(T);const w=new Qi(16777215,2);_.add(w);const S=new Ji(16777215,4);S.position.set(5,5,5),_.add(S);const z=new Zi(16777215,5,50);z.position.set(0,2,4),_.add(z);const I=new ui,P=I.load("/3d-bear-arts/assets/metal.jpg"),B=I.load("/3d-bear-arts/assets/pop7.jpg"),Q=I.load("/3d-bear-arts/assets/gear.jpg");P.wrapS=P.wrapT=Ve,B.wrapS=B.wrapT=Ve,B.repeat.set(2,2);const y=new zt({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:P});Q.mapping=wa;const E=new zt({color:"#d3d3d3",metalness:1,roughness:.25,map:P,envMap:Q,clearcoat:.7,clearcoatRoughness:.3}),U=new zt({color:"#C0C0C0",metalness:1,roughness:.25,envMap:Q,clearcoat:.7,clearcoatRoughness:.3}),X=new zt({color:"#C0C0C0",metalness:1,roughness:.25,map:P,envMap:Q,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),et=new zt({color:"#C0C0C0",metalness:1,roughness:.5,map:P,envMap:Q,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),at=new zt({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:ve});new zt({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const Y=new zt({color:"#d3d3d3",metalness:1,roughness:.2,map:Q,envMap:Q,clearcoat:.7,clearcoatRoughness:.3});new zt({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:Q}),new zt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:P,transparent:!0,opacity:.3});const nt=new wt(1,32,32,0,Math.PI),$=new b(nt,et),gt=new b(nt,E);$.scale.set(.85,.85,.8),gt.scale.set(.85,.85,.8),$.position.y=-.2,gt.position.y=-.2,$.rotation.y=Math.PI/2,gt.rotation.y=Math.PI*1.5;const pt=new De(1,32),yt=new b(pt,X);yt.scale.set(.85,.85,.8),yt.position.set(0,-.2,0),yt.rotation.y=Math.PI/2;const Ut=new Kt;Ut.add($),Ut.add(gt),Ut.add(yt),m.add(Ut);const Vt=new wt(.6,32,32,0,Math.PI),rt=new b(Vt,E);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI*1.5;const dt=new b(Vt,et);dt.scale.set(1,.95,.95),dt.position.set(0,1,0),dt.rotation.y=Math.PI/2;const Mt=new De(.6,32),O=new b(Mt,X);O.position.set(0,1,0),O.rotation.y=Math.PI/2,O.scale.set(1,.95,.95);const ct=new Kt;ct.add(rt),ct.add(dt),ct.add(O),m.add(ct);const ot=new wt(.25,32,32),ht=new b(ot,E);ht.position.set(-.45,1.35,-.1),m.add(ht);const bt=new b(ot,X);bt.position.set(.45,1.35,-.1),m.add(bt);const it=new wt(.25,32,32,Math.PI/2,Math.PI),g=new b(it,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const A=new wt(.25,32,32,Math.PI/2,Math.PI),L=new b(A,X);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const F=new De(.25,32),N=new b(F,at);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const q=new Kt;q.add(g),q.add(L),q.add(N),m.add(q);const J=new Xn;J.moveTo(0,0),J.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),J.bezierCurveTo(-.6,.3,0,.6,0,1),J.bezierCurveTo(0,.6,.6,.3,.6,0),J.bezierCurveTo(.6,-.3,0,-.3,0,0);const M={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new li(J,M),C=new wt(.35,32,32),j=new b(C,E);j.scale.set(.75,1.25,.65),j.position.set(-.7,-.15,.2),m.add(j);const k=new b(C,X);k.scale.set(.75,1.25,.65),k.position.set(.7,-.15,.2),m.add(k);const V=new te(.2,.22,.6,32),ut=new b(V,E);ut.position.set(-.4,-1.05,0),m.add(ut);const lt=new b(V,X);lt.position.set(.4,-1.05,0),m.add(lt);const _t=new wt(.3,32,32),Rt=new b(_t,E);Rt.scale.set(1,.72,1.5),Rt.position.set(-.4,-1.45,.17),m.add(Rt);const ft=new b(_t,X);ft.scale.set(1,.72,1.5),ft.position.set(.4,-1.45,.17),m.add(ft);const xt=new wt(.44,32,32),It=new b(xt,E);It.position.set(-.15,-.45,-.4),m.add(It);const Nt=new b(xt,et);Nt.position.set(.15,-.45,-.4),m.add(Nt);const Pt=new wt(.18,32,32),Yt=new b(Pt,E);Yt.position.set(0,-.35,-.8),m.add(Yt),new ts().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ce){const ge=new je("X",{font:ce,size:.2,depth:.05});new ji({color:0});const Re=new b(ge,y);Re.position.set(-.3,.99,.53),Re.rotation.x=fe.degToRad(-5),Re.rotation.y=fe.degToRad(-15),m.add(Re);const pe=new je("O",{font:ce,size:.2,depth:.05});new ji({color:0});const Ne=new b(pe,y);Ne.position.set(.14,.99,.53),Ne.rotation.y=fe.degToRad(12),Ne.rotation.x=fe.degToRad(-5),m.add(Ne)}),Yt.renderOrder=1;const jt=1.2,G=.5,vt=8,st=.7,tt=.3,St=.5,Et=d(Y,{x:-2,y:0,z:0}),Gt=d(Y,{x:0,y:0,z:0}),Jt=d(Y,{x:2,y:0,z:0}),ne=d(Y,{x:2,y:0,z:0}),ee=d(Y,{x:2,y:-2,z:0}),se=new b(v,U);se.scale.set(.3,.3,.3),se.position.set(.25,1.1,0),se.rotation.y=Math.PI,se.rotation.x=Math.PI,m.add(se),Et.position.set(.35,0,0),Gt.position.set(.25,-.3,.4),Jt.position.set(.3,.3,-.2),ne.position.set(.25,.17,.4),ee.position.set(.5,-.3,.45),Et.scale.set(.2,.2,.2),Gt.scale.set(.18,.18,.18),Jt.scale.set(.15,.15,.15),ne.scale.set(.17,.17,.17),ee.scale.set(.15,.15,.15),Gt.rotation.z=Math.PI/4,Jt.rotation.z=-Math.PI/4,ne.rotation.y=-Math.PI/2,ee.rotation.y=-Math.PI/2,m.add(Et),m.add(Gt),m.add(Jt),m.add(ne),m.add(ee),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4,f(),Ke(()=>t.bodyPosition,ce=>{m.position.set(ce.x,ce.y,ce.z)}),Ke(()=>t.cameraPosition,ce=>{x.position.set(t.bodyPosition.x,1,ce),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(Ai(),Ri(gn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Kn(n.background?"no-bg":"three-canvas")},null,2),qt("div",A1,[qt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),qt("div",R1,[qt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),C1=Pi(P1,[["__scopeId","data-v-9a57b6d8"]]),I1={class:"pixel-controls"},L1={class:"side-buttons"},D1={class:"directional-buttons"},U1={class:"horizontal-buttons"},N1={class:"directional-buttons-woman"},F1={class:"horizontal-buttons-woman"},O1={class:"directional-buttons-kid"},B1={class:"horizontal-buttons-kid"},na=.1,ia=.05,sa=.08,z1=Zn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);const a=ho(null),c=Qt(!1),l=Qt(!1),h=Qt(!1),u=Qt(!1),d=ho(null),f=ho(null),_=Qt(!1),x=Qt(!1),p=Qt(!1),m=Qt(!1),T=Qt(!1),w=Qt(!1),S=Qt(!1),z=Qt(!1),I=new $n({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const P=new jn,B=new ke(75,window.innerWidth/window.innerHeight,.1,1e3);B.position.z=5,hi(()=>{if(e.value){let it=function(){const At=new Kt,Te=new wt(.2,32,32),Ae=new Ot({color:16767916}),xe=new b(Te,Ae);xe.position.set(0,1.5,0),At.add(xe);const tn=new wt(.21,32,32,0,Math.PI*2,0,Math.PI/2),Se=new Ot({color:16711680}),qe=new b(tn,Se);qe.position.set(0,1.58,0),At.add(qe);const Mn=new te(.25,.25,.6,32),Be=new Ot({color:16767916}),cn=new b(Mn,Be);cn.position.set(0,1,0),At.add(cn);const Nn=new te(.26,.26,.3,32),hn=new Ot({color:255}),wn=new b(Nn,hn);wn.position.set(0,.65,0),At.add(wn);const In=new te(.1,.1,.5,32),sn=new Ot({color:16767916}),Sn=new b(In,sn);Sn.position.set(-.15,.25,0),At.add(Sn);const Ln=new b(In,sn);Ln.position.set(.15,.25,0),At.add(Ln);const Fn=new te(.08,.08,.5,32),dn=new b(Fn,sn);dn.position.set(-.35,1.3,0),dn.rotation.z=Math.PI/4,At.add(dn);const fn=new b(Fn,sn);return fn.position.set(.35,1.3,0),fn.rotation.z=-Math.PI/4,At.add(fn),At.scale.set(.27,.27,.27),At.position.set(-.2,-.1,-.15),At},g=function(){const At=new Kt,Te=new wt(.18,32,32),Ae=new Ot({color:16767916}),xe=new b(Te,Ae);xe.position.set(0,1.2,.04),At.add(xe);const tn=new wt(.19,32,32,.4,Math.PI*2,0,Math.PI/2),Se=new te(.18,.18,.4,32),qe=new Ot({color:9127187}),Mn=new b(tn,qe);Mn.position.set(0,1.28,0),At.add(Mn);const Be=new b(Se,qe);Be.position.set(0,1.1,-.01),At.add(Be);const cn=new te(.18,.2,.5,32),Nn=new Ot({color:16767916}),hn=new b(cn,Nn);hn.position.set(0,.85,0),At.add(hn);const wn=new wt(.08,32,32,0,Math.PI),In=new Ot({color:16738740}),sn=new b(wn,In);sn.position.set(-.09,.98,.15),At.add(sn);const Sn=new b(wn,In);Sn.position.set(.09,.98,.15),At.add(Sn);const Ln=new te(.22,.22,.25,32),Fn=new Ot({color:16738740}),dn=new b(Ln,Fn);dn.position.set(0,.6,0),At.add(dn);const fn=new te(.1,.1,.6,32),di=new Ot({color:16767916}),fi=new b(fn,di);fi.position.set(-.09,.5,.2),fi.rotation.x=Math.PI/2,At.add(fi);const pi=new b(fn,di);pi.position.set(.09,.5,.2),pi.rotation.x=Math.PI/2,At.add(pi);const mi=new te(.08,.08,.35,32),es=new b(mi,di);es.position.set(-.24,.95,.18),es.rotation.x=Math.PI/2,At.add(es);const Ii=new b(mi,di);return Ii.position.set(.2,.85,0),Ii.rotation.z=Math.PI/20,At.add(Ii),At.scale.set(.27,.27,.27),At.position.set(.2,-.15,-.32),At},A=function(){const At=new Kt,Te=new wt(.2,32,32),Ae=new Ot({color:16767916}),xe=new b(Te,Ae);xe.position.set(0,1.5,0),At.add(xe);const tn=new wt(.21,32,32,0,Math.PI*2,0,Math.PI/2),Se=new Ot({color:25600}),qe=new b(tn,Se);qe.position.set(0,1.58,0),At.add(qe);const Mn=new te(.22,.22,.5,32),Be=new Ot({color:16767916}),cn=new b(Mn,Be);cn.position.set(0,1,0),At.add(cn);const Nn=new te(.23,.23,.3,32),hn=new Ot({color:8388736}),wn=new b(Nn,hn);wn.position.set(0,.65,0),At.add(wn);const In=new te(.1,.1,.5,32),sn=new Ot({color:16767916}),Sn=new b(In,sn);Sn.position.set(-.15,.3,-.25),Sn.rotation.x=Math.PI/6,At.add(Sn);const Ln=new b(In,sn);Ln.position.set(.15,.3,.25),Ln.rotation.x=-Math.PI/6,At.add(Ln);const Fn=new te(.08,.08,.4,32),dn=new b(Fn,sn);dn.position.set(-.28,1,-.2),dn.rotation.x=Math.PI/6,At.add(dn);const fn=new b(Fn,sn);return fn.position.set(.28,1.3,.1),fn.rotation.z=-Math.PI/8,At.add(fn),At.scale.set(.15,.15,.15),At.position.set(.3,-.25,.25),At.rotation.x=Math.PI/12,At.rotation.y=Math.PI/2,At.rotation.z=-Math.PI/3,At},L=function(At){let Te=1,Ae=0;function xe(){requestAnimationFrame(xe),At.position.x+=.01*Te,At.position.x>=.35?(Te=-1,At.rotation.y=Math.PI):At.position.x<=-.35&&(Te=1,At.rotation.y=0),Ae+=.003,At.position.y=-.4+Math.sin(Ae)*.1,J.render(N,q)}xe()},F=function(){requestAnimationFrame(F),i.value&&(M.rotation.y+=.03),s.value&&(M.rotation.y-=.03),o.value&&(M.rotation.x-=.03),r.value&&(M.rotation.x+=.03),Re.uniforms.u_time.value+=.25,W.rotation.y+=.04,J.render(N,q)};const N=new jn,q=new ke(75,window.innerWidth/window.innerHeight,.1,1e3),J=new $n({antialias:!0,alpha:!0});J.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(J.domElement);const M=new Kt,v=new Kt;N.add(v);const C=new Qi(16777215,2);N.add(C);const j=new Ji(16777215,4);j.position.set(5,5,5),N.add(j);const k=new Zi(16777215,5,50);k.position.set(0,2,4),N.add(k);const V=new ui,ut=V.load("/3d-bear-arts/assets/beach.jpg");ut.repeat.set(.8,1);const lt=V.load("/3d-bear-arts/assets/sun.jpg");ut.wrapS=ut.wrapT=Ve,ut.repeat.set(.8,1),lt.wrapS=lt.wrapT=Ve;const _t=new zt({color:11592447,map:ut,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Rt=new zt({color:11592447,map:ut,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:ve,ior:1.33,depthWrite:!1,depthTest:!0}),ft=new zt({color:11592447,map:ut,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),xt=new zt({color:11592447,map:ut,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:ve}),It=new zt({color:11592447,map:ut,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:ve,ior:1.33}),Nt=new zt({color:11592447,map:ut,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Pt=new wt(1,32,32,0,Math.PI),Yt=new b(Pt,xt),Ft=new b(Pt,Rt);Yt.scale.set(.85,.85,.8),Ft.scale.set(.85,.85,.8),Yt.position.y=-.2,Ft.position.y=-.2,Yt.rotation.y=Math.PI/2,Ft.rotation.y=Math.PI*1.5;const jt=new De(1,32),G=new b(jt,_t);G.scale.set(.85,.85,.8),G.position.set(0,-.2,0),G.rotation.y=Math.PI/2;const vt=new Kt;vt.add(Yt),vt.add(Ft),vt.add(G),M.add(vt);const st=new wt(.6,32,32,0,Math.PI),tt=new b(st,_t);tt.scale.set(1,.95,.95),tt.position.set(0,1,0),tt.rotation.y=Math.PI*1.5;const St=new b(st,ft);St.scale.set(1,.95,.95),St.position.set(0,1,0),St.rotation.y=Math.PI/2;const Et=new De(.6,32),Gt=new b(Et,_t);Gt.position.set(0,1,0),Gt.rotation.y=Math.PI/2,Gt.scale.set(1,.95,.95);const Jt=new Kt;Jt.add(tt),Jt.add(St),Jt.add(Gt),M.add(Jt);const ne=new wt(.6,32,32,0,Math.PI*2,0,Math.PI/2),ee=new zt({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),se=new b(ne,ee);se.position.set(0,-.2,0),se.rotation.x=Math.PI,se.scale.set(1.25,1.25,1.25),vt.add(se);const ce=new zt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ve,transparent:!0,opacity:.7,depthWrite:!1}),ge=new b(jt,ce);ge.scale.set(.7,.7,.7),ge.position.set(0,-.3,0),ge.rotation.x=Math.PI/2,ge.renderOrder=1,vt.add(ge),M.add(vt);const Re=new Yn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
                precision mediump float;
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,fragmentShader:`
                precision mediump float;
                uniform float u_time;
                uniform float u_waveFrequency;
                uniform float u_waveAmplitude;
                uniform float u_waveSpeed;
                varying vec2 vUv;

                void main() {
                    float waveX = sin(vUv.x * u_waveFrequency + u_time * u_waveSpeed) * u_waveAmplitude;
                    float waveY = cos(vUv.y * u_waveFrequency + u_time * u_waveSpeed) * u_waveAmplitude;

                    // Adjusted colors for higher contrast
                    vec3 baseColor = vec3(0.3, 0.4, 0.5); // Dark base
                    vec3 waveColor = vec3(0.7, 0.9, 1.0);  // Brighter aqua

                    vec3 color = mix(baseColor, waveColor, 0.5 + (waveX + waveY) * 1.5); 
                    gl_FragColor = vec4(color, 0.85); // Adjust opacity for visibility
                }
            `}),pe=new b(jt,Re);pe.position.set(0,-.3,0),pe.scale.set(.7,.7,.7),pe.rotation.x=-Math.PI/2,pe.renderOrder=1,vt.add(pe);const Ne=new wt(.25,32,32),Me=new b(Ne,It);Me.position.set(-.45,1.35,-.1),M.add(Me);const He=new b(Ne,ft);He.position.set(.45,1.35,-.1),M.add(He);const we=new wt(.25,32,32,Math.PI/2,Math.PI),Xe=new b(we,It);Xe.scale.set(1.1,.6,.8),Xe.position.set(0,.84,.5),Xe.rotation.y=Math.PI;const $e=new wt(.25,32,32,Math.PI/2,Math.PI),Un=new b($e,ft);Un.scale.set(1.1,.6,.8),Un.position.set(0,.84,.5),Un.rotation.y=0;const Ct=new De(.25,32),re=new b(Ct,Rt);re.scale.set(.8,.6,.8),re.position.set(0,.84,.5),re.rotation.y=Math.PI/2;const me=new Kt;me.add(Xe),me.add(Un),me.add(re),M.add(me);const Ee=new zt({color:8374441,metalness:1,roughness:.25,envMap:lt,clearcoat:.7,clearcoatRoughness:.3}),R=new Xn;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const K={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},D=new li(R,K),W=new b(D,Ee);W.scale.set(.2,.2,.2),W.position.set(.25,1.2,0),W.rotation.y=Math.PI,W.rotation.x=Math.PI,M.add(W);const H=new wt(.35,32,32),mt=new b(H,Rt);mt.scale.set(.75,1.25,.65),mt.position.set(-.7,-.15,.2),M.add(mt);const Tt=new b(H,xt);Tt.scale.set(.75,1.25,.65),Tt.position.set(.7,-.15,.2),M.add(Tt);const Dt=new te(.2,.22,.6,32),Lt=new b(Dt,It);Lt.position.set(-.4,-1.05,0),M.add(Lt);const Xt=new b(Dt,ft);Xt.position.set(.4,-1.05,0),M.add(Xt);const Wt=new wt(.3,32,32),Bt=new b(Wt,It);Bt.scale.set(1,.72,1.5),Bt.position.set(-.4,-1.45,.17),M.add(Bt);const Zt=new b(Wt,ft);Zt.scale.set(1,.72,1.5),Zt.position.set(.4,-1.45,.17),M.add(Zt);const ie=new wt(.44,32,32),le=new b(ie,It);le.position.set(-.15,-.45,-.4),M.add(le);const _e=new b(ie,It);_e.position.set(.15,-.45,-.4),M.add(_e);const oe=new wt(.18,32,32),$t=new b(oe,It);$t.position.set(0,-.35,-.8),M.add($t),new ts().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(At){const Te=new je("X",{font:At,size:.2,depth:.05}),Ae=new b(Te,Nt);Ae.position.set(-.3,.99,.53),Ae.rotation.x=fe.degToRad(-5),Ae.rotation.y=fe.degToRad(-15),M.add(Ae);const xe=new je("O",{font:At,size:.2,depth:.05}),tn=new b(xe,Nt);tn.position.set(.14,.99,.53),tn.rotation.y=fe.degToRad(12),tn.rotation.x=fe.degToRad(-5),M.add(tn)}),a.value=it(),M.add(a.value),N.add(M),d.value=g(),M.add(d.value),f.value=A(),M.add(f.value),L(f.value),M.scale.set(1.4,1.4,1.4),N.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),q.position.set(t.bodyPosition.x,1,t.cameraPosition),q.lookAt(t.bodyPosition.x,0,0),q.position.z=4,M.rotation.x=.1,F(),Ke(()=>t.bodyPosition,At=>{M.position.set(At.x,At.y,At.z)}),Ke(()=>t.cameraPosition,At=>{q.position.set(t.bodyPosition.x,1,At),q.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{q.aspect=window.innerWidth/window.innerHeight,q.updateProjectionMatrix(),J.setSize(window.innerWidth,window.innerHeight)})}});function Q(){s.value=!0}function y(){i.value=!0}function E(){o.value=!0}function U(){r.value=!0}function X(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}const et=()=>{c.value=!0,console.log(c.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},at=()=>{l.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},Y=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},nt=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},$=()=>{c.value=!1,l.value=!1,h.value=!1,u.value=!1},gt=()=>{_.value=!0,d.value&&(d.value.rotation.y=Math.PI)},pt=()=>{x.value=!0,d.value&&(d.value.rotation.y=0)},yt=()=>{p.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},Ut=()=>{m.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},Vt=()=>{_.value=!1,x.value=!1,p.value=!1,m.value=!1},rt=()=>{requestAnimationFrame(rt),a.value&&(c.value&&(a.value.position.z-=na),l.value&&(a.value.position.z+=na),h.value&&(a.value.position.x-=na),u.value&&(a.value.position.x+=na)),I.render(P,B)},dt=()=>{requestAnimationFrame(dt),d.value&&(_.value&&(d.value.position.z-=ia),x.value&&(d.value.position.z+=ia),p.value&&(d.value.position.x-=ia),m.value&&(d.value.position.x+=ia))};dt(),rt();const Mt=()=>{T.value=!0,f.value&&(f.value.rotation.y=0)},O=()=>{w.value=!0,f.value&&(f.value.rotation.y=Math.PI)},ct=()=>{S.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},ot=()=>{z.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},ht=()=>{T.value=!1,w.value=!1,S.value=!1,z.value=!1},bt=()=>{requestAnimationFrame(bt),f.value&&(T.value&&(f.value.position.z-=sa),w.value&&(f.value.position.z+=sa),S.value&&(f.value.position.x-=sa),z.value&&(f.value.position.x+=sa))};return bt(),(it,g)=>(Ai(),Ri(gn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Kn(n.background?"no-bg":"three-canvas")},null,2),qt("div",I1,[qt("button",{class:"pixel-btn up",onMousedown:E,onMouseup:X},"UP",32),qt("div",L1,[qt("button",{class:"pixel-btn left",onMousedown:Q,onMouseup:X},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:y,onMouseup:X},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:U,onMouseup:X},"DOWN",32)]),qt("div",D1,[qt("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:et,onMouseup:$},"UP",32),qt("div",U1,[qt("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:Y,onMouseup:$},"LEFT",32),qt("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:nt,onMouseup:$},"RIGHT",32)]),qt("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:at,onMouseup:$},"DOWN",32)]),qt("div",N1,[qt("button",{class:"directional-btn-woman north-btn",onMousedown:gt,onMouseup:Vt},"UP",32),qt("div",F1,[qt("button",{class:"directional-btn-woman west-btn",onMousedown:yt,onMouseup:Vt},"LEFT",32),qt("button",{class:"directional-btn-woman east-btn",onMousedown:Ut,onMouseup:Vt},"RIGHT",32)]),qt("button",{class:"directional-btn-woman south-btn",onMousedown:pt,onMouseup:Vt},"DOWN",32)]),qt("div",O1,[qt("button",{class:"directional-btn-kid north-btn",onMousedown:Mt,onMouseup:ht},"UP",32),qt("div",B1,[qt("button",{class:"directional-btn-kid west-btn",onMousedown:ct,onMouseup:ht},"LEFT",32),qt("button",{class:"directional-btn-kid east-btn",onMousedown:ot,onMouseup:ht},"RIGHT",32)]),qt("button",{class:"directional-btn-kid south-btn",onMousedown:O,onMouseup:ht},"DOWN",32)])],64))}}),G1=Pi(z1,[["__scopeId","data-v-f25dfda5"]]),H1={class:"pixel-controls"},k1={class:"side-buttons"},V1=Zn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);hi(()=>{if(e.value){let d=function(Me,He){const we=new Kt,Xe=new wt(1,32,32),$e=new b(Xe,at);$e.scale.set(1,.8,1),we.add($e);const Un=new te(.1,.1,.5,16),Ct=new Ot({color:9127187}),re=new b(Un,Ct);return re.position.set(0,.9,0),we.add(re),we},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),jt.rotation.z-=.04,G.rotation.z+=.04,vt.rotation.z+=.03,st.rotation.z+=.03,v.rotation.y+=.04,Ne+=Re,m.position.y=t.bodyPosition.y+Math.sin(Ne)*pe;const Me=ce.getElapsedTime();se.forEach((He,we)=>{const Xe=.1+Math.sin(Me*3+ge[we])*.1;He.scale.set(Xe,Xe,Xe)}),p.render(_,x)};const _=new jn,x=new ke(75,window.innerWidth/window.innerHeight,.1,1e3),p=new $n({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new Kt,T=new Kt;_.add(T);const w=new Qi(16777215,2);_.add(w);const S=new Ji(16777215,4);S.position.set(5,5,5),_.add(S);const z=new Zi(16777215,5,50);z.position.set(0,2,4),_.add(z);const I=new ui,P=I.load("/3d-bear-arts/assets/pumpkin.jpg");P.wrapS=P.wrapT=Ve,P.repeat.set(.8,.85);const B=I.load("/3d-bear-arts/assets/pumpkin.jpg");B.wrapS=B.wrapT=Ve,B.repeat.set(1,1);const Q=I.load("/3d-bear-arts/assets/pumpkin.jpg");Q.wrapS=B.wrapT=Ve,Q.repeat.set(2,.8);const y=new zt({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new Kt,U=new zt({color:16747520,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),X=new zt({color:16747520,map:B,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),et=new zt({color:16747520,map:Q,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ve}),at=new zt({color:16747520,map:Q,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new zt({color:16766720,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new zt({color:9109504,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new zt({color:4915330,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const Y=new wt(1,32,32,0,Math.PI),nt=new b(Y,et),$=new b(Y,U);nt.scale.set(.85,.85,.8),$.scale.set(.85,.85,.8),nt.position.y=-.2,$.position.y=-.2,nt.rotation.y=Math.PI/2,$.rotation.y=Math.PI*1.5;const gt=new De(1,32),pt=new b(gt,X);pt.scale.set(.85,.85,.8),pt.position.set(0,-.2,0),pt.rotation.y=Math.PI/2;const yt=new Kt;yt.add(nt),yt.add($),yt.add(pt),m.add(yt);const Ut=new wt(.6,32,32,0,Math.PI),Vt=new b(Ut,U);Vt.scale.set(1,.95,.95),Vt.position.set(0,1,0),Vt.rotation.y=Math.PI*1.5;const rt=new b(Ut,et);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI/2;const dt=new De(.6,32),Mt=new b(dt,X);Mt.position.set(0,1,0),Mt.rotation.y=Math.PI/2,Mt.scale.set(1,.95,.95);const O=new Kt;O.add(Vt),O.add(rt),O.add(Mt),m.add(O);const ct=new wt(.25,32,32),ot=new b(ct,at);ot.position.set(-.45,1.35,-.1),m.add(ot);const ht=new b(ct,et);ht.position.set(.45,1.35,-.1),m.add(ht);const bt=new wt(.25,32,32,Math.PI/2,Math.PI),it=new b(bt,U);it.scale.set(1.1,.6,.8),it.position.set(0,.84,.5),it.rotation.y=Math.PI;const g=new wt(.25,32,32,Math.PI/2,Math.PI),A=new b(g,et);A.scale.set(1.1,.6,.8),A.position.set(0,.84,.5),A.rotation.y=0;const L=new De(.25,32),F=new b(L,U);F.scale.set(.8,.6,.8),F.position.set(0,.84,.5),F.rotation.y=Math.PI/2;const N=new Kt;N.add(it),N.add(A),N.add(F),m.add(N);const q=new Xn;q.moveTo(0,0),q.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),q.bezierCurveTo(-.6,.3,0,.6,0,1),q.bezierCurveTo(0,.6,.6,.3,.6,0),q.bezierCurveTo(.6,-.3,0,-.3,0,0);const J={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},M=new li(q,J),v=new b(M,y);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new wt(.35,32,32),j=new b(C,X);j.scale.set(.75,1.25,.65),j.position.set(-.7,-.15,.2),m.add(j);const k=new b(C,et);k.scale.set(.75,1.25,.65),k.position.set(.7,-.15,.2),m.add(k);const V=new te(.2,.22,.6,32),ut=new b(V,X);ut.position.set(-.4,-1.05,0),m.add(ut);const lt=new b(V,et);lt.position.set(.4,-1.05,0),m.add(lt);const _t=new wt(.3,32,32),Rt=new b(_t,at);Rt.scale.set(1,.72,1.5),Rt.position.set(-.4,-1.45,.17),m.add(Rt);const ft=new b(_t,et);ft.scale.set(1,.72,1.5),ft.position.set(.4,-1.45,.17),m.add(ft);const xt=new wt(.44,32,32),It=new b(xt,U);It.position.set(-.15,-.45,-.4),m.add(It);const Nt=new b(xt,et);Nt.position.set(.15,-.45,-.4),m.add(Nt);const Pt=new wt(.18,32,32),Yt=new b(Pt,at);Yt.position.set(0,-.35,-.8),m.add(Yt),Yt.renderOrder=1,new ts().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Me){const He=new je("X",{font:Me,size:.2,depth:.05}),we=new b(He,X);we.position.set(-.3,.99,.53),we.rotation.x=fe.degToRad(-5),we.rotation.y=fe.degToRad(-15),m.add(we);const Xe=new je("O",{font:Me,size:.2,depth:.05}),$e=new b(Xe,X);$e.position.set(.14,.99,.53),$e.rotation.y=fe.degToRad(12),$e.rotation.x=fe.degToRad(-5),m.add($e)}),m.add(E);const jt=d(),G=d(),vt=d(),st=d();jt.position.set(.35,-.35,-.3),G.position.set(.25,-.45,.3),vt.position.set(.3,.1,-.2),st.position.set(.25,.18,.4),jt.scale.set(.3,.3,.3),G.scale.set(.28,.28,.28),vt.scale.set(.25,.25,.25),st.scale.set(.23,.23,.23),G.rotation.z=Math.PI/4,vt.rotation.z=-Math.PI/4,st.rotation.y=-Math.PI/2,m.add(jt),m.add(G),m.add(vt),m.add(st);const tt=new Xn;tt.moveTo(-.5,0),tt.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),tt.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),tt.bezierCurveTo(-.05,.6,.05,.6,.15,.4),tt.bezierCurveTo(.25,.5,.25,.85,.5,.8),tt.bezierCurveTo(1,.6,.75,.25,.5,0),tt.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const St={depth:.3,bevelEnabled:!1},Et=new li(tt,St),Gt=new ji({color:0}),Jt=new b(Et,Gt);Jt.scale.set(.3,.3,.6),Jt.rotation.x=0,Jt.rotation.z=0,Jt.position.set(.26,.35,.25),m.add(Jt);const ne=new b(Et,Gt);ne.scale.set(.5,.5,.5),ne.position.set(.4,-.1,.54),m.add(ne);const ee=new b(Et,Gt);ee.scale.set(.5,.5,.5),ee.position.set(.32,-.35,.65),m.add(ee),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;const se=[Jt,ne,ee],ce=new Fp,ge=[0,Math.PI/2,Math.PI,0,Math.PI/3];let Re=.05,pe=.25,Ne=0;f(),Ke(()=>t.bodyPosition,Me=>{m.position.set(Me.x,Me.y,Me.z)}),Ke(()=>t.cameraPosition,Me=>{x.position.set(t.bodyPosition.x,1,Me),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(Ai(),Ri(gn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Kn(n.background?"no-bg":"three-canvas")},null,2),qt("div",H1,[qt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),qt("div",k1,[qt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),W1=Pi(V1,[["__scopeId","data-v-5eff72b3"]]),X1={class:"pixel-controls"},q1={class:"side-buttons"},Y1=Zn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);hi(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),J.rotation.y+=.03,Gt+=st,Jt+=tt,p.position.y=t.bodyPosition.y+Math.sin(Gt)*Et,J.position.y=t.bodyPosition.y+Math.sin(Jt)*St,jt.uniforms.u_time.value+=.25,x.render(f,_)};const f=new jn,_=new ke(75,window.innerWidth/window.innerHeight,.1,1e3),x=new $n({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new Kt,m=new Kt;f.add(m);const T=new Qi(16777215,2);f.add(T);const w=new Ji(16777215,4);w.position.set(5,5,5),f.add(w);const S=new Zi(16777215,5,50);S.position.set(0,2,4),f.add(S);const z=new ui,I=z.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=Ve,I.repeat.set(2,2);const P=z.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=Ve,P.repeat.set(1,1);const B=new zt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:ve}),Q=new zt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),y=new zt({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new zt({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:ve}),U=new zt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:ve}),X=new zt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:ve}),et=new wt(1,32,32,0,Math.PI),at=new b(et,B),Y=new b(et,U);at.scale.set(.85,.85,.8),Y.scale.set(.85,.85,.8),at.position.y=-.2,Y.position.y=-.2,at.rotation.y=Math.PI/2,Y.rotation.y=Math.PI*1.5;const nt=new De(1,32),$=new b(nt,U);$.scale.set(.85,.85,.8),$.position.set(0,-.2,0),$.rotation.y=Math.PI/2;const gt=new Kt;gt.add(at),gt.add(Y),gt.add($),p.add(gt);const pt=new wt(.6,32,32,0,Math.PI),yt=new b(pt,X);yt.scale.set(1,.95,.95),yt.position.set(0,1,0),yt.rotation.y=Math.PI*1.5;const Ut=new b(pt,Q);Ut.scale.set(1,.95,.95),Ut.position.set(0,1,0),Ut.rotation.y=Math.PI/2;const Vt=new De(.6,32),rt=new b(Vt,U);rt.position.set(0,1,0),rt.rotation.y=Math.PI/2,rt.scale.set(1,.95,.95);const dt=new Kt;dt.add(yt),dt.add(Ut),dt.add(rt),p.add(dt);const Mt=new wt(.25,32,32),O=new b(Mt,X);O.position.set(-.45,1.35,-.1),p.add(O);const ct=new b(Mt,Q);ct.position.set(.45,1.35,-.1),p.add(ct);const ot=new wt(.25,32,32,Math.PI/2,Math.PI),ht=new b(ot,X);ht.scale.set(1.1,.6,.8),ht.position.set(0,.84,.5),ht.rotation.y=Math.PI;const bt=new wt(.25,32,32,Math.PI/2,Math.PI),it=new b(bt,Q);it.scale.set(1.1,.6,.8),it.position.set(0,.84,.5),it.rotation.y=0;const g=new De(.25,32),A=new b(g,E);A.scale.set(.8,.6,.8),A.position.set(0,.84,.5),A.rotation.y=Math.PI/2;const L=new Kt;L.add(ht),L.add(it),L.add(A),p.add(L);const F=new Xn;F.moveTo(0,0),F.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),F.bezierCurveTo(-.6,.3,0,.6,0,1),F.bezierCurveTo(0,.6,.6,.3,.6,0),F.bezierCurveTo(.6,-.3,0,-.3,0,0);const N={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},q=new li(F,N),J=new b(q,y);J.scale.set(.35,.35,.35),J.position.set(0,-.05,0),J.rotation.y=Math.PI,J.rotation.x=Math.PI,p.add(J);const M=new wt(.35,32,32),v=new b(M,U);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),p.add(v);const C=new b(M,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),p.add(C);const j=new te(.2,.22,.6,32),k=new b(j,U);k.position.set(-.4,-1.05,0),p.add(k);const V=new b(j,E);V.position.set(.4,-1.05,0),p.add(V);const ut=new wt(.3,32,32),lt=new b(ut,U);lt.scale.set(1,.72,1.5),lt.position.set(-.4,-1.45,.17),p.add(lt);const _t=new b(ut,E);_t.scale.set(1,.72,1.5),_t.position.set(.4,-1.45,.17),p.add(_t);const Rt=new wt(.44,32,32),ft=new b(Rt,E);ft.position.set(-.15,-.45,-.4),p.add(ft);const xt=new b(Rt,E);xt.position.set(.15,-.45,-.4),p.add(xt);const It=new wt(.18,32,32),Nt=new b(It,U);Nt.position.set(0,-.35,-.8),p.add(Nt);const Pt=new wt(.6,32,32,0,Math.PI*2,0,Math.PI/2),Yt=new zt({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Ft=new b(Pt,Yt);Ft.position.set(0,-.2,0),Ft.rotation.x=Math.PI,Ft.scale.set(1.25,1.25,1.25),gt.add(Ft);const jt=new Yn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
                precision mediump float;
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,fragmentShader:`
                precision mediump float;
                uniform float u_time;
                uniform float u_waveFrequency;
                uniform float u_waveAmplitude;
                uniform float u_waveSpeed;
                varying vec2 vUv;

                void main() {
                    float waveX = sin(vUv.x * u_waveFrequency + u_time * u_waveSpeed) * u_waveAmplitude;
                    float waveY = cos(vUv.y * u_waveFrequency + u_time * u_waveSpeed) * u_waveAmplitude;

                    vec3 baseColor = vec3(0.3, 0.0, 0.0);
                    vec3 waveColor = vec3(1.0, 0.1, 0.1);

                    vec3 color = mix(baseColor, waveColor, 0.5 + (waveX + waveY) * 0.5); 
                    gl_FragColor = vec4(color, 0.75); // Adjust opacity for visibility
                }
            `}),G=new b(nt,jt);G.position.set(0,-.26,0),G.scale.set(.7,.7,.7),G.rotation.x=-Math.PI/2,G.renderOrder=1,gt.add(G),new ts().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ne){const ee=new je("X",{font:ne,size:.2,depth:.05}),se=new b(ee,U);se.position.set(-.3,.99,.53),se.rotation.x=fe.degToRad(-5),se.rotation.y=fe.degToRad(-15),p.add(se);const ce=new je("O",{font:ne,size:.2,depth:.05}),ge=new b(ce,U);ge.position.set(.14,.99,.53),ge.rotation.y=fe.degToRad(12),ge.rotation.x=fe.degToRad(-5),p.add(ge)}),Nt.renderOrder=1,p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let st=.05,tt=.06,St=.2,Et=.25,Gt=0,Jt=0;d(),Ke(()=>t.bodyPosition,ne=>{p.position.set(ne.x,ne.y,ne.z)}),Ke(()=>t.cameraPosition,ne=>{_.position.set(t.bodyPosition.x,1,ne),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(Ai(),Ri(gn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Kn(n.background?"no-bg":"three-canvas")},null,2),qt("div",X1,[qt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),qt("div",q1,[qt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),$1=Pi(Y1,[["__scopeId","data-v-eb44448e"]]),j1={class:"pixel-controls"},K1={class:"side-buttons"},Z1=15,J1=5,Q1=Zn({__name:"Santa",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);const a=ho(null),c=new $n({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new jn;const l=new ke(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5,hi(()=>{if(e.value){let x=function(){const Ct=new Kt,re=new Yi(.12,.05,16,100),me=new Ot({color:16777215}),Ee=new b(re,me);Ee.position.set(0,1.65,0),Ee.rotation.x=Math.PI/2,Ct.add(Ee);const R=new wi(.15,.3,32),K=new Ot({color:16711680}),D=new b(R,K);D.position.set(0,1.8,0),Ct.add(D);const W=new wt(.05,32,32),H=new Ot({color:16777215}),mt=new b(W,H);return mt.position.set(0,1.93,0),Ct.add(mt),Ct.position.set(0,-.1,0),Ct},p=function(){const Ct=new Kt,re=new wt(.15,32,32),me=new Ot({color:16764057}),Ee=new b(re,me);Ee.position.set(0,.4,0),Ct.add(Ee);const R=new wi(.08,.15,32);new Ot({color:16764057});const K=new b(R,pt);K.position.set(-.1,.55,0),K.rotation.z=Math.PI/6,Ct.add(K);const D=new b(R,pt);D.position.set(.1,.55,0),D.rotation.z=-Math.PI/6,Ct.add(D);const W=new te(.12,.15,.3,32),H=new Ot({color:16764057}),mt=new b(W,H);mt.position.set(0,.2,0),Ct.add(mt);const Tt=new te(.05,.05,.2,32),Dt=new Ot({color:16764057}),Lt=new b(Tt,Dt);Lt.position.set(-.07,-.05,.05),Ct.add(Lt);const Xt=new b(Tt,Dt);Xt.position.set(.07,-.05,.05),Ct.add(Xt);const Wt=new te(.04,.04,.2,32),Bt=new Ot({color:16764057}),Zt=new b(Wt,pt);Zt.position.set(-.15,.25,0),Zt.rotation.z=Math.PI/4,Ct.add(Zt);const ie=new b(Wt,Bt);ie.position.set(.15,.25,0),ie.rotation.z=-Math.PI/4,Ct.add(ie);const le=new te(.03,.03,.25,32),_e=new Ot({color:16764057}),oe=new b(le,_e);return oe.position.set(0,.1,-.2),oe.rotation.x=Math.PI/4,Ct.add(oe),Ct.scale.set(.75,.75,.75),Ct.position.set(.2,0,.2),Ct},m=function(){const Ct=new Kt,re=new wt(.2,32,32),me=new Ot({color:16764057}),Ee=new b(re,me);Ee.position.set(0,1,0),Ct.add(Ee);const R=new Ot({color:16777215}),K=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const mi of K){const es=new wt(mi.size,16,16),Ii=new b(es,R);Ii.position.set(mi.x,mi.y-.06,mi.z-.01),Ct.add(Ii)}const D=new Ot({color:16777215}),W=new te(.05,.06,.1,32),H=new b(W,D);H.position.set(-.06,.93,.18),H.rotation.z=Math.PI/4;const mt=new te(.05,.06,.1,32),Tt=new b(mt,D);Tt.position.set(.06,.93,.18),Tt.rotation.z=-Math.PI/4;const Dt=new Yi(.12,.05,16,100),Lt=new Ot({color:16777215}),Xt=new b(Dt,Lt);Xt.position.set(0,1.15,0),Xt.rotation.x=Math.PI/2,Ct.add(Xt);const Wt=new wi(.15,.3,32),Bt=new Ot({color:16711680}),Zt=new b(Wt,Bt);Zt.position.set(0,1.3,0),Ct.add(Zt);const ie=new wt(.05,32,32),le=new Ot({color:16777215}),_e=new b(ie,le);_e.position.set(0,1.43,0),Ct.add(_e);const oe=new te(.2,.25,.6,32),$t=new Ot({color:16711680}),be=new b(oe,$t);be.position.set(0,.5,0),Ct.add(be);const At=new te(.25,.25,.1,32),Te=new Ot({color:0}),Ae=new b(At,Te);Ae.position.set(0,.4,.005),Ct.add(Ae);const xe=new te(.06,.06,.3,32),tn=new Ot({color:16711680}),Se=new b(xe,tn);Se.position.set(-.25,.75,0),Se.rotation.z=Math.PI/4,Ct.add(Se);const qe=new b(xe,tn);qe.position.set(.25,.75,0),qe.rotation.z=-Math.PI/4,Ct.add(qe);const Mn=new wt(.07,32,32),Be=new Ot({color:16777215}),cn=new b(Mn,Be);cn.position.set(-.35,.85,0),Ct.add(cn);const Nn=new b(Mn,Be);Nn.position.set(.35,.85,0),Ct.add(Nn);const hn=new te(.1,.1,.15,32),wn=new Ot({color:16711680}),In=new te(.08,.08,.4,32),sn=new Ot({color:0}),Sn=new b(In,sn);Sn.position.set(-.1,.1,0),Ct.add(Sn);const Ln=new b(hn,wn);Ln.position.set(-.1,-.05,0),Ct.add(Ln);const Fn=new b(In,sn);Fn.position.set(.1,.1,0),Ct.add(Fn);const dn=new b(hn,wn);dn.position.set(.1,-.05,0),Ct.add(dn);const fn=new wt(.12,32,32),di=new Ot({color:16711680}),fi=new b(fn,di);fi.scale.set(1,.7,1.5),fi.position.set(-.1,-.12,.12),Ct.add(fi);const pi=new b(fn,di);return pi.scale.set(1,.7,1.5),pi.position.set(.1,-.1,.12),Ct.add(pi),Ct.scale.set(.25,.25,.25),Ct.position.set(.2,.5,-0),Ct},T=function(){let Ct=0;function re(){requestAnimationFrame(re),Ct+=.4,ce.position.y=.45+Math.sin(Ct)*.5,E.render(Q,y)}re()},w=function(Ct){let re=1,me=0;function Ee(){requestAnimationFrame(Ee),Ct.position.x+=.01*re,Ct.position.x>=.5?(re=-1,Ct.rotation.y=Math.PI):Ct.position.x<=0&&(re=1,Ct.rotation.y=0),me+=1,Ct.position.y=-.2+Math.sin(me)*.01,Ct.position.z=.5,E.render(Q,y)}Ee()},S=function(){const Ct=new Kt,re=new Pn(.7,.8,.7),me=new Ot({color:9127187}),Ee=new b(re,me);Ee.position.set(0,.4,0),Ct.add(Ee);const R=new wi(.55,.25,4),K=new Ot({color:16777215}),D=new b(R,K);D.position.set(0,.9,0),D.rotation.y=Math.PI/4,Ct.add(D);const W=new Pn(.25,.35,.05),H=new Ot({color:6636321}),mt=new b(W,H);mt.position.set(0,.2,.36),Ct.add(mt);const Tt=new Pn(.15,.15,.05),Dt=new Ot({color:8900331}),Lt=new b(Tt,Dt);Lt.position.set(-.2,.5,.38),Ct.add(Lt);const Xt=new b(Tt,Dt);Xt.position.set(.2,.5,.38),Ct.add(Xt);const Wt=new Pn(.2,.4,.2),Bt=new Ot({color:8421504}),Zt=new b(Wt,Bt);Zt.position.set(0,.95,0),Ct.add(Zt);const ie=new Yi(.07,.04,32,100),le=new Ot({color:2263842}),_e=new b(ie,le);return _e.position.set(0,.45,.38),Ct.add(_e),Ct.position.set(.22,-.2,0),Ct.scale.set(.5,.5,.5),Ct},z=function(Ct=1,re={x:0,y:0,z:0}){const me=new Kt,Ee=new te(1.2,.9,3,32),R=new Ot({color:25153}),K=new b(Ee,R);me.add(K);const D=new te(1.3,1.3,.2,32),W=new Ot({color:3355443}),H=new b(D,W);H.position.y=1.6,me.add(H);const mt=2,Tt=new te(1.1,1.1,mt,32),Dt=new Ot({color:9127187}),Lt=new b(Tt,Dt);return Lt.position.y=0,new ui().load("/3d-bear-arts/assets/starbucks-logo.png",function(Wt){Wt.repeat.set(4,1),Wt.offset.set(.25,0),Wt.wrapS=Ve,Wt.wrapT=Ve;const Bt=new Ot({color:9127187,map:Wt,transparent:!0}),Zt=new te(1.1,1.05,1.5,32),ie=new b(Zt,Bt);ie.position.y=-.5,me.add(ie)}),me.scale.set(Ct,Ct,Ct),me.position.set(re.x,re.y,re.z),me},I=function(){let Ct=1;function re(){requestAnimationFrame(re),Ct-=.1,Me.position.y=-.5+Math.sin(Ct)*4,E.render(Q,y)}re()},P=function(){requestAnimationFrame(P);const Ct=we.attributes.position.array;for(let re=1;re<Ct.length;re+=3)Ct[re]-=.02,Ct[re]<-10&&(Ct[re]=10);we.attributes.position.needsUpdate=!0,E.render(Q,y)},B=function(){requestAnimationFrame(B),i.value&&(U.rotation.y+=.03),s.value&&(U.rotation.y-=.03),o.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),v.uniforms.u_time.value+=.5,ge.rotation.y+=.45,Ne.rotation.y+=.05,Me.rotation.y+=.08,E.render(Q,y)};const Q=new jn,y=new ke(75,window.innerWidth/window.innerHeight,.1,1e3),E=new $n({antialias:!0,alpha:!0});E.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(E.domElement);const U=new Kt,X=new Kt;Q.add(X);const et=new Qi(16777215,2);Q.add(et);const at=new Ji(16777215,4);at.position.set(5,5,5),Q.add(at);const Y=new Zi(16777215,5,50);Y.position.set(0,2,4),Q.add(Y);const nt=new ui,$=nt.load("/3d-bear-arts/assets/house.jpg");$.wrapS=$.wrapT=Ve,$.repeat.set(1,1),nt.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const gt=new zt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:ve});new zt({color:16777215,metalness:.3,map:$,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.4,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:ve});const pt=new zt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:ve}),yt=new Up().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);Q.environment=yt;const Ut=new zt({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:ve}),Vt=new zt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),rt=new wt(1,32,32,0,Math.PI),dt=new b(rt,gt),Mt=new b(rt,pt);dt.scale.set(.85,.85,.8),Mt.scale.set(.85,.85,.8),dt.position.y=-.2,Mt.position.y=-.2,dt.rotation.y=Math.PI/2,Mt.rotation.y=Math.PI*1.5;const O=new De(1,32),ct=new b(O,Ut);ct.scale.set(.85,.85,.8),ct.position.set(0,-.2,0),ct.rotation.y=Math.PI/2;const ot=new Kt;ot.add(dt),ot.add(Mt),ot.add(ct),U.add(ot);const ht=new wt(.6,32,32,0,Math.PI),bt=new b(ht,pt);bt.scale.set(1,.95,.95),bt.position.set(0,1,0),bt.rotation.y=Math.PI*1.5;const it=new b(ht,gt);it.scale.set(1,.95,.95),it.position.set(0,1,0),it.rotation.y=Math.PI/2;const g=new De(.6,32),A=new b(g,Ut);A.position.set(0,1,0),A.rotation.y=Math.PI/2,A.scale.set(1,.95,.95);const L=new Kt;L.add(bt),L.add(it),L.add(A),U.add(L);const F=new wt(.6,32,32,0,Math.PI*2,0,Math.PI/2),N=new zt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),q=new b(F,N);q.position.set(0,-.2,0),q.rotation.x=Math.PI,q.scale.set(1.25,1.25,1.25),ot.add(q);const J=new zt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:ve,transparent:!1,opacity:.8}),M=new b(O,J);M.scale.set(.7,.7,.7),M.position.set(0,-.3,0),M.rotation.x=Math.PI/2,M.renderOrder=1,ot.add(M),U.add(ot);const v=new Yn({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
                precision mediump float;
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,fragmentShader:`
                precision mediump float;
                uniform float u_time;
                varying vec2 vUv;

                void main() {
                    float shimmer = sin(u_time * 5.0 + vUv.x * 10.0) * 0.1;
                    vec3 color = vec3(1.0) * (0.9 + shimmer); // Bright white with subtle shimmer
                    gl_FragColor = vec4(color, 0.8); // Slight transparency for a soft overlay
                }
            `}),C=new b(O,v);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,ot.add(C);const j=new wt(.25,32,32),k=new b(j,pt);k.position.set(-.45,1.35,-.1),U.add(k);const V=new b(j,gt);V.position.set(.45,1.35,-.1),U.add(V);const ut=new wt(.25,32,32,Math.PI/2,Math.PI),lt=new b(ut,pt);lt.scale.set(1.1,.6,.8),lt.position.set(0,.84,.5),lt.rotation.y=Math.PI;const _t=new wt(.25,32,32,Math.PI/2,Math.PI),Rt=new b(_t,gt);Rt.scale.set(1.1,.6,.8),Rt.position.set(0,.84,.5),Rt.rotation.y=0;const ft=new De(.25,32),xt=new b(ft,Ut);xt.scale.set(.8,.6,.8),xt.position.set(0,.84,.5),xt.rotation.y=Math.PI/2;const It=new Kt;It.add(lt),It.add(Rt),It.add(xt),U.add(It);const Nt=new wt(.35,32,32),Pt=new b(Nt,pt);Pt.scale.set(.75,1.25,.65),Pt.position.set(-.7,-.15,.2),U.add(Pt);const Yt=new b(Nt,gt);Yt.scale.set(.75,1.25,.65),Yt.position.set(.7,-.15,.2),U.add(Yt);const Ft=new te(.2,.22,.6,32),jt=new b(Ft,pt);jt.position.set(-.4,-1.05,0),U.add(jt);const G=new b(Ft,gt);G.position.set(.4,-1.05,0),U.add(G);const vt=new wt(.3,32,32),st=new b(vt,pt);st.scale.set(1,.72,1.5),st.position.set(-.4,-1.45,.17),U.add(st);const tt=new b(vt,gt);tt.scale.set(1,.72,1.5),tt.position.set(.4,-1.45,.17),U.add(tt);const St=new wt(.44,32,32),Et=new b(St,pt);Et.position.set(-.15,-.45,-.4),U.add(Et);const Gt=new b(St,Vt);Gt.position.set(.15,-.45,-.4),U.add(Gt);const Jt=new wt(.18,32,32),ne=new b(Jt,pt);ne.position.set(0,-.35,-.8),U.add(ne),new ts().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ct){const re=new je("X",{font:Ct,size:.2,depth:.05}),me=new b(re,Vt);me.position.set(-.3,.99,.53),me.rotation.x=fe.degToRad(-5),me.rotation.y=fe.degToRad(-15),U.add(me);const Ee=new je("O",{font:Ct,size:.2,depth:.05}),R=new b(Ee,Vt);R.position.set(.14,.99,.53),R.rotation.y=fe.degToRad(12),R.rotation.x=fe.degToRad(-5),U.add(R)});const se=x();U.add(se),p();const ce=m();U.add(ce);const ge=m();ge.position.set(-.2,-.1,.5),U.add(ge),T(),a.value=m(),U.add(a.value),w(a.value);const Re=S();U.add(Re);const pe=S();pe.position.set(-.2,-.2,0),pe.scale.set(.35,.35,.35),U.add(pe);const Ne=z(.1,{x:0,y:0,z:1}),Me=z(1.2,{x:0,y:0,z:0});Q.add(Me),I();const He=1e3,we=new yn,Xe=[];for(let Ct=0;Ct<He;Ct++){const re=(Math.random()-.5)*20,me=Math.random()*20,Ee=(Math.random()-.5)*20;Xe.push(re,me,Ee)}we.setAttribute("position",new We(Xe,3));const $e=new Aa({color:16777215,size:.1,transparent:!0,opacity:.8}),Un=new ma(we,$e);U.add(Un),P(),U.scale.set(1.2,1.2,1.2),Q.add(U),U.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4,U.rotation.x=.1,B(),Ke(()=>t.bodyPosition,Ct=>{U.position.set(Ct.x,Ct.y,Ct.z)}),Ke(()=>t.cameraPosition,Ct=>{y.position.set(t.bodyPosition.x,1,Ct),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),E.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function f(){r.value=!0}function _(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let x=0;x<Z1;x++){const p=document.createElement("div");p.classList.add("confetti"),p.style.left=`${Math.random()*100}vw`,p.style.animationDuration=`${Math.random()*3+4}s`,p.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(p)}for(let x=0;x<J1;x++){const p=document.createElement("div");p.classList.add("light"),document.body.appendChild(p)}return(x,p)=>(Ai(),Ri(gn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Kn(n.background?"no-bg":"three-canvas")},null,2),qt("div",j1,[qt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),qt("div",K1,[qt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:_},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:_},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:f,onMouseup:_},"DOWN",32)])],64))}}),tE=Pi(Q1,[["__scopeId","data-v-e05c125f"]]),eE={class:"pixel-controls"},nE={class:"side-buttons"},iE=15,sE=5,oE=Zn({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);const a=ho(null),c=new $n({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new jn;const l=new ke(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5,hi(()=>{if(e.value){let x=function(){const D=new Kt,W=new Yi(.12,.05,16,100),H=new Ot({color:16777215}),mt=new b(W,H);mt.position.set(0,1.65,0),mt.rotation.x=Math.PI/2,D.add(mt);const Tt=new wi(.15,.3,32),Dt=new Ot({color:16711680}),Lt=new b(Tt,Dt);Lt.position.set(0,1.8,0),D.add(Lt);const Xt=new wt(.05,32,32),Wt=new Ot({color:16777215}),Bt=new b(Xt,Wt);return Bt.position.set(0,1.93,0),D.add(Bt),D.position.set(0,-.1,0),D},p=function(){const D=new Kt,W=new wt(.15,32,32),H=new Ot({color:16764057}),mt=new b(W,H);mt.position.set(0,.4,0),D.add(mt);const Tt=new wi(.08,.15,32);new Ot({color:16764057});const Dt=new b(Tt,pt);Dt.position.set(-.1,.55,0),Dt.rotation.z=Math.PI/6,D.add(Dt);const Lt=new b(Tt,pt);Lt.position.set(.1,.55,0),Lt.rotation.z=-Math.PI/6,D.add(Lt);const Xt=new te(.12,.15,.3,32),Wt=new Ot({color:16764057}),Bt=new b(Xt,Wt);Bt.position.set(0,.2,0),D.add(Bt);const Zt=new te(.05,.05,.2,32),ie=new Ot({color:16764057}),le=new b(Zt,ie);le.position.set(-.07,-.05,.05),D.add(le);const _e=new b(Zt,ie);_e.position.set(.07,-.05,.05),D.add(_e);const oe=new te(.04,.04,.2,32),$t=new Ot({color:16764057}),be=new b(oe,pt);be.position.set(-.15,.25,0),be.rotation.z=Math.PI/4,D.add(be);const At=new b(oe,$t);At.position.set(.15,.25,0),At.rotation.z=-Math.PI/4,D.add(At);const Te=new te(.03,.03,.25,32),Ae=new Ot({color:16764057}),xe=new b(Te,Ae);return xe.position.set(0,.1,-.2),xe.rotation.x=Math.PI/4,D.add(xe),D.scale.set(.75,.75,.75),D.position.set(.2,0,.2),D},m=function(){const D=new Kt,W=new wt(.2,32,32),H=new Ot({color:16764057}),mt=new b(W,H);mt.position.set(0,1,0),D.add(mt);const Tt=new Ot({color:16777215}),Dt=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Sr of Dt){const Bp=new wt(Sr.size,16,16),Du=new b(Bp,Tt);Du.position.set(Sr.x,Sr.y-.06,Sr.z-.01),D.add(Du)}const Lt=new Ot({color:16777215}),Xt=new te(.05,.06,.1,32),Wt=new b(Xt,Lt);Wt.position.set(-.06,.93,.18),Wt.rotation.z=Math.PI/4;const Bt=new te(.05,.06,.1,32),Zt=new b(Bt,Lt);Zt.position.set(.06,.93,.18),Zt.rotation.z=-Math.PI/4;const ie=new Yi(.12,.05,16,100),le=new Ot({color:16777215}),_e=new b(ie,le);_e.position.set(0,1.15,0),_e.rotation.x=Math.PI/2,D.add(_e);const oe=new wi(.15,.3,32),$t=new Ot({color:16711680}),be=new b(oe,$t);be.position.set(0,1.3,0),D.add(be);const At=new wt(.05,32,32),Te=new Ot({color:16777215}),Ae=new b(At,Te);Ae.position.set(0,1.43,0),D.add(Ae);const xe=new te(.2,.25,.6,32),tn=new Ot({color:16711680}),Se=new b(xe,tn);Se.position.set(0,.5,0),D.add(Se);const qe=new te(.25,.25,.1,32),Mn=new Ot({color:0}),Be=new b(qe,Mn);Be.position.set(0,.4,.005),D.add(Be);const cn=new te(.06,.06,.3,32),Nn=new Ot({color:16711680}),hn=new b(cn,Nn);hn.position.set(-.25,.75,0),hn.rotation.z=Math.PI/4,D.add(hn);const wn=new b(cn,Nn);wn.position.set(.25,.75,0),wn.rotation.z=-Math.PI/4,D.add(wn);const In=new wt(.07,32,32),sn=new Ot({color:16777215}),Sn=new b(In,sn);Sn.position.set(-.35,.85,0),D.add(Sn);const Ln=new b(In,sn);Ln.position.set(.35,.85,0),D.add(Ln);const Fn=new te(.1,.1,.15,32),dn=new Ot({color:16711680}),fn=new te(.08,.08,.4,32),di=new Ot({color:0}),fi=new b(fn,di);fi.position.set(-.1,.1,0),D.add(fi);const pi=new b(Fn,dn);pi.position.set(-.1,-.05,0),D.add(pi);const mi=new b(fn,di);mi.position.set(.1,.1,0),D.add(mi);const es=new b(Fn,dn);es.position.set(.1,-.05,0),D.add(es);const Ii=new wt(.12,32,32),Lu=new Ot({color:16711680}),$a=new b(Ii,Lu);$a.scale.set(1,.7,1.5),$a.position.set(-.1,-.12,.12),D.add($a);const ja=new b(Ii,Lu);return ja.scale.set(1,.7,1.5),ja.position.set(.1,-.1,.12),D.add(ja),D.scale.set(.25,.25,.25),D.position.set(.2,.5,-0),D},T=function(){let D=0;function W(){requestAnimationFrame(W),D+=.4,ce.position.y=.45+Math.sin(D)*.5,E.render(Q,y)}W()},w=function(D){let W=1,H=0;function mt(){requestAnimationFrame(mt),D.position.x+=.01*W,D.position.x>=.5?(W=-1,D.rotation.y=Math.PI):D.position.x<=0&&(W=1,D.rotation.y=0),H+=1,D.position.y=-.2+Math.sin(H)*.01,D.position.z=.5,E.render(Q,y)}mt()},S=function(){const D=new Kt,W=new Pn(.7,.8,.7),H=new Ot({color:9127187}),mt=new b(W,H);mt.position.set(0,.4,0),D.add(mt);const Tt=new wi(.55,.25,4),Dt=new Ot({color:16777215}),Lt=new b(Tt,Dt);Lt.position.set(0,.9,0),Lt.rotation.y=Math.PI/4,D.add(Lt);const Xt=new Pn(.25,.35,.05),Wt=new Ot({color:6636321}),Bt=new b(Xt,Wt);Bt.position.set(0,.2,.36),D.add(Bt);const Zt=new Pn(.15,.15,.05),ie=new Ot({color:8900331}),le=new b(Zt,ie);le.position.set(-.2,.5,.38),D.add(le);const _e=new b(Zt,ie);_e.position.set(.2,.5,.38),D.add(_e);const oe=new Pn(.2,.4,.2),$t=new Ot({color:8421504}),be=new b(oe,$t);be.position.set(0,.95,0),D.add(be);const At=new Yi(.07,.04,32,100),Te=new Ot({color:2263842}),Ae=new b(At,Te);return Ae.position.set(0,.45,.38),D.add(Ae),D.position.set(.22,-.2,0),D.scale.set(.5,.5,.5),D},z=function(D=1,W={x:0,y:0,z:0}){const H=new Kt,mt=new te(1.2,.9,3,32),Tt=new Ot({color:25153}),Dt=new b(mt,Tt);H.add(Dt);const Lt=new te(1.3,1.3,.2,32),Xt=new Ot({color:3355443}),Wt=new b(Lt,Xt);return Wt.position.y=1.6,H.add(Wt),new ui().load("/3d-bear-arts/assets/starbucks-logo.png",function(Zt){Zt.repeat.set(4,1),Zt.offset.set(.25,0),Zt.wrapS=Ve,Zt.wrapT=Ve;const ie=new Ot({color:9127187,map:Zt,transparent:!0}),le=new te(1.1,1.05,1.5,32),_e=new b(le,ie);_e.position.y=-.5,H.add(_e)}),H.scale.set(D,D,D),H.position.set(W.x,W.y,W.z),H},I=function(){requestAnimationFrame(I);const D=we.attributes.position.array;for(let W=1;W<D.length;W+=3)D[W]-=.02,D[W]<-10&&(D[W]=10);we.attributes.position.needsUpdate=!0,E.render(Q,y)},P=function(){requestAnimationFrame(P);const D=Ee.attributes.position.array;for(let W=1;W<D.length;W+=3)D[W]-=.02,D[W]<-me&&(D[W]=me);Ee.attributes.position.needsUpdate=!0,E.render(Q,y)},B=function(){requestAnimationFrame(B),i.value&&(U.rotation.y+=.03),s.value&&(U.rotation.y-=.03),o.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),v.uniforms.u_time.value+=.5,ge.rotation.y+=.45,Ne.rotation.y+=.05,Me.rotation.y+=.05,U.rotation.y-=.05,E.render(Q,y)};const Q=new jn,y=new ke(75,window.innerWidth/window.innerHeight,.1,1e3),E=new $n({antialias:!0,alpha:!0});E.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(E.domElement);const U=new Kt,X=new Kt;Q.add(X);const et=new Qi(16777215,2);Q.add(et);const at=new Ji(16777215,4);at.position.set(5,5,5),Q.add(at);const Y=new Zi(16777215,5,50);Y.position.set(0,2,4),Q.add(Y);const nt=new ui,$=nt.load("/3d-bear-arts/assets/house.jpg");$.wrapS=$.wrapT=Ve,$.repeat.set(1,1),nt.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const gt=new zt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:ve});new zt({color:16777215,metalness:.3,map:$,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.4,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:ve});const pt=new zt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:ve}),yt=new Up().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);Q.environment=yt;const Ut=new zt({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:ve}),Vt=new zt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),rt=new wt(1,32,32,0,Math.PI),dt=new b(rt,gt),Mt=new b(rt,pt);dt.scale.set(.85,.85,.8),Mt.scale.set(.85,.85,.8),dt.position.y=-.2,Mt.position.y=-.2,dt.rotation.y=Math.PI/2,Mt.rotation.y=Math.PI*1.5;const O=new De(1,32),ct=new b(O,Ut);ct.scale.set(.85,.85,.8),ct.position.set(0,-.2,0),ct.rotation.y=Math.PI/2;const ot=new Kt;ot.add(dt),ot.add(Mt),ot.add(ct),U.add(ot);const ht=new wt(.6,32,32,0,Math.PI),bt=new b(ht,pt);bt.scale.set(1,.95,.95),bt.position.set(0,1,0),bt.rotation.y=Math.PI*1.5;const it=new b(ht,gt);it.scale.set(1,.95,.95),it.position.set(0,1,0),it.rotation.y=Math.PI/2;const g=new De(.6,32),A=new b(g,Ut);A.position.set(0,1,0),A.rotation.y=Math.PI/2,A.scale.set(1,.95,.95);const L=new Kt;L.add(bt),L.add(it),L.add(A),U.add(L);const F=new wt(.6,32,32,0,Math.PI*2,0,Math.PI/2),N=new zt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),q=new b(F,N);q.position.set(0,-.2,0),q.rotation.x=Math.PI,q.scale.set(1.25,1.25,1.25),ot.add(q);const J=new zt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:ve,transparent:!1,opacity:.8}),M=new b(O,J);M.scale.set(.7,.7,.7),M.position.set(0,-.3,0),M.rotation.x=Math.PI/2,M.renderOrder=1,ot.add(M),U.add(ot);const v=new Yn({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
                precision mediump float;
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,fragmentShader:`
                precision mediump float;
                uniform float u_time;
                varying vec2 vUv;

                void main() {
                    float shimmer = sin(u_time * 5.0 + vUv.x * 10.0) * 0.1;
                    vec3 color = vec3(1.0) * (0.9 + shimmer); // Bright white with subtle shimmer
                    gl_FragColor = vec4(color, 0.8); // Slight transparency for a soft overlay
                }
            `}),C=new b(O,v);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,ot.add(C);const j=new wt(.25,32,32),k=new b(j,pt);k.position.set(-.45,1.35,-.1),U.add(k);const V=new b(j,gt);V.position.set(.45,1.35,-.1),U.add(V);const ut=new wt(.25,32,32,Math.PI/2,Math.PI),lt=new b(ut,pt);lt.scale.set(1.1,.6,.8),lt.position.set(0,.84,.5),lt.rotation.y=Math.PI;const _t=new wt(.25,32,32,Math.PI/2,Math.PI),Rt=new b(_t,gt);Rt.scale.set(1.1,.6,.8),Rt.position.set(0,.84,.5),Rt.rotation.y=0;const ft=new De(.25,32),xt=new b(ft,Ut);xt.scale.set(.8,.6,.8),xt.position.set(0,.84,.5),xt.rotation.y=Math.PI/2;const It=new Kt;It.add(lt),It.add(Rt),It.add(xt),U.add(It);const Nt=new wt(.35,32,32),Pt=new b(Nt,pt);Pt.scale.set(.75,1.25,.65),Pt.position.set(-.7,-.15,.2),U.add(Pt);const Yt=new b(Nt,gt);Yt.scale.set(.75,1.25,.65),Yt.position.set(.7,-.15,.2),U.add(Yt);const Ft=new te(.2,.22,.6,32),jt=new b(Ft,pt);jt.position.set(-.4,-1.05,0),U.add(jt);const G=new b(Ft,gt);G.position.set(.4,-1.05,0),U.add(G);const vt=new wt(.3,32,32),st=new b(vt,pt);st.scale.set(1,.72,1.5),st.position.set(-.4,-1.45,.17),U.add(st);const tt=new b(vt,gt);tt.scale.set(1,.72,1.5),tt.position.set(.4,-1.45,.17),U.add(tt);const St=new wt(.44,32,32),Et=new b(St,pt);Et.position.set(-.15,-.45,-.4),U.add(Et);const Gt=new b(St,pt);Gt.position.set(.15,-.45,-.4),U.add(Gt);const Jt=new wt(.18,32,32),ne=new b(Jt,pt);ne.position.set(0,-.35,-.8),U.add(ne),new ts().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(D){const W=new je("X",{font:D,size:.2,depth:.05}),H=new b(W,Vt);H.position.set(-.3,.99,.53),H.rotation.x=fe.degToRad(-5),H.rotation.y=fe.degToRad(-15),U.add(H);const mt=new je("O",{font:D,size:.2,depth:.05}),Tt=new b(mt,Vt);Tt.position.set(.14,.99,.53),Tt.rotation.y=fe.degToRad(12),Tt.rotation.x=fe.degToRad(-5),U.add(Tt)});const se=x();U.add(se),p();const ce=m();U.add(ce);const ge=m();ge.position.set(-.2,-.1,.5),U.add(ge),T(),a.value=m(),U.add(a.value),w(a.value);const Re=S();U.add(Re);const pe=S();pe.position.set(-.2,-.2,0),pe.scale.set(.35,.35,.35),U.add(pe);const Ne=z(.1,{x:0,y:0,z:1}),Me=z(.6,{x:0,y:-1.5,z:0}),He=1e3,we=new yn,Xe=[];for(let D=0;D<He;D++){const W=(Math.random()-.5)*20,H=Math.random()*20,mt=(Math.random()-.5)*20;Xe.push(W,H,mt)}we.setAttribute("position",new We(Xe,3));const $e=new Aa({color:16777215,size:.1,transparent:!0,opacity:.8}),Un=new ma(we,$e);U.add(Un),I();const Ct=2e3,re=[],me=.6;for(let D=0;D<Ct;D++){const W=(Math.random()-.5)*me*2,H=(Math.random()-.5)*me*2,mt=(Math.random()-.5)*me*2;Math.sqrt(W*W+H*H+mt*mt)<me&&re.push(W,H,mt)}const Ee=new yn;Ee.setAttribute("position",new We(re,3)),new Aa({color:16777215,size:.05,transparent:!0,opacity:.9}),new ma(Ee,N).position.set(0,-.2,0),new ma(Ee,J).position.set(0,.8,0),P(),U.scale.set(.85,.85,.85),U.position.set(t.bodyPosition.x,t.bodyPosition.y+.9,t.bodyPosition.z),Q.add(U),Q.add(Me),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4,U.rotation.x=.1,B(),Ke(()=>t.bodyPosition,D=>{U.position.set(D.x,D.y,D.z)}),Ke(()=>t.cameraPosition,D=>{y.position.set(t.bodyPosition.x,1,D),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),E.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function f(){r.value=!0}function _(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let x=0;x<iE;x++){const p=document.createElement("div");p.classList.add("confetti"),p.style.left=`${Math.random()*100}vw`,p.style.animationDuration=`${Math.random()*3+4}s`,p.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(p)}for(let x=0;x<sE;x++){const p=document.createElement("div");p.classList.add("light"),document.body.appendChild(p)}return(x,p)=>(Ai(),Ri(gn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Kn(n.background?"no-bg":"three-canvas")},null,2),qt("div",eE,[qt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),qt("div",nE,[qt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:_},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:_},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:f,onMouseup:_},"DOWN",32)])],64))}}),rE=Pi(oE,[["__scopeId","data-v-ceb84432"]]),aE=[{path:"/3d-bear-arts/leather",name:"Leather",component:y1},{path:"/3d-bear-arts/pop-art",name:"Pop",component:w1},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:T1},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:C1},{path:"/3d-bear-arts/water",name:"Water",component:G1},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:W1},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:$1},{path:"/3d-bear-arts/",name:"Santa",component:tE},{path:"/3d-bear-arts/coffee",name:"Coffee",component:rE}],cE=f_({history:Vg(),routes:aE}),Op=ag(dg);Op.use(cE);Op.mount("#app");
