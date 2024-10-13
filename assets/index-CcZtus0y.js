(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function sc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},Rr=[],On=()=>{},gp=()=>!1,Bo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),oc=n=>n.startsWith("onUpdate:"),Dt=Object.assign,ac=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},_p=Object.prototype.hasOwnProperty,et=(n,e)=>_p.call(n,e),qe=Array.isArray,ss=n=>zo(n)==="[object Map]",vp=n=>zo(n)==="[object Set]",Xe=n=>typeof n=="function",Pt=n=>typeof n=="string",Wr=n=>typeof n=="symbol",yt=n=>n!==null&&typeof n=="object",ef=n=>(yt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),xp=Object.prototype.toString,zo=n=>xp.call(n),yp=n=>zo(n).slice(8,-1),Mp=n=>zo(n)==="[object Object]",lc=n=>Pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,os=sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Sp=/-(\w)/g,dn=Ho(n=>n.replace(Sp,(e,t)=>t?t.toUpperCase():"")),Ep=/\B([A-Z])/g,tr=Ho(n=>n.replace(Ep,"-$1").toLowerCase()),Go=Ho(n=>n.charAt(0).toUpperCase()+n.slice(1)),sa=Ho(n=>n?`on${Go(n)}`:""),Ci=(n,e)=>!Object.is(n,e),oa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},tf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},wp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let eu;const nf=()=>eu||(eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cc(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Pt(i)?Rp(i):cc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Pt(n)||yt(n))return n}const bp=/;(?![^(]*\))/g,Tp=/:([^]+)/,Ap=/\/\*[^]*?\*\//g;function Rp(n){const e={};return n.replace(Ap,"").split(bp).forEach(t=>{if(t){const i=t.split(Tp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function oi(n){let e="";if(Pt(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=oi(n[t]);i&&(e+=i+" ")}else if(yt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Cp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pp=sc(Cp);function rf(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rn;class Lp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rn,!e&&rn&&(this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=rn;try{return rn=this,e()}finally{rn=t}}}on(){rn=this}off(){rn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ip(){return rn}let lt;const aa=new WeakSet;class sf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rn&&rn.active&&rn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,aa.has(this)&&(aa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||af(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tu(this),lf(this);const e=lt,t=An;lt=this,An=!0;try{return this.fn()}finally{cf(this),lt=e,An=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fc(e);this.deps=this.depsTail=void 0,tu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?aa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tl(this)&&this.run()}get dirty(){return tl(this)}}let of=0,br;function af(n){n.flags|=8,n.next=br,br=n}function uc(){of++}function hc(){if(--of>0)return;let n;for(;br;){let e=br,t;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=br,br=void 0;e;){if(t=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function lf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),fc(i),Dp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function tl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(uf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function uf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===_s))return;n.globalVersion=_s;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!tl(n)){n.flags&=-3;return}const t=lt,i=An;lt=n,An=!0;try{lf(n);const r=n.fn(n._value);(e.version===0||Ci(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=t,An=i,cf(n),n.flags&=-3}}function fc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)fc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Dp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let An=!0;const hf=[];function Li(){hf.push(An),An=!1}function Ii(){const n=hf.pop();An=n===void 0?!0:n}function tu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=lt;lt=void 0;try{e()}finally{lt=t}}}let _s=0;class Up{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!lt||!An||lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==lt)t=this.activeLink=new Up(lt,this),lt.deps?(t.prevDep=lt.depsTail,lt.depsTail.nextDep=t,lt.depsTail=t):lt.deps=lt.depsTail=t,ff(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=lt.depsTail,t.nextDep=void 0,lt.depsTail.nextDep=t,lt.depsTail=t,lt.deps===t&&(lt.deps=i)}return t}trigger(e){this.version++,_s++,this.notify(e)}notify(e){uc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hc()}}}function ff(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ff(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const nl=new WeakMap,ji=Symbol(""),il=Symbol(""),vs=Symbol("");function Ht(n,e,t){if(An&&lt){let i=nl.get(n);i||nl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new dc),r.target=n,r.map=i,r.key=t),r.track()}}function ii(n,e,t,i,r,s){const o=nl.get(n);if(!o){_s++;return}const a=l=>{l&&l.trigger()};if(uc(),e==="clear")o.forEach(a);else{const l=qe(n),c=l&&lc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===vs||!Wr(f)&&f>=u)&&a(h)})}else switch(t!==void 0&&a(o.get(t)),c&&a(o.get(vs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ji)),ss(n)&&a(o.get(il)));break;case"delete":l||(a(o.get(ji)),ss(n)&&a(o.get(il)));break;case"set":ss(n)&&a(o.get(ji));break}}hc()}function ar(n){const e=nt(n);return e===n?e:(Ht(e,"iterate",vs),Rn(n)?e:e.map(Wt))}function pc(n){return Ht(n=nt(n),"iterate",vs),n}const Np={__proto__:null,[Symbol.iterator](){return la(this,Symbol.iterator,Wt)},concat(...n){return ar(this).concat(...n.map(e=>qe(e)?ar(e):e))},entries(){return la(this,"entries",n=>(n[1]=Wt(n[1]),n))},every(n,e){return Vn(this,"every",n,e,void 0,arguments)},filter(n,e){return Vn(this,"filter",n,e,t=>t.map(Wt),arguments)},find(n,e){return Vn(this,"find",n,e,Wt,arguments)},findIndex(n,e){return Vn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Vn(this,"findLast",n,e,Wt,arguments)},findLastIndex(n,e){return Vn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Vn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ca(this,"includes",n)},indexOf(...n){return ca(this,"indexOf",n)},join(n){return ar(this).join(n)},lastIndexOf(...n){return ca(this,"lastIndexOf",n)},map(n,e){return Vn(this,"map",n,e,void 0,arguments)},pop(){return $r(this,"pop")},push(...n){return $r(this,"push",n)},reduce(n,...e){return nu(this,"reduce",n,e)},reduceRight(n,...e){return nu(this,"reduceRight",n,e)},shift(){return $r(this,"shift")},some(n,e){return Vn(this,"some",n,e,void 0,arguments)},splice(...n){return $r(this,"splice",n)},toReversed(){return ar(this).toReversed()},toSorted(n){return ar(this).toSorted(n)},toSpliced(...n){return ar(this).toSpliced(...n)},unshift(...n){return $r(this,"unshift",n)},values(){return la(this,"values",Wt)}};function la(n,e,t){const i=pc(n),r=i[e]();return i!==n&&!Rn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Fp=Array.prototype;function Vn(n,e,t,i,r,s){const o=pc(n),a=o!==n&&!Rn(n),l=o[e];if(l!==Fp[e]){const h=l.apply(n,s);return a?Wt(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Wt(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function nu(n,e,t,i){const r=pc(n);let s=t;return r!==n&&(Rn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Wt(a),l,n)}),r[e](s,...i)}function ca(n,e,t){const i=nt(n);Ht(i,"iterate",vs);const r=i[e](...t);return(r===-1||r===!1)&&vc(t[0])?(t[0]=nt(t[0]),i[e](...t)):r}function $r(n,e,t=[]){Li(),uc();const i=nt(n)[e].apply(n,t);return hc(),Ii(),i}const Op=sc("__proto__,__v_isRef,__isVue"),df=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wr));function Bp(n){Wr(n)||(n=String(n));const e=nt(this);return Ht(e,"has",n),e.hasOwnProperty(n)}class pf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Zp:vf:s?_f:gf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!r){let l;if(o&&(l=Np[t]))return l;if(t==="hasOwnProperty")return Bp}const a=Reflect.get(e,t,Ot(e)?e:i);return(Wr(t)?df.has(t):Op(t))||(r||Ht(e,"get",t),s)?a:Ot(a)?o&&lc(t)?a:a.value:yt(a)?r?yf(a):Vo(a):a}}class mf extends pf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Ki(s);if(!Rn(i)&&!Ki(i)&&(s=nt(s),i=nt(i)),!qe(e)&&Ot(s)&&!Ot(i))return l?!1:(s.value=i,!0)}const o=qe(e)&&lc(t)?Number(t)<e.length:et(e,t),a=Reflect.set(e,t,i,Ot(e)?e:r);return e===nt(r)&&(o?Ci(i,s)&&ii(e,"set",t,i):ii(e,"add",t,i)),a}deleteProperty(e,t){const i=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ii(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Wr(t)||!df.has(t))&&Ht(e,"has",t),i}ownKeys(e){return Ht(e,"iterate",qe(e)?"length":ji),Reflect.ownKeys(e)}}class zp extends pf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Hp=new mf,Gp=new zp,kp=new mf(!0);const mc=n=>n,ko=n=>Reflect.getPrototypeOf(n);function Gs(n,e,t=!1,i=!1){n=n.__v_raw;const r=nt(n),s=nt(e);t||(Ci(e,s)&&Ht(r,"get",e),Ht(r,"get",s));const{has:o}=ko(r),a=i?mc:t?xc:Wt;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function ks(n,e=!1){const t=this.__v_raw,i=nt(t),r=nt(n);return e||(Ci(n,r)&&Ht(i,"has",n),Ht(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Vs(n,e=!1){return n=n.__v_raw,!e&&Ht(nt(n),"iterate",ji),Reflect.get(n,"size",n)}function iu(n,e=!1){!e&&!Rn(n)&&!Ki(n)&&(n=nt(n));const t=nt(this);return ko(t).has.call(t,n)||(t.add(n),ii(t,"add",n,n)),this}function ru(n,e,t=!1){!t&&!Rn(e)&&!Ki(e)&&(e=nt(e));const i=nt(this),{has:r,get:s}=ko(i);let o=r.call(i,n);o||(n=nt(n),o=r.call(i,n));const a=s.call(i,n);return i.set(n,e),o?Ci(e,a)&&ii(i,"set",n,e):ii(i,"add",n,e),this}function su(n){const e=nt(this),{has:t,get:i}=ko(e);let r=t.call(e,n);r||(n=nt(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&ii(e,"delete",n,void 0),s}function ou(){const n=nt(this),e=n.size!==0,t=n.clear();return e&&ii(n,"clear",void 0,void 0),t}function Ws(n,e){return function(i,r){const s=this,o=s.__v_raw,a=nt(o),l=e?mc:n?xc:Wt;return!n&&Ht(a,"iterate",ji),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Xs(n,e,t){return function(...i){const r=this.__v_raw,s=nt(r),o=ss(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?mc:e?xc:Wt;return!e&&Ht(s,"iterate",l?il:ji),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function di(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Vp(){const n={get(s){return Gs(this,s)},get size(){return Vs(this)},has:ks,add:iu,set:ru,delete:su,clear:ou,forEach:Ws(!1,!1)},e={get(s){return Gs(this,s,!1,!0)},get size(){return Vs(this)},has:ks,add(s){return iu.call(this,s,!0)},set(s,o){return ru.call(this,s,o,!0)},delete:su,clear:ou,forEach:Ws(!1,!0)},t={get(s){return Gs(this,s,!0)},get size(){return Vs(this,!0)},has(s){return ks.call(this,s,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:Ws(!0,!1)},i={get(s){return Gs(this,s,!0,!0)},get size(){return Vs(this,!0)},has(s){return ks.call(this,s,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:Ws(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Xs(s,!1,!1),t[s]=Xs(s,!0,!1),e[s]=Xs(s,!1,!0),i[s]=Xs(s,!0,!0)}),[n,t,e,i]}const[Wp,Xp,qp,Yp]=Vp();function gc(n,e){const t=e?n?Yp:qp:n?Xp:Wp;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(et(t,r)&&r in i?t:i,r,s)}const $p={get:gc(!1,!1)},jp={get:gc(!1,!0)},Kp={get:gc(!0,!1)};const gf=new WeakMap,_f=new WeakMap,vf=new WeakMap,Zp=new WeakMap;function Jp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qp(n){return n.__v_skip||!Object.isExtensible(n)?0:Jp(yp(n))}function Vo(n){return Ki(n)?n:_c(n,!1,Hp,$p,gf)}function xf(n){return _c(n,!1,kp,jp,_f)}function yf(n){return _c(n,!0,Gp,Kp,vf)}function _c(n,e,t,i,r){if(!yt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Qp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function as(n){return Ki(n)?as(n.__v_raw):!!(n&&n.__v_isReactive)}function Ki(n){return!!(n&&n.__v_isReadonly)}function Rn(n){return!!(n&&n.__v_isShallow)}function vc(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function em(n){return!et(n,"__v_skip")&&Object.isExtensible(n)&&tf(n,"__v_skip",!0),n}const Wt=n=>yt(n)?Vo(n):n,xc=n=>yt(n)?yf(n):n;function Ot(n){return n?n.__v_isRef===!0:!1}function wt(n){return Mf(n,!1)}function tm(n){return Mf(n,!0)}function Mf(n,e){return Ot(n)?n:new nm(n,e)}class nm{constructor(e,t){this.dep=new dc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:Wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Rn(e)||Ki(e);e=i?e:nt(e),Ci(e,t)&&(this._rawValue=e,this._value=i?e:Wt(e),this.dep.trigger())}}function un(n){return Ot(n)?n.value:n}const im={get:(n,e,t)=>e==="__v_raw"?n:un(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ot(r)&&!Ot(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Sf(n){return as(n)?n:new Proxy(n,im)}class rm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new dc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return af(this),!0}get value(){const e=this.dep.track();return uf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function sm(n,e,t=!1){let i,r;return Xe(n)?i=n:(i=n.get,r=n.set),new rm(i,r,t)}const qs={},Ro=new WeakMap;let Vi;function om(n,e=!1,t=Vi){if(t){let i=Ro.get(t);i||Ro.set(t,i=[]),i.push(n)}}function am(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:Rn(S)||r===!1||r===0?wi(S,1):wi(S);let u,h,f,d,_=!1,M=!1;if(Ot(n)?(h=()=>n.value,_=Rn(n)):as(n)?(h=()=>c(n),_=!0):qe(n)?(M=!0,_=n.some(S=>as(S)||Rn(S)),h=()=>n.map(S=>{if(Ot(S))return S.value;if(as(S))return c(S);if(Xe(S))return l?l(S,2):S()})):Xe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Li();try{f()}finally{Ii()}}const S=Vi;Vi=u;try{return l?l(n,3,[d]):n(d)}finally{Vi=S}}:h=On,e&&r){const S=h,I=r===!0?1/0:r;h=()=>wi(S(),I)}const m=Ip(),p=()=>{u.stop(),m&&ac(m.effects,u)};if(s&&e){const S=e;e=(...I)=>{S(...I),p()}}let b=M?new Array(n.length).fill(qs):qs;const x=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const I=u.run();if(r||_||(M?I.some((C,R)=>Ci(C,b[R])):Ci(I,b))){f&&f();const C=Vi;Vi=u;try{const R=[I,b===qs?void 0:M&&b[0]===qs?[]:b,d];l?l(e,3,R):e(...R),b=I}finally{Vi=C}}}else u.run()};return a&&a(x),u=new sf(h),u.scheduler=o?()=>o(x,!1):x,d=S=>om(S,!1,u),f=u.onStop=()=>{const S=Ro.get(u);if(S){if(l)l(S,4);else for(const I of S)I();Ro.delete(u)}},e?i?x(!0):b=u.run():o?o(x.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function wi(n,e=1/0,t){if(e<=0||!yt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ot(n))wi(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)wi(n[i],e,t);else if(vp(n)||ss(n))n.forEach(i=>{wi(i,e,t)});else if(Mp(n)){for(const i in n)wi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&wi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Is(n,e,t,i){try{return i?n(...i):n()}catch(r){Wo(r,e,t)}}function zn(n,e,t,i){if(Xe(n)){const r=Is(n,e,t,i);return r&&ef(r)&&r.catch(s=>{Wo(s,e,t)}),r}if(qe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(zn(n[s],e,t,i));return r}}function Wo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(s){Li(),Is(s,null,10,[n,l,c]),Ii();return}}lm(n,t,r,i,o)}function lm(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}let xs=!1,rl=!1;const Xt=[];let Un=0;const Cr=[];let Mi=null,Sr=0;const Ef=Promise.resolve();let yc=null;function wf(n){const e=yc||Ef;return n?e.then(this?n.bind(this):n):e}function cm(n){let e=xs?Un+1:0,t=Xt.length;for(;e<t;){const i=e+t>>>1,r=Xt[i],s=ys(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Mc(n){if(!(n.flags&1)){const e=ys(n),t=Xt[Xt.length-1];!t||!(n.flags&2)&&e>=ys(t)?Xt.push(n):Xt.splice(cm(e),0,n),n.flags|=1,bf()}}function bf(){!xs&&!rl&&(rl=!0,yc=Ef.then(Af))}function um(n){qe(n)?Cr.push(...n):Mi&&n.id===-1?Mi.splice(Sr+1,0,n):n.flags&1||(Cr.push(n),n.flags|=1),bf()}function au(n,e,t=xs?Un+1:0){for(;t<Xt.length;t++){const i=Xt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Xt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Tf(n){if(Cr.length){const e=[...new Set(Cr)].sort((t,i)=>ys(t)-ys(i));if(Cr.length=0,Mi){Mi.push(...e);return}for(Mi=e,Sr=0;Sr<Mi.length;Sr++){const t=Mi[Sr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Mi=null,Sr=0}}const ys=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Af(n){rl=!1,xs=!0;try{for(Un=0;Un<Xt.length;Un++){const e=Xt[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Is(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<Xt.length;Un++){const e=Xt[Un];e&&(e.flags&=-2)}Un=0,Xt.length=0,Tf(),xs=!1,yc=null,(Xt.length||Cr.length)&&Af()}}let Tn=null,Rf=null;function Co(n){const e=Tn;return Tn=n,Rf=n&&n.type.__scopeId||null,e}function Mn(n,e=Tn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&_u(-1);const s=Co(e);let o;try{o=n(...r)}finally{Co(s),i._d&&_u(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ni(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Li(),zn(l,t,8,[n.el,a,n,e]),Ii())}}const hm=Symbol("_vte"),fm=n=>n.__isTeleport;function Sc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Sc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Zt(n,e){return Xe(n)?Dt({name:n.name},e,{setup:n}):n}function Cf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function sl(n,e,t,i,r=!1){if(qe(n)){n.forEach((_,M)=>sl(_,e&&(qe(e)?e[M]:e),t,i,r));return}if(ls(i)&&!r)return;const s=i.shapeFlag&4?Ac(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,h=a.setupState,f=nt(h),d=h===ct?()=>!1:_=>et(f,_);if(c!=null&&c!==l&&(Pt(c)?(u[c]=null,d(c)&&(h[c]=null)):Ot(c)&&(c.value=null)),Xe(l))Is(l,a,12,[o,u]);else{const _=Pt(l),M=Ot(l);if(_||M){const m=()=>{if(n.f){const p=_?d(l)?h[l]:u[l]:l.value;r?qe(p)&&ac(p,s):qe(p)?p.includes(s)||p.push(s):_?(u[l]=[s],d(l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,d(l)&&(h[l]=o)):M&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,nn(m,t)):m()}}}const ls=n=>!!n.type.__asyncLoader,Pf=n=>n.type.__isKeepAlive;function dm(n,e){Lf(n,"a",e)}function pm(n,e){Lf(n,"da",e)}function Lf(n,e,t=Ft){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Xo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Pf(r.parent.vnode)&&mm(i,e,t,r),r=r.parent}}function mm(n,e,t,i){const r=Xo(e,n,i,!0);Ec(()=>{ac(i[e],r)},t)}function Xo(n,e,t=Ft,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Li();const a=Ds(t),l=zn(e,t,n,o);return a(),Ii(),l});return i?r.unshift(s):r.push(s),s}}const ai=n=>(e,t=Ft)=>{(!$o||n==="sp")&&Xo(n,(...i)=>e(...i),t)},gm=ai("bm"),pn=ai("m"),_m=ai("bu"),vm=ai("u"),xm=ai("bum"),Ec=ai("um"),ym=ai("sp"),Mm=ai("rtg"),Sm=ai("rtc");function Em(n,e=Ft){Xo("ec",n,e)}const wm="components";function lu(n,e){return Tm(wm,n,!0,e)||n}const bm=Symbol.for("v-ndc");function Tm(n,e,t=!0,i=!1){const r=Tn||Ft;if(r){const s=r.type;{const a=p0(s,!1);if(a&&(a===e||a===dn(e)||a===Go(dn(e))))return s}const o=cu(r[n]||s[n],e)||cu(r.appContext[n],e);return!o&&i?s:o}}function cu(n,e){return n&&(n[e]||n[dn(e)]||n[Go(dn(e))])}const ol=n=>n?Zf(n)?Ac(n):ol(n.parent):null,cs=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ol(n.parent),$root:n=>ol(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>wc(n),$forceUpdate:n=>n.f||(n.f=()=>{Mc(n.update)}),$nextTick:n=>n.n||(n.n=wf.bind(n.proxy)),$watch:n=>Ym.bind(n)}),ua=(n,e)=>n!==ct&&!n.__isScriptSetup&&et(n,e),Am={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ua(i,e))return o[e]=1,i[e];if(r!==ct&&et(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&et(c,e))return o[e]=3,s[e];if(t!==ct&&et(t,e))return o[e]=4,t[e];al&&(o[e]=0)}}const u=cs[e];let h,f;if(u)return e==="$attrs"&&Ht(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ct&&et(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,et(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ua(r,e)?(r[e]=t,!0):i!==ct&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ct&&et(n,o)||ua(e,o)||(a=s[0])&&et(a,o)||et(i,o)||et(cs,o)||et(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function uu(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let al=!0;function Rm(n){const e=wc(n),t=n.proxy,i=n.ctx;al=!1,e.beforeCreate&&hu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:M,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:x,unmounted:S,render:I,renderTracked:C,renderTriggered:R,errorCaptured:D,serverPrefetch:ne,expose:y,inheritAttrs:w,components:Y,directives:H,filters:j}=e;if(c&&Cm(c,i,null),o)for(const K in o){const O=o[K];Xe(O)&&(i[K]=O.bind(t))}if(r){const K=r.call(t,t);yt(K)&&(n.data=Vo(K))}if(al=!0,s)for(const K in s){const O=s[K],me=Xe(O)?O.bind(t,t):Xe(O.get)?O.get.bind(t,t):On,he=!Xe(O)&&Xe(O.set)?O.set.bind(t):On,_e=It({get:me,set:he});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Me=>_e.value=Me})}if(a)for(const K in a)If(a[K],i,t,K);if(l){const K=Xe(l)?l.call(t):l;Reflect.ownKeys(K).forEach(O=>{vo(O,K[O])})}u&&hu(u,n,"c");function G(K,O){qe(O)?O.forEach(me=>K(me.bind(t))):O&&K(O.bind(t))}if(G(gm,h),G(pn,f),G(_m,d),G(vm,_),G(dm,M),G(pm,m),G(Em,D),G(Sm,C),G(Mm,R),G(xm,b),G(Ec,S),G(ym,ne),qe(y))if(y.length){const K=n.exposed||(n.exposed={});y.forEach(O=>{Object.defineProperty(K,O,{get:()=>t[O],set:me=>t[O]=me})})}else n.exposed||(n.exposed={});I&&n.render===On&&(n.render=I),w!=null&&(n.inheritAttrs=w),Y&&(n.components=Y),H&&(n.directives=H),ne&&Cf(n)}function Cm(n,e,t=On){qe(n)&&(n=ll(n));for(const i in n){const r=n[i];let s;yt(r)?"default"in r?s=ri(r.from||i,r.default,!0):s=ri(r.from||i):s=ri(r),Ot(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function hu(n,e,t){zn(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function If(n,e,t,i){let r=i.includes(".")?qf(t,i):()=>t[i];if(Pt(n)){const s=e[n];Xe(s)&&Bt(r,s)}else if(Xe(n))Bt(r,n.bind(t));else if(yt(n))if(qe(n))n.forEach(s=>If(s,e,t,i));else{const s=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(s)&&Bt(r,s,n)}}function wc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Po(l,c,o,!0)),Po(l,e,o)),yt(e)&&s.set(e,l),l}function Po(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Po(n,s,t,!0),r&&r.forEach(o=>Po(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Pm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Pm={data:fu,props:du,emits:du,methods:is,computed:is,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:is,directives:is,watch:Im,provide:fu,inject:Lm};function fu(n,e){return e?n?function(){return Dt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function Lm(n,e){return is(ll(n),ll(e))}function ll(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Gt(n,e){return n?[...new Set([].concat(n,e))]:e}function is(n,e){return n?Dt(Object.create(null),n,e):e}function du(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:Dt(Object.create(null),uu(n),uu(e??{})):e}function Im(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=Gt(n[i],e[i]);return t}function Df(){return{app:null,config:{isNativeTag:gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dm=0;function Um(n,e){return function(i,r=null){Xe(i)||(i=Dt({},i)),r!=null&&!yt(r)&&(r=null);const s=Df(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Dm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:g0,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...h)):Xe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||st(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(d,u):n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Ac(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(zn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Pr;Pr=c;try{return u()}finally{Pr=h}}};return c}}let Pr=null;function vo(n,e){if(Ft){let t=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===t&&(t=Ft.provides=Object.create(i)),t[n]=e}}function ri(n,e,t=!1){const i=Ft||Tn;if(i||Pr){const r=Pr?Pr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const Uf={},Nf=()=>Object.create(Uf),Ff=n=>Object.getPrototypeOf(n)===Uf;function Nm(n,e,t,i=!1){const r={},s=Nf();n.propsDefaults=Object.create(null),Of(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:xf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Fm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=nt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(qo(n.emitsOptions,f))continue;const d=e[f];if(l)if(et(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const _=dn(f);r[_]=cl(l,a,_,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Of(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!et(e,h)&&((u=tr(h))===h||!et(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=cl(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!et(e,h))&&(delete s[h],c=!0)}c&&ii(n.attrs,"set","")}function Of(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(os(l))continue;const c=e[l];let u;r&&et(r,u=dn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:qo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=nt(t),c=a||ct;for(let u=0;u<s.length;u++){const h=s[u];t[h]=cl(r,l,h,c[h],n,!et(c,h))}}return o}function cl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ds(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===tr(t))&&(i=!0))}return i}const Om=new WeakMap;function Bf(n,e,t=!1){const i=t?Om:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=h=>{l=!0;const[f,d]=Bf(h,e,!0);Dt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return yt(n)&&i.set(n,Rr),Rr;if(qe(s))for(let u=0;u<s.length;u++){const h=dn(s[u]);pu(h)&&(o[h]=ct)}else if(s)for(const u in s){const h=dn(u);if(pu(h)){const f=s[u],d=o[h]=qe(f)||Xe(f)?{type:f}:Dt({},f),_=d.type;let M=!1,m=!0;if(qe(_))for(let p=0;p<_.length;++p){const b=_[p],x=Xe(b)&&b.name;if(x==="Boolean"){M=!0;break}else x==="String"&&(m=!1)}else M=Xe(_)&&_.name==="Boolean";d[0]=M,d[1]=m,(M||et(d,"default"))&&a.push(h)}}const c=[o,a];return yt(n)&&i.set(n,c),c}function pu(n){return n[0]!=="$"&&!os(n)}const zf=n=>n[0]==="_"||n==="$stable",bc=n=>qe(n)?n.map(Nn):[Nn(n)],Bm=(n,e,t)=>{if(e._n)return e;const i=Mn((...r)=>bc(e(...r)),t);return i._c=!1,i},Hf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(zf(r))continue;const s=n[r];if(Xe(s))e[r]=Bm(r,s,i);else if(s!=null){const o=bc(s);e[r]=()=>o}}},Gf=(n,e)=>{const t=bc(e);n.slots.default=()=>t},kf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},zm=(n,e,t)=>{const i=n.slots=Nf();if(n.vnode.shapeFlag&32){const r=e._;r?(kf(i,e,t),t&&tf(i,"_",r,!0)):Hf(e,i)}else e&&Gf(n,e)},Hm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:kf(r,e,t):(s=!e.$stable,Hf(e,r)),o=e}else e&&(Gf(n,e),o={default:1});if(s)for(const a in r)!zf(a)&&o[a]==null&&delete r[a]},nn=e0;function Gm(n){return km(n)}function km(n,e){const t=nf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=On,insertStaticContent:_}=n,M=(g,T,L,F=null,U=null,Z=null,te=void 0,E=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!jr(g,T)&&(F=N(g),Me(g,U,Z,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:P,ref:W,shapeFlag:V}=T;switch(P){case Yo:m(g,T,L,F);break;case Zi:p(g,T,L,F);break;case da:g==null&&b(T,L,F,te);break;case Qn:Y(g,T,L,F,U,Z,te,E,v);break;default:V&1?I(g,T,L,F,U,Z,te,E,v):V&6?H(g,T,L,F,U,Z,te,E,v):(V&64||V&128)&&P.process(g,T,L,F,U,Z,te,E,v,le)}W!=null&&U&&sl(W,g&&g.ref,Z,T||g,!T)},m=(g,T,L,F)=>{if(g==null)i(T.el=a(T.children),L,F);else{const U=T.el=g.el;T.children!==g.children&&c(U,T.children)}},p=(g,T,L,F)=>{g==null?i(T.el=l(T.children||""),L,F):T.el=g.el},b=(g,T,L,F)=>{[g.el,g.anchor]=_(g.children,T,L,F,g.el,g.anchor)},x=({el:g,anchor:T},L,F)=>{let U;for(;g&&g!==T;)U=f(g),i(g,L,F),g=U;i(T,L,F)},S=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=f(g),r(g),g=L;r(T)},I=(g,T,L,F,U,Z,te,E,v)=>{T.type==="svg"?te="svg":T.type==="math"&&(te="mathml"),g==null?C(T,L,F,U,Z,te,E,v):ne(g,T,U,Z,te,E,v)},C=(g,T,L,F,U,Z,te,E)=>{let v,P;const{props:W,shapeFlag:V,transition:X,dirs:ue}=g;if(v=g.el=o(g.type,Z,W&&W.is,W),V&8?u(v,g.children):V&16&&D(g.children,v,null,F,U,ha(g,Z),te,E),ue&&Ni(g,null,F,"created"),R(v,g,g.scopeId,te,F),W){for(const ve in W)ve!=="value"&&!os(ve)&&s(v,ve,null,W[ve],Z,F);"value"in W&&s(v,"value",null,W.value,Z),(P=W.onVnodeBeforeMount)&&Dn(P,F,g)}ue&&Ni(g,null,F,"beforeMount");const ce=Vm(U,X);ce&&X.beforeEnter(v),i(v,T,L),((P=W&&W.onVnodeMounted)||ce||ue)&&nn(()=>{P&&Dn(P,F,g),ce&&X.enter(v),ue&&Ni(g,null,F,"mounted")},U)},R=(g,T,L,F,U)=>{if(L&&d(g,L),F)for(let Z=0;Z<F.length;Z++)d(g,F[Z]);if(U){let Z=U.subTree;if(T===Z||$f(Z.type)&&(Z.ssContent===T||Z.ssFallback===T)){const te=U.vnode;R(g,te,te.scopeId,te.slotScopeIds,U.parent)}}},D=(g,T,L,F,U,Z,te,E,v=0)=>{for(let P=v;P<g.length;P++){const W=g[P]=E?Si(g[P]):Nn(g[P]);M(null,W,T,L,F,U,Z,te,E)}},ne=(g,T,L,F,U,Z,te)=>{const E=T.el=g.el;let{patchFlag:v,dynamicChildren:P,dirs:W}=T;v|=g.patchFlag&16;const V=g.props||ct,X=T.props||ct;let ue;if(L&&Fi(L,!1),(ue=X.onVnodeBeforeUpdate)&&Dn(ue,L,T,g),W&&Ni(T,g,L,"beforeUpdate"),L&&Fi(L,!0),(V.innerHTML&&X.innerHTML==null||V.textContent&&X.textContent==null)&&u(E,""),P?y(g.dynamicChildren,P,E,L,F,ha(T,U),Z):te||O(g,T,E,null,L,F,ha(T,U),Z,!1),v>0){if(v&16)w(E,V,X,L,U);else if(v&2&&V.class!==X.class&&s(E,"class",null,X.class,U),v&4&&s(E,"style",V.style,X.style,U),v&8){const ce=T.dynamicProps;for(let ve=0;ve<ce.length;ve++){const Re=ce[ve],pe=V[Re],xe=X[Re];(xe!==pe||Re==="value")&&s(E,Re,pe,xe,U,L)}}v&1&&g.children!==T.children&&u(E,T.children)}else!te&&P==null&&w(E,V,X,L,U);((ue=X.onVnodeUpdated)||W)&&nn(()=>{ue&&Dn(ue,L,T,g),W&&Ni(T,g,L,"updated")},F)},y=(g,T,L,F,U,Z,te)=>{for(let E=0;E<T.length;E++){const v=g[E],P=T[E],W=v.el&&(v.type===Qn||!jr(v,P)||v.shapeFlag&70)?h(v.el):L;M(v,P,W,null,F,U,Z,te,!0)}},w=(g,T,L,F,U)=>{if(T!==L){if(T!==ct)for(const Z in T)!os(Z)&&!(Z in L)&&s(g,Z,T[Z],null,U,F);for(const Z in L){if(os(Z))continue;const te=L[Z],E=T[Z];te!==E&&Z!=="value"&&s(g,Z,E,te,U,F)}"value"in L&&s(g,"value",T.value,L.value,U)}},Y=(g,T,L,F,U,Z,te,E,v)=>{const P=T.el=g?g.el:a(""),W=T.anchor=g?g.anchor:a("");let{patchFlag:V,dynamicChildren:X,slotScopeIds:ue}=T;ue&&(E=E?E.concat(ue):ue),g==null?(i(P,L,F),i(W,L,F),D(T.children||[],L,W,U,Z,te,E,v)):V>0&&V&64&&X&&g.dynamicChildren?(y(g.dynamicChildren,X,L,U,Z,te,E),(T.key!=null||U&&T===U.subTree)&&Vf(g,T,!0)):O(g,T,L,W,U,Z,te,E,v)},H=(g,T,L,F,U,Z,te,E,v)=>{T.slotScopeIds=E,g==null?T.shapeFlag&512?U.ctx.activate(T,L,F,te,v):j(T,L,F,U,Z,te,v):se(g,T,v)},j=(g,T,L,F,U,Z,te)=>{const E=g.component=c0(g,F,U);if(Pf(g)&&(E.ctx.renderer=le),u0(E,!1,te),E.asyncDep){if(U&&U.registerDep(E,G,te),!g.el){const v=E.subTree=st(Zi);p(null,v,T,L)}}else G(E,g,T,L,U,Z,te)},se=(g,T,L)=>{const F=T.component=g.component;if(Jm(g,T,L))if(F.asyncDep&&!F.asyncResolved){K(F,T,L);return}else F.next=T,F.update();else T.el=g.el,F.vnode=T},G=(g,T,L,F,U,Z,te)=>{const E=()=>{if(g.isMounted){let{next:V,bu:X,u:ue,parent:ce,vnode:ve}=g;{const De=Wf(g);if(De){V&&(V.el=ve.el,K(g,V,te)),De.asyncDep.then(()=>{g.isUnmounted||E()});return}}let Re=V,pe;Fi(g,!1),V?(V.el=ve.el,K(g,V,te)):V=ve,X&&oa(X),(pe=V.props&&V.props.onVnodeBeforeUpdate)&&Dn(pe,ce,V,ve),Fi(g,!0);const xe=fa(g),Ne=g.subTree;g.subTree=xe,M(Ne,xe,h(Ne.el),N(Ne),g,U,Z),V.el=xe.el,Re===null&&Qm(g,xe.el),ue&&nn(ue,U),(pe=V.props&&V.props.onVnodeUpdated)&&nn(()=>Dn(pe,ce,V,ve),U)}else{let V;const{el:X,props:ue}=T,{bm:ce,m:ve,parent:Re,root:pe,type:xe}=g,Ne=ls(T);if(Fi(g,!1),ce&&oa(ce),!Ne&&(V=ue&&ue.onVnodeBeforeMount)&&Dn(V,Re,T),Fi(g,!0),X&&Q){const De=()=>{g.subTree=fa(g),Q(X,g.subTree,g,U,null)};Ne&&xe.__asyncHydrate?xe.__asyncHydrate(X,g,De):De()}else{pe.ce&&pe.ce._injectChildStyle(xe);const De=g.subTree=fa(g);M(null,De,L,F,g,U,Z),T.el=De.el}if(ve&&nn(ve,U),!Ne&&(V=ue&&ue.onVnodeMounted)){const De=T;nn(()=>Dn(V,Re,De),U)}(T.shapeFlag&256||Re&&ls(Re.vnode)&&Re.vnode.shapeFlag&256)&&g.a&&nn(g.a,U),g.isMounted=!0,T=L=F=null}};g.scope.on();const v=g.effect=new sf(E);g.scope.off();const P=g.update=v.run.bind(v),W=g.job=v.runIfDirty.bind(v);W.i=g,W.id=g.uid,v.scheduler=()=>Mc(W),Fi(g,!0),P()},K=(g,T,L)=>{T.component=g;const F=g.vnode.props;g.vnode=T,g.next=null,Fm(g,T.props,F,L),Hm(g,T.children,L),Li(),au(g),Ii()},O=(g,T,L,F,U,Z,te,E,v=!1)=>{const P=g&&g.children,W=g?g.shapeFlag:0,V=T.children,{patchFlag:X,shapeFlag:ue}=T;if(X>0){if(X&128){he(P,V,L,F,U,Z,te,E,v);return}else if(X&256){me(P,V,L,F,U,Z,te,E,v);return}}ue&8?(W&16&&de(P,U,Z),V!==P&&u(L,V)):W&16?ue&16?he(P,V,L,F,U,Z,te,E,v):de(P,U,Z,!0):(W&8&&u(L,""),ue&16&&D(V,L,F,U,Z,te,E,v))},me=(g,T,L,F,U,Z,te,E,v)=>{g=g||Rr,T=T||Rr;const P=g.length,W=T.length,V=Math.min(P,W);let X;for(X=0;X<V;X++){const ue=T[X]=v?Si(T[X]):Nn(T[X]);M(g[X],ue,L,null,U,Z,te,E,v)}P>W?de(g,U,Z,!0,!1,V):D(T,L,F,U,Z,te,E,v,V)},he=(g,T,L,F,U,Z,te,E,v)=>{let P=0;const W=T.length;let V=g.length-1,X=W-1;for(;P<=V&&P<=X;){const ue=g[P],ce=T[P]=v?Si(T[P]):Nn(T[P]);if(jr(ue,ce))M(ue,ce,L,null,U,Z,te,E,v);else break;P++}for(;P<=V&&P<=X;){const ue=g[V],ce=T[X]=v?Si(T[X]):Nn(T[X]);if(jr(ue,ce))M(ue,ce,L,null,U,Z,te,E,v);else break;V--,X--}if(P>V){if(P<=X){const ue=X+1,ce=ue<W?T[ue].el:F;for(;P<=X;)M(null,T[P]=v?Si(T[P]):Nn(T[P]),L,ce,U,Z,te,E,v),P++}}else if(P>X)for(;P<=V;)Me(g[P],U,Z,!0),P++;else{const ue=P,ce=P,ve=new Map;for(P=ce;P<=X;P++){const Ue=T[P]=v?Si(T[P]):Nn(T[P]);Ue.key!=null&&ve.set(Ue.key,P)}let Re,pe=0;const xe=X-ce+1;let Ne=!1,De=0;const Se=new Array(xe);for(P=0;P<xe;P++)Se[P]=0;for(P=ue;P<=V;P++){const Ue=g[P];if(pe>=xe){Me(Ue,U,Z,!0);continue}let We;if(Ue.key!=null)We=ve.get(Ue.key);else for(Re=ce;Re<=X;Re++)if(Se[Re-ce]===0&&jr(Ue,T[Re])){We=Re;break}We===void 0?Me(Ue,U,Z,!0):(Se[We-ce]=P+1,We>=De?De=We:Ne=!0,M(Ue,T[We],L,null,U,Z,te,E,v),pe++)}const Ve=Ne?Wm(Se):Rr;for(Re=Ve.length-1,P=xe-1;P>=0;P--){const Ue=ce+P,We=T[Ue],B=Ue+1<W?T[Ue+1].el:F;Se[P]===0?M(null,We,L,B,U,Z,te,E,v):Ne&&(Re<0||P!==Ve[Re]?_e(We,L,B,2):Re--)}}},_e=(g,T,L,F,U=null)=>{const{el:Z,type:te,transition:E,children:v,shapeFlag:P}=g;if(P&6){_e(g.component.subTree,T,L,F);return}if(P&128){g.suspense.move(T,L,F);return}if(P&64){te.move(g,T,L,le);return}if(te===Qn){i(Z,T,L);for(let V=0;V<v.length;V++)_e(v[V],T,L,F);i(g.anchor,T,L);return}if(te===da){x(g,T,L);return}if(F!==2&&P&1&&E)if(F===0)E.beforeEnter(Z),i(Z,T,L),nn(()=>E.enter(Z),U);else{const{leave:V,delayLeave:X,afterLeave:ue}=E,ce=()=>i(Z,T,L),ve=()=>{V(Z,()=>{ce(),ue&&ue()})};X?X(Z,ce,ve):ve()}else i(Z,T,L)},Me=(g,T,L,F=!1,U=!1)=>{const{type:Z,props:te,ref:E,children:v,dynamicChildren:P,shapeFlag:W,patchFlag:V,dirs:X,cacheIndex:ue}=g;if(V===-2&&(U=!1),E!=null&&sl(E,null,L,g,!0),ue!=null&&(T.renderCache[ue]=void 0),W&256){T.ctx.deactivate(g);return}const ce=W&1&&X,ve=!ls(g);let Re;if(ve&&(Re=te&&te.onVnodeBeforeUnmount)&&Dn(Re,T,g),W&6)fe(g.component,L,F);else{if(W&128){g.suspense.unmount(L,F);return}ce&&Ni(g,null,T,"beforeUnmount"),W&64?g.type.remove(g,T,L,le,F):P&&!P.hasOnce&&(Z!==Qn||V>0&&V&64)?de(P,T,L,!1,!0):(Z===Qn&&V&384||!U&&W&16)&&de(v,T,L),F&&Ie(g)}(ve&&(Re=te&&te.onVnodeUnmounted)||ce)&&nn(()=>{Re&&Dn(Re,T,g),ce&&Ni(g,null,T,"unmounted")},L)},Ie=g=>{const{type:T,el:L,anchor:F,transition:U}=g;if(T===Qn){ee(L,F);return}if(T===da){S(g);return}const Z=()=>{r(L),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(g.shapeFlag&1&&U&&!U.persisted){const{leave:te,delayLeave:E}=U,v=()=>te(L,Z);E?E(g.el,Z,v):v()}else Z()},ee=(g,T)=>{let L;for(;g!==T;)L=f(g),r(g),g=L;r(T)},fe=(g,T,L)=>{const{bum:F,scope:U,job:Z,subTree:te,um:E,m:v,a:P}=g;mu(v),mu(P),F&&oa(F),U.stop(),Z&&(Z.flags|=8,Me(te,g,T,L)),E&&nn(E,T),nn(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},de=(g,T,L,F=!1,U=!1,Z=0)=>{for(let te=Z;te<g.length;te++)Me(g[te],T,L,F,U)},N=g=>{if(g.shapeFlag&6)return N(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=f(g.anchor||g.el),L=T&&T[hm];return L?f(L):T};let re=!1;const J=(g,T,L)=>{g==null?T._vnode&&Me(T._vnode,null,null,!0):M(T._vnode||null,g,T,null,null,null,L),T._vnode=g,re||(re=!0,au(),Tf(),re=!1)},le={p:M,um:Me,m:_e,r:Ie,mt:j,mc:D,pc:O,pbc:y,n:N,o:n};let ye,Q;return{render:J,hydrate:ye,createApp:Um(J,ye)}}function ha({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Fi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Vm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Vf(n,e,t=!1){const i=n.children,r=e.children;if(qe(i)&&qe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Si(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Vf(o,a)),a.type===Yo&&(a.el=o.el)}}function Wm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Wf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wf(e)}function mu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Xm=Symbol.for("v-scx"),qm=()=>ri(Xm);function Bt(n,e,t){return Xf(n,e,t)}function Xf(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:o}=t,a=Dt({},t);let l;if($o)if(s==="sync"){const f=qm();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const f=()=>{};return f.stop=On,f.resume=On,f.pause=On,f}const c=Ft;a.call=(f,d,_)=>zn(f,c,d,_);let u=!1;s==="post"?a.scheduler=f=>{nn(f,c&&c.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(f,d)=>{d?f():Mc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),u&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const h=am(n,e,a);return l&&l.push(h),h}function Ym(n,e,t){const i=this.proxy,r=Pt(n)?n.includes(".")?qf(i,n):()=>i[n]:n.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,t=e);const o=Ds(this),a=Xf(r,s.bind(i),t);return o(),a}function qf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const $m=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${dn(e)}Modifiers`]||n[`${tr(e)}Modifiers`];function jm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),o=s&&$m(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Pt(u)?u.trim():u)),o.number&&(r=t.map(wp)));let a,l=i[a=sa(e)]||i[a=sa(dn(e))];!l&&s&&(l=i[a=sa(tr(e))]),l&&zn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,zn(c,n,6,r)}}function Yf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=Yf(c,e,!0);u&&(a=!0,Dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(yt(n)&&i.set(n,null),null):(qe(s)?s.forEach(l=>o[l]=null):Dt(o,s),yt(n)&&i.set(n,o),o)}function qo(n,e){return!n||!Bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,tr(e))||et(n,e))}function fa(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:M}=n,m=Co(n);let p,b;try{if(t.shapeFlag&4){const S=r||i,I=S;p=Nn(c.call(I,S,u,h,d,f,_)),b=a}else{const S=e;p=Nn(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),b=e.props?a:Km(a)}}catch(S){us.length=0,Wo(S,n,1),p=st(Zi)}let x=p;if(b&&M!==!1){const S=Object.keys(b),{shapeFlag:I}=x;S.length&&I&7&&(s&&S.some(oc)&&(b=Zm(b,s)),x=Nr(x,b,!1,!0))}return t.dirs&&(x=Nr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Sc(x,t.transition),p=x,Co(m),p}const Km=n=>{let e;for(const t in n)(t==="class"||t==="style"||Bo(t))&&((e||(e={}))[t]=n[t]);return e},Zm=(n,e)=>{const t={};for(const i in n)(!oc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Jm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?gu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!qo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?gu(i,o,c):!0:!!o;return!1}function gu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!qo(t,s))return!0}return!1}function Qm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const $f=n=>n.__isSuspense;function e0(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):um(n)}const Qn=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),Zi=Symbol.for("v-cmt"),da=Symbol.for("v-stc"),us=[];let sn=null;function an(n=!1){us.push(sn=n?null:[])}function t0(){us.pop(),sn=us[us.length-1]||null}let Ms=1;function _u(n){Ms+=n,n<0&&sn&&(sn.hasOnce=!0)}function jf(n){return n.dynamicChildren=Ms>0?sn||Rr:null,t0(),Ms>0&&sn&&sn.push(n),n}function mn(n,e,t,i,r,s){return jf(Ss(n,e,t,i,r,s,!0))}function n0(n,e,t,i,r){return jf(st(n,e,t,i,r,!0))}function Lo(n){return n?n.__v_isVNode===!0:!1}function jr(n,e){return n.type===e.type&&n.key===e.key}const Kf=({key:n})=>n??null,xo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Pt(n)||Ot(n)||Xe(n)?{i:Tn,r:n,k:e,f:!!t}:n:null);function Ss(n,e=null,t=null,i=0,r=null,s=n===Qn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Kf(e),ref:e&&xo(e),scopeId:Rf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Tn};return a?(Tc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Pt(t)?8:16),Ms>0&&!o&&sn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&sn.push(l),l}const st=i0;function i0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===bm)&&(n=Zi),Lo(n)){const a=Nr(n,e,!0);return t&&Tc(a,t),Ms>0&&!s&&sn&&(a.shapeFlag&6?sn[sn.indexOf(n)]=a:sn.push(a)),a.patchFlag=-2,a}if(m0(n)&&(n=n.__vccOpts),e){e=r0(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=oi(a)),yt(l)&&(vc(l)&&!qe(l)&&(l=Dt({},l)),e.style=cc(l))}const o=Pt(n)?1:$f(n)?128:fm(n)?64:yt(n)?4:Xe(n)?2:0;return Ss(n,e,t,i,r,o,s,!0)}function r0(n){return n?vc(n)||Ff(n)?Dt({},n):n:null}function Nr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?o0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Kf(c),ref:e&&e.ref?t&&s?qe(s)?s.concat(xo(e)):[s,xo(e)]:xo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Qn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Nr(n.ssContent),ssFallback:n.ssFallback&&Nr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Sc(u,l.clone(u)),u}function Sn(n=" ",e=0){return st(Yo,null,n,e)}function s0(n="",e=!1){return e?(an(),n0(Zi,null,n)):st(Zi,null,n)}function Nn(n){return n==null||typeof n=="boolean"?st(Zi):qe(n)?st(Qn,null,n.slice()):Lo(n)?Si(n):st(Yo,null,String(n))}function Si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Nr(n)}function Tc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Tc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ff(e)?e._ctx=Tn:r===3&&Tn&&(Tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Tn},t=32):(e=String(e),i&64?(t=16,e=[Sn(e)]):t=8);n.children=e,n.shapeFlag|=t}function o0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=oi([e.class,i.class]));else if(r==="style")e.style=cc([e.style,i.style]);else if(Bo(r)){const s=e[r],o=i[r];o&&s!==o&&!(qe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Dn(n,e,t,i=null){zn(n,e,7,[t,i])}const a0=Df();let l0=0;function c0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||a0,s={uid:l0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bf(i,r),emitsOptions:Yf(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=jm.bind(null,s),n.ce&&n.ce(s),s}let Ft=null,Io,ul;{const n=nf(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Io=e("__VUE_INSTANCE_SETTERS__",t=>Ft=t),ul=e("__VUE_SSR_SETTERS__",t=>$o=t)}const Ds=n=>{const e=Ft;return Io(n),n.scope.on(),()=>{n.scope.off(),Io(e)}},vu=()=>{Ft&&Ft.scope.off(),Io(null)};function Zf(n){return n.vnode.shapeFlag&4}let $o=!1;function u0(n,e=!1,t=!1){e&&ul(e);const{props:i,children:r}=n.vnode,s=Zf(n);Nm(n,i,s,e),zm(n,r,t);const o=s?h0(n,e):void 0;return e&&ul(!1),o}function h0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Am);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?d0(n):null,s=Ds(n);Li();const o=Is(i,n,0,[n.props,r]);if(Ii(),s(),ef(o)){if(ls(n)||Cf(n),o.then(vu,vu),e)return o.then(a=>{xu(n,a,e)}).catch(a=>{Wo(a,n,0)});n.asyncDep=o}else xu(n,o,e)}else Jf(n,e)}function xu(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:yt(e)&&(n.setupState=Sf(e)),Jf(n,t)}let yu;function Jf(n,e,t){const i=n.type;if(!n.render){if(!e&&yu&&!i.render){const r=i.template||wc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Dt(Dt({isCustomElement:s,delimiters:a},o),l);i.render=yu(r,c)}}n.render=i.render||On}{const r=Ds(n);Li();try{Rm(n)}finally{Ii(),r()}}}const f0={get(n,e){return Ht(n,"get",""),n[e]}};function d0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,f0),slots:n.slots,emit:n.emit,expose:e}}function Ac(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Sf(em(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in cs)return cs[t](n)},has(e,t){return t in e||t in cs}})):n.proxy}function p0(n,e=!0){return Xe(n)?n.displayName||n.name:n.name||e&&n.__name}function m0(n){return Xe(n)&&"__vccOpts"in n}const It=(n,e)=>sm(n,e,$o);function Qf(n,e,t){const i=arguments.length;return i===2?yt(e)&&!qe(e)?Lo(e)?st(n,null,[e]):st(n,e):st(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Lo(t)&&(t=[t]),st(n,e,t))}const g0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hl;const Mu=typeof window<"u"&&window.trustedTypes;if(Mu)try{hl=Mu.createPolicy("vue",{createHTML:n=>n})}catch{}const ed=hl?n=>hl.createHTML(n):n=>n,_0="http://www.w3.org/2000/svg",v0="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,Su=Jn&&Jn.createElement("template"),x0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Jn.createElementNS(_0,n):e==="mathml"?Jn.createElementNS(v0,n):t?Jn.createElement(n,{is:t}):Jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Jn.createTextNode(n),createComment:n=>Jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Su.innerHTML=ed(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Su.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},y0=Symbol("_vtc");function M0(n,e,t){const i=n[y0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Eu=Symbol("_vod"),S0=Symbol("_vsh"),E0=Symbol(""),w0=/(^|;)\s*display\s*:/;function b0(n,e,t){const i=n.style,r=Pt(t);let s=!1;if(t&&!r){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&yo(i,a,"")}else for(const o in e)t[o]==null&&yo(i,o,"");for(const o in t)o==="display"&&(s=!0),yo(i,o,t[o])}else if(r){if(e!==t){const o=i[E0];o&&(t+=";"+o),i.cssText=t,s=w0.test(t)}}else e&&n.removeAttribute("style");Eu in n&&(n[Eu]=s?i.display:"",n[S0]&&(i.display="none"))}const wu=/\s*!important$/;function yo(n,e,t){if(qe(t))t.forEach(i=>yo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=T0(n,e);wu.test(t)?n.setProperty(tr(i),t.replace(wu,""),"important"):n[i]=t}}const bu=["Webkit","Moz","ms"],pa={};function T0(n,e){const t=pa[e];if(t)return t;let i=dn(e);if(i!=="filter"&&i in n)return pa[e]=i;i=Go(i);for(let r=0;r<bu.length;r++){const s=bu[r]+i;if(s in n)return pa[e]=s}return e}const Tu="http://www.w3.org/1999/xlink";function Au(n,e,t,i,r,s=Pp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Tu,e.slice(6,e.length)):n.setAttributeNS(Tu,e,t):t==null||s&&!rf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Wr(t)?String(t):t)}function Ru(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ed(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=rf(t):t==null&&o==="string"?(t="",s=!0):o==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(e)}function A0(n,e,t,i){n.addEventListener(e,t,i)}function R0(n,e,t,i){n.removeEventListener(e,t,i)}const Cu=Symbol("_vei");function C0(n,e,t,i,r=null){const s=n[Cu]||(n[Cu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=P0(e);if(i){const c=s[e]=D0(i,r);A0(n,a,c,l)}else o&&(R0(n,a,o,l),s[e]=void 0)}}const Pu=/(?:Once|Passive|Capture)$/;function P0(n){let e;if(Pu.test(n)){e={};let i;for(;i=n.match(Pu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):tr(n.slice(2)),e]}let ma=0;const L0=Promise.resolve(),I0=()=>ma||(L0.then(()=>ma=0),ma=Date.now());function D0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;zn(U0(i,t.value),e,5,[i])};return t.value=n,t.attached=I0(),t}function U0(n,e){if(qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Lu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,N0=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?M0(n,i,o):e==="style"?b0(n,t,i):Bo(e)?oc(e)||C0(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):F0(n,e,i,o))?(Ru(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Au(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Pt(i))?Ru(n,dn(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Au(n,e,i,o))};function F0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Lu(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Lu(e)&&Pt(t)?!1:e in n}const O0=Dt({patchProp:N0},x0);let Iu;function B0(){return Iu||(Iu=Gm(O0))}const z0=(...n)=>{const e=B0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=G0(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,H0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function H0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function G0(n){return Pt(n)?document.querySelector(n):n}const k0={id:"app"},V0=Zt({__name:"App",setup(n){return(e,t)=>{const i=lu("router-link"),r=lu("router-view");return an(),mn("div",k0,[Ss("nav",null,[st(i,{to:"/3d-bear-arts"},{default:Mn(()=>t[0]||(t[0]=[Sn("Home")])),_:1}),st(i,{to:"/3d-bear-arts/half"},{default:Mn(()=>t[1]||(t[1]=[Sn("New")])),_:1}),st(i,{to:"/3d-bear-arts/sliver"},{default:Mn(()=>t[2]||(t[2]=[Sn("Sliver")])),_:1}),st(i,{to:"/3d-bear-arts/halfTransparent"},{default:Mn(()=>t[3]||(t[3]=[Sn("HalfTranparent")])),_:1}),st(i,{to:"/3d-bear-arts/bluePink"},{default:Mn(()=>t[4]||(t[4]=[Sn("BluePink")])),_:1}),st(i,{to:"/3d-bear-arts/diamond"},{default:Mn(()=>t[5]||(t[5]=[Sn("Diamond")])),_:1}),st(i,{to:"/3d-bear-arts/pink"},{default:Mn(()=>t[6]||(t[6]=[Sn("Pink")])),_:1}),st(i,{to:"/3d-bear-arts/purple"},{default:Mn(()=>t[7]||(t[7]=[Sn("Purple")])),_:1}),st(i,{to:"/3d-bear-arts/blue"},{default:Mn(()=>t[8]||(t[8]=[Sn("Blue")])),_:1}),st(i,{to:"/3d-bear-arts/glass"},{default:Mn(()=>t[9]||(t[9]=[Sn("Glass")])),_:1})]),st(r)])}}}),gn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},W0=gn(V0,[["__scopeId","data-v-32de201e"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Er=typeof document<"u";function td(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function X0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&td(n.default)}const rt=Object.assign;function ga(n,e){const t={};for(const i in e){const r=e[i];t[i]=Pn(r)?r.map(n):n(r)}return t}const hs=()=>{},Pn=Array.isArray,nd=/#/g,q0=/&/g,Y0=/\//g,$0=/=/g,j0=/\?/g,id=/\+/g,K0=/%5B/g,Z0=/%5D/g,rd=/%5E/g,J0=/%60/g,sd=/%7B/g,Q0=/%7C/g,od=/%7D/g,eg=/%20/g;function Rc(n){return encodeURI(""+n).replace(Q0,"|").replace(K0,"[").replace(Z0,"]")}function tg(n){return Rc(n).replace(sd,"{").replace(od,"}").replace(rd,"^")}function fl(n){return Rc(n).replace(id,"%2B").replace(eg,"+").replace(nd,"%23").replace(q0,"%26").replace(J0,"`").replace(sd,"{").replace(od,"}").replace(rd,"^")}function ng(n){return fl(n).replace($0,"%3D")}function ig(n){return Rc(n).replace(nd,"%23").replace(j0,"%3F")}function rg(n){return n==null?"":ig(n).replace(Y0,"%2F")}function Es(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const sg=/\/$/,og=n=>n.replace(sg,"");function _a(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=ug(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Es(o)}}function ag(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Du(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function lg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Fr(e.matched[i],t.matched[r])&&ad(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Fr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ad(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!cg(n[t],e[t]))return!1;return!0}function cg(n,e){return Pn(n)?Uu(n,e):Pn(e)?Uu(e,n):n===e}function Uu(n,e){return Pn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function ug(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ws;(function(n){n.pop="pop",n.push="push"})(ws||(ws={}));var fs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(fs||(fs={}));function hg(n){if(!n)if(Er){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),og(n)}const fg=/^[^#]+#/;function dg(n,e){return n.replace(fg,"#")+e}function pg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const jo=()=>({left:window.scrollX,top:window.scrollY});function mg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=pg(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Nu(n,e){return(history.state?history.state.position-e:-1)+n}const dl=new Map;function gg(n,e){dl.set(n,e)}function _g(n){const e=dl.get(n);return dl.delete(n),e}let vg=()=>location.protocol+"//"+location.host;function ld(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Du(l,"")}return Du(t,n)+i+r}function xg(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=ld(n,location),_=t.value,M=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===_){o=null;return}m=M?f.position-M.position:0}else i(d);r.forEach(p=>{p(t.value,_,{delta:m,type:ws.pop,direction:m?m>0?fs.forward:fs.back:fs.unknown})})};function l(){o=t.value}function c(f){r.push(f);const d=()=>{const _=r.indexOf(f);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(rt({},f.state,{scroll:jo()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Fu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?jo():null}}function yg(n){const{history:e,location:t}=window,i={value:ld(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:vg()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=rt({},e.state,Fu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=rt({},r.value,e.state,{forward:l,scroll:jo()});s(u.current,u,!0);const h=rt({},Fu(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Mg(n){n=hg(n);const e=yg(n),t=xg(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=rt({location:"",base:n,go:i,createHref:dg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Sg(n){return typeof n=="string"||n&&typeof n=="object"}function cd(n){return typeof n=="string"||typeof n=="symbol"}const ud=Symbol("");var Ou;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ou||(Ou={}));function Or(n,e){return rt(new Error,{type:n,[ud]:!0},e)}function Wn(n,e){return n instanceof Error&&ud in n&&(e==null||!!(n.type&e))}const Bu="[^/]+?",Eg={sensitive:!1,strict:!1,start:!0,end:!0},wg=/[.+*?^${}()[\]/\\]/g;function bg(n,e){const t=rt({},Eg,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(wg,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:M,optional:m,regexp:p}=f;s.push({name:_,repeatable:M,optional:m});const b=p||Bu;if(b!==Bu){d+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+S.message)}}let x=M?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),r+=x,d+=20,m&&(d+=-8),M&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",_=s[f-1];h[_.name]=d&&_.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:M,optional:m}=d,p=_ in c?c[_]:"";if(Pn(p)&&!M)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Pn(p)?p.join("/"):p;if(!b)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Tg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function hd(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Tg(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(zu(i))return 1;if(zu(r))return-1}return r.length-i.length}function zu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Ag={type:0,value:""},Rg=/[a-zA-Z0-9_]/;function Cg(n){if(!n)return[[]];if(n==="/")return[[Ag]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:Rg.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function Pg(n,e,t){const i=bg(Cg(n.path),t),r=rt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Lg(n,e){const t=[],i=new Map;e=Vu({strict:!1,end:!0,sensitive:!1},e);function r(h){return i.get(h)}function s(h,f,d){const _=!d,M=Gu(h);M.aliasOf=d&&d.record;const m=Vu(e,h),p=[M];if("alias"in h){const S=typeof h.alias=="string"?[h.alias]:h.alias;for(const I of S)p.push(Gu(rt({},M,{components:d?d.record.components:M.components,path:I,aliasOf:d?d.record:M})))}let b,x;for(const S of p){const{path:I}=S;if(f&&I[0]!=="/"){const C=f.record.path,R=C[C.length-1]==="/"?"":"/";S.path=f.record.path+(I&&R+I)}if(b=Pg(S,f,m),d?d.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),_&&h.name&&!ku(b)&&o(h.name)),fd(b)&&l(b),M.children){const C=M.children;for(let R=0;R<C.length;R++)s(C[R],b,d&&d.children[R])}d=d||b}return x?()=>{o(x)}:hs}function o(h){if(cd(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=Ug(h,t);t.splice(f,0,h),h.record.name&&!ku(h)&&i.set(h.record.name,h)}function c(h,f){let d,_={},M,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw Or(1,{location:h});m=d.record.name,_=rt(Hu(f.params,d.keys.filter(x=>!x.optional).concat(d.parent?d.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),h.params&&Hu(h.params,d.keys.map(x=>x.name))),M=d.stringify(_)}else if(h.path!=null)M=h.path,d=t.find(x=>x.re.test(M)),d&&(_=d.parse(M),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(x=>x.re.test(f.path)),!d)throw Or(1,{location:h,currentLocation:f});m=d.record.name,_=rt({},f.params,h.params),M=d.stringify(_)}const p=[];let b=d;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:M,params:_,matched:p,meta:Dg(p)}}n.forEach(h=>s(h));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Hu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Gu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Ig(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ig(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function ku(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Dg(n){return n.reduce((e,t)=>rt(e,t.meta),{})}function Vu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Ug(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;hd(n,e[s])<0?i=s:t=s+1}const r=Ng(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Ng(n){let e=n;for(;e=e.parent;)if(fd(e)&&hd(n,e)===0)return e}function fd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Fg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(id," "),o=s.indexOf("="),a=Es(o<0?s:s.slice(0,o)),l=o<0?null:Es(s.slice(o+1));if(a in e){let c=e[a];Pn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Wu(n){let e="";for(let t in n){const i=n[t];if(t=ng(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Pn(i)?i.map(s=>s&&fl(s)):[i&&fl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Og(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Pn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Bg=Symbol(""),Xu=Symbol(""),Cc=Symbol(""),dd=Symbol(""),pl=Symbol("");function Kr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ei(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Or(4,{from:t,to:e})):f instanceof Error?l(f):Sg(f)?l(Or(2,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function va(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(td(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Ei(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=X0(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&Ei(d,t,i,o,a,r)()}))}}return s}function qu(n){const e=ri(Cc),t=ri(dd),i=It(()=>{const l=un(n.to);return e.resolve(l)}),r=It(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Fr.bind(null,u));if(f>-1)return f;const d=Yu(l[c-2]);return c>1&&Yu(u)===d&&h[h.length-1].path!==d?h.findIndex(Fr.bind(null,l[c-2])):f}),s=It(()=>r.value>-1&&kg(t.params,i.value.params)),o=It(()=>r.value>-1&&r.value===t.matched.length-1&&ad(t.params,i.value.params));function a(l={}){return Gg(l)?e[un(n.replace)?"replace":"push"](un(n.to)).catch(hs):Promise.resolve()}return{route:i,href:It(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const zg=Zt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qu,setup(n,{slots:e}){const t=Vo(qu(n)),{options:i}=ri(Cc),r=It(()=>({[$u(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[$u(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Qf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Hg=zg;function Gg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function kg(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Pn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Yu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const $u=(n,e,t)=>n??e??t,Vg=Zt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ri(pl),r=It(()=>n.route||i.value),s=ri(Xu,0),o=It(()=>{let c=un(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=It(()=>r.value.matched[o.value]);vo(Xu,It(()=>o.value+1)),vo(Bg,a),vo(pl,r);const l=wt();return Bt(()=>[l.value,a.value,n.name],([c,u,h],[f,d,_])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Fr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(M=>M(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return ju(t.default,{Component:f,route:c});const d=h.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Qf(f,rt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return ju(t.default,{Component:m,route:c})||m}}});function ju(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Wg=Vg;function Xg(n){const e=Lg(n.routes,n),t=n.parseQuery||Fg,i=n.stringifyQuery||Wu,r=n.history,s=Kr(),o=Kr(),a=Kr(),l=tm(pi);let c=pi;Er&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ga.bind(null,N=>""+N),h=ga.bind(null,rg),f=ga.bind(null,Es);function d(N,re){let J,le;return cd(N)?(J=e.getRecordMatcher(N),le=re):le=N,e.addRoute(le,J)}function _(N){const re=e.getRecordMatcher(N);re&&e.removeRoute(re)}function M(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,re){if(re=rt({},re||l.value),typeof N=="string"){const T=_a(t,N,re.path),L=e.resolve({path:T.path},re),F=r.createHref(T.fullPath);return rt(T,L,{params:f(L.params),hash:Es(T.hash),redirectedFrom:void 0,href:F})}let J;if(N.path!=null)J=rt({},N,{path:_a(t,N.path,re.path).path});else{const T=rt({},N.params);for(const L in T)T[L]==null&&delete T[L];J=rt({},N,{params:h(T)}),re.params=h(re.params)}const le=e.resolve(J,re),ye=N.hash||"";le.params=u(f(le.params));const Q=ag(i,rt({},N,{hash:tg(ye),path:le.path})),g=r.createHref(Q);return rt({fullPath:Q,hash:ye,query:i===Wu?Og(N.query):N.query||{}},le,{redirectedFrom:void 0,href:g})}function b(N){return typeof N=="string"?_a(t,N,l.value.path):rt({},N)}function x(N,re){if(c!==N)return Or(8,{from:re,to:N})}function S(N){return R(N)}function I(N){return S(rt(b(N),{replace:!0}))}function C(N){const re=N.matched[N.matched.length-1];if(re&&re.redirect){const{redirect:J}=re;let le=typeof J=="function"?J(N):J;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=b(le):{path:le},le.params={}),rt({query:N.query,hash:N.hash,params:le.path!=null?{}:N.params},le)}}function R(N,re){const J=c=p(N),le=l.value,ye=N.state,Q=N.force,g=N.replace===!0,T=C(J);if(T)return R(rt(b(T),{state:typeof T=="object"?rt({},ye,T.state):ye,force:Q,replace:g}),re||J);const L=J;L.redirectedFrom=re;let F;return!Q&&lg(i,le,J)&&(F=Or(16,{to:L,from:le}),_e(le,le,!0,!1)),(F?Promise.resolve(F):y(L,le)).catch(U=>Wn(U)?Wn(U,2)?U:he(U):O(U,L,le)).then(U=>{if(U){if(Wn(U,2))return R(rt({replace:g},b(U.to),{state:typeof U.to=="object"?rt({},ye,U.to.state):ye,force:Q}),re||L)}else U=Y(L,le,!0,g,ye);return w(L,le,U),U})}function D(N,re){const J=x(N,re);return J?Promise.reject(J):Promise.resolve()}function ne(N){const re=ee.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(N):N()}function y(N,re){let J;const[le,ye,Q]=qg(N,re);J=va(le.reverse(),"beforeRouteLeave",N,re);for(const T of le)T.leaveGuards.forEach(L=>{J.push(Ei(L,N,re))});const g=D.bind(null,N,re);return J.push(g),de(J).then(()=>{J=[];for(const T of s.list())J.push(Ei(T,N,re));return J.push(g),de(J)}).then(()=>{J=va(ye,"beforeRouteUpdate",N,re);for(const T of ye)T.updateGuards.forEach(L=>{J.push(Ei(L,N,re))});return J.push(g),de(J)}).then(()=>{J=[];for(const T of Q)if(T.beforeEnter)if(Pn(T.beforeEnter))for(const L of T.beforeEnter)J.push(Ei(L,N,re));else J.push(Ei(T.beforeEnter,N,re));return J.push(g),de(J)}).then(()=>(N.matched.forEach(T=>T.enterCallbacks={}),J=va(Q,"beforeRouteEnter",N,re,ne),J.push(g),de(J))).then(()=>{J=[];for(const T of o.list())J.push(Ei(T,N,re));return J.push(g),de(J)}).catch(T=>Wn(T,8)?T:Promise.reject(T))}function w(N,re,J){a.list().forEach(le=>ne(()=>le(N,re,J)))}function Y(N,re,J,le,ye){const Q=x(N,re);if(Q)return Q;const g=re===pi,T=Er?history.state:{};J&&(le||g?r.replace(N.fullPath,rt({scroll:g&&T&&T.scroll},ye)):r.push(N.fullPath,ye)),l.value=N,_e(N,re,J,g),he()}let H;function j(){H||(H=r.listen((N,re,J)=>{if(!fe.listening)return;const le=p(N),ye=C(le);if(ye){R(rt(ye,{replace:!0}),le).catch(hs);return}c=le;const Q=l.value;Er&&gg(Nu(Q.fullPath,J.delta),jo()),y(le,Q).catch(g=>Wn(g,12)?g:Wn(g,2)?(R(g.to,le).then(T=>{Wn(T,20)&&!J.delta&&J.type===ws.pop&&r.go(-1,!1)}).catch(hs),Promise.reject()):(J.delta&&r.go(-J.delta,!1),O(g,le,Q))).then(g=>{g=g||Y(le,Q,!1),g&&(J.delta&&!Wn(g,8)?r.go(-J.delta,!1):J.type===ws.pop&&Wn(g,20)&&r.go(-1,!1)),w(le,Q,g)}).catch(hs)}))}let se=Kr(),G=Kr(),K;function O(N,re,J){he(N);const le=G.list();return le.length?le.forEach(ye=>ye(N,re,J)):console.error(N),Promise.reject(N)}function me(){return K&&l.value!==pi?Promise.resolve():new Promise((N,re)=>{se.add([N,re])})}function he(N){return K||(K=!N,j(),se.list().forEach(([re,J])=>N?J(N):re()),se.reset()),N}function _e(N,re,J,le){const{scrollBehavior:ye}=n;if(!Er||!ye)return Promise.resolve();const Q=!J&&_g(Nu(N.fullPath,0))||(le||!J)&&history.state&&history.state.scroll||null;return wf().then(()=>ye(N,re,Q)).then(g=>g&&mg(g)).catch(g=>O(g,N,re))}const Me=N=>r.go(N);let Ie;const ee=new Set,fe={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:M,resolve:p,options:n,push:S,replace:I,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:me,install(N){const re=this;N.component("RouterLink",Hg),N.component("RouterView",Wg),N.config.globalProperties.$router=re,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>un(l)}),Er&&!Ie&&l.value===pi&&(Ie=!0,S(r.location).catch(ye=>{}));const J={};for(const ye in pi)Object.defineProperty(J,ye,{get:()=>l.value[ye],enumerable:!0});N.provide(Cc,re),N.provide(dd,xf(J)),N.provide(pl,l);const le=N.unmount;ee.add(N),N.unmount=function(){ee.delete(N),ee.size<1&&(c=pi,H&&H(),H=null,l.value=pi,Ie=!1,K=!1),le()}}};function de(N){return N.reduce((re,J)=>re.then(()=>ne(J)),Promise.resolve())}return fe}function qg(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Fr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Fr(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pc="169",Yg=0,Ku=1,$g=2,pd=1,jg=2,Zn=3,Pi=0,jt=1,ei=2,Ai=0,Lr=1,Zu=2,Ju=3,Qu=4,Kg=5,qi=100,Zg=101,Jg=102,Qg=103,e_=104,t_=200,n_=201,i_=202,r_=203,ml=204,gl=205,s_=206,o_=207,a_=208,l_=209,c_=210,u_=211,h_=212,f_=213,d_=214,_l=0,vl=1,xl=2,Br=3,yl=4,Ml=5,Sl=6,El=7,md=0,p_=1,m_=2,Ri=0,g_=1,__=2,v_=3,nr=4,x_=5,y_=6,M_=7,gd=300,zr=301,Hr=302,wl=303,bl=304,Ko=306,Tl=1e3,$i=1001,Al=1002,hn=1003,S_=1004,Ys=1005,wn=1006,xa=1007,Ti=1008,si=1009,_d=1010,vd=1011,bs=1012,Lc=1013,Ji=1014,ti=1015,Us=1016,Ic=1017,Dc=1018,Gr=1020,xd=35902,yd=1021,Md=1022,fn=1023,Sd=1024,Ed=1025,Ir=1026,kr=1027,wd=1028,Uc=1029,bd=1030,Nc=1031,Fc=1033,Mo=33776,So=33777,Eo=33778,wo=33779,Rl=35840,Cl=35841,Pl=35842,Ll=35843,Il=36196,Dl=37492,Ul=37496,Nl=37808,Fl=37809,Ol=37810,Bl=37811,zl=37812,Hl=37813,Gl=37814,kl=37815,Vl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,$l=37821,bo=36492,jl=36494,Kl=36495,Td=36283,Zl=36284,Jl=36285,Ql=36286,E_=3200,w_=3201,Ad=0,b_=1,bi="",En="srgb",Di="srgb-linear",Oc="display-p3",Zo="display-p3-linear",Do="linear",ht="srgb",Uo="rec709",No="p3",lr=7680,eh=519,T_=512,A_=513,R_=514,Rd=515,C_=516,P_=517,L_=518,I_=519,th=35044,nh="300 es",ni=2e3,Fo=2001;class Xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const ds=Math.PI/180,Ts=180/Math.PI;function ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Bc(n,e){return(n%e+e)%e}function D_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function U_(n,e,t){return n!==e?(t-n)/(e-n):0}function ps(n,e,t){return(1-t)*n+t*e}function N_(n,e,t,i){return ps(n,e,1-Math.exp(-t*i))}function F_(n,e=1){return e-Math.abs(Bc(n,e*2)-e)}function O_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function B_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function z_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function H_(n,e){return n+Math.random()*(e-n)}function G_(n){return n*(.5-Math.random())}function k_(n){n!==void 0&&(ih=n);let e=ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V_(n){return n*ds}function W_(n){return n*Ts}function X_(n){return(n&n-1)===0&&n!==0}function q_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Y_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $_(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const at={DEG2RAD:ds,RAD2DEG:Ts,generateUUID:ir,clamp:Rt,euclideanModulo:Bc,mapLinear:D_,inverseLerp:U_,lerp:ps,damp:N_,pingpong:F_,smoothstep:O_,smootherstep:B_,randInt:z_,randFloat:H_,randFloatSpread:G_,seededRandom:k_,degToRad:V_,radToDeg:W_,isPowerOfTwo:X_,ceilPowerOfTwo:q_,floorPowerOfTwo:Y_,setQuaternionFromProperEuler:$_,normalize:kt,denormalize:wr};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],M=r[0],m=r[3],p=r[6],b=r[1],x=r[4],S=r[7],I=r[2],C=r[5],R=r[8];return s[0]=o*M+a*b+l*I,s[3]=o*m+a*x+l*C,s[6]=o*p+a*S+l*R,s[1]=c*M+u*b+h*I,s[4]=c*m+u*x+h*C,s[7]=c*p+u*S+h*R,s[2]=f*M+d*b+_*I,s[5]=f*m+d*x+_*C,s[8]=f*p+d*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+i*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=h*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=f*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=d*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new je;function Cd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function As(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function j_(){const n=As("canvas");return n.style.display="block",n}const rh={};function To(n){n in rh||(rh[n]=!0,console.warn(n))}function K_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Z_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function J_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sh=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oh=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zr={[Di]:{transfer:Do,primaries:Uo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[En]:{transfer:ht,primaries:Uo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Zo]:{transfer:Do,primaries:No,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(oh),fromReference:n=>n.applyMatrix3(sh)},[Oc]:{transfer:ht,primaries:No,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(oh),fromReference:n=>n.applyMatrix3(sh).convertLinearToSRGB()}},Q_=new Set([Di,Zo]),tt={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Q_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Zr[e].toReference,r=Zr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Zr[n].primaries},getTransfer:function(n){return n===bi?Do:Zr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Zr[e].luminanceCoefficients)}};function Dr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ma(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let cr;class ev{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cr===void 0&&(cr=As("canvas")),cr.width=e.width,cr.height=e.height;const i=cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=As("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Dr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Dr(t[i]/255)*255):t[i]=Dr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tv=0;class Pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sa(r[o].image)):s.push(Sa(r[o]))}else s=Sa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ev.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nv=0;class qt extends Xr{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=$i,r=$i,s=wn,o=Ti,a=fn,l=si,c=qt.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=ir(),this.name="",this.source=new Pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=gd;qt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(d+1)/2,I=(p+1)/2,C=(u+f)/4,R=(h+M)/4,D=(_+m)/4;return x>S&&x>I?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=R/i):S>I?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=D/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=R/s,r=D/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-M)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iv extends Xr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends iv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ld extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rv extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=M;return}if(h!==M||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*M,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const I=Math.sqrt(x),C=Math.atan2(I,p*b);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const S=a*b;if(l=l*m+f*S,c=c*m+d*S,u=u*m+_*S,h=h*m+M*S,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ah.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new k,ah=new Ns;class Fs{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),js.subVectors(this.max,Jr),ur.subVectors(e.a,Jr),hr.subVectors(e.b,Jr),fr.subVectors(e.c,Jr),mi.subVectors(hr,ur),gi.subVectors(fr,hr),Oi.subVectors(ur,fr);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Oi.z,Oi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Oi.z,0,-Oi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Oi.y,Oi.x,0];return!wa(t,ur,hr,fr,js)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,ur,hr,fr,js))?!1:(Ks.crossVectors(mi,gi),t=[Ks.x,Ks.y,Ks.z],wa(t,ur,hr,fr,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new k,new k,new k,new k,new k,new k,new k,new k],vn=new k,$s=new Fs,ur=new k,hr=new k,fr=new k,mi=new k,gi=new k,Oi=new k,Jr=new k,js=new k,Ks=new k,Bi=new k;function wa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Bi.fromArray(n,s);const a=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),u=i.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sv=new Fs,Qr=new k,ba=new k;class zc{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(ba)),this.expandByPoint(Qr.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new k,Ta=new k,Zs=new k,_i=new k,Aa=new k,Js=new k,Ra=new k;class ov{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ta.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Ta);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zs),a=_i.dot(this.direction),l=-_i.dot(Zs),c=_i.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const M=1/u;h*=M,f*=M,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ta).addScaledVector(Zs,f),d}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){Aa.subVectors(t,e),Js.subVectors(i,e),Ra.crossVectors(Aa,Js);let o=this.direction.dot(Ra),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(Js.crossVectors(_i,Js));if(l<0)return null;const c=a*this.direction.dot(Aa.cross(_i));if(c<0||l+c>o)return null;const u=-a*_i.dot(Ra);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,_,M,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,_,M,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,_,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/dr.setFromMatrixColumn(e,0).length(),s=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,M=c*h;t[0]=f+M*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,M=c*h;t[0]=f-M*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,M=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+M,t[1]=l*h,t[5]=M*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=M-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-M*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+M,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=M*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(av,e,lv)}lookAt(e,t,i){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),vi.crossVectors(i,en),vi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),vi.crossVectors(i,en)),vi.normalize(),Qs.crossVectors(en,vi),r[0]=vi.x,r[4]=Qs.x,r[8]=en.x,r[1]=vi.y,r[5]=Qs.y,r[9]=en.y,r[2]=vi.z,r[6]=Qs.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],M=i[6],m=i[10],p=i[14],b=i[3],x=i[7],S=i[11],I=i[15],C=r[0],R=r[4],D=r[8],ne=r[12],y=r[1],w=r[5],Y=r[9],H=r[13],j=r[2],se=r[6],G=r[10],K=r[14],O=r[3],me=r[7],he=r[11],_e=r[15];return s[0]=o*C+a*y+l*j+c*O,s[4]=o*R+a*w+l*se+c*me,s[8]=o*D+a*Y+l*G+c*he,s[12]=o*ne+a*H+l*K+c*_e,s[1]=u*C+h*y+f*j+d*O,s[5]=u*R+h*w+f*se+d*me,s[9]=u*D+h*Y+f*G+d*he,s[13]=u*ne+h*H+f*K+d*_e,s[2]=_*C+M*y+m*j+p*O,s[6]=_*R+M*w+m*se+p*me,s[10]=_*D+M*Y+m*G+p*he,s[14]=_*ne+M*H+m*K+p*_e,s[3]=b*C+x*y+S*j+I*O,s[7]=b*R+x*w+S*se+I*me,s[11]=b*D+x*Y+S*G+I*he,s[15]=b*ne+x*H+S*K+I*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],M=e[7],m=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+M*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],M=e[13],m=e[14],p=e[15],b=h*m*c-M*f*c+M*l*d-a*m*d-h*l*p+a*f*p,x=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,S=u*M*c-_*h*c+_*a*d-o*M*d-u*a*p+o*h*p,I=_*h*l-u*M*l-_*a*f+o*M*f+u*a*m-o*h*m,C=t*b+i*x+r*S+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(M*f*s-h*m*s-M*r*d+i*m*d+h*r*p-i*f*p)*R,e[2]=(a*m*s-M*l*s+M*r*c-i*m*c-a*r*p+i*l*p)*R,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*R,e[4]=x*R,e[5]=(u*m*s-_*f*s+_*r*d-t*m*d-u*r*p+t*f*p)*R,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*R,e[8]=S*R,e[9]=(_*h*s-u*M*s-_*i*d+t*M*d+u*i*p-t*h*p)*R,e[10]=(o*M*s-_*a*s+_*i*c-t*M*c-o*i*p+t*a*p)*R,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*R,e[12]=I*R,e[13]=(u*M*r-_*h*r+_*i*f-t*M*f-u*i*m+t*h*m)*R,e[14]=(_*a*r-o*M*r-_*i*l+t*M*l+o*i*m-t*a*m)*R,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,M=o*u,m=o*h,p=a*h,b=l*c,x=l*u,S=l*h,I=i.x,C=i.y,R=i.z;return r[0]=(1-(M+p))*I,r[1]=(d+S)*I,r[2]=(_-x)*I,r[3]=0,r[4]=(d-S)*C,r[5]=(1-(f+p))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(_+x)*R,r[9]=(m-b)*R,r[10]=(1-(f+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=dr.set(r[0],r[1],r[2]).length();const o=dr.set(r[4],r[5],r[6]).length(),a=dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/s,u=1/o,h=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ni){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,_;if(a===ni)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Fo)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ni){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,d=(i+r)*u;let _,M;if(a===ni)_=(o+s)*h,M=-2*h;else if(a===Fo)_=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const dr=new k,xn=new ft,av=new k(0,0,0),lv=new k(1,1,1),vi=new k,Qs=new k,en=new k,lh=new ft,ch=new Ns;class Hn{constructor(e=0,t=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ch.setFromEuler(this),this.setFromQuaternion(ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cv=0;const uh=new k,pr=new Ns,Yn=new ft,eo=new k,es=new k,uv=new k,hv=new Ns,hh=new k(1,0,0),fh=new k(0,1,0),dh=new k(0,0,1),ph={type:"added"},fv={type:"removed"},mr={type:"childadded",child:null},Ca={type:"childremoved",child:null};class zt extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new k,t=new Hn,i=new Ns,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new je}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(fh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(fh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?eo.copy(e):eo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(es,eo,this.up):Yn.lookAt(eo,es,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(Yn),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ph),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fv),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ph),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,hv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new k(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new k,$n=new k,Pa=new k,jn=new k,gr=new k,_r=new k,mh=new k,La=new k,Ia=new k,Da=new k,Ua=new ot,Na=new ot,Fa=new ot;class bn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yn.subVectors(r,t),$n.subVectors(i,t),Pa.subVectors(e,t);const o=yn.dot(yn),a=yn.dot($n),l=yn.dot(Pa),c=$n.dot($n),u=$n.dot(Pa),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ua.setScalar(0),Na.setScalar(0),Fa.setScalar(0),Ua.fromBufferAttribute(e,t),Na.fromBufferAttribute(e,i),Fa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ua,s.x),o.addScaledVector(Na,s.y),o.addScaledVector(Fa,s.z),o}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),$n.subVectors(e,t),yn.cross($n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),yn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;gr.subVectors(r,i),_r.subVectors(s,i),La.subVectors(e,i);const l=gr.dot(La),c=_r.dot(La);if(l<=0&&c<=0)return t.copy(i);Ia.subVectors(e,r);const u=gr.dot(Ia),h=_r.dot(Ia);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(gr,o);Da.subVectors(e,s);const d=gr.dot(Da),_=_r.dot(Da);if(_>=0&&d<=_)return t.copy(s);const M=d*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(_r,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return mh.subVectors(s,r),a=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(mh,a);const p=1/(m+M+f);return o=M*p,a=f*p,t.copy(i).addScaledVector(gr,o).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},to={h:0,s:0,l:0};function Oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Bc(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Oa(o,s,e+1/3),this.g=Oa(o,s,e),this.b=Oa(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=En){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const i=Dd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return tt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Rt(Nt.r*255,0,255))*65536+Math.round(Rt(Nt.g*255,0,255))*256+Math.round(Rt(Nt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,s=Nt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=En){tt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==En?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(to);const i=ps(xi.h,to.h,t),r=ps(xi.s,to.s,t),s=ps(xi.l,to.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ge;Ge.NAMES=Dd;let dv=0;class Os extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Lr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ml&&(i.blendSrc=this.blendSrc),this.blendDst!==gl&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Et extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new k,no=new Ae;class Bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=th,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),e}}class Ud extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nd extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pv=0;const cn=new ft,Ba=new zt,vr=new k,tn=new Fs,ts=new Fs,At=new k;class Ln extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cd(e)?Nd:Ud)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(tn.min,ts.min),tn.expandByPoint(At),At.addVectors(tn.max,ts.max),tn.expandByPoint(At)):(tn.expandByPoint(ts.min),tn.expandByPoint(ts.max))}tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(e,c),At.add(vr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new k,l[D]=new k;const c=new k,u=new k,h=new k,f=new Ae,d=new Ae,_=new Ae,M=new k,m=new k;function p(D,ne,y){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,ne),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,D),d.fromBufferAttribute(s,ne),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const w=1/(d.x*_.y-_.x*d.y);isFinite(w)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(w),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(w),a[D].add(M),a[ne].add(M),a[y].add(M),l[D].add(m),l[ne].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,ne=b.length;D<ne;++D){const y=b[D],w=y.start,Y=y.count;for(let H=w,j=w+Y;H<j;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new k,S=new k,I=new k,C=new k;function R(D){I.fromBufferAttribute(r,D),C.copy(I);const ne=a[D];x.copy(ne),x.sub(I.multiplyScalar(I.dot(ne))).normalize(),S.crossVectors(C,ne);const w=S.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,w)}for(let D=0,ne=b.length;D<ne;++D){const y=b[D],w=y.start,Y=y.count;for(let H=w,j=w+Y;H<j;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?d=l[M]*a.data.stride+a.offset:d=l[M]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Bn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gh=new ft,zi=new ov,io=new zc,_h=new k,ro=new k,so=new k,oo=new k,za=new k,ao=new k,vh=new k,lo=new k;class z extends zt{constructor(e=new Ln,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(za.fromBufferAttribute(h,e),o?ao.addScaledVector(za,u):ao.addScaledVector(za.sub(t),u))}t.add(ao)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),zi.copy(e.ray).recast(e.near),!(io.containsPoint(zi.origin)===!1&&(zi.intersectSphere(io,_h)===null||zi.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(gh.copy(s).invert(),zi.copy(e.ray).applyMatrix4(gh),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,I=x;S<I;S+=3){const C=a.getX(S),R=a.getX(S+1),D=a.getX(S+2);r=co(this,p,e,i,c,u,h,C,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const b=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=co(this,o,e,i,c,u,h,b,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,I=x;S<I;S+=3){const C=S,R=S+1,D=S+2;r=co(this,p,e,i,c,u,h,C,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const b=m,x=m+1,S=m+2;r=co(this,o,e,i,c,u,h,b,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function mv(n,e,t,i,r,s,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Pi,a),l===null)return null;lo.copy(a),lo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:n}}function co(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ro),n.getVertexPosition(l,so),n.getVertexPosition(c,oo);const u=mv(n,e,t,i,ro,so,oo,vh);if(u){const h=new k;bn.getBarycoord(vh,ro,so,oo,h),r&&(u.uv=bn.getInterpolatedAttribute(r,a,l,c,h,new Ae)),s&&(u.uv1=bn.getInterpolatedAttribute(s,a,l,c,h,new Ae)),o&&(u.normal=bn.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};bn.getNormal(ro,so,oo,f.normal),u.face=f,u.barycoord=h}return u}class Bs extends Ln{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2));function _(M,m,p,b,x,S,I,C,R,D,ne){const y=S/R,w=I/D,Y=S/2,H=I/2,j=C/2,se=R+1,G=D+1;let K=0,O=0;const me=new k;for(let he=0;he<G;he++){const _e=he*w-H;for(let Me=0;Me<se;Me++){const Ie=Me*y-Y;me[M]=Ie*b,me[m]=_e*x,me[p]=j,c.push(me.x,me.y,me.z),me[M]=0,me[m]=0,me[p]=C>0?1:-1,u.push(me.x,me.y,me.z),h.push(Me/R),h.push(1-he/D),K+=1}}for(let he=0;he<D;he++)for(let _e=0;_e<R;_e++){const Me=f+_e+se*he,Ie=f+_e+se*(he+1),ee=f+(_e+1)+se*(he+1),fe=f+(_e+1)+se*he;l.push(Me,Ie,fe),l.push(Ie,ee,fe),O+=6}a.addGroup(d,O,ne),d+=O,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=Vr(n[t]);for(const r in i)e[r]=i[r]}return e}function gv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const _v={clone:Vr,merge:Vt};var vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xt extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vv,this.fragmentShader=xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=gv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Od extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new k,xh=new Ae,yh=new Ae;class vt extends Od{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,xh,yh),t.subVectors(yh,xh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,yr=1;class Bd extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vt(xr,yr,e,t);r.layers=this.layers,this.add(r);const s=new vt(xr,yr,e,t);s.layers=this.layers,this.add(s);const o=new vt(xr,yr,e,t);o.layers=this.layers,this.add(o);const a=new vt(xr,yr,e,t);a.layers=this.layers,this.add(a);const l=new vt(xr,yr,e,t);l.layers=this.layers,this.add(l);const c=new vt(xr,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Hc extends qt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zd extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bs(5,5,5),s=new xt({name:"CubemapFromEquirect",uniforms:Vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Ai});s.uniforms.tEquirect.value=t;const o=new z(r,s),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=wn),new Bd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ha=new k,yv=new k,Mv=new je;class Wi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ha.subVectors(i,t).cross(yv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ha),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mv.getNormalMatrix(e),r=this.coplanarPoint(Ha).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new zc,uo=new k;class Gc{constructor(e=new Wi,t=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],M=r[10],m=r[11],p=r[12],b=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-d,S-p).normalize(),i[1].setComponents(l+s,f+c,m+d,S+p).normalize(),i[2].setComponents(l+o,f+u,m+_,S+b).normalize(),i[3].setComponents(l-o,f-u,m-_,S-b).normalize(),i[4].setComponents(l-a,f-h,m-M,S-x).normalize(),t===ni)i[5].setComponents(l+a,f+h,m+M,S+x).normalize();else if(t===Fo)i[5].setComponents(a,h,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(uo.x=r.normal.x>0?e.max.x:e.min.x,uo.y=r.normal.y>0?e.max.y:e.min.y,uo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Sv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],M=h[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,h[f]=M)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const M=h[d];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Jo extends Ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],M=[],m=[];for(let p=0;p<u;p++){const b=p*f-o;for(let x=0;x<c;x++){const S=x*h-s;_.push(S,-b,0),M.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const x=b+c*p,S=b+c*(p+1),I=b+1+c*(p+1),C=b+1+c*p;d.push(x,S,C),d.push(S,I,C)}this.setIndex(d),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(M,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wv=`#ifdef USE_ALPHAHASH
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
#endif`,bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cv=`#ifdef USE_AOMAP
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
#endif`,Pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lv=`#ifdef USE_BATCHING
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
#endif`,Iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fv=`#ifdef USE_IRIDESCENCE
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
#endif`,Ov=`#ifdef USE_BUMPMAP
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
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qv=`#define PI 3.141592653589793
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
} // validated`,Yv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$v=`vec3 transformedNormal = objectNormal;
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
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`
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
}`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
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
}`,hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
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
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
#endif`,Mx=`struct PhysicalMaterial {
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
}`,Sx=`
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ix=`#if defined( USE_POINTS_UV )
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
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
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
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
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
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ay=`float getShadowMask() {
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
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`#include <common>
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
}`,Cy=`#if DEPTH_PACKING == 3200
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
}`,Py=`#define DISTANCE
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
}`,Ly=`#define DISTANCE
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Fy=`#include <common>
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
}`,Oy=`uniform vec3 diffuse;
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
}`,By=`#define LAMBERT
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
}`,zy=`#define LAMBERT
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
}`,Hy=`#define MATCAP
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
}`,Gy=`#define MATCAP
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
}`,ky=`#define NORMAL
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
}`,Vy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define PHONG
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
}`,qy=`#define STANDARD
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
}`,Yy=`#define STANDARD
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
}`,$y=`#define TOON
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
}`,jy=`#define TOON
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,Qy=`uniform vec3 color;
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
}`,eM=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Ev,alphahash_pars_fragment:wv,alphamap_fragment:bv,alphamap_pars_fragment:Tv,alphatest_fragment:Av,alphatest_pars_fragment:Rv,aomap_fragment:Cv,aomap_pars_fragment:Pv,batching_pars_vertex:Lv,batching_vertex:Iv,begin_vertex:Dv,beginnormal_vertex:Uv,bsdfs:Nv,iridescence_fragment:Fv,bumpmap_pars_fragment:Ov,clipping_planes_fragment:Bv,clipping_planes_pars_fragment:zv,clipping_planes_pars_vertex:Hv,clipping_planes_vertex:Gv,color_fragment:kv,color_pars_fragment:Vv,color_pars_vertex:Wv,color_vertex:Xv,common:qv,cube_uv_reflection_fragment:Yv,defaultnormal_vertex:$v,displacementmap_pars_vertex:jv,displacementmap_vertex:Kv,emissivemap_fragment:Zv,emissivemap_pars_fragment:Jv,colorspace_fragment:Qv,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:rx,envmap_physical_pars_fragment:mx,envmap_vertex:sx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:hx,lights_lambert_fragment:fx,lights_lambert_pars_fragment:dx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:vx,lights_phong_pars_fragment:xx,lights_physical_fragment:yx,lights_physical_pars_fragment:Mx,lights_fragment_begin:Sx,lights_fragment_maps:Ex,lights_fragment_end:wx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Tx,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Rx,map_fragment:Cx,map_pars_fragment:Px,map_particle_fragment:Lx,map_particle_pars_fragment:Ix,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Nx,morphcolor_vertex:Fx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Bx,morphtarget_vertex:zx,normal_fragment_begin:Hx,normal_fragment_maps:Gx,normal_pars_fragment:kx,normal_pars_vertex:Vx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:$x,iridescence_pars_fragment:jx,opaque_fragment:Kx,packing:Zx,premultiplied_alpha_fragment:Jx,project_vertex:Qx,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:sy,shadowmap_vertex:oy,shadowmask_pars_fragment:ay,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:uy,skinnormal_vertex:hy,specularmap_fragment:fy,specularmap_pars_fragment:dy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:_y,uv_pars_fragment:vy,uv_pars_vertex:xy,uv_vertex:yy,worldpos_vertex:My,background_vert:Sy,background_frag:Ey,backgroundCube_vert:wy,backgroundCube_frag:by,cube_vert:Ty,cube_frag:Ay,depth_vert:Ry,depth_frag:Cy,distanceRGBA_vert:Py,distanceRGBA_frag:Ly,equirect_vert:Iy,equirect_frag:Dy,linedashed_vert:Uy,linedashed_frag:Ny,meshbasic_vert:Fy,meshbasic_frag:Oy,meshlambert_vert:By,meshlambert_frag:zy,meshmatcap_vert:Hy,meshmatcap_frag:Gy,meshnormal_vert:ky,meshnormal_frag:Vy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:qy,meshphysical_frag:Yy,meshtoon_vert:$y,meshtoon_frag:jy,points_vert:Ky,points_frag:Zy,shadow_vert:Jy,shadow_frag:Qy,sprite_vert:eM,sprite_frag:tM},Te={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Fn={basic:{uniforms:Vt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Vt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Vt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Vt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Vt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Vt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Vt([Te.points,Te.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Vt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Vt([Te.common,Te.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Vt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Vt([Te.sprite,Te.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Vt([Te.common,Te.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Vt([Te.lights,Te.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Fn.physical={uniforms:Vt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ho={r:0,b:0,g:0},Gi=new Hn,nM=new ft;function iM(n,e,t,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function M(b){let x=!1;const S=_(b);S===null?p(a,l):S&&S.isColor&&(p(S,1),x=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Ko)?(u===void 0&&(u=new z(new Bs(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Vr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Gi.copy(x.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(Gi)),u.material.toneMapped=tt.getTransfer(S.colorSpace)!==ht,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new z(new Jo(2,2),new xt({name:"BackgroundMaterial",uniforms:Vr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(ho,Fd(n)),i.buffers.color.setClear(ho.r,ho.g,ho.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:M,addToRenderList:m}}function rM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,w,Y,H,j){let se=!1;const G=h(H,Y,w);s!==G&&(s=G,c(s.object)),se=d(y,H,Y,j),se&&_(y,H,Y,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,S(y,w,Y,H),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,w,Y){const H=Y.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let se=j[w.id];se===void 0&&(se={},j[w.id]=se);let G=se[H];return G===void 0&&(G=f(l()),se[H]=G),G}function f(y){const w=[],Y=[],H=[];for(let j=0;j<t;j++)w[j]=0,Y[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:Y,attributeDivisors:H,object:y,attributes:{},index:null}}function d(y,w,Y,H){const j=s.attributes,se=w.attributes;let G=0;const K=Y.getAttributes();for(const O in K)if(K[O].location>=0){const he=j[O];let _e=se[O];if(_e===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),he===void 0||he.attribute!==_e||_e&&he.data!==_e.data)return!0;G++}return s.attributesNum!==G||s.index!==H}function _(y,w,Y,H){const j={},se=w.attributes;let G=0;const K=Y.getAttributes();for(const O in K)if(K[O].location>=0){let he=se[O];he===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(he=y.instanceColor));const _e={};_e.attribute=he,he&&he.data&&(_e.data=he.data),j[O]=_e,G++}s.attributes=j,s.attributesNum=G,s.index=H}function M(){const y=s.newAttributes;for(let w=0,Y=y.length;w<Y;w++)y[w]=0}function m(y){p(y,0)}function p(y,w){const Y=s.newAttributes,H=s.enabledAttributes,j=s.attributeDivisors;Y[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),j[y]!==w&&(n.vertexAttribDivisor(y,w),j[y]=w)}function b(){const y=s.newAttributes,w=s.enabledAttributes;for(let Y=0,H=w.length;Y<H;Y++)w[Y]!==y[Y]&&(n.disableVertexAttribArray(Y),w[Y]=0)}function x(y,w,Y,H,j,se,G){G===!0?n.vertexAttribIPointer(y,w,Y,j,se):n.vertexAttribPointer(y,w,Y,H,j,se)}function S(y,w,Y,H){M();const j=H.attributes,se=Y.getAttributes(),G=w.defaultAttributeValues;for(const K in se){const O=se[K];if(O.location>=0){let me=j[K];if(me===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),me!==void 0){const he=me.normalized,_e=me.itemSize,Me=e.get(me);if(Me===void 0)continue;const Ie=Me.buffer,ee=Me.type,fe=Me.bytesPerElement,de=ee===n.INT||ee===n.UNSIGNED_INT||me.gpuType===Lc;if(me.isInterleavedBufferAttribute){const N=me.data,re=N.stride,J=me.offset;if(N.isInstancedInterleavedBuffer){for(let le=0;le<O.locationSize;le++)p(O.location+le,N.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let le=0;le<O.locationSize;le++)m(O.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let le=0;le<O.locationSize;le++)x(O.location+le,_e/O.locationSize,ee,he,re*fe,(J+_e/O.locationSize*le)*fe,de)}else{if(me.isInstancedBufferAttribute){for(let N=0;N<O.locationSize;N++)p(O.location+N,me.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let N=0;N<O.locationSize;N++)m(O.location+N);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let N=0;N<O.locationSize;N++)x(O.location+N,_e/O.locationSize,ee,he,_e*fe,_e/O.locationSize*N*fe,de)}}else if(G!==void 0){const he=G[K];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(O.location,he);break;case 3:n.vertexAttrib3fv(O.location,he);break;case 4:n.vertexAttrib4fv(O.location,he);break;default:n.vertexAttrib1fv(O.location,he)}}}}b()}function I(){D();for(const y in i){const w=i[y];for(const Y in w){const H=w[Y];for(const j in H)u(H[j].object),delete H[j];delete w[Y]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const Y in w){const H=w[Y];for(const j in H)u(H[j].object),delete H[j];delete w[Y]}delete i[y.id]}function R(y){for(const w in i){const Y=i[w];if(Y[y.id]===void 0)continue;const H=Y[y.id];for(const j in H)u(H[j].object),delete H[j];delete Y[y.id]}}function D(){ne(),o=!0,s!==r&&(s=r,c(s.object))}function ne(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:ne,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function sM(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let M=0;M<h;M++)_+=u[M];for(let M=0;M<f.length;M++)t.update(_,i,f[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==si&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ti&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:I,maxSamples:C}}function aM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Wi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,x=b*4;let S=p.clippingState||null;l.value=S,S=u(_,f,x,d);for(let I=0;I!==x;++I)S[I]=t[I];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const p=d+M*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=d;x!==M;++x,S+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function lM(n){let e=new WeakMap;function t(o,a){return a===wl?o.mapping=zr:a===bl&&(o.mapping=Hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===wl||a===bl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Gd extends Od{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Tr=4,Mh=[.125,.215,.35,.446,.526,.582],Yi=20,Ga=new Gd,Sh=new Ge;let ka=null,Va=0,Wa=0,Xa=!1;const Xi=(1+Math.sqrt(5))/2,Mr=1/Xi,Eh=[new k(-Xi,Mr,0),new k(Xi,Mr,0),new k(-Mr,0,Xi),new k(Mr,0,Xi),new k(0,Xi,-Mr),new k(0,Xi,Mr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ka=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Va,Wa),this._renderer.xr.enabled=Xa,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Us,format:fn,colorSpace:Di,depthBuffer:!1},r=bh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cM(s)),this._blurMaterial=uM(s,e,t)}return r}_compileMaterial(e){const t=new z(this._lodPlanes[0],e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,i,r){const a=new vt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Sh),u.toneMapping=Ri,u.autoClear=!1;const d=new Et({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),_=new z(new Bs,d);let M=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,M=!0):(d.color.copy(Sh),M=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;fo(r,b*x,p>2?x:0,x,x),u.setRenderTarget(r),M&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zr||e.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ga)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Eh[(r-s-1)%Eh.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new z(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Yi-1),M=s/_,m=isFinite(s)?1+Math.floor(u*M):Yi;m>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const p=[];let b=0;for(let R=0;R<Yi;++R){const D=R/M,ne=Math.exp(-D*D/2);p.push(ne),R===0?b+=ne:R<m&&(b+=2*ne)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],I=3*S*(r>x-Tr?r-x+Tr:0),C=4*(this._cubeSize-S);fo(t,I,C,3*S,2*S),l.setRenderTarget(t),l.render(h,Ga)}}function cM(n){const e=[],t=[],i=[];let r=n;const s=n-Tr+1+Mh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Tr?l=Mh[o-n+Tr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,M=3,m=2,p=1,b=new Float32Array(M*_*d),x=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let C=0;C<d;C++){const R=C%3*2/3-1,D=C>2?0:-1,ne=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];b.set(ne,M*_*C),x.set(f,m*_*C);const y=[C,C,C,C,C,C];S.set(y,p*_*C)}const I=new Ln;I.setAttribute("position",new Bn(b,M)),I.setAttribute("uv",new Bn(x,m)),I.setAttribute("faceIndex",new Bn(S,p)),e.push(I),r>Tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bh(n,e,t){const i=new Qi(n,e,t);return i.texture.mapping=Ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function uM(n,e,t){const i=new Float32Array(Yi),r=new k(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Th(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ah(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function hM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===wl||l===bl,u=l===zr||l===Hr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new wh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new wh(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function fM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&To("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dM(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let m=0,p=M.length;m<p;m++)e.remove(M[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const M=d[_];for(let m=0,p=M.length;m<p;m++)e.update(M[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let M=0;if(d!==null){const b=d.array;M=d.version;for(let x=0,S=b.length;x<S;x+=3){const I=b[x+0],C=b[x+1],R=b[x+2];f.push(I,C,C,R,R,I)}}else if(_!==void 0){const b=_.array;M=_.version;for(let x=0,S=b.length/3-1;x<S;x+=3){const I=x+0,C=x+1,R=x+2;f.push(I,C,C,R,R,I)}}else return;const m=new(Cd(f)?Nd:Ud)(f,1);m.version=M;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function pM(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,f*o,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function h(f,d,_,M){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,M,0,_);let p=0;for(let b=0;b<_;b++)p+=d[b];for(let b=0;b<M.length;b++)t.update(p,i,M[b])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gM(n,e,t){const i=new WeakMap,r=new ot;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let I=a.attributes.position.count*S,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*C*4*h),D=new Ld(R,I,C,h);D.type=ti,D.needsUpdate=!0;const ne=S*4;for(let w=0;w<h;w++){const Y=p[w],H=b[w],j=x[w],se=I*C*4*w;for(let G=0;G<Y.count;G++){const K=G*ne;_===!0&&(r.fromBufferAttribute(Y,G),R[se+K+0]=r.x,R[se+K+1]=r.y,R[se+K+2]=r.z,R[se+K+3]=0),M===!0&&(r.fromBufferAttribute(H,G),R[se+K+4]=r.x,R[se+K+5]=r.y,R[se+K+6]=r.z,R[se+K+7]=0),m===!0&&(r.fromBufferAttribute(j,G),R[se+K+8]=r.x,R[se+K+9]=r.y,R[se+K+10]=r.z,R[se+K+11]=j.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new Ae(I,C)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const M=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function _M(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class kd extends qt{constructor(e,t,i,r,s,o,a,l,c,u=Ir){if(u!==Ir&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ir&&(i=Ji),i===void 0&&u===kr&&(i=Gr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vd=new qt,Rh=new kd(1,1),Wd=new Ld,Xd=new rv,qd=new Hc,Ch=[],Ph=[],Lh=new Float32Array(16),Ih=new Float32Array(9),Dh=new Float32Array(4);function qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ch[r];if(s===void 0&&(s=new Float32Array(r),Ch[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qo(n,e){let t=Ph[e];t===void 0&&(t=new Int32Array(e),Ph[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function SM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Dh.set(i),n.uniformMatrix2fv(this.addr,!1,Dh),Tt(t,i)}}function EM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Ih.set(i),n.uniformMatrix3fv(this.addr,!1,Ih),Tt(t,i)}}function wM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Lh.set(i),n.uniformMatrix4fv(this.addr,!1,Lh),Tt(t,i)}}function bM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function CM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function PM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function DM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Rh.compareFunction=Rd,s=Rh):s=Vd,t.setTexture2D(e||s,r)}function UM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xd,r)}function NM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qd,r)}function FM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Wd,r)}function OM(n){switch(n){case 5126:return vM;case 35664:return xM;case 35665:return yM;case 35666:return MM;case 35674:return SM;case 35675:return EM;case 35676:return wM;case 5124:case 35670:return bM;case 35667:case 35671:return TM;case 35668:case 35672:return AM;case 35669:case 35673:return RM;case 5125:return CM;case 36294:return PM;case 36295:return LM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return UM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return FM}}function BM(n,e){n.uniform1fv(this.addr,e)}function zM(n,e){const t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function HM(n,e){const t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function GM(n,e){const t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function kM(n,e){const t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function VM(n,e){const t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function WM(n,e){const t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function XM(n,e){n.uniform1iv(this.addr,e)}function qM(n,e){n.uniform2iv(this.addr,e)}function YM(n,e){n.uniform3iv(this.addr,e)}function $M(n,e){n.uniform4iv(this.addr,e)}function jM(n,e){n.uniform1uiv(this.addr,e)}function KM(n,e){n.uniform2uiv(this.addr,e)}function ZM(n,e){n.uniform3uiv(this.addr,e)}function JM(n,e){n.uniform4uiv(this.addr,e)}function QM(n,e,t){const i=this.cache,r=e.length,s=Qo(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Vd,s[o])}function eS(n,e,t){const i=this.cache,r=e.length,s=Qo(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Xd,s[o])}function tS(n,e,t){const i=this.cache,r=e.length,s=Qo(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||qd,s[o])}function nS(n,e,t){const i=this.cache,r=e.length,s=Qo(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Wd,s[o])}function iS(n){switch(n){case 5126:return BM;case 35664:return zM;case 35665:return HM;case 35666:return GM;case 35674:return kM;case 35675:return VM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return qM;case 35668:case 35672:return YM;case 35669:case 35673:return $M;case 5125:return jM;case 36294:return KM;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return nS}}class rS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=OM(t.type)}}class sS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iS(t.type)}}class oS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Uh(n,e){n.seq.push(e),n.map[e.id]=e}function aS(n,e,t){const i=n.name,r=i.length;for(qa.lastIndex=0;;){const s=qa.exec(i),o=qa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Uh(t,c===void 0?new rS(a,n,e):new sS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new oS(a),Uh(t,h)),t=h}}}class Ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);aS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Nh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lS=37297;let cS=0;function uS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function hS(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===No&&t===Uo?i="LinearDisplayP3ToLinearSRGB":e===Uo&&t===No&&(i="LinearSRGBToLinearDisplayP3"),n){case Di:case Zo:return[i,"LinearTransferOETF"];case En:case Oc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Fh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+uS(n.getShaderSource(e),o)}else return r}function fS(n,e){const t=hS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dS(n,e){let t;switch(e){case g_:t="Linear";break;case __:t="Reinhard";break;case v_:t="Cineon";break;case nr:t="ACESFilmic";break;case y_:t="AgX";break;case M_:t="Neutral";break;case x_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new k;function pS(){tt.getLuminanceCoefficients(po);const n=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function gS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _S(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function rs(n){return n!==""}function Oh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(n){return n.replace(vS,yS)}const xS=new Map;function yS(n,e){let t=$e[e];if(t===void 0){const i=xS.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ec(t)}const MS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(n){return n.replace(MS,SS)}function SS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ES(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function wS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zr:case Hr:e="ENVMAP_TYPE_CUBE";break;case Ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function TS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case md:e="ENVMAP_BLENDING_MULTIPLY";break;case p_:e="ENVMAP_BLENDING_MIX";break;case m_:e="ENVMAP_BLENDING_ADD";break}return e}function AS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function RS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ES(t),c=wS(t),u=bS(t),h=TS(t),f=AS(t),d=mS(t),_=gS(s),M=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),p=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ri?dS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,fS("linearToOutputTexel",t.outputColorSpace),pS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),o=ec(o),o=Oh(o,t),o=Bh(o,t),a=ec(a),a=Oh(a,t),a=Bh(a,t),o=zh(o),a=zh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=b+m+o,S=b+p+a,I=Nh(r,r.VERTEX_SHADER,x),C=Nh(r,r.FRAGMENT_SHADER,S);r.attachShader(M,I),r.attachShader(M,C),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(w){if(n.debug.checkShaderErrors){const Y=r.getProgramInfoLog(M).trim(),H=r.getShaderInfoLog(I).trim(),j=r.getShaderInfoLog(C).trim();let se=!0,G=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,I,C);else{const K=Fh(r,I,"vertex"),O=Fh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+Y+`
`+K+`
`+O)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(H===""||j==="")&&(G=!1);G&&(w.diagnostics={runnable:se,programLog:Y,vertexShader:{log:H,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(I),r.deleteShader(C),D=new Ao(r,M),ne=_S(r,M)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let ne;this.getAttributes=function(){return ne===void 0&&R(this),ne};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,lS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cS++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=C,this}let CS=0;class PS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new LS(e),t.set(e,i)),i}}class LS{constructor(e){this.id=CS++,this.code=e,this.usedTimes=0}}function IS(n,e,t,i,r,s,o){const a=new Id,l=new PS,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,d=r.vertexTextures;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,w,Y,H,j){const se=H.fog,G=j.geometry,K=y.isMeshStandardMaterial?H.environment:null,O=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),me=O&&O.mapping===Ko?O.image.height:null,he=M[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const _e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Me=_e!==void 0?_e.length:0;let Ie=0;G.morphAttributes.position!==void 0&&(Ie=1),G.morphAttributes.normal!==void 0&&(Ie=2),G.morphAttributes.color!==void 0&&(Ie=3);let ee,fe,de,N;if(he){const $t=Fn[he];ee=$t.vertexShader,fe=$t.fragmentShader}else ee=y.vertexShader,fe=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),N=l.getFragmentShaderID(y);const re=n.getRenderTarget(),J=j.isInstancedMesh===!0,le=j.isBatchedMesh===!0,ye=!!y.map,Q=!!y.matcap,g=!!O,T=!!y.aoMap,L=!!y.lightMap,F=!!y.bumpMap,U=!!y.normalMap,Z=!!y.displacementMap,te=!!y.emissiveMap,E=!!y.metalnessMap,v=!!y.roughnessMap,P=y.anisotropy>0,W=y.clearcoat>0,V=y.dispersion>0,X=y.iridescence>0,ue=y.sheen>0,ce=y.transmission>0,ve=P&&!!y.anisotropyMap,Re=W&&!!y.clearcoatMap,pe=W&&!!y.clearcoatNormalMap,xe=W&&!!y.clearcoatRoughnessMap,Ne=X&&!!y.iridescenceMap,De=X&&!!y.iridescenceThicknessMap,Se=ue&&!!y.sheenColorMap,Ve=ue&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,We=!!y.specularColorMap,B=!!y.specularIntensityMap,Ce=ce&&!!y.transmissionMap,ae=ce&&!!y.thicknessMap,ge=!!y.gradientMap,we=!!y.alphaMap,Pe=y.alphaTest>0,Ye=!!y.alphaHash,mt=!!y.extensions;let St=Ri;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(St=n.toneMapping);const Ze={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:fe,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:N,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:le,batchingColor:le&&j._colorsTexture!==null,instancing:J,instancingColor:J&&j.instanceColor!==null,instancingMorph:J&&j.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Di,alphaToCoverage:!!y.alphaToCoverage,map:ye,matcap:Q,envMap:g,envMapMode:g&&O.mapping,envMapCubeUVHeight:me,aoMap:T,lightMap:L,bumpMap:F,normalMap:U,displacementMap:d&&Z,emissiveMap:te,normalMapObjectSpace:U&&y.normalMapType===b_,normalMapTangentSpace:U&&y.normalMapType===Ad,metalnessMap:E,roughnessMap:v,anisotropy:P,anisotropyMap:ve,clearcoat:W,clearcoatMap:Re,clearcoatNormalMap:pe,clearcoatRoughnessMap:xe,dispersion:V,iridescence:X,iridescenceMap:Ne,iridescenceThicknessMap:De,sheen:ue,sheenColorMap:Se,sheenRoughnessMap:Ve,specularMap:Ue,specularColorMap:We,specularIntensityMap:B,transmission:ce,transmissionMap:Ce,thicknessMap:ae,gradientMap:ge,opaque:y.transparent===!1&&y.blending===Lr&&y.alphaToCoverage===!1,alphaMap:we,alphaTest:Pe,alphaHash:Ye,combine:y.combine,mapUv:ye&&m(y.map.channel),aoMapUv:T&&m(y.aoMap.channel),lightMapUv:L&&m(y.lightMap.channel),bumpMapUv:F&&m(y.bumpMap.channel),normalMapUv:U&&m(y.normalMap.channel),displacementMapUv:Z&&m(y.displacementMap.channel),emissiveMapUv:te&&m(y.emissiveMap.channel),metalnessMapUv:E&&m(y.metalnessMap.channel),roughnessMapUv:v&&m(y.roughnessMap.channel),anisotropyMapUv:ve&&m(y.anisotropyMap.channel),clearcoatMapUv:Re&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(y.sheenRoughnessMap.channel),specularMapUv:Ue&&m(y.specularMap.channel),specularColorMapUv:We&&m(y.specularColorMap.channel),specularIntensityMapUv:B&&m(y.specularIntensityMap.channel),transmissionMapUv:Ce&&m(y.transmissionMap.channel),thicknessMapUv:ae&&m(y.thicknessMap.channel),alphaMapUv:we&&m(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(U||P),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!G.attributes.uv&&(ye||we),fog:!!se,useFog:y.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:ye&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ei,flipSided:y.side===jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:mt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&y.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function b(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Y in y.defines)w.push(Y),w.push(y.defines[Y]);return y.isRawShaderMaterial===!1&&(x(w,y),S(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function I(y){const w=M[y.type];let Y;if(w){const H=Fn[w];Y=_v.clone(H.uniforms)}else Y=y.uniforms;return Y}function C(y,w){let Y;for(let H=0,j=u.length;H<j;H++){const se=u[H];if(se.cacheKey===w){Y=se,++Y.usedTimes;break}}return Y===void 0&&(Y=new RS(n,w,y,s),u.push(Y)),Y}function R(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function D(y){l.remove(y)}function ne(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:I,acquireProgram:C,releaseProgram:R,releaseShaderCache:D,programs:u,dispose:ne}}function DS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function US(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,_,M,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:M,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=M,p.group=m),e++,p}function a(h,f,d,_,M,m){const p=o(h,f,d,_,M,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,_,M,m){const p=o(h,f,d,_,M,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||US),i.length>1&&i.sort(f||Gh),r.length>1&&r.sort(f||Gh)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function NS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new kh,n.set(i,[o])):r>=s.length?(o=new kh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function FS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ge};break;case"SpotLight":t={position:new k,direction:new k,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function OS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let BS=0;function zS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function HS(n){const e=new FS,t=OS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new ft,o=new ft;function a(c){let u=0,h=0,f=0;for(let ne=0;ne<9;ne++)i.probe[ne].set(0,0,0);let d=0,_=0,M=0,m=0,p=0,b=0,x=0,S=0,I=0,C=0,R=0;c.sort(zS);for(let ne=0,y=c.length;ne<y;ne++){const w=c[ne],Y=w.color,H=w.intensity,j=w.distance,se=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=Y.r*H,h+=Y.g*H,f+=Y.b*H;else if(w.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(w.sh.coefficients[G],H);R++}else if(w.isDirectionalLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,O=t.get(w);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,i.directionalShadow[d]=O,i.directionalShadowMap[d]=se,i.directionalShadowMatrix[d]=w.shadow.matrix,b++}i.directional[d]=G,d++}else if(w.isSpotLight){const G=e.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(Y).multiplyScalar(H),G.distance=j,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,i.spot[M]=G;const K=w.shadow;if(w.map&&(i.spotLightMap[I]=w.map,I++,K.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[M]=K.matrix,w.castShadow){const O=t.get(w);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,i.spotShadow[M]=O,i.spotShadowMap[M]=se,S++}M++}else if(w.isRectAreaLight){const G=e.get(w);G.color.copy(Y).multiplyScalar(H),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=G,m++}else if(w.isPointLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const K=w.shadow,O=t.get(w);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,O.shadowCameraNear=K.camera.near,O.shadowCameraFar=K.camera.far,i.pointShadow[_]=O,i.pointShadowMap[_]=se,i.pointShadowMatrix[_]=w.shadow.matrix,x++}i.point[_]=G,_++}else if(w.isHemisphereLight){const G=e.get(w);G.skyColor.copy(w.color).multiplyScalar(H),G.groundColor.copy(w.groundColor).multiplyScalar(H),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==d||D.pointLength!==_||D.spotLength!==M||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==x||D.numSpotShadows!==S||D.numSpotMaps!==I||D.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.directionalLength=d,D.pointLength=_,D.spotLength=M,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=x,D.numSpotShadows=S,D.numSpotMaps=I,D.numLightProbes=R,i.version=BS++)}function l(c,u){let h=0,f=0,d=0,_=0,M=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const x=c[p];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function Vh(n){const e=new HS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function GS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Vh(n),e.set(r,[a])):s>=o.length?(a=new Vh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class kS extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VS extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
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
}`;function qS(n,e,t){let i=new Gc;const r=new Ae,s=new Ae,o=new ot,a=new kS({depthPacking:w_}),l=new VS,c={},u=t.maxTextureSize,h={[Pi]:jt,[jt]:Pi,[ei]:ei},f=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ln;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new z(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let p=this.type;this.render=function(C,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const ne=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Ai),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const H=p!==Zn&&this.type===Zn,j=p===Zn&&this.type!==Zn;for(let se=0,G=C.length;se<G;se++){const K=C[se],O=K.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const me=O.getFrameExtents();if(r.multiply(me),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,O.mapSize.y=s.y)),O.map===null||H===!0||j===!0){const _e=this.type!==Zn?{minFilter:hn,magFilter:hn}:{};O.map!==null&&O.map.dispose(),O.map=new Qi(r.x,r.y,_e),O.map.texture.name=K.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const he=O.getViewportCount();for(let _e=0;_e<he;_e++){const Me=O.getViewport(_e);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),Y.viewport(o),O.updateMatrices(K,_e),i=O.getFrustum(),S(R,D,O.camera,K,this.type)}O.isPointLightShadow!==!0&&this.type===Zn&&b(O,D),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(ne,y,w)};function b(C,R){const D=e.update(M);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,D,f,M,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,D,d,M,null)}function x(C,R,D,ne){let y=null;const w=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)y=w;else if(y=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=y.uuid,H=R.uuid;let j=c[Y];j===void 0&&(j={},c[Y]=j);let se=j[H];se===void 0&&(se=y.clone(),j[H]=se,R.addEventListener("dispose",I)),y=se}if(y.visible=R.visible,y.wireframe=R.wireframe,ne===Zn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Y=n.properties.get(y);Y.light=D}return y}function S(C,R,D,ne,y){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Zn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const H=e.update(C),j=C.material;if(Array.isArray(j)){const se=H.groups;for(let G=0,K=se.length;G<K;G++){const O=se[G],me=j[O.materialIndex];if(me&&me.visible){const he=x(C,me,ne,y);C.onBeforeShadow(n,C,R,D,H,he,O),n.renderBufferDirect(D,null,H,he,C,O),C.onAfterShadow(n,C,R,D,H,he,O)}}}else if(j.visible){const se=x(C,j,ne,y);C.onBeforeShadow(n,C,R,D,H,se,null),n.renderBufferDirect(D,null,H,se,C,null),C.onAfterShadow(n,C,R,D,H,se,null)}}const Y=C.children;for(let H=0,j=Y.length;H<j;H++)S(Y[H],R,D,ne,y)}function I(C){C.target.removeEventListener("dispose",I);for(const D in c){const ne=c[D],y=C.target.uuid;y in ne&&(ne[y].dispose(),delete ne[y])}}}const YS={[_l]:vl,[xl]:Sl,[yl]:El,[Br]:Ml,[vl]:_l,[Sl]:xl,[El]:yl,[Ml]:Br};function $S(n){function e(){let B=!1;const Ce=new ot;let ae=null;const ge=new ot(0,0,0,0);return{setMask:function(we){ae!==we&&!B&&(n.colorMask(we,we,we,we),ae=we)},setLocked:function(we){B=we},setClear:function(we,Pe,Ye,mt,St){St===!0&&(we*=mt,Pe*=mt,Ye*=mt),Ce.set(we,Pe,Ye,mt),ge.equals(Ce)===!1&&(n.clearColor(we,Pe,Ye,mt),ge.copy(Ce))},reset:function(){B=!1,ae=null,ge.set(-1,0,0,0)}}}function t(){let B=!1,Ce=!1,ae=null,ge=null,we=null;return{setReversed:function(Pe){Ce=Pe},setTest:function(Pe){Pe?de(n.DEPTH_TEST):N(n.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!B&&(n.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(Ce&&(Pe=YS[Pe]),ge!==Pe){switch(Pe){case _l:n.depthFunc(n.NEVER);break;case vl:n.depthFunc(n.ALWAYS);break;case xl:n.depthFunc(n.LESS);break;case Br:n.depthFunc(n.LEQUAL);break;case yl:n.depthFunc(n.EQUAL);break;case Ml:n.depthFunc(n.GEQUAL);break;case Sl:n.depthFunc(n.GREATER);break;case El:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Pe}},setLocked:function(Pe){B=Pe},setClear:function(Pe){we!==Pe&&(n.clearDepth(Pe),we=Pe)},reset:function(){B=!1,ae=null,ge=null,we=null}}}function i(){let B=!1,Ce=null,ae=null,ge=null,we=null,Pe=null,Ye=null,mt=null,St=null;return{setTest:function(Ze){B||(Ze?de(n.STENCIL_TEST):N(n.STENCIL_TEST))},setMask:function(Ze){Ce!==Ze&&!B&&(n.stencilMask(Ze),Ce=Ze)},setFunc:function(Ze,$t,kn){(ae!==Ze||ge!==$t||we!==kn)&&(n.stencilFunc(Ze,$t,kn),ae=Ze,ge=$t,we=kn)},setOp:function(Ze,$t,kn){(Pe!==Ze||Ye!==$t||mt!==kn)&&(n.stencilOp(Ze,$t,kn),Pe=Ze,Ye=$t,mt=kn)},setLocked:function(Ze){B=Ze},setClear:function(Ze){St!==Ze&&(n.clearStencil(Ze),St=Ze)},reset:function(){B=!1,Ce=null,ae=null,ge=null,we=null,Pe=null,Ye=null,mt=null,St=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,M=null,m=null,p=null,b=null,x=null,S=null,I=null,C=new Ge(0,0,0),R=0,D=!1,ne=null,y=null,w=null,Y=null,H=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,G=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),se=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),se=G>=2);let O=null,me={};const he=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Me=new ot().fromArray(he),Ie=new ot().fromArray(_e);function ee(B,Ce,ae,ge){const we=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(B,Pe),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<ae;Ye++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Ce+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Pe}const fe={};fe[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(n.DEPTH_TEST),s.setFunc(Br),L(!1),F(Ku),de(n.CULL_FACE),g(Ai);function de(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function N(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function re(B,Ce){return u[B]!==Ce?(n.bindFramebuffer(B,Ce),u[B]=Ce,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ce),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function J(B,Ce){let ae=f,ge=!1;if(B){ae=h.get(Ce),ae===void 0&&(ae=[],h.set(Ce,ae));const we=B.textures;if(ae.length!==we.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,Ye=we.length;Pe<Ye;Pe++)ae[Pe]=n.COLOR_ATTACHMENT0+Pe;ae.length=we.length,ge=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ge=!0);ge&&n.drawBuffers(ae)}function le(B){return d!==B?(n.useProgram(B),d=B,!0):!1}const ye={[qi]:n.FUNC_ADD,[Zg]:n.FUNC_SUBTRACT,[Jg]:n.FUNC_REVERSE_SUBTRACT};ye[Qg]=n.MIN,ye[e_]=n.MAX;const Q={[t_]:n.ZERO,[n_]:n.ONE,[i_]:n.SRC_COLOR,[ml]:n.SRC_ALPHA,[c_]:n.SRC_ALPHA_SATURATE,[a_]:n.DST_COLOR,[s_]:n.DST_ALPHA,[r_]:n.ONE_MINUS_SRC_COLOR,[gl]:n.ONE_MINUS_SRC_ALPHA,[l_]:n.ONE_MINUS_DST_COLOR,[o_]:n.ONE_MINUS_DST_ALPHA,[u_]:n.CONSTANT_COLOR,[h_]:n.ONE_MINUS_CONSTANT_COLOR,[f_]:n.CONSTANT_ALPHA,[d_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,Ce,ae,ge,we,Pe,Ye,mt,St,Ze){if(B===Ai){_===!0&&(N(n.BLEND),_=!1);return}if(_===!1&&(de(n.BLEND),_=!0),B!==Kg){if(B!==M||Ze!==D){if((m!==qi||x!==qi)&&(n.blendEquation(n.FUNC_ADD),m=qi,x=qi),Ze)switch(B){case Lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zu:n.blendFunc(n.ONE,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,b=null,S=null,I=null,C.set(0,0,0),R=0,M=B,D=Ze}return}we=we||Ce,Pe=Pe||ae,Ye=Ye||ge,(Ce!==m||we!==x)&&(n.blendEquationSeparate(ye[Ce],ye[we]),m=Ce,x=we),(ae!==p||ge!==b||Pe!==S||Ye!==I)&&(n.blendFuncSeparate(Q[ae],Q[ge],Q[Pe],Q[Ye]),p=ae,b=ge,S=Pe,I=Ye),(mt.equals(C)===!1||St!==R)&&(n.blendColor(mt.r,mt.g,mt.b,St),C.copy(mt),R=St),M=B,D=!1}function T(B,Ce){B.side===ei?N(n.CULL_FACE):de(n.CULL_FACE);let ae=B.side===jt;Ce&&(ae=!ae),L(ae),B.blending===Lr&&B.transparent===!1?g(Ai):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const ge=B.stencilWrite;o.setTest(ge),ge&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Z(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):N(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){ne!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),ne=B)}function F(B){B!==Yg?(de(n.CULL_FACE),B!==y&&(B===Ku?n.cullFace(n.BACK):B===$g?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):N(n.CULL_FACE),y=B}function U(B){B!==w&&(se&&n.lineWidth(B),w=B)}function Z(B,Ce,ae){B?(de(n.POLYGON_OFFSET_FILL),(Y!==Ce||H!==ae)&&(n.polygonOffset(Ce,ae),Y=Ce,H=ae)):N(n.POLYGON_OFFSET_FILL)}function te(B){B?de(n.SCISSOR_TEST):N(n.SCISSOR_TEST)}function E(B){B===void 0&&(B=n.TEXTURE0+j-1),O!==B&&(n.activeTexture(B),O=B)}function v(B,Ce,ae){ae===void 0&&(O===null?ae=n.TEXTURE0+j-1:ae=O);let ge=me[ae];ge===void 0&&(ge={type:void 0,texture:void 0},me[ae]=ge),(ge.type!==B||ge.texture!==Ce)&&(O!==ae&&(n.activeTexture(ae),O=ae),n.bindTexture(B,Ce||fe[B]),ge.type=B,ge.texture=Ce)}function P(){const B=me[O];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(B){Me.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Me.copy(B))}function Se(B){Ie.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Ie.copy(B))}function Ve(B,Ce){let ae=l.get(Ce);ae===void 0&&(ae=new WeakMap,l.set(Ce,ae));let ge=ae.get(B);ge===void 0&&(ge=n.getUniformBlockIndex(Ce,B.name),ae.set(B,ge))}function Ue(B,Ce){const ge=l.get(Ce).get(B);a.get(Ce)!==ge&&(n.uniformBlockBinding(Ce,ge,B.__bindingPointIndex),a.set(Ce,ge))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},O=null,me={},u={},h=new WeakMap,f=[],d=null,_=!1,M=null,m=null,p=null,b=null,x=null,S=null,I=null,C=new Ge(0,0,0),R=0,D=!1,ne=null,y=null,w=null,Y=null,H=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:N,bindFramebuffer:re,drawBuffers:J,useProgram:le,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:F,setLineWidth:U,setPolygonOffset:Z,setScissorTest:te,activeTexture:E,bindTexture:v,unbindTexture:P,compressedTexImage2D:W,compressedTexImage3D:V,texImage2D:xe,texImage3D:Ne,updateUBOMapping:Ve,uniformBlockBinding:Ue,texStorage2D:Re,texStorage3D:pe,texSubImage2D:X,texSubImage3D:ue,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:De,viewport:Se,reset:We}}function Wh(n,e,t,i){const r=jS(i);switch(t){case yd:return n*e;case Sd:return n*e;case Ed:return n*e*2;case wd:return n*e/r.components*r.byteLength;case Uc:return n*e/r.components*r.byteLength;case bd:return n*e*2/r.components*r.byteLength;case Nc:return n*e*2/r.components*r.byteLength;case Md:return n*e*3/r.components*r.byteLength;case fn:return n*e*4/r.components*r.byteLength;case Fc:return n*e*4/r.components*r.byteLength;case Mo:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eo:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Ll:return Math.max(n,16)*Math.max(e,8)/4;case Rl:case Pl:return Math.max(n,8)*Math.max(e,8)/2;case Il:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bo:case jl:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Td:case Zl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jS(n){switch(n){case si:case _d:return{byteLength:1,components:1};case bs:case vd:case Us:return{byteLength:2,components:1};case Ic:case Dc:return{byteLength:2,components:4};case Ji:case Lc:case ti:return{byteLength:4,components:1};case xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function KS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return d?new OffscreenCanvas(E,v):As("canvas")}function M(E,v,P){let W=1;const V=te(E);if((V.width>P||V.height>P)&&(W=P/Math.max(V.width,V.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(W*V.width),ue=Math.floor(W*V.height);h===void 0&&(h=_(X,ue));const ce=v?_(X,ue):h;return ce.width=X,ce.height=ue,ce.getContext("2d").drawImage(E,0,0,X,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+X+"x"+ue+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==hn&&E.minFilter!==wn}function p(E){n.generateMipmap(E)}function b(E,v,P,W,V=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=v;if(v===n.RED&&(P===n.FLOAT&&(X=n.R32F),P===n.HALF_FLOAT&&(X=n.R16F),P===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.R8UI),P===n.UNSIGNED_SHORT&&(X=n.R16UI),P===n.UNSIGNED_INT&&(X=n.R32UI),P===n.BYTE&&(X=n.R8I),P===n.SHORT&&(X=n.R16I),P===n.INT&&(X=n.R32I)),v===n.RG&&(P===n.FLOAT&&(X=n.RG32F),P===n.HALF_FLOAT&&(X=n.RG16F),P===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RG8UI),P===n.UNSIGNED_SHORT&&(X=n.RG16UI),P===n.UNSIGNED_INT&&(X=n.RG32UI),P===n.BYTE&&(X=n.RG8I),P===n.SHORT&&(X=n.RG16I),P===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RGB8UI),P===n.UNSIGNED_SHORT&&(X=n.RGB16UI),P===n.UNSIGNED_INT&&(X=n.RGB32UI),P===n.BYTE&&(X=n.RGB8I),P===n.SHORT&&(X=n.RGB16I),P===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),P===n.UNSIGNED_INT&&(X=n.RGBA32UI),P===n.BYTE&&(X=n.RGBA8I),P===n.SHORT&&(X=n.RGBA16I),P===n.INT&&(X=n.RGBA32I)),v===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),v===n.RGBA){const ue=V?Do:tt.getTransfer(W);P===n.FLOAT&&(X=n.RGBA32F),P===n.HALF_FLOAT&&(X=n.RGBA16F),P===n.UNSIGNED_BYTE&&(X=ue===ht?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(E,v){let P;return E?v===null||v===Ji||v===Gr?P=n.DEPTH24_STENCIL8:v===ti?P=n.DEPTH32F_STENCIL8:v===bs&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ji||v===Gr?P=n.DEPTH_COMPONENT24:v===ti?P=n.DEPTH_COMPONENT32F:v===bs&&(P=n.DEPTH_COMPONENT16),P}function S(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==hn&&E.minFilter!==wn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function I(E){const v=E.target;v.removeEventListener("dispose",I),R(v),v.isVideoTexture&&u.delete(v)}function C(E){const v=E.target;v.removeEventListener("dispose",C),ne(v)}function R(E){const v=i.get(E);if(v.__webglInit===void 0)return;const P=E.source,W=f.get(P);if(W){const V=W[v.__cacheKey];V.usedTimes--,V.usedTimes===0&&D(E),Object.keys(W).length===0&&f.delete(P)}i.remove(E)}function D(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const P=E.source,W=f.get(P);delete W[v.__cacheKey],o.memory.textures--}function ne(E){const v=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let V=0;V<v.__webglFramebuffer[W].length;V++)n.deleteFramebuffer(v.__webglFramebuffer[W][V]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const P=E.textures;for(let W=0,V=P.length;W<V;W++){const X=i.get(P[W]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(P[W])}i.remove(E)}let y=0;function w(){y=0}function Y(){const E=y;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),y+=1,E}function H(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function j(E,v){const P=i.get(E);if(E.isVideoTexture&&U(E),E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){const W=E.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(P,E,v);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+v)}function se(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){Ie(P,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+v)}function G(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){Ie(P,E,v);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+v)}function K(E,v){const P=i.get(E);if(E.version>0&&P.__version!==E.version){ee(P,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+v)}const O={[Tl]:n.REPEAT,[$i]:n.CLAMP_TO_EDGE,[Al]:n.MIRRORED_REPEAT},me={[hn]:n.NEAREST,[S_]:n.NEAREST_MIPMAP_NEAREST,[Ys]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[xa]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},he={[T_]:n.NEVER,[I_]:n.ALWAYS,[A_]:n.LESS,[Rd]:n.LEQUAL,[R_]:n.EQUAL,[L_]:n.GEQUAL,[C_]:n.GREATER,[P_]:n.NOTEQUAL};function _e(E,v){if(v.type===ti&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===wn||v.magFilter===xa||v.magFilter===Ys||v.magFilter===Ti||v.minFilter===wn||v.minFilter===xa||v.minFilter===Ys||v.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,O[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,O[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,O[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==Ys&&v.minFilter!==Ti||v.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Me(E,v){let P=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",I));const W=v.source;let V=f.get(W);V===void 0&&(V={},f.set(W,V));const X=H(v);if(X!==E.__cacheKey){V[X]===void 0&&(V[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),V[X].usedTimes++;const ue=V[E.__cacheKey];ue!==void 0&&(V[E.__cacheKey].usedTimes--,ue.usedTimes===0&&D(v)),E.__cacheKey=X,E.__webglTexture=V[X].texture}return P}function Ie(E,v,P){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const V=Me(E,v),X=v.source;t.bindTexture(W,E.__webglTexture,n.TEXTURE0+P);const ue=i.get(X);if(X.version!==ue.__version||V===!0){t.activeTexture(n.TEXTURE0+P);const ce=tt.getPrimaries(tt.workingColorSpace),ve=v.colorSpace===bi?null:tt.getPrimaries(v.colorSpace),Re=v.colorSpace===bi||ce===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let pe=M(v.image,!1,r.maxTextureSize);pe=Z(v,pe);const xe=s.convert(v.format,v.colorSpace),Ne=s.convert(v.type);let De=b(v.internalFormat,xe,Ne,v.colorSpace,v.isVideoTexture);_e(W,v);let Se;const Ve=v.mipmaps,Ue=v.isVideoTexture!==!0,We=ue.__version===void 0||V===!0,B=X.dataReady,Ce=S(v,pe);if(v.isDepthTexture)De=x(v.format===kr,v.type),We&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,De,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,De,pe.width,pe.height,0,xe,Ne,null));else if(v.isDataTexture)if(Ve.length>0){Ue&&We&&t.texStorage2D(n.TEXTURE_2D,Ce,De,Ve[0].width,Ve[0].height);for(let ae=0,ge=Ve.length;ae<ge;ae++)Se=Ve[ae],Ue?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,xe,Ne,Se.data):t.texImage2D(n.TEXTURE_2D,ae,De,Se.width,Se.height,0,xe,Ne,Se.data);v.generateMipmaps=!1}else Ue?(We&&t.texStorage2D(n.TEXTURE_2D,Ce,De,pe.width,pe.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,xe,Ne,pe.data)):t.texImage2D(n.TEXTURE_2D,0,De,pe.width,pe.height,0,xe,Ne,pe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ue&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,De,Ve[0].width,Ve[0].height,pe.depth);for(let ae=0,ge=Ve.length;ae<ge;ae++)if(Se=Ve[ae],v.format!==fn)if(xe!==null)if(Ue){if(B)if(v.layerUpdates.size>0){const we=Wh(Se.width,Se.height,v.format,v.type);for(const Pe of v.layerUpdates){const Ye=Se.data.subarray(Pe*we/Se.data.BYTES_PER_ELEMENT,(Pe+1)*we/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Pe,Se.width,Se.height,1,xe,Ye,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,pe.depth,xe,Se.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,De,Se.width,Se.height,pe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,pe.depth,xe,Ne,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,De,Se.width,Se.height,pe.depth,0,xe,Ne,Se.data)}else{Ue&&We&&t.texStorage2D(n.TEXTURE_2D,Ce,De,Ve[0].width,Ve[0].height);for(let ae=0,ge=Ve.length;ae<ge;ae++)Se=Ve[ae],v.format!==fn?xe!==null?Ue?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,xe,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,xe,Ne,Se.data):t.texImage2D(n.TEXTURE_2D,ae,De,Se.width,Se.height,0,xe,Ne,Se.data)}else if(v.isDataArrayTexture)if(Ue){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,De,pe.width,pe.height,pe.depth),B)if(v.layerUpdates.size>0){const ae=Wh(pe.width,pe.height,v.format,v.type);for(const ge of v.layerUpdates){const we=pe.data.subarray(ge*ae/pe.data.BYTES_PER_ELEMENT,(ge+1)*ae/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,pe.width,pe.height,1,xe,Ne,we)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,xe,Ne,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,pe.width,pe.height,pe.depth,0,xe,Ne,pe.data);else if(v.isData3DTexture)Ue?(We&&t.texStorage3D(n.TEXTURE_3D,Ce,De,pe.width,pe.height,pe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,xe,Ne,pe.data)):t.texImage3D(n.TEXTURE_3D,0,De,pe.width,pe.height,pe.depth,0,xe,Ne,pe.data);else if(v.isFramebufferTexture){if(We)if(Ue)t.texStorage2D(n.TEXTURE_2D,Ce,De,pe.width,pe.height);else{let ae=pe.width,ge=pe.height;for(let we=0;we<Ce;we++)t.texImage2D(n.TEXTURE_2D,we,De,ae,ge,0,xe,Ne,null),ae>>=1,ge>>=1}}else if(Ve.length>0){if(Ue&&We){const ae=te(Ve[0]);t.texStorage2D(n.TEXTURE_2D,Ce,De,ae.width,ae.height)}for(let ae=0,ge=Ve.length;ae<ge;ae++)Se=Ve[ae],Ue?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe,Ne,Se):t.texImage2D(n.TEXTURE_2D,ae,De,xe,Ne,Se);v.generateMipmaps=!1}else if(Ue){if(We){const ae=te(pe);t.texStorage2D(n.TEXTURE_2D,Ce,De,ae.width,ae.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ne,pe)}else t.texImage2D(n.TEXTURE_2D,0,De,xe,Ne,pe);m(v)&&p(W),ue.__version=X.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ee(E,v,P){if(v.image.length!==6)return;const W=Me(E,v),V=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+P);const X=i.get(V);if(V.version!==X.__version||W===!0){t.activeTexture(n.TEXTURE0+P);const ue=tt.getPrimaries(tt.workingColorSpace),ce=v.colorSpace===bi?null:tt.getPrimaries(v.colorSpace),ve=v.colorSpace===bi||ue===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let ge=0;ge<6;ge++)!Re&&!pe?xe[ge]=M(v.image[ge],!0,r.maxCubemapSize):xe[ge]=pe?v.image[ge].image:v.image[ge],xe[ge]=Z(v,xe[ge]);const Ne=xe[0],De=s.convert(v.format,v.colorSpace),Se=s.convert(v.type),Ve=b(v.internalFormat,De,Se,v.colorSpace),Ue=v.isVideoTexture!==!0,We=X.__version===void 0||W===!0,B=V.dataReady;let Ce=S(v,Ne);_e(n.TEXTURE_CUBE_MAP,v);let ae;if(Re){Ue&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ve,Ne.width,Ne.height);for(let ge=0;ge<6;ge++){ae=xe[ge].mipmaps;for(let we=0;we<ae.length;we++){const Pe=ae[we];v.format!==fn?De!==null?Ue?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,0,0,Pe.width,Pe.height,De,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,Ve,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,0,0,Pe.width,Pe.height,De,Se,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,Ve,Pe.width,Pe.height,0,De,Se,Pe.data)}}}else{if(ae=v.mipmaps,Ue&&We){ae.length>0&&Ce++;const ge=te(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ve,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(pe){Ue?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,xe[ge].width,xe[ge].height,De,Se,xe[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ve,xe[ge].width,xe[ge].height,0,De,Se,xe[ge].data);for(let we=0;we<ae.length;we++){const Ye=ae[we].image[ge].image;Ue?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,0,0,Ye.width,Ye.height,De,Se,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,Ve,Ye.width,Ye.height,0,De,Se,Ye.data)}}else{Ue?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,De,Se,xe[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ve,De,Se,xe[ge]);for(let we=0;we<ae.length;we++){const Pe=ae[we];Ue?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,0,0,De,Se,Pe.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,Ve,De,Se,Pe.image[ge])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),X.__version=V.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function fe(E,v,P,W,V,X){const ue=s.convert(P.format,P.colorSpace),ce=s.convert(P.type),ve=b(P.internalFormat,ue,ce,P.colorSpace);if(!i.get(v).__hasExternalTextures){const pe=Math.max(1,v.width>>X),xe=Math.max(1,v.height>>X);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?t.texImage3D(V,X,ve,pe,xe,v.depth,0,ue,ce,null):t.texImage2D(V,X,ve,pe,xe,0,ue,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,V,i.get(P).__webglTexture,0,L(v)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,V,i.get(P).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(E,v,P){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const W=v.depthTexture,V=W&&W.isDepthTexture?W.type:null,X=x(v.stencilBuffer,V),ue=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=L(v);F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,X,v.width,v.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,E)}else{const W=v.textures;for(let V=0;V<W.length;V++){const X=W[V],ue=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),ve=b(X.internalFormat,ue,ce,X.colorSpace),Re=L(v);P&&F(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ve,v.width,v.height):F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const W=i.get(v.depthTexture).__webglTexture,V=L(v);if(v.depthTexture.format===Ir)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(v.depthTexture.format===kr)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function re(E){const v=i.get(E),P=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const W=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const V=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",V)};W.addEventListener("dispose",V),v.__depthDisposeCallback=V}v.__boundDepthTexture=W}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");N(v.__webglFramebuffer,E)}else if(P){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),de(v.__webglDepthbuffer[W],E,!1);else{const V=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),de(v.__webglDepthbuffer,E,!1);else{const W=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,V)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function J(E,v,P){const W=i.get(E);v!==void 0&&fe(W.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&re(E)}function le(E){const v=E.texture,P=i.get(E),W=i.get(v);E.addEventListener("dispose",C);const V=E.textures,X=E.isWebGLCubeRenderTarget===!0,ue=V.length>1;if(ue||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),X){P.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[ce]=[];for(let ve=0;ve<v.mipmaps.length;ve++)P.__webglFramebuffer[ce][ve]=n.createFramebuffer()}else P.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)P.__webglFramebuffer[ce]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(ue)for(let ce=0,ve=V.length;ce<ve;ce++){const Re=i.get(V[ce]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&F(E)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ce=0;ce<V.length;ce++){const ve=V[ce];P.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ce]);const Re=s.convert(ve.format,ve.colorSpace),pe=s.convert(ve.type),xe=b(ve.internalFormat,Re,pe,ve.colorSpace,E.isXRRenderTarget===!0),Ne=L(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,xe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,P.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),de(P.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)fe(P.__webglFramebuffer[ce][ve],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else fe(P.__webglFramebuffer[ce],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ce=0,ve=V.length;ce<ve;ce++){const Re=V[ce],pe=i.get(Re);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),_e(n.TEXTURE_2D,Re),fe(P.__webglFramebuffer,E,Re,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Re)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,W.__webglTexture),_e(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)fe(P.__webglFramebuffer[ve],E,v,n.COLOR_ATTACHMENT0,ce,ve);else fe(P.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,ce,0);m(v)&&p(ce),t.unbindTexture()}E.depthBuffer&&re(E)}function ye(E){const v=E.textures;for(let P=0,W=v.length;P<W;P++){const V=v[P];if(m(V)){const X=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(V).__webglTexture;t.bindTexture(X,ue),p(X),t.unbindTexture()}}}const Q=[],g=[];function T(E){if(E.samples>0){if(F(E)===!1){const v=E.textures,P=E.width,W=E.height;let V=n.COLOR_BUFFER_BIT;const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(E),ce=v.length>1;if(ce)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);const Re=i.get(v[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,P,W,0,0,P,W,V,n.NEAREST),l===!0&&(Q.length=0,g.length=0,Q.push(n.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Q.push(X),g.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);const Re=i.get(v[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(E){return Math.min(r.maxSamples,E.samples)}function F(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Z(E,v){const P=E.colorSpace,W=E.format,V=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||P!==Di&&P!==bi&&(tt.getTransfer(P)===ht?(W!==fn||V!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),v}function te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=w,this.setTexture2D=j,this.setTexture2DArray=se,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=J,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=F}function ZS(n,e){function t(i,r=bi){let s;const o=tt.getTransfer(r);if(i===si)return n.UNSIGNED_BYTE;if(i===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_d)return n.BYTE;if(i===vd)return n.SHORT;if(i===bs)return n.UNSIGNED_SHORT;if(i===Lc)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===Us)return n.HALF_FLOAT;if(i===yd)return n.ALPHA;if(i===Md)return n.RGB;if(i===fn)return n.RGBA;if(i===Sd)return n.LUMINANCE;if(i===Ed)return n.LUMINANCE_ALPHA;if(i===Ir)return n.DEPTH_COMPONENT;if(i===kr)return n.DEPTH_STENCIL;if(i===wd)return n.RED;if(i===Uc)return n.RED_INTEGER;if(i===bd)return n.RG;if(i===Nc)return n.RG_INTEGER;if(i===Fc)return n.RGBA_INTEGER;if(i===Mo||i===So||i===Eo||i===wo)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rl||i===Cl||i===Pl||i===Ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Dl||i===Ul)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Il||i===Dl)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ul)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nl||i===Fl||i===Ol||i===Bl||i===zl||i===Hl||i===Gl||i===kl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===$l)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ol)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bo||i===jl||i===Kl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bo)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Td||i===Zl||i===Jl||i===Ql)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class JS extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pt extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QS={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const eE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tE=`
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

}`;class nE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xt({vertexShader:eE,fragmentShader:tE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new Jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iE extends Xr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const M=new nE,m=t.getContextAttributes();let p=null,b=null;const x=[],S=[],I=new Ae;let C=null;const R=new vt;R.layers.enable(1),R.viewport=new ot;const D=new vt;D.layers.enable(2),D.viewport=new ot;const ne=[R,D],y=new JS;y.layers.enable(1),y.layers.enable(2);let w=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=x[ee];return fe===void 0&&(fe=new Ya,x[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=x[ee];return fe===void 0&&(fe=new Ya,x[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=x[ee];return fe===void 0&&(fe=new Ya,x[ee]=fe),fe.getHandSpace()};function H(ee){const fe=S.indexOf(ee.inputSource);if(fe===-1)return;const de=x[fe];de!==void 0&&(de.update(ee.inputSource,ee.frame,c||o),de.dispatchEvent({type:ee.type,data:ee.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",se);for(let ee=0;ee<x.length;ee++){const fe=S[ee];fe!==null&&(S[ee]=null,x[ee].disconnect(fe))}w=null,Y=null,M.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,b=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Qi(d.framebufferWidth,d.framebufferHeight,{format:fn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,de=null,N=null;m.depth&&(N=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?kr:Ir,de=m.stencil?Gr:Ji);const re={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Qi(f.textureWidth,f.textureHeight,{format:fn,type:si,depthTexture:new kd(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function se(ee){for(let fe=0;fe<ee.removed.length;fe++){const de=ee.removed[fe],N=S.indexOf(de);N>=0&&(S[N]=null,x[N].disconnect(de))}for(let fe=0;fe<ee.added.length;fe++){const de=ee.added[fe];let N=S.indexOf(de);if(N===-1){for(let J=0;J<x.length;J++)if(J>=S.length){S.push(de),N=J;break}else if(S[J]===null){S[J]=de,N=J;break}if(N===-1)break}const re=x[N];re&&re.connect(de)}}const G=new k,K=new k;function O(ee,fe,de){G.setFromMatrixPosition(fe.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);const N=G.distanceTo(K),re=fe.projectionMatrix.elements,J=de.projectionMatrix.elements,le=re[14]/(re[10]-1),ye=re[14]/(re[10]+1),Q=(re[9]+1)/re[5],g=(re[9]-1)/re[5],T=(re[8]-1)/re[0],L=(J[8]+1)/J[0],F=le*T,U=le*L,Z=N/(-T+L),te=Z*-T;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(te),ee.translateZ(Z),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),re[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const E=le+Z,v=ye+Z,P=F-te,W=U+(N-te),V=Q*ye/v*E,X=g*ye/v*E;ee.projectionMatrix.makePerspective(P,W,V,X,E,v),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function me(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let fe=ee.near,de=ee.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(de=M.depthFar)),y.near=D.near=R.near=fe,y.far=D.far=R.far=de,(w!==y.near||Y!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,Y=y.far);const N=ee.parent,re=y.cameras;me(y,N);for(let J=0;J<re.length;J++)me(re[J],N);re.length===2?O(y,R,D):y.projectionMatrix.copy(R.projectionMatrix),he(ee,y,N)};function he(ee,fe,de){de===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(de.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ts*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let _e=null;function Me(ee,fe){if(u=fe.getViewerPose(c||o),_=fe,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let N=!1;de.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let J=0;J<de.length;J++){const le=de[J];let ye=null;if(d!==null)ye=d.getViewport(le);else{const g=h.getViewSubImage(f,le);ye=g.viewport,J===0&&(e.setRenderTargetTextures(b,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(b))}let Q=ne[J];Q===void 0&&(Q=new vt,Q.layers.enable(J),Q.viewport=new ot,ne[J]=Q),Q.matrix.fromArray(le.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(le.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ye.x,ye.y,ye.width,ye.height),J===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(Q)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")){const J=h.getDepthInformation(de[0]);J&&J.isValid&&J.texture&&M.init(e,J,r.renderState)}}for(let de=0;de<x.length;de++){const N=S[de],re=x[de];N!==null&&re!==void 0&&re.update(N,fe,c||o)}_e&&_e(ee,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Ie=new Hd;Ie.setAnimationLoop(Me),this.setAnimationLoop=function(ee){_e=ee},this.dispose=function(){}}}const ki=new Hn,rE=new ft;function sE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Fd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),x=b.envMap,S=b.envMapRotation;x&&(m.envMap.value=x,ki.copy(S),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(rE.makeRotationFromEuler(ki)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const S=x.program;i.uniformBlockBinding(b,S)}function c(b,x){let S=r[b.id];S===void 0&&(_(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",m));const I=x.program;i.updateUBOMapping(b,I);const C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function u(b){const x=h();b.__bindingPointIndex=x;const S=n.createBuffer(),I=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=r[b.id],S=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,R=S.length;C<R;C++){const D=Array.isArray(S[C])?S[C]:[S[C]];for(let ne=0,y=D.length;ne<y;ne++){const w=D[ne];if(d(w,C,ne,I)===!0){const Y=w.__offset,H=Array.isArray(w.value)?w.value:[w.value];let j=0;for(let se=0;se<H.length;se++){const G=H[se],K=M(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,Y+j,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,j),j+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,x,S,I){const C=b.value,R=x+"_"+S;if(I[R]===void 0)return typeof C=="number"||typeof C=="boolean"?I[R]=C:I[R]=C.clone(),!0;{const D=I[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return I[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(b){const x=b.uniforms;let S=0;const I=16;for(let R=0,D=x.length;R<D;R++){const ne=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,w=ne.length;y<w;y++){const Y=ne[y],H=Array.isArray(Y.value)?Y.value:[Y.value];for(let j=0,se=H.length;j<se;j++){const G=H[j],K=M(G),O=S%I,me=O%K.boundary,he=O+me;S+=me,he!==0&&I-he<K.storage&&(S+=I-he),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=K.storage}}}const C=S%I;return C>0&&(S+=I-C),b.__size=S,b.__cache={},this}function M(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class li{constructor(e={}){const{canvas:t=j_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let M=null,m=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=Ri,this.toneMappingExposure=1;const x=this;let S=!1,I=0,C=0,R=null,D=-1,ne=null;const y=new ot,w=new ot;let Y=null;const H=new Ge(0);let j=0,se=t.width,G=t.height,K=1,O=null,me=null;const he=new ot(0,0,se,G),_e=new ot(0,0,se,G);let Me=!1;const Ie=new Gc;let ee=!1,fe=!1;const de=new ft,N=new ft,re=new k,J=new ot,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Q(){return R===null?K:1}let g=i;function T(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pc}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),g===null){const q="webgl2";if(g=T(q,A),g===null)throw T(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,F,U,Z,te,E,v,P,W,V,X,ue,ce,ve,Re,pe,xe,Ne,De,Se,Ve,Ue,We,B;function Ce(){L=new fM(g),L.init(),Ue=new ZS(g,L),F=new oM(g,L,e,Ue),U=new $S(g),F.reverseDepthBuffer&&U.buffers.depth.setReversed(!0),Z=new mM(g),te=new DS,E=new KS(g,L,U,te,F,Ue,Z),v=new lM(x),P=new hM(x),W=new Sv(g),We=new rM(g,W),V=new dM(g,W,Z,We),X=new _M(g,V,W,Z),De=new gM(g,F,E),pe=new aM(te),ue=new IS(x,v,P,L,F,We,pe),ce=new sE(x,te),ve=new NS,Re=new GS(L),Ne=new iM(x,v,P,U,X,f,l),xe=new qS(x,X,F),B=new oE(g,Z,F,U),Se=new sM(g,L,Z),Ve=new pM(g,L,Z),Z.programs=ue.programs,x.capabilities=F,x.extensions=L,x.properties=te,x.renderLists=ve,x.shadowMap=xe,x.state=U,x.info=Z}Ce();const ae=new iE(x,g);this.xr=ae,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(se,G,!1))},this.getSize=function(A){return A.set(se,G)},this.setSize=function(A,q,ie=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,G=q,t.width=Math.floor(A*K),t.height=Math.floor(q*K),ie===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(se*K,G*K).floor()},this.setDrawingBufferSize=function(A,q,ie){se=A,G=q,K=ie,t.width=Math.floor(A*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(he)},this.setViewport=function(A,q,ie,oe){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,q,ie,oe),U.viewport(y.copy(he).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(_e)},this.setScissor=function(A,q,ie,oe){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,q,ie,oe),U.scissor(w.copy(_e).multiplyScalar(K).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(A){U.setScissorTest(Me=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(A=!0,q=!0,ie=!0){let oe=0;if(A){let $=!1;if(R!==null){const Ee=R.texture.format;$=Ee===Fc||Ee===Nc||Ee===Uc}if($){const Ee=R.texture.type,Le=Ee===si||Ee===Ji||Ee===bs||Ee===Gr||Ee===Ic||Ee===Dc,Fe=Ne.getClearColor(),Oe=Ne.getClearAlpha(),He=Fe.r,ke=Fe.g,Be=Fe.b;Le?(d[0]=He,d[1]=ke,d[2]=Be,d[3]=Oe,g.clearBufferuiv(g.COLOR,0,d)):(_[0]=He,_[1]=ke,_[2]=Be,_[3]=Oe,g.clearBufferiv(g.COLOR,0,_))}else oe|=g.COLOR_BUFFER_BIT}q&&(oe|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ie&&(oe|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ve.dispose(),Re.dispose(),te.dispose(),v.dispose(),P.dispose(),X.dispose(),We.dispose(),B.dispose(),ue.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",qc),ae.removeEventListener("sessionend",Yc),Ui.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Z.autoReset,q=xe.enabled,ie=xe.autoUpdate,oe=xe.needsUpdate,$=xe.type;Ce(),Z.autoReset=A,xe.enabled=q,xe.autoUpdate=ie,xe.needsUpdate=oe,xe.type=$}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){const q=A.target;q.removeEventListener("dispose",Ye),mt(q)}function mt(A){St(A),te.remove(A)}function St(A){const q=te.get(A).programs;q!==void 0&&(q.forEach(function(ie){ue.releaseProgram(ie)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ie,oe,$,Ee){q===null&&(q=le);const Le=$.isMesh&&$.matrixWorld.determinant()<0,Fe=fp(A,q,ie,oe,$);U.setMaterial(oe,Le);let Oe=ie.index,He=1;if(oe.wireframe===!0){if(Oe=V.getWireframeAttribute(ie),Oe===void 0)return;He=2}const ke=ie.drawRange,Be=ie.attributes.position;let it=ke.start*He,ut=(ke.start+ke.count)*He;Ee!==null&&(it=Math.max(it,Ee.start*He),ut=Math.min(ut,(Ee.start+Ee.count)*He)),Oe!==null?(it=Math.max(it,0),ut=Math.min(ut,Oe.count)):Be!=null&&(it=Math.max(it,0),ut=Math.min(ut,Be.count));const gt=ut-it;if(gt<0||gt===1/0)return;We.setup($,oe,Fe,ie,Oe);let Jt,Je=Se;if(Oe!==null&&(Jt=W.get(Oe),Je=Ve,Je.setIndex(Jt)),$.isMesh)oe.wireframe===!0?(U.setLineWidth(oe.wireframeLinewidth*Q()),Je.setMode(g.LINES)):Je.setMode(g.TRIANGLES);else if($.isLine){let ze=oe.linewidth;ze===void 0&&(ze=1),U.setLineWidth(ze*Q()),$.isLineSegments?Je.setMode(g.LINES):$.isLineLoop?Je.setMode(g.LINE_LOOP):Je.setMode(g.LINE_STRIP)}else $.isPoints?Je.setMode(g.POINTS):$.isSprite&&Je.setMode(g.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Je.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))Je.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ze=$._multiDrawStarts,Lt=$._multiDrawCounts,Qe=$._multiDrawCount,_n=Oe?W.get(Oe).bytesPerElement:1,or=te.get(oe).currentProgram.getUniforms();for(let Qt=0;Qt<Qe;Qt++)or.setValue(g,"_gl_DrawID",Qt),Je.render(ze[Qt]/_n,Lt[Qt])}else if($.isInstancedMesh)Je.renderInstances(it,gt,$.count);else if(ie.isInstancedBufferGeometry){const ze=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Lt=Math.min(ie.instanceCount,ze);Je.renderInstances(it,gt,Lt)}else Je.render(it,gt)};function Ze(A,q,ie){A.transparent===!0&&A.side===ei&&A.forceSinglePass===!1?(A.side=jt,A.needsUpdate=!0,Hs(A,q,ie),A.side=Pi,A.needsUpdate=!0,Hs(A,q,ie),A.side=ei):Hs(A,q,ie)}this.compile=function(A,q,ie=null){ie===null&&(ie=A),m=Re.get(ie),m.init(q),b.push(m),ie.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),A!==ie&&A.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();const oe=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Fe=Ee[Le];Ze(Fe,ie,$),oe.add(Fe)}else Ze(Ee,ie,$),oe.add(Ee)}),b.pop(),m=null,oe},this.compileAsync=function(A,q,ie=null){const oe=this.compile(A,q,ie);return new Promise($=>{function Ee(){if(oe.forEach(function(Le){te.get(Le).currentProgram.isReady()&&oe.delete(Le)}),oe.size===0){$(A);return}setTimeout(Ee,10)}L.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let $t=null;function kn(A){$t&&$t(A)}function qc(){Ui.stop()}function Yc(){Ui.start()}const Ui=new Hd;Ui.setAnimationLoop(kn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(A){$t=A,ae.setAnimationLoop(A),A===null?Ui.stop():Ui.start()},ae.addEventListener("sessionstart",qc),ae.addEventListener("sessionend",Yc),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(q),q=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,q,R),m=Re.get(A,b.length),m.init(q),b.push(m),N.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ie.setFromProjectionMatrix(N),fe=this.localClippingEnabled,ee=pe.init(this.clippingPlanes,fe),M=ve.get(A,p.length),M.init(),p.push(M),ae.enabled===!0&&ae.isPresenting===!0){const Ee=x.xr.getDepthSensingMesh();Ee!==null&&ta(Ee,q,-1/0,x.sortObjects)}ta(A,q,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(O,me),ye=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ye&&Ne.addToRenderList(M,A),this.info.render.frame++,ee===!0&&pe.beginShadows();const ie=m.state.shadowsArray;xe.render(ie,A,q),ee===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=M.opaque,$=M.transmissive;if(m.setupLights(),q.isArrayCamera){const Ee=q.cameras;if($.length>0)for(let Le=0,Fe=Ee.length;Le<Fe;Le++){const Oe=Ee[Le];jc(oe,$,A,Oe)}ye&&Ne.render(A);for(let Le=0,Fe=Ee.length;Le<Fe;Le++){const Oe=Ee[Le];$c(M,A,Oe,Oe.viewport)}}else $.length>0&&jc(oe,$,A,q),ye&&Ne.render(A),$c(M,A,q);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,q),We.resetDefaultState(),D=-1,ne=null,b.pop(),b.length>0?(m=b[b.length-1],ee===!0&&pe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?M=p[p.length-1]:M=null};function ta(A,q,ie,oe){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ie.intersectsSprite(A)){oe&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Le=X.update(A),Fe=A.material;Fe.visible&&M.push(A,Le,Fe,ie,J.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ie.intersectsObject(A))){const Le=X.update(A),Fe=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),J.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),J.copy(Le.boundingSphere.center)),J.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Fe)){const Oe=Le.groups;for(let He=0,ke=Oe.length;He<ke;He++){const Be=Oe[He],it=Fe[Be.materialIndex];it&&it.visible&&M.push(A,Le,it,ie,J.z,Be)}}else Fe.visible&&M.push(A,Le,Fe,ie,J.z,null)}}const Ee=A.children;for(let Le=0,Fe=Ee.length;Le<Fe;Le++)ta(Ee[Le],q,ie,oe)}function $c(A,q,ie,oe){const $=A.opaque,Ee=A.transmissive,Le=A.transparent;m.setupLightsView(ie),ee===!0&&pe.setGlobalState(x.clippingPlanes,ie),oe&&U.viewport(y.copy(oe)),$.length>0&&zs($,q,ie),Ee.length>0&&zs(Ee,q,ie),Le.length>0&&zs(Le,q,ie),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function jc(A,q,ie,oe){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[oe.id]===void 0&&(m.state.transmissionRenderTarget[oe.id]=new Qi(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Us:si,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const Ee=m.state.transmissionRenderTarget[oe.id],Le=oe.viewport||y;Ee.setSize(Le.z,Le.w);const Fe=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor(H),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),ye&&Ne.render(ie);const Oe=x.toneMapping;x.toneMapping=Ri;const He=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),m.setupLightsView(oe),ee===!0&&pe.setGlobalState(x.clippingPlanes,oe),zs(A,ie,oe),E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee),L.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Be=0,it=q.length;Be<it;Be++){const ut=q[Be],gt=ut.object,Jt=ut.geometry,Je=ut.material,ze=ut.group;if(Je.side===ei&&gt.layers.test(oe.layers)){const Lt=Je.side;Je.side=jt,Je.needsUpdate=!0,Kc(gt,ie,oe,Jt,Je,ze),Je.side=Lt,Je.needsUpdate=!0,ke=!0}}ke===!0&&(E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee))}x.setRenderTarget(Fe),x.setClearColor(H,j),He!==void 0&&(oe.viewport=He),x.toneMapping=Oe}function zs(A,q,ie){const oe=q.isScene===!0?q.overrideMaterial:null;for(let $=0,Ee=A.length;$<Ee;$++){const Le=A[$],Fe=Le.object,Oe=Le.geometry,He=oe===null?Le.material:oe,ke=Le.group;Fe.layers.test(ie.layers)&&Kc(Fe,q,ie,Oe,He,ke)}}function Kc(A,q,ie,oe,$,Ee){A.onBeforeRender(x,q,ie,oe,$,Ee),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(x,q,ie,oe,A,Ee),$.transparent===!0&&$.side===ei&&$.forceSinglePass===!1?($.side=jt,$.needsUpdate=!0,x.renderBufferDirect(ie,q,oe,$,A,Ee),$.side=Pi,$.needsUpdate=!0,x.renderBufferDirect(ie,q,oe,$,A,Ee),$.side=ei):x.renderBufferDirect(ie,q,oe,$,A,Ee),A.onAfterRender(x,q,ie,oe,$,Ee)}function Hs(A,q,ie){q.isScene!==!0&&(q=le);const oe=te.get(A),$=m.state.lights,Ee=m.state.shadowsArray,Le=$.state.version,Fe=ue.getParameters(A,$.state,Ee,q,ie),Oe=ue.getProgramCacheKey(Fe);let He=oe.programs;oe.environment=A.isMeshStandardMaterial?q.environment:null,oe.fog=q.fog,oe.envMap=(A.isMeshStandardMaterial?P:v).get(A.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",Ye),He=new Map,oe.programs=He);let ke=He.get(Oe);if(ke!==void 0){if(oe.currentProgram===ke&&oe.lightsStateVersion===Le)return Jc(A,Fe),ke}else Fe.uniforms=ue.getUniforms(A),A.onBeforeCompile(Fe,x),ke=ue.acquireProgram(Fe,Oe),He.set(Oe,ke),oe.uniforms=Fe.uniforms;const Be=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=pe.uniform),Jc(A,Fe),oe.needsLights=pp(A),oe.lightsStateVersion=Le,oe.needsLights&&(Be.ambientLightColor.value=$.state.ambient,Be.lightProbe.value=$.state.probe,Be.directionalLights.value=$.state.directional,Be.directionalLightShadows.value=$.state.directionalShadow,Be.spotLights.value=$.state.spot,Be.spotLightShadows.value=$.state.spotShadow,Be.rectAreaLights.value=$.state.rectArea,Be.ltc_1.value=$.state.rectAreaLTC1,Be.ltc_2.value=$.state.rectAreaLTC2,Be.pointLights.value=$.state.point,Be.pointLightShadows.value=$.state.pointShadow,Be.hemisphereLights.value=$.state.hemi,Be.directionalShadowMap.value=$.state.directionalShadowMap,Be.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Be.spotShadowMap.value=$.state.spotShadowMap,Be.spotLightMatrix.value=$.state.spotLightMatrix,Be.spotLightMap.value=$.state.spotLightMap,Be.pointShadowMap.value=$.state.pointShadowMap,Be.pointShadowMatrix.value=$.state.pointShadowMatrix),oe.currentProgram=ke,oe.uniformsList=null,ke}function Zc(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Ao.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Jc(A,q){const ie=te.get(A);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function fp(A,q,ie,oe,$){q.isScene!==!0&&(q=le),E.resetTextureUnits();const Ee=q.fog,Le=oe.isMeshStandardMaterial?q.environment:null,Fe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Di,Oe=(oe.isMeshStandardMaterial?P:v).get(oe.envMap||Le),He=oe.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ke=!!ie.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Be=!!ie.morphAttributes.position,it=!!ie.morphAttributes.normal,ut=!!ie.morphAttributes.color;let gt=Ri;oe.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Jt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Je=Jt!==void 0?Jt.length:0,ze=te.get(oe),Lt=m.state.lights;if(ee===!0&&(fe===!0||A!==ne)){const ln=A===ne&&oe.id===D;pe.setState(oe,A,ln)}let Qe=!1;oe.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Lt.state.version||ze.outputColorSpace!==Fe||$.isBatchedMesh&&ze.batching===!1||!$.isBatchedMesh&&ze.batching===!0||$.isBatchedMesh&&ze.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ze.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ze.instancing===!1||!$.isInstancedMesh&&ze.instancing===!0||$.isSkinnedMesh&&ze.skinning===!1||!$.isSkinnedMesh&&ze.skinning===!0||$.isInstancedMesh&&ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ze.instancingMorph===!1&&$.morphTexture!==null||ze.envMap!==Oe||oe.fog===!0&&ze.fog!==Ee||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==pe.numPlanes||ze.numIntersection!==pe.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==ke||ze.morphTargets!==Be||ze.morphNormals!==it||ze.morphColors!==ut||ze.toneMapping!==gt||ze.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,ze.__version=oe.version);let _n=ze.currentProgram;Qe===!0&&(_n=Hs(oe,q,$));let or=!1,Qt=!1,na=!1;const _t=_n.getUniforms(),fi=ze.uniforms;if(U.useProgram(_n.program)&&(or=!0,Qt=!0,na=!0),oe.id!==D&&(D=oe.id,Qt=!0),or||ne!==A){F.reverseDepthBuffer?(de.copy(A.projectionMatrix),Z_(de),J_(de),_t.setValue(g,"projectionMatrix",de)):_t.setValue(g,"projectionMatrix",A.projectionMatrix),_t.setValue(g,"viewMatrix",A.matrixWorldInverse);const ln=_t.map.cameraPosition;ln!==void 0&&ln.setValue(g,re.setFromMatrixPosition(A.matrixWorld)),F.logarithmicDepthBuffer&&_t.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&_t.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,Qt=!0,na=!0)}if($.isSkinnedMesh){_t.setOptional(g,$,"bindMatrix"),_t.setOptional(g,$,"bindMatrixInverse");const ln=$.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),_t.setValue(g,"boneTexture",ln.boneTexture,E))}$.isBatchedMesh&&(_t.setOptional(g,$,"batchingTexture"),_t.setValue(g,"batchingTexture",$._matricesTexture,E),_t.setOptional(g,$,"batchingIdTexture"),_t.setValue(g,"batchingIdTexture",$._indirectTexture,E),_t.setOptional(g,$,"batchingColorTexture"),$._colorsTexture!==null&&_t.setValue(g,"batchingColorTexture",$._colorsTexture,E));const ia=ie.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0)&&De.update($,ie,_n),(Qt||ze.receiveShadow!==$.receiveShadow)&&(ze.receiveShadow=$.receiveShadow,_t.setValue(g,"receiveShadow",$.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(fi.envMap.value=Oe,fi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&q.environment!==null&&(fi.envMapIntensity.value=q.environmentIntensity),Qt&&(_t.setValue(g,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&dp(fi,na),Ee&&oe.fog===!0&&ce.refreshFogUniforms(fi,Ee),ce.refreshMaterialUniforms(fi,oe,K,G,m.state.transmissionRenderTarget[A.id]),Ao.upload(g,Zc(ze),fi,E)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Ao.upload(g,Zc(ze),fi,E),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&_t.setValue(g,"center",$.center),_t.setValue(g,"modelViewMatrix",$.modelViewMatrix),_t.setValue(g,"normalMatrix",$.normalMatrix),_t.setValue(g,"modelMatrix",$.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const ln=oe.uniformsGroups;for(let ra=0,mp=ln.length;ra<mp;ra++){const Qc=ln[ra];B.update(Qc,_n),B.bind(Qc,_n)}}return _n}function dp(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function pp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,q,ie){te.get(A.texture).__webglTexture=q,te.get(A.depthTexture).__webglTexture=ie;const oe=te.get(A);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=ie===void 0,oe.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const ie=te.get(A);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,ie=0){R=A,I=q,C=ie;let oe=!0,$=null,Ee=!1,Le=!1;if(A){const Oe=te.get(A);if(Oe.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(g.FRAMEBUFFER,null),oe=!1;else if(Oe.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Oe.__hasExternalTextures)E.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Be=A.depthTexture;if(Oe.__boundDepthTexture!==Be){if(Be!==null&&te.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Le=!0);const ke=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?$=ke[q][ie]:$=ke[q],Ee=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?$=te.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?$=ke[ie]:$=ke,y.copy(A.viewport),w.copy(A.scissor),Y=A.scissorTest}else y.copy(he).multiplyScalar(K).floor(),w.copy(_e).multiplyScalar(K).floor(),Y=Me;if(U.bindFramebuffer(g.FRAMEBUFFER,$)&&oe&&U.drawBuffers(A,$),U.viewport(y),U.scissor(w),U.setScissorTest(Y),Ee){const Oe=te.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,ie)}else if(Le){const Oe=te.get(A.texture),He=q||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Oe.__webglTexture,ie||0,He)}D=-1},this.readRenderTargetPixels=function(A,q,ie,oe,$,Ee,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){U.bindFramebuffer(g.FRAMEBUFFER,Fe);try{const Oe=A.texture,He=Oe.format,ke=Oe.type;if(!F.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-oe&&ie>=0&&ie<=A.height-$&&g.readPixels(q,ie,oe,$,Ue.convert(He),Ue.convert(ke),Ee)}finally{const Oe=R!==null?te.get(R).__webglFramebuffer:null;U.bindFramebuffer(g.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,q,ie,oe,$,Ee,Le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){const Oe=A.texture,He=Oe.format,ke=Oe.type;if(!F.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-oe&&ie>=0&&ie<=A.height-$){U.bindFramebuffer(g.FRAMEBUFFER,Fe);const Be=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Be),g.bufferData(g.PIXEL_PACK_BUFFER,Ee.byteLength,g.STREAM_READ),g.readPixels(q,ie,oe,$,Ue.convert(He),Ue.convert(ke),0);const it=R!==null?te.get(R).__webglFramebuffer:null;U.bindFramebuffer(g.FRAMEBUFFER,it);const ut=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await K_(g,ut,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Be),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Ee),g.deleteBuffer(Be),g.deleteSync(ut),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,ie=0){A.isTexture!==!0&&(To("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const oe=Math.pow(2,-ie),$=Math.floor(A.image.width*oe),Ee=Math.floor(A.image.height*oe),Le=q!==null?q.x:0,Fe=q!==null?q.y:0;E.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,ie,0,0,Le,Fe,$,Ee),U.unbindTexture()},this.copyTextureToTexture=function(A,q,ie=null,oe=null,$=0){A.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,A=arguments[1],q=arguments[2],$=arguments[3]||0,ie=null);let Ee,Le,Fe,Oe,He,ke;ie!==null?(Ee=ie.max.x-ie.min.x,Le=ie.max.y-ie.min.y,Fe=ie.min.x,Oe=ie.min.y):(Ee=A.image.width,Le=A.image.height,Fe=0,Oe=0),oe!==null?(He=oe.x,ke=oe.y):(He=0,ke=0);const Be=Ue.convert(q.format),it=Ue.convert(q.type);E.setTexture2D(q,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,q.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,q.unpackAlignment);const ut=g.getParameter(g.UNPACK_ROW_LENGTH),gt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Jt=g.getParameter(g.UNPACK_SKIP_PIXELS),Je=g.getParameter(g.UNPACK_SKIP_ROWS),ze=g.getParameter(g.UNPACK_SKIP_IMAGES),Lt=A.isCompressedTexture?A.mipmaps[$]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Lt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Lt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Fe),g.pixelStorei(g.UNPACK_SKIP_ROWS,Oe),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,$,He,ke,Ee,Le,Be,it,Lt.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,$,He,ke,Lt.width,Lt.height,Be,Lt.data):g.texSubImage2D(g.TEXTURE_2D,$,He,ke,Ee,Le,Be,it,Lt),g.pixelStorei(g.UNPACK_ROW_LENGTH,ut),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,gt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Jt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Je),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ze),$===0&&q.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),U.unbindTexture()},this.copyTextureToTexture3D=function(A,q,ie=null,oe=null,$=0){A.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,oe=arguments[1]||null,A=arguments[2],q=arguments[3],$=arguments[4]||0);let Ee,Le,Fe,Oe,He,ke,Be,it,ut;const gt=A.isCompressedTexture?A.mipmaps[$]:A.image;ie!==null?(Ee=ie.max.x-ie.min.x,Le=ie.max.y-ie.min.y,Fe=ie.max.z-ie.min.z,Oe=ie.min.x,He=ie.min.y,ke=ie.min.z):(Ee=gt.width,Le=gt.height,Fe=gt.depth,Oe=0,He=0,ke=0),oe!==null?(Be=oe.x,it=oe.y,ut=oe.z):(Be=0,it=0,ut=0);const Jt=Ue.convert(q.format),Je=Ue.convert(q.type);let ze;if(q.isData3DTexture)E.setTexture3D(q,0),ze=g.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)E.setTexture2DArray(q,0),ze=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,q.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,q.unpackAlignment);const Lt=g.getParameter(g.UNPACK_ROW_LENGTH),Qe=g.getParameter(g.UNPACK_IMAGE_HEIGHT),_n=g.getParameter(g.UNPACK_SKIP_PIXELS),or=g.getParameter(g.UNPACK_SKIP_ROWS),Qt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,gt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,gt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Oe),g.pixelStorei(g.UNPACK_SKIP_ROWS,He),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ke),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(ze,$,Be,it,ut,Ee,Le,Fe,Jt,Je,gt.data):q.isCompressedArrayTexture?g.compressedTexSubImage3D(ze,$,Be,it,ut,Ee,Le,Fe,Jt,gt.data):g.texSubImage3D(ze,$,Be,it,ut,Ee,Le,Fe,Jt,Je,gt),g.pixelStorei(g.UNPACK_ROW_LENGTH,Lt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Qe),g.pixelStorei(g.UNPACK_SKIP_PIXELS,_n),g.pixelStorei(g.UNPACK_SKIP_ROWS,or),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Qt),$===0&&q.generateMipmaps&&g.generateMipmap(ze),U.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),U.unbindTexture()},this.resetState=function(){I=0,C=0,R=null,U.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Oc?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Zo?"display-p3":"srgb"}}class ci extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ae:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new k,r=[],s=[],o=[],a=new k,l=new ft;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Rt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Rt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vc extends Gn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class aE extends Vc{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wc(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const mo=new k,$a=new Wc,ja=new Wc,Ka=new Wc;class lE extends Gn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new k){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(mo.subVectors(r[0],r[1]).add(r[0]),c=mo);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(mo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=mo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),M=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),$a.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,M,m),ja.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,M,m),Ka.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,M,m)}else this.curveType==="catmullrom"&&($a.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ja.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ka.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set($a.calc(l),ja.calc(l),Ka.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xh(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function cE(n,e){const t=1-n;return t*t*e}function uE(n,e){return 2*(1-n)*n*e}function hE(n,e){return n*n*e}function ms(n,e,t,i){return cE(n,e)+uE(n,t)+hE(n,i)}function fE(n,e){const t=1-n;return t*t*t*e}function dE(n,e){const t=1-n;return 3*t*t*n*e}function pE(n,e){return 3*(1-n)*n*n*e}function mE(n,e){return n*n*n*e}function gs(n,e,t,i,r){return fE(n,e)+dE(n,t)+pE(n,i)+mE(n,r)}class Yd extends Gn{constructor(e=new Ae,t=new Ae,i=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ae){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(gs(e,r.x,s.x,o.x,a.x),gs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gE extends Gn{constructor(e=new k,t=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new k){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(gs(e,r.x,s.x,o.x,a.x),gs(e,r.y,s.y,o.y,a.y),gs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $d extends Gn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _E extends Gn{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jd extends Gn{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ms(e,r.x,s.x,o.x),ms(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vE extends Gn{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ms(e,r.x,s.x,o.x),ms(e,r.y,s.y,o.y),ms(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Xh(a,l.x,c.x,u.x,h.x),Xh(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ae().fromArray(r))}return this}}var tc=Object.freeze({__proto__:null,ArcCurve:aE,CatmullRomCurve3:lE,CubicBezierCurve:Yd,CubicBezierCurve3:gE,EllipseCurve:Vc,LineCurve:$d,LineCurve3:_E,QuadraticBezierCurve:jd,QuadraticBezierCurve3:vE,SplineCurve:Kd});class xE extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new tc[r.type]().fromJSON(r))}return this}}class nc extends xE{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new $d(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new jd(this.currentPoint.clone(),new Ae(e,t),new Ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Yd(this.currentPoint.clone(),new Ae(e,t),new Ae(i,r),new Ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Kd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Vc(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cn extends Ln{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new k,u=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=i+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class In extends Ln{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let _=0;const M=[],m=i/2;let p=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function b(){const S=new k,I=new k;let C=0;const R=(t-e)/i;for(let D=0;D<=s;D++){const ne=[],y=D/s,w=y*(t-e)+e;for(let Y=0;Y<=r;Y++){const H=Y/r,j=H*l+a,se=Math.sin(j),G=Math.cos(j);I.x=w*se,I.y=-y*i+m,I.z=w*G,h.push(I.x,I.y,I.z),S.set(se,R,G).normalize(),f.push(S.x,S.y,S.z),d.push(H,1-y),ne.push(_++)}M.push(ne)}for(let D=0;D<r;D++)for(let ne=0;ne<s;ne++){const y=M[ne][D],w=M[ne+1][D],Y=M[ne+1][D+1],H=M[ne][D+1];e>0&&(u.push(y,w,H),C+=3),t>0&&(u.push(w,Y,H),C+=3)}c.addGroup(p,C,0),p+=C}function x(S){const I=_,C=new Ae,R=new k;let D=0;const ne=S===!0?e:t,y=S===!0?1:-1;for(let Y=1;Y<=r;Y++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),_++;const w=_;for(let Y=0;Y<=r;Y++){const j=Y/r*l+a,se=Math.cos(j),G=Math.sin(j);R.x=ne*G,R.y=m*y,R.z=ne*se,h.push(R.x,R.y,R.z),f.push(0,y,0),C.x=se*.5+.5,C.y=G*.5*y+.5,d.push(C.x,C.y),_++}for(let Y=0;Y<r;Y++){const H=I+Y,j=w+Y;S===!0?u.push(j,j+1,H):u.push(j+1,j,H),D+=3}c.addGroup(p,D,S===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yt extends nc{constructor(e){super(e),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new nc().fromJSON(r))}return this}}const yE={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Zd(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(i&&(s=bE(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let _=t;_<r;_+=t)h=n[_],f=n[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Rs(s,o,t,a,l,d,0),o}};function Zd(n,e,t,i,r){let s,o;if(r===FE(n,e,t,i)>0)for(s=e;s<t;s+=i)o=qh(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=qh(s,n[s],n[s+1],o);return o&&ea(o,o.next)&&(Ps(o),o=o.next),o}function er(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ea(t,t.next)||dt(t.prev,t,t.next)===0)){if(Ps(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Rs(n,e,t,i,r,s,o){if(!n)return;!o&&s&&PE(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?SE(n,i,r,s):ME(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Ps(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=EE(er(n),e,t),Rs(n,e,t,i,r,s,2)):o===2&&wE(n,e,t,i,r,s):Rs(er(n),e,t,i,r,s,1);break}}}function ME(n){const e=n.prev,t=n,i=n.next;if(dt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Ar(r,a,s,l,o,c,_.x,_.y)&&dt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function SE(n,e,t,i){const r=n.prev,s=n,o=n.next;if(dt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,M=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=ic(d,_,e,t,i),b=ic(M,m,e,t,i);let x=n.prevZ,S=n.nextZ;for(;x&&x.z>=p&&S&&S.z<=b;){if(x.x>=d&&x.x<=M&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Ar(a,u,l,h,c,f,x.x,x.y)&&dt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=d&&S.x<=M&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&Ar(a,u,l,h,c,f,S.x,S.y)&&dt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=M&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Ar(a,u,l,h,c,f,x.x,x.y)&&dt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=b;){if(S.x>=d&&S.x<=M&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&Ar(a,u,l,h,c,f,S.x,S.y)&&dt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function EE(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!ea(r,s)&&Jd(r,i,i.next,s)&&Cs(r,s)&&Cs(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Ps(i),Ps(i.next),i=n=s),i=i.next}while(i!==n);return er(i)}function wE(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&DE(o,a)){let l=Qd(o,a);o=er(o,o.next),l=er(l,l.next),Rs(o,e,t,i,r,s,0),Rs(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function bE(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Zd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(IE(c));for(r.sort(TE),s=0;s<r.length;s++)t=AE(r[s],t);return t}function TE(n,e){return n.x-e.x}function AE(n,e){const t=RE(n,e);if(!t)return e;const i=Qd(t,n);return er(i,i.next),er(t,t.next)}function RE(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Ar(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Cs(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&CE(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function CE(n,e){return dt(n.prev,n,e.prev)<0&&dt(e.next,n,n.next)<0}function PE(n,e,t,i){let r=n;do r.z===0&&(r.z=ic(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,LE(r)}function LE(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function ic(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function IE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ar(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function DE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!UE(n,e)&&(Cs(n,e)&&Cs(e,n)&&NE(n,e)&&(dt(n.prev,n,e.prev)||dt(n,e.prev,e))||ea(n,e)&&dt(n.prev,n,n.next)>0&&dt(e.prev,e,e.next)>0)}function dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ea(n,e){return n.x===e.x&&n.y===e.y}function Jd(n,e,t,i){const r=_o(dt(n,e,t)),s=_o(dt(n,e,i)),o=_o(dt(t,i,n)),a=_o(dt(t,i,e));return!!(r!==s&&o!==a||r===0&&go(n,t,e)||s===0&&go(n,i,e)||o===0&&go(t,n,i)||a===0&&go(t,e,i))}function go(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function _o(n){return n>0?1:n<0?-1:0}function UE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Jd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Cs(n,e){return dt(n.prev,n,n.next)<0?dt(n,e,n.next)>=0&&dt(n,n.prev,e)>=0:dt(n,e,n.prev)<0||dt(n,n.next,e)<0}function NE(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Qd(n,e){const t=new rc(n.i,n.x,n.y),i=new rc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function qh(n,e,t,i){const r=new rc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ps(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function rc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function FE(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ur{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ur.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Yh(e),$h(i,e);let o=e.length;t.forEach(Yh);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,$h(i,t[l]);const a=yE.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Yh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $h(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Kt extends Ln{constructor(e=new Yt([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ct(r,3)),this.setAttribute("uv",new Ct(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:OE;let x,S=!1,I,C,R,D;p&&(x=p.getSpacedPoints(u),S=!0,f=!1,I=p.computeFrenetFrames(u,!1),C=new k,R=new k,D=new k),f||(m=0,d=0,_=0,M=0);const ne=a.extractPoints(c);let y=ne.shape;const w=ne.holes;if(!Ur.isClockWise(y)){y=y.reverse();for(let Q=0,g=w.length;Q<g;Q++){const T=w[Q];Ur.isClockWise(T)&&(w[Q]=T.reverse())}}const H=Ur.triangulateShape(y,w),j=y;for(let Q=0,g=w.length;Q<g;Q++){const T=w[Q];y=y.concat(T)}function se(Q,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(g,T)}const G=y.length,K=H.length;function O(Q,g,T){let L,F,U;const Z=Q.x-g.x,te=Q.y-g.y,E=T.x-Q.x,v=T.y-Q.y,P=Z*Z+te*te,W=Z*v-te*E;if(Math.abs(W)>Number.EPSILON){const V=Math.sqrt(P),X=Math.sqrt(E*E+v*v),ue=g.x-te/V,ce=g.y+Z/V,ve=T.x-v/X,Re=T.y+E/X,pe=((ve-ue)*v-(Re-ce)*E)/(Z*v-te*E);L=ue+Z*pe-Q.x,F=ce+te*pe-Q.y;const xe=L*L+F*F;if(xe<=2)return new Ae(L,F);U=Math.sqrt(xe/2)}else{let V=!1;Z>Number.EPSILON?E>Number.EPSILON&&(V=!0):Z<-Number.EPSILON?E<-Number.EPSILON&&(V=!0):Math.sign(te)===Math.sign(v)&&(V=!0),V?(L=-te,F=Z,U=Math.sqrt(P)):(L=Z,F=te,U=Math.sqrt(P/2))}return new Ae(L/U,F/U)}const me=[];for(let Q=0,g=j.length,T=g-1,L=Q+1;Q<g;Q++,T++,L++)T===g&&(T=0),L===g&&(L=0),me[Q]=O(j[Q],j[T],j[L]);const he=[];let _e,Me=me.concat();for(let Q=0,g=w.length;Q<g;Q++){const T=w[Q];_e=[];for(let L=0,F=T.length,U=F-1,Z=L+1;L<F;L++,U++,Z++)U===F&&(U=0),Z===F&&(Z=0),_e[L]=O(T[L],T[U],T[Z]);he.push(_e),Me=Me.concat(_e)}for(let Q=0;Q<m;Q++){const g=Q/m,T=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+M;for(let F=0,U=j.length;F<U;F++){const Z=se(j[F],me[F],L);N(Z.x,Z.y,-T)}for(let F=0,U=w.length;F<U;F++){const Z=w[F];_e=he[F];for(let te=0,E=Z.length;te<E;te++){const v=se(Z[te],_e[te],L);N(v.x,v.y,-T)}}}const Ie=_+M;for(let Q=0;Q<G;Q++){const g=f?se(y[Q],Me[Q],Ie):y[Q];S?(R.copy(I.normals[0]).multiplyScalar(g.x),C.copy(I.binormals[0]).multiplyScalar(g.y),D.copy(x[0]).add(R).add(C),N(D.x,D.y,D.z)):N(g.x,g.y,0)}for(let Q=1;Q<=u;Q++)for(let g=0;g<G;g++){const T=f?se(y[g],Me[g],Ie):y[g];S?(R.copy(I.normals[Q]).multiplyScalar(T.x),C.copy(I.binormals[Q]).multiplyScalar(T.y),D.copy(x[Q]).add(R).add(C),N(D.x,D.y,D.z)):N(T.x,T.y,h/u*Q)}for(let Q=m-1;Q>=0;Q--){const g=Q/m,T=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+M;for(let F=0,U=j.length;F<U;F++){const Z=se(j[F],me[F],L);N(Z.x,Z.y,h+T)}for(let F=0,U=w.length;F<U;F++){const Z=w[F];_e=he[F];for(let te=0,E=Z.length;te<E;te++){const v=se(Z[te],_e[te],L);S?N(v.x,v.y+x[u-1].y,x[u-1].x+T):N(v.x,v.y,h+T)}}}ee(),fe();function ee(){const Q=r.length/3;if(f){let g=0,T=G*g;for(let L=0;L<K;L++){const F=H[L];re(F[2]+T,F[1]+T,F[0]+T)}g=u+m*2,T=G*g;for(let L=0;L<K;L++){const F=H[L];re(F[0]+T,F[1]+T,F[2]+T)}}else{for(let g=0;g<K;g++){const T=H[g];re(T[2],T[1],T[0])}for(let g=0;g<K;g++){const T=H[g];re(T[0]+G*u,T[1]+G*u,T[2]+G*u)}}i.addGroup(Q,r.length/3-Q,0)}function fe(){const Q=r.length/3;let g=0;de(j,g),g+=j.length;for(let T=0,L=w.length;T<L;T++){const F=w[T];de(F,g),g+=F.length}i.addGroup(Q,r.length/3-Q,1)}function de(Q,g){let T=Q.length;for(;--T>=0;){const L=T;let F=T-1;F<0&&(F=Q.length-1);for(let U=0,Z=u+m*2;U<Z;U++){const te=G*U,E=G*(U+1),v=g+L+te,P=g+F+te,W=g+F+E,V=g+L+E;J(v,P,W,V)}}}function N(Q,g,T){l.push(Q),l.push(g),l.push(T)}function re(Q,g,T){le(Q),le(g),le(T);const L=r.length/3,F=b.generateTopUV(i,r,L-3,L-2,L-1);ye(F[0]),ye(F[1]),ye(F[2])}function J(Q,g,T,L){le(Q),le(g),le(L),le(g),le(T),le(L);const F=r.length/3,U=b.generateSideWallUV(i,r,F-6,F-3,F-2,F-1);ye(U[0]),ye(U[1]),ye(U[3]),ye(U[1]),ye(U[2]),ye(U[3])}function le(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function ye(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return BE(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new tc[r.type]().fromJSON(r)),new Kt(i,e.options)}}const OE={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Ae(s,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],_=e[r*3+2],M=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-h),new Ae(f,1-_),new Ae(M,1-p)]:[new Ae(a,1-l),new Ae(u,1-h),new Ae(d,1-_),new Ae(m,1-p)]}};function BE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class be extends Ln{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new k,f=new k,d=[],_=[],M=[],m=[];for(let p=0;p<=i;p++){const b=[],x=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){const C=I/t;h.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),m.push(C+S,1-x),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const x=u[p][b+1],S=u[p][b],I=u[p+1][b],C=u[p+1][b+1];(p!==0||o>0)&&d.push(x,S,C),(p!==i-1||l<Math.PI)&&d.push(S,I,C)}this.setIndex(d),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(M,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new be(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ls extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ke extends Ls{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Oo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class zE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const HE=new zE;class Yr{constructor(e){this.manager=e!==void 0?e:HE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class GE extends Error{constructor(e,t){super(e),this.response=t}}class kE extends Yr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Oo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:i,onError:r});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Kn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let M=0;const m=new ReadableStream({start(p){b();function b(){h.read().then(({done:x,value:S})=>{if(x)p.close();else{M+=S.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:M,total:d});for(let C=0,R=u.length;C<R;C++){const D=u[C];D.onProgress&&D.onProgress(I)}p.enqueue(S),b()}},x=>{p.error(x)})}}});return new Response(m)}else throw new GE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Oo.add(e,c);const u=Kn[e];delete Kn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ep extends Yr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Oo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=As("img");function l(){u(),Oo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class VE extends Yr{constructor(e){super(e)}load(e,t,i,r){const s=new Hc;s.colorSpace=En;const o=new ep(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class WE extends Yr{constructor(e){super(e)}load(e,t,i,r){const s=new qt,o=new ep(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Xc extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Za=new ft,jh=new k,Kh=new k;class tp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(jh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),Za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zh=new ft,ns=new k,Ja=new k;class XE extends tp{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ns.setFromMatrixPosition(e.matrixWorld),i.position.copy(ns),Ja.copy(i.position),Ja.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ja),i.updateMatrixWorld(),r.makeTranslation(-ns.x,-ns.y,-ns.z),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh)}}class rr extends Xc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new XE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qE extends tp{constructor(){super(new Gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ui extends Xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new qE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hi extends Xc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class YE{constructor(){this.type="ShapePath",this.color=new Ge,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new nc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const b=[];for(let x=0,S=p.length;x<S;x++){const I=p[x],C=new Yt;C.curves=I.curves,b.push(C)}return b}function i(p,b){const x=b.length;let S=!1;for(let I=x-1,C=0;C<x;I=C++){let R=b[I],D=b[C],ne=D.x-R.x,y=D.y-R.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(R=b[C],ne=-ne,D=b[I],y=-y),p.y<R.y||p.y>D.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const w=y*(p.x-R.x)-ne*(p.y-R.y);if(w===0)return!0;if(w<0)continue;S=!S}}else{if(p.y!==R.y)continue;if(D.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=D.x)return!0}}return S}const r=Ur.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Yt,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],_=0,M;f[_]=void 0,d[_]=[];for(let p=0,b=s.length;p<b;p++)a=s[p],M=a.getPoints(),o=r(M),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new Yt,p:M},f[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:M[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,b=0;for(let x=0,S=f.length;x<S;x++)h[x]=[];for(let x=0,S=f.length;x<S;x++){const I=d[x];for(let C=0;C<I.length;C++){const R=I[C];let D=!0;for(let ne=0;ne<f.length;ne++)i(R.p,f[ne].p)&&(x!==ne&&b++,D?(D=!1,h[ne].push(R)):p=!0);D&&h[x].push(R)}}b>0&&p===!1&&(d=h)}let m;for(let p=0,b=f.length;p<b;p++){l=f[p].s,c.push(l),m=d[p];for(let x=0,S=m.length;x<S;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);class sr extends Yr{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new kE(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new $E(e)}}class $E{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=jE(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function jE(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const h=KE(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function KE(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new YE;let a,l,c,u,h,f,d,_;if(s.o){const M=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=M.length;m<p;)switch(M[m++]){case"m":a=M[m++]*e+t,l=M[m++]*e+i,o.moveTo(a,l);break;case"l":a=M[m++]*e+t,l=M[m++]*e+i,o.lineTo(a,l);break;case"q":c=M[m++]*e+t,u=M[m++]*e+i,h=M[m++]*e+t,f=M[m++]*e+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=M[m++]*e+t,u=M[m++]*e+i,h=M[m++]*e+t,f=M[m++]*e+i,d=M[m++]*e+t,_=M[m++]*e+i,o.bezierCurveTo(h,f,d,_,c,u);break}}return{offsetX:s.ha*e,path:o}}class on extends Kt{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const ZE=Zt({__name:"PinkBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return pn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.03,o.render(r,s)};const r=new ci,s=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new li({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new hi(16777215,.6);r.add(a);const l=new ui(16777215,1.5);l.position.set(5,5,5),r.add(l);const c=new rr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new xt({uniforms:{time:{value:0},color1:{value:new Ge(16766720)},color2:{value:new Ge(16007990)}},vertexShader:`
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
        `}),h=new Ke({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new Ke({color:13369344,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99}),d=new pt,_=new be(1,32,32),M=new z(_,h);M.scale.set(.85,.85,.8),M.position.y=-.2,d.add(M);const m=new be(.6,32,32),p=new z(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const b=new be(.25,32,32),x=new z(b,h);x.position.set(-.45,1.35,-.1),d.add(x);const S=new z(b,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new be(.25,32,32),C=new z(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new Yt;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ne=new Kt(R,D),y=new z(ne,f);y.scale.set(.5,.5,.5),y.position.set(0,.34,.8),y.rotation.y=Math.PI,y.rotation.x=Math.PI,d.add(y);const w=new be(.35,32,32),Y=new z(w,h);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),d.add(Y);const H=new z(w,h);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),d.add(H);const j=new In(.2,.22,.6,32),se=new z(j,h);se.position.set(-.4,-1.05,0),d.add(se);const G=new z(j,h);G.position.set(.4,-1.05,0),d.add(G);const K=new be(.3,32,32),O=new z(K,h);O.scale.set(1,.72,1.5),O.position.set(-.4,-1.45,.17),d.add(O);const me=new z(K,h);me.scale.set(1,.72,1.5),me.position.set(.4,-1.45,.17),d.add(me);const he=new be(.44,32,32),_e=new z(he,h);_e.position.set(-.15,-.45,-.4),d.add(_e);const Me=new z(he,h);Me.position.set(.15,-.45,-.4),d.add(Me);const Ie=new be(.18,32,32),ee=new z(Ie,f);ee.position.set(0,-.35,-.8),d.add(ee),new sr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(J){const le=new on("X",{font:J,size:.2,depth:.05}),ye=new Et({color:0}),Q=new z(le,ye);Q.position.set(-.34,1,.5),d.add(Q)});const de=new be(.1,32,32),N=new Et({color:0}),re=new z(de,N);re.position.set(.2,1.1,.54),d.add(re),r.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),Bt(()=>e.bodyPosition,J=>{d.position.set(J.x,J.y,J.z)}),Bt(()=>e.cameraPosition,J=>{s.position.set(e.bodyPosition.x,1,J),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(an(),mn("div",{ref_key:"threeCanvas",ref:t,class:oi(n.background?"no-bg":"three-canvas")},null,2))}}),np=gn(ZE,[["__scopeId","data-v-d0efbfd4"]]),JE=Zt({__name:"PurpleBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return pn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.03,o.render(r,s)};const r=new ci,s=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new li({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new hi(16777215,.6);r.add(a);const l=new ui(16777215,1.5);l.position.set(5,5,5),r.add(l);const c=new rr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new xt({uniforms:{time:{value:0},color1:{value:new Ge(16766720)},color2:{value:new Ge(16007990)}},vertexShader:`
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
            `}),h=new Ke({color:10573288,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});new Ke({color:16766720,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99});const f=new Ke({color:16766720,metalness:.05,roughness:10,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),d=new pt,_=new be(1,32,32),M=new z(_,h);M.scale.set(.85,.85,.8),M.position.y=-.2,d.add(M);const m=new be(.6,32,32),p=new z(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const b=new be(.25,32,32),x=new z(b,h);x.position.set(-.45,1.35,-.1),d.add(x);const S=new z(b,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new be(.25,32,32),C=new z(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new Yt;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ne=new Kt(R,D),y=new z(ne,u);y.scale.set(.5,.5,.5),y.position.set(0,.34,.8),y.rotation.y=Math.PI,y.rotation.x=Math.PI,d.add(y);const w=new be(.35,32,32),Y=new z(w,h);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),d.add(Y);const H=new z(w,h);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),d.add(H);const j=new In(.2,.22,.6,32),se=new z(j,h);se.position.set(-.4,-1.05,0),d.add(se);const G=new z(j,h);G.position.set(.4,-1.05,0),d.add(G);const K=new be(.3,32,32),O=new z(K,h);O.scale.set(1,.72,1.5),O.position.set(-.4,-1.45,.17),d.add(O);const me=new z(K,h);me.scale.set(1,.72,1.5),me.position.set(.4,-1.45,.17),d.add(me);const he=new be(.44,32,32),_e=new z(he,h);_e.position.set(-.15,-.45,-.4),d.add(_e);const Me=new z(he,h);Me.position.set(.15,-.45,-.4),d.add(Me);const Ie=new be(.18,32,32),ee=new z(Ie,f);ee.position.set(0,-.35,-.8),d.add(ee),new sr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(de){const N=new on("X",{font:de,size:.2,depth:.05}),re=new Et({color:0}),J=new z(N,re);J.position.set(-.34,1,.5),d.add(J);const le=new on("O",{font:de,size:.2,depth:.05}),ye=new Et({color:0}),Q=new z(le,ye);Q.position.set(.16,1,.53),Q.rotation.y=at.degToRad(32),d.add(Q)}),r.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),Bt(()=>e.bodyPosition,de=>{d.position.set(de.x,de.y,de.z)}),Bt(()=>e.cameraPosition,de=>{s.position.set(e.bodyPosition.x,1,de),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(an(),mn("div",{ref_key:"threeCanvas",ref:t,class:oi(n.background?"no-bg":"three-canvas")},null,2))}}),ip=gn(JE,[["__scopeId","data-v-46de1bfd"]]),QE=Zt({__name:"BlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return pn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.04,o.render(r,s)};const r=new ci,s=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new li({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new hi(16777215,.6);r.add(a);const l=new ui(16777215,1.2);l.position.set(5,5,5),r.add(l);const c=new rr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new xt({uniforms:{time:{value:0},color1:{value:new Ge(16766720)},color2:{value:new Ge(16007990)}},vertexShader:`
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
        `}),h=new Ke({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new Ke({color:16745921,metalness:.5,roughness:30,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),d=new pt,_=new be(1,32,32),M=new z(_,h);M.scale.set(.85,.85,.8),M.position.y=-.2,d.add(M);const m=new be(.6,32,32),p=new z(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const b=new be(.25,32,32),x=new z(b,h);x.position.set(-.45,1.35,-.1),d.add(x);const S=new z(b,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new be(.25,32,32),C=new z(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new Yt;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ne=new Kt(R,D),y=new z(ne,f);y.scale.set(.5,.5,.5),y.position.set(0,.34,.8),y.rotation.y=Math.PI,y.rotation.x=Math.PI,d.add(y);const w=new be(.35,32,32),Y=new z(w,h);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),d.add(Y);const H=new z(w,h);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),d.add(H);const j=new In(.2,.22,.6,32),se=new z(j,h);se.position.set(-.4,-1.05,0),d.add(se);const G=new z(j,h);G.position.set(.4,-1.05,0),d.add(G);const K=new be(.3,32,32),O=new z(K,h);O.scale.set(1,.72,1.5),O.position.set(-.4,-1.45,.17),d.add(O);const me=new z(K,h);me.scale.set(1,.72,1.5),me.position.set(.4,-1.45,.17),d.add(me);const he=new be(.44,32,32),_e=new z(he,h);_e.position.set(-.15,-.45,-.4),d.add(_e);const Me=new z(he,h);Me.position.set(.15,-.45,-.4),d.add(Me);const Ie=new be(.18,32,32),ee=new z(Ie,f);ee.position.set(0,-.35,-.8),d.add(ee),new sr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(de){const N=new on("X",{font:de,size:.2,depth:.05}),re=new Et({color:0}),J=new z(N,re);J.position.set(-.34,1,.5),d.add(J);const le=new on("X",{font:de,size:.2,depth:.05}),ye=new Et({color:0}),Q=new z(le,ye);Q.position.set(.16,1,.53),Q.rotation.y=at.degToRad(32),d.add(Q)}),r.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),Bt(()=>e.bodyPosition,de=>{d.position.set(de.x,de.y,de.z)}),Bt(()=>e.cameraPosition,de=>{s.position.set(e.bodyPosition.x,1,de),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(an(),mn("div",{ref_key:"threeCanvas",ref:t,class:oi(n.background?"no-bg":"three-canvas")},null,2))}}),rp=gn(QE,[["__scopeId","data-v-369ed91d"]]),ew={key:0,class:"bear-face-container"},tw=Zt({__name:"BearFace",setup(n){const e=wt(null),t=wt(!1),i=()=>{t.value=!0};return pn(()=>{const r=e.value;if(r){r.width=window.innerWidth,r.height=window.innerHeight*.6;const s=r.getContext("2d");s&&(()=>{const a=r.width/2,l=r.height/1.9,c=r.height/2.5,u=r.height/2.58,h=c*.45,f=c*.18,d=c*.3,_=c*.275,M=d*.35,m=d*.32;s.save(),s.beginPath(),s.rect(0,0,r.width/2,r.height),s.clip(),s.lineWidth=15,s.strokeStyle="#000000",s.beginPath(),s.arc(a-c*.85,l-u*.8,h,0,Math.PI*2,!0),s.stroke(),s.beginPath(),s.arc(a+c*.85,l-c*.8,h,0,Math.PI*2,!0),s.stroke(),s.lineWidth=15,s.beginPath(),s.arc(a,l,u,0,Math.PI*2,!0),s.stroke(),s.lineWidth=15,s.beginPath(),s.arc(a-c*.4,l-c*.2,f,0,Math.PI*2,!0),s.stroke(),s.beginPath(),s.moveTo(a+c*.2,l-c*.3),s.lineTo(a+c*.5,l-c*.05),s.moveTo(a+c*.5,l-c*.3),s.lineTo(a+c*.2,l-c*.05),s.stroke(),s.beginPath(),s.ellipse(a,l+c*.4,_*1.5,_,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.arc(a,l+c*.3,m,0,Math.PI*2,!0),s.stroke(),s.restore(),s.save(),s.beginPath(),s.rect(r.width/2,0,r.width/2,r.height),s.clip(),s.fillStyle="#FF69B4",s.beginPath(),s.arc(a-c*.85,l-c*.8,h,0,Math.PI*2,!0),s.fill(),s.beginPath(),s.arc(a+c*.85,l-c*.8,h,0,Math.PI*2,!0),s.fill(),s.beginPath(),s.arc(a,l,c,0,Math.PI*2,!0),s.fill(),s.fillStyle="#000000",s.beginPath(),s.arc(a-c*.4,l-c*.2,f,0,Math.PI*2,!0),s.fill(),s.lineWidth=15,s.beginPath(),s.moveTo(a+c*.2,l-c*.3),s.lineTo(a+c*.5,l-c*.05),s.moveTo(a+c*.5,l-c*.3),s.lineTo(a+c*.2,l-c*.05),s.strokeStyle="#000000",s.stroke(),s.fillStyle="#F0E68C",s.beginPath(),s.ellipse(a,l+c*.4,d*1.5,d,0,0,Math.PI*2),s.fill(),s.fillStyle="#000000",s.beginPath(),s.arc(a,l+c*.3,M*1.2,0,Math.PI*2,!0),s.fill(),s.restore()})()}}),(r,s)=>t.value?s0("",!0):(an(),mn("div",ew,[Ss("canvas",{ref_key:"bearCanvas",ref:e},null,512),Ss("button",{onClick:i,class:"pixel-button"},"Enter")]))}}),nw=gn(tw,[["__scopeId","data-v-9cd3b2cf"]]),sp=wt(window.matchMedia("only screen and (max-width: 475px)").matches),op=wt(window.matchMedia("only screen and (max-width: 580px)").matches),ap=wt(window.matchMedia("only screen and (max-width: 670px)").matches),lp=wt(window.matchMedia("only screen and (max-width: 768px)").matches),cp=wt(window.matchMedia("only screen and (max-width: 850px)").matches),up=wt(window.matchMedia("only screen and (max-width: 1024px)").matches),iw=new ResizeObserver(()=>{sp.value=window.matchMedia("only screen and (max-width: 475px)").matches,op.value=window.matchMedia("only screen and (max-width: 580px)").matches,ap.value=window.matchMedia("only screen and (max-width: 670px)").matches,lp.value=window.matchMedia("only screen and (max-width: 768px)").matches,cp.value=window.matchMedia("only screen and (max-width: 850px)").matches,up.value=window.matchMedia("only screen and (max-width: 1024px)").matches});iw.observe(document.documentElement);It(()=>sp.value);const Qa=It(()=>op.value);It(()=>lp.value);It(()=>up.value);It(()=>ap.value);const el=It(()=>cp.value),rw={class:"flex"},sw=Zt({__name:"ThreeScene",setup(n){const e=wt(!0);let t;const i=()=>{e.value=!e.value};return pn(()=>{t=setInterval(()=>{i()},3e3)}),Ec(()=>{clearInterval(t)}),(r,s)=>(an(),mn("div",rw,[st(nw,{class:"bear-background"}),st(np,{background:!0,cameraPosition:un(Qa)?13:un(el)?8:6,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),st(ip,{background:!0,cameraPosition:un(Qa)?10:un(el)?6:4,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),st(rp,{background:!0,cameraPosition:un(Qa)?13:un(el)?8:6,bodyPosition:{x:-18,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"])]))}}),ow=gn(sw,[["__scopeId","data-v-d3ef8993"]]),aw=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,lw=`
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
`,cw=Zt({__name:"DiamondBear",setup(n){const e=wt(null);return pn(()=>{const t=new ci,i=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),r=new li({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(r.domElement);const s=new hi(16777215,5);t.add(s);const o=new ui(16777215,20);o.position.set(5,5,5),t.add(o);const a=new xt({uniforms:{time:{value:0}},vertexShader:aw,fragmentShader:lw,transparent:!0,opacity:.1}),l=new pt,c=new be(1,32,32),u=new z(c,a);u.scale.set(.85,.85,.8),u.position.y=-.2,l.add(u);const h=new be(.6,32,32),f=new z(h,a);f.scale.set(1,.95,.95),f.position.set(0,1,0),l.add(f);const d=new be(.25,32,32),_=new z(d,a);_.position.set(-.45,1.35,-.1),l.add(_);const M=new z(d,a);M.position.set(.45,1.35,-.1),l.add(M);const m=new be(.25,32,32),p=new z(m,a);p.scale.set(1,.6,.8),p.position.set(0,.85,.5),l.add(p);const b=new be(.35,32,32),x=new z(b,a);x.scale.set(.75,1.25,.65),x.position.set(-.7,-.15,.2),l.add(x);const S=new z(b,a);S.scale.set(.75,1.25,.65),S.position.set(.7,-.15,.2),l.add(S);const I=new be(.3,32,32),C=new z(I,a);C.scale.set(1,.72,1.5),C.position.set(-.4,-1.45,.17),l.add(C);const R=new z(I,a);R.scale.set(1,.72,1.5),R.position.set(.4,-1.45,.17),l.add(R);const D=new In(.2,.22,.6,32),ne=new z(D,a);ne.position.set(-.4,-1.05,0),l.add(ne);const y=new z(D,a);y.position.set(.4,-1.05,0),l.add(y);const w=new be(.44,32,32),Y=new z(w,a);Y.position.set(-.15,-.45,-.4),l.add(Y);const H=new z(w,a);H.position.set(.15,-.45,-.4),l.add(H);const j=new be(.18,32,32),se=new z(j,a);se.position.set(0,-.35,-.75),l.add(se);const G=new Ls({color:16738740,metalness:1,roughness:.44}),K=new Ls({color:16776960,metalness:1,roughness:.44}),O=new Yt;O.moveTo(0,.15),O.lineTo(.1,0),O.lineTo(0,-.15),O.lineTo(-.1,0),O.lineTo(0,.15);const me={depth:.07,bevelEnabled:!1},he=new Kt(O,me),_e=new z(he,G);_e.position.set(-.25,1,.5),_e.rotation.y=Math.PI/30,l.add(_e);const Me=new z(he,K);Me.position.set(.25,1,.5),Me.rotation.y=Math.PI/30,l.add(Me),t.add(l),i.position.set(0,1,4),i.lookAt(0,0,0);function Ie(){requestAnimationFrame(Ie),a.uniforms.time.value+=.1,l.rotation.y+=.02,r.render(t,i)}Ie(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(an(),mn("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),uw=gn(cw,[["__scopeId","data-v-a7796925"]]),Jh=`
  varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
  `,Qh=`
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
  `,hw=Zt({__name:"GlassBear",setup(n){const e=wt(null);return pn(()=>{const t=new ci,i=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),r=new li({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(r.domElement);const s=new hi(16777215,.5);t.add(s);const o=new ui(16777215,10);o.position.set(5,5,5),t.add(o);const a=new xt({uniforms:{time:{value:0},opacity:{value:.8}},vertexShader:Jh,fragmentShader:Qh,transparent:!0}),l=new xt({uniforms:{time:{value:0},opacity:{value:.6}},vertexShader:Jh,fragmentShader:Qh,transparent:!0,depthWrite:!1}),c=new pt,u=new be(1,32,32),h=new z(u,l);h.scale.set(.85,.85,.8),h.position.y=-.2,c.add(h);const f=new be(.6,32,32),d=new z(f,l);d.scale.set(1,.95,.95),d.position.set(0,1,0),c.add(d);const _=new be(.25,32,32),M=new z(_,a);M.position.set(-.45,1.35,-.1),c.add(M);const m=new z(_,l);m.position.set(.45,1.35,-.1),c.add(m);const p=new be(.25,32,32),b=new z(p,a);b.scale.set(1,.6,.8),b.position.set(0,.85,.5),c.add(b);const x=new be(.35,32,32),S=new z(x,a);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),c.add(S);const I=new z(x,a);I.scale.set(.75,1.25,.65),I.position.set(.7,-.15,.2),c.add(I);const C=new be(.3,32,32),R=new z(C,a);R.scale.set(1,.72,1.5),R.position.set(-.4,-1.45,.17),c.add(R);const D=new z(C,a);D.scale.set(1,.72,1.5),D.position.set(.4,-1.45,.17),c.add(D);const ne=new In(.2,.22,.6,32),y=new z(ne,a);y.position.set(-.4,-1.05,0),c.add(y);const w=new z(ne,a);w.position.set(.4,-1.05,0),c.add(w);const Y=new be(.44,32,32);new z(Y,a).position.set(-.15,-.45,-.4),new z(Y,a).position.set(.15,-.45,-.4);const se=new be(.18,32,32),G=new z(se,a);G.position.set(0,-.35,-.75),c.add(G);const K=new Yt;K.moveTo(0,0),K.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),K.bezierCurveTo(-.6,.3,0,.6,0,1),K.bezierCurveTo(0,.6,.6,.3,.6,0),K.bezierCurveTo(.6,-.3,0,-.3,0,0);const O=new Ls({color:8900331,metalness:1,roughness:.44}),me=new Ls({color:16776960,metalness:1,roughness:.44}),he=new Yt;he.moveTo(0,.15),he.lineTo(.1,0),he.lineTo(0,-.15),he.lineTo(-.1,0),he.lineTo(0,.15);const _e={depth:.07,bevelEnabled:!1},Me=new Kt(he,_e),Ie=new z(Me,O);Ie.position.set(-.25,1,.5),Ie.rotation.y=Math.PI/30,c.add(Ie);const ee=new z(Me,me);ee.position.set(.25,1,.5),ee.rotation.y=Math.PI/30,c.add(ee),new Ke({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const fe={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},de=new Ke({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),N=new Kt(K,fe),re=new z(N,de);re.scale.set(.5,.5,.5),re.position.set(0,0,0),re.rotation.y=Math.PI,re.rotation.x=Math.PI,c.add(re);const J=new Yt;J.moveTo(0,.6),J.lineTo(.3,.3),J.lineTo(.6,0),J.lineTo(.3,-.3),J.lineTo(0,-.6),J.lineTo(-.3,-.3),J.lineTo(-.6,0),J.lineTo(-.3,.3),J.lineTo(0,.6);const le={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ye=new Kt(J,le),Q=new Ke({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),g=new z(ye,Q);g.scale.set(.5,.5,.5),g.position.set(0,0,0),t.add(c),i.position.set(0,1,4),i.lookAt(0,0,0);const T=()=>{requestAnimationFrame(T),a.uniforms.time.value+=.03,c.rotation.y+=.03,r.render(t,i)};T(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(an(),mn("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),fw=gn(hw,[["__scopeId","data-v-fa1425bf"]]),dw=Zt({__name:"BluePinkBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return pn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.02,o.render(r,s)};const r=new ci,s=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new li({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new hi(16777215,.6);r.add(a);const l=new ui(16777215,1.5);l.position.set(5,5,5),r.add(l);const c=new rr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new Ke({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),h=new Ke({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=m=>{const p=new pt,b=new be(1,32,32),x=new z(b,m);x.scale.set(.85,.85,.8),x.position.y=-.2,p.add(x);const S=new be(.6,32,32),I=new z(S,m);I.scale.set(1,.95,.95),I.position.set(0,1,0),p.add(I);const C=new be(.25,32,32),R=new z(C,m);R.scale.set(1,.6,.8),R.position.set(0,.85,.5),p.add(R),new sr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ye){const Q=new on("X",{font:ye,size:.18,depth:.05}),g=new Et({color:0}),T=new z(Q,g);T.position.set(-.3,.99,.53),T.rotation.x=at.degToRad(-5),T.rotation.y=at.degToRad(-15),p.add(T);const L=new on("+",{font:ye,size:.25,depth:.1}),F=new Et({color:0}),U=new z(L,F);U.position.set(.14,.99,.53),U.rotation.y=at.degToRad(12),U.rotation.x=at.degToRad(-5),p.add(U)});const ne=new Yt;ne.moveTo(0,0),ne.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),ne.bezierCurveTo(-.6,.3,0,.6,0,1),ne.bezierCurveTo(0,.6,.6,.3,.6,0),ne.bezierCurveTo(.6,-.3,0,-.3,0,0);const y={depth:.05,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.05,bevelThickness:.05},w=new Kt(ne,y),Y=new Et({color:0}),H=new z(w,Y);H.scale.set(.1,.1,.1),H.rotation.z=at.degToRad(210),H.rotation.x=at.degToRad(5),H.rotation.y=at.degToRad(-45),H.position.set(-.4,.9,.45),p.add(H);const j=new be(.25,32,32),se=new z(j,u);se.position.set(-.45,1.35,-.1),p.add(se);const G=new z(j,h);G.position.set(.45,1.35,-.1),p.add(G);const K=new be(.35,32,32),O=new z(K,u);O.scale.set(.75,1.25,.65),O.position.set(-.7,-.15,.2),p.add(O);const me=new z(K,h);me.scale.set(.75,1.25,.65),me.position.set(.7,-.15,.2),p.add(me);const he=new In(.2,.22,.6,32),_e=new z(he,u);_e.position.set(-.4,-1.05,0),p.add(_e);const Me=new z(he,h);Me.position.set(.4,-1.05,0),p.add(Me);const Ie=new be(.3,32,32),ee=new z(Ie,u);ee.scale.set(1,.72,1.5),ee.position.set(-.4,-1.45,.17),p.add(ee);const fe=new z(Ie,h);fe.scale.set(1,.72,1.5),fe.position.set(.4,-1.45,.17),p.add(fe);const de=new be(.44,32,32),N=new z(de,u);N.position.set(-.15,-.45,-.4),p.add(N);const re=new z(de,h);re.position.set(.15,-.45,-.4),p.add(re);const J=new be(.18,32,32),le=new z(J,m);return le.position.set(0,-.35,-.8),p.add(le),p},d=new pt,_=f(u),M=f(h);_.position.x=-.01,M.position.x=.01,d.add(_),d.add(M),r.add(d),s.position.z=4,i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0)}}),(i,r)=>(an(),mn("div",{ref_key:"threeCanvas",ref:t,class:"three-canvas"},null,512))}}),pw=gn(dw,[["__scopeId","data-v-9e6b205d"]]),mw=Zt({__name:"HalfTransparentBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return pn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),p.rotation.y+=.03,u.uniforms.time.value+=.04,o.render(r,s)};const r=new ci,s=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new li({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new hi(16777215,.6);r.add(a);const l=new ui(16777215,1.2);l.position.set(5,5,5),r.add(l);const c=new rr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new xt({uniforms:{time:{value:0},color1:{value:new Ge(16766720)},color2:{value:new Ge(16007990)}},vertexShader:`
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
        `});new Ke({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const h=new Ke({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.39});new Ke({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),new Ke({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const f=new Ke({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),d=`
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
    `,M=new xt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:d,fragmentShader:_,transparent:!0,depthWrite:!1}),m=new xt({uniforms:{time:{value:0},opacity:{value:.4}},vertexShader:d,fragmentShader:_,transparent:!0,depthWrite:!1}),p=new pt,b=new be(1,32,32,0,Math.PI),x=new z(b,m),S=new z(b,M);x.scale.set(.85,.85,.8),S.scale.set(.85,.85,.8),x.position.y=-.2,S.position.y=-.2,x.rotation.y=Math.PI/2,S.rotation.y=Math.PI*1.5;const I=new Cn(1,32),C=new z(I,M);C.scale.set(.85,.85,.8),C.position.set(0,-.2,0),C.rotation.y=Math.PI/2;const R=new pt;R.add(x),R.add(S),R.add(C),p.add(R);const D=new be(.6,32,32,0,Math.PI),ne=new z(D,M);ne.scale.set(1,.95,.95),ne.position.set(0,1,0),ne.rotation.y=Math.PI*1.5;const y=new z(D,m);y.scale.set(1,.95,.95),y.position.set(0,1,0),y.rotation.y=Math.PI/2;const w=new Cn(.6,32),Y=new z(w,M);Y.position.set(0,.97,0),Y.rotation.y=Math.PI/2;const H=new pt;H.add(ne),H.add(y),H.add(Y),p.add(H);const j=new be(.25,32,32),se=new z(j,M);se.position.set(-.45,1.35,-.1),p.add(se);const G=new z(j,m);G.position.set(.45,1.35,-.1),p.add(G);const K=new be(.25,32,32,Math.PI/2,Math.PI),O=new z(K,M);O.scale.set(1,.6,.8),O.position.set(0,.82,.5),O.rotation.y=Math.PI;const me=new be(.25,32,32,Math.PI/2,Math.PI),he=new z(me,m);he.scale.set(1,.6,.8),he.position.set(0,.82,.5),he.rotation.y=0;const _e=new Cn(.25,32),Me=new z(_e,M);Me.scale.set(1.25,.6,.8),Me.position.set(0,.85,.5),Me.rotation.x=Math.PI/2;const Ie=new pt;Ie.add(O),Ie.add(he),Ie.add(Me),p.add(Ie);const ee=new Yt;ee.moveTo(0,0),ee.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),ee.bezierCurveTo(-.6,.3,0,.6,0,1),ee.bezierCurveTo(0,.6,.6,.3,.6,0),ee.bezierCurveTo(.6,-.3,0,-.3,0,0);const fe={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ke({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const de=new Kt(ee,fe),N=new z(de,f);N.scale.set(.5,.5,.5),N.position.set(0,0,0),N.rotation.y=Math.PI,N.rotation.x=Math.PI,p.add(N);const re=new be(.35,32,32),J=new z(re,M);J.scale.set(.75,1.25,.65),J.position.set(-.7,-.15,.2),p.add(J);const le=new z(re,m);le.scale.set(.75,1.25,.65),le.position.set(.7,-.15,.2),p.add(le);const ye=new In(.2,.22,.6,32),Q=new z(ye,M);Q.position.set(-.4,-1.05,0),p.add(Q);const g=new z(ye,m);g.position.set(.4,-1.05,0),p.add(g);const T=new be(.3,32,32),L=new z(T,M);L.scale.set(1,.72,1.5),L.position.set(-.4,-1.45,.17),p.add(L);const F=new z(T,m);F.scale.set(1,.72,1.5),F.position.set(.4,-1.45,.17),p.add(F);const U=new be(.44,32,32),Z=new z(U,M);Z.position.set(-.15,-.45,-.4),p.add(Z);const te=new z(U,h);te.position.set(.15,-.45,-.4),p.add(te);const E=new be(.18,32,32),v=new z(E,f);v.position.set(0,-.35,-.8),p.add(v),new sr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(W){const V=new on("X",{font:W,size:.18,depth:.05}),X=new Et({color:0}),ue=new z(V,X);ue.position.set(-.3,.99,.53),ue.rotation.x=at.degToRad(-5),ue.rotation.y=at.degToRad(-15),p.add(ue);const ce=new on("+",{font:W,size:.25,depth:.1}),ve=new Et({color:0}),Re=new z(ce,ve);Re.position.set(.14,.99,.53),Re.rotation.y=at.degToRad(12),Re.rotation.x=at.degToRad(-5),p.add(Re)}),r.add(p),i(),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),Bt(()=>e.bodyPosition,W=>{p.position.set(W.x,W.y,W.z)}),Bt(()=>e.cameraPosition,W=>{s.position.set(e.bodyPosition.x,1,W),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(an(),mn("div",{ref_key:"threeCanvas",ref:t,class:oi(n.background?"no-bg":"three-canvas")},null,2))}}),gw=gn(mw,[["__scopeId","data-v-7fbce4ad"]]),_w=Zt({__name:"HalfBlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return pn(()=>{if(t.value){let i=function(){requestAnimationFrame(i),xe&&(x.rotation.y+=.03),o.render(r,s)};const r=new ci,s=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new li({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=nr,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new hi(16777215,.6);r.add(a);const l=new ui(16777215,1.2);l.position.set(5,5,5),r.add(l);const c=new rr(16777215,2,50);c.position.set(0,2,4),r.add(c);const u=new xt({uniforms:{time:{value:0},color1:{value:new Ge(16766720)},color2:{value:new Ge(16007990)}},vertexShader:`
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
        `}),h=new Ke({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new Ke({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.35});new Ke({color:13882323,metalness:.7,roughness:.25,clearcoat:.4,clearcoatRoughness:.1,transparent:!1,opacity:1}),new Ke({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,transparent:!0,opacity:.35});const d=new Ke({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.79}),_=new Ke({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),M=new Ke({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),m=`
    varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
    `,p=`
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
    `,b=new xt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:m,fragmentShader:p,transparent:!1,depthWrite:!0}),x=new pt,S=new be(1,32,32,0,Math.PI),I=new z(S,f),C=new z(S,h);I.scale.set(.85,.85,.8),C.scale.set(.85,.85,.8),I.position.y=-.2,C.position.y=-.2,I.rotation.y=Math.PI/2,C.rotation.y=Math.PI*1.5;const R=new Cn(1,32),D=new z(R,h);D.scale.set(.85,.85,.8),D.position.set(0,-.2,0),D.rotation.y=Math.PI/2;const ne=new pt;ne.add(I),ne.add(C),ne.add(D),x.add(ne);const y=new be(.6,32,32,0,Math.PI),w=new z(y,h);w.scale.set(1,.95,.95),w.position.set(0,1,0),w.rotation.y=Math.PI*1.5;const Y=new z(y,f);Y.scale.set(1,.95,.95),Y.position.set(0,1,0),Y.rotation.y=Math.PI/2;const H=new Cn(.6,32),j=new z(H,h);j.position.set(0,1,0),j.rotation.y=Math.PI/2,j.scale.set(1,.95,.95);const se=new pt;se.add(w),se.add(Y),se.add(j),x.add(se);const G=new be(.25,32,32),K=new z(G,h);K.position.set(-.45,1.35,-.1),x.add(K);const O=new z(G,f);O.position.set(.45,1.35,-.1),x.add(O);const me=new be(.25,32,32,Math.PI/2,Math.PI),he=new z(me,h);he.scale.set(1.1,.6,.8),he.position.set(0,.84,.5),he.rotation.y=Math.PI;const _e=new be(.25,32,32,Math.PI/2,Math.PI),Me=new z(_e,f);Me.scale.set(1.1,.6,.8),Me.position.set(0,.84,.5),Me.rotation.y=0;const Ie=new Cn(.25,32),ee=new z(Ie,h);ee.scale.set(.8,.6,.8),ee.position.set(0,.84,.5),ee.rotation.y=Math.PI/2;const fe=new pt;fe.add(he),fe.add(Me),fe.add(ee),x.add(fe);const de=new Yt;de.moveTo(0,0),de.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),de.bezierCurveTo(-.6,.3,0,.6,0,1),de.bezierCurveTo(0,.6,.6,.3,.6,0),de.bezierCurveTo(.6,-.3,0,-.3,0,0);const N={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ke({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const re=new Kt(de,N);new Et({color:0});const J=new z(re,d);J.scale.set(.1,.1,.1),J.rotation.z=at.degToRad(210),J.rotation.x=at.degToRad(5),J.rotation.y=at.degToRad(-45),J.position.set(-.4,.9,.45);const le=new z(re,b);le.scale.set(.5,.5,.5),le.position.set(.35,0,0),le.rotation.y=Math.PI,le.rotation.x=Math.PI,x.add(le);const ye=new z(re,u);ye.scale.set(.35,.35,.35),ye.position.set(.3,0,0),ye.rotation.y=Math.PI,ye.rotation.x=Math.PI;const Q=new z(re,M);Q.scale.set(.25,.25,.25),Q.position.set(.27,.2,0),Q.rotation.y=Math.PI,Q.rotation.x=Math.PI;const g=new z(re,_);g.scale.set(.3,.3,.3),g.position.set(.23,-.5,.3),g.rotation.y=Math.PI,g.rotation.x=Math.PI;const T=new z(re,b);T.scale.set(.4,.4,.4),T.position.set(.27,0,.35),T.rotation.y=Math.PI,T.rotation.x=Math.PI;const L=new be(.35,32,32),F=new z(L,h);F.scale.set(.75,1.25,.65),F.position.set(-.7,-.15,.2),x.add(F);const U=new z(L,f);U.scale.set(.75,1.25,.65),U.position.set(.7,-.15,.2),x.add(U);const Z=new In(.2,.22,.6,32),te=new z(Z,h);te.position.set(-.4,-1.05,0),x.add(te);const E=new z(Z,f);E.position.set(.4,-1.05,0),x.add(E);const v=new be(.3,32,32),P=new z(v,h);P.scale.set(1,.72,1.5),P.position.set(-.4,-1.45,.17),x.add(P);const W=new z(v,f);W.scale.set(1,.72,1.5),W.position.set(.4,-1.45,.17),x.add(W);const V=new be(.44,32,32),X=new z(V,h);X.position.set(-.15,-.45,-.4),x.add(X);const ue=new z(V,f);ue.position.set(.15,-.45,-.4),x.add(ue);const ce=new be(.18,32,32),ve=new z(ce,d);ve.position.set(0,-.35,-.8),x.add(ve),new sr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Se){const Ve=new on("X",{font:Se,size:.18,depth:.05}),Ue=new Et({color:0}),We=new z(Ve,Ue);We.position.set(-.3,.99,.53),We.rotation.x=at.degToRad(-5),We.rotation.y=at.degToRad(-15),x.add(We);const B=new on("+",{font:Se,size:.25,depth:.1}),Ce=new Et({color:0}),ae=new z(B,Ce);ae.position.set(.14,.99,.53),ae.rotation.y=at.degToRad(12),ae.rotation.x=at.degToRad(-5),x.add(ae)}),ve.renderOrder=1,x.scale.set(1.2,1.2,1.2),r.add(x),x.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),s.position.set(e.bodyPosition.x,1,e.cameraPosition),s.lookAt(e.bodyPosition.x,0,0),s.position.z=4;const pe={x:0,y:0};let xe=!0,Ne=null;const De=Se=>{xe=!1,pe.x=Se.clientX/window.innerWidth*2-1,pe.y=-(Se.clientY/window.innerHeight)*2+1;const Ve=pe.x*Math.PI*.2,Ue=pe.y*Math.PI*.2;x.rotation.y=Ve,x.rotation.x=Ue,clearTimeout(Ne),Ne=setTimeout(()=>{xe=!0},500)};window.addEventListener("mousemove",De),u.uniforms.time.value+=.04,i(),Bt(()=>e.bodyPosition,Se=>{x.position.set(Se.x,Se.y,Se.z)}),Bt(()=>e.cameraPosition,Se=>{s.position.set(e.bodyPosition.x,1,Se),s.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(an(),mn("div",{ref_key:"threeCanvas",ref:t,class:oi(n.background?"no-bg":"three-canvas")},null,2))}}),vw=gn(_w,[["__scopeId","data-v-5bf83852"]]),xw=Zt({__name:"SliverBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return pn(()=>{if(t.value){let i=function(){l.visible=!1,M.update(a,s),l.visible=!0,requestAnimationFrame(i)},r=function(){requestAnimationFrame(r),Ce&&(l.rotation.y+=.03),a.render(s,o)};const s=new ci,o=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),a=new li({antialias:!0,alpha:!0});a.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(a.domElement);const l=new pt,c=new hi(16777215,2);s.add(c);const u=new ui(16777215,4);u.position.set(5,5,5),s.add(u);const h=new rr(16777215,5,50);h.position.set(0,2,4),s.add(h);const d=new WE().load("3d-bear-arts/src/assets/gradient_texture.jpg"),_=new zd(256,{format:fn,generateMipmaps:!0,minFilter:Ti}),M=new Bd(1,1e3,_);new Ke({color:16738740,metalness:1,roughness:.1,clearcoat:1,clearcoatRoughness:.1,envMap:d,envMapIntensity:1.5}),new Ke({color:12632256,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.35,envMap:_.texture,envMapIntensity:1.5}),s.add(M),s.environment=_.texture,i();const m=new VE,p=m.load(["https://threejs.org/examples/textures/cube/Park2/posx.jpg","https://threejs.org/examples/textures/cube/Park2/negx.jpg","https://threejs.org/examples/textures/cube/Park2/posy.jpg","https://threejs.org/examples/textures/cube/Park2/negy.jpg","https://threejs.org/examples/textures/cube/Park2/posz.jpg","https://threejs.org/examples/textures/cube/Park2/negz.jpg"]),b=m.load(["path_to_universe_posx.jpg","path_to_universe_negx.jpg","path_to_universe_posy.jpg","path_to_universe_negy.jpg","path_to_universe_posz.jpg","path_to_universe_negz.jpg"]);s.environment=b,s.environment=p;const x=new Ke({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:p,reflectivity:1}),S=new Ke({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,envMap:p,reflectivity:1}),I=new xt({uniforms:{time:{value:0},color1:{value:new Ge(16766720)},color2:{value:new Ge(16007990)}},vertexShader:`
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
          `}),C=new Ke({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.89}),R=new Ke({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),D=new Ke({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),ne=`
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
      `,w=new xt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:ne,fragmentShader:y,transparent:!1,depthWrite:!0}),Y=new be(1,32,32,0,Math.PI),H=new z(Y,S),j=new z(Y,x);H.scale.set(.85,.85,.8),j.scale.set(.85,.85,.8),H.position.y=-.2,j.position.y=-.2,H.rotation.y=Math.PI/2,j.rotation.y=Math.PI*1.5;const se=new Cn(1,32),G=new z(se,x);G.scale.set(.85,.85,.8),G.position.set(0,-.2,0),G.rotation.y=Math.PI/2;const K=new pt;K.add(H),K.add(j),K.add(G),l.add(K);const O=new be(.6,32,32,0,Math.PI),me=new z(O,x);me.scale.set(1,.95,.95),me.position.set(0,1,0),me.rotation.y=Math.PI*1.5;const he=new z(O,S);he.scale.set(1,.95,.95),he.position.set(0,1,0),he.rotation.y=Math.PI/2;const _e=new Cn(.6,32),Me=new z(_e,x);Me.position.set(0,1,0),Me.rotation.y=Math.PI/2,Me.scale.set(1,.95,.95);const Ie=new pt;Ie.add(me),Ie.add(he),Ie.add(Me),l.add(Ie);const ee=new be(.25,32,32),fe=new z(ee,x);fe.position.set(-.45,1.35,-.1),l.add(fe);const de=new z(ee,S);de.position.set(.45,1.35,-.1),l.add(de);const N=new be(.25,32,32,Math.PI/2,Math.PI),re=new z(N,x);re.scale.set(1.1,.6,.8),re.position.set(0,.84,.5),re.rotation.y=Math.PI;const J=new be(.25,32,32,Math.PI/2,Math.PI),le=new z(J,S);le.scale.set(1.1,.6,.8),le.position.set(0,.84,.5),le.rotation.y=0;const ye=new Cn(.25,32),Q=new z(ye,x);Q.scale.set(.8,.6,.8),Q.position.set(0,.84,.5),Q.rotation.y=Math.PI/2;const g=new pt;g.add(re),g.add(le),g.add(Q),l.add(g);const T=new Yt;T.moveTo(0,0),T.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),T.bezierCurveTo(-.6,.3,0,.6,0,1),T.bezierCurveTo(0,.6,.6,.3,.6,0),T.bezierCurveTo(.6,-.3,0,-.3,0,0);const L={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ke({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const F=new Kt(T,L);new Et({color:0});const U=new z(F,C);U.scale.set(.1,.1,.1),U.rotation.z=at.degToRad(210),U.rotation.x=at.degToRad(5),U.rotation.y=at.degToRad(-45),U.position.set(-.4,.9,.45);const Z=new z(F,w);Z.scale.set(.5,.5,.5),Z.position.set(.35,0,0),Z.rotation.y=Math.PI,Z.rotation.x=Math.PI,l.add(Z);const te=new z(F,I);te.scale.set(.35,.35,.35),te.position.set(.3,0,0),te.rotation.y=Math.PI,te.rotation.x=Math.PI;const E=new z(F,D);E.scale.set(.25,.25,.25),E.position.set(.27,.2,0),E.rotation.y=Math.PI,E.rotation.x=Math.PI;const v=new z(F,R);v.scale.set(.3,.3,.3),v.position.set(.23,-.5,.3),v.rotation.y=Math.PI,v.rotation.x=Math.PI;const P=new z(F,w);P.scale.set(.4,.4,.4),P.position.set(.27,0,.35),P.rotation.y=Math.PI,P.rotation.x=Math.PI;const W=new be(.35,32,32),V=new z(W,x);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),l.add(V);const X=new z(W,S);X.scale.set(.75,1.25,.65),X.position.set(.7,-.15,.2),l.add(X);const ue=new In(.2,.22,.6,32),ce=new z(ue,x);ce.position.set(-.4,-1.05,0),l.add(ce);const ve=new z(ue,S);ve.position.set(.4,-1.05,0),l.add(ve);const Re=new be(.3,32,32),pe=new z(Re,x);pe.scale.set(1,.72,1.5),pe.position.set(-.4,-1.45,.17),l.add(pe);const xe=new z(Re,S);xe.scale.set(1,.72,1.5),xe.position.set(.4,-1.45,.17),l.add(xe);const Ne=new be(.44,32,32),De=new z(Ne,x);De.position.set(-.15,-.45,-.4),l.add(De);const Se=new z(Ne,S);Se.position.set(.15,-.45,-.4),l.add(Se);const Ve=new be(.18,32,32),Ue=new z(Ve,w);Ue.position.set(0,-.35,-.8),l.add(Ue),new sr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(we){const Pe=new on("X",{font:we,size:.18,depth:.05});new Et({color:0});const Ye=new z(Pe,w);Ye.position.set(-.3,.99,.53),Ye.rotation.x=at.degToRad(-5),Ye.rotation.y=at.degToRad(-15),l.add(Ye);const mt=new on("+",{font:we,size:.25,depth:.1});new Et({color:0});const St=new z(mt,w);St.position.set(.14,.99,.53),St.rotation.y=at.degToRad(12),St.rotation.x=at.degToRad(-5),l.add(St)}),Ue.renderOrder=1,l.scale.set(1.2,1.2,1.2),s.add(l),l.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),o.position.set(e.bodyPosition.x,1,e.cameraPosition),o.lookAt(e.bodyPosition.x,0,0),o.position.z=4;const B={x:0,y:0};let Ce=!0,ae=null;const ge=we=>{Ce=!1,B.x=we.clientX/window.innerWidth*2-1,B.y=-(we.clientY/window.innerHeight)*2+1;const Pe=B.x*Math.PI*.2,Ye=B.y*Math.PI*.2;l.rotation.y=Pe,l.rotation.x=Ye,clearTimeout(ae),ae=setTimeout(()=>{Ce=!0},500)};window.addEventListener("mousemove",ge),I.uniforms.time.value+=.04,r(),Bt(()=>e.bodyPosition,we=>{l.position.set(we.x,we.y,we.z)}),Bt(()=>e.cameraPosition,we=>{o.position.set(e.bodyPosition.x,1,we),o.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)})}}),(i,r)=>(an(),mn("div",{ref_key:"threeCanvas",ref:t,class:oi(n.background?"no-bg":"three-canvas")},null,2))}}),yw=gn(xw,[["__scopeId","data-v-07775732"]]),Mw=[{path:"/3d-bear-arts",name:"ThreeScene",component:ow},{path:"/3d-bear-arts/half",name:"NewBear",component:vw},{path:"/3d-bear-arts/sliver",name:"SliverBear",component:yw},{path:"/3d-bear-arts/halfTransparent",name:"Transparent",component:gw},{path:"/3d-bear-arts/bluePink",name:"BluePinkBear",component:pw},{path:"/3d-bear-arts/diamond",name:"DiamondBear",component:uw},{path:"/3d-bear-arts/pink",name:"PinkBear",component:np},{path:"/3d-bear-arts/purple",name:"PurpleBear",component:ip},{path:"/3d-bear-arts/blue",name:"BlueBear",component:rp},{path:"/3d-bear-arts/glass",name:"GlassBear",component:fw}],Sw=Xg({history:Mg(),routes:Mw}),hp=z0(W0);hp.use(Sw);hp.mount("#app");
