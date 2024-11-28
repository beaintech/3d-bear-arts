(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ke={},fs=[],Ii=()=>{},Vp=()=>!1,Ua=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Jl=n=>n.startsWith("onUpdate:"),En=Object.assign,Ql=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Wp=Object.prototype.hasOwnProperty,ze=(n,t)=>Wp.call(n,t),Te=Array.isArray,$s=n=>Na(n)==="[object Map]",Xp=n=>Na(n)==="[object Set]",be=n=>typeof n=="function",Sn=n=>typeof n=="string",Is=n=>typeof n=="symbol",dn=n=>n!==null&&typeof n=="object",Bh=n=>(dn(n)||be(n))&&be(n.then)&&be(n.catch),qp=Object.prototype.toString,Na=n=>qp.call(n),jp=n=>Na(n).slice(8,-1),Yp=n=>Na(n)==="[object Object]",tu=n=>Sn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ks=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},$p=/-(\w)/g,hi=Fa(n=>n.replace($p,(t,e)=>e?e.toUpperCase():"")),Kp=/\B([A-Z])/g,Vo=Fa(n=>n.replace(Kp,"-$1").toLowerCase()),Oa=Fa(n=>n.charAt(0).toUpperCase()+n.slice(1)),tc=Fa(n=>n?`on${Oa(n)}`:""),_o=(n,t)=>!Object.is(n,t),ec=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},zh=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Zp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Bu;const Gh=()=>Bu||(Bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eu(n){if(Te(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],o=Sn(i)?e0(i):eu(i);if(o)for(const s in o)t[s]=o[s]}return t}else if(Sn(n)||dn(n))return n}const Jp=/;(?![^(]*\))/g,Qp=/:([^]+)/,t0=/\/\*[^]*?\*\//g;function e0(n){const t={};return n.replace(t0,"").split(Jp).forEach(e=>{if(e){const i=e.split(Qp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Bn(n){let t="";if(Sn(n))t=n;else if(Te(n))for(let e=0;e<n.length;e++){const i=Bn(n[e]);i&&(t+=i+" ")}else if(dn(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const n0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i0=Zl(n0);function Hh(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ni;class o0{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ni,!t&&ni&&(this.index=(ni.scopes||(ni.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=ni;try{return ni=this,t()}finally{ni=e}}}on(){ni=this}off(){ni=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function s0(){return ni}let Je;const nc=new WeakSet;class kh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ni&&ni.active&&ni.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nc.has(this)&&(nc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zu(this),Xh(this);const t=Je,e=Mi;Je=this,Mi=!0;try{return this.fn()}finally{qh(this),Je=t,Mi=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ou(t);this.deps=this.depsTail=void 0,zu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yc(this)&&this.run()}get dirty(){return Yc(this)}}let Vh=0,us;function Wh(n){n.flags|=8,n.next=us,us=n}function nu(){Vh++}function iu(){if(--Vh>0)return;let n;for(;us;){let t=us,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=us,us=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Xh(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function qh(n){let t,e=n.depsTail,i=e;for(;i;){const o=i.prevDep;i.version===-1?(i===e&&(e=o),ou(i),r0(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}n.deps=t,n.depsTail=e}function Yc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(jh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function jh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===cr))return;n.globalVersion=cr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Yc(n)){n.flags&=-3;return}const e=Je,i=Mi;Je=n,Mi=!0;try{Xh(n);const o=n.fn(n._value);(t.version===0||_o(o,n._value))&&(n._value=o,t.version++)}catch(o){throw t.version++,o}finally{Je=e,Mi=i,qh(n),n.flags&=-3}}function ou(n,t=!1){const{dep:e,prevSub:i,nextSub:o}=n;if(i&&(i.nextSub=o,n.prevSub=void 0),o&&(o.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)ou(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function r0(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Mi=!0;const Yh=[];function xo(){Yh.push(Mi),Mi=!1}function wo(){const n=Yh.pop();Mi=n===void 0?!0:n}function zu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Je;Je=void 0;try{t()}finally{Je=e}}}let cr=0;class a0{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class su{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Je||!Mi||Je===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Je)e=this.activeLink=new a0(Je,this),Je.deps?(e.prevDep=Je.depsTail,Je.depsTail.nextDep=e,Je.depsTail=e):Je.deps=Je.depsTail=e,$h(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Je.depsTail,e.nextDep=void 0,Je.depsTail.nextDep=e,Je.depsTail=e,Je.deps===e&&(Je.deps=i)}return e}trigger(t){this.version++,cr++,this.notify(t)}notify(t){nu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{iu()}}}function $h(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)$h(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const $c=new WeakMap,Oo=Symbol(""),Kc=Symbol(""),lr=Symbol("");function Nn(n,t,e){if(Mi&&Je){let i=$c.get(n);i||$c.set(n,i=new Map);let o=i.get(e);o||(i.set(e,o=new su),o.target=n,o.map=i,o.key=e),o.track()}}function Ji(n,t,e,i,o,s){const r=$c.get(n);if(!r){cr++;return}const a=c=>{c&&c.trigger()};if(nu(),t==="clear")r.forEach(a);else{const c=Te(n),l=c&&tu(e);if(c&&e==="length"){const d=Number(i);r.forEach((u,h)=>{(h==="length"||h===lr||!Is(h)&&h>=d)&&a(u)})}else switch(e!==void 0&&a(r.get(e)),l&&a(r.get(lr)),t){case"add":c?l&&a(r.get("length")):(a(r.get(Oo)),$s(n)&&a(r.get(Kc)));break;case"delete":c||(a(r.get(Oo)),$s(n)&&a(r.get(Kc)));break;case"set":$s(n)&&a(r.get(Oo));break}}iu()}function qo(n){const t=ke(n);return t===n?t:(Nn(t,"iterate",lr),Si(n)?t:t.map(Wn))}function ru(n){return Nn(n=ke(n),"iterate",lr),n}const c0={__proto__:null,[Symbol.iterator](){return ic(this,Symbol.iterator,Wn)},concat(...n){return qo(this).concat(...n.map(t=>Te(t)?qo(t):t))},entries(){return ic(this,"entries",n=>(n[1]=Wn(n[1]),n))},every(n,t){return zi(this,"every",n,t,void 0,arguments)},filter(n,t){return zi(this,"filter",n,t,e=>e.map(Wn),arguments)},find(n,t){return zi(this,"find",n,t,Wn,arguments)},findIndex(n,t){return zi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return zi(this,"findLast",n,t,Wn,arguments)},findLastIndex(n,t){return zi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return zi(this,"forEach",n,t,void 0,arguments)},includes(...n){return oc(this,"includes",n)},indexOf(...n){return oc(this,"indexOf",n)},join(n){return qo(this).join(n)},lastIndexOf(...n){return oc(this,"lastIndexOf",n)},map(n,t){return zi(this,"map",n,t,void 0,arguments)},pop(){return Os(this,"pop")},push(...n){return Os(this,"push",n)},reduce(n,...t){return Gu(this,"reduce",n,t)},reduceRight(n,...t){return Gu(this,"reduceRight",n,t)},shift(){return Os(this,"shift")},some(n,t){return zi(this,"some",n,t,void 0,arguments)},splice(...n){return Os(this,"splice",n)},toReversed(){return qo(this).toReversed()},toSorted(n){return qo(this).toSorted(n)},toSpliced(...n){return qo(this).toSpliced(...n)},unshift(...n){return Os(this,"unshift",n)},values(){return ic(this,"values",Wn)}};function ic(n,t,e){const i=ru(n),o=i[t]();return i!==n&&!Si(n)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.value&&(s.value=e(s.value)),s}),o}const l0=Array.prototype;function zi(n,t,e,i,o,s){const r=ru(n),a=r!==n&&!Si(n),c=r[t];if(c!==l0[t]){const u=c.apply(n,s);return a?Wn(u):u}let l=e;r!==n&&(a?l=function(u,h){return e.call(this,Wn(u),h,n)}:e.length>2&&(l=function(u,h){return e.call(this,u,h,n)}));const d=c.call(r,l,i);return a&&o?o(d):d}function Gu(n,t,e,i){const o=ru(n);let s=e;return o!==n&&(Si(n)?e.length>3&&(s=function(r,a,c){return e.call(this,r,a,c,n)}):s=function(r,a,c){return e.call(this,r,Wn(a),c,n)}),o[t](s,...i)}function oc(n,t,e){const i=ke(n);Nn(i,"iterate",lr);const o=i[t](...e);return(o===-1||o===!1)&&uu(e[0])?(e[0]=ke(e[0]),i[t](...e)):o}function Os(n,t,e=[]){xo(),nu();const i=ke(n)[t].apply(n,e);return iu(),wo(),i}const u0=Zl("__proto__,__v_isRef,__isVue"),Kh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Is));function d0(n){Is(n)||(n=String(n));const t=ke(this);return Nn(t,"has",n),t.hasOwnProperty(n)}class Zh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const o=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(o?s?b0:ef:s?tf:Qh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=Te(t);if(!o){let c;if(r&&(c=c0[e]))return c;if(e==="hasOwnProperty")return d0}const a=Reflect.get(t,e,Dn(t)?t:i);return(Is(e)?Kh.has(e):u0(e))||(o||Nn(t,"get",e),s)?a:Dn(a)?r&&tu(e)?a:a.value:dn(a)?o?of(a):za(a):a}}class Jh extends Zh{constructor(t=!1){super(!1,t)}set(t,e,i,o){let s=t[e];if(!this._isShallow){const c=Bo(s);if(!Si(i)&&!Bo(i)&&(s=ke(s),i=ke(i)),!Te(t)&&Dn(s)&&!Dn(i))return c?!1:(s.value=i,!0)}const r=Te(t)&&tu(e)?Number(e)<t.length:ze(t,e),a=Reflect.set(t,e,i,Dn(t)?t:o);return t===ke(o)&&(r?_o(i,s)&&Ji(t,"set",e,i):Ji(t,"add",e,i)),a}deleteProperty(t,e){const i=ze(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&i&&Ji(t,"delete",e,void 0),o}has(t,e){const i=Reflect.has(t,e);return(!Is(e)||!Kh.has(e))&&Nn(t,"has",e),i}ownKeys(t){return Nn(t,"iterate",Te(t)?"length":Oo),Reflect.ownKeys(t)}}class h0 extends Zh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const f0=new Jh,p0=new h0,m0=new Jh(!0);const au=n=>n,Ba=n=>Reflect.getPrototypeOf(n);function Ir(n,t,e=!1,i=!1){n=n.__v_raw;const o=ke(n),s=ke(t);e||(_o(t,s)&&Nn(o,"get",t),Nn(o,"get",s));const{has:r}=Ba(o),a=i?au:e?du:Wn;if(r.call(o,t))return a(n.get(t));if(r.call(o,s))return a(n.get(s));n!==o&&n.get(t)}function Lr(n,t=!1){const e=this.__v_raw,i=ke(e),o=ke(n);return t||(_o(n,o)&&Nn(i,"has",n),Nn(i,"has",o)),n===o?e.has(n):e.has(n)||e.has(o)}function Dr(n,t=!1){return n=n.__v_raw,!t&&Nn(ke(n),"iterate",Oo),Reflect.get(n,"size",n)}function Hu(n,t=!1){!t&&!Si(n)&&!Bo(n)&&(n=ke(n));const e=ke(this);return Ba(e).has.call(e,n)||(e.add(n),Ji(e,"add",n,n)),this}function ku(n,t,e=!1){!e&&!Si(t)&&!Bo(t)&&(t=ke(t));const i=ke(this),{has:o,get:s}=Ba(i);let r=o.call(i,n);r||(n=ke(n),r=o.call(i,n));const a=s.call(i,n);return i.set(n,t),r?_o(t,a)&&Ji(i,"set",n,t):Ji(i,"add",n,t),this}function Vu(n){const t=ke(this),{has:e,get:i}=Ba(t);let o=e.call(t,n);o||(n=ke(n),o=e.call(t,n)),i&&i.call(t,n);const s=t.delete(n);return o&&Ji(t,"delete",n,void 0),s}function Wu(){const n=ke(this),t=n.size!==0,e=n.clear();return t&&Ji(n,"clear",void 0,void 0),e}function Ur(n,t){return function(i,o){const s=this,r=s.__v_raw,a=ke(r),c=t?au:n?du:Wn;return!n&&Nn(a,"iterate",Oo),r.forEach((l,d)=>i.call(o,c(l),c(d),s))}}function Nr(n,t,e){return function(...i){const o=this.__v_raw,s=ke(o),r=$s(s),a=n==="entries"||n===Symbol.iterator&&r,c=n==="keys"&&r,l=o[n](...i),d=e?au:t?du:Wn;return!t&&Nn(s,"iterate",c?Kc:Oo),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:a?[d(u[0]),d(u[1])]:d(u),done:h}},[Symbol.iterator](){return this}}}}function io(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function g0(){const n={get(s){return Ir(this,s)},get size(){return Dr(this)},has:Lr,add:Hu,set:ku,delete:Vu,clear:Wu,forEach:Ur(!1,!1)},t={get(s){return Ir(this,s,!1,!0)},get size(){return Dr(this)},has:Lr,add(s){return Hu.call(this,s,!0)},set(s,r){return ku.call(this,s,r,!0)},delete:Vu,clear:Wu,forEach:Ur(!1,!0)},e={get(s){return Ir(this,s,!0)},get size(){return Dr(this,!0)},has(s){return Lr.call(this,s,!0)},add:io("add"),set:io("set"),delete:io("delete"),clear:io("clear"),forEach:Ur(!0,!1)},i={get(s){return Ir(this,s,!0,!0)},get size(){return Dr(this,!0)},has(s){return Lr.call(this,s,!0)},add:io("add"),set:io("set"),delete:io("delete"),clear:io("clear"),forEach:Ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Nr(s,!1,!1),e[s]=Nr(s,!0,!1),t[s]=Nr(s,!1,!0),i[s]=Nr(s,!0,!0)}),[n,e,t,i]}const[v0,_0,y0,x0]=g0();function cu(n,t){const e=t?n?x0:y0:n?_0:v0;return(i,o,s)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?i:Reflect.get(ze(e,o)&&o in i?e:i,o,s)}const w0={get:cu(!1,!1)},M0={get:cu(!1,!0)},S0={get:cu(!0,!1)};const Qh=new WeakMap,tf=new WeakMap,ef=new WeakMap,b0=new WeakMap;function E0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function T0(n){return n.__v_skip||!Object.isExtensible(n)?0:E0(jp(n))}function za(n){return Bo(n)?n:lu(n,!1,f0,w0,Qh)}function nf(n){return lu(n,!1,m0,M0,tf)}function of(n){return lu(n,!0,p0,S0,ef)}function lu(n,t,e,i,o){if(!dn(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=o.get(n);if(s)return s;const r=T0(n);if(r===0)return n;const a=new Proxy(n,r===2?i:e);return o.set(n,a),a}function Zs(n){return Bo(n)?Zs(n.__v_raw):!!(n&&n.__v_isReactive)}function Bo(n){return!!(n&&n.__v_isReadonly)}function Si(n){return!!(n&&n.__v_isShallow)}function uu(n){return n?!!n.__v_raw:!1}function ke(n){const t=n&&n.__v_raw;return t?ke(t):n}function A0(n){return!ze(n,"__v_skip")&&Object.isExtensible(n)&&zh(n,"__v_skip",!0),n}const Wn=n=>dn(n)?za(n):n,du=n=>dn(n)?of(n):n;function Dn(n){return n?n.__v_isRef===!0:!1}function Yt(n){return sf(n,!1)}function ps(n){return sf(n,!0)}function sf(n,t){return Dn(n)?n:new P0(n,t)}class P0{constructor(t,e){this.dep=new su,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ke(t),this._value=e?t:Wn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Si(t)||Bo(t);t=i?t:ke(t),_o(t,e)&&(this._rawValue=t,this._value=i?t:Wn(t),this.dep.trigger())}}function ms(n){return Dn(n)?n.value:n}const R0={get:(n,t,e)=>t==="__v_raw"?n:ms(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const o=n[t];return Dn(o)&&!Dn(e)?(o.value=e,!0):Reflect.set(n,t,e,i)}};function rf(n){return Zs(n)?n:new Proxy(n,R0)}class C0{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new su(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Je!==this)return Wh(this),!0}get value(){const t=this.dep.track();return jh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function I0(n,t,e=!1){let i,o;return be(n)?i=n:(i=n.get,o=n.set),new C0(i,o,e)}const Fr={},Ma=new WeakMap;let Io;function L0(n,t=!1,e=Io){if(e){let i=Ma.get(e);i||Ma.set(e,i=[]),i.push(n)}}function D0(n,t,e=Ke){const{immediate:i,deep:o,once:s,scheduler:r,augmentJob:a,call:c}=e,l=M=>o?M:Si(M)||o===!1||o===0?$i(M,1):$i(M);let d,u,h,f,v=!1,x=!1;if(Dn(n)?(u=()=>n.value,v=Si(n)):Zs(n)?(u=()=>l(n),v=!0):Te(n)?(x=!0,v=n.some(M=>Zs(M)||Si(M)),u=()=>n.map(M=>{if(Dn(M))return M.value;if(Zs(M))return l(M);if(be(M))return c?c(M,2):M()})):be(n)?t?u=c?()=>c(n,2):n:u=()=>{if(h){xo();try{h()}finally{wo()}}const M=Io;Io=d;try{return c?c(n,3,[f]):n(f)}finally{Io=M}}:u=Ii,t&&o){const M=u,B=o===!0?1/0:o;u=()=>$i(M(),B)}const m=s0(),p=()=>{d.stop(),m&&Ql(m.effects,d)};if(s&&t){const M=t;t=(...B)=>{M(...B),p()}}let S=x?new Array(n.length).fill(Fr):Fr;const E=M=>{if(!(!(d.flags&1)||!d.dirty&&!M))if(t){const B=d.run();if(o||v||(x?B.some((I,R)=>_o(I,S[R])):_o(B,S))){h&&h();const I=Io;Io=d;try{const R=[B,S===Fr?void 0:x&&S[0]===Fr?[]:S,f];c?c(t,3,R):t(...R),S=B}finally{Io=I}}}else d.run()};return a&&a(E),d=new kh(u),d.scheduler=r?()=>r(E,!1):E,f=M=>L0(M,!1,d),h=d.onStop=()=>{const M=Ma.get(d);if(M){if(c)c(M,4);else for(const B of M)B();Ma.delete(d)}},t?i?E(!0):S=d.run():r?r(E.bind(null,!0),!0):d.run(),p.pause=d.pause.bind(d),p.resume=d.resume.bind(d),p.stop=p,p}function $i(n,t=1/0,e){if(t<=0||!dn(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,Dn(n))$i(n.value,t,e);else if(Te(n))for(let i=0;i<n.length;i++)$i(n[i],t,e);else if(Xp(n)||$s(n))n.forEach(i=>{$i(i,t,e)});else if(Yp(n)){for(const i in n)$i(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&$i(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mr(n,t,e,i){try{return i?n(...i):n()}catch(o){Ga(o,t,e)}}function Di(n,t,e,i){if(be(n)){const o=Mr(n,t,e,i);return o&&Bh(o)&&o.catch(s=>{Ga(s,t,e)}),o}if(Te(n)){const o=[];for(let s=0;s<n.length;s++)o.push(Di(n[s],t,e,i));return o}}function Ga(n,t,e,i=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Ke;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const d=a.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](n,c,l)===!1)return}a=a.parent}if(s){xo(),Mr(s,null,10,[n,c,l]),wo();return}}U0(n,e,o,i,r)}function U0(n,t,e,i=!0,o=!1){if(o)throw n;console.error(n)}let ur=!1,Zc=!1;const Xn=[];let Pi=0;const gs=[];let ho=null,as=0;const af=Promise.resolve();let hu=null;function cf(n){const t=hu||af;return n?t.then(this?n.bind(this):n):t}function N0(n){let t=ur?Pi+1:0,e=Xn.length;for(;t<e;){const i=t+e>>>1,o=Xn[i],s=dr(o);s<n||s===n&&o.flags&2?t=i+1:e=i}return t}function fu(n){if(!(n.flags&1)){const t=dr(n),e=Xn[Xn.length-1];!e||!(n.flags&2)&&t>=dr(e)?Xn.push(n):Xn.splice(N0(t),0,n),n.flags|=1,lf()}}function lf(){!ur&&!Zc&&(Zc=!0,hu=af.then(df))}function F0(n){Te(n)?gs.push(...n):ho&&n.id===-1?ho.splice(as+1,0,n):n.flags&1||(gs.push(n),n.flags|=1),lf()}function Xu(n,t,e=ur?Pi+1:0){for(;e<Xn.length;e++){const i=Xn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Xn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function uf(n){if(gs.length){const t=[...new Set(gs)].sort((e,i)=>dr(e)-dr(i));if(gs.length=0,ho){ho.push(...t);return}for(ho=t,as=0;as<ho.length;as++){const e=ho[as];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ho=null,as=0}}const dr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function df(n){Zc=!1,ur=!0;try{for(Pi=0;Pi<Xn.length;Pi++){const t=Xn[Pi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Pi<Xn.length;Pi++){const t=Xn[Pi];t&&(t.flags&=-2)}Pi=0,Xn.length=0,uf(),ur=!1,hu=null,(Xn.length||gs.length)&&df()}}let ii=null,hf=null;function Sa(n){const t=ii;return ii=n,hf=n&&n.type.__scopeId||null,t}function Kn(n,t=ii,e){if(!t||n._n)return n;const i=(...o)=>{i._d&&ed(-1);const s=Sa(t);let r;try{r=n(...o)}finally{Sa(s),i._d&&ed(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function O0(n,t){if(ii===null)return n;const e=Xa(ii),i=n.dirs||(n.dirs=[]);for(let o=0;o<t.length;o++){let[s,r,a,c=Ke]=t[o];s&&(be(s)&&(s={mounted:s,updated:s}),s.deep&&$i(r),i.push({dir:s,instance:e,value:r,oldValue:void 0,arg:a,modifiers:c}))}return n}function So(n,t,e,i){const o=n.dirs,s=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];s&&(a.oldValue=s[r].value);let c=a.dir[i];c&&(xo(),Di(c,e,8,[n.el,a,n,t]),wo())}}const B0=Symbol("_vte"),z0=n=>n.__isTeleport;function pu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,pu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function An(n,t){return be(n)?En({name:n.name},t,{setup:n}):n}function ff(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Jc(n,t,e,i,o=!1){if(Te(n)){n.forEach((v,x)=>Jc(v,t&&(Te(t)?t[x]:t),e,i,o));return}if(Js(i)&&!o)return;const s=i.shapeFlag&4?Xa(i.component):i.el,r=o?null:s,{i:a,r:c}=n,l=t&&t.r,d=a.refs===Ke?a.refs={}:a.refs,u=a.setupState,h=ke(u),f=u===Ke?()=>!1:v=>ze(h,v);if(l!=null&&l!==c&&(Sn(l)?(d[l]=null,f(l)&&(u[l]=null)):Dn(l)&&(l.value=null)),be(c))Mr(c,a,12,[r,d]);else{const v=Sn(c),x=Dn(c);if(v||x){const m=()=>{if(n.f){const p=v?f(c)?u[c]:d[c]:c.value;o?Te(p)&&Ql(p,s):Te(p)?p.includes(s)||p.push(s):v?(d[c]=[s],f(c)&&(u[c]=d[c])):(c.value=[s],n.k&&(d[n.k]=c.value))}else v?(d[c]=r,f(c)&&(u[c]=r)):x&&(c.value=r,n.k&&(d[n.k]=r))};r?(m.id=-1,ei(m,e)):m()}}}const Js=n=>!!n.type.__asyncLoader,pf=n=>n.type.__isKeepAlive;function G0(n,t){mf(n,"a",t)}function H0(n,t){mf(n,"da",t)}function mf(n,t,e=In){const i=n.__wdc||(n.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(Ha(t,i,e),e){let o=e.parent;for(;o&&o.parent;)pf(o.parent.vnode)&&k0(i,t,e,o),o=o.parent}}function k0(n,t,e,i){const o=Ha(t,n,i,!0);mu(()=>{Ql(i[t],o)},e)}function Ha(n,t,e=In,i=!1){if(e){const o=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...r)=>{xo();const a=Sr(e),c=Di(t,e,n,r);return a(),wo(),c});return i?o.unshift(s):o.push(s),s}}const no=n=>(t,e=In)=>{(!Wa||n==="sp")&&Ha(n,(...i)=>t(...i),e)},V0=no("bm"),zn=no("m"),W0=no("bu"),X0=no("u"),q0=no("bum"),mu=no("um"),j0=no("sp"),Y0=no("rtg"),$0=no("rtc");function K0(n,t=In){Ha("ec",n,t)}const Z0="components";function qu(n,t){return Q0(Z0,n,!0,t)||n}const J0=Symbol.for("v-ndc");function Q0(n,t,e=!0,i=!1){const o=ii||In;if(o){const s=o.type;{const a=Hm(s,!1);if(a&&(a===t||a===hi(t)||a===Oa(hi(t))))return s}const r=ju(o[n]||s[n],t)||ju(o.appContext[n],t);return!r&&i?s:r}}function ju(n,t){return n&&(n[t]||n[hi(t)]||n[Oa(hi(t))])}const Qc=n=>n?Nf(n)?Xa(n):Qc(n.parent):null,Qs=En(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Qc(n.parent),$root:n=>Qc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>gu(n),$forceUpdate:n=>n.f||(n.f=()=>{fu(n.update)}),$nextTick:n=>n.n||(n.n=cf.bind(n.proxy)),$watch:n=>xm.bind(n)}),sc=(n,t)=>n!==Ke&&!n.__isScriptSetup&&ze(n,t),tm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:o,props:s,accessCache:r,type:a,appContext:c}=n;let l;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return o[t];case 4:return e[t];case 3:return s[t]}else{if(sc(i,t))return r[t]=1,i[t];if(o!==Ke&&ze(o,t))return r[t]=2,o[t];if((l=n.propsOptions[0])&&ze(l,t))return r[t]=3,s[t];if(e!==Ke&&ze(e,t))return r[t]=4,e[t];tl&&(r[t]=0)}}const d=Qs[t];let u,h;if(d)return t==="$attrs"&&Nn(n.attrs,"get",""),d(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Ke&&ze(e,t))return r[t]=4,e[t];if(h=c.config.globalProperties,ze(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:o,ctx:s}=n;return sc(o,t)?(o[t]=e,!0):i!==Ke&&ze(i,t)?(i[t]=e,!0):ze(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:o,propsOptions:s}},r){let a;return!!e[r]||n!==Ke&&ze(n,r)||sc(t,r)||(a=s[0])&&ze(a,r)||ze(i,r)||ze(Qs,r)||ze(o.config.globalProperties,r)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ze(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Yu(n){return Te(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let tl=!0;function em(n){const t=gu(n),e=n.proxy,i=n.ctx;tl=!1,t.beforeCreate&&$u(t.beforeCreate,n,"bc");const{data:o,computed:s,methods:r,watch:a,provide:c,inject:l,created:d,beforeMount:u,mounted:h,beforeUpdate:f,updated:v,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:E,unmounted:M,render:B,renderTracked:I,renderTriggered:R,errorCaptured:G,serverPrefetch:tt,expose:w,inheritAttrs:T,components:U,directives:$,filters:et}=t;if(l&&nm(l,i,null),r)for(const it in r){const W=r[it];be(W)&&(i[it]=W.bind(e))}if(o){const it=o.call(e,e);dn(it)&&(n.data=za(it))}if(tl=!0,s)for(const it in s){const W=s[it],mt=be(W)?W.bind(e,e):be(W.get)?W.get.bind(e,e):Ii,wt=!be(W)&&be(W.set)?W.set.bind(e):Ii,Mt=_i({get:mt,set:wt});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Ft=>Mt.value=Ft})}if(a)for(const it in a)gf(a[it],i,e,it);if(c){const it=be(c)?c.call(e):c;Reflect.ownKeys(it).forEach(W=>{ha(W,it[W])})}d&&$u(d,n,"c");function q(it,W){Te(W)?W.forEach(mt=>it(mt.bind(e))):W&&it(W.bind(e))}if(q(V0,u),q(zn,h),q(W0,f),q(X0,v),q(G0,x),q(H0,m),q(K0,G),q($0,I),q(Y0,R),q(q0,S),q(mu,M),q(j0,tt),Te(w))if(w.length){const it=n.exposed||(n.exposed={});w.forEach(W=>{Object.defineProperty(it,W,{get:()=>e[W],set:mt=>e[W]=mt})})}else n.exposed||(n.exposed={});B&&n.render===Ii&&(n.render=B),T!=null&&(n.inheritAttrs=T),U&&(n.components=U),$&&(n.directives=$),tt&&ff(n)}function nm(n,t,e=Ii){Te(n)&&(n=el(n));for(const i in n){const o=n[i];let s;dn(o)?"default"in o?s=Qi(o.from||i,o.default,!0):s=Qi(o.from||i):s=Qi(o),Dn(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:r=>s.value=r}):t[i]=s}}function $u(n,t,e){Di(Te(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function gf(n,t,e,i){let o=i.includes(".")?Cf(e,i):()=>e[i];if(Sn(n)){const s=t[n];be(s)&&Ve(o,s)}else if(be(n))Ve(o,n.bind(e));else if(dn(n))if(Te(n))n.forEach(s=>gf(s,t,e,i));else{const s=be(n.handler)?n.handler.bind(e):t[n.handler];be(s)&&Ve(o,s,n)}}function gu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:r}}=n.appContext,a=s.get(t);let c;return a?c=a:!o.length&&!e&&!i?c=t:(c={},o.length&&o.forEach(l=>ba(c,l,r,!0)),ba(c,t,r)),dn(t)&&s.set(t,c),c}function ba(n,t,e,i=!1){const{mixins:o,extends:s}=t;s&&ba(n,s,e,!0),o&&o.forEach(r=>ba(n,r,e,!0));for(const r in t)if(!(i&&r==="expose")){const a=im[r]||e&&e[r];n[r]=a?a(n[r],t[r]):t[r]}return n}const im={data:Ku,props:Zu,emits:Zu,methods:js,computed:js,beforeCreate:Hn,created:Hn,beforeMount:Hn,mounted:Hn,beforeUpdate:Hn,updated:Hn,beforeDestroy:Hn,beforeUnmount:Hn,destroyed:Hn,unmounted:Hn,activated:Hn,deactivated:Hn,errorCaptured:Hn,serverPrefetch:Hn,components:js,directives:js,watch:sm,provide:Ku,inject:om};function Ku(n,t){return t?n?function(){return En(be(n)?n.call(this,this):n,be(t)?t.call(this,this):t)}:t:n}function om(n,t){return js(el(n),el(t))}function el(n){if(Te(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Hn(n,t){return n?[...new Set([].concat(n,t))]:t}function js(n,t){return n?En(Object.create(null),n,t):t}function Zu(n,t){return n?Te(n)&&Te(t)?[...new Set([...n,...t])]:En(Object.create(null),Yu(n),Yu(t??{})):t}function sm(n,t){if(!n)return t;if(!t)return n;const e=En(Object.create(null),n);for(const i in t)e[i]=Hn(n[i],t[i]);return e}function vf(){return{app:null,config:{isNativeTag:Vp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rm=0;function am(n,t){return function(i,o=null){be(i)||(i=En({},i)),o!=null&&!dn(o)&&(o=null);const s=vf(),r=new WeakSet,a=[];let c=!1;const l=s.app={_uid:rm++,_component:i,_props:o,_container:null,_context:s,_instance:null,version:Vm,get config(){return s.config},set config(d){},use(d,...u){return r.has(d)||(d&&be(d.install)?(r.add(d),d.install(l,...u)):be(d)&&(r.add(d),d(l,...u))),l},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),l},component(d,u){return u?(s.components[d]=u,l):s.components[d]},directive(d,u){return u?(s.directives[d]=u,l):s.directives[d]},mount(d,u,h){if(!c){const f=l._ceVNode||Be(i,o);return f.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(f,d):n(f,d,h),c=!0,l._container=d,d.__vue_app__=l,Xa(f.component)}},onUnmount(d){a.push(d)},unmount(){c&&(Di(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(d,u){return s.provides[d]=u,l},runWithContext(d){const u=vs;vs=l;try{return d()}finally{vs=u}}};return l}}let vs=null;function ha(n,t){if(In){let e=In.provides;const i=In.parent&&In.parent.provides;i===e&&(e=In.provides=Object.create(i)),e[n]=t}}function Qi(n,t,e=!1){const i=In||ii;if(i||vs){const o=vs?vs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&n in o)return o[n];if(arguments.length>1)return e&&be(t)?t.call(i&&i.proxy):t}}const _f={},yf=()=>Object.create(_f),xf=n=>Object.getPrototypeOf(n)===_f;function cm(n,t,e,i=!1){const o={},s=yf();n.propsDefaults=Object.create(null),wf(n,t,o,s);for(const r in n.propsOptions[0])r in o||(o[r]=void 0);e?n.props=i?o:nf(o):n.type.props?n.props=o:n.props=s,n.attrs=s}function lm(n,t,e,i){const{props:o,attrs:s,vnode:{patchFlag:r}}=n,a=ke(o),[c]=n.propsOptions;let l=!1;if((i||r>0)&&!(r&16)){if(r&8){const d=n.vnode.dynamicProps;for(let u=0;u<d.length;u++){let h=d[u];if(ka(n.emitsOptions,h))continue;const f=t[h];if(c)if(ze(s,h))f!==s[h]&&(s[h]=f,l=!0);else{const v=hi(h);o[v]=nl(c,a,v,f,n,!1)}else f!==s[h]&&(s[h]=f,l=!0)}}}else{wf(n,t,o,s)&&(l=!0);let d;for(const u in a)(!t||!ze(t,u)&&((d=Vo(u))===u||!ze(t,d)))&&(c?e&&(e[u]!==void 0||e[d]!==void 0)&&(o[u]=nl(c,a,u,void 0,n,!0)):delete o[u]);if(s!==a)for(const u in s)(!t||!ze(t,u))&&(delete s[u],l=!0)}l&&Ji(n.attrs,"set","")}function wf(n,t,e,i){const[o,s]=n.propsOptions;let r=!1,a;if(t)for(let c in t){if(Ks(c))continue;const l=t[c];let d;o&&ze(o,d=hi(c))?!s||!s.includes(d)?e[d]=l:(a||(a={}))[d]=l:ka(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,r=!0)}if(s){const c=ke(e),l=a||Ke;for(let d=0;d<s.length;d++){const u=s[d];e[u]=nl(o,c,u,l[u],n,!ze(l,u))}}return r}function nl(n,t,e,i,o,s){const r=n[e];if(r!=null){const a=ze(r,"default");if(a&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&be(c)){const{propsDefaults:l}=o;if(e in l)i=l[e];else{const d=Sr(o);i=l[e]=c.call(null,t),d()}}else i=c;o.ce&&o.ce._setProp(e,i)}r[0]&&(s&&!a?i=!1:r[1]&&(i===""||i===Vo(e))&&(i=!0))}return i}const um=new WeakMap;function Mf(n,t,e=!1){const i=e?um:t.propsCache,o=i.get(n);if(o)return o;const s=n.props,r={},a=[];let c=!1;if(!be(n)){const d=u=>{c=!0;const[h,f]=Mf(u,t,!0);En(r,h),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!s&&!c)return dn(n)&&i.set(n,fs),fs;if(Te(s))for(let d=0;d<s.length;d++){const u=hi(s[d]);Ju(u)&&(r[u]=Ke)}else if(s)for(const d in s){const u=hi(d);if(Ju(u)){const h=s[d],f=r[u]=Te(h)||be(h)?{type:h}:En({},h),v=f.type;let x=!1,m=!0;if(Te(v))for(let p=0;p<v.length;++p){const S=v[p],E=be(S)&&S.name;if(E==="Boolean"){x=!0;break}else E==="String"&&(m=!1)}else x=be(v)&&v.name==="Boolean";f[0]=x,f[1]=m,(x||ze(f,"default"))&&a.push(u)}}const l=[r,a];return dn(n)&&i.set(n,l),l}function Ju(n){return n[0]!=="$"&&!Ks(n)}const Sf=n=>n[0]==="_"||n==="$stable",vu=n=>Te(n)?n.map(Ri):[Ri(n)],dm=(n,t,e)=>{if(t._n)return t;const i=Kn((...o)=>vu(t(...o)),e);return i._c=!1,i},bf=(n,t,e)=>{const i=n._ctx;for(const o in n){if(Sf(o))continue;const s=n[o];if(be(s))t[o]=dm(o,s,i);else if(s!=null){const r=vu(s);t[o]=()=>r}}},Ef=(n,t)=>{const e=vu(t);n.slots.default=()=>e},Tf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},hm=(n,t,e)=>{const i=n.slots=yf();if(n.vnode.shapeFlag&32){const o=t._;o?(Tf(i,t,e),e&&zh(i,"_",o,!0)):bf(t,i)}else t&&Ef(n,t)},fm=(n,t,e)=>{const{vnode:i,slots:o}=n;let s=!0,r=Ke;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:Tf(o,t,e):(s=!t.$stable,bf(t,o)),r=t}else t&&(Ef(n,t),r={default:1});if(s)for(const a in o)!Sf(a)&&r[a]==null&&delete o[a]},ei=Am;function pm(n){return mm(n)}function mm(n,t){const e=Gh();e.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:r,createText:a,createComment:c,setText:l,setElementText:d,parentNode:u,nextSibling:h,setScopeId:f=Ii,insertStaticContent:v}=n,x=(g,P,L,F=null,N=null,K=null,Z=void 0,b=null,y=!!P.dynamicChildren)=>{if(g===P)return;g&&!Bs(g,P)&&(F=O(g),Ft(g,N,K,!0),g=null),P.patchFlag===-2&&(y=!1,P.dynamicChildren=null);const{type:C,ref:Y,shapeFlag:V}=P;switch(C){case Va:m(g,P,L,F);break;case zo:p(g,P,L,F);break;case cc:g==null&&S(P,L,F,Z);break;case pn:U(g,P,L,F,N,K,Z,b,y);break;default:V&1?B(g,P,L,F,N,K,Z,b,y):V&6?$(g,P,L,F,N,K,Z,b,y):(V&64||V&128)&&C.process(g,P,L,F,N,K,Z,b,y,dt)}Y!=null&&N&&Jc(Y,g&&g.ref,K,P||g,!P)},m=(g,P,L,F)=>{if(g==null)i(P.el=a(P.children),L,F);else{const N=P.el=g.el;P.children!==g.children&&l(N,P.children)}},p=(g,P,L,F)=>{g==null?i(P.el=c(P.children||""),L,F):P.el=g.el},S=(g,P,L,F)=>{[g.el,g.anchor]=v(g.children,P,L,F,g.el,g.anchor)},E=({el:g,anchor:P},L,F)=>{let N;for(;g&&g!==P;)N=h(g),i(g,L,F),g=N;i(P,L,F)},M=({el:g,anchor:P})=>{let L;for(;g&&g!==P;)L=h(g),o(g),g=L;o(P)},B=(g,P,L,F,N,K,Z,b,y)=>{P.type==="svg"?Z="svg":P.type==="math"&&(Z="mathml"),g==null?I(P,L,F,N,K,Z,b,y):tt(g,P,N,K,Z,b,y)},I=(g,P,L,F,N,K,Z,b)=>{let y,C;const{props:Y,shapeFlag:V,transition:k,dirs:ft}=g;if(y=g.el=r(g.type,K,Y&&Y.is,Y),V&8?d(y,g.children):V&16&&G(g.children,y,null,F,N,rc(g,K),Z,b),ft&&So(g,null,F,"created"),R(y,g,g.scopeId,Z,F),Y){for(const vt in Y)vt!=="value"&&!Ks(vt)&&s(y,vt,null,Y[vt],K,F);"value"in Y&&s(y,"value",null,Y.value,K),(C=Y.onVnodeBeforeMount)&&Ai(C,F,g)}ft&&So(g,null,F,"beforeMount");const ct=gm(N,k);ct&&k.beforeEnter(y),i(y,P,L),((C=Y&&Y.onVnodeMounted)||ct||ft)&&ei(()=>{C&&Ai(C,F,g),ct&&k.enter(y),ft&&So(g,null,F,"mounted")},N)},R=(g,P,L,F,N)=>{if(L&&f(g,L),F)for(let K=0;K<F.length;K++)f(g,F[K]);if(N){let K=N.subTree;if(P===K||Lf(K.type)&&(K.ssContent===P||K.ssFallback===P)){const Z=N.vnode;R(g,Z,Z.scopeId,Z.slotScopeIds,N.parent)}}},G=(g,P,L,F,N,K,Z,b,y=0)=>{for(let C=y;C<g.length;C++){const Y=g[C]=b?fo(g[C]):Ri(g[C]);x(null,Y,P,L,F,N,K,Z,b)}},tt=(g,P,L,F,N,K,Z)=>{const b=P.el=g.el;let{patchFlag:y,dynamicChildren:C,dirs:Y}=P;y|=g.patchFlag&16;const V=g.props||Ke,k=P.props||Ke;let ft;if(L&&bo(L,!1),(ft=k.onVnodeBeforeUpdate)&&Ai(ft,L,P,g),Y&&So(P,g,L,"beforeUpdate"),L&&bo(L,!0),(V.innerHTML&&k.innerHTML==null||V.textContent&&k.textContent==null)&&d(b,""),C?w(g.dynamicChildren,C,b,L,F,rc(P,N),K):Z||W(g,P,b,null,L,F,rc(P,N),K,!1),y>0){if(y&16)T(b,V,k,L,N);else if(y&2&&V.class!==k.class&&s(b,"class",null,k.class,N),y&4&&s(b,"style",V.style,k.style,N),y&8){const ct=P.dynamicProps;for(let vt=0;vt<ct.length;vt++){const bt=ct[vt],ht=V[bt],_t=k[bt];(_t!==ht||bt==="value")&&s(b,bt,ht,_t,N,L)}}y&1&&g.children!==P.children&&d(b,P.children)}else!Z&&C==null&&T(b,V,k,L,N);((ft=k.onVnodeUpdated)||Y)&&ei(()=>{ft&&Ai(ft,L,P,g),Y&&So(P,g,L,"updated")},F)},w=(g,P,L,F,N,K,Z)=>{for(let b=0;b<P.length;b++){const y=g[b],C=P[b],Y=y.el&&(y.type===pn||!Bs(y,C)||y.shapeFlag&70)?u(y.el):L;x(y,C,Y,null,F,N,K,Z,!0)}},T=(g,P,L,F,N)=>{if(P!==L){if(P!==Ke)for(const K in P)!Ks(K)&&!(K in L)&&s(g,K,P[K],null,N,F);for(const K in L){if(Ks(K))continue;const Z=L[K],b=P[K];Z!==b&&K!=="value"&&s(g,K,b,Z,N,F)}"value"in L&&s(g,"value",P.value,L.value,N)}},U=(g,P,L,F,N,K,Z,b,y)=>{const C=P.el=g?g.el:a(""),Y=P.anchor=g?g.anchor:a("");let{patchFlag:V,dynamicChildren:k,slotScopeIds:ft}=P;ft&&(b=b?b.concat(ft):ft),g==null?(i(C,L,F),i(Y,L,F),G(P.children||[],L,Y,N,K,Z,b,y)):V>0&&V&64&&k&&g.dynamicChildren?(w(g.dynamicChildren,k,L,N,K,Z,b),(P.key!=null||N&&P===N.subTree)&&Af(g,P,!0)):W(g,P,L,Y,N,K,Z,b,y)},$=(g,P,L,F,N,K,Z,b,y)=>{P.slotScopeIds=b,g==null?P.shapeFlag&512?N.ctx.activate(P,L,F,Z,y):et(P,L,F,N,K,Z,y):lt(g,P,y)},et=(g,P,L,F,N,K,Z)=>{const b=g.component=Fm(g,F,N);if(pf(g)&&(b.ctx.renderer=dt),Om(b,!1,Z),b.asyncDep){if(N&&N.registerDep(b,q,Z),!g.el){const y=b.subTree=Be(zo);p(null,y,P,L)}}else q(b,g,P,L,N,K,Z)},lt=(g,P,L)=>{const F=P.component=g.component;if(Em(g,P,L))if(F.asyncDep&&!F.asyncResolved){it(F,P,L);return}else F.next=P,F.update();else P.el=g.el,F.vnode=P},q=(g,P,L,F,N,K,Z)=>{const b=()=>{if(g.isMounted){let{next:V,bu:k,u:ft,parent:ct,vnode:vt}=g;{const Bt=Pf(g);if(Bt){V&&(V.el=vt.el,it(g,V,Z)),Bt.asyncDep.then(()=>{g.isUnmounted||b()});return}}let bt=V,ht;bo(g,!1),V?(V.el=vt.el,it(g,V,Z)):V=vt,k&&ec(k),(ht=V.props&&V.props.onVnodeBeforeUpdate)&&Ai(ht,ct,V,vt),bo(g,!0);const _t=ac(g),Dt=g.subTree;g.subTree=_t,x(Dt,_t,u(Dt.el),O(Dt),g,N,K),V.el=_t.el,bt===null&&Tm(g,_t.el),ft&&ei(ft,N),(ht=V.props&&V.props.onVnodeUpdated)&&ei(()=>Ai(ht,ct,V,vt),N)}else{let V;const{el:k,props:ft}=P,{bm:ct,m:vt,parent:bt,root:ht,type:_t}=g,Dt=Js(P);if(bo(g,!1),ct&&ec(ct),!Dt&&(V=ft&&ft.onVnodeBeforeMount)&&Ai(V,bt,P),bo(g,!0),k&&ot){const Bt=()=>{g.subTree=ac(g),ot(k,g.subTree,g,N,null)};Dt&&_t.__asyncHydrate?_t.__asyncHydrate(k,g,Bt):Bt()}else{ht.ce&&ht.ce._injectChildStyle(_t);const Bt=g.subTree=ac(g);x(null,Bt,L,F,g,N,K),P.el=Bt.el}if(vt&&ei(vt,N),!Dt&&(V=ft&&ft.onVnodeMounted)){const Bt=P;ei(()=>Ai(V,bt,Bt),N)}(P.shapeFlag&256||bt&&Js(bt.vnode)&&bt.vnode.shapeFlag&256)&&g.a&&ei(g.a,N),g.isMounted=!0,P=L=F=null}};g.scope.on();const y=g.effect=new kh(b);g.scope.off();const C=g.update=y.run.bind(y),Y=g.job=y.runIfDirty.bind(y);Y.i=g,Y.id=g.uid,y.scheduler=()=>fu(Y),bo(g,!0),C()},it=(g,P,L)=>{P.component=g;const F=g.vnode.props;g.vnode=P,g.next=null,lm(g,P.props,F,L),fm(g,P.children,L),xo(),Xu(g),wo()},W=(g,P,L,F,N,K,Z,b,y=!1)=>{const C=g&&g.children,Y=g?g.shapeFlag:0,V=P.children,{patchFlag:k,shapeFlag:ft}=P;if(k>0){if(k&128){wt(C,V,L,F,N,K,Z,b,y);return}else if(k&256){mt(C,V,L,F,N,K,Z,b,y);return}}ft&8?(Y&16&&Tt(C,N,K),V!==C&&d(L,V)):Y&16?ft&16?wt(C,V,L,F,N,K,Z,b,y):Tt(C,N,K,!0):(Y&8&&d(L,""),ft&16&&G(V,L,F,N,K,Z,b,y))},mt=(g,P,L,F,N,K,Z,b,y)=>{g=g||fs,P=P||fs;const C=g.length,Y=P.length,V=Math.min(C,Y);let k;for(k=0;k<V;k++){const ft=P[k]=y?fo(P[k]):Ri(P[k]);x(g[k],ft,L,null,N,K,Z,b,y)}C>Y?Tt(g,N,K,!0,!1,V):G(P,L,F,N,K,Z,b,y,V)},wt=(g,P,L,F,N,K,Z,b,y)=>{let C=0;const Y=P.length;let V=g.length-1,k=Y-1;for(;C<=V&&C<=k;){const ft=g[C],ct=P[C]=y?fo(P[C]):Ri(P[C]);if(Bs(ft,ct))x(ft,ct,L,null,N,K,Z,b,y);else break;C++}for(;C<=V&&C<=k;){const ft=g[V],ct=P[k]=y?fo(P[k]):Ri(P[k]);if(Bs(ft,ct))x(ft,ct,L,null,N,K,Z,b,y);else break;V--,k--}if(C>V){if(C<=k){const ft=k+1,ct=ft<Y?P[ft].el:F;for(;C<=k;)x(null,P[C]=y?fo(P[C]):Ri(P[C]),L,ct,N,K,Z,b,y),C++}}else if(C>k)for(;C<=V;)Ft(g[C],N,K,!0),C++;else{const ft=C,ct=C,vt=new Map;for(C=ct;C<=k;C++){const Gt=P[C]=y?fo(P[C]):Ri(P[C]);Gt.key!=null&&vt.set(Gt.key,C)}let bt,ht=0;const _t=k-ct+1;let Dt=!1,Bt=0;const Rt=new Array(_t);for(C=0;C<_t;C++)Rt[C]=0;for(C=ft;C<=V;C++){const Gt=g[C];if(ht>=_t){Ft(Gt,N,K,!0);continue}let Zt;if(Gt.key!=null)Zt=vt.get(Gt.key);else for(bt=ct;bt<=k;bt++)if(Rt[bt-ct]===0&&Bs(Gt,P[bt])){Zt=bt;break}Zt===void 0?Ft(Gt,N,K,!0):(Rt[Zt-ct]=C+1,Zt>=Bt?Bt=Zt:Dt=!0,x(Gt,P[Zt],L,null,N,K,Z,b,y),ht++)}const $t=Dt?vm(Rt):fs;for(bt=$t.length-1,C=_t-1;C>=0;C--){const Gt=ct+C,Zt=P[Gt],H=Gt+1<Y?P[Gt+1].el:F;Rt[C]===0?x(null,Zt,L,H,N,K,Z,b,y):Dt&&(bt<0||C!==$t[bt]?Mt(Zt,L,H,2):bt--)}}},Mt=(g,P,L,F,N=null)=>{const{el:K,type:Z,transition:b,children:y,shapeFlag:C}=g;if(C&6){Mt(g.component.subTree,P,L,F);return}if(C&128){g.suspense.move(P,L,F);return}if(C&64){Z.move(g,P,L,dt);return}if(Z===pn){i(K,P,L);for(let V=0;V<y.length;V++)Mt(y[V],P,L,F);i(g.anchor,P,L);return}if(Z===cc){E(g,P,L);return}if(F!==2&&C&1&&b)if(F===0)b.beforeEnter(K),i(K,P,L),ei(()=>b.enter(K),N);else{const{leave:V,delayLeave:k,afterLeave:ft}=b,ct=()=>i(K,P,L),vt=()=>{V(K,()=>{ct(),ft&&ft()})};k?k(K,ct,vt):vt()}else i(K,P,L)},Ft=(g,P,L,F=!1,N=!1)=>{const{type:K,props:Z,ref:b,children:y,dynamicChildren:C,shapeFlag:Y,patchFlag:V,dirs:k,cacheIndex:ft}=g;if(V===-2&&(N=!1),b!=null&&Jc(b,null,L,g,!0),ft!=null&&(P.renderCache[ft]=void 0),Y&256){P.ctx.deactivate(g);return}const ct=Y&1&&k,vt=!Js(g);let bt;if(vt&&(bt=Z&&Z.onVnodeBeforeUnmount)&&Ai(bt,P,g),Y&6)pt(g.component,L,F);else{if(Y&128){g.suspense.unmount(L,F);return}ct&&So(g,null,P,"beforeUnmount"),Y&64?g.type.remove(g,P,L,dt,F):C&&!C.hasOnce&&(K!==pn||V>0&&V&64)?Tt(C,P,L,!1,!0):(K===pn&&V&384||!N&&Y&16)&&Tt(y,P,L),F&&Ht(g)}(vt&&(bt=Z&&Z.onVnodeUnmounted)||ct)&&ei(()=>{bt&&Ai(bt,P,g),ct&&So(g,null,P,"unmounted")},L)},Ht=g=>{const{type:P,el:L,anchor:F,transition:N}=g;if(P===pn){rt(L,F);return}if(P===cc){M(g);return}const K=()=>{o(L),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:Z,delayLeave:b}=N,y=()=>Z(L,K);b?b(g.el,K,y):y()}else K()},rt=(g,P)=>{let L;for(;g!==P;)L=h(g),o(g),g=L;o(P)},pt=(g,P,L)=>{const{bum:F,scope:N,job:K,subTree:Z,um:b,m:y,a:C}=g;Qu(y),Qu(C),F&&ec(F),N.stop(),K&&(K.flags|=8,Ft(Z,g,P,L)),b&&ei(b,P),ei(()=>{g.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Tt=(g,P,L,F=!1,N=!1,K=0)=>{for(let Z=K;Z<g.length;Z++)Ft(g[Z],P,L,F,N)},O=g=>{if(g.shapeFlag&6)return O(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const P=h(g.anchor||g.el),L=P&&P[B0];return L?h(L):P};let ut=!1;const st=(g,P,L)=>{g==null?P._vnode&&Ft(P._vnode,null,null,!0):x(P._vnode||null,g,P,null,null,null,L),P._vnode=g,ut||(ut=!0,Xu(),uf(),ut=!1)},dt={p:x,um:Ft,m:Mt,r:Ht,mt:et,mc:G,pc:W,pbc:w,n:O,o:n};let yt,ot;return{render:st,hydrate:yt,createApp:am(st,yt)}}function rc({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function bo({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function gm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Af(n,t,e=!1){const i=n.children,o=t.children;if(Te(i)&&Te(o))for(let s=0;s<i.length;s++){const r=i[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=fo(o[s]),a.el=r.el),!e&&a.patchFlag!==-2&&Af(r,a)),a.type===Va&&(a.el=r.el)}}function vm(n){const t=n.slice(),e=[0];let i,o,s,r,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(o=e[e.length-1],n[o]<l){t[i]=o,e.push(i);continue}for(s=0,r=e.length-1;s<r;)a=s+r>>1,n[e[a]]<l?s=a+1:r=a;l<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,r=e[s-1];s-- >0;)e[s]=r,r=t[r];return e}function Pf(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Pf(t)}function Qu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const _m=Symbol.for("v-scx"),ym=()=>Qi(_m);function Ve(n,t,e){return Rf(n,t,e)}function Rf(n,t,e=Ke){const{immediate:i,deep:o,flush:s,once:r}=e,a=En({},e);let c;if(Wa)if(s==="sync"){const h=ym();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const h=()=>{};return h.stop=Ii,h.resume=Ii,h.pause=Ii,h}const l=In;a.call=(h,f,v)=>Di(h,l,f,v);let d=!1;s==="post"?a.scheduler=h=>{ei(h,l&&l.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(h,f)=>{f?h():fu(h)}),a.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,l&&(h.id=l.uid,h.i=l))};const u=D0(n,t,a);return c&&c.push(u),u}function xm(n,t,e){const i=this.proxy,o=Sn(n)?n.includes(".")?Cf(i,n):()=>i[n]:n.bind(i,i);let s;be(t)?s=t:(s=t.handler,e=t);const r=Sr(this),a=Rf(o,s.bind(i),e);return r(),a}function Cf(n,t){const e=t.split(".");return()=>{let i=n;for(let o=0;o<e.length&&i;o++)i=i[e[o]];return i}}const wm=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${hi(t)}Modifiers`]||n[`${Vo(t)}Modifiers`];function Mm(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Ke;let o=e;const s=t.startsWith("update:"),r=s&&wm(i,t.slice(7));r&&(r.trim&&(o=e.map(d=>Sn(d)?d.trim():d)),r.number&&(o=e.map(Zp)));let a,c=i[a=tc(t)]||i[a=tc(hi(t))];!c&&s&&(c=i[a=tc(Vo(t))]),c&&Di(c,n,6,o);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Di(l,n,6,o)}}function If(n,t,e=!1){const i=t.emitsCache,o=i.get(n);if(o!==void 0)return o;const s=n.emits;let r={},a=!1;if(!be(n)){const c=l=>{const d=If(l,t,!0);d&&(a=!0,En(r,d))};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(dn(n)&&i.set(n,null),null):(Te(s)?s.forEach(c=>r[c]=null):En(r,s),dn(n)&&i.set(n,r),r)}function ka(n,t){return!n||!Ua(t)?!1:(t=t.slice(2).replace(/Once$/,""),ze(n,t[0].toLowerCase()+t.slice(1))||ze(n,Vo(t))||ze(n,t))}function ac(n){const{type:t,vnode:e,proxy:i,withProxy:o,propsOptions:[s],slots:r,attrs:a,emit:c,render:l,renderCache:d,props:u,data:h,setupState:f,ctx:v,inheritAttrs:x}=n,m=Sa(n);let p,S;try{if(e.shapeFlag&4){const M=o||i,B=M;p=Ri(l.call(B,M,d,u,f,h,v)),S=a}else{const M=t;p=Ri(M.length>1?M(u,{attrs:a,slots:r,emit:c}):M(u,null)),S=t.props?a:Sm(a)}}catch(M){tr.length=0,Ga(M,n,1),p=Be(zo)}let E=p;if(S&&x!==!1){const M=Object.keys(S),{shapeFlag:B}=E;M.length&&B&7&&(s&&M.some(Jl)&&(S=bm(S,s)),E=Ms(E,S,!1,!0))}return e.dirs&&(E=Ms(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(e.dirs):e.dirs),e.transition&&pu(E,e.transition),p=E,Sa(m),p}const Sm=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ua(e))&&((t||(t={}))[e]=n[e]);return t},bm=(n,t)=>{const e={};for(const i in n)(!Jl(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Em(n,t,e){const{props:i,children:o,component:s}=n,{props:r,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return i?td(i,r,l):!!r;if(c&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const h=d[u];if(r[h]!==i[h]&&!ka(l,h))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?td(i,r,l):!0:!!r;return!1}function td(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let o=0;o<i.length;o++){const s=i[o];if(t[s]!==n[s]&&!ka(e,s))return!0}return!1}function Tm({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Lf=n=>n.__isSuspense;function Am(n,t){t&&t.pendingBranch?Te(n)?t.effects.push(...n):t.effects.push(n):F0(n)}const pn=Symbol.for("v-fgt"),Va=Symbol.for("v-txt"),zo=Symbol.for("v-cmt"),cc=Symbol.for("v-stc"),tr=[];let oi=null;function Gn(n=!1){tr.push(oi=n?null:[])}function Pm(){tr.pop(),oi=tr[tr.length-1]||null}let hr=1;function ed(n){hr+=n,n<0&&oi&&(oi.hasOnce=!0)}function Df(n){return n.dynamicChildren=hr>0?oi||fs:null,Pm(),hr>0&&oi&&oi.push(n),n}function Yn(n,t,e,i,o,s){return Df(Ut(n,t,e,i,o,s,!0))}function Rm(n,t,e,i,o){return Df(Be(n,t,e,i,o,!0))}function Ea(n){return n?n.__v_isVNode===!0:!1}function Bs(n,t){return n.type===t.type&&n.key===t.key}const Uf=({key:n})=>n??null,fa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Sn(n)||Dn(n)||be(n)?{i:ii,r:n,k:t,f:!!e}:n:null);function Ut(n,t=null,e=null,i=0,o=null,s=n===pn?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Uf(t),ref:t&&fa(t),scopeId:hf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ii};return a?(_u(c,e),s&128&&n.normalize(c)):e&&(c.shapeFlag|=Sn(e)?8:16),hr>0&&!r&&oi&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&oi.push(c),c}const Be=Cm;function Cm(n,t=null,e=null,i=0,o=null,s=!1){if((!n||n===J0)&&(n=zo),Ea(n)){const a=Ms(n,t,!0);return e&&_u(a,e),hr>0&&!s&&oi&&(a.shapeFlag&6?oi[oi.indexOf(n)]=a:oi.push(a)),a.patchFlag=-2,a}if(km(n)&&(n=n.__vccOpts),t){t=Im(t);let{class:a,style:c}=t;a&&!Sn(a)&&(t.class=Bn(a)),dn(c)&&(uu(c)&&!Te(c)&&(c=En({},c)),t.style=eu(c))}const r=Sn(n)?1:Lf(n)?128:z0(n)?64:dn(n)?4:be(n)?2:0;return Ut(n,t,e,i,o,r,s,!0)}function Im(n){return n?uu(n)||xf(n)?En({},n):n:null}function Ms(n,t,e=!1,i=!1){const{props:o,ref:s,patchFlag:r,children:a,transition:c}=n,l=t?Dm(o||{},t):o,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Uf(l),ref:t&&t.ref?e&&s?Te(s)?s.concat(fa(t)):[s,fa(t)]:fa(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==pn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ms(n.ssContent),ssFallback:n.ssFallback&&Ms(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&pu(d,c.clone(d)),d}function Zn(n=" ",t=0){return Be(Va,null,n,t)}function Lm(n="",t=!1){return t?(Gn(),Rm(zo,null,n)):Be(zo,null,n)}function Ri(n){return n==null||typeof n=="boolean"?Be(zo):Te(n)?Be(pn,null,n.slice()):Ea(n)?fo(n):Be(Va,null,String(n))}function fo(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ms(n)}function _u(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Te(t))e=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),_u(n,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!xf(t)?t._ctx=ii:o===3&&ii&&(ii.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else be(t)?(t={default:t,_ctx:ii},e=32):(t=String(t),i&64?(e=16,t=[Zn(t)]):e=8);n.children=t,n.shapeFlag|=e}function Dm(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=Bn([t.class,i.class]));else if(o==="style")t.style=eu([t.style,i.style]);else if(Ua(o)){const s=t[o],r=i[o];r&&s!==r&&!(Te(s)&&s.includes(r))&&(t[o]=s?[].concat(s,r):r)}else o!==""&&(t[o]=i[o])}return t}function Ai(n,t,e,i=null){Di(n,t,7,[e,i])}const Um=vf();let Nm=0;function Fm(n,t,e){const i=n.type,o=(t?t.appContext:n.appContext)||Um,s={uid:Nm++,vnode:n,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new o0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mf(i,o),emitsOptions:If(i,o),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:i.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Mm.bind(null,s),n.ce&&n.ce(s),s}let In=null,Ta,il;{const n=Gh(),t=(e,i)=>{let o;return(o=n[e])||(o=n[e]=[]),o.push(i),s=>{o.length>1?o.forEach(r=>r(s)):o[0](s)}};Ta=t("__VUE_INSTANCE_SETTERS__",e=>In=e),il=t("__VUE_SSR_SETTERS__",e=>Wa=e)}const Sr=n=>{const t=In;return Ta(n),n.scope.on(),()=>{n.scope.off(),Ta(t)}},nd=()=>{In&&In.scope.off(),Ta(null)};function Nf(n){return n.vnode.shapeFlag&4}let Wa=!1;function Om(n,t=!1,e=!1){t&&il(t);const{props:i,children:o}=n.vnode,s=Nf(n);cm(n,i,s,t),hm(n,o,e);const r=s?Bm(n,t):void 0;return t&&il(!1),r}function Bm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,tm);const{setup:i}=e;if(i){const o=n.setupContext=i.length>1?Gm(n):null,s=Sr(n);xo();const r=Mr(i,n,0,[n.props,o]);if(wo(),s(),Bh(r)){if(Js(n)||ff(n),r.then(nd,nd),t)return r.then(a=>{id(n,a,t)}).catch(a=>{Ga(a,n,0)});n.asyncDep=r}else id(n,r,t)}else Ff(n,t)}function id(n,t,e){be(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:dn(t)&&(n.setupState=rf(t)),Ff(n,e)}let od;function Ff(n,t,e){const i=n.type;if(!n.render){if(!t&&od&&!i.render){const o=i.template||gu(n).template;if(o){const{isCustomElement:s,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=En(En({isCustomElement:s,delimiters:a},r),c);i.render=od(o,l)}}n.render=i.render||Ii}{const o=Sr(n);xo();try{em(n)}finally{wo(),o()}}}const zm={get(n,t){return Nn(n,"get",""),n[t]}};function Gm(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,zm),slots:n.slots,emit:n.emit,expose:t}}function Xa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(rf(A0(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Qs)return Qs[e](n)},has(t,e){return e in t||e in Qs}})):n.proxy}function Hm(n,t=!0){return be(n)?n.displayName||n.name:n.name||t&&n.__name}function km(n){return be(n)&&"__vccOpts"in n}const _i=(n,t)=>I0(n,t,Wa);function Of(n,t,e){const i=arguments.length;return i===2?dn(t)&&!Te(t)?Ea(t)?Be(n,null,[t]):Be(n,t):Be(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Ea(e)&&(e=[e]),Be(n,t,e))}const Vm="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ol;const sd=typeof window<"u"&&window.trustedTypes;if(sd)try{ol=sd.createPolicy("vue",{createHTML:n=>n})}catch{}const Bf=ol?n=>ol.createHTML(n):n=>n,Wm="http://www.w3.org/2000/svg",Xm="http://www.w3.org/1998/Math/MathML",Yi=typeof document<"u"?document:null,rd=Yi&&Yi.createElement("template"),qm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const o=t==="svg"?Yi.createElementNS(Wm,n):t==="mathml"?Yi.createElementNS(Xm,n):e?Yi.createElement(n,{is:e}):Yi.createElement(n);return n==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:n=>Yi.createTextNode(n),createComment:n=>Yi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,o,s){const r=e?e.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===s||!(o=o.nextSibling)););else{rd.innerHTML=Bf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=rd.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},jm=Symbol("_vtc");function Ym(n,t,e){const i=n[jm];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Aa=Symbol("_vod"),zf=Symbol("_vsh"),$m={beforeMount(n,{value:t},{transition:e}){n[Aa]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):zs(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),zs(n,!0),i.enter(n)):i.leave(n,()=>{zs(n,!1)}):zs(n,t))},beforeUnmount(n,{value:t}){zs(n,t)}};function zs(n,t){n.style.display=t?n[Aa]:"none",n[zf]=!t}const Km=Symbol(""),Zm=/(^|;)\s*display\s*:/;function Jm(n,t,e){const i=n.style,o=Sn(e);let s=!1;if(e&&!o){if(t)if(Sn(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&pa(i,a,"")}else for(const r in t)e[r]==null&&pa(i,r,"");for(const r in e)r==="display"&&(s=!0),pa(i,r,e[r])}else if(o){if(t!==e){const r=i[Km];r&&(e+=";"+r),i.cssText=e,s=Zm.test(e)}}else t&&n.removeAttribute("style");Aa in n&&(n[Aa]=s?i.display:"",n[zf]&&(i.display="none"))}const ad=/\s*!important$/;function pa(n,t,e){if(Te(e))e.forEach(i=>pa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Qm(n,t);ad.test(e)?n.setProperty(Vo(i),e.replace(ad,""),"important"):n[i]=e}}const cd=["Webkit","Moz","ms"],lc={};function Qm(n,t){const e=lc[t];if(e)return e;let i=hi(t);if(i!=="filter"&&i in n)return lc[t]=i;i=Oa(i);for(let o=0;o<cd.length;o++){const s=cd[o]+i;if(s in n)return lc[t]=s}return t}const ld="http://www.w3.org/1999/xlink";function ud(n,t,e,i,o,s=i0(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ld,t.slice(6,t.length)):n.setAttributeNS(ld,t,e):e==null||s&&!Hh(e)?n.removeAttribute(t):n.setAttribute(t,s?"":Is(e)?String(e):e)}function dd(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Bf(e):e);return}const o=n.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const r=o==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(r!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let s=!1;if(e===""||e==null){const r=typeof n[t];r==="boolean"?e=Hh(e):e==null&&r==="string"?(e="",s=!0):r==="number"&&(e=0,s=!0)}try{n[t]=e}catch{}s&&n.removeAttribute(t)}function tg(n,t,e,i){n.addEventListener(t,e,i)}function eg(n,t,e,i){n.removeEventListener(t,e,i)}const hd=Symbol("_vei");function ng(n,t,e,i,o=null){const s=n[hd]||(n[hd]={}),r=s[t];if(i&&r)r.value=i;else{const[a,c]=ig(t);if(i){const l=s[t]=rg(i,o);tg(n,a,l,c)}else r&&(eg(n,a,r,c),s[t]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function ig(n){let t;if(fd.test(n)){t={};let i;for(;i=n.match(fd);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Vo(n.slice(2)),t]}let uc=0;const og=Promise.resolve(),sg=()=>uc||(og.then(()=>uc=0),uc=Date.now());function rg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Di(ag(i,e.value),t,5,[i])};return e.value=n,e.attached=sg(),e}function ag(n,t){if(Te(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>o=>!o._stopped&&i&&i(o))}else return t}const pd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,cg=(n,t,e,i,o,s)=>{const r=o==="svg";t==="class"?Ym(n,i,r):t==="style"?Jm(n,e,i):Ua(t)?Jl(t)||ng(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lg(n,t,i,r))?(dd(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ud(n,t,i,r,s,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Sn(i))?dd(n,hi(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),ud(n,t,i,r))};function lg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&pd(t)&&be(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return pd(t)&&Sn(e)?!1:t in n}const ug=En({patchProp:cg},qm);let md;function dg(){return md||(md=pm(ug))}const hg=(...n)=>{const t=dg().createApp(...n),{mount:e}=t;return t.mount=i=>{const o=pg(i);if(!o)return;const s=t._component;!be(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=e(o,!1,fg(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function fg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function pg(n){return Sn(n)?document.querySelector(n):n}const mg={id:"app"},gg=An({__name:"App",setup(n){const t=Yt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return zn(()=>{window.addEventListener("mousemove",e)}),mu(()=>{window.removeEventListener("mousemove",e)}),(i,o)=>{const s=qu("router-link"),r=qu("router-view");return Gn(),Yn("div",mg,[O0(Ut("nav",null,[Be(s,{to:"/3d-bear-arts/leather"},{default:Kn(()=>o[0]||(o[0]=[Zn("LV")])),_:1}),Be(s,{to:"/3d-bear-arts/pop-art"},{default:Kn(()=>o[1]||(o[1]=[Zn("Pop MouseMove")])),_:1}),Be(s,{to:"/3d-bear-arts/pop-art-bear-3"},{default:Kn(()=>o[2]||(o[2]=[Zn("Pop Art")])),_:1}),Be(s,{to:"/3d-bear-arts/machine"},{default:Kn(()=>o[3]||(o[3]=[Zn("Machine")])),_:1}),Be(s,{to:"/3d-bear-arts/water"},{default:Kn(()=>o[4]||(o[4]=[Zn("Water")])),_:1}),Be(s,{to:"/3d-bear-arts/ghost-bear"},{default:Kn(()=>o[5]||(o[5]=[Zn("Pumpkin")])),_:1}),Be(s,{to:"/3d-bear-arts/white-ghost-bear"},{default:Kn(()=>o[6]||(o[6]=[Zn("Ghost")])),_:1}),Be(s,{to:"/3d-bear-arts/coffee"},{default:Kn(()=>o[7]||(o[7]=[Zn("Coffee")])),_:1}),Be(s,{to:"/3d-bear-arts/bears"},{default:Kn(()=>o[8]||(o[8]=[Zn("Bears")])),_:1}),Be(s,{to:"/3d-bear-arts/money"},{default:Kn(()=>o[9]||(o[9]=[Zn("Money")])),_:1}),Be(s,{to:"/3d-bear-arts/santa"},{default:Kn(()=>o[10]||(o[10]=[Zn("Santa")])),_:1}),Be(s,{to:"/3d-bear-arts/snowman"},{default:Kn(()=>o[11]||(o[11]=[Zn("Snowman")])),_:1}),Be(s,{to:"/3d-bear-arts/"},{default:Kn(()=>o[12]||(o[12]=[Zn("Duck")])),_:1})],512),[[$m,t.value]]),Be(r)])}}}),$n=(n,t)=>{const e=n.__vccOpts||n;for(const[i,o]of t)e[i]=o;return e},vg=$n(gg,[["__scopeId","data-v-8abb0aff"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof document<"u";function Gf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function _g(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Gf(n.default)}const Xe=Object.assign;function dc(n,t){const e={};for(const i in t){const o=t[i];e[i]=bi(o)?o.map(n):n(o)}return e}const er=()=>{},bi=Array.isArray,Hf=/#/g,yg=/&/g,xg=/\//g,wg=/=/g,Mg=/\?/g,kf=/\+/g,Sg=/%5B/g,bg=/%5D/g,Vf=/%5E/g,Eg=/%60/g,Wf=/%7B/g,Tg=/%7C/g,Xf=/%7D/g,Ag=/%20/g;function yu(n){return encodeURI(""+n).replace(Tg,"|").replace(Sg,"[").replace(bg,"]")}function Pg(n){return yu(n).replace(Wf,"{").replace(Xf,"}").replace(Vf,"^")}function sl(n){return yu(n).replace(kf,"%2B").replace(Ag,"+").replace(Hf,"%23").replace(yg,"%26").replace(Eg,"`").replace(Wf,"{").replace(Xf,"}").replace(Vf,"^")}function Rg(n){return sl(n).replace(wg,"%3D")}function Cg(n){return yu(n).replace(Hf,"%23").replace(Mg,"%3F")}function Ig(n){return n==null?"":Cg(n).replace(xg,"%2F")}function fr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Lg=/\/$/,Dg=n=>n.replace(Lg,"");function hc(n,t,e="/"){let i,o={},s="",r="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),o=n(s)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=Og(i??t,e),{fullPath:i+(s&&"?")+s+r,path:i,query:o,hash:fr(r)}}function Ug(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function gd(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Ng(n,t,e){const i=t.matched.length-1,o=e.matched.length-1;return i>-1&&i===o&&Ss(t.matched[i],e.matched[o])&&qf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Ss(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function qf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Fg(n[e],t[e]))return!1;return!0}function Fg(n,t){return bi(n)?vd(n,t):bi(t)?vd(t,n):n===t}function vd(n,t){return bi(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Og(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),o=i[i.length-1];(o===".."||o===".")&&i.push("");let s=e.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(r).join("/")}const oo={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var pr;(function(n){n.pop="pop",n.push="push"})(pr||(pr={}));var nr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(nr||(nr={}));function Bg(n){if(!n)if(cs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Dg(n)}const zg=/^[^#]+#/;function Gg(n,t){return n.replace(zg,"#")+t}function Hg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const qa=()=>({left:window.scrollX,top:window.scrollY});function kg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),o=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!o)return;t=Hg(o,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function _d(n,t){return(history.state?history.state.position-t:-1)+n}const rl=new Map;function Vg(n,t){rl.set(n,t)}function Wg(n){const t=rl.get(n);return rl.delete(n),t}let Xg=()=>location.protocol+"//"+location.host;function jf(n,t){const{pathname:e,search:i,hash:o}=t,s=n.indexOf("#");if(s>-1){let a=o.includes(n.slice(s))?n.slice(s).length:1,c=o.slice(a);return c[0]!=="/"&&(c="/"+c),gd(c,"")}return gd(e,n)+i+o}function qg(n,t,e,i){let o=[],s=[],r=null;const a=({state:h})=>{const f=jf(n,location),v=e.value,x=t.value;let m=0;if(h){if(e.value=f,t.value=h,r&&r===v){r=null;return}m=x?h.position-x.position:0}else i(f);o.forEach(p=>{p(e.value,v,{delta:m,type:pr.pop,direction:m?m>0?nr.forward:nr.back:nr.unknown})})};function c(){r=e.value}function l(h){o.push(h);const f=()=>{const v=o.indexOf(h);v>-1&&o.splice(v,1)};return s.push(f),f}function d(){const{history:h}=window;h.state&&h.replaceState(Xe({},h.state,{scroll:qa()}),"")}function u(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function yd(n,t,e,i=!1,o=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:o?qa():null}}function jg(n){const{history:t,location:e}=window,i={value:jf(n,e)},o={value:t.state};o.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,d){const u=n.indexOf("#"),h=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+c:Xg()+n+c;try{t[d?"replaceState":"pushState"](l,"",h),o.value=l}catch(f){console.error(f),e[d?"replace":"assign"](h)}}function r(c,l){const d=Xe({},t.state,yd(o.value.back,c,o.value.forward,!0),l,{position:o.value.position});s(c,d,!0),i.value=c}function a(c,l){const d=Xe({},o.value,t.state,{forward:c,scroll:qa()});s(d.current,d,!0);const u=Xe({},yd(i.value,c,null),{position:d.position+1},l);s(c,u,!1),i.value=c}return{location:i,state:o,push:a,replace:r}}function Yg(n){n=Bg(n);const t=jg(n),e=qg(n,t.state,t.location,t.replace);function i(s,r=!0){r||e.pauseListeners(),history.go(s)}const o=Xe({location:"",base:n,go:i,createHref:Gg.bind(null,n)},t,e);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function $g(n){return typeof n=="string"||n&&typeof n=="object"}function Yf(n){return typeof n=="string"||typeof n=="symbol"}const $f=Symbol("");var xd;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(xd||(xd={}));function bs(n,t){return Xe(new Error,{type:n,[$f]:!0},t)}function Gi(n,t){return n instanceof Error&&$f in n&&(t==null||!!(n.type&t))}const wd="[^/]+?",Kg={sensitive:!1,strict:!1,start:!0,end:!0},Zg=/[.+*?^${}()[\]/\\]/g;function Jg(n,t){const e=Xe({},Kg,t),i=[];let o=e.start?"^":"";const s=[];for(const l of n){const d=l.length?[]:[90];e.strict&&!l.length&&(o+="/");for(let u=0;u<l.length;u++){const h=l[u];let f=40+(e.sensitive?.25:0);if(h.type===0)u||(o+="/"),o+=h.value.replace(Zg,"\\$&"),f+=40;else if(h.type===1){const{value:v,repeatable:x,optional:m,regexp:p}=h;s.push({name:v,repeatable:x,optional:m});const S=p||wd;if(S!==wd){f+=10;try{new RegExp(`(${S})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${v}" (${S}): `+M.message)}}let E=x?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;u||(E=m&&l.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),o+=E,f+=20,m&&(f+=-8),x&&(f+=-20),S===".*"&&(f+=-50)}d.push(f)}i.push(d)}if(e.strict&&e.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}e.strict||(o+="/?"),e.end?o+="$":e.strict&&(o+="(?:/|$)");const r=new RegExp(o,e.sensitive?"":"i");function a(l){const d=l.match(r),u={};if(!d)return null;for(let h=1;h<d.length;h++){const f=d[h]||"",v=s[h-1];u[v.name]=f&&v.repeatable?f.split("/"):f}return u}function c(l){let d="",u=!1;for(const h of n){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of h)if(f.type===0)d+=f.value;else if(f.type===1){const{value:v,repeatable:x,optional:m}=f,p=v in l?l[v]:"";if(bi(p)&&!x)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const S=bi(p)?p.join("/"):p;if(!S)if(m)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);d+=S}}return d||"/"}return{re:r,score:i,keys:s,parse:a,stringify:c}}function Qg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Kf(n,t){let e=0;const i=n.score,o=t.score;for(;e<i.length&&e<o.length;){const s=Qg(i[e],o[e]);if(s)return s;e++}if(Math.abs(o.length-i.length)===1){if(Md(i))return 1;if(Md(o))return-1}return o.length-i.length}function Md(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const tv={type:0,value:""},ev=/[a-zA-Z0-9_]/;function nv(n){if(!n)return[[]];if(n==="/")return[[tv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(f){throw new Error(`ERR (${e})/"${l}": ${f}`)}let e=0,i=e;const o=[];let s;function r(){s&&o.push(s),s=[]}let a=0,c,l="",d="";function u(){l&&(e===0?s.push({type:0,value:l}):e===1||e===2||e===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:c==="/"?(l&&u(),r()):c===":"?(u(),e=1):h();break;case 4:h(),e=i;break;case 1:c==="("?e=2:ev.test(c)?h():(u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:e=3:d+=c;break;case 3:u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),r(),o}function iv(n,t,e){const i=Jg(nv(n.path),e),o=Xe(i,{record:n,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function ov(n,t){const e=[],i=new Map;t=Td({strict:!1,end:!0,sensitive:!1},t);function o(u){return i.get(u)}function s(u,h,f){const v=!f,x=bd(u);x.aliasOf=f&&f.record;const m=Td(t,u),p=[x];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of M)p.push(bd(Xe({},x,{components:f?f.record.components:x.components,path:B,aliasOf:f?f.record:x})))}let S,E;for(const M of p){const{path:B}=M;if(h&&B[0]!=="/"){const I=h.record.path,R=I[I.length-1]==="/"?"":"/";M.path=h.record.path+(B&&R+B)}if(S=iv(M,h,m),f?f.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),v&&u.name&&!Ed(S)&&r(u.name)),Zf(S)&&c(S),x.children){const I=x.children;for(let R=0;R<I.length;R++)s(I[R],S,f&&f.children[R])}f=f||S}return E?()=>{r(E)}:er}function r(u){if(Yf(u)){const h=i.get(u);h&&(i.delete(u),e.splice(e.indexOf(h),1),h.children.forEach(r),h.alias.forEach(r))}else{const h=e.indexOf(u);h>-1&&(e.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return e}function c(u){const h=av(u,e);e.splice(h,0,u),u.record.name&&!Ed(u)&&i.set(u.record.name,u)}function l(u,h){let f,v={},x,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw bs(1,{location:u});m=f.record.name,v=Xe(Sd(h.params,f.keys.filter(E=>!E.optional).concat(f.parent?f.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),u.params&&Sd(u.params,f.keys.map(E=>E.name))),x=f.stringify(v)}else if(u.path!=null)x=u.path,f=e.find(E=>E.re.test(x)),f&&(v=f.parse(x),m=f.record.name);else{if(f=h.name?i.get(h.name):e.find(E=>E.re.test(h.path)),!f)throw bs(1,{location:u,currentLocation:h});m=f.record.name,v=Xe({},h.params,u.params),x=f.stringify(v)}const p=[];let S=f;for(;S;)p.unshift(S.record),S=S.parent;return{name:m,path:x,params:v,matched:p,meta:rv(p)}}n.forEach(u=>s(u));function d(){e.length=0,i.clear()}return{addRoute:s,resolve:l,removeRoute:r,clearRoutes:d,getRoutes:a,getRecordMatcher:o}}function Sd(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function bd(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:sv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function sv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Ed(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function rv(n){return n.reduce((t,e)=>Xe(t,e.meta),{})}function Td(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function av(n,t){let e=0,i=t.length;for(;e!==i;){const s=e+i>>1;Kf(n,t[s])<0?i=s:e=s+1}const o=cv(n);return o&&(i=t.lastIndexOf(o,i-1)),i}function cv(n){let t=n;for(;t=t.parent;)if(Zf(t)&&Kf(n,t)===0)return t}function Zf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function lv(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let o=0;o<i.length;++o){const s=i[o].replace(kf," "),r=s.indexOf("="),a=fr(r<0?s:s.slice(0,r)),c=r<0?null:fr(s.slice(r+1));if(a in t){let l=t[a];bi(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Ad(n){let t="";for(let e in n){const i=n[e];if(e=Rg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(bi(i)?i.map(s=>s&&sl(s)):[i&&sl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function uv(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=bi(i)?i.map(o=>o==null?null:""+o):i==null?i:""+i)}return t}const dv=Symbol(""),Pd=Symbol(""),xu=Symbol(""),Jf=Symbol(""),al=Symbol("");function Gs(){let n=[];function t(i){return n.push(i),()=>{const o=n.indexOf(i);o>-1&&n.splice(o,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function po(n,t,e,i,o,s=r=>r()){const r=i&&(i.enterCallbacks[o]=i.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(bs(4,{from:e,to:t})):h instanceof Error?c(h):$g(h)?c(bs(2,{from:t,to:h})):(r&&i.enterCallbacks[o]===r&&typeof h=="function"&&r.push(h),a())},d=s(()=>n.call(i&&i.instances[o],t,e,l));let u=Promise.resolve(d);n.length<3&&(u=u.then(l)),u.catch(h=>c(h))})}function fc(n,t,e,i,o=s=>s()){const s=[];for(const r of n)for(const a in r.components){let c=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(Gf(c)){const d=(c.__vccOpts||c)[t];d&&s.push(po(d,e,i,r,a,o))}else{let l=c();s.push(()=>l.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const u=_g(d)?d.default:d;r.mods[a]=d,r.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&po(f,e,i,r,a,o)()}))}}return s}function Rd(n){const t=Qi(xu),e=Qi(Jf),i=_i(()=>{const c=ms(n.to);return t.resolve(c)}),o=_i(()=>{const{matched:c}=i.value,{length:l}=c,d=c[l-1],u=e.matched;if(!d||!u.length)return-1;const h=u.findIndex(Ss.bind(null,d));if(h>-1)return h;const f=Cd(c[l-2]);return l>1&&Cd(d)===f&&u[u.length-1].path!==f?u.findIndex(Ss.bind(null,c[l-2])):h}),s=_i(()=>o.value>-1&&mv(e.params,i.value.params)),r=_i(()=>o.value>-1&&o.value===e.matched.length-1&&qf(e.params,i.value.params));function a(c={}){return pv(c)?t[ms(n.replace)?"replace":"push"](ms(n.to)).catch(er):Promise.resolve()}return{route:i,href:_i(()=>i.value.href),isActive:s,isExactActive:r,navigate:a}}const hv=An({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rd,setup(n,{slots:t}){const e=za(Rd(n)),{options:i}=Qi(xu),o=_i(()=>({[Id(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Id(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&t.default(e);return n.custom?s:Of("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:o.value},s)}}}),fv=hv;function pv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function mv(n,t){for(const e in t){const i=t[e],o=n[e];if(typeof i=="string"){if(i!==o)return!1}else if(!bi(o)||o.length!==i.length||i.some((s,r)=>s!==o[r]))return!1}return!0}function Cd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Id=(n,t,e)=>n??t??e,gv=An({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Qi(al),o=_i(()=>n.route||i.value),s=Qi(Pd,0),r=_i(()=>{let l=ms(s);const{matched:d}=o.value;let u;for(;(u=d[l])&&!u.components;)l++;return l}),a=_i(()=>o.value.matched[r.value]);ha(Pd,_i(()=>r.value+1)),ha(dv,a),ha(al,o);const c=Yt();return Ve(()=>[c.value,a.value,n.name],([l,d,u],[h,f,v])=>{d&&(d.instances[u]=l,f&&f!==d&&l&&l===h&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),l&&d&&(!f||!Ss(d,f)||!h)&&(d.enterCallbacks[u]||[]).forEach(x=>x(l))},{flush:"post"}),()=>{const l=o.value,d=n.name,u=a.value,h=u&&u.components[d];if(!h)return Ld(e.default,{Component:h,route:l});const f=u.props[d],v=f?f===!0?l.params:typeof f=="function"?f(l):f:null,m=Of(h,Xe({},v,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[d]=null)},ref:c}));return Ld(e.default,{Component:m,route:l})||m}}});function Ld(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const vv=gv;function _v(n){const t=ov(n.routes,n),e=n.parseQuery||lv,i=n.stringifyQuery||Ad,o=n.history,s=Gs(),r=Gs(),a=Gs(),c=ps(oo);let l=oo;cs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=dc.bind(null,O=>""+O),u=dc.bind(null,Ig),h=dc.bind(null,fr);function f(O,ut){let st,dt;return Yf(O)?(st=t.getRecordMatcher(O),dt=ut):dt=O,t.addRoute(dt,st)}function v(O){const ut=t.getRecordMatcher(O);ut&&t.removeRoute(ut)}function x(){return t.getRoutes().map(O=>O.record)}function m(O){return!!t.getRecordMatcher(O)}function p(O,ut){if(ut=Xe({},ut||c.value),typeof O=="string"){const P=hc(e,O,ut.path),L=t.resolve({path:P.path},ut),F=o.createHref(P.fullPath);return Xe(P,L,{params:h(L.params),hash:fr(P.hash),redirectedFrom:void 0,href:F})}let st;if(O.path!=null)st=Xe({},O,{path:hc(e,O.path,ut.path).path});else{const P=Xe({},O.params);for(const L in P)P[L]==null&&delete P[L];st=Xe({},O,{params:u(P)}),ut.params=u(ut.params)}const dt=t.resolve(st,ut),yt=O.hash||"";dt.params=d(h(dt.params));const ot=Ug(i,Xe({},O,{hash:Pg(yt),path:dt.path})),g=o.createHref(ot);return Xe({fullPath:ot,hash:yt,query:i===Ad?uv(O.query):O.query||{}},dt,{redirectedFrom:void 0,href:g})}function S(O){return typeof O=="string"?hc(e,O,c.value.path):Xe({},O)}function E(O,ut){if(l!==O)return bs(8,{from:ut,to:O})}function M(O){return R(O)}function B(O){return M(Xe(S(O),{replace:!0}))}function I(O){const ut=O.matched[O.matched.length-1];if(ut&&ut.redirect){const{redirect:st}=ut;let dt=typeof st=="function"?st(O):st;return typeof dt=="string"&&(dt=dt.includes("?")||dt.includes("#")?dt=S(dt):{path:dt},dt.params={}),Xe({query:O.query,hash:O.hash,params:dt.path!=null?{}:O.params},dt)}}function R(O,ut){const st=l=p(O),dt=c.value,yt=O.state,ot=O.force,g=O.replace===!0,P=I(st);if(P)return R(Xe(S(P),{state:typeof P=="object"?Xe({},yt,P.state):yt,force:ot,replace:g}),ut||st);const L=st;L.redirectedFrom=ut;let F;return!ot&&Ng(i,dt,st)&&(F=bs(16,{to:L,from:dt}),Mt(dt,dt,!0,!1)),(F?Promise.resolve(F):w(L,dt)).catch(N=>Gi(N)?Gi(N,2)?N:wt(N):W(N,L,dt)).then(N=>{if(N){if(Gi(N,2))return R(Xe({replace:g},S(N.to),{state:typeof N.to=="object"?Xe({},yt,N.to.state):yt,force:ot}),ut||L)}else N=U(L,dt,!0,g,yt);return T(L,dt,N),N})}function G(O,ut){const st=E(O,ut);return st?Promise.reject(st):Promise.resolve()}function tt(O){const ut=rt.values().next().value;return ut&&typeof ut.runWithContext=="function"?ut.runWithContext(O):O()}function w(O,ut){let st;const[dt,yt,ot]=yv(O,ut);st=fc(dt.reverse(),"beforeRouteLeave",O,ut);for(const P of dt)P.leaveGuards.forEach(L=>{st.push(po(L,O,ut))});const g=G.bind(null,O,ut);return st.push(g),Tt(st).then(()=>{st=[];for(const P of s.list())st.push(po(P,O,ut));return st.push(g),Tt(st)}).then(()=>{st=fc(yt,"beforeRouteUpdate",O,ut);for(const P of yt)P.updateGuards.forEach(L=>{st.push(po(L,O,ut))});return st.push(g),Tt(st)}).then(()=>{st=[];for(const P of ot)if(P.beforeEnter)if(bi(P.beforeEnter))for(const L of P.beforeEnter)st.push(po(L,O,ut));else st.push(po(P.beforeEnter,O,ut));return st.push(g),Tt(st)}).then(()=>(O.matched.forEach(P=>P.enterCallbacks={}),st=fc(ot,"beforeRouteEnter",O,ut,tt),st.push(g),Tt(st))).then(()=>{st=[];for(const P of r.list())st.push(po(P,O,ut));return st.push(g),Tt(st)}).catch(P=>Gi(P,8)?P:Promise.reject(P))}function T(O,ut,st){a.list().forEach(dt=>tt(()=>dt(O,ut,st)))}function U(O,ut,st,dt,yt){const ot=E(O,ut);if(ot)return ot;const g=ut===oo,P=cs?history.state:{};st&&(dt||g?o.replace(O.fullPath,Xe({scroll:g&&P&&P.scroll},yt)):o.push(O.fullPath,yt)),c.value=O,Mt(O,ut,st,g),wt()}let $;function et(){$||($=o.listen((O,ut,st)=>{if(!pt.listening)return;const dt=p(O),yt=I(dt);if(yt){R(Xe(yt,{replace:!0}),dt).catch(er);return}l=dt;const ot=c.value;cs&&Vg(_d(ot.fullPath,st.delta),qa()),w(dt,ot).catch(g=>Gi(g,12)?g:Gi(g,2)?(R(g.to,dt).then(P=>{Gi(P,20)&&!st.delta&&st.type===pr.pop&&o.go(-1,!1)}).catch(er),Promise.reject()):(st.delta&&o.go(-st.delta,!1),W(g,dt,ot))).then(g=>{g=g||U(dt,ot,!1),g&&(st.delta&&!Gi(g,8)?o.go(-st.delta,!1):st.type===pr.pop&&Gi(g,20)&&o.go(-1,!1)),T(dt,ot,g)}).catch(er)}))}let lt=Gs(),q=Gs(),it;function W(O,ut,st){wt(O);const dt=q.list();return dt.length?dt.forEach(yt=>yt(O,ut,st)):console.error(O),Promise.reject(O)}function mt(){return it&&c.value!==oo?Promise.resolve():new Promise((O,ut)=>{lt.add([O,ut])})}function wt(O){return it||(it=!O,et(),lt.list().forEach(([ut,st])=>O?st(O):ut()),lt.reset()),O}function Mt(O,ut,st,dt){const{scrollBehavior:yt}=n;if(!cs||!yt)return Promise.resolve();const ot=!st&&Wg(_d(O.fullPath,0))||(dt||!st)&&history.state&&history.state.scroll||null;return cf().then(()=>yt(O,ut,ot)).then(g=>g&&kg(g)).catch(g=>W(g,O,ut))}const Ft=O=>o.go(O);let Ht;const rt=new Set,pt={currentRoute:c,listening:!0,addRoute:f,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:M,replace:B,go:Ft,back:()=>Ft(-1),forward:()=>Ft(1),beforeEach:s.add,beforeResolve:r.add,afterEach:a.add,onError:q.add,isReady:mt,install(O){const ut=this;O.component("RouterLink",fv),O.component("RouterView",vv),O.config.globalProperties.$router=ut,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ms(c)}),cs&&!Ht&&c.value===oo&&(Ht=!0,M(o.location).catch(yt=>{}));const st={};for(const yt in oo)Object.defineProperty(st,yt,{get:()=>c.value[yt],enumerable:!0});O.provide(xu,ut),O.provide(Jf,nf(st)),O.provide(al,c);const dt=O.unmount;rt.add(O),O.unmount=function(){rt.delete(O),rt.size<1&&(l=oo,$&&$(),$=null,c.value=oo,Ht=!1,it=!1),dt()}}};function Tt(O){return O.reduce((ut,st)=>ut.then(()=>tt(st)),Promise.resolve())}return pt}function yv(n,t){const e=[],i=[],o=[],s=Math.max(t.matched.length,n.matched.length);for(let r=0;r<s;r++){const a=t.matched[r];a&&(n.matched.find(l=>Ss(l,a))?i.push(a):e.push(a));const c=n.matched[r];c&&(t.matched.find(l=>Ss(l,c))||o.push(c))}return[e,i,o]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wu="169",xv=0,Dd=1,wv=2,Qf=1,Mv=2,ji=3,yo=0,Jn=1,Ie=2,go=0,_s=1,Ud=2,Nd=3,Fd=4,Sv=5,Uo=100,bv=101,Ev=102,Tv=103,Av=104,Pv=200,Rv=201,Cv=202,Iv=203,cl=204,ll=205,Lv=206,Dv=207,Uv=208,Nv=209,Fv=210,Ov=211,Bv=212,zv=213,Gv=214,ul=0,dl=1,hl=2,Es=3,fl=4,pl=5,ml=6,gl=7,tp=0,Hv=1,kv=2,vo=0,Vv=1,Wv=2,Xv=3,qv=4,jv=5,Yv=6,$v=7,ep=300,Ts=301,As=302,Pa=303,vl=304,ja=306,Qe=1e3,Fo=1001,_l=1002,di=1003,Kv=1004,Or=1005,yi=1006,pc=1007,wi=1008,to=1009,np=1010,ip=1011,mr=1012,Mu=1013,Go=1014,Ki=1015,br=1016,Su=1017,bu=1018,Ps=1020,op=35902,sp=1021,rp=1022,qn=1023,ap=1024,cp=1025,ys=1026,Rs=1027,lp=1028,Eu=1029,up=1030,Tu=1031,Au=1033,ma=33776,ga=33777,va=33778,_a=33779,yl=35840,xl=35841,wl=35842,Ml=35843,Sl=36196,bl=37492,El=37496,Tl=37808,Al=37809,Pl=37810,Rl=37811,Cl=37812,Il=37813,Ll=37814,Dl=37815,Ul=37816,Nl=37817,Fl=37818,Ol=37819,Bl=37820,zl=37821,ya=36492,Gl=36494,Hl=36495,dp=36283,kl=36284,Vl=36285,Wl=36286,Zv=3200,Jv=3201,hp=0,Qv=1,mo="",vi="srgb",Mo="srgb-linear",Pu="display-p3",Ya="display-p3-linear",Ra="linear",nn="srgb",Ca="rec709",Ia="p3",jo=7680,Od=519,t_=512,e_=513,n_=514,fp=515,i_=516,o_=517,s_=518,r_=519,Bd=35044,zd="300 es",Zi=2e3,La=2001;class Ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let s=0,r=o.length;s<r;s++)o[s].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gd=1234567;const ir=Math.PI/180,gr=180/Math.PI;function Wo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function wn(n,t,e){return Math.max(t,Math.min(e,n))}function Ru(n,t){return(n%t+t)%t}function a_(n,t,e,i,o){return i+(n-t)*(o-i)/(e-t)}function c_(n,t,e){return n!==t?(e-n)/(t-n):0}function or(n,t,e){return(1-e)*n+e*t}function l_(n,t,e,i){return or(n,t,1-Math.exp(-e*i))}function u_(n,t=1){return t-Math.abs(Ru(n,t*2)-t)}function d_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function h_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function f_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function p_(n,t){return n+Math.random()*(t-n)}function m_(n){return n*(.5-Math.random())}function g_(n){n!==void 0&&(Gd=n);let t=Gd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function v_(n){return n*ir}function __(n){return n*gr}function y_(n){return(n&n-1)===0&&n!==0}function x_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function w_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function M_(n,t,e,i,o){const s=Math.cos,r=Math.sin,a=s(e/2),c=r(e/2),l=s((t+i)/2),d=r((t+i)/2),u=s((t-i)/2),h=r((t-i)/2),f=s((i-t)/2),v=r((i-t)/2);switch(o){case"XYX":n.set(a*d,c*u,c*h,a*l);break;case"YZY":n.set(c*h,a*d,c*u,a*l);break;case"ZXZ":n.set(c*u,c*h,a*d,a*l);break;case"XZX":n.set(a*d,c*v,c*f,a*l);break;case"YXY":n.set(c*f,a*d,c*v,a*l);break;case"ZYZ":n.set(c*v,c*f,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ls(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const he={DEG2RAD:ir,RAD2DEG:gr,generateUUID:Wo,clamp:wn,euclideanModulo:Ru,mapLinear:a_,inverseLerp:c_,lerp:or,damp:l_,pingpong:u_,smoothstep:d_,smootherstep:h_,randInt:f_,randFloat:p_,randFloatSpread:m_,seededRandom:g_,degToRad:v_,radToDeg:__,isPowerOfTwo:y_,ceilPowerOfTwo:x_,floorPowerOfTwo:w_,setQuaternionFromProperEuler:M_,normalize:kn,denormalize:ls};class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(wn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*o+t.x,this.y=s*o+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(t,e,i,o,s,r,a,c,l){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,o,s,r,a,c,l)}set(t,e,i,o,s,r,a,c,l){const d=this.elements;return d[0]=t,d[1]=o,d[2]=a,d[3]=e,d[4]=s,d[5]=c,d[6]=i,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,s=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],d=i[4],u=i[7],h=i[2],f=i[5],v=i[8],x=o[0],m=o[3],p=o[6],S=o[1],E=o[4],M=o[7],B=o[2],I=o[5],R=o[8];return s[0]=r*x+a*S+c*B,s[3]=r*m+a*E+c*I,s[6]=r*p+a*M+c*R,s[1]=l*x+d*S+u*B,s[4]=l*m+d*E+u*I,s[7]=l*p+d*M+u*R,s[2]=h*x+f*S+v*B,s[5]=h*m+f*E+v*I,s[8]=h*p+f*M+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*r*d-e*a*l-i*s*d+i*a*c+o*s*l-o*r*c}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=d*r-a*l,h=a*c-d*s,f=l*s-r*c,v=e*u+i*h+o*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=u*x,t[1]=(o*l-d*i)*x,t[2]=(a*i-o*r)*x,t[3]=h*x,t[4]=(d*e-o*c)*x,t[5]=(o*s-a*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(r*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-o*l,o*c,-o*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mc.makeScale(t,e)),this}rotate(t){return this.premultiply(mc.makeRotation(-t)),this}translate(t,e){return this.premultiply(mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new Ce;function pp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function S_(){const n=vr("canvas");return n.style.display="block",n}const Hd={};function xa(n){n in Hd||(Hd[n]=!0,console.warn(n))}function b_(n,t,e){return new Promise(function(i,o){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function E_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function T_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const kd=new Ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vd=new Ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hs={[Mo]:{transfer:Ra,primaries:Ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[vi]:{transfer:nn,primaries:Ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ya]:{transfer:Ra,primaries:Ia,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Vd),fromReference:n=>n.applyMatrix3(kd)},[Pu]:{transfer:nn,primaries:Ia,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Vd),fromReference:n=>n.applyMatrix3(kd).convertLinearToSRGB()}},A_=new Set([Mo,Ya]),Ge={enabled:!0,_workingColorSpace:Mo,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!A_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Hs[t].toReference,o=Hs[e].fromReference;return o(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Hs[n].primaries},getTransfer:function(n){return n===mo?Ra:Hs[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Hs[t].luminanceCoefficients)}};function xs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yo;class P_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yo===void 0&&(Yo=vr("canvas")),Yo.width=t.width,Yo.height=t.height;const i=Yo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Yo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),s=o.data;for(let r=0;r<s.length;r++)s[r]=xs(s[r]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xs(e[i]/255)*255):e[i]=xs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let R_=0;class mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Wo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let r=0,a=o.length;r<a;r++)o[r].isDataTexture?s.push(vc(o[r].image)):s.push(vc(o[r]))}else s=vc(o);i.url=s}return e||(t.images[this.uuid]=i),i}}function vc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?P_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C_=0;class Un extends Ls{constructor(t=Un.DEFAULT_IMAGE,e=Un.DEFAULT_MAPPING,i=Fo,o=Fo,s=yi,r=wi,a=qn,c=to,l=Un.DEFAULT_ANISOTROPY,d=mo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Wo(),this.name="",this.source=new mp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ep)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qe:t.x=t.x-Math.floor(t.x);break;case Fo:t.x=t.x<0?0:1;break;case _l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qe:t.y=t.y-Math.floor(t.y);break;case Fo:t.y=t.y<0?0:1;break;case _l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=ep;Un.DEFAULT_ANISOTROPY=1;class je{constructor(t=0,e=0,i=0,o=1){je.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*o+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*o+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*o+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*o+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,s;const c=t.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],v=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+x)<.1&&Math.abs(v+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,M=(f+1)/2,B=(p+1)/2,I=(d+h)/4,R=(u+x)/4,G=(v+m)/4;return E>M&&E>B?E<.01?(i=0,o=.707106781,s=.707106781):(i=Math.sqrt(E),o=I/i,s=R/i):M>B?M<.01?(i=.707106781,o=0,s=.707106781):(o=Math.sqrt(M),i=I/o,s=G/o):B<.01?(i=.707106781,o=.707106781,s=0):(s=Math.sqrt(B),i=R/s,o=G/s),this.set(i,o,s,e),this}let S=Math.sqrt((m-v)*(m-v)+(u-x)*(u-x)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(m-v)/S,this.y=(u-x)/S,this.z=(h-d)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I_ extends Ls{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new je(0,0,t,e),this.scissorTest=!1,this.viewport=new je(0,0,t,e);const o={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Un(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,o=t.textures.length;i<o;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ho extends I_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class gp extends Un{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class L_ extends Un{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Fo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,s,r,a){let c=i[o+0],l=i[o+1],d=i[o+2],u=i[o+3];const h=s[r+0],f=s[r+1],v=s[r+2],x=s[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=v,t[e+3]=x;return}if(u!==x||c!==h||l!==f||d!==v){let m=1-a;const p=c*h+l*f+d*v+u*x,S=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const B=Math.sqrt(E),I=Math.atan2(B,p*S);m=Math.sin(m*I)/B,a=Math.sin(a*I)/B}const M=a*S;if(c=c*m+h*M,l=l*m+f*M,d=d*m+v*M,u=u*m+x*M,m===1-a){const B=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=B,l*=B,d*=B,u*=B}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,o,s,r){const a=i[o],c=i[o+1],l=i[o+2],d=i[o+3],u=s[r],h=s[r+1],f=s[r+2],v=s[r+3];return t[e]=a*v+d*u+c*f-l*h,t[e+1]=c*v+d*h+l*u-a*f,t[e+2]=l*v+d*f+a*h-c*u,t[e+3]=d*v-a*u-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,o=t._y,s=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(o/2),u=a(s/2),h=c(i/2),f=c(o/2),v=c(s/2);switch(r){case"XYZ":this._x=h*d*u+l*f*v,this._y=l*f*u-h*d*v,this._z=l*d*v+h*f*u,this._w=l*d*u-h*f*v;break;case"YXZ":this._x=h*d*u+l*f*v,this._y=l*f*u-h*d*v,this._z=l*d*v-h*f*u,this._w=l*d*u+h*f*v;break;case"ZXY":this._x=h*d*u-l*f*v,this._y=l*f*u+h*d*v,this._z=l*d*v+h*f*u,this._w=l*d*u-h*f*v;break;case"ZYX":this._x=h*d*u-l*f*v,this._y=l*f*u+h*d*v,this._z=l*d*v-h*f*u,this._w=l*d*u+h*f*v;break;case"YZX":this._x=h*d*u+l*f*v,this._y=l*f*u+h*d*v,this._z=l*d*v-h*f*u,this._w=l*d*u-h*f*v;break;case"XZY":this._x=h*d*u-l*f*v,this._y=l*f*u-h*d*v,this._z=l*d*v+h*f*u,this._w=l*d*u+h*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],s=e[8],r=e[1],a=e[5],c=e[9],l=e[2],d=e[6],u=e[10],h=i+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(r-o)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(d-c)/f,this._x=.25*f,this._y=(o+r)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(o+r)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-o)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(wn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,s=t._z,r=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=i*d+r*a+o*l-s*c,this._y=o*d+r*c+s*a-i*l,this._z=s*d+r*l+i*c-o*a,this._w=r*d-i*a-o*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,s=this._z,r=this._w;let a=r*t._w+i*t._x+o*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=o,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*o+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),u=Math.sin((1-e)*d)/l,h=Math.sin(e*d)/l;return this._w=r*u+this._w*h,this._x=i*u+this._x*h,this._y=o*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(o*Math.sin(t),o*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,e=0,i=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*o,this.y=s[1]*e+s[4]*i+s[7]*o,this.z=s[2]*e+s[5]*i+s[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*o+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*o+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*o+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*o+s[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,s=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*o-a*i),d=2*(a*e-s*o),u=2*(s*i-r*e);return this.x=e+c*l+r*u-a*d,this.y=i+c*d+a*l-s*u,this.z=o+c*u+s*d-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*o,this.y=s[1]*e+s[5]*i+s[9]*o,this.z=s[2]*e+s[6]*i+s[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,s=t.z,r=e.x,a=e.y,c=e.z;return this.x=o*c-s*a,this.y=s*r-i*c,this.z=i*a-o*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _c.copy(this).projectOnVector(t),this.sub(_c)}reflect(t){return this.sub(_c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(wn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new J,Wd=new Er;class Tr{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,pi):pi.fromBufferAttribute(s,r),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const o=t.children;for(let s=0,r=o.length;s<r;s++)this.expandByObject(o[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),zr.subVectors(this.max,ks),$o.subVectors(t.a,ks),Ko.subVectors(t.b,ks),Zo.subVectors(t.c,ks),so.subVectors(Ko,$o),ro.subVectors(Zo,Ko),Eo.subVectors($o,Zo);let e=[0,-so.z,so.y,0,-ro.z,ro.y,0,-Eo.z,Eo.y,so.z,0,-so.x,ro.z,0,-ro.x,Eo.z,0,-Eo.x,-so.y,so.x,0,-ro.y,ro.x,0,-Eo.y,Eo.x,0];return!yc(e,$o,Ko,Zo,zr)||(e=[1,0,0,0,1,0,0,0,1],!yc(e,$o,Ko,Zo,zr))?!1:(Gr.crossVectors(so,ro),e=[Gr.x,Gr.y,Gr.z],yc(e,$o,Ko,Zo,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hi=[new J,new J,new J,new J,new J,new J,new J,new J],pi=new J,Br=new Tr,$o=new J,Ko=new J,Zo=new J,so=new J,ro=new J,Eo=new J,ks=new J,zr=new J,Gr=new J,To=new J;function yc(n,t,e,i,o){for(let s=0,r=n.length-3;s<=r;s+=3){To.fromArray(n,s);const a=o.x*Math.abs(To.x)+o.y*Math.abs(To.y)+o.z*Math.abs(To.z),c=t.dot(To),l=e.dot(To),d=i.dot(To);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const D_=new Tr,Vs=new J,xc=new J;class $a{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):D_.setFromPoints(t).getCenter(i);let o=0;for(let s=0,r=t.length;s<r;s++)o=Math.max(o,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(Vs,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(xc)),this.expandByPoint(Vs.copy(t.center).sub(xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new J,wc=new J,Hr=new J,ao=new J,Mc=new J,kr=new J,Sc=new J;class vp{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){wc.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),ao.copy(this.origin).sub(wc);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Hr),a=ao.dot(this.direction),c=-ao.dot(Hr),l=ao.lengthSq(),d=Math.abs(1-r*r);let u,h,f,v;if(d>0)if(u=r*c-a,h=r*a-c,v=s*d,u>=0)if(h>=-v)if(h<=v){const x=1/d;u*=x,h*=x,f=u*(u+r*h+2*a)+h*(r*u+h+2*c)+l}else h=s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*c)+l;else h<=-v?(u=Math.max(0,-(-r*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l):h<=v?(u=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(u=Math.max(0,-(r*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l);else h=r>0?-s:s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),o&&o.copy(wc).addScaledVector(Hr,h),f}intersectSphere(t,e){ki.subVectors(t.center,this.origin);const i=ki.dot(this.direction),o=ki.dot(ki)-i*i,s=t.radius*t.radius;if(o>s)return null;const r=Math.sqrt(s-o),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,s,r,a,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,o=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,o=(t.min.x-h.x)*l),d>=0?(s=(t.min.y-h.y)*d,r=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,r=(t.min.y-h.y)*d),i>r||s>o||((s>i||isNaN(i))&&(i=s),(r<o||isNaN(o))&&(o=r),u>=0?(a=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),i>c||a>o)||((a>i||i!==i)&&(i=a),(c<o||o!==o)&&(o=c),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,i,o,s){Mc.subVectors(e,t),kr.subVectors(i,t),Sc.crossVectors(Mc,kr);let r=this.direction.dot(Sc),a;if(r>0){if(o)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ao.subVectors(this.origin,t);const c=a*this.direction.dot(kr.crossVectors(ao,kr));if(c<0)return null;const l=a*this.direction.dot(Mc.cross(ao));if(l<0||c+l>r)return null;const d=-a*ao.dot(Sc);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,e,i,o,s,r,a,c,l,d,u,h,f,v,x,m){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,o,s,r,a,c,l,d,u,h,f,v,x,m)}set(t,e,i,o,s,r,a,c,l,d,u,h,f,v,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=o,p[1]=s,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/Jo.setFromMatrixColumn(t,0).length(),s=1/Jo.setFromMatrixColumn(t,1).length(),r=1/Jo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,o=t.y,s=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(o),l=Math.sin(o),d=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const h=r*d,f=r*u,v=a*d,x=a*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=f+v*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=v+f*l,e[10]=r*c}else if(t.order==="YXZ"){const h=c*d,f=c*u,v=l*d,x=l*u;e[0]=h+x*a,e[4]=v*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*d,e[9]=-a,e[2]=f*a-v,e[6]=x+h*a,e[10]=r*c}else if(t.order==="ZXY"){const h=c*d,f=c*u,v=l*d,x=l*u;e[0]=h-x*a,e[4]=-r*u,e[8]=v+f*a,e[1]=f+v*a,e[5]=r*d,e[9]=x-h*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const h=r*d,f=r*u,v=a*d,x=a*u;e[0]=c*d,e[4]=v*l-f,e[8]=h*l+x,e[1]=c*u,e[5]=x*l+h,e[9]=f*l-v,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const h=r*c,f=r*l,v=a*c,x=a*l;e[0]=c*d,e[4]=x-h*u,e[8]=v*u+f,e[1]=u,e[5]=r*d,e[9]=-a*d,e[2]=-l*d,e[6]=f*u+v,e[10]=h-x*u}else if(t.order==="XZY"){const h=r*c,f=r*l,v=a*c,x=a*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=h*u+x,e[5]=r*d,e[9]=f*u-v,e[2]=v*u-f,e[6]=a*d,e[10]=x*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(U_,t,N_)}lookAt(t,e,i){const o=this.elements;return Qn.subVectors(t,e),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),co.crossVectors(i,Qn),co.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),co.crossVectors(i,Qn)),co.normalize(),Vr.crossVectors(Qn,co),o[0]=co.x,o[4]=Vr.x,o[8]=Qn.x,o[1]=co.y,o[5]=Vr.y,o[9]=Qn.y,o[2]=co.z,o[6]=Vr.z,o[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,s=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],d=i[1],u=i[5],h=i[9],f=i[13],v=i[2],x=i[6],m=i[10],p=i[14],S=i[3],E=i[7],M=i[11],B=i[15],I=o[0],R=o[4],G=o[8],tt=o[12],w=o[1],T=o[5],U=o[9],$=o[13],et=o[2],lt=o[6],q=o[10],it=o[14],W=o[3],mt=o[7],wt=o[11],Mt=o[15];return s[0]=r*I+a*w+c*et+l*W,s[4]=r*R+a*T+c*lt+l*mt,s[8]=r*G+a*U+c*q+l*wt,s[12]=r*tt+a*$+c*it+l*Mt,s[1]=d*I+u*w+h*et+f*W,s[5]=d*R+u*T+h*lt+f*mt,s[9]=d*G+u*U+h*q+f*wt,s[13]=d*tt+u*$+h*it+f*Mt,s[2]=v*I+x*w+m*et+p*W,s[6]=v*R+x*T+m*lt+p*mt,s[10]=v*G+x*U+m*q+p*wt,s[14]=v*tt+x*$+m*it+p*Mt,s[3]=S*I+E*w+M*et+B*W,s[7]=S*R+E*T+M*lt+B*mt,s[11]=S*G+E*U+M*q+B*wt,s[15]=S*tt+E*$+M*it+B*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],s=t[12],r=t[1],a=t[5],c=t[9],l=t[13],d=t[2],u=t[6],h=t[10],f=t[14],v=t[3],x=t[7],m=t[11],p=t[15];return v*(+s*c*u-o*l*u-s*a*h+i*l*h+o*a*f-i*c*f)+x*(+e*c*f-e*l*h+s*r*h-o*r*f+o*l*d-s*c*d)+m*(+e*l*u-e*a*f-s*r*u+i*r*f+s*a*d-i*l*d)+p*(-o*a*d-e*c*u+e*a*h+o*r*u-i*r*h+i*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=t[9],h=t[10],f=t[11],v=t[12],x=t[13],m=t[14],p=t[15],S=u*m*l-x*h*l+x*c*f-a*m*f-u*c*p+a*h*p,E=v*h*l-d*m*l-v*c*f+r*m*f+d*c*p-r*h*p,M=d*x*l-v*u*l+v*a*f-r*x*f-d*a*p+r*u*p,B=v*u*c-d*x*c-v*a*h+r*x*h+d*a*m-r*u*m,I=e*S+i*E+o*M+s*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return t[0]=S*R,t[1]=(x*h*s-u*m*s-x*o*f+i*m*f+u*o*p-i*h*p)*R,t[2]=(a*m*s-x*c*s+x*o*l-i*m*l-a*o*p+i*c*p)*R,t[3]=(u*c*s-a*h*s-u*o*l+i*h*l+a*o*f-i*c*f)*R,t[4]=E*R,t[5]=(d*m*s-v*h*s+v*o*f-e*m*f-d*o*p+e*h*p)*R,t[6]=(v*c*s-r*m*s-v*o*l+e*m*l+r*o*p-e*c*p)*R,t[7]=(r*h*s-d*c*s+d*o*l-e*h*l-r*o*f+e*c*f)*R,t[8]=M*R,t[9]=(v*u*s-d*x*s-v*i*f+e*x*f+d*i*p-e*u*p)*R,t[10]=(r*x*s-v*a*s+v*i*l-e*x*l-r*i*p+e*a*p)*R,t[11]=(d*a*s-r*u*s-d*i*l+e*u*l+r*i*f-e*a*f)*R,t[12]=B*R,t[13]=(d*x*o-v*u*o+v*i*h-e*x*h-d*i*m+e*u*m)*R,t[14]=(v*a*o-r*x*o-v*i*c+e*x*c+r*i*m-e*a*m)*R,t[15]=(r*u*o-d*a*o+d*i*c-e*u*c-r*i*h+e*a*h)*R,this}scale(t){const e=this.elements,i=t.x,o=t.y,s=t.z;return e[0]*=i,e[4]*=o,e[8]*=s,e[1]*=i,e[5]*=o,e[9]*=s,e[2]*=i,e[6]*=o,e[10]*=s,e[3]*=i,e[7]*=o,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),s=1-i,r=t.x,a=t.y,c=t.z,l=s*r,d=s*a;return this.set(l*r+i,l*a-o*c,l*c+o*a,0,l*a+o*c,d*a+i,d*c-o*r,0,l*c-o*a,d*c+o*r,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,s,r){return this.set(1,i,s,0,t,1,r,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,s=e._x,r=e._y,a=e._z,c=e._w,l=s+s,d=r+r,u=a+a,h=s*l,f=s*d,v=s*u,x=r*d,m=r*u,p=a*u,S=c*l,E=c*d,M=c*u,B=i.x,I=i.y,R=i.z;return o[0]=(1-(x+p))*B,o[1]=(f+M)*B,o[2]=(v-E)*B,o[3]=0,o[4]=(f-M)*I,o[5]=(1-(h+p))*I,o[6]=(m+S)*I,o[7]=0,o[8]=(v+E)*R,o[9]=(m-S)*R,o[10]=(1-(h+x))*R,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let s=Jo.set(o[0],o[1],o[2]).length();const r=Jo.set(o[4],o[5],o[6]).length(),a=Jo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),t.x=o[12],t.y=o[13],t.z=o[14],mi.copy(this);const l=1/s,d=1/r,u=1/a;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=d,mi.elements[5]*=d,mi.elements[6]*=d,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,e.setFromRotationMatrix(mi),i.x=s,i.y=r,i.z=a,this}makePerspective(t,e,i,o,s,r,a=Zi){const c=this.elements,l=2*s/(e-t),d=2*s/(i-o),u=(e+t)/(e-t),h=(i+o)/(i-o);let f,v;if(a===Zi)f=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(a===La)f=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,o,s,r,a=Zi){const c=this.elements,l=1/(e-t),d=1/(i-o),u=1/(r-s),h=(e+t)*l,f=(i+o)*d;let v,x;if(a===Zi)v=(r+s)*u,x=-2*u;else if(a===La)v=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Jo=new J,mi=new sn,U_=new J(0,0,0),N_=new J(1,1,1),co=new J,Vr=new J,Qn=new J,Xd=new sn,qd=new Er;class Ui{constructor(t=0,e=0,i=0,o=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,s=o[0],r=o[4],a=o[8],c=o[1],l=o[5],d=o[9],u=o[2],h=o[6],f=o[10];switch(e){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(wn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-wn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qd.setFromEuler(this),this.setFromQuaternion(qd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let F_=0;const jd=new J,Qo=new Er,Vi=new sn,Wr=new J,Ws=new J,O_=new J,B_=new Er,Yd=new J(1,0,0),$d=new J(0,1,0),Kd=new J(0,0,1),Zd={type:"added"},z_={type:"removed"},ts={type:"childadded",child:null},bc={type:"childremoved",child:null};class bn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new J,e=new Ui,i=new Er,o=new J(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new Ce}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qo.setFromAxisAngle(t,e),this.quaternion.multiply(Qo),this}rotateOnWorldAxis(t,e){return Qo.setFromAxisAngle(t,e),this.quaternion.premultiply(Qo),this}rotateX(t){return this.rotateOnAxis(Yd,t)}rotateY(t){return this.rotateOnAxis($d,t)}rotateZ(t){return this.rotateOnAxis(Kd,t)}translateOnAxis(t,e){return jd.copy(t).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yd,t)}translateY(t){return this.translateOnAxis($d,t)}translateZ(t){return this.translateOnAxis(Kd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wr.copy(t):Wr.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Ws,Wr,this.up):Vi.lookAt(Wr,Ws,this.up),this.quaternion.setFromRotationMatrix(Vi),o&&(Vi.extractRotation(o.matrixWorld),Qo.setFromRotationMatrix(Vi),this.quaternion.premultiply(Qo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zd),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(z_),bc.child=t,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zd),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,O_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,B_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));o.material=a}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];o.animations.push(s(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),d=r(t.images),u=r(t.shapes),h=r(t.skeletons),f=r(t.animations),v=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=o,i;function r(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}bn.DEFAULT_UP=new J(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new J,Wi=new J,Ec=new J,Xi=new J,es=new J,ns=new J,Jd=new J,Tc=new J,Ac=new J,Pc=new J,Rc=new je,Cc=new je,Ic=new je;class xi{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),gi.subVectors(t,e),o.cross(gi);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(t,e,i,o,s){gi.subVectors(o,e),Wi.subVectors(i,e),Ec.subVectors(t,e);const r=gi.dot(gi),a=gi.dot(Wi),c=gi.dot(Ec),l=Wi.dot(Wi),d=Wi.dot(Ec),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(l*c-a*d)*h,v=(r*d-a*c)*h;return s.set(1-f-v,v,f)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,i,o,s,r,a,c){return this.getBarycoord(t,e,i,o,Xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xi.x),c.addScaledVector(r,Xi.y),c.addScaledVector(a,Xi.z),c)}static getInterpolatedAttribute(t,e,i,o,s,r){return Rc.setScalar(0),Cc.setScalar(0),Ic.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,i),Ic.fromBufferAttribute(t,o),r.setScalar(0),r.addScaledVector(Rc,s.x),r.addScaledVector(Cc,s.y),r.addScaledVector(Ic,s.z),r}static isFrontFacing(t,e,i,o){return gi.subVectors(i,e),Wi.subVectors(t,e),gi.cross(Wi).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),gi.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,o,s){return xi.getInterpolation(t,this.a,this.b,this.c,e,i,o,s)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,s=this.c;let r,a;es.subVectors(o,i),ns.subVectors(s,i),Tc.subVectors(t,i);const c=es.dot(Tc),l=ns.dot(Tc);if(c<=0&&l<=0)return e.copy(i);Ac.subVectors(t,o);const d=es.dot(Ac),u=ns.dot(Ac);if(d>=0&&u<=d)return e.copy(o);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return r=c/(c-d),e.copy(i).addScaledVector(es,r);Pc.subVectors(t,s);const f=es.dot(Pc),v=ns.dot(Pc);if(v>=0&&f<=v)return e.copy(s);const x=f*l-c*v;if(x<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(i).addScaledVector(ns,a);const m=d*v-f*u;if(m<=0&&u-d>=0&&f-v>=0)return Jd.subVectors(s,o),a=(u-d)/(u-d+(f-v)),e.copy(o).addScaledVector(Jd,a);const p=1/(m+x+h);return r=x*p,a=h*p,e.copy(i).addScaledVector(es,r).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lo={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Lc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class we{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=Ge.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ge.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=Ge.workingColorSpace){if(t=Ru(t,1),e=wn(e,0,1),i=wn(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=Lc(r,s,t+1/3),this.g=Lc(r,s,t),this.b=Lc(r,s,t-1/3)}return Ge.toWorkingColorSpace(this,o),this}setStyle(t,e=vi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=o[1],a=o[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=o[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vi){const i=yp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}copyLinearToSRGB(t){return this.r=gc(t.r),this.g=gc(t.g),this.b=gc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return Ge.fromWorkingColorSpace(Cn.copy(this),t),Math.round(wn(Cn.r*255,0,255))*65536+Math.round(wn(Cn.g*255,0,255))*256+Math.round(wn(Cn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,o=Cn.g,s=Cn.b,r=Math.max(i,o,s),a=Math.min(i,o,s);let c,l;const d=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=d<=.5?u/(r+a):u/(2-r-a),r){case i:c=(o-s)/u+(o<s?6:0);break;case o:c=(s-i)/u+2;break;case s:c=(i-o)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Cn.copy(this),e),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=vi){Ge.fromWorkingColorSpace(Cn.copy(this),t);const e=Cn.r,i=Cn.g,o=Cn.b;return t!==vi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,e,i){return this.getHSL(lo),this.setHSL(lo.h+t,lo.s+e,lo.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(lo),t.getHSL(Xr);const i=or(lo.h,Xr.h,e),o=or(lo.s,Xr.s,e),s=or(lo.l,Xr.l,e);return this.setHSL(i,o,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,o=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*o,this.g=s[1]*e+s[4]*i+s[7]*o,this.b=s[2]*e+s[5]*i+s[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new we;we.NAMES=yp;let G_=0;class Ds extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=_s,this.side=yo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ll,this.blendEquation=Uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==yo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cl&&(i.blendSrc=this.blendSrc),this.blendDst!==ll&&(i.blendDst=this.blendDst),this.blendEquation!==Uo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Od&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(s){const r=[];for(const a in s){const c=s[a];delete c.metadata,r.push(c)}return r}if(e){const s=o(t.textures),r=o(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let s=0;s!==o;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class eo extends Ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new J,qr=new ne;class Li{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Bd,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix3(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ls(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),i=kn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),i=kn(i,this.array),o=kn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,s){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),i=kn(i,this.array),o=kn(o,this.array),s=kn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bd&&(t.usage=this.usage),t}}class xp extends Li{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class wp extends Li{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class rn extends Li{constructor(t,e,i){super(new Float32Array(t),e,i)}}let H_=0;const ui=new sn,Dc=new bn,is=new J,ti=new Tr,Xs=new Tr,xn=new J;class Tn extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pp(t)?wp:xp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ce().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,i){return ui.makeTranslation(t,e,i),this.applyMatrix4(ui),this}scale(t,e,i){return ui.makeScale(t,e,i),this.applyMatrix4(ui),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=[];for(let i=0,o=t.length;i<o;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const s=e[i];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $a);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(ti.min,Xs.min),ti.expandByPoint(xn),xn.addVectors(ti.max,Xs.max),ti.expandByPoint(xn)):(ti.expandByPoint(Xs.min),ti.expandByPoint(Xs.max))}ti.getCenter(i);let o=0;for(let s=0,r=t.count;s<r;s++)xn.fromBufferAttribute(t,s),o=Math.max(o,i.distanceToSquared(xn));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)xn.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(t,l),xn.add(is)),o=Math.max(o,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,o=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let G=0;G<i.count;G++)a[G]=new J,c[G]=new J;const l=new J,d=new J,u=new J,h=new ne,f=new ne,v=new ne,x=new J,m=new J;function p(G,tt,w){l.fromBufferAttribute(i,G),d.fromBufferAttribute(i,tt),u.fromBufferAttribute(i,w),h.fromBufferAttribute(s,G),f.fromBufferAttribute(s,tt),v.fromBufferAttribute(s,w),d.sub(l),u.sub(l),f.sub(h),v.sub(h);const T=1/(f.x*v.y-v.x*f.y);isFinite(T)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-v.x).multiplyScalar(T),a[G].add(x),a[tt].add(x),a[w].add(x),c[G].add(m),c[tt].add(m),c[w].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let G=0,tt=S.length;G<tt;++G){const w=S[G],T=w.start,U=w.count;for(let $=T,et=T+U;$<et;$+=3)p(t.getX($+0),t.getX($+1),t.getX($+2))}const E=new J,M=new J,B=new J,I=new J;function R(G){B.fromBufferAttribute(o,G),I.copy(B);const tt=a[G];E.copy(tt),E.sub(B.multiplyScalar(B.dot(tt))).normalize(),M.crossVectors(I,tt);const T=M.dot(c[G])<0?-1:1;r.setXYZW(G,E.x,E.y,E.z,T)}for(let G=0,tt=S.length;G<tt;++G){const w=S[G],T=w.start,U=w.count;for(let $=T,et=T+U;$<et;$+=3)R(t.getX($+0)),R(t.getX($+1)),R(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Li(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const o=new J,s=new J,r=new J,a=new J,c=new J,l=new J,d=new J,u=new J;if(t)for(let h=0,f=t.count;h<f;h+=3){const v=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);o.fromBufferAttribute(e,v),s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),d.subVectors(r,s),u.subVectors(o,s),d.cross(u),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(d),c.add(d),l.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)o.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),d.subVectors(r,s),u.subVectors(o,s),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,u=a.normalized,h=new l.constructor(c.length*d);let f=0,v=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*d;for(let p=0;p<d;p++)h[v++]=l[f++]}return new Li(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Tn,i=this.index.array,o=this.attributes;for(const a in o){const c=o[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,u=l.length;d<u;d++){const h=l[d],f=t(h,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const o={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const f=l[u];d.push(f.toJSON(t.data))}d.length>0&&(o[c]=d,s=!0)}s&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const o=t.attributes;for(const l in o){const d=o[l];this.setAttribute(l,d.clone(e))}const s=t.morphAttributes;for(const l in s){const d=[],u=s[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,d=r.length;l<d;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qd=new sn,Ao=new vp,jr=new $a,th=new J,Yr=new J,$r=new J,Kr=new J,Uc=new J,Zr=new J,eh=new J,Jr=new J;class _ extends bn{constructor(t=new Tn,e=new eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,o=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(o,t);const a=this.morphTargetInfluences;if(s&&a){Zr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],u=s[c];d!==0&&(Uc.fromBufferAttribute(u,t),r?Zr.addScaledVector(Uc,d):Zr.addScaledVector(Uc.sub(e),d))}e.add(Zr)}return e}raycast(t,e){const i=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),Ao.copy(t.ray).recast(t.near),!(jr.containsPoint(Ao.origin)===!1&&(Ao.intersectSphere(jr,th)===null||Ao.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Qd.copy(s).invert(),Ao.copy(t.ray).applyMatrix4(Qd),!(i.boundingBox!==null&&Ao.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ao)))}_computeIntersections(t,e,i){let o;const s=this.geometry,r=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,x=h.length;v<x;v++){const m=h[v],p=r[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,B=E;M<B;M+=3){const I=a.getX(M),R=a.getX(M+1),G=a.getX(M+2);o=Qr(this,p,t,i,l,d,u,I,R,G),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const v=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){const S=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);o=Qr(this,r,t,i,l,d,u,S,E,M),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let v=0,x=h.length;v<x;v++){const m=h[v],p=r[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,B=E;M<B;M+=3){const I=M,R=M+1,G=M+2;o=Qr(this,p,t,i,l,d,u,I,R,G),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const v=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){const S=m,E=m+1,M=m+2;o=Qr(this,r,t,i,l,d,u,S,E,M),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}}}function k_(n,t,e,i,o,s,r,a){let c;if(t.side===Jn?c=i.intersectTriangle(r,s,o,!0,a):c=i.intersectTriangle(o,s,r,t.side===yo,a),c===null)return null;Jr.copy(a),Jr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Jr);return l<e.near||l>e.far?null:{distance:l,point:Jr.clone(),object:n}}function Qr(n,t,e,i,o,s,r,a,c,l){n.getVertexPosition(a,Yr),n.getVertexPosition(c,$r),n.getVertexPosition(l,Kr);const d=k_(n,t,e,i,Yr,$r,Kr,eh);if(d){const u=new J;xi.getBarycoord(eh,Yr,$r,Kr,u),o&&(d.uv=xi.getInterpolatedAttribute(o,a,c,l,u,new ne)),s&&(d.uv1=xi.getInterpolatedAttribute(s,a,c,l,u,new ne)),r&&(d.normal=xi.getInterpolatedAttribute(r,a,c,l,u,new J),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new J,materialIndex:0};xi.getNormal(Yr,$r,Kr,h.normal),d.face=h,d.barycoord=u}return d}class Mn extends Tn{constructor(t=1,e=1,i=1,o=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:s,depthSegments:r};const a=this;o=Math.floor(o),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],d=[],u=[];let h=0,f=0;v("z","y","x",-1,-1,i,e,t,r,s,0),v("z","y","x",1,-1,i,e,-t,r,s,1),v("x","z","y",1,1,t,i,e,o,r,2),v("x","z","y",1,-1,t,i,-e,o,r,3),v("x","y","z",1,-1,t,e,i,o,s,4),v("x","y","z",-1,-1,t,e,-i,o,s,5),this.setIndex(c),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(d,3)),this.setAttribute("uv",new rn(u,2));function v(x,m,p,S,E,M,B,I,R,G,tt){const w=M/R,T=B/G,U=M/2,$=B/2,et=I/2,lt=R+1,q=G+1;let it=0,W=0;const mt=new J;for(let wt=0;wt<q;wt++){const Mt=wt*T-$;for(let Ft=0;Ft<lt;Ft++){const Ht=Ft*w-U;mt[x]=Ht*S,mt[m]=Mt*E,mt[p]=et,l.push(mt.x,mt.y,mt.z),mt[x]=0,mt[m]=0,mt[p]=I>0?1:-1,d.push(mt.x,mt.y,mt.z),u.push(Ft/R),u.push(1-wt/G),it+=1}}for(let wt=0;wt<G;wt++)for(let Mt=0;Mt<R;Mt++){const Ft=h+Mt+lt*wt,Ht=h+Mt+lt*(wt+1),rt=h+(Mt+1)+lt*(wt+1),pt=h+(Mt+1)+lt*wt;c.push(Ft,Ht,pt),c.push(Ht,rt,pt),W+=6}a.addGroup(f,W,tt),f+=W,h+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const o=n[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function Vn(n){const t={};for(let e=0;e<n.length;e++){const i=Cs(n[e]);for(const o in i)t[o]=i[o]}return t}function V_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Mp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ge.workingColorSpace}const W_={clone:Cs,merge:Vn};var X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=V_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const r=this.uniforms[o].value;r&&r.isTexture?e.uniforms[o]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[o]={type:"m4",value:r.toArray()}:e.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Sp extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const uo=new J,nh=new ne,ih=new ne;class Ye extends Sp{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){uo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(uo.x,uo.y).multiplyScalar(-t/uo.z),uo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(uo.x,uo.y).multiplyScalar(-t/uo.z)}getViewSize(t,e){return this.getViewBounds(t,nh,ih),e.subVectors(ih,nh)}setViewOffset(t,e,i,o,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,s=-.5*o;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*o/c,e-=r.offsetY*i/l,o*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,ss=1;class Ar extends bn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ye(os,ss,t,e);o.layers=this.layers,this.add(o);const s=new Ye(os,ss,t,e);s.layers=this.layers,this.add(s);const r=new Ye(os,ss,t,e);r.layers=this.layers,this.add(r);const a=new Ye(os,ss,t,e);a.layers=this.layers,this.add(a);const c=new Ye(os,ss,t,e);c.layers=this.layers,this.add(c);const l=new Ye(os,ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,o,s,r,a,c]=e;for(const l of e)this.remove(l);if(t===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===La)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,c,l,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(e,s),t.setRenderTarget(i,1,o),t.render(e,r),t.setRenderTarget(i,2,o),t.render(e,a),t.setRenderTarget(i,3,o),t.render(e,c),t.setRenderTarget(i,4,o),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,o),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Cu extends Un{constructor(t,e,i,o,s,r,a,c,l,d){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,i,o,s,r,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pr extends Ho{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];this.texture=new Cu(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Mn(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:go});s.uniforms.tEquirect.value=e;const r=new _(o,s),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=yi),new Ar(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,o){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,o);t.setRenderTarget(s)}}const Nc=new J,j_=new J,Y_=new Ce;class Lo{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=Nc.subVectors(i,e).cross(j_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Nc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Y_.getNormalMatrix(t),o=this.coplanarPoint(Nc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Po=new $a,ta=new J;class Iu{constructor(t=new Lo,e=new Lo,i=new Lo,o=new Lo,s=new Lo,r=new Lo){this.planes=[t,e,i,o,s,r]}set(t,e,i,o,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(o),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Zi){const i=this.planes,o=t.elements,s=o[0],r=o[1],a=o[2],c=o[3],l=o[4],d=o[5],u=o[6],h=o[7],f=o[8],v=o[9],x=o[10],m=o[11],p=o[12],S=o[13],E=o[14],M=o[15];if(i[0].setComponents(c-s,h-l,m-f,M-p).normalize(),i[1].setComponents(c+s,h+l,m+f,M+p).normalize(),i[2].setComponents(c+r,h+d,m+v,M+S).normalize(),i[3].setComponents(c-r,h-d,m-v,M-S).normalize(),i[4].setComponents(c-a,h-u,m-x,M-E).normalize(),e===Zi)i[5].setComponents(c+a,h+u,m+x,M+E).normalize();else if(e===La)i[5].setComponents(a,u,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Po.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Po.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Po)}intersectsSprite(t){return Po.center.set(0,0,0),Po.radius=.7071067811865476,Po.applyMatrix4(t.matrixWorld),this.intersectsSphere(Po)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if(ta.x=o.normal.x>0?t.max.x:t.min.x,ta.y=o.normal.y>0?t.max.y:t.min.y,ta.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bp(){let n=null,t=!1,e=null,i=null;function o(s,r){e(s,r),i=n.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(o),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function $_(n){const t=new WeakMap;function e(a,c){const l=a.array,d=a.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,d),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,d);else{u.sort((f,v)=>f.start-v.start);let h=0;for(let f=1;f<u.length;f++){const v=u[h],x=u[f];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,u[h]=x)}u.length=h+1;for(let f=0,v=u.length;f<v;f++){const x=u[f];n.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:o,remove:s,update:r}}class Ka extends Tn{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const s=t/2,r=e/2,a=Math.floor(i),c=Math.floor(o),l=a+1,d=c+1,u=t/a,h=e/c,f=[],v=[],x=[],m=[];for(let p=0;p<d;p++){const S=p*h-r;for(let E=0;E<l;E++){const M=E*u-s;v.push(M,-S,0),x.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const E=S+l*p,M=S+l*(p+1),B=S+1+l*(p+1),I=S+1+l*p;f.push(E,M,I),f.push(M,B,I)}this.setIndex(f),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ka(t.width,t.height,t.widthSegments,t.heightSegments)}}var K_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z_=`#ifdef USE_ALPHAHASH
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
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
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
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oy=`#ifdef USE_BATCHING
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
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ly=`#ifdef USE_IRIDESCENCE
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
#endif`,uy=`#ifdef USE_BUMPMAP
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yy=`#define PI 3.141592653589793
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
} // validated`,xy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wy=`vec3 transformedNormal = objectNormal;
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
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,by=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`
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
}`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oy=`#ifdef USE_GRADIENTMAP
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
}`,By=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
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
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,Vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jy=`PhysicalMaterial material;
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
#endif`,Yy=`struct PhysicalMaterial {
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
}`,$y=`
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sx=`#if defined( USE_POINTS_UV )
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
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
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
#endif`,hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_x=`#ifdef USE_NORMALMAP
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
#endif`,yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ux=`float getShadowMask() {
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
}`,Nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vx=`#ifdef USE_TRANSMISSION
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
#endif`,Wx=`#ifdef USE_TRANSMISSION
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
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kx=`uniform sampler2D t2D;
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`#include <common>
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
}`,nw=`#if DEPTH_PACKING == 3200
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
}`,iw=`#define DISTANCE
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
}`,ow=`#define DISTANCE
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
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`uniform float scale;
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
}`,cw=`uniform vec3 diffuse;
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
}`,lw=`#include <common>
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
}`,uw=`uniform vec3 diffuse;
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
}`,dw=`#define LAMBERT
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
}`,hw=`#define LAMBERT
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
}`,fw=`#define MATCAP
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
}`,pw=`#define MATCAP
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
}`,mw=`#define NORMAL
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
}`,gw=`#define NORMAL
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
}`,vw=`#define PHONG
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
}`,_w=`#define PHONG
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
}`,yw=`#define STANDARD
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
}`,xw=`#define STANDARD
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
}`,ww=`#define TOON
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
}`,Mw=`#define TOON
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
}`,Sw=`uniform float size;
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
}`,bw=`uniform vec3 diffuse;
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
}`,Ew=`#include <common>
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
}`,Tw=`uniform vec3 color;
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
}`,Aw=`uniform float rotation;
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
}`,Pw=`uniform vec3 diffuse;
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
}`,Re={alphahash_fragment:K_,alphahash_pars_fragment:Z_,alphamap_fragment:J_,alphamap_pars_fragment:Q_,alphatest_fragment:ty,alphatest_pars_fragment:ey,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:oy,batching_vertex:sy,begin_vertex:ry,beginnormal_vertex:ay,bsdfs:cy,iridescence_fragment:ly,bumpmap_pars_fragment:uy,clipping_planes_fragment:dy,clipping_planes_pars_fragment:hy,clipping_planes_pars_vertex:fy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:vy,color_vertex:_y,common:yy,cube_uv_reflection_fragment:xy,defaultnormal_vertex:wy,displacementmap_pars_vertex:My,displacementmap_vertex:Sy,emissivemap_fragment:by,emissivemap_pars_fragment:Ey,colorspace_fragment:Ty,colorspace_pars_fragment:Ay,envmap_fragment:Py,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Cy,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:ky,envmap_vertex:Ly,fog_vertex:Dy,fog_pars_vertex:Uy,fog_fragment:Ny,fog_pars_fragment:Fy,gradientmap_pars_fragment:Oy,lightmap_pars_fragment:By,lights_lambert_fragment:zy,lights_lambert_pars_fragment:Gy,lights_pars_begin:Hy,lights_toon_fragment:Vy,lights_toon_pars_fragment:Wy,lights_phong_fragment:Xy,lights_phong_pars_fragment:qy,lights_physical_fragment:jy,lights_physical_pars_fragment:Yy,lights_fragment_begin:$y,lights_fragment_maps:Ky,lights_fragment_end:Zy,logdepthbuf_fragment:Jy,logdepthbuf_pars_fragment:Qy,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:ex,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:ox,map_particle_pars_fragment:sx,metalnessmap_fragment:rx,metalnessmap_pars_fragment:ax,morphinstance_vertex:cx,morphcolor_vertex:lx,morphnormal_vertex:ux,morphtarget_pars_vertex:dx,morphtarget_vertex:hx,normal_fragment_begin:fx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:gx,normal_vertex:vx,normalmap_pars_fragment:_x,clearcoat_normal_fragment_begin:yx,clearcoat_normal_fragment_maps:xx,clearcoat_pars_fragment:wx,iridescence_pars_fragment:Mx,opaque_fragment:Sx,packing:bx,premultiplied_alpha_fragment:Ex,project_vertex:Tx,dithering_fragment:Ax,dithering_pars_fragment:Px,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Ix,shadowmap_pars_vertex:Lx,shadowmap_vertex:Dx,shadowmask_pars_fragment:Ux,skinbase_vertex:Nx,skinning_pars_vertex:Fx,skinning_vertex:Ox,skinnormal_vertex:Bx,specularmap_fragment:zx,specularmap_pars_fragment:Gx,tonemapping_fragment:Hx,tonemapping_pars_fragment:kx,transmission_fragment:Vx,transmission_pars_fragment:Wx,uv_pars_fragment:Xx,uv_pars_vertex:qx,uv_vertex:jx,worldpos_vertex:Yx,background_vert:$x,background_frag:Kx,backgroundCube_vert:Zx,backgroundCube_frag:Jx,cube_vert:Qx,cube_frag:tw,depth_vert:ew,depth_frag:nw,distanceRGBA_vert:iw,distanceRGBA_frag:ow,equirect_vert:sw,equirect_frag:rw,linedashed_vert:aw,linedashed_frag:cw,meshbasic_vert:lw,meshbasic_frag:uw,meshlambert_vert:dw,meshlambert_frag:hw,meshmatcap_vert:fw,meshmatcap_frag:pw,meshnormal_vert:mw,meshnormal_frag:gw,meshphong_vert:vw,meshphong_frag:_w,meshphysical_vert:yw,meshphysical_frag:xw,meshtoon_vert:ww,meshtoon_frag:Mw,points_vert:Sw,points_frag:bw,shadow_vert:Ew,shadow_frag:Tw,sprite_vert:Aw,sprite_frag:Pw},ee={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Ci={basic:{uniforms:Vn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Vn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new we(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Vn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Vn([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Vn([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new we(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Vn([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Vn([ee.points,ee.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Vn([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Vn([ee.common,ee.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Vn([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Vn([ee.sprite,ee.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Vn([ee.common,ee.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Vn([ee.lights,ee.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ci.physical={uniforms:Vn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const ea={r:0,b:0,g:0},Ro=new Ui,Rw=new sn;function Cw(n,t,e,i,o,s,r){const a=new we(0);let c=s===!0?0:1,l,d,u=null,h=0,f=null;function v(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?e:t).get(E)),E}function x(S){let E=!1;const M=v(S);M===null?p(a,c):M&&M.isColor&&(p(M,1),E=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,r):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,E){const M=v(E);M&&(M.isCubeTexture||M.mapping===ja)?(d===void 0&&(d=new _(new Mn(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Cs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),Ro.copy(E.backgroundRotation),Ro.x*=-1,Ro.y*=-1,Ro.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ro.y*=-1,Ro.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Rw.makeRotationFromEuler(Ro)),d.material.toneMapped=Ge.getTransfer(M.colorSpace)!==nn,(u!==M||h!==M.version||f!==n.toneMapping)&&(d.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new _(new Ka(2,2),new on({name:"BackgroundMaterial",uniforms:Cs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:yo,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(M.colorSpace)!==nn,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,E){S.getRGB(ea,Mp(n)),i.buffers.color.setClear(ea.r,ea.g,ea.b,E,r)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:x,addToRenderList:m}}function Iw(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=h(null);let s=o,r=!1;function a(w,T,U,$,et){let lt=!1;const q=u($,U,T);s!==q&&(s=q,l(s.object)),lt=f(w,$,U,et),lt&&v(w,$,U,et),et!==null&&t.update(et,n.ELEMENT_ARRAY_BUFFER),(lt||r)&&(r=!1,M(w,T,U,$),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function d(w){return n.deleteVertexArray(w)}function u(w,T,U){const $=U.wireframe===!0;let et=i[w.id];et===void 0&&(et={},i[w.id]=et);let lt=et[T.id];lt===void 0&&(lt={},et[T.id]=lt);let q=lt[$];return q===void 0&&(q=h(c()),lt[$]=q),q}function h(w){const T=[],U=[],$=[];for(let et=0;et<e;et++)T[et]=0,U[et]=0,$[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:$,object:w,attributes:{},index:null}}function f(w,T,U,$){const et=s.attributes,lt=T.attributes;let q=0;const it=U.getAttributes();for(const W in it)if(it[W].location>=0){const wt=et[W];let Mt=lt[W];if(Mt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),wt===void 0||wt.attribute!==Mt||Mt&&wt.data!==Mt.data)return!0;q++}return s.attributesNum!==q||s.index!==$}function v(w,T,U,$){const et={},lt=T.attributes;let q=0;const it=U.getAttributes();for(const W in it)if(it[W].location>=0){let wt=lt[W];wt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(wt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(wt=w.instanceColor));const Mt={};Mt.attribute=wt,wt&&wt.data&&(Mt.data=wt.data),et[W]=Mt,q++}s.attributes=et,s.attributesNum=q,s.index=$}function x(){const w=s.newAttributes;for(let T=0,U=w.length;T<U;T++)w[T]=0}function m(w){p(w,0)}function p(w,T){const U=s.newAttributes,$=s.enabledAttributes,et=s.attributeDivisors;U[w]=1,$[w]===0&&(n.enableVertexAttribArray(w),$[w]=1),et[w]!==T&&(n.vertexAttribDivisor(w,T),et[w]=T)}function S(){const w=s.newAttributes,T=s.enabledAttributes;for(let U=0,$=T.length;U<$;U++)T[U]!==w[U]&&(n.disableVertexAttribArray(U),T[U]=0)}function E(w,T,U,$,et,lt,q){q===!0?n.vertexAttribIPointer(w,T,U,et,lt):n.vertexAttribPointer(w,T,U,$,et,lt)}function M(w,T,U,$){x();const et=$.attributes,lt=U.getAttributes(),q=T.defaultAttributeValues;for(const it in lt){const W=lt[it];if(W.location>=0){let mt=et[it];if(mt===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(mt=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(mt=w.instanceColor)),mt!==void 0){const wt=mt.normalized,Mt=mt.itemSize,Ft=t.get(mt);if(Ft===void 0)continue;const Ht=Ft.buffer,rt=Ft.type,pt=Ft.bytesPerElement,Tt=rt===n.INT||rt===n.UNSIGNED_INT||mt.gpuType===Mu;if(mt.isInterleavedBufferAttribute){const O=mt.data,ut=O.stride,st=mt.offset;if(O.isInstancedInterleavedBuffer){for(let dt=0;dt<W.locationSize;dt++)p(W.location+dt,O.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let dt=0;dt<W.locationSize;dt++)E(W.location+dt,Mt/W.locationSize,rt,wt,ut*pt,(st+Mt/W.locationSize*dt)*pt,Tt)}else{if(mt.isInstancedBufferAttribute){for(let O=0;O<W.locationSize;O++)p(W.location+O,mt.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let O=0;O<W.locationSize;O++)m(W.location+O);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let O=0;O<W.locationSize;O++)E(W.location+O,Mt/W.locationSize,rt,wt,Mt*pt,Mt/W.locationSize*O*pt,Tt)}}else if(q!==void 0){const wt=q[it];if(wt!==void 0)switch(wt.length){case 2:n.vertexAttrib2fv(W.location,wt);break;case 3:n.vertexAttrib3fv(W.location,wt);break;case 4:n.vertexAttrib4fv(W.location,wt);break;default:n.vertexAttrib1fv(W.location,wt)}}}}S()}function B(){G();for(const w in i){const T=i[w];for(const U in T){const $=T[U];for(const et in $)d($[et].object),delete $[et];delete T[U]}delete i[w]}}function I(w){if(i[w.id]===void 0)return;const T=i[w.id];for(const U in T){const $=T[U];for(const et in $)d($[et].object),delete $[et];delete T[U]}delete i[w.id]}function R(w){for(const T in i){const U=i[T];if(U[w.id]===void 0)continue;const $=U[w.id];for(const et in $)d($[et].object),delete $[et];delete U[w.id]}}function G(){tt(),r=!0,s!==o&&(s=o,l(s.object))}function tt(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:G,resetDefaultState:tt,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Lw(n,t,e){let i;function o(l){i=l}function s(l,d){n.drawArrays(i,l,d),e.update(d,i,1)}function r(l,d,u){u!==0&&(n.drawArraysInstanced(i,l,d,u),e.update(d,i,u))}function a(l,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,u);let f=0;for(let v=0;v<u;v++)f+=d[v];e.update(f,i,1)}function c(l,d,u,h){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<l.length;v++)r(l[v],d[v],h[v]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,d,0,h,0,u);let v=0;for(let x=0;x<u;x++)v+=d[x];for(let x=0;x<h.length;x++)e.update(v,i,h[x])}}this.setMode=o,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Dw(n,t,e,i){let o;function s(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");o=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function r(R){return!(R!==qn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const G=R===br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==to&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ki&&!G)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=v>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:B,maxSamples:I}}function Uw(n){const t=this;let e=null,i=0,o=!1,s=!1;const r=new Lo,a=new Ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||o;return o=h,i=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){const v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!o||v===null||v.length===0||s&&!m)s?d(null):l();else{const S=s?0:i,E=S*4;let M=p.clippingState||null;c.value=M,M=d(v,h,E,f);for(let B=0;B!==E;++B)M[B]=e[B];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,h,f,v){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,v!==!0||m===null){const p=f+x*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=f;E!==x;++E,M+=4)r.copy(u[E]).applyMatrix4(S,a),r.normal.toArray(m,M),m[M+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Nw(n){let t=new WeakMap;function e(r,a){return a===Pa?r.mapping=Ts:a===vl&&(r.mapping=As),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Pa||a===vl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Pr(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",o),e(l.texture,r.mapping)}else return null}}return r}function o(r){const a=r.target;a.removeEventListener("dispose",o);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Ep extends Sp{constructor(t=-1,e=1,i=1,o=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=i-t,r=i+t,a=o+e,c=o-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ds=4,oh=[.125,.215,.35,.446,.526,.582],No=20,Fc=new Ep,sh=new we;let Oc=null,Bc=0,zc=0,Gc=!1;const Do=(1+Math.sqrt(5))/2,rs=1/Do,rh=[new J(-Do,rs,0),new J(Do,rs,0),new J(-rs,0,Do),new J(rs,0,Do),new J(0,Do,-rs),new J(0,Do,rs),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class ah{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,o,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oc,Bc,zc),this._renderer.xr.enabled=Gc,t.scissorTest=!1,na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:br,format:qn,colorSpace:Mo,depthBuffer:!1},o=ch(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fw(s)),this._blurMaterial=Ow(s,t,e)}return o}_compileMaterial(t){const e=new _(this._lodPlanes[0],t);this._renderer.compile(e,Fc)}_sceneToCubeUV(t,e,i,o){const a=new Ye(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(sh),d.toneMapping=vo,d.autoClear=!1;const f=new eo({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),v=new _(new Mn,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(sh),x=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const E=this._cubeSize;na(o,S*E,p>2?E:0,E,E),d.setRenderTarget(o),x&&d.render(v,a),d.render(t,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=h,d.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===Ts||t.mapping===As;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const s=o?this._cubemapMaterial:this._equirectMaterial,r=new _(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;na(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Fc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=rh[(o-s-1)%rh.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,o,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,o,"latitudinal",s),this._halfBlur(r,t,i,i,o,"longitudinal",s)}_halfBlur(t,e,i,o,s,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new _(this._lodPlanes[o],l),h=l.uniforms,f=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*No-1),x=s/v,m=isFinite(s)?1+Math.floor(d*x):No;m>No&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${No}`);const p=[];let S=0;for(let R=0;R<No;++R){const G=R/x,tt=Math.exp(-G*G/2);p.push(tt),R===0?S+=tt:R<m&&(S+=2*tt)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=v,h.mipInt.value=E-i;const M=this._sizeLods[o],B=3*M*(o>E-ds?o-E+ds:0),I=4*(this._cubeSize-M);na(e,B,I,3*M,2*M),c.setRenderTarget(e),c.render(u,Fc)}}function Fw(n){const t=[],e=[],i=[];let o=n;const s=n-ds+1+oh.length;for(let r=0;r<s;r++){const a=Math.pow(2,o);e.push(a);let c=1/a;r>n-ds?c=oh[r-n+ds-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,v=6,x=3,m=2,p=1,S=new Float32Array(x*v*f),E=new Float32Array(m*v*f),M=new Float32Array(p*v*f);for(let I=0;I<f;I++){const R=I%3*2/3-1,G=I>2?0:-1,tt=[R,G,0,R+2/3,G,0,R+2/3,G+1,0,R,G,0,R+2/3,G+1,0,R,G+1,0];S.set(tt,x*v*I),E.set(h,m*v*I);const w=[I,I,I,I,I,I];M.set(w,p*v*I)}const B=new Tn;B.setAttribute("position",new Li(S,x)),B.setAttribute("uv",new Li(E,m)),B.setAttribute("faceIndex",new Li(M,p)),t.push(B),o>ds&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ch(n,t,e){const i=new Ho(n,t,e);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function na(n,t,e,i,o){n.viewport.set(t,e,i,o),n.scissor.set(t,e,i,o)}function Ow(n,t,e){const i=new Float32Array(No),o=new J(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:No,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:go,depthTest:!1,depthWrite:!1})}function lh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:go,depthTest:!1,depthWrite:!1})}function uh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:go,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function Bw(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pa||c===vl,d=c===Ts||c===As;if(l||d){let u=t.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new ah(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||d&&f&&o(f)?(e===null&&(e=new ah(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function o(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function zw(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const o=e(i);return o===null&&xa("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function Gw(n,t,e,i){const o={},s=new WeakMap;function r(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}h.removeEventListener("dispose",r),delete o[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return o[h.id]===!0||(h.addEventListener("dispose",r),o[h.id]=!0,e.memory.geometries++),h}function c(u){const h=u.attributes;for(const v in h)t.update(h[v],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const v in f){const x=f[v];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(u){const h=[],f=u.index,v=u.attributes.position;let x=0;if(f!==null){const S=f.array;x=f.version;for(let E=0,M=S.length;E<M;E+=3){const B=S[E+0],I=S[E+1],R=S[E+2];h.push(B,I,I,R,R,B)}}else if(v!==void 0){const S=v.array;x=v.version;for(let E=0,M=S.length/3-1;E<M;E+=3){const B=E+0,I=E+1,R=E+2;h.push(B,I,I,R,R,B)}}else return;const m=new(pp(h)?wp:xp)(h,1);m.version=x;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function Hw(n,t,e){let i;function o(h){i=h}let s,r;function a(h){s=h.type,r=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*r),e.update(f,i,1)}function l(h,f,v){v!==0&&(n.drawElementsInstanced(i,f,s,h*r,v),e.update(f,i,v))}function d(h,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];e.update(m,i,1)}function u(h,f,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/r,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,x,0,v);let p=0;for(let S=0;S<v;S++)p+=f[S];for(let S=0;S<x.length;S++)e.update(p,i,x[S])}}this.setMode=o,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function kw(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function Vw(n,t,e){const i=new WeakMap,o=new je;function s(r,a,c){const l=r.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let w=function(){G.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var f=w;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let B=a.attributes.position.count*M,I=1;B>t.maxTextureSize&&(I=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const R=new Float32Array(B*I*4*u),G=new gp(R,B,I,u);G.type=Ki,G.needsUpdate=!0;const tt=M*4;for(let T=0;T<u;T++){const U=p[T],$=S[T],et=E[T],lt=B*I*4*T;for(let q=0;q<U.count;q++){const it=q*tt;v===!0&&(o.fromBufferAttribute(U,q),R[lt+it+0]=o.x,R[lt+it+1]=o.y,R[lt+it+2]=o.z,R[lt+it+3]=0),x===!0&&(o.fromBufferAttribute($,q),R[lt+it+4]=o.x,R[lt+it+5]=o.y,R[lt+it+6]=o.z,R[lt+it+7]=0),m===!0&&(o.fromBufferAttribute(et,q),R[lt+it+8]=o.x,R[lt+it+9]=o.y,R[lt+it+10]=o.z,R[lt+it+11]=et.itemSize===4?o.w:1)}}h={count:u,texture:G,size:new ne(B,I)},i.set(a,h),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let v=0;for(let m=0;m<l.length;m++)v+=l[m];const x=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ww(n,t,e,i){let o=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,u=t.get(c,d);if(o.get(u)!==l&&(t.update(u),o.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),o.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),o.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;o.get(h)!==l&&(h.update(),o.set(h,l))}return u}function r(){o=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}class Tp extends Un{constructor(t,e,i,o,s,r,a,c,l,d=ys){if(d!==ys&&d!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===ys&&(i=Go),i===void 0&&d===Rs&&(i=Ps),super(null,o,s,r,a,c,d,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:di,this.minFilter=c!==void 0?c:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ap=new Un,dh=new Tp(1,1),Pp=new gp,Rp=new L_,Cp=new Cu,hh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function Us(n,t,e){const i=n[0];if(i<=0||i>0)return n;const o=t*e;let s=hh[o];if(s===void 0&&(s=new Float32Array(o),hh[o]=s),t!==0){i.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(s,a)}return s}function _n(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function yn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Za(n,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xw(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;n.uniform2fv(this.addr,t),yn(e,t)}}function jw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;n.uniform3fv(this.addr,t),yn(e,t)}}function Yw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;n.uniform4fv(this.addr,t),yn(e,t)}}function $w(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_n(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,i))return;gh.set(i),n.uniformMatrix2fv(this.addr,!1,gh),yn(e,i)}}function Kw(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_n(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,i))return;mh.set(i),n.uniformMatrix3fv(this.addr,!1,mh),yn(e,i)}}function Zw(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_n(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,i))return;ph.set(i),n.uniformMatrix4fv(this.addr,!1,ph),yn(e,i)}}function Jw(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;n.uniform2iv(this.addr,t),yn(e,t)}}function tM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;n.uniform3iv(this.addr,t),yn(e,t)}}function eM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;n.uniform4iv(this.addr,t),yn(e,t)}}function nM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function iM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;n.uniform2uiv(this.addr,t),yn(e,t)}}function oM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;n.uniform3uiv(this.addr,t),yn(e,t)}}function sM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;n.uniform4uiv(this.addr,t),yn(e,t)}}function rM(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let s;this.type===n.SAMPLER_2D_SHADOW?(dh.compareFunction=fp,s=dh):s=Ap,e.setTexture2D(t||s,o)}function aM(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||Rp,o)}function cM(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||Cp,o)}function lM(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||Pp,o)}function uM(n){switch(n){case 5126:return Xw;case 35664:return qw;case 35665:return jw;case 35666:return Yw;case 35674:return $w;case 35675:return Kw;case 35676:return Zw;case 5124:case 35670:return Jw;case 35667:case 35671:return Qw;case 35668:case 35672:return tM;case 35669:case 35673:return eM;case 5125:return nM;case 36294:return iM;case 36295:return oM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return lM}}function dM(n,t){n.uniform1fv(this.addr,t)}function hM(n,t){const e=Us(t,this.size,2);n.uniform2fv(this.addr,e)}function fM(n,t){const e=Us(t,this.size,3);n.uniform3fv(this.addr,e)}function pM(n,t){const e=Us(t,this.size,4);n.uniform4fv(this.addr,e)}function mM(n,t){const e=Us(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function gM(n,t){const e=Us(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function vM(n,t){const e=Us(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _M(n,t){n.uniform1iv(this.addr,t)}function yM(n,t){n.uniform2iv(this.addr,t)}function xM(n,t){n.uniform3iv(this.addr,t)}function wM(n,t){n.uniform4iv(this.addr,t)}function MM(n,t){n.uniform1uiv(this.addr,t)}function SM(n,t){n.uniform2uiv(this.addr,t)}function bM(n,t){n.uniform3uiv(this.addr,t)}function EM(n,t){n.uniform4uiv(this.addr,t)}function TM(n,t,e){const i=this.cache,o=t.length,s=Za(e,o);_n(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let r=0;r!==o;++r)e.setTexture2D(t[r]||Ap,s[r])}function AM(n,t,e){const i=this.cache,o=t.length,s=Za(e,o);_n(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let r=0;r!==o;++r)e.setTexture3D(t[r]||Rp,s[r])}function PM(n,t,e){const i=this.cache,o=t.length,s=Za(e,o);_n(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let r=0;r!==o;++r)e.setTextureCube(t[r]||Cp,s[r])}function RM(n,t,e){const i=this.cache,o=t.length,s=Za(e,o);_n(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let r=0;r!==o;++r)e.setTexture2DArray(t[r]||Pp,s[r])}function CM(n){switch(n){case 5126:return dM;case 35664:return hM;case 35665:return fM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return vM;case 5124:case 35670:return _M;case 35667:case 35671:return yM;case 35668:case 35672:return xM;case 35669:case 35673:return wM;case 5125:return MM;case 36294:return SM;case 36295:return bM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return RM}}class IM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=uM(e.type)}}class LM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=CM(e.type)}}class DM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let s=0,r=o.length;s!==r;++s){const a=o[s];a.setValue(t,e[a.id],i)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function vh(n,t){n.seq.push(t),n.map[t.id]=t}function UM(n,t,e){const i=n.name,o=i.length;for(Hc.lastIndex=0;;){const s=Hc.exec(i),r=Hc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===o){vh(e,l===void 0?new IM(a,n,t):new LM(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new DM(a),vh(e,u)),e=u}}}class wa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=t.getActiveUniform(e,o),r=t.getUniformLocation(e,s.name);UM(s,r,this)}}setValue(t,e,i,o){const s=this.map[e];s!==void 0&&s.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let s=0,r=e.length;s!==r;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,s=t.length;o!==s;++o){const r=t[o];r.id in e&&i.push(r)}return i}}function _h(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const NM=37297;let FM=0;function OM(n,t){const e=n.split(`
`),i=[],o=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=o;r<s;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function BM(n){const t=Ge.getPrimaries(Ge.workingColorSpace),e=Ge.getPrimaries(n);let i;switch(t===e?i="":t===Ia&&e===Ca?i="LinearDisplayP3ToLinearSRGB":t===Ca&&e===Ia&&(i="LinearSRGBToLinearDisplayP3"),n){case Mo:case Ya:return[i,"LinearTransferOETF"];case vi:case Pu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function yh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),o=n.getShaderInfoLog(t).trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+OM(n.getShaderSource(t),r)}else return o}function zM(n,t){const e=BM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function GM(n,t){let e;switch(t){case Vv:e="Linear";break;case Wv:e="Reinhard";break;case Xv:e="Cineon";break;case qv:e="ACESFilmic";break;case Yv:e="AgX";break;case $v:e="Neutral";break;case jv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ia=new J;function HM(){Ge.getLuminanceCoefficients(ia);const n=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function VM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function WM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const s=n.getActiveAttrib(t,o),r=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Ys(n){return n!==""}function xh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(n){return n.replace(XM,jM)}const qM=new Map;function jM(n,t){let e=Re[t];if(e===void 0){const i=qM.get(t);if(i!==void 0)e=Re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xl(e)}const YM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(n){return n.replace(YM,$M)}function $M(n,t,e,i){let o="";for(let s=parseInt(t);s<parseInt(e);s++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function Sh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function KM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mv?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ji&&(t="SHADOWMAP_TYPE_VSM"),t}function ZM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function JM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function QM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tp:t="ENVMAP_BLENDING_MULTIPLY";break;case Hv:t="ENVMAP_BLENDING_MIX";break;case kv:t="ENVMAP_BLENDING_ADD";break}return t}function t1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function e1(n,t,e,i){const o=n.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=KM(e),l=ZM(e),d=JM(e),u=QM(e),h=t1(e),f=kM(e),v=VM(s),x=o.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vo?"#define TONE_MAPPING":"",e.toneMapping!==vo?Re.tonemapping_pars_fragment:"",e.toneMapping!==vo?GM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,zM("linearToOutputTexel",e.outputColorSpace),HM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),r=Xl(r),r=xh(r,e),r=wh(r,e),a=Xl(a),a=xh(a,e),a=wh(a,e),r=Mh(r),a=Mh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+r,M=S+p+a,B=_h(o,o.VERTEX_SHADER,E),I=_h(o,o.FRAGMENT_SHADER,M);o.attachShader(x,B),o.attachShader(x,I),e.index0AttributeName!==void 0?o.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function R(T){if(n.debug.checkShaderErrors){const U=o.getProgramInfoLog(x).trim(),$=o.getShaderInfoLog(B).trim(),et=o.getShaderInfoLog(I).trim();let lt=!0,q=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(lt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,x,B,I);else{const it=yh(o,B,"vertex"),W=yh(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+it+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):($===""||et==="")&&(q=!1);q&&(T.diagnostics={runnable:lt,programLog:U,vertexShader:{log:$,prefix:m},fragmentShader:{log:et,prefix:p}})}o.deleteShader(B),o.deleteShader(I),G=new wa(o,x),tt=WM(o,x)}let G;this.getUniforms=function(){return G===void 0&&R(this),G};let tt;this.getAttributes=function(){return tt===void 0&&R(this),tt};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(x,NM)),w},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=FM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=I,this}let n1=0;class i1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new o1(t),e.set(t,i)),i}}class o1{constructor(t){this.id=n1++,this.code=t,this.usedTimes=0}}function s1(n,t,e,i,o,s,r){const a=new _p,c=new i1,l=new Set,d=[],u=o.logarithmicDepthBuffer,h=o.reverseDepthBuffer,f=o.vertexTextures;let v=o.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,T,U,$,et){const lt=$.fog,q=et.geometry,it=w.isMeshStandardMaterial?$.environment:null,W=(w.isMeshStandardMaterial?e:t).get(w.envMap||it),mt=W&&W.mapping===ja?W.image.height:null,wt=x[w.type];w.precision!==null&&(v=o.getMaxPrecision(w.precision),v!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ft=Mt!==void 0?Mt.length:0;let Ht=0;q.morphAttributes.position!==void 0&&(Ht=1),q.morphAttributes.normal!==void 0&&(Ht=2),q.morphAttributes.color!==void 0&&(Ht=3);let rt,pt,Tt,O;if(wt){const ce=Ci[wt];rt=ce.vertexShader,pt=ce.fragmentShader}else rt=w.vertexShader,pt=w.fragmentShader,c.update(w),Tt=c.getVertexShaderID(w),O=c.getFragmentShaderID(w);const ut=n.getRenderTarget(),st=et.isInstancedMesh===!0,dt=et.isBatchedMesh===!0,yt=!!w.map,ot=!!w.matcap,g=!!W,P=!!w.aoMap,L=!!w.lightMap,F=!!w.bumpMap,N=!!w.normalMap,K=!!w.displacementMap,Z=!!w.emissiveMap,b=!!w.metalnessMap,y=!!w.roughnessMap,C=w.anisotropy>0,Y=w.clearcoat>0,V=w.dispersion>0,k=w.iridescence>0,ft=w.sheen>0,ct=w.transmission>0,vt=C&&!!w.anisotropyMap,bt=Y&&!!w.clearcoatMap,ht=Y&&!!w.clearcoatNormalMap,_t=Y&&!!w.clearcoatRoughnessMap,Dt=k&&!!w.iridescenceMap,Bt=k&&!!w.iridescenceThicknessMap,Rt=ft&&!!w.sheenColorMap,$t=ft&&!!w.sheenRoughnessMap,Gt=!!w.specularMap,Zt=!!w.specularColorMap,H=!!w.specularIntensityMap,xt=ct&&!!w.transmissionMap,nt=ct&&!!w.thicknessMap,Q=!!w.gradientMap,St=!!w.alphaMap,Et=w.alphaTest>0,Xt=!!w.alphaHash,se=!!w.extensions;let re=vo;w.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(re=n.toneMapping);const ue={shaderID:wt,shaderType:w.type,shaderName:w.name,vertexShader:rt,fragmentShader:pt,defines:w.defines,customVertexShaderID:Tt,customFragmentShaderID:O,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,batching:dt,batchingColor:dt&&et._colorsTexture!==null,instancing:st,instancingColor:st&&et.instanceColor!==null,instancingMorph:st&&et.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Mo,alphaToCoverage:!!w.alphaToCoverage,map:yt,matcap:ot,envMap:g,envMapMode:g&&W.mapping,envMapCubeUVHeight:mt,aoMap:P,lightMap:L,bumpMap:F,normalMap:N,displacementMap:f&&K,emissiveMap:Z,normalMapObjectSpace:N&&w.normalMapType===Qv,normalMapTangentSpace:N&&w.normalMapType===hp,metalnessMap:b,roughnessMap:y,anisotropy:C,anisotropyMap:vt,clearcoat:Y,clearcoatMap:bt,clearcoatNormalMap:ht,clearcoatRoughnessMap:_t,dispersion:V,iridescence:k,iridescenceMap:Dt,iridescenceThicknessMap:Bt,sheen:ft,sheenColorMap:Rt,sheenRoughnessMap:$t,specularMap:Gt,specularColorMap:Zt,specularIntensityMap:H,transmission:ct,transmissionMap:xt,thicknessMap:nt,gradientMap:Q,opaque:w.transparent===!1&&w.blending===_s&&w.alphaToCoverage===!1,alphaMap:St,alphaTest:Et,alphaHash:Xt,combine:w.combine,mapUv:yt&&m(w.map.channel),aoMapUv:P&&m(w.aoMap.channel),lightMapUv:L&&m(w.lightMap.channel),bumpMapUv:F&&m(w.bumpMap.channel),normalMapUv:N&&m(w.normalMap.channel),displacementMapUv:K&&m(w.displacementMap.channel),emissiveMapUv:Z&&m(w.emissiveMap.channel),metalnessMapUv:b&&m(w.metalnessMap.channel),roughnessMapUv:y&&m(w.roughnessMap.channel),anisotropyMapUv:vt&&m(w.anisotropyMap.channel),clearcoatMapUv:bt&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:$t&&m(w.sheenRoughnessMap.channel),specularMapUv:Gt&&m(w.specularMap.channel),specularColorMapUv:Zt&&m(w.specularColorMap.channel),specularIntensityMapUv:H&&m(w.specularIntensityMap.channel),transmissionMapUv:xt&&m(w.transmissionMap.channel),thicknessMapUv:nt&&m(w.thicknessMap.channel),alphaMapUv:St&&m(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(N||C),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!q.attributes.uv&&(yt||St),fog:!!lt,useFog:w.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:h,skinning:et.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Ht,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:yt&&w.map.isVideoTexture===!0&&Ge.getTransfer(w.map.colorSpace)===nn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ie,flipSided:w.side===Jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:se&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&w.extensions.multiDraw===!0||dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function S(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)T.push(U),T.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(E(T,w),M(T,w),T.push(n.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function E(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function M(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),w.push(a.mask)}function B(w){const T=x[w.type];let U;if(T){const $=Ci[T];U=W_.clone($.uniforms)}else U=w.uniforms;return U}function I(w,T){let U;for(let $=0,et=d.length;$<et;$++){const lt=d[$];if(lt.cacheKey===T){U=lt,++U.usedTimes;break}}return U===void 0&&(U=new e1(n,T,w,s),d.push(U)),U}function R(w){if(--w.usedTimes===0){const T=d.indexOf(w);d[T]=d[d.length-1],d.pop(),w.destroy()}}function G(w){c.remove(w)}function tt(){c.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:B,acquireProgram:I,releaseProgram:R,releaseShaderCache:G,programs:d,dispose:tt}}function r1(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function o(r,a,c){n.get(r)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:o,dispose:s}}function a1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function bh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Eh(){const n=[];let t=0;const e=[],i=[],o=[];function s(){t=0,e.length=0,i.length=0,o.length=0}function r(u,h,f,v,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,h,f,v,x,m){const p=r(u,h,f,v,x,m);f.transmission>0?i.push(p):f.transparent===!0?o.push(p):e.push(p)}function c(u,h,f,v,x,m){const p=r(u,h,f,v,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?o.unshift(p):e.unshift(p)}function l(u,h){e.length>1&&e.sort(u||a1),i.length>1&&i.sort(h||bh),o.length>1&&o.sort(h||bh)}function d(){for(let u=t,h=n.length;u<h;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:o,init:s,push:a,unshift:c,finish:d,sort:l}}function c1(){let n=new WeakMap;function t(i,o){const s=n.get(i);let r;return s===void 0?(r=new Eh,n.set(i,[r])):o>=s.length?(r=new Eh,s.push(r)):r=s[o],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function l1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new we};break;case"SpotLight":e={position:new J,direction:new J,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new we,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new we,groundColor:new we};break;case"RectAreaLight":e={color:new we,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function u1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let d1=0;function h1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function f1(n){const t=new l1,e=u1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new J);const o=new J,s=new sn,r=new sn;function a(l){let d=0,u=0,h=0;for(let tt=0;tt<9;tt++)i.probe[tt].set(0,0,0);let f=0,v=0,x=0,m=0,p=0,S=0,E=0,M=0,B=0,I=0,R=0;l.sort(h1);for(let tt=0,w=l.length;tt<w;tt++){const T=l[tt],U=T.color,$=T.intensity,et=T.distance,lt=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=U.r*$,u+=U.g*$,h+=U.b*$;else if(T.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(T.sh.coefficients[q],$);R++}else if(T.isDirectionalLight){const q=t.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const it=T.shadow,W=e.get(T);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=lt,i.directionalShadowMatrix[f]=T.shadow.matrix,S++}i.directional[f]=q,f++}else if(T.isSpotLight){const q=t.get(T);q.position.setFromMatrixPosition(T.matrixWorld),q.color.copy(U).multiplyScalar($),q.distance=et,q.coneCos=Math.cos(T.angle),q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),q.decay=T.decay,i.spot[x]=q;const it=T.shadow;if(T.map&&(i.spotLightMap[B]=T.map,B++,it.updateMatrices(T),T.castShadow&&I++),i.spotLightMatrix[x]=it.matrix,T.castShadow){const W=e.get(T);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=lt,M++}x++}else if(T.isRectAreaLight){const q=t.get(T);q.color.copy(U).multiplyScalar($),q.halfWidth.set(T.width*.5,0,0),q.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=q,m++}else if(T.isPointLight){const q=t.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity),q.distance=T.distance,q.decay=T.decay,T.castShadow){const it=T.shadow,W=e.get(T);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,W.shadowCameraNear=it.camera.near,W.shadowCameraFar=it.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=lt,i.pointShadowMatrix[v]=T.shadow.matrix,E++}i.point[v]=q,v++}else if(T.isHemisphereLight){const q=t.get(T);q.skyColor.copy(T.color).multiplyScalar($),q.groundColor.copy(T.groundColor).multiplyScalar($),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const G=i.hash;(G.directionalLength!==f||G.pointLength!==v||G.spotLength!==x||G.rectAreaLength!==m||G.hemiLength!==p||G.numDirectionalShadows!==S||G.numPointShadows!==E||G.numSpotShadows!==M||G.numSpotMaps!==B||G.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+B-I,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,G.directionalLength=f,G.pointLength=v,G.spotLength=x,G.rectAreaLength=m,G.hemiLength=p,G.numDirectionalShadows=S,G.numPointShadows=E,G.numSpotShadows=M,G.numSpotMaps=B,G.numLightProbes=R,i.version=d1++)}function c(l,d){let u=0,h=0,f=0,v=0,x=0;const m=d.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const E=l[p];if(E.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(m),u++}else if(E.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),r.identity(),s.copy(E.matrixWorld),s.premultiply(m),r.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),v++}else if(E.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Th(n){const t=new f1(n),e=[],i=[];function o(d){l.camera=d,e.length=0,i.length=0}function s(d){e.push(d)}function r(d){i.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:r}}function p1(n){let t=new WeakMap;function e(o,s=0){const r=t.get(o);let a;return r===void 0?(a=new Th(n),t.set(o,[a])):s>=r.length?(a=new Th(n),r.push(a)):a=r[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class m1 extends Ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class g1 extends Ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const v1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_1=`uniform sampler2D shadow_pass;
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
}`;function y1(n,t,e){let i=new Iu;const o=new ne,s=new ne,r=new je,a=new m1({depthPacking:Jv}),c=new g1,l={},d=e.maxTextureSize,u={[yo]:Jn,[Jn]:yo,[Ie]:Ie},h=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:v1,fragmentShader:_1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const v=new Tn;v.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qf;let p=this.type;this.render=function(I,R,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const tt=n.getRenderTarget(),w=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),U=n.state;U.setBlending(go),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const $=p!==ji&&this.type===ji,et=p===ji&&this.type!==ji;for(let lt=0,q=I.length;lt<q;lt++){const it=I[lt],W=it.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const mt=W.getFrameExtents();if(o.multiply(mt),s.copy(W.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(s.x=Math.floor(d/mt.x),o.x=s.x*mt.x,W.mapSize.x=s.x),o.y>d&&(s.y=Math.floor(d/mt.y),o.y=s.y*mt.y,W.mapSize.y=s.y)),W.map===null||$===!0||et===!0){const Mt=this.type!==ji?{minFilter:di,magFilter:di}:{};W.map!==null&&W.map.dispose(),W.map=new Ho(o.x,o.y,Mt),W.map.texture.name=it.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const wt=W.getViewportCount();for(let Mt=0;Mt<wt;Mt++){const Ft=W.getViewport(Mt);r.set(s.x*Ft.x,s.y*Ft.y,s.x*Ft.z,s.y*Ft.w),U.viewport(r),W.updateMatrices(it,Mt),i=W.getFrustum(),M(R,G,W.camera,it,this.type)}W.isPointLightShadow!==!0&&this.type===ji&&S(W,G),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(tt,w,T)};function S(I,R){const G=t.update(x);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ho(o.x,o.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,G,h,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,G,f,x,null)}function E(I,R,G,tt){let w=null;const T=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(T!==void 0)w=T;else if(w=G.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const U=w.uuid,$=R.uuid;let et=l[U];et===void 0&&(et={},l[U]=et);let lt=et[$];lt===void 0&&(lt=w.clone(),et[$]=lt,R.addEventListener("dispose",B)),w=lt}if(w.visible=R.visible,w.wireframe=R.wireframe,tt===ji?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const U=n.properties.get(w);U.light=G}return w}function M(I,R,G,tt,w){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===ji)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const $=t.update(I),et=I.material;if(Array.isArray(et)){const lt=$.groups;for(let q=0,it=lt.length;q<it;q++){const W=lt[q],mt=et[W.materialIndex];if(mt&&mt.visible){const wt=E(I,mt,tt,w);I.onBeforeShadow(n,I,R,G,$,wt,W),n.renderBufferDirect(G,null,$,wt,I,W),I.onAfterShadow(n,I,R,G,$,wt,W)}}}else if(et.visible){const lt=E(I,et,tt,w);I.onBeforeShadow(n,I,R,G,$,lt,null),n.renderBufferDirect(G,null,$,lt,I,null),I.onAfterShadow(n,I,R,G,$,lt,null)}}const U=I.children;for(let $=0,et=U.length;$<et;$++)M(U[$],R,G,tt,w)}function B(I){I.target.removeEventListener("dispose",B);for(const G in l){const tt=l[G],w=I.target.uuid;w in tt&&(tt[w].dispose(),delete tt[w])}}}const x1={[ul]:dl,[hl]:ml,[fl]:gl,[Es]:pl,[dl]:ul,[ml]:hl,[gl]:fl,[pl]:Es};function w1(n){function t(){let H=!1;const xt=new je;let nt=null;const Q=new je(0,0,0,0);return{setMask:function(St){nt!==St&&!H&&(n.colorMask(St,St,St,St),nt=St)},setLocked:function(St){H=St},setClear:function(St,Et,Xt,se,re){re===!0&&(St*=se,Et*=se,Xt*=se),xt.set(St,Et,Xt,se),Q.equals(xt)===!1&&(n.clearColor(St,Et,Xt,se),Q.copy(xt))},reset:function(){H=!1,nt=null,Q.set(-1,0,0,0)}}}function e(){let H=!1,xt=!1,nt=null,Q=null,St=null;return{setReversed:function(Et){xt=Et},setTest:function(Et){Et?Tt(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(Et){nt!==Et&&!H&&(n.depthMask(Et),nt=Et)},setFunc:function(Et){if(xt&&(Et=x1[Et]),Q!==Et){switch(Et){case ul:n.depthFunc(n.NEVER);break;case dl:n.depthFunc(n.ALWAYS);break;case hl:n.depthFunc(n.LESS);break;case Es:n.depthFunc(n.LEQUAL);break;case fl:n.depthFunc(n.EQUAL);break;case pl:n.depthFunc(n.GEQUAL);break;case ml:n.depthFunc(n.GREATER);break;case gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=Et}},setLocked:function(Et){H=Et},setClear:function(Et){St!==Et&&(n.clearDepth(Et),St=Et)},reset:function(){H=!1,nt=null,Q=null,St=null}}}function i(){let H=!1,xt=null,nt=null,Q=null,St=null,Et=null,Xt=null,se=null,re=null;return{setTest:function(ue){H||(ue?Tt(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(ue){xt!==ue&&!H&&(n.stencilMask(ue),xt=ue)},setFunc:function(ue,ce,me){(nt!==ue||Q!==ce||St!==me)&&(n.stencilFunc(ue,ce,me),nt=ue,Q=ce,St=me)},setOp:function(ue,ce,me){(Et!==ue||Xt!==ce||se!==me)&&(n.stencilOp(ue,ce,me),Et=ue,Xt=ce,se=me)},setLocked:function(ue){H=ue},setClear:function(ue){re!==ue&&(n.clearStencil(ue),re=ue)},reset:function(){H=!1,xt=null,nt=null,Q=null,St=null,Et=null,Xt=null,se=null,re=null}}}const o=new t,s=new e,r=new i,a=new WeakMap,c=new WeakMap;let l={},d={},u=new WeakMap,h=[],f=null,v=!1,x=null,m=null,p=null,S=null,E=null,M=null,B=null,I=new we(0,0,0),R=0,G=!1,tt=null,w=null,T=null,U=null,$=null;const et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,q=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(it)[1]),lt=q>=1):it.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),lt=q>=2);let W=null,mt={};const wt=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),Ft=new je().fromArray(wt),Ht=new je().fromArray(Mt);function rt(H,xt,nt,Q){const St=new Uint8Array(4),Et=n.createTexture();n.bindTexture(H,Et),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<nt;Xt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(xt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return Et}const pt={};pt[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),pt[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pt[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),r.setClear(0),Tt(n.DEPTH_TEST),s.setFunc(Es),L(!1),F(Dd),Tt(n.CULL_FACE),g(go);function Tt(H){l[H]!==!0&&(n.enable(H),l[H]=!0)}function O(H){l[H]!==!1&&(n.disable(H),l[H]=!1)}function ut(H,xt){return d[H]!==xt?(n.bindFramebuffer(H,xt),d[H]=xt,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=xt),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function st(H,xt){let nt=h,Q=!1;if(H){nt=u.get(xt),nt===void 0&&(nt=[],u.set(xt,nt));const St=H.textures;if(nt.length!==St.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,Xt=St.length;Et<Xt;Et++)nt[Et]=n.COLOR_ATTACHMENT0+Et;nt.length=St.length,Q=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,Q=!0);Q&&n.drawBuffers(nt)}function dt(H){return f!==H?(n.useProgram(H),f=H,!0):!1}const yt={[Uo]:n.FUNC_ADD,[bv]:n.FUNC_SUBTRACT,[Ev]:n.FUNC_REVERSE_SUBTRACT};yt[Tv]=n.MIN,yt[Av]=n.MAX;const ot={[Pv]:n.ZERO,[Rv]:n.ONE,[Cv]:n.SRC_COLOR,[cl]:n.SRC_ALPHA,[Fv]:n.SRC_ALPHA_SATURATE,[Uv]:n.DST_COLOR,[Lv]:n.DST_ALPHA,[Iv]:n.ONE_MINUS_SRC_COLOR,[ll]:n.ONE_MINUS_SRC_ALPHA,[Nv]:n.ONE_MINUS_DST_COLOR,[Dv]:n.ONE_MINUS_DST_ALPHA,[Ov]:n.CONSTANT_COLOR,[Bv]:n.ONE_MINUS_CONSTANT_COLOR,[zv]:n.CONSTANT_ALPHA,[Gv]:n.ONE_MINUS_CONSTANT_ALPHA};function g(H,xt,nt,Q,St,Et,Xt,se,re,ue){if(H===go){v===!0&&(O(n.BLEND),v=!1);return}if(v===!1&&(Tt(n.BLEND),v=!0),H!==Sv){if(H!==x||ue!==G){if((m!==Uo||E!==Uo)&&(n.blendEquation(n.FUNC_ADD),m=Uo,E=Uo),ue)switch(H){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ud:n.blendFunc(n.ONE,n.ONE);break;case Nd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ud:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}p=null,S=null,M=null,B=null,I.set(0,0,0),R=0,x=H,G=ue}return}St=St||xt,Et=Et||nt,Xt=Xt||Q,(xt!==m||St!==E)&&(n.blendEquationSeparate(yt[xt],yt[St]),m=xt,E=St),(nt!==p||Q!==S||Et!==M||Xt!==B)&&(n.blendFuncSeparate(ot[nt],ot[Q],ot[Et],ot[Xt]),p=nt,S=Q,M=Et,B=Xt),(se.equals(I)===!1||re!==R)&&(n.blendColor(se.r,se.g,se.b,re),I.copy(se),R=re),x=H,G=!1}function P(H,xt){H.side===Ie?O(n.CULL_FACE):Tt(n.CULL_FACE);let nt=H.side===Jn;xt&&(nt=!nt),L(nt),H.blending===_s&&H.transparent===!1?g(go):g(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),o.setMask(H.colorWrite);const Q=H.stencilWrite;r.setTest(Q),Q&&(r.setMask(H.stencilWriteMask),r.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),r.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),K(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Tt(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(H){tt!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),tt=H)}function F(H){H!==xv?(Tt(n.CULL_FACE),H!==w&&(H===Dd?n.cullFace(n.BACK):H===wv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),w=H}function N(H){H!==T&&(lt&&n.lineWidth(H),T=H)}function K(H,xt,nt){H?(Tt(n.POLYGON_OFFSET_FILL),(U!==xt||$!==nt)&&(n.polygonOffset(xt,nt),U=xt,$=nt)):O(n.POLYGON_OFFSET_FILL)}function Z(H){H?Tt(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function b(H){H===void 0&&(H=n.TEXTURE0+et-1),W!==H&&(n.activeTexture(H),W=H)}function y(H,xt,nt){nt===void 0&&(W===null?nt=n.TEXTURE0+et-1:nt=W);let Q=mt[nt];Q===void 0&&(Q={type:void 0,texture:void 0},mt[nt]=Q),(Q.type!==H||Q.texture!==xt)&&(W!==nt&&(n.activeTexture(nt),W=nt),n.bindTexture(H,xt||pt[H]),Q.type=H,Q.texture=xt)}function C(){const H=mt[W];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function bt(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Bt(H){Ft.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ft.copy(H))}function Rt(H){Ht.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ht.copy(H))}function $t(H,xt){let nt=c.get(xt);nt===void 0&&(nt=new WeakMap,c.set(xt,nt));let Q=nt.get(H);Q===void 0&&(Q=n.getUniformBlockIndex(xt,H.name),nt.set(H,Q))}function Gt(H,xt){const Q=c.get(xt).get(H);a.get(xt)!==Q&&(n.uniformBlockBinding(xt,Q,H.__bindingPointIndex),a.set(xt,Q))}function Zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},W=null,mt={},d={},u=new WeakMap,h=[],f=null,v=!1,x=null,m=null,p=null,S=null,E=null,M=null,B=null,I=new we(0,0,0),R=0,G=!1,tt=null,w=null,T=null,U=null,$=null,Ft.set(0,0,n.canvas.width,n.canvas.height),Ht.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),r.reset()}return{buffers:{color:o,depth:s,stencil:r},enable:Tt,disable:O,bindFramebuffer:ut,drawBuffers:st,useProgram:dt,setBlending:g,setMaterial:P,setFlipSided:L,setCullFace:F,setLineWidth:N,setPolygonOffset:K,setScissorTest:Z,activeTexture:b,bindTexture:y,unbindTexture:C,compressedTexImage2D:Y,compressedTexImage3D:V,texImage2D:_t,texImage3D:Dt,updateUBOMapping:$t,uniformBlockBinding:Gt,texStorage2D:bt,texStorage3D:ht,texSubImage2D:k,texSubImage3D:ft,compressedTexSubImage2D:ct,compressedTexSubImage3D:vt,scissor:Bt,viewport:Rt,reset:Zt}}function Ah(n,t,e,i){const o=M1(i);switch(e){case sp:return n*t;case ap:return n*t;case cp:return n*t*2;case lp:return n*t/o.components*o.byteLength;case Eu:return n*t/o.components*o.byteLength;case up:return n*t*2/o.components*o.byteLength;case Tu:return n*t*2/o.components*o.byteLength;case rp:return n*t*3/o.components*o.byteLength;case qn:return n*t*4/o.components*o.byteLength;case Au:return n*t*4/o.components*o.byteLength;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case va:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:case Ml:return Math.max(n,16)*Math.max(t,8)/4;case yl:case wl:return Math.max(n,8)*Math.max(t,8)/2;case Sl:case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ya:case Gl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case dp:case kl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Vl:case Wl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function M1(n){switch(n){case to:case np:return{byteLength:1,components:1};case mr:case ip:case br:return{byteLength:2,components:1};case Su:case bu:return{byteLength:2,components:4};case Go:case Mu:case Ki:return{byteLength:4,components:1};case op:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function S1(n,t,e,i,o,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,y){return f?new OffscreenCanvas(b,y):vr("canvas")}function x(b,y,C){let Y=1;const V=Z(b);if((V.width>C||V.height>C)&&(Y=C/Math.max(V.width,V.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const k=Math.floor(Y*V.width),ft=Math.floor(Y*V.height);u===void 0&&(u=v(k,ft));const ct=y?v(k,ft):u;return ct.width=k,ct.height=ft,ct.getContext("2d").drawImage(b,0,0,k,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+k+"x"+ft+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==di&&b.minFilter!==yi}function p(b){n.generateMipmap(b)}function S(b,y,C,Y,V=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let k=y;if(y===n.RED&&(C===n.FLOAT&&(k=n.R32F),C===n.HALF_FLOAT&&(k=n.R16F),C===n.UNSIGNED_BYTE&&(k=n.R8)),y===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.R8UI),C===n.UNSIGNED_SHORT&&(k=n.R16UI),C===n.UNSIGNED_INT&&(k=n.R32UI),C===n.BYTE&&(k=n.R8I),C===n.SHORT&&(k=n.R16I),C===n.INT&&(k=n.R32I)),y===n.RG&&(C===n.FLOAT&&(k=n.RG32F),C===n.HALF_FLOAT&&(k=n.RG16F),C===n.UNSIGNED_BYTE&&(k=n.RG8)),y===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RG8UI),C===n.UNSIGNED_SHORT&&(k=n.RG16UI),C===n.UNSIGNED_INT&&(k=n.RG32UI),C===n.BYTE&&(k=n.RG8I),C===n.SHORT&&(k=n.RG16I),C===n.INT&&(k=n.RG32I)),y===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RGB8UI),C===n.UNSIGNED_SHORT&&(k=n.RGB16UI),C===n.UNSIGNED_INT&&(k=n.RGB32UI),C===n.BYTE&&(k=n.RGB8I),C===n.SHORT&&(k=n.RGB16I),C===n.INT&&(k=n.RGB32I)),y===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),C===n.UNSIGNED_INT&&(k=n.RGBA32UI),C===n.BYTE&&(k=n.RGBA8I),C===n.SHORT&&(k=n.RGBA16I),C===n.INT&&(k=n.RGBA32I)),y===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),y===n.RGBA){const ft=V?Ra:Ge.getTransfer(Y);C===n.FLOAT&&(k=n.RGBA32F),C===n.HALF_FLOAT&&(k=n.RGBA16F),C===n.UNSIGNED_BYTE&&(k=ft===nn?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function E(b,y){let C;return b?y===null||y===Go||y===Ps?C=n.DEPTH24_STENCIL8:y===Ki?C=n.DEPTH32F_STENCIL8:y===mr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Go||y===Ps?C=n.DEPTH_COMPONENT24:y===Ki?C=n.DEPTH_COMPONENT32F:y===mr&&(C=n.DEPTH_COMPONENT16),C}function M(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==di&&b.minFilter!==yi?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function B(b){const y=b.target;y.removeEventListener("dispose",B),R(y),y.isVideoTexture&&d.delete(y)}function I(b){const y=b.target;y.removeEventListener("dispose",I),tt(y)}function R(b){const y=i.get(b);if(y.__webglInit===void 0)return;const C=b.source,Y=h.get(C);if(Y){const V=Y[y.__cacheKey];V.usedTimes--,V.usedTimes===0&&G(b),Object.keys(Y).length===0&&h.delete(C)}i.remove(b)}function G(b){const y=i.get(b);n.deleteTexture(y.__webglTexture);const C=b.source,Y=h.get(C);delete Y[y.__cacheKey],r.memory.textures--}function tt(b){const y=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let V=0;V<y.__webglFramebuffer[Y].length;V++)n.deleteFramebuffer(y.__webglFramebuffer[Y][V]);else n.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[Y]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const C=b.textures;for(let Y=0,V=C.length;Y<V;Y++){const k=i.get(C[Y]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),r.memory.textures--),i.remove(C[Y])}i.remove(b)}let w=0;function T(){w=0}function U(){const b=w;return b>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+o.maxTextures),w+=1,b}function $(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function et(b,y){const C=i.get(b);if(b.isVideoTexture&&N(b),b.isRenderTargetTexture===!1&&b.version>0&&C.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(C,b,y);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+y)}function lt(b,y){const C=i.get(b);if(b.version>0&&C.__version!==b.version){Ht(C,b,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+y)}function q(b,y){const C=i.get(b);if(b.version>0&&C.__version!==b.version){Ht(C,b,y);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+y)}function it(b,y){const C=i.get(b);if(b.version>0&&C.__version!==b.version){rt(C,b,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+y)}const W={[Qe]:n.REPEAT,[Fo]:n.CLAMP_TO_EDGE,[_l]:n.MIRRORED_REPEAT},mt={[di]:n.NEAREST,[Kv]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[yi]:n.LINEAR,[pc]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},wt={[t_]:n.NEVER,[r_]:n.ALWAYS,[e_]:n.LESS,[fp]:n.LEQUAL,[n_]:n.EQUAL,[s_]:n.GEQUAL,[i_]:n.GREATER,[o_]:n.NOTEQUAL};function Mt(b,y){if(y.type===Ki&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===yi||y.magFilter===pc||y.magFilter===Or||y.magFilter===wi||y.minFilter===yi||y.minFilter===pc||y.minFilter===Or||y.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,W[y.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,W[y.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,W[y.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,mt[y.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,mt[y.minFilter]),y.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,wt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===di||y.minFilter!==Or&&y.minFilter!==wi||y.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ft(b,y){let C=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",B));const Y=y.source;let V=h.get(Y);V===void 0&&(V={},h.set(Y,V));const k=$(y);if(k!==b.__cacheKey){V[k]===void 0&&(V[k]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,C=!0),V[k].usedTimes++;const ft=V[b.__cacheKey];ft!==void 0&&(V[b.__cacheKey].usedTimes--,ft.usedTimes===0&&G(y)),b.__cacheKey=k,b.__webglTexture=V[k].texture}return C}function Ht(b,y,C){let Y=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=n.TEXTURE_3D);const V=Ft(b,y),k=y.source;e.bindTexture(Y,b.__webglTexture,n.TEXTURE0+C);const ft=i.get(k);if(k.version!==ft.__version||V===!0){e.activeTexture(n.TEXTURE0+C);const ct=Ge.getPrimaries(Ge.workingColorSpace),vt=y.colorSpace===mo?null:Ge.getPrimaries(y.colorSpace),bt=y.colorSpace===mo||ct===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let ht=x(y.image,!1,o.maxTextureSize);ht=K(y,ht);const _t=s.convert(y.format,y.colorSpace),Dt=s.convert(y.type);let Bt=S(y.internalFormat,_t,Dt,y.colorSpace,y.isVideoTexture);Mt(Y,y);let Rt;const $t=y.mipmaps,Gt=y.isVideoTexture!==!0,Zt=ft.__version===void 0||V===!0,H=k.dataReady,xt=M(y,ht);if(y.isDepthTexture)Bt=E(y.format===Rs,y.type),Zt&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,Bt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Bt,ht.width,ht.height,0,_t,Dt,null));else if(y.isDataTexture)if($t.length>0){Gt&&Zt&&e.texStorage2D(n.TEXTURE_2D,xt,Bt,$t[0].width,$t[0].height);for(let nt=0,Q=$t.length;nt<Q;nt++)Rt=$t[nt],Gt?H&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,_t,Dt,Rt.data):e.texImage2D(n.TEXTURE_2D,nt,Bt,Rt.width,Rt.height,0,_t,Dt,Rt.data);y.generateMipmaps=!1}else Gt?(Zt&&e.texStorage2D(n.TEXTURE_2D,xt,Bt,ht.width,ht.height),H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,_t,Dt,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Bt,ht.width,ht.height,0,_t,Dt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Gt&&Zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Bt,$t[0].width,$t[0].height,ht.depth);for(let nt=0,Q=$t.length;nt<Q;nt++)if(Rt=$t[nt],y.format!==qn)if(_t!==null)if(Gt){if(H)if(y.layerUpdates.size>0){const St=Ah(Rt.width,Rt.height,y.format,y.type);for(const Et of y.layerUpdates){const Xt=Rt.data.subarray(Et*St/Rt.data.BYTES_PER_ELEMENT,(Et+1)*St/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Et,Rt.width,Rt.height,1,_t,Xt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,Rt.width,Rt.height,ht.depth,_t,Rt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Bt,Rt.width,Rt.height,ht.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,Rt.width,Rt.height,ht.depth,_t,Dt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Bt,Rt.width,Rt.height,ht.depth,0,_t,Dt,Rt.data)}else{Gt&&Zt&&e.texStorage2D(n.TEXTURE_2D,xt,Bt,$t[0].width,$t[0].height);for(let nt=0,Q=$t.length;nt<Q;nt++)Rt=$t[nt],y.format!==qn?_t!==null?Gt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,_t,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Bt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?H&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,_t,Dt,Rt.data):e.texImage2D(n.TEXTURE_2D,nt,Bt,Rt.width,Rt.height,0,_t,Dt,Rt.data)}else if(y.isDataArrayTexture)if(Gt){if(Zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Bt,ht.width,ht.height,ht.depth),H)if(y.layerUpdates.size>0){const nt=Ah(ht.width,ht.height,y.format,y.type);for(const Q of y.layerUpdates){const St=ht.data.subarray(Q*nt/ht.data.BYTES_PER_ELEMENT,(Q+1)*nt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ht.width,ht.height,1,_t,Dt,St)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,_t,Dt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Bt,ht.width,ht.height,ht.depth,0,_t,Dt,ht.data);else if(y.isData3DTexture)Gt?(Zt&&e.texStorage3D(n.TEXTURE_3D,xt,Bt,ht.width,ht.height,ht.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,_t,Dt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Bt,ht.width,ht.height,ht.depth,0,_t,Dt,ht.data);else if(y.isFramebufferTexture){if(Zt)if(Gt)e.texStorage2D(n.TEXTURE_2D,xt,Bt,ht.width,ht.height);else{let nt=ht.width,Q=ht.height;for(let St=0;St<xt;St++)e.texImage2D(n.TEXTURE_2D,St,Bt,nt,Q,0,_t,Dt,null),nt>>=1,Q>>=1}}else if($t.length>0){if(Gt&&Zt){const nt=Z($t[0]);e.texStorage2D(n.TEXTURE_2D,xt,Bt,nt.width,nt.height)}for(let nt=0,Q=$t.length;nt<Q;nt++)Rt=$t[nt],Gt?H&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,_t,Dt,Rt):e.texImage2D(n.TEXTURE_2D,nt,Bt,_t,Dt,Rt);y.generateMipmaps=!1}else if(Gt){if(Zt){const nt=Z(ht);e.texStorage2D(n.TEXTURE_2D,xt,Bt,nt.width,nt.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Dt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Bt,_t,Dt,ht);m(y)&&p(Y),ft.__version=k.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function rt(b,y,C){if(y.image.length!==6)return;const Y=Ft(b,y),V=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+C);const k=i.get(V);if(V.version!==k.__version||Y===!0){e.activeTexture(n.TEXTURE0+C);const ft=Ge.getPrimaries(Ge.workingColorSpace),ct=y.colorSpace===mo?null:Ge.getPrimaries(y.colorSpace),vt=y.colorSpace===mo||ft===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const bt=y.isCompressedTexture||y.image[0].isCompressedTexture,ht=y.image[0]&&y.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!bt&&!ht?_t[Q]=x(y.image[Q],!0,o.maxCubemapSize):_t[Q]=ht?y.image[Q].image:y.image[Q],_t[Q]=K(y,_t[Q]);const Dt=_t[0],Bt=s.convert(y.format,y.colorSpace),Rt=s.convert(y.type),$t=S(y.internalFormat,Bt,Rt,y.colorSpace),Gt=y.isVideoTexture!==!0,Zt=k.__version===void 0||Y===!0,H=V.dataReady;let xt=M(y,Dt);Mt(n.TEXTURE_CUBE_MAP,y);let nt;if(bt){Gt&&Zt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,$t,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){nt=_t[Q].mipmaps;for(let St=0;St<nt.length;St++){const Et=nt[St];y.format!==qn?Bt!==null?Gt?H&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,Et.width,Et.height,Bt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,$t,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,Et.width,Et.height,Bt,Rt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,$t,Et.width,Et.height,0,Bt,Rt,Et.data)}}}else{if(nt=y.mipmaps,Gt&&Zt){nt.length>0&&xt++;const Q=Z(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,$t,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ht){Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Bt,Rt,_t[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,_t[Q].width,_t[Q].height,0,Bt,Rt,_t[Q].data);for(let St=0;St<nt.length;St++){const Xt=nt[St].image[Q].image;Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,Xt.width,Xt.height,Bt,Rt,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,$t,Xt.width,Xt.height,0,Bt,Rt,Xt.data)}}else{Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Bt,Rt,_t[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,Bt,Rt,_t[Q]);for(let St=0;St<nt.length;St++){const Et=nt[St];Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,Bt,Rt,Et.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,$t,Bt,Rt,Et.image[Q])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),k.__version=V.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function pt(b,y,C,Y,V,k){const ft=s.convert(C.format,C.colorSpace),ct=s.convert(C.type),vt=S(C.internalFormat,ft,ct,C.colorSpace);if(!i.get(y).__hasExternalTextures){const ht=Math.max(1,y.width>>k),_t=Math.max(1,y.height>>k);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?e.texImage3D(V,k,vt,ht,_t,y.depth,0,ft,ct,null):e.texImage2D(V,k,vt,ht,_t,0,ft,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),F(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,V,i.get(C).__webglTexture,0,L(y)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,V,i.get(C).__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(b,y,C){if(n.bindRenderbuffer(n.RENDERBUFFER,b),y.depthBuffer){const Y=y.depthTexture,V=Y&&Y.isDepthTexture?Y.type:null,k=E(y.stencilBuffer,V),ft=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=L(y);F(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,k,y.width,y.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,k,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,k,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,b)}else{const Y=y.textures;for(let V=0;V<Y.length;V++){const k=Y[V],ft=s.convert(k.format,k.colorSpace),ct=s.convert(k.type),vt=S(k.internalFormat,ft,ct,k.colorSpace),bt=L(y);C&&F(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,vt,y.width,y.height):F(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,vt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,vt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),et(y.depthTexture,0);const Y=i.get(y.depthTexture).__webglTexture,V=L(y);if(y.depthTexture.format===ys)F(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(y.depthTexture.format===Rs)F(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ut(b){const y=i.get(b),C=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const V=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",V)};Y.addEventListener("dispose",V),y.__depthDisposeCallback=V}y.__boundDepthTexture=Y}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");O(y.__webglFramebuffer,b)}else if(C){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=n.createRenderbuffer(),Tt(y.__webglDepthbuffer[Y],b,!1);else{const V=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=y.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,k)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Tt(y.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,V)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(b,y,C){const Y=i.get(b);y!==void 0&&pt(Y.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&ut(b)}function dt(b){const y=b.texture,C=i.get(b),Y=i.get(y);b.addEventListener("dispose",I);const V=b.textures,k=b.isWebGLCubeRenderTarget===!0,ft=V.length>1;if(ft||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=y.version,r.memory.textures++),k){C.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0){C.__webglFramebuffer[ct]=[];for(let vt=0;vt<y.mipmaps.length;vt++)C.__webglFramebuffer[ct][vt]=n.createFramebuffer()}else C.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){C.__webglFramebuffer=[];for(let ct=0;ct<y.mipmaps.length;ct++)C.__webglFramebuffer[ct]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ft)for(let ct=0,vt=V.length;ct<vt;ct++){const bt=i.get(V[ct]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),r.memory.textures++)}if(b.samples>0&&F(b)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ct=0;ct<V.length;ct++){const vt=V[ct];C.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ct]);const bt=s.convert(vt.format,vt.colorSpace),ht=s.convert(vt.type),_t=S(vt.internalFormat,bt,ht,vt.colorSpace,b.isXRRenderTarget===!0),Dt=L(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,_t,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,C.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Tt(C.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,y);for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)pt(C.__webglFramebuffer[ct][vt],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,vt);else pt(C.__webglFramebuffer[ct],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(y)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let ct=0,vt=V.length;ct<vt;ct++){const bt=V[ct],ht=i.get(bt);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),Mt(n.TEXTURE_2D,bt),pt(C.__webglFramebuffer,b,bt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(bt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,Y.__webglTexture),Mt(ct,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)pt(C.__webglFramebuffer[vt],b,y,n.COLOR_ATTACHMENT0,ct,vt);else pt(C.__webglFramebuffer,b,y,n.COLOR_ATTACHMENT0,ct,0);m(y)&&p(ct),e.unbindTexture()}b.depthBuffer&&ut(b)}function yt(b){const y=b.textures;for(let C=0,Y=y.length;C<Y;C++){const V=y[C];if(m(V)){const k=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ft=i.get(V).__webglTexture;e.bindTexture(k,ft),p(k),e.unbindTexture()}}}const ot=[],g=[];function P(b){if(b.samples>0){if(F(b)===!1){const y=b.textures,C=b.width,Y=b.height;let V=n.COLOR_BUFFER_BIT;const k=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(b),ct=y.length>1;if(ct)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[vt]);const bt=i.get(y[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,bt,0)}n.blitFramebuffer(0,0,C,Y,0,0,C,Y,V,n.NEAREST),c===!0&&(ot.length=0,g.length=0,ot.push(n.COLOR_ATTACHMENT0+vt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ot.push(k),g.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,ft.__webglColorRenderbuffer[vt]);const bt=i.get(y[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function L(b){return Math.min(o.maxSamples,b.samples)}function F(b){const y=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function N(b){const y=r.render.frame;d.get(b)!==y&&(d.set(b,y),b.update())}function K(b,y){const C=b.colorSpace,Y=b.format,V=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||C!==Mo&&C!==mo&&(Ge.getTransfer(C)===nn?(Y!==qn||V!==to)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),y}function Z(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=T,this.setTexture2D=et,this.setTexture2DArray=lt,this.setTexture3D=q,this.setTextureCube=it,this.rebindTextures=st,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=F}function b1(n,t){function e(i,o=mo){let s;const r=Ge.getTransfer(o);if(i===to)return n.UNSIGNED_BYTE;if(i===Su)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===op)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===np)return n.BYTE;if(i===ip)return n.SHORT;if(i===mr)return n.UNSIGNED_SHORT;if(i===Mu)return n.INT;if(i===Go)return n.UNSIGNED_INT;if(i===Ki)return n.FLOAT;if(i===br)return n.HALF_FLOAT;if(i===sp)return n.ALPHA;if(i===rp)return n.RGB;if(i===qn)return n.RGBA;if(i===ap)return n.LUMINANCE;if(i===cp)return n.LUMINANCE_ALPHA;if(i===ys)return n.DEPTH_COMPONENT;if(i===Rs)return n.DEPTH_STENCIL;if(i===lp)return n.RED;if(i===Eu)return n.RED_INTEGER;if(i===up)return n.RG;if(i===Tu)return n.RG_INTEGER;if(i===Au)return n.RGBA_INTEGER;if(i===ma||i===ga||i===va||i===_a)if(r===nn)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===xl||i===wl||i===Ml)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===bl||i===El)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sl||i===bl)return r===nn?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===El)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tl||i===Al||i===Pl||i===Rl||i===Cl||i===Il||i===Ll||i===Dl||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===zl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tl)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pl)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rl)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cl)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nl)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fl)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ol)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bl)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zl)return r===nn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ya||i===Gl||i===Hl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ya)return r===nn?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dp||i===kl||i===Vl||i===Wl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ya)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class E1 extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wt extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T1={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,s=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,v=.005;l.inputState.pinching&&h>f+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&s!==null&&(o=s),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T1)))}return a!==null&&(a.visible=o!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Wt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const A1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P1=`
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

}`;class R1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const o=new Un,s=t.properties.get(o);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new on({vertexShader:A1,fragmentShader:P1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _(new Ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C1 extends Ls{constructor(t,e){super();const i=this;let o=null,s=1,r=null,a="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,v=null;const x=new R1,m=e.getContextAttributes();let p=null,S=null;const E=[],M=[],B=new ne;let I=null;const R=new Ye;R.layers.enable(1),R.viewport=new je;const G=new Ye;G.layers.enable(2),G.viewport=new je;const tt=[R,G],w=new E1;w.layers.enable(1),w.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let pt=E[rt];return pt===void 0&&(pt=new kc,E[rt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(rt){let pt=E[rt];return pt===void 0&&(pt=new kc,E[rt]=pt),pt.getGripSpace()},this.getHand=function(rt){let pt=E[rt];return pt===void 0&&(pt=new kc,E[rt]=pt),pt.getHandSpace()};function $(rt){const pt=M.indexOf(rt.inputSource);if(pt===-1)return;const Tt=E[pt];Tt!==void 0&&(Tt.update(rt.inputSource,rt.frame,l||r),Tt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function et(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",et),o.removeEventListener("inputsourceschange",lt);for(let rt=0;rt<E.length;rt++){const pt=M[rt];pt!==null&&(M[rt]=null,E[rt].disconnect(pt))}T=null,U=null,x.reset(),t.setRenderTarget(p),f=null,h=null,u=null,o=null,S=null,Ht.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){s=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(rt){l=rt},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return o},this.setSession=async function(rt){if(o=rt,o!==null){if(p=t.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",et),o.addEventListener("inputsourceschange",lt),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(B),o.renderState.layers===void 0){const pt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(o,e,pt),o.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ho(f.framebufferWidth,f.framebufferHeight,{format:qn,type:to,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let pt=null,Tt=null,O=null;m.depth&&(O=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=m.stencil?Rs:ys,Tt=m.stencil?Ps:Go);const ut={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:s};u=new XRWebGLBinding(o,e),h=u.createProjectionLayer(ut),o.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new Ho(h.textureWidth,h.textureHeight,{format:qn,type:to,depthTexture:new Tp(h.textureWidth,h.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await o.requestReferenceSpace(a),Ht.setContext(o),Ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function lt(rt){for(let pt=0;pt<rt.removed.length;pt++){const Tt=rt.removed[pt],O=M.indexOf(Tt);O>=0&&(M[O]=null,E[O].disconnect(Tt))}for(let pt=0;pt<rt.added.length;pt++){const Tt=rt.added[pt];let O=M.indexOf(Tt);if(O===-1){for(let st=0;st<E.length;st++)if(st>=M.length){M.push(Tt),O=st;break}else if(M[st]===null){M[st]=Tt,O=st;break}if(O===-1)break}const ut=E[O];ut&&ut.connect(Tt)}}const q=new J,it=new J;function W(rt,pt,Tt){q.setFromMatrixPosition(pt.matrixWorld),it.setFromMatrixPosition(Tt.matrixWorld);const O=q.distanceTo(it),ut=pt.projectionMatrix.elements,st=Tt.projectionMatrix.elements,dt=ut[14]/(ut[10]-1),yt=ut[14]/(ut[10]+1),ot=(ut[9]+1)/ut[5],g=(ut[9]-1)/ut[5],P=(ut[8]-1)/ut[0],L=(st[8]+1)/st[0],F=dt*P,N=dt*L,K=O/(-P+L),Z=K*-P;if(pt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Z),rt.translateZ(K),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),ut[10]===-1)rt.projectionMatrix.copy(pt.projectionMatrix),rt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const b=dt+K,y=yt+K,C=F-Z,Y=N+(O-Z),V=ot*yt/y*b,k=g*yt/y*b;rt.projectionMatrix.makePerspective(C,Y,V,k,b,y),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function mt(rt,pt){pt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(pt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(o===null)return;let pt=rt.near,Tt=rt.far;x.texture!==null&&(x.depthNear>0&&(pt=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),w.near=G.near=R.near=pt,w.far=G.far=R.far=Tt,(T!==w.near||U!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,U=w.far);const O=rt.parent,ut=w.cameras;mt(w,O);for(let st=0;st<ut.length;st++)mt(ut[st],O);ut.length===2?W(w,R,G):w.projectionMatrix.copy(R.projectionMatrix),wt(rt,w,O)};function wt(rt,pt,Tt){Tt===null?rt.matrix.copy(pt.matrixWorld):(rt.matrix.copy(Tt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(pt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(pt.projectionMatrix),rt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=gr*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(rt){c=rt,h!==null&&(h.fixedFoveation=rt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=rt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let Mt=null;function Ft(rt,pt){if(d=pt.getViewerPose(l||r),v=pt,d!==null){const Tt=d.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let O=!1;Tt.length!==w.cameras.length&&(w.cameras.length=0,O=!0);for(let st=0;st<Tt.length;st++){const dt=Tt[st];let yt=null;if(f!==null)yt=f.getViewport(dt);else{const g=u.getViewSubImage(h,dt);yt=g.viewport,st===0&&(t.setRenderTargetTextures(S,g.colorTexture,h.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(S))}let ot=tt[st];ot===void 0&&(ot=new Ye,ot.layers.enable(st),ot.viewport=new je,tt[st]=ot),ot.matrix.fromArray(dt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(dt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(yt.x,yt.y,yt.width,yt.height),st===0&&(w.matrix.copy(ot.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),O===!0&&w.cameras.push(ot)}const ut=o.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const st=u.getDepthInformation(Tt[0]);st&&st.isValid&&st.texture&&x.init(t,st,o.renderState)}}for(let Tt=0;Tt<E.length;Tt++){const O=M[Tt],ut=E[Tt];O!==null&&ut!==void 0&&ut.update(O,pt,l||r)}Mt&&Mt(rt,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),v=null}const Ht=new bp;Ht.setAnimationLoop(Ft),this.setAnimationLoop=function(rt){Mt=rt},this.dispose=function(){}}}const Co=new Ui,I1=new sn;function L1(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function o(m,p,S,E,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),E=S.envMap,M=S.envMapRotation;E&&(m.envMap.value=E,Co.copy(M),Co.x*=-1,Co.y*=-1,Co.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Co.y*=-1,Co.z*=-1),m.envMapRotation.value.setFromMatrix4(I1.makeRotationFromEuler(Co)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function D1(n,t,e,i){let o={},s={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){const M=E.program;i.uniformBlockBinding(S,M)}function l(S,E){let M=o[S.id];M===void 0&&(v(S),M=d(S),o[S.id]=M,S.addEventListener("dispose",m));const B=E.program;i.updateUBOMapping(S,B);const I=t.render.frame;s[S.id]!==I&&(h(S),s[S.id]=I)}function d(S){const E=u();S.__bindingPointIndex=E;const M=n.createBuffer(),B=S.__size,I=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,B,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function u(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const E=o[S.id],M=S.uniforms,B=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let I=0,R=M.length;I<R;I++){const G=Array.isArray(M[I])?M[I]:[M[I]];for(let tt=0,w=G.length;tt<w;tt++){const T=G[tt];if(f(T,I,tt,B)===!0){const U=T.__offset,$=Array.isArray(T.value)?T.value:[T.value];let et=0;for(let lt=0;lt<$.length;lt++){const q=$[lt],it=x(q);typeof q=="number"||typeof q=="boolean"?(T.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,U+et,T.__data)):q.isMatrix3?(T.__data[0]=q.elements[0],T.__data[1]=q.elements[1],T.__data[2]=q.elements[2],T.__data[3]=0,T.__data[4]=q.elements[3],T.__data[5]=q.elements[4],T.__data[6]=q.elements[5],T.__data[7]=0,T.__data[8]=q.elements[6],T.__data[9]=q.elements[7],T.__data[10]=q.elements[8],T.__data[11]=0):(q.toArray(T.__data,et),et+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,E,M,B){const I=S.value,R=E+"_"+M;if(B[R]===void 0)return typeof I=="number"||typeof I=="boolean"?B[R]=I:B[R]=I.clone(),!0;{const G=B[R];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return B[R]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function v(S){const E=S.uniforms;let M=0;const B=16;for(let R=0,G=E.length;R<G;R++){const tt=Array.isArray(E[R])?E[R]:[E[R]];for(let w=0,T=tt.length;w<T;w++){const U=tt[w],$=Array.isArray(U.value)?U.value:[U.value];for(let et=0,lt=$.length;et<lt;et++){const q=$[et],it=x(q),W=M%B,mt=W%it.boundary,wt=W+mt;M+=mt,wt!==0&&B-wt<it.storage&&(M+=B-wt),U.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=it.storage}}}const I=M%B;return I>0&&(M+=B-I),S.__size=M,S.__cache={},this}function x(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const M=r.indexOf(E.__bindingPointIndex);r.splice(M,1),n.deleteBuffer(o[E.id]),delete o[E.id],delete s[E.id]}function p(){for(const S in o)n.deleteBuffer(o[S]);r=[],o={},s={}}return{bind:c,update:l,dispose:p}}class Fn{constructor(t={}){const{canvas:e=S_(),context:i=null,depth:o=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=r;const f=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=vo,this.toneMappingExposure=1;const E=this;let M=!1,B=0,I=0,R=null,G=-1,tt=null;const w=new je,T=new je;let U=null;const $=new we(0);let et=0,lt=e.width,q=e.height,it=1,W=null,mt=null;const wt=new je(0,0,lt,q),Mt=new je(0,0,lt,q);let Ft=!1;const Ht=new Iu;let rt=!1,pt=!1;const Tt=new sn,O=new sn,ut=new J,st=new je,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function ot(){return R===null?it:1}let g=i;function P(A,j){return e.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wu}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Et,!1),g===null){const j="webgl2";if(g=P(j,A),g===null)throw P(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,F,N,K,Z,b,y,C,Y,V,k,ft,ct,vt,bt,ht,_t,Dt,Bt,Rt,$t,Gt,Zt,H;function xt(){L=new zw(g),L.init(),Gt=new b1(g,L),F=new Dw(g,L,t,Gt),N=new w1(g),F.reverseDepthBuffer&&N.buffers.depth.setReversed(!0),K=new kw(g),Z=new r1,b=new S1(g,L,N,Z,F,Gt,K),y=new Nw(E),C=new Bw(E),Y=new $_(g),Zt=new Iw(g,Y),V=new Gw(g,Y,K,Zt),k=new Ww(g,V,Y,K),Bt=new Vw(g,F,b),ht=new Uw(Z),ft=new s1(E,y,C,L,F,Zt,ht),ct=new L1(E,Z),vt=new c1,bt=new p1(L),Dt=new Cw(E,y,C,N,k,h,c),_t=new y1(E,k,F),H=new D1(g,K,F,N),Rt=new Lw(g,L,K),$t=new Hw(g,L,K),K.programs=ft.programs,E.capabilities=F,E.extensions=L,E.properties=Z,E.renderLists=vt,E.shadowMap=_t,E.state=N,E.info=K}xt();const nt=new C1(E,g);this.xr=nt,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(A){A!==void 0&&(it=A,this.setSize(lt,q,!1))},this.getSize=function(A){return A.set(lt,q)},this.setSize=function(A,j,D=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=A,q=j,e.width=Math.floor(A*it),e.height=Math.floor(j*it),D===!0&&(e.style.width=A+"px",e.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(lt*it,q*it).floor()},this.setDrawingBufferSize=function(A,j,D){lt=A,q=j,it=D,e.width=Math.floor(A*D),e.height=Math.floor(j*D),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(wt)},this.setViewport=function(A,j,D,X){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,j,D,X),N.viewport(w.copy(wt).multiplyScalar(it).round())},this.getScissor=function(A){return A.copy(Mt)},this.setScissor=function(A,j,D,X){A.isVector4?Mt.set(A.x,A.y,A.z,A.w):Mt.set(A,j,D,X),N.scissor(T.copy(Mt).multiplyScalar(it).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(A){N.setScissorTest(Ft=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){mt=A},this.getClearColor=function(A){return A.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(A=!0,j=!0,D=!0){let X=0;if(A){let z=!1;if(R!==null){const gt=R.texture.format;z=gt===Au||gt===Tu||gt===Eu}if(z){const gt=R.texture.type,It=gt===to||gt===Go||gt===mr||gt===Ps||gt===Su||gt===bu,Ot=Dt.getClearColor(),zt=Dt.getClearAlpha(),Jt=Ot.r,Kt=Ot.g,Vt=Ot.b;It?(f[0]=Jt,f[1]=Kt,f[2]=Vt,f[3]=zt,g.clearBufferuiv(g.COLOR,0,f)):(v[0]=Jt,v[1]=Kt,v[2]=Vt,v[3]=zt,g.clearBufferiv(g.COLOR,0,v))}else X|=g.COLOR_BUFFER_BIT}j&&(X|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),D&&(X|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),vt.dispose(),bt.dispose(),Z.dispose(),y.dispose(),C.dispose(),k.dispose(),Zt.dispose(),H.dispose(),ft.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Me),nt.removeEventListener("sessionend",jt),qt.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=K.autoReset,j=_t.enabled,D=_t.autoUpdate,X=_t.needsUpdate,z=_t.type;xt(),K.autoReset=A,_t.enabled=j,_t.autoUpdate=D,_t.needsUpdate=X,_t.type=z}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Xt(A){const j=A.target;j.removeEventListener("dispose",Xt),se(j)}function se(A){re(A),Z.remove(A)}function re(A){const j=Z.get(A).programs;j!==void 0&&(j.forEach(function(D){ft.releaseProgram(D)}),A.isShaderMaterial&&ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,D,X,z,gt){j===null&&(j=dt);const It=z.isMesh&&z.matrixWorld.determinant()<0,Ot=Ue(A,j,D,X,z);N.setMaterial(X,It);let zt=D.index,Jt=1;if(X.wireframe===!0){if(zt=V.getWireframeAttribute(D),zt===void 0)return;Jt=2}const Kt=D.drawRange,Vt=D.attributes.position;let ie=Kt.start*Jt,ve=(Kt.start+Kt.count)*Jt;gt!==null&&(ie=Math.max(ie,gt.start*Jt),ve=Math.min(ve,(gt.start+gt.count)*Jt)),zt!==null?(ie=Math.max(ie,0),ve=Math.min(ve,zt.count)):Vt!=null&&(ie=Math.max(ie,0),ve=Math.min(ve,Vt.count));const pe=ve-ie;if(pe<0||pe===1/0)return;Zt.setup(z,X,Ot,D,zt);let Ct,Qt=Rt;if(zt!==null&&(Ct=Y.get(zt),Qt=$t,Qt.setIndex(Ct)),z.isMesh)X.wireframe===!0?(N.setLineWidth(X.wireframeLinewidth*ot()),Qt.setMode(g.LINES)):Qt.setMode(g.TRIANGLES);else if(z.isLine){let kt=X.linewidth;kt===void 0&&(kt=1),N.setLineWidth(kt*ot()),z.isLineSegments?Qt.setMode(g.LINES):z.isLineLoop?Qt.setMode(g.LINE_LOOP):Qt.setMode(g.LINE_STRIP)}else z.isPoints?Qt.setMode(g.POINTS):z.isSprite&&Qt.setMode(g.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const kt=z._multiDrawStarts,de=z._multiDrawCounts,At=z._multiDrawCount,Ee=zt?Y.get(zt).bytesPerElement:1,Le=Z.get(X).currentProgram.getUniforms();for(let xe=0;xe<At;xe++)Le.setValue(g,"_gl_DrawID",xe),Qt.render(kt[xe]/Ee,de[xe])}else if(z.isInstancedMesh)Qt.renderInstances(ie,pe,z.count);else if(D.isInstancedBufferGeometry){const kt=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,de=Math.min(D.instanceCount,kt);Qt.renderInstances(ie,pe,de)}else Qt.render(ie,pe)};function ue(A,j,D){A.transparent===!0&&A.side===Ie&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,ye(A,j,D),A.side=yo,A.needsUpdate=!0,ye(A,j,D),A.side=Ie):ye(A,j,D)}this.compile=function(A,j,D=null){D===null&&(D=A),m=bt.get(D),m.init(j),S.push(m),D.traverseVisible(function(z){z.isLight&&z.layers.test(j.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),A!==D&&A.traverseVisible(function(z){z.isLight&&z.layers.test(j.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const X=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const gt=z.material;if(gt)if(Array.isArray(gt))for(let It=0;It<gt.length;It++){const Ot=gt[It];ue(Ot,D,z),X.add(Ot)}else ue(gt,D,z),X.add(gt)}),S.pop(),m=null,X},this.compileAsync=function(A,j,D=null){const X=this.compile(A,j,D);return new Promise(z=>{function gt(){if(X.forEach(function(It){Z.get(It).currentProgram.isReady()&&X.delete(It)}),X.size===0){z(A);return}setTimeout(gt,10)}L.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ce=null;function me(A){ce&&ce(A)}function Me(){qt.stop()}function jt(){qt.start()}const qt=new bp;qt.setAnimationLoop(me),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(A){ce=A,nt.setAnimationLoop(A),A===null?qt.stop():qt.start()},nt.addEventListener("sessionstart",Me),nt.addEventListener("sessionend",jt),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(j),j=nt.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,j,R),m=bt.get(A,S.length),m.init(j),S.push(m),O.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ht.setFromProjectionMatrix(O),pt=this.localClippingEnabled,rt=ht.init(this.clippingPlanes,pt),x=vt.get(A,p.length),x.init(),p.push(x),nt.enabled===!0&&nt.isPresenting===!0){const gt=E.xr.getDepthSensingMesh();gt!==null&&oe(gt,j,-1/0,E.sortObjects)}oe(A,j,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(W,mt),yt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,yt&&Dt.addToRenderList(x,A),this.info.render.frame++,rt===!0&&ht.beginShadows();const D=m.state.shadowsArray;_t.render(D,A,j),rt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,z=x.transmissive;if(m.setupLights(),j.isArrayCamera){const gt=j.cameras;if(z.length>0)for(let It=0,Ot=gt.length;It<Ot;It++){const zt=gt[It];ge(X,z,A,zt)}yt&&Dt.render(A);for(let It=0,Ot=gt.length;It<Ot;It++){const zt=gt[It];ae(x,A,zt,zt.viewport)}}else z.length>0&&ge(X,z,A,j),yt&&Dt.render(A),ae(x,A,j);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(E,A,j),Zt.resetDefaultState(),G=-1,tt=null,S.pop(),S.length>0?(m=S[S.length-1],rt===!0&&ht.setGlobalState(E.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function oe(A,j,D,X){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)D=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ht.intersectsSprite(A)){X&&st.setFromMatrixPosition(A.matrixWorld).applyMatrix4(O);const It=k.update(A),Ot=A.material;Ot.visible&&x.push(A,It,Ot,D,st.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ht.intersectsObject(A))){const It=k.update(A),Ot=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),st.copy(A.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),st.copy(It.boundingSphere.center)),st.applyMatrix4(A.matrixWorld).applyMatrix4(O)),Array.isArray(Ot)){const zt=It.groups;for(let Jt=0,Kt=zt.length;Jt<Kt;Jt++){const Vt=zt[Jt],ie=Ot[Vt.materialIndex];ie&&ie.visible&&x.push(A,It,ie,D,st.z,Vt)}}else Ot.visible&&x.push(A,It,Ot,D,st.z,null)}}const gt=A.children;for(let It=0,Ot=gt.length;It<Ot;It++)oe(gt[It],j,D,X)}function ae(A,j,D,X){const z=A.opaque,gt=A.transmissive,It=A.transparent;m.setupLightsView(D),rt===!0&&ht.setGlobalState(E.clippingPlanes,D),X&&N.viewport(w.copy(X)),z.length>0&&fe(z,j,D),gt.length>0&&fe(gt,j,D),It.length>0&&fe(It,j,D),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function ge(A,j,D,X){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Ho(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?br:to,minFilter:wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const gt=m.state.transmissionRenderTarget[X.id],It=X.viewport||w;gt.setSize(It.z,It.w);const Ot=E.getRenderTarget();E.setRenderTarget(gt),E.getClearColor($),et=E.getClearAlpha(),et<1&&E.setClearColor(16777215,.5),E.clear(),yt&&Dt.render(D);const zt=E.toneMapping;E.toneMapping=vo;const Jt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),rt===!0&&ht.setGlobalState(E.clippingPlanes,X),fe(A,D,X),b.updateMultisampleRenderTarget(gt),b.updateRenderTargetMipmap(gt),L.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Vt=0,ie=j.length;Vt<ie;Vt++){const ve=j[Vt],pe=ve.object,Ct=ve.geometry,Qt=ve.material,kt=ve.group;if(Qt.side===Ie&&pe.layers.test(X.layers)){const de=Qt.side;Qt.side=Jn,Qt.needsUpdate=!0,Pe(pe,D,X,Ct,Qt,kt),Qt.side=de,Qt.needsUpdate=!0,Kt=!0}}Kt===!0&&(b.updateMultisampleRenderTarget(gt),b.updateRenderTargetMipmap(gt))}E.setRenderTarget(Ot),E.setClearColor($,et),Jt!==void 0&&(X.viewport=Jt),E.toneMapping=zt}function fe(A,j,D){const X=j.isScene===!0?j.overrideMaterial:null;for(let z=0,gt=A.length;z<gt;z++){const It=A[z],Ot=It.object,zt=It.geometry,Jt=X===null?It.material:X,Kt=It.group;Ot.layers.test(D.layers)&&Pe(Ot,j,D,zt,Jt,Kt)}}function Pe(A,j,D,X,z,gt){A.onBeforeRender(E,j,D,X,z,gt),A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(E,j,D,X,A,gt),z.transparent===!0&&z.side===Ie&&z.forceSinglePass===!1?(z.side=Jn,z.needsUpdate=!0,E.renderBufferDirect(D,j,X,z,A,gt),z.side=yo,z.needsUpdate=!0,E.renderBufferDirect(D,j,X,z,A,gt),z.side=Ie):E.renderBufferDirect(D,j,X,z,A,gt),A.onAfterRender(E,j,D,X,z,gt)}function ye(A,j,D){j.isScene!==!0&&(j=dt);const X=Z.get(A),z=m.state.lights,gt=m.state.shadowsArray,It=z.state.version,Ot=ft.getParameters(A,z.state,gt,j,D),zt=ft.getProgramCacheKey(Ot);let Jt=X.programs;X.environment=A.isMeshStandardMaterial?j.environment:null,X.fog=j.fog,X.envMap=(A.isMeshStandardMaterial?C:y).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",Xt),Jt=new Map,X.programs=Jt);let Kt=Jt.get(zt);if(Kt!==void 0){if(X.currentProgram===Kt&&X.lightsStateVersion===It)return Ne(A,Ot),Kt}else Ot.uniforms=ft.getUniforms(A),A.onBeforeCompile(Ot,E),Kt=ft.acquireProgram(Ot,zt),Jt.set(zt,Kt),X.uniforms=Ot.uniforms;const Vt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=ht.uniform),Ne(A,Ot),X.needsLights=le(A),X.lightsStateVersion=It,X.needsLights&&(Vt.ambientLightColor.value=z.state.ambient,Vt.lightProbe.value=z.state.probe,Vt.directionalLights.value=z.state.directional,Vt.directionalLightShadows.value=z.state.directionalShadow,Vt.spotLights.value=z.state.spot,Vt.spotLightShadows.value=z.state.spotShadow,Vt.rectAreaLights.value=z.state.rectArea,Vt.ltc_1.value=z.state.rectAreaLTC1,Vt.ltc_2.value=z.state.rectAreaLTC2,Vt.pointLights.value=z.state.point,Vt.pointLightShadows.value=z.state.pointShadow,Vt.hemisphereLights.value=z.state.hemi,Vt.directionalShadowMap.value=z.state.directionalShadowMap,Vt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Vt.spotShadowMap.value=z.state.spotShadowMap,Vt.spotLightMatrix.value=z.state.spotLightMatrix,Vt.spotLightMap.value=z.state.spotLightMap,Vt.pointShadowMap.value=z.state.pointShadowMap,Vt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Kt,X.uniformsList=null,Kt}function Se(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=wa.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Ne(A,j){const D=Z.get(A);D.outputColorSpace=j.outputColorSpace,D.batching=j.batching,D.batchingColor=j.batchingColor,D.instancing=j.instancing,D.instancingColor=j.instancingColor,D.instancingMorph=j.instancingMorph,D.skinning=j.skinning,D.morphTargets=j.morphTargets,D.morphNormals=j.morphNormals,D.morphColors=j.morphColors,D.morphTargetsCount=j.morphTargetsCount,D.numClippingPlanes=j.numClippingPlanes,D.numIntersection=j.numClipIntersection,D.vertexAlphas=j.vertexAlphas,D.vertexTangents=j.vertexTangents,D.toneMapping=j.toneMapping}function Ue(A,j,D,X,z){j.isScene!==!0&&(j=dt),b.resetTextureUnits();const gt=j.fog,It=X.isMeshStandardMaterial?j.environment:null,Ot=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Mo,zt=(X.isMeshStandardMaterial?C:y).get(X.envMap||It),Jt=X.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Kt=!!D.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Vt=!!D.morphAttributes.position,ie=!!D.morphAttributes.normal,ve=!!D.morphAttributes.color;let pe=vo;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pe=E.toneMapping);const Ct=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Qt=Ct!==void 0?Ct.length:0,kt=Z.get(X),de=m.state.lights;if(rt===!0&&(pt===!0||A!==tt)){const De=A===tt&&X.id===G;ht.setState(X,A,De)}let At=!1;X.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==de.state.version||kt.outputColorSpace!==Ot||z.isBatchedMesh&&kt.batching===!1||!z.isBatchedMesh&&kt.batching===!0||z.isBatchedMesh&&kt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&kt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&kt.instancing===!1||!z.isInstancedMesh&&kt.instancing===!0||z.isSkinnedMesh&&kt.skinning===!1||!z.isSkinnedMesh&&kt.skinning===!0||z.isInstancedMesh&&kt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&kt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&kt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&kt.instancingMorph===!1&&z.morphTexture!==null||kt.envMap!==zt||X.fog===!0&&kt.fog!==gt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ht.numPlanes||kt.numIntersection!==ht.numIntersection)||kt.vertexAlphas!==Jt||kt.vertexTangents!==Kt||kt.morphTargets!==Vt||kt.morphNormals!==ie||kt.morphColors!==ve||kt.toneMapping!==pe||kt.morphTargetsCount!==Qt)&&(At=!0):(At=!0,kt.__version=X.version);let Ee=kt.currentProgram;At===!0&&(Ee=ye(X,j,z));let Le=!1,xe=!1,Oe=!1;const _e=Ee.getUniforms(),Fe=kt.uniforms;if(N.useProgram(Ee.program)&&(Le=!0,xe=!0,Oe=!0),X.id!==G&&(G=X.id,xe=!0),Le||tt!==A){F.reverseDepthBuffer?(Tt.copy(A.projectionMatrix),E_(Tt),T_(Tt),_e.setValue(g,"projectionMatrix",Tt)):_e.setValue(g,"projectionMatrix",A.projectionMatrix),_e.setValue(g,"viewMatrix",A.matrixWorldInverse);const De=_e.map.cameraPosition;De!==void 0&&De.setValue(g,ut.setFromMatrixPosition(A.matrixWorld)),F.logarithmicDepthBuffer&&_e.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_e.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),tt!==A&&(tt=A,xe=!0,Oe=!0)}if(z.isSkinnedMesh){_e.setOptional(g,z,"bindMatrix"),_e.setOptional(g,z,"bindMatrixInverse");const De=z.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),_e.setValue(g,"boneTexture",De.boneTexture,b))}z.isBatchedMesh&&(_e.setOptional(g,z,"batchingTexture"),_e.setValue(g,"batchingTexture",z._matricesTexture,b),_e.setOptional(g,z,"batchingIdTexture"),_e.setValue(g,"batchingIdTexture",z._indirectTexture,b),_e.setOptional(g,z,"batchingColorTexture"),z._colorsTexture!==null&&_e.setValue(g,"batchingColorTexture",z._colorsTexture,b));const qe=D.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&Bt.update(z,D,Ee),(xe||kt.receiveShadow!==z.receiveShadow)&&(kt.receiveShadow=z.receiveShadow,_e.setValue(g,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Fe.envMap.value=zt,Fe.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&j.environment!==null&&(Fe.envMapIntensity.value=j.environmentIntensity),xe&&(_e.setValue(g,"toneMappingExposure",E.toneMappingExposure),kt.needsLights&&Pt(Fe,Oe),gt&&X.fog===!0&&ct.refreshFogUniforms(Fe,gt),ct.refreshMaterialUniforms(Fe,X,it,q,m.state.transmissionRenderTarget[A.id]),wa.upload(g,Se(kt),Fe,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(wa.upload(g,Se(kt),Fe,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_e.setValue(g,"center",z.center),_e.setValue(g,"modelViewMatrix",z.modelViewMatrix),_e.setValue(g,"normalMatrix",z.normalMatrix),_e.setValue(g,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const De=X.uniformsGroups;for(let We=0,tn=De.length;We<tn;We++){const $e=De[We];H.update($e,Ee),H.bind($e,Ee)}}return Ee}function Pt(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function le(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,j,D){Z.get(A.texture).__webglTexture=j,Z.get(A.depthTexture).__webglTexture=D;const X=Z.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=D===void 0,X.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const D=Z.get(A);D.__webglFramebuffer=j,D.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,D=0){R=A,B=j,I=D;let X=!0,z=null,gt=!1,It=!1;if(A){const zt=Z.get(A);if(zt.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(g.FRAMEBUFFER,null),X=!1;else if(zt.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(zt.__hasExternalTextures)b.rebindTextures(A,Z.get(A.texture).__webglTexture,Z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Vt=A.depthTexture;if(zt.__boundDepthTexture!==Vt){if(Vt!==null&&Z.has(Vt)&&(A.width!==Vt.image.width||A.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(It=!0);const Kt=Z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Kt[j])?z=Kt[j][D]:z=Kt[j],gt=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?z=Z.get(A).__webglMultisampledFramebuffer:Array.isArray(Kt)?z=Kt[D]:z=Kt,w.copy(A.viewport),T.copy(A.scissor),U=A.scissorTest}else w.copy(wt).multiplyScalar(it).floor(),T.copy(Mt).multiplyScalar(it).floor(),U=Ft;if(N.bindFramebuffer(g.FRAMEBUFFER,z)&&X&&N.drawBuffers(A,z),N.viewport(w),N.scissor(T),N.setScissorTest(U),gt){const zt=Z.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+j,zt.__webglTexture,D)}else if(It){const zt=Z.get(A.texture),Jt=j||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,zt.__webglTexture,D||0,Jt)}G=-1},this.readRenderTargetPixels=function(A,j,D,X,z,gt,It){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Ot=Ot[It]),Ot){N.bindFramebuffer(g.FRAMEBUFFER,Ot);try{const zt=A.texture,Jt=zt.format,Kt=zt.type;if(!F.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-X&&D>=0&&D<=A.height-z&&g.readPixels(j,D,X,z,Gt.convert(Jt),Gt.convert(Kt),gt)}finally{const zt=R!==null?Z.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,j,D,X,z,gt,It){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Ot=Ot[It]),Ot){const zt=A.texture,Jt=zt.format,Kt=zt.type;if(!F.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-X&&D>=0&&D<=A.height-z){N.bindFramebuffer(g.FRAMEBUFFER,Ot);const Vt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Vt),g.bufferData(g.PIXEL_PACK_BUFFER,gt.byteLength,g.STREAM_READ),g.readPixels(j,D,X,z,Gt.convert(Jt),Gt.convert(Kt),0);const ie=R!==null?Z.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,ie);const ve=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await b_(g,ve,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Vt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,gt),g.deleteBuffer(Vt),g.deleteSync(ve),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,D=0){A.isTexture!==!0&&(xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-D),z=Math.floor(A.image.width*X),gt=Math.floor(A.image.height*X),It=j!==null?j.x:0,Ot=j!==null?j.y:0;b.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,D,0,0,It,Ot,z,gt),N.unbindTexture()},this.copyTextureToTexture=function(A,j,D=null,X=null,z=0){A.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],j=arguments[2],z=arguments[3]||0,D=null);let gt,It,Ot,zt,Jt,Kt;D!==null?(gt=D.max.x-D.min.x,It=D.max.y-D.min.y,Ot=D.min.x,zt=D.min.y):(gt=A.image.width,It=A.image.height,Ot=0,zt=0),X!==null?(Jt=X.x,Kt=X.y):(Jt=0,Kt=0);const Vt=Gt.convert(j.format),ie=Gt.convert(j.type);b.setTexture2D(j,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,j.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,j.unpackAlignment);const ve=g.getParameter(g.UNPACK_ROW_LENGTH),pe=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ct=g.getParameter(g.UNPACK_SKIP_PIXELS),Qt=g.getParameter(g.UNPACK_SKIP_ROWS),kt=g.getParameter(g.UNPACK_SKIP_IMAGES),de=A.isCompressedTexture?A.mipmaps[z]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,de.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,de.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ot),g.pixelStorei(g.UNPACK_SKIP_ROWS,zt),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,z,Jt,Kt,gt,It,Vt,ie,de.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,z,Jt,Kt,de.width,de.height,Vt,de.data):g.texSubImage2D(g.TEXTURE_2D,z,Jt,Kt,gt,It,Vt,ie,de),g.pixelStorei(g.UNPACK_ROW_LENGTH,ve),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,pe),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ct),g.pixelStorei(g.UNPACK_SKIP_ROWS,Qt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,kt),z===0&&j.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(A,j,D=null,X=null,z=0){A.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,X=arguments[1]||null,A=arguments[2],j=arguments[3],z=arguments[4]||0);let gt,It,Ot,zt,Jt,Kt,Vt,ie,ve;const pe=A.isCompressedTexture?A.mipmaps[z]:A.image;D!==null?(gt=D.max.x-D.min.x,It=D.max.y-D.min.y,Ot=D.max.z-D.min.z,zt=D.min.x,Jt=D.min.y,Kt=D.min.z):(gt=pe.width,It=pe.height,Ot=pe.depth,zt=0,Jt=0,Kt=0),X!==null?(Vt=X.x,ie=X.y,ve=X.z):(Vt=0,ie=0,ve=0);const Ct=Gt.convert(j.format),Qt=Gt.convert(j.type);let kt;if(j.isData3DTexture)b.setTexture3D(j,0),kt=g.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)b.setTexture2DArray(j,0),kt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,j.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,j.unpackAlignment);const de=g.getParameter(g.UNPACK_ROW_LENGTH),At=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ee=g.getParameter(g.UNPACK_SKIP_PIXELS),Le=g.getParameter(g.UNPACK_SKIP_ROWS),xe=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,pe.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,pe.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,zt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Jt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Kt),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(kt,z,Vt,ie,ve,gt,It,Ot,Ct,Qt,pe.data):j.isCompressedArrayTexture?g.compressedTexSubImage3D(kt,z,Vt,ie,ve,gt,It,Ot,Ct,pe.data):g.texSubImage3D(kt,z,Vt,ie,ve,gt,It,Ot,Ct,Qt,pe),g.pixelStorei(g.UNPACK_ROW_LENGTH,de),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,At),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ee),g.pixelStorei(g.UNPACK_SKIP_ROWS,Le),g.pixelStorei(g.UNPACK_SKIP_IMAGES,xe),z===0&&j.generateMipmaps&&g.generateMipmap(kt),N.unbindTexture()},this.initRenderTarget=function(A){Z.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),N.unbindTexture()},this.resetState=function(){B=0,I=0,R=null,N.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Pu?"display-p3":"srgb",e.unpackColorSpace=Ge.workingColorSpace===Ya?"display-p3":"srgb"}}class On extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _r extends Ds{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ph=new sn,ql=new vp,oa=new $a,sa=new J;class sr extends bn{constructor(t=new Tn,e=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(o),oa.radius+=s,t.ray.intersectsSphere(oa)===!1)return;Ph.copy(o).invert(),ql.copy(t.ray).applyMatrix4(Ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const h=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let v=h,x=f;v<x;v++){const m=l.getX(v);sa.fromBufferAttribute(u,m),Rh(sa,m,c,o,t,e,this)}}else{const h=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let v=h,x=f;v<x;v++)sa.fromBufferAttribute(u,v),Rh(sa,v,c,o,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rh(n,t,e,i,o,s,r){const a=ql.distanceSqToPoint(n);if(a<e){const c=new J;ql.closestPointToPoint(n,c),c.applyMatrix4(i);const l=o.ray.origin.distanceTo(c);if(l<o.near||l>o.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class U1 extends Un{constructor(t,e,i,o,s,r,a,c,l){super(t,e,i,o,s,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,o=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(o),e.push(s),o=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let o=0;const s=i.length;let r;e?r=e:r=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(o=Math.floor(a+(c-a)/2),l=i[o]-r,l<0)a=o+1;else if(l>0)c=o-1;else{c=o;break}if(o=c,i[o]===r)return o/(s-1);const d=i[o],h=i[o+1]-d,f=(r-d)/h;return(o+f)/(s-1)}getTangent(t,e){let o=t-1e-4,s=t+1e-4;o<0&&(o=0),s>1&&(s=1);const r=this.getPoint(o),a=this.getPoint(s),c=e||(r.isVector2?new ne:new J);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new J,o=[],s=[],r=[],a=new J,c=new sn;for(let f=0;f<=t;f++){const v=f/t;o[f]=this.getTangentAt(v,new J)}s[0]=new J,r[0]=new J;let l=Number.MAX_VALUE;const d=Math.abs(o[0].x),u=Math.abs(o[0].y),h=Math.abs(o[0].z);d<=l&&(l=d,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(o[0],i).normalize(),s[0].crossVectors(o[0],a),r[0].crossVectors(o[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(o[f-1],o[f]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(wn(o[f-1].dot(o[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,v))}r[f].crossVectors(o[f],s[f])}if(e===!0){let f=Math.acos(wn(s[0].dot(s[t]),-1,1));f/=t,o[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let v=1;v<=t;v++)s[v].applyMatrix4(c.makeRotationAxis(o[v],f*v)),r[v].crossVectors(o[v],s[v])}return{tangents:o,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Du extends Ni{constructor(t=0,e=0,i=1,o=1,s=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=o,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ne){const i=e,o=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=o;for(;s>o;)s-=o;s<Number.EPSILON&&(r?s=0:s=o),this.aClockwise===!0&&!r&&(s===o?s=-o:s=s-o);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*d-f*u+this.aX,l=h*u+f*d+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class N1 extends Du{constructor(t,e,i,o,s,r){super(t,e,i,i,o,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Uu(){let n=0,t=0,e=0,i=0;function o(s,r,a,c){n=s,t=a,e=-3*s+3*r-2*a-c,i=2*s-2*r+a+c}return{initCatmullRom:function(s,r,a,c,l){o(r,a,l*(a-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,a,c,l,d,u){let h=(r-s)/l-(a-s)/(l+d)+(a-r)/d,f=(a-r)/d-(c-r)/(d+u)+(c-a)/u;h*=d,f*=d,o(r,a,h,f)},calc:function(s){const r=s*s,a=r*s;return n+t*s+e*r+i*a}}}const ra=new J,Vc=new Uu,Wc=new Uu,Xc=new Uu;class F1 extends Ni{constructor(t=[],e=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=o}getPoint(t,e=new J){const i=e,o=this.points,s=o.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,d;this.closed||a>0?l=o[(a-1)%s]:(ra.subVectors(o[0],o[1]).add(o[0]),l=ra);const u=o[a%s],h=o[(a+1)%s];if(this.closed||a+2<s?d=o[(a+2)%s]:(ra.subVectors(o[s-1],o[s-2]).add(o[s-1]),d=ra),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Vc.initNonuniformCatmullRom(l.x,u.x,h.x,d.x,v,x,m),Wc.initNonuniformCatmullRom(l.y,u.y,h.y,d.y,v,x,m),Xc.initNonuniformCatmullRom(l.z,u.z,h.z,d.z,v,x,m)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(l.x,u.x,h.x,d.x,this.tension),Wc.initCatmullRom(l.y,u.y,h.y,d.y,this.tension),Xc.initCatmullRom(l.z,u.z,h.z,d.z,this.tension));return i.set(Vc.calc(c),Wc.calc(c),Xc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const o=this.points[e];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(new J().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ch(n,t,e,i,o){const s=(i-t)*.5,r=(o-e)*.5,a=n*n,c=n*a;return(2*e-2*i+s+r)*c+(-3*e+3*i-2*s-r)*a+s*n+e}function O1(n,t){const e=1-n;return e*e*t}function B1(n,t){return 2*(1-n)*n*t}function z1(n,t){return n*n*t}function rr(n,t,e,i){return O1(n,t)+B1(n,e)+z1(n,i)}function G1(n,t){const e=1-n;return e*e*e*t}function H1(n,t){const e=1-n;return 3*e*e*n*t}function k1(n,t){return 3*(1-n)*n*n*t}function V1(n,t){return n*n*n*t}function ar(n,t,e,i,o){return G1(n,t)+H1(n,e)+k1(n,i)+V1(n,o)}class Ip extends Ni{constructor(t=new ne,e=new ne,i=new ne,o=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=o}getPoint(t,e=new ne){const i=e,o=this.v0,s=this.v1,r=this.v2,a=this.v3;return i.set(ar(t,o.x,s.x,r.x,a.x),ar(t,o.y,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class W1 extends Ni{constructor(t=new J,e=new J,i=new J,o=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=o}getPoint(t,e=new J){const i=e,o=this.v0,s=this.v1,r=this.v2,a=this.v3;return i.set(ar(t,o.x,s.x,r.x,a.x),ar(t,o.y,s.y,r.y,a.y),ar(t,o.z,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lp extends Ni{constructor(t=new ne,e=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ne){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ne){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class X1 extends Ni{constructor(t=new J,e=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new J){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dp extends Ni{constructor(t=new ne,e=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ne){const i=e,o=this.v0,s=this.v1,r=this.v2;return i.set(rr(t,o.x,s.x,r.x),rr(t,o.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class q1 extends Ni{constructor(t=new J,e=new J,i=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new J){const i=e,o=this.v0,s=this.v1,r=this.v2;return i.set(rr(t,o.x,s.x,r.x),rr(t,o.y,s.y,r.y),rr(t,o.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Up extends Ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ne){const i=e,o=this.points,s=(o.length-1)*t,r=Math.floor(s),a=s-r,c=o[r===0?r:r-1],l=o[r],d=o[r>o.length-2?o.length-1:r+1],u=o[r>o.length-3?o.length-1:r+2];return i.set(Ch(a,c.x,l.x,d.x,u.x),Ch(a,c.y,l.y,d.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const o=this.points[e];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(new ne().fromArray(o))}return this}}var jl=Object.freeze({__proto__:null,ArcCurve:N1,CatmullRomCurve3:F1,CubicBezierCurve:Ip,CubicBezierCurve3:W1,EllipseCurve:Du,LineCurve:Lp,LineCurve3:X1,QuadraticBezierCurve:Dp,QuadraticBezierCurve3:q1,SplineCurve:Up});class j1 extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),o=this.getCurveLengths();let s=0;for(;s<o.length;){if(o[s]>=i){const r=o[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,o=this.curves.length;i<o;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let o=0,s=this.curves;o<s.length;o++){const r=s[o],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const d=c[l];i&&i.equals(d)||(e.push(d),i=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const o=t.curves[e];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const o=this.curves[e];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const o=t.curves[e];this.curves.push(new jl[o.type]().fromJSON(o))}return this}}class Yl extends j1{constructor(t){super(),this.type="Path",this.currentPoint=new ne,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Lp(this.currentPoint.clone(),new ne(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,o){const s=new Dp(this.currentPoint.clone(),new ne(t,e),new ne(i,o));return this.curves.push(s),this.currentPoint.set(i,o),this}bezierCurveTo(t,e,i,o,s,r){const a=new Ip(this.currentPoint.clone(),new ne(t,e),new ne(i,o),new ne(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Up(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,o,s,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,o,s,r),this}absarc(t,e,i,o,s,r){return this.absellipse(t,e,i,i,o,s,r),this}ellipse(t,e,i,o,s,r,a,c){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+l,e+d,i,o,s,r,a,c),this}absellipse(t,e,i,o,s,r,a,c){const l=new Du(t,e,i,o,s,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ae extends Tn{constructor(t=1,e=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:o},e=Math.max(3,e);const s=[],r=[],a=[],c=[],l=new J,d=new ne;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){const f=i+u/e*o;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(r[h]/t+1)/2,d.y=(r[h+1]/t+1)/2,c.push(d.x,d.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new rn(r,3)),this.setAttribute("normal",new rn(a,3)),this.setAttribute("uv",new rn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class te extends Tn{constructor(t=1,e=1,i=1,o=32,s=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:o,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:c};const l=this;o=Math.floor(o),s=Math.floor(s);const d=[],u=[],h=[],f=[];let v=0;const x=[],m=i/2;let p=0;S(),r===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new rn(u,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(f,2));function S(){const M=new J,B=new J;let I=0;const R=(e-t)/i;for(let G=0;G<=s;G++){const tt=[],w=G/s,T=w*(e-t)+t;for(let U=0;U<=o;U++){const $=U/o,et=$*c+a,lt=Math.sin(et),q=Math.cos(et);B.x=T*lt,B.y=-w*i+m,B.z=T*q,u.push(B.x,B.y,B.z),M.set(lt,R,q).normalize(),h.push(M.x,M.y,M.z),f.push($,1-w),tt.push(v++)}x.push(tt)}for(let G=0;G<o;G++)for(let tt=0;tt<s;tt++){const w=x[tt][G],T=x[tt+1][G],U=x[tt+1][G+1],$=x[tt][G+1];t>0&&(d.push(w,T,$),I+=3),e>0&&(d.push(T,U,$),I+=3)}l.addGroup(p,I,0),p+=I}function E(M){const B=v,I=new ne,R=new J;let G=0;const tt=M===!0?t:e,w=M===!0?1:-1;for(let U=1;U<=o;U++)u.push(0,m*w,0),h.push(0,w,0),f.push(.5,.5),v++;const T=v;for(let U=0;U<=o;U++){const et=U/o*c+a,lt=Math.cos(et),q=Math.sin(et);R.x=tt*q,R.y=m*w,R.z=tt*lt,u.push(R.x,R.y,R.z),h.push(0,w,0),I.x=lt*.5+.5,I.y=q*.5*w+.5,f.push(I.x,I.y),v++}for(let U=0;U<o;U++){const $=B+U,et=T+U;M===!0?d.push(et,et+1,$):d.push(et+1,et,$),G+=3}l.addGroup(p,G,M===!0?1:2),p+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class si extends te{constructor(t=1,e=1,i=32,o=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,i,o,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:o,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new si(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mn extends Yl{constructor(t){super(t),this.uuid=Wo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,o=this.holes.length;i<o;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const o=t.holes[e];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const o=this.holes[e];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const o=t.holes[e];this.holes.push(new Yl().fromJSON(o))}return this}}const Y1={triangulate:function(n,t,e=2){const i=t&&t.length,o=i?t[0]*e:n.length;let s=Np(n,0,o,e,!0);const r=[];if(!s||s.next===s.prev)return r;let a,c,l,d,u,h,f;if(i&&(s=Q1(n,t,s,e)),n.length>80*e){a=l=n[0],c=d=n[1];for(let v=e;v<o;v+=e)u=n[v],h=n[v+1],u<a&&(a=u),h<c&&(c=h),u>l&&(l=u),h>d&&(d=h);f=Math.max(l-a,d-c),f=f!==0?32767/f:0}return yr(s,r,e,a,c,f,0),r}};function Np(n,t,e,i,o){let s,r;if(o===uS(n,t,e,i)>0)for(s=t;s<e;s+=i)r=Ih(s,n[s],n[s+1],r);else for(s=e-i;s>=t;s-=i)r=Ih(s,n[s],n[s+1],r);return r&&Ja(r,r.next)&&(wr(r),r=r.next),r}function ko(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ja(e,e.next)||ln(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function yr(n,t,e,i,o,s,r){if(!n)return;!r&&s&&oS(n,i,o,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?K1(n,i,o,s):$1(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),wr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=Z1(ko(n),t,e),yr(n,t,e,i,o,s,2)):r===2&&J1(n,t,e,i,o,s):yr(ko(n),t,e,i,o,s,1);break}}}function $1(n){const t=n.prev,e=n,i=n.next;if(ln(t,e,i)>=0)return!1;const o=t.x,s=e.x,r=i.x,a=t.y,c=e.y,l=i.y,d=o<s?o<r?o:r:s<r?s:r,u=a<c?a<l?a:l:c<l?c:l,h=o>s?o>r?o:r:s>r?s:r,f=a>c?a>l?a:l:c>l?c:l;let v=i.next;for(;v!==t;){if(v.x>=d&&v.x<=h&&v.y>=u&&v.y<=f&&hs(o,a,s,c,r,l,v.x,v.y)&&ln(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function K1(n,t,e,i){const o=n.prev,s=n,r=n.next;if(ln(o,s,r)>=0)return!1;const a=o.x,c=s.x,l=r.x,d=o.y,u=s.y,h=r.y,f=a<c?a<l?a:l:c<l?c:l,v=d<u?d<h?d:h:u<h?u:h,x=a>c?a>l?a:l:c>l?c:l,m=d>u?d>h?d:h:u>h?u:h,p=$l(f,v,t,e,i),S=$l(x,m,t,e,i);let E=n.prevZ,M=n.nextZ;for(;E&&E.z>=p&&M&&M.z<=S;){if(E.x>=f&&E.x<=x&&E.y>=v&&E.y<=m&&E!==o&&E!==r&&hs(a,d,c,u,l,h,E.x,E.y)&&ln(E.prev,E,E.next)>=0||(E=E.prevZ,M.x>=f&&M.x<=x&&M.y>=v&&M.y<=m&&M!==o&&M!==r&&hs(a,d,c,u,l,h,M.x,M.y)&&ln(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=x&&E.y>=v&&E.y<=m&&E!==o&&E!==r&&hs(a,d,c,u,l,h,E.x,E.y)&&ln(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;M&&M.z<=S;){if(M.x>=f&&M.x<=x&&M.y>=v&&M.y<=m&&M!==o&&M!==r&&hs(a,d,c,u,l,h,M.x,M.y)&&ln(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Z1(n,t,e){let i=n;do{const o=i.prev,s=i.next.next;!Ja(o,s)&&Fp(o,i,i.next,s)&&xr(o,s)&&xr(s,o)&&(t.push(o.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),wr(i),wr(i.next),i=n=s),i=i.next}while(i!==n);return ko(i)}function J1(n,t,e,i,o,s){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&aS(r,a)){let c=Op(r,a);r=ko(r,r.next),c=ko(c,c.next),yr(r,t,e,i,o,s,0),yr(c,t,e,i,o,s,0);return}a=a.next}r=r.next}while(r!==n)}function Q1(n,t,e,i){const o=[];let s,r,a,c,l;for(s=0,r=t.length;s<r;s++)a=t[s]*i,c=s<r-1?t[s+1]*i:n.length,l=Np(n,a,c,i,!1),l===l.next&&(l.steiner=!0),o.push(rS(l));for(o.sort(tS),s=0;s<o.length;s++)e=eS(o[s],e);return e}function tS(n,t){return n.x-t.x}function eS(n,t){const e=nS(n,t);if(!e)return t;const i=Op(e,n);return ko(i,i.next),ko(e,e.next)}function nS(n,t){let e=t,i=-1/0,o;const s=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=s&&h>i&&(i=h,o=e.x<e.next.x?e:e.next,h===s))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let d=1/0,u;e=o;do s>=e.x&&e.x>=c&&s!==e.x&&hs(r<l?s:i,r,c,l,r<l?i:s,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(s-e.x),xr(e,n)&&(u<d||u===d&&(e.x>o.x||e.x===o.x&&iS(o,e)))&&(o=e,d=u)),e=e.next;while(e!==a);return o}function iS(n,t){return ln(n.prev,n,t.prev)<0&&ln(t.next,n,n.next)<0}function oS(n,t,e,i){let o=n;do o.z===0&&(o.z=$l(o.x,o.y,t,e,i)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==n);o.prevZ.nextZ=null,o.prevZ=null,sS(o)}function sS(n){let t,e,i,o,s,r,a,c,l=1;do{for(e=n,n=null,s=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(o=e,e=e.nextZ,a--):(o=i,i=i.nextZ,c--),s?s.nextZ=o:n=o,o.prevZ=s,s=o;e=i}s.nextZ=null,l*=2}while(r>1);return n}function $l(n,t,e,i,o){return n=(n-e)*o|0,t=(t-i)*o|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function rS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function hs(n,t,e,i,o,s,r,a){return(o-r)*(t-a)>=(n-r)*(s-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(o-r)*(i-a)}function aS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!cS(n,t)&&(xr(n,t)&&xr(t,n)&&lS(n,t)&&(ln(n.prev,n,t.prev)||ln(n,t.prev,t))||Ja(n,t)&&ln(n.prev,n,n.next)>0&&ln(t.prev,t,t.next)>0)}function ln(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ja(n,t){return n.x===t.x&&n.y===t.y}function Fp(n,t,e,i){const o=ca(ln(n,t,e)),s=ca(ln(n,t,i)),r=ca(ln(e,i,n)),a=ca(ln(e,i,t));return!!(o!==s&&r!==a||o===0&&aa(n,e,t)||s===0&&aa(n,i,t)||r===0&&aa(e,n,i)||a===0&&aa(e,t,i))}function aa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ca(n){return n>0?1:n<0?-1:0}function cS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Fp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function xr(n,t){return ln(n.prev,n,n.next)<0?ln(n,t,n.next)>=0&&ln(n,n.prev,t)>=0:ln(n,t,n.prev)<0||ln(n,n.next,t)<0}function lS(n,t){let e=n,i=!1;const o=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&o<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Op(n,t){const e=new Kl(n.i,n.x,n.y),i=new Kl(t.i,t.x,t.y),o=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=o,o.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Ih(n,t,e,i){const o=new Kl(n,t,e);return i?(o.next=i.next,o.prev=i,i.next.prev=o,i.next=o):(o.prev=o,o.next=o),o}function wr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uS(n,t,e,i){let o=0;for(let s=t,r=e-i;s<e;s+=i)o+=(n[r]-n[s])*(n[s+1]+n[r+1]),r=s;return o}class ws{static area(t){const e=t.length;let i=0;for(let o=e-1,s=0;s<e;o=s++)i+=t[o].x*t[s].y-t[s].x*t[o].y;return i*.5}static isClockWise(t){return ws.area(t)<0}static triangulateShape(t,e){const i=[],o=[],s=[];Lh(t),Dh(i,t);let r=t.length;e.forEach(Lh);for(let c=0;c<e.length;c++)o.push(r),r+=e[c].length,Dh(i,e[c]);const a=Y1.triangulate(i,o);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Lh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Dh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class vn extends Tn{constructor(t=new mn([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,o=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new rn(o,3)),this.setAttribute("uv",new rn(s,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:dS;let E,M=!1,B,I,R,G;p&&(E=p.getSpacedPoints(d),M=!0,h=!1,B=p.computeFrenetFrames(d,!1),I=new J,R=new J,G=new J),h||(m=0,f=0,v=0,x=0);const tt=a.extractPoints(l);let w=tt.shape;const T=tt.holes;if(!ws.isClockWise(w)){w=w.reverse();for(let ot=0,g=T.length;ot<g;ot++){const P=T[ot];ws.isClockWise(P)&&(T[ot]=P.reverse())}}const $=ws.triangulateShape(w,T),et=w;for(let ot=0,g=T.length;ot<g;ot++){const P=T[ot];w=w.concat(P)}function lt(ot,g,P){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(g,P)}const q=w.length,it=$.length;function W(ot,g,P){let L,F,N;const K=ot.x-g.x,Z=ot.y-g.y,b=P.x-ot.x,y=P.y-ot.y,C=K*K+Z*Z,Y=K*y-Z*b;if(Math.abs(Y)>Number.EPSILON){const V=Math.sqrt(C),k=Math.sqrt(b*b+y*y),ft=g.x-Z/V,ct=g.y+K/V,vt=P.x-y/k,bt=P.y+b/k,ht=((vt-ft)*y-(bt-ct)*b)/(K*y-Z*b);L=ft+K*ht-ot.x,F=ct+Z*ht-ot.y;const _t=L*L+F*F;if(_t<=2)return new ne(L,F);N=Math.sqrt(_t/2)}else{let V=!1;K>Number.EPSILON?b>Number.EPSILON&&(V=!0):K<-Number.EPSILON?b<-Number.EPSILON&&(V=!0):Math.sign(Z)===Math.sign(y)&&(V=!0),V?(L=-Z,F=K,N=Math.sqrt(C)):(L=K,F=Z,N=Math.sqrt(C/2))}return new ne(L/N,F/N)}const mt=[];for(let ot=0,g=et.length,P=g-1,L=ot+1;ot<g;ot++,P++,L++)P===g&&(P=0),L===g&&(L=0),mt[ot]=W(et[ot],et[P],et[L]);const wt=[];let Mt,Ft=mt.concat();for(let ot=0,g=T.length;ot<g;ot++){const P=T[ot];Mt=[];for(let L=0,F=P.length,N=F-1,K=L+1;L<F;L++,N++,K++)N===F&&(N=0),K===F&&(K=0),Mt[L]=W(P[L],P[N],P[K]);wt.push(Mt),Ft=Ft.concat(Mt)}for(let ot=0;ot<m;ot++){const g=ot/m,P=f*Math.cos(g*Math.PI/2),L=v*Math.sin(g*Math.PI/2)+x;for(let F=0,N=et.length;F<N;F++){const K=lt(et[F],mt[F],L);O(K.x,K.y,-P)}for(let F=0,N=T.length;F<N;F++){const K=T[F];Mt=wt[F];for(let Z=0,b=K.length;Z<b;Z++){const y=lt(K[Z],Mt[Z],L);O(y.x,y.y,-P)}}}const Ht=v+x;for(let ot=0;ot<q;ot++){const g=h?lt(w[ot],Ft[ot],Ht):w[ot];M?(R.copy(B.normals[0]).multiplyScalar(g.x),I.copy(B.binormals[0]).multiplyScalar(g.y),G.copy(E[0]).add(R).add(I),O(G.x,G.y,G.z)):O(g.x,g.y,0)}for(let ot=1;ot<=d;ot++)for(let g=0;g<q;g++){const P=h?lt(w[g],Ft[g],Ht):w[g];M?(R.copy(B.normals[ot]).multiplyScalar(P.x),I.copy(B.binormals[ot]).multiplyScalar(P.y),G.copy(E[ot]).add(R).add(I),O(G.x,G.y,G.z)):O(P.x,P.y,u/d*ot)}for(let ot=m-1;ot>=0;ot--){const g=ot/m,P=f*Math.cos(g*Math.PI/2),L=v*Math.sin(g*Math.PI/2)+x;for(let F=0,N=et.length;F<N;F++){const K=lt(et[F],mt[F],L);O(K.x,K.y,u+P)}for(let F=0,N=T.length;F<N;F++){const K=T[F];Mt=wt[F];for(let Z=0,b=K.length;Z<b;Z++){const y=lt(K[Z],Mt[Z],L);M?O(y.x,y.y+E[d-1].y,E[d-1].x+P):O(y.x,y.y,u+P)}}}rt(),pt();function rt(){const ot=o.length/3;if(h){let g=0,P=q*g;for(let L=0;L<it;L++){const F=$[L];ut(F[2]+P,F[1]+P,F[0]+P)}g=d+m*2,P=q*g;for(let L=0;L<it;L++){const F=$[L];ut(F[0]+P,F[1]+P,F[2]+P)}}else{for(let g=0;g<it;g++){const P=$[g];ut(P[2],P[1],P[0])}for(let g=0;g<it;g++){const P=$[g];ut(P[0]+q*d,P[1]+q*d,P[2]+q*d)}}i.addGroup(ot,o.length/3-ot,0)}function pt(){const ot=o.length/3;let g=0;Tt(et,g),g+=et.length;for(let P=0,L=T.length;P<L;P++){const F=T[P];Tt(F,g),g+=F.length}i.addGroup(ot,o.length/3-ot,1)}function Tt(ot,g){let P=ot.length;for(;--P>=0;){const L=P;let F=P-1;F<0&&(F=ot.length-1);for(let N=0,K=d+m*2;N<K;N++){const Z=q*N,b=q*(N+1),y=g+L+Z,C=g+F+Z,Y=g+F+b,V=g+L+b;st(y,C,Y,V)}}}function O(ot,g,P){c.push(ot),c.push(g),c.push(P)}function ut(ot,g,P){dt(ot),dt(g),dt(P);const L=o.length/3,F=S.generateTopUV(i,o,L-3,L-2,L-1);yt(F[0]),yt(F[1]),yt(F[2])}function st(ot,g,P,L){dt(ot),dt(g),dt(L),dt(g),dt(P),dt(L);const F=o.length/3,N=S.generateSideWallUV(i,o,F-6,F-3,F-2,F-1);yt(N[0]),yt(N[1]),yt(N[3]),yt(N[1]),yt(N[2]),yt(N[3])}function dt(ot){o.push(c[ot*3+0]),o.push(c[ot*3+1]),o.push(c[ot*3+2])}function yt(ot){s.push(ot.x),s.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return hS(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new jl[o.type]().fromJSON(o)),new vn(i,t.options)}}const dS={generateTopUV:function(n,t,e,i,o){const s=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[o*3],d=t[o*3+1];return[new ne(s,r),new ne(a,c),new ne(l,d)]},generateSideWallUV:function(n,t,e,i,o,s){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],d=t[i*3+1],u=t[i*3+2],h=t[o*3],f=t[o*3+1],v=t[o*3+2],x=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-d)<Math.abs(r-l)?[new ne(r,1-c),new ne(l,1-u),new ne(h,1-v),new ne(x,1-p)]:[new ne(a,1-c),new ne(d,1-u),new ne(f,1-v),new ne(m,1-p)]}};function hS(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,o=n.length;i<o;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class at extends Tn{constructor(t=1,e=32,i=16,o=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:o,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const d=[],u=new J,h=new J,f=[],v=[],x=[],m=[];for(let p=0;p<=i;p++){const S=[],E=p/i;let M=0;p===0&&r===0?M=.5/e:p===i&&c===Math.PI&&(M=-.5/e);for(let B=0;B<=e;B++){const I=B/e;u.x=-t*Math.cos(o+I*s)*Math.sin(r+E*a),u.y=t*Math.cos(r+E*a),u.z=t*Math.sin(o+I*s)*Math.sin(r+E*a),v.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),m.push(I+M,1-E),S.push(l++)}d.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const E=d[p][S+1],M=d[p][S],B=d[p+1][S],I=d[p+1][S+1];(p!==0||r>0)&&f.push(E,M,I),(p!==i-1||c<Math.PI)&&f.push(M,B,I)}this.setIndex(f),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new at(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ln extends Tn{constructor(t=1,e=.4,i=12,o=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:o,arc:s},i=Math.floor(i),o=Math.floor(o);const r=[],a=[],c=[],l=[],d=new J,u=new J,h=new J;for(let f=0;f<=i;f++)for(let v=0;v<=o;v++){const x=v/o*s,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),h.subVectors(u,d).normalize(),c.push(h.x,h.y,h.z),l.push(v/o),l.push(f/i)}for(let f=1;f<=i;f++)for(let v=1;v<=o;v++){const x=(o+1)*f+v-1,m=(o+1)*(f-1)+v-1,p=(o+1)*(f-1)+v,S=(o+1)*f+v;r.push(x,m,S),r.push(m,p,S)}this.setIndex(r),this.setAttribute("position",new rn(a,3)),this.setAttribute("normal",new rn(c,3)),this.setAttribute("uv",new rn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lt extends Ds{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hp,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nt extends Lt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Da={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class fS{constructor(t,e,i){const o=this;let s=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(d){a++,s===!1&&o.onStart!==void 0&&o.onStart(d,r,a),s=!0},this.itemEnd=function(d){r++,o.onProgress!==void 0&&o.onProgress(d,r,a),r===a&&(s=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(d){o.onError!==void 0&&o.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=l.length;u<h;u+=2){const f=l[u],v=l[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return v}return null}}}const pS=new fS;class Ns{constructor(t){this.manager=t!==void 0?t:pS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(o,s){i.load(t,o,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ns.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class mS extends Error{constructor(t,e){super(t),this.response=e}}class gS extends Ns{constructor(t){super(t)}load(t,e,i,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Da.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(qi[t]!==void 0){qi[t].push({onLoad:e,onProgress:i,onError:o});return}qi[t]=[],qi[t].push({onLoad:e,onProgress:i,onError:o});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=qi[t],u=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,v=f!==0;let x=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:E,value:M})=>{if(E)p.close();else{x+=M.byteLength;const B=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:f});for(let I=0,R=d.length;I<R;I++){const G=d[I];G.onProgress&&G.onProgress(B)}p.enqueue(M),S()}},E=>{p.error(E)})}}});return new Response(m)}else throw new mS(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(v=>f.decode(v))}}}).then(l=>{Da.add(t,l);const d=qi[t];delete qi[t];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const d=qi[t];if(d===void 0)throw this.manager.itemError(t),l;delete qi[t];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Bp extends Ns{constructor(t){super(t)}load(t,e,i,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Da.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=vr("img");function c(){d(),Da.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){d(),o&&o(u),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Fs extends Ns{constructor(t){super(t)}load(t,e,i,o){const s=new Cu;s.colorSpace=vi;const r=new Bp(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function c(l){r.load(t[l],function(d){s.images[l]=d,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,o)}for(let l=0;l<t.length;++l)c(l);return s}}class jn extends Ns{constructor(t){super(t)}load(t,e,i,o){const s=new Un,r=new Bp(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,o),s}}class Nu extends bn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const qc=new sn,Uh=new J,Nh=new J;class zp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Iu,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uh),Nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nh),e.updateMatrixWorld(),qc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fh=new sn,qs=new J,jc=new J;class vS extends zp{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,o=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),qs.setFromMatrixPosition(t.matrixWorld),i.position.copy(qs),jc.copy(i.position),jc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(jc),i.updateMatrixWorld(),o.makeTranslation(-qs.x,-qs.y,-qs.z),Fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh)}}class ri extends Nu{constructor(t,e,i=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new vS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _S extends zp{constructor(){super(new Ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ai extends Nu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new _S}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ci extends Nu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Oh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Oh(){return performance.now()}class yS{constructor(){this.type="ShapePath",this.color=new we,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Yl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,o){return this.currentPath.quadraticCurveTo(t,e,i,o),this}bezierCurveTo(t,e,i,o,s,r){return this.currentPath.bezierCurveTo(t,e,i,o,s,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const S=[];for(let E=0,M=p.length;E<M;E++){const B=p[E],I=new mn;I.curves=B.curves,S.push(I)}return S}function i(p,S){const E=S.length;let M=!1;for(let B=E-1,I=0;I<E;B=I++){let R=S[B],G=S[I],tt=G.x-R.x,w=G.y-R.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(R=S[I],tt=-tt,G=S[B],w=-w),p.y<R.y||p.y>G.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const T=w*(p.x-R.x)-tt*(p.y-R.y);if(T===0)return!0;if(T<0)continue;M=!M}}else{if(p.y!==R.y)continue;if(G.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=G.x)return!0}}return M}const o=ws.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,a,c;const l=[];if(s.length===1)return a=s[0],c=new mn,c.curves=a.curves,l.push(c),l;let d=!o(s[0].getPoints());d=t?!d:d;const u=[],h=[];let f=[],v=0,x;h[v]=void 0,f[v]=[];for(let p=0,S=s.length;p<S;p++)a=s[p],x=a.getPoints(),r=o(x),r=t?!r:r,r?(!d&&h[v]&&v++,h[v]={s:new mn,p:x},h[v].s.curves=a.curves,d&&v++,f[v]=[]):f[v].push({h:a,p:x[0]});if(!h[0])return e(s);if(h.length>1){let p=!1,S=0;for(let E=0,M=h.length;E<M;E++)u[E]=[];for(let E=0,M=h.length;E<M;E++){const B=f[E];for(let I=0;I<B.length;I++){const R=B[I];let G=!0;for(let tt=0;tt<h.length;tt++)i(R.p,h[tt].p)&&(E!==tt&&S++,G?(G=!1,u[tt].push(R)):p=!0);G&&u[E].push(R)}}S>0&&p===!1&&(f=u)}let m;for(let p=0,S=h.length;p<S;p++){c=h[p].s,l.push(c),m=f[p];for(let E=0,M=m.length;E<M;E++)c.holes.push(m[E].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wu);class li extends Ns{constructor(t){super(t)}load(t,e,i,o){const s=this,r=new gS(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const c=s.parse(JSON.parse(a));e&&e(c)},i,o)}parse(t){return new xS(t)}}class xS{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],o=wS(t,e,this.data);for(let s=0,r=o.length;s<r;s++)i.push(...o[s].toShapes());return i}}function wS(n,t,e){const i=Array.from(n),o=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*o,r=[];let a=0,c=0;for(let l=0;l<i.length;l++){const d=i[l];if(d===`
`)a=0,c-=s;else{const u=MS(d,o,a,c,e);a+=u.offsetX,r.push(u.path)}}return r}function MS(n,t,e,i,o){const s=o.glyphs[n]||o.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+o.familyName+".");return}const r=new yS;let a,c,l,d,u,h,f,v;if(s.o){const x=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=x.length;m<p;)switch(x[m++]){case"m":a=x[m++]*t+e,c=x[m++]*t+i,r.moveTo(a,c);break;case"l":a=x[m++]*t+e,c=x[m++]*t+i,r.lineTo(a,c);break;case"q":l=x[m++]*t+e,d=x[m++]*t+i,u=x[m++]*t+e,h=x[m++]*t+i,r.quadraticCurveTo(u,h,l,d);break;case"b":l=x[m++]*t+e,d=x[m++]*t+i,u=x[m++]*t+e,h=x[m++]*t+i,f=x[m++]*t+e,v=x[m++]*t+i,r.bezierCurveTo(u,h,f,v,l,d);break}}return{offsetX:s.ha*t,path:r}}class He extends vn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const o=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(o,e)}this.type="TextGeometry"}}const SS=An({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=null,o=Yt(!1),s=Yt(!1),r=Yt(!1);return zn(()=>{if(e.value){let a=function(){requestAnimationFrame(a),o.value?u.rotation.y+=.03:s.value&&(u.rotation.y-=.03),d.render(c,l)};const c=new On,l=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),d=new Fn({antialias:!0,alpha:!0});d.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(d.domElement);const u=new Wt,h=new ci(16777215,2);c.add(h);const f=new ai(16777215,4);f.position.set(5,5,5),c.add(f);const v=new ri(16777215,5,50);v.position.set(0,2,4),c.add(v);const x=new jn,m=x.load("/3d-bear-arts/assets/lv2.jpg"),p=x.load("/3d-bear-arts/assets/lv2.jpg");m.wrapS=m.wrapT=Qe,p.wrapS=p.wrapT=Qe;const S=new Nt({color:8343336,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),E=new Nt({color:5978654,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),M=new Nt({color:13152668,metalness:.2,roughness:.05,bumpMap:m,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:p,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:Ie});new Nt({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const B=new at(1,32,32,0,Math.PI),I=new _(B,M),R=new _(B,S);I.scale.set(.85,.85,.8),R.scale.set(.85,.85,.8),I.position.y=-.2,R.position.y=-.2,I.rotation.y=Math.PI/2,R.rotation.y=Math.PI*1.5;const G=new Ae(1,32),tt=new _(G,S);tt.scale.set(.85,.85,.8),tt.position.set(0,-.2,0),tt.rotation.y=Math.PI/2;const w=new Wt;w.add(I),w.add(R),w.add(tt),u.add(w);const T=new at(.6,32,32,0,Math.PI),U=new _(T,S);U.scale.set(1,.95,.95),U.position.set(0,1,0),U.rotation.y=Math.PI*1.5;const $=new _(T,M);$.scale.set(1,.95,.95),$.position.set(0,1,0),$.rotation.y=Math.PI/2;const et=new Ae(.6,32),lt=new _(et,S);lt.position.set(0,1,0),lt.rotation.y=Math.PI/2,lt.scale.set(1,.95,.95);const q=new Wt;q.add(U),q.add($),q.add(lt),u.add(q);const it=new at(.25,32,32),W=new _(it,S);W.position.set(-.45,1.35,-.1),u.add(W);const mt=new _(it,M);mt.position.set(.45,1.35,-.1),u.add(mt);const wt=new at(.25,32,32,Math.PI/2,Math.PI),Mt=new _(wt,E);Mt.scale.set(1.1,.6,.8),Mt.position.set(0,.84,.5),Mt.rotation.y=Math.PI;const Ft=new at(.25,32,32,Math.PI/2,Math.PI),Ht=new _(Ft,M);Ht.scale.set(1.1,.6,.8),Ht.position.set(0,.84,.5),Ht.rotation.y=0;const rt=new Ae(.25,32),pt=new _(rt,S);pt.scale.set(.8,.6,.8),pt.position.set(0,.84,.5),pt.rotation.y=Math.PI/2;const Tt=new Wt;Tt.add(Mt),Tt.add(Ht),Tt.add(pt),u.add(Tt);const O=new mn;O.moveTo(0,0),O.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),O.bezierCurveTo(-.6,.3,0,.6,0,1),O.bezierCurveTo(0,.6,.6,.3,.6,0),O.bezierCurveTo(.6,-.3,0,-.3,0,0);const ut={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Nt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const st=new vn(O,ut),dt=new _(st,S);dt.scale.set(.1,.1,.1),dt.rotation.z=he.degToRad(210),dt.rotation.x=he.degToRad(5),dt.rotation.y=he.degToRad(-45),dt.position.set(-.4,.9,.45);const yt=new _(st,E);yt.scale.set(.6,.5,.5),yt.position.set(.35,0,0),yt.rotation.y=Math.PI,yt.rotation.x=Math.PI;const ot=new _(st,E);ot.scale.set(.2,.2,.2),ot.position.set(.5,-.1,.2),ot.rotation.y=Math.PI,ot.rotation.x=Math.PI,u.add(ot);const g=new Mn(1.3,1.2,.6),P=new _(g,S);P.scale.set(.45,.45,.45),P.position.set(.35,-.2,.1),P.rotation.y=Math.PI;const L=new Ln(.15,.025,10,100);new Nt({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const F=new _(L,S);F.position.set(.35,.1,.1),F.rotation.z=Math.PI/2,F.rotation.x=Math.PI/8,F.rotation.y=Math.PI/14;const N=new _(L,S);N.position.set(.35,.1,.13),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/-8,N.rotation.y=Math.PI/12;const K=new Wt;K.add(P),K.add(F),K.add(N),u.add(K);const Z=new at(.35,32,32),b=new _(Z,S);b.scale.set(.75,1.25,.65),b.position.set(-.7,-.15,.2),u.add(b);const y=new _(Z,M);y.scale.set(.75,1.25,.65),y.position.set(.7,-.15,.2),u.add(y);const C=new te(.2,.22,.6,32),Y=new _(C,S);Y.position.set(-.4,-1.05,0),u.add(Y);const V=new _(C,M);V.position.set(.4,-1.05,0),u.add(V);const k=new at(.3,32,32),ft=new _(k,S);ft.scale.set(1,.72,1.5),ft.position.set(-.4,-1.45,.17),u.add(ft);const ct=new _(k,M);ct.scale.set(1,.72,1.5),ct.position.set(.4,-1.45,.17),u.add(ct);const vt=new at(.44,32,32),bt=new _(vt,S);bt.position.set(-.15,-.45,-.4),u.add(bt);const ht=new _(vt,M);ht.position.set(.15,-.45,-.4),u.add(ht);const _t=new at(.18,32,32),Dt=new _(_t,S);Dt.position.set(0,-.35,-.8),u.add(Dt),new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const St=new He("X",{font:Q,size:.2,depth:.05});new eo({color:0});const Et=new _(St,E);Et.position.set(-.3,.99,.53),Et.rotation.x=he.degToRad(-5),Et.rotation.y=he.degToRad(-15),u.add(Et);const Xt=new He("O",{font:Q,size:.2,depth:.05});new eo({color:0});const se=new _(Xt,E);se.position.set(.14,.99,.53),se.rotation.y=he.degToRad(12),se.rotation.x=he.degToRad(-5),u.add(se)}),Dt.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Rt=()=>{u.rotation.y,u.rotation.x},$t=()=>{o.value=!0,s.value=!1,r.value=!1},Gt=()=>{o.value=!1,s.value=!0,r.value=!1},Zt=()=>{o.value=!1,s.value=!1,Rt()},H=Q=>{const St=window.innerWidth/2;Q>St?$t():Gt(),Rt()},xt=Q=>{clearTimeout(i),Zt(),r.value=!0;const St={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1};if(r.value){const Et=St.x*Math.PI*.2,Xt=St.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=Xt}i=setTimeout(()=>{r.value=!1,H(Q.clientX)},500)};window.addEventListener("mousemove",xt);const nt=Q=>{if(r.value){const St={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1},Et=St.x*Math.PI*.2,Xt=St.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=Xt}};window.addEventListener("mousemove",nt),a(),Ve(()=>t.bodyPosition,Q=>{u.position.set(Q.x,Q.y,Q.z)}),Ve(()=>t.cameraPosition,Q=>{l.position.set(t.bodyPosition.x,1,Q),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Gn(),Yn("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2))}}),bS=$n(SS,[["__scopeId","data-v-f3beb116"]]),ES=An({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=null,o=Yt(!1),s=Yt(!1),r=Yt(!1);return zn(()=>{if(e.value){let a=function(){requestAnimationFrame(a),o.value?u.rotation.y+=.03:s.value&&(u.rotation.y-=.03),d.render(c,l)};const c=new On,l=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),d=new Fn({antialias:!0,alpha:!0});d.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(d.domElement);const u=new Wt,h=new ci(16777215,2);c.add(h);const f=new ai(16777215,4);f.position.set(5,5,5),c.add(f);const v=new ri(16777215,5,50);v.position.set(0,2,4),c.add(v);const x=new jn,m=x.load("/3d-bear-arts/assets/pop6.jpg"),p=x.load("/3d-bear-arts/assets/pop7.jpg");m.wrapS=m.wrapT=Qe,p.wrapS=p.wrapT=Qe;const S=new Nt({color:16738740,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new Nt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Ie}),M=new Nt({color:16766720,map:m,metalness:.3,roughness:.5}),B=new Nt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Ie}),I=new Nt({color:9055202,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Nt({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Ie});const R=new Nt({color:65535,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),G=new Nt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Ie}),tt=new at(1,32,32,0,Math.PI),w=new _(tt,E),T=new _(tt,S);w.scale.set(.85,.85,.8),T.scale.set(.85,.85,.8),w.position.y=-.2,T.position.y=-.2,w.rotation.y=Math.PI/2,T.rotation.y=Math.PI*1.5;const U=new Ae(1,32),$=new _(U,S);$.scale.set(.85,.85,.8),$.position.set(0,-.2,0),$.rotation.y=Math.PI/2;const et=new Wt;et.add(w),et.add(T),et.add($),u.add(et);const lt=new at(.6,32,32,0,Math.PI),q=new _(lt,M);q.scale.set(1,.95,.95),q.position.set(0,1,0),q.rotation.y=Math.PI*1.5;const it=new _(lt,B);it.scale.set(1,.95,.95),it.position.set(0,1,0),it.rotation.y=Math.PI/2;const W=new Ae(.6,32),mt=new _(W,M);mt.position.set(0,1,0),mt.rotation.y=Math.PI/2,mt.scale.set(1,.95,.95);const wt=new Wt;wt.add(q),wt.add(it),wt.add(mt),u.add(wt);const Mt=new at(.25,32,32),Ft=new _(Mt,S);Ft.position.set(-.45,1.35,-.1),u.add(Ft);const Ht=new _(Mt,E);Ht.position.set(.45,1.35,-.1),u.add(Ht);const rt=new at(.25,32,32,Math.PI/2,Math.PI),pt=new _(rt,M);pt.scale.set(1.1,.6,.8),pt.position.set(0,.84,.5),pt.rotation.y=Math.PI;const Tt=new at(.25,32,32,Math.PI/2,Math.PI),O=new _(Tt,B);O.scale.set(1.1,.6,.8),O.position.set(0,.84,.5),O.rotation.y=0;const ut=new Ae(.25,32),st=new _(ut,M);st.scale.set(.8,.6,.8),st.position.set(0,.84,.5),st.rotation.y=Math.PI/2;const dt=new Wt;dt.add(pt),dt.add(O),dt.add(st),u.add(dt);const yt=new mn;yt.moveTo(0,0),yt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),yt.bezierCurveTo(-.6,.3,0,.6,0,1),yt.bezierCurveTo(0,.6,.6,.3,.6,0),yt.bezierCurveTo(.6,-.3,0,-.3,0,0);const ot={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new vn(yt,ot),P=new _(g,M);P.scale.set(.5,.5,.5),P.position.set(.35,0,0),P.rotation.y=Math.PI,P.rotation.x=Math.PI,u.add(P);const L=new _(g,R);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const F=new _(g,S);F.scale.set(.25,.25,.27),F.position.set(.4,.3,-.2),F.rotation.y=Math.PI,F.rotation.x=Math.PI,u.add(F);const N=new at(.35,32,32),K=new _(N,R);K.scale.set(.75,1.25,.65),K.position.set(-.7,-.15,.2),u.add(K);const Z=new _(N,G);Z.scale.set(.75,1.25,.65),Z.position.set(.7,-.15,.2),u.add(Z);const b=new te(.2,.22,.6,32),y=new _(b,M);y.position.set(-.4,-1.05,0),u.add(y);const C=new _(b,B);C.position.set(.4,-1.05,0),u.add(C);const Y=new at(.3,32,32),V=new _(Y,M);V.scale.set(1,.72,1.5),V.position.set(-.4,-1.45,.17),u.add(V);const k=new _(Y,B);k.scale.set(1,.72,1.5),k.position.set(.4,-1.45,.17),u.add(k);const ft=new at(.44,32,32),ct=new _(ft,S);ct.position.set(-.15,-.45,-.4),u.add(ct);const vt=new _(ft,E);vt.position.set(.15,-.45,-.4),u.add(vt);const bt=new at(.18,32,32),ht=new _(bt,S);ht.position.set(0,-.35,-.8),u.add(ht),new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(xt){const nt=new He("X",{font:xt,size:.2,depth:.05});new eo({color:0});const Q=new _(nt,S);Q.position.set(-.3,.99,.53),Q.rotation.x=he.degToRad(-5),Q.rotation.y=he.degToRad(-15),u.add(Q);const St=new He("O",{font:xt,size:.2,depth:.05});new eo({color:0});const Et=new _(St,R);Et.position.set(.14,.99,.53),Et.rotation.y=he.degToRad(12),Et.rotation.x=he.degToRad(-5),u.add(Et);const Xt=new He("POP",{font:xt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),se=new Nt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const re=new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),ue=new Nt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ce=new _(Xt,se);ce.scale.set(.15,.15,.15),ce.position.set(.03,1.16,.1),ce.rotateZ(-25),u.add(ce);const me=new _(Xt,I);me.scale.set(.14,.14,.14),me.rotateZ(45),me.position.set(.2,-.7,.3),u.add(me);const Me=new _(Xt,re);Me.scale.set(.14,.14,.14),Me.rotateZ(45),Me.rotateY(45),Me.position.set(.3,.7,.3),u.add(Me);const jt=new _(Xt,re);jt.scale.set(.15,.15,.15),jt.rotateZ(45),jt.rotateY(45),jt.position.set(.35,-1.5,.3),u.add(jt);const qt=new _(Xt,ue);qt.scale.set(.17,.17,.17),qt.rotateZ(45),qt.rotateY(15),qt.position.set(.35,1,.3),u.add(qt)}),ht.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Dt=()=>{u.rotation.y,u.rotation.x},Bt=()=>{o.value=!0,s.value=!1,r.value=!1},Rt=()=>{o.value=!1,s.value=!0,r.value=!1},$t=()=>{o.value=!1,s.value=!1,Dt()},Gt=xt=>{const nt=window.innerWidth/2;xt>nt?Bt():Rt(),Dt()},Zt=xt=>{clearTimeout(i),$t(),r.value=!0;const nt={x:xt.clientX/window.innerWidth*2-1,y:-(xt.clientY/window.innerHeight)*2+1};if(r.value){const Q=nt.x*Math.PI*.2,St=nt.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=St}i=setTimeout(()=>{r.value=!1,Gt(xt.clientX)},500)};window.addEventListener("mousemove",Zt);const H=xt=>{if(r.value){const nt={x:xt.clientX/window.innerWidth*2-1,y:-(xt.clientY/window.innerHeight)*2+1},Q=nt.x*Math.PI*.2,St=nt.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=St}};window.addEventListener("mousemove",H),a(),Ve(()=>t.bodyPosition,xt=>{u.position.set(xt.x,xt.y,xt.z)}),Ve(()=>t.cameraPosition,xt=>{l.position.set(t.bodyPosition.x,1,xt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Gn(),Yn("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2))}}),TS=$n(ES,[["__scopeId","data-v-8cfea564"]]),AS={class:"pixel-controls"},PS={class:"side-buttons"},RS=An({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),o=Yt(!1),s=Yt(!1),r=Yt(!1);zn(()=>{if(e.value){let h=function(){requestAnimationFrame(h),i.value&&(m.rotation.y+=.03),o.value&&(m.rotation.y-=.03),s.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03);const Q=xt.getElapsedTime();H.forEach((St,Et)=>{const Xt=.2+Math.sin(Q*3+nt[Et])*.1;St.scale.set(Xt,Xt,Xt)}),x.render(f,v)};const f=new On,v=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Fn({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const m=new Wt,p=new Wt;f.add(p);const S=new ci(16777215,2);f.add(S);const E=new ai(16777215,4);E.position.set(5,5,5),f.add(E);const M=new ri(16777215,5,50);M.position.set(0,2,4),f.add(M);const B=new jn,I=B.load("/3d-bear-arts/assets/pop6.jpg"),R=B.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=Qe,R.wrapS=R.wrapT=Qe,R.repeat.set(2,2);const G=new Nt({color:16738740,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),tt=new Nt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Ie}),w=new Nt({color:16766720,map:I,metalness:.3,roughness:.5}),T=new Nt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Ie}),U=new Nt({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),$=new Nt({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),et=new Nt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Ie}),lt=new at(1,32,32,0,Math.PI),q=new _(lt,tt),it=new _(lt,G);q.scale.set(.85,.85,.8),it.scale.set(.85,.85,.8),q.position.y=-.2,it.position.y=-.2,q.rotation.y=Math.PI/2,it.rotation.y=Math.PI*1.5;const W=new Ae(1,32),mt=new _(W,G);mt.scale.set(.85,.85,.8),mt.position.set(0,-.2,0),mt.rotation.y=Math.PI/2;const wt=new Wt;wt.add(q),wt.add(it),wt.add(mt),m.add(wt);const Mt=new at(.6,32,32,0,Math.PI),Ft=new _(Mt,w);Ft.scale.set(1,.95,.95),Ft.position.set(0,1,0),Ft.rotation.y=Math.PI*1.5;const Ht=new _(Mt,T);Ht.scale.set(1,.95,.95),Ht.position.set(0,1,0),Ht.rotation.y=Math.PI/2;const rt=new Ae(.6,32),pt=new _(rt,w);pt.position.set(0,1,0),pt.rotation.y=Math.PI/2,pt.scale.set(1,.95,.95);const Tt=new Wt;Tt.add(Ft),Tt.add(Ht),Tt.add(pt),m.add(Tt);const O=new at(.25,32,32),ut=new _(O,G);ut.position.set(-.45,1.35,-.1),m.add(ut);const st=new _(O,tt);st.position.set(.45,1.35,-.1),m.add(st);const dt=new at(.25,32,32,Math.PI/2,Math.PI),yt=new _(dt,w);yt.scale.set(1.1,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=Math.PI;const ot=new at(.25,32,32,Math.PI/2,Math.PI),g=new _(ot,T);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const P=new Ae(.25,32),L=new _(P,w);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const F=new Wt;F.add(yt),F.add(g),F.add(L),m.add(F);const N=new mn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const K={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Z=new vn(N,K),b=new _(Z,w);b.scale.set(.5,.5,.5),b.position.set(.3,0,0),b.rotation.y=Math.PI,b.rotation.x=Math.PI,m.add(b);const y=new _(Z,$);y.scale.set(.2,.2,.25),y.position.set(.35,-.3,.4),y.rotation.y=Math.PI,y.rotation.x=Math.PI,m.add(y);const C=new _(Z,G);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,m.add(C);const Y=new at(.35,32,32),V=new _(Y,$);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),m.add(V);const k=new _(Y,et);k.scale.set(.75,1.25,.65),k.position.set(.7,-.15,.2),m.add(k);const ft=new te(.2,.22,.6,32),ct=new _(ft,w);ct.position.set(-.4,-1.05,0),m.add(ct);const vt=new _(ft,T);vt.position.set(.4,-1.05,0),m.add(vt);const bt=new at(.3,32,32),ht=new _(bt,w);ht.scale.set(1,.72,1.5),ht.position.set(-.4,-1.45,.17),m.add(ht);const _t=new _(bt,T);_t.scale.set(1,.72,1.5),_t.position.set(.4,-1.45,.17),m.add(_t);const Dt=new at(.44,32,32),Bt=new _(Dt,G);Bt.position.set(-.15,-.45,-.4),m.add(Bt);const Rt=new _(Dt,tt);Rt.position.set(.15,-.45,-.4),m.add(Rt);const $t=new at(.18,32,32),Gt=new _($t,G);Gt.position.set(0,-.35,-.8),m.add(Gt),new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const St=new He("X",{font:Q,size:.2,depth:.05}),Et=new _(St,G);Et.position.set(-.3,.99,.53),Et.rotation.x=he.degToRad(-5),Et.rotation.y=he.degToRad(-15),m.add(Et);const Xt=new He("O",{font:Q,size:.2,depth:.05}),se=new _(Xt,$);se.position.set(.14,.99,.53),se.rotation.y=he.degToRad(12),se.rotation.x=he.degToRad(-5),m.add(se);const re=new He("POP",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new He("🐻",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const ue=new He("BAO      BEAR",{font:Q,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),ce=new Nt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const me=new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Me=new Nt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),jt=new _(re,ce);jt.scale.set(.15,.15,.15),jt.position.set(.02,1.16,.1),jt.rotateZ(-25),m.add(jt);const qt=new _(re,U);qt.scale.set(.14,.14,.14),qt.rotateZ(45),qt.position.set(.2,-.7,.3),m.add(qt);const oe=new _(re,me);oe.scale.set(.14,.14,.14),oe.rotateZ(45),oe.rotateY(45),oe.position.set(.3,.7,.3),m.add(oe);const ae=new _(re,me);ae.scale.set(.15,.15,.15),ae.rotateZ(45),ae.rotateY(45),ae.position.set(.35,-1.5,.3),m.add(ae);const ge=new _(re,Me);ge.scale.set(.17,.17,.17),ge.rotateZ(45),ge.rotateY(15),ge.position.set(.35,1,.3),m.add(ge);const fe=new _(ue,ce);fe.scale.set(.7,.7,.7),fe.position.set(-6,0,-3),p.add(fe)}),Gt.renderOrder=1,m.scale.set(1.4,1.4,1.4),f.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),v.position.set(t.bodyPosition.x,1,t.cameraPosition),v.lookAt(t.bodyPosition.x,0,0),v.position.z=4,m.rotation.x=.1;const H=[b,y,C],xt=new Gp,nt=[0,Math.PI/2,Math.PI,0,Math.PI/3];h(),Ve(()=>t.bodyPosition,Q=>{m.position.set(Q.x,Q.y,Q.z)}),Ve(()=>t.cameraPosition,Q=>{v.position.set(t.bodyPosition.x,1,Q),v.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){o.value=!0}function c(){i.value=!0}function l(){s.value=!0}function d(){r.value=!0}function u(){o.value=!1,i.value=!1,s.value=!1,r.value=!1}return(h,f)=>(Gn(),Yn(pn,null,[Ut("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",AS,[Ut("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Ut("div",PS,[Ut("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ut("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Ut("button",{class:"pixel-btn down",onMousedown:d,onMouseup:u},"DOWN",32)])],64))}}),CS=$n(RS,[["__scopeId","data-v-cb52c927"]]),IS={class:"pixel-controls"},LS={class:"side-buttons"},DS=An({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),o=Yt(!1),s=Yt(!1),r=Yt(!1);zn(()=>{if(e.value){let h=function(me,Me){const jt=new te(Zt,Zt,H,32);jt.rotateX(Math.PI/2);const qt=new _(jt,me),oe=new Wt;for(let ge=0;ge<xt;ge++){const fe=ge/xt*Math.PI*2,Pe=new Mn(nt,Q,St),ye=new _(Pe,me);ye.position.set((Zt+St/26)*Math.cos(fe),(Zt+St/26)*Math.sin(fe),0),ye.rotation.z=fe,oe.add(ye)}const ae=new Wt;return ae.add(qt),ae.add(oe),ae.position.set(Me.x,Me.y,Me.z),ae},f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),o.value&&(p.rotation.y-=.03),s.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),Et.rotation.z-=.02,Xt.rotation.z+=.03,se.rotation.z+=.02,re.rotation.z+=.02,ue.rotation.z-=.03,ce.rotation.y+=.04,m.render(v,x)};const v=new On,x=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),m=new Fn({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const p=new Wt,S=new Wt;v.add(S);const E=new ci(16777215,2);v.add(E);const M=new ai(16777215,4);M.position.set(5,5,5),v.add(M);const B=new ri(16777215,5,50);B.position.set(0,2,4),v.add(B);const I=new jn,R=I.load("/3d-bear-arts/assets/metal.jpg"),G=I.load("/3d-bear-arts/assets/pop7.jpg"),tt=I.load("/3d-bear-arts/assets/gear.jpg");R.wrapS=R.wrapT=Qe,G.wrapS=G.wrapT=Qe,G.repeat.set(2,2);const w=new Nt({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:R});tt.mapping=Pa;const T=new Nt({color:"#d3d3d3",metalness:1,roughness:.25,map:R,envMap:tt,clearcoat:.7,clearcoatRoughness:.3}),U=new Nt({color:"#C0C0C0",metalness:1,roughness:.25,envMap:tt,clearcoat:.7,clearcoatRoughness:.3}),$=new Nt({color:"#C0C0C0",metalness:1,roughness:.25,map:R,envMap:tt,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),et=new Nt({color:"#C0C0C0",metalness:1,roughness:.5,map:R,envMap:tt,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),lt=new Nt({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:Ie});new Nt({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const q=new Nt({color:"#d3d3d3",metalness:1,roughness:.2,map:tt,envMap:tt,clearcoat:.7,clearcoatRoughness:.3});new Nt({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:tt}),new Nt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:R,transparent:!0,opacity:.3});const it=new at(1,32,32,0,Math.PI),W=new _(it,et),mt=new _(it,T);W.scale.set(.85,.85,.8),mt.scale.set(.85,.85,.8),W.position.y=-.2,mt.position.y=-.2,W.rotation.y=Math.PI/2,mt.rotation.y=Math.PI*1.5;const wt=new Ae(1,32),Mt=new _(wt,$);Mt.scale.set(.85,.85,.8),Mt.position.set(0,-.2,0),Mt.rotation.y=Math.PI/2;const Ft=new Wt;Ft.add(W),Ft.add(mt),Ft.add(Mt),p.add(Ft);const Ht=new at(.6,32,32,0,Math.PI),rt=new _(Ht,T);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI*1.5;const pt=new _(Ht,et);pt.scale.set(1,.95,.95),pt.position.set(0,1,0),pt.rotation.y=Math.PI/2;const Tt=new Ae(.6,32),O=new _(Tt,$);O.position.set(0,1,0),O.rotation.y=Math.PI/2,O.scale.set(1,.95,.95);const ut=new Wt;ut.add(rt),ut.add(pt),ut.add(O),p.add(ut);const st=new at(.25,32,32),dt=new _(st,T);dt.position.set(-.45,1.35,-.1),p.add(dt);const yt=new _(st,$);yt.position.set(.45,1.35,-.1),p.add(yt);const ot=new at(.25,32,32,Math.PI/2,Math.PI),g=new _(ot,T);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const P=new at(.25,32,32,Math.PI/2,Math.PI),L=new _(P,$);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const F=new Ae(.25,32),N=new _(F,lt);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const K=new Wt;K.add(g),K.add(L),K.add(N),p.add(K);const Z=new mn;Z.moveTo(0,0),Z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Z.bezierCurveTo(-.6,.3,0,.6,0,1),Z.bezierCurveTo(0,.6,.6,.3,.6,0),Z.bezierCurveTo(.6,-.3,0,-.3,0,0);const b={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},y=new vn(Z,b),C=new at(.35,32,32),Y=new _(C,T);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),p.add(Y);const V=new _(C,$);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),p.add(V);const k=new te(.2,.22,.6,32),ft=new _(k,T);ft.position.set(-.4,-1.05,0),p.add(ft);const ct=new _(k,$);ct.position.set(.4,-1.05,0),p.add(ct);const vt=new at(.3,32,32),bt=new _(vt,T);bt.scale.set(1,.72,1.5),bt.position.set(-.4,-1.45,.17),p.add(bt);const ht=new _(vt,$);ht.scale.set(1,.72,1.5),ht.position.set(.4,-1.45,.17),p.add(ht);const _t=new at(.44,32,32),Dt=new _(_t,T);Dt.position.set(-.15,-.45,-.4),p.add(Dt);const Bt=new _(_t,et);Bt.position.set(.15,-.45,-.4),p.add(Bt);const Rt=new at(.18,32,32),$t=new _(Rt,T);$t.position.set(0,-.35,-.8),p.add($t),new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(me){const Me=new He("X",{font:me,size:.2,depth:.05});new eo({color:0});const jt=new _(Me,w);jt.position.set(-.3,.99,.53),jt.rotation.x=he.degToRad(-5),jt.rotation.y=he.degToRad(-15),p.add(jt);const qt=new He("O",{font:me,size:.2,depth:.05});new eo({color:0});const oe=new _(qt,w);oe.position.set(.14,.99,.53),oe.rotation.y=he.degToRad(12),oe.rotation.x=he.degToRad(-5),p.add(oe)}),$t.renderOrder=1;const Zt=1.2,H=.5,xt=8,nt=.7,Q=.3,St=.5,Et=h(q,{x:-2,y:0,z:0}),Xt=h(q,{x:0,y:0,z:0}),se=h(q,{x:2,y:0,z:0}),re=h(q,{x:2,y:0,z:0}),ue=h(q,{x:2,y:-2,z:0}),ce=new _(y,U);ce.scale.set(.3,.3,.3),ce.position.set(.25,1.1,0),ce.rotation.y=Math.PI,ce.rotation.x=Math.PI,p.add(ce),Et.position.set(.35,0,0),Xt.position.set(.25,-.3,.4),se.position.set(.3,.3,-.2),re.position.set(.25,.17,.4),ue.position.set(.5,-.3,.45),Et.scale.set(.2,.2,.2),Xt.scale.set(.18,.18,.18),se.scale.set(.15,.15,.15),re.scale.set(.17,.17,.17),ue.scale.set(.15,.15,.15),Xt.rotation.z=Math.PI/4,se.rotation.z=-Math.PI/4,re.rotation.y=-Math.PI/2,ue.rotation.y=-Math.PI/2,p.add(Et),p.add(Xt),p.add(se),p.add(re),p.add(ue),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),v.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4,f(),Ve(()=>t.bodyPosition,me=>{p.position.set(me.x,me.y,me.z)}),Ve(()=>t.cameraPosition,me=>{x.position.set(t.bodyPosition.x,1,me),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){o.value=!0}function c(){i.value=!0}function l(){s.value=!0}function d(){r.value=!0}function u(){o.value=!1,i.value=!1,s.value=!1,r.value=!1}return(h,f)=>(Gn(),Yn(pn,null,[Ut("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",IS,[Ut("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Ut("div",LS,[Ut("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ut("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Ut("button",{class:"pixel-btn down",onMousedown:d,onMouseup:u},"DOWN",32)])],64))}}),US=$n(DS,[["__scopeId","data-v-9a57b6d8"]]),NS={class:"pixel-controls"},FS={class:"side-buttons"},OS={class:"directional-buttons"},BS={class:"horizontal-buttons"},zS={class:"directional-buttons-woman"},GS={class:"horizontal-buttons-woman"},HS={class:"directional-buttons-kid"},kS={class:"horizontal-buttons-kid"},la=.1,ua=.05,da=.08,VS=An({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),o=Yt(!1),s=Yt(!1),r=Yt(!1);const a=ps(null),c=Yt(!1),l=Yt(!1),d=Yt(!1),u=Yt(!1),h=ps(null),f=ps(null),v=Yt(!1),x=Yt(!1),m=Yt(!1),p=Yt(!1),S=Yt(!1),E=Yt(!1),M=Yt(!1),B=Yt(!1),I=new Fn({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const R=new On,G=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3);G.position.z=5,zn(()=>{if(e.value){let ot=function(){const At=new Wt,Ee=new at(.2,32,32),Le=new Lt({color:16767916}),xe=new _(Ee,Le);xe.position.set(0,1.5,0),At.add(xe);const Oe=new at(.21,32,32,0,Math.PI*2,0,Math.PI/2),_e=new Lt({color:16711680}),Fe=new _(Oe,_e);Fe.position.set(0,1.58,0),At.add(Fe);const qe=new te(.25,.25,.6,32),De=new Lt({color:16767916}),We=new _(qe,De);We.position.set(0,1,0),At.add(We);const tn=new te(.26,.26,.3,32),$e=new Lt({color:255}),un=new _(tn,$e);un.position.set(0,.65,0),At.add(un);const cn=new te(.1,.1,.5,32),Ze=new Lt({color:16767916}),an=new _(cn,Ze);an.position.set(-.15,.25,0),At.add(an);const en=new _(cn,Ze);en.position.set(.15,.25,0),At.add(en);const hn=new te(.08,.08,.5,32),gn=new _(hn,Ze);gn.position.set(-.35,1.3,0),gn.rotation.z=Math.PI/4,At.add(gn);const Pn=new _(hn,Ze);return Pn.position.set(.35,1.3,0),Pn.rotation.z=-Math.PI/4,At.add(Pn),At.scale.set(.27,.27,.27),At.position.set(-.2,-.1,-.15),At},g=function(){const At=new Wt,Ee=new at(.18,32,32),Le=new Lt({color:16767916}),xe=new _(Ee,Le);xe.position.set(0,1.2,.04),At.add(xe);const Oe=new at(.19,32,32,.4,Math.PI*2,0,Math.PI/2),_e=new te(.18,.18,.4,32),Fe=new Lt({color:9127187}),qe=new _(Oe,Fe);qe.position.set(0,1.28,0),At.add(qe);const De=new _(_e,Fe);De.position.set(0,1.1,-.01),At.add(De);const We=new te(.18,.2,.5,32),tn=new Lt({color:16767916}),$e=new _(We,tn);$e.position.set(0,.85,0),At.add($e);const un=new at(.08,32,32,0,Math.PI),cn=new Lt({color:16738740}),Ze=new _(un,cn);Ze.position.set(-.09,.98,.15),At.add(Ze);const an=new _(un,cn);an.position.set(.09,.98,.15),At.add(an);const en=new te(.22,.22,.25,32),hn=new Lt({color:16738740}),gn=new _(en,hn);gn.position.set(0,.6,0),At.add(gn);const Pn=new te(.1,.1,.6,32),Ei=new Lt({color:16767916}),Fi=new _(Pn,Ei);Fi.position.set(-.09,.5,.2),Fi.rotation.x=Math.PI/2,At.add(Fi);const Oi=new _(Pn,Ei);Oi.position.set(.09,.5,.2),Oi.rotation.x=Math.PI/2,At.add(Oi);const Bi=new te(.08,.08,.35,32),Ti=new _(Bi,Ei);Ti.position.set(-.24,.95,.18),Ti.rotation.x=Math.PI/2,At.add(Ti);const fi=new _(Bi,Ei);return fi.position.set(.2,.85,0),fi.rotation.z=Math.PI/20,At.add(fi),At.scale.set(.27,.27,.27),At.position.set(.2,-.15,-.32),At},P=function(){const At=new Wt,Ee=new at(.2,32,32),Le=new Lt({color:16767916}),xe=new _(Ee,Le);xe.position.set(0,1.5,0),At.add(xe);const Oe=new at(.21,32,32,0,Math.PI*2,0,Math.PI/2),_e=new Lt({color:25600}),Fe=new _(Oe,_e);Fe.position.set(0,1.58,0),At.add(Fe);const qe=new te(.22,.22,.5,32),De=new Lt({color:16767916}),We=new _(qe,De);We.position.set(0,1,0),At.add(We);const tn=new te(.23,.23,.3,32),$e=new Lt({color:8388736}),un=new _(tn,$e);un.position.set(0,.65,0),At.add(un);const cn=new te(.1,.1,.5,32),Ze=new Lt({color:16767916}),an=new _(cn,Ze);an.position.set(-.15,.3,-.25),an.rotation.x=Math.PI/6,At.add(an);const en=new _(cn,Ze);en.position.set(.15,.3,.25),en.rotation.x=-Math.PI/6,At.add(en);const hn=new te(.08,.08,.4,32),gn=new _(hn,Ze);gn.position.set(-.28,1,-.2),gn.rotation.x=Math.PI/6,At.add(gn);const Pn=new _(hn,Ze);return Pn.position.set(.28,1.3,.1),Pn.rotation.z=-Math.PI/8,At.add(Pn),At.scale.set(.15,.15,.15),At.position.set(.3,-.25,.25),At.rotation.x=Math.PI/12,At.rotation.y=Math.PI/2,At.rotation.z=-Math.PI/3,At},L=function(At){let Ee=1,Le=0;function xe(){requestAnimationFrame(xe),At.position.x+=.01*Ee,At.position.x>=.35?(Ee=-1,At.rotation.y=Math.PI):At.position.x<=-.35&&(Ee=1,At.rotation.y=0),Le+=.003,At.position.y=-.4+Math.sin(Le)*.1,Z.render(N,K)}xe()},F=function(){requestAnimationFrame(F),i.value&&(b.rotation.y+=.03),o.value&&(b.rotation.y-=.03),s.value&&(b.rotation.x-=.03),r.value&&(b.rotation.x+=.03),jt.uniforms.u_time.value+=.25,X.rotation.y+=.04,Z.render(N,K)};const N=new On,K=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),Z=new Fn({antialias:!0,alpha:!0});Z.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(Z.domElement);const b=new Wt,y=new Wt;N.add(y);const C=new ci(16777215,2);N.add(C);const Y=new ai(16777215,4);Y.position.set(5,5,5),N.add(Y);const V=new ri(16777215,5,50);V.position.set(0,2,4),N.add(V);const k=new jn,ft=k.load("/3d-bear-arts/assets/beach.jpg");ft.repeat.set(.8,1);const ct=k.load("/3d-bear-arts/assets/sun.jpg");ft.wrapS=ft.wrapT=Qe,ft.repeat.set(.8,1),ct.wrapS=ct.wrapT=Qe;const vt=new Nt({color:11592447,map:ft,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),bt=new Nt({color:11592447,map:ft,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:Ie,ior:1.33,depthWrite:!1,depthTest:!0}),ht=new Nt({color:11592447,map:ft,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),_t=new Nt({color:11592447,map:ft,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:Ie}),Dt=new Nt({color:11592447,map:ft,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:Ie,ior:1.33}),Bt=new Nt({color:11592447,map:ft,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Rt=new at(1,32,32,0,Math.PI),$t=new _(Rt,_t),Gt=new _(Rt,bt);$t.scale.set(.85,.85,.8),Gt.scale.set(.85,.85,.8),$t.position.y=-.2,Gt.position.y=-.2,$t.rotation.y=Math.PI/2,Gt.rotation.y=Math.PI*1.5;const Zt=new Ae(1,32),H=new _(Zt,vt);H.scale.set(.85,.85,.8),H.position.set(0,-.2,0),H.rotation.y=Math.PI/2;const xt=new Wt;xt.add($t),xt.add(Gt),xt.add(H),b.add(xt);const nt=new at(.6,32,32,0,Math.PI),Q=new _(nt,vt);Q.scale.set(1,.95,.95),Q.position.set(0,1,0),Q.rotation.y=Math.PI*1.5;const St=new _(nt,ht);St.scale.set(1,.95,.95),St.position.set(0,1,0),St.rotation.y=Math.PI/2;const Et=new Ae(.6,32),Xt=new _(Et,vt);Xt.position.set(0,1,0),Xt.rotation.y=Math.PI/2,Xt.scale.set(1,.95,.95);const se=new Wt;se.add(Q),se.add(St),se.add(Xt),b.add(se);const re=new at(.6,32,32,0,Math.PI*2,0,Math.PI/2),ue=new Nt({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ce=new _(re,ue);ce.position.set(0,-.2,0),ce.rotation.x=Math.PI,ce.scale.set(1.25,1.25,1.25),xt.add(ce);const me=new Nt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:Ie,transparent:!0,opacity:.7,depthWrite:!1}),Me=new _(Zt,me);Me.scale.set(.7,.7,.7),Me.position.set(0,-.3,0),Me.rotation.x=Math.PI/2,Me.renderOrder=1,xt.add(Me),b.add(xt);const jt=new on({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),qt=new _(Zt,jt);qt.position.set(0,-.3,0),qt.scale.set(.7,.7,.7),qt.rotation.x=-Math.PI/2,qt.renderOrder=1,xt.add(qt);const oe=new at(.25,32,32),ae=new _(oe,Dt);ae.position.set(-.45,1.35,-.1),b.add(ae);const ge=new _(oe,ht);ge.position.set(.45,1.35,-.1),b.add(ge);const fe=new at(.25,32,32,Math.PI/2,Math.PI),Pe=new _(fe,Dt);Pe.scale.set(1.1,.6,.8),Pe.position.set(0,.84,.5),Pe.rotation.y=Math.PI;const ye=new at(.25,32,32,Math.PI/2,Math.PI),Se=new _(ye,ht);Se.scale.set(1.1,.6,.8),Se.position.set(0,.84,.5),Se.rotation.y=0;const Ne=new Ae(.25,32),Ue=new _(Ne,bt);Ue.scale.set(.8,.6,.8),Ue.position.set(0,.84,.5),Ue.rotation.y=Math.PI/2;const Pt=new Wt;Pt.add(Pe),Pt.add(Se),Pt.add(Ue),b.add(Pt);const le=new Nt({color:8374441,metalness:1,roughness:.25,envMap:ct,clearcoat:.7,clearcoatRoughness:.3}),A=new mn;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const j={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},D=new vn(A,j),X=new _(D,le);X.scale.set(.2,.2,.2),X.position.set(.25,1.2,0),X.rotation.y=Math.PI,X.rotation.x=Math.PI,b.add(X);const z=new at(.35,32,32),gt=new _(z,bt);gt.scale.set(.75,1.25,.65),gt.position.set(-.7,-.15,.2),b.add(gt);const It=new _(z,_t);It.scale.set(.75,1.25,.65),It.position.set(.7,-.15,.2),b.add(It);const Ot=new te(.2,.22,.6,32),zt=new _(Ot,Dt);zt.position.set(-.4,-1.05,0),b.add(zt);const Jt=new _(Ot,ht);Jt.position.set(.4,-1.05,0),b.add(Jt);const Kt=new at(.3,32,32),Vt=new _(Kt,Dt);Vt.scale.set(1,.72,1.5),Vt.position.set(-.4,-1.45,.17),b.add(Vt);const ie=new _(Kt,ht);ie.scale.set(1,.72,1.5),ie.position.set(.4,-1.45,.17),b.add(ie);const ve=new at(.44,32,32),pe=new _(ve,Dt);pe.position.set(-.15,-.45,-.4),b.add(pe);const Ct=new _(ve,Dt);Ct.position.set(.15,-.45,-.4),b.add(Ct);const Qt=new at(.18,32,32),kt=new _(Qt,Dt);kt.position.set(0,-.35,-.8),b.add(kt),new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(At){const Ee=new He("X",{font:At,size:.2,depth:.05}),Le=new _(Ee,Bt);Le.position.set(-.3,.99,.53),Le.rotation.x=he.degToRad(-5),Le.rotation.y=he.degToRad(-15),b.add(Le);const xe=new He("O",{font:At,size:.2,depth:.05}),Oe=new _(xe,Bt);Oe.position.set(.14,.99,.53),Oe.rotation.y=he.degToRad(12),Oe.rotation.x=he.degToRad(-5),b.add(Oe)}),a.value=ot(),b.add(a.value),N.add(b),h.value=g(),b.add(h.value),f.value=P(),b.add(f.value),L(f.value),b.scale.set(1.4,1.4,1.4),N.add(b),b.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),K.position.set(t.bodyPosition.x,1,t.cameraPosition),K.lookAt(t.bodyPosition.x,0,0),K.position.z=4,b.rotation.x=.1,F(),Ve(()=>t.bodyPosition,At=>{b.position.set(At.x,At.y,At.z)}),Ve(()=>t.cameraPosition,At=>{K.position.set(t.bodyPosition.x,1,At),K.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{K.aspect=window.innerWidth/window.innerHeight,K.updateProjectionMatrix(),Z.setSize(window.innerWidth,window.innerHeight)})}});function tt(){o.value=!0}function w(){i.value=!0}function T(){s.value=!0}function U(){r.value=!0}function $(){o.value=!1,i.value=!1,s.value=!1,r.value=!1}const et=()=>{c.value=!0,console.log(c.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},lt=()=>{l.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},q=()=>{d.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},it=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},W=()=>{c.value=!1,l.value=!1,d.value=!1,u.value=!1},mt=()=>{v.value=!0,h.value&&(h.value.rotation.y=Math.PI)},wt=()=>{x.value=!0,h.value&&(h.value.rotation.y=0)},Mt=()=>{m.value=!0,h.value&&(h.value.rotation.y=-Math.PI/2)},Ft=()=>{p.value=!0,h.value&&(h.value.rotation.y=Math.PI/2)},Ht=()=>{v.value=!1,x.value=!1,m.value=!1,p.value=!1},rt=()=>{requestAnimationFrame(rt),a.value&&(c.value&&(a.value.position.z-=la),l.value&&(a.value.position.z+=la),d.value&&(a.value.position.x-=la),u.value&&(a.value.position.x+=la)),I.render(R,G)},pt=()=>{requestAnimationFrame(pt),h.value&&(v.value&&(h.value.position.z-=ua),x.value&&(h.value.position.z+=ua),m.value&&(h.value.position.x-=ua),p.value&&(h.value.position.x+=ua))};pt(),rt();const Tt=()=>{S.value=!0,f.value&&(f.value.rotation.y=0)},O=()=>{E.value=!0,f.value&&(f.value.rotation.y=Math.PI)},ut=()=>{M.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},st=()=>{B.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},dt=()=>{S.value=!1,E.value=!1,M.value=!1,B.value=!1},yt=()=>{requestAnimationFrame(yt),f.value&&(S.value&&(f.value.position.z-=da),E.value&&(f.value.position.z+=da),M.value&&(f.value.position.x-=da),B.value&&(f.value.position.x+=da))};return yt(),(ot,g)=>(Gn(),Yn(pn,null,[Ut("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",NS,[Ut("button",{class:"pixel-btn up",onMousedown:T,onMouseup:$},"UP",32),Ut("div",FS,[Ut("button",{class:"pixel-btn left",onMousedown:tt,onMouseup:$},"LEFT",32),Ut("button",{class:"pixel-btn right",onMousedown:w,onMouseup:$},"RIGHT",32)]),Ut("button",{class:"pixel-btn down",onMousedown:U,onMouseup:$},"DOWN",32)]),Ut("div",OS,[Ut("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:et,onMouseup:W},"UP",32),Ut("div",BS,[Ut("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:q,onMouseup:W},"LEFT",32),Ut("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:it,onMouseup:W},"RIGHT",32)]),Ut("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:lt,onMouseup:W},"DOWN",32)]),Ut("div",zS,[Ut("button",{class:"directional-btn-woman north-btn",onMousedown:mt,onMouseup:Ht},"UP",32),Ut("div",GS,[Ut("button",{class:"directional-btn-woman west-btn",onMousedown:Mt,onMouseup:Ht},"LEFT",32),Ut("button",{class:"directional-btn-woman east-btn",onMousedown:Ft,onMouseup:Ht},"RIGHT",32)]),Ut("button",{class:"directional-btn-woman south-btn",onMousedown:wt,onMouseup:Ht},"DOWN",32)]),Ut("div",HS,[Ut("button",{class:"directional-btn-kid north-btn",onMousedown:Tt,onMouseup:dt},"UP",32),Ut("div",kS,[Ut("button",{class:"directional-btn-kid west-btn",onMousedown:ut,onMouseup:dt},"LEFT",32),Ut("button",{class:"directional-btn-kid east-btn",onMousedown:st,onMouseup:dt},"RIGHT",32)]),Ut("button",{class:"directional-btn-kid south-btn",onMousedown:O,onMouseup:dt},"DOWN",32)])],64))}}),WS=$n(VS,[["__scopeId","data-v-f25dfda5"]]),XS={class:"pixel-controls"},qS={class:"side-buttons"},jS=An({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),o=Yt(!1),s=Yt(!1),r=Yt(!1);zn(()=>{if(e.value){let h=function(ae,ge){const fe=new Wt,Pe=new at(1,32,32),ye=new _(Pe,lt);ye.scale.set(1,.8,1),fe.add(ye);const Se=new te(.1,.1,.5,16),Ne=new Lt({color:9127187}),Ue=new _(Se,Ne);return Ue.position.set(0,.9,0),fe.add(Ue),fe},f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),o.value&&(p.rotation.y-=.03),s.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),Zt.rotation.z-=.04,H.rotation.z+=.04,xt.rotation.z+=.03,nt.rotation.z+=.03,y.rotation.y+=.04,oe+=jt,p.position.y=t.bodyPosition.y+Math.sin(oe)*qt;const ae=me.getElapsedTime();ce.forEach((ge,fe)=>{const Pe=.1+Math.sin(ae*3+Me[fe])*.1;ge.scale.set(Pe,Pe,Pe)}),m.render(v,x)};const v=new On,x=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),m=new Fn({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const p=new Wt,S=new Wt;v.add(S);const E=new ci(16777215,2);v.add(E);const M=new ai(16777215,4);M.position.set(5,5,5),v.add(M);const B=new ri(16777215,5,50);B.position.set(0,2,4),v.add(B);const I=new jn,R=I.load("/3d-bear-arts/assets/pumpkin.jpg");R.wrapS=R.wrapT=Qe,R.repeat.set(.8,.85);const G=I.load("/3d-bear-arts/assets/pumpkin.jpg");G.wrapS=G.wrapT=Qe,G.repeat.set(1,1);const tt=I.load("/3d-bear-arts/assets/pumpkin.jpg");tt.wrapS=G.wrapT=Qe,tt.repeat.set(2,.8);const w=new Nt({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),T=new Wt,U=new Nt({color:16747520,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),$=new Nt({color:16747520,map:G,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),et=new Nt({color:16747520,map:tt,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Ie}),lt=new Nt({color:16747520,map:tt,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Nt({color:16766720,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Nt({color:9109504,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Nt({color:4915330,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const q=new at(1,32,32,0,Math.PI),it=new _(q,et),W=new _(q,U);it.scale.set(.85,.85,.8),W.scale.set(.85,.85,.8),it.position.y=-.2,W.position.y=-.2,it.rotation.y=Math.PI/2,W.rotation.y=Math.PI*1.5;const mt=new Ae(1,32),wt=new _(mt,$);wt.scale.set(.85,.85,.8),wt.position.set(0,-.2,0),wt.rotation.y=Math.PI/2;const Mt=new Wt;Mt.add(it),Mt.add(W),Mt.add(wt),p.add(Mt);const Ft=new at(.6,32,32,0,Math.PI),Ht=new _(Ft,U);Ht.scale.set(1,.95,.95),Ht.position.set(0,1,0),Ht.rotation.y=Math.PI*1.5;const rt=new _(Ft,et);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI/2;const pt=new Ae(.6,32),Tt=new _(pt,$);Tt.position.set(0,1,0),Tt.rotation.y=Math.PI/2,Tt.scale.set(1,.95,.95);const O=new Wt;O.add(Ht),O.add(rt),O.add(Tt),p.add(O);const ut=new at(.25,32,32),st=new _(ut,lt);st.position.set(-.45,1.35,-.1),p.add(st);const dt=new _(ut,et);dt.position.set(.45,1.35,-.1),p.add(dt);const yt=new at(.25,32,32,Math.PI/2,Math.PI),ot=new _(yt,U);ot.scale.set(1.1,.6,.8),ot.position.set(0,.84,.5),ot.rotation.y=Math.PI;const g=new at(.25,32,32,Math.PI/2,Math.PI),P=new _(g,et);P.scale.set(1.1,.6,.8),P.position.set(0,.84,.5),P.rotation.y=0;const L=new Ae(.25,32),F=new _(L,U);F.scale.set(.8,.6,.8),F.position.set(0,.84,.5),F.rotation.y=Math.PI/2;const N=new Wt;N.add(ot),N.add(P),N.add(F),p.add(N);const K=new mn;K.moveTo(0,0),K.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),K.bezierCurveTo(-.6,.3,0,.6,0,1),K.bezierCurveTo(0,.6,.6,.3,.6,0),K.bezierCurveTo(.6,-.3,0,-.3,0,0);const Z={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},b=new vn(K,Z),y=new _(b,w);y.scale.set(.3,.3,.3),y.position.set(.25,1.1,0),y.rotation.y=Math.PI,y.rotation.x=Math.PI,p.add(y);const C=new at(.35,32,32),Y=new _(C,$);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),p.add(Y);const V=new _(C,et);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),p.add(V);const k=new te(.2,.22,.6,32),ft=new _(k,$);ft.position.set(-.4,-1.05,0),p.add(ft);const ct=new _(k,et);ct.position.set(.4,-1.05,0),p.add(ct);const vt=new at(.3,32,32),bt=new _(vt,lt);bt.scale.set(1,.72,1.5),bt.position.set(-.4,-1.45,.17),p.add(bt);const ht=new _(vt,et);ht.scale.set(1,.72,1.5),ht.position.set(.4,-1.45,.17),p.add(ht);const _t=new at(.44,32,32),Dt=new _(_t,U);Dt.position.set(-.15,-.45,-.4),p.add(Dt);const Bt=new _(_t,et);Bt.position.set(.15,-.45,-.4),p.add(Bt);const Rt=new at(.18,32,32),$t=new _(Rt,lt);$t.position.set(0,-.35,-.8),p.add($t),$t.renderOrder=1,new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ae){const ge=new He("X",{font:ae,size:.2,depth:.05}),fe=new _(ge,$);fe.position.set(-.3,.99,.53),fe.rotation.x=he.degToRad(-5),fe.rotation.y=he.degToRad(-15),p.add(fe);const Pe=new He("O",{font:ae,size:.2,depth:.05}),ye=new _(Pe,$);ye.position.set(.14,.99,.53),ye.rotation.y=he.degToRad(12),ye.rotation.x=he.degToRad(-5),p.add(ye)}),p.add(T);const Zt=h(),H=h(),xt=h(),nt=h();Zt.position.set(.35,-.35,-.3),H.position.set(.25,-.45,.3),xt.position.set(.3,.1,-.2),nt.position.set(.25,.18,.4),Zt.scale.set(.3,.3,.3),H.scale.set(.28,.28,.28),xt.scale.set(.25,.25,.25),nt.scale.set(.23,.23,.23),H.rotation.z=Math.PI/4,xt.rotation.z=-Math.PI/4,nt.rotation.y=-Math.PI/2,p.add(Zt),p.add(H),p.add(xt),p.add(nt);const Q=new mn;Q.moveTo(-.5,0),Q.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),Q.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),Q.bezierCurveTo(-.05,.6,.05,.6,.15,.4),Q.bezierCurveTo(.25,.5,.25,.85,.5,.8),Q.bezierCurveTo(1,.6,.75,.25,.5,0),Q.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const St={depth:.3,bevelEnabled:!1},Et=new vn(Q,St),Xt=new eo({color:0}),se=new _(Et,Xt);se.scale.set(.3,.3,.6),se.rotation.x=0,se.rotation.z=0,se.position.set(.26,.35,.25),p.add(se);const re=new _(Et,Xt);re.scale.set(.5,.5,.5),re.position.set(.4,-.1,.54),p.add(re);const ue=new _(Et,Xt);ue.scale.set(.5,.5,.5),ue.position.set(.32,-.35,.65),p.add(ue),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),v.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;const ce=[se,re,ue],me=new Gp,Me=[0,Math.PI/2,Math.PI,0,Math.PI/3];let jt=.05,qt=.25,oe=0;f(),Ve(()=>t.bodyPosition,ae=>{p.position.set(ae.x,ae.y,ae.z)}),Ve(()=>t.cameraPosition,ae=>{x.position.set(t.bodyPosition.x,1,ae),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){o.value=!0}function c(){i.value=!0}function l(){s.value=!0}function d(){r.value=!0}function u(){o.value=!1,i.value=!1,s.value=!1,r.value=!1}return(h,f)=>(Gn(),Yn(pn,null,[Ut("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",XS,[Ut("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Ut("div",qS,[Ut("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ut("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Ut("button",{class:"pixel-btn down",onMousedown:d,onMouseup:u},"DOWN",32)])],64))}}),YS=$n(jS,[["__scopeId","data-v-5eff72b3"]]),$S={class:"pixel-controls"},KS={class:"side-buttons"},ZS=An({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),o=Yt(!1),s=Yt(!1),r=Yt(!1);zn(()=>{if(e.value){let h=function(){requestAnimationFrame(h),i.value&&(m.rotation.y+=.03),o.value&&(m.rotation.y-=.03),s.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),Z.rotation.y+=.03,Xt+=nt,se+=Q,m.position.y=t.bodyPosition.y+Math.sin(Xt)*Et,Z.position.y=t.bodyPosition.y+Math.sin(se)*St,Zt.uniforms.u_time.value+=.25,x.render(f,v)};const f=new On,v=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Fn({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const m=new Wt,p=new Wt;f.add(p);const S=new ci(16777215,2);f.add(S);const E=new ai(16777215,4);E.position.set(5,5,5),f.add(E);const M=new ri(16777215,5,50);M.position.set(0,2,4),f.add(M);const B=new jn,I=B.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=Qe,I.repeat.set(2,2);const R=B.load("/3d-bear-arts/assets/ghost.jpg");R.wrapS=R.wrapT=Qe,R.repeat.set(1,1);const G=new Nt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:Ie}),tt=new Nt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),w=new Nt({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),T=new Nt({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:Ie}),U=new Nt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:Ie}),$=new Nt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:Ie}),et=new at(1,32,32,0,Math.PI),lt=new _(et,G),q=new _(et,U);lt.scale.set(.85,.85,.8),q.scale.set(.85,.85,.8),lt.position.y=-.2,q.position.y=-.2,lt.rotation.y=Math.PI/2,q.rotation.y=Math.PI*1.5;const it=new Ae(1,32),W=new _(it,U);W.scale.set(.85,.85,.8),W.position.set(0,-.2,0),W.rotation.y=Math.PI/2;const mt=new Wt;mt.add(lt),mt.add(q),mt.add(W),m.add(mt);const wt=new at(.6,32,32,0,Math.PI),Mt=new _(wt,$);Mt.scale.set(1,.95,.95),Mt.position.set(0,1,0),Mt.rotation.y=Math.PI*1.5;const Ft=new _(wt,tt);Ft.scale.set(1,.95,.95),Ft.position.set(0,1,0),Ft.rotation.y=Math.PI/2;const Ht=new Ae(.6,32),rt=new _(Ht,U);rt.position.set(0,1,0),rt.rotation.y=Math.PI/2,rt.scale.set(1,.95,.95);const pt=new Wt;pt.add(Mt),pt.add(Ft),pt.add(rt),m.add(pt);const Tt=new at(.25,32,32),O=new _(Tt,$);O.position.set(-.45,1.35,-.1),m.add(O);const ut=new _(Tt,tt);ut.position.set(.45,1.35,-.1),m.add(ut);const st=new at(.25,32,32,Math.PI/2,Math.PI),dt=new _(st,$);dt.scale.set(1.1,.6,.8),dt.position.set(0,.84,.5),dt.rotation.y=Math.PI;const yt=new at(.25,32,32,Math.PI/2,Math.PI),ot=new _(yt,tt);ot.scale.set(1.1,.6,.8),ot.position.set(0,.84,.5),ot.rotation.y=0;const g=new Ae(.25,32),P=new _(g,T);P.scale.set(.8,.6,.8),P.position.set(0,.84,.5),P.rotation.y=Math.PI/2;const L=new Wt;L.add(dt),L.add(ot),L.add(P),m.add(L);const F=new mn;F.moveTo(0,0),F.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),F.bezierCurveTo(-.6,.3,0,.6,0,1),F.bezierCurveTo(0,.6,.6,.3,.6,0),F.bezierCurveTo(.6,-.3,0,-.3,0,0);const N={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},K=new vn(F,N),Z=new _(K,w);Z.scale.set(.35,.35,.35),Z.position.set(0,-.05,0),Z.rotation.y=Math.PI,Z.rotation.x=Math.PI,m.add(Z);const b=new at(.35,32,32),y=new _(b,U);y.scale.set(.75,1.25,.65),y.position.set(-.7,-.15,.2),m.add(y);const C=new _(b,T);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),m.add(C);const Y=new te(.2,.22,.6,32),V=new _(Y,U);V.position.set(-.4,-1.05,0),m.add(V);const k=new _(Y,T);k.position.set(.4,-1.05,0),m.add(k);const ft=new at(.3,32,32),ct=new _(ft,U);ct.scale.set(1,.72,1.5),ct.position.set(-.4,-1.45,.17),m.add(ct);const vt=new _(ft,T);vt.scale.set(1,.72,1.5),vt.position.set(.4,-1.45,.17),m.add(vt);const bt=new at(.44,32,32),ht=new _(bt,T);ht.position.set(-.15,-.45,-.4),m.add(ht);const _t=new _(bt,T);_t.position.set(.15,-.45,-.4),m.add(_t);const Dt=new at(.18,32,32),Bt=new _(Dt,U);Bt.position.set(0,-.35,-.8),m.add(Bt);const Rt=new at(.6,32,32,0,Math.PI*2,0,Math.PI/2),$t=new Nt({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Gt=new _(Rt,$t);Gt.position.set(0,-.2,0),Gt.rotation.x=Math.PI,Gt.scale.set(1.25,1.25,1.25),mt.add(Gt);const Zt=new on({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),H=new _(it,Zt);H.position.set(0,-.26,0),H.scale.set(.7,.7,.7),H.rotation.x=-Math.PI/2,H.renderOrder=1,mt.add(H),new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(re){const ue=new He("X",{font:re,size:.2,depth:.05}),ce=new _(ue,U);ce.position.set(-.3,.99,.53),ce.rotation.x=he.degToRad(-5),ce.rotation.y=he.degToRad(-15),m.add(ce);const me=new He("O",{font:re,size:.2,depth:.05}),Me=new _(me,U);Me.position.set(.14,.99,.53),Me.rotation.y=he.degToRad(12),Me.rotation.x=he.degToRad(-5),m.add(Me)}),Bt.renderOrder=1,m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),f.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),v.position.set(t.bodyPosition.x,1,t.cameraPosition),v.lookAt(t.bodyPosition.x,0,0),v.position.z=4;let nt=.05,Q=.06,St=.2,Et=.25,Xt=0,se=0;h(),Ve(()=>t.bodyPosition,re=>{m.position.set(re.x,re.y,re.z)}),Ve(()=>t.cameraPosition,re=>{v.position.set(t.bodyPosition.x,1,re),v.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){o.value=!0}function c(){i.value=!0}function l(){s.value=!0}function d(){r.value=!0}function u(){o.value=!1,i.value=!1,s.value=!1,r.value=!1}return(h,f)=>(Gn(),Yn(pn,null,[Ut("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",$S,[Ut("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Ut("div",KS,[Ut("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ut("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Ut("button",{class:"pixel-btn down",onMousedown:d,onMouseup:u},"DOWN",32)])],64))}}),JS=$n(ZS,[["__scopeId","data-v-eb44448e"]]),QS={class:"pixel-controls"},tb={class:"side-buttons"},eb=15,nb=5,ib=An({__name:"Santa",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),o=Yt(!1),s=Yt(!1),r=Yt(!1);const a=ps(null),c=new Fn({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new On;const l=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=4,zn(()=>{if(e.value){let x=function(){const Pt=new Wt,le=new Ln(.12,.05,16,100),A=new Lt({color:16777215}),j=new _(le,A);j.position.set(0,1.65,0),j.rotation.x=Math.PI/2,Pt.add(j);const D=new si(.15,.3,32),X=new Lt({color:16711680}),z=new _(D,X);z.position.set(0,1.8,0),Pt.add(z);const gt=new at(.05,32,32),It=new Lt({color:16777215}),Ot=new _(gt,It);return Ot.position.set(0,1.93,0),Pt.add(Ot),Pt.position.set(0,-.1,0),Pt},m=function(){const Pt=new Wt,le=new at(.15,32,32),A=new Lt({color:16764057}),j=new _(le,A);j.position.set(0,.4,0),Pt.add(j);const D=new si(.08,.15,32);new Lt({color:16764057});const X=new _(D,Ft);X.position.set(-.1,.55,0),X.rotation.z=Math.PI/6,Pt.add(X);const z=new _(D,Ft);z.position.set(.1,.55,0),z.rotation.z=-Math.PI/6,Pt.add(z);const gt=new te(.12,.15,.3,32),It=new Lt({color:16764057}),Ot=new _(gt,It);Ot.position.set(0,.2,0),Pt.add(Ot);const zt=new te(.05,.05,.2,32),Jt=new Lt({color:16764057}),Kt=new _(zt,Jt);Kt.position.set(-.07,-.05,.05),Pt.add(Kt);const Vt=new _(zt,Jt);Vt.position.set(.07,-.05,.05),Pt.add(Vt);const ie=new te(.04,.04,.2,32),ve=new Lt({color:16764057}),pe=new _(ie,Ft);pe.position.set(-.15,.25,0),pe.rotation.z=Math.PI/4,Pt.add(pe);const Ct=new _(ie,ve);Ct.position.set(.15,.25,0),Ct.rotation.z=-Math.PI/4,Pt.add(Ct);const Qt=new te(.03,.03,.25,32),kt=new Lt({color:16764057}),de=new _(Qt,kt);return de.position.set(0,.1,-.2),de.rotation.x=Math.PI/4,Pt.add(de),Pt.scale.set(.75,.75,.75),Pt.position.set(.2,0,.2),Pt},p=function(){const Pt=new Wt,le=new at(.2,32,32),A=new Lt({color:16764057}),j=new _(le,A);j.position.set(0,1,0),Pt.add(j);const D=new Lt({color:16777215}),X=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const fi of X){const Rr=new at(fi.size,16,16),Xo=new _(Rr,D);Xo.position.set(fi.x,fi.y-.06,fi.z-.01),Pt.add(Xo)}const z=new Lt({color:16777215}),gt=new te(.05,.06,.1,32),It=new _(gt,z);It.position.set(-.06,.93,.18),It.rotation.z=Math.PI/4;const Ot=new te(.05,.06,.1,32),zt=new _(Ot,z);zt.position.set(.06,.93,.18),zt.rotation.z=-Math.PI/4;const Jt=new Ln(.12,.05,16,100),Kt=new Lt({color:16777215}),Vt=new _(Jt,Kt);Vt.position.set(0,1.15,0),Vt.rotation.x=Math.PI/2,Pt.add(Vt);const ie=new si(.15,.3,32),ve=new Lt({color:16711680}),pe=new _(ie,ve);pe.position.set(0,1.3,0),Pt.add(pe);const Ct=new at(.05,32,32),Qt=new Lt({color:16777215}),kt=new _(Ct,Qt);kt.position.set(0,1.43,0),Pt.add(kt);const de=new te(.2,.25,.6,32),At=new Lt({color:16711680}),Ee=new _(de,At);Ee.position.set(0,.5,0),Pt.add(Ee);const Le=new te(.25,.25,.1,32),xe=new Lt({color:0}),Oe=new _(Le,xe);Oe.position.set(0,.4,.005),Pt.add(Oe);const _e=new te(.06,.06,.3,32),Fe=new Lt({color:16711680}),qe=new _(_e,Fe);qe.position.set(-.25,.75,0),qe.rotation.z=Math.PI/4,Pt.add(qe);const De=new _(_e,Fe);De.position.set(.25,.75,0),De.rotation.z=-Math.PI/4,Pt.add(De);const We=new at(.07,32,32),tn=new Lt({color:16777215}),$e=new _(We,tn);$e.position.set(-.35,.85,0),Pt.add($e);const un=new _(We,tn);un.position.set(.35,.85,0),Pt.add(un);const cn=new te(.1,.1,.15,32),Ze=new Lt({color:16711680}),an=new te(.08,.08,.4,32),en=new Lt({color:0}),hn=new _(an,en);hn.position.set(-.1,.1,0),Pt.add(hn);const gn=new _(cn,Ze);gn.position.set(-.1,-.05,0),Pt.add(gn);const Pn=new _(an,en);Pn.position.set(.1,.1,0),Pt.add(Pn);const Ei=new _(cn,Ze);Ei.position.set(.1,-.05,0),Pt.add(Ei);const Fi=new at(.12,32,32),Oi=new Lt({color:16711680}),Bi=new _(Fi,Oi);Bi.scale.set(1,.7,1.5),Bi.position.set(-.1,-.12,.12),Pt.add(Bi);const Ti=new _(Fi,Oi);return Ti.scale.set(1,.7,1.5),Ti.position.set(.1,-.1,.12),Pt.add(Ti),Pt.scale.set(.25,.25,.25),Pt.position.set(.2,.5,-0),Pt},S=function(){let Pt=0;function le(){requestAnimationFrame(le),Pt+=.4,jt.position.y=.45+Math.sin(Pt)*.5,T.render(tt,w)}le()},E=function(Pt){let le=1,A=0;function j(){requestAnimationFrame(j),Pt.position.x+=.01*le,Pt.position.x>=.5?(le=-1,Pt.rotation.y=Math.PI):Pt.position.x<=0&&(le=1,Pt.rotation.y=0),A+=1,Pt.position.y=-.2+Math.sin(A)*.01,Pt.position.z=.5,T.render(tt,w)}j()},M=function(){const Pt=new Wt,le=new Mn(.7,.8,.7),A=new Lt({color:9127187}),j=new _(le,A);j.position.set(0,.4,0),Pt.add(j);const D=new si(.55,.25,4),X=new Lt({color:16777215}),z=new _(D,X);z.position.set(0,.9,0),z.rotation.y=Math.PI/4,Pt.add(z);const gt=new Mn(.25,.35,.05),It=new Lt({color:6636321}),Ot=new _(gt,It);Ot.position.set(0,.2,.36),Pt.add(Ot);const zt=new Mn(.15,.15,.05),Jt=new Lt({color:8900331}),Kt=new _(zt,Jt);Kt.position.set(-.2,.5,.38),Pt.add(Kt);const Vt=new _(zt,Jt);Vt.position.set(.2,.5,.38),Pt.add(Vt);const ie=new Mn(.2,.4,.2),ve=new Lt({color:8421504}),pe=new _(ie,ve);pe.position.set(0,.95,0),Pt.add(pe);const Ct=new Ln(.07,.04,32,100),Qt=new Lt({color:2263842}),kt=new _(Ct,Qt);return kt.position.set(0,.45,.38),Pt.add(kt),Pt.position.set(.22,-.2,0),Pt.scale.set(.5,.5,.5),Pt},B=function(Pt=1,le={x:0,y:0,z:0}){const A=new Wt,j=new te(1.2,.9,3,32),D=new Lt({color:25153}),X=new _(j,D);A.add(X);const z=new te(1.3,1.3,.2,32),gt=new Lt({color:3355443}),It=new _(z,gt);It.position.y=1.6,A.add(It);const Ot=2,zt=new te(1.1,1.1,Ot,32),Jt=new Lt({color:9127187}),Kt=new _(zt,Jt);return Kt.position.y=0,new jn().load("/3d-bear-arts/assets/starbucks-logo.png",function(ie){ie.repeat.set(4,1),ie.offset.set(.25,0),ie.wrapS=Qe,ie.wrapT=Qe;const ve=new Lt({color:9127187,map:ie,transparent:!0}),pe=new te(1.1,1.05,1.5,32),Ct=new _(pe,ve);Ct.position.y=-.5,A.add(Ct)}),A.scale.set(Pt,Pt,Pt),A.position.set(le.x,le.y,le.z),A},I=function(){let Pt=1;function le(){requestAnimationFrame(le),Pt-=.1,fe.position.y=.5+Math.sin(Pt)*.8,T.render(tt,w)}le()},R=function(){requestAnimationFrame(R);const Pt=ye.attributes.position.array;for(let le=1;le<Pt.length;le+=3)Pt[le]-=.02,Pt[le]<-10&&(Pt[le]=10);ye.attributes.position.needsUpdate=!0,T.render(tt,w)},G=function(){requestAnimationFrame(G),i.value&&(U.rotation.y+=.03),o.value&&(U.rotation.y-=.03),s.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),Y.uniforms.u_time.value+=.5,qt.rotation.y+=.45,ge.rotation.y+=.05,fe.rotation.y+=.08,T.render(tt,w)};const tt=new On,w=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),T=new Fn({antialias:!0,alpha:!0});T.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(T.domElement);const U=new Wt,$=new Wt;tt.add($);const et=new ci(16777215,2);tt.add(et);const lt=new ai(16777215,4);lt.position.set(5,5,5),tt.add(lt);const q=new ri(16777215,5,50);q.position.set(0,2,4),tt.add(q);const it=new jn,W=it.load("/3d-bear-arts/assets/house.jpg");W.wrapS=W.wrapT=Qe,W.repeat.set(1,1),it.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const mt=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Ie}),wt=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.35,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Ie}),Mt=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.4,transmission:.7,ior:1.33,thickness:.5,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Ie}),Ft=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Ie}),Ht=new Fs().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);tt.environment=Ht;const rt=new Nt({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:Ie}),pt=new Nt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Tt=new at(1,32,32,0,Math.PI),O=new _(Tt,wt),ut=new _(Tt,Mt);O.scale.set(.85,.85,.8),ut.scale.set(.85,.85,.8),O.position.y=-.2,ut.position.y=-.2,O.rotation.y=Math.PI/2,ut.rotation.y=Math.PI*1.5;const st=new Ae(1,32),dt=new _(st,rt);dt.scale.set(.85,.85,.8),dt.position.set(0,-.2,0),dt.rotation.y=Math.PI/2;const yt=new Wt;yt.add(O),yt.add(ut),yt.add(dt),U.add(yt);const ot=new at(.6,32,32,0,Math.PI),g=new _(ot,Ft);g.scale.set(1,.95,.95),g.position.set(0,1,0),g.rotation.y=Math.PI*1.5;const P=new _(ot,wt);P.scale.set(1,.95,.95),P.position.set(0,1,0),P.rotation.y=Math.PI/2;const L=new Ae(.6,32),F=new _(L,rt);F.position.set(0,1,0),F.rotation.y=Math.PI/2,F.scale.set(1,.95,.95);const N=new Wt;N.add(g),N.add(P),N.add(F),U.add(N);const K=new at(.6,32,32,0,Math.PI*2,0,Math.PI/2),Z=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),b=new _(K,Z);b.position.set(0,-.2,0),b.rotation.x=Math.PI,b.scale.set(1.25,1.25,1.25),yt.add(b);const y=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:Ie,transparent:!1,opacity:.8}),C=new _(st,y);C.scale.set(.7,.7,.7),C.position.set(0,-.3,0),C.rotation.x=Math.PI/2,C.renderOrder=1,yt.add(C),U.add(yt);const Y=new on({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
            `}),V=new _(st,Y);V.position.set(0,-.2,0),V.scale.set(.7,.7,.7),V.rotation.x=-Math.PI/2,V.renderOrder=2,yt.add(V);const k=new at(.25,32,32),ft=new _(k,Ft);ft.position.set(-.45,1.35,-.1),U.add(ft);const ct=new _(k,mt);ct.position.set(.45,1.35,-.1),U.add(ct);const vt=new at(.25,32,32,Math.PI/2,Math.PI),bt=new _(vt,Ft);bt.scale.set(1.1,.6,.8),bt.position.set(0,.84,.5),bt.rotation.y=Math.PI;const ht=new at(.25,32,32,Math.PI/2,Math.PI),_t=new _(ht,mt);_t.scale.set(1.1,.6,.8),_t.position.set(0,.84,.5),_t.rotation.y=0;const Dt=new Ae(.25,32),Bt=new _(Dt,rt);Bt.scale.set(.8,.6,.8),Bt.position.set(0,.84,.5),Bt.rotation.y=Math.PI/2;const Rt=new Wt;Rt.add(bt),Rt.add(_t),Rt.add(Bt),U.add(Rt);const $t=new at(.35,32,32),Gt=new _($t,Ft);Gt.scale.set(.75,1.25,.65),Gt.position.set(-.7,-.15,.2),U.add(Gt);const Zt=new _($t,mt);Zt.scale.set(.75,1.25,.65),Zt.position.set(.7,-.15,.2),U.add(Zt);const H=new te(.2,.22,.6,32),xt=new _(H,Ft);xt.position.set(-.4,-1.05,0),U.add(xt);const nt=new _(H,mt);nt.position.set(.4,-1.05,0),U.add(nt);const Q=new at(.3,32,32),St=new _(Q,Ft);St.scale.set(1,.72,1.5),St.position.set(-.4,-1.45,.17),U.add(St);const Et=new _(Q,mt);Et.scale.set(1,.72,1.5),Et.position.set(.4,-1.45,.17),U.add(Et);const Xt=new at(.44,32,32),se=new _(Xt,Ft);se.position.set(-.15,-.45,-.4),U.add(se);const re=new _(Xt,pt);re.position.set(.15,-.45,-.4),U.add(re);const ue=new at(.18,32,32),ce=new _(ue,Ft);ce.position.set(0,-.35,-.8),U.add(ce),new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Pt){const le=new He("X",{font:Pt,size:.2,depth:.05}),A=new _(le,pt);A.position.set(-.3,.99,.53),A.rotation.x=he.degToRad(-5),A.rotation.y=he.degToRad(-15),U.add(A);const j=new He("+",{font:Pt,size:.25,depth:.1}),D=new _(j,pt);D.position.set(.12,.99,.53),D.rotation.y=he.degToRad(12),D.rotation.x=he.degToRad(-5),U.add(D)});const Me=x();U.add(Me),m();const jt=p();U.add(jt);const qt=p();qt.position.set(-.2,-.1,.5),U.add(qt),S(),a.value=p(),U.add(a.value),E(a.value);const oe=M();U.add(oe);const ae=M();ae.position.set(-.2,-.2,0),ae.scale.set(.35,.35,.35),U.add(ae);const ge=B(.1,{x:0,y:0,z:1}),fe=B(1.1,{x:0,y:-1.2,z:0});I();const Pe=1e3,ye=new Tn,Se=[];for(let Pt=0;Pt<Pe;Pt++){const le=(Math.random()-.5)*20,A=Math.random()*20,j=(Math.random()-.5)*20;Se.push(le,A,j)}ye.setAttribute("position",new rn(Se,3));const Ne=new _r({color:16777215,size:.1,transparent:!0,opacity:.8}),Ue=new sr(ye,Ne);U.add(Ue),R(),U.scale.set(1.2,1.2,1.2),tt.add(U),U.scale.set(1.4,1.4,1.4),U.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),tt.add(U),U.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),U.position.y=-.25,w.position.set(t.bodyPosition.x,1.4,t.cameraPosition),w.position.set(0,1,4),w.lookAt(t.bodyPosition.x,0,0),w.position.z=4,U.rotation.x=.1,G(),Ve(()=>t.bodyPosition,Pt=>{U.position.set(Pt.x,Pt.y,Pt.z)}),Ve(()=>t.cameraPosition,Pt=>{w.position.set(t.bodyPosition.x,1,Pt),w.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),T.setSize(window.innerWidth,window.innerHeight)})}});function d(){o.value=!0}function u(){i.value=!0}function h(){s.value=!0}function f(){r.value=!0}function v(){o.value=!1,i.value=!1,s.value=!1,r.value=!1}for(let x=0;x<eb;x++){const m=document.createElement("div");m.classList.add("confetti"),m.style.left=`${Math.random()*100}vw`,m.style.animationDuration=`${Math.random()*3+4}s`,m.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(m)}for(let x=0;x<nb;x++){const m=document.createElement("div");m.classList.add("light"),document.body.appendChild(m)}return(x,m)=>(Gn(),Yn(pn,null,[Ut("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",QS,[Ut("button",{class:"pixel-btn up",onMousedown:h,onMouseup:v},"UP",32),Ut("div",tb,[Ut("button",{class:"pixel-btn left",onMousedown:d,onMouseup:v},"LEFT",32),Ut("button",{class:"pixel-btn right",onMousedown:u,onMouseup:v},"RIGHT",32)]),Ut("button",{class:"pixel-btn down",onMousedown:f,onMouseup:v},"DOWN",32)])],64))}}),ob=$n(ib,[["__scopeId","data-v-43013412"]]),sb={class:"pixel-controls"},rb={class:"side-buttons"},ab=15,cb=5,lb=An({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),o=Yt(!1),s=Yt(!1),r=Yt(!1);const a=ps(null),c=new Fn({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new On;const l=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5,zn(()=>{if(e.value){let x=function(){const D=new Wt,X=new Ln(.12,.05,16,100),z=new Lt({color:16777215}),gt=new _(X,z);gt.position.set(0,1.65,0),gt.rotation.x=Math.PI/2,D.add(gt);const It=new si(.15,.3,32),Ot=new Lt({color:16711680}),zt=new _(It,Ot);zt.position.set(0,1.8,0),D.add(zt);const Jt=new at(.05,32,32),Kt=new Lt({color:16777215}),Vt=new _(Jt,Kt);return Vt.position.set(0,1.93,0),D.add(Vt),D.position.set(0,-.1,0),D},m=function(){const D=new Wt,X=new at(.15,32,32),z=new Lt({color:16764057}),gt=new _(X,z);gt.position.set(0,.4,0),D.add(gt);const It=new si(.08,.15,32);new Lt({color:16764057});const Ot=new _(It,wt);Ot.position.set(-.1,.55,0),Ot.rotation.z=Math.PI/6,D.add(Ot);const zt=new _(It,wt);zt.position.set(.1,.55,0),zt.rotation.z=-Math.PI/6,D.add(zt);const Jt=new te(.12,.15,.3,32),Kt=new Lt({color:16764057}),Vt=new _(Jt,Kt);Vt.position.set(0,.2,0),D.add(Vt);const ie=new te(.05,.05,.2,32),ve=new Lt({color:16764057}),pe=new _(ie,ve);pe.position.set(-.07,-.05,.05),D.add(pe);const Ct=new _(ie,ve);Ct.position.set(.07,-.05,.05),D.add(Ct);const Qt=new te(.04,.04,.2,32),kt=new Lt({color:16764057}),de=new _(Qt,wt);de.position.set(-.15,.25,0),de.rotation.z=Math.PI/4,D.add(de);const At=new _(Qt,kt);At.position.set(.15,.25,0),At.rotation.z=-Math.PI/4,D.add(At);const Ee=new te(.03,.03,.25,32),Le=new Lt({color:16764057}),xe=new _(Ee,Le);return xe.position.set(0,.1,-.2),xe.rotation.x=Math.PI/4,D.add(xe),D.scale.set(.75,.75,.75),D.position.set(.2,0,.2),D},p=function(){const D=new Wt,X=new at(.2,32,32),z=new Lt({color:16764057}),gt=new _(X,z);gt.position.set(0,1,0),D.add(gt);const It=new Lt({color:16777215}),Ot=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Cr of Ot){const kp=new at(Cr.size,16,16),Ou=new _(kp,It);Ou.position.set(Cr.x,Cr.y-.06,Cr.z-.01),D.add(Ou)}const zt=new Lt({color:16777215}),Jt=new te(.05,.06,.1,32),Kt=new _(Jt,zt);Kt.position.set(-.06,.93,.18),Kt.rotation.z=Math.PI/4;const Vt=new te(.05,.06,.1,32),ie=new _(Vt,zt);ie.position.set(.06,.93,.18),ie.rotation.z=-Math.PI/4;const ve=new Ln(.12,.05,16,100),pe=new Lt({color:16777215}),Ct=new _(ve,pe);Ct.position.set(0,1.15,0),Ct.rotation.x=Math.PI/2,D.add(Ct);const Qt=new si(.15,.3,32),kt=new Lt({color:16711680}),de=new _(Qt,kt);de.position.set(0,1.3,0),D.add(de);const At=new at(.05,32,32),Ee=new Lt({color:16777215}),Le=new _(At,Ee);Le.position.set(0,1.43,0),D.add(Le);const xe=new te(.2,.25,.6,32),Oe=new Lt({color:16711680}),_e=new _(xe,Oe);_e.position.set(0,.5,0),D.add(_e);const Fe=new te(.25,.25,.1,32),qe=new Lt({color:0}),De=new _(Fe,qe);De.position.set(0,.4,.005),D.add(De);const We=new te(.06,.06,.3,32),tn=new Lt({color:16711680}),$e=new _(We,tn);$e.position.set(-.25,.75,0),$e.rotation.z=Math.PI/4,D.add($e);const un=new _(We,tn);un.position.set(.25,.75,0),un.rotation.z=-Math.PI/4,D.add(un);const cn=new at(.07,32,32),Ze=new Lt({color:16777215}),an=new _(cn,Ze);an.position.set(-.35,.85,0),D.add(an);const en=new _(cn,Ze);en.position.set(.35,.85,0),D.add(en);const hn=new te(.1,.1,.15,32),gn=new Lt({color:16711680}),Pn=new te(.08,.08,.4,32),Ei=new Lt({color:0}),Fi=new _(Pn,Ei);Fi.position.set(-.1,.1,0),D.add(Fi);const Oi=new _(hn,gn);Oi.position.set(-.1,-.05,0),D.add(Oi);const Bi=new _(Pn,Ei);Bi.position.set(.1,.1,0),D.add(Bi);const Ti=new _(hn,gn);Ti.position.set(.1,-.05,0),D.add(Ti);const fi=new at(.12,32,32),Rr=new Lt({color:16711680}),Xo=new _(fi,Rr);Xo.scale.set(1,.7,1.5),Xo.position.set(-.1,-.12,.12),D.add(Xo);const Qa=new _(fi,Rr);return Qa.scale.set(1,.7,1.5),Qa.position.set(.1,-.1,.12),D.add(Qa),D.scale.set(.25,.25,.25),D.position.set(.2,.5,-0),D},S=function(){let D=0;function X(){requestAnimationFrame(X),D+=.4,me.position.y=.45+Math.sin(D)*.5,T.render(tt,w)}X()},E=function(D){let X=1,z=0;function gt(){requestAnimationFrame(gt),D.position.x+=.01*X,D.position.x>=.5?(X=-1,D.rotation.y=Math.PI):D.position.x<=0&&(X=1,D.rotation.y=0),z+=1,D.position.y=-.2+Math.sin(z)*.01,D.position.z=.5,T.render(tt,w)}gt()},M=function(){const D=new Wt,X=new Mn(.7,.8,.7),z=new Lt({color:9127187}),gt=new _(X,z);gt.position.set(0,.4,0),D.add(gt);const It=new si(.55,.25,4),Ot=new Lt({color:16777215}),zt=new _(It,Ot);zt.position.set(0,.9,0),zt.rotation.y=Math.PI/4,D.add(zt);const Jt=new Mn(.25,.35,.05),Kt=new Lt({color:6636321}),Vt=new _(Jt,Kt);Vt.position.set(0,.2,.36),D.add(Vt);const ie=new Mn(.15,.15,.05),ve=new Lt({color:8900331}),pe=new _(ie,ve);pe.position.set(-.2,.5,.38),D.add(pe);const Ct=new _(ie,ve);Ct.position.set(.2,.5,.38),D.add(Ct);const Qt=new Mn(.2,.4,.2),kt=new Lt({color:8421504}),de=new _(Qt,kt);de.position.set(0,.95,0),D.add(de);const At=new Ln(.07,.04,32,100),Ee=new Lt({color:2263842}),Le=new _(At,Ee);return Le.position.set(0,.45,.38),D.add(Le),D.position.set(.22,-.2,0),D.scale.set(.5,.5,.5),D},B=function(D=1,X={x:0,y:0,z:0}){const z=new Wt,gt=new te(1.2,.9,3,32),It=new Lt({color:25153}),Ot=new _(gt,It);z.add(Ot);const zt=new te(1.3,1.3,.2,32),Jt=new Lt({color:3355443}),Kt=new _(zt,Jt);return Kt.position.y=1.6,z.add(Kt),new jn().load("/3d-bear-arts/assets/starbucks-logo.png",function(ie){ie.repeat.set(4,1),ie.offset.set(.25,0),ie.wrapS=Qe,ie.wrapT=Qe;const ve=new Lt({color:9127187,map:ie,transparent:!0}),pe=new te(1.1,1.05,1.5,32),Ct=new _(pe,ve);Ct.position.y=-.5,z.add(Ct)}),z.scale.set(D,D,D),z.position.set(X.x,X.y,X.z),z},I=function(){requestAnimationFrame(I);const D=fe.attributes.position.array;for(let X=1;X<D.length;X+=3)D[X]-=.02,D[X]<-10&&(D[X]=10);fe.attributes.position.needsUpdate=!0,T.render(tt,w)},R=function(){requestAnimationFrame(R);const D=le.attributes.position.array;for(let X=1;X<D.length;X+=3)D[X]-=.02,D[X]<-Pt&&(D[X]=Pt);le.attributes.position.needsUpdate=!0,T.render(tt,w)},G=function(){requestAnimationFrame(G),i.value&&(U.rotation.y+=.03),o.value&&(U.rotation.y-=.03),s.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),y.uniforms.u_time.value+=.5,Me.rotation.y+=.45,oe.rotation.y+=.05,ae.rotation.y+=.05,U.rotation.y-=.05,T.render(tt,w)};const tt=new On,w=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),T=new Fn({antialias:!0,alpha:!0});T.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(T.domElement);const U=new Wt,$=new Wt;tt.add($);const et=new ci(16777215,2);tt.add(et);const lt=new ai(16777215,4);lt.position.set(5,5,5),tt.add(lt);const q=new ri(16777215,5,50);q.position.set(0,2,4),tt.add(q);const it=new jn,W=it.load("/3d-bear-arts/assets/house.jpg");W.wrapS=W.wrapT=Qe,W.repeat.set(1,1),it.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const mt=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Ie});new Nt({color:16777215,metalness:.3,map:W,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.4,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Ie});const wt=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Ie}),Mt=new Fs().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);tt.environment=Mt;const Ft=new Nt({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:Ie}),Ht=new Nt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),rt=new at(1,32,32,0,Math.PI),pt=new _(rt,mt),Tt=new _(rt,wt);pt.scale.set(.85,.85,.8),Tt.scale.set(.85,.85,.8),pt.position.y=-.2,Tt.position.y=-.2,pt.rotation.y=Math.PI/2,Tt.rotation.y=Math.PI*1.5;const O=new Ae(1,32),ut=new _(O,Ft);ut.scale.set(.85,.85,.8),ut.position.set(0,-.2,0),ut.rotation.y=Math.PI/2;const st=new Wt;st.add(pt),st.add(Tt),st.add(ut),U.add(st);const dt=new at(.6,32,32,0,Math.PI),yt=new _(dt,wt);yt.scale.set(1,.95,.95),yt.position.set(0,1,0),yt.rotation.y=Math.PI*1.5;const ot=new _(dt,mt);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI/2;const g=new Ae(.6,32),P=new _(g,Ft);P.position.set(0,1,0),P.rotation.y=Math.PI/2,P.scale.set(1,.95,.95);const L=new Wt;L.add(yt),L.add(ot),L.add(P),U.add(L);const F=new at(.6,32,32,0,Math.PI*2,0,Math.PI/2),N=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),K=new _(F,N);K.position.set(0,-.2,0),K.rotation.x=Math.PI,K.scale.set(1.25,1.25,1.25),st.add(K);const Z=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:Ie,transparent:!1,opacity:.8}),b=new _(O,Z);b.scale.set(.7,.7,.7),b.position.set(0,-.3,0),b.rotation.x=Math.PI/2,b.renderOrder=1,st.add(b),U.add(st);const y=new on({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
            `}),C=new _(O,y);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,st.add(C);const Y=new at(.25,32,32),V=new _(Y,wt);V.position.set(-.45,1.35,-.1),U.add(V);const k=new _(Y,mt);k.position.set(.45,1.35,-.1),U.add(k);const ft=new at(.25,32,32,Math.PI/2,Math.PI),ct=new _(ft,wt);ct.scale.set(1.1,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=Math.PI;const vt=new at(.25,32,32,Math.PI/2,Math.PI),bt=new _(vt,mt);bt.scale.set(1.1,.6,.8),bt.position.set(0,.84,.5),bt.rotation.y=0;const ht=new Ae(.25,32),_t=new _(ht,Ft);_t.scale.set(.8,.6,.8),_t.position.set(0,.84,.5),_t.rotation.y=Math.PI/2;const Dt=new Wt;Dt.add(ct),Dt.add(bt),Dt.add(_t),U.add(Dt);const Bt=new at(.35,32,32),Rt=new _(Bt,wt);Rt.scale.set(.75,1.25,.65),Rt.position.set(-.7,-.15,.2),U.add(Rt);const $t=new _(Bt,mt);$t.scale.set(.75,1.25,.65),$t.position.set(.7,-.15,.2),U.add($t);const Gt=new te(.2,.22,.6,32),Zt=new _(Gt,wt);Zt.position.set(-.4,-1.05,0),U.add(Zt);const H=new _(Gt,mt);H.position.set(.4,-1.05,0),U.add(H);const xt=new at(.3,32,32),nt=new _(xt,wt);nt.scale.set(1,.72,1.5),nt.position.set(-.4,-1.45,.17),U.add(nt);const Q=new _(xt,mt);Q.scale.set(1,.72,1.5),Q.position.set(.4,-1.45,.17),U.add(Q);const St=new at(.44,32,32),Et=new _(St,wt);Et.position.set(-.15,-.45,-.4),U.add(Et);const Xt=new _(St,wt);Xt.position.set(.15,-.45,-.4),U.add(Xt);const se=new at(.18,32,32),re=new _(se,wt);re.position.set(0,-.35,-.8),U.add(re),new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(D){const X=new He("X",{font:D,size:.2,depth:.05}),z=new _(X,Ht);z.position.set(-.3,.99,.53),z.rotation.x=he.degToRad(-5),z.rotation.y=he.degToRad(-15),U.add(z);const gt=new He("O",{font:D,size:.2,depth:.05}),It=new _(gt,Ht);It.position.set(.14,.99,.53),It.rotation.y=he.degToRad(12),It.rotation.x=he.degToRad(-5),U.add(It)});const ce=x();U.add(ce),m();const me=p();U.add(me);const Me=p();Me.position.set(-.2,-.1,.5),U.add(Me),S(),a.value=p(),U.add(a.value),E(a.value);const jt=M();U.add(jt);const qt=M();qt.position.set(-.2,-.2,0),qt.scale.set(.35,.35,.35),U.add(qt);const oe=B(.1,{x:0,y:0,z:1}),ae=B(.6,{x:0,y:-1.5,z:0}),ge=1e3,fe=new Tn,Pe=[];for(let D=0;D<ge;D++){const X=(Math.random()-.5)*20,z=Math.random()*20,gt=(Math.random()-.5)*20;Pe.push(X,z,gt)}fe.setAttribute("position",new rn(Pe,3));const ye=new _r({color:16777215,size:.1,transparent:!0,opacity:.8}),Se=new sr(fe,ye);U.add(Se),I();const Ne=2e3,Ue=[],Pt=.6;for(let D=0;D<Ne;D++){const X=(Math.random()-.5)*Pt*2,z=(Math.random()-.5)*Pt*2,gt=(Math.random()-.5)*Pt*2;Math.sqrt(X*X+z*z+gt*gt)<Pt&&Ue.push(X,z,gt)}const le=new Tn;le.setAttribute("position",new rn(Ue,3)),new _r({color:16777215,size:.05,transparent:!0,opacity:.9}),new sr(le,N).position.set(0,-.2,0),new sr(le,Z).position.set(0,.8,0),R(),U.scale.set(.85,.85,.85),U.position.set(t.bodyPosition.x,t.bodyPosition.y+.9,t.bodyPosition.z),tt.add(U),tt.add(ae),w.position.set(t.bodyPosition.x,1,t.cameraPosition),w.lookAt(t.bodyPosition.x,0,0),w.position.z=4,U.rotation.x=.1,G(),Ve(()=>t.bodyPosition,D=>{U.position.set(D.x,D.y,D.z)}),Ve(()=>t.cameraPosition,D=>{w.position.set(t.bodyPosition.x,1,D),w.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),T.setSize(window.innerWidth,window.innerHeight)})}});function d(){o.value=!0}function u(){i.value=!0}function h(){s.value=!0}function f(){r.value=!0}function v(){o.value=!1,i.value=!1,s.value=!1,r.value=!1}for(let x=0;x<ab;x++){const m=document.createElement("div");m.classList.add("confetti"),m.style.left=`${Math.random()*100}vw`,m.style.animationDuration=`${Math.random()*3+4}s`,m.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(m)}for(let x=0;x<cb;x++){const m=document.createElement("div");m.classList.add("light"),document.body.appendChild(m)}return(x,m)=>(Gn(),Yn(pn,null,[Ut("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",sb,[Ut("button",{class:"pixel-btn up",onMousedown:h,onMouseup:v},"UP",32),Ut("div",rb,[Ut("button",{class:"pixel-btn left",onMousedown:d,onMouseup:v},"LEFT",32),Ut("button",{class:"pixel-btn right",onMousedown:u,onMouseup:v},"RIGHT",32)]),Ut("button",{class:"pixel-btn down",onMousedown:f,onMouseup:v},"DOWN",32)])],64))}}),ub=$n(lb,[["__scopeId","data-v-ceb84432"]]),db={key:0,class:"bear-face-container"},hb=An({__name:"BearFaceWhite",props:{color:{type:String,default:"white"}},setup(n){const t=Yt(null),e=Yt(!1),i=n;return zn(()=>{const o=t.value;if(o){o.width=window.innerWidth,o.height=window.innerHeight*.7;const s=o.getContext("2d");s&&(()=>{const a=o.width/2,c=o.height/1.8,l=o.height/2,d=o.height/2.05,u=l*.45,h=l*.18,f=l*.3,v=l*.275,x=f*.35,m=f*.32;s.save(),s.beginPath(),s.rect(0,0,o.width/2,o.height),s.clip(),s.lineWidth=15,s.strokeStyle=i.color,s.beginPath(),s.arc(a-l*.85,c-d*.8,u,0,Math.PI*2,!0),s.stroke(),s.beginPath(),s.arc(a+l*.85,c-l*.8,u,0,Math.PI*2,!0),s.stroke(),s.lineWidth=15,s.beginPath(),s.arc(a,c,d,0,Math.PI*2,!0),s.stroke(),s.lineWidth=15,s.beginPath(),s.arc(a-l*.4,c-l*.2,h,0,Math.PI*2,!0),s.stroke(),s.beginPath(),s.moveTo(a+l*.2,c-l*.3),s.lineTo(a+l*.5,c-l*.05),s.moveTo(a+l*.5,c-l*.3),s.lineTo(a+l*.2,c-l*.05),s.stroke(),s.beginPath(),s.ellipse(a,c+l*.4,v*1.5,v,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.arc(a,c+l*.3,m,0,Math.PI*2,!0),s.stroke(),s.restore(),s.save(),s.beginPath(),s.rect(o.width/2,0,o.width/2,o.height),s.clip(),s.fillStyle=i.color,s.beginPath(),s.arc(a-l*.85,c-l*.8,u,0,Math.PI*2,!0),s.fill(),s.beginPath(),s.arc(a+l*.85,c-l*.8,u,0,Math.PI*2,!0),s.fill(),s.beginPath(),s.arc(a,c,l,0,Math.PI*2,!0),s.fill(),s.fillStyle=i.color,s.beginPath(),s.arc(a-l*.4,c-l*.2,h,0,Math.PI*2,!0),s.fill(),s.lineWidth=15,s.beginPath(),s.moveTo(a+l*.2,c-l*.3),s.lineTo(a+l*.5,c-l*.05),s.moveTo(a+l*.5,c-l*.3),s.lineTo(a+l*.2,c-l*.05),s.strokeStyle="#000000",s.stroke(),s.fillStyle="#000000",s.beginPath(),s.ellipse(a,c+l*.4,f*1.5,f,0,0,Math.PI*2),s.fill(),s.fillStyle=i.color,s.beginPath(),s.arc(a,c+l*.3,x*1.2,0,Math.PI*2,!0),s.fill(),s.restore()})()}}),(o,s)=>e.value?Lm("",!0):(Gn(),Yn("div",db,[Ut("canvas",{ref_key:"bearCanvas",ref:t},null,512)]))}}),Fu=$n(hb,[["__scopeId","data-v-6ce68a75"]]),fb={class:"pixel-controls"},pb={class:"side-buttons"},mb=15,gb=5,vb=An({__name:"SliverBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);zn(()=>{if(e.value){let h=function(){S.visible=!1,G.update(p,x),S.visible=!0,requestAnimationFrame(h)},f=function(){const jt=new Wt,qt=new Lt({color:16777215}),oe=new Lt({color:16753920}),ae=new Lt({color:0}),ge=new Lt({color:16711680}),fe=new Lt({color:9127187}),Pe=new at(.5,32,32),ye=new _(Pe,qt);ye.position.set(0,1.5,0),jt.add(ye);const Se=new te(.25,.2,.5,32),Ne=new _(Se,oe);Ne.position.set(0,1.3,.5),Ne.rotation.x=Math.PI/2,jt.add(Ne);const Ue=new at(.8,32,32),Pt=new _(Ue,qt);Pt.position.set(0,.6,0),jt.add(Pt);const le=new te(.2,.2,.6,32),A=new _(le,oe);A.position.set(-.3,-.6,0),jt.add(A);const j=new _(le,oe);j.position.set(.3,-.6,0),jt.add(j);const D=new Mn(.5,.2,.3),X=new _(D,oe);X.position.set(-.3,-.9,.15),jt.add(X);const z=new _(D,oe);z.position.set(.3,-.9,.15),jt.add(z);const gt=new te(.4,.4,.1,32),It=new _(gt,ae);It.position.set(0,2.1,0),jt.add(It);const Ot=new te(.3,.3,.6,32),zt=new _(Ot,ae);zt.position.set(0,2.4,0),jt.add(zt);const Jt=new Ln(.2,.05,16,100),Kt=new _(Jt,ge);Kt.position.set(0,1,.5),jt.add(Kt);const Vt=new te(.05,.05,2,32),ie=new _(Vt,fe);return ie.position.set(.5,0,0),ie.rotation.z=Math.PI/8,jt.add(ie),jt},v=function(){requestAnimationFrame(v),Ft.uniforms.time.value+=.05,mt.uniforms.time.value+=.05,i.value&&(S.rotation.y+=.05),o.value&&(S.rotation.y-=.07),s.value&&(S.rotation.x-=.05),r.value&&(S.rotation.x+=.05),p.render(x,m)};const x=new On,m=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),p=new Fn({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const S=new Wt,E=new ci(16777215,2);x.add(E);const M=new ai(16777215,4);M.position.set(5,5,5),x.add(M);const B=new ri(16777215,5,50);B.position.set(0,2,4),x.add(B);const I=new jn,R=new Pr(256,{format:qn,generateMipmaps:!0,minFilter:wi}),G=new Ar(1,1e3,R);new Nt({color:12632256,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:R.texture,envMapIntensity:1.5}),x.add(G),x.environment=R.texture,h();const w=new Fs().load(["/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg"]);x.environment=w;const T=new Nt({color:"hotpink",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:w,reflectivity:1}),U=new Nt({color:"hotpink",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,envMap:w,reflectivity:0}),$=new Nt({color:"hotpink",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.35,envMap:w,reflectivity:0}),et=I.load("/3d-bear-arts/assets/popbear1.jpg"),lt=new Nt({color:"hotpink",map:et,metalness:.3,roughness:.5,transparent:!0,opacity:1}),q=new on({uniforms:{time:{value:0},color1:{value:new we(16766720)},color2:{value:new we(16007990)}},vertexShader:`
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
          `}),it=`
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
      `,mt=new on({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:it,fragmentShader:W,transparent:!1,depthWrite:!0}),wt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,Mt=`
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
      `,Ft=new on({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:wt,fragmentShader:Mt,transparent:!1,depthWrite:!0}),Ht=new at(1,32,32,0,Math.PI),rt=new _(Ht,$),pt=new _(Ht,T);rt.scale.set(.85,.85,.8),pt.scale.set(.85,.85,.8),rt.position.y=-.2,pt.position.y=-.2,rt.rotation.y=Math.PI/2,pt.rotation.y=Math.PI*1.5;const Tt=new Ae(1,32),O=new _(Tt,lt);O.scale.set(.85,.85,.8),O.position.set(0,-.2,0),O.rotation.y=Math.PI/2;const ut=new Wt;ut.add(rt),ut.add(pt),ut.add(O),S.add(ut);const st=new at(.6,32,32,0,Math.PI),dt=new _(st,T);dt.scale.set(1,.95,.95),dt.position.set(0,1,0),dt.rotation.y=Math.PI*1.5;const yt=new _(st,$);yt.scale.set(1,.95,.95),yt.position.set(0,1,0),yt.rotation.y=Math.PI/2;const ot=new Ae(.6,32),g=new _(ot,lt);g.position.set(0,1,0),g.rotation.y=Math.PI/2,g.scale.set(1,.95,.95);const P=new Wt;P.add(dt),P.add(yt),P.add(g),S.add(P);const L=new at(.25,32,32),F=new _(L,T);F.position.set(-.45,1.35,-.1),S.add(F);const N=new _(L,$);N.position.set(.45,1.35,-.1),S.add(N);const K=new at(.25,32,32,Math.PI/2,Math.PI),Z=new _(K,T);Z.scale.set(1.1,.6,.8),Z.position.set(0,.84,.5),Z.rotation.y=Math.PI;const b=new at(.25,32,32,Math.PI/2,Math.PI),y=new _(b,U);y.scale.set(1.1,.6,.8),y.position.set(0,.84,.5),y.rotation.y=0;const C=new Ae(.25,32),Y=new _(C,lt);Y.scale.set(.8,.6,.8),Y.position.set(0,.84,.5),Y.rotation.y=Math.PI/2;const V=new Wt;V.add(Z),V.add(y),V.add(Y),S.add(V);const k=new mn;k.moveTo(0,0),k.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),k.bezierCurveTo(-.6,.3,0,.6,0,1),k.bezierCurveTo(0,.6,.6,.3,.6,0),k.bezierCurveTo(.6,-.3,0,-.3,0,0);const ft={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ct=new vn(k,ft),vt=new _(ct,mt);vt.scale.set(.38,.38,.38),vt.position.set(.35,0,0),vt.rotation.y=Math.PI,vt.rotation.x=Math.PI,S.add(vt);const bt=new _(ct,mt);bt.scale.set(.35,.35,.35),bt.position.set(.3,0,0),bt.rotation.y=Math.PI,bt.rotation.x=Math.PI,S.add(bt);const ht=new _(ct,T);ht.scale.set(.22,.22,.22),ht.position.set(.27,.4,0),ht.rotation.y=Math.PI,ht.rotation.x=Math.PI,S.add(ht);const _t=new _(ct,T);_t.scale.set(.25,.25,.25),_t.position.set(.23,-.5,.3),_t.rotation.y=Math.PI,_t.rotation.x=Math.PI,S.add(_t);const Dt=new _(ct,T);Dt.scale.set(.3,.3,.3),Dt.position.set(.23,.2,-.4),Dt.rotation.y=Math.PI,Dt.rotation.x=Math.PI,S.add(Dt);const Bt=new at(.35,32,32),Rt=new _(Bt,T);Rt.scale.set(.75,1.25,.65),Rt.position.set(-.7,-.15,.2),S.add(Rt);const $t=new _(Bt,U);$t.scale.set(.75,1.25,.65),$t.position.set(.7,-.15,.2),S.add($t);const Gt=new te(.2,.22,.6,32),Zt=new _(Gt,T);Zt.position.set(-.4,-1.05,0),S.add(Zt);const H=new _(Gt,U);H.position.set(.4,-1.05,0),S.add(H);const xt=new at(.3,32,32),nt=new _(xt,T);nt.scale.set(1,.72,1.5),nt.position.set(-.4,-1.45,.17),S.add(nt);const Q=new _(xt,U);Q.scale.set(1,.72,1.5),Q.position.set(.4,-1.45,.17),S.add(Q);const St=new at(.44,32,32),Et=new _(St,T);Et.position.set(-.15,-.45,-.4),S.add(Et);const Xt=new _(St,U);Xt.position.set(.15,-.45,-.4),S.add(Xt);const se=new at(.18,32,32),re=new _(se,T);re.position.set(0,-.35,-.8),S.add(re),new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(jt){const qt=new He("X",{font:jt,size:.18,depth:.05}),oe=new _(qt,mt);oe.position.set(-.3,.99,.53),oe.rotation.x=he.degToRad(-5),oe.rotation.y=he.degToRad(-15),S.add(oe);const ae=new He("+",{font:jt,size:.25,depth:.1}),ge=new _(ae,mt);ge.position.set(.14,.99,.53),ge.rotation.y=he.degToRad(12),ge.rotation.x=he.degToRad(-5),S.add(ge)}),re.renderOrder=1;const ce=f();ce.scale.set(.2,.2,.2),ce.position.set(1,.6,.3),S.scale.set(1.4,1.4,1.4),x.add(S),S.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),m.position.set(t.bodyPosition.x,1.4,t.cameraPosition),m.lookAt(t.bodyPosition.x,0,0),m.position.z=4;let me=Yt(!1);const Me=jt=>{if(me.value){const qt={x:jt.clientX/window.innerWidth*2-1,y:-(jt.clientY/window.innerHeight)*2+1},oe=qt.x*Math.PI*.2,ae=qt.y*Math.PI*.2;S.rotation.y=oe,S.rotation.x=ae}};window.addEventListener("mousemove",Me),q.uniforms.time.value+=.04,v(),Ve(()=>t.bodyPosition,jt=>{S.position.set(jt.x,jt.y,jt.z)}),Ve(()=>t.cameraPosition,jt=>{m.position.set(t.bodyPosition.x,1,jt),m.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});let i=Yt(!1),o=Yt(!1),s=Yt(!1),r=Yt(!1);function a(){o.value=!0}function c(){i.value=!0}function l(){s.value=!0}function d(){r.value=!0}function u(){o.value=!1,i.value=!1,s.value=!1,r.value=!1}for(let h=0;h<mb;h++){const f=document.createElement("div");f.classList.add("confetti"),f.style.left=`${Math.random()*100}vw`,f.style.animationDuration=`${Math.random()*3+4}s`,f.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(f)}for(let h=0;h<gb;h++){const f=document.createElement("div");f.classList.add("light"),document.body.appendChild(f)}return(h,f)=>(Gn(),Yn(pn,null,[Ut("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",null,[Be(Fu,{class:"bear-background",color:"#FF69B4"})]),Ut("div",fb,[Ut("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:u},"▲",32),Ut("div",pb,[Ut("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:u},"◀",32),Ut("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:u},"▶",32)]),Ut("button",{class:"pixel-btn down border-gold",onMousedown:d,onMouseup:u},"▼",32)])],64))}}),_b=$n(vb,[["__scopeId","data-v-3211ab27"]]),yb={class:"pixel-controls"},xb={class:"side-buttons"},wb=15,Mb=5,Sb=An({__name:"Money",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);zn(()=>{if(e.value){let h=function(){M.visible=!1,T.update(E,p),M.visible=!0,requestAnimationFrame(h)},f=function(){const qt=new Wt;new Lt({color:16777215}),new Lt({color:16770244}),new Lt({color:16776960}),new Lt({color:16316671});const oe=new at(.2,32,32),ae=new _(oe,q);ae.position.set(0,1.5,0),qt.add(ae);const ge=new te(.2,.35,.6,32),fe=new _(ge,q);fe.position.set(0,1,0),qt.add(fe);const Pe=new mn;Pe.moveTo(0,0),Pe.bezierCurveTo(.5,.2,.8,.7,.5,1.5),Pe.bezierCurveTo(.3,1.3,0,.8,0,0);const ye=new vn(Pe,{depth:.05,bevelEnabled:!1}),Se=new _(ye,Ht);Se.position.set(-.2,1.2,-.05),Se.rotation.y=Math.PI/12,Se.rotation.z=Math.PI/4,Se.scale.set(-.5,.5,.5),qt.add(Se);const Ne=new _(ye,Ht);Ne.position.set(-.1,1.1,-.05),Ne.rotation.y=Math.PI/10,Ne.rotation.z=Math.PI/3,Ne.scale.set(-.5,.5,.5),qt.add(Ne);const Ue=new _(ye,Ht);Ue.position.set(0,1,-.05),Ue.rotation.y=Math.PI/8,Ue.rotation.z=Math.PI/2.5,Ue.scale.set(-.5,.5,.5),qt.add(Ue);const Pt=new _(ye,Ht);Pt.position.set(.2,1.2,-.05),Pt.rotation.y=-Math.PI/12,Pt.rotation.z=-Math.PI/4,Pt.scale.set(.5,.5,.5),qt.add(Pt);const le=new _(ye,Ht);le.position.set(.1,1.1,-.05),le.rotation.y=-Math.PI/10,le.rotation.z=-Math.PI/3,le.scale.set(.5,.5,.5),qt.add(le);const A=new _(ye,Ht);A.position.set(0,1,-.05),A.rotation.y=-Math.PI/8,A.rotation.z=-Math.PI/2.5,A.scale.set(.5,.5,.5),qt.add(A);const j=new Ln(.15,.05,16,100),D=new _(j,Ht);D.position.set(0,1.8,0),D.rotation.x=Math.PI/2,qt.add(D);const X=new te(.05,.05,.3,32),z=new _(X,Ht);z.position.set(-.15,.55,0),z.rotation.z=Math.PI/1;const gt=new _(X,Ht);return gt.position.set(.15,.55,0),gt.rotation.z=-Math.PI/1,qt.add(z),qt.add(gt),qt},v=function(){const qt=new Wt,oe=new te(.8,.8,.25,32),ae=new _(oe,q);qt.add(ae);const ge=new si(.2,.4,32),fe=8,Pe=.6;for(let Se=0;Se<fe;Se++){const Ne=Se/fe*Math.PI*2,Ue=new _(ge,q);Ue.position.set(Math.cos(Ne)*Pe,.23,Math.sin(Ne)*Pe),Ue.rotation.y=-Ne,qt.add(Ue)}const ye=new at(.08,16,16);for(let Se=0;Se<fe;Se++){const Ne=Se/fe*Math.PI*2,Ue=new _(ye,Ht);Ue.position.set(Math.cos(Ne)*Pe,.45,Math.sin(Ne)*Pe),qt.add(Ue)}return qt},x=function(){requestAnimationFrame(x),me.rotation.y+=.01,E.render(p,S)},m=function(){requestAnimationFrame(m),Tt.uniforms.time.value+=.05,Ht.uniforms.time.value+=.05,i.value&&(M.rotation.y+=.05),o.value&&(M.rotation.y-=.07),s.value&&(M.rotation.x-=.05),r.value&&(M.rotation.x+=.05),E.render(p,S)};const p=new On,S=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),E=new Fn({antialias:!0,alpha:!0});E.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(E.domElement);const M=new Wt,B=new ci(16777215,2);p.add(B);const I=new ai(16777215,4);I.position.set(5,5,5),p.add(I);const R=new ri(16777215,5,50);R.position.set(0,2,4),p.add(R);const tt=new jn().load("/3d-bear-arts/assets/cashwings.jpg"),w=new Pr(256,{format:qn,generateMipmaps:!0,minFilter:wi}),T=new Ar(1,1e3,w),U=new Nt({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:w.texture,envMapIntensity:1.5});p.add(T),p.environment=w.texture,h();const $=new Fs,et=$.load(["/3d-bear-arts/assets/cash2.jpg","/3d-bear-arts/assets/cash8.jpg","/3d-bear-arts/assets/cash1.jpg","/3d-bear-arts/assets/cash11.jpg","/3d-bear-arts/assets/cash4.jpg","/3d-bear-arts/assets/cash3.jpg"]);p.environment=et;const lt=$.load(["/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg"]);p.environment=lt;const q=new Nt({color:"lightgreen",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:et,reflectivity:1});new Nt({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:lt,reflectivity:1});const it=new Nt({color:"lightgreen",map:tt,metalness:.3,roughness:.5,transparent:!0,opacity:1}),W=new Nt({color:"lightgreen",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,envMap:et,reflectivity:0}),mt=new Nt({color:"lightgreen",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.35,envMap:et,reflectivity:0}),wt=new on({uniforms:{time:{value:0},color1:{value:new we(16766720)},color2:{value:new we(16007990)}},vertexShader:`
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
          `}),Mt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,Ft=`
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
      `,Ht=new on({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:Mt,fragmentShader:Ft,transparent:!1,depthWrite:!0}),rt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,pt=`
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
      `,Tt=new on({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:rt,fragmentShader:pt,transparent:!1,depthWrite:!0}),O=new at(1,32,32,0,Math.PI),ut=new _(O,mt),st=new _(O,q);ut.scale.set(.85,.85,.8),st.scale.set(.85,.85,.8),ut.position.y=-.2,st.position.y=-.2,ut.rotation.y=Math.PI/2,st.rotation.y=Math.PI*1.5;const dt=new Ae(1,32),yt=new _(dt,it);yt.scale.set(.85,.85,.8),yt.position.set(0,-.2,0),yt.rotation.y=Math.PI/2;const ot=new Wt;ot.add(ut),ot.add(st),ot.add(yt),M.add(ot);const g=new at(.6,32,32,0,Math.PI),P=new _(g,q);P.scale.set(1,.95,.95),P.position.set(0,1,0),P.rotation.y=Math.PI*1.5;const L=new _(g,mt);L.scale.set(1,.95,.95),L.position.set(0,1,0),L.rotation.y=Math.PI/2;const F=new Ae(.6,32),N=new _(F,it);N.position.set(0,1,0),N.rotation.y=Math.PI/2,N.scale.set(1,.95,.95);const K=new Wt;K.add(P),K.add(L),K.add(N),M.add(K);const Z=new at(.25,32,32),b=new _(Z,q);b.position.set(-.45,1.35,-.1),M.add(b);const y=new _(Z,mt);y.position.set(.45,1.35,-.1),M.add(y);const C=new at(.25,32,32,Math.PI/2,Math.PI),Y=new _(C,q);Y.scale.set(1.1,.6,.8),Y.position.set(0,.84,.5),Y.rotation.y=Math.PI;const V=new at(.25,32,32,Math.PI/2,Math.PI),k=new _(V,W);k.scale.set(1.1,.6,.8),k.position.set(0,.84,.5),k.rotation.y=0;const ft=new Ae(.25,32),ct=new _(ft,it);ct.scale.set(.8,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=Math.PI/2;const vt=new Wt;vt.add(Y),vt.add(k),vt.add(ct),M.add(vt);const bt=new mn;bt.moveTo(0,0),bt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),bt.bezierCurveTo(-.6,.3,0,.6,0,1),bt.bezierCurveTo(0,.6,.6,.3,.6,0),bt.bezierCurveTo(.6,-.3,0,-.3,0,0);const ht={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},_t=new vn(bt,ht),Dt=new _(_t,U);Dt.scale.set(.38,.38,.38),Dt.position.set(.35,0,0),Dt.rotation.y=Math.PI,Dt.rotation.x=Math.PI;const Bt=new at(.35,32,32),Rt=new _(Bt,q);Rt.scale.set(.75,1.25,.65),Rt.position.set(-.7,-.15,.2),M.add(Rt);const $t=new _(Bt,W);$t.scale.set(.75,1.25,.65),$t.position.set(.7,-.15,.2),M.add($t);const Gt=new te(.2,.22,.6,32),Zt=new _(Gt,q);Zt.position.set(-.4,-1.05,0),M.add(Zt);const H=new _(Gt,W);H.position.set(.4,-1.05,0),M.add(H);const xt=new at(.3,32,32),nt=new _(xt,q);nt.scale.set(1,.72,1.5),nt.position.set(-.4,-1.45,.17),M.add(nt);const Q=new _(xt,W);Q.scale.set(1,.72,1.5),Q.position.set(.4,-1.45,.17),M.add(Q);const St=new at(.44,32,32),Et=new _(St,q);Et.position.set(-.15,-.45,-.4),M.add(Et);const Xt=new _(St,W);Xt.position.set(.15,-.45,-.4),M.add(Xt);const se=new at(.18,32,32),re=new _(se,q);re.position.set(0,-.35,-.8),M.add(re),new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(qt){const oe=new He("X",{font:qt,size:.18,depth:.05}),ae=new _(oe,Ht);ae.position.set(-.3,.99,.53),ae.rotation.x=he.degToRad(-5),ae.rotation.y=he.degToRad(-15),M.add(ae);const ge=new He("+",{font:qt,size:.25,depth:.1}),fe=new _(ge,Ht);fe.position.set(.14,.99,.53),fe.rotation.y=he.degToRad(12),fe.rotation.x=he.degToRad(-5),M.add(fe)}),re.renderOrder=1;const ce=f();ce.scale.set(.37,.37,.37),ce.position.set(.35,-.5,.25),M.add(ce);const me=v();me.scale.set(.3,.3,.3),me.position.set(-.06,1.6,.1),me.rotation.set(0,0,Math.PI/20),M.add(me),x(),M.scale.set(1.4,1.4,1.4),p.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),S.position.set(t.bodyPosition.x,1.4,t.cameraPosition),S.lookAt(t.bodyPosition.x,0,0),S.position.z=4;let Me=Yt(!1);const jt=qt=>{if(Me.value){const oe={x:qt.clientX/window.innerWidth*2-1,y:-(qt.clientY/window.innerHeight)*2+1},ae=oe.x*Math.PI*.2,ge=oe.y*Math.PI*.2;M.rotation.y=ae,M.rotation.x=ge}};window.addEventListener("mousemove",jt),wt.uniforms.time.value+=.04,m(),Ve(()=>t.bodyPosition,qt=>{M.position.set(qt.x,qt.y,qt.z)}),Ve(()=>t.cameraPosition,qt=>{S.position.set(t.bodyPosition.x,1,qt),S.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{S.aspect=window.innerWidth/window.innerHeight,S.updateProjectionMatrix(),E.setSize(window.innerWidth,window.innerHeight)})}});let i=Yt(!1),o=Yt(!1),s=Yt(!1),r=Yt(!1);function a(){o.value=!0}function c(){i.value=!0}function l(){s.value=!0}function d(){r.value=!0}function u(){o.value=!1,i.value=!1,s.value=!1,r.value=!1}for(let h=0;h<wb;h++){const f=document.createElement("div");f.classList.add("confetti"),f.style.left=`${Math.random()*100}vw`,f.style.animationDuration=`${Math.random()*3+4}s`,f.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(f)}for(let h=0;h<Mb;h++){const f=document.createElement("div");f.classList.add("light"),document.body.appendChild(f)}return(h,f)=>(Gn(),Yn(pn,null,[Ut("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",null,[Be(Fu,{class:"bear-background",color:"lightgreen"})]),Ut("div",yb,[Ut("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:u},"▲",32),Ut("div",xb,[Ut("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:u},"◀",32),Ut("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:u},"▶",32)]),Ut("button",{class:"pixel-btn down border-gold",onMousedown:d,onMouseup:u},"▼",32)])],64))}}),bb=$n(Sb,[["__scopeId","data-v-a61659ca"]]),Eb={class:"pixel-controls"},Tb={class:"side-buttons"},Ab=15,Pb=5,Rb=An({__name:"Snowman",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);zn(()=>{if(e.value){let h=function(){R.visible=!1,et.update(I,M),R.visible=!0,requestAnimationFrame(h)},f=function(){const Ct=document.createElement("canvas"),Qt=Ct.getContext("2d");Ct.width=512,Ct.height=512;const kt=Ct.width/10;for(let At=0;At<10;At++)Qt.fillStyle=At%2===0?"#FF0000":"#FFFFFF",Qt.fillRect(At*kt,0,kt,Ct.height);const de=new U1(Ct);return de.wrapS=Qe,de.wrapT=Qe,de.repeat.set(1,0),de},v=function(){const Ct=new Wt,Qt=new Lt({color:16777215}),kt=new Lt({color:0}),de=new Lt({color:16753920}),At=new Lt({color:16711680}),Ee=new Lt({color:0}),Le=new _(new at(.6,32,32),Qt);Le.position.set(0,.6,0),Ct.add(Le);const xe=new _(new at(.4,32,32),Qt);xe.position.set(0,1.2,0),Ct.add(xe);const Oe=new _(new at(.3,32,32),Qt);Oe.position.set(0,1.7,0),Ct.add(Oe);const _e=new _(new at(.05,16,16),kt);_e.position.set(-.1,1.75,.25),Ct.add(_e);const Fe=new _(new at(.05,16,16),kt);Fe.position.set(.1,1.75,.25),Ct.add(Fe);const qe=new si(.05,.2,32),De=new _(qe,de);De.position.set(0,1.7,.35),De.rotation.x=Math.PI/2,Ct.add(De);for(let hn=0;hn<3;hn++){const gn=new _(new at(.05,16,16),kt);gn.position.set(0,1-hn*.3,.4),Ct.add(gn)}const We=new Ln(.3,.08,16,100),tn=new _(We,At);tn.position.set(0,1.45,0),tn.rotation.x=Math.PI/2,Ct.add(tn);const $e=new Mn(.1,.4,.05),un=new _($e,At);un.position.set(.25,1.3,0),Ct.add(un);const cn=new te(.3,.3,.05,32),Ze=new _(cn,Ee);Ze.position.set(0,1.9,0),Ct.add(Ze);const an=new te(.2,.2,.3,32),en=new _(an,Ee);return en.position.set(0,2.05,0),Ct.add(en),Ct},x=function(){const Ct=new Wt;new Lt({color:16777215});const Qt=new Lt({color:0}),kt=new Lt({color:16753920}),de=new Lt({color:16711680}),At=new Lt({color:0}),Ee=new _(new at(.6,32,32),W);Ee.position.set(0,.6,0),Ct.add(Ee);const Le=new _(new at(.4,32,32),W);Le.position.set(0,1.2,0),Ct.add(Le);const xe=new _(new at(.3,32,32),W);xe.position.set(0,1.7,0),Ct.add(xe);const Oe=new _(new at(.05,16,16),Qt);Oe.position.set(-.1,1.75,.25),Ct.add(Oe);const _e=new _(new at(.05,16,16),Qt);_e.position.set(.1,1.75,.25),Ct.add(_e);const Fe=new si(.05,.2,32),qe=new _(Fe,kt);qe.position.set(0,1.7,.35),qe.rotation.x=Math.PI/2,Ct.add(qe);for(let en=0;en<3;en++){const hn=new _(new at(.05,16,16),Qt);hn.position.set(0,1-en*.3,.4),Ct.add(hn)}const De=new Ln(.3,.08,16,100),We=new _(De,de);We.position.set(0,1.45,0),We.rotation.x=Math.PI/2,Ct.add(We);const tn=new Mn(.1,.4,.05),$e=new _(tn,de);$e.position.set(.25,1.3,0),Ct.add($e);const un=new te(.3,.3,.05,32),cn=new _(un,At);cn.position.set(0,1.9,0),Ct.add(cn);const Ze=new te(.2,.2,.3,32),an=new _(Ze,At);return an.position.set(0,2.05,0),Ct.add(an),Ct},m=function(){const Ct=new Wt;new Lt({color:16777215});const Qt=new Lt({color:16770244}),kt=new Lt({color:16776960}),de=new Lt({color:16316671}),At=new at(.2,32,32),Ee=new _(At,Qt);Ee.position.set(0,1.5,0),Ct.add(Ee);const Le=new te(.2,.35,.6,32),xe=new _(Le,Qt);xe.position.set(0,1,0),Ct.add(xe);const Oe=new mn;Oe.moveTo(0,0),Oe.bezierCurveTo(.5,.2,.8,.7,.5,1.5),Oe.bezierCurveTo(.3,1.3,0,.8,0,0);const _e=new vn(Oe,{depth:.05,bevelEnabled:!1}),Fe=new _(_e,de);Fe.position.set(-.2,1.2,-.05),Fe.rotation.y=Math.PI/12,Fe.rotation.z=Math.PI/4,Fe.scale.set(-.5,.5,.5),Ct.add(Fe);const qe=new _(_e,de);qe.position.set(-.1,1.1,-.05),qe.rotation.y=Math.PI/10,qe.rotation.z=Math.PI/3,qe.scale.set(-.5,.5,.5),Ct.add(qe);const De=new _(_e,de);De.position.set(0,1,-.05),De.rotation.y=Math.PI/8,De.rotation.z=Math.PI/2.5,De.scale.set(-.5,.5,.5),Ct.add(De);const We=new _(_e,de);We.position.set(.2,1.2,-.05),We.rotation.y=-Math.PI/12,We.rotation.z=-Math.PI/4,We.scale.set(.5,.5,.5),Ct.add(We);const tn=new _(_e,de);tn.position.set(.1,1.1,-.05),tn.rotation.y=-Math.PI/10,tn.rotation.z=-Math.PI/3,tn.scale.set(.5,.5,.5),Ct.add(tn);const $e=new _(_e,de);$e.position.set(0,1,-.05),$e.rotation.y=-Math.PI/8,$e.rotation.z=-Math.PI/2.5,$e.scale.set(.5,.5,.5),Ct.add($e);const un=new Ln(.15,.05,16,100),cn=new _(un,kt);cn.position.set(0,1.8,0),cn.rotation.x=Math.PI/2,Ct.add(cn);const Ze=new te(.05,.05,.3,32),an=new _(Ze,Qt);an.position.set(-.15,.55,0),an.rotation.z=Math.PI/1;const en=new _(Ze,Qt);return en.position.set(.15,.55,0),en.rotation.z=-Math.PI/1,Ct.add(an),Ct.add(en),Ct},p=function(){requestAnimationFrame(p);const Ct=1.5,Qt=.5;Pe+=.03,Se+=.005*Ue,Se>Qt&&(Ue=-1),Se<-Qt&&(Ue=1),le.position.x=Math.cos(Pe)*Ct,le.position.z=Math.sin(Pe)*Ct,le.position.y=Se+1,ye+=.03,Ne+=.005*Pt,Ne>Qt&&(Pt=-1),Ne<-Qt&&(Pt=1),A.position.x=Math.cos(ye)*Ct,A.position.z=Math.sin(ye)*Ct,A.position.y=Ne+1,le.lookAt(R.position),A.lookAt(R.position),I.render(M,B)},S=function(){requestAnimationFrame(S);const Ct=Jt.attributes.position.array;for(let Qt=1;Qt<Ct.length;Qt+=3)Ct[Qt]-=.02,Ct[Qt]<-10&&(Ct[Qt]=10);Jt.attributes.position.needsUpdate=!0,I.render(M,B)},E=function(){requestAnimationFrame(E),ut.uniforms.time.value+=.05,pt.uniforms.time.value+=.05,i.value&&(R.rotation.y+=.05),o.value&&(R.rotation.y-=.07),s.value&&(R.rotation.x-=.05),r.value&&(R.rotation.x+=.05),I.render(M,B)};const M=new On,B=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),I=new Fn({antialias:!0,alpha:!0});I.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(I.domElement);const R=new Wt,G=new ci(16777215,2);M.add(G);const tt=new ai(16777215,4);tt.position.set(5,5,5),M.add(tt);const w=new ri(16777215,5,50);w.position.set(0,2,4),M.add(w);const U=new jn().load("/3d-bear-arts/assets/cashwings.jpg"),$=new Pr(256,{format:qn,generateMipmaps:!0,minFilter:wi}),et=new Ar(1,1e3,$);new Nt({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:$.texture,envMapIntensity:1.5}),M.add(et),M.environment=$.texture,h();const lt=new Fs,q=lt.load(["/3d-bear-arts/assets/christmas_garden.jpg","/3d-bear-arts/assets/christmas_ground.jpg","/3d-bear-arts/assets/christmas_front.jpg","/3d-bear-arts/assets/christmas_house.jpg","/3d-bear-arts/assets/christmas_tree.jpg","/3d-bear-arts/assets/christmas_sky.jpg"]);lt.load(["/3d-bear-arts/assets/cash2.jpg","/3d-bear-arts/assets/cash8.jpg","/3d-bear-arts/assets/cash1.jpg","/3d-bear-arts/assets/cash11.jpg","/3d-bear-arts/assets/cash4.jpg","/3d-bear-arts/assets/cash3.jpg"]),M.environment=q;const it=lt.load(["/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg"]);M.environment=it;const W=new Nt({color:"white",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:q,reflectivity:1});new Nt({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:it,reflectivity:1});const mt=new Nt({color:"sliver",map:U,metalness:.3,roughness:.5,transparent:!0,opacity:1}),wt=new Nt({color:"white",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.3,envMap:q,reflectivity:0}),Mt=new Nt({color:"white",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.7,envMap:q,reflectivity:0}),Ft=new on({uniforms:{time:{value:0},color1:{value:new we(16766720)},color2:{value:new we(16007990)}},vertexShader:`
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
          `}),Ht=`
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
      `,pt=new on({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:Ht,fragmentShader:rt,transparent:!1,depthWrite:!0}),Tt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,O=`
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
      `,ut=new on({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:Tt,fragmentShader:O,transparent:!1,depthWrite:!0}),st=new at(1,32,32,0,Math.PI),dt=new _(st,wt),yt=new _(st,W);dt.scale.set(.85,.85,.8),yt.scale.set(.85,.85,.8),dt.position.y=-.2,yt.position.y=-.2,dt.rotation.y=Math.PI/2,yt.rotation.y=Math.PI*1.5;const ot=new Ae(1,32),g=new _(ot,W);g.scale.set(.85,.85,.8),g.position.set(0,-.2,0),g.rotation.y=Math.PI/2;const P=new Wt;P.add(dt),P.add(yt),P.add(g),R.add(P);const L=new at(.6,32,32,0,Math.PI),F=new _(L,W);F.scale.set(1,.95,.95),F.position.set(0,1,0),F.rotation.y=Math.PI*1.5;const N=new _(L,Mt);N.scale.set(1,.95,.95),N.position.set(0,1,0),N.rotation.y=Math.PI/2;const K=new Ae(.6,32),Z=new _(K,W);Z.position.set(0,1,0),Z.rotation.y=Math.PI/2,Z.scale.set(1,.95,.95);const b=new Wt;b.add(F),b.add(N),b.add(Z),R.add(b);const y=new at(.25,32,32),C=new _(y,W);C.position.set(-.45,1.35,-.1),R.add(C);const Y=new _(y,Mt);Y.position.set(.45,1.35,-.1),R.add(Y);const V=new at(.25,32,32,Math.PI/2,Math.PI),k=new _(V,W);k.scale.set(1.1,.6,.8),k.position.set(0,.84,.5),k.rotation.y=Math.PI;const ft=new at(.25,32,32,Math.PI/2,Math.PI),ct=new _(ft,Mt);ct.scale.set(1.1,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=0;const vt=new Ae(.25,32),bt=new _(vt,mt);bt.scale.set(.8,.6,.8),bt.position.set(0,.84,.5),bt.rotation.y=Math.PI/2;const ht=new Wt;ht.add(k),ht.add(ct),ht.add(bt),R.add(ht);const _t=new mn;_t.moveTo(0,0),_t.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),_t.bezierCurveTo(-.6,.3,0,.6,0,1),_t.bezierCurveTo(0,.6,.6,.3,.6,0),_t.bezierCurveTo(.6,-.3,0,-.3,0,0);const Dt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Bt=new vn(_t,Dt),Rt=new _(Bt,W);Rt.scale.set(.23,.23,.23),Rt.position.set(.25,1.2,0),Rt.rotation.y=Math.PI,Rt.rotation.x=Math.PI;const $t=new at(.35,32,32),Gt=new _($t,W);Gt.scale.set(.75,1.25,.65),Gt.position.set(-.7,-.15,.2),R.add(Gt);const Zt=new _($t,Mt);Zt.scale.set(.75,1.25,.65),Zt.position.set(.7,-.15,.2),R.add(Zt);const H=new te(.2,.22,.6,32),xt=new _(H,W);xt.position.set(-.4,-1.05,0),R.add(xt);const nt=new _(H,Mt);nt.position.set(.4,-1.05,0),R.add(nt);const Q=new at(.3,32,32),St=new _(Q,W);St.scale.set(1,.72,1.5),St.position.set(-.4,-1.45,.17),R.add(St);const Et=new _(Q,Mt);Et.scale.set(1,.72,1.5),Et.position.set(.4,-1.45,.17),R.add(Et);const Xt=new at(.44,32,32),se=new _(Xt,W);se.position.set(-.15,-.45,-.4),R.add(se);const re=new _(Xt,Mt);re.position.set(.15,-.45,-.4),R.add(re);const ue=new at(.18,32,32),ce=new _(ue,W);ce.position.set(0,-.35,-.8),R.add(ce),ce.renderOrder=1,new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ct){const Qt=new He("X",{font:Ct,size:.18,depth:.05}),kt=new _(Qt,W);kt.position.set(-.3,.99,.53),kt.rotation.x=he.degToRad(-5),kt.rotation.y=he.degToRad(-15),R.add(kt);const de=new He("+",{font:Ct,size:.25,depth:.1}),At=new _(de,W);At.position.set(.13,.99,.53),At.rotation.y=he.degToRad(12),At.rotation.x=he.degToRad(-5),R.add(At)});const Me=f(),jt=new Lt({map:Me,metalness:.1,roughness:.8}),qt=new Ln(.5,.1,24,100,Math.PI),oe=new _(qt,jt);oe.position.set(0,.54,0),oe.rotation.x=Math.PI/2,oe.rotation.y=Math.PI/1,oe.rotation.z=Math.PI/-2,R.add(oe);const ae=v();ae.scale.set(.38,.38,.38),ae.position.set(.3,-.45,0),R.add(ae);const ge=x();ge.scale.set(.2,.2,.2),ge.position.set(.5,-.3,.3),R.add(ge);const fe=x();fe.scale.set(.12,.12,.12),fe.position.set(.2,-.3,.5),R.add(fe);let Pe=0,ye=Math.PI,Se=0,Ne=0,Ue=1,Pt=-1;const le=m();le.scale.set(.4,.4,.4),M.add(le);const A=m();A.scale.set(.4,.4,.4),M.add(A),p();const j=new at(.6,32,32,0,Math.PI*2,0,Math.PI/2),D=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),X=new _(j,D);X.position.set(0,-.2,0),X.rotation.x=Math.PI,X.scale.set(1.25,1.25,1.25),P.add(X);const z=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:Ie,transparent:!1,opacity:.8}),gt=new _(ot,z);gt.scale.set(.7,.7,.7),gt.position.set(0,-.3,0),gt.rotation.x=Math.PI/2,gt.renderOrder=1,P.add(gt),R.add(P);const It=new on({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
    `}),Ot=new _(ot,It);Ot.position.set(0,-.2,0),Ot.scale.set(.7,.7,.7),Ot.rotation.x=-Math.PI/2,Ot.renderOrder=2,P.add(Ot);const zt=1e3,Jt=new Tn,Kt=[];for(let Ct=0;Ct<zt;Ct++){const Qt=(Math.random()-.5)*20,kt=Math.random()*20,de=(Math.random()-.5)*20;Kt.push(Qt,kt,de)}Jt.setAttribute("position",new rn(Kt,3));const Vt=new _r({color:16777215,size:.1,transparent:!0,opacity:.8}),ie=new sr(Jt,Vt);R.add(ie),S(),R.scale.set(1.2,1.2,1.2),M.add(R),R.scale.set(1.4,1.4,1.4),M.add(R),R.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),B.position.set(t.bodyPosition.x,1.4,t.cameraPosition),B.lookAt(t.bodyPosition.x,0,0),B.position.z=4;let ve=Yt(!1);const pe=Ct=>{if(ve.value){const Qt={x:Ct.clientX/window.innerWidth*2-1,y:-(Ct.clientY/window.innerHeight)*2+1},kt=Qt.x*Math.PI*.2,de=Qt.y*Math.PI*.2;R.rotation.y=kt,R.rotation.x=de}};window.addEventListener("mousemove",pe),Ft.uniforms.time.value+=.04,E(),Ve(()=>t.bodyPosition,Ct=>{R.position.set(Ct.x,Ct.y,Ct.z)}),Ve(()=>t.cameraPosition,Ct=>{B.position.set(t.bodyPosition.x,1,Ct),B.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{B.aspect=window.innerWidth/window.innerHeight,B.updateProjectionMatrix(),I.setSize(window.innerWidth,window.innerHeight)})}});let i=Yt(!1),o=Yt(!1),s=Yt(!1),r=Yt(!1);function a(){o.value=!0}function c(){i.value=!0}function l(){s.value=!0}function d(){r.value=!0}function u(){o.value=!1,i.value=!1,s.value=!1,r.value=!1}for(let h=0;h<Ab;h++){const f=document.createElement("div");f.classList.add("confetti"),f.style.left=`${Math.random()*100}vw`,f.style.animationDuration=`${Math.random()*3+4}s`,f.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(f)}for(let h=0;h<Pb;h++){const f=document.createElement("div");f.classList.add("light"),document.body.appendChild(f)}return(h,f)=>(Gn(),Yn(pn,null,[Ut("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",Eb,[Ut("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:u},"▲",32),Ut("div",Tb,[Ut("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:u},"◀",32),Ut("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:u},"▶",32)]),Ut("button",{class:"pixel-btn down border-gold",onMousedown:d,onMouseup:u},"▼",32)])],64))}}),Cb=$n(Rb,[["__scopeId","data-v-4439572d"]]),Ib={class:"pixel-controls"},Lb={class:"side-buttons"},Db=15,Ub=5,Nb=An({__name:"Duck",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);zn(()=>{if(e.value){let h=function(){S.visible=!1,G.update(p,x),S.visible=!0,requestAnimationFrame(h)},f=function(){const jt=new Wt,qt=new Lt({color:16777215}),oe=new Lt({color:16753920}),ae=new Lt({color:0}),ge=new Lt({color:16711680}),fe=new Lt({color:9127187}),Pe=new at(.5,32,32),ye=new _(Pe,qt);ye.position.set(0,1.5,0),jt.add(ye);const Se=new mn;Se.moveTo(0,0),Se.quadraticCurveTo(.25,.15,.5,0),Se.lineTo(.5,-.15),Se.quadraticCurveTo(.25,-.3,0,-.15),Se.closePath();const Ne=new vn(Se,{depth:.2,bevelEnabled:!1}),Ue=new _(Ne,oe);Ue.rotation.x=Math.PI/2,Ue.position.set(0,1.3,.5),jt.add(Ue);const Pt=new at(.8,32,32),le=new _(Pt,qt);le.position.set(0,.6,0),jt.add(le);const A=new te(.1,.1,.5,32),j=new _(A,oe);j.position.set(-.3,-.4,0),jt.add(j);const D=new _(A,oe);D.position.set(.3,-.4,0),jt.add(D);const X=new mn;X.moveTo(0,0),X.lineTo(.3,.1),X.lineTo(.15,-.1),X.lineTo(-.15,-.1),X.lineTo(-.3,.1),X.closePath();const z=new vn(X,{depth:.1,bevelEnabled:!1}),gt=new _(z,oe);gt.position.set(-.3,-.7,.1),gt.rotation.x=Math.PI/2,jt.add(gt);const It=new _(z,oe);It.position.set(.3,-.7,.1),It.rotation.x=Math.PI/2,jt.add(It);const Ot=new te(.4,.4,.1,32),zt=new _(Ot,ae);zt.position.set(0,2.1,0),jt.add(zt);const Jt=new te(.3,.3,.6,32),Kt=new _(Jt,ae);Kt.position.set(0,2.4,0),jt.add(Kt);const Vt=new Ln(.2,.05,16,100),ie=new _(Vt,ge);ie.position.set(0,1,.5),jt.add(ie);const ve=new te(.05,.05,2,32),pe=new _(ve,fe);return pe.position.set(.5,0,0),pe.rotation.z=Math.PI/8,jt.add(pe),jt},v=function(){requestAnimationFrame(v),Ft.uniforms.time.value+=.05,mt.uniforms.time.value+=.05,i.value&&(S.rotation.y+=.05),o.value&&(S.rotation.y-=.07),s.value&&(S.rotation.x-=.05),r.value&&(S.rotation.x+=.05),p.render(x,m)};const x=new On,m=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3),p=new Fn({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const S=new Wt,E=new ci(16777215,2);x.add(E);const M=new ai(16777215,4);M.position.set(5,5,5),x.add(M);const B=new ri(16777215,5,50);B.position.set(0,2,4),x.add(B);const I=new jn,R=new Pr(256,{format:qn,generateMipmaps:!0,minFilter:wi}),G=new Ar(1,1e3,R);new Nt({color:12632256,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:R.texture,envMapIntensity:1.5}),x.add(G),x.environment=R.texture,h();const w=new Fs().load(["/3d-bear-arts/assets/richduck.jpg","/3d-bear-arts/assets/richduck.jpg","/3d-bear-arts/assets/richduck.jpg","/3d-bear-arts/assets/richduck.jpg","/3d-bear-arts/assets/richduck.jpg","/3d-bear-arts/assets/richduck.jpg"]);x.environment=w;const T=new Nt({color:"white",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:w,reflectivity:1}),U=new Nt({color:"white",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,envMap:w,reflectivity:0}),$=new Nt({color:"white",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.35,envMap:w,reflectivity:0}),et=I.load("/3d-bear-arts/assets/popbear1.jpg"),lt=new Nt({color:"hotpink",map:et,metalness:.3,roughness:.5,transparent:!0,opacity:1}),q=new on({uniforms:{time:{value:0},color1:{value:new we(16766720)},color2:{value:new we(16007990)}},vertexShader:`
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
          `}),it=`
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
      `,mt=new on({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:it,fragmentShader:W,transparent:!1,depthWrite:!0}),wt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,Mt=`
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
      `,Ft=new on({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:wt,fragmentShader:Mt,transparent:!1,depthWrite:!0}),Ht=new at(1,32,32,0,Math.PI),rt=new _(Ht,$),pt=new _(Ht,T);rt.scale.set(.85,.85,.8),pt.scale.set(.85,.85,.8),rt.position.y=-.2,pt.position.y=-.2,rt.rotation.y=Math.PI/2,pt.rotation.y=Math.PI*1.5;const Tt=new Ae(1,32),O=new _(Tt,lt);O.scale.set(.85,.85,.8),O.position.set(0,-.2,0),O.rotation.y=Math.PI/2;const ut=new Wt;ut.add(rt),ut.add(pt),ut.add(O),S.add(ut);const st=new at(.6,32,32,0,Math.PI),dt=new _(st,T);dt.scale.set(1,.95,.95),dt.position.set(0,1,0),dt.rotation.y=Math.PI*1.5;const yt=new _(st,$);yt.scale.set(1,.95,.95),yt.position.set(0,1,0),yt.rotation.y=Math.PI/2;const ot=new Ae(.6,32),g=new _(ot,lt);g.position.set(0,1,0),g.rotation.y=Math.PI/2,g.scale.set(1,.95,.95);const P=new Wt;P.add(dt),P.add(yt),P.add(g),S.add(P);const L=new at(.25,32,32),F=new _(L,T);F.position.set(-.45,1.35,-.1),S.add(F);const N=new _(L,$);N.position.set(.45,1.35,-.1),S.add(N);const K=new at(.25,32,32,Math.PI/2,Math.PI),Z=new _(K,T);Z.scale.set(1.1,.6,.8),Z.position.set(0,.84,.5),Z.rotation.y=Math.PI;const b=new at(.25,32,32,Math.PI/2,Math.PI),y=new _(b,U);y.scale.set(1.1,.6,.8),y.position.set(0,.84,.5),y.rotation.y=0;const C=new Ae(.25,32),Y=new _(C,lt);Y.scale.set(.8,.6,.8),Y.position.set(0,.84,.5),Y.rotation.y=Math.PI/2;const V=new Wt;V.add(Z),V.add(y),V.add(Y),S.add(V);const k=new mn;k.moveTo(0,0),k.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),k.bezierCurveTo(-.6,.3,0,.6,0,1),k.bezierCurveTo(0,.6,.6,.3,.6,0),k.bezierCurveTo(.6,-.3,0,-.3,0,0);const ft={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ct=new vn(k,ft),vt=new _(ct,mt);vt.scale.set(.38,.38,.38),vt.position.set(.35,0,0),vt.rotation.y=Math.PI,vt.rotation.x=Math.PI,S.add(vt);const bt=new _(ct,mt);bt.scale.set(.35,.35,.35),bt.position.set(.3,0,0),bt.rotation.y=Math.PI,bt.rotation.x=Math.PI,S.add(bt);const ht=new _(ct,T);ht.scale.set(.22,.22,.22),ht.position.set(.27,.4,0),ht.rotation.y=Math.PI,ht.rotation.x=Math.PI,S.add(ht);const _t=new _(ct,T);_t.scale.set(.25,.25,.25),_t.position.set(.23,-.5,.3),_t.rotation.y=Math.PI,_t.rotation.x=Math.PI,S.add(_t);const Dt=new _(ct,T);Dt.scale.set(.3,.3,.3),Dt.position.set(.23,.2,-.4),Dt.rotation.y=Math.PI,Dt.rotation.x=Math.PI,S.add(Dt);const Bt=new at(.35,32,32),Rt=new _(Bt,T);Rt.scale.set(.75,1.25,.65),Rt.position.set(-.7,-.15,.2),S.add(Rt);const $t=new _(Bt,U);$t.scale.set(.75,1.25,.65),$t.position.set(.7,-.15,.2),S.add($t);const Gt=new te(.2,.22,.6,32),Zt=new _(Gt,T);Zt.position.set(-.4,-1.05,0),S.add(Zt);const H=new _(Gt,U);H.position.set(.4,-1.05,0),S.add(H);const xt=new at(.3,32,32),nt=new _(xt,T);nt.scale.set(1,.72,1.5),nt.position.set(-.4,-1.45,.17),S.add(nt);const Q=new _(xt,U);Q.scale.set(1,.72,1.5),Q.position.set(.4,-1.45,.17),S.add(Q);const St=new at(.44,32,32),Et=new _(St,T);Et.position.set(-.15,-.45,-.4),S.add(Et);const Xt=new _(St,U);Xt.position.set(.15,-.45,-.4),S.add(Xt);const se=new at(.18,32,32),re=new _(se,T);re.position.set(0,-.35,-.8),S.add(re),new li().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(jt){const qt=new He("X",{font:jt,size:.18,depth:.05}),oe=new _(qt,mt);oe.position.set(-.3,.99,.53),oe.rotation.x=he.degToRad(-5),oe.rotation.y=he.degToRad(-15),S.add(oe);const ae=new He("+",{font:jt,size:.25,depth:.1}),ge=new _(ae,mt);ge.position.set(.14,.99,.53),ge.rotation.y=he.degToRad(12),ge.rotation.x=he.degToRad(-5),S.add(ge)}),re.renderOrder=1;const ce=f();ce.scale.set(.2,.2,.2),ce.position.set(1,.6,.3),S.add(ce),S.scale.set(1.4,1.4,1.4),x.add(S),S.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),m.position.set(t.bodyPosition.x,1.4,t.cameraPosition),m.lookAt(t.bodyPosition.x,0,0),m.position.z=4;let me=Yt(!1);const Me=jt=>{if(me.value){const qt={x:jt.clientX/window.innerWidth*2-1,y:-(jt.clientY/window.innerHeight)*2+1},oe=qt.x*Math.PI*.2,ae=qt.y*Math.PI*.2;S.rotation.y=oe,S.rotation.x=ae}};window.addEventListener("mousemove",Me),q.uniforms.time.value+=.04,v(),Ve(()=>t.bodyPosition,jt=>{S.position.set(jt.x,jt.y,jt.z)}),Ve(()=>t.cameraPosition,jt=>{m.position.set(t.bodyPosition.x,1,jt),m.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});let i=Yt(!1),o=Yt(!1),s=Yt(!1),r=Yt(!1);function a(){o.value=!0}function c(){i.value=!0}function l(){s.value=!0}function d(){r.value=!0}function u(){o.value=!1,i.value=!1,s.value=!1,r.value=!1}for(let h=0;h<Db;h++){const f=document.createElement("div");f.classList.add("confetti"),f.style.left=`${Math.random()*100}vw`,f.style.animationDuration=`${Math.random()*3+4}s`,f.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(f)}for(let h=0;h<Ub;h++){const f=document.createElement("div");f.classList.add("light"),document.body.appendChild(f)}return(h,f)=>(Gn(),Yn(pn,null,[Ut("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ut("div",null,[Be(Fu,{class:"bear-background",color:"#FF69B4"})]),Ut("div",Ib,[Ut("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:u},"▲",32),Ut("div",Lb,[Ut("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:u},"◀",32),Ut("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:u},"▶",32)]),Ut("button",{class:"pixel-btn down border-gold",onMousedown:d,onMouseup:u},"▼",32)])],64))}}),Fb=$n(Nb,[["__scopeId","data-v-a990ca0f"]]),Ob=[{path:"/3d-bear-arts/leather",name:"Leather",component:bS},{path:"/3d-bear-arts/pop-art",name:"Pop",component:TS},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:CS},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:US},{path:"/3d-bear-arts/water",name:"Water",component:WS},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:YS},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:JS},{path:"/3d-bear-arts/coffee",name:"Coffee",component:ub},{path:"/3d-bear-arts/bears",name:"Bears",component:_b},{path:"/3d-bear-arts/money",name:"Money",component:bb},{path:"/3d-bear-arts/snowman",name:"Snowman",component:Cb},{path:"/3d-bear-arts/santa",name:"Santa",component:ob},{path:"/3d-bear-arts/",name:"Duck",component:Fb}],Bb=_v({history:Yg(),routes:Ob}),Hp=hg(vg);Hp.use(Bb);Hp.mount("#app");
