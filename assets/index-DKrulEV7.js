(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ld(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Qe={},vr=[],ls=()=>{},U_=()=>!1,wl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ud=n=>n.startsWith("onUpdate:"),Fn=Object.assign,hd=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},N_=Object.prototype.hasOwnProperty,ze=(n,t)=>N_.call(n,t),Re=Array.isArray,fa=n=>Ml(n)==="[object Map]",O_=n=>Ml(n)==="[object Set]",Ae=n=>typeof n=="function",Dn=n=>typeof n=="string",Xr=n=>typeof n=="symbol",xn=n=>n!==null&&typeof n=="object",C0=n=>(xn(n)||Ae(n))&&Ae(n.then)&&Ae(n.catch),F_=Object.prototype.toString,Ml=n=>F_.call(n),B_=n=>Ml(n).slice(8,-1),z_=n=>Ml(n)==="[object Object]",dd=n=>Dn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,pa=ld(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sl=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},G_=/-(\w)/g,ki=Sl(n=>n.replace(G_,(t,e)=>e?e.toUpperCase():"")),k_=/\B([A-Z])/g,Wo=Sl(n=>n.replace(k_,"-$1").toLowerCase()),bl=Sl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Vl=Sl(n=>n?`on${bl(n)}`:""),ro=(n,t)=>!Object.is(n,t),Wl=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},I0=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},H_=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let ff;const L0=()=>ff||(ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fd(n){if(Re(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Dn(i)?q_(i):fd(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(Dn(n)||xn(n))return n}const V_=/;(?![^(]*\))/g,W_=/:([^]+)/,X_=/\/\*[^]*?\*\//g;function q_(n){const t={};return n.replace(X_,"").split(V_).forEach(e=>{if(e){const i=e.split(W_);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Qn(n){let t="";if(Dn(n))t=n;else if(Re(n))for(let e=0;e<n.length;e++){const i=Qn(n[e]);i&&(t+=i+" ")}else if(xn(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Y_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",j_=ld(Y_);function D0(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mi;class $_{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mi,!t&&Mi&&(this.index=(Mi.scopes||(Mi.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Mi;try{return Mi=this,t()}finally{Mi=e}}}on(){Mi=this}off(){Mi=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function K_(){return Mi}let nn;const Xl=new WeakSet;class U0{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mi&&Mi.active&&Mi.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xl.has(this)&&(Xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||O0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pf(this),F0(this);const t=nn,e=Zi;nn=this,Zi=!0;try{return this.fn()}finally{B0(this),nn=t,Zi=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)gd(t);this.deps=this.depsTail=void 0,pf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xu(this)&&this.run()}get dirty(){return Xu(this)}}let N0=0,fr;function O0(n){n.flags|=8,n.next=fr,fr=n}function pd(){N0++}function md(){if(--N0>0)return;let n;for(;fr;){let t=fr,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=fr,fr=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function F0(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function B0(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),gd(i),Z_(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Xu(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(z0(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function z0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ra))return;n.globalVersion=Ra;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Xu(n)){n.flags&=-3;return}const e=nn,i=Zi;nn=n,Zi=!0;try{F0(n);const s=n.fn(n._value);(t.version===0||ro(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{nn=e,Zi=i,B0(n),n.flags&=-3}}function gd(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let o=e.computed.deps;o;o=o.nextDep)gd(o,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Z_(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Zi=!0;const G0=[];function uo(){G0.push(Zi),Zi=!1}function ho(){const n=G0.pop();Zi=n===void 0?!0:n}function pf(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=nn;nn=void 0;try{t()}finally{nn=e}}}let Ra=0;class J_{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _d{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!nn||!Zi||nn===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==nn)e=this.activeLink=new J_(nn,this),nn.deps?(e.prevDep=nn.depsTail,nn.depsTail.nextDep=e,nn.depsTail=e):nn.deps=nn.depsTail=e,k0(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=nn.depsTail,e.nextDep=void 0,nn.depsTail.nextDep=e,nn.depsTail=e,nn.deps===e&&(nn.deps=i)}return e}trigger(t){this.version++,Ra++,this.notify(t)}notify(t){pd();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{md()}}}function k0(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)k0(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const qu=new WeakMap,Do=Symbol(""),Yu=Symbol(""),Ca=Symbol("");function $n(n,t,e){if(Zi&&nn){let i=qu.get(n);i||qu.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new _d),s.target=n,s.map=i,s.key=e),s.track()}}function Ns(n,t,e,i,s,o){const r=qu.get(n);if(!r){Ra++;return}const a=c=>{c&&c.trigger()};if(pd(),t==="clear")r.forEach(a);else{const c=Re(n),l=c&&dd(e);if(c&&e==="length"){const u=Number(i);r.forEach((h,d)=>{(d==="length"||d===Ca||!Xr(d)&&d>=u)&&a(h)})}else switch(e!==void 0&&a(r.get(e)),l&&a(r.get(Ca)),t){case"add":c?l&&a(r.get("length")):(a(r.get(Do)),fa(n)&&a(r.get(Yu)));break;case"delete":c||(a(r.get(Do)),fa(n)&&a(r.get(Yu)));break;case"set":fa(n)&&a(r.get(Do));break}}md()}function jo(n){const t=He(n);return t===n?t:($n(t,"iterate",Ca),Ji(n)?t:t.map(oi))}function vd(n){return $n(n=He(n),"iterate",Ca),n}const Q_={__proto__:null,[Symbol.iterator](){return ql(this,Symbol.iterator,oi)},concat(...n){return jo(this).concat(...n.map(t=>Re(t)?jo(t):t))},entries(){return ql(this,"entries",n=>(n[1]=oi(n[1]),n))},every(n,t){return xs(this,"every",n,t,void 0,arguments)},filter(n,t){return xs(this,"filter",n,t,e=>e.map(oi),arguments)},find(n,t){return xs(this,"find",n,t,oi,arguments)},findIndex(n,t){return xs(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return xs(this,"findLast",n,t,oi,arguments)},findLastIndex(n,t){return xs(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return xs(this,"forEach",n,t,void 0,arguments)},includes(...n){return Yl(this,"includes",n)},indexOf(...n){return Yl(this,"indexOf",n)},join(n){return jo(this).join(n)},lastIndexOf(...n){return Yl(this,"lastIndexOf",n)},map(n,t){return xs(this,"map",n,t,void 0,arguments)},pop(){return Zr(this,"pop")},push(...n){return Zr(this,"push",n)},reduce(n,...t){return mf(this,"reduce",n,t)},reduceRight(n,...t){return mf(this,"reduceRight",n,t)},shift(){return Zr(this,"shift")},some(n,t){return xs(this,"some",n,t,void 0,arguments)},splice(...n){return Zr(this,"splice",n)},toReversed(){return jo(this).toReversed()},toSorted(n){return jo(this).toSorted(n)},toSpliced(...n){return jo(this).toSpliced(...n)},unshift(...n){return Zr(this,"unshift",n)},values(){return ql(this,"values",oi)}};function ql(n,t,e){const i=vd(n),s=i[t]();return i!==n&&!Ji(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=e(o.value)),o}),s}const tv=Array.prototype;function xs(n,t,e,i,s,o){const r=vd(n),a=r!==n&&!Ji(n),c=r[t];if(c!==tv[t]){const h=c.apply(n,o);return a?oi(h):h}let l=e;r!==n&&(a?l=function(h,d){return e.call(this,oi(h),d,n)}:e.length>2&&(l=function(h,d){return e.call(this,h,d,n)}));const u=c.call(r,l,i);return a&&s?s(u):u}function mf(n,t,e,i){const s=vd(n);let o=e;return s!==n&&(Ji(n)?e.length>3&&(o=function(r,a,c){return e.call(this,r,a,c,n)}):o=function(r,a,c){return e.call(this,r,oi(a),c,n)}),s[t](o,...i)}function Yl(n,t,e){const i=He(n);$n(i,"iterate",Ca);const s=i[t](...e);return(s===-1||s===!1)&&Md(e[0])?(e[0]=He(e[0]),i[t](...e)):s}function Zr(n,t,e=[]){uo(),pd();const i=He(n)[t].apply(n,e);return md(),ho(),i}const ev=ld("__proto__,__v_isRef,__isVue"),H0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xr));function nv(n){Xr(n)||(n=String(n));const t=He(this);return $n(t,"has",n),t.hasOwnProperty(n)}class V0{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return o;if(e==="__v_raw")return i===(s?o?mv:Y0:o?q0:X0).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=Re(t);if(!s){let c;if(r&&(c=Q_[e]))return c;if(e==="hasOwnProperty")return nv}const a=Reflect.get(t,e,qn(t)?t:i);return(Xr(e)?H0.has(e):ev(e))||(s||$n(t,"get",e),o)?a:qn(a)?r&&dd(e)?a:a.value:xn(a)?s?$0(a):Tl(a):a}}class W0 extends V0{constructor(t=!1){super(!1,t)}set(t,e,i,s){let o=t[e];if(!this._isShallow){const c=Bo(o);if(!Ji(i)&&!Bo(i)&&(o=He(o),i=He(i)),!Re(t)&&qn(o)&&!qn(i))return c?!1:(o.value=i,!0)}const r=Re(t)&&dd(e)?Number(e)<t.length:ze(t,e),a=Reflect.set(t,e,i,qn(t)?t:s);return t===He(s)&&(r?ro(i,o)&&Ns(t,"set",e,i):Ns(t,"add",e,i)),a}deleteProperty(t,e){const i=ze(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Ns(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Xr(e)||!H0.has(e))&&$n(t,"has",e),i}ownKeys(t){return $n(t,"iterate",Re(t)?"length":Do),Reflect.ownKeys(t)}}class iv extends V0{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const sv=new W0,ov=new iv,rv=new W0(!0);const yd=n=>n,El=n=>Reflect.getPrototypeOf(n);function ac(n,t,e=!1,i=!1){n=n.__v_raw;const s=He(n),o=He(t);e||(ro(t,o)&&$n(s,"get",t),$n(s,"get",o));const{has:r}=El(s),a=i?yd:e?Sd:oi;if(r.call(s,t))return a(n.get(t));if(r.call(s,o))return a(n.get(o));n!==s&&n.get(t)}function cc(n,t=!1){const e=this.__v_raw,i=He(e),s=He(n);return t||(ro(n,s)&&$n(i,"has",n),$n(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function lc(n,t=!1){return n=n.__v_raw,!t&&$n(He(n),"iterate",Do),Reflect.get(n,"size",n)}function gf(n,t=!1){!t&&!Ji(n)&&!Bo(n)&&(n=He(n));const e=He(this);return El(e).has.call(e,n)||(e.add(n),Ns(e,"add",n,n)),this}function _f(n,t,e=!1){!e&&!Ji(t)&&!Bo(t)&&(t=He(t));const i=He(this),{has:s,get:o}=El(i);let r=s.call(i,n);r||(n=He(n),r=s.call(i,n));const a=o.call(i,n);return i.set(n,t),r?ro(t,a)&&Ns(i,"set",n,t):Ns(i,"add",n,t),this}function vf(n){const t=He(this),{has:e,get:i}=El(t);let s=e.call(t,n);s||(n=He(n),s=e.call(t,n)),i&&i.call(t,n);const o=t.delete(n);return s&&Ns(t,"delete",n,void 0),o}function yf(){const n=He(this),t=n.size!==0,e=n.clear();return t&&Ns(n,"clear",void 0,void 0),e}function uc(n,t){return function(i,s){const o=this,r=o.__v_raw,a=He(r),c=t?yd:n?Sd:oi;return!n&&$n(a,"iterate",Do),r.forEach((l,u)=>i.call(s,c(l),c(u),o))}}function hc(n,t,e){return function(...i){const s=this.__v_raw,o=He(s),r=fa(o),a=n==="entries"||n===Symbol.iterator&&r,c=n==="keys"&&r,l=s[n](...i),u=e?yd:t?Sd:oi;return!t&&$n(o,"iterate",c?Yu:Do),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ks(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function av(){const n={get(o){return ac(this,o)},get size(){return lc(this)},has:cc,add:gf,set:_f,delete:vf,clear:yf,forEach:uc(!1,!1)},t={get(o){return ac(this,o,!1,!0)},get size(){return lc(this)},has:cc,add(o){return gf.call(this,o,!0)},set(o,r){return _f.call(this,o,r,!0)},delete:vf,clear:yf,forEach:uc(!1,!0)},e={get(o){return ac(this,o,!0)},get size(){return lc(this,!0)},has(o){return cc.call(this,o,!0)},add:ks("add"),set:ks("set"),delete:ks("delete"),clear:ks("clear"),forEach:uc(!0,!1)},i={get(o){return ac(this,o,!0,!0)},get size(){return lc(this,!0)},has(o){return cc.call(this,o,!0)},add:ks("add"),set:ks("set"),delete:ks("delete"),clear:ks("clear"),forEach:uc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=hc(o,!1,!1),e[o]=hc(o,!0,!1),t[o]=hc(o,!1,!0),i[o]=hc(o,!0,!0)}),[n,e,t,i]}const[cv,lv,uv,hv]=av();function xd(n,t){const e=t?n?hv:uv:n?lv:cv;return(i,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ze(e,s)&&s in i?e:i,s,o)}const dv={get:xd(!1,!1)},fv={get:xd(!1,!0)},pv={get:xd(!0,!1)};const X0=new WeakMap,q0=new WeakMap,Y0=new WeakMap,mv=new WeakMap;function gv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _v(n){return n.__v_skip||!Object.isExtensible(n)?0:gv(B_(n))}function Tl(n){return Bo(n)?n:wd(n,!1,sv,dv,X0)}function j0(n){return wd(n,!1,rv,fv,q0)}function $0(n){return wd(n,!0,ov,pv,Y0)}function wd(n,t,e,i,s){if(!xn(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=s.get(n);if(o)return o;const r=_v(n);if(r===0)return n;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function ma(n){return Bo(n)?ma(n.__v_raw):!!(n&&n.__v_isReactive)}function Bo(n){return!!(n&&n.__v_isReadonly)}function Ji(n){return!!(n&&n.__v_isShallow)}function Md(n){return n?!!n.__v_raw:!1}function He(n){const t=n&&n.__v_raw;return t?He(t):n}function vv(n){return!ze(n,"__v_skip")&&Object.isExtensible(n)&&I0(n,"__v_skip",!0),n}const oi=n=>xn(n)?Tl(n):n,Sd=n=>xn(n)?$0(n):n;function qn(n){return n?n.__v_isRef===!0:!1}function Qt(n){return K0(n,!1)}function yr(n){return K0(n,!0)}function K0(n,t){return qn(n)?n:new yv(n,t)}class yv{constructor(t,e){this.dep=new _d,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:He(t),this._value=e?t:oi(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Ji(t)||Bo(t);t=i?t:He(t),ro(t,e)&&(this._rawValue=t,this._value=i?t:oi(t),this.dep.trigger())}}function xr(n){return qn(n)?n.value:n}const xv={get:(n,t,e)=>t==="__v_raw"?n:xr(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return qn(s)&&!qn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Z0(n){return ma(n)?n:new Proxy(n,xv)}class wv{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new _d(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ra-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&nn!==this)return O0(this),!0}get value(){const t=this.dep.track();return z0(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Mv(n,t,e=!1){let i,s;return Ae(n)?i=n:(i=n.get,s=n.set),new wv(i,s,e)}const dc={},nl=new WeakMap;let Eo;function Sv(n,t=!1,e=Eo){if(e){let i=nl.get(e);i||nl.set(e,i=[]),i.push(n)}}function bv(n,t,e=Qe){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:a,call:c}=e,l=x=>s?x:Ji(x)||s===!1||s===0?Ls(x,1):Ls(x);let u,h,d,f,_=!1,g=!1;if(qn(n)?(h=()=>n.value,_=Ji(n)):ma(n)?(h=()=>l(n),_=!0):Re(n)?(g=!0,_=n.some(x=>ma(x)||Ji(x)),h=()=>n.map(x=>{if(qn(x))return x.value;if(ma(x))return l(x);if(Ae(x))return c?c(x,2):x()})):Ae(n)?t?h=c?()=>c(n,2):n:h=()=>{if(d){uo();try{d()}finally{ho()}}const x=Eo;Eo=u;try{return c?c(n,3,[f]):n(f)}finally{Eo=x}}:h=ls,t&&s){const x=h,I=s===!0?1/0:s;h=()=>Ls(x(),I)}const p=K_(),m=()=>{u.stop(),p&&hd(p.effects,u)};if(o&&t){const x=t;t=(...I)=>{x(...I),m()}}let M=g?new Array(n.length).fill(dc):dc;const w=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const I=u.run();if(s||_||(g?I.some((C,E)=>ro(C,M[E])):ro(I,M))){d&&d();const C=Eo;Eo=u;try{const E=[I,M===dc?void 0:g&&M[0]===dc?[]:M,f];c?c(t,3,E):t(...E),M=I}finally{Eo=C}}}else u.run()};return a&&a(w),u=new U0(h),u.scheduler=r?()=>r(w,!1):w,f=x=>Sv(x,!1,u),d=u.onStop=()=>{const x=nl.get(u);if(x){if(c)c(x,4);else for(const I of x)I();nl.delete(u)}},t?i?w(!0):M=u.run():r?r(w.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Ls(n,t=1/0,e){if(t<=0||!xn(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,qn(n))Ls(n.value,t,e);else if(Re(n))for(let i=0;i<n.length;i++)Ls(n[i],t,e);else if(O_(n)||fa(n))n.forEach(i=>{Ls(i,t,e)});else if(z_(n)){for(const i in n)Ls(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ls(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ka(n,t,e,i){try{return i?n(...i):n()}catch(s){Al(s,t,e)}}function ds(n,t,e,i){if(Ae(n)){const s=Ka(n,t,e,i);return s&&C0(s)&&s.catch(o=>{Al(o,t,e)}),s}if(Re(n)){const s=[];for(let o=0;o<n.length;o++)s.push(ds(n[o],t,e,i));return s}}function Al(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Qe;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,c,l)===!1)return}a=a.parent}if(o){uo(),Ka(o,null,10,[n,c,l]),ho();return}}Ev(n,e,s,i,r)}function Ev(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let Ia=!1,ju=!1;const ri=[];let is=0;const wr=[];let $s=null,ur=0;const J0=Promise.resolve();let bd=null;function Q0(n){const t=bd||J0;return n?t.then(this?n.bind(this):n):t}function Tv(n){let t=Ia?is+1:0,e=ri.length;for(;t<e;){const i=t+e>>>1,s=ri[i],o=La(s);o<n||o===n&&s.flags&2?t=i+1:e=i}return t}function Ed(n){if(!(n.flags&1)){const t=La(n),e=ri[ri.length-1];!e||!(n.flags&2)&&t>=La(e)?ri.push(n):ri.splice(Tv(t),0,n),n.flags|=1,tm()}}function tm(){!Ia&&!ju&&(ju=!0,bd=J0.then(nm))}function Av(n){Re(n)?wr.push(...n):$s&&n.id===-1?$s.splice(ur+1,0,n):n.flags&1||(wr.push(n),n.flags|=1),tm()}function xf(n,t,e=Ia?is+1:0){for(;e<ri.length;e++){const i=ri[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ri.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function em(n){if(wr.length){const t=[...new Set(wr)].sort((e,i)=>La(e)-La(i));if(wr.length=0,$s){$s.push(...t);return}for($s=t,ur=0;ur<$s.length;ur++){const e=$s[ur];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}$s=null,ur=0}}const La=n=>n.id==null?n.flags&2?-1:1/0:n.id;function nm(n){ju=!1,Ia=!0;try{for(is=0;is<ri.length;is++){const t=ri[is];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ka(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;is<ri.length;is++){const t=ri[is];t&&(t.flags&=-2)}is=0,ri.length=0,em(),Ia=!1,bd=null,(ri.length||wr.length)&&nm()}}let Ei=null,im=null;function il(n){const t=Ei;return Ei=n,im=n&&n.type.__scopeId||null,t}function hi(n,t=Ei,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Cf(-1);const o=il(t);let r;try{r=n(...s)}finally{il(o),i._d&&Cf(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function Pv(n,t){if(Ei===null)return n;const e=Ll(Ei),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,a,c=Qe]=t[s];o&&(Ae(o)&&(o={mounted:o,updated:o}),o.deep&&Ls(r),i.push({dir:o,instance:e,value:r,oldValue:void 0,arg:a,modifiers:c}))}return n}function mo(n,t,e,i){const s=n.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let c=a.dir[i];c&&(uo(),ds(c,e,8,[n.el,a,n,t]),ho())}}const Rv=Symbol("_vte"),Cv=n=>n.__isTeleport;function Td(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Td(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function zn(n,t){return Ae(n)?Fn({name:n.name},t,{setup:n}):n}function sm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function $u(n,t,e,i,s=!1){if(Re(n)){n.forEach((_,g)=>$u(_,t&&(Re(t)?t[g]:t),e,i,s));return}if(ga(i)&&!s)return;const o=i.shapeFlag&4?Ll(i.component):i.el,r=s?null:o,{i:a,r:c}=n,l=t&&t.r,u=a.refs===Qe?a.refs={}:a.refs,h=a.setupState,d=He(h),f=h===Qe?()=>!1:_=>ze(d,_);if(l!=null&&l!==c&&(Dn(l)?(u[l]=null,f(l)&&(h[l]=null)):qn(l)&&(l.value=null)),Ae(c))Ka(c,a,12,[r,u]);else{const _=Dn(c),g=qn(c);if(_||g){const p=()=>{if(n.f){const m=_?f(c)?h[c]:u[c]:c.value;s?Re(m)&&hd(m,o):Re(m)?m.includes(o)||m.push(o):_?(u[c]=[o],f(c)&&(h[c]=u[c])):(c.value=[o],n.k&&(u[n.k]=c.value))}else _?(u[c]=r,f(c)&&(h[c]=r)):g&&(c.value=r,n.k&&(u[n.k]=r))};r?(p.id=-1,wi(p,e)):p()}}}const ga=n=>!!n.type.__asyncLoader,om=n=>n.type.__isKeepAlive;function Iv(n,t){rm(n,"a",t)}function Lv(n,t){rm(n,"da",t)}function rm(n,t,e=Vn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Pl(t,i,e),e){let s=e.parent;for(;s&&s.parent;)om(s.parent.vnode)&&Dv(i,t,e,s),s=s.parent}}function Dv(n,t,e,i){const s=Pl(t,n,i,!0);Ad(()=>{hd(i[t],s)},e)}function Pl(n,t,e=Vn,i=!1){if(e){const s=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...r)=>{uo();const a=Za(e),c=ds(t,e,n,r);return a(),ho(),c});return i?s.unshift(o):s.push(o),o}}const Gs=n=>(t,e=Vn)=>{(!Il||n==="sp")&&Pl(n,(...i)=>t(...i),e)},Uv=Gs("bm"),ti=Gs("m"),Nv=Gs("bu"),Ov=Gs("u"),Fv=Gs("bum"),Ad=Gs("um"),Bv=Gs("sp"),zv=Gs("rtg"),Gv=Gs("rtc");function kv(n,t=Vn){Pl("ec",n,t)}const Hv="components";function wf(n,t){return Wv(Hv,n,!0,t)||n}const Vv=Symbol.for("v-ndc");function Wv(n,t,e=!0,i=!1){const s=Ei||Vn;if(s){const o=s.type;{const a=Ly(o,!1);if(a&&(a===t||a===ki(t)||a===bl(ki(t))))return o}const r=Mf(s[n]||o[n],t)||Mf(s.appContext[n],t);return!r&&i?o:r}}function Mf(n,t){return n&&(n[t]||n[ki(t)]||n[bl(ki(t))])}const Ku=n=>n?Tm(n)?Ll(n):Ku(n.parent):null,_a=Fn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ku(n.parent),$root:n=>Ku(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Pd(n),$forceUpdate:n=>n.f||(n.f=()=>{Ed(n.update)}),$nextTick:n=>n.n||(n.n=Q0.bind(n.proxy)),$watch:n=>hy.bind(n)}),jl=(n,t)=>n!==Qe&&!n.__isScriptSetup&&ze(n,t),Xv={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:c}=n;let l;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return o[t]}else{if(jl(i,t))return r[t]=1,i[t];if(s!==Qe&&ze(s,t))return r[t]=2,s[t];if((l=n.propsOptions[0])&&ze(l,t))return r[t]=3,o[t];if(e!==Qe&&ze(e,t))return r[t]=4,e[t];Zu&&(r[t]=0)}}const u=_a[t];let h,d;if(u)return t==="$attrs"&&$n(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==Qe&&ze(e,t))return r[t]=4,e[t];if(d=c.config.globalProperties,ze(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:o}=n;return jl(s,t)?(s[t]=e,!0):i!==Qe&&ze(i,t)?(i[t]=e,!0):ze(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:o}},r){let a;return!!e[r]||n!==Qe&&ze(n,r)||jl(t,r)||(a=o[0])&&ze(a,r)||ze(i,r)||ze(_a,r)||ze(s.config.globalProperties,r)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ze(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Sf(n){return Re(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Zu=!0;function qv(n){const t=Pd(n),e=n.proxy,i=n.ctx;Zu=!1,t.beforeCreate&&bf(t.beforeCreate,n,"bc");const{data:s,computed:o,methods:r,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:g,deactivated:p,beforeDestroy:m,beforeUnmount:M,destroyed:w,unmounted:x,render:I,renderTracked:C,renderTriggered:E,errorCaptured:L,serverPrefetch:F,expose:S,inheritAttrs:A,components:U,directives:H,filters:J}=t;if(l&&Yv(l,i,null),r)for(const tt in r){const W=r[tt];Ae(W)&&(i[tt]=W.bind(e))}if(s){const tt=s.call(e,e);xn(tt)&&(n.data=Tl(tt))}if(Zu=!0,o)for(const tt in o){const W=o[tt],gt=Ae(W)?W.bind(e,e):Ae(W.get)?W.get.bind(e,e):ls,vt=!Ae(W)&&Ae(W.set)?W.set.bind(e):ls,xt=Yi({get:gt,set:vt});Object.defineProperty(i,tt,{enumerable:!0,configurable:!0,get:()=>xt.value,set:Dt=>xt.value=Dt})}if(a)for(const tt in a)am(a[tt],i,e,tt);if(c){const tt=Ae(c)?c.call(e):c;Reflect.ownKeys(tt).forEach(W=>{Vc(W,tt[W])})}u&&bf(u,n,"c");function k(tt,W){Re(W)?W.forEach(gt=>tt(gt.bind(e))):W&&tt(W.bind(e))}if(k(Uv,h),k(ti,d),k(Nv,f),k(Ov,_),k(Iv,g),k(Lv,p),k(kv,L),k(Gv,C),k(zv,E),k(Fv,M),k(Ad,x),k(Bv,F),Re(S))if(S.length){const tt=n.exposed||(n.exposed={});S.forEach(W=>{Object.defineProperty(tt,W,{get:()=>e[W],set:gt=>e[W]=gt})})}else n.exposed||(n.exposed={});I&&n.render===ls&&(n.render=I),A!=null&&(n.inheritAttrs=A),U&&(n.components=U),H&&(n.directives=H),F&&sm(n)}function Yv(n,t,e=ls){Re(n)&&(n=Ju(n));for(const i in n){const s=n[i];let o;xn(s)?"default"in s?o=Os(s.from||i,s.default,!0):o=Os(s.from||i):o=Os(s),qn(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function bf(n,t,e){ds(Re(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function am(n,t,e,i){let s=i.includes(".")?wm(e,i):()=>e[i];if(Dn(n)){const o=t[n];Ae(o)&&Ve(s,o)}else if(Ae(n))Ve(s,n.bind(e));else if(xn(n))if(Re(n))n.forEach(o=>am(o,t,e,i));else{const o=Ae(n.handler)?n.handler.bind(e):t[n.handler];Ae(o)&&Ve(s,o,n)}}function Pd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!e&&!i?c=t:(c={},s.length&&s.forEach(l=>sl(c,l,r,!0)),sl(c,t,r)),xn(t)&&o.set(t,c),c}function sl(n,t,e,i=!1){const{mixins:s,extends:o}=t;o&&sl(n,o,e,!0),s&&s.forEach(r=>sl(n,r,e,!0));for(const r in t)if(!(i&&r==="expose")){const a=jv[r]||e&&e[r];n[r]=a?a(n[r],t[r]):t[r]}return n}const jv={data:Ef,props:Tf,emits:Tf,methods:ca,computed:ca,beforeCreate:ni,created:ni,beforeMount:ni,mounted:ni,beforeUpdate:ni,updated:ni,beforeDestroy:ni,beforeUnmount:ni,destroyed:ni,unmounted:ni,activated:ni,deactivated:ni,errorCaptured:ni,serverPrefetch:ni,components:ca,directives:ca,watch:Kv,provide:Ef,inject:$v};function Ef(n,t){return t?n?function(){return Fn(Ae(n)?n.call(this,this):n,Ae(t)?t.call(this,this):t)}:t:n}function $v(n,t){return ca(Ju(n),Ju(t))}function Ju(n){if(Re(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function ni(n,t){return n?[...new Set([].concat(n,t))]:t}function ca(n,t){return n?Fn(Object.create(null),n,t):t}function Tf(n,t){return n?Re(n)&&Re(t)?[...new Set([...n,...t])]:Fn(Object.create(null),Sf(n),Sf(t??{})):t}function Kv(n,t){if(!n)return t;if(!t)return n;const e=Fn(Object.create(null),n);for(const i in t)e[i]=ni(n[i],t[i]);return e}function cm(){return{app:null,config:{isNativeTag:U_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zv=0;function Jv(n,t){return function(i,s=null){Ae(i)||(i=Fn({},i)),s!=null&&!xn(s)&&(s=null);const o=cm(),r=new WeakSet,a=[];let c=!1;const l=o.app={_uid:Zv++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:Uy,get config(){return o.config},set config(u){},use(u,...h){return r.has(u)||(u&&Ae(u.install)?(r.add(u),u.install(l,...h)):Ae(u)&&(r.add(u),u(l,...h))),l},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),l},component(u,h){return h?(o.components[u]=h,l):o.components[u]},directive(u,h){return h?(o.directives[u]=h,l):o.directives[u]},mount(u,h,d){if(!c){const f=l._ceVNode||qe(i,s);return f.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),h&&t?t(f,u):n(f,u,d),c=!0,l._container=u,u.__vue_app__=l,Ll(f.component)}},onUnmount(u){a.push(u)},unmount(){c&&(ds(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(u,h){return o.provides[u]=h,l},runWithContext(u){const h=Mr;Mr=l;try{return u()}finally{Mr=h}}};return l}}let Mr=null;function Vc(n,t){if(Vn){let e=Vn.provides;const i=Vn.parent&&Vn.parent.provides;i===e&&(e=Vn.provides=Object.create(i)),e[n]=t}}function Os(n,t,e=!1){const i=Vn||Ei;if(i||Mr){const s=Mr?Mr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Ae(t)?t.call(i&&i.proxy):t}}const lm={},um=()=>Object.create(lm),hm=n=>Object.getPrototypeOf(n)===lm;function Qv(n,t,e,i=!1){const s={},o=um();n.propsDefaults=Object.create(null),dm(n,t,s,o);for(const r in n.propsOptions[0])r in s||(s[r]=void 0);e?n.props=i?s:j0(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function ty(n,t,e,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=n,a=He(s),[c]=n.propsOptions;let l=!1;if((i||r>0)&&!(r&16)){if(r&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Rl(n.emitsOptions,d))continue;const f=t[d];if(c)if(ze(o,d))f!==o[d]&&(o[d]=f,l=!0);else{const _=ki(d);s[_]=Qu(c,a,_,f,n,!1)}else f!==o[d]&&(o[d]=f,l=!0)}}}else{dm(n,t,s,o)&&(l=!0);let u;for(const h in a)(!t||!ze(t,h)&&((u=Wo(h))===h||!ze(t,u)))&&(c?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Qu(c,a,h,void 0,n,!0)):delete s[h]);if(o!==a)for(const h in o)(!t||!ze(t,h))&&(delete o[h],l=!0)}l&&Ns(n.attrs,"set","")}function dm(n,t,e,i){const[s,o]=n.propsOptions;let r=!1,a;if(t)for(let c in t){if(pa(c))continue;const l=t[c];let u;s&&ze(s,u=ki(c))?!o||!o.includes(u)?e[u]=l:(a||(a={}))[u]=l:Rl(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,r=!0)}if(o){const c=He(e),l=a||Qe;for(let u=0;u<o.length;u++){const h=o[u];e[h]=Qu(s,c,h,l[h],n,!ze(l,h))}}return r}function Qu(n,t,e,i,s,o){const r=n[e];if(r!=null){const a=ze(r,"default");if(a&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&Ae(c)){const{propsDefaults:l}=s;if(e in l)i=l[e];else{const u=Za(s);i=l[e]=c.call(null,t),u()}}else i=c;s.ce&&s.ce._setProp(e,i)}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===Wo(e))&&(i=!0))}return i}const ey=new WeakMap;function fm(n,t,e=!1){const i=e?ey:t.propsCache,s=i.get(n);if(s)return s;const o=n.props,r={},a=[];let c=!1;if(!Ae(n)){const u=h=>{c=!0;const[d,f]=fm(h,t,!0);Fn(r,d),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!o&&!c)return xn(n)&&i.set(n,vr),vr;if(Re(o))for(let u=0;u<o.length;u++){const h=ki(o[u]);Af(h)&&(r[h]=Qe)}else if(o)for(const u in o){const h=ki(u);if(Af(h)){const d=o[u],f=r[h]=Re(d)||Ae(d)?{type:d}:Fn({},d),_=f.type;let g=!1,p=!0;if(Re(_))for(let m=0;m<_.length;++m){const M=_[m],w=Ae(M)&&M.name;if(w==="Boolean"){g=!0;break}else w==="String"&&(p=!1)}else g=Ae(_)&&_.name==="Boolean";f[0]=g,f[1]=p,(g||ze(f,"default"))&&a.push(h)}}const l=[r,a];return xn(n)&&i.set(n,l),l}function Af(n){return n[0]!=="$"&&!pa(n)}const pm=n=>n[0]==="_"||n==="$stable",Rd=n=>Re(n)?n.map(os):[os(n)],ny=(n,t,e)=>{if(t._n)return t;const i=hi((...s)=>Rd(t(...s)),e);return i._c=!1,i},mm=(n,t,e)=>{const i=n._ctx;for(const s in n){if(pm(s))continue;const o=n[s];if(Ae(o))t[s]=ny(s,o,i);else if(o!=null){const r=Rd(o);t[s]=()=>r}}},gm=(n,t)=>{const e=Rd(t);n.slots.default=()=>e},_m=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},iy=(n,t,e)=>{const i=n.slots=um();if(n.vnode.shapeFlag&32){const s=t._;s?(_m(i,t,e),e&&I0(i,"_",s,!0)):mm(t,i)}else t&&gm(n,t)},sy=(n,t,e)=>{const{vnode:i,slots:s}=n;let o=!0,r=Qe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?o=!1:_m(s,t,e):(o=!t.$stable,mm(t,s)),r=t}else t&&(gm(n,t),r={default:1});if(o)for(const a in s)!pm(a)&&r[a]==null&&delete s[a]},wi=vy;function oy(n){return ry(n)}function ry(n,t){const e=L0();e.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=ls,insertStaticContent:_}=n,g=(v,R,N,z=null,B=null,Z=null,Q=void 0,T=null,b=!!R.dynamicChildren)=>{if(v===R)return;v&&!Jr(v,R)&&(z=G(v),Dt(v,B,Z,!0),v=null),R.patchFlag===-2&&(b=!1,R.dynamicChildren=null);const{type:D,ref:K,shapeFlag:q}=R;switch(D){case Cl:p(v,R,N,z);break;case zo:m(v,R,N,z);break;case Zl:v==null&&M(R,N,z,Q);break;case En:U(v,R,N,z,B,Z,Q,T,b);break;default:q&1?I(v,R,N,z,B,Z,Q,T,b):q&6?H(v,R,N,z,B,Z,Q,T,b):(q&64||q&128)&&D.process(v,R,N,z,B,Z,Q,T,b,ht)}K!=null&&B&&$u(K,v&&v.ref,Z,R||v,!R)},p=(v,R,N,z)=>{if(v==null)i(R.el=a(R.children),N,z);else{const B=R.el=v.el;R.children!==v.children&&l(B,R.children)}},m=(v,R,N,z)=>{v==null?i(R.el=c(R.children||""),N,z):R.el=v.el},M=(v,R,N,z)=>{[v.el,v.anchor]=_(v.children,R,N,z,v.el,v.anchor)},w=({el:v,anchor:R},N,z)=>{let B;for(;v&&v!==R;)B=d(v),i(v,N,z),v=B;i(R,N,z)},x=({el:v,anchor:R})=>{let N;for(;v&&v!==R;)N=d(v),s(v),v=N;s(R)},I=(v,R,N,z,B,Z,Q,T,b)=>{R.type==="svg"?Q="svg":R.type==="math"&&(Q="mathml"),v==null?C(R,N,z,B,Z,Q,T,b):F(v,R,B,Z,Q,T,b)},C=(v,R,N,z,B,Z,Q,T)=>{let b,D;const{props:K,shapeFlag:q,transition:j,dirs:ft}=v;if(b=v.el=r(v.type,Z,K&&K.is,K),q&8?u(b,v.children):q&16&&L(v.children,b,null,z,B,$l(v,Z),Q,T),ft&&mo(v,null,z,"created"),E(b,v,v.scopeId,Q,z),K){for(const _t in K)_t!=="value"&&!pa(_t)&&o(b,_t,null,K[_t],Z,z);"value"in K&&o(b,"value",null,K.value,Z),(D=K.onVnodeBeforeMount)&&ns(D,z,v)}ft&&mo(v,null,z,"beforeMount");const lt=ay(B,j);lt&&j.beforeEnter(b),i(b,R,N),((D=K&&K.onVnodeMounted)||lt||ft)&&wi(()=>{D&&ns(D,z,v),lt&&j.enter(b),ft&&mo(v,null,z,"mounted")},B)},E=(v,R,N,z,B)=>{if(N&&f(v,N),z)for(let Z=0;Z<z.length;Z++)f(v,z[Z]);if(B){let Z=B.subTree;if(R===Z||Sm(Z.type)&&(Z.ssContent===R||Z.ssFallback===R)){const Q=B.vnode;E(v,Q,Q.scopeId,Q.slotScopeIds,B.parent)}}},L=(v,R,N,z,B,Z,Q,T,b=0)=>{for(let D=b;D<v.length;D++){const K=v[D]=T?Ks(v[D]):os(v[D]);g(null,K,R,N,z,B,Z,Q,T)}},F=(v,R,N,z,B,Z,Q)=>{const T=R.el=v.el;let{patchFlag:b,dynamicChildren:D,dirs:K}=R;b|=v.patchFlag&16;const q=v.props||Qe,j=R.props||Qe;let ft;if(N&&go(N,!1),(ft=j.onVnodeBeforeUpdate)&&ns(ft,N,R,v),K&&mo(R,v,N,"beforeUpdate"),N&&go(N,!0),(q.innerHTML&&j.innerHTML==null||q.textContent&&j.textContent==null)&&u(T,""),D?S(v.dynamicChildren,D,T,N,z,$l(R,B),Z):Q||W(v,R,T,null,N,z,$l(R,B),Z,!1),b>0){if(b&16)A(T,q,j,N,B);else if(b&2&&q.class!==j.class&&o(T,"class",null,j.class,B),b&4&&o(T,"style",q.style,j.style,B),b&8){const lt=R.dynamicProps;for(let _t=0;_t<lt.length;_t++){const At=lt[_t],pt=q[At],yt=j[At];(yt!==pt||At==="value")&&o(T,At,pt,yt,B,N)}}b&1&&v.children!==R.children&&u(T,R.children)}else!Q&&D==null&&A(T,q,j,N,B);((ft=j.onVnodeUpdated)||K)&&wi(()=>{ft&&ns(ft,N,R,v),K&&mo(R,v,N,"updated")},z)},S=(v,R,N,z,B,Z,Q)=>{for(let T=0;T<R.length;T++){const b=v[T],D=R[T],K=b.el&&(b.type===En||!Jr(b,D)||b.shapeFlag&70)?h(b.el):N;g(b,D,K,null,z,B,Z,Q,!0)}},A=(v,R,N,z,B)=>{if(R!==N){if(R!==Qe)for(const Z in R)!pa(Z)&&!(Z in N)&&o(v,Z,R[Z],null,B,z);for(const Z in N){if(pa(Z))continue;const Q=N[Z],T=R[Z];Q!==T&&Z!=="value"&&o(v,Z,T,Q,B,z)}"value"in N&&o(v,"value",R.value,N.value,B)}},U=(v,R,N,z,B,Z,Q,T,b)=>{const D=R.el=v?v.el:a(""),K=R.anchor=v?v.anchor:a("");let{patchFlag:q,dynamicChildren:j,slotScopeIds:ft}=R;ft&&(T=T?T.concat(ft):ft),v==null?(i(D,N,z),i(K,N,z),L(R.children||[],N,K,B,Z,Q,T,b)):q>0&&q&64&&j&&v.dynamicChildren?(S(v.dynamicChildren,j,N,B,Z,Q,T),(R.key!=null||B&&R===B.subTree)&&vm(v,R,!0)):W(v,R,N,K,B,Z,Q,T,b)},H=(v,R,N,z,B,Z,Q,T,b)=>{R.slotScopeIds=T,v==null?R.shapeFlag&512?B.ctx.activate(R,N,z,Q,b):J(R,N,z,B,Z,Q,b):it(v,R,b)},J=(v,R,N,z,B,Z,Q)=>{const T=v.component=Ay(v,z,B);if(om(v)&&(T.ctx.renderer=ht),Py(T,!1,Q),T.asyncDep){if(B&&B.registerDep(T,k,Q),!v.el){const b=T.subTree=qe(zo);m(null,b,R,N)}}else k(T,v,R,N,B,Z,Q)},it=(v,R,N)=>{const z=R.component=v.component;if(gy(v,R,N))if(z.asyncDep&&!z.asyncResolved){tt(z,R,N);return}else z.next=R,z.update();else R.el=v.el,z.vnode=R},k=(v,R,N,z,B,Z,Q)=>{const T=()=>{if(v.isMounted){let{next:q,bu:j,u:ft,parent:lt,vnode:_t}=v;{const Gt=ym(v);if(Gt){q&&(q.el=_t.el,tt(v,q,Q)),Gt.asyncDep.then(()=>{v.isUnmounted||T()});return}}let At=q,pt;go(v,!1),q?(q.el=_t.el,tt(v,q,Q)):q=_t,j&&Wl(j),(pt=q.props&&q.props.onVnodeBeforeUpdate)&&ns(pt,lt,q,_t),go(v,!0);const yt=Kl(v),Nt=v.subTree;v.subTree=yt,g(Nt,yt,h(Nt.el),G(Nt),v,B,Z),q.el=yt.el,At===null&&_y(v,yt.el),ft&&wi(ft,B),(pt=q.props&&q.props.onVnodeUpdated)&&wi(()=>ns(pt,lt,q,_t),B)}else{let q;const{el:j,props:ft}=R,{bm:lt,m:_t,parent:At,root:pt,type:yt}=v,Nt=ga(R);if(go(v,!1),lt&&Wl(lt),!Nt&&(q=ft&&ft.onVnodeBeforeMount)&&ns(q,At,R),go(v,!0),j&&st){const Gt=()=>{v.subTree=Kl(v),st(j,v.subTree,v,B,null)};Nt&&yt.__asyncHydrate?yt.__asyncHydrate(j,v,Gt):Gt()}else{pt.ce&&pt.ce._injectChildStyle(yt);const Gt=v.subTree=Kl(v);g(null,Gt,N,z,v,B,Z),R.el=Gt.el}if(_t&&wi(_t,B),!Nt&&(q=ft&&ft.onVnodeMounted)){const Gt=R;wi(()=>ns(q,At,Gt),B)}(R.shapeFlag&256||At&&ga(At.vnode)&&At.vnode.shapeFlag&256)&&v.a&&wi(v.a,B),v.isMounted=!0,R=N=z=null}};v.scope.on();const b=v.effect=new U0(T);v.scope.off();const D=v.update=b.run.bind(b),K=v.job=b.runIfDirty.bind(b);K.i=v,K.id=v.uid,b.scheduler=()=>Ed(K),go(v,!0),D()},tt=(v,R,N)=>{R.component=v;const z=v.vnode.props;v.vnode=R,v.next=null,ty(v,R.props,z,N),sy(v,R.children,N),uo(),xf(v),ho()},W=(v,R,N,z,B,Z,Q,T,b=!1)=>{const D=v&&v.children,K=v?v.shapeFlag:0,q=R.children,{patchFlag:j,shapeFlag:ft}=R;if(j>0){if(j&128){vt(D,q,N,z,B,Z,Q,T,b);return}else if(j&256){gt(D,q,N,z,B,Z,Q,T,b);return}}ft&8?(K&16&&bt(D,B,Z),q!==D&&u(N,q)):K&16?ft&16?vt(D,q,N,z,B,Z,Q,T,b):bt(D,B,Z,!0):(K&8&&u(N,""),ft&16&&L(q,N,z,B,Z,Q,T,b))},gt=(v,R,N,z,B,Z,Q,T,b)=>{v=v||vr,R=R||vr;const D=v.length,K=R.length,q=Math.min(D,K);let j;for(j=0;j<q;j++){const ft=R[j]=b?Ks(R[j]):os(R[j]);g(v[j],ft,N,null,B,Z,Q,T,b)}D>K?bt(v,B,Z,!0,!1,q):L(R,N,z,B,Z,Q,T,b,q)},vt=(v,R,N,z,B,Z,Q,T,b)=>{let D=0;const K=R.length;let q=v.length-1,j=K-1;for(;D<=q&&D<=j;){const ft=v[D],lt=R[D]=b?Ks(R[D]):os(R[D]);if(Jr(ft,lt))g(ft,lt,N,null,B,Z,Q,T,b);else break;D++}for(;D<=q&&D<=j;){const ft=v[q],lt=R[j]=b?Ks(R[j]):os(R[j]);if(Jr(ft,lt))g(ft,lt,N,null,B,Z,Q,T,b);else break;q--,j--}if(D>q){if(D<=j){const ft=j+1,lt=ft<K?R[ft].el:z;for(;D<=j;)g(null,R[D]=b?Ks(R[D]):os(R[D]),N,lt,B,Z,Q,T,b),D++}}else if(D>j)for(;D<=q;)Dt(v[D],B,Z,!0),D++;else{const ft=D,lt=D,_t=new Map;for(D=lt;D<=j;D++){const Ht=R[D]=b?Ks(R[D]):os(R[D]);Ht.key!=null&&_t.set(Ht.key,D)}let At,pt=0;const yt=j-lt+1;let Nt=!1,Gt=0;const It=new Array(yt);for(D=0;D<yt;D++)It[D]=0;for(D=ft;D<=q;D++){const Ht=v[D];if(pt>=yt){Dt(Ht,B,Z,!0);continue}let te;if(Ht.key!=null)te=_t.get(Ht.key);else for(At=lt;At<=j;At++)if(It[At-lt]===0&&Jr(Ht,R[At])){te=At;break}te===void 0?Dt(Ht,B,Z,!0):(It[te-lt]=D+1,te>=Gt?Gt=te:Nt=!0,g(Ht,R[te],N,null,B,Z,Q,T,b),pt++)}const ee=Nt?cy(It):vr;for(At=ee.length-1,D=yt-1;D>=0;D--){const Ht=lt+D,te=R[Ht],X=Ht+1<K?R[Ht+1].el:z;It[D]===0?g(null,te,N,X,B,Z,Q,T,b):Nt&&(At<0||D!==ee[At]?xt(te,N,X,2):At--)}}},xt=(v,R,N,z,B=null)=>{const{el:Z,type:Q,transition:T,children:b,shapeFlag:D}=v;if(D&6){xt(v.component.subTree,R,N,z);return}if(D&128){v.suspense.move(R,N,z);return}if(D&64){Q.move(v,R,N,ht);return}if(Q===En){i(Z,R,N);for(let q=0;q<b.length;q++)xt(b[q],R,N,z);i(v.anchor,R,N);return}if(Q===Zl){w(v,R,N);return}if(z!==2&&D&1&&T)if(z===0)T.beforeEnter(Z),i(Z,R,N),wi(()=>T.enter(Z),B);else{const{leave:q,delayLeave:j,afterLeave:ft}=T,lt=()=>i(Z,R,N),_t=()=>{q(Z,()=>{lt(),ft&&ft()})};j?j(Z,lt,_t):_t()}else i(Z,R,N)},Dt=(v,R,N,z=!1,B=!1)=>{const{type:Z,props:Q,ref:T,children:b,dynamicChildren:D,shapeFlag:K,patchFlag:q,dirs:j,cacheIndex:ft}=v;if(q===-2&&(B=!1),T!=null&&$u(T,null,N,v,!0),ft!=null&&(R.renderCache[ft]=void 0),K&256){R.ctx.deactivate(v);return}const lt=K&1&&j,_t=!ga(v);let At;if(_t&&(At=Q&&Q.onVnodeBeforeUnmount)&&ns(At,R,v),K&6)dt(v.component,N,z);else{if(K&128){v.suspense.unmount(N,z);return}lt&&mo(v,null,R,"beforeUnmount"),K&64?v.type.remove(v,R,N,ht,z):D&&!D.hasOnce&&(Z!==En||q>0&&q&64)?bt(D,R,N,!1,!0):(Z===En&&q&384||!B&&K&16)&&bt(b,R,N),z&&kt(v)}(_t&&(At=Q&&Q.onVnodeUnmounted)||lt)&&wi(()=>{At&&ns(At,R,v),lt&&mo(v,null,R,"unmounted")},N)},kt=v=>{const{type:R,el:N,anchor:z,transition:B}=v;if(R===En){rt(N,z);return}if(R===Zl){x(v);return}const Z=()=>{s(N),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(v.shapeFlag&1&&B&&!B.persisted){const{leave:Q,delayLeave:T}=B,b=()=>Q(N,Z);T?T(v.el,Z,b):b()}else Z()},rt=(v,R)=>{let N;for(;v!==R;)N=d(v),s(v),v=N;s(R)},dt=(v,R,N)=>{const{bum:z,scope:B,job:Z,subTree:Q,um:T,m:b,a:D}=v;Pf(b),Pf(D),z&&Wl(z),B.stop(),Z&&(Z.flags|=8,Dt(Q,v,R,N)),T&&wi(T,R),wi(()=>{v.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},bt=(v,R,N,z=!1,B=!1,Z=0)=>{for(let Q=Z;Q<v.length;Q++)Dt(v[Q],R,N,z,B)},G=v=>{if(v.shapeFlag&6)return G(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const R=d(v.anchor||v.el),N=R&&R[Rv];return N?d(N):R};let ut=!1;const at=(v,R,N)=>{v==null?R._vnode&&Dt(R._vnode,null,null,!0):g(R._vnode||null,v,R,null,null,null,N),R._vnode=v,ut||(ut=!0,xf(),em(),ut=!1)},ht={p:g,um:Dt,m:xt,r:kt,mt:J,mc:L,pc:W,pbc:S,n:G,o:n};let St,st;return{render:at,hydrate:St,createApp:Jv(at,St)}}function $l({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function go({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function ay(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function vm(n,t,e=!1){const i=n.children,s=t.children;if(Re(i)&&Re(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Ks(s[o]),a.el=r.el),!e&&a.patchFlag!==-2&&vm(r,a)),a.type===Cl&&(a.el=r.el)}}function cy(n){const t=n.slice(),e=[0];let i,s,o,r,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=e[e.length-1],n[s]<l){t[i]=s,e.push(i);continue}for(o=0,r=e.length-1;o<r;)a=o+r>>1,n[e[a]]<l?o=a+1:r=a;l<n[e[o]]&&(o>0&&(t[i]=e[o-1]),e[o]=i)}}for(o=e.length,r=e[o-1];o-- >0;)e[o]=r,r=t[r];return e}function ym(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ym(t)}function Pf(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const ly=Symbol.for("v-scx"),uy=()=>Os(ly);function Ve(n,t,e){return xm(n,t,e)}function xm(n,t,e=Qe){const{immediate:i,deep:s,flush:o,once:r}=e,a=Fn({},e);let c;if(Il)if(o==="sync"){const d=uy();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=ls,d.resume=ls,d.pause=ls,d}const l=Vn;a.call=(d,f,_)=>ds(d,l,f,_);let u=!1;o==="post"?a.scheduler=d=>{wi(d,l&&l.suspense)}:o!=="sync"&&(u=!0,a.scheduler=(d,f)=>{f?d():Ed(d)}),a.augmentJob=d=>{t&&(d.flags|=4),u&&(d.flags|=2,l&&(d.id=l.uid,d.i=l))};const h=bv(n,t,a);return c&&c.push(h),h}function hy(n,t,e){const i=this.proxy,s=Dn(n)?n.includes(".")?wm(i,n):()=>i[n]:n.bind(i,i);let o;Ae(t)?o=t:(o=t.handler,e=t);const r=Za(this),a=xm(s,o.bind(i),e);return r(),a}function wm(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const dy=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${ki(t)}Modifiers`]||n[`${Wo(t)}Modifiers`];function fy(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let s=e;const o=t.startsWith("update:"),r=o&&dy(i,t.slice(7));r&&(r.trim&&(s=e.map(u=>Dn(u)?u.trim():u)),r.number&&(s=e.map(H_)));let a,c=i[a=Vl(t)]||i[a=Vl(ki(t))];!c&&o&&(c=i[a=Vl(Wo(t))]),c&&ds(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ds(l,n,6,s)}}function Mm(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const o=n.emits;let r={},a=!1;if(!Ae(n)){const c=l=>{const u=Mm(l,t,!0);u&&(a=!0,Fn(r,u))};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!a?(xn(n)&&i.set(n,null),null):(Re(o)?o.forEach(c=>r[c]=null):Fn(r,o),xn(n)&&i.set(n,r),r)}function Rl(n,t){return!n||!wl(t)?!1:(t=t.slice(2).replace(/Once$/,""),ze(n,t[0].toLowerCase()+t.slice(1))||ze(n,Wo(t))||ze(n,t))}function Kl(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:a,emit:c,render:l,renderCache:u,props:h,data:d,setupState:f,ctx:_,inheritAttrs:g}=n,p=il(n);let m,M;try{if(e.shapeFlag&4){const x=s||i,I=x;m=os(l.call(I,x,u,h,f,d,_)),M=a}else{const x=t;m=os(x.length>1?x(h,{attrs:a,slots:r,emit:c}):x(h,null)),M=t.props?a:py(a)}}catch(x){va.length=0,Al(x,n,1),m=qe(zo)}let w=m;if(M&&g!==!1){const x=Object.keys(M),{shapeFlag:I}=w;x.length&&I&7&&(o&&x.some(ud)&&(M=my(M,o)),w=Cr(w,M,!1,!0))}return e.dirs&&(w=Cr(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(e.dirs):e.dirs),e.transition&&Td(w,e.transition),m=w,il(p),m}const py=n=>{let t;for(const e in n)(e==="class"||e==="style"||wl(e))&&((t||(t={}))[e]=n[e]);return t},my=(n,t)=>{const e={};for(const i in n)(!ud(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function gy(n,t,e){const{props:i,children:s,component:o}=n,{props:r,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return i?Rf(i,r,l):!!r;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(r[d]!==i[d]&&!Rl(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Rf(i,r,l):!0:!!r;return!1}function Rf(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(t[o]!==n[o]&&!Rl(e,o))return!0}return!1}function _y({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Sm=n=>n.__isSuspense;function vy(n,t){t&&t.pendingBranch?Re(n)?t.effects.push(...n):t.effects.push(n):Av(n)}const En=Symbol.for("v-fgt"),Cl=Symbol.for("v-txt"),zo=Symbol.for("v-cmt"),Zl=Symbol.for("v-stc"),va=[];let Ti=null;function ei(n=!1){va.push(Ti=n?null:[])}function yy(){va.pop(),Ti=va[va.length-1]||null}let Da=1;function Cf(n){Da+=n,n<0&&Ti&&(Ti.hasOnce=!0)}function bm(n){return n.dynamicChildren=Da>0?Ti||vr:null,yy(),Da>0&&Ti&&Ti.push(n),n}function li(n,t,e,i,s,o){return bm(Ft(n,t,e,i,s,o,!0))}function xy(n,t,e,i,s){return bm(qe(n,t,e,i,s,!0))}function ol(n){return n?n.__v_isVNode===!0:!1}function Jr(n,t){return n.type===t.type&&n.key===t.key}const Em=({key:n})=>n??null,Wc=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Dn(n)||qn(n)||Ae(n)?{i:Ei,r:n,k:t,f:!!e}:n:null);function Ft(n,t=null,e=null,i=0,s=null,o=n===En?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Em(t),ref:t&&Wc(t),scopeId:im,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ei};return a?(Cd(c,e),o&128&&n.normalize(c)):e&&(c.shapeFlag|=Dn(e)?8:16),Da>0&&!r&&Ti&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Ti.push(c),c}const qe=wy;function wy(n,t=null,e=null,i=0,s=null,o=!1){if((!n||n===Vv)&&(n=zo),ol(n)){const a=Cr(n,t,!0);return e&&Cd(a,e),Da>0&&!o&&Ti&&(a.shapeFlag&6?Ti[Ti.indexOf(n)]=a:Ti.push(a)),a.patchFlag=-2,a}if(Dy(n)&&(n=n.__vccOpts),t){t=My(t);let{class:a,style:c}=t;a&&!Dn(a)&&(t.class=Qn(a)),xn(c)&&(Md(c)&&!Re(c)&&(c=Fn({},c)),t.style=fd(c))}const r=Dn(n)?1:Sm(n)?128:Cv(n)?64:xn(n)?4:Ae(n)?2:0;return Ft(n,t,e,i,s,r,o,!0)}function My(n){return n?Md(n)||hm(n)?Fn({},n):n:null}function Cr(n,t,e=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:a,transition:c}=n,l=t?by(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Em(l),ref:t&&t.ref?e&&o?Re(o)?o.concat(Wc(t)):[o,Wc(t)]:Wc(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==En?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Cr(n.ssContent),ssFallback:n.ssFallback&&Cr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Td(u,c.clone(u)),u}function di(n=" ",t=0){return qe(Cl,null,n,t)}function Sy(n="",t=!1){return t?(ei(),xy(zo,null,n)):qe(zo,null,n)}function os(n){return n==null||typeof n=="boolean"?qe(zo):Re(n)?qe(En,null,n.slice()):ol(n)?Ks(n):qe(Cl,null,String(n))}function Ks(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Cr(n)}function Cd(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Re(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Cd(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!hm(t)?t._ctx=Ei:s===3&&Ei&&(Ei.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ae(t)?(t={default:t,_ctx:Ei},e=32):(t=String(t),i&64?(e=16,t=[di(t)]):e=8);n.children=t,n.shapeFlag|=e}function by(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Qn([t.class,i.class]));else if(s==="style")t.style=fd([t.style,i.style]);else if(wl(s)){const o=t[s],r=i[s];r&&o!==r&&!(Re(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=i[s])}return t}function ns(n,t,e,i=null){ds(n,t,7,[e,i])}const Ey=cm();let Ty=0;function Ay(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Ey,o={uid:Ty++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fm(i,s),emitsOptions:Mm(i,s),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=fy.bind(null,o),n.ce&&n.ce(o),o}let Vn=null,rl,th;{const n=L0(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};rl=t("__VUE_INSTANCE_SETTERS__",e=>Vn=e),th=t("__VUE_SSR_SETTERS__",e=>Il=e)}const Za=n=>{const t=Vn;return rl(n),n.scope.on(),()=>{n.scope.off(),rl(t)}},If=()=>{Vn&&Vn.scope.off(),rl(null)};function Tm(n){return n.vnode.shapeFlag&4}let Il=!1;function Py(n,t=!1,e=!1){t&&th(t);const{props:i,children:s}=n.vnode,o=Tm(n);Qv(n,i,o,t),iy(n,s,e);const r=o?Ry(n,t):void 0;return t&&th(!1),r}function Ry(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Xv);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?Iy(n):null,o=Za(n);uo();const r=Ka(i,n,0,[n.props,s]);if(ho(),o(),C0(r)){if(ga(n)||sm(n),r.then(If,If),t)return r.then(a=>{Lf(n,a,t)}).catch(a=>{Al(a,n,0)});n.asyncDep=r}else Lf(n,r,t)}else Am(n,t)}function Lf(n,t,e){Ae(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:xn(t)&&(n.setupState=Z0(t)),Am(n,e)}let Df;function Am(n,t,e){const i=n.type;if(!n.render){if(!t&&Df&&!i.render){const s=i.template||Pd(n).template;if(s){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=Fn(Fn({isCustomElement:o,delimiters:a},r),c);i.render=Df(s,l)}}n.render=i.render||ls}{const s=Za(n);uo();try{qv(n)}finally{ho(),s()}}}const Cy={get(n,t){return $n(n,"get",""),n[t]}};function Iy(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Cy),slots:n.slots,emit:n.emit,expose:t}}function Ll(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Z0(vv(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in _a)return _a[e](n)},has(t,e){return e in t||e in _a}})):n.proxy}function Ly(n,t=!0){return Ae(n)?n.displayName||n.name:n.name||t&&n.__name}function Dy(n){return Ae(n)&&"__vccOpts"in n}const Yi=(n,t)=>Mv(n,t,Il);function Pm(n,t,e){const i=arguments.length;return i===2?xn(t)&&!Re(t)?ol(t)?qe(n,null,[t]):qe(n,t):qe(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ol(e)&&(e=[e]),qe(n,t,e))}const Uy="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let eh;const Uf=typeof window<"u"&&window.trustedTypes;if(Uf)try{eh=Uf.createPolicy("vue",{createHTML:n=>n})}catch{}const Rm=eh?n=>eh.createHTML(n):n=>n,Ny="http://www.w3.org/2000/svg",Oy="http://www.w3.org/1998/Math/MathML",Rs=typeof document<"u"?document:null,Nf=Rs&&Rs.createElement("template"),Fy={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Rs.createElementNS(Ny,n):t==="mathml"?Rs.createElementNS(Oy,n):e?Rs.createElement(n,{is:e}):Rs.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Rs.createTextNode(n),createComment:n=>Rs.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Rs.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,o){const r=e?e.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===o||!(s=s.nextSibling)););else{Nf.innerHTML=Rm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Nf.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},By=Symbol("_vtc");function zy(n,t,e){const i=n[By];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const al=Symbol("_vod"),Cm=Symbol("_vsh"),Gy={beforeMount(n,{value:t},{transition:e}){n[al]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Qr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Qr(n,!0),i.enter(n)):i.leave(n,()=>{Qr(n,!1)}):Qr(n,t))},beforeUnmount(n,{value:t}){Qr(n,t)}};function Qr(n,t){n.style.display=t?n[al]:"none",n[Cm]=!t}const ky=Symbol(""),Hy=/(^|;)\s*display\s*:/;function Vy(n,t,e){const i=n.style,s=Dn(e);let o=!1;if(e&&!s){if(t)if(Dn(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&Xc(i,a,"")}else for(const r in t)e[r]==null&&Xc(i,r,"");for(const r in e)r==="display"&&(o=!0),Xc(i,r,e[r])}else if(s){if(t!==e){const r=i[ky];r&&(e+=";"+r),i.cssText=e,o=Hy.test(e)}}else t&&n.removeAttribute("style");al in n&&(n[al]=o?i.display:"",n[Cm]&&(i.display="none"))}const Of=/\s*!important$/;function Xc(n,t,e){if(Re(e))e.forEach(i=>Xc(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Wy(n,t);Of.test(e)?n.setProperty(Wo(i),e.replace(Of,""),"important"):n[i]=e}}const Ff=["Webkit","Moz","ms"],Jl={};function Wy(n,t){const e=Jl[t];if(e)return e;let i=ki(t);if(i!=="filter"&&i in n)return Jl[t]=i;i=bl(i);for(let s=0;s<Ff.length;s++){const o=Ff[s]+i;if(o in n)return Jl[t]=o}return t}const Bf="http://www.w3.org/1999/xlink";function zf(n,t,e,i,s,o=j_(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Bf,t.slice(6,t.length)):n.setAttributeNS(Bf,t,e):e==null||o&&!D0(e)?n.removeAttribute(t):n.setAttribute(t,o?"":Xr(e)?String(e):e)}function Gf(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Rm(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(r!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const r=typeof n[t];r==="boolean"?e=D0(e):e==null&&r==="string"?(e="",o=!0):r==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(t)}function Xy(n,t,e,i){n.addEventListener(t,e,i)}function qy(n,t,e,i){n.removeEventListener(t,e,i)}const kf=Symbol("_vei");function Yy(n,t,e,i,s=null){const o=n[kf]||(n[kf]={}),r=o[t];if(i&&r)r.value=i;else{const[a,c]=jy(t);if(i){const l=o[t]=Zy(i,s);Xy(n,a,l,c)}else r&&(qy(n,a,r,c),o[t]=void 0)}}const Hf=/(?:Once|Passive|Capture)$/;function jy(n){let t;if(Hf.test(n)){t={};let i;for(;i=n.match(Hf);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Wo(n.slice(2)),t]}let Ql=0;const $y=Promise.resolve(),Ky=()=>Ql||($y.then(()=>Ql=0),Ql=Date.now());function Zy(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;ds(Jy(i,e.value),t,5,[i])};return e.value=n,e.attached=Ky(),e}function Jy(n,t){if(Re(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Vf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Qy=(n,t,e,i,s,o)=>{const r=s==="svg";t==="class"?zy(n,i,r):t==="style"?Vy(n,e,i):wl(t)?ud(t)||Yy(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tx(n,t,i,r))?(Gf(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&zf(n,t,i,r,o,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Dn(i))?Gf(n,ki(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),zf(n,t,i,r))};function tx(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Vf(t)&&Ae(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vf(t)&&Dn(e)?!1:t in n}const ex=Fn({patchProp:Qy},Fy);let Wf;function nx(){return Wf||(Wf=oy(ex))}const ix=(...n)=>{const t=nx().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=ox(i);if(!s)return;const o=t._component;!Ae(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=e(s,!1,sx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function sx(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ox(n){return Dn(n)?document.querySelector(n):n}const rx={id:"app"},ax=zn({__name:"App",setup(n){const t=Qt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return ti(()=>{window.addEventListener("mousemove",e)}),Ad(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const o=wf("router-link"),r=wf("router-view");return ei(),li("div",rx,[Pv(Ft("nav",null,[qe(o,{to:"/3d-bear-arts/leather"},{default:hi(()=>s[0]||(s[0]=[di("LV")])),_:1}),qe(o,{to:"/3d-bear-arts/pop-art"},{default:hi(()=>s[1]||(s[1]=[di("Pop MouseMove")])),_:1}),qe(o,{to:"/3d-bear-arts/pop-art-bear-3"},{default:hi(()=>s[2]||(s[2]=[di("Pop Art")])),_:1}),qe(o,{to:"/3d-bear-arts/machine"},{default:hi(()=>s[3]||(s[3]=[di("Machine")])),_:1}),qe(o,{to:"/3d-bear-arts/water"},{default:hi(()=>s[4]||(s[4]=[di("Water")])),_:1}),qe(o,{to:"/3d-bear-arts/ghost-bear"},{default:hi(()=>s[5]||(s[5]=[di("Pumpkin")])),_:1}),qe(o,{to:"/3d-bear-arts/white-ghost-bear"},{default:hi(()=>s[6]||(s[6]=[di("Ghost")])),_:1}),qe(o,{to:"/3d-bear-arts/coffee"},{default:hi(()=>s[7]||(s[7]=[di("Coffee")])),_:1}),qe(o,{to:"/3d-bear-arts/bears"},{default:hi(()=>s[8]||(s[8]=[di("Bears")])),_:1}),qe(o,{to:"/3d-bear-arts/money"},{default:hi(()=>s[9]||(s[9]=[di("Money")])),_:1}),qe(o,{to:"/3d-bear-arts/santa"},{default:hi(()=>s[10]||(s[10]=[di("Santa")])),_:1}),qe(o,{to:"/3d-bear-arts/snowman"},{default:hi(()=>s[11]||(s[11]=[di("Snowman")])),_:1}),qe(o,{to:"/3d-bear-arts/"},{default:hi(()=>s[12]||(s[12]=[di("Duck")])),_:1})],512),[[Gy,t.value]]),qe(r)])}}}),ui=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},cx=ui(ax,[["__scopeId","data-v-8abb0aff"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const hr=typeof document<"u";function Im(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function lx(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Im(n.default)}const Xe=Object.assign;function tu(n,t){const e={};for(const i in t){const s=t[i];e[i]=Qi(s)?s.map(n):n(s)}return e}const ya=()=>{},Qi=Array.isArray,Lm=/#/g,ux=/&/g,hx=/\//g,dx=/=/g,fx=/\?/g,Dm=/\+/g,px=/%5B/g,mx=/%5D/g,Um=/%5E/g,gx=/%60/g,Nm=/%7B/g,_x=/%7C/g,Om=/%7D/g,vx=/%20/g;function Id(n){return encodeURI(""+n).replace(_x,"|").replace(px,"[").replace(mx,"]")}function yx(n){return Id(n).replace(Nm,"{").replace(Om,"}").replace(Um,"^")}function nh(n){return Id(n).replace(Dm,"%2B").replace(vx,"+").replace(Lm,"%23").replace(ux,"%26").replace(gx,"`").replace(Nm,"{").replace(Om,"}").replace(Um,"^")}function xx(n){return nh(n).replace(dx,"%3D")}function wx(n){return Id(n).replace(Lm,"%23").replace(fx,"%3F")}function Mx(n){return n==null?"":wx(n).replace(hx,"%2F")}function Ua(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Sx=/\/$/,bx=n=>n.replace(Sx,"");function eu(n,t,e="/"){let i,s={},o="",r="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),s=n(o)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=Px(i??t,e),{fullPath:i+(o&&"?")+o+r,path:i,query:s,hash:Ua(r)}}function Ex(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Xf(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Tx(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&Ir(t.matched[i],e.matched[s])&&Fm(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Ir(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Fm(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Ax(n[e],t[e]))return!1;return!0}function Ax(n,t){return Qi(n)?qf(n,t):Qi(t)?qf(t,n):n===t}function qf(n,t){return Qi(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Px(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=e.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return e.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const Hs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Na;(function(n){n.pop="pop",n.push="push"})(Na||(Na={}));var xa;(function(n){n.back="back",n.forward="forward",n.unknown=""})(xa||(xa={}));function Rx(n){if(!n)if(hr){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),bx(n)}const Cx=/^[^#]+#/;function Ix(n,t){return n.replace(Cx,"#")+t}function Lx(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Dl=()=>({left:window.scrollX,top:window.scrollY});function Dx(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Lx(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Yf(n,t){return(history.state?history.state.position-t:-1)+n}const ih=new Map;function Ux(n,t){ih.set(n,t)}function Nx(n){const t=ih.get(n);return ih.delete(n),t}let Ox=()=>location.protocol+"//"+location.host;function Bm(n,t){const{pathname:e,search:i,hash:s}=t,o=n.indexOf("#");if(o>-1){let a=s.includes(n.slice(o))?n.slice(o).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Xf(c,"")}return Xf(e,n)+i+s}function Fx(n,t,e,i){let s=[],o=[],r=null;const a=({state:d})=>{const f=Bm(n,location),_=e.value,g=t.value;let p=0;if(d){if(e.value=f,t.value=d,r&&r===_){r=null;return}p=g?d.position-g.position:0}else i(f);s.forEach(m=>{m(e.value,_,{delta:p,type:Na.pop,direction:p?p>0?xa.forward:xa.back:xa.unknown})})};function c(){r=e.value}function l(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return o.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Xe({},d.state,{scroll:Dl()}),"")}function h(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function jf(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Dl():null}}function Bx(n){const{history:t,location:e}=window,i={value:Bm(n,e)},s={value:t.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,l,u){const h=n.indexOf("#"),d=h>-1?(e.host&&document.querySelector("base")?n:n.slice(h))+c:Ox()+n+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),e[u?"replace":"assign"](d)}}function r(c,l){const u=Xe({},t.state,jf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});o(c,u,!0),i.value=c}function a(c,l){const u=Xe({},s.value,t.state,{forward:c,scroll:Dl()});o(u.current,u,!0);const h=Xe({},jf(i.value,c,null),{position:u.position+1},l);o(c,h,!1),i.value=c}return{location:i,state:s,push:a,replace:r}}function zx(n){n=Rx(n);const t=Bx(n),e=Fx(n,t.state,t.location,t.replace);function i(o,r=!0){r||e.pauseListeners(),history.go(o)}const s=Xe({location:"",base:n,go:i,createHref:Ix.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Gx(n){return typeof n=="string"||n&&typeof n=="object"}function zm(n){return typeof n=="string"||typeof n=="symbol"}const Gm=Symbol("");var $f;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})($f||($f={}));function Lr(n,t){return Xe(new Error,{type:n,[Gm]:!0},t)}function ws(n,t){return n instanceof Error&&Gm in n&&(t==null||!!(n.type&t))}const Kf="[^/]+?",kx={sensitive:!1,strict:!1,start:!0,end:!0},Hx=/[.+*?^${}()[\]/\\]/g;function Vx(n,t){const e=Xe({},kx,t),i=[];let s=e.start?"^":"";const o=[];for(const l of n){const u=l.length?[]:[90];e.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(e.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Hx,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:g,optional:p,regexp:m}=d;o.push({name:_,repeatable:g,optional:p});const M=m||Kf;if(M!==Kf){f+=10;try{new RegExp(`(${M})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+x.message)}}let w=g?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(w=p&&l.length<2?`(?:/${w})`:"/"+w),p&&(w+="?"),s+=w,f+=20,p&&(f+=-8),g&&(f+=-20),M===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(e.strict&&e.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const r=new RegExp(s,e.sensitive?"":"i");function a(l){const u=l.match(r),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",_=o[d-1];h[_.name]=f&&_.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:_,repeatable:g,optional:p}=f,m=_ in l?l[_]:"";if(Qi(m)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Qi(m)?m.join("/"):m;if(!M)if(p)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:r,score:i,keys:o,parse:a,stringify:c}}function Wx(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function km(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const o=Wx(i[e],s[e]);if(o)return o;e++}if(Math.abs(s.length-i.length)===1){if(Zf(i))return 1;if(Zf(s))return-1}return s.length-i.length}function Zf(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Xx={type:0,value:""},qx=/[a-zA-Z0-9_]/;function Yx(n){if(!n)return[[]];if(n==="/")return[[Xx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(f){throw new Error(`ERR (${e})/"${l}": ${f}`)}let e=0,i=e;const s=[];let o;function r(){o&&s.push(o),o=[]}let a=0,c,l="",u="";function h(){l&&(e===0?o.push({type:0,value:l}):e===1||e===2||e===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:c==="/"?(l&&h(),r()):c===":"?(h(),e=1):d();break;case 4:d(),e=i;break;case 1:c==="("?e=2:qx.test(c)?d():(h(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:e=3:u+=c;break;case 3:h(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),r(),s}function jx(n,t,e){const i=Vx(Yx(n.path),e),s=Xe(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function $x(n,t){const e=[],i=new Map;t=ep({strict:!1,end:!0,sensitive:!1},t);function s(h){return i.get(h)}function o(h,d,f){const _=!f,g=Qf(h);g.aliasOf=f&&f.record;const p=ep(t,h),m=[g];if("alias"in h){const x=typeof h.alias=="string"?[h.alias]:h.alias;for(const I of x)m.push(Qf(Xe({},g,{components:f?f.record.components:g.components,path:I,aliasOf:f?f.record:g})))}let M,w;for(const x of m){const{path:I}=x;if(d&&I[0]!=="/"){const C=d.record.path,E=C[C.length-1]==="/"?"":"/";x.path=d.record.path+(I&&E+I)}if(M=jx(x,d,p),f?f.alias.push(M):(w=w||M,w!==M&&w.alias.push(M),_&&h.name&&!tp(M)&&r(h.name)),Hm(M)&&c(M),g.children){const C=g.children;for(let E=0;E<C.length;E++)o(C[E],M,f&&f.children[E])}f=f||M}return w?()=>{r(w)}:ya}function r(h){if(zm(h)){const d=i.get(h);d&&(i.delete(h),e.splice(e.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=e.indexOf(h);d>-1&&(e.splice(d,1),h.record.name&&i.delete(h.record.name),h.children.forEach(r),h.alias.forEach(r))}}function a(){return e}function c(h){const d=Jx(h,e);e.splice(d,0,h),h.record.name&&!tp(h)&&i.set(h.record.name,h)}function l(h,d){let f,_={},g,p;if("name"in h&&h.name){if(f=i.get(h.name),!f)throw Lr(1,{location:h});p=f.record.name,_=Xe(Jf(d.params,f.keys.filter(w=>!w.optional).concat(f.parent?f.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),h.params&&Jf(h.params,f.keys.map(w=>w.name))),g=f.stringify(_)}else if(h.path!=null)g=h.path,f=e.find(w=>w.re.test(g)),f&&(_=f.parse(g),p=f.record.name);else{if(f=d.name?i.get(d.name):e.find(w=>w.re.test(d.path)),!f)throw Lr(1,{location:h,currentLocation:d});p=f.record.name,_=Xe({},d.params,h.params),g=f.stringify(_)}const m=[];let M=f;for(;M;)m.unshift(M.record),M=M.parent;return{name:p,path:g,params:_,matched:m,meta:Zx(m)}}n.forEach(h=>o(h));function u(){e.length=0,i.clear()}return{addRoute:o,resolve:l,removeRoute:r,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Jf(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Qf(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Kx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Kx(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function tp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Zx(n){return n.reduce((t,e)=>Xe(t,e.meta),{})}function ep(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function Jx(n,t){let e=0,i=t.length;for(;e!==i;){const o=e+i>>1;km(n,t[o])<0?i=o:e=o+1}const s=Qx(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function Qx(n){let t=n;for(;t=t.parent;)if(Hm(t)&&km(n,t)===0)return t}function Hm({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function tw(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(Dm," "),r=o.indexOf("="),a=Ua(r<0?o:o.slice(0,r)),c=r<0?null:Ua(o.slice(r+1));if(a in t){let l=t[a];Qi(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function np(n){let t="";for(let e in n){const i=n[e];if(e=xx(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Qi(i)?i.map(o=>o&&nh(o)):[i&&nh(i)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+e,o!=null&&(t+="="+o))})}return t}function ew(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Qi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const nw=Symbol(""),ip=Symbol(""),Ld=Symbol(""),Vm=Symbol(""),sh=Symbol("");function ta(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Zs(n,t,e,i,s,o=r=>r()){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Lr(4,{from:e,to:t})):d instanceof Error?c(d):Gx(d)?c(Lr(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),a())},u=o(()=>n.call(i&&i.instances[s],t,e,l));let h=Promise.resolve(u);n.length<3&&(h=h.then(l)),h.catch(d=>c(d))})}function nu(n,t,e,i,s=o=>o()){const o=[];for(const r of n)for(const a in r.components){let c=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(Im(c)){const u=(c.__vccOpts||c)[t];u&&o.push(Zs(u,e,i,r,a,s))}else{let l=c();o.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const h=lx(u)?u.default:u;r.mods[a]=u,r.components[a]=h;const f=(h.__vccOpts||h)[t];return f&&Zs(f,e,i,r,a,s)()}))}}return o}function sp(n){const t=Os(Ld),e=Os(Vm),i=Yi(()=>{const c=xr(n.to);return t.resolve(c)}),s=Yi(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=e.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ir.bind(null,u));if(d>-1)return d;const f=op(c[l-2]);return l>1&&op(u)===f&&h[h.length-1].path!==f?h.findIndex(Ir.bind(null,c[l-2])):d}),o=Yi(()=>s.value>-1&&rw(e.params,i.value.params)),r=Yi(()=>s.value>-1&&s.value===e.matched.length-1&&Fm(e.params,i.value.params));function a(c={}){return ow(c)?t[xr(n.replace)?"replace":"push"](xr(n.to)).catch(ya):Promise.resolve()}return{route:i,href:Yi(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const iw=zn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:sp,setup(n,{slots:t}){const e=Tl(sp(n)),{options:i}=Os(Ld),s=Yi(()=>({[rp(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[rp(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const o=t.default&&t.default(e);return n.custom?o:Pm("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},o)}}}),sw=iw;function ow(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function rw(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Qi(s)||s.length!==i.length||i.some((o,r)=>o!==s[r]))return!1}return!0}function op(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const rp=(n,t,e)=>n??t??e,aw=zn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Os(sh),s=Yi(()=>n.route||i.value),o=Os(ip,0),r=Yi(()=>{let l=xr(o);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Yi(()=>s.value.matched[r.value]);Vc(ip,Yi(()=>r.value+1)),Vc(nw,a),Vc(sh,s);const c=Qt();return Ve(()=>[c.value,a.value,n.name],([l,u,h],[d,f,_])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!Ir(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=s.value,u=n.name,h=a.value,d=h&&h.components[u];if(!d)return ap(e.default,{Component:d,route:l});const f=h.props[u],_=f?f===!0?l.params:typeof f=="function"?f(l):f:null,p=Pm(d,Xe({},_,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ap(e.default,{Component:p,route:l})||p}}});function ap(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const cw=aw;function lw(n){const t=$x(n.routes,n),e=n.parseQuery||tw,i=n.stringifyQuery||np,s=n.history,o=ta(),r=ta(),a=ta(),c=yr(Hs);let l=Hs;hr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tu.bind(null,G=>""+G),h=tu.bind(null,Mx),d=tu.bind(null,Ua);function f(G,ut){let at,ht;return zm(G)?(at=t.getRecordMatcher(G),ht=ut):ht=G,t.addRoute(ht,at)}function _(G){const ut=t.getRecordMatcher(G);ut&&t.removeRoute(ut)}function g(){return t.getRoutes().map(G=>G.record)}function p(G){return!!t.getRecordMatcher(G)}function m(G,ut){if(ut=Xe({},ut||c.value),typeof G=="string"){const R=eu(e,G,ut.path),N=t.resolve({path:R.path},ut),z=s.createHref(R.fullPath);return Xe(R,N,{params:d(N.params),hash:Ua(R.hash),redirectedFrom:void 0,href:z})}let at;if(G.path!=null)at=Xe({},G,{path:eu(e,G.path,ut.path).path});else{const R=Xe({},G.params);for(const N in R)R[N]==null&&delete R[N];at=Xe({},G,{params:h(R)}),ut.params=h(ut.params)}const ht=t.resolve(at,ut),St=G.hash||"";ht.params=u(d(ht.params));const st=Ex(i,Xe({},G,{hash:yx(St),path:ht.path})),v=s.createHref(st);return Xe({fullPath:st,hash:St,query:i===np?ew(G.query):G.query||{}},ht,{redirectedFrom:void 0,href:v})}function M(G){return typeof G=="string"?eu(e,G,c.value.path):Xe({},G)}function w(G,ut){if(l!==G)return Lr(8,{from:ut,to:G})}function x(G){return E(G)}function I(G){return x(Xe(M(G),{replace:!0}))}function C(G){const ut=G.matched[G.matched.length-1];if(ut&&ut.redirect){const{redirect:at}=ut;let ht=typeof at=="function"?at(G):at;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=M(ht):{path:ht},ht.params={}),Xe({query:G.query,hash:G.hash,params:ht.path!=null?{}:G.params},ht)}}function E(G,ut){const at=l=m(G),ht=c.value,St=G.state,st=G.force,v=G.replace===!0,R=C(at);if(R)return E(Xe(M(R),{state:typeof R=="object"?Xe({},St,R.state):St,force:st,replace:v}),ut||at);const N=at;N.redirectedFrom=ut;let z;return!st&&Tx(i,ht,at)&&(z=Lr(16,{to:N,from:ht}),xt(ht,ht,!0,!1)),(z?Promise.resolve(z):S(N,ht)).catch(B=>ws(B)?ws(B,2)?B:vt(B):W(B,N,ht)).then(B=>{if(B){if(ws(B,2))return E(Xe({replace:v},M(B.to),{state:typeof B.to=="object"?Xe({},St,B.to.state):St,force:st}),ut||N)}else B=U(N,ht,!0,v,St);return A(N,ht,B),B})}function L(G,ut){const at=w(G,ut);return at?Promise.reject(at):Promise.resolve()}function F(G){const ut=rt.values().next().value;return ut&&typeof ut.runWithContext=="function"?ut.runWithContext(G):G()}function S(G,ut){let at;const[ht,St,st]=uw(G,ut);at=nu(ht.reverse(),"beforeRouteLeave",G,ut);for(const R of ht)R.leaveGuards.forEach(N=>{at.push(Zs(N,G,ut))});const v=L.bind(null,G,ut);return at.push(v),bt(at).then(()=>{at=[];for(const R of o.list())at.push(Zs(R,G,ut));return at.push(v),bt(at)}).then(()=>{at=nu(St,"beforeRouteUpdate",G,ut);for(const R of St)R.updateGuards.forEach(N=>{at.push(Zs(N,G,ut))});return at.push(v),bt(at)}).then(()=>{at=[];for(const R of st)if(R.beforeEnter)if(Qi(R.beforeEnter))for(const N of R.beforeEnter)at.push(Zs(N,G,ut));else at.push(Zs(R.beforeEnter,G,ut));return at.push(v),bt(at)}).then(()=>(G.matched.forEach(R=>R.enterCallbacks={}),at=nu(st,"beforeRouteEnter",G,ut,F),at.push(v),bt(at))).then(()=>{at=[];for(const R of r.list())at.push(Zs(R,G,ut));return at.push(v),bt(at)}).catch(R=>ws(R,8)?R:Promise.reject(R))}function A(G,ut,at){a.list().forEach(ht=>F(()=>ht(G,ut,at)))}function U(G,ut,at,ht,St){const st=w(G,ut);if(st)return st;const v=ut===Hs,R=hr?history.state:{};at&&(ht||v?s.replace(G.fullPath,Xe({scroll:v&&R&&R.scroll},St)):s.push(G.fullPath,St)),c.value=G,xt(G,ut,at,v),vt()}let H;function J(){H||(H=s.listen((G,ut,at)=>{if(!dt.listening)return;const ht=m(G),St=C(ht);if(St){E(Xe(St,{replace:!0}),ht).catch(ya);return}l=ht;const st=c.value;hr&&Ux(Yf(st.fullPath,at.delta),Dl()),S(ht,st).catch(v=>ws(v,12)?v:ws(v,2)?(E(v.to,ht).then(R=>{ws(R,20)&&!at.delta&&at.type===Na.pop&&s.go(-1,!1)}).catch(ya),Promise.reject()):(at.delta&&s.go(-at.delta,!1),W(v,ht,st))).then(v=>{v=v||U(ht,st,!1),v&&(at.delta&&!ws(v,8)?s.go(-at.delta,!1):at.type===Na.pop&&ws(v,20)&&s.go(-1,!1)),A(ht,st,v)}).catch(ya)}))}let it=ta(),k=ta(),tt;function W(G,ut,at){vt(G);const ht=k.list();return ht.length?ht.forEach(St=>St(G,ut,at)):console.error(G),Promise.reject(G)}function gt(){return tt&&c.value!==Hs?Promise.resolve():new Promise((G,ut)=>{it.add([G,ut])})}function vt(G){return tt||(tt=!G,J(),it.list().forEach(([ut,at])=>G?at(G):ut()),it.reset()),G}function xt(G,ut,at,ht){const{scrollBehavior:St}=n;if(!hr||!St)return Promise.resolve();const st=!at&&Nx(Yf(G.fullPath,0))||(ht||!at)&&history.state&&history.state.scroll||null;return Q0().then(()=>St(G,ut,st)).then(v=>v&&Dx(v)).catch(v=>W(v,G,ut))}const Dt=G=>s.go(G);let kt;const rt=new Set,dt={currentRoute:c,listening:!0,addRoute:f,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:p,getRoutes:g,resolve:m,options:n,push:x,replace:I,go:Dt,back:()=>Dt(-1),forward:()=>Dt(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:k.add,isReady:gt,install(G){const ut=this;G.component("RouterLink",sw),G.component("RouterView",cw),G.config.globalProperties.$router=ut,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>xr(c)}),hr&&!kt&&c.value===Hs&&(kt=!0,x(s.location).catch(St=>{}));const at={};for(const St in Hs)Object.defineProperty(at,St,{get:()=>c.value[St],enumerable:!0});G.provide(Ld,ut),G.provide(Vm,j0(at)),G.provide(sh,c);const ht=G.unmount;rt.add(G),G.unmount=function(){rt.delete(G),rt.size<1&&(l=Hs,H&&H(),H=null,c.value=Hs,kt=!1,tt=!1),ht()}}};function bt(G){return G.reduce((ut,at)=>ut.then(()=>F(at)),Promise.resolve())}return dt}function uw(n,t){const e=[],i=[],s=[],o=Math.max(t.matched.length,n.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(n.matched.find(l=>Ir(l,a))?i.push(a):e.push(a));const c=n.matched[r];c&&(t.matched.find(l=>Ir(l,c))||s.push(c))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dd="169",hw=0,cp=1,dw=2,Wm=1,fw=2,Ps=3,ao=0,fi=1,De=2,no=0,Sr=1,lp=2,up=3,hp=4,pw=5,Ro=100,mw=101,gw=102,_w=103,vw=104,yw=200,xw=201,ww=202,Mw=203,oh=204,rh=205,Sw=206,bw=207,Ew=208,Tw=209,Aw=210,Pw=211,Rw=212,Cw=213,Iw=214,ah=0,ch=1,lh=2,Dr=3,uh=4,hh=5,dh=6,fh=7,Xm=0,Lw=1,Dw=2,io=0,Uw=1,Nw=2,Ow=3,Fw=4,Bw=5,zw=6,Gw=7,qm=300,Ur=301,Nr=302,cl=303,ph=304,Ul=306,tn=1e3,Io=1001,mh=1002,Bi=1003,kw=1004,fc=1005,ji=1006,iu=1007,Ki=1008,Fs=1009,Ym=1010,jm=1011,Oa=1012,Ud=1013,Go=1014,Ds=1015,Ja=1016,Nd=1017,Od=1018,Or=1020,$m=35902,Km=1021,Zm=1022,ci=1023,Jm=1024,Qm=1025,br=1026,Fr=1027,tg=1028,Fd=1029,eg=1030,Bd=1031,zd=1033,qc=33776,Yc=33777,jc=33778,$c=33779,gh=35840,_h=35841,vh=35842,yh=35843,xh=36196,wh=37492,Mh=37496,Sh=37808,bh=37809,Eh=37810,Th=37811,Ah=37812,Ph=37813,Rh=37814,Ch=37815,Ih=37816,Lh=37817,Dh=37818,Uh=37819,Nh=37820,Oh=37821,Kc=36492,Fh=36494,Bh=36495,ng=36283,zh=36284,Gh=36285,kh=36286,Hw=3200,Vw=3201,ig=0,Ww=1,Js="",qi="srgb",fo="srgb-linear",Gd="display-p3",Nl="display-p3-linear",ll="linear",rn="srgb",ul="rec709",hl="p3",$o=7680,dp=519,Xw=512,qw=513,Yw=514,sg=515,jw=516,$w=517,Kw=518,Zw=519,fp=35044,pp="300 es",Us=2e3,dl=2001;class qr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mp=1234567;const wa=Math.PI/180,Fa=180/Math.PI;function Xo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]+"-"+kn[t&255]+kn[t>>8&255]+"-"+kn[t>>16&15|64]+kn[t>>24&255]+"-"+kn[e&63|128]+kn[e>>8&255]+"-"+kn[e>>16&255]+kn[e>>24&255]+kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]).toLowerCase()}function Ln(n,t,e){return Math.max(t,Math.min(e,n))}function kd(n,t){return(n%t+t)%t}function Jw(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Qw(n,t,e){return n!==t?(e-n)/(t-n):0}function Ma(n,t,e){return(1-e)*n+e*t}function t1(n,t,e,i){return Ma(n,t,1-Math.exp(-e*i))}function e1(n,t=1){return t-Math.abs(kd(n,t*2)-t)}function n1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function i1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function s1(n,t){return n+Math.floor(Math.random()*(t-n+1))}function o1(n,t){return n+Math.random()*(t-n)}function r1(n){return n*(.5-Math.random())}function a1(n){n!==void 0&&(mp=n);let t=mp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function c1(n){return n*wa}function l1(n){return n*Fa}function u1(n){return(n&n-1)===0&&n!==0}function h1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function d1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function f1(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),u=r((t+i)/2),h=o((t-i)/2),d=r((t-i)/2),f=o((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*_,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*_,a*l);break;case"ZYZ":n.set(c*_,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ii(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ge={DEG2RAD:wa,RAD2DEG:Fa,generateUUID:Xo,clamp:Ln,euclideanModulo:kd,mapLinear:Jw,inverseLerp:Qw,lerp:Ma,damp:t1,pingpong:e1,smoothstep:n1,smootherstep:i1,randInt:s1,randFloat:o1,randFloatSpread:r1,seededRandom:a1,degToRad:c1,radToDeg:l1,isPowerOfTwo:u1,ceilPowerOfTwo:h1,floorPowerOfTwo:d1,setQuaternionFromProperEuler:f1,normalize:ii,denormalize:dr};class ie{constructor(t=0,e=0){ie.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ln(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(t,e,i,s,o,r,a,c,l){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],_=i[8],g=s[0],p=s[3],m=s[6],M=s[1],w=s[4],x=s[7],I=s[2],C=s[5],E=s[8];return o[0]=r*g+a*M+c*I,o[3]=r*p+a*w+c*C,o[6]=r*m+a*x+c*E,o[1]=l*g+u*M+h*I,o[4]=l*p+u*w+h*C,o[7]=l*m+u*x+h*E,o[2]=d*g+f*M+_*I,o[5]=d*p+f*w+_*C,o[8]=d*m+f*x+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-i*o*u+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*r-a*l,d=a*c-u*o,f=l*o-r*c,_=e*h+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(s*l-u*i)*g,t[2]=(a*i-s*r)*g,t[3]=d*g,t[4]=(u*e-s*c)*g,t[5]=(s*o-a*e)*g,t[6]=f*g,t[7]=(i*c-l*e)*g,t[8]=(r*e-i*o)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(su.makeScale(t,e)),this}rotate(t){return this.premultiply(su.makeRotation(-t)),this}translate(t,e){return this.premultiply(su.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const su=new Le;function og(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function p1(){const n=Ba("canvas");return n.style.display="block",n}const gp={};function Zc(n){n in gp||(gp[n]=!0,console.warn(n))}function m1(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function g1(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _1(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _p=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vp=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[fo]:{transfer:ll,primaries:ul,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[qi]:{transfer:rn,primaries:ul,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Nl]:{transfer:ll,primaries:hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(vp),fromReference:n=>n.applyMatrix3(_p)},[Gd]:{transfer:rn,primaries:hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(vp),fromReference:n=>n.applyMatrix3(_p).convertLinearToSRGB()}},v1=new Set([fo,Nl]),Ge={enabled:!0,_workingColorSpace:fo,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!v1.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=ea[t].toReference,s=ea[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return ea[n].primaries},getTransfer:function(n){return n===Js?ll:ea[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(ea[t].luminanceCoefficients)}};function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ou(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ko;class y1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ko===void 0&&(Ko=Ba("canvas")),Ko.width=t.width,Ko.height=t.height;const i=Ko.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ko}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ba("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Er(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Er(e[i]/255)*255):e[i]=Er(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let x1=0;class rg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ru(s[r].image)):o.push(ru(s[r]))}else o=ru(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function ru(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?y1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w1=0;class Yn extends qr{constructor(t=Yn.DEFAULT_IMAGE,e=Yn.DEFAULT_MAPPING,i=Io,s=Io,o=ji,r=Ki,a=ci,c=Fs,l=Yn.DEFAULT_ANISOTROPY,u=Js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Xo(),this.name="",this.source=new rg(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tn:t.x=t.x-Math.floor(t.x);break;case Io:t.x=t.x<0?0:1;break;case mh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tn:t.y=t.y-Math.floor(t.y);break;case Io:t.y=t.y<0?0:1;break;case mh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=qm;Yn.DEFAULT_ANISOTROPY=1;class je{constructor(t=0,e=0,i=0,s=1){je.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],_=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,x=(f+1)/2,I=(m+1)/2,C=(u+d)/4,E=(h+g)/4,L=(_+p)/4;return w>x&&w>I?w<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(w),s=C/i,o=E/i):x>I?x<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),i=C/s,o=L/s):I<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),i=E/o,s=L/o),this.set(i,s,o,e),this}let M=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-g)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M1 extends qr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new je(0,0,t,e),this.scissorTest=!1,this.viewport=new je(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Yn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rg(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ko extends M1{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ag extends Yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Io,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class S1 extends Yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Io,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=o[r+0],f=o[r+1],_=o[r+2],g=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(h!==g||c!==d||l!==f||u!==_){let p=1-a;const m=c*d+l*f+u*_+h*g,M=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const I=Math.sqrt(w),C=Math.atan2(I,m*M);p=Math.sin(p*C)/I,a=Math.sin(a*C)/I}const x=a*M;if(c=c*p+d*x,l=l*p+f*x,u=u*p+_*x,h=h*p+g*x,p===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=o[r],d=o[r+1],f=o[r+2],_=o[r+3];return t[e]=a*_+u*h+c*f-l*d,t[e+1]=c*_+u*d+l*h-a*f,t[e+2]=l*_+u*f+a*d-c*h,t[e+3]=u*_-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(o/2),d=c(i/2),f=c(s/2),_=c(o/2);switch(r){case"XYZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"YZX":this._x=d*u*h+l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h-d*f*_;break;case"XZY":this._x=d*u*h-l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ln(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-i*l,this._z=o*u+r*l+i*c-s*a,this._w=r*u-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=r*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,i=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),u=2*(a*e-o*s),h=2*(o*i-r*e);return this.x=e+c*l+r*h-a*u,this.y=i+c*u+a*l-o*h,this.z=s+c*h+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return au.copy(this).projectOnVector(t),this.sub(au)}reflect(t){return this.sub(au.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ln(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const au=new et,yp=new Qa;class tc{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Vi):Vi.fromBufferAttribute(o,r),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pc.copy(i.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(na),mc.subVectors(this.max,na),Zo.subVectors(t.a,na),Jo.subVectors(t.b,na),Qo.subVectors(t.c,na),Vs.subVectors(Jo,Zo),Ws.subVectors(Qo,Jo),_o.subVectors(Zo,Qo);let e=[0,-Vs.z,Vs.y,0,-Ws.z,Ws.y,0,-_o.z,_o.y,Vs.z,0,-Vs.x,Ws.z,0,-Ws.x,_o.z,0,-_o.x,-Vs.y,Vs.x,0,-Ws.y,Ws.x,0,-_o.y,_o.x,0];return!cu(e,Zo,Jo,Qo,mc)||(e=[1,0,0,0,1,0,0,0,1],!cu(e,Zo,Jo,Qo,mc))?!1:(gc.crossVectors(Vs,Ws),e=[gc.x,gc.y,gc.z],cu(e,Zo,Jo,Qo,mc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ms),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ms=[new et,new et,new et,new et,new et,new et,new et,new et],Vi=new et,pc=new tc,Zo=new et,Jo=new et,Qo=new et,Vs=new et,Ws=new et,_o=new et,na=new et,mc=new et,gc=new et,vo=new et;function cu(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){vo.fromArray(n,o);const a=s.x*Math.abs(vo.x)+s.y*Math.abs(vo.y)+s.z*Math.abs(vo.z),c=t.dot(vo),l=e.dot(vo),u=i.dot(vo);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const b1=new tc,ia=new et,lu=new et;class Ol{constructor(t=new et,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):b1.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ia.subVectors(t,this.center);const e=ia.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ia,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ia.copy(t.center).add(lu)),this.expandByPoint(ia.copy(t.center).sub(lu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ss=new et,uu=new et,_c=new et,Xs=new et,hu=new et,vc=new et,du=new et;class cg{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ss)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ss.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ss.copy(this.origin).addScaledVector(this.direction,e),Ss.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){uu.copy(t).add(e).multiplyScalar(.5),_c.copy(e).sub(t).normalize(),Xs.copy(this.origin).sub(uu);const o=t.distanceTo(e)*.5,r=-this.direction.dot(_c),a=Xs.dot(this.direction),c=-Xs.dot(_c),l=Xs.lengthSq(),u=Math.abs(1-r*r);let h,d,f,_;if(u>0)if(h=r*c-a,d=r*a-c,_=o*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(uu).addScaledVector(_c,d),f}intersectSphere(t,e){Ss.subVectors(t.center,this.origin);const i=Ss.dot(this.direction),s=Ss.dot(Ss)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(o=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(o=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ss)!==null}intersectTriangle(t,e,i,s,o){hu.subVectors(e,t),vc.subVectors(i,t),du.crossVectors(hu,vc);let r=this.direction.dot(du),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Xs.subVectors(this.origin,t);const c=a*this.direction.dot(vc.crossVectors(Xs,vc));if(c<0)return null;const l=a*this.direction.dot(hu.cross(Xs));if(l<0||c+l>r)return null;const u=-a*Xs.dot(du);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(t,e,i,s,o,r,a,c,l,u,h,d,f,_,g,p){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,u,h,d,f,_,g,p)}set(t,e,i,s,o,r,a,c,l,u,h,d,f,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/tr.setFromMatrixColumn(t,0).length(),o=1/tr.setFromMatrixColumn(t,1).length(),r=1/tr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const d=r*u,f=r*h,_=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+_*l,e[5]=d-g*l,e[9]=-a*c,e[2]=g-d*l,e[6]=_+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,_=l*u,g=l*h;e[0]=d+g*a,e[4]=_*a-f,e[8]=r*l,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,_=l*u,g=l*h;e[0]=d-g*a,e[4]=-r*h,e[8]=_+f*a,e[1]=f+_*a,e[5]=r*u,e[9]=g-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*u,f=r*h,_=a*u,g=a*h;e[0]=c*u,e[4]=_*l-f,e[8]=d*l+g,e[1]=c*h,e[5]=g*l+d,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,_=a*c,g=a*l;e[0]=c*u,e[4]=g-d*h,e[8]=_*h+f,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+_,e[10]=d-g*h}else if(t.order==="XZY"){const d=r*c,f=r*l,_=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+g,e[5]=r*u,e[9]=f*h-_,e[2]=_*h-f,e[6]=a*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(E1,t,T1)}lookAt(t,e,i){const s=this.elements;return yi.subVectors(t,e),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),qs.crossVectors(i,yi),qs.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),qs.crossVectors(i,yi)),qs.normalize(),yc.crossVectors(yi,qs),s[0]=qs.x,s[4]=yc.x,s[8]=yi.x,s[1]=qs.y,s[5]=yc.y,s[9]=yi.y,s[2]=qs.z,s[6]=yc.z,s[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],_=i[2],g=i[6],p=i[10],m=i[14],M=i[3],w=i[7],x=i[11],I=i[15],C=s[0],E=s[4],L=s[8],F=s[12],S=s[1],A=s[5],U=s[9],H=s[13],J=s[2],it=s[6],k=s[10],tt=s[14],W=s[3],gt=s[7],vt=s[11],xt=s[15];return o[0]=r*C+a*S+c*J+l*W,o[4]=r*E+a*A+c*it+l*gt,o[8]=r*L+a*U+c*k+l*vt,o[12]=r*F+a*H+c*tt+l*xt,o[1]=u*C+h*S+d*J+f*W,o[5]=u*E+h*A+d*it+f*gt,o[9]=u*L+h*U+d*k+f*vt,o[13]=u*F+h*H+d*tt+f*xt,o[2]=_*C+g*S+p*J+m*W,o[6]=_*E+g*A+p*it+m*gt,o[10]=_*L+g*U+p*k+m*vt,o[14]=_*F+g*H+p*tt+m*xt,o[3]=M*C+w*S+x*J+I*W,o[7]=M*E+w*A+x*it+I*gt,o[11]=M*L+w*U+x*k+I*vt,o[15]=M*F+w*H+x*tt+I*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+o*c*h-s*l*h-o*a*d+i*l*d+s*a*f-i*c*f)+g*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*u-o*c*u)+p*(+e*l*h-e*a*f-o*r*h+i*r*f+o*a*u-i*l*u)+m*(-s*a*u-e*c*h+e*a*d+s*r*h-i*r*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],_=t[12],g=t[13],p=t[14],m=t[15],M=h*p*l-g*d*l+g*c*f-a*p*f-h*c*m+a*d*m,w=_*d*l-u*p*l-_*c*f+r*p*f+u*c*m-r*d*m,x=u*g*l-_*h*l+_*a*f-r*g*f-u*a*m+r*h*m,I=_*h*c-u*g*c-_*a*d+r*g*d+u*a*p-r*h*p,C=e*M+i*w+s*x+o*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return t[0]=M*E,t[1]=(g*d*o-h*p*o-g*s*f+i*p*f+h*s*m-i*d*m)*E,t[2]=(a*p*o-g*c*o+g*s*l-i*p*l-a*s*m+i*c*m)*E,t[3]=(h*c*o-a*d*o-h*s*l+i*d*l+a*s*f-i*c*f)*E,t[4]=w*E,t[5]=(u*p*o-_*d*o+_*s*f-e*p*f-u*s*m+e*d*m)*E,t[6]=(_*c*o-r*p*o-_*s*l+e*p*l+r*s*m-e*c*m)*E,t[7]=(r*d*o-u*c*o+u*s*l-e*d*l-r*s*f+e*c*f)*E,t[8]=x*E,t[9]=(_*h*o-u*g*o-_*i*f+e*g*f+u*i*m-e*h*m)*E,t[10]=(r*g*o-_*a*o+_*i*l-e*g*l-r*i*m+e*a*m)*E,t[11]=(u*a*o-r*h*o-u*i*l+e*h*l+r*i*f-e*a*f)*E,t[12]=I*E,t[13]=(u*g*s-_*h*s+_*i*d-e*g*d-u*i*p+e*h*p)*E,t[14]=(_*a*s-r*g*s-_*i*c+e*g*c+r*i*p-e*a*p)*E,t[15]=(r*h*s-u*a*s+u*i*c-e*h*c-r*i*d+e*a*d)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,h=a+a,d=o*l,f=o*u,_=o*h,g=r*u,p=r*h,m=a*h,M=c*l,w=c*u,x=c*h,I=i.x,C=i.y,E=i.z;return s[0]=(1-(g+m))*I,s[1]=(f+x)*I,s[2]=(_-w)*I,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(d+m))*C,s[6]=(p+M)*C,s[7]=0,s[8]=(_+w)*E,s[9]=(p-M)*E,s[10]=(1-(d+g))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=tr.set(s[0],s[1],s[2]).length();const r=tr.set(s[4],s[5],s[6]).length(),a=tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Wi.copy(this);const l=1/o,u=1/r,h=1/a;return Wi.elements[0]*=l,Wi.elements[1]*=l,Wi.elements[2]*=l,Wi.elements[4]*=u,Wi.elements[5]*=u,Wi.elements[6]*=u,Wi.elements[8]*=h,Wi.elements[9]*=h,Wi.elements[10]*=h,e.setFromRotationMatrix(Wi),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Us){const c=this.elements,l=2*o/(e-t),u=2*o/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let f,_;if(a===Us)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===dl)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Us){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(r-o),d=(e+t)*l,f=(i+s)*u;let _,g;if(a===Us)_=(r+o)*h,g=-2*h;else if(a===dl)_=o*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const tr=new et,Wi=new an,E1=new et(0,0,0),T1=new et(1,1,1),qs=new et,yc=new et,yi=new et,xp=new an,wp=new Qa;class fs{constructor(t=0,e=0,i=0,s=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ln(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wp.setFromEuler(this),this.setFromQuaternion(wp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class lg{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let A1=0;const Mp=new et,er=new Qa,bs=new an,xc=new et,sa=new et,P1=new et,R1=new Qa,Sp=new et(1,0,0),bp=new et(0,1,0),Ep=new et(0,0,1),Tp={type:"added"},C1={type:"removed"},nr={type:"childadded",child:null},fu={type:"childremoved",child:null};class Nn extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new et,e=new fs,i=new Qa,s=new et(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new an},normalMatrix:{value:new Le}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.multiply(er),this}rotateOnWorldAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.premultiply(er),this}rotateX(t){return this.rotateOnAxis(Sp,t)}rotateY(t){return this.rotateOnAxis(bp,t)}rotateZ(t){return this.rotateOnAxis(Ep,t)}translateOnAxis(t,e){return Mp.copy(t).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sp,t)}translateY(t){return this.translateOnAxis(bp,t)}translateZ(t){return this.translateOnAxis(Ep,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xc.copy(t):xc.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(sa,xc,this.up):bs.lookAt(xc,sa,this.up),this.quaternion.setFromRotationMatrix(bs),s&&(bs.extractRotation(s.matrixWorld),er.setFromRotationMatrix(bs),this.quaternion.premultiply(er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tp),nr.child=t,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(C1),fu.child=t,this.dispatchEvent(fu),fu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bs.multiply(t.parent.matrixWorld)),t.applyMatrix4(bs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tp),nr.child=t,this.dispatchEvent(nr),nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,t,P1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,R1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),_=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Nn.DEFAULT_UP=new et(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new et,Es=new et,pu=new et,Ts=new et,ir=new et,sr=new et,Ap=new et,mu=new et,gu=new et,_u=new et,vu=new je,yu=new je,xu=new je;class $i{constructor(t=new et,e=new et,i=new et){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Xi.subVectors(t,e),s.cross(Xi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Xi.subVectors(s,e),Es.subVectors(i,e),pu.subVectors(t,e);const r=Xi.dot(Xi),a=Xi.dot(Es),c=Xi.dot(pu),l=Es.dot(Es),u=Es.dot(pu),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,_=(r*u-a*c)*d;return o.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,Ts)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ts.x),c.addScaledVector(r,Ts.y),c.addScaledVector(a,Ts.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return vu.setScalar(0),yu.setScalar(0),xu.setScalar(0),vu.fromBufferAttribute(t,e),yu.fromBufferAttribute(t,i),xu.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(vu,o.x),r.addScaledVector(yu,o.y),r.addScaledVector(xu,o.z),r}static isFrontFacing(t,e,i,s){return Xi.subVectors(i,e),Es.subVectors(t,e),Xi.cross(Es).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xi.subVectors(this.c,this.b),Es.subVectors(this.a,this.b),Xi.cross(Es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return $i.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return $i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;ir.subVectors(s,i),sr.subVectors(o,i),mu.subVectors(t,i);const c=ir.dot(mu),l=sr.dot(mu);if(c<=0&&l<=0)return e.copy(i);gu.subVectors(t,s);const u=ir.dot(gu),h=sr.dot(gu);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(i).addScaledVector(ir,r);_u.subVectors(t,o);const f=ir.dot(_u),_=sr.dot(_u);if(_>=0&&f<=_)return e.copy(o);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(sr,a);const p=u*_-f*h;if(p<=0&&h-u>=0&&f-_>=0)return Ap.subVectors(o,s),a=(h-u)/(h-u+(f-_)),e.copy(s).addScaledVector(Ap,a);const m=1/(p+g+d);return r=g*m,a=d*m,e.copy(i).addScaledVector(ir,r).addScaledVector(sr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},wc={h:0,s:0,l:0};function wu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Se{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ge.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ge.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ge.workingColorSpace){if(t=kd(t,1),e=Ln(e,0,1),i=Ln(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=wu(r,o,t+1/3),this.g=wu(r,o,t),this.b=wu(r,o,t-1/3)}return Ge.toWorkingColorSpace(this,s),this}setStyle(t,e=qi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qi){const i=ug[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}copyLinearToSRGB(t){return this.r=ou(t.r),this.g=ou(t.g),this.b=ou(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qi){return Ge.fromWorkingColorSpace(Hn.copy(this),t),Math.round(Ln(Hn.r*255,0,255))*65536+Math.round(Ln(Hn.g*255,0,255))*256+Math.round(Ln(Hn.b*255,0,255))}getHexString(t=qi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Hn.copy(this),e);const i=Hn.r,s=Hn.g,o=Hn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case i:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-i)/h+2;break;case o:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Hn.copy(this),e),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=qi){Ge.fromWorkingColorSpace(Hn.copy(this),t);const e=Hn.r,i=Hn.g,s=Hn.b;return t!==qi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ys),this.setHSL(Ys.h+t,Ys.s+e,Ys.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ys),t.getHSL(wc);const i=Ma(Ys.h,wc.h,e),s=Ma(Ys.s,wc.s,e),o=Ma(Ys.l,wc.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Se;Se.NAMES=ug;let I1=0;class Yr extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Sr,this.side=ao,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=rh,this.blendEquation=Ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==ao&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oh&&(i.blendSrc=this.blendSrc),this.blendDst!==rh&&(i.blendDst=this.blendDst),this.blendEquation!==Ro&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$o&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$o&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$o&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ps extends Yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=Xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mn=new et,Mc=new ie;class us{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=fp,this.updateRanges=[],this.gpuType=Ds,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Mc.fromBufferAttribute(this,e),Mc.applyMatrix3(t),this.setXY(e,Mc.x,Mc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix3(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=dr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array),s=ii(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array),s=ii(s,this.array),o=ii(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fp&&(t.usage=this.usage),t}}class hg extends us{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class dg extends us{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class cn extends us{constructor(t,e,i){super(new Float32Array(t),e,i)}}let L1=0;const Oi=new an,Mu=new Nn,or=new et,xi=new tc,oa=new tc,In=new et;class Bn extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(og(t)?dg:hg)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Le().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,e,i){return Oi.makeTranslation(t,e,i),this.applyMatrix4(Oi),this}scale(t,e,i){return Oi.makeScale(t,e,i),this.applyMatrix4(Oi),this}lookAt(t){return Mu.lookAt(t),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new cn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];xi.setFromBufferAttribute(o),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(In.addVectors(xi.min,oa.min),xi.expandByPoint(In),In.addVectors(xi.max,oa.max),xi.expandByPoint(In)):(xi.expandByPoint(oa.min),xi.expandByPoint(oa.max))}xi.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)In.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(In));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)In.fromBufferAttribute(a,l),c&&(or.fromBufferAttribute(t,l),In.add(or)),s=Math.max(s,i.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new us(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new et,c[L]=new et;const l=new et,u=new et,h=new et,d=new ie,f=new ie,_=new ie,g=new et,p=new et;function m(L,F,S){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(o,L),f.fromBufferAttribute(o,F),_.fromBufferAttribute(o,S),u.sub(l),h.sub(l),f.sub(d),_.sub(d);const A=1/(f.x*_.y-_.x*f.y);isFinite(A)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(A),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(A),a[L].add(g),a[F].add(g),a[S].add(g),c[L].add(p),c[F].add(p),c[S].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,F=M.length;L<F;++L){const S=M[L],A=S.start,U=S.count;for(let H=A,J=A+U;H<J;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const w=new et,x=new et,I=new et,C=new et;function E(L){I.fromBufferAttribute(s,L),C.copy(I);const F=a[L];w.copy(F),w.sub(I.multiplyScalar(I.dot(F))).normalize(),x.crossVectors(C,F);const A=x.dot(c[L])<0?-1:1;r.setXYZW(L,w.x,w.y,w.z,A)}for(let L=0,F=M.length;L<F;++L){const S=M[L],A=S.start,U=S.count;for(let H=A,J=A+U;H<J;H+=3)E(t.getX(H+0)),E(t.getX(H+1)),E(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new us(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new et,o=new et,r=new et,a=new et,c=new et,l=new et,u=new et,h=new et;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)In.fromBufferAttribute(t,e),In.normalize(),t.setXYZ(e,In.x,In.y,In.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,_=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*u;for(let m=0;m<u;m++)d[_++]=l[f++]}return new us(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Bn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new an,yo=new cg,Sc=new Ol,Rp=new et,bc=new et,Ec=new et,Tc=new et,Su=new et,Ac=new et,Cp=new et,Pc=new et;class y extends Nn{constructor(t=new Bn,e=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ac.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(Su.fromBufferAttribute(h,t),r?Ac.addScaledVector(Su,u):Ac.addScaledVector(Su.sub(e),u))}e.add(Ac)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(o),yo.copy(t.ray).recast(t.near),!(Sc.containsPoint(yo.origin)===!1&&(yo.intersectSphere(Sc,Rp)===null||yo.origin.distanceToSquared(Rp)>(t.far-t.near)**2))&&(Pp.copy(o).invert(),yo.copy(t.ray).applyMatrix4(Pp),!(i.boundingBox!==null&&yo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,yo)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=r[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,I=w;x<I;x+=3){const C=a.getX(x),E=a.getX(x+1),L=a.getX(x+2);s=Rc(this,m,t,i,l,u,h,C,E,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=a.getX(p),w=a.getX(p+1),x=a.getX(p+2);s=Rc(this,r,t,i,l,u,h,M,w,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=r[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,I=w;x<I;x+=3){const C=x,E=x+1,L=x+2;s=Rc(this,m,t,i,l,u,h,C,E,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=p,w=p+1,x=p+2;s=Rc(this,r,t,i,l,u,h,M,w,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function D1(n,t,e,i,s,o,r,a){let c;if(t.side===fi?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===ao,a),c===null)return null;Pc.copy(a),Pc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Pc);return l<e.near||l>e.far?null:{distance:l,point:Pc.clone(),object:n}}function Rc(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,bc),n.getVertexPosition(c,Ec),n.getVertexPosition(l,Tc);const u=D1(n,t,e,i,bc,Ec,Tc,Cp);if(u){const h=new et;$i.getBarycoord(Cp,bc,Ec,Tc,h),s&&(u.uv=$i.getInterpolatedAttribute(s,a,c,l,h,new ie)),o&&(u.uv1=$i.getInterpolatedAttribute(o,a,c,l,h,new ie)),r&&(u.normal=$i.getInterpolatedAttribute(r,a,c,l,h,new et),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new et,materialIndex:0};$i.getNormal(bc,Ec,Tc,d.normal),u.face=d,u.barycoord=h}return u}class pn extends Bn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,r,o,0),_("z","y","x",1,-1,i,e,-t,r,o,1),_("x","z","y",1,1,t,i,e,s,r,2),_("x","z","y",1,-1,t,i,-e,s,r,3),_("x","y","z",1,-1,t,e,i,s,o,4),_("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(h,2));function _(g,p,m,M,w,x,I,C,E,L,F){const S=x/E,A=I/L,U=x/2,H=I/2,J=C/2,it=E+1,k=L+1;let tt=0,W=0;const gt=new et;for(let vt=0;vt<k;vt++){const xt=vt*A-H;for(let Dt=0;Dt<it;Dt++){const kt=Dt*S-U;gt[g]=kt*M,gt[p]=xt*w,gt[m]=J,l.push(gt.x,gt.y,gt.z),gt[g]=0,gt[p]=0,gt[m]=C>0?1:-1,u.push(gt.x,gt.y,gt.z),h.push(Dt/E),h.push(1-vt/L),tt+=1}}for(let vt=0;vt<L;vt++)for(let xt=0;xt<E;xt++){const Dt=d+xt+it*vt,kt=d+xt+it*(vt+1),rt=d+(xt+1)+it*(vt+1),dt=d+(xt+1)+it*vt;c.push(Dt,kt,dt),c.push(kt,rt,dt),W+=6}a.addGroup(f,W,F),f+=W,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Br(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function si(n){const t={};for(let e=0;e<n.length;e++){const i=Br(n[e]);for(const s in i)t[s]=i[s]}return t}function U1(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function fg(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ge.workingColorSpace}const N1={clone:Br,merge:si};var O1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O1,this.fragmentShader=F1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=U1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class pg extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Us}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const js=new et,Ip=new ie,Lp=new ie;class $e extends pg{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(js.x,js.y).multiplyScalar(-t/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(js.x,js.y).multiplyScalar(-t/js.z)}getViewSize(t,e){return this.getViewBounds(t,Ip,Lp),e.subVectors(Lp,Ip)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,ar=1;class ec extends Nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(rr,ar,t,e);s.layers=this.layers,this.add(s);const o=new $e(rr,ar,t,e);o.layers=this.layers,this.add(o);const r=new $e(rr,ar,t,e);r.layers=this.layers,this.add(r);const a=new $e(rr,ar,t,e);a.layers=this.layers,this.add(a);const c=new $e(rr,ar,t,e);c.layers=this.layers,this.add(c);const l=new $e(rr,ar,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Us)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Hd extends Yn{constructor(t,e,i,s,o,r,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ur,super(t,e,i,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nc extends ko{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Hd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ji}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),o=new hn({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fi,blending:no});o.uniforms.tEquirect.value=e;const r=new y(s,o),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=ji),new ec(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const bu=new et,B1=new et,z1=new Le;class To{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=bu.subVectors(i,e).cross(B1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(bu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||z1.getNormalMatrix(t),s=this.coplanarPoint(bu).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xo=new Ol,Cc=new et;class Vd{constructor(t=new To,e=new To,i=new To,s=new To,o=new To,r=new To){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Us){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],_=s[9],g=s[10],p=s[11],m=s[12],M=s[13],w=s[14],x=s[15];if(i[0].setComponents(c-o,d-l,p-f,x-m).normalize(),i[1].setComponents(c+o,d+l,p+f,x+m).normalize(),i[2].setComponents(c+r,d+u,p+_,x+M).normalize(),i[3].setComponents(c-r,d-u,p-_,x-M).normalize(),i[4].setComponents(c-a,d-h,p-g,x-w).normalize(),e===Us)i[5].setComponents(c+a,d+h,p+g,x+w).normalize();else if(e===dl)i[5].setComponents(a,h,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xo)}intersectsSprite(t){return xo.center.set(0,0,0),xo.radius=.7071067811865476,xo.applyMatrix4(t.matrixWorld),this.intersectsSphere(xo)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Cc.x=s.normal.x>0?t.max.x:t.min.x,Cc.y=s.normal.y>0?t.max.y:t.min.y,Cc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mg(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function G1(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class ic extends Bn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*d-r;for(let w=0;w<l;w++){const x=w*h-o;_.push(x,-M,0),g.push(0,0,1),p.push(w/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){const w=M+l*m,x=M+l*(m+1),I=M+1+l*(m+1),C=M+1+l*m;f.push(w,x,C),f.push(x,I,C)}this.setIndex(f),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.width,t.height,t.widthSegments,t.heightSegments)}}var k1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H1=`#ifdef USE_ALPHAHASH
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
#endif`,V1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y1=`#ifdef USE_AOMAP
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
#endif`,j1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$1=`#ifdef USE_BATCHING
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
#endif`,K1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tM=`#ifdef USE_IRIDESCENCE
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
#endif`,eM=`#ifdef USE_BUMPMAP
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uM=`#define PI 3.141592653589793
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
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`
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
}`,yM=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LM=`uniform bool receiveShadow;
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
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BM=`PhysicalMaterial material;
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
#endif`,zM=`struct PhysicalMaterial {
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
}`,GM=`
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`#ifdef USE_MORPHTARGETS
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
#endif`,iS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lS=`#ifdef USE_NORMALMAP
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
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ES=`float getShadowMask() {
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
}`,TS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AS=`#ifdef USE_SKINNING
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
#endif`,PS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RS=`#ifdef USE_SKINNING
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
#endif`,CS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,US=`#ifdef USE_TRANSMISSION
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
#endif`,NS=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kS=`uniform sampler2D t2D;
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
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`#include <common>
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
}`,YS=`#if DEPTH_PACKING == 3200
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
}`,jS=`#define DISTANCE
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
}`,$S=`#define DISTANCE
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`uniform float scale;
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
}`,QS=`uniform vec3 diffuse;
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
}`,tb=`#include <common>
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
}`,eb=`uniform vec3 diffuse;
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define LAMBERT
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
}`,sb=`#define MATCAP
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
}`,ob=`#define MATCAP
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
}`,rb=`#define NORMAL
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
}`,ab=`#define NORMAL
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
}`,cb=`#define PHONG
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
}`,lb=`#define PHONG
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
}`,ub=`#define STANDARD
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
}`,hb=`#define STANDARD
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
}`,db=`#define TOON
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
}`,fb=`#define TOON
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
}`,pb=`uniform float size;
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#include <common>
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
}`,_b=`uniform vec3 color;
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
}`,vb=`uniform float rotation;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:k1,alphahash_pars_fragment:H1,alphamap_fragment:V1,alphamap_pars_fragment:W1,alphatest_fragment:X1,alphatest_pars_fragment:q1,aomap_fragment:Y1,aomap_pars_fragment:j1,batching_pars_vertex:$1,batching_vertex:K1,begin_vertex:Z1,beginnormal_vertex:J1,bsdfs:Q1,iridescence_fragment:tM,bumpmap_pars_fragment:eM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:sM,clipping_planes_vertex:oM,color_fragment:rM,color_pars_fragment:aM,color_pars_vertex:cM,color_vertex:lM,common:uM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:dM,displacementmap_pars_vertex:fM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:_M,colorspace_pars_fragment:vM,envmap_fragment:yM,envmap_common_pars_fragment:xM,envmap_pars_fragment:wM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:DM,envmap_vertex:SM,fog_vertex:bM,fog_pars_vertex:EM,fog_fragment:TM,fog_pars_fragment:AM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:RM,lights_lambert_fragment:CM,lights_lambert_pars_fragment:IM,lights_pars_begin:LM,lights_toon_fragment:UM,lights_toon_pars_fragment:NM,lights_phong_fragment:OM,lights_phong_pars_fragment:FM,lights_physical_fragment:BM,lights_physical_pars_fragment:zM,lights_fragment_begin:GM,lights_fragment_maps:kM,lights_fragment_end:HM,logdepthbuf_fragment:VM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:XM,logdepthbuf_vertex:qM,map_fragment:YM,map_pars_fragment:jM,map_particle_fragment:$M,map_particle_pars_fragment:KM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:JM,morphinstance_vertex:QM,morphcolor_vertex:tS,morphnormal_vertex:eS,morphtarget_pars_vertex:nS,morphtarget_vertex:iS,normal_fragment_begin:sS,normal_fragment_maps:oS,normal_pars_fragment:rS,normal_pars_vertex:aS,normal_vertex:cS,normalmap_pars_fragment:lS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:hS,clearcoat_pars_fragment:dS,iridescence_pars_fragment:fS,opaque_fragment:pS,packing:mS,premultiplied_alpha_fragment:gS,project_vertex:_S,dithering_fragment:vS,dithering_pars_fragment:yS,roughnessmap_fragment:xS,roughnessmap_pars_fragment:wS,shadowmap_pars_fragment:MS,shadowmap_pars_vertex:SS,shadowmap_vertex:bS,shadowmask_pars_fragment:ES,skinbase_vertex:TS,skinning_pars_vertex:AS,skinning_vertex:PS,skinnormal_vertex:RS,specularmap_fragment:CS,specularmap_pars_fragment:IS,tonemapping_fragment:LS,tonemapping_pars_fragment:DS,transmission_fragment:US,transmission_pars_fragment:NS,uv_pars_fragment:OS,uv_pars_vertex:FS,uv_vertex:BS,worldpos_vertex:zS,background_vert:GS,background_frag:kS,backgroundCube_vert:HS,backgroundCube_frag:VS,cube_vert:WS,cube_frag:XS,depth_vert:qS,depth_frag:YS,distanceRGBA_vert:jS,distanceRGBA_frag:$S,equirect_vert:KS,equirect_frag:ZS,linedashed_vert:JS,linedashed_frag:QS,meshbasic_vert:tb,meshbasic_frag:eb,meshlambert_vert:nb,meshlambert_frag:ib,meshmatcap_vert:sb,meshmatcap_frag:ob,meshnormal_vert:rb,meshnormal_frag:ab,meshphong_vert:cb,meshphong_frag:lb,meshphysical_vert:ub,meshphysical_frag:hb,meshtoon_vert:db,meshtoon_frag:fb,points_vert:pb,points_frag:mb,shadow_vert:gb,shadow_frag:_b,sprite_vert:vb,sprite_frag:yb},ne={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},rs={basic:{uniforms:si([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:si([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:si([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:si([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:si([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:si([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:si([ne.points,ne.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:si([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:si([ne.common,ne.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:si([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:si([ne.sprite,ne.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:si([ne.common,ne.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:si([ne.lights,ne.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};rs.physical={uniforms:si([rs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Ic={r:0,b:0,g:0},wo=new fs,xb=new an;function wb(n,t,e,i,s,o,r){const a=new Se(0);let c=o===!0?0:1,l,u,h=null,d=0,f=null;function _(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?e:t).get(w)),w}function g(M){let w=!1;const x=_(M);x===null?m(a,c):x&&x.isColor&&(m(x,1),w=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,w){const x=_(w);x&&(x.isCubeTexture||x.mapping===Ul)?(u===void 0&&(u=new y(new pn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Br(rs.backgroundCube.uniforms),vertexShader:rs.backgroundCube.vertexShader,fragmentShader:rs.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),wo.copy(w.backgroundRotation),wo.x*=-1,wo.y*=-1,wo.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wo.y*=-1,wo.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xb.makeRotationFromEuler(wo)),u.material.toneMapped=Ge.getTransfer(x.colorSpace)!==rn,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new y(new ic(2,2),new hn({name:"BackgroundMaterial",uniforms:Br(rs.background.uniforms),vertexShader:rs.background.vertexShader,fragmentShader:rs.background.fragmentShader,side:ao,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(x.colorSpace)!==rn,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(Ic,fg(n)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,w,r)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),c=w,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:g,addToRenderList:p}}function Mb(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(S,A,U,H,J){let it=!1;const k=h(H,U,A);o!==k&&(o=k,l(o.object)),it=f(S,H,U,J),it&&_(S,H,U,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(it||r)&&(r=!1,x(S,A,U,H),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,A,U){const H=U.wireframe===!0;let J=i[S.id];J===void 0&&(J={},i[S.id]=J);let it=J[A.id];it===void 0&&(it={},J[A.id]=it);let k=it[H];return k===void 0&&(k=d(c()),it[H]=k),k}function d(S){const A=[],U=[],H=[];for(let J=0;J<e;J++)A[J]=0,U[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:H,object:S,attributes:{},index:null}}function f(S,A,U,H){const J=o.attributes,it=A.attributes;let k=0;const tt=U.getAttributes();for(const W in tt)if(tt[W].location>=0){const vt=J[W];let xt=it[W];if(xt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor)),vt===void 0||vt.attribute!==xt||xt&&vt.data!==xt.data)return!0;k++}return o.attributesNum!==k||o.index!==H}function _(S,A,U,H){const J={},it=A.attributes;let k=0;const tt=U.getAttributes();for(const W in tt)if(tt[W].location>=0){let vt=it[W];vt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor));const xt={};xt.attribute=vt,vt&&vt.data&&(xt.data=vt.data),J[W]=xt,k++}o.attributes=J,o.attributesNum=k,o.index=H}function g(){const S=o.newAttributes;for(let A=0,U=S.length;A<U;A++)S[A]=0}function p(S){m(S,0)}function m(S,A){const U=o.newAttributes,H=o.enabledAttributes,J=o.attributeDivisors;U[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),J[S]!==A&&(n.vertexAttribDivisor(S,A),J[S]=A)}function M(){const S=o.newAttributes,A=o.enabledAttributes;for(let U=0,H=A.length;U<H;U++)A[U]!==S[U]&&(n.disableVertexAttribArray(U),A[U]=0)}function w(S,A,U,H,J,it,k){k===!0?n.vertexAttribIPointer(S,A,U,J,it):n.vertexAttribPointer(S,A,U,H,J,it)}function x(S,A,U,H){g();const J=H.attributes,it=U.getAttributes(),k=A.defaultAttributeValues;for(const tt in it){const W=it[tt];if(W.location>=0){let gt=J[tt];if(gt===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),gt!==void 0){const vt=gt.normalized,xt=gt.itemSize,Dt=t.get(gt);if(Dt===void 0)continue;const kt=Dt.buffer,rt=Dt.type,dt=Dt.bytesPerElement,bt=rt===n.INT||rt===n.UNSIGNED_INT||gt.gpuType===Ud;if(gt.isInterleavedBufferAttribute){const G=gt.data,ut=G.stride,at=gt.offset;if(G.isInstancedInterleavedBuffer){for(let ht=0;ht<W.locationSize;ht++)m(W.location+ht,G.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ht=0;ht<W.locationSize;ht++)p(W.location+ht);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let ht=0;ht<W.locationSize;ht++)w(W.location+ht,xt/W.locationSize,rt,vt,ut*dt,(at+xt/W.locationSize*ht)*dt,bt)}else{if(gt.isInstancedBufferAttribute){for(let G=0;G<W.locationSize;G++)m(W.location+G,gt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let G=0;G<W.locationSize;G++)p(W.location+G);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let G=0;G<W.locationSize;G++)w(W.location+G,xt/W.locationSize,rt,vt,xt*dt,xt/W.locationSize*G*dt,bt)}}else if(k!==void 0){const vt=k[tt];if(vt!==void 0)switch(vt.length){case 2:n.vertexAttrib2fv(W.location,vt);break;case 3:n.vertexAttrib3fv(W.location,vt);break;case 4:n.vertexAttrib4fv(W.location,vt);break;default:n.vertexAttrib1fv(W.location,vt)}}}}M()}function I(){L();for(const S in i){const A=i[S];for(const U in A){const H=A[U];for(const J in H)u(H[J].object),delete H[J];delete A[U]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const A=i[S.id];for(const U in A){const H=A[U];for(const J in H)u(H[J].object),delete H[J];delete A[U]}delete i[S.id]}function E(S){for(const A in i){const U=i[A];if(U[S.id]===void 0)continue;const H=U[S.id];for(const J in H)u(H[J].object),delete H[J];delete U[S.id]}}function L(){F(),r=!0,o!==s&&(o=s,l(o.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:F,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function Sb(n,t,e){let i;function s(l){i=l}function o(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function r(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];e.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)r(l[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<d.length;g++)e.update(_,i,d[g])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function bb(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==ci&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const L=E===Ja&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Fs&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ds&&!L)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:I,maxSamples:C}}function Eb(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new To,a=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!s||_===null||_.length===0||o&&!p)o?u(null):l();else{const M=o?0:i,w=M*4;let x=m.clippingState||null;c.value=x,x=u(_,d,w,f);for(let I=0;I!==w;++I)x[I]=e[I];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const m=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,x=f;w!==g;++w,x+=4)r.copy(h[w]).applyMatrix4(M,a),r.normal.toArray(p,x),p[x+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Tb(n){let t=new WeakMap;function e(r,a){return a===cl?r.mapping=Ur:a===ph&&(r.mapping=Nr),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===cl||a===ph)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new nc(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class gg extends pg{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const pr=4,Dp=[.125,.215,.35,.446,.526,.582],Co=20,Eu=new gg,Up=new Se;let Tu=null,Au=0,Pu=0,Ru=!1;const Ao=(1+Math.sqrt(5))/2,cr=1/Ao,Np=[new et(-Ao,cr,0),new et(Ao,cr,0),new et(-cr,0,Ao),new et(cr,0,Ao),new et(0,Ao,-cr),new et(0,Ao,cr),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)];class Op{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tu,Au,Pu),this._renderer.xr.enabled=Ru,t.scissorTest=!1,Lc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ur||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ji,minFilter:ji,generateMipmaps:!1,type:Ja,format:ci,colorSpace:fo,depthBuffer:!1},s=Fp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ab(o)),this._blurMaterial=Pb(o,t,e)}return s}_compileMaterial(t){const e=new y(this._lodPlanes[0],t);this._renderer.compile(e,Eu)}_sceneToCubeUV(t,e,i,s){const a=new $e(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Up),u.toneMapping=io,u.autoClear=!1;const f=new ps({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),_=new y(new pn,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(Up),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):M===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const w=this._cubeSize;Lc(s,M*w,m>2?w:0,w,w),u.setRenderTarget(s),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ur||t.mapping===Nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bp());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new y(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Lc(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Eu)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Np[(s-o-1)%Np.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new y(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Co-1),g=o/_,p=isFinite(o)?1+Math.floor(u*g):Co;p>Co&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Co}`);const m=[];let M=0;for(let E=0;E<Co;++E){const L=E/g,F=Math.exp(-L*L/2);m.push(F),E===0?M+=F:E<p&&(M+=2*F)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-i;const x=this._sizeLods[s],I=3*x*(s>w-pr?s-w+pr:0),C=4*(this._cubeSize-x);Lc(e,I,C,3*x,2*x),c.setRenderTarget(e),c.render(h,Eu)}}function Ab(n){const t=[],e=[],i=[];let s=n;const o=n-pr+1+Dp.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-pr?c=Dp[r-n+pr-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,p=2,m=1,M=new Float32Array(g*_*f),w=new Float32Array(p*_*f),x=new Float32Array(m*_*f);for(let C=0;C<f;C++){const E=C%3*2/3-1,L=C>2?0:-1,F=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];M.set(F,g*_*C),w.set(d,p*_*C);const S=[C,C,C,C,C,C];x.set(S,m*_*C)}const I=new Bn;I.setAttribute("position",new us(M,g)),I.setAttribute("uv",new us(w,p)),I.setAttribute("faceIndex",new us(x,m)),t.push(I),s>pr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Fp(n,t,e){const i=new ko(n,t,e);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lc(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Pb(n,t,e){const i=new Float32Array(Co),s=new et(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Co,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:no,depthTest:!1,depthWrite:!1})}function Bp(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:no,depthTest:!1,depthWrite:!1})}function zp(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:no,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function Rb(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===cl||c===ph,u=c===Ur||c===Nr;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Op(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Op(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Cb(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Zc("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ib(n,t,e,i){const s={},o=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let w=0,x=M.length;w<x;w+=3){const I=M[w+0],C=M[w+1],E=M[w+2];d.push(I,C,C,E,E,I)}}else if(_!==void 0){const M=_.array;g=_.version;for(let w=0,x=M.length/3-1;w<x;w+=3){const I=w+0,C=w+1,E=w+2;d.push(I,C,C,E,E,I)}}else return;const p=new(og(d)?dg:hg)(d,1);p.version=g;const m=o.get(h);m&&t.remove(m),o.set(h,p)}function u(h){const d=o.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Lb(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){n.drawElements(i,f,o,d*r),e.update(f,i,1)}function l(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,o,d*r,_),e.update(f,i,_))}function u(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,i,1)}function h(d,f,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/r,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,g,0,_);let m=0;for(let M=0;M<_;M++)m+=f[M];for(let M=0;M<g.length;M++)e.update(m,i,g[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Db(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ub(n,t,e){const i=new WeakMap,s=new je;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),p===!0&&(x=3);let I=a.attributes.position.count*x,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const E=new Float32Array(I*C*4*h),L=new ag(E,I,C,h);L.type=Ds,L.needsUpdate=!0;const F=x*4;for(let A=0;A<h;A++){const U=m[A],H=M[A],J=w[A],it=I*C*4*A;for(let k=0;k<U.count;k++){const tt=k*F;_===!0&&(s.fromBufferAttribute(U,k),E[it+tt+0]=s.x,E[it+tt+1]=s.y,E[it+tt+2]=s.z,E[it+tt+3]=0),g===!0&&(s.fromBufferAttribute(H,k),E[it+tt+4]=s.x,E[it+tt+5]=s.y,E[it+tt+6]=s.z,E[it+tt+7]=0),p===!0&&(s.fromBufferAttribute(J,k),E[it+tt+8]=s.x,E[it+tt+9]=s.y,E[it+tt+10]=s.z,E[it+tt+11]=J.itemSize===4?s.w:1)}}d={count:h,texture:L,size:new ie(I,C)},i.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function Nb(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class _g extends Yn{constructor(t,e,i,s,o,r,a,c,l,u=br){if(u!==br&&u!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===br&&(i=Go),i===void 0&&u===Fr&&(i=Or),super(null,s,o,r,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Bi,this.minFilter=c!==void 0?c:Bi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vg=new Yn,Gp=new _g(1,1),yg=new ag,xg=new S1,wg=new Hd,kp=[],Hp=[],Vp=new Float32Array(16),Wp=new Float32Array(9),Xp=new Float32Array(4);function jr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=kp[s];if(o===void 0&&(o=new Float32Array(s),kp[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Rn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Cn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fl(n,t){let e=Hp[t];e===void 0&&(e=new Int32Array(t),Hp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ob(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Fb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;n.uniform2fv(this.addr,t),Cn(e,t)}}function Bb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Rn(e,t))return;n.uniform3fv(this.addr,t),Cn(e,t)}}function zb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;n.uniform4fv(this.addr,t),Cn(e,t)}}function Gb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Rn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,i))return;Xp.set(i),n.uniformMatrix2fv(this.addr,!1,Xp),Cn(e,i)}}function kb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Rn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,i))return;Wp.set(i),n.uniformMatrix3fv(this.addr,!1,Wp),Cn(e,i)}}function Hb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Rn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,i))return;Vp.set(i),n.uniformMatrix4fv(this.addr,!1,Vp),Cn(e,i)}}function Vb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Wb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;n.uniform2iv(this.addr,t),Cn(e,t)}}function Xb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;n.uniform3iv(this.addr,t),Cn(e,t)}}function qb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;n.uniform4iv(this.addr,t),Cn(e,t)}}function Yb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;n.uniform2uiv(this.addr,t),Cn(e,t)}}function $b(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;n.uniform3uiv(this.addr,t),Cn(e,t)}}function Kb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;n.uniform4uiv(this.addr,t),Cn(e,t)}}function Zb(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Gp.compareFunction=sg,o=Gp):o=vg,e.setTexture2D(t||o,s)}function Jb(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||xg,s)}function Qb(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||wg,s)}function t2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||yg,s)}function e2(n){switch(n){case 5126:return Ob;case 35664:return Fb;case 35665:return Bb;case 35666:return zb;case 35674:return Gb;case 35675:return kb;case 35676:return Hb;case 5124:case 35670:return Vb;case 35667:case 35671:return Wb;case 35668:case 35672:return Xb;case 35669:case 35673:return qb;case 5125:return Yb;case 36294:return jb;case 36295:return $b;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return t2}}function n2(n,t){n.uniform1fv(this.addr,t)}function i2(n,t){const e=jr(t,this.size,2);n.uniform2fv(this.addr,e)}function s2(n,t){const e=jr(t,this.size,3);n.uniform3fv(this.addr,e)}function o2(n,t){const e=jr(t,this.size,4);n.uniform4fv(this.addr,e)}function r2(n,t){const e=jr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function a2(n,t){const e=jr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function c2(n,t){const e=jr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function l2(n,t){n.uniform1iv(this.addr,t)}function u2(n,t){n.uniform2iv(this.addr,t)}function h2(n,t){n.uniform3iv(this.addr,t)}function d2(n,t){n.uniform4iv(this.addr,t)}function f2(n,t){n.uniform1uiv(this.addr,t)}function p2(n,t){n.uniform2uiv(this.addr,t)}function m2(n,t){n.uniform3uiv(this.addr,t)}function g2(n,t){n.uniform4uiv(this.addr,t)}function _2(n,t,e){const i=this.cache,s=t.length,o=Fl(e,s);Rn(i,o)||(n.uniform1iv(this.addr,o),Cn(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||vg,o[r])}function v2(n,t,e){const i=this.cache,s=t.length,o=Fl(e,s);Rn(i,o)||(n.uniform1iv(this.addr,o),Cn(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||xg,o[r])}function y2(n,t,e){const i=this.cache,s=t.length,o=Fl(e,s);Rn(i,o)||(n.uniform1iv(this.addr,o),Cn(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||wg,o[r])}function x2(n,t,e){const i=this.cache,s=t.length,o=Fl(e,s);Rn(i,o)||(n.uniform1iv(this.addr,o),Cn(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||yg,o[r])}function w2(n){switch(n){case 5126:return n2;case 35664:return i2;case 35665:return s2;case 35666:return o2;case 35674:return r2;case 35675:return a2;case 35676:return c2;case 5124:case 35670:return l2;case 35667:case 35671:return u2;case 35668:case 35672:return h2;case 35669:case 35673:return d2;case 5125:return f2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return _2;case 35679:case 36299:case 36307:return v2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return x2}}class M2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=e2(e.type)}}class S2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=w2(e.type)}}class b2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Cu=/(\w+)(\])?(\[|\.)?/g;function qp(n,t){n.seq.push(t),n.map[t.id]=t}function E2(n,t,e){const i=n.name,s=i.length;for(Cu.lastIndex=0;;){const o=Cu.exec(i),r=Cu.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){qp(e,l===void 0?new M2(a,n,t):new S2(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new b2(a),qp(e,h)),e=h}}}class Jc{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);E2(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Yp(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const T2=37297;let A2=0;function P2(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function R2(n){const t=Ge.getPrimaries(Ge.workingColorSpace),e=Ge.getPrimaries(n);let i;switch(t===e?i="":t===hl&&e===ul?i="LinearDisplayP3ToLinearSRGB":t===ul&&e===hl&&(i="LinearSRGBToLinearDisplayP3"),n){case fo:case Nl:return[i,"LinearTransferOETF"];case qi:case Gd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function jp(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+P2(n.getShaderSource(t),r)}else return s}function C2(n,t){const e=R2(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function I2(n,t){let e;switch(t){case Uw:e="Linear";break;case Nw:e="Reinhard";break;case Ow:e="Cineon";break;case Fw:e="ACESFilmic";break;case zw:e="AgX";break;case Gw:e="Neutral";break;case Bw:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Dc=new et;function L2(){Ge.getLuminanceCoefficients(Dc);const n=Dc.x.toFixed(4),t=Dc.y.toFixed(4),e=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function U2(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function N2(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function la(n){return n!==""}function $p(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const O2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(n){return n.replace(O2,B2)}const F2=new Map;function B2(n,t){let e=Ie[t];if(e===void 0){const i=F2.get(t);if(i!==void 0)e=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hh(e)}const z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(n){return n.replace(z2,G2)}function G2(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Jp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function k2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===fw?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ps&&(t="SHADOWMAP_TYPE_VSM"),t}function H2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ur:case Nr:t="ENVMAP_TYPE_CUBE";break;case Ul:t="ENVMAP_TYPE_CUBE_UV";break}return t}function V2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Nr:t="ENVMAP_MODE_REFRACTION";break}return t}function W2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xm:t="ENVMAP_BLENDING_MULTIPLY";break;case Lw:t="ENVMAP_BLENDING_MIX";break;case Dw:t="ENVMAP_BLENDING_ADD";break}return t}function X2(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function q2(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=k2(e),l=H2(e),u=V2(e),h=W2(e),d=X2(e),f=D2(e),_=U2(o),g=s.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(la).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(la).join(`
`),m.length>0&&(m+=`
`)):(p=[Jp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),m=[Jp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==io?"#define TONE_MAPPING":"",e.toneMapping!==io?Ie.tonemapping_pars_fragment:"",e.toneMapping!==io?I2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,C2("linearToOutputTexel",e.outputColorSpace),L2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(la).join(`
`)),r=Hh(r),r=$p(r,e),r=Kp(r,e),a=Hh(a),a=$p(a,e),a=Kp(a,e),r=Zp(r),a=Zp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=M+p+r,x=M+m+a,I=Yp(s,s.VERTEX_SHADER,w),C=Yp(s,s.FRAGMENT_SHADER,x);s.attachShader(g,I),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(A){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(g).trim(),H=s.getShaderInfoLog(I).trim(),J=s.getShaderInfoLog(C).trim();let it=!0,k=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,I,C);else{const tt=jp(s,I,"vertex"),W=jp(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+tt+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(H===""||J==="")&&(k=!1);k&&(A.diagnostics={runnable:it,programLog:U,vertexShader:{log:H,prefix:p},fragmentShader:{log:J,prefix:m}})}s.deleteShader(I),s.deleteShader(C),L=new Jc(s,g),F=N2(s,g)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let F;this.getAttributes=function(){return F===void 0&&E(this),F};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,T2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A2++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=C,this}let Y2=0;class j2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new $2(t),e.set(t,i)),i}}class $2{constructor(t){this.id=Y2++,this.code=t,this.usedTimes=0}}function K2(n,t,e,i,s,o,r){const a=new lg,c=new j2,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,A,U,H,J){const it=H.fog,k=J.geometry,tt=S.isMeshStandardMaterial?H.environment:null,W=(S.isMeshStandardMaterial?e:t).get(S.envMap||tt),gt=W&&W.mapping===Ul?W.image.height:null,vt=g[S.type];S.precision!==null&&(_=s.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const xt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Dt=xt!==void 0?xt.length:0;let kt=0;k.morphAttributes.position!==void 0&&(kt=1),k.morphAttributes.normal!==void 0&&(kt=2),k.morphAttributes.color!==void 0&&(kt=3);let rt,dt,bt,G;if(vt){const ue=rs[vt];rt=ue.vertexShader,dt=ue.fragmentShader}else rt=S.vertexShader,dt=S.fragmentShader,c.update(S),bt=c.getVertexShaderID(S),G=c.getFragmentShaderID(S);const ut=n.getRenderTarget(),at=J.isInstancedMesh===!0,ht=J.isBatchedMesh===!0,St=!!S.map,st=!!S.matcap,v=!!W,R=!!S.aoMap,N=!!S.lightMap,z=!!S.bumpMap,B=!!S.normalMap,Z=!!S.displacementMap,Q=!!S.emissiveMap,T=!!S.metalnessMap,b=!!S.roughnessMap,D=S.anisotropy>0,K=S.clearcoat>0,q=S.dispersion>0,j=S.iridescence>0,ft=S.sheen>0,lt=S.transmission>0,_t=D&&!!S.anisotropyMap,At=K&&!!S.clearcoatMap,pt=K&&!!S.clearcoatNormalMap,yt=K&&!!S.clearcoatRoughnessMap,Nt=j&&!!S.iridescenceMap,Gt=j&&!!S.iridescenceThicknessMap,It=ft&&!!S.sheenColorMap,ee=ft&&!!S.sheenRoughnessMap,Ht=!!S.specularMap,te=!!S.specularColorMap,X=!!S.specularIntensityMap,Mt=lt&&!!S.transmissionMap,ot=lt&&!!S.thicknessMap,nt=!!S.gradientMap,Tt=!!S.alphaMap,Et=S.alphaTest>0,Yt=!!S.alphaHash,oe=!!S.extensions;let ce=io;S.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ce=n.toneMapping);const le={shaderID:vt,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:dt,defines:S.defines,customVertexShaderID:bt,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:ht,batchingColor:ht&&J._colorsTexture!==null,instancing:at,instancingColor:at&&J.instanceColor!==null,instancingMorph:at&&J.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:fo,alphaToCoverage:!!S.alphaToCoverage,map:St,matcap:st,envMap:v,envMapMode:v&&W.mapping,envMapCubeUVHeight:gt,aoMap:R,lightMap:N,bumpMap:z,normalMap:B,displacementMap:f&&Z,emissiveMap:Q,normalMapObjectSpace:B&&S.normalMapType===Ww,normalMapTangentSpace:B&&S.normalMapType===ig,metalnessMap:T,roughnessMap:b,anisotropy:D,anisotropyMap:_t,clearcoat:K,clearcoatMap:At,clearcoatNormalMap:pt,clearcoatRoughnessMap:yt,dispersion:q,iridescence:j,iridescenceMap:Nt,iridescenceThicknessMap:Gt,sheen:ft,sheenColorMap:It,sheenRoughnessMap:ee,specularMap:Ht,specularColorMap:te,specularIntensityMap:X,transmission:lt,transmissionMap:Mt,thicknessMap:ot,gradientMap:nt,opaque:S.transparent===!1&&S.blending===Sr&&S.alphaToCoverage===!1,alphaMap:Tt,alphaTest:Et,alphaHash:Yt,combine:S.combine,mapUv:St&&p(S.map.channel),aoMapUv:R&&p(S.aoMap.channel),lightMapUv:N&&p(S.lightMap.channel),bumpMapUv:z&&p(S.bumpMap.channel),normalMapUv:B&&p(S.normalMap.channel),displacementMapUv:Z&&p(S.displacementMap.channel),emissiveMapUv:Q&&p(S.emissiveMap.channel),metalnessMapUv:T&&p(S.metalnessMap.channel),roughnessMapUv:b&&p(S.roughnessMap.channel),anisotropyMapUv:_t&&p(S.anisotropyMap.channel),clearcoatMapUv:At&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:It&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(S.sheenRoughnessMap.channel),specularMapUv:Ht&&p(S.specularMap.channel),specularColorMapUv:te&&p(S.specularColorMap.channel),specularIntensityMapUv:X&&p(S.specularIntensityMap.channel),transmissionMapUv:Mt&&p(S.transmissionMap.channel),thicknessMapUv:ot&&p(S.thicknessMap.channel),alphaMapUv:Tt&&p(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(B||D),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!k.attributes.uv&&(St||Tt),fog:!!it,useFog:S.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:kt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:St&&S.map.isVideoTexture===!0&&Ge.getTransfer(S.map.colorSpace)===rn,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===De,flipSided:S.side===fi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:oe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&S.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function M(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)A.push(U),A.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(w(A,S),x(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function w(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function x(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),S.push(a.mask)}function I(S){const A=g[S.type];let U;if(A){const H=rs[A];U=N1.clone(H.uniforms)}else U=S.uniforms;return U}function C(S,A){let U;for(let H=0,J=u.length;H<J;H++){const it=u[H];if(it.cacheKey===A){U=it,++U.usedTimes;break}}return U===void 0&&(U=new q2(n,A,S,o),u.push(U)),U}function E(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function L(S){c.remove(S)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:I,acquireProgram:C,releaseProgram:E,releaseShaderCache:L,programs:u,dispose:F}}function Z2(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function J2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Qp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function t0(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(h,d,f,_,g,p){let m=n[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},n[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),t++,m}function a(h,d,f,_,g,p){const m=r(h,d,f,_,g,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(h,d,f,_,g,p){const m=r(h,d,f,_,g,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||J2),i.length>1&&i.sort(d||Qp),s.length>1&&s.sort(d||Qp)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function Q2(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new t0,n.set(i,[r])):s>=o.length?(r=new t0,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function tE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new Se};break;case"SpotLight":e={position:new et,direction:new et,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new Se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":e={color:new Se,position:new et,halfWidth:new et,halfHeight:new et};break}return n[t.id]=e,e}}}function eE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let nE=0;function iE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function sE(n){const t=new tE,e=eE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new et);const s=new et,o=new an,r=new an;function a(l){let u=0,h=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,M=0,w=0,x=0,I=0,C=0,E=0;l.sort(iE);for(let F=0,S=l.length;F<S;F++){const A=l[F],U=A.color,H=A.intensity,J=A.distance,it=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=U.r*H,h+=U.g*H,d+=U.b*H;else if(A.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(A.sh.coefficients[k],H);E++}else if(A.isDirectionalLight){const k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const tt=A.shadow,W=e.get(A);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=it,i.directionalShadowMatrix[f]=A.shadow.matrix,M++}i.directional[f]=k,f++}else if(A.isSpotLight){const k=t.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(U).multiplyScalar(H),k.distance=J,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,i.spot[g]=k;const tt=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,tt.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[g]=tt.matrix,A.castShadow){const W=e.get(A);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=it,x++}g++}else if(A.isRectAreaLight){const k=t.get(A);k.color.copy(U).multiplyScalar(H),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=k,p++}else if(A.isPointLight){const k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){const tt=A.shadow,W=e.get(A);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=it,i.pointShadowMatrix[_]=A.shadow.matrix,w++}i.point[_]=k,_++}else if(A.isHemisphereLight){const k=t.get(A);k.skyColor.copy(A.color).multiplyScalar(H),k.groundColor.copy(A.groundColor).multiplyScalar(H),i.hemi[m]=k,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==f||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==M||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==I||L.numLightProbes!==E)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=x+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=E,L.directionalLength=f,L.pointLength=_,L.spotLength=g,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=M,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=I,L.numLightProbes=E,i.version=nE++)}function c(l,u){let h=0,d=0,f=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const w=l[m];if(w.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),h++}else if(w.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(w.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),r.identity(),o.copy(w.matrixWorld),o.premultiply(p),r.extractRotation(o),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),_++}else if(w.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:i}}function e0(n){const t=new sE(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function o(u){e.push(u)}function r(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function oE(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new e0(n),t.set(s,[a])):o>=r.length?(a=new e0(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class rE extends Yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class aE extends Yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lE=`uniform sampler2D shadow_pass;
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
}`;function uE(n,t,e){let i=new Vd;const s=new ie,o=new ie,r=new je,a=new rE({depthPacking:Vw}),c=new aE,l={},u=e.maxTextureSize,h={[ao]:fi,[fi]:ao,[De]:De},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:cE,fragmentShader:lE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Bn;_.setAttribute("position",new us(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new y(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wm;let m=this.type;this.render=function(C,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const F=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),U=n.state;U.setBlending(no),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=m!==Ps&&this.type===Ps,J=m===Ps&&this.type!==Ps;for(let it=0,k=C.length;it<k;it++){const tt=C[it],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const gt=W.getFrameExtents();if(s.multiply(gt),o.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/gt.x),s.x=o.x*gt.x,W.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/gt.y),s.y=o.y*gt.y,W.mapSize.y=o.y)),W.map===null||H===!0||J===!0){const xt=this.type!==Ps?{minFilter:Bi,magFilter:Bi}:{};W.map!==null&&W.map.dispose(),W.map=new ko(s.x,s.y,xt),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const vt=W.getViewportCount();for(let xt=0;xt<vt;xt++){const Dt=W.getViewport(xt);r.set(o.x*Dt.x,o.y*Dt.y,o.x*Dt.z,o.y*Dt.w),U.viewport(r),W.updateMatrices(tt,xt),i=W.getFrustum(),x(E,L,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===Ps&&M(W,L),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(F,S,A)};function M(C,E){const L=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ko(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(E,null,L,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(E,null,L,f,g,null)}function w(C,E,L,F){let S=null;const A=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)S=A;else if(S=L.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=S.uuid,H=E.uuid;let J=l[U];J===void 0&&(J={},l[U]=J);let it=J[H];it===void 0&&(it=S.clone(),J[H]=it,E.addEventListener("dispose",I)),S=it}if(S.visible=E.visible,S.wireframe=E.wireframe,F===Ps?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=n.properties.get(S);U.light=L}return S}function x(C,E,L,F,S){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Ps)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const H=t.update(C),J=C.material;if(Array.isArray(J)){const it=H.groups;for(let k=0,tt=it.length;k<tt;k++){const W=it[k],gt=J[W.materialIndex];if(gt&&gt.visible){const vt=w(C,gt,F,S);C.onBeforeShadow(n,C,E,L,H,vt,W),n.renderBufferDirect(L,null,H,vt,C,W),C.onAfterShadow(n,C,E,L,H,vt,W)}}}else if(J.visible){const it=w(C,J,F,S);C.onBeforeShadow(n,C,E,L,H,it,null),n.renderBufferDirect(L,null,H,it,C,null),C.onAfterShadow(n,C,E,L,H,it,null)}}const U=C.children;for(let H=0,J=U.length;H<J;H++)x(U[H],E,L,F,S)}function I(C){C.target.removeEventListener("dispose",I);for(const L in l){const F=l[L],S=C.target.uuid;S in F&&(F[S].dispose(),delete F[S])}}}const hE={[ah]:ch,[lh]:dh,[uh]:fh,[Dr]:hh,[ch]:ah,[dh]:lh,[fh]:uh,[hh]:Dr};function dE(n){function t(){let X=!1;const Mt=new je;let ot=null;const nt=new je(0,0,0,0);return{setMask:function(Tt){ot!==Tt&&!X&&(n.colorMask(Tt,Tt,Tt,Tt),ot=Tt)},setLocked:function(Tt){X=Tt},setClear:function(Tt,Et,Yt,oe,ce){ce===!0&&(Tt*=oe,Et*=oe,Yt*=oe),Mt.set(Tt,Et,Yt,oe),nt.equals(Mt)===!1&&(n.clearColor(Tt,Et,Yt,oe),nt.copy(Mt))},reset:function(){X=!1,ot=null,nt.set(-1,0,0,0)}}}function e(){let X=!1,Mt=!1,ot=null,nt=null,Tt=null;return{setReversed:function(Et){Mt=Et},setTest:function(Et){Et?bt(n.DEPTH_TEST):G(n.DEPTH_TEST)},setMask:function(Et){ot!==Et&&!X&&(n.depthMask(Et),ot=Et)},setFunc:function(Et){if(Mt&&(Et=hE[Et]),nt!==Et){switch(Et){case ah:n.depthFunc(n.NEVER);break;case ch:n.depthFunc(n.ALWAYS);break;case lh:n.depthFunc(n.LESS);break;case Dr:n.depthFunc(n.LEQUAL);break;case uh:n.depthFunc(n.EQUAL);break;case hh:n.depthFunc(n.GEQUAL);break;case dh:n.depthFunc(n.GREATER);break;case fh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=Et}},setLocked:function(Et){X=Et},setClear:function(Et){Tt!==Et&&(n.clearDepth(Et),Tt=Et)},reset:function(){X=!1,ot=null,nt=null,Tt=null}}}function i(){let X=!1,Mt=null,ot=null,nt=null,Tt=null,Et=null,Yt=null,oe=null,ce=null;return{setTest:function(le){X||(le?bt(n.STENCIL_TEST):G(n.STENCIL_TEST))},setMask:function(le){Mt!==le&&!X&&(n.stencilMask(le),Mt=le)},setFunc:function(le,ue,ve){(ot!==le||nt!==ue||Tt!==ve)&&(n.stencilFunc(le,ue,ve),ot=le,nt=ue,Tt=ve)},setOp:function(le,ue,ve){(Et!==le||Yt!==ue||oe!==ve)&&(n.stencilOp(le,ue,ve),Et=le,Yt=ue,oe=ve)},setLocked:function(le){X=le},setClear:function(le){ce!==le&&(n.clearStencil(le),ce=le)},reset:function(){X=!1,Mt=null,ot=null,nt=null,Tt=null,Et=null,Yt=null,oe=null,ce=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,M=null,w=null,x=null,I=null,C=new Se(0,0,0),E=0,L=!1,F=null,S=null,A=null,U=null,H=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,k=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(tt)[1]),it=k>=1):tt.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),it=k>=2);let W=null,gt={};const vt=n.getParameter(n.SCISSOR_BOX),xt=n.getParameter(n.VIEWPORT),Dt=new je().fromArray(vt),kt=new je().fromArray(xt);function rt(X,Mt,ot,nt){const Tt=new Uint8Array(4),Et=n.createTexture();n.bindTexture(X,Et),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<ot;Yt++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(Mt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return Et}const dt={};dt[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),bt(n.DEPTH_TEST),o.setFunc(Dr),N(!1),z(cp),bt(n.CULL_FACE),v(no);function bt(X){l[X]!==!0&&(n.enable(X),l[X]=!0)}function G(X){l[X]!==!1&&(n.disable(X),l[X]=!1)}function ut(X,Mt){return u[X]!==Mt?(n.bindFramebuffer(X,Mt),u[X]=Mt,X===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Mt),X===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function at(X,Mt){let ot=d,nt=!1;if(X){ot=h.get(Mt),ot===void 0&&(ot=[],h.set(Mt,ot));const Tt=X.textures;if(ot.length!==Tt.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,Yt=Tt.length;Et<Yt;Et++)ot[Et]=n.COLOR_ATTACHMENT0+Et;ot.length=Tt.length,nt=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,nt=!0);nt&&n.drawBuffers(ot)}function ht(X){return f!==X?(n.useProgram(X),f=X,!0):!1}const St={[Ro]:n.FUNC_ADD,[mw]:n.FUNC_SUBTRACT,[gw]:n.FUNC_REVERSE_SUBTRACT};St[_w]=n.MIN,St[vw]=n.MAX;const st={[yw]:n.ZERO,[xw]:n.ONE,[ww]:n.SRC_COLOR,[oh]:n.SRC_ALPHA,[Aw]:n.SRC_ALPHA_SATURATE,[Ew]:n.DST_COLOR,[Sw]:n.DST_ALPHA,[Mw]:n.ONE_MINUS_SRC_COLOR,[rh]:n.ONE_MINUS_SRC_ALPHA,[Tw]:n.ONE_MINUS_DST_COLOR,[bw]:n.ONE_MINUS_DST_ALPHA,[Pw]:n.CONSTANT_COLOR,[Rw]:n.ONE_MINUS_CONSTANT_COLOR,[Cw]:n.CONSTANT_ALPHA,[Iw]:n.ONE_MINUS_CONSTANT_ALPHA};function v(X,Mt,ot,nt,Tt,Et,Yt,oe,ce,le){if(X===no){_===!0&&(G(n.BLEND),_=!1);return}if(_===!1&&(bt(n.BLEND),_=!0),X!==pw){if(X!==g||le!==L){if((p!==Ro||w!==Ro)&&(n.blendEquation(n.FUNC_ADD),p=Ro,w=Ro),le)switch(X){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lp:n.blendFunc(n.ONE,n.ONE);break;case up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}m=null,M=null,x=null,I=null,C.set(0,0,0),E=0,g=X,L=le}return}Tt=Tt||Mt,Et=Et||ot,Yt=Yt||nt,(Mt!==p||Tt!==w)&&(n.blendEquationSeparate(St[Mt],St[Tt]),p=Mt,w=Tt),(ot!==m||nt!==M||Et!==x||Yt!==I)&&(n.blendFuncSeparate(st[ot],st[nt],st[Et],st[Yt]),m=ot,M=nt,x=Et,I=Yt),(oe.equals(C)===!1||ce!==E)&&(n.blendColor(oe.r,oe.g,oe.b,ce),C.copy(oe),E=ce),g=X,L=!1}function R(X,Mt){X.side===De?G(n.CULL_FACE):bt(n.CULL_FACE);let ot=X.side===fi;Mt&&(ot=!ot),N(ot),X.blending===Sr&&X.transparent===!1?v(no):v(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);const nt=X.stencilWrite;r.setTest(nt),nt&&(r.setMask(X.stencilWriteMask),r.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),r.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Z(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?bt(n.SAMPLE_ALPHA_TO_COVERAGE):G(n.SAMPLE_ALPHA_TO_COVERAGE)}function N(X){F!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),F=X)}function z(X){X!==hw?(bt(n.CULL_FACE),X!==S&&(X===cp?n.cullFace(n.BACK):X===dw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):G(n.CULL_FACE),S=X}function B(X){X!==A&&(it&&n.lineWidth(X),A=X)}function Z(X,Mt,ot){X?(bt(n.POLYGON_OFFSET_FILL),(U!==Mt||H!==ot)&&(n.polygonOffset(Mt,ot),U=Mt,H=ot)):G(n.POLYGON_OFFSET_FILL)}function Q(X){X?bt(n.SCISSOR_TEST):G(n.SCISSOR_TEST)}function T(X){X===void 0&&(X=n.TEXTURE0+J-1),W!==X&&(n.activeTexture(X),W=X)}function b(X,Mt,ot){ot===void 0&&(W===null?ot=n.TEXTURE0+J-1:ot=W);let nt=gt[ot];nt===void 0&&(nt={type:void 0,texture:void 0},gt[ot]=nt),(nt.type!==X||nt.texture!==Mt)&&(W!==ot&&(n.activeTexture(ot),W=ot),n.bindTexture(X,Mt||dt[X]),nt.type=X,nt.texture=Mt)}function D(){const X=gt[W];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(X){Dt.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Dt.copy(X))}function It(X){kt.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),kt.copy(X))}function ee(X,Mt){let ot=c.get(Mt);ot===void 0&&(ot=new WeakMap,c.set(Mt,ot));let nt=ot.get(X);nt===void 0&&(nt=n.getUniformBlockIndex(Mt,X.name),ot.set(X,nt))}function Ht(X,Mt){const nt=c.get(Mt).get(X);a.get(Mt)!==nt&&(n.uniformBlockBinding(Mt,nt,X.__bindingPointIndex),a.set(Mt,nt))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},W=null,gt={},u={},h=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,M=null,w=null,x=null,I=null,C=new Se(0,0,0),E=0,L=!1,F=null,S=null,A=null,U=null,H=null,Dt.set(0,0,n.canvas.width,n.canvas.height),kt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:bt,disable:G,bindFramebuffer:ut,drawBuffers:at,useProgram:ht,setBlending:v,setMaterial:R,setFlipSided:N,setCullFace:z,setLineWidth:B,setPolygonOffset:Z,setScissorTest:Q,activeTexture:T,bindTexture:b,unbindTexture:D,compressedTexImage2D:K,compressedTexImage3D:q,texImage2D:yt,texImage3D:Nt,updateUBOMapping:ee,uniformBlockBinding:Ht,texStorage2D:At,texStorage3D:pt,texSubImage2D:j,texSubImage3D:ft,compressedTexSubImage2D:lt,compressedTexSubImage3D:_t,scissor:Gt,viewport:It,reset:te}}function n0(n,t,e,i){const s=fE(i);switch(e){case Km:return n*t;case Jm:return n*t;case Qm:return n*t*2;case tg:return n*t/s.components*s.byteLength;case Fd:return n*t/s.components*s.byteLength;case eg:return n*t*2/s.components*s.byteLength;case Bd:return n*t*2/s.components*s.byteLength;case Zm:return n*t*3/s.components*s.byteLength;case ci:return n*t*4/s.components*s.byteLength;case zd:return n*t*4/s.components*s.byteLength;case qc:case Yc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jc:case $c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _h:case yh:return Math.max(n,16)*Math.max(t,8)/4;case gh:case vh:return Math.max(n,8)*Math.max(t,8)/2;case xh:case wh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Mh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Th:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ch:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ih:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Dh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Uh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Nh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Kc:case Fh:case Bh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ng:case zh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Gh:case kh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fE(n){switch(n){case Fs:case Ym:return{byteLength:1,components:1};case Oa:case jm:case Ja:return{byteLength:2,components:1};case Nd:case Od:return{byteLength:2,components:4};case Go:case Ud:case Ds:return{byteLength:4,components:1};case $m:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function pE(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,b){return f?new OffscreenCanvas(T,b):Ba("canvas")}function g(T,b,D){let K=1;const q=Q(T);if((q.width>D||q.height>D)&&(K=D/Math.max(q.width,q.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(K*q.width),ft=Math.floor(K*q.height);h===void 0&&(h=_(j,ft));const lt=b?_(j,ft):h;return lt.width=j,lt.height=ft,lt.getContext("2d").drawImage(T,0,0,j,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+j+"x"+ft+")."),lt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Bi&&T.minFilter!==ji}function m(T){n.generateMipmap(T)}function M(T,b,D,K,q=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=b;if(b===n.RED&&(D===n.FLOAT&&(j=n.R32F),D===n.HALF_FLOAT&&(j=n.R16F),D===n.UNSIGNED_BYTE&&(j=n.R8)),b===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.R8UI),D===n.UNSIGNED_SHORT&&(j=n.R16UI),D===n.UNSIGNED_INT&&(j=n.R32UI),D===n.BYTE&&(j=n.R8I),D===n.SHORT&&(j=n.R16I),D===n.INT&&(j=n.R32I)),b===n.RG&&(D===n.FLOAT&&(j=n.RG32F),D===n.HALF_FLOAT&&(j=n.RG16F),D===n.UNSIGNED_BYTE&&(j=n.RG8)),b===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RG8UI),D===n.UNSIGNED_SHORT&&(j=n.RG16UI),D===n.UNSIGNED_INT&&(j=n.RG32UI),D===n.BYTE&&(j=n.RG8I),D===n.SHORT&&(j=n.RG16I),D===n.INT&&(j=n.RG32I)),b===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RGB8UI),D===n.UNSIGNED_SHORT&&(j=n.RGB16UI),D===n.UNSIGNED_INT&&(j=n.RGB32UI),D===n.BYTE&&(j=n.RGB8I),D===n.SHORT&&(j=n.RGB16I),D===n.INT&&(j=n.RGB32I)),b===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),D===n.UNSIGNED_INT&&(j=n.RGBA32UI),D===n.BYTE&&(j=n.RGBA8I),D===n.SHORT&&(j=n.RGBA16I),D===n.INT&&(j=n.RGBA32I)),b===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),b===n.RGBA){const ft=q?ll:Ge.getTransfer(K);D===n.FLOAT&&(j=n.RGBA32F),D===n.HALF_FLOAT&&(j=n.RGBA16F),D===n.UNSIGNED_BYTE&&(j=ft===rn?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function w(T,b){let D;return T?b===null||b===Go||b===Or?D=n.DEPTH24_STENCIL8:b===Ds?D=n.DEPTH32F_STENCIL8:b===Oa&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Go||b===Or?D=n.DEPTH_COMPONENT24:b===Ds?D=n.DEPTH_COMPONENT32F:b===Oa&&(D=n.DEPTH_COMPONENT16),D}function x(T,b){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bi&&T.minFilter!==ji?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function I(T){const b=T.target;b.removeEventListener("dispose",I),E(b),b.isVideoTexture&&u.delete(b)}function C(T){const b=T.target;b.removeEventListener("dispose",C),F(b)}function E(T){const b=i.get(T);if(b.__webglInit===void 0)return;const D=T.source,K=d.get(D);if(K){const q=K[b.__cacheKey];q.usedTimes--,q.usedTimes===0&&L(T),Object.keys(K).length===0&&d.delete(D)}i.remove(T)}function L(T){const b=i.get(T);n.deleteTexture(b.__webglTexture);const D=T.source,K=d.get(D);delete K[b.__cacheKey],r.memory.textures--}function F(T){const b=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let q=0;q<b.__webglFramebuffer[K].length;q++)n.deleteFramebuffer(b.__webglFramebuffer[K][q]);else n.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)n.deleteFramebuffer(b.__webglFramebuffer[K]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const D=T.textures;for(let K=0,q=D.length;K<q;K++){const j=i.get(D[K]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),r.memory.textures--),i.remove(D[K])}i.remove(T)}let S=0;function A(){S=0}function U(){const T=S;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),S+=1,T}function H(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function J(T,b){const D=i.get(T);if(T.isVideoTexture&&B(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{kt(D,T,b);return}}e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+b)}function it(T,b){const D=i.get(T);if(T.version>0&&D.__version!==T.version){kt(D,T,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+b)}function k(T,b){const D=i.get(T);if(T.version>0&&D.__version!==T.version){kt(D,T,b);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+b)}function tt(T,b){const D=i.get(T);if(T.version>0&&D.__version!==T.version){rt(D,T,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+b)}const W={[tn]:n.REPEAT,[Io]:n.CLAMP_TO_EDGE,[mh]:n.MIRRORED_REPEAT},gt={[Bi]:n.NEAREST,[kw]:n.NEAREST_MIPMAP_NEAREST,[fc]:n.NEAREST_MIPMAP_LINEAR,[ji]:n.LINEAR,[iu]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},vt={[Xw]:n.NEVER,[Zw]:n.ALWAYS,[qw]:n.LESS,[sg]:n.LEQUAL,[Yw]:n.EQUAL,[Kw]:n.GEQUAL,[jw]:n.GREATER,[$w]:n.NOTEQUAL};function xt(T,b){if(b.type===Ds&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ji||b.magFilter===iu||b.magFilter===fc||b.magFilter===Ki||b.minFilter===ji||b.minFilter===iu||b.minFilter===fc||b.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,W[b.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,W[b.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,W[b.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,gt[b.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,gt[b.minFilter]),b.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,vt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Bi||b.minFilter!==fc&&b.minFilter!==Ki||b.type===Ds&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Dt(T,b){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",I));const K=b.source;let q=d.get(K);q===void 0&&(q={},d.set(K,q));const j=H(b);if(j!==T.__cacheKey){q[j]===void 0&&(q[j]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,D=!0),q[j].usedTimes++;const ft=q[T.__cacheKey];ft!==void 0&&(q[T.__cacheKey].usedTimes--,ft.usedTimes===0&&L(b)),T.__cacheKey=j,T.__webglTexture=q[j].texture}return D}function kt(T,b,D){let K=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=n.TEXTURE_3D);const q=Dt(T,b),j=b.source;e.bindTexture(K,T.__webglTexture,n.TEXTURE0+D);const ft=i.get(j);if(j.version!==ft.__version||q===!0){e.activeTexture(n.TEXTURE0+D);const lt=Ge.getPrimaries(Ge.workingColorSpace),_t=b.colorSpace===Js?null:Ge.getPrimaries(b.colorSpace),At=b.colorSpace===Js||lt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let pt=g(b.image,!1,s.maxTextureSize);pt=Z(b,pt);const yt=o.convert(b.format,b.colorSpace),Nt=o.convert(b.type);let Gt=M(b.internalFormat,yt,Nt,b.colorSpace,b.isVideoTexture);xt(K,b);let It;const ee=b.mipmaps,Ht=b.isVideoTexture!==!0,te=ft.__version===void 0||q===!0,X=j.dataReady,Mt=x(b,pt);if(b.isDepthTexture)Gt=w(b.format===Fr,b.type),te&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,Gt,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Gt,pt.width,pt.height,0,yt,Nt,null));else if(b.isDataTexture)if(ee.length>0){Ht&&te&&e.texStorage2D(n.TEXTURE_2D,Mt,Gt,ee[0].width,ee[0].height);for(let ot=0,nt=ee.length;ot<nt;ot++)It=ee[ot],Ht?X&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,It.width,It.height,yt,Nt,It.data):e.texImage2D(n.TEXTURE_2D,ot,Gt,It.width,It.height,0,yt,Nt,It.data);b.generateMipmaps=!1}else Ht?(te&&e.texStorage2D(n.TEXTURE_2D,Mt,Gt,pt.width,pt.height),X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt.width,pt.height,yt,Nt,pt.data)):e.texImage2D(n.TEXTURE_2D,0,Gt,pt.width,pt.height,0,yt,Nt,pt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ht&&te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Gt,ee[0].width,ee[0].height,pt.depth);for(let ot=0,nt=ee.length;ot<nt;ot++)if(It=ee[ot],b.format!==ci)if(yt!==null)if(Ht){if(X)if(b.layerUpdates.size>0){const Tt=n0(It.width,It.height,b.format,b.type);for(const Et of b.layerUpdates){const Yt=It.data.subarray(Et*Tt/It.data.BYTES_PER_ELEMENT,(Et+1)*Tt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,Et,It.width,It.height,1,yt,Yt,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,It.width,It.height,pt.depth,yt,It.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ot,Gt,It.width,It.height,pt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?X&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,It.width,It.height,pt.depth,yt,Nt,It.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ot,Gt,It.width,It.height,pt.depth,0,yt,Nt,It.data)}else{Ht&&te&&e.texStorage2D(n.TEXTURE_2D,Mt,Gt,ee[0].width,ee[0].height);for(let ot=0,nt=ee.length;ot<nt;ot++)It=ee[ot],b.format!==ci?yt!==null?Ht?X&&e.compressedTexSubImage2D(n.TEXTURE_2D,ot,0,0,It.width,It.height,yt,It.data):e.compressedTexImage2D(n.TEXTURE_2D,ot,Gt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?X&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,It.width,It.height,yt,Nt,It.data):e.texImage2D(n.TEXTURE_2D,ot,Gt,It.width,It.height,0,yt,Nt,It.data)}else if(b.isDataArrayTexture)if(Ht){if(te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Gt,pt.width,pt.height,pt.depth),X)if(b.layerUpdates.size>0){const ot=n0(pt.width,pt.height,b.format,b.type);for(const nt of b.layerUpdates){const Tt=pt.data.subarray(nt*ot/pt.data.BYTES_PER_ELEMENT,(nt+1)*ot/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,pt.width,pt.height,1,yt,Nt,Tt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,yt,Nt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,pt.width,pt.height,pt.depth,0,yt,Nt,pt.data);else if(b.isData3DTexture)Ht?(te&&e.texStorage3D(n.TEXTURE_3D,Mt,Gt,pt.width,pt.height,pt.depth),X&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,yt,Nt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,pt.width,pt.height,pt.depth,0,yt,Nt,pt.data);else if(b.isFramebufferTexture){if(te)if(Ht)e.texStorage2D(n.TEXTURE_2D,Mt,Gt,pt.width,pt.height);else{let ot=pt.width,nt=pt.height;for(let Tt=0;Tt<Mt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,Gt,ot,nt,0,yt,Nt,null),ot>>=1,nt>>=1}}else if(ee.length>0){if(Ht&&te){const ot=Q(ee[0]);e.texStorage2D(n.TEXTURE_2D,Mt,Gt,ot.width,ot.height)}for(let ot=0,nt=ee.length;ot<nt;ot++)It=ee[ot],Ht?X&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,yt,Nt,It):e.texImage2D(n.TEXTURE_2D,ot,Gt,yt,Nt,It);b.generateMipmaps=!1}else if(Ht){if(te){const ot=Q(pt);e.texStorage2D(n.TEXTURE_2D,Mt,Gt,ot.width,ot.height)}X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Nt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Gt,yt,Nt,pt);p(b)&&m(K),ft.__version=j.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function rt(T,b,D){if(b.image.length!==6)return;const K=Dt(T,b),q=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+D);const j=i.get(q);if(q.version!==j.__version||K===!0){e.activeTexture(n.TEXTURE0+D);const ft=Ge.getPrimaries(Ge.workingColorSpace),lt=b.colorSpace===Js?null:Ge.getPrimaries(b.colorSpace),_t=b.colorSpace===Js||ft===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const At=b.isCompressedTexture||b.image[0].isCompressedTexture,pt=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let nt=0;nt<6;nt++)!At&&!pt?yt[nt]=g(b.image[nt],!0,s.maxCubemapSize):yt[nt]=pt?b.image[nt].image:b.image[nt],yt[nt]=Z(b,yt[nt]);const Nt=yt[0],Gt=o.convert(b.format,b.colorSpace),It=o.convert(b.type),ee=M(b.internalFormat,Gt,It,b.colorSpace),Ht=b.isVideoTexture!==!0,te=j.__version===void 0||K===!0,X=q.dataReady;let Mt=x(b,Nt);xt(n.TEXTURE_CUBE_MAP,b);let ot;if(At){Ht&&te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,ee,Nt.width,Nt.height);for(let nt=0;nt<6;nt++){ot=yt[nt].mipmaps;for(let Tt=0;Tt<ot.length;Tt++){const Et=ot[Tt];b.format!==ci?Gt!==null?Ht?X&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,Et.width,Et.height,Gt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,ee,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,Et.width,Et.height,Gt,It,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,ee,Et.width,Et.height,0,Gt,It,Et.data)}}}else{if(ot=b.mipmaps,Ht&&te){ot.length>0&&Mt++;const nt=Q(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,ee,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(pt){Ht?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,yt[nt].width,yt[nt].height,Gt,It,yt[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ee,yt[nt].width,yt[nt].height,0,Gt,It,yt[nt].data);for(let Tt=0;Tt<ot.length;Tt++){const Yt=ot[Tt].image[nt].image;Ht?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Yt.width,Yt.height,Gt,It,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,ee,Yt.width,Yt.height,0,Gt,It,Yt.data)}}else{Ht?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Gt,It,yt[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ee,Gt,It,yt[nt]);for(let Tt=0;Tt<ot.length;Tt++){const Et=ot[Tt];Ht?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Gt,It,Et.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,ee,Gt,It,Et.image[nt])}}}p(b)&&m(n.TEXTURE_CUBE_MAP),j.__version=q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function dt(T,b,D,K,q,j){const ft=o.convert(D.format,D.colorSpace),lt=o.convert(D.type),_t=M(D.internalFormat,ft,lt,D.colorSpace);if(!i.get(b).__hasExternalTextures){const pt=Math.max(1,b.width>>j),yt=Math.max(1,b.height>>j);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?e.texImage3D(q,j,_t,pt,yt,b.depth,0,ft,lt,null):e.texImage2D(q,j,_t,pt,yt,0,ft,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),z(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,q,i.get(D).__webglTexture,0,N(b)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,q,i.get(D).__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(T,b,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),b.depthBuffer){const K=b.depthTexture,q=K&&K.isDepthTexture?K.type:null,j=w(b.stencilBuffer,q),ft=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=N(b);z(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,j,b.width,b.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,j,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,T)}else{const K=b.textures;for(let q=0;q<K.length;q++){const j=K[q],ft=o.convert(j.format,j.colorSpace),lt=o.convert(j.type),_t=M(j.internalFormat,ft,lt,j.colorSpace),At=N(b);D&&z(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,_t,b.width,b.height):z(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,_t,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,_t,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function G(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const K=i.get(b.depthTexture).__webglTexture,q=N(b);if(b.depthTexture.format===br)z(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(b.depthTexture.format===Fr)z(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ut(T){const b=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",q)};K.addEventListener("dispose",q),b.__depthDisposeCallback=q}b.__boundDepthTexture=K}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");G(b.__webglFramebuffer,T)}else if(D){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=n.createRenderbuffer(),bt(b.__webglDepthbuffer[K],T,!1);else{const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),bt(b.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(T,b,D){const K=i.get(T);b!==void 0&&dt(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&ut(T)}function ht(T){const b=T.texture,D=i.get(T),K=i.get(b);T.addEventListener("dispose",C);const q=T.textures,j=T.isWebGLCubeRenderTarget===!0,ft=q.length>1;if(ft||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=b.version,r.memory.textures++),j){D.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0){D.__webglFramebuffer[lt]=[];for(let _t=0;_t<b.mipmaps.length;_t++)D.__webglFramebuffer[lt][_t]=n.createFramebuffer()}else D.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){D.__webglFramebuffer=[];for(let lt=0;lt<b.mipmaps.length;lt++)D.__webglFramebuffer[lt]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ft)for(let lt=0,_t=q.length;lt<_t;lt++){const At=i.get(q[lt]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),r.memory.textures++)}if(T.samples>0&&z(T)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let lt=0;lt<q.length;lt++){const _t=q[lt];D.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[lt]);const At=o.convert(_t.format,_t.colorSpace),pt=o.convert(_t.type),yt=M(_t.internalFormat,At,pt,_t.colorSpace,T.isXRRenderTarget===!0),Nt=N(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,yt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,D.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),bt(D.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),xt(n.TEXTURE_CUBE_MAP,b);for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)dt(D.__webglFramebuffer[lt][_t],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t);else dt(D.__webglFramebuffer[lt],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(b)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let lt=0,_t=q.length;lt<_t;lt++){const At=q[lt],pt=i.get(At);e.bindTexture(n.TEXTURE_2D,pt.__webglTexture),xt(n.TEXTURE_2D,At),dt(D.__webglFramebuffer,T,At,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),p(At)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),xt(lt,b),b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)dt(D.__webglFramebuffer[_t],T,b,n.COLOR_ATTACHMENT0,lt,_t);else dt(D.__webglFramebuffer,T,b,n.COLOR_ATTACHMENT0,lt,0);p(b)&&m(lt),e.unbindTexture()}T.depthBuffer&&ut(T)}function St(T){const b=T.textures;for(let D=0,K=b.length;D<K;D++){const q=b[D];if(p(q)){const j=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ft=i.get(q).__webglTexture;e.bindTexture(j,ft),m(j),e.unbindTexture()}}}const st=[],v=[];function R(T){if(T.samples>0){if(z(T)===!1){const b=T.textures,D=T.width,K=T.height;let q=n.COLOR_BUFFER_BIT;const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(T),lt=b.length>1;if(lt)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);const At=i.get(b[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,At,0)}n.blitFramebuffer(0,0,D,K,0,0,D,K,q,n.NEAREST),c===!0&&(st.length=0,v.length=0,st.push(n.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(st.push(j),v.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,v)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);const At=i.get(b[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,At,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const b=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function N(T){return Math.min(s.maxSamples,T.samples)}function z(T){const b=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function B(T){const b=r.render.frame;u.get(T)!==b&&(u.set(T,b),T.update())}function Z(T,b){const D=T.colorSpace,K=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==fo&&D!==Js&&(Ge.getTransfer(D)===rn?(K!==ci||q!==Fs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),b}function Q(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=A,this.setTexture2D=J,this.setTexture2DArray=it,this.setTexture3D=k,this.setTextureCube=tt,this.rebindTextures=at,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=z}function mE(n,t){function e(i,s=Js){let o;const r=Ge.getTransfer(s);if(i===Fs)return n.UNSIGNED_BYTE;if(i===Nd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Od)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$m)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ym)return n.BYTE;if(i===jm)return n.SHORT;if(i===Oa)return n.UNSIGNED_SHORT;if(i===Ud)return n.INT;if(i===Go)return n.UNSIGNED_INT;if(i===Ds)return n.FLOAT;if(i===Ja)return n.HALF_FLOAT;if(i===Km)return n.ALPHA;if(i===Zm)return n.RGB;if(i===ci)return n.RGBA;if(i===Jm)return n.LUMINANCE;if(i===Qm)return n.LUMINANCE_ALPHA;if(i===br)return n.DEPTH_COMPONENT;if(i===Fr)return n.DEPTH_STENCIL;if(i===tg)return n.RED;if(i===Fd)return n.RED_INTEGER;if(i===eg)return n.RG;if(i===Bd)return n.RG_INTEGER;if(i===zd)return n.RGBA_INTEGER;if(i===qc||i===Yc||i===jc||i===$c)if(r===rn)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===qc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===qc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$c)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gh||i===_h||i===vh||i===yh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===gh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_h)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xh||i===wh||i===Mh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===xh||i===wh)return r===rn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Mh)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sh||i===bh||i===Eh||i===Th||i===Ah||i===Ph||i===Rh||i===Ch||i===Ih||i===Lh||i===Dh||i===Uh||i===Nh||i===Oh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Sh)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bh)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eh)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Th)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ah)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ph)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rh)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ch)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ih)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lh)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dh)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uh)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nh)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oh)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kc||i===Fh||i===Bh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Kc)return r===rn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ng||i===zh||i===Gh||i===kh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Kc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===zh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class gE extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xt extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _E={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,i),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_E)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Xt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const vE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yE=`
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

}`;class xE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Yn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new hn({vertexShader:vE,fragmentShader:yE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new y(new ic(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wE extends qr{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,_=null;const g=new xE,p=e.getContextAttributes();let m=null,M=null;const w=[],x=[],I=new ie;let C=null;const E=new $e;E.layers.enable(1),E.viewport=new je;const L=new $e;L.layers.enable(2),L.viewport=new je;const F=[E,L],S=new gE;S.layers.enable(1),S.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let dt=w[rt];return dt===void 0&&(dt=new Iu,w[rt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(rt){let dt=w[rt];return dt===void 0&&(dt=new Iu,w[rt]=dt),dt.getGripSpace()},this.getHand=function(rt){let dt=w[rt];return dt===void 0&&(dt=new Iu,w[rt]=dt),dt.getHandSpace()};function H(rt){const dt=x.indexOf(rt.inputSource);if(dt===-1)return;const bt=w[dt];bt!==void 0&&(bt.update(rt.inputSource,rt.frame,l||r),bt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function J(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",it);for(let rt=0;rt<w.length;rt++){const dt=x[rt];dt!==null&&(x[rt]=null,w[rt].disconnect(dt))}A=null,U=null,g.reset(),t.setRenderTarget(m),f=null,d=null,h=null,s=null,M=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){o=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(rt){l=rt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",J),s.addEventListener("inputsourceschange",it),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const dt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ko(f.framebufferWidth,f.framebufferHeight,{format:ci,type:Fs,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let dt=null,bt=null,G=null;p.depth&&(G=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=p.stencil?Fr:br,bt=p.stencil?Or:Go);const ut={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:o};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ko(d.textureWidth,d.textureHeight,{format:ci,type:Fs,depthTexture:new _g(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(rt){for(let dt=0;dt<rt.removed.length;dt++){const bt=rt.removed[dt],G=x.indexOf(bt);G>=0&&(x[G]=null,w[G].disconnect(bt))}for(let dt=0;dt<rt.added.length;dt++){const bt=rt.added[dt];let G=x.indexOf(bt);if(G===-1){for(let at=0;at<w.length;at++)if(at>=x.length){x.push(bt),G=at;break}else if(x[at]===null){x[at]=bt,G=at;break}if(G===-1)break}const ut=w[G];ut&&ut.connect(bt)}}const k=new et,tt=new et;function W(rt,dt,bt){k.setFromMatrixPosition(dt.matrixWorld),tt.setFromMatrixPosition(bt.matrixWorld);const G=k.distanceTo(tt),ut=dt.projectionMatrix.elements,at=bt.projectionMatrix.elements,ht=ut[14]/(ut[10]-1),St=ut[14]/(ut[10]+1),st=(ut[9]+1)/ut[5],v=(ut[9]-1)/ut[5],R=(ut[8]-1)/ut[0],N=(at[8]+1)/at[0],z=ht*R,B=ht*N,Z=G/(-R+N),Q=Z*-R;if(dt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Q),rt.translateZ(Z),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),ut[10]===-1)rt.projectionMatrix.copy(dt.projectionMatrix),rt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const T=ht+Z,b=St+Z,D=z-Q,K=B+(G-Q),q=st*St/b*T,j=v*St/b*T;rt.projectionMatrix.makePerspective(D,K,q,j,T,b),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function gt(rt,dt){dt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(dt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let dt=rt.near,bt=rt.far;g.texture!==null&&(g.depthNear>0&&(dt=g.depthNear),g.depthFar>0&&(bt=g.depthFar)),S.near=L.near=E.near=dt,S.far=L.far=E.far=bt,(A!==S.near||U!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,U=S.far);const G=rt.parent,ut=S.cameras;gt(S,G);for(let at=0;at<ut.length;at++)gt(ut[at],G);ut.length===2?W(S,E,L):S.projectionMatrix.copy(E.projectionMatrix),vt(rt,S,G)};function vt(rt,dt,bt){bt===null?rt.matrix.copy(dt.matrixWorld):(rt.matrix.copy(bt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(dt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(dt.projectionMatrix),rt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Fa*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(rt){c=rt,d!==null&&(d.fixedFoveation=rt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=rt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let xt=null;function Dt(rt,dt){if(u=dt.getViewerPose(l||r),_=dt,u!==null){const bt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let G=!1;bt.length!==S.cameras.length&&(S.cameras.length=0,G=!0);for(let at=0;at<bt.length;at++){const ht=bt[at];let St=null;if(f!==null)St=f.getViewport(ht);else{const v=h.getViewSubImage(d,ht);St=v.viewport,at===0&&(t.setRenderTargetTextures(M,v.colorTexture,d.ignoreDepthValues?void 0:v.depthStencilTexture),t.setRenderTarget(M))}let st=F[at];st===void 0&&(st=new $e,st.layers.enable(at),st.viewport=new je,F[at]=st),st.matrix.fromArray(ht.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ht.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(St.x,St.y,St.width,St.height),at===0&&(S.matrix.copy(st.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),G===!0&&S.cameras.push(st)}const ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const at=h.getDepthInformation(bt[0]);at&&at.isValid&&at.texture&&g.init(t,at,s.renderState)}}for(let bt=0;bt<w.length;bt++){const G=x[bt],ut=w[bt];G!==null&&ut!==void 0&&ut.update(G,dt,l||r)}xt&&xt(rt,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),_=null}const kt=new mg;kt.setAnimationLoop(Dt),this.setAnimationLoop=function(rt){xt=rt},this.dispose=function(){}}}const Mo=new fs,ME=new an;function SE(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,fg(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,w,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),h(p,m)):m.isMeshPhongMaterial?(o(p,m),u(p,m)):m.isMeshStandardMaterial?(o(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(o(p,m),_(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),g(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===fi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===fi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),w=M.envMap,x=M.envMapRotation;w&&(p.envMap.value=w,Mo.copy(x),Mo.x*=-1,Mo.y*=-1,Mo.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Mo.y*=-1,Mo.z*=-1),p.envMapRotation.value.setFromMatrix4(ME.makeRotationFromEuler(Mo)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bE(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const x=w.program;i.uniformBlockBinding(M,x)}function l(M,w){let x=s[M.id];x===void 0&&(_(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",p));const I=w.program;i.updateUBOMapping(M,I);const C=t.render.frame;o[M.id]!==C&&(d(M),o[M.id]=C)}function u(M){const w=h();M.__bindingPointIndex=w;const x=n.createBuffer(),I=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,x),x}function h(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const w=s[M.id],x=M.uniforms,I=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let C=0,E=x.length;C<E;C++){const L=Array.isArray(x[C])?x[C]:[x[C]];for(let F=0,S=L.length;F<S;F++){const A=L[F];if(f(A,C,F,I)===!0){const U=A.__offset,H=Array.isArray(A.value)?A.value:[A.value];let J=0;for(let it=0;it<H.length;it++){const k=H[it],tt=g(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,U+J,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,J),J+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,w,x,I){const C=M.value,E=w+"_"+x;if(I[E]===void 0)return typeof C=="number"||typeof C=="boolean"?I[E]=C:I[E]=C.clone(),!0;{const L=I[E];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return I[E]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function _(M){const w=M.uniforms;let x=0;const I=16;for(let E=0,L=w.length;E<L;E++){const F=Array.isArray(w[E])?w[E]:[w[E]];for(let S=0,A=F.length;S<A;S++){const U=F[S],H=Array.isArray(U.value)?U.value:[U.value];for(let J=0,it=H.length;J<it;J++){const k=H[J],tt=g(k),W=x%I,gt=W%tt.boundary,vt=W+gt;x+=gt,vt!==0&&I-vt<tt.storage&&(x+=I-vt),U.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=tt.storage}}}const C=x%I;return C>0&&(x+=I-C),M.__size=x,M.__cache={},this}function g(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function p(M){const w=M.target;w.removeEventListener("dispose",p);const x=r.indexOf(w.__bindingPointIndex);r.splice(x,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function m(){for(const M in s)n.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:c,update:l,dispose:m}}class Kn{constructor(t={}){const{canvas:e=p1(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qi,this.toneMapping=io,this.toneMappingExposure=1;const w=this;let x=!1,I=0,C=0,E=null,L=-1,F=null;const S=new je,A=new je;let U=null;const H=new Se(0);let J=0,it=e.width,k=e.height,tt=1,W=null,gt=null;const vt=new je(0,0,it,k),xt=new je(0,0,it,k);let Dt=!1;const kt=new Vd;let rt=!1,dt=!1;const bt=new an,G=new an,ut=new et,at=new je,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function st(){return E===null?tt:1}let v=i;function R(P,$){return e.getContext(P,$)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dd}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),v===null){const $="webgl2";if(v=R($,P),v===null)throw R($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let N,z,B,Z,Q,T,b,D,K,q,j,ft,lt,_t,At,pt,yt,Nt,Gt,It,ee,Ht,te,X;function Mt(){N=new Cb(v),N.init(),Ht=new mE(v,N),z=new bb(v,N,t,Ht),B=new dE(v),z.reverseDepthBuffer&&B.buffers.depth.setReversed(!0),Z=new Db(v),Q=new Z2,T=new pE(v,N,B,Q,z,Ht,Z),b=new Tb(w),D=new Rb(w),K=new G1(v),te=new Mb(v,K),q=new Ib(v,K,Z,te),j=new Nb(v,q,K,Z),Gt=new Ub(v,z,T),pt=new Eb(Q),ft=new K2(w,b,D,N,z,te,pt),lt=new SE(w,Q),_t=new Q2,At=new oE(N),Nt=new wb(w,b,D,B,j,d,c),yt=new uE(w,j,z),X=new bE(v,Z,z,B),It=new Sb(v,N,Z),ee=new Lb(v,N,Z),Z.programs=ft.programs,w.capabilities=z,w.extensions=N,w.properties=Q,w.renderLists=_t,w.shadowMap=yt,w.state=B,w.info=Z}Mt();const ot=new wE(w,v);this.xr=ot,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const P=N.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=N.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(P){P!==void 0&&(tt=P,this.setSize(it,k,!1))},this.getSize=function(P){return P.set(it,k)},this.setSize=function(P,$,O=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}it=P,k=$,e.width=Math.floor(P*tt),e.height=Math.floor($*tt),O===!0&&(e.style.width=P+"px",e.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(it*tt,k*tt).floor()},this.setDrawingBufferSize=function(P,$,O){it=P,k=$,tt=O,e.width=Math.floor(P*O),e.height=Math.floor($*O),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(vt)},this.setViewport=function(P,$,O,Y){P.isVector4?vt.set(P.x,P.y,P.z,P.w):vt.set(P,$,O,Y),B.viewport(S.copy(vt).multiplyScalar(tt).round())},this.getScissor=function(P){return P.copy(xt)},this.setScissor=function(P,$,O,Y){P.isVector4?xt.set(P.x,P.y,P.z,P.w):xt.set(P,$,O,Y),B.scissor(A.copy(xt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(P){B.setScissorTest(Dt=P)},this.setOpaqueSort=function(P){W=P},this.setTransparentSort=function(P){gt=P},this.getClearColor=function(P){return P.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(P=!0,$=!0,O=!0){let Y=0;if(P){let V=!1;if(E!==null){const mt=E.texture.format;V=mt===zd||mt===Bd||mt===Fd}if(V){const mt=E.texture.type,Lt=mt===Fs||mt===Go||mt===Oa||mt===Or||mt===Nd||mt===Od,Ut=Nt.getClearColor(),Bt=Nt.getClearAlpha(),jt=Ut.r,Kt=Ut.g,Wt=Ut.b;Lt?(f[0]=jt,f[1]=Kt,f[2]=Wt,f[3]=Bt,v.clearBufferuiv(v.COLOR,0,f)):(_[0]=jt,_[1]=Kt,_[2]=Wt,_[3]=Bt,v.clearBufferiv(v.COLOR,0,_))}else Y|=v.COLOR_BUFFER_BIT}$&&(Y|=v.DEPTH_BUFFER_BIT,v.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(Y|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),_t.dispose(),At.dispose(),Q.dispose(),b.dispose(),D.dispose(),j.dispose(),te.dispose(),X.dispose(),ft.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",be),ot.removeEventListener("sessionend",Vt),qt.stop()};function nt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const P=Z.autoReset,$=yt.enabled,O=yt.autoUpdate,Y=yt.needsUpdate,V=yt.type;Mt(),Z.autoReset=P,yt.enabled=$,yt.autoUpdate=O,yt.needsUpdate=Y,yt.type=V}function Et(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Yt(P){const $=P.target;$.removeEventListener("dispose",Yt),oe($)}function oe(P){ce(P),Q.remove(P)}function ce(P){const $=Q.get(P).programs;$!==void 0&&($.forEach(function(O){ft.releaseProgram(O)}),P.isShaderMaterial&&ft.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,O,Y,V,mt){$===null&&($=ht);const Lt=V.isMesh&&V.matrixWorld.determinant()<0,Ut=Te(P,$,O,Y,V);B.setMaterial(Y,Lt);let Bt=O.index,jt=1;if(Y.wireframe===!0){if(Bt=q.getWireframeAttribute(O),Bt===void 0)return;jt=2}const Kt=O.drawRange,Wt=O.attributes.position;let se=Kt.start*jt,pe=(Kt.start+Kt.count)*jt;mt!==null&&(se=Math.max(se,mt.start*jt),pe=Math.min(pe,(mt.start+mt.count)*jt)),Bt!==null?(se=Math.max(se,0),pe=Math.min(pe,Bt.count)):Wt!=null&&(se=Math.max(se,0),pe=Math.min(pe,Wt.count));const me=pe-se;if(me<0||me===1/0)return;te.setup(V,Y,Ut,O,Bt);let Ct,Jt=It;if(Bt!==null&&(Ct=K.get(Bt),Jt=ee,Jt.setIndex(Ct)),V.isMesh)Y.wireframe===!0?(B.setLineWidth(Y.wireframeLinewidth*st()),Jt.setMode(v.LINES)):Jt.setMode(v.TRIANGLES);else if(V.isLine){let zt=Y.linewidth;zt===void 0&&(zt=1),B.setLineWidth(zt*st()),V.isLineSegments?Jt.setMode(v.LINES):V.isLineLoop?Jt.setMode(v.LINE_LOOP):Jt.setMode(v.LINE_STRIP)}else V.isPoints?Jt.setMode(v.POINTS):V.isSprite&&Jt.setMode(v.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Jt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(N.get("WEBGL_multi_draw"))Jt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const zt=V._multiDrawStarts,fe=V._multiDrawCounts,Pt=V._multiDrawCount,Ee=Bt?K.get(Bt).bytesPerElement:1,Pe=Q.get(Y).currentProgram.getUniforms();for(let Me=0;Me<Pt;Me++)Pe.setValue(v,"_gl_DrawID",Me),Jt.render(zt[Me]/Ee,fe[Me])}else if(V.isInstancedMesh)Jt.renderInstances(se,me,V.count);else if(O.isInstancedBufferGeometry){const zt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,fe=Math.min(O.instanceCount,zt);Jt.renderInstances(se,me,fe)}else Jt.render(se,me)};function le(P,$,O){P.transparent===!0&&P.side===De&&P.forceSinglePass===!1?(P.side=fi,P.needsUpdate=!0,_e(P,$,O),P.side=ao,P.needsUpdate=!0,_e(P,$,O),P.side=De):_e(P,$,O)}this.compile=function(P,$,O=null){O===null&&(O=P),p=At.get(O),p.init($),M.push(p),O.traverseVisible(function(V){V.isLight&&V.layers.test($.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),P!==O&&P.traverseVisible(function(V){V.isLight&&V.layers.test($.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Y=new Set;return P.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const mt=V.material;if(mt)if(Array.isArray(mt))for(let Lt=0;Lt<mt.length;Lt++){const Ut=mt[Lt];le(Ut,O,V),Y.add(Ut)}else le(mt,O,V),Y.add(mt)}),M.pop(),p=null,Y},this.compileAsync=function(P,$,O=null){const Y=this.compile(P,$,O);return new Promise(V=>{function mt(){if(Y.forEach(function(Lt){Q.get(Lt).currentProgram.isReady()&&Y.delete(Lt)}),Y.size===0){V(P);return}setTimeout(mt,10)}N.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ue=null;function ve(P){ue&&ue(P)}function be(){qt.stop()}function Vt(){qt.start()}const qt=new mg;qt.setAnimationLoop(ve),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(P){ue=P,ot.setAnimationLoop(P),P===null?qt.stop():qt.start()},ot.addEventListener("sessionstart",be),ot.addEventListener("sessionend",Vt),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera($),$=ot.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,$,E),p=At.get(P,M.length),p.init($),M.push(p),G.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),kt.setFromProjectionMatrix(G),dt=this.localClippingEnabled,rt=pt.init(this.clippingPlanes,dt),g=_t.get(P,m.length),g.init(),m.push(g),ot.enabled===!0&&ot.isPresenting===!0){const mt=w.xr.getDepthSensingMesh();mt!==null&&$t(mt,$,-1/0,w.sortObjects)}$t(P,$,0,w.sortObjects),g.finish(),w.sortObjects===!0&&g.sort(W,gt),St=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,St&&Nt.addToRenderList(g,P),this.info.render.frame++,rt===!0&&pt.beginShadows();const O=p.state.shadowsArray;yt.render(O,P,$),rt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,V=g.transmissive;if(p.setupLights(),$.isArrayCamera){const mt=$.cameras;if(V.length>0)for(let Lt=0,Ut=mt.length;Lt<Ut;Lt++){const Bt=mt[Lt];he(Y,V,P,Bt)}St&&Nt.render(P);for(let Lt=0,Ut=mt.length;Lt<Ut;Lt++){const Bt=mt[Lt];re(g,P,Bt,Bt.viewport)}}else V.length>0&&he(Y,V,P,$),St&&Nt.render(P),re(g,P,$);E!==null&&(T.updateMultisampleRenderTarget(E),T.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(w,P,$),te.resetDefaultState(),L=-1,F=null,M.pop(),M.length>0?(p=M[M.length-1],rt===!0&&pt.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function $t(P,$,O,Y){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)O=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||kt.intersectsSprite(P)){Y&&at.setFromMatrixPosition(P.matrixWorld).applyMatrix4(G);const Lt=j.update(P),Ut=P.material;Ut.visible&&g.push(P,Lt,Ut,O,at.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||kt.intersectsObject(P))){const Lt=j.update(P),Ut=P.material;if(Y&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),at.copy(P.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),at.copy(Lt.boundingSphere.center)),at.applyMatrix4(P.matrixWorld).applyMatrix4(G)),Array.isArray(Ut)){const Bt=Lt.groups;for(let jt=0,Kt=Bt.length;jt<Kt;jt++){const Wt=Bt[jt],se=Ut[Wt.materialIndex];se&&se.visible&&g.push(P,Lt,se,O,at.z,Wt)}}else Ut.visible&&g.push(P,Lt,Ut,O,at.z,null)}}const mt=P.children;for(let Lt=0,Ut=mt.length;Lt<Ut;Lt++)$t(mt[Lt],$,O,Y)}function re(P,$,O,Y){const V=P.opaque,mt=P.transmissive,Lt=P.transparent;p.setupLightsView(O),rt===!0&&pt.setGlobalState(w.clippingPlanes,O),Y&&B.viewport(S.copy(Y)),V.length>0&&de(V,$,O),mt.length>0&&de(mt,$,O),Lt.length>0&&de(Lt,$,O),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function he(P,$,O,Y){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ko(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?Ja:Fs,minFilter:Ki,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const mt=p.state.transmissionRenderTarget[Y.id],Lt=Y.viewport||S;mt.setSize(Lt.z,Lt.w);const Ut=w.getRenderTarget();w.setRenderTarget(mt),w.getClearColor(H),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear(),St&&Nt.render(O);const Bt=w.toneMapping;w.toneMapping=io;const jt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),rt===!0&&pt.setGlobalState(w.clippingPlanes,Y),de(P,O,Y),T.updateMultisampleRenderTarget(mt),T.updateRenderTargetMipmap(mt),N.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Wt=0,se=$.length;Wt<se;Wt++){const pe=$[Wt],me=pe.object,Ct=pe.geometry,Jt=pe.material,zt=pe.group;if(Jt.side===De&&me.layers.test(Y.layers)){const fe=Jt.side;Jt.side=fi,Jt.needsUpdate=!0,ye(me,O,Y,Ct,Jt,zt),Jt.side=fe,Jt.needsUpdate=!0,Kt=!0}}Kt===!0&&(T.updateMultisampleRenderTarget(mt),T.updateRenderTargetMipmap(mt))}w.setRenderTarget(Ut),w.setClearColor(H,J),jt!==void 0&&(Y.viewport=jt),w.toneMapping=Bt}function de(P,$,O){const Y=$.isScene===!0?$.overrideMaterial:null;for(let V=0,mt=P.length;V<mt;V++){const Lt=P[V],Ut=Lt.object,Bt=Lt.geometry,jt=Y===null?Lt.material:Y,Kt=Lt.group;Ut.layers.test(O.layers)&&ye(Ut,$,O,Bt,jt,Kt)}}function ye(P,$,O,Y,V,mt){P.onBeforeRender(w,$,O,Y,V,mt),P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),V.onBeforeRender(w,$,O,Y,P,mt),V.transparent===!0&&V.side===De&&V.forceSinglePass===!1?(V.side=fi,V.needsUpdate=!0,w.renderBufferDirect(O,$,Y,V,P,mt),V.side=ao,V.needsUpdate=!0,w.renderBufferDirect(O,$,Y,V,P,mt),V.side=De):w.renderBufferDirect(O,$,Y,V,P,mt),P.onAfterRender(w,$,O,Y,V,mt)}function _e(P,$,O){$.isScene!==!0&&($=ht);const Y=Q.get(P),V=p.state.lights,mt=p.state.shadowsArray,Lt=V.state.version,Ut=ft.getParameters(P,V.state,mt,$,O),Bt=ft.getProgramCacheKey(Ut);let jt=Y.programs;Y.environment=P.isMeshStandardMaterial?$.environment:null,Y.fog=$.fog,Y.envMap=(P.isMeshStandardMaterial?D:b).get(P.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,jt===void 0&&(P.addEventListener("dispose",Yt),jt=new Map,Y.programs=jt);let Kt=jt.get(Bt);if(Kt!==void 0){if(Y.currentProgram===Kt&&Y.lightsStateVersion===Lt)return Ue(P,Ut),Kt}else Ut.uniforms=ft.getUniforms(P),P.onBeforeCompile(Ut,w),Kt=ft.acquireProgram(Ut,Bt),jt.set(Bt,Kt),Y.uniforms=Ut.uniforms;const Wt=Y.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Wt.clippingPlanes=pt.uniform),Ue(P,Ut),Y.needsLights=ae(P),Y.lightsStateVersion=Lt,Y.needsLights&&(Wt.ambientLightColor.value=V.state.ambient,Wt.lightProbe.value=V.state.probe,Wt.directionalLights.value=V.state.directional,Wt.directionalLightShadows.value=V.state.directionalShadow,Wt.spotLights.value=V.state.spot,Wt.spotLightShadows.value=V.state.spotShadow,Wt.rectAreaLights.value=V.state.rectArea,Wt.ltc_1.value=V.state.rectAreaLTC1,Wt.ltc_2.value=V.state.rectAreaLTC2,Wt.pointLights.value=V.state.point,Wt.pointLightShadows.value=V.state.pointShadow,Wt.hemisphereLights.value=V.state.hemi,Wt.directionalShadowMap.value=V.state.directionalShadowMap,Wt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Wt.spotShadowMap.value=V.state.spotShadowMap,Wt.spotLightMatrix.value=V.state.spotLightMatrix,Wt.spotLightMap.value=V.state.spotLightMap,Wt.pointShadowMap.value=V.state.pointShadowMap,Wt.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Kt,Y.uniformsList=null,Kt}function we(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=Jc.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function Ue(P,$){const O=Q.get(P);O.outputColorSpace=$.outputColorSpace,O.batching=$.batching,O.batchingColor=$.batchingColor,O.instancing=$.instancing,O.instancingColor=$.instancingColor,O.instancingMorph=$.instancingMorph,O.skinning=$.skinning,O.morphTargets=$.morphTargets,O.morphNormals=$.morphNormals,O.morphColors=$.morphColors,O.morphTargetsCount=$.morphTargetsCount,O.numClippingPlanes=$.numClippingPlanes,O.numIntersection=$.numClipIntersection,O.vertexAlphas=$.vertexAlphas,O.vertexTangents=$.vertexTangents,O.toneMapping=$.toneMapping}function Te(P,$,O,Y,V){$.isScene!==!0&&($=ht),T.resetTextureUnits();const mt=$.fog,Lt=Y.isMeshStandardMaterial?$.environment:null,Ut=E===null?w.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:fo,Bt=(Y.isMeshStandardMaterial?D:b).get(Y.envMap||Lt),jt=Y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Kt=!!O.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Wt=!!O.morphAttributes.position,se=!!O.morphAttributes.normal,pe=!!O.morphAttributes.color;let me=io;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(me=w.toneMapping);const Ct=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Jt=Ct!==void 0?Ct.length:0,zt=Q.get(Y),fe=p.state.lights;if(rt===!0&&(dt===!0||P!==F)){const Ne=P===F&&Y.id===L;pt.setState(Y,P,Ne)}let Pt=!1;Y.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==fe.state.version||zt.outputColorSpace!==Ut||V.isBatchedMesh&&zt.batching===!1||!V.isBatchedMesh&&zt.batching===!0||V.isBatchedMesh&&zt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&zt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&zt.instancing===!1||!V.isInstancedMesh&&zt.instancing===!0||V.isSkinnedMesh&&zt.skinning===!1||!V.isSkinnedMesh&&zt.skinning===!0||V.isInstancedMesh&&zt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&zt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&zt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&zt.instancingMorph===!1&&V.morphTexture!==null||zt.envMap!==Bt||Y.fog===!0&&zt.fog!==mt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==pt.numPlanes||zt.numIntersection!==pt.numIntersection)||zt.vertexAlphas!==jt||zt.vertexTangents!==Kt||zt.morphTargets!==Wt||zt.morphNormals!==se||zt.morphColors!==pe||zt.toneMapping!==me||zt.morphTargetsCount!==Jt)&&(Pt=!0):(Pt=!0,zt.__version=Y.version);let Ee=zt.currentProgram;Pt===!0&&(Ee=_e(Y,$,V));let Pe=!1,Me=!1,Be=!1;const xe=Ee.getUniforms(),Oe=zt.uniforms;if(B.useProgram(Ee.program)&&(Pe=!0,Me=!0,Be=!0),Y.id!==L&&(L=Y.id,Me=!0),Pe||F!==P){z.reverseDepthBuffer?(bt.copy(P.projectionMatrix),g1(bt),_1(bt),xe.setValue(v,"projectionMatrix",bt)):xe.setValue(v,"projectionMatrix",P.projectionMatrix),xe.setValue(v,"viewMatrix",P.matrixWorldInverse);const Ne=xe.map.cameraPosition;Ne!==void 0&&Ne.setValue(v,ut.setFromMatrixPosition(P.matrixWorld)),z.logarithmicDepthBuffer&&xe.setValue(v,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xe.setValue(v,"isOrthographic",P.isOrthographicCamera===!0),F!==P&&(F=P,Me=!0,Be=!0)}if(V.isSkinnedMesh){xe.setOptional(v,V,"bindMatrix"),xe.setOptional(v,V,"bindMatrixInverse");const Ne=V.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),xe.setValue(v,"boneTexture",Ne.boneTexture,T))}V.isBatchedMesh&&(xe.setOptional(v,V,"batchingTexture"),xe.setValue(v,"batchingTexture",V._matricesTexture,T),xe.setOptional(v,V,"batchingIdTexture"),xe.setValue(v,"batchingIdTexture",V._indirectTexture,T),xe.setOptional(v,V,"batchingColorTexture"),V._colorsTexture!==null&&xe.setValue(v,"batchingColorTexture",V._colorsTexture,T));const Ye=O.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0)&&Gt.update(V,O,Ee),(Me||zt.receiveShadow!==V.receiveShadow)&&(zt.receiveShadow=V.receiveShadow,xe.setValue(v,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Oe.envMap.value=Bt,Oe.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&$.environment!==null&&(Oe.envMapIntensity.value=$.environmentIntensity),Me&&(xe.setValue(v,"toneMappingExposure",w.toneMappingExposure),zt.needsLights&&wt(Oe,Be),mt&&Y.fog===!0&&lt.refreshFogUniforms(Oe,mt),lt.refreshMaterialUniforms(Oe,Y,tt,k,p.state.transmissionRenderTarget[P.id]),Jc.upload(v,we(zt),Oe,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Jc.upload(v,we(zt),Oe,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xe.setValue(v,"center",V.center),xe.setValue(v,"modelViewMatrix",V.modelViewMatrix),xe.setValue(v,"normalMatrix",V.normalMatrix),xe.setValue(v,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ne=Y.uniformsGroups;for(let We=0,sn=Ne.length;We<sn;We++){const Ke=Ne[We];X.update(Ke,Ee),X.bind(Ke,Ee)}}return Ee}function wt(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function ae(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,$,O){Q.get(P.texture).__webglTexture=$,Q.get(P.depthTexture).__webglTexture=O;const Y=Q.get(P);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=O===void 0,Y.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){const O=Q.get(P);O.__webglFramebuffer=$,O.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,O=0){E=P,I=$,C=O;let Y=!0,V=null,mt=!1,Lt=!1;if(P){const Bt=Q.get(P);if(Bt.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(v.FRAMEBUFFER,null),Y=!1;else if(Bt.__webglFramebuffer===void 0)T.setupRenderTarget(P);else if(Bt.__hasExternalTextures)T.rebindTextures(P,Q.get(P.texture).__webglTexture,Q.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Wt=P.depthTexture;if(Bt.__boundDepthTexture!==Wt){if(Wt!==null&&Q.has(Wt)&&(P.width!==Wt.image.width||P.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(P)}}const jt=P.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Lt=!0);const Kt=Q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Kt[$])?V=Kt[$][O]:V=Kt[$],mt=!0):P.samples>0&&T.useMultisampledRTT(P)===!1?V=Q.get(P).__webglMultisampledFramebuffer:Array.isArray(Kt)?V=Kt[O]:V=Kt,S.copy(P.viewport),A.copy(P.scissor),U=P.scissorTest}else S.copy(vt).multiplyScalar(tt).floor(),A.copy(xt).multiplyScalar(tt).floor(),U=Dt;if(B.bindFramebuffer(v.FRAMEBUFFER,V)&&Y&&B.drawBuffers(P,V),B.viewport(S),B.scissor(A),B.setScissorTest(U),mt){const Bt=Q.get(P.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+$,Bt.__webglTexture,O)}else if(Lt){const Bt=Q.get(P.texture),jt=$||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Bt.__webglTexture,O||0,jt)}L=-1},this.readRenderTargetPixels=function(P,$,O,Y,V,mt,Lt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){B.bindFramebuffer(v.FRAMEBUFFER,Ut);try{const Bt=P.texture,jt=Bt.format,Kt=Bt.type;if(!z.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-Y&&O>=0&&O<=P.height-V&&v.readPixels($,O,Y,V,Ht.convert(jt),Ht.convert(Kt),mt)}finally{const Bt=E!==null?Q.get(E).__webglFramebuffer:null;B.bindFramebuffer(v.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(P,$,O,Y,V,mt,Lt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){const Bt=P.texture,jt=Bt.format,Kt=Bt.type;if(!z.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-Y&&O>=0&&O<=P.height-V){B.bindFramebuffer(v.FRAMEBUFFER,Ut);const Wt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Wt),v.bufferData(v.PIXEL_PACK_BUFFER,mt.byteLength,v.STREAM_READ),v.readPixels($,O,Y,V,Ht.convert(jt),Ht.convert(Kt),0);const se=E!==null?Q.get(E).__webglFramebuffer:null;B.bindFramebuffer(v.FRAMEBUFFER,se);const pe=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await m1(v,pe,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Wt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,mt),v.deleteBuffer(Wt),v.deleteSync(pe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,$=null,O=0){P.isTexture!==!0&&(Zc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);const Y=Math.pow(2,-O),V=Math.floor(P.image.width*Y),mt=Math.floor(P.image.height*Y),Lt=$!==null?$.x:0,Ut=$!==null?$.y:0;T.setTexture2D(P,0),v.copyTexSubImage2D(v.TEXTURE_2D,O,0,0,Lt,Ut,V,mt),B.unbindTexture()},this.copyTextureToTexture=function(P,$,O=null,Y=null,V=0){P.isTexture!==!0&&(Zc("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1],$=arguments[2],V=arguments[3]||0,O=null);let mt,Lt,Ut,Bt,jt,Kt;O!==null?(mt=O.max.x-O.min.x,Lt=O.max.y-O.min.y,Ut=O.min.x,Bt=O.min.y):(mt=P.image.width,Lt=P.image.height,Ut=0,Bt=0),Y!==null?(jt=Y.x,Kt=Y.y):(jt=0,Kt=0);const Wt=Ht.convert($.format),se=Ht.convert($.type);T.setTexture2D($,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,$.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,$.unpackAlignment);const pe=v.getParameter(v.UNPACK_ROW_LENGTH),me=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Ct=v.getParameter(v.UNPACK_SKIP_PIXELS),Jt=v.getParameter(v.UNPACK_SKIP_ROWS),zt=v.getParameter(v.UNPACK_SKIP_IMAGES),fe=P.isCompressedTexture?P.mipmaps[V]:P.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,fe.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,fe.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ut),v.pixelStorei(v.UNPACK_SKIP_ROWS,Bt),P.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,V,jt,Kt,mt,Lt,Wt,se,fe.data):P.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,V,jt,Kt,fe.width,fe.height,Wt,fe.data):v.texSubImage2D(v.TEXTURE_2D,V,jt,Kt,mt,Lt,Wt,se,fe),v.pixelStorei(v.UNPACK_ROW_LENGTH,pe),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,me),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ct),v.pixelStorei(v.UNPACK_SKIP_ROWS,Jt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,zt),V===0&&$.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(P,$,O=null,Y=null,V=0){P.isTexture!==!0&&(Zc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,Y=arguments[1]||null,P=arguments[2],$=arguments[3],V=arguments[4]||0);let mt,Lt,Ut,Bt,jt,Kt,Wt,se,pe;const me=P.isCompressedTexture?P.mipmaps[V]:P.image;O!==null?(mt=O.max.x-O.min.x,Lt=O.max.y-O.min.y,Ut=O.max.z-O.min.z,Bt=O.min.x,jt=O.min.y,Kt=O.min.z):(mt=me.width,Lt=me.height,Ut=me.depth,Bt=0,jt=0,Kt=0),Y!==null?(Wt=Y.x,se=Y.y,pe=Y.z):(Wt=0,se=0,pe=0);const Ct=Ht.convert($.format),Jt=Ht.convert($.type);let zt;if($.isData3DTexture)T.setTexture3D($,0),zt=v.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)T.setTexture2DArray($,0),zt=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,$.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,$.unpackAlignment);const fe=v.getParameter(v.UNPACK_ROW_LENGTH),Pt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Ee=v.getParameter(v.UNPACK_SKIP_PIXELS),Pe=v.getParameter(v.UNPACK_SKIP_ROWS),Me=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,me.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,me.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Bt),v.pixelStorei(v.UNPACK_SKIP_ROWS,jt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Kt),P.isDataTexture||P.isData3DTexture?v.texSubImage3D(zt,V,Wt,se,pe,mt,Lt,Ut,Ct,Jt,me.data):$.isCompressedArrayTexture?v.compressedTexSubImage3D(zt,V,Wt,se,pe,mt,Lt,Ut,Ct,me.data):v.texSubImage3D(zt,V,Wt,se,pe,mt,Lt,Ut,Ct,Jt,me),v.pixelStorei(v.UNPACK_ROW_LENGTH,fe),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Pt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ee),v.pixelStorei(v.UNPACK_SKIP_ROWS,Pe),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Me),V===0&&$.generateMipmaps&&v.generateMipmap(zt),B.unbindTexture()},this.initRenderTarget=function(P){Q.get(P).__webglFramebuffer===void 0&&T.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?T.setTextureCube(P,0):P.isData3DTexture?T.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?T.setTexture2DArray(P,0):T.setTexture2D(P,0),B.unbindTexture()},this.resetState=function(){I=0,C=0,E=null,B.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Us}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Gd?"display-p3":"srgb",e.unpackColorSpace=Ge.workingColorSpace===Nl?"display-p3":"srgb"}}class Zn extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class za extends Yr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const i0=new an,Vh=new cg,Uc=new Ol,Nc=new et;class Sa extends Nn{constructor(t=new Bn,e=new za){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(s),Uc.radius+=o,t.ray.intersectsSphere(Uc)===!1)return;i0.copy(s).invert(),Vh.copy(t.ray).applyMatrix4(i0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let _=d,g=f;_<g;_++){const p=l.getX(_);Nc.fromBufferAttribute(h,p),s0(Nc,p,c,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let _=d,g=f;_<g;_++)Nc.fromBufferAttribute(h,_),s0(Nc,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function s0(n,t,e,i,s,o,r){const a=Vh.distanceSqToPoint(n);if(a<e){const c=new et;Vh.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class EE extends Yn{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gs{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const u=i[s],d=i[s+1]-u,f=(r-u)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new ie:new et);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new et,s=[],o=[],r=[],a=new et,c=new an;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new et)}o[0]=new et,r[0]=new et;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ln(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,_))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ln(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let _=1;_<=t;_++)o[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xd extends gs{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ie){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class TE extends Xd{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function qd(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,h){let d=(r-o)/l-(a-o)/(l+u)+(a-r)/u,f=(a-r)/u-(c-r)/(u+h)+(c-a)/h;d*=u,f*=u,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Oc=new et,Lu=new qd,Du=new qd,Uu=new qd;class AE extends gs{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new et){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:(Oc.subVectors(s[0],s[1]).add(s[0]),l=Oc);const h=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Oc.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Oc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Lu.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,_,g,p),Du.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,_,g,p),Uu.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Lu.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Du.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Uu.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Lu.calc(c),Du.calc(c),Uu.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function o0(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function PE(n,t){const e=1-n;return e*e*t}function RE(n,t){return 2*(1-n)*n*t}function CE(n,t){return n*n*t}function ba(n,t,e,i){return PE(n,t)+RE(n,e)+CE(n,i)}function IE(n,t){const e=1-n;return e*e*e*t}function LE(n,t){const e=1-n;return 3*e*e*n*t}function DE(n,t){return 3*(1-n)*n*n*t}function UE(n,t){return n*n*n*t}function Ea(n,t,e,i,s){return IE(n,t)+LE(n,e)+DE(n,i)+UE(n,s)}class Mg extends gs{constructor(t=new ie,e=new ie,i=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ie){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Ea(t,s.x,o.x,r.x,a.x),Ea(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class NE extends gs{constructor(t=new et,e=new et,i=new et,s=new et){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new et){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Ea(t,s.x,o.x,r.x,a.x),Ea(t,s.y,o.y,r.y,a.y),Ea(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sg extends gs{constructor(t=new ie,e=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ie){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ie){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class OE extends gs{constructor(t=new et,e=new et){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new et){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bg extends gs{constructor(t=new ie,e=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ie){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(ba(t,s.x,o.x,r.x),ba(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class FE extends gs{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(ba(t,s.x,o.x,r.x),ba(t,s.y,o.y,r.y),ba(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eg extends gs{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ie){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return i.set(o0(a,c.x,l.x,u.x,h.x),o0(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ie().fromArray(s))}return this}}var Wh=Object.freeze({__proto__:null,ArcCurve:TE,CatmullRomCurve3:AE,CubicBezierCurve:Mg,CubicBezierCurve3:NE,EllipseCurve:Xd,LineCurve:Sg,LineCurve3:OE,QuadraticBezierCurve:bg,QuadraticBezierCurve3:FE,SplineCurve:Eg});class BE extends gs{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wh[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Wh[s.type]().fromJSON(s))}return this}}class Xh extends BE{constructor(t){super(),this.type="Path",this.currentPoint=new ie,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Sg(this.currentPoint.clone(),new ie(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new bg(this.currentPoint.clone(),new ie(t,e),new ie(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Mg(this.currentPoint.clone(),new ie(t,e),new ie(i,s),new ie(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Eg(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new Xd(t,e,i,s,o,r,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ce extends Bn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new et,u=new ie;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=i+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new cn(r,3)),this.setAttribute("normal",new cn(a,3)),this.setAttribute("uv",new cn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Zt extends Bn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],f=[];let _=0;const g=[],p=i/2;let m=0;M(),r===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(f,2));function M(){const x=new et,I=new et;let C=0;const E=(e-t)/i;for(let L=0;L<=o;L++){const F=[],S=L/o,A=S*(e-t)+t;for(let U=0;U<=s;U++){const H=U/s,J=H*c+a,it=Math.sin(J),k=Math.cos(J);I.x=A*it,I.y=-S*i+p,I.z=A*k,h.push(I.x,I.y,I.z),x.set(it,E,k).normalize(),d.push(x.x,x.y,x.z),f.push(H,1-S),F.push(_++)}g.push(F)}for(let L=0;L<s;L++)for(let F=0;F<o;F++){const S=g[F][L],A=g[F+1][L],U=g[F+1][L+1],H=g[F][L+1];t>0&&(u.push(S,A,H),C+=3),e>0&&(u.push(A,U,H),C+=3)}l.addGroup(m,C,0),m+=C}function w(x){const I=_,C=new ie,E=new et;let L=0;const F=x===!0?t:e,S=x===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,p*S,0),d.push(0,S,0),f.push(.5,.5),_++;const A=_;for(let U=0;U<=s;U++){const J=U/s*c+a,it=Math.cos(J),k=Math.sin(J);E.x=F*k,E.y=p*S,E.z=F*it,h.push(E.x,E.y,E.z),d.push(0,S,0),C.x=it*.5+.5,C.y=k*.5*S+.5,f.push(C.x,C.y),_++}for(let U=0;U<s;U++){const H=I+U,J=A+U;x===!0?u.push(J,J+1,H):u.push(J+1,J,H),L+=3}l.addGroup(m,L,x===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ai extends Zt{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ai(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tn extends Xh{constructor(t){super(t),this.uuid=Xo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Xh().fromJSON(s))}return this}}const zE={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=Tg(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,h,d,f;if(i&&(o=WE(n,t,o,e)),n.length>80*e){a=l=n[0],c=u=n[1];for(let _=e;_<s;_+=e)h=n[_],d=n[_+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Ga(o,r,e,a,c,f,0),r}};function Tg(n,t,e,i,s){let o,r;if(s===eT(n,t,e,i)>0)for(o=t;o<e;o+=i)r=r0(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=r0(o,n[o],n[o+1],r);return r&&Bl(r,r.next)&&(Ha(r),r=r.next),r}function Ho(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Bl(e,e.next)||mn(e.prev,e,e.next)===0)){if(Ha(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ga(n,t,e,i,s,o,r){if(!n)return;!r&&o&&$E(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?kE(n,i,s,o):GE(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Ha(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=HE(Ho(n),t,e),Ga(n,t,e,i,s,o,2)):r===2&&VE(n,t,e,i,s,o):Ga(Ho(n),t,e,i,s,o,1);break}}}function GE(n){const t=n.prev,e=n,i=n.next;if(mn(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,u=s<o?s<r?s:r:o<r?o:r,h=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=f&&mr(s,a,o,c,r,l,_.x,_.y)&&mn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function kE(n,t,e,i){const s=n.prev,o=n,r=n.next;if(mn(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,h=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,_=u<h?u<d?u:d:h<d?h:d,g=a>c?a>l?a:l:c>l?c:l,p=u>h?u>d?u:d:h>d?h:d,m=qh(f,_,t,e,i),M=qh(g,p,t,e,i);let w=n.prevZ,x=n.nextZ;for(;w&&w.z>=m&&x&&x.z<=M;){if(w.x>=f&&w.x<=g&&w.y>=_&&w.y<=p&&w!==s&&w!==r&&mr(a,u,c,h,l,d,w.x,w.y)&&mn(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=f&&x.x<=g&&x.y>=_&&x.y<=p&&x!==s&&x!==r&&mr(a,u,c,h,l,d,x.x,x.y)&&mn(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=g&&w.y>=_&&w.y<=p&&w!==s&&w!==r&&mr(a,u,c,h,l,d,w.x,w.y)&&mn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=p&&x!==s&&x!==r&&mr(a,u,c,h,l,d,x.x,x.y)&&mn(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function HE(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Bl(s,o)&&Ag(s,i,i.next,o)&&ka(s,o)&&ka(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),Ha(i),Ha(i.next),i=n=o),i=i.next}while(i!==n);return Ho(i)}function VE(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&JE(r,a)){let c=Pg(r,a);r=Ho(r,r.next),c=Ho(c,c.next),Ga(r,t,e,i,s,o,0),Ga(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function WE(n,t,e,i){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=Tg(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(ZE(l));for(s.sort(XE),o=0;o<s.length;o++)e=qE(s[o],e);return e}function XE(n,t){return n.x-t.x}function qE(n,t){const e=YE(n,t);if(!e)return t;const i=Pg(e,n);return Ho(i,i.next),Ho(e,e.next)}function YE(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&mr(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),ka(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&jE(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function jE(n,t){return mn(n.prev,n,t.prev)<0&&mn(t.next,n,n.next)<0}function $E(n,t,e,i){let s=n;do s.z===0&&(s.z=qh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,KE(s)}function KE(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function qh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function ZE(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function mr(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function JE(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!QE(n,t)&&(ka(n,t)&&ka(t,n)&&tT(n,t)&&(mn(n.prev,n,t.prev)||mn(n,t.prev,t))||Bl(n,t)&&mn(n.prev,n,n.next)>0&&mn(t.prev,t,t.next)>0)}function mn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Bl(n,t){return n.x===t.x&&n.y===t.y}function Ag(n,t,e,i){const s=Bc(mn(n,t,e)),o=Bc(mn(n,t,i)),r=Bc(mn(e,i,n)),a=Bc(mn(e,i,t));return!!(s!==o&&r!==a||s===0&&Fc(n,e,t)||o===0&&Fc(n,i,t)||r===0&&Fc(e,n,i)||a===0&&Fc(e,t,i))}function Fc(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Bc(n){return n>0?1:n<0?-1:0}function QE(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ag(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ka(n,t){return mn(n.prev,n,n.next)<0?mn(n,t,n.next)>=0&&mn(n,n.prev,t)>=0:mn(n,t,n.prev)<0||mn(n,n.next,t)<0}function tT(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Pg(n,t){const e=new Yh(n.i,n.x,n.y),i=new Yh(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function r0(n,t,e,i){const s=new Yh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ha(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eT(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class Tr{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return Tr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];a0(t),c0(i,t);let r=t.length;e.forEach(a0);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,c0(i,e[c]);const a=zE.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function a0(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function c0(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Pn extends Bn{constructor(t=new Tn([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new cn(s,3)),this.setAttribute("uv",new cn(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:nT;let w,x=!1,I,C,E,L;m&&(w=m.getSpacedPoints(u),x=!0,d=!1,I=m.computeFrenetFrames(u,!1),C=new et,E=new et,L=new et),d||(p=0,f=0,_=0,g=0);const F=a.extractPoints(l);let S=F.shape;const A=F.holes;if(!Tr.isClockWise(S)){S=S.reverse();for(let st=0,v=A.length;st<v;st++){const R=A[st];Tr.isClockWise(R)&&(A[st]=R.reverse())}}const H=Tr.triangulateShape(S,A),J=S;for(let st=0,v=A.length;st<v;st++){const R=A[st];S=S.concat(R)}function it(st,v,R){return v||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(v,R)}const k=S.length,tt=H.length;function W(st,v,R){let N,z,B;const Z=st.x-v.x,Q=st.y-v.y,T=R.x-st.x,b=R.y-st.y,D=Z*Z+Q*Q,K=Z*b-Q*T;if(Math.abs(K)>Number.EPSILON){const q=Math.sqrt(D),j=Math.sqrt(T*T+b*b),ft=v.x-Q/q,lt=v.y+Z/q,_t=R.x-b/j,At=R.y+T/j,pt=((_t-ft)*b-(At-lt)*T)/(Z*b-Q*T);N=ft+Z*pt-st.x,z=lt+Q*pt-st.y;const yt=N*N+z*z;if(yt<=2)return new ie(N,z);B=Math.sqrt(yt/2)}else{let q=!1;Z>Number.EPSILON?T>Number.EPSILON&&(q=!0):Z<-Number.EPSILON?T<-Number.EPSILON&&(q=!0):Math.sign(Q)===Math.sign(b)&&(q=!0),q?(N=-Q,z=Z,B=Math.sqrt(D)):(N=Z,z=Q,B=Math.sqrt(D/2))}return new ie(N/B,z/B)}const gt=[];for(let st=0,v=J.length,R=v-1,N=st+1;st<v;st++,R++,N++)R===v&&(R=0),N===v&&(N=0),gt[st]=W(J[st],J[R],J[N]);const vt=[];let xt,Dt=gt.concat();for(let st=0,v=A.length;st<v;st++){const R=A[st];xt=[];for(let N=0,z=R.length,B=z-1,Z=N+1;N<z;N++,B++,Z++)B===z&&(B=0),Z===z&&(Z=0),xt[N]=W(R[N],R[B],R[Z]);vt.push(xt),Dt=Dt.concat(xt)}for(let st=0;st<p;st++){const v=st/p,R=f*Math.cos(v*Math.PI/2),N=_*Math.sin(v*Math.PI/2)+g;for(let z=0,B=J.length;z<B;z++){const Z=it(J[z],gt[z],N);G(Z.x,Z.y,-R)}for(let z=0,B=A.length;z<B;z++){const Z=A[z];xt=vt[z];for(let Q=0,T=Z.length;Q<T;Q++){const b=it(Z[Q],xt[Q],N);G(b.x,b.y,-R)}}}const kt=_+g;for(let st=0;st<k;st++){const v=d?it(S[st],Dt[st],kt):S[st];x?(E.copy(I.normals[0]).multiplyScalar(v.x),C.copy(I.binormals[0]).multiplyScalar(v.y),L.copy(w[0]).add(E).add(C),G(L.x,L.y,L.z)):G(v.x,v.y,0)}for(let st=1;st<=u;st++)for(let v=0;v<k;v++){const R=d?it(S[v],Dt[v],kt):S[v];x?(E.copy(I.normals[st]).multiplyScalar(R.x),C.copy(I.binormals[st]).multiplyScalar(R.y),L.copy(w[st]).add(E).add(C),G(L.x,L.y,L.z)):G(R.x,R.y,h/u*st)}for(let st=p-1;st>=0;st--){const v=st/p,R=f*Math.cos(v*Math.PI/2),N=_*Math.sin(v*Math.PI/2)+g;for(let z=0,B=J.length;z<B;z++){const Z=it(J[z],gt[z],N);G(Z.x,Z.y,h+R)}for(let z=0,B=A.length;z<B;z++){const Z=A[z];xt=vt[z];for(let Q=0,T=Z.length;Q<T;Q++){const b=it(Z[Q],xt[Q],N);x?G(b.x,b.y+w[u-1].y,w[u-1].x+R):G(b.x,b.y,h+R)}}}rt(),dt();function rt(){const st=s.length/3;if(d){let v=0,R=k*v;for(let N=0;N<tt;N++){const z=H[N];ut(z[2]+R,z[1]+R,z[0]+R)}v=u+p*2,R=k*v;for(let N=0;N<tt;N++){const z=H[N];ut(z[0]+R,z[1]+R,z[2]+R)}}else{for(let v=0;v<tt;v++){const R=H[v];ut(R[2],R[1],R[0])}for(let v=0;v<tt;v++){const R=H[v];ut(R[0]+k*u,R[1]+k*u,R[2]+k*u)}}i.addGroup(st,s.length/3-st,0)}function dt(){const st=s.length/3;let v=0;bt(J,v),v+=J.length;for(let R=0,N=A.length;R<N;R++){const z=A[R];bt(z,v),v+=z.length}i.addGroup(st,s.length/3-st,1)}function bt(st,v){let R=st.length;for(;--R>=0;){const N=R;let z=R-1;z<0&&(z=st.length-1);for(let B=0,Z=u+p*2;B<Z;B++){const Q=k*B,T=k*(B+1),b=v+N+Q,D=v+z+Q,K=v+z+T,q=v+N+T;at(b,D,K,q)}}}function G(st,v,R){c.push(st),c.push(v),c.push(R)}function ut(st,v,R){ht(st),ht(v),ht(R);const N=s.length/3,z=M.generateTopUV(i,s,N-3,N-2,N-1);St(z[0]),St(z[1]),St(z[2])}function at(st,v,R,N){ht(st),ht(v),ht(N),ht(v),ht(R),ht(N);const z=s.length/3,B=M.generateSideWallUV(i,s,z-6,z-3,z-2,z-1);St(B[0]),St(B[1]),St(B[3]),St(B[1]),St(B[2]),St(B[3])}function ht(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function St(st){o.push(st.x),o.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return iT(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wh[s.type]().fromJSON(s)),new Pn(i,t.options)}}const nT={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new ie(o,r),new ie(a,c),new ie(l,u)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],g=t[o*3],p=t[o*3+1],m=t[o*3+2];return Math.abs(a-u)<Math.abs(r-l)?[new ie(r,1-c),new ie(l,1-h),new ie(d,1-_),new ie(g,1-m)]:[new ie(a,1-c),new ie(u,1-h),new ie(f,1-_),new ie(p,1-m)]}};function iT(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ct extends Bn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const u=[],h=new et,d=new et,f=[],_=[],g=[],p=[];for(let m=0;m<=i;m++){const M=[],w=m/i;let x=0;m===0&&r===0?x=.5/e:m===i&&c===Math.PI&&(x=-.5/e);for(let I=0;I<=e;I++){const C=I/e;h.x=-t*Math.cos(s+C*o)*Math.sin(r+w*a),h.y=t*Math.cos(r+w*a),h.z=t*Math.sin(s+C*o)*Math.sin(r+w*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),p.push(C+x,1-w),M.push(l++)}u.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){const w=u[m][M+1],x=u[m][M],I=u[m+1][M],C=u[m+1][M+1];(m!==0||r>0)&&f.push(w,x,C),(m!==i-1||c<Math.PI)&&f.push(x,I,C)}this.setIndex(f),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ct(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xn extends Bn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new et,h=new et,d=new et;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const g=_/s*o,p=f/i*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(g),h.y=(t+e*Math.cos(p))*Math.sin(g),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const g=(s+1)*f+_-1,p=(s+1)*(f-1)+_-1,m=(s+1)*(f-1)+_,M=(s+1)*f+_;r.push(g,p,M),r.push(p,m,M)}this.setIndex(r),this.setAttribute("position",new cn(a,3)),this.setAttribute("normal",new cn(c,3)),this.setAttribute("uv",new cn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Rt extends Yr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ig,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ot extends Rt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ln(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const fl={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class sT{constructor(t,e,i){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],_=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const oT=new sT;class $r{constructor(t){this.manager=t!==void 0?t:oT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}$r.DEFAULT_MATERIAL_NAME="__DEFAULT";const As={};class rT extends Error{constructor(t,e){super(t),this.response=e}}class aT extends $r{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=fl.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(As[t]!==void 0){As[t].push({onLoad:e,onProgress:i,onError:s});return}As[t]=[],As[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=As[t],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const p=new ReadableStream({start(m){M();function M(){h.read().then(({done:w,value:x})=>{if(w)m.close();else{g+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let C=0,E=u.length;C<E;C++){const L=u[C];L.onProgress&&L.onProgress(I)}m.enqueue(x),M()}},w=>{m.error(w)})}}});return new Response(p)}else throw new rT(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{fl.add(t,l);const u=As[t];delete As[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=As[t];if(u===void 0)throw this.manager.itemError(t),l;delete As[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Rg extends $r{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=fl.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=Ba("img");function c(){u(),fl.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(h){u(),s&&s(h),o.manager.itemError(t),o.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class Kr extends $r{constructor(t){super(t)}load(t,e,i,s){const o=new Hd;o.colorSpace=qi;const r=new Rg(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function c(l){r.load(t[l],function(u){o.images[l]=u,a++,a===6&&(o.needsUpdate=!0,e&&e(o))},void 0,s)}for(let l=0;l<t.length;++l)c(l);return o}}class Jn extends $r{constructor(t){super(t)}load(t,e,i,s){const o=new Yn,r=new Rg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}}class Yd extends Nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Nu=new an,l0=new et,u0=new et;class Cg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vd,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;l0.setFromMatrixPosition(t.matrixWorld),e.position.copy(l0),u0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(u0),e.updateMatrixWorld(),Nu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const h0=new an,ra=new et,Ou=new et;class cT extends Cg{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new et(1,0,0),new et(-1,0,0),new et(0,0,1),new et(0,0,-1),new et(0,1,0),new et(0,-1,0)],this._cubeUps=[new et(0,1,0),new et(0,1,0),new et(0,1,0),new et(0,1,0),new et(0,0,1),new et(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ra.setFromMatrixPosition(t.matrixWorld),i.position.copy(ra),Ou.copy(i.position),Ou.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ou),i.updateMatrixWorld(),s.makeTranslation(-ra.x,-ra.y,-ra.z),h0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h0)}}class Li extends Yd{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class lT extends Cg{constructor(){super(new gg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Di extends Yd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new lT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ui extends Yd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ig{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=d0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=d0();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function d0(){return performance.now()}class uT{constructor(){this.type="ShapePath",this.color=new Se,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Xh,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,o,r){return this.currentPath.bezierCurveTo(t,e,i,s,o,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const M=[];for(let w=0,x=m.length;w<x;w++){const I=m[w],C=new Tn;C.curves=I.curves,M.push(C)}return M}function i(m,M){const w=M.length;let x=!1;for(let I=w-1,C=0;C<w;I=C++){let E=M[I],L=M[C],F=L.x-E.x,S=L.y-E.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(E=M[C],F=-F,L=M[I],S=-S),m.y<E.y||m.y>L.y)continue;if(m.y===E.y){if(m.x===E.x)return!0}else{const A=S*(m.x-E.x)-F*(m.y-E.y);if(A===0)return!0;if(A<0)continue;x=!x}}else{if(m.y!==E.y)continue;if(L.x<=m.x&&m.x<=E.x||E.x<=m.x&&m.x<=L.x)return!0}}return x}const s=Tr.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,c;const l=[];if(o.length===1)return a=o[0],c=new Tn,c.curves=a.curves,l.push(c),l;let u=!s(o[0].getPoints());u=t?!u:u;const h=[],d=[];let f=[],_=0,g;d[_]=void 0,f[_]=[];for(let m=0,M=o.length;m<M;m++)a=o[m],g=a.getPoints(),r=s(g),r=t?!r:r,r?(!u&&d[_]&&_++,d[_]={s:new Tn,p:g},d[_].s.curves=a.curves,u&&_++,f[_]=[]):f[_].push({h:a,p:g[0]});if(!d[0])return e(o);if(d.length>1){let m=!1,M=0;for(let w=0,x=d.length;w<x;w++)h[w]=[];for(let w=0,x=d.length;w<x;w++){const I=f[w];for(let C=0;C<I.length;C++){const E=I[C];let L=!0;for(let F=0;F<d.length;F++)i(E.p,d[F].p)&&(w!==F&&M++,L?(L=!1,h[F].push(E)):m=!0);L&&h[w].push(E)}}M>0&&m===!1&&(f=h)}let p;for(let m=0,M=d.length;m<M;m++){c=d[m].s,l.push(c),p=f[m];for(let w=0,x=p.length;w<x;w++)c.holes.push(p[w].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dd);class Ni extends $r{constructor(t){super(t)}load(t,e,i,s){const o=this,r=new aT(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const c=o.parse(JSON.parse(a));e&&e(c)},i,s)}parse(t){return new hT(t)}}class hT{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=dT(t,e,this.data);for(let o=0,r=s.length;o<r;o++)i.push(...s[o].toShapes());return i}}function dT(n,t,e){const i=Array.from(n),s=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,r=[];let a=0,c=0;for(let l=0;l<i.length;l++){const u=i[l];if(u===`
`)a=0,c-=o;else{const h=fT(u,s,a,c,e);a+=h.offsetX,r.push(h.path)}}return r}function fT(n,t,e,i,s){const o=s.glyphs[n]||s.glyphs["?"];if(!o){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const r=new uT;let a,c,l,u,h,d,f,_;if(o.o){const g=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let p=0,m=g.length;p<m;)switch(g[p++]){case"m":a=g[p++]*t+e,c=g[p++]*t+i,r.moveTo(a,c);break;case"l":a=g[p++]*t+e,c=g[p++]*t+i,r.lineTo(a,c);break;case"q":l=g[p++]*t+e,u=g[p++]*t+i,h=g[p++]*t+e,d=g[p++]*t+i,r.quadraticCurveTo(h,d,l,u);break;case"b":l=g[p++]*t+e,u=g[p++]*t+i,h=g[p++]*t+e,d=g[p++]*t+i,f=g[p++]*t+e,_=g[p++]*t+i,r.bezierCurveTo(h,d,f,_,l,u);break}}return{offsetX:o.ha*t,path:r}}class ke extends Pn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const pT=zn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=null,s=Qt(!1),o=Qt(!1),r=Qt(!1);return ti(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?h.rotation.y+=.03:o.value&&(h.rotation.y-=.03),u.render(c,l)};const c=new Zn,l=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),u=new Kn({antialias:!0,alpha:!0});u.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(u.domElement);const h=new Xt,d=new Ui(16777215,2);c.add(d);const f=new Di(16777215,4);f.position.set(5,5,5),c.add(f);const _=new Li(16777215,5,50);_.position.set(0,2,4),c.add(_);const g=new Jn,p=g.load("/3d-bear-arts/assets/lv2.jpg"),m=g.load("/3d-bear-arts/assets/lv2.jpg");p.wrapS=p.wrapT=tn,m.wrapS=m.wrapT=tn;const M=new Ot({color:8343336,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),w=new Ot({color:5978654,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),x=new Ot({color:13152668,metalness:.2,roughness:.05,bumpMap:p,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:m,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:De});new Ot({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const I=new ct(1,32,32,0,Math.PI),C=new y(I,x),E=new y(I,M);C.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),C.position.y=-.2,E.position.y=-.2,C.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const L=new Ce(1,32),F=new y(L,M);F.scale.set(.85,.85,.8),F.position.set(0,-.2,0),F.rotation.y=Math.PI/2;const S=new Xt;S.add(C),S.add(E),S.add(F),h.add(S);const A=new ct(.6,32,32,0,Math.PI),U=new y(A,M);U.scale.set(1,.95,.95),U.position.set(0,1,0),U.rotation.y=Math.PI*1.5;const H=new y(A,x);H.scale.set(1,.95,.95),H.position.set(0,1,0),H.rotation.y=Math.PI/2;const J=new Ce(.6,32),it=new y(J,M);it.position.set(0,1,0),it.rotation.y=Math.PI/2,it.scale.set(1,.95,.95);const k=new Xt;k.add(U),k.add(H),k.add(it),h.add(k);const tt=new ct(.25,32,32),W=new y(tt,M);W.position.set(-.45,1.35,-.1),h.add(W);const gt=new y(tt,x);gt.position.set(.45,1.35,-.1),h.add(gt);const vt=new ct(.25,32,32,Math.PI/2,Math.PI),xt=new y(vt,w);xt.scale.set(1.1,.6,.8),xt.position.set(0,.84,.5),xt.rotation.y=Math.PI;const Dt=new ct(.25,32,32,Math.PI/2,Math.PI),kt=new y(Dt,x);kt.scale.set(1.1,.6,.8),kt.position.set(0,.84,.5),kt.rotation.y=0;const rt=new Ce(.25,32),dt=new y(rt,M);dt.scale.set(.8,.6,.8),dt.position.set(0,.84,.5),dt.rotation.y=Math.PI/2;const bt=new Xt;bt.add(xt),bt.add(kt),bt.add(dt),h.add(bt);const G=new Tn;G.moveTo(0,0),G.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),G.bezierCurveTo(-.6,.3,0,.6,0,1),G.bezierCurveTo(0,.6,.6,.3,.6,0),G.bezierCurveTo(.6,-.3,0,-.3,0,0);const ut={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ot({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const at=new Pn(G,ut),ht=new y(at,M);ht.scale.set(.1,.1,.1),ht.rotation.z=ge.degToRad(210),ht.rotation.x=ge.degToRad(5),ht.rotation.y=ge.degToRad(-45),ht.position.set(-.4,.9,.45);const St=new y(at,w);St.scale.set(.6,.5,.5),St.position.set(.35,0,0),St.rotation.y=Math.PI,St.rotation.x=Math.PI;const st=new y(at,w);st.scale.set(.2,.2,.2),st.position.set(.5,-.1,.2),st.rotation.y=Math.PI,st.rotation.x=Math.PI,h.add(st);const v=new pn(1.3,1.2,.6),R=new y(v,M);R.scale.set(.45,.45,.45),R.position.set(.35,-.2,.1),R.rotation.y=Math.PI;const N=new Xn(.15,.025,10,100);new Ot({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const z=new y(N,M);z.position.set(.35,.1,.1),z.rotation.z=Math.PI/2,z.rotation.x=Math.PI/8,z.rotation.y=Math.PI/14;const B=new y(N,M);B.position.set(.35,.1,.13),B.rotation.z=Math.PI/2,B.rotation.x=Math.PI/-8,B.rotation.y=Math.PI/12;const Z=new Xt;Z.add(R),Z.add(z),Z.add(B),h.add(Z);const Q=new ct(.35,32,32),T=new y(Q,M);T.scale.set(.75,1.25,.65),T.position.set(-.7,-.15,.2),h.add(T);const b=new y(Q,x);b.scale.set(.75,1.25,.65),b.position.set(.7,-.15,.2),h.add(b);const D=new Zt(.2,.22,.6,32),K=new y(D,M);K.position.set(-.4,-1.05,0),h.add(K);const q=new y(D,x);q.position.set(.4,-1.05,0),h.add(q);const j=new ct(.3,32,32),ft=new y(j,M);ft.scale.set(1,.72,1.5),ft.position.set(-.4,-1.45,.17),h.add(ft);const lt=new y(j,x);lt.scale.set(1,.72,1.5),lt.position.set(.4,-1.45,.17),h.add(lt);const _t=new ct(.44,32,32),At=new y(_t,M);At.position.set(-.15,-.45,-.4),h.add(At);const pt=new y(_t,x);pt.position.set(.15,-.45,-.4),h.add(pt);const yt=new ct(.18,32,32),Nt=new y(yt,M);Nt.position.set(0,-.35,-.8),h.add(Nt),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(nt){const Tt=new ke("X",{font:nt,size:.2,depth:.05});new ps({color:0});const Et=new y(Tt,w);Et.position.set(-.3,.99,.53),Et.rotation.x=ge.degToRad(-5),Et.rotation.y=ge.degToRad(-15),h.add(Et);const Yt=new ke("O",{font:nt,size:.2,depth:.05});new ps({color:0});const oe=new y(Yt,w);oe.position.set(.14,.99,.53),oe.rotation.y=ge.degToRad(12),oe.rotation.x=ge.degToRad(-5),h.add(oe)}),Nt.renderOrder=1,h.scale.set(1.35,1.35,1.35),c.add(h),h.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const It=()=>{h.rotation.y,h.rotation.x},ee=()=>{s.value=!0,o.value=!1,r.value=!1},Ht=()=>{s.value=!1,o.value=!0,r.value=!1},te=()=>{s.value=!1,o.value=!1,It()},X=nt=>{const Tt=window.innerWidth/2;nt>Tt?ee():Ht(),It()},Mt=nt=>{clearTimeout(i),te(),r.value=!0;const Tt={x:nt.clientX/window.innerWidth*2-1,y:-(nt.clientY/window.innerHeight)*2+1};if(r.value){const Et=Tt.x*Math.PI*.2,Yt=Tt.y*Math.PI*.2;h.rotation.y=Et,h.rotation.x=Yt}i=setTimeout(()=>{r.value=!1,X(nt.clientX)},500)};window.addEventListener("mousemove",Mt);const ot=nt=>{if(r.value){const Tt={x:nt.clientX/window.innerWidth*2-1,y:-(nt.clientY/window.innerHeight)*2+1},Et=Tt.x*Math.PI*.2,Yt=Tt.y*Math.PI*.2;h.rotation.y=Et,h.rotation.x=Yt}};window.addEventListener("mousemove",ot),a(),Ve(()=>t.bodyPosition,nt=>{h.position.set(nt.x,nt.y,nt.z)}),Ve(()=>t.cameraPosition,nt=>{l.position.set(t.bodyPosition.x,1,nt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(ei(),li("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2))}}),mT=ui(pT,[["__scopeId","data-v-f3beb116"]]),gT=zn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=null,s=Qt(!1),o=Qt(!1),r=Qt(!1);return ti(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?h.rotation.y+=.03:o.value&&(h.rotation.y-=.03),u.render(c,l)};const c=new Zn,l=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),u=new Kn({antialias:!0,alpha:!0});u.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(u.domElement);const h=new Xt,d=new Ui(16777215,2);c.add(d);const f=new Di(16777215,4);f.position.set(5,5,5),c.add(f);const _=new Li(16777215,5,50);_.position.set(0,2,4),c.add(_);const g=new Jn,p=g.load("/3d-bear-arts/assets/pop6.jpg"),m=g.load("/3d-bear-arts/assets/pop7.jpg");p.wrapS=p.wrapT=tn,m.wrapS=m.wrapT=tn;const M=new Ot({color:16738740,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),w=new Ot({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:De}),x=new Ot({color:16766720,map:p,metalness:.3,roughness:.5}),I=new Ot({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:De}),C=new Ot({color:9055202,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ot({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:De});const E=new Ot({color:65535,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),L=new Ot({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:De}),F=new ct(1,32,32,0,Math.PI),S=new y(F,w),A=new y(F,M);S.scale.set(.85,.85,.8),A.scale.set(.85,.85,.8),S.position.y=-.2,A.position.y=-.2,S.rotation.y=Math.PI/2,A.rotation.y=Math.PI*1.5;const U=new Ce(1,32),H=new y(U,M);H.scale.set(.85,.85,.8),H.position.set(0,-.2,0),H.rotation.y=Math.PI/2;const J=new Xt;J.add(S),J.add(A),J.add(H),h.add(J);const it=new ct(.6,32,32,0,Math.PI),k=new y(it,x);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI*1.5;const tt=new y(it,I);tt.scale.set(1,.95,.95),tt.position.set(0,1,0),tt.rotation.y=Math.PI/2;const W=new Ce(.6,32),gt=new y(W,x);gt.position.set(0,1,0),gt.rotation.y=Math.PI/2,gt.scale.set(1,.95,.95);const vt=new Xt;vt.add(k),vt.add(tt),vt.add(gt),h.add(vt);const xt=new ct(.25,32,32),Dt=new y(xt,M);Dt.position.set(-.45,1.35,-.1),h.add(Dt);const kt=new y(xt,w);kt.position.set(.45,1.35,-.1),h.add(kt);const rt=new ct(.25,32,32,Math.PI/2,Math.PI),dt=new y(rt,x);dt.scale.set(1.1,.6,.8),dt.position.set(0,.84,.5),dt.rotation.y=Math.PI;const bt=new ct(.25,32,32,Math.PI/2,Math.PI),G=new y(bt,I);G.scale.set(1.1,.6,.8),G.position.set(0,.84,.5),G.rotation.y=0;const ut=new Ce(.25,32),at=new y(ut,x);at.scale.set(.8,.6,.8),at.position.set(0,.84,.5),at.rotation.y=Math.PI/2;const ht=new Xt;ht.add(dt),ht.add(G),ht.add(at),h.add(ht);const St=new Tn;St.moveTo(0,0),St.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),St.bezierCurveTo(-.6,.3,0,.6,0,1),St.bezierCurveTo(0,.6,.6,.3,.6,0),St.bezierCurveTo(.6,-.3,0,-.3,0,0);const st={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new Pn(St,st),R=new y(v,x);R.scale.set(.5,.5,.5),R.position.set(.35,0,0),R.rotation.y=Math.PI,R.rotation.x=Math.PI,h.add(R);const N=new y(v,E);N.scale.set(.2,.2,.25),N.position.set(.5,-.3,.4),N.rotation.y=Math.PI,N.rotation.x=Math.PI,h.add(N);const z=new y(v,M);z.scale.set(.25,.25,.27),z.position.set(.4,.3,-.2),z.rotation.y=Math.PI,z.rotation.x=Math.PI,h.add(z);const B=new ct(.35,32,32),Z=new y(B,E);Z.scale.set(.75,1.25,.65),Z.position.set(-.7,-.15,.2),h.add(Z);const Q=new y(B,L);Q.scale.set(.75,1.25,.65),Q.position.set(.7,-.15,.2),h.add(Q);const T=new Zt(.2,.22,.6,32),b=new y(T,x);b.position.set(-.4,-1.05,0),h.add(b);const D=new y(T,I);D.position.set(.4,-1.05,0),h.add(D);const K=new ct(.3,32,32),q=new y(K,x);q.scale.set(1,.72,1.5),q.position.set(-.4,-1.45,.17),h.add(q);const j=new y(K,I);j.scale.set(1,.72,1.5),j.position.set(.4,-1.45,.17),h.add(j);const ft=new ct(.44,32,32),lt=new y(ft,M);lt.position.set(-.15,-.45,-.4),h.add(lt);const _t=new y(ft,w);_t.position.set(.15,-.45,-.4),h.add(_t);const At=new ct(.18,32,32),pt=new y(At,M);pt.position.set(0,-.35,-.8),h.add(pt),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Mt){const ot=new ke("X",{font:Mt,size:.2,depth:.05});new ps({color:0});const nt=new y(ot,M);nt.position.set(-.3,.99,.53),nt.rotation.x=ge.degToRad(-5),nt.rotation.y=ge.degToRad(-15),h.add(nt);const Tt=new ke("O",{font:Mt,size:.2,depth:.05});new ps({color:0});const Et=new y(Tt,E);Et.position.set(.14,.99,.53),Et.rotation.y=ge.degToRad(12),Et.rotation.x=ge.degToRad(-5),h.add(Et);const Yt=new ke("POP",{font:Mt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),oe=new Ot({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ot({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ce=new Ot({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),le=new Ot({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ue=new y(Yt,oe);ue.scale.set(.15,.15,.15),ue.position.set(.03,1.16,.1),ue.rotateZ(-25),h.add(ue);const ve=new y(Yt,C);ve.scale.set(.14,.14,.14),ve.rotateZ(45),ve.position.set(.2,-.7,.3),h.add(ve);const be=new y(Yt,ce);be.scale.set(.14,.14,.14),be.rotateZ(45),be.rotateY(45),be.position.set(.3,.7,.3),h.add(be);const Vt=new y(Yt,ce);Vt.scale.set(.15,.15,.15),Vt.rotateZ(45),Vt.rotateY(45),Vt.position.set(.35,-1.5,.3),h.add(Vt);const qt=new y(Yt,le);qt.scale.set(.17,.17,.17),qt.rotateZ(45),qt.rotateY(15),qt.position.set(.35,1,.3),h.add(qt)}),pt.renderOrder=1,h.scale.set(1.35,1.35,1.35),c.add(h),h.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Nt=()=>{h.rotation.y,h.rotation.x},Gt=()=>{s.value=!0,o.value=!1,r.value=!1},It=()=>{s.value=!1,o.value=!0,r.value=!1},ee=()=>{s.value=!1,o.value=!1,Nt()},Ht=Mt=>{const ot=window.innerWidth/2;Mt>ot?Gt():It(),Nt()},te=Mt=>{clearTimeout(i),ee(),r.value=!0;const ot={x:Mt.clientX/window.innerWidth*2-1,y:-(Mt.clientY/window.innerHeight)*2+1};if(r.value){const nt=ot.x*Math.PI*.2,Tt=ot.y*Math.PI*.2;h.rotation.y=nt,h.rotation.x=Tt}i=setTimeout(()=>{r.value=!1,Ht(Mt.clientX)},500)};window.addEventListener("mousemove",te);const X=Mt=>{if(r.value){const ot={x:Mt.clientX/window.innerWidth*2-1,y:-(Mt.clientY/window.innerHeight)*2+1},nt=ot.x*Math.PI*.2,Tt=ot.y*Math.PI*.2;h.rotation.y=nt,h.rotation.x=Tt}};window.addEventListener("mousemove",X),a(),Ve(()=>t.bodyPosition,Mt=>{h.position.set(Mt.x,Mt.y,Mt.z)}),Ve(()=>t.cameraPosition,Mt=>{l.position.set(t.bodyPosition.x,1,Mt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(ei(),li("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2))}}),_T=ui(gT,[["__scopeId","data-v-8cfea564"]]),vT={class:"pixel-controls"},yT={class:"side-buttons"},xT=zn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);ti(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03);const nt=Mt.getElapsedTime();X.forEach((Tt,Et)=>{const Yt=.2+Math.sin(nt*3+ot[Et])*.1;Tt.scale.set(Yt,Yt,Yt)}),g.render(f,_)};const f=new Zn,_=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),g=new Kn({antialias:!0,alpha:!0});g.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(g.domElement);const p=new Xt,m=new Xt;f.add(m);const M=new Ui(16777215,2);f.add(M);const w=new Di(16777215,4);w.position.set(5,5,5),f.add(w);const x=new Li(16777215,5,50);x.position.set(0,2,4),f.add(x);const I=new Jn,C=I.load("/3d-bear-arts/assets/pop6.jpg"),E=I.load("/3d-bear-arts/assets/pop7.jpg");C.wrapS=C.wrapT=tn,E.wrapS=E.wrapT=tn,E.repeat.set(2,2);const L=new Ot({color:16738740,map:E,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),F=new Ot({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:De}),S=new Ot({color:16766720,map:C,metalness:.3,roughness:.5}),A=new Ot({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:De}),U=new Ot({color:9055202,map:C,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),H=new Ot({color:65535,map:C,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new Ot({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:De}),it=new ct(1,32,32,0,Math.PI),k=new y(it,F),tt=new y(it,L);k.scale.set(.85,.85,.8),tt.scale.set(.85,.85,.8),k.position.y=-.2,tt.position.y=-.2,k.rotation.y=Math.PI/2,tt.rotation.y=Math.PI*1.5;const W=new Ce(1,32),gt=new y(W,L);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const vt=new Xt;vt.add(k),vt.add(tt),vt.add(gt),p.add(vt);const xt=new ct(.6,32,32,0,Math.PI),Dt=new y(xt,S);Dt.scale.set(1,.95,.95),Dt.position.set(0,1,0),Dt.rotation.y=Math.PI*1.5;const kt=new y(xt,A);kt.scale.set(1,.95,.95),kt.position.set(0,1,0),kt.rotation.y=Math.PI/2;const rt=new Ce(.6,32),dt=new y(rt,S);dt.position.set(0,1,0),dt.rotation.y=Math.PI/2,dt.scale.set(1,.95,.95);const bt=new Xt;bt.add(Dt),bt.add(kt),bt.add(dt),p.add(bt);const G=new ct(.25,32,32),ut=new y(G,L);ut.position.set(-.45,1.35,-.1),p.add(ut);const at=new y(G,F);at.position.set(.45,1.35,-.1),p.add(at);const ht=new ct(.25,32,32,Math.PI/2,Math.PI),St=new y(ht,S);St.scale.set(1.1,.6,.8),St.position.set(0,.84,.5),St.rotation.y=Math.PI;const st=new ct(.25,32,32,Math.PI/2,Math.PI),v=new y(st,A);v.scale.set(1.1,.6,.8),v.position.set(0,.84,.5),v.rotation.y=0;const R=new Ce(.25,32),N=new y(R,S);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const z=new Xt;z.add(St),z.add(v),z.add(N),p.add(z);const B=new Tn;B.moveTo(0,0),B.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),B.bezierCurveTo(-.6,.3,0,.6,0,1),B.bezierCurveTo(0,.6,.6,.3,.6,0),B.bezierCurveTo(.6,-.3,0,-.3,0,0);const Z={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Q=new Pn(B,Z),T=new y(Q,S);T.scale.set(.5,.5,.5),T.position.set(.3,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,p.add(T);const b=new y(Q,H);b.scale.set(.2,.2,.25),b.position.set(.35,-.3,.4),b.rotation.y=Math.PI,b.rotation.x=Math.PI,p.add(b);const D=new y(Q,L);D.scale.set(.25,.25,.27),D.position.set(.38,.3,-.2),D.rotation.y=Math.PI,D.rotation.x=Math.PI,p.add(D);const K=new ct(.35,32,32),q=new y(K,H);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),p.add(q);const j=new y(K,J);j.scale.set(.75,1.25,.65),j.position.set(.7,-.15,.2),p.add(j);const ft=new Zt(.2,.22,.6,32),lt=new y(ft,S);lt.position.set(-.4,-1.05,0),p.add(lt);const _t=new y(ft,A);_t.position.set(.4,-1.05,0),p.add(_t);const At=new ct(.3,32,32),pt=new y(At,S);pt.scale.set(1,.72,1.5),pt.position.set(-.4,-1.45,.17),p.add(pt);const yt=new y(At,A);yt.scale.set(1,.72,1.5),yt.position.set(.4,-1.45,.17),p.add(yt);const Nt=new ct(.44,32,32),Gt=new y(Nt,L);Gt.position.set(-.15,-.45,-.4),p.add(Gt);const It=new y(Nt,F);It.position.set(.15,-.45,-.4),p.add(It);const ee=new ct(.18,32,32),Ht=new y(ee,L);Ht.position.set(0,-.35,-.8),p.add(Ht),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(nt){const Tt=new ke("X",{font:nt,size:.2,depth:.05}),Et=new y(Tt,L);Et.position.set(-.3,.99,.53),Et.rotation.x=ge.degToRad(-5),Et.rotation.y=ge.degToRad(-15),p.add(Et);const Yt=new ke("O",{font:nt,size:.2,depth:.05}),oe=new y(Yt,H);oe.position.set(.14,.99,.53),oe.rotation.y=ge.degToRad(12),oe.rotation.x=ge.degToRad(-5),p.add(oe);const ce=new ke("POP",{font:nt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new ke("🐻",{font:nt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const le=new ke("BAO      BEAR",{font:nt,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),ue=new Ot({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ot({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ve=new Ot({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),be=new Ot({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),Vt=new y(ce,ue);Vt.scale.set(.15,.15,.15),Vt.position.set(.02,1.16,.1),Vt.rotateZ(-25),p.add(Vt);const qt=new y(ce,U);qt.scale.set(.14,.14,.14),qt.rotateZ(45),qt.position.set(.2,-.7,.3),p.add(qt);const $t=new y(ce,ve);$t.scale.set(.14,.14,.14),$t.rotateZ(45),$t.rotateY(45),$t.position.set(.3,.7,.3),p.add($t);const re=new y(ce,ve);re.scale.set(.15,.15,.15),re.rotateZ(45),re.rotateY(45),re.position.set(.35,-1.5,.3),p.add(re);const he=new y(ce,be);he.scale.set(.17,.17,.17),he.rotateZ(45),he.rotateY(15),he.position.set(.35,1,.3),p.add(he);const de=new y(le,ue);de.scale.set(.7,.7,.7),de.position.set(-6,0,-3),m.add(de)}),Ht.renderOrder=1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,p.rotation.x=.1;const X=[T,b,D],Mt=new Ig,ot=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),Ve(()=>t.bodyPosition,nt=>{p.position.set(nt.x,nt.y,nt.z)}),Ve(()=>t.cameraPosition,nt=>{_.position.set(t.bodyPosition.x,1,nt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),g.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function u(){r.value=!0}function h(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(ei(),li(En,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",vT,[Ft("button",{class:"pixel-btn up",onMousedown:l,onMouseup:h},"UP",32),Ft("div",yT,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:h},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:c,onMouseup:h},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:u,onMouseup:h},"DOWN",32)])],64))}}),wT=ui(xT,[["__scopeId","data-v-cb52c927"]]),MT={class:"pixel-controls"},ST={class:"side-buttons"},bT=zn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);ti(()=>{if(e.value){let d=function(ve,be){const Vt=new Zt(te,te,X,32);Vt.rotateX(Math.PI/2);const qt=new y(Vt,ve),$t=new Xt;for(let he=0;he<Mt;he++){const de=he/Mt*Math.PI*2,ye=new pn(ot,nt,Tt),_e=new y(ye,ve);_e.position.set((te+Tt/26)*Math.cos(de),(te+Tt/26)*Math.sin(de),0),_e.rotation.z=de,$t.add(_e)}const re=new Xt;return re.add(qt),re.add($t),re.position.set(be.x,be.y,be.z),re},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),Et.rotation.z-=.02,Yt.rotation.z+=.03,oe.rotation.z+=.02,ce.rotation.z+=.02,le.rotation.z-=.03,ue.rotation.y+=.04,p.render(_,g)};const _=new Zn,g=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),p=new Kn({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new Xt,M=new Xt;_.add(M);const w=new Ui(16777215,2);_.add(w);const x=new Di(16777215,4);x.position.set(5,5,5),_.add(x);const I=new Li(16777215,5,50);I.position.set(0,2,4),_.add(I);const C=new Jn,E=C.load("/3d-bear-arts/assets/metal.jpg"),L=C.load("/3d-bear-arts/assets/pop7.jpg"),F=C.load("/3d-bear-arts/assets/gear.jpg");E.wrapS=E.wrapT=tn,L.wrapS=L.wrapT=tn,L.repeat.set(2,2);const S=new Ot({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:E});F.mapping=cl;const A=new Ot({color:"#d3d3d3",metalness:1,roughness:.25,map:E,envMap:F,clearcoat:.7,clearcoatRoughness:.3}),U=new Ot({color:"#C0C0C0",metalness:1,roughness:.25,envMap:F,clearcoat:.7,clearcoatRoughness:.3}),H=new Ot({color:"#C0C0C0",metalness:1,roughness:.25,map:E,envMap:F,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),J=new Ot({color:"#C0C0C0",metalness:1,roughness:.5,map:E,envMap:F,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),it=new Ot({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:De});new Ot({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const k=new Ot({color:"#d3d3d3",metalness:1,roughness:.2,map:F,envMap:F,clearcoat:.7,clearcoatRoughness:.3});new Ot({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:F}),new Ot({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:E,transparent:!0,opacity:.3});const tt=new ct(1,32,32,0,Math.PI),W=new y(tt,J),gt=new y(tt,A);W.scale.set(.85,.85,.8),gt.scale.set(.85,.85,.8),W.position.y=-.2,gt.position.y=-.2,W.rotation.y=Math.PI/2,gt.rotation.y=Math.PI*1.5;const vt=new Ce(1,32),xt=new y(vt,H);xt.scale.set(.85,.85,.8),xt.position.set(0,-.2,0),xt.rotation.y=Math.PI/2;const Dt=new Xt;Dt.add(W),Dt.add(gt),Dt.add(xt),m.add(Dt);const kt=new ct(.6,32,32,0,Math.PI),rt=new y(kt,A);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI*1.5;const dt=new y(kt,J);dt.scale.set(1,.95,.95),dt.position.set(0,1,0),dt.rotation.y=Math.PI/2;const bt=new Ce(.6,32),G=new y(bt,H);G.position.set(0,1,0),G.rotation.y=Math.PI/2,G.scale.set(1,.95,.95);const ut=new Xt;ut.add(rt),ut.add(dt),ut.add(G),m.add(ut);const at=new ct(.25,32,32),ht=new y(at,A);ht.position.set(-.45,1.35,-.1),m.add(ht);const St=new y(at,H);St.position.set(.45,1.35,-.1),m.add(St);const st=new ct(.25,32,32,Math.PI/2,Math.PI),v=new y(st,A);v.scale.set(1.1,.6,.8),v.position.set(0,.84,.5),v.rotation.y=Math.PI;const R=new ct(.25,32,32,Math.PI/2,Math.PI),N=new y(R,H);N.scale.set(1.1,.6,.8),N.position.set(0,.84,.5),N.rotation.y=0;const z=new Ce(.25,32),B=new y(z,it);B.scale.set(.8,.6,.8),B.position.set(0,.84,.5),B.rotation.y=Math.PI/2;const Z=new Xt;Z.add(v),Z.add(N),Z.add(B),m.add(Z);const Q=new Tn;Q.moveTo(0,0),Q.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Q.bezierCurveTo(-.6,.3,0,.6,0,1),Q.bezierCurveTo(0,.6,.6,.3,.6,0),Q.bezierCurveTo(.6,-.3,0,-.3,0,0);const T={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},b=new Pn(Q,T),D=new ct(.35,32,32),K=new y(D,A);K.scale.set(.75,1.25,.65),K.position.set(-.7,-.15,.2),m.add(K);const q=new y(D,H);q.scale.set(.75,1.25,.65),q.position.set(.7,-.15,.2),m.add(q);const j=new Zt(.2,.22,.6,32),ft=new y(j,A);ft.position.set(-.4,-1.05,0),m.add(ft);const lt=new y(j,H);lt.position.set(.4,-1.05,0),m.add(lt);const _t=new ct(.3,32,32),At=new y(_t,A);At.scale.set(1,.72,1.5),At.position.set(-.4,-1.45,.17),m.add(At);const pt=new y(_t,H);pt.scale.set(1,.72,1.5),pt.position.set(.4,-1.45,.17),m.add(pt);const yt=new ct(.44,32,32),Nt=new y(yt,A);Nt.position.set(-.15,-.45,-.4),m.add(Nt);const Gt=new y(yt,J);Gt.position.set(.15,-.45,-.4),m.add(Gt);const It=new ct(.18,32,32),ee=new y(It,A);ee.position.set(0,-.35,-.8),m.add(ee),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ve){const be=new ke("X",{font:ve,size:.2,depth:.05});new ps({color:0});const Vt=new y(be,S);Vt.position.set(-.3,.99,.53),Vt.rotation.x=ge.degToRad(-5),Vt.rotation.y=ge.degToRad(-15),m.add(Vt);const qt=new ke("O",{font:ve,size:.2,depth:.05});new ps({color:0});const $t=new y(qt,S);$t.position.set(.14,.99,.53),$t.rotation.y=ge.degToRad(12),$t.rotation.x=ge.degToRad(-5),m.add($t)}),ee.renderOrder=1;const te=1.2,X=.5,Mt=8,ot=.7,nt=.3,Tt=.5,Et=d(k,{x:-2,y:0,z:0}),Yt=d(k,{x:0,y:0,z:0}),oe=d(k,{x:2,y:0,z:0}),ce=d(k,{x:2,y:0,z:0}),le=d(k,{x:2,y:-2,z:0}),ue=new y(b,U);ue.scale.set(.3,.3,.3),ue.position.set(.25,1.1,0),ue.rotation.y=Math.PI,ue.rotation.x=Math.PI,m.add(ue),Et.position.set(.35,0,0),Yt.position.set(.25,-.3,.4),oe.position.set(.3,.3,-.2),ce.position.set(.25,.17,.4),le.position.set(.5,-.3,.45),Et.scale.set(.2,.2,.2),Yt.scale.set(.18,.18,.18),oe.scale.set(.15,.15,.15),ce.scale.set(.17,.17,.17),le.scale.set(.15,.15,.15),Yt.rotation.z=Math.PI/4,oe.rotation.z=-Math.PI/4,ce.rotation.y=-Math.PI/2,le.rotation.y=-Math.PI/2,m.add(Et),m.add(Yt),m.add(oe),m.add(ce),m.add(le),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),g.position.set(t.bodyPosition.x,1,t.cameraPosition),g.lookAt(t.bodyPosition.x,0,0),g.position.z=4,f(),Ve(()=>t.bodyPosition,ve=>{m.position.set(ve.x,ve.y,ve.z)}),Ve(()=>t.cameraPosition,ve=>{g.position.set(t.bodyPosition.x,1,ve),g.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{g.aspect=window.innerWidth/window.innerHeight,g.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function u(){r.value=!0}function h(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(ei(),li(En,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",MT,[Ft("button",{class:"pixel-btn up",onMousedown:l,onMouseup:h},"UP",32),Ft("div",ST,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:h},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:c,onMouseup:h},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:u,onMouseup:h},"DOWN",32)])],64))}}),ET=ui(bT,[["__scopeId","data-v-9a57b6d8"]]),TT={class:"pixel-controls"},AT={class:"side-buttons"},PT={class:"directional-buttons"},RT={class:"horizontal-buttons"},CT={class:"directional-buttons-woman"},IT={class:"horizontal-buttons-woman"},LT={class:"directional-buttons-kid"},DT={class:"horizontal-buttons-kid"},zc=.1,Gc=.05,kc=.08,UT=zn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);const a=yr(null),c=Qt(!1),l=Qt(!1),u=Qt(!1),h=Qt(!1),d=yr(null),f=yr(null),_=Qt(!1),g=Qt(!1),p=Qt(!1),m=Qt(!1),M=Qt(!1),w=Qt(!1),x=Qt(!1),I=Qt(!1),C=new Kn({antialias:!0});C.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(C.domElement);const E=new Zn,L=new $e(75,window.innerWidth/window.innerHeight,.1,1e3);L.position.z=5,ti(()=>{if(e.value){let st=function(){const Pt=new Xt,Ee=new ct(.2,32,32),Pe=new Rt({color:16767916}),Me=new y(Ee,Pe);Me.position.set(0,1.5,0),Pt.add(Me);const Be=new ct(.21,32,32,0,Math.PI*2,0,Math.PI/2),xe=new Rt({color:16711680}),Oe=new y(Be,xe);Oe.position.set(0,1.58,0),Pt.add(Oe);const Ye=new Zt(.25,.25,.6,32),Ne=new Rt({color:16767916}),We=new y(Ye,Ne);We.position.set(0,1,0),Pt.add(We);const sn=new Zt(.26,.26,.3,32),Ke=new Rt({color:255}),_n=new y(sn,Ke);_n.position.set(0,.65,0),Pt.add(_n);const dn=new Zt(.1,.1,.5,32),en=new Rt({color:16767916}),ln=new y(dn,en);ln.position.set(-.15,.25,0),Pt.add(ln);const on=new y(dn,en);on.position.set(.15,.25,0),Pt.add(on);const wn=new Zt(.08,.08,.5,32),An=new y(wn,en);An.position.set(-.35,1.3,0),An.rotation.z=Math.PI/4,Pt.add(An);const Gn=new y(wn,en);return Gn.position.set(.35,1.3,0),Gn.rotation.z=-Math.PI/4,Pt.add(Gn),Pt.scale.set(.27,.27,.27),Pt.position.set(-.2,-.1,-.15),Pt},v=function(){const Pt=new Xt,Ee=new ct(.18,32,32),Pe=new Rt({color:16767916}),Me=new y(Ee,Pe);Me.position.set(0,1.2,.04),Pt.add(Me);const Be=new ct(.19,32,32,.4,Math.PI*2,0,Math.PI/2),xe=new Zt(.18,.18,.4,32),Oe=new Rt({color:9127187}),Ye=new y(Be,Oe);Ye.position.set(0,1.28,0),Pt.add(Ye);const Ne=new y(xe,Oe);Ne.position.set(0,1.1,-.01),Pt.add(Ne);const We=new Zt(.18,.2,.5,32),sn=new Rt({color:16767916}),Ke=new y(We,sn);Ke.position.set(0,.85,0),Pt.add(Ke);const _n=new ct(.08,32,32,0,Math.PI),dn=new Rt({color:16738740}),en=new y(_n,dn);en.position.set(-.09,.98,.15),Pt.add(en);const ln=new y(_n,dn);ln.position.set(.09,.98,.15),Pt.add(ln);const on=new Zt(.22,.22,.25,32),wn=new Rt({color:16738740}),An=new y(on,wn);An.position.set(0,.6,0),Pt.add(An);const Gn=new Zt(.1,.1,.6,32),ts=new Rt({color:16767916}),_s=new y(Gn,ts);_s.position.set(-.09,.5,.2),_s.rotation.x=Math.PI/2,Pt.add(_s);const vs=new y(Gn,ts);vs.position.set(.09,.5,.2),vs.rotation.x=Math.PI/2,Pt.add(vs);const ys=new Zt(.08,.08,.35,32),es=new y(ys,ts);es.position.set(-.24,.95,.18),es.rotation.x=Math.PI/2,Pt.add(es);const Hi=new y(ys,ts);return Hi.position.set(.2,.85,0),Hi.rotation.z=Math.PI/20,Pt.add(Hi),Pt.scale.set(.27,.27,.27),Pt.position.set(.2,-.15,-.32),Pt},R=function(){const Pt=new Xt,Ee=new ct(.2,32,32),Pe=new Rt({color:16767916}),Me=new y(Ee,Pe);Me.position.set(0,1.5,0),Pt.add(Me);const Be=new ct(.21,32,32,0,Math.PI*2,0,Math.PI/2),xe=new Rt({color:25600}),Oe=new y(Be,xe);Oe.position.set(0,1.58,0),Pt.add(Oe);const Ye=new Zt(.22,.22,.5,32),Ne=new Rt({color:16767916}),We=new y(Ye,Ne);We.position.set(0,1,0),Pt.add(We);const sn=new Zt(.23,.23,.3,32),Ke=new Rt({color:8388736}),_n=new y(sn,Ke);_n.position.set(0,.65,0),Pt.add(_n);const dn=new Zt(.1,.1,.5,32),en=new Rt({color:16767916}),ln=new y(dn,en);ln.position.set(-.15,.3,-.25),ln.rotation.x=Math.PI/6,Pt.add(ln);const on=new y(dn,en);on.position.set(.15,.3,.25),on.rotation.x=-Math.PI/6,Pt.add(on);const wn=new Zt(.08,.08,.4,32),An=new y(wn,en);An.position.set(-.28,1,-.2),An.rotation.x=Math.PI/6,Pt.add(An);const Gn=new y(wn,en);return Gn.position.set(.28,1.3,.1),Gn.rotation.z=-Math.PI/8,Pt.add(Gn),Pt.scale.set(.15,.15,.15),Pt.position.set(.3,-.25,.25),Pt.rotation.x=Math.PI/12,Pt.rotation.y=Math.PI/2,Pt.rotation.z=-Math.PI/3,Pt},N=function(Pt){let Ee=1,Pe=0;function Me(){requestAnimationFrame(Me),Pt.position.x+=.01*Ee,Pt.position.x>=.35?(Ee=-1,Pt.rotation.y=Math.PI):Pt.position.x<=-.35&&(Ee=1,Pt.rotation.y=0),Pe+=.003,Pt.position.y=-.4+Math.sin(Pe)*.1,Q.render(B,Z)}Me()},z=function(){requestAnimationFrame(z),i.value&&(T.rotation.y+=.03),s.value&&(T.rotation.y-=.03),o.value&&(T.rotation.x-=.03),r.value&&(T.rotation.x+=.03),Vt.uniforms.u_time.value+=.25,Y.rotation.y+=.04,Q.render(B,Z)};const B=new Zn,Z=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),Q=new Kn({antialias:!0,alpha:!0});Q.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(Q.domElement);const T=new Xt,b=new Xt;B.add(b);const D=new Ui(16777215,2);B.add(D);const K=new Di(16777215,4);K.position.set(5,5,5),B.add(K);const q=new Li(16777215,5,50);q.position.set(0,2,4),B.add(q);const j=new Jn,ft=j.load("/3d-bear-arts/assets/beach.jpg");ft.repeat.set(.8,1);const lt=j.load("/3d-bear-arts/assets/sun.jpg");ft.wrapS=ft.wrapT=tn,ft.repeat.set(.8,1),lt.wrapS=lt.wrapT=tn;const _t=new Ot({color:11592447,map:ft,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),At=new Ot({color:11592447,map:ft,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:De,ior:1.33,depthWrite:!1,depthTest:!0}),pt=new Ot({color:11592447,map:ft,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),yt=new Ot({color:11592447,map:ft,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:De}),Nt=new Ot({color:11592447,map:ft,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:De,ior:1.33}),Gt=new Ot({color:11592447,map:ft,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),It=new ct(1,32,32,0,Math.PI),ee=new y(It,yt),Ht=new y(It,At);ee.scale.set(.85,.85,.8),Ht.scale.set(.85,.85,.8),ee.position.y=-.2,Ht.position.y=-.2,ee.rotation.y=Math.PI/2,Ht.rotation.y=Math.PI*1.5;const te=new Ce(1,32),X=new y(te,_t);X.scale.set(.85,.85,.8),X.position.set(0,-.2,0),X.rotation.y=Math.PI/2;const Mt=new Xt;Mt.add(ee),Mt.add(Ht),Mt.add(X),T.add(Mt);const ot=new ct(.6,32,32,0,Math.PI),nt=new y(ot,_t);nt.scale.set(1,.95,.95),nt.position.set(0,1,0),nt.rotation.y=Math.PI*1.5;const Tt=new y(ot,pt);Tt.scale.set(1,.95,.95),Tt.position.set(0,1,0),Tt.rotation.y=Math.PI/2;const Et=new Ce(.6,32),Yt=new y(Et,_t);Yt.position.set(0,1,0),Yt.rotation.y=Math.PI/2,Yt.scale.set(1,.95,.95);const oe=new Xt;oe.add(nt),oe.add(Tt),oe.add(Yt),T.add(oe);const ce=new ct(.6,32,32,0,Math.PI*2,0,Math.PI/2),le=new Ot({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ue=new y(ce,le);ue.position.set(0,-.2,0),ue.rotation.x=Math.PI,ue.scale.set(1.25,1.25,1.25),Mt.add(ue);const ve=new Ot({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:De,transparent:!0,opacity:.7,depthWrite:!1}),be=new y(te,ve);be.scale.set(.7,.7,.7),be.position.set(0,-.3,0),be.rotation.x=Math.PI/2,be.renderOrder=1,Mt.add(be),T.add(Mt);const Vt=new hn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),qt=new y(te,Vt);qt.position.set(0,-.3,0),qt.scale.set(.7,.7,.7),qt.rotation.x=-Math.PI/2,qt.renderOrder=1,Mt.add(qt);const $t=new ct(.25,32,32),re=new y($t,Nt);re.position.set(-.45,1.35,-.1),T.add(re);const he=new y($t,pt);he.position.set(.45,1.35,-.1),T.add(he);const de=new ct(.25,32,32,Math.PI/2,Math.PI),ye=new y(de,Nt);ye.scale.set(1.1,.6,.8),ye.position.set(0,.84,.5),ye.rotation.y=Math.PI;const _e=new ct(.25,32,32,Math.PI/2,Math.PI),we=new y(_e,pt);we.scale.set(1.1,.6,.8),we.position.set(0,.84,.5),we.rotation.y=0;const Ue=new Ce(.25,32),Te=new y(Ue,At);Te.scale.set(.8,.6,.8),Te.position.set(0,.84,.5),Te.rotation.y=Math.PI/2;const wt=new Xt;wt.add(ye),wt.add(we),wt.add(Te),T.add(wt);const ae=new Ot({color:8374441,metalness:1,roughness:.25,envMap:lt,clearcoat:.7,clearcoatRoughness:.3}),P=new Tn;P.moveTo(0,0),P.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),P.bezierCurveTo(-.6,.3,0,.6,0,1),P.bezierCurveTo(0,.6,.6,.3,.6,0),P.bezierCurveTo(.6,-.3,0,-.3,0,0);const $={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},O=new Pn(P,$),Y=new y(O,ae);Y.scale.set(.2,.2,.2),Y.position.set(.25,1.2,0),Y.rotation.y=Math.PI,Y.rotation.x=Math.PI,T.add(Y);const V=new ct(.35,32,32),mt=new y(V,At);mt.scale.set(.75,1.25,.65),mt.position.set(-.7,-.15,.2),T.add(mt);const Lt=new y(V,yt);Lt.scale.set(.75,1.25,.65),Lt.position.set(.7,-.15,.2),T.add(Lt);const Ut=new Zt(.2,.22,.6,32),Bt=new y(Ut,Nt);Bt.position.set(-.4,-1.05,0),T.add(Bt);const jt=new y(Ut,pt);jt.position.set(.4,-1.05,0),T.add(jt);const Kt=new ct(.3,32,32),Wt=new y(Kt,Nt);Wt.scale.set(1,.72,1.5),Wt.position.set(-.4,-1.45,.17),T.add(Wt);const se=new y(Kt,pt);se.scale.set(1,.72,1.5),se.position.set(.4,-1.45,.17),T.add(se);const pe=new ct(.44,32,32),me=new y(pe,Nt);me.position.set(-.15,-.45,-.4),T.add(me);const Ct=new y(pe,Nt);Ct.position.set(.15,-.45,-.4),T.add(Ct);const Jt=new ct(.18,32,32),zt=new y(Jt,Nt);zt.position.set(0,-.35,-.8),T.add(zt),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Pt){const Ee=new ke("X",{font:Pt,size:.2,depth:.05}),Pe=new y(Ee,Gt);Pe.position.set(-.3,.99,.53),Pe.rotation.x=ge.degToRad(-5),Pe.rotation.y=ge.degToRad(-15),T.add(Pe);const Me=new ke("O",{font:Pt,size:.2,depth:.05}),Be=new y(Me,Gt);Be.position.set(.14,.99,.53),Be.rotation.y=ge.degToRad(12),Be.rotation.x=ge.degToRad(-5),T.add(Be)}),a.value=st(),T.add(a.value),B.add(T),d.value=v(),T.add(d.value),f.value=R(),T.add(f.value),N(f.value),T.scale.set(1.4,1.4,1.4),B.add(T),T.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),Z.position.set(t.bodyPosition.x,1,t.cameraPosition),Z.lookAt(t.bodyPosition.x,0,0),Z.position.z=4,T.rotation.x=.1,z(),Ve(()=>t.bodyPosition,Pt=>{T.position.set(Pt.x,Pt.y,Pt.z)}),Ve(()=>t.cameraPosition,Pt=>{Z.position.set(t.bodyPosition.x,1,Pt),Z.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{Z.aspect=window.innerWidth/window.innerHeight,Z.updateProjectionMatrix(),Q.setSize(window.innerWidth,window.innerHeight)})}});function F(){s.value=!0}function S(){i.value=!0}function A(){o.value=!0}function U(){r.value=!0}function H(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}const J=()=>{c.value=!0,console.log(c.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},it=()=>{l.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},k=()=>{u.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},tt=()=>{h.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},W=()=>{c.value=!1,l.value=!1,u.value=!1,h.value=!1},gt=()=>{_.value=!0,d.value&&(d.value.rotation.y=Math.PI)},vt=()=>{g.value=!0,d.value&&(d.value.rotation.y=0)},xt=()=>{p.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},Dt=()=>{m.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},kt=()=>{_.value=!1,g.value=!1,p.value=!1,m.value=!1},rt=()=>{requestAnimationFrame(rt),a.value&&(c.value&&(a.value.position.z-=zc),l.value&&(a.value.position.z+=zc),u.value&&(a.value.position.x-=zc),h.value&&(a.value.position.x+=zc)),C.render(E,L)},dt=()=>{requestAnimationFrame(dt),d.value&&(_.value&&(d.value.position.z-=Gc),g.value&&(d.value.position.z+=Gc),p.value&&(d.value.position.x-=Gc),m.value&&(d.value.position.x+=Gc))};dt(),rt();const bt=()=>{M.value=!0,f.value&&(f.value.rotation.y=0)},G=()=>{w.value=!0,f.value&&(f.value.rotation.y=Math.PI)},ut=()=>{x.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},at=()=>{I.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},ht=()=>{M.value=!1,w.value=!1,x.value=!1,I.value=!1},St=()=>{requestAnimationFrame(St),f.value&&(M.value&&(f.value.position.z-=kc),w.value&&(f.value.position.z+=kc),x.value&&(f.value.position.x-=kc),I.value&&(f.value.position.x+=kc))};return St(),(st,v)=>(ei(),li(En,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",TT,[Ft("button",{class:"pixel-btn up",onMousedown:A,onMouseup:H},"UP",32),Ft("div",AT,[Ft("button",{class:"pixel-btn left",onMousedown:F,onMouseup:H},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:S,onMouseup:H},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:U,onMouseup:H},"DOWN",32)]),Ft("div",PT,[Ft("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:J,onMouseup:W},"UP",32),Ft("div",RT,[Ft("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:k,onMouseup:W},"LEFT",32),Ft("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:tt,onMouseup:W},"RIGHT",32)]),Ft("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:it,onMouseup:W},"DOWN",32)]),Ft("div",CT,[Ft("button",{class:"directional-btn-woman north-btn",onMousedown:gt,onMouseup:kt},"UP",32),Ft("div",IT,[Ft("button",{class:"directional-btn-woman west-btn",onMousedown:xt,onMouseup:kt},"LEFT",32),Ft("button",{class:"directional-btn-woman east-btn",onMousedown:Dt,onMouseup:kt},"RIGHT",32)]),Ft("button",{class:"directional-btn-woman south-btn",onMousedown:vt,onMouseup:kt},"DOWN",32)]),Ft("div",LT,[Ft("button",{class:"directional-btn-kid north-btn",onMousedown:bt,onMouseup:ht},"UP",32),Ft("div",DT,[Ft("button",{class:"directional-btn-kid west-btn",onMousedown:ut,onMouseup:ht},"LEFT",32),Ft("button",{class:"directional-btn-kid east-btn",onMousedown:at,onMouseup:ht},"RIGHT",32)]),Ft("button",{class:"directional-btn-kid south-btn",onMousedown:G,onMouseup:ht},"DOWN",32)])],64))}}),NT=ui(UT,[["__scopeId","data-v-f25dfda5"]]),OT={class:"pixel-controls"},FT={class:"side-buttons"},BT=zn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);ti(()=>{if(e.value){let d=function(re,he){const de=new Xt,ye=new ct(1,32,32),_e=new y(ye,it);_e.scale.set(1,.8,1),de.add(_e);const we=new Zt(.1,.1,.5,16),Ue=new Rt({color:9127187}),Te=new y(we,Ue);return Te.position.set(0,.9,0),de.add(Te),de},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),te.rotation.z-=.04,X.rotation.z+=.04,Mt.rotation.z+=.03,ot.rotation.z+=.03,b.rotation.y+=.04,$t+=Vt,m.position.y=t.bodyPosition.y+Math.sin($t)*qt;const re=ve.getElapsedTime();ue.forEach((he,de)=>{const ye=.1+Math.sin(re*3+be[de])*.1;he.scale.set(ye,ye,ye)}),p.render(_,g)};const _=new Zn,g=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),p=new Kn({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new Xt,M=new Xt;_.add(M);const w=new Ui(16777215,2);_.add(w);const x=new Di(16777215,4);x.position.set(5,5,5),_.add(x);const I=new Li(16777215,5,50);I.position.set(0,2,4),_.add(I);const C=new Jn,E=C.load("/3d-bear-arts/assets/pumpkin.jpg");E.wrapS=E.wrapT=tn,E.repeat.set(.8,.85);const L=C.load("/3d-bear-arts/assets/pumpkin.jpg");L.wrapS=L.wrapT=tn,L.repeat.set(1,1);const F=C.load("/3d-bear-arts/assets/pumpkin.jpg");F.wrapS=L.wrapT=tn,F.repeat.set(2,.8);const S=new Ot({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),A=new Xt,U=new Ot({color:16747520,map:E,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),H=new Ot({color:16747520,map:L,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new Ot({color:16747520,map:F,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:De}),it=new Ot({color:16747520,map:F,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ot({color:16766720,map:E,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ot({color:9109504,map:E,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ot({color:4915330,map:E,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const k=new ct(1,32,32,0,Math.PI),tt=new y(k,J),W=new y(k,U);tt.scale.set(.85,.85,.8),W.scale.set(.85,.85,.8),tt.position.y=-.2,W.position.y=-.2,tt.rotation.y=Math.PI/2,W.rotation.y=Math.PI*1.5;const gt=new Ce(1,32),vt=new y(gt,H);vt.scale.set(.85,.85,.8),vt.position.set(0,-.2,0),vt.rotation.y=Math.PI/2;const xt=new Xt;xt.add(tt),xt.add(W),xt.add(vt),m.add(xt);const Dt=new ct(.6,32,32,0,Math.PI),kt=new y(Dt,U);kt.scale.set(1,.95,.95),kt.position.set(0,1,0),kt.rotation.y=Math.PI*1.5;const rt=new y(Dt,J);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI/2;const dt=new Ce(.6,32),bt=new y(dt,H);bt.position.set(0,1,0),bt.rotation.y=Math.PI/2,bt.scale.set(1,.95,.95);const G=new Xt;G.add(kt),G.add(rt),G.add(bt),m.add(G);const ut=new ct(.25,32,32),at=new y(ut,it);at.position.set(-.45,1.35,-.1),m.add(at);const ht=new y(ut,J);ht.position.set(.45,1.35,-.1),m.add(ht);const St=new ct(.25,32,32,Math.PI/2,Math.PI),st=new y(St,U);st.scale.set(1.1,.6,.8),st.position.set(0,.84,.5),st.rotation.y=Math.PI;const v=new ct(.25,32,32,Math.PI/2,Math.PI),R=new y(v,J);R.scale.set(1.1,.6,.8),R.position.set(0,.84,.5),R.rotation.y=0;const N=new Ce(.25,32),z=new y(N,U);z.scale.set(.8,.6,.8),z.position.set(0,.84,.5),z.rotation.y=Math.PI/2;const B=new Xt;B.add(st),B.add(R),B.add(z),m.add(B);const Z=new Tn;Z.moveTo(0,0),Z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Z.bezierCurveTo(-.6,.3,0,.6,0,1),Z.bezierCurveTo(0,.6,.6,.3,.6,0),Z.bezierCurveTo(.6,-.3,0,-.3,0,0);const Q={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},T=new Pn(Z,Q),b=new y(T,S);b.scale.set(.3,.3,.3),b.position.set(.25,1.1,0),b.rotation.y=Math.PI,b.rotation.x=Math.PI,m.add(b);const D=new ct(.35,32,32),K=new y(D,H);K.scale.set(.75,1.25,.65),K.position.set(-.7,-.15,.2),m.add(K);const q=new y(D,J);q.scale.set(.75,1.25,.65),q.position.set(.7,-.15,.2),m.add(q);const j=new Zt(.2,.22,.6,32),ft=new y(j,H);ft.position.set(-.4,-1.05,0),m.add(ft);const lt=new y(j,J);lt.position.set(.4,-1.05,0),m.add(lt);const _t=new ct(.3,32,32),At=new y(_t,it);At.scale.set(1,.72,1.5),At.position.set(-.4,-1.45,.17),m.add(At);const pt=new y(_t,J);pt.scale.set(1,.72,1.5),pt.position.set(.4,-1.45,.17),m.add(pt);const yt=new ct(.44,32,32),Nt=new y(yt,U);Nt.position.set(-.15,-.45,-.4),m.add(Nt);const Gt=new y(yt,J);Gt.position.set(.15,-.45,-.4),m.add(Gt);const It=new ct(.18,32,32),ee=new y(It,it);ee.position.set(0,-.35,-.8),m.add(ee),ee.renderOrder=1,new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(re){const he=new ke("X",{font:re,size:.2,depth:.05}),de=new y(he,H);de.position.set(-.3,.99,.53),de.rotation.x=ge.degToRad(-5),de.rotation.y=ge.degToRad(-15),m.add(de);const ye=new ke("O",{font:re,size:.2,depth:.05}),_e=new y(ye,H);_e.position.set(.14,.99,.53),_e.rotation.y=ge.degToRad(12),_e.rotation.x=ge.degToRad(-5),m.add(_e)}),m.add(A);const te=d(),X=d(),Mt=d(),ot=d();te.position.set(.35,-.35,-.3),X.position.set(.25,-.45,.3),Mt.position.set(.3,.1,-.2),ot.position.set(.25,.18,.4),te.scale.set(.3,.3,.3),X.scale.set(.28,.28,.28),Mt.scale.set(.25,.25,.25),ot.scale.set(.23,.23,.23),X.rotation.z=Math.PI/4,Mt.rotation.z=-Math.PI/4,ot.rotation.y=-Math.PI/2,m.add(te),m.add(X),m.add(Mt),m.add(ot);const nt=new Tn;nt.moveTo(-.5,0),nt.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),nt.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),nt.bezierCurveTo(-.05,.6,.05,.6,.15,.4),nt.bezierCurveTo(.25,.5,.25,.85,.5,.8),nt.bezierCurveTo(1,.6,.75,.25,.5,0),nt.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const Tt={depth:.3,bevelEnabled:!1},Et=new Pn(nt,Tt),Yt=new ps({color:0}),oe=new y(Et,Yt);oe.scale.set(.3,.3,.6),oe.rotation.x=0,oe.rotation.z=0,oe.position.set(.26,.35,.25),m.add(oe);const ce=new y(Et,Yt);ce.scale.set(.5,.5,.5),ce.position.set(.4,-.1,.54),m.add(ce);const le=new y(Et,Yt);le.scale.set(.5,.5,.5),le.position.set(.32,-.35,.65),m.add(le),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),g.position.set(t.bodyPosition.x,1,t.cameraPosition),g.lookAt(t.bodyPosition.x,0,0),g.position.z=4;const ue=[oe,ce,le],ve=new Ig,be=[0,Math.PI/2,Math.PI,0,Math.PI/3];let Vt=.05,qt=.25,$t=0;f(),Ve(()=>t.bodyPosition,re=>{m.position.set(re.x,re.y,re.z)}),Ve(()=>t.cameraPosition,re=>{g.position.set(t.bodyPosition.x,1,re),g.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{g.aspect=window.innerWidth/window.innerHeight,g.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function u(){r.value=!0}function h(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(ei(),li(En,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",OT,[Ft("button",{class:"pixel-btn up",onMousedown:l,onMouseup:h},"UP",32),Ft("div",FT,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:h},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:c,onMouseup:h},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:u,onMouseup:h},"DOWN",32)])],64))}}),zT=ui(BT,[["__scopeId","data-v-5eff72b3"]]),GT={class:"pixel-controls"},kT={class:"side-buttons"},HT=zn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);ti(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),Q.rotation.y+=.03,Yt+=ot,oe+=nt,p.position.y=t.bodyPosition.y+Math.sin(Yt)*Et,Q.position.y=t.bodyPosition.y+Math.sin(oe)*Tt,te.uniforms.u_time.value+=.25,g.render(f,_)};const f=new Zn,_=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),g=new Kn({antialias:!0,alpha:!0});g.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(g.domElement);const p=new Xt,m=new Xt;f.add(m);const M=new Ui(16777215,2);f.add(M);const w=new Di(16777215,4);w.position.set(5,5,5),f.add(w);const x=new Li(16777215,5,50);x.position.set(0,2,4),f.add(x);const I=new Jn,C=I.load("/3d-bear-arts/assets/ghost.jpg");C.wrapS=C.wrapT=tn,C.repeat.set(2,2);const E=I.load("/3d-bear-arts/assets/ghost.jpg");E.wrapS=E.wrapT=tn,E.repeat.set(1,1);const L=new Ot({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:De}),F=new Ot({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),S=new Ot({color:9109504,map:C,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),A=new Ot({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:De}),U=new Ot({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:De}),H=new Ot({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:De}),J=new ct(1,32,32,0,Math.PI),it=new y(J,L),k=new y(J,U);it.scale.set(.85,.85,.8),k.scale.set(.85,.85,.8),it.position.y=-.2,k.position.y=-.2,it.rotation.y=Math.PI/2,k.rotation.y=Math.PI*1.5;const tt=new Ce(1,32),W=new y(tt,U);W.scale.set(.85,.85,.8),W.position.set(0,-.2,0),W.rotation.y=Math.PI/2;const gt=new Xt;gt.add(it),gt.add(k),gt.add(W),p.add(gt);const vt=new ct(.6,32,32,0,Math.PI),xt=new y(vt,H);xt.scale.set(1,.95,.95),xt.position.set(0,1,0),xt.rotation.y=Math.PI*1.5;const Dt=new y(vt,F);Dt.scale.set(1,.95,.95),Dt.position.set(0,1,0),Dt.rotation.y=Math.PI/2;const kt=new Ce(.6,32),rt=new y(kt,U);rt.position.set(0,1,0),rt.rotation.y=Math.PI/2,rt.scale.set(1,.95,.95);const dt=new Xt;dt.add(xt),dt.add(Dt),dt.add(rt),p.add(dt);const bt=new ct(.25,32,32),G=new y(bt,H);G.position.set(-.45,1.35,-.1),p.add(G);const ut=new y(bt,F);ut.position.set(.45,1.35,-.1),p.add(ut);const at=new ct(.25,32,32,Math.PI/2,Math.PI),ht=new y(at,H);ht.scale.set(1.1,.6,.8),ht.position.set(0,.84,.5),ht.rotation.y=Math.PI;const St=new ct(.25,32,32,Math.PI/2,Math.PI),st=new y(St,F);st.scale.set(1.1,.6,.8),st.position.set(0,.84,.5),st.rotation.y=0;const v=new Ce(.25,32),R=new y(v,A);R.scale.set(.8,.6,.8),R.position.set(0,.84,.5),R.rotation.y=Math.PI/2;const N=new Xt;N.add(ht),N.add(st),N.add(R),p.add(N);const z=new Tn;z.moveTo(0,0),z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),z.bezierCurveTo(-.6,.3,0,.6,0,1),z.bezierCurveTo(0,.6,.6,.3,.6,0),z.bezierCurveTo(.6,-.3,0,-.3,0,0);const B={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Z=new Pn(z,B),Q=new y(Z,S);Q.scale.set(.35,.35,.35),Q.position.set(0,-.05,0),Q.rotation.y=Math.PI,Q.rotation.x=Math.PI,p.add(Q);const T=new ct(.35,32,32),b=new y(T,U);b.scale.set(.75,1.25,.65),b.position.set(-.7,-.15,.2),p.add(b);const D=new y(T,A);D.scale.set(.75,1.25,.65),D.position.set(.7,-.15,.2),p.add(D);const K=new Zt(.2,.22,.6,32),q=new y(K,U);q.position.set(-.4,-1.05,0),p.add(q);const j=new y(K,A);j.position.set(.4,-1.05,0),p.add(j);const ft=new ct(.3,32,32),lt=new y(ft,U);lt.scale.set(1,.72,1.5),lt.position.set(-.4,-1.45,.17),p.add(lt);const _t=new y(ft,A);_t.scale.set(1,.72,1.5),_t.position.set(.4,-1.45,.17),p.add(_t);const At=new ct(.44,32,32),pt=new y(At,A);pt.position.set(-.15,-.45,-.4),p.add(pt);const yt=new y(At,A);yt.position.set(.15,-.45,-.4),p.add(yt);const Nt=new ct(.18,32,32),Gt=new y(Nt,U);Gt.position.set(0,-.35,-.8),p.add(Gt);const It=new ct(.6,32,32,0,Math.PI*2,0,Math.PI/2),ee=new Ot({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Ht=new y(It,ee);Ht.position.set(0,-.2,0),Ht.rotation.x=Math.PI,Ht.scale.set(1.25,1.25,1.25),gt.add(Ht);const te=new hn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),X=new y(tt,te);X.position.set(0,-.26,0),X.scale.set(.7,.7,.7),X.rotation.x=-Math.PI/2,X.renderOrder=1,gt.add(X),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ce){const le=new ke("X",{font:ce,size:.2,depth:.05}),ue=new y(le,U);ue.position.set(-.3,.99,.53),ue.rotation.x=ge.degToRad(-5),ue.rotation.y=ge.degToRad(-15),p.add(ue);const ve=new ke("O",{font:ce,size:.2,depth:.05}),be=new y(ve,U);be.position.set(.14,.99,.53),be.rotation.y=ge.degToRad(12),be.rotation.x=ge.degToRad(-5),p.add(be)}),Gt.renderOrder=1,p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let ot=.05,nt=.06,Tt=.2,Et=.25,Yt=0,oe=0;d(),Ve(()=>t.bodyPosition,ce=>{p.position.set(ce.x,ce.y,ce.z)}),Ve(()=>t.cameraPosition,ce=>{_.position.set(t.bodyPosition.x,1,ce),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),g.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function u(){r.value=!0}function h(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(ei(),li(En,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",GT,[Ft("button",{class:"pixel-btn up",onMousedown:l,onMouseup:h},"UP",32),Ft("div",kT,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:h},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:c,onMouseup:h},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:u,onMouseup:h},"DOWN",32)])],64))}}),VT=ui(HT,[["__scopeId","data-v-eb44448e"]]),WT={class:"pixel-controls"},XT={class:"side-buttons"},qT=15,YT=5,jT=zn({__name:"Santa",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);const a=yr(null),c=new Kn({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new Zn;const l=new $e(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=4,ti(()=>{if(e.value){let g=function(){const wt=new Xt,ae=new Xn(.12,.05,16,100),P=new Rt({color:16777215}),$=new y(ae,P);$.position.set(0,1.65,0),$.rotation.x=Math.PI/2,wt.add($);const O=new Ai(.15,.3,32),Y=new Rt({color:16711680}),V=new y(O,Y);V.position.set(0,1.8,0),wt.add(V);const mt=new ct(.05,32,32),Lt=new Rt({color:16777215}),Ut=new y(mt,Lt);return Ut.position.set(0,1.93,0),wt.add(Ut),wt.position.set(0,-.1,0),wt},p=function(){const wt=new Xt,ae=new ct(.15,32,32),P=new Rt({color:16764057}),$=new y(ae,P);$.position.set(0,.4,0),wt.add($);const O=new Ai(.08,.15,32);new Rt({color:16764057});const Y=new y(O,Dt);Y.position.set(-.1,.55,0),Y.rotation.z=Math.PI/6,wt.add(Y);const V=new y(O,Dt);V.position.set(.1,.55,0),V.rotation.z=-Math.PI/6,wt.add(V);const mt=new Zt(.12,.15,.3,32),Lt=new Rt({color:16764057}),Ut=new y(mt,Lt);Ut.position.set(0,.2,0),wt.add(Ut);const Bt=new Zt(.05,.05,.2,32),jt=new Rt({color:16764057}),Kt=new y(Bt,jt);Kt.position.set(-.07,-.05,.05),wt.add(Kt);const Wt=new y(Bt,jt);Wt.position.set(.07,-.05,.05),wt.add(Wt);const se=new Zt(.04,.04,.2,32),pe=new Rt({color:16764057}),me=new y(se,Dt);me.position.set(-.15,.25,0),me.rotation.z=Math.PI/4,wt.add(me);const Ct=new y(se,pe);Ct.position.set(.15,.25,0),Ct.rotation.z=-Math.PI/4,wt.add(Ct);const Jt=new Zt(.03,.03,.25,32),zt=new Rt({color:16764057}),fe=new y(Jt,zt);return fe.position.set(0,.1,-.2),fe.rotation.x=Math.PI/4,wt.add(fe),wt.scale.set(.75,.75,.75),wt.position.set(.2,0,.2),wt},m=function(){const wt=new Xt,ae=new ct(.2,32,32),P=new Rt({color:16764057}),$=new y(ae,P);$.position.set(0,1,0),wt.add($);const O=new Rt({color:16777215}),Y=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Hi of Y){const oc=new ct(Hi.size,16,16),Yo=new y(oc,O);Yo.position.set(Hi.x,Hi.y-.06,Hi.z-.01),wt.add(Yo)}const V=new Rt({color:16777215}),mt=new Zt(.05,.06,.1,32),Lt=new y(mt,V);Lt.position.set(-.06,.93,.18),Lt.rotation.z=Math.PI/4;const Ut=new Zt(.05,.06,.1,32),Bt=new y(Ut,V);Bt.position.set(.06,.93,.18),Bt.rotation.z=-Math.PI/4;const jt=new Xn(.12,.05,16,100),Kt=new Rt({color:16777215}),Wt=new y(jt,Kt);Wt.position.set(0,1.15,0),Wt.rotation.x=Math.PI/2,wt.add(Wt);const se=new Ai(.15,.3,32),pe=new Rt({color:16711680}),me=new y(se,pe);me.position.set(0,1.3,0),wt.add(me);const Ct=new ct(.05,32,32),Jt=new Rt({color:16777215}),zt=new y(Ct,Jt);zt.position.set(0,1.43,0),wt.add(zt);const fe=new Zt(.2,.25,.6,32),Pt=new Rt({color:16711680}),Ee=new y(fe,Pt);Ee.position.set(0,.5,0),wt.add(Ee);const Pe=new Zt(.25,.25,.1,32),Me=new Rt({color:0}),Be=new y(Pe,Me);Be.position.set(0,.4,.005),wt.add(Be);const xe=new Zt(.06,.06,.3,32),Oe=new Rt({color:16711680}),Ye=new y(xe,Oe);Ye.position.set(-.25,.75,0),Ye.rotation.z=Math.PI/4,wt.add(Ye);const Ne=new y(xe,Oe);Ne.position.set(.25,.75,0),Ne.rotation.z=-Math.PI/4,wt.add(Ne);const We=new ct(.07,32,32),sn=new Rt({color:16777215}),Ke=new y(We,sn);Ke.position.set(-.35,.85,0),wt.add(Ke);const _n=new y(We,sn);_n.position.set(.35,.85,0),wt.add(_n);const dn=new Zt(.1,.1,.15,32),en=new Rt({color:16711680}),ln=new Zt(.08,.08,.4,32),on=new Rt({color:0}),wn=new y(ln,on);wn.position.set(-.1,.1,0),wt.add(wn);const An=new y(dn,en);An.position.set(-.1,-.05,0),wt.add(An);const Gn=new y(ln,on);Gn.position.set(.1,.1,0),wt.add(Gn);const ts=new y(dn,en);ts.position.set(.1,-.05,0),wt.add(ts);const _s=new ct(.12,32,32),vs=new Rt({color:16711680}),ys=new y(_s,vs);ys.scale.set(1,.7,1.5),ys.position.set(-.1,-.12,.12),wt.add(ys);const es=new y(_s,vs);return es.scale.set(1,.7,1.5),es.position.set(.1,-.1,.12),wt.add(es),wt.scale.set(.25,.25,.25),wt.position.set(.2,.5,-0),wt},M=function(){let wt=0;function ae(){requestAnimationFrame(ae),wt+=.4,Vt.position.y=.45+Math.sin(wt)*.5,A.render(F,S)}ae()},w=function(wt){let ae=1,P=0;function $(){requestAnimationFrame($),wt.position.x+=.01*ae,wt.position.x>=.5?(ae=-1,wt.rotation.y=Math.PI):wt.position.x<=0&&(ae=1,wt.rotation.y=0),P+=1,wt.position.y=-.2+Math.sin(P)*.01,wt.position.z=.5,A.render(F,S)}$()},x=function(){const wt=new Xt,ae=new pn(.7,.8,.7),P=new Rt({color:9127187}),$=new y(ae,P);$.position.set(0,.4,0),wt.add($);const O=new Ai(.55,.25,4),Y=new Rt({color:16777215}),V=new y(O,Y);V.position.set(0,.9,0),V.rotation.y=Math.PI/4,wt.add(V);const mt=new pn(.25,.35,.05),Lt=new Rt({color:6636321}),Ut=new y(mt,Lt);Ut.position.set(0,.2,.36),wt.add(Ut);const Bt=new pn(.15,.15,.05),jt=new Rt({color:8900331}),Kt=new y(Bt,jt);Kt.position.set(-.2,.5,.38),wt.add(Kt);const Wt=new y(Bt,jt);Wt.position.set(.2,.5,.38),wt.add(Wt);const se=new pn(.2,.4,.2),pe=new Rt({color:8421504}),me=new y(se,pe);me.position.set(0,.95,0),wt.add(me);const Ct=new Xn(.07,.04,32,100),Jt=new Rt({color:2263842}),zt=new y(Ct,Jt);return zt.position.set(0,.45,.38),wt.add(zt),wt.position.set(.22,-.2,0),wt.scale.set(.5,.5,.5),wt},I=function(wt=1,ae={x:0,y:0,z:0}){const P=new Xt,$=new Zt(1.2,.9,3,32),O=new Rt({color:25153}),Y=new y($,O);P.add(Y);const V=new Zt(1.3,1.3,.2,32),mt=new Rt({color:3355443}),Lt=new y(V,mt);Lt.position.y=1.6,P.add(Lt);const Ut=2,Bt=new Zt(1.1,1.1,Ut,32),jt=new Rt({color:9127187}),Kt=new y(Bt,jt);return Kt.position.y=0,new Jn().load("/3d-bear-arts/assets/starbucks-logo.png",function(se){se.repeat.set(4,1),se.offset.set(.25,0),se.wrapS=tn,se.wrapT=tn;const pe=new Rt({color:9127187,map:se,transparent:!0}),me=new Zt(1.1,1.05,1.5,32),Ct=new y(me,pe);Ct.position.y=-.5,P.add(Ct)}),P.scale.set(wt,wt,wt),P.position.set(ae.x,ae.y,ae.z),P},C=function(){let wt=1;function ae(){requestAnimationFrame(ae),wt-=.1,de.position.y=.5+Math.sin(wt)*.8,A.render(F,S)}ae()},E=function(){requestAnimationFrame(E);const wt=_e.attributes.position.array;for(let ae=1;ae<wt.length;ae+=3)wt[ae]-=.02,wt[ae]<-10&&(wt[ae]=10);_e.attributes.position.needsUpdate=!0,A.render(F,S)},L=function(){requestAnimationFrame(L),i.value&&(U.rotation.y+=.03),s.value&&(U.rotation.y-=.03),o.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),K.uniforms.u_time.value+=.5,qt.rotation.y+=.45,he.rotation.y+=.05,de.rotation.y+=.08,A.render(F,S)};const F=new Zn,S=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),A=new Kn({antialias:!0,alpha:!0});A.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(A.domElement);const U=new Xt,H=new Xt;F.add(H);const J=new Ui(16777215,2);F.add(J);const it=new Di(16777215,4);it.position.set(5,5,5),F.add(it);const k=new Li(16777215,5,50);k.position.set(0,2,4),F.add(k);const tt=new Jn,W=tt.load("/3d-bear-arts/assets/house.jpg");W.wrapS=W.wrapT=tn,W.repeat.set(1,1),tt.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const gt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:De}),vt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.35,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:De}),xt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.4,transmission:.7,ior:1.33,thickness:.5,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:De}),Dt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:De}),kt=new Kr().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);F.environment=kt;const rt=new Ot({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:De}),dt=new Ot({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),bt=new ct(1,32,32,0,Math.PI),G=new y(bt,vt),ut=new y(bt,xt);G.scale.set(.85,.85,.8),ut.scale.set(.85,.85,.8),G.position.y=-.2,ut.position.y=-.2,G.rotation.y=Math.PI/2,ut.rotation.y=Math.PI*1.5;const at=new Ce(1,32),ht=new y(at,rt);ht.scale.set(.85,.85,.8),ht.position.set(0,-.2,0),ht.rotation.y=Math.PI/2;const St=new Xt;St.add(G),St.add(ut),St.add(ht),U.add(St);const st=new ct(.6,32,32,0,Math.PI),v=new y(st,Dt);v.scale.set(1,.95,.95),v.position.set(0,1,0),v.rotation.y=Math.PI*1.5;const R=new y(st,vt);R.scale.set(1,.95,.95),R.position.set(0,1,0),R.rotation.y=Math.PI/2;const N=new Ce(.6,32),z=new y(N,rt);z.position.set(0,1,0),z.rotation.y=Math.PI/2,z.scale.set(1,.95,.95);const B=new Xt;B.add(v),B.add(R),B.add(z),U.add(B);const Z=new ct(.6,32,32,0,Math.PI*2,0,Math.PI/2),Q=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),T=new y(Z,Q);T.position.set(0,-.2,0),T.rotation.x=Math.PI,T.scale.set(1.25,1.25,1.25),St.add(T);const b=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:De,transparent:!1,opacity:.8}),D=new y(at,b);D.scale.set(.7,.7,.7),D.position.set(0,-.3,0),D.rotation.x=Math.PI/2,D.renderOrder=1,St.add(D),U.add(St);const K=new hn({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
            `}),q=new y(at,K);q.position.set(0,-.2,0),q.scale.set(.7,.7,.7),q.rotation.x=-Math.PI/2,q.renderOrder=2,St.add(q);const j=new ct(.25,32,32),ft=new y(j,Dt);ft.position.set(-.45,1.35,-.1),U.add(ft);const lt=new y(j,gt);lt.position.set(.45,1.35,-.1),U.add(lt);const _t=new ct(.25,32,32,Math.PI/2,Math.PI),At=new y(_t,Dt);At.scale.set(1.1,.6,.8),At.position.set(0,.84,.5),At.rotation.y=Math.PI;const pt=new ct(.25,32,32,Math.PI/2,Math.PI),yt=new y(pt,gt);yt.scale.set(1.1,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=0;const Nt=new Ce(.25,32),Gt=new y(Nt,rt);Gt.scale.set(.8,.6,.8),Gt.position.set(0,.84,.5),Gt.rotation.y=Math.PI/2;const It=new Xt;It.add(At),It.add(yt),It.add(Gt),U.add(It);const ee=new ct(.35,32,32),Ht=new y(ee,Dt);Ht.scale.set(.75,1.25,.65),Ht.position.set(-.7,-.15,.2),U.add(Ht);const te=new y(ee,gt);te.scale.set(.75,1.25,.65),te.position.set(.7,-.15,.2),U.add(te);const X=new Zt(.2,.22,.6,32),Mt=new y(X,Dt);Mt.position.set(-.4,-1.05,0),U.add(Mt);const ot=new y(X,gt);ot.position.set(.4,-1.05,0),U.add(ot);const nt=new ct(.3,32,32),Tt=new y(nt,Dt);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),U.add(Tt);const Et=new y(nt,gt);Et.scale.set(1,.72,1.5),Et.position.set(.4,-1.45,.17),U.add(Et);const Yt=new ct(.44,32,32),oe=new y(Yt,Dt);oe.position.set(-.15,-.45,-.4),U.add(oe);const ce=new y(Yt,dt);ce.position.set(.15,-.45,-.4),U.add(ce);const le=new ct(.18,32,32),ue=new y(le,Dt);ue.position.set(0,-.35,-.8),U.add(ue),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(wt){const ae=new ke("X",{font:wt,size:.2,depth:.05}),P=new y(ae,dt);P.position.set(-.3,.99,.53),P.rotation.x=ge.degToRad(-5),P.rotation.y=ge.degToRad(-15),U.add(P);const $=new ke("+",{font:wt,size:.25,depth:.1}),O=new y($,dt);O.position.set(.12,.99,.53),O.rotation.y=ge.degToRad(12),O.rotation.x=ge.degToRad(-5),U.add(O)});const be=g();U.add(be),p();const Vt=m();U.add(Vt);const qt=m();qt.position.set(-.2,-.1,.5),U.add(qt),M(),a.value=m(),U.add(a.value),w(a.value);const $t=x();U.add($t);const re=x();re.position.set(-.2,-.2,0),re.scale.set(.35,.35,.35),U.add(re);const he=I(.1,{x:0,y:0,z:1}),de=I(1.1,{x:0,y:-1.2,z:0});C();const ye=1e3,_e=new Bn,we=[];for(let wt=0;wt<ye;wt++){const ae=(Math.random()-.5)*20,P=Math.random()*20,$=(Math.random()-.5)*20;we.push(ae,P,$)}_e.setAttribute("position",new cn(we,3));const Ue=new za({color:16777215,size:.1,transparent:!0,opacity:.8}),Te=new Sa(_e,Ue);U.add(Te),E(),U.scale.set(1.2,1.2,1.2),F.add(U),U.scale.set(1.4,1.4,1.4),U.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),F.add(U),U.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),U.position.y=-.25,S.position.set(t.bodyPosition.x,1.4,t.cameraPosition),S.position.set(0,1,4),S.lookAt(t.bodyPosition.x,0,0),S.position.z=4,U.rotation.x=.1,L(),Ve(()=>t.bodyPosition,wt=>{U.position.set(wt.x,wt.y,wt.z)}),Ve(()=>t.cameraPosition,wt=>{S.position.set(t.bodyPosition.x,1,wt),S.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{S.aspect=window.innerWidth/window.innerHeight,S.updateProjectionMatrix(),A.setSize(window.innerWidth,window.innerHeight)})}});function u(){s.value=!0}function h(){i.value=!0}function d(){o.value=!0}function f(){r.value=!0}function _(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let g=0;g<qT;g++){const p=document.createElement("div");p.classList.add("confetti"),p.style.left=`${Math.random()*100}vw`,p.style.animationDuration=`${Math.random()*3+4}s`,p.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(p)}for(let g=0;g<YT;g++){const p=document.createElement("div");p.classList.add("light"),document.body.appendChild(p)}return(g,p)=>(ei(),li(En,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",WT,[Ft("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),Ft("div",XT,[Ft("button",{class:"pixel-btn left",onMousedown:u,onMouseup:_},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:h,onMouseup:_},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:f,onMouseup:_},"DOWN",32)])],64))}}),$T=ui(jT,[["__scopeId","data-v-43013412"]]),KT={class:"pixel-controls"},ZT={class:"side-buttons"},JT=15,QT=5,t3=zn({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);const a=yr(null),c=new Kn({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new Zn;const l=new $e(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5,ti(()=>{if(e.value){let g=function(){const O=new Xt,Y=new Xn(.12,.05,16,100),V=new Rt({color:16777215}),mt=new y(Y,V);mt.position.set(0,1.65,0),mt.rotation.x=Math.PI/2,O.add(mt);const Lt=new Ai(.15,.3,32),Ut=new Rt({color:16711680}),Bt=new y(Lt,Ut);Bt.position.set(0,1.8,0),O.add(Bt);const jt=new ct(.05,32,32),Kt=new Rt({color:16777215}),Wt=new y(jt,Kt);return Wt.position.set(0,1.93,0),O.add(Wt),O.position.set(0,-.1,0),O},p=function(){const O=new Xt,Y=new ct(.15,32,32),V=new Rt({color:16764057}),mt=new y(Y,V);mt.position.set(0,.4,0),O.add(mt);const Lt=new Ai(.08,.15,32);new Rt({color:16764057});const Ut=new y(Lt,vt);Ut.position.set(-.1,.55,0),Ut.rotation.z=Math.PI/6,O.add(Ut);const Bt=new y(Lt,vt);Bt.position.set(.1,.55,0),Bt.rotation.z=-Math.PI/6,O.add(Bt);const jt=new Zt(.12,.15,.3,32),Kt=new Rt({color:16764057}),Wt=new y(jt,Kt);Wt.position.set(0,.2,0),O.add(Wt);const se=new Zt(.05,.05,.2,32),pe=new Rt({color:16764057}),me=new y(se,pe);me.position.set(-.07,-.05,.05),O.add(me);const Ct=new y(se,pe);Ct.position.set(.07,-.05,.05),O.add(Ct);const Jt=new Zt(.04,.04,.2,32),zt=new Rt({color:16764057}),fe=new y(Jt,vt);fe.position.set(-.15,.25,0),fe.rotation.z=Math.PI/4,O.add(fe);const Pt=new y(Jt,zt);Pt.position.set(.15,.25,0),Pt.rotation.z=-Math.PI/4,O.add(Pt);const Ee=new Zt(.03,.03,.25,32),Pe=new Rt({color:16764057}),Me=new y(Ee,Pe);return Me.position.set(0,.1,-.2),Me.rotation.x=Math.PI/4,O.add(Me),O.scale.set(.75,.75,.75),O.position.set(.2,0,.2),O},m=function(){const O=new Xt,Y=new ct(.2,32,32),V=new Rt({color:16764057}),mt=new y(Y,V);mt.position.set(0,1,0),O.add(mt);const Lt=new Rt({color:16777215}),Ut=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const rc of Ut){const D_=new ct(rc.size,16,16),df=new y(D_,Lt);df.position.set(rc.x,rc.y-.06,rc.z-.01),O.add(df)}const Bt=new Rt({color:16777215}),jt=new Zt(.05,.06,.1,32),Kt=new y(jt,Bt);Kt.position.set(-.06,.93,.18),Kt.rotation.z=Math.PI/4;const Wt=new Zt(.05,.06,.1,32),se=new y(Wt,Bt);se.position.set(.06,.93,.18),se.rotation.z=-Math.PI/4;const pe=new Xn(.12,.05,16,100),me=new Rt({color:16777215}),Ct=new y(pe,me);Ct.position.set(0,1.15,0),Ct.rotation.x=Math.PI/2,O.add(Ct);const Jt=new Ai(.15,.3,32),zt=new Rt({color:16711680}),fe=new y(Jt,zt);fe.position.set(0,1.3,0),O.add(fe);const Pt=new ct(.05,32,32),Ee=new Rt({color:16777215}),Pe=new y(Pt,Ee);Pe.position.set(0,1.43,0),O.add(Pe);const Me=new Zt(.2,.25,.6,32),Be=new Rt({color:16711680}),xe=new y(Me,Be);xe.position.set(0,.5,0),O.add(xe);const Oe=new Zt(.25,.25,.1,32),Ye=new Rt({color:0}),Ne=new y(Oe,Ye);Ne.position.set(0,.4,.005),O.add(Ne);const We=new Zt(.06,.06,.3,32),sn=new Rt({color:16711680}),Ke=new y(We,sn);Ke.position.set(-.25,.75,0),Ke.rotation.z=Math.PI/4,O.add(Ke);const _n=new y(We,sn);_n.position.set(.25,.75,0),_n.rotation.z=-Math.PI/4,O.add(_n);const dn=new ct(.07,32,32),en=new Rt({color:16777215}),ln=new y(dn,en);ln.position.set(-.35,.85,0),O.add(ln);const on=new y(dn,en);on.position.set(.35,.85,0),O.add(on);const wn=new Zt(.1,.1,.15,32),An=new Rt({color:16711680}),Gn=new Zt(.08,.08,.4,32),ts=new Rt({color:0}),_s=new y(Gn,ts);_s.position.set(-.1,.1,0),O.add(_s);const vs=new y(wn,An);vs.position.set(-.1,-.05,0),O.add(vs);const ys=new y(Gn,ts);ys.position.set(.1,.1,0),O.add(ys);const es=new y(wn,An);es.position.set(.1,-.05,0),O.add(es);const Hi=new ct(.12,32,32),oc=new Rt({color:16711680}),Yo=new y(Hi,oc);Yo.scale.set(1,.7,1.5),Yo.position.set(-.1,-.12,.12),O.add(Yo);const Hl=new y(Hi,oc);return Hl.scale.set(1,.7,1.5),Hl.position.set(.1,-.1,.12),O.add(Hl),O.scale.set(.25,.25,.25),O.position.set(.2,.5,-0),O},M=function(){let O=0;function Y(){requestAnimationFrame(Y),O+=.4,ve.position.y=.45+Math.sin(O)*.5,A.render(F,S)}Y()},w=function(O){let Y=1,V=0;function mt(){requestAnimationFrame(mt),O.position.x+=.01*Y,O.position.x>=.5?(Y=-1,O.rotation.y=Math.PI):O.position.x<=0&&(Y=1,O.rotation.y=0),V+=1,O.position.y=-.2+Math.sin(V)*.01,O.position.z=.5,A.render(F,S)}mt()},x=function(){const O=new Xt,Y=new pn(.7,.8,.7),V=new Rt({color:9127187}),mt=new y(Y,V);mt.position.set(0,.4,0),O.add(mt);const Lt=new Ai(.55,.25,4),Ut=new Rt({color:16777215}),Bt=new y(Lt,Ut);Bt.position.set(0,.9,0),Bt.rotation.y=Math.PI/4,O.add(Bt);const jt=new pn(.25,.35,.05),Kt=new Rt({color:6636321}),Wt=new y(jt,Kt);Wt.position.set(0,.2,.36),O.add(Wt);const se=new pn(.15,.15,.05),pe=new Rt({color:8900331}),me=new y(se,pe);me.position.set(-.2,.5,.38),O.add(me);const Ct=new y(se,pe);Ct.position.set(.2,.5,.38),O.add(Ct);const Jt=new pn(.2,.4,.2),zt=new Rt({color:8421504}),fe=new y(Jt,zt);fe.position.set(0,.95,0),O.add(fe);const Pt=new Xn(.07,.04,32,100),Ee=new Rt({color:2263842}),Pe=new y(Pt,Ee);return Pe.position.set(0,.45,.38),O.add(Pe),O.position.set(.22,-.2,0),O.scale.set(.5,.5,.5),O},I=function(O=1,Y={x:0,y:0,z:0}){const V=new Xt,mt=new Zt(1.2,.9,3,32),Lt=new Rt({color:25153}),Ut=new y(mt,Lt);V.add(Ut);const Bt=new Zt(1.3,1.3,.2,32),jt=new Rt({color:3355443}),Kt=new y(Bt,jt);return Kt.position.y=1.6,V.add(Kt),new Jn().load("/3d-bear-arts/assets/starbucks-logo.png",function(se){se.repeat.set(4,1),se.offset.set(.25,0),se.wrapS=tn,se.wrapT=tn;const pe=new Rt({color:9127187,map:se,transparent:!0}),me=new Zt(1.1,1.05,1.5,32),Ct=new y(me,pe);Ct.position.y=-.5,V.add(Ct)}),V.scale.set(O,O,O),V.position.set(Y.x,Y.y,Y.z),V},C=function(){requestAnimationFrame(C);const O=de.attributes.position.array;for(let Y=1;Y<O.length;Y+=3)O[Y]-=.02,O[Y]<-10&&(O[Y]=10);de.attributes.position.needsUpdate=!0,A.render(F,S)},E=function(){requestAnimationFrame(E);const O=ae.attributes.position.array;for(let Y=1;Y<O.length;Y+=3)O[Y]-=.02,O[Y]<-wt&&(O[Y]=wt);ae.attributes.position.needsUpdate=!0,A.render(F,S)},L=function(){requestAnimationFrame(L),i.value&&(U.rotation.y+=.03),s.value&&(U.rotation.y-=.03),o.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),b.uniforms.u_time.value+=.5,be.rotation.y+=.45,$t.rotation.y+=.05,re.rotation.y+=.05,U.rotation.y-=.05,A.render(F,S)};const F=new Zn,S=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),A=new Kn({antialias:!0,alpha:!0});A.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(A.domElement);const U=new Xt,H=new Xt;F.add(H);const J=new Ui(16777215,2);F.add(J);const it=new Di(16777215,4);it.position.set(5,5,5),F.add(it);const k=new Li(16777215,5,50);k.position.set(0,2,4),F.add(k);const tt=new Jn,W=tt.load("/3d-bear-arts/assets/house.jpg");W.wrapS=W.wrapT=tn,W.repeat.set(1,1),tt.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const gt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:De});new Ot({color:16777215,metalness:.3,map:W,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.4,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:De});const vt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:De}),xt=new Kr().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);F.environment=xt;const Dt=new Ot({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:De}),kt=new Ot({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),rt=new ct(1,32,32,0,Math.PI),dt=new y(rt,gt),bt=new y(rt,vt);dt.scale.set(.85,.85,.8),bt.scale.set(.85,.85,.8),dt.position.y=-.2,bt.position.y=-.2,dt.rotation.y=Math.PI/2,bt.rotation.y=Math.PI*1.5;const G=new Ce(1,32),ut=new y(G,Dt);ut.scale.set(.85,.85,.8),ut.position.set(0,-.2,0),ut.rotation.y=Math.PI/2;const at=new Xt;at.add(dt),at.add(bt),at.add(ut),U.add(at);const ht=new ct(.6,32,32,0,Math.PI),St=new y(ht,vt);St.scale.set(1,.95,.95),St.position.set(0,1,0),St.rotation.y=Math.PI*1.5;const st=new y(ht,gt);st.scale.set(1,.95,.95),st.position.set(0,1,0),st.rotation.y=Math.PI/2;const v=new Ce(.6,32),R=new y(v,Dt);R.position.set(0,1,0),R.rotation.y=Math.PI/2,R.scale.set(1,.95,.95);const N=new Xt;N.add(St),N.add(st),N.add(R),U.add(N);const z=new ct(.6,32,32,0,Math.PI*2,0,Math.PI/2),B=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),Z=new y(z,B);Z.position.set(0,-.2,0),Z.rotation.x=Math.PI,Z.scale.set(1.25,1.25,1.25),at.add(Z);const Q=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:De,transparent:!1,opacity:.8}),T=new y(G,Q);T.scale.set(.7,.7,.7),T.position.set(0,-.3,0),T.rotation.x=Math.PI/2,T.renderOrder=1,at.add(T),U.add(at);const b=new hn({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
            `}),D=new y(G,b);D.position.set(0,-.2,0),D.scale.set(.7,.7,.7),D.rotation.x=-Math.PI/2,D.renderOrder=2,at.add(D);const K=new ct(.25,32,32),q=new y(K,vt);q.position.set(-.45,1.35,-.1),U.add(q);const j=new y(K,gt);j.position.set(.45,1.35,-.1),U.add(j);const ft=new ct(.25,32,32,Math.PI/2,Math.PI),lt=new y(ft,vt);lt.scale.set(1.1,.6,.8),lt.position.set(0,.84,.5),lt.rotation.y=Math.PI;const _t=new ct(.25,32,32,Math.PI/2,Math.PI),At=new y(_t,gt);At.scale.set(1.1,.6,.8),At.position.set(0,.84,.5),At.rotation.y=0;const pt=new Ce(.25,32),yt=new y(pt,Dt);yt.scale.set(.8,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=Math.PI/2;const Nt=new Xt;Nt.add(lt),Nt.add(At),Nt.add(yt),U.add(Nt);const Gt=new ct(.35,32,32),It=new y(Gt,vt);It.scale.set(.75,1.25,.65),It.position.set(-.7,-.15,.2),U.add(It);const ee=new y(Gt,gt);ee.scale.set(.75,1.25,.65),ee.position.set(.7,-.15,.2),U.add(ee);const Ht=new Zt(.2,.22,.6,32),te=new y(Ht,vt);te.position.set(-.4,-1.05,0),U.add(te);const X=new y(Ht,gt);X.position.set(.4,-1.05,0),U.add(X);const Mt=new ct(.3,32,32),ot=new y(Mt,vt);ot.scale.set(1,.72,1.5),ot.position.set(-.4,-1.45,.17),U.add(ot);const nt=new y(Mt,gt);nt.scale.set(1,.72,1.5),nt.position.set(.4,-1.45,.17),U.add(nt);const Tt=new ct(.44,32,32),Et=new y(Tt,vt);Et.position.set(-.15,-.45,-.4),U.add(Et);const Yt=new y(Tt,vt);Yt.position.set(.15,-.45,-.4),U.add(Yt);const oe=new ct(.18,32,32),ce=new y(oe,vt);ce.position.set(0,-.35,-.8),U.add(ce),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(O){const Y=new ke("X",{font:O,size:.2,depth:.05}),V=new y(Y,kt);V.position.set(-.3,.99,.53),V.rotation.x=ge.degToRad(-5),V.rotation.y=ge.degToRad(-15),U.add(V);const mt=new ke("O",{font:O,size:.2,depth:.05}),Lt=new y(mt,kt);Lt.position.set(.14,.99,.53),Lt.rotation.y=ge.degToRad(12),Lt.rotation.x=ge.degToRad(-5),U.add(Lt)});const ue=g();U.add(ue),p();const ve=m();U.add(ve);const be=m();be.position.set(-.2,-.1,.5),U.add(be),M(),a.value=m(),U.add(a.value),w(a.value);const Vt=x();U.add(Vt);const qt=x();qt.position.set(-.2,-.2,0),qt.scale.set(.35,.35,.35),U.add(qt);const $t=I(.1,{x:0,y:0,z:1}),re=I(.6,{x:0,y:-1.5,z:0}),he=1e3,de=new Bn,ye=[];for(let O=0;O<he;O++){const Y=(Math.random()-.5)*20,V=Math.random()*20,mt=(Math.random()-.5)*20;ye.push(Y,V,mt)}de.setAttribute("position",new cn(ye,3));const _e=new za({color:16777215,size:.1,transparent:!0,opacity:.8}),we=new Sa(de,_e);U.add(we),C();const Ue=2e3,Te=[],wt=.6;for(let O=0;O<Ue;O++){const Y=(Math.random()-.5)*wt*2,V=(Math.random()-.5)*wt*2,mt=(Math.random()-.5)*wt*2;Math.sqrt(Y*Y+V*V+mt*mt)<wt&&Te.push(Y,V,mt)}const ae=new Bn;ae.setAttribute("position",new cn(Te,3)),new za({color:16777215,size:.05,transparent:!0,opacity:.9}),new Sa(ae,B).position.set(0,-.2,0),new Sa(ae,Q).position.set(0,.8,0),E(),U.scale.set(.85,.85,.85),U.position.set(t.bodyPosition.x,t.bodyPosition.y+.9,t.bodyPosition.z),F.add(U),F.add(re),S.position.set(t.bodyPosition.x,1,t.cameraPosition),S.lookAt(t.bodyPosition.x,0,0),S.position.z=4,U.rotation.x=.1,L(),Ve(()=>t.bodyPosition,O=>{U.position.set(O.x,O.y,O.z)}),Ve(()=>t.cameraPosition,O=>{S.position.set(t.bodyPosition.x,1,O),S.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{S.aspect=window.innerWidth/window.innerHeight,S.updateProjectionMatrix(),A.setSize(window.innerWidth,window.innerHeight)})}});function u(){s.value=!0}function h(){i.value=!0}function d(){o.value=!0}function f(){r.value=!0}function _(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let g=0;g<JT;g++){const p=document.createElement("div");p.classList.add("confetti"),p.style.left=`${Math.random()*100}vw`,p.style.animationDuration=`${Math.random()*3+4}s`,p.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(p)}for(let g=0;g<QT;g++){const p=document.createElement("div");p.classList.add("light"),document.body.appendChild(p)}return(g,p)=>(ei(),li(En,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",KT,[Ft("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),Ft("div",ZT,[Ft("button",{class:"pixel-btn left",onMousedown:u,onMouseup:_},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:h,onMouseup:_},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:f,onMouseup:_},"DOWN",32)])],64))}}),e3=ui(t3,[["__scopeId","data-v-ceb84432"]]),n3={key:0,class:"bear-face-container"},i3=zn({__name:"BearFaceWhite",props:{color:{type:String,default:"white"}},setup(n){const t=Qt(null),e=Qt(!1),i=n;return ti(()=>{const s=t.value;if(s){s.width=window.innerWidth,s.height=window.innerHeight*.7;const o=s.getContext("2d");o&&(()=>{const a=s.width/2,c=s.height/1.8,l=s.height/2,u=s.height/2.05,h=l*.45,d=l*.18,f=l*.3,_=l*.275,g=f*.35,p=f*.32;o.save(),o.beginPath(),o.rect(0,0,s.width/2,s.height),o.clip(),o.lineWidth=15,o.strokeStyle=i.color,o.beginPath(),o.arc(a-l*.85,c-u*.8,h,0,Math.PI*2,!0),o.stroke(),o.beginPath(),o.arc(a+l*.85,c-l*.8,h,0,Math.PI*2,!0),o.stroke(),o.lineWidth=15,o.beginPath(),o.arc(a,c,u,0,Math.PI*2,!0),o.stroke(),o.lineWidth=15,o.beginPath(),o.arc(a-l*.4,c-l*.2,d,0,Math.PI*2,!0),o.stroke(),o.beginPath(),o.moveTo(a+l*.2,c-l*.3),o.lineTo(a+l*.5,c-l*.05),o.moveTo(a+l*.5,c-l*.3),o.lineTo(a+l*.2,c-l*.05),o.stroke(),o.beginPath(),o.ellipse(a,c+l*.4,_*1.5,_,0,0,Math.PI*2),o.stroke(),o.beginPath(),o.arc(a,c+l*.3,p,0,Math.PI*2,!0),o.stroke(),o.restore(),o.save(),o.beginPath(),o.rect(s.width/2,0,s.width/2,s.height),o.clip(),o.fillStyle=i.color,o.beginPath(),o.arc(a-l*.85,c-l*.8,h,0,Math.PI*2,!0),o.fill(),o.beginPath(),o.arc(a+l*.85,c-l*.8,h,0,Math.PI*2,!0),o.fill(),o.beginPath(),o.arc(a,c,l,0,Math.PI*2,!0),o.fill(),o.fillStyle=i.color,o.beginPath(),o.arc(a-l*.4,c-l*.2,d,0,Math.PI*2,!0),o.fill(),o.lineWidth=15,o.beginPath(),o.moveTo(a+l*.2,c-l*.3),o.lineTo(a+l*.5,c-l*.05),o.moveTo(a+l*.5,c-l*.3),o.lineTo(a+l*.2,c-l*.05),o.strokeStyle="#000000",o.stroke(),o.fillStyle="#000000",o.beginPath(),o.ellipse(a,c+l*.4,f*1.5,f,0,0,Math.PI*2),o.fill(),o.fillStyle=i.color,o.beginPath(),o.arc(a,c+l*.3,g*1.2,0,Math.PI*2,!0),o.fill(),o.restore()})()}}),(s,o)=>e.value?Sy("",!0):(ei(),li("div",n3,[Ft("canvas",{ref_key:"bearCanvas",ref:t},null,512)]))}}),Lg=ui(i3,[["__scopeId","data-v-6ce68a75"]]),s3={class:"pixel-controls"},o3={class:"side-buttons"},r3=15,a3=5,c3=zn({__name:"SliverBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);ti(()=>{if(e.value){let d=function(){M.visible=!1,L.update(m,g),M.visible=!0,requestAnimationFrame(d)},f=function(){const Vt=new Xt,qt=new Rt({color:16777215}),$t=new Rt({color:16753920}),re=new Rt({color:0}),he=new Rt({color:16711680}),de=new Rt({color:9127187}),ye=new ct(.5,32,32),_e=new y(ye,qt);_e.position.set(0,1.5,0),Vt.add(_e);const we=new Zt(.25,.2,.5,32),Ue=new y(we,$t);Ue.position.set(0,1.3,.5),Ue.rotation.x=Math.PI/2,Vt.add(Ue);const Te=new ct(.8,32,32),wt=new y(Te,qt);wt.position.set(0,.6,0),Vt.add(wt);const ae=new Zt(.2,.2,.6,32),P=new y(ae,$t);P.position.set(-.3,-.6,0),Vt.add(P);const $=new y(ae,$t);$.position.set(.3,-.6,0),Vt.add($);const O=new pn(.5,.2,.3),Y=new y(O,$t);Y.position.set(-.3,-.9,.15),Vt.add(Y);const V=new y(O,$t);V.position.set(.3,-.9,.15),Vt.add(V);const mt=new Zt(.4,.4,.1,32),Lt=new y(mt,re);Lt.position.set(0,2.1,0),Vt.add(Lt);const Ut=new Zt(.3,.3,.6,32),Bt=new y(Ut,re);Bt.position.set(0,2.4,0),Vt.add(Bt);const jt=new Xn(.2,.05,16,100),Kt=new y(jt,he);Kt.position.set(0,1,.5),Vt.add(Kt);const Wt=new Zt(.05,.05,2,32),se=new y(Wt,de);return se.position.set(.5,0,0),se.rotation.z=Math.PI/8,Vt.add(se),Vt},_=function(){requestAnimationFrame(_),Dt.uniforms.time.value+=.05,gt.uniforms.time.value+=.05,i.value&&(M.rotation.y+=.05),s.value&&(M.rotation.y-=.07),o.value&&(M.rotation.x-=.05),r.value&&(M.rotation.x+=.05),m.render(g,p)};const g=new Zn,p=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),m=new Kn({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const M=new Xt,w=new Ui(16777215,2);g.add(w);const x=new Di(16777215,4);x.position.set(5,5,5),g.add(x);const I=new Li(16777215,5,50);I.position.set(0,2,4),g.add(I);const C=new Jn,E=new nc(256,{format:ci,generateMipmaps:!0,minFilter:Ki}),L=new ec(1,1e3,E);new Ot({color:12632256,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:E.texture,envMapIntensity:1.5}),g.add(L),g.environment=E.texture,d();const S=new Kr().load(["/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg"]);g.environment=S;const A=new Ot({color:"hotpink",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:S,reflectivity:1}),U=new Ot({color:"hotpink",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,envMap:S,reflectivity:0}),H=new Ot({color:"hotpink",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.35,envMap:S,reflectivity:0}),J=C.load("/3d-bear-arts/assets/popbear1.jpg"),it=new Ot({color:"hotpink",map:J,metalness:.3,roughness:.5,transparent:!0,opacity:1}),k=new hn({uniforms:{time:{value:0},color1:{value:new Se(16766720)},color2:{value:new Se(16007990)}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec3 color1;
            uniform vec3 color2;
            varying vec2 vUv;
            void main() {
              vec3 color = mix(color1, color2, sin(vUv.y * 10.0 + time) * 0.5 + 0.5);
              gl_FragColor = vec4(color, 1.0);
            }
          `}),tt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,W=`
        uniform float time;
            uniform float opacity; // Add opacity uniform
            varying vec2 vUv;
        
            void main() {
                // Dynamic water-like gradient effect
                vec2 p = vUv * 2.0 - vec2(1.0); // Normalize UV coordinates to [-1, 1]
                float len = length(p); // Get the length of the vector (distance from center)
                float angle = atan(p.y, p.x); // Calculate the angle in polar coordinates
        
                // Create a time-based oscillating value for smooth gradient transitions
                float wave = sin(len * 10.0 - time * 3.0) * 1.0 + 0.5;
        
                // Color gradient based on the angle and distance from the center
                vec3 color1 = vec3(1.0, 0.078, 0.576); 
                vec3 color2 = vec3(0.878, 0.878, 0.878); 
                vec3 color3 = vec3(1.0, 0.0, 0.8); 
        
                // Mix the colors based on wave and angle for a dynamic effect
                vec3 color = mix(color1, color2, wave);
                color = mix(color, color3, sin(angle + time) * 0.5 + 0.5);
        
                // Set the fragment color with opacity
                gl_FragColor = vec4(color, opacity); // Use the opacity uniform for transparency
            }
      `,gt=new hn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:tt,fragmentShader:W,transparent:!1,depthWrite:!0}),vt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,xt=`
        uniform float time;
            uniform float opacity; // Add opacity uniform
            varying vec2 vUv;
        
            void main() {
                // Dynamic water-like gradient effect
                vec2 p = vUv * 2.0 - vec2(1.0); // Normalize UV coordinates to [-1, 1]
                float len = length(p); // Get the length of the vector (distance from center)
                float angle = atan(p.y, p.x); // Calculate the angle in polar coordinates
        
                // Create a time-based oscillating value for smooth gradient transitions
                float wave = sin(len * 10.0 - time * 3.0) * 1.0 + 0.5;
        
                // Color gradient based on the angle and distance from the center
                vec3 color1 = vec3(1.0, 0.3, 0.5); // Pinkish
                vec3 color2 = vec3(0.3, 0.6, 1.0); // Blueish
                vec3 color3 = vec3(1.0, 0.0, 0.8); // Magenta
        
                // Mix the colors based on wave and angle for a dynamic effect
                vec3 color = mix(color1, color2, wave);
                color = mix(color, color3, sin(angle + time) * 0.5 + 0.5);
        
                // Set the fragment color with opacity
                gl_FragColor = vec4(color, opacity); // Use the opacity uniform for transparency
            }
      `,Dt=new hn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:vt,fragmentShader:xt,transparent:!1,depthWrite:!0}),kt=new ct(1,32,32,0,Math.PI),rt=new y(kt,H),dt=new y(kt,A);rt.scale.set(.85,.85,.8),dt.scale.set(.85,.85,.8),rt.position.y=-.2,dt.position.y=-.2,rt.rotation.y=Math.PI/2,dt.rotation.y=Math.PI*1.5;const bt=new Ce(1,32),G=new y(bt,it);G.scale.set(.85,.85,.8),G.position.set(0,-.2,0),G.rotation.y=Math.PI/2;const ut=new Xt;ut.add(rt),ut.add(dt),ut.add(G),M.add(ut);const at=new ct(.6,32,32,0,Math.PI),ht=new y(at,A);ht.scale.set(1,.95,.95),ht.position.set(0,1,0),ht.rotation.y=Math.PI*1.5;const St=new y(at,H);St.scale.set(1,.95,.95),St.position.set(0,1,0),St.rotation.y=Math.PI/2;const st=new Ce(.6,32),v=new y(st,it);v.position.set(0,1,0),v.rotation.y=Math.PI/2,v.scale.set(1,.95,.95);const R=new Xt;R.add(ht),R.add(St),R.add(v),M.add(R);const N=new ct(.25,32,32),z=new y(N,A);z.position.set(-.45,1.35,-.1),M.add(z);const B=new y(N,H);B.position.set(.45,1.35,-.1),M.add(B);const Z=new ct(.25,32,32,Math.PI/2,Math.PI),Q=new y(Z,A);Q.scale.set(1.1,.6,.8),Q.position.set(0,.84,.5),Q.rotation.y=Math.PI;const T=new ct(.25,32,32,Math.PI/2,Math.PI),b=new y(T,U);b.scale.set(1.1,.6,.8),b.position.set(0,.84,.5),b.rotation.y=0;const D=new Ce(.25,32),K=new y(D,it);K.scale.set(.8,.6,.8),K.position.set(0,.84,.5),K.rotation.y=Math.PI/2;const q=new Xt;q.add(Q),q.add(b),q.add(K),M.add(q);const j=new Tn;j.moveTo(0,0),j.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),j.bezierCurveTo(-.6,.3,0,.6,0,1),j.bezierCurveTo(0,.6,.6,.3,.6,0),j.bezierCurveTo(.6,-.3,0,-.3,0,0);const ft={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},lt=new Pn(j,ft),_t=new y(lt,gt);_t.scale.set(.38,.38,.38),_t.position.set(.35,0,0),_t.rotation.y=Math.PI,_t.rotation.x=Math.PI,M.add(_t);const At=new y(lt,gt);At.scale.set(.35,.35,.35),At.position.set(.3,0,0),At.rotation.y=Math.PI,At.rotation.x=Math.PI,M.add(At);const pt=new y(lt,A);pt.scale.set(.22,.22,.22),pt.position.set(.27,.4,0),pt.rotation.y=Math.PI,pt.rotation.x=Math.PI,M.add(pt);const yt=new y(lt,A);yt.scale.set(.25,.25,.25),yt.position.set(.23,-.5,.3),yt.rotation.y=Math.PI,yt.rotation.x=Math.PI,M.add(yt);const Nt=new y(lt,A);Nt.scale.set(.3,.3,.3),Nt.position.set(.23,.2,-.4),Nt.rotation.y=Math.PI,Nt.rotation.x=Math.PI,M.add(Nt);const Gt=new ct(.35,32,32),It=new y(Gt,A);It.scale.set(.75,1.25,.65),It.position.set(-.7,-.15,.2),M.add(It);const ee=new y(Gt,U);ee.scale.set(.75,1.25,.65),ee.position.set(.7,-.15,.2),M.add(ee);const Ht=new Zt(.2,.22,.6,32),te=new y(Ht,A);te.position.set(-.4,-1.05,0),M.add(te);const X=new y(Ht,U);X.position.set(.4,-1.05,0),M.add(X);const Mt=new ct(.3,32,32),ot=new y(Mt,A);ot.scale.set(1,.72,1.5),ot.position.set(-.4,-1.45,.17),M.add(ot);const nt=new y(Mt,U);nt.scale.set(1,.72,1.5),nt.position.set(.4,-1.45,.17),M.add(nt);const Tt=new ct(.44,32,32),Et=new y(Tt,A);Et.position.set(-.15,-.45,-.4),M.add(Et);const Yt=new y(Tt,U);Yt.position.set(.15,-.45,-.4),M.add(Yt);const oe=new ct(.18,32,32),ce=new y(oe,A);ce.position.set(0,-.35,-.8),M.add(ce),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Vt){const qt=new ke("X",{font:Vt,size:.18,depth:.05}),$t=new y(qt,gt);$t.position.set(-.3,.99,.53),$t.rotation.x=ge.degToRad(-5),$t.rotation.y=ge.degToRad(-15),M.add($t);const re=new ke("+",{font:Vt,size:.25,depth:.1}),he=new y(re,gt);he.position.set(.14,.99,.53),he.rotation.y=ge.degToRad(12),he.rotation.x=ge.degToRad(-5),M.add(he)}),ce.renderOrder=1;const ue=f();ue.scale.set(.2,.2,.2),ue.position.set(1,.6,.3),M.scale.set(1.4,1.4,1.4),g.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),p.position.set(t.bodyPosition.x,1.4,t.cameraPosition),p.lookAt(t.bodyPosition.x,0,0),p.position.z=4;let ve=Qt(!1);const be=Vt=>{if(ve.value){const qt={x:Vt.clientX/window.innerWidth*2-1,y:-(Vt.clientY/window.innerHeight)*2+1},$t=qt.x*Math.PI*.2,re=qt.y*Math.PI*.2;M.rotation.y=$t,M.rotation.x=re}};window.addEventListener("mousemove",be),k.uniforms.time.value+=.04,_(),Ve(()=>t.bodyPosition,Vt=>{M.position.set(Vt.x,Vt.y,Vt.z)}),Ve(()=>t.cameraPosition,Vt=>{p.position.set(t.bodyPosition.x,1,Vt),p.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{p.aspect=window.innerWidth/window.innerHeight,p.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function u(){r.value=!0}function h(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let d=0;d<r3;d++){const f=document.createElement("div");f.classList.add("confetti"),f.style.left=`${Math.random()*100}vw`,f.style.animationDuration=`${Math.random()*3+4}s`,f.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(f)}for(let d=0;d<a3;d++){const f=document.createElement("div");f.classList.add("light"),document.body.appendChild(f)}return(d,f)=>(ei(),li(En,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",null,[qe(Lg,{class:"bear-background",color:"#FF69B4"})]),Ft("div",s3,[Ft("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:h},"▲",32),Ft("div",o3,[Ft("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:h},"◀",32),Ft("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:h},"▶",32)]),Ft("button",{class:"pixel-btn down border-gold",onMousedown:u,onMouseup:h},"▼",32)])],64))}}),l3=ui(c3,[["__scopeId","data-v-3211ab27"]]),u3={class:"pixel-controls"},h3={class:"side-buttons"},d3=15,f3=5,p3=zn({__name:"Money",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);ti(()=>{if(e.value){let d=function(){x.visible=!1,A.update(w,m),x.visible=!0,requestAnimationFrame(d)},f=function(){const qt=new Xt;new Rt({color:16777215}),new Rt({color:16770244}),new Rt({color:16776960}),new Rt({color:16316671});const $t=new ct(.2,32,32),re=new y($t,k);re.position.set(0,1.5,0),qt.add(re);const he=new Zt(.2,.35,.6,32),de=new y(he,k);de.position.set(0,1,0),qt.add(de);const ye=new Tn;ye.moveTo(0,0),ye.bezierCurveTo(.5,.2,.8,.7,.5,1.5),ye.bezierCurveTo(.3,1.3,0,.8,0,0);const _e=new Pn(ye,{depth:.05,bevelEnabled:!1}),we=new y(_e,kt);we.position.set(-.2,1.2,-.05),we.rotation.y=Math.PI/12,we.rotation.z=Math.PI/4,we.scale.set(-.5,.5,.5),qt.add(we);const Ue=new y(_e,kt);Ue.position.set(-.1,1.1,-.05),Ue.rotation.y=Math.PI/10,Ue.rotation.z=Math.PI/3,Ue.scale.set(-.5,.5,.5),qt.add(Ue);const Te=new y(_e,kt);Te.position.set(0,1,-.05),Te.rotation.y=Math.PI/8,Te.rotation.z=Math.PI/2.5,Te.scale.set(-.5,.5,.5),qt.add(Te);const wt=new y(_e,kt);wt.position.set(.2,1.2,-.05),wt.rotation.y=-Math.PI/12,wt.rotation.z=-Math.PI/4,wt.scale.set(.5,.5,.5),qt.add(wt);const ae=new y(_e,kt);ae.position.set(.1,1.1,-.05),ae.rotation.y=-Math.PI/10,ae.rotation.z=-Math.PI/3,ae.scale.set(.5,.5,.5),qt.add(ae);const P=new y(_e,kt);P.position.set(0,1,-.05),P.rotation.y=-Math.PI/8,P.rotation.z=-Math.PI/2.5,P.scale.set(.5,.5,.5),qt.add(P);const $=new Xn(.15,.05,16,100),O=new y($,kt);O.position.set(0,1.8,0),O.rotation.x=Math.PI/2,qt.add(O);const Y=new Zt(.05,.05,.3,32),V=new y(Y,kt);V.position.set(-.15,.55,0),V.rotation.z=Math.PI/1;const mt=new y(Y,kt);return mt.position.set(.15,.55,0),mt.rotation.z=-Math.PI/1,qt.add(V),qt.add(mt),qt},_=function(){const qt=new Xt,$t=new Zt(.8,.8,.25,32),re=new y($t,k);qt.add(re);const he=new Ai(.2,.4,32),de=8,ye=.6;for(let we=0;we<de;we++){const Ue=we/de*Math.PI*2,Te=new y(he,k);Te.position.set(Math.cos(Ue)*ye,.23,Math.sin(Ue)*ye),Te.rotation.y=-Ue,qt.add(Te)}const _e=new ct(.08,16,16);for(let we=0;we<de;we++){const Ue=we/de*Math.PI*2,Te=new y(_e,kt);Te.position.set(Math.cos(Ue)*ye,.45,Math.sin(Ue)*ye),qt.add(Te)}return qt},g=function(){requestAnimationFrame(g),ve.rotation.y+=.01,w.render(m,M)},p=function(){requestAnimationFrame(p),bt.uniforms.time.value+=.05,kt.uniforms.time.value+=.05,i.value&&(x.rotation.y+=.05),s.value&&(x.rotation.y-=.07),o.value&&(x.rotation.x-=.05),r.value&&(x.rotation.x+=.05),w.render(m,M)};const m=new Zn,M=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),w=new Kn({antialias:!0,alpha:!0});w.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(w.domElement);const x=new Xt,I=new Ui(16777215,2);m.add(I);const C=new Di(16777215,4);C.position.set(5,5,5),m.add(C);const E=new Li(16777215,5,50);E.position.set(0,2,4),m.add(E);const F=new Jn().load("/3d-bear-arts/assets/cashwings.jpg"),S=new nc(256,{format:ci,generateMipmaps:!0,minFilter:Ki}),A=new ec(1,1e3,S),U=new Ot({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:S.texture,envMapIntensity:1.5});m.add(A),m.environment=S.texture,d();const H=new Kr,J=H.load(["/3d-bear-arts/assets/cash2.jpg","/3d-bear-arts/assets/cash8.jpg","/3d-bear-arts/assets/cash1.jpg","/3d-bear-arts/assets/cash11.jpg","/3d-bear-arts/assets/cash4.jpg","/3d-bear-arts/assets/cash3.jpg"]);m.environment=J;const it=H.load(["/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg"]);m.environment=it;const k=new Ot({color:"lightgreen",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:J,reflectivity:1});new Ot({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:it,reflectivity:1});const tt=new Ot({color:"lightgreen",map:F,metalness:.3,roughness:.5,transparent:!0,opacity:1}),W=new Ot({color:"lightgreen",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,envMap:J,reflectivity:0}),gt=new Ot({color:"lightgreen",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.35,envMap:J,reflectivity:0}),vt=new hn({uniforms:{time:{value:0},color1:{value:new Se(16766720)},color2:{value:new Se(16007990)}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec3 color1;
            uniform vec3 color2;
            varying vec2 vUv;
            void main() {
              vec3 color = mix(color1, color2, sin(vUv.y * 10.0 + time) * 0.5 + 0.5);
              gl_FragColor = vec4(color, 1.0);
            }
          `}),xt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,Dt=`
        uniform float time;
            uniform float opacity; // Add opacity uniform
            varying vec2 vUv;
        
            void main() {
                // Dynamic water-like gradient effect
                vec2 p = vUv * 2.0 - vec2(1.0); // Normalize UV coordinates to [-1, 1]
                float len = length(p); // Get the length of the vector (distance from center)
                float angle = atan(p.y, p.x); // Calculate the angle in polar coordinates
        
                // Create a time-based oscillating value for smooth gradient transitions
                float wave = sin(len * 10.0 - time * 3.0) * 1.0 + 0.5;
        
                // Color gradient based on the angle and distance from the center
                vec3 color1 = vec3(0.6, 1.0, 0.6);  // green
                vec3 color3 = vec3(0.878, 0.878, 0.878); // sliver
                vec3 color2 = vec3(1.0, 0.078, 0.576); // pink

                // Mix the colors based on wave and angle for a dynamic effect
                vec3 color = mix(color1, color2, wave);
                color = mix(color, color3, sin(angle + time) * 0.5 + 0.5);
        
                // Set the fragment color with opacity
                gl_FragColor = vec4(color, opacity); // Use the opacity uniform for transparency
            }
      `,kt=new hn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:xt,fragmentShader:Dt,transparent:!1,depthWrite:!0}),rt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,dt=`
        uniform float time;
            uniform float opacity; // Add opacity uniform
            varying vec2 vUv;
        
            void main() {
                // Dynamic water-like gradient effect
                vec2 p = vUv * 2.0 - vec2(1.0); // Normalize UV coordinates to [-1, 1]
                float len = length(p); // Get the length of the vector (distance from center)
                float angle = atan(p.y, p.x); // Calculate the angle in polar coordinates
        
                // Create a time-based oscillating value for smooth gradient transitions
                float wave = sin(len * 10.0 - time * 3.0) * 1.0 + 0.5;
        
                // Color gradient based on the angle and distance from the center
                vec3 color1 = vec3(1.0, 0.3, 0.5); // Pinkish
                vec3 color2 = vec3(0.3, 0.6, 1.0); // Blueish
                vec3 color3 = vec3(1.0, 0.0, 0.8); // Magenta
        
                // Mix the colors based on wave and angle for a dynamic effect
                vec3 color = mix(color1, color2, wave);
                color = mix(color, color3, sin(angle + time) * 0.5 + 0.5);
        
                // Set the fragment color with opacity
                gl_FragColor = vec4(color, opacity); // Use the opacity uniform for transparency
            }
      `,bt=new hn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:rt,fragmentShader:dt,transparent:!1,depthWrite:!0}),G=new ct(1,32,32,0,Math.PI),ut=new y(G,gt),at=new y(G,k);ut.scale.set(.85,.85,.8),at.scale.set(.85,.85,.8),ut.position.y=-.2,at.position.y=-.2,ut.rotation.y=Math.PI/2,at.rotation.y=Math.PI*1.5;const ht=new Ce(1,32),St=new y(ht,tt);St.scale.set(.85,.85,.8),St.position.set(0,-.2,0),St.rotation.y=Math.PI/2;const st=new Xt;st.add(ut),st.add(at),st.add(St),x.add(st);const v=new ct(.6,32,32,0,Math.PI),R=new y(v,k);R.scale.set(1,.95,.95),R.position.set(0,1,0),R.rotation.y=Math.PI*1.5;const N=new y(v,gt);N.scale.set(1,.95,.95),N.position.set(0,1,0),N.rotation.y=Math.PI/2;const z=new Ce(.6,32),B=new y(z,tt);B.position.set(0,1,0),B.rotation.y=Math.PI/2,B.scale.set(1,.95,.95);const Z=new Xt;Z.add(R),Z.add(N),Z.add(B),x.add(Z);const Q=new ct(.25,32,32),T=new y(Q,k);T.position.set(-.45,1.35,-.1),x.add(T);const b=new y(Q,gt);b.position.set(.45,1.35,-.1),x.add(b);const D=new ct(.25,32,32,Math.PI/2,Math.PI),K=new y(D,k);K.scale.set(1.1,.6,.8),K.position.set(0,.84,.5),K.rotation.y=Math.PI;const q=new ct(.25,32,32,Math.PI/2,Math.PI),j=new y(q,W);j.scale.set(1.1,.6,.8),j.position.set(0,.84,.5),j.rotation.y=0;const ft=new Ce(.25,32),lt=new y(ft,tt);lt.scale.set(.8,.6,.8),lt.position.set(0,.84,.5),lt.rotation.y=Math.PI/2;const _t=new Xt;_t.add(K),_t.add(j),_t.add(lt),x.add(_t);const At=new Tn;At.moveTo(0,0),At.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),At.bezierCurveTo(-.6,.3,0,.6,0,1),At.bezierCurveTo(0,.6,.6,.3,.6,0),At.bezierCurveTo(.6,-.3,0,-.3,0,0);const pt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},yt=new Pn(At,pt),Nt=new y(yt,U);Nt.scale.set(.38,.38,.38),Nt.position.set(.35,0,0),Nt.rotation.y=Math.PI,Nt.rotation.x=Math.PI;const Gt=new ct(.35,32,32),It=new y(Gt,k);It.scale.set(.75,1.25,.65),It.position.set(-.7,-.15,.2),x.add(It);const ee=new y(Gt,W);ee.scale.set(.75,1.25,.65),ee.position.set(.7,-.15,.2),x.add(ee);const Ht=new Zt(.2,.22,.6,32),te=new y(Ht,k);te.position.set(-.4,-1.05,0),x.add(te);const X=new y(Ht,W);X.position.set(.4,-1.05,0),x.add(X);const Mt=new ct(.3,32,32),ot=new y(Mt,k);ot.scale.set(1,.72,1.5),ot.position.set(-.4,-1.45,.17),x.add(ot);const nt=new y(Mt,W);nt.scale.set(1,.72,1.5),nt.position.set(.4,-1.45,.17),x.add(nt);const Tt=new ct(.44,32,32),Et=new y(Tt,k);Et.position.set(-.15,-.45,-.4),x.add(Et);const Yt=new y(Tt,W);Yt.position.set(.15,-.45,-.4),x.add(Yt);const oe=new ct(.18,32,32),ce=new y(oe,k);ce.position.set(0,-.35,-.8),x.add(ce),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(qt){const $t=new ke("X",{font:qt,size:.18,depth:.05}),re=new y($t,kt);re.position.set(-.3,.99,.53),re.rotation.x=ge.degToRad(-5),re.rotation.y=ge.degToRad(-15),x.add(re);const he=new ke("+",{font:qt,size:.25,depth:.1}),de=new y(he,kt);de.position.set(.14,.99,.53),de.rotation.y=ge.degToRad(12),de.rotation.x=ge.degToRad(-5),x.add(de)}),ce.renderOrder=1;const ue=f();ue.scale.set(.37,.37,.37),ue.position.set(.35,-.5,.25),x.add(ue);const ve=_();ve.scale.set(.3,.3,.3),ve.position.set(-.06,1.6,.1),ve.rotation.set(0,0,Math.PI/20),x.add(ve),g(),x.scale.set(1.4,1.4,1.4),m.add(x),x.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),M.position.set(t.bodyPosition.x,1.4,t.cameraPosition),M.lookAt(t.bodyPosition.x,0,0),M.position.z=4;let be=Qt(!1);const Vt=qt=>{if(be.value){const $t={x:qt.clientX/window.innerWidth*2-1,y:-(qt.clientY/window.innerHeight)*2+1},re=$t.x*Math.PI*.2,he=$t.y*Math.PI*.2;x.rotation.y=re,x.rotation.x=he}};window.addEventListener("mousemove",Vt),vt.uniforms.time.value+=.04,p(),Ve(()=>t.bodyPosition,qt=>{x.position.set(qt.x,qt.y,qt.z)}),Ve(()=>t.cameraPosition,qt=>{M.position.set(t.bodyPosition.x,1,qt),M.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)})}});let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function u(){r.value=!0}function h(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let d=0;d<d3;d++){const f=document.createElement("div");f.classList.add("confetti"),f.style.left=`${Math.random()*100}vw`,f.style.animationDuration=`${Math.random()*3+4}s`,f.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(f)}for(let d=0;d<f3;d++){const f=document.createElement("div");f.classList.add("light"),document.body.appendChild(f)}return(d,f)=>(ei(),li(En,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",null,[qe(Lg,{class:"bear-background",color:"lightgreen"})]),Ft("div",u3,[Ft("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:h},"▲",32),Ft("div",h3,[Ft("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:h},"◀",32),Ft("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:h},"▶",32)]),Ft("button",{class:"pixel-btn down border-gold",onMousedown:u,onMouseup:h},"▼",32)])],64))}}),m3=ui(p3,[["__scopeId","data-v-a61659ca"]]),g3={class:"pixel-controls"},_3={class:"side-buttons"},v3=15,y3=5,x3=zn({__name:"Snowman",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);ti(()=>{if(e.value){let d=function(){E.visible=!1,J.update(C,x),E.visible=!0,requestAnimationFrame(d)},f=function(){const Ct=document.createElement("canvas"),Jt=Ct.getContext("2d");Ct.width=512,Ct.height=512;const zt=Ct.width/10;for(let Pt=0;Pt<10;Pt++)Jt.fillStyle=Pt%2===0?"#FF0000":"#FFFFFF",Jt.fillRect(Pt*zt,0,zt,Ct.height);const fe=new EE(Ct);return fe.wrapS=tn,fe.wrapT=tn,fe.repeat.set(1,0),fe},_=function(){const Ct=new Xt,Jt=new Rt({color:16777215}),zt=new Rt({color:0}),fe=new Rt({color:16753920}),Pt=new Rt({color:16711680}),Ee=new Rt({color:0}),Pe=new y(new ct(.6,32,32),Jt);Pe.position.set(0,.6,0),Ct.add(Pe);const Me=new y(new ct(.4,32,32),Jt);Me.position.set(0,1.2,0),Ct.add(Me);const Be=new y(new ct(.3,32,32),Jt);Be.position.set(0,1.7,0),Ct.add(Be);const xe=new y(new ct(.05,16,16),zt);xe.position.set(-.1,1.75,.25),Ct.add(xe);const Oe=new y(new ct(.05,16,16),zt);Oe.position.set(.1,1.75,.25),Ct.add(Oe);const Ye=new Ai(.05,.2,32),Ne=new y(Ye,fe);Ne.position.set(0,1.7,.35),Ne.rotation.x=Math.PI/2,Ct.add(Ne);for(let wn=0;wn<3;wn++){const An=new y(new ct(.05,16,16),zt);An.position.set(0,1-wn*.3,.4),Ct.add(An)}const We=new Xn(.3,.08,16,100),sn=new y(We,Pt);sn.position.set(0,1.45,0),sn.rotation.x=Math.PI/2,Ct.add(sn);const Ke=new pn(.1,.4,.05),_n=new y(Ke,Pt);_n.position.set(.25,1.3,0),Ct.add(_n);const dn=new Zt(.3,.3,.05,32),en=new y(dn,Ee);en.position.set(0,1.9,0),Ct.add(en);const ln=new Zt(.2,.2,.3,32),on=new y(ln,Ee);return on.position.set(0,2.05,0),Ct.add(on),Ct},g=function(){const Ct=new Xt;new Rt({color:16777215});const Jt=new Rt({color:0}),zt=new Rt({color:16753920}),fe=new Rt({color:16711680}),Pt=new Rt({color:0}),Ee=new y(new ct(.6,32,32),W);Ee.position.set(0,.6,0),Ct.add(Ee);const Pe=new y(new ct(.4,32,32),W);Pe.position.set(0,1.2,0),Ct.add(Pe);const Me=new y(new ct(.3,32,32),W);Me.position.set(0,1.7,0),Ct.add(Me);const Be=new y(new ct(.05,16,16),Jt);Be.position.set(-.1,1.75,.25),Ct.add(Be);const xe=new y(new ct(.05,16,16),Jt);xe.position.set(.1,1.75,.25),Ct.add(xe);const Oe=new Ai(.05,.2,32),Ye=new y(Oe,zt);Ye.position.set(0,1.7,.35),Ye.rotation.x=Math.PI/2,Ct.add(Ye);for(let on=0;on<3;on++){const wn=new y(new ct(.05,16,16),Jt);wn.position.set(0,1-on*.3,.4),Ct.add(wn)}const Ne=new Xn(.3,.08,16,100),We=new y(Ne,fe);We.position.set(0,1.45,0),We.rotation.x=Math.PI/2,Ct.add(We);const sn=new pn(.1,.4,.05),Ke=new y(sn,fe);Ke.position.set(.25,1.3,0),Ct.add(Ke);const _n=new Zt(.3,.3,.05,32),dn=new y(_n,Pt);dn.position.set(0,1.9,0),Ct.add(dn);const en=new Zt(.2,.2,.3,32),ln=new y(en,Pt);return ln.position.set(0,2.05,0),Ct.add(ln),Ct},p=function(){const Ct=new Xt;new Rt({color:16777215});const Jt=new Rt({color:16770244}),zt=new Rt({color:16776960}),fe=new Rt({color:16316671}),Pt=new ct(.2,32,32),Ee=new y(Pt,Jt);Ee.position.set(0,1.5,0),Ct.add(Ee);const Pe=new Zt(.2,.35,.6,32),Me=new y(Pe,Jt);Me.position.set(0,1,0),Ct.add(Me);const Be=new Tn;Be.moveTo(0,0),Be.bezierCurveTo(.5,.2,.8,.7,.5,1.5),Be.bezierCurveTo(.3,1.3,0,.8,0,0);const xe=new Pn(Be,{depth:.05,bevelEnabled:!1}),Oe=new y(xe,fe);Oe.position.set(-.2,1.2,-.05),Oe.rotation.y=Math.PI/12,Oe.rotation.z=Math.PI/4,Oe.scale.set(-.5,.5,.5),Ct.add(Oe);const Ye=new y(xe,fe);Ye.position.set(-.1,1.1,-.05),Ye.rotation.y=Math.PI/10,Ye.rotation.z=Math.PI/3,Ye.scale.set(-.5,.5,.5),Ct.add(Ye);const Ne=new y(xe,fe);Ne.position.set(0,1,-.05),Ne.rotation.y=Math.PI/8,Ne.rotation.z=Math.PI/2.5,Ne.scale.set(-.5,.5,.5),Ct.add(Ne);const We=new y(xe,fe);We.position.set(.2,1.2,-.05),We.rotation.y=-Math.PI/12,We.rotation.z=-Math.PI/4,We.scale.set(.5,.5,.5),Ct.add(We);const sn=new y(xe,fe);sn.position.set(.1,1.1,-.05),sn.rotation.y=-Math.PI/10,sn.rotation.z=-Math.PI/3,sn.scale.set(.5,.5,.5),Ct.add(sn);const Ke=new y(xe,fe);Ke.position.set(0,1,-.05),Ke.rotation.y=-Math.PI/8,Ke.rotation.z=-Math.PI/2.5,Ke.scale.set(.5,.5,.5),Ct.add(Ke);const _n=new Xn(.15,.05,16,100),dn=new y(_n,zt);dn.position.set(0,1.8,0),dn.rotation.x=Math.PI/2,Ct.add(dn);const en=new Zt(.05,.05,.3,32),ln=new y(en,Jt);ln.position.set(-.15,.55,0),ln.rotation.z=Math.PI/1;const on=new y(en,Jt);return on.position.set(.15,.55,0),on.rotation.z=-Math.PI/1,Ct.add(ln),Ct.add(on),Ct},m=function(){requestAnimationFrame(m);const Ct=1.5,Jt=.5;ye+=.03,we+=.005*Te,we>Jt&&(Te=-1),we<-Jt&&(Te=1),ae.position.x=Math.cos(ye)*Ct,ae.position.z=Math.sin(ye)*Ct,ae.position.y=we+1,_e+=.03,Ue+=.005*wt,Ue>Jt&&(wt=-1),Ue<-Jt&&(wt=1),P.position.x=Math.cos(_e)*Ct,P.position.z=Math.sin(_e)*Ct,P.position.y=Ue+1,ae.lookAt(E.position),P.lookAt(E.position),C.render(x,I)},M=function(){requestAnimationFrame(M);const Ct=jt.attributes.position.array;for(let Jt=1;Jt<Ct.length;Jt+=3)Ct[Jt]-=.02,Ct[Jt]<-10&&(Ct[Jt]=10);jt.attributes.position.needsUpdate=!0,C.render(x,I)},w=function(){requestAnimationFrame(w),ut.uniforms.time.value+=.05,dt.uniforms.time.value+=.05,i.value&&(E.rotation.y+=.05),s.value&&(E.rotation.y-=.07),o.value&&(E.rotation.x-=.05),r.value&&(E.rotation.x+=.05),C.render(x,I)};const x=new Zn,I=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),C=new Kn({antialias:!0,alpha:!0});C.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(C.domElement);const E=new Xt,L=new Ui(16777215,2);x.add(L);const F=new Di(16777215,4);F.position.set(5,5,5),x.add(F);const S=new Li(16777215,5,50);S.position.set(0,2,4),x.add(S);const U=new Jn().load("/3d-bear-arts/assets/cashwings.jpg"),H=new nc(256,{format:ci,generateMipmaps:!0,minFilter:Ki}),J=new ec(1,1e3,H);new Ot({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:H.texture,envMapIntensity:1.5}),x.add(J),x.environment=H.texture,d();const it=new Kr,k=it.load(["/3d-bear-arts/assets/christmas_garden.jpg","/3d-bear-arts/assets/christmas_ground.jpg","/3d-bear-arts/assets/christmas_front.jpg","/3d-bear-arts/assets/christmas_house.jpg","/3d-bear-arts/assets/christmas_tree.jpg","/3d-bear-arts/assets/christmas_sky.jpg"]);it.load(["/3d-bear-arts/assets/cash2.jpg","/3d-bear-arts/assets/cash8.jpg","/3d-bear-arts/assets/cash1.jpg","/3d-bear-arts/assets/cash11.jpg","/3d-bear-arts/assets/cash4.jpg","/3d-bear-arts/assets/cash3.jpg"]),x.environment=k;const tt=it.load(["/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg"]);x.environment=tt;const W=new Ot({color:"white",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:k,reflectivity:1});new Ot({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:tt,reflectivity:1});const gt=new Ot({color:"sliver",map:U,metalness:.3,roughness:.5,transparent:!0,opacity:1}),vt=new Ot({color:"white",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.3,envMap:k,reflectivity:0}),xt=new Ot({color:"white",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.7,envMap:k,reflectivity:0}),Dt=new hn({uniforms:{time:{value:0},color1:{value:new Se(16766720)},color2:{value:new Se(16007990)}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec3 color1;
            uniform vec3 color2;
            varying vec2 vUv;
            void main() {
              vec3 color = mix(color1, color2, sin(vUv.y * 10.0 + time) * 0.5 + 0.5);
              gl_FragColor = vec4(color, 1.0);
            }
          `}),kt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,rt=`
        uniform float time;
            uniform float opacity; // Add opacity uniform
            varying vec2 vUv;
        
            void main() {
                // Dynamic water-like gradient effect
                vec2 p = vUv * 2.0 - vec2(1.0); // Normalize UV coordinates to [-1, 1]
                float len = length(p); // Get the length of the vector (distance from center)
                float angle = atan(p.y, p.x); // Calculate the angle in polar coordinates
        
                // Create a time-based oscillating value for smooth gradient transitions
                float wave = sin(len * 10.0 - time * 3.0) * 1.0 + 0.5;
        
                // Color gradient based on the angle and distance from the center
                vec3 color1 = vec3(1.0, 0.078, 0.576); 
                vec3 color2 = vec3(0.3, 0.6, 1.0); // Blueish
                vec3 color3 = vec3(1.0, 0.0, 0.8); 
        
                // Mix the colors based on wave and angle for a dynamic effect
                vec3 color = mix(color1, color2, wave);
                color = mix(color, color3, sin(angle + time) * 0.5 + 0.5);
        
                // Set the fragment color with opacity
                gl_FragColor = vec4(color, opacity); // Use the opacity uniform for transparency
            }
      `,dt=new hn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:kt,fragmentShader:rt,transparent:!1,depthWrite:!0}),bt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,G=`
        uniform float time;
            uniform float opacity; // Add opacity uniform
            varying vec2 vUv;
        
            void main() {
                // Dynamic water-like gradient effect
                vec2 p = vUv * 2.0 - vec2(1.0); // Normalize UV coordinates to [-1, 1]
                float len = length(p); // Get the length of the vector (distance from center)
                float angle = atan(p.y, p.x); // Calculate the angle in polar coordinates
        
                // Create a time-based oscillating value for smooth gradient transitions
                float wave = sin(len * 10.0 - time * 3.0) * 1.0 + 0.5;
        
                // Color gradient based on the angle and distance from the center
                vec3 color1 = vec3(1.0, 0.3, 0.5); // Pinkish
                vec3 color2 = vec3(0.3, 0.6, 1.0); // Blueish
                vec3 color3 = vec3(1.0, 0.0, 0.8); // Magenta
        
                // Mix the colors based on wave and angle for a dynamic effect
                vec3 color = mix(color1, color2, wave);
                color = mix(color, color3, sin(angle + time) * 0.5 + 0.5);
        
                // Set the fragment color with opacity
                gl_FragColor = vec4(color, opacity); // Use the opacity uniform for transparency
            }
      `,ut=new hn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:bt,fragmentShader:G,transparent:!1,depthWrite:!0}),at=new ct(1,32,32,0,Math.PI),ht=new y(at,vt),St=new y(at,W);ht.scale.set(.85,.85,.8),St.scale.set(.85,.85,.8),ht.position.y=-.2,St.position.y=-.2,ht.rotation.y=Math.PI/2,St.rotation.y=Math.PI*1.5;const st=new Ce(1,32),v=new y(st,W);v.scale.set(.85,.85,.8),v.position.set(0,-.2,0),v.rotation.y=Math.PI/2;const R=new Xt;R.add(ht),R.add(St),R.add(v),E.add(R);const N=new ct(.6,32,32,0,Math.PI),z=new y(N,W);z.scale.set(1,.95,.95),z.position.set(0,1,0),z.rotation.y=Math.PI*1.5;const B=new y(N,xt);B.scale.set(1,.95,.95),B.position.set(0,1,0),B.rotation.y=Math.PI/2;const Z=new Ce(.6,32),Q=new y(Z,W);Q.position.set(0,1,0),Q.rotation.y=Math.PI/2,Q.scale.set(1,.95,.95);const T=new Xt;T.add(z),T.add(B),T.add(Q),E.add(T);const b=new ct(.25,32,32),D=new y(b,W);D.position.set(-.45,1.35,-.1),E.add(D);const K=new y(b,xt);K.position.set(.45,1.35,-.1),E.add(K);const q=new ct(.25,32,32,Math.PI/2,Math.PI),j=new y(q,W);j.scale.set(1.1,.6,.8),j.position.set(0,.84,.5),j.rotation.y=Math.PI;const ft=new ct(.25,32,32,Math.PI/2,Math.PI),lt=new y(ft,xt);lt.scale.set(1.1,.6,.8),lt.position.set(0,.84,.5),lt.rotation.y=0;const _t=new Ce(.25,32),At=new y(_t,gt);At.scale.set(.8,.6,.8),At.position.set(0,.84,.5),At.rotation.y=Math.PI/2;const pt=new Xt;pt.add(j),pt.add(lt),pt.add(At),E.add(pt);const yt=new Tn;yt.moveTo(0,0),yt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),yt.bezierCurveTo(-.6,.3,0,.6,0,1),yt.bezierCurveTo(0,.6,.6,.3,.6,0),yt.bezierCurveTo(.6,-.3,0,-.3,0,0);const Nt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Gt=new Pn(yt,Nt),It=new y(Gt,W);It.scale.set(.23,.23,.23),It.position.set(.25,1.2,0),It.rotation.y=Math.PI,It.rotation.x=Math.PI;const ee=new ct(.35,32,32),Ht=new y(ee,W);Ht.scale.set(.75,1.25,.65),Ht.position.set(-.7,-.15,.2),E.add(Ht);const te=new y(ee,xt);te.scale.set(.75,1.25,.65),te.position.set(.7,-.15,.2),E.add(te);const X=new Zt(.2,.22,.6,32),Mt=new y(X,W);Mt.position.set(-.4,-1.05,0),E.add(Mt);const ot=new y(X,xt);ot.position.set(.4,-1.05,0),E.add(ot);const nt=new ct(.3,32,32),Tt=new y(nt,W);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),E.add(Tt);const Et=new y(nt,xt);Et.scale.set(1,.72,1.5),Et.position.set(.4,-1.45,.17),E.add(Et);const Yt=new ct(.44,32,32),oe=new y(Yt,W);oe.position.set(-.15,-.45,-.4),E.add(oe);const ce=new y(Yt,xt);ce.position.set(.15,-.45,-.4),E.add(ce);const le=new ct(.18,32,32),ue=new y(le,W);ue.position.set(0,-.35,-.8),E.add(ue),ue.renderOrder=1,new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ct){const Jt=new ke("X",{font:Ct,size:.18,depth:.05}),zt=new y(Jt,W);zt.position.set(-.3,.99,.53),zt.rotation.x=ge.degToRad(-5),zt.rotation.y=ge.degToRad(-15),E.add(zt);const fe=new ke("+",{font:Ct,size:.25,depth:.1}),Pt=new y(fe,W);Pt.position.set(.13,.99,.53),Pt.rotation.y=ge.degToRad(12),Pt.rotation.x=ge.degToRad(-5),E.add(Pt)});const be=f(),Vt=new Rt({map:be,metalness:.1,roughness:.8}),qt=new Xn(.5,.1,24,100,Math.PI),$t=new y(qt,Vt);$t.position.set(0,.54,0),$t.rotation.x=Math.PI/2,$t.rotation.y=Math.PI/1,$t.rotation.z=Math.PI/-2,E.add($t);const re=_();re.scale.set(.38,.38,.38),re.position.set(.3,-.45,0),E.add(re);const he=g();he.scale.set(.2,.2,.2),he.position.set(.5,-.3,.3),E.add(he);const de=g();de.scale.set(.12,.12,.12),de.position.set(.2,-.3,.5),E.add(de);let ye=0,_e=Math.PI,we=0,Ue=0,Te=1,wt=-1;const ae=p();ae.scale.set(.4,.4,.4),x.add(ae);const P=p();P.scale.set(.4,.4,.4),x.add(P),m();const $=new ct(.6,32,32,0,Math.PI*2,0,Math.PI/2),O=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),Y=new y($,O);Y.position.set(0,-.2,0),Y.rotation.x=Math.PI,Y.scale.set(1.25,1.25,1.25),R.add(Y);const V=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:De,transparent:!1,opacity:.8}),mt=new y(st,V);mt.scale.set(.7,.7,.7),mt.position.set(0,-.3,0),mt.rotation.x=Math.PI/2,mt.renderOrder=1,R.add(mt),E.add(R);const Lt=new hn({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
    `}),Ut=new y(st,Lt);Ut.position.set(0,-.2,0),Ut.scale.set(.7,.7,.7),Ut.rotation.x=-Math.PI/2,Ut.renderOrder=2,R.add(Ut);const Bt=1e3,jt=new Bn,Kt=[];for(let Ct=0;Ct<Bt;Ct++){const Jt=(Math.random()-.5)*20,zt=Math.random()*20,fe=(Math.random()-.5)*20;Kt.push(Jt,zt,fe)}jt.setAttribute("position",new cn(Kt,3));const Wt=new za({color:16777215,size:.1,transparent:!0,opacity:.8}),se=new Sa(jt,Wt);E.add(se),M(),E.scale.set(1.2,1.2,1.2),x.add(E),E.scale.set(1.4,1.4,1.4),x.add(E),E.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),I.position.set(t.bodyPosition.x,1.4,t.cameraPosition),I.lookAt(t.bodyPosition.x,0,0),I.position.z=4;let pe=Qt(!1);const me=Ct=>{if(pe.value){const Jt={x:Ct.clientX/window.innerWidth*2-1,y:-(Ct.clientY/window.innerHeight)*2+1},zt=Jt.x*Math.PI*.2,fe=Jt.y*Math.PI*.2;E.rotation.y=zt,E.rotation.x=fe}};window.addEventListener("mousemove",me),Dt.uniforms.time.value+=.04,w(),Ve(()=>t.bodyPosition,Ct=>{E.position.set(Ct.x,Ct.y,Ct.z)}),Ve(()=>t.cameraPosition,Ct=>{I.position.set(t.bodyPosition.x,1,Ct),I.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{I.aspect=window.innerWidth/window.innerHeight,I.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight)})}});let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function u(){r.value=!0}function h(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let d=0;d<v3;d++){const f=document.createElement("div");f.classList.add("confetti"),f.style.left=`${Math.random()*100}vw`,f.style.animationDuration=`${Math.random()*3+4}s`,f.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(f)}for(let d=0;d<y3;d++){const f=document.createElement("div");f.classList.add("light"),document.body.appendChild(f)}return(d,f)=>(ei(),li(En,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",g3,[Ft("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:h},"▲",32),Ft("div",_3,[Ft("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:h},"◀",32),Ft("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:h},"▶",32)]),Ft("button",{class:"pixel-btn down border-gold",onMousedown:u,onMouseup:h},"▼",32)])],64))}}),w3=ui(x3,[["__scopeId","data-v-4439572d"]]);function Cs(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Dg(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zr={duration:.5,overwrite:!1,delay:0},jd,On,un,zi=1e8,Je=1/zi,jh=Math.PI*2,M3=jh/4,S3=0,Ug=Math.sqrt,b3=Math.cos,E3=Math.sin,Un=function(t){return typeof t=="string"},vn=function(t){return typeof t=="function"},Bs=function(t){return typeof t=="number"},$d=function(t){return typeof t>"u"},ms=function(t){return typeof t=="object"},pi=function(t){return t!==!1},Kd=function(){return typeof window<"u"},Hc=function(t){return vn(t)||Un(t)},Ng=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,$h=/(?:-?\.?\d|\.)+/gi,Og=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,gr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fg=/[+-]=-?[.\d]+/,Bg=/[^,'"\[\]\s]+/gi,T3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,fn,ss,Kh,Zd,Ci={},pl={},zg,Gg=function(t){return(pl=Gr(t,Ci))&&vi},Jd=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Va=function(t,e){return!e&&console.warn(t)},kg=function(t,e){return t&&(Ci[t]=e)&&pl&&(pl[t]=e)||Ci},Wa=function(){return 0},A3={suppressEvents:!0,isStart:!0,kill:!1},Qc={suppressEvents:!0,kill:!1},P3={suppressEvents:!0},Qd={},so=[],Zh={},Hg,Si={},Bu={},f0=30,tl=[],tf="",ef=function(t){var e=t[0],i,s;if(ms(e)||vn(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(s=tl.length;s--&&!tl[s].targetTest(e););i=tl[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new d_(t[s],i)))||t.splice(s,1);return t},Uo=function(t){return t._gsap||ef(Gi(t))[0]._gsap},Vg=function(t,e,i){return(i=t[e])&&vn(i)?t[e]():$d(i)&&t.getAttribute&&t.getAttribute(e)||i},mi=function(t,e){return(t=t.split(",")).forEach(e)||t},yn=function(t){return Math.round(t*1e5)/1e5||0},bn=function(t){return Math.round(t*1e7)/1e7||0},Ar=function(t,e){var i=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},R3=function(t,e){for(var i=e.length,s=0;t.indexOf(e[s])<0&&++s<i;);return s<i},ml=function(){var t=so.length,e=so.slice(0),i,s;for(Zh={},so.length=0,i=0;i<t;i++)s=e[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Wg=function(t,e,i,s){so.length&&!On&&ml(),t.render(e,i,On&&e<0&&(t._initted||t._startAt)),so.length&&!On&&ml()},Xg=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Bg).length<2?e:Un(t)?t.trim():t},qg=function(t){return t},Ii=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},C3=function(t){return function(e,i){for(var s in i)s in e||s==="duration"&&t||s==="ease"||(e[s]=i[s])}},Gr=function(t,e){for(var i in e)t[i]=e[i];return t},p0=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ms(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},gl=function(t,e){var i={},s;for(s in t)s in e||(i[s]=t[s]);return i},Ta=function(t){var e=t.parent||fn,i=t.keyframes?C3(jn(t.keyframes)):Ii;if(pi(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},I3=function(t,e){for(var i=t.length,s=i===e.length;s&&i--&&t[i]===e[i];);return i<0},Yg=function(t,e,i,s,o){var r=t[s],a;if(o)for(a=e[o];r&&r[o]>a;)r=r._prev;return r?(e._next=r._next,r._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[s]=e,e._prev=r,e.parent=e._dp=t,e},zl=function(t,e,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var o=e._prev,r=e._next;o?o._next=r:t[i]===e&&(t[i]=r),r?r._prev=o:t[s]===e&&(t[s]=o),e._next=e._prev=e.parent=null},co=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},No=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},L3=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Jh=function(t,e,i,s){return t._startAt&&(On?t._startAt.revert(Qc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},D3=function n(t){return!t||t._ts&&n(t.parent)},m0=function(t){return t._repeat?kr(t._tTime,t=t.duration()+t._rDelay)*t:0},kr=function(t,e){var i=Math.floor(t=bn(t/e));return t&&i===t?i-1:i},_l=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Gl=function(t){return t._end=bn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Je)||0))},kl=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=bn(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Gl(t),i._dirty||No(i,t)),t},jg=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=_l(t.rawTime(),e),(!e._dur||sc(0,e.totalDuration(),i)-e._tTime>Je)&&e.render(i,!0)),No(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Je}},as=function(t,e,i,s){return e.parent&&co(e),e._start=bn((Bs(i)?i:i||t!==fn?Fi(t,i,e):t._time)+e._delay),e._end=bn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Yg(t,e,"_first","_last",t._sort?"_start":0),Qh(e)||(t._recent=e),s||jg(t,e),t._ts<0&&kl(t,t._tTime),t},$g=function(t,e){return(Ci.ScrollTrigger||Jd("scrollTrigger",e))&&Ci.ScrollTrigger.create(e,t)},Kg=function(t,e,i,s,o){if(sf(t,e,o),!t._initted)return 1;if(!i&&t._pt&&!On&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Hg!==bi.frame)return so.push(t),t._lazy=[o,s],1},U3=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},Qh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},N3=function(t,e,i,s){var o=t.ratio,r=e<0||!e&&(!t._start&&U3(t)&&!(!t._initted&&Qh(t))||(t._ts<0||t._dp._ts<0)&&!Qh(t))?0:1,a=t._rDelay,c=0,l,u,h;if(a&&t._repeat&&(c=sc(0,t._tDur,e),u=kr(c,a),t._yoyo&&u&1&&(r=1-r),u!==kr(t._tTime,a)&&(o=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==o||On||s||t._zTime===Je||!e&&t._zTime){if(!t._initted&&Kg(t,e,s,i,c))return;for(h=t._zTime,t._zTime=e||(i?Je:0),i||(i=e&&!h),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=c,l=t._pt;l;)l.r(r,l.d),l=l._next;e<0&&Jh(t,e,i,!0),t._onUpdate&&!i&&Pi(t,"onUpdate"),c&&t._repeat&&!i&&t.parent&&Pi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===r&&(r&&co(t,1),!i&&!On&&(Pi(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},O3=function(t,e,i){var s;if(i>e)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},Hr=function(t,e,i,s){var o=t._repeat,r=bn(e)||0,a=t._tTime/t._tDur;return a&&!s&&(t._time*=r/t._dur),t._dur=r,t._tDur=o?o<0?1e10:bn(r*(o+1)+t._rDelay*o):r,a>0&&!s&&kl(t,t._tTime=t._tDur*a),t.parent&&Gl(t),i||No(t.parent,t),t},g0=function(t){return t instanceof ai?No(t):Hr(t,t._dur)},F3={_start:0,endTime:Wa,totalDuration:Wa},Fi=function n(t,e,i){var s=t.labels,o=t._recent||F3,r=t.duration()>=zi?o.endTime(!1):t._dur,a,c,l;return Un(e)&&(isNaN(e)||e in s)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?o:i).totalDuration()/100:1)):a<0?(e in s||(s[e]=r),s[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&i&&(c=c/100*(jn(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+c:r+c)):e==null?r:+e},Aa=function(t,e,i){var s=Bs(e[1]),o=(s?2:1)+(t<2?0:1),r=e[o],a,c;if(s&&(r.duration=e[1]),r.parent=i,t){for(a=r,c=i;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=pi(c.vars.inherit)&&c.parent;r.immediateRender=pi(a.immediateRender),t<2?r.runBackwards=1:r.startAt=e[o-1]}return new Sn(e[0],r,e[o+1])},po=function(t,e){return t||t===0?e(t):e},sc=function(t,e,i){return i<t?t:i>e?e:i},Wn=function(t,e){return!Un(t)||!(e=T3.exec(t))?"":e[1]},B3=function(t,e,i){return po(i,function(s){return sc(t,e,s)})},td=[].slice,Zg=function(t,e){return t&&ms(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ms(t[0]))&&!t.nodeType&&t!==ss},z3=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(s){var o;return Un(s)&&!e||Zg(s,1)?(o=i).push.apply(o,Gi(s)):i.push(s)})||i},Gi=function(t,e,i){return un&&!e&&un.selector?un.selector(t):Un(t)&&!i&&(Kh||!Vr())?td.call((e||Zd).querySelectorAll(t),0):jn(t)?z3(t,i):Zg(t)?td.call(t,0):t?[t]:[]},ed=function(t){return t=Gi(t)[0]||Va("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Gi(e,i.querySelectorAll?i:i===t?Va("Invalid scope")||Zd.createElement("div"):t)}},Jg=function(t){return t.sort(function(){return .5-Math.random()})},Qg=function(t){if(vn(t))return t;var e=ms(t)?t:{each:t},i=Oo(e.ease),s=e.from||0,o=parseFloat(e.base)||0,r={},a=s>0&&s<1,c=isNaN(s)||a,l=e.axis,u=s,h=s;return Un(s)?u=h={center:.5,edges:.5,end:1}[s]||0:!a&&c&&(u=s[0],h=s[1]),function(d,f,_){var g=(_||e).length,p=r[g],m,M,w,x,I,C,E,L,F;if(!p){if(F=e.grid==="auto"?0:(e.grid||[1,zi])[1],!F){for(E=-zi;E<(E=_[F++].getBoundingClientRect().left)&&F<g;);F<g&&F--}for(p=r[g]=[],m=c?Math.min(F,g)*u-.5:s%F,M=F===zi?0:c?g*h/F-.5:s/F|0,E=0,L=zi,C=0;C<g;C++)w=C%F-m,x=M-(C/F|0),p[C]=I=l?Math.abs(l==="y"?x:w):Ug(w*w+x*x),I>E&&(E=I),I<L&&(L=I);s==="random"&&Jg(p),p.max=E-L,p.min=L,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(F>g?g-1:l?l==="y"?g/F:F:Math.max(F,g/F))||0)*(s==="edges"?-1:1),p.b=g<0?o-g:o,p.u=Wn(e.amount||e.each)||0,i=i&&g<0?l_(i):i}return g=(p[d]-p.min)/p.max||0,bn(p.b+(i?i(g):g)*p.v)+p.u}},nd=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=bn(Math.round(parseFloat(i)/t)*t*e);return(s-s%1)/e+(Bs(i)?0:Wn(i))}},t_=function(t,e){var i=jn(t),s,o;return!i&&ms(t)&&(s=i=t.radius||zi,t.values?(t=Gi(t.values),(o=!Bs(t[0]))&&(s*=s)):t=nd(t.increment)),po(e,i?vn(t)?function(r){return o=t(r),Math.abs(o-r)<=s?o:r}:function(r){for(var a=parseFloat(o?r.x:r),c=parseFloat(o?r.y:0),l=zi,u=0,h=t.length,d,f;h--;)o?(d=t[h].x-a,f=t[h].y-c,d=d*d+f*f):d=Math.abs(t[h]-a),d<l&&(l=d,u=h);return u=!s||l<=s?t[u]:r,o||u===r||Bs(r)?u:u+Wn(r)}:nd(t))},e_=function(t,e,i,s){return po(jn(t)?!e:i===!0?!!(i=0):!s,function(){return jn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*s)/s})},G3=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(s){return e.reduce(function(o,r){return r(o)},s)}},k3=function(t,e){return function(i){return t(parseFloat(i))+(e||Wn(i))}},H3=function(t,e,i){return i_(t,e,0,1,i)},n_=function(t,e,i){return po(i,function(s){return t[~~e(s)]})},V3=function n(t,e,i){var s=e-t;return jn(t)?n_(t,n(0,t.length),e):po(i,function(o){return(s+(o-t)%s)%s+t})},W3=function n(t,e,i){var s=e-t,o=s*2;return jn(t)?n_(t,n(0,t.length-1),e):po(i,function(r){return r=(o+(r-t)%o)%o||0,t+(r>s?o-r:r)})},Xa=function(t){for(var e=0,i="",s,o,r,a;~(s=t.indexOf("random(",e));)r=t.indexOf(")",s),a=t.charAt(s+7)==="[",o=t.substr(s+7,r-s-7).match(a?Bg:$h),i+=t.substr(e,s-e)+e_(a?o:+o[0],a?0:+o[1],+o[2]||1e-5),e=r+1;return i+t.substr(e,t.length-e)},i_=function(t,e,i,s,o){var r=e-t,a=s-i;return po(o,function(c){return i+((c-t)/r*a||0)})},X3=function n(t,e,i,s){var o=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!o){var r=Un(t),a={},c,l,u,h,d;if(i===!0&&(s=1)&&(i=null),r)t={p:t},e={p:e};else if(jn(t)&&!jn(e)){for(u=[],h=t.length,d=h-2,l=1;l<h;l++)u.push(n(t[l-1],t[l]));h--,o=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},i=e}else s||(t=Gr(jn(t)?[]:{},t));if(!u){for(c in e)nf.call(a,t,c,"get",e[c]);o=function(_){return af(_,a)||(r?t.p:t)}}}return po(i,o)},_0=function(t,e,i){var s=t.labels,o=zi,r,a,c;for(r in s)a=s[r]-e,a<0==!!i&&a&&o>(a=Math.abs(a))&&(c=r,o=a);return c},Pi=function(t,e,i){var s=t.vars,o=s[e],r=un,a=t._ctx,c,l,u;if(o)return c=s[e+"Params"],l=s.callbackScope||t,i&&so.length&&ml(),a&&(un=a),u=c?o.apply(l,c):o.call(l),un=r,u},ua=function(t){return co(t),t.scrollTrigger&&t.scrollTrigger.kill(!!On),t.progress()<1&&Pi(t,"onInterrupt"),t},_r,s_=[],o_=function(t){if(t)if(t=!t.name&&t.default||t,Kd()||t.headless){var e=t.name,i=vn(t),s=e&&!i&&t.init?function(){this._props=[]}:t,o={init:Wa,render:af,add:nf,kill:aA,modifier:rA,rawVars:0},r={targetTest:0,get:0,getSetter:rf,aliases:{},register:0};if(Vr(),t!==s){if(Si[e])return;Ii(s,Ii(gl(t,o),r)),Gr(s.prototype,Gr(o,gl(t,r))),Si[s.prop=e]=s,t.targetTest&&(tl.push(s),Qd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}kg(e,s),t.register&&t.register(vi,s,gi)}else s_.push(t)},Ze=255,ha={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},zu=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Ze+.5|0},r_=function(t,e,i){var s=t?Bs(t)?[t>>16,t>>8&Ze,t&Ze]:0:ha.black,o,r,a,c,l,u,h,d,f,_;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ha[t])s=ha[t];else if(t.charAt(0)==="#"){if(t.length<6&&(o=t.charAt(1),r=t.charAt(2),a=t.charAt(3),t="#"+o+o+r+r+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Ze,s&Ze,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Ze,t&Ze]}else if(t.substr(0,3)==="hsl"){if(s=_=t.match($h),!e)c=+s[0]%360/360,l=+s[1]/100,u=+s[2]/100,r=u<=.5?u*(l+1):u+l-u*l,o=u*2-r,s.length>3&&(s[3]*=1),s[0]=zu(c+1/3,o,r),s[1]=zu(c,o,r),s[2]=zu(c-1/3,o,r);else if(~t.indexOf("="))return s=t.match(Og),i&&s.length<4&&(s[3]=1),s}else s=t.match($h)||ha.transparent;s=s.map(Number)}return e&&!_&&(o=s[0]/Ze,r=s[1]/Ze,a=s[2]/Ze,h=Math.max(o,r,a),d=Math.min(o,r,a),u=(h+d)/2,h===d?c=l=0:(f=h-d,l=u>.5?f/(2-h-d):f/(h+d),c=h===o?(r-a)/f+(r<a?6:0):h===r?(a-o)/f+2:(o-r)/f+4,c*=60),s[0]=~~(c+.5),s[1]=~~(l*100+.5),s[2]=~~(u*100+.5)),i&&s.length<4&&(s[3]=1),s},a_=function(t){var e=[],i=[],s=-1;return t.split(oo).forEach(function(o){var r=o.match(gr)||[];e.push.apply(e,r),i.push(s+=r.length+1)}),e.c=i,e},v0=function(t,e,i){var s="",o=(t+s).match(oo),r=e?"hsla(":"rgba(",a=0,c,l,u,h;if(!o)return t;if(o=o.map(function(d){return(d=r_(d,e,1))&&r+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=a_(t),c=i.c,c.join(s)!==u.c.join(s)))for(l=t.replace(oo,"1").split(gr),h=l.length-1;a<h;a++)s+=l[a]+(~c.indexOf(a)?o.shift()||r+"0,0,0,0)":(u.length?u:o.length?o:i).shift());if(!l)for(l=t.split(oo),h=l.length-1;a<h;a++)s+=l[a]+o[a];return s+l[h]},oo=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ha)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),q3=/hsl[a]?\(/,c_=function(t){var e=t.join(" "),i;if(oo.lastIndex=0,oo.test(e))return i=q3.test(e),t[1]=v0(t[1],i),t[0]=v0(t[0],i,a_(t[1])),!0},qa,bi=function(){var n=Date.now,t=500,e=33,i=n(),s=i,o=1e3/240,r=o,a=[],c,l,u,h,d,f,_=function g(p){var m=n()-s,M=p===!0,w,x,I,C;if((m>t||m<0)&&(i+=m-e),s+=m,I=s-i,w=I-r,(w>0||M)&&(C=++h.frame,d=I-h.time*1e3,h.time=I=I/1e3,r+=w+(w>=o?4:o-w),x=1),M||(c=l(g)),x)for(f=0;f<a.length;f++)a[f](I,d,C,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){zg&&(!Kh&&Kd()&&(ss=Kh=window,Zd=ss.document||{},Ci.gsap=vi,(ss.gsapVersions||(ss.gsapVersions=[])).push(vi.version),Gg(pl||ss.GreenSockGlobals||!ss.gsap&&ss||{}),s_.forEach(o_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(p){return setTimeout(p,r-h.time*1e3+1|0)},qa=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),qa=0,l=Wa},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){o=1e3/(p||240),r=h.time*1e3+o},add:function(p,m,M){var w=m?function(x,I,C,E){p(x,I,C,E),h.remove(w)}:p;return h.remove(p),a[M?"unshift":"push"](w),Vr(),w},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h}(),Vr=function(){return!qa&&bi.wake()},Fe={},Y3=/^[\d.\-M][\d.\-,\s]/,j3=/["']/g,$3=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),s=i[0],o=1,r=i.length,a,c,l;o<r;o++)c=i[o],a=o!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[s]=isNaN(l)?l.replace(j3,"").trim():+l,s=c.substr(a+1).trim();return e},K3=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<i?t.indexOf(")",i+1):i)},Z3=function(t){var e=(t+"").split("("),i=Fe[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[$3(e[1])]:K3(t).split(",").map(Xg)):Fe._CE&&Y3.test(t)?Fe._CE("",t):i},l_=function(t){return function(e){return 1-t(1-e)}},u_=function n(t,e){for(var i=t._first,s;i;)i instanceof ai?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=e)),i=i._next},Oo=function(t,e){return t&&(vn(t)?t:Fe[t]||Z3(t))||e},qo=function(t,e,i,s){i===void 0&&(i=function(c){return 1-e(1-c)}),s===void 0&&(s=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var o={easeIn:e,easeOut:i,easeInOut:s},r;return mi(t,function(a){Fe[a]=Ci[a]=o,Fe[r=a.toLowerCase()]=i;for(var c in o)Fe[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Fe[a+"."+c]=o[c]}),o},h_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Gu=function n(t,e,i){var s=e>=1?e:1,o=(i||(t?.3:.45))/(e<1?e:1),r=o/jh*(Math.asin(1/s)||0),a=function(u){return u===1?1:s*Math.pow(2,-10*u)*E3((u-r)*o)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:h_(a);return o=jh/o,c.config=function(l,u){return n(t,l,u)},c},ku=function n(t,e){e===void 0&&(e=1.70158);var i=function(r){return r?--r*r*((e+1)*r+e)+1:0},s=t==="out"?i:t==="in"?function(o){return 1-i(1-o)}:h_(i);return s.config=function(o){return n(t,o)},s};mi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;qo(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Fe.Linear.easeNone=Fe.none=Fe.Linear.easeIn;qo("Elastic",Gu("in"),Gu("out"),Gu());(function(n,t){var e=1/t,i=2*e,s=2.5*e,o=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<s?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};qo("Bounce",function(r){return 1-o(1-r)},o)})(7.5625,2.75);qo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});qo("Circ",function(n){return-(Ug(1-n*n)-1)});qo("Sine",function(n){return n===1?1:-b3(n*M3)+1});qo("Back",ku("in"),ku("out"),ku());Fe.SteppedEase=Fe.steps=Ci.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,s=t+(e?0:1),o=e?1:0,r=1-Je;return function(a){return((s*sc(0,r,a)|0)+o)*i}}};zr.ease=Fe["quad.out"];mi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return tf+=n+","+n+"Params,"});var d_=function(t,e){this.id=S3++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Vg,this.set=e?e.getSetter:rf},Ya=function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Hr(this,+e.duration,1,1),this.data=e.data,un&&(this._ctx=un,un.data.push(this)),qa||bi.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Hr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(Vr(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(kl(this,i),!o._dp||o.parent||jg(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&as(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Je||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Wg(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+m0(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+m0(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*o,s):this._repeat?kr(this._tTime,o)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-Je?0:this._rts;if(this._rts===i)return this;var o=this.parent&&this._ts?_l(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Je?0:this._rts,this.totalTime(sc(-Math.abs(this._delay),this._tDur,o),s!==!1),Gl(this),L3(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Je&&(this._tTime-=Je)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&as(s,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(pi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_l(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=P3);var s=On;return On=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),On=s,this},t.globalTime=function(i){for(var s=this,o=arguments.length?i:s.rawTime();s;)o=s._start+o/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):o},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,g0(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,g0(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(Fi(this,i),pi(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,pi(s)),this._dur||(this._zTime=-Je),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Je:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Je,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,o;return!!(!i||this._ts&&this._initted&&i.isActive()&&(o=i.rawTime(!0))>=s&&o<this.endTime(!0)-Je)},t.eventCallback=function(i,s,o){var r=this.vars;return arguments.length>1?(s?(r[i]=s,o&&(r[i+"Params"]=o),i==="onUpdate"&&(this._onUpdate=s)):delete r[i],this):r[i]},t.then=function(i){var s=this;return new Promise(function(o){var r=vn(i)?i:qg,a=function(){var l=s.then;s.then=null,vn(r)&&(r=r(s))&&(r.then||r===s)&&(s.then=l),o(r),s.then=l};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?a():s._prom=a})},t.kill=function(){ua(this)},n}();Ii(Ya.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Je,_prom:0,_ps:!1,_rts:1});var ai=function(n){Dg(t,n);function t(i,s){var o;return i===void 0&&(i={}),o=n.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=pi(i.sortChildren),fn&&as(i.parent||fn,Cs(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&$g(Cs(o),i.scrollTrigger),o}var e=t.prototype;return e.to=function(s,o,r){return Aa(0,arguments,this),this},e.from=function(s,o,r){return Aa(1,arguments,this),this},e.fromTo=function(s,o,r,a){return Aa(2,arguments,this),this},e.set=function(s,o,r){return o.duration=0,o.parent=this,Ta(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Sn(s,o,Fi(this,r),1),this},e.call=function(s,o,r){return as(this,Sn.delayedCall(0,s,o),r)},e.staggerTo=function(s,o,r,a,c,l,u){return r.duration=o,r.stagger=r.stagger||a,r.onComplete=l,r.onCompleteParams=u,r.parent=this,new Sn(s,r,Fi(this,c)),this},e.staggerFrom=function(s,o,r,a,c,l,u){return r.runBackwards=1,Ta(r).immediateRender=pi(r.immediateRender),this.staggerTo(s,o,r,a,c,l,u)},e.staggerFromTo=function(s,o,r,a,c,l,u,h){return a.startAt=r,Ta(a).immediateRender=pi(a.immediateRender),this.staggerTo(s,o,a,c,l,u,h)},e.render=function(s,o,r){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=s<=0?0:bn(s),h=this._zTime<0!=s<0&&(this._initted||!l),d,f,_,g,p,m,M,w,x,I,C,E;if(this!==fn&&u>c&&s>=0&&(u=c),u!==this._tTime||r||h){if(a!==this._time&&l&&(u+=this._time-a,s+=this._time-a),d=u,x=this._start,w=this._ts,m=!w,h&&(l||(a=this._zTime),(s||!o)&&(this._zTime=s)),this._repeat){if(C=this._yoyo,p=l+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(p*100+s,o,r);if(d=bn(u%p),u===c?(g=this._repeat,d=l):(I=bn(u/p),g=~~I,g&&g===I&&(d=l,g--),d>l&&(d=l)),I=kr(this._tTime,p),!a&&this._tTime&&I!==g&&this._tTime-I*p-this._dur<=0&&(I=g),C&&g&1&&(d=l-d,E=1),g!==I&&!this._lock){var L=C&&I&1,F=L===(C&&g&1);if(g<I&&(L=!L),a=L?0:u%l?l:u,this._lock=1,this.render(a||(E?0:bn(g*p)),o,!l)._lock=0,this._tTime=u,!o&&this.parent&&Pi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,F&&(this._lock=2,a=L?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;u_(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=O3(this,bn(a),bn(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&d&&!o&&!g&&(Pi(this,"onStart"),this._tTime!==u))return this;if(d>=a&&s>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(s,o,r);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,o,r),d!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-Je);break}}f=_}else{f=this._last;for(var S=s<0?s:d;f;){if(_=f._prev,(f._act||S<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(s,o,r);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,o,r||On&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=S?-Je:Je);break}}f=_}}if(M&&!o&&(this.pause(),M.render(d>=a?0:-Je)._zTime=d>=a?1:-1,this._ts))return this._start=x,Gl(this),this.render(s,o,r);this._onUpdate&&!o&&Pi(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&co(this,1),!o&&!(s<0&&!a)&&(u||a||!c)&&(Pi(this,u===c&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,o){var r=this;if(Bs(o)||(o=Fi(this,o,s)),!(s instanceof Ya)){if(jn(s))return s.forEach(function(a){return r.add(a,o)}),this;if(Un(s))return this.addLabel(s,o);if(vn(s))s=Sn.delayedCall(0,s);else return this}return this!==s?as(this,s,o):this},e.getChildren=function(s,o,r,a){s===void 0&&(s=!0),o===void 0&&(o=!0),r===void 0&&(r=!0),a===void 0&&(a=-zi);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Sn?o&&c.push(l):(r&&c.push(l),s&&c.push.apply(c,l.getChildren(!0,o,r)))),l=l._next;return c},e.getById=function(s){for(var o=this.getChildren(1,1,1),r=o.length;r--;)if(o[r].vars.id===s)return o[r]},e.remove=function(s){return Un(s)?this.removeLabel(s):vn(s)?this.killTweensOf(s):(s.parent===this&&zl(this,s),s===this._recent&&(this._recent=this._last),No(this))},e.totalTime=function(s,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bn(bi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),n.prototype.totalTime.call(this,s,o),this._forcing=0,this):this._tTime},e.addLabel=function(s,o){return this.labels[s]=Fi(this,o),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,o,r){var a=Sn.delayedCall(0,o||Wa,r);return a.data="isPause",this._hasPause=1,as(this,a,Fi(this,s))},e.removePause=function(s){var o=this._first;for(s=Fi(this,s);o;)o._start===s&&o.data==="isPause"&&co(o),o=o._next},e.killTweensOf=function(s,o,r){for(var a=this.getTweensOf(s,r),c=a.length;c--;)Qs!==a[c]&&a[c].kill(s,o);return this},e.getTweensOf=function(s,o){for(var r=[],a=Gi(s),c=this._first,l=Bs(o),u;c;)c instanceof Sn?R3(c._targets,a)&&(l?(!Qs||c._initted&&c._ts)&&c.globalTime(0)<=o&&c.globalTime(c.totalDuration())>o:!o||c.isActive())&&r.push(c):(u=c.getTweensOf(a,o)).length&&r.push.apply(r,u),c=c._next;return r},e.tweenTo=function(s,o){o=o||{};var r=this,a=Fi(r,s),c=o,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,f,_=Sn.to(r,Ii({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale())||Je,onStart:function(){if(r.pause(),!f){var p=o.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale());_._dur!==p&&Hr(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},o));return d?_.render(0):_},e.tweenFromTo=function(s,o,r){return this.tweenTo(o,Ii({startAt:{time:Fi(this,s)}},r))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),_0(this,Fi(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),_0(this,Fi(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Je)},e.shiftChildren=function(s,o,r){r===void 0&&(r=0);for(var a=this._first,c=this.labels,l;a;)a._start>=r&&(a._start+=s,a._end+=s),a=a._next;if(o)for(l in c)c[l]>=r&&(c[l]+=s);return No(this)},e.invalidate=function(s){var o=this._first;for(this._lock=0;o;)o.invalidate(s),o=o._next;return n.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var o=this._first,r;o;)r=o._next,this.remove(o),o=r;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),No(this)},e.totalDuration=function(s){var o=0,r=this,a=r._last,c=zi,l,u,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-s:s));if(r._dirty){for(h=r.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&r._sort&&a._ts&&!r._lock?(r._lock=1,as(r,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(o-=u,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),c=0),a._end>o&&a._ts&&(o=a._end),a=l;Hr(r,r===fn&&r._time>o?r._time:o,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(s){if(fn._ts&&(Wg(fn,_l(s,fn)),Hg=bi.frame),bi.frame>=f0){f0+=Ri.autoSleep||120;var o=fn._first;if((!o||!o._ts)&&Ri.autoSleep&&bi._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||bi.sleep()}}},t}(Ya);Ii(ai.prototype,{_lock:0,_hasPause:0,_forcing:0});var J3=function(t,e,i,s,o,r,a){var c=new gi(this._pt,t,e,0,1,v_,null,o),l=0,u=0,h,d,f,_,g,p,m,M;for(c.b=i,c.e=s,i+="",s+="",(m=~s.indexOf("random("))&&(s=Xa(s)),r&&(M=[i,s],r(M,t,e),i=M[0],s=M[1]),d=i.match(Fu)||[];h=Fu.exec(s);)_=h[0],g=s.substring(l,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(p=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Ar(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},l=Fu.lastIndex);return c.c=l<s.length?s.substring(l,s.length):"",c.fp=a,(Fg.test(s)||m)&&(c.e=0),this._pt=c,c},nf=function(t,e,i,s,o,r,a,c,l,u){vn(s)&&(s=s(o||0,t,r));var h=t[e],d=i!=="get"?i:vn(h)?l?t[e.indexOf("set")||!vn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,f=vn(h)?l?iA:g_:of,_;if(Un(s)&&(~s.indexOf("random(")&&(s=Xa(s)),s.charAt(1)==="="&&(_=Ar(d,s)+(Wn(d)||0),(_||_===0)&&(s=_))),!u||d!==s||id)return!isNaN(d*s)&&s!==""?(_=new gi(this._pt,t,e,+d||0,s-(d||0),typeof h=="boolean"?oA:__,0,f),l&&(_.fp=l),a&&_.modifier(a,this,t),this._pt=_):(!h&&!(e in t)&&Jd(e,s),J3.call(this,t,e,d,s,f,c||Ri.stringFilter,l))},Q3=function(t,e,i,s,o){if(vn(t)&&(t=Pa(t,o,e,i,s)),!ms(t)||t.style&&t.nodeType||jn(t)||Ng(t))return Un(t)?Pa(t,o,e,i,s):t;var r={},a;for(a in t)r[a]=Pa(t[a],o,e,i,s);return r},f_=function(t,e,i,s,o,r){var a,c,l,u;if(Si[t]&&(a=new Si[t]).init(o,a.rawVars?e[t]:Q3(e[t],s,o,r,i),i,s,r)!==!1&&(i._pt=c=new gi(i._pt,o,t,0,1,a.render,a,0,a.priority),i!==_r))for(l=i._ptLookup[i._targets.indexOf(o)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Qs,id,sf=function n(t,e,i){var s=t.vars,o=s.ease,r=s.startAt,a=s.immediateRender,c=s.lazy,l=s.onUpdate,u=s.runBackwards,h=s.yoyoEase,d=s.keyframes,f=s.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:p,w=t._overwrite==="auto"&&!jd,x=t.timeline,I,C,E,L,F,S,A,U,H,J,it,k,tt;if(x&&(!d||!o)&&(o="none"),t._ease=Oo(o,zr.ease),t._yEase=h?l_(Oo(h===!0?o:h,zr.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!x&&!!s.runBackwards,!x||d&&!s.stagger){if(U=p[0]?Uo(p[0]).harness:0,k=U&&s[U.prop],I=gl(s,Qd),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?Qc:A3),g._lazy=0),r){if(co(t._startAt=Sn.set(p,Ii({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&pi(c),startAt:null,delay:0,onUpdate:l&&function(){return Pi(t,"onUpdate")},stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(On||!a&&!f)&&t._startAt.revert(Qc),a&&_&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),E=Ii({overwrite:!1,data:"isFromStart",lazy:a&&!g&&pi(c),immediateRender:a,stagger:0,parent:m},I),k&&(E[U.prop]=k),co(t._startAt=Sn.set(p,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(On?t._startAt.revert(Qc):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,Je,Je);else if(!e)return}for(t._pt=t._ptCache=0,c=_&&pi(c)||c&&!_,C=0;C<p.length;C++){if(F=p[C],A=F._gsap||ef(p)[C]._gsap,t._ptLookup[C]=J={},Zh[A.id]&&so.length&&ml(),it=M===p?C:M.indexOf(F),U&&(H=new U).init(F,k||I,t,it,M)!==!1&&(t._pt=L=new gi(t._pt,F,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(W){J[W]=L}),H.priority&&(S=1)),!U||k)for(E in I)Si[E]&&(H=f_(E,I,t,it,F,M))?H.priority&&(S=1):J[E]=L=nf.call(t,F,E,"get",I[E],it,M,0,s.stringFilter);t._op&&t._op[C]&&t.kill(F,t._op[C]),w&&t._pt&&(Qs=t,fn.killTweensOf(F,J,t.globalTime(e)),tt=!t.parent,Qs=0),t._pt&&c&&(Zh[A.id]=1)}S&&y_(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!tt,d&&e<=0&&x.render(zi,!0,!0)},tA=function(t,e,i,s,o,r,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return id=1,t.vars[e]="+=0",sf(t,a),id=0,c?Va(e+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(s||s===0)&&!o?s:u.s+(s||0)+r*u.c,u.c=i-u.s,h.e&&(h.e=yn(i)+Wn(h.e)),h.b&&(h.b=u.s+Wn(h.b))},eA=function(t,e){var i=t[0]?Uo(t[0]).harness:0,s=i&&i.aliases,o,r,a,c;if(!s)return e;o=Gr({},e);for(r in s)if(r in o)for(c=s[r].split(","),a=c.length;a--;)o[c[a]]=o[r];return o},nA=function(t,e,i,s){var o=e.ease||s||"power1.inOut",r,a;if(jn(e))a=i[t]||(i[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:o})});else for(r in e)a=i[r]||(i[r]=[]),r==="ease"||a.push({t:parseFloat(t),v:e[r],e:o})},Pa=function(t,e,i,s,o){return vn(t)?t.call(e,i,s,o):Un(t)&&~t.indexOf("random(")?Xa(t):t},p_=tf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",m_={};mi(p_+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return m_[n]=1});var Sn=function(n){Dg(t,n);function t(i,s,o,r){var a;typeof s=="number"&&(o.duration=s,s=o,o=null),a=n.call(this,r?s:Ta(s))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,p=c.scrollTrigger,m=c.yoyoEase,M=s.parent||fn,w=(jn(i)||Ng(i)?Bs(i[0]):"length"in s)?[i]:Gi(i),x,I,C,E,L,F,S,A;if(a._targets=w.length?ef(w):Va("GSAP target "+i+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||Hc(l)||Hc(u)){if(s=a.vars,x=a.timeline=new ai({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:w}),x.kill(),x.parent=x._dp=Cs(a),x._start=0,d||Hc(l)||Hc(u)){if(E=w.length,S=d&&Qg(d),ms(d))for(L in d)~p_.indexOf(L)&&(A||(A={}),A[L]=d[L]);for(I=0;I<E;I++)C=gl(s,m_),C.stagger=0,m&&(C.yoyoEase=m),A&&Gr(C,A),F=w[I],C.duration=+Pa(l,Cs(a),I,F,w),C.delay=(+Pa(u,Cs(a),I,F,w)||0)-a._delay,!d&&E===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),x.to(F,C,S?S(I,F,w):0),x._ease=Fe.none;x.duration()?l=u=0:a.timeline=0}else if(_){Ta(Ii(x.vars.defaults,{ease:"none"})),x._ease=Oo(_.ease||s.ease||"none");var U=0,H,J,it;if(jn(_))_.forEach(function(k){return x.to(w,k,">")}),x.duration();else{C={};for(L in _)L==="ease"||L==="easeEach"||nA(L,_[L],C,_.easeEach);for(L in C)for(H=C[L].sort(function(k,tt){return k.t-tt.t}),U=0,I=0;I<H.length;I++)J=H[I],it={ease:J.e,duration:(J.t-(I?H[I-1].t:0))/100*l},it[L]=J.v,x.to(w,it,U),U+=it.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||a.duration(l=x.duration())}else a.timeline=0;return f===!0&&!jd&&(Qs=Cs(a),fn.killTweensOf(w),Qs=0),as(M,Cs(a),o),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(h||!l&&!_&&a._start===bn(M._time)&&pi(h)&&D3(Cs(a))&&M.data!=="nested")&&(a._tTime=-Je,a.render(Math.max(0,-u)||0)),p&&$g(Cs(a),p),a}var e=t.prototype;return e.render=function(s,o,r){var a=this._time,c=this._tDur,l=this._dur,u=s<0,h=s>c-Je&&!u?c:s<Je?0:s,d,f,_,g,p,m,M,w,x;if(!l)N3(this,s,o,r);else if(h!==this._tTime||!s||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,w=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+s,o,r);if(d=bn(h%g),h===c?(_=this._repeat,d=l):(p=bn(h/g),_=~~p,_&&_===p?(d=l,_--):d>l&&(d=l)),m=this._yoyo&&_&1,m&&(x=this._yEase,d=l-d),p=kr(this._tTime,g),d===a&&!r&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(w&&this._yEase&&u_(w,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==g&&this._initted&&(this._lock=r=1,this.render(bn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Kg(this,u?s:d,r,o,h))return this._tTime=0,this;if(a!==this._time&&!(r&&this.vars.repeatRefresh&&_!==p))return this;if(l!==this._dur)return this.render(s,o,r)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(d/l),this._from&&(this.ratio=M=1-M),d&&!a&&!o&&!_&&(Pi(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;w&&w.render(s<0?s:w._dur*w._ease(d/this._dur),o,r)||this._startAt&&(this._zTime=s),this._onUpdate&&!o&&(u&&Jh(this,s,o,r),Pi(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!o&&this.parent&&Pi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Jh(this,s,!0,!0),(s||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&co(this,1),!o&&!(u&&!a)&&(h||a||m)&&(Pi(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),n.prototype.invalidate.call(this,s)},e.resetTo=function(s,o,r,a,c){qa||bi.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||sf(this,l),u=this._ease(l/this._dur),tA(this,s,o,r,a,u,l,c)?this.resetTo(s,o,r,a,1):(kl(this,0),this.parent||Yg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,o){if(o===void 0&&(o="all"),!s&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?ua(this):this.scrollTrigger&&this.scrollTrigger.kill(!!On),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(s,o,Qs&&Qs.vars.overwrite!==!0)._first||ua(this),this.parent&&r!==this.timeline.totalDuration()&&Hr(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,c=s?Gi(s):a,l=this._ptLookup,u=this._pt,h,d,f,_,g,p,m;if((!o||o==="all")&&I3(a,c))return o==="all"&&(this._pt=0),ua(this);for(h=this._op=this._op||[],o!=="all"&&(Un(o)&&(g={},mi(o,function(M){return g[M]=1}),o=g),o=eA(a,o)),m=a.length;m--;)if(~c.indexOf(a[m])){d=l[m],o==="all"?(h[m]=o,_=d,f={}):(f=h[m]=h[m]||{},_=o);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&zl(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&ua(this),this},t.to=function(s,o){return new t(s,o,arguments[2])},t.from=function(s,o){return Aa(1,arguments)},t.delayedCall=function(s,o,r,a){return new t(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:o,onReverseComplete:o,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:a})},t.fromTo=function(s,o,r){return Aa(2,arguments)},t.set=function(s,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new t(s,o)},t.killTweensOf=function(s,o,r){return fn.killTweensOf(s,o,r)},t}(Ya);Ii(Sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mi("staggerTo,staggerFrom,staggerFromTo",function(n){Sn[n]=function(){var t=new ai,e=td.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var of=function(t,e,i){return t[e]=i},g_=function(t,e,i){return t[e](i)},iA=function(t,e,i,s){return t[e](s.fp,i)},sA=function(t,e,i){return t.setAttribute(e,i)},rf=function(t,e){return vn(t[e])?g_:$d(t[e])&&t.setAttribute?sA:of},__=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},oA=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},v_=function(t,e){var i=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=e.c}e.set(e.t,e.p,s,e)},af=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},rA=function(t,e,i,s){for(var o=this._pt,r;o;)r=o._next,o.p===s&&o.modifier(t,e,i),o=r},aA=function(t){for(var e=this._pt,i,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?zl(this,e,"_pt"):e.dep||(i=1),e=s;return!i},cA=function(t,e,i,s){s.mSet(t,e,s.m.call(s.tween,i,s.mt),s)},y_=function(t){for(var e=t._pt,i,s,o,r;e;){for(i=e._next,s=o;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:r)?e._prev._next=e:o=e,(e._next=s)?s._prev=e:r=e,e=i}t._pt=o},gi=function(){function n(e,i,s,o,r,a,c,l,u){this.t=i,this.s=o,this.c=r,this.p=s,this.r=a||__,this.d=c||this,this.set=l||of,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,s,o){this.mSet=this.mSet||this.set,this.set=cA,this.m=i,this.mt=o,this.tween=s},n}();mi(tf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Qd[n]=1});Ci.TweenMax=Ci.TweenLite=Sn;Ci.TimelineLite=Ci.TimelineMax=ai;fn=new ai({sortChildren:!1,defaults:zr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=c_;var Fo=[],el={},lA=[],y0=0,uA=0,Hu=function(t){return(el[t]||lA).map(function(e){return e()})},sd=function(){var t=Date.now(),e=[];t-y0>2&&(Hu("matchMediaInit"),Fo.forEach(function(i){var s=i.queries,o=i.conditions,r,a,c,l;for(a in s)r=ss.matchMedia(s[a]).matches,r&&(c=1),r!==o[a]&&(o[a]=r,l=1);l&&(i.revert(),c&&e.push(i))}),Hu("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),y0=t,Hu("matchMedia"))},x_=function(){function n(e,i){this.selector=i&&ed(i),this.data=[],this._r=[],this.isReverted=!1,this.id=uA++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,s,o){vn(i)&&(o=s,s=i,i=vn);var r=this,a=function(){var l=un,u=r.selector,h;return l&&l!==r&&l.data.push(r),o&&(r.selector=ed(o)),un=r,h=s.apply(r,arguments),vn(h)&&r._r.push(h),un=l,r.selector=u,r.isReverted=!1,h};return r.last=a,i===vn?a(r,function(c){return r.add(null,c)}):i?r[i]=a:a},t.ignore=function(i){var s=un;un=null,i(this),un=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof n?i.push.apply(i,s.getTweens()):s instanceof Sn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var o=this;if(i?function(){for(var a=o.getTweens(),c=o.data.length,l;c--;)l=o.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),c=o.data.length;c--;)l=o.data[c],l instanceof ai?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Sn)&&l.revert&&l.revert(i);o._r.forEach(function(u){return u(i,o)}),o.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),s)for(var r=Fo.length;r--;)Fo[r].id===this.id&&Fo.splice(r,1)},t.revert=function(i){this.kill(i||{})},n}(),hA=function(){function n(e){this.contexts=[],this.scope=e,un&&un.data.push(this)}var t=n.prototype;return t.add=function(i,s,o){ms(i)||(i={matches:i});var r=new x_(0,o||this.scope),a=r.conditions={},c,l,u;un&&!r.selector&&(r.selector=un.selector),this.contexts.push(r),s=r.add("onMatch",s),r.queries=i;for(l in i)l==="all"?u=1:(c=ss.matchMedia(i[l]),c&&(Fo.indexOf(r)<0&&Fo.push(r),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(sd):c.addEventListener("change",sd)));return u&&s(r,function(h){return r.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},n}(),vl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(s){return o_(s)})},timeline:function(t){return new ai(t)},getTweensOf:function(t,e){return fn.getTweensOf(t,e)},getProperty:function(t,e,i,s){Un(t)&&(t=Gi(t)[0]);var o=Uo(t||{}).get,r=i?qg:Xg;return i==="native"&&(i=""),t&&(e?r((Si[e]&&Si[e].get||o)(t,e,i,s)):function(a,c,l){return r((Si[a]&&Si[a].get||o)(t,a,c,l))})},quickSetter:function(t,e,i){if(t=Gi(t),t.length>1){var s=t.map(function(u){return vi.quickSetter(u,e,i)}),o=s.length;return function(u){for(var h=o;h--;)s[h](u)}}t=t[0]||{};var r=Si[e],a=Uo(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=r?function(u){var h=new r;_r._pt=0,h.init(t,i?u+i:u,_r,0,[t]),h.render(1,h),_r._pt&&af(1,_r)}:a.set(t,c);return r?l:function(u){return l(t,c,i?u+i:u,a,1)}},quickTo:function(t,e,i){var s,o=vi.to(t,Ii((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),r=function(c,l,u){return o.resetTo(e,c,l,u)};return r.tween=o,r},isTweening:function(t){return fn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Oo(t.ease,zr.ease)),p0(zr,t||{})},config:function(t){return p0(Ri,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,s=t.plugins,o=t.defaults,r=t.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!Si[a]&&!Ci[a]&&Va(e+" effect requires "+a+" plugin.")}),Bu[e]=function(a,c,l){return i(Gi(a),Ii(c||{},o),l)},r&&(ai.prototype[e]=function(a,c,l){return this.add(Bu[e](a,ms(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Fe[t]=Oo(e)},parseEase:function(t,e){return arguments.length?Oo(t,e):Fe},getById:function(t){return fn.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new ai(t),s,o;for(i.smoothChildTiming=pi(t.smoothChildTiming),fn.remove(i),i._dp=0,i._time=i._tTime=fn._time,s=fn._first;s;)o=s._next,(e||!(!s._dur&&s instanceof Sn&&s.vars.onComplete===s._targets[0]))&&as(i,s,s._start-s._delay),s=o;return as(fn,i,0),i},context:function(t,e){return t?new x_(t,e):un},matchMedia:function(t){return new hA(t)},matchMediaRefresh:function(){return Fo.forEach(function(t){var e=t.conditions,i,s;for(s in e)e[s]&&(e[s]=!1,i=1);i&&t.revert()})||sd()},addEventListener:function(t,e){var i=el[t]||(el[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=el[t],s=i&&i.indexOf(e);s>=0&&i.splice(s,1)},utils:{wrap:V3,wrapYoyo:W3,distribute:Qg,random:e_,snap:t_,normalize:H3,getUnit:Wn,clamp:B3,splitColor:r_,toArray:Gi,selector:ed,mapRange:i_,pipe:G3,unitize:k3,interpolate:X3,shuffle:Jg},install:Gg,effects:Bu,ticker:bi,updateRoot:ai.updateRoot,plugins:Si,globalTimeline:fn,core:{PropTween:gi,globals:kg,Tween:Sn,Timeline:ai,Animation:Ya,getCache:Uo,_removeLinkedListItem:zl,reverting:function(){return On},context:function(t){return t&&un&&(un.data.push(t),t._ctx=un),un},suppressOverwrites:function(t){return jd=t}}};mi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return vl[n]=Sn[n]});bi.add(ai.updateRoot);_r=vl.to({},{duration:0});var dA=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},fA=function(t,e){var i=t._targets,s,o,r;for(s in e)for(o=i.length;o--;)r=t._ptLookup[o][s],r&&(r=r.d)&&(r._pt&&(r=dA(r,s)),r&&r.modifier&&r.modifier(e[s],t,i[o],s))},Vu=function(t,e){return{name:t,rawVars:1,init:function(s,o,r){r._onInit=function(a){var c,l;if(Un(o)&&(c={},mi(o,function(u){return c[u]=1}),o=c),e){c={};for(l in o)c[l]=e(o[l]);o=c}fA(a,o)}}}},vi=vl.registerPlugin({name:"attr",init:function(t,e,i,s,o){var r,a,c;this.tween=i;for(r in e)c=t.getAttribute(r)||"",a=this.add(t,"setAttribute",(c||0)+"",e[r],s,o,0,0,r),a.op=r,a.b=c,this._props.push(r)},render:function(t,e){for(var i=e._pt;i;)On?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Vu("roundProps",nd),Vu("modifiers"),Vu("snap",t_))||vl;Sn.version=ai.version=vi.version="3.12.7";zg=1;Kd()&&Vr();Fe.Power0;Fe.Power1;Fe.Power2;Fe.Power3;Fe.Power4;Fe.Linear;Fe.Quad;Fe.Cubic;Fe.Quart;Fe.Quint;Fe.Strong;Fe.Elastic;Fe.Back;Fe.SteppedEase;Fe.Bounce;Fe.Sine;Fe.Expo;Fe.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var x0,to,Pr,cf,Lo,w0,lf,pA=function(){return typeof window<"u"},zs={},Po=180/Math.PI,Rr=Math.PI/180,lr=Math.atan2,M0=1e8,uf=/([A-Z])/g,mA=/(left|right|width|margin|padding|x)/i,gA=/[\s,\(]\S/,cs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},od=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_A=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vA=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},yA=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},w_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},M_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},xA=function(t,e,i){return t.style[e]=i},wA=function(t,e,i){return t.style.setProperty(e,i)},MA=function(t,e,i){return t._gsap[e]=i},SA=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},bA=function(t,e,i,s,o){var r=t._gsap;r.scaleX=r.scaleY=i,r.renderTransform(o,r)},EA=function(t,e,i,s,o){var r=t._gsap;r[e]=i,r.renderTransform(o,r)},gn="transform",_i=gn+"Origin",TA=function n(t,e){var i=this,s=this.target,o=s.style,r=s._gsap;if(t in zs&&o){if(this.tfm=this.tfm||{},t!=="transform")t=cs[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Is(s,a)}):this.tfm[t]=r.x?r[t]:Is(s,t),t===_i&&(this.tfm.zOrigin=r.zOrigin);else return cs.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(gn)>=0)return;r.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(_i,e,"")),t=gn}(o||e)&&this.props.push(t,e,o[t])},S_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},AA=function(){var t=this.props,e=this.target,i=e.style,s=e._gsap,o,r;for(o=0;o<t.length;o+=3)t[o+1]?t[o+1]===2?e[t[o]](t[o+2]):e[t[o]]=t[o+2]:t[o+2]?i[t[o]]=t[o+2]:i.removeProperty(t[o].substr(0,2)==="--"?t[o]:t[o].replace(uf,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)s[r]=this.tfm[r];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),o=lf(),(!o||!o.isStart)&&!i[gn]&&(S_(i),s.zOrigin&&i[_i]&&(i[_i]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},b_=function(t,e){var i={target:t,props:[],revert:AA,save:TA};return t._gsap||vi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return i.save(s)}),i},E_,rd=function(t,e){var i=to.createElementNS?to.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):to.createElement(t);return i&&i.style?i:to.createElement(t)},hs=function n(t,e,i){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(uf,"-$1").toLowerCase())||s.getPropertyValue(e)||!i&&n(t,Wr(e)||e,1)||""},S0="O,Moz,ms,Ms,Webkit".split(","),Wr=function(t,e,i){var s=e||Lo,o=s.style,r=5;if(t in o&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(S0[r]+t in o););return r<0?null:(r===3?"ms":r>=0?S0[r]:"")+t},ad=function(){pA()&&window.document&&(x0=window,to=x0.document,Pr=to.documentElement,Lo=rd("div")||{style:{}},rd("div"),gn=Wr(gn),_i=gn+"Origin",Lo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",E_=!!Wr("perspective"),lf=vi.core.reverting,cf=1)},b0=function(t){var e=t.ownerSVGElement,i=rd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),o;s.style.display="block",i.appendChild(s),Pr.appendChild(i);try{o=s.getBBox()}catch{}return i.removeChild(s),Pr.removeChild(i),o},E0=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},T_=function(t){var e,i;try{e=t.getBBox()}catch{e=b0(t),i=1}return e&&(e.width||e.height)||i||(e=b0(t)),e&&!e.width&&!e.x&&!e.y?{x:+E0(t,["x","cx","x1"])||0,y:+E0(t,["y","cy","y1"])||0,width:0,height:0}:e},A_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&T_(t))},Vo=function(t,e){if(e){var i=t.style,s;e in zs&&e!==_i&&(e=gn),i.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(s==="--"?e:e.replace(uf,"-$1").toLowerCase())):i.removeAttribute(e)}},eo=function(t,e,i,s,o,r){var a=new gi(t._pt,e,i,0,1,r?M_:w_);return t._pt=a,a.b=s,a.e=o,t._props.push(i),a},T0={deg:1,rad:1,turn:1},PA={grid:1,flex:1},lo=function n(t,e,i,s){var o=parseFloat(i)||0,r=(i+"").trim().substr((o+"").length)||"px",a=Lo.style,c=mA.test(e),l=t.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=s==="px",f=s==="%",_,g,p,m;if(s===r||!o||T0[s]||T0[r])return o;if(r!=="px"&&!d&&(o=n(t,e,i,"px")),m=t.getCTM&&A_(t),(f||r==="%")&&(zs[e]||~e.indexOf("adius")))return _=m?t.getBBox()[c?"width":"height"]:t[u],yn(f?o/_*h:o/100*_);if(a[c?"width":"height"]=h+(d?r:s),g=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!l?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===to||!g.appendChild)&&(g=to.body),p=g._gsap,p&&f&&p.width&&c&&p.time===bi.time&&!p.uncache)return yn(o/p.width*h);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=h+s,_=t[u],M?t.style[e]=M:Vo(t,e)}else(f||r==="%")&&!PA[hs(g,"display")]&&(a.position=hs(t,"position")),g===t&&(a.position="static"),g.appendChild(Lo),_=Lo[u],g.removeChild(Lo),a.position="absolute";return c&&f&&(p=Uo(g),p.time=bi.time,p.width=g[u]),yn(d?_*o/h:_&&o?h/_*o:0)},Is=function(t,e,i,s){var o;return cf||ad(),e in cs&&e!=="transform"&&(e=cs[e],~e.indexOf(",")&&(e=e.split(",")[0])),zs[e]&&e!=="transform"?(o=$a(t,s),o=e!=="transformOrigin"?o[e]:o.svg?o.origin:xl(hs(t,_i))+" "+o.zOrigin+"px"):(o=t.style[e],(!o||o==="auto"||s||~(o+"").indexOf("calc("))&&(o=yl[e]&&yl[e](t,e,i)||hs(t,e)||Vg(t,e)||(e==="opacity"?1:0))),i&&!~(o+"").trim().indexOf(" ")?lo(t,e,o,i)+i:o},RA=function(t,e,i,s){if(!i||i==="none"){var o=Wr(e,t,1),r=o&&hs(t,o,1);r&&r!==i?(e=o,i=r):e==="borderColor"&&(i=hs(t,"borderTopColor"))}var a=new gi(this._pt,t.style,e,0,1,v_),c=0,l=0,u,h,d,f,_,g,p,m,M,w,x,I;if(a.b=i,a.e=s,i+="",s+="",s==="auto"&&(g=t.style[e],t.style[e]=s,s=hs(t,e)||s,g?t.style[e]=g:Vo(t,e)),u=[i,s],c_(u),i=u[0],s=u[1],d=i.match(gr)||[],I=s.match(gr)||[],I.length){for(;h=gr.exec(s);)p=h[0],M=s.substring(c,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=d[l++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),p.charAt(1)==="="&&(p=Ar(f,p)+x),m=parseFloat(p),w=p.substr((m+"").length),c=gr.lastIndex-w.length,w||(w=w||Ri.units[e]||x,c===s.length&&(s+=w,a.e+=w)),x!==w&&(f=lo(t,e,g,w)||0),a._pt={_next:a._pt,p:M||l===1?M:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=c<s.length?s.substring(c,s.length):""}else a.r=e==="display"&&s==="none"?M_:w_;return Fg.test(s)&&(a.e=0),this._pt=a,a},A0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},CA=function(t){var e=t.split(" "),i=e[0],s=e[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),e[0]=A0[i]||i,e[1]=A0[s]||s,e.join(" ")},IA=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,s=i.style,o=e.u,r=i._gsap,a,c,l;if(o==="all"||o===!0)s.cssText="",c=1;else for(o=o.split(","),l=o.length;--l>-1;)a=o[l],zs[a]&&(c=1,a=a==="transformOrigin"?_i:gn),Vo(i,a);c&&(Vo(i,gn),r&&(r.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",$a(i,1),r.uncache=1,S_(s)))}},yl={clearProps:function(t,e,i,s,o){if(o.data!=="isFromStart"){var r=t._pt=new gi(t._pt,e,i,0,0,IA);return r.u=s,r.pr=-10,r.tween=o,t._props.push(i),1}}},ja=[1,0,0,1,0,0],P_={},R_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},P0=function(t){var e=hs(t,gn);return R_(e)?ja:e.substr(7).match(Og).map(yn)},hf=function(t,e){var i=t._gsap||Uo(t),s=t.style,o=P0(t),r,a,c,l;return i.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,o=[c.a,c.b,c.c,c.d,c.e,c.f],o.join(",")==="1,0,0,1,0,0"?ja:o):(o===ja&&!t.offsetParent&&t!==Pr&&!i.svg&&(c=s.display,s.display="block",r=t.parentNode,(!r||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,a=t.nextElementSibling,Pr.appendChild(t)),o=P0(t),c?s.display=c:Vo(t,"display"),l&&(a?r.insertBefore(t,a):r?r.appendChild(t):Pr.removeChild(t))),e&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},cd=function(t,e,i,s,o,r){var a=t._gsap,c=o||hf(t,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=c[0],_=c[1],g=c[2],p=c[3],m=c[4],M=c[5],w=e.split(" "),x=parseFloat(w[0])||0,I=parseFloat(w[1])||0,C,E,L,F;i?c!==ja&&(E=f*p-_*g)&&(L=x*(p/E)+I*(-g/E)+(g*M-p*m)/E,F=x*(-_/E)+I*(f/E)-(f*M-_*m)/E,x=L,I=F):(C=T_(t),x=C.x+(~w[0].indexOf("%")?x/100*C.width:x),I=C.y+(~(w[1]||w[0]).indexOf("%")?I/100*C.height:I)),s||s!==!1&&a.smooth?(m=x-l,M=I-u,a.xOffset=h+(m*f+M*g)-m,a.yOffset=d+(m*_+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=I,a.smooth=!!s,a.origin=e,a.originIsAbsolute=!!i,t.style[_i]="0px 0px",r&&(eo(r,a,"xOrigin",l,x),eo(r,a,"yOrigin",u,I),eo(r,a,"xOffset",h,a.xOffset),eo(r,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+I)},$a=function(t,e){var i=t._gsap||new d_(t);if("x"in i&&!e&&!i.uncache)return i;var s=t.style,o=i.scaleX<0,r="px",a="deg",c=getComputedStyle(t),l=hs(t,_i)||"0",u,h,d,f,_,g,p,m,M,w,x,I,C,E,L,F,S,A,U,H,J,it,k,tt,W,gt,vt,xt,Dt,kt,rt,dt;return u=h=d=g=p=m=M=w=x=0,f=_=1,i.svg=!!(t.getCTM&&A_(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(s[gn]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[gn]!=="none"?c[gn]:"")),s.scale=s.rotate=s.translate="none"),E=hf(t,i.svg),i.svg&&(i.uncache?(W=t.getBBox(),l=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",tt=""):tt=!e&&t.getAttribute("data-svg-origin"),cd(t,tt||l,!!tt||i.originIsAbsolute,i.smooth!==!1,E)),I=i.xOrigin||0,C=i.yOrigin||0,E!==ja&&(A=E[0],U=E[1],H=E[2],J=E[3],u=it=E[4],h=k=E[5],E.length===6?(f=Math.sqrt(A*A+U*U),_=Math.sqrt(J*J+H*H),g=A||U?lr(U,A)*Po:0,M=H||J?lr(H,J)*Po+g:0,M&&(_*=Math.abs(Math.cos(M*Rr))),i.svg&&(u-=I-(I*A+C*H),h-=C-(I*U+C*J))):(dt=E[6],kt=E[7],vt=E[8],xt=E[9],Dt=E[10],rt=E[11],u=E[12],h=E[13],d=E[14],L=lr(dt,Dt),p=L*Po,L&&(F=Math.cos(-L),S=Math.sin(-L),tt=it*F+vt*S,W=k*F+xt*S,gt=dt*F+Dt*S,vt=it*-S+vt*F,xt=k*-S+xt*F,Dt=dt*-S+Dt*F,rt=kt*-S+rt*F,it=tt,k=W,dt=gt),L=lr(-H,Dt),m=L*Po,L&&(F=Math.cos(-L),S=Math.sin(-L),tt=A*F-vt*S,W=U*F-xt*S,gt=H*F-Dt*S,rt=J*S+rt*F,A=tt,U=W,H=gt),L=lr(U,A),g=L*Po,L&&(F=Math.cos(L),S=Math.sin(L),tt=A*F+U*S,W=it*F+k*S,U=U*F-A*S,k=k*F-it*S,A=tt,it=W),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=yn(Math.sqrt(A*A+U*U+H*H)),_=yn(Math.sqrt(k*k+dt*dt)),L=lr(it,k),M=Math.abs(L)>2e-4?L*Po:0,x=rt?1/(rt<0?-rt:rt):0),i.svg&&(tt=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!R_(hs(t,gn)),tt&&t.setAttribute("transform",tt))),Math.abs(M)>90&&Math.abs(M)<270&&(o?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+r,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+r,i.z=d+r,i.scaleX=yn(f),i.scaleY=yn(_),i.rotation=yn(g)+a,i.rotationX=yn(p)+a,i.rotationY=yn(m)+a,i.skewX=M+a,i.skewY=w+a,i.transformPerspective=x+r,(i.zOrigin=parseFloat(l.split(" ")[2])||!e&&i.zOrigin||0)&&(s[_i]=xl(l)),i.xOffset=i.yOffset=0,i.force3D=Ri.force3D,i.renderTransform=i.svg?DA:E_?C_:LA,i.uncache=0,i},xl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wu=function(t,e,i){var s=Wn(e);return yn(parseFloat(e)+parseFloat(lo(t,"x",i+"px",s)))+s},LA=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,C_(t,e)},So="0deg",aa="0px",bo=") ",C_=function(t,e){var i=e||this,s=i.xPercent,o=i.yPercent,r=i.x,a=i.y,c=i.z,l=i.rotation,u=i.rotationY,h=i.rotationX,d=i.skewX,f=i.skewY,_=i.scaleX,g=i.scaleY,p=i.transformPerspective,m=i.force3D,M=i.target,w=i.zOrigin,x="",I=m==="auto"&&t&&t!==1||m===!0;if(w&&(h!==So||u!==So)){var C=parseFloat(u)*Rr,E=Math.sin(C),L=Math.cos(C),F;C=parseFloat(h)*Rr,F=Math.cos(C),r=Wu(M,r,E*F*-w),a=Wu(M,a,-Math.sin(C)*-w),c=Wu(M,c,L*F*-w+w)}p!==aa&&(x+="perspective("+p+bo),(s||o)&&(x+="translate("+s+"%, "+o+"%) "),(I||r!==aa||a!==aa||c!==aa)&&(x+=c!==aa||I?"translate3d("+r+", "+a+", "+c+") ":"translate("+r+", "+a+bo),l!==So&&(x+="rotate("+l+bo),u!==So&&(x+="rotateY("+u+bo),h!==So&&(x+="rotateX("+h+bo),(d!==So||f!==So)&&(x+="skew("+d+", "+f+bo),(_!==1||g!==1)&&(x+="scale("+_+", "+g+bo),M.style[gn]=x||"translate(0, 0)"},DA=function(t,e){var i=e||this,s=i.xPercent,o=i.yPercent,r=i.x,a=i.y,c=i.rotation,l=i.skewX,u=i.skewY,h=i.scaleX,d=i.scaleY,f=i.target,_=i.xOrigin,g=i.yOrigin,p=i.xOffset,m=i.yOffset,M=i.forceCSS,w=parseFloat(r),x=parseFloat(a),I,C,E,L,F;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Rr,l*=Rr,I=Math.cos(c)*h,C=Math.sin(c)*h,E=Math.sin(c-l)*-d,L=Math.cos(c-l)*d,l&&(u*=Rr,F=Math.tan(l-u),F=Math.sqrt(1+F*F),E*=F,L*=F,u&&(F=Math.tan(u),F=Math.sqrt(1+F*F),I*=F,C*=F)),I=yn(I),C=yn(C),E=yn(E),L=yn(L)):(I=h,L=d,C=E=0),(w&&!~(r+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(w=lo(f,"x",r,"px"),x=lo(f,"y",a,"px")),(_||g||p||m)&&(w=yn(w+_-(_*I+g*E)+p),x=yn(x+g-(_*C+g*L)+m)),(s||o)&&(F=f.getBBox(),w=yn(w+s/100*F.width),x=yn(x+o/100*F.height)),F="matrix("+I+","+C+","+E+","+L+","+w+","+x+")",f.setAttribute("transform",F),M&&(f.style[gn]=F)},UA=function(t,e,i,s,o){var r=360,a=Un(o),c=parseFloat(o)*(a&&~o.indexOf("rad")?Po:1),l=c-s,u=s+l+"deg",h,d;return a&&(h=o.split("_")[1],h==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),h==="cw"&&l<0?l=(l+r*M0)%r-~~(l/r)*r:h==="ccw"&&l>0&&(l=(l-r*M0)%r-~~(l/r)*r)),t._pt=d=new gi(t._pt,e,i,s,l,_A),d.e=u,d.u="deg",t._props.push(i),d},R0=function(t,e){for(var i in e)t[i]=e[i];return t},NA=function(t,e,i){var s=R0({},i._gsap),o="perspective,force3D,transformOrigin,svgOrigin",r=i.style,a,c,l,u,h,d,f,_;s.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),r[gn]=e,a=$a(i,1),Vo(i,gn),i.setAttribute("transform",l)):(l=getComputedStyle(i)[gn],r[gn]=e,a=$a(i,1),r[gn]=l);for(c in zs)l=s[c],u=a[c],l!==u&&o.indexOf(c)<0&&(f=Wn(l),_=Wn(u),h=f!==_?lo(i,c,l,_):parseFloat(l),d=parseFloat(u),t._pt=new gi(t._pt,a,c,h,d-h,od),t._pt.u=_||0,t._props.push(c));R0(a,s)};mi("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",s="Bottom",o="Left",r=(t<3?[e,i,s,o]:[e+o,e+i,s+i,s+o]).map(function(a){return t<2?n+a:"border"+a+n});yl[t>1?"border"+n:n]=function(a,c,l,u,h){var d,f;if(arguments.length<4)return d=r.map(function(_){return Is(a,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},r.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(c,f,h)}});var I_={name:"css",register:ad,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,s,o){var r=this._props,a=t.style,c=i.vars.startAt,l,u,h,d,f,_,g,p,m,M,w,x,I,C,E,L;cf||ad(),this.styles=this.styles||b_(t),L=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Si[g]&&f_(g,e,i,s,t,o)))){if(f=typeof u,_=yl[g],f==="function"&&(u=u.call(i,s,t,o),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Xa(u)),_)_(this,t,g,u,i)&&(E=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",oo.lastIndex=0,oo.test(l)||(p=Wn(l),m=Wn(u)),m?p!==m&&(l=lo(t,g,l,m)+m):p&&(u+=p),this.add(a,"setProperty",l,u,s,o,0,0,g),r.push(g),L.push(g,0,a[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(i,s,t,o):c[g],Un(l)&&~l.indexOf("random(")&&(l=Xa(l)),Wn(l+"")||l==="auto"||(l+=Ri.units[g]||Wn(Is(t,g))||""),(l+"").charAt(1)==="="&&(l=Is(t,g))):l=Is(t,g),d=parseFloat(l),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in cs&&(g==="autoAlpha"&&(d===1&&Is(t,"visibility")==="hidden"&&h&&(d=0),L.push("visibility",0,a.visibility),eo(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=cs[g],~g.indexOf(",")&&(g=g.split(",")[0]))),w=g in zs,w){if(this.styles.save(g),x||(I=t._gsap,I.renderTransform&&!e.parseTransform||$a(t,e.parseTransform),C=e.smoothOrigin!==!1&&I.smooth,x=this._pt=new gi(this._pt,a,gn,0,1,I.renderTransform,I,0,-1),x.dep=1),g==="scale")this._pt=new gi(this._pt,I,"scaleY",I.scaleY,(M?Ar(I.scaleY,M+h):h)-I.scaleY||0,od),this._pt.u=0,r.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(_i,0,a[_i]),u=CA(u),I.svg?cd(t,u,0,C,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==I.zOrigin&&eo(this,I,"zOrigin",I.zOrigin,m),eo(this,a,g,xl(l),xl(u)));continue}else if(g==="svgOrigin"){cd(t,u,1,C,0,this);continue}else if(g in P_){UA(this,I,g,d,M?Ar(d,M+u):u);continue}else if(g==="smoothOrigin"){eo(this,I,"smooth",I.smooth,u);continue}else if(g==="force3D"){I[g]=u;continue}else if(g==="transform"){NA(this,u,t);continue}}else g in a||(g=Wr(g)||g);if(w||(h||h===0)&&(d||d===0)&&!gA.test(u)&&g in a)p=(l+"").substr((d+"").length),h||(h=0),m=Wn(u)||(g in Ri.units?Ri.units[g]:p),p!==m&&(d=lo(t,g,l,m)),this._pt=new gi(this._pt,w?I:a,g,d,(M?Ar(d,M+h):h)-d,!w&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?yA:od),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=vA);else if(g in a)RA.call(this,t,g,l,M?M+u:u);else if(g in t)this.add(t,g,l||t[g],M?M+u:u,s,o);else if(g!=="parseTransform"){Jd(g,u);continue}w||(g in a?L.push(g,0,a[g]):typeof t[g]=="function"?L.push(g,2,t[g]()):L.push(g,1,l||t[g])),r.push(g)}}E&&y_(this)},render:function(t,e){if(e.tween._time||!lf())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Is,aliases:cs,getSetter:function(t,e,i){var s=cs[e];return s&&s.indexOf(",")<0&&(e=s),e in zs&&e!==_i&&(t._gsap.x||Is(t,"x"))?i&&w0===i?e==="scale"?SA:MA:(w0=i||{})&&(e==="scale"?bA:EA):t.style&&!$d(t.style[e])?xA:~e.indexOf("-")?wA:rf(t,e)},core:{_removeProperty:Vo,_getMatrix:hf}};vi.utils.checkPrefix=Wr;vi.core.getStyleSaver=b_;(function(n,t,e,i){var s=mi(n+","+t+","+e,function(o){zs[o]=1});mi(t,function(o){Ri.units[o]="deg",P_[o]=1}),cs[s[13]]=n+","+t,mi(i,function(o){var r=o.split(":");cs[r[1]]=s[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ri.units[n]="px"});vi.registerPlugin(I_);var da=vi.registerPlugin(I_)||vi;da.core.Tween;const OA={class:"pixel-controls"},FA={class:"side-buttons"},BA=15,zA=5,GA=zn({__name:"Duck",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Qt(null);ti(()=>{if(e.value){let d=function(){x.visible=!1,S.update(w,m),x.visible=!0,requestAnimationFrame(d)},f=function(){const Vt=new Xt,$t=new Jn().load("/3d-bear-arts/assets/dollar.jpg"),re=new pn(.7,.15,.35),he=new Ot({color:3329330,transparent:!0,opacity:.85,transmission:.9,roughness:.15,metalness:.3,emissive:3050327,emissiveIntensity:.3}),de=new y(re,he);de.position.set(0,-.25,0),Vt.add(de);const ye=new Rt({color:2263842}),_e=.03,we=[new y(new pn(.7,.2,_e),ye),new y(new pn(.7,.2,_e),ye),new y(new pn(_e,.2,.5),ye),new y(new pn(_e,.2,.5),ye)];we[0].position.set(0,-.15,.25),we[1].position.set(0,-.15,-.25),we[2].position.set(-.35,-.15,0),we[3].position.set(.35,-.15,0),we.forEach(wt=>Vt.add(wt));function Ue(){const wt=new ic(.25,.15),ae=new ps({map:$t,transparent:!0,side:De}),P=new y(wt,ae);return P.position.set(Math.random()*.6-.3,Math.random()*.1-.07,Math.random()*.4-.2),P.rotation.y=Math.random()*Math.PI,P}for(let wt=0;wt<60;wt++){const ae=Ue();Vt.add(ae),da.to(ae.position,{y:"+=0.02",duration:1.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),da.to(ae.rotation,{z:Math.PI*(Math.random()-.5),duration:2,repeat:-1,yoyo:!0,ease:"sine.inOut"})}function Te(wt){da.to(wt.position,{y:.5,duration:.5,ease:"power2.out",yoyo:!0,repeat:1,onComplete:()=>{da.to(wt.position,{y:-.2,duration:.3,ease:"bounce.out"})}})}return setInterval(()=>{Te(ce),setTimeout(()=>Te(le),500),setTimeout(()=>Te(ue),1e3),setTimeout(()=>Te(oe),1500)},3e3),Vt},_=function(){const Vt=new Xt,qt=new Rt({color:16777215}),$t=new Rt({color:16753920}),re=new Rt({color:0}),he=new Rt({color:16711680}),de=new Rt({color:9127187}),ye=new Rt({color:255}),_e=new Rt({color:0}),we=new ct(.5,32,32),Ue=new y(we,qt);Ue.position.set(0,1.7,0),Vt.add(Ue);const Te=new Zt(.15,.1,.3,32,1,!0),wt=new ct(.15,32,16,0,Math.PI),ae=new y(Te,$t),P=new y(wt,$t);ae.position.set(0,1.6,.45),ae.rotation.x=Math.PI/2,P.position.set(0,1.6,.6),Vt.add(ae),Vt.add(P);const $=new Xn(.15,.015,16,100),O=new y($,_e);O.position.set(-.25,1.8,.5);const Y=new y($,_e);Y.position.set(.25,1.8,.5);const V=new Zt(.01,.01,.3,16),mt=new y(V,_e);mt.position.set(0,1.85,.5),mt.rotation.z=Math.PI/2,Vt.add(O,Y,mt);const Lt=new ct(.6,32,32),Ut=new y(Lt,qt);Ut.position.set(0,.7,0),Vt.add(Ut);const Bt=new ct(.6,32,32,0,Math.PI),jt=new y(Bt,ye);jt.position.set(0,.6,0),jt.rotation.x=Math.PI/2,Vt.add(jt);const Kt=new Zt(.1,.1,.5,32),Wt=new y(Kt,$t);Wt.position.set(-.3,-.1,0),Vt.add(Wt);const se=new y(Kt,$t);se.position.set(.3,-.1,0),Vt.add(se);const pe=new Tn;pe.moveTo(0,0),pe.lineTo(.3,.1),pe.lineTo(.15,-.1),pe.lineTo(-.15,-.1),pe.lineTo(-.3,.1),pe.closePath();const me=new Pn(pe,{depth:.1,bevelEnabled:!1}),Ct=new y(me,$t);Ct.position.set(-.3,-.3,.1),Ct.rotation.x=Math.PI/2,Vt.add(Ct);const Jt=new y(me,$t);Jt.position.set(.3,-.3,.1),Jt.rotation.x=Math.PI/2,Vt.add(Jt);const zt=new Tn;zt.moveTo(0,0),zt.lineTo(-.15,-.3),zt.lineTo(0,-.5),zt.lineTo(.15,-.3),zt.closePath();const fe=new Pn(zt,{depth:.05,bevelEnabled:!0,bevelSize:.01}),Pt=new y(fe,he);Pt.position.set(0,1.3,.45),Pt.rotation.x=Math.PI/8,Vt.add(Pt);const Ee=new Zt(.4,.4,.1,32),Pe=new y(Ee,re);Pe.position.set(0,2.1,0),Vt.add(Pe);const Me=new Zt(.3,.3,.6,32),Be=new y(Me,re);Be.position.set(0,2.4,0),Vt.add(Be);const xe=new Zt(.05,.05,1.5,16),Oe=new y(xe,de);return Oe.position.set(.85,.5,0),Oe.rotation.z=Math.PI/8,Vt.add(Oe),Vt},g=function(Vt,qt){const $t=new Xt,re=new Rt({color:16777215}),he=new Rt({color:16753920}),de=new Rt({color:Vt}),ye=new Rt({color:qt}),_e=new ct(.5,32,32),we=new y(_e,re);we.position.set(0,1.7,0),$t.add(we);const Ue=new Zt(.15,.1,.3,32,1,!0),Te=new ct(.15,32,16,0,Math.PI),wt=new y(Ue,he),ae=new y(Te,he);wt.position.set(0,1.6,.45),wt.rotation.x=Math.PI/2,ae.position.set(0,1.6,.6),$t.add(wt),$t.add(ae);const P=new ct(.6,32,32),$=new y(P,re);$.position.set(0,.7,0),$t.add($);const O=new ct(.6,32,32,0,Math.PI),Y=new y(O,de);Y.position.set(0,.6,0),Y.rotation.x=Math.PI/2,$t.add(Y);const V=new Zt(.1,.1,.5,32),mt=new y(V,he);mt.position.set(-.3,-.1,0),$t.add(mt);const Lt=new y(V,he);Lt.position.set(.3,-.1,0),$t.add(Lt);const Ut=new Tn;Ut.moveTo(0,0),Ut.lineTo(.3,.1),Ut.lineTo(.15,-.1),Ut.lineTo(-.15,-.1),Ut.lineTo(-.3,.1),Ut.closePath();const Bt=new Pn(Ut,{depth:.1,bevelEnabled:!1}),jt=new y(Bt,he);jt.position.set(-.3,-.3,.1),jt.rotation.x=Math.PI/2,$t.add(jt);const Kt=new y(Bt,he);Kt.position.set(.3,-.3,.1),Kt.rotation.x=Math.PI/2,$t.add(Kt);const Wt=new Zt(.3,.3,.1,32),se=new y(Wt,ye);se.position.set(0,2.1,0),$t.add(se);const pe=new Zt(.2,.2,.3,32),me=new y(pe,ye);return me.position.set(0,2.4,0),$t.add(me),$t},p=function(){requestAnimationFrame(p),dt.uniforms.time.value+=.05,i.value&&(x.rotation.y+=.05),s.value&&(x.rotation.y-=.07),o.value&&(x.rotation.x-=.05),r.value&&(x.rotation.x+=.05),w.render(m,M)};const m=new Zn,M=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),w=new Kn({antialias:!0,alpha:!0});w.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(w.domElement);const x=new Xt,I=new Ui(16777215,2);m.add(I);const C=new Di(16777215,4);C.position.set(5,5,5),m.add(C);const E=new Li(16777215,5,50);E.position.set(0,2,4),m.add(E);const L=new Jn,F=new nc(256,{format:ci,generateMipmaps:!0,minFilter:Ki}),S=new ec(1,1e3,F);m.add(S),m.environment=F.texture,d();const U=new Kr().load(["/3d-bear-arts/assets/cash.jpg","/3d-bear-arts/assets/cash.jpg","/3d-bear-arts/assets/cash.jpg","/3d-bear-arts/assets/cash.jpg","/3d-bear-arts/assets/cash.jpg","/3d-bear-arts/assets/cash.jpg"]);m.environment=U;const H=f();H.position.set(.4,-.4,0),x.add(H);const J=L.load("/3d-bear-arts/assets/threeDucks.jpg");J.wrapS=J.wrapT=tn,J.repeat.set(1,1);const it=L.load("/3d-bear-arts/assets/cash.jpg");new Ot({color:16777215,map:J,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const k=new Ot({color:16777215,map:it,metalness:.3,roughness:.5,transparent:!0,opacity:.2}),tt=new Ot({color:"white",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:U,reflectivity:1}),W=L.load("/3d-bear-arts/assets/threeDucks.jpg"),gt=L.load("/3d-bear-arts/assets/richduck.jpg"),vt=new Ot({color:"pink",map:W,metalness:.3,roughness:.5,transparent:!0,opacity:1}),xt=new Ot({color:"pink",map:gt,metalness:.3,roughness:.5,transparent:!0,opacity:1}),Dt=new hn({uniforms:{time:{value:0},color1:{value:new Se(16766720)},color2:{value:new Se(16007990)}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec2 vUv;
          void main() {
            vec3 color = mix(color1, color2, sin(vUv.y * 10.0 + time) * 0.5 + 0.5);
            gl_FragColor = vec4(color, 1.0);
          }
        `}),kt=`
    varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
    `,rt=`
      uniform float time;
          uniform float opacity; // Add opacity uniform
          varying vec2 vUv;
      
          void main() {
              // Dynamic water-like gradient effect
              vec2 p = vUv * 2.0 - vec2(1.0); // Normalize UV coordinates to [-1, 1]
              float len = length(p); // Get the length of the vector (distance from center)
              float angle = atan(p.y, p.x); // Calculate the angle in polar coordinates
      
              // Create a time-based oscillating value for smooth gradient transitions
              float wave = sin(len * 10.0 - time * 3.0) * 1.0 + 0.5;
      
              // Color gradient based on the angle and distance from the center
              vec3 color1 = vec3(1.0, 0.078, 0.576); 
              vec3 color2 = vec3(0.878, 0.878, 0.878); 
              vec3 color3 = vec3(1.0, 0.0, 0.8); 
      
              // Mix the colors based on wave and angle for a dynamic effect
              vec3 color = mix(color1, color2, wave);
              color = mix(color, color3, sin(angle + time) * 0.5 + 0.5);
      
              // Set the fragment color with opacity
              gl_FragColor = vec4(color, opacity); // Use the opacity uniform for transparency
          }
    `,dt=new hn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:kt,fragmentShader:rt,transparent:!1,depthWrite:!0}),bt=new Ot({color:"white",metalness:.9,roughness:.1,clearcoat:1,clearcoatRoughness:.2,transparent:!0,opacity:.7,transmission:.4,ior:1.2}),G=new Ot({color:"white",metalness:.9,roughness:.1,clearcoat:1,clearcoatRoughness:.2,transparent:!0,opacity:.5,transmission:.8,ior:1.2}),ut=new ct(1,32,32,0,Math.PI),at=new y(ut,k),ht=new y(ut,bt);at.scale.set(.85,.85,.8),ht.scale.set(.85,.85,.8),at.position.y=-.2,ht.position.y=-.2,at.rotation.y=Math.PI/2,ht.rotation.y=Math.PI*1.5;const St=new Ce(1,32),st=new y(St,xt);st.scale.set(.85,.85,.8),st.position.set(0,-.2,0),st.rotation.y=Math.PI/2;const v=new Xt;v.add(at),v.add(ht),x.add(v);const R=new ct(.6,32,32,0,Math.PI),N=new y(R,bt);N.scale.set(1,.95,.95),N.position.set(0,1,0),N.rotation.y=Math.PI*1.5;const z=new y(R,G);z.scale.set(1,.95,.95),z.position.set(0,1,0),z.rotation.y=Math.PI/2;const B=new Ce(.6,32),Z=new y(B,vt);Z.position.set(0,1,0),Z.rotation.y=Math.PI/2,Z.scale.set(1,.95,.95);const Q=new Xt;Q.add(N),Q.add(z),Q.add(Z),x.add(Q);const T=new ct(.25,32,32),b=new y(T,bt);b.position.set(-.45,1.35,-.1),x.add(b);const D=new y(T,G);D.position.set(.45,1.35,-.1),x.add(D);const K=new ct(.25,32,32,Math.PI/2,Math.PI),q=new y(K,bt);q.scale.set(1.1,.6,.8),q.position.set(0,.84,.5),q.rotation.y=Math.PI;const j=new ct(.25,32,32,Math.PI/2,Math.PI),ft=new y(j,G);ft.scale.set(1.1,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=0;const lt=new Ce(.25,32),_t=new y(lt,vt);_t.scale.set(.8,.6,.8),_t.position.set(0,.84,.5),_t.rotation.y=Math.PI/2;const At=new Xt;At.add(q),At.add(ft),At.add(_t),x.add(At);const pt=new ct(.35,32,32),yt=new y(pt,bt);yt.scale.set(.75,1.25,.65),yt.position.set(-.7,-.15,.2),x.add(yt);const Nt=new y(pt,k);Nt.scale.set(.75,1.25,.65),Nt.position.set(.7,-.15,.2),x.add(Nt);const Gt=new Zt(.2,.22,.6,32),It=new y(Gt,bt);It.position.set(-.4,-1.05,0),x.add(It);const ee=new y(Gt,G);ee.position.set(.4,-1.05,0),x.add(ee);const Ht=new ct(.3,32,32),te=new y(Ht,bt);te.scale.set(1,.72,1.5),te.position.set(-.4,-1.45,.17),x.add(te);const X=new y(Ht,G);X.scale.set(1,.72,1.5),X.position.set(.4,-1.45,.17),x.add(X);const Mt=new ct(.44,32,32),ot=new y(Mt,G);ot.position.set(-.15,-.45,-.4),x.add(ot);const nt=new y(Mt,k);nt.position.set(.15,-.45,-.4),x.add(nt);const Tt=new ct(.18,32,32),Et=new y(Tt,bt);Et.position.set(0,-.35,-.8),x.add(Et),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Vt){const qt=new ke("$",{font:Vt,size:.2,depth:.1}),$t=new y(qt,tt);$t.position.set(-.3,.99,.53),$t.rotation.x=ge.degToRad(-5),$t.rotation.y=ge.degToRad(-15),x.add($t);const re=new ke("$",{font:Vt,size:.2,depth:.1}),he=new y(re,tt);he.position.set(.14,.99,.53),he.rotation.y=ge.degToRad(12),he.rotation.x=ge.degToRad(-5),x.add(he)}),Et.renderOrder=1;const oe=_();oe.scale.set(.22,.22,.22),oe.position.set(.3,-.2,0),x.add(oe);const ce=g(16711680,16711680);ce.scale.set(.12,.12,.12),ce.position.set(.3,-.2,.15),x.add(ce);const le=g(65280,65280);le.scale.set(.12,.12,.12),le.position.set(.2,-.15,.4),x.add(le);const ue=g(255,255);ue.scale.set(.12,.12,.12),ue.position.set(.5,-.15,.35),x.add(ue),x.scale.set(1.4,1.4,1.4),m.add(x),x.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),M.position.set(t.bodyPosition.x,1.4,t.cameraPosition),M.lookAt(t.bodyPosition.x,0,0),M.position.z=4;let ve=Qt(!1);const be=Vt=>{if(ve.value){const qt={x:Vt.clientX/window.innerWidth*2-1,y:-(Vt.clientY/window.innerHeight)*2+1},$t=qt.x*Math.PI*.2,re=qt.y*Math.PI*.2;x.rotation.y=$t,x.rotation.x=re}};window.addEventListener("mousemove",be),Dt.uniforms.time.value+=.04,p(),Ve(()=>t.bodyPosition,Vt=>{x.position.set(Vt.x,Vt.y,Vt.z)}),Ve(()=>t.cameraPosition,Vt=>{M.position.set(t.bodyPosition.x,1,Vt),M.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)})}});let i=Qt(!1),s=Qt(!1),o=Qt(!1),r=Qt(!1);function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function u(){r.value=!0}function h(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let d=0;d<BA;d++){const f=document.createElement("div");f.classList.add("confetti"),f.style.left=`${Math.random()*100}vw`,f.style.animationDuration=`${Math.random()*3+4}s`,f.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(f)}for(let d=0;d<zA;d++){const f=document.createElement("div");f.classList.add("light"),document.body.appendChild(f)}return(d,f)=>(ei(),li(En,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Qn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",OA,[Ft("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:h},"▲",32),Ft("div",FA,[Ft("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:h},"◀",32),Ft("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:h},"▶",32)]),Ft("button",{class:"pixel-btn down border-gold",onMousedown:u,onMouseup:h},"▼",32)])],64))}}),kA=ui(GA,[["__scopeId","data-v-fcff55f2"]]),HA=[{path:"/3d-bear-arts/leather",name:"Leather",component:mT},{path:"/3d-bear-arts/pop-art",name:"Pop",component:_T},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:wT},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:ET},{path:"/3d-bear-arts/water",name:"Water",component:NT},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:zT},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:VT},{path:"/3d-bear-arts/coffee",name:"Coffee",component:e3},{path:"/3d-bear-arts/bears",name:"Bears",component:l3},{path:"/3d-bear-arts/money",name:"Money",component:m3},{path:"/3d-bear-arts/snowman",name:"Snowman",component:w3},{path:"/3d-bear-arts/santa",name:"Santa",component:$T},{path:"/3d-bear-arts/",name:"Duck",component:kA}],VA=lw({history:zx(),routes:HA}),L_=ix(cx);L_.use(VA);L_.mount("#app");
