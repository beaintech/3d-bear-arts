(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Oc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ce={},ir=[],fi=()=>{},Ep=()=>!1,xa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Bc=n=>n.startsWith("onUpdate:"),rn=Object.assign,zc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},bp=Object.prototype.hasOwnProperty,we=(n,t)=>bp.call(n,t),oe=Array.isArray,Or=n=>ya(n)==="[object Map]",Tp=n=>ya(n)==="[object Set]",re=n=>typeof n=="function",en=n=>typeof n=="string",Mr=n=>typeof n=="symbol",Xe=n=>n!==null&&typeof n=="object",wd=n=>(Xe(n)||re(n))&&re(n.then)&&re(n.catch),Ap=Object.prototype.toString,ya=n=>Ap.call(n),Rp=n=>ya(n).slice(8,-1),Pp=n=>ya(n)==="[object Object]",Gc=n=>en(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Br=Oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Cp=/-(\w)/g,Fn=Ma(n=>n.replace(Cp,(t,e)=>e?e.toUpperCase():"")),Ip=/\B([A-Z])/g,Ds=Ma(n=>n.replace(Ip,"-$1").toLowerCase()),wa=Ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ha=Ma(n=>n?`on${wa(n)}`:""),as=(n,t)=>!Object.is(n,t),ka=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Sd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Lp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Eu;const Ed=()=>Eu||(Eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hc(n){if(oe(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=en(i)?Fp(i):Hc(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(en(n)||Xe(n))return n}const Dp=/;(?![^(]*\))/g,Up=/:([^]+)/,Np=/\/\*[^]*?\*\//g;function Fp(n){const t={};return n.replace(Np,"").split(Dp).forEach(e=>{if(e){const i=e.split(Up);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Bn(n){let t="";if(en(n))t=n;else if(oe(n))for(let e=0;e<n.length;e++){const i=Bn(n[e]);i&&(t+=i+" ")}else if(Xe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bp=Oc(Op);function bd(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cn;class zp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Cn,!t&&Cn&&(this.index=(Cn.scopes||(Cn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Cn;try{return Cn=this,t()}finally{Cn=e}}}on(){Cn=this}off(){Cn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Gp(){return Cn}let De;const Va=new WeakSet;class Td{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Cn&&Cn.active&&Cn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Va.has(this)&&(Va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bu(this),Pd(this);const t=De,e=Zn;De=this,Zn=!0;try{return this.fn()}finally{Cd(this),De=t,Zn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Wc(t);this.deps=this.depsTail=void 0,bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nl(this)&&this.run()}get dirty(){return Nl(this)}}let Ad=0,Qs;function Rd(n){n.flags|=8,n.next=Qs,Qs=n}function kc(){Ad++}function Vc(){if(--Ad>0)return;let n;for(;Qs;){let t=Qs,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=Qs,Qs=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Pd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Cd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Wc(i),Hp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Nl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Id(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Id(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Kr))return;n.globalVersion=Kr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Nl(n)){n.flags&=-3;return}const e=De,i=Zn;De=n,Zn=!0;try{Pd(n);const s=n.fn(n._value);(t.version===0||as(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{De=e,Zn=i,Cd(n),n.flags&=-3}}function Wc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Wc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Hp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Zn=!0;const Ld=[];function cs(){Ld.push(Zn),Zn=!1}function us(){const n=Ld.pop();Zn=n===void 0?!0:n}function bu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=De;De=void 0;try{t()}finally{De=e}}}let Kr=0;class kp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!De||!Zn||De===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==De)e=this.activeLink=new kp(De,this),De.deps?(e.prevDep=De.depsTail,De.depsTail.nextDep=e,De.depsTail=e):De.deps=De.depsTail=e,Dd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=De.depsTail,e.nextDep=void 0,De.depsTail.nextDep=e,De.depsTail=e,De.deps===e&&(De.deps=i)}return e}trigger(t){this.version++,Kr++,this.notify(t)}notify(t){kc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Vc()}}}function Dd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Dd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Fl=new WeakMap,Rs=Symbol(""),Ol=Symbol(""),Zr=Symbol("");function fn(n,t,e){if(Zn&&De){let i=Fl.get(n);i||Fl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Xc),s.target=n,s.map=i,s.key=e),s.track()}}function Oi(n,t,e,i,s,r){const o=Fl.get(n);if(!o){Kr++;return}const a=l=>{l&&l.trigger()};if(kc(),t==="clear")o.forEach(a);else{const l=oe(n),c=l&&Gc(e);if(l&&e==="length"){const h=Number(i);o.forEach((u,d)=>{(d==="length"||d===Zr||!Mr(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(o.get(e)),c&&a(o.get(Zr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Rs)),Or(n)&&a(o.get(Ol)));break;case"delete":l||(a(o.get(Rs)),Or(n)&&a(o.get(Ol)));break;case"set":Or(n)&&a(o.get(Rs));break}}Vc()}function Ns(n){const t=Ee(n);return t===n?t:(fn(t,"iterate",Zr),Jn(n)?t:t.map(vn))}function qc(n){return fn(n=Ee(n),"iterate",Zr),n}const Vp={__proto__:null,[Symbol.iterator](){return Wa(this,Symbol.iterator,vn)},concat(...n){return Ns(this).concat(...n.map(t=>oe(t)?Ns(t):t))},entries(){return Wa(this,"entries",n=>(n[1]=vn(n[1]),n))},every(n,t){return wi(this,"every",n,t,void 0,arguments)},filter(n,t){return wi(this,"filter",n,t,e=>e.map(vn),arguments)},find(n,t){return wi(this,"find",n,t,vn,arguments)},findIndex(n,t){return wi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return wi(this,"findLast",n,t,vn,arguments)},findLastIndex(n,t){return wi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return wi(this,"forEach",n,t,void 0,arguments)},includes(...n){return Xa(this,"includes",n)},indexOf(...n){return Xa(this,"indexOf",n)},join(n){return Ns(this).join(n)},lastIndexOf(...n){return Xa(this,"lastIndexOf",n)},map(n,t){return wi(this,"map",n,t,void 0,arguments)},pop(){return br(this,"pop")},push(...n){return br(this,"push",n)},reduce(n,...t){return Tu(this,"reduce",n,t)},reduceRight(n,...t){return Tu(this,"reduceRight",n,t)},shift(){return br(this,"shift")},some(n,t){return wi(this,"some",n,t,void 0,arguments)},splice(...n){return br(this,"splice",n)},toReversed(){return Ns(this).toReversed()},toSorted(n){return Ns(this).toSorted(n)},toSpliced(...n){return Ns(this).toSpliced(...n)},unshift(...n){return br(this,"unshift",n)},values(){return Wa(this,"values",vn)}};function Wa(n,t,e){const i=qc(n),s=i[t]();return i!==n&&!Jn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const Wp=Array.prototype;function wi(n,t,e,i,s,r){const o=qc(n),a=o!==n&&!Jn(n),l=o[t];if(l!==Wp[t]){const u=l.apply(n,r);return a?vn(u):u}let c=e;o!==n&&(a?c=function(u,d){return e.call(this,vn(u),d,n)}:e.length>2&&(c=function(u,d){return e.call(this,u,d,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function Tu(n,t,e,i){const s=qc(n);let r=e;return s!==n&&(Jn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,vn(a),l,n)}),s[t](r,...i)}function Xa(n,t,e){const i=Ee(n);fn(i,"iterate",Zr);const s=i[t](...e);return(s===-1||s===!1)&&Kc(e[0])?(e[0]=Ee(e[0]),i[t](...e)):s}function br(n,t,e=[]){cs(),kc();const i=Ee(n)[t].apply(n,e);return Vc(),us(),i}const Xp=Oc("__proto__,__v_isRef,__isVue"),Ud=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mr));function qp(n){Mr(n)||(n=String(n));const t=Ee(this);return fn(t,"has",n),t.hasOwnProperty(n)}class Nd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?rm:zd:r?Bd:Od).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=oe(t);if(!s){let l;if(o&&(l=Vp[e]))return l;if(e==="hasOwnProperty")return qp}const a=Reflect.get(t,e,hn(t)?t:i);return(Mr(e)?Ud.has(e):Xp(e))||(s||fn(t,"get",e),r)?a:hn(a)?o&&Gc(e)?a:a.value:Xe(a)?s?Hd(a):Ea(a):a}}class Fd extends Nd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=Ps(r);if(!Jn(i)&&!Ps(i)&&(r=Ee(r),i=Ee(i)),!oe(t)&&hn(r)&&!hn(i))return l?!1:(r.value=i,!0)}const o=oe(t)&&Gc(e)?Number(e)<t.length:we(t,e),a=Reflect.set(t,e,i,hn(t)?t:s);return t===Ee(s)&&(o?as(i,r)&&Oi(t,"set",e,i):Oi(t,"add",e,i)),a}deleteProperty(t,e){const i=we(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Oi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Mr(e)||!Ud.has(e))&&fn(t,"has",e),i}ownKeys(t){return fn(t,"iterate",oe(t)?"length":Rs),Reflect.ownKeys(t)}}class Yp extends Nd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const $p=new Fd,jp=new Yp,Kp=new Fd(!0);const Yc=n=>n,Sa=n=>Reflect.getPrototypeOf(n);function xo(n,t,e=!1,i=!1){n=n.__v_raw;const s=Ee(n),r=Ee(t);e||(as(t,r)&&fn(s,"get",t),fn(s,"get",r));const{has:o}=Sa(s),a=i?Yc:e?Zc:vn;if(o.call(s,t))return a(n.get(t));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(t)}function yo(n,t=!1){const e=this.__v_raw,i=Ee(e),s=Ee(n);return t||(as(n,s)&&fn(i,"has",n),fn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function Mo(n,t=!1){return n=n.__v_raw,!t&&fn(Ee(n),"iterate",Rs),Reflect.get(n,"size",n)}function Au(n,t=!1){!t&&!Jn(n)&&!Ps(n)&&(n=Ee(n));const e=Ee(this);return Sa(e).has.call(e,n)||(e.add(n),Oi(e,"add",n,n)),this}function Ru(n,t,e=!1){!e&&!Jn(t)&&!Ps(t)&&(t=Ee(t));const i=Ee(this),{has:s,get:r}=Sa(i);let o=s.call(i,n);o||(n=Ee(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,t),o?as(t,a)&&Oi(i,"set",n,t):Oi(i,"add",n,t),this}function Pu(n){const t=Ee(this),{has:e,get:i}=Sa(t);let s=e.call(t,n);s||(n=Ee(n),s=e.call(t,n)),i&&i.call(t,n);const r=t.delete(n);return s&&Oi(t,"delete",n,void 0),r}function Cu(){const n=Ee(this),t=n.size!==0,e=n.clear();return t&&Oi(n,"clear",void 0,void 0),e}function wo(n,t){return function(i,s){const r=this,o=r.__v_raw,a=Ee(o),l=t?Yc:n?Zc:vn;return!n&&fn(a,"iterate",Rs),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function So(n,t,e){return function(...i){const s=this.__v_raw,r=Ee(s),o=Or(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=e?Yc:t?Zc:vn;return!t&&fn(r,"iterate",l?Ol:Rs),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function Yi(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Zp(){const n={get(r){return xo(this,r)},get size(){return Mo(this)},has:yo,add:Au,set:Ru,delete:Pu,clear:Cu,forEach:wo(!1,!1)},t={get(r){return xo(this,r,!1,!0)},get size(){return Mo(this)},has:yo,add(r){return Au.call(this,r,!0)},set(r,o){return Ru.call(this,r,o,!0)},delete:Pu,clear:Cu,forEach:wo(!1,!0)},e={get(r){return xo(this,r,!0)},get size(){return Mo(this,!0)},has(r){return yo.call(this,r,!0)},add:Yi("add"),set:Yi("set"),delete:Yi("delete"),clear:Yi("clear"),forEach:wo(!0,!1)},i={get(r){return xo(this,r,!0,!0)},get size(){return Mo(this,!0)},has(r){return yo.call(this,r,!0)},add:Yi("add"),set:Yi("set"),delete:Yi("delete"),clear:Yi("clear"),forEach:wo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=So(r,!1,!1),e[r]=So(r,!0,!1),t[r]=So(r,!1,!0),i[r]=So(r,!0,!0)}),[n,e,t,i]}const[Jp,Qp,tm,em]=Zp();function $c(n,t){const e=t?n?em:tm:n?Qp:Jp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(we(e,s)&&s in i?e:i,s,r)}const nm={get:$c(!1,!1)},im={get:$c(!1,!0)},sm={get:$c(!0,!1)};const Od=new WeakMap,Bd=new WeakMap,zd=new WeakMap,rm=new WeakMap;function om(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function am(n){return n.__v_skip||!Object.isExtensible(n)?0:om(Rp(n))}function Ea(n){return Ps(n)?n:jc(n,!1,$p,nm,Od)}function Gd(n){return jc(n,!1,Kp,im,Bd)}function Hd(n){return jc(n,!0,jp,sm,zd)}function jc(n,t,e,i,s){if(!Xe(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=am(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function zr(n){return Ps(n)?zr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ps(n){return!!(n&&n.__v_isReadonly)}function Jn(n){return!!(n&&n.__v_isShallow)}function Kc(n){return n?!!n.__v_raw:!1}function Ee(n){const t=n&&n.__v_raw;return t?Ee(t):n}function lm(n){return!we(n,"__v_skip")&&Object.isExtensible(n)&&Sd(n,"__v_skip",!0),n}const vn=n=>Xe(n)?Ea(n):n,Zc=n=>Xe(n)?Hd(n):n;function hn(n){return n?n.__v_isRef===!0:!1}function Kt(n){return kd(n,!1)}function Gr(n){return kd(n,!0)}function kd(n,t){return hn(n)?n:new cm(n,t)}class cm{constructor(t,e){this.dep=new Xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Ee(t),this._value=e?t:vn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Jn(t)||Ps(t);t=i?t:Ee(t),as(t,e)&&(this._rawValue=t,this._value=i?t:vn(t),this.dep.trigger())}}function sr(n){return hn(n)?n.value:n}const um={get:(n,t,e)=>t==="__v_raw"?n:sr(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return hn(s)&&!hn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Vd(n){return zr(n)?n:new Proxy(n,um)}class hm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Rd(this),!0}get value(){const t=this.dep.track();return Id(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function dm(n,t,e=!1){let i,s;return re(n)?i=n:(i=n.get,s=n.set),new hm(i,s,e)}const Eo={},la=new WeakMap;let Ms;function fm(n,t=!1,e=Ms){if(e){let i=la.get(e);i||la.set(e,i=[]),i.push(n)}}function pm(n,t,e=Ce){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=S=>s?S:Jn(S)||s===!1||s===0?Ui(S,1):Ui(S);let h,u,d,f,_=!1,x=!1;if(hn(n)?(u=()=>n.value,_=Jn(n)):zr(n)?(u=()=>c(n),_=!0):oe(n)?(x=!0,_=n.some(S=>zr(S)||Jn(S)),u=()=>n.map(S=>{if(hn(S))return S.value;if(zr(S))return c(S);if(re(S))return l?l(S,2):S()})):re(n)?t?u=l?()=>l(n,2):n:u=()=>{if(d){cs();try{d()}finally{us()}}const S=Ms;Ms=h;try{return l?l(n,3,[f]):n(f)}finally{Ms=S}}:u=fi,t&&s){const S=u,O=s===!0?1/0:s;u=()=>Ui(S(),O)}const p=Gp(),m=()=>{h.stop(),p&&zc(p.effects,h)};if(r&&t){const S=t;t=(...O)=>{S(...O),m()}}let b=x?new Array(n.length).fill(Eo):Eo;const w=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(t){const O=h.run();if(s||_||(x?O.some((I,P)=>as(I,b[P])):as(O,b))){d&&d();const I=Ms;Ms=h;try{const P=[O,b===Eo?void 0:x&&b[0]===Eo?[]:b,f];l?l(t,3,P):t(...P),b=O}finally{Ms=I}}}else h.run()};return a&&a(w),h=new Td(u),h.scheduler=o?()=>o(w,!1):w,f=S=>fm(S,!1,h),d=h.onStop=()=>{const S=la.get(h);if(S){if(l)l(S,4);else for(const O of S)O();la.delete(h)}},t?i?w(!0):b=h.run():o?o(w.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function Ui(n,t=1/0,e){if(t<=0||!Xe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,hn(n))Ui(n.value,t,e);else if(oe(n))for(let i=0;i<n.length;i++)Ui(n[i],t,e);else if(Tp(n)||Or(n))n.forEach(i=>{Ui(i,t,e)});else if(Pp(n)){for(const i in n)Ui(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ui(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ho(n,t,e,i){try{return i?n(...i):n()}catch(s){ba(s,t,e)}}function mi(n,t,e,i){if(re(n)){const s=ho(n,t,e,i);return s&&wd(s)&&s.catch(r=>{ba(r,t,e)}),s}if(oe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(mi(n[r],t,e,i));return s}}function ba(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Ce;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){cs(),ho(r,null,10,[n,l,c]),us();return}}mm(n,e,s,i,o)}function mm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let Jr=!1,Bl=!1;const xn=[];let ui=0;const rr=[];let es=null,Ks=0;const Wd=Promise.resolve();let Jc=null;function Xd(n){const t=Jc||Wd;return n?t.then(this?n.bind(this):n):t}function gm(n){let t=Jr?ui+1:0,e=xn.length;for(;t<e;){const i=t+e>>>1,s=xn[i],r=Qr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Qc(n){if(!(n.flags&1)){const t=Qr(n),e=xn[xn.length-1];!e||!(n.flags&2)&&t>=Qr(e)?xn.push(n):xn.splice(gm(t),0,n),n.flags|=1,qd()}}function qd(){!Jr&&!Bl&&(Bl=!0,Jc=Wd.then($d))}function _m(n){oe(n)?rr.push(...n):es&&n.id===-1?es.splice(Ks+1,0,n):n.flags&1||(rr.push(n),n.flags|=1),qd()}function Iu(n,t,e=Jr?ui+1:0){for(;e<xn.length;e++){const i=xn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;xn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yd(n){if(rr.length){const t=[...new Set(rr)].sort((e,i)=>Qr(e)-Qr(i));if(rr.length=0,es){es.push(...t);return}for(es=t,Ks=0;Ks<es.length;Ks++){const e=es[Ks];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}es=null,Ks=0}}const Qr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function $d(n){Bl=!1,Jr=!0;try{for(ui=0;ui<xn.length;ui++){const t=xn[ui];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ho(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ui<xn.length;ui++){const t=xn[ui];t&&(t.flags&=-2)}ui=0,xn.length=0,Yd(),Jr=!1,Jc=null,(xn.length||rr.length)&&$d()}}let In=null,jd=null;function ca(n){const t=In;return In=n,jd=n&&n.type.__scopeId||null,t}function Ci(n,t=In,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Hu(-1);const r=ca(t);let o;try{o=n(...s)}finally{ca(r),i._d&&Hu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function vm(n,t){if(In===null)return n;const e=Ca(In),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=Ce]=t[s];r&&(re(r)&&(r={mounted:r,updated:r}),r.deep&&Ui(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function fs(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(cs(),mi(l,e,8,[n.el,a,n,t]),us())}}const xm=Symbol("_vte"),ym=n=>n.__isTeleport;function tu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,tu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function zn(n,t){return re(n)?rn({name:n.name},t,{setup:n}):n}function Kd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function zl(n,t,e,i,s=!1){if(oe(n)){n.forEach((_,x)=>zl(_,t&&(oe(t)?t[x]:t),e,i,s));return}if(Hr(i)&&!s)return;const r=i.shapeFlag&4?Ca(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,h=a.refs===Ce?a.refs={}:a.refs,u=a.setupState,d=Ee(u),f=u===Ce?()=>!1:_=>we(d,_);if(c!=null&&c!==l&&(en(c)?(h[c]=null,f(c)&&(u[c]=null)):hn(c)&&(c.value=null)),re(l))ho(l,a,12,[o,h]);else{const _=en(l),x=hn(l);if(_||x){const p=()=>{if(n.f){const m=_?f(l)?u[l]:h[l]:l.value;s?oe(m)&&zc(m,r):oe(m)?m.includes(r)||m.push(r):_?(h[l]=[r],f(l)&&(u[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else _?(h[l]=o,f(l)&&(u[l]=o)):x&&(l.value=o,n.k&&(h[n.k]=o))};o?(p.id=-1,Pn(p,e)):p()}}}const Hr=n=>!!n.type.__asyncLoader,Zd=n=>n.type.__isKeepAlive;function Mm(n,t){Jd(n,"a",t)}function wm(n,t){Jd(n,"da",t)}function Jd(n,t,e=un){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ta(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Zd(s.parent.vnode)&&Sm(i,t,e,s),s=s.parent}}function Sm(n,t,e,i){const s=Ta(t,n,i,!0);eu(()=>{zc(i[t],s)},e)}function Ta(n,t,e=un,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{cs();const a=fo(e),l=mi(t,e,n,o);return a(),us(),l});return i?s.unshift(r):s.push(r),r}}const Gi=n=>(t,e=un)=>{(!Pa||n==="sp")&&Ta(n,(...i)=>t(...i),e)},Em=Gi("bm"),si=Gi("m"),bm=Gi("bu"),Tm=Gi("u"),Am=Gi("bum"),eu=Gi("um"),Rm=Gi("sp"),Pm=Gi("rtg"),Cm=Gi("rtc");function Im(n,t=un){Ta("ec",n,t)}const Lm="components";function Lu(n,t){return Um(Lm,n,!0,t)||n}const Dm=Symbol.for("v-ndc");function Um(n,t,e=!0,i=!1){const s=In||un;if(s){const r=s.type;{const a=M0(r,!1);if(a&&(a===t||a===Fn(t)||a===wa(Fn(t))))return r}const o=Du(s[n]||r[n],t)||Du(s.appContext[n],t);return!o&&i?r:o}}function Du(n,t){return n&&(n[t]||n[Fn(t)]||n[wa(Fn(t))])}const Gl=n=>n?vf(n)?Ca(n):Gl(n.parent):null,kr=rn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Gl(n.parent),$root:n=>Gl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>nu(n),$forceUpdate:n=>n.f||(n.f=()=>{Qc(n.update)}),$nextTick:n=>n.n||(n.n=Xd.bind(n.proxy)),$watch:n=>e0.bind(n)}),qa=(n,t)=>n!==Ce&&!n.__isScriptSetup&&we(n,t),Nm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(qa(i,t))return o[t]=1,i[t];if(s!==Ce&&we(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&we(c,t))return o[t]=3,r[t];if(e!==Ce&&we(e,t))return o[t]=4,e[t];Hl&&(o[t]=0)}}const h=kr[t];let u,d;if(h)return t==="$attrs"&&fn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Ce&&we(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,we(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return qa(s,t)?(s[t]=e,!0):i!==Ce&&we(i,t)?(i[t]=e,!0):we(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==Ce&&we(n,o)||qa(t,o)||(a=r[0])&&we(a,o)||we(i,o)||we(kr,o)||we(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:we(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Uu(n){return oe(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Hl=!0;function Fm(n){const t=nu(n),e=n.proxy,i=n.ctx;Hl=!1,t.beforeCreate&&Nu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:_,activated:x,deactivated:p,beforeDestroy:m,beforeUnmount:b,destroyed:w,unmounted:S,render:O,renderTracked:I,renderTriggered:P,errorCaptured:F,serverPrefetch:q,expose:y,inheritAttrs:E,components:Z,directives:k,filters:J}=t;if(c&&Om(c,i,null),o)for(const Q in o){const X=o[Q];re(X)&&(i[Q]=X.bind(e))}if(s){const Q=s.call(e,e);Xe(Q)&&(n.data=Ea(Q))}if(Hl=!0,r)for(const Q in r){const X=r[Q],mt=re(X)?X.bind(e,e):re(X.get)?X.get.bind(e,e):fi,yt=!re(X)&&re(X.set)?X.set.bind(e):fi,_t=qn({get:mt,set:yt});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>_t.value,set:It=>_t.value=It})}if(a)for(const Q in a)Qd(a[Q],i,e,Q);if(l){const Q=re(l)?l.call(e):l;Reflect.ownKeys(Q).forEach(X=>{Jo(X,Q[X])})}h&&Nu(h,n,"c");function G(Q,X){oe(X)?X.forEach(mt=>Q(mt.bind(e))):X&&Q(X.bind(e))}if(G(Em,u),G(si,d),G(bm,f),G(Tm,_),G(Mm,x),G(wm,p),G(Im,F),G(Cm,I),G(Pm,P),G(Am,b),G(eu,S),G(Rm,q),oe(y))if(y.length){const Q=n.exposed||(n.exposed={});y.forEach(X=>{Object.defineProperty(Q,X,{get:()=>e[X],set:mt=>e[X]=mt})})}else n.exposed||(n.exposed={});O&&n.render===fi&&(n.render=O),E!=null&&(n.inheritAttrs=E),Z&&(n.components=Z),k&&(n.directives=k),q&&Kd(n)}function Om(n,t,e=fi){oe(n)&&(n=kl(n));for(const i in n){const s=n[i];let r;Xe(s)?"default"in s?r=Bi(s.from||i,s.default,!0):r=Bi(s.from||i):r=Bi(s),hn(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Nu(n,t,e){mi(oe(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Qd(n,t,e,i){let s=i.includes(".")?pf(e,i):()=>e[i];if(en(n)){const r=t[n];re(r)&&He(s,r)}else if(re(n))He(s,n.bind(e));else if(Xe(n))if(oe(n))n.forEach(r=>Qd(r,t,e,i));else{const r=re(n.handler)?n.handler.bind(e):t[n.handler];re(r)&&He(s,r,n)}}function nu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ua(l,c,o,!0)),ua(l,t,o)),Xe(t)&&r.set(t,l),l}function ua(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ua(n,r,e,!0),s&&s.forEach(o=>ua(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Bm[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Bm={data:Fu,props:Ou,emits:Ou,methods:Nr,computed:Nr,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:Nr,directives:Nr,watch:Gm,provide:Fu,inject:zm};function Fu(n,t){return t?n?function(){return rn(re(n)?n.call(this,this):n,re(t)?t.call(this,this):t)}:t:n}function zm(n,t){return Nr(kl(n),kl(t))}function kl(n){if(oe(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function mn(n,t){return n?[...new Set([].concat(n,t))]:t}function Nr(n,t){return n?rn(Object.create(null),n,t):t}function Ou(n,t){return n?oe(n)&&oe(t)?[...new Set([...n,...t])]:rn(Object.create(null),Uu(n),Uu(t??{})):t}function Gm(n,t){if(!n)return t;if(!t)return n;const e=rn(Object.create(null),n);for(const i in t)e[i]=mn(n[i],t[i]);return e}function tf(){return{app:null,config:{isNativeTag:Ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hm=0;function km(n,t){return function(i,s=null){re(i)||(i=rn({},i)),s!=null&&!Xe(s)&&(s=null);const r=tf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Hm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:S0,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&re(h.install)?(o.add(h),h.install(c,...u)):re(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,d){if(!l){const f=c._ceVNode||$e(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(f,h):n(f,h,d),l=!0,c._container=h,h.__vue_app__=c,Ca(f.component)}},onUnmount(h){a.push(h)},unmount(){l&&(mi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=or;or=c;try{return h()}finally{or=u}}};return c}}let or=null;function Jo(n,t){if(un){let e=un.provides;const i=un.parent&&un.parent.provides;i===e&&(e=un.provides=Object.create(i)),e[n]=t}}function Bi(n,t,e=!1){const i=un||In;if(i||or){const s=or?or._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&re(t)?t.call(i&&i.proxy):t}}const ef={},nf=()=>Object.create(ef),sf=n=>Object.getPrototypeOf(n)===ef;function Vm(n,t,e,i=!1){const s={},r=nf();n.propsDefaults=Object.create(null),rf(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Gd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Wm(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Ee(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Aa(n.emitsOptions,d))continue;const f=t[d];if(l)if(we(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const _=Fn(d);s[_]=Vl(l,a,_,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{rf(n,t,s,r)&&(c=!0);let h;for(const u in a)(!t||!we(t,u)&&((h=Ds(u))===u||!we(t,h)))&&(l?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=Vl(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!t||!we(t,u))&&(delete r[u],c=!0)}c&&Oi(n.attrs,"set","")}function rf(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Br(l))continue;const c=t[l];let h;s&&we(s,h=Fn(l))?!r||!r.includes(h)?e[h]=c:(a||(a={}))[h]=c:Aa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ee(e),c=a||Ce;for(let h=0;h<r.length;h++){const u=r[h];e[u]=Vl(s,l,u,c[u],n,!we(c,u))}}return o}function Vl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=we(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&re(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=fo(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ds(e))&&(i=!0))}return i}const Xm=new WeakMap;function of(n,t,e=!1){const i=e?Xm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!re(n)){const h=u=>{l=!0;const[d,f]=of(u,t,!0);rn(o,d),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return Xe(n)&&i.set(n,ir),ir;if(oe(r))for(let h=0;h<r.length;h++){const u=Fn(r[h]);Bu(u)&&(o[u]=Ce)}else if(r)for(const h in r){const u=Fn(h);if(Bu(u)){const d=r[h],f=o[u]=oe(d)||re(d)?{type:d}:rn({},d),_=f.type;let x=!1,p=!0;if(oe(_))for(let m=0;m<_.length;++m){const b=_[m],w=re(b)&&b.name;if(w==="Boolean"){x=!0;break}else w==="String"&&(p=!1)}else x=re(_)&&_.name==="Boolean";f[0]=x,f[1]=p,(x||we(f,"default"))&&a.push(u)}}const c=[o,a];return Xe(n)&&i.set(n,c),c}function Bu(n){return n[0]!=="$"&&!Br(n)}const af=n=>n[0]==="_"||n==="$stable",iu=n=>oe(n)?n.map(hi):[hi(n)],qm=(n,t,e)=>{if(t._n)return t;const i=Ci((...s)=>iu(t(...s)),e);return i._c=!1,i},lf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(af(s))continue;const r=n[s];if(re(r))t[s]=qm(s,r,i);else if(r!=null){const o=iu(r);t[s]=()=>o}}},cf=(n,t)=>{const e=iu(t);n.slots.default=()=>e},uf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},Ym=(n,t,e)=>{const i=n.slots=nf();if(n.vnode.shapeFlag&32){const s=t._;s?(uf(i,t,e),e&&Sd(i,"_",s,!0)):lf(t,i)}else t&&cf(n,t)},$m=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ce;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:uf(s,t,e):(r=!t.$stable,lf(t,s)),o=t}else t&&(cf(n,t),o={default:1});if(r)for(const a in s)!af(a)&&o[a]==null&&delete s[a]},Pn=l0;function jm(n){return Km(n)}function Km(n,t){const e=Ed();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=fi,insertStaticContent:_}=n,x=(g,T,L,N=null,D=null,V=null,K=void 0,M=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!Tr(g,T)&&(N=U(g),It(g,D,V,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:W,shapeFlag:z}=T;switch(C){case Ra:p(g,T,L,N);break;case to:m(g,T,L,N);break;case ja:g==null&&b(T,L,N,K);break;case cn:Z(g,T,L,N,D,V,K,M,v);break;default:z&1?O(g,T,L,N,D,V,K,M,v):z&6?k(g,T,L,N,D,V,K,M,v):(z&64||z&128)&&C.process(g,T,L,N,D,V,K,M,v,ut)}W!=null&&D&&zl(W,g&&g.ref,V,T||g,!T)},p=(g,T,L,N)=>{if(g==null)i(T.el=a(T.children),L,N);else{const D=T.el=g.el;T.children!==g.children&&c(D,T.children)}},m=(g,T,L,N)=>{g==null?i(T.el=l(T.children||""),L,N):T.el=g.el},b=(g,T,L,N)=>{[g.el,g.anchor]=_(g.children,T,L,N,g.el,g.anchor)},w=({el:g,anchor:T},L,N)=>{let D;for(;g&&g!==T;)D=d(g),i(g,L,N),g=D;i(T,L,N)},S=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=d(g),s(g),g=L;s(T)},O=(g,T,L,N,D,V,K,M,v)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),g==null?I(T,L,N,D,V,K,M,v):q(g,T,D,V,K,M,v)},I=(g,T,L,N,D,V,K,M)=>{let v,C;const{props:W,shapeFlag:z,transition:H,dirs:ht}=g;if(v=g.el=o(g.type,V,W&&W.is,W),z&8?h(v,g.children):z&16&&F(g.children,v,null,N,D,Ya(g,V),K,M),ht&&fs(g,null,N,"created"),P(v,g,g.scopeId,K,N),W){for(const pt in W)pt!=="value"&&!Br(pt)&&r(v,pt,null,W[pt],V,N);"value"in W&&r(v,"value",null,W.value,V),(C=W.onVnodeBeforeMount)&&ci(C,N,g)}ht&&fs(g,null,N,"beforeMount");const lt=Zm(D,H);lt&&H.beforeEnter(v),i(v,T,L),((C=W&&W.onVnodeMounted)||lt||ht)&&Pn(()=>{C&&ci(C,N,g),lt&&H.enter(v),ht&&fs(g,null,N,"mounted")},D)},P=(g,T,L,N,D)=>{if(L&&f(g,L),N)for(let V=0;V<N.length;V++)f(g,N[V]);if(D){let V=D.subTree;if(T===V||gf(V.type)&&(V.ssContent===T||V.ssFallback===T)){const K=D.vnode;P(g,K,K.scopeId,K.slotScopeIds,D.parent)}}},F=(g,T,L,N,D,V,K,M,v=0)=>{for(let C=v;C<g.length;C++){const W=g[C]=M?ns(g[C]):hi(g[C]);x(null,W,T,L,N,D,V,K,M)}},q=(g,T,L,N,D,V,K)=>{const M=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:W}=T;v|=g.patchFlag&16;const z=g.props||Ce,H=T.props||Ce;let ht;if(L&&ps(L,!1),(ht=H.onVnodeBeforeUpdate)&&ci(ht,L,T,g),W&&fs(T,g,L,"beforeUpdate"),L&&ps(L,!0),(z.innerHTML&&H.innerHTML==null||z.textContent&&H.textContent==null)&&h(M,""),C?y(g.dynamicChildren,C,M,L,N,Ya(T,D),V):K||X(g,T,M,null,L,N,Ya(T,D),V,!1),v>0){if(v&16)E(M,z,H,L,D);else if(v&2&&z.class!==H.class&&r(M,"class",null,H.class,D),v&4&&r(M,"style",z.style,H.style,D),v&8){const lt=T.dynamicProps;for(let pt=0;pt<lt.length;pt++){const Tt=lt[pt],dt=z[Tt],Mt=H[Tt];(Mt!==dt||Tt==="value")&&r(M,Tt,dt,Mt,D,L)}}v&1&&g.children!==T.children&&h(M,T.children)}else!K&&C==null&&E(M,z,H,L,D);((ht=H.onVnodeUpdated)||W)&&Pn(()=>{ht&&ci(ht,L,T,g),W&&fs(T,g,L,"updated")},N)},y=(g,T,L,N,D,V,K)=>{for(let M=0;M<T.length;M++){const v=g[M],C=T[M],W=v.el&&(v.type===cn||!Tr(v,C)||v.shapeFlag&70)?u(v.el):L;x(v,C,W,null,N,D,V,K,!0)}},E=(g,T,L,N,D)=>{if(T!==L){if(T!==Ce)for(const V in T)!Br(V)&&!(V in L)&&r(g,V,T[V],null,D,N);for(const V in L){if(Br(V))continue;const K=L[V],M=T[V];K!==M&&V!=="value"&&r(g,V,M,K,D,N)}"value"in L&&r(g,"value",T.value,L.value,D)}},Z=(g,T,L,N,D,V,K,M,v)=>{const C=T.el=g?g.el:a(""),W=T.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:H,slotScopeIds:ht}=T;ht&&(M=M?M.concat(ht):ht),g==null?(i(C,L,N),i(W,L,N),F(T.children||[],L,W,D,V,K,M,v)):z>0&&z&64&&H&&g.dynamicChildren?(y(g.dynamicChildren,H,L,D,V,K,M),(T.key!=null||D&&T===D.subTree)&&hf(g,T,!0)):X(g,T,L,W,D,V,K,M,v)},k=(g,T,L,N,D,V,K,M,v)=>{T.slotScopeIds=M,g==null?T.shapeFlag&512?D.ctx.activate(T,L,N,K,v):J(T,L,N,D,V,K,v):at(g,T,v)},J=(g,T,L,N,D,V,K)=>{const M=g.component=g0(g,N,D);if(Zd(g)&&(M.ctx.renderer=ut),_0(M,!1,K),M.asyncDep){if(D&&D.registerDep(M,G,K),!g.el){const v=M.subTree=$e(to);m(null,v,T,L)}}else G(M,g,T,L,D,V,K)},at=(g,T,L)=>{const N=T.component=g.component;if(o0(g,T,L))if(N.asyncDep&&!N.asyncResolved){Q(N,T,L);return}else N.next=T,N.update();else T.el=g.el,N.vnode=T},G=(g,T,L,N,D,V,K)=>{const M=()=>{if(g.isMounted){let{next:z,bu:H,u:ht,parent:lt,vnode:pt}=g;{const Lt=df(g);if(Lt){z&&(z.el=pt.el,Q(g,z,K)),Lt.asyncDep.then(()=>{g.isUnmounted||M()});return}}let Tt=z,dt;ps(g,!1),z?(z.el=pt.el,Q(g,z,K)):z=pt,H&&ka(H),(dt=z.props&&z.props.onVnodeBeforeUpdate)&&ci(dt,lt,z,pt),ps(g,!0);const Mt=$a(g),Ct=g.subTree;g.subTree=Mt,x(Ct,Mt,u(Ct.el),U(Ct),g,D,V),z.el=Mt.el,Tt===null&&a0(g,Mt.el),ht&&Pn(ht,D),(dt=z.props&&z.props.onVnodeUpdated)&&Pn(()=>ci(dt,lt,z,pt),D)}else{let z;const{el:H,props:ht}=T,{bm:lt,m:pt,parent:Tt,root:dt,type:Mt}=g,Ct=Hr(T);if(ps(g,!1),lt&&ka(lt),!Ct&&(z=ht&&ht.onVnodeBeforeMount)&&ci(z,Tt,T),ps(g,!0),H&&et){const Lt=()=>{g.subTree=$a(g),et(H,g.subTree,g,D,null)};Ct&&Mt.__asyncHydrate?Mt.__asyncHydrate(H,g,Lt):Lt()}else{dt.ce&&dt.ce._injectChildStyle(Mt);const Lt=g.subTree=$a(g);x(null,Lt,L,N,g,D,V),T.el=Lt.el}if(pt&&Pn(pt,D),!Ct&&(z=ht&&ht.onVnodeMounted)){const Lt=T;Pn(()=>ci(z,Tt,Lt),D)}(T.shapeFlag&256||Tt&&Hr(Tt.vnode)&&Tt.vnode.shapeFlag&256)&&g.a&&Pn(g.a,D),g.isMounted=!0,T=L=N=null}};g.scope.on();const v=g.effect=new Td(M);g.scope.off();const C=g.update=v.run.bind(v),W=g.job=v.runIfDirty.bind(v);W.i=g,W.id=g.uid,v.scheduler=()=>Qc(W),ps(g,!0),C()},Q=(g,T,L)=>{T.component=g;const N=g.vnode.props;g.vnode=T,g.next=null,Wm(g,T.props,N,L),$m(g,T.children,L),cs(),Iu(g),us()},X=(g,T,L,N,D,V,K,M,v=!1)=>{const C=g&&g.children,W=g?g.shapeFlag:0,z=T.children,{patchFlag:H,shapeFlag:ht}=T;if(H>0){if(H&128){yt(C,z,L,N,D,V,K,M,v);return}else if(H&256){mt(C,z,L,N,D,V,K,M,v);return}}ht&8?(W&16&&wt(C,D,V),z!==C&&h(L,z)):W&16?ht&16?yt(C,z,L,N,D,V,K,M,v):wt(C,D,V,!0):(W&8&&h(L,""),ht&16&&F(z,L,N,D,V,K,M,v))},mt=(g,T,L,N,D,V,K,M,v)=>{g=g||ir,T=T||ir;const C=g.length,W=T.length,z=Math.min(C,W);let H;for(H=0;H<z;H++){const ht=T[H]=v?ns(T[H]):hi(T[H]);x(g[H],ht,L,null,D,V,K,M,v)}C>W?wt(g,D,V,!0,!1,z):F(T,L,N,D,V,K,M,v,z)},yt=(g,T,L,N,D,V,K,M,v)=>{let C=0;const W=T.length;let z=g.length-1,H=W-1;for(;C<=z&&C<=H;){const ht=g[C],lt=T[C]=v?ns(T[C]):hi(T[C]);if(Tr(ht,lt))x(ht,lt,L,null,D,V,K,M,v);else break;C++}for(;C<=z&&C<=H;){const ht=g[z],lt=T[H]=v?ns(T[H]):hi(T[H]);if(Tr(ht,lt))x(ht,lt,L,null,D,V,K,M,v);else break;z--,H--}if(C>z){if(C<=H){const ht=H+1,lt=ht<W?T[ht].el:N;for(;C<=H;)x(null,T[C]=v?ns(T[C]):hi(T[C]),L,lt,D,V,K,M,v),C++}}else if(C>H)for(;C<=z;)It(g[C],D,V,!0),C++;else{const ht=C,lt=C,pt=new Map;for(C=lt;C<=H;C++){const Ut=T[C]=v?ns(T[C]):hi(T[C]);Ut.key!=null&&pt.set(Ut.key,C)}let Tt,dt=0;const Mt=H-lt+1;let Ct=!1,Lt=0;const At=new Array(Mt);for(C=0;C<Mt;C++)At[C]=0;for(C=ht;C<=z;C++){const Ut=g[C];if(dt>=Mt){It(Ut,D,V,!0);continue}let Vt;if(Ut.key!=null)Vt=pt.get(Ut.key);else for(Tt=lt;Tt<=H;Tt++)if(At[Tt-lt]===0&&Tr(Ut,T[Tt])){Vt=Tt;break}Vt===void 0?It(Ut,D,V,!0):(At[Vt-lt]=C+1,Vt>=Lt?Lt=Vt:Ct=!0,x(Ut,T[Vt],L,null,D,V,K,M,v),dt++)}const kt=Ct?Jm(At):ir;for(Tt=kt.length-1,C=Mt-1;C>=0;C--){const Ut=lt+C,Vt=T[Ut],B=Ut+1<W?T[Ut+1].el:N;At[C]===0?x(null,Vt,L,B,D,V,K,M,v):Ct&&(Tt<0||C!==kt[Tt]?_t(Vt,L,B,2):Tt--)}}},_t=(g,T,L,N,D=null)=>{const{el:V,type:K,transition:M,children:v,shapeFlag:C}=g;if(C&6){_t(g.component.subTree,T,L,N);return}if(C&128){g.suspense.move(T,L,N);return}if(C&64){K.move(g,T,L,ut);return}if(K===cn){i(V,T,L);for(let z=0;z<v.length;z++)_t(v[z],T,L,N);i(g.anchor,T,L);return}if(K===ja){w(g,T,L);return}if(N!==2&&C&1&&M)if(N===0)M.beforeEnter(V),i(V,T,L),Pn(()=>M.enter(V),D);else{const{leave:z,delayLeave:H,afterLeave:ht}=M,lt=()=>i(V,T,L),pt=()=>{z(V,()=>{lt(),ht&&ht()})};H?H(V,lt,pt):pt()}else i(V,T,L)},It=(g,T,L,N=!1,D=!1)=>{const{type:V,props:K,ref:M,children:v,dynamicChildren:C,shapeFlag:W,patchFlag:z,dirs:H,cacheIndex:ht}=g;if(z===-2&&(D=!1),M!=null&&zl(M,null,L,g,!0),ht!=null&&(T.renderCache[ht]=void 0),W&256){T.ctx.deactivate(g);return}const lt=W&1&&H,pt=!Hr(g);let Tt;if(pt&&(Tt=K&&K.onVnodeBeforeUnmount)&&ci(Tt,T,g),W&6)ft(g.component,L,N);else{if(W&128){g.suspense.unmount(L,N);return}lt&&fs(g,null,T,"beforeUnmount"),W&64?g.type.remove(g,T,L,ut,N):C&&!C.hasOnce&&(V!==cn||z>0&&z&64)?wt(C,T,L,!1,!0):(V===cn&&z&384||!D&&W&16)&&wt(v,T,L),N&&Bt(g)}(pt&&(Tt=K&&K.onVnodeUnmounted)||lt)&&Pn(()=>{Tt&&ci(Tt,T,g),lt&&fs(g,null,T,"unmounted")},L)},Bt=g=>{const{type:T,el:L,anchor:N,transition:D}=g;if(T===cn){ot(L,N);return}if(T===ja){S(g);return}const V=()=>{s(L),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:K,delayLeave:M}=D,v=()=>K(L,V);M?M(g.el,V,v):v()}else V()},ot=(g,T)=>{let L;for(;g!==T;)L=d(g),s(g),g=L;s(T)},ft=(g,T,L)=>{const{bum:N,scope:D,job:V,subTree:K,um:M,m:v,a:C}=g;zu(v),zu(C),N&&ka(N),D.stop(),V&&(V.flags|=8,It(K,g,T,L)),M&&Pn(M,T),Pn(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},wt=(g,T,L,N=!1,D=!1,V=0)=>{for(let K=V;K<g.length;K++)It(g[K],T,L,N,D)},U=g=>{if(g.shapeFlag&6)return U(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=d(g.anchor||g.el),L=T&&T[xm];return L?d(L):T};let ct=!1;const rt=(g,T,L)=>{g==null?T._vnode&&It(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,L),T._vnode=g,ct||(ct=!0,Iu(),Yd(),ct=!1)},ut={p:x,um:It,m:_t,r:Bt,mt:J,mc:F,pc:X,pbc:y,n:U,o:n};let bt,et;return{render:rt,hydrate:bt,createApp:km(rt,bt)}}function Ya({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ps({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Zm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function hf(n,t,e=!1){const i=n.children,s=t.children;if(oe(i)&&oe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ns(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&hf(o,a)),a.type===Ra&&(a.el=o.el)}}function Jm(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function df(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:df(t)}function zu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Qm=Symbol.for("v-scx"),t0=()=>Bi(Qm);function He(n,t,e){return ff(n,t,e)}function ff(n,t,e=Ce){const{immediate:i,deep:s,flush:r,once:o}=e,a=rn({},e);let l;if(Pa)if(r==="sync"){const d=t0();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=fi,d.resume=fi,d.pause=fi,d}const c=un;a.call=(d,f,_)=>mi(d,c,f,_);let h=!1;r==="post"?a.scheduler=d=>{Pn(d,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,f)=>{f?d():Qc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const u=pm(n,t,a);return l&&l.push(u),u}function e0(n,t,e){const i=this.proxy,s=en(n)?n.includes(".")?pf(i,n):()=>i[n]:n.bind(i,i);let r;re(t)?r=t:(r=t.handler,e=t);const o=fo(this),a=ff(s,r.bind(i),e);return o(),a}function pf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const n0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Fn(t)}Modifiers`]||n[`${Ds(t)}Modifiers`];function i0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Ce;let s=e;const r=t.startsWith("update:"),o=r&&n0(i,t.slice(7));o&&(o.trim&&(s=e.map(h=>en(h)?h.trim():h)),o.number&&(s=e.map(Lp)));let a,l=i[a=Ha(t)]||i[a=Ha(Fn(t))];!l&&r&&(l=i[a=Ha(Ds(t))]),l&&mi(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,mi(c,n,6,s)}}function mf(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!re(n)){const l=c=>{const h=mf(c,t,!0);h&&(a=!0,rn(o,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Xe(n)&&i.set(n,null),null):(oe(r)?r.forEach(l=>o[l]=null):rn(o,r),Xe(n)&&i.set(n,o),o)}function Aa(n,t){return!n||!xa(t)?!1:(t=t.slice(2).replace(/Once$/,""),we(n,t[0].toLowerCase()+t.slice(1))||we(n,Ds(t))||we(n,t))}function $a(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:d,setupState:f,ctx:_,inheritAttrs:x}=n,p=ca(n);let m,b;try{if(e.shapeFlag&4){const S=s||i,O=S;m=hi(c.call(O,S,h,u,f,d,_)),b=a}else{const S=t;m=hi(S.length>1?S(u,{attrs:a,slots:o,emit:l}):S(u,null)),b=t.props?a:s0(a)}}catch(S){Vr.length=0,ba(S,n,1),m=$e(to)}let w=m;if(b&&x!==!1){const S=Object.keys(b),{shapeFlag:O}=w;S.length&&O&7&&(r&&S.some(Bc)&&(b=r0(b,r)),w=dr(w,b,!1,!0))}return e.dirs&&(w=dr(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(e.dirs):e.dirs),e.transition&&tu(w,e.transition),m=w,ca(p),m}const s0=n=>{let t;for(const e in n)(e==="class"||e==="style"||xa(e))&&((t||(t={}))[e]=n[e]);return t},r0=(n,t)=>{const e={};for(const i in n)(!Bc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function o0(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Gu(i,o,c):!!o;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==i[d]&&!Aa(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gu(i,o,c):!0:!!o;return!1}function Gu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Aa(e,r))return!0}return!1}function a0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const gf=n=>n.__isSuspense;function l0(n,t){t&&t.pendingBranch?oe(n)?t.effects.push(...n):t.effects.push(n):_m(n)}const cn=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),to=Symbol.for("v-cmt"),ja=Symbol.for("v-stc"),Vr=[];let Ln=null;function _i(n=!1){Vr.push(Ln=n?null:[])}function c0(){Vr.pop(),Ln=Vr[Vr.length-1]||null}let eo=1;function Hu(n){eo+=n,n<0&&Ln&&(Ln.hasOnce=!0)}function u0(n){return n.dynamicChildren=eo>0?Ln||ir:null,c0(),eo>0&&Ln&&Ln.push(n),n}function vi(n,t,e,i,s,r){return u0(Gt(n,t,e,i,s,r,!0))}function ha(n){return n?n.__v_isVNode===!0:!1}function Tr(n,t){return n.type===t.type&&n.key===t.key}const _f=({key:n})=>n??null,Qo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?en(n)||hn(n)||re(n)?{i:In,r:n,k:t,f:!!e}:n:null);function Gt(n,t=null,e=null,i=0,s=null,r=n===cn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&_f(t),ref:t&&Qo(t),scopeId:jd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:In};return a?(su(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=en(e)?8:16),eo>0&&!o&&Ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ln.push(l),l}const $e=h0;function h0(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Dm)&&(n=to),ha(n)){const a=dr(n,t,!0);return e&&su(a,e),eo>0&&!r&&Ln&&(a.shapeFlag&6?Ln[Ln.indexOf(n)]=a:Ln.push(a)),a.patchFlag=-2,a}if(w0(n)&&(n=n.__vccOpts),t){t=d0(t);let{class:a,style:l}=t;a&&!en(a)&&(t.class=Bn(a)),Xe(l)&&(Kc(l)&&!oe(l)&&(l=rn({},l)),t.style=Hc(l))}const o=en(n)?1:gf(n)?128:ym(n)?64:Xe(n)?4:re(n)?2:0;return Gt(n,t,e,i,s,o,r,!0)}function d0(n){return n?Kc(n)||sf(n)?rn({},n):n:null}function dr(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?f0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&_f(c),ref:t&&t.ref?e&&r?oe(r)?r.concat(Qo(t)):[r,Qo(t)]:Qo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==cn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&dr(n.ssContent),ssFallback:n.ssFallback&&dr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&tu(h,l.clone(h)),h}function Ii(n=" ",t=0){return $e(Ra,null,n,t)}function hi(n){return n==null||typeof n=="boolean"?$e(to):oe(n)?$e(cn,null,n.slice()):ha(n)?ns(n):$e(Ra,null,String(n))}function ns(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:dr(n)}function su(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(oe(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),su(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!sf(t)?t._ctx=In:s===3&&In&&(In.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else re(t)?(t={default:t,_ctx:In},e=32):(t=String(t),i&64?(e=16,t=[Ii(t)]):e=8);n.children=t,n.shapeFlag|=e}function f0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Bn([t.class,i.class]));else if(s==="style")t.style=Hc([t.style,i.style]);else if(xa(s)){const r=t[s],o=i[s];o&&r!==o&&!(oe(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function ci(n,t,e,i=null){mi(n,t,7,[e,i])}const p0=tf();let m0=0;function g0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||p0,r={uid:m0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:of(i,s),emitsOptions:mf(i,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:i.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=i0.bind(null,r),n.ce&&n.ce(r),r}let un=null,da,Wl;{const n=Ed(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};da=t("__VUE_INSTANCE_SETTERS__",e=>un=e),Wl=t("__VUE_SSR_SETTERS__",e=>Pa=e)}const fo=n=>{const t=un;return da(n),n.scope.on(),()=>{n.scope.off(),da(t)}},ku=()=>{un&&un.scope.off(),da(null)};function vf(n){return n.vnode.shapeFlag&4}let Pa=!1;function _0(n,t=!1,e=!1){t&&Wl(t);const{props:i,children:s}=n.vnode,r=vf(n);Vm(n,i,r,t),Ym(n,s,e);const o=r?v0(n,t):void 0;return t&&Wl(!1),o}function v0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Nm);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?y0(n):null,r=fo(n);cs();const o=ho(i,n,0,[n.props,s]);if(us(),r(),wd(o)){if(Hr(n)||Kd(n),o.then(ku,ku),t)return o.then(a=>{Vu(n,a,t)}).catch(a=>{ba(a,n,0)});n.asyncDep=o}else Vu(n,o,t)}else xf(n,t)}function Vu(n,t,e){re(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Xe(t)&&(n.setupState=Vd(t)),xf(n,e)}let Wu;function xf(n,t,e){const i=n.type;if(!n.render){if(!t&&Wu&&!i.render){const s=i.template||nu(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=rn(rn({isCustomElement:r,delimiters:a},o),l);i.render=Wu(s,c)}}n.render=i.render||fi}{const s=fo(n);cs();try{Fm(n)}finally{us(),s()}}}const x0={get(n,t){return fn(n,"get",""),n[t]}};function y0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,x0),slots:n.slots,emit:n.emit,expose:t}}function Ca(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vd(lm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in kr)return kr[e](n)},has(t,e){return e in t||e in kr}})):n.proxy}function M0(n,t=!0){return re(n)?n.displayName||n.name:n.name||t&&n.__name}function w0(n){return re(n)&&"__vccOpts"in n}const qn=(n,t)=>dm(n,t,Pa);function yf(n,t,e){const i=arguments.length;return i===2?Xe(t)&&!oe(t)?ha(t)?$e(n,null,[t]):$e(n,t):$e(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ha(e)&&(e=[e]),$e(n,t,e))}const S0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xl;const Xu=typeof window<"u"&&window.trustedTypes;if(Xu)try{Xl=Xu.createPolicy("vue",{createHTML:n=>n})}catch{}const Mf=Xl?n=>Xl.createHTML(n):n=>n,E0="http://www.w3.org/2000/svg",b0="http://www.w3.org/1998/Math/MathML",Di=typeof document<"u"?document:null,qu=Di&&Di.createElement("template"),T0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Di.createElementNS(E0,n):t==="mathml"?Di.createElementNS(b0,n):e?Di.createElement(n,{is:e}):Di.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Di.createTextNode(n),createComment:n=>Di.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Di.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{qu.innerHTML=Mf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},A0=Symbol("_vtc");function R0(n,t,e){const i=n[A0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const fa=Symbol("_vod"),wf=Symbol("_vsh"),P0={beforeMount(n,{value:t},{transition:e}){n[fa]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Ar(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Ar(n,!0),i.enter(n)):i.leave(n,()=>{Ar(n,!1)}):Ar(n,t))},beforeUnmount(n,{value:t}){Ar(n,t)}};function Ar(n,t){n.style.display=t?n[fa]:"none",n[wf]=!t}const C0=Symbol(""),I0=/(^|;)\s*display\s*:/;function L0(n,t,e){const i=n.style,s=en(e);let r=!1;if(e&&!s){if(t)if(en(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&ta(i,a,"")}else for(const o in t)e[o]==null&&ta(i,o,"");for(const o in e)o==="display"&&(r=!0),ta(i,o,e[o])}else if(s){if(t!==e){const o=i[C0];o&&(e+=";"+o),i.cssText=e,r=I0.test(e)}}else t&&n.removeAttribute("style");fa in n&&(n[fa]=r?i.display:"",n[wf]&&(i.display="none"))}const Yu=/\s*!important$/;function ta(n,t,e){if(oe(e))e.forEach(i=>ta(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=D0(n,t);Yu.test(e)?n.setProperty(Ds(i),e.replace(Yu,""),"important"):n[i]=e}}const $u=["Webkit","Moz","ms"],Ka={};function D0(n,t){const e=Ka[t];if(e)return e;let i=Fn(t);if(i!=="filter"&&i in n)return Ka[t]=i;i=wa(i);for(let s=0;s<$u.length;s++){const r=$u[s]+i;if(r in n)return Ka[t]=r}return t}const ju="http://www.w3.org/1999/xlink";function Ku(n,t,e,i,s,r=Bp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ju,t.slice(6,t.length)):n.setAttributeNS(ju,t,e):e==null||r&&!bd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Mr(e)?String(e):e)}function Zu(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Mf(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(o!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let r=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=bd(e):e==null&&o==="string"?(e="",r=!0):o==="number"&&(e=0,r=!0)}try{n[t]=e}catch{}r&&n.removeAttribute(t)}function U0(n,t,e,i){n.addEventListener(t,e,i)}function N0(n,t,e,i){n.removeEventListener(t,e,i)}const Ju=Symbol("_vei");function F0(n,t,e,i,s=null){const r=n[Ju]||(n[Ju]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=O0(t);if(i){const c=r[t]=G0(i,s);U0(n,a,c,l)}else o&&(N0(n,a,o,l),r[t]=void 0)}}const Qu=/(?:Once|Passive|Capture)$/;function O0(n){let t;if(Qu.test(n)){t={};let i;for(;i=n.match(Qu);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ds(n.slice(2)),t]}let Za=0;const B0=Promise.resolve(),z0=()=>Za||(B0.then(()=>Za=0),Za=Date.now());function G0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;mi(H0(i,e.value),t,5,[i])};return e.value=n,e.attached=z0(),e}function H0(n,t){if(oe(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const th=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,k0=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?R0(n,i,o):t==="style"?L0(n,e,i):xa(t)?Bc(t)||F0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):V0(n,t,i,o))?(Zu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ku(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!en(i))?Zu(n,Fn(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Ku(n,t,i,o))};function V0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&th(t)&&re(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return th(t)&&en(e)?!1:t in n}const W0=rn({patchProp:k0},T0);let eh;function X0(){return eh||(eh=jm(W0))}const q0=(...n)=>{const t=X0().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=$0(i);if(!s)return;const r=t._component;!re(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Y0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Y0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function $0(n){return en(n)?document.querySelector(n):n}const j0={id:"app"},K0=zn({__name:"App",setup(n){const t=Kt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return si(()=>{window.addEventListener("mousemove",e)}),eu(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const r=Lu("router-link"),o=Lu("router-view");return _i(),vi("div",j0,[vm(Gt("nav",null,[$e(r,{to:"/3d-bear-arts/leather"},{default:Ci(()=>s[0]||(s[0]=[Ii("Leather")])),_:1}),$e(r,{to:"/3d-bear-arts/pop-art"},{default:Ci(()=>s[1]||(s[1]=[Ii("Pop MouseMove")])),_:1}),$e(r,{to:"/3d-bear-arts/pop-art-bear-3"},{default:Ci(()=>s[2]||(s[2]=[Ii("Pop3")])),_:1}),$e(r,{to:"/3d-bear-arts/machine"},{default:Ci(()=>s[3]||(s[3]=[Ii("machine")])),_:1}),$e(r,{to:"/3d-bear-arts/"},{default:Ci(()=>s[4]||(s[4]=[Ii("Water")])),_:1}),$e(r,{to:"/3d-bear-arts/ghost-bear"},{default:Ci(()=>s[5]||(s[5]=[Ii("ghost")])),_:1}),$e(r,{to:"/3d-bear-arts/white-ghost-bear"},{default:Ci(()=>s[6]||(s[6]=[Ii("white ghost")])),_:1}),$e(r,{to:"/3d-bear-arts/aquar"},{default:Ci(()=>s[7]||(s[7]=[Ii("Aquar")])),_:1})],512),[[P0,t.value]]),$e(o)])}}}),xi=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Z0=xi(K0,[["__scopeId","data-v-5c558729"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Zs=typeof document<"u";function Sf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function J0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Sf(n.default)}const Te=Object.assign;function Ja(n,t){const e={};for(const i in t){const s=t[i];e[i]=Qn(s)?s.map(n):n(s)}return e}const Wr=()=>{},Qn=Array.isArray,Ef=/#/g,Q0=/&/g,tg=/\//g,eg=/=/g,ng=/\?/g,bf=/\+/g,ig=/%5B/g,sg=/%5D/g,Tf=/%5E/g,rg=/%60/g,Af=/%7B/g,og=/%7C/g,Rf=/%7D/g,ag=/%20/g;function ru(n){return encodeURI(""+n).replace(og,"|").replace(ig,"[").replace(sg,"]")}function lg(n){return ru(n).replace(Af,"{").replace(Rf,"}").replace(Tf,"^")}function ql(n){return ru(n).replace(bf,"%2B").replace(ag,"+").replace(Ef,"%23").replace(Q0,"%26").replace(rg,"`").replace(Af,"{").replace(Rf,"}").replace(Tf,"^")}function cg(n){return ql(n).replace(eg,"%3D")}function ug(n){return ru(n).replace(Ef,"%23").replace(ng,"%3F")}function hg(n){return n==null?"":ug(n).replace(tg,"%2F")}function no(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const dg=/\/$/,fg=n=>n.replace(dg,"");function Qa(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=n(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=_g(i??t,e),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:no(o)}}function pg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function nh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function mg(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&fr(t.matched[i],e.matched[s])&&Pf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function fr(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Pf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!gg(n[e],t[e]))return!1;return!0}function gg(n,t){return Qn(n)?ih(n,t):Qn(t)?ih(t,n):n===t}function ih(n,t){return Qn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function _g(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const $i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var io;(function(n){n.pop="pop",n.push="push"})(io||(io={}));var Xr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Xr||(Xr={}));function vg(n){if(!n)if(Zs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),fg(n)}const xg=/^[^#]+#/;function yg(n,t){return n.replace(xg,"#")+t}function Mg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Ia=()=>({left:window.scrollX,top:window.scrollY});function wg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Mg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function sh(n,t){return(history.state?history.state.position-t:-1)+n}const Yl=new Map;function Sg(n,t){Yl.set(n,t)}function Eg(n){const t=Yl.get(n);return Yl.delete(n),t}let bg=()=>location.protocol+"//"+location.host;function Cf(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),nh(l,"")}return nh(e,n)+i+s}function Tg(n,t,e,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=Cf(n,location),_=e.value,x=t.value;let p=0;if(d){if(e.value=f,t.value=d,o&&o===_){o=null;return}p=x?d.position-x.position:0}else i(f);s.forEach(m=>{m(e.value,_,{delta:p,type:io.pop,direction:p?p>0?Xr.forward:Xr.back:Xr.unknown})})};function l(){o=e.value}function c(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(Te({},d.state,{scroll:Ia()}),"")}function u(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function rh(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Ia():null}}function Ag(n){const{history:t,location:e}=window,i={value:Cf(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+l:bg()+n+l;try{t[h?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),e[h?"replace":"assign"](d)}}function o(l,c){const h=Te({},t.state,rh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function a(l,c){const h=Te({},s.value,t.state,{forward:l,scroll:Ia()});r(h.current,h,!0);const u=Te({},rh(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Rg(n){n=vg(n);const t=Ag(n),e=Tg(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=Te({location:"",base:n,go:i,createHref:yg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Pg(n){return typeof n=="string"||n&&typeof n=="object"}function If(n){return typeof n=="string"||typeof n=="symbol"}const Lf=Symbol("");var oh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(oh||(oh={}));function pr(n,t){return Te(new Error,{type:n,[Lf]:!0},t)}function Si(n,t){return n instanceof Error&&Lf in n&&(t==null||!!(n.type&t))}const ah="[^/]+?",Cg={sensitive:!1,strict:!1,start:!0,end:!0},Ig=/[.+*?^${}()[\]/\\]/g;function Lg(n,t){const e=Te({},Cg,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const h=c.length?[]:[90];e.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const d=c[u];let f=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(Ig,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:x,optional:p,regexp:m}=d;r.push({name:_,repeatable:x,optional:p});const b=m||ah;if(b!==ah){f+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+S.message)}}let w=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(w=p&&c.length<2?`(?:/${w})`:"/"+w),p&&(w+="?"),s+=w,f+=20,p&&(f+=-8),x&&(f+=-20),b===".*"&&(f+=-50)}h.push(f)}i.push(h)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",_=r[d-1];u[_.name]=f&&_.repeatable?f.split("/"):f}return u}function l(c){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:_,repeatable:x,optional:p}=f,m=_ in c?c[_]:"";if(Qn(m)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Qn(m)?m.join("/"):m;if(!b)if(p)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Dg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Df(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=Dg(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(lh(i))return 1;if(lh(s))return-1}return s.length-i.length}function lh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Ug={type:0,value:""},Ng=/[a-zA-Z0-9_]/;function Fg(n){if(!n)return[[]];if(n==="/")return[[Ug]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(f){throw new Error(`ERR (${e})/"${c}": ${f}`)}let e=0,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(e===0?r.push({type:0,value:c}):e===1||e===2||e===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:l==="("?e=2:Ng.test(l)?d():(u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:e=3:h+=l;break;case 3:u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function Og(n,t,e){const i=Lg(Fg(n.path),e),s=Te(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Bg(n,t){const e=[],i=new Map;t=dh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,d,f){const _=!f,x=uh(u);x.aliasOf=f&&f.record;const p=dh(t,u),m=[x];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of S)m.push(uh(Te({},x,{components:f?f.record.components:x.components,path:O,aliasOf:f?f.record:x})))}let b,w;for(const S of m){const{path:O}=S;if(d&&O[0]!=="/"){const I=d.record.path,P=I[I.length-1]==="/"?"":"/";S.path=d.record.path+(O&&P+O)}if(b=Og(S,d,p),f?f.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),_&&u.name&&!hh(b)&&o(u.name)),Uf(b)&&l(b),x.children){const I=x.children;for(let P=0;P<I.length;P++)r(I[P],b,f&&f.children[P])}f=f||b}return w?()=>{o(w)}:Wr}function o(u){if(If(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return e}function l(u){const d=Hg(u,e);e.splice(d,0,u),u.record.name&&!hh(u)&&i.set(u.record.name,u)}function c(u,d){let f,_={},x,p;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw pr(1,{location:u});p=f.record.name,_=Te(ch(d.params,f.keys.filter(w=>!w.optional).concat(f.parent?f.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),u.params&&ch(u.params,f.keys.map(w=>w.name))),x=f.stringify(_)}else if(u.path!=null)x=u.path,f=e.find(w=>w.re.test(x)),f&&(_=f.parse(x),p=f.record.name);else{if(f=d.name?i.get(d.name):e.find(w=>w.re.test(d.path)),!f)throw pr(1,{location:u,currentLocation:d});p=f.record.name,_=Te({},d.params,u.params),x=f.stringify(_)}const m=[];let b=f;for(;b;)m.unshift(b.record),b=b.parent;return{name:p,path:x,params:_,matched:m,meta:Gg(m)}}n.forEach(u=>r(u));function h(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function ch(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function uh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:zg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function zg(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function hh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Gg(n){return n.reduce((t,e)=>Te(t,e.meta),{})}function dh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function Hg(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;Df(n,t[r])<0?i=r:e=r+1}const s=kg(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function kg(n){let t=n;for(;t=t.parent;)if(Uf(t)&&Df(n,t)===0)return t}function Uf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Vg(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(bf," "),o=r.indexOf("="),a=no(o<0?r:r.slice(0,o)),l=o<0?null:no(r.slice(o+1));if(a in t){let c=t[a];Qn(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function fh(n){let t="";for(let e in n){const i=n[e];if(e=cg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Qn(i)?i.map(r=>r&&ql(r)):[i&&ql(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function Wg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Qn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Xg=Symbol(""),ph=Symbol(""),ou=Symbol(""),Nf=Symbol(""),$l=Symbol("");function Rr(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function is(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(pr(4,{from:e,to:t})):d instanceof Error?l(d):Pg(d)?l(pr(2,{from:t,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},h=r(()=>n.call(i&&i.instances[s],t,e,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(d=>l(d))})}function tl(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Sf(l)){const h=(l.__vccOpts||l)[t];h&&r.push(is(h,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=J0(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&is(f,e,i,o,a,s)()}))}}return r}function mh(n){const t=Bi(ou),e=Bi(Nf),i=qn(()=>{const l=sr(n.to);return t.resolve(l)}),s=qn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(fr.bind(null,h));if(d>-1)return d;const f=gh(l[c-2]);return c>1&&gh(h)===f&&u[u.length-1].path!==f?u.findIndex(fr.bind(null,l[c-2])):d}),r=qn(()=>s.value>-1&&jg(e.params,i.value.params)),o=qn(()=>s.value>-1&&s.value===e.matched.length-1&&Pf(e.params,i.value.params));function a(l={}){return $g(l)?t[sr(n.replace)?"replace":"push"](sr(n.to)).catch(Wr):Promise.resolve()}return{route:i,href:qn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const qg=zn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mh,setup(n,{slots:t}){const e=Ea(mh(n)),{options:i}=Bi(ou),s=qn(()=>({[_h(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[_h(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&t.default(e);return n.custom?r:yf("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Yg=qg;function $g(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function jg(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Qn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function gh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const _h=(n,t,e)=>n??t??e,Kg=zn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Bi($l),s=qn(()=>n.route||i.value),r=Bi(ph,0),o=qn(()=>{let c=sr(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=qn(()=>s.value.matched[o.value]);Jo(ph,qn(()=>o.value+1)),Jo(Xg,a),Jo($l,s);const l=Kt();return He(()=>[l.value,a.value,n.name],([c,h,u],[d,f,_])=>{h&&(h.instances[u]=c,f&&f!==h&&c&&c===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),c&&h&&(!f||!fr(h,f)||!d)&&(h.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return vh(e.default,{Component:d,route:c});const f=u.props[h],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,p=yf(d,Te({},_,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return vh(e.default,{Component:p,route:c})||p}}});function vh(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Zg=Kg;function Jg(n){const t=Bg(n.routes,n),e=n.parseQuery||Vg,i=n.stringifyQuery||fh,s=n.history,r=Rr(),o=Rr(),a=Rr(),l=Gr($i);let c=$i;Zs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ja.bind(null,U=>""+U),u=Ja.bind(null,hg),d=Ja.bind(null,no);function f(U,ct){let rt,ut;return If(U)?(rt=t.getRecordMatcher(U),ut=ct):ut=U,t.addRoute(ut,rt)}function _(U){const ct=t.getRecordMatcher(U);ct&&t.removeRoute(ct)}function x(){return t.getRoutes().map(U=>U.record)}function p(U){return!!t.getRecordMatcher(U)}function m(U,ct){if(ct=Te({},ct||l.value),typeof U=="string"){const T=Qa(e,U,ct.path),L=t.resolve({path:T.path},ct),N=s.createHref(T.fullPath);return Te(T,L,{params:d(L.params),hash:no(T.hash),redirectedFrom:void 0,href:N})}let rt;if(U.path!=null)rt=Te({},U,{path:Qa(e,U.path,ct.path).path});else{const T=Te({},U.params);for(const L in T)T[L]==null&&delete T[L];rt=Te({},U,{params:u(T)}),ct.params=u(ct.params)}const ut=t.resolve(rt,ct),bt=U.hash||"";ut.params=h(d(ut.params));const et=pg(i,Te({},U,{hash:lg(bt),path:ut.path})),g=s.createHref(et);return Te({fullPath:et,hash:bt,query:i===fh?Wg(U.query):U.query||{}},ut,{redirectedFrom:void 0,href:g})}function b(U){return typeof U=="string"?Qa(e,U,l.value.path):Te({},U)}function w(U,ct){if(c!==U)return pr(8,{from:ct,to:U})}function S(U){return P(U)}function O(U){return S(Te(b(U),{replace:!0}))}function I(U){const ct=U.matched[U.matched.length-1];if(ct&&ct.redirect){const{redirect:rt}=ct;let ut=typeof rt=="function"?rt(U):rt;return typeof ut=="string"&&(ut=ut.includes("?")||ut.includes("#")?ut=b(ut):{path:ut},ut.params={}),Te({query:U.query,hash:U.hash,params:ut.path!=null?{}:U.params},ut)}}function P(U,ct){const rt=c=m(U),ut=l.value,bt=U.state,et=U.force,g=U.replace===!0,T=I(rt);if(T)return P(Te(b(T),{state:typeof T=="object"?Te({},bt,T.state):bt,force:et,replace:g}),ct||rt);const L=rt;L.redirectedFrom=ct;let N;return!et&&mg(i,ut,rt)&&(N=pr(16,{to:L,from:ut}),_t(ut,ut,!0,!1)),(N?Promise.resolve(N):y(L,ut)).catch(D=>Si(D)?Si(D,2)?D:yt(D):X(D,L,ut)).then(D=>{if(D){if(Si(D,2))return P(Te({replace:g},b(D.to),{state:typeof D.to=="object"?Te({},bt,D.to.state):bt,force:et}),ct||L)}else D=Z(L,ut,!0,g,bt);return E(L,ut,D),D})}function F(U,ct){const rt=w(U,ct);return rt?Promise.reject(rt):Promise.resolve()}function q(U){const ct=ot.values().next().value;return ct&&typeof ct.runWithContext=="function"?ct.runWithContext(U):U()}function y(U,ct){let rt;const[ut,bt,et]=Qg(U,ct);rt=tl(ut.reverse(),"beforeRouteLeave",U,ct);for(const T of ut)T.leaveGuards.forEach(L=>{rt.push(is(L,U,ct))});const g=F.bind(null,U,ct);return rt.push(g),wt(rt).then(()=>{rt=[];for(const T of r.list())rt.push(is(T,U,ct));return rt.push(g),wt(rt)}).then(()=>{rt=tl(bt,"beforeRouteUpdate",U,ct);for(const T of bt)T.updateGuards.forEach(L=>{rt.push(is(L,U,ct))});return rt.push(g),wt(rt)}).then(()=>{rt=[];for(const T of et)if(T.beforeEnter)if(Qn(T.beforeEnter))for(const L of T.beforeEnter)rt.push(is(L,U,ct));else rt.push(is(T.beforeEnter,U,ct));return rt.push(g),wt(rt)}).then(()=>(U.matched.forEach(T=>T.enterCallbacks={}),rt=tl(et,"beforeRouteEnter",U,ct,q),rt.push(g),wt(rt))).then(()=>{rt=[];for(const T of o.list())rt.push(is(T,U,ct));return rt.push(g),wt(rt)}).catch(T=>Si(T,8)?T:Promise.reject(T))}function E(U,ct,rt){a.list().forEach(ut=>q(()=>ut(U,ct,rt)))}function Z(U,ct,rt,ut,bt){const et=w(U,ct);if(et)return et;const g=ct===$i,T=Zs?history.state:{};rt&&(ut||g?s.replace(U.fullPath,Te({scroll:g&&T&&T.scroll},bt)):s.push(U.fullPath,bt)),l.value=U,_t(U,ct,rt,g),yt()}let k;function J(){k||(k=s.listen((U,ct,rt)=>{if(!ft.listening)return;const ut=m(U),bt=I(ut);if(bt){P(Te(bt,{replace:!0}),ut).catch(Wr);return}c=ut;const et=l.value;Zs&&Sg(sh(et.fullPath,rt.delta),Ia()),y(ut,et).catch(g=>Si(g,12)?g:Si(g,2)?(P(g.to,ut).then(T=>{Si(T,20)&&!rt.delta&&rt.type===io.pop&&s.go(-1,!1)}).catch(Wr),Promise.reject()):(rt.delta&&s.go(-rt.delta,!1),X(g,ut,et))).then(g=>{g=g||Z(ut,et,!1),g&&(rt.delta&&!Si(g,8)?s.go(-rt.delta,!1):rt.type===io.pop&&Si(g,20)&&s.go(-1,!1)),E(ut,et,g)}).catch(Wr)}))}let at=Rr(),G=Rr(),Q;function X(U,ct,rt){yt(U);const ut=G.list();return ut.length?ut.forEach(bt=>bt(U,ct,rt)):console.error(U),Promise.reject(U)}function mt(){return Q&&l.value!==$i?Promise.resolve():new Promise((U,ct)=>{at.add([U,ct])})}function yt(U){return Q||(Q=!U,J(),at.list().forEach(([ct,rt])=>U?rt(U):ct()),at.reset()),U}function _t(U,ct,rt,ut){const{scrollBehavior:bt}=n;if(!Zs||!bt)return Promise.resolve();const et=!rt&&Eg(sh(U.fullPath,0))||(ut||!rt)&&history.state&&history.state.scroll||null;return Xd().then(()=>bt(U,ct,et)).then(g=>g&&wg(g)).catch(g=>X(g,U,ct))}const It=U=>s.go(U);let Bt;const ot=new Set,ft={currentRoute:l,listening:!0,addRoute:f,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:p,getRoutes:x,resolve:m,options:n,push:S,replace:O,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:mt,install(U){const ct=this;U.component("RouterLink",Yg),U.component("RouterView",Zg),U.config.globalProperties.$router=ct,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>sr(l)}),Zs&&!Bt&&l.value===$i&&(Bt=!0,S(s.location).catch(bt=>{}));const rt={};for(const bt in $i)Object.defineProperty(rt,bt,{get:()=>l.value[bt],enumerable:!0});U.provide(ou,ct),U.provide(Nf,Gd(rt)),U.provide($l,l);const ut=U.unmount;ot.add(U),U.unmount=function(){ot.delete(U),ot.size<1&&(c=$i,k&&k(),k=null,l.value=$i,Bt=!1,Q=!1),ut()}}};function wt(U){return U.reduce((ct,rt)=>ct.then(()=>q(rt)),Promise.resolve())}return ft}function Qg(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>fr(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>fr(c,l))||s.push(l))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const au="169",t_=0,xh=1,e_=2,Ff=1,n_=2,Li=3,ls=0,Sn=1,he=2,rs=0,ar=1,yh=2,Mh=3,wh=4,i_=5,Es=100,s_=101,r_=102,o_=103,a_=104,l_=200,c_=201,u_=202,h_=203,jl=204,Kl=205,d_=206,f_=207,p_=208,m_=209,g_=210,__=211,v_=212,x_=213,y_=214,Zl=0,Jl=1,Ql=2,mr=3,tc=4,ec=5,nc=6,ic=7,Of=0,M_=1,w_=2,os=0,S_=1,E_=2,b_=3,T_=4,A_=5,R_=6,P_=7,Bf=300,gr=301,_r=302,so=303,sc=304,La=306,ke=1e3,Ts=1001,rc=1002,Nn=1003,C_=1004,bo=1005,Yn=1006,el=1007,As=1008,zi=1009,zf=1010,Gf=1011,ro=1012,lu=1013,Cs=1014,Ni=1015,po=1016,cu=1017,uu=1018,vr=1020,Hf=35902,kf=1021,Vf=1022,jn=1023,Wf=1024,Xf=1025,lr=1026,xr=1027,qf=1028,hu=1029,Yf=1030,du=1031,fu=1033,ea=33776,na=33777,ia=33778,sa=33779,oc=35840,ac=35841,lc=35842,cc=35843,uc=36196,hc=37492,dc=37496,fc=37808,pc=37809,mc=37810,gc=37811,_c=37812,vc=37813,xc=37814,yc=37815,Mc=37816,wc=37817,Sc=37818,Ec=37819,bc=37820,Tc=37821,ra=36492,Ac=36494,Rc=36495,$f=36283,Pc=36284,Cc=36285,Ic=36286,I_=3200,L_=3201,jf=0,D_=1,ss="",Xn="srgb",hs="srgb-linear",pu="display-p3",Da="display-p3-linear",pa="linear",Ue="srgb",ma="rec709",ga="p3",Fs=7680,Sh=519,U_=512,N_=513,F_=514,Kf=515,O_=516,B_=517,z_=518,G_=519,Eh=35044,bh="300 es",Fi=2e3,_a=2001;class wr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Th=1234567;const qr=Math.PI/180,oo=180/Math.PI;function Us(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function tn(n,t,e){return Math.max(t,Math.min(e,n))}function mu(n,t){return(n%t+t)%t}function H_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function k_(n,t,e){return n!==t?(e-n)/(t-n):0}function Yr(n,t,e){return(1-e)*n+e*t}function V_(n,t,e,i){return Yr(n,t,1-Math.exp(-e*i))}function W_(n,t=1){return t-Math.abs(mu(n,t*2)-t)}function X_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function q_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Y_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function $_(n,t){return n+Math.random()*(t-n)}function j_(n){return n*(.5-Math.random())}function K_(n){n!==void 0&&(Th=n);let t=Th+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Z_(n){return n*qr}function J_(n){return n*oo}function Q_(n){return(n&n-1)===0&&n!==0}function tv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ev(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nv(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Js(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ce={DEG2RAD:qr,RAD2DEG:oo,generateUUID:Us,clamp:tn,euclideanModulo:mu,mapLinear:H_,inverseLerp:k_,lerp:Yr,damp:V_,pingpong:W_,smoothstep:X_,smootherstep:q_,randInt:Y_,randFloat:$_,randFloatSpread:j_,seededRandom:K_,degToRad:Z_,radToDeg:J_,isPowerOfTwo:Q_,ceilPowerOfTwo:tv,floorPowerOfTwo:ev,setQuaternionFromProperEuler:nv,normalize:gn,denormalize:Js};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,i,s,r,o,a,l,c){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],x=s[0],p=s[3],m=s[6],b=s[1],w=s[4],S=s[7],O=s[2],I=s[5],P=s[8];return r[0]=o*x+a*b+l*O,r[3]=o*p+a*w+l*I,r[6]=o*m+a*S+l*P,r[1]=c*x+h*b+u*O,r[4]=c*p+h*w+u*I,r[7]=c*m+h*S+u*P,r[2]=d*x+f*b+_*O,r[5]=d*p+f*w+_*I,r[8]=d*m+f*S+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=e*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(nl.makeScale(t,e)),this}rotate(t){return this.premultiply(nl.makeRotation(-t)),this}translate(t,e){return this.premultiply(nl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nl=new le;function Zf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function iv(){const n=ao("canvas");return n.style.display="block",n}const Ah={};function oa(n){n in Ah||(Ah[n]=!0,console.warn(n))}function sv(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function rv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ov(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Rh=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ph=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pr={[hs]:{transfer:pa,primaries:ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Xn]:{transfer:Ue,primaries:ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Da]:{transfer:pa,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ph),fromReference:n=>n.applyMatrix3(Rh)},[pu]:{transfer:Ue,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ph),fromReference:n=>n.applyMatrix3(Rh).convertLinearToSRGB()}},av=new Set([hs,Da]),Se={enabled:!0,_workingColorSpace:hs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!av.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Pr[t].toReference,s=Pr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Pr[n].primaries},getTransfer:function(n){return n===ss?pa:Pr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Pr[t].luminanceCoefficients)}};function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function il(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Os;class lv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=ao("canvas")),Os.width=t.width,Os.height=t.height;const i=Os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ao("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=cr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(cr(e[i]/255)*255):e[i]=cr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cv=0;class Jf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sl(s[o].image)):r.push(sl(s[o]))}else r=sl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function sl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uv=0;class yn extends wr{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,i=Ts,s=Ts,r=Yn,o=As,a=jn,l=zi,c=yn.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Us(),this.name="",this.source=new Jf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ke:t.x=t.x-Math.floor(t.x);break;case Ts:t.x=t.x<0?0:1;break;case rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ke:t.y=t.y-Math.floor(t.y);break;case Ts:t.y=t.y<0?0:1;break;case rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Bf;yn.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,i=0,s=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,S=(f+1)/2,O=(m+1)/2,I=(h+d)/4,P=(u+x)/4,F=(_+p)/4;return w>S&&w>O?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=I/i,r=P/i):S>O?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=I/s,r=F/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=P/r,s=F/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-_)*(p-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hv extends wr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new yn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends hv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Qf extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dv extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mo{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==_){let p=1-a;const m=l*d+c*f+h*_+u*x,b=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const O=Math.sqrt(w),I=Math.atan2(O,m*b);p=Math.sin(p*I)/O,a=Math.sin(a*I)/O}const S=a*b;if(l=l*p+d*S,c=c*p+f*S,h=h*p+_*S,u=u*p+x*S,p===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,i=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ch.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rl=new $,Ch=new mo;class go{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cr),Ao.subVectors(this.max,Cr),Bs.subVectors(t.a,Cr),zs.subVectors(t.b,Cr),Gs.subVectors(t.c,Cr),ji.subVectors(zs,Bs),Ki.subVectors(Gs,zs),ms.subVectors(Bs,Gs);let e=[0,-ji.z,ji.y,0,-Ki.z,Ki.y,0,-ms.z,ms.y,ji.z,0,-ji.x,Ki.z,0,-Ki.x,ms.z,0,-ms.x,-ji.y,ji.x,0,-Ki.y,Ki.x,0,-ms.y,ms.x,0];return!ol(e,Bs,zs,Gs,Ao)||(e=[1,0,0,0,1,0,0,0,1],!ol(e,Bs,zs,Gs,Ao))?!1:(Ro.crossVectors(ji,Ki),e=[Ro.x,Ro.y,Ro.z],ol(e,Bs,zs,Gs,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new $,new $,new $,new $,new $,new $,new $,new $],kn=new $,To=new go,Bs=new $,zs=new $,Gs=new $,ji=new $,Ki=new $,ms=new $,Cr=new $,Ao=new $,Ro=new $,gs=new $;function ol(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gs.fromArray(n,r);const a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),l=t.dot(gs),c=e.dot(gs),h=i.dot(gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const fv=new go,Ir=new $,al=new $;class gu{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):fv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ir.subVectors(t,this.center);const e=Ir.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ir,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ir.copy(t.center).add(al)),this.expandByPoint(Ir.copy(t.center).sub(al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new $,ll=new $,Po=new $,Zi=new $,cl=new $,Co=new $,ul=new $;class pv{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ll.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(ll);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Po),a=Zi.dot(this.direction),l=-Zi.dot(Po),c=Zi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ll).addScaledVector(Po,d),f}intersectSphere(t,e){bi.subVectors(t.center,this.origin);const i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,i,s,r){cl.subVectors(e,t),Co.subVectors(i,t),ul.crossVectors(cl,Co);let o=this.direction.dot(ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,t);const l=a*this.direction.dot(Co.crossVectors(Zi,Co));if(l<0)return null;const c=a*this.direction.dot(cl.cross(Zi));if(c<0||l+c>o)return null;const h=-a*Zi.dot(ul);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,_,x,p){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,_,x,p)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,_,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Hs.setFromMatrixColumn(t,0).length(),r=1/Hs.setFromMatrixColumn(t,1).length(),o=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,_=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,x=c*u;e[0]=d+x*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,_=a*h,x=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,_=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,f=o*c,_=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mv,t,gv)}lookAt(t,e,i){const s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Ji.crossVectors(i,An),Ji.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ji.crossVectors(i,An)),Ji.normalize(),Io.crossVectors(An,Ji),s[0]=Ji.x,s[4]=Io.x,s[8]=An.x,s[1]=Ji.y,s[5]=Io.y,s[9]=An.y,s[2]=Ji.z,s[6]=Io.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],x=i[6],p=i[10],m=i[14],b=i[3],w=i[7],S=i[11],O=i[15],I=s[0],P=s[4],F=s[8],q=s[12],y=s[1],E=s[5],Z=s[9],k=s[13],J=s[2],at=s[6],G=s[10],Q=s[14],X=s[3],mt=s[7],yt=s[11],_t=s[15];return r[0]=o*I+a*y+l*J+c*X,r[4]=o*P+a*E+l*at+c*mt,r[8]=o*F+a*Z+l*G+c*yt,r[12]=o*q+a*k+l*Q+c*_t,r[1]=h*I+u*y+d*J+f*X,r[5]=h*P+u*E+d*at+f*mt,r[9]=h*F+u*Z+d*G+f*yt,r[13]=h*q+u*k+d*Q+f*_t,r[2]=_*I+x*y+p*J+m*X,r[6]=_*P+x*E+p*at+m*mt,r[10]=_*F+x*Z+p*G+m*yt,r[14]=_*q+x*k+p*Q+m*_t,r[3]=b*I+w*y+S*J+O*X,r[7]=b*P+w*E+S*at+O*mt,r[11]=b*F+w*Z+S*G+O*yt,r[15]=b*q+w*k+S*Q+O*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],x=t[7],p=t[11],m=t[15];return _*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],x=t[13],p=t[14],m=t[15],b=u*p*c-x*d*c+x*l*f-a*p*f-u*l*m+a*d*m,w=_*d*c-h*p*c-_*l*f+o*p*f+h*l*m-o*d*m,S=h*x*c-_*u*c+_*a*f-o*x*f-h*a*m+o*u*m,O=_*u*l-h*x*l-_*a*d+o*x*d+h*a*p-o*u*p,I=e*b+i*w+s*S+r*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=b*P,t[1]=(x*d*r-u*p*r-x*s*f+i*p*f+u*s*m-i*d*m)*P,t[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*m+i*l*m)*P,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*P,t[4]=w*P,t[5]=(h*p*r-_*d*r+_*s*f-e*p*f-h*s*m+e*d*m)*P,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*m-e*l*m)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*P,t[8]=S*P,t[9]=(_*u*r-h*x*r-_*i*f+e*x*f+h*i*m-e*u*m)*P,t[10]=(o*x*r-_*a*r+_*i*c-e*x*c-o*i*m+e*a*m)*P,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*P,t[12]=O*P,t[13]=(h*x*s-_*u*s+_*i*d-e*x*d-h*i*p+e*u*p)*P,t[14]=(_*a*s-o*x*s-_*i*l+e*x*l+o*i*p-e*a*p)*P,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,x=o*h,p=o*u,m=a*u,b=l*c,w=l*h,S=l*u,O=i.x,I=i.y,P=i.z;return s[0]=(1-(x+m))*O,s[1]=(f+S)*O,s[2]=(_-w)*O,s[3]=0,s[4]=(f-S)*I,s[5]=(1-(d+m))*I,s[6]=(p+b)*I,s[7]=0,s[8]=(_+w)*P,s[9]=(p-b)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Hs.set(s[0],s[1],s[2]).length();const o=Hs.set(s[4],s[5],s[6]).length(),a=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Vn.copy(this);const c=1/r,h=1/o,u=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,e.setFromRotationMatrix(Vn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Fi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,_;if(a===Fi)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===_a)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Fi){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h;let _,x;if(a===Fi)_=(o+r)*u,x=-2*u;else if(a===_a)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Hs=new $,Vn=new Ne,mv=new $(0,0,0),gv=new $(1,1,1),Ji=new $,Io=new $,An=new $,Ih=new Ne,Lh=new mo;class gi{constructor(t=0,e=0,i=0,s=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _v=0;const Dh=new $,ks=new mo,Ti=new Ne,Lo=new $,Lr=new $,vv=new $,xv=new mo,Uh=new $(1,0,0),Nh=new $(0,1,0),Fh=new $(0,0,1),Oh={type:"added"},yv={type:"removed"},Vs={type:"childadded",child:null},hl={type:"childremoved",child:null};class dn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const t=new $,e=new gi,i=new mo,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new le}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lo.copy(t):Lo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Lr,Lo,this.up):Ti.lookAt(Lo,Lr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Ti),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yv),hl.child=t,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,vv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,xv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}dn.DEFAULT_UP=new $(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new $,Ai=new $,dl=new $,Ri=new $,Ws=new $,Xs=new $,Bh=new $,fl=new $,pl=new $,ml=new $,gl=new Pe,_l=new Pe,vl=new Pe;class $n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Wn.subVectors(t,e),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Wn.subVectors(s,e),Ai.subVectors(i,e),dl.subVectors(t,e);const o=Wn.dot(Wn),a=Wn.dot(Ai),l=Wn.dot(dl),c=Ai.dot(Ai),h=Ai.dot(dl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return gl.setScalar(0),_l.setScalar(0),vl.setScalar(0),gl.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,i),vl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(gl,r.x),o.addScaledVector(_l,r.y),o.addScaledVector(vl,r.z),o}static isFrontFacing(t,e,i,s){return Wn.subVectors(i,e),Ai.subVectors(t,e),Wn.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Wn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return $n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ws.subVectors(s,i),Xs.subVectors(r,i),fl.subVectors(t,i);const l=Ws.dot(fl),c=Xs.dot(fl);if(l<=0&&c<=0)return e.copy(i);pl.subVectors(t,s);const h=Ws.dot(pl),u=Xs.dot(pl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Ws,o);ml.subVectors(t,r);const f=Ws.dot(ml),_=Xs.dot(ml);if(_>=0&&f<=_)return e.copy(r);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Xs,a);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return Bh.subVectors(r,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector(Bh,a);const m=1/(p+x+d);return o=x*m,a=d*m,e.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Do={h:0,s:0,l:0};function xl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class _e{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=i,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Se.workingColorSpace){if(t=mu(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=xl(o,r,t+1/3),this.g=xl(o,r,t),this.b=xl(o,r,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=Xn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xn){const i=ep[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}copyLinearToSRGB(t){return this.r=il(t.r),this.g=il(t.g),this.b=il(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xn){return Se.fromWorkingColorSpace(ln.copy(this),t),Math.round(tn(ln.r*255,0,255))*65536+Math.round(tn(ln.g*255,0,255))*256+Math.round(tn(ln.b*255,0,255))}getHexString(t=Xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(ln.copy(this),e);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Xn){Se.fromWorkingColorSpace(ln.copy(this),t);const e=ln.r,i=ln.g,s=ln.b;return t!==Xn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(Do);const i=Yr(Qi.h,Do.h,e),s=Yr(Qi.s,Do.s,e),r=Yr(Qi.l,Do.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new _e;_e.NAMES=ep;let Mv=0;class _o extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=ar,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=Kl,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jl&&(i.blendSrc=this.blendSrc),this.blendDst!==Kl&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ti extends _o{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ye=new $,Uo=new Ot;class pi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Eh,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Js(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=gn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),i=gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),i=gn(i,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eh&&(t.usage=this.usage),t}}class np extends pi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ip extends pi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class We extends pi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let wv=0;const Un=new Ne,yl=new dn,qs=new $,Rn=new go,Dr=new go,Qe=new $;class Gn extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zf(t)?ip:np)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new le().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,i){return Un.makeTranslation(t,e,i),this.applyMatrix4(Un),this}scale(t,e,i){return Un.makeScale(t,e,i),this.applyMatrix4(Un),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new We(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Rn.min,Dr.min),Rn.expandByPoint(Qe),Qe.addVectors(Rn.max,Dr.max),Rn.expandByPoint(Qe)):(Rn.expandByPoint(Dr.min),Rn.expandByPoint(Dr.max))}Rn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(t,c),Qe.add(qs)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new $,l[F]=new $;const c=new $,h=new $,u=new $,d=new Ot,f=new Ot,_=new Ot,x=new $,p=new $;function m(F,q,y){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,q),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,q),_.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const E=1/(f.x*_.y-_.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(E),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(E),a[F].add(x),a[q].add(x),a[y].add(x),l[F].add(p),l[q].add(p),l[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let F=0,q=b.length;F<q;++F){const y=b[F],E=y.start,Z=y.count;for(let k=E,J=E+Z;k<J;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new $,S=new $,O=new $,I=new $;function P(F){O.fromBufferAttribute(s,F),I.copy(O);const q=a[F];w.copy(q),w.sub(O.multiplyScalar(O.dot(q))).normalize(),S.crossVectors(I,q);const E=S.dot(l[F])<0?-1:1;o.setXYZW(F,w.x,w.y,w.z,E)}for(let F=0,q=b.length;F<q;++F){const y=b[F],E=y.start,Z=y.count;for(let k=E,J=E+Z;k<J;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new $,r=new $,o=new $,a=new $,l=new $,c=new $,h=new $,u=new $;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[_++]=c[f++]}return new pi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new Ne,_s=new pv,No=new gu,Gh=new $,Fo=new $,Oo=new $,Bo=new $,Ml=new $,zo=new $,Hh=new $,Go=new $;class R extends dn{constructor(t=new Gn,e=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ml.fromBufferAttribute(u,t),o?zo.addScaledVector(Ml,h):zo.addScaledVector(Ml.sub(e),h))}e.add(zo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(No.containsPoint(_s.origin)===!1&&(_s.intersectSphere(No,Gh)===null||_s.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(zh.copy(r).invert(),_s.copy(t.ray).applyMatrix4(zh),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=o[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,O=w;S<O;S+=3){const I=a.getX(S),P=a.getX(S+1),F=a.getX(S+2);s=Ho(this,m,t,i,c,h,u,I,P,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const b=a.getX(p),w=a.getX(p+1),S=a.getX(p+2);s=Ho(this,o,t,i,c,h,u,b,w,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=o[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,O=w;S<O;S+=3){const I=S,P=S+1,F=S+2;s=Ho(this,m,t,i,c,h,u,I,P,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const b=p,w=p+1,S=p+2;s=Ho(this,o,t,i,c,h,u,b,w,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Sv(n,t,e,i,s,r,o,a){let l;if(t.side===Sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ls,a),l===null)return null;Go.copy(a),Go.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Go);return c<e.near||c>e.far?null:{distance:c,point:Go.clone(),object:n}}function Ho(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Fo),n.getVertexPosition(l,Oo),n.getVertexPosition(c,Bo);const h=Sv(n,t,e,i,Fo,Oo,Bo,Hh);if(h){const u=new $;$n.getBarycoord(Hh,Fo,Oo,Bo,u),s&&(h.uv=$n.getInterpolatedAttribute(s,a,l,c,u,new Ot)),r&&(h.uv1=$n.getInterpolatedAttribute(r,a,l,c,u,new Ot)),o&&(h.normal=$n.getInterpolatedAttribute(o,a,l,c,u,new $),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new $,materialIndex:0};$n.getNormal(Fo,Oo,Bo,d.normal),h.face=d,h.barycoord=u}return h}class Kn extends Gn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2));function _(x,p,m,b,w,S,O,I,P,F,q){const y=S/P,E=O/F,Z=S/2,k=O/2,J=I/2,at=P+1,G=F+1;let Q=0,X=0;const mt=new $;for(let yt=0;yt<G;yt++){const _t=yt*E-k;for(let It=0;It<at;It++){const Bt=It*y-Z;mt[x]=Bt*b,mt[p]=_t*w,mt[m]=J,c.push(mt.x,mt.y,mt.z),mt[x]=0,mt[p]=0,mt[m]=I>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(It/P),u.push(1-yt/F),Q+=1}}for(let yt=0;yt<F;yt++)for(let _t=0;_t<P;_t++){const It=d+_t+at*yt,Bt=d+_t+at*(yt+1),ot=d+(_t+1)+at*(yt+1),ft=d+(_t+1)+at*yt;l.push(It,Bt,ft),l.push(Bt,ot,ft),X+=6}a.addGroup(f,X,q),f+=X,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function _n(n){const t={};for(let e=0;e<n.length;e++){const i=yr(n[e]);for(const s in i)t[s]=i[s]}return t}function Ev(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function sp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const bv={clone:yr,merge:_n};var Tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends _o{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tv,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=Ev(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class rp extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new $,kh=new Ot,Vh=new Ot;class Oe extends rp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,kh,Vh),e.subVectors(Vh,kh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ys=-90,$s=1;class Rv extends dn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Oe(Ys,$s,t,e);s.layers=this.layers,this.add(s);const r=new Oe(Ys,$s,t,e);r.layers=this.layers,this.add(r);const o=new Oe(Ys,$s,t,e);o.layers=this.layers,this.add(o);const a=new Oe(Ys,$s,t,e);a.layers=this.layers,this.add(a);const l=new Oe(Ys,$s,t,e);l.layers=this.layers,this.add(l);const c=new Oe(Ys,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class _u extends yn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pv extends Is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new _u(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kn(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:rs});r.uniforms.tEquirect.value=e;const o=new R(s,r),a=e.minFilter;return e.minFilter===As&&(e.minFilter=Yn),new Rv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const wl=new $,Cv=new $,Iv=new le;class ws{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wl.subVectors(i,e).cross(Cv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Iv.getNormalMatrix(t),s=this.coplanarPoint(wl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new gu,ko=new $;class vu{constructor(t=new ws,e=new ws,i=new ws,s=new ws,r=new ws,o=new ws){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],x=s[10],p=s[11],m=s[12],b=s[13],w=s[14],S=s[15];if(i[0].setComponents(l-r,d-c,p-f,S-m).normalize(),i[1].setComponents(l+r,d+c,p+f,S+m).normalize(),i[2].setComponents(l+o,d+h,p+_,S+b).normalize(),i[3].setComponents(l-o,d-h,p-_,S-b).normalize(),i[4].setComponents(l-a,d-u,p-x,S-w).normalize(),e===Fi)i[5].setComponents(l+a,d+u,p+x,S+w).normalize();else if(e===_a)i[5].setComponents(a,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ko.x=s.normal.x>0?t.max.x:t.min.x,ko.y=s.normal.y>0?t.max.y:t.min.y,ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function op(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Lv(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],x=u[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ua extends Gn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],x=[],p=[];for(let m=0;m<h;m++){const b=m*d-o;for(let w=0;w<c;w++){const S=w*u-r;_.push(S,-b,0),x.push(0,0,1),p.push(w/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const w=b+c*m,S=b+c*(m+1),O=b+1+c*(m+1),I=b+1+c*m;f.push(w,S,I),f.push(S,O,I)}this.setIndex(f),this.setAttribute("position",new We(_,3)),this.setAttribute("normal",new We(x,3)),this.setAttribute("uv",new We(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dv=`#ifdef USE_ALPHAHASH
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
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ux=`
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
#endif`,ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oy=`#ifdef OPAQUE
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
}`,ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cy=`vec4 mvPosition = vec4( transformed, 1.0 );
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
}`,rM=`#define TOON
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
}`,oM=`uniform float size;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 color;
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
}`,ae={alphahash_fragment:Dv,alphahash_pars_fragment:Uv,alphamap_fragment:Nv,alphamap_pars_fragment:Fv,alphatest_fragment:Ov,alphatest_pars_fragment:Bv,aomap_fragment:zv,aomap_pars_fragment:Gv,batching_pars_vertex:Hv,batching_vertex:kv,begin_vertex:Vv,beginnormal_vertex:Wv,bsdfs:Xv,iridescence_fragment:qv,bumpmap_pars_fragment:Yv,clipping_planes_fragment:$v,clipping_planes_pars_fragment:jv,clipping_planes_pars_vertex:Kv,clipping_planes_vertex:Zv,color_fragment:Jv,color_pars_fragment:Qv,color_pars_vertex:tx,color_vertex:ex,common:nx,cube_uv_reflection_fragment:ix,defaultnormal_vertex:sx,displacementmap_pars_vertex:rx,displacementmap_vertex:ox,emissivemap_fragment:ax,emissivemap_pars_fragment:lx,colorspace_fragment:cx,colorspace_pars_fragment:ux,envmap_fragment:hx,envmap_common_pars_fragment:dx,envmap_pars_fragment:fx,envmap_pars_vertex:px,envmap_physical_pars_fragment:bx,envmap_vertex:mx,fog_vertex:gx,fog_pars_vertex:_x,fog_fragment:vx,fog_pars_fragment:xx,gradientmap_pars_fragment:yx,lightmap_pars_fragment:Mx,lights_lambert_fragment:wx,lights_lambert_pars_fragment:Sx,lights_pars_begin:Ex,lights_toon_fragment:Tx,lights_toon_pars_fragment:Ax,lights_phong_fragment:Rx,lights_phong_pars_fragment:Px,lights_physical_fragment:Cx,lights_physical_pars_fragment:Ix,lights_fragment_begin:Lx,lights_fragment_maps:Dx,lights_fragment_end:Ux,logdepthbuf_fragment:Nx,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Ox,logdepthbuf_vertex:Bx,map_fragment:zx,map_pars_fragment:Gx,map_particle_fragment:Hx,map_particle_pars_fragment:kx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Wx,morphinstance_vertex:Xx,morphcolor_vertex:qx,morphnormal_vertex:Yx,morphtarget_pars_vertex:$x,morphtarget_vertex:jx,normal_fragment_begin:Kx,normal_fragment_maps:Zx,normal_pars_fragment:Jx,normal_pars_vertex:Qx,normal_vertex:ty,normalmap_pars_fragment:ey,clearcoat_normal_fragment_begin:ny,clearcoat_normal_fragment_maps:iy,clearcoat_pars_fragment:sy,iridescence_pars_fragment:ry,opaque_fragment:oy,packing:ay,premultiplied_alpha_fragment:ly,project_vertex:cy,dithering_fragment:uy,dithering_pars_fragment:hy,roughnessmap_fragment:dy,roughnessmap_pars_fragment:fy,shadowmap_pars_fragment:py,shadowmap_pars_vertex:my,shadowmap_vertex:gy,shadowmask_pars_fragment:_y,skinbase_vertex:vy,skinning_pars_vertex:xy,skinning_vertex:yy,skinnormal_vertex:My,specularmap_fragment:wy,specularmap_pars_fragment:Sy,tonemapping_fragment:Ey,tonemapping_pars_fragment:by,transmission_fragment:Ty,transmission_pars_fragment:Ay,uv_pars_fragment:Ry,uv_pars_vertex:Py,uv_vertex:Cy,worldpos_vertex:Iy,background_vert:Ly,background_frag:Dy,backgroundCube_vert:Uy,backgroundCube_frag:Ny,cube_vert:Fy,cube_frag:Oy,depth_vert:By,depth_frag:zy,distanceRGBA_vert:Gy,distanceRGBA_frag:Hy,equirect_vert:ky,equirect_frag:Vy,linedashed_vert:Wy,linedashed_frag:Xy,meshbasic_vert:qy,meshbasic_frag:Yy,meshlambert_vert:$y,meshlambert_frag:jy,meshmatcap_vert:Ky,meshmatcap_frag:Zy,meshnormal_vert:Jy,meshnormal_frag:Qy,meshphong_vert:tM,meshphong_frag:eM,meshphysical_vert:nM,meshphysical_frag:iM,meshtoon_vert:sM,meshtoon_frag:rM,points_vert:oM,points_frag:aM,shadow_vert:lM,shadow_frag:cM,sprite_vert:uM,sprite_frag:hM},Ft={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},di={basic:{uniforms:_n([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:_n([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:_n([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:_n([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:_n([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:_n([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:_n([Ft.points,Ft.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:_n([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:_n([Ft.common,Ft.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:_n([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:_n([Ft.sprite,Ft.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:_n([Ft.common,Ft.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:_n([Ft.lights,Ft.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};di.physical={uniforms:_n([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Vo={r:0,b:0,g:0},xs=new gi,dM=new Ne;function fM(n,t,e,i,s,r,o){const a=new _e(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function x(b){let w=!1;const S=_(b);S===null?m(a,l):S&&S.isColor&&(m(S,1),w=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,w){const S=_(w);S&&(S.isCubeTexture||S.mapping===La)?(h===void 0&&(h=new R(new Kn(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:yr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xs.copy(w.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dM.makeRotationFromEuler(xs)),h.material.toneMapped=Se.getTransfer(S.colorSpace)!==Ue,(u!==S||d!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new R(new Ua(2,2),new ei({name:"BackgroundMaterial",uniforms:yr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Se.getTransfer(S.colorSpace)!==Ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,w){b.getRGB(Vo,sp(n)),i.buffers.color.setClear(Vo.r,Vo.g,Vo.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),l=w,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:p}}function pM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,E,Z,k,J){let at=!1;const G=u(k,Z,E);r!==G&&(r=G,c(r.object)),at=f(y,k,Z,J),at&&_(y,k,Z,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,S(y,E,Z,k),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,E,Z){const k=Z.wireframe===!0;let J=i[y.id];J===void 0&&(J={},i[y.id]=J);let at=J[E.id];at===void 0&&(at={},J[E.id]=at);let G=at[k];return G===void 0&&(G=d(l()),at[k]=G),G}function d(y){const E=[],Z=[],k=[];for(let J=0;J<e;J++)E[J]=0,Z[J]=0,k[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:Z,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,E,Z,k){const J=r.attributes,at=E.attributes;let G=0;const Q=Z.getAttributes();for(const X in Q)if(Q[X].location>=0){const yt=J[X];let _t=at[X];if(_t===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),yt===void 0||yt.attribute!==_t||_t&&yt.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function _(y,E,Z,k){const J={},at=E.attributes;let G=0;const Q=Z.getAttributes();for(const X in Q)if(Q[X].location>=0){let yt=at[X];yt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor));const _t={};_t.attribute=yt,yt&&yt.data&&(_t.data=yt.data),J[X]=_t,G++}r.attributes=J,r.attributesNum=G,r.index=k}function x(){const y=r.newAttributes;for(let E=0,Z=y.length;E<Z;E++)y[E]=0}function p(y){m(y,0)}function m(y,E){const Z=r.newAttributes,k=r.enabledAttributes,J=r.attributeDivisors;Z[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),J[y]!==E&&(n.vertexAttribDivisor(y,E),J[y]=E)}function b(){const y=r.newAttributes,E=r.enabledAttributes;for(let Z=0,k=E.length;Z<k;Z++)E[Z]!==y[Z]&&(n.disableVertexAttribArray(Z),E[Z]=0)}function w(y,E,Z,k,J,at,G){G===!0?n.vertexAttribIPointer(y,E,Z,J,at):n.vertexAttribPointer(y,E,Z,k,J,at)}function S(y,E,Z,k){x();const J=k.attributes,at=Z.getAttributes(),G=E.defaultAttributeValues;for(const Q in at){const X=at[Q];if(X.location>=0){let mt=J[Q];if(mt===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const yt=mt.normalized,_t=mt.itemSize,It=t.get(mt);if(It===void 0)continue;const Bt=It.buffer,ot=It.type,ft=It.bytesPerElement,wt=ot===n.INT||ot===n.UNSIGNED_INT||mt.gpuType===lu;if(mt.isInterleavedBufferAttribute){const U=mt.data,ct=U.stride,rt=mt.offset;if(U.isInstancedInterleavedBuffer){for(let ut=0;ut<X.locationSize;ut++)m(X.location+ut,U.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ut=0;ut<X.locationSize;ut++)p(X.location+ut);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let ut=0;ut<X.locationSize;ut++)w(X.location+ut,_t/X.locationSize,ot,yt,ct*ft,(rt+_t/X.locationSize*ut)*ft,wt)}else{if(mt.isInstancedBufferAttribute){for(let U=0;U<X.locationSize;U++)m(X.location+U,mt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let U=0;U<X.locationSize;U++)p(X.location+U);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let U=0;U<X.locationSize;U++)w(X.location+U,_t/X.locationSize,ot,yt,_t*ft,_t/X.locationSize*U*ft,wt)}}else if(G!==void 0){const yt=G[Q];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(X.location,yt);break;case 3:n.vertexAttrib3fv(X.location,yt);break;case 4:n.vertexAttrib4fv(X.location,yt);break;default:n.vertexAttrib1fv(X.location,yt)}}}}b()}function O(){F();for(const y in i){const E=i[y];for(const Z in E){const k=E[Z];for(const J in k)h(k[J].object),delete k[J];delete E[Z]}delete i[y]}}function I(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const Z in E){const k=E[Z];for(const J in k)h(k[J].object),delete k[J];delete E[Z]}delete i[y.id]}function P(y){for(const E in i){const Z=i[E];if(Z[y.id]===void 0)continue;const k=Z[y.id];for(const J in k)h(k[J].object),delete k[J];delete Z[y.id]}}function F(){q(),o=!0,r!==s&&(r=s,c(r.object))}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:q,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function mM(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<d.length;x++)e.update(_,i,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==jn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==zi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ni&&!F)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:O,maxSamples:I}}function _M(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ws,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const b=r?0:i,w=b*4;let S=m.clippingState||null;l.value=S,S=h(_,d,w,f);for(let O=0;O!==w;++O)S[O]=e[O];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const m=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,S=f;w!==x;++w,S+=4)o.copy(u[w]).applyMatrix4(b,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function vM(n){let t=new WeakMap;function e(o,a){return a===so?o.mapping=gr:a===sc&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===so||a===sc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Pv(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class ap extends rp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const tr=4,Wh=[.125,.215,.35,.446,.526,.582],bs=20,Sl=new ap,Xh=new _e;let El=null,bl=0,Tl=0,Al=!1;const Ss=(1+Math.sqrt(5))/2,js=1/Ss,qh=[new $(-Ss,js,0),new $(Ss,js,0),new $(-js,0,Ss),new $(js,0,Ss),new $(0,Ss,-js),new $(0,Ss,js),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){El=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(El,bl,Tl),this._renderer.xr.enabled=Al,t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gr||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),El=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:po,format:jn,colorSpace:hs,depthBuffer:!1},s=$h(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(r)),this._blurMaterial=yM(r,t,e)}return s}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,Sl)}_sceneToCubeUV(t,e,i,s){const a=new Oe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xh),h.toneMapping=os,h.autoClear=!1;const f=new ti({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new R(new Kn,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Xh),x=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const w=this._cubeSize;Wo(s,b*w,m>2?w:0,w,w),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===gr||t.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new R(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Wo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Sl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qh[(s-r-1)%qh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new R(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bs-1),x=r/_,p=isFinite(r)?1+Math.floor(h*x):bs;p>bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bs}`);const m=[];let b=0;for(let P=0;P<bs;++P){const F=P/x,q=Math.exp(-F*F/2);m.push(q),P===0?b+=q:P<p&&(b+=2*q)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-i;const S=this._sizeLods[s],O=3*S*(s>w-tr?s-w+tr:0),I=4*(this._cubeSize-S);Wo(e,O,I,3*S,2*S),l.setRenderTarget(e),l.render(u,Sl)}}function xM(n){const t=[],e=[],i=[];let s=n;const r=n-tr+1+Wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-tr?l=Wh[o-n+tr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,x=3,p=2,m=1,b=new Float32Array(x*_*f),w=new Float32Array(p*_*f),S=new Float32Array(m*_*f);for(let I=0;I<f;I++){const P=I%3*2/3-1,F=I>2?0:-1,q=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];b.set(q,x*_*I),w.set(d,p*_*I);const y=[I,I,I,I,I,I];S.set(y,m*_*I)}const O=new Gn;O.setAttribute("position",new pi(b,x)),O.setAttribute("uv",new pi(w,p)),O.setAttribute("faceIndex",new pi(S,m)),t.push(O),s>tr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $h(n,t,e){const i=new Is(n,t,e);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function yM(n,t,e){const i=new Float32Array(bs),s=new $(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function jh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Kh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

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
	`}function MM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===so||l===sc,h=l===gr||l===_r;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Yh(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Yh(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function wM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&oa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function SM(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const x=f[_];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let x=0;if(f!==null){const b=f.array;x=f.version;for(let w=0,S=b.length;w<S;w+=3){const O=b[w+0],I=b[w+1],P=b[w+2];d.push(O,I,I,P,P,O)}}else if(_!==void 0){const b=_.array;x=_.version;for(let w=0,S=b.length/3-1;w<S;w+=3){const O=w+0,I=w+1,P=w+2;d.push(O,I,I,P,P,O)}}else return;const p=new(Zf(d)?ip:np)(d,1);p.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function EM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,d*o,_),e.update(f,i,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,i,1)}function u(d,f,_,x){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,_);let m=0;for(let b=0;b<_;b++)m+=f[b];for(let b=0;b<x.length;b++)e.update(m,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function TM(n,t,e){const i=new WeakMap,s=new Pe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let O=a.attributes.position.count*S,I=1;O>t.maxTextureSize&&(I=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*I*4*u),F=new Qf(P,O,I,u);F.type=Ni,F.needsUpdate=!0;const q=S*4;for(let E=0;E<u;E++){const Z=m[E],k=b[E],J=w[E],at=O*I*4*E;for(let G=0;G<Z.count;G++){const Q=G*q;_===!0&&(s.fromBufferAttribute(Z,G),P[at+Q+0]=s.x,P[at+Q+1]=s.y,P[at+Q+2]=s.z,P[at+Q+3]=0),x===!0&&(s.fromBufferAttribute(k,G),P[at+Q+4]=s.x,P[at+Q+5]=s.y,P[at+Q+6]=s.z,P[at+Q+7]=0),p===!0&&(s.fromBufferAttribute(J,G),P[at+Q+8]=s.x,P[at+Q+9]=s.y,P[at+Q+10]=s.z,P[at+Q+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:F,size:new Ot(O,I)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function AM(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class lp extends yn{constructor(t,e,i,s,r,o,a,l,c,h=lr){if(h!==lr&&h!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===lr&&(i=Cs),i===void 0&&h===xr&&(i=vr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cp=new yn,Zh=new lp(1,1),up=new Qf,hp=new dv,dp=new _u,Jh=[],Qh=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function Sr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Jh[s];if(r===void 0&&(r=new Float32Array(s),Jh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Na(n,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function RM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function PM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function CM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function IM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function LM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;nd.set(i),n.uniformMatrix2fv(this.addr,!1,nd),Ze(e,i)}}function DM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;ed.set(i),n.uniformMatrix3fv(this.addr,!1,ed),Ze(e,i)}}function UM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;td.set(i),n.uniformMatrix4fv(this.addr,!1,td),Ze(e,i)}}function NM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function FM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function OM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function BM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function zM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function GM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function HM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function kM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function VM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zh.compareFunction=Kf,r=Zh):r=cp,e.setTexture2D(t||r,s)}function WM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||hp,s)}function XM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||dp,s)}function qM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||up,s)}function YM(n){switch(n){case 5126:return RM;case 35664:return PM;case 35665:return CM;case 35666:return IM;case 35674:return LM;case 35675:return DM;case 35676:return UM;case 5124:case 35670:return NM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return GM;case 36295:return HM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}function $M(n,t){n.uniform1fv(this.addr,t)}function jM(n,t){const e=Sr(t,this.size,2);n.uniform2fv(this.addr,e)}function KM(n,t){const e=Sr(t,this.size,3);n.uniform3fv(this.addr,e)}function ZM(n,t){const e=Sr(t,this.size,4);n.uniform4fv(this.addr,e)}function JM(n,t){const e=Sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function QM(n,t){const e=Sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tw(n,t){const e=Sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ew(n,t){n.uniform1iv(this.addr,t)}function nw(n,t){n.uniform2iv(this.addr,t)}function iw(n,t){n.uniform3iv(this.addr,t)}function sw(n,t){n.uniform4iv(this.addr,t)}function rw(n,t){n.uniform1uiv(this.addr,t)}function ow(n,t){n.uniform2uiv(this.addr,t)}function aw(n,t){n.uniform3uiv(this.addr,t)}function lw(n,t){n.uniform4uiv(this.addr,t)}function cw(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||cp,r[o])}function uw(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hp,r[o])}function hw(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||dp,r[o])}function dw(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||up,r[o])}function fw(n){switch(n){case 5126:return $M;case 35664:return jM;case 35665:return KM;case 35666:return ZM;case 35674:return JM;case 35675:return QM;case 35676:return tw;case 5124:case 35670:return ew;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return sw;case 5125:return rw;case 36294:return ow;case 36295:return aw;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return dw}}class pw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=YM(e.type)}}class mw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fw(e.type)}}class gw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Rl=/(\w+)(\])?(\[|\.)?/g;function id(n,t){n.seq.push(t),n.map[t.id]=t}function _w(n,t,e){const i=n.name,s=i.length;for(Rl.lastIndex=0;;){const r=Rl.exec(i),o=Rl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){id(e,c===void 0?new pw(a,n,t):new mw(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new gw(a),id(e,u)),e=u}}}class aa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);_w(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function sd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const vw=37297;let xw=0;function yw(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Mw(n){const t=Se.getPrimaries(Se.workingColorSpace),e=Se.getPrimaries(n);let i;switch(t===e?i="":t===ga&&e===ma?i="LinearDisplayP3ToLinearSRGB":t===ma&&e===ga&&(i="LinearSRGBToLinearDisplayP3"),n){case hs:case Da:return[i,"LinearTransferOETF"];case Xn:case pu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+yw(n.getShaderSource(t),o)}else return s}function ww(n,t){const e=Mw(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Sw(n,t){let e;switch(t){case S_:e="Linear";break;case E_:e="Reinhard";break;case b_:e="Cineon";break;case T_:e="ACESFilmic";break;case R_:e="AgX";break;case P_:e="Neutral";break;case A_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xo=new $;function Ew(){Se.getLuminanceCoefficients(Xo);const n=Xo.x.toFixed(4),t=Xo.y.toFixed(4),e=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Tw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Aw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Fr(n){return n!==""}function od(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(n){return n.replace(Rw,Cw)}const Pw=new Map;function Cw(n,t){let e=ae[t];if(e===void 0){const i=Pw.get(t);if(i!==void 0)e=ae[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lc(e)}const Iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(n){return n.replace(Iw,Lw)}function Lw(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Dw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ff?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===n_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function Uw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case _r:t="ENVMAP_TYPE_CUBE";break;case La:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _r:t="ENVMAP_MODE_REFRACTION";break}return t}function Fw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Of:t="ENVMAP_BLENDING_MULTIPLY";break;case M_:t="ENVMAP_BLENDING_MIX";break;case w_:t="ENVMAP_BLENDING_ADD";break}return t}function Ow(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Bw(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Dw(e),c=Uw(e),h=Nw(e),u=Fw(e),d=Ow(e),f=bw(e),_=Tw(r),x=s.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fr).join(`
`),m.length>0&&(m+=`
`)):(p=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),m=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==os?"#define TONE_MAPPING":"",e.toneMapping!==os?ae.tonemapping_pars_fragment:"",e.toneMapping!==os?Sw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,ww("linearToOutputTexel",e.outputColorSpace),Ew(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),o=Lc(o),o=od(o,e),o=ad(o,e),a=Lc(a),a=od(a,e),a=ad(a,e),o=ld(o),a=ld(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=b+p+o,S=b+m+a,O=sd(s,s.VERTEX_SHADER,w),I=sd(s,s.FRAGMENT_SHADER,S);s.attachShader(x,O),s.attachShader(x,I),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(E){if(n.debug.checkShaderErrors){const Z=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(O).trim(),J=s.getShaderInfoLog(I).trim();let at=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,O,I);else{const Q=rd(s,O,"vertex"),X=rd(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+Z+`
`+Q+`
`+X)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(k===""||J==="")&&(G=!1);G&&(E.diagnostics={runnable:at,programLog:Z,vertexShader:{log:k,prefix:p},fragmentShader:{log:J,prefix:m}})}s.deleteShader(O),s.deleteShader(I),F=new aa(s,x),q=Aw(s,x)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let q;this.getAttributes=function(){return q===void 0&&P(this),q};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,vw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=I,this}let zw=0;class Gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Hw(t),e.set(t,i)),i}}class Hw{constructor(t){this.id=zw++,this.code=t,this.usedTimes=0}}function kw(n,t,e,i,s,r,o){const a=new tp,l=new Gw,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,E,Z,k,J){const at=k.fog,G=J.geometry,Q=y.isMeshStandardMaterial?k.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||Q),mt=X&&X.mapping===La?X.image.height:null,yt=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,It=_t!==void 0?_t.length:0;let Bt=0;G.morphAttributes.position!==void 0&&(Bt=1),G.morphAttributes.normal!==void 0&&(Bt=2),G.morphAttributes.color!==void 0&&(Bt=3);let ot,ft,wt,U;if(yt){const ie=di[yt];ot=ie.vertexShader,ft=ie.fragmentShader}else ot=y.vertexShader,ft=y.fragmentShader,l.update(y),wt=l.getVertexShaderID(y),U=l.getFragmentShaderID(y);const ct=n.getRenderTarget(),rt=J.isInstancedMesh===!0,ut=J.isBatchedMesh===!0,bt=!!y.map,et=!!y.matcap,g=!!X,T=!!y.aoMap,L=!!y.lightMap,N=!!y.bumpMap,D=!!y.normalMap,V=!!y.displacementMap,K=!!y.emissiveMap,M=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,W=y.clearcoat>0,z=y.dispersion>0,H=y.iridescence>0,ht=y.sheen>0,lt=y.transmission>0,pt=C&&!!y.anisotropyMap,Tt=W&&!!y.clearcoatMap,dt=W&&!!y.clearcoatNormalMap,Mt=W&&!!y.clearcoatRoughnessMap,Ct=H&&!!y.iridescenceMap,Lt=H&&!!y.iridescenceThicknessMap,At=ht&&!!y.sheenColorMap,kt=ht&&!!y.sheenRoughnessMap,Ut=!!y.specularMap,Vt=!!y.specularColorMap,B=!!y.specularIntensityMap,gt=lt&&!!y.transmissionMap,nt=lt&&!!y.thicknessMap,tt=!!y.gradientMap,xt=!!y.alphaMap,vt=y.alphaTest>0,zt=!!y.alphaHash,Yt=!!y.extensions;let Qt=os;y.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Qt=n.toneMapping);const jt={shaderID:yt,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:ft,defines:y.defines,customVertexShaderID:wt,customFragmentShaderID:U,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ut,batchingColor:ut&&J._colorsTexture!==null,instancing:rt,instancingColor:rt&&J.instanceColor!==null,instancingMorph:rt&&J.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:hs,alphaToCoverage:!!y.alphaToCoverage,map:bt,matcap:et,envMap:g,envMapMode:g&&X.mapping,envMapCubeUVHeight:mt,aoMap:T,lightMap:L,bumpMap:N,normalMap:D,displacementMap:f&&V,emissiveMap:K,normalMapObjectSpace:D&&y.normalMapType===D_,normalMapTangentSpace:D&&y.normalMapType===jf,metalnessMap:M,roughnessMap:v,anisotropy:C,anisotropyMap:pt,clearcoat:W,clearcoatMap:Tt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Mt,dispersion:z,iridescence:H,iridescenceMap:Ct,iridescenceThicknessMap:Lt,sheen:ht,sheenColorMap:At,sheenRoughnessMap:kt,specularMap:Ut,specularColorMap:Vt,specularIntensityMap:B,transmission:lt,transmissionMap:gt,thicknessMap:nt,gradientMap:tt,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:xt,alphaTest:vt,alphaHash:zt,combine:y.combine,mapUv:bt&&p(y.map.channel),aoMapUv:T&&p(y.aoMap.channel),lightMapUv:L&&p(y.lightMap.channel),bumpMapUv:N&&p(y.bumpMap.channel),normalMapUv:D&&p(y.normalMap.channel),displacementMapUv:V&&p(y.displacementMap.channel),emissiveMapUv:K&&p(y.emissiveMap.channel),metalnessMapUv:M&&p(y.metalnessMap.channel),roughnessMapUv:v&&p(y.roughnessMap.channel),anisotropyMapUv:pt&&p(y.anisotropyMap.channel),clearcoatMapUv:Tt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:kt&&p(y.sheenRoughnessMap.channel),specularMapUv:Ut&&p(y.specularMap.channel),specularColorMapUv:Vt&&p(y.specularColorMap.channel),specularIntensityMapUv:B&&p(y.specularIntensityMap.channel),transmissionMapUv:gt&&p(y.transmissionMap.channel),thicknessMapUv:nt&&p(y.thicknessMap.channel),alphaMapUv:xt&&p(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(D||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!G.attributes.uv&&(bt||xt),fog:!!at,useFog:y.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Bt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,decodeVideoTexture:bt&&y.map.isVideoTexture===!0&&Se.getTransfer(y.map.colorSpace)===Ue,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===he,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Yt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&y.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function b(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Z in y.defines)E.push(Z),E.push(y.defines[Z]);return y.isRawShaderMaterial===!1&&(w(E,y),S(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function w(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function O(y){const E=x[y.type];let Z;if(E){const k=di[E];Z=bv.clone(k.uniforms)}else Z=y.uniforms;return Z}function I(y,E){let Z;for(let k=0,J=h.length;k<J;k++){const at=h[k];if(at.cacheKey===E){Z=at,++Z.usedTimes;break}}return Z===void 0&&(Z=new Bw(n,E,y,r),h.push(Z)),Z}function P(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function F(y){l.remove(y)}function q(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:O,acquireProgram:I,releaseProgram:P,releaseShaderCache:F,programs:h,dispose:q}}function Vw(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ww(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ud(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function hd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,_,x,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:x,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,d,f,_,x,p){const m=o(u,d,f,_,x,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,_,x,p){const m=o(u,d,f,_,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Ww),i.length>1&&i.sort(d||ud),s.length>1&&s.sort(d||ud)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Xw(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new hd,n.set(i,[o])):s>=r.length?(o=new hd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function qw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new _e};break;case"SpotLight":e={position:new $,direction:new $,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function Yw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let $w=0;function jw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Kw(n){const t=new qw,e=Yw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const s=new $,r=new Ne,o=new Ne;function a(c){let h=0,u=0,d=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let f=0,_=0,x=0,p=0,m=0,b=0,w=0,S=0,O=0,I=0,P=0;c.sort(jw);for(let q=0,y=c.length;q<y;q++){const E=c[q],Z=E.color,k=E.intensity,J=E.distance,at=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=Z.r*k,u+=Z.g*k,d+=Z.b*k;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],k);P++}else if(E.isDirectionalLight){const G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Q=E.shadow,X=e.get(E);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=at,i.directionalShadowMatrix[f]=E.shadow.matrix,b++}i.directional[f]=G,f++}else if(E.isSpotLight){const G=t.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(Z).multiplyScalar(k),G.distance=J,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[x]=G;const Q=E.shadow;if(E.map&&(i.spotLightMap[O]=E.map,O++,Q.updateMatrices(E),E.castShadow&&I++),i.spotLightMatrix[x]=Q.matrix,E.castShadow){const X=e.get(E);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=at,S++}x++}else if(E.isRectAreaLight){const G=t.get(E);G.color.copy(Z).multiplyScalar(k),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=G,p++}else if(E.isPointLight){const G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){const Q=E.shadow,X=e.get(E);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=at,i.pointShadowMatrix[_]=E.shadow.matrix,w++}i.point[_]=G,_++}else if(E.isHemisphereLight){const G=t.get(E);G.skyColor.copy(E.color).multiplyScalar(k),G.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[m]=G,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ft.LTC_FLOAT_1,i.rectAreaLTC2=Ft.LTC_FLOAT_2):(i.rectAreaLTC1=Ft.LTC_HALF_1,i.rectAreaLTC2=Ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==f||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==p||F.hemiLength!==m||F.numDirectionalShadows!==b||F.numPointShadows!==w||F.numSpotShadows!==S||F.numSpotMaps!==O||F.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,F.directionalLength=f,F.pointLength=_,F.spotLength=x,F.rectAreaLength=p,F.hemiLength=m,F.numDirectionalShadows=b,F.numPointShadows=w,F.numSpotShadows=S,F.numSpotMaps=O,F.numLightProbes=P,i.version=$w++)}function l(c,h){let u=0,d=0,f=0,_=0,x=0;const p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const w=c[m];if(w.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(w.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(w.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function dd(n){const t=new Kw(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zw(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new dd(n),t.set(s,[a])):r>=o.length?(a=new dd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Jw extends _o{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qw extends _o{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tS=`void main() {
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
}`;function nS(n,t,e){let i=new vu;const s=new Ot,r=new Ot,o=new Pe,a=new Jw({depthPacking:L_}),l=new Qw,c={},h=e.maxTextureSize,u={[ls]:Sn,[Sn]:ls,[he]:he},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:tS,fragmentShader:eS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Gn;_.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new R(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff;let m=this.type;this.render=function(I,P,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;const q=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(rs),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const k=m!==Li&&this.type===Li,J=m===Li&&this.type!==Li;for(let at=0,G=I.length;at<G;at++){const Q=I[at],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const mt=X.getFrameExtents();if(s.multiply(mt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,X.mapSize.y=r.y)),X.map===null||k===!0||J===!0){const _t=this.type!==Li?{minFilter:Nn,magFilter:Nn}:{};X.map!==null&&X.map.dispose(),X.map=new Is(s.x,s.y,_t),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const yt=X.getViewportCount();for(let _t=0;_t<yt;_t++){const It=X.getViewport(_t);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),Z.viewport(o),X.updateMatrices(Q,_t),i=X.getFrustum(),S(P,F,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===Li&&b(X,F),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(q,y,E)};function b(I,P){const F=t.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Is(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,F,d,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,F,f,x,null)}function w(I,P,F,q){let y=null;const E=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(E!==void 0)y=E;else if(y=F.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Z=y.uuid,k=P.uuid;let J=c[Z];J===void 0&&(J={},c[Z]=J);let at=J[k];at===void 0&&(at=y.clone(),J[k]=at,P.addEventListener("dispose",O)),y=at}if(y.visible=P.visible,y.wireframe=P.wireframe,q===Li?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Z=n.properties.get(y);Z.light=F}return y}function S(I,P,F,q,y){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===Li)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const k=t.update(I),J=I.material;if(Array.isArray(J)){const at=k.groups;for(let G=0,Q=at.length;G<Q;G++){const X=at[G],mt=J[X.materialIndex];if(mt&&mt.visible){const yt=w(I,mt,q,y);I.onBeforeShadow(n,I,P,F,k,yt,X),n.renderBufferDirect(F,null,k,yt,I,X),I.onAfterShadow(n,I,P,F,k,yt,X)}}}else if(J.visible){const at=w(I,J,q,y);I.onBeforeShadow(n,I,P,F,k,at,null),n.renderBufferDirect(F,null,k,at,I,null),I.onAfterShadow(n,I,P,F,k,at,null)}}const Z=I.children;for(let k=0,J=Z.length;k<J;k++)S(Z[k],P,F,q,y)}function O(I){I.target.removeEventListener("dispose",O);for(const F in c){const q=c[F],y=I.target.uuid;y in q&&(q[y].dispose(),delete q[y])}}}const iS={[Zl]:Jl,[Ql]:nc,[tc]:ic,[mr]:ec,[Jl]:Zl,[nc]:Ql,[ic]:tc,[ec]:mr};function sS(n){function t(){let B=!1;const gt=new Pe;let nt=null;const tt=new Pe(0,0,0,0);return{setMask:function(xt){nt!==xt&&!B&&(n.colorMask(xt,xt,xt,xt),nt=xt)},setLocked:function(xt){B=xt},setClear:function(xt,vt,zt,Yt,Qt){Qt===!0&&(xt*=Yt,vt*=Yt,zt*=Yt),gt.set(xt,vt,zt,Yt),tt.equals(gt)===!1&&(n.clearColor(xt,vt,zt,Yt),tt.copy(gt))},reset:function(){B=!1,nt=null,tt.set(-1,0,0,0)}}}function e(){let B=!1,gt=!1,nt=null,tt=null,xt=null;return{setReversed:function(vt){gt=vt},setTest:function(vt){vt?wt(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(vt){nt!==vt&&!B&&(n.depthMask(vt),nt=vt)},setFunc:function(vt){if(gt&&(vt=iS[vt]),tt!==vt){switch(vt){case Zl:n.depthFunc(n.NEVER);break;case Jl:n.depthFunc(n.ALWAYS);break;case Ql:n.depthFunc(n.LESS);break;case mr:n.depthFunc(n.LEQUAL);break;case tc:n.depthFunc(n.EQUAL);break;case ec:n.depthFunc(n.GEQUAL);break;case nc:n.depthFunc(n.GREATER);break;case ic:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=vt}},setLocked:function(vt){B=vt},setClear:function(vt){xt!==vt&&(n.clearDepth(vt),xt=vt)},reset:function(){B=!1,nt=null,tt=null,xt=null}}}function i(){let B=!1,gt=null,nt=null,tt=null,xt=null,vt=null,zt=null,Yt=null,Qt=null;return{setTest:function(jt){B||(jt?wt(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(jt){gt!==jt&&!B&&(n.stencilMask(jt),gt=jt)},setFunc:function(jt,ie,St){(nt!==jt||tt!==ie||xt!==St)&&(n.stencilFunc(jt,ie,St),nt=jt,tt=ie,xt=St)},setOp:function(jt,ie,St){(vt!==jt||zt!==ie||Yt!==St)&&(n.stencilOp(jt,ie,St),vt=jt,zt=ie,Yt=St)},setLocked:function(jt){B=jt},setClear:function(jt){Qt!==jt&&(n.clearStencil(jt),Qt=jt)},reset:function(){B=!1,gt=null,nt=null,tt=null,xt=null,vt=null,zt=null,Yt=null,Qt=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,p=null,m=null,b=null,w=null,S=null,O=null,I=new _e(0,0,0),P=0,F=!1,q=null,y=null,E=null,Z=null,k=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,G=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),at=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),at=G>=2);let X=null,mt={};const yt=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),It=new Pe().fromArray(yt),Bt=new Pe().fromArray(_t);function ot(B,gt,nt,tt){const xt=new Uint8Array(4),vt=n.createTexture();n.bindTexture(B,vt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<nt;zt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(gt+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return vt}const ft={};ft[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),wt(n.DEPTH_TEST),r.setFunc(mr),L(!1),N(xh),wt(n.CULL_FACE),g(rs);function wt(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function U(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function ct(B,gt){return h[B]!==gt?(n.bindFramebuffer(B,gt),h[B]=gt,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function rt(B,gt){let nt=d,tt=!1;if(B){nt=u.get(gt),nt===void 0&&(nt=[],u.set(gt,nt));const xt=B.textures;if(nt.length!==xt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,zt=xt.length;vt<zt;vt++)nt[vt]=n.COLOR_ATTACHMENT0+vt;nt.length=xt.length,tt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,tt=!0);tt&&n.drawBuffers(nt)}function ut(B){return f!==B?(n.useProgram(B),f=B,!0):!1}const bt={[Es]:n.FUNC_ADD,[s_]:n.FUNC_SUBTRACT,[r_]:n.FUNC_REVERSE_SUBTRACT};bt[o_]=n.MIN,bt[a_]=n.MAX;const et={[l_]:n.ZERO,[c_]:n.ONE,[u_]:n.SRC_COLOR,[jl]:n.SRC_ALPHA,[g_]:n.SRC_ALPHA_SATURATE,[p_]:n.DST_COLOR,[d_]:n.DST_ALPHA,[h_]:n.ONE_MINUS_SRC_COLOR,[Kl]:n.ONE_MINUS_SRC_ALPHA,[m_]:n.ONE_MINUS_DST_COLOR,[f_]:n.ONE_MINUS_DST_ALPHA,[__]:n.CONSTANT_COLOR,[v_]:n.ONE_MINUS_CONSTANT_COLOR,[x_]:n.CONSTANT_ALPHA,[y_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,gt,nt,tt,xt,vt,zt,Yt,Qt,jt){if(B===rs){_===!0&&(U(n.BLEND),_=!1);return}if(_===!1&&(wt(n.BLEND),_=!0),B!==i_){if(B!==x||jt!==F){if((p!==Es||w!==Es)&&(n.blendEquation(n.FUNC_ADD),p=Es,w=Es),jt)switch(B){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.ONE,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,b=null,S=null,O=null,I.set(0,0,0),P=0,x=B,F=jt}return}xt=xt||gt,vt=vt||nt,zt=zt||tt,(gt!==p||xt!==w)&&(n.blendEquationSeparate(bt[gt],bt[xt]),p=gt,w=xt),(nt!==m||tt!==b||vt!==S||zt!==O)&&(n.blendFuncSeparate(et[nt],et[tt],et[vt],et[zt]),m=nt,b=tt,S=vt,O=zt),(Yt.equals(I)===!1||Qt!==P)&&(n.blendColor(Yt.r,Yt.g,Yt.b,Qt),I.copy(Yt),P=Qt),x=B,F=!1}function T(B,gt){B.side===he?U(n.CULL_FACE):wt(n.CULL_FACE);let nt=B.side===Sn;gt&&(nt=!nt),L(nt),B.blending===ar&&B.transparent===!1?g(rs):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const tt=B.stencilWrite;o.setTest(tt),tt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),V(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?wt(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){q!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),q=B)}function N(B){B!==t_?(wt(n.CULL_FACE),B!==y&&(B===xh?n.cullFace(n.BACK):B===e_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),y=B}function D(B){B!==E&&(at&&n.lineWidth(B),E=B)}function V(B,gt,nt){B?(wt(n.POLYGON_OFFSET_FILL),(Z!==gt||k!==nt)&&(n.polygonOffset(gt,nt),Z=gt,k=nt)):U(n.POLYGON_OFFSET_FILL)}function K(B){B?wt(n.SCISSOR_TEST):U(n.SCISSOR_TEST)}function M(B){B===void 0&&(B=n.TEXTURE0+J-1),X!==B&&(n.activeTexture(B),X=B)}function v(B,gt,nt){nt===void 0&&(X===null?nt=n.TEXTURE0+J-1:nt=X);let tt=mt[nt];tt===void 0&&(tt={type:void 0,texture:void 0},mt[nt]=tt),(tt.type!==B||tt.texture!==gt)&&(X!==nt&&(n.activeTexture(nt),X=nt),n.bindTexture(B,gt||ft[B]),tt.type=B,tt.texture=gt)}function C(){const B=mt[X];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(B){It.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),It.copy(B))}function At(B){Bt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Bt.copy(B))}function kt(B,gt){let nt=l.get(gt);nt===void 0&&(nt=new WeakMap,l.set(gt,nt));let tt=nt.get(B);tt===void 0&&(tt=n.getUniformBlockIndex(gt,B.name),nt.set(B,tt))}function Ut(B,gt){const tt=l.get(gt).get(B);a.get(gt)!==tt&&(n.uniformBlockBinding(gt,tt,B.__bindingPointIndex),a.set(gt,tt))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,mt={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,p=null,m=null,b=null,w=null,S=null,O=null,I=new _e(0,0,0),P=0,F=!1,q=null,y=null,E=null,Z=null,k=null,It.set(0,0,n.canvas.width,n.canvas.height),Bt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:wt,disable:U,bindFramebuffer:ct,drawBuffers:rt,useProgram:ut,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:N,setLineWidth:D,setPolygonOffset:V,setScissorTest:K,activeTexture:M,bindTexture:v,unbindTexture:C,compressedTexImage2D:W,compressedTexImage3D:z,texImage2D:Mt,texImage3D:Ct,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:Tt,texStorage3D:dt,texSubImage2D:H,texSubImage3D:ht,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Lt,viewport:At,reset:Vt}}function fd(n,t,e,i){const s=rS(i);switch(e){case kf:return n*t;case Wf:return n*t;case Xf:return n*t*2;case qf:return n*t/s.components*s.byteLength;case hu:return n*t/s.components*s.byteLength;case Yf:return n*t*2/s.components*s.byteLength;case du:return n*t*2/s.components*s.byteLength;case Vf:return n*t*3/s.components*s.byteLength;case jn:return n*t*4/s.components*s.byteLength;case fu:return n*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ac:case cc:return Math.max(n,16)*Math.max(t,8)/4;case oc:case lc:return Math.max(n,8)*Math.max(t,8)/2;case uc:case hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ra:case Ac:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $f:case Pc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Cc:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rS(n){switch(n){case zi:case zf:return{byteLength:1,components:1};case ro:case Gf:case po:return{byteLength:2,components:1};case cu:case uu:return{byteLength:2,components:4};case Cs:case lu:case Ni:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function oS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,v){return f?new OffscreenCanvas(M,v):ao("canvas")}function x(M,v,C){let W=1;const z=K(M);if((z.width>C||z.height>C)&&(W=C/Math.max(z.width,z.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const H=Math.floor(W*z.width),ht=Math.floor(W*z.height);u===void 0&&(u=_(H,ht));const lt=v?_(H,ht):u;return lt.width=H,lt.height=ht,lt.getContext("2d").drawImage(M,0,0,H,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+H+"x"+ht+")."),lt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),M;return M}function p(M){return M.generateMipmaps&&M.minFilter!==Nn&&M.minFilter!==Yn}function m(M){n.generateMipmap(M)}function b(M,v,C,W,z=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let H=v;if(v===n.RED&&(C===n.FLOAT&&(H=n.R32F),C===n.HALF_FLOAT&&(H=n.R16F),C===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.R8UI),C===n.UNSIGNED_SHORT&&(H=n.R16UI),C===n.UNSIGNED_INT&&(H=n.R32UI),C===n.BYTE&&(H=n.R8I),C===n.SHORT&&(H=n.R16I),C===n.INT&&(H=n.R32I)),v===n.RG&&(C===n.FLOAT&&(H=n.RG32F),C===n.HALF_FLOAT&&(H=n.RG16F),C===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.RG8UI),C===n.UNSIGNED_SHORT&&(H=n.RG16UI),C===n.UNSIGNED_INT&&(H=n.RG32UI),C===n.BYTE&&(H=n.RG8I),C===n.SHORT&&(H=n.RG16I),C===n.INT&&(H=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.RGB8UI),C===n.UNSIGNED_SHORT&&(H=n.RGB16UI),C===n.UNSIGNED_INT&&(H=n.RGB32UI),C===n.BYTE&&(H=n.RGB8I),C===n.SHORT&&(H=n.RGB16I),C===n.INT&&(H=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),C===n.UNSIGNED_INT&&(H=n.RGBA32UI),C===n.BYTE&&(H=n.RGBA8I),C===n.SHORT&&(H=n.RGBA16I),C===n.INT&&(H=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),v===n.RGBA){const ht=z?pa:Se.getTransfer(W);C===n.FLOAT&&(H=n.RGBA32F),C===n.HALF_FLOAT&&(H=n.RGBA16F),C===n.UNSIGNED_BYTE&&(H=ht===Ue?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function w(M,v){let C;return M?v===null||v===Cs||v===vr?C=n.DEPTH24_STENCIL8:v===Ni?C=n.DEPTH32F_STENCIL8:v===ro&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Cs||v===vr?C=n.DEPTH_COMPONENT24:v===Ni?C=n.DEPTH_COMPONENT32F:v===ro&&(C=n.DEPTH_COMPONENT16),C}function S(M,v){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==Nn&&M.minFilter!==Yn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function O(M){const v=M.target;v.removeEventListener("dispose",O),P(v),v.isVideoTexture&&h.delete(v)}function I(M){const v=M.target;v.removeEventListener("dispose",I),q(v)}function P(M){const v=i.get(M);if(v.__webglInit===void 0)return;const C=M.source,W=d.get(C);if(W){const z=W[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&F(M),Object.keys(W).length===0&&d.delete(C)}i.remove(M)}function F(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const C=M.source,W=d.get(C);delete W[v.__cacheKey],o.memory.textures--}function q(M){const v=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let z=0;z<v.__webglFramebuffer[W].length;z++)n.deleteFramebuffer(v.__webglFramebuffer[W][z]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=M.textures;for(let W=0,z=C.length;W<z;W++){const H=i.get(C[W]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(C[W])}i.remove(M)}let y=0;function E(){y=0}function Z(){const M=y;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),y+=1,M}function k(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function J(M,v){const C=i.get(M);if(M.isVideoTexture&&D(M),M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){const W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(C,M,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function at(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Bt(C,M,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function G(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Bt(C,M,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function Q(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){ot(C,M,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const X={[ke]:n.REPEAT,[Ts]:n.CLAMP_TO_EDGE,[rc]:n.MIRRORED_REPEAT},mt={[Nn]:n.NEAREST,[C_]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[el]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},yt={[U_]:n.NEVER,[G_]:n.ALWAYS,[N_]:n.LESS,[Kf]:n.LEQUAL,[F_]:n.EQUAL,[z_]:n.GEQUAL,[O_]:n.GREATER,[B_]:n.NOTEQUAL};function _t(M,v){if(v.type===Ni&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Yn||v.magFilter===el||v.magFilter===bo||v.magFilter===As||v.minFilter===Yn||v.minFilter===el||v.minFilter===bo||v.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,X[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,X[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,X[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,mt[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nn||v.minFilter!==bo&&v.minFilter!==As||v.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function It(M,v){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",O));const W=v.source;let z=d.get(W);z===void 0&&(z={},d.set(W,z));const H=k(v);if(H!==M.__cacheKey){z[H]===void 0&&(z[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),z[H].usedTimes++;const ht=z[M.__cacheKey];ht!==void 0&&(z[M.__cacheKey].usedTimes--,ht.usedTimes===0&&F(v)),M.__cacheKey=H,M.__webglTexture=z[H].texture}return C}function Bt(M,v,C){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const z=It(M,v),H=v.source;e.bindTexture(W,M.__webglTexture,n.TEXTURE0+C);const ht=i.get(H);if(H.version!==ht.__version||z===!0){e.activeTexture(n.TEXTURE0+C);const lt=Se.getPrimaries(Se.workingColorSpace),pt=v.colorSpace===ss?null:Se.getPrimaries(v.colorSpace),Tt=v.colorSpace===ss||lt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let dt=x(v.image,!1,s.maxTextureSize);dt=V(v,dt);const Mt=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type);let Lt=b(v.internalFormat,Mt,Ct,v.colorSpace,v.isVideoTexture);_t(W,v);let At;const kt=v.mipmaps,Ut=v.isVideoTexture!==!0,Vt=ht.__version===void 0||z===!0,B=H.dataReady,gt=S(v,dt);if(v.isDepthTexture)Lt=w(v.format===xr,v.type),Vt&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,Lt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,dt.width,dt.height,0,Mt,Ct,null));else if(v.isDataTexture)if(kt.length>0){Ut&&Vt&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,kt[0].width,kt[0].height);for(let nt=0,tt=kt.length;nt<tt;nt++)At=kt[nt],Ut?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,At.width,At.height,Mt,Ct,At.data):e.texImage2D(n.TEXTURE_2D,nt,Lt,At.width,At.height,0,Mt,Ct,At.data);v.generateMipmaps=!1}else Ut?(Vt&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,dt.width,dt.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,Mt,Ct,dt.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,dt.width,dt.height,0,Mt,Ct,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,kt[0].width,kt[0].height,dt.depth);for(let nt=0,tt=kt.length;nt<tt;nt++)if(At=kt[nt],v.format!==jn)if(Mt!==null)if(Ut){if(B)if(v.layerUpdates.size>0){const xt=fd(At.width,At.height,v.format,v.type);for(const vt of v.layerUpdates){const zt=At.data.subarray(vt*xt/At.data.BYTES_PER_ELEMENT,(vt+1)*xt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,vt,At.width,At.height,1,Mt,zt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,At.width,At.height,dt.depth,Mt,At.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Lt,At.width,At.height,dt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,At.width,At.height,dt.depth,Mt,Ct,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Lt,At.width,At.height,dt.depth,0,Mt,Ct,At.data)}else{Ut&&Vt&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,kt[0].width,kt[0].height);for(let nt=0,tt=kt.length;nt<tt;nt++)At=kt[nt],v.format!==jn?Mt!==null?Ut?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,At.width,At.height,Mt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Lt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,At.width,At.height,Mt,Ct,At.data):e.texImage2D(n.TEXTURE_2D,nt,Lt,At.width,At.height,0,Mt,Ct,At.data)}else if(v.isDataArrayTexture)if(Ut){if(Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,dt.width,dt.height,dt.depth),B)if(v.layerUpdates.size>0){const nt=fd(dt.width,dt.height,v.format,v.type);for(const tt of v.layerUpdates){const xt=dt.data.subarray(tt*nt/dt.data.BYTES_PER_ELEMENT,(tt+1)*nt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,dt.width,dt.height,1,Mt,Ct,xt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Mt,Ct,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,dt.width,dt.height,dt.depth,0,Mt,Ct,dt.data);else if(v.isData3DTexture)Ut?(Vt&&e.texStorage3D(n.TEXTURE_3D,gt,Lt,dt.width,dt.height,dt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Mt,Ct,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,dt.width,dt.height,dt.depth,0,Mt,Ct,dt.data);else if(v.isFramebufferTexture){if(Vt)if(Ut)e.texStorage2D(n.TEXTURE_2D,gt,Lt,dt.width,dt.height);else{let nt=dt.width,tt=dt.height;for(let xt=0;xt<gt;xt++)e.texImage2D(n.TEXTURE_2D,xt,Lt,nt,tt,0,Mt,Ct,null),nt>>=1,tt>>=1}}else if(kt.length>0){if(Ut&&Vt){const nt=K(kt[0]);e.texStorage2D(n.TEXTURE_2D,gt,Lt,nt.width,nt.height)}for(let nt=0,tt=kt.length;nt<tt;nt++)At=kt[nt],Ut?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Mt,Ct,At):e.texImage2D(n.TEXTURE_2D,nt,Lt,Mt,Ct,At);v.generateMipmaps=!1}else if(Ut){if(Vt){const nt=K(dt);e.texStorage2D(n.TEXTURE_2D,gt,Lt,nt.width,nt.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Ct,dt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,Mt,Ct,dt);p(v)&&m(W),ht.__version=H.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ot(M,v,C){if(v.image.length!==6)return;const W=It(M,v),z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+C);const H=i.get(z);if(z.version!==H.__version||W===!0){e.activeTexture(n.TEXTURE0+C);const ht=Se.getPrimaries(Se.workingColorSpace),lt=v.colorSpace===ss?null:Se.getPrimaries(v.colorSpace),pt=v.colorSpace===ss||ht===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,dt=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let tt=0;tt<6;tt++)!Tt&&!dt?Mt[tt]=x(v.image[tt],!0,s.maxCubemapSize):Mt[tt]=dt?v.image[tt].image:v.image[tt],Mt[tt]=V(v,Mt[tt]);const Ct=Mt[0],Lt=r.convert(v.format,v.colorSpace),At=r.convert(v.type),kt=b(v.internalFormat,Lt,At,v.colorSpace),Ut=v.isVideoTexture!==!0,Vt=H.__version===void 0||W===!0,B=z.dataReady;let gt=S(v,Ct);_t(n.TEXTURE_CUBE_MAP,v);let nt;if(Tt){Ut&&Vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,kt,Ct.width,Ct.height);for(let tt=0;tt<6;tt++){nt=Mt[tt].mipmaps;for(let xt=0;xt<nt.length;xt++){const vt=nt[xt];v.format!==jn?Lt!==null?Ut?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,vt.width,vt.height,Lt,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,kt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,vt.width,vt.height,Lt,At,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,kt,vt.width,vt.height,0,Lt,At,vt.data)}}}else{if(nt=v.mipmaps,Ut&&Vt){nt.length>0&&gt++;const tt=K(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(dt){Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Mt[tt].width,Mt[tt].height,Lt,At,Mt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,kt,Mt[tt].width,Mt[tt].height,0,Lt,At,Mt[tt].data);for(let xt=0;xt<nt.length;xt++){const zt=nt[xt].image[tt].image;Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,zt.width,zt.height,Lt,At,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,kt,zt.width,zt.height,0,Lt,At,zt.data)}}else{Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,At,Mt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,kt,Lt,At,Mt[tt]);for(let xt=0;xt<nt.length;xt++){const vt=nt[xt];Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,Lt,At,vt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,kt,Lt,At,vt.image[tt])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),H.__version=z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ft(M,v,C,W,z,H){const ht=r.convert(C.format,C.colorSpace),lt=r.convert(C.type),pt=b(C.internalFormat,ht,lt,C.colorSpace);if(!i.get(v).__hasExternalTextures){const dt=Math.max(1,v.width>>H),Mt=Math.max(1,v.height>>H);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?e.texImage3D(z,H,pt,dt,Mt,v.depth,0,ht,lt,null):e.texImage2D(z,H,pt,dt,Mt,0,ht,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,z,i.get(C).__webglTexture,0,L(v)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,z,i.get(C).__webglTexture,H),e.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(M,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){const W=v.depthTexture,z=W&&W.isDepthTexture?W.type:null,H=w(v.stencilBuffer,z),ht=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=L(v);N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,H,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,M)}else{const W=v.textures;for(let z=0;z<W.length;z++){const H=W[z],ht=r.convert(H.format,H.colorSpace),lt=r.convert(H.type),pt=b(H.internalFormat,ht,lt,H.colorSpace),Tt=L(v);C&&N(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,pt,v.width,v.height):N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const W=i.get(v.depthTexture).__webglTexture,z=L(v);if(v.depthTexture.format===lr)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(v.depthTexture.format===xr)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function ct(M){const v=i.get(M),C=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const W=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",z)};W.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=W}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");U(v.__webglFramebuffer,M)}else if(C){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),wt(v.__webglDepthbuffer[W],M,!1);else{const z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,H)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),wt(v.__webglDepthbuffer,M,!1);else{const W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(M,v,C){const W=i.get(M);v!==void 0&&ft(W.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&ct(M)}function ut(M){const v=M.texture,C=i.get(M),W=i.get(v);M.addEventListener("dispose",I);const z=M.textures,H=M.isWebGLCubeRenderTarget===!0,ht=z.length>1;if(ht||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),H){C.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[lt]=[];for(let pt=0;pt<v.mipmaps.length;pt++)C.__webglFramebuffer[lt][pt]=n.createFramebuffer()}else C.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)C.__webglFramebuffer[lt]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ht)for(let lt=0,pt=z.length;lt<pt;lt++){const Tt=i.get(z[lt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&N(M)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let lt=0;lt<z.length;lt++){const pt=z[lt];C.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[lt]);const Tt=r.convert(pt.format,pt.colorSpace),dt=r.convert(pt.type),Mt=b(pt.internalFormat,Tt,dt,pt.colorSpace,M.isXRRenderTarget===!0),Ct=L(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,Mt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,C.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),wt(C.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),_t(n.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[lt][pt],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else ft(C.__webglFramebuffer[lt],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(v)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let lt=0,pt=z.length;lt<pt;lt++){const Tt=z[lt],dt=i.get(Tt);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),_t(n.TEXTURE_2D,Tt),ft(C.__webglFramebuffer,M,Tt,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),p(Tt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(lt=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,W.__webglTexture),_t(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[pt],M,v,n.COLOR_ATTACHMENT0,lt,pt);else ft(C.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,lt,0);p(v)&&m(lt),e.unbindTexture()}M.depthBuffer&&ct(M)}function bt(M){const v=M.textures;for(let C=0,W=v.length;C<W;C++){const z=v[C];if(p(z)){const H=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ht=i.get(z).__webglTexture;e.bindTexture(H,ht),m(H),e.unbindTexture()}}}const et=[],g=[];function T(M){if(M.samples>0){if(N(M)===!1){const v=M.textures,C=M.width,W=M.height;let z=n.COLOR_BUFFER_BIT;const H=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(M),lt=v.length>1;if(lt)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Tt=i.get(v[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,C,W,0,0,C,W,z,n.NEAREST),l===!0&&(et.length=0,g.length=0,et.push(n.COLOR_ATTACHMENT0+pt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(et.push(H),g.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Tt=i.get(v[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(M){return Math.min(s.maxSamples,M.samples)}function N(M){const v=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(M){const v=o.render.frame;h.get(M)!==v&&(h.set(M,v),M.update())}function V(M,v){const C=M.colorSpace,W=M.format,z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||C!==hs&&C!==ss&&(Se.getTransfer(C)===Ue?(W!==jn||z!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function K(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=E,this.setTexture2D=J,this.setTexture2DArray=at,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=rt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=N}function aS(n,t){function e(i,s=ss){let r;const o=Se.getTransfer(s);if(i===zi)return n.UNSIGNED_BYTE;if(i===cu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zf)return n.BYTE;if(i===Gf)return n.SHORT;if(i===ro)return n.UNSIGNED_SHORT;if(i===lu)return n.INT;if(i===Cs)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===po)return n.HALF_FLOAT;if(i===kf)return n.ALPHA;if(i===Vf)return n.RGB;if(i===jn)return n.RGBA;if(i===Wf)return n.LUMINANCE;if(i===Xf)return n.LUMINANCE_ALPHA;if(i===lr)return n.DEPTH_COMPONENT;if(i===xr)return n.DEPTH_STENCIL;if(i===qf)return n.RED;if(i===hu)return n.RED_INTEGER;if(i===Yf)return n.RG;if(i===du)return n.RG_INTEGER;if(i===fu)return n.RGBA_INTEGER;if(i===ea||i===na||i===ia||i===sa)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oc||i===ac||i===lc||i===cc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uc||i===hc||i===dc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===uc||i===hc)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===dc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===Mc||i===wc||i===Sc||i===Ec||i===bc||i===Tc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_c)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ec)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ra||i===Ac||i===Rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ra)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$f||i===Pc||i===Cc||i===Ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class lS extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $t extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cS={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const uS=`
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

}`;class dS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new yn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ei({vertexShader:uS,fragmentShader:hS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new R(new Ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fS extends wr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const x=new dS,p=e.getContextAttributes();let m=null,b=null;const w=[],S=[],O=new Ot;let I=null;const P=new Oe;P.layers.enable(1),P.viewport=new Pe;const F=new Oe;F.layers.enable(2),F.viewport=new Pe;const q=[P,F],y=new lS;y.layers.enable(1),y.layers.enable(2);let E=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let ft=w[ot];return ft===void 0&&(ft=new Pl,w[ot]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(ot){let ft=w[ot];return ft===void 0&&(ft=new Pl,w[ot]=ft),ft.getGripSpace()},this.getHand=function(ot){let ft=w[ot];return ft===void 0&&(ft=new Pl,w[ot]=ft),ft.getHandSpace()};function k(ot){const ft=S.indexOf(ot.inputSource);if(ft===-1)return;const wt=w[ft];wt!==void 0&&(wt.update(ot.inputSource,ot.frame,c||o),wt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function J(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",at);for(let ot=0;ot<w.length;ot++){const ft=S[ot];ft!==null&&(S[ot]=null,w[ot].disconnect(ft))}E=null,Z=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,b=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",J),s.addEventListener("inputsourceschange",at),p.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const ft={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Is(f.framebufferWidth,f.framebufferHeight,{format:jn,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ft=null,wt=null,U=null;p.depth&&(U=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=p.stencil?xr:lr,wt=p.stencil?vr:Cs);const ct={colorFormat:e.RGBA8,depthFormat:U,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Is(d.textureWidth,d.textureHeight,{format:jn,type:zi,depthTexture:new lp(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Bt.setContext(s),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function at(ot){for(let ft=0;ft<ot.removed.length;ft++){const wt=ot.removed[ft],U=S.indexOf(wt);U>=0&&(S[U]=null,w[U].disconnect(wt))}for(let ft=0;ft<ot.added.length;ft++){const wt=ot.added[ft];let U=S.indexOf(wt);if(U===-1){for(let rt=0;rt<w.length;rt++)if(rt>=S.length){S.push(wt),U=rt;break}else if(S[rt]===null){S[rt]=wt,U=rt;break}if(U===-1)break}const ct=w[U];ct&&ct.connect(wt)}}const G=new $,Q=new $;function X(ot,ft,wt){G.setFromMatrixPosition(ft.matrixWorld),Q.setFromMatrixPosition(wt.matrixWorld);const U=G.distanceTo(Q),ct=ft.projectionMatrix.elements,rt=wt.projectionMatrix.elements,ut=ct[14]/(ct[10]-1),bt=ct[14]/(ct[10]+1),et=(ct[9]+1)/ct[5],g=(ct[9]-1)/ct[5],T=(ct[8]-1)/ct[0],L=(rt[8]+1)/rt[0],N=ut*T,D=ut*L,V=U/(-T+L),K=V*-T;if(ft.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(K),ot.translateZ(V),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),ct[10]===-1)ot.projectionMatrix.copy(ft.projectionMatrix),ot.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const M=ut+V,v=bt+V,C=N-K,W=D+(U-K),z=et*bt/v*M,H=g*bt/v*M;ot.projectionMatrix.makePerspective(C,W,z,H,M,v),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function mt(ot,ft){ft===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(ft.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let ft=ot.near,wt=ot.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),y.near=F.near=P.near=ft,y.far=F.far=P.far=wt,(E!==y.near||Z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,Z=y.far);const U=ot.parent,ct=y.cameras;mt(y,U);for(let rt=0;rt<ct.length;rt++)mt(ct[rt],U);ct.length===2?X(y,P,F):y.projectionMatrix.copy(P.projectionMatrix),yt(ot,y,U)};function yt(ot,ft,wt){wt===null?ot.matrix.copy(ft.matrixWorld):(ot.matrix.copy(wt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(ft.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(ft.projectionMatrix),ot.projectionMatrixInverse.copy(ft.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=oo*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ot){l=ot,d!==null&&(d.fixedFoveation=ot),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ot)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let _t=null;function It(ot,ft){if(h=ft.getViewerPose(c||o),_=ft,h!==null){const wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let U=!1;wt.length!==y.cameras.length&&(y.cameras.length=0,U=!0);for(let rt=0;rt<wt.length;rt++){const ut=wt[rt];let bt=null;if(f!==null)bt=f.getViewport(ut);else{const g=u.getViewSubImage(d,ut);bt=g.viewport,rt===0&&(t.setRenderTargetTextures(b,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(b))}let et=q[rt];et===void 0&&(et=new Oe,et.layers.enable(rt),et.viewport=new Pe,q[rt]=et),et.matrix.fromArray(ut.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ut.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(bt.x,bt.y,bt.width,bt.height),rt===0&&(y.matrix.copy(et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),U===!0&&y.cameras.push(et)}const ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")){const rt=u.getDepthInformation(wt[0]);rt&&rt.isValid&&rt.texture&&x.init(t,rt,s.renderState)}}for(let wt=0;wt<w.length;wt++){const U=S[wt],ct=w[wt];U!==null&&ct!==void 0&&ct.update(U,ft,c||o)}_t&&_t(ot,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}const Bt=new op;Bt.setAnimationLoop(It),this.setAnimationLoop=function(ot){_t=ot},this.dispose=function(){}}}const ys=new gi,pS=new Ne;function mS(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,sp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,w,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),w=b.envMap,S=b.envMapRotation;w&&(p.envMap.value=w,ys.copy(S),ys.x*=-1,ys.y*=-1,ys.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),p.envMapRotation.value.setFromMatrix4(pS.makeRotationFromEuler(ys)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const S=w.program;i.uniformBlockBinding(b,S)}function c(b,w){let S=s[b.id];S===void 0&&(_(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",p));const O=w.program;i.updateUBOMapping(b,O);const I=t.render.frame;r[b.id]!==I&&(d(b),r[b.id]=I)}function h(b){const w=u();b.__bindingPointIndex=w;const S=n.createBuffer(),O=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const w=s[b.id],S=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let I=0,P=S.length;I<P;I++){const F=Array.isArray(S[I])?S[I]:[S[I]];for(let q=0,y=F.length;q<y;q++){const E=F[q];if(f(E,I,q,O)===!0){const Z=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let J=0;for(let at=0;at<k.length;at++){const G=k[at],Q=x(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,Z+J,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,w,S,O){const I=b.value,P=w+"_"+S;if(O[P]===void 0)return typeof I=="number"||typeof I=="boolean"?O[P]=I:O[P]=I.clone(),!0;{const F=O[P];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return O[P]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function _(b){const w=b.uniforms;let S=0;const O=16;for(let P=0,F=w.length;P<F;P++){const q=Array.isArray(w[P])?w[P]:[w[P]];for(let y=0,E=q.length;y<E;y++){const Z=q[y],k=Array.isArray(Z.value)?Z.value:[Z.value];for(let J=0,at=k.length;J<at;J++){const G=k[J],Q=x(G),X=S%O,mt=X%Q.boundary,yt=X+mt;S+=mt,yt!==0&&O-yt<Q.storage&&(S+=O-yt),Z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=Q.storage}}}const I=S%O;return I>0&&(S+=O-I),b.__size=S,b.__cache={},this}function x(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function p(b){const w=b.target;w.removeEventListener("dispose",p);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class ni{constructor(t={}){const{canvas:e=iv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=os,this.toneMappingExposure=1;const w=this;let S=!1,O=0,I=0,P=null,F=-1,q=null;const y=new Pe,E=new Pe;let Z=null;const k=new _e(0);let J=0,at=e.width,G=e.height,Q=1,X=null,mt=null;const yt=new Pe(0,0,at,G),_t=new Pe(0,0,at,G);let It=!1;const Bt=new vu;let ot=!1,ft=!1;const wt=new Ne,U=new Ne,ct=new $,rt=new Pe,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function et(){return P===null?Q:1}let g=i;function T(A,Y){return e.getContext(A,Y)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${au}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),g===null){const Y="webgl2";if(g=T(Y,A),g===null)throw T(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,N,D,V,K,M,v,C,W,z,H,ht,lt,pt,Tt,dt,Mt,Ct,Lt,At,kt,Ut,Vt,B;function gt(){L=new wM(g),L.init(),Ut=new aS(g,L),N=new gM(g,L,t,Ut),D=new sS(g),N.reverseDepthBuffer&&D.buffers.depth.setReversed(!0),V=new bM(g),K=new Vw,M=new oS(g,L,D,K,N,Ut,V),v=new vM(w),C=new MM(w),W=new Lv(g),Vt=new pM(g,W),z=new SM(g,W,V,Vt),H=new AM(g,z,W,V),Lt=new TM(g,N,M),dt=new _M(K),ht=new kw(w,v,C,L,N,Vt,dt),lt=new mS(w,K),pt=new Xw,Tt=new Zw(L),Ct=new fM(w,v,C,D,H,d,l),Mt=new nS(w,H,N),B=new gS(g,V,N,D),At=new mM(g,L,V),kt=new EM(g,L,V),V.programs=ht.programs,w.capabilities=N,w.extensions=L,w.properties=K,w.renderLists=pt,w.shadowMap=Mt,w.state=D,w.info=V}gt();const nt=new fS(w,g);this.xr=nt,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(at,G,!1))},this.getSize=function(A){return A.set(at,G)},this.setSize=function(A,Y,st=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=A,G=Y,e.width=Math.floor(A*Q),e.height=Math.floor(Y*Q),st===!0&&(e.style.width=A+"px",e.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(at*Q,G*Q).floor()},this.setDrawingBufferSize=function(A,Y,st){at=A,G=Y,Q=st,e.width=Math.floor(A*st),e.height=Math.floor(Y*st),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(yt)},this.setViewport=function(A,Y,st,it){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,Y,st,it),D.viewport(y.copy(yt).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,Y,st,it){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,Y,st,it),D.scissor(E.copy(_t).multiplyScalar(Q).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(A){D.setScissorTest(It=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){mt=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(A=!0,Y=!0,st=!0){let it=0;if(A){let j=!1;if(P!==null){const Rt=P.texture.format;j=Rt===fu||Rt===du||Rt===hu}if(j){const Rt=P.texture.type,Nt=Rt===zi||Rt===Cs||Rt===ro||Rt===vr||Rt===cu||Rt===uu,Ht=Ct.getClearColor(),Wt=Ct.getClearAlpha(),Zt=Ht.r,Jt=Ht.g,Xt=Ht.b;Nt?(f[0]=Zt,f[1]=Jt,f[2]=Xt,f[3]=Wt,g.clearBufferuiv(g.COLOR,0,f)):(_[0]=Zt,_[1]=Jt,_[2]=Xt,_[3]=Wt,g.clearBufferiv(g.COLOR,0,_))}else it|=g.COLOR_BUFFER_BIT}Y&&(it|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),st&&(it|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),pt.dispose(),Tt.dispose(),K.dispose(),v.dispose(),C.dispose(),H.dispose(),Vt.dispose(),B.dispose(),ht.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",ee),nt.removeEventListener("sessionend",se),te.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=V.autoReset,Y=Mt.enabled,st=Mt.autoUpdate,it=Mt.needsUpdate,j=Mt.type;gt(),V.autoReset=A,Mt.enabled=Y,Mt.autoUpdate=st,Mt.needsUpdate=it,Mt.type=j}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function zt(A){const Y=A.target;Y.removeEventListener("dispose",zt),Yt(Y)}function Yt(A){Qt(A),K.remove(A)}function Qt(A){const Y=K.get(A).programs;Y!==void 0&&(Y.forEach(function(st){ht.releaseProgram(st)}),A.isShaderMaterial&&ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,st,it,j,Rt){Y===null&&(Y=ut);const Nt=j.isMesh&&j.matrixWorld.determinant()<0,Ht=nn(A,Y,st,it,j);D.setMaterial(it,Nt);let Wt=st.index,Zt=1;if(it.wireframe===!0){if(Wt=z.getWireframeAttribute(st),Wt===void 0)return;Zt=2}const Jt=st.drawRange,Xt=st.attributes.position;let pe=Jt.start*Zt,xe=(Jt.start+Jt.count)*Zt;Rt!==null&&(pe=Math.max(pe,Rt.start*Zt),xe=Math.min(xe,(Rt.start+Rt.count)*Zt)),Wt!==null?(pe=Math.max(pe,0),xe=Math.min(xe,Wt.count)):Xt!=null&&(pe=Math.max(pe,0),xe=Math.min(xe,Xt.count));const be=xe-pe;if(be<0||be===1/0)return;Vt.setup(j,it,Ht,st,Wt);let je,ge=At;if(Wt!==null&&(je=W.get(Wt),ge=kt,ge.setIndex(je)),j.isMesh)it.wireframe===!0?(D.setLineWidth(it.wireframeLinewidth*et()),ge.setMode(g.LINES)):ge.setMode(g.TRIANGLES);else if(j.isLine){let qt=it.linewidth;qt===void 0&&(qt=1),D.setLineWidth(qt*et()),j.isLineSegments?ge.setMode(g.LINES):j.isLineLoop?ge.setMode(g.LINE_LOOP):ge.setMode(g.LINE_STRIP)}else j.isPoints?ge.setMode(g.POINTS):j.isSprite&&ge.setMode(g.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ge.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))ge.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,Ve=j._multiDrawCounts,Pt=j._multiDrawCount,Le=Wt?W.get(Wt).bytesPerElement:1,Fe=K.get(it).currentProgram.getUniforms();for(let ye=0;ye<Pt;ye++)Fe.setValue(g,"_gl_DrawID",ye),ge.render(qt[ye]/Le,Ve[ye])}else if(j.isInstancedMesh)ge.renderInstances(pe,be,j.count);else if(st.isInstancedBufferGeometry){const qt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ve=Math.min(st.instanceCount,qt);ge.renderInstances(pe,be,Ve)}else ge.render(pe,be)};function jt(A,Y,st){A.transparent===!0&&A.side===he&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,Re(A,Y,st),A.side=ls,A.needsUpdate=!0,Re(A,Y,st),A.side=he):Re(A,Y,st)}this.compile=function(A,Y,st=null){st===null&&(st=A),p=Tt.get(st),p.init(Y),b.push(p),st.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),A!==st&&A.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const it=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Rt=j.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){const Ht=Rt[Nt];jt(Ht,st,j),it.add(Ht)}else jt(Rt,st,j),it.add(Rt)}),b.pop(),p=null,it},this.compileAsync=function(A,Y,st=null){const it=this.compile(A,Y,st);return new Promise(j=>{function Rt(){if(it.forEach(function(Nt){K.get(Nt).currentProgram.isReady()&&it.delete(Nt)}),it.size===0){j(A);return}setTimeout(Rt,10)}L.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ie=null;function St(A){ie&&ie(A)}function ee(){te.stop()}function se(){te.start()}const te=new op;te.setAnimationLoop(St),typeof self<"u"&&te.setContext(self),this.setAnimationLoop=function(A){ie=A,nt.setAnimationLoop(A),A===null?te.stop():te.start()},nt.addEventListener("sessionstart",ee),nt.addEventListener("sessionend",se),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(Y),Y=nt.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,Y,P),p=Tt.get(A,b.length),p.init(Y),b.push(p),U.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Bt.setFromProjectionMatrix(U),ft=this.localClippingEnabled,ot=dt.init(this.clippingPlanes,ft),x=pt.get(A,m.length),x.init(),m.push(x),nt.enabled===!0&&nt.isPresenting===!0){const Rt=w.xr.getDepthSensingMesh();Rt!==null&&de(Rt,Y,-1/0,w.sortObjects)}de(A,Y,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(X,mt),bt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,bt&&Ct.addToRenderList(x,A),this.info.render.frame++,ot===!0&&dt.beginShadows();const st=p.state.shadowsArray;Mt.render(st,A,Y),ot===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=x.opaque,j=x.transmissive;if(p.setupLights(),Y.isArrayCamera){const Rt=Y.cameras;if(j.length>0)for(let Nt=0,Ht=Rt.length;Nt<Ht;Nt++){const Wt=Rt[Nt];ve(it,j,A,Wt)}bt&&Ct.render(A);for(let Nt=0,Ht=Rt.length;Nt<Ht;Nt++){const Wt=Rt[Nt];fe(x,A,Wt,Wt.viewport)}}else j.length>0&&ve(it,j,A,Y),bt&&Ct.render(A),fe(x,A,Y);P!==null&&(M.updateMultisampleRenderTarget(P),M.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(w,A,Y),Vt.resetDefaultState(),F=-1,q=null,b.pop(),b.length>0?(p=b[b.length-1],ot===!0&&dt.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function de(A,Y,st,it){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Bt.intersectsSprite(A)){it&&rt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(U);const Nt=H.update(A),Ht=A.material;Ht.visible&&x.push(A,Nt,Ht,st,rt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Bt.intersectsObject(A))){const Nt=H.update(A),Ht=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rt.copy(A.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),rt.copy(Nt.boundingSphere.center)),rt.applyMatrix4(A.matrixWorld).applyMatrix4(U)),Array.isArray(Ht)){const Wt=Nt.groups;for(let Zt=0,Jt=Wt.length;Zt<Jt;Zt++){const Xt=Wt[Zt],pe=Ht[Xt.materialIndex];pe&&pe.visible&&x.push(A,Nt,pe,st,rt.z,Xt)}}else Ht.visible&&x.push(A,Nt,Ht,st,rt.z,null)}}const Rt=A.children;for(let Nt=0,Ht=Rt.length;Nt<Ht;Nt++)de(Rt[Nt],Y,st,it)}function fe(A,Y,st,it){const j=A.opaque,Rt=A.transmissive,Nt=A.transparent;p.setupLightsView(st),ot===!0&&dt.setGlobalState(w.clippingPlanes,st),it&&D.viewport(y.copy(it)),j.length>0&&me(j,Y,st),Rt.length>0&&me(Rt,Y,st),Nt.length>0&&me(Nt,Y,st),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function ve(A,Y,st,it){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[it.id]===void 0&&(p.state.transmissionRenderTarget[it.id]=new Is(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?po:zi,minFilter:As,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const Rt=p.state.transmissionRenderTarget[it.id],Nt=it.viewport||y;Rt.setSize(Nt.z,Nt.w);const Ht=w.getRenderTarget();w.setRenderTarget(Rt),w.getClearColor(k),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear(),bt&&Ct.render(st);const Wt=w.toneMapping;w.toneMapping=os;const Zt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),p.setupLightsView(it),ot===!0&&dt.setGlobalState(w.clippingPlanes,it),me(A,st,it),M.updateMultisampleRenderTarget(Rt),M.updateRenderTargetMipmap(Rt),L.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Xt=0,pe=Y.length;Xt<pe;Xt++){const xe=Y[Xt],be=xe.object,je=xe.geometry,ge=xe.material,qt=xe.group;if(ge.side===he&&be.layers.test(it.layers)){const Ve=ge.side;ge.side=Sn,ge.needsUpdate=!0,Ie(be,st,it,je,ge,qt),ge.side=Ve,ge.needsUpdate=!0,Jt=!0}}Jt===!0&&(M.updateMultisampleRenderTarget(Rt),M.updateRenderTargetMipmap(Rt))}w.setRenderTarget(Ht),w.setClearColor(k,J),Zt!==void 0&&(it.viewport=Zt),w.toneMapping=Wt}function me(A,Y,st){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Rt=A.length;j<Rt;j++){const Nt=A[j],Ht=Nt.object,Wt=Nt.geometry,Zt=it===null?Nt.material:it,Jt=Nt.group;Ht.layers.test(st.layers)&&Ie(Ht,Y,st,Wt,Zt,Jt)}}function Ie(A,Y,st,it,j,Rt){A.onBeforeRender(w,Y,st,it,j,Rt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(w,Y,st,it,A,Rt),j.transparent===!0&&j.side===he&&j.forceSinglePass===!1?(j.side=Sn,j.needsUpdate=!0,w.renderBufferDirect(st,Y,it,j,A,Rt),j.side=ls,j.needsUpdate=!0,w.renderBufferDirect(st,Y,it,j,A,Rt),j.side=he):w.renderBufferDirect(st,Y,it,j,A,Rt),A.onAfterRender(w,Y,st,it,j,Rt)}function Re(A,Y,st){Y.isScene!==!0&&(Y=ut);const it=K.get(A),j=p.state.lights,Rt=p.state.shadowsArray,Nt=j.state.version,Ht=ht.getParameters(A,j.state,Rt,Y,st),Wt=ht.getProgramCacheKey(Ht);let Zt=it.programs;it.environment=A.isMeshStandardMaterial?Y.environment:null,it.fog=Y.fog,it.envMap=(A.isMeshStandardMaterial?C:v).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Zt===void 0&&(A.addEventListener("dispose",zt),Zt=new Map,it.programs=Zt);let Jt=Zt.get(Wt);if(Jt!==void 0){if(it.currentProgram===Jt&&it.lightsStateVersion===Nt)return Mn(A,Ht),Jt}else Ht.uniforms=ht.getUniforms(A),A.onBeforeCompile(Ht,w),Jt=ht.acquireProgram(Ht,Wt),Zt.set(Wt,Jt),it.uniforms=Ht.uniforms;const Xt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=dt.uniform),Mn(A,Ht),it.needsLights=ri(A),it.lightsStateVersion=Nt,it.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),it.currentProgram=Jt,it.uniformsList=null,Jt}function Je(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=aa.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Mn(A,Y){const st=K.get(A);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function nn(A,Y,st,it,j){Y.isScene!==!0&&(Y=ut),M.resetTextureUnits();const Rt=Y.fog,Nt=it.isMeshStandardMaterial?Y.environment:null,Ht=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:hs,Wt=(it.isMeshStandardMaterial?C:v).get(it.envMap||Nt),Zt=it.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Jt=!!st.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Xt=!!st.morphAttributes.position,pe=!!st.morphAttributes.normal,xe=!!st.morphAttributes.color;let be=os;it.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(be=w.toneMapping);const je=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ge=je!==void 0?je.length:0,qt=K.get(it),Ve=p.state.lights;if(ot===!0&&(ft===!0||A!==q)){const ze=A===q&&it.id===F;dt.setState(it,A,ze)}let Pt=!1;it.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ve.state.version||qt.outputColorSpace!==Ht||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isBatchedMesh&&qt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qt.instancingMorph===!1&&j.morphTexture!==null||qt.envMap!==Wt||it.fog===!0&&qt.fog!==Rt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==dt.numPlanes||qt.numIntersection!==dt.numIntersection)||qt.vertexAlphas!==Zt||qt.vertexTangents!==Jt||qt.morphTargets!==Xt||qt.morphNormals!==pe||qt.morphColors!==xe||qt.toneMapping!==be||qt.morphTargetsCount!==ge)&&(Pt=!0):(Pt=!0,qt.__version=it.version);let Le=qt.currentProgram;Pt===!0&&(Le=Re(it,Y,j));let Fe=!1,ye=!1,sn=!1;const Me=Le.getUniforms(),qe=qt.uniforms;if(D.useProgram(Le.program)&&(Fe=!0,ye=!0,sn=!0),it.id!==F&&(F=it.id,ye=!0),Fe||q!==A){N.reverseDepthBuffer?(wt.copy(A.projectionMatrix),rv(wt),ov(wt),Me.setValue(g,"projectionMatrix",wt)):Me.setValue(g,"projectionMatrix",A.projectionMatrix),Me.setValue(g,"viewMatrix",A.matrixWorldInverse);const ze=Me.map.cameraPosition;ze!==void 0&&ze.setValue(g,ct.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&Me.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Me.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,ye=!0,sn=!0)}if(j.isSkinnedMesh){Me.setOptional(g,j,"bindMatrix"),Me.setOptional(g,j,"bindMatrixInverse");const ze=j.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Me.setValue(g,"boneTexture",ze.boneTexture,M))}j.isBatchedMesh&&(Me.setOptional(g,j,"batchingTexture"),Me.setValue(g,"batchingTexture",j._matricesTexture,M),Me.setOptional(g,j,"batchingIdTexture"),Me.setValue(g,"batchingIdTexture",j._indirectTexture,M),Me.setOptional(g,j,"batchingColorTexture"),j._colorsTexture!==null&&Me.setValue(g,"batchingColorTexture",j._colorsTexture,M));const En=st.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Lt.update(j,st,Le),(ye||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,Me.setValue(g,"receiveShadow",j.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(qe.envMap.value=Wt,qe.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&Y.environment!==null&&(qe.envMapIntensity.value=Y.environmentIntensity),ye&&(Me.setValue(g,"toneMappingExposure",w.toneMappingExposure),qt.needsLights&&on(qe,sn),Rt&&it.fog===!0&&lt.refreshFogUniforms(qe,Rt),lt.refreshMaterialUniforms(qe,it,Q,G,p.state.transmissionRenderTarget[A.id]),aa.upload(g,Je(qt),qe,M)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(aa.upload(g,Je(qt),qe,M),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Me.setValue(g,"center",j.center),Me.setValue(g,"modelViewMatrix",j.modelViewMatrix),Me.setValue(g,"normalMatrix",j.normalMatrix),Me.setValue(g,"modelMatrix",j.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const ze=it.uniformsGroups;for(let wn=0,Hn=ze.length;wn<Hn;wn++){const bn=ze[wn];B.update(bn,Le),B.bind(bn,Le)}}return Le}function on(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function ri(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,Y,st){K.get(A.texture).__webglTexture=Y,K.get(A.depthTexture).__webglTexture=st;const it=K.get(A);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=st===void 0,it.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Y){const st=K.get(A);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,st=0){P=A,O=Y,I=st;let it=!0,j=null,Rt=!1,Nt=!1;if(A){const Wt=K.get(A);if(Wt.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(g.FRAMEBUFFER,null),it=!1;else if(Wt.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Wt.__hasExternalTextures)M.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(Wt.__boundDepthTexture!==Xt){if(Xt!==null&&K.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const Zt=A.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Nt=!0);const Jt=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[Y])?j=Jt[Y][st]:j=Jt[Y],Rt=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?j=K.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?j=Jt[st]:j=Jt,y.copy(A.viewport),E.copy(A.scissor),Z=A.scissorTest}else y.copy(yt).multiplyScalar(Q).floor(),E.copy(_t).multiplyScalar(Q).floor(),Z=It;if(D.bindFramebuffer(g.FRAMEBUFFER,j)&&it&&D.drawBuffers(A,j),D.viewport(y),D.scissor(E),D.setScissorTest(Z),Rt){const Wt=K.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Wt.__webglTexture,st)}else if(Nt){const Wt=K.get(A.texture),Zt=Y||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Wt.__webglTexture,st||0,Zt)}F=-1},this.readRenderTargetPixels=function(A,Y,st,it,j,Rt,Nt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ht=Ht[Nt]),Ht){D.bindFramebuffer(g.FRAMEBUFFER,Ht);try{const Wt=A.texture,Zt=Wt.format,Jt=Wt.type;if(!N.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-it&&st>=0&&st<=A.height-j&&g.readPixels(Y,st,it,j,Ut.convert(Zt),Ut.convert(Jt),Rt)}finally{const Wt=P!==null?K.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,st,it,j,Rt,Nt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ht=Ht[Nt]),Ht){const Wt=A.texture,Zt=Wt.format,Jt=Wt.type;if(!N.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=A.width-it&&st>=0&&st<=A.height-j){D.bindFramebuffer(g.FRAMEBUFFER,Ht);const Xt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Xt),g.bufferData(g.PIXEL_PACK_BUFFER,Rt.byteLength,g.STREAM_READ),g.readPixels(Y,st,it,j,Ut.convert(Zt),Ut.convert(Jt),0);const pe=P!==null?K.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,pe);const xe=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await sv(g,xe,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Xt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Rt),g.deleteBuffer(Xt),g.deleteSync(xe),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,st=0){A.isTexture!==!0&&(oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1]);const it=Math.pow(2,-st),j=Math.floor(A.image.width*it),Rt=Math.floor(A.image.height*it),Nt=Y!==null?Y.x:0,Ht=Y!==null?Y.y:0;M.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,st,0,0,Nt,Ht,j,Rt),D.unbindTexture()},this.copyTextureToTexture=function(A,Y,st=null,it=null,j=0){A.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,A=arguments[1],Y=arguments[2],j=arguments[3]||0,st=null);let Rt,Nt,Ht,Wt,Zt,Jt;st!==null?(Rt=st.max.x-st.min.x,Nt=st.max.y-st.min.y,Ht=st.min.x,Wt=st.min.y):(Rt=A.image.width,Nt=A.image.height,Ht=0,Wt=0),it!==null?(Zt=it.x,Jt=it.y):(Zt=0,Jt=0);const Xt=Ut.convert(Y.format),pe=Ut.convert(Y.type);M.setTexture2D(Y,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const xe=g.getParameter(g.UNPACK_ROW_LENGTH),be=g.getParameter(g.UNPACK_IMAGE_HEIGHT),je=g.getParameter(g.UNPACK_SKIP_PIXELS),ge=g.getParameter(g.UNPACK_SKIP_ROWS),qt=g.getParameter(g.UNPACK_SKIP_IMAGES),Ve=A.isCompressedTexture?A.mipmaps[j]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Ve.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ve.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ht),g.pixelStorei(g.UNPACK_SKIP_ROWS,Wt),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,j,Zt,Jt,Rt,Nt,Xt,pe,Ve.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,j,Zt,Jt,Ve.width,Ve.height,Xt,Ve.data):g.texSubImage2D(g.TEXTURE_2D,j,Zt,Jt,Rt,Nt,Xt,pe,Ve),g.pixelStorei(g.UNPACK_ROW_LENGTH,xe),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,be),g.pixelStorei(g.UNPACK_SKIP_PIXELS,je),g.pixelStorei(g.UNPACK_SKIP_ROWS,ge),g.pixelStorei(g.UNPACK_SKIP_IMAGES,qt),j===0&&Y.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,st=null,it=null,j=0){A.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,it=arguments[1]||null,A=arguments[2],Y=arguments[3],j=arguments[4]||0);let Rt,Nt,Ht,Wt,Zt,Jt,Xt,pe,xe;const be=A.isCompressedTexture?A.mipmaps[j]:A.image;st!==null?(Rt=st.max.x-st.min.x,Nt=st.max.y-st.min.y,Ht=st.max.z-st.min.z,Wt=st.min.x,Zt=st.min.y,Jt=st.min.z):(Rt=be.width,Nt=be.height,Ht=be.depth,Wt=0,Zt=0,Jt=0),it!==null?(Xt=it.x,pe=it.y,xe=it.z):(Xt=0,pe=0,xe=0);const je=Ut.convert(Y.format),ge=Ut.convert(Y.type);let qt;if(Y.isData3DTexture)M.setTexture3D(Y,0),qt=g.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)M.setTexture2DArray(Y,0),qt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ve=g.getParameter(g.UNPACK_ROW_LENGTH),Pt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Le=g.getParameter(g.UNPACK_SKIP_PIXELS),Fe=g.getParameter(g.UNPACK_SKIP_ROWS),ye=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,be.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,be.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Wt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Zt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Jt),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(qt,j,Xt,pe,xe,Rt,Nt,Ht,je,ge,be.data):Y.isCompressedArrayTexture?g.compressedTexSubImage3D(qt,j,Xt,pe,xe,Rt,Nt,Ht,je,be.data):g.texSubImage3D(qt,j,Xt,pe,xe,Rt,Nt,Ht,je,ge,be),g.pixelStorei(g.UNPACK_ROW_LENGTH,Ve),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Pt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Le),g.pixelStorei(g.UNPACK_SKIP_ROWS,Fe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ye),j===0&&Y.generateMipmaps&&g.generateMipmap(qt),D.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),D.unbindTexture()},this.resetState=function(){O=0,I=0,P=null,D.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===pu?"display-p3":"srgb",e.unpackColorSpace=Se.workingColorSpace===Da?"display-p3":"srgb"}}class ii extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ot:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new $,s=[],r=[],o=[],a=new $,l=new Ne;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new $)}r[0]=new $,o[0]=new $;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(tn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(tn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yu extends yi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ot){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _S extends yu{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const qo=new $,Cl=new Mu,Il=new Mu,Ll=new Mu;class vS extends yi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new $){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(qo.subVectors(s[0],s[1]).add(s[0]),c=qo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),_<1e-4&&(_=x),p<1e-4&&(p=x),Cl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,x,p),Il.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,x,p),Ll.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,x,p)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Il.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ll.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Cl.calc(l),Il.calc(l),Ll.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new $().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pd(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function xS(n,t){const e=1-n;return e*e*t}function yS(n,t){return 2*(1-n)*n*t}function MS(n,t){return n*n*t}function $r(n,t,e,i){return xS(n,t)+yS(n,e)+MS(n,i)}function wS(n,t){const e=1-n;return e*e*e*t}function SS(n,t){const e=1-n;return 3*e*e*n*t}function ES(n,t){return 3*(1-n)*n*n*t}function bS(n,t){return n*n*n*t}function jr(n,t,e,i,s){return wS(n,t)+SS(n,e)+ES(n,i)+bS(n,s)}class fp extends yi{constructor(t=new Ot,e=new Ot,i=new Ot,s=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ot){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class TS extends yi{constructor(t=new $,e=new $,i=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new $){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y),jr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pp extends yi{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class AS extends yi{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mp extends yi{constructor(t=new Ot,e=new Ot,i=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ot){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set($r(t,s.x,r.x,o.x),$r(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class RS extends yi{constructor(t=new $,e=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new $){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set($r(t,s.x,r.x,o.x),$r(t,s.y,r.y,o.y),$r(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gp extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(pd(a,l.x,c.x,h.x,u.x),pd(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Ot().fromArray(s))}return this}}var Dc=Object.freeze({__proto__:null,ArcCurve:_S,CatmullRomCurve3:vS,CubicBezierCurve:fp,CubicBezierCurve3:TS,EllipseCurve:yu,LineCurve:pp,LineCurve3:AS,QuadraticBezierCurve:mp,QuadraticBezierCurve3:RS,SplineCurve:gp});class PS extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Dc[s.type]().fromJSON(s))}return this}}class Uc extends PS{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new pp(this.currentPoint.clone(),new Ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new mp(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new fp(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s),new Ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new gp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new yu(t,e,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ae extends Gn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new $,h=new Ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(a,3)),this.setAttribute("uv",new We(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ue extends Gn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let _=0;const x=[],p=i/2;let m=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function b(){const S=new $,O=new $;let I=0;const P=(e-t)/i;for(let F=0;F<=r;F++){const q=[],y=F/r,E=y*(e-t)+t;for(let Z=0;Z<=s;Z++){const k=Z/s,J=k*l+a,at=Math.sin(J),G=Math.cos(J);O.x=E*at,O.y=-y*i+p,O.z=E*G,u.push(O.x,O.y,O.z),S.set(at,P,G).normalize(),d.push(S.x,S.y,S.z),f.push(k,1-y),q.push(_++)}x.push(q)}for(let F=0;F<s;F++)for(let q=0;q<r;q++){const y=x[q][F],E=x[q+1][F],Z=x[q+1][F+1],k=x[q][F+1];t>0&&(h.push(y,E,k),I+=3),e>0&&(h.push(E,Z,k),I+=3)}c.addGroup(m,I,0),m+=I}function w(S){const O=_,I=new Ot,P=new $;let F=0;const q=S===!0?t:e,y=S===!0?1:-1;for(let Z=1;Z<=s;Z++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),_++;const E=_;for(let Z=0;Z<=s;Z++){const J=Z/s*l+a,at=Math.cos(J),G=Math.sin(J);P.x=q*G,P.y=p*y,P.z=q*at,u.push(P.x,P.y,P.z),d.push(0,y,0),I.x=at*.5+.5,I.y=G*.5*y+.5,f.push(I.x,I.y),_++}for(let Z=0;Z<s;Z++){const k=O+Z,J=E+Z;S===!0?h.push(J,J+1,k):h.push(J+1,J,k),F+=3}c.addGroup(m,F,S===!0?1:2),m+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class er extends ue{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new er(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dn extends Uc{constructor(t){super(t),this.uuid=Us(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Uc().fromJSON(s))}return this}}const CS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=_p(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=NS(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let _=e;_<s;_+=e)u=n[_],d=n[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return lo(r,o,e,a,l,f,0),o}};function _p(n,t,e,i,s){let r,o;if(s===qS(n,t,e,i)>0)for(r=t;r<e;r+=i)o=md(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=md(r,n[r],n[r+1],o);return o&&Fa(o,o.next)&&(uo(o),o=o.next),o}function Ls(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Fa(e,e.next)||Be(e.prev,e,e.next)===0)){if(uo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function lo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&GS(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?LS(n,i,s,r):IS(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),uo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=DS(Ls(n),t,e),lo(n,t,e,i,s,r,2)):o===2&&US(n,t,e,i,s,r):lo(Ls(n),t,e,i,s,r,1);break}}}function IS(n){const t=n.prev,e=n,i=n.next;if(Be(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&nr(s,a,r,l,o,c,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function LS(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Be(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=Nc(f,_,t,e,i),b=Nc(x,p,t,e,i);let w=n.prevZ,S=n.nextZ;for(;w&&w.z>=m&&S&&S.z<=b;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==o&&nr(a,h,l,u,c,d,w.x,w.y)&&Be(w.prev,w,w.next)>=0||(w=w.prevZ,S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&nr(a,h,l,u,c,d,S.x,S.y)&&Be(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==o&&nr(a,h,l,u,c,d,w.x,w.y)&&Be(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;S&&S.z<=b;){if(S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&nr(a,h,l,u,c,d,S.x,S.y)&&Be(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function DS(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Fa(s,r)&&vp(s,i,i.next,r)&&co(s,r)&&co(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),uo(i),uo(i.next),i=n=r),i=i.next}while(i!==n);return Ls(i)}function US(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&VS(o,a)){let l=xp(o,a);o=Ls(o,o.next),l=Ls(l,l.next),lo(o,t,e,i,s,r,0),lo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function NS(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=_p(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(kS(c));for(s.sort(FS),r=0;r<s.length;r++)e=OS(s[r],e);return e}function FS(n,t){return n.x-t.x}function OS(n,t){const e=BS(n,t);if(!e)return t;const i=xp(e,n);return Ls(i,i.next),Ls(e,e.next)}function BS(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&nr(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),co(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&zS(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function zS(n,t){return Be(n.prev,n,t.prev)<0&&Be(t.next,n,n.next)<0}function GS(n,t,e,i){let s=n;do s.z===0&&(s.z=Nc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,HS(s)}function HS(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Nc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function kS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function nr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function VS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!WS(n,t)&&(co(n,t)&&co(t,n)&&XS(n,t)&&(Be(n.prev,n,t.prev)||Be(n,t.prev,t))||Fa(n,t)&&Be(n.prev,n,n.next)>0&&Be(t.prev,t,t.next)>0)}function Be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Fa(n,t){return n.x===t.x&&n.y===t.y}function vp(n,t,e,i){const s=$o(Be(n,t,e)),r=$o(Be(n,t,i)),o=$o(Be(e,i,n)),a=$o(Be(e,i,t));return!!(s!==r&&o!==a||s===0&&Yo(n,e,t)||r===0&&Yo(n,i,t)||o===0&&Yo(e,n,i)||a===0&&Yo(e,t,i))}function Yo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function $o(n){return n>0?1:n<0?-1:0}function WS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&vp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function co(n,t){return Be(n.prev,n,n.next)<0?Be(n,t,n.next)>=0&&Be(n,n.prev,t)>=0:Be(n,t,n.prev)<0||Be(n,n.next,t)<0}function XS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function xp(n,t){const e=new Fc(n.i,n.x,n.y),i=new Fc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function md(n,t,e,i){const s=new Fc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function uo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qS(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class ur{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return ur.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];gd(t),_d(i,t);let o=t.length;e.forEach(gd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,_d(i,e[l]);const a=CS.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function gd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function _d(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class On extends Gn{constructor(t=new Dn([new Ot(.5,.5),new Ot(-.5,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new We(s,3)),this.setAttribute("uv",new We(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:YS;let w,S=!1,O,I,P,F;m&&(w=m.getSpacedPoints(h),S=!0,d=!1,O=m.computeFrenetFrames(h,!1),I=new $,P=new $,F=new $),d||(p=0,f=0,_=0,x=0);const q=a.extractPoints(c);let y=q.shape;const E=q.holes;if(!ur.isClockWise(y)){y=y.reverse();for(let et=0,g=E.length;et<g;et++){const T=E[et];ur.isClockWise(T)&&(E[et]=T.reverse())}}const k=ur.triangulateShape(y,E),J=y;for(let et=0,g=E.length;et<g;et++){const T=E[et];y=y.concat(T)}function at(et,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(g,T)}const G=y.length,Q=k.length;function X(et,g,T){let L,N,D;const V=et.x-g.x,K=et.y-g.y,M=T.x-et.x,v=T.y-et.y,C=V*V+K*K,W=V*v-K*M;if(Math.abs(W)>Number.EPSILON){const z=Math.sqrt(C),H=Math.sqrt(M*M+v*v),ht=g.x-K/z,lt=g.y+V/z,pt=T.x-v/H,Tt=T.y+M/H,dt=((pt-ht)*v-(Tt-lt)*M)/(V*v-K*M);L=ht+V*dt-et.x,N=lt+K*dt-et.y;const Mt=L*L+N*N;if(Mt<=2)return new Ot(L,N);D=Math.sqrt(Mt/2)}else{let z=!1;V>Number.EPSILON?M>Number.EPSILON&&(z=!0):V<-Number.EPSILON?M<-Number.EPSILON&&(z=!0):Math.sign(K)===Math.sign(v)&&(z=!0),z?(L=-K,N=V,D=Math.sqrt(C)):(L=V,N=K,D=Math.sqrt(C/2))}return new Ot(L/D,N/D)}const mt=[];for(let et=0,g=J.length,T=g-1,L=et+1;et<g;et++,T++,L++)T===g&&(T=0),L===g&&(L=0),mt[et]=X(J[et],J[T],J[L]);const yt=[];let _t,It=mt.concat();for(let et=0,g=E.length;et<g;et++){const T=E[et];_t=[];for(let L=0,N=T.length,D=N-1,V=L+1;L<N;L++,D++,V++)D===N&&(D=0),V===N&&(V=0),_t[L]=X(T[L],T[D],T[V]);yt.push(_t),It=It.concat(_t)}for(let et=0;et<p;et++){const g=et/p,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let N=0,D=J.length;N<D;N++){const V=at(J[N],mt[N],L);U(V.x,V.y,-T)}for(let N=0,D=E.length;N<D;N++){const V=E[N];_t=yt[N];for(let K=0,M=V.length;K<M;K++){const v=at(V[K],_t[K],L);U(v.x,v.y,-T)}}}const Bt=_+x;for(let et=0;et<G;et++){const g=d?at(y[et],It[et],Bt):y[et];S?(P.copy(O.normals[0]).multiplyScalar(g.x),I.copy(O.binormals[0]).multiplyScalar(g.y),F.copy(w[0]).add(P).add(I),U(F.x,F.y,F.z)):U(g.x,g.y,0)}for(let et=1;et<=h;et++)for(let g=0;g<G;g++){const T=d?at(y[g],It[g],Bt):y[g];S?(P.copy(O.normals[et]).multiplyScalar(T.x),I.copy(O.binormals[et]).multiplyScalar(T.y),F.copy(w[et]).add(P).add(I),U(F.x,F.y,F.z)):U(T.x,T.y,u/h*et)}for(let et=p-1;et>=0;et--){const g=et/p,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let N=0,D=J.length;N<D;N++){const V=at(J[N],mt[N],L);U(V.x,V.y,u+T)}for(let N=0,D=E.length;N<D;N++){const V=E[N];_t=yt[N];for(let K=0,M=V.length;K<M;K++){const v=at(V[K],_t[K],L);S?U(v.x,v.y+w[h-1].y,w[h-1].x+T):U(v.x,v.y,u+T)}}}ot(),ft();function ot(){const et=s.length/3;if(d){let g=0,T=G*g;for(let L=0;L<Q;L++){const N=k[L];ct(N[2]+T,N[1]+T,N[0]+T)}g=h+p*2,T=G*g;for(let L=0;L<Q;L++){const N=k[L];ct(N[0]+T,N[1]+T,N[2]+T)}}else{for(let g=0;g<Q;g++){const T=k[g];ct(T[2],T[1],T[0])}for(let g=0;g<Q;g++){const T=k[g];ct(T[0]+G*h,T[1]+G*h,T[2]+G*h)}}i.addGroup(et,s.length/3-et,0)}function ft(){const et=s.length/3;let g=0;wt(J,g),g+=J.length;for(let T=0,L=E.length;T<L;T++){const N=E[T];wt(N,g),g+=N.length}i.addGroup(et,s.length/3-et,1)}function wt(et,g){let T=et.length;for(;--T>=0;){const L=T;let N=T-1;N<0&&(N=et.length-1);for(let D=0,V=h+p*2;D<V;D++){const K=G*D,M=G*(D+1),v=g+L+K,C=g+N+K,W=g+N+M,z=g+L+M;rt(v,C,W,z)}}}function U(et,g,T){l.push(et),l.push(g),l.push(T)}function ct(et,g,T){ut(et),ut(g),ut(T);const L=s.length/3,N=b.generateTopUV(i,s,L-3,L-2,L-1);bt(N[0]),bt(N[1]),bt(N[2])}function rt(et,g,T,L){ut(et),ut(g),ut(L),ut(g),ut(T),ut(L);const N=s.length/3,D=b.generateSideWallUV(i,s,N-6,N-3,N-2,N-1);bt(D[0]),bt(D[1]),bt(D[3]),bt(D[1]),bt(D[2]),bt(D[3])}function ut(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function bt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return $S(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Dc[s.type]().fromJSON(s)),new On(i,t.options)}}const YS={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new Ot(r,o),new Ot(a,l),new Ot(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ot(o,1-l),new Ot(c,1-u),new Ot(d,1-_),new Ot(x,1-m)]:[new Ot(a,1-l),new Ot(h,1-u),new Ot(f,1-_),new Ot(p,1-m)]}};function $S(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Et extends Gn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new $,d=new $,f=[],_=[],x=[],p=[];for(let m=0;m<=i;m++){const b=[],w=m/i;let S=0;m===0&&o===0?S=.5/e:m===i&&l===Math.PI&&(S=-.5/e);for(let O=0;O<=e;O++){const I=O/e;u.x=-t*Math.cos(s+I*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(s+I*r)*Math.sin(o+w*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(I+S,1-w),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){const w=h[m][b+1],S=h[m][b],O=h[m+1][b],I=h[m+1][b+1];(m!==0||o>0)&&f.push(w,S,I),(m!==i-1||l<Math.PI)&&f.push(S,O,I)}this.setIndex(f),this.setAttribute("position",new We(_,3)),this.setAttribute("normal",new We(x,3)),this.setAttribute("uv",new We(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Et(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hr extends Gn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new $,u=new $,d=new $;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const x=_/s*r,p=f/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,p=(s+1)*(f-1)+_-1,m=(s+1)*(f-1)+_,b=(s+1)*f+_;o.push(x,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ne extends _o{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jf,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dt extends ne{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const va={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class jS{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const KS=new jS;class Er{constructor(t){this.manager=t!==void 0?t:KS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Er.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pi={};class ZS extends Error{constructor(t,e){super(t),this.response=e}}class JS extends Er{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=va.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Pi[t]!==void 0){Pi[t].push({onLoad:e,onProgress:i,onError:s});return}Pi[t]=[],Pi[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Pi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let x=0;const p=new ReadableStream({start(m){b();function b(){u.read().then(({done:w,value:S})=>{if(w)m.close();else{x+=S.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:f});for(let I=0,P=h.length;I<P;I++){const F=h[I];F.onProgress&&F.onProgress(O)}m.enqueue(S),b()}},w=>{m.error(w)})}}});return new Response(p)}else throw new ZS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{va.add(t,c);const h=Pi[t];delete Pi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Pi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Pi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class yp extends Er{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=va.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ao("img");function l(){h(),va.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class QS extends Er{constructor(t){super(t)}load(t,e,i,s){const r=new _u;r.colorSpace=Xn;const o=new yp(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}}class Hi extends Er{constructor(t){super(t)}load(t,e,i,s){const r=new yn,o=new yp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class wu extends dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Dl=new Ne,vd=new $,xd=new $;class Mp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vu,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(vd),xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xd),e.updateMatrixWorld(),Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yd=new Ne,Ur=new $,Ul=new $;class t1 extends Mp{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new Pe(2,1,1,1),new Pe(0,1,1,1),new Pe(3,1,1,1),new Pe(1,1,1,1),new Pe(3,0,1,1),new Pe(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ur),Ul.copy(i.position),Ul.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ul),i.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd)}}class ki extends wu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new t1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class e1 extends Mp{constructor(){super(new ap(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vi extends wu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new e1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Wi extends wu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class wp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Md();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Md(){return performance.now()}class n1{constructor(){this.type="ShapePath",this.color=new _e,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Uc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,r,o){return this.currentPath.bezierCurveTo(t,e,i,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const b=[];for(let w=0,S=m.length;w<S;w++){const O=m[w],I=new Dn;I.curves=O.curves,b.push(I)}return b}function i(m,b){const w=b.length;let S=!1;for(let O=w-1,I=0;I<w;O=I++){let P=b[O],F=b[I],q=F.x-P.x,y=F.y-P.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(P=b[I],q=-q,F=b[O],y=-y),m.y<P.y||m.y>F.y)continue;if(m.y===P.y){if(m.x===P.x)return!0}else{const E=y*(m.x-P.x)-q*(m.y-P.y);if(E===0)return!0;if(E<0)continue;S=!S}}else{if(m.y!==P.y)continue;if(F.x<=m.x&&m.x<=P.x||P.x<=m.x&&m.x<=F.x)return!0}}return S}const s=ur.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Dn,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,x;d[_]=void 0,f[_]=[];for(let m=0,b=r.length;m<b;m++)a=r[m],x=a.getPoints(),o=s(x),o=t?!o:o,o?(!h&&d[_]&&_++,d[_]={s:new Dn,p:x},d[_].s.curves=a.curves,h&&_++,f[_]=[]):f[_].push({h:a,p:x[0]});if(!d[0])return e(r);if(d.length>1){let m=!1,b=0;for(let w=0,S=d.length;w<S;w++)u[w]=[];for(let w=0,S=d.length;w<S;w++){const O=f[w];for(let I=0;I<O.length;I++){const P=O[I];let F=!0;for(let q=0;q<d.length;q++)i(P.p,d[q].p)&&(w!==q&&b++,F?(F=!1,u[q].push(P)):m=!0);F&&u[w].push(P)}}b>0&&m===!1&&(f=u)}let p;for(let m=0,b=d.length;m<b;m++){l=d[m].s,c.push(l),p=f[m];for(let w=0,S=p.length;w<S;w++)l.holes.push(p[w].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=au);class Xi extends Er{constructor(t){super(t)}load(t,e,i,s){const r=this,o=new JS(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},i,s)}parse(t){return new i1(t)}}class i1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=s1(t,e,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function s1(n,t,e){const i=Array.from(n),s=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=r;else{const u=r1(h,s,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function r1(n,t,e,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new n1;let a,l,c,h,u,d,f,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,m=x.length;p<m;)switch(x[p++]){case"m":a=x[p++]*t+e,l=x[p++]*t+i,o.moveTo(a,l);break;case"l":a=x[p++]*t+e,l=x[p++]*t+i,o.lineTo(a,l);break;case"q":c=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,d=x[p++]*t+i,o.quadraticCurveTo(u,d,c,h);break;case"b":c=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,d=x[p++]*t+i,f=x[p++]*t+e,_=x[p++]*t+i,o.bezierCurveTo(u,d,f,_,c,h);break}}return{offsetX:r.ha*t,path:o}}class Ge extends On{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const o1=zn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=null,s=Kt(!1),r=Kt(!1),o=Kt(!1);return si(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ii,c=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3),h=new ni({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new $t,d=new Wi(16777215,2);l.add(d);const f=new Vi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new ki(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Hi,p=x.load("/3d-bear-arts/assets/lv2.jpg"),m=x.load("/3d-bear-arts/assets/lv2.jpg");p.wrapS=p.wrapT=ke,m.wrapS=m.wrapT=ke;const b=new Dt({color:8343336,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),w=new Dt({color:5978654,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),S=new Dt({color:13152668,metalness:.2,roughness:.05,bumpMap:p,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:m,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:he});new Dt({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const O=new Et(1,32,32,0,Math.PI),I=new R(O,S),P=new R(O,b);I.scale.set(.85,.85,.8),P.scale.set(.85,.85,.8),I.position.y=-.2,P.position.y=-.2,I.rotation.y=Math.PI/2,P.rotation.y=Math.PI*1.5;const F=new Ae(1,32),q=new R(F,b);q.scale.set(.85,.85,.8),q.position.set(0,-.2,0),q.rotation.y=Math.PI/2;const y=new $t;y.add(I),y.add(P),y.add(q),u.add(y);const E=new Et(.6,32,32,0,Math.PI),Z=new R(E,b);Z.scale.set(1,.95,.95),Z.position.set(0,1,0),Z.rotation.y=Math.PI*1.5;const k=new R(E,S);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI/2;const J=new Ae(.6,32),at=new R(J,b);at.position.set(0,1,0),at.rotation.y=Math.PI/2,at.scale.set(1,.95,.95);const G=new $t;G.add(Z),G.add(k),G.add(at),u.add(G);const Q=new Et(.25,32,32),X=new R(Q,b);X.position.set(-.45,1.35,-.1),u.add(X);const mt=new R(Q,S);mt.position.set(.45,1.35,-.1),u.add(mt);const yt=new Et(.25,32,32,Math.PI/2,Math.PI),_t=new R(yt,w);_t.scale.set(1.1,.6,.8),_t.position.set(0,.84,.5),_t.rotation.y=Math.PI;const It=new Et(.25,32,32,Math.PI/2,Math.PI),Bt=new R(It,S);Bt.scale.set(1.1,.6,.8),Bt.position.set(0,.84,.5),Bt.rotation.y=0;const ot=new Ae(.25,32),ft=new R(ot,b);ft.scale.set(.8,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI/2;const wt=new $t;wt.add(_t),wt.add(Bt),wt.add(ft),u.add(wt);const U=new Dn;U.moveTo(0,0),U.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),U.bezierCurveTo(-.6,.3,0,.6,0,1),U.bezierCurveTo(0,.6,.6,.3,.6,0),U.bezierCurveTo(.6,-.3,0,-.3,0,0);const ct={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Dt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const rt=new On(U,ct),ut=new R(rt,b);ut.scale.set(.1,.1,.1),ut.rotation.z=ce.degToRad(210),ut.rotation.x=ce.degToRad(5),ut.rotation.y=ce.degToRad(-45),ut.position.set(-.4,.9,.45);const bt=new R(rt,w);bt.scale.set(.6,.5,.5),bt.position.set(.35,0,0),bt.rotation.y=Math.PI,bt.rotation.x=Math.PI;const et=new R(rt,w);et.scale.set(.2,.2,.2),et.position.set(.5,-.1,.2),et.rotation.y=Math.PI,et.rotation.x=Math.PI,u.add(et);const g=new Kn(1.3,1.2,.6),T=new R(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new hr(.15,.025,10,100);new Dt({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const N=new R(L,b);N.position.set(.35,.1,.1),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/8,N.rotation.y=Math.PI/14;const D=new R(L,b);D.position.set(.35,.1,.13),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/-8,D.rotation.y=Math.PI/12;const V=new $t;V.add(T),V.add(N),V.add(D),u.add(V);const K=new Et(.35,32,32),M=new R(K,b);M.scale.set(.75,1.25,.65),M.position.set(-.7,-.15,.2),u.add(M);const v=new R(K,S);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new ue(.2,.22,.6,32),W=new R(C,b);W.position.set(-.4,-1.05,0),u.add(W);const z=new R(C,S);z.position.set(.4,-1.05,0),u.add(z);const H=new Et(.3,32,32),ht=new R(H,b);ht.scale.set(1,.72,1.5),ht.position.set(-.4,-1.45,.17),u.add(ht);const lt=new R(H,S);lt.scale.set(1,.72,1.5),lt.position.set(.4,-1.45,.17),u.add(lt);const pt=new Et(.44,32,32),Tt=new R(pt,b);Tt.position.set(-.15,-.45,-.4),u.add(Tt);const dt=new R(pt,S);dt.position.set(.15,-.45,-.4),u.add(dt);const Mt=new Et(.18,32,32),Ct=new R(Mt,b);Ct.position.set(0,-.35,-.8),u.add(Ct),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const xt=new Ge("X",{font:tt,size:.2,depth:.05});new ti({color:0});const vt=new R(xt,w);vt.position.set(-.3,.99,.53),vt.rotation.x=ce.degToRad(-5),vt.rotation.y=ce.degToRad(-15),u.add(vt);const zt=new Ge("O",{font:tt,size:.2,depth:.05});new ti({color:0});const Yt=new R(zt,w);Yt.position.set(.14,.99,.53),Yt.rotation.y=ce.degToRad(12),Yt.rotation.x=ce.degToRad(-5),u.add(Yt)}),Ct.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const At=()=>{u.rotation.y,u.rotation.x},kt=()=>{s.value=!0,r.value=!1,o.value=!1},Ut=()=>{s.value=!1,r.value=!0,o.value=!1},Vt=()=>{s.value=!1,r.value=!1,At()},B=tt=>{const xt=window.innerWidth/2;tt>xt?kt():Ut(),At()},gt=tt=>{clearTimeout(i),Vt(),o.value=!0;const xt={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1};if(o.value){const vt=xt.x*Math.PI*.2,zt=xt.y*Math.PI*.2;u.rotation.y=vt,u.rotation.x=zt}i=setTimeout(()=>{o.value=!1,B(tt.clientX)},500)};window.addEventListener("mousemove",gt);const nt=tt=>{if(o.value){const xt={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1},vt=xt.x*Math.PI*.2,zt=xt.y*Math.PI*.2;u.rotation.y=vt,u.rotation.x=zt}};window.addEventListener("mousemove",nt),a(),He(()=>t.bodyPosition,tt=>{u.position.set(tt.x,tt.y,tt.z)}),He(()=>t.cameraPosition,tt=>{c.position.set(t.bodyPosition.x,1,tt),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(_i(),vi("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2))}}),a1=xi(o1,[["__scopeId","data-v-f3beb116"]]),l1=zn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=null,s=Kt(!1),r=Kt(!1),o=Kt(!1);return si(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ii,c=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3),h=new ni({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new $t,d=new Wi(16777215,2);l.add(d);const f=new Vi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new ki(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Hi,p=x.load("/3d-bear-arts/assets/pop6.jpg"),m=x.load("/3d-bear-arts/assets/pop7.jpg");p.wrapS=p.wrapT=ke,m.wrapS=m.wrapT=ke;const b=new Dt({color:16738740,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),w=new Dt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:he}),S=new Dt({color:16766720,map:p,metalness:.3,roughness:.5}),O=new Dt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:he}),I=new Dt({color:9055202,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Dt({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:he});const P=new Dt({color:65535,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),F=new Dt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:he}),q=new Et(1,32,32,0,Math.PI),y=new R(q,w),E=new R(q,b);y.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),y.position.y=-.2,E.position.y=-.2,y.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const Z=new Ae(1,32),k=new R(Z,b);k.scale.set(.85,.85,.8),k.position.set(0,-.2,0),k.rotation.y=Math.PI/2;const J=new $t;J.add(y),J.add(E),J.add(k),u.add(J);const at=new Et(.6,32,32,0,Math.PI),G=new R(at,S);G.scale.set(1,.95,.95),G.position.set(0,1,0),G.rotation.y=Math.PI*1.5;const Q=new R(at,O);Q.scale.set(1,.95,.95),Q.position.set(0,1,0),Q.rotation.y=Math.PI/2;const X=new Ae(.6,32),mt=new R(X,S);mt.position.set(0,1,0),mt.rotation.y=Math.PI/2,mt.scale.set(1,.95,.95);const yt=new $t;yt.add(G),yt.add(Q),yt.add(mt),u.add(yt);const _t=new Et(.25,32,32),It=new R(_t,b);It.position.set(-.45,1.35,-.1),u.add(It);const Bt=new R(_t,w);Bt.position.set(.45,1.35,-.1),u.add(Bt);const ot=new Et(.25,32,32,Math.PI/2,Math.PI),ft=new R(ot,S);ft.scale.set(1.1,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI;const wt=new Et(.25,32,32,Math.PI/2,Math.PI),U=new R(wt,O);U.scale.set(1.1,.6,.8),U.position.set(0,.84,.5),U.rotation.y=0;const ct=new Ae(.25,32),rt=new R(ct,S);rt.scale.set(.8,.6,.8),rt.position.set(0,.84,.5),rt.rotation.y=Math.PI/2;const ut=new $t;ut.add(ft),ut.add(U),ut.add(rt),u.add(ut);const bt=new Dn;bt.moveTo(0,0),bt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),bt.bezierCurveTo(-.6,.3,0,.6,0,1),bt.bezierCurveTo(0,.6,.6,.3,.6,0),bt.bezierCurveTo(.6,-.3,0,-.3,0,0);const et={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new On(bt,et),T=new R(g,S);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const L=new R(g,P);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const N=new R(g,b);N.scale.set(.25,.25,.27),N.position.set(.4,.3,-.2),N.rotation.y=Math.PI,N.rotation.x=Math.PI,u.add(N);const D=new Et(.35,32,32),V=new R(D,P);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),u.add(V);const K=new R(D,F);K.scale.set(.75,1.25,.65),K.position.set(.7,-.15,.2),u.add(K);const M=new ue(.2,.22,.6,32),v=new R(M,S);v.position.set(-.4,-1.05,0),u.add(v);const C=new R(M,O);C.position.set(.4,-1.05,0),u.add(C);const W=new Et(.3,32,32),z=new R(W,S);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),u.add(z);const H=new R(W,O);H.scale.set(1,.72,1.5),H.position.set(.4,-1.45,.17),u.add(H);const ht=new Et(.44,32,32),lt=new R(ht,b);lt.position.set(-.15,-.45,-.4),u.add(lt);const pt=new R(ht,w);pt.position.set(.15,-.45,-.4),u.add(pt);const Tt=new Et(.18,32,32),dt=new R(Tt,b);dt.position.set(0,-.35,-.8),u.add(dt),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(gt){const nt=new Ge("X",{font:gt,size:.2,depth:.05});new ti({color:0});const tt=new R(nt,b);tt.position.set(-.3,.99,.53),tt.rotation.x=ce.degToRad(-5),tt.rotation.y=ce.degToRad(-15),u.add(tt);const xt=new Ge("O",{font:gt,size:.2,depth:.05});new ti({color:0});const vt=new R(xt,P);vt.position.set(.14,.99,.53),vt.rotation.y=ce.degToRad(12),vt.rotation.x=ce.degToRad(-5),u.add(vt);const zt=new Ge("POP",{font:gt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Yt=new Dt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Dt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Qt=new Dt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),jt=new Dt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ie=new R(zt,Yt);ie.scale.set(.15,.15,.15),ie.position.set(.03,1.16,.1),ie.rotateZ(-25),u.add(ie);const St=new R(zt,I);St.scale.set(.14,.14,.14),St.rotateZ(45),St.position.set(.2,-.7,.3),u.add(St);const ee=new R(zt,Qt);ee.scale.set(.14,.14,.14),ee.rotateZ(45),ee.rotateY(45),ee.position.set(.3,.7,.3),u.add(ee);const se=new R(zt,Qt);se.scale.set(.15,.15,.15),se.rotateZ(45),se.rotateY(45),se.position.set(.35,-1.5,.3),u.add(se);const te=new R(zt,jt);te.scale.set(.17,.17,.17),te.rotateZ(45),te.rotateY(15),te.position.set(.35,1,.3),u.add(te)}),dt.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const Ct=()=>{u.rotation.y,u.rotation.x},Lt=()=>{s.value=!0,r.value=!1,o.value=!1},At=()=>{s.value=!1,r.value=!0,o.value=!1},kt=()=>{s.value=!1,r.value=!1,Ct()},Ut=gt=>{const nt=window.innerWidth/2;gt>nt?Lt():At(),Ct()},Vt=gt=>{clearTimeout(i),kt(),o.value=!0;const nt={x:gt.clientX/window.innerWidth*2-1,y:-(gt.clientY/window.innerHeight)*2+1};if(o.value){const tt=nt.x*Math.PI*.2,xt=nt.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=xt}i=setTimeout(()=>{o.value=!1,Ut(gt.clientX)},500)};window.addEventListener("mousemove",Vt);const B=gt=>{if(o.value){const nt={x:gt.clientX/window.innerWidth*2-1,y:-(gt.clientY/window.innerHeight)*2+1},tt=nt.x*Math.PI*.2,xt=nt.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=xt}};window.addEventListener("mousemove",B),a(),He(()=>t.bodyPosition,gt=>{u.position.set(gt.x,gt.y,gt.z)}),He(()=>t.cameraPosition,gt=>{c.position.set(t.bodyPosition.x,1,gt),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(_i(),vi("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2))}}),c1=xi(l1,[["__scopeId","data-v-8cfea564"]]),u1={class:"pixel-controls"},h1={class:"side-buttons"},d1=zn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),r=Kt(!1),o=Kt(!1);si(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03);const tt=gt.getElapsedTime();B.forEach((xt,vt)=>{const zt=.2+Math.sin(tt*3+nt[vt])*.1;xt.scale.set(zt,zt,zt)}),x.render(f,_)};const f=new ii,_=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3),x=new ni({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new $t,m=new $t;f.add(m);const b=new Wi(16777215,2);f.add(b);const w=new Vi(16777215,4);w.position.set(5,5,5),f.add(w);const S=new ki(16777215,5,50);S.position.set(0,2,4),f.add(S);const O=new Hi,I=O.load("/3d-bear-arts/assets/pop6.jpg"),P=O.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=ke,P.wrapS=P.wrapT=ke,P.repeat.set(2,2);const F=new Dt({color:16738740,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),q=new Dt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:he}),y=new Dt({color:16766720,map:I,metalness:.3,roughness:.5}),E=new Dt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:he}),Z=new Dt({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Dt({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new Dt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:he}),at=new Et(1,32,32,0,Math.PI),G=new R(at,q),Q=new R(at,F);G.scale.set(.85,.85,.8),Q.scale.set(.85,.85,.8),G.position.y=-.2,Q.position.y=-.2,G.rotation.y=Math.PI/2,Q.rotation.y=Math.PI*1.5;const X=new Ae(1,32),mt=new R(X,F);mt.scale.set(.85,.85,.8),mt.position.set(0,-.2,0),mt.rotation.y=Math.PI/2;const yt=new $t;yt.add(G),yt.add(Q),yt.add(mt),p.add(yt);const _t=new Et(.6,32,32,0,Math.PI),It=new R(_t,y);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI*1.5;const Bt=new R(_t,E);Bt.scale.set(1,.95,.95),Bt.position.set(0,1,0),Bt.rotation.y=Math.PI/2;const ot=new Ae(.6,32),ft=new R(ot,y);ft.position.set(0,1,0),ft.rotation.y=Math.PI/2,ft.scale.set(1,.95,.95);const wt=new $t;wt.add(It),wt.add(Bt),wt.add(ft),p.add(wt);const U=new Et(.25,32,32),ct=new R(U,F);ct.position.set(-.45,1.35,-.1),p.add(ct);const rt=new R(U,q);rt.position.set(.45,1.35,-.1),p.add(rt);const ut=new Et(.25,32,32,Math.PI/2,Math.PI),bt=new R(ut,y);bt.scale.set(1.1,.6,.8),bt.position.set(0,.84,.5),bt.rotation.y=Math.PI;const et=new Et(.25,32,32,Math.PI/2,Math.PI),g=new R(et,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new Ae(.25,32),L=new R(T,y);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const N=new $t;N.add(bt),N.add(g),N.add(L),p.add(N);const D=new Dn;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const V={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},K=new On(D,V),M=new R(K,y);M.scale.set(.5,.5,.5),M.position.set(.3,0,0),M.rotation.y=Math.PI,M.rotation.x=Math.PI,p.add(M);const v=new R(K,k);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new R(K,F);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,p.add(C);const W=new Et(.35,32,32),z=new R(W,k);z.scale.set(.75,1.25,.65),z.position.set(-.7,-.15,.2),p.add(z);const H=new R(W,J);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),p.add(H);const ht=new ue(.2,.22,.6,32),lt=new R(ht,y);lt.position.set(-.4,-1.05,0),p.add(lt);const pt=new R(ht,E);pt.position.set(.4,-1.05,0),p.add(pt);const Tt=new Et(.3,32,32),dt=new R(Tt,y);dt.scale.set(1,.72,1.5),dt.position.set(-.4,-1.45,.17),p.add(dt);const Mt=new R(Tt,E);Mt.scale.set(1,.72,1.5),Mt.position.set(.4,-1.45,.17),p.add(Mt);const Ct=new Et(.44,32,32),Lt=new R(Ct,F);Lt.position.set(-.15,-.45,-.4),p.add(Lt);const At=new R(Ct,q);At.position.set(.15,-.45,-.4),p.add(At);const kt=new Et(.18,32,32),Ut=new R(kt,F);Ut.position.set(0,-.35,-.8),p.add(Ut),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const xt=new Ge("X",{font:tt,size:.2,depth:.05}),vt=new R(xt,F);vt.position.set(-.3,.99,.53),vt.rotation.x=ce.degToRad(-5),vt.rotation.y=ce.degToRad(-15),p.add(vt);const zt=new Ge("O",{font:tt,size:.2,depth:.05}),Yt=new R(zt,k);Yt.position.set(.14,.99,.53),Yt.rotation.y=ce.degToRad(12),Yt.rotation.x=ce.degToRad(-5),p.add(Yt);const Qt=new Ge("POP",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new Ge("🐻",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const jt=new Ge("BAO      BEAR",{font:tt,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),ie=new Dt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Dt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const St=new Dt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),ee=new Dt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),se=new R(Qt,ie);se.scale.set(.15,.15,.15),se.position.set(.02,1.16,.1),se.rotateZ(-25),p.add(se);const te=new R(Qt,Z);te.scale.set(.14,.14,.14),te.rotateZ(45),te.position.set(.2,-.7,.3),p.add(te);const de=new R(Qt,St);de.scale.set(.14,.14,.14),de.rotateZ(45),de.rotateY(45),de.position.set(.3,.7,.3),p.add(de);const fe=new R(Qt,St);fe.scale.set(.15,.15,.15),fe.rotateZ(45),fe.rotateY(45),fe.position.set(.35,-1.5,.3),p.add(fe);const ve=new R(Qt,ee);ve.scale.set(.17,.17,.17),ve.rotateZ(45),ve.rotateY(15),ve.position.set(.35,1,.3),p.add(ve);const me=new R(jt,ie);me.scale.set(.7,.7,.7),me.position.set(-6,0,-3),m.add(me)}),Ut.renderOrder=1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,p.rotation.x=.1;const B=[M,v,C],gt=new wp,nt=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),He(()=>t.bodyPosition,tt=>{p.position.set(tt.x,tt.y,tt.z)}),He(()=>t.cameraPosition,tt=>{_.position.set(t.bodyPosition.x,1,tt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(_i(),vi(cn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",u1,[Gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Gt("div",h1,[Gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),f1=xi(d1,[["__scopeId","data-v-cb52c927"]]),p1={class:"pixel-controls"},m1={class:"side-buttons"},g1=zn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),r=Kt(!1),o=Kt(!1);si(()=>{if(e.value){let d=function(St,ee){const se=new ue(Vt,Vt,B,32);se.rotateX(Math.PI/2);const te=new R(se,St),de=new $t;for(let ve=0;ve<gt;ve++){const me=ve/gt*Math.PI*2,Ie=new Kn(nt,tt,xt),Re=new R(Ie,St);Re.position.set((Vt+xt/26)*Math.cos(me),(Vt+xt/26)*Math.sin(me),0),Re.rotation.z=me,de.add(Re)}const fe=new $t;return fe.add(te),fe.add(de),fe.position.set(ee.x,ee.y,ee.z),fe},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),r.value&&(m.rotation.x-=.03),o.value&&(m.rotation.x+=.03),vt.rotation.z-=.02,zt.rotation.z+=.03,Yt.rotation.z+=.02,Qt.rotation.z+=.02,jt.rotation.z-=.03,ie.rotation.y+=.04,p.render(_,x)};const _=new ii,x=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3),p=new ni({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new $t,b=new $t;_.add(b);const w=new Wi(16777215,2);_.add(w);const S=new Vi(16777215,4);S.position.set(5,5,5),_.add(S);const O=new ki(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new Hi,P=I.load("/3d-bear-arts/assets/metal.jpg"),F=I.load("/3d-bear-arts/assets/pop7.jpg"),q=I.load("/3d-bear-arts/assets/gear.jpg");P.wrapS=P.wrapT=ke,F.wrapS=F.wrapT=ke,F.repeat.set(2,2);const y=new Dt({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:P});q.mapping=so;const E=new Dt({color:"#d3d3d3",metalness:1,roughness:.25,map:P,envMap:q,clearcoat:.7,clearcoatRoughness:.3}),Z=new Dt({color:"#C0C0C0",metalness:1,roughness:.25,envMap:q,clearcoat:.7,clearcoatRoughness:.3}),k=new Dt({color:"#C0C0C0",metalness:1,roughness:.25,map:P,envMap:q,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),J=new Dt({color:"#C0C0C0",metalness:1,roughness:.5,map:P,envMap:q,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),at=new Dt({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:he});new Dt({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const G=new Dt({color:"#d3d3d3",metalness:1,roughness:.2,map:q,envMap:q,clearcoat:.7,clearcoatRoughness:.3});new Dt({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:q}),new Dt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:P,transparent:!0,opacity:.3});const Q=new Et(1,32,32,0,Math.PI),X=new R(Q,J),mt=new R(Q,E);X.scale.set(.85,.85,.8),mt.scale.set(.85,.85,.8),X.position.y=-.2,mt.position.y=-.2,X.rotation.y=Math.PI/2,mt.rotation.y=Math.PI*1.5;const yt=new Ae(1,32),_t=new R(yt,k);_t.scale.set(.85,.85,.8),_t.position.set(0,-.2,0),_t.rotation.y=Math.PI/2;const It=new $t;It.add(X),It.add(mt),It.add(_t),m.add(It);const Bt=new Et(.6,32,32,0,Math.PI),ot=new R(Bt,E);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI*1.5;const ft=new R(Bt,J);ft.scale.set(1,.95,.95),ft.position.set(0,1,0),ft.rotation.y=Math.PI/2;const wt=new Ae(.6,32),U=new R(wt,k);U.position.set(0,1,0),U.rotation.y=Math.PI/2,U.scale.set(1,.95,.95);const ct=new $t;ct.add(ot),ct.add(ft),ct.add(U),m.add(ct);const rt=new Et(.25,32,32),ut=new R(rt,E);ut.position.set(-.45,1.35,-.1),m.add(ut);const bt=new R(rt,k);bt.position.set(.45,1.35,-.1),m.add(bt);const et=new Et(.25,32,32,Math.PI/2,Math.PI),g=new R(et,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new Et(.25,32,32,Math.PI/2,Math.PI),L=new R(T,k);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const N=new Ae(.25,32),D=new R(N,at);D.scale.set(.8,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI/2;const V=new $t;V.add(g),V.add(L),V.add(D),m.add(V);const K=new Dn;K.moveTo(0,0),K.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),K.bezierCurveTo(-.6,.3,0,.6,0,1),K.bezierCurveTo(0,.6,.6,.3,.6,0),K.bezierCurveTo(.6,-.3,0,-.3,0,0);const M={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new On(K,M),C=new Et(.35,32,32),W=new R(C,E);W.scale.set(.75,1.25,.65),W.position.set(-.7,-.15,.2),m.add(W);const z=new R(C,k);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const H=new ue(.2,.22,.6,32),ht=new R(H,E);ht.position.set(-.4,-1.05,0),m.add(ht);const lt=new R(H,k);lt.position.set(.4,-1.05,0),m.add(lt);const pt=new Et(.3,32,32),Tt=new R(pt,E);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),m.add(Tt);const dt=new R(pt,k);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),m.add(dt);const Mt=new Et(.44,32,32),Ct=new R(Mt,E);Ct.position.set(-.15,-.45,-.4),m.add(Ct);const Lt=new R(Mt,J);Lt.position.set(.15,-.45,-.4),m.add(Lt);const At=new Et(.18,32,32),kt=new R(At,E);kt.position.set(0,-.35,-.8),m.add(kt),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(St){const ee=new Ge("X",{font:St,size:.2,depth:.05});new ti({color:0});const se=new R(ee,y);se.position.set(-.3,.99,.53),se.rotation.x=ce.degToRad(-5),se.rotation.y=ce.degToRad(-15),m.add(se);const te=new Ge("O",{font:St,size:.2,depth:.05});new ti({color:0});const de=new R(te,y);de.position.set(.14,.99,.53),de.rotation.y=ce.degToRad(12),de.rotation.x=ce.degToRad(-5),m.add(de)}),kt.renderOrder=1;const Vt=1.2,B=.5,gt=8,nt=.7,tt=.3,xt=.5,vt=d(G,{x:-2,y:0,z:0}),zt=d(G,{x:0,y:0,z:0}),Yt=d(G,{x:2,y:0,z:0}),Qt=d(G,{x:2,y:0,z:0}),jt=d(G,{x:2,y:-2,z:0}),ie=new R(v,Z);ie.scale.set(.3,.3,.3),ie.position.set(.25,1.1,0),ie.rotation.y=Math.PI,ie.rotation.x=Math.PI,m.add(ie),vt.position.set(.35,0,0),zt.position.set(.25,-.3,.4),Yt.position.set(.3,.3,-.2),Qt.position.set(.25,.17,.4),jt.position.set(.5,-.3,.45),vt.scale.set(.2,.2,.2),zt.scale.set(.18,.18,.18),Yt.scale.set(.15,.15,.15),Qt.scale.set(.17,.17,.17),jt.scale.set(.15,.15,.15),zt.rotation.z=Math.PI/4,Yt.rotation.z=-Math.PI/4,Qt.rotation.y=-Math.PI/2,jt.rotation.y=-Math.PI/2,m.add(vt),m.add(zt),m.add(Yt),m.add(Qt),m.add(jt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4,f(),He(()=>t.bodyPosition,St=>{m.position.set(St.x,St.y,St.z)}),He(()=>t.cameraPosition,St=>{x.position.set(t.bodyPosition.x,1,St),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(_i(),vi(cn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",p1,[Gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Gt("div",m1,[Gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),_1=xi(g1,[["__scopeId","data-v-9a57b6d8"]]),v1={class:"pixel-controls"},x1={class:"side-buttons"},y1=zn({__name:"WaterBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),r=Kt(!1),o=Kt(!1);si(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),x.render(f,_)};const f=new ii,_=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3),x=new ni({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new $t,m=new $t;f.add(m);const b=new Wi(16777215,2);f.add(b);const w=new Vi(16777215,4);w.position.set(5,5,5),f.add(w);const S=new ki(16777215,5,50);S.position.set(0,2,4),f.add(S);const O=new Hi,I=O.load("/3d-bear-arts/assets/sun.jpg"),P=O.load("/3d-bear-arts/assets/gear.jpg"),F=O.load("/3d-bear-arts/assets/underwater.jpg"),q=O.load("/3d-bear-arts/assets/beach.jpg");F.wrapS=F.wrapT=ke,q.wrapS=q.wrapT=ke,q.repeat.set(.8,1),P.mapping=so,I.wrapS=I.wrapT=ke;const y=new Dt({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,map:q,envMapIntensity:.8,side:he,transparent:!0,opacity:.9}),E=new Dt({color:11592447,metalness:.05,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,reflectivity:.4,map:q,envMapIntensity:.6,side:he,transparent:!0,opacity:.9,transmission:.5,ior:1.33,depthWrite:!1,depthTest:!0});new Dt({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,envMapIntensity:.8,map:q,side:he,transparent:!0,opacity:.9});const Z=new Dt({color:8374441,metalness:1,roughness:.25,envMap:P,clearcoat:.7,clearcoatRoughness:.3}),k=new Dt({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,clearcoat:.6,clearcoatRoughness:.25,transmission:.6,ior:1.4,depthWrite:!1,depthTest:!0,side:he}),J=new Dt({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,map:q,clearcoat:.1,clearcoatRoughness:.25,transmission:.6,ior:1.4}),at=new Dt({color:"#a4d0f5",metalness:0,roughness:.8,map:I,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.8,transparent:!0}),G=new Dt({color:"#a4d0f5",metalness:0,roughness:.85,map:q,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.6,transparent:!0}),Q=new Et(1,32,32,0,Math.PI),X=new R(Q,k),mt=new R(Q,E);X.scale.set(.85,.85,.8),mt.scale.set(.85,.85,.8),X.position.y=-.2,mt.position.y=-.2,X.rotation.y=Math.PI/2,mt.rotation.y=Math.PI*1.5;const yt=new Ae(1,32),_t=new R(yt,G);_t.scale.set(.85,.85,.8),_t.position.set(0,-.2,0),_t.rotation.y=Math.PI/2;const It=new $t;It.add(X),It.add(mt),It.add(_t);const Bt=new Et(.6,32,32,0,Math.PI*2,0,Math.PI/2),ot=new Dt({color:6935271,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ft=new R(Bt,ot);ft.position.set(0,-.2,0),ft.rotation.x=Math.PI,ft.scale.set(1.25,1.25,1.25),It.add(ft);const wt=new Dt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:he,transparent:!0,opacity:.7,depthWrite:!1}),U=new R(yt,wt);U.scale.set(.7,.7,.7),U.position.set(0,-.3,0),U.rotation.x=Math.PI/2,U.renderOrder=1,It.add(U),p.add(It);const ct=new Et(.6,32,32,0,Math.PI),rt=new R(ct,y);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI*1.5;const ut=new R(ct,J);ut.scale.set(1,.95,.95),ut.position.set(0,1,0),ut.rotation.y=Math.PI/2;const bt=new Ae(.6,32),et=new R(bt,at);et.position.set(0,1,0),et.rotation.y=Math.PI/2,et.scale.set(1,.95,.95);const g=new $t;g.add(rt),g.add(ut),g.add(et),p.add(g);const T=new Et(.25,32,32),L=new R(T,y);L.position.set(-.45,1.35,-.1),p.add(L);const N=new R(T,J);N.position.set(.45,1.35,-.1),p.add(N);const D=new Et(.25,32,32,Math.PI/2,Math.PI),V=new R(D,y);V.scale.set(1.1,.6,.8),V.position.set(0,.84,.5),V.rotation.y=Math.PI;const K=new Et(.25,32,32,Math.PI/2,Math.PI),M=new R(K,J);M.scale.set(1.1,.6,.8),M.position.set(0,.84,.5),M.rotation.y=0;const v=new Ae(.25,32),C=new R(v,at);C.scale.set(.8,.6,.8),C.position.set(0,.84,.5),C.rotation.y=Math.PI/2;const W=new $t;W.add(V),W.add(M),W.add(C),p.add(W);const z=new Dn;z.moveTo(0,0),z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),z.bezierCurveTo(-.6,.3,0,.6,0,1),z.bezierCurveTo(0,.6,.6,.3,.6,0),z.bezierCurveTo(.6,-.3,0,-.3,0,0);const H={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ht=new On(z,H),lt=new Et(.35,32,32),pt=new R(lt,y);pt.scale.set(.75,1.25,.65),pt.position.set(-.7,-.15,.2),p.add(pt);const Tt=new R(lt,J);Tt.scale.set(.75,1.25,.65),Tt.position.set(.7,-.15,.2),p.add(Tt);const dt=new ue(.2,.22,.6,32),Mt=new R(dt,y);Mt.position.set(-.4,-1.05,0),p.add(Mt);const Ct=new R(dt,J);Ct.position.set(.4,-1.05,0),p.add(Ct);const Lt=new Et(.3,32,32),At=new R(Lt,y);At.scale.set(1,.72,1.5),At.position.set(-.4,-1.45,.17),p.add(At);const kt=new R(Lt,J);kt.scale.set(1,.72,1.5),kt.position.set(.4,-1.45,.17),p.add(kt);const Ut=new Et(.44,32,32),Vt=new R(Ut,y);Vt.position.set(-.15,-.45,-.4),p.add(Vt);const B=new R(Ut,J);B.position.set(.15,-.45,-.4),p.add(B);const gt=new Et(.18,32,32),nt=new R(gt,E);nt.position.set(0,-.35,-.8),p.add(nt),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(vt){const zt=new Ge("X",{font:vt,size:.2,depth:.05});new ti({color:0});const Yt=new R(zt,y);Yt.position.set(-.3,.99,.53),Yt.rotation.x=ce.degToRad(-5),Yt.rotation.y=ce.degToRad(-15),p.add(Yt);const Qt=new Ge("O",{font:vt,size:.2,depth:.05});new ti({color:0});const jt=new R(Qt,E);jt.position.set(.14,.99,.53),jt.rotation.y=ce.degToRad(12),jt.rotation.x=ce.degToRad(-5),p.add(jt)}),nt.renderOrder=1,p.rotation.x=.1;const xt=new R(ht,Z);xt.scale.set(.3,.3,.3),xt.position.set(.25,1.1,0),xt.rotation.y=Math.PI,xt.rotation.x=Math.PI,p.add(xt),p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,d(),He(()=>t.bodyPosition,vt=>{p.position.set(vt.x,vt.y,vt.z)}),He(()=>t.cameraPosition,vt=>{_.position.set(t.bodyPosition.x,1,vt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(_i(),vi(cn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",v1,[Gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Gt("div",x1,[Gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),M1=xi(y1,[["__scopeId","data-v-08c607ba"]]),w1={class:"pixel-controls"},S1={class:"side-buttons"},E1={class:"directional-buttons"},b1={class:"horizontal-buttons"},T1={class:"directional-buttons-woman"},A1={class:"horizontal-buttons-woman"},R1={class:"directional-buttons-kid"},P1={class:"horizontal-buttons-kid"},jo=.1,Ko=.05,Zo=.08,C1=zn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),r=Kt(!1),o=Kt(!1);const a=Gr(null),l=Kt(!1),c=Kt(!1),h=Kt(!1),u=Kt(!1),d=Gr(null),f=Gr(null),_=Kt(!1),x=Kt(!1),p=Kt(!1),m=Kt(!1),b=Kt(!1),w=Kt(!1),S=Kt(!1),O=Kt(!1),I=new ni({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const P=new ii,F=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3);F.position.z=5,si(()=>{if(e.value){let et=function(){const Pt=new $t,Le=new Et(.2,32,32),Fe=new ne({color:16767916}),ye=new R(Le,Fe);ye.position.set(0,1.5,0),Pt.add(ye);const sn=new Et(.21,32,32,0,Math.PI*2,0,Math.PI/2),Me=new ne({color:16711680}),qe=new R(sn,Me);qe.position.set(0,1.58,0),Pt.add(qe);const En=new ue(.25,.25,.6,32),ze=new ne({color:16767916}),wn=new R(En,ze);wn.position.set(0,1,0),Pt.add(wn);const Hn=new ue(.26,.26,.3,32),bn=new ne({color:255}),Tn=new R(Hn,bn);Tn.position.set(0,.65,0),Pt.add(Tn);const oi=new ue(.1,.1,.5,32),pn=new ne({color:16767916}),Mi=new R(oi,pn);Mi.position.set(-.15,.25,0),Pt.add(Mi);const qi=new R(oi,pn);qi.position.set(.15,.25,0),Pt.add(qi);const ds=new ue(.08,.08,.5,32),ai=new R(ds,pn);ai.position.set(-.35,1.3,0),ai.rotation.z=Math.PI/4,Pt.add(ai);const li=new R(ds,pn);return li.position.set(.35,1.3,0),li.rotation.z=-Math.PI/4,Pt.add(li),Pt.scale.set(.27,.27,.27),Pt.position.set(-.2,-.1,-.15),Pt},g=function(){const Pt=new $t,Le=new Et(.18,32,32),Fe=new ne({color:16767916}),ye=new R(Le,Fe);ye.position.set(0,1.2,.04),Pt.add(ye);const sn=new Et(.19,32,32,.4,Math.PI*2,0,Math.PI/2),Me=new ue(.18,.18,.4,32),qe=new ne({color:9127187}),En=new R(sn,qe);En.position.set(0,1.28,0),Pt.add(En);const ze=new R(Me,qe);ze.position.set(0,1.1,-.01),Pt.add(ze);const wn=new ue(.18,.2,.5,32),Hn=new ne({color:16767916}),bn=new R(wn,Hn);bn.position.set(0,.85,0),Pt.add(bn);const Tn=new Et(.08,32,32,0,Math.PI),oi=new ne({color:16738740}),pn=new R(Tn,oi);pn.position.set(-.09,.98,.15),Pt.add(pn);const Mi=new R(Tn,oi);Mi.position.set(.09,.98,.15),Pt.add(Mi);const qi=new ue(.22,.22,.25,32),ds=new ne({color:16738740}),ai=new R(qi,ds);ai.position.set(0,.6,0),Pt.add(ai);const li=new ue(.1,.1,.6,32),vo=new ne({color:16767916}),Oa=new R(li,vo);Oa.position.set(-.09,.5,.2),Oa.rotation.x=Math.PI/2,Pt.add(Oa);const Ba=new R(li,vo);Ba.position.set(.09,.5,.2),Ba.rotation.x=Math.PI/2,Pt.add(Ba);const Su=new ue(.08,.08,.35,32),za=new R(Su,vo);za.position.set(-.24,.95,.18),za.rotation.x=Math.PI/2,Pt.add(za);const Ga=new R(Su,vo);return Ga.position.set(.2,.85,0),Ga.rotation.z=Math.PI/20,Pt.add(Ga),Pt.scale.set(.27,.27,.27),Pt.position.set(.2,-.15,-.32),Pt},T=function(){const Pt=new $t,Le=new Et(.2,32,32),Fe=new ne({color:16767916}),ye=new R(Le,Fe);ye.position.set(0,1.5,0),Pt.add(ye);const sn=new Et(.21,32,32,0,Math.PI*2,0,Math.PI/2),Me=new ne({color:25600}),qe=new R(sn,Me);qe.position.set(0,1.58,0),Pt.add(qe);const En=new ue(.22,.22,.5,32),ze=new ne({color:16767916}),wn=new R(En,ze);wn.position.set(0,1,0),Pt.add(wn);const Hn=new ue(.23,.23,.3,32),bn=new ne({color:8388736}),Tn=new R(Hn,bn);Tn.position.set(0,.65,0),Pt.add(Tn);const oi=new ue(.1,.1,.5,32),pn=new ne({color:16767916}),Mi=new R(oi,pn);Mi.position.set(-.15,.3,-.25),Mi.rotation.x=Math.PI/6,Pt.add(Mi);const qi=new R(oi,pn);qi.position.set(.15,.3,.25),qi.rotation.x=-Math.PI/6,Pt.add(qi);const ds=new ue(.08,.08,.4,32),ai=new R(ds,pn);ai.position.set(-.28,1,-.2),ai.rotation.x=Math.PI/6,Pt.add(ai);const li=new R(ds,pn);return li.position.set(.28,1.3,.1),li.rotation.z=-Math.PI/8,Pt.add(li),Pt.scale.set(.15,.15,.15),Pt.position.set(.3,-.25,.25),Pt.rotation.x=Math.PI/12,Pt.rotation.y=Math.PI/2,Pt.rotation.z=-Math.PI/3,Pt},L=function(Pt){let Le=1,Fe=0;function ye(){requestAnimationFrame(ye),Pt.position.x+=.01*Le,Pt.position.x>=.35?(Le=-1,Pt.rotation.y=Math.PI):Pt.position.x<=-.35&&(Le=1,Pt.rotation.y=0),Fe+=.003,Pt.position.y=-.4+Math.sin(Fe)*.1,K.render(D,V)}ye()},N=function(){requestAnimationFrame(N),i.value&&(M.rotation.y+=.03),s.value&&(M.rotation.y-=.03),r.value&&(M.rotation.x-=.03),o.value&&(M.rotation.x+=.03),se.uniforms.u_time.value+=.25,it.rotation.y+=.04,K.render(D,V)};const D=new ii,V=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3),K=new ni({antialias:!0,alpha:!0});K.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(K.domElement);const M=new $t,v=new $t;D.add(v);const C=new Wi(16777215,2);D.add(C);const W=new Vi(16777215,4);W.position.set(5,5,5),D.add(W);const z=new ki(16777215,5,50);z.position.set(0,2,4),D.add(z);const H=new Hi,ht=H.load("/3d-bear-arts/assets/beach.jpg");ht.repeat.set(.8,1);const lt=H.load("/3d-bear-arts/assets/sun.jpg");ht.wrapS=ht.wrapT=ke,ht.repeat.set(.8,1),lt.wrapS=lt.wrapT=ke;const pt=new Dt({color:11592447,map:ht,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Tt=new Dt({color:11592447,map:ht,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:he,ior:1.33,depthWrite:!1,depthTest:!0}),dt=new Dt({color:11592447,map:ht,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),Mt=new Dt({color:11592447,map:ht,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:he}),Ct=new Dt({color:11592447,map:ht,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:he,ior:1.33}),Lt=new Dt({color:11592447,map:ht,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),At=new Et(1,32,32,0,Math.PI),kt=new R(At,Mt),Ut=new R(At,Tt);kt.scale.set(.85,.85,.8),Ut.scale.set(.85,.85,.8),kt.position.y=-.2,Ut.position.y=-.2,kt.rotation.y=Math.PI/2,Ut.rotation.y=Math.PI*1.5;const Vt=new Ae(1,32),B=new R(Vt,pt);B.scale.set(.85,.85,.8),B.position.set(0,-.2,0),B.rotation.y=Math.PI/2;const gt=new $t;gt.add(kt),gt.add(Ut),gt.add(B),M.add(gt);const nt=new Et(.6,32,32,0,Math.PI),tt=new R(nt,pt);tt.scale.set(1,.95,.95),tt.position.set(0,1,0),tt.rotation.y=Math.PI*1.5;const xt=new R(nt,dt);xt.scale.set(1,.95,.95),xt.position.set(0,1,0),xt.rotation.y=Math.PI/2;const vt=new Ae(.6,32),zt=new R(vt,pt);zt.position.set(0,1,0),zt.rotation.y=Math.PI/2,zt.scale.set(1,.95,.95);const Yt=new $t;Yt.add(tt),Yt.add(xt),Yt.add(zt),M.add(Yt);const Qt=new Et(.6,32,32,0,Math.PI*2,0,Math.PI/2),jt=new Dt({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ie=new R(Qt,jt);ie.position.set(0,-.2,0),ie.rotation.x=Math.PI,ie.scale.set(1.25,1.25,1.25),gt.add(ie);const St=new Dt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:he,transparent:!0,opacity:.7,depthWrite:!1}),ee=new R(Vt,St);ee.scale.set(.7,.7,.7),ee.position.set(0,-.3,0),ee.rotation.x=Math.PI/2,ee.renderOrder=1,gt.add(ee),M.add(gt);const se=new ei({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),te=new R(Vt,se);te.position.set(0,-.3,0),te.scale.set(.7,.7,.7),te.rotation.x=-Math.PI/2,te.renderOrder=1,gt.add(te);const de=new Et(.25,32,32),fe=new R(de,Ct);fe.position.set(-.45,1.35,-.1),M.add(fe);const ve=new R(de,dt);ve.position.set(.45,1.35,-.1),M.add(ve);const me=new Et(.25,32,32,Math.PI/2,Math.PI),Ie=new R(me,Ct);Ie.scale.set(1.1,.6,.8),Ie.position.set(0,.84,.5),Ie.rotation.y=Math.PI;const Re=new Et(.25,32,32,Math.PI/2,Math.PI),Je=new R(Re,dt);Je.scale.set(1.1,.6,.8),Je.position.set(0,.84,.5),Je.rotation.y=0;const Mn=new Ae(.25,32),nn=new R(Mn,Tt);nn.scale.set(.8,.6,.8),nn.position.set(0,.84,.5),nn.rotation.y=Math.PI/2;const on=new $t;on.add(Ie),on.add(Je),on.add(nn),M.add(on);const ri=new Dt({color:8374441,metalness:1,roughness:.25,envMap:lt,clearcoat:.7,clearcoatRoughness:.3}),A=new Dn;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},st=new On(A,Y),it=new R(st,ri);it.scale.set(.2,.2,.2),it.position.set(.25,1.2,0),it.rotation.y=Math.PI,it.rotation.x=Math.PI,M.add(it);const j=new Et(.35,32,32),Rt=new R(j,Tt);Rt.scale.set(.75,1.25,.65),Rt.position.set(-.7,-.15,.2),M.add(Rt);const Nt=new R(j,Mt);Nt.scale.set(.75,1.25,.65),Nt.position.set(.7,-.15,.2),M.add(Nt);const Ht=new ue(.2,.22,.6,32),Wt=new R(Ht,Ct);Wt.position.set(-.4,-1.05,0),M.add(Wt);const Zt=new R(Ht,dt);Zt.position.set(.4,-1.05,0),M.add(Zt);const Jt=new Et(.3,32,32),Xt=new R(Jt,Ct);Xt.scale.set(1,.72,1.5),Xt.position.set(-.4,-1.45,.17),M.add(Xt);const pe=new R(Jt,dt);pe.scale.set(1,.72,1.5),pe.position.set(.4,-1.45,.17),M.add(pe);const xe=new Et(.44,32,32),be=new R(xe,Ct);be.position.set(-.15,-.45,-.4),M.add(be);const je=new R(xe,Ct);je.position.set(.15,-.45,-.4),M.add(je);const ge=new Et(.18,32,32),qt=new R(ge,Ct);qt.position.set(0,-.35,-.8),M.add(qt),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Pt){const Le=new Ge("X",{font:Pt,size:.2,depth:.05}),Fe=new R(Le,Lt);Fe.position.set(-.3,.99,.53),Fe.rotation.x=ce.degToRad(-5),Fe.rotation.y=ce.degToRad(-15),M.add(Fe);const ye=new Ge("O",{font:Pt,size:.2,depth:.05}),sn=new R(ye,Lt);sn.position.set(.14,.99,.53),sn.rotation.y=ce.degToRad(12),sn.rotation.x=ce.degToRad(-5),M.add(sn)}),a.value=et(),M.add(a.value),D.add(M),d.value=g(),M.add(d.value),f.value=T(),M.add(f.value),L(f.value),M.scale.set(1.4,1.4,1.4),D.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),V.position.set(t.bodyPosition.x,1,t.cameraPosition),V.lookAt(t.bodyPosition.x,0,0),V.position.z=4,M.rotation.x=.1,N(),He(()=>t.bodyPosition,Pt=>{M.position.set(Pt.x,Pt.y,Pt.z)}),He(()=>t.cameraPosition,Pt=>{V.position.set(t.bodyPosition.x,1,Pt),V.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{V.aspect=window.innerWidth/window.innerHeight,V.updateProjectionMatrix(),K.setSize(window.innerWidth,window.innerHeight)})}});function q(){s.value=!0}function y(){i.value=!0}function E(){r.value=!0}function Z(){o.value=!0}function k(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}const J=()=>{l.value=!0,console.log(l.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},at=()=>{c.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},G=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},Q=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},X=()=>{l.value=!1,c.value=!1,h.value=!1,u.value=!1},mt=()=>{_.value=!0,d.value&&(d.value.rotation.y=Math.PI)},yt=()=>{x.value=!0,d.value&&(d.value.rotation.y=0)},_t=()=>{p.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},It=()=>{m.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},Bt=()=>{_.value=!1,x.value=!1,p.value=!1,m.value=!1},ot=()=>{requestAnimationFrame(ot),a.value&&(l.value&&(a.value.position.z-=jo),c.value&&(a.value.position.z+=jo),h.value&&(a.value.position.x-=jo),u.value&&(a.value.position.x+=jo)),I.render(P,F)},ft=()=>{requestAnimationFrame(ft),d.value&&(_.value&&(d.value.position.z-=Ko),x.value&&(d.value.position.z+=Ko),p.value&&(d.value.position.x-=Ko),m.value&&(d.value.position.x+=Ko))};ft(),ot();const wt=()=>{b.value=!0,f.value&&(f.value.rotation.y=0)},U=()=>{w.value=!0,f.value&&(f.value.rotation.y=Math.PI)},ct=()=>{S.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},rt=()=>{O.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},ut=()=>{b.value=!1,w.value=!1,S.value=!1,O.value=!1},bt=()=>{requestAnimationFrame(bt),f.value&&(b.value&&(f.value.position.z-=Zo),w.value&&(f.value.position.z+=Zo),S.value&&(f.value.position.x-=Zo),O.value&&(f.value.position.x+=Zo))};return bt(),(et,g)=>(_i(),vi(cn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",w1,[Gt("button",{class:"pixel-btn up",onMousedown:E,onMouseup:k},"UP",32),Gt("div",S1,[Gt("button",{class:"pixel-btn left",onMousedown:q,onMouseup:k},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:y,onMouseup:k},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:Z,onMouseup:k},"DOWN",32)]),Gt("div",E1,[Gt("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:J,onMouseup:X},"UP",32),Gt("div",b1,[Gt("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:G,onMouseup:X},"LEFT",32),Gt("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:Q,onMouseup:X},"RIGHT",32)]),Gt("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:at,onMouseup:X},"DOWN",32)]),Gt("div",T1,[Gt("button",{class:"directional-btn-woman north-btn",onMousedown:mt,onMouseup:Bt},"UP",32),Gt("div",A1,[Gt("button",{class:"directional-btn-woman west-btn",onMousedown:_t,onMouseup:Bt},"LEFT",32),Gt("button",{class:"directional-btn-woman east-btn",onMousedown:It,onMouseup:Bt},"RIGHT",32)]),Gt("button",{class:"directional-btn-woman south-btn",onMousedown:yt,onMouseup:Bt},"DOWN",32)]),Gt("div",R1,[Gt("button",{class:"directional-btn-kid north-btn",onMousedown:wt,onMouseup:ut},"UP",32),Gt("div",P1,[Gt("button",{class:"directional-btn-kid west-btn",onMousedown:ct,onMouseup:ut},"LEFT",32),Gt("button",{class:"directional-btn-kid east-btn",onMousedown:rt,onMouseup:ut},"RIGHT",32)]),Gt("button",{class:"directional-btn-kid south-btn",onMousedown:U,onMouseup:ut},"DOWN",32)])],64))}}),I1=xi(C1,[["__scopeId","data-v-354294c6"]]),L1={class:"pixel-controls"},D1={class:"side-buttons"},U1=zn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),r=Kt(!1),o=Kt(!1);si(()=>{if(e.value){let d=function(fe,ve){const me=new $t,Ie=new Et(1,32,32),Re=new R(Ie,at);Re.scale.set(1,.8,1),me.add(Re);const Je=new ue(.1,.1,.5,16),Mn=new ne({color:9127187}),nn=new R(Je,Mn);return nn.position.set(0,.9,0),me.add(nn),me},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),r.value&&(m.rotation.x-=.03),o.value&&(m.rotation.x+=.03),Vt.rotation.z-=.04,B.rotation.z+=.04,gt.rotation.z+=.03,nt.rotation.z+=.03,v.rotation.y+=.04,de+=se,m.position.y=t.bodyPosition.y+Math.sin(de)*te;const fe=St.getElapsedTime();ie.forEach((ve,me)=>{const Ie=.1+Math.sin(fe*3+ee[me])*.1;ve.scale.set(Ie,Ie,Ie)}),p.render(_,x)};const _=new ii,x=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3),p=new ni({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new $t,b=new $t;_.add(b);const w=new Wi(16777215,2);_.add(w);const S=new Vi(16777215,4);S.position.set(5,5,5),_.add(S);const O=new ki(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new Hi,P=I.load("/3d-bear-arts/assets/pumpkin.jpg");P.wrapS=P.wrapT=ke,P.repeat.set(.8,.85);const F=I.load("/3d-bear-arts/assets/pumpkin.jpg");F.wrapS=F.wrapT=ke,F.repeat.set(1,1);const q=I.load("/3d-bear-arts/assets/pumpkin.jpg");q.wrapS=F.wrapT=ke,q.repeat.set(2,.8);const y=new Dt({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new $t,Z=new Dt({color:16747520,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Dt({color:16747520,map:F,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new Dt({color:16747520,map:q,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:he}),at=new Dt({color:16747520,map:q,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Dt({color:16766720,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Dt({color:9109504,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Dt({color:4915330,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const G=new Et(1,32,32,0,Math.PI),Q=new R(G,J),X=new R(G,Z);Q.scale.set(.85,.85,.8),X.scale.set(.85,.85,.8),Q.position.y=-.2,X.position.y=-.2,Q.rotation.y=Math.PI/2,X.rotation.y=Math.PI*1.5;const mt=new Ae(1,32),yt=new R(mt,k);yt.scale.set(.85,.85,.8),yt.position.set(0,-.2,0),yt.rotation.y=Math.PI/2;const _t=new $t;_t.add(Q),_t.add(X),_t.add(yt),m.add(_t);const It=new Et(.6,32,32,0,Math.PI),Bt=new R(It,Z);Bt.scale.set(1,.95,.95),Bt.position.set(0,1,0),Bt.rotation.y=Math.PI*1.5;const ot=new R(It,J);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI/2;const ft=new Ae(.6,32),wt=new R(ft,k);wt.position.set(0,1,0),wt.rotation.y=Math.PI/2,wt.scale.set(1,.95,.95);const U=new $t;U.add(Bt),U.add(ot),U.add(wt),m.add(U);const ct=new Et(.25,32,32),rt=new R(ct,at);rt.position.set(-.45,1.35,-.1),m.add(rt);const ut=new R(ct,J);ut.position.set(.45,1.35,-.1),m.add(ut);const bt=new Et(.25,32,32,Math.PI/2,Math.PI),et=new R(bt,Z);et.scale.set(1.1,.6,.8),et.position.set(0,.84,.5),et.rotation.y=Math.PI;const g=new Et(.25,32,32,Math.PI/2,Math.PI),T=new R(g,J);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const L=new Ae(.25,32),N=new R(L,Z);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const D=new $t;D.add(et),D.add(T),D.add(N),m.add(D);const V=new Dn;V.moveTo(0,0),V.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),V.bezierCurveTo(-.6,.3,0,.6,0,1),V.bezierCurveTo(0,.6,.6,.3,.6,0),V.bezierCurveTo(.6,-.3,0,-.3,0,0);const K={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},M=new On(V,K),v=new R(M,y);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new Et(.35,32,32),W=new R(C,k);W.scale.set(.75,1.25,.65),W.position.set(-.7,-.15,.2),m.add(W);const z=new R(C,J);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const H=new ue(.2,.22,.6,32),ht=new R(H,k);ht.position.set(-.4,-1.05,0),m.add(ht);const lt=new R(H,J);lt.position.set(.4,-1.05,0),m.add(lt);const pt=new Et(.3,32,32),Tt=new R(pt,at);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),m.add(Tt);const dt=new R(pt,J);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),m.add(dt);const Mt=new Et(.44,32,32),Ct=new R(Mt,Z);Ct.position.set(-.15,-.45,-.4),m.add(Ct);const Lt=new R(Mt,J);Lt.position.set(.15,-.45,-.4),m.add(Lt);const At=new Et(.18,32,32),kt=new R(At,at);kt.position.set(0,-.35,-.8),m.add(kt),kt.renderOrder=1,new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(fe){const ve=new Ge("X",{font:fe,size:.2,depth:.05}),me=new R(ve,k);me.position.set(-.3,.99,.53),me.rotation.x=ce.degToRad(-5),me.rotation.y=ce.degToRad(-15),m.add(me);const Ie=new Ge("O",{font:fe,size:.2,depth:.05}),Re=new R(Ie,k);Re.position.set(.14,.99,.53),Re.rotation.y=ce.degToRad(12),Re.rotation.x=ce.degToRad(-5),m.add(Re)}),m.add(E);const Vt=d(),B=d(),gt=d(),nt=d();Vt.position.set(.35,-.35,-.3),B.position.set(.25,-.45,.3),gt.position.set(.3,.1,-.2),nt.position.set(.25,.18,.4),Vt.scale.set(.3,.3,.3),B.scale.set(.28,.28,.28),gt.scale.set(.25,.25,.25),nt.scale.set(.23,.23,.23),B.rotation.z=Math.PI/4,gt.rotation.z=-Math.PI/4,nt.rotation.y=-Math.PI/2,m.add(Vt),m.add(B),m.add(gt),m.add(nt);const tt=new Dn;tt.moveTo(-.5,0),tt.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),tt.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),tt.bezierCurveTo(-.05,.6,.05,.6,.15,.4),tt.bezierCurveTo(.25,.5,.25,.85,.5,.8),tt.bezierCurveTo(1,.6,.75,.25,.5,0),tt.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const xt={depth:.3,bevelEnabled:!1},vt=new On(tt,xt),zt=new ti({color:0}),Yt=new R(vt,zt);Yt.scale.set(.3,.3,.6),Yt.rotation.x=0,Yt.rotation.z=0,Yt.position.set(.26,.35,.25),m.add(Yt);const Qt=new R(vt,zt);Qt.scale.set(.5,.5,.5),Qt.position.set(.4,-.1,.54),m.add(Qt);const jt=new R(vt,zt);jt.scale.set(.5,.5,.5),jt.position.set(.32,-.35,.65),m.add(jt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;const ie=[Yt,Qt,jt],St=new wp,ee=[0,Math.PI/2,Math.PI,0,Math.PI/3];let se=.05,te=.25,de=0;f(),He(()=>t.bodyPosition,fe=>{m.position.set(fe.x,fe.y,fe.z)}),He(()=>t.cameraPosition,fe=>{x.position.set(t.bodyPosition.x,1,fe),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(_i(),vi(cn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",L1,[Gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Gt("div",D1,[Gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),N1=xi(U1,[["__scopeId","data-v-5eff72b3"]]),F1={class:"pixel-controls"},O1={class:"side-buttons"},B1=zn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),r=Kt(!1),o=Kt(!1);si(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),K.rotation.y+=.03,zt+=nt,Yt+=tt,p.position.y=t.bodyPosition.y+Math.sin(zt)*vt,K.position.y=t.bodyPosition.y+Math.sin(Yt)*xt,Vt.uniforms.u_time.value+=.25,x.render(f,_)};const f=new ii,_=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3),x=new ni({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new $t,m=new $t;f.add(m);const b=new Wi(16777215,2);f.add(b);const w=new Vi(16777215,4);w.position.set(5,5,5),f.add(w);const S=new ki(16777215,5,50);S.position.set(0,2,4),f.add(S);const O=new Hi,I=O.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=ke,I.repeat.set(2,2);const P=O.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=ke,P.repeat.set(1,1);const F=new Dt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:he}),q=new Dt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),y=new Dt({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new Dt({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:he}),Z=new Dt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:he}),k=new Dt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:he}),J=new Et(1,32,32,0,Math.PI),at=new R(J,F),G=new R(J,Z);at.scale.set(.85,.85,.8),G.scale.set(.85,.85,.8),at.position.y=-.2,G.position.y=-.2,at.rotation.y=Math.PI/2,G.rotation.y=Math.PI*1.5;const Q=new Ae(1,32),X=new R(Q,Z);X.scale.set(.85,.85,.8),X.position.set(0,-.2,0),X.rotation.y=Math.PI/2;const mt=new $t;mt.add(at),mt.add(G),mt.add(X),p.add(mt);const yt=new Et(.6,32,32,0,Math.PI),_t=new R(yt,k);_t.scale.set(1,.95,.95),_t.position.set(0,1,0),_t.rotation.y=Math.PI*1.5;const It=new R(yt,q);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI/2;const Bt=new Ae(.6,32),ot=new R(Bt,Z);ot.position.set(0,1,0),ot.rotation.y=Math.PI/2,ot.scale.set(1,.95,.95);const ft=new $t;ft.add(_t),ft.add(It),ft.add(ot),p.add(ft);const wt=new Et(.25,32,32),U=new R(wt,k);U.position.set(-.45,1.35,-.1),p.add(U);const ct=new R(wt,q);ct.position.set(.45,1.35,-.1),p.add(ct);const rt=new Et(.25,32,32,Math.PI/2,Math.PI),ut=new R(rt,k);ut.scale.set(1.1,.6,.8),ut.position.set(0,.84,.5),ut.rotation.y=Math.PI;const bt=new Et(.25,32,32,Math.PI/2,Math.PI),et=new R(bt,q);et.scale.set(1.1,.6,.8),et.position.set(0,.84,.5),et.rotation.y=0;const g=new Ae(.25,32),T=new R(g,E);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const L=new $t;L.add(ut),L.add(et),L.add(T),p.add(L);const N=new Dn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},V=new On(N,D),K=new R(V,y);K.scale.set(.35,.35,.35),K.position.set(0,-.05,0),K.rotation.y=Math.PI,K.rotation.x=Math.PI,p.add(K);const M=new Et(.35,32,32),v=new R(M,Z);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),p.add(v);const C=new R(M,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),p.add(C);const W=new ue(.2,.22,.6,32),z=new R(W,Z);z.position.set(-.4,-1.05,0),p.add(z);const H=new R(W,E);H.position.set(.4,-1.05,0),p.add(H);const ht=new Et(.3,32,32),lt=new R(ht,Z);lt.scale.set(1,.72,1.5),lt.position.set(-.4,-1.45,.17),p.add(lt);const pt=new R(ht,E);pt.scale.set(1,.72,1.5),pt.position.set(.4,-1.45,.17),p.add(pt);const Tt=new Et(.44,32,32),dt=new R(Tt,E);dt.position.set(-.15,-.45,-.4),p.add(dt);const Mt=new R(Tt,E);Mt.position.set(.15,-.45,-.4),p.add(Mt);const Ct=new Et(.18,32,32),Lt=new R(Ct,Z);Lt.position.set(0,-.35,-.8),p.add(Lt);const At=new Et(.6,32,32,0,Math.PI*2,0,Math.PI/2),kt=new Dt({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Ut=new R(At,kt);Ut.position.set(0,-.2,0),Ut.rotation.x=Math.PI,Ut.scale.set(1.25,1.25,1.25),mt.add(Ut);const Vt=new ei({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),B=new R(Q,Vt);B.position.set(0,-.26,0),B.scale.set(.7,.7,.7),B.rotation.x=-Math.PI/2,B.renderOrder=1,mt.add(B),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Qt){const jt=new Ge("X",{font:Qt,size:.2,depth:.05}),ie=new R(jt,Z);ie.position.set(-.3,.99,.53),ie.rotation.x=ce.degToRad(-5),ie.rotation.y=ce.degToRad(-15),p.add(ie);const St=new Ge("O",{font:Qt,size:.2,depth:.05}),ee=new R(St,Z);ee.position.set(.14,.99,.53),ee.rotation.y=ce.degToRad(12),ee.rotation.x=ce.degToRad(-5),p.add(ee)}),Lt.renderOrder=1,p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let nt=.05,tt=.06,xt=.2,vt=.25,zt=0,Yt=0;d(),He(()=>t.bodyPosition,Qt=>{p.position.set(Qt.x,Qt.y,Qt.z)}),He(()=>t.cameraPosition,Qt=>{_.position.set(t.bodyPosition.x,1,Qt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(_i(),vi(cn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",F1,[Gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Gt("div",O1,[Gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),z1=xi(B1,[["__scopeId","data-v-eb44448e"]]),G1={class:"pixel-controls"},H1={class:"side-buttons"},k1=zn({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Kt(null);let i=Kt(!1),s=Kt(!1),r=Kt(!1),o=Kt(!1);const a=Gr(null),l=new ni({antialias:!0});l.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(l.domElement),new ii;const c=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.z=5,si(()=>{if(e.value){let x=function(){const St=new $t,ee=new hr(.12,.05,16,100),se=new ne({color:16777215}),te=new R(ee,se);te.position.set(0,1.65,0),te.rotation.x=Math.PI/2,St.add(te);const de=new er(.15,.3,32),fe=new ne({color:16711680}),ve=new R(de,fe);ve.position.set(0,1.8,0),St.add(ve);const me=new Et(.05,32,32),Ie=new ne({color:16777215}),Re=new R(me,Ie);return Re.position.set(0,1.93,0),St.add(Re),St.position.set(0,-.1,0),St},p=function(){const St=new $t,ee=new Et(.15,32,32),se=new ne({color:16764057}),te=new R(ee,se);te.position.set(0,.4,0),St.add(te);const de=new er(.08,.15,32),fe=new ne({color:16764057}),ve=new R(de,fe);ve.position.set(-.1,.55,0),ve.rotation.z=Math.PI/6,St.add(ve);const me=new R(de,fe);me.position.set(.1,.55,0),me.rotation.z=-Math.PI/6,St.add(me);const Ie=new ue(.12,.15,.3,32),Re=new ne({color:16764057}),Je=new R(Ie,Re);Je.position.set(0,.2,0),St.add(Je);const Mn=new ue(.05,.05,.2,32),nn=new ne({color:16764057}),on=new R(Mn,nn);on.position.set(-.07,-.05,.05),St.add(on);const ri=new R(Mn,nn);ri.position.set(.07,-.05,.05),St.add(ri);const A=new ue(.04,.04,.2,32),Y=new ne({color:16764057}),st=new R(A,Q);st.position.set(-.15,.25,0),st.rotation.z=Math.PI/4,St.add(st);const it=new R(A,Y);it.position.set(.15,.25,0),it.rotation.z=-Math.PI/4,St.add(it);const j=new ue(.03,.03,.25,32),Rt=new ne({color:16764057}),Nt=new R(j,Rt);return Nt.position.set(0,.1,-.2),Nt.rotation.x=Math.PI/4,St.add(Nt),St.scale.set(.75,.75,.75),St.position.set(.2,0,.2),St},m=function(){const St=new $t,ee=new Et(.2,32,32),se=new ne({color:16764057}),te=new R(ee,se);te.position.set(0,1,0),St.add(te);const de=new ne({color:16777215}),fe=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Tn of fe){const oi=new Et(Tn.size,16,16),pn=new R(oi,de);pn.position.set(Tn.x,Tn.y-.06,Tn.z-.01),St.add(pn)}const ve=new ne({color:16777215}),me=new ue(.05,.06,.1,32),Ie=new R(me,ve);Ie.position.set(-.06,.93,.18),Ie.rotation.z=Math.PI/4;const Re=new ue(.05,.06,.1,32),Je=new R(Re,ve);Je.position.set(.06,.93,.18),Je.rotation.z=-Math.PI/4;const Mn=new hr(.12,.05,16,100),nn=new ne({color:16777215}),on=new R(Mn,nn);on.position.set(0,1.15,0),on.rotation.x=Math.PI/2,St.add(on);const ri=new er(.15,.3,32),A=new ne({color:16711680}),Y=new R(ri,A);Y.position.set(0,1.3,0),St.add(Y);const st=new Et(.05,32,32),it=new ne({color:16777215}),j=new R(st,it);j.position.set(0,1.43,0),St.add(j);const Rt=new ue(.2,.25,.6,32),Nt=new ne({color:16711680}),Ht=new R(Rt,Nt);Ht.position.set(0,.5,0),St.add(Ht);const Wt=new ue(.25,.25,.1,32),Zt=new ne({color:0}),Jt=new R(Wt,Zt);Jt.position.set(0,.4,.005),St.add(Jt);const Xt=new ue(.06,.06,.3,32),pe=new ne({color:16711680}),xe=new R(Xt,pe);xe.position.set(-.25,.75,0),xe.rotation.z=Math.PI/4,St.add(xe);const be=new R(Xt,pe);be.position.set(.25,.75,0),be.rotation.z=-Math.PI/4,St.add(be);const je=new Et(.07,32,32),ge=new ne({color:16777215}),qt=new R(je,ge);qt.position.set(-.35,.85,0),St.add(qt);const Ve=new R(je,ge);Ve.position.set(.35,.85,0),St.add(Ve);const Pt=new ue(.1,.1,.15,32),Le=new ne({color:16711680}),Fe=new ue(.08,.08,.4,32),ye=new ne({color:0}),sn=new R(Fe,ye);sn.position.set(-.1,.1,0),St.add(sn);const Me=new R(Pt,Le);Me.position.set(-.1,-.05,0),St.add(Me);const qe=new R(Fe,ye);qe.position.set(.1,.1,0),St.add(qe);const En=new R(Pt,Le);En.position.set(.1,-.05,0),St.add(En);const ze=new Et(.12,32,32),wn=new ne({color:16711680}),Hn=new R(ze,wn);Hn.scale.set(1,.7,1.5),Hn.position.set(-.1,-.12,.12),St.add(Hn);const bn=new R(ze,wn);return bn.scale.set(1,.7,1.5),bn.position.set(.1,-.1,.12),St.add(bn),St.scale.set(.25,.25,.25),St.position.set(.2,.5,-0),St},b=function(){let St=0;function ee(){requestAnimationFrame(ee),St+=.08,jt.position.y=.45+Math.sin(St)*.45,F.render(I,P)}ee()},w=function(St){let ee=1,se=0;function te(){requestAnimationFrame(te),St.position.x+=.01*ee,St.position.x>=.5?(ee=-1,St.rotation.y=Math.PI):St.position.x<=-.5&&(ee=1,St.rotation.y=0),se+=.2,St.position.y=-.2+Math.sin(se)*.01,St.position.z=.5,F.render(I,P)}te()},S=function(){const St=new $t,ee=new Kn(.7,.8,.7),se=new ne({color:9127187}),te=new R(ee,se);te.position.set(0,.4,0),St.add(te);const de=new er(.55,.25,4),fe=new ne({color:16777215}),ve=new R(de,fe);ve.position.set(0,.9,0),ve.rotation.y=Math.PI/4,St.add(ve);const me=new Kn(.25,.35,.05),Ie=new ne({color:6636321}),Re=new R(me,Ie);Re.position.set(0,.2,.36),St.add(Re);const Je=new Kn(.15,.15,.05),Mn=new ne({color:8900331}),nn=new R(Je,Mn);nn.position.set(-.2,.5,.38),St.add(nn);const on=new R(Je,Mn);on.position.set(.2,.5,.38),St.add(on);const ri=new Kn(.2,.4,.2),A=new ne({color:8421504}),Y=new R(ri,A);Y.position.set(0,.95,0),St.add(Y);const st=new hr(.07,.04,32,100),it=new ne({color:2263842}),j=new R(st,it);return j.position.set(0,.45,.38),St.add(j),St.position.set(.2,-.2,0),St.scale.set(.6,.6,.6),St},O=function(){requestAnimationFrame(O),i.value&&(q.rotation.y+=.03),s.value&&(q.rotation.y-=.03),r.value&&(q.rotation.x-=.03),o.value&&(q.rotation.x+=.03),F.render(I,P)};const I=new ii,P=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3),F=new ni({antialias:!0,alpha:!0});F.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(F.domElement);const q=new $t,y=new $t;I.add(y);const E=new Wi(16777215,2);I.add(E);const Z=new Vi(16777215,4);Z.position.set(5,5,5),I.add(Z);const k=new ki(16777215,5,50);k.position.set(0,2,4),I.add(k);const J=new Hi,at=J.load("/3d-bear-arts/assets/house.jpg");at.wrapS=at.wrapT=ke,at.repeat.set(1,1),J.load("/3d-bear-arts/assets/house3.jpg"),new Dt({color:16777215,metalness:0,roughness:.05,transparent:!0,opacity:.5,clearcoat:1,clearcoatRoughness:.2,transmission:.6,ior:1.5,envMapIntensity:1,depthTest:!0});const G=new Dt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.4,transmission:.95,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:he}),Q=new Dt({color:16777215,metalness:.3,map:at,roughness:.05,transparent:!0,opacity:.7,transmission:.95,ior:1.33,thickness:.3,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:he}),X=new Dt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:1,transmission:.95,ior:1.33,thickness:.3,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:he}),mt=new QS().load(["/3d-bear-arts/assets/house.jpg","/3d-bear-arts/assets/house.jpg","/3d-bear-arts/assets/house.jpg","/3d-bear-arts/assets/house.jpg","/3d-bear-arts/assets/house.jpg","/3d-bear-arts/assets/house.jpg"]);I.environment=mt,new Dt({color:16777215,metalness:1,roughness:.1,envMap:mt,envMapIntensity:1.5,ior:1.25,depthWrite:!0,side:he,transparent:!0,opacity:.7});const yt=new Dt({color:16777215,metalness:.05,map:at,roughness:.2,transparent:!0,opacity:1,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:he}),_t=new Dt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),It=new Et(1,32,32,0,Math.PI),Bt=new R(It,G),ot=new R(It,Q);Bt.scale.set(.85,.85,.8),ot.scale.set(.85,.85,.8),Bt.position.y=-.2,ot.position.y=-.2,Bt.rotation.y=Math.PI/2,ot.rotation.y=Math.PI*1.5;const ft=new Ae(1,32),wt=new R(ft,yt);wt.scale.set(.85,.85,.8),wt.position.set(0,-.2,0),wt.rotation.y=Math.PI/2;const U=new $t;U.add(Bt),U.add(ot),U.add(wt),q.add(U);const ct=new Et(.6,32,32,0,Math.PI),rt=new R(ct,Q);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI*1.5;const ut=new R(ct,G);ut.scale.set(1,.95,.95),ut.position.set(0,1,0),ut.rotation.y=Math.PI/2;const bt=new Ae(.6,32),et=new R(bt,yt);et.position.set(0,1,0),et.rotation.y=Math.PI/2,et.scale.set(1,.95,.95);const g=new $t;g.add(rt),g.add(ut),g.add(et),q.add(g);const T=new Et(.6,32,32,0,Math.PI*2,0,Math.PI/2),L=new Dt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7}),N=new R(T,L);N.position.set(0,-.2,0),N.rotation.x=Math.PI,N.scale.set(1.25,1.25,1.25),U.add(N);const D=new Dt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:he,transparent:!1}),V=new R(ft,D);V.scale.set(.7,.7,.7),V.position.set(0,-.3,0),V.rotation.x=Math.PI/2,V.renderOrder=1,U.add(V),q.add(U);const K=new ei({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
    `}),M=new R(ft,K);M.position.set(0,-.2,0),M.scale.set(.7,.7,.7),M.rotation.x=-Math.PI/2,M.renderOrder=2,U.add(M);const v=new Et(.25,32,32),C=new R(v,Q);C.position.set(-.45,1.35,-.1),q.add(C);const W=new R(v,G);W.position.set(.45,1.35,-.1),q.add(W);const z=new Et(.25,32,32,Math.PI/2,Math.PI),H=new R(z,Q);H.scale.set(1.1,.6,.8),H.position.set(0,.84,.5),H.rotation.y=Math.PI;const ht=new Et(.25,32,32,Math.PI/2,Math.PI),lt=new R(ht,G);lt.scale.set(1.1,.6,.8),lt.position.set(0,.84,.5),lt.rotation.y=0;const pt=new Ae(.25,32),Tt=new R(pt,yt);Tt.scale.set(.8,.6,.8),Tt.position.set(0,.84,.5),Tt.rotation.y=Math.PI/2;const dt=new $t;dt.add(H),dt.add(lt),dt.add(Tt),q.add(dt),new Dt({color:8374441,metalness:1,roughness:.25,clearcoat:.7,clearcoatRoughness:.3});const Mt=new Et(.35,32,32),Ct=new R(Mt,X);Ct.scale.set(.75,1.25,.65),Ct.position.set(-.7,-.15,.2),q.add(Ct);const Lt=new R(Mt,G);Lt.scale.set(.75,1.25,.65),Lt.position.set(.7,-.15,.2),q.add(Lt);const At=new ue(.2,.22,.6,32),kt=new R(At,X);kt.position.set(-.4,-1.05,0),q.add(kt);const Ut=new R(At,G);Ut.position.set(.4,-1.05,0),q.add(Ut);const Vt=new Et(.3,32,32),B=new R(Vt,X);B.scale.set(1,.72,1.5),B.position.set(-.4,-1.45,.17),q.add(B);const gt=new R(Vt,G);gt.scale.set(1,.72,1.5),gt.position.set(.4,-1.45,.17),q.add(gt);const nt=new Et(.44,32,32),tt=new R(nt,Q);tt.position.set(-.15,-.45,-.4),q.add(tt);const xt=new R(nt,_t);xt.position.set(.15,-.45,-.4),q.add(xt);const vt=new Et(.18,32,32),zt=new R(vt,_t);zt.position.set(0,-.35,-.8),q.add(zt),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(St){const ee=new Ge("X",{font:St,size:.2,depth:.05}),se=new R(ee,G);se.position.set(-.3,.99,.53),se.rotation.x=ce.degToRad(-5),se.rotation.y=ce.degToRad(-15),q.add(se);const te=new Ge("O",{font:St,size:.2,depth:.05}),de=new R(te,G);de.position.set(.14,.99,.53),de.rotation.y=ce.degToRad(12),de.rotation.x=ce.degToRad(-5),q.add(de)});const Qt=x();q.add(Qt),p();const jt=m();q.add(jt),b(),a.value=m(),q.add(a.value),w(a.value);const ie=S();q.add(ie),q.scale.set(1.4,1.4,1.4),I.add(q),q.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),P.position.set(t.bodyPosition.x,1,t.cameraPosition),P.lookAt(t.bodyPosition.x,0,0),P.position.z=4,q.rotation.x=.1,O(),He(()=>t.bodyPosition,St=>{q.position.set(St.x,St.y,St.z)}),He(()=>t.cameraPosition,St=>{P.position.set(t.bodyPosition.x,1,St),P.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{P.aspect=window.innerWidth/window.innerHeight,P.updateProjectionMatrix(),F.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){r.value=!0}function f(){o.value=!0}function _(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(x,p)=>(_i(),vi(cn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",G1,[Gt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),Gt("div",H1,[Gt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:_},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:_},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:f,onMouseup:_},"DOWN",32)])],64))}}),V1=xi(k1,[["__scopeId","data-v-f891901a"]]),W1=[{path:"/3d-bear-arts/leather",name:"Leather",component:a1},{path:"/3d-bear-arts/pop-art",name:"Pop",component:c1},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:f1},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:_1},{path:"/3d-bear-arts/water",name:"Water Bear",component:M1},{path:"/3d-bear-arts/",name:"Water",component:I1},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:N1},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:z1},{path:"/3d-bear-arts/aquar",name:"Aquar",component:V1}],X1=Jg({history:Rg(),routes:W1}),Sp=q0(Z0);Sp.use(X1);Sp.mount("#app");
