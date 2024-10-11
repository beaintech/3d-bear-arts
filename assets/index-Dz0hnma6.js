(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ic(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const at={},Tr=[],Nn=()=>{},pp=()=>!1,Fo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),rc=n=>n.startsWith("onUpdate:"),Lt=Object.assign,sc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},mp=Object.prototype.hasOwnProperty,Qe=(n,e)=>mp.call(n,e),We=Array.isArray,os=n=>Oo(n)==="[object Map]",gp=n=>Oo(n)==="[object Set]",Ve=n=>typeof n=="function",At=n=>typeof n=="string",Vr=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",Qh=n=>(gt(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),_p=Object.prototype.toString,Oo=n=>_p.call(n),vp=n=>Oo(n).slice(8,-1),xp=n=>Oo(n)==="[object Object]",oc=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,as=ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},yp=/-(\w)/g,hn=Bo(n=>n.replace(yp,(e,t)=>t?t.toUpperCase():"")),Mp=/\B([A-Z])/g,tr=Bo(n=>n.replace(Mp,"-$1").toLowerCase()),zo=Bo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ia=Bo(n=>n?`on${zo(n)}`:""),bi=(n,e)=>!Object.is(n,e),ra=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ef=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Sp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Jc;const tf=()=>Jc||(Jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ac(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=At(i)?Tp(i):ac(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(At(n)||gt(n))return n}const Ep=/;(?![^(]*\))/g,wp=/:([^]+)/,bp=/\/\*[^]*?\*\//g;function Tp(n){const e={};return n.replace(bp,"").split(Ep).forEach(t=>{if(t){const i=t.split(wp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ai(n){let e="";if(At(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=Ai(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ap="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rp=ic(Ap);function nf(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class Cp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=nn;try{return nn=this,e()}finally{nn=t}}}on(){nn=this}off(){nn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Pp(){return nn}let ot;const sa=new WeakSet;class rf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,sa.has(this)&&(sa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||of(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qc(this),af(this);const e=ot,t=bn;ot=this,bn=!0;try{return this.fn()}finally{lf(this),ot=e,bn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uc(e);this.deps=this.depsTail=void 0,Qc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?sa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qa(this)&&this.run()}get dirty(){return Qa(this)}}let sf=0,Er;function of(n){n.flags|=8,n.next=Er,Er=n}function lc(){sf++}function cc(){if(--sf>0)return;let n;for(;Er;){let e=Er,t;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Er,Er=void 0;e;){if(t=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function af(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function lf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),uc(i),Lp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Qa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function cf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===vs))return;n.globalVersion=vs;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Qa(n)){n.flags&=-3;return}const t=ot,i=bn;ot=n,bn=!0;try{af(n);const r=n.fn(n._value);(e.version===0||bi(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ot=t,bn=i,lf(n),n.flags&=-3}}function uc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)uc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Lp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let bn=!0;const uf=[];function Ri(){uf.push(bn),bn=!1}function Ci(){const n=uf.pop();bn=n===void 0?!0:n}function Qc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ot;ot=void 0;try{e()}finally{ot=t}}}let vs=0;class Ip{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ot||!bn||ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ot)t=this.activeLink=new Ip(ot,this),ot.deps?(t.prevDep=ot.depsTail,ot.depsTail.nextDep=t,ot.depsTail=t):ot.deps=ot.depsTail=t,hf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ot.depsTail,t.nextDep=void 0,ot.depsTail.nextDep=t,ot.depsTail=t,ot.deps===t&&(ot.deps=i)}return t}trigger(e){this.version++,vs++,this.notify(e)}notify(e){lc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{cc()}}}function hf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)hf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const el=new WeakMap,Ki=Symbol(""),tl=Symbol(""),xs=Symbol("");function Bt(n,e,t){if(bn&&ot){let i=el.get(n);i||el.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new hc),r.target=n,r.map=i,r.key=t),r.track()}}function ni(n,e,t,i,r,s){const o=el.get(n);if(!o){vs++;return}const a=l=>{l&&l.trigger()};if(lc(),e==="clear")o.forEach(a);else{const l=We(n),c=l&&oc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===xs||!Vr(f)&&f>=u)&&a(h)})}else switch(t!==void 0&&a(o.get(t)),c&&a(o.get(xs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ki)),os(n)&&a(o.get(tl)));break;case"delete":l||(a(o.get(Ki)),os(n)&&a(o.get(tl)));break;case"set":os(n)&&a(o.get(Ki));break}}cc()}function sr(n){const e=tt(n);return e===n?e:(Bt(e,"iterate",xs),Tn(n)?e:e.map(kt))}function fc(n){return Bt(n=tt(n),"iterate",xs),n}const Dp={__proto__:null,[Symbol.iterator](){return oa(this,Symbol.iterator,kt)},concat(...n){return sr(this).concat(...n.map(e=>We(e)?sr(e):e))},entries(){return oa(this,"entries",n=>(n[1]=kt(n[1]),n))},every(n,e){return kn(this,"every",n,e,void 0,arguments)},filter(n,e){return kn(this,"filter",n,e,t=>t.map(kt),arguments)},find(n,e){return kn(this,"find",n,e,kt,arguments)},findIndex(n,e){return kn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return kn(this,"findLast",n,e,kt,arguments)},findLastIndex(n,e){return kn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return kn(this,"forEach",n,e,void 0,arguments)},includes(...n){return aa(this,"includes",n)},indexOf(...n){return aa(this,"indexOf",n)},join(n){return sr(this).join(n)},lastIndexOf(...n){return aa(this,"lastIndexOf",n)},map(n,e){return kn(this,"map",n,e,void 0,arguments)},pop(){return Kr(this,"pop")},push(...n){return Kr(this,"push",n)},reduce(n,...e){return eu(this,"reduce",n,e)},reduceRight(n,...e){return eu(this,"reduceRight",n,e)},shift(){return Kr(this,"shift")},some(n,e){return kn(this,"some",n,e,void 0,arguments)},splice(...n){return Kr(this,"splice",n)},toReversed(){return sr(this).toReversed()},toSorted(n){return sr(this).toSorted(n)},toSpliced(...n){return sr(this).toSpliced(...n)},unshift(...n){return Kr(this,"unshift",n)},values(){return oa(this,"values",kt)}};function oa(n,e,t){const i=fc(n),r=i[e]();return i!==n&&!Tn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Up=Array.prototype;function kn(n,e,t,i,r,s){const o=fc(n),a=o!==n&&!Tn(n),l=o[e];if(l!==Up[e]){const h=l.apply(n,s);return a?kt(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,kt(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function eu(n,e,t,i){const r=fc(n);let s=t;return r!==n&&(Tn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,kt(a),l,n)}),r[e](s,...i)}function aa(n,e,t){const i=tt(n);Bt(i,"iterate",xs);const r=i[e](...t);return(r===-1||r===!1)&&gc(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function Kr(n,e,t=[]){Ri(),lc();const i=tt(n)[e].apply(n,t);return cc(),Ci(),i}const Np=ic("__proto__,__v_isRef,__isVue"),ff=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vr));function Fp(n){Vr(n)||(n=String(n));const e=tt(this);return Bt(e,"has",n),e.hasOwnProperty(n)}class df{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Kp:_f:s?gf:mf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!r){let l;if(o&&(l=Dp[t]))return l;if(t==="hasOwnProperty")return Fp}const a=Reflect.get(e,t,Nt(e)?e:i);return(Vr(t)?ff.has(t):Np(t))||(r||Bt(e,"get",t),s)?a:Nt(a)?o&&oc(t)?a:a.value:gt(a)?r?xf(a):Go(a):a}}class pf extends df{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=ji(s);if(!Tn(i)&&!ji(i)&&(s=tt(s),i=tt(i)),!We(e)&&Nt(s)&&!Nt(i))return l?!1:(s.value=i,!0)}const o=We(e)&&oc(t)?Number(t)<e.length:Qe(e,t),a=Reflect.set(e,t,i,Nt(e)?e:r);return e===tt(r)&&(o?bi(i,s)&&ni(e,"set",t,i):ni(e,"add",t,i)),a}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ni(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Vr(t)||!ff.has(t))&&Bt(e,"has",t),i}ownKeys(e){return Bt(e,"iterate",We(e)?"length":Ki),Reflect.ownKeys(e)}}class Op extends df{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Bp=new pf,zp=new Op,Hp=new pf(!0);const dc=n=>n,Ho=n=>Reflect.getPrototypeOf(n);function zs(n,e,t=!1,i=!1){n=n.__v_raw;const r=tt(n),s=tt(e);t||(bi(e,s)&&Bt(r,"get",e),Bt(r,"get",s));const{has:o}=Ho(r),a=i?dc:t?_c:kt;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Hs(n,e=!1){const t=this.__v_raw,i=tt(t),r=tt(n);return e||(bi(n,r)&&Bt(i,"has",n),Bt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Gs(n,e=!1){return n=n.__v_raw,!e&&Bt(tt(n),"iterate",Ki),Reflect.get(n,"size",n)}function tu(n,e=!1){!e&&!Tn(n)&&!ji(n)&&(n=tt(n));const t=tt(this);return Ho(t).has.call(t,n)||(t.add(n),ni(t,"add",n,n)),this}function nu(n,e,t=!1){!t&&!Tn(e)&&!ji(e)&&(e=tt(e));const i=tt(this),{has:r,get:s}=Ho(i);let o=r.call(i,n);o||(n=tt(n),o=r.call(i,n));const a=s.call(i,n);return i.set(n,e),o?bi(e,a)&&ni(i,"set",n,e):ni(i,"add",n,e),this}function iu(n){const e=tt(this),{has:t,get:i}=Ho(e);let r=t.call(e,n);r||(n=tt(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&ni(e,"delete",n,void 0),s}function ru(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&ni(n,"clear",void 0,void 0),t}function ks(n,e){return function(i,r){const s=this,o=s.__v_raw,a=tt(o),l=e?dc:n?_c:kt;return!n&&Bt(a,"iterate",Ki),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Vs(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=os(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?dc:e?_c:kt;return!e&&Bt(s,"iterate",l?tl:Ki),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ci(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Gp(){const n={get(s){return zs(this,s)},get size(){return Gs(this)},has:Hs,add:tu,set:nu,delete:iu,clear:ru,forEach:ks(!1,!1)},e={get(s){return zs(this,s,!1,!0)},get size(){return Gs(this)},has:Hs,add(s){return tu.call(this,s,!0)},set(s,o){return nu.call(this,s,o,!0)},delete:iu,clear:ru,forEach:ks(!1,!0)},t={get(s){return zs(this,s,!0)},get size(){return Gs(this,!0)},has(s){return Hs.call(this,s,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:ks(!0,!1)},i={get(s){return zs(this,s,!0,!0)},get size(){return Gs(this,!0)},has(s){return Hs.call(this,s,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Vs(s,!1,!1),t[s]=Vs(s,!0,!1),e[s]=Vs(s,!1,!0),i[s]=Vs(s,!0,!0)}),[n,t,e,i]}const[kp,Vp,Wp,Xp]=Gp();function pc(n,e){const t=e?n?Xp:Wp:n?Vp:kp;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const qp={get:pc(!1,!1)},Yp={get:pc(!1,!0)},$p={get:pc(!0,!1)};const mf=new WeakMap,gf=new WeakMap,_f=new WeakMap,Kp=new WeakMap;function jp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zp(n){return n.__v_skip||!Object.isExtensible(n)?0:jp(vp(n))}function Go(n){return ji(n)?n:mc(n,!1,Bp,qp,mf)}function vf(n){return mc(n,!1,Hp,Yp,gf)}function xf(n){return mc(n,!0,zp,$p,_f)}function mc(n,e,t,i,r){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Zp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function ls(n){return ji(n)?ls(n.__v_raw):!!(n&&n.__v_isReactive)}function ji(n){return!!(n&&n.__v_isReadonly)}function Tn(n){return!!(n&&n.__v_isShallow)}function gc(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Jp(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&ef(n,"__v_skip",!0),n}const kt=n=>gt(n)?Go(n):n,_c=n=>gt(n)?xf(n):n;function Nt(n){return n?n.__v_isRef===!0:!1}function Mt(n){return yf(n,!1)}function Qp(n){return yf(n,!0)}function yf(n,e){return Nt(n)?n:new em(n,e)}class em{constructor(e,t){this.dep=new hc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Tn(e)||ji(e);e=i?e:tt(e),bi(e,t)&&(this._rawValue=e,this._value=i?e:kt(e),this.dep.trigger())}}function cn(n){return Nt(n)?n.value:n}const tm={get:(n,e,t)=>e==="__v_raw"?n:cn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Nt(r)&&!Nt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Mf(n){return ls(n)?n:new Proxy(n,tm)}class nm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new hc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return of(this),!0}get value(){const e=this.dep.track();return cf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function im(n,e,t=!1){let i,r;return Ve(n)?i=n:(i=n.get,r=n.set),new nm(i,r,t)}const Ws={},To=new WeakMap;let ki;function rm(n,e=!1,t=ki){if(t){let i=To.get(t);i||To.set(t,i=[]),i.push(n)}}function sm(n,e,t=at){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:Tn(S)||r===!1||r===0?yi(S,1):yi(S);let u,h,f,d,_=!1,y=!1;if(Nt(n)?(h=()=>n.value,_=Tn(n)):ls(n)?(h=()=>c(n),_=!0):We(n)?(y=!0,_=n.some(S=>ls(S)||Tn(S)),h=()=>n.map(S=>{if(Nt(S))return S.value;if(ls(S))return c(S);if(Ve(S))return l?l(S,2):S()})):Ve(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Ri();try{f()}finally{Ci()}}const S=ki;ki=u;try{return l?l(n,3,[d]):n(d)}finally{ki=S}}:h=Nn,e&&r){const S=h,I=r===!0?1/0:r;h=()=>yi(S(),I)}const m=Pp(),p=()=>{u.stop(),m&&sc(m.effects,u)};if(s&&e){const S=e;e=(...I)=>{S(...I),p()}}let b=y?new Array(n.length).fill(Ws):Ws;const M=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const I=u.run();if(r||_||(y?I.some((C,R)=>bi(C,b[R])):bi(I,b))){f&&f();const C=ki;ki=u;try{const R=[I,b===Ws?void 0:y&&b[0]===Ws?[]:b,d];l?l(e,3,R):e(...R),b=I}finally{ki=C}}}else u.run()};return a&&a(M),u=new rf(h),u.scheduler=o?()=>o(M,!1):M,d=S=>rm(S,!1,u),f=u.onStop=()=>{const S=To.get(u);if(S){if(l)l(S,4);else for(const I of S)I();To.delete(u)}},e?i?M(!0):b=u.run():o?o(M.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function yi(n,e=1/0,t){if(e<=0||!gt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Nt(n))yi(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)yi(n[i],e,t);else if(gp(n)||os(n))n.forEach(i=>{yi(i,e,t)});else if(xp(n)){for(const i in n)yi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&yi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ls(n,e,t,i){try{return i?n(...i):n()}catch(r){ko(r,e,t)}}function On(n,e,t,i){if(Ve(n)){const r=Ls(n,e,t,i);return r&&Qh(r)&&r.catch(s=>{ko(s,e,t)}),r}if(We(n)){const r=[];for(let s=0;s<n.length;s++)r.push(On(n[s],e,t,i));return r}}function ko(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||at;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(s){Ri(),Ls(s,null,10,[n,l,c]),Ci();return}}om(n,t,r,i,o)}function om(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}let ys=!1,nl=!1;const Vt=[];let Ln=0;const Ar=[];let _i=null,yr=0;const Sf=Promise.resolve();let vc=null;function Ef(n){const e=vc||Sf;return n?e.then(this?n.bind(this):n):e}function am(n){let e=ys?Ln+1:0,t=Vt.length;for(;e<t;){const i=e+t>>>1,r=Vt[i],s=Ms(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function xc(n){if(!(n.flags&1)){const e=Ms(n),t=Vt[Vt.length-1];!t||!(n.flags&2)&&e>=Ms(t)?Vt.push(n):Vt.splice(am(e),0,n),n.flags|=1,wf()}}function wf(){!ys&&!nl&&(nl=!0,vc=Sf.then(Tf))}function lm(n){We(n)?Ar.push(...n):_i&&n.id===-1?_i.splice(yr+1,0,n):n.flags&1||(Ar.push(n),n.flags|=1),wf()}function su(n,e,t=ys?Ln+1:0){for(;t<Vt.length;t++){const i=Vt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Vt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function bf(n){if(Ar.length){const e=[...new Set(Ar)].sort((t,i)=>Ms(t)-Ms(i));if(Ar.length=0,_i){_i.push(...e);return}for(_i=e,yr=0;yr<_i.length;yr++){const t=_i[yr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}_i=null,yr=0}}const Ms=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Tf(n){nl=!1,ys=!0;try{for(Ln=0;Ln<Vt.length;Ln++){const e=Vt[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ls(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<Vt.length;Ln++){const e=Vt[Ln];e&&(e.flags&=-2)}Ln=0,Vt.length=0,bf(),ys=!1,vc=null,(Vt.length||Ar.length)&&Tf()}}let En=null,Af=null;function Ao(n){const e=En;return En=n,Af=n&&n.type.__scopeId||null,e}function xn(n,e=En,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&mu(-1);const s=Ao(e);let o;try{o=n(...r)}finally{Ao(s),i._d&&mu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ui(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ri(),On(l,t,8,[n.el,a,n,e]),Ci())}}const cm=Symbol("_vte"),um=n=>n.__isTeleport;function yc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,yc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function jt(n,e){return Ve(n)?Lt({name:n.name},e,{setup:n}):n}function Rf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function il(n,e,t,i,r=!1){if(We(n)){n.forEach((_,y)=>il(_,e&&(We(e)?e[y]:e),t,i,r));return}if(cs(i)&&!r)return;const s=i.shapeFlag&4?bc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,h=a.setupState,f=tt(h),d=h===at?()=>!1:_=>Qe(f,_);if(c!=null&&c!==l&&(At(c)?(u[c]=null,d(c)&&(h[c]=null)):Nt(c)&&(c.value=null)),Ve(l))Ls(l,a,12,[o,u]);else{const _=At(l),y=Nt(l);if(_||y){const m=()=>{if(n.f){const p=_?d(l)?h[l]:u[l]:l.value;r?We(p)&&sc(p,s):We(p)?p.includes(s)||p.push(s):_?(u[l]=[s],d(l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,d(l)&&(h[l]=o)):y&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,tn(m,t)):m()}}}const cs=n=>!!n.type.__asyncLoader,Cf=n=>n.type.__isKeepAlive;function hm(n,e){Pf(n,"a",e)}function fm(n,e){Pf(n,"da",e)}function Pf(n,e,t=Ut){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Vo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Cf(r.parent.vnode)&&dm(i,e,t,r),r=r.parent}}function dm(n,e,t,i){const r=Vo(e,n,i,!0);Mc(()=>{sc(i[e],r)},t)}function Vo(n,e,t=Ut,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Ri();const a=Is(t),l=On(e,t,n,o);return a(),Ci(),l});return i?r.unshift(s):r.push(s),s}}const si=n=>(e,t=Ut)=>{(!qo||n==="sp")&&Vo(n,(...i)=>e(...i),t)},pm=si("bm"),fn=si("m"),mm=si("bu"),gm=si("u"),Lf=si("bum"),Mc=si("um"),_m=si("sp"),vm=si("rtg"),xm=si("rtc");function ym(n,e=Ut){Vo("ec",n,e)}const Mm="components";function ou(n,e){return Em(Mm,n,!0,e)||n}const Sm=Symbol.for("v-ndc");function Em(n,e,t=!0,i=!1){const r=En||Ut;if(r){const s=r.type;{const a=hg(s,!1);if(a&&(a===e||a===hn(e)||a===zo(hn(e))))return s}const o=au(r[n]||s[n],e)||au(r.appContext[n],e);return!o&&i?s:o}}function au(n,e){return n&&(n[e]||n[hn(e)]||n[zo(hn(e))])}const rl=n=>n?Zf(n)?bc(n):rl(n.parent):null,us=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>rl(n.parent),$root:n=>rl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Sc(n),$forceUpdate:n=>n.f||(n.f=()=>{xc(n.update)}),$nextTick:n=>n.n||(n.n=Ef.bind(n.proxy)),$watch:n=>Wm.bind(n)}),la=(n,e)=>n!==at&&!n.__isScriptSetup&&Qe(n,e),wm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(la(i,e))return o[e]=1,i[e];if(r!==at&&Qe(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Qe(c,e))return o[e]=3,s[e];if(t!==at&&Qe(t,e))return o[e]=4,t[e];sl&&(o[e]=0)}}const u=us[e];let h,f;if(u)return e==="$attrs"&&Bt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==at&&Qe(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Qe(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return la(r,e)?(r[e]=t,!0):i!==at&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==at&&Qe(n,o)||la(e,o)||(a=s[0])&&Qe(a,o)||Qe(i,o)||Qe(us,o)||Qe(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lu(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let sl=!0;function bm(n){const e=Sc(n),t=n.proxy,i=n.ctx;sl=!1,e.beforeCreate&&cu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:y,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:M,unmounted:S,render:I,renderTracked:C,renderTriggered:R,errorCaptured:D,serverPrefetch:ie,expose:x,inheritAttrs:w,components:q,directives:z,filters:J}=e;if(c&&Tm(c,i,null),o)for(const $ in o){const O=o[$];Ve(O)&&(i[$]=O.bind(t))}if(r){const $=r.call(t,t);gt($)&&(n.data=Go($))}if(sl=!0,s)for(const $ in s){const O=s[$],de=Ve(O)?O.bind(t,t):Ve(O.get)?O.get.bind(t,t):Nn,pe=!Ve(O)&&Ve(O.set)?O.set.bind(t):Nn,ge=Pt({get:de,set:pe});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Se=>ge.value=Se})}if(a)for(const $ in a)If(a[$],i,t,$);if(l){const $=Ve(l)?l.call(t):l;Reflect.ownKeys($).forEach(O=>{go(O,$[O])})}u&&cu(u,n,"c");function G($,O){We(O)?O.forEach(de=>$(de.bind(t))):O&&$(O.bind(t))}if(G(pm,h),G(fn,f),G(mm,d),G(gm,_),G(hm,y),G(fm,m),G(ym,D),G(xm,C),G(vm,R),G(Lf,b),G(Mc,S),G(_m,ie),We(x))if(x.length){const $=n.exposed||(n.exposed={});x.forEach(O=>{Object.defineProperty($,O,{get:()=>t[O],set:de=>t[O]=de})})}else n.exposed||(n.exposed={});I&&n.render===Nn&&(n.render=I),w!=null&&(n.inheritAttrs=w),q&&(n.components=q),z&&(n.directives=z),ie&&Rf(n)}function Tm(n,e,t=Nn){We(n)&&(n=ol(n));for(const i in n){const r=n[i];let s;gt(r)?"default"in r?s=ii(r.from||i,r.default,!0):s=ii(r.from||i):s=ii(r),Nt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function cu(n,e,t){On(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function If(n,e,t,i){let r=i.includes(".")?qf(t,i):()=>t[i];if(At(n)){const s=e[n];Ve(s)&&qt(r,s)}else if(Ve(n))qt(r,n.bind(t));else if(gt(n))if(We(n))n.forEach(s=>If(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&qt(r,s,n)}}function Sc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ro(l,c,o,!0)),Ro(l,e,o)),gt(e)&&s.set(e,l),l}function Ro(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ro(n,s,t,!0),r&&r.forEach(o=>Ro(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Am[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Am={data:uu,props:hu,emits:hu,methods:rs,computed:rs,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:rs,directives:rs,watch:Cm,provide:uu,inject:Rm};function uu(n,e){return e?n?function(){return Lt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function Rm(n,e){return rs(ol(n),ol(e))}function ol(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function zt(n,e){return n?[...new Set([].concat(n,e))]:e}function rs(n,e){return n?Lt(Object.create(null),n,e):e}function hu(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:Lt(Object.create(null),lu(n),lu(e??{})):e}function Cm(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=zt(n[i],e[i]);return t}function Df(){return{app:null,config:{isNativeTag:pp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pm=0;function Lm(n,e){return function(i,r=null){Ve(i)||(i=Lt({},i)),r!=null&&!gt(r)&&(r=null);const s=Df(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Pm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:dg,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(c,...h)):Ve(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||rt(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(d,u):n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,bc(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Rr;Rr=c;try{return u()}finally{Rr=h}}};return c}}let Rr=null;function go(n,e){if(Ut){let t=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===t&&(t=Ut.provides=Object.create(i)),t[n]=e}}function ii(n,e,t=!1){const i=Ut||En;if(i||Rr){const r=Rr?Rr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const Uf={},Nf=()=>Object.create(Uf),Ff=n=>Object.getPrototypeOf(n)===Uf;function Im(n,e,t,i=!1){const r={},s=Nf();n.propsDefaults=Object.create(null),Of(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:vf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Dm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Wo(n.emitsOptions,f))continue;const d=e[f];if(l)if(Qe(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const _=hn(f);r[_]=al(l,a,_,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Of(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Qe(e,h)&&((u=tr(h))===h||!Qe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=al(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Qe(e,h))&&(delete s[h],c=!0)}c&&ni(n.attrs,"set","")}function Of(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(as(l))continue;const c=e[l];let u;r&&Qe(r,u=hn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Wo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||at;for(let u=0;u<s.length;u++){const h=s[u];t[h]=al(r,l,h,c[h],n,!Qe(c,h))}}return o}function al(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Qe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Is(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===tr(t))&&(i=!0))}return i}const Um=new WeakMap;function Bf(n,e,t=!1){const i=t?Um:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=h=>{l=!0;const[f,d]=Bf(h,e,!0);Lt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return gt(n)&&i.set(n,Tr),Tr;if(We(s))for(let u=0;u<s.length;u++){const h=hn(s[u]);fu(h)&&(o[h]=at)}else if(s)for(const u in s){const h=hn(u);if(fu(h)){const f=s[u],d=o[h]=We(f)||Ve(f)?{type:f}:Lt({},f),_=d.type;let y=!1,m=!0;if(We(_))for(let p=0;p<_.length;++p){const b=_[p],M=Ve(b)&&b.name;if(M==="Boolean"){y=!0;break}else M==="String"&&(m=!1)}else y=Ve(_)&&_.name==="Boolean";d[0]=y,d[1]=m,(y||Qe(d,"default"))&&a.push(h)}}const c=[o,a];return gt(n)&&i.set(n,c),c}function fu(n){return n[0]!=="$"&&!as(n)}const zf=n=>n[0]==="_"||n==="$stable",Ec=n=>We(n)?n.map(Dn):[Dn(n)],Nm=(n,e,t)=>{if(e._n)return e;const i=xn((...r)=>Ec(e(...r)),t);return i._c=!1,i},Hf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(zf(r))continue;const s=n[r];if(Ve(s))e[r]=Nm(r,s,i);else if(s!=null){const o=Ec(s);e[r]=()=>o}}},Gf=(n,e)=>{const t=Ec(e);n.slots.default=()=>t},kf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Fm=(n,e,t)=>{const i=n.slots=Nf();if(n.vnode.shapeFlag&32){const r=e._;r?(kf(i,e,t),t&&ef(i,"_",r,!0)):Hf(e,i)}else e&&Gf(n,e)},Om=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:kf(r,e,t):(s=!e.$stable,Hf(e,r)),o=e}else e&&(Gf(n,e),o={default:1});if(s)for(const a in r)!zf(a)&&o[a]==null&&delete r[a]},tn=Zm;function Bm(n){return zm(n)}function zm(n,e){const t=tf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Nn,insertStaticContent:_}=n,y=(g,T,L,F=null,N=null,Z=null,te=void 0,E=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!jr(g,T)&&(F=U(g),Se(g,N,Z,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:P,ref:X,shapeFlag:k}=T;switch(P){case Xo:m(g,T,L,F);break;case Zi:p(g,T,L,F);break;case ha:g==null&&b(T,L,F,te);break;case Jn:q(g,T,L,F,N,Z,te,E,v);break;default:k&1?I(g,T,L,F,N,Z,te,E,v):k&6?z(g,T,L,F,N,Z,te,E,v):(k&64||k&128)&&P.process(g,T,L,F,N,Z,te,E,v,le)}X!=null&&N&&il(X,g&&g.ref,Z,T||g,!T)},m=(g,T,L,F)=>{if(g==null)i(T.el=a(T.children),L,F);else{const N=T.el=g.el;T.children!==g.children&&c(N,T.children)}},p=(g,T,L,F)=>{g==null?i(T.el=l(T.children||""),L,F):T.el=g.el},b=(g,T,L,F)=>{[g.el,g.anchor]=_(g.children,T,L,F,g.el,g.anchor)},M=({el:g,anchor:T},L,F)=>{let N;for(;g&&g!==T;)N=f(g),i(g,L,F),g=N;i(T,L,F)},S=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=f(g),r(g),g=L;r(T)},I=(g,T,L,F,N,Z,te,E,v)=>{T.type==="svg"?te="svg":T.type==="math"&&(te="mathml"),g==null?C(T,L,F,N,Z,te,E,v):ie(g,T,N,Z,te,E,v)},C=(g,T,L,F,N,Z,te,E)=>{let v,P;const{props:X,shapeFlag:k,transition:V,dirs:ue}=g;if(v=g.el=o(g.type,Z,X&&X.is,X),k&8?u(v,g.children):k&16&&D(g.children,v,null,F,N,ca(g,Z),te,E),ue&&Ui(g,null,F,"created"),R(v,g,g.scopeId,te,F),X){for(const ve in X)ve!=="value"&&!as(ve)&&s(v,ve,null,X[ve],Z,F);"value"in X&&s(v,"value",null,X.value,Z),(P=X.onVnodeBeforeMount)&&Pn(P,F,g)}ue&&Ui(g,null,F,"beforeMount");const ce=Hm(N,V);ce&&V.beforeEnter(v),i(v,T,L),((P=X&&X.onVnodeMounted)||ce||ue)&&tn(()=>{P&&Pn(P,F,g),ce&&V.enter(v),ue&&Ui(g,null,F,"mounted")},N)},R=(g,T,L,F,N)=>{if(L&&d(g,L),F)for(let Z=0;Z<F.length;Z++)d(g,F[Z]);if(N){let Z=N.subTree;if(T===Z||$f(Z.type)&&(Z.ssContent===T||Z.ssFallback===T)){const te=N.vnode;R(g,te,te.scopeId,te.slotScopeIds,N.parent)}}},D=(g,T,L,F,N,Z,te,E,v=0)=>{for(let P=v;P<g.length;P++){const X=g[P]=E?vi(g[P]):Dn(g[P]);y(null,X,T,L,F,N,Z,te,E)}},ie=(g,T,L,F,N,Z,te)=>{const E=T.el=g.el;let{patchFlag:v,dynamicChildren:P,dirs:X}=T;v|=g.patchFlag&16;const k=g.props||at,V=T.props||at;let ue;if(L&&Ni(L,!1),(ue=V.onVnodeBeforeUpdate)&&Pn(ue,L,T,g),X&&Ui(T,g,L,"beforeUpdate"),L&&Ni(L,!0),(k.innerHTML&&V.innerHTML==null||k.textContent&&V.textContent==null)&&u(E,""),P?x(g.dynamicChildren,P,E,L,F,ca(T,N),Z):te||O(g,T,E,null,L,F,ca(T,N),Z,!1),v>0){if(v&16)w(E,k,V,L,N);else if(v&2&&k.class!==V.class&&s(E,"class",null,V.class,N),v&4&&s(E,"style",k.style,V.style,N),v&8){const ce=T.dynamicProps;for(let ve=0;ve<ce.length;ve++){const be=ce[ve],_e=k[be],Me=V[be];(Me!==_e||be==="value")&&s(E,be,_e,Me,N,L)}}v&1&&g.children!==T.children&&u(E,T.children)}else!te&&P==null&&w(E,k,V,L,N);((ue=V.onVnodeUpdated)||X)&&tn(()=>{ue&&Pn(ue,L,T,g),X&&Ui(T,g,L,"updated")},F)},x=(g,T,L,F,N,Z,te)=>{for(let E=0;E<T.length;E++){const v=g[E],P=T[E],X=v.el&&(v.type===Jn||!jr(v,P)||v.shapeFlag&70)?h(v.el):L;y(v,P,X,null,F,N,Z,te,!0)}},w=(g,T,L,F,N)=>{if(T!==L){if(T!==at)for(const Z in T)!as(Z)&&!(Z in L)&&s(g,Z,T[Z],null,N,F);for(const Z in L){if(as(Z))continue;const te=L[Z],E=T[Z];te!==E&&Z!=="value"&&s(g,Z,E,te,N,F)}"value"in L&&s(g,"value",T.value,L.value,N)}},q=(g,T,L,F,N,Z,te,E,v)=>{const P=T.el=g?g.el:a(""),X=T.anchor=g?g.anchor:a("");let{patchFlag:k,dynamicChildren:V,slotScopeIds:ue}=T;ue&&(E=E?E.concat(ue):ue),g==null?(i(P,L,F),i(X,L,F),D(T.children||[],L,X,N,Z,te,E,v)):k>0&&k&64&&V&&g.dynamicChildren?(x(g.dynamicChildren,V,L,N,Z,te,E),(T.key!=null||N&&T===N.subTree)&&Vf(g,T,!0)):O(g,T,L,X,N,Z,te,E,v)},z=(g,T,L,F,N,Z,te,E,v)=>{T.slotScopeIds=E,g==null?T.shapeFlag&512?N.ctx.activate(T,L,F,te,v):J(T,L,F,N,Z,te,v):se(g,T,v)},J=(g,T,L,F,N,Z,te)=>{const E=g.component=og(g,F,N);if(Cf(g)&&(E.ctx.renderer=le),ag(E,!1,te),E.asyncDep){if(N&&N.registerDep(E,G,te),!g.el){const v=E.subTree=rt(Zi);p(null,v,T,L)}}else G(E,g,T,L,N,Z,te)},se=(g,T,L)=>{const F=T.component=g.component;if(Km(g,T,L))if(F.asyncDep&&!F.asyncResolved){$(F,T,L);return}else F.next=T,F.update();else T.el=g.el,F.vnode=T},G=(g,T,L,F,N,Z,te)=>{const E=()=>{if(g.isMounted){let{next:k,bu:V,u:ue,parent:ce,vnode:ve}=g;{const Ue=Wf(g);if(Ue){k&&(k.el=ve.el,$(g,k,te)),Ue.asyncDep.then(()=>{g.isUnmounted||E()});return}}let be=k,_e;Ni(g,!1),k?(k.el=ve.el,$(g,k,te)):k=ve,V&&ra(V),(_e=k.props&&k.props.onVnodeBeforeUpdate)&&Pn(_e,ce,k,ve),Ni(g,!0);const Me=ua(g),Fe=g.subTree;g.subTree=Me,y(Fe,Me,h(Fe.el),U(Fe),g,N,Z),k.el=Me.el,be===null&&jm(g,Me.el),ue&&tn(ue,N),(_e=k.props&&k.props.onVnodeUpdated)&&tn(()=>Pn(_e,ce,k,ve),N)}else{let k;const{el:V,props:ue}=T,{bm:ce,m:ve,parent:be,root:_e,type:Me}=g,Fe=cs(T);if(Ni(g,!1),ce&&ra(ce),!Fe&&(k=ue&&ue.onVnodeBeforeMount)&&Pn(k,be,T),Ni(g,!0),V&&Q){const Ue=()=>{g.subTree=ua(g),Q(V,g.subTree,g,N,null)};Fe&&Me.__asyncHydrate?Me.__asyncHydrate(V,g,Ue):Ue()}else{_e.ce&&_e.ce._injectChildStyle(Me);const Ue=g.subTree=ua(g);y(null,Ue,L,F,g,N,Z),T.el=Ue.el}if(ve&&tn(ve,N),!Fe&&(k=ue&&ue.onVnodeMounted)){const Ue=T;tn(()=>Pn(k,be,Ue),N)}(T.shapeFlag&256||be&&cs(be.vnode)&&be.vnode.shapeFlag&256)&&g.a&&tn(g.a,N),g.isMounted=!0,T=L=F=null}};g.scope.on();const v=g.effect=new rf(E);g.scope.off();const P=g.update=v.run.bind(v),X=g.job=v.runIfDirty.bind(v);X.i=g,X.id=g.uid,v.scheduler=()=>xc(X),Ni(g,!0),P()},$=(g,T,L)=>{T.component=g;const F=g.vnode.props;g.vnode=T,g.next=null,Dm(g,T.props,F,L),Om(g,T.children,L),Ri(),su(g),Ci()},O=(g,T,L,F,N,Z,te,E,v=!1)=>{const P=g&&g.children,X=g?g.shapeFlag:0,k=T.children,{patchFlag:V,shapeFlag:ue}=T;if(V>0){if(V&128){pe(P,k,L,F,N,Z,te,E,v);return}else if(V&256){de(P,k,L,F,N,Z,te,E,v);return}}ue&8?(X&16&&he(P,N,Z),k!==P&&u(L,k)):X&16?ue&16?pe(P,k,L,F,N,Z,te,E,v):he(P,N,Z,!0):(X&8&&u(L,""),ue&16&&D(k,L,F,N,Z,te,E,v))},de=(g,T,L,F,N,Z,te,E,v)=>{g=g||Tr,T=T||Tr;const P=g.length,X=T.length,k=Math.min(P,X);let V;for(V=0;V<k;V++){const ue=T[V]=v?vi(T[V]):Dn(T[V]);y(g[V],ue,L,null,N,Z,te,E,v)}P>X?he(g,N,Z,!0,!1,k):D(T,L,F,N,Z,te,E,v,k)},pe=(g,T,L,F,N,Z,te,E,v)=>{let P=0;const X=T.length;let k=g.length-1,V=X-1;for(;P<=k&&P<=V;){const ue=g[P],ce=T[P]=v?vi(T[P]):Dn(T[P]);if(jr(ue,ce))y(ue,ce,L,null,N,Z,te,E,v);else break;P++}for(;P<=k&&P<=V;){const ue=g[k],ce=T[V]=v?vi(T[V]):Dn(T[V]);if(jr(ue,ce))y(ue,ce,L,null,N,Z,te,E,v);else break;k--,V--}if(P>k){if(P<=V){const ue=V+1,ce=ue<X?T[ue].el:F;for(;P<=V;)y(null,T[P]=v?vi(T[P]):Dn(T[P]),L,ce,N,Z,te,E,v),P++}}else if(P>V)for(;P<=k;)Se(g[P],N,Z,!0),P++;else{const ue=P,ce=P,ve=new Map;for(P=ce;P<=V;P++){const Oe=T[P]=v?vi(T[P]):Dn(T[P]);Oe.key!=null&&ve.set(Oe.key,P)}let be,_e=0;const Me=V-ce+1;let Fe=!1,Ue=0;const Te=new Array(Me);for(P=0;P<Me;P++)Te[P]=0;for(P=ue;P<=k;P++){const Oe=g[P];if(_e>=Me){Se(Oe,N,Z,!0);continue}let $e;if(Oe.key!=null)$e=ve.get(Oe.key);else for(be=ce;be<=V;be++)if(Te[be-ce]===0&&jr(Oe,T[be])){$e=be;break}$e===void 0?Se(Oe,N,Z,!0):(Te[$e-ce]=P+1,$e>=Ue?Ue=$e:Fe=!0,y(Oe,T[$e],L,null,N,Z,te,E,v),_e++)}const Ye=Fe?Gm(Te):Tr;for(be=Ye.length-1,P=Me-1;P>=0;P--){const Oe=ce+P,$e=T[Oe],B=Oe+1<X?T[Oe+1].el:F;Te[P]===0?y(null,$e,L,B,N,Z,te,E,v):Fe&&(be<0||P!==Ye[be]?ge($e,L,B,2):be--)}}},ge=(g,T,L,F,N=null)=>{const{el:Z,type:te,transition:E,children:v,shapeFlag:P}=g;if(P&6){ge(g.component.subTree,T,L,F);return}if(P&128){g.suspense.move(T,L,F);return}if(P&64){te.move(g,T,L,le);return}if(te===Jn){i(Z,T,L);for(let k=0;k<v.length;k++)ge(v[k],T,L,F);i(g.anchor,T,L);return}if(te===ha){M(g,T,L);return}if(F!==2&&P&1&&E)if(F===0)E.beforeEnter(Z),i(Z,T,L),tn(()=>E.enter(Z),N);else{const{leave:k,delayLeave:V,afterLeave:ue}=E,ce=()=>i(Z,T,L),ve=()=>{k(Z,()=>{ce(),ue&&ue()})};V?V(Z,ce,ve):ve()}else i(Z,T,L)},Se=(g,T,L,F=!1,N=!1)=>{const{type:Z,props:te,ref:E,children:v,dynamicChildren:P,shapeFlag:X,patchFlag:k,dirs:V,cacheIndex:ue}=g;if(k===-2&&(N=!1),E!=null&&il(E,null,L,g,!0),ue!=null&&(T.renderCache[ue]=void 0),X&256){T.ctx.deactivate(g);return}const ce=X&1&&V,ve=!cs(g);let be;if(ve&&(be=te&&te.onVnodeBeforeUnmount)&&Pn(be,T,g),X&6)fe(g.component,L,F);else{if(X&128){g.suspense.unmount(L,F);return}ce&&Ui(g,null,T,"beforeUnmount"),X&64?g.type.remove(g,T,L,le,F):P&&!P.hasOnce&&(Z!==Jn||k>0&&k&64)?he(P,T,L,!1,!0):(Z===Jn&&k&384||!N&&X&16)&&he(v,T,L),F&&Pe(g)}(ve&&(be=te&&te.onVnodeUnmounted)||ce)&&tn(()=>{be&&Pn(be,T,g),ce&&Ui(g,null,T,"unmounted")},L)},Pe=g=>{const{type:T,el:L,anchor:F,transition:N}=g;if(T===Jn){ee(L,F);return}if(T===ha){S(g);return}const Z=()=>{r(L),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:te,delayLeave:E}=N,v=()=>te(L,Z);E?E(g.el,Z,v):v()}else Z()},ee=(g,T)=>{let L;for(;g!==T;)L=f(g),r(g),g=L;r(T)},fe=(g,T,L)=>{const{bum:F,scope:N,job:Z,subTree:te,um:E,m:v,a:P}=g;du(v),du(P),F&&ra(F),N.stop(),Z&&(Z.flags|=8,Se(te,g,T,L)),E&&tn(E,T),tn(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},he=(g,T,L,F=!1,N=!1,Z=0)=>{for(let te=Z;te<g.length;te++)Se(g[te],T,L,F,N)},U=g=>{if(g.shapeFlag&6)return U(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=f(g.anchor||g.el),L=T&&T[cm];return L?f(L):T};let oe=!1;const j=(g,T,L)=>{g==null?T._vnode&&Se(T._vnode,null,null,!0):y(T._vnode||null,g,T,null,null,null,L),T._vnode=g,oe||(oe=!0,su(),bf(),oe=!1)},le={p:y,um:Se,m:ge,r:Pe,mt:J,mc:D,pc:O,pbc:x,n:U,o:n};let xe,Q;return{render:j,hydrate:xe,createApp:Lm(j,xe)}}function ca({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ni({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Hm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Vf(n,e,t=!1){const i=n.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=vi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Vf(o,a)),a.type===Xo&&(a.el=o.el)}}function Gm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Wf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wf(e)}function du(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const km=Symbol.for("v-scx"),Vm=()=>ii(km);function qt(n,e,t){return Xf(n,e,t)}function Xf(n,e,t=at){const{immediate:i,deep:r,flush:s,once:o}=t,a=Lt({},t);let l;if(qo)if(s==="sync"){const f=Vm();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const f=()=>{};return f.stop=Nn,f.resume=Nn,f.pause=Nn,f}const c=Ut;a.call=(f,d,_)=>On(f,c,d,_);let u=!1;s==="post"?a.scheduler=f=>{tn(f,c&&c.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(f,d)=>{d?f():xc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),u&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const h=sm(n,e,a);return l&&l.push(h),h}function Wm(n,e,t){const i=this.proxy,r=At(n)?n.includes(".")?qf(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=Is(this),a=Xf(r,s.bind(i),t);return o(),a}function qf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Xm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${hn(e)}Modifiers`]||n[`${tr(e)}Modifiers`];function qm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&Xm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>At(u)?u.trim():u)),o.number&&(r=t.map(Sp)));let a,l=i[a=ia(e)]||i[a=ia(hn(e))];!l&&s&&(l=i[a=ia(tr(e))]),l&&On(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,r)}}function Yf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=Yf(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(gt(n)&&i.set(n,null),null):(We(s)?s.forEach(l=>o[l]=null):Lt(o,s),gt(n)&&i.set(n,o),o)}function Wo(n,e){return!n||!Fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,tr(e))||Qe(n,e))}function ua(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:y}=n,m=Ao(n);let p,b;try{if(t.shapeFlag&4){const S=r||i,I=S;p=Dn(c.call(I,S,u,h,d,f,_)),b=a}else{const S=e;p=Dn(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),b=e.props?a:Ym(a)}}catch(S){hs.length=0,ko(S,n,1),p=rt(Zi)}let M=p;if(b&&y!==!1){const S=Object.keys(b),{shapeFlag:I}=M;S.length&&I&7&&(s&&S.some(rc)&&(b=$m(b,s)),M=Ur(M,b,!1,!0))}return t.dirs&&(M=Ur(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&yc(M,t.transition),p=M,Ao(m),p}const Ym=n=>{let e;for(const t in n)(t==="class"||t==="style"||Fo(t))&&((e||(e={}))[t]=n[t]);return e},$m=(n,e)=>{const t={};for(const i in n)(!rc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Km(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?pu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Wo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?pu(i,o,c):!0:!!o;return!1}function pu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Wo(t,s))return!0}return!1}function jm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const $f=n=>n.__isSuspense;function Zm(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):lm(n)}const Jn=Symbol.for("v-fgt"),Xo=Symbol.for("v-txt"),Zi=Symbol.for("v-cmt"),ha=Symbol.for("v-stc"),hs=[];let rn=null;function on(n=!1){hs.push(rn=n?null:[])}function Jm(){hs.pop(),rn=hs[hs.length-1]||null}let Ss=1;function mu(n){Ss+=n,n<0&&rn&&(rn.hasOnce=!0)}function Kf(n){return n.dynamicChildren=Ss>0?rn||Tr:null,Jm(),Ss>0&&rn&&rn.push(n),n}function dn(n,e,t,i,r,s){return Kf(Dr(n,e,t,i,r,s,!0))}function Qm(n,e,t,i,r){return Kf(rt(n,e,t,i,r,!0))}function Co(n){return n?n.__v_isVNode===!0:!1}function jr(n,e){return n.type===e.type&&n.key===e.key}const jf=({key:n})=>n??null,_o=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||Nt(n)||Ve(n)?{i:En,r:n,k:e,f:!!t}:n:null);function Dr(n,e=null,t=null,i=0,r=null,s=n===Jn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&jf(e),ref:e&&_o(e),scopeId:Af,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:En};return a?(wc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),Ss>0&&!o&&rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rn.push(l),l}const rt=eg;function eg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Sm)&&(n=Zi),Co(n)){const a=Ur(n,e,!0);return t&&wc(a,t),Ss>0&&!s&&rn&&(a.shapeFlag&6?rn[rn.indexOf(n)]=a:rn.push(a)),a.patchFlag=-2,a}if(fg(n)&&(n=n.__vccOpts),e){e=tg(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=Ai(a)),gt(l)&&(gc(l)&&!We(l)&&(l=Lt({},l)),e.style=ac(l))}const o=At(n)?1:$f(n)?128:um(n)?64:gt(n)?4:Ve(n)?2:0;return Dr(n,e,t,i,r,o,s,!0)}function tg(n){return n?gc(n)||Ff(n)?Lt({},n):n:null}function Ur(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?ig(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&jf(c),ref:e&&e.ref?t&&s?We(s)?s.concat(_o(e)):[s,_o(e)]:_o(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Jn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ur(n.ssContent),ssFallback:n.ssFallback&&Ur(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&yc(u,l.clone(u)),u}function yn(n=" ",e=0){return rt(Xo,null,n,e)}function ng(n="",e=!1){return e?(on(),Qm(Zi,null,n)):rt(Zi,null,n)}function Dn(n){return n==null||typeof n=="boolean"?rt(Zi):We(n)?rt(Jn,null,n.slice()):Co(n)?vi(n):rt(Xo,null,String(n))}function vi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ur(n)}function wc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),wc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ff(e)?e._ctx=En:r===3&&En&&(En.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:En},t=32):(e=String(e),i&64?(t=16,e=[yn(e)]):t=8);n.children=e,n.shapeFlag|=t}function ig(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ai([e.class,i.class]));else if(r==="style")e.style=ac([e.style,i.style]);else if(Fo(r)){const s=e[r],o=i[r];o&&s!==o&&!(We(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Pn(n,e,t,i=null){On(n,e,7,[t,i])}const rg=Df();let sg=0;function og(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||rg,s={uid:sg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bf(i,r),emitsOptions:Yf(i,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=qm.bind(null,s),n.ce&&n.ce(s),s}let Ut=null,Po,ll;{const n=tf(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Po=e("__VUE_INSTANCE_SETTERS__",t=>Ut=t),ll=e("__VUE_SSR_SETTERS__",t=>qo=t)}const Is=n=>{const e=Ut;return Po(n),n.scope.on(),()=>{n.scope.off(),Po(e)}},gu=()=>{Ut&&Ut.scope.off(),Po(null)};function Zf(n){return n.vnode.shapeFlag&4}let qo=!1;function ag(n,e=!1,t=!1){e&&ll(e);const{props:i,children:r}=n.vnode,s=Zf(n);Im(n,i,s,e),Fm(n,r,t);const o=s?lg(n,e):void 0;return e&&ll(!1),o}function lg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,wm);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?ug(n):null,s=Is(n);Ri();const o=Ls(i,n,0,[n.props,r]);if(Ci(),s(),Qh(o)){if(cs(n)||Rf(n),o.then(gu,gu),e)return o.then(a=>{_u(n,a,e)}).catch(a=>{ko(a,n,0)});n.asyncDep=o}else _u(n,o,e)}else Jf(n,e)}function _u(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=Mf(e)),Jf(n,t)}let vu;function Jf(n,e,t){const i=n.type;if(!n.render){if(!e&&vu&&!i.render){const r=i.template||Sc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Lt(Lt({isCustomElement:s,delimiters:a},o),l);i.render=vu(r,c)}}n.render=i.render||Nn}{const r=Is(n);Ri();try{bm(n)}finally{Ci(),r()}}}const cg={get(n,e){return Bt(n,"get",""),n[e]}};function ug(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,cg),slots:n.slots,emit:n.emit,expose:e}}function bc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Mf(Jp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in us)return us[t](n)},has(e,t){return t in e||t in us}})):n.proxy}function hg(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function fg(n){return Ve(n)&&"__vccOpts"in n}const Pt=(n,e)=>im(n,e,qo);function Qf(n,e,t){const i=arguments.length;return i===2?gt(e)&&!We(e)?Co(e)?rt(n,null,[e]):rt(n,e):rt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Co(t)&&(t=[t]),rt(n,e,t))}const dg="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cl;const xu=typeof window<"u"&&window.trustedTypes;if(xu)try{cl=xu.createPolicy("vue",{createHTML:n=>n})}catch{}const ed=cl?n=>cl.createHTML(n):n=>n,pg="http://www.w3.org/2000/svg",mg="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,yu=Zn&&Zn.createElement("template"),gg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Zn.createElementNS(pg,n):e==="mathml"?Zn.createElementNS(mg,n):t?Zn.createElement(n,{is:t}):Zn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Zn.createTextNode(n),createComment:n=>Zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{yu.innerHTML=ed(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=yu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_g=Symbol("_vtc");function vg(n,e,t){const i=n[_g];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Mu=Symbol("_vod"),xg=Symbol("_vsh"),yg=Symbol(""),Mg=/(^|;)\s*display\s*:/;function Sg(n,e,t){const i=n.style,r=At(t);let s=!1;if(t&&!r){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&vo(i,a,"")}else for(const o in e)t[o]==null&&vo(i,o,"");for(const o in t)o==="display"&&(s=!0),vo(i,o,t[o])}else if(r){if(e!==t){const o=i[yg];o&&(t+=";"+o),i.cssText=t,s=Mg.test(t)}}else e&&n.removeAttribute("style");Mu in n&&(n[Mu]=s?i.display:"",n[xg]&&(i.display="none"))}const Su=/\s*!important$/;function vo(n,e,t){if(We(t))t.forEach(i=>vo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Eg(n,e);Su.test(t)?n.setProperty(tr(i),t.replace(Su,""),"important"):n[i]=t}}const Eu=["Webkit","Moz","ms"],fa={};function Eg(n,e){const t=fa[e];if(t)return t;let i=hn(e);if(i!=="filter"&&i in n)return fa[e]=i;i=zo(i);for(let r=0;r<Eu.length;r++){const s=Eu[r]+i;if(s in n)return fa[e]=s}return e}const wu="http://www.w3.org/1999/xlink";function bu(n,e,t,i,r,s=Rp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(wu,e.slice(6,e.length)):n.setAttributeNS(wu,e,t):t==null||s&&!nf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Vr(t)?String(t):t)}function Tu(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ed(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=nf(t):t==null&&o==="string"?(t="",s=!0):o==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(e)}function wg(n,e,t,i){n.addEventListener(e,t,i)}function bg(n,e,t,i){n.removeEventListener(e,t,i)}const Au=Symbol("_vei");function Tg(n,e,t,i,r=null){const s=n[Au]||(n[Au]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Ag(e);if(i){const c=s[e]=Pg(i,r);wg(n,a,c,l)}else o&&(bg(n,a,o,l),s[e]=void 0)}}const Ru=/(?:Once|Passive|Capture)$/;function Ag(n){let e;if(Ru.test(n)){e={};let i;for(;i=n.match(Ru);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):tr(n.slice(2)),e]}let da=0;const Rg=Promise.resolve(),Cg=()=>da||(Rg.then(()=>da=0),da=Date.now());function Pg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;On(Lg(i,t.value),e,5,[i])};return t.value=n,t.attached=Cg(),t}function Lg(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Cu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ig=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?vg(n,i,o):e==="style"?Sg(n,t,i):Fo(e)?rc(e)||Tg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dg(n,e,i,o))?(Tu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bu(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!At(i))?Tu(n,hn(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),bu(n,e,i,o))};function Dg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Cu(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Cu(e)&&At(t)?!1:e in n}const Ug=Lt({patchProp:Ig},gg);let Pu;function Ng(){return Pu||(Pu=Bm(Ug))}const Fg=(...n)=>{const e=Ng().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Bg(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Og(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Og(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Bg(n){return At(n)?document.querySelector(n):n}const zg={id:"app"},Hg=jt({__name:"App",setup(n){return(e,t)=>{const i=ou("router-link"),r=ou("router-view");return on(),dn("div",zg,[Dr("nav",null,[rt(i,{to:"/3d-bear-arts"},{default:xn(()=>t[0]||(t[0]=[yn("Home")])),_:1}),rt(i,{to:"/3d-bear-arts/half"},{default:xn(()=>t[1]||(t[1]=[yn("New")])),_:1}),rt(i,{to:"/3d-bear-arts/halfTransparent"},{default:xn(()=>t[2]||(t[2]=[yn("HalfTranparent")])),_:1}),rt(i,{to:"/3d-bear-arts/bluePink"},{default:xn(()=>t[3]||(t[3]=[yn("BluePink")])),_:1}),rt(i,{to:"/3d-bear-arts/diamond"},{default:xn(()=>t[4]||(t[4]=[yn("Diamond")])),_:1}),rt(i,{to:"/3d-bear-arts/pink"},{default:xn(()=>t[5]||(t[5]=[yn("Pink")])),_:1}),rt(i,{to:"/3d-bear-arts/purple"},{default:xn(()=>t[6]||(t[6]=[yn("Purple")])),_:1}),rt(i,{to:"/3d-bear-arts/blue"},{default:xn(()=>t[7]||(t[7]=[yn("Blue")])),_:1}),rt(i,{to:"/3d-bear-arts/glass"},{default:xn(()=>t[8]||(t[8]=[yn("Glass")])),_:1}),rt(i,{to:"/3d-bear-arts/cube"},{default:xn(()=>t[9]||(t[9]=[yn("Cube")])),_:1})]),rt(r)])}}}),pn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Gg=pn(Hg,[["__scopeId","data-v-e70bfbc0"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Mr=typeof document<"u";function td(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function kg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&td(n.default)}const it=Object.assign;function pa(n,e){const t={};for(const i in e){const r=e[i];t[i]=An(r)?r.map(n):n(r)}return t}const fs=()=>{},An=Array.isArray,nd=/#/g,Vg=/&/g,Wg=/\//g,Xg=/=/g,qg=/\?/g,id=/\+/g,Yg=/%5B/g,$g=/%5D/g,rd=/%5E/g,Kg=/%60/g,sd=/%7B/g,jg=/%7C/g,od=/%7D/g,Zg=/%20/g;function Tc(n){return encodeURI(""+n).replace(jg,"|").replace(Yg,"[").replace($g,"]")}function Jg(n){return Tc(n).replace(sd,"{").replace(od,"}").replace(rd,"^")}function ul(n){return Tc(n).replace(id,"%2B").replace(Zg,"+").replace(nd,"%23").replace(Vg,"%26").replace(Kg,"`").replace(sd,"{").replace(od,"}").replace(rd,"^")}function Qg(n){return ul(n).replace(Xg,"%3D")}function e0(n){return Tc(n).replace(nd,"%23").replace(qg,"%3F")}function t0(n){return n==null?"":e0(n).replace(Wg,"%2F")}function Es(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const n0=/\/$/,i0=n=>n.replace(n0,"");function ma(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=a0(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Es(o)}}function r0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Lu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function s0(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Nr(e.matched[i],t.matched[r])&&ad(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Nr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ad(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!o0(n[t],e[t]))return!1;return!0}function o0(n,e){return An(n)?Iu(n,e):An(e)?Iu(e,n):n===e}function Iu(n,e){return An(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function a0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const ui={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ws;(function(n){n.pop="pop",n.push="push"})(ws||(ws={}));var ds;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ds||(ds={}));function l0(n){if(!n)if(Mr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),i0(n)}const c0=/^[^#]+#/;function u0(n,e){return n.replace(c0,"#")+e}function h0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Yo=()=>({left:window.scrollX,top:window.scrollY});function f0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=h0(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Du(n,e){return(history.state?history.state.position-e:-1)+n}const hl=new Map;function d0(n,e){hl.set(n,e)}function p0(n){const e=hl.get(n);return hl.delete(n),e}let m0=()=>location.protocol+"//"+location.host;function ld(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Lu(l,"")}return Lu(t,n)+i+r}function g0(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=ld(n,location),_=t.value,y=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===_){o=null;return}m=y?f.position-y.position:0}else i(d);r.forEach(p=>{p(t.value,_,{delta:m,type:ws.pop,direction:m?m>0?ds.forward:ds.back:ds.unknown})})};function l(){o=t.value}function c(f){r.push(f);const d=()=>{const _=r.indexOf(f);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(it({},f.state,{scroll:Yo()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Uu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Yo():null}}function _0(n){const{history:e,location:t}=window,i={value:ld(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:m0()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=it({},e.state,Uu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=it({},r.value,e.state,{forward:l,scroll:Yo()});s(u.current,u,!0);const h=it({},Uu(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function v0(n){n=l0(n);const e=_0(n),t=g0(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=it({location:"",base:n,go:i,createHref:u0.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function x0(n){return typeof n=="string"||n&&typeof n=="object"}function cd(n){return typeof n=="string"||typeof n=="symbol"}const ud=Symbol("");var Nu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Nu||(Nu={}));function Fr(n,e){return it(new Error,{type:n,[ud]:!0},e)}function Vn(n,e){return n instanceof Error&&ud in n&&(e==null||!!(n.type&e))}const Fu="[^/]+?",y0={sensitive:!1,strict:!1,start:!0,end:!0},M0=/[.+*?^${}()[\]/\\]/g;function S0(n,e){const t=it({},y0,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(M0,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:y,optional:m,regexp:p}=f;s.push({name:_,repeatable:y,optional:m});const b=p||Fu;if(b!==Fu){d+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+S.message)}}let M=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),r+=M,d+=20,m&&(d+=-8),y&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",_=s[f-1];h[_.name]=d&&_.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:y,optional:m}=d,p=_ in c?c[_]:"";if(An(p)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=An(p)?p.join("/"):p;if(!b)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function E0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function hd(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=E0(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Ou(i))return 1;if(Ou(r))return-1}return r.length-i.length}function Ou(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const w0={type:0,value:""},b0=/[a-zA-Z0-9_]/;function T0(n){if(!n)return[[]];if(n==="/")return[[w0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:b0.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function A0(n,e,t){const i=S0(T0(n.path),t),r=it(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function R0(n,e){const t=[],i=new Map;e=Gu({strict:!1,end:!0,sensitive:!1},e);function r(h){return i.get(h)}function s(h,f,d){const _=!d,y=zu(h);y.aliasOf=d&&d.record;const m=Gu(e,h),p=[y];if("alias"in h){const S=typeof h.alias=="string"?[h.alias]:h.alias;for(const I of S)p.push(zu(it({},y,{components:d?d.record.components:y.components,path:I,aliasOf:d?d.record:y})))}let b,M;for(const S of p){const{path:I}=S;if(f&&I[0]!=="/"){const C=f.record.path,R=C[C.length-1]==="/"?"":"/";S.path=f.record.path+(I&&R+I)}if(b=A0(S,f,m),d?d.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),_&&h.name&&!Hu(b)&&o(h.name)),fd(b)&&l(b),y.children){const C=y.children;for(let R=0;R<C.length;R++)s(C[R],b,d&&d.children[R])}d=d||b}return M?()=>{o(M)}:fs}function o(h){if(cd(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=L0(h,t);t.splice(f,0,h),h.record.name&&!Hu(h)&&i.set(h.record.name,h)}function c(h,f){let d,_={},y,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw Fr(1,{location:h});m=d.record.name,_=it(Bu(f.params,d.keys.filter(M=>!M.optional).concat(d.parent?d.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&Bu(h.params,d.keys.map(M=>M.name))),y=d.stringify(_)}else if(h.path!=null)y=h.path,d=t.find(M=>M.re.test(y)),d&&(_=d.parse(y),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(M=>M.re.test(f.path)),!d)throw Fr(1,{location:h,currentLocation:f});m=d.record.name,_=it({},f.params,h.params),y=d.stringify(_)}const p=[];let b=d;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:y,params:_,matched:p,meta:P0(p)}}n.forEach(h=>s(h));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Bu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function zu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:C0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function C0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Hu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function P0(n){return n.reduce((e,t)=>it(e,t.meta),{})}function Gu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function L0(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;hd(n,e[s])<0?i=s:t=s+1}const r=I0(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function I0(n){let e=n;for(;e=e.parent;)if(fd(e)&&hd(n,e)===0)return e}function fd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function D0(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(id," "),o=s.indexOf("="),a=Es(o<0?s:s.slice(0,o)),l=o<0?null:Es(s.slice(o+1));if(a in e){let c=e[a];An(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ku(n){let e="";for(let t in n){const i=n[t];if(t=Qg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(An(i)?i.map(s=>s&&ul(s)):[i&&ul(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function U0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=An(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const N0=Symbol(""),Vu=Symbol(""),Ac=Symbol(""),dd=Symbol(""),fl=Symbol("");function Zr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function xi(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Fr(4,{from:t,to:e})):f instanceof Error?l(f):x0(f)?l(Fr(2,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function ga(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(td(l)){const u=(l.__vccOpts||l)[e];u&&s.push(xi(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=kg(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&xi(d,t,i,o,a,r)()}))}}return s}function Wu(n){const e=ii(Ac),t=ii(dd),i=Pt(()=>{const l=cn(n.to);return e.resolve(l)}),r=Pt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Nr.bind(null,u));if(f>-1)return f;const d=Xu(l[c-2]);return c>1&&Xu(u)===d&&h[h.length-1].path!==d?h.findIndex(Nr.bind(null,l[c-2])):f}),s=Pt(()=>r.value>-1&&z0(t.params,i.value.params)),o=Pt(()=>r.value>-1&&r.value===t.matched.length-1&&ad(t.params,i.value.params));function a(l={}){return B0(l)?e[cn(n.replace)?"replace":"push"](cn(n.to)).catch(fs):Promise.resolve()}return{route:i,href:Pt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const F0=jt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wu,setup(n,{slots:e}){const t=Go(Wu(n)),{options:i}=ii(Ac),r=Pt(()=>({[qu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[qu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Qf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),O0=F0;function B0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function z0(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!An(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Xu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const qu=(n,e,t)=>n??e??t,H0=jt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ii(fl),r=Pt(()=>n.route||i.value),s=ii(Vu,0),o=Pt(()=>{let c=cn(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Pt(()=>r.value.matched[o.value]);go(Vu,Pt(()=>o.value+1)),go(N0,a),go(fl,r);const l=Mt();return qt(()=>[l.value,a.value,n.name],([c,u,h],[f,d,_])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Nr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Yu(t.default,{Component:f,route:c});const d=h.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Qf(f,it({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Yu(t.default,{Component:m,route:c})||m}}});function Yu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const G0=H0;function k0(n){const e=R0(n.routes,n),t=n.parseQuery||D0,i=n.stringifyQuery||ku,r=n.history,s=Zr(),o=Zr(),a=Zr(),l=Qp(ui);let c=ui;Mr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pa.bind(null,U=>""+U),h=pa.bind(null,t0),f=pa.bind(null,Es);function d(U,oe){let j,le;return cd(U)?(j=e.getRecordMatcher(U),le=oe):le=U,e.addRoute(le,j)}function _(U){const oe=e.getRecordMatcher(U);oe&&e.removeRoute(oe)}function y(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function p(U,oe){if(oe=it({},oe||l.value),typeof U=="string"){const T=ma(t,U,oe.path),L=e.resolve({path:T.path},oe),F=r.createHref(T.fullPath);return it(T,L,{params:f(L.params),hash:Es(T.hash),redirectedFrom:void 0,href:F})}let j;if(U.path!=null)j=it({},U,{path:ma(t,U.path,oe.path).path});else{const T=it({},U.params);for(const L in T)T[L]==null&&delete T[L];j=it({},U,{params:h(T)}),oe.params=h(oe.params)}const le=e.resolve(j,oe),xe=U.hash||"";le.params=u(f(le.params));const Q=r0(i,it({},U,{hash:Jg(xe),path:le.path})),g=r.createHref(Q);return it({fullPath:Q,hash:xe,query:i===ku?U0(U.query):U.query||{}},le,{redirectedFrom:void 0,href:g})}function b(U){return typeof U=="string"?ma(t,U,l.value.path):it({},U)}function M(U,oe){if(c!==U)return Fr(8,{from:oe,to:U})}function S(U){return R(U)}function I(U){return S(it(b(U),{replace:!0}))}function C(U){const oe=U.matched[U.matched.length-1];if(oe&&oe.redirect){const{redirect:j}=oe;let le=typeof j=="function"?j(U):j;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=b(le):{path:le},le.params={}),it({query:U.query,hash:U.hash,params:le.path!=null?{}:U.params},le)}}function R(U,oe){const j=c=p(U),le=l.value,xe=U.state,Q=U.force,g=U.replace===!0,T=C(j);if(T)return R(it(b(T),{state:typeof T=="object"?it({},xe,T.state):xe,force:Q,replace:g}),oe||j);const L=j;L.redirectedFrom=oe;let F;return!Q&&s0(i,le,j)&&(F=Fr(16,{to:L,from:le}),ge(le,le,!0,!1)),(F?Promise.resolve(F):x(L,le)).catch(N=>Vn(N)?Vn(N,2)?N:pe(N):O(N,L,le)).then(N=>{if(N){if(Vn(N,2))return R(it({replace:g},b(N.to),{state:typeof N.to=="object"?it({},xe,N.to.state):xe,force:Q}),oe||L)}else N=q(L,le,!0,g,xe);return w(L,le,N),N})}function D(U,oe){const j=M(U,oe);return j?Promise.reject(j):Promise.resolve()}function ie(U){const oe=ee.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(U):U()}function x(U,oe){let j;const[le,xe,Q]=V0(U,oe);j=ga(le.reverse(),"beforeRouteLeave",U,oe);for(const T of le)T.leaveGuards.forEach(L=>{j.push(xi(L,U,oe))});const g=D.bind(null,U,oe);return j.push(g),he(j).then(()=>{j=[];for(const T of s.list())j.push(xi(T,U,oe));return j.push(g),he(j)}).then(()=>{j=ga(xe,"beforeRouteUpdate",U,oe);for(const T of xe)T.updateGuards.forEach(L=>{j.push(xi(L,U,oe))});return j.push(g),he(j)}).then(()=>{j=[];for(const T of Q)if(T.beforeEnter)if(An(T.beforeEnter))for(const L of T.beforeEnter)j.push(xi(L,U,oe));else j.push(xi(T.beforeEnter,U,oe));return j.push(g),he(j)}).then(()=>(U.matched.forEach(T=>T.enterCallbacks={}),j=ga(Q,"beforeRouteEnter",U,oe,ie),j.push(g),he(j))).then(()=>{j=[];for(const T of o.list())j.push(xi(T,U,oe));return j.push(g),he(j)}).catch(T=>Vn(T,8)?T:Promise.reject(T))}function w(U,oe,j){a.list().forEach(le=>ie(()=>le(U,oe,j)))}function q(U,oe,j,le,xe){const Q=M(U,oe);if(Q)return Q;const g=oe===ui,T=Mr?history.state:{};j&&(le||g?r.replace(U.fullPath,it({scroll:g&&T&&T.scroll},xe)):r.push(U.fullPath,xe)),l.value=U,ge(U,oe,j,g),pe()}let z;function J(){z||(z=r.listen((U,oe,j)=>{if(!fe.listening)return;const le=p(U),xe=C(le);if(xe){R(it(xe,{replace:!0}),le).catch(fs);return}c=le;const Q=l.value;Mr&&d0(Du(Q.fullPath,j.delta),Yo()),x(le,Q).catch(g=>Vn(g,12)?g:Vn(g,2)?(R(g.to,le).then(T=>{Vn(T,20)&&!j.delta&&j.type===ws.pop&&r.go(-1,!1)}).catch(fs),Promise.reject()):(j.delta&&r.go(-j.delta,!1),O(g,le,Q))).then(g=>{g=g||q(le,Q,!1),g&&(j.delta&&!Vn(g,8)?r.go(-j.delta,!1):j.type===ws.pop&&Vn(g,20)&&r.go(-1,!1)),w(le,Q,g)}).catch(fs)}))}let se=Zr(),G=Zr(),$;function O(U,oe,j){pe(U);const le=G.list();return le.length?le.forEach(xe=>xe(U,oe,j)):console.error(U),Promise.reject(U)}function de(){return $&&l.value!==ui?Promise.resolve():new Promise((U,oe)=>{se.add([U,oe])})}function pe(U){return $||($=!U,J(),se.list().forEach(([oe,j])=>U?j(U):oe()),se.reset()),U}function ge(U,oe,j,le){const{scrollBehavior:xe}=n;if(!Mr||!xe)return Promise.resolve();const Q=!j&&p0(Du(U.fullPath,0))||(le||!j)&&history.state&&history.state.scroll||null;return Ef().then(()=>xe(U,oe,Q)).then(g=>g&&f0(g)).catch(g=>O(g,U,oe))}const Se=U=>r.go(U);let Pe;const ee=new Set,fe={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:y,resolve:p,options:n,push:S,replace:I,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:de,install(U){const oe=this;U.component("RouterLink",O0),U.component("RouterView",G0),U.config.globalProperties.$router=oe,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>cn(l)}),Mr&&!Pe&&l.value===ui&&(Pe=!0,S(r.location).catch(xe=>{}));const j={};for(const xe in ui)Object.defineProperty(j,xe,{get:()=>l.value[xe],enumerable:!0});U.provide(Ac,oe),U.provide(dd,vf(j)),U.provide(fl,l);const le=U.unmount;ee.add(U),U.unmount=function(){ee.delete(U),ee.size<1&&(c=ui,z&&z(),z=null,l.value=ui,Pe=!1,$=!1),le()}}};function he(U){return U.reduce((oe,j)=>oe.then(()=>ie(j)),Promise.resolve())}return fe}function V0(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Nr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Nr(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rc="169",W0=0,$u=1,X0=2,pd=1,q0=2,jn=3,Ti=0,Yt=1,Qn=2,Si=0,Cr=1,Ku=2,ju=3,Zu=4,Y0=5,Xi=100,$0=101,K0=102,j0=103,Z0=104,J0=200,Q0=201,e_=202,t_=203,dl=204,pl=205,n_=206,i_=207,r_=208,s_=209,o_=210,a_=211,l_=212,c_=213,u_=214,ml=0,gl=1,_l=2,Or=3,vl=4,xl=5,yl=6,Ml=7,md=0,h_=1,f_=2,Ei=0,d_=1,p_=2,m_=3,nr=4,g_=5,__=6,v_=7,gd=300,Br=301,zr=302,Sl=303,El=304,$o=306,wl=1e3,Yi=1001,bl=1002,un=1003,x_=1004,Xs=1005,Mn=1006,_a=1007,$i=1008,ri=1009,_d=1010,vd=1011,bs=1012,Cc=1013,Ji=1014,ei=1015,Ds=1016,Pc=1017,Lc=1018,Hr=1020,xd=35902,yd=1021,Md=1022,wn=1023,Sd=1024,Ed=1025,Pr=1026,Gr=1027,wd=1028,Ic=1029,bd=1030,Dc=1031,Uc=1033,xo=33776,yo=33777,Mo=33778,So=33779,Tl=35840,Al=35841,Rl=35842,Cl=35843,Pl=36196,Ll=37492,Il=37496,Dl=37808,Ul=37809,Nl=37810,Fl=37811,Ol=37812,Bl=37813,zl=37814,Hl=37815,Gl=37816,kl=37817,Vl=37818,Wl=37819,Xl=37820,ql=37821,Eo=36492,Yl=36494,$l=36495,Td=36283,Kl=36284,jl=36285,Zl=36286,y_=3200,M_=3201,Ad=0,S_=1,Mi="",In="srgb",Pi="srgb-linear",Nc="display-p3",Ko="display-p3-linear",Lo="linear",ct="srgb",Io="rec709",Do="p3",or=7680,Ju=519,E_=512,w_=513,b_=514,Rd=515,T_=516,A_=517,R_=518,C_=519,Qu=35044,eh="300 es",ti=2e3,Uo=2001;class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let th=1234567;const ps=Math.PI/180,Ts=180/Math.PI;function ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Fc(n,e){return(n%e+e)%e}function P_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function L_(n,e,t){return n!==e?(t-n)/(e-n):0}function ms(n,e,t){return(1-t)*n+t*e}function I_(n,e,t,i){return ms(n,e,1-Math.exp(-t*i))}function D_(n,e=1){return e-Math.abs(Fc(n,e*2)-e)}function U_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function N_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function F_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function O_(n,e){return n+Math.random()*(e-n)}function B_(n){return n*(.5-Math.random())}function z_(n){n!==void 0&&(th=n);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function H_(n){return n*ps}function G_(n){return n*Ts}function k_(n){return(n&n-1)===0&&n!==0}function V_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function W_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function X_(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ct={DEG2RAD:ps,RAD2DEG:Ts,generateUUID:ir,clamp:bt,euclideanModulo:Fc,mapLinear:P_,inverseLerp:L_,lerp:ms,damp:I_,pingpong:D_,smoothstep:U_,smootherstep:N_,randInt:F_,randFloat:O_,randFloatSpread:B_,seededRandom:z_,degToRad:H_,radToDeg:G_,isPowerOfTwo:k_,ceilPowerOfTwo:V_,floorPowerOfTwo:W_,setQuaternionFromProperEuler:X_,normalize:Ht,denormalize:Sr};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],y=r[0],m=r[3],p=r[6],b=r[1],M=r[4],S=r[7],I=r[2],C=r[5],R=r[8];return s[0]=o*y+a*b+l*I,s[3]=o*m+a*M+l*C,s[6]=o*p+a*S+l*R,s[1]=c*y+u*b+h*I,s[4]=c*m+u*M+h*C,s[7]=c*p+u*S+h*R,s[2]=f*y+d*b+_*I,s[5]=f*m+d*M+_*C,s[8]=f*p+d*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+i*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=d*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(va.makeScale(e,t)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,t){return this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new qe;function Cd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function No(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function q_(){const n=No("canvas");return n.style.display="block",n}const nh={};function wo(n){n in nh||(nh[n]=!0,console.warn(n))}function Y_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function $_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function K_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ih=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rh=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jr={[Pi]:{transfer:Lo,primaries:Io,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[In]:{transfer:ct,primaries:Io,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ko]:{transfer:Lo,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(rh),fromReference:n=>n.applyMatrix3(ih)},[Nc]:{transfer:ct,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(rh),fromReference:n=>n.applyMatrix3(ih).convertLinearToSRGB()}},j_=new Set([Pi,Ko]),et={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!j_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Jr[e].toReference,r=Jr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Jr[n].primaries},getTransfer:function(n){return n===Mi?Lo:Jr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Jr[e].luminanceCoefficients)}};function Lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ar;class Z_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=No("canvas")),ar.width=e.width,ar.height=e.height;const i=ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=No("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Lr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Lr(t[i]/255)*255):t[i]=Lr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J_=0;class Pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ya(r[o].image)):s.push(ya(r[o]))}else s=ya(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Z_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q_=0;class $t extends Wr{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Yi,r=Yi,s=Mn,o=$i,a=wn,l=ri,c=$t.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=ir(),this.name="",this.source=new Pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wl:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wl:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=gd;$t.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(d+1)/2,I=(p+1)/2,C=(u+f)/4,R=(h+y)/4,D=(_+m)/4;return M>S&&M>I?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=R/i):S>I?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=D/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=R/s,r=D/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-y)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ev extends Wr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends ev{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ld extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tv extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=y;return}if(h!==y||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*y,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const I=Math.sqrt(M),C=Math.atan2(I,p*b);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const S=a*b;if(l=l*m+f*S,c=c*m+d*S,u=u*m+_*S,h=h*m+y*S,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new H,sh=new Us;class Ns{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qs.copy(i.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Ys.subVectors(this.max,Qr),lr.subVectors(e.a,Qr),cr.subVectors(e.b,Qr),ur.subVectors(e.c,Qr),hi.subVectors(cr,lr),fi.subVectors(ur,cr),Fi.subVectors(lr,ur);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Fi.z,Fi.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Fi.z,0,-Fi.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Fi.y,Fi.x,0];return!Sa(t,lr,cr,ur,Ys)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,lr,cr,ur,Ys))?!1:($s.crossVectors(hi,fi),t=[$s.x,$s.y,$s.z],Sa(t,lr,cr,ur,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new H,new H,new H,new H,new H,new H,new H,new H],gn=new H,qs=new Ns,lr=new H,cr=new H,ur=new H,hi=new H,fi=new H,Fi=new H,Qr=new H,Ys=new H,$s=new H,Oi=new H;function Sa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Oi.fromArray(n,s);const a=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const nv=new Ns,es=new H,Ea=new H;class Oc{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):nv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(es,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Ea)),this.expandByPoint(es.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new H,wa=new H,Ks=new H,di=new H,ba=new H,js=new H,Ta=new H;class iv{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wa.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),di.copy(this.origin).sub(wa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ks),a=di.dot(this.direction),l=-di.dot(Ks),c=di.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(wa).addScaledVector(Ks,f),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,r,s){ba.subVectors(t,e),js.subVectors(i,e),Ta.crossVectors(ba,js);let o=this.direction.dot(Ta),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(js.crossVectors(di,js));if(l<0)return null;const c=a*this.direction.dot(ba.cross(di));if(c<0||l+c>o)return null;const u=-a*di.dot(Ta);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,_,y,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,_,y,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,_,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),s=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,y=c*h;t[0]=f+y*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,y=c*h;t[0]=f-y*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,y=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+y,t[1]=l*h,t[5]=y*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=y-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+y,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rv,e,sv)}lookAt(e,t,i){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),pi.crossVectors(i,Qt),pi.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),pi.crossVectors(i,Qt)),pi.normalize(),Zs.crossVectors(Qt,pi),r[0]=pi.x,r[4]=Zs.x,r[8]=Qt.x,r[1]=pi.y,r[5]=Zs.y,r[9]=Qt.y,r[2]=pi.z,r[6]=Zs.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],y=i[6],m=i[10],p=i[14],b=i[3],M=i[7],S=i[11],I=i[15],C=r[0],R=r[4],D=r[8],ie=r[12],x=r[1],w=r[5],q=r[9],z=r[13],J=r[2],se=r[6],G=r[10],$=r[14],O=r[3],de=r[7],pe=r[11],ge=r[15];return s[0]=o*C+a*x+l*J+c*O,s[4]=o*R+a*w+l*se+c*de,s[8]=o*D+a*q+l*G+c*pe,s[12]=o*ie+a*z+l*$+c*ge,s[1]=u*C+h*x+f*J+d*O,s[5]=u*R+h*w+f*se+d*de,s[9]=u*D+h*q+f*G+d*pe,s[13]=u*ie+h*z+f*$+d*ge,s[2]=_*C+y*x+m*J+p*O,s[6]=_*R+y*w+m*se+p*de,s[10]=_*D+y*q+m*G+p*pe,s[14]=_*ie+y*z+m*$+p*ge,s[3]=b*C+M*x+S*J+I*O,s[7]=b*R+M*w+S*se+I*de,s[11]=b*D+M*q+S*G+I*pe,s[15]=b*ie+M*z+S*$+I*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],y=e[7],m=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+y*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],y=e[13],m=e[14],p=e[15],b=h*m*c-y*f*c+y*l*d-a*m*d-h*l*p+a*f*p,M=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,S=u*y*c-_*h*c+_*a*d-o*y*d-u*a*p+o*h*p,I=_*h*l-u*y*l-_*a*f+o*y*f+u*a*m-o*h*m,C=t*b+i*M+r*S+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(y*f*s-h*m*s-y*r*d+i*m*d+h*r*p-i*f*p)*R,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*p+i*l*p)*R,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*R,e[4]=M*R,e[5]=(u*m*s-_*f*s+_*r*d-t*m*d-u*r*p+t*f*p)*R,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*R,e[8]=S*R,e[9]=(_*h*s-u*y*s-_*i*d+t*y*d+u*i*p-t*h*p)*R,e[10]=(o*y*s-_*a*s+_*i*c-t*y*c-o*i*p+t*a*p)*R,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*R,e[12]=I*R,e[13]=(u*y*r-_*h*r+_*i*f-t*y*f-u*i*m+t*h*m)*R,e[14]=(_*a*r-o*y*r-_*i*l+t*y*l+o*i*m-t*a*m)*R,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,y=o*u,m=o*h,p=a*h,b=l*c,M=l*u,S=l*h,I=i.x,C=i.y,R=i.z;return r[0]=(1-(y+p))*I,r[1]=(d+S)*I,r[2]=(_-M)*I,r[3]=0,r[4]=(d-S)*C,r[5]=(1-(f+p))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(_+M)*R,r[9]=(m-b)*R,r[10]=(1-(f+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=hr.set(r[0],r[1],r[2]).length();const o=hr.set(r[4],r[5],r[6]).length(),a=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const c=1/s,u=1/o,h=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ti){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,_;if(a===ti)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Uo)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ti){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,d=(i+r)*u;let _,y;if(a===ti)_=(o+s)*h,y=-2*h;else if(a===Uo)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hr=new H,_n=new ht,rv=new H(0,0,0),sv=new H(1,1,1),pi=new H,Zs=new H,Qt=new H,oh=new ht,ah=new Us;class Bn{constructor(e=0,t=0,i=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ov=0;const lh=new H,fr=new Us,qn=new ht,Js=new H,ts=new H,av=new H,lv=new Us,ch=new H(1,0,0),uh=new H(0,1,0),hh=new H(0,0,1),fh={type:"added"},cv={type:"removed"},dr={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Ft extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new H,t=new Bn,i=new Us,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new qe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Js.copy(e):Js.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(ts,Js,this.up):qn.lookAt(Js,ts,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),fr.setFromRotationMatrix(qn),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cv),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new H(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new H,Yn=new H,Ra=new H,$n=new H,pr=new H,mr=new H,dh=new H,Ca=new H,Pa=new H,La=new H,Ia=new st,Da=new st,Ua=new st;class Sn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),Yn.subVectors(i,t),Ra.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Yn),l=vn.dot(Ra),c=Yn.dot(Yn),u=Yn.dot(Ra),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ia.setScalar(0),Da.setScalar(0),Ua.setScalar(0),Ia.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,i),Ua.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ia,s.x),o.addScaledVector(Da,s.y),o.addScaledVector(Ua,s.z),o}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),Yn.subVectors(e,t),vn.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),vn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;pr.subVectors(r,i),mr.subVectors(s,i),Ca.subVectors(e,i);const l=pr.dot(Ca),c=mr.dot(Ca);if(l<=0&&c<=0)return t.copy(i);Pa.subVectors(e,r);const u=pr.dot(Pa),h=mr.dot(Pa);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(pr,o);La.subVectors(e,s);const d=pr.dot(La),_=mr.dot(La);if(_>=0&&d<=_)return t.copy(s);const y=d*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(mr,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return dh.subVectors(s,r),a=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(dh,a);const p=1/(m+y+f);return o=y*p,a=f*p,t.copy(i).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function Na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Fc(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Na(o,s,e+1/3),this.g=Na(o,s,e),this.b=Na(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=In){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const i=Dd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return et.fromWorkingColorSpace(Dt.copy(this),e),Math.round(bt(Dt.r*255,0,255))*65536+Math.round(bt(Dt.g*255,0,255))*256+Math.round(bt(Dt.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=In){et.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==In?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Qs);const i=ms(mi.h,Qs.h,t),r=ms(mi.s,Qs.s,t),s=ms(mi.l,Qs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new ke;ke.NAMES=Dd;let uv=0;class Fs extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Cr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=pl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dl&&(i.blendSrc=this.blendSrc),this.blendDst!==pl&&(i.blendDst=this.blendDst),this.blendEquation!==Xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ot extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new H,eo=new we;class Fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qu,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qu&&(e.usage=this.usage),e}}class Ud extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nd extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hv=0;const ln=new ht,Fa=new Ft,gr=new H,en=new Ns,ns=new Ns,wt=new H;class Cn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cd(e)?Nd:Ud)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(en.min,ns.min),en.expandByPoint(wt),wt.addVectors(en.max,ns.max),en.expandByPoint(wt)):(en.expandByPoint(ns.min),en.expandByPoint(ns.max))}en.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wt.fromBufferAttribute(a,c),l&&(gr.fromBufferAttribute(e,c),wt.add(gr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new H,l[D]=new H;const c=new H,u=new H,h=new H,f=new we,d=new we,_=new we,y=new H,m=new H;function p(D,ie,x){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,ie),h.fromBufferAttribute(i,x),f.fromBufferAttribute(s,D),d.fromBufferAttribute(s,ie),_.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const w=1/(d.x*_.y-_.x*d.y);isFinite(w)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(w),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(w),a[D].add(y),a[ie].add(y),a[x].add(y),l[D].add(m),l[ie].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,ie=b.length;D<ie;++D){const x=b[D],w=x.start,q=x.count;for(let z=w,J=w+q;z<J;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new H,S=new H,I=new H,C=new H;function R(D){I.fromBufferAttribute(r,D),C.copy(I);const ie=a[D];M.copy(ie),M.sub(I.multiplyScalar(I.dot(ie))).normalize(),S.crossVectors(C,ie);const w=S.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,w)}for(let D=0,ie=b.length;D<ie;++D){const x=b[D],w=x.start,q=x.count;for(let z=w,J=w+q;z<J;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Fn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new ht,Bi=new iv,to=new Oc,mh=new H,no=new H,io=new H,ro=new H,Oa=new H,so=new H,gh=new H,oo=new H;class K extends Ft{constructor(e=new Cn,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){so.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Oa.fromBufferAttribute(h,e),o?so.addScaledVector(Oa,u):so.addScaledVector(Oa.sub(t),u))}t.add(so)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(to.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(to,mh)===null||Bi.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(ph),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,I=M;S<I;S+=3){const C=a.getX(S),R=a.getX(S+1),D=a.getX(S+2);r=ao(this,p,e,i,c,u,h,C,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);r=ao(this,o,e,i,c,u,h,b,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,I=M;S<I;S+=3){const C=S,R=S+1,D=S+2;r=ao(this,p,e,i,c,u,h,C,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const b=m,M=m+1,S=m+2;r=ao(this,o,e,i,c,u,h,b,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function fv(n,e,t,i,r,s,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ti,a),l===null)return null;oo.copy(a),oo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:n}}function ao(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,no),n.getVertexPosition(l,io),n.getVertexPosition(c,ro);const u=fv(n,e,t,i,no,io,ro,gh);if(u){const h=new H;Sn.getBarycoord(gh,no,io,ro,h),r&&(u.uv=Sn.getInterpolatedAttribute(r,a,l,c,h,new we)),s&&(u.uv1=Sn.getInterpolatedAttribute(s,a,l,c,h,new we)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};Sn.getNormal(no,io,ro,f.normal),u.face=f,u.barycoord=h}return u}class Xr extends Cn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function _(y,m,p,b,M,S,I,C,R,D,ie){const x=S/R,w=I/D,q=S/2,z=I/2,J=C/2,se=R+1,G=D+1;let $=0,O=0;const de=new H;for(let pe=0;pe<G;pe++){const ge=pe*w-z;for(let Se=0;Se<se;Se++){const Pe=Se*x-q;de[y]=Pe*b,de[m]=ge*M,de[p]=J,c.push(de.x,de.y,de.z),de[y]=0,de[m]=0,de[p]=C>0?1:-1,u.push(de.x,de.y,de.z),h.push(Se/R),h.push(1-pe/D),$+=1}}for(let pe=0;pe<D;pe++)for(let ge=0;ge<R;ge++){const Se=f+ge+se*pe,Pe=f+ge+se*(pe+1),ee=f+(ge+1)+se*(pe+1),fe=f+(ge+1)+se*pe;l.push(Se,Pe,fe),l.push(Pe,ee,fe),O+=6}a.addGroup(d,O,ie),d+=O,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=kr(n[t]);for(const r in i)e[r]=i[r]}return e}function dv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const pv={clone:kr,merge:Gt};var mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xt extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mv,this.fragmentShader=gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Od extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new H,_h=new we,vh=new we;class mt extends Od{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,_h,vh),t.subVectors(vh,_h)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,vr=1;class _v extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mt(_r,vr,e,t);r.layers=this.layers,this.add(r);const s=new mt(_r,vr,e,t);s.layers=this.layers,this.add(s);const o=new mt(_r,vr,e,t);o.layers=this.layers,this.add(o);const a=new mt(_r,vr,e,t);a.layers=this.layers,this.add(a);const l=new mt(_r,vr,e,t);l.layers=this.layers,this.add(l);const c=new mt(_r,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Bd extends $t{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Br,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vv extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xr(5,5,5),s=new xt({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Si});s.uniforms.tEquirect.value=t;const o=new K(r,s),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=Mn),new _v(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ba=new H,xv=new H,yv=new qe;class Vi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ba.subVectors(i,t).cross(xv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ba),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yv.getNormalMatrix(e),r=this.coplanarPoint(Ba).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Oc,lo=new H;class Bc{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],y=r[10],m=r[11],p=r[12],b=r[13],M=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-d,S-p).normalize(),i[1].setComponents(l+s,f+c,m+d,S+p).normalize(),i[2].setComponents(l+o,f+u,m+_,S+b).normalize(),i[3].setComponents(l-o,f-u,m-_,S-b).normalize(),i[4].setComponents(l-a,f-h,m-y,S-M).normalize(),t===ti)i[5].setComponents(l+a,f+h,m+y,S+M).normalize();else if(t===Uo)i[5].setComponents(a,h,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(lo.x=r.normal.x>0?e.max.x:e.min.x,lo.y=r.normal.y>0?e.max.y:e.min.y,lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],y=h[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const y=h[d];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class jo extends Cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],y=[],m=[];for(let p=0;p<u;p++){const b=p*f-o;for(let M=0;M<c;M++){const S=M*h-s;_.push(S,-b,0),y.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,S=b+c*(p+1),I=b+1+c*(p+1),C=b+1+c*p;d.push(M,S,C),d.push(S,I,C)}this.setIndex(d),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ev=`#ifdef USE_ALPHAHASH
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
#endif`,wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rv=`#ifdef USE_AOMAP
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
#endif`,Cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pv=`#ifdef USE_BATCHING
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
#endif`,Lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nv=`#ifdef USE_IRIDESCENCE
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
#endif`,Fv=`#ifdef USE_BUMPMAP
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
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xv=`#define PI 3.141592653589793
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
} // validated`,qv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yv=`vec3 transformedNormal = objectNormal;
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
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qv=`
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
}`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cx=`#ifdef USE_GRADIENTMAP
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
}`,ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
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
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xx=`PhysicalMaterial material;
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
#endif`,yx=`struct PhysicalMaterial {
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
}`,Mx=`
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lx=`#if defined( USE_POINTS_UV )
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
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
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
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
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
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,py=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sy=`uniform sampler2D t2D;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`#include <common>
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
}`,Ry=`#if DEPTH_PACKING == 3200
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
}`,Cy=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`uniform float scale;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Oy=`#define LAMBERT
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
}`,By=`#define LAMBERT
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
}`,zy=`#define MATCAP
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
}`,Hy=`#define MATCAP
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
}`,Gy=`#define NORMAL
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
}`,ky=`#define NORMAL
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
}`,Vy=`#define PHONG
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,qy=`#define STANDARD
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
}`,Yy=`#define TOON
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
}`,$y=`#define TOON
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
}`,Ky=`uniform float size;
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
}`,jy=`uniform vec3 diffuse;
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
}`,Zy=`#include <common>
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
}`,Jy=`uniform vec3 color;
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
}`,Qy=`uniform float rotation;
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
}`,eM=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Sv,alphahash_pars_fragment:Ev,alphamap_fragment:wv,alphamap_pars_fragment:bv,alphatest_fragment:Tv,alphatest_pars_fragment:Av,aomap_fragment:Rv,aomap_pars_fragment:Cv,batching_pars_vertex:Pv,batching_vertex:Lv,begin_vertex:Iv,beginnormal_vertex:Dv,bsdfs:Uv,iridescence_fragment:Nv,bumpmap_pars_fragment:Fv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:Bv,clipping_planes_pars_vertex:zv,clipping_planes_vertex:Hv,color_fragment:Gv,color_pars_fragment:kv,color_pars_vertex:Vv,color_vertex:Wv,common:Xv,cube_uv_reflection_fragment:qv,defaultnormal_vertex:Yv,displacementmap_pars_vertex:$v,displacementmap_vertex:Kv,emissivemap_fragment:jv,emissivemap_pars_fragment:Zv,colorspace_fragment:Jv,colorspace_pars_fragment:Qv,envmap_fragment:ex,envmap_common_pars_fragment:tx,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:px,envmap_vertex:rx,fog_vertex:sx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:lx,gradientmap_pars_fragment:cx,lightmap_pars_fragment:ux,lights_lambert_fragment:hx,lights_lambert_pars_fragment:fx,lights_pars_begin:dx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:_x,lights_phong_pars_fragment:vx,lights_physical_fragment:xx,lights_physical_pars_fragment:yx,lights_fragment_begin:Mx,lights_fragment_maps:Sx,lights_fragment_end:Ex,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:Rx,map_pars_fragment:Cx,map_particle_fragment:Px,map_particle_pars_fragment:Lx,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Ux,morphcolor_vertex:Nx,morphnormal_vertex:Fx,morphtarget_pars_vertex:Ox,morphtarget_vertex:Bx,normal_fragment_begin:zx,normal_fragment_maps:Hx,normal_pars_fragment:Gx,normal_pars_vertex:kx,normal_vertex:Vx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:$x,opaque_fragment:Kx,packing:jx,premultiplied_alpha_fragment:Zx,project_vertex:Jx,dithering_fragment:Qx,dithering_pars_fragment:ey,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:ry,shadowmap_vertex:sy,shadowmask_pars_fragment:oy,skinbase_vertex:ay,skinning_pars_vertex:ly,skinning_vertex:cy,skinnormal_vertex:uy,specularmap_fragment:hy,specularmap_pars_fragment:fy,tonemapping_fragment:dy,tonemapping_pars_fragment:py,transmission_fragment:my,transmission_pars_fragment:gy,uv_pars_fragment:_y,uv_pars_vertex:vy,uv_vertex:xy,worldpos_vertex:yy,background_vert:My,background_frag:Sy,backgroundCube_vert:Ey,backgroundCube_frag:wy,cube_vert:by,cube_frag:Ty,depth_vert:Ay,depth_frag:Ry,distanceRGBA_vert:Cy,distanceRGBA_frag:Py,equirect_vert:Ly,equirect_frag:Iy,linedashed_vert:Dy,linedashed_frag:Uy,meshbasic_vert:Ny,meshbasic_frag:Fy,meshlambert_vert:Oy,meshlambert_frag:By,meshmatcap_vert:zy,meshmatcap_frag:Hy,meshnormal_vert:Gy,meshnormal_frag:ky,meshphong_vert:Vy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:qy,meshtoon_vert:Yy,meshtoon_frag:$y,points_vert:Ky,points_frag:jy,shadow_vert:Zy,shadow_frag:Jy,sprite_vert:Qy,sprite_frag:eM},Ee={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Un={basic:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Gt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Gt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Gt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Gt([Ee.points,Ee.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Gt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Gt([Ee.common,Ee.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Gt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Gt([Ee.sprite,Ee.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Gt([Ee.common,Ee.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Gt([Ee.lights,Ee.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Un.physical={uniforms:Gt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const co={r:0,b:0,g:0},Hi=new Bn,tM=new ht;function nM(n,e,t,i,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function y(b){let M=!1;const S=_(b);S===null?p(a,l):S&&S.isColor&&(p(S,1),M=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const S=_(M);S&&(S.isCubeTexture||S.mapping===$o)?(u===void 0&&(u=new K(new Xr(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:kr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hi.copy(M.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tM.makeRotationFromEuler(Hi)),u.material.toneMapped=et.getTransfer(S.colorSpace)!==ct,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new K(new jo(2,2),new xt({name:"BackgroundMaterial",uniforms:kr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(co,Fd(n)),i.buffers.color.setClear(co.r,co.g,co.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:y,addToRenderList:m}}function iM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,w,q,z,J){let se=!1;const G=h(z,q,w);s!==G&&(s=G,c(s.object)),se=d(x,z,q,J),se&&_(x,z,q,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,S(x,w,q,z),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,w,q){const z=q.wireframe===!0;let J=i[x.id];J===void 0&&(J={},i[x.id]=J);let se=J[w.id];se===void 0&&(se={},J[w.id]=se);let G=se[z];return G===void 0&&(G=f(l()),se[z]=G),G}function f(x){const w=[],q=[],z=[];for(let J=0;J<t;J++)w[J]=0,q[J]=0,z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:q,attributeDivisors:z,object:x,attributes:{},index:null}}function d(x,w,q,z){const J=s.attributes,se=w.attributes;let G=0;const $=q.getAttributes();for(const O in $)if($[O].location>=0){const pe=J[O];let ge=se[O];if(ge===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor)),pe===void 0||pe.attribute!==ge||ge&&pe.data!==ge.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function _(x,w,q,z){const J={},se=w.attributes;let G=0;const $=q.getAttributes();for(const O in $)if($[O].location>=0){let pe=se[O];pe===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor));const ge={};ge.attribute=pe,pe&&pe.data&&(ge.data=pe.data),J[O]=ge,G++}s.attributes=J,s.attributesNum=G,s.index=z}function y(){const x=s.newAttributes;for(let w=0,q=x.length;w<q;w++)x[w]=0}function m(x){p(x,0)}function p(x,w){const q=s.newAttributes,z=s.enabledAttributes,J=s.attributeDivisors;q[x]=1,z[x]===0&&(n.enableVertexAttribArray(x),z[x]=1),J[x]!==w&&(n.vertexAttribDivisor(x,w),J[x]=w)}function b(){const x=s.newAttributes,w=s.enabledAttributes;for(let q=0,z=w.length;q<z;q++)w[q]!==x[q]&&(n.disableVertexAttribArray(q),w[q]=0)}function M(x,w,q,z,J,se,G){G===!0?n.vertexAttribIPointer(x,w,q,J,se):n.vertexAttribPointer(x,w,q,z,J,se)}function S(x,w,q,z){y();const J=z.attributes,se=q.getAttributes(),G=w.defaultAttributeValues;for(const $ in se){const O=se[$];if(O.location>=0){let de=J[$];if(de===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(de=x.instanceColor)),de!==void 0){const pe=de.normalized,ge=de.itemSize,Se=e.get(de);if(Se===void 0)continue;const Pe=Se.buffer,ee=Se.type,fe=Se.bytesPerElement,he=ee===n.INT||ee===n.UNSIGNED_INT||de.gpuType===Cc;if(de.isInterleavedBufferAttribute){const U=de.data,oe=U.stride,j=de.offset;if(U.isInstancedInterleavedBuffer){for(let le=0;le<O.locationSize;le++)p(O.location+le,U.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let le=0;le<O.locationSize;le++)m(O.location+le);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let le=0;le<O.locationSize;le++)M(O.location+le,ge/O.locationSize,ee,pe,oe*fe,(j+ge/O.locationSize*le)*fe,he)}else{if(de.isInstancedBufferAttribute){for(let U=0;U<O.locationSize;U++)p(O.location+U,de.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let U=0;U<O.locationSize;U++)m(O.location+U);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let U=0;U<O.locationSize;U++)M(O.location+U,ge/O.locationSize,ee,pe,ge*fe,ge/O.locationSize*U*fe,he)}}else if(G!==void 0){const pe=G[$];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(O.location,pe);break;case 3:n.vertexAttrib3fv(O.location,pe);break;case 4:n.vertexAttrib4fv(O.location,pe);break;default:n.vertexAttrib1fv(O.location,pe)}}}}b()}function I(){D();for(const x in i){const w=i[x];for(const q in w){const z=w[q];for(const J in z)u(z[J].object),delete z[J];delete w[q]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const w=i[x.id];for(const q in w){const z=w[q];for(const J in z)u(z[J].object),delete z[J];delete w[q]}delete i[x.id]}function R(x){for(const w in i){const q=i[w];if(q[x.id]===void 0)continue;const z=q[x.id];for(const J in z)u(z[J].object),delete z[J];delete q[x.id]}}function D(){ie(),o=!0,s!==r&&(s=r,c(s.object))}function ie(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:ie,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function rM(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=u[y];for(let y=0;y<f.length;y++)t.update(_,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ei&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:I,maxSamples:C}}function oM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Vi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,M=b*4;let S=p.clippingState||null;l.value=S,S=u(_,f,M,d);for(let I=0;I!==M;++I)S[I]=t[I];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const p=d+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=d;M!==y;++M,S+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function aM(n){let e=new WeakMap;function t(o,a){return a===Sl?o.mapping=Br:a===El&&(o.mapping=zr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sl||a===El)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Hd extends Od{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wr=4,xh=[.125,.215,.35,.446,.526,.582],qi=20,za=new Hd,yh=new ke;let Ha=null,Ga=0,ka=0,Va=!1;const Wi=(1+Math.sqrt(5))/2,xr=1/Wi,Mh=[new H(-Wi,xr,0),new H(Wi,xr,0),new H(-xr,0,Wi),new H(xr,0,Wi),new H(0,Wi,-xr),new H(0,Wi,xr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha,Ga,ka),this._renderer.xr.enabled=Va,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Ds,format:wn,colorSpace:Pi,depthBuffer:!1},r=Eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lM(s)),this._blurMaterial=cM(s,e,t)}return r}_compileMaterial(e){const t=new K(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,i,r){const a=new mt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(yh),u.toneMapping=Ei,u.autoClear=!1;const d=new Ot({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new K(new Xr,d);let y=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,y=!0):(d.color.copy(yh),y=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;uo(r,b*M,p>2?M:0,M,M),u.setRenderTarget(r),y&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Br||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new K(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,za)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mh[(r-s-1)%Mh.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new K(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*qi-1),y=s/_,m=isFinite(s)?1+Math.floor(u*y):qi;m>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const p=[];let b=0;for(let R=0;R<qi;++R){const D=R/y,ie=Math.exp(-D*D/2);p.push(ie),R===0?b+=ie:R<m&&(b+=2*ie)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const S=this._sizeLods[r],I=3*S*(r>M-wr?r-M+wr:0),C=4*(this._cubeSize-S);uo(t,I,C,3*S,2*S),l.setRenderTarget(t),l.render(h,za)}}function lM(n){const e=[],t=[],i=[];let r=n;const s=n-wr+1+xh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-wr?l=xh[o-n+wr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,y=3,m=2,p=1,b=new Float32Array(y*_*d),M=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let C=0;C<d;C++){const R=C%3*2/3-1,D=C>2?0:-1,ie=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];b.set(ie,y*_*C),M.set(f,m*_*C);const x=[C,C,C,C,C,C];S.set(x,p*_*C)}const I=new Cn;I.setAttribute("position",new Fn(b,y)),I.setAttribute("uv",new Fn(M,m)),I.setAttribute("faceIndex",new Fn(S,p)),e.push(I),r>wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eh(n,e,t){const i=new Qi(n,e,t);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cM(n,e,t){const i=new Float32Array(qi),r=new H(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function wh(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function bh(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function zc(){return`

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
	`}function uM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sl||l===El,u=l===Br||l===zr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Sh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Sh(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&wo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fM(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const y=d[_];for(let m=0,p=y.length;m<p;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let y=0;if(d!==null){const b=d.array;y=d.version;for(let M=0,S=b.length;M<S;M+=3){const I=b[M+0],C=b[M+1],R=b[M+2];f.push(I,C,C,R,R,I)}}else if(_!==void 0){const b=_.array;y=_.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const I=M+0,C=M+1,R=M+2;f.push(I,C,C,R,R,I)}}else return;const m=new(Cd(f)?Nd:Ud)(f,1);m.version=y;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function dM(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,f*o,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function h(f,d,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,y,0,_);let p=0;for(let b=0;b<_;b++)p+=d[b];for(let b=0;b<y.length;b++)t.update(p,i,y[b])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function pM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mM(n,e,t){const i=new WeakMap,r=new st;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let I=a.attributes.position.count*S,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*C*4*h),D=new Ld(R,I,C,h);D.type=ei,D.needsUpdate=!0;const ie=S*4;for(let w=0;w<h;w++){const q=p[w],z=b[w],J=M[w],se=I*C*4*w;for(let G=0;G<q.count;G++){const $=G*ie;_===!0&&(r.fromBufferAttribute(q,G),R[se+$+0]=r.x,R[se+$+1]=r.y,R[se+$+2]=r.z,R[se+$+3]=0),y===!0&&(r.fromBufferAttribute(z,G),R[se+$+4]=r.x,R[se+$+5]=r.y,R[se+$+6]=r.z,R[se+$+7]=0),m===!0&&(r.fromBufferAttribute(J,G),R[se+$+8]=r.x,R[se+$+9]=r.y,R[se+$+10]=r.z,R[se+$+11]=J.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new we(I,C)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function gM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Gd extends $t{constructor(e,t,i,r,s,o,a,l,c,u=Pr){if(u!==Pr&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pr&&(i=Ji),i===void 0&&u===Gr&&(i=Hr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kd=new $t,Th=new Gd(1,1),Vd=new Ld,Wd=new tv,Xd=new Bd,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ah[r];if(s===void 0&&(s=new Float32Array(r),Ah[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zo(n,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _M(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function MM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Lh.set(i),n.uniformMatrix2fv(this.addr,!1,Lh),Et(t,i)}}function SM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),Et(t,i)}}function EM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),Et(t,i)}}function wM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function RM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function PM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function IM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=Rd,s=Th):s=kd,t.setTexture2D(e||s,r)}function DM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wd,r)}function UM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xd,r)}function NM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vd,r)}function FM(n){switch(n){case 5126:return _M;case 35664:return vM;case 35665:return xM;case 35666:return yM;case 35674:return MM;case 35675:return SM;case 35676:return EM;case 5124:case 35670:return wM;case 35667:case 35671:return bM;case 35668:case 35672:return TM;case 35669:case 35673:return AM;case 5125:return RM;case 36294:return CM;case 36295:return PM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return NM}}function OM(n,e){n.uniform1fv(this.addr,e)}function BM(n,e){const t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function zM(n,e){const t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function HM(n,e){const t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function GM(n,e){const t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kM(n,e){const t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function VM(n,e){const t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function WM(n,e){n.uniform1iv(this.addr,e)}function XM(n,e){n.uniform2iv(this.addr,e)}function qM(n,e){n.uniform3iv(this.addr,e)}function YM(n,e){n.uniform4iv(this.addr,e)}function $M(n,e){n.uniform1uiv(this.addr,e)}function KM(n,e){n.uniform2uiv(this.addr,e)}function jM(n,e){n.uniform3uiv(this.addr,e)}function ZM(n,e){n.uniform4uiv(this.addr,e)}function JM(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||kd,s[o])}function QM(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wd,s[o])}function eS(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Xd,s[o])}function tS(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vd,s[o])}function nS(n){switch(n){case 5126:return OM;case 35664:return BM;case 35665:return zM;case 35666:return HM;case 35674:return GM;case 35675:return kM;case 35676:return VM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return qM;case 35669:case 35673:return YM;case 5125:return $M;case 36294:return KM;case 36295:return jM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return tS}}class iS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=FM(t.type)}}class rS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nS(t.type)}}class sS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function Ih(n,e){n.seq.push(e),n.map[e.id]=e}function oS(n,e,t){const i=n.name,r=i.length;for(Wa.lastIndex=0;;){const s=Wa.exec(i),o=Wa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ih(t,c===void 0?new iS(a,n,e):new rS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new sS(a),Ih(t,h)),t=h}}}class bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);oS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Dh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const aS=37297;let lS=0;function cS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function uS(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===Do&&t===Io?i="LinearDisplayP3ToLinearSRGB":e===Io&&t===Do&&(i="LinearSRGBToLinearDisplayP3"),n){case Pi:case Ko:return[i,"LinearTransferOETF"];case In:case Nc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cS(n.getShaderSource(e),o)}else return r}function hS(n,e){const t=uS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fS(n,e){let t;switch(e){case d_:t="Linear";break;case p_:t="Reinhard";break;case m_:t="Cineon";break;case nr:t="ACESFilmic";break;case __:t="AgX";break;case v_:t="Neutral";break;case g_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ho=new H;function dS(){et.getLuminanceCoefficients(ho);const n=ho.x.toFixed(4),e=ho.y.toFixed(4),t=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function mS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ss(n){return n!==""}function Nh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _S=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(n){return n.replace(_S,xS)}const vS=new Map;function xS(n,e){let t=Xe[e];if(t===void 0){const i=vS.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jl(t)}const yS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(n){return n.replace(yS,MS)}function MS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bh(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===q0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function ES(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Br:case zr:e="ENVMAP_TYPE_CUBE";break;case $o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function bS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case md:e="ENVMAP_BLENDING_MULTIPLY";break;case h_:e="ENVMAP_BLENDING_MIX";break;case f_:e="ENVMAP_BLENDING_ADD";break}return e}function TS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function AS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=SS(t),c=ES(t),u=wS(t),h=bS(t),f=TS(t),d=pS(t),_=mS(s),y=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(m=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ei?fS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,hS("linearToOutputTexel",t.outputColorSpace),dS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=Jl(o),o=Nh(o,t),o=Fh(o,t),a=Jl(a),a=Nh(a,t),a=Fh(a,t),o=Oh(o),a=Oh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+o,S=b+p+a,I=Dh(r,r.VERTEX_SHADER,M),C=Dh(r,r.FRAGMENT_SHADER,S);r.attachShader(y,I),r.attachShader(y,C),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(w){if(n.debug.checkShaderErrors){const q=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(I).trim(),J=r.getShaderInfoLog(C).trim();let se=!0,G=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,I,C);else{const $=Uh(r,I,"vertex"),O=Uh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+q+`
`+$+`
`+O)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(z===""||J==="")&&(G=!1);G&&(w.diagnostics={runnable:se,programLog:q,vertexShader:{log:z,prefix:m},fragmentShader:{log:J,prefix:p}})}r.deleteShader(I),r.deleteShader(C),D=new bo(r,y),ie=gS(r,y)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let ie;this.getAttributes=function(){return ie===void 0&&R(this),ie};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,aS)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=C,this}let RS=0;class CS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PS(e),t.set(e,i)),i}}class PS{constructor(e){this.id=RS++,this.code=e,this.usedTimes=0}}function LS(n,e,t,i,r,s,o){const a=new Id,l=new CS,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,d=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,w,q,z,J){const se=z.fog,G=J.geometry,$=x.isMeshStandardMaterial?z.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),de=O&&O.mapping===$o?O.image.height:null,pe=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Se=ge!==void 0?ge.length:0;let Pe=0;G.morphAttributes.position!==void 0&&(Pe=1),G.morphAttributes.normal!==void 0&&(Pe=2),G.morphAttributes.color!==void 0&&(Pe=3);let ee,fe,he,U;if(pe){const Xt=Un[pe];ee=Xt.vertexShader,fe=Xt.fragmentShader}else ee=x.vertexShader,fe=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),U=l.getFragmentShaderID(x);const oe=n.getRenderTarget(),j=J.isInstancedMesh===!0,le=J.isBatchedMesh===!0,xe=!!x.map,Q=!!x.matcap,g=!!O,T=!!x.aoMap,L=!!x.lightMap,F=!!x.bumpMap,N=!!x.normalMap,Z=!!x.displacementMap,te=!!x.emissiveMap,E=!!x.metalnessMap,v=!!x.roughnessMap,P=x.anisotropy>0,X=x.clearcoat>0,k=x.dispersion>0,V=x.iridescence>0,ue=x.sheen>0,ce=x.transmission>0,ve=P&&!!x.anisotropyMap,be=X&&!!x.clearcoatMap,_e=X&&!!x.clearcoatNormalMap,Me=X&&!!x.clearcoatRoughnessMap,Fe=V&&!!x.iridescenceMap,Ue=V&&!!x.iridescenceThicknessMap,Te=ue&&!!x.sheenColorMap,Ye=ue&&!!x.sheenRoughnessMap,Oe=!!x.specularMap,$e=!!x.specularColorMap,B=!!x.specularIntensityMap,Le=ce&&!!x.transmissionMap,ae=ce&&!!x.thicknessMap,me=!!x.gradientMap,Ae=!!x.alphaMap,Ie=x.alphaTest>0,Ke=!!x.alphaHash,_t=!!x.extensions;let Wt=Ei;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Wt=n.toneMapping);const je={shaderID:pe,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:fe,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:U,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:le,batchingColor:le&&J._colorsTexture!==null,instancing:j,instancingColor:j&&J.instanceColor!==null,instancingMorph:j&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Pi,alphaToCoverage:!!x.alphaToCoverage,map:xe,matcap:Q,envMap:g,envMapMode:g&&O.mapping,envMapCubeUVHeight:de,aoMap:T,lightMap:L,bumpMap:F,normalMap:N,displacementMap:d&&Z,emissiveMap:te,normalMapObjectSpace:N&&x.normalMapType===S_,normalMapTangentSpace:N&&x.normalMapType===Ad,metalnessMap:E,roughnessMap:v,anisotropy:P,anisotropyMap:ve,clearcoat:X,clearcoatMap:be,clearcoatNormalMap:_e,clearcoatRoughnessMap:Me,dispersion:k,iridescence:V,iridescenceMap:Fe,iridescenceThicknessMap:Ue,sheen:ue,sheenColorMap:Te,sheenRoughnessMap:Ye,specularMap:Oe,specularColorMap:$e,specularIntensityMap:B,transmission:ce,transmissionMap:Le,thicknessMap:ae,gradientMap:me,opaque:x.transparent===!1&&x.blending===Cr&&x.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Ie,alphaHash:Ke,combine:x.combine,mapUv:xe&&m(x.map.channel),aoMapUv:T&&m(x.aoMap.channel),lightMapUv:L&&m(x.lightMap.channel),bumpMapUv:F&&m(x.bumpMap.channel),normalMapUv:N&&m(x.normalMap.channel),displacementMapUv:Z&&m(x.displacementMap.channel),emissiveMapUv:te&&m(x.emissiveMap.channel),metalnessMapUv:E&&m(x.metalnessMap.channel),roughnessMapUv:v&&m(x.roughnessMap.channel),anisotropyMapUv:ve&&m(x.anisotropyMap.channel),clearcoatMapUv:be&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(x.sheenRoughnessMap.channel),specularMapUv:Oe&&m(x.specularMap.channel),specularColorMapUv:$e&&m(x.specularColorMap.channel),specularIntensityMapUv:B&&m(x.specularIntensityMap.channel),transmissionMapUv:Le&&m(x.transmissionMap.channel),thicknessMapUv:ae&&m(x.thicknessMap.channel),alphaMapUv:Ae&&m(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(N||P),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!G.attributes.uv&&(xe||Ae),fog:!!se,useFog:x.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Pe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:Wt,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qn,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_t&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&x.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function b(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const q in x.defines)w.push(q),w.push(x.defines[q]);return x.isRawShaderMaterial===!1&&(M(w,x),S(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function M(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function I(x){const w=y[x.type];let q;if(w){const z=Un[w];q=pv.clone(z.uniforms)}else q=x.uniforms;return q}function C(x,w){let q;for(let z=0,J=u.length;z<J;z++){const se=u[z];if(se.cacheKey===w){q=se,++q.usedTimes;break}}return q===void 0&&(q=new AS(n,w,x,s),u.push(q)),q}function R(x){if(--x.usedTimes===0){const w=u.indexOf(x);u[w]=u[u.length-1],u.pop(),x.destroy()}}function D(x){l.remove(x)}function ie(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:I,acquireProgram:C,releaseProgram:R,releaseShaderCache:D,programs:u,dispose:ie}}function IS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function DS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,_,y,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=y,p.group=m),e++,p}function a(h,f,d,_,y,m){const p=o(h,f,d,_,y,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,_,y,m){const p=o(h,f,d,_,y,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||DS),i.length>1&&i.sort(f||zh),r.length>1&&r.sort(f||zh)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function US(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Hh,n.set(i,[o])):r>=s.length?(o=new Hh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function NS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new ke};break;case"SpotLight":t={position:new H,direction:new H,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function FS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OS=0;function BS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zS(n){const e=new NS,t=FS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new ht,o=new ht;function a(c){let u=0,h=0,f=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let d=0,_=0,y=0,m=0,p=0,b=0,M=0,S=0,I=0,C=0,R=0;c.sort(BS);for(let ie=0,x=c.length;ie<x;ie++){const w=c[ie],q=w.color,z=w.intensity,J=w.distance,se=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=q.r*z,h+=q.g*z,f+=q.b*z;else if(w.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(w.sh.coefficients[G],z);R++}else if(w.isDirectionalLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const $=w.shadow,O=t.get(w);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,i.directionalShadow[d]=O,i.directionalShadowMap[d]=se,i.directionalShadowMatrix[d]=w.shadow.matrix,b++}i.directional[d]=G,d++}else if(w.isSpotLight){const G=e.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(q).multiplyScalar(z),G.distance=J,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,i.spot[y]=G;const $=w.shadow;if(w.map&&(i.spotLightMap[I]=w.map,I++,$.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[y]=$.matrix,w.castShadow){const O=t.get(w);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,i.spotShadow[y]=O,i.spotShadowMap[y]=se,S++}y++}else if(w.isRectAreaLight){const G=e.get(w);G.color.copy(q).multiplyScalar(z),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=G,m++}else if(w.isPointLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const $=w.shadow,O=t.get(w);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,O.shadowCameraNear=$.camera.near,O.shadowCameraFar=$.camera.far,i.pointShadow[_]=O,i.pointShadowMap[_]=se,i.pointShadowMatrix[_]=w.shadow.matrix,M++}i.point[_]=G,_++}else if(w.isHemisphereLight){const G=e.get(w);G.skyColor.copy(w.color).multiplyScalar(z),G.groundColor.copy(w.groundColor).multiplyScalar(z),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==d||D.pointLength!==_||D.spotLength!==y||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==S||D.numSpotMaps!==I||D.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.directionalLength=d,D.pointLength=_,D.spotLength=y,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=S,D.numSpotMaps=I,D.numLightProbes=R,i.version=OS++)}function l(c,u){let h=0,f=0,d=0,_=0,y=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(M.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Gh(n){const e=new zS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function HS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Gh(n),e.set(r,[a])):s>=o.length?(a=new Gh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class GS extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kS extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WS=`uniform sampler2D shadow_pass;
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
}`;function XS(n,e,t){let i=new Bc;const r=new we,s=new we,o=new st,a=new GS({depthPacking:M_}),l=new kS,c={},u=t.maxTextureSize,h={[Ti]:Yt,[Yt]:Ti,[Qn]:Qn},f=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:VS,fragmentShader:WS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Cn;_.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new K(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let p=this.type;this.render=function(C,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const ie=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Si),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const z=p!==jn&&this.type===jn,J=p===jn&&this.type!==jn;for(let se=0,G=C.length;se<G;se++){const $=C[se],O=$.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const de=O.getFrameExtents();if(r.multiply(de),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,O.mapSize.y=s.y)),O.map===null||z===!0||J===!0){const ge=this.type!==jn?{minFilter:un,magFilter:un}:{};O.map!==null&&O.map.dispose(),O.map=new Qi(r.x,r.y,ge),O.map.texture.name=$.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const pe=O.getViewportCount();for(let ge=0;ge<pe;ge++){const Se=O.getViewport(ge);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),q.viewport(o),O.updateMatrices($,ge),i=O.getFrustum(),S(R,D,O.camera,$,this.type)}O.isPointLightShadow!==!0&&this.type===jn&&b(O,D),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(ie,x,w)};function b(C,R){const D=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,D,f,y,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,D,d,y,null)}function M(C,R,D,ie){let x=null;const w=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)x=w;else if(x=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const q=x.uuid,z=R.uuid;let J=c[q];J===void 0&&(J={},c[q]=J);let se=J[z];se===void 0&&(se=x.clone(),J[z]=se,R.addEventListener("dispose",I)),x=se}if(x.visible=R.visible,x.wireframe=R.wireframe,ie===jn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:h[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const q=n.properties.get(x);q.light=D}return x}function S(C,R,D,ie,x){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===jn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const z=e.update(C),J=C.material;if(Array.isArray(J)){const se=z.groups;for(let G=0,$=se.length;G<$;G++){const O=se[G],de=J[O.materialIndex];if(de&&de.visible){const pe=M(C,de,ie,x);C.onBeforeShadow(n,C,R,D,z,pe,O),n.renderBufferDirect(D,null,z,pe,C,O),C.onAfterShadow(n,C,R,D,z,pe,O)}}}else if(J.visible){const se=M(C,J,ie,x);C.onBeforeShadow(n,C,R,D,z,se,null),n.renderBufferDirect(D,null,z,se,C,null),C.onAfterShadow(n,C,R,D,z,se,null)}}const q=C.children;for(let z=0,J=q.length;z<J;z++)S(q[z],R,D,ie,x)}function I(C){C.target.removeEventListener("dispose",I);for(const D in c){const ie=c[D],x=C.target.uuid;x in ie&&(ie[x].dispose(),delete ie[x])}}}const qS={[ml]:gl,[_l]:yl,[vl]:Ml,[Or]:xl,[gl]:ml,[yl]:_l,[Ml]:vl,[xl]:Or};function YS(n){function e(){let B=!1;const Le=new st;let ae=null;const me=new st(0,0,0,0);return{setMask:function(Ae){ae!==Ae&&!B&&(n.colorMask(Ae,Ae,Ae,Ae),ae=Ae)},setLocked:function(Ae){B=Ae},setClear:function(Ae,Ie,Ke,_t,Wt){Wt===!0&&(Ae*=_t,Ie*=_t,Ke*=_t),Le.set(Ae,Ie,Ke,_t),me.equals(Le)===!1&&(n.clearColor(Ae,Ie,Ke,_t),me.copy(Le))},reset:function(){B=!1,ae=null,me.set(-1,0,0,0)}}}function t(){let B=!1,Le=!1,ae=null,me=null,Ae=null;return{setReversed:function(Ie){Le=Ie},setTest:function(Ie){Ie?he(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!B&&(n.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(Le&&(Ie=qS[Ie]),me!==Ie){switch(Ie){case ml:n.depthFunc(n.NEVER);break;case gl:n.depthFunc(n.ALWAYS);break;case _l:n.depthFunc(n.LESS);break;case Or:n.depthFunc(n.LEQUAL);break;case vl:n.depthFunc(n.EQUAL);break;case xl:n.depthFunc(n.GEQUAL);break;case yl:n.depthFunc(n.GREATER);break;case Ml:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Ie}},setLocked:function(Ie){B=Ie},setClear:function(Ie){Ae!==Ie&&(n.clearDepth(Ie),Ae=Ie)},reset:function(){B=!1,ae=null,me=null,Ae=null}}}function i(){let B=!1,Le=null,ae=null,me=null,Ae=null,Ie=null,Ke=null,_t=null,Wt=null;return{setTest:function(je){B||(je?he(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(je){Le!==je&&!B&&(n.stencilMask(je),Le=je)},setFunc:function(je,Xt,Gn){(ae!==je||me!==Xt||Ae!==Gn)&&(n.stencilFunc(je,Xt,Gn),ae=je,me=Xt,Ae=Gn)},setOp:function(je,Xt,Gn){(Ie!==je||Ke!==Xt||_t!==Gn)&&(n.stencilOp(je,Xt,Gn),Ie=je,Ke=Xt,_t=Gn)},setLocked:function(je){B=je},setClear:function(je){Wt!==je&&(n.clearStencil(je),Wt=je)},reset:function(){B=!1,Le=null,ae=null,me=null,Ae=null,Ie=null,Ke=null,_t=null,Wt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,y=null,m=null,p=null,b=null,M=null,S=null,I=null,C=new ke(0,0,0),R=0,D=!1,ie=null,x=null,w=null,q=null,z=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,G=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),se=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),se=G>=2);let O=null,de={};const pe=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Se=new st().fromArray(pe),Pe=new st().fromArray(ge);function ee(B,Le,ae,me){const Ae=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(B,Ie),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<ae;Ke++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Le+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Ie}const fe={};fe[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(n.DEPTH_TEST),s.setFunc(Or),L(!1),F($u),he(n.CULL_FACE),g(Si);function he(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function U(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function oe(B,Le){return u[B]!==Le?(n.bindFramebuffer(B,Le),u[B]=Le,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Le),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function j(B,Le){let ae=f,me=!1;if(B){ae=h.get(Le),ae===void 0&&(ae=[],h.set(Le,ae));const Ae=B.textures;if(ae.length!==Ae.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,Ke=Ae.length;Ie<Ke;Ie++)ae[Ie]=n.COLOR_ATTACHMENT0+Ie;ae.length=Ae.length,me=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,me=!0);me&&n.drawBuffers(ae)}function le(B){return d!==B?(n.useProgram(B),d=B,!0):!1}const xe={[Xi]:n.FUNC_ADD,[$0]:n.FUNC_SUBTRACT,[K0]:n.FUNC_REVERSE_SUBTRACT};xe[j0]=n.MIN,xe[Z0]=n.MAX;const Q={[J0]:n.ZERO,[Q0]:n.ONE,[e_]:n.SRC_COLOR,[dl]:n.SRC_ALPHA,[o_]:n.SRC_ALPHA_SATURATE,[r_]:n.DST_COLOR,[n_]:n.DST_ALPHA,[t_]:n.ONE_MINUS_SRC_COLOR,[pl]:n.ONE_MINUS_SRC_ALPHA,[s_]:n.ONE_MINUS_DST_COLOR,[i_]:n.ONE_MINUS_DST_ALPHA,[a_]:n.CONSTANT_COLOR,[l_]:n.ONE_MINUS_CONSTANT_COLOR,[c_]:n.CONSTANT_ALPHA,[u_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,Le,ae,me,Ae,Ie,Ke,_t,Wt,je){if(B===Si){_===!0&&(U(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),B!==Y0){if(B!==y||je!==D){if((m!==Xi||M!==Xi)&&(n.blendEquation(n.FUNC_ADD),m=Xi,M=Xi),je)switch(B){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.ONE,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,b=null,S=null,I=null,C.set(0,0,0),R=0,y=B,D=je}return}Ae=Ae||Le,Ie=Ie||ae,Ke=Ke||me,(Le!==m||Ae!==M)&&(n.blendEquationSeparate(xe[Le],xe[Ae]),m=Le,M=Ae),(ae!==p||me!==b||Ie!==S||Ke!==I)&&(n.blendFuncSeparate(Q[ae],Q[me],Q[Ie],Q[Ke]),p=ae,b=me,S=Ie,I=Ke),(_t.equals(C)===!1||Wt!==R)&&(n.blendColor(_t.r,_t.g,_t.b,Wt),C.copy(_t),R=Wt),y=B,D=!1}function T(B,Le){B.side===Qn?U(n.CULL_FACE):he(n.CULL_FACE);let ae=B.side===Yt;Le&&(ae=!ae),L(ae),B.blending===Cr&&B.transparent===!1?g(Si):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const me=B.stencilWrite;o.setTest(me),me&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Z(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){ie!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),ie=B)}function F(B){B!==W0?(he(n.CULL_FACE),B!==x&&(B===$u?n.cullFace(n.BACK):B===X0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),x=B}function N(B){B!==w&&(se&&n.lineWidth(B),w=B)}function Z(B,Le,ae){B?(he(n.POLYGON_OFFSET_FILL),(q!==Le||z!==ae)&&(n.polygonOffset(Le,ae),q=Le,z=ae)):U(n.POLYGON_OFFSET_FILL)}function te(B){B?he(n.SCISSOR_TEST):U(n.SCISSOR_TEST)}function E(B){B===void 0&&(B=n.TEXTURE0+J-1),O!==B&&(n.activeTexture(B),O=B)}function v(B,Le,ae){ae===void 0&&(O===null?ae=n.TEXTURE0+J-1:ae=O);let me=de[ae];me===void 0&&(me={type:void 0,texture:void 0},de[ae]=me),(me.type!==B||me.texture!==Le)&&(O!==ae&&(n.activeTexture(ae),O=ae),n.bindTexture(B,Le||fe[B]),me.type=B,me.texture=Le)}function P(){const B=de[O];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(B){Se.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Se.copy(B))}function Te(B){Pe.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Pe.copy(B))}function Ye(B,Le){let ae=l.get(Le);ae===void 0&&(ae=new WeakMap,l.set(Le,ae));let me=ae.get(B);me===void 0&&(me=n.getUniformBlockIndex(Le,B.name),ae.set(B,me))}function Oe(B,Le){const me=l.get(Le).get(B);a.get(Le)!==me&&(n.uniformBlockBinding(Le,me,B.__bindingPointIndex),a.set(Le,me))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},O=null,de={},u={},h=new WeakMap,f=[],d=null,_=!1,y=null,m=null,p=null,b=null,M=null,S=null,I=null,C=new ke(0,0,0),R=0,D=!1,ie=null,x=null,w=null,q=null,z=null,Se.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:U,bindFramebuffer:oe,drawBuffers:j,useProgram:le,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:F,setLineWidth:N,setPolygonOffset:Z,setScissorTest:te,activeTexture:E,bindTexture:v,unbindTexture:P,compressedTexImage2D:X,compressedTexImage3D:k,texImage2D:Me,texImage3D:Fe,updateUBOMapping:Ye,uniformBlockBinding:Oe,texStorage2D:be,texStorage3D:_e,texSubImage2D:V,texSubImage3D:ue,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Ue,viewport:Te,reset:$e}}function kh(n,e,t,i){const r=$S(i);switch(t){case yd:return n*e;case Sd:return n*e;case Ed:return n*e*2;case wd:return n*e/r.components*r.byteLength;case Ic:return n*e/r.components*r.byteLength;case bd:return n*e*2/r.components*r.byteLength;case Dc:return n*e*2/r.components*r.byteLength;case Md:return n*e*3/r.components*r.byteLength;case wn:return n*e*4/r.components*r.byteLength;case Uc:return n*e*4/r.components*r.byteLength;case xo:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mo:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:case Cl:return Math.max(n,16)*Math.max(e,8)/4;case Tl:case Rl:return Math.max(n,8)*Math.max(e,8)/2;case Pl:case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Yl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Td:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jl:case Zl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $S(n){switch(n){case ri:case _d:return{byteLength:1,components:1};case bs:case vd:case Ds:return{byteLength:2,components:1};case Pc:case Lc:return{byteLength:2,components:4};case Ji:case Cc:case ei:return{byteLength:4,components:1};case xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function KS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return d?new OffscreenCanvas(E,v):No("canvas")}function y(E,v,P){let X=1;const k=te(E);if((k.width>P||k.height>P)&&(X=P/Math.max(k.width,k.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const V=Math.floor(X*k.width),ue=Math.floor(X*k.height);h===void 0&&(h=_(V,ue));const ce=v?_(V,ue):h;return ce.width=V,ce.height=ue,ce.getContext("2d").drawImage(E,0,0,V,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+V+"x"+ue+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==un&&E.minFilter!==Mn}function p(E){n.generateMipmap(E)}function b(E,v,P,X,k=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=v;if(v===n.RED&&(P===n.FLOAT&&(V=n.R32F),P===n.HALF_FLOAT&&(V=n.R16F),P===n.UNSIGNED_BYTE&&(V=n.R8)),v===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.R8UI),P===n.UNSIGNED_SHORT&&(V=n.R16UI),P===n.UNSIGNED_INT&&(V=n.R32UI),P===n.BYTE&&(V=n.R8I),P===n.SHORT&&(V=n.R16I),P===n.INT&&(V=n.R32I)),v===n.RG&&(P===n.FLOAT&&(V=n.RG32F),P===n.HALF_FLOAT&&(V=n.RG16F),P===n.UNSIGNED_BYTE&&(V=n.RG8)),v===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.RG8UI),P===n.UNSIGNED_SHORT&&(V=n.RG16UI),P===n.UNSIGNED_INT&&(V=n.RG32UI),P===n.BYTE&&(V=n.RG8I),P===n.SHORT&&(V=n.RG16I),P===n.INT&&(V=n.RG32I)),v===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.RGB8UI),P===n.UNSIGNED_SHORT&&(V=n.RGB16UI),P===n.UNSIGNED_INT&&(V=n.RGB32UI),P===n.BYTE&&(V=n.RGB8I),P===n.SHORT&&(V=n.RGB16I),P===n.INT&&(V=n.RGB32I)),v===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),P===n.UNSIGNED_INT&&(V=n.RGBA32UI),P===n.BYTE&&(V=n.RGBA8I),P===n.SHORT&&(V=n.RGBA16I),P===n.INT&&(V=n.RGBA32I)),v===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),v===n.RGBA){const ue=k?Lo:et.getTransfer(X);P===n.FLOAT&&(V=n.RGBA32F),P===n.HALF_FLOAT&&(V=n.RGBA16F),P===n.UNSIGNED_BYTE&&(V=ue===ct?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function M(E,v){let P;return E?v===null||v===Ji||v===Hr?P=n.DEPTH24_STENCIL8:v===ei?P=n.DEPTH32F_STENCIL8:v===bs&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ji||v===Hr?P=n.DEPTH_COMPONENT24:v===ei?P=n.DEPTH_COMPONENT32F:v===bs&&(P=n.DEPTH_COMPONENT16),P}function S(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==un&&E.minFilter!==Mn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function I(E){const v=E.target;v.removeEventListener("dispose",I),R(v),v.isVideoTexture&&u.delete(v)}function C(E){const v=E.target;v.removeEventListener("dispose",C),ie(v)}function R(E){const v=i.get(E);if(v.__webglInit===void 0)return;const P=E.source,X=f.get(P);if(X){const k=X[v.__cacheKey];k.usedTimes--,k.usedTimes===0&&D(E),Object.keys(X).length===0&&f.delete(P)}i.remove(E)}function D(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const P=E.source,X=f.get(P);delete X[v.__cacheKey],o.memory.textures--}function ie(E){const v=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let k=0;k<v.__webglFramebuffer[X].length;k++)n.deleteFramebuffer(v.__webglFramebuffer[X][k]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const P=E.textures;for(let X=0,k=P.length;X<k;X++){const V=i.get(P[X]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(P[X])}i.remove(E)}let x=0;function w(){x=0}function q(){const E=x;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),x+=1,E}function z(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function J(E,v){const P=i.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){const X=E.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(P,E,v);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+v)}function se(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){Pe(P,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+v)}function G(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){Pe(P,E,v);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+v)}function $(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){ee(P,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+v)}const O={[wl]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[bl]:n.MIRRORED_REPEAT},de={[un]:n.NEAREST,[x_]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[_a]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},pe={[E_]:n.NEVER,[C_]:n.ALWAYS,[w_]:n.LESS,[Rd]:n.LEQUAL,[b_]:n.EQUAL,[R_]:n.GEQUAL,[T_]:n.GREATER,[A_]:n.NOTEQUAL};function ge(E,v){if(v.type===ei&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Mn||v.magFilter===_a||v.magFilter===Xs||v.magFilter===$i||v.minFilter===Mn||v.minFilter===_a||v.minFilter===Xs||v.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,O[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,O[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,O[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===un||v.minFilter!==Xs&&v.minFilter!==$i||v.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Se(E,v){let P=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",I));const X=v.source;let k=f.get(X);k===void 0&&(k={},f.set(X,k));const V=z(v);if(V!==E.__cacheKey){k[V]===void 0&&(k[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),k[V].usedTimes++;const ue=k[E.__cacheKey];ue!==void 0&&(k[E.__cacheKey].usedTimes--,ue.usedTimes===0&&D(v)),E.__cacheKey=V,E.__webglTexture=k[V].texture}return P}function Pe(E,v,P){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const k=Se(E,v),V=v.source;t.bindTexture(X,E.__webglTexture,n.TEXTURE0+P);const ue=i.get(V);if(V.version!==ue.__version||k===!0){t.activeTexture(n.TEXTURE0+P);const ce=et.getPrimaries(et.workingColorSpace),ve=v.colorSpace===Mi?null:et.getPrimaries(v.colorSpace),be=v.colorSpace===Mi||ce===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let _e=y(v.image,!1,r.maxTextureSize);_e=Z(v,_e);const Me=s.convert(v.format,v.colorSpace),Fe=s.convert(v.type);let Ue=b(v.internalFormat,Me,Fe,v.colorSpace,v.isVideoTexture);ge(X,v);let Te;const Ye=v.mipmaps,Oe=v.isVideoTexture!==!0,$e=ue.__version===void 0||k===!0,B=V.dataReady,Le=S(v,_e);if(v.isDepthTexture)Ue=M(v.format===Gr,v.type),$e&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Ue,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Ue,_e.width,_e.height,0,Me,Fe,null));else if(v.isDataTexture)if(Ye.length>0){Oe&&$e&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,Ye[0].width,Ye[0].height);for(let ae=0,me=Ye.length;ae<me;ae++)Te=Ye[ae],Oe?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Te.width,Te.height,Me,Fe,Te.data):t.texImage2D(n.TEXTURE_2D,ae,Ue,Te.width,Te.height,0,Me,Fe,Te.data);v.generateMipmaps=!1}else Oe?($e&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,_e.width,_e.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e.width,_e.height,Me,Fe,_e.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,_e.width,_e.height,0,Me,Fe,_e.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Oe&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ue,Ye[0].width,Ye[0].height,_e.depth);for(let ae=0,me=Ye.length;ae<me;ae++)if(Te=Ye[ae],v.format!==wn)if(Me!==null)if(Oe){if(B)if(v.layerUpdates.size>0){const Ae=kh(Te.width,Te.height,v.format,v.type);for(const Ie of v.layerUpdates){const Ke=Te.data.subarray(Ie*Ae/Te.data.BYTES_PER_ELEMENT,(Ie+1)*Ae/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Ie,Te.width,Te.height,1,Me,Ke,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Te.width,Te.height,_e.depth,Me,Te.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ue,Te.width,Te.height,_e.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Te.width,Te.height,_e.depth,Me,Fe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ue,Te.width,Te.height,_e.depth,0,Me,Fe,Te.data)}else{Oe&&$e&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,Ye[0].width,Ye[0].height);for(let ae=0,me=Ye.length;ae<me;ae++)Te=Ye[ae],v.format!==wn?Me!==null?Oe?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Te.width,Te.height,Me,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Te.width,Te.height,Me,Fe,Te.data):t.texImage2D(n.TEXTURE_2D,ae,Ue,Te.width,Te.height,0,Me,Fe,Te.data)}else if(v.isDataArrayTexture)if(Oe){if($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ue,_e.width,_e.height,_e.depth),B)if(v.layerUpdates.size>0){const ae=kh(_e.width,_e.height,v.format,v.type);for(const me of v.layerUpdates){const Ae=_e.data.subarray(me*ae/_e.data.BYTES_PER_ELEMENT,(me+1)*ae/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,_e.width,_e.height,1,Me,Fe,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Me,Fe,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,_e.width,_e.height,_e.depth,0,Me,Fe,_e.data);else if(v.isData3DTexture)Oe?($e&&t.texStorage3D(n.TEXTURE_3D,Le,Ue,_e.width,_e.height,_e.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Me,Fe,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,_e.width,_e.height,_e.depth,0,Me,Fe,_e.data);else if(v.isFramebufferTexture){if($e)if(Oe)t.texStorage2D(n.TEXTURE_2D,Le,Ue,_e.width,_e.height);else{let ae=_e.width,me=_e.height;for(let Ae=0;Ae<Le;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ue,ae,me,0,Me,Fe,null),ae>>=1,me>>=1}}else if(Ye.length>0){if(Oe&&$e){const ae=te(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ue,ae.width,ae.height)}for(let ae=0,me=Ye.length;ae<me;ae++)Te=Ye[ae],Oe?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Me,Fe,Te):t.texImage2D(n.TEXTURE_2D,ae,Ue,Me,Fe,Te);v.generateMipmaps=!1}else if(Oe){if($e){const ae=te(_e);t.texStorage2D(n.TEXTURE_2D,Le,Ue,ae.width,ae.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Fe,_e)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Me,Fe,_e);m(v)&&p(X),ue.__version=V.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ee(E,v,P){if(v.image.length!==6)return;const X=Se(E,v),k=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+P);const V=i.get(k);if(k.version!==V.__version||X===!0){t.activeTexture(n.TEXTURE0+P);const ue=et.getPrimaries(et.workingColorSpace),ce=v.colorSpace===Mi?null:et.getPrimaries(v.colorSpace),ve=v.colorSpace===Mi||ue===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,_e=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let me=0;me<6;me++)!be&&!_e?Me[me]=y(v.image[me],!0,r.maxCubemapSize):Me[me]=_e?v.image[me].image:v.image[me],Me[me]=Z(v,Me[me]);const Fe=Me[0],Ue=s.convert(v.format,v.colorSpace),Te=s.convert(v.type),Ye=b(v.internalFormat,Ue,Te,v.colorSpace),Oe=v.isVideoTexture!==!0,$e=V.__version===void 0||X===!0,B=k.dataReady;let Le=S(v,Fe);ge(n.TEXTURE_CUBE_MAP,v);let ae;if(be){Oe&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Ye,Fe.width,Fe.height);for(let me=0;me<6;me++){ae=Me[me].mipmaps;for(let Ae=0;Ae<ae.length;Ae++){const Ie=ae[Ae];v.format!==wn?Ue!==null?Oe?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,Ye,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,0,0,Ie.width,Ie.height,Ue,Te,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,Ye,Ie.width,Ie.height,0,Ue,Te,Ie.data)}}}else{if(ae=v.mipmaps,Oe&&$e){ae.length>0&&Le++;const me=te(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Ye,me.width,me.height)}for(let me=0;me<6;me++)if(_e){Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Me[me].width,Me[me].height,Ue,Te,Me[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ye,Me[me].width,Me[me].height,0,Ue,Te,Me[me].data);for(let Ae=0;Ae<ae.length;Ae++){const Ke=ae[Ae].image[me].image;Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,0,0,Ke.width,Ke.height,Ue,Te,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,Ye,Ke.width,Ke.height,0,Ue,Te,Ke.data)}}else{Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ue,Te,Me[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ye,Ue,Te,Me[me]);for(let Ae=0;Ae<ae.length;Ae++){const Ie=ae[Ae];Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,0,0,Ue,Te,Ie.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,Ye,Ue,Te,Ie.image[me])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),V.__version=k.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function fe(E,v,P,X,k,V){const ue=s.convert(P.format,P.colorSpace),ce=s.convert(P.type),ve=b(P.internalFormat,ue,ce,P.colorSpace);if(!i.get(v).__hasExternalTextures){const _e=Math.max(1,v.width>>V),Me=Math.max(1,v.height>>V);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,V,ve,_e,Me,v.depth,0,ue,ce,null):t.texImage2D(k,V,ve,_e,Me,0,ue,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,k,i.get(P).__webglTexture,0,L(v)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,k,i.get(P).__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(E,v,P){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const X=v.depthTexture,k=X&&X.isDepthTexture?X.type:null,V=M(v.stencilBuffer,k),ue=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=L(v);F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,V,v.width,v.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,V,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,V,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,E)}else{const X=v.textures;for(let k=0;k<X.length;k++){const V=X[k],ue=s.convert(V.format,V.colorSpace),ce=s.convert(V.type),ve=b(V.internalFormat,ue,ce,V.colorSpace),be=L(v);P&&F(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ve,v.width,v.height):F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const X=i.get(v.depthTexture).__webglTexture,k=L(v);if(v.depthTexture.format===Pr)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(v.depthTexture.format===Gr)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function oe(E){const v=i.get(E),P=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const X=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const k=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",k)};X.addEventListener("dispose",k),v.__depthDisposeCallback=k}v.__boundDepthTexture=X}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");U(v.__webglFramebuffer,E)}else if(P){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),he(v.__webglDepthbuffer[X],E,!1);else{const k=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,V)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),he(v.__webglDepthbuffer,E,!1);else{const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,k)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(E,v,P){const X=i.get(E);v!==void 0&&fe(X.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&oe(E)}function le(E){const v=E.texture,P=i.get(E),X=i.get(v);E.addEventListener("dispose",C);const k=E.textures,V=E.isWebGLCubeRenderTarget===!0,ue=k.length>1;if(ue||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,o.memory.textures++),V){P.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[ce]=[];for(let ve=0;ve<v.mipmaps.length;ve++)P.__webglFramebuffer[ce][ve]=n.createFramebuffer()}else P.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)P.__webglFramebuffer[ce]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(ue)for(let ce=0,ve=k.length;ce<ve;ce++){const be=i.get(k[ce]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&F(E)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ce=0;ce<k.length;ce++){const ve=k[ce];P.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ce]);const be=s.convert(ve.format,ve.colorSpace),_e=s.convert(ve.type),Me=b(ve.internalFormat,be,_e,ve.colorSpace,E.isXRRenderTarget===!0),Fe=L(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,P.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),he(P.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ge(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)fe(P.__webglFramebuffer[ce][ve],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else fe(P.__webglFramebuffer[ce],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ce=0,ve=k.length;ce<ve;ce++){const be=k[ce],_e=i.get(be);t.bindTexture(n.TEXTURE_2D,_e.__webglTexture),ge(n.TEXTURE_2D,be),fe(P.__webglFramebuffer,E,be,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(be)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,X.__webglTexture),ge(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)fe(P.__webglFramebuffer[ve],E,v,n.COLOR_ATTACHMENT0,ce,ve);else fe(P.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,ce,0);m(v)&&p(ce),t.unbindTexture()}E.depthBuffer&&oe(E)}function xe(E){const v=E.textures;for(let P=0,X=v.length;P<X;P++){const k=v[P];if(m(k)){const V=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(k).__webglTexture;t.bindTexture(V,ue),p(V),t.unbindTexture()}}}const Q=[],g=[];function T(E){if(E.samples>0){if(F(E)===!1){const v=E.textures,P=E.width,X=E.height;let k=n.COLOR_BUFFER_BIT;const V=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(E),ce=v.length>1;if(ce)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);const be=i.get(v[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,P,X,0,0,P,X,k,n.NEAREST),l===!0&&(Q.length=0,g.length=0,Q.push(n.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Q.push(V),g.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);const be=i.get(v[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(E){return Math.min(r.maxSamples,E.samples)}function F(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Z(E,v){const P=E.colorSpace,X=E.format,k=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||P!==Pi&&P!==Mi&&(et.getTransfer(P)===ct?(X!==wn||k!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),v}function te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=w,this.setTexture2D=J,this.setTexture2DArray=se,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=j,this.setupRenderTarget=le,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=F}function jS(n,e){function t(i,r=Mi){let s;const o=et.getTransfer(r);if(i===ri)return n.UNSIGNED_BYTE;if(i===Pc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_d)return n.BYTE;if(i===vd)return n.SHORT;if(i===bs)return n.UNSIGNED_SHORT;if(i===Cc)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===Ds)return n.HALF_FLOAT;if(i===yd)return n.ALPHA;if(i===Md)return n.RGB;if(i===wn)return n.RGBA;if(i===Sd)return n.LUMINANCE;if(i===Ed)return n.LUMINANCE_ALPHA;if(i===Pr)return n.DEPTH_COMPONENT;if(i===Gr)return n.DEPTH_STENCIL;if(i===wd)return n.RED;if(i===Ic)return n.RED_INTEGER;if(i===bd)return n.RG;if(i===Dc)return n.RG_INTEGER;if(i===Uc)return n.RGBA_INTEGER;if(i===xo||i===yo||i===Mo||i===So)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===Al||i===Rl||i===Cl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Tl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pl||i===Ll||i===Il)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pl||i===Ll)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Il)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dl||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===zl||i===Hl||i===Gl||i===kl||i===Vl||i===Wl||i===Xl||i===ql)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Dl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ul)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===Yl||i===$l)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eo)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Td||i===Kl||i===jl||i===Zl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ZS extends mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yt extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JS={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eE=`
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

}`;class tE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xt({vertexShader:QS,fragmentShader:eE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nE extends Wr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const y=new tE,m=t.getContextAttributes();let p=null,b=null;const M=[],S=[],I=new we;let C=null;const R=new mt;R.layers.enable(1),R.viewport=new st;const D=new mt;D.layers.enable(2),D.viewport=new st;const ie=[R,D],x=new ZS;x.layers.enable(1),x.layers.enable(2);let w=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=M[ee];return fe===void 0&&(fe=new Xa,M[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=M[ee];return fe===void 0&&(fe=new Xa,M[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=M[ee];return fe===void 0&&(fe=new Xa,M[ee]=fe),fe.getHandSpace()};function z(ee){const fe=S.indexOf(ee.inputSource);if(fe===-1)return;const he=M[fe];he!==void 0&&(he.update(ee.inputSource,ee.frame,c||o),he.dispatchEvent({type:ee.type,data:ee.inputSource}))}function J(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",se);for(let ee=0;ee<M.length;ee++){const fe=S[ee];fe!==null&&(S[ee]=null,M[ee].disconnect(fe))}w=null,q=null,y.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,b=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",J),r.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Qi(d.framebufferWidth,d.framebufferHeight,{format:wn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,he=null,U=null;m.depth&&(U=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Gr:Pr,he=m.stencil?Hr:Ji);const oe={colorFormat:t.RGBA8,depthFormat:U,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Qi(f.textureWidth,f.textureHeight,{format:wn,type:ri,depthTexture:new Gd(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function se(ee){for(let fe=0;fe<ee.removed.length;fe++){const he=ee.removed[fe],U=S.indexOf(he);U>=0&&(S[U]=null,M[U].disconnect(he))}for(let fe=0;fe<ee.added.length;fe++){const he=ee.added[fe];let U=S.indexOf(he);if(U===-1){for(let j=0;j<M.length;j++)if(j>=S.length){S.push(he),U=j;break}else if(S[j]===null){S[j]=he,U=j;break}if(U===-1)break}const oe=M[U];oe&&oe.connect(he)}}const G=new H,$=new H;function O(ee,fe,he){G.setFromMatrixPosition(fe.matrixWorld),$.setFromMatrixPosition(he.matrixWorld);const U=G.distanceTo($),oe=fe.projectionMatrix.elements,j=he.projectionMatrix.elements,le=oe[14]/(oe[10]-1),xe=oe[14]/(oe[10]+1),Q=(oe[9]+1)/oe[5],g=(oe[9]-1)/oe[5],T=(oe[8]-1)/oe[0],L=(j[8]+1)/j[0],F=le*T,N=le*L,Z=U/(-T+L),te=Z*-T;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(te),ee.translateZ(Z),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),oe[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const E=le+Z,v=xe+Z,P=F-te,X=N+(U-te),k=Q*xe/v*E,V=g*xe/v*E;ee.projectionMatrix.makePerspective(P,X,k,V,E,v),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function de(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let fe=ee.near,he=ee.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(he=y.depthFar)),x.near=D.near=R.near=fe,x.far=D.far=R.far=he,(w!==x.near||q!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,q=x.far);const U=ee.parent,oe=x.cameras;de(x,U);for(let j=0;j<oe.length;j++)de(oe[j],U);oe.length===2?O(x,R,D):x.projectionMatrix.copy(R.projectionMatrix),pe(ee,x,U)};function pe(ee,fe,he){he===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(he.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ts*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let ge=null;function Se(ee,fe){if(u=fe.getViewerPose(c||o),_=fe,u!==null){const he=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let U=!1;he.length!==x.cameras.length&&(x.cameras.length=0,U=!0);for(let j=0;j<he.length;j++){const le=he[j];let xe=null;if(d!==null)xe=d.getViewport(le);else{const g=h.getViewSubImage(f,le);xe=g.viewport,j===0&&(e.setRenderTargetTextures(b,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(b))}let Q=ie[j];Q===void 0&&(Q=new mt,Q.layers.enable(j),Q.viewport=new st,ie[j]=Q),Q.matrix.fromArray(le.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(le.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(xe.x,xe.y,xe.width,xe.height),j===0&&(x.matrix.copy(Q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),U===!0&&x.cameras.push(Q)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const j=h.getDepthInformation(he[0]);j&&j.isValid&&j.texture&&y.init(e,j,r.renderState)}}for(let he=0;he<M.length;he++){const U=S[he],oe=M[he];U!==null&&oe!==void 0&&oe.update(U,fe,c||o)}ge&&ge(ee,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Pe=new zd;Pe.setAnimationLoop(Se),this.setAnimationLoop=function(ee){ge=ee},this.dispose=function(){}}}const Gi=new Bn,iE=new ht;function rE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Fd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,S=b.envMapRotation;M&&(m.envMap.value=M,Gi.copy(S),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(iE.makeRotationFromEuler(Gi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const S=M.program;i.uniformBlockBinding(b,S)}function c(b,M){let S=r[b.id];S===void 0&&(_(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",m));const I=M.program;i.updateUBOMapping(b,I);const C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function u(b){const M=h();b.__bindingPointIndex=M;const S=n.createBuffer(),I=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=r[b.id],S=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,R=S.length;C<R;C++){const D=Array.isArray(S[C])?S[C]:[S[C]];for(let ie=0,x=D.length;ie<x;ie++){const w=D[ie];if(d(w,C,ie,I)===!0){const q=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let J=0;for(let se=0;se<z.length;se++){const G=z[se],$=y(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,q+J,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,J),J+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,M,S,I){const C=b.value,R=M+"_"+S;if(I[R]===void 0)return typeof C=="number"||typeof C=="boolean"?I[R]=C:I[R]=C.clone(),!0;{const D=I[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return I[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(b){const M=b.uniforms;let S=0;const I=16;for(let R=0,D=M.length;R<D;R++){const ie=Array.isArray(M[R])?M[R]:[M[R]];for(let x=0,w=ie.length;x<w;x++){const q=ie[x],z=Array.isArray(q.value)?q.value:[q.value];for(let J=0,se=z.length;J<se;J++){const G=z[J],$=y(G),O=S%I,de=O%$.boundary,pe=O+de;S+=de,pe!==0&&I-pe<$.storage&&(S+=I-pe),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=$.storage}}}const C=S%I;return C>0&&(S+=I-C),b.__size=S,b.__cache={},this}function y(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class oi{constructor(e={}){const{canvas:t=q_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=In,this.toneMapping=Ei,this.toneMappingExposure=1;const M=this;let S=!1,I=0,C=0,R=null,D=-1,ie=null;const x=new st,w=new st;let q=null;const z=new ke(0);let J=0,se=t.width,G=t.height,$=1,O=null,de=null;const pe=new st(0,0,se,G),ge=new st(0,0,se,G);let Se=!1;const Pe=new Bc;let ee=!1,fe=!1;const he=new ht,U=new ht,oe=new H,j=new st,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Q(){return R===null?$:1}let g=i;function T(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rc}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),g===null){const W="webgl2";if(g=T(W,A),g===null)throw T(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,F,N,Z,te,E,v,P,X,k,V,ue,ce,ve,be,_e,Me,Fe,Ue,Te,Ye,Oe,$e,B;function Le(){L=new hM(g),L.init(),Oe=new jS(g,L),F=new sM(g,L,e,Oe),N=new YS(g),F.reverseDepthBuffer&&N.buffers.depth.setReversed(!0),Z=new pM(g),te=new IS,E=new KS(g,L,N,te,F,Oe,Z),v=new aM(M),P=new uM(M),X=new Mv(g),$e=new iM(g,X),k=new fM(g,X,Z,$e),V=new gM(g,k,X,Z),Ue=new mM(g,F,E),_e=new oM(te),ue=new LS(M,v,P,L,F,$e,_e),ce=new rE(M,te),ve=new US,be=new HS(L),Fe=new nM(M,v,P,N,V,f,l),Me=new XS(M,V,F),B=new sE(g,Z,F,N),Te=new rM(g,L,Z),Ye=new dM(g,L,Z),Z.programs=ue.programs,M.capabilities=F,M.extensions=L,M.properties=te,M.renderLists=ve,M.shadowMap=Me,M.state=N,M.info=Z}Le();const ae=new nE(M,g);this.xr=ae,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(se,G,!1))},this.getSize=function(A){return A.set(se,G)},this.setSize=function(A,W,ne=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,G=W,t.width=Math.floor(A*$),t.height=Math.floor(W*$),ne===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(se*$,G*$).floor()},this.setDrawingBufferSize=function(A,W,ne){se=A,G=W,$=ne,t.width=Math.floor(A*ne),t.height=Math.floor(W*ne),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(pe)},this.setViewport=function(A,W,ne,re){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,W,ne,re),N.viewport(x.copy(pe).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,W,ne,re){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,W,ne,re),N.scissor(w.copy(ge).multiplyScalar($).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(A){N.setScissorTest(Se=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){de=A},this.getClearColor=function(A){return A.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(A=!0,W=!0,ne=!0){let re=0;if(A){let Y=!1;if(R!==null){const ye=R.texture.format;Y=ye===Uc||ye===Dc||ye===Ic}if(Y){const ye=R.texture.type,Re=ye===ri||ye===Ji||ye===bs||ye===Hr||ye===Pc||ye===Lc,De=Fe.getClearColor(),Ne=Fe.getClearAlpha(),He=De.r,Ge=De.g,Be=De.b;Re?(d[0]=He,d[1]=Ge,d[2]=Be,d[3]=Ne,g.clearBufferuiv(g.COLOR,0,d)):(_[0]=He,_[1]=Ge,_[2]=Be,_[3]=Ne,g.clearBufferiv(g.COLOR,0,_))}else re|=g.COLOR_BUFFER_BIT}W&&(re|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ne&&(re|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ve.dispose(),be.dispose(),te.dispose(),v.dispose(),P.dispose(),V.dispose(),$e.dispose(),B.dispose(),ue.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Wc),ae.removeEventListener("sessionend",Xc),Di.stop()};function me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Z.autoReset,W=Me.enabled,ne=Me.autoUpdate,re=Me.needsUpdate,Y=Me.type;Le(),Z.autoReset=A,Me.enabled=W,Me.autoUpdate=ne,Me.needsUpdate=re,Me.type=Y}function Ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ke(A){const W=A.target;W.removeEventListener("dispose",Ke),_t(W)}function _t(A){Wt(A),te.remove(A)}function Wt(A){const W=te.get(A).programs;W!==void 0&&(W.forEach(function(ne){ue.releaseProgram(ne)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ne,re,Y,ye){W===null&&(W=le);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,De=up(A,W,ne,re,Y);N.setMaterial(re,Re);let Ne=ne.index,He=1;if(re.wireframe===!0){if(Ne=k.getWireframeAttribute(ne),Ne===void 0)return;He=2}const Ge=ne.drawRange,Be=ne.attributes.position;let nt=Ge.start*He,lt=(Ge.start+Ge.count)*He;ye!==null&&(nt=Math.max(nt,ye.start*He),lt=Math.min(lt,(ye.start+ye.count)*He)),Ne!==null?(nt=Math.max(nt,0),lt=Math.min(lt,Ne.count)):Be!=null&&(nt=Math.max(nt,0),lt=Math.min(lt,Be.count));const dt=lt-nt;if(dt<0||dt===1/0)return;$e.setup(Y,re,De,ne,Ne);let Zt,Ze=Te;if(Ne!==null&&(Zt=X.get(Ne),Ze=Ye,Ze.setIndex(Zt)),Y.isMesh)re.wireframe===!0?(N.setLineWidth(re.wireframeLinewidth*Q()),Ze.setMode(g.LINES)):Ze.setMode(g.TRIANGLES);else if(Y.isLine){let ze=re.linewidth;ze===void 0&&(ze=1),N.setLineWidth(ze*Q()),Y.isLineSegments?Ze.setMode(g.LINES):Y.isLineLoop?Ze.setMode(g.LINE_LOOP):Ze.setMode(g.LINE_STRIP)}else Y.isPoints?Ze.setMode(g.POINTS):Y.isSprite&&Ze.setMode(g.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ze.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))Ze.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ze=Y._multiDrawStarts,Rt=Y._multiDrawCounts,Je=Y._multiDrawCount,mn=Ne?X.get(Ne).bytesPerElement:1,rr=te.get(re).currentProgram.getUniforms();for(let Jt=0;Jt<Je;Jt++)rr.setValue(g,"_gl_DrawID",Jt),Ze.render(ze[Jt]/mn,Rt[Jt])}else if(Y.isInstancedMesh)Ze.renderInstances(nt,dt,Y.count);else if(ne.isInstancedBufferGeometry){const ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Rt=Math.min(ne.instanceCount,ze);Ze.renderInstances(nt,dt,Rt)}else Ze.render(nt,dt)};function je(A,W,ne){A.transparent===!0&&A.side===Qn&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,Bs(A,W,ne),A.side=Ti,A.needsUpdate=!0,Bs(A,W,ne),A.side=Qn):Bs(A,W,ne)}this.compile=function(A,W,ne=null){ne===null&&(ne=A),m=be.get(ne),m.init(W),b.push(m),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),A!==ne&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights();const re=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ye=Y.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const De=ye[Re];je(De,ne,Y),re.add(De)}else je(ye,ne,Y),re.add(ye)}),b.pop(),m=null,re},this.compileAsync=function(A,W,ne=null){const re=this.compile(A,W,ne);return new Promise(Y=>{function ye(){if(re.forEach(function(Re){te.get(Re).currentProgram.isReady()&&re.delete(Re)}),re.size===0){Y(A);return}setTimeout(ye,10)}L.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Xt=null;function Gn(A){Xt&&Xt(A)}function Wc(){Di.stop()}function Xc(){Di.start()}const Di=new zd;Di.setAnimationLoop(Gn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(A){Xt=A,ae.setAnimationLoop(A),A===null?Di.stop():Di.start()},ae.addEventListener("sessionstart",Wc),ae.addEventListener("sessionend",Xc),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(W),W=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,W,R),m=be.get(A,b.length),m.init(W),b.push(m),U.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Pe.setFromProjectionMatrix(U),fe=this.localClippingEnabled,ee=_e.init(this.clippingPlanes,fe),y=ve.get(A,p.length),y.init(),p.push(y),ae.enabled===!0&&ae.isPresenting===!0){const ye=M.xr.getDepthSensingMesh();ye!==null&&Qo(ye,W,-1/0,M.sortObjects)}Qo(A,W,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(O,de),xe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,xe&&Fe.addToRenderList(y,A),this.info.render.frame++,ee===!0&&_e.beginShadows();const ne=m.state.shadowsArray;Me.render(ne,A,W),ee===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,Y=y.transmissive;if(m.setupLights(),W.isArrayCamera){const ye=W.cameras;if(Y.length>0)for(let Re=0,De=ye.length;Re<De;Re++){const Ne=ye[Re];Yc(re,Y,A,Ne)}xe&&Fe.render(A);for(let Re=0,De=ye.length;Re<De;Re++){const Ne=ye[Re];qc(y,A,Ne,Ne.viewport)}}else Y.length>0&&Yc(re,Y,A,W),xe&&Fe.render(A),qc(y,A,W);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(M,A,W),$e.resetDefaultState(),D=-1,ie=null,b.pop(),b.length>0?(m=b[b.length-1],ee===!0&&_e.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Qo(A,W,ne,re){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pe.intersectsSprite(A)){re&&j.setFromMatrixPosition(A.matrixWorld).applyMatrix4(U);const Re=V.update(A),De=A.material;De.visible&&y.push(A,Re,De,ne,j.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pe.intersectsObject(A))){const Re=V.update(A),De=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),j.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),j.copy(Re.boundingSphere.center)),j.applyMatrix4(A.matrixWorld).applyMatrix4(U)),Array.isArray(De)){const Ne=Re.groups;for(let He=0,Ge=Ne.length;He<Ge;He++){const Be=Ne[He],nt=De[Be.materialIndex];nt&&nt.visible&&y.push(A,Re,nt,ne,j.z,Be)}}else De.visible&&y.push(A,Re,De,ne,j.z,null)}}const ye=A.children;for(let Re=0,De=ye.length;Re<De;Re++)Qo(ye[Re],W,ne,re)}function qc(A,W,ne,re){const Y=A.opaque,ye=A.transmissive,Re=A.transparent;m.setupLightsView(ne),ee===!0&&_e.setGlobalState(M.clippingPlanes,ne),re&&N.viewport(x.copy(re)),Y.length>0&&Os(Y,W,ne),ye.length>0&&Os(ye,W,ne),Re.length>0&&Os(Re,W,ne),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Yc(A,W,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[re.id]===void 0&&(m.state.transmissionRenderTarget[re.id]=new Qi(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Ds:ri,minFilter:$i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ye=m.state.transmissionRenderTarget[re.id],Re=re.viewport||x;ye.setSize(Re.z,Re.w);const De=M.getRenderTarget();M.setRenderTarget(ye),M.getClearColor(z),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),xe&&Fe.render(ne);const Ne=M.toneMapping;M.toneMapping=Ei;const He=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),m.setupLightsView(re),ee===!0&&_e.setGlobalState(M.clippingPlanes,re),Os(A,ne,re),E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye),L.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Be=0,nt=W.length;Be<nt;Be++){const lt=W[Be],dt=lt.object,Zt=lt.geometry,Ze=lt.material,ze=lt.group;if(Ze.side===Qn&&dt.layers.test(re.layers)){const Rt=Ze.side;Ze.side=Yt,Ze.needsUpdate=!0,$c(dt,ne,re,Zt,Ze,ze),Ze.side=Rt,Ze.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye))}M.setRenderTarget(De),M.setClearColor(z,J),He!==void 0&&(re.viewport=He),M.toneMapping=Ne}function Os(A,W,ne){const re=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,ye=A.length;Y<ye;Y++){const Re=A[Y],De=Re.object,Ne=Re.geometry,He=re===null?Re.material:re,Ge=Re.group;De.layers.test(ne.layers)&&$c(De,W,ne,Ne,He,Ge)}}function $c(A,W,ne,re,Y,ye){A.onBeforeRender(M,W,ne,re,Y,ye),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(M,W,ne,re,A,ye),Y.transparent===!0&&Y.side===Qn&&Y.forceSinglePass===!1?(Y.side=Yt,Y.needsUpdate=!0,M.renderBufferDirect(ne,W,re,Y,A,ye),Y.side=Ti,Y.needsUpdate=!0,M.renderBufferDirect(ne,W,re,Y,A,ye),Y.side=Qn):M.renderBufferDirect(ne,W,re,Y,A,ye),A.onAfterRender(M,W,ne,re,Y,ye)}function Bs(A,W,ne){W.isScene!==!0&&(W=le);const re=te.get(A),Y=m.state.lights,ye=m.state.shadowsArray,Re=Y.state.version,De=ue.getParameters(A,Y.state,ye,W,ne),Ne=ue.getProgramCacheKey(De);let He=re.programs;re.environment=A.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(A.isMeshStandardMaterial?P:v).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",Ke),He=new Map,re.programs=He);let Ge=He.get(Ne);if(Ge!==void 0){if(re.currentProgram===Ge&&re.lightsStateVersion===Re)return jc(A,De),Ge}else De.uniforms=ue.getUniforms(A),A.onBeforeCompile(De,M),Ge=ue.acquireProgram(De,Ne),He.set(Ne,Ge),re.uniforms=De.uniforms;const Be=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=_e.uniform),jc(A,De),re.needsLights=fp(A),re.lightsStateVersion=Re,re.needsLights&&(Be.ambientLightColor.value=Y.state.ambient,Be.lightProbe.value=Y.state.probe,Be.directionalLights.value=Y.state.directional,Be.directionalLightShadows.value=Y.state.directionalShadow,Be.spotLights.value=Y.state.spot,Be.spotLightShadows.value=Y.state.spotShadow,Be.rectAreaLights.value=Y.state.rectArea,Be.ltc_1.value=Y.state.rectAreaLTC1,Be.ltc_2.value=Y.state.rectAreaLTC2,Be.pointLights.value=Y.state.point,Be.pointLightShadows.value=Y.state.pointShadow,Be.hemisphereLights.value=Y.state.hemi,Be.directionalShadowMap.value=Y.state.directionalShadowMap,Be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Be.spotShadowMap.value=Y.state.spotShadowMap,Be.spotLightMatrix.value=Y.state.spotLightMatrix,Be.spotLightMap.value=Y.state.spotLightMap,Be.pointShadowMap.value=Y.state.pointShadowMap,Be.pointShadowMatrix.value=Y.state.pointShadowMatrix),re.currentProgram=Ge,re.uniformsList=null,Ge}function Kc(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=bo.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function jc(A,W){const ne=te.get(A);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function up(A,W,ne,re,Y){W.isScene!==!0&&(W=le),E.resetTextureUnits();const ye=W.fog,Re=re.isMeshStandardMaterial?W.environment:null,De=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Pi,Ne=(re.isMeshStandardMaterial?P:v).get(re.envMap||Re),He=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ge=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Be=!!ne.morphAttributes.position,nt=!!ne.morphAttributes.normal,lt=!!ne.morphAttributes.color;let dt=Ei;re.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(dt=M.toneMapping);const Zt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ze=Zt!==void 0?Zt.length:0,ze=te.get(re),Rt=m.state.lights;if(ee===!0&&(fe===!0||A!==ie)){const an=A===ie&&re.id===D;_e.setState(re,A,an)}let Je=!1;re.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Rt.state.version||ze.outputColorSpace!==De||Y.isBatchedMesh&&ze.batching===!1||!Y.isBatchedMesh&&ze.batching===!0||Y.isBatchedMesh&&ze.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ze.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ze.instancing===!1||!Y.isInstancedMesh&&ze.instancing===!0||Y.isSkinnedMesh&&ze.skinning===!1||!Y.isSkinnedMesh&&ze.skinning===!0||Y.isInstancedMesh&&ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ze.instancingMorph===!1&&Y.morphTexture!==null||ze.envMap!==Ne||re.fog===!0&&ze.fog!==ye||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==_e.numPlanes||ze.numIntersection!==_e.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==Ge||ze.morphTargets!==Be||ze.morphNormals!==nt||ze.morphColors!==lt||ze.toneMapping!==dt||ze.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,ze.__version=re.version);let mn=ze.currentProgram;Je===!0&&(mn=Bs(re,W,Y));let rr=!1,Jt=!1,ea=!1;const pt=mn.getUniforms(),li=ze.uniforms;if(N.useProgram(mn.program)&&(rr=!0,Jt=!0,ea=!0),re.id!==D&&(D=re.id,Jt=!0),rr||ie!==A){F.reverseDepthBuffer?(he.copy(A.projectionMatrix),$_(he),K_(he),pt.setValue(g,"projectionMatrix",he)):pt.setValue(g,"projectionMatrix",A.projectionMatrix),pt.setValue(g,"viewMatrix",A.matrixWorldInverse);const an=pt.map.cameraPosition;an!==void 0&&an.setValue(g,oe.setFromMatrixPosition(A.matrixWorld)),F.logarithmicDepthBuffer&&pt.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&pt.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),ie!==A&&(ie=A,Jt=!0,ea=!0)}if(Y.isSkinnedMesh){pt.setOptional(g,Y,"bindMatrix"),pt.setOptional(g,Y,"bindMatrixInverse");const an=Y.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),pt.setValue(g,"boneTexture",an.boneTexture,E))}Y.isBatchedMesh&&(pt.setOptional(g,Y,"batchingTexture"),pt.setValue(g,"batchingTexture",Y._matricesTexture,E),pt.setOptional(g,Y,"batchingIdTexture"),pt.setValue(g,"batchingIdTexture",Y._indirectTexture,E),pt.setOptional(g,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pt.setValue(g,"batchingColorTexture",Y._colorsTexture,E));const ta=ne.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0)&&Ue.update(Y,ne,mn),(Jt||ze.receiveShadow!==Y.receiveShadow)&&(ze.receiveShadow=Y.receiveShadow,pt.setValue(g,"receiveShadow",Y.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(li.envMap.value=Ne,li.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(li.envMapIntensity.value=W.environmentIntensity),Jt&&(pt.setValue(g,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&hp(li,ea),ye&&re.fog===!0&&ce.refreshFogUniforms(li,ye),ce.refreshMaterialUniforms(li,re,$,G,m.state.transmissionRenderTarget[A.id]),bo.upload(g,Kc(ze),li,E)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(bo.upload(g,Kc(ze),li,E),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&pt.setValue(g,"center",Y.center),pt.setValue(g,"modelViewMatrix",Y.modelViewMatrix),pt.setValue(g,"normalMatrix",Y.normalMatrix),pt.setValue(g,"modelMatrix",Y.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const an=re.uniformsGroups;for(let na=0,dp=an.length;na<dp;na++){const Zc=an[na];B.update(Zc,mn),B.bind(Zc,mn)}}return mn}function hp(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function fp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,W,ne){te.get(A.texture).__webglTexture=W,te.get(A.depthTexture).__webglTexture=ne;const re=te.get(A);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ne===void 0,re.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const ne=te.get(A);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,ne=0){R=A,I=W,C=ne;let re=!0,Y=null,ye=!1,Re=!1;if(A){const Ne=te.get(A);if(Ne.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(g.FRAMEBUFFER,null),re=!1;else if(Ne.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ne.__hasExternalTextures)E.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Be=A.depthTexture;if(Ne.__boundDepthTexture!==Be){if(Be!==null&&te.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Re=!0);const Ge=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[W])?Y=Ge[W][ne]:Y=Ge[W],ye=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?Y=te.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?Y=Ge[ne]:Y=Ge,x.copy(A.viewport),w.copy(A.scissor),q=A.scissorTest}else x.copy(pe).multiplyScalar($).floor(),w.copy(ge).multiplyScalar($).floor(),q=Se;if(N.bindFramebuffer(g.FRAMEBUFFER,Y)&&re&&N.drawBuffers(A,Y),N.viewport(x),N.scissor(w),N.setScissorTest(q),ye){const Ne=te.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ne.__webglTexture,ne)}else if(Re){const Ne=te.get(A.texture),He=W||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ne.__webglTexture,ne||0,He)}D=-1},this.readRenderTargetPixels=function(A,W,ne,re,Y,ye,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){N.bindFramebuffer(g.FRAMEBUFFER,De);try{const Ne=A.texture,He=Ne.format,Ge=Ne.type;if(!F.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-re&&ne>=0&&ne<=A.height-Y&&g.readPixels(W,ne,re,Y,Oe.convert(He),Oe.convert(Ge),ye)}finally{const Ne=R!==null?te.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,W,ne,re,Y,ye,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const Ne=A.texture,He=Ne.format,Ge=Ne.type;if(!F.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-re&&ne>=0&&ne<=A.height-Y){N.bindFramebuffer(g.FRAMEBUFFER,De);const Be=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Be),g.bufferData(g.PIXEL_PACK_BUFFER,ye.byteLength,g.STREAM_READ),g.readPixels(W,ne,re,Y,Oe.convert(He),Oe.convert(Ge),0);const nt=R!==null?te.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,nt);const lt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await Y_(g,lt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Be),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,ye),g.deleteBuffer(Be),g.deleteSync(lt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,ne=0){A.isTexture!==!0&&(wo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const re=Math.pow(2,-ne),Y=Math.floor(A.image.width*re),ye=Math.floor(A.image.height*re),Re=W!==null?W.x:0,De=W!==null?W.y:0;E.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,ne,0,0,Re,De,Y,ye),N.unbindTexture()},this.copyTextureToTexture=function(A,W,ne=null,re=null,Y=0){A.isTexture!==!0&&(wo("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,A=arguments[1],W=arguments[2],Y=arguments[3]||0,ne=null);let ye,Re,De,Ne,He,Ge;ne!==null?(ye=ne.max.x-ne.min.x,Re=ne.max.y-ne.min.y,De=ne.min.x,Ne=ne.min.y):(ye=A.image.width,Re=A.image.height,De=0,Ne=0),re!==null?(He=re.x,Ge=re.y):(He=0,Ge=0);const Be=Oe.convert(W.format),nt=Oe.convert(W.type);E.setTexture2D(W,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,W.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,W.unpackAlignment);const lt=g.getParameter(g.UNPACK_ROW_LENGTH),dt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Zt=g.getParameter(g.UNPACK_SKIP_PIXELS),Ze=g.getParameter(g.UNPACK_SKIP_ROWS),ze=g.getParameter(g.UNPACK_SKIP_IMAGES),Rt=A.isCompressedTexture?A.mipmaps[Y]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Rt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Rt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,De),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ne),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,Y,He,Ge,ye,Re,Be,nt,Rt.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,Y,He,Ge,Rt.width,Rt.height,Be,Rt.data):g.texSubImage2D(g.TEXTURE_2D,Y,He,Ge,ye,Re,Be,nt,Rt),g.pixelStorei(g.UNPACK_ROW_LENGTH,lt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,dt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Zt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ze),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ze),Y===0&&W.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ne=null,re=null,Y=0){A.isTexture!==!0&&(wo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,re=arguments[1]||null,A=arguments[2],W=arguments[3],Y=arguments[4]||0);let ye,Re,De,Ne,He,Ge,Be,nt,lt;const dt=A.isCompressedTexture?A.mipmaps[Y]:A.image;ne!==null?(ye=ne.max.x-ne.min.x,Re=ne.max.y-ne.min.y,De=ne.max.z-ne.min.z,Ne=ne.min.x,He=ne.min.y,Ge=ne.min.z):(ye=dt.width,Re=dt.height,De=dt.depth,Ne=0,He=0,Ge=0),re!==null?(Be=re.x,nt=re.y,lt=re.z):(Be=0,nt=0,lt=0);const Zt=Oe.convert(W.format),Ze=Oe.convert(W.type);let ze;if(W.isData3DTexture)E.setTexture3D(W,0),ze=g.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),ze=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,W.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,W.unpackAlignment);const Rt=g.getParameter(g.UNPACK_ROW_LENGTH),Je=g.getParameter(g.UNPACK_IMAGE_HEIGHT),mn=g.getParameter(g.UNPACK_SKIP_PIXELS),rr=g.getParameter(g.UNPACK_SKIP_ROWS),Jt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,dt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,dt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ne),g.pixelStorei(g.UNPACK_SKIP_ROWS,He),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ge),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(ze,Y,Be,nt,lt,ye,Re,De,Zt,Ze,dt.data):W.isCompressedArrayTexture?g.compressedTexSubImage3D(ze,Y,Be,nt,lt,ye,Re,De,Zt,dt.data):g.texSubImage3D(ze,Y,Be,nt,lt,ye,Re,De,Zt,Ze,dt),g.pixelStorei(g.UNPACK_ROW_LENGTH,Rt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Je),g.pixelStorei(g.UNPACK_SKIP_PIXELS,mn),g.pixelStorei(g.UNPACK_SKIP_ROWS,rr),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Jt),Y===0&&W.generateMipmaps&&g.generateMipmap(ze),N.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),N.unbindTexture()},this.resetState=function(){I=0,C=0,R=null,N.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Nc?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Ko?"display-p3":"srgb"}}class ai extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new we:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new H,r=[],s=[],o=[],a=new H,l=new ht;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(bt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(bt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hc extends zn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new we){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class oE extends Hc{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gc(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const fo=new H,qa=new Gc,Ya=new Gc,$a=new Gc;class aE extends zn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new H){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(fo.subVectors(r[0],r[1]).add(r[0]),c=fo);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(fo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=fo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),qa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,y,m),Ya.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,y,m),$a.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,y,m)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ya.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),$a.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(qa.calc(l),Ya.calc(l),$a.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vh(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function lE(n,e){const t=1-n;return t*t*e}function cE(n,e){return 2*(1-n)*n*e}function uE(n,e){return n*n*e}function gs(n,e,t,i){return lE(n,e)+cE(n,t)+uE(n,i)}function hE(n,e){const t=1-n;return t*t*t*e}function fE(n,e){const t=1-n;return 3*t*t*n*e}function dE(n,e){return 3*(1-n)*n*n*e}function pE(n,e){return n*n*n*e}function _s(n,e,t,i,r){return hE(n,e)+fE(n,t)+dE(n,i)+pE(n,r)}class qd extends zn{constructor(e=new we,t=new we,i=new we,r=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new we){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(_s(e,r.x,s.x,o.x,a.x),_s(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mE extends zn{constructor(e=new H,t=new H,i=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new H){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(_s(e,r.x,s.x,o.x,a.x),_s(e,r.y,s.y,o.y,a.y),_s(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yd extends zn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gE extends zn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $d extends zn{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(gs(e,r.x,s.x,o.x),gs(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _E extends zn{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(gs(e,r.x,s.x,o.x),gs(e,r.y,s.y,o.y),gs(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Vh(a,l.x,c.x,u.x,h.x),Vh(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new we().fromArray(r))}return this}}var Ql=Object.freeze({__proto__:null,ArcCurve:oE,CatmullRomCurve3:aE,CubicBezierCurve:qd,CubicBezierCurve3:mE,EllipseCurve:Hc,LineCurve:Yd,LineCurve3:gE,QuadraticBezierCurve:$d,QuadraticBezierCurve3:_E,SplineCurve:Kd});class vE extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Ql[r.type]().fromJSON(r))}return this}}class ec extends vE{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Yd(this.currentPoint.clone(),new we(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new $d(this.currentPoint.clone(),new we(e,t),new we(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new qd(this.currentPoint.clone(),new we(e,t),new we(i,r),new we(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Kd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Hc(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wi extends Cn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new H,u=new we;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=i+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hn extends Cn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let _=0;const y=[],m=i/2;let p=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(d,2));function b(){const S=new H,I=new H;let C=0;const R=(t-e)/i;for(let D=0;D<=s;D++){const ie=[],x=D/s,w=x*(t-e)+e;for(let q=0;q<=r;q++){const z=q/r,J=z*l+a,se=Math.sin(J),G=Math.cos(J);I.x=w*se,I.y=-x*i+m,I.z=w*G,h.push(I.x,I.y,I.z),S.set(se,R,G).normalize(),f.push(S.x,S.y,S.z),d.push(z,1-x),ie.push(_++)}y.push(ie)}for(let D=0;D<r;D++)for(let ie=0;ie<s;ie++){const x=y[ie][D],w=y[ie+1][D],q=y[ie+1][D+1],z=y[ie][D+1];e>0&&(u.push(x,w,z),C+=3),t>0&&(u.push(w,q,z),C+=3)}c.addGroup(p,C,0),p+=C}function M(S){const I=_,C=new we,R=new H;let D=0;const ie=S===!0?e:t,x=S===!0?1:-1;for(let q=1;q<=r;q++)h.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),_++;const w=_;for(let q=0;q<=r;q++){const J=q/r*l+a,se=Math.cos(J),G=Math.sin(J);R.x=ie*G,R.y=m*x,R.z=ie*se,h.push(R.x,R.y,R.z),f.push(0,x,0),C.x=se*.5+.5,C.y=G*.5*x+.5,d.push(C.x,C.y),_++}for(let q=0;q<r;q++){const z=I+q,J=w+q;S===!0?u.push(J,J+1,z):u.push(J+1,J,z),D+=3}c.addGroup(p,D,S===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kt extends ec{constructor(e){super(e),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ec().fromJSON(r))}return this}}const xE={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=jd(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(i&&(s=wE(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let _=t;_<r;_+=t)h=n[_],f=n[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return As(s,o,t,a,l,d,0),o}};function jd(n,e,t,i,r){let s,o;if(r===NE(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Wh(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Wh(s,n[s],n[s+1],o);return o&&Jo(o,o.next)&&(Cs(o),o=o.next),o}function er(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Jo(t,t.next)||ft(t.prev,t,t.next)===0)){if(Cs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function As(n,e,t,i,r,s,o){if(!n)return;!o&&s&&CE(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?ME(n,i,r,s):yE(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Cs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=SE(er(n),e,t),As(n,e,t,i,r,s,2)):o===2&&EE(n,e,t,i,r,s):As(er(n),e,t,i,r,s,1);break}}}function yE(n){const e=n.prev,t=n,i=n.next;if(ft(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&br(r,a,s,l,o,c,_.x,_.y)&&ft(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ME(n,e,t,i){const r=n.prev,s=n,o=n.next;if(ft(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,y=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=tc(d,_,e,t,i),b=tc(y,m,e,t,i);let M=n.prevZ,S=n.nextZ;for(;M&&M.z>=p&&S&&S.z<=b;){if(M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==r&&M!==o&&br(a,u,l,h,c,f,M.x,M.y)&&ft(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=d&&S.x<=y&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&br(a,u,l,h,c,f,S.x,S.y)&&ft(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==r&&M!==o&&br(a,u,l,h,c,f,M.x,M.y)&&ft(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=b;){if(S.x>=d&&S.x<=y&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&br(a,u,l,h,c,f,S.x,S.y)&&ft(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function SE(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Jo(r,s)&&Zd(r,i,i.next,s)&&Rs(r,s)&&Rs(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Cs(i),Cs(i.next),i=n=s),i=i.next}while(i!==n);return er(i)}function EE(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&IE(o,a)){let l=Jd(o,a);o=er(o,o.next),l=er(l,l.next),As(o,e,t,i,r,s,0),As(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function wE(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=jd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(LE(c));for(r.sort(bE),s=0;s<r.length;s++)t=TE(r[s],t);return t}function bE(n,e){return n.x-e.x}function TE(n,e){const t=AE(n,e);if(!t)return e;const i=Jd(t,n);return er(i,i.next),er(t,t.next)}function AE(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&br(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Rs(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&RE(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function RE(n,e){return ft(n.prev,n,e.prev)<0&&ft(e.next,n,n.next)<0}function CE(n,e,t,i){let r=n;do r.z===0&&(r.z=tc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,PE(r)}function PE(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function tc(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function LE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function br(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function IE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!DE(n,e)&&(Rs(n,e)&&Rs(e,n)&&UE(n,e)&&(ft(n.prev,n,e.prev)||ft(n,e.prev,e))||Jo(n,e)&&ft(n.prev,n,n.next)>0&&ft(e.prev,e,e.next)>0)}function ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Jo(n,e){return n.x===e.x&&n.y===e.y}function Zd(n,e,t,i){const r=mo(ft(n,e,t)),s=mo(ft(n,e,i)),o=mo(ft(t,i,n)),a=mo(ft(t,i,e));return!!(r!==s&&o!==a||r===0&&po(n,t,e)||s===0&&po(n,i,e)||o===0&&po(t,n,i)||a===0&&po(t,e,i))}function po(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function mo(n){return n>0?1:n<0?-1:0}function DE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Zd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Rs(n,e){return ft(n.prev,n,n.next)<0?ft(n,e,n.next)>=0&&ft(n,n.prev,e)>=0:ft(n,e,n.prev)<0||ft(n,n.next,e)<0}function UE(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Jd(n,e){const t=new nc(n.i,n.x,n.y),i=new nc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Wh(n,e,t,i){const r=new nc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Cs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function NE(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ir{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ir.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Xh(e),qh(i,e);let o=e.length;t.forEach(Xh);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,qh(i,t[l]);const a=xE.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Xh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function qh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class sn extends Cn{constructor(e=new Kt([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Tt(r,3)),this.setAttribute("uv",new Tt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:FE;let M,S=!1,I,C,R,D;p&&(M=p.getSpacedPoints(u),S=!0,f=!1,I=p.computeFrenetFrames(u,!1),C=new H,R=new H,D=new H),f||(m=0,d=0,_=0,y=0);const ie=a.extractPoints(c);let x=ie.shape;const w=ie.holes;if(!Ir.isClockWise(x)){x=x.reverse();for(let Q=0,g=w.length;Q<g;Q++){const T=w[Q];Ir.isClockWise(T)&&(w[Q]=T.reverse())}}const z=Ir.triangulateShape(x,w),J=x;for(let Q=0,g=w.length;Q<g;Q++){const T=w[Q];x=x.concat(T)}function se(Q,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(g,T)}const G=x.length,$=z.length;function O(Q,g,T){let L,F,N;const Z=Q.x-g.x,te=Q.y-g.y,E=T.x-Q.x,v=T.y-Q.y,P=Z*Z+te*te,X=Z*v-te*E;if(Math.abs(X)>Number.EPSILON){const k=Math.sqrt(P),V=Math.sqrt(E*E+v*v),ue=g.x-te/k,ce=g.y+Z/k,ve=T.x-v/V,be=T.y+E/V,_e=((ve-ue)*v-(be-ce)*E)/(Z*v-te*E);L=ue+Z*_e-Q.x,F=ce+te*_e-Q.y;const Me=L*L+F*F;if(Me<=2)return new we(L,F);N=Math.sqrt(Me/2)}else{let k=!1;Z>Number.EPSILON?E>Number.EPSILON&&(k=!0):Z<-Number.EPSILON?E<-Number.EPSILON&&(k=!0):Math.sign(te)===Math.sign(v)&&(k=!0),k?(L=-te,F=Z,N=Math.sqrt(P)):(L=Z,F=te,N=Math.sqrt(P/2))}return new we(L/N,F/N)}const de=[];for(let Q=0,g=J.length,T=g-1,L=Q+1;Q<g;Q++,T++,L++)T===g&&(T=0),L===g&&(L=0),de[Q]=O(J[Q],J[T],J[L]);const pe=[];let ge,Se=de.concat();for(let Q=0,g=w.length;Q<g;Q++){const T=w[Q];ge=[];for(let L=0,F=T.length,N=F-1,Z=L+1;L<F;L++,N++,Z++)N===F&&(N=0),Z===F&&(Z=0),ge[L]=O(T[L],T[N],T[Z]);pe.push(ge),Se=Se.concat(ge)}for(let Q=0;Q<m;Q++){const g=Q/m,T=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+y;for(let F=0,N=J.length;F<N;F++){const Z=se(J[F],de[F],L);U(Z.x,Z.y,-T)}for(let F=0,N=w.length;F<N;F++){const Z=w[F];ge=pe[F];for(let te=0,E=Z.length;te<E;te++){const v=se(Z[te],ge[te],L);U(v.x,v.y,-T)}}}const Pe=_+y;for(let Q=0;Q<G;Q++){const g=f?se(x[Q],Se[Q],Pe):x[Q];S?(R.copy(I.normals[0]).multiplyScalar(g.x),C.copy(I.binormals[0]).multiplyScalar(g.y),D.copy(M[0]).add(R).add(C),U(D.x,D.y,D.z)):U(g.x,g.y,0)}for(let Q=1;Q<=u;Q++)for(let g=0;g<G;g++){const T=f?se(x[g],Se[g],Pe):x[g];S?(R.copy(I.normals[Q]).multiplyScalar(T.x),C.copy(I.binormals[Q]).multiplyScalar(T.y),D.copy(M[Q]).add(R).add(C),U(D.x,D.y,D.z)):U(T.x,T.y,h/u*Q)}for(let Q=m-1;Q>=0;Q--){const g=Q/m,T=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+y;for(let F=0,N=J.length;F<N;F++){const Z=se(J[F],de[F],L);U(Z.x,Z.y,h+T)}for(let F=0,N=w.length;F<N;F++){const Z=w[F];ge=pe[F];for(let te=0,E=Z.length;te<E;te++){const v=se(Z[te],ge[te],L);S?U(v.x,v.y+M[u-1].y,M[u-1].x+T):U(v.x,v.y,h+T)}}}ee(),fe();function ee(){const Q=r.length/3;if(f){let g=0,T=G*g;for(let L=0;L<$;L++){const F=z[L];oe(F[2]+T,F[1]+T,F[0]+T)}g=u+m*2,T=G*g;for(let L=0;L<$;L++){const F=z[L];oe(F[0]+T,F[1]+T,F[2]+T)}}else{for(let g=0;g<$;g++){const T=z[g];oe(T[2],T[1],T[0])}for(let g=0;g<$;g++){const T=z[g];oe(T[0]+G*u,T[1]+G*u,T[2]+G*u)}}i.addGroup(Q,r.length/3-Q,0)}function fe(){const Q=r.length/3;let g=0;he(J,g),g+=J.length;for(let T=0,L=w.length;T<L;T++){const F=w[T];he(F,g),g+=F.length}i.addGroup(Q,r.length/3-Q,1)}function he(Q,g){let T=Q.length;for(;--T>=0;){const L=T;let F=T-1;F<0&&(F=Q.length-1);for(let N=0,Z=u+m*2;N<Z;N++){const te=G*N,E=G*(N+1),v=g+L+te,P=g+F+te,X=g+F+E,k=g+L+E;j(v,P,X,k)}}}function U(Q,g,T){l.push(Q),l.push(g),l.push(T)}function oe(Q,g,T){le(Q),le(g),le(T);const L=r.length/3,F=b.generateTopUV(i,r,L-3,L-2,L-1);xe(F[0]),xe(F[1]),xe(F[2])}function j(Q,g,T,L){le(Q),le(g),le(L),le(g),le(T),le(L);const F=r.length/3,N=b.generateSideWallUV(i,r,F-6,F-3,F-2,F-1);xe(N[0]),xe(N[1]),xe(N[3]),xe(N[1]),xe(N[2]),xe(N[3])}function le(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function xe(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return OE(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ql[r.type]().fromJSON(r)),new sn(i,e.options)}}const FE={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new we(s,o),new we(a,l),new we(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],_=e[r*3+2],y=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new we(o,1-l),new we(c,1-h),new we(f,1-_),new we(y,1-p)]:[new we(a,1-l),new we(u,1-h),new we(d,1-_),new we(m,1-p)]}};function OE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ce extends Cn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new H,f=new H,d=[],_=[],y=[],m=[];for(let p=0;p<=i;p++){const b=[],M=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){const C=I/t;h.x=-e*Math.cos(r+C*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(C+S,1-M),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const M=u[p][b+1],S=u[p][b],I=u[p+1][b],C=u[p+1][b+1];(p!==0||o>0)&&d.push(M,S,C),(p!==i-1||l<Math.PI)&&d.push(S,I,C)}this.setIndex(d),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ce(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ps extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ut extends Ps{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Yh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class BE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const zE=new BE;class kc{constructor(e){this.manager=e!==void 0?e:zE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}kc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class HE extends Error{constructor(e,t){super(e),this.response=t}}class GE extends kc{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yh.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:i,onError:r});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Kn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let y=0;const m=new ReadableStream({start(p){b();function b(){h.read().then(({done:M,value:S})=>{if(M)p.close();else{y+=S.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:d});for(let C=0,R=u.length;C<R;C++){const D=u[C];D.onProgress&&D.onProgress(I)}p.enqueue(S),b()}},M=>{p.error(M)})}}});return new Response(m)}else throw new HE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Yh.add(e,c);const u=Kn[e];delete Kn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vc extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ka=new ht,$h=new H,Kh=new H;class Qd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bc,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$h.setFromMatrixPosition(e.matrixWorld),t.position.copy($h),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),Ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jh=new ht,is=new H,ja=new H;class kE extends Qd{constructor(){super(new mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),i.position.copy(is),ja.copy(i.position),ja.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ja),i.updateMatrixWorld(),r.makeTranslation(-is.x,-is.y,-is.z),jh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh)}}class Yr extends Vc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class VE extends Qd{constructor(){super(new Hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Li extends Vc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new VE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ii extends Vc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class WE{constructor(){this.type="ShapePath",this.color=new ke,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ec,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const b=[];for(let M=0,S=p.length;M<S;M++){const I=p[M],C=new Kt;C.curves=I.curves,b.push(C)}return b}function i(p,b){const M=b.length;let S=!1;for(let I=M-1,C=0;C<M;I=C++){let R=b[I],D=b[C],ie=D.x-R.x,x=D.y-R.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(R=b[C],ie=-ie,D=b[I],x=-x),p.y<R.y||p.y>D.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const w=x*(p.x-R.x)-ie*(p.y-R.y);if(w===0)return!0;if(w<0)continue;S=!S}}else{if(p.y!==R.y)continue;if(D.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=D.x)return!0}}return S}const r=Ir.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Kt,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],_=0,y;f[_]=void 0,d[_]=[];for(let p=0,b=s.length;p<b;p++)a=s[p],y=a.getPoints(),o=r(y),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new Kt,p:y},f[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:y[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,b=0;for(let M=0,S=f.length;M<S;M++)h[M]=[];for(let M=0,S=f.length;M<S;M++){const I=d[M];for(let C=0;C<I.length;C++){const R=I[C];let D=!0;for(let ie=0;ie<f.length;ie++)i(R.p,f[ie].p)&&(M!==ie&&b++,D?(D=!1,h[ie].push(R)):p=!0);D&&h[M].push(R)}}b>0&&p===!1&&(d=h)}let m;for(let p=0,b=f.length;p<b;p++){l=f[p].s,c.push(l),m=d[p];for(let M=0,S=m.length;M<S;M++)l.holes.push(m[M].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);class $r extends kc{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new GE(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new XE(e)}}class XE{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=qE(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function qE(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const h=YE(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function YE(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new WE;let a,l,c,u,h,f,d,_;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=y.length;m<p;)switch(y[m++]){case"m":a=y[m++]*e+t,l=y[m++]*e+i,o.moveTo(a,l);break;case"l":a=y[m++]*e+t,l=y[m++]*e+i,o.lineTo(a,l);break;case"q":c=y[m++]*e+t,u=y[m++]*e+i,h=y[m++]*e+t,f=y[m++]*e+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=y[m++]*e+t,u=y[m++]*e+i,h=y[m++]*e+t,f=y[m++]*e+i,d=y[m++]*e+t,_=y[m++]*e+i,o.bezierCurveTo(h,f,d,_,c,u);break}}return{offsetX:s.ha*e,path:o}}class Rn extends sn{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const $E=jt({__name:"PinkBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Mt(null);return fn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.03,o.render(r,s)};const r=new ai,s=new mt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new oi({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Ii(16777215,.6);r.add(a);const l=new Li(16777215,1.5);l.position.set(5,5,5),r.add(l);const c=new Yr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new xt({uniforms:{time:{value:0},color1:{value:new ke(16766720)},color2:{value:new ke(16007990)}},vertexShader:`
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
        `}),h=new ut({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new ut({color:13369344,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99}),d=new yt,_=new Ce(1,32,32),y=new K(_,h);y.scale.set(.85,.85,.8),y.position.y=-.2,d.add(y);const m=new Ce(.6,32,32),p=new K(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const b=new Ce(.25,32,32),M=new K(b,h);M.position.set(-.45,1.35,-.1),d.add(M);const S=new K(b,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new Ce(.25,32,32),C=new K(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new Kt;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ie=new sn(R,D),x=new K(ie,f);x.scale.set(.5,.5,.5),x.position.set(0,.34,.8),x.rotation.y=Math.PI,x.rotation.x=Math.PI,d.add(x);const w=new Ce(.35,32,32),q=new K(w,h);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),d.add(q);const z=new K(w,h);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),d.add(z);const J=new Hn(.2,.22,.6,32),se=new K(J,h);se.position.set(-.4,-1.05,0),d.add(se);const G=new K(J,h);G.position.set(.4,-1.05,0),d.add(G);const $=new Ce(.3,32,32),O=new K($,h);O.scale.set(1,.72,1.5),O.position.set(-.4,-1.45,.17),d.add(O);const de=new K($,h);de.scale.set(1,.72,1.5),de.position.set(.4,-1.45,.17),d.add(de);const pe=new Ce(.44,32,32),ge=new K(pe,h);ge.position.set(-.15,-.45,-.4),d.add(ge);const Se=new K(pe,h);Se.position.set(.15,-.45,-.4),d.add(Se);const Pe=new Ce(.18,32,32),ee=new K(Pe,f);ee.position.set(0,-.35,-.8),d.add(ee),new $r().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(j){const le=new Rn("X",{font:j,size:.2,depth:.05}),xe=new Ot({color:0}),Q=new K(le,xe);Q.position.set(-.34,1,.5),d.add(Q)});const he=new Ce(.1,32,32),U=new Ot({color:0}),oe=new K(he,U);oe.position.set(.2,1.1,.54),d.add(oe),r.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),qt(()=>e.bodyPosition,j=>{d.position.set(j.x,j.y,j.z)}),qt(()=>e.cameraPosition,j=>{s.position.set(e.bodyPosition.x,1,j),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(on(),dn("div",{ref_key:"threeCanvas",ref:t,class:Ai(n.background?"no-bg":"three-canvas")},null,2))}}),ep=pn($E,[["__scopeId","data-v-d0efbfd4"]]),KE=jt({__name:"PurpleBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Mt(null);return fn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.03,o.render(r,s)};const r=new ai,s=new mt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new oi({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Ii(16777215,.6);r.add(a);const l=new Li(16777215,1.5);l.position.set(5,5,5),r.add(l);const c=new Yr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new xt({uniforms:{time:{value:0},color1:{value:new ke(16766720)},color2:{value:new ke(16007990)}},vertexShader:`
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
                    vec3 color = mix(color1, color2, sin(vUv.y * 10.0 + time) * 0.5 + 0.5); // Gradient animation formula
                    gl_FragColor = vec4(color, 1.0); // Set the fragment color
                }
            `}),h=new ut({color:10573288,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});new ut({color:16766720,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99});const f=new ut({color:16766720,metalness:.05,roughness:10,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),d=new yt,_=new Ce(1,32,32),y=new K(_,h);y.scale.set(.85,.85,.8),y.position.y=-.2,d.add(y);const m=new Ce(.6,32,32),p=new K(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const b=new Ce(.25,32,32),M=new K(b,h);M.position.set(-.45,1.35,-.1),d.add(M);const S=new K(b,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new Ce(.25,32,32),C=new K(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new Kt;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ie=new sn(R,D),x=new K(ie,u);x.scale.set(.5,.5,.5),x.position.set(0,.34,.8),x.rotation.y=Math.PI,x.rotation.x=Math.PI,d.add(x);const w=new Ce(.35,32,32),q=new K(w,h);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),d.add(q);const z=new K(w,h);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),d.add(z);const J=new Hn(.2,.22,.6,32),se=new K(J,h);se.position.set(-.4,-1.05,0),d.add(se);const G=new K(J,h);G.position.set(.4,-1.05,0),d.add(G);const $=new Ce(.3,32,32),O=new K($,h);O.scale.set(1,.72,1.5),O.position.set(-.4,-1.45,.17),d.add(O);const de=new K($,h);de.scale.set(1,.72,1.5),de.position.set(.4,-1.45,.17),d.add(de);const pe=new Ce(.44,32,32),ge=new K(pe,h);ge.position.set(-.15,-.45,-.4),d.add(ge);const Se=new K(pe,h);Se.position.set(.15,-.45,-.4),d.add(Se);const Pe=new Ce(.18,32,32),ee=new K(Pe,f);ee.position.set(0,-.35,-.8),d.add(ee),new $r().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(he){const U=new Rn("X",{font:he,size:.2,depth:.05}),oe=new Ot({color:0}),j=new K(U,oe);j.position.set(-.34,1,.5),d.add(j);const le=new Rn("O",{font:he,size:.2,depth:.05}),xe=new Ot({color:0}),Q=new K(le,xe);Q.position.set(.16,1,.53),Q.rotation.y=Ct.degToRad(32),d.add(Q)}),r.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),qt(()=>e.bodyPosition,he=>{d.position.set(he.x,he.y,he.z)}),qt(()=>e.cameraPosition,he=>{s.position.set(e.bodyPosition.x,1,he),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(on(),dn("div",{ref_key:"threeCanvas",ref:t,class:Ai(n.background?"no-bg":"three-canvas")},null,2))}}),tp=pn(KE,[["__scopeId","data-v-46de1bfd"]]),jE=jt({__name:"BlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Mt(null);return fn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.04,o.render(r,s)};const r=new ai,s=new mt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new oi({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Ii(16777215,.6);r.add(a);const l=new Li(16777215,1.2);l.position.set(5,5,5),r.add(l);const c=new Yr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new xt({uniforms:{time:{value:0},color1:{value:new ke(16766720)},color2:{value:new ke(16007990)}},vertexShader:`
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
        `}),h=new ut({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new ut({color:16745921,metalness:.5,roughness:30,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),d=new yt,_=new Ce(1,32,32),y=new K(_,h);y.scale.set(.85,.85,.8),y.position.y=-.2,d.add(y);const m=new Ce(.6,32,32),p=new K(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const b=new Ce(.25,32,32),M=new K(b,h);M.position.set(-.45,1.35,-.1),d.add(M);const S=new K(b,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new Ce(.25,32,32),C=new K(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new Kt;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ie=new sn(R,D),x=new K(ie,f);x.scale.set(.5,.5,.5),x.position.set(0,.34,.8),x.rotation.y=Math.PI,x.rotation.x=Math.PI,d.add(x);const w=new Ce(.35,32,32),q=new K(w,h);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),d.add(q);const z=new K(w,h);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),d.add(z);const J=new Hn(.2,.22,.6,32),se=new K(J,h);se.position.set(-.4,-1.05,0),d.add(se);const G=new K(J,h);G.position.set(.4,-1.05,0),d.add(G);const $=new Ce(.3,32,32),O=new K($,h);O.scale.set(1,.72,1.5),O.position.set(-.4,-1.45,.17),d.add(O);const de=new K($,h);de.scale.set(1,.72,1.5),de.position.set(.4,-1.45,.17),d.add(de);const pe=new Ce(.44,32,32),ge=new K(pe,h);ge.position.set(-.15,-.45,-.4),d.add(ge);const Se=new K(pe,h);Se.position.set(.15,-.45,-.4),d.add(Se);const Pe=new Ce(.18,32,32),ee=new K(Pe,f);ee.position.set(0,-.35,-.8),d.add(ee),new $r().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(he){const U=new Rn("X",{font:he,size:.2,depth:.05}),oe=new Ot({color:0}),j=new K(U,oe);j.position.set(-.34,1,.5),d.add(j);const le=new Rn("X",{font:he,size:.2,depth:.05}),xe=new Ot({color:0}),Q=new K(le,xe);Q.position.set(.16,1,.53),Q.rotation.y=Ct.degToRad(32),d.add(Q)}),r.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),qt(()=>e.bodyPosition,he=>{d.position.set(he.x,he.y,he.z)}),qt(()=>e.cameraPosition,he=>{s.position.set(e.bodyPosition.x,1,he),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(on(),dn("div",{ref_key:"threeCanvas",ref:t,class:Ai(n.background?"no-bg":"three-canvas")},null,2))}}),np=pn(jE,[["__scopeId","data-v-369ed91d"]]),ZE={key:0,class:"bear-face-container"},JE=jt({__name:"BearFace",setup(n){const e=Mt(null),t=Mt(!1),i=()=>{t.value=!0};return fn(()=>{const r=e.value;if(r){r.width=window.innerWidth,r.height=window.innerHeight*.6;const s=r.getContext("2d");s&&(()=>{const a=r.width/2,l=r.height/1.9,c=r.height/2.5,u=r.height/2.58,h=c*.45,f=c*.18,d=c*.3,_=c*.275,y=d*.35,m=d*.32;s.save(),s.beginPath(),s.rect(0,0,r.width/2,r.height),s.clip(),s.lineWidth=15,s.strokeStyle="#000000",s.beginPath(),s.arc(a-c*.85,l-u*.8,h,0,Math.PI*2,!0),s.stroke(),s.beginPath(),s.arc(a+c*.85,l-c*.8,h,0,Math.PI*2,!0),s.stroke(),s.lineWidth=15,s.beginPath(),s.arc(a,l,u,0,Math.PI*2,!0),s.stroke(),s.lineWidth=15,s.beginPath(),s.arc(a-c*.4,l-c*.2,f,0,Math.PI*2,!0),s.stroke(),s.beginPath(),s.moveTo(a+c*.2,l-c*.3),s.lineTo(a+c*.5,l-c*.05),s.moveTo(a+c*.5,l-c*.3),s.lineTo(a+c*.2,l-c*.05),s.stroke(),s.beginPath(),s.ellipse(a,l+c*.4,_*1.5,_,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.arc(a,l+c*.3,m,0,Math.PI*2,!0),s.stroke(),s.restore(),s.save(),s.beginPath(),s.rect(r.width/2,0,r.width/2,r.height),s.clip(),s.fillStyle="#FF69B4",s.beginPath(),s.arc(a-c*.85,l-c*.8,h,0,Math.PI*2,!0),s.fill(),s.beginPath(),s.arc(a+c*.85,l-c*.8,h,0,Math.PI*2,!0),s.fill(),s.beginPath(),s.arc(a,l,c,0,Math.PI*2,!0),s.fill(),s.fillStyle="#000000",s.beginPath(),s.arc(a-c*.4,l-c*.2,f,0,Math.PI*2,!0),s.fill(),s.lineWidth=15,s.beginPath(),s.moveTo(a+c*.2,l-c*.3),s.lineTo(a+c*.5,l-c*.05),s.moveTo(a+c*.5,l-c*.3),s.lineTo(a+c*.2,l-c*.05),s.strokeStyle="#000000",s.stroke(),s.fillStyle="#F0E68C",s.beginPath(),s.ellipse(a,l+c*.4,d*1.5,d,0,0,Math.PI*2),s.fill(),s.fillStyle="#000000",s.beginPath(),s.arc(a,l+c*.3,y*1.2,0,Math.PI*2,!0),s.fill(),s.restore()})()}}),(r,s)=>t.value?ng("",!0):(on(),dn("div",ZE,[Dr("canvas",{ref_key:"bearCanvas",ref:e},null,512),Dr("button",{onClick:i,class:"pixel-button"},"Enter")]))}}),QE=pn(JE,[["__scopeId","data-v-9cd3b2cf"]]),ip=Mt(window.matchMedia("only screen and (max-width: 475px)").matches),rp=Mt(window.matchMedia("only screen and (max-width: 580px)").matches),sp=Mt(window.matchMedia("only screen and (max-width: 670px)").matches),op=Mt(window.matchMedia("only screen and (max-width: 768px)").matches),ap=Mt(window.matchMedia("only screen and (max-width: 850px)").matches),lp=Mt(window.matchMedia("only screen and (max-width: 1024px)").matches),ew=new ResizeObserver(()=>{ip.value=window.matchMedia("only screen and (max-width: 475px)").matches,rp.value=window.matchMedia("only screen and (max-width: 580px)").matches,sp.value=window.matchMedia("only screen and (max-width: 670px)").matches,op.value=window.matchMedia("only screen and (max-width: 768px)").matches,ap.value=window.matchMedia("only screen and (max-width: 850px)").matches,lp.value=window.matchMedia("only screen and (max-width: 1024px)").matches});ew.observe(document.documentElement);Pt(()=>ip.value);const Za=Pt(()=>rp.value);Pt(()=>op.value);Pt(()=>lp.value);Pt(()=>sp.value);const Ja=Pt(()=>ap.value),tw={class:"flex"},nw=jt({__name:"ThreeScene",setup(n){const e=Mt(!0);let t;const i=()=>{e.value=!e.value};return fn(()=>{t=setInterval(()=>{i()},3e3)}),Mc(()=>{clearInterval(t)}),(r,s)=>(on(),dn("div",tw,[rt(QE,{class:"bear-background"}),rt(ep,{background:!0,cameraPosition:cn(Za)?13:cn(Ja)?8:6,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),rt(tp,{background:!0,cameraPosition:cn(Za)?10:cn(Ja)?6:4,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),rt(np,{background:!0,cameraPosition:cn(Za)?13:cn(Ja)?8:6,bodyPosition:{x:-18,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"])]))}}),iw=pn(nw,[["__scopeId","data-v-d3ef8993"]]),rw=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,sw=`
  uniform float time;
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

    gl_FragColor = vec4(color, 1.0);
  }
`,ow=jt({__name:"DiamondBear",setup(n){const e=Mt(null);return fn(()=>{const t=new ai,i=new mt(75,window.innerWidth/window.innerHeight,.1,1e3),r=new oi({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(r.domElement);const s=new Ii(16777215,5);t.add(s);const o=new Li(16777215,20);o.position.set(5,5,5),t.add(o);const a=new xt({uniforms:{time:{value:0}},vertexShader:rw,fragmentShader:sw,transparent:!0,opacity:.1}),l=new yt,c=new Ce(1,32,32),u=new K(c,a);u.scale.set(.85,.85,.8),u.position.y=-.2,l.add(u);const h=new Ce(.6,32,32),f=new K(h,a);f.scale.set(1,.95,.95),f.position.set(0,1,0),l.add(f);const d=new Ce(.25,32,32),_=new K(d,a);_.position.set(-.45,1.35,-.1),l.add(_);const y=new K(d,a);y.position.set(.45,1.35,-.1),l.add(y);const m=new Ce(.25,32,32),p=new K(m,a);p.scale.set(1,.6,.8),p.position.set(0,.85,.5),l.add(p);const b=new Ce(.35,32,32),M=new K(b,a);M.scale.set(.75,1.25,.65),M.position.set(-.7,-.15,.2),l.add(M);const S=new K(b,a);S.scale.set(.75,1.25,.65),S.position.set(.7,-.15,.2),l.add(S);const I=new Ce(.3,32,32),C=new K(I,a);C.scale.set(1,.72,1.5),C.position.set(-.4,-1.45,.17),l.add(C);const R=new K(I,a);R.scale.set(1,.72,1.5),R.position.set(.4,-1.45,.17),l.add(R);const D=new Hn(.2,.22,.6,32),ie=new K(D,a);ie.position.set(-.4,-1.05,0),l.add(ie);const x=new K(D,a);x.position.set(.4,-1.05,0),l.add(x);const w=new Ce(.44,32,32),q=new K(w,a);q.position.set(-.15,-.45,-.4),l.add(q);const z=new K(w,a);z.position.set(.15,-.45,-.4),l.add(z);const J=new Ce(.18,32,32),se=new K(J,a);se.position.set(0,-.35,-.75),l.add(se);const G=new Ps({color:16738740,metalness:1,roughness:.44}),$=new Ps({color:16776960,metalness:1,roughness:.44}),O=new Kt;O.moveTo(0,.15),O.lineTo(.1,0),O.lineTo(0,-.15),O.lineTo(-.1,0),O.lineTo(0,.15);const de={depth:.07,bevelEnabled:!1},pe=new sn(O,de),ge=new K(pe,G);ge.position.set(-.25,1,.5),ge.rotation.y=Math.PI/30,l.add(ge);const Se=new K(pe,$);Se.position.set(.25,1,.5),Se.rotation.y=Math.PI/30,l.add(Se),t.add(l),i.position.set(0,1,4),i.lookAt(0,0,0);function Pe(){requestAnimationFrame(Pe),a.uniforms.time.value+=.1,l.rotation.y+=.02,r.render(t,i)}Pe(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(on(),dn("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),aw=pn(ow,[["__scopeId","data-v-a7796925"]]),Zh=`
  varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
  `,Jh=`
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
  `,lw=jt({__name:"GlassBear",setup(n){const e=Mt(null);return fn(()=>{const t=new ai,i=new mt(75,window.innerWidth/window.innerHeight,.1,1e3),r=new oi({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(r.domElement);const s=new Ii(16777215,.5);t.add(s);const o=new Li(16777215,10);o.position.set(5,5,5),t.add(o);const a=new xt({uniforms:{time:{value:0},opacity:{value:.8}},vertexShader:Zh,fragmentShader:Jh,transparent:!0}),l=new xt({uniforms:{time:{value:0},opacity:{value:.6}},vertexShader:Zh,fragmentShader:Jh,transparent:!0,depthWrite:!1}),c=new yt,u=new Ce(1,32,32),h=new K(u,l);h.scale.set(.85,.85,.8),h.position.y=-.2,c.add(h);const f=new Ce(.6,32,32),d=new K(f,l);d.scale.set(1,.95,.95),d.position.set(0,1,0),c.add(d);const _=new Ce(.25,32,32),y=new K(_,a);y.position.set(-.45,1.35,-.1),c.add(y);const m=new K(_,l);m.position.set(.45,1.35,-.1),c.add(m);const p=new Ce(.25,32,32),b=new K(p,a);b.scale.set(1,.6,.8),b.position.set(0,.85,.5),c.add(b);const M=new Ce(.35,32,32),S=new K(M,a);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),c.add(S);const I=new K(M,a);I.scale.set(.75,1.25,.65),I.position.set(.7,-.15,.2),c.add(I);const C=new Ce(.3,32,32),R=new K(C,a);R.scale.set(1,.72,1.5),R.position.set(-.4,-1.45,.17),c.add(R);const D=new K(C,a);D.scale.set(1,.72,1.5),D.position.set(.4,-1.45,.17),c.add(D);const ie=new Hn(.2,.22,.6,32),x=new K(ie,a);x.position.set(-.4,-1.05,0),c.add(x);const w=new K(ie,a);w.position.set(.4,-1.05,0),c.add(w);const q=new Ce(.44,32,32);new K(q,a).position.set(-.15,-.45,-.4),new K(q,a).position.set(.15,-.45,-.4);const se=new Ce(.18,32,32),G=new K(se,a);G.position.set(0,-.35,-.75),c.add(G);const $=new Kt;$.moveTo(0,0),$.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),$.bezierCurveTo(-.6,.3,0,.6,0,1),$.bezierCurveTo(0,.6,.6,.3,.6,0),$.bezierCurveTo(.6,-.3,0,-.3,0,0);const O=new Ps({color:8900331,metalness:1,roughness:.44}),de=new Ps({color:16776960,metalness:1,roughness:.44}),pe=new Kt;pe.moveTo(0,.15),pe.lineTo(.1,0),pe.lineTo(0,-.15),pe.lineTo(-.1,0),pe.lineTo(0,.15);const ge={depth:.07,bevelEnabled:!1},Se=new sn(pe,ge),Pe=new K(Se,O);Pe.position.set(-.25,1,.5),Pe.rotation.y=Math.PI/30,c.add(Pe);const ee=new K(Se,de);ee.position.set(.25,1,.5),ee.rotation.y=Math.PI/30,c.add(ee),new ut({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const fe={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},he=new ut({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),U=new sn($,fe),oe=new K(U,he);oe.scale.set(.5,.5,.5),oe.position.set(0,0,0),oe.rotation.y=Math.PI,oe.rotation.x=Math.PI,c.add(oe);const j=new Kt;j.moveTo(0,.6),j.lineTo(.3,.3),j.lineTo(.6,0),j.lineTo(.3,-.3),j.lineTo(0,-.6),j.lineTo(-.3,-.3),j.lineTo(-.6,0),j.lineTo(-.3,.3),j.lineTo(0,.6);const le={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},xe=new sn(j,le),Q=new ut({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),g=new K(xe,Q);g.scale.set(.5,.5,.5),g.position.set(0,0,0),t.add(c),i.position.set(0,1,4),i.lookAt(0,0,0);const T=()=>{requestAnimationFrame(T),a.uniforms.time.value+=.03,c.rotation.y+=.03,r.render(t,i)};T(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(on(),dn("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),cw=pn(lw,[["__scopeId","data-v-fa1425bf"]]),uw=jt({__name:"BluePinkBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Mt(null);return fn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.02,o.render(r,s)};const r=new ai,s=new mt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new oi({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Ii(16777215,.6);r.add(a);const l=new Li(16777215,1.5);l.position.set(5,5,5),r.add(l);const c=new Yr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new ut({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),h=new ut({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=m=>{const p=new yt,b=new Ce(1,32,32),M=new K(b,m);M.scale.set(.85,.85,.8),M.position.y=-.2,p.add(M);const S=new Ce(.6,32,32),I=new K(S,m);I.scale.set(1,.95,.95),I.position.set(0,1,0),p.add(I);const C=new Ce(.25,32,32),R=new K(C,m);R.scale.set(1,.6,.8),R.position.set(0,.85,.5),p.add(R),new $r().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(xe){const Q=new Rn("X",{font:xe,size:.18,depth:.05}),g=new Ot({color:0}),T=new K(Q,g);T.position.set(-.3,.99,.53),T.rotation.x=Ct.degToRad(-5),T.rotation.y=Ct.degToRad(-15),p.add(T);const L=new Rn("+",{font:xe,size:.25,depth:.1}),F=new Ot({color:0}),N=new K(L,F);N.position.set(.14,.99,.53),N.rotation.y=Ct.degToRad(12),N.rotation.x=Ct.degToRad(-5),p.add(N)});const ie=new Kt;ie.moveTo(0,0),ie.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),ie.bezierCurveTo(-.6,.3,0,.6,0,1),ie.bezierCurveTo(0,.6,.6,.3,.6,0),ie.bezierCurveTo(.6,-.3,0,-.3,0,0);const x={depth:.05,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.05,bevelThickness:.05},w=new sn(ie,x),q=new Ot({color:0}),z=new K(w,q);z.scale.set(.1,.1,.1),z.rotation.z=Ct.degToRad(210),z.rotation.x=Ct.degToRad(5),z.rotation.y=Ct.degToRad(-45),z.position.set(-.4,.9,.45),p.add(z);const J=new Ce(.25,32,32),se=new K(J,u);se.position.set(-.45,1.35,-.1),p.add(se);const G=new K(J,h);G.position.set(.45,1.35,-.1),p.add(G);const $=new Ce(.35,32,32),O=new K($,u);O.scale.set(.75,1.25,.65),O.position.set(-.7,-.15,.2),p.add(O);const de=new K($,h);de.scale.set(.75,1.25,.65),de.position.set(.7,-.15,.2),p.add(de);const pe=new Hn(.2,.22,.6,32),ge=new K(pe,u);ge.position.set(-.4,-1.05,0),p.add(ge);const Se=new K(pe,h);Se.position.set(.4,-1.05,0),p.add(Se);const Pe=new Ce(.3,32,32),ee=new K(Pe,u);ee.scale.set(1,.72,1.5),ee.position.set(-.4,-1.45,.17),p.add(ee);const fe=new K(Pe,h);fe.scale.set(1,.72,1.5),fe.position.set(.4,-1.45,.17),p.add(fe);const he=new Ce(.44,32,32),U=new K(he,u);U.position.set(-.15,-.45,-.4),p.add(U);const oe=new K(he,h);oe.position.set(.15,-.45,-.4),p.add(oe);const j=new Ce(.18,32,32),le=new K(j,m);return le.position.set(0,-.35,-.8),p.add(le),p},d=new yt,_=f(u),y=f(h);_.position.x=-.01,y.position.x=.01,d.add(_),d.add(y),r.add(d),s.position.z=4,i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0)}}),(i,r)=>(on(),dn("div",{ref_key:"threeCanvas",ref:t,class:"three-canvas"},null,512))}}),hw=pn(uw,[["__scopeId","data-v-9e6b205d"]]),fw=jt({__name:"HalfTransparentBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Mt(null);return fn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),p.rotation.y+=.03,u.uniforms.time.value+=.04,o.render(r,s)};const r=new ai,s=new mt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new oi({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Ii(16777215,.6);r.add(a);const l=new Li(16777215,1.2);l.position.set(5,5,5),r.add(l);const c=new Yr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new xt({uniforms:{time:{value:0},color1:{value:new ke(16766720)},color2:{value:new ke(16007990)}},vertexShader:`
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
        `});new ut({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const h=new ut({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.39});new ut({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),new ut({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const f=new ut({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),d=`
    varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
    `,_=`
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
    `,y=new xt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:d,fragmentShader:_,transparent:!0,depthWrite:!1}),m=new xt({uniforms:{time:{value:0},opacity:{value:.4}},vertexShader:d,fragmentShader:_,transparent:!0,depthWrite:!1}),p=new yt,b=new Ce(1,32,32,0,Math.PI),M=new K(b,m),S=new K(b,y);M.scale.set(.85,.85,.8),S.scale.set(.85,.85,.8),M.position.y=-.2,S.position.y=-.2,M.rotation.y=Math.PI/2,S.rotation.y=Math.PI*1.5;const I=new wi(1,32),C=new K(I,y);C.scale.set(.85,.85,.8),C.position.set(0,-.2,0),C.rotation.y=Math.PI/2;const R=new yt;R.add(M),R.add(S),R.add(C),p.add(R);const D=new Ce(.6,32,32,0,Math.PI),ie=new K(D,y);ie.scale.set(1,.95,.95),ie.position.set(0,1,0),ie.rotation.y=Math.PI*1.5;const x=new K(D,m);x.scale.set(1,.95,.95),x.position.set(0,1,0),x.rotation.y=Math.PI/2;const w=new wi(.6,32),q=new K(w,y);q.position.set(0,.97,0),q.rotation.y=Math.PI/2;const z=new yt;z.add(ie),z.add(x),z.add(q),p.add(z);const J=new Ce(.25,32,32),se=new K(J,y);se.position.set(-.45,1.35,-.1),p.add(se);const G=new K(J,m);G.position.set(.45,1.35,-.1),p.add(G);const $=new Ce(.25,32,32,Math.PI/2,Math.PI),O=new K($,y);O.scale.set(1,.6,.8),O.position.set(0,.82,.5),O.rotation.y=Math.PI;const de=new Ce(.25,32,32,Math.PI/2,Math.PI),pe=new K(de,m);pe.scale.set(1,.6,.8),pe.position.set(0,.82,.5),pe.rotation.y=0;const ge=new wi(.25,32),Se=new K(ge,y);Se.scale.set(1.25,.6,.8),Se.position.set(0,.85,.5),Se.rotation.x=Math.PI/2;const Pe=new yt;Pe.add(O),Pe.add(pe),Pe.add(Se),p.add(Pe);const ee=new Kt;ee.moveTo(0,0),ee.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),ee.bezierCurveTo(-.6,.3,0,.6,0,1),ee.bezierCurveTo(0,.6,.6,.3,.6,0),ee.bezierCurveTo(.6,-.3,0,-.3,0,0);const fe={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new ut({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const he=new sn(ee,fe),U=new K(he,f);U.scale.set(.5,.5,.5),U.position.set(0,0,0),U.rotation.y=Math.PI,U.rotation.x=Math.PI,p.add(U);const oe=new Ce(.35,32,32),j=new K(oe,y);j.scale.set(.75,1.25,.65),j.position.set(-.7,-.15,.2),p.add(j);const le=new K(oe,m);le.scale.set(.75,1.25,.65),le.position.set(.7,-.15,.2),p.add(le);const xe=new Hn(.2,.22,.6,32),Q=new K(xe,y);Q.position.set(-.4,-1.05,0),p.add(Q);const g=new K(xe,m);g.position.set(.4,-1.05,0),p.add(g);const T=new Ce(.3,32,32),L=new K(T,y);L.scale.set(1,.72,1.5),L.position.set(-.4,-1.45,.17),p.add(L);const F=new K(T,m);F.scale.set(1,.72,1.5),F.position.set(.4,-1.45,.17),p.add(F);const N=new Ce(.44,32,32),Z=new K(N,y);Z.position.set(-.15,-.45,-.4),p.add(Z);const te=new K(N,h);te.position.set(.15,-.45,-.4),p.add(te);const E=new Ce(.18,32,32),v=new K(E,f);v.position.set(0,-.35,-.8),p.add(v),new $r().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(X){const k=new Rn("X",{font:X,size:.18,depth:.05}),V=new Ot({color:0}),ue=new K(k,V);ue.position.set(-.3,.99,.53),ue.rotation.x=Ct.degToRad(-5),ue.rotation.y=Ct.degToRad(-15),p.add(ue);const ce=new Rn("+",{font:X,size:.25,depth:.1}),ve=new Ot({color:0}),be=new K(ce,ve);be.position.set(.14,.99,.53),be.rotation.y=Ct.degToRad(12),be.rotation.x=Ct.degToRad(-5),p.add(be)}),r.add(p),i(),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),qt(()=>e.bodyPosition,X=>{p.position.set(X.x,X.y,X.z)}),qt(()=>e.cameraPosition,X=>{s.position.set(e.bodyPosition.x,1,X),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(on(),dn("div",{ref_key:"threeCanvas",ref:t,class:Ai(n.background?"no-bg":"three-canvas")},null,2))}}),dw=pn(fw,[["__scopeId","data-v-7fbce4ad"]]),pw=jt({__name:"HalfBlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Mt(null);return fn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),m.rotation.y+=.03,u.uniforms.time.value+=.04,o.render(r,s)};const r=new ai,s=new mt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new oi({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Ii(16777215,.6);r.add(a);const l=new Li(16777215,1.2);l.position.set(5,5,5),r.add(l);const c=new Yr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new xt({uniforms:{time:{value:0},color1:{value:new ke(16766720)},color2:{value:new ke(16007990)}},vertexShader:`
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
        `}),h=new ut({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new ut({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.39});new ut({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),new ut({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const d=new ut({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),_=`
    varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
    `,y=`
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
    `;new xt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:_,fragmentShader:y,transparent:!0,depthWrite:!1}),new xt({uniforms:{time:{value:0},opacity:{value:.4}},vertexShader:_,fragmentShader:y,transparent:!0,depthWrite:!1});const m=new yt,p=new Ce(1,32,32,0,Math.PI),b=new K(p,f),M=new K(p,h);b.scale.set(.85,.85,.8),M.scale.set(.85,.85,.8),b.position.y=-.2,M.position.y=-.2,b.rotation.y=Math.PI/2,M.rotation.y=Math.PI*1.5;const S=new wi(1,32),I=new K(S,h);I.scale.set(.85,.85,.8),I.position.set(0,-.2,0),I.rotation.y=Math.PI/2;const C=new yt;C.add(b),C.add(M),C.add(I),m.add(C);const R=new Ce(.6,32,32,0,Math.PI),D=new K(R,h);D.scale.set(1,.95,.95),D.position.set(0,1,0),D.rotation.y=Math.PI*1.5;const ie=new K(R,f);ie.scale.set(1,.95,.95),ie.position.set(0,1,0),ie.rotation.y=Math.PI/2;const x=new wi(.6,32),w=new K(x,h);w.position.set(0,.97,0),w.rotation.y=Math.PI/2;const q=new yt;q.add(D),q.add(ie),q.add(w),m.add(q);const z=new Ce(.25,32,32),J=new K(z,h);J.position.set(-.45,1.35,-.1),m.add(J);const se=new K(z,f);se.position.set(.45,1.35,-.1),m.add(se);const G=new Ce(.25,32,32,Math.PI/2,Math.PI),$=new K(G,h);$.scale.set(1.1,.6,.8),$.position.set(0,.84,.5),$.rotation.y=Math.PI;const O=new Ce(.25,32,32,Math.PI/2,Math.PI),de=new K(O,f);de.scale.set(1.1,.6,.8),de.position.set(0,.84,.5),de.rotation.y=0;const pe=new wi(.25,32),ge=new K(pe,h);ge.scale.set(1.25,.6,.8),ge.position.set(0,.85,.5),ge.rotation.x=Math.PI/2;const Se=new yt;Se.add($),Se.add(de),Se.add(ge),m.add(Se);const Pe=new Kt;Pe.moveTo(0,0),Pe.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Pe.bezierCurveTo(-.6,.3,0,.6,0,1),Pe.bezierCurveTo(0,.6,.6,.3,.6,0),Pe.bezierCurveTo(.6,-.3,0,-.3,0,0);const ee={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new ut({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const fe=new sn(Pe,ee),he=new K(fe,d);he.scale.set(.5,.5,.5),he.position.set(0,0,0),he.rotation.y=Math.PI,he.rotation.x=Math.PI,m.add(he);const U=new Ce(.35,32,32),oe=new K(U,h);oe.scale.set(.75,1.25,.65),oe.position.set(-.7,-.15,.2),m.add(oe);const j=new K(U,f);j.scale.set(.75,1.25,.65),j.position.set(.7,-.15,.2),m.add(j);const le=new Hn(.2,.22,.6,32),xe=new K(le,h);xe.position.set(-.4,-1.05,0),m.add(xe);const Q=new K(le,f);Q.position.set(.4,-1.05,0),m.add(Q);const g=new Ce(.3,32,32),T=new K(g,h);T.scale.set(1,.72,1.5),T.position.set(-.4,-1.45,.17),m.add(T);const L=new K(g,f);L.scale.set(1,.72,1.5),L.position.set(.4,-1.45,.17),m.add(L);const F=new Ce(.44,32,32),N=new K(F,h);N.position.set(-.15,-.45,-.4),m.add(N);const Z=new K(F,f);Z.position.set(.15,-.45,-.4),m.add(Z);const te=new Ce(.18,32,32),E=new K(te,d);E.position.set(0,-.35,-.8),m.add(E),new $r().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(P){const X=new Rn("X",{font:P,size:.18,depth:.05}),k=new Ot({color:0}),V=new K(X,k);V.position.set(-.3,.99,.53),V.rotation.x=Ct.degToRad(-5),V.rotation.y=Ct.degToRad(-15),m.add(V);const ue=new Rn("+",{font:P,size:.25,depth:.1}),ce=new Ot({color:0}),ve=new K(ue,ce);ve.position.set(.14,.99,.53),ve.rotation.y=Ct.degToRad(12),ve.rotation.x=Ct.degToRad(-5),m.add(ve)}),r.add(m),i(),m.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),qt(()=>e.bodyPosition,P=>{m.position.set(P.x,P.y,P.z)}),qt(()=>e.cameraPosition,P=>{s.position.set(e.bodyPosition.x,1,P),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(on(),dn("div",{ref_key:"threeCanvas",ref:t,class:Ai(n.background?"no-bg":"three-canvas")},null,2))}}),mw=pn(pw,[["__scopeId","data-v-55557bd6"]]),gw={ref:"cubeWrapper",class:"cube-wrapper"},_w=jt({__name:"Cube",setup(n){const e=Mt(null);let t,i,r,s;function o(){return new Ot({color:65280,wireframe:!0})}function a(){const u=new Xr(4,4,4),h=o();return new K(u,h)}function l(u){t=new ai,i=new mt(75,u.clientWidth/u.clientHeight,.1,1e3),i.position.z=10,r=new oi({canvas:u,alpha:!0}),r.setSize(u.clientWidth,u.clientHeight),r.setPixelRatio(window.devicePixelRatio),s=a(),t.add(s),r.render(t,i)}function c(){if(!e.value||!r||!i)return;const{clientWidth:u,clientHeight:h}=e.value;i.aspect=u/h,i.updateProjectionMatrix(),r.setSize(u,h),r.render(t,i)}return fn(()=>{e.value&&(l(e.value),window.addEventListener("resize",c))}),Lf(()=>{window.removeEventListener("resize",c),r.dispose()}),(u,h)=>(on(),dn("div",gw,[Dr("canvas",{ref_key:"canvasRef",ref:e,class:"renderCanvas"},null,512)],512))}}),vw=pn(_w,[["__scopeId","data-v-575335e7"]]),xw=[{path:"/3d-bear-arts",name:"ThreeScene",component:iw},{path:"/3d-bear-arts/half",name:"NewBear",component:mw},{path:"/3d-bear-arts/halfTransparent",name:"Transparent",component:dw},{path:"/3d-bear-arts/bluePink",name:"BluePinkBear",component:hw},{path:"/3d-bear-arts/diamond",name:"DiamondBear",component:aw},{path:"/3d-bear-arts/pink",name:"PinkBear",component:ep},{path:"/3d-bear-arts/purple",name:"PurpleBear",component:tp},{path:"/3d-bear-arts/blue",name:"BlueBear",component:np},{path:"/3d-bear-arts/glass",name:"GlassBear",component:cw},{path:"/3d-bear-arts/cube",name:"Cube",component:vw}],yw=k0({history:v0(),routes:xw}),cp=Fg(Gg);cp.use(yw);cp.mount("#app");
