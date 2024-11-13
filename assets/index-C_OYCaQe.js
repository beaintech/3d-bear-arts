(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ol(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ie={},io=[],Mi=()=>{},bp=()=>!1,xa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Bl=n=>n.startsWith("onUpdate:"),on=Object.assign,zl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Tp=Object.prototype.hasOwnProperty,Ee=(n,t)=>Tp.call(n,t),oe=Array.isArray,Bo=n=>ya(n)==="[object Map]",Ap=n=>ya(n)==="[object Set]",se=n=>typeof n=="function",en=n=>typeof n=="string",wo=n=>typeof n=="symbol",qe=n=>n!==null&&typeof n=="object",wd=n=>(qe(n)||se(n))&&se(n.then)&&se(n.catch),Rp=Object.prototype.toString,ya=n=>Rp.call(n),Pp=n=>ya(n).slice(8,-1),Cp=n=>ya(n)==="[object Object]",Gl=n=>en(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,zo=Ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Ip=/-(\w)/g,kn=Ma(n=>n.replace(Ip,(t,e)=>e?e.toUpperCase():"")),Lp=/\B([A-Z])/g,Ds=Ma(n=>n.replace(Lp,"-$1").toLowerCase()),wa=Ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ha=Ma(n=>n?`on${wa(n)}`:""),cs=(n,t)=>!Object.is(n,t),ka=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Sd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Dp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Eu;const Ed=()=>Eu||(Eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hl(n){if(oe(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=en(i)?Op(i):Hl(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(en(n)||qe(n))return n}const Up=/;(?![^(]*\))/g,Np=/:([^]+)/,Fp=/\/\*[^]*?\*\//g;function Op(n){const t={};return n.replace(Fp,"").split(Up).forEach(e=>{if(e){const i=e.split(Np);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Fn(n){let t="";if(en(n))t=n;else if(oe(n))for(let e=0;e<n.length;e++){const i=Fn(n[e]);i&&(t+=i+" ")}else if(qe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zp=Ol(Bp);function bd(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ln;class Gp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ln,!t&&Ln&&(this.index=(Ln.scopes||(Ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ln;try{return Ln=this,t()}finally{Ln=e}}}on(){Ln=this}off(){Ln=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Hp(){return Ln}let De;const Va=new WeakSet;class Td{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ln&&Ln.active&&Ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Va.has(this)&&(Va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bu(this),Pd(this);const t=De,e=si;De=this,si=!0;try{return this.fn()}finally{Cd(this),De=t,si=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Wl(t);this.deps=this.depsTail=void 0,bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nc(this)&&this.run()}get dirty(){return Nc(this)}}let Ad=0,Qs;function Rd(n){n.flags|=8,n.next=Qs,Qs=n}function kl(){Ad++}function Vl(){if(--Ad>0)return;let n;for(;Qs;){let t=Qs,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=Qs,Qs=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Pd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Cd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Wl(i),kp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Nc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Id(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Id(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Zo))return;n.globalVersion=Zo;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Nc(n)){n.flags&=-3;return}const e=De,i=si;De=n,si=!0;try{Pd(n);const s=n.fn(n._value);(t.version===0||cs(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{De=e,si=i,Cd(n),n.flags&=-3}}function Wl(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let o=e.computed.deps;o;o=o.nextDep)Wl(o,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function kp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let si=!0;const Ld=[];function us(){Ld.push(si),si=!1}function hs(){const n=Ld.pop();si=n===void 0?!0:n}function bu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=De;De=void 0;try{t()}finally{De=e}}}let Zo=0;class Vp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!De||!si||De===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==De)e=this.activeLink=new Vp(De,this),De.deps?(e.prevDep=De.depsTail,De.depsTail.nextDep=e,De.depsTail=e):De.deps=De.depsTail=e,Dd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=De.depsTail,e.nextDep=void 0,De.depsTail.nextDep=e,De.depsTail=e,De.deps===e&&(De.deps=i)}return e}trigger(t){this.version++,Zo++,this.notify(t)}notify(t){kl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Vl()}}}function Dd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Dd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Fc=new WeakMap,Rs=Symbol(""),Oc=Symbol(""),Jo=Symbol("");function fn(n,t,e){if(si&&De){let i=Fc.get(n);i||Fc.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Xl),s.target=n,s.map=i,s.key=e),s.track()}}function Vi(n,t,e,i,s,o){const r=Fc.get(n);if(!r){Zo++;return}const a=c=>{c&&c.trigger()};if(kl(),t==="clear")r.forEach(a);else{const c=oe(n),l=c&&Gl(e);if(c&&e==="length"){const h=Number(i);r.forEach((u,d)=>{(d==="length"||d===Jo||!wo(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(r.get(e)),l&&a(r.get(Jo)),t){case"add":c?l&&a(r.get("length")):(a(r.get(Rs)),Bo(n)&&a(r.get(Oc)));break;case"delete":c||(a(r.get(Rs)),Bo(n)&&a(r.get(Oc)));break;case"set":Bo(n)&&a(r.get(Rs));break}}Vl()}function Ns(n){const t=Te(n);return t===n?t:(fn(t,"iterate",Jo),oi(n)?t:t.map(xn))}function ql(n){return fn(n=Te(n),"iterate",Jo),n}const Wp={__proto__:null,[Symbol.iterator](){return Wa(this,Symbol.iterator,xn)},concat(...n){return Ns(this).concat(...n.map(t=>oe(t)?Ns(t):t))},entries(){return Wa(this,"entries",n=>(n[1]=xn(n[1]),n))},every(n,t){return Ci(this,"every",n,t,void 0,arguments)},filter(n,t){return Ci(this,"filter",n,t,e=>e.map(xn),arguments)},find(n,t){return Ci(this,"find",n,t,xn,arguments)},findIndex(n,t){return Ci(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Ci(this,"findLast",n,t,xn,arguments)},findLastIndex(n,t){return Ci(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Ci(this,"forEach",n,t,void 0,arguments)},includes(...n){return Xa(this,"includes",n)},indexOf(...n){return Xa(this,"indexOf",n)},join(n){return Ns(this).join(n)},lastIndexOf(...n){return Xa(this,"lastIndexOf",n)},map(n,t){return Ci(this,"map",n,t,void 0,arguments)},pop(){return To(this,"pop")},push(...n){return To(this,"push",n)},reduce(n,...t){return Tu(this,"reduce",n,t)},reduceRight(n,...t){return Tu(this,"reduceRight",n,t)},shift(){return To(this,"shift")},some(n,t){return Ci(this,"some",n,t,void 0,arguments)},splice(...n){return To(this,"splice",n)},toReversed(){return Ns(this).toReversed()},toSorted(n){return Ns(this).toSorted(n)},toSpliced(...n){return Ns(this).toSpliced(...n)},unshift(...n){return To(this,"unshift",n)},values(){return Wa(this,"values",xn)}};function Wa(n,t,e){const i=ql(n),s=i[t]();return i!==n&&!oi(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=e(o.value)),o}),s}const Xp=Array.prototype;function Ci(n,t,e,i,s,o){const r=ql(n),a=r!==n&&!oi(n),c=r[t];if(c!==Xp[t]){const u=c.apply(n,o);return a?xn(u):u}let l=e;r!==n&&(a?l=function(u,d){return e.call(this,xn(u),d,n)}:e.length>2&&(l=function(u,d){return e.call(this,u,d,n)}));const h=c.call(r,l,i);return a&&s?s(h):h}function Tu(n,t,e,i){const s=ql(n);let o=e;return s!==n&&(oi(n)?e.length>3&&(o=function(r,a,c){return e.call(this,r,a,c,n)}):o=function(r,a,c){return e.call(this,r,xn(a),c,n)}),s[t](o,...i)}function Xa(n,t,e){const i=Te(n);fn(i,"iterate",Jo);const s=i[t](...e);return(s===-1||s===!1)&&Kl(e[0])?(e[0]=Te(e[0]),i[t](...e)):s}function To(n,t,e=[]){us(),kl();const i=Te(n)[t].apply(n,e);return Vl(),hs(),i}const qp=Ol("__proto__,__v_isRef,__isVue"),Ud=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(wo));function Yp(n){wo(n)||(n=String(n));const t=Te(this);return fn(t,"has",n),t.hasOwnProperty(n)}class Nd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return o;if(e==="__v_raw")return i===(s?o?rm:zd:o?Bd:Od).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=oe(t);if(!s){let c;if(r&&(c=Wp[e]))return c;if(e==="hasOwnProperty")return Yp}const a=Reflect.get(t,e,hn(t)?t:i);return(wo(e)?Ud.has(e):qp(e))||(s||fn(t,"get",e),o)?a:hn(a)?r&&Gl(e)?a:a.value:qe(a)?s?Hd(a):Ea(a):a}}class Fd extends Nd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let o=t[e];if(!this._isShallow){const c=Ps(o);if(!oi(i)&&!Ps(i)&&(o=Te(o),i=Te(i)),!oe(t)&&hn(o)&&!hn(i))return c?!1:(o.value=i,!0)}const r=oe(t)&&Gl(e)?Number(e)<t.length:Ee(t,e),a=Reflect.set(t,e,i,hn(t)?t:s);return t===Te(s)&&(r?cs(i,o)&&Vi(t,"set",e,i):Vi(t,"add",e,i)),a}deleteProperty(t,e){const i=Ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Vi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!wo(e)||!Ud.has(e))&&fn(t,"has",e),i}ownKeys(t){return fn(t,"iterate",oe(t)?"length":Rs),Reflect.ownKeys(t)}}class $p extends Nd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const jp=new Fd,Kp=new $p,Zp=new Fd(!0);const Yl=n=>n,Sa=n=>Reflect.getPrototypeOf(n);function xr(n,t,e=!1,i=!1){n=n.__v_raw;const s=Te(n),o=Te(t);e||(cs(t,o)&&fn(s,"get",t),fn(s,"get",o));const{has:r}=Sa(s),a=i?Yl:e?Zl:xn;if(r.call(s,t))return a(n.get(t));if(r.call(s,o))return a(n.get(o));n!==s&&n.get(t)}function yr(n,t=!1){const e=this.__v_raw,i=Te(e),s=Te(n);return t||(cs(n,s)&&fn(i,"has",n),fn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function Mr(n,t=!1){return n=n.__v_raw,!t&&fn(Te(n),"iterate",Rs),Reflect.get(n,"size",n)}function Au(n,t=!1){!t&&!oi(n)&&!Ps(n)&&(n=Te(n));const e=Te(this);return Sa(e).has.call(e,n)||(e.add(n),Vi(e,"add",n,n)),this}function Ru(n,t,e=!1){!e&&!oi(t)&&!Ps(t)&&(t=Te(t));const i=Te(this),{has:s,get:o}=Sa(i);let r=s.call(i,n);r||(n=Te(n),r=s.call(i,n));const a=o.call(i,n);return i.set(n,t),r?cs(t,a)&&Vi(i,"set",n,t):Vi(i,"add",n,t),this}function Pu(n){const t=Te(this),{has:e,get:i}=Sa(t);let s=e.call(t,n);s||(n=Te(n),s=e.call(t,n)),i&&i.call(t,n);const o=t.delete(n);return s&&Vi(t,"delete",n,void 0),o}function Cu(){const n=Te(this),t=n.size!==0,e=n.clear();return t&&Vi(n,"clear",void 0,void 0),e}function wr(n,t){return function(i,s){const o=this,r=o.__v_raw,a=Te(r),c=t?Yl:n?Zl:xn;return!n&&fn(a,"iterate",Rs),r.forEach((l,h)=>i.call(s,c(l),c(h),o))}}function Sr(n,t,e){return function(...i){const s=this.__v_raw,o=Te(s),r=Bo(o),a=n==="entries"||n===Symbol.iterator&&r,c=n==="keys"&&r,l=s[n](...i),h=e?Yl:t?Zl:xn;return!t&&fn(o,"iterate",c?Oc:Rs),{next(){const{value:u,done:d}=l.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function $i(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Jp(){const n={get(o){return xr(this,o)},get size(){return Mr(this)},has:yr,add:Au,set:Ru,delete:Pu,clear:Cu,forEach:wr(!1,!1)},t={get(o){return xr(this,o,!1,!0)},get size(){return Mr(this)},has:yr,add(o){return Au.call(this,o,!0)},set(o,r){return Ru.call(this,o,r,!0)},delete:Pu,clear:Cu,forEach:wr(!1,!0)},e={get(o){return xr(this,o,!0)},get size(){return Mr(this,!0)},has(o){return yr.call(this,o,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:wr(!0,!1)},i={get(o){return xr(this,o,!0,!0)},get size(){return Mr(this,!0)},has(o){return yr.call(this,o,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:wr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Sr(o,!1,!1),e[o]=Sr(o,!0,!1),t[o]=Sr(o,!1,!0),i[o]=Sr(o,!0,!0)}),[n,e,t,i]}const[Qp,tm,em,nm]=Jp();function $l(n,t){const e=t?n?nm:em:n?tm:Qp;return(i,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Ee(e,s)&&s in i?e:i,s,o)}const im={get:$l(!1,!1)},sm={get:$l(!1,!0)},om={get:$l(!0,!1)};const Od=new WeakMap,Bd=new WeakMap,zd=new WeakMap,rm=new WeakMap;function am(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cm(n){return n.__v_skip||!Object.isExtensible(n)?0:am(Pp(n))}function Ea(n){return Ps(n)?n:jl(n,!1,jp,im,Od)}function Gd(n){return jl(n,!1,Zp,sm,Bd)}function Hd(n){return jl(n,!0,Kp,om,zd)}function jl(n,t,e,i,s){if(!qe(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=s.get(n);if(o)return o;const r=cm(n);if(r===0)return n;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function Go(n){return Ps(n)?Go(n.__v_raw):!!(n&&n.__v_isReactive)}function Ps(n){return!!(n&&n.__v_isReadonly)}function oi(n){return!!(n&&n.__v_isShallow)}function Kl(n){return n?!!n.__v_raw:!1}function Te(n){const t=n&&n.__v_raw;return t?Te(t):n}function lm(n){return!Ee(n,"__v_skip")&&Object.isExtensible(n)&&Sd(n,"__v_skip",!0),n}const xn=n=>qe(n)?Ea(n):n,Zl=n=>qe(n)?Hd(n):n;function hn(n){return n?n.__v_isRef===!0:!1}function jt(n){return kd(n,!1)}function Ho(n){return kd(n,!0)}function kd(n,t){return hn(n)?n:new um(n,t)}class um{constructor(t,e){this.dep=new Xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Te(t),this._value=e?t:xn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||oi(t)||Ps(t);t=i?t:Te(t),cs(t,e)&&(this._rawValue=t,this._value=i?t:xn(t),this.dep.trigger())}}function so(n){return hn(n)?n.value:n}const hm={get:(n,t,e)=>t==="__v_raw"?n:so(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return hn(s)&&!hn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Vd(n){return Go(n)?n:new Proxy(n,hm)}class dm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Rd(this),!0}get value(){const t=this.dep.track();return Id(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function fm(n,t,e=!1){let i,s;return se(n)?i=n:(i=n.get,s=n.set),new dm(i,s,e)}const Er={},ca=new WeakMap;let Ms;function pm(n,t=!1,e=Ms){if(e){let i=ca.get(e);i||ca.set(e,i=[]),i.push(n)}}function mm(n,t,e=Ie){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:a,call:c}=e,l=S=>s?S:oi(S)||s===!1||s===0?Gi(S,1):Gi(S);let h,u,d,f,_=!1,x=!1;if(hn(n)?(u=()=>n.value,_=oi(n)):Go(n)?(u=()=>l(n),_=!0):oe(n)?(x=!0,_=n.some(S=>Go(S)||oi(S)),u=()=>n.map(S=>{if(hn(S))return S.value;if(Go(S))return l(S);if(se(S))return c?c(S,2):S()})):se(n)?t?u=c?()=>c(n,2):n:u=()=>{if(d){us();try{d()}finally{hs()}}const S=Ms;Ms=h;try{return c?c(n,3,[f]):n(f)}finally{Ms=S}}:u=Mi,t&&s){const S=u,O=s===!0?1/0:s;u=()=>Gi(S(),O)}const p=Hp(),m=()=>{h.stop(),p&&zl(p.effects,h)};if(o&&t){const S=t;t=(...O)=>{S(...O),m()}}let b=x?new Array(n.length).fill(Er):Er;const M=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(t){const O=h.run();if(s||_||(x?O.some((I,P)=>cs(I,b[P])):cs(O,b))){d&&d();const I=Ms;Ms=h;try{const P=[O,b===Er?void 0:x&&b[0]===Er?[]:b,f];c?c(t,3,P):t(...P),b=O}finally{Ms=I}}}else h.run()};return a&&a(M),h=new Td(u),h.scheduler=r?()=>r(M,!1):M,f=S=>pm(S,!1,h),d=h.onStop=()=>{const S=ca.get(h);if(S){if(c)c(S,4);else for(const O of S)O();ca.delete(h)}},t?i?M(!0):b=h.run():r?r(M.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function Gi(n,t=1/0,e){if(t<=0||!qe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,hn(n))Gi(n.value,t,e);else if(oe(n))for(let i=0;i<n.length;i++)Gi(n[i],t,e);else if(Ap(n)||Bo(n))n.forEach(i=>{Gi(i,t,e)});else if(Cp(n)){for(const i in n)Gi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Gi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dr(n,t,e,i){try{return i?n(...i):n()}catch(s){ba(s,t,e)}}function Si(n,t,e,i){if(se(n)){const s=dr(n,t,e,i);return s&&wd(s)&&s.catch(o=>{ba(o,t,e)}),s}if(oe(n)){const s=[];for(let o=0;o<n.length;o++)s.push(Si(n[o],t,e,i));return s}}function ba(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Ie;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,c,l)===!1)return}a=a.parent}if(o){us(),dr(o,null,10,[n,c,l]),hs();return}}gm(n,e,s,i,r)}function gm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let Qo=!1,Bc=!1;const yn=[];let vi=0;const oo=[];let ns=null,Ks=0;const Wd=Promise.resolve();let Jl=null;function Xd(n){const t=Jl||Wd;return n?t.then(this?n.bind(this):n):t}function _m(n){let t=Qo?vi+1:0,e=yn.length;for(;t<e;){const i=t+e>>>1,s=yn[i],o=tr(s);o<n||o===n&&s.flags&2?t=i+1:e=i}return t}function Ql(n){if(!(n.flags&1)){const t=tr(n),e=yn[yn.length-1];!e||!(n.flags&2)&&t>=tr(e)?yn.push(n):yn.splice(_m(t),0,n),n.flags|=1,qd()}}function qd(){!Qo&&!Bc&&(Bc=!0,Jl=Wd.then($d))}function vm(n){oe(n)?oo.push(...n):ns&&n.id===-1?ns.splice(Ks+1,0,n):n.flags&1||(oo.push(n),n.flags|=1),qd()}function Iu(n,t,e=Qo?vi+1:0){for(;e<yn.length;e++){const i=yn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;yn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yd(n){if(oo.length){const t=[...new Set(oo)].sort((e,i)=>tr(e)-tr(i));if(oo.length=0,ns){ns.push(...t);return}for(ns=t,Ks=0;Ks<ns.length;Ks++){const e=ns[Ks];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ns=null,Ks=0}}const tr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function $d(n){Bc=!1,Qo=!0;try{for(vi=0;vi<yn.length;vi++){const t=yn[vi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),dr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;vi<yn.length;vi++){const t=yn[vi];t&&(t.flags&=-2)}vi=0,yn.length=0,Yd(),Qo=!1,Jl=null,(yn.length||oo.length)&&$d()}}let Dn=null,jd=null;function la(n){const t=Dn;return Dn=n,jd=n&&n.type.__scopeId||null,t}function gi(n,t=Dn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Hu(-1);const o=la(t);let r;try{r=n(...s)}finally{la(o),i._d&&Hu(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function xm(n,t){if(Dn===null)return n;const e=Ca(Dn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,a,c=Ie]=t[s];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Gi(r),i.push({dir:o,instance:e,value:r,oldValue:void 0,arg:a,modifiers:c}))}return n}function fs(n,t,e,i){const s=n.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let c=a.dir[i];c&&(us(),Si(c,e,8,[n.el,a,n,t]),hs())}}const ym=Symbol("_vte"),Mm=n=>n.__isTeleport;function tu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,tu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function On(n,t){return se(n)?on({name:n.name},t,{setup:n}):n}function Kd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function zc(n,t,e,i,s=!1){if(oe(n)){n.forEach((_,x)=>zc(_,t&&(oe(t)?t[x]:t),e,i,s));return}if(ko(i)&&!s)return;const o=i.shapeFlag&4?Ca(i.component):i.el,r=s?null:o,{i:a,r:c}=n,l=t&&t.r,h=a.refs===Ie?a.refs={}:a.refs,u=a.setupState,d=Te(u),f=u===Ie?()=>!1:_=>Ee(d,_);if(l!=null&&l!==c&&(en(l)?(h[l]=null,f(l)&&(u[l]=null)):hn(l)&&(l.value=null)),se(c))dr(c,a,12,[r,h]);else{const _=en(c),x=hn(c);if(_||x){const p=()=>{if(n.f){const m=_?f(c)?u[c]:h[c]:c.value;s?oe(m)&&zl(m,o):oe(m)?m.includes(o)||m.push(o):_?(h[c]=[o],f(c)&&(u[c]=h[c])):(c.value=[o],n.k&&(h[n.k]=c.value))}else _?(h[c]=r,f(c)&&(u[c]=r)):x&&(c.value=r,n.k&&(h[n.k]=r))};r?(p.id=-1,In(p,e)):p()}}}const ko=n=>!!n.type.__asyncLoader,Zd=n=>n.type.__isKeepAlive;function wm(n,t){Jd(n,"a",t)}function Sm(n,t){Jd(n,"da",t)}function Jd(n,t,e=un){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ta(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Zd(s.parent.vnode)&&Em(i,t,e,s),s=s.parent}}function Em(n,t,e,i){const s=Ta(t,n,i,!0);eu(()=>{zl(i[t],s)},e)}function Ta(n,t,e=un,i=!1){if(e){const s=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...r)=>{us();const a=fr(e),c=Si(t,e,n,r);return a(),hs(),c});return i?s.unshift(o):s.push(o),o}}const qi=n=>(t,e=un)=>{(!Pa||n==="sp")&&Ta(n,(...i)=>t(...i),e)},bm=qi("bm"),Xn=qi("m"),Tm=qi("bu"),Am=qi("u"),Rm=qi("bum"),eu=qi("um"),Pm=qi("sp"),Cm=qi("rtg"),Im=qi("rtc");function Lm(n,t=un){Ta("ec",n,t)}const Dm="components";function Lu(n,t){return Nm(Dm,n,!0,t)||n}const Um=Symbol.for("v-ndc");function Nm(n,t,e=!0,i=!1){const s=Dn||un;if(s){const o=s.type;{const a=w0(o,!1);if(a&&(a===t||a===kn(t)||a===wa(kn(t))))return o}const r=Du(s[n]||o[n],t)||Du(s.appContext[n],t);return!r&&i?o:r}}function Du(n,t){return n&&(n[t]||n[kn(t)]||n[wa(kn(t))])}const Gc=n=>n?vf(n)?Ca(n):Gc(n.parent):null,Vo=on(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Gc(n.parent),$root:n=>Gc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>nu(n),$forceUpdate:n=>n.f||(n.f=()=>{Ql(n.update)}),$nextTick:n=>n.n||(n.n=Xd.bind(n.proxy)),$watch:n=>n0.bind(n)}),qa=(n,t)=>n!==Ie&&!n.__isScriptSetup&&Ee(n,t),Fm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:c}=n;let l;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return o[t]}else{if(qa(i,t))return r[t]=1,i[t];if(s!==Ie&&Ee(s,t))return r[t]=2,s[t];if((l=n.propsOptions[0])&&Ee(l,t))return r[t]=3,o[t];if(e!==Ie&&Ee(e,t))return r[t]=4,e[t];Hc&&(r[t]=0)}}const h=Vo[t];let u,d;if(h)return t==="$attrs"&&fn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Ie&&Ee(e,t))return r[t]=4,e[t];if(d=c.config.globalProperties,Ee(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:o}=n;return qa(s,t)?(s[t]=e,!0):i!==Ie&&Ee(i,t)?(i[t]=e,!0):Ee(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:o}},r){let a;return!!e[r]||n!==Ie&&Ee(n,r)||qa(t,r)||(a=o[0])&&Ee(a,r)||Ee(i,r)||Ee(Vo,r)||Ee(s.config.globalProperties,r)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Ee(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Uu(n){return oe(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Hc=!0;function Om(n){const t=nu(n),e=n.proxy,i=n.ctx;Hc=!1,t.beforeCreate&&Nu(t.beforeCreate,n,"bc");const{data:s,computed:o,methods:r,watch:a,provide:c,inject:l,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:_,activated:x,deactivated:p,beforeDestroy:m,beforeUnmount:b,destroyed:M,unmounted:S,render:O,renderTracked:I,renderTriggered:P,errorCaptured:N,serverPrefetch:q,expose:y,inheritAttrs:E,components:K,directives:W,filters:J}=t;if(l&&Bm(l,i,null),r)for(const nt in r){const H=r[nt];se(H)&&(i[nt]=H.bind(e))}if(s){const nt=s.call(e,e);qe(nt)&&(n.data=Ea(nt))}if(Hc=!0,o)for(const nt in o){const H=o[nt],mt=se(H)?H.bind(e,e):se(H.get)?H.get.bind(e,e):Mi,yt=!se(H)&&se(H.set)?H.set.bind(e):Mi,gt=Qn({get:mt,set:yt});Object.defineProperty(i,nt,{enumerable:!0,configurable:!0,get:()=>gt.value,set:Lt=>gt.value=Lt})}if(a)for(const nt in a)Qd(a[nt],i,e,nt);if(c){const nt=se(c)?c.call(e):c;Reflect.ownKeys(nt).forEach(H=>{Jr(H,nt[H])})}h&&Nu(h,n,"c");function G(nt,H){oe(H)?H.forEach(mt=>nt(mt.bind(e))):H&&nt(H.bind(e))}if(G(bm,u),G(Xn,d),G(Tm,f),G(Am,_),G(wm,x),G(Sm,p),G(Lm,N),G(Im,I),G(Cm,P),G(Rm,b),G(eu,S),G(Pm,q),oe(y))if(y.length){const nt=n.exposed||(n.exposed={});y.forEach(H=>{Object.defineProperty(nt,H,{get:()=>e[H],set:mt=>e[H]=mt})})}else n.exposed||(n.exposed={});O&&n.render===Mi&&(n.render=O),E!=null&&(n.inheritAttrs=E),K&&(n.components=K),W&&(n.directives=W),q&&Kd(n)}function Bm(n,t,e=Mi){oe(n)&&(n=kc(n));for(const i in n){const s=n[i];let o;qe(s)?"default"in s?o=Wi(s.from||i,s.default,!0):o=Wi(s.from||i):o=Wi(s),hn(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function Nu(n,t,e){Si(oe(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Qd(n,t,e,i){let s=i.includes(".")?pf(e,i):()=>e[i];if(en(n)){const o=t[n];se(o)&&Oe(s,o)}else if(se(n))Oe(s,n.bind(e));else if(qe(n))if(oe(n))n.forEach(o=>Qd(o,t,e,i));else{const o=se(n.handler)?n.handler.bind(e):t[n.handler];se(o)&&Oe(s,o,n)}}function nu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!e&&!i?c=t:(c={},s.length&&s.forEach(l=>ua(c,l,r,!0)),ua(c,t,r)),qe(t)&&o.set(t,c),c}function ua(n,t,e,i=!1){const{mixins:s,extends:o}=t;o&&ua(n,o,e,!0),s&&s.forEach(r=>ua(n,r,e,!0));for(const r in t)if(!(i&&r==="expose")){const a=zm[r]||e&&e[r];n[r]=a?a(n[r],t[r]):t[r]}return n}const zm={data:Fu,props:Ou,emits:Ou,methods:Fo,computed:Fo,beforeCreate:gn,created:gn,beforeMount:gn,mounted:gn,beforeUpdate:gn,updated:gn,beforeDestroy:gn,beforeUnmount:gn,destroyed:gn,unmounted:gn,activated:gn,deactivated:gn,errorCaptured:gn,serverPrefetch:gn,components:Fo,directives:Fo,watch:Hm,provide:Fu,inject:Gm};function Fu(n,t){return t?n?function(){return on(se(n)?n.call(this,this):n,se(t)?t.call(this,this):t)}:t:n}function Gm(n,t){return Fo(kc(n),kc(t))}function kc(n){if(oe(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function gn(n,t){return n?[...new Set([].concat(n,t))]:t}function Fo(n,t){return n?on(Object.create(null),n,t):t}function Ou(n,t){return n?oe(n)&&oe(t)?[...new Set([...n,...t])]:on(Object.create(null),Uu(n),Uu(t??{})):t}function Hm(n,t){if(!n)return t;if(!t)return n;const e=on(Object.create(null),n);for(const i in t)e[i]=gn(n[i],t[i]);return e}function tf(){return{app:null,config:{isNativeTag:bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let km=0;function Vm(n,t){return function(i,s=null){se(i)||(i=on({},i)),s!=null&&!qe(s)&&(s=null);const o=tf(),r=new WeakSet,a=[];let c=!1;const l=o.app={_uid:km++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:E0,get config(){return o.config},set config(h){},use(h,...u){return r.has(h)||(h&&se(h.install)?(r.add(h),h.install(l,...u)):se(h)&&(r.add(h),h(l,...u))),l},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),l},component(h,u){return u?(o.components[h]=u,l):o.components[h]},directive(h,u){return u?(o.directives[h]=u,l):o.directives[h]},mount(h,u,d){if(!c){const f=l._ceVNode||We(i,s);return f.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(f,h):n(f,h,d),c=!0,l._container=h,h.__vue_app__=l,Ca(f.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Si(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(h,u){return o.provides[h]=u,l},runWithContext(h){const u=ro;ro=l;try{return h()}finally{ro=u}}};return l}}let ro=null;function Jr(n,t){if(un){let e=un.provides;const i=un.parent&&un.parent.provides;i===e&&(e=un.provides=Object.create(i)),e[n]=t}}function Wi(n,t,e=!1){const i=un||Dn;if(i||ro){const s=ro?ro._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&se(t)?t.call(i&&i.proxy):t}}const ef={},nf=()=>Object.create(ef),sf=n=>Object.getPrototypeOf(n)===ef;function Wm(n,t,e,i=!1){const s={},o=nf();n.propsDefaults=Object.create(null),of(n,t,s,o);for(const r in n.propsOptions[0])r in s||(s[r]=void 0);e?n.props=i?s:Gd(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function Xm(n,t,e,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=n,a=Te(s),[c]=n.propsOptions;let l=!1;if((i||r>0)&&!(r&16)){if(r&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Aa(n.emitsOptions,d))continue;const f=t[d];if(c)if(Ee(o,d))f!==o[d]&&(o[d]=f,l=!0);else{const _=kn(d);s[_]=Vc(c,a,_,f,n,!1)}else f!==o[d]&&(o[d]=f,l=!0)}}}else{of(n,t,s,o)&&(l=!0);let h;for(const u in a)(!t||!Ee(t,u)&&((h=Ds(u))===u||!Ee(t,h)))&&(c?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=Vc(c,a,u,void 0,n,!0)):delete s[u]);if(o!==a)for(const u in o)(!t||!Ee(t,u))&&(delete o[u],l=!0)}l&&Vi(n.attrs,"set","")}function of(n,t,e,i){const[s,o]=n.propsOptions;let r=!1,a;if(t)for(let c in t){if(zo(c))continue;const l=t[c];let h;s&&Ee(s,h=kn(c))?!o||!o.includes(h)?e[h]=l:(a||(a={}))[h]=l:Aa(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,r=!0)}if(o){const c=Te(e),l=a||Ie;for(let h=0;h<o.length;h++){const u=o[h];e[u]=Vc(s,c,u,l[u],n,!Ee(l,u))}}return r}function Vc(n,t,e,i,s,o){const r=n[e];if(r!=null){const a=Ee(r,"default");if(a&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&se(c)){const{propsDefaults:l}=s;if(e in l)i=l[e];else{const h=fr(s);i=l[e]=c.call(null,t),h()}}else i=c;s.ce&&s.ce._setProp(e,i)}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===Ds(e))&&(i=!0))}return i}const qm=new WeakMap;function rf(n,t,e=!1){const i=e?qm:t.propsCache,s=i.get(n);if(s)return s;const o=n.props,r={},a=[];let c=!1;if(!se(n)){const h=u=>{c=!0;const[d,f]=rf(u,t,!0);on(r,d),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!o&&!c)return qe(n)&&i.set(n,io),io;if(oe(o))for(let h=0;h<o.length;h++){const u=kn(o[h]);Bu(u)&&(r[u]=Ie)}else if(o)for(const h in o){const u=kn(h);if(Bu(u)){const d=o[h],f=r[u]=oe(d)||se(d)?{type:d}:on({},d),_=f.type;let x=!1,p=!0;if(oe(_))for(let m=0;m<_.length;++m){const b=_[m],M=se(b)&&b.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(p=!1)}else x=se(_)&&_.name==="Boolean";f[0]=x,f[1]=p,(x||Ee(f,"default"))&&a.push(u)}}const l=[r,a];return qe(n)&&i.set(n,l),l}function Bu(n){return n[0]!=="$"&&!zo(n)}const af=n=>n[0]==="_"||n==="$stable",iu=n=>oe(n)?n.map(xi):[xi(n)],Ym=(n,t,e)=>{if(t._n)return t;const i=gi((...s)=>iu(t(...s)),e);return i._c=!1,i},cf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(af(s))continue;const o=n[s];if(se(o))t[s]=Ym(s,o,i);else if(o!=null){const r=iu(o);t[s]=()=>r}}},lf=(n,t)=>{const e=iu(t);n.slots.default=()=>e},uf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},$m=(n,t,e)=>{const i=n.slots=nf();if(n.vnode.shapeFlag&32){const s=t._;s?(uf(i,t,e),e&&Sd(i,"_",s,!0)):cf(t,i)}else t&&lf(n,t)},jm=(n,t,e)=>{const{vnode:i,slots:s}=n;let o=!0,r=Ie;if(i.shapeFlag&32){const a=t._;a?e&&a===1?o=!1:uf(s,t,e):(o=!t.$stable,cf(t,s)),r=t}else t&&(lf(n,t),r={default:1});if(o)for(const a in s)!af(a)&&r[a]==null&&delete s[a]},In=l0;function Km(n){return Zm(n)}function Zm(n,t){const e=Ed();e.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:c,setText:l,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=Mi,insertStaticContent:_}=n,x=(g,T,L,U=null,D=null,X=null,Z=void 0,w=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!Ao(g,T)&&(U=F(g),Lt(g,D,X,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:V,shapeFlag:z}=T;switch(C){case Ra:p(g,T,L,U);break;case er:m(g,T,L,U);break;case ja:g==null&&b(T,L,U,Z);break;case ln:K(g,T,L,U,D,X,Z,w,v);break;default:z&1?O(g,T,L,U,D,X,Z,w,v):z&6?W(g,T,L,U,D,X,Z,w,v):(z&64||z&128)&&C.process(g,T,L,U,D,X,Z,w,v,lt)}V!=null&&D&&zc(V,g&&g.ref,X,T||g,!T)},p=(g,T,L,U)=>{if(g==null)i(T.el=a(T.children),L,U);else{const D=T.el=g.el;T.children!==g.children&&l(D,T.children)}},m=(g,T,L,U)=>{g==null?i(T.el=c(T.children||""),L,U):T.el=g.el},b=(g,T,L,U)=>{[g.el,g.anchor]=_(g.children,T,L,U,g.el,g.anchor)},M=({el:g,anchor:T},L,U)=>{let D;for(;g&&g!==T;)D=d(g),i(g,L,U),g=D;i(T,L,U)},S=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=d(g),s(g),g=L;s(T)},O=(g,T,L,U,D,X,Z,w,v)=>{T.type==="svg"?Z="svg":T.type==="math"&&(Z="mathml"),g==null?I(T,L,U,D,X,Z,w,v):q(g,T,D,X,Z,w,v)},I=(g,T,L,U,D,X,Z,w)=>{let v,C;const{props:V,shapeFlag:z,transition:k,dirs:ht}=g;if(v=g.el=r(g.type,X,V&&V.is,V),z&8?h(v,g.children):z&16&&N(g.children,v,null,U,D,Ya(g,X),Z,w),ht&&fs(g,null,U,"created"),P(v,g,g.scopeId,Z,U),V){for(const pt in V)pt!=="value"&&!zo(pt)&&o(v,pt,null,V[pt],X,U);"value"in V&&o(v,"value",null,V.value,X),(C=V.onVnodeBeforeMount)&&mi(C,U,g)}ht&&fs(g,null,U,"beforeMount");const ut=Jm(D,k);ut&&k.beforeEnter(v),i(v,T,L),((C=V&&V.onVnodeMounted)||ut||ht)&&In(()=>{C&&mi(C,U,g),ut&&k.enter(v),ht&&fs(g,null,U,"mounted")},D)},P=(g,T,L,U,D)=>{if(L&&f(g,L),U)for(let X=0;X<U.length;X++)f(g,U[X]);if(D){let X=D.subTree;if(T===X||gf(X.type)&&(X.ssContent===T||X.ssFallback===T)){const Z=D.vnode;P(g,Z,Z.scopeId,Z.slotScopeIds,D.parent)}}},N=(g,T,L,U,D,X,Z,w,v=0)=>{for(let C=v;C<g.length;C++){const V=g[C]=w?is(g[C]):xi(g[C]);x(null,V,T,L,U,D,X,Z,w)}},q=(g,T,L,U,D,X,Z)=>{const w=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:V}=T;v|=g.patchFlag&16;const z=g.props||Ie,k=T.props||Ie;let ht;if(L&&ps(L,!1),(ht=k.onVnodeBeforeUpdate)&&mi(ht,L,T,g),V&&fs(T,g,L,"beforeUpdate"),L&&ps(L,!0),(z.innerHTML&&k.innerHTML==null||z.textContent&&k.textContent==null)&&h(w,""),C?y(g.dynamicChildren,C,w,L,U,Ya(T,D),X):Z||H(g,T,w,null,L,U,Ya(T,D),X,!1),v>0){if(v&16)E(w,z,k,L,D);else if(v&2&&z.class!==k.class&&o(w,"class",null,k.class,D),v&4&&o(w,"style",z.style,k.style,D),v&8){const ut=T.dynamicProps;for(let pt=0;pt<ut.length;pt++){const At=ut[pt],dt=z[At],xt=k[At];(xt!==dt||At==="value")&&o(w,At,dt,xt,D,L)}}v&1&&g.children!==T.children&&h(w,T.children)}else!Z&&C==null&&E(w,z,k,L,D);((ht=k.onVnodeUpdated)||V)&&In(()=>{ht&&mi(ht,L,T,g),V&&fs(T,g,L,"updated")},U)},y=(g,T,L,U,D,X,Z)=>{for(let w=0;w<T.length;w++){const v=g[w],C=T[w],V=v.el&&(v.type===ln||!Ao(v,C)||v.shapeFlag&70)?u(v.el):L;x(v,C,V,null,U,D,X,Z,!0)}},E=(g,T,L,U,D)=>{if(T!==L){if(T!==Ie)for(const X in T)!zo(X)&&!(X in L)&&o(g,X,T[X],null,D,U);for(const X in L){if(zo(X))continue;const Z=L[X],w=T[X];Z!==w&&X!=="value"&&o(g,X,w,Z,D,U)}"value"in L&&o(g,"value",T.value,L.value,D)}},K=(g,T,L,U,D,X,Z,w,v)=>{const C=T.el=g?g.el:a(""),V=T.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:k,slotScopeIds:ht}=T;ht&&(w=w?w.concat(ht):ht),g==null?(i(C,L,U),i(V,L,U),N(T.children||[],L,V,D,X,Z,w,v)):z>0&&z&64&&k&&g.dynamicChildren?(y(g.dynamicChildren,k,L,D,X,Z,w),(T.key!=null||D&&T===D.subTree)&&hf(g,T,!0)):H(g,T,L,V,D,X,Z,w,v)},W=(g,T,L,U,D,X,Z,w,v)=>{T.slotScopeIds=w,g==null?T.shapeFlag&512?D.ctx.activate(T,L,U,Z,v):J(T,L,U,D,X,Z,v):ot(g,T,v)},J=(g,T,L,U,D,X,Z)=>{const w=g.component=_0(g,U,D);if(Zd(g)&&(w.ctx.renderer=lt),v0(w,!1,Z),w.asyncDep){if(D&&D.registerDep(w,G,Z),!g.el){const v=w.subTree=We(er);m(null,v,T,L)}}else G(w,g,T,L,D,X,Z)},ot=(g,T,L)=>{const U=T.component=g.component;if(a0(g,T,L))if(U.asyncDep&&!U.asyncResolved){nt(U,T,L);return}else U.next=T,U.update();else T.el=g.el,U.vnode=T},G=(g,T,L,U,D,X,Z)=>{const w=()=>{if(g.isMounted){let{next:z,bu:k,u:ht,parent:ut,vnode:pt}=g;{const Dt=df(g);if(Dt){z&&(z.el=pt.el,nt(g,z,Z)),Dt.asyncDep.then(()=>{g.isUnmounted||w()});return}}let At=z,dt;ps(g,!1),z?(z.el=pt.el,nt(g,z,Z)):z=pt,k&&ka(k),(dt=z.props&&z.props.onVnodeBeforeUpdate)&&mi(dt,ut,z,pt),ps(g,!0);const xt=$a(g),Pt=g.subTree;g.subTree=xt,x(Pt,xt,u(Pt.el),F(Pt),g,D,X),z.el=xt.el,At===null&&c0(g,xt.el),ht&&In(ht,D),(dt=z.props&&z.props.onVnodeUpdated)&&In(()=>mi(dt,ut,z,pt),D)}else{let z;const{el:k,props:ht}=T,{bm:ut,m:pt,parent:At,root:dt,type:xt}=g,Pt=ko(T);if(ps(g,!1),ut&&ka(ut),!Pt&&(z=ht&&ht.onVnodeBeforeMount)&&mi(z,At,T),ps(g,!0),k&&Q){const Dt=()=>{g.subTree=$a(g),Q(k,g.subTree,g,D,null)};Pt&&xt.__asyncHydrate?xt.__asyncHydrate(k,g,Dt):Dt()}else{dt.ce&&dt.ce._injectChildStyle(xt);const Dt=g.subTree=$a(g);x(null,Dt,L,U,g,D,X),T.el=Dt.el}if(pt&&In(pt,D),!Pt&&(z=ht&&ht.onVnodeMounted)){const Dt=T;In(()=>mi(z,At,Dt),D)}(T.shapeFlag&256||At&&ko(At.vnode)&&At.vnode.shapeFlag&256)&&g.a&&In(g.a,D),g.isMounted=!0,T=L=U=null}};g.scope.on();const v=g.effect=new Td(w);g.scope.off();const C=g.update=v.run.bind(v),V=g.job=v.runIfDirty.bind(v);V.i=g,V.id=g.uid,v.scheduler=()=>Ql(V),ps(g,!0),C()},nt=(g,T,L)=>{T.component=g;const U=g.vnode.props;g.vnode=T,g.next=null,Xm(g,T.props,U,L),jm(g,T.children,L),us(),Iu(g),hs()},H=(g,T,L,U,D,X,Z,w,v=!1)=>{const C=g&&g.children,V=g?g.shapeFlag:0,z=T.children,{patchFlag:k,shapeFlag:ht}=T;if(k>0){if(k&128){yt(C,z,L,U,D,X,Z,w,v);return}else if(k&256){mt(C,z,L,U,D,X,Z,w,v);return}}ht&8?(V&16&&vt(C,D,X),z!==C&&h(L,z)):V&16?ht&16?yt(C,z,L,U,D,X,Z,w,v):vt(C,D,X,!0):(V&8&&h(L,""),ht&16&&N(z,L,U,D,X,Z,w,v))},mt=(g,T,L,U,D,X,Z,w,v)=>{g=g||io,T=T||io;const C=g.length,V=T.length,z=Math.min(C,V);let k;for(k=0;k<z;k++){const ht=T[k]=v?is(T[k]):xi(T[k]);x(g[k],ht,L,null,D,X,Z,w,v)}C>V?vt(g,D,X,!0,!1,z):N(T,L,U,D,X,Z,w,v,z)},yt=(g,T,L,U,D,X,Z,w,v)=>{let C=0;const V=T.length;let z=g.length-1,k=V-1;for(;C<=z&&C<=k;){const ht=g[C],ut=T[C]=v?is(T[C]):xi(T[C]);if(Ao(ht,ut))x(ht,ut,L,null,D,X,Z,w,v);else break;C++}for(;C<=z&&C<=k;){const ht=g[z],ut=T[k]=v?is(T[k]):xi(T[k]);if(Ao(ht,ut))x(ht,ut,L,null,D,X,Z,w,v);else break;z--,k--}if(C>z){if(C<=k){const ht=k+1,ut=ht<V?T[ht].el:U;for(;C<=k;)x(null,T[C]=v?is(T[C]):xi(T[C]),L,ut,D,X,Z,w,v),C++}}else if(C>k)for(;C<=z;)Lt(g[C],D,X,!0),C++;else{const ht=C,ut=C,pt=new Map;for(C=ut;C<=k;C++){const Ut=T[C]=v?is(T[C]):xi(T[C]);Ut.key!=null&&pt.set(Ut.key,C)}let At,dt=0;const xt=k-ut+1;let Pt=!1,Dt=0;const bt=new Array(xt);for(C=0;C<xt;C++)bt[C]=0;for(C=ht;C<=z;C++){const Ut=g[C];if(dt>=xt){Lt(Ut,D,X,!0);continue}let kt;if(Ut.key!=null)kt=pt.get(Ut.key);else for(At=ut;At<=k;At++)if(bt[At-ut]===0&&Ao(Ut,T[At])){kt=At;break}kt===void 0?Lt(Ut,D,X,!0):(bt[kt-ut]=C+1,kt>=Dt?Dt=kt:Pt=!0,x(Ut,T[kt],L,null,D,X,Z,w,v),dt++)}const Ht=Pt?Qm(bt):io;for(At=Ht.length-1,C=xt-1;C>=0;C--){const Ut=ut+C,kt=T[Ut],B=Ut+1<V?T[Ut+1].el:U;bt[C]===0?x(null,kt,L,B,D,X,Z,w,v):Pt&&(At<0||C!==Ht[At]?gt(kt,L,B,2):At--)}}},gt=(g,T,L,U,D=null)=>{const{el:X,type:Z,transition:w,children:v,shapeFlag:C}=g;if(C&6){gt(g.component.subTree,T,L,U);return}if(C&128){g.suspense.move(T,L,U);return}if(C&64){Z.move(g,T,L,lt);return}if(Z===ln){i(X,T,L);for(let z=0;z<v.length;z++)gt(v[z],T,L,U);i(g.anchor,T,L);return}if(Z===ja){M(g,T,L);return}if(U!==2&&C&1&&w)if(U===0)w.beforeEnter(X),i(X,T,L),In(()=>w.enter(X),D);else{const{leave:z,delayLeave:k,afterLeave:ht}=w,ut=()=>i(X,T,L),pt=()=>{z(X,()=>{ut(),ht&&ht()})};k?k(X,ut,pt):pt()}else i(X,T,L)},Lt=(g,T,L,U=!1,D=!1)=>{const{type:X,props:Z,ref:w,children:v,dynamicChildren:C,shapeFlag:V,patchFlag:z,dirs:k,cacheIndex:ht}=g;if(z===-2&&(D=!1),w!=null&&zc(w,null,L,g,!0),ht!=null&&(T.renderCache[ht]=void 0),V&256){T.ctx.deactivate(g);return}const ut=V&1&&k,pt=!ko(g);let At;if(pt&&(At=Z&&Z.onVnodeBeforeUnmount)&&mi(At,T,g),V&6)ft(g.component,L,U);else{if(V&128){g.suspense.unmount(L,U);return}ut&&fs(g,null,T,"beforeUnmount"),V&64?g.type.remove(g,T,L,lt,U):C&&!C.hasOnce&&(X!==ln||z>0&&z&64)?vt(C,T,L,!1,!0):(X===ln&&z&384||!D&&V&16)&&vt(v,T,L),U&&zt(g)}(pt&&(At=Z&&Z.onVnodeUnmounted)||ut)&&In(()=>{At&&mi(At,T,g),ut&&fs(g,null,T,"unmounted")},L)},zt=g=>{const{type:T,el:L,anchor:U,transition:D}=g;if(T===ln){rt(L,U);return}if(T===ja){S(g);return}const X=()=>{s(L),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:Z,delayLeave:w}=D,v=()=>Z(L,X);w?w(g.el,X,v):v()}else X()},rt=(g,T)=>{let L;for(;g!==T;)L=d(g),s(g),g=L;s(T)},ft=(g,T,L)=>{const{bum:U,scope:D,job:X,subTree:Z,um:w,m:v,a:C}=g;zu(v),zu(C),U&&ka(U),D.stop(),X&&(X.flags|=8,Lt(Z,g,T,L)),w&&In(w,T),In(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},vt=(g,T,L,U=!1,D=!1,X=0)=>{for(let Z=X;Z<g.length;Z++)Lt(g[Z],T,L,U,D)},F=g=>{if(g.shapeFlag&6)return F(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=d(g.anchor||g.el),L=T&&T[ym];return L?d(L):T};let ct=!1;const it=(g,T,L)=>{g==null?T._vnode&&Lt(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,L),T._vnode=g,ct||(ct=!0,Iu(),Yd(),ct=!1)},lt={p:x,um:Lt,m:gt,r:zt,mt:J,mc:N,pc:H,pbc:y,n:F,o:n};let Et,Q;return{render:it,hydrate:Et,createApp:Vm(it,Et)}}function Ya({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ps({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Jm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function hf(n,t,e=!1){const i=n.children,s=t.children;if(oe(i)&&oe(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=is(s[o]),a.el=r.el),!e&&a.patchFlag!==-2&&hf(r,a)),a.type===Ra&&(a.el=r.el)}}function Qm(n){const t=n.slice(),e=[0];let i,s,o,r,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=e[e.length-1],n[s]<l){t[i]=s,e.push(i);continue}for(o=0,r=e.length-1;o<r;)a=o+r>>1,n[e[a]]<l?o=a+1:r=a;l<n[e[o]]&&(o>0&&(t[i]=e[o-1]),e[o]=i)}}for(o=e.length,r=e[o-1];o-- >0;)e[o]=r,r=t[r];return e}function df(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:df(t)}function zu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const t0=Symbol.for("v-scx"),e0=()=>Wi(t0);function Oe(n,t,e){return ff(n,t,e)}function ff(n,t,e=Ie){const{immediate:i,deep:s,flush:o,once:r}=e,a=on({},e);let c;if(Pa)if(o==="sync"){const d=e0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=Mi,d.resume=Mi,d.pause=Mi,d}const l=un;a.call=(d,f,_)=>Si(d,l,f,_);let h=!1;o==="post"?a.scheduler=d=>{In(d,l&&l.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(d,f)=>{f?d():Ql(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,l&&(d.id=l.uid,d.i=l))};const u=mm(n,t,a);return c&&c.push(u),u}function n0(n,t,e){const i=this.proxy,s=en(n)?n.includes(".")?pf(i,n):()=>i[n]:n.bind(i,i);let o;se(t)?o=t:(o=t.handler,e=t);const r=fr(this),a=ff(s,o.bind(i),e);return r(),a}function pf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const i0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${kn(t)}Modifiers`]||n[`${Ds(t)}Modifiers`];function s0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Ie;let s=e;const o=t.startsWith("update:"),r=o&&i0(i,t.slice(7));r&&(r.trim&&(s=e.map(h=>en(h)?h.trim():h)),r.number&&(s=e.map(Dp)));let a,c=i[a=Ha(t)]||i[a=Ha(kn(t))];!c&&o&&(c=i[a=Ha(Ds(t))]),c&&Si(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Si(l,n,6,s)}}function mf(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const o=n.emits;let r={},a=!1;if(!se(n)){const c=l=>{const h=mf(l,t,!0);h&&(a=!0,on(r,h))};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!a?(qe(n)&&i.set(n,null),null):(oe(o)?o.forEach(c=>r[c]=null):on(r,o),qe(n)&&i.set(n,r),r)}function Aa(n,t){return!n||!xa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ee(n,t[0].toLowerCase()+t.slice(1))||Ee(n,Ds(t))||Ee(n,t))}function $a(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:a,emit:c,render:l,renderCache:h,props:u,data:d,setupState:f,ctx:_,inheritAttrs:x}=n,p=la(n);let m,b;try{if(e.shapeFlag&4){const S=s||i,O=S;m=xi(l.call(O,S,h,u,f,d,_)),b=a}else{const S=t;m=xi(S.length>1?S(u,{attrs:a,slots:r,emit:c}):S(u,null)),b=t.props?a:o0(a)}}catch(S){Wo.length=0,ba(S,n,1),m=We(er)}let M=m;if(b&&x!==!1){const S=Object.keys(b),{shapeFlag:O}=M;S.length&&O&7&&(o&&S.some(Bl)&&(b=r0(b,o)),M=fo(M,b,!1,!0))}return e.dirs&&(M=fo(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&tu(M,e.transition),m=M,la(p),m}const o0=n=>{let t;for(const e in n)(e==="class"||e==="style"||xa(e))&&((t||(t={}))[e]=n[e]);return t},r0=(n,t)=>{const e={};for(const i in n)(!Bl(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function a0(n,t,e){const{props:i,children:s,component:o}=n,{props:r,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return i?Gu(i,r,l):!!r;if(c&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(r[d]!==i[d]&&!Aa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Gu(i,r,l):!0:!!r;return!1}function Gu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(t[o]!==n[o]&&!Aa(e,o))return!0}return!1}function c0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const gf=n=>n.__isSuspense;function l0(n,t){t&&t.pendingBranch?oe(n)?t.effects.push(...n):t.effects.push(n):vm(n)}const ln=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),er=Symbol.for("v-cmt"),ja=Symbol.for("v-stc"),Wo=[];let Un=null;function ai(n=!1){Wo.push(Un=n?null:[])}function u0(){Wo.pop(),Un=Wo[Wo.length-1]||null}let nr=1;function Hu(n){nr+=n,n<0&&Un&&(Un.hasOnce=!0)}function h0(n){return n.dynamicChildren=nr>0?Un||io:null,u0(),nr>0&&Un&&Un.push(n),n}function ci(n,t,e,i,s,o){return h0(Vt(n,t,e,i,s,o,!0))}function ha(n){return n?n.__v_isVNode===!0:!1}function Ao(n,t){return n.type===t.type&&n.key===t.key}const _f=({key:n})=>n??null,Qr=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?en(n)||hn(n)||se(n)?{i:Dn,r:n,k:t,f:!!e}:n:null);function Vt(n,t=null,e=null,i=0,s=null,o=n===ln?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&_f(t),ref:t&&Qr(t),scopeId:jd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dn};return a?(su(c,e),o&128&&n.normalize(c)):e&&(c.shapeFlag|=en(e)?8:16),nr>0&&!r&&Un&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Un.push(c),c}const We=d0;function d0(n,t=null,e=null,i=0,s=null,o=!1){if((!n||n===Um)&&(n=er),ha(n)){const a=fo(n,t,!0);return e&&su(a,e),nr>0&&!o&&Un&&(a.shapeFlag&6?Un[Un.indexOf(n)]=a:Un.push(a)),a.patchFlag=-2,a}if(S0(n)&&(n=n.__vccOpts),t){t=f0(t);let{class:a,style:c}=t;a&&!en(a)&&(t.class=Fn(a)),qe(c)&&(Kl(c)&&!oe(c)&&(c=on({},c)),t.style=Hl(c))}const r=en(n)?1:gf(n)?128:Mm(n)?64:qe(n)?4:se(n)?2:0;return Vt(n,t,e,i,s,r,o,!0)}function f0(n){return n?Kl(n)||sf(n)?on({},n):n:null}function fo(n,t,e=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:a,transition:c}=n,l=t?p0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&_f(l),ref:t&&t.ref?e&&o?oe(o)?o.concat(Qr(t)):[o,Qr(t)]:Qr(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ln?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fo(n.ssContent),ssFallback:n.ssFallback&&fo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&tu(h,c.clone(h)),h}function _i(n=" ",t=0){return We(Ra,null,n,t)}function xi(n){return n==null||typeof n=="boolean"?We(er):oe(n)?We(ln,null,n.slice()):ha(n)?is(n):We(Ra,null,String(n))}function is(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fo(n)}function su(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(oe(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),su(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!sf(t)?t._ctx=Dn:s===3&&Dn&&(Dn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else se(t)?(t={default:t,_ctx:Dn},e=32):(t=String(t),i&64?(e=16,t=[_i(t)]):e=8);n.children=t,n.shapeFlag|=e}function p0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Fn([t.class,i.class]));else if(s==="style")t.style=Hl([t.style,i.style]);else if(xa(s)){const o=t[s],r=i[s];r&&o!==r&&!(oe(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=i[s])}return t}function mi(n,t,e,i=null){Si(n,t,7,[e,i])}const m0=tf();let g0=0;function _0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||m0,o={uid:g0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rf(i,s),emitsOptions:mf(i,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=s0.bind(null,o),n.ce&&n.ce(o),o}let un=null,da,Wc;{const n=Ed(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};da=t("__VUE_INSTANCE_SETTERS__",e=>un=e),Wc=t("__VUE_SSR_SETTERS__",e=>Pa=e)}const fr=n=>{const t=un;return da(n),n.scope.on(),()=>{n.scope.off(),da(t)}},ku=()=>{un&&un.scope.off(),da(null)};function vf(n){return n.vnode.shapeFlag&4}let Pa=!1;function v0(n,t=!1,e=!1){t&&Wc(t);const{props:i,children:s}=n.vnode,o=vf(n);Wm(n,i,o,t),$m(n,s,e);const r=o?x0(n,t):void 0;return t&&Wc(!1),r}function x0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Fm);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?M0(n):null,o=fr(n);us();const r=dr(i,n,0,[n.props,s]);if(hs(),o(),wd(r)){if(ko(n)||Kd(n),r.then(ku,ku),t)return r.then(a=>{Vu(n,a,t)}).catch(a=>{ba(a,n,0)});n.asyncDep=r}else Vu(n,r,t)}else xf(n,t)}function Vu(n,t,e){se(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:qe(t)&&(n.setupState=Vd(t)),xf(n,e)}let Wu;function xf(n,t,e){const i=n.type;if(!n.render){if(!t&&Wu&&!i.render){const s=i.template||nu(n).template;if(s){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=on(on({isCustomElement:o,delimiters:a},r),c);i.render=Wu(s,l)}}n.render=i.render||Mi}{const s=fr(n);us();try{Om(n)}finally{hs(),s()}}}const y0={get(n,t){return fn(n,"get",""),n[t]}};function M0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,y0),slots:n.slots,emit:n.emit,expose:t}}function Ca(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vd(lm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Vo)return Vo[e](n)},has(t,e){return e in t||e in Vo}})):n.proxy}function w0(n,t=!0){return se(n)?n.displayName||n.name:n.name||t&&n.__name}function S0(n){return se(n)&&"__vccOpts"in n}const Qn=(n,t)=>fm(n,t,Pa);function yf(n,t,e){const i=arguments.length;return i===2?qe(t)&&!oe(t)?ha(t)?We(n,null,[t]):We(n,t):We(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ha(e)&&(e=[e]),We(n,t,e))}const E0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xc;const Xu=typeof window<"u"&&window.trustedTypes;if(Xu)try{Xc=Xu.createPolicy("vue",{createHTML:n=>n})}catch{}const Mf=Xc?n=>Xc.createHTML(n):n=>n,b0="http://www.w3.org/2000/svg",T0="http://www.w3.org/1998/Math/MathML",zi=typeof document<"u"?document:null,qu=zi&&zi.createElement("template"),A0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?zi.createElementNS(b0,n):t==="mathml"?zi.createElementNS(T0,n):e?zi.createElement(n,{is:e}):zi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>zi.createTextNode(n),createComment:n=>zi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,o){const r=e?e.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===o||!(s=s.nextSibling)););else{qu.innerHTML=Mf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=qu.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},R0=Symbol("_vtc");function P0(n,t,e){const i=n[R0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const fa=Symbol("_vod"),wf=Symbol("_vsh"),C0={beforeMount(n,{value:t},{transition:e}){n[fa]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Ro(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Ro(n,!0),i.enter(n)):i.leave(n,()=>{Ro(n,!1)}):Ro(n,t))},beforeUnmount(n,{value:t}){Ro(n,t)}};function Ro(n,t){n.style.display=t?n[fa]:"none",n[wf]=!t}const I0=Symbol(""),L0=/(^|;)\s*display\s*:/;function D0(n,t,e){const i=n.style,s=en(e);let o=!1;if(e&&!s){if(t)if(en(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&ta(i,a,"")}else for(const r in t)e[r]==null&&ta(i,r,"");for(const r in e)r==="display"&&(o=!0),ta(i,r,e[r])}else if(s){if(t!==e){const r=i[I0];r&&(e+=";"+r),i.cssText=e,o=L0.test(e)}}else t&&n.removeAttribute("style");fa in n&&(n[fa]=o?i.display:"",n[wf]&&(i.display="none"))}const Yu=/\s*!important$/;function ta(n,t,e){if(oe(e))e.forEach(i=>ta(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=U0(n,t);Yu.test(e)?n.setProperty(Ds(i),e.replace(Yu,""),"important"):n[i]=e}}const $u=["Webkit","Moz","ms"],Ka={};function U0(n,t){const e=Ka[t];if(e)return e;let i=kn(t);if(i!=="filter"&&i in n)return Ka[t]=i;i=wa(i);for(let s=0;s<$u.length;s++){const o=$u[s]+i;if(o in n)return Ka[t]=o}return t}const ju="http://www.w3.org/1999/xlink";function Ku(n,t,e,i,s,o=zp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ju,t.slice(6,t.length)):n.setAttributeNS(ju,t,e):e==null||o&&!bd(e)?n.removeAttribute(t):n.setAttribute(t,o?"":wo(e)?String(e):e)}function Zu(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Mf(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(r!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const r=typeof n[t];r==="boolean"?e=bd(e):e==null&&r==="string"?(e="",o=!0):r==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(t)}function N0(n,t,e,i){n.addEventListener(t,e,i)}function F0(n,t,e,i){n.removeEventListener(t,e,i)}const Ju=Symbol("_vei");function O0(n,t,e,i,s=null){const o=n[Ju]||(n[Ju]={}),r=o[t];if(i&&r)r.value=i;else{const[a,c]=B0(t);if(i){const l=o[t]=H0(i,s);N0(n,a,l,c)}else r&&(F0(n,a,r,c),o[t]=void 0)}}const Qu=/(?:Once|Passive|Capture)$/;function B0(n){let t;if(Qu.test(n)){t={};let i;for(;i=n.match(Qu);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ds(n.slice(2)),t]}let Za=0;const z0=Promise.resolve(),G0=()=>Za||(z0.then(()=>Za=0),Za=Date.now());function H0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Si(k0(i,e.value),t,5,[i])};return e.value=n,e.attached=G0(),e}function k0(n,t){if(oe(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const th=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,V0=(n,t,e,i,s,o)=>{const r=s==="svg";t==="class"?P0(n,i,r):t==="style"?D0(n,e,i):xa(t)?Bl(t)||O0(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):W0(n,t,i,r))?(Zu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ku(n,t,i,r,o,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!en(i))?Zu(n,kn(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Ku(n,t,i,r))};function W0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&th(t)&&se(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return th(t)&&en(e)?!1:t in n}const X0=on({patchProp:V0},A0);let eh;function q0(){return eh||(eh=Km(X0))}const Y0=(...n)=>{const t=q0().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=j0(i);if(!s)return;const o=t._component;!se(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=e(s,!1,$0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function $0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function j0(n){return en(n)?document.querySelector(n):n}const K0={id:"app"},Z0=On({__name:"App",setup(n){const t=jt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return Xn(()=>{window.addEventListener("mousemove",e)}),eu(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const o=Lu("router-link"),r=Lu("router-view");return ai(),ci("div",K0,[xm(Vt("nav",null,[We(o,{to:"/3d-bear-arts/leather"},{default:gi(()=>s[0]||(s[0]=[_i("Leather")])),_:1}),We(o,{to:"/3d-bear-arts/pop-art"},{default:gi(()=>s[1]||(s[1]=[_i("Pop MouseMove")])),_:1}),We(o,{to:"/3d-bear-arts/pop-art-bear-3"},{default:gi(()=>s[2]||(s[2]=[_i("Pop3")])),_:1}),We(o,{to:"/3d-bear-arts/machine"},{default:gi(()=>s[3]||(s[3]=[_i("machine")])),_:1}),We(o,{to:"/3d-bear-arts/water"},{default:gi(()=>s[4]||(s[4]=[_i("Water")])),_:1}),We(o,{to:"/3d-bear-arts/ghost-bear"},{default:gi(()=>s[5]||(s[5]=[_i("ghost")])),_:1}),We(o,{to:"/3d-bear-arts/white-ghost-bear"},{default:gi(()=>s[6]||(s[6]=[_i("white ghost")])),_:1}),We(o,{to:"/3d-bear-arts/"},{default:gi(()=>s[7]||(s[7]=[_i("santa")])),_:1}),We(o,{to:"/3d-bear-arts/half"},{default:gi(()=>s[8]||(s[8]=[_i("HalfTranparent")])),_:1})],512),[[C0,t.value]]),We(r)])}}}),li=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},J0=li(Z0,[["__scopeId","data-v-703cc388"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Zs=typeof document<"u";function Sf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Q0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Sf(n.default)}const Ae=Object.assign;function Ja(n,t){const e={};for(const i in t){const s=t[i];e[i]=ri(s)?s.map(n):n(s)}return e}const Xo=()=>{},ri=Array.isArray,Ef=/#/g,tg=/&/g,eg=/\//g,ng=/=/g,ig=/\?/g,bf=/\+/g,sg=/%5B/g,og=/%5D/g,Tf=/%5E/g,rg=/%60/g,Af=/%7B/g,ag=/%7C/g,Rf=/%7D/g,cg=/%20/g;function ou(n){return encodeURI(""+n).replace(ag,"|").replace(sg,"[").replace(og,"]")}function lg(n){return ou(n).replace(Af,"{").replace(Rf,"}").replace(Tf,"^")}function qc(n){return ou(n).replace(bf,"%2B").replace(cg,"+").replace(Ef,"%23").replace(tg,"%26").replace(rg,"`").replace(Af,"{").replace(Rf,"}").replace(Tf,"^")}function ug(n){return qc(n).replace(ng,"%3D")}function hg(n){return ou(n).replace(Ef,"%23").replace(ig,"%3F")}function dg(n){return n==null?"":hg(n).replace(eg,"%2F")}function ir(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const fg=/\/$/,pg=n=>n.replace(fg,"");function Qa(n,t,e="/"){let i,s={},o="",r="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),s=n(o)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=vg(i??t,e),{fullPath:i+(o&&"?")+o+r,path:i,query:s,hash:ir(r)}}function mg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function nh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function gg(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&po(t.matched[i],e.matched[s])&&Pf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function po(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Pf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!_g(n[e],t[e]))return!1;return!0}function _g(n,t){return ri(n)?ih(n,t):ri(t)?ih(t,n):n===t}function ih(n,t){return ri(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function vg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=e.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return e.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const ji={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var sr;(function(n){n.pop="pop",n.push="push"})(sr||(sr={}));var qo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(qo||(qo={}));function xg(n){if(!n)if(Zs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),pg(n)}const yg=/^[^#]+#/;function Mg(n,t){return n.replace(yg,"#")+t}function wg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Ia=()=>({left:window.scrollX,top:window.scrollY});function Sg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=wg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function sh(n,t){return(history.state?history.state.position-t:-1)+n}const Yc=new Map;function Eg(n,t){Yc.set(n,t)}function bg(n){const t=Yc.get(n);return Yc.delete(n),t}let Tg=()=>location.protocol+"//"+location.host;function Cf(n,t){const{pathname:e,search:i,hash:s}=t,o=n.indexOf("#");if(o>-1){let a=s.includes(n.slice(o))?n.slice(o).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),nh(c,"")}return nh(e,n)+i+s}function Ag(n,t,e,i){let s=[],o=[],r=null;const a=({state:d})=>{const f=Cf(n,location),_=e.value,x=t.value;let p=0;if(d){if(e.value=f,t.value=d,r&&r===_){r=null;return}p=x?d.position-x.position:0}else i(f);s.forEach(m=>{m(e.value,_,{delta:p,type:sr.pop,direction:p?p>0?qo.forward:qo.back:qo.unknown})})};function c(){r=e.value}function l(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return o.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(Ae({},d.state,{scroll:Ia()}),"")}function u(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function oh(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Ia():null}}function Rg(n){const{history:t,location:e}=window,i={value:Cf(n,e)},s={value:t.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,l,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+c:Tg()+n+c;try{t[h?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),e[h?"replace":"assign"](d)}}function r(c,l){const h=Ae({},t.state,oh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});o(c,h,!0),i.value=c}function a(c,l){const h=Ae({},s.value,t.state,{forward:c,scroll:Ia()});o(h.current,h,!0);const u=Ae({},oh(i.value,c,null),{position:h.position+1},l);o(c,u,!1),i.value=c}return{location:i,state:s,push:a,replace:r}}function Pg(n){n=xg(n);const t=Rg(n),e=Ag(n,t.state,t.location,t.replace);function i(o,r=!0){r||e.pauseListeners(),history.go(o)}const s=Ae({location:"",base:n,go:i,createHref:Mg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Cg(n){return typeof n=="string"||n&&typeof n=="object"}function If(n){return typeof n=="string"||typeof n=="symbol"}const Lf=Symbol("");var rh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(rh||(rh={}));function mo(n,t){return Ae(new Error,{type:n,[Lf]:!0},t)}function Ii(n,t){return n instanceof Error&&Lf in n&&(t==null||!!(n.type&t))}const ah="[^/]+?",Ig={sensitive:!1,strict:!1,start:!0,end:!0},Lg=/[.+*?^${}()[\]/\\]/g;function Dg(n,t){const e=Ae({},Ig,t),i=[];let s=e.start?"^":"";const o=[];for(const l of n){const h=l.length?[]:[90];e.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const d=l[u];let f=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(Lg,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:x,optional:p,regexp:m}=d;o.push({name:_,repeatable:x,optional:p});const b=m||ah;if(b!==ah){f+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+S.message)}}let M=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(M=p&&l.length<2?`(?:/${M})`:"/"+M),p&&(M+="?"),s+=M,f+=20,p&&(f+=-8),x&&(f+=-20),b===".*"&&(f+=-50)}h.push(f)}i.push(h)}if(e.strict&&e.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const r=new RegExp(s,e.sensitive?"":"i");function a(l){const h=l.match(r),u={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",_=o[d-1];u[_.name]=f&&_.repeatable?f.split("/"):f}return u}function c(l){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:_,repeatable:x,optional:p}=f,m=_ in l?l[_]:"";if(ri(m)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=ri(m)?m.join("/"):m;if(!b)if(p)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:r,score:i,keys:o,parse:a,stringify:c}}function Ug(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Df(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const o=Ug(i[e],s[e]);if(o)return o;e++}if(Math.abs(s.length-i.length)===1){if(ch(i))return 1;if(ch(s))return-1}return s.length-i.length}function ch(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Ng={type:0,value:""},Fg=/[a-zA-Z0-9_]/;function Og(n){if(!n)return[[]];if(n==="/")return[[Ng]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(f){throw new Error(`ERR (${e})/"${l}": ${f}`)}let e=0,i=e;const s=[];let o;function r(){o&&s.push(o),o=[]}let a=0,c,l="",h="";function u(){l&&(e===0?o.push({type:0,value:l}):e===1||e===2||e===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:c==="/"?(l&&u(),r()):c===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:c==="("?e=2:Fg.test(c)?d():(u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:e=3:h+=c;break;case 3:u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),r(),s}function Bg(n,t,e){const i=Dg(Og(n.path),e),s=Ae(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function zg(n,t){const e=[],i=new Map;t=dh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function o(u,d,f){const _=!f,x=uh(u);x.aliasOf=f&&f.record;const p=dh(t,u),m=[x];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of S)m.push(uh(Ae({},x,{components:f?f.record.components:x.components,path:O,aliasOf:f?f.record:x})))}let b,M;for(const S of m){const{path:O}=S;if(d&&O[0]!=="/"){const I=d.record.path,P=I[I.length-1]==="/"?"":"/";S.path=d.record.path+(O&&P+O)}if(b=Bg(S,d,p),f?f.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),_&&u.name&&!hh(b)&&r(u.name)),Uf(b)&&c(b),x.children){const I=x.children;for(let P=0;P<I.length;P++)o(I[P],b,f&&f.children[P])}f=f||b}return M?()=>{r(M)}:Xo}function r(u){if(If(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return e}function c(u){const d=kg(u,e);e.splice(d,0,u),u.record.name&&!hh(u)&&i.set(u.record.name,u)}function l(u,d){let f,_={},x,p;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw mo(1,{location:u});p=f.record.name,_=Ae(lh(d.params,f.keys.filter(M=>!M.optional).concat(f.parent?f.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&lh(u.params,f.keys.map(M=>M.name))),x=f.stringify(_)}else if(u.path!=null)x=u.path,f=e.find(M=>M.re.test(x)),f&&(_=f.parse(x),p=f.record.name);else{if(f=d.name?i.get(d.name):e.find(M=>M.re.test(d.path)),!f)throw mo(1,{location:u,currentLocation:d});p=f.record.name,_=Ae({},d.params,u.params),x=f.stringify(_)}const m=[];let b=f;for(;b;)m.unshift(b.record),b=b.parent;return{name:p,path:x,params:_,matched:m,meta:Hg(m)}}n.forEach(u=>o(u));function h(){e.length=0,i.clear()}return{addRoute:o,resolve:l,removeRoute:r,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function lh(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function uh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Gg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Gg(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function hh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Hg(n){return n.reduce((t,e)=>Ae(t,e.meta),{})}function dh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function kg(n,t){let e=0,i=t.length;for(;e!==i;){const o=e+i>>1;Df(n,t[o])<0?i=o:e=o+1}const s=Vg(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function Vg(n){let t=n;for(;t=t.parent;)if(Uf(t)&&Df(n,t)===0)return t}function Uf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Wg(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(bf," "),r=o.indexOf("="),a=ir(r<0?o:o.slice(0,r)),c=r<0?null:ir(o.slice(r+1));if(a in t){let l=t[a];ri(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function fh(n){let t="";for(let e in n){const i=n[e];if(e=ug(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(ri(i)?i.map(o=>o&&qc(o)):[i&&qc(i)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+e,o!=null&&(t+="="+o))})}return t}function Xg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=ri(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const qg=Symbol(""),ph=Symbol(""),ru=Symbol(""),Nf=Symbol(""),$c=Symbol("");function Po(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function ss(n,t,e,i,s,o=r=>r()){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(mo(4,{from:e,to:t})):d instanceof Error?c(d):Cg(d)?c(mo(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),a())},h=o(()=>n.call(i&&i.instances[s],t,e,l));let u=Promise.resolve(h);n.length<3&&(u=u.then(l)),u.catch(d=>c(d))})}function tc(n,t,e,i,s=o=>o()){const o=[];for(const r of n)for(const a in r.components){let c=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(Sf(c)){const h=(c.__vccOpts||c)[t];h&&o.push(ss(h,e,i,r,a,s))}else{let l=c();o.push(()=>l.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const u=Q0(h)?h.default:h;r.mods[a]=h,r.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&ss(f,e,i,r,a,s)()}))}}return o}function mh(n){const t=Wi(ru),e=Wi(Nf),i=Qn(()=>{const c=so(n.to);return t.resolve(c)}),s=Qn(()=>{const{matched:c}=i.value,{length:l}=c,h=c[l-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(po.bind(null,h));if(d>-1)return d;const f=gh(c[l-2]);return l>1&&gh(h)===f&&u[u.length-1].path!==f?u.findIndex(po.bind(null,c[l-2])):d}),o=Qn(()=>s.value>-1&&Kg(e.params,i.value.params)),r=Qn(()=>s.value>-1&&s.value===e.matched.length-1&&Pf(e.params,i.value.params));function a(c={}){return jg(c)?t[so(n.replace)?"replace":"push"](so(n.to)).catch(Xo):Promise.resolve()}return{route:i,href:Qn(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const Yg=On({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mh,setup(n,{slots:t}){const e=Ea(mh(n)),{options:i}=Wi(ru),s=Qn(()=>({[_h(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[_h(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const o=t.default&&t.default(e);return n.custom?o:yf("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},o)}}}),$g=Yg;function jg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Kg(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!ri(s)||s.length!==i.length||i.some((o,r)=>o!==s[r]))return!1}return!0}function gh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const _h=(n,t,e)=>n??t??e,Zg=On({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Wi($c),s=Qn(()=>n.route||i.value),o=Wi(ph,0),r=Qn(()=>{let l=so(o);const{matched:h}=s.value;let u;for(;(u=h[l])&&!u.components;)l++;return l}),a=Qn(()=>s.value.matched[r.value]);Jr(ph,Qn(()=>r.value+1)),Jr(qg,a),Jr($c,s);const c=jt();return Oe(()=>[c.value,a.value,n.name],([l,h,u],[d,f,_])=>{h&&(h.instances[u]=l,f&&f!==h&&l&&l===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),l&&h&&(!f||!po(h,f)||!d)&&(h.enterCallbacks[u]||[]).forEach(x=>x(l))},{flush:"post"}),()=>{const l=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return vh(e.default,{Component:d,route:l});const f=u.props[h],_=f?f===!0?l.params:typeof f=="function"?f(l):f:null,p=yf(d,Ae({},_,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:c}));return vh(e.default,{Component:p,route:l})||p}}});function vh(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Jg=Zg;function Qg(n){const t=zg(n.routes,n),e=n.parseQuery||Wg,i=n.stringifyQuery||fh,s=n.history,o=Po(),r=Po(),a=Po(),c=Ho(ji);let l=ji;Zs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ja.bind(null,F=>""+F),u=Ja.bind(null,dg),d=Ja.bind(null,ir);function f(F,ct){let it,lt;return If(F)?(it=t.getRecordMatcher(F),lt=ct):lt=F,t.addRoute(lt,it)}function _(F){const ct=t.getRecordMatcher(F);ct&&t.removeRoute(ct)}function x(){return t.getRoutes().map(F=>F.record)}function p(F){return!!t.getRecordMatcher(F)}function m(F,ct){if(ct=Ae({},ct||c.value),typeof F=="string"){const T=Qa(e,F,ct.path),L=t.resolve({path:T.path},ct),U=s.createHref(T.fullPath);return Ae(T,L,{params:d(L.params),hash:ir(T.hash),redirectedFrom:void 0,href:U})}let it;if(F.path!=null)it=Ae({},F,{path:Qa(e,F.path,ct.path).path});else{const T=Ae({},F.params);for(const L in T)T[L]==null&&delete T[L];it=Ae({},F,{params:u(T)}),ct.params=u(ct.params)}const lt=t.resolve(it,ct),Et=F.hash||"";lt.params=h(d(lt.params));const Q=mg(i,Ae({},F,{hash:lg(Et),path:lt.path})),g=s.createHref(Q);return Ae({fullPath:Q,hash:Et,query:i===fh?Xg(F.query):F.query||{}},lt,{redirectedFrom:void 0,href:g})}function b(F){return typeof F=="string"?Qa(e,F,c.value.path):Ae({},F)}function M(F,ct){if(l!==F)return mo(8,{from:ct,to:F})}function S(F){return P(F)}function O(F){return S(Ae(b(F),{replace:!0}))}function I(F){const ct=F.matched[F.matched.length-1];if(ct&&ct.redirect){const{redirect:it}=ct;let lt=typeof it=="function"?it(F):it;return typeof lt=="string"&&(lt=lt.includes("?")||lt.includes("#")?lt=b(lt):{path:lt},lt.params={}),Ae({query:F.query,hash:F.hash,params:lt.path!=null?{}:F.params},lt)}}function P(F,ct){const it=l=m(F),lt=c.value,Et=F.state,Q=F.force,g=F.replace===!0,T=I(it);if(T)return P(Ae(b(T),{state:typeof T=="object"?Ae({},Et,T.state):Et,force:Q,replace:g}),ct||it);const L=it;L.redirectedFrom=ct;let U;return!Q&&gg(i,lt,it)&&(U=mo(16,{to:L,from:lt}),gt(lt,lt,!0,!1)),(U?Promise.resolve(U):y(L,lt)).catch(D=>Ii(D)?Ii(D,2)?D:yt(D):H(D,L,lt)).then(D=>{if(D){if(Ii(D,2))return P(Ae({replace:g},b(D.to),{state:typeof D.to=="object"?Ae({},Et,D.to.state):Et,force:Q}),ct||L)}else D=K(L,lt,!0,g,Et);return E(L,lt,D),D})}function N(F,ct){const it=M(F,ct);return it?Promise.reject(it):Promise.resolve()}function q(F){const ct=rt.values().next().value;return ct&&typeof ct.runWithContext=="function"?ct.runWithContext(F):F()}function y(F,ct){let it;const[lt,Et,Q]=t_(F,ct);it=tc(lt.reverse(),"beforeRouteLeave",F,ct);for(const T of lt)T.leaveGuards.forEach(L=>{it.push(ss(L,F,ct))});const g=N.bind(null,F,ct);return it.push(g),vt(it).then(()=>{it=[];for(const T of o.list())it.push(ss(T,F,ct));return it.push(g),vt(it)}).then(()=>{it=tc(Et,"beforeRouteUpdate",F,ct);for(const T of Et)T.updateGuards.forEach(L=>{it.push(ss(L,F,ct))});return it.push(g),vt(it)}).then(()=>{it=[];for(const T of Q)if(T.beforeEnter)if(ri(T.beforeEnter))for(const L of T.beforeEnter)it.push(ss(L,F,ct));else it.push(ss(T.beforeEnter,F,ct));return it.push(g),vt(it)}).then(()=>(F.matched.forEach(T=>T.enterCallbacks={}),it=tc(Q,"beforeRouteEnter",F,ct,q),it.push(g),vt(it))).then(()=>{it=[];for(const T of r.list())it.push(ss(T,F,ct));return it.push(g),vt(it)}).catch(T=>Ii(T,8)?T:Promise.reject(T))}function E(F,ct,it){a.list().forEach(lt=>q(()=>lt(F,ct,it)))}function K(F,ct,it,lt,Et){const Q=M(F,ct);if(Q)return Q;const g=ct===ji,T=Zs?history.state:{};it&&(lt||g?s.replace(F.fullPath,Ae({scroll:g&&T&&T.scroll},Et)):s.push(F.fullPath,Et)),c.value=F,gt(F,ct,it,g),yt()}let W;function J(){W||(W=s.listen((F,ct,it)=>{if(!ft.listening)return;const lt=m(F),Et=I(lt);if(Et){P(Ae(Et,{replace:!0}),lt).catch(Xo);return}l=lt;const Q=c.value;Zs&&Eg(sh(Q.fullPath,it.delta),Ia()),y(lt,Q).catch(g=>Ii(g,12)?g:Ii(g,2)?(P(g.to,lt).then(T=>{Ii(T,20)&&!it.delta&&it.type===sr.pop&&s.go(-1,!1)}).catch(Xo),Promise.reject()):(it.delta&&s.go(-it.delta,!1),H(g,lt,Q))).then(g=>{g=g||K(lt,Q,!1),g&&(it.delta&&!Ii(g,8)?s.go(-it.delta,!1):it.type===sr.pop&&Ii(g,20)&&s.go(-1,!1)),E(lt,Q,g)}).catch(Xo)}))}let ot=Po(),G=Po(),nt;function H(F,ct,it){yt(F);const lt=G.list();return lt.length?lt.forEach(Et=>Et(F,ct,it)):console.error(F),Promise.reject(F)}function mt(){return nt&&c.value!==ji?Promise.resolve():new Promise((F,ct)=>{ot.add([F,ct])})}function yt(F){return nt||(nt=!F,J(),ot.list().forEach(([ct,it])=>F?it(F):ct()),ot.reset()),F}function gt(F,ct,it,lt){const{scrollBehavior:Et}=n;if(!Zs||!Et)return Promise.resolve();const Q=!it&&bg(sh(F.fullPath,0))||(lt||!it)&&history.state&&history.state.scroll||null;return Xd().then(()=>Et(F,ct,Q)).then(g=>g&&Sg(g)).catch(g=>H(g,F,ct))}const Lt=F=>s.go(F);let zt;const rt=new Set,ft={currentRoute:c,listening:!0,addRoute:f,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:p,getRoutes:x,resolve:m,options:n,push:S,replace:O,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:G.add,isReady:mt,install(F){const ct=this;F.component("RouterLink",$g),F.component("RouterView",Jg),F.config.globalProperties.$router=ct,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>so(c)}),Zs&&!zt&&c.value===ji&&(zt=!0,S(s.location).catch(Et=>{}));const it={};for(const Et in ji)Object.defineProperty(it,Et,{get:()=>c.value[Et],enumerable:!0});F.provide(ru,ct),F.provide(Nf,Gd(it)),F.provide($c,c);const lt=F.unmount;rt.add(F),F.unmount=function(){rt.delete(F),rt.size<1&&(l=ji,W&&W(),W=null,c.value=ji,zt=!1,nt=!1),lt()}}};function vt(F){return F.reduce((ct,it)=>ct.then(()=>q(it)),Promise.resolve())}return ft}function t_(n,t){const e=[],i=[],s=[],o=Math.max(t.matched.length,n.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(n.matched.find(l=>po(l,a))?i.push(a):e.push(a));const c=n.matched[r];c&&(t.matched.find(l=>po(l,c))||s.push(c))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const au="169",e_=0,xh=1,n_=2,Ff=1,i_=2,Bi=3,ls=0,En=1,fe=2,rs=0,ao=1,yh=2,Mh=3,wh=4,s_=5,Es=100,o_=101,r_=102,a_=103,c_=104,l_=200,u_=201,h_=202,d_=203,jc=204,Kc=205,f_=206,p_=207,m_=208,g_=209,__=210,v_=211,x_=212,y_=213,M_=214,Zc=0,Jc=1,Qc=2,go=3,tl=4,el=5,nl=6,il=7,Of=0,w_=1,S_=2,as=0,E_=1,b_=2,T_=3,Bf=4,A_=5,R_=6,P_=7,zf=300,_o=301,vo=302,or=303,sl=304,La=306,ke=1e3,Ts=1001,ol=1002,Hn=1003,C_=1004,br=1005,ti=1006,ec=1007,As=1008,Xi=1009,Gf=1010,Hf=1011,rr=1012,cu=1013,Cs=1014,Hi=1015,pr=1016,lu=1017,uu=1018,xo=1020,kf=35902,Vf=1021,Wf=1022,ni=1023,Xf=1024,qf=1025,co=1026,yo=1027,Yf=1028,hu=1029,$f=1030,du=1031,fu=1033,ea=33776,na=33777,ia=33778,sa=33779,rl=35840,al=35841,cl=35842,ll=35843,ul=36196,hl=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,_l=37812,vl=37813,xl=37814,yl=37815,Ml=37816,wl=37817,Sl=37818,El=37819,bl=37820,Tl=37821,oa=36492,Al=36494,Rl=36495,jf=36283,Pl=36284,Cl=36285,Il=36286,I_=3200,L_=3201,Kf=0,D_=1,os="",Jn="srgb",ds="srgb-linear",pu="display-p3",Da="display-p3-linear",pa="linear",Ue="srgb",ma="rec709",ga="p3",Fs=7680,Sh=519,U_=512,N_=513,F_=514,Zf=515,O_=516,B_=517,z_=518,G_=519,Eh=35044,bh="300 es",ki=2e3,_a=2001;class So{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Th=1234567;const Yo=Math.PI/180,ar=180/Math.PI;function Us(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function tn(n,t,e){return Math.max(t,Math.min(e,n))}function mu(n,t){return(n%t+t)%t}function H_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function k_(n,t,e){return n!==t?(e-n)/(t-n):0}function $o(n,t,e){return(1-e)*n+e*t}function V_(n,t,e,i){return $o(n,t,1-Math.exp(-e*i))}function W_(n,t=1){return t-Math.abs(mu(n,t*2)-t)}function X_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function q_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Y_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function $_(n,t){return n+Math.random()*(t-n)}function j_(n){return n*(.5-Math.random())}function K_(n){n!==void 0&&(Th=n);let t=Th+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Z_(n){return n*Yo}function J_(n){return n*ar}function Q_(n){return(n&n-1)===0&&n!==0}function tv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ev(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nv(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),d=r((t-i)/2),f=o((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*_,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*_,a*l);break;case"ZYZ":n.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Js(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _n(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ee={DEG2RAD:Yo,RAD2DEG:ar,generateUUID:Us,clamp:tn,euclideanModulo:mu,mapLinear:H_,inverseLerp:k_,lerp:$o,damp:V_,pingpong:W_,smoothstep:X_,smootherstep:q_,randInt:Y_,randFloat:$_,randFloatSpread:j_,seededRandom:K_,degToRad:Z_,radToDeg:J_,isPowerOfTwo:Q_,ceilPowerOfTwo:tv,floorPowerOfTwo:ev,setQuaternionFromProperEuler:nv,normalize:_n,denormalize:Js};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,i,s,o,r,a,c,l){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],x=s[0],p=s[3],m=s[6],b=s[1],M=s[4],S=s[7],O=s[2],I=s[5],P=s[8];return o[0]=r*x+a*b+c*O,o[3]=r*p+a*M+c*I,o[6]=r*m+a*S+c*P,o[1]=l*x+h*b+u*O,o[4]=l*p+h*M+u*I,o[7]=l*m+h*S+u*P,o[2]=d*x+f*b+_*O,o[5]=d*p+f*M+_*I,o[8]=d*m+f*S+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,f=l*o-r*c,_=e*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*r)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(nc.makeScale(t,e)),this}rotate(t){return this.premultiply(nc.makeRotation(-t)),this}translate(t,e){return this.premultiply(nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nc=new ce;function Jf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function iv(){const n=cr("canvas");return n.style.display="block",n}const Ah={};function ra(n){n in Ah||(Ah[n]=!0,console.warn(n))}function sv(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function ov(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Rh=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ph=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Co={[ds]:{transfer:pa,primaries:ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Jn]:{transfer:Ue,primaries:ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Da]:{transfer:pa,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ph),fromReference:n=>n.applyMatrix3(Rh)},[pu]:{transfer:Ue,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ph),fromReference:n=>n.applyMatrix3(Rh).convertLinearToSRGB()}},av=new Set([ds,Da]),be={enabled:!0,_workingColorSpace:ds,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!av.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Co[t].toReference,s=Co[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Co[n].primaries},getTransfer:function(n){return n===os?pa:Co[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Co[t].luminanceCoefficients)}};function lo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ic(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Os;class cv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=cr("canvas")),Os.width=t.width,Os.height=t.height;const i=Os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=lo(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(lo(e[i]/255)*255):e[i]=lo(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lv=0;class Qf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(sc(s[r].image)):o.push(sc(s[r]))}else o=sc(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function sc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uv=0;class Mn extends So{constructor(t=Mn.DEFAULT_IMAGE,e=Mn.DEFAULT_MAPPING,i=Ts,s=Ts,o=ti,r=As,a=ni,c=Xi,l=Mn.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Us(),this.name="",this.source=new Qf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ke:t.x=t.x-Math.floor(t.x);break;case Ts:t.x=t.x<0?0:1;break;case ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ke:t.y=t.y-Math.floor(t.y);break;case Ts:t.y=t.y<0?0:1;break;case ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=zf;Mn.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,i=0,s=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,S=(f+1)/2,O=(m+1)/2,I=(h+d)/4,P=(u+x)/4,N=(_+p)/4;return M>S&&M>O?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=I/i,o=P/i):S>O?S<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),i=I/s,o=N/s):O<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),i=P/o,s=N/o),this.set(i,s,o,e),this}let b=Math.sqrt((p-_)*(p-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hv extends So{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends hv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class tp extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dv extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=o[r+0],f=o[r+1],_=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==_){let p=1-a;const m=c*d+l*f+h*_+u*x,b=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const O=Math.sqrt(M),I=Math.atan2(O,m*b);p=Math.sin(p*I)/O,a=Math.sin(a*I)/O}const S=a*b;if(c=c*p+d*S,l=l*p+f*S,h=h*p+_*S,u=u*p+x*S,p===1-a){const O=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=O,l*=O,h*=O,u*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=o[r],d=o[r+1],f=o[r+2],_=o[r+3];return t[e]=a*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-a*f,t[e+2]=l*_+h*f+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(o/2),d=c(i/2),f=c(s/2),_=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,i=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ch.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+c*l+r*u-a*h,this.y=i+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oc.copy(this).projectOnVector(t),this.sub(oc)}reflect(t){return this.sub(oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new $,Ch=new mr;class gr{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,jn):jn.fromBufferAttribute(o,r),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),Ar.subVectors(this.max,Io),Bs.subVectors(t.a,Io),zs.subVectors(t.b,Io),Gs.subVectors(t.c,Io),Ki.subVectors(zs,Bs),Zi.subVectors(Gs,zs),ms.subVectors(Bs,Gs);let e=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-ms.z,ms.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,ms.z,0,-ms.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-ms.y,ms.x,0];return!rc(e,Bs,zs,Gs,Ar)||(e=[1,0,0,0,1,0,0,0,1],!rc(e,Bs,zs,Gs,Ar))?!1:(Rr.crossVectors(Ki,Zi),e=[Rr.x,Rr.y,Rr.z],rc(e,Bs,zs,Gs,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Li=[new $,new $,new $,new $,new $,new $,new $,new $],jn=new $,Tr=new gr,Bs=new $,zs=new $,Gs=new $,Ki=new $,Zi=new $,ms=new $,Io=new $,Ar=new $,Rr=new $,gs=new $;function rc(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){gs.fromArray(n,o);const a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=t.dot(gs),l=e.dot(gs),h=i.dot(gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const fv=new gr,Lo=new $,ac=new $;class gu{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):fv.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const e=Lo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Lo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(ac)),this.expandByPoint(Lo.copy(t.center).sub(ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new $,cc=new $,Pr=new $,Ji=new $,lc=new $,Cr=new $,uc=new $;class pv{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){cc.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Ji.copy(this.origin).sub(cc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Pr),a=Ji.dot(this.direction),c=-Ji.dot(Pr),l=Ji.lengthSq(),h=Math.abs(1-r*r);let u,d,f,_;if(h>0)if(u=r*c-a,d=r*a-c,_=o*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(cc).addScaledVector(Pr,d),f}intersectSphere(t,e){Di.subVectors(t.center,this.origin);const i=Di.dot(this.direction),s=Di.dot(Di)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,i,s,o){lc.subVectors(e,t),Cr.subVectors(i,t),uc.crossVectors(lc,Cr);let r=this.direction.dot(uc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ji.subVectors(this.origin,t);const c=a*this.direction.dot(Cr.crossVectors(Ji,Cr));if(c<0)return null;const l=a*this.direction.dot(lc.cross(Ji));if(l<0||c+l>r)return null;const h=-a*Ji.dot(uc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(t,e,i,s,o,r,a,c,l,h,u,d,f,_,x,p){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,h,u,d,f,_,x,p)}set(t,e,i,s,o,r,a,c,l,h,u,d,f,_,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Hs.setFromMatrixColumn(t,0).length(),o=1/Hs.setFromMatrixColumn(t,1).length(),r=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,_=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=_+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,_=l*h,x=l*u;e[0]=d+x*a,e[4]=_*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-_,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,_=l*h,x=l*u;e[0]=d-x*a,e[4]=-r*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,_=a*h,x=a*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,_=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=_*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-x*u}else if(t.order==="XZY"){const d=r*c,f=r*l,_=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=r*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mv,t,gv)}lookAt(t,e,i){const s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Qi.crossVectors(i,Pn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Qi.crossVectors(i,Pn)),Qi.normalize(),Ir.crossVectors(Pn,Qi),s[0]=Qi.x,s[4]=Ir.x,s[8]=Pn.x,s[1]=Qi.y,s[5]=Ir.y,s[9]=Pn.y,s[2]=Qi.z,s[6]=Ir.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],x=i[6],p=i[10],m=i[14],b=i[3],M=i[7],S=i[11],O=i[15],I=s[0],P=s[4],N=s[8],q=s[12],y=s[1],E=s[5],K=s[9],W=s[13],J=s[2],ot=s[6],G=s[10],nt=s[14],H=s[3],mt=s[7],yt=s[11],gt=s[15];return o[0]=r*I+a*y+c*J+l*H,o[4]=r*P+a*E+c*ot+l*mt,o[8]=r*N+a*K+c*G+l*yt,o[12]=r*q+a*W+c*nt+l*gt,o[1]=h*I+u*y+d*J+f*H,o[5]=h*P+u*E+d*ot+f*mt,o[9]=h*N+u*K+d*G+f*yt,o[13]=h*q+u*W+d*nt+f*gt,o[2]=_*I+x*y+p*J+m*H,o[6]=_*P+x*E+p*ot+m*mt,o[10]=_*N+x*K+p*G+m*yt,o[14]=_*q+x*W+p*nt+m*gt,o[3]=b*I+M*y+S*J+O*H,o[7]=b*P+M*E+S*ot+O*mt,o[11]=b*N+M*K+S*G+O*yt,o[15]=b*q+M*W+S*nt+O*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],x=t[7],p=t[11],m=t[15];return _*(+o*c*u-s*l*u-o*a*d+i*l*d+s*a*f-i*c*f)+x*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*h-o*c*h)+p*(+e*l*u-e*a*f-o*r*u+i*r*f+o*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*d+s*r*u-i*r*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],x=t[13],p=t[14],m=t[15],b=u*p*l-x*d*l+x*c*f-a*p*f-u*c*m+a*d*m,M=_*d*l-h*p*l-_*c*f+r*p*f+h*c*m-r*d*m,S=h*x*l-_*u*l+_*a*f-r*x*f-h*a*m+r*u*m,O=_*u*c-h*x*c-_*a*d+r*x*d+h*a*p-r*u*p,I=e*b+i*M+s*S+o*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=b*P,t[1]=(x*d*o-u*p*o-x*s*f+i*p*f+u*s*m-i*d*m)*P,t[2]=(a*p*o-x*c*o+x*s*l-i*p*l-a*s*m+i*c*m)*P,t[3]=(u*c*o-a*d*o-u*s*l+i*d*l+a*s*f-i*c*f)*P,t[4]=M*P,t[5]=(h*p*o-_*d*o+_*s*f-e*p*f-h*s*m+e*d*m)*P,t[6]=(_*c*o-r*p*o-_*s*l+e*p*l+r*s*m-e*c*m)*P,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*f+e*c*f)*P,t[8]=S*P,t[9]=(_*u*o-h*x*o-_*i*f+e*x*f+h*i*m-e*u*m)*P,t[10]=(r*x*o-_*a*o+_*i*l-e*x*l-r*i*m+e*a*m)*P,t[11]=(h*a*o-r*u*o-h*i*l+e*u*l+r*i*f-e*a*f)*P,t[12]=O*P,t[13]=(h*x*s-_*u*s+_*i*d-e*x*d-h*i*p+e*u*p)*P,t[14]=(_*a*s-r*x*s-_*i*c+e*x*c+r*i*p-e*a*p)*P,t[15]=(r*u*s-h*a*s+h*i*c-e*u*c-r*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,f=o*h,_=o*u,x=r*h,p=r*u,m=a*u,b=c*l,M=c*h,S=c*u,O=i.x,I=i.y,P=i.z;return s[0]=(1-(x+m))*O,s[1]=(f+S)*O,s[2]=(_-M)*O,s[3]=0,s[4]=(f-S)*I,s[5]=(1-(d+m))*I,s[6]=(p+b)*I,s[7]=0,s[8]=(_+M)*P,s[9]=(p-b)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Hs.set(s[0],s[1],s[2]).length();const r=Hs.set(s[4],s[5],s[6]).length(),a=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Kn.copy(this);const l=1/o,h=1/r,u=1/a;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,e.setFromRotationMatrix(Kn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=ki){const c=this.elements,l=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,_;if(a===ki)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===_a)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=ki){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*l,f=(i+s)*h;let _,x;if(a===ki)_=(r+o)*u,x=-2*u;else if(a===_a)_=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Hs=new $,Kn=new Be,mv=new $(0,0,0),gv=new $(1,1,1),Qi=new $,Ir=new $,Pn=new $,Ih=new Be,Lh=new mr;class Ei{constructor(t=0,e=0,i=0,s=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class ep{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _v=0;const Dh=new $,ks=new mr,Ui=new Be,Lr=new $,Do=new $,vv=new $,xv=new mr,Uh=new $(1,0,0),Nh=new $(0,1,0),Fh=new $(0,0,1),Oh={type:"added"},yv={type:"removed"},Vs={type:"childadded",child:null},hc={type:"childremoved",child:null};class dn extends So{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const t=new $,e=new Ei,i=new mr,s=new $(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new ce}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lr.copy(t):Lr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Do,Lr,this.up):Ui.lookAt(Lr,Do,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Ui),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yv),hc.child=t,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,vv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,xv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),_=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}dn.DEFAULT_UP=new $(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new $,Ni=new $,dc=new $,Fi=new $,Ws=new $,Xs=new $,Bh=new $,fc=new $,pc=new $,mc=new $,gc=new Pe,_c=new Pe,vc=new Pe;class ei{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Zn.subVectors(t,e),s.cross(Zn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Zn.subVectors(s,e),Ni.subVectors(i,e),dc.subVectors(t,e);const r=Zn.dot(Zn),a=Zn.dot(Ni),c=Zn.dot(dc),l=Ni.dot(Ni),h=Ni.dot(dc),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,_=(r*h-a*c)*d;return o.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Fi.x),c.addScaledVector(r,Fi.y),c.addScaledVector(a,Fi.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return gc.setScalar(0),_c.setScalar(0),vc.setScalar(0),gc.fromBufferAttribute(t,e),_c.fromBufferAttribute(t,i),vc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(gc,o.x),r.addScaledVector(_c,o.y),r.addScaledVector(vc,o.z),r}static isFrontFacing(t,e,i,s){return Zn.subVectors(i,e),Ni.subVectors(t,e),Zn.cross(Ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Zn.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return ei.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;Ws.subVectors(s,i),Xs.subVectors(o,i),fc.subVectors(t,i);const c=Ws.dot(fc),l=Xs.dot(fc);if(c<=0&&l<=0)return e.copy(i);pc.subVectors(t,s);const h=Ws.dot(pc),u=Xs.dot(pc);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(Ws,r);mc.subVectors(t,o);const f=Ws.dot(mc),_=Xs.dot(mc);if(_>=0&&f<=_)return e.copy(o);const x=f*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Xs,a);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return Bh.subVectors(o,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector(Bh,a);const m=1/(p+x+d);return r=x*m,a=d*m,e.copy(i).addScaledVector(Ws,r).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function xc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class pe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=i,be.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=be.workingColorSpace){if(t=mu(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=xc(r,o,t+1/3),this.g=xc(r,o,t),this.b=xc(r,o,t-1/3)}return be.toWorkingColorSpace(this,s),this}setStyle(t,e=Jn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Jn){const i=np[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=lo(t.r),this.g=lo(t.g),this.b=lo(t.b),this}copyLinearToSRGB(t){return this.r=ic(t.r),this.g=ic(t.g),this.b=ic(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return be.fromWorkingColorSpace(cn.copy(this),t),Math.round(tn(cn.r*255,0,255))*65536+Math.round(tn(cn.g*255,0,255))*256+Math.round(tn(cn.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(cn.copy(this),e);const i=cn.r,s=cn.g,o=cn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case i:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-i)/u+2;break;case o:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Jn){be.fromWorkingColorSpace(cn.copy(this),t);const e=cn.r,i=cn.g,s=cn.b;return t!==Jn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+e,ts.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ts),t.getHSL(Dr);const i=$o(ts.h,Dr.h,e),s=$o(ts.s,Dr.s,e),o=$o(ts.l,Dr.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new pe;pe.NAMES=np;let Mv=0;class _r extends So{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=ao,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Kc,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jc&&(i.blendSrc=this.blendSrc),this.blendDst!==Kc&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bn extends _r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const je=new $,Ur=new Ot;class wi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Eh,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Js(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_n(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array),s=_n(s,this.array),o=_n(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eh&&(t.usage=this.usage),t}}class ip extends wi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class sp extends wi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Xe extends wi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let wv=0;const Gn=new Be,yc=new dn,qs=new $,Cn=new gr,Uo=new gr,Qe=new $;class qn extends So{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jf(t)?sp:ip)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ce().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,i){return Gn.makeTranslation(t,e,i),this.applyMatrix4(Gn),this}scale(t,e,i){return Gn.makeScale(t,e,i),this.applyMatrix4(Gn),this}lookAt(t){return yc.lookAt(t),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Cn.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Cn.min,Uo.min),Cn.expandByPoint(Qe),Qe.addVectors(Cn.max,Uo.max),Cn.expandByPoint(Qe)):(Cn.expandByPoint(Uo.min),Cn.expandByPoint(Uo.max))}Cn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Qe.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Qe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Qe.fromBufferAttribute(a,l),c&&(qs.fromBufferAttribute(t,l),Qe.add(qs)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new $,c[N]=new $;const l=new $,h=new $,u=new $,d=new Ot,f=new Ot,_=new Ot,x=new $,p=new $;function m(N,q,y){l.fromBufferAttribute(i,N),h.fromBufferAttribute(i,q),u.fromBufferAttribute(i,y),d.fromBufferAttribute(o,N),f.fromBufferAttribute(o,q),_.fromBufferAttribute(o,y),h.sub(l),u.sub(l),f.sub(d),_.sub(d);const E=1/(f.x*_.y-_.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(E),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(E),a[N].add(x),a[q].add(x),a[y].add(x),c[N].add(p),c[q].add(p),c[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let N=0,q=b.length;N<q;++N){const y=b[N],E=y.start,K=y.count;for(let W=E,J=E+K;W<J;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const M=new $,S=new $,O=new $,I=new $;function P(N){O.fromBufferAttribute(s,N),I.copy(O);const q=a[N];M.copy(q),M.sub(O.multiplyScalar(O.dot(q))).normalize(),S.crossVectors(I,q);const E=S.dot(c[N])<0?-1:1;r.setXYZW(N,M.x,M.y,M.z,E)}for(let N=0,q=b.length;N<q;++N){const y=b[N],E=y.start,K=y.count;for(let W=E,J=E+K;W<J;W+=3)P(t.getX(W+0)),P(t.getX(W+1)),P(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new $,o=new $,r=new $,a=new $,c=new $,l=new $,h=new $,u=new $;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[_++]=l[f++]}return new wi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new Be,_s=new pv,Nr=new gu,Gh=new $,Fr=new $,Or=new $,Br=new $,Mc=new $,zr=new $,Hh=new $,Gr=new $;class A extends dn{constructor(t=new qn,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){zr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Mc.fromBufferAttribute(u,t),r?zr.addScaledVector(Mc,h):zr.addScaledVector(Mc.sub(e),h))}e.add(zr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(o),_s.copy(t.ray).recast(t.near),!(Nr.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Nr,Gh)===null||_s.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(zh.copy(o).invert(),_s.copy(t.ray).applyMatrix4(zh),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=r[p.materialIndex],b=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,O=M;S<O;S+=3){const I=a.getX(S),P=a.getX(S+1),N=a.getX(S+2);s=Hr(this,m,t,i,l,h,u,I,P,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const b=a.getX(p),M=a.getX(p+1),S=a.getX(p+2);s=Hr(this,r,t,i,l,h,u,b,M,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=r[p.materialIndex],b=Math.max(p.start,f.start),M=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,O=M;S<O;S+=3){const I=S,P=S+1,N=S+2;s=Hr(this,m,t,i,l,h,u,I,P,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const b=p,M=p+1,S=p+2;s=Hr(this,r,t,i,l,h,u,b,M,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Sv(n,t,e,i,s,o,r,a){let c;if(t.side===En?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===ls,a),c===null)return null;Gr.copy(a),Gr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Gr);return l<e.near||l>e.far?null:{distance:l,point:Gr.clone(),object:n}}function Hr(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,Fr),n.getVertexPosition(c,Or),n.getVertexPosition(l,Br);const h=Sv(n,t,e,i,Fr,Or,Br,Hh);if(h){const u=new $;ei.getBarycoord(Hh,Fr,Or,Br,u),s&&(h.uv=ei.getInterpolatedAttribute(s,a,c,l,u,new Ot)),o&&(h.uv1=ei.getInterpolatedAttribute(o,a,c,l,u,new Ot)),r&&(h.normal=ei.getInterpolatedAttribute(r,a,c,l,u,new $),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new $,materialIndex:0};ei.getNormal(Fr,Or,Br,d.normal),h.face=d,h.barycoord=u}return h}class ii extends qn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,r,o,0),_("z","y","x",1,-1,i,e,-t,r,o,1),_("x","z","y",1,1,t,i,e,s,r,2),_("x","z","y",1,-1,t,i,-e,s,r,3),_("x","y","z",1,-1,t,e,i,s,o,4),_("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function _(x,p,m,b,M,S,O,I,P,N,q){const y=S/P,E=O/N,K=S/2,W=O/2,J=I/2,ot=P+1,G=N+1;let nt=0,H=0;const mt=new $;for(let yt=0;yt<G;yt++){const gt=yt*E-W;for(let Lt=0;Lt<ot;Lt++){const zt=Lt*y-K;mt[x]=zt*b,mt[p]=gt*M,mt[m]=J,l.push(mt.x,mt.y,mt.z),mt[x]=0,mt[p]=0,mt[m]=I>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(Lt/P),u.push(1-yt/N),nt+=1}}for(let yt=0;yt<N;yt++)for(let gt=0;gt<P;gt++){const Lt=d+gt+ot*yt,zt=d+gt+ot*(yt+1),rt=d+(gt+1)+ot*(yt+1),ft=d+(gt+1)+ot*yt;c.push(Lt,zt,ft),c.push(zt,rt,ft),H+=6}a.addGroup(f,H,q),f+=H,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function vn(n){const t={};for(let e=0;e<n.length;e++){const i=Mo(n[e]);for(const s in i)t[s]=i[s]}return t}function Ev(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function op(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const bv={clone:Mo,merge:vn};var Tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends _r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tv,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=Ev(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class rp extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new $,kh=new Ot,Vh=new Ot;class Ne extends rp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,kh,Vh),e.subVectors(Vh,kh)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ys=-90,$s=1;class Rv extends dn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ne(Ys,$s,t,e);s.layers=this.layers,this.add(s);const o=new Ne(Ys,$s,t,e);o.layers=this.layers,this.add(o);const r=new Ne(Ys,$s,t,e);r.layers=this.layers,this.add(r);const a=new Ne(Ys,$s,t,e);a.layers=this.layers,this.add(a);const c=new Ne(Ys,$s,t,e);c.layers=this.layers,this.add(c);const l=new Ne(Ys,$s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class _u extends Mn{constructor(t,e,i,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_o,super(t,e,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pv extends Is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new _u(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),o=new An({name:"CubemapFromEquirect",uniforms:Mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:rs});o.uniforms.tEquirect.value=e;const r=new A(s,o),a=e.minFilter;return e.minFilter===As&&(e.minFilter=ti),new Rv(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const wc=new $,Cv=new $,Iv=new ce;class ws{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wc.subVectors(i,e).cross(Cv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Iv.getNormalMatrix(t),s=this.coplanarPoint(wc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new gu,kr=new $;class vu{constructor(t=new ws,e=new ws,i=new ws,s=new ws,o=new ws,r=new ws){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ki){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],x=s[10],p=s[11],m=s[12],b=s[13],M=s[14],S=s[15];if(i[0].setComponents(c-o,d-l,p-f,S-m).normalize(),i[1].setComponents(c+o,d+l,p+f,S+m).normalize(),i[2].setComponents(c+r,d+h,p+_,S+b).normalize(),i[3].setComponents(c-r,d-h,p-_,S-b).normalize(),i[4].setComponents(c-a,d-u,p-x,S-M).normalize(),e===ki)i[5].setComponents(c+a,d+u,p+x,S+M).normalize();else if(e===_a)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(kr.x=s.normal.x>0?t.max.x:t.min.x,kr.y=s.normal.y>0?t.max.y:t.min.y,kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ap(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Lv(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],x=u[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const x=u[f];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Ua extends qn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],_=[],x=[],p=[];for(let m=0;m<h;m++){const b=m*d-r;for(let M=0;M<l;M++){const S=M*u-o;_.push(S,-b,0),x.push(0,0,1),p.push(M/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){const M=b+l*m,S=b+l*(m+1),O=b+1+l*(m+1),I=b+1+l*m;f.push(M,S,I),f.push(S,O,I)}this.setIndex(f),this.setAttribute("position",new Xe(_,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uv=`#ifdef USE_ALPHAHASH
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
#endif`,Nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zv=`#ifdef USE_AOMAP
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
#endif`,Gv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hv=`#ifdef USE_BATCHING
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
#endif`,kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qv=`#ifdef USE_IRIDESCENCE
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
#endif`,Yv=`#ifdef USE_BUMPMAP
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
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nx=`#define PI 3.141592653589793
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
} // validated`,ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sx=`vec3 transformedNormal = objectNormal;
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
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ux=`
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
}`,hx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
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
}`,Mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ex=`uniform bool receiveShadow;
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
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cx=`PhysicalMaterial material;
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
#endif`,Ix=`struct PhysicalMaterial {
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
}`,Lx=`
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
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
#endif`,jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ey=`#ifdef USE_NORMALMAP
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
#endif`,ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_y=`float getShadowMask() {
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
}`,vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,My=`#ifdef USE_SKINNING
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
#endif`,wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,by=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ty=`#ifdef USE_TRANSMISSION
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
#endif`,Ay=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dy=`uniform sampler2D t2D;
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
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`#include <common>
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
}`,zy=`#if DEPTH_PACKING == 3200
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
}`,Gy=`#define DISTANCE
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
}`,Hy=`#define DISTANCE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`uniform float scale;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,qy=`#include <common>
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
}`,Yy=`uniform vec3 diffuse;
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
}`,$y=`#define LAMBERT
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
}`,jy=`#define LAMBERT
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
}`,Ky=`#define MATCAP
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
}`,Zy=`#define MATCAP
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
}`,Jy=`#define NORMAL
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
}`,Qy=`#define NORMAL
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
}`,tM=`#define PHONG
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
}`,eM=`#define PHONG
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
}`,nM=`#define STANDARD
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
}`,iM=`#define STANDARD
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
}`,sM=`#define TOON
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
}`,oM=`#define TOON
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
}`,rM=`uniform float size;
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
}`,aM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,lM=`uniform vec3 color;
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
}`,uM=`uniform float rotation;
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
}`,hM=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Dv,alphahash_pars_fragment:Uv,alphamap_fragment:Nv,alphamap_pars_fragment:Fv,alphatest_fragment:Ov,alphatest_pars_fragment:Bv,aomap_fragment:zv,aomap_pars_fragment:Gv,batching_pars_vertex:Hv,batching_vertex:kv,begin_vertex:Vv,beginnormal_vertex:Wv,bsdfs:Xv,iridescence_fragment:qv,bumpmap_pars_fragment:Yv,clipping_planes_fragment:$v,clipping_planes_pars_fragment:jv,clipping_planes_pars_vertex:Kv,clipping_planes_vertex:Zv,color_fragment:Jv,color_pars_fragment:Qv,color_pars_vertex:tx,color_vertex:ex,common:nx,cube_uv_reflection_fragment:ix,defaultnormal_vertex:sx,displacementmap_pars_vertex:ox,displacementmap_vertex:rx,emissivemap_fragment:ax,emissivemap_pars_fragment:cx,colorspace_fragment:lx,colorspace_pars_fragment:ux,envmap_fragment:hx,envmap_common_pars_fragment:dx,envmap_pars_fragment:fx,envmap_pars_vertex:px,envmap_physical_pars_fragment:bx,envmap_vertex:mx,fog_vertex:gx,fog_pars_vertex:_x,fog_fragment:vx,fog_pars_fragment:xx,gradientmap_pars_fragment:yx,lightmap_pars_fragment:Mx,lights_lambert_fragment:wx,lights_lambert_pars_fragment:Sx,lights_pars_begin:Ex,lights_toon_fragment:Tx,lights_toon_pars_fragment:Ax,lights_phong_fragment:Rx,lights_phong_pars_fragment:Px,lights_physical_fragment:Cx,lights_physical_pars_fragment:Ix,lights_fragment_begin:Lx,lights_fragment_maps:Dx,lights_fragment_end:Ux,logdepthbuf_fragment:Nx,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Ox,logdepthbuf_vertex:Bx,map_fragment:zx,map_pars_fragment:Gx,map_particle_fragment:Hx,map_particle_pars_fragment:kx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Wx,morphinstance_vertex:Xx,morphcolor_vertex:qx,morphnormal_vertex:Yx,morphtarget_pars_vertex:$x,morphtarget_vertex:jx,normal_fragment_begin:Kx,normal_fragment_maps:Zx,normal_pars_fragment:Jx,normal_pars_vertex:Qx,normal_vertex:ty,normalmap_pars_fragment:ey,clearcoat_normal_fragment_begin:ny,clearcoat_normal_fragment_maps:iy,clearcoat_pars_fragment:sy,iridescence_pars_fragment:oy,opaque_fragment:ry,packing:ay,premultiplied_alpha_fragment:cy,project_vertex:ly,dithering_fragment:uy,dithering_pars_fragment:hy,roughnessmap_fragment:dy,roughnessmap_pars_fragment:fy,shadowmap_pars_fragment:py,shadowmap_pars_vertex:my,shadowmap_vertex:gy,shadowmask_pars_fragment:_y,skinbase_vertex:vy,skinning_pars_vertex:xy,skinning_vertex:yy,skinnormal_vertex:My,specularmap_fragment:wy,specularmap_pars_fragment:Sy,tonemapping_fragment:Ey,tonemapping_pars_fragment:by,transmission_fragment:Ty,transmission_pars_fragment:Ay,uv_pars_fragment:Ry,uv_pars_vertex:Py,uv_vertex:Cy,worldpos_vertex:Iy,background_vert:Ly,background_frag:Dy,backgroundCube_vert:Uy,backgroundCube_frag:Ny,cube_vert:Fy,cube_frag:Oy,depth_vert:By,depth_frag:zy,distanceRGBA_vert:Gy,distanceRGBA_frag:Hy,equirect_vert:ky,equirect_frag:Vy,linedashed_vert:Wy,linedashed_frag:Xy,meshbasic_vert:qy,meshbasic_frag:Yy,meshlambert_vert:$y,meshlambert_frag:jy,meshmatcap_vert:Ky,meshmatcap_frag:Zy,meshnormal_vert:Jy,meshnormal_frag:Qy,meshphong_vert:tM,meshphong_frag:eM,meshphysical_vert:nM,meshphysical_frag:iM,meshtoon_vert:sM,meshtoon_frag:oM,points_vert:rM,points_frag:aM,shadow_vert:cM,shadow_frag:lM,sprite_vert:uM,sprite_frag:hM},Ft={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},yi={basic:{uniforms:vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:vn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:vn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:vn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:vn([Ft.points,Ft.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:vn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:vn([Ft.common,Ft.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:vn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:vn([Ft.sprite,Ft.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:vn([Ft.common,Ft.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:vn([Ft.lights,Ft.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};yi.physical={uniforms:vn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Vr={r:0,b:0,g:0},xs=new Ei,dM=new Be;function fM(n,t,e,i,s,o,r){const a=new pe(0);let c=o===!0?0:1,l,h,u=null,d=0,f=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1;const S=_(b);S===null?m(a,c):S&&S.isColor&&(m(S,1),M=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,M){const S=_(M);S&&(S.isCubeTexture||S.mapping===La)?(h===void 0&&(h=new A(new ii(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Mo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xs.copy(M.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dM.makeRotationFromEuler(xs)),h.material.toneMapped=be.getTransfer(S.colorSpace)!==Ue,(u!==S||d!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new A(new Ua(2,2),new An({name:"BackgroundMaterial",uniforms:Mo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=be.getTransfer(S.colorSpace)!==Ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,M){b.getRGB(Vr,op(n)),i.buffers.color.setClear(Vr.r,Vr.g,Vr.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:x,addToRenderList:p}}function pM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(y,E,K,W,J){let ot=!1;const G=u(W,K,E);o!==G&&(o=G,l(o.object)),ot=f(y,W,K,J),ot&&_(y,W,K,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(ot||r)&&(r=!1,S(y,E,K,W),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,E,K){const W=K.wireframe===!0;let J=i[y.id];J===void 0&&(J={},i[y.id]=J);let ot=J[E.id];ot===void 0&&(ot={},J[E.id]=ot);let G=ot[W];return G===void 0&&(G=d(c()),ot[W]=G),G}function d(y){const E=[],K=[],W=[];for(let J=0;J<e;J++)E[J]=0,K[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:K,attributeDivisors:W,object:y,attributes:{},index:null}}function f(y,E,K,W){const J=o.attributes,ot=E.attributes;let G=0;const nt=K.getAttributes();for(const H in nt)if(nt[H].location>=0){const yt=J[H];let gt=ot[H];if(gt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),yt===void 0||yt.attribute!==gt||gt&&yt.data!==gt.data)return!0;G++}return o.attributesNum!==G||o.index!==W}function _(y,E,K,W){const J={},ot=E.attributes;let G=0;const nt=K.getAttributes();for(const H in nt)if(nt[H].location>=0){let yt=ot[H];yt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor));const gt={};gt.attribute=yt,yt&&yt.data&&(gt.data=yt.data),J[H]=gt,G++}o.attributes=J,o.attributesNum=G,o.index=W}function x(){const y=o.newAttributes;for(let E=0,K=y.length;E<K;E++)y[E]=0}function p(y){m(y,0)}function m(y,E){const K=o.newAttributes,W=o.enabledAttributes,J=o.attributeDivisors;K[y]=1,W[y]===0&&(n.enableVertexAttribArray(y),W[y]=1),J[y]!==E&&(n.vertexAttribDivisor(y,E),J[y]=E)}function b(){const y=o.newAttributes,E=o.enabledAttributes;for(let K=0,W=E.length;K<W;K++)E[K]!==y[K]&&(n.disableVertexAttribArray(K),E[K]=0)}function M(y,E,K,W,J,ot,G){G===!0?n.vertexAttribIPointer(y,E,K,J,ot):n.vertexAttribPointer(y,E,K,W,J,ot)}function S(y,E,K,W){x();const J=W.attributes,ot=K.getAttributes(),G=E.defaultAttributeValues;for(const nt in ot){const H=ot[nt];if(H.location>=0){let mt=J[nt];if(mt===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const yt=mt.normalized,gt=mt.itemSize,Lt=t.get(mt);if(Lt===void 0)continue;const zt=Lt.buffer,rt=Lt.type,ft=Lt.bytesPerElement,vt=rt===n.INT||rt===n.UNSIGNED_INT||mt.gpuType===cu;if(mt.isInterleavedBufferAttribute){const F=mt.data,ct=F.stride,it=mt.offset;if(F.isInstancedInterleavedBuffer){for(let lt=0;lt<H.locationSize;lt++)m(H.location+lt,F.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let lt=0;lt<H.locationSize;lt++)M(H.location+lt,gt/H.locationSize,rt,yt,ct*ft,(it+gt/H.locationSize*lt)*ft,vt)}else{if(mt.isInstancedBufferAttribute){for(let F=0;F<H.locationSize;F++)m(H.location+F,mt.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let F=0;F<H.locationSize;F++)p(H.location+F);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let F=0;F<H.locationSize;F++)M(H.location+F,gt/H.locationSize,rt,yt,gt*ft,gt/H.locationSize*F*ft,vt)}}else if(G!==void 0){const yt=G[nt];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(H.location,yt);break;case 3:n.vertexAttrib3fv(H.location,yt);break;case 4:n.vertexAttrib4fv(H.location,yt);break;default:n.vertexAttrib1fv(H.location,yt)}}}}b()}function O(){N();for(const y in i){const E=i[y];for(const K in E){const W=E[K];for(const J in W)h(W[J].object),delete W[J];delete E[K]}delete i[y]}}function I(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const K in E){const W=E[K];for(const J in W)h(W[J].object),delete W[J];delete E[K]}delete i[y.id]}function P(y){for(const E in i){const K=i[E];if(K[y.id]===void 0)continue;const W=K[y.id];for(const J in W)h(W[J].object),delete W[J];delete K[y.id]}}function N(){q(),r=!0,o!==s&&(o=s,l(o.object))}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:q,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function mM(n,t,e){let i;function s(l){i=l}function o(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)r(l[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<d.length;x++)e.update(_,i,d[x])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gM(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==ni&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Xi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Hi&&!N)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:O,maxSamples:I}}function _M(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new ws,a=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||o&&!p)o?h(null):l();else{const b=o?0:i,M=b*4;let S=m.clippingState||null;c.value=S,S=h(_,d,M,f);for(let O=0;O!==M;++O)S[O]=e[O];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=c.value,_!==!0||p===null){const m=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,S=f;M!==x;++M,S+=4)r.copy(u[M]).applyMatrix4(b,a),r.normal.toArray(p,S),p[S+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function vM(n){let t=new WeakMap;function e(r,a){return a===or?r.mapping=_o:a===sl&&(r.mapping=vo),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===or||a===sl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Pv(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class cp extends rp{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const to=4,Wh=[.125,.215,.35,.446,.526,.582],bs=20,Sc=new cp,Xh=new pe;let Ec=null,bc=0,Tc=0,Ac=!1;const Ss=(1+Math.sqrt(5))/2,js=1/Ss,qh=[new $(-Ss,js,0),new $(Ss,js,0),new $(-js,0,Ss),new $(js,0,Ss),new $(0,Ss,-js),new $(0,Ss,js),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ec=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ec,bc,Tc),this._renderer.xr.enabled=Ac,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_o||t.mapping===vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ec=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:pr,format:ni,colorSpace:ds,depthBuffer:!1},s=$h(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(o)),this._blurMaterial=yM(o,t,e)}return s}_compileMaterial(t){const e=new A(this._lodPlanes[0],t);this._renderer.compile(e,Sc)}_sceneToCubeUV(t,e,i,s){const a=new Ne(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xh),h.toneMapping=as,h.autoClear=!1;const f=new bn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),_=new A(new ii,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Xh),x=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const M=this._cubeSize;Wr(s,b*M,m>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===_o||t.mapping===vo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new A(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Wr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Sc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=qh[(s-o-1)%qh.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new A(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*bs-1),x=o/_,p=isFinite(o)?1+Math.floor(h*x):bs;p>bs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bs}`);const m=[];let b=0;for(let P=0;P<bs;++P){const N=P/x,q=Math.exp(-N*N/2);m.push(q),P===0?b+=q:P<p&&(b+=2*q)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const S=this._sizeLods[s],O=3*S*(s>M-to?s-M+to:0),I=4*(this._cubeSize-S);Wr(e,O,I,3*S,2*S),c.setRenderTarget(e),c.render(u,Sc)}}function xM(n){const t=[],e=[],i=[];let s=n;const o=n-to+1+Wh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-to?c=Wh[r-n+to-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,x=3,p=2,m=1,b=new Float32Array(x*_*f),M=new Float32Array(p*_*f),S=new Float32Array(m*_*f);for(let I=0;I<f;I++){const P=I%3*2/3-1,N=I>2?0:-1,q=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];b.set(q,x*_*I),M.set(d,p*_*I);const y=[I,I,I,I,I,I];S.set(y,m*_*I)}const O=new qn;O.setAttribute("position",new wi(b,x)),O.setAttribute("uv",new wi(M,p)),O.setAttribute("faceIndex",new wi(S,m)),t.push(O),s>to&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $h(n,t,e){const i=new Is(n,t,e);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function yM(n,t,e){const i=new Float32Array(bs),s=new $(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function jh(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Kh(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function MM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===or||c===sl,h=c===_o||c===vo;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Yh(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Yh(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function wM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ra("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function SM(n,t,e,i){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const x=f[_];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,_=u.attributes.position;let x=0;if(f!==null){const b=f.array;x=f.version;for(let M=0,S=b.length;M<S;M+=3){const O=b[M+0],I=b[M+1],P=b[M+2];d.push(O,I,I,P,P,O)}}else if(_!==void 0){const b=_.array;x=_.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const O=M+0,I=M+1,P=M+2;d.push(O,I,I,P,P,O)}}else return;const p=new(Jf(d)?sp:ip)(d,1);p.version=x;const m=o.get(u);m&&t.remove(m),o.set(u,p)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function EM(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){n.drawElements(i,f,o,d*r),e.update(f,i,1)}function l(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,o,d*r,_),e.update(f,i,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,i,1)}function u(d,f,_,x){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/r,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,x,0,_);let m=0;for(let b=0;b<_;b++)m+=f[b];for(let b=0;b<x.length;b++)e.update(m,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function TM(n,t,e){const i=new WeakMap,s=new Pe;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let O=a.attributes.position.count*S,I=1;O>t.maxTextureSize&&(I=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*I*4*u),N=new tp(P,O,I,u);N.type=Hi,N.needsUpdate=!0;const q=S*4;for(let E=0;E<u;E++){const K=m[E],W=b[E],J=M[E],ot=O*I*4*E;for(let G=0;G<K.count;G++){const nt=G*q;_===!0&&(s.fromBufferAttribute(K,G),P[ot+nt+0]=s.x,P[ot+nt+1]=s.y,P[ot+nt+2]=s.z,P[ot+nt+3]=0),x===!0&&(s.fromBufferAttribute(W,G),P[ot+nt+4]=s.x,P[ot+nt+5]=s.y,P[ot+nt+6]=s.z,P[ot+nt+7]=0),p===!0&&(s.fromBufferAttribute(J,G),P[ot+nt+8]=s.x,P[ot+nt+9]=s.y,P[ot+nt+10]=s.z,P[ot+nt+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new Ot(O,I)},i.set(a,d),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function AM(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class lp extends Mn{constructor(t,e,i,s,o,r,a,c,l,h=co){if(h!==co&&h!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===co&&(i=Cs),i===void 0&&h===yo&&(i=xo),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Hn,this.minFilter=c!==void 0?c:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const up=new Mn,Zh=new lp(1,1),hp=new tp,dp=new dv,fp=new _u,Jh=[],Qh=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function Eo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=Jh[s];if(o===void 0&&(o=new Float32Array(s),Jh[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Na(n,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function RM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function PM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2fv(this.addr,t),Je(e,t)}}function CM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;n.uniform3fv(this.addr,t),Je(e,t)}}function IM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4fv(this.addr,t),Je(e,t)}}function LM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;nd.set(i),n.uniformMatrix2fv(this.addr,!1,nd),Je(e,i)}}function DM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;ed.set(i),n.uniformMatrix3fv(this.addr,!1,ed),Je(e,i)}}function UM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;td.set(i),n.uniformMatrix4fv(this.addr,!1,td),Je(e,i)}}function NM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function FM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2iv(this.addr,t),Je(e,t)}}function OM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3iv(this.addr,t),Je(e,t)}}function BM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4iv(this.addr,t),Je(e,t)}}function zM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function GM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2uiv(this.addr,t),Je(e,t)}}function HM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3uiv(this.addr,t),Je(e,t)}}function kM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4uiv(this.addr,t),Je(e,t)}}function VM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Zh.compareFunction=Zf,o=Zh):o=up,e.setTexture2D(t||o,s)}function WM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||dp,s)}function XM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||fp,s)}function qM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||hp,s)}function YM(n){switch(n){case 5126:return RM;case 35664:return PM;case 35665:return CM;case 35666:return IM;case 35674:return LM;case 35675:return DM;case 35676:return UM;case 5124:case 35670:return NM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return GM;case 36295:return HM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}function $M(n,t){n.uniform1fv(this.addr,t)}function jM(n,t){const e=Eo(t,this.size,2);n.uniform2fv(this.addr,e)}function KM(n,t){const e=Eo(t,this.size,3);n.uniform3fv(this.addr,e)}function ZM(n,t){const e=Eo(t,this.size,4);n.uniform4fv(this.addr,e)}function JM(n,t){const e=Eo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function QM(n,t){const e=Eo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tw(n,t){const e=Eo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ew(n,t){n.uniform1iv(this.addr,t)}function nw(n,t){n.uniform2iv(this.addr,t)}function iw(n,t){n.uniform3iv(this.addr,t)}function sw(n,t){n.uniform4iv(this.addr,t)}function ow(n,t){n.uniform1uiv(this.addr,t)}function rw(n,t){n.uniform2uiv(this.addr,t)}function aw(n,t){n.uniform3uiv(this.addr,t)}function cw(n,t){n.uniform4uiv(this.addr,t)}function lw(n,t,e){const i=this.cache,s=t.length,o=Na(e,s);Ze(i,o)||(n.uniform1iv(this.addr,o),Je(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||up,o[r])}function uw(n,t,e){const i=this.cache,s=t.length,o=Na(e,s);Ze(i,o)||(n.uniform1iv(this.addr,o),Je(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||dp,o[r])}function hw(n,t,e){const i=this.cache,s=t.length,o=Na(e,s);Ze(i,o)||(n.uniform1iv(this.addr,o),Je(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||fp,o[r])}function dw(n,t,e){const i=this.cache,s=t.length,o=Na(e,s);Ze(i,o)||(n.uniform1iv(this.addr,o),Je(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||hp,o[r])}function fw(n){switch(n){case 5126:return $M;case 35664:return jM;case 35665:return KM;case 35666:return ZM;case 35674:return JM;case 35675:return QM;case 35676:return tw;case 5124:case 35670:return ew;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return sw;case 5125:return ow;case 36294:return rw;case 36295:return aw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return dw}}class pw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=YM(e.type)}}class mw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fw(e.type)}}class gw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Rc=/(\w+)(\])?(\[|\.)?/g;function id(n,t){n.seq.push(t),n.map[t.id]=t}function _w(n,t,e){const i=n.name,s=i.length;for(Rc.lastIndex=0;;){const o=Rc.exec(i),r=Rc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){id(e,l===void 0?new pw(a,n,t):new mw(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new gw(a),id(e,u)),e=u}}}class aa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);_w(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function sd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const vw=37297;let xw=0;function yw(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function Mw(n){const t=be.getPrimaries(be.workingColorSpace),e=be.getPrimaries(n);let i;switch(t===e?i="":t===ga&&e===ma?i="LinearDisplayP3ToLinearSRGB":t===ma&&e===ga&&(i="LinearSRGBToLinearDisplayP3"),n){case ds:case Da:return[i,"LinearTransferOETF"];case Jn:case pu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function od(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+yw(n.getShaderSource(t),r)}else return s}function ww(n,t){const e=Mw(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Sw(n,t){let e;switch(t){case E_:e="Linear";break;case b_:e="Reinhard";break;case T_:e="Cineon";break;case Bf:e="ACESFilmic";break;case R_:e="AgX";break;case P_:e="Neutral";break;case A_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new $;function Ew(){be.getLuminanceCoefficients(Xr);const n=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function Tw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Aw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Oo(n){return n!==""}function rd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(n){return n.replace(Rw,Cw)}const Pw=new Map;function Cw(n,t){let e=ae[t];if(e===void 0){const i=Pw.get(t);if(i!==void 0)e=ae[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ll(e)}const Iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(n){return n.replace(Iw,Lw)}function Lw(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ld(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Dw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ff?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===i_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function Uw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _o:case vo:t="ENVMAP_TYPE_CUBE";break;case La:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vo:t="ENVMAP_MODE_REFRACTION";break}return t}function Fw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Of:t="ENVMAP_BLENDING_MULTIPLY";break;case w_:t="ENVMAP_BLENDING_MIX";break;case S_:t="ENVMAP_BLENDING_ADD";break}return t}function Ow(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Bw(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Dw(e),l=Uw(e),h=Nw(e),u=Fw(e),d=Ow(e),f=bw(e),_=Tw(o),x=s.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Oo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Oo).join(`
`),m.length>0&&(m+=`
`)):(p=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),m=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==as?"#define TONE_MAPPING":"",e.toneMapping!==as?ae.tonemapping_pars_fragment:"",e.toneMapping!==as?Sw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,ww("linearToOutputTexel",e.outputColorSpace),Ew(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oo).join(`
`)),r=Ll(r),r=rd(r,e),r=ad(r,e),a=Ll(a),a=rd(a,e),a=ad(a,e),r=cd(r),a=cd(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=b+p+r,S=b+m+a,O=sd(s,s.VERTEX_SHADER,M),I=sd(s,s.FRAGMENT_SHADER,S);s.attachShader(x,O),s.attachShader(x,I),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(E){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(O).trim(),J=s.getShaderInfoLog(I).trim();let ot=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,O,I);else{const nt=od(s,O,"vertex"),H=od(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+K+`
`+nt+`
`+H)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(W===""||J==="")&&(G=!1);G&&(E.diagnostics={runnable:ot,programLog:K,vertexShader:{log:W,prefix:p},fragmentShader:{log:J,prefix:m}})}s.deleteShader(O),s.deleteShader(I),N=new aa(s,x),q=Aw(s,x)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let q;this.getAttributes=function(){return q===void 0&&P(this),q};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,vw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=I,this}let zw=0;class Gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Hw(t),e.set(t,i)),i}}class Hw{constructor(t){this.id=zw++,this.code=t,this.usedTimes=0}}function kw(n,t,e,i,s,o,r){const a=new ep,c=new Gw,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,E,K,W,J){const ot=W.fog,G=J.geometry,nt=y.isMeshStandardMaterial?W.environment:null,H=(y.isMeshStandardMaterial?e:t).get(y.envMap||nt),mt=H&&H.mapping===La?H.image.height:null,yt=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const gt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Lt=gt!==void 0?gt.length:0;let zt=0;G.morphAttributes.position!==void 0&&(zt=1),G.morphAttributes.normal!==void 0&&(zt=2),G.morphAttributes.color!==void 0&&(zt=3);let rt,ft,vt,F;if(yt){const ie=yi[yt];rt=ie.vertexShader,ft=ie.fragmentShader}else rt=y.vertexShader,ft=y.fragmentShader,c.update(y),vt=c.getVertexShaderID(y),F=c.getFragmentShaderID(y);const ct=n.getRenderTarget(),it=J.isInstancedMesh===!0,lt=J.isBatchedMesh===!0,Et=!!y.map,Q=!!y.matcap,g=!!H,T=!!y.aoMap,L=!!y.lightMap,U=!!y.bumpMap,D=!!y.normalMap,X=!!y.displacementMap,Z=!!y.emissiveMap,w=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,V=y.clearcoat>0,z=y.dispersion>0,k=y.iridescence>0,ht=y.sheen>0,ut=y.transmission>0,pt=C&&!!y.anisotropyMap,At=V&&!!y.clearcoatMap,dt=V&&!!y.clearcoatNormalMap,xt=V&&!!y.clearcoatRoughnessMap,Pt=k&&!!y.iridescenceMap,Dt=k&&!!y.iridescenceThicknessMap,bt=ht&&!!y.sheenColorMap,Ht=ht&&!!y.sheenRoughnessMap,Ut=!!y.specularMap,kt=!!y.specularColorMap,B=!!y.specularIntensityMap,_t=ut&&!!y.transmissionMap,et=ut&&!!y.thicknessMap,tt=!!y.gradientMap,wt=!!y.alphaMap,Mt=y.alphaTest>0,Bt=!!y.alphaHash,$t=!!y.extensions;let Qt=as;y.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Qt=n.toneMapping);const Kt={shaderID:yt,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:ft,defines:y.defines,customVertexShaderID:vt,customFragmentShaderID:F,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:lt,batchingColor:lt&&J._colorsTexture!==null,instancing:it,instancingColor:it&&J.instanceColor!==null,instancingMorph:it&&J.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ds,alphaToCoverage:!!y.alphaToCoverage,map:Et,matcap:Q,envMap:g,envMapMode:g&&H.mapping,envMapCubeUVHeight:mt,aoMap:T,lightMap:L,bumpMap:U,normalMap:D,displacementMap:f&&X,emissiveMap:Z,normalMapObjectSpace:D&&y.normalMapType===D_,normalMapTangentSpace:D&&y.normalMapType===Kf,metalnessMap:w,roughnessMap:v,anisotropy:C,anisotropyMap:pt,clearcoat:V,clearcoatMap:At,clearcoatNormalMap:dt,clearcoatRoughnessMap:xt,dispersion:z,iridescence:k,iridescenceMap:Pt,iridescenceThicknessMap:Dt,sheen:ht,sheenColorMap:bt,sheenRoughnessMap:Ht,specularMap:Ut,specularColorMap:kt,specularIntensityMap:B,transmission:ut,transmissionMap:_t,thicknessMap:et,gradientMap:tt,opaque:y.transparent===!1&&y.blending===ao&&y.alphaToCoverage===!1,alphaMap:wt,alphaTest:Mt,alphaHash:Bt,combine:y.combine,mapUv:Et&&p(y.map.channel),aoMapUv:T&&p(y.aoMap.channel),lightMapUv:L&&p(y.lightMap.channel),bumpMapUv:U&&p(y.bumpMap.channel),normalMapUv:D&&p(y.normalMap.channel),displacementMapUv:X&&p(y.displacementMap.channel),emissiveMapUv:Z&&p(y.emissiveMap.channel),metalnessMapUv:w&&p(y.metalnessMap.channel),roughnessMapUv:v&&p(y.roughnessMap.channel),anisotropyMapUv:pt&&p(y.anisotropyMap.channel),clearcoatMapUv:At&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&p(y.sheenRoughnessMap.channel),specularMapUv:Ut&&p(y.specularMap.channel),specularColorMapUv:kt&&p(y.specularColorMap.channel),specularIntensityMapUv:B&&p(y.specularIntensityMap.channel),transmissionMapUv:_t&&p(y.transmissionMap.channel),thicknessMapUv:et&&p(y.thicknessMap.channel),alphaMapUv:wt&&p(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(D||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!G.attributes.uv&&(Et||wt),fog:!!ot,useFog:y.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:zt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Et&&y.map.isVideoTexture===!0&&be.getTransfer(y.map.colorSpace)===Ue,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fe,flipSided:y.side===En,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$t&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&y.extensions.multiDraw===!0||lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function b(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const K in y.defines)E.push(K),E.push(y.defines[K]);return y.isRawShaderMaterial===!1&&(M(E,y),S(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function M(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function O(y){const E=x[y.type];let K;if(E){const W=yi[E];K=bv.clone(W.uniforms)}else K=y.uniforms;return K}function I(y,E){let K;for(let W=0,J=h.length;W<J;W++){const ot=h[W];if(ot.cacheKey===E){K=ot,++K.usedTimes;break}}return K===void 0&&(K=new Bw(n,E,y,o),h.push(K)),K}function P(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function N(y){c.remove(y)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:O,acquireProgram:I,releaseProgram:P,releaseShaderCache:N,programs:h,dispose:q}}function Vw(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Ww(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ud(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function hd(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,f,_,x,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:x,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,d,f,_,x,p){const m=r(u,d,f,_,x,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(u,d,f,_,x,p){const m=r(u,d,f,_,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||Ww),i.length>1&&i.sort(d||ud),s.length>1&&s.sort(d||ud)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function Xw(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new hd,n.set(i,[r])):s>=o.length?(r=new hd,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function qw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new pe};break;case"SpotLight":e={position:new $,direction:new $,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function Yw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let $w=0;function jw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Kw(n){const t=new qw,e=Yw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const s=new $,o=new Be,r=new Be;function a(l){let h=0,u=0,d=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let f=0,_=0,x=0,p=0,m=0,b=0,M=0,S=0,O=0,I=0,P=0;l.sort(jw);for(let q=0,y=l.length;q<y;q++){const E=l[q],K=E.color,W=E.intensity,J=E.distance,ot=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=K.r*W,u+=K.g*W,d+=K.b*W;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],W);P++}else if(E.isDirectionalLight){const G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const nt=E.shadow,H=e.get(E);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=ot,i.directionalShadowMatrix[f]=E.shadow.matrix,b++}i.directional[f]=G,f++}else if(E.isSpotLight){const G=t.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(K).multiplyScalar(W),G.distance=J,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[x]=G;const nt=E.shadow;if(E.map&&(i.spotLightMap[O]=E.map,O++,nt.updateMatrices(E),E.castShadow&&I++),i.spotLightMatrix[x]=nt.matrix,E.castShadow){const H=e.get(E);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=ot,S++}x++}else if(E.isRectAreaLight){const G=t.get(E);G.color.copy(K).multiplyScalar(W),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=G,p++}else if(E.isPointLight){const G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){const nt=E.shadow,H=e.get(E);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,H.shadowCameraNear=nt.camera.near,H.shadowCameraFar=nt.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=ot,i.pointShadowMatrix[_]=E.shadow.matrix,M++}i.point[_]=G,_++}else if(E.isHemisphereLight){const G=t.get(E);G.skyColor.copy(E.color).multiplyScalar(W),G.groundColor.copy(E.groundColor).multiplyScalar(W),i.hemi[m]=G,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ft.LTC_FLOAT_1,i.rectAreaLTC2=Ft.LTC_FLOAT_2):(i.rectAreaLTC1=Ft.LTC_HALF_1,i.rectAreaLTC2=Ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==f||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==p||N.hemiLength!==m||N.numDirectionalShadows!==b||N.numPointShadows!==M||N.numSpotShadows!==S||N.numSpotMaps!==O||N.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,N.directionalLength=f,N.pointLength=_,N.spotLength=x,N.rectAreaLength=p,N.hemiLength=m,N.numDirectionalShadows=b,N.numPointShadows=M,N.numSpotShadows=S,N.numSpotMaps=O,N.numLightProbes=P,i.version=$w++)}function c(l,h){let u=0,d=0,f=0,_=0,x=0;const p=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const M=l[m];if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(M.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),r.identity(),o.copy(M.matrixWorld),o.premultiply(p),r.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:i}}function dd(n){const t=new Kw(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Zw(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new dd(n),t.set(s,[a])):o>=r.length?(a=new dd(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Jw extends _r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qw extends _r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eS=`uniform sampler2D shadow_pass;
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
}`;function nS(n,t,e){let i=new vu;const s=new Ot,o=new Ot,r=new Pe,a=new Jw({depthPacking:L_}),c=new Qw,l={},h=e.maxTextureSize,u={[ls]:En,[En]:ls,[fe]:fe},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:tS,fragmentShader:eS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new qn;_.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new A(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff;let m=this.type;this.render=function(I,P,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;const q=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),K=n.state;K.setBlending(rs),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const W=m!==Bi&&this.type===Bi,J=m===Bi&&this.type!==Bi;for(let ot=0,G=I.length;ot<G;ot++){const nt=I[ot],H=nt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const mt=H.getFrameExtents();if(s.multiply(mt),o.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/mt.x),s.x=o.x*mt.x,H.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/mt.y),s.y=o.y*mt.y,H.mapSize.y=o.y)),H.map===null||W===!0||J===!0){const gt=this.type!==Bi?{minFilter:Hn,magFilter:Hn}:{};H.map!==null&&H.map.dispose(),H.map=new Is(s.x,s.y,gt),H.map.texture.name=nt.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const yt=H.getViewportCount();for(let gt=0;gt<yt;gt++){const Lt=H.getViewport(gt);r.set(o.x*Lt.x,o.y*Lt.y,o.x*Lt.z,o.y*Lt.w),K.viewport(r),H.updateMatrices(nt,gt),i=H.getFrustum(),S(P,N,H.camera,nt,this.type)}H.isPointLightShadow!==!0&&this.type===Bi&&b(H,N),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(q,y,E)};function b(I,P){const N=t.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Is(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,N,d,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,N,f,x,null)}function M(I,P,N,q){let y=null;const E=N.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(E!==void 0)y=E;else if(y=N.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const K=y.uuid,W=P.uuid;let J=l[K];J===void 0&&(J={},l[K]=J);let ot=J[W];ot===void 0&&(ot=y.clone(),J[W]=ot,P.addEventListener("dispose",O)),y=ot}if(y.visible=P.visible,y.wireframe=P.wireframe,q===Bi?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const K=n.properties.get(y);K.light=N}return y}function S(I,P,N,q,y){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===Bi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,I.matrixWorld);const W=t.update(I),J=I.material;if(Array.isArray(J)){const ot=W.groups;for(let G=0,nt=ot.length;G<nt;G++){const H=ot[G],mt=J[H.materialIndex];if(mt&&mt.visible){const yt=M(I,mt,q,y);I.onBeforeShadow(n,I,P,N,W,yt,H),n.renderBufferDirect(N,null,W,yt,I,H),I.onAfterShadow(n,I,P,N,W,yt,H)}}}else if(J.visible){const ot=M(I,J,q,y);I.onBeforeShadow(n,I,P,N,W,ot,null),n.renderBufferDirect(N,null,W,ot,I,null),I.onAfterShadow(n,I,P,N,W,ot,null)}}const K=I.children;for(let W=0,J=K.length;W<J;W++)S(K[W],P,N,q,y)}function O(I){I.target.removeEventListener("dispose",O);for(const N in l){const q=l[N],y=I.target.uuid;y in q&&(q[y].dispose(),delete q[y])}}}const iS={[Zc]:Jc,[Qc]:nl,[tl]:il,[go]:el,[Jc]:Zc,[nl]:Qc,[il]:tl,[el]:go};function sS(n){function t(){let B=!1;const _t=new Pe;let et=null;const tt=new Pe(0,0,0,0);return{setMask:function(wt){et!==wt&&!B&&(n.colorMask(wt,wt,wt,wt),et=wt)},setLocked:function(wt){B=wt},setClear:function(wt,Mt,Bt,$t,Qt){Qt===!0&&(wt*=$t,Mt*=$t,Bt*=$t),_t.set(wt,Mt,Bt,$t),tt.equals(_t)===!1&&(n.clearColor(wt,Mt,Bt,$t),tt.copy(_t))},reset:function(){B=!1,et=null,tt.set(-1,0,0,0)}}}function e(){let B=!1,_t=!1,et=null,tt=null,wt=null;return{setReversed:function(Mt){_t=Mt},setTest:function(Mt){Mt?vt(n.DEPTH_TEST):F(n.DEPTH_TEST)},setMask:function(Mt){et!==Mt&&!B&&(n.depthMask(Mt),et=Mt)},setFunc:function(Mt){if(_t&&(Mt=iS[Mt]),tt!==Mt){switch(Mt){case Zc:n.depthFunc(n.NEVER);break;case Jc:n.depthFunc(n.ALWAYS);break;case Qc:n.depthFunc(n.LESS);break;case go:n.depthFunc(n.LEQUAL);break;case tl:n.depthFunc(n.EQUAL);break;case el:n.depthFunc(n.GEQUAL);break;case nl:n.depthFunc(n.GREATER);break;case il:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=Mt}},setLocked:function(Mt){B=Mt},setClear:function(Mt){wt!==Mt&&(n.clearDepth(Mt),wt=Mt)},reset:function(){B=!1,et=null,tt=null,wt=null}}}function i(){let B=!1,_t=null,et=null,tt=null,wt=null,Mt=null,Bt=null,$t=null,Qt=null;return{setTest:function(Kt){B||(Kt?vt(n.STENCIL_TEST):F(n.STENCIL_TEST))},setMask:function(Kt){_t!==Kt&&!B&&(n.stencilMask(Kt),_t=Kt)},setFunc:function(Kt,ie,he){(et!==Kt||tt!==ie||wt!==he)&&(n.stencilFunc(Kt,ie,he),et=Kt,tt=ie,wt=he)},setOp:function(Kt,ie,he){(Mt!==Kt||Bt!==ie||$t!==he)&&(n.stencilOp(Kt,ie,he),Mt=Kt,Bt=ie,$t=he)},setLocked:function(Kt){B=Kt},setClear:function(Kt){Qt!==Kt&&(n.clearStencil(Kt),Qt=Kt)},reset:function(){B=!1,_t=null,et=null,tt=null,wt=null,Mt=null,Bt=null,$t=null,Qt=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,p=null,m=null,b=null,M=null,S=null,O=null,I=new pe(0,0,0),P=0,N=!1,q=null,y=null,E=null,K=null,W=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,G=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(nt)[1]),ot=G>=1):nt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),ot=G>=2);let H=null,mt={};const yt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),Lt=new Pe().fromArray(yt),zt=new Pe().fromArray(gt);function rt(B,_t,et,tt){const wt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(B,Mt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<et;Bt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(_t+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return Mt}const ft={};ft[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),vt(n.DEPTH_TEST),o.setFunc(go),L(!1),U(xh),vt(n.CULL_FACE),g(rs);function vt(B){l[B]!==!0&&(n.enable(B),l[B]=!0)}function F(B){l[B]!==!1&&(n.disable(B),l[B]=!1)}function ct(B,_t){return h[B]!==_t?(n.bindFramebuffer(B,_t),h[B]=_t,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_t),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function it(B,_t){let et=d,tt=!1;if(B){et=u.get(_t),et===void 0&&(et=[],u.set(_t,et));const wt=B.textures;if(et.length!==wt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,Bt=wt.length;Mt<Bt;Mt++)et[Mt]=n.COLOR_ATTACHMENT0+Mt;et.length=wt.length,tt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,tt=!0);tt&&n.drawBuffers(et)}function lt(B){return f!==B?(n.useProgram(B),f=B,!0):!1}const Et={[Es]:n.FUNC_ADD,[o_]:n.FUNC_SUBTRACT,[r_]:n.FUNC_REVERSE_SUBTRACT};Et[a_]=n.MIN,Et[c_]=n.MAX;const Q={[l_]:n.ZERO,[u_]:n.ONE,[h_]:n.SRC_COLOR,[jc]:n.SRC_ALPHA,[__]:n.SRC_ALPHA_SATURATE,[m_]:n.DST_COLOR,[f_]:n.DST_ALPHA,[d_]:n.ONE_MINUS_SRC_COLOR,[Kc]:n.ONE_MINUS_SRC_ALPHA,[g_]:n.ONE_MINUS_DST_COLOR,[p_]:n.ONE_MINUS_DST_ALPHA,[v_]:n.CONSTANT_COLOR,[x_]:n.ONE_MINUS_CONSTANT_COLOR,[y_]:n.CONSTANT_ALPHA,[M_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,_t,et,tt,wt,Mt,Bt,$t,Qt,Kt){if(B===rs){_===!0&&(F(n.BLEND),_=!1);return}if(_===!1&&(vt(n.BLEND),_=!0),B!==s_){if(B!==x||Kt!==N){if((p!==Es||M!==Es)&&(n.blendEquation(n.FUNC_ADD),p=Es,M=Es),Kt)switch(B){case ao:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.ONE,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,b=null,S=null,O=null,I.set(0,0,0),P=0,x=B,N=Kt}return}wt=wt||_t,Mt=Mt||et,Bt=Bt||tt,(_t!==p||wt!==M)&&(n.blendEquationSeparate(Et[_t],Et[wt]),p=_t,M=wt),(et!==m||tt!==b||Mt!==S||Bt!==O)&&(n.blendFuncSeparate(Q[et],Q[tt],Q[Mt],Q[Bt]),m=et,b=tt,S=Mt,O=Bt),($t.equals(I)===!1||Qt!==P)&&(n.blendColor($t.r,$t.g,$t.b,Qt),I.copy($t),P=Qt),x=B,N=!1}function T(B,_t){B.side===fe?F(n.CULL_FACE):vt(n.CULL_FACE);let et=B.side===En;_t&&(et=!et),L(et),B.blending===ao&&B.transparent===!1?g(rs):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const tt=B.stencilWrite;r.setTest(tt),tt&&(r.setMask(B.stencilWriteMask),r.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),r.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),X(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):F(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){q!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),q=B)}function U(B){B!==e_?(vt(n.CULL_FACE),B!==y&&(B===xh?n.cullFace(n.BACK):B===n_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):F(n.CULL_FACE),y=B}function D(B){B!==E&&(ot&&n.lineWidth(B),E=B)}function X(B,_t,et){B?(vt(n.POLYGON_OFFSET_FILL),(K!==_t||W!==et)&&(n.polygonOffset(_t,et),K=_t,W=et)):F(n.POLYGON_OFFSET_FILL)}function Z(B){B?vt(n.SCISSOR_TEST):F(n.SCISSOR_TEST)}function w(B){B===void 0&&(B=n.TEXTURE0+J-1),H!==B&&(n.activeTexture(B),H=B)}function v(B,_t,et){et===void 0&&(H===null?et=n.TEXTURE0+J-1:et=H);let tt=mt[et];tt===void 0&&(tt={type:void 0,texture:void 0},mt[et]=tt),(tt.type!==B||tt.texture!==_t)&&(H!==et&&(n.activeTexture(et),H=et),n.bindTexture(B,_t||ft[B]),tt.type=B,tt.texture=_t)}function C(){const B=mt[H];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(B){Lt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Lt.copy(B))}function bt(B){zt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),zt.copy(B))}function Ht(B,_t){let et=c.get(_t);et===void 0&&(et=new WeakMap,c.set(_t,et));let tt=et.get(B);tt===void 0&&(tt=n.getUniformBlockIndex(_t,B.name),et.set(B,tt))}function Ut(B,_t){const tt=c.get(_t).get(B);a.get(_t)!==tt&&(n.uniformBlockBinding(_t,tt,B.__bindingPointIndex),a.set(_t,tt))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},H=null,mt={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,p=null,m=null,b=null,M=null,S=null,O=null,I=new pe(0,0,0),P=0,N=!1,q=null,y=null,E=null,K=null,W=null,Lt.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:vt,disable:F,bindFramebuffer:ct,drawBuffers:it,useProgram:lt,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:U,setLineWidth:D,setPolygonOffset:X,setScissorTest:Z,activeTexture:w,bindTexture:v,unbindTexture:C,compressedTexImage2D:V,compressedTexImage3D:z,texImage2D:xt,texImage3D:Pt,updateUBOMapping:Ht,uniformBlockBinding:Ut,texStorage2D:At,texStorage3D:dt,texSubImage2D:k,texSubImage3D:ht,compressedTexSubImage2D:ut,compressedTexSubImage3D:pt,scissor:Dt,viewport:bt,reset:kt}}function fd(n,t,e,i){const s=oS(i);switch(e){case Vf:return n*t;case Xf:return n*t;case qf:return n*t*2;case Yf:return n*t/s.components*s.byteLength;case hu:return n*t/s.components*s.byteLength;case $f:return n*t*2/s.components*s.byteLength;case du:return n*t*2/s.components*s.byteLength;case Wf:return n*t*3/s.components*s.byteLength;case ni:return n*t*4/s.components*s.byteLength;case fu:return n*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case al:case ll:return Math.max(n,16)*Math.max(t,8)/4;case rl:case cl:return Math.max(n,8)*Math.max(t,8)/2;case ul:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case oa:case Al:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case jf:case Pl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Cl:case Il:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function oS(n){switch(n){case Xi:case Gf:return{byteLength:1,components:1};case rr:case Hf:case pr:return{byteLength:2,components:1};case lu:case uu:return{byteLength:2,components:4};case Cs:case cu:case Hi:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function rS(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return f?new OffscreenCanvas(w,v):cr("canvas")}function x(w,v,C){let V=1;const z=Z(w);if((z.width>C||z.height>C)&&(V=C/Math.max(z.width,z.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const k=Math.floor(V*z.width),ht=Math.floor(V*z.height);u===void 0&&(u=_(k,ht));const ut=v?_(k,ht):u;return ut.width=k,ut.height=ht,ut.getContext("2d").drawImage(w,0,0,k,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+k+"x"+ht+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==Hn&&w.minFilter!==ti}function m(w){n.generateMipmap(w)}function b(w,v,C,V,z=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let k=v;if(v===n.RED&&(C===n.FLOAT&&(k=n.R32F),C===n.HALF_FLOAT&&(k=n.R16F),C===n.UNSIGNED_BYTE&&(k=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.R8UI),C===n.UNSIGNED_SHORT&&(k=n.R16UI),C===n.UNSIGNED_INT&&(k=n.R32UI),C===n.BYTE&&(k=n.R8I),C===n.SHORT&&(k=n.R16I),C===n.INT&&(k=n.R32I)),v===n.RG&&(C===n.FLOAT&&(k=n.RG32F),C===n.HALF_FLOAT&&(k=n.RG16F),C===n.UNSIGNED_BYTE&&(k=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RG8UI),C===n.UNSIGNED_SHORT&&(k=n.RG16UI),C===n.UNSIGNED_INT&&(k=n.RG32UI),C===n.BYTE&&(k=n.RG8I),C===n.SHORT&&(k=n.RG16I),C===n.INT&&(k=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RGB8UI),C===n.UNSIGNED_SHORT&&(k=n.RGB16UI),C===n.UNSIGNED_INT&&(k=n.RGB32UI),C===n.BYTE&&(k=n.RGB8I),C===n.SHORT&&(k=n.RGB16I),C===n.INT&&(k=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),C===n.UNSIGNED_INT&&(k=n.RGBA32UI),C===n.BYTE&&(k=n.RGBA8I),C===n.SHORT&&(k=n.RGBA16I),C===n.INT&&(k=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),v===n.RGBA){const ht=z?pa:be.getTransfer(V);C===n.FLOAT&&(k=n.RGBA32F),C===n.HALF_FLOAT&&(k=n.RGBA16F),C===n.UNSIGNED_BYTE&&(k=ht===Ue?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function M(w,v){let C;return w?v===null||v===Cs||v===xo?C=n.DEPTH24_STENCIL8:v===Hi?C=n.DEPTH32F_STENCIL8:v===rr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Cs||v===xo?C=n.DEPTH_COMPONENT24:v===Hi?C=n.DEPTH_COMPONENT32F:v===rr&&(C=n.DEPTH_COMPONENT16),C}function S(w,v){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Hn&&w.minFilter!==ti?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function O(w){const v=w.target;v.removeEventListener("dispose",O),P(v),v.isVideoTexture&&h.delete(v)}function I(w){const v=w.target;v.removeEventListener("dispose",I),q(v)}function P(w){const v=i.get(w);if(v.__webglInit===void 0)return;const C=w.source,V=d.get(C);if(V){const z=V[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&N(w),Object.keys(V).length===0&&d.delete(C)}i.remove(w)}function N(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const C=w.source,V=d.get(C);delete V[v.__cacheKey],r.memory.textures--}function q(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let z=0;z<v.__webglFramebuffer[V].length;z++)n.deleteFramebuffer(v.__webglFramebuffer[V][z]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=w.textures;for(let V=0,z=C.length;V<z;V++){const k=i.get(C[V]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),r.memory.textures--),i.remove(C[V])}i.remove(w)}let y=0;function E(){y=0}function K(){const w=y;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),y+=1,w}function W(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function J(w,v){const C=i.get(w);if(w.isVideoTexture&&D(w),w.isRenderTargetTexture===!1&&w.version>0&&C.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(C,w,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function ot(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){zt(C,w,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function G(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){zt(C,w,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function nt(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){rt(C,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const H={[ke]:n.REPEAT,[Ts]:n.CLAMP_TO_EDGE,[ol]:n.MIRRORED_REPEAT},mt={[Hn]:n.NEAREST,[C_]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[ti]:n.LINEAR,[ec]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},yt={[U_]:n.NEVER,[G_]:n.ALWAYS,[N_]:n.LESS,[Zf]:n.LEQUAL,[F_]:n.EQUAL,[z_]:n.GEQUAL,[O_]:n.GREATER,[B_]:n.NOTEQUAL};function gt(w,v){if(v.type===Hi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ti||v.magFilter===ec||v.magFilter===br||v.magFilter===As||v.minFilter===ti||v.minFilter===ec||v.minFilter===br||v.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,H[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,H[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,H[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,mt[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Hn||v.minFilter!==br&&v.minFilter!==As||v.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Lt(w,v){let C=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",O));const V=v.source;let z=d.get(V);z===void 0&&(z={},d.set(V,z));const k=W(v);if(k!==w.__cacheKey){z[k]===void 0&&(z[k]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,C=!0),z[k].usedTimes++;const ht=z[w.__cacheKey];ht!==void 0&&(z[w.__cacheKey].usedTimes--,ht.usedTimes===0&&N(v)),w.__cacheKey=k,w.__webglTexture=z[k].texture}return C}function zt(w,v,C){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const z=Lt(w,v),k=v.source;e.bindTexture(V,w.__webglTexture,n.TEXTURE0+C);const ht=i.get(k);if(k.version!==ht.__version||z===!0){e.activeTexture(n.TEXTURE0+C);const ut=be.getPrimaries(be.workingColorSpace),pt=v.colorSpace===os?null:be.getPrimaries(v.colorSpace),At=v.colorSpace===os||ut===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let dt=x(v.image,!1,s.maxTextureSize);dt=X(v,dt);const xt=o.convert(v.format,v.colorSpace),Pt=o.convert(v.type);let Dt=b(v.internalFormat,xt,Pt,v.colorSpace,v.isVideoTexture);gt(V,v);let bt;const Ht=v.mipmaps,Ut=v.isVideoTexture!==!0,kt=ht.__version===void 0||z===!0,B=k.dataReady,_t=S(v,dt);if(v.isDepthTexture)Dt=M(v.format===yo,v.type),kt&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,Dt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Dt,dt.width,dt.height,0,xt,Pt,null));else if(v.isDataTexture)if(Ht.length>0){Ut&&kt&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,Ht[0].width,Ht[0].height);for(let et=0,tt=Ht.length;et<tt;et++)bt=Ht[et],Ut?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,bt.width,bt.height,xt,Pt,bt.data):e.texImage2D(n.TEXTURE_2D,et,Dt,bt.width,bt.height,0,xt,Pt,bt.data);v.generateMipmaps=!1}else Ut?(kt&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,dt.width,dt.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,xt,Pt,dt.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,dt.width,dt.height,0,xt,Pt,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Dt,Ht[0].width,Ht[0].height,dt.depth);for(let et=0,tt=Ht.length;et<tt;et++)if(bt=Ht[et],v.format!==ni)if(xt!==null)if(Ut){if(B)if(v.layerUpdates.size>0){const wt=fd(bt.width,bt.height,v.format,v.type);for(const Mt of v.layerUpdates){const Bt=bt.data.subarray(Mt*wt/bt.data.BYTES_PER_ELEMENT,(Mt+1)*wt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,Mt,bt.width,bt.height,1,xt,Bt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,bt.width,bt.height,dt.depth,xt,bt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Dt,bt.width,bt.height,dt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,bt.width,bt.height,dt.depth,xt,Pt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Dt,bt.width,bt.height,dt.depth,0,xt,Pt,bt.data)}else{Ut&&kt&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,Ht[0].width,Ht[0].height);for(let et=0,tt=Ht.length;et<tt;et++)bt=Ht[et],v.format!==ni?xt!==null?Ut?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,bt.width,bt.height,xt,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Dt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,bt.width,bt.height,xt,Pt,bt.data):e.texImage2D(n.TEXTURE_2D,et,Dt,bt.width,bt.height,0,xt,Pt,bt.data)}else if(v.isDataArrayTexture)if(Ut){if(kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Dt,dt.width,dt.height,dt.depth),B)if(v.layerUpdates.size>0){const et=fd(dt.width,dt.height,v.format,v.type);for(const tt of v.layerUpdates){const wt=dt.data.subarray(tt*et/dt.data.BYTES_PER_ELEMENT,(tt+1)*et/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,dt.width,dt.height,1,xt,Pt,wt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,xt,Pt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,dt.width,dt.height,dt.depth,0,xt,Pt,dt.data);else if(v.isData3DTexture)Ut?(kt&&e.texStorage3D(n.TEXTURE_3D,_t,Dt,dt.width,dt.height,dt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,xt,Pt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,dt.width,dt.height,dt.depth,0,xt,Pt,dt.data);else if(v.isFramebufferTexture){if(kt)if(Ut)e.texStorage2D(n.TEXTURE_2D,_t,Dt,dt.width,dt.height);else{let et=dt.width,tt=dt.height;for(let wt=0;wt<_t;wt++)e.texImage2D(n.TEXTURE_2D,wt,Dt,et,tt,0,xt,Pt,null),et>>=1,tt>>=1}}else if(Ht.length>0){if(Ut&&kt){const et=Z(Ht[0]);e.texStorage2D(n.TEXTURE_2D,_t,Dt,et.width,et.height)}for(let et=0,tt=Ht.length;et<tt;et++)bt=Ht[et],Ut?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,xt,Pt,bt):e.texImage2D(n.TEXTURE_2D,et,Dt,xt,Pt,bt);v.generateMipmaps=!1}else if(Ut){if(kt){const et=Z(dt);e.texStorage2D(n.TEXTURE_2D,_t,Dt,et.width,et.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Pt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Dt,xt,Pt,dt);p(v)&&m(V),ht.__version=k.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function rt(w,v,C){if(v.image.length!==6)return;const V=Lt(w,v),z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+C);const k=i.get(z);if(z.version!==k.__version||V===!0){e.activeTexture(n.TEXTURE0+C);const ht=be.getPrimaries(be.workingColorSpace),ut=v.colorSpace===os?null:be.getPrimaries(v.colorSpace),pt=v.colorSpace===os||ht===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const At=v.isCompressedTexture||v.image[0].isCompressedTexture,dt=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let tt=0;tt<6;tt++)!At&&!dt?xt[tt]=x(v.image[tt],!0,s.maxCubemapSize):xt[tt]=dt?v.image[tt].image:v.image[tt],xt[tt]=X(v,xt[tt]);const Pt=xt[0],Dt=o.convert(v.format,v.colorSpace),bt=o.convert(v.type),Ht=b(v.internalFormat,Dt,bt,v.colorSpace),Ut=v.isVideoTexture!==!0,kt=k.__version===void 0||V===!0,B=z.dataReady;let _t=S(v,Pt);gt(n.TEXTURE_CUBE_MAP,v);let et;if(At){Ut&&kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Ht,Pt.width,Pt.height);for(let tt=0;tt<6;tt++){et=xt[tt].mipmaps;for(let wt=0;wt<et.length;wt++){const Mt=et[wt];v.format!==ni?Dt!==null?Ut?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,0,0,Mt.width,Mt.height,Dt,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,Ht,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,0,0,Mt.width,Mt.height,Dt,bt,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,Ht,Mt.width,Mt.height,0,Dt,bt,Mt.data)}}}else{if(et=v.mipmaps,Ut&&kt){et.length>0&&_t++;const tt=Z(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Ht,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(dt){Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,xt[tt].width,xt[tt].height,Dt,bt,xt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,xt[tt].width,xt[tt].height,0,Dt,bt,xt[tt].data);for(let wt=0;wt<et.length;wt++){const Bt=et[wt].image[tt].image;Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,0,0,Bt.width,Bt.height,Dt,bt,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,Ht,Bt.width,Bt.height,0,Dt,bt,Bt.data)}}else{Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,bt,xt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,Dt,bt,xt[tt]);for(let wt=0;wt<et.length;wt++){const Mt=et[wt];Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,0,0,Dt,bt,Mt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,Ht,Dt,bt,Mt.image[tt])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),k.__version=z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ft(w,v,C,V,z,k){const ht=o.convert(C.format,C.colorSpace),ut=o.convert(C.type),pt=b(C.internalFormat,ht,ut,C.colorSpace);if(!i.get(v).__hasExternalTextures){const dt=Math.max(1,v.width>>k),xt=Math.max(1,v.height>>k);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?e.texImage3D(z,k,pt,dt,xt,v.depth,0,ht,ut,null):e.texImage2D(z,k,pt,dt,xt,0,ht,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,z,i.get(C).__webglTexture,0,L(v)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,z,i.get(C).__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(w,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const V=v.depthTexture,z=V&&V.isDepthTexture?V.type:null,k=M(v.stencilBuffer,z),ht=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=L(v);U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,k,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,k,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,k,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,w)}else{const V=v.textures;for(let z=0;z<V.length;z++){const k=V[z],ht=o.convert(k.format,k.colorSpace),ut=o.convert(k.type),pt=b(k.internalFormat,ht,ut,k.colorSpace),At=L(v);C&&U(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,pt,v.width,v.height):U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const V=i.get(v.depthTexture).__webglTexture,z=L(v);if(v.depthTexture.format===co)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(v.depthTexture.format===yo)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function ct(w){const v=i.get(w),C=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const V=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",z)};V.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=V}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");F(v.__webglFramebuffer,w)}else if(C){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),vt(v.__webglDepthbuffer[V],w,!1);else{const z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,k)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),vt(v.__webglDepthbuffer,w,!1);else{const V=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(w,v,C){const V=i.get(w);v!==void 0&&ft(V.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&ct(w)}function lt(w){const v=w.texture,C=i.get(w),V=i.get(v);w.addEventListener("dispose",I);const z=w.textures,k=w.isWebGLCubeRenderTarget===!0,ht=z.length>1;if(ht||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,r.memory.textures++),k){C.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ut]=[];for(let pt=0;pt<v.mipmaps.length;pt++)C.__webglFramebuffer[ut][pt]=n.createFramebuffer()}else C.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)C.__webglFramebuffer[ut]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ht)for(let ut=0,pt=z.length;ut<pt;ut++){const At=i.get(z[ut]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),r.memory.textures++)}if(w.samples>0&&U(w)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ut=0;ut<z.length;ut++){const pt=z[ut];C.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ut]);const At=o.convert(pt.format,pt.colorSpace),dt=o.convert(pt.type),xt=b(pt.internalFormat,At,dt,pt.colorSpace,w.isXRRenderTarget===!0),Pt=L(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,xt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,C.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(C.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),gt(n.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[ut][pt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else ft(C.__webglFramebuffer[ut],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(v)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let ut=0,pt=z.length;ut<pt;ut++){const At=z[ut],dt=i.get(At);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),gt(n.TEXTURE_2D,At),ft(C.__webglFramebuffer,w,At,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),p(At)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,V.__webglTexture),gt(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[pt],w,v,n.COLOR_ATTACHMENT0,ut,pt);else ft(C.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,ut,0);p(v)&&m(ut),e.unbindTexture()}w.depthBuffer&&ct(w)}function Et(w){const v=w.textures;for(let C=0,V=v.length;C<V;C++){const z=v[C];if(p(z)){const k=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ht=i.get(z).__webglTexture;e.bindTexture(k,ht),m(k),e.unbindTexture()}}}const Q=[],g=[];function T(w){if(w.samples>0){if(U(w)===!1){const v=w.textures,C=w.width,V=w.height;let z=n.COLOR_BUFFER_BIT;const k=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(w),ut=v.length>1;if(ut)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const At=i.get(v[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,At,0)}n.blitFramebuffer(0,0,C,V,0,0,C,V,z,n.NEAREST),c===!0&&(Q.length=0,g.length=0,Q.push(n.COLOR_ATTACHMENT0+pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Q.push(k),g.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const At=i.get(v[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,At,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(w){return Math.min(s.maxSamples,w.samples)}function U(w){const v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(w){const v=r.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function X(w,v){const C=w.colorSpace,V=w.format,z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||C!==ds&&C!==os&&(be.getTransfer(C)===Ue?(V!==ni||z!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function Z(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=E,this.setTexture2D=J,this.setTexture2DArray=ot,this.setTexture3D=G,this.setTextureCube=nt,this.rebindTextures=it,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=U}function aS(n,t){function e(i,s=os){let o;const r=be.getTransfer(s);if(i===Xi)return n.UNSIGNED_BYTE;if(i===lu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gf)return n.BYTE;if(i===Hf)return n.SHORT;if(i===rr)return n.UNSIGNED_SHORT;if(i===cu)return n.INT;if(i===Cs)return n.UNSIGNED_INT;if(i===Hi)return n.FLOAT;if(i===pr)return n.HALF_FLOAT;if(i===Vf)return n.ALPHA;if(i===Wf)return n.RGB;if(i===ni)return n.RGBA;if(i===Xf)return n.LUMINANCE;if(i===qf)return n.LUMINANCE_ALPHA;if(i===co)return n.DEPTH_COMPONENT;if(i===yo)return n.DEPTH_STENCIL;if(i===Yf)return n.RED;if(i===hu)return n.RED_INTEGER;if(i===$f)return n.RG;if(i===du)return n.RG_INTEGER;if(i===fu)return n.RGBA_INTEGER;if(i===ea||i===na||i===ia||i===sa)if(r===Ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ea)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ea)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===al||i===cl||i===ll)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===rl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ul||i===hl||i===dl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ul||i===hl)return r===Ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===dl)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===yl||i===Ml||i===wl||i===Sl||i===El||i===bl||i===Tl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===fl)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_l)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vl)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ml)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sl)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bl)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oa||i===Al||i===Rl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===oa)return r===Ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Al)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jf||i===Pl||i===Cl||i===Il)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===oa)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Pl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Il)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class cS extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xt extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lS={type:"move"};class Pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lS)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Xt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const uS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hS=`
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

}`;class dS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Mn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new An({vertexShader:uS,fragmentShader:hS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new A(new Ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fS extends So{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null;const x=new dS,p=e.getContextAttributes();let m=null,b=null;const M=[],S=[],O=new Ot;let I=null;const P=new Ne;P.layers.enable(1),P.viewport=new Pe;const N=new Ne;N.layers.enable(2),N.viewport=new Pe;const q=[P,N],y=new cS;y.layers.enable(1),y.layers.enable(2);let E=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Pc,M[rt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Pc,M[rt]=ft),ft.getGripSpace()},this.getHand=function(rt){let ft=M[rt];return ft===void 0&&(ft=new Pc,M[rt]=ft),ft.getHandSpace()};function W(rt){const ft=S.indexOf(rt.inputSource);if(ft===-1)return;const vt=M[ft];vt!==void 0&&(vt.update(rt.inputSource,rt.frame,l||r),vt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function J(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ot);for(let rt=0;rt<M.length;rt++){const ft=S[rt];ft!==null&&(S[rt]=null,M[rt].disconnect(ft))}E=null,K=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,b=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){o=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(rt){l=rt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ot),p.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const ft={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Is(f.framebufferWidth,f.framebufferHeight,{format:ni,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ft=null,vt=null,F=null;p.depth&&(F=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=p.stencil?yo:co,vt=p.stencil?xo:Cs);const ct={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Is(d.textureWidth,d.textureHeight,{format:ni,type:Xi,depthTexture:new lp(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ot(rt){for(let ft=0;ft<rt.removed.length;ft++){const vt=rt.removed[ft],F=S.indexOf(vt);F>=0&&(S[F]=null,M[F].disconnect(vt))}for(let ft=0;ft<rt.added.length;ft++){const vt=rt.added[ft];let F=S.indexOf(vt);if(F===-1){for(let it=0;it<M.length;it++)if(it>=S.length){S.push(vt),F=it;break}else if(S[it]===null){S[it]=vt,F=it;break}if(F===-1)break}const ct=M[F];ct&&ct.connect(vt)}}const G=new $,nt=new $;function H(rt,ft,vt){G.setFromMatrixPosition(ft.matrixWorld),nt.setFromMatrixPosition(vt.matrixWorld);const F=G.distanceTo(nt),ct=ft.projectionMatrix.elements,it=vt.projectionMatrix.elements,lt=ct[14]/(ct[10]-1),Et=ct[14]/(ct[10]+1),Q=(ct[9]+1)/ct[5],g=(ct[9]-1)/ct[5],T=(ct[8]-1)/ct[0],L=(it[8]+1)/it[0],U=lt*T,D=lt*L,X=F/(-T+L),Z=X*-T;if(ft.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Z),rt.translateZ(X),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),ct[10]===-1)rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const w=lt+X,v=Et+X,C=U-Z,V=D+(F-Z),z=Q*Et/v*w,k=g*Et/v*w;rt.projectionMatrix.makePerspective(C,V,z,k,w,v),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function mt(rt,ft){ft===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(ft.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let ft=rt.near,vt=rt.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(vt=x.depthFar)),y.near=N.near=P.near=ft,y.far=N.far=P.far=vt,(E!==y.near||K!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,K=y.far);const F=rt.parent,ct=y.cameras;mt(y,F);for(let it=0;it<ct.length;it++)mt(ct[it],F);ct.length===2?H(y,P,N):y.projectionMatrix.copy(P.projectionMatrix),yt(rt,y,F)};function yt(rt,ft,vt){vt===null?rt.matrix.copy(ft.matrixWorld):(rt.matrix.copy(vt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(ft.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=ar*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(rt){c=rt,d!==null&&(d.fixedFoveation=rt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=rt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let gt=null;function Lt(rt,ft){if(h=ft.getViewerPose(l||r),_=ft,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let F=!1;vt.length!==y.cameras.length&&(y.cameras.length=0,F=!0);for(let it=0;it<vt.length;it++){const lt=vt[it];let Et=null;if(f!==null)Et=f.getViewport(lt);else{const g=u.getViewSubImage(d,lt);Et=g.viewport,it===0&&(t.setRenderTargetTextures(b,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(b))}let Q=q[it];Q===void 0&&(Q=new Ne,Q.layers.enable(it),Q.viewport=new Pe,q[it]=Q),Q.matrix.fromArray(lt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(lt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Et.x,Et.y,Et.width,Et.height),it===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),F===!0&&y.cameras.push(Q)}const ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")){const it=u.getDepthInformation(vt[0]);it&&it.isValid&&it.texture&&x.init(t,it,s.renderState)}}for(let vt=0;vt<M.length;vt++){const F=S[vt],ct=M[vt];F!==null&&ct!==void 0&&ct.update(F,ft,l||r)}gt&&gt(rt,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}const zt=new ap;zt.setAnimationLoop(Lt),this.setAnimationLoop=function(rt){gt=rt},this.dispose=function(){}}}const ys=new Ei,pS=new Be;function mS(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,op(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,M,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),u(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m)):m.isMeshStandardMaterial?(o(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(o(p,m),_(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),x(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,b,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===En&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===En&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),M=b.envMap,S=b.envMapRotation;M&&(p.envMap.value=M,ys.copy(S),ys.x*=-1,ys.y*=-1,ys.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),p.envMapRotation.value.setFromMatrix4(pS.makeRotationFromEuler(ys)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gS(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){const S=M.program;i.uniformBlockBinding(b,S)}function l(b,M){let S=s[b.id];S===void 0&&(_(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",p));const O=M.program;i.updateUBOMapping(b,O);const I=t.render.frame;o[b.id]!==I&&(d(b),o[b.id]=I)}function h(b){const M=u();b.__bindingPointIndex=M;const S=n.createBuffer(),O=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function u(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=s[b.id],S=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let I=0,P=S.length;I<P;I++){const N=Array.isArray(S[I])?S[I]:[S[I]];for(let q=0,y=N.length;q<y;q++){const E=N[q];if(f(E,I,q,O)===!0){const K=E.__offset,W=Array.isArray(E.value)?E.value:[E.value];let J=0;for(let ot=0;ot<W.length;ot++){const G=W[ot],nt=x(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,K+J,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,J),J+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,M,S,O){const I=b.value,P=M+"_"+S;if(O[P]===void 0)return typeof I=="number"||typeof I=="boolean"?O[P]=I:O[P]=I.clone(),!0;{const N=O[P];if(typeof I=="number"||typeof I=="boolean"){if(N!==I)return O[P]=I,!0}else if(N.equals(I)===!1)return N.copy(I),!0}return!1}function _(b){const M=b.uniforms;let S=0;const O=16;for(let P=0,N=M.length;P<N;P++){const q=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,E=q.length;y<E;y++){const K=q[y],W=Array.isArray(K.value)?K.value:[K.value];for(let J=0,ot=W.length;J<ot;J++){const G=W[J],nt=x(G),H=S%O,mt=H%nt.boundary,yt=H+mt;S+=mt,yt!==0&&O-yt<nt.storage&&(S+=O-yt),K.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=S,S+=nt.storage}}}const I=S%O;return I>0&&(S+=O-I),b.__size=S,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const S=r.indexOf(M.__bindingPointIndex);r.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function m(){for(const b in s)n.deleteBuffer(s[b]);r=[],s={},o={}}return{bind:c,update:l,dispose:m}}class Vn{constructor(t={}){const{canvas:e=iv(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=as,this.toneMappingExposure=1;const M=this;let S=!1,O=0,I=0,P=null,N=-1,q=null;const y=new Pe,E=new Pe;let K=null;const W=new pe(0);let J=0,ot=e.width,G=e.height,nt=1,H=null,mt=null;const yt=new Pe(0,0,ot,G),gt=new Pe(0,0,ot,G);let Lt=!1;const zt=new vu;let rt=!1,ft=!1;const vt=new Be,F=new Be,ct=new $,it=new Pe,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Q(){return P===null?nt:1}let g=i;function T(R,Y){return e.getContext(R,Y)}try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${au}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),g===null){const Y="webgl2";if(g=T(Y,R),g===null)throw T(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let L,U,D,X,Z,w,v,C,V,z,k,ht,ut,pt,At,dt,xt,Pt,Dt,bt,Ht,Ut,kt,B;function _t(){L=new wM(g),L.init(),Ut=new aS(g,L),U=new gM(g,L,t,Ut),D=new sS(g),U.reverseDepthBuffer&&D.buffers.depth.setReversed(!0),X=new bM(g),Z=new Vw,w=new rS(g,L,D,Z,U,Ut,X),v=new vM(M),C=new MM(M),V=new Lv(g),kt=new pM(g,V),z=new SM(g,V,X,kt),k=new AM(g,z,V,X),Dt=new TM(g,U,w),dt=new _M(Z),ht=new kw(M,v,C,L,U,kt,dt),ut=new mS(M,Z),pt=new Xw,At=new Zw(L),Pt=new fM(M,v,C,D,k,d,c),xt=new nS(M,k,U),B=new gS(g,X,U,D),bt=new mM(g,L,X),Ht=new EM(g,L,X),X.programs=ht.programs,M.capabilities=U,M.extensions=L,M.properties=Z,M.renderLists=pt,M.shadowMap=xt,M.state=D,M.info=X}_t();const et=new fS(M,g);this.xr=et,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const R=L.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=L.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(R){R!==void 0&&(nt=R,this.setSize(ot,G,!1))},this.getSize=function(R){return R.set(ot,G)},this.setSize=function(R,Y,at=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=R,G=Y,e.width=Math.floor(R*nt),e.height=Math.floor(Y*nt),at===!0&&(e.style.width=R+"px",e.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(ot*nt,G*nt).floor()},this.setDrawingBufferSize=function(R,Y,at){ot=R,G=Y,nt=at,e.width=Math.floor(R*at),e.height=Math.floor(Y*at),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(yt)},this.setViewport=function(R,Y,at,st){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Y,at,st),D.viewport(y.copy(yt).multiplyScalar(nt).round())},this.getScissor=function(R){return R.copy(gt)},this.setScissor=function(R,Y,at,st){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,Y,at,st),D.scissor(E.copy(gt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(R){D.setScissorTest(Lt=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){mt=R},this.getClearColor=function(R){return R.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(R=!0,Y=!0,at=!0){let st=0;if(R){let j=!1;if(P!==null){const Rt=P.texture.format;j=Rt===fu||Rt===du||Rt===hu}if(j){const Rt=P.texture.type,Nt=Rt===Xi||Rt===Cs||Rt===rr||Rt===xo||Rt===lu||Rt===uu,Gt=Pt.getClearColor(),Wt=Pt.getClearAlpha(),Zt=Gt.r,Jt=Gt.g,qt=Gt.b;Nt?(f[0]=Zt,f[1]=Jt,f[2]=qt,f[3]=Wt,g.clearBufferuiv(g.COLOR,0,f)):(_[0]=Zt,_[1]=Jt,_[2]=qt,_[3]=Wt,g.clearBufferiv(g.COLOR,0,_))}else st|=g.COLOR_BUFFER_BIT}Y&&(st|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),at&&(st|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),pt.dispose(),At.dispose(),Z.dispose(),v.dispose(),C.dispose(),k.dispose(),kt.dispose(),B.dispose(),ht.dispose(),et.dispose(),et.removeEventListener("sessionstart",xe),et.removeEventListener("sessionend",Me),Tt.stop()};function tt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=X.autoReset,Y=xt.enabled,at=xt.autoUpdate,st=xt.needsUpdate,j=xt.type;_t(),X.autoReset=R,xt.enabled=Y,xt.autoUpdate=at,xt.needsUpdate=st,xt.type=j}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Bt(R){const Y=R.target;Y.removeEventListener("dispose",Bt),$t(Y)}function $t(R){Qt(R),Z.remove(R)}function Qt(R){const Y=Z.get(R).programs;Y!==void 0&&(Y.forEach(function(at){ht.releaseProgram(at)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,at,st,j,Rt){Y===null&&(Y=lt);const Nt=j.isMesh&&j.matrixWorld.determinant()<0,Gt=Ye(R,Y,at,st,j);D.setMaterial(st,Nt);let Wt=at.index,Zt=1;if(st.wireframe===!0){if(Wt=z.getWireframeAttribute(at),Wt===void 0)return;Zt=2}const Jt=at.drawRange,qt=at.attributes.position;let ge=Jt.start*Zt,ye=(Jt.start+Jt.count)*Zt;Rt!==null&&(ge=Math.max(ge,Rt.start*Zt),ye=Math.min(ye,(Rt.start+Rt.count)*Zt)),Wt!==null?(ge=Math.max(ge,0),ye=Math.min(ye,Wt.count)):qt!=null&&(ge=Math.max(ge,0),ye=Math.min(ye,qt.count));const Re=ye-ge;if(Re<0||Re===1/0)return;kt.setup(j,st,Gt,at,Wt);let Ke,me=bt;if(Wt!==null&&(Ke=V.get(Wt),me=Ht,me.setIndex(Ke)),j.isMesh)st.wireframe===!0?(D.setLineWidth(st.wireframeLinewidth*Q()),me.setMode(g.LINES)):me.setMode(g.TRIANGLES);else if(j.isLine){let Yt=st.linewidth;Yt===void 0&&(Yt=1),D.setLineWidth(Yt*Q()),j.isLineSegments?me.setMode(g.LINES):j.isLineLoop?me.setMode(g.LINE_LOOP):me.setMode(g.LINE_STRIP)}else j.isPoints?me.setMode(g.POINTS):j.isSprite&&me.setMode(g.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)me.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))me.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Yt=j._multiDrawStarts,Ve=j._multiDrawCounts,Ct=j._multiDrawCount,Le=Wt?V.get(Wt).bytesPerElement:1,ze=Z.get(st).currentProgram.getUniforms();for(let we=0;we<Ct;we++)ze.setValue(g,"_gl_DrawID",we),me.render(Yt[we]/Le,Ve[we])}else if(j.isInstancedMesh)me.renderInstances(ge,Re,j.count);else if(at.isInstancedBufferGeometry){const Yt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ve=Math.min(at.instanceCount,Yt);me.renderInstances(ge,Re,Ve)}else me.render(ge,Re)};function Kt(R,Y,at){R.transparent===!0&&R.side===fe&&R.forceSinglePass===!1?(R.side=En,R.needsUpdate=!0,_e(R,Y,at),R.side=ls,R.needsUpdate=!0,_e(R,Y,at),R.side=fe):_e(R,Y,at)}this.compile=function(R,Y,at=null){at===null&&(at=R),p=At.get(at),p.init(Y),b.push(p),at.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),R!==at&&R.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const st=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Rt=j.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){const Gt=Rt[Nt];Kt(Gt,at,j),st.add(Gt)}else Kt(Rt,at,j),st.add(Rt)}),b.pop(),p=null,st},this.compileAsync=function(R,Y,at=null){const st=this.compile(R,Y,at);return new Promise(j=>{function Rt(){if(st.forEach(function(Nt){Z.get(Nt).currentProgram.isReady()&&st.delete(Nt)}),st.size===0){j(R);return}setTimeout(Rt,10)}L.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ie=null;function he(R){ie&&ie(R)}function xe(){Tt.stop()}function Me(){Tt.start()}const Tt=new ap;Tt.setAnimationLoop(he),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(R){ie=R,et.setAnimationLoop(R),R===null?Tt.stop():Tt.start()},et.addEventListener("sessionstart",xe),et.addEventListener("sessionend",Me),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(Y),Y=et.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,Y,P),p=At.get(R,b.length),p.init(Y),b.push(p),F.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),zt.setFromProjectionMatrix(F),ft=this.localClippingEnabled,rt=dt.init(this.clippingPlanes,ft),x=pt.get(R,m.length),x.init(),m.push(x),et.enabled===!0&&et.isPresenting===!0){const Rt=M.xr.getDepthSensingMesh();Rt!==null&&re(Rt,Y,-1/0,M.sortObjects)}re(R,Y,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(H,mt),Et=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Et&&Pt.addToRenderList(x,R),this.info.render.frame++,rt===!0&&dt.beginShadows();const at=p.state.shadowsArray;xt.render(at,R,Y),rt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=x.opaque,j=x.transmissive;if(p.setupLights(),Y.isArrayCamera){const Rt=Y.cameras;if(j.length>0)for(let Nt=0,Gt=Rt.length;Nt<Gt;Nt++){const Wt=Rt[Nt];de(st,j,R,Wt)}Et&&Pt.render(R);for(let Nt=0,Gt=Rt.length;Nt<Gt;Nt++){const Wt=Rt[Nt];ne(x,R,Wt,Wt.viewport)}}else j.length>0&&de(st,j,R,Y),Et&&Pt.render(R),ne(x,R,Y);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(M,R,Y),kt.resetDefaultState(),N=-1,q=null,b.pop(),b.length>0?(p=b[b.length-1],rt===!0&&dt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function re(R,Y,at,st){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||zt.intersectsSprite(R)){st&&it.setFromMatrixPosition(R.matrixWorld).applyMatrix4(F);const Nt=k.update(R),Gt=R.material;Gt.visible&&x.push(R,Nt,Gt,at,it.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||zt.intersectsObject(R))){const Nt=k.update(R),Gt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),it.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),it.copy(Nt.boundingSphere.center)),it.applyMatrix4(R.matrixWorld).applyMatrix4(F)),Array.isArray(Gt)){const Wt=Nt.groups;for(let Zt=0,Jt=Wt.length;Zt<Jt;Zt++){const qt=Wt[Zt],ge=Gt[qt.materialIndex];ge&&ge.visible&&x.push(R,Nt,ge,at,it.z,qt)}}else Gt.visible&&x.push(R,Nt,Gt,at,it.z,null)}}const Rt=R.children;for(let Nt=0,Gt=Rt.length;Nt<Gt;Nt++)re(Rt[Nt],Y,at,st)}function ne(R,Y,at,st){const j=R.opaque,Rt=R.transmissive,Nt=R.transparent;p.setupLightsView(at),rt===!0&&dt.setGlobalState(M.clippingPlanes,at),st&&D.viewport(y.copy(st)),j.length>0&&le(j,Y,at),Rt.length>0&&le(Rt,Y,at),Nt.length>0&&le(Nt,Y,at),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function de(R,Y,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[st.id]===void 0&&(p.state.transmissionRenderTarget[st.id]=new Is(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?pr:Xi,minFilter:As,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Rt=p.state.transmissionRenderTarget[st.id],Nt=st.viewport||y;Rt.setSize(Nt.z,Nt.w);const Gt=M.getRenderTarget();M.setRenderTarget(Rt),M.getClearColor(W),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Et&&Pt.render(at);const Wt=M.toneMapping;M.toneMapping=as;const Zt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),p.setupLightsView(st),rt===!0&&dt.setGlobalState(M.clippingPlanes,st),le(R,at,st),w.updateMultisampleRenderTarget(Rt),w.updateRenderTargetMipmap(Rt),L.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let qt=0,ge=Y.length;qt<ge;qt++){const ye=Y[qt],Re=ye.object,Ke=ye.geometry,me=ye.material,Yt=ye.group;if(me.side===fe&&Re.layers.test(st.layers)){const Ve=me.side;me.side=En,me.needsUpdate=!0,Ce(Re,at,st,Ke,me,Yt),me.side=Ve,me.needsUpdate=!0,Jt=!0}}Jt===!0&&(w.updateMultisampleRenderTarget(Rt),w.updateRenderTargetMipmap(Rt))}M.setRenderTarget(Gt),M.setClearColor(W,J),Zt!==void 0&&(st.viewport=Zt),M.toneMapping=Wt}function le(R,Y,at){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Rt=R.length;j<Rt;j++){const Nt=R[j],Gt=Nt.object,Wt=Nt.geometry,Zt=st===null?Nt.material:st,Jt=Nt.group;Gt.layers.test(at.layers)&&Ce(Gt,Y,at,Wt,Zt,Jt)}}function Ce(R,Y,at,st,j,Rt){R.onBeforeRender(M,Y,at,st,j,Rt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(M,Y,at,st,R,Rt),j.transparent===!0&&j.side===fe&&j.forceSinglePass===!1?(j.side=En,j.needsUpdate=!0,M.renderBufferDirect(at,Y,st,j,R,Rt),j.side=ls,j.needsUpdate=!0,M.renderBufferDirect(at,Y,st,j,R,Rt),j.side=fe):M.renderBufferDirect(at,Y,st,j,R,Rt),R.onAfterRender(M,Y,at,st,j,Rt)}function _e(R,Y,at){Y.isScene!==!0&&(Y=lt);const st=Z.get(R),j=p.state.lights,Rt=p.state.shadowsArray,Nt=j.state.version,Gt=ht.getParameters(R,j.state,Rt,Y,at),Wt=ht.getProgramCacheKey(Gt);let Zt=st.programs;st.environment=R.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(R.isMeshStandardMaterial?C:v).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Zt===void 0&&(R.addEventListener("dispose",Bt),Zt=new Map,st.programs=Zt);let Jt=Zt.get(Wt);if(Jt!==void 0){if(st.currentProgram===Jt&&st.lightsStateVersion===Nt)return pn(R,Gt),Jt}else Gt.uniforms=ht.getUniforms(R),R.onBeforeCompile(Gt,M),Jt=ht.acquireProgram(Gt,Wt),Zt.set(Wt,Jt),st.uniforms=Gt.uniforms;const qt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=dt.uniform),pn(R,Gt),st.needsLights=Yn(R),st.lightsStateVersion=Nt,st.needsLights&&(qt.ambientLightColor.value=j.state.ambient,qt.lightProbe.value=j.state.probe,qt.directionalLights.value=j.state.directional,qt.directionalLightShadows.value=j.state.directionalShadow,qt.spotLights.value=j.state.spot,qt.spotLightShadows.value=j.state.spotShadow,qt.rectAreaLights.value=j.state.rectArea,qt.ltc_1.value=j.state.rectAreaLTC1,qt.ltc_2.value=j.state.rectAreaLTC2,qt.pointLights.value=j.state.point,qt.pointLightShadows.value=j.state.pointShadow,qt.hemisphereLights.value=j.state.hemi,qt.directionalShadowMap.value=j.state.directionalShadowMap,qt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qt.spotShadowMap.value=j.state.spotShadowMap,qt.spotLightMatrix.value=j.state.spotLightMatrix,qt.spotLightMap.value=j.state.spotLightMap,qt.pointShadowMap.value=j.state.pointShadowMap,qt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=Jt,st.uniformsList=null,Jt}function nn(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=aa.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function pn(R,Y){const at=Z.get(R);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function Ye(R,Y,at,st,j){Y.isScene!==!0&&(Y=lt),w.resetTextureUnits();const Rt=Y.fog,Nt=st.isMeshStandardMaterial?Y.environment:null,Gt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ds,Wt=(st.isMeshStandardMaterial?C:v).get(st.envMap||Nt),Zt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Jt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!at.morphAttributes.position,ge=!!at.morphAttributes.normal,ye=!!at.morphAttributes.color;let Re=as;st.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Re=M.toneMapping);const Ke=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,me=Ke!==void 0?Ke.length:0,Yt=Z.get(st),Ve=p.state.lights;if(rt===!0&&(ft===!0||R!==q)){const He=R===q&&st.id===N;dt.setState(st,R,He)}let Ct=!1;st.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ve.state.version||Yt.outputColorSpace!==Gt||j.isBatchedMesh&&Yt.batching===!1||!j.isBatchedMesh&&Yt.batching===!0||j.isBatchedMesh&&Yt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Yt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Yt.instancing===!1||!j.isInstancedMesh&&Yt.instancing===!0||j.isSkinnedMesh&&Yt.skinning===!1||!j.isSkinnedMesh&&Yt.skinning===!0||j.isInstancedMesh&&Yt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Yt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Yt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Yt.instancingMorph===!1&&j.morphTexture!==null||Yt.envMap!==Wt||st.fog===!0&&Yt.fog!==Rt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==dt.numPlanes||Yt.numIntersection!==dt.numIntersection)||Yt.vertexAlphas!==Zt||Yt.vertexTangents!==Jt||Yt.morphTargets!==qt||Yt.morphNormals!==ge||Yt.morphColors!==ye||Yt.toneMapping!==Re||Yt.morphTargetsCount!==me)&&(Ct=!0):(Ct=!0,Yt.__version=st.version);let Le=Yt.currentProgram;Ct===!0&&(Le=_e(st,Y,j));let ze=!1,we=!1,sn=!1;const Se=Le.getUniforms(),$e=Yt.uniforms;if(D.useProgram(Le.program)&&(ze=!0,we=!0,sn=!0),st.id!==N&&(N=st.id,we=!0),ze||q!==R){U.reverseDepthBuffer?(vt.copy(R.projectionMatrix),ov(vt),rv(vt),Se.setValue(g,"projectionMatrix",vt)):Se.setValue(g,"projectionMatrix",R.projectionMatrix),Se.setValue(g,"viewMatrix",R.matrixWorldInverse);const He=Se.map.cameraPosition;He!==void 0&&He.setValue(g,ct.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&Se.setValue(g,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Se.setValue(g,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,we=!0,sn=!0)}if(j.isSkinnedMesh){Se.setOptional(g,j,"bindMatrix"),Se.setOptional(g,j,"bindMatrixInverse");const He=j.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Se.setValue(g,"boneTexture",He.boneTexture,w))}j.isBatchedMesh&&(Se.setOptional(g,j,"batchingTexture"),Se.setValue(g,"batchingTexture",j._matricesTexture,w),Se.setOptional(g,j,"batchingIdTexture"),Se.setValue(g,"batchingIdTexture",j._indirectTexture,w),Se.setOptional(g,j,"batchingColorTexture"),j._colorsTexture!==null&&Se.setValue(g,"batchingColorTexture",j._colorsTexture,w));const Rn=at.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Dt.update(j,at,Le),(we||Yt.receiveShadow!==j.receiveShadow)&&(Yt.receiveShadow=j.receiveShadow,Se.setValue(g,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&($e.envMap.value=Wt,$e.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&($e.envMapIntensity.value=Y.environmentIntensity),we&&(Se.setValue(g,"toneMappingExposure",M.toneMappingExposure),Yt.needsLights&&mn($e,sn),Rt&&st.fog===!0&&ut.refreshFogUniforms($e,Rt),ut.refreshMaterialUniforms($e,st,nt,G,p.state.transmissionRenderTarget[R.id]),aa.upload(g,nn(Yt),$e,w)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(aa.upload(g,nn(Yt),$e,w),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Se.setValue(g,"center",j.center),Se.setValue(g,"modelViewMatrix",j.modelViewMatrix),Se.setValue(g,"normalMatrix",j.normalMatrix),Se.setValue(g,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const He=st.uniformsGroups;for(let wn=0,ui=He.length;wn<ui;wn++){const Bn=He[wn];B.update(Bn,Le),B.bind(Bn,Le)}}return Le}function mn(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Yn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,Y,at){Z.get(R.texture).__webglTexture=Y,Z.get(R.depthTexture).__webglTexture=at;const st=Z.get(R);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=at===void 0,st.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const at=Z.get(R);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,at=0){P=R,O=Y,I=at;let st=!0,j=null,Rt=!1,Nt=!1;if(R){const Wt=Z.get(R);if(Wt.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(g.FRAMEBUFFER,null),st=!1;else if(Wt.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Wt.__hasExternalTextures)w.rebindTextures(R,Z.get(R.texture).__webglTexture,Z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Wt.__boundDepthTexture!==qt){if(qt!==null&&Z.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Nt=!0);const Jt=Z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[Y])?j=Jt[Y][at]:j=Jt[Y],Rt=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?j=Z.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?j=Jt[at]:j=Jt,y.copy(R.viewport),E.copy(R.scissor),K=R.scissorTest}else y.copy(yt).multiplyScalar(nt).floor(),E.copy(gt).multiplyScalar(nt).floor(),K=Lt;if(D.bindFramebuffer(g.FRAMEBUFFER,j)&&st&&D.drawBuffers(R,j),D.viewport(y),D.scissor(E),D.setScissorTest(K),Rt){const Wt=Z.get(R.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Wt.__webglTexture,at)}else if(Nt){const Wt=Z.get(R.texture),Zt=Y||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Wt.__webglTexture,at||0,Zt)}N=-1},this.readRenderTargetPixels=function(R,Y,at,st,j,Rt,Nt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Gt=Gt[Nt]),Gt){D.bindFramebuffer(g.FRAMEBUFFER,Gt);try{const Wt=R.texture,Zt=Wt.format,Jt=Wt.type;if(!U.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-st&&at>=0&&at<=R.height-j&&g.readPixels(Y,at,st,j,Ut.convert(Zt),Ut.convert(Jt),Rt)}finally{const Wt=P!==null?Z.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,at,st,j,Rt,Nt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Gt=Gt[Nt]),Gt){const Wt=R.texture,Zt=Wt.format,Jt=Wt.type;if(!U.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-st&&at>=0&&at<=R.height-j){D.bindFramebuffer(g.FRAMEBUFFER,Gt);const qt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,qt),g.bufferData(g.PIXEL_PACK_BUFFER,Rt.byteLength,g.STREAM_READ),g.readPixels(Y,at,st,j,Ut.convert(Zt),Ut.convert(Jt),0);const ge=P!==null?Z.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,ge);const ye=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await sv(g,ye,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,qt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Rt),g.deleteBuffer(qt),g.deleteSync(ye),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,at=0){R.isTexture!==!0&&(ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);const st=Math.pow(2,-at),j=Math.floor(R.image.width*st),Rt=Math.floor(R.image.height*st),Nt=Y!==null?Y.x:0,Gt=Y!==null?Y.y:0;w.setTexture2D(R,0),g.copyTexSubImage2D(g.TEXTURE_2D,at,0,0,Nt,Gt,j,Rt),D.unbindTexture()},this.copyTextureToTexture=function(R,Y,at=null,st=null,j=0){R.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,R=arguments[1],Y=arguments[2],j=arguments[3]||0,at=null);let Rt,Nt,Gt,Wt,Zt,Jt;at!==null?(Rt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,Gt=at.min.x,Wt=at.min.y):(Rt=R.image.width,Nt=R.image.height,Gt=0,Wt=0),st!==null?(Zt=st.x,Jt=st.y):(Zt=0,Jt=0);const qt=Ut.convert(Y.format),ge=Ut.convert(Y.type);w.setTexture2D(Y,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const ye=g.getParameter(g.UNPACK_ROW_LENGTH),Re=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ke=g.getParameter(g.UNPACK_SKIP_PIXELS),me=g.getParameter(g.UNPACK_SKIP_ROWS),Yt=g.getParameter(g.UNPACK_SKIP_IMAGES),Ve=R.isCompressedTexture?R.mipmaps[j]:R.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Ve.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ve.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Gt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Wt),R.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,j,Zt,Jt,Rt,Nt,qt,ge,Ve.data):R.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,j,Zt,Jt,Ve.width,Ve.height,qt,Ve.data):g.texSubImage2D(g.TEXTURE_2D,j,Zt,Jt,Rt,Nt,qt,ge,Ve),g.pixelStorei(g.UNPACK_ROW_LENGTH,ye),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Re),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ke),g.pixelStorei(g.UNPACK_SKIP_ROWS,me),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Yt),j===0&&Y.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,at=null,st=null,j=0){R.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,st=arguments[1]||null,R=arguments[2],Y=arguments[3],j=arguments[4]||0);let Rt,Nt,Gt,Wt,Zt,Jt,qt,ge,ye;const Re=R.isCompressedTexture?R.mipmaps[j]:R.image;at!==null?(Rt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,Gt=at.max.z-at.min.z,Wt=at.min.x,Zt=at.min.y,Jt=at.min.z):(Rt=Re.width,Nt=Re.height,Gt=Re.depth,Wt=0,Zt=0,Jt=0),st!==null?(qt=st.x,ge=st.y,ye=st.z):(qt=0,ge=0,ye=0);const Ke=Ut.convert(Y.format),me=Ut.convert(Y.type);let Yt;if(Y.isData3DTexture)w.setTexture3D(Y,0),Yt=g.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)w.setTexture2DArray(Y,0),Yt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ve=g.getParameter(g.UNPACK_ROW_LENGTH),Ct=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Le=g.getParameter(g.UNPACK_SKIP_PIXELS),ze=g.getParameter(g.UNPACK_SKIP_ROWS),we=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,Re.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Re.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Wt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Zt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Jt),R.isDataTexture||R.isData3DTexture?g.texSubImage3D(Yt,j,qt,ge,ye,Rt,Nt,Gt,Ke,me,Re.data):Y.isCompressedArrayTexture?g.compressedTexSubImage3D(Yt,j,qt,ge,ye,Rt,Nt,Gt,Ke,Re.data):g.texSubImage3D(Yt,j,qt,ge,ye,Rt,Nt,Gt,Ke,me,Re),g.pixelStorei(g.UNPACK_ROW_LENGTH,Ve),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ct),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Le),g.pixelStorei(g.UNPACK_SKIP_ROWS,ze),g.pixelStorei(g.UNPACK_SKIP_IMAGES,we),j===0&&Y.generateMipmaps&&g.generateMipmap(Yt),D.unbindTexture()},this.initRenderTarget=function(R){Z.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),D.unbindTexture()},this.resetState=function(){O=0,I=0,P=null,D.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===pu?"display-p3":"srgb",e.unpackColorSpace=be.workingColorSpace===Da?"display-p3":"srgb"}}class Wn extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new Ot:new $);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new $,s=[],o=[],r=[],a=new $,c=new Be;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new $)}o[0]=new $,r[0]=new $;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(tn(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,_))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(tn(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let _=1;_<=t;_++)o[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yu extends bi{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ot){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _S extends yu{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Mu(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const qr=new $,Cc=new Mu,Ic=new Mu,Lc=new Mu;class vS extends bi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new $){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(qr.subVectors(s[0],s[1]).add(s[0]),l=qr);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(qr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),_<1e-4&&(_=x),p<1e-4&&(p=x),Cc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,x,p),Ic.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,x,p),Lc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,x,p)}else this.curveType==="catmullrom"&&(Cc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ic.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Lc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Cc.calc(c),Ic.calc(c),Lc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new $().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pd(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function xS(n,t){const e=1-n;return e*e*t}function yS(n,t){return 2*(1-n)*n*t}function MS(n,t){return n*n*t}function jo(n,t,e,i){return xS(n,t)+yS(n,e)+MS(n,i)}function wS(n,t){const e=1-n;return e*e*e*t}function SS(n,t){const e=1-n;return 3*e*e*n*t}function ES(n,t){return 3*(1-n)*n*n*t}function bS(n,t){return n*n*n*t}function Ko(n,t,e,i,s){return wS(n,t)+SS(n,e)+ES(n,i)+bS(n,s)}class pp extends bi{constructor(t=new Ot,e=new Ot,i=new Ot,s=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ot){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Ko(t,s.x,o.x,r.x,a.x),Ko(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class TS extends bi{constructor(t=new $,e=new $,i=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new $){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Ko(t,s.x,o.x,r.x,a.x),Ko(t,s.y,o.y,r.y,a.y),Ko(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mp extends bi{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class AS extends bi{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gp extends bi{constructor(t=new Ot,e=new Ot,i=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ot){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(jo(t,s.x,o.x,r.x),jo(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class RS extends bi{constructor(t=new $,e=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new $){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(jo(t,s.x,o.x,r.x),jo(t,s.y,o.y,r.y),jo(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _p extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(pd(a,c.x,l.x,h.x,u.x),pd(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Ot().fromArray(s))}return this}}var Dl=Object.freeze({__proto__:null,ArcCurve:_S,CatmullRomCurve3:vS,CubicBezierCurve:pp,CubicBezierCurve3:TS,EllipseCurve:yu,LineCurve:mp,LineCurve3:AS,QuadraticBezierCurve:gp,QuadraticBezierCurve3:RS,SplineCurve:_p});class PS extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Dl[s.type]().fromJSON(s))}return this}}class Ul extends PS{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new mp(this.currentPoint.clone(),new Ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new gp(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new pp(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s),new Ot(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new _p(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new yu(t,e,i,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ve extends qn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new $,h=new Ot;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ue extends qn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let _=0;const x=[],p=i/2;let m=0;b(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function b(){const S=new $,O=new $;let I=0;const P=(e-t)/i;for(let N=0;N<=o;N++){const q=[],y=N/o,E=y*(e-t)+t;for(let K=0;K<=s;K++){const W=K/s,J=W*c+a,ot=Math.sin(J),G=Math.cos(J);O.x=E*ot,O.y=-y*i+p,O.z=E*G,u.push(O.x,O.y,O.z),S.set(ot,P,G).normalize(),d.push(S.x,S.y,S.z),f.push(W,1-y),q.push(_++)}x.push(q)}for(let N=0;N<s;N++)for(let q=0;q<o;q++){const y=x[q][N],E=x[q+1][N],K=x[q+1][N+1],W=x[q][N+1];t>0&&(h.push(y,E,W),I+=3),e>0&&(h.push(E,K,W),I+=3)}l.addGroup(m,I,0),m+=I}function M(S){const O=_,I=new Ot,P=new $;let N=0;const q=S===!0?t:e,y=S===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),_++;const E=_;for(let K=0;K<=s;K++){const J=K/s*c+a,ot=Math.cos(J),G=Math.sin(J);P.x=q*G,P.y=p*y,P.z=q*ot,u.push(P.x,P.y,P.z),d.push(0,y,0),I.x=ot*.5+.5,I.y=G*.5*y+.5,f.push(I.x,I.y),_++}for(let K=0;K<s;K++){const W=O+K,J=E+K;S===!0?h.push(J,J+1,W):h.push(J+1,J,W),N+=3}l.addGroup(m,N,S===!0?1:2),m+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eo extends ue{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new eo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tn extends Ul{constructor(t){super(t),this.uuid=Us(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Ul().fromJSON(s))}return this}}const CS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=vp(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,f;if(i&&(o=NS(n,t,o,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let _=e;_<s;_+=e)u=n[_],d=n[_+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return lr(o,r,e,a,c,f,0),r}};function vp(n,t,e,i,s){let o,r;if(s===qS(n,t,e,i)>0)for(o=t;o<e;o+=i)r=md(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=md(o,n[o],n[o+1],r);return r&&Fa(r,r.next)&&(hr(r),r=r.next),r}function Ls(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Fa(e,e.next)||Ge(e.prev,e,e.next)===0)){if(hr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function lr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&GS(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?LS(n,i,s,o):IS(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),hr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=DS(Ls(n),t,e),lr(n,t,e,i,s,o,2)):r===2&&US(n,t,e,i,s,o):lr(Ls(n),t,e,i,s,o,1);break}}}function IS(n){const t=n.prev,e=n,i=n.next;if(Ge(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&no(s,a,o,c,r,l,_.x,_.y)&&Ge(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function LS(n,t,e,i){const s=n.prev,o=n,r=n.next;if(Ge(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,_=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=Nl(f,_,t,e,i),b=Nl(x,p,t,e,i);let M=n.prevZ,S=n.nextZ;for(;M&&M.z>=m&&S&&S.z<=b;){if(M.x>=f&&M.x<=x&&M.y>=_&&M.y<=p&&M!==s&&M!==r&&no(a,h,c,u,l,d,M.x,M.y)&&Ge(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==r&&no(a,h,c,u,l,d,S.x,S.y)&&Ge(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=x&&M.y>=_&&M.y<=p&&M!==s&&M!==r&&no(a,h,c,u,l,d,M.x,M.y)&&Ge(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=b;){if(S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==r&&no(a,h,c,u,l,d,S.x,S.y)&&Ge(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function DS(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Fa(s,o)&&xp(s,i,i.next,o)&&ur(s,o)&&ur(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),hr(i),hr(i.next),i=n=o),i=i.next}while(i!==n);return Ls(i)}function US(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&VS(r,a)){let c=yp(r,a);r=Ls(r,r.next),c=Ls(c,c.next),lr(r,t,e,i,s,o,0),lr(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function NS(n,t,e,i){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=vp(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(kS(l));for(s.sort(FS),o=0;o<s.length;o++)e=OS(s[o],e);return e}function FS(n,t){return n.x-t.x}function OS(n,t){const e=BS(n,t);if(!e)return t;const i=yp(e,n);return Ls(i,i.next),Ls(e,e.next)}function BS(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&no(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),ur(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&zS(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function zS(n,t){return Ge(n.prev,n,t.prev)<0&&Ge(t.next,n,n.next)<0}function GS(n,t,e,i){let s=n;do s.z===0&&(s.z=Nl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,HS(s)}function HS(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function Nl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function kS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function no(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function VS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!WS(n,t)&&(ur(n,t)&&ur(t,n)&&XS(n,t)&&(Ge(n.prev,n,t.prev)||Ge(n,t.prev,t))||Fa(n,t)&&Ge(n.prev,n,n.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Fa(n,t){return n.x===t.x&&n.y===t.y}function xp(n,t,e,i){const s=$r(Ge(n,t,e)),o=$r(Ge(n,t,i)),r=$r(Ge(e,i,n)),a=$r(Ge(e,i,t));return!!(s!==o&&r!==a||s===0&&Yr(n,e,t)||o===0&&Yr(n,i,t)||r===0&&Yr(e,n,i)||a===0&&Yr(e,t,i))}function Yr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function $r(n){return n>0?1:n<0?-1:0}function WS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&xp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ur(n,t){return Ge(n.prev,n,n.next)<0?Ge(n,t,n.next)>=0&&Ge(n,n.prev,t)>=0:Ge(n,t,n.prev)<0||Ge(n,n.next,t)<0}function XS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function yp(n,t){const e=new Fl(n.i,n.x,n.y),i=new Fl(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function md(n,t,e,i){const s=new Fl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qS(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class uo{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return uo.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];gd(t),_d(i,t);let r=t.length;e.forEach(gd);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,_d(i,e[c]);const a=CS.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function gd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function _d(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Nn extends qn{constructor(t=new Tn([new Ot(.5,.5),new Ot(-.5,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new Xe(s,3)),this.setAttribute("uv",new Xe(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:YS;let M,S=!1,O,I,P,N;m&&(M=m.getSpacedPoints(h),S=!0,d=!1,O=m.computeFrenetFrames(h,!1),I=new $,P=new $,N=new $),d||(p=0,f=0,_=0,x=0);const q=a.extractPoints(l);let y=q.shape;const E=q.holes;if(!uo.isClockWise(y)){y=y.reverse();for(let Q=0,g=E.length;Q<g;Q++){const T=E[Q];uo.isClockWise(T)&&(E[Q]=T.reverse())}}const W=uo.triangulateShape(y,E),J=y;for(let Q=0,g=E.length;Q<g;Q++){const T=E[Q];y=y.concat(T)}function ot(Q,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(g,T)}const G=y.length,nt=W.length;function H(Q,g,T){let L,U,D;const X=Q.x-g.x,Z=Q.y-g.y,w=T.x-Q.x,v=T.y-Q.y,C=X*X+Z*Z,V=X*v-Z*w;if(Math.abs(V)>Number.EPSILON){const z=Math.sqrt(C),k=Math.sqrt(w*w+v*v),ht=g.x-Z/z,ut=g.y+X/z,pt=T.x-v/k,At=T.y+w/k,dt=((pt-ht)*v-(At-ut)*w)/(X*v-Z*w);L=ht+X*dt-Q.x,U=ut+Z*dt-Q.y;const xt=L*L+U*U;if(xt<=2)return new Ot(L,U);D=Math.sqrt(xt/2)}else{let z=!1;X>Number.EPSILON?w>Number.EPSILON&&(z=!0):X<-Number.EPSILON?w<-Number.EPSILON&&(z=!0):Math.sign(Z)===Math.sign(v)&&(z=!0),z?(L=-Z,U=X,D=Math.sqrt(C)):(L=X,U=Z,D=Math.sqrt(C/2))}return new Ot(L/D,U/D)}const mt=[];for(let Q=0,g=J.length,T=g-1,L=Q+1;Q<g;Q++,T++,L++)T===g&&(T=0),L===g&&(L=0),mt[Q]=H(J[Q],J[T],J[L]);const yt=[];let gt,Lt=mt.concat();for(let Q=0,g=E.length;Q<g;Q++){const T=E[Q];gt=[];for(let L=0,U=T.length,D=U-1,X=L+1;L<U;L++,D++,X++)D===U&&(D=0),X===U&&(X=0),gt[L]=H(T[L],T[D],T[X]);yt.push(gt),Lt=Lt.concat(gt)}for(let Q=0;Q<p;Q++){const g=Q/p,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let U=0,D=J.length;U<D;U++){const X=ot(J[U],mt[U],L);F(X.x,X.y,-T)}for(let U=0,D=E.length;U<D;U++){const X=E[U];gt=yt[U];for(let Z=0,w=X.length;Z<w;Z++){const v=ot(X[Z],gt[Z],L);F(v.x,v.y,-T)}}}const zt=_+x;for(let Q=0;Q<G;Q++){const g=d?ot(y[Q],Lt[Q],zt):y[Q];S?(P.copy(O.normals[0]).multiplyScalar(g.x),I.copy(O.binormals[0]).multiplyScalar(g.y),N.copy(M[0]).add(P).add(I),F(N.x,N.y,N.z)):F(g.x,g.y,0)}for(let Q=1;Q<=h;Q++)for(let g=0;g<G;g++){const T=d?ot(y[g],Lt[g],zt):y[g];S?(P.copy(O.normals[Q]).multiplyScalar(T.x),I.copy(O.binormals[Q]).multiplyScalar(T.y),N.copy(M[Q]).add(P).add(I),F(N.x,N.y,N.z)):F(T.x,T.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){const g=Q/p,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let U=0,D=J.length;U<D;U++){const X=ot(J[U],mt[U],L);F(X.x,X.y,u+T)}for(let U=0,D=E.length;U<D;U++){const X=E[U];gt=yt[U];for(let Z=0,w=X.length;Z<w;Z++){const v=ot(X[Z],gt[Z],L);S?F(v.x,v.y+M[h-1].y,M[h-1].x+T):F(v.x,v.y,u+T)}}}rt(),ft();function rt(){const Q=s.length/3;if(d){let g=0,T=G*g;for(let L=0;L<nt;L++){const U=W[L];ct(U[2]+T,U[1]+T,U[0]+T)}g=h+p*2,T=G*g;for(let L=0;L<nt;L++){const U=W[L];ct(U[0]+T,U[1]+T,U[2]+T)}}else{for(let g=0;g<nt;g++){const T=W[g];ct(T[2],T[1],T[0])}for(let g=0;g<nt;g++){const T=W[g];ct(T[0]+G*h,T[1]+G*h,T[2]+G*h)}}i.addGroup(Q,s.length/3-Q,0)}function ft(){const Q=s.length/3;let g=0;vt(J,g),g+=J.length;for(let T=0,L=E.length;T<L;T++){const U=E[T];vt(U,g),g+=U.length}i.addGroup(Q,s.length/3-Q,1)}function vt(Q,g){let T=Q.length;for(;--T>=0;){const L=T;let U=T-1;U<0&&(U=Q.length-1);for(let D=0,X=h+p*2;D<X;D++){const Z=G*D,w=G*(D+1),v=g+L+Z,C=g+U+Z,V=g+U+w,z=g+L+w;it(v,C,V,z)}}}function F(Q,g,T){c.push(Q),c.push(g),c.push(T)}function ct(Q,g,T){lt(Q),lt(g),lt(T);const L=s.length/3,U=b.generateTopUV(i,s,L-3,L-2,L-1);Et(U[0]),Et(U[1]),Et(U[2])}function it(Q,g,T,L){lt(Q),lt(g),lt(L),lt(g),lt(T),lt(L);const U=s.length/3,D=b.generateSideWallUV(i,s,U-6,U-3,U-2,U-1);Et(D[0]),Et(D[1]),Et(D[3]),Et(D[1]),Et(D[2]),Et(D[3])}function lt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function Et(Q){o.push(Q.x),o.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return $S(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Dl[s.type]().fromJSON(s)),new Nn(i,t.options)}}const YS={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new Ot(o,r),new Ot(a,c),new Ot(l,h)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],x=t[o*3],p=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new Ot(r,1-c),new Ot(l,1-u),new Ot(d,1-_),new Ot(x,1-m)]:[new Ot(a,1-c),new Ot(h,1-u),new Ot(f,1-_),new Ot(p,1-m)]}};function $S(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class St extends qn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new $,d=new $,f=[],_=[],x=[],p=[];for(let m=0;m<=i;m++){const b=[],M=m/i;let S=0;m===0&&r===0?S=.5/e:m===i&&c===Math.PI&&(S=-.5/e);for(let O=0;O<=e;O++){const I=O/e;u.x=-t*Math.cos(s+I*o)*Math.sin(r+M*a),u.y=t*Math.cos(r+M*a),u.z=t*Math.sin(s+I*o)*Math.sin(r+M*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(I+S,1-M),b.push(l++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){const M=h[m][b+1],S=h[m][b],O=h[m+1][b],I=h[m+1][b+1];(m!==0||r>0)&&f.push(M,S,I),(m!==i-1||c<Math.PI)&&f.push(S,O,I)}this.setIndex(f),this.setAttribute("position",new Xe(_,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new St(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ho extends qn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new $,u=new $,d=new $;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const x=_/s*o,p=f/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,p=(s+1)*(f-1)+_-1,m=(s+1)*(f-1)+_,b=(s+1)*f+_;r.push(x,p,b),r.push(p,m,b)}this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class te extends _r{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class It extends te{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const va={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class jS{constructor(t,e,i){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const KS=new jS;class bo{constructor(t){this.manager=t!==void 0?t:KS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}bo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class ZS extends Error{constructor(t,e){super(t),this.response=e}}class JS extends bo{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=va.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Oi[t]!==void 0){Oi[t].push({onLoad:e,onProgress:i,onError:s});return}Oi[t]=[],Oi[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Oi[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let x=0;const p=new ReadableStream({start(m){b();function b(){u.read().then(({done:M,value:S})=>{if(M)m.close();else{x+=S.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:f});for(let I=0,P=h.length;I<P;I++){const N=h[I];N.onProgress&&N.onProgress(O)}m.enqueue(S),b()}},M=>{m.error(M)})}}});return new Response(p)}else throw new ZS(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{va.add(t,l);const h=Oi[t];delete Oi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Oi[t];if(h===void 0)throw this.manager.itemError(t),l;delete Oi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Mp extends bo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=va.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=cr("img");function c(){h(),va.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class QS extends bo{constructor(t){super(t)}load(t,e,i,s){const o=new _u;o.colorSpace=Jn;const r=new Mp(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function c(l){r.load(t[l],function(h){o.images[l]=h,a++,a===6&&(o.needsUpdate=!0,e&&e(o))},void 0,s)}for(let l=0;l<t.length;++l)c(l);return o}}class Yi extends bo{constructor(t){super(t)}load(t,e,i,s){const o=new Mn,r=new Mp(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}}class wu extends dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Dc=new Be,vd=new $,xd=new $;class wp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vu,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(vd),xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xd),e.updateMatrixWorld(),Dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yd=new Be,No=new $,Uc=new $;class t1 extends wp{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new Pe(2,1,1,1),new Pe(0,1,1,1),new Pe(3,1,1,1),new Pe(1,1,1,1),new Pe(3,0,1,1),new Pe(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),No.setFromMatrixPosition(t.matrixWorld),i.position.copy(No),Uc.copy(i.position),Uc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Uc),i.updateMatrixWorld(),s.makeTranslation(-No.x,-No.y,-No.z),yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd)}}class Ti extends wu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new t1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class e1 extends wp{constructor(){super(new cp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ai extends wu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new e1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ri extends wu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Md();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Md(){return performance.now()}class n1{constructor(){this.type="ShapePath",this.color=new pe,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ul,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,o,r){return this.currentPath.bezierCurveTo(t,e,i,s,o,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const b=[];for(let M=0,S=m.length;M<S;M++){const O=m[M],I=new Tn;I.curves=O.curves,b.push(I)}return b}function i(m,b){const M=b.length;let S=!1;for(let O=M-1,I=0;I<M;O=I++){let P=b[O],N=b[I],q=N.x-P.x,y=N.y-P.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(P=b[I],q=-q,N=b[O],y=-y),m.y<P.y||m.y>N.y)continue;if(m.y===P.y){if(m.x===P.x)return!0}else{const E=y*(m.x-P.x)-q*(m.y-P.y);if(E===0)return!0;if(E<0)continue;S=!S}}else{if(m.y!==P.y)continue;if(N.x<=m.x&&m.x<=P.x||P.x<=m.x&&m.x<=N.x)return!0}}return S}const s=uo.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,c;const l=[];if(o.length===1)return a=o[0],c=new Tn,c.curves=a.curves,l.push(c),l;let h=!s(o[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,x;d[_]=void 0,f[_]=[];for(let m=0,b=o.length;m<b;m++)a=o[m],x=a.getPoints(),r=s(x),r=t?!r:r,r?(!h&&d[_]&&_++,d[_]={s:new Tn,p:x},d[_].s.curves=a.curves,h&&_++,f[_]=[]):f[_].push({h:a,p:x[0]});if(!d[0])return e(o);if(d.length>1){let m=!1,b=0;for(let M=0,S=d.length;M<S;M++)u[M]=[];for(let M=0,S=d.length;M<S;M++){const O=f[M];for(let I=0;I<O.length;I++){const P=O[I];let N=!0;for(let q=0;q<d.length;q++)i(P.p,d[q].p)&&(M!==q&&b++,N?(N=!1,u[q].push(P)):m=!0);N&&u[M].push(P)}}b>0&&m===!1&&(f=u)}let p;for(let m=0,b=d.length;m<b;m++){c=d[m].s,l.push(c),p=f[m];for(let M=0,S=p.length;M<S;M++)c.holes.push(p[M].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=au);class Pi extends bo{constructor(t){super(t)}load(t,e,i,s){const o=this,r=new JS(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const c=o.parse(JSON.parse(a));e&&e(c)},i,s)}parse(t){return new i1(t)}}class i1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=s1(t,e,this.data);for(let o=0,r=s.length;o<r;o++)i.push(...s[o].toShapes());return i}}function s1(n,t,e){const i=Array.from(n),s=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,r=[];let a=0,c=0;for(let l=0;l<i.length;l++){const h=i[l];if(h===`
`)a=0,c-=o;else{const u=o1(h,s,a,c,e);a+=u.offsetX,r.push(u.path)}}return r}function o1(n,t,e,i,s){const o=s.glyphs[n]||s.glyphs["?"];if(!o){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const r=new n1;let a,c,l,h,u,d,f,_;if(o.o){const x=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let p=0,m=x.length;p<m;)switch(x[p++]){case"m":a=x[p++]*t+e,c=x[p++]*t+i,r.moveTo(a,c);break;case"l":a=x[p++]*t+e,c=x[p++]*t+i,r.lineTo(a,c);break;case"q":l=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,d=x[p++]*t+i,r.quadraticCurveTo(u,d,l,h);break;case"b":l=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,d=x[p++]*t+i,f=x[p++]*t+e,_=x[p++]*t+i,r.bezierCurveTo(u,d,f,_,l,h);break}}return{offsetX:o.ha*t,path:r}}class Fe extends Nn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const r1=On({__name:"HalfBlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);return Xn(()=>{if(e.value){let i=function(){requestAnimationFrame(i),xt&&(M.rotation.y+=.03),r.render(s,o)};const s=new Wn,o=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),r=new Vn({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),r.toneMapping=Bf,r.toneMappingExposure=1.25,e.value.appendChild(r.domElement);const a=new Ri(16777215,.6);s.add(a);const c=new Ai(16777215,1.2);c.position.set(5,5,5),s.add(c);const l=new Ti(16777215,2,50);l.position.set(0,2,4),s.add(l);const h=new An({uniforms:{time:{value:0},color1:{value:new pe(16766720)},color2:{value:new pe(16007990)}},vertexShader:`
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
        `}),u=new It({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),d=new It({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.35});new It({color:13882323,metalness:.7,roughness:.25,clearcoat:.4,clearcoatRoughness:.1,transparent:!1,opacity:1}),new It({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,transparent:!0,opacity:.35});const f=new It({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.79}),_=new It({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),x=new It({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),p=`
    varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
    `,m=`
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
    `,b=new An({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:p,fragmentShader:m,transparent:!1,depthWrite:!0}),M=new Xt,S=new St(1,32,32,0,Math.PI),O=new A(S,d),I=new A(S,u);O.scale.set(.85,.85,.8),I.scale.set(.85,.85,.8),O.position.y=-.2,I.position.y=-.2,O.rotation.y=Math.PI/2,I.rotation.y=Math.PI*1.5;const P=new ve(1,32),N=new A(P,u);N.scale.set(.85,.85,.8),N.position.set(0,-.2,0),N.rotation.y=Math.PI/2;const q=new Xt;q.add(O),q.add(I),q.add(N),M.add(q);const y=new St(.6,32,32,0,Math.PI),E=new A(y,u);E.scale.set(1,.95,.95),E.position.set(0,1,0),E.rotation.y=Math.PI*1.5;const K=new A(y,d);K.scale.set(1,.95,.95),K.position.set(0,1,0),K.rotation.y=Math.PI/2;const W=new ve(.6,32),J=new A(W,u);J.position.set(0,1,0),J.rotation.y=Math.PI/2,J.scale.set(1,.95,.95);const ot=new Xt;ot.add(E),ot.add(K),ot.add(J),M.add(ot);const G=new St(.25,32,32),nt=new A(G,u);nt.position.set(-.45,1.35,-.1),M.add(nt);const H=new A(G,d);H.position.set(.45,1.35,-.1),M.add(H);const mt=new St(.25,32,32,Math.PI/2,Math.PI),yt=new A(mt,u);yt.scale.set(1.1,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=Math.PI;const gt=new St(.25,32,32,Math.PI/2,Math.PI),Lt=new A(gt,d);Lt.scale.set(1.1,.6,.8),Lt.position.set(0,.84,.5),Lt.rotation.y=0;const zt=new ve(.25,32),rt=new A(zt,u);rt.scale.set(.8,.6,.8),rt.position.set(0,.84,.5),rt.rotation.y=Math.PI/2;const ft=new Xt;ft.add(yt),ft.add(Lt),ft.add(rt),M.add(ft);const vt=new Tn;vt.moveTo(0,0),vt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),vt.bezierCurveTo(-.6,.3,0,.6,0,1),vt.bezierCurveTo(0,.6,.6,.3,.6,0),vt.bezierCurveTo(.6,-.3,0,-.3,0,0);const F={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new It({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const ct=new Nn(vt,F);new bn({color:0});const it=new A(ct,f);it.scale.set(.1,.1,.1),it.rotation.z=ee.degToRad(210),it.rotation.x=ee.degToRad(5),it.rotation.y=ee.degToRad(-45),it.position.set(-.4,.9,.45);const lt=new A(ct,b);lt.scale.set(.5,.5,.5),lt.position.set(.35,0,0),lt.rotation.y=Math.PI,lt.rotation.x=Math.PI,M.add(lt);const Et=new A(ct,h);Et.scale.set(.35,.35,.35),Et.position.set(.3,0,0),Et.rotation.y=Math.PI,Et.rotation.x=Math.PI;const Q=new A(ct,x);Q.scale.set(.25,.25,.25),Q.position.set(.27,.2,0),Q.rotation.y=Math.PI,Q.rotation.x=Math.PI;const g=new A(ct,_);g.scale.set(.3,.3,.3),g.position.set(.23,-.5,.3),g.rotation.y=Math.PI,g.rotation.x=Math.PI;const T=new A(ct,b);T.scale.set(.4,.4,.4),T.position.set(.27,0,.35),T.rotation.y=Math.PI,T.rotation.x=Math.PI;const L=new St(.35,32,32),U=new A(L,u);U.scale.set(.75,1.25,.65),U.position.set(-.7,-.15,.2),M.add(U);const D=new A(L,d);D.scale.set(.75,1.25,.65),D.position.set(.7,-.15,.2),M.add(D);const X=new ue(.2,.22,.6,32),Z=new A(X,u);Z.position.set(-.4,-1.05,0),M.add(Z);const w=new A(X,d);w.position.set(.4,-1.05,0),M.add(w);const v=new St(.3,32,32),C=new A(v,u);C.scale.set(1,.72,1.5),C.position.set(-.4,-1.45,.17),M.add(C);const V=new A(v,d);V.scale.set(1,.72,1.5),V.position.set(.4,-1.45,.17),M.add(V);const z=new St(.44,32,32),k=new A(z,u);k.position.set(-.15,-.45,-.4),M.add(k);const ht=new A(z,d);ht.position.set(.15,-.45,-.4),M.add(ht);const ut=new St(.18,32,32),pt=new A(ut,f);pt.position.set(0,-.35,-.8),M.add(pt),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(bt){const Ht=new Fe("X",{font:bt,size:.18,depth:.05}),Ut=new bn({color:0}),kt=new A(Ht,Ut);kt.position.set(-.3,.99,.53),kt.rotation.x=ee.degToRad(-5),kt.rotation.y=ee.degToRad(-15),M.add(kt);const B=new Fe("+",{font:bt,size:.25,depth:.1}),_t=new bn({color:0}),et=new A(B,_t);et.position.set(.14,.99,.53),et.rotation.y=ee.degToRad(12),et.rotation.x=ee.degToRad(-5),M.add(et)}),pt.renderOrder=1,M.scale.set(1.2,1.2,1.2),s.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),o.position.set(t.bodyPosition.x,1,t.cameraPosition),o.lookAt(t.bodyPosition.x,0,0),o.position.z=4;const dt={x:0,y:0};let xt=!0,Pt=null;const Dt=bt=>{xt=!1,dt.x=bt.clientX/window.innerWidth*2-1,dt.y=-(bt.clientY/window.innerHeight)*2+1;const Ht=dt.x*Math.PI*.2,Ut=dt.y*Math.PI*.2;M.rotation.y=Ht,M.rotation.x=Ut,clearTimeout(Pt),Pt=setTimeout(()=>{xt=!0},500)};window.addEventListener("mousemove",Dt),h.uniforms.time.value+=.04,i(),Oe(()=>t.bodyPosition,bt=>{M.position.set(bt.x,bt.y,bt.z)}),Oe(()=>t.cameraPosition,bt=>{o.position.set(t.bodyPosition.x,1,bt),o.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(ai(),ci("div",{ref_key:"threeCanvas",ref:e,class:Fn(n.background?"no-bg":"three-canvas")},null,2))}}),a1=li(r1,[["__scopeId","data-v-5bf83852"]]),c1=On({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=null,s=jt(!1),o=jt(!1),r=jt(!1);return Xn(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Wn,l=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Vn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Xt,d=new Ri(16777215,2);c.add(d);const f=new Ai(16777215,4);f.position.set(5,5,5),c.add(f);const _=new Ti(16777215,5,50);_.position.set(0,2,4),c.add(_);const x=new Yi,p=x.load("/3d-bear-arts/assets/lv2.jpg"),m=x.load("/3d-bear-arts/assets/lv2.jpg");p.wrapS=p.wrapT=ke,m.wrapS=m.wrapT=ke;const b=new It({color:8343336,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),M=new It({color:5978654,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),S=new It({color:13152668,metalness:.2,roughness:.05,bumpMap:p,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:m,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:fe});new It({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const O=new St(1,32,32,0,Math.PI),I=new A(O,S),P=new A(O,b);I.scale.set(.85,.85,.8),P.scale.set(.85,.85,.8),I.position.y=-.2,P.position.y=-.2,I.rotation.y=Math.PI/2,P.rotation.y=Math.PI*1.5;const N=new ve(1,32),q=new A(N,b);q.scale.set(.85,.85,.8),q.position.set(0,-.2,0),q.rotation.y=Math.PI/2;const y=new Xt;y.add(I),y.add(P),y.add(q),u.add(y);const E=new St(.6,32,32,0,Math.PI),K=new A(E,b);K.scale.set(1,.95,.95),K.position.set(0,1,0),K.rotation.y=Math.PI*1.5;const W=new A(E,S);W.scale.set(1,.95,.95),W.position.set(0,1,0),W.rotation.y=Math.PI/2;const J=new ve(.6,32),ot=new A(J,b);ot.position.set(0,1,0),ot.rotation.y=Math.PI/2,ot.scale.set(1,.95,.95);const G=new Xt;G.add(K),G.add(W),G.add(ot),u.add(G);const nt=new St(.25,32,32),H=new A(nt,b);H.position.set(-.45,1.35,-.1),u.add(H);const mt=new A(nt,S);mt.position.set(.45,1.35,-.1),u.add(mt);const yt=new St(.25,32,32,Math.PI/2,Math.PI),gt=new A(yt,M);gt.scale.set(1.1,.6,.8),gt.position.set(0,.84,.5),gt.rotation.y=Math.PI;const Lt=new St(.25,32,32,Math.PI/2,Math.PI),zt=new A(Lt,S);zt.scale.set(1.1,.6,.8),zt.position.set(0,.84,.5),zt.rotation.y=0;const rt=new ve(.25,32),ft=new A(rt,b);ft.scale.set(.8,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI/2;const vt=new Xt;vt.add(gt),vt.add(zt),vt.add(ft),u.add(vt);const F=new Tn;F.moveTo(0,0),F.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),F.bezierCurveTo(-.6,.3,0,.6,0,1),F.bezierCurveTo(0,.6,.6,.3,.6,0),F.bezierCurveTo(.6,-.3,0,-.3,0,0);const ct={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new It({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const it=new Nn(F,ct),lt=new A(it,b);lt.scale.set(.1,.1,.1),lt.rotation.z=ee.degToRad(210),lt.rotation.x=ee.degToRad(5),lt.rotation.y=ee.degToRad(-45),lt.position.set(-.4,.9,.45);const Et=new A(it,M);Et.scale.set(.6,.5,.5),Et.position.set(.35,0,0),Et.rotation.y=Math.PI,Et.rotation.x=Math.PI;const Q=new A(it,M);Q.scale.set(.2,.2,.2),Q.position.set(.5,-.1,.2),Q.rotation.y=Math.PI,Q.rotation.x=Math.PI,u.add(Q);const g=new ii(1.3,1.2,.6),T=new A(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new ho(.15,.025,10,100);new It({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const U=new A(L,b);U.position.set(.35,.1,.1),U.rotation.z=Math.PI/2,U.rotation.x=Math.PI/8,U.rotation.y=Math.PI/14;const D=new A(L,b);D.position.set(.35,.1,.13),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/-8,D.rotation.y=Math.PI/12;const X=new Xt;X.add(T),X.add(U),X.add(D),u.add(X);const Z=new St(.35,32,32),w=new A(Z,b);w.scale.set(.75,1.25,.65),w.position.set(-.7,-.15,.2),u.add(w);const v=new A(Z,S);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new ue(.2,.22,.6,32),V=new A(C,b);V.position.set(-.4,-1.05,0),u.add(V);const z=new A(C,S);z.position.set(.4,-1.05,0),u.add(z);const k=new St(.3,32,32),ht=new A(k,b);ht.scale.set(1,.72,1.5),ht.position.set(-.4,-1.45,.17),u.add(ht);const ut=new A(k,S);ut.scale.set(1,.72,1.5),ut.position.set(.4,-1.45,.17),u.add(ut);const pt=new St(.44,32,32),At=new A(pt,b);At.position.set(-.15,-.45,-.4),u.add(At);const dt=new A(pt,S);dt.position.set(.15,-.45,-.4),u.add(dt);const xt=new St(.18,32,32),Pt=new A(xt,b);Pt.position.set(0,-.35,-.8),u.add(Pt),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const wt=new Fe("X",{font:tt,size:.2,depth:.05});new bn({color:0});const Mt=new A(wt,M);Mt.position.set(-.3,.99,.53),Mt.rotation.x=ee.degToRad(-5),Mt.rotation.y=ee.degToRad(-15),u.add(Mt);const Bt=new Fe("O",{font:tt,size:.2,depth:.05});new bn({color:0});const $t=new A(Bt,M);$t.position.set(.14,.99,.53),$t.rotation.y=ee.degToRad(12),$t.rotation.x=ee.degToRad(-5),u.add($t)}),Pt.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const bt=()=>{u.rotation.y,u.rotation.x},Ht=()=>{s.value=!0,o.value=!1,r.value=!1},Ut=()=>{s.value=!1,o.value=!0,r.value=!1},kt=()=>{s.value=!1,o.value=!1,bt()},B=tt=>{const wt=window.innerWidth/2;tt>wt?Ht():Ut(),bt()},_t=tt=>{clearTimeout(i),kt(),r.value=!0;const wt={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1};if(r.value){const Mt=wt.x*Math.PI*.2,Bt=wt.y*Math.PI*.2;u.rotation.y=Mt,u.rotation.x=Bt}i=setTimeout(()=>{r.value=!1,B(tt.clientX)},500)};window.addEventListener("mousemove",_t);const et=tt=>{if(r.value){const wt={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1},Mt=wt.x*Math.PI*.2,Bt=wt.y*Math.PI*.2;u.rotation.y=Mt,u.rotation.x=Bt}};window.addEventListener("mousemove",et),a(),Oe(()=>t.bodyPosition,tt=>{u.position.set(tt.x,tt.y,tt.z)}),Oe(()=>t.cameraPosition,tt=>{l.position.set(t.bodyPosition.x,1,tt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(ai(),ci("div",{ref_key:"threeCanvas",ref:e,class:Fn(n.background?"no-bg":"three-canvas")},null,2))}}),l1=li(c1,[["__scopeId","data-v-f3beb116"]]),u1=On({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=null,s=jt(!1),o=jt(!1),r=jt(!1);return Xn(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new Wn,l=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Vn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Xt,d=new Ri(16777215,2);c.add(d);const f=new Ai(16777215,4);f.position.set(5,5,5),c.add(f);const _=new Ti(16777215,5,50);_.position.set(0,2,4),c.add(_);const x=new Yi,p=x.load("/3d-bear-arts/assets/pop6.jpg"),m=x.load("/3d-bear-arts/assets/pop7.jpg");p.wrapS=p.wrapT=ke,m.wrapS=m.wrapT=ke;const b=new It({color:16738740,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),M=new It({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:fe}),S=new It({color:16766720,map:p,metalness:.3,roughness:.5}),O=new It({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:fe}),I=new It({color:9055202,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new It({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:fe});const P=new It({color:65535,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),N=new It({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:fe}),q=new St(1,32,32,0,Math.PI),y=new A(q,M),E=new A(q,b);y.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),y.position.y=-.2,E.position.y=-.2,y.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const K=new ve(1,32),W=new A(K,b);W.scale.set(.85,.85,.8),W.position.set(0,-.2,0),W.rotation.y=Math.PI/2;const J=new Xt;J.add(y),J.add(E),J.add(W),u.add(J);const ot=new St(.6,32,32,0,Math.PI),G=new A(ot,S);G.scale.set(1,.95,.95),G.position.set(0,1,0),G.rotation.y=Math.PI*1.5;const nt=new A(ot,O);nt.scale.set(1,.95,.95),nt.position.set(0,1,0),nt.rotation.y=Math.PI/2;const H=new ve(.6,32),mt=new A(H,S);mt.position.set(0,1,0),mt.rotation.y=Math.PI/2,mt.scale.set(1,.95,.95);const yt=new Xt;yt.add(G),yt.add(nt),yt.add(mt),u.add(yt);const gt=new St(.25,32,32),Lt=new A(gt,b);Lt.position.set(-.45,1.35,-.1),u.add(Lt);const zt=new A(gt,M);zt.position.set(.45,1.35,-.1),u.add(zt);const rt=new St(.25,32,32,Math.PI/2,Math.PI),ft=new A(rt,S);ft.scale.set(1.1,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI;const vt=new St(.25,32,32,Math.PI/2,Math.PI),F=new A(vt,O);F.scale.set(1.1,.6,.8),F.position.set(0,.84,.5),F.rotation.y=0;const ct=new ve(.25,32),it=new A(ct,S);it.scale.set(.8,.6,.8),it.position.set(0,.84,.5),it.rotation.y=Math.PI/2;const lt=new Xt;lt.add(ft),lt.add(F),lt.add(it),u.add(lt);const Et=new Tn;Et.moveTo(0,0),Et.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Et.bezierCurveTo(-.6,.3,0,.6,0,1),Et.bezierCurveTo(0,.6,.6,.3,.6,0),Et.bezierCurveTo(.6,-.3,0,-.3,0,0);const Q={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Nn(Et,Q),T=new A(g,S);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const L=new A(g,P);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const U=new A(g,b);U.scale.set(.25,.25,.27),U.position.set(.4,.3,-.2),U.rotation.y=Math.PI,U.rotation.x=Math.PI,u.add(U);const D=new St(.35,32,32),X=new A(D,P);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),u.add(X);const Z=new A(D,N);Z.scale.set(.75,1.25,.65),Z.position.set(.7,-.15,.2),u.add(Z);const w=new ue(.2,.22,.6,32),v=new A(w,S);v.position.set(-.4,-1.05,0),u.add(v);const C=new A(w,O);C.position.set(.4,-1.05,0),u.add(C);const V=new St(.3,32,32),z=new A(V,S);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),u.add(z);const k=new A(V,O);k.scale.set(1,.72,1.5),k.position.set(.4,-1.45,.17),u.add(k);const ht=new St(.44,32,32),ut=new A(ht,b);ut.position.set(-.15,-.45,-.4),u.add(ut);const pt=new A(ht,M);pt.position.set(.15,-.45,-.4),u.add(pt);const At=new St(.18,32,32),dt=new A(At,b);dt.position.set(0,-.35,-.8),u.add(dt),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(_t){const et=new Fe("X",{font:_t,size:.2,depth:.05});new bn({color:0});const tt=new A(et,b);tt.position.set(-.3,.99,.53),tt.rotation.x=ee.degToRad(-5),tt.rotation.y=ee.degToRad(-15),u.add(tt);const wt=new Fe("O",{font:_t,size:.2,depth:.05});new bn({color:0});const Mt=new A(wt,P);Mt.position.set(.14,.99,.53),Mt.rotation.y=ee.degToRad(12),Mt.rotation.x=ee.degToRad(-5),u.add(Mt);const Bt=new Fe("POP",{font:_t,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),$t=new It({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new It({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Qt=new It({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Kt=new It({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ie=new A(Bt,$t);ie.scale.set(.15,.15,.15),ie.position.set(.03,1.16,.1),ie.rotateZ(-25),u.add(ie);const he=new A(Bt,I);he.scale.set(.14,.14,.14),he.rotateZ(45),he.position.set(.2,-.7,.3),u.add(he);const xe=new A(Bt,Qt);xe.scale.set(.14,.14,.14),xe.rotateZ(45),xe.rotateY(45),xe.position.set(.3,.7,.3),u.add(xe);const Me=new A(Bt,Qt);Me.scale.set(.15,.15,.15),Me.rotateZ(45),Me.rotateY(45),Me.position.set(.35,-1.5,.3),u.add(Me);const Tt=new A(Bt,Kt);Tt.scale.set(.17,.17,.17),Tt.rotateZ(45),Tt.rotateY(15),Tt.position.set(.35,1,.3),u.add(Tt)}),dt.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Pt=()=>{u.rotation.y,u.rotation.x},Dt=()=>{s.value=!0,o.value=!1,r.value=!1},bt=()=>{s.value=!1,o.value=!0,r.value=!1},Ht=()=>{s.value=!1,o.value=!1,Pt()},Ut=_t=>{const et=window.innerWidth/2;_t>et?Dt():bt(),Pt()},kt=_t=>{clearTimeout(i),Ht(),r.value=!0;const et={x:_t.clientX/window.innerWidth*2-1,y:-(_t.clientY/window.innerHeight)*2+1};if(r.value){const tt=et.x*Math.PI*.2,wt=et.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=wt}i=setTimeout(()=>{r.value=!1,Ut(_t.clientX)},500)};window.addEventListener("mousemove",kt);const B=_t=>{if(r.value){const et={x:_t.clientX/window.innerWidth*2-1,y:-(_t.clientY/window.innerHeight)*2+1},tt=et.x*Math.PI*.2,wt=et.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=wt}};window.addEventListener("mousemove",B),a(),Oe(()=>t.bodyPosition,_t=>{u.position.set(_t.x,_t.y,_t.z)}),Oe(()=>t.cameraPosition,_t=>{l.position.set(t.bodyPosition.x,1,_t),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(ai(),ci("div",{ref_key:"threeCanvas",ref:e,class:Fn(n.background?"no-bg":"three-canvas")},null,2))}}),h1=li(u1,[["__scopeId","data-v-8cfea564"]]),d1={class:"pixel-controls"},f1={class:"side-buttons"},p1=On({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);Xn(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03);const tt=_t.getElapsedTime();B.forEach((wt,Mt)=>{const Bt=.2+Math.sin(tt*3+et[Mt])*.1;wt.scale.set(Bt,Bt,Bt)}),x.render(f,_)};const f=new Wn,_=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Vn({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new Xt,m=new Xt;f.add(m);const b=new Ri(16777215,2);f.add(b);const M=new Ai(16777215,4);M.position.set(5,5,5),f.add(M);const S=new Ti(16777215,5,50);S.position.set(0,2,4),f.add(S);const O=new Yi,I=O.load("/3d-bear-arts/assets/pop6.jpg"),P=O.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=ke,P.wrapS=P.wrapT=ke,P.repeat.set(2,2);const N=new It({color:16738740,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),q=new It({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:fe}),y=new It({color:16766720,map:I,metalness:.3,roughness:.5}),E=new It({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:fe}),K=new It({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),W=new It({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new It({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:fe}),ot=new St(1,32,32,0,Math.PI),G=new A(ot,q),nt=new A(ot,N);G.scale.set(.85,.85,.8),nt.scale.set(.85,.85,.8),G.position.y=-.2,nt.position.y=-.2,G.rotation.y=Math.PI/2,nt.rotation.y=Math.PI*1.5;const H=new ve(1,32),mt=new A(H,N);mt.scale.set(.85,.85,.8),mt.position.set(0,-.2,0),mt.rotation.y=Math.PI/2;const yt=new Xt;yt.add(G),yt.add(nt),yt.add(mt),p.add(yt);const gt=new St(.6,32,32,0,Math.PI),Lt=new A(gt,y);Lt.scale.set(1,.95,.95),Lt.position.set(0,1,0),Lt.rotation.y=Math.PI*1.5;const zt=new A(gt,E);zt.scale.set(1,.95,.95),zt.position.set(0,1,0),zt.rotation.y=Math.PI/2;const rt=new ve(.6,32),ft=new A(rt,y);ft.position.set(0,1,0),ft.rotation.y=Math.PI/2,ft.scale.set(1,.95,.95);const vt=new Xt;vt.add(Lt),vt.add(zt),vt.add(ft),p.add(vt);const F=new St(.25,32,32),ct=new A(F,N);ct.position.set(-.45,1.35,-.1),p.add(ct);const it=new A(F,q);it.position.set(.45,1.35,-.1),p.add(it);const lt=new St(.25,32,32,Math.PI/2,Math.PI),Et=new A(lt,y);Et.scale.set(1.1,.6,.8),Et.position.set(0,.84,.5),Et.rotation.y=Math.PI;const Q=new St(.25,32,32,Math.PI/2,Math.PI),g=new A(Q,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new ve(.25,32),L=new A(T,y);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const U=new Xt;U.add(Et),U.add(g),U.add(L),p.add(U);const D=new Tn;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const X={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Z=new Nn(D,X),w=new A(Z,y);w.scale.set(.5,.5,.5),w.position.set(.3,0,0),w.rotation.y=Math.PI,w.rotation.x=Math.PI,p.add(w);const v=new A(Z,W);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new A(Z,N);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,p.add(C);const V=new St(.35,32,32),z=new A(V,W);z.scale.set(.75,1.25,.65),z.position.set(-.7,-.15,.2),p.add(z);const k=new A(V,J);k.scale.set(.75,1.25,.65),k.position.set(.7,-.15,.2),p.add(k);const ht=new ue(.2,.22,.6,32),ut=new A(ht,y);ut.position.set(-.4,-1.05,0),p.add(ut);const pt=new A(ht,E);pt.position.set(.4,-1.05,0),p.add(pt);const At=new St(.3,32,32),dt=new A(At,y);dt.scale.set(1,.72,1.5),dt.position.set(-.4,-1.45,.17),p.add(dt);const xt=new A(At,E);xt.scale.set(1,.72,1.5),xt.position.set(.4,-1.45,.17),p.add(xt);const Pt=new St(.44,32,32),Dt=new A(Pt,N);Dt.position.set(-.15,-.45,-.4),p.add(Dt);const bt=new A(Pt,q);bt.position.set(.15,-.45,-.4),p.add(bt);const Ht=new St(.18,32,32),Ut=new A(Ht,N);Ut.position.set(0,-.35,-.8),p.add(Ut),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const wt=new Fe("X",{font:tt,size:.2,depth:.05}),Mt=new A(wt,N);Mt.position.set(-.3,.99,.53),Mt.rotation.x=ee.degToRad(-5),Mt.rotation.y=ee.degToRad(-15),p.add(Mt);const Bt=new Fe("O",{font:tt,size:.2,depth:.05}),$t=new A(Bt,W);$t.position.set(.14,.99,.53),$t.rotation.y=ee.degToRad(12),$t.rotation.x=ee.degToRad(-5),p.add($t);const Qt=new Fe("POP",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new Fe("🐻",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const Kt=new Fe("BAO      BEAR",{font:tt,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),ie=new It({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new It({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const he=new It({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),xe=new It({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),Me=new A(Qt,ie);Me.scale.set(.15,.15,.15),Me.position.set(.02,1.16,.1),Me.rotateZ(-25),p.add(Me);const Tt=new A(Qt,K);Tt.scale.set(.14,.14,.14),Tt.rotateZ(45),Tt.position.set(.2,-.7,.3),p.add(Tt);const re=new A(Qt,he);re.scale.set(.14,.14,.14),re.rotateZ(45),re.rotateY(45),re.position.set(.3,.7,.3),p.add(re);const ne=new A(Qt,he);ne.scale.set(.15,.15,.15),ne.rotateZ(45),ne.rotateY(45),ne.position.set(.35,-1.5,.3),p.add(ne);const de=new A(Qt,xe);de.scale.set(.17,.17,.17),de.rotateZ(45),de.rotateY(15),de.position.set(.35,1,.3),p.add(de);const le=new A(Kt,ie);le.scale.set(.7,.7,.7),le.position.set(-6,0,-3),m.add(le)}),Ut.renderOrder=1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,p.rotation.x=.1;const B=[w,v,C],_t=new Sp,et=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),Oe(()=>t.bodyPosition,tt=>{p.position.set(tt.x,tt.y,tt.z)}),Oe(()=>t.cameraPosition,tt=>{_.position.set(t.bodyPosition.x,1,tt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(ai(),ci(ln,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:Fn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",d1,[Vt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Vt("div",f1,[Vt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),m1=li(p1,[["__scopeId","data-v-cb52c927"]]),g1={class:"pixel-controls"},_1={class:"side-buttons"},v1=On({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);Xn(()=>{if(e.value){let d=function(he,xe){const Me=new ue(kt,kt,B,32);Me.rotateX(Math.PI/2);const Tt=new A(Me,he),re=new Xt;for(let de=0;de<_t;de++){const le=de/_t*Math.PI*2,Ce=new ii(et,tt,wt),_e=new A(Ce,he);_e.position.set((kt+wt/26)*Math.cos(le),(kt+wt/26)*Math.sin(le),0),_e.rotation.z=le,re.add(_e)}const ne=new Xt;return ne.add(Tt),ne.add(re),ne.position.set(xe.x,xe.y,xe.z),ne},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),Mt.rotation.z-=.02,Bt.rotation.z+=.03,$t.rotation.z+=.02,Qt.rotation.z+=.02,Kt.rotation.z-=.03,ie.rotation.y+=.04,p.render(_,x)};const _=new Wn,x=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),p=new Vn({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new Xt,b=new Xt;_.add(b);const M=new Ri(16777215,2);_.add(M);const S=new Ai(16777215,4);S.position.set(5,5,5),_.add(S);const O=new Ti(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new Yi,P=I.load("/3d-bear-arts/assets/metal.jpg"),N=I.load("/3d-bear-arts/assets/pop7.jpg"),q=I.load("/3d-bear-arts/assets/gear.jpg");P.wrapS=P.wrapT=ke,N.wrapS=N.wrapT=ke,N.repeat.set(2,2);const y=new It({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:P});q.mapping=or;const E=new It({color:"#d3d3d3",metalness:1,roughness:.25,map:P,envMap:q,clearcoat:.7,clearcoatRoughness:.3}),K=new It({color:"#C0C0C0",metalness:1,roughness:.25,envMap:q,clearcoat:.7,clearcoatRoughness:.3}),W=new It({color:"#C0C0C0",metalness:1,roughness:.25,map:P,envMap:q,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),J=new It({color:"#C0C0C0",metalness:1,roughness:.5,map:P,envMap:q,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),ot=new It({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:fe});new It({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const G=new It({color:"#d3d3d3",metalness:1,roughness:.2,map:q,envMap:q,clearcoat:.7,clearcoatRoughness:.3});new It({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:q}),new It({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:P,transparent:!0,opacity:.3});const nt=new St(1,32,32,0,Math.PI),H=new A(nt,J),mt=new A(nt,E);H.scale.set(.85,.85,.8),mt.scale.set(.85,.85,.8),H.position.y=-.2,mt.position.y=-.2,H.rotation.y=Math.PI/2,mt.rotation.y=Math.PI*1.5;const yt=new ve(1,32),gt=new A(yt,W);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const Lt=new Xt;Lt.add(H),Lt.add(mt),Lt.add(gt),m.add(Lt);const zt=new St(.6,32,32,0,Math.PI),rt=new A(zt,E);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI*1.5;const ft=new A(zt,J);ft.scale.set(1,.95,.95),ft.position.set(0,1,0),ft.rotation.y=Math.PI/2;const vt=new ve(.6,32),F=new A(vt,W);F.position.set(0,1,0),F.rotation.y=Math.PI/2,F.scale.set(1,.95,.95);const ct=new Xt;ct.add(rt),ct.add(ft),ct.add(F),m.add(ct);const it=new St(.25,32,32),lt=new A(it,E);lt.position.set(-.45,1.35,-.1),m.add(lt);const Et=new A(it,W);Et.position.set(.45,1.35,-.1),m.add(Et);const Q=new St(.25,32,32,Math.PI/2,Math.PI),g=new A(Q,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new St(.25,32,32,Math.PI/2,Math.PI),L=new A(T,W);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const U=new ve(.25,32),D=new A(U,ot);D.scale.set(.8,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI/2;const X=new Xt;X.add(g),X.add(L),X.add(D),m.add(X);const Z=new Tn;Z.moveTo(0,0),Z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Z.bezierCurveTo(-.6,.3,0,.6,0,1),Z.bezierCurveTo(0,.6,.6,.3,.6,0),Z.bezierCurveTo(.6,-.3,0,-.3,0,0);const w={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new Nn(Z,w),C=new St(.35,32,32),V=new A(C,E);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),m.add(V);const z=new A(C,W);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const k=new ue(.2,.22,.6,32),ht=new A(k,E);ht.position.set(-.4,-1.05,0),m.add(ht);const ut=new A(k,W);ut.position.set(.4,-1.05,0),m.add(ut);const pt=new St(.3,32,32),At=new A(pt,E);At.scale.set(1,.72,1.5),At.position.set(-.4,-1.45,.17),m.add(At);const dt=new A(pt,W);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),m.add(dt);const xt=new St(.44,32,32),Pt=new A(xt,E);Pt.position.set(-.15,-.45,-.4),m.add(Pt);const Dt=new A(xt,J);Dt.position.set(.15,-.45,-.4),m.add(Dt);const bt=new St(.18,32,32),Ht=new A(bt,E);Ht.position.set(0,-.35,-.8),m.add(Ht),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(he){const xe=new Fe("X",{font:he,size:.2,depth:.05});new bn({color:0});const Me=new A(xe,y);Me.position.set(-.3,.99,.53),Me.rotation.x=ee.degToRad(-5),Me.rotation.y=ee.degToRad(-15),m.add(Me);const Tt=new Fe("O",{font:he,size:.2,depth:.05});new bn({color:0});const re=new A(Tt,y);re.position.set(.14,.99,.53),re.rotation.y=ee.degToRad(12),re.rotation.x=ee.degToRad(-5),m.add(re)}),Ht.renderOrder=1;const kt=1.2,B=.5,_t=8,et=.7,tt=.3,wt=.5,Mt=d(G,{x:-2,y:0,z:0}),Bt=d(G,{x:0,y:0,z:0}),$t=d(G,{x:2,y:0,z:0}),Qt=d(G,{x:2,y:0,z:0}),Kt=d(G,{x:2,y:-2,z:0}),ie=new A(v,K);ie.scale.set(.3,.3,.3),ie.position.set(.25,1.1,0),ie.rotation.y=Math.PI,ie.rotation.x=Math.PI,m.add(ie),Mt.position.set(.35,0,0),Bt.position.set(.25,-.3,.4),$t.position.set(.3,.3,-.2),Qt.position.set(.25,.17,.4),Kt.position.set(.5,-.3,.45),Mt.scale.set(.2,.2,.2),Bt.scale.set(.18,.18,.18),$t.scale.set(.15,.15,.15),Qt.scale.set(.17,.17,.17),Kt.scale.set(.15,.15,.15),Bt.rotation.z=Math.PI/4,$t.rotation.z=-Math.PI/4,Qt.rotation.y=-Math.PI/2,Kt.rotation.y=-Math.PI/2,m.add(Mt),m.add(Bt),m.add($t),m.add(Qt),m.add(Kt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4,f(),Oe(()=>t.bodyPosition,he=>{m.position.set(he.x,he.y,he.z)}),Oe(()=>t.cameraPosition,he=>{x.position.set(t.bodyPosition.x,1,he),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(ai(),ci(ln,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:Fn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",g1,[Vt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Vt("div",_1,[Vt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),x1=li(v1,[["__scopeId","data-v-9a57b6d8"]]),y1={class:"pixel-controls"},M1={class:"side-buttons"},w1=On({__name:"WaterBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);Xn(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),x.render(f,_)};const f=new Wn,_=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Vn({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new Xt,m=new Xt;f.add(m);const b=new Ri(16777215,2);f.add(b);const M=new Ai(16777215,4);M.position.set(5,5,5),f.add(M);const S=new Ti(16777215,5,50);S.position.set(0,2,4),f.add(S);const O=new Yi,I=O.load("/3d-bear-arts/assets/sun.jpg"),P=O.load("/3d-bear-arts/assets/gear.jpg"),N=O.load("/3d-bear-arts/assets/underwater.jpg"),q=O.load("/3d-bear-arts/assets/beach.jpg");N.wrapS=N.wrapT=ke,q.wrapS=q.wrapT=ke,q.repeat.set(.8,1),P.mapping=or,I.wrapS=I.wrapT=ke;const y=new It({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,map:q,envMapIntensity:.8,side:fe,transparent:!0,opacity:.9}),E=new It({color:11592447,metalness:.05,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,reflectivity:.4,map:q,envMapIntensity:.6,side:fe,transparent:!0,opacity:.9,transmission:.5,ior:1.33,depthWrite:!1,depthTest:!0});new It({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,envMapIntensity:.8,map:q,side:fe,transparent:!0,opacity:.9});const K=new It({color:8374441,metalness:1,roughness:.25,envMap:P,clearcoat:.7,clearcoatRoughness:.3}),W=new It({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,clearcoat:.6,clearcoatRoughness:.25,transmission:.6,ior:1.4,depthWrite:!1,depthTest:!0,side:fe}),J=new It({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,map:q,clearcoat:.1,clearcoatRoughness:.25,transmission:.6,ior:1.4}),ot=new It({color:"#a4d0f5",metalness:0,roughness:.8,map:I,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.8,transparent:!0}),G=new It({color:"#a4d0f5",metalness:0,roughness:.85,map:q,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.6,transparent:!0}),nt=new St(1,32,32,0,Math.PI),H=new A(nt,W),mt=new A(nt,E);H.scale.set(.85,.85,.8),mt.scale.set(.85,.85,.8),H.position.y=-.2,mt.position.y=-.2,H.rotation.y=Math.PI/2,mt.rotation.y=Math.PI*1.5;const yt=new ve(1,32),gt=new A(yt,G);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const Lt=new Xt;Lt.add(H),Lt.add(mt),Lt.add(gt);const zt=new St(.6,32,32,0,Math.PI*2,0,Math.PI/2),rt=new It({color:6935271,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ft=new A(zt,rt);ft.position.set(0,-.2,0),ft.rotation.x=Math.PI,ft.scale.set(1.25,1.25,1.25),Lt.add(ft);const vt=new It({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:fe,transparent:!0,opacity:.7,depthWrite:!1}),F=new A(yt,vt);F.scale.set(.7,.7,.7),F.position.set(0,-.3,0),F.rotation.x=Math.PI/2,F.renderOrder=1,Lt.add(F),p.add(Lt);const ct=new St(.6,32,32,0,Math.PI),it=new A(ct,y);it.scale.set(1,.95,.95),it.position.set(0,1,0),it.rotation.y=Math.PI*1.5;const lt=new A(ct,J);lt.scale.set(1,.95,.95),lt.position.set(0,1,0),lt.rotation.y=Math.PI/2;const Et=new ve(.6,32),Q=new A(Et,ot);Q.position.set(0,1,0),Q.rotation.y=Math.PI/2,Q.scale.set(1,.95,.95);const g=new Xt;g.add(it),g.add(lt),g.add(Q),p.add(g);const T=new St(.25,32,32),L=new A(T,y);L.position.set(-.45,1.35,-.1),p.add(L);const U=new A(T,J);U.position.set(.45,1.35,-.1),p.add(U);const D=new St(.25,32,32,Math.PI/2,Math.PI),X=new A(D,y);X.scale.set(1.1,.6,.8),X.position.set(0,.84,.5),X.rotation.y=Math.PI;const Z=new St(.25,32,32,Math.PI/2,Math.PI),w=new A(Z,J);w.scale.set(1.1,.6,.8),w.position.set(0,.84,.5),w.rotation.y=0;const v=new ve(.25,32),C=new A(v,ot);C.scale.set(.8,.6,.8),C.position.set(0,.84,.5),C.rotation.y=Math.PI/2;const V=new Xt;V.add(X),V.add(w),V.add(C),p.add(V);const z=new Tn;z.moveTo(0,0),z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),z.bezierCurveTo(-.6,.3,0,.6,0,1),z.bezierCurveTo(0,.6,.6,.3,.6,0),z.bezierCurveTo(.6,-.3,0,-.3,0,0);const k={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ht=new Nn(z,k),ut=new St(.35,32,32),pt=new A(ut,y);pt.scale.set(.75,1.25,.65),pt.position.set(-.7,-.15,.2),p.add(pt);const At=new A(ut,J);At.scale.set(.75,1.25,.65),At.position.set(.7,-.15,.2),p.add(At);const dt=new ue(.2,.22,.6,32),xt=new A(dt,y);xt.position.set(-.4,-1.05,0),p.add(xt);const Pt=new A(dt,J);Pt.position.set(.4,-1.05,0),p.add(Pt);const Dt=new St(.3,32,32),bt=new A(Dt,y);bt.scale.set(1,.72,1.5),bt.position.set(-.4,-1.45,.17),p.add(bt);const Ht=new A(Dt,J);Ht.scale.set(1,.72,1.5),Ht.position.set(.4,-1.45,.17),p.add(Ht);const Ut=new St(.44,32,32),kt=new A(Ut,y);kt.position.set(-.15,-.45,-.4),p.add(kt);const B=new A(Ut,J);B.position.set(.15,-.45,-.4),p.add(B);const _t=new St(.18,32,32),et=new A(_t,E);et.position.set(0,-.35,-.8),p.add(et),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Mt){const Bt=new Fe("X",{font:Mt,size:.2,depth:.05});new bn({color:0});const $t=new A(Bt,y);$t.position.set(-.3,.99,.53),$t.rotation.x=ee.degToRad(-5),$t.rotation.y=ee.degToRad(-15),p.add($t);const Qt=new Fe("O",{font:Mt,size:.2,depth:.05});new bn({color:0});const Kt=new A(Qt,E);Kt.position.set(.14,.99,.53),Kt.rotation.y=ee.degToRad(12),Kt.rotation.x=ee.degToRad(-5),p.add(Kt)}),et.renderOrder=1,p.rotation.x=.1;const wt=new A(ht,K);wt.scale.set(.3,.3,.3),wt.position.set(.25,1.1,0),wt.rotation.y=Math.PI,wt.rotation.x=Math.PI,p.add(wt),p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,d(),Oe(()=>t.bodyPosition,Mt=>{p.position.set(Mt.x,Mt.y,Mt.z)}),Oe(()=>t.cameraPosition,Mt=>{_.position.set(t.bodyPosition.x,1,Mt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(ai(),ci(ln,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:Fn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",y1,[Vt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Vt("div",M1,[Vt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),S1=li(w1,[["__scopeId","data-v-08c607ba"]]),E1={class:"pixel-controls"},b1={class:"side-buttons"},T1={class:"directional-buttons"},A1={class:"horizontal-buttons"},R1={class:"directional-buttons-woman"},P1={class:"horizontal-buttons-woman"},C1={class:"directional-buttons-kid"},I1={class:"horizontal-buttons-kid"},jr=.1,Kr=.05,Zr=.08,L1=On({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);const a=Ho(null),c=jt(!1),l=jt(!1),h=jt(!1),u=jt(!1),d=Ho(null),f=Ho(null),_=jt(!1),x=jt(!1),p=jt(!1),m=jt(!1),b=jt(!1),M=jt(!1),S=jt(!1),O=jt(!1),I=new Vn({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const P=new Wn,N=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3);N.position.z=5,Xn(()=>{if(e.value){let Q=function(){const Ct=new Xt,Le=new St(.2,32,32),ze=new te({color:16767916}),we=new A(Le,ze);we.position.set(0,1.5,0),Ct.add(we);const sn=new St(.21,32,32,0,Math.PI*2,0,Math.PI/2),Se=new te({color:16711680}),$e=new A(sn,Se);$e.position.set(0,1.58,0),Ct.add($e);const Rn=new ue(.25,.25,.6,32),He=new te({color:16767916}),wn=new A(Rn,He);wn.position.set(0,1,0),Ct.add(wn);const ui=new ue(.26,.26,.3,32),Bn=new te({color:255}),$n=new A(ui,Bn);$n.position.set(0,.65,0),Ct.add($n);const zn=new ue(.1,.1,.5,32),rn=new te({color:16767916}),Sn=new A(zn,rn);Sn.position.set(-.15,.25,0),Ct.add(Sn);const hi=new A(zn,rn);hi.position.set(.15,.25,0),Ct.add(hi);const di=new ue(.08,.08,.5,32),fi=new A(di,rn);fi.position.set(-.35,1.3,0),fi.rotation.z=Math.PI/4,Ct.add(fi);const pi=new A(di,rn);return pi.position.set(.35,1.3,0),pi.rotation.z=-Math.PI/4,Ct.add(pi),Ct.scale.set(.27,.27,.27),Ct.position.set(-.2,-.1,-.15),Ct},g=function(){const Ct=new Xt,Le=new St(.18,32,32),ze=new te({color:16767916}),we=new A(Le,ze);we.position.set(0,1.2,.04),Ct.add(we);const sn=new St(.19,32,32,.4,Math.PI*2,0,Math.PI/2),Se=new ue(.18,.18,.4,32),$e=new te({color:9127187}),Rn=new A(sn,$e);Rn.position.set(0,1.28,0),Ct.add(Rn);const He=new A(Se,$e);He.position.set(0,1.1,-.01),Ct.add(He);const wn=new ue(.18,.2,.5,32),ui=new te({color:16767916}),Bn=new A(wn,ui);Bn.position.set(0,.85,0),Ct.add(Bn);const $n=new St(.08,32,32,0,Math.PI),zn=new te({color:16738740}),rn=new A($n,zn);rn.position.set(-.09,.98,.15),Ct.add(rn);const Sn=new A($n,zn);Sn.position.set(.09,.98,.15),Ct.add(Sn);const hi=new ue(.22,.22,.25,32),di=new te({color:16738740}),fi=new A(hi,di);fi.position.set(0,.6,0),Ct.add(fi);const pi=new ue(.1,.1,.6,32),vr=new te({color:16767916}),Oa=new A(pi,vr);Oa.position.set(-.09,.5,.2),Oa.rotation.x=Math.PI/2,Ct.add(Oa);const Ba=new A(pi,vr);Ba.position.set(.09,.5,.2),Ba.rotation.x=Math.PI/2,Ct.add(Ba);const Su=new ue(.08,.08,.35,32),za=new A(Su,vr);za.position.set(-.24,.95,.18),za.rotation.x=Math.PI/2,Ct.add(za);const Ga=new A(Su,vr);return Ga.position.set(.2,.85,0),Ga.rotation.z=Math.PI/20,Ct.add(Ga),Ct.scale.set(.27,.27,.27),Ct.position.set(.2,-.15,-.32),Ct},T=function(){const Ct=new Xt,Le=new St(.2,32,32),ze=new te({color:16767916}),we=new A(Le,ze);we.position.set(0,1.5,0),Ct.add(we);const sn=new St(.21,32,32,0,Math.PI*2,0,Math.PI/2),Se=new te({color:25600}),$e=new A(sn,Se);$e.position.set(0,1.58,0),Ct.add($e);const Rn=new ue(.22,.22,.5,32),He=new te({color:16767916}),wn=new A(Rn,He);wn.position.set(0,1,0),Ct.add(wn);const ui=new ue(.23,.23,.3,32),Bn=new te({color:8388736}),$n=new A(ui,Bn);$n.position.set(0,.65,0),Ct.add($n);const zn=new ue(.1,.1,.5,32),rn=new te({color:16767916}),Sn=new A(zn,rn);Sn.position.set(-.15,.3,-.25),Sn.rotation.x=Math.PI/6,Ct.add(Sn);const hi=new A(zn,rn);hi.position.set(.15,.3,.25),hi.rotation.x=-Math.PI/6,Ct.add(hi);const di=new ue(.08,.08,.4,32),fi=new A(di,rn);fi.position.set(-.28,1,-.2),fi.rotation.x=Math.PI/6,Ct.add(fi);const pi=new A(di,rn);return pi.position.set(.28,1.3,.1),pi.rotation.z=-Math.PI/8,Ct.add(pi),Ct.scale.set(.15,.15,.15),Ct.position.set(.3,-.25,.25),Ct.rotation.x=Math.PI/12,Ct.rotation.y=Math.PI/2,Ct.rotation.z=-Math.PI/3,Ct},L=function(Ct){let Le=1,ze=0;function we(){requestAnimationFrame(we),Ct.position.x+=.01*Le,Ct.position.x>=.35?(Le=-1,Ct.rotation.y=Math.PI):Ct.position.x<=-.35&&(Le=1,Ct.rotation.y=0),ze+=.003,Ct.position.y=-.4+Math.sin(ze)*.1,Z.render(D,X)}we()},U=function(){requestAnimationFrame(U),i.value&&(w.rotation.y+=.03),s.value&&(w.rotation.y-=.03),o.value&&(w.rotation.x-=.03),r.value&&(w.rotation.x+=.03),Me.uniforms.u_time.value+=.25,st.rotation.y+=.04,Z.render(D,X)};const D=new Wn,X=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),Z=new Vn({antialias:!0,alpha:!0});Z.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(Z.domElement);const w=new Xt,v=new Xt;D.add(v);const C=new Ri(16777215,2);D.add(C);const V=new Ai(16777215,4);V.position.set(5,5,5),D.add(V);const z=new Ti(16777215,5,50);z.position.set(0,2,4),D.add(z);const k=new Yi,ht=k.load("/3d-bear-arts/assets/beach.jpg");ht.repeat.set(.8,1);const ut=k.load("/3d-bear-arts/assets/sun.jpg");ht.wrapS=ht.wrapT=ke,ht.repeat.set(.8,1),ut.wrapS=ut.wrapT=ke;const pt=new It({color:11592447,map:ht,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),At=new It({color:11592447,map:ht,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:fe,ior:1.33,depthWrite:!1,depthTest:!0}),dt=new It({color:11592447,map:ht,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),xt=new It({color:11592447,map:ht,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:fe}),Pt=new It({color:11592447,map:ht,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:fe,ior:1.33}),Dt=new It({color:11592447,map:ht,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),bt=new St(1,32,32,0,Math.PI),Ht=new A(bt,xt),Ut=new A(bt,At);Ht.scale.set(.85,.85,.8),Ut.scale.set(.85,.85,.8),Ht.position.y=-.2,Ut.position.y=-.2,Ht.rotation.y=Math.PI/2,Ut.rotation.y=Math.PI*1.5;const kt=new ve(1,32),B=new A(kt,pt);B.scale.set(.85,.85,.8),B.position.set(0,-.2,0),B.rotation.y=Math.PI/2;const _t=new Xt;_t.add(Ht),_t.add(Ut),_t.add(B),w.add(_t);const et=new St(.6,32,32,0,Math.PI),tt=new A(et,pt);tt.scale.set(1,.95,.95),tt.position.set(0,1,0),tt.rotation.y=Math.PI*1.5;const wt=new A(et,dt);wt.scale.set(1,.95,.95),wt.position.set(0,1,0),wt.rotation.y=Math.PI/2;const Mt=new ve(.6,32),Bt=new A(Mt,pt);Bt.position.set(0,1,0),Bt.rotation.y=Math.PI/2,Bt.scale.set(1,.95,.95);const $t=new Xt;$t.add(tt),$t.add(wt),$t.add(Bt),w.add($t);const Qt=new St(.6,32,32,0,Math.PI*2,0,Math.PI/2),Kt=new It({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ie=new A(Qt,Kt);ie.position.set(0,-.2,0),ie.rotation.x=Math.PI,ie.scale.set(1.25,1.25,1.25),_t.add(ie);const he=new It({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:fe,transparent:!0,opacity:.7,depthWrite:!1}),xe=new A(kt,he);xe.scale.set(.7,.7,.7),xe.position.set(0,-.3,0),xe.rotation.x=Math.PI/2,xe.renderOrder=1,_t.add(xe),w.add(_t);const Me=new An({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),Tt=new A(kt,Me);Tt.position.set(0,-.3,0),Tt.scale.set(.7,.7,.7),Tt.rotation.x=-Math.PI/2,Tt.renderOrder=1,_t.add(Tt);const re=new St(.25,32,32),ne=new A(re,Pt);ne.position.set(-.45,1.35,-.1),w.add(ne);const de=new A(re,dt);de.position.set(.45,1.35,-.1),w.add(de);const le=new St(.25,32,32,Math.PI/2,Math.PI),Ce=new A(le,Pt);Ce.scale.set(1.1,.6,.8),Ce.position.set(0,.84,.5),Ce.rotation.y=Math.PI;const _e=new St(.25,32,32,Math.PI/2,Math.PI),nn=new A(_e,dt);nn.scale.set(1.1,.6,.8),nn.position.set(0,.84,.5),nn.rotation.y=0;const pn=new ve(.25,32),Ye=new A(pn,At);Ye.scale.set(.8,.6,.8),Ye.position.set(0,.84,.5),Ye.rotation.y=Math.PI/2;const mn=new Xt;mn.add(Ce),mn.add(nn),mn.add(Ye),w.add(mn);const Yn=new It({color:8374441,metalness:1,roughness:.25,envMap:ut,clearcoat:.7,clearcoatRoughness:.3}),R=new Tn;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},at=new Nn(R,Y),st=new A(at,Yn);st.scale.set(.2,.2,.2),st.position.set(.25,1.2,0),st.rotation.y=Math.PI,st.rotation.x=Math.PI,w.add(st);const j=new St(.35,32,32),Rt=new A(j,At);Rt.scale.set(.75,1.25,.65),Rt.position.set(-.7,-.15,.2),w.add(Rt);const Nt=new A(j,xt);Nt.scale.set(.75,1.25,.65),Nt.position.set(.7,-.15,.2),w.add(Nt);const Gt=new ue(.2,.22,.6,32),Wt=new A(Gt,Pt);Wt.position.set(-.4,-1.05,0),w.add(Wt);const Zt=new A(Gt,dt);Zt.position.set(.4,-1.05,0),w.add(Zt);const Jt=new St(.3,32,32),qt=new A(Jt,Pt);qt.scale.set(1,.72,1.5),qt.position.set(-.4,-1.45,.17),w.add(qt);const ge=new A(Jt,dt);ge.scale.set(1,.72,1.5),ge.position.set(.4,-1.45,.17),w.add(ge);const ye=new St(.44,32,32),Re=new A(ye,Pt);Re.position.set(-.15,-.45,-.4),w.add(Re);const Ke=new A(ye,Pt);Ke.position.set(.15,-.45,-.4),w.add(Ke);const me=new St(.18,32,32),Yt=new A(me,Pt);Yt.position.set(0,-.35,-.8),w.add(Yt),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ct){const Le=new Fe("X",{font:Ct,size:.2,depth:.05}),ze=new A(Le,Dt);ze.position.set(-.3,.99,.53),ze.rotation.x=ee.degToRad(-5),ze.rotation.y=ee.degToRad(-15),w.add(ze);const we=new Fe("O",{font:Ct,size:.2,depth:.05}),sn=new A(we,Dt);sn.position.set(.14,.99,.53),sn.rotation.y=ee.degToRad(12),sn.rotation.x=ee.degToRad(-5),w.add(sn)}),a.value=Q(),w.add(a.value),D.add(w),d.value=g(),w.add(d.value),f.value=T(),w.add(f.value),L(f.value),w.scale.set(1.4,1.4,1.4),D.add(w),w.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),X.position.set(t.bodyPosition.x,1,t.cameraPosition),X.lookAt(t.bodyPosition.x,0,0),X.position.z=4,w.rotation.x=.1,U(),Oe(()=>t.bodyPosition,Ct=>{w.position.set(Ct.x,Ct.y,Ct.z)}),Oe(()=>t.cameraPosition,Ct=>{X.position.set(t.bodyPosition.x,1,Ct),X.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{X.aspect=window.innerWidth/window.innerHeight,X.updateProjectionMatrix(),Z.setSize(window.innerWidth,window.innerHeight)})}});function q(){s.value=!0}function y(){i.value=!0}function E(){o.value=!0}function K(){r.value=!0}function W(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}const J=()=>{c.value=!0,console.log(c.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},ot=()=>{l.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},G=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},nt=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},H=()=>{c.value=!1,l.value=!1,h.value=!1,u.value=!1},mt=()=>{_.value=!0,d.value&&(d.value.rotation.y=Math.PI)},yt=()=>{x.value=!0,d.value&&(d.value.rotation.y=0)},gt=()=>{p.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},Lt=()=>{m.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},zt=()=>{_.value=!1,x.value=!1,p.value=!1,m.value=!1},rt=()=>{requestAnimationFrame(rt),a.value&&(c.value&&(a.value.position.z-=jr),l.value&&(a.value.position.z+=jr),h.value&&(a.value.position.x-=jr),u.value&&(a.value.position.x+=jr)),I.render(P,N)},ft=()=>{requestAnimationFrame(ft),d.value&&(_.value&&(d.value.position.z-=Kr),x.value&&(d.value.position.z+=Kr),p.value&&(d.value.position.x-=Kr),m.value&&(d.value.position.x+=Kr))};ft(),rt();const vt=()=>{b.value=!0,f.value&&(f.value.rotation.y=0)},F=()=>{M.value=!0,f.value&&(f.value.rotation.y=Math.PI)},ct=()=>{S.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},it=()=>{O.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},lt=()=>{b.value=!1,M.value=!1,S.value=!1,O.value=!1},Et=()=>{requestAnimationFrame(Et),f.value&&(b.value&&(f.value.position.z-=Zr),M.value&&(f.value.position.z+=Zr),S.value&&(f.value.position.x-=Zr),O.value&&(f.value.position.x+=Zr))};return Et(),(Q,g)=>(ai(),ci(ln,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:Fn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",E1,[Vt("button",{class:"pixel-btn up",onMousedown:E,onMouseup:W},"UP",32),Vt("div",b1,[Vt("button",{class:"pixel-btn left",onMousedown:q,onMouseup:W},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:y,onMouseup:W},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:K,onMouseup:W},"DOWN",32)]),Vt("div",T1,[Vt("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:J,onMouseup:H},"UP",32),Vt("div",A1,[Vt("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:G,onMouseup:H},"LEFT",32),Vt("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:nt,onMouseup:H},"RIGHT",32)]),Vt("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:ot,onMouseup:H},"DOWN",32)]),Vt("div",R1,[Vt("button",{class:"directional-btn-woman north-btn",onMousedown:mt,onMouseup:zt},"UP",32),Vt("div",P1,[Vt("button",{class:"directional-btn-woman west-btn",onMousedown:gt,onMouseup:zt},"LEFT",32),Vt("button",{class:"directional-btn-woman east-btn",onMousedown:Lt,onMouseup:zt},"RIGHT",32)]),Vt("button",{class:"directional-btn-woman south-btn",onMousedown:yt,onMouseup:zt},"DOWN",32)]),Vt("div",C1,[Vt("button",{class:"directional-btn-kid north-btn",onMousedown:vt,onMouseup:lt},"UP",32),Vt("div",I1,[Vt("button",{class:"directional-btn-kid west-btn",onMousedown:ct,onMouseup:lt},"LEFT",32),Vt("button",{class:"directional-btn-kid east-btn",onMousedown:it,onMouseup:lt},"RIGHT",32)]),Vt("button",{class:"directional-btn-kid south-btn",onMousedown:F,onMouseup:lt},"DOWN",32)])],64))}}),D1=li(L1,[["__scopeId","data-v-354294c6"]]),U1={class:"pixel-controls"},N1={class:"side-buttons"},F1=On({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);Xn(()=>{if(e.value){let d=function(ne,de){const le=new Xt,Ce=new St(1,32,32),_e=new A(Ce,ot);_e.scale.set(1,.8,1),le.add(_e);const nn=new ue(.1,.1,.5,16),pn=new te({color:9127187}),Ye=new A(nn,pn);return Ye.position.set(0,.9,0),le.add(Ye),le},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),kt.rotation.z-=.04,B.rotation.z+=.04,_t.rotation.z+=.03,et.rotation.z+=.03,v.rotation.y+=.04,re+=Me,m.position.y=t.bodyPosition.y+Math.sin(re)*Tt;const ne=he.getElapsedTime();ie.forEach((de,le)=>{const Ce=.1+Math.sin(ne*3+xe[le])*.1;de.scale.set(Ce,Ce,Ce)}),p.render(_,x)};const _=new Wn,x=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),p=new Vn({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new Xt,b=new Xt;_.add(b);const M=new Ri(16777215,2);_.add(M);const S=new Ai(16777215,4);S.position.set(5,5,5),_.add(S);const O=new Ti(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new Yi,P=I.load("/3d-bear-arts/assets/pumpkin.jpg");P.wrapS=P.wrapT=ke,P.repeat.set(.8,.85);const N=I.load("/3d-bear-arts/assets/pumpkin.jpg");N.wrapS=N.wrapT=ke,N.repeat.set(1,1);const q=I.load("/3d-bear-arts/assets/pumpkin.jpg");q.wrapS=N.wrapT=ke,q.repeat.set(2,.8);const y=new It({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new Xt,K=new It({color:16747520,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),W=new It({color:16747520,map:N,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new It({color:16747520,map:q,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:fe}),ot=new It({color:16747520,map:q,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new It({color:16766720,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new It({color:9109504,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new It({color:4915330,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const G=new St(1,32,32,0,Math.PI),nt=new A(G,J),H=new A(G,K);nt.scale.set(.85,.85,.8),H.scale.set(.85,.85,.8),nt.position.y=-.2,H.position.y=-.2,nt.rotation.y=Math.PI/2,H.rotation.y=Math.PI*1.5;const mt=new ve(1,32),yt=new A(mt,W);yt.scale.set(.85,.85,.8),yt.position.set(0,-.2,0),yt.rotation.y=Math.PI/2;const gt=new Xt;gt.add(nt),gt.add(H),gt.add(yt),m.add(gt);const Lt=new St(.6,32,32,0,Math.PI),zt=new A(Lt,K);zt.scale.set(1,.95,.95),zt.position.set(0,1,0),zt.rotation.y=Math.PI*1.5;const rt=new A(Lt,J);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI/2;const ft=new ve(.6,32),vt=new A(ft,W);vt.position.set(0,1,0),vt.rotation.y=Math.PI/2,vt.scale.set(1,.95,.95);const F=new Xt;F.add(zt),F.add(rt),F.add(vt),m.add(F);const ct=new St(.25,32,32),it=new A(ct,ot);it.position.set(-.45,1.35,-.1),m.add(it);const lt=new A(ct,J);lt.position.set(.45,1.35,-.1),m.add(lt);const Et=new St(.25,32,32,Math.PI/2,Math.PI),Q=new A(Et,K);Q.scale.set(1.1,.6,.8),Q.position.set(0,.84,.5),Q.rotation.y=Math.PI;const g=new St(.25,32,32,Math.PI/2,Math.PI),T=new A(g,J);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const L=new ve(.25,32),U=new A(L,K);U.scale.set(.8,.6,.8),U.position.set(0,.84,.5),U.rotation.y=Math.PI/2;const D=new Xt;D.add(Q),D.add(T),D.add(U),m.add(D);const X=new Tn;X.moveTo(0,0),X.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),X.bezierCurveTo(-.6,.3,0,.6,0,1),X.bezierCurveTo(0,.6,.6,.3,.6,0),X.bezierCurveTo(.6,-.3,0,-.3,0,0);const Z={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},w=new Nn(X,Z),v=new A(w,y);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new St(.35,32,32),V=new A(C,W);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),m.add(V);const z=new A(C,J);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const k=new ue(.2,.22,.6,32),ht=new A(k,W);ht.position.set(-.4,-1.05,0),m.add(ht);const ut=new A(k,J);ut.position.set(.4,-1.05,0),m.add(ut);const pt=new St(.3,32,32),At=new A(pt,ot);At.scale.set(1,.72,1.5),At.position.set(-.4,-1.45,.17),m.add(At);const dt=new A(pt,J);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),m.add(dt);const xt=new St(.44,32,32),Pt=new A(xt,K);Pt.position.set(-.15,-.45,-.4),m.add(Pt);const Dt=new A(xt,J);Dt.position.set(.15,-.45,-.4),m.add(Dt);const bt=new St(.18,32,32),Ht=new A(bt,ot);Ht.position.set(0,-.35,-.8),m.add(Ht),Ht.renderOrder=1,new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ne){const de=new Fe("X",{font:ne,size:.2,depth:.05}),le=new A(de,W);le.position.set(-.3,.99,.53),le.rotation.x=ee.degToRad(-5),le.rotation.y=ee.degToRad(-15),m.add(le);const Ce=new Fe("O",{font:ne,size:.2,depth:.05}),_e=new A(Ce,W);_e.position.set(.14,.99,.53),_e.rotation.y=ee.degToRad(12),_e.rotation.x=ee.degToRad(-5),m.add(_e)}),m.add(E);const kt=d(),B=d(),_t=d(),et=d();kt.position.set(.35,-.35,-.3),B.position.set(.25,-.45,.3),_t.position.set(.3,.1,-.2),et.position.set(.25,.18,.4),kt.scale.set(.3,.3,.3),B.scale.set(.28,.28,.28),_t.scale.set(.25,.25,.25),et.scale.set(.23,.23,.23),B.rotation.z=Math.PI/4,_t.rotation.z=-Math.PI/4,et.rotation.y=-Math.PI/2,m.add(kt),m.add(B),m.add(_t),m.add(et);const tt=new Tn;tt.moveTo(-.5,0),tt.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),tt.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),tt.bezierCurveTo(-.05,.6,.05,.6,.15,.4),tt.bezierCurveTo(.25,.5,.25,.85,.5,.8),tt.bezierCurveTo(1,.6,.75,.25,.5,0),tt.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const wt={depth:.3,bevelEnabled:!1},Mt=new Nn(tt,wt),Bt=new bn({color:0}),$t=new A(Mt,Bt);$t.scale.set(.3,.3,.6),$t.rotation.x=0,$t.rotation.z=0,$t.position.set(.26,.35,.25),m.add($t);const Qt=new A(Mt,Bt);Qt.scale.set(.5,.5,.5),Qt.position.set(.4,-.1,.54),m.add(Qt);const Kt=new A(Mt,Bt);Kt.scale.set(.5,.5,.5),Kt.position.set(.32,-.35,.65),m.add(Kt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;const ie=[$t,Qt,Kt],he=new Sp,xe=[0,Math.PI/2,Math.PI,0,Math.PI/3];let Me=.05,Tt=.25,re=0;f(),Oe(()=>t.bodyPosition,ne=>{m.position.set(ne.x,ne.y,ne.z)}),Oe(()=>t.cameraPosition,ne=>{x.position.set(t.bodyPosition.x,1,ne),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(ai(),ci(ln,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:Fn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",U1,[Vt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Vt("div",N1,[Vt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),O1=li(F1,[["__scopeId","data-v-5eff72b3"]]),B1={class:"pixel-controls"},z1={class:"side-buttons"},G1=On({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);Xn(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),Z.rotation.y+=.03,Bt+=et,$t+=tt,p.position.y=t.bodyPosition.y+Math.sin(Bt)*Mt,Z.position.y=t.bodyPosition.y+Math.sin($t)*wt,kt.uniforms.u_time.value+=.25,x.render(f,_)};const f=new Wn,_=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Vn({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new Xt,m=new Xt;f.add(m);const b=new Ri(16777215,2);f.add(b);const M=new Ai(16777215,4);M.position.set(5,5,5),f.add(M);const S=new Ti(16777215,5,50);S.position.set(0,2,4),f.add(S);const O=new Yi,I=O.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=ke,I.repeat.set(2,2);const P=O.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=ke,P.repeat.set(1,1);const N=new It({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:fe}),q=new It({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),y=new It({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new It({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:fe}),K=new It({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:fe}),W=new It({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:fe}),J=new St(1,32,32,0,Math.PI),ot=new A(J,N),G=new A(J,K);ot.scale.set(.85,.85,.8),G.scale.set(.85,.85,.8),ot.position.y=-.2,G.position.y=-.2,ot.rotation.y=Math.PI/2,G.rotation.y=Math.PI*1.5;const nt=new ve(1,32),H=new A(nt,K);H.scale.set(.85,.85,.8),H.position.set(0,-.2,0),H.rotation.y=Math.PI/2;const mt=new Xt;mt.add(ot),mt.add(G),mt.add(H),p.add(mt);const yt=new St(.6,32,32,0,Math.PI),gt=new A(yt,W);gt.scale.set(1,.95,.95),gt.position.set(0,1,0),gt.rotation.y=Math.PI*1.5;const Lt=new A(yt,q);Lt.scale.set(1,.95,.95),Lt.position.set(0,1,0),Lt.rotation.y=Math.PI/2;const zt=new ve(.6,32),rt=new A(zt,K);rt.position.set(0,1,0),rt.rotation.y=Math.PI/2,rt.scale.set(1,.95,.95);const ft=new Xt;ft.add(gt),ft.add(Lt),ft.add(rt),p.add(ft);const vt=new St(.25,32,32),F=new A(vt,W);F.position.set(-.45,1.35,-.1),p.add(F);const ct=new A(vt,q);ct.position.set(.45,1.35,-.1),p.add(ct);const it=new St(.25,32,32,Math.PI/2,Math.PI),lt=new A(it,W);lt.scale.set(1.1,.6,.8),lt.position.set(0,.84,.5),lt.rotation.y=Math.PI;const Et=new St(.25,32,32,Math.PI/2,Math.PI),Q=new A(Et,q);Q.scale.set(1.1,.6,.8),Q.position.set(0,.84,.5),Q.rotation.y=0;const g=new ve(.25,32),T=new A(g,E);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const L=new Xt;L.add(lt),L.add(Q),L.add(T),p.add(L);const U=new Tn;U.moveTo(0,0),U.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),U.bezierCurveTo(-.6,.3,0,.6,0,1),U.bezierCurveTo(0,.6,.6,.3,.6,0),U.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},X=new Nn(U,D),Z=new A(X,y);Z.scale.set(.35,.35,.35),Z.position.set(0,-.05,0),Z.rotation.y=Math.PI,Z.rotation.x=Math.PI,p.add(Z);const w=new St(.35,32,32),v=new A(w,K);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),p.add(v);const C=new A(w,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),p.add(C);const V=new ue(.2,.22,.6,32),z=new A(V,K);z.position.set(-.4,-1.05,0),p.add(z);const k=new A(V,E);k.position.set(.4,-1.05,0),p.add(k);const ht=new St(.3,32,32),ut=new A(ht,K);ut.scale.set(1,.72,1.5),ut.position.set(-.4,-1.45,.17),p.add(ut);const pt=new A(ht,E);pt.scale.set(1,.72,1.5),pt.position.set(.4,-1.45,.17),p.add(pt);const At=new St(.44,32,32),dt=new A(At,E);dt.position.set(-.15,-.45,-.4),p.add(dt);const xt=new A(At,E);xt.position.set(.15,-.45,-.4),p.add(xt);const Pt=new St(.18,32,32),Dt=new A(Pt,K);Dt.position.set(0,-.35,-.8),p.add(Dt);const bt=new St(.6,32,32,0,Math.PI*2,0,Math.PI/2),Ht=new It({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Ut=new A(bt,Ht);Ut.position.set(0,-.2,0),Ut.rotation.x=Math.PI,Ut.scale.set(1.25,1.25,1.25),mt.add(Ut);const kt=new An({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),B=new A(nt,kt);B.position.set(0,-.26,0),B.scale.set(.7,.7,.7),B.rotation.x=-Math.PI/2,B.renderOrder=1,mt.add(B),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Qt){const Kt=new Fe("X",{font:Qt,size:.2,depth:.05}),ie=new A(Kt,K);ie.position.set(-.3,.99,.53),ie.rotation.x=ee.degToRad(-5),ie.rotation.y=ee.degToRad(-15),p.add(ie);const he=new Fe("O",{font:Qt,size:.2,depth:.05}),xe=new A(he,K);xe.position.set(.14,.99,.53),xe.rotation.y=ee.degToRad(12),xe.rotation.x=ee.degToRad(-5),p.add(xe)}),Dt.renderOrder=1,p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let et=.05,tt=.06,wt=.2,Mt=.25,Bt=0,$t=0;d(),Oe(()=>t.bodyPosition,Qt=>{p.position.set(Qt.x,Qt.y,Qt.z)}),Oe(()=>t.cameraPosition,Qt=>{_.position.set(t.bodyPosition.x,1,Qt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(ai(),ci(ln,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:Fn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",B1,[Vt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Vt("div",z1,[Vt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),H1=li(G1,[["__scopeId","data-v-eb44448e"]]),k1={class:"pixel-controls"},V1={class:"side-buttons"},W1=On({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=jt(null);let i=jt(!1),s=jt(!1),o=jt(!1),r=jt(!1);const a=Ho(null),c=new Vn({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new Wn;const l=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5,Xn(()=>{if(e.value){let x=function(){const Tt=new Xt,re=new ho(.12,.05,16,100),ne=new te({color:16777215}),de=new A(re,ne);de.position.set(0,1.65,0),de.rotation.x=Math.PI/2,Tt.add(de);const le=new eo(.15,.3,32),Ce=new te({color:16711680}),_e=new A(le,Ce);_e.position.set(0,1.8,0),Tt.add(_e);const nn=new St(.05,32,32),pn=new te({color:16777215}),Ye=new A(nn,pn);return Ye.position.set(0,1.93,0),Tt.add(Ye),Tt.position.set(0,-.1,0),Tt},p=function(){const Tt=new Xt,re=new St(.15,32,32),ne=new te({color:16764057}),de=new A(re,ne);de.position.set(0,.4,0),Tt.add(de);const le=new eo(.08,.15,32);new te({color:16764057});const Ce=new A(le,H);Ce.position.set(-.1,.55,0),Ce.rotation.z=Math.PI/6,Tt.add(Ce);const _e=new A(le,H);_e.position.set(.1,.55,0),_e.rotation.z=-Math.PI/6,Tt.add(_e);const nn=new ue(.12,.15,.3,32),pn=new te({color:16764057}),Ye=new A(nn,pn);Ye.position.set(0,.2,0),Tt.add(Ye);const mn=new ue(.05,.05,.2,32),Yn=new te({color:16764057}),R=new A(mn,Yn);R.position.set(-.07,-.05,.05),Tt.add(R);const Y=new A(mn,Yn);Y.position.set(.07,-.05,.05),Tt.add(Y);const at=new ue(.04,.04,.2,32),st=new te({color:16764057}),j=new A(at,nt);j.position.set(-.15,.25,0),j.rotation.z=Math.PI/4,Tt.add(j);const Rt=new A(at,st);Rt.position.set(.15,.25,0),Rt.rotation.z=-Math.PI/4,Tt.add(Rt);const Nt=new ue(.03,.03,.25,32),Gt=new te({color:16764057}),Wt=new A(Nt,Gt);return Wt.position.set(0,.1,-.2),Wt.rotation.x=Math.PI/4,Tt.add(Wt),Tt.scale.set(.75,.75,.75),Tt.position.set(.2,0,.2),Tt},m=function(){const Tt=new Xt,re=new St(.2,32,32),ne=new te({color:16764057}),de=new A(re,ne);de.position.set(0,1,0),Tt.add(de);const le=new te({color:16777215}),Ce=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Sn of Ce){const hi=new St(Sn.size,16,16),di=new A(hi,le);di.position.set(Sn.x,Sn.y-.06,Sn.z-.01),Tt.add(di)}const _e=new te({color:16777215}),nn=new ue(.05,.06,.1,32),pn=new A(nn,_e);pn.position.set(-.06,.93,.18),pn.rotation.z=Math.PI/4;const Ye=new ue(.05,.06,.1,32),mn=new A(Ye,_e);mn.position.set(.06,.93,.18),mn.rotation.z=-Math.PI/4;const Yn=new ho(.12,.05,16,100),R=new te({color:16777215}),Y=new A(Yn,R);Y.position.set(0,1.15,0),Y.rotation.x=Math.PI/2,Tt.add(Y);const at=new eo(.15,.3,32),st=new te({color:16711680}),j=new A(at,st);j.position.set(0,1.3,0),Tt.add(j);const Rt=new St(.05,32,32),Nt=new te({color:16777215}),Gt=new A(Rt,Nt);Gt.position.set(0,1.43,0),Tt.add(Gt);const Wt=new ue(.2,.25,.6,32),Zt=new te({color:16711680}),Jt=new A(Wt,Zt);Jt.position.set(0,.5,0),Tt.add(Jt);const qt=new ue(.25,.25,.1,32),ge=new te({color:0}),ye=new A(qt,ge);ye.position.set(0,.4,.005),Tt.add(ye);const Re=new ue(.06,.06,.3,32),Ke=new te({color:16711680}),me=new A(Re,Ke);me.position.set(-.25,.75,0),me.rotation.z=Math.PI/4,Tt.add(me);const Yt=new A(Re,Ke);Yt.position.set(.25,.75,0),Yt.rotation.z=-Math.PI/4,Tt.add(Yt);const Ve=new St(.07,32,32),Ct=new te({color:16777215}),Le=new A(Ve,Ct);Le.position.set(-.35,.85,0),Tt.add(Le);const ze=new A(Ve,Ct);ze.position.set(.35,.85,0),Tt.add(ze);const we=new ue(.1,.1,.15,32),sn=new te({color:16711680}),Se=new ue(.08,.08,.4,32),$e=new te({color:0}),Rn=new A(Se,$e);Rn.position.set(-.1,.1,0),Tt.add(Rn);const He=new A(we,sn);He.position.set(-.1,-.05,0),Tt.add(He);const wn=new A(Se,$e);wn.position.set(.1,.1,0),Tt.add(wn);const ui=new A(we,sn);ui.position.set(.1,-.05,0),Tt.add(ui);const Bn=new St(.12,32,32),$n=new te({color:16711680}),zn=new A(Bn,$n);zn.scale.set(1,.7,1.5),zn.position.set(-.1,-.12,.12),Tt.add(zn);const rn=new A(Bn,$n);return rn.scale.set(1,.7,1.5),rn.position.set(.1,-.1,.12),Tt.add(rn),Tt.scale.set(.25,.25,.25),Tt.position.set(.2,.5,-0),Tt},b=function(){let Tt=0;function re(){requestAnimationFrame(re),Tt+=.08,he.position.y=.45+Math.sin(Tt)*.45,N.render(I,P)}re()},M=function(Tt){let re=1,ne=0;function de(){requestAnimationFrame(de),Tt.position.x+=.01*re,Tt.position.x>=.5?(re=-1,Tt.rotation.y=Math.PI):Tt.position.x<=-.5&&(re=1,Tt.rotation.y=0),ne+=.2,Tt.position.y=-.2+Math.sin(ne)*.01,Tt.position.z=.5,N.render(I,P)}de()},S=function(){const Tt=new Xt,re=new ii(.7,.8,.7),ne=new te({color:9127187}),de=new A(re,ne);de.position.set(0,.4,0),Tt.add(de);const le=new eo(.55,.25,4),Ce=new te({color:16777215}),_e=new A(le,Ce);_e.position.set(0,.9,0),_e.rotation.y=Math.PI/4,Tt.add(_e);const nn=new ii(.25,.35,.05),pn=new te({color:6636321}),Ye=new A(nn,pn);Ye.position.set(0,.2,.36),Tt.add(Ye);const mn=new ii(.15,.15,.05),Yn=new te({color:8900331}),R=new A(mn,Yn);R.position.set(-.2,.5,.38),Tt.add(R);const Y=new A(mn,Yn);Y.position.set(.2,.5,.38),Tt.add(Y);const at=new ii(.2,.4,.2),st=new te({color:8421504}),j=new A(at,st);j.position.set(0,.95,0),Tt.add(j);const Rt=new ho(.07,.04,32,100),Nt=new te({color:2263842}),Gt=new A(Rt,Nt);return Gt.position.set(0,.45,.38),Tt.add(Gt),Tt.position.set(.22,-.2,0),Tt.scale.set(.5,.5,.5),Tt},O=function(){requestAnimationFrame(O),i.value&&(q.rotation.y+=.03),s.value&&(q.rotation.y-=.03),o.value&&(q.rotation.x-=.03),r.value&&(q.rotation.x+=.03),a.value&&(a.value.rotation.y+=.1),N.render(I,P)};const I=new Wn,P=new Ne(75,window.innerWidth/window.innerHeight,.1,1e3),N=new Vn({antialias:!0,alpha:!0});N.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(N.domElement);const q=new Xt,y=new Xt;I.add(y);const E=new Ri(16777215,2);I.add(E);const K=new Ai(16777215,4);K.position.set(5,5,5),I.add(K);const W=new Ti(16777215,5,50);W.position.set(0,2,4),I.add(W);const J=new Yi,ot=J.load("/3d-bear-arts/assets/house.jpg");ot.wrapS=ot.wrapT=ke,ot.repeat.set(1,1),J.load("/3d-bear-arts/assets/house3.jpg"),new It({color:16777215,metalness:0,roughness:.05,transparent:!0,opacity:.5,clearcoat:1,clearcoatRoughness:.2,transmission:.6,ior:1.5,envMapIntensity:1,depthTest:!0});const G=new It({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.4,transmission:.95,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:fe}),nt=new It({color:16777215,metalness:.3,map:ot,roughness:.05,transparent:!0,opacity:.45,transmission:.7,ior:1.33,thickness:.2,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:fe}),H=new It({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:1,transmission:.8,ior:1.33,thickness:.3,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:fe}),mt=new QS().load(["/3d-bear-arts/assets/house.jpg","/3d-bear-arts/assets/house.jpg","/3d-bear-arts/assets/house.jpg","/3d-bear-arts/assets/house.jpg","/3d-bear-arts/assets/house.jpg","/3d-bear-arts/assets/house.jpg"]);I.environment=mt,new It({color:16777215,metalness:1,roughness:.1,envMap:mt,envMapIntensity:1.5,ior:1.25,depthWrite:!0,side:fe,transparent:!0,opacity:.7});const yt=new It({color:16777215,metalness:.05,map:ot,roughness:.2,transparent:!0,opacity:1,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:fe}),gt=new It({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Lt=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,zt=`
    uniform float time;
    uniform float opacity;
    varying vec2 vUv;

    void main() {
        vec2 p = vUv * 2.0 - vec2(1.0);
        float len = length(p);
        float angle = atan(p.y, p.x);

        // Soft pulsating wave for frosty effect
        float wave = sin(len * 15.0 - time * 2.0) * 0.2 + 0.8;

        // White and silver tones for icy crystal effect
        vec3 color1 = vec3(0.95, 0.95, 0.95); // Light silvery white
        vec3 color2 = vec3(0.8, 0.8, 0.85);   // Soft silver
        vec3 color3 = vec3(1.0, 1.0, 1.0);    // Pure white for highlights

        // Blend colors to achieve a frosty, metallic look
        vec3 color = mix(color1, color2, wave);
        color = mix(color, color3, sin(angle + time * 0.5) * 0.3 + 0.7);

        // Apply opacity for crystal transparency
        gl_FragColor = vec4(color, opacity); 
    }
`;new An({uniforms:{time:{value:0},opacity:{value:.5}},vertexShader:Lt,fragmentShader:zt,transparent:!0,depthWrite:!1});const rt=new St(1,32,32,0,Math.PI),ft=new A(rt,G),vt=new A(rt,nt);ft.scale.set(.85,.85,.8),vt.scale.set(.85,.85,.8),ft.position.y=-.2,vt.position.y=-.2,ft.rotation.y=Math.PI/2,vt.rotation.y=Math.PI*1.5;const F=new ve(1,32),ct=new A(F,yt);ct.scale.set(.85,.85,.8),ct.position.set(0,-.2,0),ct.rotation.y=Math.PI/2;const it=new Xt;it.add(ft),it.add(vt),it.add(ct),q.add(it);const lt=new St(.6,32,32,0,Math.PI),Et=new A(lt,H);Et.scale.set(1,.95,.95),Et.position.set(0,1,0),Et.rotation.y=Math.PI*1.5;const Q=new A(lt,G);Q.scale.set(1,.95,.95),Q.position.set(0,1,0),Q.rotation.y=Math.PI/2;const g=new ve(.6,32),T=new A(g,yt);T.position.set(0,1,0),T.rotation.y=Math.PI/2,T.scale.set(1,.95,.95);const L=new Xt;L.add(Et),L.add(Q),L.add(T),q.add(L);const U=new St(.6,32,32,0,Math.PI*2,0,Math.PI/2),D=new It({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7}),X=new A(U,D);X.position.set(0,-.2,0),X.rotation.x=Math.PI,X.scale.set(1.25,1.25,1.25),it.add(X);const Z=new It({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:fe,transparent:!1}),w=new A(F,Z);w.scale.set(.7,.7,.7),w.position.set(0,-.3,0),w.rotation.x=Math.PI/2,w.renderOrder=1,it.add(w),q.add(it);const v=new An({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
    `}),C=new A(F,v);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,it.add(C);const V=new St(.25,32,32),z=new A(V,H);z.position.set(-.45,1.35,-.1),q.add(z);const k=new A(V,G);k.position.set(.45,1.35,-.1),q.add(k);const ht=new St(.25,32,32,Math.PI/2,Math.PI),ut=new A(ht,H);ut.scale.set(1.1,.6,.8),ut.position.set(0,.84,.5),ut.rotation.y=Math.PI;const pt=new St(.25,32,32,Math.PI/2,Math.PI),At=new A(pt,G);At.scale.set(1.1,.6,.8),At.position.set(0,.84,.5),At.rotation.y=0;const dt=new ve(.25,32),xt=new A(dt,yt);xt.scale.set(.8,.6,.8),xt.position.set(0,.84,.5),xt.rotation.y=Math.PI/2;const Pt=new Xt;Pt.add(ut),Pt.add(At),Pt.add(xt),q.add(Pt),new It({color:8374441,metalness:1,roughness:.25,clearcoat:.7,clearcoatRoughness:.3});const Dt=new St(.35,32,32),bt=new A(Dt,H);bt.scale.set(.75,1.25,.65),bt.position.set(-.7,-.15,.2),q.add(bt);const Ht=new A(Dt,G);Ht.scale.set(.75,1.25,.65),Ht.position.set(.7,-.15,.2),q.add(Ht);const Ut=new ue(.2,.22,.6,32),kt=new A(Ut,H);kt.position.set(-.4,-1.05,0),q.add(kt);const B=new A(Ut,G);B.position.set(.4,-1.05,0),q.add(B);const _t=new St(.3,32,32),et=new A(_t,H);et.scale.set(1,.72,1.5),et.position.set(-.4,-1.45,.17),q.add(et);const tt=new A(_t,G);tt.scale.set(1,.72,1.5),tt.position.set(.4,-1.45,.17),q.add(tt);const wt=new St(.44,32,32),Mt=new A(wt,gt);Mt.position.set(-.15,-.45,-.4),q.add(Mt);const Bt=new A(wt,gt);Bt.position.set(.15,-.45,-.4),q.add(Bt);const $t=new St(.18,32,32),Qt=new A($t,gt);Qt.position.set(0,-.35,-.8),q.add(Qt),new Pi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Tt){const re=new Fe("X",{font:Tt,size:.2,depth:.05}),ne=new A(re,G);ne.position.set(-.3,.99,.53),ne.rotation.x=ee.degToRad(-5),ne.rotation.y=ee.degToRad(-15),q.add(ne);const de=new Fe("O",{font:Tt,size:.2,depth:.05}),le=new A(de,G);le.position.set(.14,.99,.53),le.rotation.y=ee.degToRad(12),le.rotation.x=ee.degToRad(-5),q.add(le)});const ie=x();q.add(ie),p();const he=m();q.add(he),b(),a.value=m(),q.add(a.value),M(a.value);const xe=S();q.add(xe);const Me=S();Me.position.set(-.1,-.2,0),Me.scale.set(.3,.3,.3),q.add(Me),q.scale.set(1.4,1.4,1.4),I.add(q),q.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),P.position.set(t.bodyPosition.x,1,t.cameraPosition),P.lookAt(t.bodyPosition.x,0,0),P.position.z=4,q.rotation.x=.1,O(),Oe(()=>t.bodyPosition,Tt=>{q.position.set(Tt.x,Tt.y,Tt.z)}),Oe(()=>t.cameraPosition,Tt=>{P.position.set(t.bodyPosition.x,1,Tt),P.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{P.aspect=window.innerWidth/window.innerHeight,P.updateProjectionMatrix(),N.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function f(){r.value=!0}function _(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(x,p)=>(ai(),ci(ln,null,[Vt("div",{ref_key:"threeCanvas",ref:e,class:Fn(n.background?"no-bg":"three-canvas")},null,2),Vt("div",k1,[Vt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),Vt("div",V1,[Vt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:_},"LEFT",32),Vt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:_},"RIGHT",32)]),Vt("button",{class:"pixel-btn down",onMousedown:f,onMouseup:_},"DOWN",32)])],64))}}),X1=li(W1,[["__scopeId","data-v-6acbe86b"]]),q1=[{path:"/3d-bear-arts/leather",name:"Leather",component:l1},{path:"/3d-bear-arts/pop-art",name:"Pop",component:h1},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:m1},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:x1},{path:"/3d-bear-arts/water",name:"Water Bear",component:S1},{path:"/3d-bear-arts/",name:"Water",component:D1},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:O1},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:H1},{path:"/3d-bear-arts/",name:"Santa",component:X1},{path:"/3d-bear-arts/half",name:"HalfBear",component:a1}],Y1=Qg({history:Pg(),routes:q1}),Ep=Y0(J0);Ep.use(Y1);Ep.mount("#app");
