(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function jl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Fe={},ho=[],Ci=()=>{},kp=()=>!1,Ra=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$l=n=>n.startsWith("onUpdate:"),dn=Object.assign,Kl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Vp=Object.prototype.hasOwnProperty,Ie=(n,t)=>Vp.call(n,t),fe=Array.isArray,Yo=n=>Ca(n)==="[object Map]",Wp=n=>Ca(n)==="[object Set]",he=n=>typeof n=="function",ln=n=>typeof n=="string",Co=n=>typeof n=="symbol",Je=n=>n!==null&&typeof n=="object",Od=n=>(Je(n)||he(n))&&he(n.then)&&he(n.catch),Xp=Object.prototype.toString,Ca=n=>Xp.call(n),qp=n=>Ca(n).slice(8,-1),Yp=n=>Ca(n)==="[object Object]",Zl=n=>ln(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,jo=jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},jp=/-(\w)/g,ri=Ia(n=>n.replace(jp,(t,e)=>e?e.toUpperCase():"")),$p=/\B([A-Z])/g,ks=Ia(n=>n.replace($p,"-$1").toLowerCase()),La=Ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),Za=Ia(n=>n?`on${La(n)}`:""),vs=(n,t)=>!Object.is(n,t),Ja=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Bd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Kp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ou;const zd=()=>Ou||(Ou=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jl(n){if(fe(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ln(i)?tm(i):Jl(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(ln(n)||Je(n))return n}const Zp=/;(?![^(]*\))/g,Jp=/:([^]+)/,Qp=/\/\*[^]*?\*\//g;function tm(n){const t={};return n.replace(Qp,"").split(Zp).forEach(e=>{if(e){const i=e.split(Jp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function zn(n){let t="";if(ln(n))t=n;else if(fe(n))for(let e=0;e<n.length;e++){const i=zn(n[e]);i&&(t+=i+" ")}else if(Je(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const em="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nm=jl(em);function Gd(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jn;class im{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=jn,!t&&jn&&(this.index=(jn.scopes||(jn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=jn;try{return jn=this,t()}finally{jn=e}}}on(){jn=this}off(){jn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function sm(){return jn}let Oe;const Qa=new WeakSet;class Hd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jn&&jn.active&&jn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qa.has(this)&&(Qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bu(this),Wd(this);const t=Oe,e=pi;Oe=this,pi=!0;try{return this.fn()}finally{Xd(this),Oe=t,pi=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)eu(t);this.deps=this.depsTail=void 0,Bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xc(this)&&this.run()}get dirty(){return Xc(this)}}let kd=0,co;function Vd(n){n.flags|=8,n.next=co,co=n}function Ql(){kd++}function tu(){if(--kd>0)return;let n;for(;co;){let t=co,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=co,co=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Wd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),eu(i),om(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Xc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(qd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function qd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===or))return;n.globalVersion=or;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Xc(n)){n.flags&=-3;return}const e=Oe,i=pi;Oe=n,pi=!0;try{Wd(n);const s=n.fn(n._value);(t.version===0||vs(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Oe=e,pi=i,Xd(n),n.flags&=-3}}function eu(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let o=e.computed.deps;o;o=o.nextDep)eu(o,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function om(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let pi=!0;const Yd=[];function xs(){Yd.push(pi),pi=!1}function ys(){const n=Yd.pop();pi=n===void 0?!0:n}function Bu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Oe;Oe=void 0;try{t()}finally{Oe=e}}}let or=0;class rm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Oe||!pi||Oe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Oe)e=this.activeLink=new rm(Oe,this),Oe.deps?(e.prevDep=Oe.depsTail,Oe.depsTail.nextDep=e,Oe.depsTail=e):Oe.deps=Oe.depsTail=e,jd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Oe.depsTail,e.nextDep=void 0,Oe.depsTail.nextDep=e,Oe.depsTail=e,Oe.deps===e&&(Oe.deps=i)}return e}trigger(t){this.version++,or++,this.notify(t)}notify(t){Ql();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{tu()}}}function jd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)jd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const qc=new WeakMap,Fs=Symbol(""),Yc=Symbol(""),rr=Symbol("");function yn(n,t,e){if(pi&&Oe){let i=qc.get(n);i||qc.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new nu),s.target=n,s.map=i,s.key=e),s.track()}}function Ki(n,t,e,i,s,o){const r=qc.get(n);if(!r){or++;return}const a=c=>{c&&c.trigger()};if(Ql(),t==="clear")r.forEach(a);else{const c=fe(n),l=c&&Zl(e);if(c&&e==="length"){const h=Number(i);r.forEach((u,d)=>{(d==="length"||d===rr||!Co(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(r.get(e)),l&&a(r.get(rr)),t){case"add":c?l&&a(r.get("length")):(a(r.get(Fs)),Yo(n)&&a(r.get(Yc)));break;case"delete":c||(a(r.get(Fs)),Yo(n)&&a(r.get(Yc)));break;case"set":Yo(n)&&a(r.get(Fs));break}}tu()}function Ws(n){const t=De(n);return t===n?t:(yn(t,"iterate",rr),mi(n)?t:t.map(Pn))}function iu(n){return yn(n=De(n),"iterate",rr),n}const am={__proto__:null,[Symbol.iterator](){return tc(this,Symbol.iterator,Pn)},concat(...n){return Ws(this).concat(...n.map(t=>fe(t)?Ws(t):t))},entries(){return tc(this,"entries",n=>(n[1]=Pn(n[1]),n))},every(n,t){return Fi(this,"every",n,t,void 0,arguments)},filter(n,t){return Fi(this,"filter",n,t,e=>e.map(Pn),arguments)},find(n,t){return Fi(this,"find",n,t,Pn,arguments)},findIndex(n,t){return Fi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Fi(this,"findLast",n,t,Pn,arguments)},findLastIndex(n,t){return Fi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Fi(this,"forEach",n,t,void 0,arguments)},includes(...n){return ec(this,"includes",n)},indexOf(...n){return ec(this,"indexOf",n)},join(n){return Ws(this).join(n)},lastIndexOf(...n){return ec(this,"lastIndexOf",n)},map(n,t){return Fi(this,"map",n,t,void 0,arguments)},pop(){return No(this,"pop")},push(...n){return No(this,"push",n)},reduce(n,...t){return zu(this,"reduce",n,t)},reduceRight(n,...t){return zu(this,"reduceRight",n,t)},shift(){return No(this,"shift")},some(n,t){return Fi(this,"some",n,t,void 0,arguments)},splice(...n){return No(this,"splice",n)},toReversed(){return Ws(this).toReversed()},toSorted(n){return Ws(this).toSorted(n)},toSpliced(...n){return Ws(this).toSpliced(...n)},unshift(...n){return No(this,"unshift",n)},values(){return tc(this,"values",Pn)}};function tc(n,t,e){const i=iu(n),s=i[t]();return i!==n&&!mi(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=e(o.value)),o}),s}const cm=Array.prototype;function Fi(n,t,e,i,s,o){const r=iu(n),a=r!==n&&!mi(n),c=r[t];if(c!==cm[t]){const u=c.apply(n,o);return a?Pn(u):u}let l=e;r!==n&&(a?l=function(u,d){return e.call(this,Pn(u),d,n)}:e.length>2&&(l=function(u,d){return e.call(this,u,d,n)}));const h=c.call(r,l,i);return a&&s?s(h):h}function zu(n,t,e,i){const s=iu(n);let o=e;return s!==n&&(mi(n)?e.length>3&&(o=function(r,a,c){return e.call(this,r,a,c,n)}):o=function(r,a,c){return e.call(this,r,Pn(a),c,n)}),s[t](o,...i)}function ec(n,t,e){const i=De(n);yn(i,"iterate",rr);const s=i[t](...e);return(s===-1||s===!1)&&au(e[0])?(e[0]=De(e[0]),i[t](...e)):s}function No(n,t,e=[]){xs(),Ql();const i=De(n)[t].apply(n,e);return tu(),ys(),i}const lm=jl("__proto__,__v_isRef,__isVue"),$d=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Co));function um(n){Co(n)||(n=String(n));const t=De(this);return yn(t,"has",n),t.hasOwnProperty(n)}class Kd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return o;if(e==="__v_raw")return i===(s?o?Sm:tf:o?Qd:Jd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=fe(t);if(!s){let c;if(r&&(c=am[e]))return c;if(e==="hasOwnProperty")return um}const a=Reflect.get(t,e,xn(t)?t:i);return(Co(e)?$d.has(e):lm(e))||(s||yn(t,"get",e),o)?a:xn(a)?r&&Zl(e)?a:a.value:Je(a)?s?nf(a):Ua(a):a}}class Zd extends Kd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let o=t[e];if(!this._isShallow){const c=Os(o);if(!mi(i)&&!Os(i)&&(o=De(o),i=De(i)),!fe(t)&&xn(o)&&!xn(i))return c?!1:(o.value=i,!0)}const r=fe(t)&&Zl(e)?Number(e)<t.length:Ie(t,e),a=Reflect.set(t,e,i,xn(t)?t:s);return t===De(s)&&(r?vs(i,o)&&Ki(t,"set",e,i):Ki(t,"add",e,i)),a}deleteProperty(t,e){const i=Ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Ki(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Co(e)||!$d.has(e))&&yn(t,"has",e),i}ownKeys(t){return yn(t,"iterate",fe(t)?"length":Fs),Reflect.ownKeys(t)}}class hm extends Kd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const dm=new Zd,fm=new hm,pm=new Zd(!0);const su=n=>n,Da=n=>Reflect.getPrototypeOf(n);function br(n,t,e=!1,i=!1){n=n.__v_raw;const s=De(n),o=De(t);e||(vs(t,o)&&yn(s,"get",t),yn(s,"get",o));const{has:r}=Da(s),a=i?su:e?cu:Pn;if(r.call(s,t))return a(n.get(t));if(r.call(s,o))return a(n.get(o));n!==s&&n.get(t)}function Er(n,t=!1){const e=this.__v_raw,i=De(e),s=De(n);return t||(vs(n,s)&&yn(i,"has",n),yn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function Tr(n,t=!1){return n=n.__v_raw,!t&&yn(De(n),"iterate",Fs),Reflect.get(n,"size",n)}function Gu(n,t=!1){!t&&!mi(n)&&!Os(n)&&(n=De(n));const e=De(this);return Da(e).has.call(e,n)||(e.add(n),Ki(e,"add",n,n)),this}function Hu(n,t,e=!1){!e&&!mi(t)&&!Os(t)&&(t=De(t));const i=De(this),{has:s,get:o}=Da(i);let r=s.call(i,n);r||(n=De(n),r=s.call(i,n));const a=o.call(i,n);return i.set(n,t),r?vs(t,a)&&Ki(i,"set",n,t):Ki(i,"add",n,t),this}function ku(n){const t=De(this),{has:e,get:i}=Da(t);let s=e.call(t,n);s||(n=De(n),s=e.call(t,n)),i&&i.call(t,n);const o=t.delete(n);return s&&Ki(t,"delete",n,void 0),o}function Vu(){const n=De(this),t=n.size!==0,e=n.clear();return t&&Ki(n,"clear",void 0,void 0),e}function Ar(n,t){return function(i,s){const o=this,r=o.__v_raw,a=De(r),c=t?su:n?cu:Pn;return!n&&yn(a,"iterate",Fs),r.forEach((l,h)=>i.call(s,c(l),c(h),o))}}function Pr(n,t,e){return function(...i){const s=this.__v_raw,o=De(s),r=Yo(o),a=n==="entries"||n===Symbol.iterator&&r,c=n==="keys"&&r,l=s[n](...i),h=e?su:t?cu:Pn;return!t&&yn(o,"iterate",c?Yc:Fs),{next(){const{value:u,done:d}=l.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function is(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function mm(){const n={get(o){return br(this,o)},get size(){return Tr(this)},has:Er,add:Gu,set:Hu,delete:ku,clear:Vu,forEach:Ar(!1,!1)},t={get(o){return br(this,o,!1,!0)},get size(){return Tr(this)},has:Er,add(o){return Gu.call(this,o,!0)},set(o,r){return Hu.call(this,o,r,!0)},delete:ku,clear:Vu,forEach:Ar(!1,!0)},e={get(o){return br(this,o,!0)},get size(){return Tr(this,!0)},has(o){return Er.call(this,o,!0)},add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear"),forEach:Ar(!0,!1)},i={get(o){return br(this,o,!0,!0)},get size(){return Tr(this,!0)},has(o){return Er.call(this,o,!0)},add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear"),forEach:Ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Pr(o,!1,!1),e[o]=Pr(o,!0,!1),t[o]=Pr(o,!1,!0),i[o]=Pr(o,!0,!0)}),[n,e,t,i]}const[gm,vm,_m,xm]=mm();function ou(n,t){const e=t?n?xm:_m:n?vm:gm;return(i,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Ie(e,s)&&s in i?e:i,s,o)}const ym={get:ou(!1,!1)},Mm={get:ou(!1,!0)},wm={get:ou(!0,!1)};const Jd=new WeakMap,Qd=new WeakMap,tf=new WeakMap,Sm=new WeakMap;function bm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Em(n){return n.__v_skip||!Object.isExtensible(n)?0:bm(qp(n))}function Ua(n){return Os(n)?n:ru(n,!1,dm,ym,Jd)}function ef(n){return ru(n,!1,pm,Mm,Qd)}function nf(n){return ru(n,!0,fm,wm,tf)}function ru(n,t,e,i,s){if(!Je(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=s.get(n);if(o)return o;const r=Em(n);if(r===0)return n;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function $o(n){return Os(n)?$o(n.__v_raw):!!(n&&n.__v_isReactive)}function Os(n){return!!(n&&n.__v_isReadonly)}function mi(n){return!!(n&&n.__v_isShallow)}function au(n){return n?!!n.__v_raw:!1}function De(n){const t=n&&n.__v_raw;return t?De(t):n}function Tm(n){return!Ie(n,"__v_skip")&&Object.isExtensible(n)&&Bd(n,"__v_skip",!0),n}const Pn=n=>Je(n)?Ua(n):n,cu=n=>Je(n)?nf(n):n;function xn(n){return n?n.__v_isRef===!0:!1}function Kt(n){return sf(n,!1)}function fo(n){return sf(n,!0)}function sf(n,t){return xn(n)?n:new Am(n,t)}class Am{constructor(t,e){this.dep=new nu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:De(t),this._value=e?t:Pn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||mi(t)||Os(t);t=i?t:De(t),vs(t,e)&&(this._rawValue=t,this._value=i?t:Pn(t),this.dep.trigger())}}function po(n){return xn(n)?n.value:n}const Pm={get:(n,t,e)=>t==="__v_raw"?n:po(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return xn(s)&&!xn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function of(n){return $o(n)?n:new Proxy(n,Pm)}class Rm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new nu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=or-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Vd(this),!0}get value(){const t=this.dep.track();return qd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Cm(n,t,e=!1){let i,s;return he(n)?i=n:(i=n.get,s=n.set),new Rm(i,s,e)}const Rr={},ga=new WeakMap;let Cs;function Im(n,t=!1,e=Cs){if(e){let i=ga.get(e);i||ga.set(e,i=[]),i.push(n)}}function Lm(n,t,e=Fe){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:a,call:c}=e,l=E=>s?E:mi(E)||s===!1||s===0?qi(E,1):qi(E);let h,u,d,p,v=!1,x=!1;if(xn(n)?(u=()=>n.value,v=mi(n)):$o(n)?(u=()=>l(n),v=!0):fe(n)?(x=!0,v=n.some(E=>$o(E)||mi(E)),u=()=>n.map(E=>{if(xn(E))return E.value;if($o(E))return l(E);if(he(E))return c?c(E,2):E()})):he(n)?t?u=c?()=>c(n,2):n:u=()=>{if(d){xs();try{d()}finally{ys()}}const E=Cs;Cs=h;try{return c?c(n,3,[p]):n(p)}finally{Cs=E}}:u=Ci,t&&s){const E=u,z=s===!0?1/0:s;u=()=>qi(E(),z)}const m=sm(),f=()=>{h.stop(),m&&Kl(m.effects,h)};if(o&&t){const E=t;t=(...z)=>{E(...z),f()}}let T=x?new Array(n.length).fill(Rr):Rr;const S=E=>{if(!(!(h.flags&1)||!h.dirty&&!E))if(t){const z=h.run();if(s||v||(x?z.some((I,R)=>vs(I,T[R])):vs(z,T))){d&&d();const I=Cs;Cs=h;try{const R=[z,T===Rr?void 0:x&&T[0]===Rr?[]:T,p];c?c(t,3,R):t(...R),T=z}finally{Cs=I}}}else h.run()};return a&&a(S),h=new Hd(u),h.scheduler=r?()=>r(S,!1):S,p=E=>Im(E,!1,h),d=h.onStop=()=>{const E=ga.get(h);if(E){if(c)c(E,4);else for(const z of E)z();ga.delete(h)}},t?i?S(!0):T=h.run():r?r(S.bind(null,!0),!0):h.run(),f.pause=h.pause.bind(h),f.resume=h.resume.bind(h),f.stop=f,f}function qi(n,t=1/0,e){if(t<=0||!Je(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,xn(n))qi(n.value,t,e);else if(fe(n))for(let i=0;i<n.length;i++)qi(n[i],t,e);else if(Wp(n)||Yo(n))n.forEach(i=>{qi(i,t,e)});else if(Yp(n)){for(const i in n)qi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&qi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _r(n,t,e,i){try{return i?n(...i):n()}catch(s){Na(s,t,e)}}function Li(n,t,e,i){if(he(n)){const s=_r(n,t,e,i);return s&&Od(s)&&s.catch(o=>{Na(o,t,e)}),s}if(fe(n)){const s=[];for(let o=0;o<n.length;o++)s.push(Li(n[o],t,e,i));return s}}function Na(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Fe;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,c,l)===!1)return}a=a.parent}if(o){xs(),_r(o,null,10,[n,c,l]),ys();return}}Dm(n,e,s,i,r)}function Dm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let ar=!1,jc=!1;const Rn=[];let Ti=0;const mo=[];let hs=null,oo=0;const rf=Promise.resolve();let lu=null;function af(n){const t=lu||rf;return n?t.then(this?n.bind(this):n):t}function Um(n){let t=ar?Ti+1:0,e=Rn.length;for(;t<e;){const i=t+e>>>1,s=Rn[i],o=cr(s);o<n||o===n&&s.flags&2?t=i+1:e=i}return t}function uu(n){if(!(n.flags&1)){const t=cr(n),e=Rn[Rn.length-1];!e||!(n.flags&2)&&t>=cr(e)?Rn.push(n):Rn.splice(Um(t),0,n),n.flags|=1,cf()}}function cf(){!ar&&!jc&&(jc=!0,lu=rf.then(uf))}function Nm(n){fe(n)?mo.push(...n):hs&&n.id===-1?hs.splice(oo+1,0,n):n.flags&1||(mo.push(n),n.flags|=1),cf()}function Wu(n,t,e=ar?Ti+1:0){for(;e<Rn.length;e++){const i=Rn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Rn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function lf(n){if(mo.length){const t=[...new Set(mo)].sort((e,i)=>cr(e)-cr(i));if(mo.length=0,hs){hs.push(...t);return}for(hs=t,oo=0;oo<hs.length;oo++){const e=hs[oo];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}hs=null,oo=0}}const cr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function uf(n){jc=!1,ar=!0;try{for(Ti=0;Ti<Rn.length;Ti++){const t=Rn[Ti];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),_r(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ti<Rn.length;Ti++){const t=Rn[Ti];t&&(t.flags&=-2)}Ti=0,Rn.length=0,lf(),ar=!1,lu=null,(Rn.length||mo.length)&&uf()}}let $n=null,hf=null;function va(n){const t=$n;return $n=n,hf=n&&n.type.__scopeId||null,t}function ii(n,t=$n,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&th(-1);const o=va(t);let r;try{r=n(...s)}finally{va(o),i._d&&th(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function Fm(n,t){if($n===null)return n;const e=Ga($n),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,a,c=Fe]=t[s];o&&(he(o)&&(o={mounted:o,updated:o}),o.deep&&qi(r),i.push({dir:o,instance:e,value:r,oldValue:void 0,arg:a,modifiers:c}))}return n}function ws(n,t,e,i){const s=n.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let c=a.dir[i];c&&(xs(),Li(c,e,8,[n.el,a,n,t]),ys())}}const Om=Symbol("_vte"),Bm=n=>n.__isTeleport;function hu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,hu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Ln(n,t){return he(n)?dn({name:n.name},t,{setup:n}):n}function df(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function $c(n,t,e,i,s=!1){if(fe(n)){n.forEach((v,x)=>$c(v,t&&(fe(t)?t[x]:t),e,i,s));return}if(Ko(i)&&!s)return;const o=i.shapeFlag&4?Ga(i.component):i.el,r=s?null:o,{i:a,r:c}=n,l=t&&t.r,h=a.refs===Fe?a.refs={}:a.refs,u=a.setupState,d=De(u),p=u===Fe?()=>!1:v=>Ie(d,v);if(l!=null&&l!==c&&(ln(l)?(h[l]=null,p(l)&&(u[l]=null)):xn(l)&&(l.value=null)),he(c))_r(c,a,12,[r,h]);else{const v=ln(c),x=xn(c);if(v||x){const m=()=>{if(n.f){const f=v?p(c)?u[c]:h[c]:c.value;s?fe(f)&&Kl(f,o):fe(f)?f.includes(o)||f.push(o):v?(h[c]=[o],p(c)&&(u[c]=h[c])):(c.value=[o],n.k&&(h[n.k]=c.value))}else v?(h[c]=r,p(c)&&(u[c]=r)):x&&(c.value=r,n.k&&(h[n.k]=r))};r?(m.id=-1,Yn(m,e)):m()}}}const Ko=n=>!!n.type.__asyncLoader,ff=n=>n.type.__isKeepAlive;function zm(n,t){pf(n,"a",t)}function Gm(n,t){pf(n,"da",t)}function pf(n,t,e=_n){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Fa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)ff(s.parent.vnode)&&Hm(i,t,e,s),s=s.parent}}function Hm(n,t,e,i){const s=Fa(t,n,i,!0);du(()=>{Kl(i[t],s)},e)}function Fa(n,t,e=_n,i=!1){if(e){const s=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...r)=>{xs();const a=xr(e),c=Li(t,e,n,r);return a(),ys(),c});return i?s.unshift(o):s.push(o),o}}const es=n=>(t,e=_n)=>{(!za||n==="sp")&&Fa(n,(...i)=>t(...i),e)},km=es("bm"),Gn=es("m"),Vm=es("bu"),Wm=es("u"),Xm=es("bum"),du=es("um"),qm=es("sp"),Ym=es("rtg"),jm=es("rtc");function $m(n,t=_n){Fa("ec",n,t)}const Km="components";function Xu(n,t){return Jm(Km,n,!0,t)||n}const Zm=Symbol.for("v-ndc");function Jm(n,t,e=!0,i=!1){const s=$n||_n;if(s){const o=s.type;{const a=G0(o,!1);if(a&&(a===t||a===ri(t)||a===La(ri(t))))return o}const r=qu(s[n]||o[n],t)||qu(s.appContext[n],t);return!r&&i?o:r}}function qu(n,t){return n&&(n[t]||n[ri(t)]||n[La(ri(t))])}const Kc=n=>n?Uf(n)?Ga(n):Kc(n.parent):null,Zo=dn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Kc(n.parent),$root:n=>Kc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fu(n),$forceUpdate:n=>n.f||(n.f=()=>{uu(n.update)}),$nextTick:n=>n.n||(n.n=af.bind(n.proxy)),$watch:n=>x0.bind(n)}),nc=(n,t)=>n!==Fe&&!n.__isScriptSetup&&Ie(n,t),Qm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:c}=n;let l;if(t[0]!=="$"){const p=r[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return o[t]}else{if(nc(i,t))return r[t]=1,i[t];if(s!==Fe&&Ie(s,t))return r[t]=2,s[t];if((l=n.propsOptions[0])&&Ie(l,t))return r[t]=3,o[t];if(e!==Fe&&Ie(e,t))return r[t]=4,e[t];Zc&&(r[t]=0)}}const h=Zo[t];let u,d;if(h)return t==="$attrs"&&yn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Fe&&Ie(e,t))return r[t]=4,e[t];if(d=c.config.globalProperties,Ie(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:o}=n;return nc(s,t)?(s[t]=e,!0):i!==Fe&&Ie(i,t)?(i[t]=e,!0):Ie(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:o}},r){let a;return!!e[r]||n!==Fe&&Ie(n,r)||nc(t,r)||(a=o[0])&&Ie(a,r)||Ie(i,r)||Ie(Zo,r)||Ie(s.config.globalProperties,r)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Ie(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Yu(n){return fe(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Zc=!0;function t0(n){const t=fu(n),e=n.proxy,i=n.ctx;Zc=!1,t.beforeCreate&&ju(t.beforeCreate,n,"bc");const{data:s,computed:o,methods:r,watch:a,provide:c,inject:l,created:h,beforeMount:u,mounted:d,beforeUpdate:p,updated:v,activated:x,deactivated:m,beforeDestroy:f,beforeUnmount:T,destroyed:S,unmounted:E,render:z,renderTracked:I,renderTriggered:R,errorCaptured:B,serverPrefetch:Q,expose:y,inheritAttrs:b,components:U,directives:k,filters:et}=t;if(l&&e0(l,i,null),r)for(const nt in r){const $=r[nt];he($)&&(i[nt]=$.bind(e))}if(s){const nt=s.call(e,e);Je(nt)&&(n.data=Ua(nt))}if(Zc=!0,o)for(const nt in o){const $=o[nt],gt=he($)?$.bind(e,e):he($.get)?$.get.bind(e,e):Ci,pt=!he($)&&he($.set)?$.set.bind(e):Ci,wt=hi({get:gt,set:pt});Object.defineProperty(i,nt,{enumerable:!0,configurable:!0,get:()=>wt.value,set:Lt=>wt.value=Lt})}if(a)for(const nt in a)mf(a[nt],i,e,nt);if(c){const nt=he(c)?c.call(e):c;Reflect.ownKeys(nt).forEach($=>{oa($,nt[$])})}h&&ju(h,n,"c");function j(nt,$){fe($)?$.forEach(gt=>nt(gt.bind(e))):$&&nt($.bind(e))}if(j(km,u),j(Gn,d),j(Vm,p),j(Wm,v),j(zm,x),j(Gm,m),j($m,B),j(jm,I),j(Ym,R),j(Xm,T),j(du,E),j(qm,Q),fe(y))if(y.length){const nt=n.exposed||(n.exposed={});y.forEach($=>{Object.defineProperty(nt,$,{get:()=>e[$],set:gt=>e[$]=gt})})}else n.exposed||(n.exposed={});z&&n.render===Ci&&(n.render=z),b!=null&&(n.inheritAttrs=b),U&&(n.components=U),k&&(n.directives=k),Q&&df(n)}function e0(n,t,e=Ci){fe(n)&&(n=Jc(n));for(const i in n){const s=n[i];let o;Je(s)?"default"in s?o=Zi(s.from||i,s.default,!0):o=Zi(s.from||i):o=Zi(s),xn(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function ju(n,t,e){Li(fe(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function mf(n,t,e,i){let s=i.includes(".")?Rf(e,i):()=>e[i];if(ln(n)){const o=t[n];he(o)&&He(s,o)}else if(he(n))He(s,n.bind(e));else if(Je(n))if(fe(n))n.forEach(o=>mf(o,t,e,i));else{const o=he(n.handler)?n.handler.bind(e):t[n.handler];he(o)&&He(s,o,n)}}function fu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!e&&!i?c=t:(c={},s.length&&s.forEach(l=>_a(c,l,r,!0)),_a(c,t,r)),Je(t)&&o.set(t,c),c}function _a(n,t,e,i=!1){const{mixins:s,extends:o}=t;o&&_a(n,o,e,!0),s&&s.forEach(r=>_a(n,r,e,!0));for(const r in t)if(!(i&&r==="expose")){const a=n0[r]||e&&e[r];n[r]=a?a(n[r],t[r]):t[r]}return n}const n0={data:$u,props:Ku,emits:Ku,methods:Xo,computed:Xo,beforeCreate:En,created:En,beforeMount:En,mounted:En,beforeUpdate:En,updated:En,beforeDestroy:En,beforeUnmount:En,destroyed:En,unmounted:En,activated:En,deactivated:En,errorCaptured:En,serverPrefetch:En,components:Xo,directives:Xo,watch:s0,provide:$u,inject:i0};function $u(n,t){return t?n?function(){return dn(he(n)?n.call(this,this):n,he(t)?t.call(this,this):t)}:t:n}function i0(n,t){return Xo(Jc(n),Jc(t))}function Jc(n){if(fe(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function En(n,t){return n?[...new Set([].concat(n,t))]:t}function Xo(n,t){return n?dn(Object.create(null),n,t):t}function Ku(n,t){return n?fe(n)&&fe(t)?[...new Set([...n,...t])]:dn(Object.create(null),Yu(n),Yu(t??{})):t}function s0(n,t){if(!n)return t;if(!t)return n;const e=dn(Object.create(null),n);for(const i in t)e[i]=En(n[i],t[i]);return e}function gf(){return{app:null,config:{isNativeTag:kp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let o0=0;function r0(n,t){return function(i,s=null){he(i)||(i=dn({},i)),s!=null&&!Je(s)&&(s=null);const o=gf(),r=new WeakSet,a=[];let c=!1;const l=o.app={_uid:o0++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:k0,get config(){return o.config},set config(h){},use(h,...u){return r.has(h)||(h&&he(h.install)?(r.add(h),h.install(l,...u)):he(h)&&(r.add(h),h(l,...u))),l},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),l},component(h,u){return u?(o.components[h]=u,l):o.components[h]},directive(h,u){return u?(o.directives[h]=u,l):o.directives[h]},mount(h,u,d){if(!c){const p=l._ceVNode||Be(i,s);return p.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(p,h):n(p,h,d),c=!0,l._container=h,h.__vue_app__=l,Ga(p.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Li(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(h,u){return o.provides[h]=u,l},runWithContext(h){const u=go;go=l;try{return h()}finally{go=u}}};return l}}let go=null;function oa(n,t){if(_n){let e=_n.provides;const i=_n.parent&&_n.parent.provides;i===e&&(e=_n.provides=Object.create(i)),e[n]=t}}function Zi(n,t,e=!1){const i=_n||$n;if(i||go){const s=go?go._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&he(t)?t.call(i&&i.proxy):t}}const vf={},_f=()=>Object.create(vf),xf=n=>Object.getPrototypeOf(n)===vf;function a0(n,t,e,i=!1){const s={},o=_f();n.propsDefaults=Object.create(null),yf(n,t,s,o);for(const r in n.propsOptions[0])r in s||(s[r]=void 0);e?n.props=i?s:ef(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function c0(n,t,e,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=n,a=De(s),[c]=n.propsOptions;let l=!1;if((i||r>0)&&!(r&16)){if(r&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Oa(n.emitsOptions,d))continue;const p=t[d];if(c)if(Ie(o,d))p!==o[d]&&(o[d]=p,l=!0);else{const v=ri(d);s[v]=Qc(c,a,v,p,n,!1)}else p!==o[d]&&(o[d]=p,l=!0)}}}else{yf(n,t,s,o)&&(l=!0);let h;for(const u in a)(!t||!Ie(t,u)&&((h=ks(u))===u||!Ie(t,h)))&&(c?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=Qc(c,a,u,void 0,n,!0)):delete s[u]);if(o!==a)for(const u in o)(!t||!Ie(t,u))&&(delete o[u],l=!0)}l&&Ki(n.attrs,"set","")}function yf(n,t,e,i){const[s,o]=n.propsOptions;let r=!1,a;if(t)for(let c in t){if(jo(c))continue;const l=t[c];let h;s&&Ie(s,h=ri(c))?!o||!o.includes(h)?e[h]=l:(a||(a={}))[h]=l:Oa(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,r=!0)}if(o){const c=De(e),l=a||Fe;for(let h=0;h<o.length;h++){const u=o[h];e[u]=Qc(s,c,u,l[u],n,!Ie(l,u))}}return r}function Qc(n,t,e,i,s,o){const r=n[e];if(r!=null){const a=Ie(r,"default");if(a&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&he(c)){const{propsDefaults:l}=s;if(e in l)i=l[e];else{const h=xr(s);i=l[e]=c.call(null,t),h()}}else i=c;s.ce&&s.ce._setProp(e,i)}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===ks(e))&&(i=!0))}return i}const l0=new WeakMap;function Mf(n,t,e=!1){const i=e?l0:t.propsCache,s=i.get(n);if(s)return s;const o=n.props,r={},a=[];let c=!1;if(!he(n)){const h=u=>{c=!0;const[d,p]=Mf(u,t,!0);dn(r,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!o&&!c)return Je(n)&&i.set(n,ho),ho;if(fe(o))for(let h=0;h<o.length;h++){const u=ri(o[h]);Zu(u)&&(r[u]=Fe)}else if(o)for(const h in o){const u=ri(h);if(Zu(u)){const d=o[h],p=r[u]=fe(d)||he(d)?{type:d}:dn({},d),v=p.type;let x=!1,m=!0;if(fe(v))for(let f=0;f<v.length;++f){const T=v[f],S=he(T)&&T.name;if(S==="Boolean"){x=!0;break}else S==="String"&&(m=!1)}else x=he(v)&&v.name==="Boolean";p[0]=x,p[1]=m,(x||Ie(p,"default"))&&a.push(u)}}const l=[r,a];return Je(n)&&i.set(n,l),l}function Zu(n){return n[0]!=="$"&&!jo(n)}const wf=n=>n[0]==="_"||n==="$stable",pu=n=>fe(n)?n.map(Ai):[Ai(n)],u0=(n,t,e)=>{if(t._n)return t;const i=ii((...s)=>pu(t(...s)),e);return i._c=!1,i},Sf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(wf(s))continue;const o=n[s];if(he(o))t[s]=u0(s,o,i);else if(o!=null){const r=pu(o);t[s]=()=>r}}},bf=(n,t)=>{const e=pu(t);n.slots.default=()=>e},Ef=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},h0=(n,t,e)=>{const i=n.slots=_f();if(n.vnode.shapeFlag&32){const s=t._;s?(Ef(i,t,e),e&&Bd(i,"_",s,!0)):Sf(t,i)}else t&&bf(n,t)},d0=(n,t,e)=>{const{vnode:i,slots:s}=n;let o=!0,r=Fe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?o=!1:Ef(s,t,e):(o=!t.$stable,Sf(t,s)),r=t}else t&&(bf(n,t),r={default:1});if(o)for(const a in s)!wf(a)&&r[a]==null&&delete s[a]},Yn=T0;function f0(n){return p0(n)}function p0(n,t){const e=zd();e.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:c,setText:l,setElementText:h,parentNode:u,nextSibling:d,setScopeId:p=Ci,insertStaticContent:v}=n,x=(g,A,L,O=null,N=null,q=null,Z=void 0,M=null,_=!!A.dynamicChildren)=>{if(g===A)return;g&&!Fo(g,A)&&(O=F(g),Lt(g,N,q,!0),g=null),A.patchFlag===-2&&(_=!1,A.dynamicChildren=null);const{type:C,ref:X,shapeFlag:V}=A;switch(C){case Ba:m(g,A,L,O);break;case Bs:f(g,A,L,O);break;case oc:g==null&&T(A,L,O,Z);break;case rn:U(g,A,L,O,N,q,Z,M,_);break;default:V&1?z(g,A,L,O,N,q,Z,M,_):V&6?k(g,A,L,O,N,q,Z,M,_):(V&64||V&128)&&C.process(g,A,L,O,N,q,Z,M,_,ft)}X!=null&&N&&$c(X,g&&g.ref,q,A||g,!A)},m=(g,A,L,O)=>{if(g==null)i(A.el=a(A.children),L,O);else{const N=A.el=g.el;A.children!==g.children&&l(N,A.children)}},f=(g,A,L,O)=>{g==null?i(A.el=c(A.children||""),L,O):A.el=g.el},T=(g,A,L,O)=>{[g.el,g.anchor]=v(g.children,A,L,O,g.el,g.anchor)},S=({el:g,anchor:A},L,O)=>{let N;for(;g&&g!==A;)N=d(g),i(g,L,O),g=N;i(A,L,O)},E=({el:g,anchor:A})=>{let L;for(;g&&g!==A;)L=d(g),s(g),g=L;s(A)},z=(g,A,L,O,N,q,Z,M,_)=>{A.type==="svg"?Z="svg":A.type==="math"&&(Z="mathml"),g==null?I(A,L,O,N,q,Z,M,_):Q(g,A,N,q,Z,M,_)},I=(g,A,L,O,N,q,Z,M)=>{let _,C;const{props:X,shapeFlag:V,transition:W,dirs:ut}=g;if(_=g.el=r(g.type,q,X&&X.is,X),V&8?h(_,g.children):V&16&&B(g.children,_,null,O,N,ic(g,q),Z,M),ut&&ws(g,null,O,"created"),R(_,g,g.scopeId,Z,O),X){for(const mt in X)mt!=="value"&&!jo(mt)&&o(_,mt,null,X[mt],q,O);"value"in X&&o(_,"value",null,X.value,q),(C=X.onVnodeBeforeMount)&&Ei(C,O,g)}ut&&ws(g,null,O,"beforeMount");const ct=m0(N,W);ct&&W.beforeEnter(_),i(_,A,L),((C=X&&X.onVnodeMounted)||ct||ut)&&Yn(()=>{C&&Ei(C,O,g),ct&&W.enter(_),ut&&ws(g,null,O,"mounted")},N)},R=(g,A,L,O,N)=>{if(L&&p(g,L),O)for(let q=0;q<O.length;q++)p(g,O[q]);if(N){let q=N.subTree;if(A===q||If(q.type)&&(q.ssContent===A||q.ssFallback===A)){const Z=N.vnode;R(g,Z,Z.scopeId,Z.slotScopeIds,N.parent)}}},B=(g,A,L,O,N,q,Z,M,_=0)=>{for(let C=_;C<g.length;C++){const X=g[C]=M?ds(g[C]):Ai(g[C]);x(null,X,A,L,O,N,q,Z,M)}},Q=(g,A,L,O,N,q,Z)=>{const M=A.el=g.el;let{patchFlag:_,dynamicChildren:C,dirs:X}=A;_|=g.patchFlag&16;const V=g.props||Fe,W=A.props||Fe;let ut;if(L&&Ss(L,!1),(ut=W.onVnodeBeforeUpdate)&&Ei(ut,L,A,g),X&&ws(A,g,L,"beforeUpdate"),L&&Ss(L,!0),(V.innerHTML&&W.innerHTML==null||V.textContent&&W.textContent==null)&&h(M,""),C?y(g.dynamicChildren,C,M,L,O,ic(A,N),q):Z||$(g,A,M,null,L,O,ic(A,N),q,!1),_>0){if(_&16)b(M,V,W,L,N);else if(_&2&&V.class!==W.class&&o(M,"class",null,W.class,N),_&4&&o(M,"style",V.style,W.style,N),_&8){const ct=A.dynamicProps;for(let mt=0;mt<ct.length;mt++){const Tt=ct[mt],ht=V[Tt],yt=W[Tt];(yt!==ht||Tt==="value")&&o(M,Tt,ht,yt,N,L)}}_&1&&g.children!==A.children&&h(M,A.children)}else!Z&&C==null&&b(M,V,W,L,N);((ut=W.onVnodeUpdated)||X)&&Yn(()=>{ut&&Ei(ut,L,A,g),X&&ws(A,g,L,"updated")},O)},y=(g,A,L,O,N,q,Z)=>{for(let M=0;M<A.length;M++){const _=g[M],C=A[M],X=_.el&&(_.type===rn||!Fo(_,C)||_.shapeFlag&70)?u(_.el):L;x(_,C,X,null,O,N,q,Z,!0)}},b=(g,A,L,O,N)=>{if(A!==L){if(A!==Fe)for(const q in A)!jo(q)&&!(q in L)&&o(g,q,A[q],null,N,O);for(const q in L){if(jo(q))continue;const Z=L[q],M=A[q];Z!==M&&q!=="value"&&o(g,q,M,Z,N,O)}"value"in L&&o(g,"value",A.value,L.value,N)}},U=(g,A,L,O,N,q,Z,M,_)=>{const C=A.el=g?g.el:a(""),X=A.anchor=g?g.anchor:a("");let{patchFlag:V,dynamicChildren:W,slotScopeIds:ut}=A;ut&&(M=M?M.concat(ut):ut),g==null?(i(C,L,O),i(X,L,O),B(A.children||[],L,X,N,q,Z,M,_)):V>0&&V&64&&W&&g.dynamicChildren?(y(g.dynamicChildren,W,L,N,q,Z,M),(A.key!=null||N&&A===N.subTree)&&Tf(g,A,!0)):$(g,A,L,X,N,q,Z,M,_)},k=(g,A,L,O,N,q,Z,M,_)=>{A.slotScopeIds=M,g==null?A.shapeFlag&512?N.ctx.activate(A,L,O,Z,_):et(A,L,O,N,q,Z,_):rt(g,A,_)},et=(g,A,L,O,N,q,Z)=>{const M=g.component=N0(g,O,N);if(ff(g)&&(M.ctx.renderer=ft),F0(M,!1,Z),M.asyncDep){if(N&&N.registerDep(M,j,Z),!g.el){const _=M.subTree=Be(Bs);f(null,_,A,L)}}else j(M,g,A,L,N,q,Z)},rt=(g,A,L)=>{const O=A.component=g.component;if(b0(g,A,L))if(O.asyncDep&&!O.asyncResolved){nt(O,A,L);return}else O.next=A,O.update();else A.el=g.el,O.vnode=A},j=(g,A,L,O,N,q,Z)=>{const M=()=>{if(g.isMounted){let{next:V,bu:W,u:ut,parent:ct,vnode:mt}=g;{const Dt=Af(g);if(Dt){V&&(V.el=mt.el,nt(g,V,Z)),Dt.asyncDep.then(()=>{g.isUnmounted||M()});return}}let Tt=V,ht;Ss(g,!1),V?(V.el=mt.el,nt(g,V,Z)):V=mt,W&&Ja(W),(ht=V.props&&V.props.onVnodeBeforeUpdate)&&Ei(ht,ct,V,mt),Ss(g,!0);const yt=sc(g),At=g.subTree;g.subTree=yt,x(At,yt,u(At.el),F(At),g,N,q),V.el=yt.el,Tt===null&&E0(g,yt.el),ut&&Yn(ut,N),(ht=V.props&&V.props.onVnodeUpdated)&&Yn(()=>Ei(ht,ct,V,mt),N)}else{let V;const{el:W,props:ut}=A,{bm:ct,m:mt,parent:Tt,root:ht,type:yt}=g,At=Ko(A);if(Ss(g,!1),ct&&Ja(ct),!At&&(V=ut&&ut.onVnodeBeforeMount)&&Ei(V,Tt,A),Ss(g,!0),W&&it){const Dt=()=>{g.subTree=sc(g),it(W,g.subTree,g,N,null)};At&&yt.__asyncHydrate?yt.__asyncHydrate(W,g,Dt):Dt()}else{ht.ce&&ht.ce._injectChildStyle(yt);const Dt=g.subTree=sc(g);x(null,Dt,L,O,g,N,q),A.el=Dt.el}if(mt&&Yn(mt,N),!At&&(V=ut&&ut.onVnodeMounted)){const Dt=A;Yn(()=>Ei(V,Tt,Dt),N)}(A.shapeFlag&256||Tt&&Ko(Tt.vnode)&&Tt.vnode.shapeFlag&256)&&g.a&&Yn(g.a,N),g.isMounted=!0,A=L=O=null}};g.scope.on();const _=g.effect=new Hd(M);g.scope.off();const C=g.update=_.run.bind(_),X=g.job=_.runIfDirty.bind(_);X.i=g,X.id=g.uid,_.scheduler=()=>uu(X),Ss(g,!0),C()},nt=(g,A,L)=>{A.component=g;const O=g.vnode.props;g.vnode=A,g.next=null,c0(g,A.props,O,L),d0(g,A.children,L),xs(),Wu(g),ys()},$=(g,A,L,O,N,q,Z,M,_=!1)=>{const C=g&&g.children,X=g?g.shapeFlag:0,V=A.children,{patchFlag:W,shapeFlag:ut}=A;if(W>0){if(W&128){pt(C,V,L,O,N,q,Z,M,_);return}else if(W&256){gt(C,V,L,O,N,q,Z,M,_);return}}ut&8?(X&16&&Mt(C,N,q),V!==C&&h(L,V)):X&16?ut&16?pt(C,V,L,O,N,q,Z,M,_):Mt(C,N,q,!0):(X&8&&h(L,""),ut&16&&B(V,L,O,N,q,Z,M,_))},gt=(g,A,L,O,N,q,Z,M,_)=>{g=g||ho,A=A||ho;const C=g.length,X=A.length,V=Math.min(C,X);let W;for(W=0;W<V;W++){const ut=A[W]=_?ds(A[W]):Ai(A[W]);x(g[W],ut,L,null,N,q,Z,M,_)}C>X?Mt(g,N,q,!0,!1,V):B(A,L,O,N,q,Z,M,_,V)},pt=(g,A,L,O,N,q,Z,M,_)=>{let C=0;const X=A.length;let V=g.length-1,W=X-1;for(;C<=V&&C<=W;){const ut=g[C],ct=A[C]=_?ds(A[C]):Ai(A[C]);if(Fo(ut,ct))x(ut,ct,L,null,N,q,Z,M,_);else break;C++}for(;C<=V&&C<=W;){const ut=g[V],ct=A[W]=_?ds(A[W]):Ai(A[W]);if(Fo(ut,ct))x(ut,ct,L,null,N,q,Z,M,_);else break;V--,W--}if(C>V){if(C<=W){const ut=W+1,ct=ut<X?A[ut].el:O;for(;C<=W;)x(null,A[C]=_?ds(A[C]):Ai(A[C]),L,ct,N,q,Z,M,_),C++}}else if(C>W)for(;C<=V;)Lt(g[C],N,q,!0),C++;else{const ut=C,ct=C,mt=new Map;for(C=ct;C<=W;C++){const Ut=A[C]=_?ds(A[C]):Ai(A[C]);Ut.key!=null&&mt.set(Ut.key,C)}let Tt,ht=0;const yt=W-ct+1;let At=!1,Dt=0;const Pt=new Array(yt);for(C=0;C<yt;C++)Pt[C]=0;for(C=ut;C<=V;C++){const Ut=g[C];if(ht>=yt){Lt(Ut,N,q,!0);continue}let jt;if(Ut.key!=null)jt=mt.get(Ut.key);else for(Tt=ct;Tt<=W;Tt++)if(Pt[Tt-ct]===0&&Fo(Ut,A[Tt])){jt=Tt;break}jt===void 0?Lt(Ut,N,q,!0):(Pt[jt-ct]=C+1,jt>=Dt?Dt=jt:At=!0,x(Ut,A[jt],L,null,N,q,Z,M,_),ht++)}const qt=At?g0(Pt):ho;for(Tt=qt.length-1,C=yt-1;C>=0;C--){const Ut=ct+C,jt=A[Ut],G=Ut+1<X?A[Ut+1].el:O;Pt[C]===0?x(null,jt,L,G,N,q,Z,M,_):At&&(Tt<0||C!==qt[Tt]?wt(jt,L,G,2):Tt--)}}},wt=(g,A,L,O,N=null)=>{const{el:q,type:Z,transition:M,children:_,shapeFlag:C}=g;if(C&6){wt(g.component.subTree,A,L,O);return}if(C&128){g.suspense.move(A,L,O);return}if(C&64){Z.move(g,A,L,ft);return}if(Z===rn){i(q,A,L);for(let V=0;V<_.length;V++)wt(_[V],A,L,O);i(g.anchor,A,L);return}if(Z===oc){S(g,A,L);return}if(O!==2&&C&1&&M)if(O===0)M.beforeEnter(q),i(q,A,L),Yn(()=>M.enter(q),N);else{const{leave:V,delayLeave:W,afterLeave:ut}=M,ct=()=>i(q,A,L),mt=()=>{V(q,()=>{ct(),ut&&ut()})};W?W(q,ct,mt):mt()}else i(q,A,L)},Lt=(g,A,L,O=!1,N=!1)=>{const{type:q,props:Z,ref:M,children:_,dynamicChildren:C,shapeFlag:X,patchFlag:V,dirs:W,cacheIndex:ut}=g;if(V===-2&&(N=!1),M!=null&&$c(M,null,L,g,!0),ut!=null&&(A.renderCache[ut]=void 0),X&256){A.ctx.deactivate(g);return}const ct=X&1&&W,mt=!Ko(g);let Tt;if(mt&&(Tt=Z&&Z.onVnodeBeforeUnmount)&&Ei(Tt,A,g),X&6)dt(g.component,L,O);else{if(X&128){g.suspense.unmount(L,O);return}ct&&ws(g,null,A,"beforeUnmount"),X&64?g.type.remove(g,A,L,ft,O):C&&!C.hasOnce&&(q!==rn||V>0&&V&64)?Mt(C,A,L,!1,!0):(q===rn&&V&384||!N&&X&16)&&Mt(_,A,L),O&&zt(g)}(mt&&(Tt=Z&&Z.onVnodeUnmounted)||ct)&&Yn(()=>{Tt&&Ei(Tt,A,g),ct&&ws(g,null,A,"unmounted")},L)},zt=g=>{const{type:A,el:L,anchor:O,transition:N}=g;if(A===rn){at(L,O);return}if(A===oc){E(g);return}const q=()=>{s(L),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:Z,delayLeave:M}=N,_=()=>Z(L,q);M?M(g.el,q,_):_()}else q()},at=(g,A)=>{let L;for(;g!==A;)L=d(g),s(g),g=L;s(A)},dt=(g,A,L)=>{const{bum:O,scope:N,job:q,subTree:Z,um:M,m:_,a:C}=g;Ju(_),Ju(C),O&&Ja(O),N.stop(),q&&(q.flags|=8,Lt(Z,g,A,L)),M&&Yn(M,A),Yn(()=>{g.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Mt=(g,A,L,O=!1,N=!1,q=0)=>{for(let Z=q;Z<g.length;Z++)Lt(g[Z],A,L,O,N)},F=g=>{if(g.shapeFlag&6)return F(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const A=d(g.anchor||g.el),L=A&&A[Om];return L?d(L):A};let lt=!1;const st=(g,A,L)=>{g==null?A._vnode&&Lt(A._vnode,null,null,!0):x(A._vnode||null,g,A,null,null,null,L),A._vnode=g,lt||(lt=!0,Wu(),lf(),lt=!1)},ft={p:x,um:Lt,m:wt,r:zt,mt:et,mc:B,pc:$,pbc:y,n:F,o:n};let St,it;return{render:st,hydrate:St,createApp:r0(st,St)}}function ic({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ss({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function m0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Tf(n,t,e=!1){const i=n.children,s=t.children;if(fe(i)&&fe(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=ds(s[o]),a.el=r.el),!e&&a.patchFlag!==-2&&Tf(r,a)),a.type===Ba&&(a.el=r.el)}}function g0(n){const t=n.slice(),e=[0];let i,s,o,r,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=e[e.length-1],n[s]<l){t[i]=s,e.push(i);continue}for(o=0,r=e.length-1;o<r;)a=o+r>>1,n[e[a]]<l?o=a+1:r=a;l<n[e[o]]&&(o>0&&(t[i]=e[o-1]),e[o]=i)}}for(o=e.length,r=e[o-1];o-- >0;)e[o]=r,r=t[r];return e}function Af(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Af(t)}function Ju(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const v0=Symbol.for("v-scx"),_0=()=>Zi(v0);function He(n,t,e){return Pf(n,t,e)}function Pf(n,t,e=Fe){const{immediate:i,deep:s,flush:o,once:r}=e,a=dn({},e);let c;if(za)if(o==="sync"){const d=_0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=Ci,d.resume=Ci,d.pause=Ci,d}const l=_n;a.call=(d,p,v)=>Li(d,l,p,v);let h=!1;o==="post"?a.scheduler=d=>{Yn(d,l&&l.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(d,p)=>{p?d():uu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,l&&(d.id=l.uid,d.i=l))};const u=Lm(n,t,a);return c&&c.push(u),u}function x0(n,t,e){const i=this.proxy,s=ln(n)?n.includes(".")?Rf(i,n):()=>i[n]:n.bind(i,i);let o;he(t)?o=t:(o=t.handler,e=t);const r=xr(this),a=Pf(s,o.bind(i),e);return r(),a}function Rf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const y0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${ri(t)}Modifiers`]||n[`${ks(t)}Modifiers`];function M0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Fe;let s=e;const o=t.startsWith("update:"),r=o&&y0(i,t.slice(7));r&&(r.trim&&(s=e.map(h=>ln(h)?h.trim():h)),r.number&&(s=e.map(Kp)));let a,c=i[a=Za(t)]||i[a=Za(ri(t))];!c&&o&&(c=i[a=Za(ks(t))]),c&&Li(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Li(l,n,6,s)}}function Cf(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const o=n.emits;let r={},a=!1;if(!he(n)){const c=l=>{const h=Cf(l,t,!0);h&&(a=!0,dn(r,h))};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!a?(Je(n)&&i.set(n,null),null):(fe(o)?o.forEach(c=>r[c]=null):dn(r,o),Je(n)&&i.set(n,r),r)}function Oa(n,t){return!n||!Ra(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ie(n,t[0].toLowerCase()+t.slice(1))||Ie(n,ks(t))||Ie(n,t))}function sc(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:a,emit:c,render:l,renderCache:h,props:u,data:d,setupState:p,ctx:v,inheritAttrs:x}=n,m=va(n);let f,T;try{if(e.shapeFlag&4){const E=s||i,z=E;f=Ai(l.call(z,E,h,u,p,d,v)),T=a}else{const E=t;f=Ai(E.length>1?E(u,{attrs:a,slots:r,emit:c}):E(u,null)),T=t.props?a:w0(a)}}catch(E){Jo.length=0,Na(E,n,1),f=Be(Bs)}let S=f;if(T&&x!==!1){const E=Object.keys(T),{shapeFlag:z}=S;E.length&&z&7&&(o&&E.some($l)&&(T=S0(T,o)),S=Mo(S,T,!1,!0))}return e.dirs&&(S=Mo(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&hu(S,e.transition),f=S,va(m),f}const w0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ra(e))&&((t||(t={}))[e]=n[e]);return t},S0=(n,t)=>{const e={};for(const i in n)(!$l(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function b0(n,t,e){const{props:i,children:s,component:o}=n,{props:r,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return i?Qu(i,r,l):!!r;if(c&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(r[d]!==i[d]&&!Oa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Qu(i,r,l):!0:!!r;return!1}function Qu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(t[o]!==n[o]&&!Oa(e,o))return!0}return!1}function E0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const If=n=>n.__isSuspense;function T0(n,t){t&&t.pendingBranch?fe(n)?t.effects.push(...n):t.effects.push(n):Nm(n)}const rn=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),Bs=Symbol.for("v-cmt"),oc=Symbol.for("v-stc"),Jo=[];let Kn=null;function Hn(n=!1){Jo.push(Kn=n?null:[])}function A0(){Jo.pop(),Kn=Jo[Jo.length-1]||null}let lr=1;function th(n){lr+=n,n<0&&Kn&&(Kn.hasOnce=!0)}function Lf(n){return n.dynamicChildren=lr>0?Kn||ho:null,A0(),lr>0&&Kn&&Kn.push(n),n}function ti(n,t,e,i,s,o){return Lf(Ot(n,t,e,i,s,o,!0))}function P0(n,t,e,i,s){return Lf(Be(n,t,e,i,s,!0))}function xa(n){return n?n.__v_isVNode===!0:!1}function Fo(n,t){return n.type===t.type&&n.key===t.key}const Df=({key:n})=>n??null,ra=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ln(n)||xn(n)||he(n)?{i:$n,r:n,k:t,f:!!e}:n:null);function Ot(n,t=null,e=null,i=0,s=null,o=n===rn?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Df(t),ref:t&&ra(t),scopeId:hf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$n};return a?(mu(c,e),o&128&&n.normalize(c)):e&&(c.shapeFlag|=ln(e)?8:16),lr>0&&!r&&Kn&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Kn.push(c),c}const Be=R0;function R0(n,t=null,e=null,i=0,s=null,o=!1){if((!n||n===Zm)&&(n=Bs),xa(n)){const a=Mo(n,t,!0);return e&&mu(a,e),lr>0&&!o&&Kn&&(a.shapeFlag&6?Kn[Kn.indexOf(n)]=a:Kn.push(a)),a.patchFlag=-2,a}if(H0(n)&&(n=n.__vccOpts),t){t=C0(t);let{class:a,style:c}=t;a&&!ln(a)&&(t.class=zn(a)),Je(c)&&(au(c)&&!fe(c)&&(c=dn({},c)),t.style=Jl(c))}const r=ln(n)?1:If(n)?128:Bm(n)?64:Je(n)?4:he(n)?2:0;return Ot(n,t,e,i,s,r,o,!0)}function C0(n){return n?au(n)||xf(n)?dn({},n):n:null}function Mo(n,t,e=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:a,transition:c}=n,l=t?L0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Df(l),ref:t&&t.ref?e&&o?fe(o)?o.concat(ra(t)):[o,ra(t)]:ra(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==rn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Mo(n.ssContent),ssFallback:n.ssFallback&&Mo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&hu(h,c.clone(h)),h}function si(n=" ",t=0){return Be(Ba,null,n,t)}function I0(n="",t=!1){return t?(Hn(),P0(Bs,null,n)):Be(Bs,null,n)}function Ai(n){return n==null||typeof n=="boolean"?Be(Bs):fe(n)?Be(rn,null,n.slice()):xa(n)?ds(n):Be(Ba,null,String(n))}function ds(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Mo(n)}function mu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(fe(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),mu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!xf(t)?t._ctx=$n:s===3&&$n&&($n.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else he(t)?(t={default:t,_ctx:$n},e=32):(t=String(t),i&64?(e=16,t=[si(t)]):e=8);n.children=t,n.shapeFlag|=e}function L0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=zn([t.class,i.class]));else if(s==="style")t.style=Jl([t.style,i.style]);else if(Ra(s)){const o=t[s],r=i[s];r&&o!==r&&!(fe(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=i[s])}return t}function Ei(n,t,e,i=null){Li(n,t,7,[e,i])}const D0=gf();let U0=0;function N0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||D0,o={uid:U0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new im(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mf(i,s),emitsOptions:Cf(i,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:i.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=M0.bind(null,o),n.ce&&n.ce(o),o}let _n=null,ya,tl;{const n=zd(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};ya=t("__VUE_INSTANCE_SETTERS__",e=>_n=e),tl=t("__VUE_SSR_SETTERS__",e=>za=e)}const xr=n=>{const t=_n;return ya(n),n.scope.on(),()=>{n.scope.off(),ya(t)}},eh=()=>{_n&&_n.scope.off(),ya(null)};function Uf(n){return n.vnode.shapeFlag&4}let za=!1;function F0(n,t=!1,e=!1){t&&tl(t);const{props:i,children:s}=n.vnode,o=Uf(n);a0(n,i,o,t),h0(n,s,e);const r=o?O0(n,t):void 0;return t&&tl(!1),r}function O0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Qm);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?z0(n):null,o=xr(n);xs();const r=_r(i,n,0,[n.props,s]);if(ys(),o(),Od(r)){if(Ko(n)||df(n),r.then(eh,eh),t)return r.then(a=>{nh(n,a,t)}).catch(a=>{Na(a,n,0)});n.asyncDep=r}else nh(n,r,t)}else Nf(n,t)}function nh(n,t,e){he(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Je(t)&&(n.setupState=of(t)),Nf(n,e)}let ih;function Nf(n,t,e){const i=n.type;if(!n.render){if(!t&&ih&&!i.render){const s=i.template||fu(n).template;if(s){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=dn(dn({isCustomElement:o,delimiters:a},r),c);i.render=ih(s,l)}}n.render=i.render||Ci}{const s=xr(n);xs();try{t0(n)}finally{ys(),s()}}}const B0={get(n,t){return yn(n,"get",""),n[t]}};function z0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,B0),slots:n.slots,emit:n.emit,expose:t}}function Ga(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(of(Tm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Zo)return Zo[e](n)},has(t,e){return e in t||e in Zo}})):n.proxy}function G0(n,t=!0){return he(n)?n.displayName||n.name:n.name||t&&n.__name}function H0(n){return he(n)&&"__vccOpts"in n}const hi=(n,t)=>Cm(n,t,za);function Ff(n,t,e){const i=arguments.length;return i===2?Je(t)&&!fe(t)?xa(t)?Be(n,null,[t]):Be(n,t):Be(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&xa(e)&&(e=[e]),Be(n,t,e))}const k0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let el;const sh=typeof window<"u"&&window.trustedTypes;if(sh)try{el=sh.createPolicy("vue",{createHTML:n=>n})}catch{}const Of=el?n=>el.createHTML(n):n=>n,V0="http://www.w3.org/2000/svg",W0="http://www.w3.org/1998/Math/MathML",Xi=typeof document<"u"?document:null,oh=Xi&&Xi.createElement("template"),X0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Xi.createElementNS(V0,n):t==="mathml"?Xi.createElementNS(W0,n):e?Xi.createElement(n,{is:e}):Xi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Xi.createTextNode(n),createComment:n=>Xi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Xi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,o){const r=e?e.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===o||!(s=s.nextSibling)););else{oh.innerHTML=Of(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=oh.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},q0=Symbol("_vtc");function Y0(n,t,e){const i=n[q0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Ma=Symbol("_vod"),Bf=Symbol("_vsh"),j0={beforeMount(n,{value:t},{transition:e}){n[Ma]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Oo(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Oo(n,!0),i.enter(n)):i.leave(n,()=>{Oo(n,!1)}):Oo(n,t))},beforeUnmount(n,{value:t}){Oo(n,t)}};function Oo(n,t){n.style.display=t?n[Ma]:"none",n[Bf]=!t}const $0=Symbol(""),K0=/(^|;)\s*display\s*:/;function Z0(n,t,e){const i=n.style,s=ln(e);let o=!1;if(e&&!s){if(t)if(ln(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&aa(i,a,"")}else for(const r in t)e[r]==null&&aa(i,r,"");for(const r in e)r==="display"&&(o=!0),aa(i,r,e[r])}else if(s){if(t!==e){const r=i[$0];r&&(e+=";"+r),i.cssText=e,o=K0.test(e)}}else t&&n.removeAttribute("style");Ma in n&&(n[Ma]=o?i.display:"",n[Bf]&&(i.display="none"))}const rh=/\s*!important$/;function aa(n,t,e){if(fe(e))e.forEach(i=>aa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=J0(n,t);rh.test(e)?n.setProperty(ks(i),e.replace(rh,""),"important"):n[i]=e}}const ah=["Webkit","Moz","ms"],rc={};function J0(n,t){const e=rc[t];if(e)return e;let i=ri(t);if(i!=="filter"&&i in n)return rc[t]=i;i=La(i);for(let s=0;s<ah.length;s++){const o=ah[s]+i;if(o in n)return rc[t]=o}return t}const ch="http://www.w3.org/1999/xlink";function lh(n,t,e,i,s,o=nm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ch,t.slice(6,t.length)):n.setAttributeNS(ch,t,e):e==null||o&&!Gd(e)?n.removeAttribute(t):n.setAttribute(t,o?"":Co(e)?String(e):e)}function uh(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Of(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(r!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const r=typeof n[t];r==="boolean"?e=Gd(e):e==null&&r==="string"?(e="",o=!0):r==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(t)}function Q0(n,t,e,i){n.addEventListener(t,e,i)}function tg(n,t,e,i){n.removeEventListener(t,e,i)}const hh=Symbol("_vei");function eg(n,t,e,i,s=null){const o=n[hh]||(n[hh]={}),r=o[t];if(i&&r)r.value=i;else{const[a,c]=ng(t);if(i){const l=o[t]=og(i,s);Q0(n,a,l,c)}else r&&(tg(n,a,r,c),o[t]=void 0)}}const dh=/(?:Once|Passive|Capture)$/;function ng(n){let t;if(dh.test(n)){t={};let i;for(;i=n.match(dh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ks(n.slice(2)),t]}let ac=0;const ig=Promise.resolve(),sg=()=>ac||(ig.then(()=>ac=0),ac=Date.now());function og(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Li(rg(i,e.value),t,5,[i])};return e.value=n,e.attached=sg(),e}function rg(n,t){if(fe(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const fh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ag=(n,t,e,i,s,o)=>{const r=s==="svg";t==="class"?Y0(n,i,r):t==="style"?Z0(n,e,i):Ra(t)?$l(t)||eg(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cg(n,t,i,r))?(uh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&lh(n,t,i,r,o,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!ln(i))?uh(n,ri(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),lh(n,t,i,r))};function cg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&fh(t)&&he(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return fh(t)&&ln(e)?!1:t in n}const lg=dn({patchProp:ag},X0);let ph;function ug(){return ph||(ph=f0(lg))}const hg=(...n)=>{const t=ug().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=fg(i);if(!s)return;const o=t._component;!he(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=e(s,!1,dg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function dg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function fg(n){return ln(n)?document.querySelector(n):n}const pg={id:"app"},mg=Ln({__name:"App",setup(n){const t=Kt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return Gn(()=>{window.addEventListener("mousemove",e)}),du(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const o=Xu("router-link"),r=Xu("router-view");return Hn(),ti("div",pg,[Fm(Ot("nav",null,[Be(o,{to:"/3d-bear-arts/leather"},{default:ii(()=>s[0]||(s[0]=[si("LV")])),_:1}),Be(o,{to:"/3d-bear-arts/pop-art"},{default:ii(()=>s[1]||(s[1]=[si("Pop MouseMove")])),_:1}),Be(o,{to:"/3d-bear-arts/pop-art-bear-3"},{default:ii(()=>s[2]||(s[2]=[si("Pop Art")])),_:1}),Be(o,{to:"/3d-bear-arts/machine"},{default:ii(()=>s[3]||(s[3]=[si("Machine")])),_:1}),Be(o,{to:"/3d-bear-arts/water"},{default:ii(()=>s[4]||(s[4]=[si("Water")])),_:1}),Be(o,{to:"/3d-bear-arts/ghost-bear"},{default:ii(()=>s[5]||(s[5]=[si("Pumpkin")])),_:1}),Be(o,{to:"/3d-bear-arts/white-ghost-bear"},{default:ii(()=>s[6]||(s[6]=[si("Ghost")])),_:1}),Be(o,{to:"/3d-bear-arts/santa"},{default:ii(()=>s[7]||(s[7]=[si("Santa")])),_:1}),Be(o,{to:"/3d-bear-arts/coffee"},{default:ii(()=>s[8]||(s[8]=[si("Coffee")])),_:1}),Be(o,{to:"/3d-bear-arts/bears"},{default:ii(()=>s[9]||(s[9]=[si("Bears")])),_:1}),Be(o,{to:"/3d-bear-arts/"},{default:ii(()=>s[10]||(s[10]=[si("Money")])),_:1})],512),[[j0,t.value]]),Be(r)])}}}),ei=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},gg=ei(mg,[["__scopeId","data-v-547743bc"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ro=typeof document<"u";function zf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function vg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&zf(n.default)}const Ue=Object.assign;function cc(n,t){const e={};for(const i in t){const s=t[i];e[i]=gi(s)?s.map(n):n(s)}return e}const Qo=()=>{},gi=Array.isArray,Gf=/#/g,_g=/&/g,xg=/\//g,yg=/=/g,Mg=/\?/g,Hf=/\+/g,wg=/%5B/g,Sg=/%5D/g,kf=/%5E/g,bg=/%60/g,Vf=/%7B/g,Eg=/%7C/g,Wf=/%7D/g,Tg=/%20/g;function gu(n){return encodeURI(""+n).replace(Eg,"|").replace(wg,"[").replace(Sg,"]")}function Ag(n){return gu(n).replace(Vf,"{").replace(Wf,"}").replace(kf,"^")}function nl(n){return gu(n).replace(Hf,"%2B").replace(Tg,"+").replace(Gf,"%23").replace(_g,"%26").replace(bg,"`").replace(Vf,"{").replace(Wf,"}").replace(kf,"^")}function Pg(n){return nl(n).replace(yg,"%3D")}function Rg(n){return gu(n).replace(Gf,"%23").replace(Mg,"%3F")}function Cg(n){return n==null?"":Rg(n).replace(xg,"%2F")}function ur(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Ig=/\/$/,Lg=n=>n.replace(Ig,"");function lc(n,t,e="/"){let i,s={},o="",r="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),s=n(o)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=Fg(i??t,e),{fullPath:i+(o&&"?")+o+r,path:i,query:s,hash:ur(r)}}function Dg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function mh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Ug(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&wo(t.matched[i],e.matched[s])&&Xf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function wo(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Xf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Ng(n[e],t[e]))return!1;return!0}function Ng(n,t){return gi(n)?gh(n,t):gi(t)?gh(t,n):n===t}function gh(n,t){return gi(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Fg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=e.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return e.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const ss={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var hr;(function(n){n.pop="pop",n.push="push"})(hr||(hr={}));var tr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(tr||(tr={}));function Og(n){if(!n)if(ro){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Lg(n)}const Bg=/^[^#]+#/;function zg(n,t){return n.replace(Bg,"#")+t}function Gg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Ha=()=>({left:window.scrollX,top:window.scrollY});function Hg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Gg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function vh(n,t){return(history.state?history.state.position-t:-1)+n}const il=new Map;function kg(n,t){il.set(n,t)}function Vg(n){const t=il.get(n);return il.delete(n),t}let Wg=()=>location.protocol+"//"+location.host;function qf(n,t){const{pathname:e,search:i,hash:s}=t,o=n.indexOf("#");if(o>-1){let a=s.includes(n.slice(o))?n.slice(o).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),mh(c,"")}return mh(e,n)+i+s}function Xg(n,t,e,i){let s=[],o=[],r=null;const a=({state:d})=>{const p=qf(n,location),v=e.value,x=t.value;let m=0;if(d){if(e.value=p,t.value=d,r&&r===v){r=null;return}m=x?d.position-x.position:0}else i(p);s.forEach(f=>{f(e.value,v,{delta:m,type:hr.pop,direction:m?m>0?tr.forward:tr.back:tr.unknown})})};function c(){r=e.value}function l(d){s.push(d);const p=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return o.push(p),p}function h(){const{history:d}=window;d.state&&d.replaceState(Ue({},d.state,{scroll:Ha()}),"")}function u(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function _h(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Ha():null}}function qg(n){const{history:t,location:e}=window,i={value:qf(n,e)},s={value:t.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,l,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+c:Wg()+n+c;try{t[h?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),e[h?"replace":"assign"](d)}}function r(c,l){const h=Ue({},t.state,_h(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});o(c,h,!0),i.value=c}function a(c,l){const h=Ue({},s.value,t.state,{forward:c,scroll:Ha()});o(h.current,h,!0);const u=Ue({},_h(i.value,c,null),{position:h.position+1},l);o(c,u,!1),i.value=c}return{location:i,state:s,push:a,replace:r}}function Yg(n){n=Og(n);const t=qg(n),e=Xg(n,t.state,t.location,t.replace);function i(o,r=!0){r||e.pauseListeners(),history.go(o)}const s=Ue({location:"",base:n,go:i,createHref:zg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function jg(n){return typeof n=="string"||n&&typeof n=="object"}function Yf(n){return typeof n=="string"||typeof n=="symbol"}const jf=Symbol("");var xh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(xh||(xh={}));function So(n,t){return Ue(new Error,{type:n,[jf]:!0},t)}function Oi(n,t){return n instanceof Error&&jf in n&&(t==null||!!(n.type&t))}const yh="[^/]+?",$g={sensitive:!1,strict:!1,start:!0,end:!0},Kg=/[.+*?^${}()[\]/\\]/g;function Zg(n,t){const e=Ue({},$g,t),i=[];let s=e.start?"^":"";const o=[];for(const l of n){const h=l.length?[]:[90];e.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const d=l[u];let p=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(Kg,"\\$&"),p+=40;else if(d.type===1){const{value:v,repeatable:x,optional:m,regexp:f}=d;o.push({name:v,repeatable:x,optional:m});const T=f||yh;if(T!==yh){p+=10;try{new RegExp(`(${T})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${v}" (${T}): `+E.message)}}let S=x?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;u||(S=m&&l.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),s+=S,p+=20,m&&(p+=-8),x&&(p+=-20),T===".*"&&(p+=-50)}h.push(p)}i.push(h)}if(e.strict&&e.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const r=new RegExp(s,e.sensitive?"":"i");function a(l){const h=l.match(r),u={};if(!h)return null;for(let d=1;d<h.length;d++){const p=h[d]||"",v=o[d-1];u[v.name]=p&&v.repeatable?p.split("/"):p}return u}function c(l){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const p of d)if(p.type===0)h+=p.value;else if(p.type===1){const{value:v,repeatable:x,optional:m}=p,f=v in l?l[v]:"";if(gi(f)&&!x)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const T=gi(f)?f.join("/"):f;if(!T)if(m)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);h+=T}}return h||"/"}return{re:r,score:i,keys:o,parse:a,stringify:c}}function Jg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function $f(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const o=Jg(i[e],s[e]);if(o)return o;e++}if(Math.abs(s.length-i.length)===1){if(Mh(i))return 1;if(Mh(s))return-1}return s.length-i.length}function Mh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Qg={type:0,value:""},tv=/[a-zA-Z0-9_]/;function ev(n){if(!n)return[[]];if(n==="/")return[[Qg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${l}": ${p}`)}let e=0,i=e;const s=[];let o;function r(){o&&s.push(o),o=[]}let a=0,c,l="",h="";function u(){l&&(e===0?o.push({type:0,value:l}):e===1||e===2||e===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:c==="/"?(l&&u(),r()):c===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:c==="("?e=2:tv.test(c)?d():(u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:e=3:h+=c;break;case 3:u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),r(),s}function nv(n,t,e){const i=Zg(ev(n.path),e),s=Ue(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function iv(n,t){const e=[],i=new Map;t=Eh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function o(u,d,p){const v=!p,x=Sh(u);x.aliasOf=p&&p.record;const m=Eh(t,u),f=[x];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of E)f.push(Sh(Ue({},x,{components:p?p.record.components:x.components,path:z,aliasOf:p?p.record:x})))}let T,S;for(const E of f){const{path:z}=E;if(d&&z[0]!=="/"){const I=d.record.path,R=I[I.length-1]==="/"?"":"/";E.path=d.record.path+(z&&R+z)}if(T=nv(E,d,m),p?p.alias.push(T):(S=S||T,S!==T&&S.alias.push(T),v&&u.name&&!bh(T)&&r(u.name)),Kf(T)&&c(T),x.children){const I=x.children;for(let R=0;R<I.length;R++)o(I[R],T,p&&p.children[R])}p=p||T}return S?()=>{r(S)}:Qo}function r(u){if(Yf(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return e}function c(u){const d=rv(u,e);e.splice(d,0,u),u.record.name&&!bh(u)&&i.set(u.record.name,u)}function l(u,d){let p,v={},x,m;if("name"in u&&u.name){if(p=i.get(u.name),!p)throw So(1,{location:u});m=p.record.name,v=Ue(wh(d.params,p.keys.filter(S=>!S.optional).concat(p.parent?p.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),u.params&&wh(u.params,p.keys.map(S=>S.name))),x=p.stringify(v)}else if(u.path!=null)x=u.path,p=e.find(S=>S.re.test(x)),p&&(v=p.parse(x),m=p.record.name);else{if(p=d.name?i.get(d.name):e.find(S=>S.re.test(d.path)),!p)throw So(1,{location:u,currentLocation:d});m=p.record.name,v=Ue({},d.params,u.params),x=p.stringify(v)}const f=[];let T=p;for(;T;)f.unshift(T.record),T=T.parent;return{name:m,path:x,params:v,matched:f,meta:ov(f)}}n.forEach(u=>o(u));function h(){e.length=0,i.clear()}return{addRoute:o,resolve:l,removeRoute:r,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function wh(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Sh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:sv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function sv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function bh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function ov(n){return n.reduce((t,e)=>Ue(t,e.meta),{})}function Eh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function rv(n,t){let e=0,i=t.length;for(;e!==i;){const o=e+i>>1;$f(n,t[o])<0?i=o:e=o+1}const s=av(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function av(n){let t=n;for(;t=t.parent;)if(Kf(t)&&$f(n,t)===0)return t}function Kf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function cv(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(Hf," "),r=o.indexOf("="),a=ur(r<0?o:o.slice(0,r)),c=r<0?null:ur(o.slice(r+1));if(a in t){let l=t[a];gi(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Th(n){let t="";for(let e in n){const i=n[e];if(e=Pg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(gi(i)?i.map(o=>o&&nl(o)):[i&&nl(i)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+e,o!=null&&(t+="="+o))})}return t}function lv(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=gi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const uv=Symbol(""),Ah=Symbol(""),vu=Symbol(""),Zf=Symbol(""),sl=Symbol("");function Bo(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function fs(n,t,e,i,s,o=r=>r()){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(So(4,{from:e,to:t})):d instanceof Error?c(d):jg(d)?c(So(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),a())},h=o(()=>n.call(i&&i.instances[s],t,e,l));let u=Promise.resolve(h);n.length<3&&(u=u.then(l)),u.catch(d=>c(d))})}function uc(n,t,e,i,s=o=>o()){const o=[];for(const r of n)for(const a in r.components){let c=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(zf(c)){const h=(c.__vccOpts||c)[t];h&&o.push(fs(h,e,i,r,a,s))}else{let l=c();o.push(()=>l.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const u=vg(h)?h.default:h;r.mods[a]=h,r.components[a]=u;const p=(u.__vccOpts||u)[t];return p&&fs(p,e,i,r,a,s)()}))}}return o}function Ph(n){const t=Zi(vu),e=Zi(Zf),i=hi(()=>{const c=po(n.to);return t.resolve(c)}),s=hi(()=>{const{matched:c}=i.value,{length:l}=c,h=c[l-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(wo.bind(null,h));if(d>-1)return d;const p=Rh(c[l-2]);return l>1&&Rh(h)===p&&u[u.length-1].path!==p?u.findIndex(wo.bind(null,c[l-2])):d}),o=hi(()=>s.value>-1&&pv(e.params,i.value.params)),r=hi(()=>s.value>-1&&s.value===e.matched.length-1&&Xf(e.params,i.value.params));function a(c={}){return fv(c)?t[po(n.replace)?"replace":"push"](po(n.to)).catch(Qo):Promise.resolve()}return{route:i,href:hi(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const hv=Ln({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ph,setup(n,{slots:t}){const e=Ua(Ph(n)),{options:i}=Zi(vu),s=hi(()=>({[Ch(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Ch(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const o=t.default&&t.default(e);return n.custom?o:Ff("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},o)}}}),dv=hv;function fv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function pv(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!gi(s)||s.length!==i.length||i.some((o,r)=>o!==s[r]))return!1}return!0}function Rh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ch=(n,t,e)=>n??t??e,mv=Ln({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Zi(sl),s=hi(()=>n.route||i.value),o=Zi(Ah,0),r=hi(()=>{let l=po(o);const{matched:h}=s.value;let u;for(;(u=h[l])&&!u.components;)l++;return l}),a=hi(()=>s.value.matched[r.value]);oa(Ah,hi(()=>r.value+1)),oa(uv,a),oa(sl,s);const c=Kt();return He(()=>[c.value,a.value,n.name],([l,h,u],[d,p,v])=>{h&&(h.instances[u]=l,p&&p!==h&&l&&l===d&&(h.leaveGuards.size||(h.leaveGuards=p.leaveGuards),h.updateGuards.size||(h.updateGuards=p.updateGuards))),l&&h&&(!p||!wo(h,p)||!d)&&(h.enterCallbacks[u]||[]).forEach(x=>x(l))},{flush:"post"}),()=>{const l=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return Ih(e.default,{Component:d,route:l});const p=u.props[h],v=p?p===!0?l.params:typeof p=="function"?p(l):p:null,m=Ff(d,Ue({},v,t,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(u.instances[h]=null)},ref:c}));return Ih(e.default,{Component:m,route:l})||m}}});function Ih(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const gv=mv;function vv(n){const t=iv(n.routes,n),e=n.parseQuery||cv,i=n.stringifyQuery||Th,s=n.history,o=Bo(),r=Bo(),a=Bo(),c=fo(ss);let l=ss;ro&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=cc.bind(null,F=>""+F),u=cc.bind(null,Cg),d=cc.bind(null,ur);function p(F,lt){let st,ft;return Yf(F)?(st=t.getRecordMatcher(F),ft=lt):ft=F,t.addRoute(ft,st)}function v(F){const lt=t.getRecordMatcher(F);lt&&t.removeRoute(lt)}function x(){return t.getRoutes().map(F=>F.record)}function m(F){return!!t.getRecordMatcher(F)}function f(F,lt){if(lt=Ue({},lt||c.value),typeof F=="string"){const A=lc(e,F,lt.path),L=t.resolve({path:A.path},lt),O=s.createHref(A.fullPath);return Ue(A,L,{params:d(L.params),hash:ur(A.hash),redirectedFrom:void 0,href:O})}let st;if(F.path!=null)st=Ue({},F,{path:lc(e,F.path,lt.path).path});else{const A=Ue({},F.params);for(const L in A)A[L]==null&&delete A[L];st=Ue({},F,{params:u(A)}),lt.params=u(lt.params)}const ft=t.resolve(st,lt),St=F.hash||"";ft.params=h(d(ft.params));const it=Dg(i,Ue({},F,{hash:Ag(St),path:ft.path})),g=s.createHref(it);return Ue({fullPath:it,hash:St,query:i===Th?lv(F.query):F.query||{}},ft,{redirectedFrom:void 0,href:g})}function T(F){return typeof F=="string"?lc(e,F,c.value.path):Ue({},F)}function S(F,lt){if(l!==F)return So(8,{from:lt,to:F})}function E(F){return R(F)}function z(F){return E(Ue(T(F),{replace:!0}))}function I(F){const lt=F.matched[F.matched.length-1];if(lt&&lt.redirect){const{redirect:st}=lt;let ft=typeof st=="function"?st(F):st;return typeof ft=="string"&&(ft=ft.includes("?")||ft.includes("#")?ft=T(ft):{path:ft},ft.params={}),Ue({query:F.query,hash:F.hash,params:ft.path!=null?{}:F.params},ft)}}function R(F,lt){const st=l=f(F),ft=c.value,St=F.state,it=F.force,g=F.replace===!0,A=I(st);if(A)return R(Ue(T(A),{state:typeof A=="object"?Ue({},St,A.state):St,force:it,replace:g}),lt||st);const L=st;L.redirectedFrom=lt;let O;return!it&&Ug(i,ft,st)&&(O=So(16,{to:L,from:ft}),wt(ft,ft,!0,!1)),(O?Promise.resolve(O):y(L,ft)).catch(N=>Oi(N)?Oi(N,2)?N:pt(N):$(N,L,ft)).then(N=>{if(N){if(Oi(N,2))return R(Ue({replace:g},T(N.to),{state:typeof N.to=="object"?Ue({},St,N.to.state):St,force:it}),lt||L)}else N=U(L,ft,!0,g,St);return b(L,ft,N),N})}function B(F,lt){const st=S(F,lt);return st?Promise.reject(st):Promise.resolve()}function Q(F){const lt=at.values().next().value;return lt&&typeof lt.runWithContext=="function"?lt.runWithContext(F):F()}function y(F,lt){let st;const[ft,St,it]=_v(F,lt);st=uc(ft.reverse(),"beforeRouteLeave",F,lt);for(const A of ft)A.leaveGuards.forEach(L=>{st.push(fs(L,F,lt))});const g=B.bind(null,F,lt);return st.push(g),Mt(st).then(()=>{st=[];for(const A of o.list())st.push(fs(A,F,lt));return st.push(g),Mt(st)}).then(()=>{st=uc(St,"beforeRouteUpdate",F,lt);for(const A of St)A.updateGuards.forEach(L=>{st.push(fs(L,F,lt))});return st.push(g),Mt(st)}).then(()=>{st=[];for(const A of it)if(A.beforeEnter)if(gi(A.beforeEnter))for(const L of A.beforeEnter)st.push(fs(L,F,lt));else st.push(fs(A.beforeEnter,F,lt));return st.push(g),Mt(st)}).then(()=>(F.matched.forEach(A=>A.enterCallbacks={}),st=uc(it,"beforeRouteEnter",F,lt,Q),st.push(g),Mt(st))).then(()=>{st=[];for(const A of r.list())st.push(fs(A,F,lt));return st.push(g),Mt(st)}).catch(A=>Oi(A,8)?A:Promise.reject(A))}function b(F,lt,st){a.list().forEach(ft=>Q(()=>ft(F,lt,st)))}function U(F,lt,st,ft,St){const it=S(F,lt);if(it)return it;const g=lt===ss,A=ro?history.state:{};st&&(ft||g?s.replace(F.fullPath,Ue({scroll:g&&A&&A.scroll},St)):s.push(F.fullPath,St)),c.value=F,wt(F,lt,st,g),pt()}let k;function et(){k||(k=s.listen((F,lt,st)=>{if(!dt.listening)return;const ft=f(F),St=I(ft);if(St){R(Ue(St,{replace:!0}),ft).catch(Qo);return}l=ft;const it=c.value;ro&&kg(vh(it.fullPath,st.delta),Ha()),y(ft,it).catch(g=>Oi(g,12)?g:Oi(g,2)?(R(g.to,ft).then(A=>{Oi(A,20)&&!st.delta&&st.type===hr.pop&&s.go(-1,!1)}).catch(Qo),Promise.reject()):(st.delta&&s.go(-st.delta,!1),$(g,ft,it))).then(g=>{g=g||U(ft,it,!1),g&&(st.delta&&!Oi(g,8)?s.go(-st.delta,!1):st.type===hr.pop&&Oi(g,20)&&s.go(-1,!1)),b(ft,it,g)}).catch(Qo)}))}let rt=Bo(),j=Bo(),nt;function $(F,lt,st){pt(F);const ft=j.list();return ft.length?ft.forEach(St=>St(F,lt,st)):console.error(F),Promise.reject(F)}function gt(){return nt&&c.value!==ss?Promise.resolve():new Promise((F,lt)=>{rt.add([F,lt])})}function pt(F){return nt||(nt=!F,et(),rt.list().forEach(([lt,st])=>F?st(F):lt()),rt.reset()),F}function wt(F,lt,st,ft){const{scrollBehavior:St}=n;if(!ro||!St)return Promise.resolve();const it=!st&&Vg(vh(F.fullPath,0))||(ft||!st)&&history.state&&history.state.scroll||null;return af().then(()=>St(F,lt,it)).then(g=>g&&Hg(g)).catch(g=>$(g,F,lt))}const Lt=F=>s.go(F);let zt;const at=new Set,dt={currentRoute:c,listening:!0,addRoute:p,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:x,resolve:f,options:n,push:E,replace:z,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:j.add,isReady:gt,install(F){const lt=this;F.component("RouterLink",dv),F.component("RouterView",gv),F.config.globalProperties.$router=lt,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>po(c)}),ro&&!zt&&c.value===ss&&(zt=!0,E(s.location).catch(St=>{}));const st={};for(const St in ss)Object.defineProperty(st,St,{get:()=>c.value[St],enumerable:!0});F.provide(vu,lt),F.provide(Zf,ef(st)),F.provide(sl,c);const ft=F.unmount;at.add(F),F.unmount=function(){at.delete(F),at.size<1&&(l=ss,k&&k(),k=null,c.value=ss,zt=!1,nt=!1),ft()}}};function Mt(F){return F.reduce((lt,st)=>lt.then(()=>Q(st)),Promise.resolve())}return dt}function _v(n,t){const e=[],i=[],s=[],o=Math.max(t.matched.length,n.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(n.matched.find(l=>wo(l,a))?i.push(a):e.push(a));const c=n.matched[r];c&&(t.matched.find(l=>wo(l,c))||s.push(c))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _u="169",xv=0,Lh=1,yv=2,Jf=1,Mv=2,Wi=3,_s=0,Nn=1,Me=2,ms=0,vo=1,Dh=2,Uh=3,Nh=4,wv=5,Ds=100,Sv=101,bv=102,Ev=103,Tv=104,Av=200,Pv=201,Rv=202,Cv=203,ol=204,rl=205,Iv=206,Lv=207,Dv=208,Uv=209,Nv=210,Fv=211,Ov=212,Bv=213,zv=214,al=0,cl=1,ll=2,bo=3,ul=4,hl=5,dl=6,fl=7,Qf=0,Gv=1,Hv=2,gs=0,kv=1,Vv=2,Wv=3,Xv=4,qv=5,Yv=6,jv=7,tp=300,Eo=301,To=302,wa=303,pl=304,ka=306,qe=1e3,Ns=1001,ml=1002,oi=1003,$v=1004,Cr=1005,di=1006,hc=1007,Yi=1008,Qi=1009,ep=1010,np=1011,dr=1012,xu=1013,zs=1014,ji=1015,yr=1016,yu=1017,Mu=1018,Ao=1020,ip=35902,sp=1021,op=1022,Zn=1023,rp=1024,ap=1025,_o=1026,Po=1027,cp=1028,wu=1029,lp=1030,Su=1031,bu=1033,ca=33776,la=33777,ua=33778,ha=33779,gl=35840,vl=35841,_l=35842,xl=35843,yl=36196,Ml=37492,wl=37496,Sl=37808,bl=37809,El=37810,Tl=37811,Al=37812,Pl=37813,Rl=37814,Cl=37815,Il=37816,Ll=37817,Dl=37818,Ul=37819,Nl=37820,Fl=37821,da=36492,Ol=36494,Bl=36495,up=36283,zl=36284,Gl=36285,Hl=36286,Kv=3200,Zv=3201,hp=0,Jv=1,ps="",ui="srgb",Ms="srgb-linear",Eu="display-p3",Va="display-p3-linear",Sa="linear",Ve="srgb",ba="rec709",Ea="p3",Xs=7680,Fh=519,Qv=512,t_=513,e_=514,dp=515,n_=516,i_=517,s_=518,o_=519,Oh=35044,Bh="300 es",$i=2e3,Ta=2001;class Io{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zh=1234567;const er=Math.PI/180,fr=180/Math.PI;function Vs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function an(n,t,e){return Math.max(t,Math.min(e,n))}function Tu(n,t){return(n%t+t)%t}function r_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function a_(n,t,e){return n!==t?(e-n)/(t-n):0}function nr(n,t,e){return(1-e)*n+e*t}function c_(n,t,e,i){return nr(n,t,1-Math.exp(-e*i))}function l_(n,t=1){return t-Math.abs(Tu(n,t*2)-t)}function u_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function h_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function d_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function f_(n,t){return n+Math.random()*(t-n)}function p_(n){return n*(.5-Math.random())}function m_(n){n!==void 0&&(zh=n);let t=zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function g_(n){return n*er}function v_(n){return n*fr}function __(n){return(n&n-1)===0&&n!==0}function x_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function y_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function M_(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),d=r((t-i)/2),p=o((i-t)/2),v=r((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*v,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*v,a*l);break;case"ZYZ":n.set(c*v,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ao(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ce={DEG2RAD:er,RAD2DEG:fr,generateUUID:Vs,clamp:an,euclideanModulo:Tu,mapLinear:r_,inverseLerp:a_,lerp:nr,damp:c_,pingpong:l_,smoothstep:u_,smootherstep:h_,randInt:d_,randFloat:f_,randFloatSpread:p_,seededRandom:m_,degToRad:g_,radToDeg:v_,isPowerOfTwo:__,ceilPowerOfTwo:x_,floorPowerOfTwo:y_,setQuaternionFromProperEuler:M_,normalize:Tn,denormalize:ao};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(t,e,i,s,o,r,a,c,l){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],v=i[8],x=s[0],m=s[3],f=s[6],T=s[1],S=s[4],E=s[7],z=s[2],I=s[5],R=s[8];return o[0]=r*x+a*T+c*z,o[3]=r*m+a*S+c*I,o[6]=r*f+a*E+c*R,o[1]=l*x+h*T+u*z,o[4]=l*m+h*S+u*I,o[7]=l*f+h*E+u*R,o[2]=d*x+p*T+v*z,o[5]=d*m+p*S+v*I,o[8]=d*f+p*E+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,p=l*o-r*c,v=e*u+i*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*r)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(dc.makeScale(t,e)),this}rotate(t){return this.premultiply(dc.makeRotation(-t)),this}translate(t,e){return this.premultiply(dc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dc=new me;function fp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function w_(){const n=pr("canvas");return n.style.display="block",n}const Gh={};function fa(n){n in Gh||(Gh[n]=!0,console.warn(n))}function S_(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function b_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function E_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Hh=new me().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kh=new me().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zo={[Ms]:{transfer:Sa,primaries:ba,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ui]:{transfer:Ve,primaries:ba,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Va]:{transfer:Sa,primaries:Ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(kh),fromReference:n=>n.applyMatrix3(Hh)},[Eu]:{transfer:Ve,primaries:Ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(kh),fromReference:n=>n.applyMatrix3(Hh).convertLinearToSRGB()}},T_=new Set([Ms,Va]),Le={enabled:!0,_workingColorSpace:Ms,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!T_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=zo[t].toReference,s=zo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return zo[n].primaries},getTransfer:function(n){return n===ps?Sa:zo[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(zo[t].luminanceCoefficients)}};function xo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qs;class A_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qs===void 0&&(qs=pr("canvas")),qs.width=t.width,qs.height=t.height;const i=qs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=qs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=xo(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xo(e[i]/255)*255):e[i]=xo(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let P_=0;class pp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Vs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(pc(s[r].image)):o.push(pc(s[r]))}else o=pc(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?A_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0;class In extends Io{constructor(t=In.DEFAULT_IMAGE,e=In.DEFAULT_MAPPING,i=Ns,s=Ns,o=di,r=Yi,a=Zn,c=Qi,l=In.DEFAULT_ANISOTROPY,h=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Vs(),this.name="",this.source=new pp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qe:t.x=t.x-Math.floor(t.x);break;case Ns:t.x=t.x<0?0:1;break;case ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qe:t.y=t.y-Math.floor(t.y);break;case Ns:t.y=t.y<0?0:1;break;case ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=tp;In.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,i=0,s=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],v=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(v+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,E=(p+1)/2,z=(f+1)/2,I=(h+d)/4,R=(u+x)/4,B=(v+m)/4;return S>E&&S>z?S<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(S),s=I/i,o=R/i):E>z?E<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),i=I/s,o=B/s):z<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(z),i=R/o,s=B/o),this.set(i,s,o,e),this}let T=Math.sqrt((m-v)*(m-v)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C_ extends Io{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new In(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new pp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends C_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class mp extends In{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=oi,this.minFilter=oi,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class I_ extends In{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=oi,this.minFilter=oi,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=o[r+0],p=o[r+1],v=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=v,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==v){let m=1-a;const f=c*d+l*p+h*v+u*x,T=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const z=Math.sqrt(S),I=Math.atan2(z,f*T);m=Math.sin(m*I)/z,a=Math.sin(a*I)/z}const E=a*T;if(c=c*m+d*E,l=l*m+p*E,h=h*m+v*E,u=u*m+x*E,m===1-a){const z=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=z,l*=z,h*=z,u*=z}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=o[r],d=o[r+1],p=o[r+2],v=o[r+3];return t[e]=a*v+h*u+c*p-l*d,t[e+1]=c*v+h*d+l*u-a*p,t[e+2]=l*v+h*p+a*d-c*u,t[e+3]=h*v-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(o/2),d=c(i/2),p=c(s/2),v=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*p*v,this._y=l*p*u-d*h*v,this._z=l*h*v+d*p*u,this._w=l*h*u-d*p*v;break;case"YXZ":this._x=d*h*u+l*p*v,this._y=l*p*u-d*h*v,this._z=l*h*v-d*p*u,this._w=l*h*u+d*p*v;break;case"ZXY":this._x=d*h*u-l*p*v,this._y=l*p*u+d*h*v,this._z=l*h*v+d*p*u,this._w=l*h*u-d*p*v;break;case"ZYX":this._x=d*h*u-l*p*v,this._y=l*p*u+d*h*v,this._z=l*h*v-d*p*u,this._w=l*h*u+d*p*v;break;case"YZX":this._x=d*h*u+l*p*v,this._y=l*p*u+d*h*v,this._z=l*h*v-d*p*u,this._w=l*h*u-d*p*v;break;case"XZY":this._x=d*h*u-l*p*v,this._y=l*p*u-d*h*v,this._z=l*h*v+d*p*u,this._w=l*h*u+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,e=0,i=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+c*l+r*u-a*h,this.y=i+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return mc.copy(this).projectOnVector(t),this.sub(mc)}reflect(t){return this.sub(mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new J,Vh=new Mr;class wr{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ai):ai.fromBufferAttribute(o,r),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),Lr.subVectors(this.max,Go),Ys.subVectors(t.a,Go),js.subVectors(t.b,Go),$s.subVectors(t.c,Go),os.subVectors(js,Ys),rs.subVectors($s,js),bs.subVectors(Ys,$s);let e=[0,-os.z,os.y,0,-rs.z,rs.y,0,-bs.z,bs.y,os.z,0,-os.x,rs.z,0,-rs.x,bs.z,0,-bs.x,-os.y,os.x,0,-rs.y,rs.x,0,-bs.y,bs.x,0];return!gc(e,Ys,js,$s,Lr)||(e=[1,0,0,0,1,0,0,0,1],!gc(e,Ys,js,$s,Lr))?!1:(Dr.crossVectors(os,rs),e=[Dr.x,Dr.y,Dr.z],gc(e,Ys,js,$s,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bi=[new J,new J,new J,new J,new J,new J,new J,new J],ai=new J,Ir=new wr,Ys=new J,js=new J,$s=new J,os=new J,rs=new J,bs=new J,Go=new J,Lr=new J,Dr=new J,Es=new J;function gc(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Es.fromArray(n,o);const a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=t.dot(Es),l=e.dot(Es),h=i.dot(Es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const L_=new wr,Ho=new J,vc=new J;class Wa{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):L_.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);const e=Ho.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ho,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(vc)),this.expandByPoint(Ho.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new J,_c=new J,Ur=new J,as=new J,xc=new J,Nr=new J,yc=new J;class gp{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_c.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),as.copy(this.origin).sub(_c);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ur),a=as.dot(this.direction),c=-as.dot(Ur),l=as.lengthSq(),h=Math.abs(1-r*r);let u,d,p,v;if(h>0)if(u=r*c-a,d=r*a-c,v=o*h,u>=0)if(d>=-v)if(d<=v){const x=1/h;u*=x,d*=x,p=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-v?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+l):d<=v?(u=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_c).addScaledVector(Ur,d),p}intersectSphere(t,e){zi.subVectors(t.center,this.origin);const i=zi.dot(this.direction),s=zi.dot(zi)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,i,s,o){xc.subVectors(e,t),Nr.subVectors(i,t),yc.crossVectors(xc,Nr);let r=this.direction.dot(yc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;as.subVectors(this.origin,t);const c=a*this.direction.dot(Nr.crossVectors(as,Nr));if(c<0)return null;const l=a*this.direction.dot(xc.cross(as));if(l<0||c+l>r)return null;const h=-a*as.dot(yc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(t,e,i,s,o,r,a,c,l,h,u,d,p,v,x,m){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,h,u,d,p,v,x,m)}set(t,e,i,s,o,r,a,c,l,h,u,d,p,v,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=o,f[5]=r,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ks.setFromMatrixColumn(t,0).length(),o=1/Ks.setFromMatrixColumn(t,1).length(),r=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,p=r*u,v=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+v*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=v+p*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,v=l*h,x=l*u;e[0]=d+x*a,e[4]=v*a-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-v,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,v=l*h,x=l*u;e[0]=d-x*a,e[4]=-r*u,e[8]=v+p*a,e[1]=p+v*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,p=r*u,v=a*h,x=a*u;e[0]=c*h,e[4]=v*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-v,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,p=r*l,v=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=v*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+v,e[10]=d-x*u}else if(t.order==="XZY"){const d=r*c,p=r*l,v=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=r*h,e[9]=p*u-v,e[2]=v*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(D_,t,U_)}lookAt(t,e,i){const s=this.elements;return Xn.subVectors(t,e),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),cs.crossVectors(i,Xn),cs.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),cs.crossVectors(i,Xn)),cs.normalize(),Fr.crossVectors(Xn,cs),s[0]=cs.x,s[4]=Fr.x,s[8]=Xn.x,s[1]=cs.y,s[5]=Fr.y,s[9]=Xn.y,s[2]=cs.z,s[6]=Fr.z,s[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],T=i[3],S=i[7],E=i[11],z=i[15],I=s[0],R=s[4],B=s[8],Q=s[12],y=s[1],b=s[5],U=s[9],k=s[13],et=s[2],rt=s[6],j=s[10],nt=s[14],$=s[3],gt=s[7],pt=s[11],wt=s[15];return o[0]=r*I+a*y+c*et+l*$,o[4]=r*R+a*b+c*rt+l*gt,o[8]=r*B+a*U+c*j+l*pt,o[12]=r*Q+a*k+c*nt+l*wt,o[1]=h*I+u*y+d*et+p*$,o[5]=h*R+u*b+d*rt+p*gt,o[9]=h*B+u*U+d*j+p*pt,o[13]=h*Q+u*k+d*nt+p*wt,o[2]=v*I+x*y+m*et+f*$,o[6]=v*R+x*b+m*rt+f*gt,o[10]=v*B+x*U+m*j+f*pt,o[14]=v*Q+x*k+m*nt+f*wt,o[3]=T*I+S*y+E*et+z*$,o[7]=T*R+S*b+E*rt+z*gt,o[11]=T*B+S*U+E*j+z*pt,o[15]=T*Q+S*k+E*nt+z*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],v=t[3],x=t[7],m=t[11],f=t[15];return v*(+o*c*u-s*l*u-o*a*d+i*l*d+s*a*p-i*c*p)+x*(+e*c*p-e*l*d+o*r*d-s*r*p+s*l*h-o*c*h)+m*(+e*l*u-e*a*p-o*r*u+i*r*p+o*a*h-i*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*r*u-i*r*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],v=t[12],x=t[13],m=t[14],f=t[15],T=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,S=v*d*l-h*m*l-v*c*p+r*m*p+h*c*f-r*d*f,E=h*x*l-v*u*l+v*a*p-r*x*p-h*a*f+r*u*f,z=v*u*c-h*x*c-v*a*d+r*x*d+h*a*m-r*u*m,I=e*T+i*S+s*E+o*z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return t[0]=T*R,t[1]=(x*d*o-u*m*o-x*s*p+i*m*p+u*s*f-i*d*f)*R,t[2]=(a*m*o-x*c*o+x*s*l-i*m*l-a*s*f+i*c*f)*R,t[3]=(u*c*o-a*d*o-u*s*l+i*d*l+a*s*p-i*c*p)*R,t[4]=S*R,t[5]=(h*m*o-v*d*o+v*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(v*c*o-r*m*o-v*s*l+e*m*l+r*s*f-e*c*f)*R,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*p+e*c*p)*R,t[8]=E*R,t[9]=(v*u*o-h*x*o-v*i*p+e*x*p+h*i*f-e*u*f)*R,t[10]=(r*x*o-v*a*o+v*i*l-e*x*l-r*i*f+e*a*f)*R,t[11]=(h*a*o-r*u*o-h*i*l+e*u*l+r*i*p-e*a*p)*R,t[12]=z*R,t[13]=(h*x*s-v*u*s+v*i*d-e*x*d-h*i*m+e*u*m)*R,t[14]=(v*a*s-r*x*s-v*i*c+e*x*c+r*i*m-e*a*m)*R,t[15]=(r*u*s-h*a*s+h*i*c-e*u*c-r*i*d+e*a*d)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,p=o*h,v=o*u,x=r*h,m=r*u,f=a*u,T=c*l,S=c*h,E=c*u,z=i.x,I=i.y,R=i.z;return s[0]=(1-(x+f))*z,s[1]=(p+E)*z,s[2]=(v-S)*z,s[3]=0,s[4]=(p-E)*I,s[5]=(1-(d+f))*I,s[6]=(m+T)*I,s[7]=0,s[8]=(v+S)*R,s[9]=(m-T)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Ks.set(s[0],s[1],s[2]).length();const r=Ks.set(s[4],s[5],s[6]).length(),a=Ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ci.copy(this);const l=1/o,h=1/r,u=1/a;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,e.setFromRotationMatrix(ci),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=$i){const c=this.elements,l=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let p,v;if(a===$i)p=-(r+o)/(r-o),v=-2*r*o/(r-o);else if(a===Ta)p=-r/(r-o),v=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=$i){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*l,p=(i+s)*h;let v,x;if(a===$i)v=(r+o)*u,x=-2*u;else if(a===Ta)v=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ks=new J,ci=new We,D_=new J(0,0,0),U_=new J(1,1,1),cs=new J,Fr=new J,Xn=new J,Wh=new We,Xh=new Mr;class Di{constructor(t=0,e=0,i=0,s=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-an(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let N_=0;const qh=new J,Zs=new Mr,Gi=new We,Or=new J,ko=new J,F_=new J,O_=new Mr,Yh=new J(1,0,0),jh=new J(0,1,0),$h=new J(0,0,1),Kh={type:"added"},B_={type:"removed"},Js={type:"childadded",child:null},Mc={type:"childremoved",child:null};class hn extends Io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const t=new J,e=new Di,i=new Mr,s=new J(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new me}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis(jh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis(jh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Or.copy(t):Or.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(ko,Or,this.up):Gi.lookAt(Or,ko,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),Js.child=t,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B_),Mc.child=t,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),Js.child=t,this.dispatchEvent(Js),Js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,F_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,O_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),v=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}hn.DEFAULT_UP=new J(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new J,Hi=new J,wc=new J,ki=new J,Qs=new J,to=new J,Zh=new J,Sc=new J,bc=new J,Ec=new J,Tc=new Ne,Ac=new Ne,Pc=new Ne;class fi{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){li.subVectors(s,e),Hi.subVectors(i,e),wc.subVectors(t,e);const r=li.dot(li),a=li.dot(Hi),c=li.dot(wc),l=Hi.dot(Hi),h=Hi.dot(wc),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,v=(r*h-a*c)*d;return o.set(1-p-v,v,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ki.x),c.addScaledVector(r,ki.y),c.addScaledVector(a,ki.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return Tc.setScalar(0),Ac.setScalar(0),Pc.setScalar(0),Tc.fromBufferAttribute(t,e),Ac.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Tc,o.x),r.addScaledVector(Ac,o.y),r.addScaledVector(Pc,o.z),r}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),Hi.subVectors(t,e),li.cross(Hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),li.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return fi.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;Qs.subVectors(s,i),to.subVectors(o,i),Sc.subVectors(t,i);const c=Qs.dot(Sc),l=to.dot(Sc);if(c<=0&&l<=0)return e.copy(i);bc.subVectors(t,s);const h=Qs.dot(bc),u=to.dot(bc);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(Qs,r);Ec.subVectors(t,o);const p=Qs.dot(Ec),v=to.dot(Ec);if(v>=0&&p<=v)return e.copy(o);const x=p*l-c*v;if(x<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(i).addScaledVector(to,a);const m=h*v-p*u;if(m<=0&&u-h>=0&&p-v>=0)return Zh.subVectors(o,s),a=(u-h)/(u-h+(p-v)),e.copy(s).addScaledVector(Zh,a);const f=1/(m+x+d);return r=x*f,a=d*f,e.copy(i).addScaledVector(Qs,r).addScaledVector(to,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Rc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ge{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=i,Le.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Le.workingColorSpace){if(t=Tu(t,1),e=an(e,0,1),i=an(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Rc(r,o,t+1/3),this.g=Rc(r,o,t),this.b=Rc(r,o,t-1/3)}return Le.toWorkingColorSpace(this,s),this}setStyle(t,e=ui){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ui){const i=_p[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}copyLinearToSRGB(t){return this.r=fc(t.r),this.g=fc(t.g),this.b=fc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Le.fromWorkingColorSpace(vn.copy(this),t),Math.round(an(vn.r*255,0,255))*65536+Math.round(an(vn.g*255,0,255))*256+Math.round(an(vn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(vn.copy(this),e);const i=vn.r,s=vn.g,o=vn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case i:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-i)/u+2;break;case o:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=ui){Le.fromWorkingColorSpace(vn.copy(this),t);const e=vn.r,i=vn.g,s=vn.b;return t!==ui?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+e,ls.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ls),t.getHSL(Br);const i=nr(ls.h,Br.h,e),s=nr(ls.s,Br.s,e),o=nr(ls.l,Br.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ge;ge.NAMES=_p;let z_=0;class Lo extends Io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=vo,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=rl,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ol&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==Ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ts extends Lo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qe=new J,zr=new Wt;class Ii{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oh,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ao(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Tn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ao(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ao(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ao(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ao(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array),s=Tn(s,this.array),o=Tn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oh&&(t.usage=this.usage),t}}class xp extends Ii{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yp extends Ii{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ye extends Ii{constructor(t,e,i){super(new Float32Array(t),e,i)}}let G_=0;const ni=new We,Cc=new hn,eo=new J,qn=new wr,Vo=new wr,on=new J;class Mn extends Io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fp(t)?yp:xp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new me().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,i){return ni.makeTranslation(t,e,i),this.applyMatrix4(ni),this}scale(t,e,i){return ni.makeScale(t,e,i),this.applyMatrix4(ni),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];qn.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(qn.min,Vo.min),qn.expandByPoint(on),on.addVectors(qn.max,Vo.max),qn.expandByPoint(on)):(qn.expandByPoint(Vo.min),qn.expandByPoint(Vo.max))}qn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)on.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(on));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(eo.fromBufferAttribute(t,l),on.add(eo)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<i.count;B++)a[B]=new J,c[B]=new J;const l=new J,h=new J,u=new J,d=new Wt,p=new Wt,v=new Wt,x=new J,m=new J;function f(B,Q,y){l.fromBufferAttribute(i,B),h.fromBufferAttribute(i,Q),u.fromBufferAttribute(i,y),d.fromBufferAttribute(o,B),p.fromBufferAttribute(o,Q),v.fromBufferAttribute(o,y),h.sub(l),u.sub(l),p.sub(d),v.sub(d);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(b),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(b),a[B].add(x),a[Q].add(x),a[y].add(x),c[B].add(m),c[Q].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let B=0,Q=T.length;B<Q;++B){const y=T[B],b=y.start,U=y.count;for(let k=b,et=b+U;k<et;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new J,E=new J,z=new J,I=new J;function R(B){z.fromBufferAttribute(s,B),I.copy(z);const Q=a[B];S.copy(Q),S.sub(z.multiplyScalar(z.dot(Q))).normalize(),E.crossVectors(I,Q);const b=E.dot(c[B])<0?-1:1;r.setXYZW(B,S.x,S.y,S.z,b)}for(let B=0,Q=T.length;B<Q;++B){const y=T[B],b=y.start,U=y.count;for(let k=b,et=b+U;k<et;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ii(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new J,o=new J,r=new J,a=new J,c=new J,l=new J,h=new J,u=new J;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,v=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[v++]=l[p++]}return new Ii(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Mn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new We,Ts=new gp,Gr=new Wa,Qh=new J,Hr=new J,kr=new J,Vr=new J,Ic=new J,Wr=new J,td=new J,Xr=new J;class w extends hn{constructor(t=new Mn,e=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Wr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Ic.fromBufferAttribute(u,t),r?Wr.addScaledVector(Ic,h):Wr.addScaledVector(Ic.sub(e),h))}e.add(Wr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(o),Ts.copy(t.ray).recast(t.near),!(Gr.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Gr,Qh)===null||Ts.origin.distanceToSquared(Qh)>(t.far-t.near)**2))&&(Jh.copy(o).invert(),Ts.copy(t.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=r[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,z=S;E<z;E+=3){const I=a.getX(E),R=a.getX(E+1),B=a.getX(E+2);s=qr(this,f,t,i,l,h,u,I,R,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const T=a.getX(m),S=a.getX(m+1),E=a.getX(m+2);s=qr(this,r,t,i,l,h,u,T,S,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=r[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,z=S;E<z;E+=3){const I=E,R=E+1,B=E+2;s=qr(this,f,t,i,l,h,u,I,R,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const T=m,S=m+1,E=m+2;s=qr(this,r,t,i,l,h,u,T,S,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function H_(n,t,e,i,s,o,r,a){let c;if(t.side===Nn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===_s,a),c===null)return null;Xr.copy(a),Xr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Xr);return l<e.near||l>e.far?null:{distance:l,point:Xr.clone(),object:n}}function qr(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,Hr),n.getVertexPosition(c,kr),n.getVertexPosition(l,Vr);const h=H_(n,t,e,i,Hr,kr,Vr,td);if(h){const u=new J;fi.getBarycoord(td,Hr,kr,Vr,u),s&&(h.uv=fi.getInterpolatedAttribute(s,a,c,l,u,new Wt)),o&&(h.uv1=fi.getInterpolatedAttribute(o,a,c,l,u,new Wt)),r&&(h.normal=fi.getInterpolatedAttribute(r,a,c,l,u,new J),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new J,materialIndex:0};fi.getNormal(Hr,kr,Vr,d.normal),h.face=d,h.barycoord=u}return h}class Cn extends Mn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,p=0;v("z","y","x",-1,-1,i,e,t,r,o,0),v("z","y","x",1,-1,i,e,-t,r,o,1),v("x","z","y",1,1,t,i,e,s,r,2),v("x","z","y",1,-1,t,i,-e,s,r,3),v("x","y","z",1,-1,t,e,i,s,o,4),v("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function v(x,m,f,T,S,E,z,I,R,B,Q){const y=E/R,b=z/B,U=E/2,k=z/2,et=I/2,rt=R+1,j=B+1;let nt=0,$=0;const gt=new J;for(let pt=0;pt<j;pt++){const wt=pt*b-k;for(let Lt=0;Lt<rt;Lt++){const zt=Lt*y-U;gt[x]=zt*T,gt[m]=wt*S,gt[f]=et,l.push(gt.x,gt.y,gt.z),gt[x]=0,gt[m]=0,gt[f]=I>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(Lt/R),u.push(1-pt/B),nt+=1}}for(let pt=0;pt<B;pt++)for(let wt=0;wt<R;wt++){const Lt=d+wt+rt*pt,zt=d+wt+rt*(pt+1),at=d+(wt+1)+rt*(pt+1),dt=d+(wt+1)+rt*pt;c.push(Lt,zt,dt),c.push(zt,at,dt),$+=6}a.addGroup(p,$,Q),p+=$,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ro(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function An(n){const t={};for(let e=0;e<n.length;e++){const i=Ro(n[e]);for(const s in i)t[s]=i[s]}return t}function k_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Mp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const V_={clone:Ro,merge:An};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Lo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ro(t.uniforms),this.uniformsGroups=k_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class wp extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=$i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new J,ed=new Wt,nd=new Wt;class ze extends wp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,e){return this.getViewBounds(t,ed,nd),e.subVectors(nd,ed)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(er*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const no=-90,io=1;class Au extends hn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(no,io,t,e);s.layers=this.layers,this.add(s);const o=new ze(no,io,t,e);o.layers=this.layers,this.add(o);const r=new ze(no,io,t,e);r.layers=this.layers,this.add(r);const a=new ze(no,io,t,e);a.layers=this.layers,this.add(a);const c=new ze(no,io,t,e);c.layers=this.layers,this.add(c);const l=new ze(no,io,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===$i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Pu extends In{constructor(t,e,i,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Eo,super(t,e,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ru extends Gs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Pu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:di}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),o=new cn({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:ms});o.uniforms.tEquirect.value=e;const r=new w(s,o),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=di),new Au(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const Lc=new J,q_=new J,Y_=new me;class Is{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Lc.subVectors(i,e).cross(q_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Lc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Y_.getNormalMatrix(t),s=this.coplanarPoint(Lc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new Wa,Yr=new J;class Cu{constructor(t=new Is,e=new Is,i=new Is,s=new Is,o=new Is,r=new Is){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=$i){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],v=s[9],x=s[10],m=s[11],f=s[12],T=s[13],S=s[14],E=s[15];if(i[0].setComponents(c-o,d-l,m-p,E-f).normalize(),i[1].setComponents(c+o,d+l,m+p,E+f).normalize(),i[2].setComponents(c+r,d+h,m+v,E+T).normalize(),i[3].setComponents(c-r,d-h,m-v,E-T).normalize(),i[4].setComponents(c-a,d-u,m-x,E-S).normalize(),e===$i)i[5].setComponents(c+a,d+u,m+x,E+S).normalize();else if(e===Ta)i[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sp(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function j_(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<u.length;p++){const v=u[d],x=u[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,v=u.length;p<v;p++){const x=u[p];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Xa extends Mn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],v=[],x=[],m=[];for(let f=0;f<h;f++){const T=f*d-r;for(let S=0;S<l;S++){const E=S*u-o;v.push(E,-T,0),x.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const S=T+l*f,E=T+l*(f+1),z=T+1+l*(f+1),I=T+1+l*f;p.push(S,E,I),p.push(E,z,I)}this.setIndex(p),this.setAttribute("position",new Ye(v,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.width,t.height,t.widthSegments,t.heightSegments)}}var $_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K_=`#ifdef USE_ALPHAHASH
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
#endif`,Z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ex=`#ifdef USE_AOMAP
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
#endif`,nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ix=`#ifdef USE_BATCHING
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
#endif`,sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cx=`#ifdef USE_IRIDESCENCE
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
#endif`,lx=`#ifdef USE_BUMPMAP
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
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_x=`#define PI 3.141592653589793
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
} // validated`,xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yx=`vec3 transformedNormal = objectNormal;
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
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`
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
}`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fx=`#ifdef USE_GRADIENTMAP
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
}`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
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
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
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
}`,jx=`
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sy=`#if defined( USE_POINTS_UV )
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
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
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
#endif`,hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vy=`#ifdef USE_NORMALMAP
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
#endif`,_y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,My=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,by=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dy=`float getShadowMask() {
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
}`,Uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,By=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ky=`#ifdef USE_TRANSMISSION
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
#endif`,Vy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`#include <common>
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
}`,eM=`#if DEPTH_PACKING == 3200
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
}`,nM=`#define DISTANCE
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
}`,iM=`#define DISTANCE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`uniform float scale;
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
}`,aM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,lM=`uniform vec3 diffuse;
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
}`,uM=`#define LAMBERT
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
}`,hM=`#define LAMBERT
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
}`,dM=`#define MATCAP
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
}`,fM=`#define MATCAP
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
}`,pM=`#define NORMAL
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
}`,mM=`#define NORMAL
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
}`,gM=`#define PHONG
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
}`,vM=`#define PHONG
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
}`,_M=`#define STANDARD
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
}`,xM=`#define STANDARD
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
}`,yM=`#define TOON
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
}`,MM=`#define TOON
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
}`,wM=`uniform float size;
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
}`,SM=`uniform vec3 diffuse;
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
}`,bM=`#include <common>
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
}`,EM=`uniform vec3 color;
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
}`,TM=`uniform float rotation;
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
}`,AM=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:$_,alphahash_pars_fragment:K_,alphamap_fragment:Z_,alphamap_pars_fragment:J_,alphatest_fragment:Q_,alphatest_pars_fragment:tx,aomap_fragment:ex,aomap_pars_fragment:nx,batching_pars_vertex:ix,batching_vertex:sx,begin_vertex:ox,beginnormal_vertex:rx,bsdfs:ax,iridescence_fragment:cx,bumpmap_pars_fragment:lx,clipping_planes_fragment:ux,clipping_planes_pars_fragment:hx,clipping_planes_pars_vertex:dx,clipping_planes_vertex:fx,color_fragment:px,color_pars_fragment:mx,color_pars_vertex:gx,color_vertex:vx,common:_x,cube_uv_reflection_fragment:xx,defaultnormal_vertex:yx,displacementmap_pars_vertex:Mx,displacementmap_vertex:wx,emissivemap_fragment:Sx,emissivemap_pars_fragment:bx,colorspace_fragment:Ex,colorspace_pars_fragment:Tx,envmap_fragment:Ax,envmap_common_pars_fragment:Px,envmap_pars_fragment:Rx,envmap_pars_vertex:Cx,envmap_physical_pars_fragment:Hx,envmap_vertex:Ix,fog_vertex:Lx,fog_pars_vertex:Dx,fog_fragment:Ux,fog_pars_fragment:Nx,gradientmap_pars_fragment:Fx,lightmap_pars_fragment:Ox,lights_lambert_fragment:Bx,lights_lambert_pars_fragment:zx,lights_pars_begin:Gx,lights_toon_fragment:kx,lights_toon_pars_fragment:Vx,lights_phong_fragment:Wx,lights_phong_pars_fragment:Xx,lights_physical_fragment:qx,lights_physical_pars_fragment:Yx,lights_fragment_begin:jx,lights_fragment_maps:$x,lights_fragment_end:Kx,logdepthbuf_fragment:Zx,logdepthbuf_pars_fragment:Jx,logdepthbuf_pars_vertex:Qx,logdepthbuf_vertex:ty,map_fragment:ey,map_pars_fragment:ny,map_particle_fragment:iy,map_particle_pars_fragment:sy,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ry,morphinstance_vertex:ay,morphcolor_vertex:cy,morphnormal_vertex:ly,morphtarget_pars_vertex:uy,morphtarget_vertex:hy,normal_fragment_begin:dy,normal_fragment_maps:fy,normal_pars_fragment:py,normal_pars_vertex:my,normal_vertex:gy,normalmap_pars_fragment:vy,clearcoat_normal_fragment_begin:_y,clearcoat_normal_fragment_maps:xy,clearcoat_pars_fragment:yy,iridescence_pars_fragment:My,opaque_fragment:wy,packing:Sy,premultiplied_alpha_fragment:by,project_vertex:Ey,dithering_fragment:Ty,dithering_pars_fragment:Ay,roughnessmap_fragment:Py,roughnessmap_pars_fragment:Ry,shadowmap_pars_fragment:Cy,shadowmap_pars_vertex:Iy,shadowmap_vertex:Ly,shadowmask_pars_fragment:Dy,skinbase_vertex:Uy,skinning_pars_vertex:Ny,skinning_vertex:Fy,skinnormal_vertex:Oy,specularmap_fragment:By,specularmap_pars_fragment:zy,tonemapping_fragment:Gy,tonemapping_pars_fragment:Hy,transmission_fragment:ky,transmission_pars_fragment:Vy,uv_pars_fragment:Wy,uv_pars_vertex:Xy,uv_vertex:qy,worldpos_vertex:Yy,background_vert:jy,background_frag:$y,backgroundCube_vert:Ky,backgroundCube_frag:Zy,cube_vert:Jy,cube_frag:Qy,depth_vert:tM,depth_frag:eM,distanceRGBA_vert:nM,distanceRGBA_frag:iM,equirect_vert:sM,equirect_frag:oM,linedashed_vert:rM,linedashed_frag:aM,meshbasic_vert:cM,meshbasic_frag:lM,meshlambert_vert:uM,meshlambert_frag:hM,meshmatcap_vert:dM,meshmatcap_frag:fM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:vM,meshphysical_vert:_M,meshphysical_frag:xM,meshtoon_vert:yM,meshtoon_frag:MM,points_vert:wM,points_frag:SM,shadow_vert:bM,shadow_frag:EM,sprite_vert:TM,sprite_frag:AM},Vt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Pi={basic:{uniforms:An([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:An([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ge(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:An([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:An([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:An([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new ge(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:An([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:An([Vt.points,Vt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:An([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:An([Vt.common,Vt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:An([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:An([Vt.sprite,Vt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:An([Vt.common,Vt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:An([Vt.lights,Vt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Pi.physical={uniforms:An([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const jr={r:0,b:0,g:0},Ps=new Di,PM=new We;function RM(n,t,e,i,s,o,r){const a=new ge(0);let c=o===!0?0:1,l,h,u=null,d=0,p=null;function v(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function x(T){let S=!1;const E=v(T);E===null?f(a,c):E&&E.isColor&&(f(E,1),S=!0);const z=n.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,r):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){const E=v(S);E&&(E.isCubeTexture||E.mapping===ka)?(h===void 0&&(h=new w(new Cn(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ro(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ps.copy(S.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(PM.makeRotationFromEuler(Ps)),h.material.toneMapped=Le.getTransfer(E.colorSpace)!==Ve,(u!==E||d!==E.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new w(new Xa(2,2),new cn({name:"BackgroundMaterial",uniforms:Ro(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Le.getTransfer(E.colorSpace)!==Ve,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,p=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,S){T.getRGB(jr,Mp(n)),i.buffers.color.setClear(jr.r,jr.g,jr.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(a,c)},render:x,addToRenderList:m}}function CM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(y,b,U,k,et){let rt=!1;const j=u(k,U,b);o!==j&&(o=j,l(o.object)),rt=p(y,k,U,et),rt&&v(y,k,U,et),et!==null&&t.update(et,n.ELEMENT_ARRAY_BUFFER),(rt||r)&&(r=!1,E(y,b,U,k),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,b,U){const k=U.wireframe===!0;let et=i[y.id];et===void 0&&(et={},i[y.id]=et);let rt=et[b.id];rt===void 0&&(rt={},et[b.id]=rt);let j=rt[k];return j===void 0&&(j=d(c()),rt[k]=j),j}function d(y){const b=[],U=[],k=[];for(let et=0;et<e;et++)b[et]=0,U[et]=0,k[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:U,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,b,U,k){const et=o.attributes,rt=b.attributes;let j=0;const nt=U.getAttributes();for(const $ in nt)if(nt[$].location>=0){const pt=et[$];let wt=rt[$];if(wt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor)),pt===void 0||pt.attribute!==wt||wt&&pt.data!==wt.data)return!0;j++}return o.attributesNum!==j||o.index!==k}function v(y,b,U,k){const et={},rt=b.attributes;let j=0;const nt=U.getAttributes();for(const $ in nt)if(nt[$].location>=0){let pt=rt[$];pt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));const wt={};wt.attribute=pt,pt&&pt.data&&(wt.data=pt.data),et[$]=wt,j++}o.attributes=et,o.attributesNum=j,o.index=k}function x(){const y=o.newAttributes;for(let b=0,U=y.length;b<U;b++)y[b]=0}function m(y){f(y,0)}function f(y,b){const U=o.newAttributes,k=o.enabledAttributes,et=o.attributeDivisors;U[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),et[y]!==b&&(n.vertexAttribDivisor(y,b),et[y]=b)}function T(){const y=o.newAttributes,b=o.enabledAttributes;for(let U=0,k=b.length;U<k;U++)b[U]!==y[U]&&(n.disableVertexAttribArray(U),b[U]=0)}function S(y,b,U,k,et,rt,j){j===!0?n.vertexAttribIPointer(y,b,U,et,rt):n.vertexAttribPointer(y,b,U,k,et,rt)}function E(y,b,U,k){x();const et=k.attributes,rt=U.getAttributes(),j=b.defaultAttributeValues;for(const nt in rt){const $=rt[nt];if($.location>=0){let gt=et[nt];if(gt===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),gt!==void 0){const pt=gt.normalized,wt=gt.itemSize,Lt=t.get(gt);if(Lt===void 0)continue;const zt=Lt.buffer,at=Lt.type,dt=Lt.bytesPerElement,Mt=at===n.INT||at===n.UNSIGNED_INT||gt.gpuType===xu;if(gt.isInterleavedBufferAttribute){const F=gt.data,lt=F.stride,st=gt.offset;if(F.isInstancedInterleavedBuffer){for(let ft=0;ft<$.locationSize;ft++)f($.location+ft,F.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ft=0;ft<$.locationSize;ft++)m($.location+ft);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let ft=0;ft<$.locationSize;ft++)S($.location+ft,wt/$.locationSize,at,pt,lt*dt,(st+wt/$.locationSize*ft)*dt,Mt)}else{if(gt.isInstancedBufferAttribute){for(let F=0;F<$.locationSize;F++)f($.location+F,gt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let F=0;F<$.locationSize;F++)m($.location+F);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let F=0;F<$.locationSize;F++)S($.location+F,wt/$.locationSize,at,pt,wt*dt,wt/$.locationSize*F*dt,Mt)}}else if(j!==void 0){const pt=j[nt];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv($.location,pt);break;case 3:n.vertexAttrib3fv($.location,pt);break;case 4:n.vertexAttrib4fv($.location,pt);break;default:n.vertexAttrib1fv($.location,pt)}}}}T()}function z(){B();for(const y in i){const b=i[y];for(const U in b){const k=b[U];for(const et in k)h(k[et].object),delete k[et];delete b[U]}delete i[y]}}function I(y){if(i[y.id]===void 0)return;const b=i[y.id];for(const U in b){const k=b[U];for(const et in k)h(k[et].object),delete k[et];delete b[U]}delete i[y.id]}function R(y){for(const b in i){const U=i[b];if(U[y.id]===void 0)continue;const k=U[y.id];for(const et in k)h(k[et].object),delete k[et];delete U[y.id]}}function B(){Q(),r=!0,o!==s&&(o=s,l(o.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:Q,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function IM(n,t,e){let i;function s(l){i=l}function o(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];e.update(p,i,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<l.length;v++)r(l[v],h[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x];for(let x=0;x<d.length;x++)e.update(v,i,d[x])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function LM(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==Zn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const B=R===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Qi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ji&&!B)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),z=v>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:z,maxSamples:I}}function DM(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new Is,a=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||v===null||v.length===0||o&&!m)o?h(null):l();else{const T=o?0:i,S=T*4;let E=f.clippingState||null;c.value=E,E=h(v,d,S,p);for(let z=0;z!==S;++z)E[z]=e[z];f.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,v){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,v!==!0||m===null){const f=p+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,E=p;S!==x;++S,E+=4)r.copy(u[S]).applyMatrix4(T,a),r.normal.toArray(m,E),m[E+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function UM(n){let t=new WeakMap;function e(r,a){return a===wa?r.mapping=Eo:a===pl&&(r.mapping=To),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===wa||a===pl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Ru(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class bp extends wp{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const lo=4,id=[.125,.215,.35,.446,.526,.582],Us=20,Dc=new bp,sd=new ge;let Uc=null,Nc=0,Fc=0,Oc=!1;const Ls=(1+Math.sqrt(5))/2,so=1/Ls,od=[new J(-Ls,so,0),new J(Ls,so,0),new J(-so,0,Ls),new J(so,0,Ls),new J(0,Ls,-so),new J(0,Ls,so),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class rd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Uc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uc,Nc,Fc),this._renderer.xr.enabled=Oc,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Eo||t.mapping===To?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:yr,format:Zn,colorSpace:Ms,depthBuffer:!1},s=ad(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NM(o)),this._blurMaterial=FM(o,t,e)}return s}_compileMaterial(t){const e=new w(this._lodPlanes[0],t);this._renderer.compile(e,Dc)}_sceneToCubeUV(t,e,i,s){const a=new ze(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(sd),h.toneMapping=gs,h.autoClear=!1;const p=new ts({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),v=new w(new Cn,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(sd),x=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):T===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const S=this._cubeSize;$r(s,T*S,f>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Eo||t.mapping===To;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new w(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;$r(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Dc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=od[(s-o-1)%od.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new w(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Us-1),x=o/v,m=isFinite(o)?1+Math.floor(h*x):Us;m>Us&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);const f=[];let T=0;for(let R=0;R<Us;++R){const B=R/x,Q=Math.exp(-B*B/2);f.push(Q),R===0?T+=Q:R<m&&(T+=2*Q)}for(let R=0;R<f.length;R++)f[R]=f[R]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-i;const E=this._sizeLods[s],z=3*E*(s>S-lo?s-S+lo:0),I=4*(this._cubeSize-E);$r(e,z,I,3*E,2*E),c.setRenderTarget(e),c.render(u,Dc)}}function NM(n){const t=[],e=[],i=[];let s=n;const o=n-lo+1+id.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-lo?c=id[r-n+lo-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,x=3,m=2,f=1,T=new Float32Array(x*v*p),S=new Float32Array(m*v*p),E=new Float32Array(f*v*p);for(let I=0;I<p;I++){const R=I%3*2/3-1,B=I>2?0:-1,Q=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];T.set(Q,x*v*I),S.set(d,m*v*I);const y=[I,I,I,I,I,I];E.set(y,f*v*I)}const z=new Mn;z.setAttribute("position",new Ii(T,x)),z.setAttribute("uv",new Ii(S,m)),z.setAttribute("faceIndex",new Ii(E,f)),t.push(z),s>lo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ad(n,t,e){const i=new Gs(n,t,e);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function FM(n,t,e){const i=new Float32Array(Us),s=new J(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function cd(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function ld(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Iu(){return`

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
	`}function OM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===wa||c===pl,h=c===Eo||c===To;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new rd(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new rd(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function BM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&fa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function zM(n,t,e,i){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",r),delete s[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const v in d)t.update(d[v],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const v in p){const x=p[v];for(let m=0,f=x.length;m<f;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,v=u.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let S=0,E=T.length;S<E;S+=3){const z=T[S+0],I=T[S+1],R=T[S+2];d.push(z,I,I,R,R,z)}}else if(v!==void 0){const T=v.array;x=v.version;for(let S=0,E=T.length/3-1;S<E;S+=3){const z=S+0,I=S+1,R=S+2;d.push(z,I,I,R,R,z)}}else return;const m=new(fp(d)?yp:xp)(d,1);m.version=x;const f=o.get(u);f&&t.remove(f),o.set(u,m)}function h(u){const d=o.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function GM(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,p){n.drawElements(i,p,o,d*r),e.update(p,i,1)}function l(d,p,v){v!==0&&(n.drawElementsInstanced(i,p,o,d*r,v),e.update(p,i,v))}function h(d,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,d,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];e.update(m,i,1)}function u(d,p,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/r,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,d,0,x,0,v);let f=0;for(let T=0;T<v;T++)f+=p[T];for(let T=0;T<x.length;T++)e.update(f,i,x[T])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function HM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function kM(n,t,e){const i=new WeakMap,s=new Ne;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;v===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let z=a.attributes.position.count*E,I=1;z>t.maxTextureSize&&(I=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const R=new Float32Array(z*I*4*u),B=new mp(R,z,I,u);B.type=ji,B.needsUpdate=!0;const Q=E*4;for(let b=0;b<u;b++){const U=f[b],k=T[b],et=S[b],rt=z*I*4*b;for(let j=0;j<U.count;j++){const nt=j*Q;v===!0&&(s.fromBufferAttribute(U,j),R[rt+nt+0]=s.x,R[rt+nt+1]=s.y,R[rt+nt+2]=s.z,R[rt+nt+3]=0),x===!0&&(s.fromBufferAttribute(k,j),R[rt+nt+4]=s.x,R[rt+nt+5]=s.y,R[rt+nt+6]=s.z,R[rt+nt+7]=0),m===!0&&(s.fromBufferAttribute(et,j),R[rt+nt+8]=s.x,R[rt+nt+9]=s.y,R[rt+nt+10]=s.z,R[rt+nt+11]=et.itemSize===4?s.w:1)}}d={count:u,texture:B,size:new Wt(z,I)},i.set(a,d),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let v=0;for(let m=0;m<l.length;m++)v+=l[m];const x=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function VM(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Ep extends In{constructor(t,e,i,s,o,r,a,c,l,h=_o){if(h!==_o&&h!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_o&&(i=zs),i===void 0&&h===Po&&(i=Ao),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:oi,this.minFilter=c!==void 0?c:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tp=new In,ud=new Ep(1,1),Ap=new mp,Pp=new I_,Rp=new Pu,hd=[],dd=[],fd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function Do(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=hd[s];if(o===void 0&&(o=new Float32Array(s),hd[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function en(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=dd[t];e===void 0&&(e=new Int32Array(t),dd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function WM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function XM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2fv(this.addr,t),nn(e,t)}}function qM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;n.uniform3fv(this.addr,t),nn(e,t)}}function YM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4fv(this.addr,t),nn(e,t)}}function jM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;md.set(i),n.uniformMatrix2fv(this.addr,!1,md),nn(e,i)}}function $M(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;pd.set(i),n.uniformMatrix3fv(this.addr,!1,pd),nn(e,i)}}function KM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;fd.set(i),n.uniformMatrix4fv(this.addr,!1,fd),nn(e,i)}}function ZM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function JM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2iv(this.addr,t),nn(e,t)}}function QM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3iv(this.addr,t),nn(e,t)}}function tw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4iv(this.addr,t),nn(e,t)}}function ew(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function nw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2uiv(this.addr,t),nn(e,t)}}function iw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3uiv(this.addr,t),nn(e,t)}}function sw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4uiv(this.addr,t),nn(e,t)}}function ow(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(ud.compareFunction=dp,o=ud):o=Tp,e.setTexture2D(t||o,s)}function rw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Pp,s)}function aw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Rp,s)}function cw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ap,s)}function lw(n){switch(n){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return jM;case 35675:return $M;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return tw;case 5125:return ew;case 36294:return nw;case 36295:return iw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return cw}}function uw(n,t){n.uniform1fv(this.addr,t)}function hw(n,t){const e=Do(t,this.size,2);n.uniform2fv(this.addr,e)}function dw(n,t){const e=Do(t,this.size,3);n.uniform3fv(this.addr,e)}function fw(n,t){const e=Do(t,this.size,4);n.uniform4fv(this.addr,e)}function pw(n,t){const e=Do(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function mw(n,t){const e=Do(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function gw(n,t){const e=Do(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vw(n,t){n.uniform1iv(this.addr,t)}function _w(n,t){n.uniform2iv(this.addr,t)}function xw(n,t){n.uniform3iv(this.addr,t)}function yw(n,t){n.uniform4iv(this.addr,t)}function Mw(n,t){n.uniform1uiv(this.addr,t)}function ww(n,t){n.uniform2uiv(this.addr,t)}function Sw(n,t){n.uniform3uiv(this.addr,t)}function bw(n,t){n.uniform4uiv(this.addr,t)}function Ew(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Tp,o[r])}function Tw(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Pp,o[r])}function Aw(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Rp,o[r])}function Pw(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ap,o[r])}function Rw(n){switch(n){case 5126:return uw;case 35664:return hw;case 35665:return dw;case 35666:return fw;case 35674:return pw;case 35675:return mw;case 35676:return gw;case 5124:case 35670:return vw;case 35667:case 35671:return _w;case 35668:case 35672:return xw;case 35669:case 35673:return yw;case 5125:return Mw;case 36294:return ww;case 36295:return Sw;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return Pw}}class Cw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=lw(e.type)}}class Iw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rw(e.type)}}class Lw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function gd(n,t){n.seq.push(t),n.map[t.id]=t}function Dw(n,t,e){const i=n.name,s=i.length;for(Bc.lastIndex=0;;){const o=Bc.exec(i),r=Bc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){gd(e,l===void 0?new Cw(a,n,t):new Iw(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Lw(a),gd(e,u)),e=u}}}class pa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Dw(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function vd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Uw=37297;let Nw=0;function Fw(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function Ow(n){const t=Le.getPrimaries(Le.workingColorSpace),e=Le.getPrimaries(n);let i;switch(t===e?i="":t===Ea&&e===ba?i="LinearDisplayP3ToLinearSRGB":t===ba&&e===Ea&&(i="LinearSRGBToLinearDisplayP3"),n){case Ms:case Va:return[i,"LinearTransferOETF"];case ui:case Eu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function _d(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Fw(n.getShaderSource(t),r)}else return s}function Bw(n,t){const e=Ow(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function zw(n,t){let e;switch(t){case kv:e="Linear";break;case Vv:e="Reinhard";break;case Wv:e="Cineon";break;case Xv:e="ACESFilmic";break;case Yv:e="AgX";break;case jv:e="Neutral";break;case qv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new J;function Gw(){Le.getLuminanceCoefficients(Kr);const n=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function kw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Vw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function qo(n){return n!==""}function xd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(Ww,qw)}const Xw=new Map;function qw(n,t){let e=pe[t];if(e===void 0){const i=Xw.get(t);if(i!==void 0)e=pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kl(e)}const Yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(n){return n.replace(Yw,jw)}function jw(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function wd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function $w(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mv?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function Kw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Eo:case To:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case To:t="ENVMAP_MODE_REFRACTION";break}return t}function Jw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qf:t="ENVMAP_BLENDING_MULTIPLY";break;case Gv:t="ENVMAP_BLENDING_MIX";break;case Hv:t="ENVMAP_BLENDING_ADD";break}return t}function Qw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function t1(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=$w(e),l=Kw(e),h=Zw(e),u=Jw(e),d=Qw(e),p=Hw(e),v=kw(o),x=s.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(qo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(qo).join(`
`),f.length>0&&(f+=`
`)):(m=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),f=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gs?"#define TONE_MAPPING":"",e.toneMapping!==gs?pe.tonemapping_pars_fragment:"",e.toneMapping!==gs?zw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Bw("linearToOutputTexel",e.outputColorSpace),Gw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qo).join(`
`)),r=kl(r),r=xd(r,e),r=yd(r,e),a=kl(a),a=xd(a,e),a=yd(a,e),r=Md(r),a=Md(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=T+m+r,E=T+f+a,z=vd(s,s.VERTEX_SHADER,S),I=vd(s,s.FRAGMENT_SHADER,E);s.attachShader(x,z),s.attachShader(x,I),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(b){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(z).trim(),et=s.getShaderInfoLog(I).trim();let rt=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,z,I);else{const nt=_d(s,z,"vertex"),$=_d(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+U+`
`+nt+`
`+$)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||et==="")&&(j=!1);j&&(b.diagnostics={runnable:rt,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:et,prefix:f}})}s.deleteShader(z),s.deleteShader(I),B=new pa(s,x),Q=Vw(s,x)}let B;this.getUniforms=function(){return B===void 0&&R(this),B};let Q;this.getAttributes=function(){return Q===void 0&&R(this),Q};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Uw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=z,this.fragmentShader=I,this}let e1=0;class n1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new i1(t),e.set(t,i)),i}}class i1{constructor(t){this.id=e1++,this.code=t,this.usedTimes=0}}function s1(n,t,e,i,s,o,r){const a=new vp,c=new n1,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let v=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function f(y,b,U,k,et){const rt=k.fog,j=et.geometry,nt=y.isMeshStandardMaterial?k.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||nt),gt=$&&$.mapping===ka?$.image.height:null,pt=x[y.type];y.precision!==null&&(v=s.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const wt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Lt=wt!==void 0?wt.length:0;let zt=0;j.morphAttributes.position!==void 0&&(zt=1),j.morphAttributes.normal!==void 0&&(zt=2),j.morphAttributes.color!==void 0&&(zt=3);let at,dt,Mt,F;if(pt){const te=Pi[pt];at=te.vertexShader,dt=te.fragmentShader}else at=y.vertexShader,dt=y.fragmentShader,c.update(y),Mt=c.getVertexShaderID(y),F=c.getFragmentShaderID(y);const lt=n.getRenderTarget(),st=et.isInstancedMesh===!0,ft=et.isBatchedMesh===!0,St=!!y.map,it=!!y.matcap,g=!!$,A=!!y.aoMap,L=!!y.lightMap,O=!!y.bumpMap,N=!!y.normalMap,q=!!y.displacementMap,Z=!!y.emissiveMap,M=!!y.metalnessMap,_=!!y.roughnessMap,C=y.anisotropy>0,X=y.clearcoat>0,V=y.dispersion>0,W=y.iridescence>0,ut=y.sheen>0,ct=y.transmission>0,mt=C&&!!y.anisotropyMap,Tt=X&&!!y.clearcoatMap,ht=X&&!!y.clearcoatNormalMap,yt=X&&!!y.clearcoatRoughnessMap,At=W&&!!y.iridescenceMap,Dt=W&&!!y.iridescenceThicknessMap,Pt=ut&&!!y.sheenColorMap,qt=ut&&!!y.sheenRoughnessMap,Ut=!!y.specularMap,jt=!!y.specularColorMap,G=!!y.specularIntensityMap,xt=ct&&!!y.transmissionMap,ot=ct&&!!y.thicknessMap,tt=!!y.gradientMap,bt=!!y.alphaMap,Et=y.alphaTest>0,Gt=!!y.alphaHash,Jt=!!y.extensions;let ne=gs;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ne=n.toneMapping);const se={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:at,fragmentShader:dt,defines:y.defines,customVertexShaderID:Mt,customFragmentShaderID:F,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:ft,batchingColor:ft&&et._colorsTexture!==null,instancing:st,instancingColor:st&&et.instanceColor!==null,instancingMorph:st&&et.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ms,alphaToCoverage:!!y.alphaToCoverage,map:St,matcap:it,envMap:g,envMapMode:g&&$.mapping,envMapCubeUVHeight:gt,aoMap:A,lightMap:L,bumpMap:O,normalMap:N,displacementMap:p&&q,emissiveMap:Z,normalMapObjectSpace:N&&y.normalMapType===Jv,normalMapTangentSpace:N&&y.normalMapType===hp,metalnessMap:M,roughnessMap:_,anisotropy:C,anisotropyMap:mt,clearcoat:X,clearcoatMap:Tt,clearcoatNormalMap:ht,clearcoatRoughnessMap:yt,dispersion:V,iridescence:W,iridescenceMap:At,iridescenceThicknessMap:Dt,sheen:ut,sheenColorMap:Pt,sheenRoughnessMap:qt,specularMap:Ut,specularColorMap:jt,specularIntensityMap:G,transmission:ct,transmissionMap:xt,thicknessMap:ot,gradientMap:tt,opaque:y.transparent===!1&&y.blending===vo&&y.alphaToCoverage===!1,alphaMap:bt,alphaTest:Et,alphaHash:Gt,combine:y.combine,mapUv:St&&m(y.map.channel),aoMapUv:A&&m(y.aoMap.channel),lightMapUv:L&&m(y.lightMap.channel),bumpMapUv:O&&m(y.bumpMap.channel),normalMapUv:N&&m(y.normalMap.channel),displacementMapUv:q&&m(y.displacementMap.channel),emissiveMapUv:Z&&m(y.emissiveMap.channel),metalnessMapUv:M&&m(y.metalnessMap.channel),roughnessMapUv:_&&m(y.roughnessMap.channel),anisotropyMapUv:mt&&m(y.anisotropyMap.channel),clearcoatMapUv:Tt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:qt&&m(y.sheenRoughnessMap.channel),specularMapUv:Ut&&m(y.specularMap.channel),specularColorMapUv:jt&&m(y.specularColorMap.channel),specularIntensityMapUv:G&&m(y.specularIntensityMap.channel),transmissionMapUv:xt&&m(y.transmissionMap.channel),thicknessMapUv:ot&&m(y.thicknessMap.channel),alphaMapUv:bt&&m(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(N||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!j.attributes.uv&&(St||bt),fog:!!rt,useFog:y.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:et.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:zt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,decodeVideoTexture:St&&y.map.isVideoTexture===!0&&Le.getTransfer(y.map.colorSpace)===Ve,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Me,flipSided:y.side===Nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Jt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&y.extensions.multiDraw===!0||ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function T(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)b.push(U),b.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(S(b,y),E(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function S(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function E(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),y.push(a.mask)}function z(y){const b=x[y.type];let U;if(b){const k=Pi[b];U=V_.clone(k.uniforms)}else U=y.uniforms;return U}function I(y,b){let U;for(let k=0,et=h.length;k<et;k++){const rt=h[k];if(rt.cacheKey===b){U=rt,++U.usedTimes;break}}return U===void 0&&(U=new t1(n,b,y,o),h.push(U)),U}function R(y){if(--y.usedTimes===0){const b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function B(y){c.remove(y)}function Q(){c.dispose()}return{getParameters:f,getProgramCacheKey:T,getUniforms:z,acquireProgram:I,releaseProgram:R,releaseShaderCache:B,programs:h,dispose:Q}}function o1(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function r1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Sd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function bd(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,p,v,x,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,v,x,m){const f=r(u,d,p,v,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,v,x,m){const f=r(u,d,p,v,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||r1),i.length>1&&i.sort(d||Sd),s.length>1&&s.sort(d||Sd)}function h(){for(let u=t,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function a1(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new bd,n.set(i,[r])):s>=o.length?(r=new bd,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function c1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new ge};break;case"SpotLight":e={position:new J,direction:new J,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function l1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let u1=0;function h1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function d1(n){const t=new c1,e=l1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new J);const s=new J,o=new We,r=new We;function a(l){let h=0,u=0,d=0;for(let Q=0;Q<9;Q++)i.probe[Q].set(0,0,0);let p=0,v=0,x=0,m=0,f=0,T=0,S=0,E=0,z=0,I=0,R=0;l.sort(h1);for(let Q=0,y=l.length;Q<y;Q++){const b=l[Q],U=b.color,k=b.intensity,et=b.distance,rt=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=U.r*k,u+=U.g*k,d+=U.b*k;else if(b.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(b.sh.coefficients[j],k);R++}else if(b.isDirectionalLight){const j=t.get(b);if(j.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const nt=b.shadow,$=e.get(b);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=rt,i.directionalShadowMatrix[p]=b.shadow.matrix,T++}i.directional[p]=j,p++}else if(b.isSpotLight){const j=t.get(b);j.position.setFromMatrixPosition(b.matrixWorld),j.color.copy(U).multiplyScalar(k),j.distance=et,j.coneCos=Math.cos(b.angle),j.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),j.decay=b.decay,i.spot[x]=j;const nt=b.shadow;if(b.map&&(i.spotLightMap[z]=b.map,z++,nt.updateMatrices(b),b.castShadow&&I++),i.spotLightMatrix[x]=nt.matrix,b.castShadow){const $=e.get(b);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=rt,E++}x++}else if(b.isRectAreaLight){const j=t.get(b);j.color.copy(U).multiplyScalar(k),j.halfWidth.set(b.width*.5,0,0),j.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=j,m++}else if(b.isPointLight){const j=t.get(b);if(j.color.copy(b.color).multiplyScalar(b.intensity),j.distance=b.distance,j.decay=b.decay,b.castShadow){const nt=b.shadow,$=e.get(b);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,$.shadowCameraNear=nt.camera.near,$.shadowCameraFar=nt.camera.far,i.pointShadow[v]=$,i.pointShadowMap[v]=rt,i.pointShadowMatrix[v]=b.shadow.matrix,S++}i.point[v]=j,v++}else if(b.isHemisphereLight){const j=t.get(b);j.skyColor.copy(b.color).multiplyScalar(k),j.groundColor.copy(b.groundColor).multiplyScalar(k),i.hemi[f]=j,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Vt.LTC_FLOAT_1,i.rectAreaLTC2=Vt.LTC_FLOAT_2):(i.rectAreaLTC1=Vt.LTC_HALF_1,i.rectAreaLTC2=Vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const B=i.hash;(B.directionalLength!==p||B.pointLength!==v||B.spotLength!==x||B.rectAreaLength!==m||B.hemiLength!==f||B.numDirectionalShadows!==T||B.numPointShadows!==S||B.numSpotShadows!==E||B.numSpotMaps!==z||B.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+z-I,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,B.directionalLength=p,B.pointLength=v,B.spotLength=x,B.rectAreaLength=m,B.hemiLength=f,B.numDirectionalShadows=T,B.numPointShadows=S,B.numSpotShadows=E,B.numSpotMaps=z,B.numLightProbes=R,i.version=u1++)}function c(l,h){let u=0,d=0,p=0,v=0,x=0;const m=h.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const S=l[f];if(S.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(S.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),r.identity(),o.copy(S.matrixWorld),o.premultiply(m),r.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),v++}else if(S.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Ed(n){const t=new d1(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function f1(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Ed(n),t.set(s,[a])):o>=r.length?(a=new Ed(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class p1 extends Lo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class m1 extends Lo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const g1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
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
}`;function _1(n,t,e){let i=new Cu;const s=new Wt,o=new Wt,r=new Ne,a=new p1({depthPacking:Zv}),c=new m1,l={},h=e.maxTextureSize,u={[_s]:Nn,[Nn]:_s,[Me]:Me},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:g1,fragmentShader:v1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Mn;v.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new w(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let f=this.type;this.render=function(I,R,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const Q=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ms),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=f!==Wi&&this.type===Wi,et=f===Wi&&this.type!==Wi;for(let rt=0,j=I.length;rt<j;rt++){const nt=I[rt],$=nt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const gt=$.getFrameExtents();if(s.multiply(gt),o.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/gt.x),s.x=o.x*gt.x,$.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/gt.y),s.y=o.y*gt.y,$.mapSize.y=o.y)),$.map===null||k===!0||et===!0){const wt=this.type!==Wi?{minFilter:oi,magFilter:oi}:{};$.map!==null&&$.map.dispose(),$.map=new Gs(s.x,s.y,wt),$.map.texture.name=nt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const pt=$.getViewportCount();for(let wt=0;wt<pt;wt++){const Lt=$.getViewport(wt);r.set(o.x*Lt.x,o.y*Lt.y,o.x*Lt.z,o.y*Lt.w),U.viewport(r),$.updateMatrices(nt,wt),i=$.getFrustum(),E(R,B,$.camera,nt,this.type)}$.isPointLightShadow!==!0&&this.type===Wi&&T($,B),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(Q,y,b)};function T(I,R){const B=t.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Gs(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,B,d,x,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,B,p,x,null)}function S(I,R,B,Q){let y=null;const b=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(b!==void 0)y=b;else if(y=B.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const U=y.uuid,k=R.uuid;let et=l[U];et===void 0&&(et={},l[U]=et);let rt=et[k];rt===void 0&&(rt=y.clone(),et[k]=rt,R.addEventListener("dispose",z)),y=rt}if(y.visible=R.visible,y.wireframe=R.wireframe,Q===Wi?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=B}return y}function E(I,R,B,Q,y){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===Wi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const k=t.update(I),et=I.material;if(Array.isArray(et)){const rt=k.groups;for(let j=0,nt=rt.length;j<nt;j++){const $=rt[j],gt=et[$.materialIndex];if(gt&&gt.visible){const pt=S(I,gt,Q,y);I.onBeforeShadow(n,I,R,B,k,pt,$),n.renderBufferDirect(B,null,k,pt,I,$),I.onAfterShadow(n,I,R,B,k,pt,$)}}}else if(et.visible){const rt=S(I,et,Q,y);I.onBeforeShadow(n,I,R,B,k,rt,null),n.renderBufferDirect(B,null,k,rt,I,null),I.onAfterShadow(n,I,R,B,k,rt,null)}}const U=I.children;for(let k=0,et=U.length;k<et;k++)E(U[k],R,B,Q,y)}function z(I){I.target.removeEventListener("dispose",z);for(const B in l){const Q=l[B],y=I.target.uuid;y in Q&&(Q[y].dispose(),delete Q[y])}}}const x1={[al]:cl,[ll]:dl,[ul]:fl,[bo]:hl,[cl]:al,[dl]:ll,[fl]:ul,[hl]:bo};function y1(n){function t(){let G=!1;const xt=new Ne;let ot=null;const tt=new Ne(0,0,0,0);return{setMask:function(bt){ot!==bt&&!G&&(n.colorMask(bt,bt,bt,bt),ot=bt)},setLocked:function(bt){G=bt},setClear:function(bt,Et,Gt,Jt,ne){ne===!0&&(bt*=Jt,Et*=Jt,Gt*=Jt),xt.set(bt,Et,Gt,Jt),tt.equals(xt)===!1&&(n.clearColor(bt,Et,Gt,Jt),tt.copy(xt))},reset:function(){G=!1,ot=null,tt.set(-1,0,0,0)}}}function e(){let G=!1,xt=!1,ot=null,tt=null,bt=null;return{setReversed:function(Et){xt=Et},setTest:function(Et){Et?Mt(n.DEPTH_TEST):F(n.DEPTH_TEST)},setMask:function(Et){ot!==Et&&!G&&(n.depthMask(Et),ot=Et)},setFunc:function(Et){if(xt&&(Et=x1[Et]),tt!==Et){switch(Et){case al:n.depthFunc(n.NEVER);break;case cl:n.depthFunc(n.ALWAYS);break;case ll:n.depthFunc(n.LESS);break;case bo:n.depthFunc(n.LEQUAL);break;case ul:n.depthFunc(n.EQUAL);break;case hl:n.depthFunc(n.GEQUAL);break;case dl:n.depthFunc(n.GREATER);break;case fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=Et}},setLocked:function(Et){G=Et},setClear:function(Et){bt!==Et&&(n.clearDepth(Et),bt=Et)},reset:function(){G=!1,ot=null,tt=null,bt=null}}}function i(){let G=!1,xt=null,ot=null,tt=null,bt=null,Et=null,Gt=null,Jt=null,ne=null;return{setTest:function(se){G||(se?Mt(n.STENCIL_TEST):F(n.STENCIL_TEST))},setMask:function(se){xt!==se&&!G&&(n.stencilMask(se),xt=se)},setFunc:function(se,te,ae){(ot!==se||tt!==te||bt!==ae)&&(n.stencilFunc(se,te,ae),ot=se,tt=te,bt=ae)},setOp:function(se,te,ae){(Et!==se||Gt!==te||Jt!==ae)&&(n.stencilOp(se,te,ae),Et=se,Gt=te,Jt=ae)},setLocked:function(se){G=se},setClear:function(se){ne!==se&&(n.clearStencil(se),ne=se)},reset:function(){G=!1,xt=null,ot=null,tt=null,bt=null,Et=null,Gt=null,Jt=null,ne=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],p=null,v=!1,x=null,m=null,f=null,T=null,S=null,E=null,z=null,I=new ge(0,0,0),R=0,B=!1,Q=null,y=null,b=null,U=null,k=null;const et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,j=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(nt)[1]),rt=j>=1):nt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),rt=j>=2);let $=null,gt={};const pt=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),Lt=new Ne().fromArray(pt),zt=new Ne().fromArray(wt);function at(G,xt,ot,tt){const bt=new Uint8Array(4),Et=n.createTexture();n.bindTexture(G,Et),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<ot;Gt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(xt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return Et}const dt={};dt[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),Mt(n.DEPTH_TEST),o.setFunc(bo),L(!1),O(Lh),Mt(n.CULL_FACE),g(ms);function Mt(G){l[G]!==!0&&(n.enable(G),l[G]=!0)}function F(G){l[G]!==!1&&(n.disable(G),l[G]=!1)}function lt(G,xt){return h[G]!==xt?(n.bindFramebuffer(G,xt),h[G]=xt,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xt),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function st(G,xt){let ot=d,tt=!1;if(G){ot=u.get(xt),ot===void 0&&(ot=[],u.set(xt,ot));const bt=G.textures;if(ot.length!==bt.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,Gt=bt.length;Et<Gt;Et++)ot[Et]=n.COLOR_ATTACHMENT0+Et;ot.length=bt.length,tt=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,tt=!0);tt&&n.drawBuffers(ot)}function ft(G){return p!==G?(n.useProgram(G),p=G,!0):!1}const St={[Ds]:n.FUNC_ADD,[Sv]:n.FUNC_SUBTRACT,[bv]:n.FUNC_REVERSE_SUBTRACT};St[Ev]=n.MIN,St[Tv]=n.MAX;const it={[Av]:n.ZERO,[Pv]:n.ONE,[Rv]:n.SRC_COLOR,[ol]:n.SRC_ALPHA,[Nv]:n.SRC_ALPHA_SATURATE,[Dv]:n.DST_COLOR,[Iv]:n.DST_ALPHA,[Cv]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[Uv]:n.ONE_MINUS_DST_COLOR,[Lv]:n.ONE_MINUS_DST_ALPHA,[Fv]:n.CONSTANT_COLOR,[Ov]:n.ONE_MINUS_CONSTANT_COLOR,[Bv]:n.CONSTANT_ALPHA,[zv]:n.ONE_MINUS_CONSTANT_ALPHA};function g(G,xt,ot,tt,bt,Et,Gt,Jt,ne,se){if(G===ms){v===!0&&(F(n.BLEND),v=!1);return}if(v===!1&&(Mt(n.BLEND),v=!0),G!==wv){if(G!==x||se!==B){if((m!==Ds||S!==Ds)&&(n.blendEquation(n.FUNC_ADD),m=Ds,S=Ds),se)switch(G){case vo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dh:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case vo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}f=null,T=null,E=null,z=null,I.set(0,0,0),R=0,x=G,B=se}return}bt=bt||xt,Et=Et||ot,Gt=Gt||tt,(xt!==m||bt!==S)&&(n.blendEquationSeparate(St[xt],St[bt]),m=xt,S=bt),(ot!==f||tt!==T||Et!==E||Gt!==z)&&(n.blendFuncSeparate(it[ot],it[tt],it[Et],it[Gt]),f=ot,T=tt,E=Et,z=Gt),(Jt.equals(I)===!1||ne!==R)&&(n.blendColor(Jt.r,Jt.g,Jt.b,ne),I.copy(Jt),R=ne),x=G,B=!1}function A(G,xt){G.side===Me?F(n.CULL_FACE):Mt(n.CULL_FACE);let ot=G.side===Nn;xt&&(ot=!ot),L(ot),G.blending===vo&&G.transparent===!1?g(ms):g(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const tt=G.stencilWrite;r.setTest(tt),tt&&(r.setMask(G.stencilWriteMask),r.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),r.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),q(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):F(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(G){Q!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),Q=G)}function O(G){G!==xv?(Mt(n.CULL_FACE),G!==y&&(G===Lh?n.cullFace(n.BACK):G===yv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):F(n.CULL_FACE),y=G}function N(G){G!==b&&(rt&&n.lineWidth(G),b=G)}function q(G,xt,ot){G?(Mt(n.POLYGON_OFFSET_FILL),(U!==xt||k!==ot)&&(n.polygonOffset(xt,ot),U=xt,k=ot)):F(n.POLYGON_OFFSET_FILL)}function Z(G){G?Mt(n.SCISSOR_TEST):F(n.SCISSOR_TEST)}function M(G){G===void 0&&(G=n.TEXTURE0+et-1),$!==G&&(n.activeTexture(G),$=G)}function _(G,xt,ot){ot===void 0&&($===null?ot=n.TEXTURE0+et-1:ot=$);let tt=gt[ot];tt===void 0&&(tt={type:void 0,texture:void 0},gt[ot]=tt),(tt.type!==G||tt.texture!==xt)&&($!==ot&&(n.activeTexture(ot),$=ot),n.bindTexture(G,xt||dt[G]),tt.type=G,tt.texture=xt)}function C(){const G=gt[$];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Dt(G){Lt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Lt.copy(G))}function Pt(G){zt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),zt.copy(G))}function qt(G,xt){let ot=c.get(xt);ot===void 0&&(ot=new WeakMap,c.set(xt,ot));let tt=ot.get(G);tt===void 0&&(tt=n.getUniformBlockIndex(xt,G.name),ot.set(G,tt))}function Ut(G,xt){const tt=c.get(xt).get(G);a.get(xt)!==tt&&(n.uniformBlockBinding(xt,tt,G.__bindingPointIndex),a.set(xt,tt))}function jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},$=null,gt={},h={},u=new WeakMap,d=[],p=null,v=!1,x=null,m=null,f=null,T=null,S=null,E=null,z=null,I=new ge(0,0,0),R=0,B=!1,Q=null,y=null,b=null,U=null,k=null,Lt.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:Mt,disable:F,bindFramebuffer:lt,drawBuffers:st,useProgram:ft,setBlending:g,setMaterial:A,setFlipSided:L,setCullFace:O,setLineWidth:N,setPolygonOffset:q,setScissorTest:Z,activeTexture:M,bindTexture:_,unbindTexture:C,compressedTexImage2D:X,compressedTexImage3D:V,texImage2D:yt,texImage3D:At,updateUBOMapping:qt,uniformBlockBinding:Ut,texStorage2D:Tt,texStorage3D:ht,texSubImage2D:W,texSubImage3D:ut,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Dt,viewport:Pt,reset:jt}}function Td(n,t,e,i){const s=M1(i);switch(e){case sp:return n*t;case rp:return n*t;case ap:return n*t*2;case cp:return n*t/s.components*s.byteLength;case wu:return n*t/s.components*s.byteLength;case lp:return n*t*2/s.components*s.byteLength;case Su:return n*t*2/s.components*s.byteLength;case op:return n*t*3/s.components*s.byteLength;case Zn:return n*t*4/s.components*s.byteLength;case bu:return n*t*4/s.components*s.byteLength;case ca:case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vl:case xl:return Math.max(n,16)*Math.max(t,8)/4;case gl:case _l:return Math.max(n,8)*Math.max(t,8)/2;case yl:case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case da:case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case up:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Gl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function M1(n){switch(n){case Qi:case ep:return{byteLength:1,components:1};case dr:case np:case yr:return{byteLength:2,components:1};case yu:case Mu:return{byteLength:2,components:4};case zs:case xu:case ji:return{byteLength:4,components:1};case ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function w1(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,_){return p?new OffscreenCanvas(M,_):pr("canvas")}function x(M,_,C){let X=1;const V=Z(M);if((V.width>C||V.height>C)&&(X=C/Math.max(V.width,V.height)),X<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const W=Math.floor(X*V.width),ut=Math.floor(X*V.height);u===void 0&&(u=v(W,ut));const ct=_?v(W,ut):u;return ct.width=W,ct.height=ut,ct.getContext("2d").drawImage(M,0,0,W,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+W+"x"+ut+")."),ct}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),M;return M}function m(M){return M.generateMipmaps&&M.minFilter!==oi&&M.minFilter!==di}function f(M){n.generateMipmap(M)}function T(M,_,C,X,V=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=_;if(_===n.RED&&(C===n.FLOAT&&(W=n.R32F),C===n.HALF_FLOAT&&(W=n.R16F),C===n.UNSIGNED_BYTE&&(W=n.R8)),_===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(W=n.R8UI),C===n.UNSIGNED_SHORT&&(W=n.R16UI),C===n.UNSIGNED_INT&&(W=n.R32UI),C===n.BYTE&&(W=n.R8I),C===n.SHORT&&(W=n.R16I),C===n.INT&&(W=n.R32I)),_===n.RG&&(C===n.FLOAT&&(W=n.RG32F),C===n.HALF_FLOAT&&(W=n.RG16F),C===n.UNSIGNED_BYTE&&(W=n.RG8)),_===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(W=n.RG8UI),C===n.UNSIGNED_SHORT&&(W=n.RG16UI),C===n.UNSIGNED_INT&&(W=n.RG32UI),C===n.BYTE&&(W=n.RG8I),C===n.SHORT&&(W=n.RG16I),C===n.INT&&(W=n.RG32I)),_===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(W=n.RGB8UI),C===n.UNSIGNED_SHORT&&(W=n.RGB16UI),C===n.UNSIGNED_INT&&(W=n.RGB32UI),C===n.BYTE&&(W=n.RGB8I),C===n.SHORT&&(W=n.RGB16I),C===n.INT&&(W=n.RGB32I)),_===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),C===n.UNSIGNED_INT&&(W=n.RGBA32UI),C===n.BYTE&&(W=n.RGBA8I),C===n.SHORT&&(W=n.RGBA16I),C===n.INT&&(W=n.RGBA32I)),_===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),_===n.RGBA){const ut=V?Sa:Le.getTransfer(X);C===n.FLOAT&&(W=n.RGBA32F),C===n.HALF_FLOAT&&(W=n.RGBA16F),C===n.UNSIGNED_BYTE&&(W=ut===Ve?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function S(M,_){let C;return M?_===null||_===zs||_===Ao?C=n.DEPTH24_STENCIL8:_===ji?C=n.DEPTH32F_STENCIL8:_===dr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zs||_===Ao?C=n.DEPTH_COMPONENT24:_===ji?C=n.DEPTH_COMPONENT32F:_===dr&&(C=n.DEPTH_COMPONENT16),C}function E(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==oi&&M.minFilter!==di?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function z(M){const _=M.target;_.removeEventListener("dispose",z),R(_),_.isVideoTexture&&h.delete(_)}function I(M){const _=M.target;_.removeEventListener("dispose",I),Q(_)}function R(M){const _=i.get(M);if(_.__webglInit===void 0)return;const C=M.source,X=d.get(C);if(X){const V=X[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&B(M),Object.keys(X).length===0&&d.delete(C)}i.remove(M)}function B(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const C=M.source,X=d.get(C);delete X[_.__cacheKey],r.memory.textures--}function Q(M){const _=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let V=0;V<_.__webglFramebuffer[X].length;V++)n.deleteFramebuffer(_.__webglFramebuffer[X][V]);else n.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)n.deleteFramebuffer(_.__webglFramebuffer[X]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const C=M.textures;for(let X=0,V=C.length;X<V;X++){const W=i.get(C[X]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),r.memory.textures--),i.remove(C[X])}i.remove(M)}let y=0;function b(){y=0}function U(){const M=y;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),y+=1,M}function k(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function et(M,_){const C=i.get(M);if(M.isVideoTexture&&N(M),M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){const X=M.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(C,M,_);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+_)}function rt(M,_){const C=i.get(M);if(M.version>0&&C.__version!==M.version){zt(C,M,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+_)}function j(M,_){const C=i.get(M);if(M.version>0&&C.__version!==M.version){zt(C,M,_);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+_)}function nt(M,_){const C=i.get(M);if(M.version>0&&C.__version!==M.version){at(C,M,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+_)}const $={[qe]:n.REPEAT,[Ns]:n.CLAMP_TO_EDGE,[ml]:n.MIRRORED_REPEAT},gt={[oi]:n.NEAREST,[$v]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[di]:n.LINEAR,[hc]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},pt={[Qv]:n.NEVER,[o_]:n.ALWAYS,[t_]:n.LESS,[dp]:n.LEQUAL,[e_]:n.EQUAL,[s_]:n.GEQUAL,[n_]:n.GREATER,[i_]:n.NOTEQUAL};function wt(M,_){if(_.type===ji&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===di||_.magFilter===hc||_.magFilter===Cr||_.magFilter===Yi||_.minFilter===di||_.minFilter===hc||_.minFilter===Cr||_.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,$[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,$[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,$[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,gt[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,gt[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===oi||_.minFilter!==Cr&&_.minFilter!==Yi||_.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Lt(M,_){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",z));const X=_.source;let V=d.get(X);V===void 0&&(V={},d.set(X,V));const W=k(_);if(W!==M.__cacheKey){V[W]===void 0&&(V[W]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,C=!0),V[W].usedTimes++;const ut=V[M.__cacheKey];ut!==void 0&&(V[M.__cacheKey].usedTimes--,ut.usedTimes===0&&B(_)),M.__cacheKey=W,M.__webglTexture=V[W].texture}return C}function zt(M,_,C){let X=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=n.TEXTURE_3D);const V=Lt(M,_),W=_.source;e.bindTexture(X,M.__webglTexture,n.TEXTURE0+C);const ut=i.get(W);if(W.version!==ut.__version||V===!0){e.activeTexture(n.TEXTURE0+C);const ct=Le.getPrimaries(Le.workingColorSpace),mt=_.colorSpace===ps?null:Le.getPrimaries(_.colorSpace),Tt=_.colorSpace===ps||ct===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ht=x(_.image,!1,s.maxTextureSize);ht=q(_,ht);const yt=o.convert(_.format,_.colorSpace),At=o.convert(_.type);let Dt=T(_.internalFormat,yt,At,_.colorSpace,_.isVideoTexture);wt(X,_);let Pt;const qt=_.mipmaps,Ut=_.isVideoTexture!==!0,jt=ut.__version===void 0||V===!0,G=W.dataReady,xt=E(_,ht);if(_.isDepthTexture)Dt=S(_.format===Po,_.type),jt&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,Dt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Dt,ht.width,ht.height,0,yt,At,null));else if(_.isDataTexture)if(qt.length>0){Ut&&jt&&e.texStorage2D(n.TEXTURE_2D,xt,Dt,qt[0].width,qt[0].height);for(let ot=0,tt=qt.length;ot<tt;ot++)Pt=qt[ot],Ut?G&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,yt,At,Pt.data):e.texImage2D(n.TEXTURE_2D,ot,Dt,Pt.width,Pt.height,0,yt,At,Pt.data);_.generateMipmaps=!1}else Ut?(jt&&e.texStorage2D(n.TEXTURE_2D,xt,Dt,ht.width,ht.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,yt,At,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,ht.width,ht.height,0,yt,At,ht.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ut&&jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Dt,qt[0].width,qt[0].height,ht.depth);for(let ot=0,tt=qt.length;ot<tt;ot++)if(Pt=qt[ot],_.format!==Zn)if(yt!==null)if(Ut){if(G)if(_.layerUpdates.size>0){const bt=Td(Pt.width,Pt.height,_.format,_.type);for(const Et of _.layerUpdates){const Gt=Pt.data.subarray(Et*bt/Pt.data.BYTES_PER_ELEMENT,(Et+1)*bt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,Et,Pt.width,Pt.height,1,yt,Gt,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,ht.depth,yt,Pt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ot,Dt,Pt.width,Pt.height,ht.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,ht.depth,yt,At,Pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ot,Dt,Pt.width,Pt.height,ht.depth,0,yt,At,Pt.data)}else{Ut&&jt&&e.texStorage2D(n.TEXTURE_2D,xt,Dt,qt[0].width,qt[0].height);for(let ot=0,tt=qt.length;ot<tt;ot++)Pt=qt[ot],_.format!==Zn?yt!==null?Ut?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,yt,Pt.data):e.compressedTexImage2D(n.TEXTURE_2D,ot,Dt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?G&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,yt,At,Pt.data):e.texImage2D(n.TEXTURE_2D,ot,Dt,Pt.width,Pt.height,0,yt,At,Pt.data)}else if(_.isDataArrayTexture)if(Ut){if(jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Dt,ht.width,ht.height,ht.depth),G)if(_.layerUpdates.size>0){const ot=Td(ht.width,ht.height,_.format,_.type);for(const tt of _.layerUpdates){const bt=ht.data.subarray(tt*ot/ht.data.BYTES_PER_ELEMENT,(tt+1)*ot/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,ht.width,ht.height,1,yt,At,bt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,yt,At,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,ht.width,ht.height,ht.depth,0,yt,At,ht.data);else if(_.isData3DTexture)Ut?(jt&&e.texStorage3D(n.TEXTURE_3D,xt,Dt,ht.width,ht.height,ht.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,yt,At,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,ht.width,ht.height,ht.depth,0,yt,At,ht.data);else if(_.isFramebufferTexture){if(jt)if(Ut)e.texStorage2D(n.TEXTURE_2D,xt,Dt,ht.width,ht.height);else{let ot=ht.width,tt=ht.height;for(let bt=0;bt<xt;bt++)e.texImage2D(n.TEXTURE_2D,bt,Dt,ot,tt,0,yt,At,null),ot>>=1,tt>>=1}}else if(qt.length>0){if(Ut&&jt){const ot=Z(qt[0]);e.texStorage2D(n.TEXTURE_2D,xt,Dt,ot.width,ot.height)}for(let ot=0,tt=qt.length;ot<tt;ot++)Pt=qt[ot],Ut?G&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,yt,At,Pt):e.texImage2D(n.TEXTURE_2D,ot,Dt,yt,At,Pt);_.generateMipmaps=!1}else if(Ut){if(jt){const ot=Z(ht);e.texStorage2D(n.TEXTURE_2D,xt,Dt,ot.width,ot.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,At,ht)}else e.texImage2D(n.TEXTURE_2D,0,Dt,yt,At,ht);m(_)&&f(X),ut.__version=W.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function at(M,_,C){if(_.image.length!==6)return;const X=Lt(M,_),V=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+C);const W=i.get(V);if(V.version!==W.__version||X===!0){e.activeTexture(n.TEXTURE0+C);const ut=Le.getPrimaries(Le.workingColorSpace),ct=_.colorSpace===ps?null:Le.getPrimaries(_.colorSpace),mt=_.colorSpace===ps||ut===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Tt=_.isCompressedTexture||_.image[0].isCompressedTexture,ht=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let tt=0;tt<6;tt++)!Tt&&!ht?yt[tt]=x(_.image[tt],!0,s.maxCubemapSize):yt[tt]=ht?_.image[tt].image:_.image[tt],yt[tt]=q(_,yt[tt]);const At=yt[0],Dt=o.convert(_.format,_.colorSpace),Pt=o.convert(_.type),qt=T(_.internalFormat,Dt,Pt,_.colorSpace),Ut=_.isVideoTexture!==!0,jt=W.__version===void 0||X===!0,G=V.dataReady;let xt=E(_,At);wt(n.TEXTURE_CUBE_MAP,_);let ot;if(Tt){Ut&&jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,qt,At.width,At.height);for(let tt=0;tt<6;tt++){ot=yt[tt].mipmaps;for(let bt=0;bt<ot.length;bt++){const Et=ot[bt];_.format!==Zn?Dt!==null?Ut?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,Et.width,Et.height,Dt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,qt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,Et.width,Et.height,Dt,Pt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,qt,Et.width,Et.height,0,Dt,Pt,Et.data)}}}else{if(ot=_.mipmaps,Ut&&jt){ot.length>0&&xt++;const tt=Z(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ht){Ut?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,yt[tt].width,yt[tt].height,Dt,Pt,yt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,yt[tt].width,yt[tt].height,0,Dt,Pt,yt[tt].data);for(let bt=0;bt<ot.length;bt++){const Gt=ot[bt].image[tt].image;Ut?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,Gt.width,Gt.height,Dt,Pt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,qt,Gt.width,Gt.height,0,Dt,Pt,Gt.data)}}else{Ut?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,Pt,yt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,Dt,Pt,yt[tt]);for(let bt=0;bt<ot.length;bt++){const Et=ot[bt];Ut?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,Dt,Pt,Et.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,qt,Dt,Pt,Et.image[tt])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),W.__version=V.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function dt(M,_,C,X,V,W){const ut=o.convert(C.format,C.colorSpace),ct=o.convert(C.type),mt=T(C.internalFormat,ut,ct,C.colorSpace);if(!i.get(_).__hasExternalTextures){const ht=Math.max(1,_.width>>W),yt=Math.max(1,_.height>>W);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?e.texImage3D(V,W,mt,ht,yt,_.depth,0,ut,ct,null):e.texImage2D(V,W,mt,ht,yt,0,ut,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),O(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,V,i.get(C).__webglTexture,0,L(_)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,V,i.get(C).__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(M,_,C){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const X=_.depthTexture,V=X&&X.isDepthTexture?X.type:null,W=S(_.stencilBuffer,V),ut=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=L(_);O(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,W,_.width,_.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,W,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,W,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,M)}else{const X=_.textures;for(let V=0;V<X.length;V++){const W=X[V],ut=o.convert(W.format,W.colorSpace),ct=o.convert(W.type),mt=T(W.internalFormat,ut,ct,W.colorSpace),Tt=L(_);C&&O(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,mt,_.width,_.height):O(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,mt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,mt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),et(_.depthTexture,0);const X=i.get(_.depthTexture).__webglTexture,V=L(_);if(_.depthTexture.format===_o)O(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(_.depthTexture.format===Po)O(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function lt(M){const _=i.get(M),C=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const X=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const V=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",V)};X.addEventListener("dispose",V),_.__depthDisposeCallback=V}_.__boundDepthTexture=X}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");F(_.__webglFramebuffer,M)}else if(C){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=n.createRenderbuffer(),Mt(_.__webglDepthbuffer[X],M,!1);else{const V=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Mt(_.__webglDepthbuffer,M,!1);else{const X=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,V)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(M,_,C){const X=i.get(M);_!==void 0&&dt(X.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&lt(M)}function ft(M){const _=M.texture,C=i.get(M),X=i.get(_);M.addEventListener("dispose",I);const V=M.textures,W=M.isWebGLCubeRenderTarget===!0,ut=V.length>1;if(ut||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=_.version,r.memory.textures++),W){C.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[ct]=[];for(let mt=0;mt<_.mipmaps.length;mt++)C.__webglFramebuffer[ct][mt]=n.createFramebuffer()}else C.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let ct=0;ct<_.mipmaps.length;ct++)C.__webglFramebuffer[ct]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ut)for(let ct=0,mt=V.length;ct<mt;ct++){const Tt=i.get(V[ct]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),r.memory.textures++)}if(M.samples>0&&O(M)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ct=0;ct<V.length;ct++){const mt=V[ct];C.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ct]);const Tt=o.convert(mt.format,mt.colorSpace),ht=o.convert(mt.type),yt=T(mt.internalFormat,Tt,ht,mt.colorSpace,M.isXRRenderTarget===!0),At=L(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,yt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,C.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(C.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),wt(n.TEXTURE_CUBE_MAP,_);for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)dt(C.__webglFramebuffer[ct][mt],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else dt(C.__webglFramebuffer[ct],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let ct=0,mt=V.length;ct<mt;ct++){const Tt=V[ct],ht=i.get(Tt);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),wt(n.TEXTURE_2D,Tt),dt(C.__webglFramebuffer,M,Tt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Tt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ct=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,X.__webglTexture),wt(ct,_),_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)dt(C.__webglFramebuffer[mt],M,_,n.COLOR_ATTACHMENT0,ct,mt);else dt(C.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,ct,0);m(_)&&f(ct),e.unbindTexture()}M.depthBuffer&&lt(M)}function St(M){const _=M.textures;for(let C=0,X=_.length;C<X;C++){const V=_[C];if(m(V)){const W=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ut=i.get(V).__webglTexture;e.bindTexture(W,ut),f(W),e.unbindTexture()}}}const it=[],g=[];function A(M){if(M.samples>0){if(O(M)===!1){const _=M.textures,C=M.width,X=M.height;let V=n.COLOR_BUFFER_BIT;const W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(M),ct=_.length>1;if(ct)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[mt]);const Tt=i.get(_[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,C,X,0,0,C,X,V,n.NEAREST),c===!0&&(it.length=0,g.length=0,it.push(n.COLOR_ATTACHMENT0+mt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(it.push(W),g.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[mt]);const Tt=i.get(_[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function L(M){return Math.min(s.maxSamples,M.samples)}function O(M){const _=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(M){const _=r.render.frame;h.get(M)!==_&&(h.set(M,_),M.update())}function q(M,_){const C=M.colorSpace,X=M.format,V=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||C!==Ms&&C!==ps&&(Le.getTransfer(C)===Ve?(X!==Zn||V!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function Z(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=b,this.setTexture2D=et,this.setTexture2DArray=rt,this.setTexture3D=j,this.setTextureCube=nt,this.rebindTextures=st,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=O}function S1(n,t){function e(i,s=ps){let o;const r=Le.getTransfer(s);if(i===Qi)return n.UNSIGNED_BYTE;if(i===yu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ip)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ep)return n.BYTE;if(i===np)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===xu)return n.INT;if(i===zs)return n.UNSIGNED_INT;if(i===ji)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===sp)return n.ALPHA;if(i===op)return n.RGB;if(i===Zn)return n.RGBA;if(i===rp)return n.LUMINANCE;if(i===ap)return n.LUMINANCE_ALPHA;if(i===_o)return n.DEPTH_COMPONENT;if(i===Po)return n.DEPTH_STENCIL;if(i===cp)return n.RED;if(i===wu)return n.RED_INTEGER;if(i===lp)return n.RG;if(i===Su)return n.RG_INTEGER;if(i===bu)return n.RGBA_INTEGER;if(i===ca||i===la||i===ua||i===ha)if(r===Ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gl||i===vl||i===_l||i===xl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===gl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_l)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yl||i===Ml||i===wl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===yl||i===Ml)return r===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===wl)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sl||i===bl||i===El||i===Tl||i===Al||i===Pl||i===Rl||i===Cl||i===Il||i===Ll||i===Dl||i===Ul||i===Nl||i===Fl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Sl)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bl)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===El)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pl)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rl)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cl)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Il)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dl)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ul)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nl)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===da||i===Ol||i===Bl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===da)return r===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ol)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===up||i===zl||i===Gl||i===Hl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===da)return o.COMPRESSED_RED_RGTC1_EXT;if(i===zl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ao?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class b1 extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yt extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E1={type:"move"};class zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,v=.005;l.inputState.pinching&&d>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const T1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A1=`
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

}`;class P1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new In,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new cn({vertexShader:T1,fragmentShader:A1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new w(new Xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R1 extends Io{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,v=null;const x=new P1,m=e.getContextAttributes();let f=null,T=null;const S=[],E=[],z=new Wt;let I=null;const R=new ze;R.layers.enable(1),R.viewport=new Ne;const B=new ze;B.layers.enable(2),B.viewport=new Ne;const Q=[R,B],y=new b1;y.layers.enable(1),y.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let dt=S[at];return dt===void 0&&(dt=new zc,S[at]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(at){let dt=S[at];return dt===void 0&&(dt=new zc,S[at]=dt),dt.getGripSpace()},this.getHand=function(at){let dt=S[at];return dt===void 0&&(dt=new zc,S[at]=dt),dt.getHandSpace()};function k(at){const dt=E.indexOf(at.inputSource);if(dt===-1)return;const Mt=S[dt];Mt!==void 0&&(Mt.update(at.inputSource,at.frame,l||r),Mt.dispatchEvent({type:at.type,data:at.inputSource}))}function et(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",rt);for(let at=0;at<S.length;at++){const dt=E[at];dt!==null&&(E[at]=null,S[at].disconnect(dt))}b=null,U=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,T=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){o=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(at){l=at},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",et),s.addEventListener("inputsourceschange",rt),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(z),s.renderState.layers===void 0){const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Gs(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let dt=null,Mt=null,F=null;m.depth&&(F=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?Po:_o,Mt=m.stencil?Ao:zs);const lt={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Gs(d.textureWidth,d.textureHeight,{format:Zn,type:Qi,depthTexture:new Ep(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function rt(at){for(let dt=0;dt<at.removed.length;dt++){const Mt=at.removed[dt],F=E.indexOf(Mt);F>=0&&(E[F]=null,S[F].disconnect(Mt))}for(let dt=0;dt<at.added.length;dt++){const Mt=at.added[dt];let F=E.indexOf(Mt);if(F===-1){for(let st=0;st<S.length;st++)if(st>=E.length){E.push(Mt),F=st;break}else if(E[st]===null){E[st]=Mt,F=st;break}if(F===-1)break}const lt=S[F];lt&&lt.connect(Mt)}}const j=new J,nt=new J;function $(at,dt,Mt){j.setFromMatrixPosition(dt.matrixWorld),nt.setFromMatrixPosition(Mt.matrixWorld);const F=j.distanceTo(nt),lt=dt.projectionMatrix.elements,st=Mt.projectionMatrix.elements,ft=lt[14]/(lt[10]-1),St=lt[14]/(lt[10]+1),it=(lt[9]+1)/lt[5],g=(lt[9]-1)/lt[5],A=(lt[8]-1)/lt[0],L=(st[8]+1)/st[0],O=ft*A,N=ft*L,q=F/(-A+L),Z=q*-A;if(dt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Z),at.translateZ(q),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),lt[10]===-1)at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const M=ft+q,_=St+q,C=O-Z,X=N+(F-Z),V=it*St/_*M,W=g*St/_*M;at.projectionMatrix.makePerspective(C,X,V,W,M,_),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function gt(at,dt){dt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(dt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let dt=at.near,Mt=at.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),y.near=B.near=R.near=dt,y.far=B.far=R.far=Mt,(b!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,U=y.far);const F=at.parent,lt=y.cameras;gt(y,F);for(let st=0;st<lt.length;st++)gt(lt[st],F);lt.length===2?$(y,R,B):y.projectionMatrix.copy(R.projectionMatrix),pt(at,y,F)};function pt(at,dt,Mt){Mt===null?at.matrix.copy(dt.matrixWorld):(at.matrix.copy(Mt.matrixWorld),at.matrix.invert(),at.matrix.multiply(dt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=fr*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(at){c=at,d!==null&&(d.fixedFoveation=at),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=at)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let wt=null;function Lt(at,dt){if(h=dt.getViewerPose(l||r),v=dt,h!==null){const Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let F=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,F=!0);for(let st=0;st<Mt.length;st++){const ft=Mt[st];let St=null;if(p!==null)St=p.getViewport(ft);else{const g=u.getViewSubImage(d,ft);St=g.viewport,st===0&&(t.setRenderTargetTextures(T,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(T))}let it=Q[st];it===void 0&&(it=new ze,it.layers.enable(st),it.viewport=new Ne,Q[st]=it),it.matrix.fromArray(ft.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ft.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(St.x,St.y,St.width,St.height),st===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),F===!0&&y.cameras.push(it)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const st=u.getDepthInformation(Mt[0]);st&&st.isValid&&st.texture&&x.init(t,st,s.renderState)}}for(let Mt=0;Mt<S.length;Mt++){const F=E[Mt],lt=S[Mt];F!==null&&lt!==void 0&&lt.update(F,dt,l||r)}wt&&wt(at,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),v=null}const zt=new Sp;zt.setAnimationLoop(Lt),this.setAnimationLoop=function(at){wt=at},this.dispose=function(){}}}const Rs=new Di,C1=new We;function I1(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Mp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,S,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),u(m,f)):f.isMeshPhongMaterial?(o(m,f),h(m,f)):f.isMeshStandardMaterial?(o(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(o(m,f),v(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),x(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Nn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Nn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),S=T.envMap,E=T.envMapRotation;S&&(m.envMap.value=S,Rs.copy(E),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),m.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Rs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function L1(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const E=S.program;i.uniformBlockBinding(T,E)}function l(T,S){let E=s[T.id];E===void 0&&(v(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",m));const z=S.program;i.updateUBOMapping(T,z);const I=t.render.frame;o[T.id]!==I&&(d(T),o[T.id]=I)}function h(T){const S=u();T.__bindingPointIndex=S;const E=n.createBuffer(),z=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,z,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function u(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=s[T.id],E=T.uniforms,z=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let I=0,R=E.length;I<R;I++){const B=Array.isArray(E[I])?E[I]:[E[I]];for(let Q=0,y=B.length;Q<y;Q++){const b=B[Q];if(p(b,I,Q,z)===!0){const U=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let et=0;for(let rt=0;rt<k.length;rt++){const j=k[rt],nt=x(j);typeof j=="number"||typeof j=="boolean"?(b.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,U+et,b.__data)):j.isMatrix3?(b.__data[0]=j.elements[0],b.__data[1]=j.elements[1],b.__data[2]=j.elements[2],b.__data[3]=0,b.__data[4]=j.elements[3],b.__data[5]=j.elements[4],b.__data[6]=j.elements[5],b.__data[7]=0,b.__data[8]=j.elements[6],b.__data[9]=j.elements[7],b.__data[10]=j.elements[8],b.__data[11]=0):(j.toArray(b.__data,et),et+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,S,E,z){const I=T.value,R=S+"_"+E;if(z[R]===void 0)return typeof I=="number"||typeof I=="boolean"?z[R]=I:z[R]=I.clone(),!0;{const B=z[R];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return z[R]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function v(T){const S=T.uniforms;let E=0;const z=16;for(let R=0,B=S.length;R<B;R++){const Q=Array.isArray(S[R])?S[R]:[S[R]];for(let y=0,b=Q.length;y<b;y++){const U=Q[y],k=Array.isArray(U.value)?U.value:[U.value];for(let et=0,rt=k.length;et<rt;et++){const j=k[et],nt=x(j),$=E%z,gt=$%nt.boundary,pt=$+gt;E+=gt,pt!==0&&z-pt<nt.storage&&(E+=z-pt),U.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=nt.storage}}}const I=E%z;return I>0&&(E+=z-I),T.__size=E,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const E=r.indexOf(S.__bindingPointIndex);r.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function f(){for(const T in s)n.deleteBuffer(s[T]);r=[],s={},o={}}return{bind:c,update:l,dispose:f}}class On{constructor(t={}){const{canvas:e=w_(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const f=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=gs,this.toneMappingExposure=1;const S=this;let E=!1,z=0,I=0,R=null,B=-1,Q=null;const y=new Ne,b=new Ne;let U=null;const k=new ge(0);let et=0,rt=e.width,j=e.height,nt=1,$=null,gt=null;const pt=new Ne(0,0,rt,j),wt=new Ne(0,0,rt,j);let Lt=!1;const zt=new Cu;let at=!1,dt=!1;const Mt=new We,F=new We,lt=new J,st=new Ne,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function it(){return R===null?nt:1}let g=i;function A(P,K){return e.getContext(P,K)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_u}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),g===null){const K="webgl2";if(g=A(K,P),g===null)throw A(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let L,O,N,q,Z,M,_,C,X,V,W,ut,ct,mt,Tt,ht,yt,At,Dt,Pt,qt,Ut,jt,G;function xt(){L=new BM(g),L.init(),Ut=new S1(g,L),O=new LM(g,L,t,Ut),N=new y1(g),O.reverseDepthBuffer&&N.buffers.depth.setReversed(!0),q=new HM(g),Z=new o1,M=new w1(g,L,N,Z,O,Ut,q),_=new UM(S),C=new OM(S),X=new j_(g),jt=new CM(g,X),V=new zM(g,X,q,jt),W=new VM(g,V,X,q),Dt=new kM(g,O,M),ht=new DM(Z),ut=new s1(S,_,C,L,O,jt,ht),ct=new I1(S,Z),mt=new a1,Tt=new f1(L),At=new RM(S,_,C,N,W,d,c),yt=new _1(S,W,O),G=new L1(g,q,O,N),Pt=new IM(g,L,q),qt=new GM(g,L,q),q.programs=ut.programs,S.capabilities=O,S.extensions=L,S.properties=Z,S.renderLists=mt,S.shadowMap=yt,S.state=N,S.info=q}xt();const ot=new R1(S,g);this.xr=ot,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const P=L.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=L.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(P){P!==void 0&&(nt=P,this.setSize(rt,j,!1))},this.getSize=function(P){return P.set(rt,j)},this.setSize=function(P,K,D=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=P,j=K,e.width=Math.floor(P*nt),e.height=Math.floor(K*nt),D===!0&&(e.style.width=P+"px",e.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(rt*nt,j*nt).floor()},this.setDrawingBufferSize=function(P,K,D){rt=P,j=K,nt=D,e.width=Math.floor(P*D),e.height=Math.floor(K*D),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(y)},this.getViewport=function(P){return P.copy(pt)},this.setViewport=function(P,K,D,Y){P.isVector4?pt.set(P.x,P.y,P.z,P.w):pt.set(P,K,D,Y),N.viewport(y.copy(pt).multiplyScalar(nt).round())},this.getScissor=function(P){return P.copy(wt)},this.setScissor=function(P,K,D,Y){P.isVector4?wt.set(P.x,P.y,P.z,P.w):wt.set(P,K,D,Y),N.scissor(b.copy(wt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(P){N.setScissorTest(Lt=P)},this.setOpaqueSort=function(P){$=P},this.setTransparentSort=function(P){gt=P},this.getClearColor=function(P){return P.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(P=!0,K=!0,D=!0){let Y=0;if(P){let H=!1;if(R!==null){const vt=R.texture.format;H=vt===bu||vt===Su||vt===wu}if(H){const vt=R.texture.type,Rt=vt===Qi||vt===zs||vt===dr||vt===Ao||vt===yu||vt===Mu,Ft=At.getClearColor(),Nt=At.getClearAlpha(),$t=Ft.r,Xt=Ft.g,kt=Ft.b;Rt?(p[0]=$t,p[1]=Xt,p[2]=kt,p[3]=Nt,g.clearBufferuiv(g.COLOR,0,p)):(v[0]=$t,v[1]=Xt,v[2]=kt,v[3]=Nt,g.clearBufferiv(g.COLOR,0,v))}else Y|=g.COLOR_BUFFER_BIT}K&&(Y|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),D&&(Y|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),mt.dispose(),Tt.dispose(),Z.dispose(),_.dispose(),C.dispose(),W.dispose(),jt.dispose(),G.dispose(),ut.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",ie),ot.removeEventListener("sessionend",ve),oe.stop()};function tt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=q.autoReset,K=yt.enabled,D=yt.autoUpdate,Y=yt.needsUpdate,H=yt.type;xt(),q.autoReset=P,yt.enabled=K,yt.autoUpdate=D,yt.needsUpdate=Y,yt.type=H}function Et(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Gt(P){const K=P.target;K.removeEventListener("dispose",Gt),Jt(K)}function Jt(P){ne(P),Z.remove(P)}function ne(P){const K=Z.get(P).programs;K!==void 0&&(K.forEach(function(D){ut.releaseProgram(D)}),P.isShaderMaterial&&ut.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,D,Y,H,vt){K===null&&(K=ft);const Rt=H.isMesh&&H.matrixWorld.determinant()<0,Ft=ue(P,K,D,Y,H);N.setMaterial(Y,Rt);let Nt=D.index,$t=1;if(Y.wireframe===!0){if(Nt=V.getWireframeAttribute(D),Nt===void 0)return;$t=2}const Xt=D.drawRange,kt=D.attributes.position;let Qt=Xt.start*$t,re=(Xt.start+Xt.count)*$t;vt!==null&&(Qt=Math.max(Qt,vt.start*$t),re=Math.min(re,(vt.start+vt.count)*$t)),Nt!==null?(Qt=Math.max(Qt,0),re=Math.min(re,Nt.count)):kt!=null&&(Qt=Math.max(Qt,0),re=Math.min(re,kt.count));const de=re-Qt;if(de<0||de===1/0)return;jt.setup(H,Y,Ft,D,Nt);let ye,le=Pt;if(Nt!==null&&(ye=X.get(Nt),le=qt,le.setIndex(ye)),H.isMesh)Y.wireframe===!0?(N.setLineWidth(Y.wireframeLinewidth*it()),le.setMode(g.LINES)):le.setMode(g.TRIANGLES);else if(H.isLine){let Zt=Y.linewidth;Zt===void 0&&(Zt=1),N.setLineWidth(Zt*it()),H.isLineSegments?le.setMode(g.LINES):H.isLineLoop?le.setMode(g.LINE_LOOP):le.setMode(g.LINE_STRIP)}else H.isPoints?le.setMode(g.POINTS):H.isSprite&&le.setMode(g.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)le.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))le.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Zt=H._multiDrawStarts,Pe=H._multiDrawCounts,Ct=H._multiDrawCount,Re=Nt?X.get(Nt).bytesPerElement:1,Ce=Z.get(Y).currentProgram.getUniforms();for(let we=0;we<Ct;we++)Ce.setValue(g,"_gl_DrawID",we),le.render(Zt[we]/Re,Pe[we])}else if(H.isInstancedMesh)le.renderInstances(Qt,de,H.count);else if(D.isInstancedBufferGeometry){const Zt=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,Pe=Math.min(D.instanceCount,Zt);le.renderInstances(Qt,de,Pe)}else le.render(Qt,de)};function se(P,K,D){P.transparent===!0&&P.side===Me&&P.forceSinglePass===!1?(P.side=Nn,P.needsUpdate=!0,Ze(P,K,D),P.side=_s,P.needsUpdate=!0,Ze(P,K,D),P.side=Me):Ze(P,K,D)}this.compile=function(P,K,D=null){D===null&&(D=P),m=Tt.get(D),m.init(K),T.push(m),D.traverseVisible(function(H){H.isLight&&H.layers.test(K.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),P!==D&&P.traverseVisible(function(H){H.isLight&&H.layers.test(K.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const Y=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const vt=H.material;if(vt)if(Array.isArray(vt))for(let Rt=0;Rt<vt.length;Rt++){const Ft=vt[Rt];se(Ft,D,H),Y.add(Ft)}else se(vt,D,H),Y.add(vt)}),T.pop(),m=null,Y},this.compileAsync=function(P,K,D=null){const Y=this.compile(P,K,D);return new Promise(H=>{function vt(){if(Y.forEach(function(Rt){Z.get(Rt).currentProgram.isReady()&&Y.delete(Rt)}),Y.size===0){H(P);return}setTimeout(vt,10)}L.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let te=null;function ae(P){te&&te(P)}function ie(){oe.stop()}function ve(){oe.start()}const oe=new Sp;oe.setAnimationLoop(ae),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(P){te=P,ot.setAnimationLoop(P),P===null?oe.stop():oe.start()},ot.addEventListener("sessionstart",ie),ot.addEventListener("sessionend",ve),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(K),K=ot.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,K,R),m=Tt.get(P,T.length),m.init(K),T.push(m),F.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),zt.setFromProjectionMatrix(F),dt=this.localClippingEnabled,at=ht.init(this.clippingPlanes,dt),x=mt.get(P,f.length),x.init(),f.push(x),ot.enabled===!0&&ot.isPresenting===!0){const vt=S.xr.getDepthSensingMesh();vt!==null&&Te(vt,K,-1/0,S.sortObjects)}Te(P,K,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort($,gt),St=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,St&&At.addToRenderList(x,P),this.info.render.frame++,at===!0&&ht.beginShadows();const D=m.state.shadowsArray;yt.render(D,P,K),at===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=x.opaque,H=x.transmissive;if(m.setupLights(),K.isArrayCamera){const vt=K.cameras;if(H.length>0)for(let Rt=0,Ft=vt.length;Rt<Ft;Rt++){const Nt=vt[Rt];Xe(Y,H,P,Nt)}St&&At.render(P);for(let Rt=0,Ft=vt.length;Rt<Ft;Rt++){const Nt=vt[Rt];_e(x,P,Nt,Nt.viewport)}}else H.length>0&&Xe(Y,H,P,K),St&&At.render(P),_e(x,P,K);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(S,P,K),jt.resetDefaultState(),B=-1,Q=null,T.pop(),T.length>0?(m=T[T.length-1],at===!0&&ht.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Te(P,K,D,Y){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)D=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||zt.intersectsSprite(P)){Y&&st.setFromMatrixPosition(P.matrixWorld).applyMatrix4(F);const Rt=W.update(P),Ft=P.material;Ft.visible&&x.push(P,Rt,Ft,D,st.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||zt.intersectsObject(P))){const Rt=W.update(P),Ft=P.material;if(Y&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),st.copy(P.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),st.copy(Rt.boundingSphere.center)),st.applyMatrix4(P.matrixWorld).applyMatrix4(F)),Array.isArray(Ft)){const Nt=Rt.groups;for(let $t=0,Xt=Nt.length;$t<Xt;$t++){const kt=Nt[$t],Qt=Ft[kt.materialIndex];Qt&&Qt.visible&&x.push(P,Rt,Qt,D,st.z,kt)}}else Ft.visible&&x.push(P,Rt,Ft,D,st.z,null)}}const vt=P.children;for(let Rt=0,Ft=vt.length;Rt<Ft;Rt++)Te(vt[Rt],K,D,Y)}function _e(P,K,D,Y){const H=P.opaque,vt=P.transmissive,Rt=P.transparent;m.setupLightsView(D),at===!0&&ht.setGlobalState(S.clippingPlanes,D),Y&&N.viewport(y.copy(Y)),H.length>0&&Se(H,K,D),vt.length>0&&Se(vt,K,D),Rt.length>0&&Se(Rt,K,D),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Xe(P,K,D,Y){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Gs(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?yr:Qi,minFilter:Yi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const vt=m.state.transmissionRenderTarget[Y.id],Rt=Y.viewport||y;vt.setSize(Rt.z,Rt.w);const Ft=S.getRenderTarget();S.setRenderTarget(vt),S.getClearColor(k),et=S.getClearAlpha(),et<1&&S.setClearColor(16777215,.5),S.clear(),St&&At.render(D);const Nt=S.toneMapping;S.toneMapping=gs;const $t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),at===!0&&ht.setGlobalState(S.clippingPlanes,Y),Se(P,D,Y),M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt),L.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let kt=0,Qt=K.length;kt<Qt;kt++){const re=K[kt],de=re.object,ye=re.geometry,le=re.material,Zt=re.group;if(le.side===Me&&de.layers.test(Y.layers)){const Pe=le.side;le.side=Nn,le.needsUpdate=!0,je(de,D,Y,ye,le,Zt),le.side=Pe,le.needsUpdate=!0,Xt=!0}}Xt===!0&&(M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt))}S.setRenderTarget(Ft),S.setClearColor(k,et),$t!==void 0&&(Y.viewport=$t),S.toneMapping=Nt}function Se(P,K,D){const Y=K.isScene===!0?K.overrideMaterial:null;for(let H=0,vt=P.length;H<vt;H++){const Rt=P[H],Ft=Rt.object,Nt=Rt.geometry,$t=Y===null?Rt.material:Y,Xt=Rt.group;Ft.layers.test(D.layers)&&je(Ft,K,D,Nt,$t,Xt)}}function je(P,K,D,Y,H,vt){P.onBeforeRender(S,K,D,Y,H,vt),P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(S,K,D,Y,P,vt),H.transparent===!0&&H.side===Me&&H.forceSinglePass===!1?(H.side=Nn,H.needsUpdate=!0,S.renderBufferDirect(D,K,Y,H,P,vt),H.side=_s,H.needsUpdate=!0,S.renderBufferDirect(D,K,Y,H,P,vt),H.side=Me):S.renderBufferDirect(D,K,Y,H,P,vt),P.onAfterRender(S,K,D,Y,H,vt)}function Ze(P,K,D){K.isScene!==!0&&(K=ft);const Y=Z.get(P),H=m.state.lights,vt=m.state.shadowsArray,Rt=H.state.version,Ft=ut.getParameters(P,H.state,vt,K,D),Nt=ut.getProgramCacheKey(Ft);let $t=Y.programs;Y.environment=P.isMeshStandardMaterial?K.environment:null,Y.fog=K.fog,Y.envMap=(P.isMeshStandardMaterial?C:_).get(P.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,$t===void 0&&(P.addEventListener("dispose",Gt),$t=new Map,Y.programs=$t);let Xt=$t.get(Nt);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===Rt)return It(P,Ft),Xt}else Ft.uniforms=ut.getUniforms(P),P.onBeforeCompile(Ft,S),Xt=ut.acquireProgram(Ft,Nt),$t.set(Nt,Xt),Y.uniforms=Ft.uniforms;const kt=Y.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(kt.clippingPlanes=ht.uniform),It(P,Ft),Y.needsLights=Ae(P),Y.lightsStateVersion=Rt,Y.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMap.value=H.state.directionalShadowMap,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotShadowMap.value=H.state.spotShadowMap,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMap.value=H.state.pointShadowMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function kn(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=pa.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function It(P,K){const D=Z.get(P);D.outputColorSpace=K.outputColorSpace,D.batching=K.batching,D.batchingColor=K.batchingColor,D.instancing=K.instancing,D.instancingColor=K.instancingColor,D.instancingMorph=K.instancingMorph,D.skinning=K.skinning,D.morphTargets=K.morphTargets,D.morphNormals=K.morphNormals,D.morphColors=K.morphColors,D.morphTargetsCount=K.morphTargetsCount,D.numClippingPlanes=K.numClippingPlanes,D.numIntersection=K.numClipIntersection,D.vertexAlphas=K.vertexAlphas,D.vertexTangents=K.vertexTangents,D.toneMapping=K.toneMapping}function ue(P,K,D,Y,H){K.isScene!==!0&&(K=ft),M.resetTextureUnits();const vt=K.fog,Rt=Y.isMeshStandardMaterial?K.environment:null,Ft=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ms,Nt=(Y.isMeshStandardMaterial?C:_).get(Y.envMap||Rt),$t=Y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Xt=!!D.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!D.morphAttributes.position,Qt=!!D.morphAttributes.normal,re=!!D.morphAttributes.color;let de=gs;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(de=S.toneMapping);const ye=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,le=ye!==void 0?ye.length:0,Zt=Z.get(Y),Pe=m.state.lights;if(at===!0&&(dt===!0||P!==Q)){const ke=P===Q&&Y.id===B;ht.setState(Y,P,ke)}let Ct=!1;Y.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Pe.state.version||Zt.outputColorSpace!==Ft||H.isBatchedMesh&&Zt.batching===!1||!H.isBatchedMesh&&Zt.batching===!0||H.isBatchedMesh&&Zt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Zt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Zt.instancing===!1||!H.isInstancedMesh&&Zt.instancing===!0||H.isSkinnedMesh&&Zt.skinning===!1||!H.isSkinnedMesh&&Zt.skinning===!0||H.isInstancedMesh&&Zt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Zt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Zt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Zt.instancingMorph===!1&&H.morphTexture!==null||Zt.envMap!==Nt||Y.fog===!0&&Zt.fog!==vt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==ht.numPlanes||Zt.numIntersection!==ht.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==Xt||Zt.morphTargets!==kt||Zt.morphNormals!==Qt||Zt.morphColors!==re||Zt.toneMapping!==de||Zt.morphTargetsCount!==le)&&(Ct=!0):(Ct=!0,Zt.__version=Y.version);let Re=Zt.currentProgram;Ct===!0&&(Re=Ze(Y,K,H));let Ce=!1,we=!1,tn=!1;const Ee=Re.getUniforms(),$e=Zt.uniforms;if(N.useProgram(Re.program)&&(Ce=!0,we=!0,tn=!0),Y.id!==B&&(B=Y.id,we=!0),Ce||Q!==P){O.reverseDepthBuffer?(Mt.copy(P.projectionMatrix),b_(Mt),E_(Mt),Ee.setValue(g,"projectionMatrix",Mt)):Ee.setValue(g,"projectionMatrix",P.projectionMatrix),Ee.setValue(g,"viewMatrix",P.matrixWorldInverse);const ke=Ee.map.cameraPosition;ke!==void 0&&ke.setValue(g,lt.setFromMatrixPosition(P.matrixWorld)),O.logarithmicDepthBuffer&&Ee.setValue(g,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(g,"isOrthographic",P.isOrthographicCamera===!0),Q!==P&&(Q=P,we=!0,tn=!0)}if(H.isSkinnedMesh){Ee.setOptional(g,H,"bindMatrix"),Ee.setOptional(g,H,"bindMatrixInverse");const ke=H.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Ee.setValue(g,"boneTexture",ke.boneTexture,M))}H.isBatchedMesh&&(Ee.setOptional(g,H,"batchingTexture"),Ee.setValue(g,"batchingTexture",H._matricesTexture,M),Ee.setOptional(g,H,"batchingIdTexture"),Ee.setValue(g,"batchingIdTexture",H._indirectTexture,M),Ee.setOptional(g,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(g,"batchingColorTexture",H._colorsTexture,M));const wn=D.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Dt.update(H,D,Re),(we||Zt.receiveShadow!==H.receiveShadow)&&(Zt.receiveShadow=H.receiveShadow,Ee.setValue(g,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&($e.envMap.value=Nt,$e.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&K.environment!==null&&($e.envMapIntensity.value=K.environmentIntensity),we&&(Ee.setValue(g,"toneMappingExposure",S.toneMappingExposure),Zt.needsLights&&xe($e,tn),vt&&Y.fog===!0&&ct.refreshFogUniforms($e,vt),ct.refreshMaterialUniforms($e,Y,nt,j,m.state.transmissionRenderTarget[P.id]),pa.upload(g,kn(Zt),$e,M)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(pa.upload(g,kn(Zt),$e,M),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(g,"center",H.center),Ee.setValue(g,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(g,"normalMatrix",H.normalMatrix),Ee.setValue(g,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ke=Y.uniformsGroups;for(let un=0,Vn=ke.length;un<Vn;un++){const fn=ke[un];G.update(fn,Re),G.bind(fn,Re)}}return Re}function xe(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function Ae(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,K,D){Z.get(P.texture).__webglTexture=K,Z.get(P.depthTexture).__webglTexture=D;const Y=Z.get(P);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=D===void 0,Y.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,K){const D=Z.get(P);D.__webglFramebuffer=K,D.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,D=0){R=P,z=K,I=D;let Y=!0,H=null,vt=!1,Rt=!1;if(P){const Nt=Z.get(P);if(Nt.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(g.FRAMEBUFFER,null),Y=!1;else if(Nt.__webglFramebuffer===void 0)M.setupRenderTarget(P);else if(Nt.__hasExternalTextures)M.rebindTextures(P,Z.get(P.texture).__webglTexture,Z.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const kt=P.depthTexture;if(Nt.__boundDepthTexture!==kt){if(kt!==null&&Z.has(kt)&&(P.width!==kt.image.width||P.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(P)}}const $t=P.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Rt=!0);const Xt=Z.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Xt[K])?H=Xt[K][D]:H=Xt[K],vt=!0):P.samples>0&&M.useMultisampledRTT(P)===!1?H=Z.get(P).__webglMultisampledFramebuffer:Array.isArray(Xt)?H=Xt[D]:H=Xt,y.copy(P.viewport),b.copy(P.scissor),U=P.scissorTest}else y.copy(pt).multiplyScalar(nt).floor(),b.copy(wt).multiplyScalar(nt).floor(),U=Lt;if(N.bindFramebuffer(g.FRAMEBUFFER,H)&&Y&&N.drawBuffers(P,H),N.viewport(y),N.scissor(b),N.setScissorTest(U),vt){const Nt=Z.get(P.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+K,Nt.__webglTexture,D)}else if(Rt){const Nt=Z.get(P.texture),$t=K||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Nt.__webglTexture,D||0,$t)}B=-1},this.readRenderTargetPixels=function(P,K,D,Y,H,vt,Rt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ft=Ft[Rt]),Ft){N.bindFramebuffer(g.FRAMEBUFFER,Ft);try{const Nt=P.texture,$t=Nt.format,Xt=Nt.type;if(!O.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-Y&&D>=0&&D<=P.height-H&&g.readPixels(K,D,Y,H,Ut.convert($t),Ut.convert(Xt),vt)}finally{const Nt=R!==null?Z.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(P,K,D,Y,H,vt,Rt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ft=Ft[Rt]),Ft){const Nt=P.texture,$t=Nt.format,Xt=Nt.type;if(!O.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=P.width-Y&&D>=0&&D<=P.height-H){N.bindFramebuffer(g.FRAMEBUFFER,Ft);const kt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,kt),g.bufferData(g.PIXEL_PACK_BUFFER,vt.byteLength,g.STREAM_READ),g.readPixels(K,D,Y,H,Ut.convert($t),Ut.convert(Xt),0);const Qt=R!==null?Z.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Qt);const re=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await S_(g,re,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,kt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,vt),g.deleteBuffer(kt),g.deleteSync(re),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,K=null,D=0){P.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1]);const Y=Math.pow(2,-D),H=Math.floor(P.image.width*Y),vt=Math.floor(P.image.height*Y),Rt=K!==null?K.x:0,Ft=K!==null?K.y:0;M.setTexture2D(P,0),g.copyTexSubImage2D(g.TEXTURE_2D,D,0,0,Rt,Ft,H,vt),N.unbindTexture()},this.copyTextureToTexture=function(P,K,D=null,Y=null,H=0){P.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1],K=arguments[2],H=arguments[3]||0,D=null);let vt,Rt,Ft,Nt,$t,Xt;D!==null?(vt=D.max.x-D.min.x,Rt=D.max.y-D.min.y,Ft=D.min.x,Nt=D.min.y):(vt=P.image.width,Rt=P.image.height,Ft=0,Nt=0),Y!==null?($t=Y.x,Xt=Y.y):($t=0,Xt=0);const kt=Ut.convert(K.format),Qt=Ut.convert(K.type);M.setTexture2D(K,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,K.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,K.unpackAlignment);const re=g.getParameter(g.UNPACK_ROW_LENGTH),de=g.getParameter(g.UNPACK_IMAGE_HEIGHT),ye=g.getParameter(g.UNPACK_SKIP_PIXELS),le=g.getParameter(g.UNPACK_SKIP_ROWS),Zt=g.getParameter(g.UNPACK_SKIP_IMAGES),Pe=P.isCompressedTexture?P.mipmaps[H]:P.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Pe.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Pe.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ft),g.pixelStorei(g.UNPACK_SKIP_ROWS,Nt),P.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,H,$t,Xt,vt,Rt,kt,Qt,Pe.data):P.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,H,$t,Xt,Pe.width,Pe.height,kt,Pe.data):g.texSubImage2D(g.TEXTURE_2D,H,$t,Xt,vt,Rt,kt,Qt,Pe),g.pixelStorei(g.UNPACK_ROW_LENGTH,re),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,de),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ye),g.pixelStorei(g.UNPACK_SKIP_ROWS,le),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Zt),H===0&&K.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(P,K,D=null,Y=null,H=0){P.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,Y=arguments[1]||null,P=arguments[2],K=arguments[3],H=arguments[4]||0);let vt,Rt,Ft,Nt,$t,Xt,kt,Qt,re;const de=P.isCompressedTexture?P.mipmaps[H]:P.image;D!==null?(vt=D.max.x-D.min.x,Rt=D.max.y-D.min.y,Ft=D.max.z-D.min.z,Nt=D.min.x,$t=D.min.y,Xt=D.min.z):(vt=de.width,Rt=de.height,Ft=de.depth,Nt=0,$t=0,Xt=0),Y!==null?(kt=Y.x,Qt=Y.y,re=Y.z):(kt=0,Qt=0,re=0);const ye=Ut.convert(K.format),le=Ut.convert(K.type);let Zt;if(K.isData3DTexture)M.setTexture3D(K,0),Zt=g.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)M.setTexture2DArray(K,0),Zt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,K.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,K.unpackAlignment);const Pe=g.getParameter(g.UNPACK_ROW_LENGTH),Ct=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Re=g.getParameter(g.UNPACK_SKIP_PIXELS),Ce=g.getParameter(g.UNPACK_SKIP_ROWS),we=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,de.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,de.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Nt),g.pixelStorei(g.UNPACK_SKIP_ROWS,$t),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Xt),P.isDataTexture||P.isData3DTexture?g.texSubImage3D(Zt,H,kt,Qt,re,vt,Rt,Ft,ye,le,de.data):K.isCompressedArrayTexture?g.compressedTexSubImage3D(Zt,H,kt,Qt,re,vt,Rt,Ft,ye,de.data):g.texSubImage3D(Zt,H,kt,Qt,re,vt,Rt,Ft,ye,le,de),g.pixelStorei(g.UNPACK_ROW_LENGTH,Pe),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ct),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Re),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ce),g.pixelStorei(g.UNPACK_SKIP_IMAGES,we),H===0&&K.generateMipmaps&&g.generateMipmap(Zt),N.unbindTexture()},this.initRenderTarget=function(P){Z.get(P).__webglFramebuffer===void 0&&M.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?M.setTextureCube(P,0):P.isData3DTexture?M.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?M.setTexture2DArray(P,0):M.setTexture2D(P,0),N.unbindTexture()},this.resetState=function(){z=0,I=0,R=null,N.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Eu?"display-p3":"srgb",e.unpackColorSpace=Le.workingColorSpace===Va?"display-p3":"srgb"}}class Bn extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Aa extends Lo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ad=new We,Vl=new gp,Zr=new Wa,Jr=new J;class ma extends hn{constructor(t=new Mn,e=new Aa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=o,t.ray.intersectsSphere(Zr)===!1)return;Ad.copy(s).invert(),Vl.copy(t.ray).applyMatrix4(Ad);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let v=d,x=p;v<x;v++){const m=l.getX(v);Jr.fromBufferAttribute(u,m),Pd(Jr,m,c,s,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let v=d,x=p;v<x;v++)Jr.fromBufferAttribute(u,v),Pd(Jr,v,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Pd(n,t,e,i,s,o,r){const a=Vl.distanceSqToPoint(n);if(a<e){const c=new J;Vl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const h=i[s],d=i[s+1]-h,p=(r-h)/d;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new Wt:new J);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new J,s=[],o=[],r=[],a=new J,c=new We;for(let p=0;p<=t;p++){const v=p/t;s[p]=this.getTangentAt(v,new J)}o[0]=new J,r[0]=new J;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(an(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,v))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(an(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let v=1;v<=t;v++)o[v].applyMatrix4(c.makeRotationAxis(s[v],p*v)),r[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lu extends Ui{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Wt){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class D1 extends Lu{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Du(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,p*=h,s(r,a,d,p)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Qr=new J,Gc=new Du,Hc=new Du,kc=new Du;class U1 extends Ui{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new J){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Qr.subVectors(s[0],s[1]).add(s[0]),l=Qr);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Qr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Gc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,v,x,m),Hc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,v,x,m),kc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,v,x,m)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Hc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),kc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Gc.calc(c),Hc.calc(c),kc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rd(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function N1(n,t){const e=1-n;return e*e*t}function F1(n,t){return 2*(1-n)*n*t}function O1(n,t){return n*n*t}function ir(n,t,e,i){return N1(n,t)+F1(n,e)+O1(n,i)}function B1(n,t){const e=1-n;return e*e*e*t}function z1(n,t){const e=1-n;return 3*e*e*n*t}function G1(n,t){return 3*(1-n)*n*n*t}function H1(n,t){return n*n*n*t}function sr(n,t,e,i,s){return B1(n,t)+z1(n,e)+G1(n,i)+H1(n,s)}class Cp extends Ui{constructor(t=new Wt,e=new Wt,i=new Wt,s=new Wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Wt){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(sr(t,s.x,o.x,r.x,a.x),sr(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class k1 extends Ui{constructor(t=new J,e=new J,i=new J,s=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new J){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(sr(t,s.x,o.x,r.x,a.x),sr(t,s.y,o.y,r.y,a.y),sr(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ip extends Ui{constructor(t=new Wt,e=new Wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Wt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class V1 extends Ui{constructor(t=new J,e=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new J){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lp extends Ui{constructor(t=new Wt,e=new Wt,i=new Wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Wt){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(ir(t,s.x,o.x,r.x),ir(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class W1 extends Ui{constructor(t=new J,e=new J,i=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new J){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(ir(t,s.x,o.x,r.x),ir(t,s.y,o.y,r.y),ir(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dp extends Ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Wt){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(Rd(a,c.x,l.x,h.x,u.x),Rd(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Wt().fromArray(s))}return this}}var Wl=Object.freeze({__proto__:null,ArcCurve:D1,CatmullRomCurve3:U1,CubicBezierCurve:Cp,CubicBezierCurve3:k1,EllipseCurve:Lu,LineCurve:Ip,LineCurve3:V1,QuadraticBezierCurve:Lp,QuadraticBezierCurve3:W1,SplineCurve:Dp});class X1 extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Wl[s.type]().fromJSON(s))}return this}}class Xl extends X1{constructor(t){super(),this.type="Path",this.currentPoint=new Wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ip(this.currentPoint.clone(),new Wt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Lp(this.currentPoint.clone(),new Wt(t,e),new Wt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Cp(this.currentPoint.clone(),new Wt(t,e),new Wt(i,s),new Wt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Dp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new Lu(t,e,i,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class be extends Mn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new J,h=new Wt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends Mn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],p=[];let v=0;const x=[],m=i/2;let f=0;T(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2));function T(){const E=new J,z=new J;let I=0;const R=(e-t)/i;for(let B=0;B<=o;B++){const Q=[],y=B/o,b=y*(e-t)+t;for(let U=0;U<=s;U++){const k=U/s,et=k*c+a,rt=Math.sin(et),j=Math.cos(et);z.x=b*rt,z.y=-y*i+m,z.z=b*j,u.push(z.x,z.y,z.z),E.set(rt,R,j).normalize(),d.push(E.x,E.y,E.z),p.push(k,1-y),Q.push(v++)}x.push(Q)}for(let B=0;B<s;B++)for(let Q=0;Q<o;Q++){const y=x[Q][B],b=x[Q+1][B],U=x[Q+1][B+1],k=x[Q][B+1];t>0&&(h.push(y,b,k),I+=3),e>0&&(h.push(b,U,k),I+=3)}l.addGroup(f,I,0),f+=I}function S(E){const z=v,I=new Wt,R=new J;let B=0;const Q=E===!0?t:e,y=E===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),v++;const b=v;for(let U=0;U<=s;U++){const et=U/s*c+a,rt=Math.cos(et),j=Math.sin(et);R.x=Q*j,R.y=m*y,R.z=Q*rt,u.push(R.x,R.y,R.z),d.push(0,y,0),I.x=rt*.5+.5,I.y=j*.5*y+.5,p.push(I.x,I.y),v++}for(let U=0;U<s;U++){const k=z+U,et=b+U;E===!0?h.push(et,et+1,k):h.push(et+1,et,k),B+=3}l.addGroup(f,B,E===!0?1:2),f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ri extends ee{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ri(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fn extends Xl{constructor(t){super(t),this.uuid=Vs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Xl().fromJSON(s))}return this}}const q1={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=Up(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,p;if(i&&(o=Z1(n,t,o,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let v=e;v<s;v+=e)u=n[v],d=n[v+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return mr(o,r,e,a,c,p,0),r}};function Up(n,t,e,i,s){let o,r;if(s===cS(n,t,e,i)>0)for(o=t;o<e;o+=i)r=Cd(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=Cd(o,n[o],n[o+1],r);return r&&Ya(r,r.next)&&(vr(r),r=r.next),r}function Hs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ya(e,e.next)||Ke(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function mr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&nS(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?j1(n,i,s,o):Y1(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),vr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=$1(Hs(n),t,e),mr(n,t,e,i,s,o,2)):r===2&&K1(n,t,e,i,s,o):mr(Hs(n),t,e,i,s,o,1);break}}}function Y1(n){const t=n.prev,e=n,i=n.next;if(Ke(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let v=i.next;for(;v!==t;){if(v.x>=h&&v.x<=d&&v.y>=u&&v.y<=p&&uo(s,a,o,c,r,l,v.x,v.y)&&Ke(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function j1(n,t,e,i){const s=n.prev,o=n,r=n.next;if(Ke(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,p=a<c?a<l?a:l:c<l?c:l,v=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=ql(p,v,t,e,i),T=ql(x,m,t,e,i);let S=n.prevZ,E=n.nextZ;for(;S&&S.z>=f&&E&&E.z<=T;){if(S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==r&&uo(a,h,c,u,l,d,S.x,S.y)&&Ke(S.prev,S,S.next)>=0||(S=S.prevZ,E.x>=p&&E.x<=x&&E.y>=v&&E.y<=m&&E!==s&&E!==r&&uo(a,h,c,u,l,d,E.x,E.y)&&Ke(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;S&&S.z>=f;){if(S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==r&&uo(a,h,c,u,l,d,S.x,S.y)&&Ke(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;E&&E.z<=T;){if(E.x>=p&&E.x<=x&&E.y>=v&&E.y<=m&&E!==s&&E!==r&&uo(a,h,c,u,l,d,E.x,E.y)&&Ke(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function $1(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Ya(s,o)&&Np(s,i,i.next,o)&&gr(s,o)&&gr(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),vr(i),vr(i.next),i=n=o),i=i.next}while(i!==n);return Hs(i)}function K1(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&oS(r,a)){let c=Fp(r,a);r=Hs(r,r.next),c=Hs(c,c.next),mr(r,t,e,i,s,o,0),mr(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function Z1(n,t,e,i){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=Up(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(sS(l));for(s.sort(J1),o=0;o<s.length;o++)e=Q1(s[o],e);return e}function J1(n,t){return n.x-t.x}function Q1(n,t){const e=tS(n,t);if(!e)return t;const i=Fp(e,n);return Hs(i,i.next),Hs(e,e.next)}function tS(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&uo(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),gr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&eS(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function eS(n,t){return Ke(n.prev,n,t.prev)<0&&Ke(t.next,n,n.next)<0}function nS(n,t,e,i){let s=n;do s.z===0&&(s.z=ql(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,iS(s)}function iS(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function ql(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function sS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function uo(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function oS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!rS(n,t)&&(gr(n,t)&&gr(t,n)&&aS(n,t)&&(Ke(n.prev,n,t.prev)||Ke(n,t.prev,t))||Ya(n,t)&&Ke(n.prev,n,n.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ya(n,t){return n.x===t.x&&n.y===t.y}function Np(n,t,e,i){const s=ea(Ke(n,t,e)),o=ea(Ke(n,t,i)),r=ea(Ke(e,i,n)),a=ea(Ke(e,i,t));return!!(s!==o&&r!==a||s===0&&ta(n,e,t)||o===0&&ta(n,i,t)||r===0&&ta(e,n,i)||a===0&&ta(e,t,i))}function ta(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ea(n){return n>0?1:n<0?-1:0}function rS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Np(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function gr(n,t){return Ke(n.prev,n,n.next)<0?Ke(n,t,n.next)>=0&&Ke(n,n.prev,t)>=0:Ke(n,t,n.prev)<0||Ke(n,n.next,t)<0}function aS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Fp(n,t){const e=new Yl(n.i,n.x,n.y),i=new Yl(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Cd(n,t,e,i){const s=new Yl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cS(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class yo{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return yo.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];Id(t),Ld(i,t);let r=t.length;e.forEach(Id);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Ld(i,e[c]);const a=q1.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Id(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ld(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Jn extends Mn{constructor(t=new Fn([new Wt(.5,.5),new Wt(-.5,.5),new Wt(-.5,-.5),new Wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:lS;let S,E=!1,z,I,R,B;f&&(S=f.getSpacedPoints(h),E=!0,d=!1,z=f.computeFrenetFrames(h,!1),I=new J,R=new J,B=new J),d||(m=0,p=0,v=0,x=0);const Q=a.extractPoints(l);let y=Q.shape;const b=Q.holes;if(!yo.isClockWise(y)){y=y.reverse();for(let it=0,g=b.length;it<g;it++){const A=b[it];yo.isClockWise(A)&&(b[it]=A.reverse())}}const k=yo.triangulateShape(y,b),et=y;for(let it=0,g=b.length;it<g;it++){const A=b[it];y=y.concat(A)}function rt(it,g,A){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(g,A)}const j=y.length,nt=k.length;function $(it,g,A){let L,O,N;const q=it.x-g.x,Z=it.y-g.y,M=A.x-it.x,_=A.y-it.y,C=q*q+Z*Z,X=q*_-Z*M;if(Math.abs(X)>Number.EPSILON){const V=Math.sqrt(C),W=Math.sqrt(M*M+_*_),ut=g.x-Z/V,ct=g.y+q/V,mt=A.x-_/W,Tt=A.y+M/W,ht=((mt-ut)*_-(Tt-ct)*M)/(q*_-Z*M);L=ut+q*ht-it.x,O=ct+Z*ht-it.y;const yt=L*L+O*O;if(yt<=2)return new Wt(L,O);N=Math.sqrt(yt/2)}else{let V=!1;q>Number.EPSILON?M>Number.EPSILON&&(V=!0):q<-Number.EPSILON?M<-Number.EPSILON&&(V=!0):Math.sign(Z)===Math.sign(_)&&(V=!0),V?(L=-Z,O=q,N=Math.sqrt(C)):(L=q,O=Z,N=Math.sqrt(C/2))}return new Wt(L/N,O/N)}const gt=[];for(let it=0,g=et.length,A=g-1,L=it+1;it<g;it++,A++,L++)A===g&&(A=0),L===g&&(L=0),gt[it]=$(et[it],et[A],et[L]);const pt=[];let wt,Lt=gt.concat();for(let it=0,g=b.length;it<g;it++){const A=b[it];wt=[];for(let L=0,O=A.length,N=O-1,q=L+1;L<O;L++,N++,q++)N===O&&(N=0),q===O&&(q=0),wt[L]=$(A[L],A[N],A[q]);pt.push(wt),Lt=Lt.concat(wt)}for(let it=0;it<m;it++){const g=it/m,A=p*Math.cos(g*Math.PI/2),L=v*Math.sin(g*Math.PI/2)+x;for(let O=0,N=et.length;O<N;O++){const q=rt(et[O],gt[O],L);F(q.x,q.y,-A)}for(let O=0,N=b.length;O<N;O++){const q=b[O];wt=pt[O];for(let Z=0,M=q.length;Z<M;Z++){const _=rt(q[Z],wt[Z],L);F(_.x,_.y,-A)}}}const zt=v+x;for(let it=0;it<j;it++){const g=d?rt(y[it],Lt[it],zt):y[it];E?(R.copy(z.normals[0]).multiplyScalar(g.x),I.copy(z.binormals[0]).multiplyScalar(g.y),B.copy(S[0]).add(R).add(I),F(B.x,B.y,B.z)):F(g.x,g.y,0)}for(let it=1;it<=h;it++)for(let g=0;g<j;g++){const A=d?rt(y[g],Lt[g],zt):y[g];E?(R.copy(z.normals[it]).multiplyScalar(A.x),I.copy(z.binormals[it]).multiplyScalar(A.y),B.copy(S[it]).add(R).add(I),F(B.x,B.y,B.z)):F(A.x,A.y,u/h*it)}for(let it=m-1;it>=0;it--){const g=it/m,A=p*Math.cos(g*Math.PI/2),L=v*Math.sin(g*Math.PI/2)+x;for(let O=0,N=et.length;O<N;O++){const q=rt(et[O],gt[O],L);F(q.x,q.y,u+A)}for(let O=0,N=b.length;O<N;O++){const q=b[O];wt=pt[O];for(let Z=0,M=q.length;Z<M;Z++){const _=rt(q[Z],wt[Z],L);E?F(_.x,_.y+S[h-1].y,S[h-1].x+A):F(_.x,_.y,u+A)}}}at(),dt();function at(){const it=s.length/3;if(d){let g=0,A=j*g;for(let L=0;L<nt;L++){const O=k[L];lt(O[2]+A,O[1]+A,O[0]+A)}g=h+m*2,A=j*g;for(let L=0;L<nt;L++){const O=k[L];lt(O[0]+A,O[1]+A,O[2]+A)}}else{for(let g=0;g<nt;g++){const A=k[g];lt(A[2],A[1],A[0])}for(let g=0;g<nt;g++){const A=k[g];lt(A[0]+j*h,A[1]+j*h,A[2]+j*h)}}i.addGroup(it,s.length/3-it,0)}function dt(){const it=s.length/3;let g=0;Mt(et,g),g+=et.length;for(let A=0,L=b.length;A<L;A++){const O=b[A];Mt(O,g),g+=O.length}i.addGroup(it,s.length/3-it,1)}function Mt(it,g){let A=it.length;for(;--A>=0;){const L=A;let O=A-1;O<0&&(O=it.length-1);for(let N=0,q=h+m*2;N<q;N++){const Z=j*N,M=j*(N+1),_=g+L+Z,C=g+O+Z,X=g+O+M,V=g+L+M;st(_,C,X,V)}}}function F(it,g,A){c.push(it),c.push(g),c.push(A)}function lt(it,g,A){ft(it),ft(g),ft(A);const L=s.length/3,O=T.generateTopUV(i,s,L-3,L-2,L-1);St(O[0]),St(O[1]),St(O[2])}function st(it,g,A,L){ft(it),ft(g),ft(L),ft(g),ft(A),ft(L);const O=s.length/3,N=T.generateSideWallUV(i,s,O-6,O-3,O-2,O-1);St(N[0]),St(N[1]),St(N[3]),St(N[1]),St(N[2]),St(N[3])}function ft(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function St(it){o.push(it.x),o.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return uS(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wl[s.type]().fromJSON(s)),new Jn(i,t.options)}}const lS={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new Wt(o,r),new Wt(a,c),new Wt(l,h)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],p=t[s*3+1],v=t[s*3+2],x=t[o*3],m=t[o*3+1],f=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new Wt(r,1-c),new Wt(l,1-u),new Wt(d,1-v),new Wt(x,1-f)]:[new Wt(a,1-c),new Wt(h,1-u),new Wt(p,1-v),new Wt(m,1-f)]}};function uS(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _t extends Mn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new J,d=new J,p=[],v=[],x=[],m=[];for(let f=0;f<=i;f++){const T=[],S=f/i;let E=0;f===0&&r===0?E=.5/e:f===i&&c===Math.PI&&(E=-.5/e);for(let z=0;z<=e;z++){const I=z/e;u.x=-t*Math.cos(s+I*o)*Math.sin(r+S*a),u.y=t*Math.cos(r+S*a),u.z=t*Math.sin(s+I*o)*Math.sin(r+S*a),v.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(I+E,1-S),T.push(l++)}h.push(T)}for(let f=0;f<i;f++)for(let T=0;T<e;T++){const S=h[f][T+1],E=h[f][T],z=h[f+1][T],I=h[f+1][T+1];(f!==0||r>0)&&p.push(S,E,I),(f!==i-1||c<Math.PI)&&p.push(E,z,I)}this.setIndex(p),this.setAttribute("position",new Ye(v,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _t(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ji extends Mn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new J,u=new J,d=new J;for(let p=0;p<=i;p++)for(let v=0;v<=s;v++){const x=v/s*o,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(v/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=s;v++){const x=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,f=(s+1)*(p-1)+v,T=(s+1)*p+v;r.push(x,m,T),r.push(m,f,T)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ht extends Lo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hp,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bt extends Ht{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Pa={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class hS{constructor(t,e,i){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],v=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const dS=new hS;class Uo{constructor(t){this.manager=t!==void 0?t:dS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class fS extends Error{constructor(t,e){super(t),this.response=e}}class pS extends Uo{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Pa.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Vi[t]!==void 0){Vi[t].push({onLoad:e,onProgress:i,onError:s});return}Vi[t]=[],Vi[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Vi[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,v=p!==0;let x=0;const m=new ReadableStream({start(f){T();function T(){u.read().then(({done:S,value:E})=>{if(S)f.close();else{x+=E.byteLength;const z=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:p});for(let I=0,R=h.length;I<R;I++){const B=h[I];B.onProgress&&B.onProgress(z)}f.enqueue(E),T()}},S=>{f.error(S)})}}});return new Response(m)}else throw new fS(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(v=>p.decode(v))}}}).then(l=>{Pa.add(t,l);const h=Vi[t];delete Vi[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Vi[t];if(h===void 0)throw this.manager.itemError(t),l;delete Vi[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Op extends Uo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Pa.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=pr("img");function c(){h(),Pa.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class ja extends Uo{constructor(t){super(t)}load(t,e,i,s){const o=new Pu;o.colorSpace=ui;const r=new Op(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function c(l){r.load(t[l],function(h){o.images[l]=h,a++,a===6&&(o.needsUpdate=!0,e&&e(o))},void 0,s)}for(let l=0;l<t.length;++l)c(l);return o}}class Qn extends Uo{constructor(t){super(t)}load(t,e,i,s){const o=new In,r=new Op(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}}class Uu extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Vc=new We,Dd=new J,Ud=new J;class Bp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cu,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Dd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dd),Ud.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ud),e.updateMatrixWorld(),Vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nd=new We,Wo=new J,Wc=new J;class mS extends Bp{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Wt(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Wo.setFromMatrixPosition(t.matrixWorld),i.position.copy(Wo),Wc.copy(i.position),Wc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Wc),i.updateMatrixWorld(),s.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd)}}class vi extends Uu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new mS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gS extends Bp{constructor(){super(new bp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _i extends Uu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new gS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xi extends Uu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class zp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fd(){return performance.now()}class vS{constructor(){this.type="ShapePath",this.color=new ge,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Xl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,o,r){return this.currentPath.bezierCurveTo(t,e,i,s,o,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(f){const T=[];for(let S=0,E=f.length;S<E;S++){const z=f[S],I=new Fn;I.curves=z.curves,T.push(I)}return T}function i(f,T){const S=T.length;let E=!1;for(let z=S-1,I=0;I<S;z=I++){let R=T[z],B=T[I],Q=B.x-R.x,y=B.y-R.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(R=T[I],Q=-Q,B=T[z],y=-y),f.y<R.y||f.y>B.y)continue;if(f.y===R.y){if(f.x===R.x)return!0}else{const b=y*(f.x-R.x)-Q*(f.y-R.y);if(b===0)return!0;if(b<0)continue;E=!E}}else{if(f.y!==R.y)continue;if(B.x<=f.x&&f.x<=R.x||R.x<=f.x&&f.x<=B.x)return!0}}return E}const s=yo.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,c;const l=[];if(o.length===1)return a=o[0],c=new Fn,c.curves=a.curves,l.push(c),l;let h=!s(o[0].getPoints());h=t?!h:h;const u=[],d=[];let p=[],v=0,x;d[v]=void 0,p[v]=[];for(let f=0,T=o.length;f<T;f++)a=o[f],x=a.getPoints(),r=s(x),r=t?!r:r,r?(!h&&d[v]&&v++,d[v]={s:new Fn,p:x},d[v].s.curves=a.curves,h&&v++,p[v]=[]):p[v].push({h:a,p:x[0]});if(!d[0])return e(o);if(d.length>1){let f=!1,T=0;for(let S=0,E=d.length;S<E;S++)u[S]=[];for(let S=0,E=d.length;S<E;S++){const z=p[S];for(let I=0;I<z.length;I++){const R=z[I];let B=!0;for(let Q=0;Q<d.length;Q++)i(R.p,d[Q].p)&&(S!==Q&&T++,B?(B=!1,u[Q].push(R)):f=!0);B&&u[S].push(R)}}T>0&&f===!1&&(p=u)}let m;for(let f=0,T=d.length;f<T;f++){c=d[f].s,l.push(c),m=p[f];for(let S=0,E=m.length;S<E;S++)c.holes.push(m[S].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);class yi extends Uo{constructor(t){super(t)}load(t,e,i,s){const o=this,r=new pS(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const c=o.parse(JSON.parse(a));e&&e(c)},i,s)}parse(t){return new _S(t)}}class _S{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=xS(t,e,this.data);for(let o=0,r=s.length;o<r;o++)i.push(...s[o].toShapes());return i}}function xS(n,t,e){const i=Array.from(n),s=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,r=[];let a=0,c=0;for(let l=0;l<i.length;l++){const h=i[l];if(h===`
`)a=0,c-=o;else{const u=yS(h,s,a,c,e);a+=u.offsetX,r.push(u.path)}}return r}function yS(n,t,e,i,s){const o=s.glyphs[n]||s.glyphs["?"];if(!o){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const r=new vS;let a,c,l,h,u,d,p,v;if(o.o){const x=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let m=0,f=x.length;m<f;)switch(x[m++]){case"m":a=x[m++]*t+e,c=x[m++]*t+i,r.moveTo(a,c);break;case"l":a=x[m++]*t+e,c=x[m++]*t+i,r.lineTo(a,c);break;case"q":l=x[m++]*t+e,h=x[m++]*t+i,u=x[m++]*t+e,d=x[m++]*t+i,r.quadraticCurveTo(u,d,l,h);break;case"b":l=x[m++]*t+e,h=x[m++]*t+i,u=x[m++]*t+e,d=x[m++]*t+i,p=x[m++]*t+e,v=x[m++]*t+i,r.bezierCurveTo(u,d,p,v,l,h);break}}return{offsetX:o.ha*t,path:r}}class Ge extends Jn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const MS=Ln({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=null,s=Kt(!1),o=Kt(!1),r=Kt(!1);return Gn(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Bn,l=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),h=new On({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Yt,d=new xi(16777215,2);c.add(d);const p=new _i(16777215,4);p.position.set(5,5,5),c.add(p);const v=new vi(16777215,5,50);v.position.set(0,2,4),c.add(v);const x=new Qn,m=x.load("/3d-bear-arts/assets/lv2.jpg"),f=x.load("/3d-bear-arts/assets/lv2.jpg");m.wrapS=m.wrapT=qe,f.wrapS=f.wrapT=qe;const T=new Bt({color:8343336,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:f,envMapIntensity:.7}),S=new Bt({color:5978654,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:f,envMapIntensity:.7}),E=new Bt({color:13152668,metalness:.2,roughness:.05,bumpMap:m,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:f,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:Me});new Bt({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const z=new _t(1,32,32,0,Math.PI),I=new w(z,E),R=new w(z,T);I.scale.set(.85,.85,.8),R.scale.set(.85,.85,.8),I.position.y=-.2,R.position.y=-.2,I.rotation.y=Math.PI/2,R.rotation.y=Math.PI*1.5;const B=new be(1,32),Q=new w(B,T);Q.scale.set(.85,.85,.8),Q.position.set(0,-.2,0),Q.rotation.y=Math.PI/2;const y=new Yt;y.add(I),y.add(R),y.add(Q),u.add(y);const b=new _t(.6,32,32,0,Math.PI),U=new w(b,T);U.scale.set(1,.95,.95),U.position.set(0,1,0),U.rotation.y=Math.PI*1.5;const k=new w(b,E);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI/2;const et=new be(.6,32),rt=new w(et,T);rt.position.set(0,1,0),rt.rotation.y=Math.PI/2,rt.scale.set(1,.95,.95);const j=new Yt;j.add(U),j.add(k),j.add(rt),u.add(j);const nt=new _t(.25,32,32),$=new w(nt,T);$.position.set(-.45,1.35,-.1),u.add($);const gt=new w(nt,E);gt.position.set(.45,1.35,-.1),u.add(gt);const pt=new _t(.25,32,32,Math.PI/2,Math.PI),wt=new w(pt,S);wt.scale.set(1.1,.6,.8),wt.position.set(0,.84,.5),wt.rotation.y=Math.PI;const Lt=new _t(.25,32,32,Math.PI/2,Math.PI),zt=new w(Lt,E);zt.scale.set(1.1,.6,.8),zt.position.set(0,.84,.5),zt.rotation.y=0;const at=new be(.25,32),dt=new w(at,T);dt.scale.set(.8,.6,.8),dt.position.set(0,.84,.5),dt.rotation.y=Math.PI/2;const Mt=new Yt;Mt.add(wt),Mt.add(zt),Mt.add(dt),u.add(Mt);const F=new Fn;F.moveTo(0,0),F.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),F.bezierCurveTo(-.6,.3,0,.6,0,1),F.bezierCurveTo(0,.6,.6,.3,.6,0),F.bezierCurveTo(.6,-.3,0,-.3,0,0);const lt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Bt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const st=new Jn(F,lt),ft=new w(st,T);ft.scale.set(.1,.1,.1),ft.rotation.z=ce.degToRad(210),ft.rotation.x=ce.degToRad(5),ft.rotation.y=ce.degToRad(-45),ft.position.set(-.4,.9,.45);const St=new w(st,S);St.scale.set(.6,.5,.5),St.position.set(.35,0,0),St.rotation.y=Math.PI,St.rotation.x=Math.PI;const it=new w(st,S);it.scale.set(.2,.2,.2),it.position.set(.5,-.1,.2),it.rotation.y=Math.PI,it.rotation.x=Math.PI,u.add(it);const g=new Cn(1.3,1.2,.6),A=new w(g,T);A.scale.set(.45,.45,.45),A.position.set(.35,-.2,.1),A.rotation.y=Math.PI;const L=new Ji(.15,.025,10,100);new Bt({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const O=new w(L,T);O.position.set(.35,.1,.1),O.rotation.z=Math.PI/2,O.rotation.x=Math.PI/8,O.rotation.y=Math.PI/14;const N=new w(L,T);N.position.set(.35,.1,.13),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/-8,N.rotation.y=Math.PI/12;const q=new Yt;q.add(A),q.add(O),q.add(N),u.add(q);const Z=new _t(.35,32,32),M=new w(Z,T);M.scale.set(.75,1.25,.65),M.position.set(-.7,-.15,.2),u.add(M);const _=new w(Z,E);_.scale.set(.75,1.25,.65),_.position.set(.7,-.15,.2),u.add(_);const C=new ee(.2,.22,.6,32),X=new w(C,T);X.position.set(-.4,-1.05,0),u.add(X);const V=new w(C,E);V.position.set(.4,-1.05,0),u.add(V);const W=new _t(.3,32,32),ut=new w(W,T);ut.scale.set(1,.72,1.5),ut.position.set(-.4,-1.45,.17),u.add(ut);const ct=new w(W,E);ct.scale.set(1,.72,1.5),ct.position.set(.4,-1.45,.17),u.add(ct);const mt=new _t(.44,32,32),Tt=new w(mt,T);Tt.position.set(-.15,-.45,-.4),u.add(Tt);const ht=new w(mt,E);ht.position.set(.15,-.45,-.4),u.add(ht);const yt=new _t(.18,32,32),At=new w(yt,T);At.position.set(0,-.35,-.8),u.add(At),new yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const bt=new Ge("X",{font:tt,size:.2,depth:.05});new ts({color:0});const Et=new w(bt,S);Et.position.set(-.3,.99,.53),Et.rotation.x=ce.degToRad(-5),Et.rotation.y=ce.degToRad(-15),u.add(Et);const Gt=new Ge("O",{font:tt,size:.2,depth:.05});new ts({color:0});const Jt=new w(Gt,S);Jt.position.set(.14,.99,.53),Jt.rotation.y=ce.degToRad(12),Jt.rotation.x=ce.degToRad(-5),u.add(Jt)}),At.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Pt=()=>{u.rotation.y,u.rotation.x},qt=()=>{s.value=!0,o.value=!1,r.value=!1},Ut=()=>{s.value=!1,o.value=!0,r.value=!1},jt=()=>{s.value=!1,o.value=!1,Pt()},G=tt=>{const bt=window.innerWidth/2;tt>bt?qt():Ut(),Pt()},xt=tt=>{clearTimeout(i),jt(),r.value=!0;const bt={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1};if(r.value){const Et=bt.x*Math.PI*.2,Gt=bt.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=Gt}i=setTimeout(()=>{r.value=!1,G(tt.clientX)},500)};window.addEventListener("mousemove",xt);const ot=tt=>{if(r.value){const bt={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1},Et=bt.x*Math.PI*.2,Gt=bt.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=Gt}};window.addEventListener("mousemove",ot),a(),He(()=>t.bodyPosition,tt=>{u.position.set(tt.x,tt.y,tt.z)}),He(()=>t.cameraPosition,tt=>{l.position.set(t.bodyPosition.x,1,tt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Hn(),ti("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2))}}),wS=ei(MS,[["__scopeId","data-v-f3beb116"]]),SS=Ln({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=null,s=Kt(!1),o=Kt(!1),r=Kt(!1);return Gn(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Bn,l=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),h=new On({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Yt,d=new xi(16777215,2);c.add(d);const p=new _i(16777215,4);p.position.set(5,5,5),c.add(p);const v=new vi(16777215,5,50);v.position.set(0,2,4),c.add(v);const x=new Qn,m=x.load("/3d-bear-arts/assets/pop6.jpg"),f=x.load("/3d-bear-arts/assets/pop7.jpg");m.wrapS=m.wrapT=qe,f.wrapS=f.wrapT=qe;const T=new Bt({color:16738740,map:f,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),S=new Bt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Me}),E=new Bt({color:16766720,map:m,metalness:.3,roughness:.5}),z=new Bt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Me}),I=new Bt({color:9055202,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Bt({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Me});const R=new Bt({color:65535,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),B=new Bt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Me}),Q=new _t(1,32,32,0,Math.PI),y=new w(Q,S),b=new w(Q,T);y.scale.set(.85,.85,.8),b.scale.set(.85,.85,.8),y.position.y=-.2,b.position.y=-.2,y.rotation.y=Math.PI/2,b.rotation.y=Math.PI*1.5;const U=new be(1,32),k=new w(U,T);k.scale.set(.85,.85,.8),k.position.set(0,-.2,0),k.rotation.y=Math.PI/2;const et=new Yt;et.add(y),et.add(b),et.add(k),u.add(et);const rt=new _t(.6,32,32,0,Math.PI),j=new w(rt,E);j.scale.set(1,.95,.95),j.position.set(0,1,0),j.rotation.y=Math.PI*1.5;const nt=new w(rt,z);nt.scale.set(1,.95,.95),nt.position.set(0,1,0),nt.rotation.y=Math.PI/2;const $=new be(.6,32),gt=new w($,E);gt.position.set(0,1,0),gt.rotation.y=Math.PI/2,gt.scale.set(1,.95,.95);const pt=new Yt;pt.add(j),pt.add(nt),pt.add(gt),u.add(pt);const wt=new _t(.25,32,32),Lt=new w(wt,T);Lt.position.set(-.45,1.35,-.1),u.add(Lt);const zt=new w(wt,S);zt.position.set(.45,1.35,-.1),u.add(zt);const at=new _t(.25,32,32,Math.PI/2,Math.PI),dt=new w(at,E);dt.scale.set(1.1,.6,.8),dt.position.set(0,.84,.5),dt.rotation.y=Math.PI;const Mt=new _t(.25,32,32,Math.PI/2,Math.PI),F=new w(Mt,z);F.scale.set(1.1,.6,.8),F.position.set(0,.84,.5),F.rotation.y=0;const lt=new be(.25,32),st=new w(lt,E);st.scale.set(.8,.6,.8),st.position.set(0,.84,.5),st.rotation.y=Math.PI/2;const ft=new Yt;ft.add(dt),ft.add(F),ft.add(st),u.add(ft);const St=new Fn;St.moveTo(0,0),St.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),St.bezierCurveTo(-.6,.3,0,.6,0,1),St.bezierCurveTo(0,.6,.6,.3,.6,0),St.bezierCurveTo(.6,-.3,0,-.3,0,0);const it={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Jn(St,it),A=new w(g,E);A.scale.set(.5,.5,.5),A.position.set(.35,0,0),A.rotation.y=Math.PI,A.rotation.x=Math.PI,u.add(A);const L=new w(g,R);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const O=new w(g,T);O.scale.set(.25,.25,.27),O.position.set(.4,.3,-.2),O.rotation.y=Math.PI,O.rotation.x=Math.PI,u.add(O);const N=new _t(.35,32,32),q=new w(N,R);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),u.add(q);const Z=new w(N,B);Z.scale.set(.75,1.25,.65),Z.position.set(.7,-.15,.2),u.add(Z);const M=new ee(.2,.22,.6,32),_=new w(M,E);_.position.set(-.4,-1.05,0),u.add(_);const C=new w(M,z);C.position.set(.4,-1.05,0),u.add(C);const X=new _t(.3,32,32),V=new w(X,E);V.scale.set(1,.72,1.5),V.position.set(-.4,-1.45,.17),u.add(V);const W=new w(X,z);W.scale.set(1,.72,1.5),W.position.set(.4,-1.45,.17),u.add(W);const ut=new _t(.44,32,32),ct=new w(ut,T);ct.position.set(-.15,-.45,-.4),u.add(ct);const mt=new w(ut,S);mt.position.set(.15,-.45,-.4),u.add(mt);const Tt=new _t(.18,32,32),ht=new w(Tt,T);ht.position.set(0,-.35,-.8),u.add(ht),new yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(xt){const ot=new Ge("X",{font:xt,size:.2,depth:.05});new ts({color:0});const tt=new w(ot,T);tt.position.set(-.3,.99,.53),tt.rotation.x=ce.degToRad(-5),tt.rotation.y=ce.degToRad(-15),u.add(tt);const bt=new Ge("O",{font:xt,size:.2,depth:.05});new ts({color:0});const Et=new w(bt,R);Et.position.set(.14,.99,.53),Et.rotation.y=ce.degToRad(12),Et.rotation.x=ce.degToRad(-5),u.add(Et);const Gt=new Ge("POP",{font:xt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Jt=new Bt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Bt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ne=new Bt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),se=new Bt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),te=new w(Gt,Jt);te.scale.set(.15,.15,.15),te.position.set(.03,1.16,.1),te.rotateZ(-25),u.add(te);const ae=new w(Gt,I);ae.scale.set(.14,.14,.14),ae.rotateZ(45),ae.position.set(.2,-.7,.3),u.add(ae);const ie=new w(Gt,ne);ie.scale.set(.14,.14,.14),ie.rotateZ(45),ie.rotateY(45),ie.position.set(.3,.7,.3),u.add(ie);const ve=new w(Gt,ne);ve.scale.set(.15,.15,.15),ve.rotateZ(45),ve.rotateY(45),ve.position.set(.35,-1.5,.3),u.add(ve);const oe=new w(Gt,se);oe.scale.set(.17,.17,.17),oe.rotateZ(45),oe.rotateY(15),oe.position.set(.35,1,.3),u.add(oe)}),ht.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const At=()=>{u.rotation.y,u.rotation.x},Dt=()=>{s.value=!0,o.value=!1,r.value=!1},Pt=()=>{s.value=!1,o.value=!0,r.value=!1},qt=()=>{s.value=!1,o.value=!1,At()},Ut=xt=>{const ot=window.innerWidth/2;xt>ot?Dt():Pt(),At()},jt=xt=>{clearTimeout(i),qt(),r.value=!0;const ot={x:xt.clientX/window.innerWidth*2-1,y:-(xt.clientY/window.innerHeight)*2+1};if(r.value){const tt=ot.x*Math.PI*.2,bt=ot.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=bt}i=setTimeout(()=>{r.value=!1,Ut(xt.clientX)},500)};window.addEventListener("mousemove",jt);const G=xt=>{if(r.value){const ot={x:xt.clientX/window.innerWidth*2-1,y:-(xt.clientY/window.innerHeight)*2+1},tt=ot.x*Math.PI*.2,bt=ot.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=bt}};window.addEventListener("mousemove",G),a(),He(()=>t.bodyPosition,xt=>{u.position.set(xt.x,xt.y,xt.z)}),He(()=>t.cameraPosition,xt=>{l.position.set(t.bodyPosition.x,1,xt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(Hn(),ti("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2))}}),bS=ei(SS,[["__scopeId","data-v-8cfea564"]]),ES={class:"pixel-controls"},TS={class:"side-buttons"},AS=Ln({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);Gn(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03);const tt=xt.getElapsedTime();G.forEach((bt,Et)=>{const Gt=.2+Math.sin(tt*3+ot[Et])*.1;bt.scale.set(Gt,Gt,Gt)}),x.render(p,v)};const p=new Bn,v=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),x=new On({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const m=new Yt,f=new Yt;p.add(f);const T=new xi(16777215,2);p.add(T);const S=new _i(16777215,4);S.position.set(5,5,5),p.add(S);const E=new vi(16777215,5,50);E.position.set(0,2,4),p.add(E);const z=new Qn,I=z.load("/3d-bear-arts/assets/pop6.jpg"),R=z.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=qe,R.wrapS=R.wrapT=qe,R.repeat.set(2,2);const B=new Bt({color:16738740,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Q=new Bt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Me}),y=new Bt({color:16766720,map:I,metalness:.3,roughness:.5}),b=new Bt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Me}),U=new Bt({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Bt({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),et=new Bt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Me}),rt=new _t(1,32,32,0,Math.PI),j=new w(rt,Q),nt=new w(rt,B);j.scale.set(.85,.85,.8),nt.scale.set(.85,.85,.8),j.position.y=-.2,nt.position.y=-.2,j.rotation.y=Math.PI/2,nt.rotation.y=Math.PI*1.5;const $=new be(1,32),gt=new w($,B);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const pt=new Yt;pt.add(j),pt.add(nt),pt.add(gt),m.add(pt);const wt=new _t(.6,32,32,0,Math.PI),Lt=new w(wt,y);Lt.scale.set(1,.95,.95),Lt.position.set(0,1,0),Lt.rotation.y=Math.PI*1.5;const zt=new w(wt,b);zt.scale.set(1,.95,.95),zt.position.set(0,1,0),zt.rotation.y=Math.PI/2;const at=new be(.6,32),dt=new w(at,y);dt.position.set(0,1,0),dt.rotation.y=Math.PI/2,dt.scale.set(1,.95,.95);const Mt=new Yt;Mt.add(Lt),Mt.add(zt),Mt.add(dt),m.add(Mt);const F=new _t(.25,32,32),lt=new w(F,B);lt.position.set(-.45,1.35,-.1),m.add(lt);const st=new w(F,Q);st.position.set(.45,1.35,-.1),m.add(st);const ft=new _t(.25,32,32,Math.PI/2,Math.PI),St=new w(ft,y);St.scale.set(1.1,.6,.8),St.position.set(0,.84,.5),St.rotation.y=Math.PI;const it=new _t(.25,32,32,Math.PI/2,Math.PI),g=new w(it,b);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const A=new be(.25,32),L=new w(A,y);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const O=new Yt;O.add(St),O.add(g),O.add(L),m.add(O);const N=new Fn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const q={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Z=new Jn(N,q),M=new w(Z,y);M.scale.set(.5,.5,.5),M.position.set(.3,0,0),M.rotation.y=Math.PI,M.rotation.x=Math.PI,m.add(M);const _=new w(Z,k);_.scale.set(.2,.2,.25),_.position.set(.35,-.3,.4),_.rotation.y=Math.PI,_.rotation.x=Math.PI,m.add(_);const C=new w(Z,B);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,m.add(C);const X=new _t(.35,32,32),V=new w(X,k);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),m.add(V);const W=new w(X,et);W.scale.set(.75,1.25,.65),W.position.set(.7,-.15,.2),m.add(W);const ut=new ee(.2,.22,.6,32),ct=new w(ut,y);ct.position.set(-.4,-1.05,0),m.add(ct);const mt=new w(ut,b);mt.position.set(.4,-1.05,0),m.add(mt);const Tt=new _t(.3,32,32),ht=new w(Tt,y);ht.scale.set(1,.72,1.5),ht.position.set(-.4,-1.45,.17),m.add(ht);const yt=new w(Tt,b);yt.scale.set(1,.72,1.5),yt.position.set(.4,-1.45,.17),m.add(yt);const At=new _t(.44,32,32),Dt=new w(At,B);Dt.position.set(-.15,-.45,-.4),m.add(Dt);const Pt=new w(At,Q);Pt.position.set(.15,-.45,-.4),m.add(Pt);const qt=new _t(.18,32,32),Ut=new w(qt,B);Ut.position.set(0,-.35,-.8),m.add(Ut),new yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const bt=new Ge("X",{font:tt,size:.2,depth:.05}),Et=new w(bt,B);Et.position.set(-.3,.99,.53),Et.rotation.x=ce.degToRad(-5),Et.rotation.y=ce.degToRad(-15),m.add(Et);const Gt=new Ge("O",{font:tt,size:.2,depth:.05}),Jt=new w(Gt,k);Jt.position.set(.14,.99,.53),Jt.rotation.y=ce.degToRad(12),Jt.rotation.x=ce.degToRad(-5),m.add(Jt);const ne=new Ge("POP",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new Ge("🐻",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const se=new Ge("BAO      BEAR",{font:tt,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),te=new Bt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Bt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ae=new Bt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),ie=new Bt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ve=new w(ne,te);ve.scale.set(.15,.15,.15),ve.position.set(.02,1.16,.1),ve.rotateZ(-25),m.add(ve);const oe=new w(ne,U);oe.scale.set(.14,.14,.14),oe.rotateZ(45),oe.position.set(.2,-.7,.3),m.add(oe);const Te=new w(ne,ae);Te.scale.set(.14,.14,.14),Te.rotateZ(45),Te.rotateY(45),Te.position.set(.3,.7,.3),m.add(Te);const _e=new w(ne,ae);_e.scale.set(.15,.15,.15),_e.rotateZ(45),_e.rotateY(45),_e.position.set(.35,-1.5,.3),m.add(_e);const Xe=new w(ne,ie);Xe.scale.set(.17,.17,.17),Xe.rotateZ(45),Xe.rotateY(15),Xe.position.set(.35,1,.3),m.add(Xe);const Se=new w(se,te);Se.scale.set(.7,.7,.7),Se.position.set(-6,0,-3),f.add(Se)}),Ut.renderOrder=1,m.scale.set(1.4,1.4,1.4),p.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),v.position.set(t.bodyPosition.x,1,t.cameraPosition),v.lookAt(t.bodyPosition.x,0,0),v.position.z=4,m.rotation.x=.1;const G=[M,_,C],xt=new zp,ot=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),He(()=>t.bodyPosition,tt=>{m.position.set(tt.x,tt.y,tt.z)}),He(()=>t.cameraPosition,tt=>{v.position.set(t.bodyPosition.x,1,tt),v.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(Hn(),ti(rn,null,[Ot("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Ot("div",ES,[Ot("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Ot("div",TS,[Ot("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ot("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Ot("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),PS=ei(AS,[["__scopeId","data-v-cb52c927"]]),RS={class:"pixel-controls"},CS={class:"side-buttons"},IS=Ln({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);Gn(()=>{if(e.value){let d=function(ae,ie){const ve=new ee(jt,jt,G,32);ve.rotateX(Math.PI/2);const oe=new w(ve,ae),Te=new Yt;for(let Xe=0;Xe<xt;Xe++){const Se=Xe/xt*Math.PI*2,je=new Cn(ot,tt,bt),Ze=new w(je,ae);Ze.position.set((jt+bt/26)*Math.cos(Se),(jt+bt/26)*Math.sin(Se),0),Ze.rotation.z=Se,Te.add(Ze)}const _e=new Yt;return _e.add(oe),_e.add(Te),_e.position.set(ie.x,ie.y,ie.z),_e},p=function(){requestAnimationFrame(p),i.value&&(f.rotation.y+=.03),s.value&&(f.rotation.y-=.03),o.value&&(f.rotation.x-=.03),r.value&&(f.rotation.x+=.03),Et.rotation.z-=.02,Gt.rotation.z+=.03,Jt.rotation.z+=.02,ne.rotation.z+=.02,se.rotation.z-=.03,te.rotation.y+=.04,m.render(v,x)};const v=new Bn,x=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),m=new On({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const f=new Yt,T=new Yt;v.add(T);const S=new xi(16777215,2);v.add(S);const E=new _i(16777215,4);E.position.set(5,5,5),v.add(E);const z=new vi(16777215,5,50);z.position.set(0,2,4),v.add(z);const I=new Qn,R=I.load("/3d-bear-arts/assets/metal.jpg"),B=I.load("/3d-bear-arts/assets/pop7.jpg"),Q=I.load("/3d-bear-arts/assets/gear.jpg");R.wrapS=R.wrapT=qe,B.wrapS=B.wrapT=qe,B.repeat.set(2,2);const y=new Bt({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:R});Q.mapping=wa;const b=new Bt({color:"#d3d3d3",metalness:1,roughness:.25,map:R,envMap:Q,clearcoat:.7,clearcoatRoughness:.3}),U=new Bt({color:"#C0C0C0",metalness:1,roughness:.25,envMap:Q,clearcoat:.7,clearcoatRoughness:.3}),k=new Bt({color:"#C0C0C0",metalness:1,roughness:.25,map:R,envMap:Q,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),et=new Bt({color:"#C0C0C0",metalness:1,roughness:.5,map:R,envMap:Q,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),rt=new Bt({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:Me});new Bt({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const j=new Bt({color:"#d3d3d3",metalness:1,roughness:.2,map:Q,envMap:Q,clearcoat:.7,clearcoatRoughness:.3});new Bt({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:Q}),new Bt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:R,transparent:!0,opacity:.3});const nt=new _t(1,32,32,0,Math.PI),$=new w(nt,et),gt=new w(nt,b);$.scale.set(.85,.85,.8),gt.scale.set(.85,.85,.8),$.position.y=-.2,gt.position.y=-.2,$.rotation.y=Math.PI/2,gt.rotation.y=Math.PI*1.5;const pt=new be(1,32),wt=new w(pt,k);wt.scale.set(.85,.85,.8),wt.position.set(0,-.2,0),wt.rotation.y=Math.PI/2;const Lt=new Yt;Lt.add($),Lt.add(gt),Lt.add(wt),f.add(Lt);const zt=new _t(.6,32,32,0,Math.PI),at=new w(zt,b);at.scale.set(1,.95,.95),at.position.set(0,1,0),at.rotation.y=Math.PI*1.5;const dt=new w(zt,et);dt.scale.set(1,.95,.95),dt.position.set(0,1,0),dt.rotation.y=Math.PI/2;const Mt=new be(.6,32),F=new w(Mt,k);F.position.set(0,1,0),F.rotation.y=Math.PI/2,F.scale.set(1,.95,.95);const lt=new Yt;lt.add(at),lt.add(dt),lt.add(F),f.add(lt);const st=new _t(.25,32,32),ft=new w(st,b);ft.position.set(-.45,1.35,-.1),f.add(ft);const St=new w(st,k);St.position.set(.45,1.35,-.1),f.add(St);const it=new _t(.25,32,32,Math.PI/2,Math.PI),g=new w(it,b);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const A=new _t(.25,32,32,Math.PI/2,Math.PI),L=new w(A,k);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const O=new be(.25,32),N=new w(O,rt);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const q=new Yt;q.add(g),q.add(L),q.add(N),f.add(q);const Z=new Fn;Z.moveTo(0,0),Z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Z.bezierCurveTo(-.6,.3,0,.6,0,1),Z.bezierCurveTo(0,.6,.6,.3,.6,0),Z.bezierCurveTo(.6,-.3,0,-.3,0,0);const M={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},_=new Jn(Z,M),C=new _t(.35,32,32),X=new w(C,b);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),f.add(X);const V=new w(C,k);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),f.add(V);const W=new ee(.2,.22,.6,32),ut=new w(W,b);ut.position.set(-.4,-1.05,0),f.add(ut);const ct=new w(W,k);ct.position.set(.4,-1.05,0),f.add(ct);const mt=new _t(.3,32,32),Tt=new w(mt,b);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),f.add(Tt);const ht=new w(mt,k);ht.scale.set(1,.72,1.5),ht.position.set(.4,-1.45,.17),f.add(ht);const yt=new _t(.44,32,32),At=new w(yt,b);At.position.set(-.15,-.45,-.4),f.add(At);const Dt=new w(yt,et);Dt.position.set(.15,-.45,-.4),f.add(Dt);const Pt=new _t(.18,32,32),qt=new w(Pt,b);qt.position.set(0,-.35,-.8),f.add(qt),new yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ae){const ie=new Ge("X",{font:ae,size:.2,depth:.05});new ts({color:0});const ve=new w(ie,y);ve.position.set(-.3,.99,.53),ve.rotation.x=ce.degToRad(-5),ve.rotation.y=ce.degToRad(-15),f.add(ve);const oe=new Ge("O",{font:ae,size:.2,depth:.05});new ts({color:0});const Te=new w(oe,y);Te.position.set(.14,.99,.53),Te.rotation.y=ce.degToRad(12),Te.rotation.x=ce.degToRad(-5),f.add(Te)}),qt.renderOrder=1;const jt=1.2,G=.5,xt=8,ot=.7,tt=.3,bt=.5,Et=d(j,{x:-2,y:0,z:0}),Gt=d(j,{x:0,y:0,z:0}),Jt=d(j,{x:2,y:0,z:0}),ne=d(j,{x:2,y:0,z:0}),se=d(j,{x:2,y:-2,z:0}),te=new w(_,U);te.scale.set(.3,.3,.3),te.position.set(.25,1.1,0),te.rotation.y=Math.PI,te.rotation.x=Math.PI,f.add(te),Et.position.set(.35,0,0),Gt.position.set(.25,-.3,.4),Jt.position.set(.3,.3,-.2),ne.position.set(.25,.17,.4),se.position.set(.5,-.3,.45),Et.scale.set(.2,.2,.2),Gt.scale.set(.18,.18,.18),Jt.scale.set(.15,.15,.15),ne.scale.set(.17,.17,.17),se.scale.set(.15,.15,.15),Gt.rotation.z=Math.PI/4,Jt.rotation.z=-Math.PI/4,ne.rotation.y=-Math.PI/2,se.rotation.y=-Math.PI/2,f.add(Et),f.add(Gt),f.add(Jt),f.add(ne),f.add(se),f.rotation.x=.1,f.scale.set(1.4,1.4,1.4),v.add(f),f.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4,p(),He(()=>t.bodyPosition,ae=>{f.position.set(ae.x,ae.y,ae.z)}),He(()=>t.cameraPosition,ae=>{x.position.set(t.bodyPosition.x,1,ae),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(Hn(),ti(rn,null,[Ot("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Ot("div",RS,[Ot("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Ot("div",CS,[Ot("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ot("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Ot("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),LS=ei(IS,[["__scopeId","data-v-9a57b6d8"]]),DS={class:"pixel-controls"},US={class:"side-buttons"},NS={class:"directional-buttons"},FS={class:"horizontal-buttons"},OS={class:"directional-buttons-woman"},BS={class:"horizontal-buttons-woman"},zS={class:"directional-buttons-kid"},GS={class:"horizontal-buttons-kid"},na=.1,ia=.05,sa=.08,HS=Ln({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);const a=fo(null),c=Kt(!1),l=Kt(!1),h=Kt(!1),u=Kt(!1),d=fo(null),p=fo(null),v=Kt(!1),x=Kt(!1),m=Kt(!1),f=Kt(!1),T=Kt(!1),S=Kt(!1),E=Kt(!1),z=Kt(!1),I=new On({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const R=new Bn,B=new ze(75,window.innerWidth/window.innerHeight,.1,1e3);B.position.z=5,Gn(()=>{if(e.value){let it=function(){const Ct=new Yt,Re=new _t(.2,32,32),Ce=new Ht({color:16767916}),we=new w(Re,Ce);we.position.set(0,1.5,0),Ct.add(we);const tn=new _t(.21,32,32,0,Math.PI*2,0,Math.PI/2),Ee=new Ht({color:16711680}),$e=new w(tn,Ee);$e.position.set(0,1.58,0),Ct.add($e);const wn=new ee(.25,.25,.6,32),ke=new Ht({color:16767916}),un=new w(wn,ke);un.position.set(0,1,0),Ct.add(un);const Vn=new ee(.26,.26,.3,32),fn=new Ht({color:255}),Sn=new w(Vn,fn);Sn.position.set(0,.65,0),Ct.add(Sn);const Dn=new ee(.1,.1,.5,32),sn=new Ht({color:16767916}),bn=new w(Dn,sn);bn.position.set(-.15,.25,0),Ct.add(bn);const Un=new w(Dn,sn);Un.position.set(.15,.25,0),Ct.add(Un);const Wn=new ee(.08,.08,.5,32),pn=new w(Wn,sn);pn.position.set(-.35,1.3,0),pn.rotation.z=Math.PI/4,Ct.add(pn);const mn=new w(Wn,sn);return mn.position.set(.35,1.3,0),mn.rotation.z=-Math.PI/4,Ct.add(mn),Ct.scale.set(.27,.27,.27),Ct.position.set(-.2,-.1,-.15),Ct},g=function(){const Ct=new Yt,Re=new _t(.18,32,32),Ce=new Ht({color:16767916}),we=new w(Re,Ce);we.position.set(0,1.2,.04),Ct.add(we);const tn=new _t(.19,32,32,.4,Math.PI*2,0,Math.PI/2),Ee=new ee(.18,.18,.4,32),$e=new Ht({color:9127187}),wn=new w(tn,$e);wn.position.set(0,1.28,0),Ct.add(wn);const ke=new w(Ee,$e);ke.position.set(0,1.1,-.01),Ct.add(ke);const un=new ee(.18,.2,.5,32),Vn=new Ht({color:16767916}),fn=new w(un,Vn);fn.position.set(0,.85,0),Ct.add(fn);const Sn=new _t(.08,32,32,0,Math.PI),Dn=new Ht({color:16738740}),sn=new w(Sn,Dn);sn.position.set(-.09,.98,.15),Ct.add(sn);const bn=new w(Sn,Dn);bn.position.set(.09,.98,.15),Ct.add(bn);const Un=new ee(.22,.22,.25,32),Wn=new Ht({color:16738740}),pn=new w(Un,Wn);pn.position.set(0,.6,0),Ct.add(pn);const mn=new ee(.1,.1,.6,32),Mi=new Ht({color:16767916}),wi=new w(mn,Mi);wi.position.set(-.09,.5,.2),wi.rotation.x=Math.PI/2,Ct.add(wi);const Si=new w(mn,Mi);Si.position.set(.09,.5,.2),Si.rotation.x=Math.PI/2,Ct.add(Si);const bi=new ee(.08,.08,.35,32),ns=new w(bi,Mi);ns.position.set(-.24,.95,.18),ns.rotation.x=Math.PI/2,Ct.add(ns);const Ni=new w(bi,Mi);return Ni.position.set(.2,.85,0),Ni.rotation.z=Math.PI/20,Ct.add(Ni),Ct.scale.set(.27,.27,.27),Ct.position.set(.2,-.15,-.32),Ct},A=function(){const Ct=new Yt,Re=new _t(.2,32,32),Ce=new Ht({color:16767916}),we=new w(Re,Ce);we.position.set(0,1.5,0),Ct.add(we);const tn=new _t(.21,32,32,0,Math.PI*2,0,Math.PI/2),Ee=new Ht({color:25600}),$e=new w(tn,Ee);$e.position.set(0,1.58,0),Ct.add($e);const wn=new ee(.22,.22,.5,32),ke=new Ht({color:16767916}),un=new w(wn,ke);un.position.set(0,1,0),Ct.add(un);const Vn=new ee(.23,.23,.3,32),fn=new Ht({color:8388736}),Sn=new w(Vn,fn);Sn.position.set(0,.65,0),Ct.add(Sn);const Dn=new ee(.1,.1,.5,32),sn=new Ht({color:16767916}),bn=new w(Dn,sn);bn.position.set(-.15,.3,-.25),bn.rotation.x=Math.PI/6,Ct.add(bn);const Un=new w(Dn,sn);Un.position.set(.15,.3,.25),Un.rotation.x=-Math.PI/6,Ct.add(Un);const Wn=new ee(.08,.08,.4,32),pn=new w(Wn,sn);pn.position.set(-.28,1,-.2),pn.rotation.x=Math.PI/6,Ct.add(pn);const mn=new w(Wn,sn);return mn.position.set(.28,1.3,.1),mn.rotation.z=-Math.PI/8,Ct.add(mn),Ct.scale.set(.15,.15,.15),Ct.position.set(.3,-.25,.25),Ct.rotation.x=Math.PI/12,Ct.rotation.y=Math.PI/2,Ct.rotation.z=-Math.PI/3,Ct},L=function(Ct){let Re=1,Ce=0;function we(){requestAnimationFrame(we),Ct.position.x+=.01*Re,Ct.position.x>=.35?(Re=-1,Ct.rotation.y=Math.PI):Ct.position.x<=-.35&&(Re=1,Ct.rotation.y=0),Ce+=.003,Ct.position.y=-.4+Math.sin(Ce)*.1,Z.render(N,q)}we()},O=function(){requestAnimationFrame(O),i.value&&(M.rotation.y+=.03),s.value&&(M.rotation.y-=.03),o.value&&(M.rotation.x-=.03),r.value&&(M.rotation.x+=.03),ve.uniforms.u_time.value+=.25,Y.rotation.y+=.04,Z.render(N,q)};const N=new Bn,q=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),Z=new On({antialias:!0,alpha:!0});Z.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(Z.domElement);const M=new Yt,_=new Yt;N.add(_);const C=new xi(16777215,2);N.add(C);const X=new _i(16777215,4);X.position.set(5,5,5),N.add(X);const V=new vi(16777215,5,50);V.position.set(0,2,4),N.add(V);const W=new Qn,ut=W.load("/3d-bear-arts/assets/beach.jpg");ut.repeat.set(.8,1);const ct=W.load("/3d-bear-arts/assets/sun.jpg");ut.wrapS=ut.wrapT=qe,ut.repeat.set(.8,1),ct.wrapS=ct.wrapT=qe;const mt=new Bt({color:11592447,map:ut,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Tt=new Bt({color:11592447,map:ut,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:Me,ior:1.33,depthWrite:!1,depthTest:!0}),ht=new Bt({color:11592447,map:ut,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),yt=new Bt({color:11592447,map:ut,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:Me}),At=new Bt({color:11592447,map:ut,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:Me,ior:1.33}),Dt=new Bt({color:11592447,map:ut,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Pt=new _t(1,32,32,0,Math.PI),qt=new w(Pt,yt),Ut=new w(Pt,Tt);qt.scale.set(.85,.85,.8),Ut.scale.set(.85,.85,.8),qt.position.y=-.2,Ut.position.y=-.2,qt.rotation.y=Math.PI/2,Ut.rotation.y=Math.PI*1.5;const jt=new be(1,32),G=new w(jt,mt);G.scale.set(.85,.85,.8),G.position.set(0,-.2,0),G.rotation.y=Math.PI/2;const xt=new Yt;xt.add(qt),xt.add(Ut),xt.add(G),M.add(xt);const ot=new _t(.6,32,32,0,Math.PI),tt=new w(ot,mt);tt.scale.set(1,.95,.95),tt.position.set(0,1,0),tt.rotation.y=Math.PI*1.5;const bt=new w(ot,ht);bt.scale.set(1,.95,.95),bt.position.set(0,1,0),bt.rotation.y=Math.PI/2;const Et=new be(.6,32),Gt=new w(Et,mt);Gt.position.set(0,1,0),Gt.rotation.y=Math.PI/2,Gt.scale.set(1,.95,.95);const Jt=new Yt;Jt.add(tt),Jt.add(bt),Jt.add(Gt),M.add(Jt);const ne=new _t(.6,32,32,0,Math.PI*2,0,Math.PI/2),se=new Bt({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),te=new w(ne,se);te.position.set(0,-.2,0),te.rotation.x=Math.PI,te.scale.set(1.25,1.25,1.25),xt.add(te);const ae=new Bt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:Me,transparent:!0,opacity:.7,depthWrite:!1}),ie=new w(jt,ae);ie.scale.set(.7,.7,.7),ie.position.set(0,-.3,0),ie.rotation.x=Math.PI/2,ie.renderOrder=1,xt.add(ie),M.add(xt);const ve=new cn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),oe=new w(jt,ve);oe.position.set(0,-.3,0),oe.scale.set(.7,.7,.7),oe.rotation.x=-Math.PI/2,oe.renderOrder=1,xt.add(oe);const Te=new _t(.25,32,32),_e=new w(Te,At);_e.position.set(-.45,1.35,-.1),M.add(_e);const Xe=new w(Te,ht);Xe.position.set(.45,1.35,-.1),M.add(Xe);const Se=new _t(.25,32,32,Math.PI/2,Math.PI),je=new w(Se,At);je.scale.set(1.1,.6,.8),je.position.set(0,.84,.5),je.rotation.y=Math.PI;const Ze=new _t(.25,32,32,Math.PI/2,Math.PI),kn=new w(Ze,ht);kn.scale.set(1.1,.6,.8),kn.position.set(0,.84,.5),kn.rotation.y=0;const It=new be(.25,32),ue=new w(It,Tt);ue.scale.set(.8,.6,.8),ue.position.set(0,.84,.5),ue.rotation.y=Math.PI/2;const xe=new Yt;xe.add(je),xe.add(kn),xe.add(ue),M.add(xe);const Ae=new Bt({color:8374441,metalness:1,roughness:.25,envMap:ct,clearcoat:.7,clearcoatRoughness:.3}),P=new Fn;P.moveTo(0,0),P.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),P.bezierCurveTo(-.6,.3,0,.6,0,1),P.bezierCurveTo(0,.6,.6,.3,.6,0),P.bezierCurveTo(.6,-.3,0,-.3,0,0);const K={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},D=new Jn(P,K),Y=new w(D,Ae);Y.scale.set(.2,.2,.2),Y.position.set(.25,1.2,0),Y.rotation.y=Math.PI,Y.rotation.x=Math.PI,M.add(Y);const H=new _t(.35,32,32),vt=new w(H,Tt);vt.scale.set(.75,1.25,.65),vt.position.set(-.7,-.15,.2),M.add(vt);const Rt=new w(H,yt);Rt.scale.set(.75,1.25,.65),Rt.position.set(.7,-.15,.2),M.add(Rt);const Ft=new ee(.2,.22,.6,32),Nt=new w(Ft,At);Nt.position.set(-.4,-1.05,0),M.add(Nt);const $t=new w(Ft,ht);$t.position.set(.4,-1.05,0),M.add($t);const Xt=new _t(.3,32,32),kt=new w(Xt,At);kt.scale.set(1,.72,1.5),kt.position.set(-.4,-1.45,.17),M.add(kt);const Qt=new w(Xt,ht);Qt.scale.set(1,.72,1.5),Qt.position.set(.4,-1.45,.17),M.add(Qt);const re=new _t(.44,32,32),de=new w(re,At);de.position.set(-.15,-.45,-.4),M.add(de);const ye=new w(re,At);ye.position.set(.15,-.45,-.4),M.add(ye);const le=new _t(.18,32,32),Zt=new w(le,At);Zt.position.set(0,-.35,-.8),M.add(Zt),new yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ct){const Re=new Ge("X",{font:Ct,size:.2,depth:.05}),Ce=new w(Re,Dt);Ce.position.set(-.3,.99,.53),Ce.rotation.x=ce.degToRad(-5),Ce.rotation.y=ce.degToRad(-15),M.add(Ce);const we=new Ge("O",{font:Ct,size:.2,depth:.05}),tn=new w(we,Dt);tn.position.set(.14,.99,.53),tn.rotation.y=ce.degToRad(12),tn.rotation.x=ce.degToRad(-5),M.add(tn)}),a.value=it(),M.add(a.value),N.add(M),d.value=g(),M.add(d.value),p.value=A(),M.add(p.value),L(p.value),M.scale.set(1.4,1.4,1.4),N.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),q.position.set(t.bodyPosition.x,1,t.cameraPosition),q.lookAt(t.bodyPosition.x,0,0),q.position.z=4,M.rotation.x=.1,O(),He(()=>t.bodyPosition,Ct=>{M.position.set(Ct.x,Ct.y,Ct.z)}),He(()=>t.cameraPosition,Ct=>{q.position.set(t.bodyPosition.x,1,Ct),q.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{q.aspect=window.innerWidth/window.innerHeight,q.updateProjectionMatrix(),Z.setSize(window.innerWidth,window.innerHeight)})}});function Q(){s.value=!0}function y(){i.value=!0}function b(){o.value=!0}function U(){r.value=!0}function k(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}const et=()=>{c.value=!0,console.log(c.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},rt=()=>{l.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},j=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},nt=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},$=()=>{c.value=!1,l.value=!1,h.value=!1,u.value=!1},gt=()=>{v.value=!0,d.value&&(d.value.rotation.y=Math.PI)},pt=()=>{x.value=!0,d.value&&(d.value.rotation.y=0)},wt=()=>{m.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},Lt=()=>{f.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},zt=()=>{v.value=!1,x.value=!1,m.value=!1,f.value=!1},at=()=>{requestAnimationFrame(at),a.value&&(c.value&&(a.value.position.z-=na),l.value&&(a.value.position.z+=na),h.value&&(a.value.position.x-=na),u.value&&(a.value.position.x+=na)),I.render(R,B)},dt=()=>{requestAnimationFrame(dt),d.value&&(v.value&&(d.value.position.z-=ia),x.value&&(d.value.position.z+=ia),m.value&&(d.value.position.x-=ia),f.value&&(d.value.position.x+=ia))};dt(),at();const Mt=()=>{T.value=!0,p.value&&(p.value.rotation.y=0)},F=()=>{S.value=!0,p.value&&(p.value.rotation.y=Math.PI)},lt=()=>{E.value=!0,p.value&&(p.value.rotation.y=Math.PI/2)},st=()=>{z.value=!0,p.value&&(p.value.rotation.y=-Math.PI/2)},ft=()=>{T.value=!1,S.value=!1,E.value=!1,z.value=!1},St=()=>{requestAnimationFrame(St),p.value&&(T.value&&(p.value.position.z-=sa),S.value&&(p.value.position.z+=sa),E.value&&(p.value.position.x-=sa),z.value&&(p.value.position.x+=sa))};return St(),(it,g)=>(Hn(),ti(rn,null,[Ot("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Ot("div",DS,[Ot("button",{class:"pixel-btn up",onMousedown:b,onMouseup:k},"UP",32),Ot("div",US,[Ot("button",{class:"pixel-btn left",onMousedown:Q,onMouseup:k},"LEFT",32),Ot("button",{class:"pixel-btn right",onMousedown:y,onMouseup:k},"RIGHT",32)]),Ot("button",{class:"pixel-btn down",onMousedown:U,onMouseup:k},"DOWN",32)]),Ot("div",NS,[Ot("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:et,onMouseup:$},"UP",32),Ot("div",FS,[Ot("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:j,onMouseup:$},"LEFT",32),Ot("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:nt,onMouseup:$},"RIGHT",32)]),Ot("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:rt,onMouseup:$},"DOWN",32)]),Ot("div",OS,[Ot("button",{class:"directional-btn-woman north-btn",onMousedown:gt,onMouseup:zt},"UP",32),Ot("div",BS,[Ot("button",{class:"directional-btn-woman west-btn",onMousedown:wt,onMouseup:zt},"LEFT",32),Ot("button",{class:"directional-btn-woman east-btn",onMousedown:Lt,onMouseup:zt},"RIGHT",32)]),Ot("button",{class:"directional-btn-woman south-btn",onMousedown:pt,onMouseup:zt},"DOWN",32)]),Ot("div",zS,[Ot("button",{class:"directional-btn-kid north-btn",onMousedown:Mt,onMouseup:ft},"UP",32),Ot("div",GS,[Ot("button",{class:"directional-btn-kid west-btn",onMousedown:lt,onMouseup:ft},"LEFT",32),Ot("button",{class:"directional-btn-kid east-btn",onMousedown:st,onMouseup:ft},"RIGHT",32)]),Ot("button",{class:"directional-btn-kid south-btn",onMousedown:F,onMouseup:ft},"DOWN",32)])],64))}}),kS=ei(HS,[["__scopeId","data-v-f25dfda5"]]),VS={class:"pixel-controls"},WS={class:"side-buttons"},XS=Ln({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);Gn(()=>{if(e.value){let d=function(_e,Xe){const Se=new Yt,je=new _t(1,32,32),Ze=new w(je,rt);Ze.scale.set(1,.8,1),Se.add(Ze);const kn=new ee(.1,.1,.5,16),It=new Ht({color:9127187}),ue=new w(kn,It);return ue.position.set(0,.9,0),Se.add(ue),Se},p=function(){requestAnimationFrame(p),i.value&&(f.rotation.y+=.03),s.value&&(f.rotation.y-=.03),o.value&&(f.rotation.x-=.03),r.value&&(f.rotation.x+=.03),jt.rotation.z-=.04,G.rotation.z+=.04,xt.rotation.z+=.03,ot.rotation.z+=.03,_.rotation.y+=.04,Te+=ve,f.position.y=t.bodyPosition.y+Math.sin(Te)*oe;const _e=ae.getElapsedTime();te.forEach((Xe,Se)=>{const je=.1+Math.sin(_e*3+ie[Se])*.1;Xe.scale.set(je,je,je)}),m.render(v,x)};const v=new Bn,x=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),m=new On({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const f=new Yt,T=new Yt;v.add(T);const S=new xi(16777215,2);v.add(S);const E=new _i(16777215,4);E.position.set(5,5,5),v.add(E);const z=new vi(16777215,5,50);z.position.set(0,2,4),v.add(z);const I=new Qn,R=I.load("/3d-bear-arts/assets/pumpkin.jpg");R.wrapS=R.wrapT=qe,R.repeat.set(.8,.85);const B=I.load("/3d-bear-arts/assets/pumpkin.jpg");B.wrapS=B.wrapT=qe,B.repeat.set(1,1);const Q=I.load("/3d-bear-arts/assets/pumpkin.jpg");Q.wrapS=B.wrapT=qe,Q.repeat.set(2,.8);const y=new Bt({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),b=new Yt,U=new Bt({color:16747520,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Bt({color:16747520,map:B,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),et=new Bt({color:16747520,map:Q,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:Me}),rt=new Bt({color:16747520,map:Q,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Bt({color:16766720,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Bt({color:9109504,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Bt({color:4915330,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const j=new _t(1,32,32,0,Math.PI),nt=new w(j,et),$=new w(j,U);nt.scale.set(.85,.85,.8),$.scale.set(.85,.85,.8),nt.position.y=-.2,$.position.y=-.2,nt.rotation.y=Math.PI/2,$.rotation.y=Math.PI*1.5;const gt=new be(1,32),pt=new w(gt,k);pt.scale.set(.85,.85,.8),pt.position.set(0,-.2,0),pt.rotation.y=Math.PI/2;const wt=new Yt;wt.add(nt),wt.add($),wt.add(pt),f.add(wt);const Lt=new _t(.6,32,32,0,Math.PI),zt=new w(Lt,U);zt.scale.set(1,.95,.95),zt.position.set(0,1,0),zt.rotation.y=Math.PI*1.5;const at=new w(Lt,et);at.scale.set(1,.95,.95),at.position.set(0,1,0),at.rotation.y=Math.PI/2;const dt=new be(.6,32),Mt=new w(dt,k);Mt.position.set(0,1,0),Mt.rotation.y=Math.PI/2,Mt.scale.set(1,.95,.95);const F=new Yt;F.add(zt),F.add(at),F.add(Mt),f.add(F);const lt=new _t(.25,32,32),st=new w(lt,rt);st.position.set(-.45,1.35,-.1),f.add(st);const ft=new w(lt,et);ft.position.set(.45,1.35,-.1),f.add(ft);const St=new _t(.25,32,32,Math.PI/2,Math.PI),it=new w(St,U);it.scale.set(1.1,.6,.8),it.position.set(0,.84,.5),it.rotation.y=Math.PI;const g=new _t(.25,32,32,Math.PI/2,Math.PI),A=new w(g,et);A.scale.set(1.1,.6,.8),A.position.set(0,.84,.5),A.rotation.y=0;const L=new be(.25,32),O=new w(L,U);O.scale.set(.8,.6,.8),O.position.set(0,.84,.5),O.rotation.y=Math.PI/2;const N=new Yt;N.add(it),N.add(A),N.add(O),f.add(N);const q=new Fn;q.moveTo(0,0),q.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),q.bezierCurveTo(-.6,.3,0,.6,0,1),q.bezierCurveTo(0,.6,.6,.3,.6,0),q.bezierCurveTo(.6,-.3,0,-.3,0,0);const Z={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},M=new Jn(q,Z),_=new w(M,y);_.scale.set(.3,.3,.3),_.position.set(.25,1.1,0),_.rotation.y=Math.PI,_.rotation.x=Math.PI,f.add(_);const C=new _t(.35,32,32),X=new w(C,k);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),f.add(X);const V=new w(C,et);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),f.add(V);const W=new ee(.2,.22,.6,32),ut=new w(W,k);ut.position.set(-.4,-1.05,0),f.add(ut);const ct=new w(W,et);ct.position.set(.4,-1.05,0),f.add(ct);const mt=new _t(.3,32,32),Tt=new w(mt,rt);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),f.add(Tt);const ht=new w(mt,et);ht.scale.set(1,.72,1.5),ht.position.set(.4,-1.45,.17),f.add(ht);const yt=new _t(.44,32,32),At=new w(yt,U);At.position.set(-.15,-.45,-.4),f.add(At);const Dt=new w(yt,et);Dt.position.set(.15,-.45,-.4),f.add(Dt);const Pt=new _t(.18,32,32),qt=new w(Pt,rt);qt.position.set(0,-.35,-.8),f.add(qt),qt.renderOrder=1,new yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(_e){const Xe=new Ge("X",{font:_e,size:.2,depth:.05}),Se=new w(Xe,k);Se.position.set(-.3,.99,.53),Se.rotation.x=ce.degToRad(-5),Se.rotation.y=ce.degToRad(-15),f.add(Se);const je=new Ge("O",{font:_e,size:.2,depth:.05}),Ze=new w(je,k);Ze.position.set(.14,.99,.53),Ze.rotation.y=ce.degToRad(12),Ze.rotation.x=ce.degToRad(-5),f.add(Ze)}),f.add(b);const jt=d(),G=d(),xt=d(),ot=d();jt.position.set(.35,-.35,-.3),G.position.set(.25,-.45,.3),xt.position.set(.3,.1,-.2),ot.position.set(.25,.18,.4),jt.scale.set(.3,.3,.3),G.scale.set(.28,.28,.28),xt.scale.set(.25,.25,.25),ot.scale.set(.23,.23,.23),G.rotation.z=Math.PI/4,xt.rotation.z=-Math.PI/4,ot.rotation.y=-Math.PI/2,f.add(jt),f.add(G),f.add(xt),f.add(ot);const tt=new Fn;tt.moveTo(-.5,0),tt.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),tt.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),tt.bezierCurveTo(-.05,.6,.05,.6,.15,.4),tt.bezierCurveTo(.25,.5,.25,.85,.5,.8),tt.bezierCurveTo(1,.6,.75,.25,.5,0),tt.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const bt={depth:.3,bevelEnabled:!1},Et=new Jn(tt,bt),Gt=new ts({color:0}),Jt=new w(Et,Gt);Jt.scale.set(.3,.3,.6),Jt.rotation.x=0,Jt.rotation.z=0,Jt.position.set(.26,.35,.25),f.add(Jt);const ne=new w(Et,Gt);ne.scale.set(.5,.5,.5),ne.position.set(.4,-.1,.54),f.add(ne);const se=new w(Et,Gt);se.scale.set(.5,.5,.5),se.position.set(.32,-.35,.65),f.add(se),f.rotation.x=.1,f.scale.set(1.4,1.4,1.4),v.add(f),f.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;const te=[Jt,ne,se],ae=new zp,ie=[0,Math.PI/2,Math.PI,0,Math.PI/3];let ve=.05,oe=.25,Te=0;p(),He(()=>t.bodyPosition,_e=>{f.position.set(_e.x,_e.y,_e.z)}),He(()=>t.cameraPosition,_e=>{x.position.set(t.bodyPosition.x,1,_e),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(Hn(),ti(rn,null,[Ot("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Ot("div",VS,[Ot("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Ot("div",WS,[Ot("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ot("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Ot("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),qS=ei(XS,[["__scopeId","data-v-5eff72b3"]]),YS={class:"pixel-controls"},jS={class:"side-buttons"},$S=Ln({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);Gn(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),Z.rotation.y+=.03,Gt+=ot,Jt+=tt,m.position.y=t.bodyPosition.y+Math.sin(Gt)*Et,Z.position.y=t.bodyPosition.y+Math.sin(Jt)*bt,jt.uniforms.u_time.value+=.25,x.render(p,v)};const p=new Bn,v=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),x=new On({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const m=new Yt,f=new Yt;p.add(f);const T=new xi(16777215,2);p.add(T);const S=new _i(16777215,4);S.position.set(5,5,5),p.add(S);const E=new vi(16777215,5,50);E.position.set(0,2,4),p.add(E);const z=new Qn,I=z.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=qe,I.repeat.set(2,2);const R=z.load("/3d-bear-arts/assets/ghost.jpg");R.wrapS=R.wrapT=qe,R.repeat.set(1,1);const B=new Bt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:Me}),Q=new Bt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),y=new Bt({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),b=new Bt({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:Me}),U=new Bt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:Me}),k=new Bt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:Me}),et=new _t(1,32,32,0,Math.PI),rt=new w(et,B),j=new w(et,U);rt.scale.set(.85,.85,.8),j.scale.set(.85,.85,.8),rt.position.y=-.2,j.position.y=-.2,rt.rotation.y=Math.PI/2,j.rotation.y=Math.PI*1.5;const nt=new be(1,32),$=new w(nt,U);$.scale.set(.85,.85,.8),$.position.set(0,-.2,0),$.rotation.y=Math.PI/2;const gt=new Yt;gt.add(rt),gt.add(j),gt.add($),m.add(gt);const pt=new _t(.6,32,32,0,Math.PI),wt=new w(pt,k);wt.scale.set(1,.95,.95),wt.position.set(0,1,0),wt.rotation.y=Math.PI*1.5;const Lt=new w(pt,Q);Lt.scale.set(1,.95,.95),Lt.position.set(0,1,0),Lt.rotation.y=Math.PI/2;const zt=new be(.6,32),at=new w(zt,U);at.position.set(0,1,0),at.rotation.y=Math.PI/2,at.scale.set(1,.95,.95);const dt=new Yt;dt.add(wt),dt.add(Lt),dt.add(at),m.add(dt);const Mt=new _t(.25,32,32),F=new w(Mt,k);F.position.set(-.45,1.35,-.1),m.add(F);const lt=new w(Mt,Q);lt.position.set(.45,1.35,-.1),m.add(lt);const st=new _t(.25,32,32,Math.PI/2,Math.PI),ft=new w(st,k);ft.scale.set(1.1,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI;const St=new _t(.25,32,32,Math.PI/2,Math.PI),it=new w(St,Q);it.scale.set(1.1,.6,.8),it.position.set(0,.84,.5),it.rotation.y=0;const g=new be(.25,32),A=new w(g,b);A.scale.set(.8,.6,.8),A.position.set(0,.84,.5),A.rotation.y=Math.PI/2;const L=new Yt;L.add(ft),L.add(it),L.add(A),m.add(L);const O=new Fn;O.moveTo(0,0),O.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),O.bezierCurveTo(-.6,.3,0,.6,0,1),O.bezierCurveTo(0,.6,.6,.3,.6,0),O.bezierCurveTo(.6,-.3,0,-.3,0,0);const N={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},q=new Jn(O,N),Z=new w(q,y);Z.scale.set(.35,.35,.35),Z.position.set(0,-.05,0),Z.rotation.y=Math.PI,Z.rotation.x=Math.PI,m.add(Z);const M=new _t(.35,32,32),_=new w(M,U);_.scale.set(.75,1.25,.65),_.position.set(-.7,-.15,.2),m.add(_);const C=new w(M,b);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),m.add(C);const X=new ee(.2,.22,.6,32),V=new w(X,U);V.position.set(-.4,-1.05,0),m.add(V);const W=new w(X,b);W.position.set(.4,-1.05,0),m.add(W);const ut=new _t(.3,32,32),ct=new w(ut,U);ct.scale.set(1,.72,1.5),ct.position.set(-.4,-1.45,.17),m.add(ct);const mt=new w(ut,b);mt.scale.set(1,.72,1.5),mt.position.set(.4,-1.45,.17),m.add(mt);const Tt=new _t(.44,32,32),ht=new w(Tt,b);ht.position.set(-.15,-.45,-.4),m.add(ht);const yt=new w(Tt,b);yt.position.set(.15,-.45,-.4),m.add(yt);const At=new _t(.18,32,32),Dt=new w(At,U);Dt.position.set(0,-.35,-.8),m.add(Dt);const Pt=new _t(.6,32,32,0,Math.PI*2,0,Math.PI/2),qt=new Bt({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Ut=new w(Pt,qt);Ut.position.set(0,-.2,0),Ut.rotation.x=Math.PI,Ut.scale.set(1.25,1.25,1.25),gt.add(Ut);const jt=new cn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),G=new w(nt,jt);G.position.set(0,-.26,0),G.scale.set(.7,.7,.7),G.rotation.x=-Math.PI/2,G.renderOrder=1,gt.add(G),new yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ne){const se=new Ge("X",{font:ne,size:.2,depth:.05}),te=new w(se,U);te.position.set(-.3,.99,.53),te.rotation.x=ce.degToRad(-5),te.rotation.y=ce.degToRad(-15),m.add(te);const ae=new Ge("O",{font:ne,size:.2,depth:.05}),ie=new w(ae,U);ie.position.set(.14,.99,.53),ie.rotation.y=ce.degToRad(12),ie.rotation.x=ce.degToRad(-5),m.add(ie)}),Dt.renderOrder=1,m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),p.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),v.position.set(t.bodyPosition.x,1,t.cameraPosition),v.lookAt(t.bodyPosition.x,0,0),v.position.z=4;let ot=.05,tt=.06,bt=.2,Et=.25,Gt=0,Jt=0;d(),He(()=>t.bodyPosition,ne=>{m.position.set(ne.x,ne.y,ne.z)}),He(()=>t.cameraPosition,ne=>{v.position.set(t.bodyPosition.x,1,ne),v.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,p)=>(Hn(),ti(rn,null,[Ot("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Ot("div",YS,[Ot("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Ot("div",jS,[Ot("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ot("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Ot("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),KS=ei($S,[["__scopeId","data-v-eb44448e"]]),ZS={class:"pixel-controls"},JS={class:"side-buttons"},QS=15,tb=5,eb=Ln({__name:"Santa",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);const a=fo(null),c=new On({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new Bn;const l=new ze(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5,Gn(()=>{if(e.value){let x=function(){const It=new Yt,ue=new Ji(.12,.05,16,100),xe=new Ht({color:16777215}),Ae=new w(ue,xe);Ae.position.set(0,1.65,0),Ae.rotation.x=Math.PI/2,It.add(Ae);const P=new Ri(.15,.3,32),K=new Ht({color:16711680}),D=new w(P,K);D.position.set(0,1.8,0),It.add(D);const Y=new _t(.05,32,32),H=new Ht({color:16777215}),vt=new w(Y,H);return vt.position.set(0,1.93,0),It.add(vt),It.position.set(0,-.1,0),It},m=function(){const It=new Yt,ue=new _t(.15,32,32),xe=new Ht({color:16764057}),Ae=new w(ue,xe);Ae.position.set(0,.4,0),It.add(Ae);const P=new Ri(.08,.15,32);new Ht({color:16764057});const K=new w(P,pt);K.position.set(-.1,.55,0),K.rotation.z=Math.PI/6,It.add(K);const D=new w(P,pt);D.position.set(.1,.55,0),D.rotation.z=-Math.PI/6,It.add(D);const Y=new ee(.12,.15,.3,32),H=new Ht({color:16764057}),vt=new w(Y,H);vt.position.set(0,.2,0),It.add(vt);const Rt=new ee(.05,.05,.2,32),Ft=new Ht({color:16764057}),Nt=new w(Rt,Ft);Nt.position.set(-.07,-.05,.05),It.add(Nt);const $t=new w(Rt,Ft);$t.position.set(.07,-.05,.05),It.add($t);const Xt=new ee(.04,.04,.2,32),kt=new Ht({color:16764057}),Qt=new w(Xt,pt);Qt.position.set(-.15,.25,0),Qt.rotation.z=Math.PI/4,It.add(Qt);const re=new w(Xt,kt);re.position.set(.15,.25,0),re.rotation.z=-Math.PI/4,It.add(re);const de=new ee(.03,.03,.25,32),ye=new Ht({color:16764057}),le=new w(de,ye);return le.position.set(0,.1,-.2),le.rotation.x=Math.PI/4,It.add(le),It.scale.set(.75,.75,.75),It.position.set(.2,0,.2),It},f=function(){const It=new Yt,ue=new _t(.2,32,32),xe=new Ht({color:16764057}),Ae=new w(ue,xe);Ae.position.set(0,1,0),It.add(Ae);const P=new Ht({color:16777215}),K=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const bi of K){const ns=new _t(bi.size,16,16),Ni=new w(ns,P);Ni.position.set(bi.x,bi.y-.06,bi.z-.01),It.add(Ni)}const D=new Ht({color:16777215}),Y=new ee(.05,.06,.1,32),H=new w(Y,D);H.position.set(-.06,.93,.18),H.rotation.z=Math.PI/4;const vt=new ee(.05,.06,.1,32),Rt=new w(vt,D);Rt.position.set(.06,.93,.18),Rt.rotation.z=-Math.PI/4;const Ft=new Ji(.12,.05,16,100),Nt=new Ht({color:16777215}),$t=new w(Ft,Nt);$t.position.set(0,1.15,0),$t.rotation.x=Math.PI/2,It.add($t);const Xt=new Ri(.15,.3,32),kt=new Ht({color:16711680}),Qt=new w(Xt,kt);Qt.position.set(0,1.3,0),It.add(Qt);const re=new _t(.05,32,32),de=new Ht({color:16777215}),ye=new w(re,de);ye.position.set(0,1.43,0),It.add(ye);const le=new ee(.2,.25,.6,32),Zt=new Ht({color:16711680}),Pe=new w(le,Zt);Pe.position.set(0,.5,0),It.add(Pe);const Ct=new ee(.25,.25,.1,32),Re=new Ht({color:0}),Ce=new w(Ct,Re);Ce.position.set(0,.4,.005),It.add(Ce);const we=new ee(.06,.06,.3,32),tn=new Ht({color:16711680}),Ee=new w(we,tn);Ee.position.set(-.25,.75,0),Ee.rotation.z=Math.PI/4,It.add(Ee);const $e=new w(we,tn);$e.position.set(.25,.75,0),$e.rotation.z=-Math.PI/4,It.add($e);const wn=new _t(.07,32,32),ke=new Ht({color:16777215}),un=new w(wn,ke);un.position.set(-.35,.85,0),It.add(un);const Vn=new w(wn,ke);Vn.position.set(.35,.85,0),It.add(Vn);const fn=new ee(.1,.1,.15,32),Sn=new Ht({color:16711680}),Dn=new ee(.08,.08,.4,32),sn=new Ht({color:0}),bn=new w(Dn,sn);bn.position.set(-.1,.1,0),It.add(bn);const Un=new w(fn,Sn);Un.position.set(-.1,-.05,0),It.add(Un);const Wn=new w(Dn,sn);Wn.position.set(.1,.1,0),It.add(Wn);const pn=new w(fn,Sn);pn.position.set(.1,-.05,0),It.add(pn);const mn=new _t(.12,32,32),Mi=new Ht({color:16711680}),wi=new w(mn,Mi);wi.scale.set(1,.7,1.5),wi.position.set(-.1,-.12,.12),It.add(wi);const Si=new w(mn,Mi);return Si.scale.set(1,.7,1.5),Si.position.set(.1,-.1,.12),It.add(Si),It.scale.set(.25,.25,.25),It.position.set(.2,.5,-0),It},T=function(){let It=0;function ue(){requestAnimationFrame(ue),It+=.4,ae.position.y=.45+Math.sin(It)*.5,b.render(Q,y)}ue()},S=function(It){let ue=1,xe=0;function Ae(){requestAnimationFrame(Ae),It.position.x+=.01*ue,It.position.x>=.5?(ue=-1,It.rotation.y=Math.PI):It.position.x<=0&&(ue=1,It.rotation.y=0),xe+=1,It.position.y=-.2+Math.sin(xe)*.01,It.position.z=.5,b.render(Q,y)}Ae()},E=function(){const It=new Yt,ue=new Cn(.7,.8,.7),xe=new Ht({color:9127187}),Ae=new w(ue,xe);Ae.position.set(0,.4,0),It.add(Ae);const P=new Ri(.55,.25,4),K=new Ht({color:16777215}),D=new w(P,K);D.position.set(0,.9,0),D.rotation.y=Math.PI/4,It.add(D);const Y=new Cn(.25,.35,.05),H=new Ht({color:6636321}),vt=new w(Y,H);vt.position.set(0,.2,.36),It.add(vt);const Rt=new Cn(.15,.15,.05),Ft=new Ht({color:8900331}),Nt=new w(Rt,Ft);Nt.position.set(-.2,.5,.38),It.add(Nt);const $t=new w(Rt,Ft);$t.position.set(.2,.5,.38),It.add($t);const Xt=new Cn(.2,.4,.2),kt=new Ht({color:8421504}),Qt=new w(Xt,kt);Qt.position.set(0,.95,0),It.add(Qt);const re=new Ji(.07,.04,32,100),de=new Ht({color:2263842}),ye=new w(re,de);return ye.position.set(0,.45,.38),It.add(ye),It.position.set(.22,-.2,0),It.scale.set(.5,.5,.5),It},z=function(It=1,ue={x:0,y:0,z:0}){const xe=new Yt,Ae=new ee(1.2,.9,3,32),P=new Ht({color:25153}),K=new w(Ae,P);xe.add(K);const D=new ee(1.3,1.3,.2,32),Y=new Ht({color:3355443}),H=new w(D,Y);H.position.y=1.6,xe.add(H);const vt=2,Rt=new ee(1.1,1.1,vt,32),Ft=new Ht({color:9127187}),Nt=new w(Rt,Ft);return Nt.position.y=0,new Qn().load("/3d-bear-arts/assets/starbucks-logo.png",function(Xt){Xt.repeat.set(4,1),Xt.offset.set(.25,0),Xt.wrapS=qe,Xt.wrapT=qe;const kt=new Ht({color:9127187,map:Xt,transparent:!0}),Qt=new ee(1.1,1.05,1.5,32),re=new w(Qt,kt);re.position.y=-.5,xe.add(re)}),xe.scale.set(It,It,It),xe.position.set(ue.x,ue.y,ue.z),xe},I=function(){let It=1;function ue(){requestAnimationFrame(ue),It-=.1,_e.position.y=.5+Math.sin(It)*.8,b.render(Q,y)}ue()},R=function(){requestAnimationFrame(R);const It=Se.attributes.position.array;for(let ue=1;ue<It.length;ue+=3)It[ue]-=.02,It[ue]<-10&&(It[ue]=10);Se.attributes.position.needsUpdate=!0,b.render(Q,y)},B=function(){requestAnimationFrame(B),i.value&&(U.rotation.y+=.03),s.value&&(U.rotation.y-=.03),o.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),_.uniforms.u_time.value+=.5,ie.rotation.y+=.45,Te.rotation.y+=.05,_e.rotation.y+=.08,b.render(Q,y)};const Q=new Bn,y=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),b=new On({antialias:!0,alpha:!0});b.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(b.domElement);const U=new Yt,k=new Yt;Q.add(k);const et=new xi(16777215,2);Q.add(et);const rt=new _i(16777215,4);rt.position.set(5,5,5),Q.add(rt);const j=new vi(16777215,5,50);j.position.set(0,2,4),Q.add(j);const nt=new Qn,$=nt.load("/3d-bear-arts/assets/house.jpg");$.wrapS=$.wrapT=qe,$.repeat.set(1,1),nt.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const gt=new Bt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Me});new Bt({color:16777215,metalness:.3,map:$,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.4,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Me});const pt=new Bt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Me}),wt=new ja().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);Q.environment=wt;const Lt=new Bt({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:Me}),zt=new Bt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),at=new _t(1,32,32,0,Math.PI),dt=new w(at,gt),Mt=new w(at,pt);dt.scale.set(.85,.85,.8),Mt.scale.set(.85,.85,.8),dt.position.y=-.2,Mt.position.y=-.2,dt.rotation.y=Math.PI/2,Mt.rotation.y=Math.PI*1.5;const F=new be(1,32),lt=new w(F,Lt);lt.scale.set(.85,.85,.8),lt.position.set(0,-.2,0),lt.rotation.y=Math.PI/2;const st=new Yt;st.add(dt),st.add(Mt),st.add(lt),U.add(st);const ft=new _t(.6,32,32,0,Math.PI),St=new w(ft,pt);St.scale.set(1,.95,.95),St.position.set(0,1,0),St.rotation.y=Math.PI*1.5;const it=new w(ft,gt);it.scale.set(1,.95,.95),it.position.set(0,1,0),it.rotation.y=Math.PI/2;const g=new be(.6,32),A=new w(g,Lt);A.position.set(0,1,0),A.rotation.y=Math.PI/2,A.scale.set(1,.95,.95);const L=new Yt;L.add(St),L.add(it),L.add(A),U.add(L);const O=new _t(.6,32,32,0,Math.PI*2,0,Math.PI/2),N=new Bt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),q=new w(O,N);q.position.set(0,-.2,0),q.rotation.x=Math.PI,q.scale.set(1.25,1.25,1.25),st.add(q);const Z=new Bt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:Me,transparent:!1,opacity:.8}),M=new w(F,Z);M.scale.set(.7,.7,.7),M.position.set(0,-.3,0),M.rotation.x=Math.PI/2,M.renderOrder=1,st.add(M),U.add(st);const _=new cn({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
            `}),C=new w(F,_);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,st.add(C);const X=new _t(.25,32,32),V=new w(X,pt);V.position.set(-.45,1.35,-.1),U.add(V);const W=new w(X,gt);W.position.set(.45,1.35,-.1),U.add(W);const ut=new _t(.25,32,32,Math.PI/2,Math.PI),ct=new w(ut,pt);ct.scale.set(1.1,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=Math.PI;const mt=new _t(.25,32,32,Math.PI/2,Math.PI),Tt=new w(mt,gt);Tt.scale.set(1.1,.6,.8),Tt.position.set(0,.84,.5),Tt.rotation.y=0;const ht=new be(.25,32),yt=new w(ht,Lt);yt.scale.set(.8,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=Math.PI/2;const At=new Yt;At.add(ct),At.add(Tt),At.add(yt),U.add(At);const Dt=new _t(.35,32,32),Pt=new w(Dt,pt);Pt.scale.set(.75,1.25,.65),Pt.position.set(-.7,-.15,.2),U.add(Pt);const qt=new w(Dt,gt);qt.scale.set(.75,1.25,.65),qt.position.set(.7,-.15,.2),U.add(qt);const Ut=new ee(.2,.22,.6,32),jt=new w(Ut,pt);jt.position.set(-.4,-1.05,0),U.add(jt);const G=new w(Ut,gt);G.position.set(.4,-1.05,0),U.add(G);const xt=new _t(.3,32,32),ot=new w(xt,pt);ot.scale.set(1,.72,1.5),ot.position.set(-.4,-1.45,.17),U.add(ot);const tt=new w(xt,gt);tt.scale.set(1,.72,1.5),tt.position.set(.4,-1.45,.17),U.add(tt);const bt=new _t(.44,32,32),Et=new w(bt,pt);Et.position.set(-.15,-.45,-.4),U.add(Et);const Gt=new w(bt,zt);Gt.position.set(.15,-.45,-.4),U.add(Gt);const Jt=new _t(.18,32,32),ne=new w(Jt,pt);ne.position.set(0,-.35,-.8),U.add(ne),new yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(It){const ue=new Ge("X",{font:It,size:.2,depth:.05}),xe=new w(ue,zt);xe.position.set(-.3,.99,.53),xe.rotation.x=ce.degToRad(-5),xe.rotation.y=ce.degToRad(-15),U.add(xe);const Ae=new Ge("O",{font:It,size:.2,depth:.05}),P=new w(Ae,zt);P.position.set(.14,.99,.53),P.rotation.y=ce.degToRad(12),P.rotation.x=ce.degToRad(-5),U.add(P)});const te=x();U.add(te),m();const ae=f();U.add(ae);const ie=f();ie.position.set(-.2,-.1,.5),U.add(ie),T(),a.value=f(),U.add(a.value),S(a.value);const ve=E();U.add(ve);const oe=E();oe.position.set(-.2,-.2,0),oe.scale.set(.35,.35,.35),U.add(oe);const Te=z(.1,{x:0,y:0,z:1}),_e=z(1.1,{x:0,y:-1.2,z:0});I();const Xe=1e3,Se=new Mn,je=[];for(let It=0;It<Xe;It++){const ue=(Math.random()-.5)*20,xe=Math.random()*20,Ae=(Math.random()-.5)*20;je.push(ue,xe,Ae)}Se.setAttribute("position",new Ye(je,3));const Ze=new Aa({color:16777215,size:.1,transparent:!0,opacity:.8}),kn=new ma(Se,Ze);U.add(kn),R(),U.scale.set(1.2,1.2,1.2),Q.add(U),U.scale.set(1.4,1.4,1.4),U.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),Q.add(U),U.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4,U.rotation.x=.1,B(),He(()=>t.bodyPosition,It=>{U.position.set(It.x,It.y,It.z)}),He(()=>t.cameraPosition,It=>{y.position.set(t.bodyPosition.x,1,It),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),b.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function p(){r.value=!0}function v(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let x=0;x<QS;x++){const m=document.createElement("div");m.classList.add("confetti"),m.style.left=`${Math.random()*100}vw`,m.style.animationDuration=`${Math.random()*3+4}s`,m.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(m)}for(let x=0;x<tb;x++){const m=document.createElement("div");m.classList.add("light"),document.body.appendChild(m)}return(x,m)=>(Hn(),ti(rn,null,[Ot("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Ot("div",ZS,[Ot("button",{class:"pixel-btn up",onMousedown:d,onMouseup:v},"UP",32),Ot("div",JS,[Ot("button",{class:"pixel-btn left",onMousedown:h,onMouseup:v},"LEFT",32),Ot("button",{class:"pixel-btn right",onMousedown:u,onMouseup:v},"RIGHT",32)]),Ot("button",{class:"pixel-btn down",onMousedown:p,onMouseup:v},"DOWN",32)])],64))}}),nb=ei(eb,[["__scopeId","data-v-9079e50a"]]),ib={class:"pixel-controls"},sb={class:"side-buttons"},ob=15,rb=5,ab=Ln({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);const a=fo(null),c=new On({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new Bn;const l=new ze(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5,Gn(()=>{if(e.value){let x=function(){const D=new Yt,Y=new Ji(.12,.05,16,100),H=new Ht({color:16777215}),vt=new w(Y,H);vt.position.set(0,1.65,0),vt.rotation.x=Math.PI/2,D.add(vt);const Rt=new Ri(.15,.3,32),Ft=new Ht({color:16711680}),Nt=new w(Rt,Ft);Nt.position.set(0,1.8,0),D.add(Nt);const $t=new _t(.05,32,32),Xt=new Ht({color:16777215}),kt=new w($t,Xt);return kt.position.set(0,1.93,0),D.add(kt),D.position.set(0,-.1,0),D},m=function(){const D=new Yt,Y=new _t(.15,32,32),H=new Ht({color:16764057}),vt=new w(Y,H);vt.position.set(0,.4,0),D.add(vt);const Rt=new Ri(.08,.15,32);new Ht({color:16764057});const Ft=new w(Rt,pt);Ft.position.set(-.1,.55,0),Ft.rotation.z=Math.PI/6,D.add(Ft);const Nt=new w(Rt,pt);Nt.position.set(.1,.55,0),Nt.rotation.z=-Math.PI/6,D.add(Nt);const $t=new ee(.12,.15,.3,32),Xt=new Ht({color:16764057}),kt=new w($t,Xt);kt.position.set(0,.2,0),D.add(kt);const Qt=new ee(.05,.05,.2,32),re=new Ht({color:16764057}),de=new w(Qt,re);de.position.set(-.07,-.05,.05),D.add(de);const ye=new w(Qt,re);ye.position.set(.07,-.05,.05),D.add(ye);const le=new ee(.04,.04,.2,32),Zt=new Ht({color:16764057}),Pe=new w(le,pt);Pe.position.set(-.15,.25,0),Pe.rotation.z=Math.PI/4,D.add(Pe);const Ct=new w(le,Zt);Ct.position.set(.15,.25,0),Ct.rotation.z=-Math.PI/4,D.add(Ct);const Re=new ee(.03,.03,.25,32),Ce=new Ht({color:16764057}),we=new w(Re,Ce);return we.position.set(0,.1,-.2),we.rotation.x=Math.PI/4,D.add(we),D.scale.set(.75,.75,.75),D.position.set(.2,0,.2),D},f=function(){const D=new Yt,Y=new _t(.2,32,32),H=new Ht({color:16764057}),vt=new w(Y,H);vt.position.set(0,1,0),D.add(vt);const Rt=new Ht({color:16777215}),Ft=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Sr of Ft){const Hp=new _t(Sr.size,16,16),Fu=new w(Hp,Rt);Fu.position.set(Sr.x,Sr.y-.06,Sr.z-.01),D.add(Fu)}const Nt=new Ht({color:16777215}),$t=new ee(.05,.06,.1,32),Xt=new w($t,Nt);Xt.position.set(-.06,.93,.18),Xt.rotation.z=Math.PI/4;const kt=new ee(.05,.06,.1,32),Qt=new w(kt,Nt);Qt.position.set(.06,.93,.18),Qt.rotation.z=-Math.PI/4;const re=new Ji(.12,.05,16,100),de=new Ht({color:16777215}),ye=new w(re,de);ye.position.set(0,1.15,0),ye.rotation.x=Math.PI/2,D.add(ye);const le=new Ri(.15,.3,32),Zt=new Ht({color:16711680}),Pe=new w(le,Zt);Pe.position.set(0,1.3,0),D.add(Pe);const Ct=new _t(.05,32,32),Re=new Ht({color:16777215}),Ce=new w(Ct,Re);Ce.position.set(0,1.43,0),D.add(Ce);const we=new ee(.2,.25,.6,32),tn=new Ht({color:16711680}),Ee=new w(we,tn);Ee.position.set(0,.5,0),D.add(Ee);const $e=new ee(.25,.25,.1,32),wn=new Ht({color:0}),ke=new w($e,wn);ke.position.set(0,.4,.005),D.add(ke);const un=new ee(.06,.06,.3,32),Vn=new Ht({color:16711680}),fn=new w(un,Vn);fn.position.set(-.25,.75,0),fn.rotation.z=Math.PI/4,D.add(fn);const Sn=new w(un,Vn);Sn.position.set(.25,.75,0),Sn.rotation.z=-Math.PI/4,D.add(Sn);const Dn=new _t(.07,32,32),sn=new Ht({color:16777215}),bn=new w(Dn,sn);bn.position.set(-.35,.85,0),D.add(bn);const Un=new w(Dn,sn);Un.position.set(.35,.85,0),D.add(Un);const Wn=new ee(.1,.1,.15,32),pn=new Ht({color:16711680}),mn=new ee(.08,.08,.4,32),Mi=new Ht({color:0}),wi=new w(mn,Mi);wi.position.set(-.1,.1,0),D.add(wi);const Si=new w(Wn,pn);Si.position.set(-.1,-.05,0),D.add(Si);const bi=new w(mn,Mi);bi.position.set(.1,.1,0),D.add(bi);const ns=new w(Wn,pn);ns.position.set(.1,-.05,0),D.add(ns);const Ni=new _t(.12,32,32),Nu=new Ht({color:16711680}),$a=new w(Ni,Nu);$a.scale.set(1,.7,1.5),$a.position.set(-.1,-.12,.12),D.add($a);const Ka=new w(Ni,Nu);return Ka.scale.set(1,.7,1.5),Ka.position.set(.1,-.1,.12),D.add(Ka),D.scale.set(.25,.25,.25),D.position.set(.2,.5,-0),D},T=function(){let D=0;function Y(){requestAnimationFrame(Y),D+=.4,ae.position.y=.45+Math.sin(D)*.5,b.render(Q,y)}Y()},S=function(D){let Y=1,H=0;function vt(){requestAnimationFrame(vt),D.position.x+=.01*Y,D.position.x>=.5?(Y=-1,D.rotation.y=Math.PI):D.position.x<=0&&(Y=1,D.rotation.y=0),H+=1,D.position.y=-.2+Math.sin(H)*.01,D.position.z=.5,b.render(Q,y)}vt()},E=function(){const D=new Yt,Y=new Cn(.7,.8,.7),H=new Ht({color:9127187}),vt=new w(Y,H);vt.position.set(0,.4,0),D.add(vt);const Rt=new Ri(.55,.25,4),Ft=new Ht({color:16777215}),Nt=new w(Rt,Ft);Nt.position.set(0,.9,0),Nt.rotation.y=Math.PI/4,D.add(Nt);const $t=new Cn(.25,.35,.05),Xt=new Ht({color:6636321}),kt=new w($t,Xt);kt.position.set(0,.2,.36),D.add(kt);const Qt=new Cn(.15,.15,.05),re=new Ht({color:8900331}),de=new w(Qt,re);de.position.set(-.2,.5,.38),D.add(de);const ye=new w(Qt,re);ye.position.set(.2,.5,.38),D.add(ye);const le=new Cn(.2,.4,.2),Zt=new Ht({color:8421504}),Pe=new w(le,Zt);Pe.position.set(0,.95,0),D.add(Pe);const Ct=new Ji(.07,.04,32,100),Re=new Ht({color:2263842}),Ce=new w(Ct,Re);return Ce.position.set(0,.45,.38),D.add(Ce),D.position.set(.22,-.2,0),D.scale.set(.5,.5,.5),D},z=function(D=1,Y={x:0,y:0,z:0}){const H=new Yt,vt=new ee(1.2,.9,3,32),Rt=new Ht({color:25153}),Ft=new w(vt,Rt);H.add(Ft);const Nt=new ee(1.3,1.3,.2,32),$t=new Ht({color:3355443}),Xt=new w(Nt,$t);return Xt.position.y=1.6,H.add(Xt),new Qn().load("/3d-bear-arts/assets/starbucks-logo.png",function(Qt){Qt.repeat.set(4,1),Qt.offset.set(.25,0),Qt.wrapS=qe,Qt.wrapT=qe;const re=new Ht({color:9127187,map:Qt,transparent:!0}),de=new ee(1.1,1.05,1.5,32),ye=new w(de,re);ye.position.y=-.5,H.add(ye)}),H.scale.set(D,D,D),H.position.set(Y.x,Y.y,Y.z),H},I=function(){requestAnimationFrame(I);const D=Se.attributes.position.array;for(let Y=1;Y<D.length;Y+=3)D[Y]-=.02,D[Y]<-10&&(D[Y]=10);Se.attributes.position.needsUpdate=!0,b.render(Q,y)},R=function(){requestAnimationFrame(R);const D=Ae.attributes.position.array;for(let Y=1;Y<D.length;Y+=3)D[Y]-=.02,D[Y]<-xe&&(D[Y]=xe);Ae.attributes.position.needsUpdate=!0,b.render(Q,y)},B=function(){requestAnimationFrame(B),i.value&&(U.rotation.y+=.03),s.value&&(U.rotation.y-=.03),o.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),_.uniforms.u_time.value+=.5,ie.rotation.y+=.45,Te.rotation.y+=.05,_e.rotation.y+=.05,U.rotation.y-=.05,b.render(Q,y)};const Q=new Bn,y=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),b=new On({antialias:!0,alpha:!0});b.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(b.domElement);const U=new Yt,k=new Yt;Q.add(k);const et=new xi(16777215,2);Q.add(et);const rt=new _i(16777215,4);rt.position.set(5,5,5),Q.add(rt);const j=new vi(16777215,5,50);j.position.set(0,2,4),Q.add(j);const nt=new Qn,$=nt.load("/3d-bear-arts/assets/house.jpg");$.wrapS=$.wrapT=qe,$.repeat.set(1,1),nt.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const gt=new Bt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Me});new Bt({color:16777215,metalness:.3,map:$,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.4,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Me});const pt=new Bt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:Me}),wt=new ja().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);Q.environment=wt;const Lt=new Bt({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:Me}),zt=new Bt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),at=new _t(1,32,32,0,Math.PI),dt=new w(at,gt),Mt=new w(at,pt);dt.scale.set(.85,.85,.8),Mt.scale.set(.85,.85,.8),dt.position.y=-.2,Mt.position.y=-.2,dt.rotation.y=Math.PI/2,Mt.rotation.y=Math.PI*1.5;const F=new be(1,32),lt=new w(F,Lt);lt.scale.set(.85,.85,.8),lt.position.set(0,-.2,0),lt.rotation.y=Math.PI/2;const st=new Yt;st.add(dt),st.add(Mt),st.add(lt),U.add(st);const ft=new _t(.6,32,32,0,Math.PI),St=new w(ft,pt);St.scale.set(1,.95,.95),St.position.set(0,1,0),St.rotation.y=Math.PI*1.5;const it=new w(ft,gt);it.scale.set(1,.95,.95),it.position.set(0,1,0),it.rotation.y=Math.PI/2;const g=new be(.6,32),A=new w(g,Lt);A.position.set(0,1,0),A.rotation.y=Math.PI/2,A.scale.set(1,.95,.95);const L=new Yt;L.add(St),L.add(it),L.add(A),U.add(L);const O=new _t(.6,32,32,0,Math.PI*2,0,Math.PI/2),N=new Bt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),q=new w(O,N);q.position.set(0,-.2,0),q.rotation.x=Math.PI,q.scale.set(1.25,1.25,1.25),st.add(q);const Z=new Bt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:Me,transparent:!1,opacity:.8}),M=new w(F,Z);M.scale.set(.7,.7,.7),M.position.set(0,-.3,0),M.rotation.x=Math.PI/2,M.renderOrder=1,st.add(M),U.add(st);const _=new cn({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
            `}),C=new w(F,_);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,st.add(C);const X=new _t(.25,32,32),V=new w(X,pt);V.position.set(-.45,1.35,-.1),U.add(V);const W=new w(X,gt);W.position.set(.45,1.35,-.1),U.add(W);const ut=new _t(.25,32,32,Math.PI/2,Math.PI),ct=new w(ut,pt);ct.scale.set(1.1,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=Math.PI;const mt=new _t(.25,32,32,Math.PI/2,Math.PI),Tt=new w(mt,gt);Tt.scale.set(1.1,.6,.8),Tt.position.set(0,.84,.5),Tt.rotation.y=0;const ht=new be(.25,32),yt=new w(ht,Lt);yt.scale.set(.8,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=Math.PI/2;const At=new Yt;At.add(ct),At.add(Tt),At.add(yt),U.add(At);const Dt=new _t(.35,32,32),Pt=new w(Dt,pt);Pt.scale.set(.75,1.25,.65),Pt.position.set(-.7,-.15,.2),U.add(Pt);const qt=new w(Dt,gt);qt.scale.set(.75,1.25,.65),qt.position.set(.7,-.15,.2),U.add(qt);const Ut=new ee(.2,.22,.6,32),jt=new w(Ut,pt);jt.position.set(-.4,-1.05,0),U.add(jt);const G=new w(Ut,gt);G.position.set(.4,-1.05,0),U.add(G);const xt=new _t(.3,32,32),ot=new w(xt,pt);ot.scale.set(1,.72,1.5),ot.position.set(-.4,-1.45,.17),U.add(ot);const tt=new w(xt,gt);tt.scale.set(1,.72,1.5),tt.position.set(.4,-1.45,.17),U.add(tt);const bt=new _t(.44,32,32),Et=new w(bt,pt);Et.position.set(-.15,-.45,-.4),U.add(Et);const Gt=new w(bt,pt);Gt.position.set(.15,-.45,-.4),U.add(Gt);const Jt=new _t(.18,32,32),ne=new w(Jt,pt);ne.position.set(0,-.35,-.8),U.add(ne),new yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(D){const Y=new Ge("X",{font:D,size:.2,depth:.05}),H=new w(Y,zt);H.position.set(-.3,.99,.53),H.rotation.x=ce.degToRad(-5),H.rotation.y=ce.degToRad(-15),U.add(H);const vt=new Ge("O",{font:D,size:.2,depth:.05}),Rt=new w(vt,zt);Rt.position.set(.14,.99,.53),Rt.rotation.y=ce.degToRad(12),Rt.rotation.x=ce.degToRad(-5),U.add(Rt)});const te=x();U.add(te),m();const ae=f();U.add(ae);const ie=f();ie.position.set(-.2,-.1,.5),U.add(ie),T(),a.value=f(),U.add(a.value),S(a.value);const ve=E();U.add(ve);const oe=E();oe.position.set(-.2,-.2,0),oe.scale.set(.35,.35,.35),U.add(oe);const Te=z(.1,{x:0,y:0,z:1}),_e=z(.6,{x:0,y:-1.5,z:0}),Xe=1e3,Se=new Mn,je=[];for(let D=0;D<Xe;D++){const Y=(Math.random()-.5)*20,H=Math.random()*20,vt=(Math.random()-.5)*20;je.push(Y,H,vt)}Se.setAttribute("position",new Ye(je,3));const Ze=new Aa({color:16777215,size:.1,transparent:!0,opacity:.8}),kn=new ma(Se,Ze);U.add(kn),I();const It=2e3,ue=[],xe=.6;for(let D=0;D<It;D++){const Y=(Math.random()-.5)*xe*2,H=(Math.random()-.5)*xe*2,vt=(Math.random()-.5)*xe*2;Math.sqrt(Y*Y+H*H+vt*vt)<xe&&ue.push(Y,H,vt)}const Ae=new Mn;Ae.setAttribute("position",new Ye(ue,3)),new Aa({color:16777215,size:.05,transparent:!0,opacity:.9}),new ma(Ae,N).position.set(0,-.2,0),new ma(Ae,Z).position.set(0,.8,0),R(),U.scale.set(.85,.85,.85),U.position.set(t.bodyPosition.x,t.bodyPosition.y+.9,t.bodyPosition.z),Q.add(U),Q.add(_e),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4,U.rotation.x=.1,B(),He(()=>t.bodyPosition,D=>{U.position.set(D.x,D.y,D.z)}),He(()=>t.cameraPosition,D=>{y.position.set(t.bodyPosition.x,1,D),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),b.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function p(){r.value=!0}function v(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let x=0;x<ob;x++){const m=document.createElement("div");m.classList.add("confetti"),m.style.left=`${Math.random()*100}vw`,m.style.animationDuration=`${Math.random()*3+4}s`,m.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(m)}for(let x=0;x<rb;x++){const m=document.createElement("div");m.classList.add("light"),document.body.appendChild(m)}return(x,m)=>(Hn(),ti(rn,null,[Ot("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Ot("div",ib,[Ot("button",{class:"pixel-btn up",onMousedown:d,onMouseup:v},"UP",32),Ot("div",sb,[Ot("button",{class:"pixel-btn left",onMousedown:h,onMouseup:v},"LEFT",32),Ot("button",{class:"pixel-btn right",onMousedown:u,onMouseup:v},"RIGHT",32)]),Ot("button",{class:"pixel-btn down",onMousedown:p,onMouseup:v},"DOWN",32)])],64))}}),cb=ei(ab,[["__scopeId","data-v-ceb84432"]]),lb={key:0,class:"bear-face-container"},ub=Ln({__name:"BearFaceWhite",setup(n){const t=Kt(null),e=Kt(!1);return Gn(()=>{const i=t.value;if(i){i.width=window.innerWidth,i.height=window.innerHeight*.7;const s=i.getContext("2d");s&&(()=>{const r=i.width/2,a=i.height/1.8,c=i.height/2,l=i.height/2.05,h=c*.45,u=c*.18,d=c*.3,p=c*.275,v=d*.35,x=d*.32;s.save(),s.beginPath(),s.rect(0,0,i.width/2,i.height),s.clip(),s.lineWidth=15,s.strokeStyle="#FF69B4",s.beginPath(),s.arc(r-c*.85,a-l*.8,h,0,Math.PI*2,!0),s.stroke(),s.beginPath(),s.arc(r+c*.85,a-c*.8,h,0,Math.PI*2,!0),s.stroke(),s.lineWidth=15,s.beginPath(),s.arc(r,a,l,0,Math.PI*2,!0),s.stroke(),s.lineWidth=15,s.beginPath(),s.arc(r-c*.4,a-c*.2,u,0,Math.PI*2,!0),s.stroke(),s.beginPath(),s.moveTo(r+c*.2,a-c*.3),s.lineTo(r+c*.5,a-c*.05),s.moveTo(r+c*.5,a-c*.3),s.lineTo(r+c*.2,a-c*.05),s.stroke(),s.beginPath(),s.ellipse(r,a+c*.4,p*1.5,p,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.arc(r,a+c*.3,x,0,Math.PI*2,!0),s.stroke(),s.restore(),s.save(),s.beginPath(),s.rect(i.width/2,0,i.width/2,i.height),s.clip(),s.fillStyle="#FF69B4",s.beginPath(),s.arc(r-c*.85,a-c*.8,h,0,Math.PI*2,!0),s.fill(),s.beginPath(),s.arc(r+c*.85,a-c*.8,h,0,Math.PI*2,!0),s.fill(),s.beginPath(),s.arc(r,a,c,0,Math.PI*2,!0),s.fill(),s.fillStyle="#FF69B4",s.beginPath(),s.arc(r-c*.4,a-c*.2,u,0,Math.PI*2,!0),s.fill(),s.lineWidth=15,s.beginPath(),s.moveTo(r+c*.2,a-c*.3),s.lineTo(r+c*.5,a-c*.05),s.moveTo(r+c*.5,a-c*.3),s.lineTo(r+c*.2,a-c*.05),s.strokeStyle="#000000",s.stroke(),s.fillStyle="#000000",s.beginPath(),s.ellipse(r,a+c*.4,d*1.5,d,0,0,Math.PI*2),s.fill(),s.fillStyle="#FF69B4",s.beginPath(),s.arc(r,a+c*.3,v*1.2,0,Math.PI*2,!0),s.fill(),s.restore()})()}}),(i,s)=>e.value?I0("",!0):(Hn(),ti("div",lb,[Ot("canvas",{ref_key:"bearCanvas",ref:t},null,512)]))}}),hb=ei(ub,[["__scopeId","data-v-40f5560a"]]),db={class:"pixel-controls"},fb={class:"side-buttons"},pb=15,mb=5,gb=Ln({__name:"SliverBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);Gn(()=>{if(e.value){let d=function(){f.visible=!1,R.update(m,v),f.visible=!0,requestAnimationFrame(d)},p=function(){requestAnimationFrame(p),pt.uniforms.time.value+=.05,nt.uniforms.time.value+=.05,i.value&&(f.rotation.y+=.05),s.value&&(f.rotation.y-=.07),o.value&&(f.rotation.x-=.05),r.value&&(f.rotation.x+=.05),m.render(v,x)};const v=new Bn,x=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),m=new On({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const f=new Yt,T=new xi(16777215,2);v.add(T);const S=new _i(16777215,4);S.position.set(5,5,5),v.add(S);const E=new vi(16777215,5,50);E.position.set(0,2,4),v.add(E);const z=new Qn,I=new Ru(256,{format:Zn,generateMipmaps:!0,minFilter:Yi}),R=new Au(1,1e3,I);new Bt({color:12632256,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:I.texture,envMapIntensity:1.5}),v.add(R),v.environment=I.texture,d();const Q=new ja().load(["/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg"]);v.environment=Q;const y=new Bt({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:Q,reflectivity:1}),b=new Bt({color:"hotpink",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.3,envMap:Q,reflectivity:0}),U=z.load("/3d-bear-arts/assets/popbear1.jpg"),k=new Bt({color:"hotpink",map:U,metalness:.3,roughness:.5,transparent:!0,opacity:1}),et=new cn({uniforms:{time:{value:0},color1:{value:new ge(16766720)},color2:{value:new ge(16007990)}},vertexShader:`
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
      `,j=`
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
      `,nt=new cn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:rt,fragmentShader:j,transparent:!1,depthWrite:!0}),$=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,gt=`
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
      `,pt=new cn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:$,fragmentShader:gt,transparent:!1,depthWrite:!0}),wt=new _t(1,32,32,0,Math.PI),Lt=new w(wt,b),zt=new w(wt,y);Lt.scale.set(.85,.85,.8),zt.scale.set(.85,.85,.8),Lt.position.y=-.2,zt.position.y=-.2,Lt.rotation.y=Math.PI/2,zt.rotation.y=Math.PI*1.5;const at=new be(1,32),dt=new w(at,k);dt.scale.set(.85,.85,.8),dt.position.set(0,-.2,0),dt.rotation.y=Math.PI/2;const Mt=new Yt;Mt.add(Lt),Mt.add(zt),Mt.add(dt),f.add(Mt);const F=new _t(.6,32,32,0,Math.PI),lt=new w(F,y);lt.scale.set(1,.95,.95),lt.position.set(0,1,0),lt.rotation.y=Math.PI*1.5;const st=new w(F,b);st.scale.set(1,.95,.95),st.position.set(0,1,0),st.rotation.y=Math.PI/2;const ft=new be(.6,32),St=new w(ft,k);St.position.set(0,1,0),St.rotation.y=Math.PI/2,St.scale.set(1,.95,.95);const it=new Yt;it.add(lt),it.add(st),it.add(St),f.add(it);const g=new _t(.25,32,32),A=new w(g,y);A.position.set(-.45,1.35,-.1),f.add(A);const L=new w(g,b);L.position.set(.45,1.35,-.1),f.add(L);const O=new _t(.25,32,32,Math.PI/2,Math.PI),N=new w(O,y);N.scale.set(1.1,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI;const q=new _t(.25,32,32,Math.PI/2,Math.PI),Z=new w(q,b);Z.scale.set(1.1,.6,.8),Z.position.set(0,.84,.5),Z.rotation.y=0;const M=new be(.25,32),_=new w(M,y);_.scale.set(.8,.6,.8),_.position.set(0,.84,.5),_.rotation.y=Math.PI/2;const C=new Yt;C.add(N),C.add(Z),C.add(_),f.add(C);const X=new Fn;X.moveTo(0,0),X.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),X.bezierCurveTo(-.6,.3,0,.6,0,1),X.bezierCurveTo(0,.6,.6,.3,.6,0),X.bezierCurveTo(.6,-.3,0,-.3,0,0);const V={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},W=new Jn(X,V),ut=new w(W,nt);ut.scale.set(.38,.38,.38),ut.position.set(.35,0,0),ut.rotation.y=Math.PI,ut.rotation.x=Math.PI,f.add(ut);const ct=new w(W,nt);ct.scale.set(.35,.35,.35),ct.position.set(.3,0,0),ct.rotation.y=Math.PI,ct.rotation.x=Math.PI,f.add(ct);const mt=new w(W,y);mt.scale.set(.22,.22,.22),mt.position.set(.27,.4,0),mt.rotation.y=Math.PI,mt.rotation.x=Math.PI,f.add(mt);const Tt=new w(W,y);Tt.scale.set(.25,.25,.25),Tt.position.set(.23,-.5,.3),Tt.rotation.y=Math.PI,Tt.rotation.x=Math.PI,f.add(Tt);const ht=new w(W,y);ht.scale.set(.3,.3,.3),ht.position.set(.23,.2,-.4),ht.rotation.y=Math.PI,ht.rotation.x=Math.PI,f.add(ht);const yt=new _t(.35,32,32),At=new w(yt,y);At.scale.set(.75,1.25,.65),At.position.set(-.7,-.15,.2),f.add(At);const Dt=new w(yt,b);Dt.scale.set(.75,1.25,.65),Dt.position.set(.7,-.15,.2),f.add(Dt);const Pt=new ee(.2,.22,.6,32),qt=new w(Pt,y);qt.position.set(-.4,-1.05,0),f.add(qt);const Ut=new w(Pt,b);Ut.position.set(.4,-1.05,0),f.add(Ut);const jt=new _t(.3,32,32),G=new w(jt,y);G.scale.set(1,.72,1.5),G.position.set(-.4,-1.45,.17),f.add(G);const xt=new w(jt,b);xt.scale.set(1,.72,1.5),xt.position.set(.4,-1.45,.17),f.add(xt);const ot=new _t(.44,32,32),tt=new w(ot,y);tt.position.set(-.15,-.45,-.4),f.add(tt);const bt=new w(ot,b);bt.position.set(.15,-.45,-.4),f.add(bt);const Et=new _t(.18,32,32),Gt=new w(Et,y);Gt.position.set(0,-.35,-.8),f.add(Gt),new yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(te){const ae=new Ge("X",{font:te,size:.18,depth:.05}),ie=new w(ae,nt);ie.position.set(-.3,.99,.53),ie.rotation.x=ce.degToRad(-5),ie.rotation.y=ce.degToRad(-15),f.add(ie);const ve=new Ge("+",{font:te,size:.25,depth:.1}),oe=new w(ve,nt);oe.position.set(.14,.99,.53),oe.rotation.y=ce.degToRad(12),oe.rotation.x=ce.degToRad(-5),f.add(oe)}),Gt.renderOrder=1,f.scale.set(1.4,1.4,1.4),v.add(f),f.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1.4,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;let ne=Kt(!1);const se=te=>{if(ne.value){const ae={x:te.clientX/window.innerWidth*2-1,y:-(te.clientY/window.innerHeight)*2+1},ie=ae.x*Math.PI*.2,ve=ae.y*Math.PI*.2;f.rotation.y=ie,f.rotation.x=ve}};window.addEventListener("mousemove",se),et.uniforms.time.value+=.04,p(),He(()=>t.bodyPosition,te=>{f.position.set(te.x,te.y,te.z)}),He(()=>t.cameraPosition,te=>{x.position.set(t.bodyPosition.x,1,te),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let d=0;d<pb;d++){const p=document.createElement("div");p.classList.add("confetti"),p.style.left=`${Math.random()*100}vw`,p.style.animationDuration=`${Math.random()*3+4}s`,p.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(p)}for(let d=0;d<mb;d++){const p=document.createElement("div");p.classList.add("light"),document.body.appendChild(p)}return(d,p)=>(Hn(),ti(rn,null,[Ot("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Ot("div",null,[Be(hb,{class:"bear-background"})]),Ot("div",db,[Ot("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:u},"▲",32),Ot("div",fb,[Ot("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:u},"◀",32),Ot("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:u},"▶",32)]),Ot("button",{class:"pixel-btn down border-gold",onMousedown:h,onMouseup:u},"▼",32)])],64))}}),vb=ei(gb,[["__scopeId","data-v-b123314f"]]),_b={class:"pixel-controls"},xb={class:"side-buttons"},yb=15,Mb=5,wb=Ln({__name:"Money",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);Gn(()=>{if(e.value){let d=function(){f.visible=!1,B.update(m,v),f.visible=!0,requestAnimationFrame(d)},p=function(){requestAnimationFrame(p),Lt.uniforms.time.value+=.05,gt.uniforms.time.value+=.05,i.value&&(f.rotation.y+=.05),s.value&&(f.rotation.y-=.07),o.value&&(f.rotation.x-=.05),r.value&&(f.rotation.x+=.05),m.render(v,x)};const v=new Bn,x=new ze(75,window.innerWidth/window.innerHeight,.1,1e3),m=new On({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const f=new Yt,T=new xi(16777215,2);v.add(T);const S=new _i(16777215,4);S.position.set(5,5,5),v.add(S);const E=new vi(16777215,5,50);E.position.set(0,2,4),v.add(E);const I=new Qn().load("/3d-bear-arts/assets/cashwings.jpg"),R=new Ru(256,{format:Zn,generateMipmaps:!0,minFilter:Yi}),B=new Au(1,1e3,R),Q=new Bt({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.4,envMap:R.texture,envMapIntensity:1.5});v.add(B),v.environment=R.texture,d();const y=new ja,b=y.load(["/3d-bear-arts/assets/cash2.jpg","/3d-bear-arts/assets/cash8.jpg","/3d-bear-arts/assets/cash1.jpg","/3d-bear-arts/assets/cash11.jpg","/3d-bear-arts/assets/cash4.jpg","/3d-bear-arts/assets/cash3.jpg"]);v.environment=b;const U=y.load(["/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg","/3d-bear-arts/assets/cashwings.jpg"]);v.environment=U;const k=new Bt({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:b,reflectivity:1});new Bt({color:"sliver",metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:U,reflectivity:1});const et=new Bt({color:"sliver",map:I,metalness:.3,roughness:.5,transparent:!0,opacity:1}),rt=new Bt({color:"sliver",metalness:.75,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,envMap:b,reflectivity:0}),j=new cn({uniforms:{time:{value:0},color1:{value:new ge(16766720)},color2:{value:new ge(16007990)}},vertexShader:`
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
                vec3 color2 = vec3(0.3, 0.6, 1.0); // Blueish
                vec3 color3 = vec3(1.0, 0.0, 0.8); 
        
                // Mix the colors based on wave and angle for a dynamic effect
                vec3 color = mix(color1, color2, wave);
                color = mix(color, color3, sin(angle + time) * 0.5 + 0.5);
        
                // Set the fragment color with opacity
                gl_FragColor = vec4(color, opacity); // Use the opacity uniform for transparency
            }
      `,gt=new cn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:nt,fragmentShader:$,transparent:!1,depthWrite:!0}),pt=`
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
      `,Lt=new cn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:pt,fragmentShader:wt,transparent:!1,depthWrite:!0}),zt=new _t(1,32,32,0,Math.PI),at=new w(zt,rt),dt=new w(zt,k);at.scale.set(.85,.85,.8),dt.scale.set(.85,.85,.8),at.position.y=-.2,dt.position.y=-.2,at.rotation.y=Math.PI/2,dt.rotation.y=Math.PI*1.5;const Mt=new be(1,32),F=new w(Mt,et);F.scale.set(.85,.85,.8),F.position.set(0,-.2,0),F.rotation.y=Math.PI/2;const lt=new Yt;lt.add(at),lt.add(dt),lt.add(F),f.add(lt);const st=new _t(.6,32,32,0,Math.PI),ft=new w(st,k);ft.scale.set(1,.95,.95),ft.position.set(0,1,0),ft.rotation.y=Math.PI*1.5;const St=new w(st,rt);St.scale.set(1,.95,.95),St.position.set(0,1,0),St.rotation.y=Math.PI/2;const it=new be(.6,32),g=new w(it,et);g.position.set(0,1,0),g.rotation.y=Math.PI/2,g.scale.set(1,.95,.95);const A=new Yt;A.add(ft),A.add(St),A.add(g),f.add(A);const L=new _t(.25,32,32),O=new w(L,k);O.position.set(-.45,1.35,-.1),f.add(O);const N=new w(L,rt);N.position.set(.45,1.35,-.1),f.add(N);const q=new _t(.25,32,32,Math.PI/2,Math.PI),Z=new w(q,k);Z.scale.set(1.1,.6,.8),Z.position.set(0,.84,.5),Z.rotation.y=Math.PI;const M=new _t(.25,32,32,Math.PI/2,Math.PI),_=new w(M,rt);_.scale.set(1.1,.6,.8),_.position.set(0,.84,.5),_.rotation.y=0;const C=new be(.25,32),X=new w(C,et);X.scale.set(.8,.6,.8),X.position.set(0,.84,.5),X.rotation.y=Math.PI/2;const V=new Yt;V.add(Z),V.add(_),V.add(X),f.add(V);const W=new Fn;W.moveTo(0,0),W.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),W.bezierCurveTo(-.6,.3,0,.6,0,1),W.bezierCurveTo(0,.6,.6,.3,.6,0),W.bezierCurveTo(.6,-.3,0,-.3,0,0);const ut={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ct=new Jn(W,ut),mt=new w(ct,Q);mt.scale.set(.38,.38,.38),mt.position.set(.35,0,0),mt.rotation.y=Math.PI,mt.rotation.x=Math.PI,f.add(mt);const Tt=new w(ct,k);Tt.scale.set(.35,.35,.35),Tt.position.set(.3,0,0),Tt.rotation.y=Math.PI,Tt.rotation.x=Math.PI,f.add(Tt);const ht=new w(ct,k);ht.scale.set(.22,.22,.22),ht.position.set(.27,.4,0),ht.rotation.y=Math.PI,ht.rotation.x=Math.PI,f.add(ht);const yt=new w(ct,k);yt.scale.set(.25,.25,.25),yt.position.set(.23,-.5,.3),yt.rotation.y=Math.PI,yt.rotation.x=Math.PI,f.add(yt);const At=new w(ct,k);At.scale.set(.3,.3,.3),At.position.set(.23,.2,-.4),At.rotation.y=Math.PI,At.rotation.x=Math.PI,f.add(At);const Dt=new _t(.35,32,32),Pt=new w(Dt,k);Pt.scale.set(.75,1.25,.65),Pt.position.set(-.7,-.15,.2),f.add(Pt);const qt=new w(Dt,rt);qt.scale.set(.75,1.25,.65),qt.position.set(.7,-.15,.2),f.add(qt);const Ut=new ee(.2,.22,.6,32),jt=new w(Ut,k);jt.position.set(-.4,-1.05,0),f.add(jt);const G=new w(Ut,rt);G.position.set(.4,-1.05,0),f.add(G);const xt=new _t(.3,32,32),ot=new w(xt,k);ot.scale.set(1,.72,1.5),ot.position.set(-.4,-1.45,.17),f.add(ot);const tt=new w(xt,rt);tt.scale.set(1,.72,1.5),tt.position.set(.4,-1.45,.17),f.add(tt);const bt=new _t(.44,32,32),Et=new w(bt,k);Et.position.set(-.15,-.45,-.4),f.add(Et);const Gt=new w(bt,rt);Gt.position.set(.15,-.45,-.4),f.add(Gt);const Jt=new _t(.18,32,32),ne=new w(Jt,k);ne.position.set(0,-.35,-.8),f.add(ne),new yi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ie){const ve=new Ge("X",{font:ie,size:.18,depth:.05}),oe=new w(ve,k);oe.position.set(-.3,.99,.53),oe.rotation.x=ce.degToRad(-5),oe.rotation.y=ce.degToRad(-15),f.add(oe);const Te=new Ge("+",{font:ie,size:.25,depth:.1}),_e=new w(Te,k);_e.position.set(.14,.99,.53),_e.rotation.y=ce.degToRad(12),_e.rotation.x=ce.degToRad(-5),f.add(_e)}),ne.renderOrder=1,f.scale.set(1.4,1.4,1.4),v.add(f),f.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1.4,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;let te=Kt(!1);const ae=ie=>{if(te.value){const ve={x:ie.clientX/window.innerWidth*2-1,y:-(ie.clientY/window.innerHeight)*2+1},oe=ve.x*Math.PI*.2,Te=ve.y*Math.PI*.2;f.rotation.y=oe,f.rotation.x=Te}};window.addEventListener("mousemove",ae),j.uniforms.time.value+=.04,p(),He(()=>t.bodyPosition,ie=>{f.position.set(ie.x,ie.y,ie.z)}),He(()=>t.cameraPosition,ie=>{x.position.set(t.bodyPosition.x,1,ie),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});let i=Kt(!1),s=Kt(!1),o=Kt(!1),r=Kt(!1);function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let d=0;d<yb;d++){const p=document.createElement("div");p.classList.add("confetti"),p.style.left=`${Math.random()*100}vw`,p.style.animationDuration=`${Math.random()*3+4}s`,p.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(p)}for(let d=0;d<Mb;d++){const p=document.createElement("div");p.classList.add("light"),document.body.appendChild(p)}return(d,p)=>(Hn(),ti(rn,null,[Ot("div",{ref_key:"threeCanvas",ref:e,class:zn(n.background?"no-bg":"three-canvas")},null,2),Ot("div",_b,[Ot("button",{class:"pixel-btn up border-gold",onMousedown:l,onMouseup:u},"▲",32),Ot("div",xb,[Ot("button",{class:"pixel-btn left border-silver",onMousedown:a,onMouseup:u},"◀",32),Ot("button",{class:"pixel-btn right border-silver",onMousedown:c,onMouseup:u},"▶",32)]),Ot("button",{class:"pixel-btn down border-gold",onMousedown:h,onMouseup:u},"▼",32)])],64))}}),Sb=ei(wb,[["__scopeId","data-v-791550cb"]]),bb=[{path:"/3d-bear-arts/leather",name:"Leather",component:wS},{path:"/3d-bear-arts/pop-art",name:"Pop",component:bS},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:PS},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:LS},{path:"/3d-bear-arts/water",name:"Water",component:kS},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:qS},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:KS},{path:"/3d-bear-arts/santa",name:"Santa",component:nb},{path:"/3d-bear-arts/coffee",name:"Coffee",component:cb},{path:"/3d-bear-arts/bears",name:"Bears",component:vb},{path:"/3d-bear-arts/",name:"Money",component:Sb}],Eb=vv({history:Yg(),routes:bb}),Gp=hg(gg);Gp.use(Eb);Gp.mount("#app");
