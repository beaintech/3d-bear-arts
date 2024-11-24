(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Xe={},fo=[],Ii=()=>{},Vp=()=>!1,La=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Jl=n=>n.startsWith("onUpdate:"),wn=Object.assign,Ql=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Wp=Object.prototype.hasOwnProperty,Le=(n,t)=>Wp.call(n,t),Me=Array.isArray,Yo=n=>Da(n)==="[object Map]",Xp=n=>Da(n)==="[object Set]",_e=n=>typeof n=="function",xn=n=>typeof n=="string",Io=n=>typeof n=="symbol",cn=n=>n!==null&&typeof n=="object",Od=n=>(cn(n)||_e(n))&&_e(n.then)&&_e(n.catch),qp=Object.prototype.toString,Da=n=>qp.call(n),jp=n=>Da(n).slice(8,-1),Yp=n=>Da(n)==="[object Object]",tu=n=>xn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$o=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},$p=/-(\w)/g,ci=Ua(n=>n.replace($p,(t,e)=>e?e.toUpperCase():"")),Kp=/\B([A-Z])/g,ks=Ua(n=>n.replace(Kp,"-$1").toLowerCase()),Na=Ua(n=>n.charAt(0).toUpperCase()+n.slice(1)),tc=Ua(n=>n?`on${Na(n)}`:""),vs=(n,t)=>!Object.is(n,t),ec=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Bd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Zp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ou;const zd=()=>Ou||(Ou=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eu(n){if(Me(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=xn(i)?e0(i):eu(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(xn(n)||cn(n))return n}const Jp=/;(?![^(]*\))/g,Qp=/:([^]+)/,t0=/\/\*[^]*?\*\//g;function e0(n){const t={};return n.replace(t0,"").split(Jp).forEach(e=>{if(e){const i=e.split(Qp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function kn(n){let t="";if(xn(n))t=n;else if(Me(n))for(let e=0;e<n.length;e++){const i=kn(n[e]);i&&(t+=i+" ")}else if(cn(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const n0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i0=Zl(n0);function Gd(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ei;class s0{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ei,!t&&ei&&(this.index=(ei.scopes||(ei.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=ei;try{return ei=this,t()}finally{ei=e}}}on(){ei=this}off(){ei=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function o0(){return ei}let $e;const nc=new WeakSet;class Hd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ei&&ei.active&&ei.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nc.has(this)&&(nc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bu(this),Wd(this);const t=$e,e=Mi;$e=this,Mi=!0;try{return this.fn()}finally{Xd(this),$e=t,Mi=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)su(t);this.deps=this.depsTail=void 0,Bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yc(this)&&this.run()}get dirty(){return Yc(this)}}let kd=0,lo;function Vd(n){n.flags|=8,n.next=lo,lo=n}function nu(){kd++}function iu(){if(--kd>0)return;let n;for(;lo;){let t=lo,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=lo,lo=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Wd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),su(i),r0(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Yc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(qd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function qd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ar))return;n.globalVersion=ar;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Yc(n)){n.flags&=-3;return}const e=$e,i=Mi;$e=n,Mi=!0;try{Wd(n);const s=n.fn(n._value);(t.version===0||vs(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{$e=e,Mi=i,Xd(n),n.flags&=-3}}function su(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let o=e.computed.deps;o;o=o.nextDep)su(o,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function r0(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Mi=!0;const jd=[];function xs(){jd.push(Mi),Mi=!1}function ys(){const n=jd.pop();Mi=n===void 0?!0:n}function Bu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=$e;$e=void 0;try{t()}finally{$e=e}}}let ar=0;class a0{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ou{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!$e||!Mi||$e===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==$e)e=this.activeLink=new a0($e,this),$e.deps?(e.prevDep=$e.depsTail,$e.depsTail.nextDep=e,$e.depsTail=e):$e.deps=$e.depsTail=e,Yd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=$e.depsTail,e.nextDep=void 0,$e.depsTail.nextDep=e,$e.depsTail=e,$e.deps===e&&($e.deps=i)}return e}trigger(t){this.version++,ar++,this.notify(t)}notify(t){nu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{iu()}}}function Yd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Yd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const $c=new WeakMap,Fs=Symbol(""),Kc=Symbol(""),cr=Symbol("");function In(n,t,e){if(Mi&&$e){let i=$c.get(n);i||$c.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new ou),s.target=n,s.map=i,s.key=e),s.track()}}function Ji(n,t,e,i,s,o){const r=$c.get(n);if(!r){ar++;return}const a=c=>{c&&c.trigger()};if(nu(),t==="clear")r.forEach(a);else{const c=Me(n),l=c&&tu(e);if(c&&e==="length"){const h=Number(i);r.forEach((u,d)=>{(d==="length"||d===cr||!Io(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(r.get(e)),l&&a(r.get(cr)),t){case"add":c?l&&a(r.get("length")):(a(r.get(Fs)),Yo(n)&&a(r.get(Kc)));break;case"delete":c||(a(r.get(Fs)),Yo(n)&&a(r.get(Kc)));break;case"set":Yo(n)&&a(r.get(Fs));break}}iu()}function Xs(n){const t=Ue(n);return t===n?t:(In(t,"iterate",cr),wi(n)?t:t.map(On))}function ru(n){return In(n=Ue(n),"iterate",cr),n}const c0={__proto__:null,[Symbol.iterator](){return ic(this,Symbol.iterator,On)},concat(...n){return Xs(this).concat(...n.map(t=>Me(t)?Xs(t):t))},entries(){return ic(this,"entries",n=>(n[1]=On(n[1]),n))},every(n,t){return zi(this,"every",n,t,void 0,arguments)},filter(n,t){return zi(this,"filter",n,t,e=>e.map(On),arguments)},find(n,t){return zi(this,"find",n,t,On,arguments)},findIndex(n,t){return zi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return zi(this,"findLast",n,t,On,arguments)},findLastIndex(n,t){return zi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return zi(this,"forEach",n,t,void 0,arguments)},includes(...n){return sc(this,"includes",n)},indexOf(...n){return sc(this,"indexOf",n)},join(n){return Xs(this).join(n)},lastIndexOf(...n){return sc(this,"lastIndexOf",n)},map(n,t){return zi(this,"map",n,t,void 0,arguments)},pop(){return Fo(this,"pop")},push(...n){return Fo(this,"push",n)},reduce(n,...t){return zu(this,"reduce",n,t)},reduceRight(n,...t){return zu(this,"reduceRight",n,t)},shift(){return Fo(this,"shift")},some(n,t){return zi(this,"some",n,t,void 0,arguments)},splice(...n){return Fo(this,"splice",n)},toReversed(){return Xs(this).toReversed()},toSorted(n){return Xs(this).toSorted(n)},toSpliced(...n){return Xs(this).toSpliced(...n)},unshift(...n){return Fo(this,"unshift",n)},values(){return ic(this,"values",On)}};function ic(n,t,e){const i=ru(n),s=i[t]();return i!==n&&!wi(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=e(o.value)),o}),s}const l0=Array.prototype;function zi(n,t,e,i,s,o){const r=ru(n),a=r!==n&&!wi(n),c=r[t];if(c!==l0[t]){const u=c.apply(n,o);return a?On(u):u}let l=e;r!==n&&(a?l=function(u,d){return e.call(this,On(u),d,n)}:e.length>2&&(l=function(u,d){return e.call(this,u,d,n)}));const h=c.call(r,l,i);return a&&s?s(h):h}function zu(n,t,e,i){const s=ru(n);let o=e;return s!==n&&(wi(n)?e.length>3&&(o=function(r,a,c){return e.call(this,r,a,c,n)}):o=function(r,a,c){return e.call(this,r,On(a),c,n)}),s[t](o,...i)}function sc(n,t,e){const i=Ue(n);In(i,"iterate",cr);const s=i[t](...e);return(s===-1||s===!1)&&uu(e[0])?(e[0]=Ue(e[0]),i[t](...e)):s}function Fo(n,t,e=[]){xs(),nu();const i=Ue(n)[t].apply(n,e);return iu(),ys(),i}const u0=Zl("__proto__,__v_isRef,__isVue"),$d=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Io));function h0(n){Io(n)||(n=String(n));const t=Ue(this);return In(t,"has",n),t.hasOwnProperty(n)}class Kd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return o;if(e==="__v_raw")return i===(s?o?b0:tf:o?Qd:Jd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=Me(t);if(!s){let c;if(r&&(c=c0[e]))return c;if(e==="hasOwnProperty")return h0}const a=Reflect.get(t,e,Pn(t)?t:i);return(Io(e)?$d.has(e):u0(e))||(s||In(t,"get",e),o)?a:Pn(a)?r&&tu(e)?a:a.value:cn(a)?s?nf(a):Oa(a):a}}class Zd extends Kd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let o=t[e];if(!this._isShallow){const c=Os(o);if(!wi(i)&&!Os(i)&&(o=Ue(o),i=Ue(i)),!Me(t)&&Pn(o)&&!Pn(i))return c?!1:(o.value=i,!0)}const r=Me(t)&&tu(e)?Number(e)<t.length:Le(t,e),a=Reflect.set(t,e,i,Pn(t)?t:s);return t===Ue(s)&&(r?vs(i,o)&&Ji(t,"set",e,i):Ji(t,"add",e,i)),a}deleteProperty(t,e){const i=Le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Ji(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Io(e)||!$d.has(e))&&In(t,"has",e),i}ownKeys(t){return In(t,"iterate",Me(t)?"length":Fs),Reflect.ownKeys(t)}}class d0 extends Kd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const f0=new Zd,p0=new d0,m0=new Zd(!0);const au=n=>n,Fa=n=>Reflect.getPrototypeOf(n);function Rr(n,t,e=!1,i=!1){n=n.__v_raw;const s=Ue(n),o=Ue(t);e||(vs(t,o)&&In(s,"get",t),In(s,"get",o));const{has:r}=Fa(s),a=i?au:e?hu:On;if(r.call(s,t))return a(n.get(t));if(r.call(s,o))return a(n.get(o));n!==s&&n.get(t)}function Cr(n,t=!1){const e=this.__v_raw,i=Ue(e),s=Ue(n);return t||(vs(n,s)&&In(i,"has",n),In(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function Ir(n,t=!1){return n=n.__v_raw,!t&&In(Ue(n),"iterate",Fs),Reflect.get(n,"size",n)}function Gu(n,t=!1){!t&&!wi(n)&&!Os(n)&&(n=Ue(n));const e=Ue(this);return Fa(e).has.call(e,n)||(e.add(n),Ji(e,"add",n,n)),this}function Hu(n,t,e=!1){!e&&!wi(t)&&!Os(t)&&(t=Ue(t));const i=Ue(this),{has:s,get:o}=Fa(i);let r=s.call(i,n);r||(n=Ue(n),r=s.call(i,n));const a=o.call(i,n);return i.set(n,t),r?vs(t,a)&&Ji(i,"set",n,t):Ji(i,"add",n,t),this}function ku(n){const t=Ue(this),{has:e,get:i}=Fa(t);let s=e.call(t,n);s||(n=Ue(n),s=e.call(t,n)),i&&i.call(t,n);const o=t.delete(n);return s&&Ji(t,"delete",n,void 0),o}function Vu(){const n=Ue(this),t=n.size!==0,e=n.clear();return t&&Ji(n,"clear",void 0,void 0),e}function Lr(n,t){return function(i,s){const o=this,r=o.__v_raw,a=Ue(r),c=t?au:n?hu:On;return!n&&In(a,"iterate",Fs),r.forEach((l,h)=>i.call(s,c(l),c(h),o))}}function Dr(n,t,e){return function(...i){const s=this.__v_raw,o=Ue(s),r=Yo(o),a=n==="entries"||n===Symbol.iterator&&r,c=n==="keys"&&r,l=s[n](...i),h=e?au:t?hu:On;return!t&&In(o,"iterate",c?Kc:Fs),{next(){const{value:u,done:d}=l.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function is(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function g0(){const n={get(o){return Rr(this,o)},get size(){return Ir(this)},has:Cr,add:Gu,set:Hu,delete:ku,clear:Vu,forEach:Lr(!1,!1)},t={get(o){return Rr(this,o,!1,!0)},get size(){return Ir(this)},has:Cr,add(o){return Gu.call(this,o,!0)},set(o,r){return Hu.call(this,o,r,!0)},delete:ku,clear:Vu,forEach:Lr(!1,!0)},e={get(o){return Rr(this,o,!0)},get size(){return Ir(this,!0)},has(o){return Cr.call(this,o,!0)},add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear"),forEach:Lr(!0,!1)},i={get(o){return Rr(this,o,!0,!0)},get size(){return Ir(this,!0)},has(o){return Cr.call(this,o,!0)},add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear"),forEach:Lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Dr(o,!1,!1),e[o]=Dr(o,!0,!1),t[o]=Dr(o,!1,!0),i[o]=Dr(o,!0,!0)}),[n,e,t,i]}const[v0,_0,x0,y0]=g0();function cu(n,t){const e=t?n?y0:x0:n?_0:v0;return(i,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Le(e,s)&&s in i?e:i,s,o)}const M0={get:cu(!1,!1)},w0={get:cu(!1,!0)},S0={get:cu(!0,!1)};const Jd=new WeakMap,Qd=new WeakMap,tf=new WeakMap,b0=new WeakMap;function E0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function T0(n){return n.__v_skip||!Object.isExtensible(n)?0:E0(jp(n))}function Oa(n){return Os(n)?n:lu(n,!1,f0,M0,Jd)}function ef(n){return lu(n,!1,m0,w0,Qd)}function nf(n){return lu(n,!0,p0,S0,tf)}function lu(n,t,e,i,s){if(!cn(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=s.get(n);if(o)return o;const r=T0(n);if(r===0)return n;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function Ko(n){return Os(n)?Ko(n.__v_raw):!!(n&&n.__v_isReactive)}function Os(n){return!!(n&&n.__v_isReadonly)}function wi(n){return!!(n&&n.__v_isShallow)}function uu(n){return n?!!n.__v_raw:!1}function Ue(n){const t=n&&n.__v_raw;return t?Ue(t):n}function A0(n){return!Le(n,"__v_skip")&&Object.isExtensible(n)&&Bd(n,"__v_skip",!0),n}const On=n=>cn(n)?Oa(n):n,hu=n=>cn(n)?nf(n):n;function Pn(n){return n?n.__v_isRef===!0:!1}function jt(n){return sf(n,!1)}function po(n){return sf(n,!0)}function sf(n,t){return Pn(n)?n:new P0(n,t)}class P0{constructor(t,e){this.dep=new ou,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Ue(t),this._value=e?t:On(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||wi(t)||Os(t);t=i?t:Ue(t),vs(t,e)&&(this._rawValue=t,this._value=i?t:On(t),this.dep.trigger())}}function mo(n){return Pn(n)?n.value:n}const R0={get:(n,t,e)=>t==="__v_raw"?n:mo(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Pn(s)&&!Pn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function of(n){return Ko(n)?n:new Proxy(n,R0)}class C0{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new ou(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Vd(this),!0}get value(){const t=this.dep.track();return qd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function I0(n,t,e=!1){let i,s;return _e(n)?i=n:(i=n.get,s=n.set),new C0(i,s,e)}const Ur={},ya=new WeakMap;let Cs;function L0(n,t=!1,e=Cs){if(e){let i=ya.get(e);i||ya.set(e,i=[]),i.push(n)}}function D0(n,t,e=Xe){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:a,call:c}=e,l=b=>s?b:wi(b)||s===!1||s===0?$i(b,1):$i(b);let h,u,d,p,v=!1,y=!1;if(Pn(n)?(u=()=>n.value,v=wi(n)):Ko(n)?(u=()=>l(n),v=!0):Me(n)?(y=!0,v=n.some(b=>Ko(b)||wi(b)),u=()=>n.map(b=>{if(Pn(b))return b.value;if(Ko(b))return l(b);if(_e(b))return c?c(b,2):b()})):_e(n)?t?u=c?()=>c(n,2):n:u=()=>{if(d){xs();try{d()}finally{ys()}}const b=Cs;Cs=h;try{return c?c(n,3,[p]):n(p)}finally{Cs=b}}:u=Ii,t&&s){const b=u,B=s===!0?1/0:s;u=()=>$i(b(),B)}const m=o0(),f=()=>{h.stop(),m&&Ql(m.effects,h)};if(o&&t){const b=t;t=(...B)=>{b(...B),f()}}let A=y?new Array(n.length).fill(Ur):Ur;const S=b=>{if(!(!(h.flags&1)||!h.dirty&&!b))if(t){const B=h.run();if(s||v||(y?B.some((I,R)=>vs(I,A[R])):vs(B,A))){d&&d();const I=Cs;Cs=h;try{const R=[B,A===Ur?void 0:y&&A[0]===Ur?[]:A,p];c?c(t,3,R):t(...R),A=B}finally{Cs=I}}}else h.run()};return a&&a(S),h=new Hd(u),h.scheduler=r?()=>r(S,!1):S,p=b=>L0(b,!1,h),d=h.onStop=()=>{const b=ya.get(h);if(b){if(c)c(b,4);else for(const B of b)B();ya.delete(h)}},t?i?S(!0):A=h.run():r?r(S.bind(null,!0),!0):h.run(),f.pause=h.pause.bind(h),f.resume=h.resume.bind(h),f.stop=f,f}function $i(n,t=1/0,e){if(t<=0||!cn(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,Pn(n))$i(n.value,t,e);else if(Me(n))for(let i=0;i<n.length;i++)$i(n[i],t,e);else if(Xp(n)||Yo(n))n.forEach(i=>{$i(i,t,e)});else if(Yp(n)){for(const i in n)$i(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&$i(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mr(n,t,e,i){try{return i?n(...i):n()}catch(s){Ba(s,t,e)}}function Di(n,t,e,i){if(_e(n)){const s=Mr(n,t,e,i);return s&&Od(s)&&s.catch(o=>{Ba(o,t,e)}),s}if(Me(n)){const s=[];for(let o=0;o<n.length;o++)s.push(Di(n[o],t,e,i));return s}}function Ba(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Xe;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,c,l)===!1)return}a=a.parent}if(o){xs(),Mr(o,null,10,[n,c,l]),ys();return}}U0(n,e,s,i,r)}function U0(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let lr=!1,Zc=!1;const Bn=[];let Ai=0;const go=[];let hs=null,ro=0;const rf=Promise.resolve();let du=null;function af(n){const t=du||rf;return n?t.then(this?n.bind(this):n):t}function N0(n){let t=lr?Ai+1:0,e=Bn.length;for(;t<e;){const i=t+e>>>1,s=Bn[i],o=ur(s);o<n||o===n&&s.flags&2?t=i+1:e=i}return t}function fu(n){if(!(n.flags&1)){const t=ur(n),e=Bn[Bn.length-1];!e||!(n.flags&2)&&t>=ur(e)?Bn.push(n):Bn.splice(N0(t),0,n),n.flags|=1,cf()}}function cf(){!lr&&!Zc&&(Zc=!0,du=rf.then(uf))}function F0(n){Me(n)?go.push(...n):hs&&n.id===-1?hs.splice(ro+1,0,n):n.flags&1||(go.push(n),n.flags|=1),cf()}function Wu(n,t,e=lr?Ai+1:0){for(;e<Bn.length;e++){const i=Bn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Bn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function lf(n){if(go.length){const t=[...new Set(go)].sort((e,i)=>ur(e)-ur(i));if(go.length=0,hs){hs.push(...t);return}for(hs=t,ro=0;ro<hs.length;ro++){const e=hs[ro];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}hs=null,ro=0}}const ur=n=>n.id==null?n.flags&2?-1:1/0:n.id;function uf(n){Zc=!1,lr=!0;try{for(Ai=0;Ai<Bn.length;Ai++){const t=Bn[Ai];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ai<Bn.length;Ai++){const t=Bn[Ai];t&&(t.flags&=-2)}Ai=0,Bn.length=0,lf(),lr=!1,du=null,(Bn.length||go.length)&&uf()}}let ni=null,hf=null;function Ma(n){const t=ni;return ni=n,hf=n&&n.type.__scopeId||null,t}function Jn(n,t=ni,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&th(-1);const o=Ma(t);let r;try{r=n(...s)}finally{Ma(o),i._d&&th(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function O0(n,t){if(ni===null)return n;const e=Va(ni),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,a,c=Xe]=t[s];o&&(_e(o)&&(o={mounted:o,updated:o}),o.deep&&$i(r),i.push({dir:o,instance:e,value:r,oldValue:void 0,arg:a,modifiers:c}))}return n}function ws(n,t,e,i){const s=n.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let c=a.dir[i];c&&(xs(),Di(c,e,8,[n.el,a,n,t]),ys())}}const B0=Symbol("_vte"),z0=n=>n.__isTeleport;function pu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,pu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Ln(n,t){return _e(n)?wn({name:n.name},t,{setup:n}):n}function df(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Jc(n,t,e,i,s=!1){if(Me(n)){n.forEach((v,y)=>Jc(v,t&&(Me(t)?t[y]:t),e,i,s));return}if(Zo(i)&&!s)return;const o=i.shapeFlag&4?Va(i.component):i.el,r=s?null:o,{i:a,r:c}=n,l=t&&t.r,h=a.refs===Xe?a.refs={}:a.refs,u=a.setupState,d=Ue(u),p=u===Xe?()=>!1:v=>Le(d,v);if(l!=null&&l!==c&&(xn(l)?(h[l]=null,p(l)&&(u[l]=null)):Pn(l)&&(l.value=null)),_e(c))Mr(c,a,12,[r,h]);else{const v=xn(c),y=Pn(c);if(v||y){const m=()=>{if(n.f){const f=v?p(c)?u[c]:h[c]:c.value;s?Me(f)&&Ql(f,o):Me(f)?f.includes(o)||f.push(o):v?(h[c]=[o],p(c)&&(u[c]=h[c])):(c.value=[o],n.k&&(h[n.k]=c.value))}else v?(h[c]=r,p(c)&&(u[c]=r)):y&&(c.value=r,n.k&&(h[n.k]=r))};r?(m.id=-1,ti(m,e)):m()}}}const Zo=n=>!!n.type.__asyncLoader,ff=n=>n.type.__isKeepAlive;function G0(n,t){pf(n,"a",t)}function H0(n,t){pf(n,"da",t)}function pf(n,t,e=An){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(za(t,i,e),e){let s=e.parent;for(;s&&s.parent;)ff(s.parent.vnode)&&k0(i,t,e,s),s=s.parent}}function k0(n,t,e,i){const s=za(t,n,i,!0);mu(()=>{Ql(i[t],s)},e)}function za(n,t,e=An,i=!1){if(e){const s=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...r)=>{xs();const a=wr(e),c=Di(t,e,n,r);return a(),ys(),c});return i?s.unshift(o):s.push(o),o}}const ns=n=>(t,e=An)=>{(!ka||n==="sp")&&za(n,(...i)=>t(...i),e)},V0=ns("bm"),Vn=ns("m"),W0=ns("bu"),X0=ns("u"),q0=ns("bum"),mu=ns("um"),j0=ns("sp"),Y0=ns("rtg"),$0=ns("rtc");function K0(n,t=An){za("ec",n,t)}const Z0="components";function Xu(n,t){return Q0(Z0,n,!0,t)||n}const J0=Symbol.for("v-ndc");function Q0(n,t,e=!0,i=!1){const s=ni||An;if(s){const o=s.type;{const a=Hm(o,!1);if(a&&(a===t||a===ci(t)||a===Na(ci(t))))return o}const r=qu(s[n]||o[n],t)||qu(s.appContext[n],t);return!r&&i?o:r}}function qu(n,t){return n&&(n[t]||n[ci(t)]||n[Na(ci(t))])}const Qc=n=>n?Uf(n)?Va(n):Qc(n.parent):null,Jo=wn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Qc(n.parent),$root:n=>Qc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>gu(n),$forceUpdate:n=>n.f||(n.f=()=>{fu(n.update)}),$nextTick:n=>n.n||(n.n=af.bind(n.proxy)),$watch:n=>ym.bind(n)}),oc=(n,t)=>n!==Xe&&!n.__isScriptSetup&&Le(n,t),tm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:c}=n;let l;if(t[0]!=="$"){const p=r[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return o[t]}else{if(oc(i,t))return r[t]=1,i[t];if(s!==Xe&&Le(s,t))return r[t]=2,s[t];if((l=n.propsOptions[0])&&Le(l,t))return r[t]=3,o[t];if(e!==Xe&&Le(e,t))return r[t]=4,e[t];tl&&(r[t]=0)}}const h=Jo[t];let u,d;if(h)return t==="$attrs"&&In(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Xe&&Le(e,t))return r[t]=4,e[t];if(d=c.config.globalProperties,Le(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:o}=n;return oc(s,t)?(s[t]=e,!0):i!==Xe&&Le(i,t)?(i[t]=e,!0):Le(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:o}},r){let a;return!!e[r]||n!==Xe&&Le(n,r)||oc(t,r)||(a=o[0])&&Le(a,r)||Le(i,r)||Le(Jo,r)||Le(s.config.globalProperties,r)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Le(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function ju(n){return Me(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let tl=!0;function em(n){const t=gu(n),e=n.proxy,i=n.ctx;tl=!1,t.beforeCreate&&Yu(t.beforeCreate,n,"bc");const{data:s,computed:o,methods:r,watch:a,provide:c,inject:l,created:h,beforeMount:u,mounted:d,beforeUpdate:p,updated:v,activated:y,deactivated:m,beforeDestroy:f,beforeUnmount:A,destroyed:S,unmounted:b,render:B,renderTracked:I,renderTriggered:R,errorCaptured:z,serverPrefetch:Q,expose:M,inheritAttrs:E,components:U,directives:k,filters:et}=t;if(l&&nm(l,i,null),r)for(const nt in r){const X=r[nt];_e(X)&&(i[nt]=X.bind(e))}if(s){const nt=s.call(e,e);cn(nt)&&(n.data=Oa(nt))}if(tl=!0,o)for(const nt in o){const X=o[nt],vt=_e(X)?X.bind(e,e):_e(X.get)?X.get.bind(e,e):Ii,yt=!_e(X)&&_e(X.set)?X.set.bind(e):Ii,wt=_i({get:vt,set:yt});Object.defineProperty(i,nt,{enumerable:!0,configurable:!0,get:()=>wt.value,set:Dt=>wt.value=Dt})}if(a)for(const nt in a)mf(a[nt],i,e,nt);if(c){const nt=_e(c)?c.call(e):c;Reflect.ownKeys(nt).forEach(X=>{ua(X,nt[X])})}h&&Yu(h,n,"c");function $(nt,X){Me(X)?X.forEach(vt=>nt(vt.bind(e))):X&&nt(X.bind(e))}if($(V0,u),$(Vn,d),$(W0,p),$(X0,v),$(G0,y),$(H0,m),$(K0,z),$($0,I),$(Y0,R),$(q0,A),$(mu,b),$(j0,Q),Me(M))if(M.length){const nt=n.exposed||(n.exposed={});M.forEach(X=>{Object.defineProperty(nt,X,{get:()=>e[X],set:vt=>e[X]=vt})})}else n.exposed||(n.exposed={});B&&n.render===Ii&&(n.render=B),E!=null&&(n.inheritAttrs=E),U&&(n.components=U),k&&(n.directives=k),Q&&df(n)}function nm(n,t,e=Ii){Me(n)&&(n=el(n));for(const i in n){const s=n[i];let o;cn(s)?"default"in s?o=Qi(s.from||i,s.default,!0):o=Qi(s.from||i):o=Qi(s),Pn(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function Yu(n,t,e){Di(Me(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function mf(n,t,e,i){let s=i.includes(".")?Rf(e,i):()=>e[i];if(xn(n)){const o=t[n];_e(o)&&Ve(s,o)}else if(_e(n))Ve(s,n.bind(e));else if(cn(n))if(Me(n))n.forEach(o=>mf(o,t,e,i));else{const o=_e(n.handler)?n.handler.bind(e):t[n.handler];_e(o)&&Ve(s,o,n)}}function gu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!e&&!i?c=t:(c={},s.length&&s.forEach(l=>wa(c,l,r,!0)),wa(c,t,r)),cn(t)&&o.set(t,c),c}function wa(n,t,e,i=!1){const{mixins:s,extends:o}=t;o&&wa(n,o,e,!0),s&&s.forEach(r=>wa(n,r,e,!0));for(const r in t)if(!(i&&r==="expose")){const a=im[r]||e&&e[r];n[r]=a?a(n[r],t[r]):t[r]}return n}const im={data:$u,props:Ku,emits:Ku,methods:qo,computed:qo,beforeCreate:Un,created:Un,beforeMount:Un,mounted:Un,beforeUpdate:Un,updated:Un,beforeDestroy:Un,beforeUnmount:Un,destroyed:Un,unmounted:Un,activated:Un,deactivated:Un,errorCaptured:Un,serverPrefetch:Un,components:qo,directives:qo,watch:om,provide:$u,inject:sm};function $u(n,t){return t?n?function(){return wn(_e(n)?n.call(this,this):n,_e(t)?t.call(this,this):t)}:t:n}function sm(n,t){return qo(el(n),el(t))}function el(n){if(Me(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Un(n,t){return n?[...new Set([].concat(n,t))]:t}function qo(n,t){return n?wn(Object.create(null),n,t):t}function Ku(n,t){return n?Me(n)&&Me(t)?[...new Set([...n,...t])]:wn(Object.create(null),ju(n),ju(t??{})):t}function om(n,t){if(!n)return t;if(!t)return n;const e=wn(Object.create(null),n);for(const i in t)e[i]=Un(n[i],t[i]);return e}function gf(){return{app:null,config:{isNativeTag:Vp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rm=0;function am(n,t){return function(i,s=null){_e(i)||(i=wn({},i)),s!=null&&!cn(s)&&(s=null);const o=gf(),r=new WeakSet,a=[];let c=!1;const l=o.app={_uid:rm++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:Vm,get config(){return o.config},set config(h){},use(h,...u){return r.has(h)||(h&&_e(h.install)?(r.add(h),h.install(l,...u)):_e(h)&&(r.add(h),h(l,...u))),l},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),l},component(h,u){return u?(o.components[h]=u,l):o.components[h]},directive(h,u){return u?(o.directives[h]=u,l):o.directives[h]},mount(h,u,d){if(!c){const p=l._ceVNode||Ge(i,s);return p.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(p,h):n(p,h,d),c=!0,l._container=h,h.__vue_app__=l,Va(p.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Di(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(h,u){return o.provides[h]=u,l},runWithContext(h){const u=vo;vo=l;try{return h()}finally{vo=u}}};return l}}let vo=null;function ua(n,t){if(An){let e=An.provides;const i=An.parent&&An.parent.provides;i===e&&(e=An.provides=Object.create(i)),e[n]=t}}function Qi(n,t,e=!1){const i=An||ni;if(i||vo){const s=vo?vo._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&_e(t)?t.call(i&&i.proxy):t}}const vf={},_f=()=>Object.create(vf),xf=n=>Object.getPrototypeOf(n)===vf;function cm(n,t,e,i=!1){const s={},o=_f();n.propsDefaults=Object.create(null),yf(n,t,s,o);for(const r in n.propsOptions[0])r in s||(s[r]=void 0);e?n.props=i?s:ef(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function lm(n,t,e,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=n,a=Ue(s),[c]=n.propsOptions;let l=!1;if((i||r>0)&&!(r&16)){if(r&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Ga(n.emitsOptions,d))continue;const p=t[d];if(c)if(Le(o,d))p!==o[d]&&(o[d]=p,l=!0);else{const v=ci(d);s[v]=nl(c,a,v,p,n,!1)}else p!==o[d]&&(o[d]=p,l=!0)}}}else{yf(n,t,s,o)&&(l=!0);let h;for(const u in a)(!t||!Le(t,u)&&((h=ks(u))===u||!Le(t,h)))&&(c?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=nl(c,a,u,void 0,n,!0)):delete s[u]);if(o!==a)for(const u in o)(!t||!Le(t,u))&&(delete o[u],l=!0)}l&&Ji(n.attrs,"set","")}function yf(n,t,e,i){const[s,o]=n.propsOptions;let r=!1,a;if(t)for(let c in t){if($o(c))continue;const l=t[c];let h;s&&Le(s,h=ci(c))?!o||!o.includes(h)?e[h]=l:(a||(a={}))[h]=l:Ga(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,r=!0)}if(o){const c=Ue(e),l=a||Xe;for(let h=0;h<o.length;h++){const u=o[h];e[u]=nl(s,c,u,l[u],n,!Le(l,u))}}return r}function nl(n,t,e,i,s,o){const r=n[e];if(r!=null){const a=Le(r,"default");if(a&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&_e(c)){const{propsDefaults:l}=s;if(e in l)i=l[e];else{const h=wr(s);i=l[e]=c.call(null,t),h()}}else i=c;s.ce&&s.ce._setProp(e,i)}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===ks(e))&&(i=!0))}return i}const um=new WeakMap;function Mf(n,t,e=!1){const i=e?um:t.propsCache,s=i.get(n);if(s)return s;const o=n.props,r={},a=[];let c=!1;if(!_e(n)){const h=u=>{c=!0;const[d,p]=Mf(u,t,!0);wn(r,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!o&&!c)return cn(n)&&i.set(n,fo),fo;if(Me(o))for(let h=0;h<o.length;h++){const u=ci(o[h]);Zu(u)&&(r[u]=Xe)}else if(o)for(const h in o){const u=ci(h);if(Zu(u)){const d=o[h],p=r[u]=Me(d)||_e(d)?{type:d}:wn({},d),v=p.type;let y=!1,m=!0;if(Me(v))for(let f=0;f<v.length;++f){const A=v[f],S=_e(A)&&A.name;if(S==="Boolean"){y=!0;break}else S==="String"&&(m=!1)}else y=_e(v)&&v.name==="Boolean";p[0]=y,p[1]=m,(y||Le(p,"default"))&&a.push(u)}}const l=[r,a];return cn(n)&&i.set(n,l),l}function Zu(n){return n[0]!=="$"&&!$o(n)}const wf=n=>n[0]==="_"||n==="$stable",vu=n=>Me(n)?n.map(Pi):[Pi(n)],hm=(n,t,e)=>{if(t._n)return t;const i=Jn((...s)=>vu(t(...s)),e);return i._c=!1,i},Sf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(wf(s))continue;const o=n[s];if(_e(o))t[s]=hm(s,o,i);else if(o!=null){const r=vu(o);t[s]=()=>r}}},bf=(n,t)=>{const e=vu(t);n.slots.default=()=>e},Ef=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},dm=(n,t,e)=>{const i=n.slots=_f();if(n.vnode.shapeFlag&32){const s=t._;s?(Ef(i,t,e),e&&Bd(i,"_",s,!0)):Sf(t,i)}else t&&bf(n,t)},fm=(n,t,e)=>{const{vnode:i,slots:s}=n;let o=!0,r=Xe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?o=!1:Ef(s,t,e):(o=!t.$stable,Sf(t,s)),r=t}else t&&(bf(n,t),r={default:1});if(o)for(const a in s)!wf(a)&&r[a]==null&&delete s[a]},ti=Am;function pm(n){return mm(n)}function mm(n,t){const e=zd();e.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:c,setText:l,setElementText:h,parentNode:u,nextSibling:d,setScopeId:p=Ii,insertStaticContent:v}=n,y=(g,T,L,F=null,N=null,K=null,Z=void 0,w=null,_=!!T.dynamicChildren)=>{if(g===T)return;g&&!Oo(g,T)&&(F=O(g),Dt(g,N,K,!0),g=null),T.patchFlag===-2&&(_=!1,T.dynamicChildren=null);const{type:C,ref:q,shapeFlag:V}=T;switch(C){case Ha:m(g,T,L,F);break;case Bs:f(g,T,L,F);break;case cc:g==null&&A(T,L,F,Z);break;case fn:U(g,T,L,F,N,K,Z,w,_);break;default:V&1?B(g,T,L,F,N,K,Z,w,_):V&6?k(g,T,L,F,N,K,Z,w,_):(V&64||V&128)&&C.process(g,T,L,F,N,K,Z,w,_,ht)}q!=null&&N&&Jc(q,g&&g.ref,K,T||g,!T)},m=(g,T,L,F)=>{if(g==null)i(T.el=a(T.children),L,F);else{const N=T.el=g.el;T.children!==g.children&&l(N,T.children)}},f=(g,T,L,F)=>{g==null?i(T.el=c(T.children||""),L,F):T.el=g.el},A=(g,T,L,F)=>{[g.el,g.anchor]=v(g.children,T,L,F,g.el,g.anchor)},S=({el:g,anchor:T},L,F)=>{let N;for(;g&&g!==T;)N=d(g),i(g,L,F),g=N;i(T,L,F)},b=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=d(g),s(g),g=L;s(T)},B=(g,T,L,F,N,K,Z,w,_)=>{T.type==="svg"?Z="svg":T.type==="math"&&(Z="mathml"),g==null?I(T,L,F,N,K,Z,w,_):Q(g,T,N,K,Z,w,_)},I=(g,T,L,F,N,K,Z,w)=>{let _,C;const{props:q,shapeFlag:V,transition:W,dirs:dt}=g;if(_=g.el=r(g.type,K,q&&q.is,q),V&8?h(_,g.children):V&16&&z(g.children,_,null,F,N,rc(g,K),Z,w),dt&&ws(g,null,F,"created"),R(_,g,g.scopeId,Z,F),q){for(const mt in q)mt!=="value"&&!$o(mt)&&o(_,mt,null,q[mt],K,F);"value"in q&&o(_,"value",null,q.value,K),(C=q.onVnodeBeforeMount)&&Ti(C,F,g)}dt&&ws(g,null,F,"beforeMount");const ct=gm(N,W);ct&&W.beforeEnter(_),i(_,T,L),((C=q&&q.onVnodeMounted)||ct||dt)&&ti(()=>{C&&Ti(C,F,g),ct&&W.enter(_),dt&&ws(g,null,F,"mounted")},N)},R=(g,T,L,F,N)=>{if(L&&p(g,L),F)for(let K=0;K<F.length;K++)p(g,F[K]);if(N){let K=N.subTree;if(T===K||If(K.type)&&(K.ssContent===T||K.ssFallback===T)){const Z=N.vnode;R(g,Z,Z.scopeId,Z.slotScopeIds,N.parent)}}},z=(g,T,L,F,N,K,Z,w,_=0)=>{for(let C=_;C<g.length;C++){const q=g[C]=w?ds(g[C]):Pi(g[C]);y(null,q,T,L,F,N,K,Z,w)}},Q=(g,T,L,F,N,K,Z)=>{const w=T.el=g.el;let{patchFlag:_,dynamicChildren:C,dirs:q}=T;_|=g.patchFlag&16;const V=g.props||Xe,W=T.props||Xe;let dt;if(L&&Ss(L,!1),(dt=W.onVnodeBeforeUpdate)&&Ti(dt,L,T,g),q&&ws(T,g,L,"beforeUpdate"),L&&Ss(L,!0),(V.innerHTML&&W.innerHTML==null||V.textContent&&W.textContent==null)&&h(w,""),C?M(g.dynamicChildren,C,w,L,F,rc(T,N),K):Z||X(g,T,w,null,L,F,rc(T,N),K,!1),_>0){if(_&16)E(w,V,W,L,N);else if(_&2&&V.class!==W.class&&o(w,"class",null,W.class,N),_&4&&o(w,"style",V.style,W.style,N),_&8){const ct=T.dynamicProps;for(let mt=0;mt<ct.length;mt++){const At=ct[mt],ut=V[At],_t=W[At];(_t!==ut||At==="value")&&o(w,At,ut,_t,N,L)}}_&1&&g.children!==T.children&&h(w,T.children)}else!Z&&C==null&&E(w,V,W,L,N);((dt=W.onVnodeUpdated)||q)&&ti(()=>{dt&&Ti(dt,L,T,g),q&&ws(T,g,L,"updated")},F)},M=(g,T,L,F,N,K,Z)=>{for(let w=0;w<T.length;w++){const _=g[w],C=T[w],q=_.el&&(_.type===fn||!Oo(_,C)||_.shapeFlag&70)?u(_.el):L;y(_,C,q,null,F,N,K,Z,!0)}},E=(g,T,L,F,N)=>{if(T!==L){if(T!==Xe)for(const K in T)!$o(K)&&!(K in L)&&o(g,K,T[K],null,N,F);for(const K in L){if($o(K))continue;const Z=L[K],w=T[K];Z!==w&&K!=="value"&&o(g,K,w,Z,N,F)}"value"in L&&o(g,"value",T.value,L.value,N)}},U=(g,T,L,F,N,K,Z,w,_)=>{const C=T.el=g?g.el:a(""),q=T.anchor=g?g.anchor:a("");let{patchFlag:V,dynamicChildren:W,slotScopeIds:dt}=T;dt&&(w=w?w.concat(dt):dt),g==null?(i(C,L,F),i(q,L,F),z(T.children||[],L,q,N,K,Z,w,_)):V>0&&V&64&&W&&g.dynamicChildren?(M(g.dynamicChildren,W,L,N,K,Z,w),(T.key!=null||N&&T===N.subTree)&&Tf(g,T,!0)):X(g,T,L,q,N,K,Z,w,_)},k=(g,T,L,F,N,K,Z,w,_)=>{T.slotScopeIds=w,g==null?T.shapeFlag&512?N.ctx.activate(T,L,F,Z,_):et(T,L,F,N,K,Z,_):rt(g,T,_)},et=(g,T,L,F,N,K,Z)=>{const w=g.component=Fm(g,F,N);if(ff(g)&&(w.ctx.renderer=ht),Om(w,!1,Z),w.asyncDep){if(N&&N.registerDep(w,$,Z),!g.el){const _=w.subTree=Ge(Bs);f(null,_,T,L)}}else $(w,g,T,L,N,K,Z)},rt=(g,T,L)=>{const F=T.component=g.component;if(Em(g,T,L))if(F.asyncDep&&!F.asyncResolved){nt(F,T,L);return}else F.next=T,F.update();else T.el=g.el,F.vnode=T},$=(g,T,L,F,N,K,Z)=>{const w=()=>{if(g.isMounted){let{next:V,bu:W,u:dt,parent:ct,vnode:mt}=g;{const Nt=Af(g);if(Nt){V&&(V.el=mt.el,nt(g,V,Z)),Nt.asyncDep.then(()=>{g.isUnmounted||w()});return}}let At=V,ut;Ss(g,!1),V?(V.el=mt.el,nt(g,V,Z)):V=mt,W&&ec(W),(ut=V.props&&V.props.onVnodeBeforeUpdate)&&Ti(ut,ct,V,mt),Ss(g,!0);const _t=ac(g),Lt=g.subTree;g.subTree=_t,y(Lt,_t,u(Lt.el),O(Lt),g,N,K),V.el=_t.el,At===null&&Tm(g,_t.el),dt&&ti(dt,N),(ut=V.props&&V.props.onVnodeUpdated)&&ti(()=>Ti(ut,ct,V,mt),N)}else{let V;const{el:W,props:dt}=T,{bm:ct,m:mt,parent:At,root:ut,type:_t}=g,Lt=Zo(T);if(Ss(g,!1),ct&&ec(ct),!Lt&&(V=dt&&dt.onVnodeBeforeMount)&&Ti(V,At,T),Ss(g,!0),W&&it){const Nt=()=>{g.subTree=ac(g),it(W,g.subTree,g,N,null)};Lt&&_t.__asyncHydrate?_t.__asyncHydrate(W,g,Nt):Nt()}else{ut.ce&&ut.ce._injectChildStyle(_t);const Nt=g.subTree=ac(g);y(null,Nt,L,F,g,N,K),T.el=Nt.el}if(mt&&ti(mt,N),!Lt&&(V=dt&&dt.onVnodeMounted)){const Nt=T;ti(()=>Ti(V,At,Nt),N)}(T.shapeFlag&256||At&&Zo(At.vnode)&&At.vnode.shapeFlag&256)&&g.a&&ti(g.a,N),g.isMounted=!0,T=L=F=null}};g.scope.on();const _=g.effect=new Hd(w);g.scope.off();const C=g.update=_.run.bind(_),q=g.job=_.runIfDirty.bind(_);q.i=g,q.id=g.uid,_.scheduler=()=>fu(q),Ss(g,!0),C()},nt=(g,T,L)=>{T.component=g;const F=g.vnode.props;g.vnode=T,g.next=null,lm(g,T.props,F,L),fm(g,T.children,L),xs(),Wu(g),ys()},X=(g,T,L,F,N,K,Z,w,_=!1)=>{const C=g&&g.children,q=g?g.shapeFlag:0,V=T.children,{patchFlag:W,shapeFlag:dt}=T;if(W>0){if(W&128){yt(C,V,L,F,N,K,Z,w,_);return}else if(W&256){vt(C,V,L,F,N,K,Z,w,_);return}}dt&8?(q&16&&bt(C,N,K),V!==C&&h(L,V)):q&16?dt&16?yt(C,V,L,F,N,K,Z,w,_):bt(C,N,K,!0):(q&8&&h(L,""),dt&16&&z(V,L,F,N,K,Z,w,_))},vt=(g,T,L,F,N,K,Z,w,_)=>{g=g||fo,T=T||fo;const C=g.length,q=T.length,V=Math.min(C,q);let W;for(W=0;W<V;W++){const dt=T[W]=_?ds(T[W]):Pi(T[W]);y(g[W],dt,L,null,N,K,Z,w,_)}C>q?bt(g,N,K,!0,!1,V):z(T,L,F,N,K,Z,w,_,V)},yt=(g,T,L,F,N,K,Z,w,_)=>{let C=0;const q=T.length;let V=g.length-1,W=q-1;for(;C<=V&&C<=W;){const dt=g[C],ct=T[C]=_?ds(T[C]):Pi(T[C]);if(Oo(dt,ct))y(dt,ct,L,null,N,K,Z,w,_);else break;C++}for(;C<=V&&C<=W;){const dt=g[V],ct=T[W]=_?ds(T[W]):Pi(T[W]);if(Oo(dt,ct))y(dt,ct,L,null,N,K,Z,w,_);else break;V--,W--}if(C>V){if(C<=W){const dt=W+1,ct=dt<q?T[dt].el:F;for(;C<=W;)y(null,T[C]=_?ds(T[C]):Pi(T[C]),L,ct,N,K,Z,w,_),C++}}else if(C>W)for(;C<=V;)Dt(g[C],N,K,!0),C++;else{const dt=C,ct=C,mt=new Map;for(C=ct;C<=W;C++){const zt=T[C]=_?ds(T[C]):Pi(T[C]);zt.key!=null&&mt.set(zt.key,C)}let At,ut=0;const _t=W-ct+1;let Lt=!1,Nt=0;const Rt=new Array(_t);for(C=0;C<_t;C++)Rt[C]=0;for(C=dt;C<=V;C++){const zt=g[C];if(ut>=_t){Dt(zt,N,K,!0);continue}let Yt;if(zt.key!=null)Yt=mt.get(zt.key);else for(At=ct;At<=W;At++)if(Rt[At-ct]===0&&Oo(zt,T[At])){Yt=At;break}Yt===void 0?Dt(zt,N,K,!0):(Rt[Yt-ct]=C+1,Yt>=Nt?Nt=Yt:Lt=!0,y(zt,T[Yt],L,null,N,K,Z,w,_),ut++)}const $t=Lt?vm(Rt):fo;for(At=$t.length-1,C=_t-1;C>=0;C--){const zt=ct+C,Yt=T[zt],G=zt+1<q?T[zt+1].el:F;Rt[C]===0?y(null,Yt,L,G,N,K,Z,w,_):Lt&&(At<0||C!==$t[At]?wt(Yt,L,G,2):At--)}}},wt=(g,T,L,F,N=null)=>{const{el:K,type:Z,transition:w,children:_,shapeFlag:C}=g;if(C&6){wt(g.component.subTree,T,L,F);return}if(C&128){g.suspense.move(T,L,F);return}if(C&64){Z.move(g,T,L,ht);return}if(Z===fn){i(K,T,L);for(let V=0;V<_.length;V++)wt(_[V],T,L,F);i(g.anchor,T,L);return}if(Z===cc){S(g,T,L);return}if(F!==2&&C&1&&w)if(F===0)w.beforeEnter(K),i(K,T,L),ti(()=>w.enter(K),N);else{const{leave:V,delayLeave:W,afterLeave:dt}=w,ct=()=>i(K,T,L),mt=()=>{V(K,()=>{ct(),dt&&dt()})};W?W(K,ct,mt):mt()}else i(K,T,L)},Dt=(g,T,L,F=!1,N=!1)=>{const{type:K,props:Z,ref:w,children:_,dynamicChildren:C,shapeFlag:q,patchFlag:V,dirs:W,cacheIndex:dt}=g;if(V===-2&&(N=!1),w!=null&&Jc(w,null,L,g,!0),dt!=null&&(T.renderCache[dt]=void 0),q&256){T.ctx.deactivate(g);return}const ct=q&1&&W,mt=!Zo(g);let At;if(mt&&(At=Z&&Z.onVnodeBeforeUnmount)&&Ti(At,T,g),q&6)pt(g.component,L,F);else{if(q&128){g.suspense.unmount(L,F);return}ct&&ws(g,null,T,"beforeUnmount"),q&64?g.type.remove(g,T,L,ht,F):C&&!C.hasOnce&&(K!==fn||V>0&&V&64)?bt(C,T,L,!1,!0):(K===fn&&V&384||!N&&q&16)&&bt(_,T,L),F&&Wt(g)}(mt&&(At=Z&&Z.onVnodeUnmounted)||ct)&&ti(()=>{At&&Ti(At,T,g),ct&&ws(g,null,T,"unmounted")},L)},Wt=g=>{const{type:T,el:L,anchor:F,transition:N}=g;if(T===fn){at(L,F);return}if(T===cc){b(g);return}const K=()=>{s(L),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:Z,delayLeave:w}=N,_=()=>Z(L,K);w?w(g.el,K,_):_()}else K()},at=(g,T)=>{let L;for(;g!==T;)L=d(g),s(g),g=L;s(T)},pt=(g,T,L)=>{const{bum:F,scope:N,job:K,subTree:Z,um:w,m:_,a:C}=g;Ju(_),Ju(C),F&&ec(F),N.stop(),K&&(K.flags|=8,Dt(Z,g,T,L)),w&&ti(w,T),ti(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},bt=(g,T,L,F=!1,N=!1,K=0)=>{for(let Z=K;Z<g.length;Z++)Dt(g[Z],T,L,F,N)},O=g=>{if(g.shapeFlag&6)return O(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=d(g.anchor||g.el),L=T&&T[B0];return L?d(L):T};let lt=!1;const ot=(g,T,L)=>{g==null?T._vnode&&Dt(T._vnode,null,null,!0):y(T._vnode||null,g,T,null,null,null,L),T._vnode=g,lt||(lt=!0,Wu(),lf(),lt=!1)},ht={p:y,um:Dt,m:wt,r:Wt,mt:et,mc:z,pc:X,pbc:M,n:O,o:n};let Mt,it;return{render:ot,hydrate:Mt,createApp:am(ot,Mt)}}function rc({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ss({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function gm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Tf(n,t,e=!1){const i=n.children,s=t.children;if(Me(i)&&Me(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=ds(s[o]),a.el=r.el),!e&&a.patchFlag!==-2&&Tf(r,a)),a.type===Ha&&(a.el=r.el)}}function vm(n){const t=n.slice(),e=[0];let i,s,o,r,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=e[e.length-1],n[s]<l){t[i]=s,e.push(i);continue}for(o=0,r=e.length-1;o<r;)a=o+r>>1,n[e[a]]<l?o=a+1:r=a;l<n[e[o]]&&(o>0&&(t[i]=e[o-1]),e[o]=i)}}for(o=e.length,r=e[o-1];o-- >0;)e[o]=r,r=t[r];return e}function Af(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Af(t)}function Ju(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const _m=Symbol.for("v-scx"),xm=()=>Qi(_m);function Ve(n,t,e){return Pf(n,t,e)}function Pf(n,t,e=Xe){const{immediate:i,deep:s,flush:o,once:r}=e,a=wn({},e);let c;if(ka)if(o==="sync"){const d=xm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=Ii,d.resume=Ii,d.pause=Ii,d}const l=An;a.call=(d,p,v)=>Di(d,l,p,v);let h=!1;o==="post"?a.scheduler=d=>{ti(d,l&&l.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(d,p)=>{p?d():fu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,l&&(d.id=l.uid,d.i=l))};const u=D0(n,t,a);return c&&c.push(u),u}function ym(n,t,e){const i=this.proxy,s=xn(n)?n.includes(".")?Rf(i,n):()=>i[n]:n.bind(i,i);let o;_e(t)?o=t:(o=t.handler,e=t);const r=wr(this),a=Pf(s,o.bind(i),e);return r(),a}function Rf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Mm=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${ci(t)}Modifiers`]||n[`${ks(t)}Modifiers`];function wm(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Xe;let s=e;const o=t.startsWith("update:"),r=o&&Mm(i,t.slice(7));r&&(r.trim&&(s=e.map(h=>xn(h)?h.trim():h)),r.number&&(s=e.map(Zp)));let a,c=i[a=tc(t)]||i[a=tc(ci(t))];!c&&o&&(c=i[a=tc(ks(t))]),c&&Di(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Di(l,n,6,s)}}function Cf(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const o=n.emits;let r={},a=!1;if(!_e(n)){const c=l=>{const h=Cf(l,t,!0);h&&(a=!0,wn(r,h))};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!a?(cn(n)&&i.set(n,null),null):(Me(o)?o.forEach(c=>r[c]=null):wn(r,o),cn(n)&&i.set(n,r),r)}function Ga(n,t){return!n||!La(t)?!1:(t=t.slice(2).replace(/Once$/,""),Le(n,t[0].toLowerCase()+t.slice(1))||Le(n,ks(t))||Le(n,t))}function ac(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:a,emit:c,render:l,renderCache:h,props:u,data:d,setupState:p,ctx:v,inheritAttrs:y}=n,m=Ma(n);let f,A;try{if(e.shapeFlag&4){const b=s||i,B=b;f=Pi(l.call(B,b,h,u,p,d,v)),A=a}else{const b=t;f=Pi(b.length>1?b(u,{attrs:a,slots:r,emit:c}):b(u,null)),A=t.props?a:Sm(a)}}catch(b){Qo.length=0,Ba(b,n,1),f=Ge(Bs)}let S=f;if(A&&y!==!1){const b=Object.keys(A),{shapeFlag:B}=S;b.length&&B&7&&(o&&b.some(Jl)&&(A=bm(A,o)),S=wo(S,A,!1,!0))}return e.dirs&&(S=wo(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&pu(S,e.transition),f=S,Ma(m),f}const Sm=n=>{let t;for(const e in n)(e==="class"||e==="style"||La(e))&&((t||(t={}))[e]=n[e]);return t},bm=(n,t)=>{const e={};for(const i in n)(!Jl(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Em(n,t,e){const{props:i,children:s,component:o}=n,{props:r,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return i?Qu(i,r,l):!!r;if(c&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(r[d]!==i[d]&&!Ga(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Qu(i,r,l):!0:!!r;return!1}function Qu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(t[o]!==n[o]&&!Ga(e,o))return!0}return!1}function Tm({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const If=n=>n.__isSuspense;function Am(n,t){t&&t.pendingBranch?Me(n)?t.effects.push(...n):t.effects.push(n):F0(n)}const fn=Symbol.for("v-fgt"),Ha=Symbol.for("v-txt"),Bs=Symbol.for("v-cmt"),cc=Symbol.for("v-stc"),Qo=[];let ii=null;function Wn(n=!1){Qo.push(ii=n?null:[])}function Pm(){Qo.pop(),ii=Qo[Qo.length-1]||null}let hr=1;function th(n){hr+=n,n<0&&ii&&(ii.hasOnce=!0)}function Lf(n){return n.dynamicChildren=hr>0?ii||fo:null,Pm(),hr>0&&ii&&ii.push(n),n}function Yn(n,t,e,i,s,o){return Lf(Bt(n,t,e,i,s,o,!0))}function Rm(n,t,e,i,s){return Lf(Ge(n,t,e,i,s,!0))}function Sa(n){return n?n.__v_isVNode===!0:!1}function Oo(n,t){return n.type===t.type&&n.key===t.key}const Df=({key:n})=>n??null,ha=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?xn(n)||Pn(n)||_e(n)?{i:ni,r:n,k:t,f:!!e}:n:null);function Bt(n,t=null,e=null,i=0,s=null,o=n===fn?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Df(t),ref:t&&ha(t),scopeId:hf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ni};return a?(_u(c,e),o&128&&n.normalize(c)):e&&(c.shapeFlag|=xn(e)?8:16),hr>0&&!r&&ii&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&ii.push(c),c}const Ge=Cm;function Cm(n,t=null,e=null,i=0,s=null,o=!1){if((!n||n===J0)&&(n=Bs),Sa(n)){const a=wo(n,t,!0);return e&&_u(a,e),hr>0&&!o&&ii&&(a.shapeFlag&6?ii[ii.indexOf(n)]=a:ii.push(a)),a.patchFlag=-2,a}if(km(n)&&(n=n.__vccOpts),t){t=Im(t);let{class:a,style:c}=t;a&&!xn(a)&&(t.class=kn(a)),cn(c)&&(uu(c)&&!Me(c)&&(c=wn({},c)),t.style=eu(c))}const r=xn(n)?1:If(n)?128:z0(n)?64:cn(n)?4:_e(n)?2:0;return Bt(n,t,e,i,s,r,o,!0)}function Im(n){return n?uu(n)||xf(n)?wn({},n):n:null}function wo(n,t,e=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:a,transition:c}=n,l=t?Dm(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Df(l),ref:t&&t.ref?e&&o?Me(o)?o.concat(ha(t)):[o,ha(t)]:ha(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==fn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&wo(n.ssContent),ssFallback:n.ssFallback&&wo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&pu(h,c.clone(h)),h}function Qn(n=" ",t=0){return Ge(Ha,null,n,t)}function Lm(n="",t=!1){return t?(Wn(),Rm(Bs,null,n)):Ge(Bs,null,n)}function Pi(n){return n==null||typeof n=="boolean"?Ge(Bs):Me(n)?Ge(fn,null,n.slice()):Sa(n)?ds(n):Ge(Ha,null,String(n))}function ds(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:wo(n)}function _u(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Me(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),_u(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!xf(t)?t._ctx=ni:s===3&&ni&&(ni.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else _e(t)?(t={default:t,_ctx:ni},e=32):(t=String(t),i&64?(e=16,t=[Qn(t)]):e=8);n.children=t,n.shapeFlag|=e}function Dm(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=kn([t.class,i.class]));else if(s==="style")t.style=eu([t.style,i.style]);else if(La(s)){const o=t[s],r=i[s];r&&o!==r&&!(Me(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=i[s])}return t}function Ti(n,t,e,i=null){Di(n,t,7,[e,i])}const Um=gf();let Nm=0;function Fm(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Um,o={uid:Nm++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new s0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mf(i,s),emitsOptions:Cf(i,s),emit:null,emitted:null,propsDefaults:Xe,inheritAttrs:i.inheritAttrs,ctx:Xe,data:Xe,props:Xe,attrs:Xe,slots:Xe,refs:Xe,setupState:Xe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=wm.bind(null,o),n.ce&&n.ce(o),o}let An=null,ba,il;{const n=zd(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};ba=t("__VUE_INSTANCE_SETTERS__",e=>An=e),il=t("__VUE_SSR_SETTERS__",e=>ka=e)}const wr=n=>{const t=An;return ba(n),n.scope.on(),()=>{n.scope.off(),ba(t)}},eh=()=>{An&&An.scope.off(),ba(null)};function Uf(n){return n.vnode.shapeFlag&4}let ka=!1;function Om(n,t=!1,e=!1){t&&il(t);const{props:i,children:s}=n.vnode,o=Uf(n);cm(n,i,o,t),dm(n,s,e);const r=o?Bm(n,t):void 0;return t&&il(!1),r}function Bm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,tm);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?Gm(n):null,o=wr(n);xs();const r=Mr(i,n,0,[n.props,s]);if(ys(),o(),Od(r)){if(Zo(n)||df(n),r.then(eh,eh),t)return r.then(a=>{nh(n,a,t)}).catch(a=>{Ba(a,n,0)});n.asyncDep=r}else nh(n,r,t)}else Nf(n,t)}function nh(n,t,e){_e(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:cn(t)&&(n.setupState=of(t)),Nf(n,e)}let ih;function Nf(n,t,e){const i=n.type;if(!n.render){if(!t&&ih&&!i.render){const s=i.template||gu(n).template;if(s){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=wn(wn({isCustomElement:o,delimiters:a},r),c);i.render=ih(s,l)}}n.render=i.render||Ii}{const s=wr(n);xs();try{em(n)}finally{ys(),s()}}}const zm={get(n,t){return In(n,"get",""),n[t]}};function Gm(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,zm),slots:n.slots,emit:n.emit,expose:t}}function Va(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(of(A0(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Jo)return Jo[e](n)},has(t,e){return e in t||e in Jo}})):n.proxy}function Hm(n,t=!0){return _e(n)?n.displayName||n.name:n.name||t&&n.__name}function km(n){return _e(n)&&"__vccOpts"in n}const _i=(n,t)=>I0(n,t,ka);function Ff(n,t,e){const i=arguments.length;return i===2?cn(t)&&!Me(t)?Sa(t)?Ge(n,null,[t]):Ge(n,t):Ge(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Sa(e)&&(e=[e]),Ge(n,t,e))}const Vm="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sl;const sh=typeof window<"u"&&window.trustedTypes;if(sh)try{sl=sh.createPolicy("vue",{createHTML:n=>n})}catch{}const Of=sl?n=>sl.createHTML(n):n=>n,Wm="http://www.w3.org/2000/svg",Xm="http://www.w3.org/1998/Math/MathML",Yi=typeof document<"u"?document:null,oh=Yi&&Yi.createElement("template"),qm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Yi.createElementNS(Wm,n):t==="mathml"?Yi.createElementNS(Xm,n):e?Yi.createElement(n,{is:e}):Yi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Yi.createTextNode(n),createComment:n=>Yi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,o){const r=e?e.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===o||!(s=s.nextSibling)););else{oh.innerHTML=Of(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=oh.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},jm=Symbol("_vtc");function Ym(n,t,e){const i=n[jm];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Ea=Symbol("_vod"),Bf=Symbol("_vsh"),$m={beforeMount(n,{value:t},{transition:e}){n[Ea]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Bo(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Bo(n,!0),i.enter(n)):i.leave(n,()=>{Bo(n,!1)}):Bo(n,t))},beforeUnmount(n,{value:t}){Bo(n,t)}};function Bo(n,t){n.style.display=t?n[Ea]:"none",n[Bf]=!t}const Km=Symbol(""),Zm=/(^|;)\s*display\s*:/;function Jm(n,t,e){const i=n.style,s=xn(e);let o=!1;if(e&&!s){if(t)if(xn(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&da(i,a,"")}else for(const r in t)e[r]==null&&da(i,r,"");for(const r in e)r==="display"&&(o=!0),da(i,r,e[r])}else if(s){if(t!==e){const r=i[Km];r&&(e+=";"+r),i.cssText=e,o=Zm.test(e)}}else t&&n.removeAttribute("style");Ea in n&&(n[Ea]=o?i.display:"",n[Bf]&&(i.display="none"))}const rh=/\s*!important$/;function da(n,t,e){if(Me(e))e.forEach(i=>da(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Qm(n,t);rh.test(e)?n.setProperty(ks(i),e.replace(rh,""),"important"):n[i]=e}}const ah=["Webkit","Moz","ms"],lc={};function Qm(n,t){const e=lc[t];if(e)return e;let i=ci(t);if(i!=="filter"&&i in n)return lc[t]=i;i=Na(i);for(let s=0;s<ah.length;s++){const o=ah[s]+i;if(o in n)return lc[t]=o}return t}const ch="http://www.w3.org/1999/xlink";function lh(n,t,e,i,s,o=i0(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ch,t.slice(6,t.length)):n.setAttributeNS(ch,t,e):e==null||o&&!Gd(e)?n.removeAttribute(t):n.setAttribute(t,o?"":Io(e)?String(e):e)}function uh(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Of(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(r!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const r=typeof n[t];r==="boolean"?e=Gd(e):e==null&&r==="string"?(e="",o=!0):r==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(t)}function tg(n,t,e,i){n.addEventListener(t,e,i)}function eg(n,t,e,i){n.removeEventListener(t,e,i)}const hh=Symbol("_vei");function ng(n,t,e,i,s=null){const o=n[hh]||(n[hh]={}),r=o[t];if(i&&r)r.value=i;else{const[a,c]=ig(t);if(i){const l=o[t]=rg(i,s);tg(n,a,l,c)}else r&&(eg(n,a,r,c),o[t]=void 0)}}const dh=/(?:Once|Passive|Capture)$/;function ig(n){let t;if(dh.test(n)){t={};let i;for(;i=n.match(dh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ks(n.slice(2)),t]}let uc=0;const sg=Promise.resolve(),og=()=>uc||(sg.then(()=>uc=0),uc=Date.now());function rg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Di(ag(i,e.value),t,5,[i])};return e.value=n,e.attached=og(),e}function ag(n,t){if(Me(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const fh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,cg=(n,t,e,i,s,o)=>{const r=s==="svg";t==="class"?Ym(n,i,r):t==="style"?Jm(n,e,i):La(t)?Jl(t)||ng(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lg(n,t,i,r))?(uh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&lh(n,t,i,r,o,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!xn(i))?uh(n,ci(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),lh(n,t,i,r))};function lg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&fh(t)&&_e(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return fh(t)&&xn(e)?!1:t in n}const ug=wn({patchProp:cg},qm);let ph;function hg(){return ph||(ph=pm(ug))}const dg=(...n)=>{const t=hg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=pg(i);if(!s)return;const o=t._component;!_e(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=e(s,!1,fg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function fg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function pg(n){return xn(n)?document.querySelector(n):n}const mg={id:"app"},gg=Ln({__name:"App",setup(n){const t=jt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return Vn(()=>{window.addEventListener("mousemove",e)}),mu(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const o=Xu("router-link"),r=Xu("router-view");return Wn(),Yn("div",mg,[O0(Bt("nav",null,[Ge(o,{to:"/3d-bear-arts/leather"},{default:Jn(()=>s[0]||(s[0]=[Qn("LV")])),_:1}),Ge(o,{to:"/3d-bear-arts/pop-art"},{default:Jn(()=>s[1]||(s[1]=[Qn("Pop MouseMove")])),_:1}),Ge(o,{to:"/3d-bear-arts/pop-art-bear-3"},{default:Jn(()=>s[2]||(s[2]=[Qn("Pop Art")])),_:1}),Ge(o,{to:"/3d-bear-arts/machine"},{default:Jn(()=>s[3]||(s[3]=[Qn("Machine")])),_:1}),Ge(o,{to:"/3d-bear-arts/water"},{default:Jn(()=>s[4]||(s[4]=[Qn("Water")])),_:1}),Ge(o,{to:"/3d-bear-arts/ghost-bear"},{default:Jn(()=>s[5]||(s[5]=[Qn("Pumpkin")])),_:1}),Ge(o,{to:"/3d-bear-arts/white-ghost-bear"},{default:Jn(()=>s[6]||(s[6]=[Qn("Ghost")])),_:1}),Ge(o,{to:"/3d-bear-arts/santa"},{default:Jn(()=>s[7]||(s[7]=[Qn("Santa")])),_:1}),Ge(o,{to:"/3d-bear-arts/coffee"},{default:Jn(()=>s[8]||(s[8]=[Qn("Coffee")])),_:1}),Ge(o,{to:"/3d-bear-arts/bears"},{default:Jn(()=>s[9]||(s[9]=[Qn("Bears")])),_:1}),Ge(o,{to:"/3d-bear-arts/money"},{default:Jn(()=>s[10]||(s[10]=[Qn("Money")])),_:1}),Ge(o,{to:"/3d-bear-arts/"},{default:Jn(()=>s[11]||(s[11]=[Qn("Snowman")])),_:1})],512),[[$m,t.value]]),Ge(r)])}}}),$n=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},vg=$n(gg,[["__scopeId","data-v-16bf051c"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ao=typeof document<"u";function zf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function _g(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&zf(n.default)}const Oe=Object.assign;function hc(n,t){const e={};for(const i in t){const s=t[i];e[i]=Si(s)?s.map(n):n(s)}return e}const tr=()=>{},Si=Array.isArray,Gf=/#/g,xg=/&/g,yg=/\//g,Mg=/=/g,wg=/\?/g,Hf=/\+/g,Sg=/%5B/g,bg=/%5D/g,kf=/%5E/g,Eg=/%60/g,Vf=/%7B/g,Tg=/%7C/g,Wf=/%7D/g,Ag=/%20/g;function xu(n){return encodeURI(""+n).replace(Tg,"|").replace(Sg,"[").replace(bg,"]")}function Pg(n){return xu(n).replace(Vf,"{").replace(Wf,"}").replace(kf,"^")}function ol(n){return xu(n).replace(Hf,"%2B").replace(Ag,"+").replace(Gf,"%23").replace(xg,"%26").replace(Eg,"`").replace(Vf,"{").replace(Wf,"}").replace(kf,"^")}function Rg(n){return ol(n).replace(Mg,"%3D")}function Cg(n){return xu(n).replace(Gf,"%23").replace(wg,"%3F")}function Ig(n){return n==null?"":Cg(n).replace(yg,"%2F")}function dr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Lg=/\/$/,Dg=n=>n.replace(Lg,"");function dc(n,t,e="/"){let i,s={},o="",r="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),s=n(o)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=Og(i??t,e),{fullPath:i+(o&&"?")+o+r,path:i,query:s,hash:dr(r)}}function Ug(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function mh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Ng(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&So(t.matched[i],e.matched[s])&&Xf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function So(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Xf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Fg(n[e],t[e]))return!1;return!0}function Fg(n,t){return Si(n)?gh(n,t):Si(t)?gh(t,n):n===t}function gh(n,t){return Si(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Og(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=e.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return e.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const ss={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fr;(function(n){n.pop="pop",n.push="push"})(fr||(fr={}));var er;(function(n){n.back="back",n.forward="forward",n.unknown=""})(er||(er={}));function Bg(n){if(!n)if(ao){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Dg(n)}const zg=/^[^#]+#/;function Gg(n,t){return n.replace(zg,"#")+t}function Hg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Wa=()=>({left:window.scrollX,top:window.scrollY});function kg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Hg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function vh(n,t){return(history.state?history.state.position-t:-1)+n}const rl=new Map;function Vg(n,t){rl.set(n,t)}function Wg(n){const t=rl.get(n);return rl.delete(n),t}let Xg=()=>location.protocol+"//"+location.host;function qf(n,t){const{pathname:e,search:i,hash:s}=t,o=n.indexOf("#");if(o>-1){let a=s.includes(n.slice(o))?n.slice(o).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),mh(c,"")}return mh(e,n)+i+s}function qg(n,t,e,i){let s=[],o=[],r=null;const a=({state:d})=>{const p=qf(n,location),v=e.value,y=t.value;let m=0;if(d){if(e.value=p,t.value=d,r&&r===v){r=null;return}m=y?d.position-y.position:0}else i(p);s.forEach(f=>{f(e.value,v,{delta:m,type:fr.pop,direction:m?m>0?er.forward:er.back:er.unknown})})};function c(){r=e.value}function l(d){s.push(d);const p=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return o.push(p),p}function h(){const{history:d}=window;d.state&&d.replaceState(Oe({},d.state,{scroll:Wa()}),"")}function u(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function _h(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Wa():null}}function jg(n){const{history:t,location:e}=window,i={value:qf(n,e)},s={value:t.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,l,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+c:Xg()+n+c;try{t[h?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),e[h?"replace":"assign"](d)}}function r(c,l){const h=Oe({},t.state,_h(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});o(c,h,!0),i.value=c}function a(c,l){const h=Oe({},s.value,t.state,{forward:c,scroll:Wa()});o(h.current,h,!0);const u=Oe({},_h(i.value,c,null),{position:h.position+1},l);o(c,u,!1),i.value=c}return{location:i,state:s,push:a,replace:r}}function Yg(n){n=Bg(n);const t=jg(n),e=qg(n,t.state,t.location,t.replace);function i(o,r=!0){r||e.pauseListeners(),history.go(o)}const s=Oe({location:"",base:n,go:i,createHref:Gg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function $g(n){return typeof n=="string"||n&&typeof n=="object"}function jf(n){return typeof n=="string"||typeof n=="symbol"}const Yf=Symbol("");var xh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(xh||(xh={}));function bo(n,t){return Oe(new Error,{type:n,[Yf]:!0},t)}function Gi(n,t){return n instanceof Error&&Yf in n&&(t==null||!!(n.type&t))}const yh="[^/]+?",Kg={sensitive:!1,strict:!1,start:!0,end:!0},Zg=/[.+*?^${}()[\]/\\]/g;function Jg(n,t){const e=Oe({},Kg,t),i=[];let s=e.start?"^":"";const o=[];for(const l of n){const h=l.length?[]:[90];e.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const d=l[u];let p=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(Zg,"\\$&"),p+=40;else if(d.type===1){const{value:v,repeatable:y,optional:m,regexp:f}=d;o.push({name:v,repeatable:y,optional:m});const A=f||yh;if(A!==yh){p+=10;try{new RegExp(`(${A})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${v}" (${A}): `+b.message)}}let S=y?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;u||(S=m&&l.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),s+=S,p+=20,m&&(p+=-8),y&&(p+=-20),A===".*"&&(p+=-50)}h.push(p)}i.push(h)}if(e.strict&&e.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const r=new RegExp(s,e.sensitive?"":"i");function a(l){const h=l.match(r),u={};if(!h)return null;for(let d=1;d<h.length;d++){const p=h[d]||"",v=o[d-1];u[v.name]=p&&v.repeatable?p.split("/"):p}return u}function c(l){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const p of d)if(p.type===0)h+=p.value;else if(p.type===1){const{value:v,repeatable:y,optional:m}=p,f=v in l?l[v]:"";if(Si(f)&&!y)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const A=Si(f)?f.join("/"):f;if(!A)if(m)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);h+=A}}return h||"/"}return{re:r,score:i,keys:o,parse:a,stringify:c}}function Qg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function $f(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const o=Qg(i[e],s[e]);if(o)return o;e++}if(Math.abs(s.length-i.length)===1){if(Mh(i))return 1;if(Mh(s))return-1}return s.length-i.length}function Mh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const tv={type:0,value:""},ev=/[a-zA-Z0-9_]/;function nv(n){if(!n)return[[]];if(n==="/")return[[tv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${l}": ${p}`)}let e=0,i=e;const s=[];let o;function r(){o&&s.push(o),o=[]}let a=0,c,l="",h="";function u(){l&&(e===0?o.push({type:0,value:l}):e===1||e===2||e===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:c==="/"?(l&&u(),r()):c===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:c==="("?e=2:ev.test(c)?d():(u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:e=3:h+=c;break;case 3:u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),r(),s}function iv(n,t,e){const i=Jg(nv(n.path),e),s=Oe(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function sv(n,t){const e=[],i=new Map;t=Eh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function o(u,d,p){const v=!p,y=Sh(u);y.aliasOf=p&&p.record;const m=Eh(t,u),f=[y];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of b)f.push(Sh(Oe({},y,{components:p?p.record.components:y.components,path:B,aliasOf:p?p.record:y})))}let A,S;for(const b of f){const{path:B}=b;if(d&&B[0]!=="/"){const I=d.record.path,R=I[I.length-1]==="/"?"":"/";b.path=d.record.path+(B&&R+B)}if(A=iv(b,d,m),p?p.alias.push(A):(S=S||A,S!==A&&S.alias.push(A),v&&u.name&&!bh(A)&&r(u.name)),Kf(A)&&c(A),y.children){const I=y.children;for(let R=0;R<I.length;R++)o(I[R],A,p&&p.children[R])}p=p||A}return S?()=>{r(S)}:tr}function r(u){if(jf(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return e}function c(u){const d=av(u,e);e.splice(d,0,u),u.record.name&&!bh(u)&&i.set(u.record.name,u)}function l(u,d){let p,v={},y,m;if("name"in u&&u.name){if(p=i.get(u.name),!p)throw bo(1,{location:u});m=p.record.name,v=Oe(wh(d.params,p.keys.filter(S=>!S.optional).concat(p.parent?p.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),u.params&&wh(u.params,p.keys.map(S=>S.name))),y=p.stringify(v)}else if(u.path!=null)y=u.path,p=e.find(S=>S.re.test(y)),p&&(v=p.parse(y),m=p.record.name);else{if(p=d.name?i.get(d.name):e.find(S=>S.re.test(d.path)),!p)throw bo(1,{location:u,currentLocation:d});m=p.record.name,v=Oe({},d.params,u.params),y=p.stringify(v)}const f=[];let A=p;for(;A;)f.unshift(A.record),A=A.parent;return{name:m,path:y,params:v,matched:f,meta:rv(f)}}n.forEach(u=>o(u));function h(){e.length=0,i.clear()}return{addRoute:o,resolve:l,removeRoute:r,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function wh(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Sh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:ov(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ov(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function bh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function rv(n){return n.reduce((t,e)=>Oe(t,e.meta),{})}function Eh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function av(n,t){let e=0,i=t.length;for(;e!==i;){const o=e+i>>1;$f(n,t[o])<0?i=o:e=o+1}const s=cv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function cv(n){let t=n;for(;t=t.parent;)if(Kf(t)&&$f(n,t)===0)return t}function Kf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function lv(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(Hf," "),r=o.indexOf("="),a=dr(r<0?o:o.slice(0,r)),c=r<0?null:dr(o.slice(r+1));if(a in t){let l=t[a];Si(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Th(n){let t="";for(let e in n){const i=n[e];if(e=Rg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Si(i)?i.map(o=>o&&ol(o)):[i&&ol(i)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+e,o!=null&&(t+="="+o))})}return t}function uv(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Si(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const hv=Symbol(""),Ah=Symbol(""),yu=Symbol(""),Zf=Symbol(""),al=Symbol("");function zo(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function fs(n,t,e,i,s,o=r=>r()){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(bo(4,{from:e,to:t})):d instanceof Error?c(d):$g(d)?c(bo(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),a())},h=o(()=>n.call(i&&i.instances[s],t,e,l));let u=Promise.resolve(h);n.length<3&&(u=u.then(l)),u.catch(d=>c(d))})}function fc(n,t,e,i,s=o=>o()){const o=[];for(const r of n)for(const a in r.components){let c=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(zf(c)){const h=(c.__vccOpts||c)[t];h&&o.push(fs(h,e,i,r,a,s))}else{let l=c();o.push(()=>l.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const u=_g(h)?h.default:h;r.mods[a]=h,r.components[a]=u;const p=(u.__vccOpts||u)[t];return p&&fs(p,e,i,r,a,s)()}))}}return o}function Ph(n){const t=Qi(yu),e=Qi(Zf),i=_i(()=>{const c=mo(n.to);return t.resolve(c)}),s=_i(()=>{const{matched:c}=i.value,{length:l}=c,h=c[l-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(So.bind(null,h));if(d>-1)return d;const p=Rh(c[l-2]);return l>1&&Rh(h)===p&&u[u.length-1].path!==p?u.findIndex(So.bind(null,c[l-2])):d}),o=_i(()=>s.value>-1&&mv(e.params,i.value.params)),r=_i(()=>s.value>-1&&s.value===e.matched.length-1&&Xf(e.params,i.value.params));function a(c={}){return pv(c)?t[mo(n.replace)?"replace":"push"](mo(n.to)).catch(tr):Promise.resolve()}return{route:i,href:_i(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const dv=Ln({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ph,setup(n,{slots:t}){const e=Oa(Ph(n)),{options:i}=Qi(yu),s=_i(()=>({[Ch(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Ch(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const o=t.default&&t.default(e);return n.custom?o:Ff("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},o)}}}),fv=dv;function pv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function mv(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Si(s)||s.length!==i.length||i.some((o,r)=>o!==s[r]))return!1}return!0}function Rh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ch=(n,t,e)=>n??t??e,gv=Ln({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Qi(al),s=_i(()=>n.route||i.value),o=Qi(Ah,0),r=_i(()=>{let l=mo(o);const{matched:h}=s.value;let u;for(;(u=h[l])&&!u.components;)l++;return l}),a=_i(()=>s.value.matched[r.value]);ua(Ah,_i(()=>r.value+1)),ua(hv,a),ua(al,s);const c=jt();return Ve(()=>[c.value,a.value,n.name],([l,h,u],[d,p,v])=>{h&&(h.instances[u]=l,p&&p!==h&&l&&l===d&&(h.leaveGuards.size||(h.leaveGuards=p.leaveGuards),h.updateGuards.size||(h.updateGuards=p.updateGuards))),l&&h&&(!p||!So(h,p)||!d)&&(h.enterCallbacks[u]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return Ih(e.default,{Component:d,route:l});const p=u.props[h],v=p?p===!0?l.params:typeof p=="function"?p(l):p:null,m=Ff(d,Oe({},v,t,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(u.instances[h]=null)},ref:c}));return Ih(e.default,{Component:m,route:l})||m}}});function Ih(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const vv=gv;function _v(n){const t=sv(n.routes,n),e=n.parseQuery||lv,i=n.stringifyQuery||Th,s=n.history,o=zo(),r=zo(),a=zo(),c=po(ss);let l=ss;ao&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=hc.bind(null,O=>""+O),u=hc.bind(null,Ig),d=hc.bind(null,dr);function p(O,lt){let ot,ht;return jf(O)?(ot=t.getRecordMatcher(O),ht=lt):ht=O,t.addRoute(ht,ot)}function v(O){const lt=t.getRecordMatcher(O);lt&&t.removeRoute(lt)}function y(){return t.getRoutes().map(O=>O.record)}function m(O){return!!t.getRecordMatcher(O)}function f(O,lt){if(lt=Oe({},lt||c.value),typeof O=="string"){const T=dc(e,O,lt.path),L=t.resolve({path:T.path},lt),F=s.createHref(T.fullPath);return Oe(T,L,{params:d(L.params),hash:dr(T.hash),redirectedFrom:void 0,href:F})}let ot;if(O.path!=null)ot=Oe({},O,{path:dc(e,O.path,lt.path).path});else{const T=Oe({},O.params);for(const L in T)T[L]==null&&delete T[L];ot=Oe({},O,{params:u(T)}),lt.params=u(lt.params)}const ht=t.resolve(ot,lt),Mt=O.hash||"";ht.params=h(d(ht.params));const it=Ug(i,Oe({},O,{hash:Pg(Mt),path:ht.path})),g=s.createHref(it);return Oe({fullPath:it,hash:Mt,query:i===Th?uv(O.query):O.query||{}},ht,{redirectedFrom:void 0,href:g})}function A(O){return typeof O=="string"?dc(e,O,c.value.path):Oe({},O)}function S(O,lt){if(l!==O)return bo(8,{from:lt,to:O})}function b(O){return R(O)}function B(O){return b(Oe(A(O),{replace:!0}))}function I(O){const lt=O.matched[O.matched.length-1];if(lt&&lt.redirect){const{redirect:ot}=lt;let ht=typeof ot=="function"?ot(O):ot;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=A(ht):{path:ht},ht.params={}),Oe({query:O.query,hash:O.hash,params:ht.path!=null?{}:O.params},ht)}}function R(O,lt){const ot=l=f(O),ht=c.value,Mt=O.state,it=O.force,g=O.replace===!0,T=I(ot);if(T)return R(Oe(A(T),{state:typeof T=="object"?Oe({},Mt,T.state):Mt,force:it,replace:g}),lt||ot);const L=ot;L.redirectedFrom=lt;let F;return!it&&Ng(i,ht,ot)&&(F=bo(16,{to:L,from:ht}),wt(ht,ht,!0,!1)),(F?Promise.resolve(F):M(L,ht)).catch(N=>Gi(N)?Gi(N,2)?N:yt(N):X(N,L,ht)).then(N=>{if(N){if(Gi(N,2))return R(Oe({replace:g},A(N.to),{state:typeof N.to=="object"?Oe({},Mt,N.to.state):Mt,force:it}),lt||L)}else N=U(L,ht,!0,g,Mt);return E(L,ht,N),N})}function z(O,lt){const ot=S(O,lt);return ot?Promise.reject(ot):Promise.resolve()}function Q(O){const lt=at.values().next().value;return lt&&typeof lt.runWithContext=="function"?lt.runWithContext(O):O()}function M(O,lt){let ot;const[ht,Mt,it]=xv(O,lt);ot=fc(ht.reverse(),"beforeRouteLeave",O,lt);for(const T of ht)T.leaveGuards.forEach(L=>{ot.push(fs(L,O,lt))});const g=z.bind(null,O,lt);return ot.push(g),bt(ot).then(()=>{ot=[];for(const T of o.list())ot.push(fs(T,O,lt));return ot.push(g),bt(ot)}).then(()=>{ot=fc(Mt,"beforeRouteUpdate",O,lt);for(const T of Mt)T.updateGuards.forEach(L=>{ot.push(fs(L,O,lt))});return ot.push(g),bt(ot)}).then(()=>{ot=[];for(const T of it)if(T.beforeEnter)if(Si(T.beforeEnter))for(const L of T.beforeEnter)ot.push(fs(L,O,lt));else ot.push(fs(T.beforeEnter,O,lt));return ot.push(g),bt(ot)}).then(()=>(O.matched.forEach(T=>T.enterCallbacks={}),ot=fc(it,"beforeRouteEnter",O,lt,Q),ot.push(g),bt(ot))).then(()=>{ot=[];for(const T of r.list())ot.push(fs(T,O,lt));return ot.push(g),bt(ot)}).catch(T=>Gi(T,8)?T:Promise.reject(T))}function E(O,lt,ot){a.list().forEach(ht=>Q(()=>ht(O,lt,ot)))}function U(O,lt,ot,ht,Mt){const it=S(O,lt);if(it)return it;const g=lt===ss,T=ao?history.state:{};ot&&(ht||g?s.replace(O.fullPath,Oe({scroll:g&&T&&T.scroll},Mt)):s.push(O.fullPath,Mt)),c.value=O,wt(O,lt,ot,g),yt()}let k;function et(){k||(k=s.listen((O,lt,ot)=>{if(!pt.listening)return;const ht=f(O),Mt=I(ht);if(Mt){R(Oe(Mt,{replace:!0}),ht).catch(tr);return}l=ht;const it=c.value;ao&&Vg(vh(it.fullPath,ot.delta),Wa()),M(ht,it).catch(g=>Gi(g,12)?g:Gi(g,2)?(R(g.to,ht).then(T=>{Gi(T,20)&&!ot.delta&&ot.type===fr.pop&&s.go(-1,!1)}).catch(tr),Promise.reject()):(ot.delta&&s.go(-ot.delta,!1),X(g,ht,it))).then(g=>{g=g||U(ht,it,!1),g&&(ot.delta&&!Gi(g,8)?s.go(-ot.delta,!1):ot.type===fr.pop&&Gi(g,20)&&s.go(-1,!1)),E(ht,it,g)}).catch(tr)}))}let rt=zo(),$=zo(),nt;function X(O,lt,ot){yt(O);const ht=$.list();return ht.length?ht.forEach(Mt=>Mt(O,lt,ot)):console.error(O),Promise.reject(O)}function vt(){return nt&&c.value!==ss?Promise.resolve():new Promise((O,lt)=>{rt.add([O,lt])})}function yt(O){return nt||(nt=!O,et(),rt.list().forEach(([lt,ot])=>O?ot(O):lt()),rt.reset()),O}function wt(O,lt,ot,ht){const{scrollBehavior:Mt}=n;if(!ao||!Mt)return Promise.resolve();const it=!ot&&Wg(vh(O.fullPath,0))||(ht||!ot)&&history.state&&history.state.scroll||null;return af().then(()=>Mt(O,lt,it)).then(g=>g&&kg(g)).catch(g=>X(g,O,lt))}const Dt=O=>s.go(O);let Wt;const at=new Set,pt={currentRoute:c,listening:!0,addRoute:p,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:y,resolve:f,options:n,push:b,replace:B,go:Dt,back:()=>Dt(-1),forward:()=>Dt(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:$.add,isReady:vt,install(O){const lt=this;O.component("RouterLink",fv),O.component("RouterView",vv),O.config.globalProperties.$router=lt,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>mo(c)}),ao&&!Wt&&c.value===ss&&(Wt=!0,b(s.location).catch(Mt=>{}));const ot={};for(const Mt in ss)Object.defineProperty(ot,Mt,{get:()=>c.value[Mt],enumerable:!0});O.provide(yu,lt),O.provide(Zf,ef(ot)),O.provide(al,c);const ht=O.unmount;at.add(O),O.unmount=function(){at.delete(O),at.size<1&&(l=ss,k&&k(),k=null,c.value=ss,Wt=!1,nt=!1),ht()}}};function bt(O){return O.reduce((lt,ot)=>lt.then(()=>Q(ot)),Promise.resolve())}return pt}function xv(n,t){const e=[],i=[],s=[],o=Math.max(t.matched.length,n.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(n.matched.find(l=>So(l,a))?i.push(a):e.push(a));const c=n.matched[r];c&&(t.matched.find(l=>So(l,c))||s.push(c))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mu="169",yv=0,Lh=1,Mv=2,Jf=1,wv=2,ji=3,_s=0,qn=1,be=2,ms=0,_o=1,Dh=2,Uh=3,Nh=4,Sv=5,Ds=100,bv=101,Ev=102,Tv=103,Av=104,Pv=200,Rv=201,Cv=202,Iv=203,cl=204,ll=205,Lv=206,Dv=207,Uv=208,Nv=209,Fv=210,Ov=211,Bv=212,zv=213,Gv=214,ul=0,hl=1,dl=2,Eo=3,fl=4,pl=5,ml=6,gl=7,Qf=0,Hv=1,kv=2,gs=0,Vv=1,Wv=2,Xv=3,qv=4,jv=5,Yv=6,$v=7,tp=300,To=301,Ao=302,Ta=303,vl=304,Xa=306,Ke=1e3,Ns=1001,_l=1002,ri=1003,Kv=1004,Nr=1005,xi=1006,pc=1007,Ci=1008,ts=1009,ep=1010,np=1011,pr=1012,wu=1013,zs=1014,Ki=1015,Sr=1016,Su=1017,bu=1018,Po=1020,ip=35902,sp=1021,op=1022,Xn=1023,rp=1024,ap=1025,xo=1026,Ro=1027,cp=1028,Eu=1029,lp=1030,Tu=1031,Au=1033,fa=33776,pa=33777,ma=33778,ga=33779,xl=35840,yl=35841,Ml=35842,wl=35843,Sl=36196,bl=37492,El=37496,Tl=37808,Al=37809,Pl=37810,Rl=37811,Cl=37812,Il=37813,Ll=37814,Dl=37815,Ul=37816,Nl=37817,Fl=37818,Ol=37819,Bl=37820,zl=37821,va=36492,Gl=36494,Hl=36495,up=36283,kl=36284,Vl=36285,Wl=36286,Zv=3200,Jv=3201,hp=0,Qv=1,ps="",vi="srgb",Ms="srgb-linear",Pu="display-p3",qa="display-p3-linear",Aa="linear",Qe="srgb",Pa="rec709",Ra="p3",qs=7680,Fh=519,t_=512,e_=513,n_=514,dp=515,i_=516,s_=517,o_=518,r_=519,Oh=35044,Bh="300 es",Zi=2e3,Ca=2001;class Lo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zh=1234567;const nr=Math.PI/180,mr=180/Math.PI;function Vs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[e&63|128]+En[e>>8&255]+"-"+En[e>>16&255]+En[e>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function _n(n,t,e){return Math.max(t,Math.min(e,n))}function Ru(n,t){return(n%t+t)%t}function a_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function c_(n,t,e){return n!==t?(e-n)/(t-n):0}function ir(n,t,e){return(1-e)*n+e*t}function l_(n,t,e,i){return ir(n,t,1-Math.exp(-e*i))}function u_(n,t=1){return t-Math.abs(Ru(n,t*2)-t)}function h_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function d_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function f_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function p_(n,t){return n+Math.random()*(t-n)}function m_(n){return n*(.5-Math.random())}function g_(n){n!==void 0&&(zh=n);let t=zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function v_(n){return n*nr}function __(n){return n*mr}function x_(n){return(n&n-1)===0&&n!==0}function y_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function M_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function w_(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),d=r((t-i)/2),p=o((i-t)/2),v=r((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*v,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*v,a*l);break;case"ZYZ":n.set(c*v,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function co(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const le={DEG2RAD:nr,RAD2DEG:mr,generateUUID:Vs,clamp:_n,euclideanModulo:Ru,mapLinear:a_,inverseLerp:c_,lerp:ir,damp:l_,pingpong:u_,smoothstep:h_,smootherstep:d_,randInt:f_,randFloat:p_,randFloatSpread:m_,seededRandom:g_,degToRad:v_,radToDeg:__,isPowerOfTwo:x_,ceilPowerOfTwo:y_,floorPowerOfTwo:M_,setQuaternionFromProperEuler:w_,normalize:Nn,denormalize:co};class Jt{constructor(t=0,e=0){Jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_n(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Se{constructor(t,e,i,s,o,r,a,c,l){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],v=i[8],y=s[0],m=s[3],f=s[6],A=s[1],S=s[4],b=s[7],B=s[2],I=s[5],R=s[8];return o[0]=r*y+a*A+c*B,o[3]=r*m+a*S+c*I,o[6]=r*f+a*b+c*R,o[1]=l*y+h*A+u*B,o[4]=l*m+h*S+u*I,o[7]=l*f+h*b+u*R,o[2]=d*y+p*A+v*B,o[5]=d*m+p*S+v*I,o[8]=d*f+p*b+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,p=l*o-r*c,v=e*u+i*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return t[0]=u*y,t[1]=(s*l-h*i)*y,t[2]=(a*i-s*r)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*o-a*e)*y,t[6]=p*y,t[7]=(i*c-l*e)*y,t[8]=(r*e-i*o)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mc.makeScale(t,e)),this}rotate(t){return this.premultiply(mc.makeRotation(-t)),this}translate(t,e){return this.premultiply(mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new Se;function fp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function S_(){const n=gr("canvas");return n.style.display="block",n}const Gh={};function _a(n){n in Gh||(Gh[n]=!0,console.warn(n))}function b_(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function E_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function T_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Hh=new Se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kh=new Se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Go={[Ms]:{transfer:Aa,primaries:Pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[vi]:{transfer:Qe,primaries:Pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[qa]:{transfer:Aa,primaries:Ra,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(kh),fromReference:n=>n.applyMatrix3(Hh)},[Pu]:{transfer:Qe,primaries:Ra,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(kh),fromReference:n=>n.applyMatrix3(Hh).convertLinearToSRGB()}},A_=new Set([Ms,qa]),De={enabled:!0,_workingColorSpace:Ms,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!A_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Go[t].toReference,s=Go[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Go[n].primaries},getTransfer:function(n){return n===ps?Aa:Go[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Go[t].luminanceCoefficients)}};function yo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let js;class P_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{js===void 0&&(js=gr("canvas")),js.width=t.width,js.height=t.height;const i=js.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=yo(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yo(e[i]/255)*255):e[i]=yo(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let R_=0;class pp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Vs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(vc(s[r].image)):o.push(vc(s[r]))}else o=vc(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function vc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?P_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C_=0;class Rn extends Lo{constructor(t=Rn.DEFAULT_IMAGE,e=Rn.DEFAULT_MAPPING,i=Ns,s=Ns,o=xi,r=Ci,a=Xn,c=ts,l=Rn.DEFAULT_ANISOTROPY,h=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Vs(),this.name="",this.source=new pp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ke:t.x=t.x-Math.floor(t.x);break;case Ns:t.x=t.x<0?0:1;break;case _l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ke:t.y=t.y-Math.floor(t.y);break;case Ns:t.y=t.y<0?0:1;break;case _l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=tp;Rn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,e=0,i=0,s=1){He.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],v=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(v+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,b=(p+1)/2,B=(f+1)/2,I=(h+d)/4,R=(u+y)/4,z=(v+m)/4;return S>b&&S>B?S<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(S),s=I/i,o=R/i):b>B?b<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(b),i=I/s,o=z/s):B<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(B),i=R/o,s=z/o),this.set(i,s,o,e),this}let A=Math.sqrt((m-v)*(m-v)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(u-y)/A,this.z=(d-h)/A,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I_ extends Lo{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new pp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends I_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class mp extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class L_ extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=o[r+0],p=o[r+1],v=o[r+2],y=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=v,t[e+3]=y;return}if(u!==y||c!==d||l!==p||h!==v){let m=1-a;const f=c*d+l*p+h*v+u*y,A=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const B=Math.sqrt(S),I=Math.atan2(B,f*A);m=Math.sin(m*I)/B,a=Math.sin(a*I)/B}const b=a*A;if(c=c*m+d*b,l=l*m+p*b,h=h*m+v*b,u=u*m+y*b,m===1-a){const B=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=B,l*=B,h*=B,u*=B}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=o[r],d=o[r+1],p=o[r+2],v=o[r+3];return t[e]=a*v+h*u+c*p-l*d,t[e+1]=c*v+h*d+l*u-a*p,t[e+2]=l*v+h*p+a*d-c*u,t[e+3]=h*v-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(o/2),d=c(i/2),p=c(s/2),v=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*p*v,this._y=l*p*u-d*h*v,this._z=l*h*v+d*p*u,this._w=l*h*u-d*p*v;break;case"YXZ":this._x=d*h*u+l*p*v,this._y=l*p*u-d*h*v,this._z=l*h*v-d*p*u,this._w=l*h*u+d*p*v;break;case"ZXY":this._x=d*h*u-l*p*v,this._y=l*p*u+d*h*v,this._z=l*h*v+d*p*u,this._w=l*h*u-d*p*v;break;case"ZYX":this._x=d*h*u-l*p*v,this._y=l*p*u+d*h*v,this._z=l*h*v-d*p*u,this._w=l*h*u+d*p*v;break;case"YZX":this._x=d*h*u+l*p*v,this._y=l*p*u+d*h*v,this._z=l*h*v-d*p*u,this._w=l*h*u-d*p*v;break;case"XZY":this._x=d*h*u-l*p*v,this._y=l*p*u-d*h*v,this._z=l*h*v+d*p*u,this._w=l*h*u+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_n(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,e=0,i=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+c*l+r*u-a*h,this.y=i+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _c.copy(this).projectOnVector(t),this.sub(_c)}reflect(t){return this.sub(_c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_n(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new J,Vh=new br;class Er{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,pi):pi.fromBufferAttribute(o,r),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),Or.subVectors(this.max,Ho),Ys.subVectors(t.a,Ho),$s.subVectors(t.b,Ho),Ks.subVectors(t.c,Ho),os.subVectors($s,Ys),rs.subVectors(Ks,$s),bs.subVectors(Ys,Ks);let e=[0,-os.z,os.y,0,-rs.z,rs.y,0,-bs.z,bs.y,os.z,0,-os.x,rs.z,0,-rs.x,bs.z,0,-bs.x,-os.y,os.x,0,-rs.y,rs.x,0,-bs.y,bs.x,0];return!xc(e,Ys,$s,Ks,Or)||(e=[1,0,0,0,1,0,0,0,1],!xc(e,Ys,$s,Ks,Or))?!1:(Br.crossVectors(os,rs),e=[Br.x,Br.y,Br.z],xc(e,Ys,$s,Ks,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hi=[new J,new J,new J,new J,new J,new J,new J,new J],pi=new J,Fr=new Er,Ys=new J,$s=new J,Ks=new J,os=new J,rs=new J,bs=new J,Ho=new J,Or=new J,Br=new J,Es=new J;function xc(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Es.fromArray(n,o);const a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=t.dot(Es),l=e.dot(Es),h=i.dot(Es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const D_=new Er,ko=new J,yc=new J;class ja{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):D_.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const e=ko.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ko,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(yc)),this.expandByPoint(ko.copy(t.center).sub(yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new J,Mc=new J,zr=new J,as=new J,wc=new J,Gr=new J,Sc=new J;class gp{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Mc.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),as.copy(this.origin).sub(Mc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(zr),a=as.dot(this.direction),c=-as.dot(zr),l=as.lengthSq(),h=Math.abs(1-r*r);let u,d,p,v;if(h>0)if(u=r*c-a,d=r*a-c,v=o*h,u>=0)if(d>=-v)if(d<=v){const y=1/h;u*=y,d*=y,p=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-v?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+l):d<=v?(u=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mc).addScaledVector(zr,d),p}intersectSphere(t,e){ki.subVectors(t.center,this.origin);const i=ki.dot(this.direction),s=ki.dot(ki)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,i,s,o){wc.subVectors(e,t),Gr.subVectors(i,t),Sc.crossVectors(wc,Gr);let r=this.direction.dot(Sc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;as.subVectors(this.origin,t);const c=a*this.direction.dot(Gr.crossVectors(as,Gr));if(c<0)return null;const l=a*this.direction.dot(wc.cross(as));if(l<0||c+l>r)return null;const h=-a*as.dot(Sc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,e,i,s,o,r,a,c,l,h,u,d,p,v,y,m){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,h,u,d,p,v,y,m)}set(t,e,i,s,o,r,a,c,l,h,u,d,p,v,y,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=o,f[5]=r,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=v,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Zs.setFromMatrixColumn(t,0).length(),o=1/Zs.setFromMatrixColumn(t,1).length(),r=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,p=r*u,v=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+v*l,e[5]=d-y*l,e[9]=-a*c,e[2]=y-d*l,e[6]=v+p*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,v=l*h,y=l*u;e[0]=d+y*a,e[4]=v*a-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-v,e[6]=y+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,v=l*h,y=l*u;e[0]=d-y*a,e[4]=-r*u,e[8]=v+p*a,e[1]=p+v*a,e[5]=r*h,e[9]=y-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,p=r*u,v=a*h,y=a*u;e[0]=c*h,e[4]=v*l-p,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=p*l-v,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,p=r*l,v=a*c,y=a*l;e[0]=c*h,e[4]=y-d*u,e[8]=v*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+v,e[10]=d-y*u}else if(t.order==="XZY"){const d=r*c,p=r*l,v=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=r*h,e[9]=p*u-v,e[2]=v*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(U_,t,N_)}lookAt(t,e,i){const s=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),cs.crossVectors(i,Kn),cs.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),cs.crossVectors(i,Kn)),cs.normalize(),Hr.crossVectors(Kn,cs),s[0]=cs.x,s[4]=Hr.x,s[8]=Kn.x,s[1]=cs.y,s[5]=Hr.y,s[9]=Kn.y,s[2]=cs.z,s[6]=Hr.z,s[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],v=i[2],y=i[6],m=i[10],f=i[14],A=i[3],S=i[7],b=i[11],B=i[15],I=s[0],R=s[4],z=s[8],Q=s[12],M=s[1],E=s[5],U=s[9],k=s[13],et=s[2],rt=s[6],$=s[10],nt=s[14],X=s[3],vt=s[7],yt=s[11],wt=s[15];return o[0]=r*I+a*M+c*et+l*X,o[4]=r*R+a*E+c*rt+l*vt,o[8]=r*z+a*U+c*$+l*yt,o[12]=r*Q+a*k+c*nt+l*wt,o[1]=h*I+u*M+d*et+p*X,o[5]=h*R+u*E+d*rt+p*vt,o[9]=h*z+u*U+d*$+p*yt,o[13]=h*Q+u*k+d*nt+p*wt,o[2]=v*I+y*M+m*et+f*X,o[6]=v*R+y*E+m*rt+f*vt,o[10]=v*z+y*U+m*$+f*yt,o[14]=v*Q+y*k+m*nt+f*wt,o[3]=A*I+S*M+b*et+B*X,o[7]=A*R+S*E+b*rt+B*vt,o[11]=A*z+S*U+b*$+B*yt,o[15]=A*Q+S*k+b*nt+B*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],v=t[3],y=t[7],m=t[11],f=t[15];return v*(+o*c*u-s*l*u-o*a*d+i*l*d+s*a*p-i*c*p)+y*(+e*c*p-e*l*d+o*r*d-s*r*p+s*l*h-o*c*h)+m*(+e*l*u-e*a*p-o*r*u+i*r*p+o*a*h-i*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*r*u-i*r*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],v=t[12],y=t[13],m=t[14],f=t[15],A=u*m*l-y*d*l+y*c*p-a*m*p-u*c*f+a*d*f,S=v*d*l-h*m*l-v*c*p+r*m*p+h*c*f-r*d*f,b=h*y*l-v*u*l+v*a*p-r*y*p-h*a*f+r*u*f,B=v*u*c-h*y*c-v*a*d+r*y*d+h*a*m-r*u*m,I=e*A+i*S+s*b+o*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return t[0]=A*R,t[1]=(y*d*o-u*m*o-y*s*p+i*m*p+u*s*f-i*d*f)*R,t[2]=(a*m*o-y*c*o+y*s*l-i*m*l-a*s*f+i*c*f)*R,t[3]=(u*c*o-a*d*o-u*s*l+i*d*l+a*s*p-i*c*p)*R,t[4]=S*R,t[5]=(h*m*o-v*d*o+v*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(v*c*o-r*m*o-v*s*l+e*m*l+r*s*f-e*c*f)*R,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*p+e*c*p)*R,t[8]=b*R,t[9]=(v*u*o-h*y*o-v*i*p+e*y*p+h*i*f-e*u*f)*R,t[10]=(r*y*o-v*a*o+v*i*l-e*y*l-r*i*f+e*a*f)*R,t[11]=(h*a*o-r*u*o-h*i*l+e*u*l+r*i*p-e*a*p)*R,t[12]=B*R,t[13]=(h*y*s-v*u*s+v*i*d-e*y*d-h*i*m+e*u*m)*R,t[14]=(v*a*s-r*y*s-v*i*c+e*y*c+r*i*m-e*a*m)*R,t[15]=(r*u*s-h*a*s+h*i*c-e*u*c-r*i*d+e*a*d)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,p=o*h,v=o*u,y=r*h,m=r*u,f=a*u,A=c*l,S=c*h,b=c*u,B=i.x,I=i.y,R=i.z;return s[0]=(1-(y+f))*B,s[1]=(p+b)*B,s[2]=(v-S)*B,s[3]=0,s[4]=(p-b)*I,s[5]=(1-(d+f))*I,s[6]=(m+A)*I,s[7]=0,s[8]=(v+S)*R,s[9]=(m-A)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Zs.set(s[0],s[1],s[2]).length();const r=Zs.set(s[4],s[5],s[6]).length(),a=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],mi.copy(this);const l=1/o,h=1/r,u=1/a;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,e.setFromRotationMatrix(mi),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Zi){const c=this.elements,l=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let p,v;if(a===Zi)p=-(r+o)/(r-o),v=-2*r*o/(r-o);else if(a===Ca)p=-r/(r-o),v=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Zi){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*l,p=(i+s)*h;let v,y;if(a===Zi)v=(r+o)*u,y=-2*u;else if(a===Ca)v=o*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Zs=new J,mi=new tn,U_=new J(0,0,0),N_=new J(1,1,1),cs=new J,Hr=new J,Kn=new J,Wh=new tn,Xh=new br;class Ui{constructor(t=0,e=0,i=0,s=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(_n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(_n(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_n(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let F_=0;const qh=new J,Js=new br,Vi=new tn,kr=new J,Vo=new J,O_=new J,B_=new br,jh=new J(1,0,0),Yh=new J(0,1,0),$h=new J(0,0,1),Kh={type:"added"},z_={type:"removed"},Qs={type:"childadded",child:null},bc={type:"childremoved",child:null};class Mn extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new J,e=new Ui,i=new br,s=new J(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tn},normalMatrix:{value:new Se}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(jh,t)}rotateY(t){return this.rotateOnAxis(Yh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jh,t)}translateY(t){return this.translateOnAxis(Yh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?kr.copy(t):kr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Vo,kr,this.up):Vi.lookAt(kr,Vo,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Vi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(z_),bc.child=t,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,O_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,B_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),v=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Mn.DEFAULT_UP=new J(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new J,Wi=new J,Ec=new J,Xi=new J,to=new J,eo=new J,Zh=new J,Tc=new J,Ac=new J,Pc=new J,Rc=new He,Cc=new He,Ic=new He;class yi{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),gi.subVectors(t,e),s.cross(gi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){gi.subVectors(s,e),Wi.subVectors(i,e),Ec.subVectors(t,e);const r=gi.dot(gi),a=gi.dot(Wi),c=gi.dot(Ec),l=Wi.dot(Wi),h=Wi.dot(Ec),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,v=(r*h-a*c)*d;return o.set(1-p-v,v,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,Xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Xi.x),c.addScaledVector(r,Xi.y),c.addScaledVector(a,Xi.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return Rc.setScalar(0),Cc.setScalar(0),Ic.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,i),Ic.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Rc,o.x),r.addScaledVector(Cc,o.y),r.addScaledVector(Ic,o.z),r}static isFrontFacing(t,e,i,s){return gi.subVectors(i,e),Wi.subVectors(t,e),gi.cross(Wi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),gi.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return yi.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;to.subVectors(s,i),eo.subVectors(o,i),Tc.subVectors(t,i);const c=to.dot(Tc),l=eo.dot(Tc);if(c<=0&&l<=0)return e.copy(i);Ac.subVectors(t,s);const h=to.dot(Ac),u=eo.dot(Ac);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(to,r);Pc.subVectors(t,o);const p=to.dot(Pc),v=eo.dot(Pc);if(v>=0&&p<=v)return e.copy(o);const y=p*l-c*v;if(y<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(i).addScaledVector(eo,a);const m=h*v-p*u;if(m<=0&&u-h>=0&&p-v>=0)return Zh.subVectors(o,s),a=(u-h)/(u-h+(p-v)),e.copy(s).addScaledVector(Zh,a);const f=1/(m+y+d);return r=y*f,a=d*f,e.copy(i).addScaledVector(to,r).addScaledVector(eo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function Lc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class xe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=De.workingColorSpace){return this.r=t,this.g=e,this.b=i,De.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=De.workingColorSpace){if(t=Ru(t,1),e=_n(e,0,1),i=_n(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Lc(r,o,t+1/3),this.g=Lc(r,o,t),this.b=Lc(r,o,t-1/3)}return De.toWorkingColorSpace(this,s),this}setStyle(t,e=vi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vi){const i=_p[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}copyLinearToSRGB(t){return this.r=gc(t.r),this.g=gc(t.g),this.b=gc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return De.fromWorkingColorSpace(Tn.copy(this),t),Math.round(_n(Tn.r*255,0,255))*65536+Math.round(_n(Tn.g*255,0,255))*256+Math.round(_n(Tn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=De.workingColorSpace){De.fromWorkingColorSpace(Tn.copy(this),e);const i=Tn.r,s=Tn.g,o=Tn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case i:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-i)/u+2;break;case o:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=De.workingColorSpace){return De.fromWorkingColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=vi){De.fromWorkingColorSpace(Tn.copy(this),t);const e=Tn.r,i=Tn.g,s=Tn.b;return t!==vi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+e,ls.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ls),t.getHSL(Vr);const i=ir(ls.h,Vr.h,e),s=ir(ls.s,Vr.s,e),o=ir(ls.l,Vr.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new xe;xe.NAMES=_p;let G_=0;class Do extends Lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=_o,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ll,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cl&&(i.blendSrc=this.blendSrc),this.blendDst!==ll&&(i.blendDst=this.blendDst),this.blendEquation!==Ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class es extends Do{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new J,Wr=new Jt;class Li{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oh,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=co(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=co(e,this.array)),e}setX(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=co(e,this.array)),e}setY(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=co(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=co(e,this.array)),e}setW(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),i=Nn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),i=Nn(i,this.array),s=Nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),i=Nn(i,this.array),s=Nn(s,this.array),o=Nn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oh&&(t.usage=this.usage),t}}class xp extends Li{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yp extends Li{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class en extends Li{constructor(t,e,i){super(new Float32Array(t),e,i)}}let H_=0;const oi=new tn,Dc=new Mn,no=new J,Zn=new Er,Wo=new Er,vn=new J;class Sn extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fp(t)?yp:xp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Se().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,i){return oi.makeTranslation(t,e,i),this.applyMatrix4(oi),this}scale(t,e,i){return oi.makeScale(t,e,i),this.applyMatrix4(oi),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new en(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Zn.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(Zn.min,Wo.min),Zn.expandByPoint(vn),vn.addVectors(Zn.max,Wo.max),Zn.expandByPoint(vn)):(Zn.expandByPoint(Wo.min),Zn.expandByPoint(Wo.max))}Zn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)vn.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(vn));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)vn.fromBufferAttribute(a,l),c&&(no.fromBufferAttribute(t,l),vn.add(no)),s=Math.max(s,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<i.count;z++)a[z]=new J,c[z]=new J;const l=new J,h=new J,u=new J,d=new Jt,p=new Jt,v=new Jt,y=new J,m=new J;function f(z,Q,M){l.fromBufferAttribute(i,z),h.fromBufferAttribute(i,Q),u.fromBufferAttribute(i,M),d.fromBufferAttribute(o,z),p.fromBufferAttribute(o,Q),v.fromBufferAttribute(o,M),h.sub(l),u.sub(l),p.sub(d),v.sub(d);const E=1/(p.x*v.y-v.x*p.y);isFinite(E)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(E),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(E),a[z].add(y),a[Q].add(y),a[M].add(y),c[z].add(m),c[Q].add(m),c[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let z=0,Q=A.length;z<Q;++z){const M=A[z],E=M.start,U=M.count;for(let k=E,et=E+U;k<et;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new J,b=new J,B=new J,I=new J;function R(z){B.fromBufferAttribute(s,z),I.copy(B);const Q=a[z];S.copy(Q),S.sub(B.multiplyScalar(B.dot(Q))).normalize(),b.crossVectors(I,Q);const E=b.dot(c[z])<0?-1:1;r.setXYZW(z,S.x,S.y,S.z,E)}for(let z=0,Q=A.length;z<Q;++z){const M=A[z],E=M.start,U=M.count;for(let k=E,et=E+U;k<et;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Li(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new J,o=new J,r=new J,a=new J,c=new J,l=new J,h=new J,u=new J;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,y),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,v=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let f=0;f<h;f++)d[v++]=l[p++]}return new Li(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Sn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new tn,Ts=new gp,Xr=new ja,Qh=new J,qr=new J,jr=new J,Yr=new J,Uc=new J,$r=new J,td=new J,Kr=new J;class x extends Mn{constructor(t=new Sn,e=new es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){$r.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Uc.fromBufferAttribute(u,t),r?$r.addScaledVector(Uc,h):$r.addScaledVector(Uc.sub(e),h))}e.add($r)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(o),Ts.copy(t.ray).recast(t.near),!(Xr.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Xr,Qh)===null||Ts.origin.distanceToSquared(Qh)>(t.far-t.near)**2))&&(Jh.copy(o).invert(),Ts.copy(t.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,y=d.length;v<y;v++){const m=d[v],f=r[m.materialIndex],A=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,B=S;b<B;b+=3){const I=a.getX(b),R=a.getX(b+1),z=a.getX(b+2);s=Zr(this,f,t,i,l,h,u,I,R,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const A=a.getX(m),S=a.getX(m+1),b=a.getX(m+2);s=Zr(this,r,t,i,l,h,u,A,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let v=0,y=d.length;v<y;v++){const m=d[v],f=r[m.materialIndex],A=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,B=S;b<B;b+=3){const I=b,R=b+1,z=b+2;s=Zr(this,f,t,i,l,h,u,I,R,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const A=m,S=m+1,b=m+2;s=Zr(this,r,t,i,l,h,u,A,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function k_(n,t,e,i,s,o,r,a){let c;if(t.side===qn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===_s,a),c===null)return null;Kr.copy(a),Kr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Kr);return l<e.near||l>e.far?null:{distance:l,point:Kr.clone(),object:n}}function Zr(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,qr),n.getVertexPosition(c,jr),n.getVertexPosition(l,Yr);const h=k_(n,t,e,i,qr,jr,Yr,td);if(h){const u=new J;yi.getBarycoord(td,qr,jr,Yr,u),s&&(h.uv=yi.getInterpolatedAttribute(s,a,c,l,u,new Jt)),o&&(h.uv1=yi.getInterpolatedAttribute(o,a,c,l,u,new Jt)),r&&(h.normal=yi.getInterpolatedAttribute(r,a,c,l,u,new J),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new J,materialIndex:0};yi.getNormal(qr,jr,Yr,d.normal),h.face=d,h.barycoord=u}return h}class yn extends Sn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,p=0;v("z","y","x",-1,-1,i,e,t,r,o,0),v("z","y","x",1,-1,i,e,-t,r,o,1),v("x","z","y",1,1,t,i,e,s,r,2),v("x","z","y",1,-1,t,i,-e,s,r,3),v("x","y","z",1,-1,t,e,i,s,o,4),v("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(u,2));function v(y,m,f,A,S,b,B,I,R,z,Q){const M=b/R,E=B/z,U=b/2,k=B/2,et=I/2,rt=R+1,$=z+1;let nt=0,X=0;const vt=new J;for(let yt=0;yt<$;yt++){const wt=yt*E-k;for(let Dt=0;Dt<rt;Dt++){const Wt=Dt*M-U;vt[y]=Wt*A,vt[m]=wt*S,vt[f]=et,l.push(vt.x,vt.y,vt.z),vt[y]=0,vt[m]=0,vt[f]=I>0?1:-1,h.push(vt.x,vt.y,vt.z),u.push(Dt/R),u.push(1-yt/z),nt+=1}}for(let yt=0;yt<z;yt++)for(let wt=0;wt<R;wt++){const Dt=d+wt+rt*yt,Wt=d+wt+rt*(yt+1),at=d+(wt+1)+rt*(yt+1),pt=d+(wt+1)+rt*yt;c.push(Dt,Wt,pt),c.push(Wt,at,pt),X+=6}a.addGroup(p,X,Q),p+=X,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Co(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Fn(n){const t={};for(let e=0;e<n.length;e++){const i=Co(n[e]);for(const s in i)t[s]=i[s]}return t}function V_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Mp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const W_={clone:Co,merge:Fn};var X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends Do{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Co(t.uniforms),this.uniformsGroups=V_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class wp extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new J,ed=new Jt,nd=new Jt;class qe extends wp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,e){return this.getViewBounds(t,ed,nd),e.subVectors(nd,ed)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const io=-90,so=1;class Ya extends Mn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(io,so,t,e);s.layers=this.layers,this.add(s);const o=new qe(io,so,t,e);o.layers=this.layers,this.add(o);const r=new qe(io,so,t,e);r.layers=this.layers,this.add(r);const a=new qe(io,so,t,e);a.layers=this.layers,this.add(a);const c=new qe(io,so,t,e);c.layers=this.layers,this.add(c);const l=new qe(io,so,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Cu extends Rn{constructor(t,e,i,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:To,super(t,e,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $a extends Gs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Cu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yn(5,5,5),o=new an({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qn,blending:ms});o.uniforms.tEquirect.value=e;const r=new x(s,o),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=xi),new Ya(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const Nc=new J,j_=new J,Y_=new Se;class Is{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Nc.subVectors(i,e).cross(j_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Nc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Y_.getNormalMatrix(t),s=this.coplanarPoint(Nc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new ja,Jr=new J;class Iu{constructor(t=new Is,e=new Is,i=new Is,s=new Is,o=new Is,r=new Is){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Zi){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],v=s[9],y=s[10],m=s[11],f=s[12],A=s[13],S=s[14],b=s[15];if(i[0].setComponents(c-o,d-l,m-p,b-f).normalize(),i[1].setComponents(c+o,d+l,m+p,b+f).normalize(),i[2].setComponents(c+r,d+h,m+v,b+A).normalize(),i[3].setComponents(c-r,d-h,m-v,b-A).normalize(),i[4].setComponents(c-a,d-u,m-y,b-S).normalize(),e===Zi)i[5].setComponents(c+a,d+u,m+y,b+S).normalize();else if(e===Ca)i[5].setComponents(a,u,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Jr.x=s.normal.x>0?t.max.x:t.min.x,Jr.y=s.normal.y>0?t.max.y:t.min.y,Jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sp(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function $_(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<u.length;p++){const v=u[d],y=u[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,v=u.length;p<v;p++){const y=u[p];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Ka extends Sn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],v=[],y=[],m=[];for(let f=0;f<h;f++){const A=f*d-r;for(let S=0;S<l;S++){const b=S*u-o;v.push(b,-A,0),y.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<a;A++){const S=A+l*f,b=A+l*(f+1),B=A+1+l*(f+1),I=A+1+l*f;p.push(S,b,I),p.push(b,B,I)}this.setIndex(p),this.setAttribute("position",new en(v,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ka(t.width,t.height,t.widthSegments,t.heightSegments)}}var K_=`#ifdef USE_ALPHAHASH
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
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nx=`#ifdef USE_AOMAP
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
#endif`,ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lx=`#ifdef USE_IRIDESCENCE
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
#endif`,ux=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xx=`#define PI 3.141592653589793
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
} // validated`,yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mx=`vec3 transformedNormal = objectNormal;
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
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ax=`
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
}`,Px=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ox=`#ifdef USE_GRADIENTMAP
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
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
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
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jx=`PhysicalMaterial material;
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
#endif`,Yx=`struct PhysicalMaterial {
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
}`,$x=`
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ny=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oy=`#if defined( USE_POINTS_UV )
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
#endif`,ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
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
#endif`,dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,py=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_y=`#ifdef USE_NORMALMAP
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
#endif`,xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,My=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,by=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uy=`float getShadowMask() {
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
}`,Ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fy=`#ifdef USE_SKINNING
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
#endif`,Oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,By=`#ifdef USE_SKINNING
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
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ky=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#ifdef USE_TRANSMISSION
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ky=`uniform sampler2D t2D;
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`#include <common>
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
}`,nM=`#if DEPTH_PACKING == 3200
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
}`,iM=`#define DISTANCE
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
}`,sM=`#define DISTANCE
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`uniform float scale;
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
}`,cM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,uM=`uniform vec3 diffuse;
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
}`,hM=`#define LAMBERT
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
}`,dM=`#define LAMBERT
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
}`,fM=`#define MATCAP
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
}`,pM=`#define MATCAP
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
}`,mM=`#define NORMAL
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
}`,gM=`#define NORMAL
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
}`,vM=`#define PHONG
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
}`,_M=`#define PHONG
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
}`,xM=`#define STANDARD
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
}`,yM=`#define STANDARD
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
}`,MM=`#define TOON
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
}`,wM=`#define TOON
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
}`,SM=`uniform float size;
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
}`,bM=`uniform vec3 diffuse;
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
}`,EM=`#include <common>
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
}`,TM=`uniform vec3 color;
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
}`,AM=`uniform float rotation;
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
}`,PM=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:K_,alphahash_pars_fragment:Z_,alphamap_fragment:J_,alphamap_pars_fragment:Q_,alphatest_fragment:tx,alphatest_pars_fragment:ex,aomap_fragment:nx,aomap_pars_fragment:ix,batching_pars_vertex:sx,batching_vertex:ox,begin_vertex:rx,beginnormal_vertex:ax,bsdfs:cx,iridescence_fragment:lx,bumpmap_pars_fragment:ux,clipping_planes_fragment:hx,clipping_planes_pars_fragment:dx,clipping_planes_pars_vertex:fx,clipping_planes_vertex:px,color_fragment:mx,color_pars_fragment:gx,color_pars_vertex:vx,color_vertex:_x,common:xx,cube_uv_reflection_fragment:yx,defaultnormal_vertex:Mx,displacementmap_pars_vertex:wx,displacementmap_vertex:Sx,emissivemap_fragment:bx,emissivemap_pars_fragment:Ex,colorspace_fragment:Tx,colorspace_pars_fragment:Ax,envmap_fragment:Px,envmap_common_pars_fragment:Rx,envmap_pars_fragment:Cx,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:kx,envmap_vertex:Lx,fog_vertex:Dx,fog_pars_vertex:Ux,fog_fragment:Nx,fog_pars_fragment:Fx,gradientmap_pars_fragment:Ox,lightmap_pars_fragment:Bx,lights_lambert_fragment:zx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Hx,lights_toon_fragment:Vx,lights_toon_pars_fragment:Wx,lights_phong_fragment:Xx,lights_phong_pars_fragment:qx,lights_physical_fragment:jx,lights_physical_pars_fragment:Yx,lights_fragment_begin:$x,lights_fragment_maps:Kx,lights_fragment_end:Zx,logdepthbuf_fragment:Jx,logdepthbuf_pars_fragment:Qx,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ey,map_fragment:ny,map_pars_fragment:iy,map_particle_fragment:sy,map_particle_pars_fragment:oy,metalnessmap_fragment:ry,metalnessmap_pars_fragment:ay,morphinstance_vertex:cy,morphcolor_vertex:ly,morphnormal_vertex:uy,morphtarget_pars_vertex:hy,morphtarget_vertex:dy,normal_fragment_begin:fy,normal_fragment_maps:py,normal_pars_fragment:my,normal_pars_vertex:gy,normal_vertex:vy,normalmap_pars_fragment:_y,clearcoat_normal_fragment_begin:xy,clearcoat_normal_fragment_maps:yy,clearcoat_pars_fragment:My,iridescence_pars_fragment:wy,opaque_fragment:Sy,packing:by,premultiplied_alpha_fragment:Ey,project_vertex:Ty,dithering_fragment:Ay,dithering_pars_fragment:Py,roughnessmap_fragment:Ry,roughnessmap_pars_fragment:Cy,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Ly,shadowmap_vertex:Dy,shadowmask_pars_fragment:Uy,skinbase_vertex:Ny,skinning_pars_vertex:Fy,skinning_vertex:Oy,skinnormal_vertex:By,specularmap_fragment:zy,specularmap_pars_fragment:Gy,tonemapping_fragment:Hy,tonemapping_pars_fragment:ky,transmission_fragment:Vy,transmission_pars_fragment:Wy,uv_pars_fragment:Xy,uv_pars_vertex:qy,uv_vertex:jy,worldpos_vertex:Yy,background_vert:$y,background_frag:Ky,backgroundCube_vert:Zy,backgroundCube_frag:Jy,cube_vert:Qy,cube_frag:tM,depth_vert:eM,depth_frag:nM,distanceRGBA_vert:iM,distanceRGBA_frag:sM,equirect_vert:oM,equirect_frag:rM,linedashed_vert:aM,linedashed_frag:cM,meshbasic_vert:lM,meshbasic_frag:uM,meshlambert_vert:hM,meshlambert_frag:dM,meshmatcap_vert:fM,meshmatcap_frag:pM,meshnormal_vert:mM,meshnormal_frag:gM,meshphong_vert:vM,meshphong_frag:_M,meshphysical_vert:xM,meshphysical_frag:yM,meshtoon_vert:MM,meshtoon_frag:wM,points_vert:SM,points_frag:bM,shadow_vert:EM,shadow_frag:TM,sprite_vert:AM,sprite_frag:PM},Zt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Ri={basic:{uniforms:Fn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:Fn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new xe(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:Fn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:Fn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:Fn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new xe(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:Fn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:Fn([Zt.points,Zt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:Fn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:Fn([Zt.common,Zt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:Fn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:Fn([Zt.sprite,Zt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:Fn([Zt.common,Zt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:Fn([Zt.lights,Zt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Ri.physical={uniforms:Fn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const Qr={r:0,b:0,g:0},Ps=new Ui,RM=new tn;function CM(n,t,e,i,s,o,r){const a=new xe(0);let c=o===!0?0:1,l,h,u=null,d=0,p=null;function v(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?e:t).get(S)),S}function y(A){let S=!1;const b=v(A);b===null?f(a,c):b&&b.isColor&&(f(b,1),S=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,r):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,S){const b=v(S);b&&(b.isCubeTexture||b.mapping===Xa)?(h===void 0&&(h=new x(new yn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Co(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ps.copy(S.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(RM.makeRotationFromEuler(Ps)),h.material.toneMapped=De.getTransfer(b.colorSpace)!==Qe,(u!==b||d!==b.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new x(new Ka(2,2),new an({name:"BackgroundMaterial",uniforms:Co(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=De.getTransfer(b.colorSpace)!==Qe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function f(A,S){A.getRGB(Qr,Mp(n)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(A,S=1){a.set(A),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,f(a,c)},render:y,addToRenderList:m}}function IM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(M,E,U,k,et){let rt=!1;const $=u(k,U,E);o!==$&&(o=$,l(o.object)),rt=p(M,k,U,et),rt&&v(M,k,U,et),et!==null&&t.update(et,n.ELEMENT_ARRAY_BUFFER),(rt||r)&&(r=!1,b(M,E,U,k),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,E,U){const k=U.wireframe===!0;let et=i[M.id];et===void 0&&(et={},i[M.id]=et);let rt=et[E.id];rt===void 0&&(rt={},et[E.id]=rt);let $=rt[k];return $===void 0&&($=d(c()),rt[k]=$),$}function d(M){const E=[],U=[],k=[];for(let et=0;et<e;et++)E[et]=0,U[et]=0,k[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,E,U,k){const et=o.attributes,rt=E.attributes;let $=0;const nt=U.getAttributes();for(const X in nt)if(nt[X].location>=0){const yt=et[X];let wt=rt[X];if(wt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(wt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(wt=M.instanceColor)),yt===void 0||yt.attribute!==wt||wt&&yt.data!==wt.data)return!0;$++}return o.attributesNum!==$||o.index!==k}function v(M,E,U,k){const et={},rt=E.attributes;let $=0;const nt=U.getAttributes();for(const X in nt)if(nt[X].location>=0){let yt=rt[X];yt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor));const wt={};wt.attribute=yt,yt&&yt.data&&(wt.data=yt.data),et[X]=wt,$++}o.attributes=et,o.attributesNum=$,o.index=k}function y(){const M=o.newAttributes;for(let E=0,U=M.length;E<U;E++)M[E]=0}function m(M){f(M,0)}function f(M,E){const U=o.newAttributes,k=o.enabledAttributes,et=o.attributeDivisors;U[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),et[M]!==E&&(n.vertexAttribDivisor(M,E),et[M]=E)}function A(){const M=o.newAttributes,E=o.enabledAttributes;for(let U=0,k=E.length;U<k;U++)E[U]!==M[U]&&(n.disableVertexAttribArray(U),E[U]=0)}function S(M,E,U,k,et,rt,$){$===!0?n.vertexAttribIPointer(M,E,U,et,rt):n.vertexAttribPointer(M,E,U,k,et,rt)}function b(M,E,U,k){y();const et=k.attributes,rt=U.getAttributes(),$=E.defaultAttributeValues;for(const nt in rt){const X=rt[nt];if(X.location>=0){let vt=et[nt];if(vt===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),vt!==void 0){const yt=vt.normalized,wt=vt.itemSize,Dt=t.get(vt);if(Dt===void 0)continue;const Wt=Dt.buffer,at=Dt.type,pt=Dt.bytesPerElement,bt=at===n.INT||at===n.UNSIGNED_INT||vt.gpuType===wu;if(vt.isInterleavedBufferAttribute){const O=vt.data,lt=O.stride,ot=vt.offset;if(O.isInstancedInterleavedBuffer){for(let ht=0;ht<X.locationSize;ht++)f(X.location+ht,O.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let ht=0;ht<X.locationSize;ht++)S(X.location+ht,wt/X.locationSize,at,yt,lt*pt,(ot+wt/X.locationSize*ht)*pt,bt)}else{if(vt.isInstancedBufferAttribute){for(let O=0;O<X.locationSize;O++)f(X.location+O,vt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let O=0;O<X.locationSize;O++)m(X.location+O);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let O=0;O<X.locationSize;O++)S(X.location+O,wt/X.locationSize,at,yt,wt*pt,wt/X.locationSize*O*pt,bt)}}else if($!==void 0){const yt=$[nt];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(X.location,yt);break;case 3:n.vertexAttrib3fv(X.location,yt);break;case 4:n.vertexAttrib4fv(X.location,yt);break;default:n.vertexAttrib1fv(X.location,yt)}}}}A()}function B(){z();for(const M in i){const E=i[M];for(const U in E){const k=E[U];for(const et in k)h(k[et].object),delete k[et];delete E[U]}delete i[M]}}function I(M){if(i[M.id]===void 0)return;const E=i[M.id];for(const U in E){const k=E[U];for(const et in k)h(k[et].object),delete k[et];delete E[U]}delete i[M.id]}function R(M){for(const E in i){const U=i[E];if(U[M.id]===void 0)continue;const k=U[M.id];for(const et in k)h(k[et].object),delete k[et];delete U[M.id]}}function z(){Q(),r=!0,o!==s&&(o=s,l(o.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:Q,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function LM(n,t,e){let i;function s(l){i=l}function o(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];e.update(p,i,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<l.length;v++)r(l[v],h[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let v=0;for(let y=0;y<u;y++)v+=h[y];for(let y=0;y<d.length;y++)e.update(v,i,d[y])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function DM(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==Xn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const z=R===Sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ts&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ki&&!z)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=v>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:B,maxSamples:I}}function UM(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new Is,a=new Se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const v=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||v===null||v.length===0||o&&!m)o?h(null):l();else{const A=o?0:i,S=A*4;let b=f.clippingState||null;c.value=b,b=h(v,d,S,p);for(let B=0;B!==S;++B)b[B]=e[B];f.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,v){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=c.value,v!==!0||m===null){const f=p+y*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,b=p;S!==y;++S,b+=4)r.copy(u[S]).applyMatrix4(A,a),r.normal.toArray(m,b),m[b+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function NM(n){let t=new WeakMap;function e(r,a){return a===Ta?r.mapping=To:a===vl&&(r.mapping=Ao),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ta||a===vl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new $a(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class bp extends wp{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const uo=4,id=[.125,.215,.35,.446,.526,.582],Us=20,Fc=new bp,sd=new xe;let Oc=null,Bc=0,zc=0,Gc=!1;const Ls=(1+Math.sqrt(5))/2,oo=1/Ls,od=[new J(-Ls,oo,0),new J(Ls,oo,0),new J(-oo,0,Ls),new J(oo,0,Ls),new J(0,Ls,-oo),new J(0,Ls,oo),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class rd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oc,Bc,zc),this._renderer.xr.enabled=Gc,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===To||t.mapping===Ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Sr,format:Xn,colorSpace:Ms,depthBuffer:!1},s=ad(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FM(o)),this._blurMaterial=OM(o,t,e)}return s}_compileMaterial(t){const e=new x(this._lodPlanes[0],t);this._renderer.compile(e,Fc)}_sceneToCubeUV(t,e,i,s){const a=new qe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(sd),h.toneMapping=gs,h.autoClear=!1;const p=new es({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),v=new x(new yn,p);let y=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(sd),y=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):A===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const S=this._cubeSize;ta(s,A*S,f>2?S:0,S,S),h.setRenderTarget(s),y&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===To||t.mapping===Ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new x(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;ta(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Fc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=od[(s-o-1)%od.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new x(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Us-1),y=o/v,m=isFinite(o)?1+Math.floor(h*y):Us;m>Us&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);const f=[];let A=0;for(let R=0;R<Us;++R){const z=R/y,Q=Math.exp(-z*z/2);f.push(Q),R===0?A+=Q:R<m&&(A+=2*Q)}for(let R=0;R<f.length;R++)f[R]=f[R]/A;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-i;const b=this._sizeLods[s],B=3*b*(s>S-uo?s-S+uo:0),I=4*(this._cubeSize-b);ta(e,B,I,3*b,2*b),c.setRenderTarget(e),c.render(u,Fc)}}function FM(n){const t=[],e=[],i=[];let s=n;const o=n-uo+1+id.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-uo?c=id[r-n+uo-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,y=3,m=2,f=1,A=new Float32Array(y*v*p),S=new Float32Array(m*v*p),b=new Float32Array(f*v*p);for(let I=0;I<p;I++){const R=I%3*2/3-1,z=I>2?0:-1,Q=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];A.set(Q,y*v*I),S.set(d,m*v*I);const M=[I,I,I,I,I,I];b.set(M,f*v*I)}const B=new Sn;B.setAttribute("position",new Li(A,y)),B.setAttribute("uv",new Li(S,m)),B.setAttribute("faceIndex",new Li(b,f)),t.push(B),s>uo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ad(n,t,e){const i=new Gs(n,t,e);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function OM(n,t,e){const i=new Float32Array(Us),s=new J(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function cd(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function ld(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function BM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ta||c===vl,h=c===To||c===Ao;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new rd(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new rd(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function zM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&_a("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function GM(n,t,e,i){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const y=d.morphAttributes[v];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",r),delete s[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const v in d)t.update(d[v],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const v in p){const y=p[v];for(let m=0,f=y.length;m<f;m++)t.update(y[m],n.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,v=u.attributes.position;let y=0;if(p!==null){const A=p.array;y=p.version;for(let S=0,b=A.length;S<b;S+=3){const B=A[S+0],I=A[S+1],R=A[S+2];d.push(B,I,I,R,R,B)}}else if(v!==void 0){const A=v.array;y=v.version;for(let S=0,b=A.length/3-1;S<b;S+=3){const B=S+0,I=S+1,R=S+2;d.push(B,I,I,R,R,B)}}else return;const m=new(fp(d)?yp:xp)(d,1);m.version=y;const f=o.get(u);f&&t.remove(f),o.set(u,m)}function h(u){const d=o.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function HM(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,p){n.drawElements(i,p,o,d*r),e.update(p,i,1)}function l(d,p,v){v!==0&&(n.drawElementsInstanced(i,p,o,d*r,v),e.update(p,i,v))}function h(d,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,d,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];e.update(m,i,1)}function u(d,p,v,y){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/r,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,d,0,y,0,v);let f=0;for(let A=0;A<v;A++)f+=p[A];for(let A=0;A<y.length;A++)e.update(f,i,y[A])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function kM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function VM(n,t,e){const i=new WeakMap,s=new He;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let M=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let b=0;v===!0&&(b=1),y===!0&&(b=2),m===!0&&(b=3);let B=a.attributes.position.count*b,I=1;B>t.maxTextureSize&&(I=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const R=new Float32Array(B*I*4*u),z=new mp(R,B,I,u);z.type=Ki,z.needsUpdate=!0;const Q=b*4;for(let E=0;E<u;E++){const U=f[E],k=A[E],et=S[E],rt=B*I*4*E;for(let $=0;$<U.count;$++){const nt=$*Q;v===!0&&(s.fromBufferAttribute(U,$),R[rt+nt+0]=s.x,R[rt+nt+1]=s.y,R[rt+nt+2]=s.z,R[rt+nt+3]=0),y===!0&&(s.fromBufferAttribute(k,$),R[rt+nt+4]=s.x,R[rt+nt+5]=s.y,R[rt+nt+6]=s.z,R[rt+nt+7]=0),m===!0&&(s.fromBufferAttribute(et,$),R[rt+nt+8]=s.x,R[rt+nt+9]=s.y,R[rt+nt+10]=s.z,R[rt+nt+11]=et.itemSize===4?s.w:1)}}d={count:u,texture:z,size:new Jt(B,I)},i.set(a,d),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let v=0;for(let m=0;m<l.length;m++)v+=l[m];const y=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function WM(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Ep extends Rn{constructor(t,e,i,s,o,r,a,c,l,h=xo){if(h!==xo&&h!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xo&&(i=zs),i===void 0&&h===Ro&&(i=Po),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ri,this.minFilter=c!==void 0?c:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tp=new Rn,ud=new Ep(1,1),Ap=new mp,Pp=new L_,Rp=new Cu,hd=[],dd=[],fd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function Uo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=hd[s];if(o===void 0&&(o=new Float32Array(s),hd[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function pn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function mn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Za(n,t){let e=dd[t];e===void 0&&(e=new Int32Array(t),dd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function XM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;n.uniform2fv(this.addr,t),mn(e,t)}}function jM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;n.uniform3fv(this.addr,t),mn(e,t)}}function YM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;n.uniform4fv(this.addr,t),mn(e,t)}}function $M(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,i))return;md.set(i),n.uniformMatrix2fv(this.addr,!1,md),mn(e,i)}}function KM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,i))return;pd.set(i),n.uniformMatrix3fv(this.addr,!1,pd),mn(e,i)}}function ZM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,i))return;fd.set(i),n.uniformMatrix4fv(this.addr,!1,fd),mn(e,i)}}function JM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function QM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;n.uniform2iv(this.addr,t),mn(e,t)}}function tw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;n.uniform3iv(this.addr,t),mn(e,t)}}function ew(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;n.uniform4iv(this.addr,t),mn(e,t)}}function nw(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function iw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;n.uniform2uiv(this.addr,t),mn(e,t)}}function sw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;n.uniform3uiv(this.addr,t),mn(e,t)}}function ow(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;n.uniform4uiv(this.addr,t),mn(e,t)}}function rw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(ud.compareFunction=dp,o=ud):o=Tp,e.setTexture2D(t||o,s)}function aw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Pp,s)}function cw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Rp,s)}function lw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ap,s)}function uw(n){switch(n){case 5126:return XM;case 35664:return qM;case 35665:return jM;case 35666:return YM;case 35674:return $M;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return JM;case 35667:case 35671:return QM;case 35668:case 35672:return tw;case 35669:case 35673:return ew;case 5125:return nw;case 36294:return iw;case 36295:return sw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return lw}}function hw(n,t){n.uniform1fv(this.addr,t)}function dw(n,t){const e=Uo(t,this.size,2);n.uniform2fv(this.addr,e)}function fw(n,t){const e=Uo(t,this.size,3);n.uniform3fv(this.addr,e)}function pw(n,t){const e=Uo(t,this.size,4);n.uniform4fv(this.addr,e)}function mw(n,t){const e=Uo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function gw(n,t){const e=Uo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function vw(n,t){const e=Uo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _w(n,t){n.uniform1iv(this.addr,t)}function xw(n,t){n.uniform2iv(this.addr,t)}function yw(n,t){n.uniform3iv(this.addr,t)}function Mw(n,t){n.uniform4iv(this.addr,t)}function ww(n,t){n.uniform1uiv(this.addr,t)}function Sw(n,t){n.uniform2uiv(this.addr,t)}function bw(n,t){n.uniform3uiv(this.addr,t)}function Ew(n,t){n.uniform4uiv(this.addr,t)}function Tw(n,t,e){const i=this.cache,s=t.length,o=Za(e,s);pn(i,o)||(n.uniform1iv(this.addr,o),mn(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Tp,o[r])}function Aw(n,t,e){const i=this.cache,s=t.length,o=Za(e,s);pn(i,o)||(n.uniform1iv(this.addr,o),mn(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Pp,o[r])}function Pw(n,t,e){const i=this.cache,s=t.length,o=Za(e,s);pn(i,o)||(n.uniform1iv(this.addr,o),mn(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Rp,o[r])}function Rw(n,t,e){const i=this.cache,s=t.length,o=Za(e,s);pn(i,o)||(n.uniform1iv(this.addr,o),mn(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ap,o[r])}function Cw(n){switch(n){case 5126:return hw;case 35664:return dw;case 35665:return fw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return vw;case 5124:case 35670:return _w;case 35667:case 35671:return xw;case 35668:case 35672:return yw;case 35669:case 35673:return Mw;case 5125:return ww;case 36294:return Sw;case 36295:return bw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Rw}}class Iw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=uw(e.type)}}class Lw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cw(e.type)}}class Dw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function gd(n,t){n.seq.push(t),n.map[t.id]=t}function Uw(n,t,e){const i=n.name,s=i.length;for(Hc.lastIndex=0;;){const o=Hc.exec(i),r=Hc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){gd(e,l===void 0?new Iw(a,n,t):new Lw(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Dw(a),gd(e,u)),e=u}}}class xa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Uw(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function vd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Nw=37297;let Fw=0;function Ow(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function Bw(n){const t=De.getPrimaries(De.workingColorSpace),e=De.getPrimaries(n);let i;switch(t===e?i="":t===Ra&&e===Pa?i="LinearDisplayP3ToLinearSRGB":t===Pa&&e===Ra&&(i="LinearSRGBToLinearDisplayP3"),n){case Ms:case qa:return[i,"LinearTransferOETF"];case vi:case Pu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function _d(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ow(n.getShaderSource(t),r)}else return s}function zw(n,t){const e=Bw(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Gw(n,t){let e;switch(t){case Vv:e="Linear";break;case Wv:e="Reinhard";break;case Xv:e="Cineon";break;case qv:e="ACESFilmic";break;case Yv:e="AgX";break;case $v:e="Neutral";break;case jv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ea=new J;function Hw(){De.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function Vw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ww(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function jo(n){return n!==""}function xd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(n){return n.replace(Xw,jw)}const qw=new Map;function jw(n,t){let e=we[t];if(e===void 0){const i=qw.get(t);if(i!==void 0)e=we[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xl(e)}const Yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(n){return n.replace(Yw,$w)}function $w(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function wd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Kw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===wv?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ji&&(t="SHADOWMAP_TYPE_VSM"),t}function Zw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case To:case Ao:t="ENVMAP_TYPE_CUBE";break;case Xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ao:t="ENVMAP_MODE_REFRACTION";break}return t}function Qw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qf:t="ENVMAP_BLENDING_MULTIPLY";break;case Hv:t="ENVMAP_BLENDING_MIX";break;case kv:t="ENVMAP_BLENDING_ADD";break}return t}function t1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function e1(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Kw(e),l=Zw(e),h=Jw(e),u=Qw(e),d=t1(e),p=kw(e),v=Vw(o),y=s.createProgram();let m,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(jo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(jo).join(`
`),f.length>0&&(f+=`
`)):(m=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),f=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gs?"#define TONE_MAPPING":"",e.toneMapping!==gs?we.tonemapping_pars_fragment:"",e.toneMapping!==gs?Gw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,zw("linearToOutputTexel",e.outputColorSpace),Hw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jo).join(`
`)),r=Xl(r),r=xd(r,e),r=yd(r,e),a=Xl(a),a=xd(a,e),a=yd(a,e),r=Md(r),a=Md(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=A+m+r,b=A+f+a,B=vd(s,s.VERTEX_SHADER,S),I=vd(s,s.FRAGMENT_SHADER,b);s.attachShader(y,B),s.attachShader(y,I),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(E){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(y).trim(),k=s.getShaderInfoLog(B).trim(),et=s.getShaderInfoLog(I).trim();let rt=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,B,I);else{const nt=_d(s,B,"vertex"),X=_d(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+nt+`
`+X)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||et==="")&&($=!1);$&&(E.diagnostics={runnable:rt,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:et,prefix:f}})}s.deleteShader(B),s.deleteShader(I),z=new xa(s,y),Q=Ww(s,y)}let z;this.getUniforms=function(){return z===void 0&&R(this),z};let Q;this.getAttributes=function(){return Q===void 0&&R(this),Q};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Nw)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fw++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=B,this.fragmentShader=I,this}let n1=0;class i1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new s1(t),e.set(t,i)),i}}class s1{constructor(t){this.id=n1++,this.code=t,this.usedTimes=0}}function o1(n,t,e,i,s,o,r){const a=new vp,c=new i1,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function f(M,E,U,k,et){const rt=k.fog,$=et.geometry,nt=M.isMeshStandardMaterial?k.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||nt),vt=X&&X.mapping===Xa?X.image.height:null,yt=y[M.type];M.precision!==null&&(v=s.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const wt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Dt=wt!==void 0?wt.length:0;let Wt=0;$.morphAttributes.position!==void 0&&(Wt=1),$.morphAttributes.normal!==void 0&&(Wt=2),$.morphAttributes.color!==void 0&&(Wt=3);let at,pt,bt,O;if(yt){const ne=Ri[yt];at=ne.vertexShader,pt=ne.fragmentShader}else at=M.vertexShader,pt=M.fragmentShader,c.update(M),bt=c.getVertexShaderID(M),O=c.getFragmentShaderID(M);const lt=n.getRenderTarget(),ot=et.isInstancedMesh===!0,ht=et.isBatchedMesh===!0,Mt=!!M.map,it=!!M.matcap,g=!!X,T=!!M.aoMap,L=!!M.lightMap,F=!!M.bumpMap,N=!!M.normalMap,K=!!M.displacementMap,Z=!!M.emissiveMap,w=!!M.metalnessMap,_=!!M.roughnessMap,C=M.anisotropy>0,q=M.clearcoat>0,V=M.dispersion>0,W=M.iridescence>0,dt=M.sheen>0,ct=M.transmission>0,mt=C&&!!M.anisotropyMap,At=q&&!!M.clearcoatMap,ut=q&&!!M.clearcoatNormalMap,_t=q&&!!M.clearcoatRoughnessMap,Lt=W&&!!M.iridescenceMap,Nt=W&&!!M.iridescenceThicknessMap,Rt=dt&&!!M.sheenColorMap,$t=dt&&!!M.sheenRoughnessMap,zt=!!M.specularMap,Yt=!!M.specularColorMap,G=!!M.specularIntensityMap,xt=ct&&!!M.transmissionMap,st=ct&&!!M.thicknessMap,tt=!!M.gradientMap,St=!!M.alphaMap,Et=M.alphaTest>0,kt=!!M.alphaHash,ee=!!M.extensions;let se=gs;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(se=n.toneMapping);const oe={shaderID:yt,shaderType:M.type,shaderName:M.name,vertexShader:at,fragmentShader:pt,defines:M.defines,customVertexShaderID:bt,customFragmentShaderID:O,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:ht,batchingColor:ht&&et._colorsTexture!==null,instancing:ot,instancingColor:ot&&et.instanceColor!==null,instancingMorph:ot&&et.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ms,alphaToCoverage:!!M.alphaToCoverage,map:Mt,matcap:it,envMap:g,envMapMode:g&&X.mapping,envMapCubeUVHeight:vt,aoMap:T,lightMap:L,bumpMap:F,normalMap:N,displacementMap:p&&K,emissiveMap:Z,normalMapObjectSpace:N&&M.normalMapType===Qv,normalMapTangentSpace:N&&M.normalMapType===hp,metalnessMap:w,roughnessMap:_,anisotropy:C,anisotropyMap:mt,clearcoat:q,clearcoatMap:At,clearcoatNormalMap:ut,clearcoatRoughnessMap:_t,dispersion:V,iridescence:W,iridescenceMap:Lt,iridescenceThicknessMap:Nt,sheen:dt,sheenColorMap:Rt,sheenRoughnessMap:$t,specularMap:zt,specularColorMap:Yt,specularIntensityMap:G,transmission:ct,transmissionMap:xt,thicknessMap:st,gradientMap:tt,opaque:M.transparent===!1&&M.blending===_o&&M.alphaToCoverage===!1,alphaMap:St,alphaTest:Et,alphaHash:kt,combine:M.combine,mapUv:Mt&&m(M.map.channel),aoMapUv:T&&m(M.aoMap.channel),lightMapUv:L&&m(M.lightMap.channel),bumpMapUv:F&&m(M.bumpMap.channel),normalMapUv:N&&m(M.normalMap.channel),displacementMapUv:K&&m(M.displacementMap.channel),emissiveMapUv:Z&&m(M.emissiveMap.channel),metalnessMapUv:w&&m(M.metalnessMap.channel),roughnessMapUv:_&&m(M.roughnessMap.channel),anisotropyMapUv:mt&&m(M.anisotropyMap.channel),clearcoatMapUv:At&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:ut&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:$t&&m(M.sheenRoughnessMap.channel),specularMapUv:zt&&m(M.specularMap.channel),specularColorMapUv:Yt&&m(M.specularColorMap.channel),specularIntensityMapUv:G&&m(M.specularIntensityMap.channel),transmissionMapUv:xt&&m(M.transmissionMap.channel),thicknessMapUv:st&&m(M.thicknessMap.channel),alphaMapUv:St&&m(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(N||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!$.attributes.uv&&(Mt||St),fog:!!rt,useFog:M.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:et.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Wt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:Mt&&M.map.isVideoTexture===!0&&De.getTransfer(M.map.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===be,flipSided:M.side===qn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ee&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&M.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function A(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)E.push(U),E.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(S(E,M),b(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function S(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function b(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),M.push(a.mask)}function B(M){const E=y[M.type];let U;if(E){const k=Ri[E];U=W_.clone(k.uniforms)}else U=M.uniforms;return U}function I(M,E){let U;for(let k=0,et=h.length;k<et;k++){const rt=h[k];if(rt.cacheKey===E){U=rt,++U.usedTimes;break}}return U===void 0&&(U=new e1(n,E,M,o),h.push(U)),U}function R(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function z(M){c.remove(M)}function Q(){c.dispose()}return{getParameters:f,getProgramCacheKey:A,getUniforms:B,acquireProgram:I,releaseProgram:R,releaseShaderCache:z,programs:h,dispose:Q}}function r1(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function a1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Sd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function bd(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,p,v,y,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:v,renderOrder:u.renderOrder,z:y,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function a(u,d,p,v,y,m){const f=r(u,d,p,v,y,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,v,y,m){const f=r(u,d,p,v,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||a1),i.length>1&&i.sort(d||Sd),s.length>1&&s.sort(d||Sd)}function h(){for(let u=t,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function c1(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new bd,n.set(i,[r])):s>=o.length?(r=new bd,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function l1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new xe};break;case"SpotLight":e={position:new J,direction:new J,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function u1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let h1=0;function d1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function f1(n){const t=new l1,e=u1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new J);const s=new J,o=new tn,r=new tn;function a(l){let h=0,u=0,d=0;for(let Q=0;Q<9;Q++)i.probe[Q].set(0,0,0);let p=0,v=0,y=0,m=0,f=0,A=0,S=0,b=0,B=0,I=0,R=0;l.sort(d1);for(let Q=0,M=l.length;Q<M;Q++){const E=l[Q],U=E.color,k=E.intensity,et=E.distance,rt=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=U.r*k,u+=U.g*k,d+=U.b*k;else if(E.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(E.sh.coefficients[$],k);R++}else if(E.isDirectionalLight){const $=t.get(E);if($.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const nt=E.shadow,X=e.get(E);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=rt,i.directionalShadowMatrix[p]=E.shadow.matrix,A++}i.directional[p]=$,p++}else if(E.isSpotLight){const $=t.get(E);$.position.setFromMatrixPosition(E.matrixWorld),$.color.copy(U).multiplyScalar(k),$.distance=et,$.coneCos=Math.cos(E.angle),$.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),$.decay=E.decay,i.spot[y]=$;const nt=E.shadow;if(E.map&&(i.spotLightMap[B]=E.map,B++,nt.updateMatrices(E),E.castShadow&&I++),i.spotLightMatrix[y]=nt.matrix,E.castShadow){const X=e.get(E);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=rt,b++}y++}else if(E.isRectAreaLight){const $=t.get(E);$.color.copy(U).multiplyScalar(k),$.halfWidth.set(E.width*.5,0,0),$.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=$,m++}else if(E.isPointLight){const $=t.get(E);if($.color.copy(E.color).multiplyScalar(E.intensity),$.distance=E.distance,$.decay=E.decay,E.castShadow){const nt=E.shadow,X=e.get(E);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,X.shadowCameraNear=nt.camera.near,X.shadowCameraFar=nt.camera.far,i.pointShadow[v]=X,i.pointShadowMap[v]=rt,i.pointShadowMatrix[v]=E.shadow.matrix,S++}i.point[v]=$,v++}else if(E.isHemisphereLight){const $=t.get(E);$.skyColor.copy(E.color).multiplyScalar(k),$.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[f]=$,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Zt.LTC_FLOAT_1,i.rectAreaLTC2=Zt.LTC_FLOAT_2):(i.rectAreaLTC1=Zt.LTC_HALF_1,i.rectAreaLTC2=Zt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const z=i.hash;(z.directionalLength!==p||z.pointLength!==v||z.spotLength!==y||z.rectAreaLength!==m||z.hemiLength!==f||z.numDirectionalShadows!==A||z.numPointShadows!==S||z.numSpotShadows!==b||z.numSpotMaps!==B||z.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+B-I,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,z.directionalLength=p,z.pointLength=v,z.spotLength=y,z.rectAreaLength=m,z.hemiLength=f,z.numDirectionalShadows=A,z.numPointShadows=S,z.numSpotShadows=b,z.numSpotMaps=B,z.numLightProbes=R,i.version=h1++)}function c(l,h){let u=0,d=0,p=0,v=0,y=0;const m=h.matrixWorldInverse;for(let f=0,A=l.length;f<A;f++){const S=l[f];if(S.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(S.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),r.identity(),o.copy(S.matrixWorld),o.premultiply(m),r.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),v++}else if(S.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const b=i.hemi[y];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function Ed(n){const t=new f1(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function p1(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Ed(n),t.set(s,[a])):o>=r.length?(a=new Ed(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class m1 extends Do{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class g1 extends Do{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const v1=`void main() {
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
}`;function x1(n,t,e){let i=new Iu;const s=new Jt,o=new Jt,r=new He,a=new m1({depthPacking:Jv}),c=new g1,l={},h=e.maxTextureSize,u={[_s]:qn,[qn]:_s,[be]:be},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:v1,fragmentShader:_1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Sn;v.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new x(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let f=this.type;this.render=function(I,R,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const Q=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ms),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=f!==ji&&this.type===ji,et=f===ji&&this.type!==ji;for(let rt=0,$=I.length;rt<$;rt++){const nt=I[rt],X=nt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const vt=X.getFrameExtents();if(s.multiply(vt),o.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/vt.x),s.x=o.x*vt.x,X.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/vt.y),s.y=o.y*vt.y,X.mapSize.y=o.y)),X.map===null||k===!0||et===!0){const wt=this.type!==ji?{minFilter:ri,magFilter:ri}:{};X.map!==null&&X.map.dispose(),X.map=new Gs(s.x,s.y,wt),X.map.texture.name=nt.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const yt=X.getViewportCount();for(let wt=0;wt<yt;wt++){const Dt=X.getViewport(wt);r.set(o.x*Dt.x,o.y*Dt.y,o.x*Dt.z,o.y*Dt.w),U.viewport(r),X.updateMatrices(nt,wt),i=X.getFrustum(),b(R,z,X.camera,nt,this.type)}X.isPointLightShadow!==!0&&this.type===ji&&A(X,z),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(Q,M,E)};function A(I,R){const z=t.update(y);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Gs(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,z,d,y,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,z,p,y,null)}function S(I,R,z,Q){let M=null;const E=z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(E!==void 0)M=E;else if(M=z.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const U=M.uuid,k=R.uuid;let et=l[U];et===void 0&&(et={},l[U]=et);let rt=et[k];rt===void 0&&(rt=M.clone(),et[k]=rt,R.addEventListener("dispose",B)),M=rt}if(M.visible=R.visible,M.wireframe=R.wireframe,Q===ji?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=z}return M}function b(I,R,z,Q,M){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===ji)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,I.matrixWorld);const k=t.update(I),et=I.material;if(Array.isArray(et)){const rt=k.groups;for(let $=0,nt=rt.length;$<nt;$++){const X=rt[$],vt=et[X.materialIndex];if(vt&&vt.visible){const yt=S(I,vt,Q,M);I.onBeforeShadow(n,I,R,z,k,yt,X),n.renderBufferDirect(z,null,k,yt,I,X),I.onAfterShadow(n,I,R,z,k,yt,X)}}}else if(et.visible){const rt=S(I,et,Q,M);I.onBeforeShadow(n,I,R,z,k,rt,null),n.renderBufferDirect(z,null,k,rt,I,null),I.onAfterShadow(n,I,R,z,k,rt,null)}}const U=I.children;for(let k=0,et=U.length;k<et;k++)b(U[k],R,z,Q,M)}function B(I){I.target.removeEventListener("dispose",B);for(const z in l){const Q=l[z],M=I.target.uuid;M in Q&&(Q[M].dispose(),delete Q[M])}}}const y1={[ul]:hl,[dl]:ml,[fl]:gl,[Eo]:pl,[hl]:ul,[ml]:dl,[gl]:fl,[pl]:Eo};function M1(n){function t(){let G=!1;const xt=new He;let st=null;const tt=new He(0,0,0,0);return{setMask:function(St){st!==St&&!G&&(n.colorMask(St,St,St,St),st=St)},setLocked:function(St){G=St},setClear:function(St,Et,kt,ee,se){se===!0&&(St*=ee,Et*=ee,kt*=ee),xt.set(St,Et,kt,ee),tt.equals(xt)===!1&&(n.clearColor(St,Et,kt,ee),tt.copy(xt))},reset:function(){G=!1,st=null,tt.set(-1,0,0,0)}}}function e(){let G=!1,xt=!1,st=null,tt=null,St=null;return{setReversed:function(Et){xt=Et},setTest:function(Et){Et?bt(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(Et){st!==Et&&!G&&(n.depthMask(Et),st=Et)},setFunc:function(Et){if(xt&&(Et=y1[Et]),tt!==Et){switch(Et){case ul:n.depthFunc(n.NEVER);break;case hl:n.depthFunc(n.ALWAYS);break;case dl:n.depthFunc(n.LESS);break;case Eo:n.depthFunc(n.LEQUAL);break;case fl:n.depthFunc(n.EQUAL);break;case pl:n.depthFunc(n.GEQUAL);break;case ml:n.depthFunc(n.GREATER);break;case gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=Et}},setLocked:function(Et){G=Et},setClear:function(Et){St!==Et&&(n.clearDepth(Et),St=Et)},reset:function(){G=!1,st=null,tt=null,St=null}}}function i(){let G=!1,xt=null,st=null,tt=null,St=null,Et=null,kt=null,ee=null,se=null;return{setTest:function(oe){G||(oe?bt(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(oe){xt!==oe&&!G&&(n.stencilMask(oe),xt=oe)},setFunc:function(oe,ne,fe){(st!==oe||tt!==ne||St!==fe)&&(n.stencilFunc(oe,ne,fe),st=oe,tt=ne,St=fe)},setOp:function(oe,ne,fe){(Et!==oe||kt!==ne||ee!==fe)&&(n.stencilOp(oe,ne,fe),Et=oe,kt=ne,ee=fe)},setLocked:function(oe){G=oe},setClear:function(oe){se!==oe&&(n.clearStencil(oe),se=oe)},reset:function(){G=!1,xt=null,st=null,tt=null,St=null,Et=null,kt=null,ee=null,se=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],p=null,v=!1,y=null,m=null,f=null,A=null,S=null,b=null,B=null,I=new xe(0,0,0),R=0,z=!1,Q=null,M=null,E=null,U=null,k=null;const et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,$=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(nt)[1]),rt=$>=1):nt.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),rt=$>=2);let X=null,vt={};const yt=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),Dt=new He().fromArray(yt),Wt=new He().fromArray(wt);function at(G,xt,st,tt){const St=new Uint8Array(4),Et=n.createTexture();n.bindTexture(G,Et),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<st;kt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(xt+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return Et}const pt={};pt[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),pt[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pt[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),bt(n.DEPTH_TEST),o.setFunc(Eo),L(!1),F(Lh),bt(n.CULL_FACE),g(ms);function bt(G){l[G]!==!0&&(n.enable(G),l[G]=!0)}function O(G){l[G]!==!1&&(n.disable(G),l[G]=!1)}function lt(G,xt){return h[G]!==xt?(n.bindFramebuffer(G,xt),h[G]=xt,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xt),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function ot(G,xt){let st=d,tt=!1;if(G){st=u.get(xt),st===void 0&&(st=[],u.set(xt,st));const St=G.textures;if(st.length!==St.length||st[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,kt=St.length;Et<kt;Et++)st[Et]=n.COLOR_ATTACHMENT0+Et;st.length=St.length,tt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,tt=!0);tt&&n.drawBuffers(st)}function ht(G){return p!==G?(n.useProgram(G),p=G,!0):!1}const Mt={[Ds]:n.FUNC_ADD,[bv]:n.FUNC_SUBTRACT,[Ev]:n.FUNC_REVERSE_SUBTRACT};Mt[Tv]=n.MIN,Mt[Av]=n.MAX;const it={[Pv]:n.ZERO,[Rv]:n.ONE,[Cv]:n.SRC_COLOR,[cl]:n.SRC_ALPHA,[Fv]:n.SRC_ALPHA_SATURATE,[Uv]:n.DST_COLOR,[Lv]:n.DST_ALPHA,[Iv]:n.ONE_MINUS_SRC_COLOR,[ll]:n.ONE_MINUS_SRC_ALPHA,[Nv]:n.ONE_MINUS_DST_COLOR,[Dv]:n.ONE_MINUS_DST_ALPHA,[Ov]:n.CONSTANT_COLOR,[Bv]:n.ONE_MINUS_CONSTANT_COLOR,[zv]:n.CONSTANT_ALPHA,[Gv]:n.ONE_MINUS_CONSTANT_ALPHA};function g(G,xt,st,tt,St,Et,kt,ee,se,oe){if(G===ms){v===!0&&(O(n.BLEND),v=!1);return}if(v===!1&&(bt(n.BLEND),v=!0),G!==Sv){if(G!==y||oe!==z){if((m!==Ds||S!==Ds)&&(n.blendEquation(n.FUNC_ADD),m=Ds,S=Ds),oe)switch(G){case _o:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dh:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case _o:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}f=null,A=null,b=null,B=null,I.set(0,0,0),R=0,y=G,z=oe}return}St=St||xt,Et=Et||st,kt=kt||tt,(xt!==m||St!==S)&&(n.blendEquationSeparate(Mt[xt],Mt[St]),m=xt,S=St),(st!==f||tt!==A||Et!==b||kt!==B)&&(n.blendFuncSeparate(it[st],it[tt],it[Et],it[kt]),f=st,A=tt,b=Et,B=kt),(ee.equals(I)===!1||se!==R)&&(n.blendColor(ee.r,ee.g,ee.b,se),I.copy(ee),R=se),y=G,z=!1}function T(G,xt){G.side===be?O(n.CULL_FACE):bt(n.CULL_FACE);let st=G.side===qn;xt&&(st=!st),L(st),G.blending===_o&&G.transparent===!1?g(ms):g(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const tt=G.stencilWrite;r.setTest(tt),tt&&(r.setMask(G.stencilWriteMask),r.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),r.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),K(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?bt(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(G){Q!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),Q=G)}function F(G){G!==yv?(bt(n.CULL_FACE),G!==M&&(G===Lh?n.cullFace(n.BACK):G===Mv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),M=G}function N(G){G!==E&&(rt&&n.lineWidth(G),E=G)}function K(G,xt,st){G?(bt(n.POLYGON_OFFSET_FILL),(U!==xt||k!==st)&&(n.polygonOffset(xt,st),U=xt,k=st)):O(n.POLYGON_OFFSET_FILL)}function Z(G){G?bt(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function w(G){G===void 0&&(G=n.TEXTURE0+et-1),X!==G&&(n.activeTexture(G),X=G)}function _(G,xt,st){st===void 0&&(X===null?st=n.TEXTURE0+et-1:st=X);let tt=vt[st];tt===void 0&&(tt={type:void 0,texture:void 0},vt[st]=tt),(tt.type!==G||tt.texture!==xt)&&(X!==st&&(n.activeTexture(st),X=st),n.bindTexture(G,xt||pt[G]),tt.type=G,tt.texture=xt)}function C(){const G=vt[X];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(G){Dt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Dt.copy(G))}function Rt(G){Wt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Wt.copy(G))}function $t(G,xt){let st=c.get(xt);st===void 0&&(st=new WeakMap,c.set(xt,st));let tt=st.get(G);tt===void 0&&(tt=n.getUniformBlockIndex(xt,G.name),st.set(G,tt))}function zt(G,xt){const tt=c.get(xt).get(G);a.get(xt)!==tt&&(n.uniformBlockBinding(xt,tt,G.__bindingPointIndex),a.set(xt,tt))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},X=null,vt={},h={},u=new WeakMap,d=[],p=null,v=!1,y=null,m=null,f=null,A=null,S=null,b=null,B=null,I=new xe(0,0,0),R=0,z=!1,Q=null,M=null,E=null,U=null,k=null,Dt.set(0,0,n.canvas.width,n.canvas.height),Wt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:bt,disable:O,bindFramebuffer:lt,drawBuffers:ot,useProgram:ht,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:F,setLineWidth:N,setPolygonOffset:K,setScissorTest:Z,activeTexture:w,bindTexture:_,unbindTexture:C,compressedTexImage2D:q,compressedTexImage3D:V,texImage2D:_t,texImage3D:Lt,updateUBOMapping:$t,uniformBlockBinding:zt,texStorage2D:At,texStorage3D:ut,texSubImage2D:W,texSubImage3D:dt,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Nt,viewport:Rt,reset:Yt}}function Td(n,t,e,i){const s=w1(i);switch(e){case sp:return n*t;case rp:return n*t;case ap:return n*t*2;case cp:return n*t/s.components*s.byteLength;case Eu:return n*t/s.components*s.byteLength;case lp:return n*t*2/s.components*s.byteLength;case Tu:return n*t*2/s.components*s.byteLength;case op:return n*t*3/s.components*s.byteLength;case Xn:return n*t*4/s.components*s.byteLength;case Au:return n*t*4/s.components*s.byteLength;case fa:case pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:case wl:return Math.max(n,16)*Math.max(t,8)/4;case xl:case Ml:return Math.max(n,8)*Math.max(t,8)/2;case Sl:case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case va:case Gl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case up:case kl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Vl:case Wl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w1(n){switch(n){case ts:case ep:return{byteLength:1,components:1};case pr:case np:case Sr:return{byteLength:2,components:1};case Su:case bu:return{byteLength:2,components:4};case zs:case wu:case Ki:return{byteLength:4,components:1};case ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function S1(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Jt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,_){return p?new OffscreenCanvas(w,_):gr("canvas")}function y(w,_,C){let q=1;const V=Z(w);if((V.width>C||V.height>C)&&(q=C/Math.max(V.width,V.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor(q*V.width),dt=Math.floor(q*V.height);u===void 0&&(u=v(W,dt));const ct=_?v(W,dt):u;return ct.width=W,ct.height=dt,ct.getContext("2d").drawImage(w,0,0,W,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+W+"x"+dt+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==ri&&w.minFilter!==xi}function f(w){n.generateMipmap(w)}function A(w,_,C,q,V=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=_;if(_===n.RED&&(C===n.FLOAT&&(W=n.R32F),C===n.HALF_FLOAT&&(W=n.R16F),C===n.UNSIGNED_BYTE&&(W=n.R8)),_===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(W=n.R8UI),C===n.UNSIGNED_SHORT&&(W=n.R16UI),C===n.UNSIGNED_INT&&(W=n.R32UI),C===n.BYTE&&(W=n.R8I),C===n.SHORT&&(W=n.R16I),C===n.INT&&(W=n.R32I)),_===n.RG&&(C===n.FLOAT&&(W=n.RG32F),C===n.HALF_FLOAT&&(W=n.RG16F),C===n.UNSIGNED_BYTE&&(W=n.RG8)),_===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(W=n.RG8UI),C===n.UNSIGNED_SHORT&&(W=n.RG16UI),C===n.UNSIGNED_INT&&(W=n.RG32UI),C===n.BYTE&&(W=n.RG8I),C===n.SHORT&&(W=n.RG16I),C===n.INT&&(W=n.RG32I)),_===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(W=n.RGB8UI),C===n.UNSIGNED_SHORT&&(W=n.RGB16UI),C===n.UNSIGNED_INT&&(W=n.RGB32UI),C===n.BYTE&&(W=n.RGB8I),C===n.SHORT&&(W=n.RGB16I),C===n.INT&&(W=n.RGB32I)),_===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),C===n.UNSIGNED_INT&&(W=n.RGBA32UI),C===n.BYTE&&(W=n.RGBA8I),C===n.SHORT&&(W=n.RGBA16I),C===n.INT&&(W=n.RGBA32I)),_===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),_===n.RGBA){const dt=V?Aa:De.getTransfer(q);C===n.FLOAT&&(W=n.RGBA32F),C===n.HALF_FLOAT&&(W=n.RGBA16F),C===n.UNSIGNED_BYTE&&(W=dt===Qe?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function S(w,_){let C;return w?_===null||_===zs||_===Po?C=n.DEPTH24_STENCIL8:_===Ki?C=n.DEPTH32F_STENCIL8:_===pr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zs||_===Po?C=n.DEPTH_COMPONENT24:_===Ki?C=n.DEPTH_COMPONENT32F:_===pr&&(C=n.DEPTH_COMPONENT16),C}function b(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ri&&w.minFilter!==xi?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function B(w){const _=w.target;_.removeEventListener("dispose",B),R(_),_.isVideoTexture&&h.delete(_)}function I(w){const _=w.target;_.removeEventListener("dispose",I),Q(_)}function R(w){const _=i.get(w);if(_.__webglInit===void 0)return;const C=w.source,q=d.get(C);if(q){const V=q[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&z(w),Object.keys(q).length===0&&d.delete(C)}i.remove(w)}function z(w){const _=i.get(w);n.deleteTexture(_.__webglTexture);const C=w.source,q=d.get(C);delete q[_.__cacheKey],r.memory.textures--}function Q(w){const _=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let V=0;V<_.__webglFramebuffer[q].length;V++)n.deleteFramebuffer(_.__webglFramebuffer[q][V]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const C=w.textures;for(let q=0,V=C.length;q<V;q++){const W=i.get(C[q]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),r.memory.textures--),i.remove(C[q])}i.remove(w)}let M=0;function E(){M=0}function U(){const w=M;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),M+=1,w}function k(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function et(w,_){const C=i.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.version>0&&C.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(C,w,_);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+_)}function rt(w,_){const C=i.get(w);if(w.version>0&&C.__version!==w.version){Wt(C,w,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+_)}function $(w,_){const C=i.get(w);if(w.version>0&&C.__version!==w.version){Wt(C,w,_);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+_)}function nt(w,_){const C=i.get(w);if(w.version>0&&C.__version!==w.version){at(C,w,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+_)}const X={[Ke]:n.REPEAT,[Ns]:n.CLAMP_TO_EDGE,[_l]:n.MIRRORED_REPEAT},vt={[ri]:n.NEAREST,[Kv]:n.NEAREST_MIPMAP_NEAREST,[Nr]:n.NEAREST_MIPMAP_LINEAR,[xi]:n.LINEAR,[pc]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},yt={[t_]:n.NEVER,[r_]:n.ALWAYS,[e_]:n.LESS,[dp]:n.LEQUAL,[n_]:n.EQUAL,[o_]:n.GEQUAL,[i_]:n.GREATER,[s_]:n.NOTEQUAL};function wt(w,_){if(_.type===Ki&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===xi||_.magFilter===pc||_.magFilter===Nr||_.magFilter===Ci||_.minFilter===xi||_.minFilter===pc||_.minFilter===Nr||_.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,X[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,X[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,X[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,vt[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,vt[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ri||_.minFilter!==Nr&&_.minFilter!==Ci||_.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Dt(w,_){let C=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",B));const q=_.source;let V=d.get(q);V===void 0&&(V={},d.set(q,V));const W=k(_);if(W!==w.__cacheKey){V[W]===void 0&&(V[W]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,C=!0),V[W].usedTimes++;const dt=V[w.__cacheKey];dt!==void 0&&(V[w.__cacheKey].usedTimes--,dt.usedTimes===0&&z(_)),w.__cacheKey=W,w.__webglTexture=V[W].texture}return C}function Wt(w,_,C){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const V=Dt(w,_),W=_.source;e.bindTexture(q,w.__webglTexture,n.TEXTURE0+C);const dt=i.get(W);if(W.version!==dt.__version||V===!0){e.activeTexture(n.TEXTURE0+C);const ct=De.getPrimaries(De.workingColorSpace),mt=_.colorSpace===ps?null:De.getPrimaries(_.colorSpace),At=_.colorSpace===ps||ct===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let ut=y(_.image,!1,s.maxTextureSize);ut=K(_,ut);const _t=o.convert(_.format,_.colorSpace),Lt=o.convert(_.type);let Nt=A(_.internalFormat,_t,Lt,_.colorSpace,_.isVideoTexture);wt(q,_);let Rt;const $t=_.mipmaps,zt=_.isVideoTexture!==!0,Yt=dt.__version===void 0||V===!0,G=W.dataReady,xt=b(_,ut);if(_.isDepthTexture)Nt=S(_.format===Ro,_.type),Yt&&(zt?e.texStorage2D(n.TEXTURE_2D,1,Nt,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,Nt,ut.width,ut.height,0,_t,Lt,null));else if(_.isDataTexture)if($t.length>0){zt&&Yt&&e.texStorage2D(n.TEXTURE_2D,xt,Nt,$t[0].width,$t[0].height);for(let st=0,tt=$t.length;st<tt;st++)Rt=$t[st],zt?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Rt.width,Rt.height,_t,Lt,Rt.data):e.texImage2D(n.TEXTURE_2D,st,Nt,Rt.width,Rt.height,0,_t,Lt,Rt.data);_.generateMipmaps=!1}else zt?(Yt&&e.texStorage2D(n.TEXTURE_2D,xt,Nt,ut.width,ut.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut.width,ut.height,_t,Lt,ut.data)):e.texImage2D(n.TEXTURE_2D,0,Nt,ut.width,ut.height,0,_t,Lt,ut.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Nt,$t[0].width,$t[0].height,ut.depth);for(let st=0,tt=$t.length;st<tt;st++)if(Rt=$t[st],_.format!==Xn)if(_t!==null)if(zt){if(G)if(_.layerUpdates.size>0){const St=Td(Rt.width,Rt.height,_.format,_.type);for(const Et of _.layerUpdates){const kt=Rt.data.subarray(Et*St/Rt.data.BYTES_PER_ELEMENT,(Et+1)*St/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,Et,Rt.width,Rt.height,1,_t,kt,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Rt.width,Rt.height,ut.depth,_t,Rt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Nt,Rt.width,Rt.height,ut.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Rt.width,Rt.height,ut.depth,_t,Lt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Nt,Rt.width,Rt.height,ut.depth,0,_t,Lt,Rt.data)}else{zt&&Yt&&e.texStorage2D(n.TEXTURE_2D,xt,Nt,$t[0].width,$t[0].height);for(let st=0,tt=$t.length;st<tt;st++)Rt=$t[st],_.format!==Xn?_t!==null?zt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Rt.width,Rt.height,_t,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Nt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Rt.width,Rt.height,_t,Lt,Rt.data):e.texImage2D(n.TEXTURE_2D,st,Nt,Rt.width,Rt.height,0,_t,Lt,Rt.data)}else if(_.isDataArrayTexture)if(zt){if(Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Nt,ut.width,ut.height,ut.depth),G)if(_.layerUpdates.size>0){const st=Td(ut.width,ut.height,_.format,_.type);for(const tt of _.layerUpdates){const St=ut.data.subarray(tt*st/ut.data.BYTES_PER_ELEMENT,(tt+1)*st/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,ut.width,ut.height,1,_t,Lt,St)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,_t,Lt,ut.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,ut.width,ut.height,ut.depth,0,_t,Lt,ut.data);else if(_.isData3DTexture)zt?(Yt&&e.texStorage3D(n.TEXTURE_3D,xt,Nt,ut.width,ut.height,ut.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,_t,Lt,ut.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,ut.width,ut.height,ut.depth,0,_t,Lt,ut.data);else if(_.isFramebufferTexture){if(Yt)if(zt)e.texStorage2D(n.TEXTURE_2D,xt,Nt,ut.width,ut.height);else{let st=ut.width,tt=ut.height;for(let St=0;St<xt;St++)e.texImage2D(n.TEXTURE_2D,St,Nt,st,tt,0,_t,Lt,null),st>>=1,tt>>=1}}else if($t.length>0){if(zt&&Yt){const st=Z($t[0]);e.texStorage2D(n.TEXTURE_2D,xt,Nt,st.width,st.height)}for(let st=0,tt=$t.length;st<tt;st++)Rt=$t[st],zt?G&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,_t,Lt,Rt):e.texImage2D(n.TEXTURE_2D,st,Nt,_t,Lt,Rt);_.generateMipmaps=!1}else if(zt){if(Yt){const st=Z(ut);e.texStorage2D(n.TEXTURE_2D,xt,Nt,st.width,st.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Lt,ut)}else e.texImage2D(n.TEXTURE_2D,0,Nt,_t,Lt,ut);m(_)&&f(q),dt.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function at(w,_,C){if(_.image.length!==6)return;const q=Dt(w,_),V=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+C);const W=i.get(V);if(V.version!==W.__version||q===!0){e.activeTexture(n.TEXTURE0+C);const dt=De.getPrimaries(De.workingColorSpace),ct=_.colorSpace===ps?null:De.getPrimaries(_.colorSpace),mt=_.colorSpace===ps||dt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const At=_.isCompressedTexture||_.image[0].isCompressedTexture,ut=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let tt=0;tt<6;tt++)!At&&!ut?_t[tt]=y(_.image[tt],!0,s.maxCubemapSize):_t[tt]=ut?_.image[tt].image:_.image[tt],_t[tt]=K(_,_t[tt]);const Lt=_t[0],Nt=o.convert(_.format,_.colorSpace),Rt=o.convert(_.type),$t=A(_.internalFormat,Nt,Rt,_.colorSpace),zt=_.isVideoTexture!==!0,Yt=W.__version===void 0||q===!0,G=V.dataReady;let xt=b(_,Lt);wt(n.TEXTURE_CUBE_MAP,_);let st;if(At){zt&&Yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,$t,Lt.width,Lt.height);for(let tt=0;tt<6;tt++){st=_t[tt].mipmaps;for(let St=0;St<st.length;St++){const Et=st[St];_.format!==Xn?Nt!==null?zt?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Et.width,Et.height,Nt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,$t,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Et.width,Et.height,Nt,Rt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,$t,Et.width,Et.height,0,Nt,Rt,Et.data)}}}else{if(st=_.mipmaps,zt&&Yt){st.length>0&&xt++;const tt=Z(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ut){zt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_t[tt].width,_t[tt].height,Nt,Rt,_t[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,_t[tt].width,_t[tt].height,0,Nt,Rt,_t[tt].data);for(let St=0;St<st.length;St++){const kt=st[St].image[tt].image;zt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,kt.width,kt.height,Nt,Rt,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,$t,kt.width,kt.height,0,Nt,Rt,kt.data)}}else{zt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Nt,Rt,_t[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Nt,Rt,_t[tt]);for(let St=0;St<st.length;St++){const Et=st[St];zt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,Nt,Rt,Et.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,$t,Nt,Rt,Et.image[tt])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),W.__version=V.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function pt(w,_,C,q,V,W){const dt=o.convert(C.format,C.colorSpace),ct=o.convert(C.type),mt=A(C.internalFormat,dt,ct,C.colorSpace);if(!i.get(_).__hasExternalTextures){const ut=Math.max(1,_.width>>W),_t=Math.max(1,_.height>>W);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?e.texImage3D(V,W,mt,ut,_t,_.depth,0,dt,ct,null):e.texImage2D(V,W,mt,ut,_t,0,dt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),F(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,V,i.get(C).__webglTexture,0,L(_)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,V,i.get(C).__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(w,_,C){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){const q=_.depthTexture,V=q&&q.isDepthTexture?q.type:null,W=S(_.stencilBuffer,V),dt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=L(_);F(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,W,_.width,_.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,W,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,W,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,w)}else{const q=_.textures;for(let V=0;V<q.length;V++){const W=q[V],dt=o.convert(W.format,W.colorSpace),ct=o.convert(W.type),mt=A(W.internalFormat,dt,ct,W.colorSpace),At=L(_);C&&F(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,mt,_.width,_.height):F(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,mt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,mt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),et(_.depthTexture,0);const q=i.get(_.depthTexture).__webglTexture,V=L(_);if(_.depthTexture.format===xo)F(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(_.depthTexture.format===Ro)F(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function lt(w){const _=i.get(w),C=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const V=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",V)};q.addEventListener("dispose",V),_.__depthDisposeCallback=V}_.__boundDepthTexture=q}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");O(_.__webglFramebuffer,w)}else if(C){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),bt(_.__webglDepthbuffer[q],w,!1);else{const V=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),bt(_.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,V)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(w,_,C){const q=i.get(w);_!==void 0&&pt(q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&lt(w)}function ht(w){const _=w.texture,C=i.get(w),q=i.get(_);w.addEventListener("dispose",I);const V=w.textures,W=w.isWebGLCubeRenderTarget===!0,dt=V.length>1;if(dt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,r.memory.textures++),W){C.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[ct]=[];for(let mt=0;mt<_.mipmaps.length;mt++)C.__webglFramebuffer[ct][mt]=n.createFramebuffer()}else C.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let ct=0;ct<_.mipmaps.length;ct++)C.__webglFramebuffer[ct]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(dt)for(let ct=0,mt=V.length;ct<mt;ct++){const At=i.get(V[ct]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),r.memory.textures++)}if(w.samples>0&&F(w)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ct=0;ct<V.length;ct++){const mt=V[ct];C.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ct]);const At=o.convert(mt.format,mt.colorSpace),ut=o.convert(mt.type),_t=A(mt.internalFormat,At,ut,mt.colorSpace,w.isXRRenderTarget===!0),Lt=L(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,_t,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,C.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),bt(C.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),wt(n.TEXTURE_CUBE_MAP,_);for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)pt(C.__webglFramebuffer[ct][mt],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else pt(C.__webglFramebuffer[ct],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let ct=0,mt=V.length;ct<mt;ct++){const At=V[ct],ut=i.get(At);e.bindTexture(n.TEXTURE_2D,ut.__webglTexture),wt(n.TEXTURE_2D,At),pt(C.__webglFramebuffer,w,At,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(At)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,q.__webglTexture),wt(ct,_),_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)pt(C.__webglFramebuffer[mt],w,_,n.COLOR_ATTACHMENT0,ct,mt);else pt(C.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,ct,0);m(_)&&f(ct),e.unbindTexture()}w.depthBuffer&&lt(w)}function Mt(w){const _=w.textures;for(let C=0,q=_.length;C<q;C++){const V=_[C];if(m(V)){const W=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,dt=i.get(V).__webglTexture;e.bindTexture(W,dt),f(W),e.unbindTexture()}}}const it=[],g=[];function T(w){if(w.samples>0){if(F(w)===!1){const _=w.textures,C=w.width,q=w.height;let V=n.COLOR_BUFFER_BIT;const W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(w),ct=_.length>1;if(ct)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);const At=i.get(_[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,At,0)}n.blitFramebuffer(0,0,C,q,0,0,C,q,V,n.NEAREST),c===!0&&(it.length=0,g.length=0,it.push(n.COLOR_ATTACHMENT0+mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(it.push(W),g.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);const At=i.get(_[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,At,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function L(w){return Math.min(s.maxSamples,w.samples)}function F(w){const _=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(w){const _=r.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function K(w,_){const C=w.colorSpace,q=w.format,V=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||C!==Ms&&C!==ps&&(De.getTransfer(C)===Qe?(q!==Xn||V!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function Z(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.setTexture2D=et,this.setTexture2DArray=rt,this.setTexture3D=$,this.setTextureCube=nt,this.rebindTextures=ot,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=F}function b1(n,t){function e(i,s=ps){let o;const r=De.getTransfer(s);if(i===ts)return n.UNSIGNED_BYTE;if(i===Su)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ip)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ep)return n.BYTE;if(i===np)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===wu)return n.INT;if(i===zs)return n.UNSIGNED_INT;if(i===Ki)return n.FLOAT;if(i===Sr)return n.HALF_FLOAT;if(i===sp)return n.ALPHA;if(i===op)return n.RGB;if(i===Xn)return n.RGBA;if(i===rp)return n.LUMINANCE;if(i===ap)return n.LUMINANCE_ALPHA;if(i===xo)return n.DEPTH_COMPONENT;if(i===Ro)return n.DEPTH_STENCIL;if(i===cp)return n.RED;if(i===Eu)return n.RED_INTEGER;if(i===lp)return n.RG;if(i===Tu)return n.RG_INTEGER;if(i===Au)return n.RGBA_INTEGER;if(i===fa||i===pa||i===ma||i===ga)if(r===Qe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===fa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===fa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xl||i===yl||i===Ml||i===wl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===xl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ml)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===bl||i===El)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Sl||i===bl)return r===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===El)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tl||i===Al||i===Pl||i===Rl||i===Cl||i===Il||i===Ll||i===Dl||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===zl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Tl)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pl)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rl)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cl)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nl)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fl)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ol)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bl)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zl)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===va||i===Gl||i===Hl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===va)return r===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===up||i===kl||i===Vl||i===Wl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===va)return o.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Po?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class E1 extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xt extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T1={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,v=.005;l.inputState.pinching&&d>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Xt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const A1=`
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

}`;class R1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Rn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new an({vertexShader:A1,fragmentShader:P1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new x(new Ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C1 extends Lo{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,v=null;const y=new R1,m=e.getContextAttributes();let f=null,A=null;const S=[],b=[],B=new Jt;let I=null;const R=new qe;R.layers.enable(1),R.viewport=new He;const z=new qe;z.layers.enable(2),z.viewport=new He;const Q=[R,z],M=new E1;M.layers.enable(1),M.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let pt=S[at];return pt===void 0&&(pt=new kc,S[at]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(at){let pt=S[at];return pt===void 0&&(pt=new kc,S[at]=pt),pt.getGripSpace()},this.getHand=function(at){let pt=S[at];return pt===void 0&&(pt=new kc,S[at]=pt),pt.getHandSpace()};function k(at){const pt=b.indexOf(at.inputSource);if(pt===-1)return;const bt=S[pt];bt!==void 0&&(bt.update(at.inputSource,at.frame,l||r),bt.dispatchEvent({type:at.type,data:at.inputSource}))}function et(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",rt);for(let at=0;at<S.length;at++){const pt=b[at];pt!==null&&(b[at]=null,S[at].disconnect(pt))}E=null,U=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,A=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){o=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(at){l=at},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",et),s.addEventListener("inputsourceschange",rt),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const pt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Gs(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:ts,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let pt=null,bt=null,O=null;m.depth&&(O=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=m.stencil?Ro:xo,bt=m.stencil?Po:zs);const lt={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new Gs(d.textureWidth,d.textureHeight,{format:Xn,type:ts,depthTexture:new Ep(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function rt(at){for(let pt=0;pt<at.removed.length;pt++){const bt=at.removed[pt],O=b.indexOf(bt);O>=0&&(b[O]=null,S[O].disconnect(bt))}for(let pt=0;pt<at.added.length;pt++){const bt=at.added[pt];let O=b.indexOf(bt);if(O===-1){for(let ot=0;ot<S.length;ot++)if(ot>=b.length){b.push(bt),O=ot;break}else if(b[ot]===null){b[ot]=bt,O=ot;break}if(O===-1)break}const lt=S[O];lt&&lt.connect(bt)}}const $=new J,nt=new J;function X(at,pt,bt){$.setFromMatrixPosition(pt.matrixWorld),nt.setFromMatrixPosition(bt.matrixWorld);const O=$.distanceTo(nt),lt=pt.projectionMatrix.elements,ot=bt.projectionMatrix.elements,ht=lt[14]/(lt[10]-1),Mt=lt[14]/(lt[10]+1),it=(lt[9]+1)/lt[5],g=(lt[9]-1)/lt[5],T=(lt[8]-1)/lt[0],L=(ot[8]+1)/ot[0],F=ht*T,N=ht*L,K=O/(-T+L),Z=K*-T;if(pt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Z),at.translateZ(K),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),lt[10]===-1)at.projectionMatrix.copy(pt.projectionMatrix),at.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const w=ht+K,_=Mt+K,C=F-Z,q=N+(O-Z),V=it*Mt/_*w,W=g*Mt/_*w;at.projectionMatrix.makePerspective(C,q,V,W,w,_),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function vt(at,pt){pt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(pt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let pt=at.near,bt=at.far;y.texture!==null&&(y.depthNear>0&&(pt=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),M.near=z.near=R.near=pt,M.far=z.far=R.far=bt,(E!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,U=M.far);const O=at.parent,lt=M.cameras;vt(M,O);for(let ot=0;ot<lt.length;ot++)vt(lt[ot],O);lt.length===2?X(M,R,z):M.projectionMatrix.copy(R.projectionMatrix),yt(at,M,O)};function yt(at,pt,bt){bt===null?at.matrix.copy(pt.matrixWorld):(at.matrix.copy(bt.matrixWorld),at.matrix.invert(),at.matrix.multiply(pt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(pt.projectionMatrix),at.projectionMatrixInverse.copy(pt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=mr*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(at){c=at,d!==null&&(d.fixedFoveation=at),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=at)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let wt=null;function Dt(at,pt){if(h=pt.getViewerPose(l||r),v=pt,h!==null){const bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let O=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,O=!0);for(let ot=0;ot<bt.length;ot++){const ht=bt[ot];let Mt=null;if(p!==null)Mt=p.getViewport(ht);else{const g=u.getViewSubImage(d,ht);Mt=g.viewport,ot===0&&(t.setRenderTargetTextures(A,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(A))}let it=Q[ot];it===void 0&&(it=new qe,it.layers.enable(ot),it.viewport=new He,Q[ot]=it),it.matrix.fromArray(ht.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ht.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ot===0&&(M.matrix.copy(it.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),O===!0&&M.cameras.push(it)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const ot=u.getDepthInformation(bt[0]);ot&&ot.isValid&&ot.texture&&y.init(t,ot,s.renderState)}}for(let bt=0;bt<S.length;bt++){const O=b[bt],lt=S[bt];O!==null&&lt!==void 0&&lt.update(O,pt,l||r)}wt&&wt(at,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),v=null}const Wt=new Sp;Wt.setAnimationLoop(Dt),this.setAnimationLoop=function(at){wt=at},this.dispose=function(){}}}const Rs=new Ui,I1=new tn;function L1(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Mp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,S,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),u(m,f)):f.isMeshPhongMaterial?(o(m,f),h(m,f)):f.isMeshStandardMaterial?(o(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(o(m,f),v(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),y(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,A,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=t.get(f),S=A.envMap,b=A.envMapRotation;S&&(m.envMap.value=S,Rs.copy(b),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),m.envMapRotation.value.setFromMatrix4(I1.makeRotationFromEuler(Rs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,A,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const A=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function D1(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,S){const b=S.program;i.uniformBlockBinding(A,b)}function l(A,S){let b=s[A.id];b===void 0&&(v(A),b=h(A),s[A.id]=b,A.addEventListener("dispose",m));const B=S.program;i.updateUBOMapping(A,B);const I=t.render.frame;o[A.id]!==I&&(d(A),o[A.id]=I)}function h(A){const S=u();A.__bindingPointIndex=S;const b=n.createBuffer(),B=A.__size,I=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,B,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function u(){for(let A=0;A<a;A++)if(r.indexOf(A)===-1)return r.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const S=s[A.id],b=A.uniforms,B=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let I=0,R=b.length;I<R;I++){const z=Array.isArray(b[I])?b[I]:[b[I]];for(let Q=0,M=z.length;Q<M;Q++){const E=z[Q];if(p(E,I,Q,B)===!0){const U=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let et=0;for(let rt=0;rt<k.length;rt++){const $=k[rt],nt=y($);typeof $=="number"||typeof $=="boolean"?(E.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,U+et,E.__data)):$.isMatrix3?(E.__data[0]=$.elements[0],E.__data[1]=$.elements[1],E.__data[2]=$.elements[2],E.__data[3]=0,E.__data[4]=$.elements[3],E.__data[5]=$.elements[4],E.__data[6]=$.elements[5],E.__data[7]=0,E.__data[8]=$.elements[6],E.__data[9]=$.elements[7],E.__data[10]=$.elements[8],E.__data[11]=0):($.toArray(E.__data,et),et+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,S,b,B){const I=A.value,R=S+"_"+b;if(B[R]===void 0)return typeof I=="number"||typeof I=="boolean"?B[R]=I:B[R]=I.clone(),!0;{const z=B[R];if(typeof I=="number"||typeof I=="boolean"){if(z!==I)return B[R]=I,!0}else if(z.equals(I)===!1)return z.copy(I),!0}return!1}function v(A){const S=A.uniforms;let b=0;const B=16;for(let R=0,z=S.length;R<z;R++){const Q=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,E=Q.length;M<E;M++){const U=Q[M],k=Array.isArray(U.value)?U.value:[U.value];for(let et=0,rt=k.length;et<rt;et++){const $=k[et],nt=y($),X=b%B,vt=X%nt.boundary,yt=X+vt;b+=vt,yt!==0&&B-yt<nt.storage&&(b+=B-yt),U.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=nt.storage}}}const I=b%B;return I>0&&(b+=B-I),A.__size=b,A.__cache={},this}function y(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function m(A){const S=A.target;S.removeEventListener("dispose",m);const b=r.indexOf(S.__bindingPointIndex);r.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function f(){for(const A in s)n.deleteBuffer(s[A]);r=[],s={},o={}}return{bind:c,update:l,dispose:f}}class zn{constructor(t={}){const{canvas:e=S_(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const f=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=gs,this.toneMappingExposure=1;const S=this;let b=!1,B=0,I=0,R=null,z=-1,Q=null;const M=new He,E=new He;let U=null;const k=new xe(0);let et=0,rt=e.width,$=e.height,nt=1,X=null,vt=null;const yt=new He(0,0,rt,$),wt=new He(0,0,rt,$);let Dt=!1;const Wt=new Iu;let at=!1,pt=!1;const bt=new tn,O=new tn,lt=new J,ot=new He,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function it(){return R===null?nt:1}let g=i;function T(P,Y){return e.getContext(P,Y)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mu}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Et,!1),g===null){const Y="webgl2";if(g=T(Y,P),g===null)throw T(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let L,F,N,K,Z,w,_,C,q,V,W,dt,ct,mt,At,ut,_t,Lt,Nt,Rt,$t,zt,Yt,G;function xt(){L=new zM(g),L.init(),zt=new b1(g,L),F=new DM(g,L,t,zt),N=new M1(g),F.reverseDepthBuffer&&N.buffers.depth.setReversed(!0),K=new kM(g),Z=new r1,w=new S1(g,L,N,Z,F,zt,K),_=new NM(S),C=new BM(S),q=new $_(g),Yt=new IM(g,q),V=new GM(g,q,K,Yt),W=new WM(g,V,q,K),Nt=new VM(g,F,w),ut=new UM(Z),dt=new o1(S,_,C,L,F,Yt,ut),ct=new L1(S,Z),mt=new c1,At=new p1(L),Lt=new CM(S,_,C,N,W,d,c),_t=new x1(S,W,F),G=new D1(g,K,F,N),Rt=new LM(g,L,K),$t=new HM(g,L,K),K.programs=dt.programs,S.capabilities=F,S.extensions=L,S.properties=Z,S.renderLists=mt,S.shadowMap=_t,S.state=N,S.info=K}xt();const st=new C1(S,g);this.xr=st,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const P=L.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=L.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(P){P!==void 0&&(nt=P,this.setSize(rt,$,!1))},this.getSize=function(P){return P.set(rt,$)},this.setSize=function(P,Y,D=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=P,$=Y,e.width=Math.floor(P*nt),e.height=Math.floor(Y*nt),D===!0&&(e.style.width=P+"px",e.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(rt*nt,$*nt).floor()},this.setDrawingBufferSize=function(P,Y,D){rt=P,$=Y,nt=D,e.width=Math.floor(P*D),e.height=Math.floor(Y*D),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(yt)},this.setViewport=function(P,Y,D,j){P.isVector4?yt.set(P.x,P.y,P.z,P.w):yt.set(P,Y,D,j),N.viewport(M.copy(yt).multiplyScalar(nt).round())},this.getScissor=function(P){return P.copy(wt)},this.setScissor=function(P,Y,D,j){P.isVector4?wt.set(P.x,P.y,P.z,P.w):wt.set(P,Y,D,j),N.scissor(E.copy(wt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(P){N.setScissorTest(Dt=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){vt=P},this.getClearColor=function(P){return P.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(P=!0,Y=!0,D=!0){let j=0;if(P){let H=!1;if(R!==null){const gt=R.texture.format;H=gt===Au||gt===Tu||gt===Eu}if(H){const gt=R.texture.type,It=gt===ts||gt===zs||gt===pr||gt===Po||gt===Su||gt===bu,Ft=Lt.getClearColor(),Ht=Lt.getClearAlpha(),Kt=Ft.r,Qt=Ft.g,Vt=Ft.b;It?(p[0]=Kt,p[1]=Qt,p[2]=Vt,p[3]=Ht,g.clearBufferuiv(g.COLOR,0,p)):(v[0]=Kt,v[1]=Qt,v[2]=Vt,v[3]=Ht,g.clearBufferiv(g.COLOR,0,v))}else j|=g.COLOR_BUFFER_BIT}Y&&(j|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),D&&(j|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),mt.dispose(),At.dispose(),Z.dispose(),_.dispose(),C.dispose(),W.dispose(),Yt.dispose(),G.dispose(),dt.dispose(),st.dispose(),st.removeEventListener("sessionstart",ae),st.removeEventListener("sessionend",ve),ce.stop()};function tt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const P=K.autoReset,Y=_t.enabled,D=_t.autoUpdate,j=_t.needsUpdate,H=_t.type;xt(),K.autoReset=P,_t.enabled=Y,_t.autoUpdate=D,_t.needsUpdate=j,_t.type=H}function Et(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function kt(P){const Y=P.target;Y.removeEventListener("dispose",kt),ee(Y)}function ee(P){se(P),Z.remove(P)}function se(P){const Y=Z.get(P).programs;Y!==void 0&&(Y.forEach(function(D){dt.releaseProgram(D)}),P.isShaderMaterial&&dt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,D,j,H,gt){Y===null&&(Y=ht);const It=H.isMesh&&H.matrixWorld.determinant()<0,Ft=gn(P,Y,D,j,H);N.setMaterial(j,It);let Ht=D.index,Kt=1;if(j.wireframe===!0){if(Ht=V.getWireframeAttribute(D),Ht===void 0)return;Kt=2}const Qt=D.drawRange,Vt=D.attributes.position;let ie=Qt.start*Kt,de=(Qt.start+Qt.count)*Kt;gt!==null&&(ie=Math.max(ie,gt.start*Kt),de=Math.min(de,(gt.start+gt.count)*Kt)),Ht!==null?(ie=Math.max(ie,0),de=Math.min(de,Ht.count)):Vt!=null&&(ie=Math.max(ie,0),de=Math.min(de,Vt.count));const ue=de-ie;if(ue<0||ue===1/0)return;Yt.setup(H,j,Ft,D,Ht);let Pt,qt=Rt;if(Ht!==null&&(Pt=q.get(Ht),qt=$t,qt.setIndex(Pt)),H.isMesh)j.wireframe===!0?(N.setLineWidth(j.wireframeLinewidth*it()),qt.setMode(g.LINES)):qt.setMode(g.TRIANGLES);else if(H.isLine){let Gt=j.linewidth;Gt===void 0&&(Gt=1),N.setLineWidth(Gt*it()),H.isLineSegments?qt.setMode(g.LINES):H.isLineLoop?qt.setMode(g.LINE_LOOP):qt.setMode(g.LINE_STRIP)}else H.isPoints?qt.setMode(g.POINTS):H.isSprite&&qt.setMode(g.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)qt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))qt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Gt=H._multiDrawStarts,re=H._multiDrawCounts,Tt=H._multiDrawCount,ye=Ht?q.get(Ht).bytesPerElement:1,Ee=Z.get(j).currentProgram.getUniforms();for(let ge=0;ge<Tt;ge++)Ee.setValue(g,"_gl_DrawID",ge),qt.render(Gt[ge]/ye,re[ge])}else if(H.isInstancedMesh)qt.renderInstances(ie,ue,H.count);else if(D.isInstancedBufferGeometry){const Gt=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,re=Math.min(D.instanceCount,Gt);qt.renderInstances(ie,ue,re)}else qt.render(ie,ue)};function oe(P,Y,D){P.transparent===!0&&P.side===be&&P.forceSinglePass===!1?(P.side=qn,P.needsUpdate=!0,Ne(P,Y,D),P.side=_s,P.needsUpdate=!0,Ne(P,Y,D),P.side=be):Ne(P,Y,D)}this.compile=function(P,Y,D=null){D===null&&(D=P),m=At.get(D),m.init(Y),A.push(m),D.traverseVisible(function(H){H.isLight&&H.layers.test(Y.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),P!==D&&P.traverseVisible(function(H){H.isLight&&H.layers.test(Y.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const j=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const gt=H.material;if(gt)if(Array.isArray(gt))for(let It=0;It<gt.length;It++){const Ft=gt[It];oe(Ft,D,H),j.add(Ft)}else oe(gt,D,H),j.add(gt)}),A.pop(),m=null,j},this.compileAsync=function(P,Y,D=null){const j=this.compile(P,Y,D);return new Promise(H=>{function gt(){if(j.forEach(function(It){Z.get(It).currentProgram.isReady()&&j.delete(It)}),j.size===0){H(P);return}setTimeout(gt,10)}L.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ne=null;function fe(P){ne&&ne(P)}function ae(){ce.stop()}function ve(){ce.start()}const ce=new Sp;ce.setAnimationLoop(fe),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(P){ne=P,st.setAnimationLoop(P),P===null?ce.stop():ce.start()},st.addEventListener("sessionstart",ae),st.addEventListener("sessionend",ve),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(Y),Y=st.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,Y,R),m=At.get(P,A.length),m.init(Y),A.push(m),O.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Wt.setFromProjectionMatrix(O),pt=this.localClippingEnabled,at=ut.init(this.clippingPlanes,pt),y=mt.get(P,f.length),y.init(),f.push(y),st.enabled===!0&&st.isPresenting===!0){const gt=S.xr.getDepthSensingMesh();gt!==null&&Pe(gt,Y,-1/0,S.sortObjects)}Pe(P,Y,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(X,vt),Mt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Mt&&Lt.addToRenderList(y,P),this.info.render.frame++,at===!0&&ut.beginShadows();const D=m.state.shadowsArray;_t.render(D,P,Y),at===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=y.opaque,H=y.transmissive;if(m.setupLights(),Y.isArrayCamera){const gt=Y.cameras;if(H.length>0)for(let It=0,Ft=gt.length;It<Ft;It++){const Ht=gt[It];Be(j,H,P,Ht)}Mt&&Lt.render(P);for(let It=0,Ft=gt.length;It<Ft;It++){const Ht=gt[It];me(y,P,Ht,Ht.viewport)}}else H.length>0&&Be(j,H,P,Y),Mt&&Lt.render(P),me(y,P,Y);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(S,P,Y),Yt.resetDefaultState(),z=-1,Q=null,A.pop(),A.length>0?(m=A[A.length-1],at===!0&&ut.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Pe(P,Y,D,j){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)D=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Wt.intersectsSprite(P)){j&&ot.setFromMatrixPosition(P.matrixWorld).applyMatrix4(O);const It=W.update(P),Ft=P.material;Ft.visible&&y.push(P,It,Ft,D,ot.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Wt.intersectsObject(P))){const It=W.update(P),Ft=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ot.copy(P.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ot.copy(It.boundingSphere.center)),ot.applyMatrix4(P.matrixWorld).applyMatrix4(O)),Array.isArray(Ft)){const Ht=It.groups;for(let Kt=0,Qt=Ht.length;Kt<Qt;Kt++){const Vt=Ht[Kt],ie=Ft[Vt.materialIndex];ie&&ie.visible&&y.push(P,It,ie,D,ot.z,Vt)}}else Ft.visible&&y.push(P,It,Ft,D,ot.z,null)}}const gt=P.children;for(let It=0,Ft=gt.length;It<Ft;It++)Pe(gt[It],Y,D,j)}function me(P,Y,D,j){const H=P.opaque,gt=P.transmissive,It=P.transparent;m.setupLightsView(D),at===!0&&ut.setGlobalState(S.clippingPlanes,D),j&&N.viewport(M.copy(j)),H.length>0&&Re(H,Y,D),gt.length>0&&Re(gt,Y,D),It.length>0&&Re(It,Y,D),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Be(P,Y,D,j){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Gs(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Sr:ts,minFilter:Ci,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const gt=m.state.transmissionRenderTarget[j.id],It=j.viewport||M;gt.setSize(It.z,It.w);const Ft=S.getRenderTarget();S.setRenderTarget(gt),S.getClearColor(k),et=S.getClearAlpha(),et<1&&S.setClearColor(16777215,.5),S.clear(),Mt&&Lt.render(D);const Ht=S.toneMapping;S.toneMapping=gs;const Kt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),at===!0&&ut.setGlobalState(S.clippingPlanes,j),Re(P,D,j),w.updateMultisampleRenderTarget(gt),w.updateRenderTargetMipmap(gt),L.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Vt=0,ie=Y.length;Vt<ie;Vt++){const de=Y[Vt],ue=de.object,Pt=de.geometry,qt=de.material,Gt=de.group;if(qt.side===be&&ue.layers.test(j.layers)){const re=qt.side;qt.side=qn,qt.needsUpdate=!0,je(ue,D,j,Pt,qt,Gt),qt.side=re,qt.needsUpdate=!0,Qt=!0}}Qt===!0&&(w.updateMultisampleRenderTarget(gt),w.updateRenderTargetMipmap(gt))}S.setRenderTarget(Ft),S.setClearColor(k,et),Kt!==void 0&&(j.viewport=Kt),S.toneMapping=Ht}function Re(P,Y,D){const j=Y.isScene===!0?Y.overrideMaterial:null;for(let H=0,gt=P.length;H<gt;H++){const It=P[H],Ft=It.object,Ht=It.geometry,Kt=j===null?It.material:j,Qt=It.group;Ft.layers.test(D.layers)&&je(Ft,Y,D,Ht,Kt,Qt)}}function je(P,Y,D,j,H,gt){P.onBeforeRender(S,Y,D,j,H,gt),P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(S,Y,D,j,P,gt),H.transparent===!0&&H.side===be&&H.forceSinglePass===!1?(H.side=qn,H.needsUpdate=!0,S.renderBufferDirect(D,Y,j,H,P,gt),H.side=_s,H.needsUpdate=!0,S.renderBufferDirect(D,Y,j,H,P,gt),H.side=be):S.renderBufferDirect(D,Y,j,H,P,gt),P.onAfterRender(S,Y,D,j,H,gt)}function Ne(P,Y,D){Y.isScene!==!0&&(Y=ht);const j=Z.get(P),H=m.state.lights,gt=m.state.shadowsArray,It=H.state.version,Ft=dt.getParameters(P,H.state,gt,Y,D),Ht=dt.getProgramCacheKey(Ft);let Kt=j.programs;j.environment=P.isMeshStandardMaterial?Y.environment:null,j.fog=Y.fog,j.envMap=(P.isMeshStandardMaterial?C:_).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,Kt===void 0&&(P.addEventListener("dispose",kt),Kt=new Map,j.programs=Kt);let Qt=Kt.get(Ht);if(Qt!==void 0){if(j.currentProgram===Qt&&j.lightsStateVersion===It)return Dn(P,Ft),Qt}else Ft.uniforms=dt.getUniforms(P),P.onBeforeCompile(Ft,S),Qt=dt.acquireProgram(Ft,Ht),Kt.set(Ht,Qt),j.uniforms=Ft.uniforms;const Vt=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Vt.clippingPlanes=ut.uniform),Dn(P,Ft),j.needsLights=he(P),j.lightsStateVersion=It,j.needsLights&&(Vt.ambientLightColor.value=H.state.ambient,Vt.lightProbe.value=H.state.probe,Vt.directionalLights.value=H.state.directional,Vt.directionalLightShadows.value=H.state.directionalShadow,Vt.spotLights.value=H.state.spot,Vt.spotLightShadows.value=H.state.spotShadow,Vt.rectAreaLights.value=H.state.rectArea,Vt.ltc_1.value=H.state.rectAreaLTC1,Vt.ltc_2.value=H.state.rectAreaLTC2,Vt.pointLights.value=H.state.point,Vt.pointLightShadows.value=H.state.pointShadow,Vt.hemisphereLights.value=H.state.hemi,Vt.directionalShadowMap.value=H.state.directionalShadowMap,Vt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Vt.spotShadowMap.value=H.state.spotShadowMap,Vt.spotLightMatrix.value=H.state.spotLightMatrix,Vt.spotLightMap.value=H.state.spotLightMap,Vt.pointShadowMap.value=H.state.pointShadowMap,Vt.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=Qt,j.uniformsList=null,Qt}function hn(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=xa.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function Dn(P,Y){const D=Z.get(P);D.outputColorSpace=Y.outputColorSpace,D.batching=Y.batching,D.batchingColor=Y.batchingColor,D.instancing=Y.instancing,D.instancingColor=Y.instancingColor,D.instancingMorph=Y.instancingMorph,D.skinning=Y.skinning,D.morphTargets=Y.morphTargets,D.morphNormals=Y.morphNormals,D.morphColors=Y.morphColors,D.morphTargetsCount=Y.morphTargetsCount,D.numClippingPlanes=Y.numClippingPlanes,D.numIntersection=Y.numClipIntersection,D.vertexAlphas=Y.vertexAlphas,D.vertexTangents=Y.vertexTangents,D.toneMapping=Y.toneMapping}function gn(P,Y,D,j,H){Y.isScene!==!0&&(Y=ht),w.resetTextureUnits();const gt=Y.fog,It=j.isMeshStandardMaterial?Y.environment:null,Ft=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ms,Ht=(j.isMeshStandardMaterial?C:_).get(j.envMap||It),Kt=j.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Qt=!!D.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Vt=!!D.morphAttributes.position,ie=!!D.morphAttributes.normal,de=!!D.morphAttributes.color;let ue=gs;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ue=S.toneMapping);const Pt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,qt=Pt!==void 0?Pt.length:0,Gt=Z.get(j),re=m.state.lights;if(at===!0&&(pt===!0||P!==Q)){const Te=P===Q&&j.id===z;ut.setState(j,P,Te)}let Tt=!1;j.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==re.state.version||Gt.outputColorSpace!==Ft||H.isBatchedMesh&&Gt.batching===!1||!H.isBatchedMesh&&Gt.batching===!0||H.isBatchedMesh&&Gt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Gt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Gt.instancing===!1||!H.isInstancedMesh&&Gt.instancing===!0||H.isSkinnedMesh&&Gt.skinning===!1||!H.isSkinnedMesh&&Gt.skinning===!0||H.isInstancedMesh&&Gt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Gt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Gt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Gt.instancingMorph===!1&&H.morphTexture!==null||Gt.envMap!==Ht||j.fog===!0&&Gt.fog!==gt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==ut.numPlanes||Gt.numIntersection!==ut.numIntersection)||Gt.vertexAlphas!==Kt||Gt.vertexTangents!==Qt||Gt.morphTargets!==Vt||Gt.morphNormals!==ie||Gt.morphColors!==de||Gt.toneMapping!==ue||Gt.morphTargetsCount!==qt)&&(Tt=!0):(Tt=!0,Gt.__version=j.version);let ye=Gt.currentProgram;Tt===!0&&(ye=Ne(j,Y,H));let Ee=!1,ge=!1,Ie=!1;const pe=ye.getUniforms(),Ce=Gt.uniforms;if(N.useProgram(ye.program)&&(Ee=!0,ge=!0,Ie=!0),j.id!==z&&(z=j.id,ge=!0),Ee||Q!==P){F.reverseDepthBuffer?(bt.copy(P.projectionMatrix),E_(bt),T_(bt),pe.setValue(g,"projectionMatrix",bt)):pe.setValue(g,"projectionMatrix",P.projectionMatrix),pe.setValue(g,"viewMatrix",P.matrixWorldInverse);const Te=pe.map.cameraPosition;Te!==void 0&&Te.setValue(g,lt.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&pe.setValue(g,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&pe.setValue(g,"isOrthographic",P.isOrthographicCamera===!0),Q!==P&&(Q=P,ge=!0,Ie=!0)}if(H.isSkinnedMesh){pe.setOptional(g,H,"bindMatrix"),pe.setOptional(g,H,"bindMatrixInverse");const Te=H.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),pe.setValue(g,"boneTexture",Te.boneTexture,w))}H.isBatchedMesh&&(pe.setOptional(g,H,"batchingTexture"),pe.setValue(g,"batchingTexture",H._matricesTexture,w),pe.setOptional(g,H,"batchingIdTexture"),pe.setValue(g,"batchingIdTexture",H._indirectTexture,w),pe.setOptional(g,H,"batchingColorTexture"),H._colorsTexture!==null&&pe.setValue(g,"batchingColorTexture",H._colorsTexture,w));const ze=D.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&Nt.update(H,D,ye),(ge||Gt.receiveShadow!==H.receiveShadow)&&(Gt.receiveShadow=H.receiveShadow,pe.setValue(g,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ce.envMap.value=Ht,Ce.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&Y.environment!==null&&(Ce.envMapIntensity.value=Y.environmentIntensity),ge&&(pe.setValue(g,"toneMappingExposure",S.toneMappingExposure),Gt.needsLights&&Ct(Ce,Ie),gt&&j.fog===!0&&ct.refreshFogUniforms(Ce,gt),ct.refreshMaterialUniforms(Ce,j,nt,$,m.state.transmissionRenderTarget[P.id]),xa.upload(g,hn(Gt),Ce,w)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(xa.upload(g,hn(Gt),Ce,w),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&pe.setValue(g,"center",H.center),pe.setValue(g,"modelViewMatrix",H.modelViewMatrix),pe.setValue(g,"normalMatrix",H.normalMatrix),pe.setValue(g,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Te=j.uniformsGroups;for(let Fe=0,Ze=Te.length;Fe<Ze;Fe++){const We=Te[Fe];G.update(We,ye),G.bind(We,ye)}}return ye}function Ct(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function he(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,Y,D){Z.get(P.texture).__webglTexture=Y,Z.get(P.depthTexture).__webglTexture=D;const j=Z.get(P);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=D===void 0,j.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){const D=Z.get(P);D.__webglFramebuffer=Y,D.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,D=0){R=P,B=Y,I=D;let j=!0,H=null,gt=!1,It=!1;if(P){const Ht=Z.get(P);if(Ht.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(g.FRAMEBUFFER,null),j=!1;else if(Ht.__webglFramebuffer===void 0)w.setupRenderTarget(P);else if(Ht.__hasExternalTextures)w.rebindTextures(P,Z.get(P.texture).__webglTexture,Z.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Vt=P.depthTexture;if(Ht.__boundDepthTexture!==Vt){if(Vt!==null&&Z.has(Vt)&&(P.width!==Vt.image.width||P.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(P)}}const Kt=P.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(It=!0);const Qt=Z.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Qt[Y])?H=Qt[Y][D]:H=Qt[Y],gt=!0):P.samples>0&&w.useMultisampledRTT(P)===!1?H=Z.get(P).__webglMultisampledFramebuffer:Array.isArray(Qt)?H=Qt[D]:H=Qt,M.copy(P.viewport),E.copy(P.scissor),U=P.scissorTest}else M.copy(yt).multiplyScalar(nt).floor(),E.copy(wt).multiplyScalar(nt).floor(),U=Dt;if(N.bindFramebuffer(g.FRAMEBUFFER,H)&&j&&N.drawBuffers(P,H),N.viewport(M),N.scissor(E),N.setScissorTest(U),gt){const Ht=Z.get(P.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ht.__webglTexture,D)}else if(It){const Ht=Z.get(P.texture),Kt=Y||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ht.__webglTexture,D||0,Kt)}z=-1},this.readRenderTargetPixels=function(P,Y,D,j,H,gt,It){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft){N.bindFramebuffer(g.FRAMEBUFFER,Ft);try{const Ht=P.texture,Kt=Ht.format,Qt=Ht.type;if(!F.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-j&&D>=0&&D<=P.height-H&&g.readPixels(Y,D,j,H,zt.convert(Kt),zt.convert(Qt),gt)}finally{const Ht=R!==null?Z.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(P,Y,D,j,H,gt,It){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft){const Ht=P.texture,Kt=Ht.format,Qt=Ht.type;if(!F.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=P.width-j&&D>=0&&D<=P.height-H){N.bindFramebuffer(g.FRAMEBUFFER,Ft);const Vt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Vt),g.bufferData(g.PIXEL_PACK_BUFFER,gt.byteLength,g.STREAM_READ),g.readPixels(Y,D,j,H,zt.convert(Kt),zt.convert(Qt),0);const ie=R!==null?Z.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,ie);const de=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await b_(g,de,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Vt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,gt),g.deleteBuffer(Vt),g.deleteSync(de),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Y=null,D=0){P.isTexture!==!0&&(_a("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1]);const j=Math.pow(2,-D),H=Math.floor(P.image.width*j),gt=Math.floor(P.image.height*j),It=Y!==null?Y.x:0,Ft=Y!==null?Y.y:0;w.setTexture2D(P,0),g.copyTexSubImage2D(g.TEXTURE_2D,D,0,0,It,Ft,H,gt),N.unbindTexture()},this.copyTextureToTexture=function(P,Y,D=null,j=null,H=0){P.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1],Y=arguments[2],H=arguments[3]||0,D=null);let gt,It,Ft,Ht,Kt,Qt;D!==null?(gt=D.max.x-D.min.x,It=D.max.y-D.min.y,Ft=D.min.x,Ht=D.min.y):(gt=P.image.width,It=P.image.height,Ft=0,Ht=0),j!==null?(Kt=j.x,Qt=j.y):(Kt=0,Qt=0);const Vt=zt.convert(Y.format),ie=zt.convert(Y.type);w.setTexture2D(Y,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const de=g.getParameter(g.UNPACK_ROW_LENGTH),ue=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Pt=g.getParameter(g.UNPACK_SKIP_PIXELS),qt=g.getParameter(g.UNPACK_SKIP_ROWS),Gt=g.getParameter(g.UNPACK_SKIP_IMAGES),re=P.isCompressedTexture?P.mipmaps[H]:P.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,re.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,re.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ft),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ht),P.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,H,Kt,Qt,gt,It,Vt,ie,re.data):P.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,H,Kt,Qt,re.width,re.height,Vt,re.data):g.texSubImage2D(g.TEXTURE_2D,H,Kt,Qt,gt,It,Vt,ie,re),g.pixelStorei(g.UNPACK_ROW_LENGTH,de),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ue),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Pt),g.pixelStorei(g.UNPACK_SKIP_ROWS,qt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Gt),H===0&&Y.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,D=null,j=null,H=0){P.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,j=arguments[1]||null,P=arguments[2],Y=arguments[3],H=arguments[4]||0);let gt,It,Ft,Ht,Kt,Qt,Vt,ie,de;const ue=P.isCompressedTexture?P.mipmaps[H]:P.image;D!==null?(gt=D.max.x-D.min.x,It=D.max.y-D.min.y,Ft=D.max.z-D.min.z,Ht=D.min.x,Kt=D.min.y,Qt=D.min.z):(gt=ue.width,It=ue.height,Ft=ue.depth,Ht=0,Kt=0,Qt=0),j!==null?(Vt=j.x,ie=j.y,de=j.z):(Vt=0,ie=0,de=0);const Pt=zt.convert(Y.format),qt=zt.convert(Y.type);let Gt;if(Y.isData3DTexture)w.setTexture3D(Y,0),Gt=g.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)w.setTexture2DArray(Y,0),Gt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const re=g.getParameter(g.UNPACK_ROW_LENGTH),Tt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),ye=g.getParameter(g.UNPACK_SKIP_PIXELS),Ee=g.getParameter(g.UNPACK_SKIP_ROWS),ge=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,ue.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ue.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ht),g.pixelStorei(g.UNPACK_SKIP_ROWS,Kt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Qt),P.isDataTexture||P.isData3DTexture?g.texSubImage3D(Gt,H,Vt,ie,de,gt,It,Ft,Pt,qt,ue.data):Y.isCompressedArrayTexture?g.compressedTexSubImage3D(Gt,H,Vt,ie,de,gt,It,Ft,Pt,ue.data):g.texSubImage3D(Gt,H,Vt,ie,de,gt,It,Ft,Pt,qt,ue),g.pixelStorei(g.UNPACK_ROW_LENGTH,re),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Tt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ye),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ee),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ge),H===0&&Y.generateMipmaps&&g.generateMipmap(Gt),N.unbindTexture()},this.initRenderTarget=function(P){Z.get(P).__webglFramebuffer===void 0&&w.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?w.setTextureCube(P,0):P.isData3DTexture?w.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?w.setTexture2DArray(P,0):w.setTexture2D(P,0),N.unbindTexture()},this.resetState=function(){B=0,I=0,R=null,N.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Pu?"display-p3":"srgb",e.unpackColorSpace=De.workingColorSpace===qa?"display-p3":"srgb"}}class Gn extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vr extends Do{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ad=new tn,ql=new gp,na=new ja,ia=new J;class sr extends Mn{constructor(t=new Sn,e=new vr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),na.radius+=o,t.ray.intersectsSphere(na)===!1)return;Ad.copy(s).invert(),ql.copy(t.ray).applyMatrix4(Ad);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let v=d,y=p;v<y;v++){const m=l.getX(v);ia.fromBufferAttribute(u,m),Pd(ia,m,c,s,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let v=d,y=p;v<y;v++)ia.fromBufferAttribute(u,v),Pd(ia,v,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Pd(n,t,e,i,s,o,r){const a=ql.distanceSqToPoint(n);if(a<e){const c=new J;ql.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class U1 extends Rn{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const h=i[s],d=i[s+1]-h,p=(r-h)/d;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new Jt:new J);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new J,s=[],o=[],r=[],a=new J,c=new tn;for(let p=0;p<=t;p++){const v=p/t;s[p]=this.getTangentAt(v,new J)}o[0]=new J,r[0]=new J;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(_n(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,v))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(_n(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let v=1;v<=t;v++)o[v].applyMatrix4(c.makeRotationAxis(s[v],p*v)),r[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Du extends Ni{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Jt){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class N1 extends Du{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Uu(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,p*=h,s(r,a,d,p)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const sa=new J,Vc=new Uu,Wc=new Uu,Xc=new Uu;class F1 extends Ni{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new J){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(sa.subVectors(s[0],s[1]).add(s[0]),l=sa);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(sa.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=sa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),v<1e-4&&(v=y),m<1e-4&&(m=y),Vc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,v,y,m),Wc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,v,y,m),Xc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,v,y,m)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Wc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Xc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Vc.calc(c),Wc.calc(c),Xc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rd(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function O1(n,t){const e=1-n;return e*e*t}function B1(n,t){return 2*(1-n)*n*t}function z1(n,t){return n*n*t}function or(n,t,e,i){return O1(n,t)+B1(n,e)+z1(n,i)}function G1(n,t){const e=1-n;return e*e*e*t}function H1(n,t){const e=1-n;return 3*e*e*n*t}function k1(n,t){return 3*(1-n)*n*n*t}function V1(n,t){return n*n*n*t}function rr(n,t,e,i,s){return G1(n,t)+H1(n,e)+k1(n,i)+V1(n,s)}class Cp extends Ni{constructor(t=new Jt,e=new Jt,i=new Jt,s=new Jt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Jt){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(rr(t,s.x,o.x,r.x,a.x),rr(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class W1 extends Ni{constructor(t=new J,e=new J,i=new J,s=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new J){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(rr(t,s.x,o.x,r.x,a.x),rr(t,s.y,o.y,r.y,a.y),rr(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ip extends Ni{constructor(t=new Jt,e=new Jt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Jt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Jt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class X1 extends Ni{constructor(t=new J,e=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new J){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lp extends Ni{constructor(t=new Jt,e=new Jt,i=new Jt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Jt){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(or(t,s.x,o.x,r.x),or(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class q1 extends Ni{constructor(t=new J,e=new J,i=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new J){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(or(t,s.x,o.x,r.x),or(t,s.y,o.y,r.y),or(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dp extends Ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Jt){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(Rd(a,c.x,l.x,h.x,u.x),Rd(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Jt().fromArray(s))}return this}}var jl=Object.freeze({__proto__:null,ArcCurve:N1,CatmullRomCurve3:F1,CubicBezierCurve:Cp,CubicBezierCurve3:W1,EllipseCurve:Du,LineCurve:Ip,LineCurve3:X1,QuadraticBezierCurve:Lp,QuadraticBezierCurve3:q1,SplineCurve:Dp});class j1 extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new jl[s.type]().fromJSON(s))}return this}}class Yl extends j1{constructor(t){super(),this.type="Path",this.currentPoint=new Jt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ip(this.currentPoint.clone(),new Jt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Lp(this.currentPoint.clone(),new Jt(t,e),new Jt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Cp(this.currentPoint.clone(),new Jt(t,e),new Jt(i,s),new Jt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Dp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new Du(t,e,i,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ae extends Sn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new J,h=new Jt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new en(r,3)),this.setAttribute("normal",new en(a,3)),this.setAttribute("uv",new en(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class te extends Sn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],p=[];let v=0;const y=[],m=i/2;let f=0;A(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new en(u,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(p,2));function A(){const b=new J,B=new J;let I=0;const R=(e-t)/i;for(let z=0;z<=o;z++){const Q=[],M=z/o,E=M*(e-t)+t;for(let U=0;U<=s;U++){const k=U/s,et=k*c+a,rt=Math.sin(et),$=Math.cos(et);B.x=E*rt,B.y=-M*i+m,B.z=E*$,u.push(B.x,B.y,B.z),b.set(rt,R,$).normalize(),d.push(b.x,b.y,b.z),p.push(k,1-M),Q.push(v++)}y.push(Q)}for(let z=0;z<s;z++)for(let Q=0;Q<o;Q++){const M=y[Q][z],E=y[Q+1][z],U=y[Q+1][z+1],k=y[Q][z+1];t>0&&(h.push(M,E,k),I+=3),e>0&&(h.push(E,U,k),I+=3)}l.addGroup(f,I,0),f+=I}function S(b){const B=v,I=new Jt,R=new J;let z=0;const Q=b===!0?t:e,M=b===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),v++;const E=v;for(let U=0;U<=s;U++){const et=U/s*c+a,rt=Math.cos(et),$=Math.sin(et);R.x=Q*$,R.y=m*M,R.z=Q*rt,u.push(R.x,R.y,R.z),d.push(0,M,0),I.x=rt*.5+.5,I.y=$*.5*M+.5,p.push(I.x,I.y),v++}for(let U=0;U<s;U++){const k=B+U,et=E+U;b===!0?h.push(et,et+1,k):h.push(et+1,et,k),z+=3}l.addGroup(f,z,b===!0?1:2),f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ai extends te{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ai(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cn extends Yl{constructor(t){super(t),this.uuid=Vs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Yl().fromJSON(s))}return this}}const Y1={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=Up(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,p;if(i&&(o=Q1(n,t,o,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let v=e;v<s;v+=e)u=n[v],d=n[v+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return _r(o,r,e,a,c,p,0),r}};function Up(n,t,e,i,s){let o,r;if(s===uS(n,t,e,i)>0)for(o=t;o<e;o+=i)r=Cd(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=Cd(o,n[o],n[o+1],r);return r&&Ja(r,r.next)&&(yr(r),r=r.next),r}function Hs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ja(e,e.next)||on(e.prev,e,e.next)===0)){if(yr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function _r(n,t,e,i,s,o,r){if(!n)return;!r&&o&&sS(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?K1(n,i,s,o):$1(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),yr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=Z1(Hs(n),t,e),_r(n,t,e,i,s,o,2)):r===2&&J1(n,t,e,i,s,o):_r(Hs(n),t,e,i,s,o,1);break}}}function $1(n){const t=n.prev,e=n,i=n.next;if(on(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let v=i.next;for(;v!==t;){if(v.x>=h&&v.x<=d&&v.y>=u&&v.y<=p&&ho(s,a,o,c,r,l,v.x,v.y)&&on(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function K1(n,t,e,i){const s=n.prev,o=n,r=n.next;if(on(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,p=a<c?a<l?a:l:c<l?c:l,v=h<u?h<d?h:d:u<d?u:d,y=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=$l(p,v,t,e,i),A=$l(y,m,t,e,i);let S=n.prevZ,b=n.nextZ;for(;S&&S.z>=f&&b&&b.z<=A;){if(S.x>=p&&S.x<=y&&S.y>=v&&S.y<=m&&S!==s&&S!==r&&ho(a,h,c,u,l,d,S.x,S.y)&&on(S.prev,S,S.next)>=0||(S=S.prevZ,b.x>=p&&b.x<=y&&b.y>=v&&b.y<=m&&b!==s&&b!==r&&ho(a,h,c,u,l,d,b.x,b.y)&&on(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;S&&S.z>=f;){if(S.x>=p&&S.x<=y&&S.y>=v&&S.y<=m&&S!==s&&S!==r&&ho(a,h,c,u,l,d,S.x,S.y)&&on(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;b&&b.z<=A;){if(b.x>=p&&b.x<=y&&b.y>=v&&b.y<=m&&b!==s&&b!==r&&ho(a,h,c,u,l,d,b.x,b.y)&&on(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Z1(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Ja(s,o)&&Np(s,i,i.next,o)&&xr(s,o)&&xr(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),yr(i),yr(i.next),i=n=o),i=i.next}while(i!==n);return Hs(i)}function J1(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&aS(r,a)){let c=Fp(r,a);r=Hs(r,r.next),c=Hs(c,c.next),_r(r,t,e,i,s,o,0),_r(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function Q1(n,t,e,i){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=Up(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(rS(l));for(s.sort(tS),o=0;o<s.length;o++)e=eS(s[o],e);return e}function tS(n,t){return n.x-t.x}function eS(n,t){const e=nS(n,t);if(!e)return t;const i=Fp(e,n);return Hs(i,i.next),Hs(e,e.next)}function nS(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&ho(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),xr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&iS(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function iS(n,t){return on(n.prev,n,t.prev)<0&&on(t.next,n,n.next)<0}function sS(n,t,e,i){let s=n;do s.z===0&&(s.z=$l(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,oS(s)}function oS(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function $l(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function rS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ho(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function aS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!cS(n,t)&&(xr(n,t)&&xr(t,n)&&lS(n,t)&&(on(n.prev,n,t.prev)||on(n,t.prev,t))||Ja(n,t)&&on(n.prev,n,n.next)>0&&on(t.prev,t,t.next)>0)}function on(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ja(n,t){return n.x===t.x&&n.y===t.y}function Np(n,t,e,i){const s=ra(on(n,t,e)),o=ra(on(n,t,i)),r=ra(on(e,i,n)),a=ra(on(e,i,t));return!!(s!==o&&r!==a||s===0&&oa(n,e,t)||o===0&&oa(n,i,t)||r===0&&oa(e,n,i)||a===0&&oa(e,t,i))}function oa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ra(n){return n>0?1:n<0?-1:0}function cS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Np(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function xr(n,t){return on(n.prev,n,n.next)<0?on(n,t,n.next)>=0&&on(n,n.prev,t)>=0:on(n,t,n.prev)<0||on(n,n.next,t)<0}function lS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Fp(n,t){const e=new Kl(n.i,n.x,n.y),i=new Kl(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Cd(n,t,e,i){const s=new Kl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function yr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uS(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class Mo{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return Mo.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];Id(t),Ld(i,t);let r=t.length;e.forEach(Id);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Ld(i,e[c]);const a=Y1.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Id(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ld(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Hn extends Sn{constructor(t=new Cn([new Jt(.5,.5),new Jt(-.5,.5),new Jt(-.5,-.5),new Jt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new en(s,3)),this.setAttribute("uv",new en(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:hS;let S,b=!1,B,I,R,z;f&&(S=f.getSpacedPoints(h),b=!0,d=!1,B=f.computeFrenetFrames(h,!1),I=new J,R=new J,z=new J),d||(m=0,p=0,v=0,y=0);const Q=a.extractPoints(l);let M=Q.shape;const E=Q.holes;if(!Mo.isClockWise(M)){M=M.reverse();for(let it=0,g=E.length;it<g;it++){const T=E[it];Mo.isClockWise(T)&&(E[it]=T.reverse())}}const k=Mo.triangulateShape(M,E),et=M;for(let it=0,g=E.length;it<g;it++){const T=E[it];M=M.concat(T)}function rt(it,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(g,T)}const $=M.length,nt=k.length;function X(it,g,T){let L,F,N;const K=it.x-g.x,Z=it.y-g.y,w=T.x-it.x,_=T.y-it.y,C=K*K+Z*Z,q=K*_-Z*w;if(Math.abs(q)>Number.EPSILON){const V=Math.sqrt(C),W=Math.sqrt(w*w+_*_),dt=g.x-Z/V,ct=g.y+K/V,mt=T.x-_/W,At=T.y+w/W,ut=((mt-dt)*_-(At-ct)*w)/(K*_-Z*w);L=dt+K*ut-it.x,F=ct+Z*ut-it.y;const _t=L*L+F*F;if(_t<=2)return new Jt(L,F);N=Math.sqrt(_t/2)}else{let V=!1;K>Number.EPSILON?w>Number.EPSILON&&(V=!0):K<-Number.EPSILON?w<-Number.EPSILON&&(V=!0):Math.sign(Z)===Math.sign(_)&&(V=!0),V?(L=-Z,F=K,N=Math.sqrt(C)):(L=K,F=Z,N=Math.sqrt(C/2))}return new Jt(L/N,F/N)}const vt=[];for(let it=0,g=et.length,T=g-1,L=it+1;it<g;it++,T++,L++)T===g&&(T=0),L===g&&(L=0),vt[it]=X(et[it],et[T],et[L]);const yt=[];let wt,Dt=vt.concat();for(let it=0,g=E.length;it<g;it++){const T=E[it];wt=[];for(let L=0,F=T.length,N=F-1,K=L+1;L<F;L++,N++,K++)N===F&&(N=0),K===F&&(K=0),wt[L]=X(T[L],T[N],T[K]);yt.push(wt),Dt=Dt.concat(wt)}for(let it=0;it<m;it++){const g=it/m,T=p*Math.cos(g*Math.PI/2),L=v*Math.sin(g*Math.PI/2)+y;for(let F=0,N=et.length;F<N;F++){const K=rt(et[F],vt[F],L);O(K.x,K.y,-T)}for(let F=0,N=E.length;F<N;F++){const K=E[F];wt=yt[F];for(let Z=0,w=K.length;Z<w;Z++){const _=rt(K[Z],wt[Z],L);O(_.x,_.y,-T)}}}const Wt=v+y;for(let it=0;it<$;it++){const g=d?rt(M[it],Dt[it],Wt):M[it];b?(R.copy(B.normals[0]).multiplyScalar(g.x),I.copy(B.binormals[0]).multiplyScalar(g.y),z.copy(S[0]).add(R).add(I),O(z.x,z.y,z.z)):O(g.x,g.y,0)}for(let it=1;it<=h;it++)for(let g=0;g<$;g++){const T=d?rt(M[g],Dt[g],Wt):M[g];b?(R.copy(B.normals[it]).multiplyScalar(T.x),I.copy(B.binormals[it]).multiplyScalar(T.y),z.copy(S[it]).add(R).add(I),O(z.x,z.y,z.z)):O(T.x,T.y,u/h*it)}for(let it=m-1;it>=0;it--){const g=it/m,T=p*Math.cos(g*Math.PI/2),L=v*Math.sin(g*Math.PI/2)+y;for(let F=0,N=et.length;F<N;F++){const K=rt(et[F],vt[F],L);O(K.x,K.y,u+T)}for(let F=0,N=E.length;F<N;F++){const K=E[F];wt=yt[F];for(let Z=0,w=K.length;Z<w;Z++){const _=rt(K[Z],wt[Z],L);b?O(_.x,_.y+S[h-1].y,S[h-1].x+T):O(_.x,_.y,u+T)}}}at(),pt();function at(){const it=s.length/3;if(d){let g=0,T=$*g;for(let L=0;L<nt;L++){const F=k[L];lt(F[2]+T,F[1]+T,F[0]+T)}g=h+m*2,T=$*g;for(let L=0;L<nt;L++){const F=k[L];lt(F[0]+T,F[1]+T,F[2]+T)}}else{for(let g=0;g<nt;g++){const T=k[g];lt(T[2],T[1],T[0])}for(let g=0;g<nt;g++){const T=k[g];lt(T[0]+$*h,T[1]+$*h,T[2]+$*h)}}i.addGroup(it,s.length/3-it,0)}function pt(){const it=s.length/3;let g=0;bt(et,g),g+=et.length;for(let T=0,L=E.length;T<L;T++){const F=E[T];bt(F,g),g+=F.length}i.addGroup(it,s.length/3-it,1)}function bt(it,g){let T=it.length;for(;--T>=0;){const L=T;let F=T-1;F<0&&(F=it.length-1);for(let N=0,K=h+m*2;N<K;N++){const Z=$*N,w=$*(N+1),_=g+L+Z,C=g+F+Z,q=g+F+w,V=g+L+w;ot(_,C,q,V)}}}function O(it,g,T){c.push(it),c.push(g),c.push(T)}function lt(it,g,T){ht(it),ht(g),ht(T);const L=s.length/3,F=A.generateTopUV(i,s,L-3,L-2,L-1);Mt(F[0]),Mt(F[1]),Mt(F[2])}function ot(it,g,T,L){ht(it),ht(g),ht(L),ht(g),ht(T),ht(L);const F=s.length/3,N=A.generateSideWallUV(i,s,F-6,F-3,F-2,F-1);Mt(N[0]),Mt(N[1]),Mt(N[3]),Mt(N[1]),Mt(N[2]),Mt(N[3])}function ht(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function Mt(it){o.push(it.x),o.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return dS(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jl[s.type]().fromJSON(s)),new Hn(i,t.options)}}const hS={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new Jt(o,r),new Jt(a,c),new Jt(l,h)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],p=t[s*3+1],v=t[s*3+2],y=t[o*3],m=t[o*3+1],f=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new Jt(r,1-c),new Jt(l,1-u),new Jt(d,1-v),new Jt(y,1-f)]:[new Jt(a,1-c),new Jt(h,1-u),new Jt(p,1-v),new Jt(m,1-f)]}};function dS(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ft extends Sn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new J,d=new J,p=[],v=[],y=[],m=[];for(let f=0;f<=i;f++){const A=[],S=f/i;let b=0;f===0&&r===0?b=.5/e:f===i&&c===Math.PI&&(b=-.5/e);for(let B=0;B<=e;B++){const I=B/e;u.x=-t*Math.cos(s+I*o)*Math.sin(r+S*a),u.y=t*Math.cos(r+S*a),u.z=t*Math.sin(s+I*o)*Math.sin(r+S*a),v.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(I+b,1-S),A.push(l++)}h.push(A)}for(let f=0;f<i;f++)for(let A=0;A<e;A++){const S=h[f][A+1],b=h[f][A],B=h[f+1][A],I=h[f+1][A+1];(f!==0||r>0)&&p.push(S,b,I),(f!==i-1||c<Math.PI)&&p.push(b,B,I)}this.setIndex(p),this.setAttribute("position",new en(v,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ft(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class si extends Sn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new J,u=new J,d=new J;for(let p=0;p<=i;p++)for(let v=0;v<=s;v++){const y=v/s*o,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(v/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=s;v++){const y=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,f=(s+1)*(p-1)+v,A=(s+1)*p+v;r.push(y,m,A),r.push(m,f,A)}this.setIndex(r),this.setAttribute("position",new en(a,3)),this.setAttribute("normal",new en(c,3)),this.setAttribute("uv",new en(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ut extends Do{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hp,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ot extends Ut{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Jt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Ia={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class fS{constructor(t,e,i){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],v=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const pS=new fS;class No{constructor(t){this.manager=t!==void 0?t:pS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}No.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class mS extends Error{constructor(t,e){super(t),this.response=e}}class gS extends No{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Ia.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(qi[t]!==void 0){qi[t].push({onLoad:e,onProgress:i,onError:s});return}qi[t]=[],qi[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=qi[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,v=p!==0;let y=0;const m=new ReadableStream({start(f){A();function A(){u.read().then(({done:S,value:b})=>{if(S)f.close();else{y+=b.byteLength;const B=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:p});for(let I=0,R=h.length;I<R;I++){const z=h[I];z.onProgress&&z.onProgress(B)}f.enqueue(b),A()}},S=>{f.error(S)})}}});return new Response(m)}else throw new mS(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(v=>p.decode(v))}}}).then(l=>{Ia.add(t,l);const h=qi[t];delete qi[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=qi[t];if(h===void 0)throw this.manager.itemError(t),l;delete qi[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Op extends No{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Ia.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=gr("img");function c(){h(),Ia.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class Tr extends No{constructor(t){super(t)}load(t,e,i,s){const o=new Cu;o.colorSpace=vi;const r=new Op(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function c(l){r.load(t[l],function(h){o.images[l]=h,a++,a===6&&(o.needsUpdate=!0,e&&e(o))},void 0,s)}for(let l=0;l<t.length;++l)c(l);return o}}class jn extends No{constructor(t){super(t)}load(t,e,i,s){const o=new Rn,r=new Op(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}}class Nu extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const qc=new tn,Dd=new J,Ud=new J;class Bp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Iu,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Dd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dd),Ud.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ud),e.updateMatrixWorld(),qc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nd=new tn,Xo=new J,jc=new J;class vS extends Bp{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Jt(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Xo.setFromMatrixPosition(t.matrixWorld),i.position.copy(Xo),jc.copy(i.position),jc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(jc),i.updateMatrixWorld(),s.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd)}}class li extends Nu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _S extends Bp{constructor(){super(new bp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ui extends Nu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new _S}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hi extends Nu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class zp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fd(){return performance.now()}class xS{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Yl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,o,r){return this.currentPath.bezierCurveTo(t,e,i,s,o,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(f){const A=[];for(let S=0,b=f.length;S<b;S++){const B=f[S],I=new Cn;I.curves=B.curves,A.push(I)}return A}function i(f,A){const S=A.length;let b=!1;for(let B=S-1,I=0;I<S;B=I++){let R=A[B],z=A[I],Q=z.x-R.x,M=z.y-R.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(R=A[I],Q=-Q,z=A[B],M=-M),f.y<R.y||f.y>z.y)continue;if(f.y===R.y){if(f.x===R.x)return!0}else{const E=M*(f.x-R.x)-Q*(f.y-R.y);if(E===0)return!0;if(E<0)continue;b=!b}}else{if(f.y!==R.y)continue;if(z.x<=f.x&&f.x<=R.x||R.x<=f.x&&f.x<=z.x)return!0}}return b}const s=Mo.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,c;const l=[];if(o.length===1)return a=o[0],c=new Cn,c.curves=a.curves,l.push(c),l;let h=!s(o[0].getPoints());h=t?!h:h;const u=[],d=[];let p=[],v=0,y;d[v]=void 0,p[v]=[];for(let f=0,A=o.length;f<A;f++)a=o[f],y=a.getPoints(),r=s(y),r=t?!r:r,r?(!h&&d[v]&&v++,d[v]={s:new Cn,p:y},d[v].s.curves=a.curves,h&&v++,p[v]=[]):p[v].push({h:a,p:y[0]});if(!d[0])return e(o);if(d.length>1){let f=!1,A=0;for(let S=0,b=d.length;S<b;S++)u[S]=[];for(let S=0,b=d.length;S<b;S++){const B=p[S];for(let I=0;I<B.length;I++){const R=B[I];let z=!0;for(let Q=0;Q<d.length;Q++)i(R.p,d[Q].p)&&(S!==Q&&A++,z?(z=!1,u[Q].push(R)):f=!0);z&&u[S].push(R)}}A>0&&f===!1&&(p=u)}let m;for(let f=0,A=d.length;f<A;f++){c=d[f].s,l.push(c),m=p[f];for(let S=0,b=m.length;S<b;S++)c.holes.push(m[S].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mu);class di extends No{constructor(t){super(t)}load(t,e,i,s){const o=this,r=new gS(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const c=o.parse(JSON.parse(a));e&&e(c)},i,s)}parse(t){return new yS(t)}}class yS{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=MS(t,e,this.data);for(let o=0,r=s.length;o<r;o++)i.push(...s[o].toShapes());return i}}function MS(n,t,e){const i=Array.from(n),s=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,r=[];let a=0,c=0;for(let l=0;l<i.length;l++){const h=i[l];if(h===`
`)a=0,c-=o;else{const u=wS(h,s,a,c,e);a+=u.offsetX,r.push(u.path)}}return r}function wS(n,t,e,i,s){const o=s.glyphs[n]||s.glyphs["?"];if(!o){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const r=new xS;let a,c,l,h,u,d,p,v;if(o.o){const y=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let m=0,f=y.length;m<f;)switch(y[m++]){case"m":a=y[m++]*t+e,c=y[m++]*t+i,r.moveTo(a,c);break;case"l":a=y[m++]*t+e,c=y[m++]*t+i,r.lineTo(a,c);break;case"q":l=y[m++]*t+e,h=y[m++]*t+i,u=y[m++]*t+e,d=y[m++]*t+i,r.quadraticCurveTo(u,d,l,h);break;case"b":l=y[m++]*t+e,h=y[m++]*t+i,u=y[m++]*t+e,d=y[m++]*t+i,p=y[m++]*t+e,v=y[m++]*t+i,r.bezierCurveTo(u,d,p,v,l,h);break}}return{offsetX:o.ha*t,path:r}}class ke extends Hn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const SS=Ln({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=null,s=jt(!1),o=jt(!1),r=jt(!1);return Vn(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Gn,l=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),h=new zn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Xt,d=new hi(16777215,2);c.add(d);const p=new ui(16777215,4);p.position.set(5,5,5),c.add(p);const v=new li(16777215,5,50);v.position.set(0,2,4),c.add(v);const y=new jn,m=y.load("/3d-bear-arts/assets/lv2.jpg"),f=y.load("/3d-bear-arts/assets/lv2.jpg");m.wrapS=m.wrapT=Ke,f.wrapS=f.wrapT=Ke;const A=new Ot({color:8343336,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:f,envMapIntensity:.7}),S=new Ot({color:5978654,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:f,envMapIntensity:.7}),b=new Ot({color:13152668,metalness:.2,roughness:.05,bumpMap:m,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:f,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:be});new Ot({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const B=new ft(1,32,32,0,Math.PI),I=new x(B,b),R=new x(B,A);I.scale.set(.85,.85,.8),R.scale.set(.85,.85,.8),I.position.y=-.2,R.position.y=-.2,I.rotation.y=Math.PI/2,R.rotation.y=Math.PI*1.5;const z=new Ae(1,32),Q=new x(z,A);Q.scale.set(.85,.85,.8),Q.position.set(0,-.2,0),Q.rotation.y=Math.PI/2;const M=new Xt;M.add(I),M.add(R),M.add(Q),u.add(M);const E=new ft(.6,32,32,0,Math.PI),U=new x(E,A);U.scale.set(1,.95,.95),U.position.set(0,1,0),U.rotation.y=Math.PI*1.5;const k=new x(E,b);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI/2;const et=new Ae(.6,32),rt=new x(et,A);rt.position.set(0,1,0),rt.rotation.y=Math.PI/2,rt.scale.set(1,.95,.95);const $=new Xt;$.add(U),$.add(k),$.add(rt),u.add($);const nt=new ft(.25,32,32),X=new x(nt,A);X.position.set(-.45,1.35,-.1),u.add(X);const vt=new x(nt,b);vt.position.set(.45,1.35,-.1),u.add(vt);const yt=new ft(.25,32,32,Math.PI/2,Math.PI),wt=new x(yt,S);wt.scale.set(1.1,.6,.8),wt.position.set(0,.84,.5),wt.rotation.y=Math.PI;const Dt=new ft(.25,32,32,Math.PI/2,Math.PI),Wt=new x(Dt,b);Wt.scale.set(1.1,.6,.8),Wt.position.set(0,.84,.5),Wt.rotation.y=0;const at=new Ae(.25,32),pt=new x(at,A);pt.scale.set(.8,.6,.8),pt.position.set(0,.84,.5),pt.rotation.y=Math.PI/2;const bt=new Xt;bt.add(wt),bt.add(Wt),bt.add(pt),u.add(bt);const O=new Cn;O.moveTo(0,0),O.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),O.bezierCurveTo(-.6,.3,0,.6,0,1),O.bezierCurveTo(0,.6,.6,.3,.6,0),O.bezierCurveTo(.6,-.3,0,-.3,0,0);const lt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ot({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const ot=new Hn(O,lt),ht=new x(ot,A);ht.scale.set(.1,.1,.1),ht.rotation.z=le.degToRad(210),ht.rotation.x=le.degToRad(5),ht.rotation.y=le.degToRad(-45),ht.position.set(-.4,.9,.45);const Mt=new x(ot,S);Mt.scale.set(.6,.5,.5),Mt.position.set(.35,0,0),Mt.rotation.y=Math.PI,Mt.rotation.x=Math.PI;const it=new x(ot,S);it.scale.set(.2,.2,.2),it.position.set(.5,-.1,.2),it.rotation.y=Math.PI,it.rotation.x=Math.PI,u.add(it);const g=new yn(1.3,1.2,.6),T=new x(g,A);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new si(.15,.025,10,100);new Ot({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const F=new x(L,A);F.position.set(.35,.1,.1),F.rotation.z=Math.PI/2,F.rotation.x=Math.PI/8,F.rotation.y=Math.PI/14;const N=new x(L,A);N.position.set(.35,.1,.13),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/-8,N.rotation.y=Math.PI/12;const K=new Xt;K.add(T),K.add(F),K.add(N),u.add(K);const Z=new ft(.35,32,32),w=new x(Z,A);w.scale.set(.75,1.25,.65),w.position.set(-.7,-.15,.2),u.add(w);const _=new x(Z,b);_.scale.set(.75,1.25,.65),_.position.set(.7,-.15,.2),u.add(_);const C=new te(.2,.22,.6,32),q=new x(C,A);q.position.set(-.4,-1.05,0),u.add(q);const V=new x(C,b);V.position.set(.4,-1.05,0),u.add(V);const W=new ft(.3,32,32),dt=new x(W,A);dt.scale.set(1,.72,1.5),dt.position.set(-.4,-1.45,.17),u.add(dt);const ct=new x(W,b);ct.scale.set(1,.72,1.5),ct.position.set(.4,-1.45,.17),u.add(ct);const mt=new ft(.44,32,32),At=new x(mt,A);At.position.set(-.15,-.45,-.4),u.add(At);const ut=new x(mt,b);ut.position.set(.15,-.45,-.4),u.add(ut);const _t=new ft(.18,32,32),Lt=new x(_t,A);Lt.position.set(0,-.35,-.8),u.add(Lt),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const St=new ke("X",{font:tt,size:.2,depth:.05});new es({color:0});const Et=new x(St,S);Et.position.set(-.3,.99,.53),Et.rotation.x=le.degToRad(-5),Et.rotation.y=le.degToRad(-15),u.add(Et);const kt=new ke("O",{font:tt,size:.2,depth:.05});new es({color:0});const ee=new x(kt,S);ee.position.set(.14,.99,.53),ee.rotation.y=le.degToRad(12),ee.rotation.x=le.degToRad(-5),u.add(ee)}),Lt.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Rt=()=>{u.rotation.y,u.rotation.x},$t=()=>{s.value=!0,o.value=!1,r.value=!1},zt=()=>{s.value=!1,o.value=!0,r.value=!1},Yt=()=>{s.value=!1,o.value=!1,Rt()},G=tt=>{const St=window.innerWidth/2;tt>St?$t():zt(),Rt()},xt=tt=>{clearTimeout(i),Yt(),r.value=!0;const St={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1};if(r.value){const Et=St.x*Math.PI*.2,kt=St.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=kt}i=setTimeout(()=>{r.value=!1,G(tt.clientX)},500)};window.addEventListener("mousemove",xt);const st=tt=>{if(r.value){const St={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1},Et=St.x*Math.PI*.2,kt=St.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=kt}};window.addEventListener("mousemove",st),a(),Ve(()=>t.bodyPosition,tt=>{u.position.set(tt.x,tt.y,tt.z)}),Ve(()=>t.cameraPosition,tt=>{l.position.set(t.bodyPosition.x,1,tt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Wn(),Yn("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),bS=$n(SS,[["__scopeId","data-v-f3beb116"]]),ES=Ln({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=null,s=jt(!1),o=jt(!1),r=jt(!1);return Vn(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Gn,l=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),h=new zn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Xt,d=new hi(16777215,2);c.add(d);const p=new ui(16777215,4);p.position.set(5,5,5),c.add(p);const v=new li(16777215,5,50);v.position.set(0,2,4),c.add(v);const y=new jn,m=y.load("/3d-bear-arts/assets/pop6.jpg"),f=y.load("/3d-bear-arts/assets/pop7.jpg");m.wrapS=m.wrapT=Ke,f.wrapS=f.wrapT=Ke;const A=new Ot({color:16738740,map:f,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),S=new Ot({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:be}),b=new Ot({color:16766720,map:m,metalness:.3,roughness:.5}),B=new Ot({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:be}),I=new Ot({color:9055202,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ot({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:be});const R=new Ot({color:65535,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),z=new Ot({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:be}),Q=new ft(1,32,32,0,Math.PI),M=new x(Q,S),E=new x(Q,A);M.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),M.position.y=-.2,E.position.y=-.2,M.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const U=new Ae(1,32),k=new x(U,A);k.scale.set(.85,.85,.8),k.position.set(0,-.2,0),k.rotation.y=Math.PI/2;const et=new Xt;et.add(M),et.add(E),et.add(k),u.add(et);const rt=new ft(.6,32,32,0,Math.PI),$=new x(rt,b);$.scale.set(1,.95,.95),$.position.set(0,1,0),$.rotation.y=Math.PI*1.5;const nt=new x(rt,B);nt.scale.set(1,.95,.95),nt.position.set(0,1,0),nt.rotation.y=Math.PI/2;const X=new Ae(.6,32),vt=new x(X,b);vt.position.set(0,1,0),vt.rotation.y=Math.PI/2,vt.scale.set(1,.95,.95);const yt=new Xt;yt.add($),yt.add(nt),yt.add(vt),u.add(yt);const wt=new ft(.25,32,32),Dt=new x(wt,A);Dt.position.set(-.45,1.35,-.1),u.add(Dt);const Wt=new x(wt,S);Wt.position.set(.45,1.35,-.1),u.add(Wt);const at=new ft(.25,32,32,Math.PI/2,Math.PI),pt=new x(at,b);pt.scale.set(1.1,.6,.8),pt.position.set(0,.84,.5),pt.rotation.y=Math.PI;const bt=new ft(.25,32,32,Math.PI/2,Math.PI),O=new x(bt,B);O.scale.set(1.1,.6,.8),O.position.set(0,.84,.5),O.rotation.y=0;const lt=new Ae(.25,32),ot=new x(lt,b);ot.scale.set(.8,.6,.8),ot.position.set(0,.84,.5),ot.rotation.y=Math.PI/2;const ht=new Xt;ht.add(pt),ht.add(O),ht.add(ot),u.add(ht);const Mt=new Cn;Mt.moveTo(0,0),Mt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Mt.bezierCurveTo(-.6,.3,0,.6,0,1),Mt.bezierCurveTo(0,.6,.6,.3,.6,0),Mt.bezierCurveTo(.6,-.3,0,-.3,0,0);const it={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Hn(Mt,it),T=new x(g,b);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const L=new x(g,R);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const F=new x(g,A);F.scale.set(.25,.25,.27),F.position.set(.4,.3,-.2),F.rotation.y=Math.PI,F.rotation.x=Math.PI,u.add(F);const N=new ft(.35,32,32),K=new x(N,R);K.scale.set(.75,1.25,.65),K.position.set(-.7,-.15,.2),u.add(K);const Z=new x(N,z);Z.scale.set(.75,1.25,.65),Z.position.set(.7,-.15,.2),u.add(Z);const w=new te(.2,.22,.6,32),_=new x(w,b);_.position.set(-.4,-1.05,0),u.add(_);const C=new x(w,B);C.position.set(.4,-1.05,0),u.add(C);const q=new ft(.3,32,32),V=new x(q,b);V.scale.set(1,.72,1.5),V.position.set(-.4,-1.45,.17),u.add(V);const W=new x(q,B);W.scale.set(1,.72,1.5),W.position.set(.4,-1.45,.17),u.add(W);const dt=new ft(.44,32,32),ct=new x(dt,A);ct.position.set(-.15,-.45,-.4),u.add(ct);const mt=new x(dt,S);mt.position.set(.15,-.45,-.4),u.add(mt);const At=new ft(.18,32,32),ut=new x(At,A);ut.position.set(0,-.35,-.8),u.add(ut),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(xt){const st=new ke("X",{font:xt,size:.2,depth:.05});new es({color:0});const tt=new x(st,A);tt.position.set(-.3,.99,.53),tt.rotation.x=le.degToRad(-5),tt.rotation.y=le.degToRad(-15),u.add(tt);const St=new ke("O",{font:xt,size:.2,depth:.05});new es({color:0});const Et=new x(St,R);Et.position.set(.14,.99,.53),Et.rotation.y=le.degToRad(12),Et.rotation.x=le.degToRad(-5),u.add(Et);const kt=new ke("POP",{font:xt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),ee=new Ot({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ot({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const se=new Ot({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),oe=new Ot({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ne=new x(kt,ee);ne.scale.set(.15,.15,.15),ne.position.set(.03,1.16,.1),ne.rotateZ(-25),u.add(ne);const fe=new x(kt,I);fe.scale.set(.14,.14,.14),fe.rotateZ(45),fe.position.set(.2,-.7,.3),u.add(fe);const ae=new x(kt,se);ae.scale.set(.14,.14,.14),ae.rotateZ(45),ae.rotateY(45),ae.position.set(.3,.7,.3),u.add(ae);const ve=new x(kt,se);ve.scale.set(.15,.15,.15),ve.rotateZ(45),ve.rotateY(45),ve.position.set(.35,-1.5,.3),u.add(ve);const ce=new x(kt,oe);ce.scale.set(.17,.17,.17),ce.rotateZ(45),ce.rotateY(15),ce.position.set(.35,1,.3),u.add(ce)}),ut.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Lt=()=>{u.rotation.y,u.rotation.x},Nt=()=>{s.value=!0,o.value=!1,r.value=!1},Rt=()=>{s.value=!1,o.value=!0,r.value=!1},$t=()=>{s.value=!1,o.value=!1,Lt()},zt=xt=>{const st=window.innerWidth/2;xt>st?Nt():Rt(),Lt()},Yt=xt=>{clearTimeout(i),$t(),r.value=!0;const st={x:xt.clientX/window.innerWidth*2-1,y:-(xt.clientY/window.innerHeight)*2+1};if(r.value){const tt=st.x*Math.PI*.2,St=st.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=St}i=setTimeout(()=>{r.value=!1,zt(xt.clientX)},500)};window.addEventListener("mousemove",Yt);const G=xt=>{if(r.value){const st={x:xt.clientX/window.innerWidth*2-1,y:-(xt.clientY/window.innerHeight)*2+1},tt=st.x*Math.PI*.2,St=st.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=St}};window.addEventListener("mousemove",G),a(),Ve(()=>t.bodyPosition,xt=>{u.position.set(xt.x,xt.y,xt.z)}),Ve(()=>t.cameraPosition,xt=>{l.position.set(t.bodyPosition.x,1,xt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Wn(),Yn("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),TS=$n(ES,[["__scopeId","data-v-8cfea564"]]),AS={class:"pixel-controls"},PS={class:"side-buttons"},RS=Ln({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);Vn(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03);const tt=xt.getElapsedTime();G.forEach((St,Et)=>{const kt=.2+Math.sin(tt*3+st[Et])*.1;St.scale.set(kt,kt,kt)}),y.render(p,v)};const p=new Gn,v=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),y=new zn({antialias:!0,alpha:!0});y.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(y.domElement);const m=new Xt,f=new Xt;p.add(f);const A=new hi(16777215,2);p.add(A);const S=new ui(16777215,4);S.position.set(5,5,5),p.add(S);const b=new li(16777215,5,50);b.position.set(0,2,4),p.add(b);const B=new jn,I=B.load("/3d-bear-arts/assets/pop6.jpg"),R=B.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=Ke,R.wrapS=R.wrapT=Ke,R.repeat.set(2,2);const z=new Ot({color:16738740,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Q=new Ot({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:be}),M=new Ot({color:16766720,map:I,metalness:.3,roughness:.5}),E=new Ot({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:be}),U=new Ot({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Ot({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),et=new Ot({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:be}),rt=new ft(1,32,32,0,Math.PI),$=new x(rt,Q),nt=new x(rt,z);$.scale.set(.85,.85,.8),nt.scale.set(.85,.85,.8),$.position.y=-.2,nt.position.y=-.2,$.rotation.y=Math.PI/2,nt.rotation.y=Math.PI*1.5;const X=new Ae(1,32),vt=new x(X,z);vt.scale.set(.85,.85,.8),vt.position.set(0,-.2,0),vt.rotation.y=Math.PI/2;const yt=new Xt;yt.add($),yt.add(nt),yt.add(vt),m.add(yt);const wt=new ft(.6,32,32,0,Math.PI),Dt=new x(wt,M);Dt.scale.set(1,.95,.95),Dt.position.set(0,1,0),Dt.rotation.y=Math.PI*1.5;const Wt=new x(wt,E);Wt.scale.set(1,.95,.95),Wt.position.set(0,1,0),Wt.rotation.y=Math.PI/2;const at=new Ae(.6,32),pt=new x(at,M);pt.position.set(0,1,0),pt.rotation.y=Math.PI/2,pt.scale.set(1,.95,.95);const bt=new Xt;bt.add(Dt),bt.add(Wt),bt.add(pt),m.add(bt);const O=new ft(.25,32,32),lt=new x(O,z);lt.position.set(-.45,1.35,-.1),m.add(lt);const ot=new x(O,Q);ot.position.set(.45,1.35,-.1),m.add(ot);const ht=new ft(.25,32,32,Math.PI/2,Math.PI),Mt=new x(ht,M);Mt.scale.set(1.1,.6,.8),Mt.position.set(0,.84,.5),Mt.rotation.y=Math.PI;const it=new ft(.25,32,32,Math.PI/2,Math.PI),g=new x(it,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new Ae(.25,32),L=new x(T,M);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const F=new Xt;F.add(Mt),F.add(g),F.add(L),m.add(F);const N=new Cn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const K={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Z=new Hn(N,K),w=new x(Z,M);w.scale.set(.5,.5,.5),w.position.set(.3,0,0),w.rotation.y=Math.PI,w.rotation.x=Math.PI,m.add(w);const _=new x(Z,k);_.scale.set(.2,.2,.25),_.position.set(.35,-.3,.4),_.rotation.y=Math.PI,_.rotation.x=Math.PI,m.add(_);const C=new x(Z,z);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,m.add(C);const q=new ft(.35,32,32),V=new x(q,k);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),m.add(V);const W=new x(q,et);W.scale.set(.75,1.25,.65),W.position.set(.7,-.15,.2),m.add(W);const dt=new te(.2,.22,.6,32),ct=new x(dt,M);ct.position.set(-.4,-1.05,0),m.add(ct);const mt=new x(dt,E);mt.position.set(.4,-1.05,0),m.add(mt);const At=new ft(.3,32,32),ut=new x(At,M);ut.scale.set(1,.72,1.5),ut.position.set(-.4,-1.45,.17),m.add(ut);const _t=new x(At,E);_t.scale.set(1,.72,1.5),_t.position.set(.4,-1.45,.17),m.add(_t);const Lt=new ft(.44,32,32),Nt=new x(Lt,z);Nt.position.set(-.15,-.45,-.4),m.add(Nt);const Rt=new x(Lt,Q);Rt.position.set(.15,-.45,-.4),m.add(Rt);const $t=new ft(.18,32,32),zt=new x($t,z);zt.position.set(0,-.35,-.8),m.add(zt),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const St=new ke("X",{font:tt,size:.2,depth:.05}),Et=new x(St,z);Et.position.set(-.3,.99,.53),Et.rotation.x=le.degToRad(-5),Et.rotation.y=le.degToRad(-15),m.add(Et);const kt=new ke("O",{font:tt,size:.2,depth:.05}),ee=new x(kt,k);ee.position.set(.14,.99,.53),ee.rotation.y=le.degToRad(12),ee.rotation.x=le.degToRad(-5),m.add(ee);const se=new ke("POP",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new ke("🐻",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const oe=new ke("BAO      BEAR",{font:tt,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),ne=new Ot({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ot({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const fe=new Ot({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),ae=new Ot({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ve=new x(se,ne);ve.scale.set(.15,.15,.15),ve.position.set(.02,1.16,.1),ve.rotateZ(-25),m.add(ve);const ce=new x(se,U);ce.scale.set(.14,.14,.14),ce.rotateZ(45),ce.position.set(.2,-.7,.3),m.add(ce);const Pe=new x(se,fe);Pe.scale.set(.14,.14,.14),Pe.rotateZ(45),Pe.rotateY(45),Pe.position.set(.3,.7,.3),m.add(Pe);const me=new x(se,fe);me.scale.set(.15,.15,.15),me.rotateZ(45),me.rotateY(45),me.position.set(.35,-1.5,.3),m.add(me);const Be=new x(se,ae);Be.scale.set(.17,.17,.17),Be.rotateZ(45),Be.rotateY(15),Be.position.set(.35,1,.3),m.add(Be);const Re=new x(oe,ne);Re.scale.set(.7,.7,.7),Re.position.set(-6,0,-3),f.add(Re)}),zt.renderOrder=1,m.scale.set(1.4,1.4,1.4),p.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),v.position.set(t.bodyPosition.x,1,t.cameraPosition),v.lookAt(t.bodyPosition.x,0,0),v.position.z=4,m.rotation.x=.1;const G=[w,_,C],xt=new zp,st=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),Ve(()=>t.bodyPosition,tt=>{m.position.set(tt.x,tt.y,tt.z)}),Ve(()=>t.cameraPosition,tt=>{v.position.set(t.bodyPosition.x,1,tt),v.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(Wn(),Yn(fn,null,[Bt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Bt("div",AS,[Bt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Bt("div",PS,[Bt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Bt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Bt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),CS=$n(RS,[["__scopeId","data-v-cb52c927"]]),IS={class:"pixel-controls"},LS={class:"side-buttons"},DS=Ln({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);Vn(()=>{if(e.value){let d=function(fe,ae){const ve=new te(Yt,Yt,G,32);ve.rotateX(Math.PI/2);const ce=new x(ve,fe),Pe=new Xt;for(let Be=0;Be<xt;Be++){const Re=Be/xt*Math.PI*2,je=new yn(st,tt,St),Ne=new x(je,fe);Ne.position.set((Yt+St/26)*Math.cos(Re),(Yt+St/26)*Math.sin(Re),0),Ne.rotation.z=Re,Pe.add(Ne)}const me=new Xt;return me.add(ce),me.add(Pe),me.position.set(ae.x,ae.y,ae.z),me},p=function(){requestAnimationFrame(p),i.value&&(f.rotation.y+=.03),s.value&&(f.rotation.y-=.03),o.value&&(f.rotation.x-=.03),r.value&&(f.rotation.x+=.03),Et.rotation.z-=.02,kt.rotation.z+=.03,ee.rotation.z+=.02,se.rotation.z+=.02,oe.rotation.z-=.03,ne.rotation.y+=.04,m.render(v,y)};const v=new Gn,y=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),m=new zn({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const f=new Xt,A=new Xt;v.add(A);const S=new hi(16777215,2);v.add(S);const b=new ui(16777215,4);b.position.set(5,5,5),v.add(b);const B=new li(16777215,5,50);B.position.set(0,2,4),v.add(B);const I=new jn,R=I.load("/3d-bear-arts/assets/metal.jpg"),z=I.load("/3d-bear-arts/assets/pop7.jpg"),Q=I.load("/3d-bear-arts/assets/gear.jpg");R.wrapS=R.wrapT=Ke,z.wrapS=z.wrapT=Ke,z.repeat.set(2,2);const M=new Ot({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:R});Q.mapping=Ta;const E=new Ot({color:"#d3d3d3",metalness:1,roughness:.25,map:R,envMap:Q,clearcoat:.7,clearcoatRoughness:.3}),U=new Ot({color:"#C0C0C0",metalness:1,roughness:.25,envMap:Q,clearcoat:.7,clearcoatRoughness:.3}),k=new Ot({color:"#C0C0C0",metalness:1,roughness:.25,map:R,envMap:Q,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),et=new Ot({color:"#C0C0C0",metalness:1,roughness:.5,map:R,envMap:Q,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),rt=new Ot({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:be});new Ot({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const $=new Ot({color:"#d3d3d3",metalness:1,roughness:.2,map:Q,envMap:Q,clearcoat:.7,clearcoatRoughness:.3});new Ot({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:Q}),new Ot({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:R,transparent:!0,opacity:.3});const nt=new ft(1,32,32,0,Math.PI),X=new x(nt,et),vt=new x(nt,E);X.scale.set(.85,.85,.8),vt.scale.set(.85,.85,.8),X.position.y=-.2,vt.position.y=-.2,X.rotation.y=Math.PI/2,vt.rotation.y=Math.PI*1.5;const yt=new Ae(1,32),wt=new x(yt,k);wt.scale.set(.85,.85,.8),wt.position.set(0,-.2,0),wt.rotation.y=Math.PI/2;const Dt=new Xt;Dt.add(X),Dt.add(vt),Dt.add(wt),f.add(Dt);const Wt=new ft(.6,32,32,0,Math.PI),at=new x(Wt,E);at.scale.set(1,.95,.95),at.position.set(0,1,0),at.rotation.y=Math.PI*1.5;const pt=new x(Wt,et);pt.scale.set(1,.95,.95),pt.position.set(0,1,0),pt.rotation.y=Math.PI/2;const bt=new Ae(.6,32),O=new x(bt,k);O.position.set(0,1,0),O.rotation.y=Math.PI/2,O.scale.set(1,.95,.95);const lt=new Xt;lt.add(at),lt.add(pt),lt.add(O),f.add(lt);const ot=new ft(.25,32,32),ht=new x(ot,E);ht.position.set(-.45,1.35,-.1),f.add(ht);const Mt=new x(ot,k);Mt.position.set(.45,1.35,-.1),f.add(Mt);const it=new ft(.25,32,32,Math.PI/2,Math.PI),g=new x(it,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new ft(.25,32,32,Math.PI/2,Math.PI),L=new x(T,k);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const F=new Ae(.25,32),N=new x(F,rt);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const K=new Xt;K.add(g),K.add(L),K.add(N),f.add(K);const Z=new Cn;Z.moveTo(0,0),Z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Z.bezierCurveTo(-.6,.3,0,.6,0,1),Z.bezierCurveTo(0,.6,.6,.3,.6,0),Z.bezierCurveTo(.6,-.3,0,-.3,0,0);const w={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},_=new Hn(Z,w),C=new ft(.35,32,32),q=new x(C,E);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),f.add(q);const V=new x(C,k);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),f.add(V);const W=new te(.2,.22,.6,32),dt=new x(W,E);dt.position.set(-.4,-1.05,0),f.add(dt);const ct=new x(W,k);ct.position.set(.4,-1.05,0),f.add(ct);const mt=new ft(.3,32,32),At=new x(mt,E);At.scale.set(1,.72,1.5),At.position.set(-.4,-1.45,.17),f.add(At);const ut=new x(mt,k);ut.scale.set(1,.72,1.5),ut.position.set(.4,-1.45,.17),f.add(ut);const _t=new ft(.44,32,32),Lt=new x(_t,E);Lt.position.set(-.15,-.45,-.4),f.add(Lt);const Nt=new x(_t,et);Nt.position.set(.15,-.45,-.4),f.add(Nt);const Rt=new ft(.18,32,32),$t=new x(Rt,E);$t.position.set(0,-.35,-.8),f.add($t),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(fe){const ae=new ke("X",{font:fe,size:.2,depth:.05});new es({color:0});const ve=new x(ae,M);ve.position.set(-.3,.99,.53),ve.rotation.x=le.degToRad(-5),ve.rotation.y=le.degToRad(-15),f.add(ve);const ce=new ke("O",{font:fe,size:.2,depth:.05});new es({color:0});const Pe=new x(ce,M);Pe.position.set(.14,.99,.53),Pe.rotation.y=le.degToRad(12),Pe.rotation.x=le.degToRad(-5),f.add(Pe)}),$t.renderOrder=1;const Yt=1.2,G=.5,xt=8,st=.7,tt=.3,St=.5,Et=d($,{x:-2,y:0,z:0}),kt=d($,{x:0,y:0,z:0}),ee=d($,{x:2,y:0,z:0}),se=d($,{x:2,y:0,z:0}),oe=d($,{x:2,y:-2,z:0}),ne=new x(_,U);ne.scale.set(.3,.3,.3),ne.position.set(.25,1.1,0),ne.rotation.y=Math.PI,ne.rotation.x=Math.PI,f.add(ne),Et.position.set(.35,0,0),kt.position.set(.25,-.3,.4),ee.position.set(.3,.3,-.2),se.position.set(.25,.17,.4),oe.position.set(.5,-.3,.45),Et.scale.set(.2,.2,.2),kt.scale.set(.18,.18,.18),ee.scale.set(.15,.15,.15),se.scale.set(.17,.17,.17),oe.scale.set(.15,.15,.15),kt.rotation.z=Math.PI/4,ee.rotation.z=-Math.PI/4,se.rotation.y=-Math.PI/2,oe.rotation.y=-Math.PI/2,f.add(Et),f.add(kt),f.add(ee),f.add(se),f.add(oe),f.rotation.x=.1,f.scale.set(1.4,1.4,1.4),v.add(f),f.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4,p(),Ve(()=>t.bodyPosition,fe=>{f.position.set(fe.x,fe.y,fe.z)}),Ve(()=>t.cameraPosition,fe=>{y.position.set(t.bodyPosition.x,1,fe),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(Wn(),Yn(fn,null,[Bt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Bt("div",IS,[Bt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Bt("div",LS,[Bt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Bt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Bt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),US=$n(DS,[["__scopeId","data-v-9a57b6d8"]]),NS={class:"pixel-controls"},FS={class:"side-buttons"},OS={class:"directional-buttons"},BS={class:"horizontal-buttons"},zS={class:"directional-buttons-woman"},GS={class:"horizontal-buttons-woman"},HS={class:"directional-buttons-kid"},kS={class:"horizontal-buttons-kid"},aa=.1,ca=.05,la=.08,VS=Ln({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);const a=po(null),c=jt(!1),l=jt(!1),h=jt(!1),u=jt(!1),d=po(null),p=po(null),v=jt(!1),y=jt(!1),m=jt(!1),f=jt(!1),A=jt(!1),S=jt(!1),b=jt(!1),B=jt(!1),I=new zn({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const R=new Gn,z=new qe(75,window.innerWidth/window.innerHeight,.1,1e3);z.position.z=5,Vn(()=>{if(e.value){let it=function(){const Tt=new Xt,ye=new ft(.2,32,32),Ee=new Ut({color:16767916}),ge=new x(ye,Ee);ge.position.set(0,1.5,0),Tt.add(ge);const Ie=new ft(.21,32,32,0,Math.PI*2,0,Math.PI/2),pe=new Ut({color:16711680}),Ce=new x(Ie,pe);Ce.position.set(0,1.58,0),Tt.add(Ce);const ze=new te(.25,.25,.6,32),Te=new Ut({color:16767916}),Fe=new x(ze,Te);Fe.position.set(0,1,0),Tt.add(Fe);const Ze=new te(.26,.26,.3,32),We=new Ut({color:255}),rn=new x(Ze,We);rn.position.set(0,.65,0),Tt.add(rn);const sn=new te(.1,.1,.5,32),Ye=new Ut({color:16767916}),nn=new x(sn,Ye);nn.position.set(-.15,.25,0),Tt.add(nn);const Je=new x(sn,Ye);Je.position.set(.15,.25,0),Tt.add(Je);const ln=new te(.08,.08,.5,32),dn=new x(ln,Ye);dn.position.set(-.35,1.3,0),dn.rotation.z=Math.PI/4,Tt.add(dn);const bn=new x(ln,Ye);return bn.position.set(.35,1.3,0),bn.rotation.z=-Math.PI/4,Tt.add(bn),Tt.scale.set(.27,.27,.27),Tt.position.set(-.2,-.1,-.15),Tt},g=function(){const Tt=new Xt,ye=new ft(.18,32,32),Ee=new Ut({color:16767916}),ge=new x(ye,Ee);ge.position.set(0,1.2,.04),Tt.add(ge);const Ie=new ft(.19,32,32,.4,Math.PI*2,0,Math.PI/2),pe=new te(.18,.18,.4,32),Ce=new Ut({color:9127187}),ze=new x(Ie,Ce);ze.position.set(0,1.28,0),Tt.add(ze);const Te=new x(pe,Ce);Te.position.set(0,1.1,-.01),Tt.add(Te);const Fe=new te(.18,.2,.5,32),Ze=new Ut({color:16767916}),We=new x(Fe,Ze);We.position.set(0,.85,0),Tt.add(We);const rn=new ft(.08,32,32,0,Math.PI),sn=new Ut({color:16738740}),Ye=new x(rn,sn);Ye.position.set(-.09,.98,.15),Tt.add(Ye);const nn=new x(rn,sn);nn.position.set(.09,.98,.15),Tt.add(nn);const Je=new te(.22,.22,.25,32),ln=new Ut({color:16738740}),dn=new x(Je,ln);dn.position.set(0,.6,0),Tt.add(dn);const bn=new te(.1,.1,.6,32),bi=new Ut({color:16767916}),Fi=new x(bn,bi);Fi.position.set(-.09,.5,.2),Fi.rotation.x=Math.PI/2,Tt.add(Fi);const Oi=new x(bn,bi);Oi.position.set(.09,.5,.2),Oi.rotation.x=Math.PI/2,Tt.add(Oi);const Bi=new te(.08,.08,.35,32),Ei=new x(Bi,bi);Ei.position.set(-.24,.95,.18),Ei.rotation.x=Math.PI/2,Tt.add(Ei);const fi=new x(Bi,bi);return fi.position.set(.2,.85,0),fi.rotation.z=Math.PI/20,Tt.add(fi),Tt.scale.set(.27,.27,.27),Tt.position.set(.2,-.15,-.32),Tt},T=function(){const Tt=new Xt,ye=new ft(.2,32,32),Ee=new Ut({color:16767916}),ge=new x(ye,Ee);ge.position.set(0,1.5,0),Tt.add(ge);const Ie=new ft(.21,32,32,0,Math.PI*2,0,Math.PI/2),pe=new Ut({color:25600}),Ce=new x(Ie,pe);Ce.position.set(0,1.58,0),Tt.add(Ce);const ze=new te(.22,.22,.5,32),Te=new Ut({color:16767916}),Fe=new x(ze,Te);Fe.position.set(0,1,0),Tt.add(Fe);const Ze=new te(.23,.23,.3,32),We=new Ut({color:8388736}),rn=new x(Ze,We);rn.position.set(0,.65,0),Tt.add(rn);const sn=new te(.1,.1,.5,32),Ye=new Ut({color:16767916}),nn=new x(sn,Ye);nn.position.set(-.15,.3,-.25),nn.rotation.x=Math.PI/6,Tt.add(nn);const Je=new x(sn,Ye);Je.position.set(.15,.3,.25),Je.rotation.x=-Math.PI/6,Tt.add(Je);const ln=new te(.08,.08,.4,32),dn=new x(ln,Ye);dn.position.set(-.28,1,-.2),dn.rotation.x=Math.PI/6,Tt.add(dn);const bn=new x(ln,Ye);return bn.position.set(.28,1.3,.1),bn.rotation.z=-Math.PI/8,Tt.add(bn),Tt.scale.set(.15,.15,.15),Tt.position.set(.3,-.25,.25),Tt.rotation.x=Math.PI/12,Tt.rotation.y=Math.PI/2,Tt.rotation.z=-Math.PI/3,Tt},L=function(Tt){let ye=1,Ee=0;function ge(){requestAnimationFrame(ge),Tt.position.x+=.01*ye,Tt.position.x>=.35?(ye=-1,Tt.rotation.y=Math.PI):Tt.position.x<=-.35&&(ye=1,Tt.rotation.y=0),Ee+=.003,Tt.position.y=-.4+Math.sin(Ee)*.1,Z.render(N,K)}ge()},F=function(){requestAnimationFrame(F),i.value&&(w.rotation.y+=.03),s.value&&(w.rotation.y-=.03),o.value&&(w.rotation.x-=.03),r.value&&(w.rotation.x+=.03),ve.uniforms.u_time.value+=.25,j.rotation.y+=.04,Z.render(N,K)};const N=new Gn,K=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),Z=new zn({antialias:!0,alpha:!0});Z.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(Z.domElement);const w=new Xt,_=new Xt;N.add(_);const C=new hi(16777215,2);N.add(C);const q=new ui(16777215,4);q.position.set(5,5,5),N.add(q);const V=new li(16777215,5,50);V.position.set(0,2,4),N.add(V);const W=new jn,dt=W.load("/3d-bear-arts/assets/beach.jpg");dt.repeat.set(.8,1);const ct=W.load("/3d-bear-arts/assets/sun.jpg");dt.wrapS=dt.wrapT=Ke,dt.repeat.set(.8,1),ct.wrapS=ct.wrapT=Ke;const mt=new Ot({color:11592447,map:dt,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),At=new Ot({color:11592447,map:dt,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:be,ior:1.33,depthWrite:!1,depthTest:!0}),ut=new Ot({color:11592447,map:dt,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),_t=new Ot({color:11592447,map:dt,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:be}),Lt=new Ot({color:11592447,map:dt,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:be,ior:1.33}),Nt=new Ot({color:11592447,map:dt,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Rt=new ft(1,32,32,0,Math.PI),$t=new x(Rt,_t),zt=new x(Rt,At);$t.scale.set(.85,.85,.8),zt.scale.set(.85,.85,.8),$t.position.y=-.2,zt.position.y=-.2,$t.rotation.y=Math.PI/2,zt.rotation.y=Math.PI*1.5;const Yt=new Ae(1,32),G=new x(Yt,mt);G.scale.set(.85,.85,.8),G.position.set(0,-.2,0),G.rotation.y=Math.PI/2;const xt=new Xt;xt.add($t),xt.add(zt),xt.add(G),w.add(xt);const st=new ft(.6,32,32,0,Math.PI),tt=new x(st,mt);tt.scale.set(1,.95,.95),tt.position.set(0,1,0),tt.rotation.y=Math.PI*1.5;const St=new x(st,ut);St.scale.set(1,.95,.95),St.position.set(0,1,0),St.rotation.y=Math.PI/2;const Et=new Ae(.6,32),kt=new x(Et,mt);kt.position.set(0,1,0),kt.rotation.y=Math.PI/2,kt.scale.set(1,.95,.95);const ee=new Xt;ee.add(tt),ee.add(St),ee.add(kt),w.add(ee);const se=new ft(.6,32,32,0,Math.PI*2,0,Math.PI/2),oe=new Ot({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ne=new x(se,oe);ne.position.set(0,-.2,0),ne.rotation.x=Math.PI,ne.scale.set(1.25,1.25,1.25),xt.add(ne);const fe=new Ot({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:be,transparent:!0,opacity:.7,depthWrite:!1}),ae=new x(Yt,fe);ae.scale.set(.7,.7,.7),ae.position.set(0,-.3,0),ae.rotation.x=Math.PI/2,ae.renderOrder=1,xt.add(ae),w.add(xt);const ve=new an({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),ce=new x(Yt,ve);ce.position.set(0,-.3,0),ce.scale.set(.7,.7,.7),ce.rotation.x=-Math.PI/2,ce.renderOrder=1,xt.add(ce);const Pe=new ft(.25,32,32),me=new x(Pe,Lt);me.position.set(-.45,1.35,-.1),w.add(me);const Be=new x(Pe,ut);Be.position.set(.45,1.35,-.1),w.add(Be);const Re=new ft(.25,32,32,Math.PI/2,Math.PI),je=new x(Re,Lt);je.scale.set(1.1,.6,.8),je.position.set(0,.84,.5),je.rotation.y=Math.PI;const Ne=new ft(.25,32,32,Math.PI/2,Math.PI),hn=new x(Ne,ut);hn.scale.set(1.1,.6,.8),hn.position.set(0,.84,.5),hn.rotation.y=0;const Dn=new Ae(.25,32),gn=new x(Dn,At);gn.scale.set(.8,.6,.8),gn.position.set(0,.84,.5),gn.rotation.y=Math.PI/2;const Ct=new Xt;Ct.add(je),Ct.add(hn),Ct.add(gn),w.add(Ct);const he=new Ot({color:8374441,metalness:1,roughness:.25,envMap:ct,clearcoat:.7,clearcoatRoughness:.3}),P=new Cn;P.moveTo(0,0),P.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),P.bezierCurveTo(-.6,.3,0,.6,0,1),P.bezierCurveTo(0,.6,.6,.3,.6,0),P.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},D=new Hn(P,Y),j=new x(D,he);j.scale.set(.2,.2,.2),j.position.set(.25,1.2,0),j.rotation.y=Math.PI,j.rotation.x=Math.PI,w.add(j);const H=new ft(.35,32,32),gt=new x(H,At);gt.scale.set(.75,1.25,.65),gt.position.set(-.7,-.15,.2),w.add(gt);const It=new x(H,_t);It.scale.set(.75,1.25,.65),It.position.set(.7,-.15,.2),w.add(It);const Ft=new te(.2,.22,.6,32),Ht=new x(Ft,Lt);Ht.position.set(-.4,-1.05,0),w.add(Ht);const Kt=new x(Ft,ut);Kt.position.set(.4,-1.05,0),w.add(Kt);const Qt=new ft(.3,32,32),Vt=new x(Qt,Lt);Vt.scale.set(1,.72,1.5),Vt.position.set(-.4,-1.45,.17),w.add(Vt);const ie=new x(Qt,ut);ie.scale.set(1,.72,1.5),ie.position.set(.4,-1.45,.17),w.add(ie);const de=new ft(.44,32,32),ue=new x(de,Lt);ue.position.set(-.15,-.45,-.4),w.add(ue);const Pt=new x(de,Lt);Pt.position.set(.15,-.45,-.4),w.add(Pt);const qt=new ft(.18,32,32),Gt=new x(qt,Lt);Gt.position.set(0,-.35,-.8),w.add(Gt),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Tt){const ye=new ke("X",{font:Tt,size:.2,depth:.05}),Ee=new x(ye,Nt);Ee.position.set(-.3,.99,.53),Ee.rotation.x=le.degToRad(-5),Ee.rotation.y=le.degToRad(-15),w.add(Ee);const ge=new ke("O",{font:Tt,size:.2,depth:.05}),Ie=new x(ge,Nt);Ie.position.set(.14,.99,.53),Ie.rotation.y=le.degToRad(12),Ie.rotation.x=le.degToRad(-5),w.add(Ie)}),a.value=it(),w.add(a.value),N.add(w),d.value=g(),w.add(d.value),p.value=T(),w.add(p.value),L(p.value),w.scale.set(1.4,1.4,1.4),N.add(w),w.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),K.position.set(t.bodyPosition.x,1,t.cameraPosition),K.lookAt(t.bodyPosition.x,0,0),K.position.z=4,w.rotation.x=.1,F(),Ve(()=>t.bodyPosition,Tt=>{w.position.set(Tt.x,Tt.y,Tt.z)}),Ve(()=>t.cameraPosition,Tt=>{K.position.set(t.bodyPosition.x,1,Tt),K.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{K.aspect=window.innerWidth/window.innerHeight,K.updateProjectionMatrix(),Z.setSize(window.innerWidth,window.innerHeight)})}});function Q(){s.value=!0}function M(){i.value=!0}function E(){o.value=!0}function U(){r.value=!0}function k(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}const et=()=>{c.value=!0,console.log(c.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},rt=()=>{l.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},$=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},nt=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},X=()=>{c.value=!1,l.value=!1,h.value=!1,u.value=!1},vt=()=>{v.value=!0,d.value&&(d.value.rotation.y=Math.PI)},yt=()=>{y.value=!0,d.value&&(d.value.rotation.y=0)},wt=()=>{m.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},Dt=()=>{f.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},Wt=()=>{v.value=!1,y.value=!1,m.value=!1,f.value=!1},at=()=>{requestAnimationFrame(at),a.value&&(c.value&&(a.value.position.z-=aa),l.value&&(a.value.position.z+=aa),h.value&&(a.value.position.x-=aa),u.value&&(a.value.position.x+=aa)),I.render(R,z)},pt=()=>{requestAnimationFrame(pt),d.value&&(v.value&&(d.value.position.z-=ca),y.value&&(d.value.position.z+=ca),m.value&&(d.value.position.x-=ca),f.value&&(d.value.position.x+=ca))};pt(),at();const bt=()=>{A.value=!0,p.value&&(p.value.rotation.y=0)},O=()=>{S.value=!0,p.value&&(p.value.rotation.y=Math.PI)},lt=()=>{b.value=!0,p.value&&(p.value.rotation.y=Math.PI/2)},ot=()=>{B.value=!0,p.value&&(p.value.rotation.y=-Math.PI/2)},ht=()=>{A.value=!1,S.value=!1,b.value=!1,B.value=!1},Mt=()=>{requestAnimationFrame(Mt),p.value&&(A.value&&(p.value.position.z-=la),S.value&&(p.value.position.z+=la),b.value&&(p.value.position.x-=la),B.value&&(p.value.position.x+=la))};return Mt(),(it,g)=>(Wn(),Yn(fn,null,[Bt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Bt("div",NS,[Bt("button",{class:"pixel-btn up",onMousedown:E,onMouseup:k},"UP",32),Bt("div",FS,[Bt("button",{class:"pixel-btn left",onMousedown:Q,onMouseup:k},"LEFT",32),Bt("button",{class:"pixel-btn right",onMousedown:M,onMouseup:k},"RIGHT",32)]),Bt("button",{class:"pixel-btn down",onMousedown:U,onMouseup:k},"DOWN",32)]),Bt("div",OS,[Bt("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:et,onMouseup:X},"UP",32),Bt("div",BS,[Bt("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:$,onMouseup:X},"LEFT",32),Bt("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:nt,onMouseup:X},"RIGHT",32)]),Bt("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:rt,onMouseup:X},"DOWN",32)]),Bt("div",zS,[Bt("button",{class:"directional-btn-woman north-btn",onMousedown:vt,onMouseup:Wt},"UP",32),Bt("div",GS,[Bt("button",{class:"directional-btn-woman west-btn",onMousedown:wt,onMouseup:Wt},"LEFT",32),Bt("button",{class:"directional-btn-woman east-btn",onMousedown:Dt,onMouseup:Wt},"RIGHT",32)]),Bt("button",{class:"directional-btn-woman south-btn",onMousedown:yt,onMouseup:Wt},"DOWN",32)]),Bt("div",HS,[Bt("button",{class:"directional-btn-kid north-btn",onMousedown:bt,onMouseup:ht},"UP",32),Bt("div",kS,[Bt("button",{class:"directional-btn-kid west-btn",onMousedown:lt,onMouseup:ht},"LEFT",32),Bt("button",{class:"directional-btn-kid east-btn",onMousedown:ot,onMouseup:ht},"RIGHT",32)]),Bt("button",{class:"directional-btn-kid south-btn",onMousedown:O,onMouseup:ht},"DOWN",32)])],64))}}),WS=$n(VS,[["__scopeId","data-v-f25dfda5"]]),XS={class:"pixel-controls"},qS={class:"side-buttons"},jS=Ln({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);Vn(()=>{if(e.value){let d=function(me,Be){const Re=new Xt,je=new ft(1,32,32),Ne=new x(je,rt);Ne.scale.set(1,.8,1),Re.add(Ne);const hn=new te(.1,.1,.5,16),Dn=new Ut({color:9127187}),gn=new x(hn,Dn);return gn.position.set(0,.9,0),Re.add(gn),Re},p=function(){requestAnimationFrame(p),i.value&&(f.rotation.y+=.03),s.value&&(f.rotation.y-=.03),o.value&&(f.rotation.x-=.03),r.value&&(f.rotation.x+=.03),Yt.rotation.z-=.04,G.rotation.z+=.04,xt.rotation.z+=.03,st.rotation.z+=.03,_.rotation.y+=.04,Pe+=ve,f.position.y=t.bodyPosition.y+Math.sin(Pe)*ce;const me=fe.getElapsedTime();ne.forEach((Be,Re)=>{const je=.1+Math.sin(me*3+ae[Re])*.1;Be.scale.set(je,je,je)}),m.render(v,y)};const v=new Gn,y=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),m=new zn({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const f=new Xt,A=new Xt;v.add(A);const S=new hi(16777215,2);v.add(S);const b=new ui(16777215,4);b.position.set(5,5,5),v.add(b);const B=new li(16777215,5,50);B.position.set(0,2,4),v.add(B);const I=new jn,R=I.load("/3d-bear-arts/assets/pumpkin.jpg");R.wrapS=R.wrapT=Ke,R.repeat.set(.8,.85);const z=I.load("/3d-bear-arts/assets/pumpkin.jpg");z.wrapS=z.wrapT=Ke,z.repeat.set(1,1);const Q=I.load("/3d-bear-arts/assets/pumpkin.jpg");Q.wrapS=z.wrapT=Ke,Q.repeat.set(2,.8);const M=new Ot({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new Xt,U=new Ot({color:16747520,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Ot({color:16747520,map:z,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),et=new Ot({color:16747520,map:Q,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:be}),rt=new Ot({color:16747520,map:Q,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ot({color:16766720,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ot({color:9109504,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ot({color:4915330,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const $=new ft(1,32,32,0,Math.PI),nt=new x($,et),X=new x($,U);nt.scale.set(.85,.85,.8),X.scale.set(.85,.85,.8),nt.position.y=-.2,X.position.y=-.2,nt.rotation.y=Math.PI/2,X.rotation.y=Math.PI*1.5;const vt=new Ae(1,32),yt=new x(vt,k);yt.scale.set(.85,.85,.8),yt.position.set(0,-.2,0),yt.rotation.y=Math.PI/2;const wt=new Xt;wt.add(nt),wt.add(X),wt.add(yt),f.add(wt);const Dt=new ft(.6,32,32,0,Math.PI),Wt=new x(Dt,U);Wt.scale.set(1,.95,.95),Wt.position.set(0,1,0),Wt.rotation.y=Math.PI*1.5;const at=new x(Dt,et);at.scale.set(1,.95,.95),at.position.set(0,1,0),at.rotation.y=Math.PI/2;const pt=new Ae(.6,32),bt=new x(pt,k);bt.position.set(0,1,0),bt.rotation.y=Math.PI/2,bt.scale.set(1,.95,.95);const O=new Xt;O.add(Wt),O.add(at),O.add(bt),f.add(O);const lt=new ft(.25,32,32),ot=new x(lt,rt);ot.position.set(-.45,1.35,-.1),f.add(ot);const ht=new x(lt,et);ht.position.set(.45,1.35,-.1),f.add(ht);const Mt=new ft(.25,32,32,Math.PI/2,Math.PI),it=new x(Mt,U);it.scale.set(1.1,.6,.8),it.position.set(0,.84,.5),it.rotation.y=Math.PI;const g=new ft(.25,32,32,Math.PI/2,Math.PI),T=new x(g,et);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const L=new Ae(.25,32),F=new x(L,U);F.scale.set(.8,.6,.8),F.position.set(0,.84,.5),F.rotation.y=Math.PI/2;const N=new Xt;N.add(it),N.add(T),N.add(F),f.add(N);const K=new Cn;K.moveTo(0,0),K.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),K.bezierCurveTo(-.6,.3,0,.6,0,1),K.bezierCurveTo(0,.6,.6,.3,.6,0),K.bezierCurveTo(.6,-.3,0,-.3,0,0);const Z={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},w=new Hn(K,Z),_=new x(w,M);_.scale.set(.3,.3,.3),_.position.set(.25,1.1,0),_.rotation.y=Math.PI,_.rotation.x=Math.PI,f.add(_);const C=new ft(.35,32,32),q=new x(C,k);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),f.add(q);const V=new x(C,et);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),f.add(V);const W=new te(.2,.22,.6,32),dt=new x(W,k);dt.position.set(-.4,-1.05,0),f.add(dt);const ct=new x(W,et);ct.position.set(.4,-1.05,0),f.add(ct);const mt=new ft(.3,32,32),At=new x(mt,rt);At.scale.set(1,.72,1.5),At.position.set(-.4,-1.45,.17),f.add(At);const ut=new x(mt,et);ut.scale.set(1,.72,1.5),ut.position.set(.4,-1.45,.17),f.add(ut);const _t=new ft(.44,32,32),Lt=new x(_t,U);Lt.position.set(-.15,-.45,-.4),f.add(Lt);const Nt=new x(_t,et);Nt.position.set(.15,-.45,-.4),f.add(Nt);const Rt=new ft(.18,32,32),$t=new x(Rt,rt);$t.position.set(0,-.35,-.8),f.add($t),$t.renderOrder=1,new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(me){const Be=new ke("X",{font:me,size:.2,depth:.05}),Re=new x(Be,k);Re.position.set(-.3,.99,.53),Re.rotation.x=le.degToRad(-5),Re.rotation.y=le.degToRad(-15),f.add(Re);const je=new ke("O",{font:me,size:.2,depth:.05}),Ne=new x(je,k);Ne.position.set(.14,.99,.53),Ne.rotation.y=le.degToRad(12),Ne.rotation.x=le.degToRad(-5),f.add(Ne)}),f.add(E);const Yt=d(),G=d(),xt=d(),st=d();Yt.position.set(.35,-.35,-.3),G.position.set(.25,-.45,.3),xt.position.set(.3,.1,-.2),st.position.set(.25,.18,.4),Yt.scale.set(.3,.3,.3),G.scale.set(.28,.28,.28),xt.scale.set(.25,.25,.25),st.scale.set(.23,.23,.23),G.rotation.z=Math.PI/4,xt.rotation.z=-Math.PI/4,st.rotation.y=-Math.PI/2,f.add(Yt),f.add(G),f.add(xt),f.add(st);const tt=new Cn;tt.moveTo(-.5,0),tt.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),tt.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),tt.bezierCurveTo(-.05,.6,.05,.6,.15,.4),tt.bezierCurveTo(.25,.5,.25,.85,.5,.8),tt.bezierCurveTo(1,.6,.75,.25,.5,0),tt.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const St={depth:.3,bevelEnabled:!1},Et=new Hn(tt,St),kt=new es({color:0}),ee=new x(Et,kt);ee.scale.set(.3,.3,.6),ee.rotation.x=0,ee.rotation.z=0,ee.position.set(.26,.35,.25),f.add(ee);const se=new x(Et,kt);se.scale.set(.5,.5,.5),se.position.set(.4,-.1,.54),f.add(se);const oe=new x(Et,kt);oe.scale.set(.5,.5,.5),oe.position.set(.32,-.35,.65),f.add(oe),f.rotation.x=.1,f.scale.set(1.4,1.4,1.4),v.add(f),f.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4;const ne=[ee,se,oe],fe=new zp,ae=[0,Math.PI/2,Math.PI,0,Math.PI/3];let ve=.05,ce=.25,Pe=0;p(),Ve(()=>t.bodyPosition,me=>{f.position.set(me.x,me.y,me.z)}),Ve(()=>t.cameraPosition,me=>{y.position.set(t.bodyPosition.x,1,me),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(Wn(),Yn(fn,null,[Bt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Bt("div",XS,[Bt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Bt("div",qS,[Bt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Bt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Bt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),YS=$n(jS,[["__scopeId","data-v-5eff72b3"]]),$S={class:"pixel-controls"},KS={class:"side-buttons"},ZS=Ln({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);Vn(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),Z.rotation.y+=.03,kt+=st,ee+=tt,m.position.y=t.bodyPosition.y+Math.sin(kt)*Et,Z.position.y=t.bodyPosition.y+Math.sin(ee)*St,Yt.uniforms.u_time.value+=.25,y.render(p,v)};const p=new Gn,v=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),y=new zn({antialias:!0,alpha:!0});y.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(y.domElement);const m=new Xt,f=new Xt;p.add(f);const A=new hi(16777215,2);p.add(A);const S=new ui(16777215,4);S.position.set(5,5,5),p.add(S);const b=new li(16777215,5,50);b.position.set(0,2,4),p.add(b);const B=new jn,I=B.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=Ke,I.repeat.set(2,2);const R=B.load("/3d-bear-arts/assets/ghost.jpg");R.wrapS=R.wrapT=Ke,R.repeat.set(1,1);const z=new Ot({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:be}),Q=new Ot({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),M=new Ot({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new Ot({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:be}),U=new Ot({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:be}),k=new Ot({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:be}),et=new ft(1,32,32,0,Math.PI),rt=new x(et,z),$=new x(et,U);rt.scale.set(.85,.85,.8),$.scale.set(.85,.85,.8),rt.position.y=-.2,$.position.y=-.2,rt.rotation.y=Math.PI/2,$.rotation.y=Math.PI*1.5;const nt=new Ae(1,32),X=new x(nt,U);X.scale.set(.85,.85,.8),X.position.set(0,-.2,0),X.rotation.y=Math.PI/2;const vt=new Xt;vt.add(rt),vt.add($),vt.add(X),m.add(vt);const yt=new ft(.6,32,32,0,Math.PI),wt=new x(yt,k);wt.scale.set(1,.95,.95),wt.position.set(0,1,0),wt.rotation.y=Math.PI*1.5;const Dt=new x(yt,Q);Dt.scale.set(1,.95,.95),Dt.position.set(0,1,0),Dt.rotation.y=Math.PI/2;const Wt=new Ae(.6,32),at=new x(Wt,U);at.position.set(0,1,0),at.rotation.y=Math.PI/2,at.scale.set(1,.95,.95);const pt=new Xt;pt.add(wt),pt.add(Dt),pt.add(at),m.add(pt);const bt=new ft(.25,32,32),O=new x(bt,k);O.position.set(-.45,1.35,-.1),m.add(O);const lt=new x(bt,Q);lt.position.set(.45,1.35,-.1),m.add(lt);const ot=new ft(.25,32,32,Math.PI/2,Math.PI),ht=new x(ot,k);ht.scale.set(1.1,.6,.8),ht.position.set(0,.84,.5),ht.rotation.y=Math.PI;const Mt=new ft(.25,32,32,Math.PI/2,Math.PI),it=new x(Mt,Q);it.scale.set(1.1,.6,.8),it.position.set(0,.84,.5),it.rotation.y=0;const g=new Ae(.25,32),T=new x(g,E);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const L=new Xt;L.add(ht),L.add(it),L.add(T),m.add(L);const F=new Cn;F.moveTo(0,0),F.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),F.bezierCurveTo(-.6,.3,0,.6,0,1),F.bezierCurveTo(0,.6,.6,.3,.6,0),F.bezierCurveTo(.6,-.3,0,-.3,0,0);const N={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},K=new Hn(F,N),Z=new x(K,M);Z.scale.set(.35,.35,.35),Z.position.set(0,-.05,0),Z.rotation.y=Math.PI,Z.rotation.x=Math.PI,m.add(Z);const w=new ft(.35,32,32),_=new x(w,U);_.scale.set(.75,1.25,.65),_.position.set(-.7,-.15,.2),m.add(_);const C=new x(w,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),m.add(C);const q=new te(.2,.22,.6,32),V=new x(q,U);V.position.set(-.4,-1.05,0),m.add(V);const W=new x(q,E);W.position.set(.4,-1.05,0),m.add(W);const dt=new ft(.3,32,32),ct=new x(dt,U);ct.scale.set(1,.72,1.5),ct.position.set(-.4,-1.45,.17),m.add(ct);const mt=new x(dt,E);mt.scale.set(1,.72,1.5),mt.position.set(.4,-1.45,.17),m.add(mt);const At=new ft(.44,32,32),ut=new x(At,E);ut.position.set(-.15,-.45,-.4),m.add(ut);const _t=new x(At,E);_t.position.set(.15,-.45,-.4),m.add(_t);const Lt=new ft(.18,32,32),Nt=new x(Lt,U);Nt.position.set(0,-.35,-.8),m.add(Nt);const Rt=new ft(.6,32,32,0,Math.PI*2,0,Math.PI/2),$t=new Ot({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),zt=new x(Rt,$t);zt.position.set(0,-.2,0),zt.rotation.x=Math.PI,zt.scale.set(1.25,1.25,1.25),vt.add(zt);const Yt=new an({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),G=new x(nt,Yt);G.position.set(0,-.26,0),G.scale.set(.7,.7,.7),G.rotation.x=-Math.PI/2,G.renderOrder=1,vt.add(G),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(se){const oe=new ke("X",{font:se,size:.2,depth:.05}),ne=new x(oe,U);ne.position.set(-.3,.99,.53),ne.rotation.x=le.degToRad(-5),ne.rotation.y=le.degToRad(-15),m.add(ne);const fe=new ke("O",{font:se,size:.2,depth:.05}),ae=new x(fe,U);ae.position.set(.14,.99,.53),ae.rotation.y=le.degToRad(12),ae.rotation.x=le.degToRad(-5),m.add(ae)}),Nt.renderOrder=1,m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),p.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),v.position.set(t.bodyPosition.x,1,t.cameraPosition),v.lookAt(t.bodyPosition.x,0,0),v.position.z=4;let st=.05,tt=.06,St=.2,Et=.25,kt=0,ee=0;d(),Ve(()=>t.bodyPosition,se=>{m.position.set(se.x,se.y,se.z)}),Ve(()=>t.cameraPosition,se=>{v.position.set(t.bodyPosition.x,1,se),v.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(Wn(),Yn(fn,null,[Bt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Bt("div",$S,[Bt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Bt("div",KS,[Bt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Bt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Bt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),JS=$n(ZS,[["__scopeId","data-v-eb44448e"]]),QS={class:"pixel-controls"},tb={class:"side-buttons"},eb=15,nb=5,ib=Ln({__name:"Santa",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);const a=po(null),c=new zn({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new Gn;const l=new qe(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=4,Vn(()=>{if(e.value){let y=function(){const Ct=new Xt,he=new si(.12,.05,16,100),P=new Ut({color:16777215}),Y=new x(he,P);Y.position.set(0,1.65,0),Y.rotation.x=Math.PI/2,Ct.add(Y);const D=new ai(.15,.3,32),j=new Ut({color:16711680}),H=new x(D,j);H.position.set(0,1.8,0),Ct.add(H);const gt=new ft(.05,32,32),It=new Ut({color:16777215}),Ft=new x(gt,It);return Ft.position.set(0,1.93,0),Ct.add(Ft),Ct.position.set(0,-.1,0),Ct},m=function(){const Ct=new Xt,he=new ft(.15,32,32),P=new Ut({color:16764057}),Y=new x(he,P);Y.position.set(0,.4,0),Ct.add(Y);const D=new ai(.08,.15,32);new Ut({color:16764057});const j=new x(D,Dt);j.position.set(-.1,.55,0),j.rotation.z=Math.PI/6,Ct.add(j);const H=new x(D,Dt);H.position.set(.1,.55,0),H.rotation.z=-Math.PI/6,Ct.add(H);const gt=new te(.12,.15,.3,32),It=new Ut({color:16764057}),Ft=new x(gt,It);Ft.position.set(0,.2,0),Ct.add(Ft);const Ht=new te(.05,.05,.2,32),Kt=new Ut({color:16764057}),Qt=new x(Ht,Kt);Qt.position.set(-.07,-.05,.05),Ct.add(Qt);const Vt=new x(Ht,Kt);Vt.position.set(.07,-.05,.05),Ct.add(Vt);const ie=new te(.04,.04,.2,32),de=new Ut({color:16764057}),ue=new x(ie,Dt);ue.position.set(-.15,.25,0),ue.rotation.z=Math.PI/4,Ct.add(ue);const Pt=new x(ie,de);Pt.position.set(.15,.25,0),Pt.rotation.z=-Math.PI/4,Ct.add(Pt);const qt=new te(.03,.03,.25,32),Gt=new Ut({color:16764057}),re=new x(qt,Gt);return re.position.set(0,.1,-.2),re.rotation.x=Math.PI/4,Ct.add(re),Ct.scale.set(.75,.75,.75),Ct.position.set(.2,0,.2),Ct},f=function(){const Ct=new Xt,he=new ft(.2,32,32),P=new Ut({color:16764057}),Y=new x(he,P);Y.position.set(0,1,0),Ct.add(Y);const D=new Ut({color:16777215}),j=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const fi of j){const Ar=new ft(fi.size,16,16),Ws=new x(Ar,D);Ws.position.set(fi.x,fi.y-.06,fi.z-.01),Ct.add(Ws)}const H=new Ut({color:16777215}),gt=new te(.05,.06,.1,32),It=new x(gt,H);It.position.set(-.06,.93,.18),It.rotation.z=Math.PI/4;const Ft=new te(.05,.06,.1,32),Ht=new x(Ft,H);Ht.position.set(.06,.93,.18),Ht.rotation.z=-Math.PI/4;const Kt=new si(.12,.05,16,100),Qt=new Ut({color:16777215}),Vt=new x(Kt,Qt);Vt.position.set(0,1.15,0),Vt.rotation.x=Math.PI/2,Ct.add(Vt);const ie=new ai(.15,.3,32),de=new Ut({color:16711680}),ue=new x(ie,de);ue.position.set(0,1.3,0),Ct.add(ue);const Pt=new ft(.05,32,32),qt=new Ut({color:16777215}),Gt=new x(Pt,qt);Gt.position.set(0,1.43,0),Ct.add(Gt);const re=new te(.2,.25,.6,32),Tt=new Ut({color:16711680}),ye=new x(re,Tt);ye.position.set(0,.5,0),Ct.add(ye);const Ee=new te(.25,.25,.1,32),ge=new Ut({color:0}),Ie=new x(Ee,ge);Ie.position.set(0,.4,.005),Ct.add(Ie);const pe=new te(.06,.06,.3,32),Ce=new Ut({color:16711680}),ze=new x(pe,Ce);ze.position.set(-.25,.75,0),ze.rotation.z=Math.PI/4,Ct.add(ze);const Te=new x(pe,Ce);Te.position.set(.25,.75,0),Te.rotation.z=-Math.PI/4,Ct.add(Te);const Fe=new ft(.07,32,32),Ze=new Ut({color:16777215}),We=new x(Fe,Ze);We.position.set(-.35,.85,0),Ct.add(We);const rn=new x(Fe,Ze);rn.position.set(.35,.85,0),Ct.add(rn);const sn=new te(.1,.1,.15,32),Ye=new Ut({color:16711680}),nn=new te(.08,.08,.4,32),Je=new Ut({color:0}),ln=new x(nn,Je);ln.position.set(-.1,.1,0),Ct.add(ln);const dn=new x(sn,Ye);dn.position.set(-.1,-.05,0),Ct.add(dn);const bn=new x(nn,Je);bn.position.set(.1,.1,0),Ct.add(bn);const bi=new x(sn,Ye);bi.position.set(.1,-.05,0),Ct.add(bi);const Fi=new ft(.12,32,32),Oi=new Ut({color:16711680}),Bi=new x(Fi,Oi);Bi.scale.set(1,.7,1.5),Bi.position.set(-.1,-.12,.12),Ct.add(Bi);const Ei=new x(Fi,Oi);return Ei.scale.set(1,.7,1.5),Ei.position.set(.1,-.1,.12),Ct.add(Ei),Ct.scale.set(.25,.25,.25),Ct.position.set(.2,.5,-0),Ct},A=function(){let Ct=0;function he(){requestAnimationFrame(he),Ct+=.4,ve.position.y=.45+Math.sin(Ct)*.5,E.render(Q,M)}he()},S=function(Ct){let he=1,P=0;function Y(){requestAnimationFrame(Y),Ct.position.x+=.01*he,Ct.position.x>=.5?(he=-1,Ct.rotation.y=Math.PI):Ct.position.x<=0&&(he=1,Ct.rotation.y=0),P+=1,Ct.position.y=-.2+Math.sin(P)*.01,Ct.position.z=.5,E.render(Q,M)}Y()},b=function(){const Ct=new Xt,he=new yn(.7,.8,.7),P=new Ut({color:9127187}),Y=new x(he,P);Y.position.set(0,.4,0),Ct.add(Y);const D=new ai(.55,.25,4),j=new Ut({color:16777215}),H=new x(D,j);H.position.set(0,.9,0),H.rotation.y=Math.PI/4,Ct.add(H);const gt=new yn(.25,.35,.05),It=new Ut({color:6636321}),Ft=new x(gt,It);Ft.position.set(0,.2,.36),Ct.add(Ft);const Ht=new yn(.15,.15,.05),Kt=new Ut({color:8900331}),Qt=new x(Ht,Kt);Qt.position.set(-.2,.5,.38),Ct.add(Qt);const Vt=new x(Ht,Kt);Vt.position.set(.2,.5,.38),Ct.add(Vt);const ie=new yn(.2,.4,.2),de=new Ut({color:8421504}),ue=new x(ie,de);ue.position.set(0,.95,0),Ct.add(ue);const Pt=new si(.07,.04,32,100),qt=new Ut({color:2263842}),Gt=new x(Pt,qt);return Gt.position.set(0,.45,.38),Ct.add(Gt),Ct.position.set(.22,-.2,0),Ct.scale.set(.5,.5,.5),Ct},B=function(Ct=1,he={x:0,y:0,z:0}){const P=new Xt,Y=new te(1.2,.9,3,32),D=new Ut({color:25153}),j=new x(Y,D);P.add(j);const H=new te(1.3,1.3,.2,32),gt=new Ut({color:3355443}),It=new x(H,gt);It.position.y=1.6,P.add(It);const Ft=2,Ht=new te(1.1,1.1,Ft,32),Kt=new Ut({color:9127187}),Qt=new x(Ht,Kt);return Qt.position.y=0,new jn().load("/3d-bear-arts/assets/starbucks-logo.png",function(ie){ie.repeat.set(4,1),ie.offset.set(.25,0),ie.wrapS=Ke,ie.wrapT=Ke;const de=new Ut({color:9127187,map:ie,transparent:!0}),ue=new te(1.1,1.05,1.5,32),Pt=new x(ue,de);Pt.position.y=-.5,P.add(Pt)}),P.scale.set(Ct,Ct,Ct),P.position.set(he.x,he.y,he.z),P},I=function(){let Ct=1;function he(){requestAnimationFrame(he),Ct-=.1,Re.position.y=.5+Math.sin(Ct)*.8,E.render(Q,M)}he()},R=function(){requestAnimationFrame(R);const Ct=Ne.attributes.position.array;for(let he=1;he<Ct.length;he+=3)Ct[he]-=.02,Ct[he]<-10&&(Ct[he]=10);Ne.attributes.position.needsUpdate=!0,E.render(Q,M)},z=function(){requestAnimationFrame(z),i.value&&(U.rotation.y+=.03),s.value&&(U.rotation.y-=.03),o.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),q.uniforms.u_time.value+=.5,ce.rotation.y+=.45,Be.rotation.y+=.05,Re.rotation.y+=.08,E.render(Q,M)};const Q=new Gn,M=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),E=new zn({antialias:!0,alpha:!0});E.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(E.domElement);const U=new Xt,k=new Xt;Q.add(k);const et=new hi(16777215,2);Q.add(et);const rt=new ui(16777215,4);rt.position.set(5,5,5),Q.add(rt);const $=new li(16777215,5,50);$.position.set(0,2,4),Q.add($);const nt=new jn,X=nt.load("/3d-bear-arts/assets/house.jpg");X.wrapS=X.wrapT=Ke,X.repeat.set(1,1),nt.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const vt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:be}),yt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.35,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:be}),wt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.4,transmission:.7,ior:1.33,thickness:.5,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:be}),Dt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:be}),Wt=new Tr().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);Q.environment=Wt;const at=new Ot({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:be}),pt=new Ot({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),bt=new ft(1,32,32,0,Math.PI),O=new x(bt,yt),lt=new x(bt,wt);O.scale.set(.85,.85,.8),lt.scale.set(.85,.85,.8),O.position.y=-.2,lt.position.y=-.2,O.rotation.y=Math.PI/2,lt.rotation.y=Math.PI*1.5;const ot=new Ae(1,32),ht=new x(ot,at);ht.scale.set(.85,.85,.8),ht.position.set(0,-.2,0),ht.rotation.y=Math.PI/2;const Mt=new Xt;Mt.add(O),Mt.add(lt),Mt.add(ht),U.add(Mt);const it=new ft(.6,32,32,0,Math.PI),g=new x(it,Dt);g.scale.set(1,.95,.95),g.position.set(0,1,0),g.rotation.y=Math.PI*1.5;const T=new x(it,yt);T.scale.set(1,.95,.95),T.position.set(0,1,0),T.rotation.y=Math.PI/2;const L=new Ae(.6,32),F=new x(L,at);F.position.set(0,1,0),F.rotation.y=Math.PI/2,F.scale.set(1,.95,.95);const N=new Xt;N.add(g),N.add(T),N.add(F),U.add(N);const K=new ft(.6,32,32,0,Math.PI*2,0,Math.PI/2),Z=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),w=new x(K,Z);w.position.set(0,-.2,0),w.rotation.x=Math.PI,w.scale.set(1.25,1.25,1.25),Mt.add(w);const _=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:be,transparent:!1,opacity:.8}),C=new x(ot,_);C.scale.set(.7,.7,.7),C.position.set(0,-.3,0),C.rotation.x=Math.PI/2,C.renderOrder=1,Mt.add(C),U.add(Mt);const q=new an({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
            `}),V=new x(ot,q);V.position.set(0,-.2,0),V.scale.set(.7,.7,.7),V.rotation.x=-Math.PI/2,V.renderOrder=2,Mt.add(V);const W=new ft(.25,32,32),dt=new x(W,Dt);dt.position.set(-.45,1.35,-.1),U.add(dt);const ct=new x(W,vt);ct.position.set(.45,1.35,-.1),U.add(ct);const mt=new ft(.25,32,32,Math.PI/2,Math.PI),At=new x(mt,Dt);At.scale.set(1.1,.6,.8),At.position.set(0,.84,.5),At.rotation.y=Math.PI;const ut=new ft(.25,32,32,Math.PI/2,Math.PI),_t=new x(ut,vt);_t.scale.set(1.1,.6,.8),_t.position.set(0,.84,.5),_t.rotation.y=0;const Lt=new Ae(.25,32),Nt=new x(Lt,at);Nt.scale.set(.8,.6,.8),Nt.position.set(0,.84,.5),Nt.rotation.y=Math.PI/2;const Rt=new Xt;Rt.add(At),Rt.add(_t),Rt.add(Nt),U.add(Rt);const $t=new ft(.35,32,32),zt=new x($t,Dt);zt.scale.set(.75,1.25,.65),zt.position.set(-.7,-.15,.2),U.add(zt);const Yt=new x($t,vt);Yt.scale.set(.75,1.25,.65),Yt.position.set(.7,-.15,.2),U.add(Yt);const G=new te(.2,.22,.6,32),xt=new x(G,Dt);xt.position.set(-.4,-1.05,0),U.add(xt);const st=new x(G,vt);st.position.set(.4,-1.05,0),U.add(st);const tt=new ft(.3,32,32),St=new x(tt,Dt);St.scale.set(1,.72,1.5),St.position.set(-.4,-1.45,.17),U.add(St);const Et=new x(tt,vt);Et.scale.set(1,.72,1.5),Et.position.set(.4,-1.45,.17),U.add(Et);const kt=new ft(.44,32,32),ee=new x(kt,Dt);ee.position.set(-.15,-.45,-.4),U.add(ee);const se=new x(kt,pt);se.position.set(.15,-.45,-.4),U.add(se);const oe=new ft(.18,32,32),ne=new x(oe,Dt);ne.position.set(0,-.35,-.8),U.add(ne),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ct){const he=new ke("X",{font:Ct,size:.2,depth:.05}),P=new x(he,pt);P.position.set(-.3,.99,.53),P.rotation.x=le.degToRad(-5),P.rotation.y=le.degToRad(-15),U.add(P);const Y=new ke("+",{font:Ct,size:.25,depth:.1}),D=new x(Y,pt);D.position.set(.12,.99,.53),D.rotation.y=le.degToRad(12),D.rotation.x=le.degToRad(-5),U.add(D)});const ae=y();U.add(ae),m();const ve=f();U.add(ve);const ce=f();ce.position.set(-.2,-.1,.5),U.add(ce),A(),a.value=f(),U.add(a.value),S(a.value);const Pe=b();U.add(Pe);const me=b();me.position.set(-.2,-.2,0),me.scale.set(.35,.35,.35),U.add(me);const Be=B(.1,{x:0,y:0,z:1}),Re=B(1.1,{x:0,y:-1.2,z:0});I();const je=1e3,Ne=new Sn,hn=[];for(let Ct=0;Ct<je;Ct++){const he=(Math.random()-.5)*20,P=Math.random()*20,Y=(Math.random()-.5)*20;hn.push(he,P,Y)}Ne.setAttribute("position",new en(hn,3));const Dn=new vr({color:16777215,size:.1,transparent:!0,opacity:.8}),gn=new sr(Ne,Dn);U.add(gn),R(),U.scale.set(1.2,1.2,1.2),Q.add(U),U.scale.set(1.4,1.4,1.4),U.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),Q.add(U),U.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),U.position.y=-.25,M.position.set(t.bodyPosition.x,1.4,t.cameraPosition),M.position.set(0,1,4),M.lookAt(t.bodyPosition.x,0,0),M.position.z=4,U.rotation.x=.1,z(),Ve(()=>t.bodyPosition,Ct=>{U.position.set(Ct.x,Ct.y,Ct.z)}),Ve(()=>t.cameraPosition,Ct=>{M.position.set(t.bodyPosition.x,1,Ct),M.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),E.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function p(){r.value=!0}function v(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let y=0;y<eb;y++){const m=document.createElement("div");m.classList.add("confetti"),m.style.left=`${Math.random()*100}vw`,m.style.animationDuration=`${Math.random()*3+4}s`,m.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(m)}for(let y=0;y<nb;y++){const m=document.createElement("div");m.classList.add("light"),document.body.appendChild(m)}return(y,m)=>(Wn(),Yn(fn,null,[Bt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Bt("div",QS,[Bt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:v},"UP",32),Bt("div",tb,[Bt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:v},"LEFT",32),Bt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:v},"RIGHT",32)]),Bt("button",{class:"pixel-btn down",onMousedown:p,onMouseup:v},"DOWN",32)])],64))}}),sb=$n(ib,[["__scopeId","data-v-43013412"]]),ob={class:"pixel-controls"},rb={class:"side-buttons"},ab=15,cb=5,lb=Ln({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);const a=po(null),c=new zn({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new Gn;const l=new qe(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5,Vn(()=>{if(e.value){let y=function(){const D=new Xt,j=new si(.12,.05,16,100),H=new Ut({color:16777215}),gt=new x(j,H);gt.position.set(0,1.65,0),gt.rotation.x=Math.PI/2,D.add(gt);const It=new ai(.15,.3,32),Ft=new Ut({color:16711680}),Ht=new x(It,Ft);Ht.position.set(0,1.8,0),D.add(Ht);const Kt=new ft(.05,32,32),Qt=new Ut({color:16777215}),Vt=new x(Kt,Qt);return Vt.position.set(0,1.93,0),D.add(Vt),D.position.set(0,-.1,0),D},m=function(){const D=new Xt,j=new ft(.15,32,32),H=new Ut({color:16764057}),gt=new x(j,H);gt.position.set(0,.4,0),D.add(gt);const It=new ai(.08,.15,32);new Ut({color:16764057});const Ft=new x(It,yt);Ft.position.set(-.1,.55,0),Ft.rotation.z=Math.PI/6,D.add(Ft);const Ht=new x(It,yt);Ht.position.set(.1,.55,0),Ht.rotation.z=-Math.PI/6,D.add(Ht);const Kt=new te(.12,.15,.3,32),Qt=new Ut({color:16764057}),Vt=new x(Kt,Qt);Vt.position.set(0,.2,0),D.add(Vt);const ie=new te(.05,.05,.2,32),de=new Ut({color:16764057}),ue=new x(ie,de);ue.position.set(-.07,-.05,.05),D.add(ue);const Pt=new x(ie,de);Pt.position.set(.07,-.05,.05),D.add(Pt);const qt=new te(.04,.04,.2,32),Gt=new Ut({color:16764057}),re=new x(qt,yt);re.position.set(-.15,.25,0),re.rotation.z=Math.PI/4,D.add(re);const Tt=new x(qt,Gt);Tt.position.set(.15,.25,0),Tt.rotation.z=-Math.PI/4,D.add(Tt);const ye=new te(.03,.03,.25,32),Ee=new Ut({color:16764057}),ge=new x(ye,Ee);return ge.position.set(0,.1,-.2),ge.rotation.x=Math.PI/4,D.add(ge),D.scale.set(.75,.75,.75),D.position.set(.2,0,.2),D},f=function(){const D=new Xt,j=new ft(.2,32,32),H=new Ut({color:16764057}),gt=new x(j,H);gt.position.set(0,1,0),D.add(gt);const It=new Ut({color:16777215}),Ft=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Pr of Ft){const kp=new ft(Pr.size,16,16),Fu=new x(kp,It);Fu.position.set(Pr.x,Pr.y-.06,Pr.z-.01),D.add(Fu)}const Ht=new Ut({color:16777215}),Kt=new te(.05,.06,.1,32),Qt=new x(Kt,Ht);Qt.position.set(-.06,.93,.18),Qt.rotation.z=Math.PI/4;const Vt=new te(.05,.06,.1,32),ie=new x(Vt,Ht);ie.position.set(.06,.93,.18),ie.rotation.z=-Math.PI/4;const de=new si(.12,.05,16,100),ue=new Ut({color:16777215}),Pt=new x(de,ue);Pt.position.set(0,1.15,0),Pt.rotation.x=Math.PI/2,D.add(Pt);const qt=new ai(.15,.3,32),Gt=new Ut({color:16711680}),re=new x(qt,Gt);re.position.set(0,1.3,0),D.add(re);const Tt=new ft(.05,32,32),ye=new Ut({color:16777215}),Ee=new x(Tt,ye);Ee.position.set(0,1.43,0),D.add(Ee);const ge=new te(.2,.25,.6,32),Ie=new Ut({color:16711680}),pe=new x(ge,Ie);pe.position.set(0,.5,0),D.add(pe);const Ce=new te(.25,.25,.1,32),ze=new Ut({color:0}),Te=new x(Ce,ze);Te.position.set(0,.4,.005),D.add(Te);const Fe=new te(.06,.06,.3,32),Ze=new Ut({color:16711680}),We=new x(Fe,Ze);We.position.set(-.25,.75,0),We.rotation.z=Math.PI/4,D.add(We);const rn=new x(Fe,Ze);rn.position.set(.25,.75,0),rn.rotation.z=-Math.PI/4,D.add(rn);const sn=new ft(.07,32,32),Ye=new Ut({color:16777215}),nn=new x(sn,Ye);nn.position.set(-.35,.85,0),D.add(nn);const Je=new x(sn,Ye);Je.position.set(.35,.85,0),D.add(Je);const ln=new te(.1,.1,.15,32),dn=new Ut({color:16711680}),bn=new te(.08,.08,.4,32),bi=new Ut({color:0}),Fi=new x(bn,bi);Fi.position.set(-.1,.1,0),D.add(Fi);const Oi=new x(ln,dn);Oi.position.set(-.1,-.05,0),D.add(Oi);const Bi=new x(bn,bi);Bi.position.set(.1,.1,0),D.add(Bi);const Ei=new x(ln,dn);Ei.position.set(.1,-.05,0),D.add(Ei);const fi=new ft(.12,32,32),Ar=new Ut({color:16711680}),Ws=new x(fi,Ar);Ws.scale.set(1,.7,1.5),Ws.position.set(-.1,-.12,.12),D.add(Ws);const Qa=new x(fi,Ar);return Qa.scale.set(1,.7,1.5),Qa.position.set(.1,-.1,.12),D.add(Qa),D.scale.set(.25,.25,.25),D.position.set(.2,.5,-0),D},A=function(){let D=0;function j(){requestAnimationFrame(j),D+=.4,fe.position.y=.45+Math.sin(D)*.5,E.render(Q,M)}j()},S=function(D){let j=1,H=0;function gt(){requestAnimationFrame(gt),D.position.x+=.01*j,D.position.x>=.5?(j=-1,D.rotation.y=Math.PI):D.position.x<=0&&(j=1,D.rotation.y=0),H+=1,D.position.y=-.2+Math.sin(H)*.01,D.position.z=.5,E.render(Q,M)}gt()},b=function(){const D=new Xt,j=new yn(.7,.8,.7),H=new Ut({color:9127187}),gt=new x(j,H);gt.position.set(0,.4,0),D.add(gt);const It=new ai(.55,.25,4),Ft=new Ut({color:16777215}),Ht=new x(It,Ft);Ht.position.set(0,.9,0),Ht.rotation.y=Math.PI/4,D.add(Ht);const Kt=new yn(.25,.35,.05),Qt=new Ut({color:6636321}),Vt=new x(Kt,Qt);Vt.position.set(0,.2,.36),D.add(Vt);const ie=new yn(.15,.15,.05),de=new Ut({color:8900331}),ue=new x(ie,de);ue.position.set(-.2,.5,.38),D.add(ue);const Pt=new x(ie,de);Pt.position.set(.2,.5,.38),D.add(Pt);const qt=new yn(.2,.4,.2),Gt=new Ut({color:8421504}),re=new x(qt,Gt);re.position.set(0,.95,0),D.add(re);const Tt=new si(.07,.04,32,100),ye=new Ut({color:2263842}),Ee=new x(Tt,ye);return Ee.position.set(0,.45,.38),D.add(Ee),D.position.set(.22,-.2,0),D.scale.set(.5,.5,.5),D},B=function(D=1,j={x:0,y:0,z:0}){const H=new Xt,gt=new te(1.2,.9,3,32),It=new Ut({color:25153}),Ft=new x(gt,It);H.add(Ft);const Ht=new te(1.3,1.3,.2,32),Kt=new Ut({color:3355443}),Qt=new x(Ht,Kt);return Qt.position.y=1.6,H.add(Qt),new jn().load("/3d-bear-arts/assets/starbucks-logo.png",function(ie){ie.repeat.set(4,1),ie.offset.set(.25,0),ie.wrapS=Ke,ie.wrapT=Ke;const de=new Ut({color:9127187,map:ie,transparent:!0}),ue=new te(1.1,1.05,1.5,32),Pt=new x(ue,de);Pt.position.y=-.5,H.add(Pt)}),H.scale.set(D,D,D),H.position.set(j.x,j.y,j.z),H},I=function(){requestAnimationFrame(I);const D=Re.attributes.position.array;for(let j=1;j<D.length;j+=3)D[j]-=.02,D[j]<-10&&(D[j]=10);Re.attributes.position.needsUpdate=!0,E.render(Q,M)},R=function(){requestAnimationFrame(R);const D=he.attributes.position.array;for(let j=1;j<D.length;j+=3)D[j]-=.02,D[j]<-Ct&&(D[j]=Ct);he.attributes.position.needsUpdate=!0,E.render(Q,M)},z=function(){requestAnimationFrame(z),i.value&&(U.rotation.y+=.03),s.value&&(U.rotation.y-=.03),o.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),_.uniforms.u_time.value+=.5,ae.rotation.y+=.45,Pe.rotation.y+=.05,me.rotation.y+=.05,U.rotation.y-=.05,E.render(Q,M)};const Q=new Gn,M=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),E=new zn({antialias:!0,alpha:!0});E.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(E.domElement);const U=new Xt,k=new Xt;Q.add(k);const et=new hi(16777215,2);Q.add(et);const rt=new ui(16777215,4);rt.position.set(5,5,5),Q.add(rt);const $=new li(16777215,5,50);$.position.set(0,2,4),Q.add($);const nt=new jn,X=nt.load("/3d-bear-arts/assets/house.jpg");X.wrapS=X.wrapT=Ke,X.repeat.set(1,1),nt.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const vt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:be});new Ot({color:16777215,metalness:.3,map:X,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.4,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:be});const yt=new Ot({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:be}),wt=new Tr().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);Q.environment=wt;const Dt=new Ot({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:be}),Wt=new Ot({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),at=new ft(1,32,32,0,Math.PI),pt=new x(at,vt),bt=new x(at,yt);pt.scale.set(.85,.85,.8),bt.scale.set(.85,.85,.8),pt.position.y=-.2,bt.position.y=-.2,pt.rotation.y=Math.PI/2,bt.rotation.y=Math.PI*1.5;const O=new Ae(1,32),lt=new x(O,Dt);lt.scale.set(.85,.85,.8),lt.position.set(0,-.2,0),lt.rotation.y=Math.PI/2;const ot=new Xt;ot.add(pt),ot.add(bt),ot.add(lt),U.add(ot);const ht=new ft(.6,32,32,0,Math.PI),Mt=new x(ht,yt);Mt.scale.set(1,.95,.95),Mt.position.set(0,1,0),Mt.rotation.y=Math.PI*1.5;const it=new x(ht,vt);it.scale.set(1,.95,.95),it.position.set(0,1,0),it.rotation.y=Math.PI/2;const g=new Ae(.6,32),T=new x(g,Dt);T.position.set(0,1,0),T.rotation.y=Math.PI/2,T.scale.set(1,.95,.95);const L=new Xt;L.add(Mt),L.add(it),L.add(T),U.add(L);const F=new ft(.6,32,32,0,Math.PI*2,0,Math.PI/2),N=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),K=new x(F,N);K.position.set(0,-.2,0),K.rotation.x=Math.PI,K.scale.set(1.25,1.25,1.25),ot.add(K);const Z=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:be,transparent:!1,opacity:.8}),w=new x(O,Z);w.scale.set(.7,.7,.7),w.position.set(0,-.3,0),w.rotation.x=Math.PI/2,w.renderOrder=1,ot.add(w),U.add(ot);const _=new an({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
            `}),C=new x(O,_);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,ot.add(C);const q=new ft(.25,32,32),V=new x(q,yt);V.position.set(-.45,1.35,-.1),U.add(V);const W=new x(q,vt);W.position.set(.45,1.35,-.1),U.add(W);const dt=new ft(.25,32,32,Math.PI/2,Math.PI),ct=new x(dt,yt);ct.scale.set(1.1,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=Math.PI;const mt=new ft(.25,32,32,Math.PI/2,Math.PI),At=new x(mt,vt);At.scale.set(1.1,.6,.8),At.position.set(0,.84,.5),At.rotation.y=0;const ut=new Ae(.25,32),_t=new x(ut,Dt);_t.scale.set(.8,.6,.8),_t.position.set(0,.84,.5),_t.rotation.y=Math.PI/2;const Lt=new Xt;Lt.add(ct),Lt.add(At),Lt.add(_t),U.add(Lt);const Nt=new ft(.35,32,32),Rt=new x(Nt,yt);Rt.scale.set(.75,1.25,.65),Rt.position.set(-.7,-.15,.2),U.add(Rt);const $t=new x(Nt,vt);$t.scale.set(.75,1.25,.65),$t.position.set(.7,-.15,.2),U.add($t);const zt=new te(.2,.22,.6,32),Yt=new x(zt,yt);Yt.position.set(-.4,-1.05,0),U.add(Yt);const G=new x(zt,vt);G.position.set(.4,-1.05,0),U.add(G);const xt=new ft(.3,32,32),st=new x(xt,yt);st.scale.set(1,.72,1.5),st.position.set(-.4,-1.45,.17),U.add(st);const tt=new x(xt,vt);tt.scale.set(1,.72,1.5),tt.position.set(.4,-1.45,.17),U.add(tt);const St=new ft(.44,32,32),Et=new x(St,yt);Et.position.set(-.15,-.45,-.4),U.add(Et);const kt=new x(St,yt);kt.position.set(.15,-.45,-.4),U.add(kt);const ee=new ft(.18,32,32),se=new x(ee,yt);se.position.set(0,-.35,-.8),U.add(se),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(D){const j=new ke("X",{font:D,size:.2,depth:.05}),H=new x(j,Wt);H.position.set(-.3,.99,.53),H.rotation.x=le.degToRad(-5),H.rotation.y=le.degToRad(-15),U.add(H);const gt=new ke("O",{font:D,size:.2,depth:.05}),It=new x(gt,Wt);It.position.set(.14,.99,.53),It.rotation.y=le.degToRad(12),It.rotation.x=le.degToRad(-5),U.add(It)});const ne=y();U.add(ne),m();const fe=f();U.add(fe);const ae=f();ae.position.set(-.2,-.1,.5),U.add(ae),A(),a.value=f(),U.add(a.value),S(a.value);const ve=b();U.add(ve);const ce=b();ce.position.set(-.2,-.2,0),ce.scale.set(.35,.35,.35),U.add(ce);const Pe=B(.1,{x:0,y:0,z:1}),me=B(.6,{x:0,y:-1.5,z:0}),Be=1e3,Re=new Sn,je=[];for(let D=0;D<Be;D++){const j=(Math.random()-.5)*20,H=Math.random()*20,gt=(Math.random()-.5)*20;je.push(j,H,gt)}Re.setAttribute("position",new en(je,3));const Ne=new vr({color:16777215,size:.1,transparent:!0,opacity:.8}),hn=new sr(Re,Ne);U.add(hn),I();const Dn=2e3,gn=[],Ct=.6;for(let D=0;D<Dn;D++){const j=(Math.random()-.5)*Ct*2,H=(Math.random()-.5)*Ct*2,gt=(Math.random()-.5)*Ct*2;Math.sqrt(j*j+H*H+gt*gt)<Ct&&gn.push(j,H,gt)}const he=new Sn;he.setAttribute("position",new en(gn,3)),new vr({color:16777215,size:.05,transparent:!0,opacity:.9}),new sr(he,N).position.set(0,-.2,0),new sr(he,Z).position.set(0,.8,0),R(),U.scale.set(.85,.85,.85),U.position.set(t.bodyPosition.x,t.bodyPosition.y+.9,t.bodyPosition.z),Q.add(U),Q.add(me),M.position.set(t.bodyPosition.x,1,t.cameraPosition),M.lookAt(t.bodyPosition.x,0,0),M.position.z=4,U.rotation.x=.1,z(),Ve(()=>t.bodyPosition,D=>{U.position.set(D.x,D.y,D.z)}),Ve(()=>t.cameraPosition,D=>{M.position.set(t.bodyPosition.x,1,D),M.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),E.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function p(){r.value=!0}function v(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let y=0;y<ab;y++){const m=document.createElement("div");m.classList.add("confetti"),m.style.left=`${Math.random()*100}vw`,m.style.animationDuration=`${Math.random()*3+4}s`,m.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(m)}for(let y=0;y<cb;y++){const m=document.createElement("div");m.classList.add("light"),document.body.appendChild(m)}return(y,m)=>(Wn(),Yn(fn,null,[Bt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Bt("div",ob,[Bt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:v},"UP",32),Bt("div",rb,[Bt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:v},"LEFT",32),Bt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:v},"RIGHT",32)]),Bt("button",{class:"pixel-btn down",onMousedown:p,onMouseup:v},"DOWN",32)])],64))}}),ub=$n(lb,[["__scopeId","data-v-ceb84432"]]),hb={key:0,class:"bear-face-container"},db=Ln({__name:"BearFaceWhite",props:{color:{type:String,default:"white"}},setup(n){const t=jt(null),e=jt(!1),i=n;return Vn(()=>{const s=t.value;if(s){s.width=window.innerWidth,s.height=window.innerHeight*.7;const o=s.getContext("2d");o&&(()=>{const a=s.width/2,c=s.height/1.8,l=s.height/2,h=s.height/2.05,u=l*.45,d=l*.18,p=l*.3,v=l*.275,y=p*.35,m=p*.32;o.save(),o.beginPath(),o.rect(0,0,s.width/2,s.height),o.clip(),o.lineWidth=15,o.strokeStyle=i.color,o.beginPath(),o.arc(a-l*.85,c-h*.8,u,0,Math.PI*2,!0),o.stroke(),o.beginPath(),o.arc(a+l*.85,c-l*.8,u,0,Math.PI*2,!0),o.stroke(),o.lineWidth=15,o.beginPath(),o.arc(a,c,h,0,Math.PI*2,!0),o.stroke(),o.lineWidth=15,o.beginPath(),o.arc(a-l*.4,c-l*.2,d,0,Math.PI*2,!0),o.stroke(),o.beginPath(),o.moveTo(a+l*.2,c-l*.3),o.lineTo(a+l*.5,c-l*.05),o.moveTo(a+l*.5,c-l*.3),o.lineTo(a+l*.2,c-l*.05),o.stroke(),o.beginPath(),o.ellipse(a,c+l*.4,v*1.5,v,0,0,Math.PI*2),o.stroke(),o.beginPath(),o.arc(a,c+l*.3,m,0,Math.PI*2,!0),o.stroke(),o.restore(),o.save(),o.beginPath(),o.rect(s.width/2,0,s.width/2,s.height),o.clip(),o.fillStyle=i.color,o.beginPath(),o.arc(a-l*.85,c-l*.8,u,0,Math.PI*2,!0),o.fill(),o.beginPath(),o.arc(a+l*.85,c-l*.8,u,0,Math.PI*2,!0),o.fill(),o.beginPath(),o.arc(a,c,l,0,Math.PI*2,!0),o.fill(),o.fillStyle=i.color,o.beginPath(),o.arc(a-l*.4,c-l*.2,d,0,Math.PI*2,!0),o.fill(),o.lineWidth=15,o.beginPath(),o.moveTo(a+l*.2,c-l*.3),o.lineTo(a+l*.5,c-l*.05),o.moveTo(a+l*.5,c-l*.3),o.lineTo(a+l*.2,c-l*.05),o.strokeStyle="#000000",o.stroke(),o.fillStyle="#000000",o.beginPath(),o.ellipse(a,c+l*.4,p*1.5,p,0,0,Math.PI*2),o.fill(),o.fillStyle=i.color,o.beginPath(),o.arc(a,c+l*.3,y*1.2,0,Math.PI*2,!0),o.fill(),o.restore()})()}}),(s,o)=>e.value?Lm("",!0):(Wn(),Yn("div",hb,[Bt("canvas",{ref_key:"bearCanvas",ref:t},null,512)]))}}),Gp=$n(db,[["__scopeId","data-v-6ce68a75"]]),fb={class:"pixel-controls"},pb={class:"side-buttons"},mb=15,gb=5,vb=Ln({__name:"SliverBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);Vn(()=>{if(e.value){let d=function(){f.visible=!1,R.update(m,v),f.visible=!0,requestAnimationFrame(d)},p=function(){requestAnimationFrame(p),yt.uniforms.time.value+=.05,nt.uniforms.time.value+=.05,i.value&&(f.rotation.y+=.05),s.value&&(f.rotation.y-=.07),o.value&&(f.rotation.x-=.05),r.value&&(f.rotation.x+=.05),m.render(v,y)};const v=new Gn,y=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),m=new zn({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const f=new Xt,A=new hi(16777215,2);v.add(A);const S=new ui(16777215,4);S.position.set(5,5,5),v.add(S);const b=new li(16777215,5,50);b.position.set(0,2,4),v.add(b);const B=new jn,I=new $a(256,{format:Xn,generateMipmaps:!0,minFilter:Ci}),R=new Ya(1,1e3,I);new Ot({color:12632256,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:I.texture,envMapIntensity:1.5}),v.add(R),v.environment=I.texture,d();const Q=new Tr().load(["/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg"]);v.environment=Q;const M=new Ot({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:Q,reflectivity:1}),E=new Ot({color:"hotpink",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.3,envMap:Q,reflectivity:0}),U=B.load("/3d-bear-arts/assets/popbear1.jpg"),k=new Ot({color:"hotpink",map:U,metalness:.3,roughness:.5,transparent:!0,opacity:1}),et=new an({uniforms:{time:{value:0},color1:{value:new xe(16766720)},color2:{value:new xe(16007990)}},vertexShader:`
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
          `}),rt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,$=`
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
      `,nt=new an({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:rt,fragmentShader:$,transparent:!1,depthWrite:!0}),X=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,vt=`
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
      `,yt=new an({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:X,fragmentShader:vt,transparent:!1,depthWrite:!0}),wt=new ft(1,32,32,0,Math.PI),Dt=new x(wt,E),Wt=new x(wt,M);Dt.scale.set(.85,.85,.8),Wt.scale.set(.85,.85,.8),Dt.position.y=-.2,Wt.position.y=-.2,Dt.rotation.y=Math.PI/2,Wt.rotation.y=Math.PI*1.5;const at=new Ae(1,32),pt=new x(at,k);pt.scale.set(.85,.85,.8),pt.position.set(0,-.2,0),pt.rotation.y=Math.PI/2;const bt=new Xt;bt.add(Dt),bt.add(Wt),bt.add(pt),f.add(bt);const O=new ft(.6,32,32,0,Math.PI),lt=new x(O,M);lt.scale.set(1,.95,.95),lt.position.set(0,1,0),lt.rotation.y=Math.PI*1.5;const ot=new x(O,E);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI/2;const ht=new Ae(.6,32),Mt=new x(ht,k);Mt.position.set(0,1,0),Mt.rotation.y=Math.PI/2,Mt.scale.set(1,.95,.95);const it=new Xt;it.add(lt),it.add(ot),it.add(Mt),f.add(it);const g=new ft(.25,32,32),T=new x(g,M);T.position.set(-.45,1.35,-.1),f.add(T);const L=new x(g,E);L.position.set(.45,1.35,-.1),f.add(L);const F=new ft(.25,32,32,Math.PI/2,Math.PI),N=new x(F,M);N.scale.set(1.1,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI;const K=new ft(.25,32,32,Math.PI/2,Math.PI),Z=new x(K,E);Z.scale.set(1.1,.6,.8),Z.position.set(0,.84,.5),Z.rotation.y=0;const w=new Ae(.25,32),_=new x(w,k);_.scale.set(.8,.6,.8),_.position.set(0,.84,.5),_.rotation.y=Math.PI/2;const C=new Xt;C.add(N),C.add(Z),C.add(_),f.add(C);const q=new Cn;q.moveTo(0,0),q.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),q.bezierCurveTo(-.6,.3,0,.6,0,1),q.bezierCurveTo(0,.6,.6,.3,.6,0),q.bezierCurveTo(.6,-.3,0,-.3,0,0);const V={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},W=new Hn(q,V),dt=new x(W,nt);dt.scale.set(.38,.38,.38),dt.position.set(.35,0,0),dt.rotation.y=Math.PI,dt.rotation.x=Math.PI,f.add(dt);const ct=new x(W,nt);ct.scale.set(.35,.35,.35),ct.position.set(.3,0,0),ct.rotation.y=Math.PI,ct.rotation.x=Math.PI,f.add(ct);const mt=new x(W,M);mt.scale.set(.22,.22,.22),mt.position.set(.27,.4,0),mt.rotation.y=Math.PI,mt.rotation.x=Math.PI,f.add(mt);const At=new x(W,M);At.scale.set(.25,.25,.25),At.position.set(.23,-.5,.3),At.rotation.y=Math.PI,At.rotation.x=Math.PI,f.add(At);const ut=new x(W,M);ut.scale.set(.3,.3,.3),ut.position.set(.23,.2,-.4),ut.rotation.y=Math.PI,ut.rotation.x=Math.PI,f.add(ut);const _t=new ft(.35,32,32),Lt=new x(_t,M);Lt.scale.set(.75,1.25,.65),Lt.position.set(-.7,-.15,.2),f.add(Lt);const Nt=new x(_t,E);Nt.scale.set(.75,1.25,.65),Nt.position.set(.7,-.15,.2),f.add(Nt);const Rt=new te(.2,.22,.6,32),$t=new x(Rt,M);$t.position.set(-.4,-1.05,0),f.add($t);const zt=new x(Rt,E);zt.position.set(.4,-1.05,0),f.add(zt);const Yt=new ft(.3,32,32),G=new x(Yt,M);G.scale.set(1,.72,1.5),G.position.set(-.4,-1.45,.17),f.add(G);const xt=new x(Yt,E);xt.scale.set(1,.72,1.5),xt.position.set(.4,-1.45,.17),f.add(xt);const st=new ft(.44,32,32),tt=new x(st,M);tt.position.set(-.15,-.45,-.4),f.add(tt);const St=new x(st,E);St.position.set(.15,-.45,-.4),f.add(St);const Et=new ft(.18,32,32),kt=new x(Et,M);kt.position.set(0,-.35,-.8),f.add(kt),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ne){const fe=new ke("X",{font:ne,size:.18,depth:.05}),ae=new x(fe,nt);ae.position.set(-.3,.99,.53),ae.rotation.x=le.degToRad(-5),ae.rotation.y=le.degToRad(-15),f.add(ae);const ve=new ke("+",{font:ne,size:.25,depth:.1}),ce=new x(ve,nt);ce.position.set(.14,.99,.53),ce.rotation.y=le.degToRad(12),ce.rotation.x=le.degToRad(-5),f.add(ce)}),kt.renderOrder=1,f.scale.set(1.4,1.4,1.4),v.add(f),f.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1.4,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4;let se=jt(!1);const oe=ne=>{if(se.value){const fe={x:ne.clientX/window.innerWidth*2-1,y:-(ne.clientY/window.innerHeight)*2+1},ae=fe.x*Math.PI*.2,ve=fe.y*Math.PI*.2;f.rotation.y=ae,f.rotation.x=ve}};window.addEventListener("mousemove",oe),et.uniforms.time.value+=.04,p(),Ve(()=>t.bodyPosition,ne=>{f.position.set(ne.x,ne.y,ne.z)}),Ve(()=>t.cameraPosition,ne=>{y.position.set(t.bodyPosition.x,1,ne),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let d=0;d<mb;d++){const p=document.createElement("div");p.classList.add("confetti"),p.style.left=`${Math.random()*100}vw`,p.style.animationDuration=`${Math.random()*3+4}s`,p.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(p)}for(let d=0;d<gb;d++){const p=document.createElement("div");p.classList.add("light"),document.body.appendChild(p)}return(d,p)=>(Wn(),Yn(fn,null,[Bt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Bt("div",null,[Ge(Gp,{class:"bear-background",color:"#FF69B4"})]),Bt("div",fb,[Bt("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:u},"▲",32),Bt("div",pb,[Bt("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:u},"◀",32),Bt("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:u},"▶",32)]),Bt("button",{class:"pixel-btn down border-gold",onMousedown:h,onMouseup:u},"▼",32)])],64))}}),_b=$n(vb,[["__scopeId","data-v-cb6b3b73"]]),xb={class:"pixel-controls"},yb={class:"side-buttons"},Mb=15,wb=5,Sb=Ln({__name:"Money",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);Vn(()=>{if(e.value){let d=function(){f.visible=!1,z.update(m,v),f.visible=!0,requestAnimationFrame(d)},p=function(){requestAnimationFrame(p),Dt.uniforms.time.value+=.05,vt.uniforms.time.value+=.05,i.value&&(f.rotation.y+=.05),s.value&&(f.rotation.y-=.07),o.value&&(f.rotation.x-=.05),r.value&&(f.rotation.x+=.05),m.render(v,y)};const v=new Gn,y=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),m=new zn({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const f=new Xt,A=new hi(16777215,2);v.add(A);const S=new ui(16777215,4);S.position.set(5,5,5),v.add(S);const b=new li(16777215,5,50);b.position.set(0,2,4),v.add(b);const I=new jn().load("/3d-bear-arts/assets/cashwings.jpg"),R=new $a(256,{format:Xn,generateMipmaps:!0,minFilter:Ci}),z=new Ya(1,1e3,R),Q=new Ot({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:R.texture,envMapIntensity:1.5});v.add(z),v.environment=R.texture,d();const M=new Tr,E=M.load(["/3d-bear-arts/assets/cash2.jpg","/3d-bear-arts/assets/cash8.jpg","/3d-bear-arts/assets/cash1.jpg","/3d-bear-arts/assets/cash11.jpg","/3d-bear-arts/assets/cash4.jpg","/3d-bear-arts/assets/cash3.jpg"]);v.environment=E;const U=M.load(["/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg"]);v.environment=U;const k=new Ot({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:E,reflectivity:1});new Ot({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:U,reflectivity:1});const et=new Ot({color:"sliver",map:I,metalness:.3,roughness:.5,transparent:!0,opacity:1}),rt=new Ot({color:"sliver",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,envMap:E,reflectivity:0}),$=new an({uniforms:{time:{value:0},color1:{value:new xe(16766720)},color2:{value:new xe(16007990)}},vertexShader:`
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
          `}),nt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,X=`
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
      `,vt=new an({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:nt,fragmentShader:X,transparent:!1,depthWrite:!0}),yt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,wt=`
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
      `,Dt=new an({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:yt,fragmentShader:wt,transparent:!1,depthWrite:!0}),Wt=new ft(1,32,32,0,Math.PI),at=new x(Wt,rt),pt=new x(Wt,k);at.scale.set(.85,.85,.8),pt.scale.set(.85,.85,.8),at.position.y=-.2,pt.position.y=-.2,at.rotation.y=Math.PI/2,pt.rotation.y=Math.PI*1.5;const bt=new Ae(1,32),O=new x(bt,et);O.scale.set(.85,.85,.8),O.position.set(0,-.2,0),O.rotation.y=Math.PI/2;const lt=new Xt;lt.add(at),lt.add(pt),lt.add(O),f.add(lt);const ot=new ft(.6,32,32,0,Math.PI),ht=new x(ot,k);ht.scale.set(1,.95,.95),ht.position.set(0,1,0),ht.rotation.y=Math.PI*1.5;const Mt=new x(ot,rt);Mt.scale.set(1,.95,.95),Mt.position.set(0,1,0),Mt.rotation.y=Math.PI/2;const it=new Ae(.6,32),g=new x(it,et);g.position.set(0,1,0),g.rotation.y=Math.PI/2,g.scale.set(1,.95,.95);const T=new Xt;T.add(ht),T.add(Mt),T.add(g),f.add(T);const L=new ft(.25,32,32),F=new x(L,k);F.position.set(-.45,1.35,-.1),f.add(F);const N=new x(L,rt);N.position.set(.45,1.35,-.1),f.add(N);const K=new ft(.25,32,32,Math.PI/2,Math.PI),Z=new x(K,k);Z.scale.set(1.1,.6,.8),Z.position.set(0,.84,.5),Z.rotation.y=Math.PI;const w=new ft(.25,32,32,Math.PI/2,Math.PI),_=new x(w,rt);_.scale.set(1.1,.6,.8),_.position.set(0,.84,.5),_.rotation.y=0;const C=new Ae(.25,32),q=new x(C,et);q.scale.set(.8,.6,.8),q.position.set(0,.84,.5),q.rotation.y=Math.PI/2;const V=new Xt;V.add(Z),V.add(_),V.add(q),f.add(V);const W=new Cn;W.moveTo(0,0),W.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),W.bezierCurveTo(-.6,.3,0,.6,0,1),W.bezierCurveTo(0,.6,.6,.3,.6,0),W.bezierCurveTo(.6,-.3,0,-.3,0,0);const dt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ct=new Hn(W,dt),mt=new x(ct,Q);mt.scale.set(.38,.38,.38),mt.position.set(.35,0,0),mt.rotation.y=Math.PI,mt.rotation.x=Math.PI,f.add(mt);const At=new x(ct,k);At.scale.set(.35,.35,.35),At.position.set(.3,0,0),At.rotation.y=Math.PI,At.rotation.x=Math.PI,f.add(At);const ut=new x(ct,k);ut.scale.set(.22,.22,.22),ut.position.set(.27,.4,0),ut.rotation.y=Math.PI,ut.rotation.x=Math.PI,f.add(ut);const _t=new x(ct,k);_t.scale.set(.25,.25,.25),_t.position.set(.23,-.5,.3),_t.rotation.y=Math.PI,_t.rotation.x=Math.PI,f.add(_t);const Lt=new x(ct,k);Lt.scale.set(.3,.3,.3),Lt.position.set(.23,.2,-.4),Lt.rotation.y=Math.PI,Lt.rotation.x=Math.PI,f.add(Lt);const Nt=new ft(.35,32,32),Rt=new x(Nt,k);Rt.scale.set(.75,1.25,.65),Rt.position.set(-.7,-.15,.2),f.add(Rt);const $t=new x(Nt,rt);$t.scale.set(.75,1.25,.65),$t.position.set(.7,-.15,.2),f.add($t);const zt=new te(.2,.22,.6,32),Yt=new x(zt,k);Yt.position.set(-.4,-1.05,0),f.add(Yt);const G=new x(zt,rt);G.position.set(.4,-1.05,0),f.add(G);const xt=new ft(.3,32,32),st=new x(xt,k);st.scale.set(1,.72,1.5),st.position.set(-.4,-1.45,.17),f.add(st);const tt=new x(xt,rt);tt.scale.set(1,.72,1.5),tt.position.set(.4,-1.45,.17),f.add(tt);const St=new ft(.44,32,32),Et=new x(St,k);Et.position.set(-.15,-.45,-.4),f.add(Et);const kt=new x(St,rt);kt.position.set(.15,-.45,-.4),f.add(kt);const ee=new ft(.18,32,32),se=new x(ee,k);se.position.set(0,-.35,-.8),f.add(se),new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ae){const ve=new ke("X",{font:ae,size:.18,depth:.05}),ce=new x(ve,k);ce.position.set(-.3,.99,.53),ce.rotation.x=le.degToRad(-5),ce.rotation.y=le.degToRad(-15),f.add(ce);const Pe=new ke("+",{font:ae,size:.25,depth:.1}),me=new x(Pe,k);me.position.set(.14,.99,.53),me.rotation.y=le.degToRad(12),me.rotation.x=le.degToRad(-5),f.add(me)}),se.renderOrder=1,f.scale.set(1.4,1.4,1.4),v.add(f),f.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1.4,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4;let ne=jt(!1);const fe=ae=>{if(ne.value){const ve={x:ae.clientX/window.innerWidth*2-1,y:-(ae.clientY/window.innerHeight)*2+1},ce=ve.x*Math.PI*.2,Pe=ve.y*Math.PI*.2;f.rotation.y=ce,f.rotation.x=Pe}};window.addEventListener("mousemove",fe),$.uniforms.time.value+=.04,p(),Ve(()=>t.bodyPosition,ae=>{f.position.set(ae.x,ae.y,ae.z)}),Ve(()=>t.cameraPosition,ae=>{y.position.set(t.bodyPosition.x,1,ae),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let d=0;d<Mb;d++){const p=document.createElement("div");p.classList.add("confetti"),p.style.left=`${Math.random()*100}vw`,p.style.animationDuration=`${Math.random()*3+4}s`,p.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(p)}for(let d=0;d<wb;d++){const p=document.createElement("div");p.classList.add("light"),document.body.appendChild(p)}return(d,p)=>(Wn(),Yn(fn,null,[Bt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Bt("div",null,[Ge(Gp,{class:"bear-background",color:"lightgreen"})]),Bt("div",xb,[Bt("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:u},"▲",32),Bt("div",yb,[Bt("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:u},"◀",32),Bt("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:u},"▶",32)]),Bt("button",{class:"pixel-btn down border-gold",onMousedown:h,onMouseup:u},"▼",32)])],64))}}),bb=$n(Sb,[["__scopeId","data-v-063871f2"]]),Eb={class:"pixel-controls"},Tb={class:"side-buttons"},Ab=15,Pb=5,Rb=Ln({__name:"Snowman",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);Vn(()=>{if(e.value){let d=function(){R.visible=!1,et.update(I,b),R.visible=!0,requestAnimationFrame(d)},p=function(){const Pt=document.createElement("canvas"),qt=Pt.getContext("2d");Pt.width=512,Pt.height=512;const Gt=Pt.width/10;for(let Tt=0;Tt<10;Tt++)qt.fillStyle=Tt%2===0?"#FF0000":"#FFFFFF",qt.fillRect(Tt*Gt,0,Gt,Pt.height);const re=new U1(Pt);return re.wrapS=Ke,re.wrapT=Ke,re.repeat.set(1,0),re},v=function(){const Pt=new Xt,qt=new Ut({color:16777215}),Gt=new Ut({color:0}),re=new Ut({color:16753920}),Tt=new Ut({color:16711680}),ye=new Ut({color:0}),Ee=new x(new ft(.6,32,32),qt);Ee.position.set(0,.6,0),Pt.add(Ee);const ge=new x(new ft(.4,32,32),qt);ge.position.set(0,1.2,0),Pt.add(ge);const Ie=new x(new ft(.3,32,32),qt);Ie.position.set(0,1.7,0),Pt.add(Ie);const pe=new x(new ft(.05,16,16),Gt);pe.position.set(-.1,1.75,.25),Pt.add(pe);const Ce=new x(new ft(.05,16,16),Gt);Ce.position.set(.1,1.75,.25),Pt.add(Ce);const ze=new ai(.05,.2,32),Te=new x(ze,re);Te.position.set(0,1.7,.35),Te.rotation.x=Math.PI/2,Pt.add(Te);for(let ln=0;ln<3;ln++){const dn=new x(new ft(.05,16,16),Gt);dn.position.set(0,1-ln*.3,.4),Pt.add(dn)}const Fe=new si(.3,.08,16,100),Ze=new x(Fe,Tt);Ze.position.set(0,1.45,0),Ze.rotation.x=Math.PI/2,Pt.add(Ze);const We=new yn(.1,.4,.05),rn=new x(We,Tt);rn.position.set(.25,1.3,0),Pt.add(rn);const sn=new te(.3,.3,.05,32),Ye=new x(sn,ye);Ye.position.set(0,1.9,0),Pt.add(Ye);const nn=new te(.2,.2,.3,32),Je=new x(nn,ye);return Je.position.set(0,2.05,0),Pt.add(Je),Pt},y=function(){const Pt=new Xt;new Ut({color:16777215});const qt=new Ut({color:0}),Gt=new Ut({color:16753920}),re=new Ut({color:16711680}),Tt=new Ut({color:0}),ye=new x(new ft(.6,32,32),X);ye.position.set(0,.6,0),Pt.add(ye);const Ee=new x(new ft(.4,32,32),X);Ee.position.set(0,1.2,0),Pt.add(Ee);const ge=new x(new ft(.3,32,32),X);ge.position.set(0,1.7,0),Pt.add(ge);const Ie=new x(new ft(.05,16,16),qt);Ie.position.set(-.1,1.75,.25),Pt.add(Ie);const pe=new x(new ft(.05,16,16),qt);pe.position.set(.1,1.75,.25),Pt.add(pe);const Ce=new ai(.05,.2,32),ze=new x(Ce,Gt);ze.position.set(0,1.7,.35),ze.rotation.x=Math.PI/2,Pt.add(ze);for(let Je=0;Je<3;Je++){const ln=new x(new ft(.05,16,16),qt);ln.position.set(0,1-Je*.3,.4),Pt.add(ln)}const Te=new si(.3,.08,16,100),Fe=new x(Te,re);Fe.position.set(0,1.45,0),Fe.rotation.x=Math.PI/2,Pt.add(Fe);const Ze=new yn(.1,.4,.05),We=new x(Ze,re);We.position.set(.25,1.3,0),Pt.add(We);const rn=new te(.3,.3,.05,32),sn=new x(rn,Tt);sn.position.set(0,1.9,0),Pt.add(sn);const Ye=new te(.2,.2,.3,32),nn=new x(Ye,Tt);return nn.position.set(0,2.05,0),Pt.add(nn),Pt},m=function(){const Pt=new Xt;new Ut({color:16777215});const qt=new Ut({color:16770244}),Gt=new Ut({color:16776960}),re=new Ut({color:16316671}),Tt=new ft(.2,32,32),ye=new x(Tt,qt);ye.position.set(0,1.5,0),Pt.add(ye);const Ee=new te(.2,.35,.6,32),ge=new x(Ee,qt);ge.position.set(0,1,0),Pt.add(ge);const Ie=new Cn;Ie.moveTo(0,0),Ie.bezierCurveTo(.5,.2,.8,.7,.5,1.5),Ie.bezierCurveTo(.3,1.3,0,.8,0,0);const pe=new Hn(Ie,{depth:.05,bevelEnabled:!1}),Ce=new x(pe,re);Ce.position.set(-.2,1.2,-.05),Ce.rotation.y=Math.PI/12,Ce.rotation.z=Math.PI/4,Ce.scale.set(-.5,.5,.5),Pt.add(Ce);const ze=new x(pe,re);ze.position.set(-.1,1.1,-.05),ze.rotation.y=Math.PI/10,ze.rotation.z=Math.PI/3,ze.scale.set(-.5,.5,.5),Pt.add(ze);const Te=new x(pe,re);Te.position.set(0,1,-.05),Te.rotation.y=Math.PI/8,Te.rotation.z=Math.PI/2.5,Te.scale.set(-.5,.5,.5),Pt.add(Te);const Fe=new x(pe,re);Fe.position.set(.2,1.2,-.05),Fe.rotation.y=-Math.PI/12,Fe.rotation.z=-Math.PI/4,Fe.scale.set(.5,.5,.5),Pt.add(Fe);const Ze=new x(pe,re);Ze.position.set(.1,1.1,-.05),Ze.rotation.y=-Math.PI/10,Ze.rotation.z=-Math.PI/3,Ze.scale.set(.5,.5,.5),Pt.add(Ze);const We=new x(pe,re);We.position.set(0,1,-.05),We.rotation.y=-Math.PI/8,We.rotation.z=-Math.PI/2.5,We.scale.set(.5,.5,.5),Pt.add(We);const rn=new si(.15,.05,16,100),sn=new x(rn,Gt);sn.position.set(0,1.8,0),sn.rotation.x=Math.PI/2,Pt.add(sn);const Ye=new te(.05,.05,.3,32),nn=new x(Ye,qt);nn.position.set(-.15,.55,0),nn.rotation.z=Math.PI/1;const Je=new x(Ye,qt);return Je.position.set(.15,.55,0),Je.rotation.z=-Math.PI/1,Pt.add(nn),Pt.add(Je),Pt},f=function(){requestAnimationFrame(f);const Pt=1.5,qt=.5;je+=.03,hn+=.005*gn,hn>qt&&(gn=-1),hn<-qt&&(gn=1),he.position.x=Math.cos(je)*Pt,he.position.z=Math.sin(je)*Pt,he.position.y=hn+1,Ne+=.03,Dn+=.005*Ct,Dn>qt&&(Ct=-1),Dn<-qt&&(Ct=1),P.position.x=Math.cos(Ne)*Pt,P.position.z=Math.sin(Ne)*Pt,P.position.y=Dn+1,he.lookAt(R.position),P.lookAt(R.position),I.render(b,B)},A=function(){requestAnimationFrame(A);const Pt=Kt.attributes.position.array;for(let qt=1;qt<Pt.length;qt+=3)Pt[qt]-=.02,Pt[qt]<-10&&(Pt[qt]=10);Kt.attributes.position.needsUpdate=!0,I.render(b,B)},S=function(){requestAnimationFrame(S),lt.uniforms.time.value+=.05,pt.uniforms.time.value+=.05,i.value&&(R.rotation.y+=.05),s.value&&(R.rotation.y-=.07),o.value&&(R.rotation.x-=.05),r.value&&(R.rotation.x+=.05),I.render(b,B)};const b=new Gn,B=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),I=new zn({antialias:!0,alpha:!0});I.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(I.domElement);const R=new Xt,z=new hi(16777215,2);b.add(z);const Q=new ui(16777215,4);Q.position.set(5,5,5),b.add(Q);const M=new li(16777215,5,50);M.position.set(0,2,4),b.add(M);const U=new jn().load("/3d-bear-arts/assets/cashwings.jpg"),k=new $a(256,{format:Xn,generateMipmaps:!0,minFilter:Ci}),et=new Ya(1,1e3,k);new Ot({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:k.texture,envMapIntensity:1.5}),b.add(et),b.environment=k.texture,d();const rt=new Tr,$=rt.load(["/3d-bear-arts/assets/christmas_garden.jpg","/3d-bear-arts/assets/christmas_ground.jpg","/3d-bear-arts/assets/christmas_front.jpg","/3d-bear-arts/assets/christmas_house.jpg","/3d-bear-arts/assets/christmas_tree.jpg","/3d-bear-arts/assets/christmas_sky.jpg"]);rt.load(["/3d-bear-arts/assets/cash2.jpg","/3d-bear-arts/assets/cash8.jpg","/3d-bear-arts/assets/cash1.jpg","/3d-bear-arts/assets/cash11.jpg","/3d-bear-arts/assets/cash4.jpg","/3d-bear-arts/assets/cash3.jpg"]),b.environment=$;const nt=rt.load(["/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg"]);b.environment=nt;const X=new Ot({color:"white",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:$,reflectivity:1});new Ot({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:nt,reflectivity:1});const vt=new Ot({color:"sliver",map:U,metalness:.3,roughness:.5,transparent:!0,opacity:1}),yt=new Ot({color:"white",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.3,envMap:$,reflectivity:0}),wt=new Ot({color:"white",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.7,envMap:$,reflectivity:0}),Dt=new an({uniforms:{time:{value:0},color1:{value:new xe(16766720)},color2:{value:new xe(16007990)}},vertexShader:`
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
          `}),Wt=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,at=`
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
      `,pt=new an({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:Wt,fragmentShader:at,transparent:!1,depthWrite:!0}),bt=`
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
      `,lt=new an({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:bt,fragmentShader:O,transparent:!1,depthWrite:!0}),ot=new ft(1,32,32,0,Math.PI),ht=new x(ot,yt),Mt=new x(ot,X);ht.scale.set(.85,.85,.8),Mt.scale.set(.85,.85,.8),ht.position.y=-.2,Mt.position.y=-.2,ht.rotation.y=Math.PI/2,Mt.rotation.y=Math.PI*1.5;const it=new Ae(1,32),g=new x(it,X);g.scale.set(.85,.85,.8),g.position.set(0,-.2,0),g.rotation.y=Math.PI/2;const T=new Xt;T.add(ht),T.add(Mt),T.add(g),R.add(T);const L=new ft(.6,32,32,0,Math.PI),F=new x(L,X);F.scale.set(1,.95,.95),F.position.set(0,1,0),F.rotation.y=Math.PI*1.5;const N=new x(L,wt);N.scale.set(1,.95,.95),N.position.set(0,1,0),N.rotation.y=Math.PI/2;const K=new Ae(.6,32),Z=new x(K,X);Z.position.set(0,1,0),Z.rotation.y=Math.PI/2,Z.scale.set(1,.95,.95);const w=new Xt;w.add(F),w.add(N),w.add(Z),R.add(w);const _=new ft(.25,32,32),C=new x(_,X);C.position.set(-.45,1.35,-.1),R.add(C);const q=new x(_,wt);q.position.set(.45,1.35,-.1),R.add(q);const V=new ft(.25,32,32,Math.PI/2,Math.PI),W=new x(V,X);W.scale.set(1.1,.6,.8),W.position.set(0,.84,.5),W.rotation.y=Math.PI;const dt=new ft(.25,32,32,Math.PI/2,Math.PI),ct=new x(dt,wt);ct.scale.set(1.1,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=0;const mt=new Ae(.25,32),At=new x(mt,vt);At.scale.set(.8,.6,.8),At.position.set(0,.84,.5),At.rotation.y=Math.PI/2;const ut=new Xt;ut.add(W),ut.add(ct),ut.add(At),R.add(ut);const _t=new Cn;_t.moveTo(0,0),_t.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),_t.bezierCurveTo(-.6,.3,0,.6,0,1),_t.bezierCurveTo(0,.6,.6,.3,.6,0),_t.bezierCurveTo(.6,-.3,0,-.3,0,0);const Lt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Nt=new Hn(_t,Lt),Rt=new x(Nt,X);Rt.scale.set(.23,.23,.23),Rt.position.set(.25,1.2,0),Rt.rotation.y=Math.PI,Rt.rotation.x=Math.PI;const $t=new ft(.35,32,32),zt=new x($t,X);zt.scale.set(.75,1.25,.65),zt.position.set(-.7,-.15,.2),R.add(zt);const Yt=new x($t,wt);Yt.scale.set(.75,1.25,.65),Yt.position.set(.7,-.15,.2),R.add(Yt);const G=new te(.2,.22,.6,32),xt=new x(G,X);xt.position.set(-.4,-1.05,0),R.add(xt);const st=new x(G,wt);st.position.set(.4,-1.05,0),R.add(st);const tt=new ft(.3,32,32),St=new x(tt,X);St.scale.set(1,.72,1.5),St.position.set(-.4,-1.45,.17),R.add(St);const Et=new x(tt,wt);Et.scale.set(1,.72,1.5),Et.position.set(.4,-1.45,.17),R.add(Et);const kt=new ft(.44,32,32),ee=new x(kt,X);ee.position.set(-.15,-.45,-.4),R.add(ee);const se=new x(kt,wt);se.position.set(.15,-.45,-.4),R.add(se);const oe=new ft(.18,32,32),ne=new x(oe,X);ne.position.set(0,-.35,-.8),R.add(ne),ne.renderOrder=1,new di().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Pt){const qt=new ke("X",{font:Pt,size:.18,depth:.05}),Gt=new x(qt,X);Gt.position.set(-.3,.99,.53),Gt.rotation.x=le.degToRad(-5),Gt.rotation.y=le.degToRad(-15),R.add(Gt);const re=new ke("+",{font:Pt,size:.25,depth:.1}),Tt=new x(re,X);Tt.position.set(.13,.99,.53),Tt.rotation.y=le.degToRad(12),Tt.rotation.x=le.degToRad(-5),R.add(Tt)});const ae=p(),ve=new Ut({map:ae,metalness:.1,roughness:.8}),ce=new si(.5,.1,24,100,Math.PI),Pe=new x(ce,ve);Pe.position.set(0,.54,0),Pe.rotation.x=Math.PI/2,Pe.rotation.y=Math.PI/1,Pe.rotation.z=Math.PI/-2,R.add(Pe);const me=v();me.scale.set(.38,.38,.38),me.position.set(.3,-.45,0),R.add(me);const Be=y();Be.scale.set(.2,.2,.2),Be.position.set(.5,-.3,.3),R.add(Be);const Re=y();Re.scale.set(.12,.12,.12),Re.position.set(.2,-.3,.5),R.add(Re);let je=0,Ne=Math.PI,hn=0,Dn=0,gn=1,Ct=-1;const he=m();he.scale.set(.4,.4,.4),b.add(he);const P=m();P.scale.set(.4,.4,.4),b.add(P),f();const Y=new ft(.6,32,32,0,Math.PI*2,0,Math.PI/2),D=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),j=new x(Y,D);j.position.set(0,-.2,0),j.rotation.x=Math.PI,j.scale.set(1.25,1.25,1.25),T.add(j);const H=new Ot({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:be,transparent:!1,opacity:.8}),gt=new x(it,H);gt.scale.set(.7,.7,.7),gt.position.set(0,-.3,0),gt.rotation.x=Math.PI/2,gt.renderOrder=1,T.add(gt),R.add(T);const It=new an({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
    `}),Ft=new x(it,It);Ft.position.set(0,-.2,0),Ft.scale.set(.7,.7,.7),Ft.rotation.x=-Math.PI/2,Ft.renderOrder=2,T.add(Ft);const Ht=1e3,Kt=new Sn,Qt=[];for(let Pt=0;Pt<Ht;Pt++){const qt=(Math.random()-.5)*20,Gt=Math.random()*20,re=(Math.random()-.5)*20;Qt.push(qt,Gt,re)}Kt.setAttribute("position",new en(Qt,3));const Vt=new vr({color:16777215,size:.1,transparent:!0,opacity:.8}),ie=new sr(Kt,Vt);R.add(ie),A(),R.scale.set(1.2,1.2,1.2),b.add(R),R.scale.set(1.4,1.4,1.4),b.add(R),R.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),B.position.set(t.bodyPosition.x,1.4,t.cameraPosition),B.lookAt(t.bodyPosition.x,0,0),B.position.z=4;let de=jt(!1);const ue=Pt=>{if(de.value){const qt={x:Pt.clientX/window.innerWidth*2-1,y:-(Pt.clientY/window.innerHeight)*2+1},Gt=qt.x*Math.PI*.2,re=qt.y*Math.PI*.2;R.rotation.y=Gt,R.rotation.x=re}};window.addEventListener("mousemove",ue),Dt.uniforms.time.value+=.04,S(),Ve(()=>t.bodyPosition,Pt=>{R.position.set(Pt.x,Pt.y,Pt.z)}),Ve(()=>t.cameraPosition,Pt=>{B.position.set(t.bodyPosition.x,1,Pt),B.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{B.aspect=window.innerWidth/window.innerHeight,B.updateProjectionMatrix(),I.setSize(window.innerWidth,window.innerHeight)})}});let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let d=0;d<Ab;d++){const p=document.createElement("div");p.classList.add("confetti"),p.style.left=`${Math.random()*100}vw`,p.style.animationDuration=`${Math.random()*3+4}s`,p.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(p)}for(let d=0;d<Pb;d++){const p=document.createElement("div");p.classList.add("light"),document.body.appendChild(p)}return(d,p)=>(Wn(),Yn(fn,null,[Bt("div",{ref_key:"threeCanvas",ref:e,class:kn(n.background?"no-bg":"three-canvas")},null,2),Bt("div",Eb,[Bt("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:u},"▲",32),Bt("div",Tb,[Bt("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:u},"◀",32),Bt("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:u},"▶",32)]),Bt("button",{class:"pixel-btn down border-gold",onMousedown:h,onMouseup:u},"▼",32)])],64))}}),Cb=$n(Rb,[["__scopeId","data-v-4439572d"]]),Ib=[{path:"/3d-bear-arts/leather",name:"Leather",component:bS},{path:"/3d-bear-arts/pop-art",name:"Pop",component:TS},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:CS},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:US},{path:"/3d-bear-arts/water",name:"Water",component:WS},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:YS},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:JS},{path:"/3d-bear-arts/santa",name:"Santa",component:sb},{path:"/3d-bear-arts/coffee",name:"Coffee",component:ub},{path:"/3d-bear-arts/bears",name:"Bears",component:_b},{path:"/3d-bear-arts/money",name:"Money",component:bb},{path:"/3d-bear-arts/",name:"Snowman",component:Cb}],Lb=_v({history:Yg(),routes:Ib}),Hp=dg(vg);Hp.use(Lb);Hp.mount("#app");
